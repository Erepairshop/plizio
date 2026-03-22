"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Partizip I (Partizip Präsens)",
    text1: "Partizip I: Infinitiv + -d. Beispiele: spielen → spielend, laufen → laufend. Partizip I funktioniert wie ein Adjektiv.",
    q1: "Richtig: 'Das ___ Kind spielt.'?",
    a1: "lachend",
    b1: "gelacht",
    c1: "lachen",
    d1: "gelachten",

    title2: "Partizip II (Partizip Perfekt)",
    text2: "Partizip II: ge- + Stamm + -t (schwach) oder -en (stark). Beispiele: spielen → gespielt, sprechen → gesprochen.",
    q2: "Partizip II von 'kaufen'?",
    a2: "gekauft",
    b2: "kauft",
    c2: "kaufend",
    d2: "gekauffet",

    title3: "Perfekt mit 'haben'",
    text3: "Perfekt: haben/sein + Partizip II. Mit 'haben': 'Ich habe ein Buch gelesen.' Die meisten Verben nutzen 'haben'.",
    q3: "Richtig: 'Sie ___ den Film ___'?",
    a3: "hat, angesehen",
    b3: "ist, angesehen",
    c3: "haben, ansehen",
    d3: "hat, ansehen",

    title4: "Plusquamperfekt",
    text4: "Plusquamperfekt zeigt die Vorvergangenheit: hatte/war + Partizip II. Beispiel: 'Bevor er ankam, hatte ich schon gegessen.'",
    q4: "Richtig: 'Er ___ das Buch ___, bevor ich kam'?",
    a4: "hatte, gelesen",
    b4: "hat, gelesen",
    c4: "ist, gelesen",
    d4: "hattest, gelesen",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Partizipien und Plusquamperfekt!",
    q5a: "Partizip I von 'singen'?",
    a5a: "singend",
    b5a: "gesungen",
    c5a: "singen",
    d5a: "singent",
    q5b: "Perfekt: 'fahren'?",
    a5b: "ist gefahren",
    b5b: "hat gefahren",
    c5b: "ist fahrend",
    d5b: "hattest gefahren",
    q5c: "Plusquamperfekt von 'schreiben'?",
    a5c: "hatte geschrieben",
    b5c: "hat geschrieben",
    c5c: "ist geschrieben",
    d5c: "hattest schreiben",
  },
  en: {
    title1: "Participle I (Present Participle)",
    text1: "Participle I: Base form + -ing. Examples: play → playing, run → running. Participle I functions like an adjective.",
    q1: "Correct: 'The ___ child plays.'?",
    a1: "laughing",
    b1: "laughed",
    c1: "laugh",
    d1: "laughingn",

    title2: "Participle II (Past Participle)",
    text2: "Participle II: Regular: -ed; Irregular: various forms. Examples: play → played, speak → spoken.",
    q2: "Participle II of 'buy'?",
    a2: "bought",
    b2: "buys",
    c2: "buying",
    d2: "buyed",

    title3: "Perfect with 'have'",
    text3: "Perfect: have/be + Participle II. With 'have': 'I have read a book.' Most verbs use 'have'.",
    q3: "Correct: 'She ___ the movie ___'?",
    a3: "has, watched",
    b3: "is, watched",
    c3: "have, watching",
    d3: "has, watching",

    title4: "Pluperfect",
    text4: "Pluperfect shows the past before past: had/was + Participle II. Example: 'Before he arrived, I had already eaten.'",
    q4: "Correct: 'He ___ the book ___, before I came'?",
    a4: "had, read",
    b4: "has, read",
    c4: "was, read",
    d4: "hadst, read",

    title5: "Big Test",
    text5: "Test your knowledge of participles and pluperfect!",
    q5a: "Participle I of 'sing'?",
    a5a: "singing",
    b5a: "sung",
    c5a: "sing",
    d5a: "singen",
    q5b: "Perfect of 'drive'?",
    a5b: "have driven",
    b5b: "has driven",
    c5b: "is driving",
    d5b: "had driven",
    q5c: "Pluperfect of 'write'?",
    a5c: "had written",
    b5c: "has written",
    c5c: "was written",
    d5c: "hast written",
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
        <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#92400e', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Partizip I</p>
          <p style={{ fontSize: 14, color: '#1e293b', marginBottom: 6, fontWeight: 600 }}>Infinitiv + <span style={{ color: '#dc2626', fontWeight: 800 }}>-d</span></p>
          <div style={{ fontSize: 13, color: '#1e293b', marginBottom: 8, lineHeight: '1.4' }}>
            <div>spiel<span style={{ color: '#dc2626', fontWeight: 800 }}>en</span> → spiel<span style={{ color: '#16a34a', fontWeight: 800 }}>end</span></div>
            <div>lauf<span style={{ color: '#dc2626', fontWeight: 800 }}>en</span> → lauf<span style={{ color: '#16a34a', fontWeight: 800 }}>end</span></div>
          </div>
          <p style={{ fontSize: 11, color: '#6b7280 ' }}>das <span style={{ color: '#16a34a', fontWeight: 800 }}>lachende</span> Kind</p>
        </div>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #e9d5ff 0%, #f3e8ff 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#581c87', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Partizip II</p>
          <p style={{ fontSize: 14, color: '#1e293b', marginBottom: 6, fontWeight: 600 }}><span style={{ color: '#dc2626', fontWeight: 800 }}>ge-</span> + Stamm + <span style={{ color: '#dc2626', fontWeight: 800 }}>-t</span></p>
          <div style={{ fontSize: 13, color: '#1e293b', marginBottom: 8, lineHeight: '1.4' }}>
            <div><span style={{ color: '#dc2626', fontWeight: 800 }}>ge</span>spiel<span style={{ color: '#16a34a', fontWeight: 800 }}>t</span></div>
            <div><span style={{ color: '#dc2626', fontWeight: 800 }}>ge</span>kauft</div>
          </div>
          <p style={{ fontSize: 11, color: '#6b7280' }}>schwache Verben</p>
        </div>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#1e40af', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Perfekt</p>
          <p style={{ fontSize: 14, color: '#1e293b', marginBottom: 6, fontWeight: 600 }}><span style={{ color: '#2563eb', fontWeight: 800 }}>haben</span> + Partizip II</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 2 }}>Ich <span style={{ color: '#2563eb', fontWeight: 800 }}>habe</span></p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 8 }}>ein Buch <span style={{ color: '#16a34a', fontWeight: 800 }}>gelesen</span></p>
          <p style={{ fontSize: 11, color: '#6b7280' }}>meiste Verben</p>
        </div>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#991b1b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Plusquamperfekt</p>
          <p style={{ fontSize: 14, color: '#1e293b', marginBottom: 6, fontWeight: 600 }}><span style={{ color: '#dc2626', fontWeight: 800 }}>hatte</span> + Partizip II</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 2 }}>Er <span style={{ color: '#dc2626', fontWeight: 800 }}>hatte</span></p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 8 }}>schon <span style={{ color: '#16a34a', fontWeight: 800 }}>gegessen</span></p>
          <p style={{ fontSize: 11, color: '#6b7280' }}>Vorvergangenheit</p>
        </div>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #fef08a 0%, #fef08a 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#854d0e', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Review</p>
          <div style={{ fontSize: 12, color: '#1e293b', lineHeight: '1.6' }}>
            <p>✓ Partizip I: -<span style={{ color: '#dc2626', fontWeight: 800 }}>d</span></p>
            <p>✓ Partizip II: <span style={{ color: '#dc2626', fontWeight: 800 }}>ge-</span>...<span style={{ color: '#dc2626', fontWeight: 800 }}>-t</span></p>
            <p>✓ Perfekt: <span style={{ color: '#2563eb', fontWeight: 800 }}>haben</span> + P.II</p>
            <p>✓ Plus.: <span style={{ color: '#dc2626', fontWeight: 800 }}>hatte</span> + P.II</p>
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
export default function ParticipleK5Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
