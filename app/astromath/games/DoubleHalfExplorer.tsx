"use client";
// DoubleHalfExplorer — Doubling & Halving visualized (G1 i4)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG Illustrations ──────────────────────────────────────────────────────────────

// R2: Double of 3 (6 stars mirrored)
const DblSvgR2 = memo(function DblSvgR2() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="dblGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#dblGrad2)" rx="12" />
      {/* Left: 3 stars */}
      {[0, 1, 2].map((i) => (
        <g key={`l-${i}`} transform={`translate(${35 + i * 20}, 40)`}>
          <polygon points="0,-8 2,-2.5 8,-2 3,2 5,8 0,5 -5,8 -3,2 -8,-2 -2,-2.5" fill="#FBBF24" />
        </g>
      ))}
      <line x1="100" y1="20" x2="100" y2="70" stroke="#A78BFA" strokeWidth="2" strokeDasharray="4,3" opacity="0.7" />
      {/* Right: 3 stars (mirrored) */}
      {[0, 1, 2].map((i) => (
        <g key={`r-${i}`} transform={`translate(${165 - i * 20}, 40)`}>
          <polygon points="0,-8 2,-2.5 8,-2 3,2 5,8 0,5 -5,8 -3,2 -8,-2 -2,-2.5" fill="#FBBF24" />
        </g>
      ))}
      <text x="100" y="95" fontSize="11" fontWeight="bold" fill="#A78BFA" textAnchor="middle" opacity="0.8">DOUBLE</text>
      <text x="100" y="110" fontSize="16" fontWeight="900" fill="#FBBF24" textAnchor="middle">= 6</text>
    </svg>
  );
});

// R3: Double of 4 (8 circles mirrored)
const DblSvgR3 = memo(function DblSvgR3() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="dblGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#dblGrad3)" rx="12" />
      {/* Left: 4 circles */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`l-${i}`} transform={`translate(${28 + i * 14}, 40)`}>
          <circle cx="0" cy="0" r="6" fill="#A78BFA" />
        </g>
      ))}
      <line x1="100" y1="20" x2="100" y2="70" stroke="#A78BFA" strokeWidth="2" strokeDasharray="4,3" opacity="0.7" />
      {/* Right: 4 circles (mirrored) */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`r-${i}`} transform={`translate(${172 - i * 14}, 40)`}>
          <circle cx="0" cy="0" r="6" fill="#A78BFA" />
        </g>
      ))}
      <text x="100" y="95" fontSize="11" fontWeight="bold" fill="#A78BFA" textAnchor="middle" opacity="0.8">DOUBLE</text>
      <text x="100" y="110" fontSize="16" fontWeight="900" fill="#A78BFA" textAnchor="middle">= 8</text>
    </svg>
  );
});

// R4: Double of 5 (10 squares mirrored)
const DblSvgR4 = memo(function DblSvgR4() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="dblGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#dblGrad4)" rx="12" />
      {/* Left: 5 squares */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`l-${i}`} transform={`translate(${25 + i * 12}, 40)`}>
          <rect x="-5" y="-5" width="10" height="10" fill="#A78BFA" rx="1" />
        </g>
      ))}
      <line x1="100" y1="20" x2="100" y2="70" stroke="#A78BFA" strokeWidth="2" strokeDasharray="4,3" opacity="0.7" />
      {/* Right: 5 squares (mirrored) */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`r-${i}`} transform={`translate(${175 - i * 12}, 40)`}>
          <rect x="-5" y="-5" width="10" height="10" fill="#A78BFA" rx="1" />
        </g>
      ))}
      <text x="100" y="95" fontSize="11" fontWeight="bold" fill="#A78BFA" textAnchor="middle" opacity="0.8">DOUBLE</text>
      <text x="100" y="110" fontSize="16" fontWeight="900" fill="#A78BFA" textAnchor="middle">= 10</text>
    </svg>
  );
});

