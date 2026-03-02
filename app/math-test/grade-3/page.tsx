import type { Metadata } from "next";
import MathTestGrade from "@/components/MathTestGrade";

export const metadata: Metadata = {
  title: "Free Math Test – 3rd Grade (Ages 8–9) | PLIZIO",
  description: "Free online math test for 3rd grade (ages 8–9). Practice multiplication and division facts, fractions, area, perimeter, and word problems. Common Core aligned.",
  keywords: [
    "math test 3rd grade", "free math test grade 3", "3th grade math practice",
    "grade 3 math online", "free math quiz grade 3", "common core grade 3 math",
    "multiplication and division within 100", "fractions",
  ],
  alternates: {
    canonical: "https://plizio.com/math-test/grade-3/",
    languages: { "en": "https://plizio.com/math-test/grade-3/", "x-default": "https://plizio.com/math-test/grade-3/" },
  },
  openGraph: {
    title: "Free Math Test – 3rd Grade | PLIZIO",
    description: "Free online math test for 3rd grade (ages 8–9). Practice multiplication and division facts, fractions, area, perimeter, ",
    url: "https://plizio.com/math-test/grade-3/",
    images: [{ url: "/og/math-grade-3-en.png", width: 1200, height: 630 }],
  },
};

export default function MathTestGrade3Page() {
  return <MathTestGrade grade={3} />;
}
