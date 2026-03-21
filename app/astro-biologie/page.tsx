"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { loadBioK5Progress } from "@/lib/astroBiologie5";
import { loadBioK6Progress } from "@/lib/astroBiologie6";
import { loadBioK7Progress } from "@/lib/astroBiologie7";
import { loadBioK8Progress } from "@/lib/astroBiologie8";

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

// ─── Planet SVG components ─────────────────────────────────────────────────────
function PlanetK5({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#4CAF50" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#gradBio5)" />
      {/* Leaf-like shapes */}
      <ellipse cx="35" cy="35" rx="8" ry="12" fill="#81C784" opacity="0.6" transform="rotate(-30 35 35)" />
      <ellipse cx="65" cy="40" rx="6" ry="10" fill="#81C784" opacity="0.5" transform="rotate(20 65 40)" />
      <circle cx="50" cy="65" r="5" fill="#A5D6A7" opacity="0.5" />
      <defs>
        <radialGradient id="gradBio5" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#81C784" />
          <stop offset="100%" stopColor="#4CAF50" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK6({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#2ECC71" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#gradBio6)" />
      {/* Wave-like ecosystem lines */}
      <path d="M 20 55 Q 35 45 50 55 Q 65 65 80 55" stroke="#A9DFBF" strokeWidth="2.5" fill="none" opacity="0.6" />
      <path d="M 25 40 Q 40 32 55 40 Q 70 48 85 40" stroke="#A9DFBF" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="42" cy="38" r="5" fill="#52E899" opacity="0.5" />
      <defs>
        <radialGradient id="gradBio6" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#58D68D" />
          <stop offset="100%" stopColor="#2ECC71" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK7({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#3498DB" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#gradBio7)" />
      {/* Cell-like circles */}
      <circle cx="50" cy="50" r="16" fill="none" stroke="#85C1E9" strokeWidth="2" opacity="0.6" />
      <circle cx="50" cy="50" r="7" fill="#85C1E9" opacity="0.5" />
      <circle cx="30" cy="35" r="6" fill="none" stroke="#85C1E9" strokeWidth="1.5" opacity="0.4" />
      <circle cx="70" cy="38" r="5" fill="none" stroke="#85C1E9" strokeWidth="1.5" opacity="0.4" />
      <defs>
        <radialGradient id="gradBio7" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#5DADE2" />
          <stop offset="100%" stopColor="#3498DB" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK8({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#9B59B6" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#gradBio8)" />
      {/* DNA helix suggestion */}
      <path d="M 40 25 Q 55 35 40 45 Q 55 55 40 65 Q 55 75 40 85" stroke="#D2B4DE" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M 60 25 Q 45 35 60 45 Q 45 55 60 65 Q 45 75 60 85" stroke="#D2B4DE" strokeWidth="2" fill="none" opacity="0.6" />
      <line x1="40" y1="35" x2="60" y2="35" stroke="#D2B4DE" strokeWidth="1.5" opacity="0.5" />
      <line x1="40" y1="55" x2="60" y2="55" stroke="#D2B4DE" strokeWidth="1.5" opacity="0.5" />
      <line x1="40" y1="75" x2="60" y2="75" stroke="#D2B4DE" strokeWidth="1.5" opacity="0.5" />
      <defs>
        <radialGradient id="gradBio8" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#BB8FCE" />
          <stop offset="100%" stopColor="#9B59B6" />
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
    color: "#4CAF50",
    glow: "rgba(76, 175, 80, 0.5)",
    subtitle: { en: "Vertebrates & Plants", hu: "Gerincesek & Növények", de: "Wirbeltiere & Pflanzen", ro: "Vertebrate & Plante" },
    route: "/astro-biologie/5",
    available: true,
  },
  {
    grade: 6,
    Planet: PlanetK6,
    color: "#2ECC71",
    glow: "rgba(46, 204, 113, 0.5)",
    subtitle: { en: "Ecosystem & Body", hu: "Ökoszisztéma & Test", de: "Ökosystem & Körper", ro: "Ecosistem & Corp" },
    route: "/astro-biologie/6",
    available: true,
  },
  {
    grade: 7,
    Planet: PlanetK7,
    color: "#3498DB",
    glow: "rgba(52, 152, 219, 0.5)",
    subtitle: { en: "Cells & Ecology", hu: "Sejtek & Ökológia", de: "Zellen & Ökologie", ro: "Celule & Ecologie" },
    route: "/astro-biologie/7",
    available: true,
  },
  {
    grade: 8,
    Planet: PlanetK8,
    color: "#9B59B6",
    glow: "rgba(155, 89, 182, 0.5)",
    subtitle: { en: "Genetics & Biotech", hu: "Genetika & Biotechnika", de: "Genetik & Biotechnologie", ro: "Genetică & Biotehnologie" },
    route: "/astro-biologie/8",
    available: true,
  },
];

const T = {
  en: {
    title: "AstroBiologie",
    subtitle: "Explore Biology in Space!",
    grade: "Grade",
    comingSoon: "Coming soon",
    topics: "islands",
  },
  hu: {
    title: "AstroBiológia",
    subtitle: "Fedezd fel a biológiát az űrben!",
    grade: "Osztály",
    comingSoon: "Hamarosan",
    topics: "sziget",
  },
  de: {
    title: "AstroBiologie",
    subtitle: "Entdecke Biologie im Weltraum!",
    grade: "Klasse",
    comingSoon: "Demnächst",
    topics: "Inseln",
  },
  ro: {
    title: "AstroBiologie",
    subtitle: "Explorează Biologia în Spațiu!",
    grade: "Clasa",
    comingSoon: "În curând",
    topics: "insule",
  },
};

export default function AstroBiologieGalaxyPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [k5Done, setK5Done] = useState(0);
  const [k6Done, setK6Done] = useState(0);
  const [k7Done, setK7Done] = useState(0);
  const [k8Done, setK8Done] = useState(0);

  useEffect(() => {
    const p5 = loadBioK5Progress();
    const p6 = loadBioK6Progress();
    const p7 = loadBioK7Progress();
    const p8 = loadBioK8Progress();
    setK5Done(p5.completedIslands.length);
    setK6Done(p6.completedIslands.length);
    setK7Done(p7.completedIslands.length);
    setK8Done(p8.completedIslands.length);
  }, []);

  return (
    <div className="min-h-screen bg-[#060F06] flex flex-col relative overflow-hidden">
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
          <h1 className="text-2xl font-black text-white tracking-wide">🧬 {t.title}</h1>
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
            const total = 9;
            const sub = g.subtitle[lang as keyof typeof g.subtitle] ?? g.subtitle.en;
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
                    <div className="text-[9px] font-bold mt-0.5 leading-tight" style={{ color: g.color + "99" }}>
                      {sub}
                    </div>
                  )}
                  {g.available ? (
                    <div className="text-[10px] text-white/40 mt-1 font-medium">
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
