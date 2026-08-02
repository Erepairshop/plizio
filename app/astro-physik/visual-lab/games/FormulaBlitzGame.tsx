"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- TÍPUSOK ---
export interface FormulaBlitzGameProps {
  grade: number;
  lang: "de" | "hu" | "ro" | "en";
  onDone?: (score: number) => void;
}

interface Question {
  id: string;
  formula: string;
  question: Record<"de" | "hu" | "ro" | "en", string>;
  correct: string;
  wrong: string[];
  unit: string;
}

interface FallItem {
  id: string;
  text: string;
  isCorrect: boolean;
  xPos: string;
}

interface Particle {
  id: string;
  x: number;
  y: number;
  color: string;
}

// --- SZÓTÁR ---
const DICTIONARY = {
  de: { title: "Formel Blitz", score: "Punkte", lives: "Leben", correct: "Richtig!", wrong: "Falsch!", gameOver: "Spiel vorbei", playAgain: "Nochmal", next: "Weiter", win: "Sieg!", combo: "KOMBO!" },
  hu: { title: "Képlet Blitz", score: "Pont", lives: "Élet", correct: "Helyes!", wrong: "Rossz!", gameOver: "Vége", playAgain: "Újra", next: "Tovább", win: "Nyertél!", combo: "KOMBÓ!" },
  ro: { title: "Formula Blitz", score: "Scor", lives: "Vieți", correct: "Corect!", wrong: "Greșit!", gameOver: "Gata", playAgain: "Din nou", next: "Înainte", win: "Victorie!", combo: "COMBO!" },
  en: { title: "Formula Blitz", score: "Score", lives: "Lives", correct: "Correct!", wrong: "Wrong!", gameOver: "Game Over", playAgain: "Retry", next: "Next", win: "You Won!", combo: "COMBO!" },
};

// --- KÉRDÉSEK ADATBÁZISA (Kompakt formátumban) ---
const q = { de: "Was fehlt?", hu: "Mi hiányzik?", ro: "Ce lipsește?", en: "What's missing?" };
const QUESTIONS: Record<number, Question[]> = {
  5: [
    { id: "k5-1", formula: "F = ? × a", question: q, correct: "m", wrong: ["v", "s", "t"], unit: "Newton (N)" },
    { id: "k5-2", formula: "E = ? × t", question: q, correct: "P", wrong: ["W", "F", "m"], unit: "Joule (J)" },
    { id: "k5-3", formula: "P = F / ?", question: q, correct: "A", wrong: ["m", "v", "s"], unit: "Pascal (Pa)" },
    { id: "k5-4", formula: "W = F × ?", question: q, correct: "s", wrong: ["t", "a", "m"], unit: "Joule (J)" },
    { id: "k5-5", formula: "v = ? / t", question: q, correct: "s", wrong: ["F", "m", "a"], unit: "m/s" },
  ],
  6: [
    { id: "k6-1", formula: "U = ? × I", question: q, correct: "R", wrong: ["P", "Q", "m"], unit: "Volt (V)" },
    { id: "k6-2", formula: "P_el = U × ?", question: q, correct: "I", wrong: ["R", "t", "s"], unit: "Watt (W)" },
    { id: "k6-3", formula: "Q = m × c × ?", question: q, correct: "ΔT", wrong: ["Δv", "Δs", "Δp"], unit: "Joule (J)" },
    { id: "k6-4", formula: "F_A = ? × V × g", question: q, correct: "ρ", wrong: ["m", "p", "A"], unit: "Newton (N)" },
    { id: "k6-5", formula: "p = ? / V", question: q, correct: "m", wrong: ["F", "ρ", "g"], unit: "kg/m³" },
  ],
  7: [
    { id: "k7-1", formula: "W = F × s × ?", question: q, correct: "cos(α)", wrong: ["sin(α)", "tan(α)", "m"], unit: "Joule (J)" },
    { id: "k7-2", formula: "P = ? / t", question: q, correct: "W", wrong: ["F", "m", "v"], unit: "Watt (W)" },
    { id: "k7-3", formula: "E_kin = ½ ? v²", question: q, correct: "m", wrong: ["g", "h", "p"], unit: "Joule (J)" },
    { id: "k7-4", formula: "E_pot = m × ? × h", question: q, correct: "g", wrong: ["v", "s", "t"], unit: "Joule (J)" },
    { id: "k7-5", formula: "η = W_nutz / ?", question: q, correct: "W_auf", wrong: ["W_ab", "P", "t"], unit: "%" },
  ],
  8: [
    { id: "k8-1", formula: "E = m × ?", question: q, correct: "c²", wrong: ["v²", "g²", "h"], unit: "Joule (J)" },
    { id: "k8-2", formula: "F = k × (q1 × q2) / ?", question: q, correct: "r²", wrong: ["r", "d", "s²"], unit: "Newton (N)" },
    { id: "k8-3", formula: "P = U² / ?", question: q, correct: "R", wrong: ["I", "t", "Q"], unit: "Watt (W)" },
    { id: "k8-4", formula: "λ = ? / f", question: q, correct: "v", wrong: ["c", "T", "m"], unit: "Meter (m)" },
    { id: "k8-5", formula: "n = ? / v", question: q, correct: "c", wrong: ["λ", "f", "r"], unit: "-" },
  ],
};

