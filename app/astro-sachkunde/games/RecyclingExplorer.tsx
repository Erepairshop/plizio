"use client";
// RecyclingExplorer — Island i7: Materials & Recycling
// 5 randomised rounds, answer lock-out, scoreRef/totalRef, all text in LABELS

import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, XCircle, Volume2 } from "lucide-react";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

// ─── LABELS ────────────────────────────────────────────────────────────────────
const LABELS = {
  en: {
    title: "Recycling Explorer",
    // round titles & hints
    r1Title: "What material is this?",
    r1Hint: "What is this item made of?",
    r1Teach: "Things around us are made from different materials: paper (from trees), plastic (man-made), glass (from sand), metal (from the earth), and organic waste (from plants and food). Each material feels and looks different!",
    r2Title: "Which bin?",
    r2Hint: "Which bin does this item belong in?",
    r2Teach: "We sort waste into coloured bins: 🟡 Yellow bin = plastic & packaging, 🔵 Blue bin = paper & cardboard, 🟤 Brown bin = food & garden waste, 🟢 Green/Glass container = glass bottles & jars, ⚫ Gray bin = everything else.",
    r3Title: "Recyclable?",
    r3Hint: "Can this item be recycled?",
    r3Teach: "Recycling means turning old things into new ones! Paper, glass, metal and clean plastic CAN be recycled. But dirty items, broken umbrellas or mixed materials usually CANNOT. Always rinse containers before recycling!",
    r4Title: "Good for nature?",
    r4Hint: "Is this behaviour good or bad for nature?",
    r4Teach: "We can help protect nature every day! Saving water, riding a bike, planting trees and composting are GOOD for nature. Littering, wasting electricity and using single-use plastic are BAD. Small actions make a big difference!",
    r5Title: "Quick Review",
    r5Hint: "What have you learned?",
    r5Teach: "Let's see what you remember! Think about materials, bins, recycling and nature-friendly behaviour.",
    gotIt: "Got it! →",
    // materials
    paper: "Paper",
    plastic: "Plastic",
    glass: "Glass",
    metal: "Metal",
    organic: "Organic",
    other: "Other",
    // bin labels
    yellowBin: "Yellow bin",
    blueBin: "Blue bin",
    brownBin: "Brown bin",
    greenBin: "Green bin / Glass",
    grayBin: "Gray bin",
    // recyclable
    yes: "Yes, recyclable",
    no: "Not recyclable",
    // good / bad
    good: "Good for nature",
    bad: "Bad for nature",
    // feedback
    correct: "Correct!",
    wrong: "Not quite — try again!",
    next: "Next",
    finish: "Finish",
    // items (emoji shown, name as label)
    bottleWater: "Plastic water bottle",
    newspaper: "Newspaper",
    bananaPeel: "Banana peel",
    glassBottle: "Glass bottle",
    tinCan: "Tin can",
    cardboardBox: "Cardboard box",
    plasticBag: "Plastic bag",
    coffeeCup: "Disposable coffee cup",
    apple: "Apple core",
    yogurtCup: "Yogurt cup",
    aluminumFoil: "Aluminium foil",
    brokenUmbrella: "Broken umbrella",
    // behaviours
    plantTree: "Planting a tree 🌳",
    littering: "Throwing litter on the ground 🚮",
    saveWater: "Turning off the tap while brushing teeth 🚿",
    longShower: "Taking a 30-minute shower 🚿",
    bikeRide: "Riding a bike instead of driving 🚲",
    leaveLight: "Leaving lights on in empty rooms 💡",
    compost: "Composting food scraps 🌱",
    singleUsePlastic: "Using single-use plastic bags 🛍️",
  },
  de: {
    title: "Recycling-Entdecker",
    r1Title: "Aus welchem Material ist das?",
    r1Hint: "Erkenne das Material!",
    r1Teach: "Dinge um uns herum bestehen aus verschiedenen Materialien: Papier (aus Bäumen), Kunststoff (künstlich hergestellt), Glas (aus Sand), Metall (aus der Erde) und Bioabfall (aus Pflanzen und Essen). Jedes Material fühlt sich anders an!",
    r2Title: "In welche Tonne?",
    r2Hint: "In welche Tonne gehört das?",
    r2Teach: "Wir trennen Abfall in farbige Tonnen: 🟡 Gelbe Tonne = Kunststoff & Verpackungen, 🔵 Blaue Tonne = Papier & Karton, 🟤 Braune Tonne = Essens- & Gartenabfälle, 🟢 Glascontainer = Glasflaschen & Gläser, ⚫ Graue Tonne = alles andere.",
    r3Title: "Recycelbar?",
    r3Hint: "Kann man das recyceln?",
    r3Teach: "Recycling bedeutet, aus alten Dingen neue zu machen! Papier, Glas, Metall und sauberer Kunststoff KÖNNEN recycelt werden. Aber schmutzige Sachen, kaputte Regenschirme oder gemischte Materialien meist NICHT. Spüle Behälter immer aus!",
    r4Title: "Gut für die Natur?",
    r4Hint: "Ist dieses Verhalten gut oder schlecht für die Natur?",
    r4Teach: "Wir können jeden Tag die Natur schützen! Wasser sparen, Fahrrad fahren, Bäume pflanzen und kompostieren sind GUT für die Natur. Müll wegwerfen, Strom verschwenden und Einweg-Plastik benutzen sind SCHLECHT. Kleine Taten machen einen großen Unterschied!",
    r5Title: "Schnell-Wiederholung",
    r5Hint: "Was hast du gelernt?",
    r5Teach: "Mal sehen, was du dir gemerkt hast! Denke an Materialien, Tonnen, Recycling und naturfreundliches Verhalten.",
    gotIt: "Verstanden! →",
    paper: "Papier",
    plastic: "Kunststoff",
    glass: "Glas",
    metal: "Metall",
    organic: "Bio",
    other: "Sonstiges",
    yellowBin: "Gelbe Tonne",
    blueBin: "Blaue Tonne",
    brownBin: "Braune Tonne",
    greenBin: "Glascontainer",
    grayBin: "Graue Tonne",
    yes: "Ja, recycelbar",
    no: "Nicht recycelbar",
    good: "Gut für die Natur",
    bad: "Schlecht für die Natur",
    correct: "Richtig!",
    wrong: "Nicht ganz — versuch es nochmal!",
    next: "Weiter",
    finish: "Fertig",
    bottleWater: "Plastikwasserflasche",
    newspaper: "Zeitung",
    bananaPeel: "Bananenschale",
    glassBottle: "Glasflasche",
    tinCan: "Blechdose",
    cardboardBox: "Kartonbox",
    plasticBag: "Plastiktüte",
    coffeeCup: "Einweg-Kaffeebecher",
    apple: "Apfelgehäuse",
    yogurtCup: "Joghurtbecher",
    aluminumFoil: "Aluminiumfolie",
    brokenUmbrella: "Kaputt Regenschirm",
    plantTree: "Einen Baum pflanzen 🌳",
    littering: "Müll auf den Boden werfen 🚮",
    saveWater: "Wasserhahn beim Zähneputzen abdrehen 🚿",
    longShower: "30 Minuten duschen 🚿",
    bikeRide: "Fahrrad statt Auto fahren 🚲",
    leaveLight: "Licht in leeren Räumen anlassen 💡",
    compost: "Küchenabfälle kompostieren 🌱",
    singleUsePlastic: "Einweg-Plastiktüten benutzen 🛍️",
  },
  hu: {
    title: "Újrahasznosítás felfedező",
    r1Title: "Milyen anyagból van?",
    r1Hint: "Miből készült ez a tárgy?",
    r1Teach: "A körülöttünk lévő dolgok különböző anyagokból készülnek: papír (fából), műanyag (mesterségesen készült), üveg (homokból), fém (a földből) és szerves hulladék (növényekből, ételből). Minden anyag másképp néz ki és érződik!",
    r2Title: "Melyik kukába?",
    r2Hint: "Melyik kukába kerül ez a tárgy?",
    r2Teach: "A hulladékot színes kukákba válogatjuk: 🟡 Sárga kuka = műanyag és csomagolás, 🔵 Kék kuka = papír és karton, 🟤 Barna kuka = étel- és kerti hulladék, 🟢 Üveggyűjtő = üvegpalackok és befőttes üvegek, ⚫ Szürke kuka = minden más.",
    r3Title: "Újrahasznosítható?",
    r3Hint: "Ez az anyag újrahasznosítható?",
    r3Teach: "Az újrahasznosítás azt jelenti, hogy a régi dolgokból újat készítünk! A papír, az üveg, a fém és a tiszta műanyag IGEN, újrahasznosítható. De a koszos dolgok, törött esernyők vagy kevert anyagok általában NEM. Mindig öblítsd ki a tartályokat!",
    r4Title: "Jó a természetnek?",
    r4Hint: "Ez a viselkedés jó vagy rossz a természetnek?",
    r4Teach: "Minden nap segíthetünk a természetnek! Vizet takarítani, kerékpározni, fát ültetni és komposztálni JÓ a természetnek. Szemetet szórni, áramot pazarolni és egyszer használatos műanyagot használni ROSSZ. A kis tettek is sokat számítanak!",
    r5Title: "Gyors összefoglaló",
    r5Hint: "Mit tanultál?",
    r5Teach: "Nézzük meg, mire emlékszel! Gondolj az anyagokra, kukákra, újrahasznosításra és természetbarát viselkedésre.",
    gotIt: "Értem! →",
    paper: "Papír",
    plastic: "Műanyag",
    glass: "Üveg",
    metal: "Fém",
    organic: "Szerves",
    other: "Egyéb",
    yellowBin: "Sárga kuka",
    blueBin: "Kék kuka",
    brownBin: "Barna kuka",
    greenBin: "Üveggyűjtő",
    grayBin: "Szürke kuka",
    yes: "Igen, újrahasznosítható",
    no: "Nem újrahasznosítható",
    good: "Jó a természetnek",
    bad: "Rossz a természetnek",
    correct: "Helyes!",
    wrong: "Nem egészen — próbáld újra!",
    next: "Tovább",
    finish: "Befejezés",
    bottleWater: "Műanyag vizes palack",
    newspaper: "Újság",
    bananaPeel: "Banánhéj",
    glassBottle: "Üvegpalack",
    tinCan: "Fémdoboz",
    cardboardBox: "Kartondoboz",
    plasticBag: "Műanyag szatyor",
    coffeeCup: "Eldobható kávéspohár",
    apple: "Almacsutak",
    yogurtCup: "Joghurtos pohár",
    aluminumFoil: "Alufólia",
    brokenUmbrella: "Törött esernyő",
    plantTree: "Fát ültetni 🌳",
    littering: "Szemetet dobni a földre 🚮",
    saveWater: "Fogmosás közben elzárni a csapot 🚿",
    longShower: "30 percig zuhanyozni 🚿",
    bikeRide: "Bringával menni autó helyett 🚲",
    leaveLight: "Üres szobában égve hagyni a villanyt 💡",
    compost: "Ételmaradékot komposztálni 🌱",
    singleUsePlastic: "Egyszer használatos szatyrokat használni 🛍️",
  },
  ro: {
    title: "Exploratorul reciclării",
    r1Title: "Din ce material este?",
    r1Hint: "Din ce este făcut acest obiect?",
    r1Teach: "Lucrurile din jurul nostru sunt făcute din materiale diferite: hârtie (din copaci), plastic (fabricat), sticlă (din nisip), metal (din pământ) și deșeuri organice (din plante și mâncare). Fiecare material arată și se simte diferit!",
    r2Title: "În ce coș?",
    r2Hint: "În ce coș se aruncă acest obiect?",
    r2Teach: "Sortăm deșeurile în coșuri colorate: 🟡 Coș galben = plastic și ambalaje, 🔵 Coș albastru = hârtie și carton, 🟤 Coș maro = resturi alimentare și de grădină, 🟢 Container sticlă = sticle și borcane, ⚫ Coș gri = restul.",
    r3Title: "Reciclabil?",
    r3Hint: "Se poate recicla acest obiect?",
    r3Teach: "Reciclarea înseamnă a transforma lucruri vechi în lucruri noi! Hârtia, sticla, metalul și plasticul curat POT fi reciclate. Dar obiectele murdare, umbrelele rupte sau materialele amestecate de obicei NU. Clătește întotdeauna recipientele!",
    r4Title: "Bun pentru natură?",
    r4Hint: "Este acest comportament bun sau rău pentru natură?",
    r4Teach: "Putem ajuta natura în fiecare zi! Economisirea apei, mersul cu bicicleta, plantarea copacilor și compostarea sunt BUNE pentru natură. Aruncarea gunoiului, risipa de electricitate și plasticul de unică folosință sunt RELE. Acțiunile mici contează!",
    r5Title: "Recapitulare rapidă",
    r5Hint: "Ce ai învățat?",
    r5Teach: "Să vedem ce ți-ai amintit! Gândește-te la materiale, coșuri, reciclare și comportament prietenos cu natura.",
    gotIt: "Am înțeles! →",
    paper: "Hârtie",
    plastic: "Plastic",
    glass: "Sticlă",
    metal: "Metal",
    organic: "Organic",
    other: "Altele",
    yellowBin: "Coș galben",
    blueBin: "Coș albastru",
    brownBin: "Coș maro",
    greenBin: "Container sticlă",
    grayBin: "Coș gri",
    yes: "Da, reciclabil",
    no: "Nu este reciclabil",
    good: "Bun pentru natură",
    bad: "Rău pentru natură",
    correct: "Corect!",
    wrong: "Nu chiar — încearcă din nou!",
    next: "Înainte",
    finish: "Gata",
    bottleWater: "Sticlă de apă din plastic",
    newspaper: "Ziar",
    bananaPeel: "Coajă de banană",
    glassBottle: "Sticlă de sticlă",
    tinCan: "Cutie de tablă",
    cardboardBox: "Cutie de carton",
    plasticBag: "Pungă de plastic",
    coffeeCup: "Pahar de cafea de unică folosință",
    apple: "Cotorul unui măr",
    yogurtCup: "Pahar de iaurt",
    aluminumFoil: "Folie de aluminiu",
    brokenUmbrella: "Umbrelă stricată",
    plantTree: "A planta un copac 🌳",
    littering: "A arunca gunoi pe jos 🚮",
    saveWater: "A închide robinetul la periaj 🚿",
    longShower: "A face duș 30 de minute 🚿",
    bikeRide: "A merge cu bicicleta în loc de mașină 🚲",
    leaveLight: "A lăsa lumina aprinsă în camere goale 💡",
    compost: "A composita resturile de mâncare 🌱",
    singleUsePlastic: "A folosi pungi de plastic de unică folosință 🛍️",
  },
} as const;

