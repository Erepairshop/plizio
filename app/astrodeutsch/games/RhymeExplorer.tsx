"use client";
// RhymeExplorer — Island i4: Reime (Rhymes)
// Teaches: rhyming pairs, vocabulary, simple verbs

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Rhyme Explorer",
    round1Title: "Do they rhyme?",
    round1Hint: "Do these two words rhyme? Yes or no!",
    round2Title: "Find the Rhyme!",
    round2Hint: "Which word rhymes with the first one?",
    round3Title: "Action Words",
    round3Hint: "Match the action to the picture!",
    round4Title: "Rhyme Pairs",
    round4Hint: "Find all the rhyming pairs!",
    round5Title: "Vocabulary Mix",
    round5Hint: "Which word fits the picture?",
    yes: "Yes! 🎵",
    no: "No! 🚫",
    rhymes: "They rhyme!",
    noRhyme: "No rhyme!",
    well: "Well done!",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    hint: "Listen for rhymes!",
    discovery: "💡 Words rhyme when they end with the same sound: Haus → Maus, Katze → Tatze. Rhyming helps you remember words!",
  },
  hu: {
    title: "Rím felfedező",
    round1Title: "Rímelnek?",
    round1Hint: "Ez a két szó rímel? Igen vagy nem!",
    round2Title: "Találd meg a rímet!",
    round2Hint: "Melyik szó rímel az elsővel?",
    round3Title: "Cselekvés szavak",
    round3Hint: "Párosítsd a cselekvést a képpel!",
    round4Title: "Rím párok",
    round4Hint: "Találd meg az összes rímszópárt!",
    round5Title: "Szókincs vegyes",
    round5Hint: "Melyik szó illik a képhez?",
    yes: "Igen! 🎵",
    no: "Nem! 🚫",
    rhymes: "Rímelnek!",
    noRhyme: "Nem rímelnek!",
    well: "Remek!",
    next: "Tovább",
    finish: "Vége!",
    correct: "Helyes!",
    hint: "Figyelj a rímekre!",
    discovery: "💡 A szavak akkor rímelnek, amikor ugyanazzal a hanggal végződnek: Haus → Maus, Katze → Tatze. A rímek segítenek megjegyezni a szavakat!",
  },
  de: {
    title: "Reim-Entdecker",
    round1Title: "Reimen sie sich?",
    round1Hint: "Reimen sich diese zwei Wörter? Ja oder Nein!",
    round2Title: "Finde den Reim!",
    round2Hint: "Welches Wort reimt sich auf das erste?",
    round3Title: "Aktionswörter",
    round3Hint: "Passe die Aktion zum Bild!",
    round4Title: "Reimpaare",
    round4Hint: "Finde alle Reimpaare!",
    round5Title: "Wortschatz-Mix",
    round5Hint: "Welches Wort passt zum Bild?",
    yes: "Ja! 🎵",
    no: "Nein! 🚫",
    rhymes: "Sie reimen sich!",
    noRhyme: "Kein Reim!",
    well: "Toll gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    hint: "Achte auf die Reime!",
    discovery: "💡 Wörter reimen sich, wenn sie mit dem gleichen Laut enden: Haus → Maus, Katze → Tatze. Reime helfen dir, Wörter zu merken!",
  },
  ro: {
    title: "Exploratorul rimelor",
    round1Title: "Rimează?",
    round1Hint: "Rimează aceste două cuvinte? Da sau nu!",
    round2Title: "Găsește rima!",
    round2Hint: "Care cuvânt rimează cu primul?",
    round3Title: "Cuvinte de acțiune",
    round3Hint: "Potrivește acțiunea cu imaginea!",
    round4Title: "Perechi de rime",
    round4Hint: "Găsește toate perechile de rime!",
    round5Title: "Mix vocabular",
    round5Hint: "Care cuvânt se potrivește cu imaginea?",
    yes: "Da! 🎵",
    no: "Nu! 🚫",
    rhymes: "Rimează!",
    noRhyme: "Nu rimează!",
    well: "Bravo!",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    hint: "Ascultă rimele!",
    discovery: "💡 Cuvintele rimează când se termină cu același sunet: Haus → Maus, Katze → Tatze. Rimele te ajută să ții minte cuvintele!",
  },
};

