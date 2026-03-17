"use client";
// CategoryRush — Category Sorting Rush for AstroDeutsch Klasse 1
// 15 items, tap the correct category zone before time runs out
// Themes: Vokal/Konsonant, der/die/das, Nomen/Verb

import { memo, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton, speak } from "@/lib/astromath-tts";

// ─── Labels ───────────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    hint: "Sort quickly!",
    correct: "Correct! ✓",
    wrong: "Wrong!",
    missed: "Too slow!",
    done: "Done!",
    score: "Score",
    combo: "Combo",
    themeVokalTitle: "Letter type",
    themeDerTitle: "Article",
    themeNomenTitle: "Word type",
  },
  hu: {
    hint: "Rendezz gyorsan!",
    correct: "Helyes! ✓",
    wrong: "Téves!",
    missed: "Túl lassú!",
    done: "Kész!",
    score: "Pont",
    combo: "Kombó",
    themeVokalTitle: "Betű típusa",
    themeDerTitle: "Névelő",
    themeNomenTitle: "Szófaj",
  },
  de: {
    hint: "Sortiere schnell!",
    correct: "Richtig! ✓",
    wrong: "Falsch!",
    missed: "Zu langsam!",
    done: "Fertig!",
    score: "Punkte",
    combo: "Kombo",
    themeVokalTitle: "Buchstabentyp",
    themeDerTitle: "Artikel",
    themeNomenTitle: "Wortart",
  },
  ro: {
    hint: "Sortează rapid!",
    correct: "Corect! ✓",
    wrong: "Greșit!",
    missed: "Prea lent!",
    done: "Gata!",
    score: "Puncte",
    combo: "Combo",
    themeVokalTitle: "Tip literă",
    themeDerTitle: "Articol",
    themeNomenTitle: "Tip cuvânt",
  },
};

// ─── Themes ───────────────────────────────────────────────────────────────────
interface ThemeItem {
  item: string;
  category: string; // key
}

interface Theme {
  id: string;
  categoriesKey: string[]; // 2 or 3 keys
  categoriesLabel: (lang: string) => string[];
  categoriesColor: string[];
  items: ThemeItem[];
}

const THEMES: Theme[] = [
  {
    id: "vokal",
    categoriesKey: ["Vokal", "Konsonant"],
    categoriesLabel: (lang: string) =>
      lang === "de" || lang === "en"
        ? ["Vokal", "Konsonant"]
        : lang === "hu"
        ? ["Magánhangzó", "Mássalhangzó"]
        : ["Vocală", "Consoană"],
    categoriesColor: ["#3b82f6", "#f59e0b"],
    items: [
      { item: "A", category: "Vokal" },
      { item: "B", category: "Konsonant" },
      { item: "E", category: "Vokal" },
      { item: "F", category: "Konsonant" },
      { item: "I", category: "Vokal" },
      { item: "K", category: "Konsonant" },
      { item: "O", category: "Vokal" },
      { item: "P", category: "Konsonant" },
      { item: "U", category: "Vokal" },
      { item: "R", category: "Konsonant" },
      { item: "S", category: "Konsonant" },
      { item: "T", category: "Konsonant" },
      { item: "M", category: "Konsonant" },
      { item: "N", category: "Konsonant" },
      { item: "L", category: "Konsonant" },
    ],
  },
  {
    id: "artikel",
    categoriesKey: ["der", "die", "das"],
    categoriesLabel: () => ["der", "die", "das"],
    categoriesColor: ["#3b82f6", "#ec4899", "#10b981"],
    items: [
      { item: "Hund",   category: "der" },
      { item: "Katze",  category: "die" },
      { item: "Haus",   category: "das" },
      { item: "Baum",   category: "der" },
      { item: "Blume",  category: "die" },
      { item: "Buch",   category: "das" },
      { item: "Ball",   category: "der" },
      { item: "Maus",   category: "die" },
      { item: "Kind",   category: "das" },
      { item: "Schule", category: "die" },
      { item: "Auto",   category: "das" },
      { item: "Tisch",  category: "der" },
      { item: "Stuhl",  category: "der" },
      { item: "Lampe",  category: "die" },
      { item: "Bett",   category: "das" },
    ],
  },
  {
    id: "nomen-verb",
    categoriesKey: ["Nomen", "Verb"],
    categoriesLabel: (lang: string) =>
      lang === "de" || lang === "en"
        ? ["Nomen", "Verb"]
        : lang === "hu"
        ? ["Főnév", "Ige"]
        : ["Substantiv", "Verb"],
    categoriesColor: ["#8b5cf6", "#f97316"],
    items: [
      { item: "Hund",     category: "Nomen" },
      { item: "laufen",   category: "Verb" },
      { item: "Katze",    category: "Nomen" },
      { item: "spielen",  category: "Verb" },
      { item: "Baum",     category: "Nomen" },
      { item: "essen",    category: "Verb" },
      { item: "Haus",     category: "Nomen" },
      { item: "trinken",  category: "Verb" },
      { item: "Ball",     category: "Nomen" },
      { item: "schlafen", category: "Verb" },
      { item: "Blume",    category: "Nomen" },
      { item: "lesen",    category: "Verb" },
      { item: "Tür",      category: "Nomen" },
      { item: "singen",   category: "Verb" },
      { item: "Buch",     category: "Nomen" },
    ],
  },
];

