"use client";
// KasusExplorer — Island i1: Nominativ & Akkusativ (K4)
// Teaches: the 4 cases overview, Nominativ (subject), Akkusativ (object), article declension

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Case Explorer",
    round1Title: "The 4 Cases",
    round1Hint: "Tap each case to see an example sentence!",
    round2Title: "Nominative — Who?",
    round2Hint: "Tap the subject (Nominativ) in each sentence.",
    round3Title: "Accusative — Whom?",
    round3Hint: "Choose the correct Akkusativ form.",
    round4Title: "Article Changes",
    round4Hint: "Tap to reveal how articles change in Akkusativ.",
    round5Title: "Mixed Challenge",
    round5Hint: "Choose Nominativ or Akkusativ form.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    nom: "Nominativ",
    akk: "Akkusativ",
    dat: "Dativ",
    gen: "Genitiv",
    correct: "Correct!",
  },
  hu: {
    title: "Eset felfedező",
    round1Title: "A 4 eset",
    round1Hint: "Koppints minden esetre, hogy példamondatot lássál!",
    round2Title: "Alanyeset — Ki?",
    round2Hint: "Koppints az alanyra (Nominativ) a mondatban.",
    round3Title: "Tárgyeset — Kit?",
    round3Hint: "Válaszd ki a helyes Akkusativ alakot.",
    round4Title: "Névelők változása",
    round4Hint: "Koppints, hogy meglásd hogyan változnak a névelők Akkusativban.",
    round5Title: "Vegyes kihívás",
    round5Hint: "Válaszd ki a Nominativ vagy Akkusativ alakot.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    nom: "Nominativ",
    akk: "Akkusativ",
    dat: "Dativ",
    gen: "Genitiv",
    correct: "Helyes!",
  },
  de: {
    title: "Kasus-Entdecker",
    round1Title: "Die 4 Fälle",
    round1Hint: "Tippe auf jeden Fall, um einen Beispielsatz zu sehen!",
    round2Title: "Nominativ — Wer?",
    round2Hint: "Tippe auf das Subjekt (Nominativ) im Satz.",
    round3Title: "Akkusativ — Wen?",
    round3Hint: "Wähle die richtige Akkusativ-Form.",
    round4Title: "Artikelveränderungen",
    round4Hint: "Tippe, um zu sehen wie Artikel im Akkusativ wechseln.",
    round5Title: "Gemischte Aufgabe",
    round5Hint: "Wähle Nominativ- oder Akkusativ-Form.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    nom: "Nominativ",
    akk: "Akkusativ",
    dat: "Dativ",
    gen: "Genitiv",
    correct: "Richtig!",
  },
  ro: {
    title: "Exploratorul cazurilor",
    round1Title: "Cele 4 cazuri",
    round1Hint: "Atinge fiecare caz pentru a vedea un exemplu!",
    round2Title: "Nominativ — Cine?",
    round2Hint: "Atinge subiectul (Nominativ) din propoziție.",
    round3Title: "Acuzativ — Pe cine?",
    round3Hint: "Alege forma corectă de Acuzativ.",
    round4Title: "Schimbări de articol",
    round4Hint: "Atinge pentru a vedea cum se schimbă articolele la Acuzativ.",
    round5Title: "Provocare mixtă",
    round5Hint: "Alege forma de Nominativ sau Acuzativ.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    nom: "Nominativ",
    akk: "Acuzativ",
    dat: "Dativ",
    gen: "Genitiv",
    correct: "Corect!",
  },
};

const CASES = [
  { key: "nom", question: "Wer?", color: "#3B82F6", example: "Der Hund bellt.", highlight: "Der Hund", emoji: "🐕" },
  { key: "akk", question: "Wen?", color: "#EF4444", example: "Ich sehe den Hund.", highlight: "den Hund", emoji: "👁️" },
  { key: "dat", question: "Wem?", color: "#10B981", example: "Ich helfe dem Mann.", highlight: "dem Mann", emoji: "🤝" },
  { key: "gen", question: "Wessen?", color: "#F59E0B", example: "Das ist das Buch des Lehrers.", highlight: "des Lehrers", emoji: "📚" },
];

const NOM_SENTENCES = [
  { sentence: "Der Hund bellt laut.", subject: "Der Hund", emoji: "🐕" },
  { sentence: "Die Katze schläft.", subject: "Die Katze", emoji: "🐱" },
  { sentence: "Das Kind spielt.", subject: "Das Kind", emoji: "👦" },
];

const AKK_QUIZ = [
  { sentence: "Ich sehe ___ Hund.", correct: "den", options: ["der", "den", "dem"], article: "der → den" },
  { sentence: "Er kauft ___ Buch.", correct: "das", options: ["das", "den", "dem"], article: "das → das" },
  { sentence: "Sie besucht ___ Lehrerin.", correct: "die", options: ["die", "der", "den"], article: "die → die" },
];

