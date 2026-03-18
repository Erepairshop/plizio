"use client";
// WishMachineExplorer — Island i2: Konjunktiv II (K6)
// Teaches: wishes/hypotheticals/polite, wäre/hätte/würde, FillTheGap, modal forms, MCQ

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import FillTheGap from "./blocks/FillTheGap";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Konjunktiv II",
    round1Title: "Wishes & Hypotheticals",
    round1Hint: "Tap each example to discover Konjunktiv II!",
    round2Title: "wäre / hätte / würde",
    round2Hint: "Tap each card to flip and reveal the Konjunktiv II form.",
    round3Title: "Fill the Gap",
    round3Hint: "Choose the correct Konjunktiv II form.",
    round4Title: "Modal Konjunktiv II",
    round4Hint: "Tap to see könnte / müsste / dürfte conjugation.",
    round5Title: "Choose the Right Form",
    round5Hint: "Select the correct Konjunktiv II in context.",
    next: "Next",
    finish: "Finished!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    wish: "Wish",
    hypothetical: "Hypothetical",
    polite: "Polite request",
  },
  hu: {
    title: "Konjunktív II",
    round1Title: "Kívánságok & feltételes mondatok",
    round1Hint: "Koppints minden példára a Konjunktív II felfedezéséhez!",
    round2Title: "wäre / hätte / würde",
    round2Hint: "Koppints a kártyára a Konjunktív II alak felfedezéséhez.",
    round3Title: "Töltsd ki a hiányt!",
    round3Hint: "Válaszd ki a helyes Konjunktív II alakot.",
    round4Title: "Modális Konjunktív II",
    round4Hint: "Koppints a könnte / müsste / dürfte alakokhoz.",
    round5Title: "Válassz helyes alakot!",
    round5Hint: "Válaszd ki a helyes Konjunktív II alakot.",
    next: "Tovább",
    finish: "Kész!",
    tapToReveal: "Koppints",
    correct: "Helyes!",
    wish: "Kívánság",
    hypothetical: "Feltételes",
    polite: "Udvarias kérés",
  },
  de: {
    title: "Konjunktiv II",
    round1Title: "Wünsche & Hypothesen",
    round1Hint: "Tippe auf jedes Beispiel, um Konjunktiv II zu entdecken!",
    round2Title: "wäre / hätte / würde",
    round2Hint: "Tippe auf die Karte, um die Konjunktiv-II-Form aufzudecken.",
    round3Title: "Lücke füllen",
    round3Hint: "Wähle die richtige Konjunktiv-II-Form.",
    round4Title: "Modalverben im Konjunktiv II",
    round4Hint: "Tippe, um könnte / müsste / dürfte zu sehen.",
    round5Title: "Richtige Form wählen",
    round5Hint: "Wähle den richtigen Konjunktiv II im Kontext.",
    next: "Weiter",
    finish: "Fertig!",
    tapToReveal: "Antippen",
    correct: "Richtig!",
    wish: "Wunsch",
    hypothetical: "Hypothese",
    polite: "Höfliche Bitte",
  },
  ro: {
    title: "Conjunctiv II",
    round1Title: "Dorințe & ipoteze",
    round1Hint: "Atinge fiecare exemplu pentru a descoperi Conjunctivul II!",
    round2Title: "wäre / hätte / würde",
    round2Hint: "Atinge cartonașul pentru a dezvălui forma de Conjunctiv II.",
    round3Title: "Completează spațiul",
    round3Hint: "Alege forma corectă de Conjunctiv II.",
    round4Title: "Verbe modale la Conjunctiv II",
    round4Hint: "Atinge pentru a vedea könnte / müsste / dürfte.",
    round5Title: "Alege forma corectă",
    round5Hint: "Selectează Conjunctivul II corect în context.",
    next: "Înainte",
    finish: "Gata!",
    tapToReveal: "Atinge",
    correct: "Corect!",
    wish: "Dorință",
    hypothetical: "Ipoteză",
    polite: "Cerere politicoasă",
  },
};

const EXAMPLES = [
  { type: "wish", emoji: "⭐", de: "Ich wäre gern reich.", en: "I would like to be rich." },
  { type: "hypothetical", emoji: "💭", de: "Wenn ich Zeit hätte...", en: "If I had time..." },
  { type: "polite", emoji: "🙏", de: "Könnten Sie mir helfen?", en: "Could you help me?" },
];

const FLIP_CARDS = [
  { infinitiv: "sein", form: "wäre", emoji: "🔵", note: "sein → wäre" },
  { infinitiv: "haben", form: "hätte", emoji: "🟢", note: "haben → hätte" },
  { infinitiv: "alle anderen", form: "würde + Infinitiv", emoji: "🟡", note: "alle anderen → würde + Inf." },
];

