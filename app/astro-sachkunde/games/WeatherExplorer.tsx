"use client";
// WeatherExplorer.tsx — Sachkunde Island i4: Weather & Calendar (K1)
// Topics: 1) Időjárás típusok 2) Hideg és meleg (Hőmérő) 3) A szivárvány 4) Napszakok és napok 5) Összefoglaló

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
import { WeatherTypesSvg, ThermometerSvg, RainbowSvg } from "@/app/astro-sachkunde/svg/k1/NatureWeatherSvg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-40" y="-30" width="80" height="70" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
        <rect x="-40" y="-30" width="80" height="20" rx="5" fill="#EF4444" />
        <circle cx="-20" cy="-35" r="4" fill="#94A3B8" />
        <circle cx="20" cy="-35" r="4" fill="#94A3B8" />
        <text x="0" y="20" fontSize="30" fontWeight="bold" fill="#334155" textAnchor="middle">7</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🌧️</text>
        <text x="25" y="5" fontSize="30" textAnchor="middle">☀️</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Időjárás és Naptár",
    // T1: Időjárás (Match-pairs)
    t1_title: "Milyen az idő?",
    t1_text: "Ha kinézel az ablakon, láthatod, milyen az időjárás. Néha süt a nap, máskor esik az eső vagy fúj a szél.",
    t1_b1: "Napsütésben világos van és meleg.",
    t1_b2: "Esőben vizesek leszünk, kell az esernyő.",
    t1_b3: "A szél fújja a faleveleket és a hajunkat.",
    t1_inst: "Párosítsd a képet az időjárással!",
    t1_l1: "☀️", t1_r1: "Napsütés",
    t1_l2: "🌧️", t1_r2: "Eső",
    t1_l3: "💨", t1_r3: "Szél",
    t1_q: "Mit viszünk magunkkal, ha esik az eső?",
    t1_q_a: "Esernyőt", t1_q_b: "Napszemüveget", t1_q_c: "Fürdőruhát", t1_q_d: "Hóembert",

    // T2: Hőmérő (Drag-to-bucket)
    t2_title: "Hideg vagy meleg?",
    t2_text: "A hőmérő mutatja meg nekünk, hogy kint hideg van vagy meleg. Ha a piros csík magasan van, akkor meleg van.",
    t2_b1: "Nyáron meleg van, a hőmérő sokat mutat.",
    t2_b2: "Télen hideg van, a hó is eshet.",
    t2_b3: "Vigyázz a forró teával, mert megégethet!",
    t2_inst: "Hideg vagy Meleg? Válogasd szét a dolgokat!",
    t2_bucket_hideg: "Hideg ❄️",
    t2_bucket_meleg: "Meleg 🔥",
    t2_item_h1: "Hóember", t2_item_h2: "Jégkrém",
    t2_item_m1: "Forró tea", t2_item_m2: "Tábortűz",
    t2_q: "Mivel mérjük meg, hogy milyen meleg van a szobában?",
    t2_q_a: "Hőmérővel", t2_q_b: "Vonalzóval", t2_q_c: "Órával", t2_q_d: "Mérleggel",

    // T3: Szivárvány (Gap-fill)
    t3_title: "A színes szivárvány",
    t3_text: "Láttál már szivárványt az égen? Nagyon szép és sok színből áll: piros, narancs, sárga, zöld, kék, lila.",
    t3_b1: "Szivárvány akkor lesz, ha egyszerre esik az eső és süt a nap.",
    t3_b2: "A vízcseppek bontják fel a fényt színekre.",
    t3_b3: "Soha nem lehet megfogni a végét!",
    t3_inst: "Egészítsd ki a mondatot!",
    t3_gap_sentence: "A szivárványhoz esőre és {gap} van szükség.",
    t3_c1: "napsütésre", t3_c2: "hóra", t3_c3: "sötétségre",
    t3_q: "Mikor jelenik meg a szivárvány?",
    t3_q_a: "Ha esik az eső és közben süt a nap", t3_q_b: "Éjszaka a sötétben", t3_q_c: "Ha nagyon fúj a szél", t3_q_d: "Télen a hóesésben",

    // T4: Naptár (Word-order)
    t4_title: "Napszakok és napok",
    t4_text: "Egy nap reggel kezdődik és este ér véget. Hét napból áll egy hét, amit a naptárban tudunk megnézni.",
    t4_b1: "Reggel felkelünk, délben ebédelünk, este alszunk.",
    t4_b2: "Egy héten 7 nap van.",
    t4_b3: "Szombaton és vasárnap nincs iskola, ez a hétvége!",
    t4_inst: "Tedd sorba a napszakokat, ahogy következnek!",
    t4_w1: "Reggel", t4_w2: "Dél", t4_w3: "Este", t4_w4: "Éjszaka",
    t4_q: "Hány napból áll egy teljes hét?",
    t4_q_a: "Hét napból", t4_q_b: "Öt napból", t4_q_c: "Tíz napból", t4_q_d: "Három napból",

    // T5: Összefoglaló
    t5_title: "Időjárás mester",
    t5_text: "Most már tudod, hogyan működik a hőmérő és mit jelent az időjárásjelentés!",
    t5_b1: "Az esernyő véd az eső ellen.",
    t5_b2: "A hőmérő méri a meleget.",
    t5_b3: "A hét 7 napból áll.",
    t5_inst: "Milyen az idő, ha repülnek a falevelek a fákról?",
    t5_gap_sentence2: "Ha nagyon fúj a {gap}, a fák ágai is mozognak.",
    t5_c51: "szél", t5_c52: "nap", t5_c53: "hó",
    t5_q: "Mit mutat a naptár?",
    t5_q_a: "A napokat és a hónapokat", t5_q_b: "A pontos időt órában", t5_q_c: "A hőmérsékletet", t5_q_d: "A testsúlyunkat",
  },
  en: {
    explorer_title: "Weather & Calendar",
    t1_title: "How is the weather?", t1_text: "If you look out the window, you can see the weather. Sometimes the sun shines, sometimes it rains or the wind blows.",
    t1_b1: "In the sunshine, it is bright and warm.", t1_b2: "In the rain, we get wet and need an umbrella.", t1_b3: "The wind blows the leaves and our hair.",
    t1_inst: "Match the picture with the weather!",
    t1_l1: "☀️", t1_r1: "Sunshine",
    t1_l2: "🌧️", t1_r2: "Rain",
    t1_l3: "💨", t1_r3: "Wind",
    t1_q: "What do we take with us when it rains?",
    t1_q_a: "An umbrella", t1_q_b: "Sunglasses", t1_q_c: "A swimsuit", t1_q_d: "A snowman",

    t2_title: "Hot or Cold?", t2_text: "The thermometer shows us if it's hot or cold outside. If the red line is high, it is hot.",
    t2_b1: "In summer it is hot, the thermometer is high.", t2_b2: "In winter it is cold, and it might snow.", t2_b3: "Be careful with hot tea, it can burn you!",
    t2_inst: "Hot or Cold? Sort the things!",
    t2_bucket_hideg: "Cold ❄️", t2_bucket_meleg: "Hot 🔥",
    t2_item_h1: "Snowman", t2_item_h2: "Ice cream",
    t2_item_m1: "Hot tea", t2_item_m2: "Campfire",
    t2_q: "What do we use to measure how hot the room is?",
    t2_q_a: "A thermometer", t2_q_b: "A ruler", t2_q_c: "A clock", t2_q_d: "A scale",

    t3_title: "The Colorful Rainbow", t3_text: "Have you ever seen a rainbow? It is very beautiful and has many colors: red, orange, yellow, green, blue, purple.",
    t3_b1: "A rainbow appears when it rains and the sun shines at the same time.", t3_b2: "Water drops split the light into colors.", t3_b3: "You can never touch the end of it!",
    t3_inst: "Complete the sentence!", t3_gap_sentence: "For a rainbow, you need rain and {gap}.",
    t3_c1: "sunshine", t3_c2: "snow", t3_c3: "darkness",
    t3_q: "When does a rainbow appear?",
    t3_q_a: "When it rains and the sun shines together", t3_q_b: "At night in the dark", t3_q_c: "When the wind blows hard", t3_q_d: "In winter during snow",

    t4_title: "Times of Day & Calendar", t4_text: "A day starts in the morning and ends at night. A week has seven days, which we can see on a calendar.",
    t4_b1: "We wake up in the morning, eat lunch at noon, sleep at night.", t4_b2: "There are 7 days in a week.", t4_b3: "No school on Saturday and Sunday, that's the weekend!",
    t4_inst: "Put the times of day in the right order!",
    t4_w1: "Morning", t4_w2: "Noon", t4_w3: "Evening", t4_w4: "Night",
    t4_q: "How many days are in a full week?",
    t4_q_a: "Seven days", t4_q_b: "Five days", t4_q_c: "Ten days", t4_q_d: "Three days",

    t5_title: "Weather Master", t5_text: "Now you know how the thermometer works and what the weather forecast means!",
    t5_b1: "An umbrella protects from rain.", t5_b2: "A thermometer measures heat.", t5_b3: "A week has 7 days.",
    t5_inst: "What is the weather like if leaves fly off the trees?",
    t5_gap_sentence2: "If the {gap} blows hard, the tree branches move.",
    t5_c51: "wind", t5_c52: "sun", t5_c53: "snow",
    t5_q: "What does the calendar show?",
    t5_q_a: "The days and months", t5_q_b: "The exact time in hours", t5_q_c: "The temperature", t5_q_d: "Our body weight",
  },
  de: {
    explorer_title: "Wetter & Kalender",
    t1_title: "Wie ist das Wetter?", t1_text: "Wenn du aus dem Fenster schaust, siehst du das Wetter. Manchmal scheint die Sonne, mal regnet es oder der Wind weht.",
    t1_b1: "Bei Sonnenschein ist es hell und warm.", t1_b2: "Beim Regen werden wir nass, wir brauchen einen Schirm.", t1_b3: "Der Wind bläst die Blätter und unsere Haare.",
    t1_inst: "Verbinde das Bild mit dem Wetter!",
    t1_l1: "☀️", t1_r1: "Sonnenschein",
    t1_l2: "🌧️", t1_r2: "Regen",
    t1_l3: "💨", t1_r3: "Wind",
    t1_q: "Was nehmen wir mit, wenn es regnet?",
    t1_q_a: "Einen Regenschirm", t1_q_b: "Eine Sonnenbrille", t1_q_c: "Einen Badeanzug", t1_q_d: "Einen Schneemann",

    t2_title: "Kalt oder warm?", t2_text: "Das Thermometer zeigt uns, ob es draußen kalt oder warm ist. Wenn der rote Strich weit oben ist, ist es warm.",
    t2_b1: "Im Sommer ist es warm, das Thermometer zeigt viel an.", t2_b2: "Im Winter ist es kalt, es kann schneien.", t2_b3: "Vorsicht bei heißem Tee, er kann dich verbrennen!",
    t2_inst: "Kalt oder Warm? Sortiere die Dinge!",
    t2_bucket_hideg: "Kalt ❄️", t2_bucket_meleg: "Warm 🔥",
    t2_item_h1: "Schneemann", t2_item_h2: "Eiscreme",
    t2_item_m1: "Heißer Tee", t2_item_m2: "Lagerfeuer",
    t2_q: "Womit messen wir, wie warm es im Zimmer ist?",
    t2_q_a: "Mit einem Thermometer", t2_q_b: "Mit einem Lineal", t2_q_c: "Mit einer Uhr", t2_q_d: "Mit einer Waage",

    t3_title: "Der bunte Regenbogen", t3_text: "Hast du schon mal einen Regenbogen gesehen? Er ist sehr schön und hat viele Farben: rot, orange, gelb, grün, blau, lila.",
    t3_b1: "Ein Regenbogen entsteht, wenn es regnet und gleichzeitig die Sonne scheint.", t3_b2: "Wassertropfen teilen das Licht in Farben.", t3_b3: "Man kann sein Ende nie berühren!",
    t3_inst: "Ergänze den Satz!", t3_gap_sentence: "Für einen Regenbogen braucht man Regen und {gap}.",
    t3_c1: "Sonnenschein", t3_c2: "Schnee", t3_c3: "Dunkelheit",
    t3_q: "Wann erscheint ein Regenbogen?",
    t3_q_a: "Wenn es regnet und die Sonne scheint", t3_q_b: "Nachts im Dunkeln", t3_q_c: "Wenn der Wind stark weht", t3_q_d: "Im Winter beim Schneien",

    t4_title: "Tageszeiten & Kalender", t4_text: "Ein Tag beginnt am Morgen und endet in der Nacht. Eine Woche hat 7 Tage. Das steht im Kalender.",
    t4_b1: "Morgens wachen wir auf, mittags essen wir, nachts schlafen wir.", t4_b2: "Eine Woche hat 7 Tage.", t4_b3: "Samstag und Sonntag ist keine Schule, das ist das Wochenende!",
    t4_inst: "Bringe die Tageszeiten in die richtige Reihenfolge!",
    t4_w1: "Morgen", t4_w2: "Mittag", t4_w3: "Abend", t4_w4: "Nacht",
    t4_q: "Wie viele Tage hat eine ganze Woche?",
    t4_q_a: "Sieben Tage", t4_q_b: "Fünf Tage", t4_q_c: "Zehn Tage", t4_q_d: "Drei Tage",

    t5_title: "Wetter-Meister", t5_text: "Jetzt weißt du, wie ein Thermometer funktioniert und was das Wetter bedeutet!",
    t5_b1: "Der Schirm schützt vor Regen.", t5_b2: "Das Thermometer misst die Wärme.", t5_b3: "Die Woche hat 7 Tage.",
    t5_inst: "Wie ist das Wetter, wenn Blätter vom Baum fliegen?",
    t5_gap_sentence2: "Wenn der {gap} weht, bewegen sich die Äste.",
    t5_c51: "Wind", t5_c52: "Sonne", t5_c53: "Schnee",
    t5_q: "Was zeigt der Kalender an?",
    t5_q_a: "Die Tage und Monate", t5_q_b: "Die genaue Uhrzeit", t5_q_c: "Die Temperatur", t5_q_d: "Unser Gewicht",
  },
  ro: {
    explorer_title: "Vremea și Calendarul",
    t1_title: "Cum e vremea?", t1_text: "Dacă te uiți pe fereastră, vezi cum este vremea. Uneori e soare, alteori plouă sau bate vântul.",
    t1_b1: "Când e soare, este lumină și cald.", t1_b2: "Când plouă, ne udăm și avem nevoie de umbrelă.", t1_b3: "Vântul suflă frunzele și părul nostru.",
    t1_inst: "Potrivește imaginea cu vremea!",
    t1_l1: "☀️", t1_r1: "Soare",
    t1_l2: "🌧️", t1_r2: "Ploaie",
    t1_l3: "💨", t1_r3: "Vânt",
    t1_q: "Ce luăm cu noi când plouă?",
    t1_q_a: "O umbrelă", t1_q_b: "Ochelari de soare", t1_q_c: "Costum de baie", t1_q_d: "Un om de zăpadă",

    t2_title: "Cald sau rece?", t2_text: "Termometrul ne arată dacă afară este cald sau frig. Dacă linia roșie este sus, atunci e cald.",
    t2_b1: "Vara este cald, termometrul arată mult.", t2_b2: "Iarna este frig și poate ninge.", t2_b3: "Atenție la ceaiul fierbinte, te poate arde!",
    t2_inst: "Cald sau Rece? Sortează lucrurile!",
    t2_bucket_hideg: "Rece ❄️", t2_bucket_meleg: "Cald 🔥",
    t2_item_h1: "Om de zăpadă", t2_item_h2: "Înghețată",
    t2_item_m1: "Ceai fierbinte", t2_item_m2: "Foc de tabără",
    t2_q: "Cu ce măsurăm cât de cald este în cameră?",
    t2_q_a: "Cu un termometru", t2_q_b: "Cu o riglă", t2_q_c: "Cu un ceas", t2_q_d: "Cu un cântar",

    t3_title: "Curcubeul colorat", t3_text: "Ai văzut vreodată un curcubeu? Este foarte frumos și are multe culori: roșu, portocaliu, galben, verde, albastru, mov.",
    t3_b1: "Curcubeul apare când plouă și e soare în același timp.", t3_b2: "Picăturile de apă despart lumina în culori.", t3_b3: "Nu poți atinge niciodată capătul lui!",
    t3_inst: "Completează propoziția!", t3_gap_sentence: "Pentru un curcubeu, este nevoie de ploaie și de {gap}.",
    t3_c1: "soare", t3_c2: "zăpadă", t3_c3: "întuneric",
    t3_q: "Când apare curcubeul?",
    t3_q_a: "Când plouă și e soare în același timp", t3_q_b: "Noaptea pe întuneric", t3_q_c: "Când bate vântul tare", t3_q_d: "Iarna când ninge",

    t4_title: "Momentele zilei", t4_text: "O zi începe dimineața și se termină noaptea. O săptămână are 7 zile, pe care le vedem în calendar.",
    t4_b1: "Dimineața ne trezim, la prânz mâncăm, noaptea dormim.", t4_b2: "O săptămână are 7 zile.", t4_b3: "Sâmbăta și duminica nu e școală, e weekend!",
    t4_inst: "Pune momentele zilei în ordinea corectă!",
    t4_w1: "Dimineața", t4_w2: "Prânz", t4_w3: "Seara", t4_w4: "Noaptea",
    t4_q: "Câte zile are o săptămână întreagă?",
    t4_q_a: "Șapte zile", t4_q_b: "Cinci zile", t4_q_c: "Zece zile", t4_q_d: "Trei zile",

    t5_title: "Maestrul vremii", t5_text: "Acum știi cum funcționează termometrul și cum este vremea!",
    t5_b1: "Umbrela ne apără de ploaie.", t5_b2: "Termometrul măsoară căldura.", t5_b3: "Săptămâna are 7 zile.",
    t5_inst: "Cum e vremea când frunzele zboară din copaci?",
    t5_gap_sentence2: "Când bate {gap} tare, se mișcă și crengile copacilor.",
    t5_c51: "vântul", t5_c52: "soarele", t5_c53: "zăpada",
    t5_q: "Ce ne arată calendarul?",
    t5_q_a: "Zilele și lunile", t5_q_b: "Ora exactă", t5_q_c: "Temperatura", t5_q_d: "Greutatea noastră",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <WeatherTypesSvg lang={lang} />,
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
    svg: (lang) => <ThermometerSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "hideg", label: "t2_bucket_hideg" },
        { id: "meleg", label: "t2_bucket_meleg" },
      ],
      items: [
        { text: "t2_item_h1", bucketId: "hideg" },
        { text: "t2_item_m1", bucketId: "meleg" },
        { text: "t2_item_h2", bucketId: "hideg" },
        { text: "t2_item_m2", bucketId: "meleg" },
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
    svg: (lang) => <RainbowSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0,
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
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_gap_sentence2",
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
  icon: "🌧️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WeatherExplorer = memo(function WeatherExplorer({
  color = "#0EA5E9", // Sky Blue a felhőkhöz és időjáráshoz
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
      explorerId="sachkunde_k1_weather" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default WeatherExplorer;
