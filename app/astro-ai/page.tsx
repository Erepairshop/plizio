"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { loadAIK5Progress } from "@/lib/astroAI5";
import { loadAIK6Progress } from "@/lib/astroAI6";
import { loadAIK7Progress } from "@/lib/astroAI7";
import { loadAIK8Progress } from "@/lib/astroAI8";

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

function PlanetAI({ size = 52, color1, color2 }: { size?: number, color1: string, color2: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill={color1} opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill={`url(#aiGrad${color1.replace('#','')})`} />
      <path d="M 30 50 Q 50 30 70 50 Q 50 70 30 50" fill="white" opacity="0.3" />
      <circle cx="50" cy="50" r="8" fill="white" opacity="0.8" />
      <defs>
        <radialGradient id={`aiGrad${color1.replace('#','')}`} cx="35%" cy="35%">
          <stop offset="0%" stopColor={color2} />
          <stop offset="100%" stopColor={color1} />
        </radialGradient>
      </defs>
    </svg>
  );
}

const GRADES = [
  { grade: 5, Planet: () => <PlanetAI color1="#3B82F6" color2="#93C5FD" />, color: "#3B82F6", glow: "rgba(59,130,246,0.5)", emoji: "🤖", route: "/astro-ai/5" },
  { grade: 6, Planet: () => <PlanetAI color1="#10B981" color2="#6EE7B7" />, color: "#10B981", glow: "rgba(16,185,129,0.5)", emoji: "🧠", route: "/astro-ai/6" },
  { grade: 7, Planet: () => <PlanetAI color1="#F59E0B" color2="#FCD34D" />, color: "#F59E0B", glow: "rgba(245,158,11,0.5)", emoji: "💬", route: "/astro-ai/7" },
  { grade: 8, Planet: () => <PlanetAI color1="#EF4444" color2="#FCA5A5" />, color: "#EF4444", glow: "rgba(239,68,68,0.5)", emoji: "🚀", route: "/astro-ai/8" },
] as const;

const T = {
  en: { title: "AstroAI", subtitle: "Explore AI in Space!", grade: "Grade", topics: "islands" },
  hu: { title: "AstroAI", subtitle: "Fedezd fel az AI-t az űrben!", grade: "Osztály", topics: "sziget" },
  de: { title: "AstroKI", subtitle: "Entdecke KI im Weltraum!", grade: "Klasse", topics: "Inseln" },
  ro: { title: "AstroAI", subtitle: "Explorează AI în Spațiu!", grade: "Clasa", topics: "insule" },
} as const;

const SUBTITLES = {
  5: { en: "AI Basics", hu: "AI Alapok", de: "KI Grundlagen", ro: "Bazele AI" },
  6: { en: "Machine Learning", hu: "Gépi tanulás", de: "Maschinelles Lernen", ro: "Machine Learning" },
  7: { en: "Neural Networks", hu: "Neurális hálózatok", de: "Neuronale Netze", ro: "Rețele Neurale" },
  8: { en: "Future of AI", hu: "Az AI jövője", de: "Zukunft der KI", ro: "Viitorul AI" },
} as const;

export default function AstroAIPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [k5Done, setK5Done] = useState(0);
  const [k6Done, setK6Done] = useState(0);
  const [k7Done, setK7Done] = useState(0);
  const [k8Done, setK8Done] = useState(0);

  useEffect(() => {
    setK5Done(loadAIK5Progress().completedIslands.length);
    setK6Done(loadAIK6Progress().completedIslands.length);
    setK7Done(loadAIK7Progress().completedIslands.length);
    setK8Done(loadAIK8Progress().completedIslands.length);
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
          <h1 className="text-2xl font-black text-white tracking-wide">🤖 {t.title}</h1>
          <p className="text-[11px] text-white/45 font-medium uppercase tracking-widest mt-0.5">{t.subtitle}</p>
        </div>
        <div className="w-9" />
      </div>

      <div className="relative z-10 flex-1 px-4 pb-6 mt-2">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {GRADES.map((g) => {
            const progress = g.grade === 5 ? k5Done : g.grade === 6 ? k6Done : g.grade === 7 ? k7Done : k8Done;
            const sub = SUBTITLES[g.grade as keyof typeof SUBTITLES];
            const subtitle = sub[lang as keyof typeof sub] ?? sub.en;

            return (
              <motion.button
                key={g.grade}
                onClick={() => router.push(g.route)}
                className="relative rounded-3xl p-5 flex flex-col items-center gap-3 overflow-hidden"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${g.color}22 0%, rgba(255,255,255,0.04) 100%)`,
                  border: `1px solid ${g.color}33`,
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                  style={{ background: `radial-gradient(ellipse at 50% 50%, ${g.glow} 0%, transparent 70%)` }}
                />
                <div className="relative z-10">
                  <g.Planet />
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-lg font-black text-white">
                    {t.grade} {g.grade}
                  </div>
                  <div className="text-[10px] text-white/50 mt-0.5">{subtitle}</div>
                </div>
                <div className="relative z-10 flex items-center gap-1">
                  <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(progress / 9) * 100}%`, background: g.color }}
                    />
                  </div>
                  <span className="text-[9px] text-white/40">{progress}/9</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
