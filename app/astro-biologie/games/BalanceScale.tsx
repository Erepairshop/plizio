"use client";
// components/interactive/BalanceScale.tsx
// Interaktív kétkarú mérleg egyenletek szemléltetéséhez

import { useState, useEffect, memo, useCallback } from "react";

interface BalanceScaleProps {
  leftWeight: number;
  rightInitial: number;
  missingWeight: number;
  unitIcon?: string;
  color: string;
  instruction: string;
  hint1: string;
  hint2: string;
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

  // Kiszámoljuk a dőlésszöget a súlykülönbség alapján (max 15 fok)
  const diff = leftWeight - currentRight;
  const tilt = Math.max(-15, Math.min(15, diff * 2));

  const checkResult = useCallback((value: number) => {
    if (value === leftWeight) {
      setTimeout(() => onDone(true), 1000);
    } else if (value > leftWeight + 20) {
      // Ha nagyon túllövi, rezegjen be hiba jelzésként
      setIsJiggling(true);
      setTimeout(() => setIsJiggling(false), 500);
    }
  }, [leftWeight, onDone]);

  const addWeight = (amount: number) => {
    const next = currentRight + amount;
    setCurrentRight(next);
    checkResult(next);
  };

  const reset = () => setCurrentRight(rightInitial);

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
      
      {/* SVG Mérleg Vizualizáció */}
      <svg viewBox="0 0 240 160" className={`w-full h-48 transition-transform ${isJiggling ? 'animate-bounce' : ''}`}>
        {/* Talp */}
        <path d="M100 140 L140 140 L120 100 Z" fill="#4B5563" />
        
        {/* Kar (dőlés alapján forog) */}
        <g style={{ transform: `rotate(${tilt}deg)`, transformOrigin: '120px 100px', transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
          <line x1="40" y1="100" x2="200" y2="100" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" />
          
          {/* Bal serpenyő */}
          <g transform="translate(40, 100)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="#9CA3AF" strokeWidth="2" />
            <path d="M-30 20 L30 20 Q0 50 -30 20" fill={color} opacity="0.8" />
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">{leftWeight}</text>
          </g>

          {/* Jobb serpenyő */}
          <g transform="translate(200, 100)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="#9CA3AF" strokeWidth="2" />
            <path d="M-30 20 L30 20 Q0 50 -30 20" fill={color} opacity="0.8" />
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">{currentRight}</text>
          </g>
        </g>
        
        {/* Középső forgópont */}
        <circle cx="120" cy="100" r="4" fill="#374151" />
      </svg>

      {/* Kezelőszervek */}
      <div className="grid grid-cols-3 gap-3 w-full mt-6">
        <button 
          onClick={() => addWeight(1)}
          className="py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all active:scale-95"
        >
          +1 {unitIcon}
        </button>
        <button 
          onClick={() => addWeight(10)}
          className="py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all active:scale-95"
        >
          +10 {unitIcon}
        </button>
        <button 
          onClick={reset}
          className="py-3 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-xl font-bold transition-all"
        >
          Reset
        </button>
      </div>

      {/* Állapotjelző */}
      <div className="mt-4 text-sm opacity-60 font-medium">
        {currentRight < leftWeight ? "Need more weight..." : currentRight > leftWeight ? "Too heavy!" : "Perfect Balance!"}
      </div>
    </div>
  );
});

export default BalanceScale;