const MODAL_FORMS = [
  { modal: "können", konjII: "könnte", example: "Ich könnte helfen." },
  { modal: "müssen", konjII: "müsste", example: "Du müsstest lernen." },
  { modal: "dürfen", konjII: "dürfte", example: "Er dürfte kommen." },
];

const MCQ5 = [
  { sentence: "Wenn ich mehr Geld ___, würde ich reisen.", options: ["hätte", "habe", "hatte"], correct: "hätte" },
  { sentence: "Er ___ gern Arzt.", options: ["wäre", "wird", "war"], correct: "wäre" },
  { sentence: "___ du mir bitte helfen?", options: ["Könntest", "Kannst", "Konntest"], correct: "Könntest" },
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
  const typeLabel = (t: string) => lbl[t] ?? t;
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      {EXAMPLES.map((ex, i) => {
        const open = revealed.has(i);
        return (
          <motion.button key={i}
            className="w-full rounded-2xl p-3 text-left flex flex-col gap-1"
            style={{
              background: open ? `${color}12` : "rgba(255,255,255,0.04)",
              border: `2px solid ${open ? color : "rgba(255,255,255,0.1)"}`,
            }}
            onClick={() => setRevealed(prev => new Set([...prev, i]))}
            whileTap={!open ? { scale: 0.98 } : {}}>
            <div className="flex items-center gap-2">
              <span className="text-xl">{ex.emoji}</span>
              <span className="text-xs font-black px-2 py-0.5 rounded-full"
                style={{ background: `${color}33`, color }}>{typeLabel(ex.type)}</span>
            </div>
            <p className="text-white font-bold text-sm">{ex.de}</p>
            {open && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-white/60 text-xs italic">{ex.en}</motion.p>
            )}
            {!open && <p className="text-white/30 text-xs">{lbl.tapToReveal}</p>}
          </motion.button>
        );
      })}
      {revealed.size >= EXAMPLES.length && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const allFlipped = flipped.size >= FLIP_CARDS.length;
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex flex-col gap-3">
        {FLIP_CARDS.map((card, i) => {
          const isFlipped = flipped.has(i);
          return (
            <motion.button key={i}
              className="w-full rounded-2xl p-4 flex items-center justify-between"
              style={{
                background: isFlipped ? `${color}18` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isFlipped ? color : "rgba(255,255,255,0.12)"}`,
              }}
              onClick={() => setFlipped(prev => new Set([...prev, i]))}
              whileTap={!isFlipped ? { scale: 0.97 } : {}}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{card.emoji}</span>
                <div className="text-left">
                  <p className="text-white/70 text-sm font-bold">{card.infinitiv}</p>
                  {isFlipped && (
                    <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                      className="font-black text-lg" style={{ color }}>
                      → {card.form}
                    </motion.p>
                  )}
                </div>
              </div>
              {!isFlipped && <span className="text-white/30 text-xs">{lbl.tapToReveal}</span>}
            </motion.button>
          );
        })}
      </div>
      {allFlipped && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
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
        sentence="Wenn ich mehr Zeit ___, würde ich mehr lesen."
        options={["hätte", "wäre", "würde"]}
        correct="hätte"
        color={color}
        onDone={(_) => { setDone(true); setTimeout(onNext, 1000); }}
      />
      {done && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= MODAL_FORMS.length;
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex flex-col gap-2">
        {MODAL_FORMS.map((row, i) => {
          const open = revealed.has(i);
          return (
            <motion.button key={i}
              className="w-full rounded-2xl p-3 flex items-center gap-3 text-left"
              style={{
                background: open ? `${color}12` : "rgba(255,255,255,0.04)",
                border: `2px solid ${open ? color : "rgba(255,255,255,0.1)"}`,
              }}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              whileTap={!open ? { scale: 0.97 } : {}}>
              <span className="font-black text-base text-white/70 min-w-16">{row.modal}</span>
              <span className="text-white/30">→</span>
              {open ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <span className="font-black text-base" style={{ color }}>{row.konjII}</span>
                  <span className="text-white/50 text-xs ml-2 italic">{row.example}</span>
                </motion.div>
              ) : (
                <span className="font-black text-base text-white/20">?</span>
              )}
            </motion.button>
          );
        })}
      </div>
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
              {selected === item.correct ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="flex-1 py-3 rounded-xl font-black text-base"
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

const WishMachineExplorer = memo(function WishMachineExplorer({
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

export default WishMachineExplorer;
