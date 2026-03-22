"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "Subjekt & Prädikat",
    text1: "Das Subjekt antwortet auf 'Wer oder Was?'. Das Prädikat ist das Verb. Beispiel: 'Maria schläft.' Subjekt = Maria, Prädikat = schläft.",
    q1: "Welches ist das Subjekt: 'Der Hund bellt laut'?",
    a1: "Der Hund",
    b1: "bellt",
    c1: "laut",
    d1: "bellt laut",

    title2: "Objekte (Akkusativ & Dativ)",
    text2: "Das Akkusativ-Objekt: Wen/Was? Das Dativ-Objekt: Wem? Beispiel: 'Ich gebe DIR (Dativ) ein BUCH (Akkusativ)'.",
    q2: "Welches ist das Akkusativ-Objekt: 'Er kauft seiner Mutter einen Apfel'?",
    a2: "einen Apfel",
    b2: "seiner Mutter",
    c2: "kauft",
    d2: "Er",

    title3: "Adverbiale Bestimmungen",
    text3: "Adverbiale Bestimmungen geben Auskunft zu Zeit, Ort, Art oder Grund. Beispiele: täglich (Zeit), dort (Ort), schnell (Art), deshalb (Grund).",
    q3: "Welche adverbiale Bestimmung der Zeit ist richtig: 'Sie arbeitet ___'?",
    a3: "täglich",
    b3: "schnell",
    c3: "leise",
    d3: "zusammen",

    title4: "Wortstellung & Umstellprobe",
    text4: "Die Umstellprobe zeigt: Das Subjekt und Prädikat dürfen nicht zusammen umgestellt werden. Beispiel: 'Der Junge sieht den Film.' → 'Den Film sieht der Junge.'",
    q4: "Welche Umstellung ist FALSCH?",
    a4: "Sieht der Junge den Film?",
    b4: "Den Film sieht der Junge.",
    c4: "Der Junge den Film sieht.",
    d4: "Der Film wird vom Jungen gesehen.",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Satzglieder!",
    q5a: "Prädikat in 'Sie schlafen tief'?",
    a5a: "schlafen",
    b5a: "Sie",
    c5a: "tief",
    d5a: "schlafen tief",
    q5b: "Welches Objekt antwortet auf 'Wem?'?",
    a5b: "Dativ-Objekt",
    b5b: "Akkusativ-Objekt",
    c5b: "Präpositional-Objekt",
    d5b: "Subjekt",
    q5c: "Adverbiale Bestimmung der ART?",
    a5c: "schnell",
    b5c: "morgen",
    c5c: "dort",
    d5c: "weil",
  },
  en: {
    title1: "Subject & Predicate",
    text1: "The subject answers 'Who or What?'. The predicate is the verb. Example: 'Maria sleeps.' Subject = Maria, Predicate = sleeps.",
    q1: "Which is the subject: 'The dog barks loudly'?",
    a1: "The dog",
    b1: "barks",
    c1: "loudly",
    d1: "barks loudly",

    title2: "Objects (Accusative & Dative)",
    text2: "The accusative object: Whom/What? The dative object: To whom? Example: 'I give YOU (dative) a BOOK (accusative)'.",
    q2: "Which is the accusative object: 'He buys his mother an apple'?",
    a2: "an apple",
    b2: "his mother",
    c2: "buys",
    d2: "He",

    title3: "Adverbial Phrases",
    text3: "Adverbial phrases provide information about time, place, manner, or reason. Examples: daily (time), there (place), quickly (manner), therefore (reason).",
    q3: "Which adverbial phrase of time is correct: 'She works ___'?",
    a3: "daily",
    b3: "quickly",
    c3: "quietly",
    d3: "together",

    title4: "Word Order & Rearrangement Test",
    text4: "The rearrangement test shows: Subject and predicate cannot be moved together. Example: 'The boy sees the movie.' → 'The movie sees the boy' is wrong.",
    q4: "Which rearrangement is WRONG?",
    a4: "Sees the boy the movie?",
    b4: "The movie sees the boy.",
    c4: "The boy the movie sees.",
    d4: "The movie is seen by the boy.",

    title5: "Big Test",
    text5: "Test your knowledge of sentence parts!",
    q5a: "Predicate in 'They sleep deeply'?",
    a5a: "sleep",
    b5a: "They",
    c5a: "deeply",
    d5a: "sleep deeply",
    q5b: "Which object answers 'To whom?'?",
    a5b: "Dative object",
    b5b: "Accusative object",
    c5c: "Prepositional object",
    d5d: "Subject",
    q5c: "Adverbial phrase of MANNER?",
    a5c: "quickly",
    b5c: "tomorrow",
    c5c: "there",
    d5d: "because",
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
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Satzglieder</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, color: '#1e293b', fontWeight: 600 }}>
            <div style={{ background: '#3b82f6', color: '#ffffff', borderRadius: 8, padding: '6px 10px' }}>Der Hund</div>
            <div style={{ background: '#8b5cf6', color: '#ffffff', borderRadius: 8, padding: '6px 10px' }}>bellt</div>
            <div style={{ background: '#10b981', color: '#ffffff', borderRadius: 8, padding: '6px 10px' }}>laut</div>
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
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Objekte</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#1e293b', fontWeight: 600 }}>
            <div><span style={{ color: '#94a3b8' }}>Akkusativ:</span> <span style={{ color: '#3b82f6', fontWeight: 800 }}>Wen/Was?</span></div>
            <div><span style={{ color: '#94a3b8' }}>Dativ:</span> <span style={{ color: '#8b5cf6', fontWeight: 800 }}>Wem?</span></div>
            <div style={{ marginTop: 4, fontSize: 12, color: '#475569' }}>«Ich gebe DIR ein BUCH»</div>
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
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Adverbialbestimmungen</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12, color: '#1e293b', fontWeight: 600 }}>
            <div style={{ background: '#3b82f6', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Zeit</div>
            <div style={{ background: '#8b5cf6', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Ort</div>
            <div style={{ background: '#10b981', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Art</div>
            <div style={{ background: '#f59e0b', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Grund</div>
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
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Umstellprobe</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#1e293b', fontWeight: 600 }}>
            <div>«Der Junge sieht den Film»</div>
            <div style={{ color: '#10b981', borderRadius: 6, background: '#d1fae5', padding: '6px 10px' }}>«Den Film sieht der Junge»</div>
            <div style={{ fontSize: 10, color: '#475569' }}>Prädikat bleibt Position 2!</div>
          </div>
        </div>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "c4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => (
        <div style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Alle Satzteile</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 11, color: '#1e293b', fontWeight: 600 }}>
            <div style={{ background: '#3b82f6', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Subjekt</div>
            <div style={{ background: '#8b5cf6', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Prädikat</div>
            <div style={{ background: '#10b981', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Objekt</div>
            <div style={{ background: '#f59e0b', borderRadius: 8, padding: 8, color: '#ffffff', textAlign: 'center' }}>Adverbial</div>
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
export default function SentenceAnalysisK5Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
