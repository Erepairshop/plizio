"use client";
// CompoundWordExplorerK1 — Island i7: Wortbaumeister (Compound Words)
// Topics: 1) Compound words  2) Article of the last word  3) Capitalization rule

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="cwGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#cwGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-15" width="50" height="30" fill="#BAE6FD" rx="4" />
        <text x="-55" y="5" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Regen</text>
        
        <text x="-20" y="5" fontSize="18" fontWeight="bold" fill="#0284C7" textAnchor="middle">+</text>
        
        <rect x="-10" y="-15" width="50" height="30" fill="#7DD3FC" rx="4" />
        <text x="15" y="5" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">schirm</text>
        
        <path d="M 45,0 L 60,0" stroke="#0284C7" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="85" y="5" fontSize="24" textAnchor="middle">☂️</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="14" fontWeight="bold" fill="#166534" textAnchor="middle">das Haus + die Tür</text>
        <path d="M 0,-10 L 0,10" stroke="#15803D" strokeWidth="2" markerEnd="url(#arrow)" />
        <rect x="-40" y="20" width="80" height="25" fill="#BBF7D0" rx="4" />
        <text x="0" y="37" fontSize="14" fontWeight="black" fill="#166534" textAnchor="middle">die Haustür</text>
        
        {/* Highlight on 'die' */}
        <path d="M -20,42 L -10,42" stroke="#EF4444" strokeWidth="3" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="cwGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#cwGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="24" fontWeight="black" fill="#7C3AED" textAnchor="middle">
          <tspan fill="#EF4444">S</tspan>chneemann
        </text>
        {/* Arrow pointing to the capital S */}
        <line x1="-52" y1="-25" x2="-42" y2="-18" stroke="#EF4444" strokeWidth="2" />
        <text x="-52" y="-30" fontSize="18" textAnchor="middle">✅</text>
      </g>
    </svg>
  );
});

