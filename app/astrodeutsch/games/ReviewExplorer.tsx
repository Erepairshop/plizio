"use client";
// ReviewExplorer — Island i9: Große Prüfung (Big Review)
// Fun mixed review from all previous islands with celebration animations

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Big Review",
    round1Title: "Vowels & Consonants",
    round1Hint: "Is this letter a vowel or a consonant?",
    round2Title: "Rhyme Time!",
    round2Hint: "Find the word that rhymes!",
    round3Title: "der · die · das",
    round3Hint: "Which article goes with this word?",
    round4Title: "Punctuation!",
    round4Hint: "Which punctuation fits at the end?",
    round5Title: "Compound Words",
    round5Hint: "Build the compound word!",
    round6Title: "You are a Star! 🌟",
    round6Hint: "You've completed all the islands! Amazing!",
    well: "Excellent!",
    next: "Next",
    finish: "All done!",
    vokal: "Vowel",
    konsonant: "Consonant",
    correct: "Correct!",
    celebration: "Congratulations! You've learned so much! 🎉",
    hint: "Great review!",
  },
  hu: {
    title: "Nagy áttekintés",
    round1Title: "Magánhangzók & mássalhangzók",
    round1Hint: "Ez a betű magánhangzó vagy mássalhangzó?",
    round2Title: "Rím ideje!",
    round2Hint: "Találd meg a rímelő szót!",
    round3Title: "der · die · das",
    round3Hint: "Melyik névelő illik a szóhoz?",
    round4Title: "Írásjelek!",
    round4Hint: "Melyik írásjel illik a mondat végére?",
    round5Title: "Összetett szavak",
    round5Hint: "Rakd össze az összetett szót!",
    round6Title: "Csillag vagy! 🌟",
    round6Hint: "Teljesítetted az összes szigetet! Fantasztikus!",
    well: "Kiváló!",
    next: "Tovább",
    finish: "Kész!",
    vokal: "Magánhangzó",
    konsonant: "Mássalhangzó",
    correct: "Helyes!",
    celebration: "Gratulálok! Annyit tanultál! 🎉",
    hint: "Szuper áttekintés!",
  },
  de: {
    title: "Große Prüfung",
    round1Title: "Vokale & Konsonanten",
    round1Hint: "Ist dieser Buchstabe ein Vokal oder Konsonant?",
    round2Title: "Reimzeit!",
    round2Hint: "Finde das Wort, das sich reimt!",
    round3Title: "der · die · das",
    round3Hint: "Welcher Artikel passt zu diesem Wort?",
    round4Title: "Satzzeichen!",
    round4Hint: "Welches Satzzeichen passt ans Ende?",
    round5Title: "Komposita",
    round5Hint: "Baue das zusammengesetzte Wort!",
    round6Title: "Du bist ein Star! 🌟",
    round6Hint: "Du hast alle Inseln abgeschlossen! Fantastisch!",
    well: "Ausgezeichnet!",
    next: "Weiter",
    finish: "Fertig!",
    vokal: "Vokal",
    konsonant: "Konsonant",
    correct: "Richtig!",
    celebration: "Glückwunsch! Du hast so viel gelernt! 🎉",
    hint: "Tolle Wiederholung!",
  },
  ro: {
    title: "Marea probă",
    round1Title: "Vocale și consoane",
    round1Hint: "Această literă este vocală sau consoană?",
    round2Title: "Timp de rime!",
    round2Hint: "Găsește cuvântul care rimează!",
    round3Title: "der · die · das",
    round3Hint: "Ce articol se potrivește cu acest cuvânt?",
    round4Title: "Semne de punctuație!",
    round4Hint: "Ce semn de punctuație se potrivește la final?",
    round5Title: "Cuvinte compuse",
    round5Hint: "Construiește cuvântul compus!",
    round6Title: "Ești o stea! 🌟",
    round6Hint: "Ai terminat toate insulele! Fantastic!",
    well: "Excelent!",
    next: "Înainte",
    finish: "Gata!",
    vokal: "Vocală",
    konsonant: "Consoană",
    correct: "Corect!",
    celebration: "Felicitări! Ai învățat atât de mult! 🎉",
    hint: "Recapitulare excelentă!",
  },
};

const VOWELS = new Set(["A", "E", "I", "O", "U"]);

// Round 1: classify letters
const CLASSIFY_LETTERS = ["A", "R", "E", "M", "I", "S", "O", "N", "U", "T"];
type Article = "der" | "die" | "das";
const ARTICLE_COLORS: Record<Article, string> = {
  der: "#3B82F6",
  die: "#EC4899",
  das: "#10B981",
};

