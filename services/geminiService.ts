
import { GoogleGenAI, Type } from "@google/genai";
import { GEMINI_PROMPT, QUESTIONS } from '../constants';
import { VitalCode, type Answers, type Report, type Score } from '../types';
const apiKey = "TU_CODIGO_AIZA_AQUÍ";
export const getVitalCodeReport = async (answers: Answers): Promise<Report> => {
  // 1. Cálculo matemático de puntuaciones (se mantiene igual por precisión)
  const scores: Score[] = Object.values(VitalCode).map(code => {
    const codeQuestions = QUESTIONS.filter(q => q.code === code);
    const puntos = codeQuestions.reduce((sum, q) => {
      const ans = answers[q.id] || 0;
      if (ans === 0) return sum;
      const finalAns = q.inversa ? (5 - ans) : ans;
      return sum + finalAns;
    }, 0);
    return { codigo: code, puntos };
  });

  const sortedScores = [...scores].sort((a, b) => b.puntos - a.puntos);
  const principalCandidate = sortedScores[0].codigo;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // 2. Definición del Schema (necesario para la estructura del informe)
  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      resultado: {
        type: Type.OBJECT,
        properties: {
          principal: { type: Type.STRING },
          secundarios: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          informe: {
            type: Type.OBJECT,
            properties: {
              perfil: { type: Type.STRING },
              descripcion: { type: Type.STRING },
              fortalezas: { type: Type.ARRAY, items: { type: Type.STRING } },
              retos: { type: Type.ARRAY, items: { type: Type.STRING } },
              recomendaciones: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ['perfil', 'descripcion', 'fortalezas', 'retos', 'recomendaciones'],
          },
        },
        required: ['principal', 'secundarios', 'informe'],
      },
    },
    required: ['resultado'],
  };

  try {
    const finalPrompt = `
      ${GEMINI_PROMPT}
      
      DATOS DEL USUARIO:
      Puntuaciones: ${JSON.stringify(scores)}
      Código Ganador: ${principalCandidate}
    `;

    // 3. Llamada estándar y limpia (Versión Original Estabilizada)
    // Sin timeouts artificiales (Promise.race) que causaban el error.
    // Usamos gemini-3-pro-preview para asegurar la profundidad psicológica del reporte.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: finalPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No se recibió respuesta del servicio.");

    // Parseo directo
    const parsed = JSON.parse(text);
    
    // Inyección de scores calculados para consistencia
    if (parsed.resultado) {
      parsed.resultado.puntuaciones = scores;
    }

    return parsed as Report;

  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw error;
  }
};