const TIMER_SECONDS = 4;
const TOTAL_ITEMS = 15;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = "active" | "feedback";
type FeedbackType = "correct" | "wrong" | "missed";

// ─── Main Component ───────────────────────────────────────────────────────────
const CategoryRush = memo(function CategoryRush({
  color,
  lang = "de",
  onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const t = LABELS[lang] ?? LABELS.de;
  // Pick a random theme once
  const [theme] = useState<Theme>(() => THEMES[Math.floor(Math.random() * THEMES.length)]);
  const [items] = useState<ThemeItem[]>(() => shuffle(theme.items).slice(0, TOTAL_ITEMS));
  const [itemIdx, setItemIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [phase, setPhase] = useState<Phase>("active");
  const [feedback, setFeedback] = useState<FeedbackType | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [highlightCat, setHighlightCat] = useState<string | null>(null); // highlight correct zone on wrong
  const advancingRef = useRef(false);
  const scoreRef = useRef(0);
  const comboRef = useRef(0);

  const currentItem = items[itemIdx];

  const advance = useCallback((fb: FeedbackType, correct: boolean) => {
    if (advancingRef.current) return;
    advancingRef.current = true;
    setPhase("feedback");
    setFeedback(fb);

    const newScore = correct ? scoreRef.current + 1 : scoreRef.current;
    const newCombo = correct ? comboRef.current + 1 : 0;

    if (correct) {
      setScore(newScore);
      scoreRef.current = newScore;
    }
    setCombo(newCombo);
    comboRef.current = newCombo;

    // Highlight correct zone on wrong/missed
    if (!correct) {
      setHighlightCat(currentItem.category);
    }

    const delay = correct ? 700 : 900;
    setTimeout(() => {
      advancingRef.current = false;
      setHighlightCat(null);
      const next = itemIdx + 1;
      if (next >= TOTAL_ITEMS) {
        onDone(newScore, TOTAL_ITEMS);
        return;
      }
      setItemIdx(next);
      setFeedback(null);
      setPhase("active");
      setTimeLeft(TIMER_SECONDS);
    }, delay);
  }, [itemIdx, currentItem, onDone]);

  // Auto-speak item when a new question appears
  useEffect(() => {
    speak(items[itemIdx].item, "de");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemIdx]);

  // Timer
  useEffect(() => {
    if (phase !== "active") return;
    if (timeLeft <= 0) {
      advance("missed", false);
      return;
    }
    const id = setTimeout(() => setTimeLeft((v) => Math.max(0, v - 0.1)), 100);
    return () => clearTimeout(id);
  }, [timeLeft, phase, advance]);

  const handleCategoryTap = useCallback((catKey: string) => {
    if (phase !== "active") return;
    const correct = catKey === currentItem.category;
    advance(correct ? "correct" : "wrong", correct);
  }, [phase, currentItem, advance]);

  const timerPct = (timeLeft / TIMER_SECONDS) * 100;
  const timerColor = timerPct > 55 ? "#00FF88" : timerPct > 25 ? "#FFD700" : "#FF4444";
  const catLabels = theme.categoriesLabel(lang);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Header: progress + score + combo */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-white/50 shrink-0">
          {itemIdx + 1}/{TOTAL_ITEMS}
        </span>
        <div className="flex-1 flex gap-0.5">
          {items.map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1.5 rounded-full"
              style={{
                background:
                  i < itemIdx
                    ? "#00FF88"
                    : i === itemIdx
                    ? color
                    : "rgba(255,255,255,0.10)",
              }}
            />
          ))}
        </div>
        <span className="text-xs font-black shrink-0" style={{ color }}>
          {score}
          <span className="text-white/30">/{TOTAL_ITEMS}</span>
        </span>
      </div>

      {/* Timer bar */}
      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
        {phase === "active" && (
          <motion.div
            key={`timer-${itemIdx}`}
            className="h-full rounded-full origin-left"
            style={{ background: timerColor }}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: TIMER_SECONDS, ease: "linear" }}
          />
        )}
      </div>

      {/* Instruction + combo */}
      <div className="flex items-center justify-between px-1">
        <p className="text-xs font-semibold text-white/50">{t.hint}</p>
        {combo >= 3 && (
          <motion.span
            key={combo}
            initial={{ scale: 1.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-xs font-black px-2 py-0.5 rounded-full"
            style={{ background: `${color}30`, color }}
          >
            🔥 {combo}× {t.combo}
          </motion.span>
        )}
      </div>

      {/* Item card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={itemIdx}
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-3xl py-8 flex items-center justify-center"
          style={{
            background:
              phase === "feedback" && feedback === "correct"
                ? "rgba(0,255,136,0.15)"
                : phase === "feedback"
                ? "rgba(255,80,80,0.12)"
                : `${color}15`,
            border: `3px solid ${
              phase === "feedback" && feedback === "correct"
                ? "#00FF88"
                : phase === "feedback"
                ? "#FF4444"
                : `${color}50`
            }`,
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="font-black text-4xl text-center"
              style={{ color: "#fff" }}
            >
              {currentItem.item}
            </span>
            <SpeakButton text={currentItem.item} lang="de" size={18} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Feedback line */}
      <AnimatePresence>
        {phase === "feedback" && feedback && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center font-black text-base"
            style={{
              color:
                feedback === "correct"
                  ? "#00FF88"
                  : feedback === "wrong"
                  ? "#FF6B6B"
                  : "#888",
            }}
          >
            {feedback === "correct"
              ? t.correct
              : feedback === "wrong"
              ? t.wrong
              : t.missed}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category zones */}
      <div
        className={`grid gap-2.5 ${
          theme.categoriesKey.length === 3 ? "grid-cols-3" : "grid-cols-2"
        }`}
      >
        {theme.categoriesKey.map((catKey, i) => {
          const catColor = theme.categoriesColor[i];
          const isHighlighted = highlightCat === catKey;
          return (
            <motion.button
              key={catKey}
              onClick={() => handleCategoryTap(catKey)}
              disabled={phase !== "active"}
              className="py-5 rounded-2xl font-black text-base flex flex-col items-center gap-1"
              style={{
                background: isHighlighted
                  ? `${catColor}40`
                  : `${catColor}18`,
                border: `2px solid ${isHighlighted ? catColor : `${catColor}50`}`,
                color: isHighlighted ? "#fff" : `${catColor}`,
                opacity: phase !== "active" && !isHighlighted ? 0.6 : 1,
              }}
              animate={
                isHighlighted
                  ? { scale: [1, 1.06, 1], borderWidth: ["2px", "3px", "2px"] }
                  : {}
              }
              transition={{ duration: 0.3 }}
              whileTap={phase === "active" ? { scale: 0.93 } : {}}
            >
              <span className="text-xl">{catKey === "Vokal" ? "🔤" : catKey === "Konsonant" ? "🔡" : catKey === "der" ? "♂️" : catKey === "die" ? "♀️" : catKey === "das" ? "⚪" : catKey === "Nomen" ? "🏷️" : "🏃"}</span>
              <span className="text-sm">{catLabels[i]}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
});

export default CategoryRush;
