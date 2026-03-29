
import { GoogleGenAI } from '@google/genai';
import { GEMINI_PROMPT, QUESTIONS } from '../constants.js';
import { VitalCode } from '../types.js';
import type { Score } from '../types.js';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { answers } = req.body;

    if (!answers || typeof answers !== 'object') {
      return res.status(400).json({ error: 'Faltan respuestas del test.' });
    }

    const scores: Score[] = Object.values(VitalCode).map((code) => {
      const codeQuestions = QUESTIONS.filter((q) => q.code === code);

      const puntos = codeQuestions.reduce((sum, q) => {
        const ans = answers[q.id];

        if (![1, 2, 3, 4].includes(ans)) {
          throw new Error(`Respuesta inválida en la pregunta ${q.id}: ${ans}`);
        }

        const finalAns = q.inversa ? (5 - ans) : ans;
        return sum + finalAns;
      }, 0);

      return { codigo: code, puntos };
    });

    const sortedScores = [...scores].sort((a, b) => b.puntos - a.puntos);
    const principalCandidate = sortedScores[0]?.codigo;

    if (!principalCandidate) {
      return res.status(500).json({ error: 'No se pudo determinar el código principal.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Falta GEMINI_API_KEY en el servidor.' });
    }

    const ai = new GoogleGenAI({ apiKey });

    const responseJsonSchema = {
      type: 'object',
      properties: {
        resultado: {
          type: 'object',
          properties: {
            principal: { type: 'string' },
            secundarios: {
              type: 'array',
              items: { type: 'string' },
            },
            informe: {
              type: 'object',
              properties: {
                perfil: { type: 'string' },
                descripcion: { type: 'string' },
                fortalezas: {
                  type: 'array',
                  items: { type: 'string' },
                },
                retos: {
                  type: 'array',
                  items: { type: 'string' },
                },
                recomendaciones: {
                  type: 'array',
                  items: { type: 'string' },
                },
              },
              required: [
                'perfil',
                'descripcion',
                'fortalezas',
                'retos',
                'recomendaciones',
              ],
            },
          },
          required: ['principal', 'secundarios', 'informe'],
        },
      },
      required: ['resultado'],
    };

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
      model: 'gemini-2.5-flash',
      contents: finalPrompt,
      config: {
        responseMimeType: 'application/json',
        responseJsonSchema,
        temperature: 0.7,
      },
    });

    const text = response.text;

    if (!text) {
      return res.status(502).json({ error: 'Gemini no devolvió texto.' });
    }

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      console.error('Gemini devolvió JSON inválido:', text);
      return res.status(502).json({ error: 'Gemini devolvió una respuesta no válida.' });
    }

    if (!parsed?.resultado) {
      return res.status(502).json({ error: 'La respuesta no contiene resultado.' });
    }

    parsed.resultado.puntuaciones = scores;

    return res.status(200).json(parsed);
  } catch (error: any) {
    console.error('API /api/report error:', error);
    return res.status(500).json({
      error: error?.message || 'Error interno al generar el informe.',
    });
  }
}
