"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Lock } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { loadG1Progress } from "@/lib/astromath";
import { loadG2Progress } from "@/lib/astromath2";
import { loadG4Progress } from "@/lib/astromath4";

// ─── Starfield ─────────────────────────────────────────────────────────────────
const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i, x: (i * 37 + 13) % 100, y: (i * 53 + 7) % 100,
  size: (i % 3) * 0.7 + 0.5, dur: 2 + (i % 5) * 0.6, delay: (i % 7) * 0.4,
}));
function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STARS.map((s) => (
        <motion.div key={s.id} className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.1, 0.9, 0.1] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

// ─── Grade definitions ─────────────────────────────────────────────────────────
const GRADES = [
  { grade: 1, icon: "🌍", color: "#4ECDC4", glow: "rgba(78,205,196,0.5)",  route: "/astromath/1", available: true  },
  { grade: 2, icon: "🔵", color: "#00D4FF", glow: "rgba(0,212,255,0.4)",   route: "/astromath/2", available: true  },
  { grade: 3, icon: "🔴", color: "#FF6B6B", glow: "rgba(255,107,107,0.4)", route: null,           available: false },
  { grade: 4, icon: "🟡", color: "#FFD700", glow: "rgba(255,215,0,0.4)",   route: "/astromath/4", available: true  },
  { grade: 5, icon: "🟣", color: "#B44DFF", glow: "rgba(180,77,255,0.4)",  route: null,           available: false },
  { grade: 6, icon: "🟠", color: "#FF9500", glow: "rgba(255,149,0,0.4)",   route: null,           available: false },
  { grade: 7, icon: "🟢", color: "#10B981", glow: "rgba(16,185,129,0.4)",  route: null,           available: false },
  { grade: 8, icon: "⭐", color: "#E879F9", glow: "rgba(232,121,249,0.4)", route: null,           available: false },
];

const T = {
  en: { title: "AstroMath", subtitle: "Choose your grade", grade: "Grade", comingSoon: "Coming soon", islands: "islands" },
  hu: { title: "AstroMath", subtitle: "Válaszd ki az osztályodat", grade: "osztály", comingSoon: "Hamarosan", islands: "sziget" },
  de: { title: "AstroMath", subtitle: "Wähle deine Klasse", grade: "Klasse", comingSoon: "Demnächst", islands: "Inseln" },
  ro: { title: "AstroMath", subtitle: "Alege clasa ta", grade: "Clasa", comingSoon: "În curând", islands: "insule" },
};

export default function AstroMathGalaxyPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;
  const [g1Done, setG1Done] = useState(0);
  const [g2Done, setG2Done] = useState(0);
  const [g4Done, setG4Done] = useState(0);

  useEffect(() => {
    const p1 = loadG1Progress();
    const p2 = loadG2Progress();
    const p4 = loadG4Progress();
    setG1Done(p1.completedIslands.length);
    setG2Done(p2.completedIslands.length);
    setG4Done(p4.completedIslands.length);
  }, []);

  return (
    <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
      <Starfield />
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-3">
        <button onClick={() => router.push("/")}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
          <Home size={16} />
        </button>
        <div className="text-center">
          <h1 className="text-2xl font-black text-white tracking-wide">🚀 {t.title}</h1>
          <p className="text-[11px] text-white/45 font-medium uppercase tracking-widest mt-0.5">{t.subtitle}</p>
        </div>
        <div className="w-9" />
      </div>
      {/* Grade grid */}
      <div className="relative z-10 flex-1 px-4 pb-6 mt-2">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {GRADES.map((g) => {
            const progress = g.grade === 1 ? g1Done : g.grade === 2 ? g2Done : g.grade === 4 ? g4Done : 0;
            const total = 9;
            return (
              <motion.button key={g.grade}
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
                whileTap={g.available ? { scale: 0.96 } : {}}>
                <motion.div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                  style={{
                    background: g.available ? `radial-gradient(circle, ${g.color}33, transparent)` : "rgba(255,255,255,0.05)",
                    boxShadow: g.available ? `0 0 20px ${g.glow}` : "none",
                  }}
                  animate={g.available ? { boxShadow: [`0 0 15px ${g.glow}`, `0 0 30px ${g.glow}`, `0 0 15px ${g.glow}`] } : {}}
                  transition={{ duration: 2.5, repeat: Infinity }}>
                  {g.available ? g.icon : <Lock size={20} className="text-white/25" />}
                </motion.div>
                <div className="text-center">
                  <div className="font-black text-sm" style={{ color: g.available ? g.color : "rgba(255,255,255,0.25)" }}>
                    {t.grade} {g.grade}
                  </div>
                  {g.available ? (
                    <div className="text-[10px] text-white/40 mt-0.5 font-medium">{progress}/{total} {t.islands}</div>
                  ) : (
                    <div className="text-[10px] text-white/25 mt-0.5">{t.comingSoon}</div>
                  )}
                </div>
                {g.available && (
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full" style={{ background: g.color }}
                      initial={{ width: 0 }} animate={{ width: `${(progress / total) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }} />
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
