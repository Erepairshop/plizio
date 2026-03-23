"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { loadPhysikK5Progress } from "@/lib/astroPhysik5";
import { loadPhysikK6Progress } from "@/lib/astroPhysik6";
import { loadPhysikK7Progress } from "@/lib/astroPhysik7";
import { loadPhysikK8Progress } from "@/lib/astroPhysik8";

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
function PlanetK5({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#6B4CE6" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#gradK5)" />
      <circle cx="35" cy="35" r="8" fill="#8B6CE6" opacity="0.6" />
      <circle cx="65" cy="40" r="6" fill="#8B6CE6" opacity="0.5" />
      <path d="M 30 70 Q 50 75 70 70" stroke="#9B7CF6" strokeWidth="2" fill="none" opacity="0.5" />
      <defs>
        <radialGradient id="gradK5" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#8B7FE8" />
          <stop offset="100%" stopColor="#6B4CE6" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK6({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#3B82F6" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#gradK6)" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.6" />
      <circle cx="40" cy="35" r="5" fill="#60A5FA" opacity="0.7" />
      <circle cx="65" cy="50" r="4" fill="#60A5FA" opacity="0.6" />
      <defs>
        <radialGradient id="gradK6" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK7({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#10B981" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#gradK7)" />
      <path d="M 25 50 L 75 50" stroke="#34D399" strokeWidth="2" opacity="0.6" />
      <path d="M 50 25 L 50 75" stroke="#34D399" strokeWidth="2" opacity="0.6" />
      <circle cx="35" cy="35" r="4" fill="#34D399" opacity="0.6" />
      <circle cx="65" cy="65" r="4" fill="#34D399" opacity="0.6" />
      <defs>
        <radialGradient id="gradK7" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK8({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#EF4444" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#gradK8)" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="#FCA5A5" strokeWidth="2" opacity="0.6" />
      <circle cx="35" cy="35" r="6" fill="#FCA5A5" opacity="0.7" />
      <circle cx="65" cy="65" r="5" fill="#FCA5A5" opacity="0.6" />
      <path d="M 40 40 L 60 60" stroke="#FCA5A5" strokeWidth="1.5" opacity="0.5" />
      <defs>
        <radialGradient id="gradK8" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#EF4444" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// ─── Grade definitions ─────────────────────────────────────────────────────────
const GRADES = [
  {
    grade: 5,
    Planet: PlanetK5,
    color: "#6B4CE6",
    glow: "rgba(107, 76, 230, 0.5)",
    emoji: "⚛️",
    route: "/astro-physik/5",
    available: true,
  },
  {
    grade: 6,
    Planet: PlanetK6,
    color: "#3B82F6",
    glow: "rgba(59, 130, 246, 0.5)",
    emoji: "⚙️",
    route: "/astro-physik/6",
    available: true,
  },
  {
    grade: 7,
    Planet: PlanetK7,
    color: "#10B981",
    glow: "rgba(16, 185, 129, 0.5)",
    emoji: "🔬",
    route: "/astro-physik/7",
    available: true,
  },
  {
    grade: 8,
    Planet: PlanetK8,
    color: "#EF4444",
    glow: "rgba(239, 68, 68, 0.5)",
    emoji: "☢️",
    route: "/astro-physik/8",
    available: true,
  },
];

const T = {
  en: {
    title: "AstroPhysik",
    subtitle: "Explore Physics in Space!",
    grade: "Grade",
    comingSoon: "Coming soon",
    topics: "topics",
    k5_subtitle: "Forces & Energy",
    k6_subtitle: "Machines & Electricity",
    k7_subtitle: "Mechanics & Optics",
    k8_subtitle: "Nuclear & Modern",
  },
  hu: {
    title: "AstroPhysik",
    subtitle: "Fedezd fel a fizikát az űrben!",
    grade: "Osztály",
    comingSoon: "Hamarosan",
    topics: "téma",
    k5_subtitle: "Erők és energia",
    k6_subtitle: "Gépek és elektromosság",
    k7_subtitle: "Mechanika és optika",
    k8_subtitle: "Atom és modern",
  },
  de: {
    title: "AstroPhysik",
    subtitle: "Entdecke Physik im Weltraum!",
    grade: "Klasse",
    comingSoon: "Demnächst",
    topics: "Themen",
    k5_subtitle: "Kräfte & Energie",
    k6_subtitle: "Maschinen & Elektrizität",
    k7_subtitle: "Mechanik & Optik",
    k8_subtitle: "Atom & Moderne Physik",
  },
  ro: {
    title: "AstroPhysik",
    subtitle: "Explorează Fizica în Spațiu!",
    grade: "Clasa",
    comingSoon: "În curând",
    topics: "subiecte",
    k5_subtitle: "Forțe și energie",
    k6_subtitle: "Mașini și electricitate",
    k7_subtitle: "Mecanică și optică",
    k8_subtitle: "Nucleară și modernă",
  },
};

const SUBTITLES = {
  5: { en: "Forces & Energy", hu: "Erők és energia", de: "Kräfte & Energie", ro: "Forțe și energie" },
  6: { en: "Machines & Electricity", hu: "Gépek és elektromosság", de: "Maschinen & Elektrizität", ro: "Mașini și electricitate" },
  7: { en: "Mechanics & Optics", hu: "Mechanika és optika", de: "Mechanik & Optik", ro: "Mecanică și optică" },
  8: { en: "Nuclear & Modern", hu: "Atom és modern", de: "Atom & Moderne Physik", ro: "Nucleară și modernă" },
};

export default function AstroPhysikGalaxyPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [k5Done, setK5Done] = useState(0);
  const [k6Done, setK6Done] = useState(0);
  const [k7Done, setK7Done] = useState(0);
  const [k8Done, setK8Done] = useState(0);

  useEffect(() => {
    const p5 = loadPhysikK5Progress();
    const p6 = loadPhysikK6Progress();
    const p7 = loadPhysikK7Progress();
    const p8 = loadPhysikK8Progress();
    setK5Done(p5.completedIslands.length);
    setK6Done(p6.completedIslands.length);
    setK7Done(p7.completedIslands.length);
    setK8Done(p8.completedIslands.length);
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
              g.grade === 5 ? k5Done : g.grade === 6 ? k6Done : g.grade === 7 ? k7Done : k8Done;
            const total = 9; // 9 islands per grade
            const subtitle = SUBTITLES[g.grade as keyof typeof SUBTITLES][lang as keyof typeof SUBTITLES[5]] || SUBTITLES[g.grade as keyof typeof SUBTITLES].en;
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
                      {g.emoji} {subtitle}
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
