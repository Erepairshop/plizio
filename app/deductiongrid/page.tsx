"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Check, Grid3x3, HelpCircle, Home, RotateCcw } from "lucide-react";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
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

const SAVE_KEY = "deductiongrid_expedition_v1";

const T = {
  en: {
    title: "DEDUCTION GRID",
    subtitle: "Read the clues, match the pairs and solve 10 logic levels.",
    home: "Home",
    progress: "Progress",
    expeditionMap: "Expedition Map",
    levelLabel: "Level",
    levelsOf: "levels",
    howToPlay: "How to play?",
    how1: "Read every clue before you place a match.",
    how2: "Tap one cell in each row to match a person with a place.",
    how3: "Use the Check button once your grid is complete.",
    clues: "Clues",
    checkGrid: "Check grid",
    retry: "Retry",
    hint: "Hint",
    hintLeft: "Hint available",
    hintUsed: "Hint used.",
    noHint: "No hints left",
    notReady: "Fill every row first.",
    correct: "Correct!",
    wrong: "Not quite. Read the clues again.",
    nextLevel: "Next Level",
    levelDone: "✅ LEVEL DONE!",
    bossDone: "🏆 COMPLETE!",
    locked: "LOCKED",
    solvePrompt: "Match each row with exactly one column.",
    completed: "Completed",
    current: "Current",
  },
  hu: {
    title: "DEDUKCIÓS RÁCS",
    subtitle: "Olvasd el a nyomokat, jelöld a párokat, és oldj meg 10 logikai szintet.",
    home: "Főoldal",
    progress: "Haladás",
    expeditionMap: "Expedíció térkép",
    levelLabel: "Szint",
    levelsOf: "szint",
    howToPlay: "Hogyan játssz?",
    how1: "Olvasd el az összes nyomot, mielőtt választasz.",
    how2: "Érints meg egy mezőt soronként, hogy összeköss egy szereplőt és egy helyet.",
    how3: "A Check gombbal ellenőrizd, ha kész a rács.",
    clues: "Nyomok",
    checkGrid: "Ellenőrzés",
    retry: "Újra",
    hint: "Tipp",
    hintLeft: "Van tipp",
    hintUsed: "Tipp felhasználva.",
    noHint: "Nincs több tipp",
    notReady: "Előbb tölts ki minden sort.",
    correct: "Helyes!",
    wrong: "Még nem jó. Olvasd el újra a nyomokat.",
    nextLevel: "Következő szint",
    levelDone: "✅ SZINT KÉSZ!",
    bossDone: "🏆 KÉSZ!",
    locked: "ZÁROLVA",
    solvePrompt: "Oldd meg a dedukciós rácsot úgy, hogy minden sort pontosan egy oszlophoz rendelsz.",
    completed: "Kész",
    current: "Aktuális",
  },
  de: {
    title: "DEDUKTIONSRASTER",
    subtitle: "Lies die Hinweise, setze die Zuordnungen und löse 10 Logikstufen.",
    home: "Start",
    progress: "Fortschritt",
    expeditionMap: "Expedition",
    levelLabel: "Level",
    levelsOf: "Level",
    howToPlay: "Wie spielt man?",
    how1: "Lies alle Hinweise, bevor du etwas zuordnest.",
    how2: "Tippe pro Zeile genau ein Feld an, um Person und Ort zu verbinden.",
    how3: "Drücke auf Check, wenn das Raster vollständig ist.",
    clues: "Hinweise",
    checkGrid: "Prüfen",
    retry: "Nochmal",
    hint: "Hinweis",
    hintLeft: "Hinweis verfügbar",
    hintUsed: "Hinweis benutzt.",
    noHint: "Keine Hinweise mehr",
    notReady: "Fülle zuerst alle Zeilen.",
    correct: "Richtig!",
    wrong: "Noch nicht. Lies die Hinweise erneut.",
    nextLevel: "Nächstes Level",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 FERTIG!",
    locked: "GESPERRT",
    solvePrompt: "Löse das Deduktionsraster, indem jede Zeile genau einer Spalte zugeordnet wird.",
    completed: "Erledigt",
    current: "Aktuell",
  },
  ro: {
    title: "GRILĂ DE DEDUCȚIE",
    subtitle: "Citește indiciile, alege potrivirile și rezolvă 10 niveluri de logică.",
    home: "Acasă",
    progress: "Progres",
    expeditionMap: "Hartă",
    levelLabel: "Nivel",
    levelsOf: "niveluri",
    howToPlay: "Cum se joacă?",
    how1: "Citește toate indiciile înainte să alegi.",
    how2: "Apasă câte o celulă pe rând pentru a lega o persoană de un loc.",
    how3: "Apasă Check când grila este completă.",
    clues: "Indicii",
    checkGrid: "Verifică",
    retry: "Din nou",
    hint: "Indiciu",
    hintLeft: "Indiciu disponibil",
    hintUsed: "Indiciu folosit.",
    noHint: "Nu mai sunt indicii",
    notReady: "Completează mai întâi toate rândurile.",
    correct: "Corect!",
    wrong: "Încă nu. Recitește indiciile.",
    nextLevel: "Nivelul următor",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 TERMINAT!",
    locked: "BLOCAT",
    solvePrompt: "Rezolvă grila de deducție potrivind fiecare rând cu o singură coloană.",
    completed: "Rezolvat",
    current: "Curent",
  },
} as const;

