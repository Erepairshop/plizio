import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroGeschichte: Geschichte spielend lernen | Plizio",
    desc: "Lerne Geschichte auf einer Weltraumreise: Antike, Mittelalter und Neuzeit, für die Klassen 5 bis 8. Kostenloses Lernspiel, ohne Anmeldung.",
  },
  hu: {
    title: "AstroTörténelem: történelem tanulás játékosan | Plizio",
    desc: "Tanulj történelmet egy űrutazáson: ókor, középkor és újkor, az 5-8. osztály számára. Ingyenes tanulójáték, regisztráció nélkül.",
  },
  ro: {
    title: "AstroIstorie: învață istoria jucăuș | Plizio",
    desc: "Învață istoria într-o călătorie spațială: antichitate, Evul Mediu și epoca modernă, pentru clasele 5-8. Joc educativ gratuit, fără cont.",
  },
  en: {
    title: "AstroHistory: learn history by playing | Plizio",
    desc: "Learn history on a space journey: ancient times, the Middle Ages and the modern era, for grades 5 to 8. Free interactive learning game, no sign-up.",
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
    alternates: buildHreflangAlternates(`/${lang}/astro-geschichte/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroGeschichte", description: m.desc, url: `/${lang}/astro-geschichte/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroGeschichte", item: `/${lang}/astro-geschichte/` }])} />
      {children}
    </>
  );
}
