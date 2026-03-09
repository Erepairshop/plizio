'use client';

import React, { useState } from 'react';

interface Props {
  /** Érmék listája: [{value: 2, count: 3}, {value: 1, count: 2}] */
  coins: { value: number; count: number }[];
  /** Pénznem (megjelenítéshez) */
  currency?: '€' | 'Ft' | '$';
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const CoinCounter: React.FC<Props> = ({ 
  coins, 
  currency = '€', 
  embedded = false, 
  onValueChange, 
  onAnswer 
}) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const totalValue = coins.reduce((acc, curr) => acc + curr.value * curr.count, 0);
  const correctAnswer = String(totalValue);

  const handleChange = (val: string) => {
    const cleanVal = val.replace(/\D/g, ''); // Csak számokat engedünk
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

  // Érmék méretezése az érték alapján (relatív skálázás)
  const getCoinSize = (value: number) => {
    if (value >= 10) return 'w-16 h-16 text-xl';
    if (value >= 5) return 'w-14 h-14 text-lg';
    if (value >= 2) return 'w-12 h-12 text-base';
    return 'w-10 h-10 text-sm';
  };

  // Arany árnyalatok az érték szerint (mélyebb arany a nagyobbaknak)
  const getCoinColor = (value: number) => {
    if (value >= 10) return 'bg-[#FFD700] border-[#B8860B]';
    if (value >= 5) return 'bg-[#FFDF00] border-[#DAA520]';
    return 'bg-[#FFF44F] border-[#FFD700]';
  };

  return (
    <div className={`flex flex-col items-center gap-8 w-full ${embedded ? 'p-2' : 'p-10 bg-[#1a1a2e] rounded-3xl shadow-xl'}`}>
      
      {/* Érmék Megjelenítése Szekció */}
      <div className="flex flex-col gap-6 w-full items-center bg-[#0f0f1e] p-6 rounded-2xl border border-white/5">
        {coins.map((coinGroup, groupIdx) => (
          <div key={groupIdx} className="flex flex-wrap justify-center items-center gap-3">
            {[...Array(coinGroup.count)].map((_, coinIdx) => (
              <div
                key={`${groupIdx}-${coinIdx}`}
                className={`
                  ${getCoinSize(coinGroup.value)}
                  ${getCoinColor(coinGroup.value)}
                  rounded-full border-2 flex items-center justify-center 
                  font-bold text-[#1a1a2e] shadow-[0_4px_10px_rgba(255,215,0,0.3)]
                  relative group cursor-default select-none
                `}
              >
                {/* Érme belső díszítő köre */}
                <div className="absolute inset-1 border border-[#1a1a2e]/10 rounded-full" />
                <span>{coinGroup.value}</span>
              </div>
            ))}
            {/* Érték jelzése a sor végén halványan */}
            <span className="ml-2 text-white/30 text-xs font-mono">{currency}</span>
          </div>
        ))}
      </div>

      {/* Input Szekció */}
      <div className="flex flex-col items-center gap-3">
        {!embedded && (
          <label className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">
            Összesen mennyi pénz ez?
          </label>
        )}
        
        <div className="relative flex items-center">
          <input
            type="text"
            inputMode="numeric"
            placeholder="0"
            value={userInput}
            onChange={(e) => handleChange(e.target.value)}
            className={`
              w-24 text-center text-3xl font-mono py-2 bg-[#2a2a4a] border-2 rounded-xl text-white outline-none transition-all
              ${(!embedded && isCorrect === true) ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 
                (!embedded && isCorrect === false) ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 
                'border-white/10 focus:border-[#FFD700]'}
            `}
          />
          <span className="ml-3 text-2xl text-white/40 font-light">{currency}</span>
        </div>


      </div>
    </div>
  );
};

export default CoinCounter;
