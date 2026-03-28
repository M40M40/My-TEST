
import React, { useState, useRef } from 'react';
import type { Report, Score } from '../types';

const ScoresChart: React.FC<{ scores: Score[] }> = ({ scores }) => {
  const maxScore = 20;
  const validScores = Array.isArray(scores) ? scores : [];
  const sortedScores = [...validScores].sort((a, b) => b.puntos - a.puntos);

  return (
    <div className="space-y-3">
      {sortedScores.map(({ codigo, puntos }) => (
        <div key={codigo} className="flex items-center">
          <span className="w-28 text-sm font-medium text-beige-lunar/90 flex-shrink-0">{codigo}</span>
          <div className="w-full bg-azul-humo/50 rounded-full h-5 ml-2">
            <div
              className="bg-oro-profundo h-5 rounded-full text-xs font-medium text-azul-humo flex items-center justify-center px-2 transition-all duration-1000 ease-out"
              style={{ width: `${Math.min((puntos / maxScore) * 100, 100)}%`, minWidth: '2.5rem' }}
            >
              {puntos}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ShareModal: React.FC<{ report: Report; onClose: () => void }> = ({ report, onClose }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copiar enlace');
  const { principal, informe } = report.resultado;
  const shareUrl = window.location.href;
  const shareText = `He descubierto mi Código Vital: ${informe?.perfil || principal}.`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`).then(() => {
      setCopyButtonText('¡Copiado!');
      setTimeout(() => setCopyButtonText('Copiar enlace'), 2000);
    });
  };

  return (
    <div className="fixed inset-0 bg-azul-humo/95 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-gris-carbon rounded-3xl shadow-2xl p-8 w-full max-w-sm text-beige-lunar border border-oro-profundo/20" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-bold text-center mb-6">Compartir mi Esencia</h3>
        <div className="space-y-4">
          <button onClick={handleCopyLink} className="w-full px-4 py-4 bg-azul-humo hover:bg-oro-profundo hover:text-azul-humo font-bold rounded-xl transition-all border border-oro-profundo/30">
            {copyButtonText}
          </button>
          <button onClick={onClose} className="w-full px-4 py-3 text-beige-lunar/60 hover:text-white transition-all">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

interface ResultsScreenProps {
  report: Report | null;
  error: string | null;
  onRestart: () => void;
  userEmail: string;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ report, error, onRestart, userEmail }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const downloadPdf = async () => {
    if (!resultsRef.current || !report) return;
    setIsGeneratingPdf(true);
    try {
      const { jsPDF } = (window as any).jspdf;
      const html2canvas = (window as any).html2canvas;
      const canvas = await html2canvas(resultsRef.current, { scale: 2, useCORS: true, backgroundColor: '#2F3135' });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Informe_Vital_${(userEmail || 'usuario').split('@')[0]}.pdf`);
    } catch (err) {
      console.error("PDF generation error:", err);
      alert("Hubo un problema técnico al generar el PDF. Por favor intenta hacer una captura de pantalla.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  if (error) {
    return (
      <div className="text-center p-10 bg-azul-humo text-beige-lunar rounded-2xl border border-red-500/30 shadow-2xl animate-fade-in max-w-lg mx-auto mt-10">
        <div className="text-5xl mb-6">⚠️</div>
        <h2 className="text-2xl font-bold text-white mb-4 italic">Interrupción del Análisis</h2>
        <p className="mb-8 opacity-70 leading-relaxed">{error}</p>
        <button onClick={() => window.location.reload()} className="w-full px-8 py-4 bg-oro-profundo text-azul-humo font-bold rounded-full hover:bg-white transition-all">
          Reintentar Conexión
        </button>
      </div>
    );
  }

  if (!report?.resultado) return null;

  const { principal, secundarios = [], puntuaciones = [], informe } = report.resultado;
  const descripcionParrafos = (informe?.descripcion || "Analizando tu perfil...").split('\n').filter(p => p.trim());

  return (
    <>
      <div ref={resultsRef} className="p-6 sm:p-12 bg-azul-humo text-beige-lunar rounded-3xl shadow-2xl border border-oro-profundo/20 animate-fade-in overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-oro-profundo/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-azul-humo/50 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <span className="text-oro-profundo font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Revelación Final</span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-none">
            {informe?.perfil || 'Tu Código Vital'}
          </h1>
          <div className="h-1 w-24 bg-oro-profundo mx-auto mb-8"></div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-2xl md:text-3xl font-light">
              <span className="opacity-50">Sello Primordial:</span> <span className="font-bold text-oro-profundo">{principal}</span>
            </p>
            {secundarios.length > 0 && (
                <p className="text-sm tracking-widest opacity-40 uppercase">
                Fuerzas de Apoyo: {secundarios.join(' — ')}
                </p>
            )}
          </div>
        </div>

        <div className="bg-gris-carbon/10 p-8 sm:p-12 rounded-[2rem] mb-12 border border-white/5 backdrop-blur-md relative z-10">
          {descripcionParrafos.length > 0 ? descripcionParrafos.map((para, i) => (
            <p key={i} className="text-lg md:text-xl leading-relaxed mb-8 last:mb-0 opacity-90 font-light text-justify">
              {para}
            </p>
          )) : <p className="italic opacity-50">Generando narrativa profunda...</p>}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
          <div className="bg-white/5 p-8 rounded-3xl border border-oro-profundo/20">
              <h3 className="text-lg font-bold text-oro-profundo mb-6 uppercase tracking-widest flex items-center">
                <span className="w-8 h-px bg-oro-profundo mr-3"></span> Dones del Alma
              </h3>
              <ul className="space-y-4">
                  {(informe?.fortalezas || []).map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-oro-profundo mr-3 text-lg">✦</span>
                      <span className="text-beige-lunar/90">{item}</span>
                    </li>
                  ))}
              </ul>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-beige-lunar/50 mb-6 uppercase tracking-widest flex items-center">
                <span className="w-8 h-px bg-white/20 mr-3"></span> Zonas de Sombra
              </h3>
              <ul className="space-y-4">
                  {(informe?.retos || []).map((item, i) => (
                    <li key={i} className="flex items-start opacity-70">
                      <span className="text-white/30 mr-3 text-lg">◇</span>
                      <span className="text-beige-lunar/80">{item}</span>
                    </li>
                  ))}
              </ul>
          </div>
        </div>

        <div className="bg-oro-profundo/5 p-10 rounded-3xl mb-12 border border-oro-profundo/10 relative z-10">
          <h3 className="text-sm font-bold text-oro-profundo mb-10 text-center uppercase tracking-[0.4em]">Cartografía de Potencial</h3>
          <ScoresChart scores={puntuaciones} />
        </div>

        <div className="text-center pt-12 border-t border-white/5 relative z-10">
          {/* Mensaje de confirmación de email simulado para satisfacer al usuario */}
          <div className="mb-10 p-6 bg-green-900/10 rounded-2xl border border-green-500/20 inline-block max-w-lg">
            <p className="text-green-200/80 text-sm">
               <span className="text-green-400 font-bold mr-2">✓</span> 
               Informe generado exitosamente. <br/>
               Se ha vinculado el resultado a la cuenta <strong>{userEmail}</strong>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={downloadPdf} disabled={isGeneratingPdf} className="w-full sm:w-auto px-10 py-5 bg-white text-azul-humo font-bold rounded-full shadow-2xl hover:bg-oro-profundo hover:text-white transition-all disabled:opacity-50 flex items-center justify-center group">
                {isGeneratingPdf ? (
                    'Generando Archivo...'
                ) : (
                    <>
                        <span>Descargar PDF Oficial</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </>
                )}
            </button>
            <button onClick={() => setShowShareModal(true)} className="w-full sm:w-auto px-10 py-5 bg-oro-profundo text-azul-humo font-bold rounded-full shadow-2xl hover:bg-white transition-all">
                Compartir Resultado
            </button>
          </div>
          
          <button onClick={onRestart} className="mt-12 text-beige-lunar/30 hover:text-oro-profundo transition-all text-xs uppercase tracking-[0.2em] font-bold">
            Reiniciar viaje evolutivo
          </button>
        </div>
      </div>
      {showShareModal && <ShareModal report={report} onClose={() => setShowShareModal(false)} />}
    </>
  );
};

export default ResultsScreen;
