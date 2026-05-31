import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Rumänisch-Test: kostenlose Online-Tests | Plizio",
    desc: "Kostenlose Rumänisch-Tests für die Klassen 1 bis 8. Üben ohne Anmeldung, mit sofortiger Korrektur und Note. Grammatik, Rechtschreibung und Lesen.",
  },
  hu: {
    title: "Román teszt: ingyenes online iskolai gyakorlás | Plizio",
    desc: "Ingyenes román tesztek az 1-8. osztály számára. Gyakorolj regisztráció nélkül, azonnali javítással és jeggyel. Nyelvtan, helyesírás és olvasás.",
  },
  ro: {
    title: "Test de limba română: exerciții online gratuite | Plizio",
    desc: "Teste de limba română gratuite pentru clasele 1-8. Exersează fără cont, cu corectare instantanee și notă. Gramatică, ortografie și lectură.",
  },
  en: {
    title: "Romanian test: free online practice for school | Plizio",
    desc: "Free Romanian language tests for grades 1 to 8. Practice with no sign-up, instant grading and a mark. Grammar, spelling and reading.",
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
    alternates: buildHreflangAlternates(`/${lang}/romaniantest/`),
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
      <JsonLd data={buildCourseSchema({ name: "Test Limba Romana", description: m.desc, url: `/${lang}/romaniantest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Test Limba Romana", item: `/${lang}/romaniantest/` }])} />
      {children}
    </>
  );
}
