import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Geographie Test online, Klasse 5 bis 8 | Plizio",
    desc: "Kostenlose Geographie Übungstests für die Klassen 5 bis 8. Ohne Anmeldung üben, sofortige Auswertung und Note nach jedem Test.",
  },
  hu: {
    title: "Földrajz teszt online, 5-8. osztály | Plizio",
    desc: "Ingyenes földrajz gyakorló tesztek az 5-8. osztály számára. Regisztráció nélkül gyakorolhatsz, azonnali értékeléssel és jeggyel.",
  },
  ro: {
    title: "Test de geografie online, clasele 5-8 | Plizio",
    desc: "Teste gratuite de geografie pentru clasele 5-8. Exersezi fără cont, cu evaluare instantanee și notă după fiecare test.",
  },
  en: {
    title: "Geography test online, grades 5 to 8 | Plizio",
    desc: "Free geography practice tests for grades 5 to 8. Practice with no sign-up, instant feedback and a grade after every test.",
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
    alternates: buildHreflangAlternates(`/${lang}/geographietest/`),
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
      <JsonLd data={buildCourseSchema({ name: "Geography Test", description: m.desc, url: `/${lang}/geographietest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Geography Test", item: `/${lang}/geographietest/` }])} />
      {children}
    </>
  );
}