// Helper: shuffle array
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Round 1: do they rhyme? (doubled pool)
const RHYME_CHECK_POOL: { word1: string; word2: string; rhymes: boolean }[] = [
  { word1: "Hund", word2: "Mund", rhymes: true },
  { word1: "Katze", word2: "Hund", rhymes: false },
  { word1: "Haus", word2: "Maus", rhymes: true },
  { word1: "Ball", word2: "Baum", rhymes: false },
  { word1: "Nacht", word2: "acht", rhymes: true },
  { word1: "Hose", word2: "Rose", rhymes: true },
  { word1: "Bett", word2: "Nett", rhymes: true },
  { word1: "Zeit", word2: "Weit", rhymes: true },
  { word1: "Tisch", word2: "Schule", rhymes: false },
  { word1: "Fest", word2: "Rest", rhymes: true },
  { word1: "Fenster", word2: "Hammer", rhymes: false },
  { word1: "Lied", word2: "Brüder", rhymes: false },
];

// Round 2: find the rhyme from 3 choices (doubled pool)
const FIND_RHYME_POOL: { word: string; choices: string[]; answer: string }[] = [
  { word: "Baum", choices: ["Traum", "Haus", "Kind"], answer: "Traum" },
  { word: "Katze", choices: ["Hund", "Tatze", "Ball"], answer: "Tatze" },
  { word: "Nacht", choices: ["Tag", "acht", "Schule"], answer: "acht" },
  { word: "Hund", choices: ["Maus", "Mund", "Tisch"], answer: "Mund" },
  { word: "Herz", choices: ["Schmerz", "Hand", "Fuß"], answer: "Schmerz" },
  { word: "Zeit", choices: ["Welt", "Weit", "Freund"], answer: "Weit" },
  { word: "Licht", choices: ["Nacht", "Lacht", "Hand"], answer: "Lacht" },
  { word: "Fest", choices: ["Rest", "Fest", "Best"], answer: "Rest" },
];

// Round 3: verb + emoji (doubled pool)
const VERBS_POOL: { verb: string; emoji: string }[] = [
  { verb: "laufen", emoji: "🏃" },
  { verb: "springen", emoji: "🦘" },
  { verb: "essen", emoji: "🍽️" },
  { verb: "schlafen", emoji: "😴" },
  { verb: "lachen", emoji: "😄" },
  { verb: "schwimmen", emoji: "🏊" },
  { verb: "tanzen", emoji: "💃" },
  { verb: "singen", emoji: "🎤" },
  { verb: "spielen", emoji: "🎮" },
  { verb: "malen", emoji: "🎨" },
];

// Round 4: rhyme pair matching game
const RHYME_PAIRS: [string, string][] = [
  ["Hund", "Mund"],
  ["Haus", "Maus"],
  ["Baum", "Traum"],
];

