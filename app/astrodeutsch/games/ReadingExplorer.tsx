"use client";
// ReadingExplorer — Island i8: Lesen (Reading)
// Teaches: reading comprehension, matching sentences to pictures, ordering a mini-story

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Reading Explorer",
    round1Title: "Read & Match",
    round1Hint: "Read the sentence and tap the matching picture!",
    round2Title: "True or False?",
    round2Hint: "Read both sentences. Which one is true?",
    round3Title: "Fill in the Word",
    round3Hint: "Look at the picture and fill in the missing word!",
    round4Title: "Mini Story",
    round4Hint: "Put the sentences in the right order!",
    round5Title: "Reading Review",
    round5Hint: "Read and choose the correct answer!",
    well: "Well done!",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    true: "True ✓",
    false: "False ✗",
    tapInOrder: "Tap sentences in order!",
    orderDone: "Great story order!",
    hint: "Read carefully!",
  },
  hu: {
    title: "Olvasás felfedező",
    round1Title: "Olvass és párosíts",
    round1Hint: "Olvasd el a mondatot és koppints a megfelelő képre!",
    round2Title: "Igaz vagy hamis?",
    round2Hint: "Olvasd el mindkét mondatot. Melyik igaz?",
    round3Title: "Töltsd ki a szót",
    round3Hint: "Nézd meg a képet és töltsd ki a hiányzó szót!",
    round4Title: "Mini történet",
    round4Hint: "Rakd helyes sorrendbe a mondatokat!",
    round5Title: "Olvasás áttekintés",
    round5Hint: "Olvass és válaszd a helyes választ!",
    well: "Remek!",
    next: "Tovább",
    finish: "Vége!",
    correct: "Helyes!",
    true: "Igaz ✓",
    false: "Hamis ✗",
    tapInOrder: "Koppints a mondatokra sorban!",
    orderDone: "Szép történet sorrend!",
    hint: "Olvass figyelmesen!",
  },
  de: {
    title: "Lese-Entdecker",
    round1Title: "Lesen & Zuordnen",
    round1Hint: "Lies den Satz und tippe auf das passende Bild!",
    round2Title: "Richtig oder Falsch?",
    round2Hint: "Lies beide Sätze. Welcher ist richtig?",
    round3Title: "Fülle das Wort ein",
    round3Hint: "Schau dir das Bild an und fülle das fehlende Wort ein!",
    round4Title: "Mini-Geschichte",
    round4Hint: "Bringe die Sätze in die richtige Reihenfolge!",
    round5Title: "Lese-Wiederholung",
    round5Hint: "Lies und wähle die richtige Antwort!",
    well: "Toll gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    true: "Richtig ✓",
    false: "Falsch ✗",
    tapInOrder: "Tippe die Sätze der Reihe nach!",
    orderDone: "Tolle Reihenfolge!",
    hint: "Lies aufmerksam!",
  },
  ro: {
    title: "Exploratorul lecturii",
    round1Title: "Citește & Potrivește",
    round1Hint: "Citește propoziția și atinge imaginea potrivită!",
    round2Title: "Adevărat sau Fals?",
    round2Hint: "Citește ambele propoziții. Care este adevărată?",
    round3Title: "Completează cuvântul",
    round3Hint: "Privește imaginea și completează cuvântul lipsă!",
    round4Title: "Mini poveste",
    round4Hint: "Pune propozițiile în ordinea corectă!",
    round5Title: "Recapitulare lectură",
    round5Hint: "Citește și alege răspunsul corect!",
    well: "Bravo!",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    true: "Adevărat ✓",
    false: "Fals ✗",
    tapInOrder: "Atinge propozițiile în ordine!",
    orderDone: "Ordine excelentă!",
    hint: "Citește cu atenție!",
  },
};

// Round 1: sentence → picture match
const SENTENCE_PICTURE: { sentence: string; emoji: string; distractors: string[] }[] = [
  { sentence: "Der Hund schläft.", emoji: "😴🐕", distractors: ["🏃🐕", "🍎🐕"] },
  { sentence: "Das Kind isst.", emoji: "🍽️👧", distractors: ["😴👧", "🏃👧"] },
  { sentence: "Die Katze spielt.", emoji: "🐱🎾", distractors: ["😴🐱", "🍽️🐱"] },
  { sentence: "Der Ball ist rot.", emoji: "🔴⚽", distractors: ["🔵⚽", "🟡⚽"] },
];

