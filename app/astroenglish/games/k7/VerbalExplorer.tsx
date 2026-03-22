"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Gerunds", tx1: "Verbs ending in -ING used as NOUNS. 'Running is fun.' 'She loves swimming.' Gerunds can be subjects, objects, or follow prepositions.",
    q1: "Which word is a gerund?", a1: "He was running", b1: "Running in the park", c1: "Running makes me happy", d1: "She runs",
    t2: "Participles", tx2: "Verb forms ending in -ING or -ED used as ADJECTIVES. 'The running horse' (present). 'The finished project' (past). They describe nouns!",
    q2: "Which is a participle?", a2: "The student studies", b2: "The studying student", c2: "To study hard", d2: "She is studying",
    t3: "Infinitives", tx3: "Verb form: TO + base verb. 'To run, to sing, to dance.' Used as nouns, adjectives, or adverbs. 'I want to sleep.'",
    q3: "Which is an infinitive?", a3: "He ran fast", b3: "He was running", c3: "He wants to run", d3: "He runs every day",
    t4: "Dangling Modifiers", tx4: "A verbal phrase that doesn't clearly modify the intended noun. WRONG: 'Running through the park, the trees were beautiful.' (trees don't run!)",
    q4: "Which has NO dangling modifier?", a4: "Singing loudly, the concert was amazing", b4: "After finishing homework, I felt relieved", c4: "Driving to school, the weather changed", d4: "Walking into class, the quiz started",
    t5: "Verbal Phrases", tx5: "Groups of words: gerund phrase, participle phrase, infinitive phrase. 'Playing in the rain' is a gerund phrase. 'To write well' is an infinitive phrase.",
    q5: "Which is a verbal phrase?", a5: "The cat sleeps", b5: "Running around the field", c5: "She runs quickly", d5: "Run!",
  },
  de: {
    t1: "Gerundium", tx1: "Verben mit -ING als SUBSTANTIVE. 'Laufen ist Spaß.' 'Sie liebt Schwimmen.' Gerundien als Subjekte oder Objekte.",
    q1: "Welches Wort ist ein Gerundium?", a1: "Er lief", b1: "Im Park laufen", c1: "Laufen macht mir Spaß", d1: "Sie läuft",
    t2: "Partizipien", tx2: "Verbformen als ADJEKTIVE. 'Das laufende Pferd' (present). 'Das fertige Projekt' (past).",
    q2: "Welches ist ein Partizip?", a2: "Der Student studiert", b2: "Der studierende Student", c2: "Um hart zu studieren", d2: "Er studiert",
    t3: "Infinitive", tx3: "Verb-Form: ZU + Grundform. 'Zu laufen, zu singen, zu tanzen.'",
    q3: "Welches ist ein Infinitiv?", a3: "Er lief schnell", b3: "Er war am Laufen", c3: "Er will laufen", d3: "Er läuft täglich",
    t4: "Hängende Modifizierer", tx4: "Ein Partizip-Ausdruck, der nicht klar das beabsichtigte Nomen modifiziert. FALSCH: 'Im Park laufend, waren die Bäume schön.'",
    q4: "Welcher hat KEINEN hängenden Modifizierer?", a4: "Laut singend, war das Konzert toll", b4: "Nach den Hausaufgaben fühlte ich mich erleichtert", c4: "Zur Schule fahrend, änderte sich das Wetter", d4: "Ins Klassenzimmer gehend, begann das Quiz",
    t5: "Verbale Phrasen", tx5: "Wortgruppen: Gerundium-Phrase, Partizip-Phrase, Infinitiv-Phrase.",
    q5: "Welcher ist eine verbale Phrase?", a5: "Die Katze schläft", b5: "Um das Feld laufen", c5: "Sie läuft schnell", d5: "Lauf!",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "t1",
      infoText: "tx1",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1e1b4b"/>
          <text x="120" y="60" textAnchor="middle" fontSize="28" fill="#a855f7">-ing</text>
          <rect x="50" y="75" width="140" height="35" rx="4" fill="#9333ea" opacity="0.3"/>
          <text x="120" y="100" textAnchor="middle" fontSize="12" fill="#e9d5ff">Used as Noun</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "c1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <text x="60" y="70" textAnchor="middle" fontSize="11" fill="#d1d5db">-ING Participle</text>
          <rect x="30" y="75" width="60" height="35" rx="3" fill="#f97316" opacity="0.5"/>
          <text x="60" y="100" textAnchor="middle" fontSize="10" fill="#fed7aa">Active</text>
          <text x="180" y="70" textAnchor="middle" fontSize="11" fill="#d1d5db">-ED Participle</text>
          <rect x="150" y="75" width="60" height="35" rx="3" fill="#06b6d4" opacity="0.5"/>
          <text x="180" y="100" textAnchor="middle" fontSize="10" fill="#cffafe">Past</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "b2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f1f3a"/>
          <text x="120" y="60" textAnchor="middle" fontSize="24" fill="#38bdf8">to</text>
          <text x="120" y="95" textAnchor="middle" fontSize="13" fill="#e0f2fe">+ Base Verb</text>
          <text x="120" y="130" textAnchor="middle" fontSize="10" fill="#bfdbfe">to run, to sing, to dance</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "c3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2d3d"/>
          <circle cx="80" cy="80" r="25" fill="#ef4444" opacity="0.3"/>
          <text x="80" y="85" textAnchor="middle" fontSize="11" fill="#fee2e2">WRONG</text>
          <path d="M105,80 L135,80" stroke="#60a5fa" strokeWidth="2"/>
          <circle cx="160" cy="80" r="25" fill="#10b981" opacity="0.5"/>
          <text x="160" y="85" textAnchor="middle" fontSize="11" fill="#dcfce7">CLEAR</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "b4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f172a"/>
          <rect x="40" y="55" width="160" height="25" rx="4" fill="#6366f1" opacity="0.5"/>
          <text x="120" y="73" textAnchor="middle" fontSize="12" fill="#c7d2fe">Verbal Phrase</text>
          <text x="40" y="100" textAnchor="middle" fontSize="10" fill="#a5b4fc">Gerund: running</text>
          <text x="120" y="100" textAnchor="middle" fontSize="10" fill="#a5b4fc">Participle: passed</text>
          <text x="200" y="100" textAnchor="middle" fontSize="10" fill="#a5b4fc">Infinitive: to jump</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "b5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function VerbalExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
