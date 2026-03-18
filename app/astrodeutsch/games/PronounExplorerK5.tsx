"use client";
// PronounExplorerK5 — Island i2: Pronomen (Personal + Relativ) (K5)
// Teaches: personal pronouns in 4 cases, reflexive pronouns, relative pronouns, gap fill, MCQ

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Pronoun Explorer",
    round1Title: "Personal Pronouns — 4 Cases",
    round1Hint: "Tap each row to reveal the pronoun forms!",
    round2Title: "Reflexive Pronouns",
    round2Hint: "Tap each example to see the reflexive pronoun!",
    round3Title: "Relative Pronouns",
    round3Hint: "Tap to reveal which relative pronoun goes with each noun!",
    round4Title: "Fill the Relative Pronoun",
    round4Hint: "Choose the correct relative pronoun for the gap.",
    round5Title: "Mixed Pronoun Challenge",
    round5Hint: "Choose the correct pronoun in context.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    nom: "Nominativ",
    akk: "Akkusativ",
    dat: "Dativ",
    gen: "Genitiv",
    reflexive: "Reflexive",
    relative: "Relative",
  },
  hu: {
    title: "Névmás felfedező",
    round1Title: "Személyes névmások — 4 eset",
    round1Hint: "Koppints minden sorra a névmás alakok felfedéséhez!",
    round2Title: "Visszaható névmások",
    round2Hint: "Koppints minden példára a visszaható névmás megtekintéséhez!",
    round3Title: "Vonatkozó névmások",
    round3Hint: "Koppints, hogy megtudd melyik vonatkozó névmás illik az adott főnévhez!",
    round4Title: "Töltsd ki a vonatkozó névmást",
    round4Hint: "Válaszd ki a helyes vonatkozó névmást az üres helyre.",
    round5Title: "Vegyes névmás kihívás",
    round5Hint: "Válaszd ki a helyes névmást a szövegkörnyezetben.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    nom: "Nominativ",
    akk: "Akkusativ",
    dat: "Dativ",
    gen: "Genitiv",
    reflexive: "Visszaható",
    relative: "Vonatkozó",
  },
  de: {
    title: "Pronomen-Entdecker",
    round1Title: "Personalpronomen — 4 Fälle",
    round1Hint: "Tippe auf jede Zeile, um die Pronomenformen aufzudecken!",
    round2Title: "Reflexivpronomen",
    round2Hint: "Tippe auf jedes Beispiel, um das Reflexivpronomen zu sehen!",
    round3Title: "Relativpronomen",
    round3Hint: "Tippe, um zu sehen welches Relativpronomen zum Nomen gehört!",
    round4Title: "Relativpronomen einsetzen",
    round4Hint: "Wähle das richtige Relativpronomen für die Lücke.",
    round5Title: "Gemischte Pronomen-Aufgabe",
    round5Hint: "Wähle das richtige Pronomen im Kontext.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    nom: "Nominativ",
    akk: "Akkusativ",
    dat: "Dativ",
    gen: "Genitiv",
    reflexive: "Reflexiv",
    relative: "Relativ",
  },
  ro: {
    title: "Exploratorul pronumelor",
    round1Title: "Pronume personale — 4 cazuri",
    round1Hint: "Atinge fiecare rând pentru a dezvălui formele pronumelui!",
    round2Title: "Pronume reflexive",
    round2Hint: "Atinge fiecare exemplu pentru a vedea pronumele reflexiv!",
    round3Title: "Pronume relative",
    round3Hint: "Atinge pentru a vedea ce pronume relativ se potrivește!",
    round4Title: "Completează pronumele relativ",
    round4Hint: "Alege pronumele relativ corect pentru spațiul liber.",
    round5Title: "Provocare mixtă de pronume",
    round5Hint: "Alege pronumele corect în context.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    nom: "Nominativ",
    akk: "Acuzativ",
    dat: "Dativ",
    gen: "Genitiv",
    reflexive: "Reflexiv",
    relative: "Relativ",
  },
};

const PERS_PRONOUNS = [
  { person: "ich/I", nom: "ich", akk: "mich", dat: "mir", gen: "meiner", color: "#3B82F6" },
  { person: "du/you", nom: "du", akk: "dich", dat: "dir", gen: "deiner", color: "#10B981" },
  { person: "er/he", nom: "er", akk: "ihn", dat: "ihm", gen: "seiner", color: "#F59E0B" },
  { person: "sie/she", nom: "sie", akk: "sie", dat: "ihr", gen: "ihrer", color: "#EC4899" },
];

const REFLEXIVE_EXAMPLES = [
  { sentence: "Er wäscht ___.", reflexive: "sich", emoji: "🚿" },
  { sentence: "Ich beeile ___.", reflexive: "mich", emoji: "🏃" },
  { sentence: "Du freust ___ darüber.", reflexive: "dich", emoji: "😊" },
];

