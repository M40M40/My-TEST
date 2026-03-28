import React from 'react';

interface PolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PolicyProps> = ({ onBack }) => {
  return (
    <div className="p-4 sm:p-8 bg-azul-humo text-beige-lunar rounded-2xl shadow-2xl border border-oro-profundo/50 max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-6">
        Política de Privacidad
      </h2>
      <div className="space-y-4 text-left prose prose-p:text-beige-lunar/90 prose-headings:text-beige-lunar prose-strong:text-beige-lunar max-w-none h-[60vh] overflow-y-auto pr-4">
        <h4>1. Responsable del tratamiento</h4>
        <p>
          De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (en adelante, “RGPD”), y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (en adelante, “LOPDGDD”), se informa al interesado de que los datos personales que proporcione serán incorporados a un sistema de tratamiento automatizado y no automatizado cuyo responsable es [Nombre de la empresa], con domicilio social en [dirección completa], número de identificación fiscal [NIF], y correo electrónico de contacto ecosdeamun@protonmail.com.
        </p>

        <h4>2. Categorías de datos tratados</h4>
        <p>
          La entidad tratará las siguientes categorías de datos personales: datos identificativos (nombre, apellidos, dirección de correo electrónico, dirección postal, número de teléfono), datos de carácter digital (direcciones IP, identificadores de dispositivos, logs de navegación), datos de comportamiento derivados de la utilización de la plataforma, datos de preferencias y, en su caso, datos relativos a hábitos de consumo y perfiles inferidos a partir de la interacción con nuestros servicios.
        </p>

        <h4>3. Finalidades del tratamiento</h4>
        <p>
          Los datos personales serán tratados con las siguientes finalidades legítimas:
        </p>
        <ol className="list-decimal list-inside space-y-2">
            <li>Gestionar el registro del usuario en la plataforma y permitir el acceso a las funcionalidades contratadas o solicitadas.</li>
            <li>Prestar, mantener, personalizar y mejorar los servicios ofrecidos.</li>
            <li>Elaborar informes, análisis estadísticos y métricas agregadas con fines internos, de control de calidad y de optimización operativa.</li>
            <li>Cumplir con obligaciones legales, regulatorias, fiscales o administrativas aplicables al responsable del tratamiento.</li>
            <li>Elaborar perfiles individualizados mediante técnicas de análisis automatizado, segmentación de audiencias y modelización algorítmica, con la finalidad de adaptar la experiencia del usuario y las comunicaciones comerciales a sus características e intereses.</li>
            <li>Prevenir, detectar, investigar y perseguir conductas ilícitas o contrarias a las condiciones de uso.</li>
            <li>Gestionar la relación contractual y el envío de información relativa a actualizaciones, modificaciones de condiciones y comunicaciones estrictamente vinculadas a la prestación del servicio.</li>
            <li>En caso de consentimiento expreso, remitir comunicaciones comerciales por medios electrónicos o físicos, así como transferir los datos a empresas colaboradoras con fines promocionales o publicitarios.</li>
        </ol>

        <h4>4. Legitimación del tratamiento</h4>
        <p>
          La base jurídica que habilita el tratamiento de datos personales es la concurrencia de una o varias de las siguientes circunstancias:
        </p>
        <ul className="list-disc list-inside space-y-2">
            <li>La ejecución de un contrato o la adopción de medidas precontractuales a petición del interesado.</li>
            <li>El cumplimiento de obligaciones legales aplicables al responsable.</li>
            <li>El interés legítimo del responsable en garantizar la seguridad, integridad y mejora del servicio.</li>
            <li>El consentimiento explícito, libre, informado e inequívoco del interesado para el tratamiento de sus datos con fines comerciales, promocionales y de cesión a terceros.</li>
        </ul>

        <h4>5. Comunicación y cesión de datos</h4>
        <p>
          Los datos personales podrán ser comunicados a autoridades judiciales, administrativas o regulatorias en cumplimiento de obligaciones legales, así como a proveedores de servicios tecnológicos, entidades financieras, asesores jurídicos y empresas colaboradoras cuya intervención sea necesaria para el correcto desarrollo de las finalidades anteriormente descritas.
        </p>
        <p>
          En caso de que el usuario preste su consentimiento, los datos podrán ser cedidos a sociedades pertenecientes al grupo empresarial o a terceros con los que el responsable mantenga acuerdos de colaboración comercial, con el objeto de llevar a cabo acciones de marketing directo, segmentación o perfilado con fines publicitarios.
        </p>

        <h4>6. Transferencias internacionales</h4>
        <p>
          En caso de transferencias de datos a terceros países u organizaciones internacionales fuera del Espacio Económico Europeo, estas se realizarán con las debidas garantías conforme a los artículos 44 y siguientes del RGPD, incluyendo, cuando proceda, la firma de cláusulas contractuales tipo aprobadas por la Comisión Europea.
        </p>

        <h4>7. Plazo de conservación</h4>
        <p>
          Los datos personales se conservarán durante el tiempo estrictamente necesario para el cumplimiento de las finalidades para las que fueron recabados, mientras se mantenga la relación contractual y durante los plazos exigidos por la legislación aplicable. Posteriormente podrán ser anonimizados y utilizados con fines estadísticos o de investigación.
        </p>

        <h4>8. Derechos de los interesados</h4>
        <p>
          El interesado podrá ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad dirigiéndose por escrito a ecosdeamun@protonmail.com o a la dirección postal del responsable, adjuntando copia de un documento acreditativo de su identidad. Asimismo, podrá retirar en cualquier momento el consentimiento prestado sin que ello afecte a la licitud del tratamiento previo a su retirada. En caso de considerar vulnerados sus derechos, el interesado podrá presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-oro-profundo hover:underline">www.aepd.es</a>).
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

export default PrivacyPolicy;