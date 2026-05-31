import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Geschichte Test Klasse 5 bis 8, kostenlos üben | Plizio",
    desc: "Kostenlose Geschichte Tests für die Klassen 5 bis 8. Ohne Anmeldung üben, sofortiges Feedback und Note direkt nach dem Test.",
  },
  hu: {
    title: "Történelem teszt 5-8. osztály, ingyen gyakorlás | Plizio",
    desc: "Ingyenes történelem tesztek az 5-8. osztály számára. Gyakorlás regisztráció nélkül, azonnali visszajelzéssel és értékeléssel.",
  },
  ro: {
    title: "Test de istorie clasele 5-8, exersează gratuit | Plizio",
    desc: "Teste de istorie gratuite pentru clasele 5-8. Exersează fără cont, cu feedback instant și notă imediat după test.",
  },
  en: {
    title: "History Test Grades 5 to 8, free practice | Plizio",
    desc: "Free history practice tests for grades 5 to 8. Practice with no sign-up, instant feedback and a grade right after the test.",
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
    alternates: buildHreflangAlternates(`/${lang}/geschichtetest/`),
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
      <JsonLd data={buildCourseSchema({ name: "History Test", description: m.desc, url: `/${lang}/geschichtetest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "History Test", item: `/${lang}/geschichtetest/` }])} />
      {children}
    </>
  );
}
