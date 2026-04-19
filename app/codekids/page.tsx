"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { loadInfoK1Progress } from "@/lib/astroInformatika1";
import { loadInfoK2Progress } from "@/lib/astroInformatika2";
import { loadInfoK3Progress } from "@/lib/astroInformatika3";
import { loadInfoK4Progress } from "@/lib/astroInformatika4";

const BUBBLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: (i * 47 + 13) % 100,
  y: (i * 61 + 7) % 100,
  size: (i % 3) * 20 + 20,
  dur: 4 + (i % 5) * 2,
  delay: (i % 7) * 1,
}));

function BubbleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {BUBBLES.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full bg-white opacity-20"
          style={{ left: `${b.x}%`, top: `${b.y}%`, width: b.size, height: b.size }}
          animate={{ y: ["0%", "-100%", "0%"] }}
          transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

const GRADES = [
  { grade: 1, color: "#60A5FA", glow: "#DBEAFE", emoji: "🧑‍💻", route: "/codekids/1", label: { en: "Basics", hu: "Alapok", de: "Grundlagen", ro: "Baze" } },
  { grade: 2, color: "#A78BFA", glow: "#EDE9FE", emoji: "🎮", route: "/codekids/2", label: { en: "Games", hu: "Játékok", de: "Spiele", ro: "Jocuri" } },
  { grade: 3, color: "#F472B6", glow: "#FCE7F3", emoji: "💡", route: "/codekids/3", label: { en: "Logic", hu: "Logika", de: "Logik", ro: "Logică" } },
  { grade: 4, color: "#FBBF24", glow: "#FEF3C7", emoji: "🚀", route: "/codekids/4", label: { en: "Coding", hu: "Kódolás", de: "Programmieren", ro: "Codare" } },
] as const;

const T = {
  en: { title: "Code Kids", subtitle: "Fun with Computers!", grade: "Grade" },
  hu: { title: "Code Kids", subtitle: "Játékos informatika!", grade: "Osztály" },
  de: { title: "Code Kids", subtitle: "Spaß mit Computern!", grade: "Klasse" },
  ro: { title: "Code Kids", subtitle: "Distracție cu calculatoare!", grade: "Clasa" },
} as const;

export default function CodeKidsPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [k1Done, setK1Done] = useState(0);
  const [k2Done, setK2Done] = useState(0);
  const [k3Done, setK3Done] = useState(0);
  const [k4Done, setK4Done] = useState(0);

  useEffect(() => {
    setK1Done(loadInfoK1Progress().completedIslands.length);
    setK2Done(loadInfoK2Progress().completedIslands.length);
    setK3Done(loadInfoK3Progress().completedIslands.length);
    setK4Done(loadInfoK4Progress().completedIslands.length);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0FDF4] flex flex-col relative overflow-hidden">
      <BubbleBackground />

      <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-3">
        <button
          onClick={() => router.push("/")}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <Home size={24} />
        </button>
        <div className="text-center">
          <h1 className="text-3xl font-black text-gray-800 tracking-wide">🧑‍💻 {t.title}</h1>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">{t.subtitle}</p>
        </div>
        <div className="w-12" />
      </div>

      <div className="relative z-10 flex-1 px-4 pb-6 mt-6">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {GRADES.map((g) => {
            const progress = g.grade === 1 ? k1Done : g.grade === 2 ? k2Done : g.grade === 3 ? k3Done : k4Done;
            const subtitle = g.label[lang as keyof typeof g.label] ?? g.label.en;

            return (
              <motion.button
                key={g.grade}
                onClick={() => router.push(g.route)}
                className="relative rounded-3xl p-6 flex flex-col items-center gap-4 overflow-hidden bg-white shadow-lg border-2"
                style={{ borderColor: g.color }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: g.glow }}
                />
                <div className="relative z-10 text-6xl">
                  {g.emoji}
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-xl font-black" style={{ color: g.color }}>
                    {t.grade} {g.grade}
                  </div>
                  <div className="text-xs font-bold text-gray-500 mt-1">{subtitle}</div>
                </div>
                <div className="relative z-10 flex items-center gap-2 w-full mt-2">
                  <div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(progress / 9) * 100}%`, background: g.color }}
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-500">{progress}/9</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