type Lang = keyof typeof LABELS;
type T = typeof LABELS.en;
type AnyLangT = typeof LABELS[Lang];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function shuffle<X>(arr: X[]): X[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick<X>(arr: X[]): X {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── ITEM DATA (language-independent keys) ────────────────────────────────────
type BinKey = "yellowBin" | "blueBin" | "brownBin" | "greenBin" | "grayBin";
type MaterialKey = "paper" | "plastic" | "glass" | "metal" | "organic" | "other";

interface Item {
  key: keyof T;
  emoji: string;
  material: MaterialKey;
  bin: BinKey;
  recyclable: boolean;
}

const ALL_ITEMS: Item[] = [
  { key: "bottleWater",      emoji: "🍶", material: "plastic",  bin: "yellowBin", recyclable: true  },
  { key: "newspaper",        emoji: "📰", material: "paper",    bin: "blueBin",   recyclable: true  },
  { key: "bananaPeel",       emoji: "🍌", material: "organic",  bin: "brownBin",  recyclable: false },
  { key: "glassBottle",      emoji: "🍾", material: "glass",    bin: "greenBin",  recyclable: true  },
  { key: "tinCan",           emoji: "🥫", material: "metal",    bin: "yellowBin", recyclable: true  },
  { key: "cardboardBox",     emoji: "📦", material: "paper",    bin: "blueBin",   recyclable: true  },
  { key: "plasticBag",       emoji: "🛍️", material: "plastic",  bin: "yellowBin", recyclable: true  },
  { key: "coffeeCup",        emoji: "☕", material: "other",    bin: "grayBin",   recyclable: false },
  { key: "apple",            emoji: "🍎", material: "organic",  bin: "brownBin",  recyclable: false },
  { key: "yogurtCup",        emoji: "🥛", material: "plastic",  bin: "yellowBin", recyclable: true  },
  { key: "aluminumFoil",     emoji: "✨", material: "metal",    bin: "yellowBin", recyclable: true  },
  { key: "brokenUmbrella",   emoji: "☂️", material: "other",    bin: "grayBin",   recyclable: false },
];

type BehaviourGood = true | false;
interface Behaviour {
  key: keyof T;
  good: BehaviourGood;
}

const ALL_BEHAVIOURS: Behaviour[] = [
  { key: "plantTree",         good: true  },
  { key: "littering",         good: false },
  { key: "saveWater",         good: true  },
  { key: "longShower",        good: false },
  { key: "bikeRide",          good: true  },
  { key: "leaveLight",        good: false },
  { key: "compost",           good: true  },
  { key: "singleUsePlastic",  good: false },
];

const ALL_MATERIALS: MaterialKey[] = ["paper", "plastic", "glass", "metal", "organic", "other"];
const ALL_BINS: BinKey[]           = ["yellowBin", "blueBin", "brownBin", "greenBin", "grayBin"];

const BIN_COLOR: Record<BinKey, string> = {
  yellowBin: "#FFD700",
  blueBin:   "#1E90FF",
  brownBin:  "#8B4513",
  greenBin:  "#228B22",
  grayBin:   "#808080",
};

// ─── ROUND QUESTION TYPES ─────────────────────────────────────────────────────
interface MaterialQ { item: Item; choices: MaterialKey[] }
interface BinQ      { item: Item; choices: BinKey[]      }
interface RecycleQ  { item: Item; choices: ["yes","no"]  }
interface NatureQ   { behaviour: Behaviour; choices: ["good","bad"] }
type AnyQ = MaterialQ | BinQ | RecycleQ | NatureQ;

function makeMaterialQ(item: Item): MaterialQ {
  const correct = item.material;
  const distractors = shuffle(ALL_MATERIALS.filter(m => m !== correct)).slice(0, 3);
  return { item, choices: shuffle([correct, ...distractors]) as MaterialKey[] };
}
function makeBinQ(item: Item): BinQ {
  const correct = item.bin;
  const distractors = shuffle(ALL_BINS.filter(b => b !== correct)).slice(0, 3);
  return { item, choices: shuffle([correct, ...distractors]) as BinKey[] };
}
function makeRecycleQ(item: Item): RecycleQ {
  return { item, choices: ["yes", "no"] };
}
function makeNatureQ(behaviour: Behaviour): NatureQ {
  return { behaviour, choices: ["good", "bad"] };
}

// ─── SUB-PROGRESS DOTS ────────────────────────────────────────────────────────
function SubDots({ total, current, color }: { total: number; current: number; color: string }) {
  return (
    <div className="flex gap-1.5 justify-center">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="w-2 h-2 rounded-full transition-colors"
          style={{ background: i < current ? color : "rgba(255,255,255,0.2)" }} />
      ))}
    </div>
  );
}

