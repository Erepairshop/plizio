"use client";
import { memo } from "react";

// ─── FRACTION SVG ──────────────────────────────────────────────────────────

export const FractionSvg = memo(({ parts = 4, filled = 3 }: { parts?: number; filled?: number }) => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="fracGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="#f8fafc" rx="12" />
      
      <g transform="translate(120, 70)">
        {/* Circle Fraction */}
        <circle r="50" fill="white" stroke="#e2e8f0" strokeWidth="2" />
        {Array.from({ length: parts }).map((_, i) => {
          const angle = (i * 360) / parts;
          const x2 = 50 * Math.cos((angle * Math.PI) / 180);
          const y2 = 50 * Math.sin((angle * Math.PI) / 180);
          return (
            <line key={i} x1="0" y1="0" x2={x2} y2={y2} stroke="#cbd5e1" strokeWidth="1" />
          );
        })}
        {Array.from({ length: filled }).map((_, i) => {
          const startAngle = (i * 360) / parts - 90;
          const endAngle = ((i + 1) * 360) / parts - 90;
          const x1 = 50 * Math.cos((startAngle * Math.PI) / 180);
          const y1 = 50 * Math.sin((startAngle * Math.PI) / 180);
          const x2 = 50 * Math.cos((endAngle * Math.PI) / 180);
          const y2 = 50 * Math.sin((endAngle * Math.PI) / 180);
          const largeArcFlag = 0;
          return (
            <path
              key={i}
              d={`M 0 0 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
              fill="url(#fracGrad)"
              opacity="0.8"
            />
          );
        })}
      </g>
      
      <text x="120" y="130" fontSize="12" fontWeight="bold" fill="#1e40af" textAnchor="middle">
        {filled} / {parts}
      </text>
    </svg>
  );
});

// ─── GEOMETRY SVG ──────────────────────────────────────────────────────────

export const GeometrySvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f0fdf4" rx="12" />
      
      {/* Triangle */}
      <path d="M 40 100 L 100 100 L 70 40 Z" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
      
      {/* Square */}
      <rect x="130" y="40" width="50" height="50" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
      
      {/* Circle */}
      <circle cx="70" cy="100" r="2" fill="#16a34a" />
      <circle cx="100" cy="100" r="2" fill="#16a34a" />
      <circle cx="40" cy="100" r="2" fill="#16a34a" />
      
      <text x="70" y="120" fontSize="10" fill="#15803d" textAnchor="middle">Shapes</text>
      <text x="155" y="110" fontSize="10" fill="#15803d" textAnchor="middle">Area = a²</text>
    </svg>
  );
});

// ─── PERCENT SVG ───────────────────────────────────────────────────────────

export const PercentSvg = memo(({ value = 75 }: { value?: number }) => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#fef2f2" rx="12" />
      
      {/* Background Bar */}
      <rect x="40" y="60" width="160" height="20" rx="10" fill="#fee2e2" />
      
      {/* Progress Bar */}
      <rect x="40" y="60" width={(160 * value) / 100} height="20" rx="10" fill="#ef4444" />
      
      <text x="120" y="50" fontSize="14" fontWeight="bold" fill="#991b1b" textAnchor="middle">
        {value}%
      </text>
      
      <text x="40" y="95" fontSize="8" fill="#b91c1c" textAnchor="middle">0%</text>
      <text x="200" y="95" fontSize="8" fill="#b91c1c" textAnchor="middle">100%</text>
    </svg>
  );
});

// ─── ALGEBRA SVG ───────────────────────────────────────────────────────────

export const AlgebraSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f5f3ff" rx="12" />
      
      <g transform="translate(120, 70)">
        <text x="0" y="0" fontSize="24" fontWeight="black" fill="#7c3AED" textAnchor="middle">
          2x + 5 = 15
        </text>
        <text x="0" y="30" fontSize="14" fill="#a78bfa" textAnchor="middle">
          x = ?
        </text>
      </g>
      
      {/* Symbols */}
      <text x="40" y="40" fontSize="20" fill="#ddd6fe" opacity="0.5">∑</text>
      <text x="200" y="110" fontSize="20" fill="#ddd6fe" opacity="0.5">√</text>
      <text x="40" y="110" fontSize="20" fill="#ddd6fe" opacity="0.5">π</text>
      <text x="200" y="40" fontSize="20" fill="#ddd6fe" opacity="0.5">∞</text>
    </svg>
  );
});

// ─── GRAPH SVG ─────────────────────────────────────────────────────────────

export const GraphSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#fafafa" rx="12" />
      
      <g transform="translate(40, 110)">
        {/* Axis */}
        <line x1="0" y1="0" x2="170" y2="0" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="0" y1="0" x2="0" y2="-80" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
        
        {/* Function Curve */}
        <path d="M 10 -10 Q 40 -80 80 -40 T 150 -70" fill="none" stroke="#0ea5e9" strokeWidth="3" />
        
        {/* Points */}
        <circle cx="40" cy="-45" r="3" fill="#0284c7" />
        <circle cx="80" cy="-40" r="3" fill="#0284c7" />
      </g>
      
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#94a3b8" />
        </marker>
      </defs>
    </svg>
  );
});

// ─── NUMBER LINE SVG ───────────────────────────────────────────────────────

export const NumberLineSvg = memo(({ highlight = 5, max = 10 }: { highlight?: number; max?: number }) => {
  return (
    <svg width="100%" viewBox="0 0 240 90">
      <defs>
        <linearGradient id="nlG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D88FFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="90" fill="url(#nlG)" rx="16" />
      <line x1="20" y1="45" x2="220" y2="45" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: max + 1 }, (_, i) => {
        const x = 20 + i * (200 / max);
        const isHl = i === highlight;
        return (
          <g key={i}>
            <line x1={x} y1="39" x2={x} y2="51" stroke={isHl ? "#B44DFF" : "#cbd5e1"} strokeWidth={isHl ? 2.5 : 1.5} />
            <text x={x} y="67" fontSize={isHl ? "12" : "10"} fontWeight={isHl ? "800" : "500"} fill={isHl ? "#B44DFF" : "#64748b"} textAnchor="middle">
              {i}
            </text>
            {isHl && <circle cx={x} cy="33" r="5" fill="#B44DFF" opacity="0.8" />}
          </g>
        );
      })}
    </svg>
  );
});

// ─── COUNTING SVG ──────────────────────────────────────────────────────────

export const CountingSvg = memo(({ emoji = "🍎", count = 4 }: { emoji?: string; count?: number }) => {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="cntG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#cntG)" rx="16" />
      <g transform="translate(120, 60)">
        {Array.from({ length: count }, (_, i) => {
          const cols = Math.min(count, 5);
          const rows = Math.ceil(count / cols);
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = (col - (Math.min(count - row * cols, cols)) / 2 + 0.5) * 36;
          const y = (row - rows / 2 + 0.5) * 36;
          return (
            <text key={i} x={x} y={y} fontSize="28" textAnchor="middle" opacity="0.9">
              {emoji}
            </text>
          );
        })}
      </g>
      <text x="120" y="128" fontSize="13" fontWeight="bold" fill="#0891B2" textAnchor="middle" opacity="0.7">
        = {count}
      </text>
    </svg>
  );
});

// ─── COMPARE SVG ───────────────────────────────────────────────────────────

export const CompareSvg = memo(({
  leftEmoji = "🐱", leftCount = 3, rightEmoji = "🐶", rightCount = 5,
}: { leftEmoji?: string; leftCount?: number; rightEmoji?: string; rightCount?: number }) => {
  const renderGroup = (emoji: string, count: number, cx: number) => (
    <g transform={`translate(${cx}, 55)`}>
      {Array.from({ length: count }, (_, i) => {
        const cols = Math.min(count, 3);
        const row = Math.floor(i / cols);
        const col = i % cols;
        return (
          <text key={i} x={(col - Math.min(count - row * cols, cols) / 2 + 0.5) * 22} y={(row - Math.ceil(count / cols) / 2 + 0.5) * 24} fontSize="20" textAnchor="middle">
            {emoji}
          </text>
        );
      })}
      <text x={0} y={50} fontSize="14" fontWeight="bold" fill="#06B6D4" textAnchor="middle">{count}</text>
    </g>
  );
  return (
    <svg width="100%" viewBox="0 0 240 130">
      <defs>
        <linearGradient id="cmpG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="130" fill="url(#cmpG)" rx="16" />
      {renderGroup(leftEmoji, leftCount, 65)}
      <text x="120" y="60" fontSize="16" fontWeight="bold" fill="#10B981" textAnchor="middle" opacity="0.5">?</text>
      {renderGroup(rightEmoji, rightCount, 175)}
    </svg>
  );
});

// ─── SUBTRACT LINE SVG ─────────────────────────────────────────────────────

export const SubtractLineSvg = memo(({ start = 8, jumps = 3, max = 10 }: { start?: number; jumps?: number; max?: number }) => {
  const end = start - jumps;
  return (
    <svg width="100%" viewBox="0 0 240 90">
      <defs>
        <linearGradient id="subLineG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF8A8A" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="90" fill="url(#subLineG)" rx="16" />
      <line x1="20" y1="45" x2="220" y2="45" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: max + 1 }, (_, i) => {
        const x = 20 + i * (200 / max);
        const isStart = i === start;
        const isEnd = i === end;
        return (
          <g key={i}>
            <line x1={x} y1="39" x2={x} y2="51" stroke={isStart || isEnd ? "#FF6B6B" : "#cbd5e1"} strokeWidth={isStart || isEnd ? 2.5 : 1.5} />
            <text x={x} y="67" fontSize={isStart || isEnd ? "12" : "10"} fontWeight={isStart || isEnd ? "800" : "500"} fill={isStart || isEnd ? "#FF6B6B" : "#64748b"} textAnchor="middle">
              {i}
            </text>
            {isStart && <circle cx={x} cy="33" r="5" fill="#FF6B6B" opacity="0.8" />}
            {isEnd && <circle cx={x} cy="33" r="5" fill="#FF6B6B" />}
          </g>
        );
      })}
      {Array.from({ length: jumps }, (_, j) => {
        const fromX = 20 + (start - j) * (200 / max);
        const toX = 20 + (start - j - 1) * (200 / max);
        return (
          <g key={`jump-${j}`}>
            <path d={`M ${fromX} 20 Q ${(fromX + toX) / 2} 8 ${toX} 20`} stroke="#FF6B6B" strokeWidth="1.5" fill="none" />
            <path d={`M ${toX} 20 L ${toX + 3} 17 M ${toX} 20 L ${toX + 3} 23`} stroke="#FF6B6B" strokeWidth="1.5" />
          </g>
        );
      })}
    </svg>
  );
});

// ─── CROSS OUT SVG ─────────────────────────────────────────────────────────

export const CrossOutSvg = memo(({ total = 7, remove = 3, emoji = "🍎" }: { total?: number; remove?: number; emoji?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 240 120">
      <defs>
        <linearGradient id="crossG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF8A8A" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="120" fill="url(#crossG)" rx="16" />
      {Array.from({ length: total }, (_, i) => {
        const cols = Math.min(total, 7);
        const x = 120 + (i - (cols - 1) / 2) * 28;
        const y = 45;
        const isCrossed = i >= total - remove;
        return (
          <g key={i}>
            <text x={x} y={y} fontSize="22" textAnchor="middle" dominantBaseline="middle" opacity={isCrossed ? 0.35 : 1}>
              {emoji}
            </text>
            {isCrossed && (
              <>
                <line x1={x - 10} y1={y - 10} x2={x + 10} y2={y + 10} stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                <line x1={x + 10} y1={y - 10} x2={x - 10} y2={y + 10} stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
              </>
            )}
          </g>
        );
      })}
      <text x="120" y="95" fontSize="14" fontWeight="bold" fill="#b91c1c" textAnchor="middle">
        {total} − {remove} = {total - remove}
      </text>
    </svg>
  );
});

// ─── TEN FRAME SVG ─────────────────────────────────────────────────────────

export const TenFrameSvg = memo(({ have = 6, target = 10, color = "#FF6B6B" }: { have?: number; target?: number; color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 240 130">
      <rect width="240" height="130" fill="#f8fafc" rx="16" />
      {Array.from({ length: 10 }, (_, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        const x = 50 + col * 32;
        const y = 28 + row * 32;
        const filled = i < have;
        const missing = i >= have && i < target;
        return (
          <g key={i}>
            <rect x={x} y={y} width="26" height="26" rx="5"
              fill={filled ? `${color}40` : "white"}
              stroke={missing ? color : "#cbd5e1"}
              strokeWidth={missing ? "2" : "1"}
              strokeDasharray={missing ? "4 3" : "none"}
            />
            {filled && (
              <circle cx={x + 13} cy={y + 13} r="8" fill={color} />
            )}
            {missing && (
              <text x={x + 13} y={y + 14} fontSize="12" fill={color} textAnchor="middle" dominantBaseline="middle" opacity="0.5">?</text>
            )}
          </g>
        );
      })}
      <text x="120" y="115" fontSize="13" fontWeight="bold" fill={color} textAnchor="middle" opacity="0.7">
        {have} + ? = {target}
      </text>
    </svg>
  );
});

// ─── BASIC SHAPES SVG ──────────────────────────────────────────────────────

const SHAPE_LABELS = {
  en: { triangle: "Triangle", square: "Square", circle: "Circle" },
  hu: { triangle: "Háromszög", square: "Négyzet", circle: "Kör" },
  de: { triangle: "Dreieck", square: "Quadrat", circle: "Kreis" },
  ro: { triangle: "Triunghi", square: "Pătrat", circle: "Cerc" },
};

export const BasicShapesSvg = memo(({ lang = "hu" }: { lang?: string }) => {
  const l = (SHAPE_LABELS as any)[lang] || SHAPE_LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="shapeG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#shapeG)" rx="16" />
      <g transform="translate(50, 65)">
        <polygon points="0,-20 22,18 -22,18" fill="#EC4899" opacity="0.8" stroke="#BE185D" strokeWidth="2" />
        <text x="0" y="38" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">{l.triangle}</text>
      </g>
      <g transform="translate(120, 65)">
        <rect x="-15" y="-15" width="30" height="30" fill="#3B82F6" opacity="0.8" stroke="#1E40AF" strokeWidth="2" />
        <text x="0" y="38" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">{l.square}</text>
      </g>
      <g transform="translate(190, 65)">
        <circle cx="0" cy="0" r="18" fill="#F59E0B" opacity="0.8" stroke="#D97706" strokeWidth="2" />
        <text x="0" y="38" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">{l.circle}</text>
      </g>
    </svg>
  );
});

// ─── SPATIAL SVG ───────────────────────────────────────────────────────────

const SPATIAL_LABELS = {
  en: { center: "CENTER", above: "ABOVE", left: "LEFT", right: "RIGHT" },
  hu: { center: "KÖZÉP", above: "FELÜL", left: "BALRA", right: "JOBBRA" },
  de: { center: "MITTE", above: "OBEN", left: "LINKS", right: "RECHTS" },
  ro: { center: "CENTRU", above: "SUS", left: "STÂNGA", right: "DREAPTA" },
};

export const SpatialSvg = memo(({ lang = "hu" }: { lang?: string }) => {
  const l = (SPATIAL_LABELS as any)[lang] || SPATIAL_LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="spatialG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#spatialG)" rx="16" />
      <rect x="105" y="55" width="30" height="30" fill="#10B981" opacity="0.8" stroke="#059669" strokeWidth="2" />
      <text x="120" y="120" fontSize="11" fontWeight="bold" fill="#0891B2" textAnchor="middle">{l.center}</text>
      <circle cx="120" cy="25" r="8" fill="#06B6D4" opacity="0.7" stroke="#0891B2" strokeWidth="1.5" />
      <text x="120" y="8" fontSize="9" fontWeight="bold" fill="#0891B2" textAnchor="middle">{l.above}</text>
      <circle cx="60" cy="70" r="8" fill="#06B6D4" opacity="0.7" stroke="#0891B2" strokeWidth="1.5" />
      <text x="38" y="75" fontSize="9" fontWeight="bold" fill="#0891B2" textAnchor="middle">{l.left}</text>
      <circle cx="180" cy="70" r="8" fill="#06B6D4" opacity="0.7" stroke="#0891B2" strokeWidth="1.5" />
      <text x="202" y="75" fontSize="9" fontWeight="bold" fill="#0891B2" textAnchor="middle">{l.right}</text>
      <circle cx="120" cy="105" r="8" fill="#06B6D4" opacity="0.7" stroke="#0891B2" strokeWidth="1.5" />
    </svg>
  );
});

// ─── PATTERNS SVG ──────────────────────────────────────────────────────────

export const PatternsSvg = memo(() => {
  return (
    <svg width="100%" viewBox="0 0 240 100">
      <rect width="240" height="100" fill="#fff7ed" rx="16" />
      <g transform="translate(30, 50)">
        <circle cx="0" cy="0" r="12" fill="#EC4899" />
        <rect x="30" y="-12" width="24" height="24" fill="#3B82F6" />
        <circle cx="84" cy="0" r="12" fill="#EC4899" />
        <rect x="114" y="-12" width="24" height="24" fill="#3B82F6" />
        <text x="160" y="10" fontSize="30" fontWeight="900" fill="#f59e0b">?</text>
      </g>
    </svg>
  );
});

// ─── ADDITION SVG ──────────────────────────────────────────────────────────

export const AdditionSvg = memo(({ a = 3, b = 2 }: { a?: number; b?: number }) => {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#f0fdf4" rx="16" />
      <g transform="translate(60, 70)">
        {Array.from({ length: a }).map((_, i) => (
          <circle key={i} cx={(i - (a-1)/2) * 20} cy="0" r="8" fill="#10b981" />
        ))}
      </g>
      <text x="100" y="75" fontSize="20" fontWeight="bold" fill="#059669">+</text>
      <g transform="translate(140, 70)">
        {Array.from({ length: b }).map((_, i) => (
          <circle key={i} cx={(i - (b-1)/2) * 20} cy="0" r="8" fill="#3b82f6" />
        ))}
      </g>
      <text x="180" y="75" fontSize="20" fontWeight="bold" fill="#059669">= ?</text>
    </svg>
  );
});

// ─── DOUBLE HALF SVG ───────────────────────────────────────────────────────

export const DoubleHalfSvg = memo(({ val = 4, mode = "double" }: { val?: number; mode?: "double" | "half" }) => {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#fafafa" rx="16" />
      <g transform="translate(120, 50)">
        {Array.from({ length: val }).map((_, i) => (
          <circle key={i} cx={(i - (val-1)/2) * 20} cy="0" r="8" fill="#8b5cf6" />
        ))}
      </g>
      <path d="M 120 65 L 120 85" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
      <g transform="translate(120, 110)">
        {mode === "double" ? (
          Array.from({ length: val * 2 }).map((_, i) => (
            <circle key={i} cx={(i % val - (val-1)/2) * 20} cy={Math.floor(i/val) * 18 - 9} r="6" fill="#ec4899" />
          ))
        ) : (
          Array.from({ length: val / 2 }).map((_, i) => (
            <circle key={i} cx={(i - (val/2-1)/2) * 20} cy="0" r="8" fill="#ec4899" />
          ))
        )}
      </g>
    </svg>
  );
});

// ─── CLOCK SVG ─────────────────────────────────────────────────────────────

export const ClockSvg = memo(({ hours = 3, minutes = 0 }: { hours?: number; minutes?: number }) => {
  const hAngle = (hours % 12) * 30 + (minutes / 60) * 30 - 90;
  const mAngle = minutes * 6 - 90;
  
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#f8fafc" rx="16" />
      <g transform="translate(120, 70)">
        {/* Face */}
        <circle r="55" fill="white" stroke="#94a3b8" strokeWidth="3" />
        {/* Ticks */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="45" y1="0" x2="52" y2="0" stroke="#cbd5e1" strokeWidth="2" transform={`rotate(${i * 30})`} />
        ))}
        {/* Hands */}
        <line x1="0" y1="0" x2={30 * Math.cos(hAngle * Math.PI / 180)} y2={30 * Math.sin(hAngle * Math.PI / 180)} stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <line x1="0" y1="0" x2={45 * Math.cos(mAngle * Math.PI / 180)} y2={45 * Math.sin(mAngle * Math.PI / 180)} stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
        <circle r="3" fill="#1e293b" />
      </g>
    </svg>
  );
});

// ─── MONEY SVG ─────────────────────────────────────────────────────────────

export const MoneySvg = memo(({ value = 10 }: { value?: number }) => {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="coinG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#coinG)" rx="16" />
      <g transform="translate(120, 70)">
        <circle r="40" fill="#FBBF24" stroke="#D97706" strokeWidth="3" />
        <circle cx="-12" cy="-12" r="10" fill="white" opacity="0.3" />
        <text y="10" fontSize="24" fontWeight="900" fill="#92400E" textAnchor="middle">{value}¢</text>
      </g>
    </svg>
  );
});

// ─── LENGTH SVG ────────────────────────────────────────────────────────────

export const LengthSvg = memo(({ val1 = 15, val2 = 5 }: { val1?: number; val2?: number }) => {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#f0fdf4" rx="16" />
      <g transform="translate(40, 45)">
        <rect width={val1 * 8} height="10" fill="#EC4899" rx="2" />
        <text y="25" fontSize="10" fontWeight="bold" fill="#be185d">{val1} cm</text>
      </g>
      <g transform="translate(40, 95)">
        <rect width={val2 * 8} height="10" fill="#3B82F6" rx="2" />
        <text y="25" fontSize="10" fontWeight="bold" fill="#1e40af">{val2} cm</text>
      </g>
    </svg>
  );
});

// ─── PLACE VALUE SVG ───────────────────────────────────────────────────────

export const PlaceValueSvg = memo(({ tens = 3, ones = 4 }: { tens?: number; ones?: number }) => {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ecfeff" rx="16" />
      {Array.from({ length: tens }, (_, i) => (
        <g key={i} transform={`translate(${20 + i * 22}, 20)`}>
          {Array.from({ length: 10 }, (_, j) => (
            <rect key={j} y={j * 9} width="16" height="8" rx="2" fill="#0ea5e9" stroke="#0369a1" strokeWidth="0.5" />
          ))}
        </g>
      ))}
      {Array.from({ length: ones }, (_, i) => (
        <rect key={i} x={25 + tens * 22 + (i % 5) * 18} y={20 + Math.floor(i / 5) * 18} width="14" height="14" rx="3" fill="#facc15" stroke="#d97706" strokeWidth="0.5" />
      ))}
      <text x="120" y="130" fontSize="14" fontWeight="bold" fill="#0369a1" textAnchor="middle">{tens * 10 + ones}</text>
    </svg>
  );
});

// ─── SEQUENCE SVG ──────────────────────────────────────────────────────────

export const SequenceSvg = memo(({ start = 20, step = 10, count = 4 }: { start?: number; step?: number; count?: number }) => {
  const nums = Array.from({ length: count }, (_, i) => start + i * step);
  return (
    <svg width="100%" viewBox="0 0 240 100">
      <rect width="240" height="100" fill="#f5f3ff" rx="16" />
      {nums.map((n, i) => (
        <g key={i} transform={`translate(${35 + i * 55}, 50)`}>
          <rect x="-20" y="-20" width="40" height="40" rx="8" fill="white" stroke="#a78bfa" strokeWidth="1.5" />
          <text fontSize="14" fontWeight="bold" fill="#7c3aed" textAnchor="middle" dominantBaseline="middle">{n}</text>
          {i < count - 1 && (
            <text x="28" y="-5" fontSize="10" fill="#a78bfa" textAnchor="middle">+{step}</text>
          )}
        </g>
      ))}
    </svg>
  );
});

// ─── GROUPS SVG ────────────────────────────────────────────────────────────

export const GroupsSvg = memo(({ groups = 3, perGroup = 4, emoji = "🍎" }: { groups?: number; perGroup?: number; emoji?: string }) => {
  const cols = Math.min(groups, 4);
  return (
    <svg width="100%" viewBox="0 0 240 145">
      <rect width="240" height="145" fill="#fffbeb" rx="16" />
      {Array.from({ length: groups }, (_, gi) => {
        const gcol = gi % cols;
        const grow = Math.floor(gi / cols);
        const bx = 10 + gcol * 56;
        const by = 10 + grow * 54;
        return (
          <g key={gi}>
            <rect x={bx} y={by} width="50" height="48" rx="8" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
            {Array.from({ length: perGroup }, (_, i) => (
              <text key={i} x={bx + 12 + (i % 2) * 22} y={by + 15 + Math.floor(i / 2) * 18} fontSize="16" textAnchor="middle">{emoji}</text>
            ))}
          </g>
        );
      })}
      <text x="120" y="132" fontSize="12" fontWeight="bold" fill="#d97706" textAnchor="middle">{groups} × {perGroup} = {groups * perGroup}</text>
    </svg>
  );
});

// ─── REP ADD SVG ───────────────────────────────────────────────────────────

export const RepAddSvg = memo(({ groups = 4, perGroup = 3 }: { groups?: number; perGroup?: number }) => {
  const res = groups * perGroup;
  return (
    <svg width="100%" viewBox="0 0 240 130">
      <rect width="240" height="130" fill="#f0fdf4" rx="16" />
      <text x="120" y="40" fontSize="14" fill="#15803d" textAnchor="middle">
        {Array.from({ length: groups }).map(() => perGroup).join(" + ")} = {res}
      </text>
      <text x="120" y="65" fontSize="20" fill="#16a34a" textAnchor="middle">↕</text>
      <text x="120" y="100" fontSize="24" fontWeight="900" fill="#16a34a" textAnchor="middle">
        {groups} × {perGroup} = {res}
      </text>
    </svg>
  );
});

// ─── TIMES TABLE SVG ───────────────────────────────────────────────────────

export const TimesTableSvg = memo(({ table = 3 }: { table?: number }) => {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#f0f9ff" rx="16" />
      {[1, 2, 3, 4, 5].map((n, i) => (
        <g key={n} transform={`translate(120, ${30 + i * 22})`}>
          <text x="-40" y="0" fontSize="14" fontWeight="bold" fill="#0369a1" textAnchor="middle">{n} × {table}</text>
          <text x="0" y="0" fontSize="14" fill="#94a3b8" textAnchor="middle">=</text>
          <text x="40" y="0" fontSize="14" fontWeight="bold" fill="#0284c7" textAnchor="middle">{n * table}</text>
        </g>
      ))}
    </svg>
  );
});

// ─── SCALE SVG ─────────────────────────────────────────────────────────────

export const ScaleSvg = memo(({ leftVal = 2, rightVal = 2, unit = "kg" }: { leftVal?: number; rightVal?: number; unit?: string }) => {
  const tilt = (rightVal - leftVal) * 8;
  return (
    <svg width="100%" viewBox="0 0 240 130">
      <rect width="240" height="130" fill="#f0fdfa" rx="16" />
      <rect x="115" y="70" width="10" height="50" rx="3" fill="#cbd5e1" />
      <rect x="95" y="115" width="50" height="8" rx="4" fill="#94a3b8" />
      <line x1="60" y1={70 - tilt} x2="180" y2={70 + tilt} stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="62" cy={72 - tilt} rx="28" ry="8" fill="#dcfce7" stroke="#10b981" strokeWidth="1.5" />
      <text x="62" y={72 - tilt + 4} fontSize="12" fontWeight="bold" fill="#15803d" textAnchor="middle" dominantBaseline="middle">{leftVal} {unit}</text>
      <ellipse cx="178" cy={72 + tilt} rx="28" ry="8" fill="#dcfce7" stroke="#10b981" strokeWidth="1.5" />
      <text x="178" y={72 + tilt + 4} fontSize="12" fontWeight="bold" fill="#15803d" textAnchor="middle" dominantBaseline="middle">{rightVal} {unit}</text>
    </svg>
  );
});

// ─── RULER SVG ─────────────────────────────────────────────────────────────

export const RulerSvg = memo(({ length = 7 }: { length?: number }) => {
  return (
    <svg width="100%" viewBox="0 0 240 110">
      <rect width="240" height="110" fill="#f0f9ff" rx="16" />
      <rect x="15" y="42" width="210" height="30" rx="4" fill="white" stroke="#0ea5e9" strokeWidth="1.5" />
      {Array.from({ length: 21 }, (_, i) => {
        const x = 15 + i * 10;
        const isCm = i % 2 === 0;
        return (
          <g key={i}>
            <line x1={x} y1="42" x2={x} y2={isCm ? "60" : "54"} stroke="#94a3b8" strokeWidth={isCm ? 2 : 1} />
            {isCm && <text x={x} y="75" fontSize="8" fill="#64748b" textAnchor="middle">{i / 2}</text>}
          </g>
        );
      })}
      <rect x="15" y="25" width={length * 20} height="8" rx="2" fill="#3b82f6" opacity="0.8" />
      <text x={15 + length * 10} y="20" fontSize="10" fontWeight="bold" fill="#1e40af" textAnchor="middle">{length} cm</text>
    </svg>
  );
});

// ─── SHARING SVG ───────────────────────────────────────────────────────────

export const SharingSvg = memo(({ total = 12, people = 3, emoji = "🍪" }: { total?: number; people?: number; emoji?: string }) => {
  const perPerson = Math.floor(total / people);
  return (
    <svg width="100%" viewBox="0 0 240 145">
      <rect width="240" height="145" fill="#f0fdf4" rx="16" />
      {Array.from({ length: people }, (_, pi) => {
        const bx = 15 + pi * 70;
        return (
          <g key={pi}>
            <rect x={bx} y="16" width="60" height="90" rx="10" fill="white" stroke="#10b981" strokeWidth="1.5" />
            {Array.from({ length: perPerson }, (_, i) => (
              <text key={i} x={bx + 12 + (i % 3) * 18} y={48 + Math.floor(i / 3) * 20} fontSize="16" textAnchor="middle">{emoji}</text>
            ))}
          </g>
        );
      })}
      <text x="120" y="128" fontSize="12" fontWeight="bold" fill="#15803d" textAnchor="middle">{total} ÷ {people} = {perPerson}</text>
    </svg>
  );
});

// ─── DIV NL SVG ────────────────────────────────────────────────────────────

export const DivNLSvg = memo(({ total = 15, step = 3, max = 17 }: { total?: number; step?: number; max?: number }) => {
  const jumps = total / step;
  return (
    <svg width="100%" viewBox="0 0 240 100">
      <rect width="240" height="100" fill="#f0f9ff" rx="16" />
      <line x1="15" y1="55" x2="225" y2="55" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: max + 1 }, (_, n) => {
        const x = 15 + (n / max) * 210;
        const isKey = n % step === 0 && n <= total;
        return (
          <g key={n}>
            <line x1={x} y1={isKey ? "47" : "51"} x2={x} y2="59" stroke={isKey ? "#0ea5e9" : "#cbd5e1"} strokeWidth={isKey ? 2 : 1} />
            {isKey && <text x={x} y="72" fontSize="10" fontWeight="bold" fill="#0369a1" textAnchor="middle">{n}</text>}
          </g>
        );
      })}
      {Array.from({ length: jumps }, (_, j) => {
        const fromX = 15 + ((total - j * step) / max) * 210;
        const toX = 15 + ((total - (j + 1) * step) / max) * 210;
        return (
          <path key={j} d={`M ${fromX} 45 Q ${(fromX + toX) / 2} 30 ${toX} 45`} stroke="#0ea5e9" strokeWidth="1.5" fill="none" markerEnd="url(#arrowBlueSmall)" />
        );
      })}
      <defs>
        <marker id="arrowBlueSmall" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#0ea5e9" />
        </marker>
      </defs>
    </svg>
  );
});

// ─── DIV MUL SVG ───────────────────────────────────────────────────────────

export const DivMulSvg = memo(({ a = 4, b = 3 }: { a?: number; b?: number }) => {
  const res = a * b;
  return (
    <svg width="100%" viewBox="0 0 240 120">
      <rect width="240" height="120" fill="#fdf2f8" rx="16" />
      <text x="120" y="40" fontSize="18" fontWeight="bold" fill="#be185d" textAnchor="middle">{a} × {b} = {res}</text>
      <text x="120" y="65" fontSize="16" fill="#94a3b8" textAnchor="middle">↕</text>
      <text x="70" y="95" fontSize="16" fontWeight="bold" fill="#db2777" textAnchor="middle">{res} ÷ {a} = {b}</text>
      <text x="170" y="95" fontSize="16" fontWeight="bold" fill="#db2777" textAnchor="middle">{res} ÷ {b} = {a}</text>
    </svg>
  );
});

// ─── HUNDRED GRID SVG ──────────────────────────────────────────────────────

export const HundredGridSvg = memo(({ highlight = [10, 50, 100] }: { highlight?: number[] }) => {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <rect width="240" height="160" fill="#f8fafc" rx="16" />
      <g transform="translate(45, 20)">
        {Array.from({ length: 100 }).map((_, i) => {
          const val = i + 1;
          const col = i % 10;
          const row = Math.floor(i / 10);
          const isHl = highlight.includes(val);
          return (
            <rect key={i} x={col * 15} y={row * 12} width="13" height="10" rx="2"
              fill={isHl ? "#4ECDC4" : "white"}
              stroke="#e2e8f0" strokeWidth="0.5" opacity={isHl ? 1 : 0.4} />
          );
        })}
      </g>
      <text x="120" y="152" fontSize="11" fontWeight="bold" fill="#2A9D94" textAnchor="middle" opacity="0.7">Hundred Chart</text>
    </svg>
  );
});

// ─── PLACE VALUE 3D SVG (H-T-O) ────────────────────────────────────────────

export const PlaceValue3DSvg = memo(({ hundreds = 3, tens = 4, ones = 7 }: { hundreds?: number; tens?: number; ones?: number }) => {
  return (
    <svg width="100%" viewBox="0 0 240 150">
      <defs>
        <linearGradient id="pv3dG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E6ACFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="150" fill="url(#pv3dG)" rx="16" />
      
      {/* Hundreds (Stacks of 100) */}
      <g transform="translate(30, 40)">
        {Array.from({ length: hundreds }).map((_, i) => (
          <rect key={i} x={i * 8} y={i * 4} width="40" height="40" fill="#B44DFF" opacity="0.6" stroke="#7c3aed" strokeWidth="0.5" />
        ))}
        <text y="65" fontSize="10" fontWeight="bold" fill="#7c3aed">H: {hundreds}</text>
      </g>

      {/* Tens (Bars of 10) */}
      <g transform="translate(110, 40)">
        {Array.from({ length: tens }).map((_, i) => (
          <rect key={i} x={i * 12} width="10" height="40" fill="#FF6B6B" opacity="0.7" stroke="#ef4444" strokeWidth="0.5" rx="1" />
        ))}
        <text y="65" fontSize="10" fontWeight="bold" fill="#ef4444">T: {tens}</text>
      </g>

      {/* Ones (Cubes) */}
      <g transform="translate(180, 40)">
        {Array.from({ length: ones }).map((_, i) => (
          <rect key={i} x={(i % 3) * 12} y={Math.floor(i / 3) * 12} width="10" height="10" fill="#FFD700" stroke="#d97706" strokeWidth="0.5" rx="2" />
        ))}
        <text y="65" fontSize="10" fontWeight="bold" fill="#d97706">O: {ones}</text>
      </g>

      <text x="120" y="130" fontSize="18" fontWeight="black" fill="#1e293b" textAnchor="middle">{hundreds * 100 + tens * 10 + ones}</text>
    </svg>
  );
});

// ─── PERIMETER SVG ─────────────────────────────────────────────────────────

export const PerimeterSvg = memo(({ w = 7, h = 5 }: { w?: number; h?: number }) => {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#fffbeb" rx="16" />
      <rect x="50" y="35" width="140" height="70" fill="none" stroke="#f59e0b" strokeWidth="3" rx="2" />
      <text x="120" y="25" fontSize="12" fontWeight="bold" fill="#d97706" textAnchor="middle">{w} cm</text>
      <text x="35" y="75" fontSize="12" fontWeight="bold" fill="#d97706" textAnchor="middle">{h} cm</text>
      <text x="120" y="120" fontSize="12" fontWeight="bold" fill="#d97706" textAnchor="middle">{w} cm</text>
      <text x="205" y="75" fontSize="12" fontWeight="bold" fill="#d97706" textAnchor="middle">{h} cm</text>
      <text x="120" y="132" fontSize="10" fill="#92400e" textAnchor="middle" opacity="0.7">P = {w} + {h} + {w} + {h} = {2 * (w + h)} cm</text>
    </svg>
  );
});

// ─── GROUPING SVG ──────────────────────────────────────────────────────────

export const GroupingSvg = memo(({ total = 12, groupSize = 3 }: { total?: number; groupSize?: number }) => {
  const numGroups = total / groupSize;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#f0fdf4" rx="16" />
      {Array.from({ length: numGroups }).map((_, g) => {
        const startX = 20 + (g % 2) * 110;
        const startY = 40 + Math.floor(g / 2) * 45;
        return (
          <g key={g} transform={`translate(${startX}, ${startY})`}>
            <rect x="0" y="0" width={groupSize * 14 + 8} height="18" fill="white" stroke="#10b981" strokeWidth="1" rx="2" />
            {Array.from({ length: groupSize }).map((_, i) => (
              <circle key={i} cx={i * 14 + 8} cy="9" r="4" fill="#10b981" />
            ))}
          </g>
        );
      })}
      <text x="120" y="128" fontSize="12" fontWeight="bold" fill="#15803d" textAnchor="middle">{total} ÷ {groupSize} = {numGroups}</text>
    </svg>
  );
});

// ─── INVERSE SVG ───────────────────────────────────────────────────────────

export const InverseSvg = memo(({ a = 3, b = 4 }: { a?: number; b?: number }) => {
  const res = a * b;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#f0f9ff" rx="16" />
      <g transform="translate(120, 45)">
        <text x="0" y="0" fontSize="16" fontWeight="bold" fill="#0369a1" textAnchor="middle">{a} × {b} = {res}</text>
      </g>
      <text x="120" y="70" fontSize="16" fill="#94a3b8" textAnchor="middle">↕</text>
      <g transform="translate(120, 100)">
        <text x="0" y="0" fontSize="16" fontWeight="bold" fill="#0284c7" textAnchor="middle">{res} ÷ {b} = {a}</text>
      </g>
    </svg>
  );
});
