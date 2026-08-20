import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

const description = "Free interactive learning games for grades 1-8 in mathematics, languages, science, geography, history and computer science. Play on mobile without registration.";

export const metadata: Metadata = {
  title: { absolute: "Visual Lab: Free Interactive Learning Games | Plizio" },
  description,
  alternates: {
    canonical: "https://plizio.com/visual-lab/",
    languages: {
      de: "https://plizio.com/de/visual-lab/",
      hu: "https://plizio.com/hu/visual-lab/",
      ro: "https://plizio.com/ro/visual-lab/",
      en: "https://plizio.com/en/visual-lab/",
      "x-default": "https://plizio.com/visual-lab/",
    },
  },
  openGraph: {
    title: "Plizio Visual Lab",
    description,
    type: "website",
    url: "https://plizio.com/visual-lab/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({
        name: "Plizio Visual Lab",
        description,
        url: "/visual-lab/",
        educationalLevel: "Grades 1-8",
        teaches: ["mathematics", "languages", "science", "geography", "history", "computer science"],
      })} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Visual Lab", item: "/visual-lab/" },
      ])} />
      {children}
    </>
  );
}