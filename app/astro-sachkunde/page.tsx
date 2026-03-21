"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { loadSKG1Progress } from "@/lib/astroSachkunde1";
import { loadSKG2Progress } from "@/lib/astroSachkunde2";
import { loadSKG3Progress } from "@/lib/astroSachkunde3";
import { loadSKG4Progress } from "@/lib/astroSachkunde4";

// ─── Starfield ─────────────────────────────────────────────────────────────────
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

// ─── Planet SVG inline components ──────────────────────────────────────────────
function PlanetG1({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#FF6B9D" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
      <circle cx="35" cy="35" r="8" fill="#FFB6D9" opacity="0.6" />
      <circle cx="65" cy="40" r="6" fill="#FFB6D9" opacity="0.5" />
      <defs>
        <radialGradient id="grad1" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FF8FBF" />
          <stop offset="100%" stopColor="#FF6B9D" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetG2({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#4ECDC4" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#grad2)" />
      <path d="M 30 60 Q 50 70 70 60" stroke="#7FFFF5" strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="40" cy="40" r="5" fill="#7FFFF5" opacity="0.5" />
      <circle cx="70" cy="45" r="4" fill="#7FFFF5" opacity="0.4" />
      <defs>
        <radialGradient id="grad2" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#7FFFF5" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetG3({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#95E1D3" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#grad3)" />
      <circle cx="35" cy="30" r="6" fill="#7FD9C4" opacity="0.6" />
      <circle cx="65" cy="35" r="5" fill="#7FD9C4" opacity="0.5" />
      <path d="M 30 50 L 70 50" stroke="#7FD9C4" strokeWidth="1.5" opacity="0.4" />
      <defs>
        <radialGradient id="grad3" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#B8F0E8" />
          <stop offset="100%" stopColor="#95E1D3" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetG4({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#F7DC6F" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#grad4)" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="#FFE680" strokeWidth="2" opacity="0.5" />
      <circle cx="40" cy="38" r="4" fill="#FFE680" opacity="0.7" />
      <circle cx="65" cy="50" r="3.5" fill="#FFE680" opacity="0.6" />
      <circle cx="50" cy="68" r="3" fill="#FFE680" opacity="0.5" />
      <defs>
        <radialGradient id="grad4" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#FFEB99" />
          <stop offset="100%" stopColor="#F7DC6F" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// ─── Grade definitions ─────────────────────────────────────────────────────────
const GRADES = [
  {
    grade: 1,
    Planet: PlanetG1,
    color: "#FF6B9D",
    glow: "rgba(255, 107, 157, 0.5)",
    emoji: "🌍",
    route: "/astro-sachkunde/1",
    available: true,
  },
  {
    grade: 2,
    Planet: PlanetG2,
    color: "#4ECDC4",
    glow: "rgba(78, 205, 196, 0.5)",
    emoji: "🌊",
    route: "/astro-sachkunde/2",
    available: true,
  },
  {
    grade: 3,
    Planet: PlanetG3,
    color: "#95E1D3",
    glow: "rgba(149, 225, 211, 0.5)",
    emoji: "🌲",
    route: "/astro-sachkunde/3",
    available: true,
  },
  {
    grade: 4,
    Planet: PlanetG4,
    color: "#F7DC6F",
    glow: "rgba(247, 220, 111, 0.5)",
    emoji: "⚡",
    route: "/astro-sachkunde/4",
    available: true,
  },
];

const T = {
  en: {
    title: "AstroSachkunde",
    subtitle: "Explore Science in Space!",
    grade: "Grade",
    comingSoon: "Coming soon",
    topics: "topics",
  },
  hu: {
    title: "AstroSachkunde",
    subtitle: "Fedezd fel a természetet az űrben!",
    grade: "Osztály",
    comingSoon: "Hamarosan",
    topics: "téma",
  },
  de: {
    title: "AstroSachkunde",
    subtitle: "Entdecke Sachkunde im Weltraum!",
    grade: "Klasse",
    comingSoon: "Demnächst",
    topics: "Themen",
  },
  ro: {
    title: "AstroSachkunde",
    subtitle: "Explorează Științele în Spațiu!",
    grade: "Clasa",
    comingSoon: "În curând",
    topics: "subiecte",
  },
};

export default function AstroSachkundeGalaxyPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [g1Done, setG1Done] = useState(0);
  const [g2Done, setG2Done] = useState(0);
  const [g3Done, setG3Done] = useState(0);
  const [g4Done, setG4Done] = useState(0);

  useEffect(() => {
    const p1 = loadSKG1Progress();
    const p2 = loadSKG2Progress();
    const p3 = loadSKG3Progress();
    const p4 = loadSKG4Progress();
    setG1Done(p1.completedTopics.length);
    setG2Done(p2.completedTopics.length);
    setG3Done(p3.completedTopics.length);
    setG4Done(p4.completedTopics.length);
  }, []);

  return (
    <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
      <Starfield />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-3">
        <button
          onClick={() => router.push("/")}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
        >
          <Home size={16} />
        </button>
        <div className="text-center">
          <h1 className="text-2xl font-black text-white tracking-wide">🚀 {t.title}</h1>
          <p className="text-[11px] text-white/45 font-medium uppercase tracking-widest mt-0.5">
            {t.subtitle}
          </p>
        </div>
        <div className="w-9" />
      </div>

      {/* Grade grid (2x2) */}
      <div className="relative z-10 flex-1 px-4 pb-6 mt-2">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {GRADES.map((g) => {
            const progress =
              g.grade === 1 ? g1Done : g.grade === 2 ? g2Done : g.grade === 3 ? g3Done : g4Done;
            const total = 6; // 6 topics per grade
            return (
              <motion.button
                key={g.grade}
                onClick={() => g.available && g.route && router.push(g.route)}
                disabled={!g.available}
                className="relative rounded-3xl p-5 flex flex-col items-center gap-3 overflow-hidden"
                style={{
                  background: g.available
                    ? `radial-gradient(ellipse at 50% 0%, ${g.color}22 0%, rgba(255,255,255,0.04) 100%)`
                    : "rgba(255,255,255,0.02)",
                  border: `1.5px solid ${g.available ? g.color + "55" : "rgba(255,255,255,0.06)"}`,
                  opacity: g.available ? 1 : 0.45,
                }}
                whileTap={g.available ? { scale: 0.96 } : {}}
              >
                {/* Planet */}
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center relative"
                  style={{
                    background: g.available
                      ? `radial-gradient(circle, ${g.color}22, transparent)`
                      : "rgba(255,255,255,0.04)",
                    boxShadow: g.available ? `0 0 20px ${g.glow}` : "none",
                  }}
                  animate={
                    g.available
                      ? {
                          boxShadow: [
                            `0 0 14px ${g.glow}`,
                            `0 0 28px ${g.glow}`,
                            `0 0 14px ${g.glow}`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  {g.available && <g.Planet size={52} />}
                </motion.div>

                {/* Labels */}
                <div className="text-center">
                  <div className="font-black text-sm" style={{ color: g.available ? g.color : "rgba(255,255,255,0.25)" }}>
                    {t.grade} {g.grade}
                  </div>
                  {g.available && (
                    <div className="text-[10px] font-bold mt-0.5" style={{ color: g.color + "99" }}>
                      {g.emoji} {lang === "en" ? "Science" : lang === "hu" ? "Tudomány" : lang === "de" ? "Sachkunde" : "Știință"}
                    </div>
                  )}
                  {g.available ? (
                    <div className="text-[10px] text-white/40 mt-0.5 font-medium">
                      {progress}/{total} {t.topics}
                    </div>
                  ) : (
                    <div className="text-[10px] text-white/25 mt-0.5">{t.comingSoon}</div>
                  )}
                </div>

                {/* Progress bar */}
                {g.available && (
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: g.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${(progress / total) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