// R5: Half visualization - 6, 8, 4 circles split
const HalfSvgR5 = memo(function HalfSvgR5() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="halfGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A7F3D0" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#halfGrad5)" rx="12" />
      {/* Top: 6 circles whole */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={`w-${i}`} transform={`translate(${25 + i * 28}, 25)`}>
          <circle cx="0" cy="0" r="5" fill="#34D399" opacity="0.6" />
        </g>
      ))}
      {/* Arrow down */}
      <path d="M 100 45 L 100 65" stroke="#34D399" strokeWidth="2" markerEnd="url(#arrowhead)" />
      {/* Bottom left: 3 circles */}
      {[0, 1, 2].map((i) => (
        <g key={`l-${i}`} transform={`translate(${50 + i * 18}, 85)`}>
          <circle cx="0" cy="0" r="5" fill="#34D399" />
        </g>
      ))}
      {/* Bottom right: 3 circles */}
      {[0, 1, 2].map((i) => (
        <g key={`r-${i}`} transform={`translate(${135 + i * 18}, 85)`}>
          <circle cx="0" cy="0" r="5" fill="#34D399" />
        </g>
      ))}
      <line x1="100" y1="70" x2="100" y2="105" stroke="#34D399" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.6" />
      <text x="100" y="115" fontSize="12" fontWeight="bold" fill="#34D399" textAnchor="middle" opacity="0.8">SPLIT</text>
    </svg>
  );
});

// ─── SVG Intro ──────────────────────────────────────────────────────────────
const DoubleHalfSvg = memo(function DoubleHalfSvg({ isDouble }: { isDouble: boolean }) {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      {/* Background gradient */}
      <defs>
        <linearGradient id="dhGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDouble ? "#A78BFA" : "#34D399"} stopOpacity="0.15" />
          <stop offset="100%" stopColor={isDouble ? "#DDD6FE" : "#A7F3D0"} stopOpacity="0.05" />
        </linearGradient>
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        </filter>
      </defs>
      <rect width="200" height="120" fill="url(#dhGrad)" rx="12" />

      {isDouble ? (
        <>
          {/* Left group - 3 stars */}
          {[0, 1, 2].map((i) => (
            <g key={`left-${i}`} transform={`translate(${30 + i * 25}, 35)`}>
              <polygon points="0,-10 2.5,-4 9,-3 4,2 6,9 0,5 -6,9 -4,2 -9,-3 -2.5,-4" fill="#FBBF24" opacity="0.9" />
              <polygon points="0,-10 2.5,-4 9,-3 4,2 6,9 0,5 -6,9 -4,2 -9,-3 -2.5,-4" fill="#FCD34D" filter="url(#starGlow)" opacity="0.4" />
            </g>
          ))}

          {/* Mirror line */}
          <line x1="100" y1="20" x2="100" y2="85" stroke="#A78BFA" strokeWidth="2.5" strokeDasharray="5,3" opacity="0.7" />
          <text x="100" y="105" fontSize="12" fontWeight="bold" fill="#A78BFA" textAnchor="middle" opacity="0.8">
            MIRROR
          </text>

          {/* Right group - mirrored 3 stars */}
          {[0, 1, 2].map((i) => (
            <g key={`right-${i}`} transform={`translate(${170 - i * 25}, 35)`}>
              <polygon points="0,-10 2.5,-4 9,-3 4,2 6,9 0,5 -6,9 -4,2 -9,-3 -2.5,-4" fill="#FBBF24" opacity="0.9" />
              <polygon points="0,-10 2.5,-4 9,-3 4,2 6,9 0,5 -6,9 -4,2 -9,-3 -2.5,-4" fill="#FCD34D" filter="url(#starGlow)" opacity="0.4" />
            </g>
          ))}

          {/* Result: 6 stars */}
          <text x="100" y="70" fontSize="20" fontWeight="900" fill="#FBBF24" textAnchor="middle">
            3 × 2 = 6
          </text>
        </>
      ) : (
        <>
          {/* Whole group - 8 circles */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const row = Math.floor(i / 4);
            const col = i % 4;
            return (
              <g key={`whole-${i}`} transform={`translate(${50 + col * 20}, ${35 + row * 20})`}>
                <circle cx="0" cy="0" r="7" fill="#34D399" opacity={row === 0 ? 1 : 0.5} />
                <circle cx="0" cy="0" r="7" fill="#6EE7B7" filter="url(#starGlow)" opacity={row === 0 ? 0.4 : 0.15} />
              </g>
            );
          })}

          {/* Split line */}
          <line x1="100" y1="30" x2="100" y2="75" stroke="#34D399" strokeWidth="2.5" strokeDasharray="4,2" opacity="0.7" />
          <text x="100" y="95" fontSize="11" fontWeight="bold" fill="#34D399" textAnchor="middle" opacity="0.8">
            SPLIT
          </text>

          {/* Left half group */}
          {[0, 1, 2, 3].map((i) => {
            const row = Math.floor(i / 2);
            const col = i % 2;
            return (
              <g key={`half-l-${i}`} transform={`translate(${120 + col * 16}, ${40 + row * 16})`}>
                <circle cx="0" cy="0" r="6" fill="#34D399" opacity="0.7" />
              </g>
            );
          })}

          {/* Right half group */}
          {[0, 1, 2, 3].map((i) => {
            const row = Math.floor(i / 2);
            const col = i % 2;
            return (
              <g key={`half-r-${i}`} transform={`translate(${155 + col * 16}, ${40 + row * 16})`}>
                <circle cx="0" cy="0" r="6" fill="#34D399" opacity="0.7" />
              </g>
            );
          })}

          {/* Result: 4 + 4 */}
          <text x="100" y="68" fontSize="16" fontWeight="900" fill="#34D399" textAnchor="middle">
            8 ÷ 2 = 4
          </text>
        </>
      )}
    </svg>
  );
});

