'use client';
// Visual: rows × cols grid of dots  →  rows × cols = ?
// Used by G2 mulVisual generator

const DOT_R = 12;
const DOT_GAP = 32;

export default function ObjectArray({ rows, cols }: { rows: number; cols: number }) {
  const w = cols * DOT_GAP + 24;
  const h = rows * DOT_GAP + 48;

  const colors = ["#f59e0b", "#10b981", "#3b82f6", "#a855f7", "#ef4444"];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full max-w-[220px] mx-auto my-3"
      aria-label={`${rows} × ${cols}`}
    >
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const cx = 18 + c * DOT_GAP;
          const cy = 18 + r * DOT_GAP;
          const color = colors[r % colors.length];
          return (
            <g key={`${r}-${c}`}>
              <circle cx={cx} cy={cy} r={DOT_R} fill={color} opacity={0.85} />
              <circle cx={cx - 3} cy={cy - 3} r={4} fill="white" opacity={0.3} />
            </g>
          );
        })
      )}
      {/* row × col label */}
      <text
        x={w / 2} y={h - 10}
        textAnchor="middle" fill="#374151"
        fontSize={14} fontWeight="700" fontFamily="system-ui"
      >
        {rows} × {cols} = ?
      </text>
    </svg>
  );
}
