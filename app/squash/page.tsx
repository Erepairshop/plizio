"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Imports
import { useLang } from "@/components/LanguageProvider";
import AvatarCompanion from "@/components/AvatarCompanion";
import RewardReveal from "@/components/RewardReveal";
import MultiplayerExitConfirm from "@/components/MultiplayerExitConfirm";
import MultiplayerAbandonNotice from "@/components/MultiplayerAbandonNotice";
import MultiplayerResult from "@/components/MultiplayerResult";

// Game logic
import {
  SquashGameState,
  Difficulty,
  COURT_WIDTH,
  COURT_HEIGHT,
  BALL_RADIUS,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  BACK_WALL_X,
  FRONT_WALL_X,
  WINNING_SCORE,
  initializeGame,
  startServe,
  processGameFrame,
  playerHitServe,
  aiHitServe,
  checkScoringConditions,
} from "@/lib/squashGame";

// Utils
import { getGender, AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import { saveCard, calculateRarity, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, checkNewMilestones } from "@/lib/milestones";
import { getUsername } from "@/lib/username";
import { submitScore, abandonMatch } from "@/lib/multiplayer";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type Screen = "difficulty" | "playing" | "won" | "lost" | "reward" | "multi-waiting" | "multi-result";

interface DifficultyOption {
  id: Difficulty;
  label: string;
  description: string;
  color: string;
}

// ============================================================================
// MAIN COMPONENT (with Suspense wrapper)
// ============================================================================

export default function SquashPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SquashPage />
    </Suspense>
  );
}