// ─── LABELS (4 languages) ────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wortbaumeister",

    // Topic 1
    t1_title: "Wörter zusammenbauen",
    t1_text: "Im Deutschen können wir aus zwei Nomen ein langes Wort machen. Das nennt man 'Komposita'. Zum Beispiel: Regen + Schirm = Regenschirm.",
    t1_b1: "Regen 🌧️ + Schirm ☂️ = Regenschirm",
    t1_b2: "Spiel 🎲 + Platz 🛝 = Spielplatz",
    t1_b3: "Haus 🏠 + Tier 🐶 = Haustier",
    t1_inst: "Baue die Wörter zusammen! Verbinde die passenden Hälften.",
    t1_h1: "Was schützt vor Regen? Der Schirm!",
    t1_h2: "Regen passt zu schirm. Spiel passt zu platz.",
    t1_l1: "Regen 🌧️", t1_r1: "schirm ☂️",
    t1_l2: "Spiel 🎲", t1_r2: "platz 🛝",
    t1_l3: "Haus 🏠", t1_r3: "tier 🐶",
    t1_q: "Was bedeutet 'Regenschirm'?",
    t1_q_a: "Etwas gegen den Regen", t1_q_b: "Ein Spielzeug", t1_q_c: "Ein Tier", t1_q_d: "Ein Haus",

    // Topic 2
    t2_title: "Der letzte Artikel gewinnt!",
    t2_text: "Wenn wir zwei Wörter zusammenbauen, welches 'der, die, das' bekommt das neue Wort? Ganz einfach: Das letzte Wort bestimmt den Artikel!",
    t2_b1: "das Haus + die Tür = DIE Haustür",
    t2_b2: "der Apfel + der Baum = DER Apfelbaum",
    t2_b3: "das Kind + das Zimmer = DAS Kinderzimmer",
    t2_inst: "Welchen Artikel hat das neue Wort? Sortiere sie in die Körbe!",
    t2_h1: "Schau auf den Artikel vom zweiten Wort.",
    t2_h2: "-tür (die) macht es zu 'die'. -baum (der) macht es zu 'der'.",
    t2_bucket_der: "der 🔵",
    t2_bucket_die: "die 🔴",
    t2_bucket_das: "das 🟢",
    t2_item_haustuer: "Haustür (die Tür)", t2_item_apfelbaum: "Apfelbaum (der Baum)", 
    t2_item_kinderzimmer: "Kinderzimmer (das Zimmer)", t2_item_schneemann: "Schneemann (der Mann)",
    t2_q: "Wenn 'der Regen' und 'der Schirm' zu 'Regenschirm' werden, was ist der Artikel?",
    t2_q_a: "der Regenschirm", t2_q_b: "die Regenschirm", t2_q_c: "das Regenschirm", t2_q_d: "ein Regenschirm",

    // Topic 3
    t3_title: "Groß oder klein?",
    t3_text: "Ein zusammengesetztes Nomen ist immer noch ein Nomen! Deshalb schreiben wir es groß. Aber Achtung: Nur der allererste Buchstabe wird groß geschrieben, auch wenn das zweite Wort vorher groß war.",
    t3_b1: "Schnee + Mann = Schneemann",
    t3_b2: "Nicht SchneeMann!",
    t3_b3: "Nomen schreibt man immer groß",
    t3_inst: "Welches Wort ist richtig geschrieben? Fülle die Lücke!",
    t3_h1: "Der erste Buchstabe muss groß sein, der Rest im Wort klein.",
    t3_h2: "Schneemann ist richtig. SchneeMann ist falsch.",
    t3_gap_text: "Draußen steht ein großer {gap}.",
    t3_opt_c1: "Schneemann", t3_opt_c2: "schneemann", t3_opt_c3: "SchneeMann",
    t3_q: "Wie schreibt man 'Haustier' richtig?",
    t3_q_a: "Haustier", t3_q_b: "haustier", t3_q_c: "HausTier", t3_q_d: "hausTier",
  },
  en: {
    explorer_title: "Word Builders",
    t1_title: "Building Words",
    t1_text: "In German, we can stick two nouns together to make a long word. These are called compound words. For example: Regen (rain) + Schirm (umbrella) = Regenschirm.",
    t1_b1: "Regen 🌧️ + Schirm ☂️ = Regenschirm",
    t1_b2: "Spiel 🎲 + Platz 🛝 = Spielplatz (playground)",
    t1_b3: "Haus 🏠 + Tier 🐶 = Haustier (pet)",
    t1_inst: "Build the words! Match the fitting halves.",
    t1_h1: "What protects you from the rain? An umbrella (Schirm)!",
    t1_h2: "Regen goes with schirm. Spiel goes with platz.",
    t1_l1: "Regen 🌧️", t1_r1: "schirm ☂️",
    t1_l2: "Spiel 🎲", t1_r2: "platz 🛝",
    t1_l3: "Haus 🏠", t1_r3: "tier 🐶",
    t1_q: "What does 'Regenschirm' mean?",
    t1_q_a: "Umbrella", t1_q_b: "Toy", t1_q_c: "Animal", t1_q_d: "House",

    t2_title: "The Last Article Wins!",
    t2_text: "When we combine two words, which 'der, die, das' does the new word get? Simple: The last word determines the article!",
    t2_b1: "das Haus + die Tür = DIE Haustür",
    t2_b2: "der Apfel + der Baum = DER Apfelbaum",
    t2_b3: "das Kind + das Zimmer = DAS Kinderzimmer",
    t2_inst: "Which article does the new word have? Sort them into the buckets!",
    t2_h1: "Look at the article of the second part of the word.",
    t2_h2: "-tür (die) makes it 'die'. -baum (der) makes it 'der'.",
    t2_bucket_der: "der 🔵",
    t2_bucket_die: "die 🔴",
    t2_bucket_das: "das 🟢",
    t2_item_haustuer: "Haustür (die Tür)", t2_item_apfelbaum: "Apfelbaum (der Baum)", 
    t2_item_kinderzimmer: "Kinderzimmer (das Zimmer)", t2_item_schneemann: "Schneemann (der Mann)",
    t2_q: "If 'der Regen' and 'der Schirm' become 'Regenschirm', what is the article?",
    t2_q_a: "der Regenschirm", t2_q_b: "die Regenschirm", t2_q_c: "das Regenschirm", t2_q_d: "ein Regenschirm",

    t3_title: "Big or Small?",
    t3_text: "A compound noun is still a noun! Therefore, we capitalize it. But careful: Only the very first letter is capitalized, even if the second word was capitalized before.",
    t3_b1: "Schnee + Mann = Schneemann",
    t3_b2: "Not SchneeMann!",
    t3_b3: "Nouns are always capitalized",
    t3_inst: "Which word is spelled correctly? Fill the gap!",
    t3_h1: "The first letter must be big, the rest small.",
    t3_h2: "Schneemann is correct. SchneeMann is wrong.",
    t3_gap_text: "Draußen steht ein großer {gap}.",
    t3_opt_c1: "Schneemann", t3_opt_c2: "schneemann", t3_opt_c3: "SchneeMann",
    t3_q: "How do you spell 'Haustier' correctly?",
    t3_q_a: "Haustier", t3_q_b: "haustier", t3_q_c: "HausTier", t3_q_d: "hausTier",
  },
  hu: {
    explorer_title: "Szóépítők",
    t1_title: "Szavak összerakása",
    t1_text: "A németben két főnévből egy hosszú szót csinálhatunk. Ezek az összetett szavak. Például: Regen (eső) + Schirm (ernyő) = Regenschirm.",
    t1_b1: "Regen 🌧️ + Schirm ☂️ = Regenschirm",
    t1_b2: "Spiel 🎲 + Platz 🛝 = Spielplatz (játszótér)",
    t1_b3: "Haus 🏠 + Tier 🐶 = Haustier (háziállat)",
    t1_inst: "Építsd fel a szavakat! Kösd össze az összeillő feleket.",
    t1_h1: "Mi véd az eső ellen? Az ernyő (Schirm)!",
    t1_h2: "A Regen a schirm-hez illik. A Spiel a platz-hoz.",
    t1_l1: "Regen 🌧️", t1_r1: "schirm ☂️",
    t1_l2: "Spiel 🎲", t1_r2: "platz 🛝",
    t1_l3: "Haus 🏠", t1_r3: "tier 🐶",
    t1_q: "Mit jelent a 'Regenschirm'?",
    t1_q_a: "Esernyő", t1_q_b: "Játék", t1_q_c: "Állat", t1_q_d: "Ház",

    t2_title: "Az utolsó névelő győz!",
    t2_text: "Amikor két szót összerakunk, melyik 'der, die, das' névelőt kapja az új szó? Egyszerű: mindig az utolsó szó határozza meg a névelőt!",
    t2_b1: "das Haus + die Tür = DIE Haustür",
    t2_b2: "der Apfel + der Baum = DER Apfelbaum",
    t2_b3: "das Kind + das Zimmer = DAS Kinderzimmer",
    t2_inst: "Milyen névelője van az új szónak? Válogasd őket kosarakba!",
    t2_h1: "Nézd meg a szó második felének a névelőjét.",
    t2_h2: "A -tür (die) miatt 'die' lesz. A -baum (der) miatt 'der'.",
    t2_bucket_der: "der 🔵",
    t2_bucket_die: "die 🔴",
    t2_bucket_das: "das 🟢",
    t2_item_haustuer: "Haustür (die Tür)", t2_item_apfelbaum: "Apfelbaum (der Baum)", 
    t2_item_kinderzimmer: "Kinderzimmer (das Zimmer)", t2_item_schneemann: "Schneemann (der Mann)",
    t2_q: "Ha a 'der Regen' és 'der Schirm' szavakból 'Regenschirm' lesz, mi a névelője?",
    t2_q_a: "der Regenschirm", t2_q_b: "die Regenschirm", t2_q_c: "das Regenschirm", t2_q_d: "ein Regenschirm",

    t3_title: "Kicsi vagy nagy?",
    t3_text: "Egy összetett főnév továbbra is főnév! Ezért nagybetűvel írjuk. De vigyázat: Csak a legelső betű lesz nagy, hiába volt a második szó is nagybetűs előtte.",
    t3_b1: "Schnee + Mann = Schneemann",
    t3_b2: "Nem SchneeMann!",
    t3_b3: "A főneveket mindig nagybetűvel írjuk",
    t3_inst: "Melyik szó van helyesen leírva? Töltsd ki az űrt!",
    t3_h1: "Az első betű nagy, a többi a szóban kicsi.",
    t3_h2: "A Schneemann a helyes. A SchneeMann hibás.",
    t3_gap_text: "Draußen steht ein großer {gap}. (Kint áll egy nagy hóember.)",
    t3_opt_c1: "Schneemann", t3_opt_c2: "schneemann", t3_opt_c3: "SchneeMann",
    t3_q: "Hogyan írjuk helyesen: 'Haustier' (háziállat)?",
    t3_q_a: "Haustier", t3_q_b: "haustier", t3_q_c: "HausTier", t3_q_d: "hausTier",
  },
  ro: {
    explorer_title: "Constructori de cuvinte",
    t1_title: "Construirea cuvintelor",
    t1_text: "În germană, putem uni două substantive pentru a face un cuvânt lung. Acestea se numesc cuvinte compuse. De exemplu: Regen (ploaie) + Schirm (umbrelă) = Regenschirm.",
    t1_b1: "Regen 🌧️ + Schirm ☂️ = Regenschirm",
    t1_b2: "Spiel 🎲 + Platz 🛝 = Spielplatz (loc de joacă)",
    t1_b3: "Haus 🏠 + Tier 🐶 = Haustier (animal de companie)",
    t1_inst: "Construiește cuvintele! Potrivește jumătățile corespunzătoare.",
    t1_h1: "Ce te protejează de ploaie? O umbrelă (Schirm)!",
    t1_h2: "Regen merge cu schirm. Spiel merge cu platz.",
    t1_l1: "Regen 🌧️", t1_r1: "schirm ☂️",
    t1_l2: "Spiel 🎲", t1_r2: "platz 🛝",
    t1_l3: "Haus 🏠", t1_r3: "tier 🐶",
    t1_q: "Ce înseamnă 'Regenschirm'?",
    t1_q_a: "Umbrelă", t1_q_b: "Jucărie", t1_q_c: "Animal", t1_q_d: "Casă",

    t2_title: "Ultimul articol câștigă!",
    t2_text: "Când combinăm două cuvinte, ce 'der, die, das' primește noul cuvânt? Simplu: Ultimul cuvânt determină articolul!",
    t2_b1: "das Haus + die Tür = DIE Haustür",
    t2_b2: "der Apfel + der Baum = DER Apfelbaum",
    t2_b3: "das Kind + das Zimmer = DAS Kinderzimmer",
    t2_inst: "Ce articol are noul cuvânt? Sortează-le în coșuri!",
    t2_h1: "Uită-te la articolul celei de-a doua părți a cuvântului.",
    t2_h2: "-tür (die) îl face 'die'. -baum (der) îl face 'der'.",
    t2_bucket_der: "der 🔵",
    t2_bucket_die: "die 🔴",
    t2_bucket_das: "das 🟢",
    t2_item_haustuer: "Haustür (die Tür)", t2_item_apfelbaum: "Apfelbaum (der Baum)", 
    t2_item_kinderzimmer: "Kinderzimmer (das Zimmer)", t2_item_schneemann: "Schneemann (der Mann)",
    t2_q: "Dacă 'der Regen' și 'der Schirm' devin 'Regenschirm', care este articolul?",
    t2_q_a: "der Regenschirm", t2_q_b: "die Regenschirm", t2_q_c: "das Regenschirm", t2_q_d: "ein Regenschirm",

    t3_title: "Mare sau mic?",
    t3_text: "Un substantiv compus este tot un substantiv! De aceea, îl scriem cu majusculă. Dar atenție: Doar prima literă este mare, chiar dacă al doilea cuvânt era scris cu literă mare înainte.",
    t3_b1: "Schnee + Mann = Schneemann",
    t3_b2: "Nu SchneeMann!",
    t3_b3: "Substantivele se scriu mereu cu majusculă",
    t3_inst: "Care cuvânt este scris corect? Completează spațiul liber!",
    t3_h1: "Prima literă trebuie să fie mare, restul mici.",
    t3_h2: "Schneemann este corect. SchneeMann este greșit.",
    t3_gap_text: "Draußen steht ein großer {gap}.",
    t3_opt_c1: "Schneemann", t3_opt_c2: "schneemann", t3_opt_c3: "SchneeMann",
    t3_q: "Cum se scrie corect 'Haustier' (animal de companie)?",
    t3_q_a: "Haustier", t3_q_b: "haustier", t3_q_c: "HausTier", t3_q_d: "hausTier",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Compound Words (match-pairs) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" }, // Regen - schirm
        { left: "t1_l2", right: "t1_r2" }, // Spiel - platz
        { left: "t1_l3", right: "t1_r3" }, // Haus - tier
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // Etwas gegen den Regen
    },
  },
  // ── Topic 2: Article of the last word (drag-to-bucket) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "der", label: "t2_bucket_der" },
        { id: "die", label: "t2_bucket_die" },
        { id: "das", label: "t2_bucket_das" },
      ],
      items: [
        { text: "t2_item_haustuer", bucketId: "die" },
        { text: "t2_item_apfelbaum", bucketId: "der" },
        { text: "t2_item_kinderzimmer", bucketId: "das" },
        { text: "t2_item_schneemann", bucketId: "der" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // der Regenschirm
    },
  },
  // ── Topic 3: Capitalization (gap-fill) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_text",
      choices: ["t3_opt_c1", "t3_opt_c2", "t3_opt_c3"], // Schneemann, schneemann, SchneeMann
      correctIndex: 0, // Schneemann
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // Haustier
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🧩",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const CompoundWordExplorerK1 = memo(function CompoundWordExplorerK1({
  color = "#0EA5E9",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="deutsch_k1_compound" color={color} lang={lang} onDone={onDone} />;
});

export default CompoundWordExplorerK1;
