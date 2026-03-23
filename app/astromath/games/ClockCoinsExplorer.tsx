"use client";
// ClockCoinsExplorer — Clock & Coin learning (G1 i8)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG Clock Visualization ──────────────────────────────────────────────────────────
const ClockSvg = memo(function ClockSvg({ hour = 3 }: { hour?: number }) {
  const hourAngle = (hour % 12) * 30; // 30 degrees per hour
  const minuteAngle = 0; // Always on 12 (0 minutes)

  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      {/* Background gradient */}
      <defs>
        <linearGradient id="clockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#clockGrad)" rx="12" />

      {/* Clock body */}
      <circle cx="100" cy="60" r="35" fill="white" stroke="#F59E0B" strokeWidth="2" opacity="0.95" />

      {/* Hour markers */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h) => {
        const angle = (h * 30) * (Math.PI / 180);
        const x = 100 + 28 * Math.cos(angle - Math.PI / 2);
        const y = 60 + 28 * Math.sin(angle - Math.PI / 2);
        return (
          <text
            key={`hour-${h}`}
            x={x}
            y={y}
            fontSize="11"
            fontWeight="bold"
            fill="#1F2937"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {h === 0 ? 12 : h}
          </text>
        );
      })}

      {/* Minute hand (pointing to 12) */}
      <line
        x1="100"
        y1="60"
        x2="100"
        y2="30"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Hour hand (pointing to specified hour) */}
      <line
        x1="100"
        y1="60"
        x2={100 + 18 * Math.cos((hourAngle * Math.PI) / 180 - Math.PI / 2)}
        y2={60 + 18 * Math.sin((hourAngle * Math.PI) / 180 - Math.PI / 2)}
        stroke="#F59E0B"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Center dot */}
      <circle cx="100" cy="60" r="3.5" fill="#1F2937" />

      {/* Label */}
      <text x="100" y="102" fontSize="11" fontWeight="bold" fill="#F59E0B" textAnchor="middle">
        {hour}:00
      </text>
    </svg>
  );
});

// ─── SVG Coins Visualization ──────────────────────────────────────────────────────────
const CoinsSvg = memo(function CoinsSvg() {
  const coins = [
    { value: 10, color: "#DC2626", x: 30, y: 40 },
    { value: 10, color: "#DC2626", x: 60, y: 40 },
    { value: 5, color: "#F97316", x: 30, y: 65 },
    { value: 5, color: "#F97316", x: 60, y: 65 },
    { value: 1, color: "#FBBF24", x: 45, y: 85 },
  ];

  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      {/* Background gradient */}
      <defs>
        <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#coinGrad)" rx="12" />

      {/* Coins */}
      {coins.map((coin, i) => (
        <g key={`coin-${i}`} transform={`translate(${coin.x}, ${coin.y})`}>
          {/* Coin body */}
          <circle cx="0" cy="0" r="11" fill={coin.color} opacity="0.85" stroke={coin.color} strokeWidth="1" />
          {/* Coin shine */}
          <circle cx="-3" cy="-3" r="3" fill="white" opacity="0.3" />
          {/* Value text */}
          <text
            x="0"
            y="4"
            fontSize="9"
            fontWeight="900"
            fill="white"
            textAnchor="middle"
            opacity="0.95"
          >
            {coin.value}¢
          </text>
        </g>
      ))}

      {/* Total label */}
      <text x="100" y="115" fontSize="10" fontWeight="bold" fill="#D97706" textAnchor="middle">
        = 31¢
      </text>
    </svg>
  );
});

