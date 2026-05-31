import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Deutschtest: kostenlose Online-Tests für die Schule | Plizio",
    desc: "Kostenlose Deutsch-Tests für die Klassen 1 bis 8. Üben ohne Anmeldung, mit sofortiger Korrektur und Note. Grammatik, Rechtschreibung und mehr.",
  },
  hu: {
    title: "Német teszt: ingyenes online iskolai gyakorlás | Plizio",
    desc: "Ingyenes német tesztek az 1-8. osztály számára. Gyakorolj regisztráció nélkül, azonnali javítással és jeggyel. Nyelvtan, helyesírás és több.",
  },
  ro: {
    title: "Test de germană: exerciții online gratuite pentru școală | Plizio",
    desc: "Teste de germană gratuite pentru clasele 1-8. Exersează fără cont, cu corectare instantanee și notă. Gramatică, ortografie și altele.",
  },
  en: {
    title: "German test: free online practice tests for school | Plizio",
    desc: "Free German tests for grades 1 to 8. Practice with no sign-up, instant grading and a mark. Grammar, spelling and more.",
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
    alternates: buildHreflangAlternates(`/${lang}/deutschtest/`),
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
      <JsonLd data={buildCourseSchema({ name: "Deutschtest", description: m.desc, url: `/${lang}/deutschtest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Deutschtest", item: `/${lang}/deutschtest/` }])} />
      {children}
    </>
  );
}
