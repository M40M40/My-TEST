import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center p-8 bg-azul-humo text-beige-lunar rounded-2xl shadow-2xl border border-oro-profundo/50 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        🪄 Bienvenido al Test de los 9 Códigos Vitales
      </h1>
      <p className="text-lg md:text-xl text-beige-lunar/90 max-w-2xl mx-auto mb-4">
        Este test explora las fuerzas más profundas de tu personalidad. Responde con sinceridad a cada afirmación:
      </p>
       <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center bg-gris-carbon/30 p-4 rounded-lg mb-8 text-beige-lunar/80">
        <span>1️⃣ Totalmente en desacuerdo</span>
        <span>2️⃣ En desacuerdo</span>
        <span>3️⃣ De acuerdo</span>
        <span>4️⃣ Totalmente de acuerdo</span>
      </div>
      <p className="text-md text-oro-profundo font-medium mb-8">⚠️ Responde cómo realmente eres, no cómo crees que deberías ser.</p>
      <button
        onClick={onStart}
        className="px-8 py-3 bg-oro-profundo text-azul-humo font-bold rounded-full shadow-lg hover:bg-beige-lunar hover:text-azul-humo transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Comenzar el Test
      </button>
    </div>
  );
};

export default WelcomeScreen;