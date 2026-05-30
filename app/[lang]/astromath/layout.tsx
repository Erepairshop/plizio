import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "AstroMath: Mathe lernen mit einer Weltraumreise | Plizio",
    desc: "Lerne Mathe spielerisch auf einer Weltraumreise: Addition, Subtraktion, Vergleichen und mehr, für die Klassen 1 bis 8. Kostenlos, ohne Anmeldung.",
  },
  hu: {
    title: "AstroMath: matek tanulás űrutazással | Plizio",
    desc: "Tanulj matekot játékosan egy űrutazáson: összeadás, kivonás, összehasonlítás és több, az 1-8. osztály számára. Ingyenes, regisztráció nélkül.",
  },
  ro: {
    title: "AstroMath: învață matematica într-o călătorie spațială | Plizio",
    desc: "Învață matematica jucăuș într-o călătorie spațială: adunare, scădere, comparare și altele, pentru clasele 1-8. Gratuit, fără cont.",
  },
  en: {
    title: "AstroMath: learn math on a space journey | Plizio",
    desc: "Learn math playfully on a space journey: addition, subtraction, comparing and more, for grades 1 to 8. Free, no sign-up.",
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
    alternates: buildHreflangAlternates(`/${lang}/astromath/`),
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
      <JsonLd data={buildCourseSchema({ name: "AstroMath", description: m.desc, url: `/${lang}/astromath/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AstroMath", item: `/${lang}/astromath/` }])} />
      {children}
    </>
  );
}
