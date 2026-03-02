import type { Metadata } from "next";
import MathTestGrade from "@/components/MathTestGrade";

export const metadata: Metadata = {
  title: "Free Math Test – 8th Grade (Ages 13–14) | PLIZIO",
  description: "Free online math test for 8th grade (ages 13–14). Practice linear functions, the Pythagorean theorem, exponents, systems of equations, and geometric transformations.",
  keywords: [
    "math test 8th grade", "free math test grade 8", "8th grade math practice",
    "grade 8 math online", "free math quiz grade 8", "common core grade 8 math",
    "linear functions", "systems of equations",
  ],
  alternates: {
    canonical: "https://plizio.com/math-test/grade-8/",
    languages: { "en": "https://plizio.com/math-test/grade-8/", "x-default": "https://plizio.com/math-test/grade-8/" },
  },
  openGraph: {
    title: "Free Math Test – 8th Grade | PLIZIO",
    description: "Free online math test for 8th grade (ages 13–14). Practice linear functions, the Pythagorean theorem, exponents, systems",
    url: "https://plizio.com/math-test/grade-8/",
    images: [{ url: "/og/math-grade-8-en.png", width: 1200, height: 630 }],
  },
};

export default function MathTestGrade8Page() {
  return <MathTestGrade grade={8} />;
}
