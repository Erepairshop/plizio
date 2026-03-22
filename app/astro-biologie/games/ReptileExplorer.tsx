"use client";
// ReptileExplorer — Island i2: Reptiles & Birds (Reptilien & Vögel)
// 5 rounds: Reptile or Bird? MCQ, Bird features MCQ, Cold/Warm blooded order, Egg features MCQ, Quick review

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
    r1Title: "Reptile or Bird?", r1Hint: "Identify which group the animal belongs to.",
    r2Title: "Bird Features", r2Hint: "What feature is being described?",
    r3Title: "Cold or Warm Blooded?", r3Hint: "Tap: first Cold-blooded, then Warm-blooded animals.",
    r3InProgress: "Keep going!", r3Done: "Correct grouping! ✓",
    r4Title: "Egg & Scales", r4Hint: "Answer questions about how reptiles and birds reproduce.",
    r5Title: "Quick Review", r5Hint: "Mixed questions from all rounds.",
    reptile: "Reptile 🦎", bird: "Bird 🐦",
    q_snake: "🐍 Has dry scaly skin, no legs, is cold-blooded. What type of animal?",
    q_eagle: "🦅 Has feathers, wings, a beak, is warm-blooded. What type of animal?",
    q_crocodile: "🐊 Has scales, four legs, lays eggs, is cold-blooded. What type of animal?",
    q_penguin: "🐧 Cannot fly, has feathers, flippers for swimming. What type of animal?",
    feathers: "Feathers 🪶", beak: "Beak 👃", wings: "Wings 🦅", hollow_bones: "Hollow bones 🦴",
    q_bird_fly: "✈️ Which feature makes birds light enough to fly?",
    q_bird_warm: "🌡️ Which feature covers a bird's body and keeps it warm?",
    q_bird_eat: "🍎 Which feature does a bird use to catch and eat food?",
    cold_blooded: "Cold-blooded 🥶", warm_blooded: "Warm-blooded 🔥",
    r3Hint2: "Tap: Snake 🐍 → Crocodile 🐊 → Eagle 🦅 → Penguin 🐧",
    snake_lbl: "Snake 🐍", croc_lbl: "Crocodile 🐊", eagle_lbl: "Eagle 🦅", penguin_lbl: "Penguin 🐧",
    hard_shell: "Hard-shelled egg 🥚", leathery: "Leathery egg 🍳", live_birth: "Live birth 👶", no_egg: "No eggs 🚫",
    q_reptile_egg: "🦎 What type of egg do most reptiles lay?",
    q_bird_egg: "🐦 What type of egg do birds lay?",
    q_cold_body: "🌡️ Reptiles are cold-blooded. What does this mean?",
    body_temp_env: "Their body temperature matches the environment 🌡️",
    body_temp_fixed: "They always stay at 37°C 🌡️",
    body_temp_cold: "They can only live in cold places ❄️",
    body_temp_hot: "They can only live in hot places 🌴",
  },
  de: {
    next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz — versuch es nochmal",
    r1Title: "Reptil oder Vogel?", r1Hint: "Bestimme, welcher Gruppe das Tier angehört.",
    r2Title: "Vogelmerkmale", r2Hint: "Welches Merkmal wird beschrieben?",
    r3Title: "Kalt- oder Warmblüter?", r3Hint: "Tippe: zuerst Kaltblüter, dann Warmblüter.",
    r3InProgress: "Weiter so!", r3Done: "Richtige Einteilung! ✓",
    r4Title: "Eier & Schuppen", r4Hint: "Beantworte Fragen zur Fortpflanzung von Reptilien und Vögeln.",
    r5Title: "Schnelle Wiederholung", r5Hint: "Gemischte Fragen aus allen Runden.",
    reptile: "Reptil 🦎", bird: "Vogel 🐦",
    q_snake: "🐍 Hat trockene, schuppige Haut, keine Beine, ist kaltblütig. Was ist das?",
    q_eagle: "🦅 Hat Federn, Flügel, einen Schnabel, ist warmblütig. Was ist das?",
    q_crocodile: "🐊 Hat Schuppen, vier Beine, legt Eier, ist kaltblütig. Was ist das?",
    q_penguin: "🐧 Kann nicht fliegen, hat Federn, Flossen zum Schwimmen. Was ist das?",
    feathers: "Federn 🪶", beak: "Schnabel 👃", wings: "Flügel 🦅", hollow_bones: "Hohle Knochen 🦴",
    q_bird_fly: "✈️ Welches Merkmal macht Vögel leicht genug zum Fliegen?",
    q_bird_warm: "🌡️ Welches Merkmal bedeckt den Vogelkörper und hält ihn warm?",
    q_bird_eat: "🍎 Welches Merkmal benutzt ein Vogel zum Fressen?",
    cold_blooded: "Kaltblüter 🥶", warm_blooded: "Warmblüter 🔥",
    r3Hint2: "Tippe: Schlange 🐍 → Krokodil 🐊 → Adler 🦅 → Pinguin 🐧",
    snake_lbl: "Schlange 🐍", croc_lbl: "Krokodil 🐊", eagle_lbl: "Adler 🦅", penguin_lbl: "Pinguin 🐧",
    hard_shell: "Hartschaliges Ei 🥚", leathery: "Lederhautiges Ei 🍳", live_birth: "Lebendgeburt 👶", no_egg: "Keine Eier 🚫",
    q_reptile_egg: "🦎 Welche Art Ei legen die meisten Reptilien?",
    q_bird_egg: "🐦 Welche Art Ei legen Vögel?",
    q_cold_body: "🌡️ Reptilien sind kaltblütig. Was bedeutet das?",
    body_temp_env: "Körpertemperatur passt sich der Umgebung an 🌡️",
    body_temp_fixed: "Sie haben immer 37°C 🌡️",
    body_temp_cold: "Sie leben nur an kalten Orten ❄️",
    body_temp_hot: "Sie leben nur an heißen Orten 🌴",
  },
  hu: {
    next: "Tovább", finish: "Befejezés", correct: "Helyes! ✓", wrong: "Nem egészen — próbáld újra",
    r1Title: "Hüllő vagy madár?", r1Hint: "Határozd meg, melyik csoportba tartozik az állat.",
    r2Title: "Madár jellemzők", r2Hint: "Milyen jellemzőről van szó?",
    r3Title: "Hideg- vagy melegvérű?", r3Hint: "Koppints: először hidegvérűek, majd melegvérűek.",
    r3InProgress: "Csak így tovább!", r3Done: "Helyes csoportosítás! ✓",
    r4Title: "Tojások és pikkelyek", r4Hint: "Válaszolj a hüllők és madarak szaporodásáról.",
    r5Title: "Gyors összefoglalás", r5Hint: "Vegyes kérdések az összes körből.",
    reptile: "Hüllő 🦎", bird: "Madár 🐦",
    q_snake: "🐍 Száraz, pikkelyes bőre van, lábai nincsenek, hidegvérű. Mi ez?",
    q_eagle: "🦅 Tollas, szárnya és csőre van, melegvérű. Mi ez?",
    q_crocodile: "🐊 Pikkelyes, négy lába van, tojást rak, hidegvérű. Mi ez?",
    q_penguin: "🐧 Nem tud repülni, tolla van, uszonyokkal úszik. Mi ez?",
    feathers: "Toll 🪶", beak: "Csőr 👃", wings: "Szárny 🦅", hollow_bones: "Üreges csontok 🦴",
    q_bird_fly: "✈️ Melyik jellemző teszi a madarakat elég könnyűvé a repüléshez?",
    q_bird_warm: "🌡️ Melyik jellemző borítja a madár testét és tartja melegen?",
    q_bird_eat: "🍎 Melyik jellemzőt használja a madár az evéshez?",
    cold_blooded: "Hidegvérű 🥶", warm_blooded: "Melegvérű 🔥",
    r3Hint2: "Koppints: Kígyó 🐍 → Krokodil 🐊 → Sas 🦅 → Pingvin 🐧",
    snake_lbl: "Kígyó 🐍", croc_lbl: "Krokodil 🐊", eagle_lbl: "Sas 🦅", penguin_lbl: "Pingvin 🐧",
    hard_shell: "Keményhéjú tojás 🥚", leathery: "Bőrhéjú tojás 🍳", live_birth: "Elevenszülés 👶", no_egg: "Nem rak tojást 🚫",
    q_reptile_egg: "🦎 Milyen tojást raknak a legtöbb hüllők?",
    q_bird_egg: "🐦 Milyen tojást raknak a madarak?",
    q_cold_body: "🌡️ A hüllők hidegvérűek. Mit jelent ez?",
    body_temp_env: "Testhőmérsékletük igazodik a környezethez 🌡️",
    body_temp_fixed: "Mindig 37°C-uk van 🌡️",
    body_temp_cold: "Csak hideg helyeken élnek ❄️",
    body_temp_hot: "Csak meleg helyeken élnek 🌴",
  },
  ro: {
    next: "Înainte", finish: "Gata", correct: "Corect! ✓", wrong: "Nu chiar — mai încearcă",
    r1Title: "Reptilă sau pasăre?", r1Hint: "Identifică grupul din care face parte animalul.",
    r2Title: "Caracteristici ale păsărilor", r2Hint: "Ce caracteristică este descrisă?",
    r3Title: "Cu sânge rece sau cald?", r3Hint: "Atinge: întâi animale cu sânge rece, apoi cu sânge cald.",
    r3InProgress: "Continuă!", r3Done: "Grupare corectă! ✓",
    r4Title: "Ouă și solzi", r4Hint: "Răspunde la întrebări despre reproducerea reptilelor și păsărilor.",
    r5Title: "Recapitulare rapidă", r5Hint: "Întrebări mixte din toate rundele.",
    reptile: "Reptilă 🦎", bird: "Pasăre 🐦",
    q_snake: "🐍 Are pielea uscată și solzoasă, fără picioare, cu sânge rece. Ce este?",
    q_eagle: "🦅 Are pene, aripi, cioc, cu sânge cald. Ce este?",
    q_crocodile: "🐊 Are solzi, patru picioare, depune ouă, cu sânge rece. Ce este?",
    q_penguin: "🐧 Nu poate zbura, are pene, înotătoare pentru înot. Ce este?",
    feathers: "Pene 🪶", beak: "Cioc 👃", wings: "Aripi 🦅", hollow_bones: "Oase goale 🦴",
    q_bird_fly: "✈️ Ce caracteristică face păsările suficient de ușoare pentru zbor?",
    q_bird_warm: "🌡️ Ce caracteristică acoperă corpul păsării și îl menține cald?",
    q_bird_eat: "🍎 Ce caracteristică folosește o pasăre pentru a prinde și mânca hrană?",
    cold_blooded: "Cu sânge rece 🥶", warm_blooded: "Cu sânge cald 🔥",
    r3Hint2: "Atinge: Șarpe 🐍 → Crocodil 🐊 → Vultur 🦅 → Pinguin 🐧",
    snake_lbl: "Șarpe 🐍", croc_lbl: "Crocodil 🐊", eagle_lbl: "Vultur 🦅", penguin_lbl: "Pinguin 🐧",
    hard_shell: "Ou cu coajă dură 🥚", leathery: "Ou cu coajă pieloasă 🍳", live_birth: "Naștere vie 👶", no_egg: "Fără ouă 🚫",
    q_reptile_egg: "🦎 Ce tip de ou depun majoritatea reptilelor?",
    q_bird_egg: "🐦 Ce tip de ou depun păsările?",
    q_cold_body: "🌡️ Reptilele sunt cu sânge rece. Ce înseamnă asta?",
    body_temp_env: "Temperatura corpului se adaptează mediului 🌡️",
    body_temp_fixed: "Au mereu 37°C 🌡️",
    body_temp_cold: "Trăiesc doar în locuri reci ❄️",
    body_temp_hot: "Trăiesc doar în locuri calde 🌴",
  },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a;
}

