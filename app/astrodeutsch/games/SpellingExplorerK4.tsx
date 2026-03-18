"use client";
// SpellingExplorerK4 — Island i8: Rechtschreibung (K4)
// Teaches: das vs dass, Dehnung-h, ss vs ß, capitalization rules

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Spelling Explorer",
    round1Title: "das vs dass",
    round1Hint: "Tap each to see the rule and examples.",
    round2Title: "Silent h (Dehnung-h)",
    round2Hint: "The h stretches the vowel — tap each word!",
    round3Title: "ss vs ß",
    round3Hint: "After a long vowel or diphthong: ß. After a short vowel: ss. Tap to sort!",
    round4Title: "Capital Letters",
    round4Hint: "All nouns are capitalized! Tap the error in each sentence.",
    round5Title: "Mixed Spelling Quiz",
    round5Hint: "Choose the correct spelling.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    article: "article / pronoun",
    conjunction: "conjunction",
    longVowel: "after long vowel/diphthong",
    shortVowel: "after short vowel",
  },
  hu: {
    title: "Helyesírás felfedező",
    round1Title: "das vs dass",
    round1Hint: "Koppints mindegyikre a szabály és példák megtekintéséhez.",
    round2Title: "Néma h (Dehnung-h)",
    round2Hint: "A h megnyújtja a magánhangzót — koppints minden szóra!",
    round3Title: "ss vs ß",
    round3Hint: "Hosszú magánhangzó/kettőshangzó után: ß. Rövid magánhangzó után: ss.",
    round4Title: "Nagybetű szabályok",
    round4Hint: "Minden főnevet nagybetűvel írunk! Koppints a hibára.",
    round5Title: "Vegyes helyesírás kvíz",
    round5Hint: "Válaszd a helyes helyesírást.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    article: "névelő / névmás",
    conjunction: "kötőszó",
    longVowel: "hosszú magánhangzó után",
    shortVowel: "rövid magánhangzó után",
  },
  de: {
    title: "Rechtschreib-Entdecker",
    round1Title: "das vs dass",
    round1Hint: "Tippe auf jedes, um die Regel und Beispiele zu sehen.",
    round2Title: "Dehnungs-h",
    round2Hint: "Das h dehnt den Vokal — tippe auf jedes Wort!",
    round3Title: "ss vs ß",
    round3Hint: "Nach langem Vokal/Diphthong: ß. Nach kurzem Vokal: ss. Tippe zum Sortieren!",
    round4Title: "Groß- und Kleinschreibung",
    round4Hint: "Alle Nomen werden großgeschrieben! Tippe auf den Fehler im Satz.",
    round5Title: "Gemischtes Rechtschreib-Quiz",
    round5Hint: "Wähle die richtige Schreibweise.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    article: "Artikel / Pronomen",
    conjunction: "Konjunktion",
    longVowel: "nach langem Vokal/Diphthong",
    shortVowel: "nach kurzem Vokal",
  },
  ro: {
    title: "Exploratorul ortografiei",
    round1Title: "das vs dass",
    round1Hint: "Atinge fiecare pentru a vedea regula și exemplele.",
    round2Title: "h mut (Dehnung-h)",
    round2Hint: "h-ul alungește vocala — atinge fiecare cuvânt!",
    round3Title: "ss vs ß",
    round3Hint: "După vocală lungă/diftong: ß. După vocală scurtă: ss.",
    round4Title: "Majuscule și minuscule",
    round4Hint: "Toate substantivele se scriu cu majusculă! Atinge eroarea.",
    round5Title: "Quiz mixt de ortografie",
    round5Hint: "Alege scrierea corectă.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    article: "articol / pronume",
    conjunction: "conjuncție",
    longVowel: "după vocală lungă/diftong",
    shortVowel: "după vocală scurtă",
  },
};

const DAS_DASS = [
  {
    word: "das",
    type: "article",
    color: "#3B82F6",
    emoji: "📰",
    examples: ["Das Haus ist groß.", "Ich sehe das Kind.", "Das, was er sagt..."],
    tip: "Replaceable with 'dieses' or 'welches'",
  },
  {
    word: "dass",
    type: "conjunction",
    color: "#EC4899",
    emoji: "🔗",
    examples: ["Ich weiß, dass du kommst.", "Er sagt, dass es kalt ist."],
    tip: "Introduces a subordinate clause — NOT replaceable with 'dieses'",
  },
];

const DEHNUNG_H_WORDS = [
  { word: "Bahn", vowel: "a", silent: true, emoji: "🚂", example: "Die Bahn fährt schnell." },
  { word: "Zahl", vowel: "a", silent: true, emoji: "🔢", example: "Die Zahl ist groß." },
  { word: "Uhr", vowel: "u", silent: true, emoji: "🕐", example: "Die Uhr schlägt." },
  { word: "Mehl", vowel: "e", silent: true, emoji: "🌾", example: "Das Mehl ist weiß." },
];

const SS_SZ_WORDS = [
  { word: "Straße", rule: "sz", vowelType: "long", emoji: "🛣️" },
  { word: "Wasser", rule: "ss", vowelType: "short", emoji: "💧" },
  { word: "groß", rule: "sz", vowelType: "long", emoji: "📏" },
  { word: "essen", rule: "ss", vowelType: "short", emoji: "🍽️" },
  { word: "Fuß", rule: "sz", vowelType: "long", emoji: "🦶" },
  { word: "Fluss", rule: "ss", vowelType: "short", emoji: "🌊" },
];

