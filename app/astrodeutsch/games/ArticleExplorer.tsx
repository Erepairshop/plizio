"use client";
// ArticleExplorer — Island i3: Wörter (Words/Articles)
// Teaches: der/die/das articles, missing letters, simple compound words

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Article Explorer",
    round1Title: "der · die · das",
    round1Hint: "Learn the three articles! Tap each one.",
    round2Title: "Sort the Nouns!",
    round2Hint: "Which article goes with this noun?",
    round3Title: "Missing Letter",
    round3Hint: "Which letter is missing?",
    round4Title: "Compound Words",
    round4Hint: "Join the two parts to make a new word!",
    round5Title: "Article Review",
    round5Hint: "Tap the correct article!",
    well: "Well done!",
    next: "Next",
    finish: "Finished!",
    der: "der (masculine)",
    die: "die (feminine)",
    das: "das (neutral)",
    correct: "Correct!",
    hint: "Which article is it?",
  },
  hu: {
    title: "Névelő felfedező",
    round1Title: "der · die · das",
    round1Hint: "Tanulj meg három névelőt! Koppints mindegyikre.",
    round2Title: "Rendezd a főneveket!",
    round2Hint: "Melyik névelő illik ehhez a szóhoz?",
    round3Title: "Hiányzó betű",
    round3Hint: "Melyik betű hiányzik?",
    round4Title: "Összetett szavak",
    round4Hint: "Kapcsold össze a két részt, hogy új szót kapj!",
    round5Title: "Névelő áttekintés",
    round5Hint: "Koppints a helyes névelőre!",
    well: "Remek!",
    next: "Tovább",
    finish: "Vége!",
    der: "der (hímnem)",
    die: "die (nőnem)",
    das: "das (semleges)",
    correct: "Helyes!",
    hint: "Melyik a névelő?",
  },
  de: {
    title: "Artikel-Entdecker",
    round1Title: "der · die · das",
    round1Hint: "Lerne die drei Artikel! Tippe auf jeden.",
    round2Title: "Sortiere die Nomen!",
    round2Hint: "Welcher Artikel passt zu diesem Nomen?",
    round3Title: "Fehlender Buchstabe",
    round3Hint: "Welcher Buchstabe fehlt?",
    round4Title: "Zusammengesetzte Wörter",
    round4Hint: "Verbinde die zwei Teile zu einem neuen Wort!",
    round5Title: "Artikel-Wiederholung",
    round5Hint: "Tippe den richtigen Artikel an!",
    well: "Toll gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    der: "der (männlich)",
    die: "die (weiblich)",
    das: "das (sächlich)",
    correct: "Richtig!",
    hint: "Welcher Artikel ist es?",
  },
  ro: {
    title: "Exploratorul articolelor",
    round1Title: "der · die · das",
    round1Hint: "Învață cele trei articole! Atinge fiecare.",
    round2Title: "Sortează substantivele!",
    round2Hint: "Care articol se potrivește cu acest substantiv?",
    round3Title: "Litera lipsă",
    round3Hint: "Ce literă lipsește?",
    round4Title: "Cuvinte compuse",
    round4Hint: "Unește cele două părți pentru a face un cuvânt nou!",
    round5Title: "Recapitulare articole",
    round5Hint: "Atinge articolul corect!",
    well: "Bravo!",
    next: "Înainte",
    finish: "Gata!",
    der: "der (masculin)",
    die: "die (feminin)",
    das: "das (neutru)",
    correct: "Corect!",
    hint: "Care este articolul?",
  },
};

type Article = "der" | "die" | "das";
const ARTICLE_COLORS: Record<Article, string> = {
  der: "#3B82F6",  // blue — masculine
  die: "#EC4899",  // pink — feminine
  das: "#10B981",  // green — neutral
};