// Round 2: rhymes
const RHYME_ITEMS: { word: string; choices: string[]; answer: string }[] = [
  { word: "Haus", choices: ["Maus", "Ball", "Kind"], answer: "Maus" },
  { word: "Nacht", choices: ["Tag", "acht", "Jahr"], answer: "acht" },
  { word: "Hose", choices: ["Rose", "Ball", "Mond"], answer: "Rose" },
  { word: "Baum", choices: ["Stein", "Traum", "Feld"], answer: "Traum" },
];

// Round 3: articles
const ARTICLE_ITEMS: { word: string; article: Article; emoji: string }[] = [
  { word: "Schule", article: "die", emoji: "🏫" },
  { word: "Tisch", article: "der", emoji: "🪑" },
  { word: "Fenster", article: "das", emoji: "🪟" },
  { word: "Blume", article: "die", emoji: "🌸" },
  { word: "Apfel", article: "der", emoji: "🍎" },
];

// Round 4: punctuation
type Punct = "." | "?" | "!";
const PUNCT_ITEMS: { sentence: string; punct: Punct }[] = [
  { sentence: "Wie heißt du", punct: "?" },
  { sentence: "Die Sonne scheint", punct: "." },
  { sentence: "Hurra, wir haben gewonnen", punct: "!" },
  { sentence: "Der Hund spielt", punct: "." },
];
const PUNCT_COLORS: Record<Punct, string> = { ".": "#3B82F6", "?": "#F59E0B", "!": "#EF4444" };

// Round 5: compound words
const COMPOUND_ITEMS: { part1: string; part2: string; result: string }[] = [
  { part1: "Fuß", part2: "ball", result: "Fußball" },
  { part1: "Schul", part2: "tasche", result: "Schultasche" },
  { part1: "Haus", part2: "tür", result: "Haustür" },
];

// Celebration stars animation
const STAR_POSITIONS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: i * 0.1,
}));

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="flex gap-1.5 w-full">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex-1 h-2 rounded-full"
          style={{ background: i < current ? "#FFD700" : i === current ? color : "rgba(255,255,255,0.12)" }} />
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

