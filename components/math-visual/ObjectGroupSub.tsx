'use client';
// Visual: total objects, `removed` are crossed out  →  how many remain?
// Used by G2 countSub generator

const DOT_R = 14;
const DOT_GAP = 36;
const ROW_MAX = 6;

export default function ObjectGroupSub({ total, removed }: { total: number; removed: number }) {
  const cols = Math.min(total, ROW_MAX);
  const rows = Math.ceil(total / ROW_MAX);
  const w = cols * DOT_GAP + 24;
  const h = rows * DOT_GAP + 60;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full max-w-xs mx-auto my-3"
      aria-label={`${total} - ${removed}`}
    >
      {Array.from({ length: total }).map((_, i) => {
        const col = i % ROW_MAX;
        const row = Math.floor(i / ROW_MAX);
        const cx = 20 + col * DOT_GAP;
        const cy = 28 + row * DOT_GAP;
        const isRemoved = i >= total - removed;
        return (
          <g key={i}>
            <circle
              cx={cx} cy={cy} r={DOT_R}
              fill={isRemoved ? "#fca5a5" : "#10b981"}
              opacity={isRemoved ? 0.5 : 0.85}
            />
            <circle cx={cx - 4} cy={cy - 4} r={5} fill="white" opacity={0.3} />
            {isRemoved && (
              <>
                <line
                  x1={cx - DOT_R + 3} y1={cy - DOT_R + 3}
                  x2={cx + DOT_R - 3} y2={cy + DOT_R - 3}
                  stroke="#dc2626" strokeWidth={3} strokeLinecap="round"
                />
                <line
                  x1={cx + DOT_R - 3} y1={cy - DOT_R + 3}
                  x2={cx - DOT_R + 3} y2={cy + DOT_R - 3}
                  stroke="#dc2626" strokeWidth={3} strokeLinecap="round"
                />
              </>
            )}
          </g>
        );
      })}
      {/* legend */}
      <text x={w / 2} y={h - 10} textAnchor="middle" fill="#6b7280" fontSize={13} fontFamily="system-ui">
        {total} − {removed} = ?
      </text>
    </svg>
  );
}
