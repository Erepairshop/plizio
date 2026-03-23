"use client";
// NounExplorer — Island i1: Nomen & Artikel (K2)
// Teaches: noun recognition, der/die/das, plural forms, article+noun matching

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Noun Explorer",
    round1Title: "What is a Noun?",
    round1Hint: "Tap all the nouns — names of people, animals, things or places!",
    round2Title: "der · die · das",
    round2Hint: "Which article goes with this noun?",
    round3Title: "Plural Forms",
    round3Hint: "How do we say more than one?",
    round4Title: "Article Match",
    round4Hint: "Tap the correct article for each noun!",
    round5Title: "Noun Challenge",
    round5Hint: "Choose the correct article quickly!",
    well: "Great job!",
    next: "Next",
    finish: "Finished!",
    noun: "Noun",
    notNoun: "Not a noun",
    correct: "Correct!",
    der: "der (masculine)",
    die: "die (feminine)",
    das: "das (neutral)",
    singular: "Singular",
    plural: "Plural",
  },
  hu: {
    title: "Főnév felfedező",
    round1Title: "Mi a főnév?",
    round1Hint: "Koppints az összes főnévre — emberek, állatok, dolgok vagy helyek neve!",
    round2Title: "der · die · das",
    round2Hint: "Melyik névelő illik ehhez a főnévhez?",
    round3Title: "Többes szám",
    round3Hint: "Hogyan mondjuk, ha több van belőle?",
    round4Title: "Névelő párosítás",
    round4Hint: "Koppints a helyes névelőre minden főnévnél!",
    round5Title: "Főnév kihívás",
    round5Hint: "Gyorsan válaszd ki a helyes névelőt!",
    well: "Remek munka!",
    next: "Tovább",
    finish: "Vége!",
    noun: "Főnév",
    notNoun: "Nem főnév",
    correct: "Helyes!",
    der: "der (hímnem)",
    die: "die (nőnem)",
    das: "das (semleges)",
    singular: "Egyes szám",
    plural: "Többes szám",
  },
  de: {
    title: "Nomen-Entdecker",
    round1Title: "Was ist ein Nomen?",
    round1Hint: "Tippe auf alle Nomen — Namen von Personen, Tieren, Dingen oder Orten!",
    round2Title: "der · die · das",
    round2Hint: "Welcher Artikel passt zu diesem Nomen?",
    round3Title: "Mehrzahl",
    round3Hint: "Wie sagt man, wenn es mehrere gibt?",
    round4Title: "Artikel-Zuordnung",
    round4Hint: "Tippe den richtigen Artikel für jedes Nomen an!",
    round5Title: "Nomen-Herausforderung",
    round5Hint: "Wähle schnell den richtigen Artikel!",
    well: "Super gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    noun: "Nomen",
    notNoun: "Kein Nomen",
    correct: "Richtig!",
    der: "der (männlich)",
    die: "die (weiblich)",
    das: "das (sächlich)",
    singular: "Einzahl",
    plural: "Mehrzahl",
  },
  ro: {
    title: "Exploratorul substantivelor",
    round1Title: "Ce este un substantiv?",
    round1Hint: "Atinge toate substantivele — nume de persoane, animale, lucruri sau locuri!",
    round2Title: "der · die · das",
    round2Hint: "Care articol se potrivește cu acest substantiv?",
    round3Title: "Forme de plural",
    round3Hint: "Cum spunem când sunt mai multe?",
    round4Title: "Potrivire articol",
    round4Hint: "Atinge articolul corect pentru fiecare substantiv!",
    round5Title: "Provocare substantive",
    round5Hint: "Alege rapid articolul corect!",
    well: "Foarte bine!",
    next: "Înainte",
    finish: "Gata!",
    noun: "Substantiv",
    notNoun: "Nu e substantiv",
    correct: "Corect!",
    der: "der (masculin)",
    die: "die (feminin)",
    das: "das (neutru)",
    singular: "Singular",
    plural: "Plural",
  },
};

