import type { Metadata } from "next";
import MathTestGrade from "@/components/MathTestGrade";

export const metadata: Metadata = {
  title: "Free Math Test – 5th Grade (Ages 10–11) | PLIZIO",
  description: "Free online math test for 5th grade (ages 10–11). Practice fraction multiplication and division, decimal operations, order of operations (PEMDAS), volume, and coordinate plane.",
  keywords: [
    "math test 5th grade", "free math test grade 5", "5th grade math practice",
    "grade 5 math online", "free math quiz grade 5", "common core grade 5 math",
    "fraction operations", "decimal arithmetic",
  ],
  alternates: {
    canonical: "https://plizio.com/math-test/grade-5/",
    languages: { "en": "https://plizio.com/math-test/grade-5/", "x-default": "https://plizio.com/math-test/grade-5/" },
  },
  openGraph: {
    title: "Free Math Test – 5th Grade | PLIZIO",
    description: "Free online math test for 5th grade (ages 10–11). Practice fraction multiplication and division, decimal operations, ord",
    url: "https://plizio.com/math-test/grade-5/",
    images: [{ url: "/og/math-grade-5-en.png", width: 1200, height: 630 }],
  },
};

export default function MathTestGrade5Page() {
  return <MathTestGrade grade={5} />;
}
