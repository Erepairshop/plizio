import type { Metadata } from "next";
import MathTestGrade from "@/components/MathTestGrade";

export const metadata: Metadata = {
  title: "Free Math Test – 1st Grade (Ages 6–7) | PLIZIO",
  description: "Free online math test for 1st grade (ages 6–7). Practice counting, addition and subtraction to 20, comparing numbers, and basic shapes. Common Core aligned, instant feedback.",
  keywords: [
    "math test 1st grade", "free math test grade 1", "1th grade math practice",
    "grade 1 math online", "free math quiz grade 1", "common core grade 1 math",
    "counting", "addition and subtraction within 20",
  ],
  alternates: {
    canonical: "https://plizio.com/math-test/grade-1/",
    languages: { "en": "https://plizio.com/math-test/grade-1/", "x-default": "https://plizio.com/math-test/grade-1/" },
  },
  openGraph: {
    title: "Free Math Test – 1st Grade | PLIZIO",
    description: "Free online math test for 1st grade (ages 6–7). Practice counting, addition and subtraction to 20, comparing numbers, an",
    url: "https://plizio.com/math-test/grade-1/",
    images: [{ url: "/og/math-grade-1-en.png", width: 1200, height: 630 }],
  },
};

export default function MathTestGrade1Page() {
  return <MathTestGrade grade={1} />;
}