// Round 2: which sentence is true?
const TRUE_FALSE: { trueStmt: string; falseStmt: string }[] = [
  { trueStmt: "Eine Banane ist gelb.", falseStmt: "Eine Banane ist blau." },
  { trueStmt: "Schnee ist weiß.", falseStmt: "Schnee ist grün." },
  { trueStmt: "Ein Hund hat vier Beine.", falseStmt: "Ein Hund hat zwei Beine." },
  { trueStmt: "Die Sonne ist rund.", falseStmt: "Die Sonne ist eckig." },
];

// Round 3: fill in missing word (picture hint)
const FILL_PICTURE: { sentence: string; missing: string; emoji: string; options: string[] }[] = [
  { sentence: "Der ___ ist rund.", missing: "Ball", emoji: "⚽", options: ["Ball", "Hund", "Baum"] },
  { sentence: "Die ___ ist gelb.", missing: "Sonne", emoji: "☀️", options: ["Mond", "Sonne", "Blume"] },
  { sentence: "Die ___ schläft.", missing: "Katze", emoji: "😴🐱", options: ["Katze", "Hund", "Maus"] },
  { sentence: "Der ___ fliegt.", missing: "Vogel", emoji: "🐦", options: ["Fisch", "Vogel", "Hund"] },
];

// Round 4: mini story ordering
const MINI_STORY = [
  { order: 1, sentence: "Anna steht auf.", emoji: "😴➡️🧍" },
  { order: 2, sentence: "Anna isst Brot.", emoji: "🍞" },
  { order: 3, sentence: "Anna geht zur Schule.", emoji: "🏫" },
];