const DECL_TABLE = [
  { gender: "maskulin", nom: "der", akk: "den", emoji: "♂️", changed: true },
  { gender: "feminin", nom: "die", akk: "die", emoji: "♀️", changed: false },
  { gender: "neutrum", nom: "das", akk: "das", emoji: "⚥", changed: false },
  { gender: "Plural", nom: "die", akk: "die", emoji: "👥", changed: false },
];

const MIXED_QUIZ = [
  { sentence: "Ich lese ___ Roman.", options: ["der", "den", "dem"], correct: "den", case: "Akkusativ" },
  { sentence: "___ Vogel singt schön.", options: ["Der", "Den", "Dem"], correct: "Der", case: "Nominativ" },
  { sentence: "Wir sehen ___ Haus.", options: ["das", "dem", "den"], correct: "das", case: "Akkusativ" },
  { sentence: "___ Lehrer erklärt.", options: ["Der", "Den", "Die"], correct: "Der", case: "Nominativ" },
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

// ─── Round 1: 4 Cases overview ────────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= CASES.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {CASES.map((c, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={c.key}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${c.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? c.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="font-black text-base" style={{ color: c.color }}>
                  {lbl[c.key]} — {c.question}
                </span>
                <span>{c.emoji}</span>
              </div>
              {isOpen && (
                <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                  className="text-white/80 text-sm">
                  {c.example.split(c.highlight).map((part, j, arr) => (
                    <span key={j}>
                      {part}
                      {j < arr.length - 1 && <span className="font-black" style={{ color: c.color }}>{c.highlight}</span>}
                    </span>
                  ))}
                </motion.p>
              )}
              {!isOpen && <p className="text-white/30 text-xs">{lbl.tapToReveal}</p>}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Find the Nominativ subject ──────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);

  const item = NOM_SENTENCES[idx];
  const handleNext = () => {
    if (idx + 1 >= NOM_SENTENCES.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1">
        {NOM_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <span className="text-4xl">{item.emoji}</span>
          <p className="text-white font-bold text-lg text-center">{item.sentence}</p>
          {!tapped && (
            <motion.button
              onClick={() => setTapped(true)}
              className="mt-1 px-5 py-2 rounded-xl text-sm font-black"
              style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
              whileTap={{ scale: 0.95 }}>
              {item.subject}
            </motion.button>
          )}
          {tapped && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 rounded-xl text-sm font-black"
              style={{ background: `${color}33`, border: `2px solid ${color}`, color }}>
              ✅ {lbl.nom}: {item.subject}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 3: Akkusativ fill-in-the-blank ─────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const item = AKK_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= AKK_QUIZ.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1">
        {AKK_QUIZ.map((_, i) => (
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
              className="text-xs font-bold mt-2" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
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

// ─── Round 4: Article declension table ────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= DECL_TABLE.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="w-full rounded-2xl overflow-hidden" style={{ border: `2px solid ${color}33` }}>
        <div className="grid grid-cols-4 bg-white/5 px-3 py-2">
          <span className="text-white/40 text-xs font-bold"></span>
          <span className="text-white/40 text-xs font-bold text-center">Genus</span>
          <span className="text-white/60 text-xs font-bold text-center" style={{ color: "#3B82F6" }}>{lbl.nom}</span>
          <span className="text-white/60 text-xs font-bold text-center" style={{ color: "#EF4444" }}>{lbl.akk}</span>
        </div>
        {DECL_TABLE.map((row, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={row.gender}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full grid grid-cols-4 items-center px-3 py-2.5 text-left"
              style={{ background: isOpen ? `${color}0F` : "transparent", borderTop: "1px solid rgba(255,255,255,0.06)" }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <span className="text-base">{row.emoji}</span>
              <span className="text-white/70 text-xs font-bold text-center">{row.gender}</span>
              <span className="text-blue-400 font-black text-sm text-center">{row.nom}</span>
              <span className="font-black text-sm text-center"
                style={{ color: isOpen ? (row.changed ? "#EF4444" : "rgba(255,255,255,0.5)") : "rgba(255,255,255,0.15)" }}>
                {isOpen ? row.akk : "?"}
                {isOpen && row.changed && " ⬅️"}
              </span>
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full flex flex-col gap-2">
          <p className="text-center text-xs font-bold text-white/60">
            👆 <span style={{ color: "#EF4444" }}>der → den</span> im Akkusativ!
          </p>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: Mixed Nom/Akk MCQ ───────────────────────────────────────────────
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
          <p className="text-white font-bold text-lg">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${item.case}!` : `❌ → ${item.correct} (${item.case})`}
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

// ─── Main Component ───────────────────────────────────────────────────────────
const KasusExplorer = memo(function KasusExplorer({
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

export default KasusExplorer;
