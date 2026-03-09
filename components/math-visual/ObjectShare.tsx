'use client';
// Visual: total dots split equally into `groups` boxes
// Used by G2 divVisual generator

const DOT_R = 10;
const DOT_GAP = 26;
const BOX_PAD = 8;
const BOX_GAP = 14;

export default function ObjectShare({ total, groups }: { total: number; groups: number }) {
  const each = total / groups;
  const cols = Math.min(each, 4);
  const dotRows = Math.ceil(each / cols);

  const boxW = cols * DOT_GAP + BOX_PAD * 2;
  const boxH = dotRows * DOT_GAP + BOX_PAD * 2 + 4;

  const totalW = groups * boxW + (groups - 1) * BOX_GAP + 24;
  const totalH = boxH + 60;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      className="w-full max-w-xs mx-auto my-3"
      aria-label={`${total} ÷ ${groups}`}
    >
      {/* top row: all dots */}
      {Array.from({ length: total }).map((_, i) => {
        const cx = 16 + i * DOT_GAP;
        return (
          <g key={i}>
            <circle cx={cx} cy={18} r={DOT_R} fill="#f59e0b" opacity={0.85} />
            <circle cx={cx - 3} cy={15} r={3} fill="white" opacity={0.3} />
          </g>
        );
      })}
      {/* arrow down */}
      <line x1={totalW / 2} y1={32} x2={totalW / 2} y2={44} stroke="#9ca3af" strokeWidth={2} />
      <polygon
        points={`${totalW / 2},50 ${totalW / 2 - 6},42 ${totalW / 2 + 6},42`}
        fill="#9ca3af"
      />

      {/* group boxes */}
      {Array.from({ length: groups }).map((_, g) => {
        const bx = 12 + g * (boxW + BOX_GAP);
        const by = 54;
        return (
          <g key={g}>
            <rect
              x={bx} y={by} width={boxW} height={boxH}
              rx={6} fill="#eff6ff" stroke="#93c5fd" strokeWidth={2}
            />
            {Array.from({ length: each }).map((_, i) => {
              const col = i % cols;
              const row = Math.floor(i / cols);
              const cx = bx + BOX_PAD + DOT_R + col * DOT_GAP;
              const cy = by + BOX_PAD + DOT_R + row * DOT_GAP;
              return (
                <g key={i}>
                  <circle cx={cx} cy={cy} r={DOT_R} fill="#3b82f6" opacity={0.8} />
                  <circle cx={cx - 3} cy={cy - 3} r={3} fill="white" opacity={0.3} />
                </g>
              );
            })}
          </g>
        );
      })}
      {/* label */}
      <text
        x={totalW / 2} y={54 + boxH + 18}
        textAnchor="middle" fill="#374151"
        fontSize={13} fontWeight="700" fontFamily="system-ui"
      >
        {total} ÷ {groups} = ?
      </text>
    </svg>
  );
}