const CAPITAL_SENTENCES = [
  { sentence: "Der hund bellt sehr laut.", error: "hund", correct: "Hund" },
  { sentence: "Wir gehen in die schule.", error: "schule", correct: "Schule" },
  { sentence: "Das buch liegt auf dem tisch.", errors: ["buch", "tisch"] },
];

const SPELLING_QUIZ = [
  { options: ["das", "dass"], correct: "dass", context: "Ich hoffe, ___ du kommst." },
  { options: ["Straße", "Strasse"], correct: "Straße", context: "Wir wohnen in einer ___." },
  { options: ["wasser", "Wasser"], correct: "Wasser", context: "Ich trinke ___." },
  { options: ["das", "dass"], correct: "das", context: "___ Buch liegt hier." },
  { options: ["essen", "eßen"], correct: "essen", context: "Wir ___ Mittag." },
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

// ─── Round 1: das vs dass ─────────────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= DAS_DASS.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {DAS_DASS.map((item, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={item.word}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 flex flex-col items-start gap-2 text-left"
              style={{
                background: isOpen ? `${item.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? item.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{item.emoji}</span>
                <span className="font-black text-2xl" style={{ color: item.color }}>{item.word}</span>
                <span className="text-xs text-white/50">= {lbl[item.type]}</span>
              </div>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="w-full">
                  {item.examples.map((ex, j) => (
                    <p key={j} className="text-white/80 text-sm">{ex}</p>
                  ))}
                  <p className="text-white/40 text-xs mt-1 italic">{item.tip}</p>
                </motion.div>
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

// ─── Round 2: Dehnung-h ───────────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= DEHNUNG_H_WORDS.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {DEHNUNG_H_WORDS.map((item, i) => {
          const isOpen = revealed.has(i);
          // split the h out of the word for highlighting
          const hIdx = item.word.indexOf("h");
          const before = item.word.slice(0, hIdx);
          const after = item.word.slice(hIdx + 1);

          return (
            <motion.button key={item.word}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="rounded-2xl p-3 flex flex-col items-center gap-1"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.96 } : {}}>
              <span className="text-2xl">{item.emoji}</span>
              <p className="font-black text-lg">
                <span className="text-white">{before}</span>
                <span style={{ color: isOpen ? color : "rgba(255,255,255,0.3)", fontWeight: 900 }}>h</span>
                <span className="text-white">{after}</span>
              </p>
              {isOpen && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-white/60 text-[10px] text-center">{item.example}</motion.p>
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

// ─── Round 3: ss vs ß sort ────────────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= SS_SZ_WORDS.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-2 w-full text-xs font-bold text-center mb-1">
        <div className="flex-1 py-1 rounded-lg" style={{ background: "#F59E0B22", color: "#F59E0B" }}>
          ß — {lbl.longVowel}
        </div>
        <div className="flex-1 py-1 rounded-lg" style={{ background: "#3B82F622", color: "#3B82F6" }}>
          ss — {lbl.shortVowel}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full">
        {SS_SZ_WORDS.map((item, i) => {
          const isOpen = revealed.has(i);
          const ruleColor = item.rule === "sz" ? "#F59E0B" : "#3B82F6";
          return (
            <motion.button key={item.word}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="rounded-xl p-2 flex flex-col items-center gap-1"
              style={{
                background: isOpen ? `${ruleColor}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? ruleColor : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.95 } : {}}>
              <span className="text-xl">{item.emoji}</span>
              <span className="font-black text-sm text-white">{item.word}</span>
              {isOpen && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-[10px] font-black" style={{ color: ruleColor }}>
                  {item.rule === "sz" ? "ß" : "ss"}
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

// ─── Round 4: Find the capitalization error ───────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);

  const item = CAPITAL_SENTENCES[idx];
  const errors: string[] = "errors" in item ? (item.errors ?? []) : [item.error ?? ""];
  const handleNext = () => {
    if (idx + 1 >= CAPITAL_SENTENCES.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1">
        {CAPITAL_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          {!tapped ? (
            <>
              <p className="text-white font-bold text-base text-center">{item.sentence}</p>
              <motion.button onClick={() => setTapped(true)}
                className="px-5 py-2 rounded-xl text-sm font-black"
                style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
                whileTap={{ scale: 0.95 }}>
                {lbl.tapToReveal}
              </motion.button>
            </>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-2">
              <p className="text-base font-bold text-center">
                {item.sentence.split(" ").map((word, j) => {
                  const isError = errors.includes(word);
                  const fixedWord = isError ? word.charAt(0).toUpperCase() + word.slice(1) : word;
                  return (
                    <span key={j}>
                      <span style={{ color: isError ? "#00FF88" : "rgba(255,255,255,0.8)" }}
                        className={isError ? "font-black underline" : ""}>
                        {fixedWord}
                      </span>
                      {" "}
                    </span>
                  );
                })}
              </p>
              <p className="text-white/50 text-xs font-bold">
                {errors.map(e => `${e} → ${e.charAt(0).toUpperCase() + e.slice(1)}`).join(", ")}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 5: Mixed spelling MCQ ──────────────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const item = SPELLING_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= SPELLING_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {SPELLING_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.context} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-lg">{item.context}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
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

// ─── Main Component ───────────────────────────────────────────────────────────
const SpellingExplorerK4 = memo(function SpellingExplorerK4({
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

export default SpellingExplorerK4;
