"use client";
// PlantExplorer — Island i4: Plant Organs (Pflanzenorgane)
// 5 rounds: Plant part function MCQ, Photosynthesis MCQ, Root→Stem→Leaf order, What does leaf produce? MCQ, Quick review

import { memo, useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MCQQuestion {
  emoji: string;
  question: string;
  choices: string[];
  answer: string;
}

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  en: {
    next: "Next", finish: "Finish", correct: "Correct! ✓", wrong: "Not quite — try again",
    r1Title: "Plant Parts", r1Hint: "Which part of the plant does this job?",
    r2Title: "Photosynthesis", r2Hint: "What does a plant need or produce in photosynthesis?",
    r3Title: "Water Journey", r3Hint: "Tap the path water takes through a plant, from first to last.",
    r3InProgress: "Keep going!", r3Done: "Correct path! ✓",
    r4Title: "Leaf Products", r4Hint: "What does a leaf make or release during photosynthesis?",
    r5Title: "Quick Review", r5Hint: "Mixed questions from all rounds.",
    root: "Root 🌱", stem: "Stem 🪵", leaf: "Leaf 🍃", flower: "Flower 🌸",
    q_part_water: "💧 Which plant part absorbs water and minerals from the soil?",
    q_part_support: "🪵 Which plant part supports the plant and transports water upward?",
    q_part_photo: "☀️ Which plant part captures sunlight to make food?",
    q_part_reprod: "🌸 Which plant part is used for reproduction?",
    sunlight: "Sunlight ☀️", water: "Water 💧", co2: "Carbon dioxide CO₂", glucose: "Glucose (sugar) 🍬", oxygen: "Oxygen O₂",
    q_photo_need1: "☀️ What does a leaf need from the environment to do photosynthesis?",
    q_photo_need2: "💧 What liquid does a plant take up through its roots for photosynthesis?",
    q_photo_need3: "🌬️ What gas does a leaf absorb from the air during photosynthesis?",
    // Water journey order
    root_lbl: "Root absorbs water 🌱", stem_lbl: "Stem transports upward 🪵", leaf_lbl: "Leaf uses water for photosynthesis 🍃",
    q_leaf_makes: "🍃 What does a leaf produce during photosynthesis?",
    q_leaf_releases: "🌿 What gas does a leaf release as a byproduct of photosynthesis?",
    both_products: "Glucose and oxygen 🍬+O₂",
    only_glucose: "Only glucose 🍬",
    only_oxygen: "Only oxygen O₂",
    carbon_dioxide: "Carbon dioxide CO₂",
  },
  de: {
    next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz — versuch es nochmal",
    r1Title: "Pflanzenteile", r1Hint: "Welcher Teil der Pflanze erfüllt diese Aufgabe?",
    r2Title: "Fotosynthese", r2Hint: "Was braucht oder produziert eine Pflanze bei der Fotosynthese?",
    r3Title: "Wasserreise", r3Hint: "Tippe den Weg des Wassers durch die Pflanze, von Anfang bis Ende.",
    r3InProgress: "Weiter so!", r3Done: "Richtiger Weg! ✓",
    r4Title: "Blattprodukte", r4Hint: "Was stellt ein Blatt bei der Fotosynthese her oder gibt es ab?",
    r5Title: "Schnelle Wiederholung", r5Hint: "Gemischte Fragen aus allen Runden.",
    root: "Wurzel 🌱", stem: "Stängel 🪵", leaf: "Blatt 🍃", flower: "Blüte 🌸",
    q_part_water: "💧 Welcher Pflanzenteil nimmt Wasser und Mineralstoffe aus dem Boden auf?",
    q_part_support: "🪵 Welcher Pflanzenteil stützt die Pflanze und transportiert Wasser nach oben?",
    q_part_photo: "☀️ Welcher Pflanzenteil nutzt Sonnenlicht zur Nahrungsproduktion?",
    q_part_reprod: "🌸 Welcher Pflanzenteil dient der Fortpflanzung?",
    sunlight: "Sonnenlicht ☀️", water: "Wasser 💧", co2: "Kohlendioxid CO₂", glucose: "Glukose (Zucker) 🍬", oxygen: "Sauerstoff O₂",
    q_photo_need1: "☀️ Was braucht ein Blatt aus der Umgebung für die Fotosynthese?",
    q_photo_need2: "💧 Welche Flüssigkeit nimmt eine Pflanze durch die Wurzeln für die Fotosynthese auf?",
    q_photo_need3: "🌬️ Welches Gas nimmt ein Blatt aus der Luft bei der Fotosynthese auf?",
    root_lbl: "Wurzel nimmt Wasser auf 🌱", stem_lbl: "Stängel transportiert aufwärts 🪵", leaf_lbl: "Blatt nutzt Wasser für Fotosynthese 🍃",
    q_leaf_makes: "🍃 Was produziert ein Blatt bei der Fotosynthese?",
    q_leaf_releases: "🌿 Welches Gas gibt ein Blatt als Nebenprodukt der Fotosynthese ab?",
    both_products: "Glukose und Sauerstoff 🍬+O₂",
    only_glucose: "Nur Glukose 🍬",
    only_oxygen: "Nur Sauerstoff O₂",
    carbon_dioxide: "Kohlendioxid CO₂",
  },
  hu: {
    next: "Tovább", finish: "Befejezés", correct: "Helyes! ✓", wrong: "Nem egészen — próbáld újra",
    r1Title: "Növényi részek", r1Hint: "Melyik növényi rész végzi ezt a feladatot?",
    r2Title: "Fotoszintézis", r2Hint: "Mire van szüksége a növénynek, vagy mit termel fotoszintézis közben?",
    r3Title: "A víz útja", r3Hint: "Koppints a víz útjára a növényen keresztül, az elejétől a végéig.",
    r3InProgress: "Csak így tovább!", r3Done: "Helyes út! ✓",
    r4Title: "Levél termékei", r4Hint: "Mit állít elő vagy bocsát ki a levél fotoszintézis közben?",
    r5Title: "Gyors összefoglalás", r5Hint: "Vegyes kérdések az összes körből.",
    root: "Gyökér 🌱", stem: "Szár 🪵", leaf: "Levél 🍃", flower: "Virág 🌸",
    q_part_water: "💧 Melyik növényi rész szívja fel a vizet és ásványi anyagokat a talajból?",
    q_part_support: "🪵 Melyik növényi rész támasztja a növényt és szállítja felfelé a vizet?",
    q_part_photo: "☀️ Melyik növényi rész fogja fel a napfényt táplálék előállításához?",
    q_part_reprod: "🌸 Melyik növényi rész a szaporodáshoz szükséges?",
    sunlight: "Napfény ☀️", water: "Víz 💧", co2: "Szén-dioxid CO₂", glucose: "Glükóz (cukor) 🍬", oxygen: "Oxigén O₂",
    q_photo_need1: "☀️ Mire van szüksége a levélnek a környezetből a fotoszintézishez?",
    q_photo_need2: "💧 Milyen folyadékot vesz fel a növény a gyökerein keresztül a fotoszintézishez?",
    q_photo_need3: "🌬️ Milyen gázt vesz fel a levél a levegőből fotoszintézis közben?",
    root_lbl: "Gyökér felveszi a vizet 🌱", stem_lbl: "Szár felfelé szállítja 🪵", leaf_lbl: "Levél fotoszintézisre használja 🍃",
    q_leaf_makes: "🍃 Mit termel a levél fotoszintézis közben?",
    q_leaf_releases: "🌿 Milyen gázt bocsát ki a levél a fotoszintézis melléktermékeként?",
    both_products: "Glükóz és oxigén 🍬+O₂",
    only_glucose: "Csak glükóz 🍬",
    only_oxygen: "Csak oxigén O₂",
    carbon_dioxide: "Szén-dioxid CO₂",
  },
  ro: {
    next: "Înainte", finish: "Gata", correct: "Corect! ✓", wrong: "Nu chiar — mai încearcă",
    r1Title: "Organe vegetale", r1Hint: "Care parte a plantei îndeplinește această funcție?",
    r2Title: "Fotosinteza", r2Hint: "Ce are nevoie sau produce o plantă în fotosinteza?",
    r3Title: "Drumul apei", r3Hint: "Atinge drumul apei prin plantă, de la început până la sfârșit.",
    r3InProgress: "Continuă!", r3Done: "Drum corect! ✓",
    r4Title: "Produsele frunzei", r4Hint: "Ce produce sau eliberează frunza în fotosinteza?",
    r5Title: "Recapitulare rapidă", r5Hint: "Întrebări mixte din toate rundele.",
    root: "Rădăcină 🌱", stem: "Tulpină 🪵", leaf: "Frunză 🍃", flower: "Floare 🌸",
    q_part_water: "💧 Care parte a plantei absoarbe apa și mineralele din sol?",
    q_part_support: "🪵 Care parte susține planta și transportă apa în sus?",
    q_part_photo: "☀️ Care parte captează lumina solară pentru a produce hrană?",
    q_part_reprod: "🌸 Care parte a plantei este folosită pentru reproducere?",
    sunlight: "Lumina soarelui ☀️", water: "Apă 💧", co2: "Dioxid de carbon CO₂", glucose: "Glucoză (zahăr) 🍬", oxygen: "Oxigen O₂",
    q_photo_need1: "☀️ Ce nevoie are frunza din mediu pentru fotosinteză?",
    q_photo_need2: "💧 Ce lichid absoarbe planta prin rădăcini pentru fotosinteză?",
    q_photo_need3: "🌬️ Ce gaz absoarbe frunza din aer în fotosinteză?",
    root_lbl: "Rădăcina absoarbe apa 🌱", stem_lbl: "Tulpina transportă în sus 🪵", leaf_lbl: "Frunza folosește apa pentru fotosinteză 🍃",
    q_leaf_makes: "🍃 Ce produce frunza în fotosinteză?",
    q_leaf_releases: "🌿 Ce gaz eliberează frunza ca produs secundar al fotosintezei?",
    both_products: "Glucoză și oxigen 🍬+O₂",
    only_glucose: "Doar glucoză 🍬",
    only_oxygen: "Doar oxigen O₂",
    carbon_dioxide: "Dioxid de carbon CO₂",
  },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a;
}

