'use client';
// Visual: groupA objects  +  groupB objects  =  ?
// Used by G2 countAdd generator

const DOT_R = 14;
const DOT_GAP = 36;
const ROW_MAX = 5;

function Dots({ count, cx, color }: { count: number; cx: number; color: string }) {
  const rows = Math.ceil(count / ROW_MAX);
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const col = i % ROW_MAX;
        const row = Math.floor(i / ROW_MAX);
        const x = cx + col * DOT_GAP;
        const y = 40 + row * DOT_GAP;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={DOT_R} fill={color} opacity={0.85} />
            <circle cx={x - 4} cy={y - 4} r={5} fill="white" opacity={0.3} />
          </g>
        );
      })}
      {/* count label below */}
      <text
        x={cx + Math.min(count, ROW_MAX) * DOT_GAP / 2 - DOT_GAP / 2}
        y={40 + rows * DOT_GAP + 8}
        textAnchor="middle"
        fill="#374151"
        fontSize={15}
        fontWeight="700"
        fontFamily="system-ui"
      >{count}</text>
    </>
  );
}

export default function ObjectGroupAdd({ groupA, groupB }: { groupA: number; groupB: number }) {
  const colsA = Math.min(groupA, ROW_MAX);
  const colsB = Math.min(groupB, ROW_MAX);
  const widthA = colsA * DOT_GAP;
  const widthB = colsB * DOT_GAP;
  const rowsA = Math.ceil(groupA / ROW_MAX);
  const rowsB = Math.ceil(groupB / ROW_MAX);
  const maxRows = Math.max(rowsA, rowsB);

  const startA = 20;
  const plusX = startA + widthA + 20;
  const startB = plusX + 36;
  const totalW = startB + widthB + 20;
  const totalH = 40 + maxRows * DOT_GAP + 50;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      className="w-full max-w-xs mx-auto my-3"
      aria-label={`${groupA} + ${groupB}`}
    >
      <Dots count={groupA} cx={startA} color="#10b981" />
      {/* + sign */}
      <text x={plusX + 12} y={40 + (maxRows * DOT_GAP) / 2} textAnchor="middle" fill="#6b7280" fontSize={28} fontWeight="900" fontFamily="system-ui">+</text>
      <Dots count={groupB} cx={startB} color="#3b82f6" />
    </svg>
  );
}
