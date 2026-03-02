import type { Metadata } from "next";
import MathTestGrade from "@/components/MathTestGrade";

export const metadata: Metadata = {
  title: "Free Math Test – 4th Grade (Ages 9–10) | PLIZIO",
  description: "Free online math test for 4th grade (ages 9–10). Practice multi-digit multiplication, long division, fraction operations, decimals, and angle measurement. Common Core aligned.",
  keywords: [
    "math test 4th grade", "free math test grade 4", "4th grade math practice",
    "grade 4 math online", "free math quiz grade 4", "common core grade 4 math",
    "multi-digit multiplication", "long division",
  ],
  alternates: {
    canonical: "https://plizio.com/math-test/grade-4/",
    languages: { "en": "https://plizio.com/math-test/grade-4/", "x-default": "https://plizio.com/math-test/grade-4/" },
  },
  openGraph: {
    title: "Free Math Test – 4th Grade | PLIZIO",
    description: "Free online math test for 4th grade (ages 9–10). Practice multi-digit multiplication, long division, fraction operations",
    url: "https://plizio.com/math-test/grade-4/",
    images: [{ url: "/og/math-grade-4-en.png", width: 1200, height: 630 }],
  },
};

export default function MathTestGrade4Page() {
  return <MathTestGrade grade={4} />;
}