const PART_POOL: MCQQuestion[] = [
  { emoji: "💧", question: "q_part_water", choices: shuffle(["root", "stem", "leaf", "flower"]), answer: "root" },
  { emoji: "🪵", question: "q_part_support", choices: shuffle(["stem", "root", "leaf", "flower"]), answer: "stem" },
  { emoji: "☀️", question: "q_part_photo", choices: shuffle(["leaf", "root", "stem", "flower"]), answer: "leaf" },
  { emoji: "🌸", question: "q_part_reprod", choices: shuffle(["flower", "root", "stem", "leaf"]), answer: "flower" },
];

const PHOTO_POOL: MCQQuestion[] = [
  { emoji: "☀️", question: "q_photo_need1", choices: shuffle(["sunlight", "water", "co2", "oxygen"]), answer: "sunlight" },
  { emoji: "💧", question: "q_photo_need2", choices: shuffle(["water", "sunlight", "co2", "oxygen"]), answer: "water" },
  { emoji: "🌬️", question: "q_photo_need3", choices: shuffle(["co2", "sunlight", "water", "oxygen"]), answer: "co2" },
];

const LEAF_POOL: MCQQuestion[] = [
  { emoji: "🍃", question: "q_leaf_makes", choices: shuffle(["both_products", "only_glucose", "only_oxygen", "carbon_dioxide"]), answer: "both_products" },
  { emoji: "🌿", question: "q_leaf_releases", choices: shuffle(["oxygen", "co2", "water", "glucose"]), answer: "oxygen" },
];