type Article = "der" | "die" | "das";
const ARTICLE_COLORS: Record<Article, string> = {
  der: "#3B82F6",
  die: "#EC4899",
  das: "#10B981",
};

// Round 1: spot the nouns
const WORD_LIST: { word: string; isNoun: boolean; emoji?: string }[] = [
  { word: "Hund", isNoun: true, emoji: "🐕" },
  { word: "laufen", isNoun: false },
  { word: "Schule", isNoun: true, emoji: "🏫" },
  { word: "groß", isNoun: false },
  { word: "Baum", isNoun: true, emoji: "🌳" },
  { word: "spielen", isNoun: false },
  { word: "Kind", isNoun: true, emoji: "👦" },
  { word: "schnell", isNoun: false },
  { word: "Haus", isNoun: true, emoji: "🏠" },
  { word: "schön", isNoun: false },
];

// Round 2: article sorting
const ARTICLE_NOUNS: { word: string; article: Article; emoji: string }[] = [
  { word: "Hund", article: "der", emoji: "🐕" },
  { word: "Katze", article: "die", emoji: "🐱" },
  { word: "Haus", article: "das", emoji: "🏠" },
  { word: "Schule", article: "die", emoji: "🏫" },
  { word: "Ball", article: "der", emoji: "⚽" },
  { word: "Buch", article: "das", emoji: "📚" },
];

// Round 3: plural forms
const PLURAL_WORDS: { singular: string; plural: string; emoji: string; ending: string }[] = [
  { singular: "Hund", plural: "Hunde", emoji: "🐕", ending: "-e" },
  { singular: "Kind", plural: "Kinder", emoji: "👦", ending: "-er" },
  { singular: "Blume", plural: "Blumen", emoji: "🌸", ending: "-n" },
  { singular: "Ball", plural: "Bälle", emoji: "⚽", ending: "-e (Umlaut)" },
  { singular: "Buch", plural: "Bücher", emoji: "📚", ending: "-er (Umlaut)" },
];

