"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { loadKemiaK5Progress } from "@/lib/astroKemia5";
import { loadKemiaK6Progress } from "@/lib/astroKemia6";
import { loadKemiaK7Progress } from "@/lib/astroKemia7";
import { loadKemiaK8Progress } from "@/lib/astroKemia8";

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: (i * 37 + 13) % 100,
  y: (i * 53 + 7) % 100,
  size: (i % 3) * 0.7 + 0.5,
  dur: 2 + (i % 5) * 0.6,
  delay: (i % 7) * 0.4,
}));

function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STARS.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.1, 0.9, 0.1] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function PlanetK5({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#10B981" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#chemGrad5)" />
      <circle cx="34" cy="38" r="9" fill="#6EE7B7" opacity="0.55" />
      <circle cx="66" cy="42" r="6" fill="#A7F3D0" opacity="0.45" />
      <path d="M 28 68 Q 50 76 72 66" stroke="#D1FAE5" strokeWidth="2" fill="none" opacity="0.45" />
      <defs>
        <radialGradient id="chemGrad5" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#10B981" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK6({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#3B82F6" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#chemGrad6)" />
      <ellipse cx="50" cy="50" rx="36" ry="15" fill="none" stroke="#93C5FD" strokeWidth="2" opacity="0.6" />
      <circle cx="39" cy="35" r="5" fill="#DBEAFE" opacity="0.65" />
      <circle cx="64" cy="60" r="4" fill="#BFDBFE" opacity="0.55" />
      <defs>
        <radialGradient id="chemGrad6" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#3B82F6" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK7({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#8B5CF6" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#chemGrad7)" />
      <path d="M 26 52 L 74 52" stroke="#C4B5FD" strokeWidth="2" opacity="0.55" />
      <path d="M 50 26 L 50 74" stroke="#DDD6FE" strokeWidth="2" opacity="0.45" />
      <circle cx="36" cy="36" r="5" fill="#EDE9FE" opacity="0.65" />
      <circle cx="67" cy="67" r="5" fill="#DDD6FE" opacity="0.5" />
      <defs>
        <radialGradient id="chemGrad7" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK8({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#F97316" opacity="0.92" />
      <circle cx="50" cy="50" r="45" fill="url(#chemGrad8)" />
      <circle cx="50" cy="50" r="31" fill="none" stroke="#FDBA74" strokeWidth="2" opacity="0.55" />
      <path d="M 33 65 Q 50 54 67 65" stroke="#FFEDD5" strokeWidth="2" fill="none" opacity="0.45" />
      <circle cx="38" cy="37" r="6" fill="#FED7AA" opacity="0.6" />
      <defs>
        <radialGradient id="chemGrad8" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#F97316" />
        </radialGradient>
      </defs>
    </svg>
  );
}

const GRADES = [
  { grade: 5, Planet: PlanetK5, color: "#10B981", glow: "rgba(16,185,129,0.5)", emoji: "⚗️", route: "/astrokemia/5" },
  { grade: 6, Planet: PlanetK6, color: "#3B82F6", glow: "rgba(59,130,246,0.5)", emoji: "⚛️", route: "/astrokemia/6" },
  { grade: 7, Planet: PlanetK7, color: "#8B5CF6", glow: "rgba(139,92,246,0.5)", emoji: "🧪", route: "/astrokemia/7" },
  { grade: 8, Planet: PlanetK8, color: "#F97316", glow: "rgba(249,115,22,0.5)", emoji: "🧬", route: "/astrokemia/8" },
] as const;

const T = {
  en: {
    title: "AstroKemia",
    subtitle: "Explore Chemistry in Space!",
    grade: "Grade",
    topics: "islands",
  },
  hu: {
    title: "AstroKemia",
    subtitle: "Fedezd fel a kémiát az űrben!",
    grade: "Osztály",
    topics: "sziget",
  },
  de: {
    title: "AstroKemia",
    subtitle: "Entdecke Chemie im Weltraum!",
    grade: "Klasse",
    topics: "Inseln",
  },
  ro: {
    title: "AstroKemia",
    subtitle: "Explorează Chimia în Spațiu!",
    grade: "Clasa",
    topics: "insule",
  },
} as const;

const SUBTITLES = {
  5: { en: "Matter & Particles", hu: "Anyagok és részecskék", de: "Stoffe & Teilchen", ro: "Substanțe și particule" },
  6: { en: "Atoms & Separation", hu: "Atomok és szétválasztás", de: "Atome & Trennmethoden", ro: "Atomi și separare" },
  7: { en: "Reactions & Bonds", hu: "Reakciók és kötések", de: "Reaktionen & Bindungen", ro: "Reacții și legături" },
  8: { en: "Organic & Energy", hu: "Organikus és energia", de: "Organik & Energie", ro: "Organic și energie" },
} as const;

export default function AstroKemiaPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [k5Done, setK5Done] = useState(0);
  const [k6Done, setK6Done] = useState(0);
  const [k7Done, setK7Done] = useState(0);
  const [k8Done, setK8Done] = useState(0);

  useEffect(() => {
    setK5Done(loadKemiaK5Progress().completedIslands.length);
    setK6Done(loadKemiaK6Progress().completedIslands.length);
    setK7Done(loadKemiaK7Progress().completedIslands.length);
    setK8Done(loadKemiaK8Progress().completedIslands.length);
  }, []);

  return (
    <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
      <Starfield />

      <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-3">
        <button
          onClick={() => router.push("/")}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
        >
          <Home size={16} />
        </button>
        <div className="text-center">
          <h1 className="text-2xl font-black text-white tracking-wide">⚗️ {t.title}</h1>
          <p className="text-[11px] text-white/45 font-medium uppercase tracking-widest mt-0.5">{t.subtitle}</p>
        </div>
        <div className="w-9" />
      </div>

      <div className="relative z-10 flex-1 px-4 pb-6 mt-2">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {GRADES.map((g) => {
            const progress = g.grade === 5 ? k5Done : g.grade === 6 ? k6Done : g.grade === 7 ? k7Done : k8Done;
            const subtitle = SUBTITLES[g.grade as keyof typeof SUBTITLES][lang as keyof typeof SUBTITLES[5]] || SUBTITLES[g.grade as keyof typeof SUBTITLES].en;

            return (
              <motion.button
                key={g.grade}
                onClick={() => router.push(g.route)}
                className="relative rounded-3xl p-5 flex flex-col items-center gap-3 overflow-hidden"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${g.color}22 0%, rgba(255,255,255,0.04) 100%)`,
                  border: `1.5px solid ${g.color}55`,
                }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center relative"
                  style={{
                    background: `radial-gradient(circle, ${g.color}22, transparent)`,
                    boxShadow: `0 0 20px ${g.glow}`,
                  }}
                  animate={{ boxShadow: [`0 0 14px ${g.glow}`, `0 0 28px ${g.glow}`, `0 0 14px ${g.glow}`] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <g.Planet size={52} />
                </motion.div>

                <div className="text-center">
                  <div className="font-black text-sm" style={{ color: g.color }}>
                    {t.grade} {g.grade}
                  </div>
                  <div className="text-[10px] font-bold mt-0.5" style={{ color: `${g.color}CC` }}>
                    {g.emoji} {subtitle}
                  </div>
                  <div className="text-[10px] text-white/40 mt-0.5 font-medium">
                    {progress}/9 {t.topics}
                  </div>
                </div>

                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: g.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(progress / 9) * 100}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
