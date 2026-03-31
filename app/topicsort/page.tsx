"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Check, Shuffle, RotateCcw, X, ChevronRight, Sparkles } from "lucide-react";
import MilestonePopup from "@/components/MilestonePopup";
import RewardReveal from "@/components/RewardReveal";
import { incrementTotalGames } from "@/lib/milestones";
import { saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { useLang } from "@/components/LanguageProvider";

type CategoryId = "language" | "math" | "nature";
type Screen = "expedition" | "playing" | "reward" | "levelComplete";

interface SortItem {
  id: string;
  emoji: string;
  label: string;
  category: CategoryId;
}

interface TopicLevel {
  level: number;
  badge: string;
  items: SortItem[];
}

interface SaveData {
  currentLevel: number;
  completedLevels: number[];
}

const SAVE_KEY = "topicsort_expedition_v1";

const T = {
  en: {
    title: "TOPIC SORT",
    subtitle: "10 levels · Sort language, math and nature cards",
    home: "Home",
    progress: "Progress",
    levelLabel: "Level",
    levelsOf: "levels",
    expeditionMap: "Expedition Map",
    howToPlay: "How to play?",
    how1: "Pick a card, then tap a category bin to place it.",
    how2: "You can tap a placed card to remove it again.",
    how3: "Finish every item before pressing Check.",
    selectHint: "Tap a card first",
    check: "Check",
    clearAll: "Clear all",
    reset: "Reset board",
    nextLevel: "Next Level",
    levelDone: "✅ LEVEL DONE!",
    bossDone: "🏆 COMPLETE!",
    wrong: "Not quite. Check the groups again.",
    fillAll: "Place every card first.",
    categories: { language: "Language", math: "Math", nature: "Nature" },
    done: "✓ done",
    noLimit: "No limit",
    ready: "Ready",
    remaining: "remaining",
    legendaryDesc: "You earned the legendary Topic Sort card!",
  },
  hu: {
    title: "TÉMARRENDEZŐ",
    subtitle: "10 szint · Rendezd a nyelvi, matek és természeti kártyákat",
    home: "Főoldal",
    progress: "Haladás",
    levelLabel: "Szint",
    levelsOf: "szint",
    expeditionMap: "Expedíció térkép",
    howToPlay: "Hogyan játssz?",
    how1: "Válassz egy kártyát, majd érints meg egy kategóriát az elhelyezéshez.",
    how2: "A már elhelyezett kártyát vissza is veheted.",
    how3: "Minden kártyát helyezz el, mielőtt az ellenőrzést megnyomod.",
    selectHint: "Előbb válassz kártyát",
    check: "Ellenőrzés",
    clearAll: "Minden törlése",
    reset: "Tábla újra",
    nextLevel: "Következő szint",
    levelDone: "✅ SZINT TELJESÍTVE!",
    bossDone: "🏆 KÜLDETÉS KÉSZ!",
    wrong: "Még nem jó. Nézd át újra a csoportokat.",
    fillAll: "Előbb helyezz el minden kártyát.",
    categories: { language: "Nyelv", math: "Matek", nature: "Természet" },
    done: "✓ kész",
    noLimit: "Nincs idő",
    ready: "Kész",
    remaining: "maradt",
    legendaryDesc: "Megszerezted a legendás Témarendező kártyát!",
  },
  de: {
    title: "THEMEN-SORTIERUNG",
    subtitle: "10 Level · Sortiere Sprach-, Mathe- und Naturkarten",
    home: "Start",
    progress: "Fortschritt",
    levelLabel: "Level",
    levelsOf: "Level",
    expeditionMap: "Expedition",
    howToPlay: "Wie spielt man?",
    how1: "Wähle eine Karte und tippe dann auf einen Kategorienblock.",
    how2: "Tippe eine platzierte Karte an, um sie wieder zu entfernen.",
    how3: "Plaziere alle Karten, bevor du auf Prüfen drückst.",
    selectHint: "Erst eine Karte wählen",
    check: "Prüfen",
    clearAll: "Alles löschen",
    reset: "Board zurücksetzen",
    nextLevel: "Nächstes Level",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 FERTIG!",
    wrong: "Noch nicht. Prüfe die Gruppen erneut.",
    fillAll: "Platziere zuerst alle Karten.",
    categories: { language: "Sprache", math: "Mathe", nature: "Natur" },
    done: "✓ fertig",
    noLimit: "Keine Zeit",
    ready: "Bereit",
    remaining: "übrig",
    legendaryDesc: "Du hast die legendäre Themen-Sortierung-Karte erhalten!",
  },
  ro: {
    title: "SORTARE DE TEME",
    subtitle: "10 niveluri · Sortează cărțile de limbă, matematică și natură",
    home: "Acasă",
    progress: "Progres",
    levelLabel: "Nivel",
    levelsOf: "niveluri",
    expeditionMap: "Hartă",
    howToPlay: "Cum se joacă?",
    how1: "Alege o carte, apoi apasă pe o categorie ca s-o plasezi.",
    how2: "Poți apăsa o carte deja plasată ca s-o scoți.",
    how3: "Completează toate cărțile înainte de Check.",
    selectHint: "Alege mai întâi o carte",
    check: "Verifică",
    clearAll: "Șterge tot",
    reset: "Resetează tabla",
    nextLevel: "Nivelul următor",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 TERMINAT!",
    wrong: "Încă nu. Verifică grupurile din nou.",
    fillAll: "Plasează mai întâi toate cărțile.",
    categories: { language: "Limbă", math: "Matematică", nature: "Natură" },
    done: "✓ gata",
    noLimit: "Fără limită",
    ready: "Gata",
    remaining: "rămase",
    legendaryDesc: "Ai câștigat cardul legendar Sortare de teme!",
  },
} as const;

function makeItem(id: string, emoji: string, label: string, category: CategoryId): SortItem {
  return { id, emoji, label, category };
}

const LEVELS: TopicLevel[] = [
  {
    level: 1,
    badge: "🌱",
    items: [
      makeItem("l1a", "📖", "noun", "language"),
      makeItem("l1b", "✏️", "verb", "language"),
      makeItem("l1c", "🔤", "letter", "language"),
      makeItem("l1d", "➕", "plus", "math"),
      makeItem("l1e", "🔢", "number", "math"),
      makeItem("l1f", "🌤️", "cloud", "nature"),
    ],
  },
  {
    level: 2,
    badge: "📚",
    items: [
      makeItem("l2a", "🗣️", "sentence", "language"),
      makeItem("l2b", "📘", "reading", "language"),
      makeItem("l2c", "📝", "adjective", "language"),
      makeItem("l2d", "✖️", "multiplication", "math"),
      makeItem("l2e", "◻️", "square", "math"),
      makeItem("l2f", "➗", "division", "math"),
      makeItem("l2g", "🌳", "tree", "nature"),
      makeItem("l2h", "🌧️", "rain", "nature"),
      makeItem("l2i", "🐦", "bird", "nature"),
    ],
  },
  {
    level: 3,
    badge: "🧠",
    items: [
      makeItem("l3a", "📄", "grammar", "language"),
      makeItem("l3b", "🔊", "syllable", "language"),
      makeItem("l3c", "📝", "article", "language"),
      makeItem("l3d", "➕", "addition", "math"),
      makeItem("l3e", "📐", "angle", "math"),
      makeItem("l3f", "📊", "graph", "math"),
      makeItem("l3g", "🪨", "rock", "nature"),
      makeItem("l3h", "🌾", "grass", "nature"),
      makeItem("l3i", "🌸", "flower", "nature"),
    ],
  },
  {
    level: 4,
    badge: "🎒",
    items: [
      makeItem("l4a", "📖", "vocabulary", "language"),
      makeItem("l4b", "📘", "dictionary", "language"),
      makeItem("l4c", "💬", "dialogue", "language"),
      makeItem("l4d", "➖", "subtraction", "math"),
      makeItem("l4e", "📏", "ruler", "math"),
      makeItem("l4f", "🔢", "digit", "math"),
      makeItem("l4g", "🌊", "ocean", "nature"),
      makeItem("l4h", "🦋", "insect", "nature"),
      makeItem("l4i", "☀️", "weather", "nature"),
    ],
  },
  {
    level: 5,
    badge: "✨",
    items: [
      makeItem("l5a", "🪶", "poem", "language"),
      makeItem("l5b", "🔤", "vowel", "language"),
      makeItem("l5c", "🗂️", "dictionary", "language"),
      makeItem("l5d", "🟰", "equation", "math"),
      makeItem("l5e", "📐", "geometry", "math"),
      makeItem("l5f", "📈", "pattern", "math"),
      makeItem("l5g", "🌴", "forest", "nature"),
      makeItem("l5h", "🌻", "flower", "nature"),
      makeItem("l5i", "🪱", "soil", "nature"),
    ],
  },
  {
    level: 6,
    badge: "🧩",
    items: [
      makeItem("l6a", "↔️", "synonym", "language"),
      makeItem("l6b", "⬅️", "antonym", "language"),
      makeItem("l6c", "📄", "paragraph", "language"),
      makeItem("l6d", "🔢", "fraction", "math"),
      makeItem("l6e", "📐", "triangle", "math"),
      makeItem("l6f", "🟠", "radius", "math"),
      makeItem("l6g", "🏔️", "mountain", "nature"),
      makeItem("l6h", "🌬️", "wind", "nature"),
      makeItem("l6i", "🪵", "wood", "nature"),
    ],
  },
  {
    level: 7,
    badge: "🪄",
    items: [
      makeItem("l7a", "🔤", "article", "language"),
      makeItem("l7b", "📘", "noun", "language"),
      makeItem("l7c", "🗣️", "verb", "language"),
      makeItem("l7d", "➕", "addition", "math"),
      makeItem("l7e", "➖", "subtraction", "math"),
      makeItem("l7f", "✖️", "multiplication", "math"),
      makeItem("l7g", "🌞", "sun", "nature"),
      makeItem("l7h", "💧", "water", "nature"),
      makeItem("l7i", "🌾", "seed", "nature"),
    ],
  },
  {
    level: 8,
    badge: "🚀",
    items: [
      makeItem("l8a", "🧾", "grammar", "language"),
      makeItem("l8b", "📚", "reading", "language"),
      makeItem("l8c", "🔊", "punctuation", "language"),
      makeItem("l8d", "📊", "fraction", "math"),
      makeItem("l8e", "🟰", "equation", "math"),
      makeItem("l8f", "📐", "angle", "math"),
      makeItem("l8g", "🌲", "tree", "nature"),
      makeItem("l8h", "🌧️", "river", "nature"),
      makeItem("l8i", "🌿", "leaf", "nature"),
    ],
  },
  {
    level: 9,
    badge: "🌟",
    items: [
      makeItem("l9a", "📝", "adjective", "language"),
      makeItem("l9b", "📄", "conjugation", "language"),
      makeItem("l9c", "🔤", "syllable", "language"),
      makeItem("l9d", "🔢", "number", "math"),
      makeItem("l9e", "📐", "geometry", "math"),
      makeItem("l9f", "🟰", "equation", "math"),
      makeItem("l9g", "🏞️", "forest", "nature"),
      makeItem("l9h", "🐦", "bird", "nature"),
      makeItem("l9i", "🌊", "river", "nature"),
    ],
  },
  {
    level: 10,
    badge: "👑",
    items: [
      makeItem("l10a", "📄", "sentence", "language"),
      makeItem("l10b", "📘", "grammar", "language"),
      makeItem("l10c", "🗂️", "dictionary", "language"),
      makeItem("l10d", "🔤", "word", "language"),
      makeItem("l10e", "➕", "addition", "math"),
      makeItem("l10f", "➖", "subtraction", "math"),
      makeItem("l10g", "✖️", "multiplication", "math"),
      makeItem("l10h", "🟰", "equation", "math"),
      makeItem("l10i", "🏔️", "mountain", "nature"),
      makeItem("l10j", "🌊", "river", "nature"),
      makeItem("l10k", "🌳", "tree", "nature"),
      makeItem("l10l", "☀️", "weather", "nature"),
    ],
  },
];

function loadSave(): SaveData {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return { currentLevel: 1, completedLevels: [] };
}

function writeSave(save: SaveData) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

function rarityForLevel(level: number): CardRarity {
  if (level === 10) return "legendary";
  if (level >= 7) return "gold";
  if (level >= 4) return "silver";
  return "bronze";
}

export default function TopicSortPageWrapper() {
  return <Suspense><TopicSortPage /></Suspense>;
}

function TopicSortPage() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const [save, setSave] = useState<SaveData>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen] = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [placements, setPlacements] = useState<Record<string, CategoryId | null>>({});
  const [feedback, setFeedback] = useState("");
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [milestoneKey, setMilestoneKey] = useState(0);

  useEffect(() => {
    setSave(loadSave());
  }, []);

  useEffect(() => {
    if (screen === "expedition") setFeedback("");
  }, [screen]);

  const level = LEVELS[activeLevel - 1];
  const assignedCount = Object.values(placements).filter(Boolean).length;
  const remainingItems = useMemo(() => {
    if (!level) return [];
    return level.items.filter((item) => !placements[item.id]);
  }, [level, placements]);

  function startLevel(levelNum: number) {
    const next = LEVELS[levelNum - 1];
    if (!next) return;
    setActiveLevel(levelNum);
    setPlacements(Object.fromEntries(next.items.map((item) => [item.id, null])));
    setSelectedItem(null);
    setFeedback("");
    setEarnedCard(null);
    setScreen("playing");
  }

  function clearAll() {
    if (!level) return;
    setPlacements(Object.fromEntries(level.items.map((item) => [item.id, null])));
    setSelectedItem(null);
    setFeedback("");
  }

  function assignTo(category: CategoryId) {
    if (!selectedItem) return;
    setPlacements((prev) => ({ ...prev, [selectedItem]: category }));
    setSelectedItem(null);
  }

  function unassign(itemId: string) {
    setPlacements((prev) => ({ ...prev, [itemId]: null }));
    if (selectedItem === itemId) setSelectedItem(null);
  }

  function handleCheck() {
    if (!level) return;
    if (assignedCount !== level.items.length) {
      setFeedback(t.fillAll);
      return;
    }
    const allCorrect = level.items.every((item) => placements[item.id] === item.category);
    if (!allCorrect) {
      setFeedback(t.wrong);
      return;
    }

    const rarity = rarityForLevel(level.level);
    setEarnedCard(rarity);
    saveCard({
      id: generateCardId(),
      game: "topicsort",
      rarity,
      score: level.items.length,
      total: level.items.length,
      date: new Date().toISOString(),
    });
    incrementTotalGames();
    window.dispatchEvent(new Event("plizio-cards-changed"));

    const newSave: SaveData = {
      currentLevel: Math.min(10, Math.max(save.currentLevel, level.level + 1)),
      completedLevels: [...new Set([...save.completedLevels, level.level])],
    };
    setSave(newSave);
    writeSave(newSave);
    setScreen("reward");
  }

  if (screen === "expedition") {
    return (
      <div className="min-h-screen bg-[#090A14] text-white">
        <MilestonePopup key={milestoneKey} />
        <div className="flex flex-col min-h-screen pb-16 sm:pb-24">
          <div className="flex items-center justify-between p-4 pt-6">
            <Link href="/" className="flex items-center gap-2 text-white/60">
              <Home size={20} />
              <span className="text-sm font-bold">{t.home}</span>
            </Link>
            <div className="flex items-center gap-2">
              <Shuffle size={20} className="text-[#2DD4BF]" />
              <span className="text-lg font-black tracking-wider text-[#2DD4BF]">{t.title}</span>
            </div>
            <div className="w-20" />
          </div>

          <p className="text-center text-white/40 text-sm mb-6 px-4">{t.subtitle}</p>

          <div className="px-4 sm:px-6 mb-6 sm:mb-8">
            <div className="flex justify-between text-xs text-white/40 mb-1">
              <span>{t.progress}</span>
              <span>{save.completedLevels.length}/10 {t.levelsOf}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(to right, #2DD4BF, #00D4FF)" }}
                initial={false}
                animate={{ width: `${(save.completedLevels.length / 10) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="px-4 flex flex-col gap-2.5 sm:gap-3 max-w-sm mx-auto w-full">
            {LEVELS.map((lvl, i) => {
              const done = save.completedLevels.includes(lvl.level);
              const current = lvl.level === save.currentLevel;
              const locked = lvl.level > save.currentLevel;
              const isBoss = lvl.level === 10;
              return (
                <motion.div
                  key={lvl.level}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                className={`flex items-center gap-3 p-3 sm:p-4 rounded-2xl border transition-all ${
                    done ? "bg-[#001f1a] border-[#2DD4BF40]"
                    : current && isBoss ? "bg-[#12091d] border-[#B44DFF] shadow-[0_0_20px_#B44DFF33]"
                    : current ? "bg-[#001f1a] border-[#2DD4BF] shadow-[0_0_20px_#2DD4BF33]"
                    : "bg-[#0f1122] border-white/10 opacity-60"
                  }`}
                >
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-xl font-black flex-shrink-0 ${
                    done ? "bg-[#2DD4BF20] text-[#2DD4BF]"
                    : current && isBoss ? "bg-[#B44DFF20] text-[#B44DFF]"
                    : current ? "bg-[#2DD4BF20] text-[#2DD4BF]"
                    : "bg-white/5 text-white/30"
                  }`}>
                    {done ? <Check size={22} /> : locked ? <X size={18} /> : lvl.badge}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-sm ${isBoss ? "text-[#B44DFF]" : "text-white"}`}>
                        {isBoss ? "🏆 " : ""}{t.levelLabel} {lvl.level}
                      </span>
                      {done && <span className="text-[#2DD4BF] text-xs">{t.done}</span>}
                    </div>
                    <div className="text-white/40 text-[11px] mt-0.5 flex gap-2 sm:gap-3">
                      <span>{lvl.items.length} cards</span>
                      <span>3 groups</span>
                    </div>
                  </div>

                  {!locked && (
                    <button
                      onClick={() => startLevel(lvl.level)}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl font-black text-sm transition-all active:scale-95 ${
                        isBoss ? "bg-[#B44DFF] text-white shadow-[0_0_12px_#B44DFF66]"
                        : current ? "bg-[#2DD4BF] text-black shadow-[0_0_12px_#2DD4BF66]"
                        : "bg-white/10 text-white/60"
                      }`}
                    >
                      {done ? "↩" : <ChevronRight size={18} />}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {save.completedLevels.length === 10 && (
            <div className="px-4 mt-5 sm:mt-6 max-w-sm mx-auto w-full">
              <button
                onClick={() => {
                  const fresh = { currentLevel: 1, completedLevels: [] };
                  setSave(fresh);
                  writeSave(fresh);
                }}
                className="w-full py-3 rounded-xl text-sm font-bold text-white/60 bg-white/5 border border-white/10"
              >
                {t.expeditionMap}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (screen === "playing" && level) {
    const categories: { id: CategoryId; label: string; color: string; glow: string }[] = [
      { id: "language", label: t.categories.language, color: "#2DD4BF", glow: "rgba(45,212,191,0.25)" },
      { id: "math", label: t.categories.math, color: "#8B5CF6", glow: "rgba(139,92,246,0.25)" },
      { id: "nature", label: t.categories.nature, color: "#22C55E", glow: "rgba(34,197,94,0.25)" },
    ];

    return (
      <div className="min-h-screen flex flex-col bg-[#090A14]">
        <MilestonePopup key={milestoneKey} />

        <div className="px-4 pt-4 pb-1 flex items-center justify-between flex-shrink-0">
          <button onClick={() => setScreen("expedition")} className="text-white/60">
            <Home size={20} />
          </button>
          <div className="text-center">
            <div className="text-xs font-bold text-[#2DD4BF]">
              {t.levelLabel} {level.level}
            </div>
            <div className="text-xs text-white/40">
              {assignedCount}/{level.items.length} {t.ready}
            </div>
          </div>
          <div className="w-16" />
        </div>

        <div className="px-4 pb-2 text-center">
          <p className="text-xs text-white/40">
            {selectedItem ? `${t.selectHint}: ${level.items.find((i) => i.id === selectedItem)?.emoji} ${level.items.find((i) => i.id === selectedItem)?.label}` : t.selectHint}
          </p>
          {feedback && <p className="text-xs text-[#FF7AA2] mt-1">{feedback}</p>}
        </div>

        <div className="px-4 pb-3 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
          {categories.map((cat) => {
            const placed = level.items.filter((item) => placements[item.id] === cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => assignTo(cat.id)}
                className="rounded-2xl border p-3 text-left transition-transform active:scale-[0.99]"
                style={{ background: `linear-gradient(180deg, ${cat.glow}, rgba(255,255,255,0.02))`, borderColor: `${cat.color}35` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-black" style={{ color: cat.color }}>{cat.label}</span>
                  <span className="text-xs text-white/40">{placed.length}/{level.items.filter((i) => i.category === cat.id).length}</span>
                </div>
                <div className="flex flex-wrap gap-2 min-h-16">
                  {placed.length === 0 ? (
                    <span className="text-xs text-white/25">{t.selectHint}</span>
                  ) : placed.map((item) => (
                    <button
                      key={item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        unassign(item.id);
                      }}
                      className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/85"
                    >
                      <span>{item.emoji}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex-1 px-4 pb-3">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {remainingItems.map((item) => {
              const active = selectedItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(active ? null : item.id)}
                  className={`rounded-2xl border p-3 text-left transition-all active:scale-[0.98] ${
                    active ? "bg-white/10 border-[#2DD4BF] shadow-[0_0_18px_rgba(45,212,191,0.25)]" : "bg-[#121426] border-white/10"
                  }`}
                >
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <div className="text-sm font-bold text-white">{item.label}</div>
                  <div className="text-[11px] text-white/35 mt-1">{t.categories[item.category]}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-4 pb-6 pt-2 flex justify-center gap-3">
          <button
            onClick={clearAll}
            className="px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 bg-white/5 border border-white/10 text-white/60"
          >
            <RotateCcw size={14} /> {t.clearAll}
          </button>
          <button
            onClick={handleCheck}
            className="px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 bg-[#2DD4BF] text-black"
          >
            <Check size={14} /> {t.check}
          </button>
        </div>
      </div>
    );
  }

  if (screen === "reward" && earnedCard) {
    const levelInfo = LEVELS[activeLevel - 1];
    return (
      <RewardReveal
        rarity={earnedCard}
        game="topicsort"
        score={levelInfo.items.length}
        total={levelInfo.items.length}
        onDone={() => setScreen("levelComplete")}
      />
    );
  }

  if (screen === "levelComplete") {
    const levelInfo = LEVELS[activeLevel - 1];
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-[#090A14] text-white">
        <motion.div
          className="w-full max-w-sm rounded-2xl p-5 sm:p-6 bg-[#121426] border"
          style={{ borderColor: levelInfo.level === 10 ? "#B44DFF44" : "#2DD4BF44" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-center mb-4">
            <div className="text-3xl sm:text-4xl mb-2">{levelInfo.level === 10 ? "🏆" : "✅"}</div>
            <h2 className={`text-xl font-black ${levelInfo.level === 10 ? "text-[#B44DFF]" : "text-[#2DD4BF]"}`}>
              {levelInfo.level === 10 ? t.bossDone : t.levelDone}
            </h2>
          </div>

          <div className="space-y-2">
            {levelInfo.level < 10 && (
              <button
                onClick={() => startLevel(levelInfo.level + 1)}
                className="w-full py-3 rounded-xl font-bold text-black"
                style={{ background: "linear-gradient(135deg, #2DD4BF, #00D4FF)" }}
              >
                {t.nextLevel} →
              </button>
            )}
            {levelInfo.level === 10 && (
              <button
                onClick={() => {
                  const fresh = { currentLevel: 1, completedLevels: [] };
                  setSave(fresh);
                  writeSave(fresh);
                  setScreen("expedition");
                }}
                className="w-full py-3 rounded-xl font-bold text-black"
                style={{ background: "linear-gradient(135deg, #2DD4BF, #00D4FF)" }}
              >
                {t.expeditionMap}
              </button>
            )}
            <button
              onClick={() => setScreen("expedition")}
              className="w-full py-3 rounded-xl font-bold text-white/60 bg-white/5 border border-white/10"
            >
              {t.home}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