// --- HÁTTÉR CSILLAGOK KOMPONENS ---
const Starfield = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);
  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{ left: `${star.x}%`, width: star.size, height: star.size }}
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{ repeat: Infinity, duration: star.duration, ease: "linear" }}
        />
      ))}
    </div>
  );
};
// --- FŐ KOMPONENS ---
export default function FormulaBlitzGame({ grade, lang, onDone }: FormulaBlitzGameProps) {
  const t = DICTIONARY[lang];
  const goal = grade <= 5 ? 3 : 3 + (grade - 5);
  const fallDuration = grade === 5 ? 8 : grade === 6 ? 7 : grade === 7 ? 6 : 5;
  const gradeQuestions = QUESTIONS[grade] || QUESTIONS[5];

  const [gameState, setGameState] = useState<"playing" | "feedback" | "gameover" | "won">("playing");
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [fallingItems, setFallingItems] = useState<FallItem[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [shake, setShake] = useState(false);

  const question = gradeQuestions[currentQIndex];

  const generateFallingItems = useCallback(() => {
    if (!question) return;
    const options = [
      { text: question.correct, isCorrect: true },
      ...question.wrong.slice(0, 3).map((w) => ({ text: w, isCorrect: false })),
    ];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    const xPositions = ["15%", "35%", "55%", "75%"];
    for (let i = xPositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [xPositions[i], xPositions[j]] = [xPositions[j], xPositions[i]];
    }
    setFallingItems(
      options.map((opt, idx) => ({
        id: `item-${currentQIndex}-${idx}`,
        text: opt.text,
        isCorrect: opt.isCorrect,
        xPos: xPositions[idx],
      }))
    );
  }, [question, currentQIndex]);

  useEffect(() => {
    if (gameState === "playing") generateFallingItems();
  }, [gameState, generateFallingItems]);

  const triggerParticles = (x: number, y: number, color: string) => {
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: `part-${Date.now()}-${i}`,
      x, y, color
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => setParticles([]), 1000);
  };

  const handleMeteorClick = (e: React.MouseEvent, isCorrect: boolean) => {
    if (gameState !== "playing") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.parentElement?.getBoundingClientRect() || { left: 0, top: 0 };
    const x = rect.left - parentRect.left + rect.width / 2;
    const y = rect.top - parentRect.top + rect.height / 2;

    setGameState("feedback");
    setFallingItems([]);

    if (isCorrect) {
      setFeedback("correct");
      setScore((prev) => prev + 1);
      setCombo((prev) => prev + 1);
      triggerParticles(x, y, "#22c55e");
    } else {
      setFeedback("wrong");
      setLives((prev) => prev - 1);
      setCombo(0);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      triggerParticles(x, y, "#ef4444");
    }

    setTimeout(() => {
      setFeedback(null);
      if (isCorrect) {
        if (score + 1 >= goal) setGameState("won");
        else loadNextQuestion();
      } else {
        if (lives - 1 <= 0) setGameState("gameover");
        else loadNextQuestion();
      }
    }, 1500);
  };

  const loadNextQuestion = () => {
    setCurrentQIndex((prev) => (prev + 1) % gradeQuestions.length);
    setGameState("playing");
  };

  const resetGame = () => {
    setScore(0);
    setCombo(0);
    setLives(3);
    setCurrentQIndex(0);
    setGameState("playing");
  };

  const progressPercentage = Math.min((score / goal) * 100, 100);

  return (
    <motion.div
      animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.4 }}
      className="relative w-full max-w-4xl h-[calc(100dvh-2rem)] min-h-[520px] max-h-[800px] overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 font-sans mx-auto shadow-[0_0_50px_rgba(6,182,212,0.15)] rounded-2xl border border-slate-800"
    >
      <Starfield />

      {/* HEADER: Progress, Pontok, Életek */}
      <div className="absolute top-0 left-0 right-0 p-3 sm:p-6 z-20 flex flex-col gap-2 sm:gap-4 select-none bg-gradient-to-b from-slate-950/80 to-transparent">
        <div className="flex justify-between items-center text-white">
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">
              {t.title}
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-sm sm:text-lg text-slate-300">
                {t.score}: <span className="font-mono text-cyan-300 font-bold">{score}</span> / {goal}
              </p>
              {combo >= 2 && (
                <motion.span 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} 
                  className="bg-orange-500/20 text-orange-400 border border-orange-500/50 px-2 py-0.5 rounded-full text-sm font-bold flex items-center gap-1"
                >
                  🔥 {combo} {t.combo}
                </motion.span>
              )}
            </div>
          </div>
          <div className="flex space-x-1 sm:space-x-2 text-xl sm:text-3xl drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
            {[...Array(3)].map((_, i) => (
              <motion.span key={i} animate={i >= lives ? { opacity: 0.3, scale: 0.8, filter: "grayscale(100%)" } : { scale: [1, 1.1, 1] }} transition={{ duration: 0.5 }}>
                ❤️
              </motion.span>
            ))}
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* JÁTÉKTÉR: Középső formula */}
      <AnimatePresence mode="wait">
        {(gameState === "playing" || gameState === "feedback") && question && (
          <motion.div 
            key={question.id}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10"
          >
            <p className="mx-3 text-center text-cyan-200 text-sm sm:text-xl mb-3 sm:mb-6 bg-cyan-950/40 border border-cyan-800/50 px-3 sm:px-6 py-2 rounded-full backdrop-blur-md shadow-lg">
              {question.question[lang]}
            </p>
            
            <motion.div
              animate={
                feedback === "correct" ? { scale: 1.1, borderColor: "#22c55e", boxShadow: "0 0 60px rgba(34, 197, 94, 0.4)" } : 
                feedback === "wrong" ? { x: [-10, 10, -10, 10, 0], borderColor: "#ef4444", boxShadow: "0 0 60px rgba(239, 68, 68, 0.4)" } : 
                { scale: 1, borderColor: "#06b6d4", boxShadow: "0 0 30px rgba(6, 182, 212, 0.1)" }
              }
              className="border-2 sm:border-4 rounded-2xl sm:rounded-3xl p-6 sm:p-12 bg-slate-900/60 backdrop-blur-xl flex flex-col items-center relative overflow-hidden group"
            >
              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50"></div>
              <h2 className="text-4xl sm:text-7xl font-mono font-bold text-white tracking-wide sm:tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10">
                {question.formula}
              </h2>
            </motion.div>
            
            <p className="text-slate-400 text-sm sm:text-lg mt-3 sm:mt-6 font-mono tracking-widest">[{question.unit}]</p>
            
            <AnimatePresence>
              {feedback && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className={`absolute mt-48 sm:mt-64 text-2xl sm:text-4xl font-extrabold tracking-wider uppercase drop-shadow-xl ${feedback === "correct" ? "text-green-400" : "text-red-500"}`}
                >
                  {feedback === "correct" ? t.correct : t.wrong}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RÉSZECSKE EFFEKTEK */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-3 h-3 rounded-full pointer-events-none z-40"
          style={{ backgroundColor: p.color, left: p.x, top: p.y }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            scale: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}

      {/* METEOROK */}
      {gameState === "playing" &&
        fallingItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: -150, x: "-50%" }}
            animate={{ y: 850 }}
            transition={{ y: { repeat: Infinity, duration: fallDuration, ease: "linear" } }}
            style={{ left: item.xPos }}
            onClick={(e) => handleMeteorClick(e, item.isCorrect)}
            className="absolute top-0 w-16 h-16 sm:w-24 sm:h-24 cursor-pointer group z-20 flex items-center justify-center"
          >
            {/* Láng csóva effekt */}
            <div className="absolute -top-12 w-12 h-20 bg-gradient-to-t from-orange-500 via-yellow-500/50 to-transparent blur-xl rounded-t-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
            {/* Maga a meteor test (Glassmorphism) */}
            <div className="relative w-full h-full bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl shadow-[0_0_30px_rgba(249,115,22,0.6)] border border-orange-300/50 flex items-center justify-center overflow-hidden transform group-hover:scale-110 group-active:scale-95 transition-all">
              <div className="absolute inset-0 bg-white/20"></div>
              <span className="text-white text-xl sm:text-3xl font-bold font-mono z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                {item.text}
              </span>
            </div>
          </motion.div>
        ))}

      {/* END SCREENS */}
      <AnimatePresence>
        {(gameState === "gameover" || gameState === "won") && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }}
              className="bg-slate-900 border border-slate-700/50 p-6 sm:p-10 rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] text-center max-w-md w-full mx-4 relative overflow-hidden"
            >
              {/* Glow a modal mögött */}
              <div className={`absolute -top-32 -left-32 w-64 h-64 rounded-full blur-3xl opacity-20 ${gameState === "won" ? "bg-green-500" : "bg-red-500"}`}></div>
              
              <h2 className={`text-3xl sm:text-5xl font-extrabold mb-2 drop-shadow-md ${gameState === "won" ? "text-green-400" : "text-red-500"}`}>
                {gameState === "won" ? t.win : t.gameOver}
              </h2>
              <p className="text-2xl text-slate-300 mb-8 font-light">
                {t.score}: <span className="font-bold text-cyan-400">{score}</span> / {goal}
              </p>

              <div className="flex flex-col space-y-4 relative z-10">
                <button
                  onClick={resetGame}
                  className="w-full py-4 px-6 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white text-lg font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-95"
                >
                  {t.playAgain}
                </button>
                {onDone && (
                  <button
                    onClick={() => onDone(score)}
                    className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-95"
                  >
                    {t.next}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
