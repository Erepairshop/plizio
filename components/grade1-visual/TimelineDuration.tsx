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

  // Dinamikus Óra Ikon: a mutatók az aktuális órát jelzik
  const ClockIcon = ({ x, hour }: { x: number; hour: number }) => {
    const rotation = (hour % 12) * 30; // 360 fok / 12 óra = 30 fok/óra
    return (
      <g transform={`translate(${x - 20}, 15)`}>
        <circle cx="20" cy="20" r="18" stroke="#FF2D78" strokeWidth="2.5" fill="#1a1a2e" />
        {/* Kismutató (Óra) */}
        <line 
          x1="20" y1="20" x2="20" y2="10" 
          stroke="#FF2D78" strokeWidth="3" strokeLinecap="round" 
          transform={`rotate(${rotation}, 20, 20)`}
        />
        {/* Nagymutató (Perc - fixen 12-esen) */}
        <line x1="20" y1="20" x2="20" y2="6" stroke="#FF2D78" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    );
  };

  return (
    <div className={`flex flex-col items-center gap-4 w-full ${embedded ? 'p-2' : 'p-10 bg-[#1a1a2e] rounded-3xl shadow-xl'}`}>
      
      <div className="relative w-full h-44 max-w-md">
        <svg width="100%" height="100%" viewBox="0 0 400 140">
          {/* Idővonal */}
          <line x1="40" y1="100" x2="360" y2="100" stroke="#00D4FF" strokeWidth="3" strokeOpacity="0.3" strokeLinecap="round" />
          
          {/* Start fázis */}
          <ClockIcon x={40} hour={startHour} />
          <text x="40" y="75" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="font-mono">
            {startHour}:00
          </text>
          <circle cx="40" cy="100" r="5" fill="#00D4FF" />

          {/* Vége fázis */}
          <ClockIcon x={360} hour={endHour} />
          <text x="360" y="75" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="font-mono">
            {endHour}:00
          </text>
          <circle cx="360" cy="100" r="5" fill="#00D4FF" />

          {/* Sárga ív */}
          <path 
            d="M 40 90 Q 200 0 360 90" 
            fill="none" 
            stroke="#FFD700" 
            strokeWidth="3" 
            strokeDasharray="8 4" 
            strokeOpacity="0.8"
          />

          {/* SEGÍTSÉG: Pöttyök a számoláshoz (Pedagógiai javítás) */}
          {Array.from({ length: duration }).map((_, i) => {
            const step = 320 / duration;
            const xPos = 40 + (i + 0.5) * step;
            return (
              <circle key={i} cx={xPos} cy="60" r="4" fill="#FFD700" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            );
          })}

          {/* Középső kérdőjel kör */}
          <g transform="translate(182, 15)">
            <circle cx="18" cy="18" r="20" fill="#1a1a2e" stroke="#FFD700" strokeWidth="3" />
            <text x="18" y="25" fill="#FFD700" fontSize="22" fontWeight="bold" textAnchor="middle">?</text>
          </g>
        </svg>
      </div>

      <div className="flex flex-col items-center gap-3">
        {!embedded && (
          <label className="text-white/50 text-xs uppercase tracking-widest font-bold">
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
