"use client";
import { useState, memo } from "react";

interface RatioSliderProps {
  baseValue: number;
  basePrice: number;
  targetValue: number;
  targetPrice: number;
  unitName: string;
  currency: string;
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

  // Maximum csúszka érték: a cél 150%-a (hogy legyen hova túlhúzni)
  const maxRange = Math.ceil(targetPrice * 1.5);
  // Az egy darabra eső "egységár" a vizuális kitöltéshez
  const unitRatio = basePrice / baseValue;

  const handleRelease = () => {
    // Ha pontosan eltalálta
    if (guess === targetPrice) {
      onDone(true);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto p-6 bg-slate-800/50 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-md">
      
      {/* 1. Bázis Arány (Referencia) */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Példa (Bázis)</span>
          <span className="text-sm font-mono font-bold text-slate-300">
            {baseValue} {unitName} = {basePrice} {currency}
          </span>
        </div>
        <div className="h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-700">
          <div 
            className="h-full opacity-50 transition-all duration-300"
            style={{ width: `${(basePrice / maxRange) * 100}%`, backgroundColor: color }}
          />
        </div>
      </div>

      {/* Elválasztó */}
      <div className="w-full h-px bg-slate-700 my-2" />

      {/* 2. Feladat (Keresett érték) */}
      <div className="mt-6">
        <div className="flex justify-between items-end mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Feladat</span>
          <span className="text-xl font-mono font-black" style={{ color }}>
            {targetValue} {unitName} = {guess} {currency}
          </span>
        </div>
        
        {/* Egyedi Range Slider */}
        <div className="relative w-full h-8 flex items-center">
          <input
            type="range"
            min="0"
            max={maxRange}
            step="1"
            value={guess}
            onChange={(e) => setGuess(Number(e.target.value))}
            onMouseUp={handleRelease}
            onTouchEnd={handleRelease}
            className="absolute z-20 w-full opacity-0 cursor-pointer h-full"
          />
          {/* Vizuális Track */}
          <div className="absolute z-10 w-full h-4 bg-slate-900 rounded-full border border-slate-700 overflow-hidden">
             <div 
               className="h-full transition-all duration-75"
               style={{ width: `${(guess / maxRange) * 100}%`, backgroundColor: color }}
             />
          </div>
          {/* Thumb imitáció */}
          <div 
            className="absolute z-10 w-6 h-6 bg-white rounded-full shadow-lg border-2 pointer-events-none transition-all duration-75"
            style={{ 
              left: `calc(${(guess / maxRange) * 100}% - 12px)`,
              borderColor: color 
            }}
          />
        </div>

        {/* Min/Max feliratok */}
        <div className="flex justify-between text-[10px] font-bold text-slate-500 mt-2 px-1">
          <span>0 {currency}</span>
          <span>{maxRange} {currency}</span>
        </div>
      </div>

    </div>
  );
});

export default RatioSlider;
