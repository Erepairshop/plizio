"use client";
import { useState, useCallback, useRef, memo } from "react";
import { motion } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

interface DataPoint { x: number; y: number }

interface Props {
  /** Data points to plot (sorted by x) */
  points: DataPoint[];
  /** The target point the student must find/tap */
  targetX: number;
  targetY: number;
  /** Axis config */
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  xLabel?: string;
  yLabel?: string;
  /** Visual */
  chartType?: "line" | "bar" | "scatter";
  color: string;
  instruction: string;
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

/* ── Labels ─────────────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    tapToSelect: "Tap on the graph to select a value",
    correct: "Correct!",
    wrong: "Not quite — look again!",
    hint: "Hint",
    confirm: "Confirm",
    yourAnswer: "Your answer",
  },
  de: {
    tapToSelect: "Tippe auf den Graphen, um einen Wert auszuwählen",
    correct: "Richtig!",
    wrong: "Nicht ganz — schau nochmal!",
    hint: "Hinweis",
    confirm: "Bestätigen",
    yourAnswer: "Deine Antwort",
  },
  hu: {
    tapToSelect: "Koppints a grafikonra az érték kiválasztásához",
    correct: "Helyes!",
    wrong: "Nem egészen — nézd meg újra!",
    hint: "Tipp",
    confirm: "Megerősítés",
    yourAnswer: "A te válaszod",
  },
  ro: {
    tapToSelect: "Atinge graficul pentru a selecta o valoare",
    correct: "Corect!",
    wrong: "Nu chiar — uită-te din nou!",
    hint: "Indiciu",
    confirm: "Confirmă",
    yourAnswer: "Răspunsul tău",
  },
};

/* ── Component ──────────────────────────────────────────────── */

const PAD = { top: 20, right: 20, bottom: 32, left: 36 };
const W = 280;
const H = 180;
const INNER_W = W - PAD.left - PAD.right;
const INNER_H = H - PAD.top - PAD.bottom;

const GraphPlotter = memo(function GraphPlotter({
  points, targetX, targetY,
  xMin: xMinProp, xMax: xMaxProp, yMin: yMinProp, yMax: yMaxProp,
  xLabel = "x", yLabel = "y", chartType = "line",
  color, instruction, hint1, hint2, lang, onDone,
}: Props) {
  const t = L[lang] ?? L.en;

  const allX = points.map(p => p.x);
  const allY = points.map(p => p.y);
  const xMin = xMinProp ?? Math.min(...allX, targetX) - 1;
  const xMax = xMaxProp ?? Math.max(...allX, targetX) + 1;
  const yMin = yMinProp ?? Math.min(...allY, 0);
  const yMax = yMaxProp ?? Math.max(...allY, targetY) + 1;

  const toSvgX = (x: number) => PAD.left + ((x - xMin) / (xMax - xMin)) * INNER_W;
  const toSvgY = (y: number) => PAD.top + INNER_H - ((y - yMin) / (yMax - yMin)) * INNER_H;

  const [selectedY, setSelectedY] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [hintLevel, setHintLevel] = useState(0);
  const [done, setDone] = useState(false);
  const wrongCount = useRef(0);
  const svgRef = useRef<SVGSVGElement>(null);

  // Generate Y-axis ticks
  const yRange = yMax - yMin;
  const yStep = yRange <= 10 ? 1 : yRange <= 50 ? 5 : yRange <= 100 ? 10 : Math.ceil(yRange / 6);
  const yTicks: number[] = [];
  for (let v = yMin; v <= yMax; v += yStep) yTicks.push(v);

  // Generate X-axis ticks
  const xRange = xMax - xMin;
  const xStep = xRange <= 10 ? 1 : xRange <= 50 ? 5 : Math.ceil(xRange / 6);
  const xTicks: number[] = [];
  for (let v = xMin; v <= xMax; v += xStep) xTicks.push(v);

  // SVG line path
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${toSvgX(p.x)} ${toSvgY(p.y)}`).join(" ");

  // Target X highlight line
  const targetSvgX = toSvgX(targetX);
  const targetSvgY = toSvgY(targetY);

  // Snap Y options (quantised to nearest yStep/2)
  const snapStep = yStep;

  const handleSvgTap = useCallback((e: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => {
    if (feedback || done) return;
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();

    let clientY: number;
    if ("touches" in e) {
      clientY = e.touches[0].clientY;
    } else {
      clientY = e.clientY;
    }

    const svgY = ((clientY - rect.top) / rect.height) * H;
    const dataY = yMin + ((INNER_H - (svgY - PAD.top)) / INNER_H) * (yMax - yMin);
    // Snap to nearest tick
    const snapped = Math.round(dataY / snapStep) * snapStep;
    const clamped = Math.max(yMin, Math.min(yMax, snapped));
    setSelectedY(clamped);
  }, [feedback, done, yMin, yMax, snapStep]);

  const handleConfirm = useCallback(() => {
    if (selectedY === null || feedback) return;
    const tolerance = Math.max(yStep * 0.5, 0.5);
    if (Math.abs(selectedY - targetY) <= tolerance) {
      setFeedback("correct");
      setDone(true);
      setTimeout(() => onDone(wrongCount.current <= 1), 1200);
    } else {
      wrongCount.current++;
      setFeedback("wrong");
      setTimeout(() => {
        setFeedback(null);
        setSelectedY(null);
      }, 1200);
    }
  }, [selectedY, feedback, targetY, yStep, onDone]);

  return (
    <div className="w-full flex flex-col items-center gap-2 px-2">
      <p className="text-xs font-semibold text-center text-white/50 px-4">{instruction}</p>

      {/* SVG Chart */}
      <div className="w-full max-w-xs rounded-2xl p-2" style={{ background: `${color}0a`, border: `1px solid ${color}22` }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          onClick={handleSvgTap}
          onTouchStart={handleSvgTap}
          style={{ touchAction: "none" }}
        >
          {/* Grid */}
          {yTicks.map(v => (
            <g key={`y${v}`}>
              <line x1={PAD.left} y1={toSvgY(v)} x2={W - PAD.right} y2={toSvgY(v)}
                stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <text x={PAD.left - 4} y={toSvgY(v) + 3} fontSize="7" fill="rgba(255,255,255,0.35)" textAnchor="end">{v}</text>
            </g>
          ))}
          {xTicks.map(v => (
            <g key={`x${v}`}>
              <line x1={toSvgX(v)} y1={PAD.top} x2={toSvgX(v)} y2={H - PAD.bottom}
                stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <text x={toSvgX(v)} y={H - PAD.bottom + 12} fontSize="7" fill="rgba(255,255,255,0.35)" textAnchor="middle">{v}</text>
            </g>
          ))}

          {/* Axes */}
          <line x1={PAD.left} y1={H - PAD.bottom} x2={W - PAD.right} y2={H - PAD.bottom} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={H - PAD.bottom} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

          {/* Axis labels */}
          <text x={W / 2} y={H - 4} fontSize="7" fill="rgba(255,255,255,0.4)" textAnchor="middle">{xLabel}</text>
          <text x={8} y={H / 2} fontSize="7" fill="rgba(255,255,255,0.4)" textAnchor="middle" transform={`rotate(-90, 8, ${H / 2})`}>{yLabel}</text>

          {/* Data: bars or line */}
          {chartType === "bar" ? (
            points.map((p, i) => {
              const barW = Math.max(6, INNER_W / points.length * 0.6);
              return (
                <rect
                  key={i}
                  x={toSvgX(p.x) - barW / 2}
                  y={toSvgY(p.y)}
                  width={barW}
                  height={toSvgY(yMin) - toSvgY(p.y)}
                  fill={`${color}66`}
                  rx="2"
                />
              );
            })
          ) : chartType === "scatter" ? (
            points.map((p, i) => (
              <circle key={i} cx={toSvgX(p.x)} cy={toSvgY(p.y)} r="3.5" fill={color} opacity="0.7" />
            ))
          ) : (
            <>
              <path d={linePath} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
              {points.map((p, i) => (
                <circle key={i} cx={toSvgX(p.x)} cy={toSvgY(p.y)} r="3" fill={color} />
              ))}
            </>
          )}

          {/* Target X dashed line */}
          <line x1={targetSvgX} y1={PAD.top} x2={targetSvgX} y2={H - PAD.bottom}
            stroke={`${color}55`} strokeWidth="1" strokeDasharray="3 2" />
          <text x={targetSvgX} y={H - PAD.bottom + 22} fontSize="8" fontWeight="bold" fill={color} textAnchor="middle">
            {xLabel}={targetX}
          </text>

          {/* Selected Y indicator */}
          {selectedY !== null && (
            <>
              <line x1={PAD.left} y1={toSvgY(selectedY)} x2={targetSvgX} y2={toSvgY(selectedY)}
                stroke={feedback === "correct" ? "#22c55e" : feedback === "wrong" ? "#ef4444" : `${color}88`}
                strokeWidth="1.5" strokeDasharray="4 2" />
              <circle cx={targetSvgX} cy={toSvgY(selectedY)} r="5"
                fill={feedback === "correct" ? "#22c55e" : feedback === "wrong" ? "#ef4444" : color}
                stroke="white" strokeWidth="1" />
              <text x={PAD.left - 4} y={toSvgY(selectedY) + 3} fontSize="8" fontWeight="bold"
                fill={feedback === "correct" ? "#22c55e" : feedback === "wrong" ? "#ef4444" : color}
                textAnchor="end">
                {selectedY}
              </text>
            </>
          )}

          {/* Correct answer reveal on done */}
          {done && (
            <circle cx={targetSvgX} cy={targetSvgY} r="6"
              fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.8" />
          )}
        </svg>
      </div>

      {/* Tap hint */}
      {!done && selectedY === null && !feedback && (
        <p className="text-xs text-white/30 text-center">{t.tapToSelect}</p>
      )}

      {/* Feedback */}
      {feedback && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-bold text-center"
          style={{ color: feedback === "correct" ? "#22c55e" : "#ef4444" }}
        >
          {feedback === "correct" ? t.correct : t.wrong}
        </motion.p>
      )}

      {/* Confirm button */}
      {selectedY !== null && !feedback && !done && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={handleConfirm}
          className="px-5 py-2 rounded-xl font-bold text-sm text-white"
          style={{ background: color }}
        >
          {t.confirm}: {yLabel} = {selectedY}
        </motion.button>
      )}

      {/* Hints */}
      {!done && (
        <>
          {hintLevel < 2 && (
            <button
              onClick={() => setHintLevel(h => Math.min(h + 1, 2))}
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ color: `${color}aa`, background: `${color}15` }}
            >
              💡 {t.hint}
            </button>
          )}
          {hintLevel >= 1 && <p className="text-xs text-white/40 text-center px-4">{hint1}</p>}
          {hintLevel >= 2 && <p className="text-xs text-white/40 text-center px-4">{hint2}</p>}
        </>
      )}
    </div>
  );
});

export default GraphPlotter;