// ─── Round 1: Classify vowels/consonants ─────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const letter = CLASSIFY_LETTERS[idx];
  const isVokal = VOWELS.has(letter);

  const handleSelect = (type: string) => {
    if (selected) return;
    setSelected(type);
    setTimeout(() => {
      if (idx + 1 >= CLASSIFY_LETTERS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🔤</div>
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
        {CLASSIFY_LETTERS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#FFD700" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={letter} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          className="w-24 h-24 rounded-3xl flex items-center justify-center text-6xl font-black"
          style={{
            background: selected ? (isVokal ? "rgba(255,45,120,0.2)" : "rgba(0,212,255,0.2)") : "rgba(255,255,255,0.06)",
            border: `3px solid ${selected ? (isVokal ? "#FF2D78" : "#00D4FF") : "rgba(255,255,255,0.2)"}`,
            color: selected ? (isVokal ? "#FF2D78" : "#00D4FF") : "white",
          }}>
          {letter}
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center justify-center">
        <SpeakButton text={letter} lang="de" size={16} />
      </div>
      <div className="flex gap-3 w-full">
        {(["vokal", "konsonant"] as const).map(type => (
          <motion.button key={type} onClick={() => handleSelect(type)}
            className="flex-1 py-4 rounded-2xl font-black text-base"
            style={{
              background: selected === type ? (type === "vokal" ? "rgba(255,45,120,0.2)" : "rgba(0,212,255,0.2)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === type ? (type === "vokal" ? "#FF2D78" : "#00D4FF") : "rgba(255,255,255,0.15)"}`,
              color: type === "vokal" ? "#FF2D78" : "#00D4FF",
            }}
            whileTap={!selected ? { scale: 0.95 } : {}}>
            {type === "vokal" ? `🔴 ${lbl.vokal}` : `🔵 ${lbl.konsonant}`}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 2: Find rhyme ──────────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = RHYME_ITEMS[idx];

  const handleSelect = (choice: string) => {
    if (selected) return;
    setSelected(choice);
    setTimeout(() => {
      if (idx + 1 >= RHYME_ITEMS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
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
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {RHYME_ITEMS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#FFD700" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
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
        {item.choices.map(c => (
          <motion.button key={c} onClick={() => handleSelect(c)}
            className="w-full py-3.5 rounded-2xl font-black text-xl"
            style={{
              background: selected === c ? (c === item.answer ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === c ? (c === item.answer ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.2)"}`,
              color: selected === c ? (c === item.answer ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {c}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 3: Article ─────────────────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const [done, setDone] = useState(false);
  const item = ARTICLE_ITEMS[idx];

  const handleSelect = (art: Article) => {
    if (selected) return;
    setSelected(art);
    setTimeout(() => {
      if (idx + 1 >= ARTICLE_ITEMS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">📚</div>
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
        {ARTICLE_ITEMS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#FFD700" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }} className="flex flex-col items-center gap-1">
          <span className="text-5xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-white">{item.word}</span>
            <SpeakButton text={item.word} lang="de" size={16} />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {(["der", "die", "das"] as Article[]).map(art => (
          <motion.button key={art} onClick={() => handleSelect(art)}
            className="flex-1 py-4 rounded-2xl font-black text-xl"
            style={{
              background: selected === art ? `${ARTICLE_COLORS[art]}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === art ? ARTICLE_COLORS[art] : "rgba(255,255,255,0.2)"}`,
              color: selected === art ? ARTICLE_COLORS[art] : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {art}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 4: Punctuation ─────────────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Punct | null>(null);
  const [done, setDone] = useState(false);
  const item = PUNCT_ITEMS[idx];

  const handleSelect = (p: Punct) => {
    if (selected) return;
    setSelected(p);
    setTimeout(() => {
      if (idx + 1 >= PUNCT_ITEMS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">✍️</div>
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
        {PUNCT_ITEMS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#FFD700" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 justify-center">
          <p className="text-2xl font-black text-white text-center">
            {item.sentence}{selected
              ? <span style={{ color: PUNCT_COLORS[item.punct] }}>{selected}</span>
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
              background: selected === p ? (p === item.punct ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === p ? (p === item.punct ? "#00FF88" : "#FF2D78") : PUNCT_COLORS[p] + "66"}`,
              color: selected === p ? (p === item.punct ? "#00FF88" : "#FF2D78") : PUNCT_COLORS[p],
            }}
            whileTap={!selected ? { scale: 0.9 } : {}}>
            {p}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 5: Build compound word ────────────────────────────────────────────
function Round5({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);
  const item = COMPOUND_ITEMS[idx];
  const allTapped = tapped.size === 2;

  const handleNext = () => {
    if (idx + 1 >= COMPOUND_ITEMS.length) setDone(true);
    else { setIdx(i => i + 1); setTapped(new Set()); }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🔗</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 mb-1">
        {COMPOUND_ITEMS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#FFD700" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <div className="w-full rounded-2xl px-4 py-3 text-center min-h-[56px] flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${allTapped ? color : "rgba(255,255,255,0.1)"}` }}>
        {allTapped ? (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2">
            <p className="text-3xl font-black" style={{ color }}>
              {item.result} ✅
            </p>
            <SpeakButton text={item.result} lang="de" size={16} />
          </motion.div>
        ) : (
          <p className="text-white/30 text-base font-bold">
            {tapped.has(0) ? item.part1 : "?"} + {tapped.has(1) ? item.part2 : "?"}
          </p>
        )}
      </div>
      <div className="flex gap-3 w-full">
        {[item.part1, item.part2].map((part, i) => (
          <motion.button key={i} onClick={() => setTapped(prev => new Set([...prev, i]))}
            className="flex-1 py-4 rounded-2xl font-black text-xl"
            style={{
              background: tapped.has(i) ? `${color}22` : "rgba(255,255,255,0.06)",
              border: `2px solid ${tapped.has(i) ? color : "rgba(255,255,255,0.2)"}`,
              color: tapped.has(i) ? color : "white",
              opacity: tapped.has(i) ? 0.7 : 1,
            }}
            whileTap={!tapped.has(i) ? { scale: 0.95 } : {}}>
            {part}
          </motion.button>
        ))}
      </div>
      {allTapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 6: Celebration ────────────────────────────────────────────────────
function Round6({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  return (
    <div className="flex flex-col items-center gap-6 w-full relative">
      {/* Falling stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {STAR_POSITIONS.map(s => (
          <motion.div key={s.id} className="absolute text-2xl"
            style={{ left: `${s.x}%`, top: "-10%" }}
            animate={{ y: ["0%", "110%"], opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: s.delay, repeat: Infinity, repeatDelay: Math.random() * 2 }}>
            ⭐
          </motion.div>
        ))}
      </div>
      <motion.div className="text-7xl" animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}>
        🌟
      </motion.div>
      <div className="text-center">
        <h2 className="text-2xl font-black text-white">{lbl.round6Title}</h2>
        <p className="text-white/70 text-sm mt-2 font-medium leading-relaxed">{lbl.round6Hint}</p>
      </div>
      <motion.p className="text-lg font-bold text-center px-4" style={{ color }}
        animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }}>
        {lbl.celebration}
      </motion.p>
      <div className="flex gap-1">
        {"🎉🎊🎈🎉🎊🎈".split("").map((e, i) => (
          <motion.span key={i} className="text-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }}>
            {e}
          </motion.span>
        ))}
      </div>
      <NextBtn onClick={onDone} label={lbl.finish} color={color} />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const ReviewExplorer = memo(function ReviewExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 6;

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
          {round === 4 && <Round5 color={color} lbl={lbl} onNext={next} />}
          {round === 5 && <Round6 color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ReviewExplorer;
