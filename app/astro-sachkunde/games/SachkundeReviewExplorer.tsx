"use client";
// SachkundeReviewExplorer.tsx — Sachkunde Island i9: Grand Finale (K1)
// Topics: 1) Érzékszervek 2) Állatok 3) Időjárás 4) Közlekedés 5) Újrahasznosítás

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
import { FiveSensesSvg } from "@/app/astro-sachkunde/svg/k2/KidsScienceSvg";
import { WeatherTypesSvg } from "@/app/astro-sachkunde/svg/k1/NatureWeatherSvg";
import { TrafficLightSvg, RecyclingBinsSvg } from "@/app/astro-sachkunde/svg/k1/TrafficRecyclingSvg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="45" textAnchor="middle">🐕</text>
        <path d="M -10,0 L 10,0" stroke="#84CC16" strokeWidth="4" strokeDasharray="4 4" />
        <text x="40" y="15" fontSize="45" textAnchor="middle">🐻</text>
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
    explorer_title: "Nagy Sachkunde Kvíz",
    // T1: Érzékek (Match-pairs)
    t1_title: "1. Próba: Érzékszervek",
    t1_text: "Emlékszel még, mivel mit csinálunk? A testünk nagyon okos, mindent érez, lát és hall!",
    t1_b1: "A szemünkkel látjuk a színeket.",
    t1_b2: "A fülünkkel halljuk a zenét.",
    t1_b3: "Az orrunkkal érezzük a finom illatokat.",
    t1_inst: "Párosítsd az érzékszervet a feladatával!",
    t1_l1: "Szem 👁️", t1_r1: "Látás",
    t1_l2: "Fül 👂", t1_r2: "Hallás",
    t1_l3: "Nyelv 👅", t1_r3: "Ízlelés",
    t1_q: "Mivel érezzük a fagyi finom ízét?",
    t1_q_a: "A nyelvünkkel", t1_q_b: "A fülünkkel", t1_q_c: "A szemünkkel", t1_q_d: "A hajunkkal",

    // T2: Állatok (Drag-to-bucket)
    t2_title: "2. Próba: Állatok",
    t2_text: "Vannak állatok, akik velünk élnek a házban, és vannak, akik kint a sűrű erdőben.",
    t2_b1: "A háziállatokat mi etetjük.",
    t2_b2: "A vadállatok maguknak keresnek élelmet.",
    t2_b3: "Minden állatra vigyáznunk kell!",
    t2_inst: "Háziállat vagy Vadállat? Válogasd szét!",
    t2_bucket_hazi: "Háziállat 🏠",
    t2_bucket_vad: "Vadállat 🌲",
    t2_item_h1: "Kutya", t2_item_h2: "Macska",
    t2_item_v1: "Medve", t2_item_v2: "Szarvas",
    t2_q: "Hol él a medve és a szarvas?",
    t2_q_a: "Az erdőben", t2_q_b: "A nappaliban", t2_q_c: "A konyhában", t2_q_d: "Az iskolában",

    // T3: Időjárás (Gap-fill)
    t3_title: "3. Próba: Időjárás",
    t3_text: "Mindig úgy kell felöltöznünk, amilyen az időjárás odakint.",
    t3_b1: "Ha esik, kell a gumicsizma.",
    t3_b2: "Ha süt a nap, jó a rövidnadrág.",
    t3_b3: "Télen, ha esik a hó, sapkát és sálat húzunk.",
    t3_inst: "Egészítsd ki a mondatot!",
    t3_gap_sentence: "Amikor télen nagyon hideg van és esik a {gap}, hóembert építünk.",
    t3_c1: "hó", t3_c2: "eső", t3_c3: "falevél",
    t3_q: "Mit viszünk magunkkal, ha esik az eső?",
    t3_q_a: "Esernyőt", t3_q_b: "Napszemüveget", t3_q_c: "Fürdőruhát", t3_q_d: "Hálózsákot",

    // T4: Közlekedés (Word-order)
    t4_title: "4. Próba: Közlekedés",
    t4_text: "A zebrán való átkelés nagyon fontos szabály! Emlékszel, mit kell tenned, mielőtt lelépsz az útra?",
    t4_b1: "Mindig állj meg az út szélén.",
    t4_b2: "Nézz körül balra, aztán jobbra.",
    t4_b3: "Csak akkor indulj, ha nem jön autó!",
    t4_inst: "Tedd sorba a zebrán való átkelés lépéseit!",
    t4_w1: "Megállok", t4_w2: "Balra nézek", t4_w3: "Jobbra nézek", t4_w4: "Átmegyek",
    t4_q: "Milyen színű lámpánál szabad átmenni az úton?",
    t4_q_a: "Zöldnél", t4_q_b: "Pirosnál", t4_q_c: "Sárgánál", t4_q_d: "Feketénél",

    // T5: Újrahasznosítás (Label-diagram)
    t5_title: "5. Próba: Szemétválogatás",
    t5_text: "Ha szeretjük a természetet, a szemetet a megfelelő színű kukába dobjuk!",
    t5_b1: "Kék kuka: papír.",
    t5_b2: "Sárga kuka: műanyag.",
    t5_b3: "Zöld kuka: üveg.",
    t5_inst: "Melyik kuka mit rejt? Keresd meg a színeket!",
    t5_area_blue: "Kék (Papír)",
    t5_area_yellow: "Sárga (Műanyag)",
    t5_area_green: "Zöld (Üveg)",
    t5_q: "Hová dobjuk a kiürült műanyag flakont?",
    t5_q_a: "A sárga kukába", t5_q_b: "A kék kukába", t5_q_c: "Az erdőbe", t5_q_d: "A zöld kukába",
  },
  en: {
    explorer_title: "Grand Review Quiz",
    t1_title: "Trial 1: Senses", t1_text: "Do you remember what our body parts do? Our body is very smart!",
    t1_b1: "We see colors with our eyes.", t1_b2: "We hear music with our ears.", t1_b3: "We smell sweet scents with our nose.",
    t1_inst: "Match the sense organ with its job!",
    t1_l1: "Eye 👁️", t1_r1: "Seeing",
    t1_l2: "Ear 👂", t1_r2: "Hearing",
    t1_l3: "Tongue 👅", t1_r3: "Tasting",
    t1_q: "What do we use to taste sweet ice cream?",
    t1_q_a: "Our tongue", t1_q_b: "Our ears", t1_q_c: "Our eyes", t1_q_d: "Our hair",

    t2_title: "Trial 2: Animals", t2_text: "Some animals live with us in the house, others live out in the deep forest.",
    t2_b1: "We feed our pets.", t2_b2: "Wild animals find their own food.", t2_b3: "We must protect all animals!",
    t2_inst: "Pet or Wild Animal? Sort them out!",
    t2_bucket_hazi: "Pet 🏠", t2_bucket_vad: "Wild Animal 🌲",
    t2_item_h1: "Dog", t2_item_h2: "Cat",
    t2_item_v1: "Bear", t2_item_v2: "Deer",
    t2_q: "Where do bears and deer live?",
    t2_q_a: "In the forest", t2_q_b: "In the living room", t2_q_c: "In the kitchen", t2_q_d: "In school",

    t3_title: "Trial 3: Weather", t3_text: "We must always dress according to the weather outside.",
    t3_b1: "If it rains, we need rubber boots.", t3_b2: "If it's sunny, shorts are great.", t3_b3: "In winter, if it snows, we wear a hat and scarf.",
    t3_inst: "Complete the sentence!", t3_gap_sentence: "When it is very cold in winter and the {gap} falls, we build a snowman.",
    t3_c1: "snow", t3_c2: "rain", t3_c3: "leaves",
    t3_q: "What do we take with us when it rains?",
    t3_q_a: "An umbrella", t3_q_b: "Sunglasses", t3_q_c: "A swimsuit", t3_q_d: "A sleeping bag",

    t4_title: "Trial 4: Traffic", t4_text: "Crossing the zebra is a very important rule! Do you remember what to do before stepping on the road?",
    t4_b1: "Always stop at the edge of the road.", t4_b2: "Look around: left, then right.", t4_b3: "Only go if no car is coming!",
    t4_inst: "Put the steps of crossing the zebra in order!",
    t4_w1: "Stop", t4_w2: "Look left", t4_w3: "Look right", t4_w4: "Cross the road",
    t4_q: "At which traffic light color is it safe to cross?",
    t4_q_a: "Green", t4_q_b: "Red", t4_q_c: "Yellow", t4_q_d: "Black",

    t5_title: "Trial 5: Recycling", t5_text: "If we love nature, we throw our trash in the right colored bin!",
    t5_b1: "Blue bin: paper.", t5_b2: "Yellow bin: plastic.", t5_b3: "Green bin: glass.",
    t5_inst: "Which bin hides what? Find the colors!",
    t5_area_blue: "Blue (Paper)", t5_area_yellow: "Yellow (Plastic)", t5_area_green: "Green (Glass)",
    t5_q: "Where do we throw an empty plastic bottle?",
    t5_q_a: "In the yellow bin", t5_q_b: "In the blue bin", t5_q_c: "In the forest", t5_q_d: "In the green bin",
  },
  de: {
    explorer_title: "Das große Sachkunde-Quiz",
    t1_title: "1. Prüfung: Die Sinne", t1_text: "Erinnerst du dich, wofür unsere Körperteile da sind? Unser Körper ist sehr schlau!",
    t1_b1: "Mit den Augen sehen wir Farben.", t1_b2: "Mit den Ohren hören wir Musik.", t1_b3: "Mit der Nase riechen wir Düfte.",
    t1_inst: "Verbinde das Sinnesorgan mit seiner Aufgabe!",
    t1_l1: "Auge 👁️", t1_r1: "Sehen",
    t1_l2: "Ohr 👂", t1_r2: "Hören",
    t1_l3: "Zunge 👅", t1_r3: "Schmecken",
    t1_q: "Womit schmecken wir das leckere Eis?",
    t1_q_a: "Mit der Zunge", t1_q_b: "Mit den Ohren", t1_q_c: "Mit den Augen", t1_q_d: "Mit den Haaren",

    t2_title: "2. Prüfung: Tiere", t2_text: "Manche Tiere leben bei uns im Haus, andere tief im Wald.",
    t2_b1: "Wir füttern unsere Haustiere.", t2_b2: "Wilde Tiere suchen ihr Futter selbst.", t2_b3: "Wir müssen alle Tiere beschützen!",
    t2_inst: "Haustier oder Wildtier? Sortiere sie!",
    t2_bucket_hazi: "Haustier 🏠", t2_bucket_vad: "Wildtier 🌲",
    t2_item_h1: "Hund", t2_item_h2: "Katze",
    t2_item_v1: "Bär", t2_item_v2: "Hirsch",
    t2_q: "Wo leben Bär und Hirsch?",
    t2_q_a: "Im Wald", t2_q_b: "Im Wohnzimmer", t2_q_c: "In der Küche", t2_q_d: "In der Schule",

    t3_title: "3. Prüfung: Wetter", t3_text: "Wir müssen uns immer passend zum Wetter anziehen.",
    t3_b1: "Bei Regen brauchen wir Gummistiefel.", t3_b2: "Bei Sonne sind kurze Hosen gut.", t3_b3: "Wenn es schneit, tragen wir Mütze und Schal.",
    t3_inst: "Ergänze den Satz!", t3_gap_sentence: "Wenn es im Winter sehr kalt ist und der {gap} fällt, bauen wir einen Schneemann.",
    t3_c1: "Schnee", t3_c2: "Regen", t3_c3: "Blätter",
    t3_q: "Was nehmen wir mit, wenn es regnet?",
    t3_q_a: "Einen Regenschirm", t3_q_b: "Eine Sonnenbrille", t3_q_c: "Badesachen", t3_q_d: "Einen Schlafsack",

    t4_title: "4. Prüfung: Verkehr", t4_text: "Der Zebrastreifen ist eine wichtige Regel! Weißt du noch, was du tun musst?",
    t4_b1: "Bleib immer am Straßenrand stehen.", t4_b2: "Schau nach links, dann nach rechts.", t4_b3: "Geh nur, wenn kein Auto kommt!",
    t4_inst: "Bringe die Schritte in die richtige Reihenfolge!",
    t4_w1: "Stehen bleiben", t4_w2: "Nach links schauen", t4_w3: "Nach rechts schauen", t4_w4: "Rübergehen",
    t4_q: "Bei welcher Ampelfarbe dürfen wir über die Straße gehen?",
    t4_q_a: "Bei Grün", t4_q_b: "Bei Rot", t4_q_c: "Bei Gelb", t4_q_d: "Bei Schwarz",

    t5_title: "5. Prüfung: Mülltrennung", t5_text: "Wenn wir die Natur lieben, werfen wir den Müll in die richtige Tonne!",
    t5_b1: "Blaue Tonne: Papier.", t5_b2: "Gelbe Tonne: Plastik.", t5_b3: "Grüne Tonne: Glas.",
    t5_inst: "Welche Tonne ist wofür? Finde die Farben!",
    t5_area_blue: "Blau (Papier)", t5_area_yellow: "Gelb (Plastik)", t5_area_green: "Grün (Glas)",
    t5_q: "Wohin werfen wir eine leere Plastikflasche?",
    t5_q_a: "In die gelbe Tonne", t5_q_b: "In die blaue Tonne", t5_q_c: "In den Wald", t5_q_d: "In die grüne Tonne",
  },
  ro: {
    explorer_title: "Marele Test Recapitulativ",
    t1_title: "Proba 1: Simțurile", t1_text: "Mai ții minte ce fac părțile corpului? Corpul nostru este foarte deștept!",
    t1_b1: "Cu ochii vedem culorile.", t1_b2: "Cu urechile auzim muzica.", t1_b3: "Cu nasul simțim mirosurile.",
    t1_inst: "Potrivește organul de simț cu rolul său!",
    t1_l1: "Ochi 👁️", t1_r1: "Văz",
    t1_l2: "Ureche 👂", t1_r2: "Auz",
    t1_l3: "Limbă 👅", t1_r3: "Gust",
    t1_q: "Cu ce simțim gustul bun al înghețatei?",
    t1_q_a: "Cu limba", t1_q_b: "Cu urechile", t1_q_c: "Cu ochii", t1_q_d: "Cu părul",

    t2_title: "Proba 2: Animalele", t2_text: "Unele animale trăiesc cu noi în casă, altele în pădurea deasă.",
    t2_b1: "Noi hrănim animalele de companie.", t2_b2: "Animalele sălbatice își caută singure hrana.", t2_b3: "Trebuie să protejăm toate animalele!",
    t2_inst: "De companie sau Sălbatic? Sortează-le!",
    t2_bucket_hazi: "De companie 🏠", t2_bucket_vad: "Sălbatic 🌲",
    t2_item_h1: "Câine", t2_item_h2: "Pisică",
    t2_item_v1: "Urs", t2_item_v2: "Cerb",
    t2_q: "Unde trăiesc ursul și cerbul?",
    t2_q_a: "În pădure", t2_q_b: "În sufragerie", t2_q_c: "În bucătărie", t2_q_d: "La școală",

    t3_title: "Proba 3: Vremea", t3_text: "Trebuie să ne îmbrăcăm mereu în funcție de vremea de afară.",
    t3_b1: "Dacă plouă, ne trebuie cizme de cauciuc.", t3_b2: "Dacă e soare, e bun un tricou.", t3_b3: "Iarna, dacă ninge, purtăm căciulă și fular.",
    t3_inst: "Completează propoziția!", t3_gap_sentence: "Când iarna este foarte frig și cade {gap}, facem un om de zăpadă.",
    t3_c1: "zăpada", t3_c2: "ploaia", t3_c3: "frunza",
    t3_q: "Ce luăm cu noi dacă plouă?",
    t3_q_a: "O umbrelă", t3_q_b: "Ochelari de soare", t3_q_c: "Costum de baie", t3_q_d: "Un sac de dormit",

    t4_title: "Proba 4: Traficul", t4_text: "Trecerea pe zebră e o regulă importantă! Mai știi ce faci înainte să pășești pe stradă?",
    t4_b1: "Mereu oprește-te la marginea drumului.", t4_b2: "Uită-te la stânga, apoi la dreapta.", t4_b3: "Treci doar dacă nu vine nicio mașină!",
    t4_inst: "Pune pașii în ordine pentru traversare!",
    t4_w1: "Mă opresc", t4_w2: "Mă uit la stânga", t4_w3: "Mă uit la dreapta", t4_w4: "Traversez strada",
    t4_q: "La ce culoare a semaforului e sigur să traversăm?",
    t4_q_a: "La verde", t4_q_b: "La roșu", t4_q_c: "La galben", t4_q_d: "La negru",

    t5_title: "Proba 5: Reciclarea", t5_text: "Dacă iubim natura, aruncăm gunoiul în coșul de culoarea potrivită!",
    t5_b1: "Coșul albastru: hârtie.", t5_b2: "Coșul galben: plastic.", t5_b3: "Coșul verde: sticlă.",
    t5_inst: "Care coș ce ascunde? Găsește culorile!",
    t5_area_blue: "Albastru (Hârtie)", t5_area_yellow: "Galben (Plastic)", t5_area_green: "Verde (Sticlă)",
    t5_q: "Unde aruncăm o sticlă goală de plastic?",
    t5_q_a: "La coșul galben", t5_q_b: "La coșul albastru", t5_q_c: "În pădure", t5_q_d: "La coșul verde",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <FiveSensesSvg lang={lang} />,
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "hazi", label: "t2_bucket_hazi" },
        { id: "vad", label: "t2_bucket_vad" },
      ],
      items: [
        { text: "t2_item_h1", bucketId: "hazi" },
        { text: "t2_item_v1", bucketId: "vad" },
        { text: "t2_item_h2", bucketId: "hazi" },
        { text: "t2_item_v2", bucketId: "vad" },
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
    svg: (lang) => <WeatherTypesSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0,
      instruction: "t3_inst",
      hint1: "t3_b3",
      hint2: "t3_b1",
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
    svg: (lang) => <TrafficLightSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b2",
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
    svg: (lang) => <RecyclingBinsSvg lang={lang} />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "blue",   x: 25, y: 50, label: "t5_area_blue" },
        { id: "yellow", x: 50, y: 50, label: "t5_area_yellow" },
        { id: "green",  x: 75, y: 50, label: "t5_area_green" },
      ],
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
  icon: "🎉",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SachkundeReviewExplorer = memo(function SachkundeReviewExplorer({
  color = "#8B5CF6", // Ünnepi lila a fináléhoz
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
      explorerId="sachkunde_k1_review" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default SachkundeReviewExplorer;
