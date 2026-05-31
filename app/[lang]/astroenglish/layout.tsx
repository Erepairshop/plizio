import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroEnglish: Englisch spielend lernen | Plizio",
    desc: "Lerne Englisch auf einer Weltraumreise: Phonics, Wörter, Grammatik und Sätze, für die Klassen 1 bis 8. Kostenloses Lernspiel, ohne Anmeldung.",
  },
  hu: {
    title: "AstroAngol: angol nyelv tanulás játékosan | Plizio",
    desc: "Tanulj angolul egy űrutazáson: fonetika, szavak, nyelvtan és mondatok, az 1-8. osztály számára. Ingyenes tanulójáték, regisztráció nélkül.",
  },
  ro: {
    title: "AstroEngleză: învață engleza jucăuș | Plizio",
    desc: "Învață engleza într-o călătorie spațială: fonetică, cuvinte, gramatică și propoziții, pentru clasele 1-8. Joc educativ gratuit, fără cont.",
  },
  en: {
    title: "AstroEnglish: learn English by playing | Plizio",
    desc: "Learn English on a space journey: phonics, words, grammar and sentences, for grades 1 to 8. Free interactive learning game, no sign-up.",
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
    alternates: buildHreflangAlternates(`/${lang}/astroenglish/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroEnglish", description: m.desc, url: `/${lang}/astroenglish/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroEnglish", item: `/${lang}/astroenglish/` }])} />
      {children}
    </>
  );
}
