
import { VitalCode, type Question } from './types';

export const QUESTIONS: Question[] = [
  // Líder
  { id: 1, text: "Siento una fuerte necesidad de guiar a otros hacia una meta común.", code: VitalCode.Lider },
  { id: 2, text: "Me entusiasma pensar en el futuro y crear visiones a largo plazo.", code: VitalCode.Lider },
  { id: 3, text: "Tomo la iniciativa en grupos para asegurarme de que las cosas se hagan.", code: VitalCode.Lider },
  { id: 4, text: "La gente suele buscarme para que les dé dirección e inspiración.", code: VitalCode.Lider },
  { id: 5, text: "Prefiero liderar a seguir, incluso si eso implica más responsabilidad.", code: VitalCode.Lider },
  
  // Cuidador
  { id: 6, text: "Me siento realizado/a al ayudar y apoyar a los demás.", code: VitalCode.Cuidador },
  { id: 7, text: "Puedo percibir fácilmente las emociones de las personas que me rodean.", code: VitalCode.Cuidador },
  { id: 8, text: "Priorizo el bienestar de los demás, a veces por encima del mío.", code: VitalCode.Cuidador },
  { id: 9, text: "La gente confía en mí para escuchar sus problemas sin juzgarlos.", code: VitalCode.Cuidador },
  { id: 10, text: "Crear un ambiente de armonía y cuidado es muy importante para mí.", code: VitalCode.Cuidador },

  // Analista
  { id: 11, text: "Disfruto desglosando problemas complejos en partes más pequeñas.", code: VitalCode.Analista },
  { id: 12, text: "Tomo decisiones basadas en la lógica y los datos, no en las emociones.", code: VitalCode.Analista },
  { id: 13, text: "Me interesa profundamente entender cómo funcionan las cosas.", code: VitalCode.Analista },
  { id: 14, text: "Prefiero la objetividad y la precisión en mi trabajo y comunicación.", code: VitalCode.Analista },
  { id: 15, text: "Encuentro satisfacción en la investigación y el análisis detallado.", code: VitalCode.Analista },

  // Creativo
  { id: 16, text: "Tengo una imaginación muy activa y constantemente genero nuevas ideas.", code: VitalCode.Creativo },
  { id: 17, text: "Me expreso mejor a través del arte, la escritura o alguna otra forma creativa.", code: VitalCode.Creativo },
  { id: 18, text: "Me siento atraído/a por lo original, lo poco convencional y lo simbólico.", code: VitalCode.Creativo },
  { id: 19, text: "A menudo me pierdo en mis pensamientos e ideas.", code: VitalCode.Creativo },
  { id: 20, text: "La belleza y la estética son fundamentales en mi vida.", code: VitalCode.Creativo },
  
  // Organizador
  { id: 21, text: "Me siento más cómodo/a cuando hay un plan y una estructura claros.", code: VitalCode.Organizador },
  { id: 22, text: "La fiabilidad y la puntualidad son valores muy importantes para mí.", code: VitalCode.Organizador },
  { id: 23, text: "Disfruto creando sistemas, listas y procesos para mejorar la eficiencia.", code: VitalCode.Organizador },
  { id: 24, text: "Prefiero seguir las reglas y procedimientos establecidos.", code: VitalCode.Organizador },
  { id: 25, text: "El orden y la planificación me ayudan a sentirme en control.", code: VitalCode.Organizador },
  
  // Explorador
  { id: 26, text: "Siento un fuerte deseo de viajar y experimentar nuevas culturas.", code: VitalCode.Explorador },
  { id: 27, text: "Valoro mi independencia y libertad por encima de todo.", code: VitalCode.Explorador },
  { id: 28, text: "Me aburro fácilmente con la rutina y busco constantemente la novedad.", code: VitalCode.Explorador },
  { id: 29, text: "Estoy dispuesto/a a tomar riesgos para vivir nuevas aventuras.", code: VitalCode.Explorador },
  { id: 30, text: "Aprender a través de la experiencia directa es mi forma preferida.", code: VitalCode.Explorador },
  
  // Idealista
  { id: 31, text: "Creo firmemente que puedo contribuir a hacer del mundo un lugar mejor.", code: VitalCode.Idealista },
  { id: 32, text: "Me involucro en causas sociales o comunitarias que considero justas.", code: VitalCode.Idealista },
  { id: 33, text: "Siento una fuerte conexión con la humanidad en su conjunto.", code: VitalCode.Idealista },
  { id: 34, text: "Me motiva luchar por los derechos y la dignidad de las personas.", code: VitalCode.Idealista },
  { id: 35, text: "Mis valores y principios éticos guían mis acciones más importantes.", code: VitalCode.Idealista },
  
  // Guerrero
  { id: 36, text: "No temo decir la verdad, incluso si es incómoda o genera conflicto.", code: VitalCode.Guerrero },
  { id: 37, text: "Cuando creo en algo, lo defiendo con pasión y determinación.", code: VitalCode.Guerrero },
  { id: 38, text: "Me crezco ante los desafíos y la adversidad.", code: VitalCode.Guerrero },
  { id: 39, text: "Me siento impulsado/a a proteger a los débiles y luchar contra la injusticia.", code: VitalCode.Guerrero },
  { id: 40, text: "Prefiero la confrontación directa y honesta a evitar los problemas.", code: VitalCode.Guerrero },

  // Intuitivo
  { id: 41, text: "A menudo confío en mi intuición o 'corazonadas' para tomar decisiones.", code: VitalCode.Intuitivo },
  { id: 42, text: "Siento que hay una dimensión más profunda o espiritual en la vida.", code: VitalCode.Intuitivo },
  { id: 43, text: "Percibo patrones y conexiones que otros no suelen ver.", code: VitalCode.Intuitivo },
  { id: 44, text: "Necesito tiempo a solas para la reflexión y la introspección.", code: VitalCode.Intuitivo },
  { id: 45, text: "Me interesan los sueños, los símbolos y los misterios de la conciencia.", code: VitalCode.Intuitivo },
];

export const GEMINI_PROMPT = `
Eres un psicólogo experto y coach de vida, especializado en el sistema de los '9 Códigos Vitales'. Tu tarea es analizar los resultados de un test de personalidad y generar un informe completo, inspirador y profundo.

Recibirás un listado de puntuaciones ya calculadas por el sistema.

CLASIFICACIÓN:
Determina el Top 3 códigos con mayor puntuación: 1º = Principal, 2º y 3º = Secundarios.

SELECCIÓN DE PERFIL:
Identifica la combinación que mejor se ajuste al Top 3 del usuario (puedes basarte en perfiles como Visionario Disruptivo, Estratega Ejecutivo, Sanador Trascendente, etc.).

Genera el informe final siguiendo esta estructura JSON OBLIGATORIA.

FORMATO DE SALIDA JSON:
{
  "resultado": {
    "principal": "string",
    "secundarios": ["string", "string"],
    "puntuaciones": [{"codigo": "string", "puntos": number}],
    "informe": {
      "perfil": "string",
      "descripcion": "string (profunda y alentadora, al menos 3 párrafos)",
      "fortalezas": ["string", "string", "string", "string", "string"],
      "retos": ["string", "string", "string"],
      "recomendaciones": ["string", "string", "string"]
    }
  }
}

REGLAS:
- Tono: Maestro/Coach Senior.
- La descripción debe ser rica y personalizada.
- Devuelve SOLO el JSON.
`;
