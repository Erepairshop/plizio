'use client';

import React, { useState } from 'react';
import type { Language } from '@/lib/language';

const T = {
  label: { hu: "Melyik számra mutat a nyíl?", de: "Auf welche Zahl zeigt der Pfeil?", en: "Which number does the arrow point to?", ro: "La ce număr arată săgeata?" },
  correct: { hu: "Ügyes vagy!", de: "Super!", en: "Well done!", ro: "Bravo!" },
} as const;

interface Props {
  /** A számegyenes kezdőértéke (pl. 0) */
  min: number;
  /** A számegyenes végértéke (pl. 20) */
  max: number;
  /** Lépésköz a vonások között (pl. 1 vagy 2) */
  step: number;
  /** A megjelölt szám amit a gyereknek be kell írnia */
  markedValue: number;
  lang?: Language;
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const NumberLineMarker: React.FC<Props> = ({ 
  min, 
  max, 
  step, 
  markedValue,
  lang = 'en',
  embedded = false,
  onValueChange, 
  onAnswer 
}) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const correctAnswer = String(markedValue);
  const range = max - min;
  
  // Kiszámoljuk a jelölő pozícióját százalékban
  const markerPosition = ((markedValue - min) / range) * 100;

  const handleChange = (val: string) => {
    setUserInput(val);
    onValueChange?.(val);

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

  // Vonások generálása
  const ticks = [];
  for (let i = min; i <= max; i += step) {
    ticks.push(i);
  }

  return (
    <div className={`flex flex-col items-center gap-12 w-full ${embedded ? 'p-2' : 'p-10 bg-[#1a1a2e] rounded-3xl shadow-xl'}`}>
      
      <div className="relative w-full h-20 flex items-center px-6">
        {/* Fő vízszintes vonal */}
        <div className="absolute left-6 right-6 h-[2px] bg-white/40 shadow-[0_0_5px_rgba(255,255,255,0.1)]" />

        {/* Skála vonások és számok */}
        <div className="absolute left-6 right-6 h-full flex justify-between items-center">
          {ticks.map((num) => (
            <div 
              key={num} 
              className="relative flex flex-col items-center"
              style={{ left: `${((num - min) / range) * 100}%`, position: 'absolute', transform: 'translateX(-50%)' }}
            >
              {/* Függőleges vonás */}
              <div className={`w-[2px] ${num % 5 === 0 ? 'h-5 bg-white/60' : 'h-3 bg-white/30'}`} />
              
              {/* Szám az osztás alatt */}
              <span className="mt-2 text-white/70 font-mono text-sm select-none">
                {num}
              </span>
            </div>
          ))}
        </div>

        {/* Neon Nyíl (Mutató) */}
        <div 
          className="absolute top-0 flex flex-col items-center transition-all duration-500 ease-out"
          style={{ left: `${markerPosition + 6}%`, transform: 'translateX(-100%)' }} // +6% korrekció a padding miatt
        >
          {/* Nyíl hegye (SVG-vel a precíz neon hatásért) */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_6px_#FF2D78]">
            <path d="M12 21V3M12 21L6 15M12 21L18 15" stroke="#FF2D78" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Input Szekció */}
      <div className="flex flex-col items-center gap-3">
        {!embedded && (
          <label className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">
            {T.label[lang]}
          </label>
        )}
        
        <input
          type="number"
          placeholder="?"
          value={userInput}
          onChange={(e) => handleChange(e.target.value)}
          className={`
            w-24 text-center text-2xl font-mono py-2 bg-[#2a2a4a] border-2 rounded-xl text-white outline-none transition-all
            ${(!embedded && isCorrect === true) ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 
              (!embedded && isCorrect === false) ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 
              'border-white/10 focus:border-[#00D4FF]'}
          `}
        />

        {!embedded && isCorrect && (
          <span className="text-green-400 text-xs font-bold animate-bounce">{T.correct[lang]} 🚀</span>
        )}
      </div>
    </div>
  );
};

export default NumberLineMarker;
