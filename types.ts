
export enum VitalCode {
  Lider = 'Líder',
  Cuidador = 'Cuidador',
  Analista = 'Analista',
  Creativo = 'Creativo',
  Organizador = 'Organizador',
  Explorador = 'Explorador',
  Idealista = 'Idealista',
  Guerrero = 'Guerrero',
  Intuitivo = 'Intuitivo',
}

export interface Question {
  id: number;
  text: string;
  code: VitalCode;
}

export type Answers = { [key: number]: number };

export interface Score {
  codigo: VitalCode;
  puntos: number;
}

export interface Informe {
  perfil: string;
  descripcion: string;
  fortalezas: string[];
  retos: string[];
  recomendaciones: string[];
}

export interface Resultado {
  principal: VitalCode;
  secundarios: VitalCode[];
  puntuaciones: Score[];
  informe: Informe;
}

export interface Report {
  resultado: Resultado;
}
