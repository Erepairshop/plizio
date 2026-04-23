import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

function gradeDescription(grade: string) {
  return `Interactive Astro AI course for grade ${grade} on prompts, models, digital literacy, and artificial intelligence basics.`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ grade: string }>;
}): Promise<Metadata> {
  const { grade } = await params;

  return {
    alternates: buildHreflangAlternates(`/astro-ai/${grade}/`),
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;
  const route = `/astro-ai/${grade}/`;

  return (
    <>
      <JsonLd
        data={buildCourseSchema({
          name: `Astro AI ${grade}`,
          description: gradeDescription(grade),
          url: route,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Astro AI", item: "/astro-ai/" },
          { name: `Grade ${grade}`, item: route },
        ])}
      />
      {children}
    </>
  );
}