// Round 1 intro data
const INTRO_WORDS: Record<Article, { word: string; emoji: string }[]> = {
  der: [{ word: "Hund", emoji: "🐕" }, { word: "Ball", emoji: "⚽" }],
  die: [{ word: "Katze", emoji: "🐱" }, { word: "Blume", emoji: "🌸" }],
  das: [{ word: "Haus", emoji: "🏠" }, { word: "Buch", emoji: "📚" }],
};

// Round 2: sort nouns
const SORT_NOUNS: { word: string; article: Article; emoji: string }[] = [
  { word: "Hund", article: "der", emoji: "🐕" },
  { word: "Katze", article: "die", emoji: "🐱" },
  { word: "Haus", article: "das", emoji: "🏠" },
  { word: "Maus", article: "die", emoji: "🐭" },
  { word: "Ball", article: "der", emoji: "⚽" },
  { word: "Buch", article: "das", emoji: "📚" },
  { word: "Baum", article: "der", emoji: "🌳" },
  { word: "Blume", article: "die", emoji: "🌸" },
];

// Round 3: missing letters
const MISSING_LETTER_WORDS: { partial: string; answer: string; full: string }[] = [
  { partial: "_pfel", answer: "A", full: "Apfel" },
  { partial: "Hau_", answer: "s", full: "Haus" },
  { partial: "Ka_ze", answer: "t", full: "Katze" },
  { partial: "Ba_l", answer: "l", full: "Ball" },
  { partial: "_ind", answer: "K", full: "Kind" },
];

// Round 4: compound words
const COMPOUND_WORDS: { part1: string; part2: string; result: string }[] = [
  { part1: "Haus", part2: "Tür", result: "Haustür" },
  { part1: "Apfel", part2: "Baum", result: "Apfelbaum" },
  { part1: "Fuß", part2: "Ball", result: "Fußball" },
];

