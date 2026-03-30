"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Rocket, HelpCircle, Home, RotateCcw } from "lucide-react";
import Link from "next/link";
import RewardReveal from "@/components/RewardReveal";
import { GameShellExpedition, GameShellLevelComplete } from "@/components/GameShell";
import { incrementTotalGames } from "@/lib/milestones";
import { useLang } from "@/components/LanguageProvider";
import { submitScore, submitMixRoundScore, pollMixRound } from "@/lib/multiplayer";
import MultiplayerResult from "@/components/MultiplayerResult";
import { getUsername } from "@/lib/username";
import { supabase } from "@/lib/supabase/client";

type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "multi-waiting" | "multi-result";
type Rarity = "bronze" | "silver" | "gold" | "legendary";

interface DeductionLevel {
  level: number;
  badge: string;
  title: string;
  rows: string[];
  columns: string[];
  clues: string[];
  solution: number[];
}

interface SaveData {
  currentLevel: number;
  completedLevels: number[];
}

const SAVE_KEY = "deductiongrid2_expedition_v1";

const T = {
  en: {
    title: "GALACTIC DEDUCTION",
    subtitle: "Read the clues and match each explorer with the right place or item.",
    home: "Home",
    progress: "Progress",
    expeditionMap: "Expedition Map",
    levelLabel: "Mission",
    levelsOf: "missions",
    howToPlay: "How to play?",
    how1: "Read all clues before choosing a match.",
    how2: "Tap a cell to connect an explorer with the right place or item.",
    how3: "The level is complete when every explorer has the correct match.",
    clues: "Clues",
    checkGrid: "Check grid",
    retry: "Reset",
    hint: "Hint",
    hintLeft: "Hint available",
    hintUsed: "Hint used.",
    noHint: "No hints left",
    notReady: "Match everyone first.",
    correct: "Correct!",
    wrong: "Not quite. Read the clues again.",
    nextLevel: "Next Level",
    levelDone: "✅ LEVEL DONE!",
    bossDone: "🏆 EXPEDITION COMPLETE!",
    locked: "LOCKED",
    solvePrompt: "Match each explorer with exactly one place or item.",
    completed: "Completed",
    current: "Current",
  },
  hu: {
    title: "GALAKTIKUS DEDUKCIÓ",
    subtitle: "Olvasd a naplókat, párosítsd a felfedezőket bolygókkal és ereklyékkel.",
    home: "Főoldal",
    progress: "Haladás",
    expeditionMap: "Expedíció térkép",
    levelLabel: "Küldetés",
    levelsOf: "küldetés",
    howToPlay: "Hogyan játssz?",
    how1: "Vizsgáld meg a naplókat, mielőtt rögzíted a felfedezést.",
    how2: "Érints meg egy mezőt a felfedező és a lelet összekötéséhez.",
    how3: "A küldetés akkor kész, ha mindenkihez a megfelelő lelet került.",
    clues: "Küldetésnaplók",
    checkGrid: "Felfedezés rögzítése",
    retry: "Alaphelyzet",
    hint: "Adat",
    hintLeft: "Van adat",
    hintUsed: "Adat dekódolva.",
    noHint: "Nincs több adat",
    notReady: "Mindenkit párosíts előbb.",
    correct: "Felfedezés megerősítve!",
    wrong: "Hibás adatok. Nézd át a naplókat.",
    nextLevel: "Következő küldetés",
    levelDone: "✅ KÜLDETÉS KÉSZ!",
    bossDone: "🏆 EXPEDÍCIÓ KÉSZ!",
    locked: "KORLÁTOZOTT",
    solvePrompt: "Rendelj minden felfedezőt pontosan egy bolygóhoz vagy tárgyhoz.",
    completed: "Archiválva",
    current: "Aktív",
  },
} as const;

