"use client";
// LetterExplorer — Island i1: Buchstaben (Letters)
// Teaches: vowels (A E I O U), uppercase/lowercase, alphabet order
// Pure guided discovery — no wrong answers, step-by-step.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Letter Explorer",
    round1Title: "The Alphabet",
    round1Hint: "Tap each vowel — A E I O U!",
    round1Reveal: "Great! These are vowels!",
    vokal: "Vowel",
    konsonant: "Consonant",
    round2Title: "Vowel or Consonant?",
    round2Hint: "Is this letter a vowel or a consonant?",
    round3Title: "Big & Small Letters",
    round3Hint: "Tap the matching lowercase letter!",
    round4Title: "ABC Order",
    round4Hint: "Put the letters in ABC order — tap in order!",
    round4Reveal: "Correct ABC order!",
    round5Title: "Quick Review",
    round5Hint: "Tap all the vowels!",
    well: "Well done!",
    next: "Next",
    finish: "Finished!",
    tapReveal: "See the answer",
  },
  hu: {
    title: "Betű felfedező",
    round1Title: "Az ábécé",
    round1Hint: "Koppints minden magánhangzóra — A E I O U!",
    round1Reveal: "Szuper! Ezek a magánhangzók!",
    vokal: "Magánhangzó",
    konsonant: "Mássalhangzó",
    round2Title: "Magánhangzó vagy mássalhangzó?",
    round2Hint: "Ez a betű magánhangzó vagy mássalhangzó?",
    round3Title: "Nagy és kis betűk",
    round3Hint: "Koppints a megfelelő kisbetűre!",
    round4Title: "ÁBÉ sorrend",
    round4Hint: "Rendezd ábécé sorba — koppints sorban!",
    round4Reveal: "Helyes ábécé sorrend!",
    round5Title: "Gyors összefoglalás",
    round5Hint: "Koppints minden magánhangzóra!",
    well: "Remek!",
    next: "Tovább",
    finish: "Vége!",
    tapReveal: "Mutasd a választ",
  },
  de: {
    title: "Buchstaben-Entdecker",
    round1Title: "Das Alphabet",
    round1Hint: "Tippe auf jeden Vokal — A E I O U!",
    round1Reveal: "Super! Das sind Vokale!",
    vokal: "Vokal",
    konsonant: "Konsonant",
    round2Title: "Vokal oder Konsonant?",
    round2Hint: "Ist dieser Buchstabe ein Vokal oder Konsonant?",
    round3Title: "Groß- und Kleinbuchstaben",
    round3Hint: "Tippe auf den passenden Kleinbuchstaben!",
    round4Title: "ABC-Reihenfolge",
    round4Hint: "Bringe die Buchstaben in ABC-Reihenfolge — tippe der Reihe nach!",
    round4Reveal: "Richtige ABC-Reihenfolge!",
    round5Title: "Schnelle Wiederholung",
    round5Hint: "Tippe alle Vokale an!",
    well: "Toll gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    tapReveal: "Antwort zeigen",
  },
  ro: {
    title: "Exploratorul literelor",
    round1Title: "Alfabetul",
    round1Hint: "Atinge fiecare vocală — A E I O U!",
    round1Reveal: "Super! Acestea sunt vocale!",
    vokal: "Vocală",
    konsonant: "Consoană",
    round2Title: "Vocală sau consoană?",
    round2Hint: "Această literă este vocală sau consoană?",
    round3Title: "Litere mari și mici",
    round3Hint: "Atinge litera mică potrivită!",
    round4Title: "Ordinea alfabetului",
    round4Hint: "Pune literele în ordine — atinge în ordine!",
    round4Reveal: "Ordinea corectă!",
    round5Title: "Recapitulare rapidă",
    round5Hint: "Atinge toate vocalele!",
    well: "Bravo!",
    next: "Înainte",
    finish: "Gata!",
    tapReveal: "Arată răspunsul",
  },
};

