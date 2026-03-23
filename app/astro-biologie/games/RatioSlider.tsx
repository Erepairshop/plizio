"use client";
// components/interactive/RatioSlider.tsx

import { useState, memo } from "react";

interface RatioSliderProps {
  baseValue: number;    // Az első csúszka fix értéke (pl. 2 alma)
  basePrice: number;    // Az elsőhöz tartozó ár (pl. 100 Ft)
  targetValue: number;  // A kérdéses mennyiség (pl. 5 alma)
  targetPrice: number;  // A helyes válasz (ezt kell eltalálni: 250 Ft)
  unitName: string;     // pl. "kg" vagy "pcs"
  currency: string;     // pl. "Ft" vagy "$"
  color: string;
  onDone: (correct: boolean) => void;
}

const RatioSlider = memo(function RatioSlider({
  baseValue,
  basePrice,
  targetValue,
  targetPrice,
  unitName,
  currency,
  color,
  onDone,
}: RatioSliderProps) {
  const [guess, setGuess] = useState(0);

  // Meghatározzuk a csúszka tartományát (a célár köré lőjük be)
  const maxRange = Math.ceil(targetPrice * 1.5);

  const handleRelease = () => {
    // 5%-os hibahatáron belül elfogadjuk (vagy legyen tűpontos: guess === targetPrice)
    if (Math.abs(guess - targetPrice) < (targetPrice * 0.05)) {
      onDone(true);
    }
  };

  return (
    <div className="flex flex-col items-center w-full space-y-8 p-6 bg-white/5 rounded-2xl border border-white/10">
      
      {/* Fix Arány (Példa) */}
      <div className="w-full space-y-2 opacity-60">
        <div className="flex justify-between text-sm uppercase tracking-wider font-bold">
          <span>Example</span>
          <span>{baseValue} {unitName} = {basePrice} {currency}</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gray-400" 
            style={{ width: `${(basePrice / maxRange) * 100}%` }}
          />
        </div>
      </div>

      <div className="w-full h-px bg-white/10" />

      {/* Interaktív rész */}
      <div className="w-full space-y-6">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-xs opacity-50 uppercase font-bold text-left">Task</span>
            <span className="text-xl font-bold">{targetValue} {unitName} = ?</span>
          </div>
          <div className="text-2xl font-mono font-black" style={{ color }}>
            {guess} {currency}
          </div>
        </div>

        <input
          type="range"
          min="0"
          max={maxRange}
          step="1"
          value={guess}
          onChange={(e) => setGuess(parseInt(e.target.value))}
          onMouseUp={handleRelease}
          onTouchEnd={handleRelease}
          className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
          style={{ accentColor: color }}
        />
        
        <div className="flex justify-between text-[10px] opacity-30 font-bold px-1">
          <span>0 {currency}</span>
          <span>{maxRange} {currency}</span>
        </div>
      </div>

      <div className="text-center text-sm font-medium animate-pulse italic opacity-80">
        "Slide to set the correct price!"
      </div>
    </div>
  );
});

export default RatioSlider;
