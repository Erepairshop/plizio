import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Math Test for Kids - Grade 1-8 Practice | Mathe-Test | Matek Dolgozat",
  description:
    "Free online math test for kids in grades 1-8. Practice math with real school curriculum questions — addition, subtraction, multiplication, division, fractions, geometry & more. Available in English, Deutsch, Magyar, and Română. No download, no signup!",
  keywords: [
    // English
    "free math test",
    "math test for kids",
    "math practice online",
    "grade 1 math test",
    "grade 2 math test",
    "grade 3 math test",
    "grade 4 math test",
    "grade 5 math test",
    "grade 6 math test",
    "grade 7 math test",
    "grade 8 math test",
    "elementary math quiz",
    "math worksheet online",
    "times tables practice",
    "fractions test",
    "multiplication test",
    "free math game for kids",
    "school math practice",
    // German
    "Mathe Test",
    "Mathe Test online",
    "Mathe Klassenarbeit",
    "Grundschule Mathe",
    "Mathe üben kostenlos",
    "Einmaleins üben",
    "Mathe 1. Klasse",
    "Mathe 2. Klasse",
    "Mathe 3. Klasse",
    "Mathe 4. Klasse",
    "Probearbeit Mathematik",
    "Kopfrechnen üben",
    "Rechentest Kinder",
    "Mathe Arbeitsblatt online",
    // Hungarian
    "matek dolgozat",
    "matek teszt",
    "matek gyakorlás",
    "matematika feladatok",
    "matematika teszt online",
    "szorzótábla gyakorlás",
    "matek 1. osztály",
    "matek 2. osztály",
    "matek 3. osztály",
    "matek 4. osztály",
    "ingyenes matek játék",
    "fejszámolás gyakorlás",
    // Romanian
    "test matematica",
    "test matematica online",
    "matematica clasa 1",
    "matematica clasa 2",
    "matematica clasa 3",
    "matematica clasa 4",
    "exercitii matematica",
    "matematica pentru copii",
  ],
  openGraph: {
    title: "Free Math Test for Kids Grade 1-8 | PLIZIO",
    description:
      "Practice real school math — test yourself with grade-appropriate questions in your own language! Supports English, German, Hungarian & Romanian curricula.",
    url: "https://plizio.com/mathtest",
  },
  alternates: { canonical: "https://plizio.com/mathtest" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
