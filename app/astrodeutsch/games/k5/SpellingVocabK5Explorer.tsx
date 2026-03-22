"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title1: "dass vs. das",
    text1: "'dass' ist eine Konjunktion (Satz-Einleiter). 'das' ist ein Pronomen oder Artikel. Beispiele: 'Ich weiß, dass...' (Konjunktion), 'Das Auto...' (Artikel), 'Das, was ich sehe...' (Pronomen).",
    q1: "Richtig: '___ Buch, das auf dem Tisch liegt, ist spannend'?",
    a1: "Das",
    b1: "Dass",
    c1: "Daz",
    d1: "Dasz",

    title2: "seid vs. seit",
    text2: "'seid' ist das Verb 'sein' (2. Person Plural). 'seit' zeigt die Zeit (Präposition). Beispiele: 'Ihr seid...' (Verb), 'Seit 5 Jahren...' (Präposition).",
    q2: "Richtig: 'Ihr ___ ___ langer Zeit hier'?",
    a2: "seid, seit",
    b2: "seit, seid",
    c2: "seit, seit",
    d2: "seid, seid",

    title3: "Wortfamilien",
    text3: "Wortfamilien sind verwandte Wörter mit gemeinsamer Wurzel. Beispiel: Wort, Wörterbuch, wörtlich, Wortschatz - alle mit Wurzel 'Wort'.",
    q3: "Welches Wort gehört zur Familie von 'Arbeit'?",
    a3: "Arbeiter",
    b3: "Wort",
    c3: "Freund",
    d3: "Sport",

    title4: "Komposita (Zusammengesetzte Wörter)",
    text4: "Komposita sind zwei oder mehr Wörter zusammengefügt. Beispiele: Haustür (Haus + Tür), Schultag (Schule + Tag), Freundin (Freund + in).",
    q4: "Welches Wort ist ein Kompositum?",
    a4: "Schulhof",
    b4: "Schule",
    c4: "schön",
    d4: "fahren",

    title5: "Große Prüfung",
    text5: "Teste dein Wissen über Rechtschreibung und Wortschatz!",
    q5a: "dass vs. das: 'Ich hoffe, ___ dir alles gut geht'?",
    a5a: "dass",
    b5a: "das",
    c5a: "dasz",
    d5a: "daß",
    q5b: "seid vs. seit: 'Wir sind ___ drei Jahren Freunde'?",
    a5b: "seit",
    b5b: "seid",
    c5b: "seyt",
    d5b: "synd",
    q5c: "Welches ist kein Kompositum?",
    a5c: "rot",
    b5c: "Farbstift",
    c5c: "Haarbürste",
    d5d: "Zahnbürste",
  },
  en: {
    title1: "that vs. the",
    text1: "'that' is a conjunction (sentence-introducer). 'the' is an article. Examples: 'I know that...' (conjunction), 'The car...' (article).",
    q1: "Correct: '___ book on the table is exciting'?",
    a1: "The",
    b1: "That",
    c1: "Thez",
    d1: "This",

    title2: "are vs. since",
    text2: "'are' is the verb 'to be' (2nd person plural). 'since' shows time (preposition). Examples: 'You are...' (verb), 'Since 5 years...' (preposition).",
    q2: "Correct: 'You ___ here ___ a long time'?",
    a2: "are, since",
    b2: "since, are",
    c2: "since, since",
    d2: "are, are",

    title3: "Word Families",
    text3: "Word families are related words with a common root. Example: word, dictionary, wording, vocabulary - all with root 'word'.",
    q3: "Which word belongs to the family of 'work'?",
    a3: "worker",
    b3: "play",
    c3: "friend",
    d3: "sport",

    title4: "Compounds (Compound Words)",
    text4: "Compounds are two or more words combined. Examples: classroom (class + room), birthday (birth + day), sunshine (sun + shine).",
    q4: "Which word is a compound?",
    a4: "playground",
    b4: "school",
    c4: "beautiful",
    d4: "run",

    title5: "Big Test",
    text5: "Test your knowledge of spelling and vocabulary!",
    q5a: "that vs. the: 'I hope ___ everything is fine with you'?",
    a5a: "that",
    b5a: "the",
    c5a: "thaz",
    d5a: "tha",
    q5b: "are vs. since: 'We ___ friends ___ three years'?",
    a5b: "are, since",
    b5b: "since, are",
    c5b: "have, since",
    d5b: "are, from",
    q5c: "Which is NOT a compound?",
    a5c: "red",
    b5c: "pencil case",
    c5c: "toothbrush",
    d5c: "classroom",
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
          <p style={{ fontSize: 11, color: '#166534', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>dass vs. das</p>
          <div style={{ fontSize: 13, color: '#1e293b', marginBottom: 4 }}>
            <p>Ich weiß, <span style={{ color: '#16a34a', fontWeight: 800 }}>dass</span> er kommt.</p>
            <p style={{ fontSize: 11, color: '#6b7280', marginBottom: 6 }}>Konjunktion</p>
          </div>
          <div style={{ fontSize: 13, color: '#1e293b' }}>
            <p><span style={{ color: '#2563eb', fontWeight: 800 }}>Das</span> Auto ist neu.</p>
            <p style={{ fontSize: 11, color: '#6b7280' }}>Artikel / Pronomen</p>
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
        <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#1e40af', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>seid vs. seit</p>
          <div style={{ fontSize: 13, color: '#1e293b', marginBottom: 4 }}>
            <p>Ihr <span style={{ color: '#2563eb', fontWeight: 800 }}>seid</span> hier.</p>
            <p style={{ fontSize: 11, color: '#6b7280', marginBottom: 6 }}>Verb (sein)</p>
          </div>
          <div style={{ fontSize: 13, color: '#1e293b' }}>
            <p><span style={{ color: '#16a34a', fontWeight: 800 }}>Seit</span> 5 Jahren...</p>
            <p style={{ fontSize: 11, color: '#6b7280' }}>Präposition (Zeit)</p>
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
        <div style={{ background: 'linear-gradient(135deg, #e9d5ff 0%, #f3e8ff 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#581c87', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Wortfamilie</p>
          <p style={{ fontSize: 12, color: '#1e293b', marginBottom: 2, fontWeight: 600 }}><span style={{ color: '#dc2626', fontWeight: 800 }}>Arbeit</span></p>
          <div style={{ fontSize: 12, color: '#1e293b', lineHeight: '1.4' }}>
            <div>• <span style={{ color: '#16a34a', fontWeight: 800 }}>Arbeiter</span></div>
            <div>• <span style={{ color: '#16a34a', fontWeight: 800 }}>arbeiten</span></div>
            <div>• <span style={{ color: '#16a34a', fontWeight: 800 }}>fleißig</span> (verwandt)</div>
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
        <div style={{ background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)', borderRadius: 16, padding: '16px 20px' }}>
          <p style={{ fontSize: 11, color: '#991b1b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Komposita</p>
          <div style={{ fontSize: 12, color: '#1e293b', marginBottom: 6 }}>
            <span style={{ color: '#dc2626', fontWeight: 800 }}>Haus</span> + <span style={{ color: '#2563eb', fontWeight: 800 }}>Tür</span> = <span style={{ color: '#16a34a', fontWeight: 800 }}>Haustür</span>
          </div>
          <div style={{ fontSize: 12, color: '#1e293b', marginBottom: 6 }}>
            <span style={{ color: '#dc2626', fontWeight: 800 }}>Schule</span> + <span style={{ color: '#2563eb', fontWeight: 800 }}>Tag</span> = <span style={{ color: '#16a34a', fontWeight: 800 }}>Schultag</span>
          </div>
          <p style={{ fontSize: 11, color: '#6b7280' }}>zwei Wörter zusammengefügt</p>
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
            <p>✓ <span style={{ color: '#16a34a', fontWeight: 800 }}>dass</span> = Konjunktion</p>
            <p>✓ <span style={{ color: '#2563eb', fontWeight: 800 }}>das</span> = Artikel</p>
            <p>✓ <span style={{ color: '#16a34a', fontWeight: 800 }}>Seit</span> = Zeit</p>
            <p>✓ <span style={{ color: '#2563eb', fontWeight: 800 }}>Seid</span> = sein</p>
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
export default function SpellingVocabK5Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
