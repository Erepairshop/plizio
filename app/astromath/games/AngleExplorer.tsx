"use client";
// AngleExplorer — Angle type discovery for Grade 4
// Teaches: acute (<90°), right (=90°), obtuse (90°-180°), straight (=180°)
// Students see an angle and tap to reveal its type and degree range.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Angle types ──────────────────────────────────────────────────────────────
type AngleType = "acute" | "right" | "obtuse" | "straight";

const TYPE_COLORS: Record<AngleType, string> = {
  acute:    "#00FF88",
  right:    "#00D4FF",
  obtuse:   "#FFD700",
  straight: "#FF6B6B",
};

// ─── Translations ─────────────────────────────────────────────────────────────
type TypeLabels = Record<AngleType, { name: string; range: string; hint: string }>;

const TYPE_LABELS: Record<string, TypeLabels> = {
  de: {
    acute:    { name: "Spitzer Winkel",      range: "kleiner als 90°",              hint: "Scharf wie eine Nadel!" },
    right:    { name: "Rechter Winkel",      range: "genau 90°",                    hint: "Wie eine Ecke!" },
    obtuse:   { name: "Stumpfer Winkel",     range: "zwischen 90° und 180°",        hint: "Breiter als eine Ecke!" },
    straight: { name: "Gestreckter Winkel",  range: "genau 180° (eine gerade Linie)", hint: "Eine perfekte Linie!" },
  },
  en: {
    acute:    { name: "Acute Angle",    range: "less than 90°",                 hint: "Sharp like a needle!" },
    right:    { name: "Right Angle",    range: "exactly 90°",                   hint: "Like a perfect corner!" },
    obtuse:   { name: "Obtuse Angle",   range: "between 90° and 180°",          hint: "Wider than a corner!" },
    straight: { name: "Straight Angle", range: "exactly 180° (a straight line)", hint: "A perfect line!" },
  },
  hu: {
    acute:    { name: "Hegyes szög",       range: "kisebb mint 90°",                   hint: "Éles, mint egy tű!" },
    right:    { name: "Derékszög",         range: "pontosan 90°",                      hint: "Mint egy sarok!" },
    obtuse:   { name: "Tompaszög",         range: "90° és 180° között",                hint: "Szélesebb mint egy sarok!" },
    straight: { name: "Nyújtott szög",     range: "pontosan 180° (egyenes vonal)",     hint: "Tökéletes egyenes!" },
  },
  ro: {
    acute:    { name: "Unghi ascuțit",  range: "mai mic de 90°",                  hint: "Ascuțit ca un ac!" },
    right:    { name: "Unghi drept",    range: "exact 90°",                       hint: "Ca un colț perfect!" },
    obtuse:   { name: "Unghi obtuz",    range: "între 90° și 180°",               hint: "Mai lat decât un colț!" },
    straight: { name: "Unghi plat",     range: "exact 180° (o linie dreaptă)",    hint: "O linie perfectă!" },
  },
};

const LABELS: Record<string, Record<string, string>> = {
  en: { concept: "Angles have different types!", tap: "Tap to reveal the angle type!", discover: "This is a:", next: "Next", done: "Brilliant! ✨" },
  hu: { concept: "A szögeknek különböző típusai vannak!", tap: "Koppints a szög típusának felfedéséhez!", discover: "Ez egy:", next: "Következő", done: "Fantasztikus! ✨" },
  de: { concept: "Winkel haben verschiedene Arten!", tap: "Tippe, um den Winkeltyp zu entdecken!", discover: "Das ist ein:", next: "Weiter", done: "Fantastisch! ✨" },
  ro: { concept: "Unghiurile au tipuri diferite!", tap: "Atinge pentru a descoperi tipul unghiului!", discover: "Acesta este un:", next: "Înainte", done: "Fantastic! ✨" },
};

// ─── Round data ───────────────────────────────────────────────────────────────
interface Round { deg: number; type: AngleType }

const ROUND_POOL: Round[] = [
  { deg: 45,  type: "acute"    },
  { deg: 90,  type: "right"    },
  { deg: 120, type: "obtuse"   },
  { deg: 30,  type: "acute"    },
  { deg: 150, type: "obtuse"   },
  { deg: 180, type: "straight" },
  { deg: 60,  type: "acute"    },
  { deg: 135, type: "obtuse"   },
];

function generateRounds(): Round[] {
  const pool = [...ROUND_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6);
}

// ─── SVG Angle ────────────────────────────────────────────────────────────────
// Vertex at (100, 105), ARM_LEN = 85, viewBox 0 0 210 120
const VX = 100, VY = 105, ARM = 85, ARC_R = 38;

function toRad(deg: number) { return (deg * Math.PI) / 180; }

