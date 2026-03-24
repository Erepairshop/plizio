"use client";
// MapsExplorer.tsx — Sachkunde Island i8: Germany & Europe (K4)
// Topics: 1) Európa országai 2) Németország szövetségi államai 3) Hazánk és környezete 4) Térképjelek haladóknak 5) Iránytűvadászat

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Európa absztrakt alakzata */}
      <g transform="translate(120, 70) scale(0.8)">
        <path d="M -60,-40 Q -80,-20 -60,10 T -20,40 T 30,20 T 60,-10 T 20,-50 Z" fill="#4ADE80" stroke="#16A34A" strokeWidth="2" />
        {/* Országhatárok jelzése belső vonalakkal */}
        <path d="M -20,-10 L 10,10 M 10,10 L 40,-5" stroke="#16A34A" strokeWidth="1" opacity="0.5" />
        {/* Csillagok (EU jelkép absztraktan) */}
        <circle cx="0" cy="0" r="15" fill="none" stroke="#FDE047" strokeWidth="2" strokeDasharray="4 4" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Németország sziluett (nagyon leegyszerűsítve) */}
      <g transform="translate(120, 70)">
        <path d="M -25,-45 L 20,-40 L 35,-10 L 25,35 L -10,40 L -30,10 Z" fill="#CBD5E1" stroke="#475569" strokeWidth="2" />
        {/* Főváros (Berlin) helye */}
        <circle cx="15" cy="-15" r="4" fill="#EF4444" />
        {/* Néhány belső felosztás */}
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#94A3B8" strokeWidth="1" />
        <line x1="0" y1="-20" x2="0" y2="20" stroke="#94A3B8" strokeWidth="1" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEFCE8" rx="20" />
      <rect x="20" y="20" width="200" height="100" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" rx="5" />
      {/* Jelmagyarázat (Legend) */}
      <g transform="translate(50, 45)">
        <circle cx="0" cy="0" r="6" fill="#EF4444" />
        <line x1="15" y1="0" x2="50" y2="0" stroke="#94A3B8" strokeWidth="3" />
      </g>
      <g transform="translate(130, 45)">
        <rect x="-6" y="-6" width="12" height="12" fill="#1E293B" />
        <line x1="15" y1="0" x2="50" y2="0" stroke="#94A3B8" strokeWidth="3" />
      </g>
      <g transform="translate(50, 95)">
        <path d="M -8,5 L 8,5 M 0,-5 L 0,10" stroke="#3B82F6" strokeWidth="3" />
        <line x1="15" y1="0" x2="50" y2="0" stroke="#94A3B8" strokeWidth="3" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F1F5F9" rx="20" />
      {/* Térkép háttér vonalakkal */}
      <path d="M 0,40 L 240,40 M 0,80 L 240,80 M 0,120 L 240,120" stroke="#E2E8F0" strokeWidth="1" />
      <path d="M 60,0 L 60,140 M 120,0 L 120,140 M 180,0 L 180,140" stroke="#E2E8F0" strokeWidth="1" />
      {/* A tap-count iránytűi (🧭) ide fognak kerülni */}
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Európa és a Térképek",
    t1_title: "Európa, a mi kontinensünk",
    t1_text: "Európa egyike a Föld hét kontinensének. Számos különböző ország, nyelv és kultúra él itt egymás mellett.",
    t1_b1: "Európát északon az Északi-sarki-óceán határolja.",
    t1_b2: "Az Európai Unió segít az országoknak az együttműködésben.",
    t1_b3: "A kontinensünkön változatos a táj: hegyek és síkságok váltják egymást.",
    t1_inst: "Párosítsd az országot a fővárosával!",
    t1_l1: "Magyarország", t1_r1: "Budapest",
    t1_l2: "Németország", t1_r2: "Berlin",
    t1_l3: "Ausztria", t1_r3: "Bécs",
    t1_q: "Melyik kontinensen élünk?",
    t1_q_a: "Európában", t1_q_b: "Afrikában", t1_q_c: "Ázsiában", t1_q_d: "Ausztráliában",

    t2_title: "Németország felépítése",
    t2_text: "Németország egy szövetségi köztársaság, amely 16 különböző szövetségi államból (Bundesland) áll.",
    t2_b1: "Berlin nemcsak a főváros, hanem önálló állam is.",
    t2_b2: "Bavaria (Bajorország) a legnagyobb területű állam.",
    t2_b3: "Minden államnak saját kormánya és jelképei vannak.",
    t2_inst: "Válogasd szét: Mi állam és mi város?",
    t2_bucket_allam: "Szövetségi állam",
    t2_bucket_varos: "Nagyváros",
    t2_item_a1: "Bajorország", t2_item_a2: "Szászország",
    t2_item_v1: "München", t2_item_v2: "Hamburg",
    t2_q: "Hány szövetségi államból áll Németország?",
    t2_q_a: "16", t2_q_b: "10", t2_q_c: "50", t2_q_d: "12",

    // Cél: [0, 4] -> Németország, Európa
    t3_title: "Hazánk a térképen",
    t3_text: "Fontos tudni, hol helyezkedik el az országunk a szomszédaihoz képest.",
    t3_b1: "Németországnak kilenc szomszédos országa van.",
    t3_b2: "Északon a tenger, délen az Alpok hegyei határolják.",
    t3_b3: "Központi elhelyezkedése miatt fontos kereskedelmi útvonal.",
    t3_inst: "Keresd meg és jelöld meg a mondatban az ország és a kontinens nevét!",
    t3_tok0: "Németország", t3_tok1: "központi", t3_tok2: "helyet", t3_tok3: "foglal", t3_tok4: "Európa", t3_tok5: "szívében.",
    t3_q: "Melyik hegység található Németország déli határán?",
    t3_q_a: "Az Alpok", t3_q_b: "A Kárpátok", t3_q_c: "A Himalája", t3_q_d: "A Mátral",

    t4_title: "Térképolvasás mesterfokon",
    t4_text: "A térképek kicsinyített másai a valóságnak. A méretarány megmutatja, hányszoros a kicsinyítés.",
    t4_b1: "A kék vonal folyót, a piros pötty várost jelöl.",
    t4_b2: "A barna szintvonalak a hegyek magasságát mutatják.",
    t4_b3: "A méretarány segít kiszámolni a valódi távolságot.",
    t4_inst: "Tedd sorba a térképtípusokat a legkisebbtől a legnagyobbig (részletesség szerint)!",
    t4_w1: "Világtérkép", t4_w2: "Európa térkép", t4_w3: "Országtérkép", t4_w4: "Városterv",
    t4_q: "Mit mutat meg a térképen a méretarány?",
    t4_q_a: "Hogy hányszoros a kicsinyítés a valósághoz képest", t4_q_b: "Milyen messze van a Nap", t4_q_c: "Hány ember él a városban", t4_q_d: "Milyen színűek a házak",

    t5_title: "Irány a kaland!",
    t5_text: "Egy jó felfedezőnek mindig van nála iránytű, hogy ne tévedjen el a térképen.",
    t5_b1: "Az iránytű mutatója a mágneses észak felé mutat.",
    t5_b2: "Mindig tájékozódj, mielőtt elindulsz!",
    t5_b3: "Találd meg az eszközöket!",
    t5_inst: "Az expedícióhoz szükségünk van iránytűkre. Keresd meg és bökj rá az 5 darabra (🧭)!",
    t5_q: "Merre mutat az iránytű északi mágnese?",
    t5_q_a: "Észak felé", t5_q_b: "A legközelebbi bolt felé", t5_q_c: "Mindig lefelé", t5_q_d: "Körbe-körbe forog",
  },
  en: {
    explorer_title: "Europe & Maps",
    t1_title: "Europe, Our Continent", t1_text: "Europe is one of Earth's seven continents. Many different countries and cultures live here together.",
    t1_b1: "Europe is bordered by the Arctic Ocean to the north.", t1_b2: "The European Union helps countries cooperate.", t1_b3: "The landscape varies from mountains to plains.",
    t1_inst: "Match the country with its capital!",
    t1_l1: "Hungary", t1_r1: "Budapest",
    t1_l2: "Germany", t1_r2: "Berlin",
    t1_l3: "Austria", t1_r3: "Vienna",
    t1_q: "On which continent do we live?",
    t1_q_a: "Europe", t1_q_b: "Africa", t1_q_c: "Asia", t1_q_d: "Australia",

    t2_title: "Germany's Structure", t2_text: "Germany is a federal republic consisting of 16 different federal states (Bundesländer).",
    t2_b1: "Berlin is not only the capital but also a state.", t2_b2: "Bavaria is the largest state by area.", t2_b3: "Every state has its own government and symbols.",
    t2_inst: "Sort it: State or City?",
    t2_bucket_allam: "Federal State",
    t2_bucket_varos: "City",
    t2_item_a1: "Bavaria", t2_item_a2: "Saxony",
    t2_item_v1: "Munich", t2_item_v2: "Hamburg",
    t2_q: "How many federal states are in Germany?",
    t2_q_a: "16", t2_q_b: "10", t2_q_c: "50", t2_q_d: "12",

    // Target: [0, 4] -> Germany, Europe
    t3_title: "Our Place on the Map", t3_text: "It's important to know where our country is located compared to its neighbors.",
    t3_b1: "Germany has nine neighboring countries.", t3_b2: "It is bordered by the sea in the north and the Alps in the south.", t3_b3: "Its central location makes it a key trade route.",
    t3_inst: "Find and mark the names of the country and continent in the sentence!",
    t3_tok0: "Germany", t3_tok1: "occupies", t3_tok2: "a", t3_tok3: "central", t3_tok4: "Europe", t3_tok5: "location.",
    t3_q: "Which mountain range is at Germany's southern border?",
    t3_q_a: "The Alps", t3_q_b: "The Carpathians", t3_q_c: "The Himalayas", t3_q_d: "The Andes",

    t4_title: "Advanced Map Reading", t4_text: "Maps are scaled-down versions of reality. The scale shows how much it is reduced.",
    t4_b1: "A blue line marks a river; a red dot marks a city.", t4_b2: "Brown contour lines show the height of mountains.", t4_b3: "The scale helps calculate real distances.",
    t4_inst: "Order map types from smallest to largest area!",
    t4_w1: "World map", t4_w2: "Europe map", t4_w3: "Country map", t4_w4: "City plan",
    t4_q: "What does the scale on a map show?",
    t4_q_a: "The ratio of reduction compared to reality", t4_q_b: "How far the Sun is", t4_q_c: "How many people live there", t4_q_d: "House colors",

    t5_title: "Adventure Awaits!", t5_text: "A good explorer always has a compass to stay on track.",
    t5_b1: "The compass needle points toward magnetic North.", t5_b2: "Always check your bearings before heading out!", t5_b3: "Find the tools!",
    t5_inst: "We need compasses for the expedition. Find and tap 5 of them (🧭)!",
    t5_q: "Which way does the red compass needle point?",
    t5_q_a: "North", t5_q_b: "To the nearest shop", t5_q_c: "Always down", t5_q_d: "It spins in circles",
  },
  de: {
    explorer_title: "Europa & Karten",
    t1_title: "Europa, unser Kontinent", t1_text: "Europa ist einer der sieben Kontinente der Erde. Viele Länder und Kulturen leben hier zusammen.",
    t1_b1: "Im Norden grenzt Europa an das Nordpolarmeer.", t1_b2: "Die Europäische Union hilft bei der Zusammenarbeit.", t1_b3: "Die Landschaft reicht von Bergen bis zu Ebenen.",
    t1_inst: "Verbinde das Land mit seiner Hauptstadt!",
    t1_l1: "Ungarn", t1_r1: "Budapest",
    t1_l2: "Deutschland", t1_r2: "Berlin",
    t1_l3: "Österreich", t1_r3: "Wien",
    t1_q: "Auf welchem Kontinent leben wir?",
    t1_q_a: "In Europa", t1_q_b: "In Afrika", t1_q_c: "In Asien", t1_q_d: "In Australien",

    t2_title: "Deutschlands Gliederung", t2_text: "Deutschland ist eine Bundesrepublik, die aus 16 Bundesländern besteht.",
    t2_b1: "Berlin ist Hauptstadt und ein eigenes Bundesland.", t2_b2: "Bayern ist das flächenmäßig größte Bundesland.", t2_b3: "Jedes Land hat eine eigene Regierung.",
    t2_inst: "Bundesland oder Stadt? Sortiere!",
    t2_bucket_allam: "Bundesland",
    t2_bucket_varos: "Großstadt",
    t2_item_a1: "Bayern", t2_item_a2: "Sachsen",
    t2_item_v1: "München", t2_item_v2: "Hamburg",
    t2_q: "Aus wie vielen Bundesländern besteht Deutschland?",
    t2_q_a: "16", t2_q_b: "10", t2_q_c: "50", t2_q_d: "12",

    // Target: [0, 4] -> Deutschland, Europa
    t3_title: "Unsere Lage", t3_text: "Es ist wichtig zu wissen, wo unser Land liegt.",
    t3_b1: "Deutschland hat neun Nachbarstaaten.", t3_b2: "Im Norden das Meer, im Süden die Alpen.", t3_b3: "Die zentrale Lage ist wichtig für den Handel.",
    t3_inst: "Finde und markiere Land und Kontinent im Satz!",
    t3_tok0: "Deutschland", t3_tok1: "liegt", t3_tok2: "im", t3_tok3: "Herzen", t3_tok4: "Europa", t3_tok5: "zentral.",
    t3_q: "Welches Gebirge liegt an Deutschlands Südgrenze?",
    t3_q_a: "Die Alpen", t3_q_b: "Die Karpaten", t3_q_c: "Der Himalaya", t3_q_d: "Der Harz",

    t4_title: "Kartenprofi", t4_text: "Karten sind verkleinerte Abbilder der Wirklichkeit. Der Maßstab zeigt die Verkleinerung.",
    t4_b1: "Blau für Flüsse, rote Punkte für Städte.", t4_b2: "Braune Linien zeigen die Höhe von Bergen.", t4_b3: "Der Maßstab hilft, Entfernungen zu berechnen.",
    t4_inst: "Ordne nach Größe des Gebiets (klein zu groß)!",
    t4_w1: "Weltkarte", t4_w2: "Europakarte", t4_w3: "Deutschlandkarte", t4_w4: "Stadtplan",
    t4_q: "Was zeigt der Maßstab auf einer Karte?",
    t4_q_a: "Das Verhältnis der Verkleinerung", t4_q_b: "Wie weit die Sonne weg ist", t4_q_c: "Einwohnerzahl", t4_q_d: "Hausfarben",

    t5_title: "Abenteuer!", t5_text: "Ein guter Entdecker hat immer einen Kompass dabei.",
    t5_b1: "Die Nadel zeigt nach magnetisch Nord.", t5_b2: "Prüfe deine Richtung!", t5_b3: "Finde die Werkzeuge!",
    t5_inst: "Finde und tippe auf die 5 Kompasse (🧭) im Bild!",
    t5_q: "Wohin zeigt die rote Kompassnadel?",
    t5_q_a: "Nach Norden", t5_q_b: "Zum nächsten Laden", t5_q_c: "Nach unten", t5_q_d: "Sie dreht sich",
  },
  ro: {
    explorer_title: "Europa și Hărțile",
    t1_title: "Europa, continentul nostru", t1_text: "Europa este unul dintre cele șapte continente. Multe țări și culturi trăiesc aici împreună.",
    t1_b1: "Europa este mărginită la nord de Oceanul Arctic.", t1_b2: "Uniunea Europeană ajută țările să colaboreze.", t1_b3: "Peisajul variază de la munți la câmpii.",
    t1_inst: "Potrivește țara cu capitala sa!",
    t1_l1: "Ungaria", t1_r1: "Budapesta",
    t1_l2: "Germania", t1_r2: "Berlin",
    t1_l3: "Austria", t1_r3: "Viena",
    t1_q: "Pe ce continent trăim?",
    t1_q_a: "În Europa", t1_q_b: "În Africa", t1_q_c: "În Asia", t1_q_d: "În Australia",

    t2_title: "Structura Germaniei", t2_text: "Germania este o republică federală formată din 16 state federale (Länder).",
    t2_b1: "Berlin este capitala și stat în același timp.", t2_b2: "Bavaria este cel mai mare stat ca suprafață.", t2_b3: "Fiecare stat are propriul guvern.",
    t2_inst: "Stat sau Oraș? Sortează!",
    t2_bucket_allam: "Stat federal",
    t2_bucket_varos: "Oraș mare",
    t2_item_a1: "Bavaria", t2_item_a2: "Saxonia",
    t2_item_v1: "Munchen", t2_item_v2: "Hamburg",
    t2_q: "Din câte state federale este formată Germania?",
    t2_q_a: "16", t2_q_b: "10", t2_q_c: "50", t2_q_d: "12",

    // Target: [0, 4] -> Germania, Europa
    t3_title: "Locul nostru pe hartă", t3_text: "Este important să știm unde se află țara noastră față de vecini.",
    t3_b1: "Germania are nouă țări vecine.", t3_b2: "La nord este marea, la sud sunt Alpii.", t3_b3: "Poziția centrală este importantă pentru comerț.",
    t3_inst: "Găsește și marchează țara și continentul în propoziție!",
    t3_tok0: "Germania", t3_tok1: "ocupă", t3_tok2: "locul", t3_tok3: "central", t3_tok4: "Europa", t3_tok5: "azi.",
    t3_q: "Ce munți se află la granița de sud a Germaniei?",
    t3_q_a: "Alpii", t3_q_b: "Carpații", t3_q_c: "Himalaya", t3_q_d: "Munții Harz",

    t4_title: "Citirea hărților", t4_text: "Hărțile sunt versiuni micșorate ale realității. Scara arată cât de mult este micșorat totul.",
    t4_b1: "Linia albastră e râu, punctul roșu e oraș.", t4_b2: "Liniile maro arată înălțimea munților.", t4_b3: "Scara hărții ajută la calcularea distanțelor.",
    t4_inst: "Pune tipurile de hărți în ordine, de la cel mai mare la cel mai mic teritoriu!",
    t4_w1: "Hartă mondială", t4_w2: "Harta Europei", t4_w3: "Harta țării", t4_w4: "Planul orașului",
    t4_q: "Ce ne arată scara pe o hartă?",
    t4_q_a: "Raportul de micșorare față de realitate", t4_q_b: "Cât de departe e Soarele", t4_q_c: "Câți oameni locuiesc acolo", t4_q_d: "Culoarea caselor",

    t5_title: "Aventură!", t5_text: "Un explorator bun are mereu o bousolă la el.",
    t5_b1: "Acul bousolei arată spre Nordul magnetic.", t5_b2: "Verifică direcția înainte de a pleca!", t5_b3: "Găsește uneltele!",
    t5_inst: "Găsește și apasă pe cele 5 bousole (🧭) din imagine!",
    t5_q: "Spre ce direcție arată acul roșu al bousolei?",
    t5_q_a: "Nord", t5_q_b: "Spre cel mai apropiat magazin", t5_q_c: "În jos", t5_q_d: "Se învârte",
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
      ],
      instruction: "t1_inst",
      hint1: "t1_b2",
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
        { id: "allam", label: "t2_bucket_allam" },
        { id: "varos", label: "t2_bucket_varos" },
      ],
      items: [
        { text: "t2_item_a1", bucketId: "allam" },
        { text: "t2_item_v1", bucketId: "varos" },
        { text: "t2_item_a2", bucketId: "allam" },
        { text: "t2_item_v2", bucketId: "varos" },
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
    svg: () => <Topic2Svg />, // Németország sziluett itt is jó
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5"],
      correctIndices: [0, 4],
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
      type: "tap-count",
      tapCount: { emoji: "🧭", count: 5 },
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
  icon: "🗺️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const MapsExplorer = memo(function MapsExplorer({
  color = "#22C55E", // Green-500 a térképekhez
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
      grade={4} 
      explorerId="sachkunde_k4_maps" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default MapsExplorer;
