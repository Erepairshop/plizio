"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Aktiv vs. Passiv",
    text1: "Aktiv: Das Subjekt tut etwas. 'Der Hund frisst das Fleisch.' Passiv: Das Subjekt wird etwas. 'Das Fleisch wird vom Hund gefressen.'",
    q1: "Welcher Satz ist aktiv?",
    a1: "Der Chef schreibt einen Brief.",
    b1: "Ein Brief wird vom Chef geschrieben.",
    c1: "Ein Brief wird geschrieben.",
    d1: "Das Schreiben wird gemacht.",

    title2: "Vorgangspassiv (werden + Partizip II)",
    text2: "Vorgangspassiv mit 'werden': Das Ereignis steht im Fokus. Beispiel: 'Das Auto wird repariert.' (Der Prozess ist wichtig.)",
    q2: "Richtig: 'Die Fenster ___ ___'?",
    a2: "werden, geputzt",
    b2: "sind, geputzt",
    c2: "werden, putzen",
    d2: "haben, geputzt",

    title3: "Zustandspassiv (sein + Partizip II)",
    text3: "Zustandspassiv mit 'sein': Der resultierende Zustand steht im Fokus. Beispiel: 'Das Fenster ist geputzt.' (Es ist sauber.)",
    q3: "Richtig: 'Das Haus ist ___'?",
    a3: "gebaut",
    b3: "baut",
    c3: "bauen",
    d3: "wird gebaut",

    title4: "Präposition 'von' im Passiv",
    text4: "Das Agens (Verursacher) wird mit 'von' + Dativ eingeleitet. Beispiel: 'Das Buch wurde von Maria gelesen.' 'von' bestimmt den Urheber.",
    q4: "Richtig: 'Das Spiel wurde ___ Kinder gewonnen'?",
    a4: "von den",
    b4: "durch die",
    c4: "gegen die",
    d4: "für die",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Aktiv und Passiv!",
    q5a: "Passiv von 'Der Lehrer erklärt die Aufgabe'?",
    a5a: "Die Aufgabe wird vom Lehrer erklärt.",
    b5a: "Die Aufgabe ist erklärt.",
    c5a: "Der Lehrer wird die Aufgabe erklären.",
    d5a: "Die Aufgabe erklärt den Lehrer.",
    q5b: "Vorgangspassiv oder Zustandspassiv: 'Das Fenster ist offen'?",
    a5b: "Zustandspassiv",
    b5b: "Vorgangspassiv",
    c5b: "Aktivsatz",
    d5b: "Infinitiv",
    q5c: "Agens im Passiv: 'Das Kunstwerk wurde ___ Künstler geschaffen'?",
    a5c: "vom",
    b5c: "durch den",
    c5c: "von dem",
    d5c: "fom",
  },
  en: {
    title1: "Active vs. Passive",
    text1: "Active: The subject does something. 'The dog eats the meat.' Passive: The subject experiences something. 'The meat is eaten by the dog.'",
    q1: "Which sentence is active?",
    a1: "The boss writes a letter.",
    b1: "A letter is written by the boss.",
    c1: "A letter is written.",
    d1: "The writing is done.",

    title2: "Process Passive (become + Past Participle)",
    text2: "Process passive with 'be': The event is in focus. Example: 'The car is being repaired.' (The process matters.)",
    q2: "Correct: 'The windows ___ ___'?",
    a2: "are, cleaned",
    b2: "have, cleaned",
    c2: "are, cleaning",
    d2: "have been, clean",

    title3: "State Passive (be + Past Participle)",
    text3: "State passive with 'be': The resulting state is in focus. Example: 'The window is clean.' (It's in a clean state.)",
    q3: "Correct: 'The house is ___'?",
    a3: "built",
    b3: "builds",
    c3: "building",
    d3: "is being built",

    title4: "Preposition 'by' in Passive",
    text4: "The agent (doer) is introduced with 'by'. Example: 'The book was read by Maria.' 'by' indicates the source.",
    q4: "Correct: 'The game was won ___ the children'?",
    a4: "by",
    b4: "through",
    c4: "against",
    d4: "for",

    title5: "Big Test",
    text5: "Test your knowledge of active and passive!",
    q5a: "Passive of 'The teacher explains the task'?",
    a5a: "The task is explained by the teacher.",
    b5a: "The task is explained.",
    c5a: "The teacher is explaining the task.",
    d5a: "The task explains the teacher.",
    q5b: "State passive or process passive: 'The window is open'?",
    a5b: "State passive",
    b5b: "Process passive",
    c5b: "Active",
    d5b: "Infinitive",
    q5c: "Agent in passive: 'The artwork was created ___ the artist'?",
    a5c: "by",
    b5c: "through",
    c5c: "from",
    d5c: "with",
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
        <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#166534', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Aktiv → Passiv</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 6 }}>
            <span style={{ color: '#dc2626' }}>Der Hund</span> beißt <span style={{ color: '#2563eb' }}>den Mann</span>
          </p>
          <p style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>↓</p>
          <p style={{ fontSize: 13, color: '#1e293b' }}>
            <span style={{ color: '#2563eb' }}>Der Mann</span> <span style={{ color: '#16a34a', fontWeight: 800 }}>wird</span> vom <span style={{ color: '#dc2626' }}>Hund</span> ge<strong>bissen</strong>
          </p>
        </div>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#1e40af', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Vorgangspassiv</p>
          <p style={{ fontSize: 14, color: '#1e293b', marginBottom: 6, fontWeight: 600 }}><span style={{ color: '#2563eb', fontWeight: 800 }}>werden</span> + Partizip II</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 2 }}>Das Auto</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 8 }}><span style={{ color: '#2563eb', fontWeight: 800 }}>wird</span> repariert</p>
          <p style={{ fontSize: 11, color: '#6b7280' }}>der Prozess ist wichtig</p>
        </div>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #fecaca 0%, #fca5a5 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#7f1d1d', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Zustandspassiv</p>
          <p style={{ fontSize: 14, color: '#1e293b', marginBottom: 6, fontWeight: 600 }}><span style={{ color: '#dc2626', fontWeight: 800 }}>sein</span> + Partizip II</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 2 }}>Das Fenster</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 8 }}><span style={{ color: '#dc2626', fontWeight: 800 }}>ist</span> geöffnet</p>
          <p style={{ fontSize: 11, color: '#6b7280' }}>der Zustand ist wichtig</p>
        </div>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #e9d5ff 0%, #f3e8ff 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#581c87', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Agens mit "von"</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 6 }}>Das Buch</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 6 }}>wurde <span style={{ color: '#dc2626', fontWeight: 800 }}>von</span> Maria</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 8 }}>gelesen</p>
          <p style={{ fontSize: 11, color: '#6b7280' }}>Verursacher + Dativ</p>
        </div>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#92400e', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Review</p>
          <div style={{ fontSize: 12, color: '#1e293b', lineHeight: '1.6' }}>
            <p>✓ Aktiv → Passiv</p>
            <p>✓ <span style={{ color: '#2563eb', fontWeight: 800 }}>werden</span> + P.II = Prozess</p>
            <p>✓ <span style={{ color: '#dc2626', fontWeight: 800 }}>sein</span> + P.II = Zustand</p>
            <p>✓ <span style={{ color: '#dc2626', fontWeight: 800 }}>von</span> + Dativ = Agens</p>
          </div>
        </div>
      ),
      questions: [
        { question: "q5a", choices: ["a5a", "b5a", "c5a", "d5a"], answer: "a5a" },
        { question: "q5b", choices: ["a5b", "b5b", "c5b", "d5b"], answer: "a5b" },
        { question: "q5c", choices: ["a5c", "b5c", "c5c", "d5c"], answer: "a5c" },
      ],
    },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function PassiveK5Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