function AngleSVG({ deg, revealed, typeColor }: {
  deg: number; revealed: boolean; typeColor: string;
}) {
  const arm2X = VX + ARM * Math.cos(toRad(deg));
  const arm2Y = VY - ARM * Math.sin(toRad(deg));

  const arcX = VX + ARC_R * Math.cos(toRad(deg));
  const arcY = VY - ARC_R * Math.sin(toRad(deg));
  const largeArc = deg > 180 ? 1 : 0;

  // Degree label at mid-angle
  const midRad = toRad(deg / 2);
  const lblX = VX + 22 * Math.cos(midRad);
  const lblY = VY - 22 * Math.sin(midRad);

  return (
    <svg width={210} height={120} viewBox="0 0 210 120" style={{ display: "block" }}>
      {/* Angle fill when revealed */}
      {revealed && deg < 180 && (
        <motion.path
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          d={`M ${VX},${VY} L ${VX + ARC_R},${VY} A ${ARC_R},${ARC_R} 0 ${largeArc},0 ${arcX},${arcY} Z`}
          fill={`${typeColor}30`} />
      )}
      {revealed && deg === 180 && (
        <motion.path
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          d={`M ${VX - ARC_R},${VY} A ${ARC_R},${ARC_R} 0 0,0 ${VX + ARC_R},${VY}`}
          fill={`${typeColor}20`} />
      )}

      {/* Arc indicator */}
      {deg < 180 ? (
        <path
          d={`M ${VX + ARC_R},${VY} A ${ARC_R},${ARC_R} 0 ${largeArc},0 ${arcX},${arcY}`}
          fill="none"
          stroke={revealed ? typeColor : "rgba(255,255,255,0.35)"}
          strokeWidth={2} />
      ) : (
        <path
          d={`M ${VX + ARC_R},${VY} A ${ARC_R},${ARC_R} 0 0,0 ${VX - ARC_R},${VY}`}
          fill="none"
          stroke={revealed ? typeColor : "rgba(255,255,255,0.35)"}
          strokeWidth={2} />
      )}

      {/* Right angle square indicator */}
      {deg === 90 && (
        <path d={`M ${VX + 16},${VY} L ${VX + 16},${VY - 16} L ${VX},${VY - 16}`}
          fill="none"
          stroke={revealed ? typeColor : "rgba(255,255,255,0.4)"}
          strokeWidth={2} />
      )}

      {/* Arm 1 (right, always) */}
      <line x1={VX} y1={VY} x2={VX + ARM} y2={VY}
        stroke="rgba(255,255,255,0.85)" strokeWidth={3} strokeLinecap="round" />

      {/* Arm 2 (at angle) */}
      <motion.line x1={VX} y1={VY} x2={arm2X} y2={arm2Y}
        stroke={revealed ? typeColor : "rgba(255,255,255,0.85)"}
        strokeWidth={3} strokeLinecap="round"
        animate={{ stroke: revealed ? typeColor : "rgba(255,255,255,0.85)" }}
        transition={{ duration: 0.3 }} />

      {/* Degree label inside arc */}
      <text x={lblX} y={lblY + 4} textAnchor="middle"
        fontSize={11} fontWeight="800"
        fill={revealed ? typeColor : "rgba(255,255,255,0.55)"}>
        {deg}°
      </text>

      {/* Vertex dot */}
      <circle cx={VX} cy={VY} r={4} fill={revealed ? typeColor : "rgba(255,255,255,0.9)"} />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const AngleExplorer = memo(function AngleExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const types = TYPE_LABELS[lang] ?? TYPE_LABELS.en;
  const [rounds] = useState<Round[]>(generateRounds);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [completed, setCompleted] = useState(0);

  const round = rounds[idx];
  const { deg, type } = round;
  const typeColor = TYPE_COLORS[type];
  const typeDef = types[type];

  const reveal = () => setRevealed(true);

  const next = useCallback(() => {
    const newCompleted = completed + 1;
    setCompleted(newCompleted);
    setRevealed(false);
    if (idx + 1 >= rounds.length) { onDone(newCompleted, rounds.length); return; }
    setIdx(i => i + 1);
  }, [idx, rounds.length, onDone, completed]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Concept label */}
      <p className="text-white/50 text-xs font-bold text-center">{lbl.concept}</p>

      {/* Angle SVG — centered */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center rounded-2xl py-4"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <AngleSVG deg={deg} revealed={revealed} typeColor={typeColor} />
        </motion.div>
      </AnimatePresence>

      {/* Reveal button or result */}
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.button key="tap"
            onClick={reveal}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="w-full py-4 rounded-2xl font-black text-base flex flex-col items-center gap-1"
            style={{
              background: `${color}15`,
              border: `2px solid ${color}60`,
              color,
            }}
            whileTap={{ scale: 0.96 }}>
            <span className="text-3xl">?</span>
            <span className="text-xs font-bold text-white/60">{lbl.tap}</span>
          </motion.button>
        ) : (
          <motion.div key="result"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3">
            {/* Type card */}
            <motion.div
              className="w-full rounded-2xl px-5 py-4"
              style={{ background: `${typeColor}15`, border: `2px solid ${typeColor}` }}
              animate={{ scale: [0.93, 1.03, 1] }} transition={{ duration: 0.4 }}>
              <p className="text-white/50 text-xs font-bold text-center mb-1">{lbl.discover}</p>
              <p className="text-2xl font-black text-center" style={{ color: typeColor }}>
                {typeDef.name}
              </p>
              <p className="text-sm font-bold text-center text-white/60 mt-1">{typeDef.range}</p>
              <p className="text-xs font-bold text-center mt-2"
                style={{ color: typeColor }}>{typeDef.hint}</p>
            </motion.div>

            <motion.button onClick={next}
              className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default AngleExplorer;
