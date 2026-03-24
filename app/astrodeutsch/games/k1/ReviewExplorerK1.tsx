"use client";
// ReviewExplorerK1 — Island i9: Das große Quiz (The Big Review)
// Topics: 1) der/die/das Review  2) Sentence Building Review  3) Vocabulary Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="revGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#revGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="40" textAnchor="middle">🏆</text>
        <rect x="-75" y="15" width="40" height="20" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
        <text x="-55" y="29" fontSize="10" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">der</text>
        
        <rect x="-20" y="15" width="40" height="20" rx="4" fill="#FEE2E2" stroke="#EF4444" />
        <text x="0" y="29" fontSize="10" fontWeight="bold" fill="#B91C1C" textAnchor="middle">die</text>
        
        <rect x="35" y="15" width="40" height="20" rx="4" fill="#D1FAE5" stroke="#10B981" />
        <text x="55" y="29" fontSize="10" fontWeight="bold" fill="#047857" textAnchor="middle">das</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      <g transform="translate(120, 70)">
        {/* Train cars forming a sentence */}
        <rect x="-80" y="-15" width="45" height="30" fill="#818CF8" rx="4" />
        <text x="-57" y="5" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">Die</text>
        
        <rect x="-30" y="-15" width="55" height="30" fill="#6366F1" rx="4" />
        <text x="-2" y="5" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">Sonne</text>

        <rect x="30" y="-15" width="45" height="30" fill="#4F46E5" rx="4" />
        <text x="52" y="5" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">ist</text>

        <circle cx="85" cy="0" r="10" fill="#FDE047" />
        
        <path d="M -35,0 L -30,0 M 25,0 L 30,0" stroke="#3730A3" strokeWidth="4" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="revGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#revGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="30" textAnchor="middle">🧠</text>
        <text x="0" y="25" fontSize="16" fontWeight="bold" fill="#047857" textAnchor="middle">Du bist ein Profi!</text>
        <circle cx="0" cy="40" r="8" fill="#10B981" />
        <path d="M -3,40 L -1,43 L 4,37" fill="none" stroke="white" strokeWidth="2" />
      </g>
    </svg>
  );
});

