"use client";
// MammalExplorer — Island i3: Mammals (Säugetiere)
// 5 rounds: What makes a mammal? MCQ, Diet type MCQ, Vertebrate class order, Mammal or not? MCQ, Quick review

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
    r1Title: "What Makes a Mammal?", r1Hint: "Choose the feature that best describes mammals.",
    r2Title: "What Do They Eat?", r2Hint: "Identify the feeding type of the animal.",
    r3Title: "Vertebrate Classes", r3Hint: "Tap the five vertebrate classes from simplest to most complex.",
    r3InProgress: "Keep going!", r3Done: "Correct order! ✓",
    r4Title: "Mammal or Not?", r4Hint: "Is this animal a mammal?",
    r5Title: "Quick Review", r5Hint: "Mixed questions from all rounds.",
    warm_blooded: "Warm-blooded 🌡️", live_birth: "Give birth to live young 🐣",
    nurse_young: "Feed young with milk 🍼", fur_hair: "Have fur or hair 🦁",
    q_mammal_feat1: "🦁 Which feature do ALL mammals have that reptiles don't?",
    q_mammal_feat2: "🍼 How do most mammal mothers feed their young?",
    q_mammal_feat3: "🌡️ Unlike reptiles, how do mammals maintain their body temperature?",
    herbivore: "Herbivore (plants only) 🌿",
    carnivore: "Carnivore (meat only) 🥩",
    omnivore: "Omnivore (plants & meat) 🥗",
    q_diet_rabbit: "🐰 A rabbit eats only grass, leaves and vegetables. What type of diet?",
    q_diet_lion: "🦁 A lion hunts and eats only other animals. What type of diet?",
    q_diet_bear: "🐻 A bear eats both berries and fish. What type of diet?",
    // Vertebrate order
    fish_cls: "Fish 🐟", amphibian_cls: "Amphibian 🐸", reptile_cls: "Reptile 🦎", bird_cls: "Bird 🐦", mammal_cls: "Mammal 🐾",
    // Mammal or not
    yes_mammal: "Yes, mammal ✓", no_mammal: "No, not a mammal ✗",
    q_whale: "🐳 A whale breathes air, is warm-blooded, nurses young with milk. Mammal?",
    q_bat: "🦇 A bat has fur, gives birth to live young, feeds young with milk. Mammal?",
    q_shark: "🦈 A shark lives in water, has gills, is cold-blooded, has scales. Mammal?",
    q_platypus: "🦆 A platypus has fur, is warm-blooded, but lays eggs. Mammal?",
  },
  de: {
    next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz — versuch es nochmal",
    r1Title: "Was macht ein Säugetier aus?", r1Hint: "Wähle das Merkmal, das Säugetiere am besten beschreibt.",
    r2Title: "Was fressen sie?", r2Hint: "Bestimme die Ernährungsweise des Tieres.",
    r3Title: "Wirbeltierklas­sen", r3Hint: "Tippe die fünf Wirbeltierklas­sen von einfach bis komplex.",
    r3InProgress: "Weiter so!", r3Done: "Richtige Reihenfolge! ✓",
    r4Title: "Säugetier oder nicht?", r4Hint: "Ist dieses Tier ein Säugetier?",
    r5Title: "Schnelle Wiederholung", r5Hint: "Gemischte Fragen aus allen Runden.",
    warm_blooded: "Warmblütig 🌡️", live_birth: "Lebend gebären 🐣",
    nurse_young: "Junge mit Milch säugen 🍼", fur_hair: "Fell oder Haare haben 🦁",
    q_mammal_feat1: "🦁 Welches Merkmal haben ALLE Säugetiere, das Reptilien nicht haben?",
    q_mammal_feat2: "🍼 Wie ernähren die meisten Säugetiermütter ihre Jungen?",
    q_mammal_feat3: "🌡️ Im Gegensatz zu Reptilien: Wie regulieren Säugetiere ihre Körpertemperatur?",
    herbivore: "Pflanzenfresser (nur Pflanzen) 🌿",
    carnivore: "Fleischfresser (nur Fleisch) 🥩",
    omnivore: "Allesfresser (Pflanzen & Fleisch) 🥗",
    q_diet_rabbit: "🐰 Ein Hase frisst nur Gras, Blätter und Gemüse. Welche Ernährungsweise?",
    q_diet_lion: "🦁 Ein Löwe jagt und frisst nur andere Tiere. Welche Ernährungsweise?",
    q_diet_bear: "🐻 Ein Bär frisst sowohl Beeren als auch Fische. Welche Ernährungsweise?",
    fish_cls: "Fisch 🐟", amphibian_cls: "Amphibie 🐸", reptile_cls: "Reptil 🦎", bird_cls: "Vogel 🐦", mammal_cls: "Säugetier 🐾",
    yes_mammal: "Ja, Säugetier ✓", no_mammal: "Nein, kein Säugetier ✗",
    q_whale: "🐳 Ein Wal atmet Luft, ist warmblütig, säugt Junge mit Milch. Säugetier?",
    q_bat: "🦇 Eine Fledermaus hat Fell, bringt lebende Junge zur Welt, säugt sie. Säugetier?",
    q_shark: "🦈 Ein Hai lebt im Wasser, hat Kiemen, ist kaltblütig und hat Schuppen. Säugetier?",
    q_platypus: "🦆 Ein Schnabeltier hat Fell, ist warmblütig, legt aber Eier. Säugetier?",
  },
  hu: {
    next: "Tovább", finish: "Befejezés", correct: "Helyes! ✓", wrong: "Nem egészen — próbáld újra",
    r1Title: "Mi tesz valakit emlőssé?", r1Hint: "Válaszd ki azt a jellemzőt, amely legjobban leírja az emlősöket.",
    r2Title: "Mit esznek?", r2Hint: "Határozd meg az állat táplálkozásmódját.",
    r3Title: "Gerincesek osztályai", r3Hint: "Koppints az öt gerinces osztályra az egyszerűbbtől az összetettebbig.",
    r3InProgress: "Csak így tovább!", r3Done: "Helyes sorrend! ✓",
    r4Title: "Emlős vagy nem?", r4Hint: "Ez az állat emlős?",
    r5Title: "Gyors összefoglalás", r5Hint: "Vegyes kérdések az összes körből.",
    warm_blooded: "Melegvérű 🌡️", live_birth: "Elevenszülés 🐣",
    nurse_young: "Tejjel táplálja a kicsinyeit 🍼", fur_hair: "Szőre vagy haja van 🦁",
    q_mammal_feat1: "🦁 Melyik jellemző van meg MINDEN emlősnél, de a hüllőknek nincs?",
    q_mammal_feat2: "🍼 Hogyan táplálják az emlős anyák kicsinyeiket?",
    q_mammal_feat3: "🌡️ A hüllőkkel ellentétben hogyan tartják fent testhőmérsékletüket az emlősök?",
    herbivore: "Növényevő (csak növény) 🌿",
    carnivore: "Húsevő (csak hús) 🥩",
    omnivore: "Mindent evő (növény és hús) 🥗",
    q_diet_rabbit: "🐰 A nyúl csak füvet, leveleket és zöldségeket eszik. Milyen táplálkozás?",
    q_diet_lion: "🦁 Az oroszlán vadászik és csak más állatokat eszik. Milyen táplálkozás?",
    q_diet_bear: "🐻 A medve bogyót és halat is eszik. Milyen táplálkozás?",
    fish_cls: "Hal 🐟", amphibian_cls: "Kétéltű 🐸", reptile_cls: "Hüllő 🦎", bird_cls: "Madár 🐦", mammal_cls: "Emlős 🐾",
    yes_mammal: "Igen, emlős ✓", no_mammal: "Nem, nem emlős ✗",
    q_whale: "🐳 A bálna levegőt lélegzik, melegvérű, tejjel táplálja kicsinyeit. Emlős?",
    q_bat: "🦇 A denevérnek szőre van, elevenen szüli kicsinyeit, tejjel táplálja. Emlős?",
    q_shark: "🦈 A cápa vízben él, kopoltyúja van, hidegvérű és pikkelyes. Emlős?",
    q_platypus: "🦆 A kacsacsőrű emlős szőrös, melegvérű, de tojást rak. Emlős?",
  },
  ro: {
    next: "Înainte", finish: "Gata", correct: "Corect! ✓", wrong: "Nu chiar — mai încearcă",
    r1Title: "Ce face un mamifer?", r1Hint: "Alege caracteristica ce descrie cel mai bine mamiferele.",
    r2Title: "Ce mănâncă?", r2Hint: "Identifică tipul de alimentație al animalului.",
    r3Title: "Clasele vertebratelor", r3Hint: "Atinge cele cinci clase de vertebrate de la simplu la complex.",
    r3InProgress: "Continuă!", r3Done: "Ordine corectă! ✓",
    r4Title: "Mamifer sau nu?", r4Hint: "Este acest animal un mamifer?",
    r5Title: "Recapitulare rapidă", r5Hint: "Întrebări mixte din toate rundele.",
    warm_blooded: "Cu sânge cald 🌡️", live_birth: "Nasc pui vii 🐣",
    nurse_young: "Alăptează puii 🍼", fur_hair: "Au blană sau păr 🦁",
    q_mammal_feat1: "🦁 Ce caracteristică au TOATE mamiferele, dar reptilele nu?",
    q_mammal_feat2: "🍼 Cum hrănesc mamele mamifere puii lor?",
    q_mammal_feat3: "🌡️ Spre deosebire de reptile, cum își mențin mamiferele temperatura?",
    herbivore: "Erbivor (doar plante) 🌿",
    carnivore: "Carnivor (doar carne) 🥩",
    omnivore: "Omnivor (plante și carne) 🥗",
    q_diet_rabbit: "🐰 Un iepure mănâncă doar iarbă, frunze și legume. Ce tip de alimentație?",
    q_diet_lion: "🦁 Un leu vânează și mănâncă doar alte animale. Ce tip de alimentație?",
    q_diet_bear: "🐻 Un urs mănâncă atât fructe de pădure cât și pești. Ce tip?",
    fish_cls: "Pește 🐟", amphibian_cls: "Amfibian 🐸", reptile_cls: "Reptilă 🦎", bird_cls: "Pasăre 🐦", mammal_cls: "Mamifer 🐾",
    yes_mammal: "Da, mamifer ✓", no_mammal: "Nu, nu e mamifer ✗",
    q_whale: "🐳 O balenă respiră aer, are sânge cald, alăptează puii. Mamifer?",
    q_bat: "🦇 Un liliac are blană, naște pui vii, îi alăptează. Mamifer?",
    q_shark: "🦈 Un rechin trăiește în apă, are branhii, sânge rece și solzi. Mamifer?",
    q_platypus: "🦆 Un ornitorinc are blană, sânge cald, dar depune ouă. Mamifer?",
  },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a;
}

