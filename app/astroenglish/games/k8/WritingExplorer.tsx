"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Voice in Writing", tx1: "Author's PERSONALITY in writing. Strong voice = readers hear the author's thoughts. Your voice is UNIQUE—use it! Don't copy others.",
    q1: "Which has a strong personal voice?", a1: "Writing is good for learning", b1: "Every day I wake up and wish I could fly—not in dreams, but actually soar", c1: "One should write often", d1: "Writing improves skill",
    t2: "Choosing Audience", tx2: "Who are you writing for? Teacher = formal. Friend = casual. Blog = engaging. Purpose changes EVERYTHING. Know your reader!",
    q2: "What's the BEST approach?", a2: "Write the same way for everyone", b2: "Match writing style to your audience", c2: "Always be formal", d2: "Always be casual",
    t3: "Purpose Affects Style", tx3: "INFORM = clear facts. PERSUADE = convince. ENTERTAIN = engage. INSPIRE = motivate. Your PURPOSE shapes word choice, tone, structure!",
    q3: "Which is PERSUASIVE?", a3: "Homework takes time and effort", b3: "Homework teaches responsibility, builds discipline, and prepares you for success—do it!", c3: "Many students do homework", d3: "Homework exists in schools",
    t4: "Revising & Editing", tx4: "FIRST draft = messy! Revise: big changes (move paragraphs). Edit: small fixes (grammar, spelling). Good writing = multiple drafts!",
    q4: "What's the correct order?", a4: "Edit, then revise", b4: "Revise (big), then edit (small)", c4: "Just write once", d4: "Only edit grammar",
    t5: "Crafting Meaningful Writing", tx5: "Combine voice + audience + purpose + revision. Write from your perspective. Say something worth reading. Be authentic!",
    q5: "Which shows strong craft?", a5: "I wrote a five-paragraph essay", b5: "I rewrote three times, matching each audience, using my voice to convey my unique perspective", c5: "I used big words", d5: "I wrote a lot",
  },
  de: {
    t1: "Stimme im Schreiben", tx1: "Die PERSÖNLICHKEIT des Autors. Starke Stimme = der Leser hört den Autor. Deine Stimme ist EINZIGARTIG—nutze sie!",
    q1: "Welcher hat eine starke persönliche Stimme?", a1: "Schreiben ist gut zum Lernen", b1: "Jeden Tag wache ich auf und wünsche mir, fliegen zu können—nicht im Traum, sondern wirklich", c1: "Man sollte oft schreiben", d1: "Schreiben verbessert Fähigkeit",
    t2: "Publikum wählen", tx2: "Für wen schreibst du? Lehrer = formal. Freund = locker. Blog = ansprechend.",
    q2: "Was ist der BESTE Ansatz?", a2: "Schreibe für alle gleich", b2: "Passe Stil an dein Publikum an", c2: "Sei immer formal", d2: "Sei immer locker",
    t3: "Zweck formt Stil", tx3: "INFORMIEREN = klare Fakten. ÜBERZEUG = überreden. UNTERHALTEN = engagieren.",
    q3: "Welcher ist ÜBERZEUGEND?", a3: "Hausaufgaben brauchen Zeit und Mühe", b3: "Hausaufgaben lehren Verantwortung, bauen Disziplin auf, und bereiten auf Erfolg vor—mach sie!", c3: "Viele Schüler machen Hausaufgaben", d3: "Hausaufgaben existieren in Schulen",
    t4: "Überarbeiten & Editieren", tx4: "ERSTE Fassung = chaotisch! Überarbeitung: große Änderungen. Editieren: kleine Fixes.",
    q4: "Was ist die richtige Reihenfolge?", a4: "Editieren, dann überarbeiten", b4: "Überarbeiten (groß), dann editieren (klein)", c4: "Nur einmal schreiben", d4: "Nur Grammatik editieren",
    t5: "Sinnvolles Schreiben", tx5: "Kombiniere Stimme + Publikum + Zweck + Überarbeitung. Schreibe aus deiner Perspektive. Sag etwas Wertvolles!",
    q5: "Welcher zeigt starkes Handwerk?", a5: "Ich schrieb einen fünf-Absatz-Aufsatz", b5: "Ich schrieb dreimal um, passte jedes Publikum an, nutzte meine Stimme", c5: "Ich nutzte große Wörter", d5: "Ich schrieb viel",
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
          <text x="120" y="60" textAnchor="middle" fontSize="13" fill="#a855f7">YOUR</text>
          <rect x="40" y="70" width="160" height="40" rx="4" fill="#9333ea" opacity="0.3"/>
          <text x="120" y="98" textAnchor="middle" fontSize="12" fill="#e9d5ff">Unique Voice</text>
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
          <text x="60" y="70" textAnchor="middle" fontSize="11" fill="#93c5fd">Teacher</text>
          <circle cx="60" cy="90" r="12" fill="#60a5fa" opacity="0.5"/>
          <path d="M72,90 L108,90" stroke="#0ea5e9" strokeWidth="2"/>
          <text x="180" y="70" textAnchor="middle" fontSize="11" fill="#93c5fd">Friend</text>
          <circle cx="180" cy="90" r="12" fill="#60a5fa" opacity="0.5"/>
          <text x="120" y="135" textAnchor="middle" fontSize="10" fill="#bfdbfe">Adjust Style</text>
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
          <text x="50" y="50" textAnchor="middle" fontSize="10" fill="#d1d5db">Inform</text>
          <circle cx="50" cy="70" r="10" fill="#10b981" opacity="0.5"/>
          <text x="120" y="50" textAnchor="middle" fontSize="10" fill="#d1d5db">Persuade</text>
          <circle cx="120" cy="70" r="10" fill="#f97316" opacity="0.5"/>
          <text x="190" y="50" textAnchor="middle" fontSize="10" fill="#d1d5db">Entertain</text>
          <circle cx="190" cy="70" r="10" fill="#60a5fa" opacity="0.5"/>
          <text x="85" y="130" textAnchor="middle" fontSize="10" fill="#a7f3d0">Purpose Shapes Style</text>
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
          <text x="60" y="50" textAnchor="middle" fontSize="11" fill="#cbd5e1">1. Draft</text>
          <rect x="35" y="60" width="50" height="30" rx="3" fill="#f97316" opacity="0.4"/>
          <path d="M85,75 L125,75" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="160" y="50" textAnchor="middle" fontSize="11" fill="#cbd5e1">2. Revise</text>
          <rect x="135" y="60" width="50" height="30" rx="3" fill="#10b981" opacity="0.5"/>
          <path d="M185,75 L215,75" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="120" y="110" textAnchor="middle" fontSize="11" fill="#cbd5e1">3. Edit</text>
          <rect x="95" y="120" width="50" height="30" rx="3" fill="#60a5fa" opacity="0.5"/>
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
          <rect x="20" y="45" width="200" height="80" rx="4" fill="#1e293b" opacity="0.6"/>
          <text x="130" y="70" textAnchor="start" fontSize="10" fill="#93c5fd">✓ Voice</text>
          <text x="130" y="90" textAnchor="start" fontSize="10" fill="#93c5fd">✓ Audience</text>
          <text x="130" y="110" textAnchor="start" fontSize="10" fill="#93c5fd">✓ Purpose</text>
          <text x="40" y="70" textAnchor="start" fontSize="10" fill="#93c5fd">✓ Authentic</text>
          <text x="40" y="90" textAnchor="start" fontSize="10" fill="#93c5fd">✓ Revised</text>
          <text x="40" y="110" textAnchor="start" fontSize="10" fill="#93c5fd">✓ Meaningful</text>
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

export default function WritingExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
