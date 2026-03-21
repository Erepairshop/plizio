"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { loadSKG2Progress } from "@/lib/astroSachkunde2";

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

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "AstroSachkunde",
    subtitle: "Grade 2 – Explore Science in Space!",
    grade: "Grade",
    comingSoon: "Coming soon",
    back: "Back",
    description: "Ernährung, Lebensräume, Pflanzen, Wasser, Berufe und Sicherheit",
  },
  hu: {
    title: "AstroSachkunde",
    subtitle: "2. osztály – Fedezd fel a természetet az űrben!",
    grade: "Osztály",
    comingSoon: "Hamarosan",
    back: "Vissza",
    description: "Táplálkozás, élőhelyek, növények, víz, szakmák és biztonság",
  },
  de: {
    title: "AstroSachkunde",
    subtitle: "Klasse 2 – Entdecke Sachkunde im Weltraum!",
    grade: "Klasse",
    comingSoon: "Demnächst",
    back: "Zurück",
    description: "Ernährung, Lebensräume, Pflanzen, Wasser, Berufe und Sicherheit",
  },
  ro: {
    title: "AstroSachkunde",
    subtitle: "Clasa 2 – Explorează Științele în Spațiu!",
    grade: "Clasa",
    comingSoon: "În curând",
    back: "Înapoi",
    description: "Nutriție, habitate, plante, apă, profesii și siguranță",
  },
};

export default function AstroSachkundeG2Page() {
  const { lang } = useLang();
  const router = useRouter();
  const t = LABELS[lang as keyof typeof LABELS] ?? LABELS.en;

  const [g2Done, setG2Done] = useState(0);

  useEffect(() => {
    const p2 = loadSKG2Progress();
    setG2Done(p2.completedIslands.length);
  }, []);

  return (
    <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
      <Starfield />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-3">
        <button
          onClick={() => router.push("/astro-sachkunde")}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
        >
          <Home size={16} />
        </button>
        <div className="text-center flex-1">
          <h1 className="text-2xl font-black text-white tracking-wide">🌊 {t.title}</h1>
          <p className="text-[11px] text-white/45 font-medium uppercase tracking-widest mt-0.5">
            {t.subtitle}
          </p>
          <p className="text-xs text-white/40 mt-1">{t.description}</p>
        </div>
        <div className="w-9" />
      </div>

      {/* Placeholder content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 pb-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-xl font-bold text-white mb-2">Grade 2 Coming Soon</h2>
          <p className="text-white/60 mb-4">Progress: {g2Done}/9 islands</p>
          <button
            onClick={() => router.push("/astro-sachkunde")}
            className="px-6 py-2 rounded-lg bg-[#4ECDC4] text-white font-bold hover:opacity-90 transition-opacity"
          >
            Back to Hub
          </button>
        </motion.div>
      </div>
    </div>
  );
}