// Round 5: reading comprehension
const READING_COMP: { text: string; question: string; options: string[]; answer: string }[] = [
  {
    text: "Der Hund heißt Bello. Er ist braun.",
    question: "Welche Farbe hat Bello?",
    options: ["schwarz", "braun", "weiß"],
    answer: "braun",
  },
  {
    text: "Anna hat einen roten Ball. Sie spielt im Garten.",
    question: "Wo spielt Anna?",
    options: ["in der Schule", "im Garten", "zu Hause"],
    answer: "im Garten",
  },
  {
    text: "Heute ist die Sonne schön. Max und Lisa spielen draußen.",
    question: "Wer spielt draußen?",
    options: ["nur Max", "Max und Lisa", "nur Lisa"],
    answer: "Max und Lisa",
  },
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

// ─── Round 1: Read & Match picture ───────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = SENTENCE_PICTURE[idx];
  const [opts] = useState(() => SENTENCE_PICTURE.map(it =>
    [it.emoji, ...it.distractors].sort(() => Math.random() - 0.5)
  ));

  const handleSelect = (em: string) => {
    if (selected) return;
    setSelected(em);
    setTimeout(() => {
      if (idx + 1 >= SENTENCE_PICTURE.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">📖</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex gap-1 mb-1">
        {SENTENCE_PICTURE.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="w-full rounded-2xl px-4 py-3 text-center"
          style={{ background: `${color}15`, border: `2px solid ${color}40` }}>
          <p className="text-xl font-black text-white">{item.sentence}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 justify-center">
        {opts[idx].map(em => (
          <motion.button key={em} onClick={() => handleSelect(em)}
            className="w-20 h-20 rounded-2xl text-4xl flex items-center justify-center"
            style={{
              background: selected === em
                ? (em === item.emoji ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === em
                ? (em === item.emoji ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
            }}
            whileTap={!selected ? { scale: 0.9 } : {}}>
            {em}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 2: True or False ───────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = TRUE_FALSE[idx];
  const [shuffled] = useState(() => TRUE_FALSE.map(it =>
    Math.random() > 0.5 ? [it.trueStmt, it.falseStmt] : [it.falseStmt, it.trueStmt]
  ));

  const handleSelect = (stmt: string) => {
    if (selected) return;
    setSelected(stmt);
    setTimeout(() => {
      if (idx + 1 >= TRUE_FALSE.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">✓</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {TRUE_FALSE.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full">
        {shuffled[idx].map((stmt, i) => {
          const isTrue = stmt === item.trueStmt;
          return (
            <motion.button key={i} onClick={() => handleSelect(stmt)}
              className="w-full py-4 px-4 rounded-2xl font-bold text-base text-left"
              style={{
                background: selected === stmt
                  ? (isTrue ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)")
                  : "rgba(255,255,255,0.06)",
                border: `2px solid ${selected === stmt
                  ? (isTrue ? "#00FF88" : "#FF2D78")
                  : "rgba(255,255,255,0.2)"}`,
                color: selected === stmt ? (isTrue ? "#00FF88" : "#FF2D78") : "white",
              }}
              whileTap={!selected ? { scale: 0.97 } : {}}>
              {stmt}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 3: Fill missing word (picture hint) ───────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = FILL_PICTURE[idx];

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= FILL_PICTURE.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">✏️</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 mb-1">
        {FILL_PICTURE.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.span key={item.emoji} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          className="text-6xl">{item.emoji}</motion.span>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.p key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="text-xl font-black text-white text-center">
          {selected
            ? item.sentence.replace("___", selected)
            : item.sentence.split("___").map((part, i) => (
              <span key={i}>
                {part}{i === 0 && <span style={{ color, background: `${color}22`, padding: "2px 10px", borderRadius: 8 }}>___</span>}
              </span>
            ))
          }
        </motion.p>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="w-full py-3.5 rounded-2xl font-black text-xl"
            style={{
              background: selected === opt
                ? (opt === item.missing ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt
                ? (opt === item.missing ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.missing ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 4: Put story sentences in order ───────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [shuffled] = useState(() => [...MINI_STORY].sort(() => Math.random() - 0.5));
  const allTapped = tapped.length === MINI_STORY.length;

  const handleTap = (order: number) => {
    if (tapped.includes(order) || revealed) return;
    setTapped(prev => [...prev, order]);
  };

  const isCorrect = tapped.join(",") === MINI_STORY.map(s => s.order).join(",");

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.tapInOrder}</p>
      {/* Order indicators */}
      <div className="flex gap-2 justify-center">
        {Array.from({ length: MINI_STORY.length }, (_, i) => (
          <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm"
            style={{
              background: tapped[i] !== undefined ? `${color}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${tapped[i] !== undefined ? color : "rgba(255,255,255,0.15)"}`,
              color: tapped[i] !== undefined ? color : "rgba(255,255,255,0.3)",
            }}>
            {i + 1}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full">
        {shuffled.map(item => {
          const isTapped = tapped.includes(item.order);
          const tapPos = tapped.indexOf(item.order) + 1;
          return (
            <motion.button key={item.order} onClick={() => handleTap(item.order)}
              disabled={isTapped || revealed}
              className="w-full py-3 px-4 rounded-2xl font-bold text-sm text-left flex items-center gap-3"
              style={{
                background: isTapped ? `${color}22` : "rgba(255,255,255,0.06)",
                border: `2px solid ${isTapped ? color : "rgba(255,255,255,0.15)"}`,
                opacity: isTapped ? 0.7 : 1,
              }}
              whileTap={!isTapped && !revealed ? { scale: 0.97 } : {}}>
              <span className="text-xl">{item.emoji}</span>
              <span style={{ color: isTapped ? color : "white" }}>{item.sentence}</span>
              {isTapped && <span className="ml-auto font-black" style={{ color }}>{tapPos}</span>}
            </motion.button>
          );
        })}
      </div>
      {allTapped && !revealed && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => setRevealed(true)}
          className="w-full py-3 rounded-2xl font-black text-white text-sm"
          style={{ background: `${color}22`, border: `2px solid ${color}55` }}
          whileTap={{ scale: 0.97 }}>
          {lbl.correct}?
        </motion.button>
      )}
      {revealed && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="w-full flex flex-col gap-2">
          <div className="rounded-2xl px-4 py-2 text-center"
            style={{ background: isCorrect ? "rgba(0,255,136,0.08)" : `${color}11`, border: `2px solid ${isCorrect ? "rgba(0,255,136,0.3)" : `${color}40`}` }}>
            <p className="font-bold text-sm" style={{ color: isCorrect ? "#00FF88" : "white" }}>
              {isCorrect ? `✅ ${lbl.orderDone}` : lbl.orderDone}
            </p>
          </div>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: Reading comprehension ──────────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = READING_COMP[idx];

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= READING_COMP.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🎉</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onDone} label={lbl.finish} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 mb-1">
        {READING_COMP.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.text} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }} className="w-full">
          <div className="w-full rounded-2xl px-4 py-3"
            style={{ background: `${color}12`, border: `2px solid ${color}30` }}>
            <p className="text-base font-bold text-white leading-relaxed">{item.text}</p>
          </div>
          <p className="text-white/70 text-sm font-bold mt-3 text-center">{item.question}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="w-full py-3.5 rounded-2xl font-bold text-base"
            style={{
              background: selected === opt
                ? (opt === item.answer ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt
                ? (opt === item.answer ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.answer ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const ReadingExplorer = memo(function ReadingExplorer({
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

export default ReadingExplorer;
