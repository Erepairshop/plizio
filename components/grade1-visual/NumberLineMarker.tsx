'use client';

import React, { useState } from 'react';
import type { Language } from '@/lib/language';

const T = {
  label: { hu: "Melyik számra mutat a nyíl?", de: "Auf welche Zahl zeigt der Pfeil?", en: "Which number does the arrow point to?", ro: "La ce număr arată săgeata?" },
  correct: { hu: "Ügyes vagy!", de: "Super!", en: "Well done!", ro: "Bravo!" },
} as const;

interface Props {
  min: number;
  max: number;
  step: number;
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

  const ticks = [];
  for (let i = min; i <= max; i += step) ticks.push(i);

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

  return (
    <div className={`flex flex-col items-center gap-10 w-full ${embedded ? 'p-2' : 'p-10 bg-[#1a1a2e] rounded-3xl shadow-xl'}`}>

      {/* NUMBER LINE */}
      <div className={`relative w-full h-24 ${embedded ? '' : 'max-w-[600px]'}`}>

        {/* main line */}
        <div className={`absolute top-10 left-0 right-0 h-[2px] ${embedded ? 'bg-slate-400' : 'bg-white/40'}`} />

        {/* ticks */}
        {ticks.map(num => {

          const pos = ((num - min) / range) * 100;

          return (
            <div
              key={num}
              className="absolute flex flex-col items-center"
              style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            >

              <div className={`w-[2px] ${num % 5 === 0 ? (embedded ? 'h-6 bg-slate-600' : 'h-6 bg-white/70') : (embedded ? 'h-4 bg-slate-400' : 'h-4 bg-white/40')}`} />

              <span className={`${embedded ? 'text-slate-700' : 'text-white/70'} text-sm mt-1 font-mono`}>
                {num}
              </span>

            </div>
          );
        })}

        {/* arrow */}
        <div
          className="absolute top-0 flex flex-col items-center"
          style={{ left: `${markerPosition}%`, transform: 'translateX(-50%)' }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
            className="drop-shadow-[0_0_6px_#FF2D78]">

            <path
              d="M12 2V18M12 18L6 12M12 18L18 12"
              stroke="#FF2D78"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

          </svg>
        </div>

      </div>

      {/* INPUT */}
      <div className="flex flex-col items-center gap-3">
        <p className={`text-xs font-semibold text-center px-2 pb-1 ${embedded ? 'text-slate-500' : 'text-white/60'}`}>
          {T.label[lang]}
        </p>

        <input
          type="number"
          placeholder="?"
          value={userInput}
          onChange={(e) => handleChange(e.target.value)}
          className={`
            w-24 text-center text-2xl font-bold py-2 border-2 rounded-xl outline-none transition
            ${embedded
              ? 'bg-slate-100 text-slate-800 border-slate-300 focus:border-blue-500'
              : 'bg-[#2a2a4a] text-white border-white/10 focus:border-[#00D4FF]'}
            ${(!embedded && isCorrect === true)
              ? 'border-green-500 shadow-[0_0_12px_rgba(34,197,94,0.4)]'
              : (!embedded && isCorrect === false)
                ? 'border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]'
                : ''}
          `}
        />

        {!embedded && isCorrect && (
          <span className="text-green-400 text-xs font-bold animate-bounce">
            {T.correct[lang]} 🚀
          </span>
        )}

      </div>

    </div>
  );
};

export default NumberLineMarker;