// ─── MCQ BUTTON ───────────────────────────────────────────────────────────────
function MCQBtn({
  label, chosen, correct, locked, onPress,
}: {
  label: string;
  chosen: boolean;
  correct: boolean;
  locked: boolean;
  onPress: () => void;
}) {
  let bg = "rgba(255,255,255,0.06)";
  let border = "rgba(255,255,255,0.15)";
  if (chosen && correct)  { bg = "#00FF8822"; border = "#00FF88"; }
  if (chosen && !correct) { bg = "#FF2D7822"; border = "#FF2D78"; }
  if (locked && !chosen && correct) { bg = "#00FF8811"; border = "#00FF8866"; }

  return (
    <motion.button
      onClick={locked ? undefined : onPress}
      disabled={locked}
      className="py-3 px-4 rounded-xl font-bold text-sm text-white text-left transition-colors w-full"
      style={{ background: bg, border: `2px solid ${border}` }}
      whileTap={locked ? {} : { scale: 0.97 }}
    >
      {label}
    </motion.button>
  );
}

// ─── FEEDBACK LINE ────────────────────────────────────────────────────────────
function Feedback({ correct, lbl }: { correct: boolean | null; lbl: (k: string) => string }) {
  if (correct === null) return <div className="h-5" />;
  return (
    <div className="flex items-center gap-1.5 justify-center h-5">
      {correct
        ? <><CheckCircle2 size={14} className="text-[#00FF88]" /><span className="text-[#00FF88] text-xs font-bold">{lbl("correct")}</span></>
        : <><XCircle      size={14} className="text-[#FF2D78]" /><span className="text-[#FF2D78] text-xs font-bold">{lbl("wrong")}</span></>
      }
    </div>
  );
}

