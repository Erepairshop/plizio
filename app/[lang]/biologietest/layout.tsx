import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Biologie-Test: kostenlose Online-Tests für die Schule | Plizio",
    desc: "Kostenlose Biologie-Tests für die Klassen 5 bis 8. Üben ohne Anmeldung, mit sofortiger Korrektur und Note. Pflanzen, Tiere, Mensch und Zelle.",
  },
  hu: {
    title: "Biológia teszt: ingyenes online iskolai gyakorlás | Plizio",
    desc: "Ingyenes biológia tesztek az 5-8. osztály számára. Gyakorolj regisztráció nélkül, azonnali javítással és jeggyel. Növények, állatok, ember és sejt.",
  },
  ro: {
    title: "Test de biologie: exerciții online gratuite | Plizio",
    desc: "Teste de biologie gratuite pentru clasele 5-8. Exersează fără cont, cu corectare instantanee și notă. Plante, animale, om și celulă.",
  },
  en: {
    title: "Biology test: free online practice for school | Plizio",
    desc: "Free biology tests for grades 5 to 8. Practice with no sign-up, instant grading and a mark. Plants, animals, the human body and cells.",
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
    alternates: buildHreflangAlternates(`/${lang}/biologietest/`),
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
      <JsonLd data={buildCourseSchema({ name: "Biologie-Test", description: m.desc, url: `/${lang}/biologietest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Biologie-Test", item: `/${lang}/biologietest/` }])} />
      {children}
    </>
  );
}
