import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "KI Test Klasse 5 bis 8, kostenlos üben | Plizio",
    desc: "Kostenlose Tests über künstliche Intelligenz für die Klassen 5 bis 8. Ohne Anmeldung üben, sofortiges Feedback und Note nach dem Test.",
  },
  hu: {
    title: "MI teszt 5-8. osztály, ingyen gyakorlás | Plizio",
    desc: "Ingyenes mesterséges intelligencia tesztek az 5-8. osztály számára. Gyakorlás regisztráció nélkül, azonnali visszajelzéssel és értékeléssel.",
  },
  ro: {
    title: "Test de inteligență artificială clasele 5-8 | Plizio",
    desc: "Teste gratuite despre inteligența artificială pentru clasele 5-8. Exersează fără cont, cu feedback instant și notă după test.",
  },
  en: {
    title: "AI Test Grades 5 to 8, free practice | Plizio",
    desc: "Free artificial intelligence practice tests for grades 5 to 8. Practice with no sign-up, instant feedback and a grade after the test.",
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
    alternates: buildHreflangAlternates(`/${lang}/aitest/`),
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
      <JsonLd data={buildCourseSchema({ name: "AI Test", description: m.desc, url: `/${lang}/aitest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "AI Test", item: `/${lang}/aitest/` }])} />
      {children}
    </>
  );
}
