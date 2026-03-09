'use client';

import React, { useState } from 'react';

interface Props {
  /** 2D boolean rács — true = színezett cella */
  grid: boolean[][];
  /** Mit kérdezünk: "count" = hány színezett, "empty" = hány üres */
  question: 'count' | 'empty';
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const GridCounter: React.FC<Props> = ({ grid, question, embedded = false, onValueChange, onAnswer }) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const flatGrid = grid.flat();
  const coloredCount = flatGrid.filter(Boolean).length;
  const emptyCount = flatGrid.length - coloredCount;
  
  const correctAnswer = question === 'count' ? String(coloredCount) : String(emptyCount);

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

  return (
    <div className={`flex flex-col items-center gap-8 w-full ${embedded ? 'p-2' : 'p-8 bg-[#1a1a2e] rounded-3xl shadow-xl'}`}>
      
      {/* Rács Megjelenítése */}
      <div className="p-4 bg-[#0f0f1e] rounded-xl border border-white/5 shadow-inner">
        <div 
          className="grid gap-1.5"
          style={{ 
            gridTemplateColumns: `repeat(${grid[0]?.length || 0}, minmax(0, 1fr))` 
          }}
        >
          {grid.map((row, rowIndex) => (
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                  w-8 h-8 rounded-md transition-all duration-300
                  ${cell 
                    ? 'bg-[#B44DFF] shadow-[0_0_12px_rgba(180,77,255,0.6)] border border-[#d199ff]' 
                    : 'bg-[#2a2a4a] border border-white/5'}
                `}
              />
            ))
          ))}
        </div>
      </div>

      {/* Input Szekció */}
      <div className="flex flex-col items-center gap-3">
        {!embedded && (
          <label className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold text-center">
            {question === 'count' ? 'Hány lila négyzetet látsz?' : 'Hány sötét négyzet maradt?'}
          </label>
        )}
        
        <div className="relative">
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
                'border-white/10 focus:border-[#B44DFF]'}
            `}
          />
        </div>

        {!embedded && isCorrect && (
          <span className="text-[#B44DFF] text-xs font-bold uppercase tracking-widest animate-pulse">
            Pontosan! 👾
          </span>
        )}
      </div>
    </div>
  );
};

export default GridCounter;
