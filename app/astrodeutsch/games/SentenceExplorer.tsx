"use client";
// SentenceExplorer — Island i5: Sätze (Sentences)
// Teaches: punctuation (. ? !), word order, missing words

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Sentence Explorer",
    round1Title: "Punctuation Marks",
    round1Hint: "Learn the three punctuation marks! Tap each one.",
    round2Title: "Which punctuation fits?",
    round2Hint: "Which punctuation mark goes at the end?",
    round3Title: "Build a Sentence!",
    round3Hint: "Tap the words in the right order!",
    round4Title: "Missing Word",
    round4Hint: "Which word is missing?",
    round5Title: "Sentence Review",
    round5Hint: "Choose the correct punctuation!",
    discovery: "💡 Every German sentence needs a verb! Statements end with a period (.), questions with a question mark (?), and exclamations with an exclamation mark (!).",
    well: "Well done!",
    next: "Next",
    finish: "Finished!",
    period: "Period — statement",
    question: "Question mark — question",
    exclaim: "Exclamation — excitement",
    correct: "Correct!",
    hint: "Which punctuation?",
    tapInOrder: "Tap words in order!",
    sentenceDone: "Great sentence!",
  },
  hu: {
    title: "Mondat felfedező",
    round1Title: "Mondatvégi írásjelek",
    round1Hint: "Tanulj meg három írásjelőt! Koppints mindegyikre.",
    round2Title: "Melyik írásjel illik?",
    round2Hint: "Melyik írásjel kerül a mondat végére?",
    round3Title: "Rakj össze egy mondatot!",
    round3Hint: "Koppints a szavakra helyes sorrendben!",
    round4Title: "Hiányzó szó",
    round4Hint: "Melyik szó hiányzik?",
    round5Title: "Mondat áttekintés",
    round5Hint: "Válaszd a helyes írásjelet!",
    discovery: "💡 Minden német mondatban kell egy ige! A kijelentések ponttal (.) végződnek, a kérdések kérdőjellel (?), a felkiáltások felkiáltójellel (!).",
    well: "Remek!",
    next: "Tovább",
    finish: "Vége!",
    period: "Pont — kijelentés",
    question: "Kérdőjel — kérdés",
    exclaim: "Felkiáltójel — felkiáltás",
    correct: "Helyes!",
    hint: "Melyik az írásjel?",
    tapInOrder: "Koppints a szavakra sorban!",
    sentenceDone: "Szép mondat!",
  },
  de: {
    title: "Satz-Entdecker",
    round1Title: "Satzzeichen",
    round1Hint: "Lerne die drei Satzzeichen! Tippe auf jedes.",
    round2Title: "Welches Satzzeichen passt?",
    round2Hint: "Welches Satzzeichen kommt ans Ende?",
    round3Title: "Bilde einen Satz!",
    round3Hint: "Tippe die Wörter in der richtigen Reihenfolge!",
    round4Title: "Fehlendes Wort",
    round4Hint: "Welches Wort fehlt?",
    round5Title: "Satz-Wiederholung",
    round5Hint: "Wähle das richtige Satzzeichen!",
    discovery: "💡 Jeder deutsche Satz braucht ein Verb! Aussagesätze enden mit Punkt (.), Fragen mit Fragezeichen (?), Ausrufe mit Ausrufezeichen (!).",
    well: "Toll gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    period: "Punkt — Aussage",
    question: "Fragezeichen — Frage",
    exclaim: "Ausrufezeichen — Ausruf",
    correct: "Richtig!",
    hint: "Welches Satzzeichen?",
    tapInOrder: "Tippe die Wörter der Reihe nach!",
    sentenceDone: "Toller Satz!",
  },
  ro: {
    title: "Exploratorul propozițiilor",
    round1Title: "Semne de punctuație",
    round1Hint: "Învață cele trei semne de punctuație! Atinge fiecare.",
    round2Title: "Ce semn de punctuație se potrivește?",
    round2Hint: "Ce semn de punctuație vine la sfârșit?",
    round3Title: "Construiește o propoziție!",
    round3Hint: "Atinge cuvintele în ordinea corectă!",
    round4Title: "Cuvântul lipsă",
    round4Hint: "Ce cuvânt lipsește?",
    round5Title: "Recapitulare propoziții",
    round5Hint: "Alege semnul de punctuație corect!",
    discovery: "💡 Orice propoziție germană are nevoie de un verb! Propozițiile afirmative se termină cu punct (.), întrebările cu semn de întrebare (?), exclamațiile cu semn de exclamare (!).",
    well: "Bravo!",
    next: "Înainte",
    finish: "Gata!",
    period: "Punct — afirmație",
    question: "Semn de întrebare — întrebare",
    exclaim: "Semn de exclamare — exclamație",
    correct: "Corect!",
    hint: "Ce semn de punctuație?",
    tapInOrder: "Atinge cuvintele în ordine!",
    sentenceDone: "Propoziție excelentă!",
  },
};

