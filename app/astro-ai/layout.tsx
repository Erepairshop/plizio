import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Astro AI - Interactive AI Learning Game | Plizio",
  description: "Interactive AI learning route with grade-based missions about artificial intelligence, prompts, models, and digital literacy.",
  alternates: buildHreflangAlternates("/astro-ai/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "Astro AI", description: "Interactive AI learning route with grade-based missions about artificial intelligence, prompts, models, and digital literacy.", url: "/astro-ai/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Astro AI", item: "/astro-ai/" }])} />
      {children}
    </>
  );
}
