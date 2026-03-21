"use client";
// SpellingExplorer2 — Island i7: Rechtschreibung II (K2)
// Teaches: double consonants (mm/nn/ll/ss), Dehnungs-h (ah/eh/oh/uh), word families

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Spelling Explorer II",
    round1Title: "Double Consonants",
    round1Hint: "After a short vowel, the consonant is doubled! Tap to learn.",
    round2Title: "Stretching h",
    round2Hint: "ah, eh, oh, uh — the silent h stretches the vowel! Tap each word.",
    round3Title: "Word Families",
    round3Hint: "Words from the same family keep the same root! Tap to see the family.",
    round4Title: "Fill the Gap!",
    round4Hint: "Which letters are missing?",
    round5Title: "Spelling Challenge II",
    round5Hint: "Choose the correct spelling!",
    well: "Excellent!",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    wrong: "Not quite!",
    ruleDouble: "Short vowel → double consonant",
    ruleH: "Long vowel with silent h",
    family: "Word family",
    tapToReveal: "Tap to reveal",
    discovery: "💡 Pay attention to word endings! -lich, -ig, -ung, -heit, -keit are common German suffixes. They follow regular spelling patterns.",
  },
  hu: {
    title: "Helyesírás felfedező II",
    round1Title: "Kettős mássalhangzók",
    round1Hint: "Rövid magánhangzó után a mássalhangzó megkettőzik! Koppints, hogy tanuld.",
    round2Title: "Nyújtó h",
    round2Hint: "ah, eh, oh, uh — a néma h megnyújtja a magánhangzót! Koppints minden szóra.",
    round3Title: "Szócsaládok",
    round3Hint: "Ugyanabból a szócsaládból való szavak ugyanazt a gyököt tartják! Koppints, hogy lásd a családot.",
    round4Title: "Töltsd ki a rést!",
    round4Hint: "Melyik betűk hiányoznak?",
    round5Title: "Helyesírási kihívás II",
    round5Hint: "Válaszd ki a helyes helyesírást!",
    well: "Kiváló!",
    next: "Tovább",
    finish: "Vége!",
    correct: "Helyes!",
    wrong: "Nem quite!",
    ruleDouble: "Rövid magánhangzó → kettős mássalhangzó",
    ruleH: "Hosszú magánhangzó néma h-val",
    family: "Szócsalád",
    tapToReveal: "Koppints, hogy felfedd",
    discovery: "💡 Figyelj a szóvégekre! A -lich, -ig, -ung, -heit, -keit közös német végződések. Ezek szabályos helyesírási mintákat követnek.",
  },
  de: {
    title: "Rechtschreibung-Entdecker II",
    round1Title: "Doppelkonsonanten",
    round1Hint: "Nach kurzem Vokal wird der Konsonant verdoppelt! Tippe zum Lernen.",
    round2Title: "Dehnungs-h",
    round2Hint: "ah, eh, oh, uh — das stille h dehnt den Vokal! Tippe auf jedes Wort.",
    round3Title: "Wortfamilien",
    round3Hint: "Wörter aus der gleichen Familie behalten dieselbe Wurzel! Tippe um die Familie zu sehen.",
    round4Title: "Lücke füllen!",
    round4Hint: "Welche Buchstaben fehlen?",
    round5Title: "Rechtschreib-Herausforderung II",
    round5Hint: "Wähle die richtige Schreibweise!",
    well: "Ausgezeichnet!",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    wrong: "Nicht ganz!",
    ruleDouble: "Kurzer Vokal → Doppelkonsonant",
    ruleH: "Langer Vokal mit Dehnungs-h",
    family: "Wortfamilie",
    tapToReveal: "Tippe um zu enthüllen",
    discovery: "💡 Achte auf die Wortendungen! -lich, -ig, -ung, -heit, -keit sind häufige deutsche Endungen. Sie folgen regelmäßigen Schreibmustern.",
  },
  ro: {
    title: "Exploratorul ortografiei II",
    round1Title: "Consoane duble",
    round1Hint: "După o vocală scurtă, consoana se dublează! Atinge pentru a învăța.",
    round2Title: "h de alungire",
    round2Hint: "ah, eh, oh, uh — h-ul mut alungește vocala! Atinge fiecare cuvânt.",
    round3Title: "Familii de cuvinte",
    round3Hint: "Cuvintele din aceeași familie păstrează aceeași rădăcină! Atinge pentru a vedea familia.",
    round4Title: "Completează spațiul!",
    round4Hint: "Ce litere lipsesc?",
    round5Title: "Provocare ortografie II",
    round5Hint: "Alege ortografia corectă!",
    well: "Excelent!",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    wrong: "Nu chiar!",
    ruleDouble: "Vocală scurtă → consoană dublă",
    ruleH: "Vocală lungă cu h mut",
    family: "Familie de cuvinte",
    tapToReveal: "Atinge pentru a dezvălui",
    discovery: "💡 Acordă atenție finalurilor cuvintelor! -lich, -ig, -ung, -heit, -keit sunt terminații germane comune. Ele urmează modele obișnuite de ortografie.",
  },
};

