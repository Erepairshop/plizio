import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroDeutsch: Deutsch spielend lernen | Plizio",
    desc: "Lerne Deutsch auf einer Weltraumreise: Buchstaben, Wörter, Grammatik und Sätze, für die Klassen 1 bis 8. Kostenloses Lernspiel, ohne Anmeldung.",
  },
  hu: {
    title: "AstroNémet: német nyelv tanulás játékosan | Plizio",
    desc: "Tanulj németül egy űrutazáson: betűk, szavak, nyelvtan és mondatok, az 1-8. osztály számára. Ingyenes tanulójáték, regisztráció nélkül.",
  },
  ro: {
    title: "AstroGermană: învață germana jucăuș | Plizio",
    desc: "Învață germana într-o călătorie spațială: litere, cuvinte, gramatică și propoziții, pentru clasele 1-8. Joc educativ gratuit, fără cont.",
  },
  en: {
    title: "AstroGerman: learn German by playing | Plizio",
    desc: "Learn German on a space journey: letters, words, grammar and sentences, for grades 1 to 8. Free interactive learning game, no sign-up.",
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
    alternates: buildHreflangAlternates(`/${lang}/astrodeutsch/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroDeutsch", description: m.desc, url: `/${lang}/astrodeutsch/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroDeutsch", item: `/${lang}/astrodeutsch/` }])} />
      {children}
    </>
  );
}
