'use client';

import React, { useState } from 'react';
import type { Language } from '@/lib/language';

const T = {
  label: { hu: "Hány óra telt el összesen?", de: "Wie viele Stunden sind vergangen?", en: "How many hours have passed?", ro: "Câte ore au trecut?" },
  unit: { hu: "óra", de: "Std.", en: "hrs", ro: "ore" },
} as const;

interface Props {
  startHour: number;
  endHour: number;
  lang?: Language;
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const TimelineDuration: React.FC<Props> = ({ 
  startHour, 
  endHour,
  lang = 'en',
  embedded = false,
  onValueChange, 
  onAnswer 
}) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const duration = endHour - startHour;
  const correctAnswer = String(duration);

  const handleChange = (val: string) => {
    const cleanVal = val.replace(/\D/g, '');
    setUserInput(cleanVal);
    onValueChange?.(cleanVal);

    if (!embedded) {
      if (cleanVal === correctAnswer) {
        setIsCorrect(true);
        onAnswer?.(true);
      } else if (cleanVal.length >= correctAnswer.length) {
        setIsCorrect(false);
        onAnswer?.(false);
      } else {
        setIsCorrect(null);
      }
    }
  };

  // Óra ikon SVG komponens (Pink Neon)
  const ClockIcon = ({ x }: { x: number }) => (
    <g transform={`translate(${x - 15}, 20)`}>
      <circle cx="15" cy="15" r="14" stroke="#FF2D78" strokeWidth="2" fill="#1a1a2e" />
      <line x1="15" y1="15" x2="15" y2="8" stroke="#FF2D78" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="15" x2="20" y2="15" stroke="#FF2D78" strokeWidth="2" strokeLinecap="round" />
    </g>
  );

  return (
    <div className={`flex flex-col items-center gap-8 w-full ${embedded ? 'p-2' : 'p-10 bg-[#1a1a2e] rounded-3xl shadow-xl'}`}>
      
      <div className="relative w-full h-40 max-w-md">
        <svg width="100%" height="100%" viewBox="0 0 400 120">
          {/* Fő Idővonal */}
          <line x1="40" y1="80" x2="360" y2="80" stroke="#00D4FF" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" />
          
          {/* Start Pont */}
          <ClockIcon x={40} />
          <text x="40" y="65" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="font-mono">
            {startHour}:00
          </text>
          <circle cx="40" cy="80" r="5" fill="#00D4FF" className="shadow-[0_0_8px_#00D4FF]" />

          {/* End Pont */}
          <ClockIcon x={360} />
          <text x="360" y="65" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="font-mono">
            {endHour}:00
          </text>
          <circle cx="360" cy="80" r="5" fill="#00D4FF" />

          {/* Összekötő Ív és Kérdőjel */}
          <path 
            d="M 40 80 Q 200 10 360 80" 
            fill="none" 
            stroke="#FFD700" 
            strokeWidth="3" 
            strokeDasharray="8 4" 
            strokeOpacity="0.6"
          />
          <g transform="translate(185, 35)">
            <circle cx="15" cy="15" r="18" fill="#1a1a2e" stroke="#FFD700" strokeWidth="2" />
            <text x="15" y="21" fill="#FFD700" fontSize="18" fontWeight="bold" textAnchor="middle">?</text>
          </g>
        </svg>
      </div>

      {/* Input Szekció */}
      <div className="flex flex-col items-center gap-4">
        {!embedded && (
          <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold">
            {T.label[lang]}
          </label>
        )}
        
        <div className="flex items-center gap-3">
          <input
            type="text"
            inputMode="numeric"
            placeholder="?"
            value={userInput}
            onChange={(e) => handleChange(e.target.value)}
            className={`
              w-24 text-center text-3xl font-mono py-2 bg-[#2a2a4a] border-2 rounded-xl text-white outline-none transition-all
              ${(!embedded && isCorrect === true) ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 
                (!embedded && isCorrect === false) ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 
                'border-white/10 focus:border-[#FFD700]'}
            `}
          />
          <span className="text-white/40 font-bold uppercase tracking-tighter">{T.unit[lang]}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineDuration;
