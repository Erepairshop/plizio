import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroAI: künstliche Intelligenz spielend lernen | Plizio",
    desc: "Lerne künstliche Intelligenz auf einer Weltraumreise: wie KI denkt, lernt und entscheidet, für die Klassen 5 bis 8. Kostenloses Lernspiel, ohne Anmeldung.",
  },
  hu: {
    title: "AstroAI: mesterséges intelligencia játékosan | Plizio",
    desc: "Tanuld meg a mesterséges intelligenciát egy űrutazáson: hogyan gondolkodik, tanul és dönt az MI, az 5-8. osztály számára. Ingyenes tanulójáték, regisztráció nélkül.",
  },
  ro: {
    title: "AstroAI: învață inteligența artificială jucăuș | Plizio",
    desc: "Învață inteligența artificială într-o călătorie spațială: cum gândește, învață și decide IA, pentru clasele 5-8. Joc educativ gratuit, fără cont.",
  },
  en: {
    title: "AstroAI: learn artificial intelligence by playing | Plizio",
    desc: "Learn artificial intelligence on a space journey: how AI thinks, learns and decides, for grades 5 to 8. Free interactive learning game, no sign-up.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const m = META[lang];
  if (!m) return {};
  return {
    title: m.title,
    description: m.desc,
    alternates: buildHreflangAlternates(`/${lang}/astro-ai/`),
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const m = META[lang] || META.en;
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroAI", description: m.desc, url: `/${lang}/astro-ai/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroAI", item: `/${lang}/astro-ai/` }])} />
      {children}
    </>
  );
}
