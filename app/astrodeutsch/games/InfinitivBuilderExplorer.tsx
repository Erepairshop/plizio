"use client";
// InfinitivBuilderExplorer — Island i3: Infinitiv mit zu (K6)
// Teaches: when zu is used, position rules, FillTheGap, um...zu, MCQ

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import FillTheGap from "./blocks/FillTheGap";
import TapToHighlight from "./blocks/TapToHighlight";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Infinitive with zu",
    round1Title: "When do we use 'zu'?",
    round1Hint: "Tap each sentence to reveal where 'zu' appears!",
    round2Title: "Position of 'zu'",
    round2Hint: "Tap to highlight the 'zu' in each sentence.",
    round3Title: "Fill the Gap",
    round3Hint: "Does this sentence need 'zu'?",
    round4Title: "um...zu — Purpose Clauses",
    round4Hint: "Tap to reveal the um...zu structure.",
    round5Title: "Where does 'zu' go?",
    round5Hint: "Choose the correct form with 'zu'.",
    next: "Next",
    finish: "Finished!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    check: "Check",
    purpose: "purpose",
    rule: "Rule",
    trennbar: "separable verb",
  },
  hu: {
    title: "Infinitív zu-val",
    round1Title: "Mikor használjuk a 'zu'-t?",
    round1Hint: "Koppints minden mondatra, hogy meglásd hol jelenik meg a 'zu'!",
    round2Title: "A 'zu' pozíciója",
    round2Hint: "Koppints a 'zu'-ra minden mondatban.",
    round3Title: "Töltsd ki a hiányt!",
    round3Hint: "Kell-e 'zu' ebbe a mondatba?",
    round4Title: "um...zu — célhatározói mondat",
    round4Hint: "Koppints az um...zu szerkezet felfedezéséhez.",
    round5Title: "Hova kerül a 'zu'?",
    round5Hint: "Válaszd ki a helyes alakot 'zu'-val.",
    next: "Tovább",
    finish: "Kész!",
    tapToReveal: "Koppints",
    correct: "Helyes!",
    check: "Ellenőrzés",
    purpose: "cél",
    rule: "Szabály",
    trennbar: "elváló ige",
  },
  de: {
    title: "Infinitiv mit zu",
    round1Title: "Wann benutzen wir 'zu'?",
    round1Hint: "Tippe auf jeden Satz, um zu sehen wo 'zu' erscheint!",
    round2Title: "Position von 'zu'",
    round2Hint: "Tippe, um das 'zu' im Satz zu markieren.",
    round3Title: "Lücke füllen",
    round3Hint: "Braucht dieser Satz ein 'zu'?",
    round4Title: "um...zu — Finalsatz",
    round4Hint: "Tippe, um die um...zu-Struktur zu entdecken.",
    round5Title: "Wo steht 'zu'?",
    round5Hint: "Wähle die richtige Form mit 'zu'.",
    next: "Weiter",
    finish: "Fertig!",
    tapToReveal: "Antippen",
    correct: "Richtig!",
    check: "Prüfen",
    purpose: "Zweck",
    rule: "Regel",
    trennbar: "trennbares Verb",
  },
  ro: {
    title: "Infinitiv cu zu",
    round1Title: "Când folosim 'zu'?",
    round1Hint: "Atinge fiecare propoziție pentru a vedea unde apare 'zu'!",
    round2Title: "Poziția lui 'zu'",
    round2Hint: "Atinge pentru a marca 'zu' din propoziție.",
    round3Title: "Completează spațiul",
    round3Hint: "Are această propoziție nevoie de 'zu'?",
    round4Title: "um...zu — propoziție finală",
    round4Hint: "Atinge pentru a descoperi structura um...zu.",
    round5Title: "Unde merge 'zu'?",
    round5Hint: "Alege forma corectă cu 'zu'.",
    next: "Înainte",
    finish: "Gata!",
    tapToReveal: "Atinge",
    correct: "Corect!",
    check: "Verifică",
    purpose: "scop",
    rule: "Regulă",
    trennbar: "verb separabil",
  },
};

const ZU_EXAMPLES = [
  { sentence: "Ich hoffe, bald zu kommen.", zuHighlight: "zu kommen", emoji: "🤞", note: "after: hoffen" },
  { sentence: "Er versucht, Deutsch zu lernen.", zuHighlight: "zu lernen", emoji: "📚", note: "after: versuchen" },
  { sentence: "Sie plant, morgen anzurufen.", zuHighlight: "anzurufen", emoji: "📞", note: "trennbar: an-zu-rufen" },
];

// Round 2 TapToHighlight — tap 'zu' word in sentence
const HIGHLIGHT_SENTENCES = [
  { sentence: "Ich versuche, mehr zu schlafen.", correctIndices: [4], label: "zu" },
  { sentence: "Er plant, früh aufzustehen.", correctIndices: [4], label: "aufzustehen" },
];

const UM_ZU_EXAMPLES = [
  { base: "Er geht in die Schule, um Deutsch zu lernen.", highlight: "um Deutsch zu lernen", emoji: "🏫" },
  { base: "Sie spart Geld, um ein Fahrrad zu kaufen.", highlight: "um ein Fahrrad zu kaufen", emoji: "🚲" },
];