// Round 4 & 5: article quiz
const ARTICLE_QUIZ: { word: string; article: Article; emoji: string }[] = [
  { word: "Lehrer", article: "der", emoji: "👨‍🏫" },
  { word: "Tasche", article: "die", emoji: "🎒" },
  { word: "Fenster", article: "das", emoji: "🪟" },
  { word: "Vogel", article: "der", emoji: "🐦" },
  { word: "Maus", article: "die", emoji: "🐭" },
  { word: "Heft", article: "das", emoji: "📓" },
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

// ─── Round 1: Spot the nouns ──────────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const nouns = WORD_LIST.filter(w => w.isNoun);
  const allNounsTapped = nouns.every((_, i) => tapped.has(WORD_LIST.indexOf(nouns[i])));

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {WORD_LIST.map((item, i) => {
          const isTapped = tapped.has(i);
          const isCorrect = item.isNoun;
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="w-full rounded-2xl p-3 flex items-center gap-2"
              style={{
                background: isTapped ? (isCorrect ? "rgba(0,255,136,0.15)" : "rgba(255,45,120,0.1)") : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? (isCorrect ? "#00FF88" : "rgba(255,45,120,0.3)") : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.95 } : {}}>
              {item.emoji && <span className="text-lg">{item.emoji}</span>}
              <span className="font-black text-base" style={{
                color: isTapped ? (isCorrect ? "#00FF88" : "rgba(255,255,255,0.4)") : "white",
              }}>{item.word}</span>
              {isTapped && isCorrect && <span className="ml-auto text-sm">✅</span>}
            </motion.button>
          );
        })}
      </div>
      {allNounsTapped && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full flex flex-col gap-2">
          <p className="text-center text-white/60 text-xs font-bold">
            {lbl.well} {nouns.length} Nomen!
          </p>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Article sorting ─────────────────────────────────────────────────
function Round2({ color, lbl, lang, onNext }: { color: string; lbl: Record<string, string>; lang: string; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const [done, setDone] = useState(false);
  const item = ARTICLE_NOUNS[idx];

  const handleSelect = (art: Article) => {
    if (selected) return;
    setSelected(art);
    if (art !== item.article) {
      fireWrongAnswer({
        question: `___ ${item.word}`,
        wrongAnswer: art,
        correctAnswer: item.article,
        topic: "der/die/das",
        lang,
      });
    }
    setTimeout(() => {
      if (idx + 1 >= ARTICLE_NOUNS.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (done) return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="text-5xl">🎊</div>
      <p className="text-white font-black text-xl">{lbl.well}</p>
      <NextBtn onClick={onNext} label={lbl.next} color={color} />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {ARTICLE_NOUNS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-1">
          <span className="text-5xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-white">{item.word}</span>
            <SpeakButton text={`${item.article} ${item.word}`} lang="de" size={16} />
          </div>
          {selected && (
            <span className="text-xl font-bold" style={{ color: ARTICLE_COLORS[item.article] }}>
              {item.article} {item.word}
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

// ─── Round 3: Plural forms ────────────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);
  const item = PLURAL_WORDS[idx];

  const handleNext = () => {
    if (idx + 1 >= PLURAL_WORDS.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 mb-1">
        {PLURAL_WORDS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <motion.div key={item.singular}
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
        <span className="text-5xl">{item.emoji}</span>
        <div className="flex gap-6 w-full justify-center">
          <div className="text-center">
            <p className="text-white/50 text-xs font-bold mb-1">{lbl.singular}</p>
            <p className="text-2xl font-black text-white">{item.singular}</p>
          </div>
          <div className="text-center">
            <p className="text-white/50 text-xs font-bold mb-1">{lbl.plural}</p>
            <motion.p
              className="text-2xl font-black"
              style={{ color: tapped ? color : "rgba(255,255,255,0.2)" }}
              animate={{ scale: tapped ? [1, 1.15, 1] : 1 }}>
              {tapped ? item.plural : "?"}
            </motion.p>
          </div>
        </div>
        {!tapped && (
          <motion.button onClick={() => setTapped(true)}
            className="mt-1 px-6 py-2.5 rounded-xl font-black text-sm"
            style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
            whileTap={{ scale: 0.95 }}>
            {lbl.next} →
          </motion.button>
        )}
        {tapped && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/50 text-xs font-bold">
            Endung: <span style={{ color }}>{item.ending}</span>
          </motion.div>
        )}
      </motion.div>
      {tapped && <NextBtn onClick={handleNext} label={idx + 1 >= PLURAL_WORDS.length ? lbl.next : lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: Article quiz (4 nouns, tap correct article) ─────────────────────
function Round4({ color, lbl, lang, onNext }: { color: string; lbl: Record<string, string>; lang: string; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const items = ARTICLE_QUIZ.slice(0, 3);
  const item = items[idx];

  const handleSelect = (art: Article) => {
    if (selected) return;
    setSelected(art);
    if (art !== item.article) {
      fireWrongAnswer({
        question: `___ ${item.word}`,
        wrongAnswer: art,
        correctAnswer: item.article,
        topic: "Article Match",
        lang,
      });
    }
    setTimeout(() => {
      if (idx + 1 >= items.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-2">
          <span className="text-6xl">{item.emoji}</span>
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

// ─── Round 5: Mixed article quiz ──────────────────────────────────────────────
function Round5({ color, lbl, lang, onDone }: { color: string; lbl: Record<string, string>; lang: string; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const items = ARTICLE_QUIZ.slice(3);
  const item = items[idx];

  const handleSelect = (art: Article) => {
    if (selected) return;
    setSelected(art);
    if (art !== item.article) {
      fireWrongAnswer({
        question: `___ ${item.word}`,
        wrongAnswer: art,
        correctAnswer: item.article,
        topic: "Noun Challenge",
        lang,
      });
    }
    setTimeout(() => {
      if (idx + 1 >= items.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

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
        <motion.div key={item.word} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-2">
          <span className="text-6xl">{item.emoji}</span>
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
const NounExplorer = memo(function NounExplorer({
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
          {round === 1 && <Round2 color={color} lbl={lbl} lang={lang} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} lang={lang} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} lang={lang} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default NounExplorer;