const LEVELS: DeductionLevel[] = [
  {
    level: 1,
    badge: "🛶",
    title: "Harbor Shift",
    rows: ["Ada", "Ben", "Cara"],
    columns: ["Tower", "Garden", "Dock"],
    clues: [
      "Ada is not at the Tower.",
      "Ben is not in the Garden.",
      "Ben is at the Dock.",
      "Cara is not in the Garden.",
    ],
    solution: [1, 2, 0],
  },
  {
    level: 2,
    badge: "🌙",
    title: "Moon Base",
    rows: ["Leo", "Mia", "Nora"],
    columns: ["Library", "Harbor", "Observatory"],
    clues: [
      "Leo is not in the Library.",
      "Mia is not at the Observatory.",
      "Nora is at the Harbor.",
      "Nora is not in the Library.",
    ],
    solution: [2, 0, 1],
  },
  {
    level: 3,
    badge: "🏰",
    title: "Castle Night",
    rows: ["Arin", "Bo", "Cora"],
    columns: ["Museum", "Station", "Lighthouse"],
    clues: [
      "Arin is not in the Museum.",
      "Bo is not at the Station.",
      "Bo is at the Lighthouse.",
      "Cora is not at the Lighthouse.",
    ],
    solution: [1, 2, 0],
  },
  {
    level: 4,
    badge: "🌱",
    title: "Greenhouse Route",
    rows: ["Ema", "Finn", "Gala"],
    columns: ["Bakery", "Workshop", "Greenhouse"],
    clues: [
      "Ema is not in the Greenhouse.",
      "Finn is not in the Bakery.",
      "Gala is in the Workshop.",
      "Gala is not in the Greenhouse.",
    ],
    solution: [0, 2, 1],
  },
  {
    level: 5,
    badge: "🔒",
    title: "Vault Search",
    rows: ["Hugo", "Iris", "Juno"],
    columns: ["Vault", "Atrium", "Garden"],
    clues: [
      "Hugo is not in the Vault.",
      "Iris is not in the Atrium.",
      "Iris is in the Vault.",
      "Juno is not in the Garden.",
    ],
    solution: [2, 0, 1],
  },
  {
    level: 6,
    badge: "🧭",
    title: "Bridge Line",
    rows: ["Kai", "Lina", "Milo"],
    columns: ["Bridge", "Crypt", "Courtyard"],
    clues: [
      "Kai is not on the Bridge.",
      "Lina is not in the Crypt.",
      "Milo is on the Bridge.",
      "Milo is not in the Courtyard.",
    ],
    solution: [1, 2, 0],
  },
  {
    level: 7,
    badge: "🗼",
    title: "Clocktower Run",
    rows: ["Nia", "Otto", "Pia"],
    columns: ["Clocktower", "Docks", "Plaza"],
    clues: [
      "Nia is not in the Plaza.",
      "Otto is not at the Docks.",
      "Pia is at the Docks.",
      "Pia is not at the Clocktower.",
    ],
    solution: [0, 2, 1],
  },
  {
    level: 8,
    badge: "🌿",
    title: "Conservatory Path",
    rows: ["Quin", "Ria", "Sol"],
    columns: ["Conservatory", "Harbor", "Library"],
    clues: [
      "Quin is not in the Harbor.",
      "Ria is not in the Library.",
      "Sol is in the Conservatory.",
      "Sol is not in the Harbor.",
    ],
    solution: [2, 1, 0],
  },
  {
    level: 9,
    badge: "⚙️",
    title: "Engine Room",
    rows: ["Taro", "Uma", "Vale"],
    columns: ["Engine Room", "Gallery", "Basement"],
    clues: [
      "Taro is not in the Engine Room.",
      "Uma is not in the Gallery.",
      "Vale is in the Basement.",
      "Vale is not in the Engine Room.",
    ],
    solution: [1, 0, 2],
  },
  {
    level: 10,
    badge: "✨",
    title: "Final Archive",
    rows: ["Wren", "Zia", "Yori"],
    columns: ["Observatory", "Chapel", "Archive"],
    clues: [
      "Wren is not in the Archive.",
      "Zia is not at the Observatory.",
      "Yori is in the Chapel.",
      "Yori is not in the Archive.",
    ],
    solution: [0, 2, 1],
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

function DeductionGridPage() {
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
        game="deductiongrid"
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
      <main className="min-h-screen bg-[#0A0A1A] text-white flex items-center justify-center px-5 py-6">
        <motion.div
          className="w-full max-w-[560px] rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-xs uppercase tracking-[0.35em] text-[#8B5CF6] font-black">
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
      <main className="min-h-screen bg-[#0A0A1A] text-white flex flex-col items-center justify-center px-5 py-6">
        <motion.div
          className="w-full max-w-[560px] rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="inline-flex items-center gap-2 text-white/65 text-sm font-semibold">
              <Home size={15} /> {t.home}
            </Link>
            <div className="text-xs uppercase tracking-[0.35em] text-[#8B5CF6] font-black">
              {activeLevel >= LEVELS.length ? t.bossDone : t.levelDone}
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3">{currentLevel.badge}</div>
            <h2 className="text-3xl font-black">{activeLevel >= LEVELS.length ? t.bossDone : t.levelDone}</h2>
            <p className="text-white/65 mt-2">{currentLevel.title}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={goBackToMap}
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/85 text-sm font-bold"
              >
                {t.expeditionMap}
              </button>
              {activeLevel < LEVELS.length && (
                <button
                  onClick={() => startLevel(activeLevel + 1)}
                  className="px-5 py-3 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/35 text-[#C4B5FD] text-sm font-bold flex items-center gap-1"
                >
                  {t.nextLevel} <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>
          <MilestonePopup key={milestoneKey} />
        </motion.div>
      </main>
    );
  }

  if (screen === "playing") {
    const showWrong = feedback === t.wrong;
    return (
      <main className="min-h-screen bg-[#0A0A1A] text-white px-5 py-5">
        <div className="mx-auto w-full max-w-[980px]">
          <div className="flex items-center justify-between gap-3 mb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold">
            <Home size={16} /> {t.home}
          </Link>
            <div className="text-xs uppercase tracking-[0.3em] text-[#8B5CF6] font-black">{currentLevel.title}</div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.85fr]">
            <motion.section
              className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-white/40 font-black">{t.levelLabel} {currentLevel.level}/{LEVELS.length}</div>
                  <h1 className="mt-2 text-2xl sm:text-3xl font-black">{t.title}</h1>
                  <p className="mt-2 text-white/65 text-sm">{t.subtitle}</p>
                </div>
                <div className="text-4xl">{currentLevel.badge}</div>
              </div>

              <div className="mb-4 rounded-2xl border border-[#8B5CF6]/15 bg-[#8B5CF6]/8 p-4 text-sm text-white/75 leading-relaxed">
                {t.solvePrompt}
              </div>

              <div className="flex items-center justify-between gap-3 mb-3 text-xs font-bold text-white/55">
                <span>{t.levelsOf} {completedSet.size}/{LEVELS.length}</span>
                <span>{t.progress}</span>
              </div>

              <div className="grid gap-2" style={{ gridTemplateColumns: `110px repeat(${currentLevel.columns.length}, minmax(0, 1fr))` }}>
                <div />
                {currentLevel.columns.map((col) => (
                  <div key={col} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-center text-[11px] font-black uppercase tracking-[0.22em] text-white/75">
                    {col}
                  </div>
                ))}
                {currentLevel.rows.map((row, rowIndex) => (
                  <div key={row} className="contents">
                    <div className="px-3 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white/90 flex items-center justify-center text-center">
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
                            "min-h-[68px] rounded-xl border text-lg font-black transition-all",
                            selected
                              ? "bg-[#8B5CF6]/20 border-[#8B5CF6]/60 text-white shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                              : "bg-white/4 border-white/10 text-white/40 hover:bg-white/8 hover:border-white/20",
                            wrong ? "border-rose-400/70 bg-rose-500/12 text-rose-100" : "",
                            !showWrong && selected ? "ring-1 ring-[#8B5CF6]/35" : "",
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
                  className="px-4 py-2.5 rounded-xl bg-[#8B5CF6] text-white text-sm font-black"
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
              className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl"
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
              <div className="mt-5 rounded-2xl border border-[#8B5CF6]/15 bg-[#8B5CF6]/8 p-4 text-sm text-white/70">
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
    <main className="min-h-screen bg-[#0A0A1A] text-white px-5 py-6">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="flex items-center justify-between gap-3 mb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold">
            <Home size={16} /> {t.home}
          </Link>
          <div className="text-xs uppercase tracking-[0.35em] text-[#8B5CF6] font-black">{t.title}</div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
          <div className="flex items-center gap-3 text-[#C4B5FD] font-black text-sm uppercase tracking-[0.3em]">
            <Grid3x3 size={18} /> {t.title}
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-black">{t.subtitle}</h1>
          <p className="mt-3 text-white/65 max-w-2xl">{t.solvePrompt}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LEVELS.map((level) => {
              const unlocked = isUnlocked(level.level);
              const completed = completedSet.has(level.level);
              return (
                <button
                  key={level.level}
                  type="button"
                  onClick={() => unlocked && startLevel(level.level)}
                  className={[
                    "text-left rounded-2xl border p-4 transition-all",
                    unlocked
                      ? "bg-white/5 border-white/10 hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/10"
                      : "bg-white/5 border-white/5 opacity-45 cursor-not-allowed",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-2xl">{level.badge}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/45 font-black">
                    {completed ? t.completed : unlocked ? t.current : t.locked}
                  </div>
                </div>
                <div className="mt-3 text-lg font-black">{level.title}</div>
                  <div className="mt-1 text-sm text-white/55">{t.levelLabel} {level.level}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function DeductionGridPageWrapper() {
  return <Suspense><DeductionGridPage /></Suspense>;
}
