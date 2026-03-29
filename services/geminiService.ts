import { GoogleGenAI } from "@google/genai";
import { GEMINI_PROMPT, QUESTIONS } from "../constants";
import { VitalCode, type Answers, type Report, type Score } from "../types";

export const getVitalCodeReport = async (answers: Answers): Promise<Report> => {
  // 1. Validación mínima: todas las preguntas deben estar respondidas
  for (const question of QUESTIONS) {
    const value = answers[question.id];

    if (value === undefined || value === null) {
      throw new Error(`Falta respuesta para la pregunta ${question.id}.`);
    }

    if (![1, 2, 3, 4].includes(value)) {
      throw new Error(
        `Respuesta inválida en la pregunta ${question.id}: ${value}. Debe ser 1, 2, 3 o 4.`
      );
    }
  }

  // 2. Cálculo matemático de puntuaciones
  // Escala real del test: 1-4
  // Inversión correcta:
  // 1 -> 4
  // 2 -> 3
  // 3 -> 2
  // 4 -> 1
  const scores: Score[] = Object.values(VitalCode).map((code) => {
    const codeQuestions = QUESTIONS.filter((q) => q.code === code);

    const puntos = codeQuestions.reduce((sum, q) => {
      const ans = answers[q.id];
      const finalAns = q.inversa ? (5 - ans) : ans;
      return sum + finalAns;
    }, 0);

    return { codigo: code, puntos };
  });

  const sortedScores = [...scores].sort((a, b) => b.puntos - a.puntos);
  const principalCandidate = sortedScores[0]?.codigo;

  if (!principalCandidate) {
    throw new Error("No se pudo determinar un código principal.");
  }

  // 3. Cliente Gemini
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  // 4. JSON Schema de salida
  const responseJsonSchema = {
    type: "object",
    properties: {
      resultado: {
        type: "object",
        properties: {
          principal: { type: "string" },
          secundarios: {
            type: "array",
            items: { type: "string" },
          },
          informe: {
            type: "object",
            properties: {
              perfil: { type: "string" },
              descripcion: { type: "string" },
              fortalezas: {
                type: "array",
                items: { type: "string" },
              },
              retos: {
                type: "array",
                items: { type: "string" },
              },
              recomendaciones: {
                type: "array",
                items: { type: "string" },
              },
            },
            required: [
              "perfil",
              "descripcion",
              "fortalezas",
              "retos",
              "recomendaciones",
            ],
          },
        },
        required: ["principal", "secundarios", "informe"],
      },
    },
    required: ["resultado"],
  };

  try {
    const finalPrompt = `
${GEMINI_PROMPT}

DATOS DEL USUARIO:
Puntuaciones calculadas: ${JSON.stringify(scores)}
Código principal candidato: ${principalCandidate}

INSTRUCCIONES IMPORTANTES:
- Usa exactamente estas puntuaciones como base.
- No recalcules las puntuaciones.
- Devuelve únicamente JSON válido.
- Respeta estrictamente el schema solicitado.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: finalPrompt,
      config: {
        responseMimeType: "application/json",
        responseJsonSchema,
        temperature: 0.7,
      },
    });

    const text = response.text;

    if (!text) {
      throw new Error("El modelo no devolvió texto.");
    }

    let parsed: Report;

    try {
      parsed = JSON.parse(text) as Report;
    } catch (parseError) {
      console.error("JSON inválido devuelto por Gemini:", text);
      throw new Error("La respuesta del modelo no era JSON válido.");
    }

    if (!parsed.resultado) {
      throw new Error("La respuesta no contiene 'resultado'.");
    }

    // Inyectamos las puntuaciones calculadas localmente
    (parsed.resultado as any).puntuaciones = scores;

    return parsed;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw error;
  }
};
