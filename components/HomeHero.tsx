"use client";

import { useLang } from "@/components/LanguageProvider";

type Lang = "de" | "hu" | "ro" | "en";

const HERO = {
  de: {
    title: "Plizio — Lerne die Welt mit interaktiven Karten",
    subtitle: "Geographie, Geschichte und Wissen für Kinder (K1–K8) in 4 Sprachen. Entdecke über 5000 echte Orte auf interaktiven Karten.",
  },
  hu: {
    title: "Plizio — Fedezd fel a világot interaktív térképekkel",
    subtitle: "Földrajz, történelem és tudás gyerekeknek (K1–K8), 4 nyelven. Több mint 5000 valódi hely az interaktív térképeken.",
  },
  ro: {
    title: "Plizio — Descoperă lumea cu hărți interactive",
    subtitle: "Geografie, istorie și cunoștințe pentru copii (K1–K8), în 4 limbi. Peste 5000 de locuri reale pe hărți interactive.",
  },
  en: {
    title: "Plizio — Explore the world with interactive maps",
    subtitle: "Geography, history, and knowledge for kids (K1–K8) in 4 languages. Over 5,000 real places on interactive maps.",
  },
};

export default function HomeHero() {
  const { lang } = useLang();
  const l = (lang as Lang) ?? "hu";
  const t = HERO[l];
  return (
    <section className="relative w-full">
      <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">{t.title}</h1>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mb-4">{t.subtitle}</p>
      </div>
    </section>
  );
}