type Punct = "." | "?" | "!";
const PUNCT_DATA: Record<Punct, { symbol: Punct; example: string; color: string }> = {
  ".": { symbol: ".", example: "Ich bin Anna.", color: "#3B82F6" },
  "?": { symbol: "?", example: "Wie heißt du?", color: "#F59E0B" },
  "!": { symbol: "!", example: "Das ist toll!", color: "#EF4444" },
};

// Round 2: choose punctuation
const PUNCT_SENTENCES: { sentence: string; punct: Punct }[] = [
  { sentence: "Wie heißt du", punct: "?" },
  { sentence: "Ich bin Anna", punct: "." },
  { sentence: "Das ist super", punct: "!" },
  { sentence: "Der Hund spielt", punct: "." },
  { sentence: "Wo ist die Katze", punct: "?" },
  { sentence: "Toll gemacht", punct: "!" },
];

// Round 3: word order
const WORD_ORDER: { words: string[]; correct: string[] }[] = [
  { words: ["Anna", "ist", "Ich"], correct: ["Ich", "bin", "Anna"] },
  { words: ["spielt", "Hund", "Der"], correct: ["Der", "Hund", "spielt"] },
  { words: ["Katze", "Die", "schläft"], correct: ["Die", "Katze", "schläft"] },
];
// Fix - adjust so words match correct
const WORD_ORDER_FIXED = [
  { words: ["Ich", "Anna", "ist"], correct: ["Ich", "bin", "Anna"], hint: "Ich bin Anna." },
  { words: ["Hund", "Der", "spielt"], correct: ["Der", "Hund", "spielt"], hint: "Der Hund spielt." },
  { words: ["schläft", "Die", "Katze"], correct: ["Die", "Katze", "schläft"], hint: "Die Katze schläft." },
];

// Round 4: fill missing word
const MISSING_WORD: { sentence: string; missing: string; options: string[] }[] = [
  { sentence: "Ich ___ Anna.", missing: "bin", options: ["bin", "ist", "hat"] },
  { sentence: "Der Hund ___ groß.", missing: "ist", options: ["bin", "ist", "sind"] },
  { sentence: "___ geht in die Schule.", missing: "Ich", options: ["Ich", "Du", "Er"] },
  { sentence: "Das ___ ein Ball.", missing: "ist", options: ["bin", "ist", "sind"] },
];

