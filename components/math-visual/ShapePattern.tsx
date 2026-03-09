'use client';
// Visual: colored shape pattern with ? at the end
// Used by G2 patternG2 generator
// shapes array: e.g. ["sq-blue","cir-green","sq-blue","cir-green","sq-blue","?"]

const SIZE = 28;
const GAP = 44;
const CY = 30;

type ShapeCode =
  | "sq-blue" | "sq-green" | "sq-red" | "sq-yellow" | "sq-purple"
  | "cir-blue" | "cir-green" | "cir-red" | "cir-yellow" | "cir-purple"
  | "tri-blue" | "tri-green" | "tri-red" | "tri-yellow" | "tri-purple"
  | "?";

const COLORS: Record<string, string> = {
  blue:   "#3b82f6",
  green:  "#10b981",
  red:    "#ef4444",
  yellow: "#f59e0b",
  purple: "#a855f7",
};

function Shape({ code, cx }: { code: string; cx: number }) {
  if (code === "?") {
    return (
      <text x={cx} y={CY + 10} textAnchor="middle" fill="#9ca3af" fontSize={32} fontWeight="900" fontFamily="system-ui">?</text>
    );
  }
  const [shape, colorKey] = code.split("-");
  const fill = COLORS[colorKey] || "#6b7280";
  const r = SIZE / 2;

  if (shape === "cir") {
    return (
      <g>
        <circle cx={cx} cy={CY} r={r} fill={fill} opacity={0.85} />
        <circle cx={cx - 5} cy={CY - 5} r={6} fill="white" opacity={0.25} />
      </g>
    );
  }
  if (shape === "sq") {
    return (
      <g>
        <rect x={cx - r} y={CY - r} width={SIZE} height={SIZE} rx={4} fill={fill} opacity={0.85} />
        <rect x={cx - r + 2} y={CY - r + 2} width={8} height={8} rx={2} fill="white" opacity={0.25} />
      </g>
    );
  }
  if (shape === "tri") {
    const pts = `${cx},${CY - r} ${cx + r},${CY + r} ${cx - r},${CY + r}`;
    return (
      <g>
        <polygon points={pts} fill={fill} opacity={0.85} />
      </g>
    );
  }
  return null;
}

export default function ShapePattern({ shapes }: { shapes: string[] }) {
  const w = shapes.length * GAP + 8;
  const h = CY * 2 + 10;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full max-w-sm mx-auto my-3"
      aria-label="Pattern sequence"
    >
      {shapes.map((code, i) => (
        <Shape key={i} code={code} cx={22 + i * GAP} />
      ))}
    </svg>
  );
}
