import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import CommercialCommunicationsPolicy from './CommercialCommunicationsPolicy';

interface LoginScreenProps {
  onLogin: (email: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [commsAccepted, setCommsAccepted] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showComms, setShowComms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && privacyAccepted) {
      onLogin(email);
    } else if (!privacyAccepted) {
      alert("Debes aceptar la política de privacidad para continuar.");
    } else {
      alert("Por favor, introduce tu correo electrónico.");
    }
  };

  if (showPrivacy) {
    return <PrivacyPolicy onBack={() => setShowPrivacy(false)} />;
  }

  if (showComms) {
    return <CommercialCommunicationsPolicy onBack={() => setShowComms(false)} />;
  }

  return (
    <div className="text-center p-8 bg-azul-humo text-beige-lunar rounded-2xl shadow-2xl border border-oro-profundo/50 animate-fade-in max-w-lg mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Descubre tu Código Vital
      </h1>
      <p className="text-lg text-beige-lunar/90 mb-8">
        Introduce tu correo electrónico para comenzar el test y recibir tu informe de personalidad.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
          className="w-full px-4 py-3 bg-gris-carbon/50 border border-oro-profundo/50 rounded-lg placeholder-beige-lunar/60 focus:outline-none focus:ring-2 focus:ring-oro-profundo"
        />
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
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={commsAccepted}
              onChange={(e) => setCommsAccepted(e.target.checked)}
              className="mt-1 mr-3 h-5 w-5 rounded border-oro-profundo/50 bg-gris-carbon/50 text-oro-profundo focus:ring-oro-profundo"
            />
            <span>
              Sí, deseo recibir mi informe premium gratuito en PDF y autorizo el envío de comunicaciones comerciales y publicitarias.
               <button type="button" onClick={() => setShowComms(true)} className="text-oro-profundo hover:underline ml-1">
                (Leer más)
              </button>
            </span>
          </label>
        </div>
        <button
          type="submit"
          disabled={!email.trim() || !privacyAccepted}
          className="w-full px-8 py-3 bg-oro-profundo text-azul-humo font-bold rounded-full shadow-lg hover:bg-beige-lunar hover:text-azul-humo transform hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Comenzar
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;