// Round 1: double consonants
const DOUBLE_CONSONANT_WORDS: { word: string; double: string; emoji: string }[] = [
  { word: "rennen", double: "nn", emoji: "🏃" },
  { word: "Hammer", double: "mm", emoji: "🔨" },
  { word: "Welle", double: "ll", emoji: "🌊" },
  { word: "Fluss", double: "ss", emoji: "🏞️" },
  { word: "Kette", double: "tt", emoji: "⛓️" },
  { word: "Suppe", double: "pp", emoji: "🍲" },
];

// Round 2: Dehnungs-h words
const DEHNUNGS_H_WORDS: { word: string; vowelH: string; emoji: string; meaning: Record<string, string> }[] = [
  { word: "fahren", vowelH: "ah", emoji: "🚗", meaning: { de: "fahren (to drive)", en: "to drive", hu: "vezet/megy", ro: "a conduce" } },
  { word: "nehmen", vowelH: "eh", emoji: "✋", meaning: { de: "nehmen (to take)", en: "to take", hu: "vesz/fog", ro: "a lua" } },
  { word: "wohnen", vowelH: "oh", emoji: "🏠", meaning: { de: "wohnen (to live)", en: "to live/reside", hu: "lakik", ro: "a locui" } },
  { word: "Uhr", vowelH: "uh", emoji: "🕐", meaning: { de: "Uhr (clock)", en: "clock/watch", hu: "óra", ro: "ceas" } },
  { word: "Bahn", vowelH: "ah", emoji: "🚂", meaning: { de: "Bahn (train/track)", en: "train/track", hu: "vasút/pálya", ro: "cale ferată" } },
];

// Round 3: word families
const WORD_FAMILIES: {
  root: string; emoji: string;
  family: { word: string; role: Record<string, string> }[];
}[] = [
  {
    root: "spiel", emoji: "⚽",
    family: [
      { word: "spielen", role: { de: "Verb", en: "verb", hu: "ige", ro: "verb" } },
      { word: "Spiel", role: { de: "Nomen", en: "noun", hu: "főnév", ro: "substantiv" } },
      { word: "Spieler", role: { de: "Person", en: "person", hu: "személy", ro: "persoană" } },
      { word: "Spielzeug", role: { de: "Zusammensetzung", en: "compound", hu: "összetett szó", ro: "cuvânt compus" } },
    ],
  },
  {
    root: "lern", emoji: "📚",
    family: [
      { word: "lernen", role: { de: "Verb", en: "verb", hu: "ige", ro: "verb" } },
      { word: "Lerner", role: { de: "Person", en: "person", hu: "személy", ro: "persoană" } },
      { word: "gelernt", role: { de: "Partizip", en: "participle", hu: "befejezett melléknévi igenév", ro: "participiu" } },
    ],
  },
];

