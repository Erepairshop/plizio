"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, FlaskConical, Atom, Beaker, Orbit } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { loadKemiaK5Progress } from "@/lib/astroKemia5";
import { loadKemiaK6Progress } from "@/lib/astroKemia6";
import { loadKemiaK7Progress } from "@/lib/astroKemia7";
import { loadKemiaK8Progress } from "@/lib/astroKemia8";

const UI = {
  en: {
    title: "AstroKemia",
    subtitle: "Chemistry islands from matter to molecules.",
    grade: "Grade",
    islands: "islands complete",
    k5: "Matter & Particles",
    k6: "Atoms & Separation",
    k7: "Reactions & Bonds",
    k8: "Organic & Energy",
  },
  hu: {
    title: "AstroKemia",
    subtitle: "Kémiai szigetek az anyagoktól a molekulákig.",
    grade: "Osztály",
    islands: "kész sziget",
    k5: "Anyagok és részecskék",
    k6: "Atomok és szétválasztás",
    k7: "Reakciók és kötések",
    k8: "Organikus és energia",
  },
  de: {
    title: "AstroKemia",
    subtitle: "Chemie-Inseln von Stoffen bis Molekülen.",
    grade: "Klasse",
    islands: "Inseln geschafft",
    k5: "Stoffe & Teilchen",
    k6: "Atome & Trennmethoden",
    k7: "Reaktionen & Bindungen",
    k8: "Organik & Energie",
  },
  ro: {
    title: "AstroKemia",
    subtitle: "Insule de chimie de la substanțe la molecule.",
    grade: "Clasa",
    islands: "insule finalizate",
    k5: "Substanțe și particule",
    k6: "Atomi și separare",
    k7: "Reacții și legături",
    k8: "Organic și energie",
  },
} as const;

const GRADES = [
  { grade: 5, route: "/astrokemia/5", color: "#10B981", icon: FlaskConical },
  { grade: 6, route: "/astrokemia/6", color: "#3B82F6", icon: Atom },
  { grade: 7, route: "/astrokemia/7", color: "#8B5CF6", icon: Beaker },
  { grade: 8, route: "/astrokemia/8", color: "#F97316", icon: Orbit },
] as const;

const STARS = Array.from({ length: 56 }, (_, i) => ({
  id: i,
  x: (i * 29 + 11) % 100,
  y: (i * 47 + 19) % 100,
  size: (i % 3) + 1,
  delay: (i % 8) * 0.35,
  duration: 2.5 + (i % 4) * 0.7,
}));

export default function AstroKemiaPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = UI[(lang as keyof typeof UI) ?? "en"] ?? UI.en;

  const [progress, setProgress] = useState({ 5: 0, 6: 0, 7: 0, 8: 0 });

  useEffect(() => {
    setProgress({
      5: loadKemiaK5Progress().completedIslands.length,
      6: loadKemiaK6Progress().completedIslands.length,
      7: loadKemiaK7Progress().completedIslands.length,
      8: loadKemiaK8Progress().completedIslands.length,
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050b0a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />
      <div className="absolute inset-0">
        {STARS.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size }}
            animate={{ opacity: [0.1, 0.9, 0.1] }}
            transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-10 pt-5">
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:bg-white/10"
          >
            <Home size={16} />
          </button>
          <div className="text-center">
            <h1 className="text-3xl font-black tracking-tight text-white">⚗️ {t.title}</h1>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/45">{t.subtitle}</p>
          </div>
          <div className="w-10" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {GRADES.map((entry, index) => {
            const Icon = entry.icon;
            const subtitleKey = `k${entry.grade}` as const;

            return (
              <motion.button
                key={entry.grade}
                onClick={() => router.push(entry.route)}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 text-left shadow-[0_30px_80px_rgba(0,0,0,0.24)] transition hover:bg-white/[0.06]"
              >
                <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at top right, ${entry.color}33, transparent 45%)` }} />
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: `${entry.color}22`, color: entry.color }}>
                    <Icon size={28} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                    {t.grade} {entry.grade}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">{t[subtitleKey]}</h2>
                  <p className="mt-4 text-sm text-white/60">
                    {progress[entry.grade]}/9 {t.islands}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
