import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Chemie-Test: kostenlose Online-Tests für die Schule | Plizio",
    desc: "Kostenlose Chemie-Tests für die Klassen 5 bis 8. Üben ohne Anmeldung, mit sofortiger Korrektur und Note. Stoffe, Reaktionen, Atome und Elemente.",
  },
  hu: {
    title: "Kémia teszt: ingyenes online iskolai gyakorlás | Plizio",
    desc: "Ingyenes kémia tesztek az 5-8. osztály számára. Gyakorolj regisztráció nélkül, azonnali javítással és jeggyel. Anyagok, reakciók, atomok és elemek.",
  },
  ro: {
    title: "Test de chimie: exerciții online gratuite | Plizio",
    desc: "Teste de chimie gratuite pentru clasele 5-8. Exersează fără cont, cu corectare instantanee și notă. Substanțe, reacții, atomi și elemente.",
  },
  en: {
    title: "Chemistry test: free online practice for school | Plizio",
    desc: "Free chemistry tests for grades 5 to 8. Practice with no sign-up, instant grading and a mark. Substances, reactions, atoms and elements.",
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
    alternates: buildHreflangAlternates(`/${lang}/kemiatest/`),
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
      <JsonLd data={buildCourseSchema({ name: "Chemie-Test", description: m.desc, url: `/${lang}/kemiatest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Chemie-Test", item: `/${lang}/kemiatest/` }])} />
      {children}
    </>
  );
}
