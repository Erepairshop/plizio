"use client";
// EnergyExplorer.tsx — Sachkunde Island i7: Energy & Electricity (K4)
// Topics: 1) Energiaformák 2) Energiaátalakulás 3) Az elektromos áramkör 4) Vezetők és szigetelők 5) Villámgyűjtés (Töltés)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      {/* Különböző energia ikonok absztraktan */}
      <g transform="translate(60, 50)"> {/* Fény/Nap */}
        <circle cx="0" cy="0" r="15" fill="#FBBF24" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
          <line key={deg} x1="0" y1="0" x2="25" y2="0" stroke="#FBBF24" strokeWidth="3" transform={`rotate(${deg})`} />
        ))}
      </g>
      <g transform="translate(180, 50)"> {/* Mozgási/Szél */}
        <path d="M -20,0 Q 0,-20 20,0 T 60,0" fill="none" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
        <path d="M -20,15 Q 0,-5 20,15 T 60,15" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5 5" />
      </g>
      <g transform="translate(120, 100)"> {/* Elektromos */}
        <polygon points="-10,-20 10,-5 -5,-5 15,20 0,5 15,5" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F1F5F9" rx="20" />
      {/* Energiaátalakulás: Napelem -> Izzó */}
      <rect x="40" y="50" width="50" height="40" fill="#1E3A8A" rx="2" /> {/* Napelem */}
      <line x1="90" y1="70" x2="150" y2="70" stroke="#475569" strokeWidth="4" /> {/* Vezeték */}
      <g transform="translate(170, 70)">
        <circle cx="0" cy="0" r="20" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
        <path d="M -10,10 L 10,10 L 5,25 L -5,25 Z" fill="#94A3B8" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Egyszerű áramkör */}
      <rect x="60" y="40" width="120" height="60" fill="none" stroke="#475569" strokeWidth="3" rx="5" />
      <rect x="50" y="60" width="20" height="20" fill="#334155" /> {/* Elem */}
      <circle cx="120" cy="40" r="10" fill="#FDE047" stroke="#B45309" /> {/* Izzó */}
      {/* Kapcsoló */}
      <line x1="180" y1="70" x2="200" y2="50" stroke="#EF4444" strokeWidth="4" />
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDFCFB" rx="20" />
      {/* Vezető (Réz) vs Szigetelő (Gumi) */}
      <g transform="translate(60, 70)">
        <rect x="-30" y="-10" width="60" height="20" fill="#B45309" rx="2" /> {/* Réz */}
        <text x="0" y="30" textAnchor="middle" fontSize="12" fill="#444">Cu</text>
      </g>
      <g transform="translate(180, 70)">
        <rect x="-30" y="-15" width="60" height="30" fill="#111" rx="5" /> {/* Gumi */}
        <text x="0" y="35" textAnchor="middle" fontSize="12" fill="#444">Gumi</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Akkumulátor váz */}
      <rect x="70" y="40" width="100" height="60" fill="none" stroke="#334155" strokeWidth="4" rx="5" />
      <rect x="170" y="60" width="10" height="20" fill="#334155" />
      {/* Töltöttségi szintek - majd tap-count után töltődik */}
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Energia és Elektromosság",
    t1_title: "Az energia ezer arca",
    t1_text: "Az energia az a képesség, amivel változást vagy mozgást hozunk létre. Nem vész el, csak átalakul.",
    t1_b1: "Mozgási energia: mindenben ott van, ami mozog.",
    t1_b2: "Hőenergia: a részecskék rezgéséből adódik.",
    t1_b3: "Elektromos energia: a töltések áramlása.",
    t1_inst: "Párosítsd az energiaformát a forrással!",
    t1_l1: "Fényenergia", t1_r1: "A Nap sugarai",
    t1_l2: "Mozgási energia", t1_r2: "Forgó szélkerék",
    t1_l3: "Hőenergia", t1_r3: "Forró vasaló",
    t1_q: "Mit mond ki az energia megmaradásának törvénye?",
    t1_q_a: "Az energia nem vész el, csak átalakul", t1_q_b: "Az energia néha egyszerűen eltűnik", t1_q_c: "Csak az elemekben van energia", t1_q_d: "Az energia mindig kék színű",

    t2_title: "Energiaátalakulás",
    t2_text: "A mindennapokban folyamatosan alakítjuk át az energiát egyik formából a másikba, hogy használni tudjuk.",
    t2_b1: "A növények a fényenergiát kémiai energiává alakítják (fotoszintézis).",
    t2_b2: "A vasaló az elektromos áramot hővé alakítja.",
    t2_b3: "A vízi erőmű a víz esését alakítja árammá.",
    t2_inst: "Miből mi lesz? Válogasd szét!",
    t2_bucket_elektro: "Elektromosságból...",
    t2_bucket_mozgas: "Mozgásból...",
    t2_item_e1: "...fény (Izzó)", t2_item_e2: "...hő (Hajszárító)",
    t2_item_m1: "...elektromosság (Generátor)", t2_item_m2: "...hő (Súrlódás)",
    t1_q_2: "Mivé alakítja a zseblámpa az elemekben tárolt energiát?",
    t1_q_2_a: "Fényenergiává", t1_q_2_b: "Hangenergiává", t1_q_2_c: "Vizzé", t1_q_2_d: "Gondolattá",

    // Cél: [3, 6] -> áramkör, vezető
    t3_title: "Hogyan folyik az áram?",
    t3_text: "Az elektromos áram csak akkor folyik, ha az útja zárt. Ezt nevezzük elektromos áramkörnek.",
    t3_b1: "Kell hozzá egy áramforrás (pl. elem).",
    t3_b2: "Kell egy fogyasztó (pl. lámpa).",
    t3_b3: "Vezetékek kötik össze az alkatrészeket.",
    t3_inst: "Keresd meg a szövegben a zárt út és az anyag nevét!",
    t3_tok0: "Egy", t3_tok1: "zárt", t3_tok2: "elektromos", t3_tok3: "áramkör", t3_tok4: "szükséges,", t3_tok5: "amit", t3_tok6: "vezető", t3_tok7: "alkot.",
    t3_q: "Mi történik, ha megszakítjuk az áramkört egy kapcsolóval?",
    t3_q_a: "Az áram nem folyik tovább", b: "Az áram gyorsabb lesz", c: "Az elem felrobban", d: "Semmi nem változik",

    t4_title: "Vezetők és szigetelők",
    t4_text: "Nem minden anyag engedi át az áramot. Vannak jó vezetők és jó szigetelők.",
    t4_b1: "A fémek (réz, alumínium, arany) kiváló vezetők.",
    t4_b2: "A műanyag, az üveg és a gumi szigetelők.",
    t4_b3: "A vizes kéz vezeti az áramot, ezért életveszélyes!",
    t4_inst: "Tedd sorba az anyagokat vezetőképesség szerint (legjobbtól a legrosszabbig)!",
    t4_w1: "Rézdrót", t4_w2: "Csapvíz", t4_w3: "Faág", t4_w4: "Műanyag vonalzó",
    t4_q: "Melyik anyagot használják leggyakrabban a vezetékek belsejében?",
    t4_q_a: "Rezet", t4_q_b: "Gyurmát", t4_q_c: "Papírt", t4_q_d: "Levegőt",

    t5_title: "Töltsd fel a rendszert!",
    t5_text: "Ahhoz, hogy a gépeink működjenek, energiára van szükségük. Töltsük fel az akkumulátort!",
    t5_b1: "A megújuló energia (szél, nap) sosem fogy el.",
    t5_b2: "A takarékoskodás segít védeni a környezetet.",
    t5_b3: "Gyűjts villámokat a töltéshez!",
    t5_inst: "Kattints az 5 villámra (⚡), hogy teljesen feltöltsd az energiatárolót!",
    t5_q: "Melyik egy megújuló energiaforrás?",
    t5_q_a: "A szélenergia", t5_q_b: "A kőszén", t5_q_c: "A földgáz", t5_q_d: "Az elemek",
  },
  en: {
    explorer_title: "Energy & Electricity",
    t1_title: "Forms of Energy", t1_text: "Energy is the ability to cause change or motion. It is never lost, only transformed.",
    t1_b1: "Kinetic energy: found in everything that moves.", t1_b2: "Thermal energy: comes from particle vibration.", t1_b3: "Electrical energy: flow of charges.",
    t1_inst: "Match energy to source!",
    t1_l1: "Light energy", t1_r1: "Sun rays",
    t1_l2: "Kinetic energy", t1_r2: "Spinning wind turbine",
    t1_l3: "Thermal energy", t1_r3: "Hot iron",
    t1_q: "What does the law of conservation of energy state?",
    t1_q_a: "Energy is not lost, only transformed", t1_q_b: "Energy disappears sometimes", t1_q_c: "Only batteries have energy", t1_q_d: "Energy is always blue",

    t2_title: "Transformation", t2_text: "We constantly change energy from one form to another to use it in our lives.",
    t2_b1: "Plants turn light into chemical energy.", t2_b2: "An iron turns electricity into heat.", t2_b3: "Dams turn falling water into power.",
    t2_inst: "From what to what? Sort them!",
    t2_bucket_elektro: "From Electricity...",
    t2_bucket_mozgas: "From Motion...",
    t2_item_e1: "...light (Bulb)", t2_item_e2: "...heat (Hairdryer)",
    t2_item_m1: "...electricity (Generator)", t2_item_m2: "...heat (Friction)",
    t1_q_2: "What does a flashlight turn battery energy into?",
    t1_q_2_a: "Light energy", t1_q_2_b: "Sound energy", t1_q_2_c: "Water", t1_q_2_d: "Thoughts",

    // Target: [3, 6] -> circuit, conductor
    t3_title: "Flowing Power", t3_text: "Electricity only flows if the path is closed. This is called a circuit.",
    t3_b1: "Needs a power source (battery).", t3_b2: "Needs a load (light bulb).", t3_b3: "Wires connect the parts.",
    t3_inst: "Find the words for the path and the material!",
    t3_tok0: "A", t3_tok1: "closed", t3_tok2: "electrical", t3_tok3: "circuit", t3_tok4: "uses", t3_tok5: "a", t3_tok6: "conductor", t3_tok7: "wire.",
    t3_q: "What happens if we break the circuit with a switch?",
    t3_q_a: "Current stops flowing", b: "Current goes faster", c: "Battery explodes", d: "Nothing changes",

    t4_title: "Conductors & Insulators", t4_text: "Not all materials allow electricity to pass through.",
    t4_b1: "Metals (copper, gold) are great conductors.", t4_b2: "Plastic, glass, and rubber are insulators.", t4_b3: "Wet hands conduct, so it's dangerous!",
    t4_inst: "Order by conductivity (best to worst)!",
    t4_w1: "Copper wire", t4_w2: "Tap water", t4_w3: "Wooden stick", t4_w4: "Plastic ruler",
    t4_q: "Which material is most commonly used inside wires?",
    t4_q_a: "Copper", t4_q_b: "Clay", t4_q_c: "Paper", t4_q_d: "Air",

    t5_title: "Charge it up!", t5_text: "Devices need energy to work. Let's charge the battery!",
    t5_b1: "Renewable energy (wind, sun) never runs out.", t5_b2: "Saving energy helps the environment.", t5_b3: "Collect sparks to charge!",
    t5_inst: "Click the 5 lightning bolts (⚡) to charge the storage!",
    t5_q: "Which one is a renewable energy source?",
    t5_q_a: "Wind energy", t5_q_b: "Coal", t5_q_c: "Natural gas", t5_q_d: "Batteries",
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
        { id: "elektro", label: "t2_bucket_elektro" },
        { id: "mozgas", label: "t2_bucket_mozgas" },
      ],
      items: [
        { text: "t2_item_e1", bucketId: "elektro" },
        { text: "t2_item_m1", bucketId: "mozgas" },
        { text: "t2_item_e2", bucketId: "elektro" },
        { text: "t2_item_m2", bucketId: "mozgas" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
    },
    quiz: {
      question: "t1_q_2",
      choices: ["t1_q_2_a", "t1_q_2_b", "t1_q_2_c", "t1_q_2_d"],
      answer: "t1_q_2_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [3, 6],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b3",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "b", "c", "d"],
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
      type: "tap-count",
      tapCount: { emoji: "⚡", count: 5 },
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
  icon: "⚡",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const EnergyExplorer = memo(function EnergyExplorer({
  color = "#FBBF24", // Yellow-500 az energiához
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
      explorerId="sachkunde_k4_energy" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default EnergyExplorer;