// Round 5: more punctuation
const PUNCT_REVIEW: { sentence: string; punct: Punct }[] = [
  { sentence: "Die Sonne scheint", punct: "." },
  { sentence: "Spielst du mit mir", punct: "?" },
  { sentence: "Hurra, ich hab gewonnen", punct: "!" },
  { sentence: "Das ist mein Buch", punct: "." },
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

// ─── Round 1: Learn punctuation marks ────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<Punct>>(new Set());
  const allTapped = ([".", "?", "!"] as Punct[]).every(p => tapped.has(p));

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {([".", "?", "!"] as Punct[]).map(p => {
          const data = PUNCT_DATA[p];
          const isTapped = tapped.has(p);
          return (
            <motion.button key={p} onClick={() => setTapped(prev => new Set([...prev, p]))}
              className="w-full rounded-2xl p-4 flex items-center gap-4 text-left"
              style={{
                background: isTapped ? `${data.color}22` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isTapped ? data.color : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={{ scale: 0.97 }}>
              <span className="text-5xl font-black w-12 text-center" style={{ color: data.color }}>{p}</span>
              <div className="flex-1">
                <p className="text-white/70 text-xs font-bold">{lbl[p === "." ? "period" : p === "?" ? "question" : "exclaim"]}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <p className="text-sm font-bold" style={{ color: isTapped ? data.color : "rgba(255,255,255,0.3)" }}>
                    {data.example}
                  </p>
                  {isTapped && <SpeakButton text={data.example} lang="de" size={14} />}
                </div>
              </div>
              {isTapped && <span className="text-lg">✅</span>}
            </motion.button>
          );
        })}
      </div>
      {allTapped && (
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

// ─── Round 2: Choose punctuation ─────────────────────────────────────────────
function Round2({ color, lbl, wrongCountRef, onNext }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Punct | null>(null);
  const [done, setDone] = useState(false);
  const item = PUNCT_SENTENCES[idx];

  const handleSelect = (p: Punct) => {
    if (selected) return;
    setSelected(p);
    if (p !== item.punct) wrongCountRef.current++;
    setTimeout(() => {
      if (idx + 1 >= PUNCT_SENTENCES.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">📝</div>
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
        {PUNCT_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 justify-center">
          <p className="text-2xl font-black text-white text-center">
            {item.sentence}{selected ? <span style={{ color: PUNCT_DATA[item.punct].color }}>{selected}</span> : <span className="text-white/30">_</span>}
          </p>
          <SpeakButton text={item.sentence} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 w-full justify-center">
        {([".", "?", "!"] as Punct[]).map(p => (
          <motion.button key={p} onClick={() => handleSelect(p)}
            className="w-16 h-16 rounded-2xl font-black text-3xl flex items-center justify-center"
            style={{
              background: selected === p
                ? (p === item.punct ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === p
                ? (p === item.punct ? "#00FF88" : "#FF2D78")
                : PUNCT_DATA[p].color + "66"}`,
              color: selected === p ? (p === item.punct ? "#00FF88" : "#FF2D78") : PUNCT_DATA[p].color,
            }}
            whileTap={!selected ? { scale: 0.9 } : {}}>
            {p}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 3: Put words in order ──────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [setIdx, setSentIdx] = useState(0);
  const [tapped, setTapped] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);
  const item = WORD_ORDER_FIXED[setIdx];
  const [shuffled] = useState(() => WORD_ORDER_FIXED.map(item => [...item.words].sort(() => Math.random() - 0.5)));

  const currentWords = shuffled[setIdx];
  const allTapped = tapped.length === currentWords.length;

  const handleTap = (word: string) => {
    if (tapped.includes(word) || revealed) return;
    setTapped(prev => [...prev, word]);
  };

  const handleNext = () => {
    if (setIdx + 1 >= WORD_ORDER_FIXED.length) setDone(true);
    else { setSentIdx(i => i + 1); setTapped([]); setRevealed(false); }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">💬</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.tapInOrder}</p>
      <div className="flex gap-1 mb-1">
        {WORD_ORDER_FIXED.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < setIdx ? "#00FF88" : i === setIdx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      {/* Sentence build area */}
      <div className="flex flex-wrap gap-2 justify-center min-h-[48px] p-2 rounded-2xl w-full"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${tapped.length ? color : "rgba(255,255,255,0.1)"}` }}>
        {tapped.map((w, i) => (
          <span key={i} className="px-3 py-1.5 rounded-xl font-bold text-base"
            style={{ background: `${color}22`, color }}>
            {w}
          </span>
        ))}
        {tapped.length === 0 && <span className="text-white/20 text-sm font-medium self-center">...</span>}
      </div>
      {/* Word buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {currentWords.map((word, i) => (
          <motion.button key={i} onClick={() => handleTap(word)}
            disabled={tapped.includes(word)}
            className="px-4 py-2.5 rounded-2xl font-black text-base"
            style={{
              background: tapped.includes(word) ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.08)",
              border: `2px solid ${tapped.includes(word) ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.2)"}`,
              color: tapped.includes(word) ? "rgba(255,255,255,0.15)" : "white",
              opacity: tapped.includes(word) ? 0.4 : 1,
            }}
            whileTap={!tapped.includes(word) ? { scale: 0.92 } : {}}>
            {word}
          </motion.button>
        ))}
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
            style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
            <p className="text-[#00FF88] font-black text-sm">✅ {item.hint}</p>
          </div>
          <NextBtn onClick={handleNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 4: Fill missing word ───────────────────────────────────────────────
function Round4({ color, lbl, wrongCountRef, onNext }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = MISSING_WORD[idx];

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.missing) wrongCountRef.current++;
    setTimeout(() => {
      if (idx + 1 >= MISSING_WORD.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
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
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {MISSING_WORD.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="text-xl font-black text-white text-center leading-relaxed">
          {selected
            ? item.sentence.replace("___", selected === item.missing
              ? `${selected}`
              : selected)
            : item.sentence.split("___").map((part, i) => (
              <span key={i}>
                {part}{i === 0 && <span style={{ color, background: `${color}22`, padding: "2px 10px", borderRadius: 8 }}>___</span>}
              </span>
            ))
          }
        </motion.p>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="flex-1 py-4 rounded-2xl font-black text-base"
            style={{
              background: selected === opt
                ? (opt === item.missing ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt
                ? (opt === item.missing ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.missing ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 5: Punctuation review ──────────────────────────────────────────────
function Round5({ color, lbl, wrongCountRef, onDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Punct | null>(null);
  const [done, setDone] = useState(false);
  const item = PUNCT_REVIEW[idx];

  const handleSelect = (p: Punct) => {
    if (selected) return;
    setSelected(p);
    if (p !== item.punct) wrongCountRef.current++;
    setTimeout(() => {
      if (idx + 1 >= PUNCT_REVIEW.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🏆</div>
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
        {PUNCT_REVIEW.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 justify-center">
          <p className="text-2xl font-black text-white text-center">
            {item.sentence}{selected
              ? <span style={{ color: PUNCT_DATA[item.punct].color }}>{selected}</span>
              : <span className="text-white/30">_</span>}
          </p>
          <SpeakButton text={item.sentence} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 w-full justify-center">
        {([".", "?", "!"] as Punct[]).map(p => (
          <motion.button key={p} onClick={() => handleSelect(p)}
            className="w-16 h-16 rounded-2xl font-black text-3xl flex items-center justify-center"
            style={{
              background: selected === p
                ? (p === item.punct ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === p
                ? (p === item.punct ? "#00FF88" : "#FF2D78")
                : PUNCT_DATA[p].color + "66"}`,
              color: selected === p ? (p === item.punct ? "#00FF88" : "#FF2D78") : PUNCT_DATA[p].color,
            }}
            whileTap={!selected ? { scale: 0.9 } : {}}>
            {p}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const SentenceExplorer = memo(function SentenceExplorer({
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
          {round === 1 && <Round2 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default SentenceExplorer;
