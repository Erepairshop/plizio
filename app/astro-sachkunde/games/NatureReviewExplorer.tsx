"use client";
// NatureReviewExplorer.tsx — Sachkunde Island i8: Nature Review (K1)
// Topics: 1) Évszakok ismétlése 2) Időjárás felismerése 3) Mit vegyek fel? 4) Napszakok 5) Nagy Természet Kvíz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
import { SeasonsSvg, WeatherTypesSvg } from "@/app/astro-sachkunde/svg/k1/NatureWeatherSvg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="45" textAnchor="middle">👕</text>
        <path d="M -10,0 L 10,0" stroke="#0284C7" strokeWidth="4" strokeDasharray="4 4" />
        <text x="40" y="15" fontSize="45" textAnchor="middle">🧣</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF4FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="15" fontSize="40" textAnchor="middle">🌅</text>
        <text x="0" y="15" fontSize="40" textAnchor="middle">☀️</text>
        <text x="50" y="15" fontSize="40" textAnchor="middle">🌃</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="45" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
        <text x="0" y="15" fontSize="45" textAnchor="middle">🏆</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Természet Összefoglaló",
    // T1: Évszakok (Match-pairs)
    t1_title: "Emlékszel az évszakokra?",
    t1_text: "A természet folyton változik. Ismételjük át, melyik évszakban mi történik odakint!",
    t1_b1: "Tavasszal ébred a természet.",
    t1_b2: "Nyáron sokat süt a nap és meleg van.",
    t1_b3: "Ősszel színesek a levelek, télen pedig hideg van.",
    t1_inst: "Párosítsd az évszakot a hozzá illő képpel!",
    t1_l1: "Tél", t1_r1: "Hóember ⛄",
    t1_l2: "Tavasz", t1_r2: "Nyíló virág 🌷",
    t1_l3: "Nyár", t1_r3: "Ragyogó napsütés ☀️",
    t1_q: "Melyik évszakban van a legmelegebb?",
    t1_q_a: "Nyáron", t1_q_b: "Télen", t1_q_c: "Ősszel", t1_q_d: "Tavasszal",

    // T2: Időjárás (Label-diagram)
    t2_title: "Időjárás jelentés",
    t2_text: "Minden nap más az időjárás. Nézzük meg, felismered-e a legfontosabbakat a képen!",
    t2_b1: "A napocska meleget ad.",
    t2_b2: "A felhőből eső eshet.",
    t2_b3: "A szél fújja a fákat.",
    t2_inst: "Keresd meg a képen az időjárás jeleit!",
    t2_area_sun: "Napsütés",
    t2_area_rain: "Eső",
    t2_area_wind: "Szél",
    t2_q: "Mi esik télen a felhőkből, ha nagyon hideg van?",
    t2_q_a: "Hó", t2_q_b: "Eső", t2_q_c: "Jégeső", t2_q_d: "Sár",

    // T3: Ruhák (Drag-to-bucket)
    t3_title: "Mit vegyek fel?",
    t3_text: "Nagyon fontos, hogy az időjárásnak megfelelően öltözködjünk. Esőben más kell, mint napsütésben!",
    t3_b1: "Ha esik, kell az esernyő és a csizma.",
    t3_b2: "Ha süt a nap, elég egy rövidnadrág.",
    t3_b3: "Vigyázz, nehogy megfázz!",
    t3_inst: "Napos vagy Esős idő? Válogasd szét!",
    t3_bucket_napos: "Napos idő ☀️",
    t3_bucket_esos: "Esős idő 🌧️",
    t3_item_n1: "Napszemüveg", t3_item_n2: "Póló",
    t3_item_e1: "Esernyő", t3_item_e2: "Gumicsizma",
    t3_q: "Mit teszünk a fejünkre, ha nagyon erősen süt a nap?",
    t3_q_a: "Napszemüveget és sapkát", t3_q_b: "Vastag sálat", t3_q_c: "Esernyőt", t3_q_d: "Semmit",

    // T4: Napszakok (Word-order)
    t4_title: "Hogyan telik egy nap?",
    t4_text: "A Nap felkel, olyankor van reggel. Amikor lemegy, eljön az este és az éjszaka.",
    t4_b1: "Reggel felébredünk.",
    t4_b2: "Délben magasan süt a nap.",
    t4_b3: "Éjszaka a Hold világít.",
    t4_inst: "Tedd sorba a napszakokat!",
    t4_w1: "Reggel", t4_w2: "Dél", t4_w3: "Este", t4_w4: "Éjszaka",
    t4_q: "Mikor van a legvilágosabb egy nap során?",
    t4_q_a: "Délben", t4_q_b: "Éjszaka", t4_q_c: "Este", t4_q_d: "Hajnalban",

    // T5: Kvíz (Gap-fill)
    t5_title: "A természet bajnoka",
    t5_text: "Ügyes voltál! Most már mindent tudsz az évszakokról és az időjárásról.",
    t5_b1: "A természet csodálatos.",
    t5_b2: "Minden évszak tartogat valami jót.",
    t5_b3: "Szeresd a természetet!",
    t5_inst: "Egészítsd ki a mondatot!",
    t5_gap_sentence: "Amikor esik az eső és süt a nap, megjelenik az égen a {gap}.",
    t5_c51: "szivárvány", t5_c52: "hóember", t5_c53: "repülő",
    t5_q: "Mi a legfontosabb, ha kint játszunk a természetben?",
    t5_q_a: "Vigyázzunk rá és ne szemeteljünk", t5_q_b: "Törjük le a faágakat", t5_q_c: "Kergessük el a madarakat", t5_q_d: "Hagyjuk ott a szemetet",
  },
  en: {
    explorer_title: "Nature Review",
    t1_title: "Remember the Seasons?", t1_text: "Nature is always changing. Let's review what happens in each season!",
    t1_b1: "Nature wakes up in spring.", t1_b2: "It is sunny and hot in summer.", t1_b3: "Leaves fall in autumn, it is cold in winter.",
    t1_inst: "Match the season with the picture!",
    t1_l1: "Winter", t1_r1: "Snowman ⛄",
    t1_l2: "Spring", t1_r2: "Blooming flower 🌷",
    t1_l3: "Summer", t1_r3: "Bright sunshine ☀️",
    t1_q: "Which season is the hottest?", t1_q_a: "Summer", t1_q_b: "Winter", t1_q_c: "Autumn", t1_q_d: "Spring",

    t2_title: "Weather Report", t2_text: "The weather is different every day. Let's see if you know the signs!",
    t2_b1: "The sun gives us warmth.", t2_b2: "Rain falls from the clouds.", t2_b3: "The wind blows the trees.",
    t2_inst: "Find the weather signs in the picture!",
    t2_area_sun: "Sunshine", t2_area_rain: "Rain", t2_area_wind: "Wind",
    t2_q: "What falls from the clouds in winter when it is very cold?",
    t2_q_a: "Snow", t2_q_b: "Rain", t2_q_c: "Hail", t2_q_d: "Mud",

    t3_title: "What to Wear?", t3_text: "It is very important to dress for the weather so you don't get sick.",
    t3_b1: "If it rains, you need an umbrella and boots.", t3_b2: "If it's sunny, shorts are fine.", t3_b3: "Be careful not to catch a cold!",
    t3_inst: "Sunny or Rainy? Sort them out!",
    t3_bucket_napos: "Sunny Weather ☀️", t3_bucket_esos: "Rainy Weather 🌧️",
    t3_item_n1: "Sunglasses", t3_item_n2: "T-shirt",
    t3_item_e1: "Umbrella", t3_item_e2: "Rubber boots",
    t3_q: "What do we wear on our head when the sun is very strong?",
    t3_q_a: "Sunglasses and a hat", t3_q_b: "A thick scarf", t3_q_c: "An umbrella", t3_q_d: "Nothing",

    t4_title: "Parts of the Day", t4_text: "The sun rises in the morning. When it sets, evening and night arrive.",
    t4_b1: "We wake up in the morning.", t4_b2: "The sun is high at noon.", t4_b3: "The moon shines at night.",
    t4_inst: "Put the times of day in order!",
    t4_w1: "Morning", t4_w2: "Noon", t4_w3: "Evening", t4_w4: "Night",
    t4_q: "When is it the brightest during the day?",
    t4_q_a: "At noon", t4_q_b: "At night", t4_q_c: "In the evening", t4_q_d: "At dawn",

    t5_title: "Nature Champion", t5_text: "Great job! Now you know everything about seasons and weather.",
    t5_b1: "Nature is wonderful.", t5_b2: "Every season has something good.", t5_b3: "Love nature!",
    t5_inst: "Fill in the missing word!",
    t5_gap_sentence: "When it rains and the sun shines, a {gap} appears.",
    t5_c51: "rainbow", t5_c52: "snowman", t5_c53: "airplane",
    t5_q: "What is most important when playing outside in nature?",
    t5_q_a: "Take care of it and don't litter", t5_q_b: "Break the tree branches", t5_q_c: "Chase the birds", t5_q_d: "Leave trash behind",
  },
  de: {
    explorer_title: "Natur-Rückblick",
    t1_title: "Kennst du die Jahreszeiten?", t1_text: "Die Natur verändert sich. Lass uns wiederholen, was passiert!",
    t1_b1: "Im Frühling erwacht die Natur.", t1_b2: "Im Sommer ist es sonnig und heiß.", t1_b3: "Im Herbst fallen Blätter, im Winter ist es kalt.",
    t1_inst: "Verbinde die Jahreszeit mit dem Bild!",
    t1_l1: "Winter", t1_r1: "Schneemann ⛄",
    t1_l2: "Frühling", t1_r2: "Blume 🌷",
    t1_l3: "Sommer", t1_r3: "Sonne ☀️",
    t1_q: "Welche Jahreszeit ist am wärmsten?", t1_q_a: "Sommer", t1_q_b: "Winter", t1_q_c: "Herbst", t1_q_d: "Frühling",

    t2_title: "Wetterbericht", t2_text: "Das Wetter ist jeden Tag anders. Erkennst du die Zeichen?",
    t2_b1: "Die Sonne gibt uns Wärme.", t2_b2: "Aus den Wolken fällt Regen.", t2_b3: "Der Wind bewegt die Bäume.",
    t2_inst: "Finde die Wetterzeichen im Bild!",
    t2_area_sun: "Sonne", t2_area_rain: "Regen", t2_area_wind: "Wind",
    t2_q: "Was fällt im Winter aus den Wolken, wenn es sehr kalt ist?",
    t2_q_a: "Schnee", t2_q_b: "Regen", t2_q_c: "Hagel", t2_q_d: "Matsch",

    t3_title: "Was ziehe ich an?", t3_text: "Es ist wichtig, sich passend zum Wetter anzuziehen.",
    t3_b1: "Bei Regen brauchst du Schirm und Stiefel.", t3_b2: "Bei Sonne reicht ein T-Shirt.", t3_b3: "Pass auf, dass du dich nicht erkältest!",
    t3_inst: "Sonnig oder regnerisch? Sortiere!",
    t3_bucket_napos: "Sonnig ☀️", t3_bucket_esos: "Regnerisch 🌧️",
    t3_item_n1: "Sonnenbrille", t3_item_n2: "T-Shirt",
    t3_item_e1: "Regenschirm", t3_item_e2: "Gummistiefel",
    t3_q: "Was tragen wir am Kopf, wenn die Sonne sehr stark ist?",
    t3_q_a: "Sonnenbrille und Hut", t3_q_b: "Einen dicken Schal", t3_q_c: "Einen Regenschirm", t3_q_d: "Nichts",

    t4_title: "Tageszeiten", t4_text: "Morgens geht die Sonne auf. Wenn sie untergeht, wird es Abend und Nacht.",
    t4_b1: "Morgens wachen wir auf.", t4_b2: "Mittags steht die Sonne hoch.", t4_b3: "Nachts leuchtet der Mond.",
    t4_inst: "Bringe die Tageszeiten in die richtige Reihenfolge!",
    t4_w1: "Morgen", t4_w2: "Mittag", t4_w3: "Abend", t4_w4: "Nacht",
    t4_q: "Wann ist es am Tag am hellsten?",
    t4_q_a: "Am Mittag", t4_q_b: "In der Nacht", t4_q_c: "Am Abend", t4_q_d: "Im Morgengrauen",

    t5_title: "Natur-Champion", t5_text: "Super gemacht! Du weißt jetzt alles über Jahreszeiten und Wetter.",
    t5_b1: "Die Natur ist wunderbar.", t5_b2: "Jede Jahreszeit ist schön.", t5_b3: "Liebe die Natur!",
    t5_inst: "Ergänze das Wort!",
    t5_gap_sentence: "Wenn es regnet und die Sonne scheint, gibt es einen {gap}.",
    t5_c51: "Regenbogen", t5_c52: "Schneemann", t5_c53: "Flugzeug",
    t5_q: "Was ist am wichtigsten, wenn wir in der Natur spielen?",
    t5_q_a: "Darauf aufpassen und keinen Müll machen", t5_q_b: "Äste abbrechen", t5_q_c: "Vögel jagen", t5_q_d: "Müll liegen lassen",
  },
  ro: {
    explorer_title: "Recapitulare Natură",
    t1_title: "Mai știi anotimpurile?", t1_text: "Natura se schimbă mereu. Să repetăm ce se întâmplă în fiecare anotimp!",
    t1_b1: "Primăvara natura se trezește.", t1_b2: "Vara e soare și cald.", t1_b3: "Toamna cad frunzele, iarna e frig.",
    t1_inst: "Potrivește anotimpul cu imaginea!",
    t1_l1: "Iarna", t1_r1: "Om de zăpadă ⛄",
    t1_l2: "Primăvara", t1_r2: "Floare 🌷",
    t1_l3: "Vara", t1_r3: "Soare strălucitor ☀️",
    t1_q: "În care anotimp este cel mai cald?", t1_q_a: "Vara", t1_q_b: "Iarna", t1_q_c: "Toamna", t1_q_d: "Primăvara",

    t2_title: "Starea vremii", t2_text: "Vremea e diferită în fiecare zi. Hai să vedem dacă recunoști semnele!",
    t2_b1: "Soarele ne dă căldură.", t2_b2: "Din nori cade ploaia.", t2_b3: "Vântul mișcă copacii.",
    t2_inst: "Găsește semnele vremii în imagine!",
    t2_area_sun: "Soare", t2_area_rain: "Ploaie", t2_area_wind: "Vânt",
    t2_q: "Ce cade din nori iarna când este foarte frig?",
    t2_q_a: "Zăpadă", t2_q_b: "Ploaie", t2_q_c: "Grindină", t2_q_d: "Noroi",

    t3_title: "Ce mă îmbrac?", t3_text: "E important să ne îmbrăcăm potrivit cu vremea ca să nu ne îmbolnăvim.",
    t3_b1: "Când plouă, trebuie umbrelă și cizme.", t3_b2: "Când e soare, un tricou e de ajuns.", t3_b3: "Ai grijă să nu răcești!",
    t3_inst: "Însorit sau Ploios? Sortează-le!",
    t3_bucket_napos: "Vreme însorită ☀️", t3_bucket_esos: "Vreme ploioasă 🌧️",
    t3_item_n1: "Ochelari de soare", t3_item_n2: "Tricou",
    t3_item_e1: "Umbrelă", t3_item_e2: "Cizme de cauciuc",
    t3_q: "Ce punem pe cap când soarele e foarte puternic?",
    t3_q_a: "Ochelari de soare și șapcă", t3_q_b: "Un fular gros", t3_q_c: "O umbrelă", t3_q_d: "Nimic",

    t4_title: "Momentele zilei", t4_text: "Soarele răsare dimineața. Când apune, vine seara și noaptea.",
    t4_b1: "Dimineața ne trezim.", t4_b2: "La prânz soarele e sus.", t4_b3: "Noaptea strălucește luna.",
    t4_inst: "Pune momentele zilei în ordine!",
    t4_w1: "Dimineața", t4_w2: "Prânz", t4_w3: "Seara", t4_w4: "Noaptea",
    t4_q: "Când e cel mai luminos afară într-o zi?",
    t4_q_a: "La prânz", t4_q_b: "Noaptea", t4_q_c: "Seara", t4_q_d: "În zori",

    t5_title: "Campionul Naturii", t5_text: "Ai fost grozav! Acum știi totul despre anotimpuri și vreme.",
    t5_b1: "Natura e minunată.", t5_b2: "Fiecare anotimp are ceva bun.", t5_b3: "Iubește natura!",
    t5_inst: "Completează cuvântul lipsă!",
    t5_gap_sentence: "Când plouă și e soare, apare un {gap}.",
    t5_c51: "curcubeu", t5_c52: "om de zăpadă", t5_c53: "avion",
    t5_q: "Ce este cel mai important când ne jucăm în natură?",
    t5_q_a: "Să o protejăm și să nu facem gunoi", t5_q_b: "Să rupem crengile", t5_q_c: "Să fugărim păsările", t5_q_d: "Să lăsăm gunoiul",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <SeasonsSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b2",
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
    svg: (lang) => <WeatherTypesSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "sun",  x: 20, y: 30, label: "t2_area_sun" },
        { id: "rain", x: 50, y: 60, label: "t2_area_rain" },
        { id: "wind", x: 80, y: 30, label: "t2_area_wind" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "napos", label: "t3_bucket_napos" },
        { id: "esos", label: "t3_bucket_esos" },
      ],
      items: [
        { text: "t3_item_n1", bucketId: "napos" },
        { text: "t3_item_e1", bucketId: "esos" },
        { text: "t3_item_n2", bucketId: "napos" },
        { text: "t3_item_e2", bucketId: "esos" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b3",
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
      type: "gap-fill",
      sentence: "t5_gap_sentence",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
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
  icon: "🌳",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const NatureReviewExplorer = memo(function NatureReviewExplorer({
  color = "#84CC16", // Lime zöld a természethez
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={1} 
      explorerId="sachkunde_k1_nature_review" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default NatureReviewExplorer;
