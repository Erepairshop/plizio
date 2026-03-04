"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Trophy, CheckCircle, X, Circle } from "lucide-react";
import Link from "next/link";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";
import { ALL_SCENES, type SceneDef } from "./scenes";

type GameState = "ready" | "playing" | "result" | "reward";

const TOTAL_SCENES = 4;

function pickScenes(n: number): SceneDef[] {
  return [...ALL_SCENES].sort(() => Math.random() - 0.5).slice(0, n);
}
const TIME_PER_SCENE = 45;
const MAX_SCORE = TOTAL_SCENES * 5; // 20

interface WrongClick {
  id: number;
  x: number;
  y: number;
}

// ─── STREAK HELPERS ───────────────────────────────────────────────────────────
function getStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  if (!data) return 0;
  const { count, lastDate } = JSON.parse(data);
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastDate === today || lastDate === yesterday) return count;
  return 0;
}

function updateStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  const today = new Date().toDateString();
  if (data) {
    const { count, lastDate } = JSON.parse(data);
    if (lastDate === today) return count;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newCount = lastDate === yesterday ? count + 1 : 1;
    localStorage.setItem("plizio_streak", JSON.stringify({ count: newCount, lastDate: today }));
    return newCount;
  }
  localStorage.setItem("plizio_streak", JSON.stringify({ count: 1, lastDate: today }));
  return 1;
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function SpotDiffPage() {
  const [gameState, setGameState] = useState<GameState>("ready");
  const [pickedScenes, setPickedScenes] = useState<SceneDef[]>(() => pickScenes(TOTAL_SCENES));
  const [sceneIndex, setSceneIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [foundInScene, setFoundInScene] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_SCENE);
  const [totalTime, setTotalTime] = useState(0);
  const [streak, setStreak] = useState(0);
  const [wrongClicks, setWrongClicks] = useState<WrongClick[]>([]);
  const wrongIdRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => { setStreak(getStreak()); }, []);

  const goNextScene = useCallback((currentIndex: number, currentScore: number) => {
    if (currentIndex + 1 >= TOTAL_SCENES) {
      const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
      setTotalTime(elapsed);
      const newStreak = updateStreak();
      setStreak(newStreak);
      const rarity = calculateRarity(currentScore, MAX_SCORE, newStreak, false);
      saveCard({
        id: generateCardId(),
        game: "spotdiff",
        rarity,
        score: currentScore,
        total: MAX_SCORE,
        date: new Date().toISOString(),
      });
      incrementTotalGames();
      updateStats({ highestStreak: newStreak });
      setGameState("reward");
    } else {
      setSceneIndex(currentIndex + 1);
      setFoundInScene([]);
      setTimeLeft(TIME_PER_SCENE);
      setGameState("playing");
    }
  }, []);

  const startGame = () => {
    setPickedScenes(pickScenes(TOTAL_SCENES));
    setSceneIndex(0);
    setScore(0);
    setFoundInScene([]);
    setWrongClicks([]);
    setTimeLeft(TIME_PER_SCENE);
    startTimeRef.current = Date.now();
    setGameState("playing");
  };

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return;
    if (timeLeft <= 0) {
      goNextScene(sceneIndex, score);
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, timeLeft, sceneIndex, score, goNextScene]);

  // SVG click handler for right image
  const handleSvgClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (gameState !== "playing") return;
    const scene = pickedScenes[sceneIndex];
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    // Convert to SVG coordinate space (viewBox 320x200)
    const svgX = ((e.clientX - rect.left) / rect.width) * 320;
    const svgY = ((e.clientY - rect.top) / rect.height) * 200;

    // Check hotspots
    for (const hs of scene.hotspots) {
      if (foundInScene.includes(hs.id)) continue;
      const dist = Math.sqrt((svgX - hs.cx) ** 2 + (svgY - hs.cy) ** 2);
      if (dist <= hs.r) {
        const newFound = [...foundInScene, hs.id];
        const newScore = score + 1;
        setFoundInScene(newFound);
        setScore(newScore);
        if (newFound.length >= 5) {
          setTimeout(() => goNextScene(sceneIndex, newScore), 1400);
        }
        return;
      }
    }

    // Wrong click – show red ripple
    const id = ++wrongIdRef.current;
    // Convert back to percentage for positioning
    const pctX = ((e.clientX - rect.left) / rect.width) * 100;
    const pctY = ((e.clientY - rect.top) / rect.height) * 100;
    setWrongClicks((prev) => [...prev, { id, x: pctX, y: pctY }]);
    setTimeout(() => setWrongClicks((prev) => prev.filter((w) => w.id !== id)), 600);
  }, [gameState, sceneIndex, foundInScene, score, goNextScene]);

  const scene = pickedScenes[sceneIndex];
  const timerColor = timeLeft <= 3 ? "text-neon-pink" : timeLeft <= 10 ? "text-gold" : "text-white/60";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-3 relative pb-8">

      {/* Ready screen */}
      {gameState === "ready" && (
        <motion.div className="flex flex-col items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Search size={48} className="text-amber-400" style={{ filter: "drop-shadow(0 0 15px rgba(251,191,36,0.5))" }} />
          <h1 className="text-2xl font-black tracking-wider text-white">SPOT THE DIFF</h1>
          <p className="text-white/40 text-sm text-center max-w-xs">Keresd meg az 5 különbséget a jobb oldali képen!</p>
          <div className="flex flex-col items-center gap-1 text-white/30 text-xs">
            <span>4 scéna · 5 különbség / scéna · {TIME_PER_SCENE}s limit</span>
          </div>
          <motion.button
            onClick={startGame}
            className="bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold px-8 py-3 rounded-2xl text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY
          </motion.button>
        </motion.div>
      )}

      {/* HUD */}
      {gameState === "playing" && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-lg mx-auto">
            <Link href="/">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                {Array.from({ length: TOTAL_SCENES }, (_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < sceneIndex ? "bg-neon-green" : i === sceneIndex ? "bg-amber-400" : "bg-white/15"}`} />
                ))}
              </div>
              <span className={`text-sm font-bold ${timerColor}`}>{timeLeft}s</span>
            </div>
            <div className="flex items-center gap-1.5 text-gold font-bold text-lg">
              <Trophy size={16} className="text-gold" />
              {score}
            </div>
          </div>
        </div>
      )}

      {/* Game area */}
      {gameState === "playing" && (
        <div className="w-full max-w-lg mt-14 flex flex-col items-center gap-3">
          {/* Scene title */}
          <div className="text-amber-400/50 text-xs font-bold tracking-widest">{scene.title.toUpperCase()}</div>

          {/* Difference status dots */}
          <div className="flex gap-3">
            {scene.hotspots.map((hs) => (
              <motion.div
                key={hs.id}
                animate={foundInScene.includes(hs.id) ? { scale: [1, 1.4, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {foundInScene.includes(hs.id) ? (
                  <CheckCircle size={18} className="text-neon-green" style={{ filter: "drop-shadow(0 0 6px rgba(0,255,136,0.7))" }} />
                ) : (
                  <Circle size={18} className="text-white/20" />
                )}
              </motion.div>
            ))}
          </div>

          {/* ORIGINAL image */}
          <div className="text-white/25 text-xs font-bold tracking-widest self-start ml-1">EREDETI</div>
          <div className="w-full bg-card/50 border border-white/8 rounded-2xl overflow-hidden">
            <scene.SVG isRight={false} found={foundInScene} hotspots={scene.hotspots} />
          </div>

          {/* Label */}
          <div className="text-amber-400/60 text-xs font-bold tracking-widest">KERESD A KÜLÖNBSÉGET ↓</div>

          {/* MODIFIED image – clickable */}
          <div className="w-full bg-card/50 border border-amber-500/25 rounded-2xl overflow-hidden relative">
            <scene.SVG isRight={true} found={foundInScene} hotspots={scene.hotspots} onClick={handleSvgClick} />
            {/* Wrong click ripples (positioned over the SVG) */}
            {wrongClicks.map((wc) => (
              <motion.div
                key={wc.id}
                className="absolute pointer-events-none"
                style={{
                  left: `${wc.x}%`,
                  top: `${wc.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0.9 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <div className="w-8 h-8 rounded-full border-2 border-neon-pink" />
              </motion.div>
            ))}
          </div>

          {/* All found celebration */}
          <AnimatePresence>
            {foundInScene.length >= 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <CheckCircle size={32} className="text-neon-green" style={{ filter: "drop-shadow(0 0 12px rgba(0,255,136,0.7))" }} />
                <span className="text-neon-green font-bold text-sm">Mind megtalálva!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Reward */}
      {gameState === "reward" && (
        <RewardReveal
          rarity={calculateRarity(score, MAX_SCORE, streak, false)}
          game="spotdiff"
          score={score}
          total={MAX_SCORE}
          onDone={() => setGameState("result")}
        />
      )}

      {/* Result */}
      {gameState === "result" && (
        <>
          <ResultCard
            score={score}
            total={MAX_SCORE}
            time={totalTime}
            gameName="Spot the Diff"
            gameIcon={<Search size={24} className="text-amber-400" />}
            onPlayAgain={() => setGameState("ready")}
          />
          <MilestonePopup />
        </>
      )}
    </main>
  );
}