const FEAT_POOL: MCQQuestion[] = [
  { emoji: "🦁", question: "q_mammal_feat1", choices: shuffle(["nurse_young", "warm_blooded", "live_birth", "fur_hair"]), answer: "fur_hair" },
  { emoji: "🍼", question: "q_mammal_feat2", choices: shuffle(["nurse_young", "live_birth", "warm_blooded", "fur_hair"]), answer: "nurse_young" },
  { emoji: "🌡️", question: "q_mammal_feat3", choices: shuffle(["warm_blooded", "fur_hair", "nurse_young", "live_birth"]), answer: "warm_blooded" },
];

const DIET_POOL: MCQQuestion[] = [
  { emoji: "🐰", question: "q_diet_rabbit", choices: shuffle(["herbivore", "carnivore", "omnivore"]), answer: "herbivore" },
  { emoji: "🦁", question: "q_diet_lion", choices: shuffle(["carnivore", "herbivore", "omnivore"]), answer: "carnivore" },
  { emoji: "🐻", question: "q_diet_bear", choices: shuffle(["omnivore", "herbivore", "carnivore"]), answer: "omnivore" },
];

const MAMMAL_POOL: MCQQuestion[] = [
  { emoji: "🐳", question: "q_whale", choices: shuffle(["yes_mammal", "no_mammal"]), answer: "yes_mammal" },
  { emoji: "🦇", question: "q_bat", choices: shuffle(["yes_mammal", "no_mammal"]), answer: "yes_mammal" },
  { emoji: "🦈", question: "q_shark", choices: shuffle(["no_mammal", "yes_mammal"]), answer: "no_mammal" },
  { emoji: "🦆", question: "q_platypus", choices: shuffle(["yes_mammal", "no_mammal"]), answer: "yes_mammal" },
];

const VERT_ORDER = ["fish_cls", "amphibian_cls", "reptile_cls", "bird_cls", "mammal_cls"] as const;
const TOTAL_ROUNDS = 5;

function MammalExplorer({ color, lang = "de", onDone }: Props) {
  const t = LABELS[lang] ?? LABELS.de;
  const r1Qs = useMemo(() => shuffle(FEAT_POOL), []);
  const r2Qs = useMemo(() => shuffle(DIET_POOL), []);
  const r4Qs = useMemo(() => shuffle(MAMMAL_POOL), []);
  const r5Qs = useMemo(() => shuffle([...FEAT_POOL, ...DIET_POOL, ...MAMMAL_POOL]).slice(0, 3), []);
  const [scrambled] = useState(() => shuffle([...VERT_ORDER]));

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
    const expected = VERT_ORDER[tapped.length];
    if (key === expected) {
      const next = [...tapped, key]; setTapped(next); setOrderWrong(null);
      if (next.length === VERT_ORDER.length) { totalRef.current += 1; scoreRef.current += 1; setTimeout(() => advanceRound(), 700); }
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
    const allDone = tapped.length === VERT_ORDER.length;
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

export default memo(MammalExplorer);
