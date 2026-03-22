"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Tone Analysis", tx1: "Tone is the ATTITUDE. Angry, sarcastic, joyful, sad, serious, playful. Read HOW the author feels, not just WHAT they write.",
    q1: "What tone does this have? 'Yeah, real smart.'", a1: "happy", b1: "sarcastic", c1: "confused", d1: "excited",
    t2: "Word Choice & Connotation", tx2: "Words carry feelings! 'Stubborn' vs 'determined'. 'Spend' vs 'invest'. Same meaning, different FEELINGS. Choose wisely!",
    q2: "Which has POSITIVE connotation?", a2: "She was nosy", b2: "She was curious", c2: "She was a busybody", d2: "She was intrusive",
    t3: "Author's Voice", tx3: "Author's UNIQUE STYLE. Sentence length, rhythm, vocabulary, repetition, dialogue. Like a fingerprint—no two are identical!",
    q3: "Which sounds formal & scientific?", a3: "Stuff happened yesterday", b3: "Neat things took place", c3: "The phenomenon occurred on the preceding day", d3: "Cool stuff went down",
    t4: "Sentence Structure & Rhythm", tx4: "Long sentences = slow/thoughtful. Short sentences = fast/punchy. Varied = engaging. All same length = boring. Control the PACE!",
    q4: "Which creates suspense?", a4: "The door opened. There was a sound. It was loud.", b4: "The door slowly opened, revealing a loud sound inside", c4: "A loud sound came from inside the opening door", d4: "The opening of the door made a very loud sound indeed",
    t5: "Style Elements Combined", tx5: "Tone + word choice + sentence structure = AUTHOR'S VOICE. Analyze all together to understand author's purpose & effect.",
    q5: "Which analysis is COMPLETE?", a5: "The writing is good", b5: "The author uses short sentences (pace), sarcastic tone (attitude), and simple words (accessibility) to create urgency", c5: "There are many sentences", d5: "The author wrote this",
  },
  de: {
    t1: "Ton-Analyse", tx1: "Der Ton ist die EINSTELLUNG. Wütend, sarkastisch, freudig, traurig, ernst. Lese WIE sich der Autor fühlt.",
    q1: "Welcher Ton? 'Ja, sehr clever.'", a1: "glücklich", b1: "sarkastisch", c1: "verwirrt", d1: "aufgeregt",
    t2: "Wortschatz & Bedeutungsgehalt", tx2: "Wörter tragen Gefühle! 'Stur' vs 'entschlossen'. Andere Gefühle, gleiche Bedeutung.",
    q2: "Welches hat POSITIVE Bedeutung?", a2: "Sie war neugierig-penetrant", b2: "Sie war neugierig", c2: "Sie war eine Schnüfflerin", d2: "Sie war aufdringlich",
    t3: "Stimme des Autors", tx3: "Einzigartiger Stil des Autors. Satzlänge, Rhythmus, Vokabular, Wiederholung.",
    q3: "Welcher klingt formal & wissenschaftlich?", a3: "Sachen passiert gestern", b3: "Coole Sachen passierten", c3: "Das Phänomen trat am vorherigen Tag auf", d3: "Coole Sachen gingen down",
    t4: "Satzstruktur & Rhythmus", tx4: "Lange Sätze = langsam/nachdenklich. Kurze Sätze = schnell/prägnant. Variation = interessant.",
    q4: "Welcher erzeugt Spannung?", a4: "Die Tür öffnete sich. Es gab ein Geräusch. Es war laut.", b4: "Die Tür öffnete sich langsam, ein lautes Geräusch enthüllend", c4: "Ein lautes Geräusch kam von der sich öffnenden Tür", d4: "Das Öffnen der Tür machte ein sehr lautes Geräusch in der Tat",
    t5: "Still-Elemente kombiniert", tx5: "Ton + Wortschatz + Satzstruktur = STIMME DES AUTORS. Analysiere alles zusammen.",
    q5: "Welche Analyse ist VOLLSTÄNDIG?", a5: "Das Schreiben ist gut", b5: "Der Autor nutzt kurze Sätze (Tempo), sarkastischen Ton (Einstellung), einfache Wörter (Zugänglichkeit) um Dringlichkeit zu schaffen", c5: "Es gibt viele Sätze", d5: "Der Autor schrieb dies",
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
          <text x="120" y="60" textAnchor="middle" fontSize="14" fill="#a855f7">Tone</text>
          <text x="50" y="110" textAnchor="middle" fontSize="11" fill="#e9d5ff">Angry</text>
          <text x="120" y="110" textAnchor="middle" fontSize="11" fill="#e9d5ff">Happy</text>
          <text x="190" y="110" textAnchor="middle" fontSize="11" fill="#e9d5ff">Sarcastic</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f1f3a"/>
          <rect x="40" y="55" width="70" height="50" rx="4" fill="#ef4444" opacity="0.3"/>
          <text x="75" y="85" textAnchor="middle" fontSize="11" fill="#fee2e2">Negative</text>
          <path d="M110,80 L130,80" stroke="#60a5fa" strokeWidth="2"/>
          <rect x="130" y="55" width="70" height="50" rx="4" fill="#10b981" opacity="0.3"/>
          <text x="165" y="85" textAnchor="middle" fontSize="11" fill="#dcfce7">Positive</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <rect x="40" y="50" width="160" height="65" rx="4" fill="#10b981" opacity="0.2"/>
          <text x="120" y="75" textAnchor="middle" fontSize="12" fill="#a7f3d0">Author's Unique</text>
          <text x="120" y="95" textAnchor="middle" fontSize="12" fill="#a7f3d0">VOICE & FINGERPRINT</text>
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
          <line x1="40" y1="80" x2="200" y2="80" stroke="#60a5fa" strokeWidth="2"/>
          <text x="40" y="50" textAnchor="start" fontSize="11" fill="#93c5fd">Short = Fast</text>
          <text x="130" y="50" textAnchor="start" fontSize="11" fill="#93c5fd">Long = Slow</text>
          <text x="100" y="130" textAnchor="middle" fontSize="10" fill="#cbd5e1">Varies = Engaging</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f172a"/>
          <circle cx="60" cy="80" r="15" fill="#9333ea" opacity="0.5"/>
          <text x="60" y="85" textAnchor="middle" fontSize="8" fill="white">Tone</text>
          <circle cx="120" cy="80" r="15" fill="#f472b6" opacity="0.5"/>
          <text x="120" y="85" textAnchor="middle" fontSize="8" fill="white">Words</text>
          <circle cx="180" cy="80" r="15" fill="#60a5fa" opacity="0.5"/>
          <text x="180" y="85" textAnchor="middle" fontSize="8" fill="white">Structure</text>
          <path d="M60,95 L120,95 L180,95" stroke="#cbd5e1" strokeWidth="1" opacity="0.5"/>
          <text x="120" y="140" textAnchor="middle" fontSize="10" fill="#93c5fd">= Author's Voice</text>
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

export default function StyleExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
