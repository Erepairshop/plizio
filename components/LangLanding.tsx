"use client";

import { useEffect } from "react";
import Link from "next/link";
import { saveLanguage } from "@/lib/language";

type Lang = "de" | "hu" | "ro" | "en";
type Pillar = { icon: string; title: string; desc: string; href: string };
type Content = { title: string; intro: string; pillars: Pillar[]; cta: string };

const CONTENT: Record<Lang, Content> = {
  de: {
    title: "Plizio: Kostenlos Lernen für Kinder",
    intro:
      "Plizio ist eine kostenlose Lernplattform für Kinder. Übe mit echten Schultests, vertiefe dein Wissen mit interaktiven Lernspielen und entdecke die Welt auf erkundbaren Karten. Mathe, Naturwissenschaften, Geschichte, Geografie und Sprachen, in vier Sprachen und ohne Anmeldung.",
    pillars: [
      { icon: "📝", title: "Schultests", desc: "Übungstests im klassischen Schulformat für jede Klassenstufe.", href: "/deutschtest/" },
      { icon: "🚀", title: "Lernspiele", desc: "Interaktive Astro-Spiele, die Schulthemen spielerisch üben.", href: "/astromath/" },
      { icon: "🗺️", title: "Karten entdecken", desc: "Interaktive Karten von Städten, Sehenswürdigkeiten und Ländern.", href: "/de/deutschland/" },
    ],
    cta: "Zur App",
  },
  hu: {
    title: "Plizio: Ingyenes tanulás gyerekeknek",
    intro:
      "A Plizio egy ingyenes tanulóplatform gyerekeknek. Gyakorolj igazi iskolai tesztekkel, mélyítsd a tudásod interaktív tanulójátékokkal, és fedezd fel a világot felfedezhető térképeken. Matek, természettudomány, történelem, földrajz és nyelvek, négy nyelven, regisztráció nélkül.",
    pillars: [
      { icon: "📝", title: "Iskolai tesztek", desc: "Gyakorló tesztek klasszikus iskolai formátumban, minden évfolyamra.", href: "/deutschtest/" },
      { icon: "🚀", title: "Tanulójátékok", desc: "Interaktív astro-játékok, amelyek játékosan gyakoroltatják a tananyagot.", href: "/astromath/" },
      { icon: "🗺️", title: "Térképek felfedezése", desc: "Interaktív térképek városokról, látnivalókról és országokról.", href: "/hu/magyarorszag/" },
    ],
    cta: "Az apphoz",
  },
  ro: {
    title: "Plizio: Învățare gratuită pentru copii",
    intro:
      "Plizio este o platformă gratuită de învățare pentru copii. Exersează cu teste școlare reale, aprofundează cunoștințele cu jocuri interactive și descoperă lumea pe hărți explorabile. Matematică, științe, istorie, geografie și limbi, în patru limbi și fără cont.",
    pillars: [
      { icon: "📝", title: "Teste școlare", desc: "Teste de exersare în format școlar clasic, pentru fiecare clasă.", href: "/deutschtest/" },
      { icon: "🚀", title: "Jocuri educative", desc: "Jocuri astro interactive care exersează materiile în mod jucăuș.", href: "/astromath/" },
      { icon: "🗺️", title: "Explorează hărți", desc: "Hărți interactive ale orașelor, obiectivelor și țărilor.", href: "/ro/romania/" },
    ],
    cta: "La aplicație",
  },
  en: {
    title: "Plizio: Free Learning for Kids",
    intro:
      "Plizio is a free learning platform for kids. Practice with real school tests, deepen your knowledge with interactive learning games, and explore the world on explorable maps. Math, science, history, geography and languages, in four languages and with no sign-up.",
    pillars: [
      { icon: "📝", title: "School tests", desc: "Practice tests in a classic school format for every grade.", href: "/deutschtest/" },
      { icon: "🚀", title: "Learning games", desc: "Interactive astro games that practice school topics playfully.", href: "/astromath/" },
      { icon: "🗺️", title: "Explore maps", desc: "Interactive maps of cities, landmarks and countries.", href: "/en/germany/" },
    ],
    cta: "Open the app",
  },
};

export default function LangLanding({ lang }: { lang: Lang }) {
  useEffect(() => {
    saveLanguage(lang);
  }, [lang]);
  const c = CONTENT[lang];
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh", padding: "3rem 1.25rem" }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo_plizio.webp" alt="Plizio" width={180} height={123} style={{ height: "auto", width: 180, margin: "0 auto 1rem", display: "block" }} />
          <h1 style={{ fontSize: "2.1rem", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>{c.title}</h1>
          <p style={{ color: "#c8cdd6", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: 720, margin: "0 auto" }}>{c.intro}</p>
        </header>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginBottom: "2.25rem" }}>
          {c.pillars.map((p) => (
            <Link key={p.href} href={p.href} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ background: "#161b2e", border: "1px solid #232a44", borderRadius: 16, padding: "1.25rem 1.35rem", height: "100%" }}>
                <div style={{ fontSize: "1.7rem", marginBottom: ".5rem" }} aria-hidden="true">{p.icon}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, margin: "0 0 .4rem" }}>{p.title}</h2>
                <p style={{ color: "#9aa3b2", fontSize: ".95rem", lineHeight: 1.5, margin: 0 }}>{p.desc}</p>
              </div>
            </Link>
          ))}
        </section>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex", padding: "0.9rem 1.6rem", borderRadius: 14, color: "#0A0A1A",
              background: "linear-gradient(135deg, #00D4FF, #B44DFF)", fontWeight: 800, textDecoration: "none", fontSize: "1.05rem",
            }}
          >
            {c.cta}
          </Link>
        </div>
      </div>
    </main>
  );
}
