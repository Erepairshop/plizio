"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TreeBranch from "@/app/astrodeutsch/games/blocks/TreeBranch";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Plural & Wortfamilien",
    round1: "5 Wege zum Plural!",
    round2: "Welche Pluralendung?",
    round3: "Die Wortfamilie von 'fahren'",
    round4: "Wähle die richtige Endung!",
    round5: "Plural-Quiz!",
    tapReveal: "Tippe um den Plural zu sehen",
    next: "Weiter →",
    done: "Fertig! 🌟",
    plural: "Mehrzahl",
    tapWord: "Tippe ein Wort, dann einen Eimer",
    checkLabel: "Prüfen ✓",
    discovery: "💡 Deutsche Pluralformen folgen Mustern: -e (Tisch→Tische), -er (Kind→Kinder), -n/-en (Blume→Blumen), -s (Auto→Autos), oder Umlaut (Apfel→Äpfel)!",
  },
  en: {
    title: "Plural & Word Families",
    round1: "5 ways to plural!",
    round2: "Which plural ending?",
    round3: "The word family of 'fahren'",
    round4: "Choose the right ending!",
    round5: "Plural quiz!",
    tapReveal: "Tap to see the plural",
    next: "Next →",
    done: "Done! 🌟",
    plural: "Plural",
    tapWord: "Tap a word, then a bucket",
    checkLabel: "Check ✓",
    discovery: "💡 German plural forms follow patterns: -e (Tisch→Tische), -er (Kind→Kinder), -n/-en (Blume→Blumen), -s (Auto→Autos), or umlaut (Apfel→Äpfel)!",
  },
  hu: {
    title: "Többes szám & szócsaládok",
    round1: "5 módszer a többes számhoz!",
    round2: "Melyik többes szám végzés?",
    round3: "A 'fahren' szócsalád",
    round4: "Válaszd a helyes végzést!",
    round5: "Többes szám kvíz!",
    tapReveal: "Koppints a többes szám megtekintéséhez",
    next: "Tovább →",
    done: "Kész! 🌟",
    plural: "Többes szám",
    tapWord: "Koppints egy szóra, majd egy vödörre",
    checkLabel: "Ellenőrzés ✓",
    discovery: "💡 A német többes szám formák mintákat követnek: -e (Tisch→Tische), -er (Kind→Kinder), -n/-en (Blume→Blumen), -s (Auto→Autos), vagy umlaut (Apfel→Äpfel)!",
  },
  ro: {
    title: "Plural & familii de cuvinte",
    round1: "5 moduri de plural!",
    round2: "Ce terminație de plural?",
    round3: "Familia cuvântului 'fahren'",
    round4: "Alege terminația corectă!",
    round5: "Quiz plural!",
    tapReveal: "Apasă pentru a vedea pluralul",
    next: "Mai departe →",
    done: "Gata! 🌟",
    plural: "Plural",
    tapWord: "Apasă un cuvânt, apoi o găleată",
    checkLabel: "Verifică ✓",
    discovery: "💡 Formele de plural germane urmează modele: -e (Tisch→Tische), -er (Kind→Kinder), -n/-en (Blume→Blumen), -s (Auto→Autos), sau umlaut (Apfel→Äpfel)!",
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

const PLURAL_RULES = [
  { rule: "-e", singular: "Hund", plural: "Hunde", accent: "#3b82f6" },
  { rule: "-en", singular: "Frau", plural: "Frauen", accent: "#10b981" },
  { rule: "-er", singular: "Buch", plural: "Bücher", accent: "#f59e0b" },
  { rule: "-s", singular: "Auto", plural: "Autos", accent: "#8b5cf6" },
  { rule: "Umlaut", singular: "Mutter", plural: "Mütter", accent: "#ef4444" },
];

function Round1({ color, lbl, onNext, lang }: { color: string; lbl: Record<string, string>; onNext: () => void; lang: string }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const tap = (i: number) => setRevealed(prev => { const n = new Set(prev); n.add(i); return n; });
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round1}</div>
      <div className="w-full flex flex-col gap-2 px-1">
        {PLURAL_RULES.map((r, i) => (
          <motion.button key={r.rule}
            className="w-full flex items-center gap-3 p-3 rounded-2xl border-2 text-left transition-all"
            style={{
              borderColor: revealed.has(i) ? r.accent : "rgba(255,255,255,0.15)",
              background: revealed.has(i) ? `${r.accent}18` : "rgba(255,255,255,0.04)",
            }}
            whileTap={{ scale: 0.97 }} onClick={() => tap(i)}>
            <span className="text-sm font-black w-14 text-center rounded-lg py-1 shrink-0"
              style={{ background: r.accent, color: "#fff" }}>{r.rule}</span>
            <span className="text-white/80 text-sm flex-1">{r.singular}</span>
            {revealed.has(i)
              ? <motion.div initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 shrink-0">
                  <span className="text-sm font-bold" style={{ color: r.accent }}>→ {r.plural}</span>
                  <SpeakButton text={r.plural} lang={"de"} size={16} />
                </motion.div>
              : <span className="text-white/30 text-xs shrink-0">{lbl.tapReveal}</span>}
          </motion.button>
        ))}
      </div>
      {revealed.size === PLURAL_RULES.length && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const SORT_WORDS = [
  { word: "Tisch", correct: "e_en" },
  { word: "Lehrerin", correct: "e_en" },
  { word: "Glas", correct: "er_s" },
  { word: "Radio", correct: "er_s" },
  { word: "Vater", correct: "umlaut" },
  { word: "Nacht", correct: "umlaut" },
];
const SORT_BUCKETS = [
  { key: "e_en", label: "-e / -en", icon: "📝" },
  { key: "er_s", label: "-er / -s", icon: "📚" },
  { key: "umlaut", label: "Umlaut", icon: "🔵" },
];

function Round2({
  color,
  lbl,
  wrongCountRef,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
}) {
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const unplaced = SORT_WORDS.filter(w => !placed[w.word]);
  const allPlaced = unplaced.length === 0;

  const handleWordTap = (word: string) => setSelected(s => s === word ? null : word);
  const handleBucketTap = (bucket: string) => {
    if (!selected) return;
    const isCorrect = SORT_WORDS.find(w => w.word === selected)?.correct === bucket;
    if (!isCorrect) {
      wrongCountRef.current++;
    }
    setPlaced(p => ({ ...p, [selected]: bucket }));
    setSelected(null);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round2}</div>
      <p className="text-xs text-white/60 text-center">{lbl.tapWord}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {unplaced.map(({ word }) => (
          <motion.button key={word}
            className="px-3 py-1.5 rounded-xl text-sm font-bold border-2"
            style={{
              background: selected === word ? color : "rgba(255,255,255,0.08)",
              borderColor: selected === word ? color : "rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.9)",
            }}
            whileTap={{ scale: 0.92 }} onClick={() => handleWordTap(word)}>{word}</motion.button>
        ))}
        {allPlaced && <span className="text-xs text-white/50 italic">✓</span>}
      </div>
      <div className="grid grid-cols-3 gap-2 w-full px-1">
        {SORT_BUCKETS.map(b => {
          const here = Object.entries(placed).filter(([, v]) => v === b.key).map(([k]) => k);
          return (
            <motion.div key={b.key}
              className="rounded-2xl p-2 border-2 min-h-16 cursor-pointer"
              style={{ borderColor: selected ? color : "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}
              whileTap={{ scale: 0.97 }} onClick={() => handleBucketTap(b.key)}>
              <div className="text-center text-xs font-bold text-white/70 mb-1">{b.icon} {b.label}</div>
              <div className="flex flex-col gap-1">
                {here.map(w => {
                  const isCorrect = SORT_WORDS.find(sw => sw.word === w)?.correct === b.key;
                  return (
                    <span key={w} className="px-1.5 py-0.5 rounded text-xs font-semibold text-center"
                      style={{ background: isCorrect ? `${color}33` : "#ef444433", color: "#fff" }}>
                      {w} {isCorrect ? "✓" : "✗"}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
      {allPlaced && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round3}</div>
      <TreeBranch
        root="fahr-"
        color={color}
        children={[
          { word: "fahren", emoji: "🚗" },
          { word: "Fahrt", emoji: "🛣️" },
          { word: "Fahrer", emoji: "👤" },
          { word: "Fahrrad", emoji: "🚲" },
          { word: "abfahren", emoji: "🏁" },
        ]}
        nextLabel={lbl.next}
        onDone={onNext}
      />
    </div>
  );
}

const ENDING_QUIZ = [
  { word: "Hund", options: ["-e", "-en", "-er"], correct: 0 },
  { word: "Kind", options: ["-er", "-e", "-s"], correct: 0 },
  { word: "Blume", options: ["-s", "-n", "-er"], correct: 1 },
  { word: "Auto", options: ["-en", "-er", "-s"], correct: 2 },
];

function Round4({
  color,
  lbl,
  wrongCountRef,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
}) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = ENDING_QUIZ[qi];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i !== q.correct) {
      wrongCountRef.current++;
    }
  };
  const handleNext = () => {
    if (qi + 1 >= ENDING_QUIZ.length) onNext();
    else {
      setQi(qi + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round4}</div>
      <div className="text-2xl font-black text-white">
        {q.word} → {q.word}<span style={{ color }}>___</span>
      </div>
      <div className="flex gap-2 justify-center flex-wrap">
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === i) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={opt}
              className="px-5 py-2.5 rounded-xl font-black text-base border-2 text-white"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.92 }} onClick={() => handleSelect(i)}>{opt}</motion.button>
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

const PLURAL_FINAL = [
  { word: "Haus", options: ["Hauser", "Häuser", "Haus"], correct: 1 },
  { word: "Frau", options: ["Frauen", "Fraue", "Fraus"], correct: 0 },
  { word: "Kind", options: ["Kinder", "Kinde", "Kinds"], correct: 0 },
];

function Round5({
  color,
  lbl,
  wrongCountRef,
  onDone,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onDone: () => void;
}) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = PLURAL_FINAL[qi];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i !== q.correct) {
      wrongCountRef.current++;
    }
  };
  const handleNext = () => {
    if (qi + 1 >= PLURAL_FINAL.length) onDone();
    else {
      setQi(qi + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round5}</div>
      <div className="text-xl font-black text-white">
        {lbl.plural}: <span style={{ color }}>{q.word}</span>?
      </div>
      <div className="flex flex-col gap-2 w-full px-4">
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === i) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={opt}
              className="py-3 rounded-xl font-bold text-base border-2 text-white"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.96 }} onClick={() => handleSelect(i)}>
              {opt}
              {revealed && i === q.correct && " ✓"}
              {revealed && selected === i && i !== q.correct && " ✗"}
            </motion.button>
          );
        })}
      </div>
      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={handleNext}>
          {qi + 1 >= PLURAL_FINAL.length ? lbl.done : lbl.next}
        </motion.button>
      )}
    </div>
  );
}

const PluralFamilyExplorer = memo(function PluralFamilyExplorer({
  color, lang = "de", onDone,
}: { color: string; lang?: string; onDone: (score: number, total: number) => void }) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 5;
  const wrongCountRef = useRef(0);
  const next = useCallback(() => setRound(r => r + 1), []);
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
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} lang={lang} />}
          {round === 1 && <Round2 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});
export default PluralFamilyExplorer;
