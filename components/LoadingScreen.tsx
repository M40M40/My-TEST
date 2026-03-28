
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-azul-humo text-beige-lunar rounded-2xl shadow-2xl border border-oro-profundo/50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-oro-profundo mb-6"></div>
      <h2 className="text-3xl font-bold mb-4">
        Analizando tu esencia...
      </h2>
      <p className="text-lg text-beige-lunar/90">
        Estamos conectando los puntos de tu personalidad para revelar tu mapa interior.
      </p>
    </div>
  );
};

export default LoadingScreen;