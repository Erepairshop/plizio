"use client";
// KasusExplorer2 — Island i2: Dativ & Genitiv (K4)
// Teaches: Dativ (Wem?), Dativ prepositions, Genitiv (Wessen?), full declension table

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Dative & Genitive Explorer",
    round1Title: "Dative — For Whom?",
    round1Hint: "Tap each sentence to label the Dativ parts.",
    round2Title: "Dativ Prepositions",
    round2Hint: "These prepositions always use Dativ! Tap to learn each one.",
    round3Title: "Genitive — Whose?",
    round3Hint: "Tap to reveal the Genitiv part in each sentence.",
    round4Title: "Full Declension Table",
    round4Hint: "Tap each row to reveal all 4 cases.",
    round5Title: "Preposition Challenge",
    round5Hint: "Choose the correct article after the Dativ preposition.",
    discovery: "💡 Dativ answers 'to whom?' or 'where?'. The articles change: der→dem, die→der, das→dem. Many prepositions require Dativ!",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    dativ: "Dativ",
    genitiv: "Genitiv",
  },
  hu: {
    title: "Dativ & Genitiv felfedező",
    round1Title: "Dativ — Kinek?",
    round1Hint: "Koppints minden mondatra a Dativ részek megjelöléséhez.",
    round2Title: "Dativ elöljárók",
    round2Hint: "Ezek az elöljárók mindig Dativot vonzanak! Koppints mindegyikre.",
    round3Title: "Genitiv — Kinek a…?",
    round3Hint: "Koppints a Genitiv rész felfedéséhez.",
    round4Title: "Teljes ragozási tábla",
    round4Hint: "Koppints minden sorra a 4 eset megjelenítéséhez.",
    round5Title: "Elöljáró kihívás",
    round5Hint: "Válaszd ki a helyes névelőt a Dativ elöljáró után.",
    discovery: "💡 A Dativ a 'kinek?' vagy 'hol?' kérdésre válaszol. A névelők változnak: der→dem, die→der, das→dem. Sok elöljáró Dativot kíván!",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    dativ: "Dativ",
    genitiv: "Genitiv",
  },
  de: {
    title: "Dativ & Genitiv-Entdecker",
    round1Title: "Dativ — Wem?",
    round1Hint: "Tippe auf jeden Satz, um den Dativ-Teil zu markieren.",
    round2Title: "Dativ-Präpositionen",
    round2Hint: "Diese Präpositionen verlangen immer den Dativ! Tippe, um sie zu lernen.",
    round3Title: "Genitiv — Wessen?",
    round3Hint: "Tippe, um den Genitiv-Teil im Satz aufzudecken.",
    round4Title: "Vollständige Deklination",
    round4Hint: "Tippe auf jede Zeile, um alle 4 Fälle anzuzeigen.",
    round5Title: "Präpositions-Herausforderung",
    round5Hint: "Wähle den richtigen Artikel nach der Dativ-Präposition.",
    discovery: "💡 Dativ antwortet auf 'wem?' oder 'wo?'. Die Artikel wechseln: der→dem, die→der, das→dem. Viele Präpositionen verlangen Dativ!",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    dativ: "Dativ",
    genitiv: "Genitiv",
  },
  ro: {
    title: "Exploratorul Dativ & Genitiv",
    round1Title: "Dativ — Cui?",
    round1Hint: "Atinge fiecare propoziție pentru a marca partea de Dativ.",
    round2Title: "Prepoziții cu Dativ",
    round2Hint: "Aceste prepoziții cer întotdeauna Dativul! Atinge pentru a le învăța.",
    round3Title: "Genitiv — Al cui?",
    round3Hint: "Atinge pentru a dezvălui partea de Genitiv din propoziție.",
    round4Title: "Tabel complet de declinare",
    round4Hint: "Atinge fiecare rând pentru a afișa toate 4 cazuri.",
    round5Title: "Provocarea prepozițiilor",
    round5Hint: "Alege articolul corect după prepoziția de Dativ.",
    discovery: "💡 Dativul răspunde la 'cui?' sau 'unde?'. Articolele se schimbă: der→dem, die→der, das→dem. Multe prepoziții cer Dativul!",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    dativ: "Dativ",
    genitiv: "Genitiv",
  },
};

const DAT_SENTENCES = [
  { sentence: "Ich helfe dem Mann.", dativPart: "dem Mann", emoji: "🤝" },
  { sentence: "Sie gibt der Katze Milch.", dativPart: "der Katze", emoji: "🐱" },
  { sentence: "Er zeigt dem Kind den Weg.", dativPart: "dem Kind", emoji: "👦" },
];

const DAT_PREPS = [
  { prep: "mit", example: "Ich fahre mit dem Bus.", emoji: "🚌" },
  { prep: "von", example: "Das ist ein Geschenk von der Lehrerin.", emoji: "🎁" },
  { prep: "bei", example: "Ich bin bei dem Arzt.", emoji: "🏥" },
  { prep: "nach", example: "Er geht nach dem Unterricht.", emoji: "🏫" },
  { prep: "aus", example: "Die Katze kommt aus dem Haus.", emoji: "🏠" },
  { prep: "zu", example: "Ich gehe zu dem Freund.", emoji: "👫" },
];

const GEN_SENTENCES = [
  { sentence: "Das ist das Buch des Lehrers.", genitivPart: "des Lehrers", emoji: "📚" },
  { sentence: "Die Farbe der Blume ist rot.", genitivPart: "der Blume", emoji: "🌸" },
  { sentence: "Das Auto des Vaters ist neu.", genitivPart: "des Vaters", emoji: "🚗" },
];