const MCQ5 = [
  { sentence: "Er versucht, mehr ___ lesen.", options: ["zu", "—", "zum"], correct: "zu" },
  { sentence: "Sie fährt in die Stadt, ___ einkaufen.", options: ["um zu", "zu", "für"], correct: "um zu" },
  { sentence: "Ich hoffe, dich bald wieder___ sehen.", options: ["zu", "—", "zus"], correct: "zu" },
];

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="flex gap-1.5 w-full">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex-1 h-2 rounded-full"
          style={{ background: i < current ? "#00FF88" : i === current ? color : "rgba(255,255,255,0.12)" }} />
      ))}
    </div>
  );
}

function NextBtn({ onClick, label, color }: { onClick: () => void; label: string; color: string }) {
  return (
    <motion.button onClick={onClick}
      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
      whileTap={{ scale: 0.97 }}>
      {label} <ChevronRight size={16} />
    </motion.button>
  );
}

function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      {ZU_EXAMPLES.map((ex, i) => {
        const open = revealed.has(i);
        const parts = ex.sentence.split(ex.zuHighlight);
        return (
          <motion.button key={i}
            className="w-full rounded-2xl p-3 text-left flex flex-col gap-1"
            style={{
              background: open ? `${color}12` : "rgba(255,255,255,0.04)",
              border: `2px solid ${open ? color : "rgba(255,255,255,0.1)"}`,
            }}
            onClick={() => setRevealed(prev => new Set([...prev, i]))}
            whileTap={!open ? { scale: 0.97 } : {}}>
            <div className="flex items-center gap-2">
              <span className="text-xl">{ex.emoji}</span>
              {open ? (
                <p className="text-white/80 text-sm font-semibold">
                  {parts[0]}
                  <span className="font-black" style={{ color }}>{ex.zuHighlight}</span>
                  {parts[1]}
                </p>
              ) : (
                <p className="text-white/80 text-sm font-semibold">{ex.sentence}</p>
              )}
            </div>
            {open && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-xs font-bold" style={{ color: `${color}cc` }}>
                {lbl.rule}: {ex.note}
              </motion.p>
            )}
            {!open && <p className="text-white/30 text-xs">{lbl.tapToReveal}</p>}
          </motion.button>
        );
      })}
      {revealed.size >= ZU_EXAMPLES.length && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const item = HIGHLIGHT_SENTENCES[idx];
  const handleDone = (_: boolean) => {
    if (idx + 1 >= HIGHLIGHT_SENTENCES.length) setTimeout(onNext, 900);
    else setTimeout(() => setIdx(i => i + 1), 900);
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 justify-center">
        {HIGHLIGHT_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <TapToHighlight
            sentence={item.sentence}
            correctIndices={item.correctIndices}
            color={color}
            label={`Tippe auf: "${item.label}"`}
            checkLabel={lbl.check}
            onDone={handleDone}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <FillTheGap
        sentence="Er versucht, mehr ___ lernen."
        options={["zu", "—", "zum"]}
        correct="zu"
        color={color}
        onDone={(_) => { setDone(true); setTimeout(onNext, 1000); }}
      />
      {done && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= UM_ZU_EXAMPLES.length;
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <p className="text-center text-xs font-bold text-white/50">
        um ... zu = {lbl.purpose}
      </p>
      {UM_ZU_EXAMPLES.map((ex, i) => {
        const open = revealed.has(i);
        const parts = ex.base.split(ex.highlight);
        return (
          <motion.button key={i}
            className="w-full rounded-2xl p-3 text-left"
            style={{
              background: open ? `${color}12` : "rgba(255,255,255,0.04)",
              border: `2px solid ${open ? color : "rgba(255,255,255,0.1)"}`,
            }}
            onClick={() => setRevealed(prev => new Set([...prev, i]))}
            whileTap={!open ? { scale: 0.97 } : {}}>
            <span className="text-xl mr-2">{ex.emoji}</span>
            {open ? (
              <span className="text-sm font-semibold text-white/80">
                {parts[0]}
                <span className="font-black" style={{ color }}>{ex.highlight}</span>
                {parts[1]}
              </span>
            ) : (
              <span className="text-sm font-semibold text-white/80">{ex.base}</span>
            )}
          </motion.button>
        );
      })}
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MCQ5[idx];
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= MCQ5.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 justify-center">
        {MCQ5.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-lg">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: selected === item.correct ? "#00FF88" : "#FF6B6B" }}>
              {selected === item.correct ? `✅ ${lbl.correct}` : `❌ → "${item.correct}"`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full flex-wrap justify-center">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="flex-1 min-w-16 py-3 rounded-xl font-black text-base"
            style={{
              background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

const InfinitivBuilderExplorer = memo(function InfinitivBuilderExplorer({
  color, lang = "de", onDone,
}: {
  color: string; lang?: string; onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 5;
  const next = useCallback(() => setRound(r => r + 1), []);
  const finish = useCallback(() => onDone(TOTAL_ROUNDS, TOTAL_ROUNDS), [onDone]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 px-1">
      <ProgressBar current={round} total={TOTAL_ROUNDS} color={color} />
      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default InfinitivBuilderExplorer;
