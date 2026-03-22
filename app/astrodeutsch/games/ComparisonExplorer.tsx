"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Steigerung der Adjektive",
    round1: "Drei Stufen der Steigerung",
    round1Title: "Drei Stufen der Steigerung",
    round1Teach: "Adjektive können verglichen werden! Es gibt 3 Formen: Positiv (schnell = einfach), Komparativ (schneller = mehr), Superlativ (am schnellsten = am meisten). Schau dir die Beispiele an!",
    round1Hint: "Tippe einen Kasten an, um die Formen zu sehen",
    round2: "Tiere vergleichen",
    round2Title: "Tiere vergleichen",
    round2Teach: "Tiere sind verschieden groß! Ein Hund ist groß, eine Giraffe ist größer, aber ein Elefant ist am größten. Vergleiche die Tiere mit dem Adjektiv 'groß'.",
    round2Hint: "Tippe jedes Tier an und beobachte die Sätze",
    round3: "Unregelmäßige Formen",
    round3Title: "Unregelmäßige Formen",
    round3Teach: "Manche Adjektive sind besonders! Sie ändern sich nicht normal (z.B. -er). Hier sind 3 Ausnahmen: gut→besser→am besten, viel→mehr→am meisten, gern→lieber→am liebsten.",
    round3Hint: "Tippe ein Adjektiv an, um seine Formen zu sehen",
    round4: "Komparativ wählen",
    round4Title: "Komparativ wählen",
    round4Teach: "Der Komparativ vergleicht zwei Dinge: 'A ist schneller als B'. Wähle die richtige Komparativ-Form für jedes Adjektiv.",
    round4Hint: "Wähle die -ER Form",
    round5: "Superlativ-Quiz!",
    round5Title: "Superlativ-Quiz!",
    round5Teach: "Der Superlativ ist am extremsten: 'C ist am schnellsten von allen'. Das Muster ist: 'am ADJ-STEN'. Teste dein Wissen!",
    round5Hint: "Wähle die 'am...sten' Form",
    gotIt: "Ich verstehe! Weiter →",
    tapReveal: "Tippe um die Form zu sehen",
    next: "Weiter →",
    done: "Fertig! 🌟",
    comparative: "Komparativ",
    superlative: "Superlativ",
    tapAnimal: "Tippe ein Tier zum Hervorheben",
    exception: "Ausnahme!",
    pickComp: "Wähle den Komparativ",
    pickSup: "Wähle den Superlativ",
    positive: "Positiv",
    correct: "Richtig!",
    discovery: "💡 Adjektive haben 3 Formen: Positiv (schnell), Komparativ (schnellER), Superlativ (am schnellSTEN). Einige ändern ihren Vokal: groß → größer → am größten!",
  },
  en: {
    title: "Adjective Comparison",
    round1: "Three steps of comparison",
    round1Title: "Three steps of comparison",
    round1Teach: "Adjectives can be compared! There are 3 forms: Positive (fast = simple), Comparative (faster = more), Superlative (fastest = most). Check out the examples!",
    round1Hint: "Tap a box to see the forms",
    round2: "Comparing animals",
    round2Title: "Comparing animals",
    round2Teach: "Animals have different sizes! A dog is big, a giraffe is bigger, but an elephant is the biggest. Compare the animals using the adjective 'big'.",
    round2Hint: "Tap each animal and watch the sentences",
    round3: "Irregular forms",
    round3Title: "Irregular forms",
    round3Teach: "Some adjectives are special! They don't change normally (no -er). Here are 3 exceptions: good→better→best, much→more→most, gladly→more gladly→most gladly.",
    round3Hint: "Tap an adjective to see its forms",
    round4: "Choose the comparative",
    round4Title: "Choose the comparative",
    round4Teach: "The comparative compares two things: 'A is faster than B'. Pick the right comparative form for each adjective.",
    round4Hint: "Choose the -ER form",
    round5: "Superlative quiz!",
    round5Title: "Superlative quiz!",
    round5Teach: "The superlative is the most extreme: 'C is fastest of all'. The pattern is: 'am ADJ-ST'. Test your knowledge!",
    round5Hint: "Choose the 'am...st' form",
    gotIt: "I got it! Next →",
    tapReveal: "Tap to see the form",
    next: "Next →",
    done: "Done! 🌟",
    comparative: "Comparative",
    superlative: "Superlative",
    tapAnimal: "Tap an animal to highlight",
    exception: "Exception!",
    pickComp: "Choose the comparative",
    pickSup: "Choose the superlative",
    positive: "Positive",
    correct: "Correct!",
    discovery: "💡 Adjectives have 3 forms: Positive (schnell), Comparative (schnellER), Superlative (am schnellSTEN). Some change their vowel: groß → größer → am größten!",
  },
  hu: {
    title: "Melléknevek fokozása",
    round1: "A fokozás három lépése",
    round2: "Állatok összehasonlítása",
    round3: "Rendhagyó formák",
    round4: "Válaszd a középfokot",
    round5: "Felsőfok kvíz!",
    tapReveal: "Koppints a forma megtekintéséhez",
    next: "Tovább →",
    done: "Kész! 🌟",
    comparative: "Középfok",
    superlative: "Felsőfok",
    tapAnimal: "Koppints egy állatra a kiemeléshez",
    exception: "Kivétel!",
    pickComp: "Válaszd a középfokot",
    pickSup: "Válaszd a felsőfokot",
    positive: "Alapfok",
    correct: "Helyes!",
    discovery: "💡 A mellékneveknek 3 formája van: Alapfok (schnell), Középfok (schnellER), Felsőfok (am schnellSTEN). Egyesek megváltoztatják a magánhangzójukat: groß → größer → am größten!",
  },
  ro: {
    title: "Comparația adjectivelor",
    round1: "Trei trepte de comparație",
    round2: "Compararea animalelor",
    round3: "Forme neregulate",
    round4: "Alege comparativul",
    round5: "Quiz superlativ!",
    tapReveal: "Apasă pentru a vedea forma",
    next: "Mai departe →",
    done: "Gata! 🌟",
    comparative: "Comparativ",
    superlative: "Superlativ",
    tapAnimal: "Apasă un animal pentru evidențiere",
    exception: "Excepție!",
    pickComp: "Alege comparativul",
    pickSup: "Alege superlativul",
    positive: "Pozitiv",
    correct: "Corect!",
    discovery: "💡 Adjectivele au 3 forme: Pozitiv (schnell), Comparativ (schnellER), Superlativ (am schnellSTEN). Unele îșimodifică vocalele: groß → größer → am größten!",
  },
};

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="w-full flex items-center gap-2 px-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="h-2 flex-1 rounded-full transition-all duration-500"
          style={{ background: i < current ? color : "rgba(255,255,255,0.15)" }} />
      ))}
    </div>
  );
}

