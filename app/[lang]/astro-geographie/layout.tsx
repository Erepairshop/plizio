import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroGeographie: Geografie spielend lernen | Plizio",
    desc: "Lerne Geografie auf einer Weltraumreise: Karten, Kontinente, Klima und die Erde, für die Klassen 5 bis 8. Kostenloses Lernspiel, ohne Anmeldung.",
  },
  hu: {
    title: "AstroFöldrajz: földrajz tanulás játékosan | Plizio",
    desc: "Tanulj földrajzot egy űrutazáson: térképek, kontinensek, éghajlat és a Föld, az 5-8. osztály számára. Ingyenes tanulójáték, regisztráció nélkül.",
  },
  ro: {
    title: "AstroGeografie: învață geografia jucăuș | Plizio",
    desc: "Învață geografia într-o călătorie spațială: hărți, continente, climă și Pământul, pentru clasele 5-8. Joc educativ gratuit, fără cont.",
  },
  en: {
    title: "AstroGeography: learn geography by playing | Plizio",
    desc: "Learn geography on a space journey: maps, continents, climate and the Earth, for grades 5 to 8. Free interactive learning game, no sign-up.",
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
    alternates: buildHreflangAlternates(`/${lang}/astro-geographie/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroGeographie", description: m.desc, url: `/${lang}/astro-geographie/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroGeographie", item: `/${lang}/astro-geographie/` }])} />
      {children}
    </>
  );
}
