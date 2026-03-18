"use client";
// PrepositionCaseExplorer — Island i3: Präpositionen & Konjunktionen (K5)
// Teaches: preposition groups by case, tap-the-case, conjunctions overview, word order, MCQ

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Prepositions & Conjunctions",
    round1Title: "Prepositions by Case",
    round1Hint: "Tap each group to see the prepositions!",
    round2Title: "Which Case?",
    round2Hint: "Tap the correct case for each preposition.",
    round3Title: "Conjunctions",
    round3Hint: "Tap to discover coordinating and subordinating conjunctions!",
    round4Title: "Word Order after Conjunctions",
    round4Hint: "Choose the conjunction that fits — watch the word order!",
    round5Title: "Mixed Challenge",
    round5Hint: "Choose the correct preposition+article or conjunction.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    akk: "Akkusativ",
    dat: "Dativ",
    twoWay: "Two-way",
    coord: "Coordinating",
    subord: "Subordinating",
    verbToEnd: "verb goes to end!",
  },
  hu: {
    title: "Elöljárók & Kötőszók",
    round1Title: "Elöljárók esetenkénti bontásban",
    round1Hint: "Koppints minden csoportra az elöljárók megtekintéséhez!",
    round2Title: "Melyik eset?",
    round2Hint: "Koppints a helyes esetre minden elöljárónál.",
    round3Title: "Kötőszók",
    round3Hint: "Koppints a mellérendelő és alárendelő kötőszók felfedéséhez!",
    round4Title: "Szórend kötőszók után",
    round4Hint: "Válaszd ki a megfelelő kötőszót — figyeld a szórendet!",
    round5Title: "Vegyes kihívás",
    round5Hint: "Válaszd ki a helyes elöljáró+névelő vagy kötőszó kombinációt.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    akk: "Akkusativ",
    dat: "Dativ",
    twoWay: "Kétféle",
    coord: "Mellérendelő",
    subord: "Alárendelő",
    verbToEnd: "az ige a mondat végére kerül!",
  },
  de: {
    title: "Präpositionen & Konjunktionen",
    round1Title: "Präpositionen nach Fällen",
    round1Hint: "Tippe auf jede Gruppe, um die Präpositionen zu sehen!",
    round2Title: "Welcher Fall?",
    round2Hint: "Tippe den richtigen Fall für jede Präposition.",
    round3Title: "Konjunktionen",
    round3Hint: "Tippe, um koordinierende und subordinierende Konjunktionen zu entdecken!",
    round4Title: "Wortstellung nach Konjunktionen",
    round4Hint: "Wähle die passende Konjunktion — beachte die Wortstellung!",
    round5Title: "Gemischte Aufgabe",
    round5Hint: "Wähle die richtige Präposition+Artikel oder Konjunktion.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    akk: "Akkusativ",
    dat: "Dativ",
    twoWay: "Wechselpräp.",
    coord: "Koordinierend",
    subord: "Subordinierend",
    verbToEnd: "Verb ans Ende!",
  },
  ro: {
    title: "Prepoziții & Conjuncții",
    round1Title: "Prepoziții după caz",
    round1Hint: "Atinge fiecare grup pentru a vedea prepozițiile!",
    round2Title: "Ce caz?",
    round2Hint: "Atinge cazul corect pentru fiecare prepoziție.",
    round3Title: "Conjuncții",
    round3Hint: "Atinge pentru a descoperi conjuncțiile coordonatoare și subordonatoare!",
    round4Title: "Ordinea cuvintelor după conjuncții",
    round4Hint: "Alege conjuncția potrivită — atenție la ordinea cuvintelor!",
    round5Title: "Provocare mixtă",
    round5Hint: "Alege prepoziția+articolul sau conjuncția corectă.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    akk: "Acuzativ",
    dat: "Dativ",
    twoWay: "Dublu",
    coord: "Coordonatoare",
    subord: "Subordonatoare",
    verbToEnd: "verbul la final!",
  },
};

const PREP_GROUPS = [
  { case: "akk", color: "#EF4444", items: ["durch", "für", "gegen", "ohne", "um"], emoji: "➡️" },
  { case: "dat", color: "#10B981", items: ["aus", "bei", "mit", "nach", "seit", "von", "zu"], emoji: "📍" },
  { case: "twoWay", color: "#F59E0B", items: ["in", "an", "auf", "über", "unter", "vor", "hinter", "neben", "zwischen"], emoji: "↔️" },
];

const CASE_QUIZ = [
  { prep: "für", options: ["akk", "dat", "twoWay"], correct: "akk" },
  { prep: "mit", options: ["akk", "dat", "twoWay"], correct: "dat" },
  { prep: "auf", options: ["akk", "dat", "twoWay"], correct: "twoWay" },
  { prep: "ohne", options: ["akk", "dat", "twoWay"], correct: "akk" },
  { prep: "von", options: ["akk", "dat", "twoWay"], correct: "dat" },
];

