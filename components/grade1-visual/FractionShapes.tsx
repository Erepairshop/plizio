'use client';

import React, { useState } from 'react';
import type { Language } from '@/lib/language';

const T = {
  label: { hu: "Hány részt színeztünk ki?", de: "Wie viele Teile sind eingefärbt?", en: "How many parts are colored?", ro: "Câte părți sunt colorate?" },
} as const;

interface Props {
  shape: 'pizza' | 'rectangle' | 'circle';
  totalParts: number;
  coloredParts: number;
  lang?: Language;
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const FractionShapes: React.FC<Props> = ({ 
  shape, 
  totalParts, 
  coloredParts,
  lang = 'en',
  embedded = false,
  onValueChange, 
  onAnswer 
}) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const correctAnswer = String(coloredParts);

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

  const renderShape = () => {
    const size = 160;
    const center = size / 2;
    const radius = size / 2 - 10;

    if (shape === 'rectangle') {
      return (
        <svg width={size + 40} height={100} viewBox={`0 0 ${size + 40} 100`}>
          <rect x="20" y="10" width={size} height="80" fill="#2a2a4a" rx="4" />
          {[...Array(totalParts)].map((_, i) => (
            <rect
              key={i}
              x={20 + (i * size) / totalParts}
              y="10"
              width={size / totalParts}
              height="80"
              fill={i < coloredParts ? '#B44DFF' : 'transparent'}
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="2"
              className={i < coloredParts ? 'drop-shadow-[0_0_8px_rgba(180,77,255,0.5)]' : ''}
            />
          ))}
        </svg>
      );
    }

    // Kör és Pizza (Pie chart logika)
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={center} cy={center} r={radius} fill="#2a2a4a" />
        {[...Array(totalParts)].map((_, i) => {
          const startAngle = (i * 360) / totalParts;
          const endAngle = ((i + 1) * 360) / totalParts;
          const x1 = center + radius * Math.cos((Math.PI * (startAngle - 90)) / 180);
          const y1 = center + radius * Math.sin((Math.PI * (startAngle - 90)) / 180);
          const x2 = center + radius * Math.cos((Math.PI * (endAngle - 90)) / 180);
          const y2 = center + radius * Math.sin((Math.PI * (endAngle - 90)) / 180);
          const largeArcFlag = 360 / totalParts > 180 ? 1 : 0;

          const pathData = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

          return (
            <path
              key={i}
              d={pathData}
              fill={i < coloredParts ? '#B44DFF' : 'transparent'}
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth={shape === 'pizza' ? "3" : "1"}
              className={i < coloredParts ? 'drop-shadow-[0_0_8px_rgba(180,77,255,0.5)]' : ''}
            />
          );
        })}
        {shape === 'pizza' && (
          <circle cx={center} cy={center} r={radius} fill="none" stroke="#B44DFF" strokeWidth="4" strokeOpacity="0.2" />
        )}
      </svg>
    );
  };

  return (
    <div className={`flex flex-col items-center gap-8 w-full ${embedded ? 'p-2' : 'p-10 bg-[#1a1a2e] rounded-3xl shadow-xl'}`}>
      
      <div className="flex justify-center items-center min-h-[160px]">
        {renderShape()}
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className={`text-xs font-semibold text-center px-2 pb-1 ${embedded ? 'text-slate-500' : 'text-white/50 uppercase tracking-widest'}`}>
          {T.label[lang]}
        </p>
        
        <input
          type="text"
          inputMode="numeric"
          placeholder="?"
          value={userInput}
          onChange={(e) => handleChange(e.target.value)}
          className={`
            w-20 text-center text-3xl font-mono py-2 bg-[#2a2a4a] border-2 rounded-xl text-white outline-none transition-all
            ${(!embedded && isCorrect === true) ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 
              (!embedded && isCorrect === false) ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 
              'border-white/10 focus:border-[#B44DFF]'}
          `}
        />
      </div>
    </div>
  );
};

export default FractionShapes;
