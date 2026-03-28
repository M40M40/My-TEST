import React, { useState, useMemo, useEffect } from 'react';
import { QUESTIONS } from '../constants';
import type { Answers, Question } from '../types';

interface TestScreenProps {
  onSubmit: (answers: Answers) => void;
}

const TestScreen: React.FC<TestScreenProps> = ({ onSubmit }) => {
  const [answers, setAnswers] = useState<Answers>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  
  useEffect(() => {
    // Shuffle questions on component mount
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const totalQuestions = shuffledQuestions.length;
  const answeredCount = Object.keys(answers).length;

  const handleAnswerChange = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answeredCount === totalQuestions) {
      onSubmit(answers);
    } else {
      alert("Por favor, responde todas las preguntas antes de finalizar.");
    }
  };

  const progress = useMemo(() => {
    if (totalQuestions === 0) return 0;
    return (answeredCount / totalQuestions) * 100;
  }, [answeredCount, totalQuestions]);
  
  return (
    <div className="p-4 sm:p-8 bg-azul-humo text-beige-lunar rounded-2xl shadow-2xl border border-oro-profundo/50">
      <h2 className="text-3xl font-bold text-center mb-2">Cuestionario de Personalidad</h2>
       <p className="text-center text-beige-lunar/80 mb-6">Elige la opción que mejor te represente.</p>
      
      <div className="w-full bg-gris-carbon/50 rounded-full h-2.5 mb-8">
        <div className="bg-oro-profundo h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
            {shuffledQuestions.map((q, index) => (
            <div key={q.id} className="p-4 bg-gris-carbon/30 rounded-lg animate-fade-in" style={{animationDelay: `${index * 50}ms`}}>
                <p className="mb-3 text-lg">{index + 1}. {q.text}</p>
                <div className="flex justify-center space-x-2 sm:space-x-4">
                {[
                    { value: 1, label: '1' },
                    { value: 2, label: '2' },
                    { value: 3, label: '3' },
                    { value: 4, label: '4' },
                ].map(({ value, label }) => (
                    <label key={value} className="flex flex-col items-center cursor-pointer">
                    <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={value}
                        checked={answers[q.id] === value}
                        onChange={() => handleAnswerChange(q.id, value)}
                        className="sr-only"
                    />
                    <span className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all duration-200 ${answers[q.id] === value ? 'bg-oro-profundo border-oro-profundo text-azul-humo scale-110' : 'bg-azul-humo border-oro-profundo/80 text-beige-lunar/80 hover:bg-oro-profundo/50'}`}>
                        {label}
                    </span>
                    </label>
                ))}
                </div>
            </div>
            ))}
        </div>
        
        <div className="text-center pt-6">
          <button
            type="submit"
            disabled={answeredCount < totalQuestions}
            className="px-10 py-4 bg-oro-profundo text-azul-humo font-bold rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-beige-lunar hover:text-azul-humo transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Finalizar y Ver Mi Perfil
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestScreen;