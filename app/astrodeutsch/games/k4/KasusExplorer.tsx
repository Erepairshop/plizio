"use client";
// KasusExplorer — Island i1: Nominativ & Akkusativ (K4)
// Topics: 1) Die 4 Fälle 2) Nominativ 3) Akkusativ 4) Artikel (der->den) 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-10" width="70" height="25" rx="4" fill="#BAE6FD" />
        <circle cx="-45" cy="7" r="4" fill="#0284C7" />
        <rect x="10" y="-10" width="70" height="25" rx="4" fill="#BAE6FD" />
        <circle cx="45" cy="7" r="4" fill="#0284C7" />
        <rect x="-80" y="25" width="70" height="25" rx="4" fill="#BAE6FD" />
        <circle cx="-45" cy="42" r="4" fill="#0284C7" />
        <rect x="10" y="25" width="70" height="25" rx="4" fill="#BAE6FD" />
        <circle cx="45" cy="42" r="4" fill="#0284C7" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="24" textAnchor="middle">👤</text>
        <circle cx="0" cy="25" r="3" fill="#BE185D" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="24" textAnchor="middle">🎁</text>
        <circle cx="0" cy="25" r="3" fill="#0D9488" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-15" width="60" height="30" rx="4" fill="#FED7AA" />
        <rect x="20" y="-15" width="60" height="30" rx="4" fill="#F97316" />
        <path d="M -10,0 L 10,0" stroke="#F97316" strokeWidth="2" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k4Grad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k4Grad5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-5" fontSize="24" textAnchor="middle">❓</text>
        <text x="40" y="-5" fontSize="24" textAnchor="middle">❗</text>
        <text x="0" y="30" fontSize="16" fontWeight="bold" fill="#5B21B6" textAnchor="middle">Mix-Quiz</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Die Kasus: Nom & Akk",

    // T1
    t1_title: "Die 4 Fälle (Kasus)",
    t1_text: "Nomen verändern ihre Form (Artikel und Endung), je nachdem, welche Rolle sie im Satz spielen. Es gibt 4 Fälle im Deutschen, nach denen man mit W-Wörtern fragt.",
    t1_b1: "1. Fall: Nominativ (Wer/Was?)",
    t1_b2: "2. Fall: Genitiv (Wessen?)",
    t1_b3: "3. Dativ (Wem?) & 4. Akkusativ (Wen/Was?)",
    t1_inst: "Welches Fragewort gehört zu welchem Fall? Verbinde sie!",
    t1_h1: "Wer tut etwas? -> Nominativ. Wem gehört es? -> Genitiv.",
    t1_h2: "Wen sehe ich? -> Akkusativ. Wem helfe ich? -> Dativ.",
    t1_l1: "Wer oder was?", t1_r1: "Nominativ",
    t1_l2: "Wessen?", t1_r2: "Genitiv",
    t1_l3: "Wem?", t1_r3: "Dativ",
    t1_l4: "Wen oder was?", t1_r4: "Akkusativ",
    t1_q: "Wie viele Fälle (Kasus) gibt es im Deutschen?",
    t1_q_a: "4", t1_q_b: "3", t1_q_c: "2", t1_q_d: "6",

    // T2
    t2_title: "Der Nominativ (1. Fall)",
    t2_text: "Der Nominativ ist die Grundform. Das Subjekt (der Täter) im Satz steht immer im Nominativ. Die Frage lautet: Wer oder was tut etwas?",
    t2_b1: "Beispiel: Der lustige Hund spielt.",
    t2_b2: "Frage: Wer spielt? -> Der lustige Hund.",
    t2_b3: "Artikel: der, die, das (Plural: die)",
    t2_inst: "Wer ist das Subjekt? Markiere den Nominativ im Satz!",
    t2_h1: "Frage dich: Wer isst den Apfel?",
    t2_h2: "Die Antwort ist 'Der kleine Junge'.",
    t2_w1: "Der", t2_w2: "kleine", t2_w3: "Junge", t2_w4: "isst", t2_w5: "einen", t2_w6: "Apfel.",
    t2_q: "Welches Satzglied steht immer im Nominativ?",
    t2_q_a: "Das Subjekt", t2_q_b: "Das Prädikat", t2_q_c: "Das Akkusativ-Objekt", t2_q_d: "Das Dativ-Objekt",

    // T3
    t3_title: "Der Akkusativ (4. Fall)",
    t3_text: "Der Akkusativ ist das direkte Objekt. Viele Verben (haben, suchen, finden, sehen, brauchen) verlangen ein Akkusativ-Objekt. Die Frage lautet: Wen oder was?",
    t3_b1: "Beispiel: Wir kaufen den neuen Computer.",
    t3_b2: "Frage: Wen oder was kaufen wir? -> den Computer.",
    t3_b3: "Es ist das Ziel der Handlung.",
    t3_inst: "Was ist das Akkusativ-Objekt? Markiere es!",
    t3_h1: "Frage dich: Wen oder was isst der Junge?",
    t3_h2: "Die Antwort ist 'den roten Apfel'.",
    t3_t1: "Der", t3_t2: "Junge", t3_t3: "isst", t3_t4: "den", t3_t5: "roten", t3_t6: "Apfel.",
    t3_q: "Mit welcher Frage findest du den Akkusativ?",
    t3_q_a: "Wen oder was?", t3_q_b: "Wer oder was?", t3_q_c: "Wem?", t3_q_d: "Wessen?",

    // T4
    t4_title: "Artikel im Akkusativ",
    t4_text: "Gute Nachricht: Nur die männlichen (maskulinen) Nomen ändern ihren Artikel im Akkusativ! Weibliche, sächliche und Plural-Nomen bleiben genau wie im Nominativ.",
    t4_b1: "männlich: der ➔ den / ein ➔ einen",
    t4_b2: "weiblich: die ➔ die / eine ➔ eine",
    t4_b3: "sächlich: das ➔ das / ein ➔ ein",
    t4_inst: "Welcher Artikel passt? 'Ich suche ___ roten Stift.'",
    t4_h1: "Der Stift ist männlich (der Stift).",
    t4_h2: "Im Akkusativ wird 'der' zu 'den'.",
    t4_gap_sentence: "Ich suche {gap} roten Stift.",
    t4_c1: "den", t4_c2: "der", t4_c3: "dem",
    t4_q: "Wie lautet der unbestimmte Artikel für 'der Hund' im Akkusativ?",
    t4_q_a: "einen", t4_q_b: "ein", t4_q_c: "einem", t4_q_d: "eines",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Jetzt wird es ernst! Kannst du Nominativ und Akkusativ unterscheiden? Achte bei männlichen Wörtern besonders auf das 'n' am Ende des Artikels (den/einen).",
    t5_b1: "der Hund, ein Tisch = Nominativ",
    t5_b2: "den Hund, einen Tisch = Akkusativ",
    t5_b3: "die und das sehen in beiden Fällen gleich aus!",
    t5_inst: "Steht das Wort im Nominativ oder im Akkusativ? Sortiere sie!",
    t5_h1: "Ein 'den' oder 'einen' verrät dir den Akkusativ sofort.",
    t5_h2: "'der Ball' ist Nominativ, 'den Ball' ist Akkusativ.",
    t5_bucket_nom: "Nominativ (Wer/Was?)",
    t5_bucket_akk: "Akkusativ (Wen/Was?)",
    t5_item_n1: "der Ball", t5_item_n2: "ein Stuhl", t5_item_n3: "der Hund",
    t5_item_a1: "den Ball", t5_item_a2: "einen Stuhl", t5_item_a3: "den Hund",
    t5_q: "Welcher dieser Artikel zeigt SICHER den Akkusativ an?",
    t5_q_a: "den", t5_q_b: "die", t5_q_c: "das", t5_q_d: "der",
  },
  en: {
    explorer_title: "Cases: Nom & Acc",
    t1_title: "The 4 Cases (Kasus)",
    t1_text: "Nouns change their form (article and ending) depending on their role in the sentence. There are 4 cases in German, which are asked with W-words.",
    t1_b1: "1st case: Nominative (Who/What?)",
    t1_b2: "2nd case: Genitive (Whose?)",
    t1_b3: "3rd case: Dative (To whom?) & 4th case: Accusative (Whom/What?)",
    t1_inst: "Which question word belongs to which case? Match them!",
    t1_h1: "Who is doing it? -> Nominativ. Whose is it? -> Genitiv.",
    t1_h2: "Whom do I see? -> Akkusativ. To whom do I help? -> Dativ.",
    t1_l1: "Who or what?", t1_r1: "Nominative",
    t1_l2: "Whose?", t1_r2: "Genitive",
    t1_l3: "To whom?", t1_r3: "Dative",
    t1_l4: "Whom or what?", t1_r4: "Accusative",
    t1_q: "How many cases (Kasus) are there in German?",
    t1_q_a: "4", t1_q_b: "3", t1_q_c: "2", t1_q_d: "6",
    t2_title: "The Nominative (1st case)",
    t2_text: "The nominative is the basic form. The subject (the doer) in a sentence always stands in the nominative. The question is: Who or what is doing something?",
    t2_b1: "Example: The funny dog plays.",
    t2_b2: "Question: Who is playing? -> The funny dog.",
    t2_b3: "Articles: the, the, the (Plural: the)",
    t2_inst: "Who is the subject? Highlight the nominative in the sentence!",
    t2_h1: "Ask yourself: Who is eating the apple?",
    t2_h2: "The answer is 'Der kleine Junge'.",
    t2_w1: "The", t2_w2: "small", t2_w3: "boy", t2_w4: "eats", t2_w5: "an", t2_w6: "apple.",
    t2_q: "Which sentence part always stands in the nominative?",
    t2_q_a: "The subject", t2_q_b: "The predicate", t2_q_c: "The accusative object", t2_q_d: "The dative object",
    t3_title: "The Accusative (4th case)",
    t3_text: "The accusative is the direct object. Many verbs (have, seek, find, see, need) require an accusative object. The question is: Whom or what?",
    t3_b1: "Example: We buy the new computer.",
    t3_b2: "Question: Whom or what do we buy? -> the computer.",
    t3_b3: "It is the goal of the action.",
    t3_inst: "What is the accusative object? Highlight it!",
    t3_h1: "Ask yourself: Whom or what is the boy eating?",
    t3_h2: "The answer is 'den roten Apfel'.",
    t3_t1: "The", t3_t2: "boy", t3_t3: "eats", t3_t4: "the", t3_t5: "red", t3_t6: "apple.",
    t3_q: "With which question do you find the accusative?",
    t3_q_a: "Whom or what?", t3_q_b: "Who or what?", t3_q_c: "To whom?", t3_q_d: "Whose?",
    t4_title: "Articles in the Accusative",
    t4_text: "Good news: Only masculine nouns change their article in the accusative! Feminine, neuter, and plural nouns remain the same as in the nominative.",
    t4_b1: "Masculine: the → the (one) / a → a (one)",
    t4_b2: "Feminine: the → the / a → a",
    t4_b3: "Neuter: the → the / a → a",
    t4_inst: "Which article fits? 'I am looking for ___ red pencil.'",
    t4_h1: "The pencil is masculine (the pencil).",
    t4_h2: "In the accusative, 'the' becomes 'the (one)'.",
    t4_gap_sentence: "I am looking for {gap} red pencil.",
    t4_c1: "the (one)", t4_c2: "the", t4_c3: "to the",
    t4_q: "What is the indefinite article for 'the dog' in the accusative?",
    t4_q_a: "a (one)", t4_q_b: "a", t4_q_c: "to a", t4_q_d: "of a",
    t5_title: "Mixed Quiz",
    t5_text: "Now it gets serious! Can you distinguish nominative and accusative? Pay special attention to masculine words: notice the 'n' at the end of the article (the/a one).",
    t5_b1: "the dog, a table = Nominative",
    t5_b2: "the dog (one), a table (one) = Accusative",
    t5_b3: "the and the look the same in both cases!",
    t5_inst: "Is the word in the nominative or accusative? Sort them!",
    t5_h1: "A 'the (one)' or 'a (one)' immediately reveals the accusative.",
    t5_h2: "'the ball' is Nominativ, 'the ball (one)' is Akkusativ.",
    t5_bucket_nom: "Nominativ",
    t5_bucket_akk: "Akkusativ",
  },
  hu: {
    explorer_title: "Esetek: Alany & Tárgy",
    t1_inst: "Melyik kérdőszó melyik esethez tartozik? Kösd össze őket!",
    t1_h1: "Ki tesz valamit? -> Nominativ. Kié? -> Genitiv.",
    t1_h2: "Kit látok? -> Akkusativ. Kinek segítek? -> Dativ.",
    t2_inst: "Ki az alany? Jelöld ki a Nominativ-ot a mondatban!",
    t2_h1: "Kérdezd meg magadtól: Ki eszi az almát?",
    t2_h2: "A válasz: 'Der kleine Junge'.",
    t3_inst: "Mi a tárgy (Akkusativ)? Jelöld ki!",
    t3_h1: "Kérdezd meg magadtól: Mit eszik a fiú?",
    t3_h2: "A válasz: 'den roten Apfel'.",
    t4_inst: "Melyik névelő illik ide? 'Ich suche ___ roten Stift.'",
    t4_h1: "A toll hímnemű (der Stift).",
    t4_h2: "Akkusativban a 'der'-ből 'den' lesz.",
    t5_inst: "A szó Nominativban vagy Akkusativban van? Válogasd szét!",
    t5_h1: "A 'den' vagy 'einen' rögtön elárulja az Akkusativot.",
    t5_h2: "A 'der Ball' Nominativ, a 'den Ball' Akkusativ.",
    t5_bucket_nom: "Nominativ (Alany)",
    t5_bucket_akk: "Akkusativ (Tárgy)",
  },
  ro: {
    explorer_title: "Cazuri: Nom & Acuz",
    t1_inst: "Care cuvânt interogativ se potrivește cărui caz? Leagă-le!",
    t1_h1: "Cine face asta? -> Nominativ. Al cui este? -> Genitiv.",
    t1_h2: "Pe cine văd? -> Akkusativ. Cui ajut? -> Dativ.",
    t2_inst: "Cine este subiectul? Marchează nominativul în propoziție!",
    t2_h1: "Întreabă-te: Cine mănâncă mărul?",
    t2_h2: "Răspunsul este 'Der kleine Junge'.",
    t3_inst: "Care este obiectul în acuzativ? Marchează-l!",
    t3_h1: "Întreabă-te: Pe cine sau ce mănâncă băiatul?",
    t3_h2: "Răspunsul este 'den roten Apfel'.",
    t4_inst: "Ce articol se potrivește? 'Ich suche ___ roten Stift.'",
    t4_h1: "Stift este masculin (der Stift).",
    t4_h2: "În acuzativ, 'der' devine 'den'.",
    t5_inst: "Cuvântul este la nominativ sau acuzativ? Sortează-le!",
    t5_h1: "Un 'den' sau 'einen' indică imediat acuzativul.",
    t5_h2: "'der Ball' este Nominativ, 'den Ball' este Akkusativ.",
    t5_bucket_nom: "Nominativ",
    t5_bucket_akk: "Akkusativ",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
        { left: "t1_l4", right: "t1_r4" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6"], // Der kleine Junge isst einen Apfel.
      correctIndices: [0, 1, 2], // Der kleine Junge
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_t1", "t3_t2", "t3_t3", "t3_t4", "t3_t5", "t3_t6"], // Der Junge isst den roten Apfel.
      correctIndices: [3, 4, 5], // den roten Apfel.
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_gap_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"], // den, der, dem
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "nom", label: "t5_bucket_nom" },
        { id: "akk", label: "t5_bucket_akk" },
      ],
      items: [
        { text: "t5_item_n1", bucketId: "nom" },
        { text: "t5_item_a1", bucketId: "akk" },
        { text: "t5_item_n2", bucketId: "nom" },
        { text: "t5_item_a2", bucketId: "akk" },
        { text: "t5_item_n3", bucketId: "nom" },
        { text: "t5_item_a3", bucketId: "akk" },
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📚",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const KasusExplorer = memo(function KasusExplorer({
  color = "#0284C7",
  lang = "de",
  onDone,
}: {
  color?: string;
  lang?: string;
  onDone?: (s: number, t: number) => void;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="deutsch_k4_kasus1" color={color} lang={lang} onDone={onDone} />;
});

export default KasusExplorer;
