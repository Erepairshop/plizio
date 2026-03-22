"use client";
// FishExplorer — Island i1: Fish & Amphibians (Fische & Amphibien)
// 5 rounds: Animal type MCQ, Breathing MCQ, Frog life cycle order, Fish anatomy MCQ, Quick review

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
    r1Title: "Fish or Amphibian?", r1Hint: "Read the description and choose the right group.",
    r2Title: "How Do They Breathe?", r2Hint: "Match the animal to how it gets oxygen.",
    r3Title: "Frog Life Cycle", r3Hint: "Tap the stages of a frog's life in the correct order.",
    r3InProgress: "Keep going!", r3Done: "Perfect order! ✓",
    r4Title: "Fish Body Parts", r4Hint: "Which body part helps the fish with this task?",
    r5Title: "Quick Review", r5Hint: "Mixed questions from all rounds.",
    // animal type
    fish: "Fish 🐟", amphibian: "Amphibian 🐸",
    q_salmon: "🐟 Lives in water, has scales and fins, breathes through gills. What type of animal is it?",
    q_frog: "🐸 Hatches in water, lives as adult on land too, has moist skin. What type of animal is it?",
    q_trout: "🎣 Has a streamlined body, fins and a tail fin, lays eggs in rivers. What type of animal?",
    q_salamander: "🦎 Has four legs, moist skin, lives near water. What type of animal is it?",
    // breathing
    gills: "Gills (only in water) 🌊", lungs: "Lungs (only on land) 💨", both: "Both gills and lungs 🔄",
    q_breathe_fish: "🐟 Adult fish breathe through…?",
    q_breathe_frog: "🐸 Adult frogs breathe through…?",
    q_breathe_tadpole: "🥚 Tadpoles (young frogs) breathe through…?",
    // life cycle stages (order round)
    egg: "Egg 🥚", tadpole: "Tadpole 🐊", froglet: "Froglet 🦎", adult_frog: "Adult Frog 🐸",
    // fish body parts
    fin: "Fin 🐟", scale: "Scale 🪨", gill: "Gill 🌊", tail: "Tail 🔚",
    q_fish_swim: "🏊 Which body part helps a fish steer and balance in the water?",
    q_fish_protect: "🛡️ Which body part protects the fish's skin?",
    q_fish_breathe: "💧 Which body part lets a fish breathe underwater?",
  },
  de: {
    next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz — versuch es nochmal",
    r1Title: "Fisch oder Amphibie?", r1Hint: "Lies die Beschreibung und wähle die richtige Gruppe.",
    r2Title: "Wie atmen sie?", r2Hint: "Ordne das Tier seiner Atemweise zu.",
    r3Title: "Frosch-Lebenszyklus", r3Hint: "Tippe die Entwicklungsstufen des Frosches in der richtigen Reihenfolge.",
    r3InProgress: "Weiter so!", r3Done: "Perfekte Reihenfolge! ✓",
    r4Title: "Körperteile eines Fisches", r4Hint: "Welches Körperteil hilft dem Fisch bei dieser Aufgabe?",
    r5Title: "Schnelle Wiederholung", r5Hint: "Gemischte Fragen aus allen Runden.",
    fish: "Fisch 🐟", amphibian: "Amphibie 🐸",
    q_salmon: "🐟 Lebt im Wasser, hat Schuppen und Flossen, atmet durch Kiemen. Was ist es?",
    q_frog: "🐸 Schlüpft im Wasser, lebt als Erwachsener auch an Land, hat feuchte Haut. Was ist es?",
    q_trout: "🎣 Hat einen stromlinienförmigen Körper, Flossen und Schwanzflosse, legt Eier in Flüssen. Was ist es?",
    q_salamander: "🦎 Hat vier Beine, feuchte Haut, lebt in der Nähe von Wasser. Was ist es?",
    gills: "Kiemen (nur im Wasser) 🌊", lungs: "Lungen (nur an Land) 💨", both: "Kiemen und Lungen 🔄",
    q_breathe_fish: "🐟 Erwachsene Fische atmen durch…?",
    q_breathe_frog: "🐸 Erwachsene Frösche atmen durch…?",
    q_breathe_tadpole: "🥚 Kaulquappen (junge Frösche) atmen durch…?",
    egg: "Ei 🥚", tadpole: "Kaulquappe 🐊", froglet: "Jungfrosch 🦎", adult_frog: "Erwachsener Frosch 🐸",
    fin: "Flosse 🐟", scale: "Schuppe 🪨", gill: "Kieme 🌊", tail: "Schwanz 🔚",
    q_fish_swim: "🏊 Welches Körperteil hilft dem Fisch beim Steuern und Gleichgewicht?",
    q_fish_protect: "🛡️ Welches Körperteil schützt die Fischhaut?",
    q_fish_breathe: "💧 Welches Körperteil ermöglicht dem Fisch das Atmen unter Wasser?",
  },
  hu: {
    next: "Tovább", finish: "Befejezés", correct: "Helyes! ✓", wrong: "Nem egészen — próbáld újra",
    r1Title: "Hal vagy kétéltű?", r1Hint: "Olvasd el a leírást és válaszd ki a helyes csoportot.",
    r2Title: "Hogyan lélegeznek?", r2Hint: "Párosítsd az állatot a légzésmódjával.",
    r3Title: "Béka életciklusa", r3Hint: "Koppints a béka fejlődési szakaszaira helyes sorrendben.",
    r3InProgress: "Csak így tovább!", r3Done: "Tökéletes sorrend! ✓",
    r4Title: "A hal testrészei", r4Hint: "Melyik testrész segít a halnak ebben a feladatban?",
    r5Title: "Gyors összefoglalás", r5Hint: "Vegyes kérdések az összes körből.",
    fish: "Hal 🐟", amphibian: "Kétéltű 🐸",
    q_salmon: "🐟 Vízben él, pikkelyei és uszonyai vannak, kopoltyúval lélegzik. Mi ez?",
    q_frog: "🐸 Vízben kel ki, felnőttként szárazföldön is él, nedves bőre van. Mi ez?",
    q_trout: "🎣 Áramvonalas teste, uszonyai és farokuszonyai van, folyókban rak tojást. Mi ez?",
    q_salamander: "🦎 Négy lába van, nedves bőre, víz közelében él. Mi ez?",
    gills: "Kopoltyú (csak vízben) 🌊", lungs: "Tüdő (csak szárazföldön) 💨", both: "Kopoltyú és tüdő 🔄",
    q_breathe_fish: "🐟 A felnőtt halak mivel lélegeznek?",
    q_breathe_frog: "🐸 A felnőtt békák mivel lélegeznek?",
    q_breathe_tadpole: "🥚 Az ebihalak (fiatal békák) mivel lélegeznek?",
    egg: "Tojás 🥚", tadpole: "Ebihal 🐊", froglet: "Fiatal béka 🦎", adult_frog: "Felnőtt béka 🐸",
    fin: "Uszony 🐟", scale: "Pikkely 🪨", gill: "Kopoltyú 🌊", tail: "Farok 🔚",
    q_fish_swim: "🏊 Melyik testrész segíti a halat az irányításban és az egyensúlyban?",
    q_fish_protect: "🛡️ Melyik testrész védi a hal bőrét?",
    q_fish_breathe: "💧 Melyik testrész teszi lehetővé a hal számára a víz alatti légzést?",
  },
  ro: {
    next: "Înainte", finish: "Gata", correct: "Corect! ✓", wrong: "Nu chiar — mai încearcă",
    r1Title: "Pește sau amfibian?", r1Hint: "Citește descrierea și alege grupul corect.",
    r2Title: "Cum respiră?", r2Hint: "Asociază animalul cu modul său de respirație.",
    r3Title: "Ciclul de viață al broaștei", r3Hint: "Atinge etapele de viață ale broaștei în ordinea corectă.",
    r3InProgress: "Continuă!", r3Done: "Ordine perfectă! ✓",
    r4Title: "Părțile corpului peștelui", r4Hint: "Ce parte a corpului ajută peștele la această sarcină?",
    r5Title: "Recapitulare rapidă", r5Hint: "Întrebări mixte din toate rundele.",
    fish: "Pește 🐟", amphibian: "Amfibian 🐸",
    q_salmon: "🐟 Trăiește în apă, are solzi și înotătoare, respiră prin branhii. Ce este?",
    q_frog: "🐸 Eclozează în apă, trăiește și pe uscat ca adult, are pielea umedă. Ce este?",
    q_trout: "🎣 Are corp aerodinamic, înotătoare și coadă, depune ouă în râuri. Ce este?",
    q_salamander: "🦎 Are patru picioare, piele umedă, trăiește lângă apă. Ce este?",
    gills: "Branhii (doar în apă) 🌊", lungs: "Plămâni (doar pe uscat) 💨", both: "Branhii și plămâni 🔄",
    q_breathe_fish: "🐟 Peștii adulți respiră prin…?",
    q_breathe_frog: "🐸 Broaștele adulte respiră prin…?",
    q_breathe_tadpole: "🥚 Mormoloci (broaște tinere) respiră prin…?",
    egg: "Ou 🥚", tadpole: "Mormoloc 🐊", froglet: "Broașcuță 🦎", adult_frog: "Broască adultă 🐸",
    fin: "Înotătoare 🐟", scale: "Solz 🪨", gill: "Branhie 🌊", tail: "Coadă 🔚",
    q_fish_swim: "🏊 Ce parte a corpului ajută peștele să se orienteze și să mențină echilibrul?",
    q_fish_protect: "🛡️ Ce parte a corpului protejează pielea peștelui?",
    q_fish_breathe: "💧 Ce parte a corpului permite peștelui să respire sub apă?",
  },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a;
}

