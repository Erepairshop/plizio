'use client';

import React, { useState, useEffect } from 'react';

interface Props {
  sequence: (number | null)[];
  /** A helyes válaszok sorrendben (pl. [6, 10]) */
  answers: number[];
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const SequenceFiller: React.FC<Props> = ({ 
  sequence, 
  answers, 
  embedded = false, 
  onValueChange, 
  onAnswer 
}) => {
  // Inicializálunk egy tömböt a hiányzó értékeknek (null helyett üres string)
  const missingCount = sequence.filter(n => n === null).length;
  const [userAnswers, setUserAnswers] = useState<string[]>(new Array(missingCount).fill(''));
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const correctAnswerStr = answers.join(",");

  const handleInputChange = (index: number, val: string) => {
    // Csak számokat engedélyezünk
    const cleanVal = val.replace(/\D/g, '');
    const newAnswers = [...userAnswers];
    newAnswers[index] = cleanVal;
    
    setUserAnswers(newAnswers);
    
    // Összefűzzük a válaszokat vesszővel, szóköz nélkül
    const currentFullAnswer = newAnswers.join(",");
    onValueChange?.(currentFullAnswer);

    if (!embedded) {
      // Csak akkor validálunk, ha minden mező ki van töltve legalább 1 karakterrel
      if (newAnswers.every(ans => ans !== '')) {
        const correct = currentFullAnswer === correctAnswerStr;
        setIsCorrect(correct);
        onAnswer?.(correct);
      } else {
        setIsCorrect(null);
      }
    }
  };

  // Segédfüggvény, hogy megtudjuk, a sequence hanyadik 'null' eleménél járunk
  let missingIndexCounter = 0;

  return (
    <div className={`flex flex-col items-center gap-8 w-full ${embedded ? 'p-2' : 'p-10 bg-[#1a1a2e] rounded-3xl shadow-xl'}`}>
      
      {!embedded && (
        <label className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">
          Folytasd a számsort!
        </label>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        {sequence.map((num, idx) => {
          if (num !== null) {
            // Megadott szám kártyája
            return (
              <div 
                key={`num-${idx}`}
                className="w-16 h-20 flex items-center justify-center bg-[#0f0f1e] border-2 border-[#00D4FF]/30 rounded-2xl shadow-[0_0_10px_rgba(0,212,255,0.1)]"
              >
                <span className="text-white text-2xl font-bold font-mono">{num}</span>
              </div>
            );
          } else {
            // Hiányzó szám (Input kártya)
            const currentMissingIdx = missingIndexCounter++;
            return (
              <div 
                key={`input-${idx}`}
                className={`w-16 h-20 bg-[#2a2a4a]/40 border-2 border-dashed rounded-2xl transition-all duration-300
                  ${!embedded && isCorrect === true ? 'border-green-500 bg-green-500/10' : 
                    !embedded && isCorrect === false ? 'border-red-500 bg-red-500/10' : 
                    'border-[#FF2D78] shadow-[0_0_10px_rgba(255,45,120,0.2)]'}
                `}
              >
                <input
                  type="text"
                  inputMode="numeric"
                  value={userAnswers[currentMissingIdx]}
                  onChange={(e) => handleInputChange(currentMissingIdx, e.target.value)}
                  className="w-full h-full bg-transparent text-center text-2xl font-bold font-mono text-[#FF2D78] outline-none"
                  placeholder="?"
                />
              </div>
            );
          }
        })}
      </div>

      {!embedded && isCorrect && (
        <div className="flex items-center gap-2 text-[#00FF88] font-bold animate-bounce">
          <span>Rájöttél a szabályra! 🌟</span>
        </div>
      )}
    </div>
  );
};

export default SequenceFiller;
