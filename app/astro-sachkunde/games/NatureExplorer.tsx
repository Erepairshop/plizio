"use client";
// NatureExplorer.tsx — Sachkunde Island i3: Seasons & Nature (K1)
// Topics: 1) A négy évszak (jahreszeiten_natur) 2) Fák (bäume) 3) Virágok és Termések (blueten_fruechte) 4) Természet körforgása 5) Összefoglaló

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
import { SeasonsSvg } from "@/app/astro-sachkunde/svg/k1/NatureWeatherSvg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="15" fontSize="45" textAnchor="middle">🌲</text>
        <text x="0" y="15" fontSize="45" textAnchor="middle">🌳</text>
        <text x="60" y="15" fontSize="45" textAnchor="middle">🍂</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF4FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="15" fontSize="40" textAnchor="middle">🌸</text>
        <text x="0" y="15" fontSize="40" textAnchor="middle">🌼</text>
        <text x="60" y="15" fontSize="40" textAnchor="middle">🍎</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="5" fontSize="32" textAnchor="middle">🌱</text>
        <text x="0" y="5" fontSize="32" textAnchor="middle">🌳</text>
        <text x="50" y="5" fontSize="32" textAnchor="middle">🍂</text>
        <text x="-25" y="40" fontSize="22" textAnchor="middle">→</text>
        <text x="25" y="40" fontSize="22" textAnchor="middle">→</text>
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
        <text x="-15" y="10" fontSize="30" textAnchor="middle">🌳</text>
        <text x="20" y="-5" fontSize="25" textAnchor="middle">🌸</text>
        <text x="10" y="30" fontSize="20" textAnchor="middle">🍎</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Évszakok és Természet",
    // T1: Évszakok (Match-pairs)
    t1_title: "A négy évszak",
    t1_text: "Egy évben négy évszak van: tavasz, nyár, ősz és tél. Mindegyik évszak más és más, a természet folyamatosan változik.",
    t1_b1: "Tavasszal nyílnak a virágok.",
    t1_b2: "Nyáron nagyon meleg van, lehet fürdeni.",
    t1_b3: "Ősszel hullanak a falevelek, télen pedig esik a hó.",
    t1_inst: "Párosítsd az évszakot ahhoz, ami történik benne!",
    t1_l1: "Tél ❄️", t1_r1: "Hóember építés",
    t1_l2: "Tavasz 🌷", t1_r2: "Virágok nyílása",
    t1_l3: "Nyár ☀️", t1_r3: "Fürdés a strandon",
    t1_q: "Melyik évszakban hullanak le a sárga és piros falevelek?",
    t1_q_a: "Ősszel", t1_q_b: "Tavasszal", t1_q_c: "Télen", t1_q_d: "Nyáron",

    // T2: Ruhák (Drag-to-bucket)
    t2_title: "Hideg van vagy meleg?",
    t2_text: "Ahogy változik az időjárás, úgy kell felöltöznünk is, hogy ne fázzunk meg, vagy ne legyen túl melegünk.",
    t2_b1: "Nyáron rövidnadrágot és pólót hordunk.",
    t2_b2: "Télen vastag kabát, sapka és sál kell.",
    t2_b3: "Ha esik az eső, gumicsizmát húzunk.",
    t2_inst: "Mit mikor veszünk fel? Válogasd szét!",
    t2_bucket_nyar: "Nyár ☀️",
    t2_bucket_tel: "Tél ⛄",
    t2_item_n1: "Póló", t2_item_n2: "Napszemüveg",
    t2_item_t1: "Vastag kabát", t2_item_t2: "Kötött sapka",
    t2_q: "Mit húzunk a lábunkra, ha nagy a sár és esik az eső?",
    t2_q_a: "Gumicsizmát", t2_q_b: "Szandált", t2_q_c: "Zoknit", t2_q_d: "Semmit",

    // T3: Nappal és éjjel (Gap-fill)
    t3_title: "Nappal és Éjszaka",
    t3_text: "Minden nap nappalból és éjszakából áll. Nappal világos van, éjjel pedig sötét.",
    t3_b1: "Nappal a Nap világít az égen.",
    t3_b2: "Éjszaka a Holdat és a csillagokat látjuk.",
    t3_b3: "Éjszaka alszunk és pihenünk.",
    t3_inst: "Egészítsd ki a mondatot!",
    t3_gap_sentence: "Amikor sötét van és alszunk, olyankor az égen a {gap} világít.",
    t3_c1: "Hold", t3_c2: "Nap", t3_c3: "felhő",
    t3_q: "Mit csinálunk általában éjszaka?",
    t3_q_a: "Alszunk", t3_q_b: "Iskolába megyünk", t3_q_c: "Ebédelünk", t3_q_d: "A strandon játszunk",

    // T4: Fényforrások (Label-diagram)
    t4_title: "Fény és sötétség",
    t4_text: "Hogy lássunk a sötétben, fényre van szükségünk. Sok dolog adhat fényt a természetben és a házban is.",
    t4_b1: "A legnagyobb természetes fényforrásunk a Nap.",
    t4_b2: "A szobában a lámpa ad nekünk fényt.",
    t4_b3: "Régen a tűz és a gyertya világított a sötétben.",
    t4_inst: "Keresd meg, mik adnak fényt a képen!",
    t4_area_sun: "Nap",
    t4_area_lamp: "Lámpa",
    t4_area_fire: "Tűz",
    t4_q: "Melyik az a fényforrás, amit mi kapcsolunk fel a szobában?",
    t4_q_a: "A lámpa", t4_q_b: "A Nap", t4_q_c: "A csillagok", t4_q_d: "A Hold",

    // T5: Összefoglaló
    t5_title: "A természet csodái",
    t5_text: "A természet mindig gondoskodik rólunk. Fényt ad, meleget és hideget is, hogy minden élőlény jól érezze magát.",
    t5_b1: "A Nap adja a fényt és a meleget.",
    t5_b2: "Négy évszak váltja egymást sorban.",
    t5_b3: "Minden évszaknak megvan a maga szépsége.",
    t5_inst: "Melyik évszak jön a tél után?",
    t5_gap_sentence2: "Amikor elolvad a hó, megérkezik a {gap}.",
    t5_c51: "tavasz", t5_c52: "nyár", t5_c53: "ősz",
    t5_q: "Ki adja nekünk a természetben a legtöbb fényt és meleget?",
    t5_q_a: "A Nap", t5_q_b: "A Hold", t5_q_c: "A zseblámpa", t5_q_d: "A hóember",
  },
  en: {
    explorer_title: "Seasons & Nature",
    t1_title: "The Four Seasons", t1_text: "There are four seasons in a year: spring, summer, autumn, and winter. The nature changes in each one.",
    t1_b1: "In spring, flowers bloom.", t1_b2: "In summer, it's very hot, we can swim.", t1_b3: "In autumn, leaves fall. In winter, it snows.",
    t1_inst: "Match the season with what happens!",
    t1_l1: "Winter ❄️", t1_r1: "Building a snowman",
    t1_l2: "Spring 🌷", t1_r2: "Flowers blooming",
    t1_l3: "Summer ☀️", t1_r3: "Swimming at the beach",
    t1_q: "In which season do yellow and red leaves fall from trees?",
    t1_q_a: "Autumn", t1_q_b: "Spring", t1_q_c: "Winter", t1_q_d: "Summer",

    t2_title: "Hot or Cold?", t2_text: "As the weather changes, we must wear different clothes to stay warm or cool.",
    t2_b1: "In summer, we wear t-shirts and shorts.", t2_b2: "In winter, we need a thick coat and a hat.", t2_b3: "If it rains, we put on rubber boots.",
    t2_inst: "What do we wear when? Sort them!",
    t2_bucket_nyar: "Summer ☀️", t2_bucket_tel: "Winter ⛄",
    t2_item_n1: "T-shirt", t2_item_n2: "Sunglasses",
    t2_item_t1: "Thick coat", t2_item_t2: "Knitted hat",
    t2_q: "What do we put on our feet when it rains and is muddy?",
    t2_q_a: "Rubber boots", t2_q_b: "Sandals", t2_q_c: "Socks", t2_q_d: "Nothing",

    t3_title: "Day and Night", t3_text: "Every day has daytime and nighttime. It's bright during the day and dark at night.",
    t3_b1: "During the day, the Sun shines.", t3_b2: "At night, we see the Moon and stars.", t3_b3: "At night, we sleep and rest.",
    t3_inst: "Fill in the missing word!", t3_gap_sentence: "When it is dark and we sleep, the {gap} shines in the sky.",
    t3_c1: "Moon", t3_c2: "Sun", t3_c3: "cloud",
    t3_q: "What do we usually do at night?",
    t3_q_a: "We sleep", t3_q_b: "We go to school", t3_q_c: "We eat lunch", t3_q_d: "We play at the beach",

    t4_title: "Sources of Light", t4_text: "To see in the dark, we need light. Many things can give us light.",
    t4_b1: "Our biggest natural light source is the Sun.", t4_b2: "In our room, a lamp gives us light.", t4_b3: "Long ago, fire and candles gave light.",
    t4_inst: "Find what gives light in the picture!",
    t4_area_sun: "Sun", t4_area_lamp: "Lamp", t4_area_fire: "Fire",
    t4_q: "Which light source do we turn on in our room?",
    t4_q_a: "The lamp", t4_q_b: "The Sun", t4_q_c: "The stars", t4_q_d: "The Moon",

    t5_title: "Wonders of Nature", t5_text: "Nature always takes care of us. It gives light, warmth, and cold so every living thing is happy.",
    t5_b1: "The Sun gives light and warmth.", t5_b2: "Four seasons follow each other.", t5_b3: "Every season is beautiful.",
    t5_inst: "Which season comes after winter?", t5_gap_sentence2: "When the snow melts, {gap} arrives.",
    t5_c51: "spring", t5_c52: "summer", t5_c53: "autumn",
    t5_q: "Who gives us the most light and warmth in nature?",
    t5_q_a: "The Sun", t5_q_b: "The Moon", t5_q_c: "A flashlight", t5_q_d: "A snowman",
  },
  de: {
    explorer_title: "Jahreszeiten & Natur",
    t1_title: "Die vier Jahreszeiten", t1_text: "Ein Jahr hat vier Jahreszeiten: Frühling, Sommer, Herbst und Winter. Die Natur verändert sich ständig.",
    t1_b1: "Im Frühling blühen die Blumen.", t1_b2: "Im Sommer ist es heiß, wir können baden.", t1_b3: "Im Herbst fallen Blätter, im Winter schneit es.",
    t1_inst: "Verbinde die Jahreszeit mit dem, was passiert!",
    t1_l1: "Winter ❄️", t1_r1: "Schneemann bauen",
    t1_l2: "Frühling 🌷", t1_r2: "Blumen blühen",
    t1_l3: "Sommer ☀️", t1_r3: "Baden gehen",
    t1_q: "In welcher Jahreszeit fallen gelbe und rote Blätter vom Baum?",
    t1_q_a: "Im Herbst", t1_q_b: "Im Frühling", t1_q_c: "Im Winter", t1_q_d: "Im Sommer",

    t2_title: "Heiß oder kalt?", t2_text: "Wenn sich das Wetter ändert, müssen wir andere Kleidung tragen, damit uns nicht kalt oder zu warm wird.",
    t2_b1: "Im Sommer tragen wir T-Shirts und kurze Hosen.", t2_b2: "Im Winter brauchen wir dicke Jacken und Mützen.", t2_b3: "Bei Regen ziehen wir Gummistiefel an.",
    t2_inst: "Was ziehen wir wann an? Sortiere!",
    t2_bucket_nyar: "Sommer ☀️", t2_bucket_tel: "Winter ⛄",
    t2_item_n1: "T-Shirt", t2_item_n2: "Sonnenbrille",
    t2_item_t1: "Dicke Jacke", t2_item_t2: "Wollmütze",
    t2_q: "Was ziehen wir bei Regen und Matsch an die Füße?",
    t2_q_a: "Gummistiefel", t2_q_b: "Sandalen", t2_q_c: "Socken", t2_q_d: "Nichts",

    t3_title: "Tag und Nacht", t3_text: "Jeder Tag besteht aus Tag und Nacht. Am Tag ist es hell, in der Nacht ist es dunkel.",
    t3_b1: "Am Tag scheint die Sonne.", t3_b2: "In der Nacht sehen wir den Mond und Sterne.", t3_b3: "In der Nacht schlafen wir.",
    t3_inst: "Ergänze das Wort!", t3_gap_sentence: "Wenn es dunkel ist und wir schlafen, leuchtet der {gap} am Himmel.",
    t3_c1: "Mond", t3_c2: "Sonne", t3_c3: "Wolke",
    t3_q: "Was machen wir normalerweise in der Nacht?",
    t3_q_a: "Wir schlafen", t3_q_b: "Wir gehen in die Schule", t3_q_c: "Wir essen zu Mittag", t3_q_d: "Wir spielen am Strand",

    t4_title: "Lichtquellen", t4_text: "Um im Dunkeln zu sehen, brauchen wir Licht. Viele Dinge können uns Licht geben.",
    t4_b1: "Unsere größte Lichtquelle ist die Sonne.", t4_b2: "Im Zimmer gibt uns die Lampe Licht.", t4_b3: "Früher gaben Feuer und Kerzen Licht.",
    t4_inst: "Finde, was auf dem Bild Licht gibt!",
    t4_area_sun: "Sonne", t4_area_lamp: "Lampe", t4_area_fire: "Feuer",
    t4_q: "Welche Lichtquelle schalten wir im Zimmer ein?",
    t4_q_a: "Die Lampe", t4_q_b: "Die Sonne", t4_q_c: "Die Sterne", t4_q_d: "Den Mond",

    t5_title: "Wunder der Natur", t5_text: "Die Natur sorgt immer für uns. Sie gibt Licht, Wärme und Kälte.",
    t5_b1: "Die Sonne gibt Licht und Wärme.", t5_b2: "Vier Jahreszeiten wechseln sich ab.", t5_b3: "Jede Jahreszeit ist schön.",
    t5_inst: "Welche Jahreszeit kommt nach dem Winter?", t5_gap_sentence2: "Wenn der Schnee schmilzt, kommt der {gap}.",
    t5_c51: "Frühling", t5_c52: "Sommer", t5_c53: "Herbst",
    t5_q: "Wer gibt uns am meisten Licht und Wärme?",
    t5_q_a: "Die Sonne", t5_q_b: "Der Mond", t5_q_c: "Eine Taschenlampe", t5_q_d: "Ein Schneemann",
  },
  ro: {
    explorer_title: "Anotimpuri și Natură",
    t1_title: "Cele patru anotimpuri", t1_text: "Un an are patru anotimpuri: primăvara, vara, toamna și iarna. Natura se schimbă mereu.",
    t1_b1: "Primăvara înfloresc florile.", t1_b2: "Vara este cald și putem face baie.", t1_b3: "Toamna cad frunzele, iarna ninge.",
    t1_inst: "Potrivește anotimpul cu ce se întâmplă!",
    t1_l1: "Iarna ❄️", t1_r1: "Facem om de zăpadă",
    t1_l2: "Primăvara 🌷", t1_r2: "Înfloresc florile",
    t1_l3: "Vara ☀️", t1_r3: "Facem baie în mare",
    t1_q: "În ce anotimp cad frunzele galbene și roșii?",
    t1_q_a: "Toamna", t1_q_b: "Primăvara", t1_q_c: "Iarna", t1_q_d: "Vara",

    t2_title: "Cald sau frig?", t2_text: "Când vremea se schimbă, trebuie să ne îmbrăcăm diferit ca să nu ne fie frig sau cald.",
    t2_b1: "Vara purtăm tricou și pantaloni scurți.", t2_b2: "Iarna avem nevoie de geacă groasă și căciulă.", t2_b3: "Dacă plouă, purtăm cizme de cauciuc.",
    t2_inst: "Ce purtăm și când? Sortează!",
    t2_bucket_nyar: "Vara ☀️", t2_bucket_tel: "Iarna ⛄",
    t2_item_n1: "Tricou", t2_item_n2: "Ochelari de soare",
    t2_item_t1: "Geacă groasă", t2_item_t2: "Căciulă",
    t2_q: "Ce încălțăm când plouă și e noroi?",
    t2_q_a: "Cizme de cauciuc", t2_q_b: "Sandale", t2_q_c: "Șosete", t2_q_d: "Nimic",

    t3_title: "Zi și Noapte", t3_text: "Fiecare zi are zi și noapte. Ziua este lumină, iar noaptea este întuneric.",
    t3_b1: "Ziua Soarele strălucește.", t3_b2: "Noaptea vedem Luna și stelele.", t3_b3: "Noaptea dormim și ne odihnim.",
    t3_inst: "Completează propoziția!", t3_gap_sentence: "Când e întuneric și dormim, pe cer strălucește {gap}.",
    t3_c1: "Luna", t3_c2: "Soarele", t3_c3: "norul",
    t3_q: "Ce facem de obicei noaptea?",
    t3_q_a: "Dormim", t3_q_b: "Mergem la școală", t3_q_c: "Mâncăm prânzul", t3_q_d: "Ne jucăm la plajă",

    t4_title: "Surse de lumină", t4_text: "Ca să vedem pe întuneric, avem nevoie de lumină. Multe lucruri pot da lumină.",
    t4_b1: "Cea mai mare sursă de lumină este Soarele.", t4_b2: "În cameră, lampa ne dă lumină.", t4_b3: "Demult, focul și lumânarea dădeau lumină.",
    t4_inst: "Găsește sursele de lumină în imagine!",
    t4_area_sun: "Soare", t4_area_lamp: "Lampă", t4_area_fire: "Foc",
    t4_q: "Ce sursă de lumină aprindem în cameră?",
    t4_q_a: "Lampa", t4_q_b: "Soarele", t4_q_c: "Stelele", t4_q_d: "Luna",

    t5_title: "Minunile Naturii", t5_text: "Natura are grijă de noi. Ne dă lumină, căldură și frig.",
    t5_b1: "Soarele ne dă lumină și căldură.", t5_b2: "Patru anotimpuri vin unul după altul.", t5_b3: "Fiecare anotimp e frumos.",
    t5_inst: "Ce anotimp vine după iarnă?", t5_gap_sentence2: "Când zăpada se topește, vine {gap}.",
    t5_c51: "primăvara", t5_c52: "vara", t5_c53: "toamna",
    t5_q: "Cine ne dă cea mai multă lumină și căldură?",
    t5_q_a: "Soarele", t5_q_b: "Luna", t5_q_c: "Lanterna", t5_q_d: "Omul de zăpadă",
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
      hint2: "t1_b3",
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
        { id: "nyar", label: "t2_bucket_nyar" },
        { id: "tel", label: "t2_bucket_tel" },
      ],
      items: [
        { text: "t2_item_n1", bucketId: "nyar" },
        { text: "t2_item_t1", bucketId: "tel" },
        { text: "t2_item_n2", bucketId: "nyar" },
        { text: "t2_item_t2", bucketId: "tel" },
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
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0,
      instruction: "t3_inst",
      hint1: "t3_b2",
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
    svg: (lang) => <LightSourcesSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "sun",  x: 20, y: 30, label: "t4_area_sun" },
        { id: "lamp", x: 75, y: 30, label: "t4_area_lamp" },
        { id: "fire", x: 50, y: 70, label: "t4_area_fire" },
      ],
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
      hint1: "t5_b2",
      hint2: "t5_b1",
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

const NatureExplorer = memo(function NatureExplorer({
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
      explorerId="sachkunde_k1_nature" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default NatureExplorer;