// Round 5: article quiz
const ARTICLE_QUIZ: { word: string; article: Article; emoji: string }[] = [
  { word: "Schule", article: "die", emoji: "🏫" },
  { word: "Kind", article: "das", emoji: "👧" },
  { word: "Lehrer", article: "der", emoji: "👨‍🏫" },
  { word: "Stift", article: "der", emoji: "✏️" },
  { word: "Tasche", article: "die", emoji: "👜" },
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

// ─── Round 1: Learn der/die/das ───────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<Article>>(new Set());
  const allTapped = (["der", "die", "das"] as Article[]).every(a => tapped.has(a));

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {(["der", "die", "das"] as Article[]).map(art => {
          const isTapped = tapped.has(art);
          const col = ARTICLE_COLORS[art];
          return (
            <motion.button key={art} onClick={() => setTapped(prev => new Set([...prev, art]))}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isTapped ? `${col}22` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isTapped ? col : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={{ scale: 0.98 }}>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black" style={{ color: col }}>{art}</span>
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-bold">{lbl[art]}</p>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {INTRO_WORDS[art].map(w => (
                      <span key={w.word} className="flex items-center gap-1 text-sm font-bold" style={{ color: isTapped ? col : "rgba(255,255,255,0.4)" }}>
                        {w.emoji} {art} {w.word}
                        {isTapped && <SpeakButton text={`${art} ${w.word}`} lang="de" size={14} />}
                      </span>
                    ))}
                  </div>
                </div>
                {isTapped && <span className="text-lg">✅</span>}
              </div>
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 2: Sort nouns into der/die/das ─────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const [done, setDone] = useState(false);
  const item = SORT_NOUNS[idx];

  const handleSelect = (art: Article) => {
    if (selected) return;
    setSelected(art);
    setTimeout(() => {
      if (idx + 1 >= SORT_NOUNS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🎊</div>
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
        {SORT_NOUNS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-1">
          <span className="text-5xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-white">{item.word}</span>
            <SpeakButton text={item.word} lang="de" size={16} />
          </div>
          {selected && (
            <span className="text-xl font-bold" style={{ color: ARTICLE_COLORS[item.article] }}>
              {selected === item.article ? "✅" : ""} {item.article} {item.word}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {(["der", "die", "das"] as Article[]).map(art => (
          <motion.button key={art} onClick={() => handleSelect(art)}
            className="flex-1 py-4 rounded-2xl font-black text-xl"
            style={{
              background: selected === art
                ? `${ARTICLE_COLORS[art]}33`
                : "rgba(255,255,255,0.06)",
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

// ─── Round 3: Fill missing letter ────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const item = MISSING_LETTER_WORDS[idx];

  // Generate 4 letter options
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const opts = [item.answer.toUpperCase()];
  while (opts.length < 4) {
    const c = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    if (!opts.includes(c)) opts.push(c);
  }
  const shuffled = [...opts].sort(() => Math.random() - 0.5);

  const handleSelect = (letter: string) => {
    if (selected) return;
    setSelected(letter);
    setTimeout(() => {
      if (idx + 1 >= MISSING_LETTER_WORDS.length) setDone(true);
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

  const correct = item.answer.toUpperCase();

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 mb-1">
        {MISSING_LETTER_WORDS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p key={item.partial} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black tracking-widest">
          {selected ? (
            <span style={{ color: selected === correct ? "#00FF88" : "#FF2D78" }}>
              {item.full}
            </span>
          ) : (
            item.partial.split("").map((ch, i) => (
              <span key={i} style={{ color: ch === "_" ? color : "white" }}>
                {ch === "_" ? "?" : ch}
              </span>
            ))
          )}
        </motion.p>
      </AnimatePresence>
      <div className="flex gap-2 flex-wrap justify-center">
        {shuffled.map(letter => (
          <motion.button key={letter} onClick={() => handleSelect(letter)}
            className="w-14 h-14 rounded-2xl font-black text-2xl flex items-center justify-center"
            style={{
              background: selected === letter
                ? (letter === correct ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.2)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === letter
                ? (letter === correct ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === letter ? (letter === correct ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.9 } : {}}>
            {letter}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 4: Build compound words ────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);
  const item = COMPOUND_WORDS[idx];
  const allTapped = tapped.size === 2;

  const handleNext = () => {
    if (idx + 1 >= COMPOUND_WORDS.length) setDone(true);
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
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {COMPOUND_WORDS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      {/* Result display */}
      <div className="w-full rounded-2xl px-4 py-3 text-center min-h-[56px] flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${allTapped ? color : "rgba(255,255,255,0.1)"}` }}>
        {allTapped ? (
          <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="text-3xl font-black" style={{ color }}>
            {item.result} ✅
          </motion.p>
        ) : (
          <p className="text-white/30 text-base font-bold">
            {tapped.has(0) ? item.part1 : "?"} + {tapped.has(1) ? item.part2 : "?"} = ?
          </p>
        )}
      </div>
      <div className="flex gap-4 w-full">
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
      {allTapped && <NextBtn onClick={handleNext} label={idx + 1 >= COMPOUND_WORDS.length ? lbl.next : lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 5: Article quiz ────────────────────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const [done, setDone] = useState(false);
  const item = ARTICLE_QUIZ[idx];

  const handleSelect = (art: Article) => {
    if (selected) return;
    setSelected(art);
    setTimeout(() => {
      if (idx + 1 >= ARTICLE_QUIZ.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
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
        {ARTICLE_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }} className="flex flex-col items-center gap-2">
          <span className="text-5xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-white">{item.word}</span>
            <SpeakButton text={item.word} lang="de" size={16} />
          </div>
          {selected && (
            <span className="font-bold text-xl" style={{ color: ARTICLE_COLORS[item.article] }}>
              {item.article} {item.word} {selected === item.article ? "✅" : ""}
            </span>
          )}
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

// ─── Main Component ───────────────────────────────────────────────────────────
const ArticleExplorer = memo(function ArticleExplorer({
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

export default ArticleExplorer;
