"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Komma bei Aufzählungen",
    text1: "Wir setzen Kommas zwischen aufgezählte Wörter. Vor dem 'und' kommt KEIN Komma. Beispiel: 'Maria, Peter und Anna gehen ins Kino.'",
    q1: "Richtig: 'Ich kaufe Äpfel, Bananen ___ Orangen.'?",
    a1: "und",
    b1: ", und",
    c1: "; und",
    d1: ": und",

    title2: "Komma bei Nebensätzen",
    text2: "Wir setzen Kommas vor Nebensätze (mit Konjunktionen wie: weil, dass, wenn, obwohl, nachdem). Beispiel: 'Ich gehe ins Kino, weil der Film interessant ist.'",
    q2: "Richtig: 'Er schläft schon, ___ es noch früh ist'?",
    a2: "obwohl",
    b2: "und",
    c2: "sondern",
    d2: "aber",

    title3: "Direkte Rede",
    text3: "Direkte Rede: Wir schreiben Großbuchstaben im Anführungszeichen. Ein Komma trennt den Satz vom Redeverb. Beispiel: 'Maria sagt: \"Ich bin müde.\"'",
    q3: "Richtig: ___ Maria: \"Ich liebe Sport.\"?",
    a3: "\"Ich liebe Sport,\" sagt",
    b3: "\"Ich liebe Sport.\" sagt",
    c3: "Ich liebe Sport sagt",
    d3: "sagt: Ich liebe Sport",

    title4: "Apostroph",
    text4: "Der Apostroph zeigt den Wegfall von Buchstaben. Beispiele: 's statt 'das' = 's. Aber: Es gibt KEINE deutschen Genitive mit Apostroph (nicht Maria's)!",
    q4: "Wo ist der Apostroph richtig?",
    a4: "Es ist 'ne gute Idee",
    b4: "Hans' Buch",
    c4: "Maria's Tasche",
    d4: "Das is' falsch",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Zeichensetzung!",
    q5a: "Komma bei Aufzählung: 'Tisch, Stuhl ___ Bett'?",
    a5a: "und",
    b5a: ", und",
    c5a: "; und",
    d5a: "- und",
    q5b: "Richtig: 'Komm ___ ich dir alles zeige'?",
    a5b: ", damit",
    b5b: "damit",
    c5b: ", wenn",
    d5b: "; damit",
    q5c: "Direkte Rede: Richtig?",
    a5c: "\"Hallo!\" sagt er.",
    b5c: "\"Hallo\" sagt er.",
    c5c: "Hallo,\" sagt er.",
    d5c: "sagt er: \"Hallo\"",
  },
  en: {
    title1: "Commas in Lists",
    text1: "We use commas between listed words. Before 'and' there is NO comma. Example: 'Maria, Peter and Anna go to the cinema.'",
    q1: "Correct: 'I buy apples, bananas ___ oranges.'?",
    a1: "and",
    b1: ", and",
    c1: "; and",
    d1: ": and",

    title2: "Commas with Subordinate Clauses",
    text2: "We use commas before subordinate clauses (with conjunctions like: because, that, if, although, after). Example: 'I go to the cinema because the movie is interesting.'",
    q2: "Correct: 'He sleeps already, ___ it is still early'?",
    a2: "although",
    b2: "and",
    c2: "but",
    d2: "or",

    title3: "Direct Speech",
    text3: "Direct speech: We write capital letters inside quotation marks. A comma separates the sentence from the speech verb. Example: 'Maria says: \"I am tired.\"'",
    q3: "Correct: ___ Maria: \"I love sports.\"?",
    a3: "\"I love sports,\" says",
    b3: "\"I love sports.\" says",
    c3: "I love sports says",
    d3: "says: I love sports",

    title4: "Apostrophe",
    text4: "The apostrophe shows omitted letters. Examples: 'tis for 'it is'. But: There are NO English possessives with apostrophe after 's' for plural (not apples')!",
    q4: "Where is the apostrophe correct?",
    a4: "It's a good idea",
    b4: "Johns' book",
    c4: "Books'",
    d4: "Dont'",

    title5: "Big Test",
    text5: "Test your knowledge of punctuation!",
    q5a: "Comma in list: 'table, chair ___ bed'?",
    a5a: "and",
    b5a: ", and",
    c5a: "; and",
    d5a: "- and",
    q5b: "Correct: 'Come ___ I show you everything'?",
    a5b: ", so",
    b5b: "so",
    c5b: ", if",
    d5b: "; so",
    q5c: "Direct speech: Correct?",
    a5c: "\"Hello!\" he said.",
    b5c: "\"Hello\" he said.",
    c5c: "Hello,\" he said.",
    d5c: "he said: \"Hello\"",
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
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Aufzählung</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: '#1e293b', fontWeight: 600 }}>
            <div>Äpfel<span style={{ color: '#ef4444', fontWeight: 800 }}>{","}</span> Birnen<span style={{ color: '#ef4444', fontWeight: 800 }}>{","}</span></div>
            <div>und Bananen</div>
            <div style={{ marginTop: 4, fontSize: 11, color: '#475569' }}>Kein Komma vor «und»!</div>
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
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Nebensätze</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, color: '#1e293b', fontWeight: 600 }}>
            <div>Ich gehe ins Kino<span style={{ color: '#ef4444', fontWeight: 800 }}>,</span></div>
            <div>weil der Film interessant ist<span style={{ color: '#10b981', fontWeight: 800 }}>.</span></div>
            <div style={{ marginTop: 4, fontSize: 10, color: '#475569' }}>Komma VOR der Konjunktion!</div>
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
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Direkte Rede</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, color: '#1e293b', fontWeight: 600 }}>
            <div><span style={{ color: '#3b82f6', fontWeight: 800 }}>«</span>Komm her<span style={{ color: '#ef4444', fontWeight: 800 }}>!</span><span style={{ color: '#3b82f6', fontWeight: 800 }}>»</span></div>
            <div><span style={{ color: '#ef4444', fontWeight: 800 }}>{","}</span> sagte er<span style={{ color: '#10b981', fontWeight: 800 }}>.</span></div>
            <div style={{ marginTop: 4, fontSize: 10, color: '#475569' }}>Großbuchstaben & Komma</div>
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
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Apostroph</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#1e293b', fontWeight: 600 }}>
            <div style={{ color: '#10b981' }}>✓ Es ist<span style={{ color: '#ef4444' }}>&#39;</span>ne gute Idee</div>
            <div style={{ color: '#ef4444' }}>✗ Maria<span style={{ color: '#ef4444' }}>&#39;</span>s Tasche</div>
            <div style={{ marginTop: 4, fontSize: 10, color: '#475569' }}>Nur für fehlende Buchstaben!</div>
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
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Alle Zeichen</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12, color: '#1e293b', fontWeight: 600, textAlign: 'center' }}>
            <div style={{ background: '#3b82f6', borderRadius: 8, padding: 8, color: '#ffffff' }}>Komma ,</div>
            <div style={{ background: '#8b5cf6', borderRadius: 8, padding: 8, color: '#ffffff' }}>Punkt .</div>
            <div style={{ background: '#10b981', borderRadius: 8, padding: 8, color: '#ffffff' }}>Anführungszeichen</div>
            <div style={{ background: '#f59e0b', borderRadius: 8, padding: 8, color: '#ffffff' }}>Apostroph &#39;</div>
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
export default function PunctuationK5Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