const TYPE_POOL: MCQQuestion[] = [
  { emoji: "🐍", question: "q_snake", choices: shuffle(["reptile", "bird"]), answer: "reptile" },
  { emoji: "🦅", question: "q_eagle", choices: shuffle(["reptile", "bird"]), answer: "bird" },
  { emoji: "🐊", question: "q_crocodile", choices: shuffle(["reptile", "bird"]), answer: "reptile" },
  { emoji: "🐧", question: "q_penguin", choices: shuffle(["reptile", "bird"]), answer: "bird" },
];

const BIRD_POOL: MCQQuestion[] = [
  { emoji: "✈️", question: "q_bird_fly", choices: shuffle(["hollow_bones", "feathers", "beak", "wings"]), answer: "hollow_bones" },
  { emoji: "🌡️", question: "q_bird_warm", choices: shuffle(["feathers", "wings", "beak", "hollow_bones"]), answer: "feathers" },
  { emoji: "🍎", question: "q_bird_eat", choices: shuffle(["beak", "wings", "feathers", "hollow_bones"]), answer: "beak" },
];

const EGG_POOL: MCQQuestion[] = [
  { emoji: "🦎", question: "q_reptile_egg", choices: shuffle(["leathery", "hard_shell", "live_birth", "no_egg"]), answer: "leathery" },
  { emoji: "🐦", question: "q_bird_egg", choices: shuffle(["hard_shell", "leathery", "live_birth", "no_egg"]), answer: "hard_shell" },
  { emoji: "🌡️", question: "q_cold_body", choices: shuffle(["body_temp_env", "body_temp_fixed", "body_temp_cold", "body_temp_hot"]), answer: "body_temp_env" },
];