// Round 5: vocab — word → emoji (doubled pool)
const VOCAB_WORDS_POOL: { word: string; emoji: string; options: string[] }[] = [
  { word: "Schule", emoji: "🏫", options: ["Schule", "Hund", "Ball"] },
  { word: "Sonne", emoji: "☀️", options: ["Mond", "Sonne", "Stern"] },
  { word: "Vogel", emoji: "🐦", options: ["Fisch", "Hund", "Vogel"] },
  { word: "Apfel", emoji: "🍎", options: ["Banane", "Apfel", "Traube"] },
  { word: "Katze", emoji: "🐱", options: ["Hund", "Katze", "Vogel"] },
  { word: "Auto", emoji: "🚗", options: ["Auto", "Fahrrad", "Bus"] },
  { word: "Baum", emoji: "🌳", options: ["Blume", "Baum", "Strauch"] },
  { word: "Haus", emoji: "🏠", options: ["Haus", "Straße", "Schule"] },
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

// ─── Round 1: Do they rhyme? ──────────────────────────────────────────────────
function Round1({
  color,
  lbl,
  wrongCountRef,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);
  const [items] = useState(() => shuffle(RHYME_CHECK_POOL).slice(0, 6));
  const item = items[idx];

  const handleSelect = (choice: boolean) => {
    if (selected !== null || feedback) return;
    const isCorrect = choice === item.rhymes;
    setSelected(choice);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: choice, correctAnswer: item.rhymes, topic: "Rhymes", lang: "de" });
    }

    setTimeout(() => {
      if (idx + 1 >= items.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🎵</div>
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
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word1 + item.word2} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }} className="flex items-center gap-3 flex-wrap justify-center">
          <div className="flex items-center gap-1">
            <span className="text-3xl font-black px-4 py-3 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.08)", color: "white" }}>{item.word1}</span>
            <SpeakButton text={item.word1} lang="de" size={16} />
          </div>
          <span className="text-white/40 text-2xl">+</span>
          <div className="flex items-center gap-1">
            <span className="text-3xl font-black px-4 py-3 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.08)", color: "white" }}>{item.word2}</span>
            <SpeakButton text={item.word2} lang="de" size={16} />
          </div>
        </motion.div>
      </AnimatePresence>
      {feedback && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-black text-lg"
          style={{ color: feedback === "correct" ? "#00FF88" : "#FF2D78" }}>
          {item.rhymes ? `🎵 ${lbl.rhymes}` : `🚫 ${lbl.noRhyme}`}
        </motion.p>
      )}
      <div className="flex gap-4 w-full">
        <motion.button onClick={() => handleSelect(true)} disabled={!!feedback}
          className="flex-1 py-4 rounded-2xl font-black text-xl"
          style={{
            background: feedback && selected === true ? (item.rhymes ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)") : "rgba(255,255,255,0.06)",
            border: `2px solid ${feedback && selected === true ? (item.rhymes ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.2)"}`,
            color: feedback && selected === true ? (item.rhymes ? "#00FF88" : "#FF2D78") : "#00FF88",
            cursor: feedback ? "default" : "pointer",
          }}
          whileTap={!feedback ? { scale: 0.93 } : {}}>
          {lbl.yes}
        </motion.button>
        <motion.button onClick={() => handleSelect(false)} disabled={!!feedback}
          className="flex-1 py-4 rounded-2xl font-black text-xl"
          style={{
            background: feedback && selected === false ? (!item.rhymes ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)") : "rgba(255,255,255,0.06)",
            border: `2px solid ${feedback && selected === false ? (!item.rhymes ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.2)"}`,
            color: feedback && selected === false ? (!item.rhymes ? "#00FF88" : "#FF2D78") : "#FF2D78",
            cursor: feedback ? "default" : "pointer",
          }}
          whileTap={!feedback ? { scale: 0.93 } : {}}>
          {lbl.no}
        </motion.button>
      </div>
    </div>
  );
}