const SCALE_ITEMS = [
  { base: "schnell", comp: "schneller", sup: "am schnellsten" },
  { base: "groß", comp: "größer", sup: "am größten" },
  { base: "alt", comp: "älter", sup: "am ältesten" },
];

function Round1({ color, lbl, onNext, showTeach = false }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach?: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const [teach, setTeach] = useState(showTeach);

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round1Teach}</p>
        </div>
        <motion.button onClick={() => setTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round1}</div>
      <div className="flex gap-1.5 text-xs font-bold text-white/50 w-full px-2 justify-center">
        <span className="flex-1 text-center">{lbl.positive}</span>
        <span className="flex-1 text-center">{lbl.comparative}</span>
        <span className="flex-1 text-center">{lbl.superlative}</span>
      </div>
      <div className="w-full flex flex-col gap-2 px-1">
        {SCALE_ITEMS.map((item, i) => (
          <motion.button key={item.base}
            className="w-full flex items-stretch rounded-2xl border-2 overflow-hidden"
            style={{
              borderColor: active === i ? color : "rgba(255,255,255,0.12)",
              background: active === i ? `${color}14` : "rgba(255,255,255,0.03)",
            }}
            whileTap={{ scale: 0.97 }} onClick={() => setActive(i === active ? null : i)}>
            <div className="flex-1 flex items-center justify-center py-2.5 text-sm font-bold text-white/80"
              style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>{item.base}</div>
            <div className="flex-1 flex items-center justify-center py-2.5 text-sm font-bold"
              style={{
                color: active === i ? color : "rgba(255,255,255,0.6)",
                borderRight: "1px solid rgba(255,255,255,0.08)",
              }}>{item.comp}</div>
            <div className="flex-1 flex items-center justify-center py-2.5 text-xs font-black"
              style={{ color: active === i ? color : "rgba(255,255,255,0.5)" }}>{item.sup}</div>
          </motion.button>
        ))}
      </div>
      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
        style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
    </div>
  );
}

const ANIMALS = [
  { name: "Hund", emoji: "🐕", size: 1, form: "groß" },
  { name: "Giraffe", emoji: "🦒", size: 2, form: "größer" },
  { name: "Elefant", emoji: "🐘", size: 3, form: "am größten" },
];

