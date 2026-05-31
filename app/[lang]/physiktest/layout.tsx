import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Physik-Test: kostenlose Online-Tests für die Schule | Plizio",
    desc: "Kostenlose Physik-Tests für die Klassen 5 bis 8. Üben ohne Anmeldung, mit sofortiger Korrektur und Note. Kraft, Energie, Strom und Optik.",
  },
  hu: {
    title: "Fizika teszt: ingyenes online iskolai gyakorlás | Plizio",
    desc: "Ingyenes fizika tesztek az 5-8. osztály számára. Gyakorolj regisztráció nélkül, azonnali javítással és jeggyel. Erő, energia, áram és fény.",
  },
  ro: {
    title: "Test de fizică: exerciții online gratuite | Plizio",
    desc: "Teste de fizică gratuite pentru clasele 5-8. Exersează fără cont, cu corectare instantanee și notă. Forța, energie, curent și optică.",
  },
  en: {
    title: "Physics test: free online practice for school | Plizio",
    desc: "Free physics tests for grades 5 to 8. Practice with no sign-up, instant grading and a mark. Force, energy, electricity and optics.",
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
    alternates: buildHreflangAlternates(`/${lang}/physiktest/`),
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
      <JsonLd data={buildCourseSchema({ name: "Physik-Test", description: m.desc, url: `/${lang}/physiktest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Physik-Test", item: `/${lang}/physiktest/` }])} />
      {children}
    </>
  );
}