const LEVELS: DeductionLevel[] = [
  {
    level: 1,
    badge: "🚀",
    title: "Inner Orbit",
    rows: ["Nova", "Orion", "Vega"],
    columns: ["Moon", "Mars", "Venus"],
    clues: [
      "Nova was not on the Moon.",
      "Orion was on Venus.",
      "Vega was not on Mars.",
    ],
    solution: [1, 2, 0],
  },
  {
    level: 2,
    badge: "💎",
    title: "Lost Relics",
    rows: ["Lyra", "Jax", "Kira"],
    columns: ["Gem", "Map", "Key"],
    clues: [
      "Lyra found the Map.",
      "Jax did not find the Key.",
      "Kira did not find the Gem.",
    ],
    solution: [2, 0, 1],
  },
  {
    level: 3,
    badge: "☀️",
    title: "Solar Flare",
    rows: ["Sol", "Luna", "Terra"],
    columns: ["Red Zone", "Blue Zone", "Gold Zone"],
    clues: [
      "Sol was not in the Red Zone.",
      "Luna was not in the Gold Zone.",
      "Terra was in the Blue Zone.",
      "Sol was not in the Blue Zone.",
    ],
    solution: [2, 0, 1],
  },
  {
    level: 4,
    badge: "🛸",
    title: "Base Camp",
    rows: ["Commander", "Pilot", "Scout"],
    columns: ["Flagship", "Outpost", "Star-Gate"],
    clues: [
      "The Pilot was at the Star-Gate.",
      "The Scout was not at the Flagship.",
      "The Commander was not at the Star-Gate.",
    ],
    solution: [0, 2, 1],
  },
  {
    level: 5,
    badge: "🌀",
    title: "Nebula Core",
    rows: ["Alpha", "Beta", "Delta"],
    columns: ["Sector 1", "Sector 2", "Sector 3"],
    clues: [
      "Alpha was not in Sector 1.",
      "Beta was in Sector 2.",
      "Delta was not in Sector 3.",
    ],
    solution: [2, 1, 0],
  },
  {
    level: 6,
    badge: "🗿",
    title: "Statue of Orion",
    rows: ["Nova", "Orion", "Vega", "Lyra"],
    columns: ["Crystal", "Idol", "Map", "Key"],
    clues: [
      "Nova found the Key.",
      "Vega found the Idol.",
      "Orion did not find the Crystal.",
      "Orion did not find the Key.",
    ],
    solution: [3, 2, 1, 0],
  },
  {
    level: 7,
    badge: "🪐",
    title: "Giant Storm",
    rows: ["Jax", "Kira", "Sol", "Luna"],
    columns: ["Mars", "Venus", "Saturn", "Jupiter"],
    clues: [
      "Jax was not on Mars or Venus.",
      "Kira was on Saturn.",
      "Sol was on Mars.",
      "Luna was not on Jupiter.",
    ],
    solution: [3, 2, 0, 1],
  },
  {
    level: 8,
    badge: "🌟",
    title: "Alpha Centauri",
    rows: ["Red", "Blue", "Green", "Gold"],
    columns: ["Alpha", "Beta", "Gamma", "Delta"],
    clues: [
      "Red reached Delta.",
      "Blue was not on Alpha or Beta.",
      "Green was on Alpha.",
      "Gold was on Beta.",
    ],
    solution: [3, 2, 0, 1],
  },
  {
    level: 9,
    badge: "🌋",
    title: "Elemental Forge",
    rows: ["Tank", "Healer", "Mage", "Rogue"],
    columns: ["Fire", "Water", "Earth", "Air"],
    clues: [
      "Tank was not linked to Fire or Water.",
      "The Healer matched Water.",
      "The Mage matched Fire.",
      "The Rogue was not linked to Earth.",
    ],
    solution: [2, 1, 0, 3],
  },
  {
    level: 10,
    badge: "❄️",
    title: "Seasonal Shift",
    rows: ["North", "South", "East", "West"],
    columns: ["Winter", "Spring", "Summer", "Autumn"],
    clues: [
      "North matches Winter.",
      "South is not Spring or Summer.",
      "East matches Summer.",
      "West matches Spring.",
    ],
    solution: [0, 3, 2, 1],
  },
];

function loadSave(): SaveData {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) return JSON.parse(raw) as SaveData;
  } catch {
    // ignore
  }
  return { currentLevel: 1, completedLevels: [] };
}

function writeSave(save: SaveData) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

function rarityForScore(score: number): Rarity {
  if (score >= 95) return "legendary";
  if (score >= 80) return "gold";
  if (score >= 60) return "silver";
  return "bronze";
}