// Order round: cold-blooded first (snake, croc), then warm-blooded (eagle, penguin)
const CORRECT_ORDER = ["snake_lbl", "croc_lbl", "eagle_lbl", "penguin_lbl"] as const;
const TOTAL_ROUNDS = 5;

function ReptileExplorer({ color, lang = "de", onDone }: Props) {
  const t = LABELS[lang] ?? LABELS.de;
  const r1Qs = useMemo(() => shuffle(TYPE_POOL), []);
  const r2Qs = useMemo(() => shuffle(BIRD_POOL), []);
  const r4Qs = useMemo(() => shuffle(EGG_POOL), []);
  const r5Qs = useMemo(() => shuffle([...TYPE_POOL, ...BIRD_POOL, ...EGG_POOL]).slice(0, 3), []);
  const [scrambled] = useState(() => shuffle([...CORRECT_ORDER]));

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
    const expected = CORRECT_ORDER[tapped.length];
    if (key === expected) {
      const next = [...tapped, key]; setTapped(next); setOrderWrong(null);
      if (next.length === CORRECT_ORDER.length) { totalRef.current += 1; scoreRef.current += 1; setTimeout(() => advanceRound(), 700); }
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
    const allDone = tapped.length === CORRECT_ORDER.length;
    return (<>
      <p className="text-xl font-black text-white text-center">{t.r3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center px-4">{t.r3Hint}</p>
      <p className="text-white/40 text-xs text-center px-4">{t.r3Hint2}</p>
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

export default memo(ReptileExplorer);
