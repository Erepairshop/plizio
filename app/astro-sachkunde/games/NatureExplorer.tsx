"use client";
// NatureExplorer — Island i3: Seasons & Nature (Jahreszeiten & Natur)
// 5 rounds: Season MCQ, Plants MCQ, Season Order, Nature Sounds MCQ, Quick Review MCQ

import { memo, useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface MCQQuestion {
  emoji: string;
  question: string; // key into LABELS
  choices: string[]; // language-independent keys into LABELS
  answer: string;   // language-independent key
}

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

// ─── Labels (ALL user-visible text here, 4 languages) ─────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Progress
    next: "Next",
    finish: "Finish",
    correct: "Correct! ✓",
    wrong: "Not quite — try again",
    // Round titles & hints
    r1Title: "Which Season?",
    r1Hint: "Look at the clue and pick the right season.",
    r2Title: "Plants & Trees",
    r2Hint: "What happens to trees in this season?",
    r3Title: "Season Order",
    r3Hint: "Tap the four seasons in the correct order.",
    r3InProgress: "Keep going!",
    r3Done: "Perfect order! ✓",
    r4Title: "Nature Sounds",
    r4Hint: "Which animal do you hear in this season?",
    r5Title: "Quick Review",
    r5Hint: "Mixed questions from all rounds.",
    // Season keys
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    winter: "Winter",
    // Season clue descriptions (question keys)
    clue_spring: "🌸 Flowers bloom, birds return, it gets warmer. Which season?",
    clue_summer: "☀️ Hot days, long evenings, children play outside. Which season?",
    clue_autumn: "🍂 Leaves turn red and fall, harvest time begins. Which season?",
    clue_winter: "❄️ Snow falls, days are short, breath is visible. Which season?",
    // Plant/tree event keys
    evt_leaves_fall: "Leaves fall from the trees",
    evt_flowers_bloom: "Flowers bloom on the branches",
    evt_snow_covers: "Snow covers the bare branches",
    evt_fruits_grow: "Fruits ripen and grow",
    // Plant question prompts
    q_autumn_tree: "🍂 What happens to a deciduous tree in autumn?",
    q_spring_tree: "🌸 What happens to trees in spring?",
    q_winter_tree: "❄️ What happens to a tree in winter?",
    // Nature sounds keys
    bird: "Birds singing 🐦",
    cricket: "Crickets chirping 🦗",
    frog: "Frogs croaking 🐸",
    owl: "Owls hooting 🦉",
    // Nature sound question prompts
    q_sound_spring: "🌿 It's spring. Which sound fills the forest at dawn?",
    q_sound_summer: "☀️ It's a warm summer night. What do you hear outside?",
    q_sound_autumn: "🍂 It's autumn evening. Which animal calls from the pond?",
  },
  de: {
    next: "Weiter",
    finish: "Fertig",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz — versuch es nochmal",
    r1Title: "Welche Jahreszeit?",
    r1Hint: "Schau dir den Hinweis an und wähle die richtige Jahreszeit.",
    r2Title: "Pflanzen & Bäume",
    r2Hint: "Was passiert mit den Bäumen in dieser Jahreszeit?",
    r3Title: "Reihenfolge der Jahreszeiten",
    r3Hint: "Tippe die vier Jahreszeiten in der richtigen Reihenfolge.",
    r3InProgress: "Weiter so!",
    r3Done: "Perfekte Reihenfolge! ✓",
    r4Title: "Naturgeräusche",
    r4Hint: "Welches Tier hörst du in dieser Jahreszeit?",
    r5Title: "Schnelle Wiederholung",
    r5Hint: "Gemischte Fragen aus allen Runden.",
    spring: "Frühling",
    summer: "Sommer",
    autumn: "Herbst",
    winter: "Winter",
    clue_spring: "🌸 Blumen blühen, Vögel kehren zurück, es wird wärmer. Welche Jahreszeit?",
    clue_summer: "☀️ Heiße Tage, lange Abende, Kinder spielen draußen. Welche Jahreszeit?",
    clue_autumn: "🍂 Blätter werden rot und fallen, die Ernte beginnt. Welche Jahreszeit?",
    clue_winter: "❄️ Schnee fällt, Tage sind kurz, Atemwolken sind sichtbar. Welche Jahreszeit?",
    evt_leaves_fall: "Blätter fallen von den Bäumen",
    evt_flowers_bloom: "Blüten öffnen sich an den Ästen",
    evt_snow_covers: "Schnee bedeckt die kahlen Äste",
    evt_fruits_grow: "Früchte reifen und wachsen",
    q_autumn_tree: "🍂 Was passiert mit einem Laubbaum im Herbst?",
    q_spring_tree: "🌸 Was passiert mit Bäumen im Frühling?",
    q_winter_tree: "❄️ Was passiert mit einem Baum im Winter?",
    bird: "Vögel singen 🐦",
    cricket: "Grillen zirpen 🦗",
    frog: "Frösche quaken 🐸",
    owl: "Eulen rufen 🦉",
    q_sound_spring: "🌿 Es ist Frühling. Welches Geräusch erfüllt den Wald im Morgengrauen?",
    q_sound_summer: "☀️ Es ist eine warme Sommernacht. Was hörst du draußen?",
    q_sound_autumn: "🍂 Es ist ein Herbstabend. Welches Tier ruft vom Teich?",
  },
  hu: {
    next: "Tovább",
    finish: "Befejezés",
    correct: "Helyes! ✓",
    wrong: "Nem egészen — próbáld újra",
    r1Title: "Melyik évszak?",
    r1Hint: "Nézd meg a tippet, és válaszd ki a helyes évszakot.",
    r2Title: "Növények és fák",
    r2Hint: "Mi történik a fákkal ebben az évszakban?",
    r3Title: "Évszakok sorrendje",
    r3Hint: "Koppints az évszakokra a helyes sorrendben.",
    r3InProgress: "Csak így tovább!",
    r3Done: "Tökéletes sorrend! ✓",
    r4Title: "Természet hangjai",
    r4Hint: "Melyik állatot hallod ebben az évszakban?",
    r5Title: "Gyors összefoglalás",
    r5Hint: "Vegyes kérdések az összes körből.",
    spring: "Tavasz",
    summer: "Nyár",
    autumn: "Ősz",
    winter: "Tél",
    clue_spring: "🌸 Virágok nyílnak, madarak visszatérnek, melegszik az idő. Melyik évszak?",
    clue_summer: "☀️ Forró napok, hosszú esték, gyerekek játszanak kint. Melyik évszak?",
    clue_autumn: "🍂 A levelek elvörösödnek és lehullanak, megkezdődik az aratás. Melyik évszak?",
    clue_winter: "❄️ Hó esik, rövidek a nappalok, látható a lehellet. Melyik évszak?",
    evt_leaves_fall: "Lehullanak a levelek a fákról",
    evt_flowers_bloom: "Virágok nyílnak az ágakon",
    evt_snow_covers: "Hó takarja a csupasz ágakat",
    evt_fruits_grow: "Gyümölcsök érnek és növekednek",
    q_autumn_tree: "🍂 Mi történik egy lombhullató fával ősszel?",
    q_spring_tree: "🌸 Mi történik a fákkal tavasszal?",
    q_winter_tree: "❄️ Mi történik egy fával télen?",
    bird: "Madarak énekelnek 🐦",
    cricket: "Tücskök ciripelnek 🦗",
    frog: "Békák brekegnek 🐸",
    owl: "Baglyok huhognak 🦉",
    q_sound_spring: "🌿 Tavasz van. Melyik hang tölti meg az erdőt hajnalban?",
    q_sound_summer: "☀️ Meleg nyári éjszaka van. Mit hallasz odakint?",
    q_sound_autumn: "🍂 Őszi este van. Melyik állat szól a tóból?",
  },
  ro: {
    next: "Înainte",
    finish: "Gata",
    correct: "Corect! ✓",
    wrong: "Nu chiar — mai încearcă",
    r1Title: "Care anotimp?",
    r1Hint: "Privește indiciul și alege anotimpul corect.",
    r2Title: "Plante și copaci",
    r2Hint: "Ce se întâmplă cu copacii în acest anotimp?",
    r3Title: "Ordinea anotimpurilor",
    r3Hint: "Atinge cele patru anotimpuri în ordinea corectă.",
    r3InProgress: "Continuă!",
    r3Done: "Ordine perfectă! ✓",
    r4Title: "Sunete din natură",
    r4Hint: "Ce animal auzi în acest anotimp?",
    r5Title: "Recapitulare rapidă",
    r5Hint: "Întrebări mixte din toate rundele.",
    spring: "Primăvară",
    summer: "Vară",
    autumn: "Toamnă",
    winter: "Iarnă",
    clue_spring: "🌸 Florile înfloresc, păsările se întorc, se încălzește. Care anotimp?",
    clue_summer: "☀️ Zile calde, seri lungi, copiii se joacă afară. Care anotimp?",
    clue_autumn: "🍂 Frunzele se înroșesc și cad, începe recolta. Care anotimp?",
    clue_winter: "❄️ Ninge, zilele sunt scurte, respirația e vizibilă. Care anotimp?",
    evt_leaves_fall: "Frunzele cad din copaci",
    evt_flowers_bloom: "Florile înfloresc pe crengi",
    evt_snow_covers: "Zăpada acoperă crengile goale",
    evt_fruits_grow: "Fructele se coc și cresc",
    q_autumn_tree: "🍂 Ce se întâmplă cu un copac foios toamna?",
    q_spring_tree: "🌸 Ce se întâmplă cu copacii primăvara?",
    q_winter_tree: "❄️ Ce se întâmplă cu un copac iarna?",
    bird: "Păsări cântând 🐦",
    cricket: "Greieri cântând 🦗",
    frog: "Broaște orăcăind 🐸",
    owl: "Bufnițe strigând 🦉",
    q_sound_spring: "🌿 E primăvară. Ce sunet umple pădurea la răsărit?",
    q_sound_summer: "☀️ E o noapte caldă de vară. Ce auzi afară?",
    q_sound_autumn: "🍂 E o seară de toamnă. Ce animal se aude de la iaz?",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── Question pools ───────────────────────────────────────────────────────────

// Round 1 — Seasons MCQ pool (one per season, shuffle order)
const SEASON_CLUE_POOL: MCQQuestion[] = [
  { emoji: "🌸", question: "clue_spring", choices: shuffle(["spring", "summer", "autumn", "winter"]), answer: "spring" },
  { emoji: "☀️", question: "clue_summer", choices: shuffle(["spring", "summer", "autumn", "winter"]), answer: "summer" },
  { emoji: "🍂", question: "clue_autumn", choices: shuffle(["spring", "summer", "autumn", "winter"]), answer: "autumn" },
  { emoji: "❄️", question: "clue_winter", choices: shuffle(["spring", "summer", "autumn", "winter"]), answer: "winter" },
];

// Round 2 — Plants MCQ pool
const PLANT_POOL: MCQQuestion[] = [
  {
    emoji: "🍂",
    question: "q_autumn_tree",
    choices: shuffle(["evt_leaves_fall", "evt_flowers_bloom", "evt_snow_covers", "evt_fruits_grow"]),
    answer: "evt_leaves_fall",
  },
  {
    emoji: "🌸",
    question: "q_spring_tree",
    choices: shuffle(["evt_flowers_bloom", "evt_leaves_fall", "evt_snow_covers", "evt_fruits_grow"]),
    answer: "evt_flowers_bloom",
  },
  {
    emoji: "❄️",
    question: "q_winter_tree",
    choices: shuffle(["evt_snow_covers", "evt_leaves_fall", "evt_flowers_bloom", "evt_fruits_grow"]),
    answer: "evt_snow_covers",
  },
];

// Round 4 — Nature sounds MCQ pool
const SOUND_POOL: MCQQuestion[] = [
  {
    emoji: "🌿",
    question: "q_sound_spring",
    choices: shuffle(["bird", "cricket", "frog", "owl"]),
    answer: "bird",
  },
  {
    emoji: "☀️",
    question: "q_sound_summer",
    choices: shuffle(["cricket", "bird", "frog", "owl"]),
    answer: "cricket",
  },
  {
    emoji: "🍂",
    question: "q_sound_autumn",
    choices: shuffle(["frog", "bird", "cricket", "owl"]),
    answer: "frog",
  },
];

// Round 5 — Quick review: pick 3 random from r1+r2+r4 pools
function buildReviewPool(): MCQQuestion[] {
  const all: MCQQuestion[] = [
    ...SEASON_CLUE_POOL,
    ...PLANT_POOL,
    ...SOUND_POOL,
  ];
  return shuffle(all).slice(0, 3);
}

// ─── Sub-round state ──────────────────────────────────────────────────────────

const TOTAL_ROUNDS = 5;

// ─── Component ────────────────────────────────────────────────────────────────

function NatureExplorer({ color, lang = "de", onDone, onClose }: Props) {
  const t = LABELS[lang] ?? LABELS.de;

  // Randomized question lists — stable across renders
  const r1Questions = useMemo(() => shuffle(SEASON_CLUE_POOL), []);
  const r2Questions = useMemo(() => shuffle(PLANT_POOL), []);
  const r4Questions = useMemo(() => shuffle(SOUND_POOL), []);
  const r5Questions = useMemo(() => buildReviewPool(), []);

  // Round index (0–4) and sub-question index within rounds that have multiple Qs
  const [round, setRound] = useState(0);
  const [subIdx, setSubIdx] = useState(0);

  // Per-question answer state
  const [selected, setSelected] = useState<string | null>(null); // language-independent key
  const [locked, setLocked] = useState(false);

  // Round 3 (season order) state
  const seasonOrder = useMemo(() => (["spring", "summer", "autumn", "winter"] as const), []);
  const [scrambled] = useState<string[]>(() => shuffle(["spring", "summer", "autumn", "winter"]));
  const [tapped, setTapped] = useState<string[]>([]);
  const [orderWrong, setOrderWrong] = useState<string | null>(null); // key that flashed wrong

  // Scoring
  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  // ── helpers ─────────────────────────────────────────────────────────────────

  const resetSubState = useCallback(() => {
    setSelected(null);
    setLocked(false);
  }, []);

  const advanceRound = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      onDone(scoreRef.current, totalRef.current);
    } else {
      setRound(r => r + 1);
      setSubIdx(0);
      resetSubState();
      setTapped([]);
      setOrderWrong(null);
    }
  }, [round, onDone, resetSubState]);

  const advanceSub = useCallback((questions: MCQQuestion[], isLastRound = false) => {
    if (subIdx < questions.length - 1) {
      setSubIdx(i => i + 1);
      resetSubState();
    } else {
      if (isLastRound) {
        onDone(scoreRef.current, totalRef.current);
      } else {
        advanceRound();
      }
    }
  }, [subIdx, advanceRound, onDone, resetSubState]);

  // Handle MCQ answer tap
  const handleSelect = useCallback((key: string, correctKey: string) => {
    if (locked) return;
    setSelected(key);
    setLocked(true);
    totalRef.current += 1;
    if (key === correctKey) {
      scoreRef.current += 1;
    }
  }, [locked]);

  // Handle season-order tap
  const handleOrderTap = useCallback((key: string) => {
    if (tapped.includes(key)) return;
    const expected = seasonOrder[tapped.length];
    if (key === expected) {
      const next = [...tapped, key];
      setTapped(next);
      setOrderWrong(null);
      if (next.length === 4) {
        // count as 1 question correct
        totalRef.current += 1;
        scoreRef.current += 1;
        setTimeout(() => advanceRound(), 700);
      }
    } else {
      // wrong tap — flash red, count penalty
      setOrderWrong(key);
      totalRef.current += 1;
      // wrong: score not incremented
      setTimeout(() => setOrderWrong(null), 600);
    }
  }, [tapped, seasonOrder, advanceRound]);

  // ── render helpers ───────────────────────────────────────────────────────────

  const renderMCQ = (
    questions: MCQQuestion[],
    roundTitle: string,
    roundHint: string,
    isLastRound = false,
  ) => {
    const q = questions[subIdx];
    const isCorrect = locked && selected === q.answer;
    const subTotal = questions.length;

    return (
      <>
        {/* Sub-progress */}
        {subTotal > 1 && (
          <div className="flex gap-1 justify-center mb-1">
            {Array.from({ length: subTotal }, (_, i) => (
              <div key={i} className="w-2 h-2 rounded-full transition-colors"
                style={{
                  background: i < subIdx ? "#00FF88" : i === subIdx ? color : "rgba(255,255,255,0.15)",
                }} />
            ))}
          </div>
        )}

        <p className="text-xl font-black text-white text-center">{roundTitle}</p>
        <p className="text-white/60 text-xs font-bold text-center px-4">{roundHint}</p>

        {/* Question card */}
        <div className="w-full max-w-xs rounded-2xl px-4 py-4 text-center"
          style={{ background: "rgba(255,255,255,0.06)", border: `1.5px solid ${color}33` }}>
          <p className="text-base font-semibold text-white/90 leading-snug">{t[q.question]}</p>
        </div>

        {/* Choices */}
        <div className="flex flex-col gap-2 w-full max-w-xs">
          {q.choices.map(choiceKey => {
            const isThis = selected === choiceKey;
            const isRight = choiceKey === q.answer;
            let bg = "rgba(255,255,255,0.06)";
            let border = "rgba(255,255,255,0.1)";
            let textColor = "text-white";
            if (locked) {
              if (isRight) { bg = `${color}33`; border = color; }
              else if (isThis && !isRight) { bg = "#FF2D7833"; border = "#FF2D78"; textColor = "text-white/70"; }
            } else if (isThis) {
              bg = `${color}22`; border = color;
            }
            return (
              <motion.button
                key={choiceKey}
                onClick={() => handleSelect(choiceKey, q.answer)}
                disabled={locked}
                className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all ${textColor}`}
                style={{ background: bg, border: `2px solid ${border}` }}
                whileTap={locked ? {} : { scale: 0.97 }}
              >
                {t[choiceKey]}
              </motion.button>
            );
          })}
        </div>

        {/* Feedback */}
        {locked && (
          <motion.p
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-center"
            style={{ color: isCorrect ? "#00FF88" : "#FF2D78" }}
          >
            {isCorrect ? t.correct : t.wrong}
          </motion.p>
        )}

        {/* Next button */}
        {locked && renderNext(() => advanceSub(questions, isLastRound), isLastRound && subIdx === subTotal - 1)}
      </>
    );
  };

  const renderNext = (onNext: () => void, isFinish = false) => (
    <motion.button
      onClick={onNext}
      className="w-full max-w-xs py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
    >
      {isFinish ? t.finish : t.next} <ChevronRight size={16} />
    </motion.button>
  );

  // ── Season order round ────────────────────────────────────────────────────────

  const renderOrderRound = () => {
    const allDone = tapped.length === 4;
    return (
      <>
        <p className="text-xl font-black text-white text-center">{t.r3Title}</p>
        <p className="text-white/60 text-xs font-bold text-center px-4">{t.r3Hint}</p>

        {/* Tapped so far — show as chips */}
        <div className="flex gap-2 flex-wrap justify-center min-h-[2rem]">
          {tapped.map((k, i) => (
            <motion.span
              key={k}
              initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="px-3 py-1 rounded-full text-xs font-black text-white"
              style={{ background: `${color}55`, border: `1.5px solid ${color}` }}
            >
              {i + 1}. {t[k]}
            </motion.span>
          ))}
        </div>

        {/* Status line */}
        <p className="text-xs font-bold text-center"
          style={{ color: allDone ? "#00FF88" : "rgba(255,255,255,0.4)" }}>
          {allDone ? t.r3Done : t.r3InProgress}
        </p>

        {/* Scrambled buttons — NO pre-labeled numbers */}
        <div className="flex flex-col gap-2 w-full max-w-xs">
          {scrambled.map(key => {
            const done = tapped.includes(key);
            const isWrong = orderWrong === key;
            let bg = done ? `${color}22` : "rgba(255,255,255,0.06)";
            let border = done ? color : isWrong ? "#FF2D78" : "rgba(255,255,255,0.1)";
            let opacity = done ? 0.45 : 1;
            return (
              <motion.button
                key={key}
                onClick={() => handleOrderTap(key)}
                disabled={done}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white transition-all"
                style={{ background: bg, border: `2px solid ${border}`, opacity }}
                animate={isWrong ? { x: [-6, 6, -4, 4, 0] } : {}}
                transition={{ duration: 0.35 }}
                whileTap={done ? {} : { scale: 0.97 }}
              >
                {t[key]}
              </motion.button>
            );
          })}
        </div>
      </>
    );
  };

  // ── Main render ───────────────────────────────────────────────────────────────

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
      <div className="flex justify-center gap-1.5 pt-4 pb-2">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{
              background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.15)",
            }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${round}-${subIdx}`}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4"
        >
          {round === 0 && renderMCQ(r1Questions, t.r1Title, t.r1Hint)}
          {round === 1 && renderMCQ(r2Questions, t.r2Title, t.r2Hint)}
          {round === 2 && renderOrderRound()}
          {round === 3 && renderMCQ(r4Questions, t.r4Title, t.r4Hint)}
          {round === 4 && renderMCQ(r5Questions, t.r5Title, t.r5Hint, true)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(NatureExplorer);