// ─── Round 2: Find the rhyming word ──────────────────────────────────────────
function Round2({
  color,
  lbl,
  wrongCountRef,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);
  const [items] = useState(() => shuffle(FIND_RHYME_POOL).slice(0, 4));
  const item = items[idx];

  const handleSelect = (choice: string) => {
    if (selected || feedback) return;
    const isCorrect = choice === item.answer;
    setSelected(choice);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: choice, correctAnswer: item.answer, topic: "Rhymes", lang: "de" });
    }

    setTimeout(() => {
      if (idx + 1 >= items.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🎶</div>
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
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black text-white">{item.word}</p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.choices.map(choice => {
          const isSelected = selected === choice;
          const isCorrect = choice === item.answer;
          const shouldShowCorrect = feedback && isCorrect;
          const shouldShowWrong = feedback && isSelected && !isCorrect;

          return (
            <motion.button key={choice} onClick={() => handleSelect(choice)} disabled={!!feedback}
              className="w-full py-3.5 rounded-2xl font-black text-xl"
              style={{
                background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,45,120,0.15)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "white",
                cursor: feedback ? "default" : "pointer",
              }}
              whileTap={!feedback ? { scale: 0.97 } : {}}>
              {choice}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 3: Verb + emoji matching ──────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [verbs] = useState(() => shuffle(VERBS_POOL).slice(0, 5));
  const allRevealed = revealed.size === verbs.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {verbs.map((v, i) => {
          const isRevealed = revealed.has(i);
          return (
            <motion.button key={i} onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 flex items-center gap-4"
              style={{
                background: isRevealed ? `${color}18` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isRevealed ? color : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={{ scale: 0.97 }}>
              <span className="text-4xl">{isRevealed ? v.emoji : "❓"}</span>
              <span className="text-xl font-black" style={{ color: isRevealed ? color : "white" }}>
                {v.verb}
              </span>
              {isRevealed && <SpeakButton text={v.verb} lang="de" size={14} />}
              {isRevealed && <span className="ml-auto text-lg">✅</span>}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: Find rhyme pairs ────────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<string | null>(null);
  const allWords = RHYME_PAIRS.flatMap(([a, b]) => [a, b]).sort(() => Math.random() - 0.5);
  const [shuffled] = useState(allWords);
  const allMatched = matched.size === RHYME_PAIRS.length * 2;

  const isMatched = (word: string) => matched.has(word);
  const isPair = (a: string, b: string) => RHYME_PAIRS.some(([x, y]) => (x === a && y === b) || (x === b && y === a));

  const handleTap = (word: string) => {
    if (isMatched(word)) return;
    if (!selected) {
      setSelected(word);
    } else {
      if (selected === word) { setSelected(null); return; }
      if (isPair(selected, word)) {
        setMatched(prev => new Set([...prev, selected, word]));
        setSelected(null);
      } else {
        setSelected(word);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {shuffled.map((word, i) => {
          const isM = isMatched(word);
          const isSel = selected === word;
          return (
            <motion.button key={i} onClick={() => !isM && handleTap(word)}
              className="px-4 py-3 rounded-2xl font-black text-lg"
              style={{
                background: isM ? "rgba(0,255,136,0.2)" : isSel ? `${color}33` : "rgba(255,255,255,0.06)",
                border: `2px solid ${isM ? "#00FF88" : isSel ? color : "rgba(255,255,255,0.2)"}`,
                color: isM ? "#00FF88" : isSel ? color : "white",
                opacity: isM ? 0.6 : 1,
              }}
              animate={isSel ? { scale: [1, 1.05, 1] } : {}}
              whileTap={!isM ? { scale: 0.93 } : {}}>
              {word}
            </motion.button>
          );
        })}
      </div>
      <div className="text-white/50 text-xs font-bold">{matched.size / 2} / {RHYME_PAIRS.length} ✅</div>
      {allMatched && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="w-full flex flex-col gap-2 items-center">
          <div className="rounded-2xl px-4 py-2 text-center"
            style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
            <p className="text-[#00FF88] font-black">🎉 {lbl.well}</p>
          </div>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: Vocabulary match ────────────────────────────────────────────────
function Round5({
  color,
  lbl,
  wrongCountRef,
  onDone,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);
  const [items] = useState(() => shuffle(VOCAB_WORDS_POOL).slice(0, 4));
  const item = items[idx];

  const handleSelect = (choice: string) => {
    if (selected || feedback) return;
    const isCorrect = choice === item.word;
    setSelected(choice);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.word, wrongAnswer: choice, correctAnswer: item.word, topic: "Rhymes", lang: "de" });
    }

    setTimeout(() => {
      if (idx + 1 >= items.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🌈</div>
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
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.span key={item.emoji} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          className="text-7xl">{item.emoji}</motion.span>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => {
          const isSelected = selected === opt;
          const isCorrect = opt === item.word;
          const shouldShowCorrect = feedback && isCorrect;
          const shouldShowWrong = feedback && isSelected && !isCorrect;

          return (
            <motion.button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback}
              className="w-full py-3.5 rounded-2xl font-black text-xl"
              style={{
                background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,45,120,0.15)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "white",
                cursor: feedback ? "default" : "pointer",
              }}
              whileTap={!feedback ? { scale: 0.97 } : {}}>
              {opt}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const RhymeExplorer = memo(function RhymeExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const wrongCountRef = useRef(0);
  const TOTAL_ROUNDS = 5;

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
          {round === 0 && <Round1 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 1 && <Round2 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default RhymeExplorer;
