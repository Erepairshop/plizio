'use client';

import React, { useState } from 'react';
import type { Language } from '@/lib/language';

const T = {
  label: { hu: "Hány óra van?", de: "Wie spät ist es?", en: "What time is it?", ro: "Cât este ceasul?" },
  correct: { hu: "Helyes válasz!", de: "Richtige Antwort!", en: "Correct!", ro: "Corect!" },
} as const;

interface Props {
  hour: number;        // 1-12
  minute: number;      // 0, 5, 10, 15... (5 percenként)
  lang?: Language;
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const AnalogClock: React.FC<Props> = ({ hour, minute, lang = 'en', embedded = false, onValueChange, onAnswer }) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const correctAnswer = `${hour}:${String(minute).padStart(2, '0')}`;
  
  // Statikus szögszámítás (animáció nélkül a kérésedre)
  const minuteAngle = minute * 6; 
  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;

  const handleChange = (val: string) => {
    setUserInput(val);
    onValueChange?.(val);
    
    // Feedback és onAnswer CSAK nem-embedded módban
    if (!embedded) {
      if (val === correctAnswer) {
        setIsCorrect(true);
        onAnswer?.(true);
      } else if (val.length >= correctAnswer.length) {
        setIsCorrect(false);
        onAnswer?.(false);
      } else {
        setIsCorrect(null);
      }
    }
  };

  const renderNumbers = () => {
    return [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => {
      const angle = (num * 30) * (Math.PI / 180);
      const x = 100 + 72 * Math.sin(angle);
      const y = 100 - 72 * Math.cos(angle);
      return (
        <text
          key={num}
          x={x} y={y}
          fill="rgba(255, 255, 255, 0.8)"
          fontSize="13"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ userSelect: 'none' }}
        >
          {num}
        </text>
      );
    });
  };

  return (
    <div className={`flex flex-col items-center gap-6 ${embedded ? 'w-full p-2' : 'p-8 bg-[#1a1a2e] rounded-3xl shadow-xl'}`}>
      
      <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-[0_0_8px_rgba(0,212,255,0.2)]">
        {/* Óralap és keret */}
        <circle cx="100" cy="100" r="96" fill="#1a1a2e" stroke="#2a2a4a" strokeWidth="6" />
        
        {/* 60 darab percvonás (kicsi, közepes, nagy) */}
        {[...Array(60)].map((_, i) => {
          const isFiveMinute = i % 5 === 0;
          const isQuarter = i % 15 === 0;
          return (
            <line
              key={i}
              x1="100" y1="8" 
              x2="100" y2={isQuarter ? 22 : (isFiveMinute ? 18 : 12)}
              stroke="white"
              strokeOpacity={isFiveMinute ? 0.6 : 0.2}
              strokeWidth={isFiveMinute ? 3 : 1}
              transform={`rotate(${i * 6} 100 100)`}
            />
          );
        })}

        {renderNumbers()}

        {/* Kismutató (Óra) - Neon Pink */}
        <line
          x1="100" y1="100" x2="100" y2="58"
          stroke="#FF2D78" strokeWidth="7" strokeLinecap="round"
          transform={`rotate(${hourAngle} 100 100)`}
          style={{ filter: 'drop-shadow(0 0 3px #FF2D78)' }}
        />

        {/* Nagymutató (Perc) - Neon Blue */}
        <line
          x1="100" y1="100" x2="100" y2="30"
          stroke="#00D4FF" strokeWidth="4" strokeLinecap="round"
          transform={`rotate(${minuteAngle} 100 100)`}
          style={{ filter: 'drop-shadow(0 0 3px #00D4FF)' }}
        />

        {/* Középső tengely */}
        <circle cx="100" cy="100" r="4.5" fill="white" />
      </svg>

      {/* Input Szekció */}
      <div className="flex flex-col items-center gap-3">
        {!embedded && (
          <label className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">
            {T.label[lang]}
          </label>
        )}
        
        <input
          type="text"
          placeholder="H:MM"
          value={userInput}
          onChange={(e) => handleChange(e.target.value)}
          className={`
            w-28 text-center text-2xl font-mono py-2 bg-[#2a2a4a] border-2 rounded-xl text-white outline-none transition-all
            ${(!embedded && isCorrect === true) ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 
              (!embedded && isCorrect === false) ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 
              'border-white/10 focus:border-[#00D4FF]'}
          `}
        />
        
        {!embedded && isCorrect && (
          <span className="text-green-400 text-xs font-bold tracking-tight">{T.correct[lang]} ✨</span>
        )}
      </div>
    </div>
  );
};

export default AnalogClock;