const RELATIVE_INTRO = [
  { genus: "maskulin", nom: "der", example: "Der Mann, der singt...", color: "#3B82F6", emoji: "👨" },
  { genus: "feminin", nom: "die", example: "Die Frau, die tanzt...", color: "#EC4899", emoji: "👩" },
  { genus: "neutrum", nom: "das", example: "Das Kind, das lacht...", color: "#10B981", emoji: "🧒" },
  { genus: "Plural", nom: "die", example: "Die Kinder, die spielen...", color: "#F59E0B", emoji: "👫" },
];

const REL_QUIZ = [
  { sentence: "Das Kind, ___ spielt, ist glücklich.", options: ["der", "die", "das"], correct: "das", genus: "neutrum" },
  { sentence: "Der Hund, ___ bellt, gehört mir.", options: ["der", "die", "das"], correct: "der", genus: "maskulin" },
  { sentence: "Die Katze, ___ schläft, ist süß.", options: ["der", "die", "das"], correct: "die", genus: "feminin" },
];

const MIXED_QUIZ = [
  { sentence: "Ich sehe ___.", options: ["er", "ihn", "ihm"], correct: "ihn", hint: "Akkusativ von 'er'" },
  { sentence: "Sie hilft ___.", options: ["ich", "mir", "mich"], correct: "mir", hint: "Dativ von 'ich'" },
  { sentence: "Das Buch, ___ ich lese, ist toll.", options: ["der", "das", "dem"], correct: "das", hint: "Relativpronomen Neutrum" },
  { sentence: "Er rasiert ___.", options: ["sich", "ihm", "er"], correct: "sich", hint: "Reflexivpronomen" },
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

// ─── Round 1: Personal pronouns table ─────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= PERS_PRONOUNS.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="w-full rounded-2xl overflow-hidden" style={{ border: `2px solid ${color}33` }}>
        <div className="grid grid-cols-5 bg-white/5 px-2 py-2 gap-1">
          <span className="text-white/40 text-[10px] font-bold"></span>
          {[lbl.nom, lbl.akk, lbl.dat, lbl.gen].map(h => (
            <span key={h} className="text-white/40 text-[10px] font-bold text-center">{h}</span>
          ))}
        </div>
        {PERS_PRONOUNS.map((row, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={row.person}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full grid grid-cols-5 items-center px-2 py-2.5 gap-1"
              style={{ background: isOpen ? `${row.color}0F` : "transparent", borderTop: "1px solid rgba(255,255,255,0.06)" }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <span className="text-white/70 text-xs font-bold" style={{ color: row.color }}>{row.nom}</span>
              {[row.nom, row.akk, row.dat, row.gen].map((val, j) => (
                <span key={j} className="font-bold text-sm text-center"
                  style={{ color: isOpen ? (j === 0 ? "rgba(255,255,255,0.6)" : row.color) : "rgba(255,255,255,0.15)" }}>
                  {isOpen ? val : "?"}
                </span>
              ))}
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

// ─── Round 2: Reflexive pronouns ──────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= REFLEXIVE_EXAMPLES.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {REFLEXIVE_EXAMPLES.map((ex, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={ex.sentence}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 text-left flex items-center gap-3"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <span className="text-2xl">{ex.emoji}</span>
              <div className="flex-1">
                <p className="text-white font-bold text-base">
                  {ex.sentence.replace("___", isOpen ? `[${ex.reflexive}]` : "___")}
                </p>
                {isOpen && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-xs font-bold mt-1" style={{ color }}>
                    {lbl.reflexive}: <span className="text-base">{ex.reflexive}</span>
                  </motion.p>
                )}
              </div>
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

// ─── Round 3: Relative pronouns intro ─────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= RELATIVE_INTRO.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {RELATIVE_INTRO.map((item, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={item.genus}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 text-left"
              style={{
                background: isOpen ? `${item.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? item.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{item.emoji}</span>
                <span className="font-black text-base" style={{ color: item.color }}>{item.genus}:</span>
                <span className="font-black text-lg text-white">{item.nom}</span>
              </div>
              {isOpen && (
                <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                  className="text-white/70 text-sm mt-1 pl-1">{item.example}</motion.p>
              )}
              {!isOpen && <p className="text-white/30 text-xs pl-1">{lbl.tapToReveal}</p>}
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

// ─── Round 4: Relative pronoun MCQ ────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = REL_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= REL_QUIZ.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1">
        {REL_QUIZ.map((_, i) => (
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
              {isCorrect ? `✅ ${lbl.correct} (${item.genus})` : `❌ → ${item.correct}`}
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

// ─── Round 5: Mixed pronoun MCQ ───────────────────────────────────────────────
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
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct} (${item.hint})`}
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

// ─── Main Component ────────────────────────────────────────────────────────────
const PronounExplorerK5 = memo(function PronounExplorerK5({
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

export default PronounExplorerK5;