// ─── LABELS (4 languages) ────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Das große Quiz",

    // Topic 1
    t1_title: "Erinnerst du dich?",
    t1_text: "Lass uns prüfen, was du gelernt hast! Wir beginnen mit den Artikeln (der, die, das). Weißt du noch, welche Artikel zu diesen Wörtern gehören?",
    t1_b1: "der = männlich 🔵",
    t1_b2: "die = weiblich 🔴",
    t1_b3: "das = sächlich 🟢",
    t1_inst: "Sortiere die Wörter in die richtigen Körbe (der, die, das)!",
    t1_h1: "Hund und Baum sind 'der'.",
    t1_h2: "Katze ist 'die'. Auto ist 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    t1_item_hund: "Hund", t1_item_baum: "Baum",
    t1_item_katze: "Katze", t1_item_auto: "Auto",
    t1_q: "Welchen Artikel hat das Wort 'Haus'?",
    t1_q_a: "das", t1_q_b: "die", t1_q_c: "der", t1_q_d: "ein",

    // Topic 2
    t2_title: "Sätze bauen",
    t2_text: "Ein guter Satz beginnt immer mit einem großen Buchstaben und endet mit einem Satzzeichen (wie einem Punkt). Kannst du diesen Satz wieder zusammensetzen?",
    t2_b1: "Satzanfang: Großbuchstabe!",
    t2_b2: "Satzende: Punkt (.)",
    t2_b3: "Die Sonne ist gelb.",
    t2_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t2_h1: "Suche das Wort mit dem Großbuchstaben: 'Die'.",
    t2_h2: "Danach kommt 'Sonne', dann 'ist', und zuletzt 'gelb.'",
    t2_w1: "Die", t2_w2: "Sonne", t2_w3: "ist", t2_w4: "gelb.",
    t2_q: "Womit endet ein normaler Satz?",
    t2_q_a: "Mit einem Punkt (.)", t2_q_b: "Mit einem Fragezeichen (?)", t2_q_c: "Mit einem Komma (,)", t2_q_d: "Ohne Zeichen",

    // Topic 3
    t3_title: "Wort-Profi",
    t3_text: "Du hast Tiere, Sachen, Farben und Verben kennengelernt. Zeit für die letzte Herausforderung. Zeig, dass du die Wörter verstehst!",
    t3_b1: "Tiere leben (Hund)",
    t3_b2: "Sachen sind Dinge (Auto)",
    t3_b3: "Farben machen die Welt bunt (rot)",
    t3_inst: "Welches Wort fehlt? 'Ein Hund ist ein ___.'",
    t3_h1: "Ist der Hund ein Tier, eine Sache oder eine Farbe?",
    t3_h2: "Ein Hund lebt, also ist er ein Tier!",
    t3_gap_text: "Ein Hund ist ein {gap}.",
    t3_opt_tier: "Tier", t3_opt_sache: "Sache", t3_opt_farbe: "Farbe",
    t3_q: "Was bist du jetzt, nachdem du alle Inseln geschafft hast?",
    t3_q_a: "Ein Deutsch-Profi!", t3_q_b: "Ein Hund", t3_q_c: "Ein Auto", t3_q_d: "Ein Apfel",
  },
  en: {
    explorer_title: "The Big Review",
    t1_title: "Do you remember?",
    t1_text: "Let's check what you've learned! We start with the articles (der, die, das). Do you remember which articles belong to these words?",
    t1_b1: "der = masculine 🔵",
    t1_b2: "die = feminine 🔴",
    t1_b3: "das = neutral 🟢",
    t1_inst: "Sort the words into the correct buckets (der, die, das)!",
    t1_h1: "Hund and Baum are 'der'.",
    t1_h2: "Katze is 'die'. Auto is 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    t1_item_hund: "Hund", t1_item_baum: "Baum",
    t1_item_katze: "Katze", t1_item_auto: "Auto",
    t1_q: "Which article belongs to the word 'Haus'?",
    t1_q_a: "das", t1_q_b: "die", t1_q_c: "der", t1_q_d: "ein",

    t2_title: "Building Sentences",
    t2_text: "A good sentence always starts with a capital letter and ends with a punctuation mark (like a period). Can you put this sentence back together?",
    t2_b1: "Start: Capital letter!",
    t2_b2: "End: Period (.)",
    t2_b3: "Die Sonne ist gelb. (The sun is yellow.)",
    t2_inst: "Put the words in the correct order!",
    t2_h1: "Look for the word with the capital letter: 'Die'.",
    t2_h2: "Then 'Sonne', then 'ist', and finally 'gelb.'",
    t2_w1: "Die", t2_w2: "Sonne", t2_w3: "ist", t2_w4: "gelb.",
    t2_q: "What does a normal sentence end with?",
    t2_q_a: "A period (.)", t2_q_b: "A question mark (?)", t2_q_c: "A comma (,)", t2_q_d: "Without a mark",

    t3_title: "Word Pro",
    t3_text: "You've learned about animals, things, colors, and verbs. Time for the final challenge. Show that you understand the words!",
    t3_b1: "Animals are alive (Hund)",
    t3_b2: "Things are objects (Auto)",
    t3_b3: "Colors make the world bright (rot)",
    t3_inst: "Which word is missing? 'Ein Hund ist ein ___.' (A dog is an ___.)",
    t3_h1: "Is the dog an animal (Tier), a thing (Sache), or a color (Farbe)?",
    t3_h2: "A dog is alive, so it's a 'Tier' (animal)!",
    t3_gap_text: "Ein Hund ist ein {gap}.",
    t3_opt_tier: "Tier", t3_opt_sache: "Sache", t3_opt_farbe: "Farbe",
    t3_q: "What are you now, after completing all the islands?",
    t3_q_a: "A German Pro!", t3_q_b: "A dog", t3_q_c: "A car", t3_q_d: "An apple",
  },
  hu: {
    explorer_title: "A Nagy Összefoglaló",
    t1_title: "Emlékszel még?",
    t1_text: "Lássuk, mit tanultál! Kezdjük a névelőkkel (der, die, das). Emlékszel, melyik névelő illik ezekhez a szavakhoz?",
    t1_b1: "der = hímnem 🔵",
    t1_b2: "die = nőnem 🔴",
    t1_b3: "das = semlegesnem 🟢",
    t1_inst: "Válogasd a szavakat a megfelelő kosárba (der, die, das)!",
    t1_h1: "A Hund és a Baum 'der'.",
    t1_h2: "A Katze 'die'. Az Auto 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    t1_item_hund: "Hund", t1_item_baum: "Baum",
    t1_item_katze: "Katze", t1_item_auto: "Auto",
    t1_q: "Melyik névelő tartozik a 'Haus' szóhoz?",
    t1_q_a: "das", t1_q_b: "die", t1_q_c: "der", t1_q_d: "ein",

    t2_title: "Mondatépítés",
    t2_text: "Egy jó mondat mindig nagybetűvel kezdődik és írásjellel (pl. ponttal) végződik. Össze tudod rakni ezt a mondatot?",
    t2_b1: "Mondatkezdés: Nagybetű!",
    t2_b2: "Mondatvége: Pont (.)",
    t2_b3: "Die Sonne ist gelb. (A nap sárga.)",
    t2_inst: "Tedd a szavakat a helyes sorrendbe!",
    t2_h1: "Keresd a nagybetűs szót: 'Die'.",
    t2_h2: "Aztán 'Sonne', majd 'ist', és a végén 'gelb.'",
    t2_w1: "Die", t2_w2: "Sonne", t2_w3: "ist", t2_w4: "gelb.",
    t2_q: "Mivel végződik egy normál kijelentő mondat?",
    t2_q_a: "Ponttal (.)", t2_q_b: "Kérdőjellel (?)", t2_q_c: "Vesszővel (,)", t2_q_d: "Jel nélkül",

    t3_title: "Szó-Profi",
    t3_text: "Tanultál állatokat, tárgyakat, színeket és igéket. Itt az utolsó kihívás. Mutasd meg, hogy érted a szavakat!",
    t3_b1: "Tiere: élőlények (Hund)",
    t3_b2: "Sachen: tárgyak (Auto)",
    t3_b3: "Farben: színek (rot)",
    t3_inst: "Melyik szó hiányzik? 'Ein Hund ist ein ___.' (A kutya egy ___.)",
    t3_h1: "A kutya egy állat (Tier), tárgy (Sache) vagy szín (Farbe)?",
    t3_h2: "A kutya él, tehát állat (Tier)!",
    t3_gap_text: "Ein Hund ist ein {gap}.",
    t3_opt_tier: "Tier", t3_opt_sache: "Sache", t3_opt_farbe: "Farbe",
    t3_q: "Mi lettél most, hogy az összes szigetet végigcsináltad?",
    t3_q_a: "Német-Profi!", t3_q_b: "Kutya", t3_q_c: "Autó", t3_q_d: "Alma",
  },
  ro: {
    explorer_title: "Marea Recapitulare",
    t1_title: "Îți amintești?",
    t1_text: "Să vedem ce ai învățat! Începem cu articolele (der, die, das). Mai știi ce articole se potrivesc acestor cuvinte?",
    t1_b1: "der = masculin 🔵",
    t1_b2: "die = feminin 🔴",
    t1_b3: "das = neutru 🟢",
    t1_inst: "Sortează cuvintele în coșurile corecte (der, die, das)!",
    t1_h1: "Hund și Baum sunt 'der'.",
    t1_h2: "Katze este 'die'. Auto este 'das'.",
    t1_bucket_der: "der 🔵",
    t1_bucket_die: "die 🔴",
    t1_bucket_das: "das 🟢",
    t1_item_hund: "Hund", t1_item_baum: "Baum",
    t1_item_katze: "Katze", t1_item_auto: "Auto",
    t1_q: "Ce articol are cuvântul 'Haus'?",
    t1_q_a: "das", t1_q_b: "die", t1_q_c: "der", t1_q_d: "ein",

    t2_title: "Construirea propozițiilor",
    t2_text: "O propoziție bună începe mereu cu literă mare și se termină cu un semn (cum ar fi un punct). Poți să refaci această propoziție?",
    t2_b1: "Început: Literă mare!",
    t2_b2: "Sfârșit: Punct (.)",
    t2_b3: "Die Sonne ist gelb. (Soarele este galben.)",
    t2_inst: "Așază cuvintele în ordinea corectă!",
    t2_h1: "Caută cuvântul cu literă mare: 'Die'.",
    t2_h2: "Apoi 'Sonne', apoi 'ist', și la final 'gelb.'",
    t2_w1: "Die", t2_w2: "Sonne", t2_w3: "ist", t2_w4: "gelb.",
    t2_q: "Cu ce se termină o propoziție normală?",
    t2_q_a: "Cu un punct (.)", t2_q_b: "Cu un semn de întrebare (?)", t2_q_c: "Cu o virgulă (,)", t2_q_d: "Fără niciun semn",

    t3_title: "Campion la cuvinte",
    t3_text: "Ai învățat animale, lucruri, culori și verbe. E timpul pentru ultima provocare. Arată că înțelegi cuvintele!",
    t3_b1: "Tiere = animale (Hund)",
    t3_b2: "Sachen = lucruri/obiecte (Auto)",
    t3_b3: "Farben = culori (rot)",
    t3_inst: "Ce cuvânt lipsește? 'Ein Hund ist ein ___.' (Un câine este un ___.)",
    t3_h1: "Este câinele un animal (Tier), un obiect (Sache) sau o culoare (Farbe)?",
    t3_h2: "Un câine este viu, deci este un animal (Tier)!",
    t3_gap_text: "Ein Hund ist ein {gap}.",
    t3_opt_tier: "Tier", t3_opt_sache: "Sache", t3_opt_farbe: "Farbe",
    t3_q: "Ce ești tu acum, după ce ai terminat toate insulele?",
    t3_q_a: "Un campion la germană!", t3_q_b: "Un câine", t3_q_c: "O mașină", t3_q_d: "Un măr",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Articles Review (drag-to-bucket) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "der", label: "t1_bucket_der" },
        { id: "die", label: "t1_bucket_die" },
        { id: "das", label: "t1_bucket_das" },
      ],
      items: [
        { text: "t1_item_hund", bucketId: "der" }, // der Hund
        { text: "t1_item_katze", bucketId: "die" }, // die Katze
        { text: "t1_item_auto", bucketId: "das" }, // das Auto
        { text: "t1_item_baum", bucketId: "der" }, // der Baum
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // das
    },
  },
  // ── Topic 2: Sentence Building (word-order) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"], // Die Sonne ist gelb.
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // Mit einem Punkt
    },
  },
  // ── Topic 3: Vocabulary & Logic (gap-fill) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_text",
      options: ["t3_opt_tier", "t3_opt_sache", "t3_opt_farbe"],
      answer: "t3_opt_tier", // Tier
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // Ein Deutsch-Profi!
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🏆",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReviewExplorerK1 = memo(function ReviewExplorerK1({
  color = "#F59E0B",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="deutsch_k1_review" color={color} lang={lang} onDone={onDone} />;
});

export default ReviewExplorerK1;
