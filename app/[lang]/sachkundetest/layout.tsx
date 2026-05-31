import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Sachkunde Test Klasse 1 bis 4, kostenlos üben | Plizio",
    desc: "Kostenlose Sachkunde Tests für die Klassen 1 bis 4. Ohne Anmeldung üben, sofortiges Feedback und Note direkt nach dem Test.",
  },
  hu: {
    title: "Környezetismeret teszt 1-4. osztály, ingyen | Plizio",
    desc: "Ingyenes környezetismeret tesztek az 1-4. osztály számára. Gyakorlás regisztráció nélkül, azonnali visszajelzéssel és értékeléssel.",
  },
  ro: {
    title: "Test cunoașterea mediului clasele 1-4, gratuit | Plizio",
    desc: "Teste de cunoașterea mediului gratuite pentru clasele 1-4. Exersează fără cont, cu feedback instant și notă imediat după test.",
  },
  en: {
    title: "Nature and Science Test Grades 1 to 4, free | Plizio",
    desc: "Free nature and science practice tests for grades 1 to 4. Practice with no sign-up, instant feedback and a grade right after the test.",
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
    alternates: buildHreflangAlternates(`/${lang}/sachkundetest/`),
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
      <JsonLd data={buildCourseSchema({ name: "Nature and Science Test", description: m.desc, url: `/${lang}/sachkundetest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Nature and Science Test", item: `/${lang}/sachkundetest/` }])} />
      {children}
    </>
  );
}
