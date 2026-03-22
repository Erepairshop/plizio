"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Partizip I",
    text1: "Partizip I (Partizip Präsens) wird aus dem Infinitiv + -d gebildet. Es funktioniert wie ein Adjektiv. Beispiel: laufen → laufend, singende Vogel.",
    q1: "Welches ist Partizip I?",
    a1: "laufend",
    b1: "gelaufen",
    c1: "laufen",
    d1: "läuft",

    title2: "Partizip II",
    text2: "Partizip II (Partizip Perfekt) ist die dritte Form des Verbs (ge...t oder ge...en). Es wird für Perfekt und Passiv verwendet. Beispiel: kaufen → gekauft.",
    q2: "Partizip II von 'essen'?",
    a2: "gegessen",
    b2: "essend",
    c2: "ess",
    d2: "isst",

    title3: "Plusquamperfekt",
    text3: "Das Plusquamperfekt (Vorvergangenheit) drückt aus, dass etwas noch früher passiert ist. Bildung: hatte/war + Partizip II. Beispiel: Ich hatte ein Buch gelesen.",
    q3: "Welcher Satz ist Plusquamperfekt?",
    a3: "Sie hatte das Bild gemalt.",
    b3: "Sie malt das Bild.",
    c3: "Sie malte das Bild.",
    d3: "Sie hat das Bild gemalt.",

    title4: "Partizipien in Sätzen",
    text4: "Partizipien als Attribute: Das laufende Kind. Partizipialgruppen: Die Vögel, laut singend, fliegen fort.",
    q4: "Welcher Satz hat ein Partizip als Attribut?",
    a4: "Das singende Kind spielt.",
    b4: "Das Kind singt und spielt.",
    c4: "Das Kind singend spielen.",
    d4: "Das Kind hat gesungen.",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Partizipien und Plusquamperfekt!",
    q5a: "Partizip I von 'tanzen'?",
    a5a: "tanzend",
    b5a: "getanzt",
    c5a: "tanzen",
    d5a: "tanzt",
    q5b: "Plusquamperfekt von 'schreiben'?",
    a5b: "Ich hatte geschrieben.",
    b5b: "Ich schreibe.",
    c5b: "Ich habe geschrieben.",
    d5b: "Ich schrieb.",
    q5c: "Partizip II von 'bringen'?",
    a5c: "gebracht",
    b5c: "bringend",
    c5c: "bringen",
    d5c: "bringt",
  },
  en: {
    title1: "Participle I",
    text1: "Participle I (present participle) is formed from the infinitive + -d. It functions like an adjective. Example: sing → singing, singing birds.",
    q1: "Which is Participle I?",
    a1: "singing",
    b1: "sung",
    c1: "sing",
    d1: "sings",

    title2: "Participle II",
    text2: "Participle II (past participle) is the third form of the verb. It is used for perfect tense and passive. Example: buy → bought.",
    q2: "Participle II of 'eat'?",
    a2: "eaten",
    b2: "eating",
    c2: "eat",
    d2: "eats",

    title3: "Pluperfect",
    text3: "The pluperfect (past perfect) expresses that something happened even earlier. Formation: had + Participle II. Example: I had read a book.",
    q3: "Which sentence is pluperfect?",
    a3: "She had painted the picture.",
    b3: "She paints the picture.",
    c3: "She painted the picture.",
    d3: "She has painted the picture.",

    title4: "Participles in Sentences",
    text4: "Participles as attributes: The running child. Participial phrases: The birds, singing loudly, fly away.",
    q4: "Which sentence has a participle as an attribute?",
    a4: "The singing child plays.",
    b4: "The child sings and plays.",
    c4: "The child singing play.",
    d4: "The child has sung.",

    title5: "Big Test",
    text5: "Test your knowledge of participles and pluperfect!",
    q5a: "Participle I of 'dance'?",
    a5a: "dancing",
    b5a: "danced",
    c5a: "dance",
    d5a: "dances",
    q5b: "Pluperfect of 'write'?",
    a5b: "I had written.",
    b5b: "I write.",
    c5b: "I have written.",
    d5b: "I wrote.",
    q5c: "Participle II of 'bring'?",
    a5c: "brought",
    b5c: "bringing",
    c5c: "bring",
    d5c: "brings",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">📜</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">📖</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">⏰</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">🔤</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">🏆</text>
        </svg>
      ),
      questions: [
        { question: "q5a", choices: ["a5a", "b5a", "c5a", "d5a"], answer: "a5a" },
        { question: "q5b", choices: ["a5b", "b5b", "c5b", "d5b"], answer: "a5b" },
        { question: "q5c", choices: ["a5c", "b5c", "c5c", "d5c"], answer: "a5c" },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function ParticipleExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