const CONJ_GROUPS = [
  { type: "coord", color: "#3B82F6", items: ["und", "oder", "aber", "denn", "sondern"], example: "Er ist müde, aber er arbeitet.", emoji: "🔗" },
  { type: "subord", color: "#A855F7", items: ["weil", "dass", "wenn", "obwohl", "damit"], example: "Er schläft, weil er müde ist.", emoji: "📎" },
];

const WORD_ORDER_QUIZ = [
  { sentence: "Er schläft, ___ er müde ist.", options: ["und", "weil", "oder"], correct: "weil", hint: "Verb ans Ende → weil" },
  { sentence: "Sie lernt, ___ sie gut schlafen will.", options: ["und", "oder", "damit"], correct: "damit", hint: "Verb ans Ende → damit" },
  { sentence: "Er ist groß ___ stark.", options: ["weil", "und", "dass"], correct: "und", hint: "Kein Wortstellungswechsel → und" },
];

const MIXED_QUIZ = [
  { sentence: "Er wartet ___ dem Bus.", options: ["auf", "für", "durch"], correct: "auf", hint: "warten auf + Dativ" },
  { sentence: "Ich lerne Deutsch, ___ ich in Deutschland wohne.", options: ["und", "weil", "oder"], correct: "weil", hint: "Grund → weil" },
  { sentence: "Sie geht ___ die Schule.", options: ["in", "aus", "seit"], correct: "in", hint: "Richtung → in + Akk" },
  { sentence: "Er ist nett, ___ er ist auch lustig.", options: ["weil", "dass", "und"], correct: "und", hint: "Gleichrangig → und" },
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

// ─── Round 1: Prepositions by case ────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= PREP_GROUPS.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {PREP_GROUPS.map((g, i) => {
          const isOpen = revealed.has(i);
          const caseLabel = lbl[g.case] ?? g.case;
          return (
            <motion.button key={g.case}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 text-left"
              style={{
                background: isOpen ? `${g.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? g.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span>{g.emoji}</span>
                <span className="font-black text-base" style={{ color: g.color }}>{caseLabel}</span>
              </div>
              {isOpen ? (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-1.5 mt-2">
                  {g.items.map(p => (
                    <span key={p} className="px-2.5 py-1 rounded-lg text-sm font-bold"
                      style={{ background: `${g.color}25`, color: g.color }}>{p}</span>
                  ))}
                </motion.div>
              ) : (
                <p className="text-white/30 text-xs mt-1">{lbl.tapToReveal}</p>
              )}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Tap the case ────────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = CASE_QUIZ[idx];
  const caseColors: Record<string, string> = { akk: "#EF4444", dat: "#10B981", twoWay: "#F59E0B" };
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= CASE_QUIZ.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1">
        {CASE_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.prep} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-6 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-black text-3xl">{item.prep}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${lbl[item.correct] ?? item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => {
          const optColor = caseColors[opt] ?? color;
          return (
            <motion.button key={opt}
              onClick={() => handleSelect(opt)}
              className="w-full py-3 rounded-xl font-black text-base"
              style={{
                background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : `${optColor}11`,
                border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : `${optColor}55`}`,
                color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : optColor,
              }}
              whileTap={!selected ? { scale: 0.97 } : {}}>
              {lbl[opt] ?? opt}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 3: Conjunctions overview ──────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= CONJ_GROUPS.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {CONJ_GROUPS.map((g, i) => {
          const isOpen = revealed.has(i);
          const typeLabel = lbl[g.type] ?? g.type;
          return (
            <motion.button key={g.type}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isOpen ? `${g.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? g.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{g.emoji}</span>
                <span className="font-black text-base" style={{ color: g.color }}>{typeLabel}</span>
              </div>
              {isOpen ? (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-2 flex flex-col gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map(c => (
                      <span key={c} className="px-2.5 py-1 rounded-lg text-sm font-bold"
                        style={{ background: `${g.color}25`, color: g.color }}>{c}</span>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm italic">{g.example}</p>
                  {g.type === "subord" && (
                    <p className="text-xs font-bold" style={{ color: g.color }}>⚠️ {lbl.verbToEnd}</p>
                  )}
                </motion.div>
              ) : (
                <p className="text-white/30 text-xs mt-1">{lbl.tapToReveal}</p>
              )}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 4: Word order with conjunctions ────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = WORD_ORDER_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= WORD_ORDER_QUIZ.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 900);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1">
        {WORD_ORDER_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-base">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`} — {item.hint}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="flex-1 py-3 rounded-xl font-black text-lg"
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

// ─── Round 5: Mixed MCQ ───────────────────────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MIXED_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= MIXED_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {MIXED_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-base">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`} ({item.hint})
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
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

// ─── Main Component ────────────────────────────────────────────────────────────
const PrepositionCaseExplorer = memo(function PrepositionCaseExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
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

export default PrepositionCaseExplorer;
