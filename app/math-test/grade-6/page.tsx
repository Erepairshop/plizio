import type { Metadata } from "next";
import MathTestGrade from "@/components/MathTestGrade";

export const metadata: Metadata = {
  title: "Free Math Test – 6th Grade (Ages 11–12) | PLIZIO",
  description: "Free online math test for 6th grade (ages 11–12). Practice ratios, percents, negative numbers, algebraic expressions, area, and statistics. Common Core aligned.",
  keywords: [
    "math test 6th grade", "free math test grade 6", "6th grade math practice",
    "grade 6 math online", "free math quiz grade 6", "common core grade 6 math",
    "ratios", "unit rates",
  ],
  alternates: {
    canonical: "https://plizio.com/math-test/grade-6/",
    languages: { "en": "https://plizio.com/math-test/grade-6/", "x-default": "https://plizio.com/math-test/grade-6/" },
  },
  openGraph: {
    title: "Free Math Test – 6th Grade | PLIZIO",
    description: "Free online math test for 6th grade (ages 11–12). Practice ratios, percents, negative numbers, algebraic expressions, ar",
    url: "https://plizio.com/math-test/grade-6/",
    images: [{ url: "/og/math-grade-6-en.png", width: 1200, height: 630 }],
  },
};

export default function MathTestGrade6Page() {
  return <MathTestGrade grade={6} />;
}
