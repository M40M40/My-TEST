import React from 'react';

interface PolicyProps {
  onBack: () => void;
}

const CommercialCommunicationsPolicy: React.FC<PolicyProps> = ({ onBack }) => {
  return (
    <div className="p-4 sm:p-8 bg-azul-humo text-beige-lunar rounded-2xl shadow-2xl border border-oro-profundo/50 max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-6">
        Política de Comunicaciones Comerciales
      </h2>
      <div className="space-y-4 text-left prose prose-p:text-beige-lunar/90 prose-headings:text-beige-lunar prose-strong:text-beige-lunar max-w-none h-[60vh] overflow-y-auto pr-4">
        <h4>1. Objeto</h4>
        <p>
          La presente política regula el tratamiento de datos personales para el envío de comunicaciones comerciales, promociones, ofertas, newsletters, contenidos informativos y publicidad personalizada por parte de [Nombre de la empresa], así como la posible comunicación de dichos datos a terceros colaboradores con idénticos fines, en cumplimiento de lo dispuesto en el RGPD y la LOPDGDD.
        </p>
        
        <h4>2. Consentimiento del interesado</h4>
        <p>
          El envío de comunicaciones comerciales se fundamenta exclusivamente en el consentimiento expreso e inequívoco otorgado por el interesado mediante la marcación de la casilla correspondiente. La falta de consentimiento impedirá el tratamiento de los datos con fines comerciales, sin perjuicio de la posibilidad de que el usuario continúe disfrutando de los servicios contratados o solicitados.
        </p>

        <h4>3. Finalidades del tratamiento comercial</h4>
        <p>
          Los datos serán utilizados para:
        </p>
        <ol className="list-decimal list-inside space-y-2">
            <li>Remitir comunicaciones de carácter promocional relativas a productos, servicios o actividades del responsable.</li>
            <li>Elaborar perfiles individualizados basados en el comportamiento, preferencias y hábitos de consumo del usuario, con el fin de adaptar la oferta comercial.</li>
            <li>Comunicar los datos a terceros colaboradores pertenecientes a sectores [sector A], [sector B] y [sector C], con el propósito de realizar acciones de marketing directo, publicidad segmentada y comunicaciones promocionales.</li>
            <li>Realizar estudios de mercado, encuestas de satisfacción y análisis de tendencias de comportamiento.</li>
        </ol>

        <h4>4. Derecho de oposición y revocación</h4>
        <p>
          El interesado podrá oponerse en cualquier momento al tratamiento de sus datos con fines comerciales o revocar el consentimiento otorgado siguiendo el procedimiento indicado en each comunicación recibida o enviando una solicitud a ecosdeamun@protonmail.com. La retirada del consentimiento no afectará a la licitud del tratamiento realizado con anterioridad.
        </p>

        <h4>5. Conservación y seguridad</h4>
        <p>
          Los datos tratados con fines comerciales se conservarán mientras el interesado no retire su consentimiento o solicite la supresión de sus datos. El responsable implementará las medidas técnicas y organizativas adecuadas para garantizar su confidencialidad, integridad y disponibilidad.
        </p>
      </div>
      <div className="text-center mt-8">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-oro-profundo text-azul-humo font-bold rounded-full shadow-lg hover:bg-beige-lunar hover:text-azul-humo transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default CommercialCommunicationsPolicy;