function Round2({ color, lbl, lang, onNext, showTeach = false }: { color: string; lbl: Record<string, string>; lang?: string; onNext: () => void; showTeach?: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const [teach, setTeach] = useState(showTeach);

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round2Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round2Teach}</p>
        </div>
        <motion.button onClick={() => setTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  const sentenceTexts = [
    `Der ${ANIMALS[0].name} ist ${ANIMALS[0].form}.`,
    `Die ${ANIMALS[1].name} ist ${ANIMALS[1].form}.`,
    `Der ${ANIMALS[2].name} ist ${ANIMALS[2].form}.`,
  ];

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round2}</div>
      <p className="text-xs text-white/60 text-center">{lbl.tapAnimal}</p>
      <div className="flex gap-3 justify-center w-full px-1">
        {ANIMALS.map((a, i) => (
          <motion.button key={a.name}
            className="flex-1 flex flex-col items-center gap-1 p-3 rounded-2xl border-2"
            style={{
              borderColor: active === i ? color : "rgba(255,255,255,0.12)",
              background: active === i ? `${color}22` : "rgba(255,255,255,0.04)",
            }}
            whileTap={{ scale: 0.95 }} onClick={() => setActive(i === active ? null : i)}>
            <span style={{ fontSize: `${1 + a.size * 0.5}rem` }}>{a.emoji}</span>
            <span className="text-xs font-bold text-white/80">{a.name}</span>
            <span className="text-xs font-black" style={{ color: active === i ? color : "rgba(255,255,255,0.5)" }}>
              {a.form}
            </span>
          </motion.button>
        ))}
      </div>
      {active !== null && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="relative px-4 py-2 rounded-xl border text-sm font-semibold text-white/85 text-center"
          style={{ borderColor: `${color}44`, background: `${color}18` }}>
          <div className="absolute top-1 right-2">
            <SpeakButton text={sentenceTexts[active]} lang={"de"} size={14} />
          </div>
          {active === 0 && `Der ${ANIMALS[0].name} ist ${ANIMALS[0].form}.`}
          {active === 1 && `Die ${ANIMALS[1].name} ist ${ANIMALS[1].form}.`}
          {active === 2 && `Der ${ANIMALS[2].name} ist ${ANIMALS[2].form}.`}
        </motion.div>
      )}
      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
        style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
    </div>
  );
}

const EXCEPTIONS = [
  { base: "gut", comp: "besser", sup: "am besten" },
  { base: "viel", comp: "mehr", sup: "am meisten" },
  { base: "gern", comp: "lieber", sup: "am liebsten" },
];