const FULL_TABLE = [
  { gender: "maskulin ♂️", nom: "der", akk: "den", dat: "dem", gen: "des" },
  { gender: "feminin ♀️", nom: "die", akk: "die", dat: "der", gen: "der" },
  { gender: "neutrum ⚥", nom: "das", akk: "das", dat: "dem", gen: "des" },
];

const PREP_QUIZ = [
  { sentence: "Er fährt mit ___ Zug.", prep: "mit (Dativ)", correct: "dem", options: ["der", "dem", "den"] },
  { sentence: "Sie kommt aus ___ Schule.", prep: "aus (Dativ)", correct: "der", options: ["der", "die", "den"] },
  { sentence: "Das Buch gehört zu ___ Kind.", prep: "zu (Dativ)", correct: "dem", options: ["das", "dem", "den"] },
  { sentence: "Er wohnt bei ___ Oma.", prep: "bei (Dativ)", correct: "der", options: ["der", "die", "das"] },
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

// ─── Round 1: Dativ sentences ─────────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= DAT_SENTENCES.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {DAT_SENTENCES.map((item, i) => {
          const isOpen = revealed.has(i);
          const parts = item.sentence.split(item.dativPart);
          return (
            <motion.button key={i}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{item.emoji}</span>
                <p className="text-white font-bold text-sm">
                  {parts[0]}
                  <span style={{ color: isOpen ? color : "white" }} className="font-black">{item.dativPart}</span>
                  {parts[1]}
                </p>
              </div>
              {isOpen && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-xs font-bold px-2 py-0.5 rounded-lg"
                  style={{ background: `${color}22`, color }}>
                  {lbl.dativ}: {item.dativPart}
                </motion.span>
              )}
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

// ─── Round 2: Dativ prepositions ──────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= DAT_PREPS.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {DAT_PREPS.map((item, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={item.prep}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.96 } : {}}>
              <div className="flex items-center gap-1">
                <span className="text-lg">{item.emoji}</span>
                <span className="font-black text-base" style={{ color }}>{item.prep}</span>
              </div>
              {isOpen ? (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-white/70 text-[11px] leading-tight">{item.example}</motion.p>
              ) : (
                <p className="text-white/30 text-xs">{lbl.tapToReveal}</p>
              )}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full flex flex-col gap-2">
          <motion.div className="w-full rounded-2xl px-4 py-3 text-center"
            style={{ background: "rgba(180,77,255,0.1)", border: "2px solid rgba(180,77,255,0.3)" }}>
            <p className="text-[#B44DFF] font-black text-sm">{lbl.discovery}</p>
          </motion.div>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 3: Genitiv reveal ──────────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);

  const item = GEN_SENTENCES[idx];
  const handleNext = () => {
    if (idx + 1 >= GEN_SENTENCES.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1">
        {GEN_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <span className="text-4xl">{item.emoji}</span>
          <p className="text-white font-bold text-base text-center">{item.sentence}</p>
          {!tapped ? (
            <motion.button onClick={() => setTapped(true)}
              className="px-5 py-2 rounded-xl text-sm font-black"
              style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
              whileTap={{ scale: 0.95 }}>
              {lbl.tapToReveal}
            </motion.button>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 rounded-xl text-sm font-black"
              style={{ background: `${color}33`, border: `2px solid ${color}`, color }}>
              {lbl.genitiv}: {item.genitivPart}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: Full declension table ───────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= FULL_TABLE.length;

  const caseColors = ["#3B82F6", "#EF4444", "#10B981", "#F59E0B"];

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="w-full rounded-2xl overflow-hidden" style={{ border: `2px solid ${color}33` }}>
        <div className="grid grid-cols-5 bg-white/5 px-2 py-2">
          <span className="text-white/40 text-[10px] font-bold"></span>
          {["Nom", "Akk", "Dat", "Gen"].map((c, i) => (
            <span key={c} className="text-[10px] font-black text-center" style={{ color: caseColors[i] }}>{c}</span>
          ))}
        </div>
        {FULL_TABLE.map((row, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={row.gender}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full grid grid-cols-5 items-center px-2 py-2.5"
              style={{ background: isOpen ? `${color}0F` : "transparent", borderTop: "1px solid rgba(255,255,255,0.06)" }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <span className="text-white/60 text-[10px] font-bold text-left">{row.gender}</span>
              {[row.nom, row.akk, row.dat, row.gen].map((v, ci) => (
                <span key={ci} className="font-black text-sm text-center"
                  style={{ color: isOpen ? caseColors[ci] : "rgba(255,255,255,0.15)" }}>
                  {isOpen ? v : "?"}
                </span>
              ))}
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

// ─── Round 5: Preposition + case MCQ ──────────────────────────────────────────
function Round5({ color, lbl, wrongCountRef, onDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const item = PREP_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.correct) wrongCountRef.current++;
    setTimeout(() => {
      if (idx + 1 >= PREP_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {PREP_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-xs font-bold mb-1" style={{ color }}>{item.prep}</p>
          <p className="text-white font-bold text-lg text-center">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2 text-center"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
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

// ─── Main Component ───────────────────────────────────────────────────────────
const KasusExplorer2 = memo(function KasusExplorer2({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
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
        <motion.div key={round}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default KasusExplorer2;
