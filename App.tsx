import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';
import TestScreen from './components/TestScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultsScreen from './components/ResultsScreen';
import { getVitalCodeReport } from './services/geminiService';
import type { Answers, Report } from './types';

type AppState = 'intro' | 'login' | 'welcome' | 'test' | 'loading' | 'results';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('intro');
  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleIntroFinish = () => {
    setAppState('login');
  };

  const handleLogin = () => {
    setAppState('welcome');
  };

  const startTest = () => {
    setAppState('test');
    setReport(null);
    setError(null);
  };

  const restartTest = () => {
    setAppState('login');
    setReport(null);
    setError(null);
  }

  const handleTestSubmit = async (answers: Answers) => {
    setAppState('loading');
    try {
      const result = await getVitalCodeReport(answers);
      setReport(result);
      setAppState('results');
    } catch (err) {
      console.error("Error generating report:", err);
      setError("Hubo un error al generar tu informe. Por favor, inténtalo de nuevo más tarde.");
      setAppState('results'); // Show results screen with error
    }
  };

  const renderContent = () => {
    switch (appState) {
      case 'intro':
        return <IntroScreen onFinish={handleIntroFinish} />;
      case 'welcome':
        return <WelcomeScreen onStart={startTest} />;
      case 'test':
        return <TestScreen onSubmit={handleTestSubmit} />;
      case 'loading':
        return <LoadingScreen />;
      case 'results':
        return <ResultsScreen report={report} error={error} onRestart={restartTest} />;
      case 'login':
      default:
        return <LoginScreen onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <main className="w-full max-w-4xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;