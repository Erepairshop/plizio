"use client";
import { useState, useCallback, memo } from "react";

interface BalanceScaleProps {
  leftWeight: number;
  rightInitial: number;
  missingWeight: number; // opcionális, ha a szülő logikája igényli
  unitIcon?: string;
  color: string;
  onDone: (correct: boolean) => void;
}

const BalanceScale = memo(function BalanceScale({
  leftWeight,
  rightInitial,
  unitIcon = "📦",
  color,
  onDone,
}: BalanceScaleProps) {
  const [currentRight, setCurrentRight] = useState(rightInitial);
  const [isJiggling, setIsJiggling] = useState(false);

  // Fizika: dőlésszög kiszámítása (max 20 fokos dőlés)
  const difference = leftWeight - currentRight;
  const tiltAngle = Math.max(-20, Math.min(20, difference * 3));

  const checkResult = useCallback((value: number) => {
    if (value === leftWeight) {
      setTimeout(() => onDone(true), 1200); // Kis szünet a sikerélményhez
    } else if (value > leftWeight + 15) {
      // Túl sok a súly -> hiba jelzése rezgéssel
      setIsJiggling(true);
      setTimeout(() => setIsJiggling(false), 500);
    }
  }, [leftWeight, onDone]);

  const addWeight = (amount: number) => {
    const next = currentRight + amount;
    setCurrentRight(next);
    checkResult(next);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-6 bg-white/5 rounded-2xl shadow-lg border border-white/10">
      
      {/* Vizuális Mérleg */}
      <svg 
        viewBox="0 0 300 200" 
        className={`w-full h-48 sm:h-56 transition-transform ${isJiggling ? 'animate-bounce' : ''}`}
      >
        {/* Talpazat */}
        <path d="M130 180 L170 180 L150 120 Z" fill="#4B5563" />
        <rect x="110" y="180" width="80" height="10" rx="5" fill="#374151" />

        {/* Mérleg karja és serpenyői (Forgás a középpont körül) */}
        <g 
          style={{ 
            transform: `rotate(${tiltAngle}deg)`, 
            transformOrigin: '150px 120px', 
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' 
          }}
        >
          {/* Fő vízszintes rúd */}
          <line x1="50" y1="120" x2="250" y2="120" stroke="#9CA3AF" strokeWidth="6" strokeLinecap="round" />
          
          {/* Bal serpenyő (függőleges marad a forgás ellenére is a counter-rotation-nel, de az SVG trükkös, itt fix láncokkal imitáljuk) */}
          <g transform="translate(50, 120)">
            <line x1="0" y1="0" x2="-20" y2="40" stroke="#9CA3AF" strokeWidth="2" />
            <line x1="0" y1="0" x2="20" y2="40" stroke="#9CA3AF" strokeWidth="2" />
            <path d="M-30 40 L30 40 Q0 60 -30 40" fill={color} opacity="0.9" />
            <text x="0" y="35" fontSize="16" fontWeight="900" fill="white" textAnchor="middle">{leftWeight}</text>
          </g>

          {/* Jobb serpenyő */}
          <g transform="translate(250, 120)">
            <line x1="0" y1="0" x2="-20" y2="40" stroke="#9CA3AF" strokeWidth="2" />
            <line x1="0" y1="0" x2="20" y2="40" stroke="#9CA3AF" strokeWidth="2" />
            <path d="M-30 40 L30 40 Q0 60 -30 40" fill={color} opacity="0.9" />
            <text x="0" y="35" fontSize="16" fontWeight="900" fill="white" textAnchor="middle">{currentRight}</text>
          </g>
        </g>
        
        {/* Forgótengely csavar */}
        <circle cx="150" cy="120" r="6" fill="#1F2937" />
        <circle cx="150" cy="120" r="3" fill="#D1D5DB" />
      </svg>

      {/* Kezelőfelület */}
      <div className="grid grid-cols-4 gap-2 w-full mt-8">
        {[1, 5, 10].map((val) => (
          <button 
            key={val}
            onClick={() => addWeight(val)}
            className="py-3 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-xl font-bold text-white transition-all active:scale-95 shadow-sm"
          >
            +{val} {unitIcon}
          </button>
        ))}
        <button 
          onClick={() => setCurrentRight(rightInitial)}
          className="py-3 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-xl font-bold transition-all active:scale-95"
        >
          Reset
        </button>
      </div>

      {/* Állapotüzenet */}
      <div className="mt-5 text-sm font-medium tracking-wide" style={{ color: tiltAngle === 0 ? '#10B981' : '#9CA3AF' }}>
        {tiltAngle > 0 ? "Több súly kell a jobb oldalra!" : tiltAngle < 0 ? "Túl nehéz a jobb oldal!" : "Tökéletes egyensúly! ⚖️"}
      </div>
    </div>
  );
});

export default BalanceScale;
