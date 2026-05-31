import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Mathetest: kostenlose Online-Tests für die Schule | Plizio",
    desc: "Kostenlose Mathe-Tests für die Klassen 1 bis 8. Üben ohne Anmeldung, mit sofortiger Korrektur und Note. Rechnen, Geometrie und Textaufgaben.",
  },
  hu: {
    title: "Matek teszt: ingyenes online iskolai gyakorlás | Plizio",
    desc: "Ingyenes matek tesztek az 1-8. osztály számára. Gyakorolj regisztráció nélkül, azonnali javítással és jeggyel. Számolás, geometria, szöveges feladatok.",
  },
  ro: {
    title: "Test de matematică: exerciții online gratuite | Plizio",
    desc: "Teste de matematică gratuite pentru clasele 1-8. Exersează fără cont, cu corectare instantanee și notă. Calcule, geometrie și probleme.",
  },
  en: {
    title: "Math test: free online practice tests for school | Plizio",
    desc: "Free math tests for grades 1 to 8. Practice with no sign-up, instant grading and a mark. Arithmetic, geometry and word problems.",
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
    alternates: buildHreflangAlternates(`/${lang}/mathtest/`),
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
      <JsonLd data={buildCourseSchema({ name: "Mathetest", description: m.desc, url: `/${lang}/mathtest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Mathetest", item: `/${lang}/mathtest/` }])} />
      {children}
    </>
  );
}