const VOWELS = new Set(["A", "E", "I", "O", "U"]);
const ALPHABET_SAMPLE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const VOKAL_COLOR = "#FF2D78";
const KONS_COLOR = "#00D4FF";

// Round 2: single letter classification
const CLASSIFY_LETTERS = ["A", "B", "E", "K", "I", "T", "O", "M", "U", "R"];

// Round 3: uppercase → lowercase pairs
const UPPER_LOWER_PAIRS: [string, string][] = [
  ["A", "a"], ["B", "b"], ["E", "e"], ["K", "k"], ["M", "m"],
];

// Round 4: 4-letter sets to sort
const SORT_SETS: string[][] = [
  ["D", "A", "C", "B"],
  ["G", "E", "H", "F"],
  ["K", "I", "L", "J"],
];

// Round 5: mixed 8 letters, tap the vowels
const REVIEW_LETTERS = ["E", "T", "A", "N", "I", "S", "O", "R"];

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

// ─── Round 1: Tap vowels in alphabet ─────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<string>>(new Set());
  const allVowelsTapped = ["A", "E", "I", "O", "U"].every(v => tapped.has(v));

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {ALPHABET_SAMPLE.map(letter => {
          const isVokal = VOWELS.has(letter);
          const isTapped = tapped.has(letter);
          const isCorrectTap = isVokal && isTapped;
          return (
            <motion.button key={letter}
              onClick={() => { if (isVokal) setTapped(prev => new Set([...prev, letter])); }}
              className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-base"
              style={{
                background: isCorrectTap ? `${VOKAL_COLOR}33` : "rgba(255,255,255,0.06)",
                border: `2px solid ${isCorrectTap ? VOKAL_COLOR : "rgba(255,255,255,0.15)"}`,
                color: isCorrectTap ? VOKAL_COLOR : "rgba(255,255,255,0.7)",
                boxShadow: isCorrectTap ? `0 0 12px ${VOKAL_COLOR}55` : "none",
              }}
              animate={isCorrectTap ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.25 }}>
              {letter}
            </motion.button>
          );
        })}
      </div>
      {allVowelsTapped && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-2xl px-4 py-3 text-center"
          style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
          <p className="text-[#00FF88] font-black">🎉 {lbl.round1Reveal}</p>
          <p className="text-white/50 text-xs mt-1">A · E · I · O · U</p>
        </motion.div>
      )}
      {allVowelsTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 2: Classify letters ────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const letter = CLASSIFY_LETTERS[idx];
  const isVokal = VOWELS.has(letter);

  const handleChoice = (type: "vokal" | "konsonant") => {
    if (choice) return;
    setChoice(type);
    setTimeout(() => {
      if (idx + 1 >= CLASSIFY_LETTERS.length) {
        setDone(true);
      } else {
        setIdx(i => i + 1);
        setChoice(null);
      }
    }, 800);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🌟</div>
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
        {CLASSIFY_LETTERS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={letter} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          className="w-24 h-24 rounded-3xl flex items-center justify-center text-6xl font-black"
          style={{
            background: choice
              ? (isVokal ? `${VOKAL_COLOR}22` : `${KONS_COLOR}22`)
              : "rgba(255,255,255,0.06)",
            border: `3px solid ${choice ? (isVokal ? VOKAL_COLOR : KONS_COLOR) : "rgba(255,255,255,0.2)"}`,
            color: choice ? (isVokal ? VOKAL_COLOR : KONS_COLOR) : "white",
          }}>
          {letter}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {(["vokal", "konsonant"] as const).map(type => (
          <motion.button key={type} onClick={() => handleChoice(type)}
            className="flex-1 py-4 rounded-2xl font-black text-base"
            style={{
              background: choice === type
                ? (type === "vokal" ? `${VOKAL_COLOR}33` : `${KONS_COLOR}33`)
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${choice === type
                ? (type === "vokal" ? VOKAL_COLOR : KONS_COLOR)
                : "rgba(255,255,255,0.15)"}`,
              color: type === "vokal" ? VOKAL_COLOR : KONS_COLOR,
            }}
            whileTap={!choice ? { scale: 0.95 } : {}}>
            {type === "vokal" ? `🔴 ${lbl.vokal}` : `🔵 ${lbl.konsonant}`}
          </motion.button>
        ))}
      </div>
      {choice && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-black text-lg"
          style={{ color: isVokal ? VOKAL_COLOR : KONS_COLOR }}>
          {letter} = {isVokal ? lbl.vokal : lbl.konsonant} {isVokal ? "🔴" : "🔵"}
        </motion.p>
      )}
    </div>
  );
}

// ─── Round 3: Match uppercase to lowercase ────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [pairIdx, setPairIdx] = useState(0);
  const [shuffled] = useState(() =>
    [...UPPER_LOWER_PAIRS[0][1] ? UPPER_LOWER_PAIRS.map(p => p[1]) : []].sort(() => Math.random() - 0.5)
  );
  const [choices] = useState(() => UPPER_LOWER_PAIRS.map(([, lower]) => {
    const opts = [lower, ...UPPER_LOWER_PAIRS.filter(p => p[1] !== lower).slice(0, 2).map(p => p[1])].sort(() => Math.random() - 0.5);
    return opts;
  }));
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  void shuffled;

  const pair = UPPER_LOWER_PAIRS[pairIdx];
  const handleSelect = (lower: string) => {
    if (selected) return;
    setSelected(lower);
    setTimeout(() => {
      if (pairIdx + 1 >= UPPER_LOWER_PAIRS.length) setDone(true);
      else { setPairIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">✨</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  const correct = pair[1];
  const isCorrect = selected === correct;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 mb-1">
        {UPPER_LOWER_PAIRS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < pairIdx ? "#00FF88" : i === pairIdx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={pair[0]} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="w-24 h-24 rounded-3xl flex items-center justify-center text-6xl font-black"
          style={{ background: "rgba(255,255,255,0.06)", border: `3px solid ${color}60`, color }}>
          {pair[0]}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 justify-center">
        {choices[pairIdx].map(lower => (
          <motion.button key={lower} onClick={() => handleSelect(lower)}
            className="w-16 h-16 rounded-2xl font-black text-3xl flex items-center justify-center"
            style={{
              background: selected === lower
                ? (isCorrect && lower === correct ? "rgba(0,255,136,0.2)" : lower === correct && selected ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === lower
                ? (lower === correct ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === lower ? (lower === correct ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {lower}
          </motion.button>
        ))}
      </div>
      {selected && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-black text-lg" style={{ color: isCorrect ? "#00FF88" : "#FF2D78" }}>
          {pair[0]} = {correct} {isCorrect ? "✅" : ""}
        </motion.p>
      )}
    </div>
  );
}

// ─── Round 4: Put letters in ABC order ────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [setIdx, setSetIdx] = useState(0);
  const [tapped, setTapped] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);
  const currentSet = SORT_SETS[setIdx];
  const sorted = [...currentSet].sort();
  const allTapped = tapped.length === currentSet.length;
  const isCorrect = tapped.join("") === sorted.join("");

  const handleTap = (letter: string) => {
    if (tapped.includes(letter) || revealed) return;
    setTapped(prev => [...prev, letter]);
  };

  const handleNext = () => {
    if (setIdx + 1 >= SORT_SETS.length) setDone(true);
    else { setSetIdx(i => i + 1); setTapped([]); setRevealed(false); }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🏆</div>
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
        {SORT_SETS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < setIdx ? "#00FF88" : i === setIdx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      {/* Tapped sequence */}
      <div className="flex gap-2 h-12 items-center justify-center">
        {Array.from({ length: currentSet.length }, (_, i) => (
          <div key={i} className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-2xl"
            style={{
              background: tapped[i] ? `${color}22` : "rgba(255,255,255,0.04)",
              border: `2px solid ${tapped[i] ? color : "rgba(255,255,255,0.15)"}`,
              color: tapped[i] ? color : "transparent",
            }}>
            {tapped[i] ?? ""}
          </div>
        ))}
      </div>
      {/* Letter buttons */}
      <div className="flex gap-3 justify-center">
        {currentSet.map(letter => (
          <motion.button key={letter}
            onClick={() => handleTap(letter)}
            disabled={tapped.includes(letter)}
            className="w-14 h-14 rounded-2xl font-black text-3xl flex items-center justify-center"
            style={{
              background: tapped.includes(letter) ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.08)",
              border: `2px solid ${tapped.includes(letter) ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.25)"}`,
              color: tapped.includes(letter) ? "rgba(255,255,255,0.15)" : "white",
              opacity: tapped.includes(letter) ? 0.4 : 1,
            }}
            whileTap={!tapped.includes(letter) ? { scale: 0.9 } : {}}>
            {letter}
          </motion.button>
        ))}
      </div>
      {allTapped && !revealed && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => setRevealed(true)}
          className="w-full py-3 rounded-2xl font-black text-white text-sm"
          style={{ background: `${color}22`, border: `2px solid ${color}55` }}
          whileTap={{ scale: 0.97 }}>
          {lbl.tapReveal}
        </motion.button>
      )}
      {revealed && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col gap-2 items-center">
          <div className="w-full rounded-2xl px-4 py-3 text-center"
            style={{ background: isCorrect ? "rgba(0,255,136,0.08)" : `${color}11`, border: `2px solid ${isCorrect ? "rgba(0,255,136,0.3)" : `${color}40`}` }}>
            <p className="font-bold text-sm" style={{ color: isCorrect ? "#00FF88" : "white" }}>
              {lbl.round4Reveal}: {sorted.join(" → ")}
            </p>
          </div>
          <NextBtn onClick={handleNext} label={setIdx + 1 >= SORT_SETS.length ? lbl.finish : lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: Quick review — tap all vowels ───────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [tapped, setTapped] = useState<Set<string>>(new Set());
  const vowelsInReview = REVIEW_LETTERS.filter(l => VOWELS.has(l));
  const allVowelsTapped = vowelsInReview.every(v => tapped.has(v));

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {REVIEW_LETTERS.map((letter, i) => {
          const isV = VOWELS.has(letter);
          const isTapped = tapped.has(letter);
          return (
            <motion.button key={i} onClick={() => { if (isV) setTapped(prev => new Set([...prev, letter])); }}
              className="w-14 h-14 rounded-2xl font-black text-3xl flex items-center justify-center"
              style={{
                background: isTapped ? `${VOKAL_COLOR}33` : "rgba(255,255,255,0.06)",
                border: `2px solid ${isTapped ? VOKAL_COLOR : "rgba(255,255,255,0.15)"}`,
                color: isTapped ? VOKAL_COLOR : "white",
                boxShadow: isTapped ? `0 0 14px ${VOKAL_COLOR}55` : "none",
              }}
              animate={isTapped ? { scale: [1, 1.18, 1] } : {}}
              transition={{ duration: 0.22 }}>
              {letter}
            </motion.button>
          );
        })}
      </div>
      <div className="text-white/50 text-xs font-bold">
        {tapped.size} / {vowelsInReview.length} ✅
      </div>
      {allVowelsTapped && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="w-full flex flex-col gap-3 items-center">
          <div className="w-full rounded-2xl px-4 py-3 text-center"
            style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
            <p className="text-[#00FF88] font-black text-lg">🎉 {lbl.well}</p>
          </div>
          <NextBtn onClick={onDone} label={lbl.finish} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const LetterExplorer = memo(function LetterExplorer({
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

export default LetterExplorer;
