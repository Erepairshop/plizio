import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Englisch Test Klasse 1 bis 8, kostenlos üben | Plizio",
    desc: "Kostenlose Englisch Tests für die Klassen 1 bis 8. Ohne Anmeldung üben, sofortiges Feedback und Note direkt nach dem Test.",
  },
  hu: {
    title: "Angol teszt 1-8. osztály, ingyen gyakorlás | Plizio",
    desc: "Ingyenes angol tesztek az 1-8. osztály számára. Gyakorlás regisztráció nélkül, azonnali visszajelzéssel és értékeléssel.",
  },
  ro: {
    title: "Test de engleză clasele 1-8, exersează gratuit | Plizio",
    desc: "Teste de engleză gratuite pentru clasele 1-8. Exersează fără cont, cu feedback instant și notă imediat după test.",
  },
  en: {
    title: "English Test Grades 1 to 8, free practice | Plizio",
    desc: "Free English practice tests for grades 1 to 8. Practice with no sign-up, instant feedback and a grade right after the test.",
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
    alternates: buildHreflangAlternates(`/${lang}/englishtest/`),
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
      <JsonLd data={buildCourseSchema({ name: "English Test", description: m.desc, url: `/${lang}/englishtest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "English Test", item: `/${lang}/englishtest/` }])} />
      {children}
    </>
  );
}