// Round 4: fill the gap
const GAP_WORDS: { partial: string; answer: string; full: string; emoji: string }[] = [
  { partial: "re__en", answer: "nn", full: "rennen", emoji: "🏃" },
  { partial: "fa__en", answer: "hr", full: "fahren", emoji: "🚗" },
  { partial: "Ha__er", answer: "mm", full: "Hammer", emoji: "🔨" },
  { partial: "Wel__e", answer: "ll", full: "Welle", emoji: "🌊" },
];

// Round 5: quiz
const SPELLING2_QUIZ: { options: string[]; answer: string; emoji: string }[] = [
  { options: ["rennen", "renen"], answer: "rennen", emoji: "🏃" },
  { options: ["wohnen", "wonen"], answer: "wohnen", emoji: "🏠" },
  { options: ["Hammer", "Hamer"], answer: "Hammer", emoji: "🔨" },
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

// Helper: shuffle array
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ─── Round 1: Double consonants ───────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === DOUBLE_CONSONANT_WORDS.length;
  const highlightColor = "#EC4899";

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="w-full rounded-xl p-2 text-center text-xs font-bold text-white/60"
        style={{ background: `${color}11`, border: `1px solid ${color}33` }}>
        {lbl.ruleDouble}
      </div>
      <div className="grid grid-cols-2 gap-2 w-full">
        {DOUBLE_CONSONANT_WORDS.map((item, i) => {
          const isTapped = tapped.has(i);
          const parts = item.word.split(item.double);
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="rounded-2xl p-3 flex flex-col items-center gap-1"
              style={{
                background: isTapped ? `${highlightColor}22` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? highlightColor : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.95 } : {}}>
              <span className="text-2xl">{item.emoji}</span>
              <div className="flex items-center gap-0.5">
                <span className="font-black text-base text-white">{parts[0]}</span>
                <span className="font-black text-base" style={{ color: isTapped ? highlightColor : "rgba(255,255,255,0.4)" }}>
                  {item.double}
                </span>
                <span className="font-black text-base text-white">{parts[1]}</span>
                {isTapped && <SpeakButton text={item.word} lang="de" size={12} />}
              </div>
              {isTapped && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-xs font-black px-2 py-0.5 rounded-full"
                  style={{ background: `${highlightColor}33`, color: highlightColor }}>
                  {item.double}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 2: Dehnungs-h ─────────────────────────────────────────────────────
function Round2({ lang, color, lbl, onNext }: { lang: string; color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === DEHNUNGS_H_WORDS.length;
  const hColor = "#10B981";

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="w-full rounded-xl p-2 text-center text-xs font-bold text-white/60"
        style={{ background: `${color}11`, border: `1px solid ${color}33` }}>
        {lbl.ruleH}
      </div>
      <div className="flex flex-col gap-2 w-full">
        {DEHNUNGS_H_WORDS.map((item, i) => {
          const isTapped = tapped.has(i);
          const vowelIdx = item.word.toLowerCase().indexOf(item.vowelH);
          const before = item.word.slice(0, vowelIdx);
          const after = item.word.slice(vowelIdx + item.vowelH.length);
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="w-full rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{
                background: isTapped ? `${hColor}22` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? hColor : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.97 } : {}}>
              <span className="text-3xl">{item.emoji}</span>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="font-black text-xl">
                    <span className="text-white">{before}</span>
                    <span style={{ color: isTapped ? hColor : "rgba(255,255,255,0.4)" }}>{item.vowelH}</span>
                    <span className="text-white">{after}</span>
                  </span>
                  {isTapped && <SpeakButton text={item.word} lang="de" size={14} />}
                </div>
                {isTapped && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-xs font-bold text-white/60">
                    {item.meaning[lang] ?? item.meaning.de}
                  </motion.p>
                )}
              </div>
              {isTapped && (
                <span className="text-sm font-black px-2 py-1 rounded-lg"
                  style={{ background: `${hColor}33`, color: hColor }}>
                  -{item.vowelH}-
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 3: Word families ───────────────────────────────────────────────────
function Round3({ lang, color, lbl, onNext }: { lang: string; color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [famIdx, setFamIdx] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const family = WORD_FAMILIES[famIdx];

  const handleReveal = () => {
    if (revealed < family.family.length) {
      setRevealed(r => r + 1);
    } else {
      if (famIdx + 1 >= WORD_FAMILIES.length) onNext();
      else { setFamIdx(f => f + 1); setRevealed(0); }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 mb-1">
        {WORD_FAMILIES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < famIdx ? "#00FF88" : i === famIdx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={famIdx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-4 flex flex-col gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{family.emoji}</span>
            <div>
              <p className="text-white/50 text-xs font-bold">{lbl.family}</p>
              <p className="text-xl font-black" style={{ color }}>‟{family.root}…"</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {family.family.map((w, i) => (
              <AnimatePresence key={i}>
                {i < revealed && (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl"
                    style={{ background: `${color}15`, border: `1px solid ${color}33` }}>
                    <span className="font-black text-lg" style={{ color }}>{w.word}</span>
                    <span className="text-white/50 text-xs font-bold">{w.role[lang] ?? w.role.de}</span>
                    <SpeakButton text={w.word} lang="de" size={12} />
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.button onClick={handleReveal}
        className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
        style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
        whileTap={{ scale: 0.97 }}>
        {revealed < family.family.length ? lbl.tapToReveal : lbl.next} <ChevronRight size={16} />
      </motion.button>
    </div>
  );
}

// ─── Round 4: Fill the gap ───────────────────────────────────────────────────
function Round4({ color, lbl, wrongCountRef, onNext }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [words] = useState(() => shuffle(GAP_WORDS).slice(0, 4));
  const item = words[idx];
  const isCorrect = input.toLowerCase() === item.answer.toLowerCase();

  const handleSubmit = () => {
    if (!input.trim() || submitted) return;
    setSubmitted(true);
    if (!isCorrect) wrongCountRef.current++;
    setTimeout(() => {
      if (idx + 1 >= words.length) onNext();
      else { setIdx(i => i + 1); setInput(""); setSubmitted(false); }
    }, isCorrect ? 900 : 1000);
  };

  const displayWord = item.partial.replace("__", submitted ? (isCorrect ? item.answer : item.answer) : (input || "__"));

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {words.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-3">
          <span className="text-5xl">{item.emoji}</span>
          <p className="text-3xl font-black tracking-wider">
            {item.partial.split("__").map((part, pi, arr) => (
              <span key={pi}>
                <span className="text-white">{part}</span>
                {pi < arr.length - 1 && (
                  <span style={{ color: submitted ? (isCorrect ? "#00FF88" : "#FF2D78") : color }}>
                    {submitted ? item.answer : (input || "__")}
                  </span>
                )}
              </span>
            ))}
          </p>
          {submitted && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="font-bold" style={{ color: isCorrect ? "#00FF88" : "#FF2D78" }}>
              {isCorrect ? "✅ " + lbl.correct : "→ " + item.full}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      {!submitted && (
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
          className="w-full text-center text-2xl font-black rounded-2xl py-3 px-4 outline-none"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: `2px solid ${color}55`,
            color: "white",
          }}
          maxLength={3}
          placeholder="?"
          autoFocus
        />
      )}
      {!submitted && input.length > 0 && (
        <NextBtn onClick={handleSubmit} label={lbl.next} color={color} />
      )}
    </div>
  );
}

// ─── Round 5: Spelling quiz II ────────────────────────────────────────────────
function Round5({ color, lbl, wrongCountRef, onDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [quiz] = useState(() => shuffle(SPELLING2_QUIZ).slice(0, 3));
  const item = quiz[idx];

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    const isCorrect = opt === item.answer;
    if (!isCorrect) wrongCountRef.current++;
    setTimeout(() => {
      if (idx + 1 >= quiz.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, isCorrect ? 800 : 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 mb-1">
        {quiz.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <span className="text-5xl">{item.emoji}</span>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="w-full py-4 rounded-2xl font-black text-xl"
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
const SpellingExplorer2 = memo(function SpellingExplorer2({
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
          {round === 1 && <Round2 lang={lang} color={color} lbl={lbl} onNext={next} />}
          {round === 2 && <Round3 lang={lang} color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default SpellingExplorer2;