// ─── ROUND COMPONENT ─────────────────────────────────────────────────────────
interface RoundProps {
  color: string;
  t: AnyLangT;
  questions: AnyQ[];
  onRoundDone: (score: number, total: number) => void;
  titleKey: string;
  hintKey: string;
  teachKey: string;
  speak: (text: string) => void;
}

function Round({ color, t, questions, onRoundDone, titleKey, hintKey, teachKey, speak }: RoundProps) {
  // lbl: safe string lookup that works for all language union members
  const lbl = (key: string): string => (t as Record<string, string>)[key] ?? key;

  const [showTeach, setShowTeach] = useState(true);
  const [qIdx, setQIdx]     = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const roundScore           = useRef(0);

  const q = questions[qIdx];

  const handleAnswer = useCallback((key: string, isCorrect: boolean) => {
    if (locked) return;
    setChosen(key);
    setLocked(true);
    if (isCorrect) roundScore.current++;
  }, [locked]);

  const handleNext = useCallback(() => {
    if (!locked) return;
    if (qIdx >= questions.length - 1) {
      onRoundDone(roundScore.current, questions.length);
    } else {
      setQIdx(i => i + 1);
      setChosen(null);
      setLocked(false);
    }
  }, [locked, qIdx, questions.length, onRoundDone]);

  type QKind = "material" | "bin" | "recycle" | "nature";
  function kindOf(qq: AnyQ): QKind {
    if ("behaviour" in qq) return "nature";
    const r = qq as RecycleQ;
    if (r.choices[0] === "yes" || r.choices[0] === "no") return "recycle";
    if ("bin" in (qq as BinQ)) return "bin";
    return "material";
  }
  const kind = kindOf(q);

  let correctKey: string;
  if (kind === "nature")        correctKey = (q as NatureQ).behaviour.good ? "good" : "bad";
  else if (kind === "recycle")  correctKey = (q as RecycleQ).item.recyclable ? "yes" : "no";
  else if (kind === "bin")      correctKey = (q as BinQ).item.bin;
  else                          correctKey = (q as MaterialQ).item.material;

  const feedbackCorrect = chosen === null ? null : chosen === correctKey;

  function renderChoices() {
    if (kind === "nature") {
      const nq = q as NatureQ;
      return nq.choices.map(ch => (
        <MCQBtn key={ch} label={lbl(ch)} chosen={chosen === ch} correct={ch === correctKey}
          locked={locked} onPress={() => handleAnswer(ch, ch === correctKey)} />
      ));
    }
    if (kind === "recycle") {
      const rq = q as RecycleQ;
      return rq.choices.map(ch => (
        <MCQBtn key={ch} label={lbl(ch)} chosen={chosen === ch} correct={ch === correctKey}
          locked={locked} onPress={() => handleAnswer(ch, ch === correctKey)} />
      ));
    }
    if (kind === "bin") {
      const bq = q as BinQ;
      return bq.choices.map(ch => (
        <div key={ch} className="flex items-center gap-2 w-full">
          <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: BIN_COLOR[ch] }} />
          <MCQBtn label={lbl(ch)} chosen={chosen === ch} correct={ch === correctKey}
            locked={locked} onPress={() => handleAnswer(ch, ch === correctKey)} />
        </div>
      ));
    }
    // material
    const mq = q as MaterialQ;
    return mq.choices.map(ch => (
      <MCQBtn key={ch} label={lbl(ch)} chosen={chosen === ch} correct={ch === correctKey}
        locked={locked} onPress={() => handleAnswer(ch, ch === correctKey)} />
    ));
  }

  function renderSubject() {
    if (kind === "nature") {
      const nq = q as NatureQ;
      return (
        <div className="bg-white/[0.07] border border-white/10 rounded-2xl px-5 py-4 text-center w-full">
          <p className="text-base font-bold text-white leading-snug">{lbl(nq.behaviour.key)}</p>
        </div>
      );
    }
    const item = (q as MaterialQ | BinQ | RecycleQ).item;
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="text-5xl">{item.emoji}</span>
        <span className="text-sm font-bold text-white/70">{lbl(item.key)}</span>
      </div>
    );
  }

  // ── Teaching phase ──
  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center gap-2 justify-center">
          <p className="text-xl font-black text-white text-center">{lbl(titleKey)}</p>
          <button onClick={() => speak(lbl(titleKey) + ". " + lbl(teachKey))}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
            <Volume2 size={16} />
          </button>
        </div>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl(teachKey)}</p>
        </div>
        <motion.button
          onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}
        >
          {lbl("gotIt")} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  // ── Quiz phase ──
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="flex items-center gap-2 justify-center">
        <p className="text-xl font-black text-white text-center">{lbl(titleKey)}</p>
        <button onClick={() => speak(lbl(titleKey) + ". " + lbl(hintKey))}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
          <Volume2 size={16} />
        </button>
      </div>
      <p className="text-white/60 text-xs font-semibold text-center">{lbl(hintKey)}</p>
      <SubDots total={questions.length} current={qIdx + (locked ? 1 : 0)} color={color} />

      {renderSubject()}

      <div className="flex flex-col gap-2 w-full">
        {renderChoices()}
      </div>

      <Feedback correct={feedbackCorrect} lbl={lbl} />

      <AnimatePresence>
        {locked && (
          <motion.button
            key="next"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            onClick={handleNext}
            className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
            whileTap={{ scale: 0.97 }}
          >
            {qIdx >= questions.length - 1
              ? <><CheckCircle2 size={15} /> {lbl("finish")}</>
              : <>{lbl("next")} <ChevronRight size={15} /></>
            }
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

const TOTAL_ROUNDS = 5;

function RecyclingExplorer({ color, lang = "en", onDone, onClose }: Props) {
  const l = (lang in LABELS ? lang : "en") as Lang;
  const t = LABELS[l];

  const scoreRef = useRef(0);
  const totalRef = useRef(0);
  const [round, setRound] = useState(0);
  const [roundKey, setRoundKey] = useState(0); // forces remount on advance

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "hu" ? "hu-HU" : lang === "de" ? "de-DE" : lang === "ro" ? "ro-RO" : "en-US";
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }, [lang]);

  // Randomised question pools — stable per mount
  const r1Questions = useMemo<MaterialQ[]>(() => {
    const pool = shuffle(ALL_ITEMS).slice(0, 4);
    return pool.map(makeMaterialQ);
  }, []);

  const r2Questions = useMemo<BinQ[]>(() => {
    const pool = shuffle(ALL_ITEMS).slice(0, 4);
    return pool.map(makeBinQ);
  }, []);

  const r3Questions = useMemo<RecycleQ[]>(() => {
    // Ensure mix of recyclable and not
    const recyclable    = shuffle(ALL_ITEMS.filter(i => i.recyclable)).slice(0, 2);
    const notRecyclable = shuffle(ALL_ITEMS.filter(i => !i.recyclable)).slice(0, 2);
    return shuffle([...recyclable, ...notRecyclable]).map(makeRecycleQ);
  }, []);

  const r4Questions = useMemo<NatureQ[]>(() => {
    const good = shuffle(ALL_BEHAVIOURS.filter(b => b.good)).slice(0, 2);
    const bad  = shuffle(ALL_BEHAVIOURS.filter(b => !b.good)).slice(0, 2);
    return shuffle([...good, ...bad]).map(makeNatureQ);
  }, []);

  const r5Questions = useMemo<AnyQ[]>(() => {
    // Mixed: 1 material, 1 bin, 1 recycle, 1 nature — all different items from above
    const mItem = pick(ALL_ITEMS);
    const bItem = pick(ALL_ITEMS.filter(i => i.key !== mItem.key));
    const rItem = pick(ALL_ITEMS.filter(i => i.key !== mItem.key && i.key !== bItem.key));
    const nBeh  = pick(ALL_BEHAVIOURS);
    return shuffle<AnyQ>([
      makeMaterialQ(mItem),
      makeBinQ(bItem),
      makeRecycleQ(rItem),
      makeNatureQ(nBeh),
    ]);
  }, []);

  const roundData: Array<{ questions: AnyQ[]; titleKey: string; hintKey: string; teachKey: string }> = [
    { questions: r1Questions, titleKey: "r1Title", hintKey: "r1Hint", teachKey: "r1Teach" },
    { questions: r2Questions, titleKey: "r2Title", hintKey: "r2Hint", teachKey: "r2Teach" },
    { questions: r3Questions, titleKey: "r3Title", hintKey: "r3Hint", teachKey: "r3Teach" },
    { questions: r4Questions, titleKey: "r4Title", hintKey: "r4Hint", teachKey: "r4Teach" },
    { questions: r5Questions, titleKey: "r5Title", hintKey: "r5Hint", teachKey: "r5Teach" },
  ];

  const handleRoundDone = useCallback((score: number, total: number) => {
    scoreRef.current += score;
    totalRef.current += total;
    if (round >= TOTAL_ROUNDS - 1) {
      onDone(scoreRef.current, totalRef.current);
    } else {
      setRound(r => r + 1);
      setRoundKey(k => k + 1);
    }
  }, [round, onDone]);

  const current = roundData[round];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
        >✕</button>
      )}
      {/* Round progress dots */}
      <div className="flex justify-center gap-1.5 pt-4 pb-2 flex-shrink-0">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{
              background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.15)",
            }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={roundKey}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.22 }}
          className="flex-1 flex flex-col items-center justify-start px-4 pb-8 pt-2 gap-4 overflow-auto"
        >
          <Round
            key={roundKey}
            color={color}
            t={t}
            questions={current.questions}
            onRoundDone={handleRoundDone}
            titleKey={current.titleKey}
            hintKey={current.hintKey}
            teachKey={current.teachKey}
            speak={speak}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(RecyclingExplorer);
