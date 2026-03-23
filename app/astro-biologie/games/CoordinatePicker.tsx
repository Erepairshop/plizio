"use client";
// components/interactive/CoordinatePicker.tsx

import { memo, useState } from "react";

interface CoordinatePickerProps {
  targetX: number;
  targetY: number;
  range: number;
  color: string;
  onDone: (correct: boolean) => void;
}

const CoordinatePicker = memo(function CoordinatePicker({
  targetX,
  targetY,
  range = 5,
  color,
  onDone,
}: CoordinatePickerProps) {
  const [lastGuess, setLastGuess] = useState<{x: number, y: number} | null>(null);

  const gridSize = 200;
  const step = gridSize / (range * 2);

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Koordináták kiszámítása (kerekítve a legközelebbi rácspontra)
    const x = Math.round((clickX - gridSize / 2) / step);
    const y = Math.round((gridSize / 2 - clickY) / step);

    setLastGuess({ x, y });

    if (x === targetX && y === targetY) {
      setTimeout(() => onDone(true), 600);
    } else {
      // Opcionális: itt nem hívunk onDone(false)-t azonnal, 
      // hogy legyen esélye javítani (felfedező mód)
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative p-2 bg-white rounded-xl shadow-xl">
        <svg 
          width={gridSize} 
          height={gridSize} 
          viewBox={`0 0 ${gridSize} ${gridSize}`}
          onClick={handleSvgClick}
          className="cursor-crosshair overflow-visible"
        >
          {/* Rácsvonalak */}
          {Array.from({ length: range * 2 + 1 }).map((_, i) => {
            const pos = i * step;
            return (
              <g key={i}>
                <line x1={pos} y1="0" x2={pos} y2={gridSize} stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1={pos} x2={gridSize} y2={pos} stroke="#e5e7eb" strokeWidth="1" />
              </g>
            );
          })}

          {/* Tengelyek */}
          <line x1={gridSize / 2} y1="0" x2={gridSize / 2} y2={gridSize} stroke="#9ca3af" strokeWidth="2" />
          <line x1="0" y1={gridSize / 2} x2={gridSize} y2={gridSize / 2} stroke="#9ca3af" strokeWidth="2" />

          {/* Célpont (csak ha már eltalálta, vagy debug módban látszik) */}
          {lastGuess && (
            <circle 
              cx={gridSize / 2 + lastGuess.x * step} 
              cy={gridSize / 2 - lastGuess.y * step} 
              r="4" 
              fill={lastGuess.x === targetX && lastGuess.y === targetY ? "#10B981" : "#EF4444"} 
            />
          )}
        </svg>
      </div>
      <div className="mt-4 flex gap-4 text-lg font-mono">
        <span className="opacity-50">Target:</span>
        <span className="font-bold" style={{ color }}>({targetX}, {targetY})</span>
      </div>
    </div>
  );
});

export default CoordinatePicker;