const WATER_ORDER = ["root_lbl", "stem_lbl", "leaf_lbl"] as const;
const TOTAL_ROUNDS = 5;

function PlantExplorer({ color, lang = "de", onDone }: Props) {
  const t = LABELS[lang] ?? LABELS.de;
  const r1Qs = useMemo(() => shuffle(PART_POOL), []);
  const r2Qs = useMemo(() => shuffle(PHOTO_POOL), []);
  const r4Qs = useMemo(() => shuffle(LEAF_POOL), []);
  const r5Qs = useMemo(() => shuffle([...PART_POOL, ...PHOTO_POOL]).slice(0, 3), []);
  const [scrambled] = useState(() => shuffle([...WATER_ORDER]));

  const [round, setRound] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [tapped, setTapped] = useState<string[]>([]);
  const [orderWrong, setOrderWrong] = useState<string | null>(null);
  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  const resetSub = useCallback(() => { setSelected(null); setLocked(false); }, []);
  const advanceRound = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) onDone(scoreRef.current, totalRef.current);
    else { setRound(r => r + 1); setSubIdx(0); resetSub(); setTapped([]); setOrderWrong(null); }
  }, [round, onDone, resetSub]);
  const advanceSub = useCallback((qs: MCQQuestion[], isLast = false) => {
    if (subIdx < qs.length - 1) { setSubIdx(i => i + 1); resetSub(); }
    else { if (isLast) onDone(scoreRef.current, totalRef.current); else advanceRound(); }
  }, [subIdx, advanceRound, onDone, resetSub]);

  const handleSelect = useCallback((key: string, correct: string) => {
    if (locked) return;
    setSelected(key); setLocked(true); totalRef.current += 1;
    if (key === correct) scoreRef.current += 1;
  }, [locked]);

  const handleOrderTap = useCallback((key: string) => {
    if (tapped.includes(key)) return;
    const expected = WATER_ORDER[tapped.length];
    if (key === expected) {
      const next = [...tapped, key]; setTapped(next); setOrderWrong(null);
      if (next.length === WATER_ORDER.length) { totalRef.current += 1; scoreRef.current += 1; setTimeout(() => advanceRound(), 700); }
    } else { setOrderWrong(key); totalRef.current += 1; setTimeout(() => setOrderWrong(null), 600); }
  }, [tapped, advanceRound]);

  const renderNext = (onNext: () => void, isFinish = false) => (
    <motion.button onClick={onNext} className="w-full max-w-xs py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2" style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }} whileTap={{ scale: 0.97 }} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
      {isFinish ? t.finish : t.next} <ChevronRight size={16} />
    </motion.button>
  );

  const renderMCQ = (qs: MCQQuestion[], title: string, hint: string, isLast = false) => {
    const q = qs[subIdx]; const isCorrect = locked && selected === q.answer;
    return (<>
      {qs.length > 1 && <div className="flex gap-1 justify-center mb-1">{qs.map((_, i) => <div key={i} className="w-2 h-2 rounded-full transition-colors" style={{ background: i < subIdx ? "#00FF88" : i === subIdx ? color : "rgba(255,255,255,0.15)" }} />)}</div>}
      <p className="text-xl font-black text-white text-center">{title}</p>
      <p className="text-white/60 text-xs font-bold text-center px-4">{hint}</p>
      <div className="w-full max-w-xs rounded-2xl px-4 py-4 text-center" style={{ background: "rgba(255,255,255,0.06)", border: `1.5px solid ${color}33` }}>
        <p className="text-base font-semibold text-white/90 leading-snug">{t[q.question]}</p>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-xs">
        {q.choices.map(k => {
          const isThis = selected === k, isRight = k === q.answer;
          let bg = "rgba(255,255,255,0.06)", border = "rgba(255,255,255,0.1)", tc = "text-white";
          if (locked) { if (isRight) { bg = `${color}33`; border = color; } else if (isThis) { bg = "#FF2D7833"; border = "#FF2D78"; tc = "text-white/70"; } }
          else if (isThis) { bg = `${color}22`; border = color; }
          return <motion.button key={k} onClick={() => handleSelect(k, q.answer)} disabled={locked} className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all ${tc}`} style={{ background: bg, border: `2px solid ${border}` }} whileTap={locked ? {} : { scale: 0.97 }}>{t[k]}</motion.button>;
        })}
      </div>
      {locked && <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-bold text-center" style={{ color: isCorrect ? "#00FF88" : "#FF2D78" }}>{isCorrect ? t.correct : t.wrong}</motion.p>}
      {locked && renderNext(() => advanceSub(qs, isLast), isLast && subIdx === qs.length - 1)}
    </>);
  };

  const renderOrder = () => {
    const allDone = tapped.length === WATER_ORDER.length;
    return (<>
      <p className="text-xl font-black text-white text-center">{t.r3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center px-4">{t.r3Hint}</p>
      <div className="flex gap-2 flex-wrap justify-center min-h-[2rem]">
        {tapped.map((k, i) => <motion.span key={k} initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: `${color}55`, border: `1.5px solid ${color}` }}>{i + 1}. {t[k]}</motion.span>)}
      </div>
      <p className="text-xs font-bold text-center" style={{ color: allDone ? "#00FF88" : "rgba(255,255,255,0.4)" }}>{allDone ? t.r3Done : t.r3InProgress}</p>
      <div className="flex flex-col gap-2 w-full max-w-xs">
        {scrambled.map(key => {
          const done = tapped.includes(key), isWrong = orderWrong === key;
          return <motion.button key={key} onClick={() => handleOrderTap(key)} disabled={done} className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white" style={{ background: done ? `${color}22` : "rgba(255,255,255,0.06)", border: `2px solid ${done ? color : isWrong ? "#FF2D78" : "rgba(255,255,255,0.1)"}`, opacity: done ? 0.45 : 1 }} animate={isWrong ? { x: [-6, 6, -4, 4, 0] } : {}} transition={{ duration: 0.35 }} whileTap={done ? {} : { scale: 0.97 }}>{t[key]}</motion.button>;
        })}
      </div>
    </>);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      <div className="flex justify-center gap-1.5 pt-4 pb-2">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => <div key={i} className="w-2.5 h-2.5 rounded-full transition-colors" style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.15)" }} />)}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={`${round}-${subIdx}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4">
          {round === 0 && renderMCQ(r1Qs, t.r1Title, t.r1Hint)}
          {round === 1 && renderMCQ(r2Qs, t.r2Title, t.r2Hint)}
          {round === 2 && renderOrder()}
          {round === 3 && renderMCQ(r4Qs, t.r4Title, t.r4Hint)}
          {round === 4 && renderMCQ(r5Qs, t.r5Title, t.r5Hint, true)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(PlantExplorer);
