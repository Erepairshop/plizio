import type { Metadata } from "next";
import RomanianTestClasa from "@/components/RomanianTestClasa";

const GRADE_META: Record<number, { title: string; desc: string }> = {
  1: {
    title: "Test Limba Română Clasa I Online – Gratuit | PLIZIO",
    desc: "Test gratuit de limba română pentru clasa I (6–7 ani): alfabet, silabe, sunete, citire și scriere. Exersează online – fără înregistrare!",
  },
  2: {
    title: "Test Limba Română Clasa a II-a Online – Gratuit | PLIZIO",
    desc: "Test gratuit de limba română pentru clasa a II-a (7–8 ani): ortografie, părți de vorbire, propoziția, textul narativ. Exersează online – fără înregistrare!",
  },
  3: {
    title: "Test Limba Română Clasa a III-a Online – Gratuit | PLIZIO",
    desc: "Test gratuit de limba română pentru clasa a III-a (8–9 ani): substantiv, verb, adjectiv, propoziția dezvoltată. Exersează online gratuit!",
  },
  4: {
    title: "Test Limba Română Clasa a IV-a Online – Gratuit | PLIZIO",
    desc: "Test gratuit de limba română pentru clasa a IV-a (9–10 ani): analiză gramaticală, compunere, ortografie avansată. Joacă și învață acum!",
  },
  5: {
    title: "Test Limba Română Clasa a V-a Online – Gratuit | PLIZIO",
    desc: "Test gratuit de limba română pentru clasa a V-a (10–11 ani): morfologie, fonetică, lexic, sintaxă. Pregătire pentru gimnaziu online!",
  },
  6: {
    title: "Test Limba Română Clasa a VI-a Online – Gratuit | PLIZIO",
    desc: "Test gratuit de limba română pentru clasa a VI-a (11–12 ani): morfologie avansată, text literar, stilistică. Exersează online fără cont!",
  },
  7: {
    title: "Test Limba Română Clasa a VII-a Online – Gratuit | PLIZIO",
    desc: "Test gratuit de limba română pentru clasa a VII-a (12–13 ani): sintaxă avansată, figuri de stil, comentariu literar. Pregătire pentru EN!",
  },
  8: {
    title: "Test Limba Română Clasa a VIII-a Online – Gratuit | PLIZIO",
    desc: "Test gratuit de limba română pentru clasa a VIII-a (13–14 ani): Evaluare Națională, sintaxă și morfologie completă. Pregătire pentru examen!",
  },
};

const grade = 2;
const meta = GRADE_META[grade];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.desc,
  keywords: [
    "test limba română clasa 2", "română clasa a II-a", "test română online gratuit",
    "exerciții limba română clasa 2", "ortografie clasa 2", "gramatică clasa 2",
    "părți de vorbire clasa 2", "test limba română online",
  ],
  alternates: {
    canonical: "https://plizio.com/teste-romana/clasa-2/",
    languages: {
      "ro": "https://plizio.com/teste-romana/clasa-2/",
      "x-default": "https://plizio.com/teste-romana/clasa-2/",
    },
  },
  openGraph: {
    title: meta.title,
    description: meta.desc,
    url: "https://plizio.com/teste-romana/clasa-2/",
    images: [{ url: "/icon-512.png", width: 512, height: 512 }],
  },
};

export default function ClasaPage() {
  return <RomanianTestClasa grade={2} />;
}