const TYPE_POOL: MCQQuestion[] = [
  { emoji: "🐟", question: "q_salmon", choices: shuffle(["fish", "amphibian"]), answer: "fish" },
  { emoji: "🐸", question: "q_frog", choices: shuffle(["fish", "amphibian"]), answer: "amphibian" },
  { emoji: "🎣", question: "q_trout", choices: shuffle(["fish", "amphibian"]), answer: "fish" },
  { emoji: "🦎", question: "q_salamander", choices: shuffle(["fish", "amphibian"]), answer: "amphibian" },
];

const BREATHE_POOL: MCQQuestion[] = [
  { emoji: "🐟", question: "q_breathe_fish", choices: shuffle(["gills", "lungs", "both"]), answer: "gills" },
  { emoji: "🐸", question: "q_breathe_frog", choices: shuffle(["both", "gills", "lungs"]), answer: "both" },
  { emoji: "🥚", question: "q_breathe_tadpole", choices: shuffle(["gills", "lungs", "both"]), answer: "gills" },
];

const ANATOMY_POOL: MCQQuestion[] = [
  { emoji: "🏊", question: "q_fish_swim", choices: shuffle(["fin", "scale", "gill", "tail"]), answer: "fin" },
  { emoji: "🛡️", question: "q_fish_protect", choices: shuffle(["scale", "fin", "gill", "tail"]), answer: "scale" },
  { emoji: "💧", question: "q_fish_breathe", choices: shuffle(["gill", "fin", "scale", "tail"]), answer: "gill" },
];

