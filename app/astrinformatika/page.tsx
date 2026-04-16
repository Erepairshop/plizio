"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { loadInfoK5Progress } from "@/lib/astroInformatika5";
import { loadInfoK6Progress } from "@/lib/astroInformatika6";
import { loadInfoK7Progress } from "@/lib/astroInformatika7";
import { loadInfoK8Progress } from "@/lib/astroInformatika8";

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
      <circle cx="50" cy="50" r="48" fill="#3B82F6" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#infoGrad5)" />
      <rect x="30" y="38" width="40" height="28" rx="4" fill="#BFDBFE" opacity="0.6" />
      <rect x="36" y="43" width="28" height="4" rx="2" fill="#2563EB" opacity="0.7" />
      <rect x="36" y="51" width="18" height="4" rx="2" fill="#2563EB" opacity="0.5" />
      <defs>
        <radialGradient id="infoGrad5" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#3B82F6" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK6({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#8B5CF6" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#infoGrad6)" />
      <circle cx="50" cy="50" r="18" fill="none" stroke="#C4B5FD" strokeWidth="2" opacity="0.7" />
      <circle cx="50" cy="50" r="10" fill="#DDD6FE" opacity="0.6" />
      <path d="M 36 28 Q 50 20 64 28" stroke="#A78BFA" strokeWidth="2" fill="none" opacity="0.6" />
      <defs>
        <radialGradient id="infoGrad6" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK7({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#F59E0B" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#infoGrad7)" />
      <text x="50" y="57" textAnchor="middle" fontSize="28" fill="#FEF3C7" opacity="0.8">&gt;_</text>
      <defs>
        <radialGradient id="infoGrad7" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PlanetK8({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#EF4444" opacity="0.9" />
      <circle cx="50" cy="50" r="45" fill="url(#infoGrad8)" />
      <path d="M 32 50 L 44 38 L 56 50 L 68 38" stroke="#FECACA" strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M 32 62 L 44 50 L 56 62 L 68 50" stroke="#FCA5A5" strokeWidth="3" fill="none" opacity="0.5" />
      <defs>
        <radialGradient id="infoGrad8" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#EF4444" />
        </radialGradient>
      </defs>
    </svg>
  );
}

const GRADES = [
  { grade: 5, Planet: PlanetK5, color: "#3B82F6", glow: "rgba(59,130,246,0.5)", emoji: "💻", route: "/astrinformatika/5" },
  { grade: 6, Planet: PlanetK6, color: "#8B5CF6", glow: "rgba(139,92,246,0.5)", emoji: "🌐", route: "/astrinformatika/6" },
  { grade: 7, Planet: PlanetK7, color: "#F59E0B", glow: "rgba(245,158,11,0.5)", emoji: "💡", route: "/astrinformatika/7" },
  { grade: 8, Planet: PlanetK8, color: "#EF4444", glow: "rgba(239,68,68,0.5)", emoji: "🤖", route: "/astrinformatika/8" },
] as const;

const T = {
  en: { title: "AstroInformatika", subtitle: "Explore Informatics in Space!", grade: "Grade", topics: "islands" },
  hu: { title: "AstroInformatika", subtitle: "Fedezd fel az informatikát az űrben!", grade: "Osztály", topics: "sziget" },
  de: { title: "AstroInformatika", subtitle: "Entdecke Informatik im Weltraum!", grade: "Klasse", topics: "Inseln" },
  ro: { title: "AstroInformatika", subtitle: "Explorează Informatica în Spațiu!", grade: "Clasa", topics: "insule" },
} as const;

const SUBTITLES = {
  5: { en: "Computer & Internet Basics", hu: "Számítógép & Internet", de: "Computer & Internet Grundlagen", ro: "Calculator & Internet" },
  6: { en: "Networks & Presentations", hu: "Hálózatok & Prezentáció", de: "Netzwerke & Präsentationen", ro: "Rețele & Prezentare" },
  7: { en: "Programming & Databases", hu: "Programozás & Adatbázis", de: "Programmierung & Datenbanken", ro: "Programare & Baze de date" },
  8: { en: "Networks & Cybersecurity", hu: "Hálózatok & Kiberbiztonság", de: "Netzwerke & Cybersicherheit", ro: "Rețele & Securitate" },
} as const;

export default function AstroInformatikaPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [k5Done, setK5Done] = useState(0);
  const [k6Done, setK6Done] = useState(0);
  const [k7Done, setK7Done] = useState(0);
  const [k8Done, setK8Done] = useState(0);

  useEffect(() => {
    setK5Done(loadInfoK5Progress().completedIslands.length);
    setK6Done(loadInfoK6Progress().completedIslands.length);
    setK7Done(loadInfoK7Progress().completedIslands.length);
    setK8Done(loadInfoK8Progress().completedIslands.length);
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
          <h1 className="text-2xl font-black text-white tracking-wide">💻 {t.title}</h1>
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
                  <g.Planet size={52} />
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
