"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Subjekt und Prädikat",
    text1: "Das Subjekt ist das Satzglied, das die Frage 'Wer?' oder 'Was?' beantwortet. Das Prädikat ist das Verb. Beispiel: Der Hund bellt.",
    q1: "Was ist das Subjekt in 'Der Schüler liest ein Buch'?",
    a1: "Der Schüler",
    b1: "liest",
    c1: "ein Buch",
    d1: "Der",

    title2: "Direktes und indirektes Objekt",
    text2: "Das direkte Objekt (Akkusativ) beantwortet 'Wen/Was?'. Das indirekte Objekt (Dativ) beantwortet 'Wem?'.",
    q2: "Welches ist das direkte Objekt in 'Ich gebe meinem Freund einen Ball'?",
    a2: "einen Ball",
    b2: "meinem Freund",
    c2: "Ich",
    d2: "gebe",

    title3: "Adverbiale Bestimmung",
    text3: "Adverbiale Bestimmungen geben Informationen über Ort (wo?), Zeit (wann?), Art (wie?) oder Grund (warum?).",
    q3: "Welche Frage beantwortet 'morgen' in 'Morgen gehe ich zum Arzt'?",
    a3: "Wann?",
    b3: "Wo?",
    c3: "Wie?",
    d3: "Warum?",

    title4: "Satzglieder erkennen",
    text4: "Mit der Umstellprobe kannst du Satzglieder erkennen. Satzglieder können bewegt werden: 'Der Hund / bellt / laut.' → 'Laut / bellt / der Hund.'",
    q4: "Welches Satzglied kann man nicht bewegen?",
    a4: "Das Prädikat",
    b4: "Das Subjekt",
    c4: "Das Objekt",
    d4: "Die adverbiale Bestimmung",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Satzglieder!",
    q5a: "Subjekt in 'Die Lehrerin erklärt die Lektion'?",
    a5a: "Die Lehrerin",
    b5a: "erklärt",
    c5a: "die Lektion",
    d5a: "Die",
    q5b: "Indirektes Objekt in 'Der Vater zeigt dem Kind das Bilderbuch'?",
    a5b: "dem Kind",
    b5b: "das Bilderbuch",
    c5b: "der Vater",
    d5b: "zeigt",
    q5c: "Adverbiale Bestimmung (Zeit) in 'Am Sonntag spielen wir im Park'?",
    a5c: "Am Sonntag",
    b5c: "im Park",
    c5c: "spielen",
    d5c: "wir",
  },
  en: {
    title1: "Subject and Predicate",
    text1: "The subject is the part that answers 'Who?' or 'What?'. The predicate is the verb. Example: The dog barks.",
    q1: "What is the subject in 'The student reads a book'?",
    a1: "The student",
    b1: "reads",
    c1: "a book",
    d1: "The",

    title2: "Direct and Indirect Objects",
    text2: "Direct object (accusative) answers 'Whom/What?'. Indirect object (dative) answers 'To whom?'.",
    q2: "Which is the direct object in 'I give my friend a ball'?",
    a2: "a ball",
    b2: "my friend",
    c2: "I",
    d2: "give",

    title3: "Adverbial Phrase",
    text3: "Adverbial phrases give information about place (where?), time (when?), manner (how?), or reason (why?).",
    q3: "Which question does 'tomorrow' answer in 'Tomorrow I go to the doctor'?",
    a3: "When?",
    b3: "Where?",
    c3: "How?",
    d3: "Why?",

    title4: "Identifying Sentence Parts",
    text4: "You can identify sentence parts by rearranging: 'The dog / barks / loudly.' → 'Loudly / barks / the dog.'",
    q4: "Which part cannot be moved?",
    a4: "The predicate",
    b4: "The subject",
    c4: "The object",
    d4: "The adverbial phrase",

    title5: "Big Test",
    text5: "Test your knowledge of sentence parts!",
    q5a: "Subject in 'The teacher explains the lesson'?",
    a5a: "The teacher",
    b5a: "explains",
    c5a: "the lesson",
    d5a: "The",
    q5b: "Indirect object in 'The father shows the child the picture book'?",
    a5b: "the child",
    b5b: "the picture book",
    c5b: "the father",
    d5b: "shows",
    q5c: "Adverbial phrase (time) in 'On Sunday we play in the park'?",
    a5c: "On Sunday",
    b5c: "in the park",
    c5c: "play",
    d5c: "we",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">🔬</text>
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
          <text x="120" y="100" textAnchor="middle" fontSize="60">📦</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">🌍</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%)" }}>
          <rect x="20" y="20" width="200" height="120" rx="12" fill="white" opacity="0.9" />
          <text x="120" y="100" textAnchor="middle" fontSize="60">🔄</text>
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

export default function SentenceAnalysisExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
