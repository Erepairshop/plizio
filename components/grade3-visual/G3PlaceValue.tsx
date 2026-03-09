'use client';

import React, { useState } from 'react';

const T = {
  hundreds: { hu: 'Hány százas van?', de: 'Wie viele Hunderter gibt es?', en: 'How many hundreds are there?', ro: 'Câte sute sunt?' },
  tens:     { hu: 'Hány tízes van?',  de: 'Wie viele Zehner gibt es?',    en: 'How many tens are there?',     ro: 'Câte zeci sunt?' },
  ones:     { hu: 'Hány egyes van?',  de: 'Wie viele Einer gibt es?',     en: 'How many ones are there?',     ro: 'Câte unități sunt?' },
  correct:  { hu: 'Szuper!',          de: 'Super!',                        en: 'Great!',                       ro: 'Super!' },
} as const;

interface Props {
  number: number;
  question: 'hundreds' | 'tens' | 'ones';
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const G3PlaceValue: React.FC<Props> = ({
  number,
  question,
  lang = 'de',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;

  const correctAnswer = question === 'hundreds' ? String(hundreds) : question === 'tens' ? String(tens) : String(ones);

  const handleChange = (val: string) => {
    const clean = val.replace(/\D/g, '');
    setUserInput(clean);
    onValueChange?.(clean);
    if (!embedded) {
      if (clean === correctAnswer) { setIsCorrect(true); onAnswer?.(true); }
      else if (clean.length >= correctAnswer.length) { setIsCorrect(false); onAnswer?.(false); }
      else setIsCorrect(null);
    }
  };

  return (
    <div className={`flex flex-col items-center gap-4 w-full ${embedded ? 'p-2' : 'p-6 bg-amber-50 rounded-2xl'}`}>
      {/* Visual blocks */}
      <div className="flex items-end gap-6 min-h-[120px] p-4 bg-white rounded-xl border border-amber-200">
        {/* Hundreds — large squares */}
        <div className="flex gap-1">
          {Array.from({ length: hundreds }).map((_, i) => (
            <div key={`h-${i}`} className="w-10 h-10 border-2 border-blue-500 bg-blue-100 rounded flex items-center justify-center text-blue-700 text-xs font-bold">
              100
            </div>
          ))}
          {hundreds === 0 && <div className="w-10 h-10 opacity-20 border border-dashed border-blue-300 rounded" />}
        </div>
        {/* Tens — vertical bars */}
        <div className="flex gap-1">
          {Array.from({ length: tens }).map((_, i) => (
            <div key={`t-${i}`} className="w-4 h-10 border-2 border-green-500 bg-green-100 rounded flex flex-col justify-between py-0.5 overflow-hidden">
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={j} className="w-full h-[8%] border-b border-green-300 last:border-0" />
              ))}
            </div>
          ))}
          {tens === 0 && <div className="w-4 h-10 opacity-20 border border-dashed border-green-300 rounded" />}
        </div>
        {/* Ones — small cubes */}
        <div className="grid grid-cols-3 gap-1 h-fit">
          {Array.from({ length: ones }).map((_, i) => (
            <div key={`o-${i}`} className="w-4 h-4 border-2 border-orange-500 bg-orange-100 rounded" />
          ))}
          {ones === 0 && <div className="w-4 h-4 opacity-20 border border-dashed border-orange-300 rounded" />}
        </div>
      </div>

      {/* Question label */}
      <div className="text-sm font-semibold text-slate-600 text-center">
        {T[question][lang]}
      </div>

      {/* Input */}
      <input
        type="text"
        inputMode="numeric"
        placeholder="?"
        value={userInput}
        onChange={(e) => handleChange(e.target.value)}
        className={`w-20 text-center text-2xl font-bold py-2 border-2 rounded-xl outline-none transition-all
          ${!embedded && isCorrect === true ? 'border-green-500 bg-green-50' :
            !embedded && isCorrect === false ? 'border-red-500 bg-red-50' :
            'border-amber-300 bg-white focus:border-amber-500'}`}
      />
      {!embedded && isCorrect && (
        <span className="text-green-600 text-xs font-bold">{T.correct[lang]} ✨</span>
      )}
    </div>
  );
};

export default G3PlaceValue;
