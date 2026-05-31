import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroInformatika: Informatik lernen im Weltraum | Plizio",
    desc: "Lerne Informatik spielerisch auf einer Weltraumreise: Algorithmen, Daten und Computer verstehen, für die Klassen 5 bis 8. Kostenlos, ohne Anmeldung.",
  },
  hu: {
    title: "AstroInformatika: informatika tanulás az űrben | Plizio",
    desc: "Tanulj informatikát játékosan egy űrutazáson: algoritmusok, adatok és a számítógép működése, az 5-8. osztály számára. Ingyenes, regisztráció nélkül.",
  },
  ro: {
    title: "AstroInformatika: învață informatica în spațiu | Plizio",
    desc: "Învață informatica jucăuș într-o călătorie spațială: algoritmi, date și cum funcționează calculatorul, pentru clasele 5-8. Gratuit, fără cont.",
  },
  en: {
    title: "AstroInformatika: learn computer science in space | Plizio",
    desc: "Learn computer science playfully on a space journey: algorithms, data and how computers work, for grades 5 to 8. Free, no sign-up.",
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
    alternates: buildHreflangAlternates(`/${lang}/astrinformatika/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroInformatika", description: m.desc, url: `/${lang}/astrinformatika/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroInformatika", item: `/${lang}/astrinformatika/` }])} />
      {children}
    </>
  );
}
