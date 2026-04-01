"use client";
import { memo, useCallback, useState } from "react";

interface CoordinatePickerProps {
  targetX: number;
  targetY: number;
  range: number; // pl. 5 -> -5-től +5-ig tartó rács
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

  const svgSize = 300;
  const padding = 20;
  const plotSize = svgSize - padding * 2;
  const step = plotSize / (range * 2);
  const origin = svgSize / 2;

  const submitGuess = useCallback((x: number, y: number) => {
    if (x < -range || x > range || y < -range || y > range) return;
    setLastGuess({ x, y });
    if (x === targetX && y === targetY) {
      setTimeout(() => onDone(true), 800);
    }
  }, [onDone, range, targetX, targetY]);

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Matematikai koordinátává alakítás (inverz Y tengely miatt kivonás)
    const x = Math.round((clickX - origin) / step);
    const y = Math.round((origin - clickY) / step);
    submitGuess(x, y);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
        <svg 
          width={svgSize} 
          height={svgSize} 
          className="cursor-crosshair select-none"
          onClick={handleSvgClick}
        >
          {/* Rácsvonalak */}
          {Array.from({ length: range * 2 + 1 }).map((_, i) => {
            const pos = padding + i * step;
            const isCenter = i === range;
            return (
              <g key={i}>
                {/* Függőleges vonalak */}
                <line x1={pos} y1={padding} x2={pos} y2={svgSize - padding} stroke={isCenter ? "#000" : "#E5E7EB"} strokeWidth={isCenter ? 2 : 1} />
                {/* Vízszintes vonalak */}
                <line x1={padding} y1={pos} x2={svgSize - padding} y2={pos} stroke={isCenter ? "#000" : "#E5E7EB"} strokeWidth={isCenter ? 2 : 1} />
                
                {/* Tengelyfeliratok (csak a főbb pontokon, hogy ne legyen zsúfolt) */}
                {!isCenter && i % 2 === 0 && (
                  <>
                    <text x={pos} y={origin + 12} fontSize="10" fill="#6B7280" textAnchor="middle">{i - range}</text>
                    <text x={origin - 8} y={pos + 4} fontSize="10" fill="#6B7280" textAnchor="end">{range - i}</text>
                  </>
                )}
              </g>
            );
          })}

          {/* Hit targets: big enough so the player can tap the intended point reliably */}
          {Array.from({ length: range * 2 + 1 }).map((_, xi) => {
            const x = xi - range;
            return Array.from({ length: range * 2 + 1 }).map((__, yi) => {
              const y = range - yi;
              const cx = origin + x * step;
              const cy = origin - y * step;
              return (
                <circle
                  key={`${x}:${y}`}
                  cx={cx}
                  cy={cy}
                  r={Math.max(10, step * 0.38)}
                  fill="transparent"
                  style={{ cursor: "crosshair" }}
                  onClick={() => submitGuess(x, y)}
                />
              );
            });
          })}

          {/* X és Y tengely jelölők */}
          <text x={svgSize - padding + 5} y={origin + 4} fontSize="12" fontWeight="bold">X</text>
          <text x={origin} y={padding - 5} fontSize="12" fontWeight="bold" textAnchor="middle">Y</text>

          {/* Lerakott pont vizualizációja */}
          {lastGuess && (
            <g transform={`translate(${origin + lastGuess.x * step}, ${origin - lastGuess.y * step})`}>
              <circle r="6" fill={lastGuess.x === targetX && lastGuess.y === targetY ? "#10B981" : "#EF4444"} className="animate-ping absolute opacity-75" />
              <circle r="6" fill={lastGuess.x === targetX && lastGuess.y === targetY ? "#10B981" : color} />
            </g>
          )}
        </svg>
      </div>

      <div className="mt-6 flex items-center gap-4 bg-white/10 px-6 py-3 rounded-full border border-white/20">
        <span className="text-sm uppercase tracking-wider font-semibold opacity-70">Cél:</span>
        <span className="text-2xl font-mono font-black tracking-widest" style={{ color }}>
          ({targetX}, {targetY})
        </span>
      </div>
    </div>
  );
});

export default CoordinatePicker;