function SquashPage() {
  const { lang } = useLang();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Multiplayer params
  const matchId = searchParams.get("match");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const isMultiplayer = !!matchId;

  // Screen state
  const [screen, setScreen] = useState<Screen>("difficulty");
  const [difficulty, setDifficulty] = useState<Difficulty>("normal");

  // Game state
  const [gameState, setGameState] = useState<SquashGameState>(initializeGame());
  const [mouseY, setMouseY] = useState(COURT_HEIGHT / 2 - PADDLE_HEIGHT / 2);
  const [bestScore, setBestScore] = useState(0);

  // Multiplayer state
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [earnedCard, setEarnedCard] = useState<"bronze" | "silver" | "gold" | "legendary" | null>(null);

  // Avatar state
  const [gender] = useState<AvatarGender>(getGender());
  const [activeSkin] = useState(getSkinDef(getActiveSkin()));
  const [activeFace] = useState(getFaceDef(getActiveFace()));
  const [activeTop] = useState(() => {
    const id = getActive("top");
    return id ? getTopDef(id) : null;
  });
  const [activeBottom] = useState(() => {
    const id = getActive("bottom");
    return id ? getBottomDef(id) : null;
  });
  const [activeShoe] = useState(() => {
    const id = getActive("shoe");
    return id ? getShoeDef(id) : null;
  });
  const [activeCape] = useState(() => {
    const id = getActive("cape");
    return id ? getCapeDef(id) : null;
  });
  const [activeGlasses] = useState(() => {
    const id = getActive("glasses");
    return id ? getGlassesDef(id) : null;
  });
  const [activeGloves] = useState(() => {
    const id = getActive("gloves");
    return id ? getGloveDef(id) : null;
  });
  const [activeHat] = useState(() => {
    const id = getActiveHat();
    return id ? getHatDef(id) : null;
  });
  const [activeTrail] = useState(() => {
    const id = getActiveTrail();
    return id ? getTrailDef(id) : null;
  });


  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const difficultySelectRef = useRef<HTMLDivElement>(null);

  // ============================================================================
  // LOAD BEST SCORE FROM localStorage
  // ============================================================================

  useEffect(() => {
    const saved = localStorage.getItem("squash_arcade_v1");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setBestScore(data.bestScore || 0);
      } catch {
        setBestScore(0);
      }
    }
  }, []);

  // ============================================================================
  // GAME LOOP
  // ============================================================================

  useEffect(() => {
    if (screen !== "playing") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gameLoop = () => {
      setGameState((prev) => {
        let newState = processGameFrame(prev, mouseY, difficulty);

        // AI serve
        if (newState.gameStatus === "serving" && !newState.isPlayerServing) {
          const elapsed = Date.now() - (newState.serveStartTime || 0);
          if (elapsed > 800) {
            newState = aiHitServe(newState);
          }
        }

        // Draw
        drawGame(ctx, newState, mouseY);

        return newState;
      });

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [screen, mouseY, difficulty]);

  // ============================================================================
  // HANDLE GAME END
  // ============================================================================

  useEffect(() => {
    if (screen !== "playing") return;

    if (gameState.gameStatus === "won") {
      // Player won
      const playerScore = gameState.playerScore;

      if (isMultiplayer && matchId && !scoreSubmitted) {
        // Multiplayer: submit score
        setScoreSubmitted(true);
        submitScore(matchId, playerScore, playerNum === "1").then(() => setScreen("multi-waiting"));
        return;
      }

      // Single player: save card + show reward
      const rarity: "bronze" | "silver" | "gold" | "legendary" = "bronze"; // Squash always bronze for now
      const card = {
        id: generateCardId(),
        game: "squash",
        theme: difficulty,
        rarity,
        score: playerScore,
        total: WINNING_SCORE,
        date: new Date().toISOString(),
      };
      saveCard(card);
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();
      incrementPerfectScores();

      // Update best score
      const newBest = Math.max(bestScore, playerScore);
      setBestScore(newBest);
      localStorage.setItem("squash_arcade_v1", JSON.stringify({ bestScore: newBest }));

      // Check milestones (globally handled by MilestonePopup)
      checkNewMilestones();

      setEarnedCard(rarity);
      setScreen("reward");
    } else if (gameState.gameStatus === "lost") {
      // Player lost
      if (isMultiplayer && matchId && !scoreSubmitted) {
        setScoreSubmitted(true);
        submitScore(matchId, gameState.playerScore, playerNum === "1").then(() => setScreen("multi-waiting"));
        return;
      }

      // Single player: show loss
      setScreen("lost");
    }
  }, [gameState.gameStatus, screen, isMultiplayer, matchId, scoreSubmitted, playerNum, bestScore]);

  // ============================================================================
  // MULTIPLAYER POLLING
  // ============================================================================

  useEffect(() => {
    if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;

    const pollMatch = async () => {
      const isP1 = playerNum === "1";
      const { supabase } = await import("@/lib/supabase/client");
      const { data } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();

      if (!data) return false;

      const oppDone = isP1 ? data.player2_done : data.player1_done;
      const oppScore = isP1 ? data.player2_score : data.player1_score;

      if (oppDone && oppScore !== null) {
        setOppFinalScore(oppScore);
        setScreen("multi-result");
        return true;
      }
      return false;
    };

    pollMatch();
    const interval = setInterval(pollMatch, 2000);
    return () => clearInterval(interval);
  }, [screen, isMultiplayer, matchId, playerNum]);

  // ============================================================================
  // INPUT HANDLERS
  // ============================================================================

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setMouseY(Math.max(0, Math.min(y - PADDLE_HEIGHT / 2, COURT_HEIGHT - PADDLE_HEIGHT)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const y = e.touches[0].clientY - rect.top;
    setMouseY(Math.max(0, Math.min(y - PADDLE_HEIGHT / 2, COURT_HEIGHT - PADDLE_HEIGHT)));
  };

  const handleCanvasClick = () => {
    if (gameState.gameStatus === "serving" && gameState.isPlayerServing) {
      setGameState((prev) => playerHitServe(prev));
    }
  };

  const handleDifficultySelect = (diff: Difficulty) => {
    setDifficulty(diff);
    const newGame = startServe(initializeGame(), true);
    setGameState(newGame);
    setScreen("playing");
  };

  // ============================================================================
  // TRANSLATIONS
  // ============================================================================

  const t = {
    en: {
      title: "Squash Arcade",
      selectDifficulty: "Select Difficulty",
      easy: "Easy",
      normal: "Normal",
      hard: "Hard",
      easyDesc: "Perfect for beginners",
      normalDesc: "Standard arcade challenge",
      hardDesc: "Expert reflexes required",
      play: "Play",
      score: "Score",
      best: "Best Score",
      you: "You",
      ai: "AI",
      serve: "Click to Serve",
      lost: "Game Over",
      won: "Victory!",
      playAgain: "Play Again",
      home: "Home",
    },
    hu: {
      title: "Squash Arcade",
      selectDifficulty: "Válassz nehézséget",
      easy: "Könnyű",
      normal: "Normál",
      hard: "Nehéz",
      easyDesc: "Kezdőknek ideális",
      normalDesc: "Standard arcade kihívás",
      hardDesc: "Profi reflexek szükségesek",
      play: "Játszd",
      score: "Pontszám",
      best: "Legjobb pontszám",
      you: "Te",
      ai: "AI",
      serve: "Kattints a szerváláshoz",
      lost: "Vége a játéknak",
      won: "Győzelem!",
      playAgain: "Újra játszod",
      home: "Főoldal",
    },
    de: {
      title: "Squash Arcade",
      selectDifficulty: "Schwierigkeitsgrad wählen",
      easy: "Leicht",
      normal: "Normal",
      hard: "Schwer",
      easyDesc: "Perfekt für Anfänger",
      normalDesc: "Standard Arcade Herausforderung",
      hardDesc: "Expertenreflexe erforderlich",
      play: "Spielen",
      score: "Punktzahl",
      best: "Beste Punktzahl",
      you: "Du",
      ai: "AI",
      serve: "Klicken zum Aufschlag",
      lost: "Spielende",
      won: "Sieg!",
      playAgain: "Nochmal spielen",
      home: "Startseite",
    },
    ro: {
      title: "Squash Arcade",
      selectDifficulty: "Alege dificultatea",
      easy: "Ușor",
      normal: "Normal",
      hard: "Greu",
      easyDesc: "Ideal pentru începători",
      normalDesc: "Provocare standard arcade",
      hardDesc: "Reflexe de expert necesare",
      play: "Joacă",
      score: "Scor",
      best: "Cel mai bun scor",
      you: "Tu",
      ai: "AI",
      serve: "Clic pentru serviciu",
      lost: "Joc Încheiat",
      won: "Victorie!",
      playAgain: "Joacă din nou",
      home: "Acasă",
    },
  };

  const texts = t[lang as keyof typeof t] || t.en;

  const difficultyOptions: DifficultyOption[] = [
    { id: "easy", label: texts.easy, description: texts.easyDesc, color: "#00ff88" },
    { id: "normal", label: texts.normal, description: texts.normalDesc, color: "#00d4ff" },
    { id: "hard", label: texts.hard, description: texts.hardDesc, color: "#ff2d78" },
  ];

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Title */}
      <div className="absolute top-6 left-6 z-10">
        <h1 className="text-3xl font-black text-white/90">{texts.title}</h1>
      </div>

      {/* Difficulty Selection Screen */}
      {screen === "difficulty" && (
        <motion.div
          ref={difficultySelectRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex flex-col gap-6 items-center"
        >
          <h2 className="text-2xl font-bold text-white/80 text-center">{texts.selectDifficulty}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {difficultyOptions.map((opt) => (
              <motion.button
                key={opt.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDifficultySelect(opt.id)}
                className="px-6 py-4 rounded-lg border-2 border-white/20 bg-white/5 hover:bg-white/10 transition-all"
                style={{ borderColor: opt.color }}
              >
                <div className="text-lg font-bold" style={{ color: opt.color }}>
                  {opt.label}
                </div>
                <div className="text-xs text-white/50 mt-2">{opt.description}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Game Screen */}
      {(screen === "playing" || screen === "won" || screen === "lost" || screen === "multi-waiting" || screen === "multi-result") && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-4 flex-1"
        >
          {/* Canvas */}
          <canvas
            ref={canvasRef}
            width={COURT_WIDTH}
            height={COURT_HEIGHT}
            onClick={handleCanvasClick}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="border-4 border-cyan-400/50 rounded-lg shadow-2xl cursor-none bg-black"
          />

          {/* HUD */}
          <div className="flex gap-8 text-white/80 font-bold">
            <div className="text-center">
              <div className="text-xs uppercase opacity-60">{texts.you}</div>
              <div className="text-2xl">{gameState.playerScore}</div>
            </div>
            <div className="text-xs opacity-40">•</div>
            <div className="text-center">
              <div className="text-xs uppercase opacity-60">{texts.ai}</div>
              <div className="text-2xl">{gameState.aiScore}</div>
            </div>
          </div>

          {/* Serve indicator */}
          {screen === "playing" && gameState.gameStatus === "serving" && (
            <div className="text-sm text-cyan-400 font-bold animate-pulse">{texts.serve}</div>
          )}

          {/* Exit button */}
          <button
            onClick={() => {
              if (isMultiplayer) {
                setShowExitConfirm(true);
              } else {
                setScreen("difficulty");
                setGameState(initializeGame());
              }
            }}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors z-50"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}

      {/* Reward Screen */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="squash"
          score={gameState.playerScore}
          total={WINNING_SCORE}
          onDone={() => setScreen("won")}
        />
      )}

      {/* Win Screen */}
      {screen === "won" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="text-5xl font-black text-green-400">{texts.won}</div>
          <div className="text-2xl text-white/70">
            {texts.score}: <span className="text-green-400 font-bold">{gameState.playerScore}</span>
          </div>
          <div className="text-sm text-white/50">
            {texts.best}: <span className="text-white/70 font-bold">{bestScore}</span>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setScreen("difficulty");
                setGameState(initializeGame());
              }}
              className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors"
            >
              {texts.playAgain}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-lg bg-white/10 text-white font-bold hover:bg-white/20 transition-colors"
            >
              {texts.home}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Loss Screen */}
      {screen === "lost" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="text-5xl font-black text-red-400">{texts.lost}</div>
          <div className="text-2xl text-white/70">
            {texts.score}: <span className="text-red-400 font-bold">{gameState.playerScore}</span>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setScreen("difficulty");
                setGameState(initializeGame());
              }}
              className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors"
            >
              {texts.playAgain}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-lg bg-white/10 text-white font-bold hover:bg-white/20 transition-colors"
            >
              {texts.home}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Multiplayer Result */}
      {screen === "multi-result" && oppFinalScore !== null && (
        <MultiplayerResult
          myScore={gameState.playerScore}
          oppScore={oppFinalScore}
          myName={getUsername() || "???"}
          oppName={opponentName}
          onContinue={() => router.push("/multiplayer")}
        />
      )}

      {/* Multiplayer Dialogs */}
      {isMultiplayer && matchId && (
        <>
          <MultiplayerExitConfirm
            open={showExitConfirm}
            onStay={() => setShowExitConfirm(false)}
            onLeave={() => {
              abandonMatch(matchId);
              router.push("/multiplayer");
            }}
          />
          {screen === "playing" && <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />}
        </>
      )}

      {/* Avatar */}
      <AvatarCompanion
        fixed={true}
        gender={gender}
        activeSkin={activeSkin}
        activeFace={activeFace}
        activeTop={activeTop}
        activeBottom={activeBottom}
        activeShoe={activeShoe}
        activeCape={activeCape}
        activeGlasses={activeGlasses}
        activeGloves={activeGloves}
        activeHat={activeHat}
        activeTrail={activeTrail}
        mood={screen === "won" ? "victory" : screen === "lost" ? "disappointed" : "focused"}
      />
    </div>
  );
}

// ============================================================================
// CANVAS RENDERING FUNCTION
// ============================================================================

function drawGame(ctx: CanvasRenderingContext2D, gameState: SquashGameState, mouseY: number) {
  // Clear court
  ctx.fillStyle = "#0a0a1a";
  ctx.fillRect(0, 0, COURT_WIDTH, COURT_HEIGHT);

  // Court background
  ctx.fillStyle = "rgba(10, 10, 26, 0.5)";
  ctx.fillRect(FRONT_WALL_X, 0, BACK_WALL_X - FRONT_WALL_X, COURT_HEIGHT);

  // Front wall (target) - left side in red
  ctx.fillStyle = "rgba(255, 45, 120, 0.15)";
  ctx.fillRect(0, 0, FRONT_WALL_X, COURT_HEIGHT);

  // Court border
  ctx.strokeStyle = "#00d4ff";
  ctx.lineWidth = 2;
  ctx.strokeRect(FRONT_WALL_X, 0, BACK_WALL_X - FRONT_WALL_X, COURT_HEIGHT);

  // Center line
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = "rgba(0, 212, 255, 0.3)";
  ctx.beginPath();
  ctx.moveTo(COURT_WIDTH / 2, 0);
  ctx.lineTo(COURT_WIDTH / 2, COURT_HEIGHT);
  ctx.stroke();
  ctx.setLineDash([]);

  // Service line
  ctx.strokeStyle = "rgba(0, 212, 255, 0.2)";
  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.moveTo(FRONT_WALL_X, COURT_HEIGHT / 4);
  ctx.lineTo(BACK_WALL_X, COURT_HEIGHT / 4);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(FRONT_WALL_X, (COURT_HEIGHT * 3) / 4);
  ctx.lineTo(BACK_WALL_X, (COURT_HEIGHT * 3) / 4);
  ctx.stroke();
  ctx.setLineDash([]);

  // Player paddle (bottom-right) - CYAN
  const playerPaddleX = BACK_WALL_X - PADDLE_WIDTH - 10;
  ctx.fillStyle = "#00ff88";
  ctx.fillRect(playerPaddleX, mouseY, PADDLE_WIDTH, PADDLE_HEIGHT);
  // Glow
  ctx.shadowColor = "#00ff88";
  ctx.shadowBlur = 10;
  ctx.strokeStyle = "#00ff88";
  ctx.lineWidth = 2;
  ctx.strokeRect(playerPaddleX, mouseY, PADDLE_WIDTH, PADDLE_HEIGHT);
  ctx.shadowBlur = 0;

  // AI paddle (top-left) - PURPLE
  const aiPaddleX = FRONT_WALL_X + 10;
  ctx.fillStyle = "#b44dff";
  ctx.fillRect(aiPaddleX, gameState.aiY, PADDLE_WIDTH, PADDLE_HEIGHT);
  // Glow
  ctx.shadowColor = "#b44dff";
  ctx.shadowBlur = 10;
  ctx.strokeStyle = "#b44dff";
  ctx.lineWidth = 2;
  ctx.strokeRect(aiPaddleX, gameState.aiY, PADDLE_WIDTH, PADDLE_HEIGHT);
  ctx.shadowBlur = 0;

  // Ball - GOLD with glow
  ctx.fillStyle = "#ffd700";
  ctx.beginPath();
  ctx.arc(gameState.ballX, gameState.ballY, BALL_RADIUS, 0, Math.PI * 2);
  ctx.fill();

  // Ball glow
  ctx.shadowColor = "#ffd700";
  ctx.shadowBlur = 15;
  ctx.fillStyle = "rgba(255, 215, 0, 0.5)";
  ctx.beginPath();
  ctx.arc(gameState.ballX, gameState.ballY, BALL_RADIUS + 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Ball trail (motion effect)
  if (gameState.ballVX !== 0 || gameState.ballVY !== 0) {
    ctx.strokeStyle = "rgba(255, 215, 0, 0.2)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gameState.ballX, gameState.ballY);
    ctx.lineTo(gameState.ballX - gameState.ballVX * 5, gameState.ballY - gameState.ballVY * 5);
    ctx.stroke();
  }
}