function DeductionGrid2Page() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const router = useRouter();
  const searchParams = useSearchParams();
  const matchId = searchParams.get("match");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const urlLevel = searchParams.get("level");
  const mixround = searchParams.get("mixround");
  const isMultiplayer = !!matchId;
  const isMix = !!mixround;
  const myName = getUsername() || "You";

  const [save, setSave] = useState<SaveData>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen] = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [selections, setSelections] = useState<number[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [hintsLeft, setHintsLeft] = useState(1);
  const [feedback, setFeedback] = useState<string>("");
  const [reward, setReward] = useState<{ rarity: Rarity; score: number; total: number } | null>(null);
  const [milestoneKey, setMilestoneKey] = useState(0);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const autoStartRef = useRef(false);

  const currentLevel = LEVELS.find(l => l.level === activeLevel) ?? LEVELS[0];

  useEffect(() => {
    const loaded = loadSave();
    setSave(loaded);
    setActiveLevel(Math.min(loaded.currentLevel, LEVELS.length));
  }, []);

  useEffect(() => {
    if (!isMultiplayer || !matchId || autoStartRef.current) return;
    autoStartRef.current = true;
    const parsed = parseInt(urlLevel || "0", 10);
    const levelNum = Number.isFinite(parsed) && parsed > 0 ? Math.min(LEVELS.length, Math.max(1, parsed)) : Math.min(LEVELS.length, Math.max(1, save.currentLevel || 1));
    startLevel(levelNum);
  }, [isMultiplayer, matchId, urlLevel, save.currentLevel]);

  function startLevel(levelNum: number) {
    const level = LEVELS.find(l => l.level === levelNum);
    if (!level) return;
    setActiveLevel(levelNum);
    setSelections(Array(level.rows.length).fill(-1));
    setMistakes(0);
    setHintsLeft(1);
    setFeedback("");
    setReward(null);
    setScoreSubmitted(false);
    setMyFinalScore(null);
    setOppFinalScore(null);
    setScreen("playing");
    incrementTotalGames();
  }

  function goBackToMap() {
    setScreen("expedition");
    setFeedback("");
  }

  function chooseCell(rowIndex: number, colIndex: number) {
    if (screen !== "playing") return;
    setSelections(prev => {
      const next = [...prev];
      const current = next[rowIndex];
      const newCol = current === colIndex ? -1 : colIndex;
      if (newCol >= 0) {
        for (let i = 0; i < next.length; i++) {
          if (i !== rowIndex && next[i] === newCol) next[i] = -1;
        }
      }
      next[rowIndex] = newCol;
      return next;
    });
    setFeedback("");
  }

  function useHint() {
    if (hintsLeft <= 0) {
      setFeedback(t.noHint);
      return;
    }
    setSelections(prev => {
      const next = [...prev];
      const targetRow = next.findIndex((choice, i) => choice !== currentLevel.solution[i]);
      if (targetRow >= 0) {
        next[targetRow] = currentLevel.solution[targetRow];
      }
      return next;
    });
    setHintsLeft(v => Math.max(0, v - 1));
    setFeedback(t.hintUsed);
  }

  function checkGrid() {
    if (selections.some(s => s < 0)) {
      setFeedback(t.notReady);
      return;
    }
    const solved = selections.every((choice, rowIndex) => choice === currentLevel.solution[rowIndex]);
    if (!solved) {
      setMistakes(v => v + 1);
      setFeedback(t.wrong);
      return;
    }

    const score = Math.max(40, 100 - mistakes * 12 - (hintsLeft < 1 ? 12 : 0));
    const rarity = rarityForScore(score);
    setReward({ rarity, score, total: 100 });
    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      setMyFinalScore(score);
      if (isMix) {
        submitMixRoundScore(matchId, score, playerNum === "1").then(() => setScreen("multi-waiting"));
      } else {
        submitScore(matchId, score, playerNum === "1").then(() => setScreen("multi-waiting"));
      }
      return;
    }

    setScreen("reward");

    const saveNext: SaveData = {
      currentLevel: Math.max(save.currentLevel, Math.min(LEVELS.length, activeLevel + 1)),
      completedLevels: save.completedLevels.includes(activeLevel)
        ? save.completedLevels
        : [...save.completedLevels, activeLevel].sort((a, b) => a - b),
    };
    setSave(saveNext);
    writeSave(saveNext);
  }

  function resetCurrentLevel() {
    startLevel(activeLevel);
  }

  useEffect(() => {
    if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;
    const isP1 = playerNum === "1";

    const checkMatch = async () => {
      if (isMix) {
        const result = await pollMixRound(matchId, parseInt(mixround || "1", 10), isP1, opponentName);
        if (result.action === "finished") {
          setMyFinalScore(result.myWins);
          setOppFinalScore(result.oppWins);
          setScreen("multi-result");
          return true;
        }
        if (result.action === "next") {
          router.push(result.url);
          return true;
        }
        return false;
      }

      const { data } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
      if (!data) return false;
      const oppDone = isP1 ? data.player2_done : data.player1_done;
      const oppScore = isP1 ? data.player2_score : data.player1_score;
      const myScore = isP1 ? data.player1_score : data.player2_score;
      if (oppDone && oppScore !== null && myScore !== null) {
        setMyFinalScore(myScore);
        setOppFinalScore(oppScore);
        setScreen("multi-result");
        return true;
      }
      return false;
    };

    checkMatch();
    const interval = setInterval(async () => { if (await checkMatch()) clearInterval(interval); }, 2000);
    return () => clearInterval(interval);
  }, [screen, isMultiplayer, matchId, isMix, playerNum, router, opponentName, mixround]);

  const completedSet = new Set(save.completedLevels);
  const isUnlocked = (levelNum: number) => levelNum <= save.currentLevel;

  if (screen === "reward" && reward) {
    return (
      <RewardReveal
        rarity={reward.rarity}
        game="deductiongrid2"
        score={reward.score}
        total={reward.total}
        onDone={() => {
          setScreen("levelComplete");
          setMilestoneKey(v => v + 1);
        }}
      />
    );
  }

  if (screen === "multi-waiting") {
    return (
      <main className="min-h-screen bg-[#0A0A1A] text-white flex items-center justify-center px-4 py-5 sm:px-5 sm:py-6">
        <motion.div
          className="w-full max-w-[560px] rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 text-center shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-xs uppercase tracking-[0.35em] text-[#6366F1] font-black">
            {t.progress}
          </div>
          <div className="mt-3 text-3xl font-black">{t.title}</div>
          <p className="mt-3 text-white/65 text-sm">
            {opponentName} is still playing.
          </p>
        </motion.div>
      </main>
    );
  }

  if (screen === "multi-result" && myFinalScore !== null && oppFinalScore !== null) {
    return (
      <MultiplayerResult
        myScore={myFinalScore}
        oppScore={oppFinalScore}
        myName={myName}
        oppName={opponentName}
        onContinue={() => router.push("/multiplayer")}
      />
    );
  }

  if (screen === "levelComplete") {
    return (
      <GameShellLevelComplete
        homeLabel={t.home}
        heading={activeLevel >= LEVELS.length ? t.bossDone : t.levelDone}
        title={currentLevel.title}
        expeditionMapLabel={t.expeditionMap}
        nextLevelLabel={t.nextLevel}
        accentClassName="bg-[#6366F1]/15 border border-[#6366F1]/35 text-[#C4B5FD]"
        accentTextClassName="text-[#6366F1]"
        badge={currentLevel.badge}
        showNext={activeLevel < LEVELS.length}
        onBackToMap={goBackToMap}
        onNextLevel={() => startLevel(activeLevel + 1)}
        milestoneKey={milestoneKey}
      />
    );
  }

  if (screen === "playing") {
    const showWrong = feedback === t.wrong;
    return (
      <main className="min-h-screen bg-[#0A0A1A] text-white px-4 py-4 sm:px-5 sm:py-5">
        <div className="mx-auto w-full max-w-[980px]">
          <div className="flex items-center justify-between gap-3 mb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold">
            <Home size={16} /> {t.home}
          </Link>
            <div className="text-xs uppercase tracking-[0.3em] text-[#6366F1] font-black">{currentLevel.title}</div>
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.25fr_0.85fr]">
            <motion.section
              className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-white/40 font-black">{t.levelLabel} {currentLevel.level}/{LEVELS.length}</div>
                  <h1 className="mt-2 text-xl sm:text-3xl font-black">{t.title}</h1>
                  <p className="mt-2 text-white/65 text-xs sm:text-sm">{t.subtitle}</p>
                </div>
                <div className="text-3xl sm:text-4xl">{currentLevel.badge}</div>
              </div>

              <div className="mb-4 rounded-2xl border border-[#6366F1]/15 bg-[#6366F1]/8 p-4 text-sm text-white/75 leading-relaxed">
                {t.solvePrompt}
              </div>

              <div className="flex items-center justify-between gap-3 mb-3 text-xs font-bold text-white/55">
                <span>{t.levelsOf} {completedSet.size}/{LEVELS.length}</span>
                <span>{t.progress}</span>
              </div>

              <div className="grid gap-1.5 sm:gap-2 overflow-x-auto pb-2" style={{ gridTemplateColumns: `minmax(88px, auto) repeat(${currentLevel.columns.length}, minmax(64px, 1fr))` }}>
                <div />
                {currentLevel.columns.map((col) => (
                  <div key={col} className="px-2 py-2 rounded-xl bg-white/5 border border-white/10 text-center text-[9px] sm:text-[10px] font-black uppercase tracking-[0.08em] sm:tracking-[0.15em] text-white/75 flex items-center justify-center min-w-[64px]">
                    {col}
                  </div>
                ))}
                {currentLevel.rows.map((row, rowIndex) => (
                  <div key={row} className="contents">
                    <div className="px-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-white/90 flex items-center justify-center text-center">
                      {row}
                    </div>
                    {currentLevel.columns.map((col, colIndex) => {
                      const selected = selections[rowIndex] === colIndex;
                      const isCorrect = currentLevel.solution[rowIndex] === colIndex;
                      const wrong = showWrong && selected && !isCorrect;
                      return (
                        <motion.button
                          key={`${row}-${col}`}
                          type="button"
                          whileTap={{ scale: 0.97 }}
                          onClick={() => chooseCell(rowIndex, colIndex)}
                          className={[
                            "min-h-[58px] sm:min-h-[68px] min-w-[64px] rounded-xl border text-base sm:text-lg font-black transition-all",
                            selected
                              ? "bg-[#6366F1]/20 border-[#6366F1]/60 text-white shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                              : "bg-white/4 border-white/10 text-white/40 hover:bg-white/8 hover:border-white/20",
                            wrong ? "border-rose-400/70 bg-rose-500/12 text-rose-100" : "",
                            !showWrong && selected ? "ring-1 ring-[#6366F1]/35" : "",
                          ].join(" ")}
                          aria-label={`${row}-${col}`}
                        >
                          {selected ? <Check size={18} className="mx-auto" /> : <span className="text-xs opacity-0">•</span>}
                        </motion.button>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={checkGrid}
                  className="px-4 py-2.5 rounded-xl bg-[#6366F1] text-white text-sm font-black"
                >
                  {t.checkGrid}
                </button>
                <button
                  onClick={useHint}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/75 text-sm font-black inline-flex items-center gap-2"
                >
                  <HelpCircle size={15} /> {t.hint} ({hintsLeft})
                </button>
                <button
                  onClick={resetCurrentLevel}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/75 text-sm font-black inline-flex items-center gap-2"
                >
                  <RotateCcw size={15} /> {t.retry}
                </button>
              </div>

              <div className="mt-4 min-h-[28px] text-sm font-semibold text-white/70">
                {feedback && <span>{feedback}</span>}
              </div>
            </motion.section>

            <motion.aside
              className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs uppercase tracking-[0.35em] text-white/40 font-black">{t.clues}</div>
                <div className="text-xs text-white/45 font-semibold">{hintsLeft > 0 ? t.hintLeft : t.noHint}</div>
              </div>
              <div className="space-y-3">
                {currentLevel.clues.map((clue, index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/78 leading-relaxed">
                    <span className="text-[#C4B5FD] font-black mr-2">{index + 1}.</span>{clue}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-[#6366F1]/15 bg-[#6366F1]/8 p-4 text-sm text-white/70">
                <div className="font-black text-white mb-1">{t.howToPlay}</div>
                <div>{t.how1}</div>
                <div className="mt-2">{t.how2}</div>
                <div className="mt-2">{t.how3}</div>
              </div>
            </motion.aside>
          </div>
        </div>
      </main>
    );
  }

  return (
    <GameShellExpedition
      homeLabel={t.home}
      title={t.title}
      subtitle={t.subtitle}
      prompt={t.solvePrompt}
      accentClassName="border-[#6366F1]/40"
      accentTextClassName="text-[#C4B5FD]"
      icon={Rocket}
      levels={LEVELS.map((level) => ({
        id: level.level,
        badge: level.badge,
        title: level.title,
        unlocked: isUnlocked(level.level),
        completed: completedSet.has(level.level),
      }))}
      currentLabel={t.current}
      completedLabel={t.completed}
      lockedLabel={t.locked}
      levelLabel={t.levelLabel}
      onStartLevel={startLevel}
    />
  );
}

export default function DeductionGrid2PageWrapper() {
  return <Suspense><DeductionGrid2Page /></Suspense>;
}