const LIFECYCLE_ORDER = ["egg", "tadpole", "froglet", "adult_frog"] as const;
const TOTAL_ROUNDS = 5;

function FishExplorer({ color, lang = "de", onDone }: Props) {
  const t = LABELS[lang] ?? LABELS.de;
  const r1Qs = useMemo(() => shuffle(TYPE_POOL), []);
  const r2Qs = useMemo(() => shuffle(BREATHE_POOL), []);
  const r4Qs = useMemo(() => shuffle(ANATOMY_POOL), []);
  const r5Qs = useMemo(() => shuffle([...TYPE_POOL, ...BREATHE_POOL, ...ANATOMY_POOL]).slice(0, 3), []);
  const [scrambled] = useState(() => shuffle([...LIFECYCLE_ORDER]));

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
    const expected = LIFECYCLE_ORDER[tapped.length];
    if (key === expected) {
      const next = [...tapped, key]; setTapped(next); setOrderWrong(null);
      if (next.length === LIFECYCLE_ORDER.length) { totalRef.current += 1; scoreRef.current += 1; setTimeout(() => advanceRound(), 700); }
    } else { setOrderWrong(key); totalRef.current += 1; setTimeout(() => setOrderWrong(null), 600); }
  }, [tapped, advanceRound]);

  const renderNext = (onNext: () => void, isFinish = false) => (
    <motion.button onClick={onNext}
      className="w-full max-w-xs py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
      whileTap={{ scale: 0.97 }} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
      {isFinish ? t.finish : t.next} <ChevronRight size={16} />
    </motion.button>
  );

  const renderMCQ = (qs: MCQQuestion[], title: string, hint: string, isLast = false) => {
    const q = qs[subIdx];
    const isCorrect = locked && selected === q.answer;
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
    const allDone = tapped.length === LIFECYCLE_ORDER.length;
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
          return <motion.button key={key} onClick={() => handleOrderTap(key)} disabled={done} className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white transition-all" style={{ background: done ? `${color}22` : "rgba(255,255,255,0.06)", border: `2px solid ${done ? color : isWrong ? "#FF2D78" : "rgba(255,255,255,0.1)"}`, opacity: done ? 0.45 : 1 }} animate={isWrong ? { x: [-6, 6, -4, 4, 0] } : {}} transition={{ duration: 0.35 }} whileTap={done ? {} : { scale: 0.97 }}>{t[key]}</motion.button>;
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

export default memo(FishExplorer);
