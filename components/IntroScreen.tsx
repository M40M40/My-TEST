import React from 'react';

interface IntroScreenProps {
  onFinish: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onFinish }) => {
  return (
    <div className="text-center p-8 max-w-3xl mx-auto animate-fade-in">
        <p className="text-2xl md:text-3xl font-light text-gris-carbon/90 leading-relaxed italic mb-12">
          “Nada en ti es casualidad. Cada elección, cada impulso y cada sueño sigue un diseño más antiguo que tu propia memoria.
          <br /><br />
          Este test es un espejo: te mostrará las fuerzas invisibles que dirigen tu vida… y el propósito que viniste a cumplir.”
        </p>
        <button
            onClick={onFinish}
            className="px-8 py-3 bg-oro-profundo text-azul-humo font-bold rounded-full shadow-lg hover:bg-beige-lunar hover:text-azul-humo transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in"
            style={{ animationDelay: '1s', animationFillMode: 'backwards' }}
        >
            Continuar
        </button>
    </div>
  );
};

export default IntroScreen;
