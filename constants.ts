
import { VitalCode, type Question } from './types';

export const QUESTIONS: Question[] = [
  { id: 1, text: "Cuando un grupo duda sobre qué hacer, suelen acabar mirando en tu dirección para decidir.", code: VitalCode.Lider, inversa: false },
  { id: 2, text: "Cuando hay silencio antes de elegir, tiendes a romperlo con una propuesta clara.", code: VitalCode.Lider, inversa: false },
  { id: 3, text: "Cuando toca elegir plan, prefieres esperar a ver qué deciden los demás y te adaptas sin problema.", code: VitalCode.Lider, inversa: true },
  { id: 4, text: "Prefieres seguir siempre lo que otros ya han probado antes, en vez de proponer algo nuevo.", code: VitalCode.Lider, inversa: true },

  { id: 5, text: "En una mesa con tensión, cambias de tema o propones algo que relaja el ambiente.", code: VitalCode.Idealista, inversa: false },
  { id: 6, text: "Si dos personas que aprecias se distancian, sueles acercarte a cada una para tender puentes después.", code: VitalCode.Idealista, inversa: false },
  { id: 7, text: "Si presencias un rifirrafe entre dos conocidos, sueles seguir tu camino sin involucrarte.", code: VitalCode.Idealista, inversa: true },
  { id: 8, text: "En charlas grupales, prefieres no meterte y dejar que cada quien se arregle como pueda.", code: VitalCode.Idealista, inversa: true },

  { id: 9, text: "Entre amigos, cuando cuentas una historia, la gente suele engancharse o reírse contigo.", code: VitalCode.Creativo, inversa: false },
  { id: 10, text: "Al preparar un detalle para alguien, te sale hacer algo distinto a lo típico.", code: VitalCode.Creativo, inversa: false },
  { id: 11, text: "Si falta una pieza o algo no encaja tal cual, prefieres parar y esperar instrucciones exactas antes de continuar.", code: VitalCode.Creativo, inversa: true },
  { id: 12, text: "Prefieres que todo se haga tal como está en el manual y no te gusta improvisar.", code: VitalCode.Creativo, inversa: true },

  { id: 13, text: "Antes de empezar el día, ordenas mentalmente lo que harás y en qué momento.", code: VitalCode.Organizador, inversa: false },
  { id: 14, text: "Cuando algo es grande, lo troceas en pasos alcanzables y te marcas pequeñas metas.", code: VitalCode.Organizador, inversa: false },
  { id: 15, text: "Sueles empezar las cosas “sobre la marcha”, sin pensar mucho en el orden; ya irás viendo después.", code: VitalCode.Organizador, inversa: true },
  { id: 16, text: "Te incomoda planear, prefieres improvisar aunque luego salgan fallos.", code: VitalCode.Organizador, inversa: true },

  { id: 17, text: "Caminando por una ciudad nueva, te metes por una callejuela solo porque te llama.", code: VitalCode.Explorador, inversa: false },
  { id: 18, text: "Si te proponen un plan inesperado para esa misma tarde, a menudo dices que sí sin darle demasiadas vueltas.", code: VitalCode.Explorador, inversa: false },
  { id: 19, text: "Tiendes a volver a los mismos sitios y rutinas porque eso te hace sentir seguro.", code: VitalCode.Explorador, inversa: true },
  { id: 20, text: "Prefieres evitar lo desconocido porque te resulta incómodo salir de lo de siempre.", code: VitalCode.Explorador, inversa: true },

  { id: 21, text: "Si alguien de tu gente tarda en dar señales, no te quedas tranquilo hasta saber que está bien.", code: VitalCode.Cuidador, inversa: false },
  { id: 22, text: "Ofreces ayuda práctica a conocidos aunque no la hayan pedido explícitamente.", code: VitalCode.Cuidador, inversa: false },
  { id: 23, text: "Sueles pensar que cada adulto debería arreglárselas solo y evitas ofrecer ayuda si no te la piden.", code: VitalCode.Cuidador, inversa: true },
  { id: 24, text: "Crees que cada quien debería cargar con lo suyo y no te involucras en lo que no te toca.", code: VitalCode.Cuidador, inversa: true },

  { id: 25, text: "A veces prefieres quedarte a solas dándole una vuelta a lo que te ha pasado para entenderlo mejor.", code: VitalCode.Analista, inversa: false },
  { id: 26, text: "Ante un momento difícil, te preguntas qué aprendizaje puede dejarte.", code: VitalCode.Analista, inversa: false },
  { id: 27, text: "Cuando algo te remueve, procuras distraerte rápido y no pensar demasiado en ello.", code: VitalCode.Analista, inversa: true },
  { id: 28, text: "Te incomoda reflexionar demasiado, prefieres pasar página sin darle vueltas.", code: VitalCode.Analista, inversa: true },

  { id: 29, text: "Cuando te entra un dinero extra, piensas primero en cómo hacerlo rendir más que en gastarlo.", code: VitalCode.Guerrero, inversa: false },
  { id: 30, text: "Al ver un local o proyecto flojo, te vienen a la cabeza cambios concretos para que funcione mejor.", code: VitalCode.Guerrero, inversa: false },
  { id: 31, text: "Hablar de dinero te incomoda y prefieres que otra persona lleve ese tema.", code: VitalCode.Guerrero, inversa: true },
  { id: 32, text: "Prefieres no pensar en inversiones ni estrategias, eso te da pereza.", code: VitalCode.Guerrero, inversa: true },

  { id: 33, text: "Te ha pasado seguir una sensación interna y luego comprobar que era la elección acertada.", code: VitalCode.Intuitivo, inversa: false },
  { id: 34, text: "Al conocer a alguien, esa primera impresión que te deja suele coincidir con lo que descubres después.", code: VitalCode.Intuitivo, inversa: false },
  { id: 35, text: "Sueles pensar que las coincidencias son pura casualidad y no les das ninguna importancia al decidir.", code: VitalCode.Intuitivo, inversa: true },
  { id: 36, text: "No sueles hacer caso a tus corazonadas porque crees que no sirven para nada.", code: VitalCode.Intuitivo, inversa: true },
];

export const GEMINI_PROMPT = `
Eres un psicólogo experto y coach de vida, especializado en el sistema de los '9 Códigos Vitales'. Tu tarea es analizar los resultados de un test de personalidad y generar un informe inspirador y profundo, pero más ligero y directo.

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
      "descripcion": "string (concisa y alentadora, máximo 2 párrafos, reducida un 25% respecto a lo habitual)",
      "fortalezas": ["string", "string", "string"],
      "retos": ["string", "string"],
      "recomendaciones": ["string", "string", "string"]
    }
  }
}

REGLAS:
- Tono: Maestro/Coach Senior.
- La descripción debe ser rica y personalizada, pero más breve y al grano.
- Las fortalezas y retos deben ser concisos.
- Devuelve SOLO el JSON.
`;
