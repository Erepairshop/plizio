"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Adjektive & Pronomen",
    text1: "Adjektive beschreiben Eigenschaften (groß, schnell). Pronomen ersetzen Nomen (ich, du, unser). Beide ändern ihre Form nach Kasus.",
    q1: "Komparativ von 'schnell'?",
    a1: "schneller",
    b1: "schnellst",
    c1: "mehr schnell",
    d1: "schnellem",

    title2: "Präpositionen & Konjunktionen",
    text2: "Präpositionen zeigen räumliche Beziehungen (in, auf, bei). Konjunktionen verbinden Sätze (und, weil, dass). Präpositionen brauchen Kasus.",
    q2: "Welche ist eine reine Dativ-Präposition?",
    a2: "mit",
    b2: "in",
    c2: "auf",
    d2: "durch",

    title3: "Satzglieder & Wortstellung",
    text3: "Subjekt (Wer?), Prädikat (Verb), Objekt (Wen/Was/Wem?), Adverbiale. Die Wortstellung zeigt Sinn: Hauptsatz vs. Nebensatz.",
    q3: "Subjekt in 'Die Katze schläft'?",
    a3: "Die Katze",
    b3: "schläft",
    c3: "Der Schlaf",
    d3: "Die",

    title4: "Partizipien & Passiv",
    text4: "Partizip I (-end) und Partizip II (-t/-en) sind Verbformen. Passiv: werden + Partizip II (Vorgangspassiv) oder sein + Partizip II (Zustandspassiv).",
    q4: "Partizip II von 'sehen'?",
    a4: "gesehen",
    b4: "sehend",
    c4: "sehe",
    d4: "gezehnt",

    title5: "Große Finale-Prüfung",
    text5: "Teste dein komplettes Deutschwissen der Klasse 5!",
    q5a: "Welches Pronomen ersetzt 'die Frau'?",
    a5a: "sie",
    b5a: "er",
    c5a: "es",
    d5a: "du",
    q5b: "Richtiges Passiv: 'Das Fenster wird ___'?",
    a5b: "geöffnet",
    b5b: "öffnend",
    c5b: "geöffnenden",
    d5b: "öffnet",
    q5c: "Richtiger Kasus nach 'mit': 'Ich spiele ___ meinem Freund'?",
    a5c: "mit",
    b5c: "mit dem",
    c5c: "mit meinem",
    d5d: "mit meinen",
  },
  en: {
    title1: "Adjectives & Pronouns",
    text1: "Adjectives describe properties (big, fast). Pronouns replace nouns (I, you, our). Both change form by case.",
    q1: "Comparative of 'fast'?",
    a1: "faster",
    b1: "fastest",
    c1: "more fast",
    d1: "fastly",

    title2: "Prepositions & Conjunctions",
    text2: "Prepositions show relationships (in, on, at, by). Conjunctions connect sentences (and, because, that). Prepositions require cases.",
    q2: "Which is a pure dative preposition?",
    a2: "with",
    b2: "in",
    c2: "on",
    d2: "through",

    title3: "Sentence Parts & Word Order",
    text3: "Subject (Who?), Predicate (Verb), Object (Whom/What/To whom?), Adverbial. Word order shows meaning: main clause vs. subordinate clause.",
    q3: "Subject in 'The cat sleeps'?",
    a3: "The cat",
    b3: "sleeps",
    c3: "The sleep",
    d3: "The",

    title4: "Participles & Passive",
    text4: "Participle I (-ing) and Participle II (-ed/-en) are verb forms. Passive: be + Participle II (process) or be + Participle II (state).",
    q4: "Participle II of 'see'?",
    a4: "seen",
    b4: "seeing",
    c4: "sees",
    d4: "seeeth",

    title5: "Big Final Test",
    text5: "Test your complete German knowledge of Grade 5!",
    q5a: "Which pronoun replaces 'the woman'?",
    a5a: "she",
    b5a: "he",
    c5a: "it",
    d5a: "you",
    q5b: "Correct passive: 'The window is ___'?",
    a5b: "opened",
    b5b: "opening",
    c5b: "opens",
    d5d: "open",
    q5c: "Correct case after 'with': 'I play ___ my friend'?",
    a5c: "with",
    b5c: "with the",
    c5c: "with my",
    d5d: "with mine",
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
          <p style={{ fontSize: 11, color: '#92400e', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Adjektive</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 6 }}>groß, schnell, schön</p>
          <p style={{ fontSize: 13, color: '#1e293b', marginBottom: 6, fontWeight: 600 }}>Positiv: <span style={{ color: '#16a34a' }}>schnell</span></p>
          <p style={{ fontSize: 13, color: '#1e293b' }}>Komparativ: <span style={{ color: '#16a34a' }}>schneller</span></p>
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
          <p style={{ fontSize: 11, color: '#1e40af', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Präpositionen</p>
          <div style={{ fontSize: 12, color: '#1e293b', lineHeight: '1.6' }}>
            <p><span style={{ color: '#2563eb', fontWeight: 800 }}>in</span>, <span style={{ color: '#2563eb', fontWeight: 800 }}>auf</span>, <span style={{ color: '#2563eb', fontWeight: 800 }}>bei</span></p>
            <p style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>zeigen räumliche Beziehungen</p>
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
        <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#166534', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Satzglieder</p>
          <div style={{ fontSize: 12, color: '#1e293b', lineHeight: '1.6' }}>
            <p><span style={{ color: '#dc2626', fontWeight: 800 }}>Subj.</span> <span style={{ color: '#2563eb', fontWeight: 800 }}>Präd.</span> <span style={{ color: '#16a34a', fontWeight: 800 }}>Obj.</span></p>
            <p style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>Wer? Was? Wem?</p>
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
        <div style={{ background: 'linear-gradient(135deg, #e9d5ff 0%, #f3e8ff 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#581c87', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Partizipien</p>
          <div style={{ fontSize: 12, color: '#1e293b', lineHeight: '1.6' }}>
            <p>P.I: -<span style={{ color: '#dc2626', fontWeight: 800 }}>d</span> (spielend)</p>
            <p>P.II: <span style={{ color: '#dc2626', fontWeight: 800 }}>ge-</span>...-<span style={{ color: '#dc2626', fontWeight: 800 }}>t</span> (gespielt)</p>
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
        <div style={{ background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#991b1b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Final Review</p>
          <div style={{ fontSize: 12, color: '#1e293b', lineHeight: '1.6' }}>
            <p>✓ Adjektive & Vergleich</p>
            <p>✓ Pronomen & Präpositionen</p>
            <p>✓ Partizipien & Passiv</p>
            <p>✓ Satzglieder & Wortstellung</p>
          </div>
        </div>
      ),
      questions: [
        { question: "q5a", choices: ["a5a", "b5a", "c5a", "d5a"], answer: "a5a" },
        { question: "q5b", choices: ["a5b", "b5b", "c5b", "d5b"], answer: "a5b" },
        { question: "q5c", choices: ["a5c", "b5c", "c5c", "d5c"], answer: "c5c" },
      ],
    },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function ReviewK5Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
