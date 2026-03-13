'use client';

import React, { useState } from 'react';
import type { Language } from '@/lib/language';

const T = {
  tens: { hu: "Hány tízes (oszlop) van?", de: "Wie viele Zehner (Stangen) gibt es?", en: "How many tens (columns) are there?", ro: "Câte zeci (coloane) sunt?" },
  ones: { hu: "Hány egyes (kocka) van?", de: "Wie viele Einer (Würfel) gibt es?", en: "How many ones (cubes) are there?", ro: "Câte unități (cuburi) sunt?" },
  total: { hu: "Melyik szám ez?", de: "Welche Zahl ist das?", en: "What number is this?", ro: "Ce număr este acesta?" },
  correct: { hu: "Szuper!", de: "Super!", en: "Great!", ro: "Super!" },
} as const;

interface Props {
  number: number;
  question: 'tens' | 'ones' | 'total';
  lang?: Language;
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const PlaceValueBlocks: React.FC<Props> = ({ 
  number, 
  question,
  lang = 'en',
  embedded = false,
  onValueChange, 
  onAnswer 
}) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const tens = Math.floor(number / 10);
  const ones = number % 10;

  const getCorrectAnswer = () => {
    if (question === 'tens') return String(tens);
    if (question === 'ones') return String(ones);
    return String(number);
  };

  const handleChange = (val: string) => {
    const cleanVal = val.replace(/\D/g, ''); // Csak számok
    setUserInput(cleanVal);
    onValueChange?.(cleanVal);

    if (!embedded) {
      const correct = getCorrectAnswer();
      if (cleanVal === correct) {
        setIsCorrect(true);
        onAnswer?.(true);
      } else if (cleanVal.length >= correct.length) {
        setIsCorrect(false);
        onAnswer?.(false);
      } else {
        setIsCorrect(null);
      }
    }
  };

  const labelMap = {
    tens: T.tens[lang],
    ones: T.ones[lang],
    total: T.total[lang],
  };

  return (
    <div className={`flex flex-col items-center gap-8 w-full ${embedded ? 'p-2' : 'p-8 bg-[#1a1a2e] rounded-3xl shadow-xl'}`}>
      
      {/* Vizuális Megjelenítés */}
      <div className="flex items-end gap-12 min-h-[160px] p-6 bg-[#0f0f1e] rounded-2xl border border-white/5 shadow-inner">
        
        {/* Tízesek szekció (Oszlopok) */}
        <div className="flex gap-2">
          {[...Array(tens)].map((_, i) => (
            <div 
              key={`ten-${i}`} 
              className="w-5 h-32 bg-[#00D4FF]/20 border-2 border-[#00D4FF] rounded-sm flex flex-col justify-between p-[1px] shadow-[0_0_10px_rgba(0,212,255,0.3)]"
            >
              {[...Array(10)].map((_, dot) => (
                <div key={dot} className="w-full h-[10%] border-b border-[#00D4FF]/30 last:border-0" />
              ))}
            </div>
          ))}
          {tens === 0 && <div className="h-32 w-1 border-l border-white/5" />}
        </div>

        {/* Egyesek szekció (Kockák) */}
        <div className="grid grid-cols-2 gap-2 h-fit">
          {[...Array(ones)].map((_, i) => (
            <div 
              key={`one-${i}`} 
              className="w-5 h-5 bg-[#00FF88]/20 border-2 border-[#00FF88] rounded-sm shadow-[0_0_8px_rgba(0,255,136,0.3)]"
            />
          ))}
        </div>
      </div>

      {/* Input Szekció */}
      <div className="flex flex-col items-center gap-3">
        <p className={`text-xs font-semibold text-center px-2 pb-1 ${embedded ? 'text-slate-500' : 'text-white/50 uppercase tracking-[0.2em]'}`}>
          {labelMap[question]}
        </p>
        
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
              'border-white/10 focus:border-[#00D4FF]'}
          `}
        />

        {!embedded && isCorrect && (
          <span className="text-[#00FF88] text-xs font-bold uppercase tracking-widest">{T.correct[lang]} ✨</span>
        )}
      </div>
    </div>
  );
};

export default PlaceValueBlocks;
