"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Wechselpräpositionen",
    text1: "Wechselpräpositionen ändern ihren Kasus: in, an, auf, unter, über, vor, hinter, neben, zwischen. Wo? = Dativ. Wohin? = Akkusativ.",
    q1: "Welcher Kasus folgt 'Das Buch liegt AUF dem Tisch' (Wo?)?",
    a1: "Dativ",
    b1: "Akkusativ",
    c1: "Genitiv",
    d1: "Nominativ",

    title2: "Präpositionen mit Dativ",
    text2: "Diese Präpositionen werden IMMER mit Dativ verwendet: mit, ohne, aus, von, zu, bei, seit.",
    q2: "Welche Präposition ist eine reine Dativ-Präposition?",
    a2: "mit",
    b2: "in",
    c2: "auf",
    d2: "an",

    title3: "Präpositionen mit Akkusativ",
    text3: "Diese Präpositionen werden IMMER mit Akkusativ verwendet: durch, für, gegen, ohne, um.",
    q3: "Welche Präposition ist eine reine Akkusativ-Präposition?",
    a3: "für",
    b3: "mit",
    c3: "zu",
    d3: "von",

    title4: "Konjunktionen",
    text4: "Konjunktionen verbinden Sätze: und, oder, denn, sondern (Koordination). Oder: weil, dass, ob, wenn, als (Subordination).",
    q4: "Welche Konjunktion subordiniert?",
    a4: "weil",
    b4: "und",
    c4: "oder",
    d4: "sondern",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Präpositionen und Konjunktionen!",
    q5a: "Richtig: 'Er wartet ___ mich'?",
    a5a: "auf mich",
    b5a: "zu mir",
    c5a: "durch mich",
    d5a: "für mich",
    q5b: "Welcher Kasus folgt 'nach' immer?",
    a5b: "Dativ",
    b5b: "Akkusativ",
    c5b: "Genitiv",
    d5b: "Nominativ",
    q5c: "Welche Konjunktion koordiniert?",
    a5c: "und",
    b5c: "weil",
    c5c: "ob",
    d5c: "wenn",
  },
  en: {
    title1: "Two-Way Prepositions",
    text1: "Two-way prepositions change their case: in, on, at, under, over, in front of, behind, next to, between. Where? = Dative. Where to? = Accusative.",
    q1: "Which case follows 'The book lies ON the table' (Where?)?",
    a1: "Dative",
    b1: "Accusative",
    c1: "Genitive",
    d1: "Nominative",

    title2: "Prepositions with Dative",
    text2: "These prepositions are ALWAYS used with dative: with, without, from, by, to, at, since.",
    q2: "Which preposition is a pure dative preposition?",
    a2: "with",
    b2: "in",
    c2: "on",
    d2: "at",

    title3: "Prepositions with Accusative",
    text3: "These prepositions are ALWAYS used with accusative: through, for, against, without, around.",
    q3: "Which preposition is a pure accusative preposition?",
    a3: "for",
    b3: "with",
    c3: "to",
    d3: "by",

    title4: "Conjunctions",
    text4: "Conjunctions connect sentences: and, or, because, but (coordination). Or: because, that, whether, if, when (subordination).",
    q4: "Which conjunction subordinates?",
    a4: "because",
    b4: "and",
    c4: "or",
    d4: "but",

    title5: "Big Test",
    text5: "Test your knowledge of prepositions and conjunctions!",
    q5a: "Correct: 'He waits ___ me'?",
    a5a: "for me",
    b5a: "to me",
    c5a: "through me",
    d5a: "by me",
    q5b: "Which case always follows 'after'?",
    a5b: "Dative",
    b5b: "Accusative",
    c5b: "Genitive",
    d5b: "Nominative",
    q5c: "Which conjunction coordinates?",
    a5c: "and",
    b5c: "because",
    c5c: "whether",
    d5c: "if",
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
        <div style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Wechselpräpositionen</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12, color: '#1e293b', fontWeight: 600 }}>
            <div style={{ color: '#3b82f6' }}>in, an, auf</div>
            <div style={{ color: '#8b5cf6' }}>über, unter, neben</div>
            <div style={{ color: '#10b981' }}>zwischen, vor, hinter</div>
            <div style={{ marginTop: 2, fontSize: 10, color: '#64748b' }}>= Dativ oder Akkusativ</div>
          </div>
        </div>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Dativ-Präpositionen</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#1e293b', fontWeight: 600 }}>
            <div>mit, ohne, aus, von, zu, bei, seit</div>
            <div style={{ marginTop: 4, fontSize: 11, background: '#8b5cf6', color: '#ffffff', borderRadius: 6, padding: '6px 10px', textAlign: 'center' }}>Immer Dativ!</div>
          </div>
        </div>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Akkusativ-Präpositionen</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#1e293b', fontWeight: 600 }}>
            <div>durch, für, gegen, ohne, um</div>
            <div style={{ marginTop: 4, fontSize: 11, background: '#3b82f6', color: '#ffffff', borderRadius: 6, padding: '6px 10px', textAlign: 'center' }}>Immer Akkusativ!</div>
          </div>
        </div>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Konjunktionen</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12, color: '#1e293b', fontWeight: 600 }}>
            <div style={{ background: '#3b82f6', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>und, oder, aber</div>
            <div style={{ background: '#8b5cf6', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>weil, dass, wenn</div>
          </div>
        </div>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Wiederholung</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12, color: '#1e293b', fontWeight: 600 }}>
            <div style={{ background: '#10b981', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Wo/Wohin?</div>
            <div style={{ background: '#f59e0b', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Dativ/Akk</div>
            <div style={{ background: '#3b82f6', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>mit/zu</div>
            <div style={{ background: '#8b5cf6', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Ketten</div>
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
export default function PrepositionExplorerK5({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
