"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Dangling Modifiers", tx1: "A verbal phrase doesn't clearly modify intended noun. WRONG: 'Singing loudly, the walls shook.' (walls don't sing!) FIX: 'Singing loudly, Maria made the walls shake.'",
    q1: "Which has NO dangling modifier?", a1: "Running fast, the bus almost hit me", b1: "After finishing work, my exhaustion disappeared", c1: "Watching TV, the pizza was eaten", d1: "Painting the house, the time flew",
    t2: "Absolute Phrases Advanced", tx2: "Independent noun phrase with verbal. 'Her homework finished, Sarah watched TV.' 'All options exhausted, we surrendered.' NO subject connection needed!",
    q2: "Which is an absolute phrase?", a2: "Although tired, he ran", b2: "To run away quickly", c2: "The sun setting, night fell", d2: "She ran while tired",
    t3: "Misplaced Modifiers", tx3: "Modifier is placed awkwardly far from word it modifies. WRONG: 'I saw the dog on my walk.' (dog on walk?) FIX: 'On my walk, I saw the dog.'",
    q3: "Which fixes the misplaced modifier?", a3: "Singing, the performer made the audience cry", b3: "I only have two dollars in my wallet", c3: "The teacher spoke to the student with confusion", d3: "The student with red hair received the award",
    t4: "Verbal Phrases Embedded", tx4: "Verbals can nest in complex sentences. 'To succeed, having practiced daily, he trusted his ability.' Multiple verbals create layers of meaning!",
    q4: "Which uses multiple verbals correctly?", a4: "Running and jumping were fun", b4: "To win requires practicing daily and having talent", c4: "He was running quickly", d4: "She ran then jumped",
    t5: "Verbal Mastery", tx5: "Control gerunds, participles, infinitives, and their phrases. Avoid danglers. Place modifiers near target nouns. Write sophisticated sentences!",
    q5: "Which is most sophisticated?", a5: "I like running", b5: "Running through the park, breathing heavily, I finally reached home", c5: "I was running through the park", d5: "The park has running paths",
  },
  de: {
    t1: "Hängende Modifizierer", tx1: "Ein Partizip-Ausdruck modifiziert nicht das beabsichtigte Nomen. FALSCH: 'Laut singend, bebten die Wände.'",
    q1: "Welcher hat KEINEN hängenden Modifizierer?", a1: "Schnell laufend, hätte mich der Bus fast getroffen", b1: "Nach Beendigung der Arbeit verschwand meine Erschöpfung", c1: "TV schauend, aß ich Pizza", d1: "Das Haus anstreichend, verging die Zeit",
    t2: "Absolute Phrasen Fortgeschritten", tx2: "Unabhängige Nominalphrase mit Partizip. 'Hausaufgaben fertig, schaute Sarah TV.'",
    q2: "Welche ist eine absolute Phrase?", a2: "Obwohl müde, lief er", b2: "Schnell weglaufen", c2: "Die Sonne setzend, fiel die Nacht ein", d2: "Sie lief während sie müde war",
    t3: "Fehlplatzierte Modifizierer", tx3: "Modifizierer ist ungünstig platziert. FALSCH: 'Während meines Spaziergangs sah ich den Hund.'",
    q3: "Welcher behebt den Modifizierer?", a3: "Singend machte der Performer das Publikum weinen", b3: "Ich habe nur zwei Dollar in meiner Geldbörse", c3: "Der Lehrer sprach mit dem Schüler mit Verwirrung", d3: "Der Schüler mit roten Haaren erhielt den Preis",
    t4: "Verbal-Phrasen Eingebettet", tx4: "Partizipien können in komplexen Sätzen verschachtelt sein.",
    q4: "Welcher nutzt mehrere Partizipien korrekt?", a4: "Laufen und springen waren Spaß", b4: "Um zu gewinnen braucht man tägliches Üben und Talent", c4: "Er lief schnell", d4: "Sie lief dann sprang",
    t5: "Partizipien-Meisterschaft", tx5: "Kontrolliere Partizipien, vermeide Fehler, platziere richtig.",
    q5: "Welcher ist am meisten sophisticated?", a5: "Ich mag Laufen", b5: "Durch den Park laufend, schwer atmend, erreichte ich endlich zu Hause", c5: "Ich lief durch den Park", d5: "Der Park hat Laufwege",
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
          <text x="60" y="80" textAnchor="middle" fontSize="24" fill="#a855f7">❌</text>
          <text x="60" y="120" textAnchor="middle" fontSize="10" fill="#c4b5fd">Dangling</text>
          <path d="M90,80 L150,80" stroke="#a855f7" strokeWidth="2"/>
          <text x="180" y="80" textAnchor="middle" fontSize="24" fill="#10b981">✓</text>
          <text x="180" y="120" textAnchor="middle" fontSize="10" fill="#86efac">Clear</text>
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
          <rect x="40" y="55" width="160" height="55" rx="4" fill="#6366f1" opacity="0.3"/>
          <text x="120" y="80" textAnchor="middle" fontSize="12" fill="#c7d2fe">Independent</text>
          <text x="120" y="100" textAnchor="middle" fontSize="12" fill="#c7d2fe">Noun + Verbal</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "c2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <circle cx="60" cy="80" r="18" fill="#f97316" opacity="0.4"/>
          <text x="60" y="85" textAnchor="middle" fontSize="10" fill="#fed7aa">Modifier</text>
          <text x="120" y="50" textAnchor="middle" fontSize="13" fill="#d1d5db">Far ✗</text>
          <path d="M120,60 L120,90" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <circle cx="150" cy="80" r="18" fill="#f97316" opacity="0.4"/>
          <text x="150" y="85" textAnchor="middle" fontSize="10" fill="#fed7aa">Noun</text>
          <text x="105" y="135" textAnchor="middle" fontSize="10" fill="#fca5a5">Place Next!</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "d3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2d3d"/>
          <text x="50" y="60" textAnchor="middle" fontSize="10" fill="#cbd5e1">Verbal 1</text>
          <circle cx="50" cy="80" r="12" fill="#60a5fa" opacity="0.5"/>
          <text x="120" y="60" textAnchor="middle" fontSize="10" fill="#cbd5e1">Verbal 2</text>
          <circle cx="120" cy="80" r="12" fill="#60a5fa" opacity="0.5"/>
          <text x="190" y="60" textAnchor="middle" fontSize="10" fill="#cbd5e1">Verbal 3</text>
          <circle cx="190" cy="80" r="12" fill="#60a5fa" opacity="0.5"/>
          <path d="M50,92 L120,92 L190,92" stroke="#93c5fd" strokeWidth="1" opacity="0.5"/>
          <text x="120" y="135" textAnchor="middle" fontSize="10" fill="#93c5fd">Sophisticated</text>
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
          <text x="120" y="55" textAnchor="middle" fontSize="13" fill="#cbd5e1">Master Verbals</text>
          <rect x="30" y="65" width="180" height="60" rx="4" fill="#1e293b" opacity="0.7"/>
          <text x="50" y="90" textAnchor="start" fontSize="9" fill="#93c5fd">✓ No danglers</text>
          <text x="50" y="110" textAnchor="start" fontSize="9" fill="#93c5fd">✓ Clear placement</text>
          <text x="140" y="90" textAnchor="start" fontSize="9" fill="#93c5fd">✓ Sophisticated</text>
          <text x="140" y="110" textAnchor="start" fontSize="9" fill="#93c5fd">✓ Layered meaning</text>
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

export default function VerbalK8Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