const LABELS = {
  en: {
    title: "Double & Half Explorer",
    doubleIntro: "DOUBLE means × 2 — two groups the same!",
    halfIntro: "HALF means ÷ 2 — split into two equal parts!",
    dblOf3: "Double of 3 = ?",
    dblOf4: "Double of 4 = ?",
    dblOf5: "Double of 5 = ?",
    halfOf6: "Half of 6 = ?",
    halfOf8: "Half of 8 = ?",
    halfOf4: "Half of 4 = ?",
  },
  hu: {
    title: "Dupla & Fele felfedezés",
    doubleIntro: "DUPLA azt jelenti × 2 — két egyforma csoport!",
    halfIntro: "FELE azt jelenti ÷ 2 — feloszlott két egyenlő részre!",
    dblOf3: "3 duplája = ?",
    dblOf4: "4 duplája = ?",
    dblOf5: "5 duplája = ?",
    halfOf6: "6 fele = ?",
    halfOf8: "8 fele = ?",
    halfOf4: "4 fele = ?",
  },
  de: {
    title: "Verdoppeln & Halbieren",
    doubleIntro: "VERDOPPELN heißt × 2 — zwei gleiche Gruppen!",
    halfIntro: "HALBIEREN heißt ÷ 2 — aufgeteilt in zwei gleiche Teile!",
    dblOf3: "Das Doppelte von 3 = ?",
    dblOf4: "Das Doppelte von 4 = ?",
    dblOf5: "Das Doppelte von 5 = ?",
    halfOf6: "Die Hälfte von 6 = ?",
    halfOf8: "Die Hälfte von 8 = ?",
    halfOf4: "Die Hälfte von 4 = ?",
  },
  ro: {
    title: "Dublare & Înjumătățire",
    doubleIntro: "DUBLA înseamnă × 2 — două grupuri identice!",
    halfIntro: "JUMĂTATE înseamnă ÷ 2 — împărțit în două părți egale!",
    dblOf3: "Dublul lui 3 = ?",
    dblOf4: "Dublul lui 4 = ?",
    dblOf5: "Dublul lui 5 = ?",
    halfOf6: "Jumătatea lui 6 = ?",
    halfOf8: "Jumătatea lui 8 = ?",
    halfOf4: "Jumătatea lui 4 = ?",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "title",
      infoText: "doubleIntro",
      svg: () => <DoubleHalfSvg isDouble={true} />,
      bulletKeys: ["dblOf3"],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "dblOf3",
      svg: () => <DblSvgR2 />,
      questions: [{ question: "dblOf3", choices: ["6", "5", "7", "4"], answer: "6" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "dblOf4",
      svg: () => <DblSvgR3 />,
      questions: [{ question: "dblOf4", choices: ["8", "7", "9", "6"], answer: "8" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "dblOf5",
      svg: () => <DblSvgR4 />,
      questions: [{ question: "dblOf5", choices: ["10", "9", "11", "8"], answer: "10" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "halfIntro",
      svg: () => <HalfSvgR5 />,
      questions: [
        { question: "halfOf6", choices: ["3", "2", "4", "5"], answer: "3" },
        { question: "halfOf8", choices: ["4", "5", "3", "6"], answer: "4" },
        { question: "halfOf4", choices: ["2", "1", "3", "4"], answer: "2" },
      ],
    },
  ],
};

const DoubleHalfExplorer = memo(function DoubleHalfExplorer({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_doublehalf" color={color} lang={lang} onDone={onDone} />;
});

export default DoubleHalfExplorer;
