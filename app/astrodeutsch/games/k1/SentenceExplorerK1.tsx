"use client";
// SentenceExplorerK1 — Island i5: Sätze & Zeichen (Sentences & Punctuation)
// Topics: 1) Punctuation (. ? !)  2) Capital Letters  3) Missing Words

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="senGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#senGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <g transform="translate(-60, 0)">
          <circle cx="0" cy="0" r="25" fill="#A7F3D0" />
          <text x="0" y="10" fontSize="30" fontWeight="900" fill="#047857" textAnchor="middle">.</text>
        </g>
        <g transform="translate(0, 0)">
          <circle cx="0" cy="0" r="25" fill="#FECACA" />
          <text x="0" y="10" fontSize="30" fontWeight="900" fill="#B91C1C" textAnchor="middle">?</text>
        </g>
        <g transform="translate(60, 0)">
          <circle cx="0" cy="0" r="25" fill="#FDE68A" />
          <text x="0" y="10" fontSize="30" fontWeight="900" fill="#B45309" textAnchor="middle">!</text>
        </g>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EFF6FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="5" fontSize="24" fontWeight="black" fill="#1D4ED8" textAnchor="middle">D</text>
        <text x="-40" y="5" fontSize="24" fill="#60A5FA" textAnchor="middle">er</text>
        
        <text x="10" y="5" fontSize="24" fontWeight="black" fill="#1D4ED8" textAnchor="middle">H</text>
        <text x="35" y="5" fontSize="24" fill="#60A5FA" textAnchor="middle">und</text>
        
        <line x1="-70" y1="15" x2="-30" y2="15" stroke="#3B82F6" strokeWidth="3" />
        <line x1="0" y1="15" x2="55" y2="15" stroke="#3B82F6" strokeWidth="3" />
        
        <text x="0" y="-30" fontSize="12" fontWeight="bold" fill="#2563EB" textAnchor="middle">Satzanfang & Namen/Dinge = GROSS!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="senGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FB7185" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#senGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="5" fontSize="20" fontWeight="bold" fill="#BE123C" textAnchor="middle">Ich</text>
        <rect x="-35" y="-15" width="60" height="25" fill="white" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 2" rx="4" />
        <text x="-5" y="2" fontSize="14" fill="#E11D48" textAnchor="middle">?</text>
        <text x="60" y="5" fontSize="20" fontWeight="bold" fill="#BE123C" textAnchor="middle">einen 🍎.</text>
      </g>
    </svg>
  );
});