const LABELS = {
  en: {
    title: "Clock & Coins",
    clockIntro: "The SHORT hand shows the HOUR!",
    coinIntro: "Let's count the money!",
    clock3: "What time? The short hand points to 3",
    clock7: "What time? The short hand points to 7",
    clock11: "What time? The short hand points to 11",
    coin1: "Count: 10¢ + 10¢ + 5¢ + 5¢ + 1¢ = ?",
    coin2: "Count: 20¢ + 10¢ + 10¢ + 5¢ = ?",
    coin3: "Count: 50¢ + 20¢ + 10¢ + 5¢ + 5¢ + 2¢ = ?",
  },
  hu: {
    title: "Óra & Pénz",
    clockIntro: "A RÖVID mutató mutatja az ÓRÁT!",
    coinIntro: "Számoljuk meg a pénzt!",
    clock3: "Hány óra? A rövid mutató a 3-ra mutat",
    clock7: "Hány óra? A rövid mutató a 7-re mutat",
    clock11: "Hány óra? A rövid mutató a 11-re mutat",
    coin1: "Összesen: 10¢ + 10¢ + 5¢ + 5¢ + 1¢ = ?",
    coin2: "Összesen: 20¢ + 10¢ + 10¢ + 5¢ = ?",
    coin3: "Összesen: 50¢ + 20¢ + 10¢ + 5¢ + 5¢ + 2¢ = ?",
  },
  de: {
    title: "Uhr & Geld",
    clockIntro: "Der KURZE Zeiger zeigt die STUNDE!",
    coinIntro: "Zählen wir das Geld!",
    clock3: "Wie spät ist es? Der Zeiger zeigt auf 3",
    clock7: "Wie spät ist es? Der Zeiger zeigt auf 7",
    clock11: "Wie spät ist es? Der Zeiger zeigt auf 11",
    coin1: "Zusammen: 10¢ + 10¢ + 5¢ + 5¢ + 1¢ = ?",
    coin2: "Zusammen: 20¢ + 10¢ + 10¢ + 5¢ = ?",
    coin3: "Zusammen: 50¢ + 20¢ + 10¢ + 5¢ + 5¢ + 2¢ = ?",
  },
  ro: {
    title: "Ceas & Bani",
    clockIntro: "Acul SCURT arată ORA!",
    coinIntro: "Să numărăm banii!",
    clock3: "Cât este ceasul? Acul scurt arată la 3",
    clock7: "Cât este ceasul? Acul scurt arată la 7",
    clock11: "Cât este ceasul? Acul scurt arată la 11",
    coin1: "Total: 10¢ + 10¢ + 5¢ + 5¢ + 1¢ = ?",
    coin2: "Total: 20¢ + 10¢ + 10¢ + 5¢ = ?",
    coin3: "Total: 50¢ + 20¢ + 10¢ + 5¢ + 5¢ + 2¢ = ?",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "title",
      infoText: "clockIntro",
      svg: () => <ClockSvg hour={3} />,
      bulletKeys: ["clock3"],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "clock3",
      svg: () => <ClockSvg hour={3} />,
      questions: [{ question: "clock3", choices: ["3 o'clock", "7 o'clock", "11 o'clock", "1 o'clock"], answer: "3 o'clock" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "clock7",
      svg: () => <ClockSvg hour={7} />,
      questions: [{ question: "clock7", choices: ["7 o'clock", "3 o'clock", "11 o'clock", "5 o'clock"], answer: "7 o'clock" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "coinIntro",
      svg: () => <CoinsSvg />,
      questions: [{ question: "coin1", choices: ["31¢", "30¢", "32¢", "29¢"], answer: "31¢" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "coinIntro",
      svg: () => <CoinsSvg />,
      questions: [
        { question: "coin2", choices: ["45¢", "44¢", "46¢", "43¢"], answer: "45¢" },
        { question: "coin3", choices: ["92¢", "91¢", "93¢", "90¢"], answer: "92¢" },
        { question: "clock11", choices: ["11 o'clock", "3 o'clock", "7 o'clock", "9 o'clock"], answer: "11 o'clock" },
      ],
    },
  ],
};

const ClockCoinsExplorer = memo(function ClockCoinsExplorer({
  color = "#EC4899",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_clockcoins" color={color} lang={lang} onDone={onDone} />;
});

export default ClockCoinsExplorer;
