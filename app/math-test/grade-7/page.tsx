import type { Metadata } from "next";
import MathTestGrade from "@/components/MathTestGrade";

export const metadata: Metadata = {
  title: "Free Math Test – 7th Grade (Ages 12–13) | PLIZIO",
  description: "Free online math test for 7th grade (ages 12–13). Practice proportional reasoning, multi-step equations, percent change, probability, and circle geometry.",
  keywords: [
    "math test 7th grade", "free math test grade 7", "7th grade math practice",
    "grade 7 math online", "free math quiz grade 7", "common core grade 7 math",
    "proportional relationships", "percent change",
  ],
  alternates: {
    canonical: "https://plizio.com/math-test/grade-7/",
    languages: { "en": "https://plizio.com/math-test/grade-7/", "x-default": "https://plizio.com/math-test/grade-7/" },
  },
  openGraph: {
    title: "Free Math Test – 7th Grade | PLIZIO",
    description: "Free online math test for 7th grade (ages 12–13). Practice proportional reasoning, multi-step equations, percent change,",
    url: "https://plizio.com/math-test/grade-7/",
    images: [{ url: "/og/math-grade-7-en.png", width: 1200, height: 630 }],
  },
};

export default function MathTestGrade7Page() {
  return <MathTestGrade grade={7} />;
}