// ─── LABELS (4 languages) ────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Sätze & Zeichen",

    // Topic 1
    t1_title: "Satzzeichen (. ? !)",
    t1_text: "Am Ende von jedem Satz steht ein Zeichen. Ein Punkt (.) für normale Sätze, ein Fragezeichen (?) für Fragen und ein Ausrufezeichen (!) für laute Rufe oder Warnungen.",
    t1_b1: "Aussagesatz endet mit Punkt (.)",
    t1_b2: "Fragesatz endet mit Fragezeichen (?)",
    t1_b3: "Ausruf endet mit Ausrufezeichen (!)",
    t1_inst: "Welches Zeichen passt? Sortiere die Sätze!",
    t1_h1: "Fragen wollen eine Antwort. Ausrufe sind laut!",
    t1_h2: "'Achtung' ist laut (!). 'Wie heißt du' ist eine Frage (?).",
    t1_bucket_punkt: "Punkt (.)",
    t1_bucket_frage: "Frage (?)",
    t1_bucket_ausruf: "Ausruf (!)",
    t1_item_hund: "Das ist ein Hund", t1_item_haus: "Ich gehe nach Hause",
    t1_item_wie: "Wie heißt du", t1_item_wo: "Wo bist du",
    t1_item_achtung: "Achtung", t1_item_hilfe: "Hilfe",
    t1_q: "Welches Zeichen steht am Ende einer Frage?",
    t1_q_a: "?", t1_q_b: ".", t1_q_c: "!", t1_q_d: ",",

    // Topic 2
    t2_title: "Großbuchstaben im Satz",
    t2_text: "Im Deutschen gibt es zwei wichtige Regeln für große Buchstaben: Wir schreiben das erste Wort im Satz IMMER groß. Und wir schreiben alle Nomen (Menschen, Tiere, Dinge) groß!",
    t2_b1: "Satzanfang = groß",
    t2_b2: "Nomen (Tiere, Dinge, Namen) = groß",
    t2_b3: "der, die, das hilft dir Nomen zu finden!",
    t2_inst: "Welche Wörter müssen groß geschrieben werden? Finde sie!",
    t2_h1: "Das erste Wort im Satz und das Nomen (Tier) müssen groß sein.",
    t2_h2: "Wähle 'der' (Satzanfang) und 'hund' (Nomen/Tier).",
    t2_w1: "der", t2_w2: "hund", t2_w3: "spielt", t2_w4: "im", t2_w5: "garten.",
    t2_q: "Warum schreiben wir 'Hund' groß?",
    t2_q_a: "Weil es ein Nomen (Tier) ist", t2_q_b: "Weil es bellt", t2_q_c: "Weil es klein ist", t2_q_d: "Weil es ein Verb ist",

    // Topic 3
    t3_title: "Fehlende Wörter",
    t3_text: "Manchmal fehlt ein Wort im Satz, damit er Sinn macht. Oft ist es das Verb (Tunwort), das uns sagt, was passiert.",
    t3_b1: "Der Satz muss Sinn machen",
    t3_b2: "Achte auf das Nomen (z.B. Apfel)",
    t3_b3: "Ein Apfel wird gegessen!",
    t3_inst: "Welches Wort fehlt? 'Ich ___ einen Apfel.'",
    t3_h1: "Was machst du mit einem Apfel?",
    t3_h2: "Du isst ihn! Das passende Wort ist 'esse'.",
    t3_gap_text: "Ich {gap} einen Apfel.",
    t3_opt_esse: "esse", t3_opt_laufe: "laufe", t3_opt_spiele: "spiele",
    t3_q: "Welches Wort passt in die Lücke: 'Der Hund ___ laut.'?",
    t3_q_a: "bellt", t3_q_b: "fliegt", t3_q_c: "schreibt", t3_q_d: "liest",
  },
  en: {
    explorer_title: "Sentences & Punctuation",
    t1_title: "Punctuation Marks (. ? !)",
    t1_text: "Every sentence ends with a mark. A period (.) for normal statements, a question mark (?) for questions, and an exclamation mark (!) for loud calls or warnings.",
    t1_b1: "Statements end with a period (.)",
    t1_b2: "Questions end with a question mark (?)",
    t1_b3: "Exclamations end with an exclamation mark (!)",
    t1_inst: "Which mark fits? Sort the sentences!",
    t1_h1: "Questions want an answer. Exclamations are loud!",
    t1_h2: "'Achtung' is loud (!). 'Wie heißt du' is a question (?).",
    t1_bucket_punkt: "Period (.)",
    t1_bucket_frage: "Question (?)",
    t1_bucket_ausruf: "Exclamation (!)",
    t1_item_hund: "Das ist ein Hund", t1_item_haus: "Ich gehe nach Hause",
    t1_item_wie: "Wie heißt du", t1_item_wo: "Wo bist du",
    t1_item_achtung: "Achtung", t1_item_hilfe: "Hilfe",
    t1_q: "Which mark goes at the end of a question?",
    t1_q_a: "?", t1_q_b: ".", t1_q_c: "!", t1_q_d: ",",

    t2_title: "Capital Letters",
    t2_text: "In German, there are two big rules for capital letters: The first word of a sentence is ALWAYS capitalized. And all nouns (people, animals, things) are capitalized!",
    t2_b1: "Start of sentence = capital",
    t2_b2: "Nouns (animals, things, names) = capital",
    t2_b3: "der, die, das help you find nouns!",
    t2_inst: "Which words must be capitalized? Find them!",
    t2_h1: "The first word and the noun (animal) must be big.",
    t2_h2: "Select 'der' (start) and 'hund' (noun).",
    t2_w1: "der", t2_w2: "hund", t2_w3: "spielt", t2_w4: "im", t2_w5: "garten.",
    t2_q: "Why do we capitalize 'Hund' in German?",
    t2_q_a: "Because it is a noun (animal)", t2_q_b: "Because it barks", t2_q_c: "Because it's short", t2_q_d: "Because it's a verb",

    t3_title: "Missing Words",
    t3_text: "Sometimes a word is missing in a sentence to make sense. Often it's the verb (action word) that tells us what happens.",
    t3_b1: "The sentence must make sense",
    t3_b2: "Look at the noun (e.g. Apfel)",
    t3_b3: "An apple is meant to be eaten!",
    t3_inst: "Which word is missing? 'Ich ___ einen Apfel.' (I ___ an apple.)",
    t3_h1: "What do you do with an apple?",
    t3_h2: "You eat it! The fitting word is 'esse' (eat).",
    t3_gap_text: "Ich {gap} einen Apfel.",
    t3_opt_esse: "esse", t3_opt_laufe: "laufe", t3_opt_spiele: "spiele",
    t3_q: "Which word fits the gap: 'Der Hund ___ laut.' (The dog ___ loudly.)?",
    t3_q_a: "bellt (barks)", t3_q_b: "fliegt (flies)", t3_q_c: "schreibt (writes)", t3_q_d: "liest (reads)",
  },
  hu: {
    explorer_title: "Mondatok és Jelek",
    t1_title: "Mondatvégi írásjelek (. ? !)",
    t1_text: "Minden mondat végén áll egy írásjel. A pont (.) a kijelentéseknél, a kérdőjel (?) a kérdéseknél, a felkiáltójel (!) pedig kiabálásnál vagy figyelmeztetésnél.",
    t1_b1: "Kijelentés: pont (.)",
    t1_b2: "Kérdés: kérdőjel (?)",
    t1_b3: "Felkiáltás: felkiáltójel (!)",
    t1_inst: "Melyik jel illik hozzá? Válogasd szét a mondatokat!",
    t1_h1: "A kérdésekre választ várunk. A felkiáltás hangos!",
    t1_h2: "Az 'Achtung' (Vigyázat!) felkiáltójel. A 'Wie heißt du' (Hogy hívnak?) kérdőjel.",
    t1_bucket_punkt: "Pont (.)",
    t1_bucket_frage: "Kérdés (?)",
    t1_bucket_ausruf: "Felkiáltás (!)",
    t1_item_hund: "Das ist ein Hund", t1_item_haus: "Ich gehe nach Hause",
    t1_item_wie: "Wie heißt du", t1_item_wo: "Wo bist du",
    t1_item_achtung: "Achtung", t1_item_hilfe: "Hilfe",
    t1_q: "Melyik jel áll a kérdések végén?",
    t1_q_a: "?", t1_q_b: ".", t1_q_c: "!", t1_q_d: ",",

    t2_title: "Nagybetűk a mondatban",
    t2_text: "A németben két nagyon fontos szabály van a nagybetűkre: A mondat első szavát MINDIG nagybetűvel írjuk. Ezen kívül minden főnevet (élőlény, tárgy, dolog) nagybetűvel írunk!",
    t2_b1: "Mondatkezdés = nagybetű",
    t2_b2: "Főnevek = nagybetű",
    t2_b3: "A névelők (der, die, das) segítenek megtalálni a főneveket!",
    t2_inst: "Melyik szavakat kellene nagybetűvel írni? Keresd meg őket!",
    t2_h1: "Az első szót és a főnevet (állat, tárgy, hely) jelöld meg.",
    t2_h2: "Válaszd a 'der'-t (mondat eleje) és a 'hund'-ot, 'garten'-t (főnevek).",
    t2_w1: "der", t2_w2: "hund", t2_w3: "spielt", t2_w4: "im", t2_w5: "garten.",
    t2_q: "Miért írjuk nagybetűvel a 'Hund' (kutya) szót a németben?",
    t2_q_a: "Mert főnév (állat)", t2_q_b: "Mert ugat", t2_q_c: "Mert rövid szó", t2_q_d: "Mert ige",

    t3_title: "Hiányzó szavak",
    t3_text: "Néha hiányzik egy szó a mondatból. Gyakran az ige (cselekvés) az, ami megmutatja, mi is történik éppen.",
    t3_b1: "A mondatnak értelmesnek kell lennie",
    t3_b2: "Figyeld a főnevet (pl. Apfel - alma)",
    t3_b3: "Az almát meg szoktuk enni!",
    t3_inst: "Melyik szó hiányzik? 'Ich ___ einen Apfel.' (Én ___ egy almát.)",
    t3_h1: "Mit csinálsz az almával?",
    t3_h2: "Megeszed! A helyes szó az 'esse' (eszem).",
    t3_gap_text: "Ich {gap} einen Apfel.",
    t3_opt_esse: "esse", t3_opt_laufe: "laufe", t3_opt_spiele: "spiele",
    t3_q: "Melyik szó illik a pontok helyére: 'Der Hund ___ laut.' (A kutya hangosan ___.)?",
    t3_q_a: "bellt (ugat)", t3_q_b: "fliegt (repül)", t3_q_c: "schreibt (ír)", t3_q_d: "liest (olvas)",
  },
  ro: {
    explorer_title: "Propoziții și Semne",
    t1_title: "Semne de punctuație (. ? !)",
    t1_text: "Fiecare propoziție se termină cu un semn. Un punct (.) pentru afirmații, un semn de întrebare (?) pentru întrebări și un semn de exclamare (!) pentru exclamații sau avertismente.",
    t1_b1: "Afirmația se termină cu punct (.)",
    t1_b2: "Întrebarea se termină cu semn de întrebare (?)",
    t1_b3: "Exclamația se termină cu semn de exclamare (!)",
    t1_inst: "Care semn se potrivește? Sortează propozițiile!",
    t1_h1: "Întrebările așteaptă un răspuns. Exclamațiile sunt zgomotoase!",
    t1_h2: "'Achtung' (Atenție!) este exclamație. 'Wie heißt du' (Cum te cheamă?) este întrebare.",
    t1_bucket_punkt: "Punct (.)",
    t1_bucket_frage: "Întrebare (?)",
    t1_bucket_ausruf: "Exclamație (!)",
    t1_item_hund: "Das ist ein Hund", t1_item_haus: "Ich gehe nach Hause",
    t1_item_wie: "Wie heißt du", t1_item_wo: "Wo bist du",
    t1_item_achtung: "Achtung", t1_item_hilfe: "Hilfe",
    t1_q: "Ce semn se pune la sfârșitul unei întrebări?",
    t1_q_a: "?", t1_q_b: ".", t1_q_c: "!", t1_q_d: ",",

    t2_title: "Majuscule în propoziție",
    t2_text: "În germană, există două reguli mari pentru majuscule: Primul cuvânt din propoziție se scrie ÎNTOTDEAUNA cu literă mare. De asemenea, toate substantivele (oameni, animale, lucruri) se scriu cu majusculă!",
    t2_b1: "Începutul propoziției = literă mare",
    t2_b2: "Substantivele = literă mare",
    t2_b3: "der, die, das te ajută să găsești substantivele!",
    t2_inst: "Care cuvinte trebuie scrise cu majusculă? Găsește-le!",
    t2_h1: "Primul cuvânt și substantivele trebuie marcate.",
    t2_h2: "Alege 'der' (început), 'hund' și 'garten' (substantive).",
    t2_w1: "der", t2_w2: "hund", t2_w3: "spielt", t2_w4: "im", t2_w5: "garten.",
    t2_q: "De ce scriem 'Hund' cu majusculă în germană?",
    t2_q_a: "Pentru că este un substantiv", t2_q_b: "Pentru că latră", t2_q_c: "Pentru că este un cuvânt scurt", t2_q_d: "Pentru că este un verb",

    t3_title: "Cuvinte lipsă",
    t3_text: "Uneori lipsește un cuvânt din propoziție pentru a avea sens. Deseori este vorba despre verb (acțiunea) care ne spune ce se întâmplă.",
    t3_b1: "Propoziția trebuie să aibă sens",
    t3_b2: "Atenție la substantiv (ex. Apfel - măr)",
    t3_b3: "Un măr este pentru a fi mâncat!",
    t3_inst: "Ce cuvânt lipsește? 'Ich ___ einen Apfel.' (Eu ___ un măr.)",
    t3_h1: "Ce faci cu un măr?",
    t3_h2: "Îl mănânci! Cuvântul corect este 'esse'.",
    t3_gap_text: "Ich {gap} einen Apfel.",
    t3_opt_esse: "esse", t3_opt_laufe: "laufe", t3_opt_spiele: "spiele",
    t3_q: "Ce cuvânt se potrivește în spațiul liber: 'Der Hund ___ laut.' (Câinele ___ tare.)?",
    t3_q_a: "bellt (latră)", t3_q_b: "fliegt (zboară)", t3_q_c: "schreibt (scrie)", t3_q_d: "liest (citește)",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Punctuation (drag-to-bucket) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "punkt", label: "t1_bucket_punkt" },
        { id: "frage", label: "t1_bucket_frage" },
        { id: "ausruf", label: "t1_bucket_ausruf" },
      ],
      items: [
        { text: "t1_item_hund", bucketId: "punkt" },
        { text: "t1_item_wie", bucketId: "frage" },
        { text: "t1_item_achtung", bucketId: "ausruf" },
        { text: "t1_item_haus", bucketId: "punkt" },
        { text: "t1_item_wo", bucketId: "frage" },
        { text: "t1_item_hilfe", bucketId: "ausruf" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // ?
    },
  },
  // ── Topic 2: Capital Letters (highlight-text) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"], // der hund spielt im garten.
      correctIndices: [0, 1, 4], // Der, Hund, Garten
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // Nomen
    },
  },
  // ── Topic 3: Missing Words (gap-fill) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_text",
      options: ["t3_opt_esse", "t3_opt_laufe", "t3_opt_spiele"],
      answer: "t3_opt_esse",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // bellt
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📝",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentenceExplorerK1 = memo(function SentenceExplorerK1({
  color = "#10B981",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="deutsch_k1_sentence" color={color} lang={lang} onDone={onDone} />;
});

export default SentenceExplorerK1;
