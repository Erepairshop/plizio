import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroBiologie: Biologie spielend lernen | Plizio",
    desc: "Lerne Biologie auf einer Weltraumreise: Zellen, Pflanzen, Tiere und der menschliche Körper, für die Klassen 5 bis 8. Kostenloses Lernspiel, ohne Anmeldung.",
  },
  hu: {
    title: "AstroBiológia: biológia tanulás játékosan | Plizio",
    desc: "Tanulj biológiát egy űrutazáson: sejtek, növények, állatok és az emberi test, az 5-8. osztály számára. Ingyenes tanulójáték, regisztráció nélkül.",
  },
  ro: {
    title: "AstroBiologie: învață biologia jucăuș | Plizio",
    desc: "Învață biologia într-o călătorie spațială: celule, plante, animale și corpul uman, pentru clasele 5-8. Joc educativ gratuit, fără cont.",
  },
  en: {
    title: "AstroBiology: learn biology by playing | Plizio",
    desc: "Learn biology on a space journey: cells, plants, animals and the human body, for grades 5 to 8. Free interactive learning game, no sign-up.",
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
    alternates: buildHreflangAlternates(`/${lang}/astro-biologie/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroBiologie", description: m.desc, url: `/${lang}/astro-biologie/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroBiologie", item: `/${lang}/astro-biologie/` }])} />
      {children}
    </>
  );
}
