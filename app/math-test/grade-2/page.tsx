import type { Metadata } from "next";
import MathTestGrade from "@/components/MathTestGrade";

export const metadata: Metadata = {
  title: "Free Math Test – 2nd Grade (Ages 7–8) | PLIZIO",
  description: "Free online math test for 2nd grade (ages 7–8). Practice addition and subtraction to 1,000, place value, measurement, time, and money. Common Core aligned.",
  keywords: [
    "math test 2nd grade", "free math test grade 2", "2th grade math practice",
    "grade 2 math online", "free math quiz grade 2", "common core grade 2 math",
    "addition and subtraction within 1", "000",
  ],
  alternates: {
    canonical: "https://plizio.com/math-test/grade-2/",
    languages: { "en": "https://plizio.com/math-test/grade-2/", "x-default": "https://plizio.com/math-test/grade-2/" },
  },
  openGraph: {
    title: "Free Math Test – 2nd Grade | PLIZIO",
    description: "Free online math test for 2nd grade (ages 7–8). Practice addition and subtraction to 1,000, place value, measurement, ti",
    url: "https://plizio.com/math-test/grade-2/",
    images: [{ url: "/og/math-grade-2-en.png", width: 1200, height: 630 }],
  },
};

export default function MathTestGrade2Page() {
  return <MathTestGrade grade={2} />;
}
