import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (privacyAccepted) {
      onLogin();
    } else {
      alert("Debes aceptar la política de privacidad para continuar.");
    }
  };

  if (showPrivacy) {
    return <PrivacyPolicy onBack={() => setShowPrivacy(false)} />;
  }

  return (
    <div className="text-center p-8 bg-azul-humo text-beige-lunar rounded-2xl shadow-2xl border border-oro-profundo/50 animate-fade-in max-w-lg mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Descubre tu Código Vital
      </h1>
      <p className="text-lg text-beige-lunar/90 mb-8">
        Comienza el test para descubrir tu informe de personalidad.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4 text-left text-sm text-beige-lunar/80">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="mt-1 mr-3 h-5 w-5 rounded border-oro-profundo/50 bg-gris-carbon/50 text-oro-profundo focus:ring-oro-profundo"
            />
            <span>
              He leído y acepto la{' '}
              <button type="button" onClick={() => setShowPrivacy(true)} className="text-oro-profundo hover:underline">
                Política de Privacidad
              </button>
              .*
            </span>
          </label>
        </div>
        <button
          type="submit"
          disabled={!privacyAccepted}
          className="w-full px-8 py-3 bg-oro-profundo text-azul-humo font-bold rounded-full shadow-lg hover:bg-beige-lunar hover:text-azul-humo transform hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Comenzar
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;