function Round3({ color, lbl, onNext, showTeach = false }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach?: boolean }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [teach, setTeach] = useState(showTeach);

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round3Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round3Teach}</p>
        </div>
        <motion.button onClick={() => setTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  const tap = (i: number) => setRevealed(prev => { const n = new Set(prev); n.add(i); return n; });
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round3}</div>
      <div className="px-3 py-1.5 rounded-lg text-xs font-bold text-center"
        style={{ background: "#f59e0b22", color: "#f59e0b" }}>⚠️ {lbl.exception}</div>
      <p className="text-xs text-white/60 text-center">{lbl.tapReveal}</p>
      <div className="w-full flex flex-col gap-2 px-1">
        {EXCEPTIONS.map((e, i) => (
          <motion.button key={e.base}
            className="w-full p-3 rounded-2xl border-2 text-left"
            style={{
              borderColor: revealed.has(i) ? color : "rgba(255,255,255,0.15)",
              background: revealed.has(i) ? `${color}18` : "rgba(255,255,255,0.04)",
            }}
            whileTap={{ scale: 0.97 }} onClick={() => tap(i)}>
            <div className="flex items-center gap-3">
              <span className="text-white/80 font-bold text-base flex-1">{e.base}</span>
              {revealed.has(i) ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2 items-center">
                  <span className="font-black" style={{ color }}>→ {e.comp}</span>
                  <span className="text-xs text-white/60">/ {e.sup}</span>
                </motion.div>
              ) : (
                <span className="text-white/30 text-xs">{lbl.tapReveal}</span>
              )}
            </div>
          </motion.button>
        ))}
      </div>
      {revealed.size === EXCEPTIONS.length && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const COMP_QUIZ_POOL = [
  { word: "alt", options: ["älter", "alter", "am ältesten"], correct: 0 },
  { word: "groß", options: ["großer", "größer", "am großen"], correct: 1 },
  { word: "schnell", options: ["schneller", "am schnellsten", "schnell"], correct: 0 },
  { word: "gut", options: ["guter", "besser", "am besten"], correct: 1 },
  { word: "klein", options: ["kleiner", "kleinier", "am kleinsten"], correct: 0 },
  { word: "heiß", options: ["heißer", "am heißesten", "am heißsten"], correct: 0 },
];

// Helper: shuffle array
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function Round4({ color, lbl, wrongCountRef, onNext, showTeach = false }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onNext: () => void; showTeach?: boolean }) {
  const [teach, setTeach] = useState(showTeach);

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round4Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round4Teach}</p>
        </div>
        <motion.button onClick={() => setTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  const [quiz] = useState(() => shuffle(COMP_QUIZ_POOL).slice(0, 4));
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = quiz[qi];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i !== q.correct) {
      wrongCountRef.current++;
    }
  };
  const handleNext = () => {
    if (qi + 1 >= quiz.length) onNext();
    else { setQi(qi + 1); setSelected(null); setRevealed(false); }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round4}</div>
      <p className="text-xs text-white/60 text-center">{lbl.pickComp}</p>
      <div className="text-2xl font-black text-white">
        {q.word} → <span style={{ color }}>?</span>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)", textColor = "white";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; textColor = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; textColor = "#ef4444"; }
          } else if (selected === i) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={opt}
              className="px-4 py-2.5 rounded-xl font-bold text-sm border-2"
              style={{ background: bg, borderColor: border, color: textColor }}
              whileTap={!revealed ? { scale: 0.92 } : {}} onClick={() => handleSelect(i)}>
              {opt}
              {revealed && i === q.correct && " ✅"}
              {revealed && selected === i && i !== q.correct && " ❌"}
            </motion.button>
          );
        })}
      </div>
      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={handleNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const SUP_QUIZ_POOL = [
  { word: "kalt", options: ["am kältesten", "am kaltsten", "kälter"], correct: 0 },
  { word: "viel", options: ["am meiststen", "am meisten", "mehr"], correct: 1 },
  { word: "jung", options: ["jünger", "am jüngsten", "am jungsten"], correct: 1 },
  { word: "schön", options: ["schöner", "am schönsten", "am schönnsten"], correct: 1 },
  { word: "früh", options: ["früher", "am frühesten", "am frühsten"], correct: 1 },
];

function Round5({ color, lbl, wrongCountRef, onDone, showTeach = false }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void; showTeach?: boolean }) {
  const [teach, setTeach] = useState(showTeach);

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round5Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round5Teach}</p>
        </div>
        <motion.button onClick={() => setTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  const [quiz] = useState(() => shuffle(SUP_QUIZ_POOL).slice(0, 3));
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = quiz[qi];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i !== q.correct) {
      wrongCountRef.current++;
    }
  };
  const handleNext = () => {
    if (qi + 1 >= quiz.length) onDone();
    else { setQi(qi + 1); setSelected(null); setRevealed(false); }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round5}</div>
      <p className="text-xs text-white/60 text-center">{lbl.pickSup}</p>
      <div className="text-2xl font-black text-white">
        {q.word} → <span style={{ color }}>am ...?</span>
      </div>
      <div className="flex flex-col gap-2 w-full px-4">
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)", textColor = "white";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; textColor = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; textColor = "#ef4444"; }
          } else if (selected === i) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={opt}
              className="py-3 rounded-xl font-bold text-base border-2"
              style={{ background: bg, borderColor: border, color: textColor }}
              whileTap={!revealed ? { scale: 0.96 } : {}} onClick={() => handleSelect(i)}>
              {opt}
              {revealed && i === q.correct && " ✅"}
              {revealed && selected === i && i !== q.correct && " ❌"}
            </motion.button>
          );
        })}
      </div>
      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={handleNext}>
          {qi + 1 >= SUP_QUIZ_POOL.length ? lbl.done : lbl.next}
        </motion.button>
      )}
    </div>
  );
}

const ComparisonExplorer = memo(function ComparisonExplorer({
  color, lang = "de", onDone,
}: { color: string; lang?: string; onDone: (score: number, total: number) => void }) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const [showTeach, setShowTeach] = useState(true);
  const TOTAL_ROUNDS = 5;

  // Add gotIt label for teaching phase
  const teachLabels = { ...LABELS.de, ...LABELS[lang], gotIt: LABELS[lang]?.gotIt || "I got it! Next →" };

  // Error tracking
  const wrongCountRef = useRef(0);

  const next = useCallback(() => { setRound(r => r + 1); setShowTeach(true); }, []);
  const finish = useCallback(() => {
    const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongCountRef.current, TOTAL_ROUNDS - 1));
    onDone(score, TOTAL_ROUNDS);
  }, [onDone]);
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 px-1">
      <ProgressBar current={round} total={TOTAL_ROUNDS} color={color} />
      <AnimatePresence mode="wait">
        <motion.div key={round} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} showTeach={showTeach} />}
          {round === 1 && <Round2 color={color} lbl={lbl} lang={lang} onNext={next} showTeach={showTeach} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} showTeach={showTeach} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} showTeach={showTeach} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});
export default ComparisonExplorer;
