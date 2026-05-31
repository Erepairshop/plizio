import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const META: Record<string, { title: string; desc: string }> = {
  de: {
    title: "Informatik Test Klasse 5 bis 8, kostenlos üben | Plizio",
    desc: "Kostenlose Informatik Tests für die Klassen 5 bis 8. Ohne Anmeldung üben, sofortiges Feedback und Note direkt nach dem Test.",
  },
  hu: {
    title: "Informatika teszt 5-8. osztály, ingyen | Plizio",
    desc: "Ingyenes informatika tesztek az 5-8. osztály számára. Gyakorlás regisztráció nélkül, azonnali visszajelzéssel és értékeléssel.",
  },
  ro: {
    title: "Test de informatică clasele 5-8, gratuit | Plizio",
    desc: "Teste de informatică gratuite pentru clasele 5-8. Exersează fără cont, cu feedback instant și notă imediat după test.",
  },
  en: {
    title: "Computer Science Test Grades 5 to 8, free | Plizio",
    desc: "Free computer science practice tests for grades 5 to 8. Practice with no sign-up, instant feedback and a grade right after the test.",
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
    alternates: buildHreflangAlternates(`/${lang}/informatikatest/`),
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
      <JsonLd data={buildCourseSchema({ name: "Computer Science Test", description: m.desc, url: `/${lang}/informatikatest/` })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: `/${lang}/` }, { name: "Computer Science Test", item: `/${lang}/informatikatest/` }])} />
      {children}
    </>
  );
}
