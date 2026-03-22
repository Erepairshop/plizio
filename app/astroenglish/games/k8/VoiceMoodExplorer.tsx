"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Active vs Passive Voice", tx1: "ACTIVE: Subject does action. 'Maria wrote the book.' (strong!) PASSIVE: Action happens to subject. 'The book was written by Maria.' (weak, avoid!)",
    q1: "Which is active voice?", a1: "The cake was eaten by Tom", b1: "Tom ate the cake", c1: "The cake was delicious", d1: "Tom is eating",
    t2: "When Passive Is OK", tx2: "Use passive when: the DOER is unknown 'The window was broken' or emphasis on RECEIVER 'The president was elected by millions.'",
    q2: "When should you use passive?", a2: "To make writing sound fancy", b2: "When doer is unknown or receiver is important", c2: "Never, active is always better", d2: "To make sentences longer",
    t3: "Indicative Mood", tx3: "States facts & reality. 'I am happy.' 'She goes to school.' Most sentences are indicative. Just stating truth!",
    q3: "Which is indicative?", a3: "If I were rich, I'd travel", b3: "I was happy yesterday", c3: "I wish I were rich", d3: "If you finish, call me",
    t4: "Subjunctive Mood", tx4: "Expresses hypothetical, wishes, contrary-to-fact. 'If I were king...' 'I demand that she be honest.' Uses base verb form (were, be, go NOT goes).",
    q4: "Which uses subjunctive correctly?", a4: "If I was king, I would rule fairly", b4: "If I were king, I would rule fairly", c4: "I am king and I rule", d4: "I will be king soon",
    t5: "Imperative Mood", tx5: "Gives commands or requests. 'Sit down!' 'Please help me.' 'Don't touch that!' The subject (you) is IMPLIED, not stated.",
    q5: "Which is imperative?", a5: "You should clean your room", b5: "She cleans her room", c5: "Clean your room!", d5: "I clean my room",
  },
  de: {
    t1: "Aktiv vs Passiv", tx1: "AKTIV: Subjekt macht Aktion. 'Maria schrieb das Buch.' (stark!) PASSIV: Aktion geschieht mit Subjekt. 'Das Buch wurde von Maria geschrieben.' (schwach!)",
    q1: "Welcher ist Aktiv?", a1: "Der Kuchen wurde von Tom gegessen", b1: "Tom aß den Kuchen", c1: "Der Kuchen war köstlich", d1: "Tom isst",
    t2: "Wann Passiv OK ist", tx2: "Nutze Passiv wenn: der TÄTER unbekannt ist oder EMPFÄNGER wichtig ist.",
    q2: "Wann Passiv nutzen?", a2: "Um Schreiben fancy zu machen", b2: "Wenn Täter unbekannt oder Empfänger wichtig ist", c2: "Nie, Aktiv ist immer besser", d2: "Um Sätze länger zu machen",
    t3: "Indikativ", tx3: "Stellt Fakten & Realität dar. 'Ich bin glücklich.' 'Sie geht zur Schule.' Die meisten Sätze sind Indikativ.",
    q3: "Welcher ist Indikativ?", a3: "Wenn ich reich wäre, würde ich reisen", b3: "Ich war gestern glücklich", c3: "Ich wünsche, ich wäre reich", d3: "Wenn du fertig bist, rufe mich an",
    t4: "Konjunktiv", tx4: "Drückt hypothetisch, Wünsche, irreal aus. 'Wenn ich König wäre...' Nutzt Grundform.",
    q4: "Welcher nutzt Konjunktiv korrekt?", a4: "Wenn ich König war, würde ich fair regieren", b4: "Wenn ich König wäre, würde ich fair regieren", c4: "Ich bin König und regiere", d4: "Ich werde bald König",
    t5: "Imperativ", tx5: "Gibt Befehle oder Bitten. 'Sitz!' 'Bitte hilf mir.' Das Subjekt (du) ist impliziert.",
    q5: "Welcher ist Imperativ?", a5: "Du solltest dein Zimmer putzen", b5: "Sie putzt ihr Zimmer", c5: "Putz dein Zimmer!", d5: "Ich putze mein Zimmer",
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
          <circle cx="60" cy="80" r="20" fill="#10b981" opacity="0.5"/>
          <text x="60" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Subject</text>
          <path d="M80,80 L140,80" stroke="#34d399" strokeWidth="3" markerEnd="url(#arrowhead)"/>
          <circle cx="180" cy="80" r="20" fill="#fbbf24" opacity="0.5"/>
          <text x="180" y="85" textAnchor="middle" fontSize="10" fill="black" fontWeight="bold">Action</text>
          <text x="120" y="130" textAnchor="middle" fontSize="11" fill="#86efac">ACTIVE = Strong</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "b1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <text x="60" y="70" textAnchor="middle" fontSize="11" fill="#d1d5db">Doer Unknown</text>
          <circle cx="60" cy="90" r="12" fill="#10b981" opacity="0.5"/>
          <text x="120" y="70" textAnchor="middle" fontSize="11" fill="#d1d5db">Receiver Important</text>
          <circle cx="120" cy="90" r="12" fill="#10b981" opacity="0.5"/>
          <path d="M60,102 L120,102" stroke="#34d399" strokeWidth="1" opacity="0.5"/>
          <text x="90" y="135" textAnchor="middle" fontSize="10" fill="#a7f3d0">Use PASSIVE here</text>
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
          <rect x="40" y="55" width="160" height="55" rx="4" fill="#60a5fa" opacity="0.2"/>
          <text x="120" y="85" textAnchor="middle" fontSize="12" fill="#93c5fd">States Reality</text>
          <text x="120" y="105" textAnchor="middle" fontSize="12" fill="#93c5fd">& Facts</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "b3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2d3d"/>
          <text x="120" y="60" textAnchor="middle" fontSize="13" fill="#60a5fa">Hypothetical</text>
          <path d="M120,70 L120,90" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <rect x="30" y="100" width="180" height="35" rx="3" fill="#0ea5e9" opacity="0.2"/>
          <text x="120" y="125" textAnchor="middle" fontSize="11" fill="#93c5fd">Not Reality: 'If I were...'</text>
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
          <text x="120" y="60" textAnchor="middle" fontSize="28" fill="#fb7185">!</text>
          <text x="120" y="95" textAnchor="middle" fontSize="12" fill="#fbcfe8">COMMAND</text>
          <text x="120" y="125" textAnchor="middle" fontSize="10" fill="#f8bbd0">You is IMPLIED</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "c5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function VoiceMoodExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
