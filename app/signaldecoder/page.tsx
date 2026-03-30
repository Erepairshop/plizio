"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, Radio, Home, RotateCcw, Zap, 
  Terminal, ShieldCheck, AlertTriangle, Cpu
} from "lucide-react";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { incrementTotalGames } from "@/lib/milestones";
import { useLang } from "@/components/LanguageProvider";
import { submitScore } from "@/lib/multiplayer";
import { getUsername } from "@/lib/username";

// ─── Types & Constants ───────────────────────────────────────

type Screen = "expedition" | "playing" | "reward" | "levelComplete";
type Rarity = "bronze" | "silver" | "gold" | "legendary";

interface SignalLevel {
  level: number;
  title: string;
  type: "repeat" | "mirror" | "logic" | "missing";
  sequence: string[]; // IDs of options
  prompt: string[];   // What is shown to user
  options: { id: string; color: string; label?: string }[];
  answer: string[];   // Required user input to complete
}

const SAVE_KEY = "signaldecoder_expedition_v1";

const T = {
  en: {
    title: "SIGNAL DECODER",
    subtitle: "Identify the pattern and complete the transmission.",
    home: "Home",
    progress: "Sync Progress",
    expeditionMap: "Signal Hub",
    levelLabel: "Band",
    howToPlay: "How to play?",
    how1: "Analyze the active signal sequence carefully.",
    how2: "Select the correct frequency blocks to complete the code.",
    how3: "One mistake breaks the link. Be precise.",
    retry: "Reset Link",
    nextLevel: "Next Band",
    levelDone: "✅ DECODED!",
    bossDone: "🏆 SIGNAL MASTER!",
    locked: "ENCRYPTED",
    completed: "Verified",
    wrong: "Signal Interference! Try again.",
    correct: "Handshake verified.",
    prompt: "Complete the sequence:",
  },
  hu: {
    title: "JELDEKÓDOLÓ",
    subtitle: "Ismerd fel a mintát és fejezd be az adást.",
    home: "Főoldal",
    progress: "Haladás",
    expeditionMap: "Jelközpont",
    levelLabel: "Sáv",
    howToPlay: "Hogyan játssz?",
    how1: "Elemezd figyelmesen az aktív jelsorozatot.",
    how2: "Válaszd ki a megfelelő blokkokat a kód befejezéséhez.",
    how3: "Egy hiba megszakítja a kapcsolatot. Légy pontos.",
    retry: "Kapcsolat alaphelyzet",
    nextLevel: "Következő sáv",
    levelDone: "✅ DEKÓDOLVA!",
    bossDone: "🏆 JELMESTER!",
    locked: "TITKOSÍTOTT",
    completed: "Ellenőrizve",
    wrong: "Interferencia! Próbáld újra.",
    correct: "Kapcsolat megerősítve.",
    prompt: "Egészítsd ki a sorozatot:",
  },
  de: {
    title: "SIGNAL-DECODER",
    subtitle: "Erkenne das Muster und vervollständige das Signal.",
    home: "Start",
    progress: "Fortschritt",
    expeditionMap: "Signalzentrale",
    levelLabel: "Band",
    howToPlay: "Wie spielt man?",
    how1: "Analysiere die gezeigte Signalfolge genau.",
    how2: "Wähle die richtigen Blöcke, um den Code zu vervollständigen.",
    how3: "Ein Fehler unterbricht die Verbindung. Sei präzise.",
    retry: "Zurücksetzen",
    nextLevel: "Nächstes Band",
    levelDone: "✅ DEKODIERT!",
    bossDone: "🏆 SIGNALMEISTER!",
    locked: "VERSCHLÜSSELT",
    completed: "Geprüft",
    wrong: "Störung! Versuch es noch einmal.",
    correct: "Verbindung bestätigt.",
    prompt: "Vervollständige die Folge:",
  },
  ro: {
    title: "DECODOR DE SEMNALE",
    subtitle: "Recunoaște modelul și completează transmisia.",
    home: "Acasă",
    progress: "Progres",
    expeditionMap: "Hub de semnal",
    levelLabel: "Bandă",
    howToPlay: "Cum se joacă?",
    how1: "Analizează cu atenție secvența afișată.",
    how2: "Alege blocurile corecte pentru a completa codul.",
    how3: "O singură greșeală rupe legătura. Fii precis.",
    retry: "Resetare",
    nextLevel: "Banda următoare",
    levelDone: "✅ DECODAT!",
    bossDone: "🏆 MAESTRU AL SEMNALULUI!",
    locked: "CRIPAT",
    completed: "Verificat",
    wrong: "Interferență! Încearcă din nou.",
    correct: "Conexiune confirmată.",
    prompt: "Completează secvența:",
  },
} as const;

// ─── Options ─────────────────────────────────────────────────

const OPTS = {
  red: { id: "red", color: "#EF4444" },
  blue: { id: "blue", color: "#3B82F6" },
  green: { id: "green", color: "#10B981" },
  yellow: { id: "yellow", color: "#F59E0B" },
  purple: { id: "purple", color: "#A855F7" },
  cyan: { id: "cyan", color: "#06B6D4" },
  white: { id: "white", color: "#FFFFFF" },
};

// ─── Level Definitions ───────────────────────────────────────

const LEVELS: SignalLevel[] = [
  {
    level: 1,
    title: "Binary Base",
    type: "repeat",
    sequence: ["red", "blue", "red", "blue", "red"],
    prompt: ["red", "blue", "red", "blue"],
    options: [OPTS.red, OPTS.blue],
    answer: ["red"],
  },
  {
    level: 2,
    title: "Tri-Signal",
    type: "repeat",
    sequence: ["red", "blue", "green", "red", "blue", "green"],
    prompt: ["red", "blue", "green", "red"],
    options: [OPTS.red, OPTS.blue, OPTS.green],
    answer: ["blue", "green"],
  },
  {
    level: 3,
    title: "Reflection",
    type: "mirror",
    sequence: ["cyan", "purple", "white", "purple", "cyan"],
    prompt: ["cyan", "purple", "white"],
    options: [OPTS.cyan, OPTS.purple, OPTS.white],
    answer: ["purple", "cyan"],
  },
  {
    level: 4,
    title: "Double Mirror",
    type: "mirror",
    sequence: ["yellow", "yellow", "blue", "blue", "yellow", "yellow"],
    prompt: ["yellow", "yellow", "blue"],
    options: [OPTS.yellow, OPTS.blue],
    answer: ["blue", "yellow", "yellow"],
  },
  {
    level: 5,
    title: "Step Progression",
    type: "logic",
    sequence: ["blue", "blue", "red", "blue", "blue", "red"],
    prompt: ["blue", "blue", "red", "blue"],
    options: [OPTS.blue, OPTS.red],
    answer: ["blue", "red"],
  },
  {
    level: 6,
    title: "Rhythm Shift",
    type: "logic",
    sequence: ["white", "red", "white", "white", "red", "white", "white", "white", "red"],
    prompt: ["white", "red", "white", "white", "red"],
    options: [OPTS.white, OPTS.red],
    answer: ["white", "white", "white", "red"],
  },
  {
    level: 7,
    title: "Color Fusion",
    type: "logic", // R+B=P, B+Y=G, R+Y=?
    sequence: ["red", "blue", "purple", "blue", "yellow", "green", "red", "yellow", "orange"],
    prompt: ["red", "blue", "purple", "blue", "yellow", "green", "red", "yellow"],
    options: [OPTS.red, OPTS.blue, OPTS.yellow, OPTS.green, OPTS.purple, { id: "orange", color: "#F97316" }],
    answer: ["orange"],
  },
  {
    level: 8,
    title: "Frequency Band",
    type: "repeat",
    sequence: ["cyan", "cyan", "purple", "cyan", "cyan", "purple"],
    prompt: ["cyan", "cyan", "purple", "cyan"],
    options: [OPTS.cyan, OPTS.purple],
    answer: ["cyan", "purple"],
  },
  {
    level: 9,
    title: "Inversion Layer",
    type: "logic",
    sequence: ["red", "green", "red", "green", "blue", "yellow", "blue", "yellow"],
    prompt: ["red", "green", "red", "green", "blue", "yellow"],
    options: [OPTS.red, OPTS.green, OPTS.blue, OPTS.yellow],
    answer: ["blue", "yellow"],
  },
  {
    level: 10,
    title: "Neural Override",
    type: "logic",
    sequence: ["white", "white", "cyan", "white", "cyan", "cyan", "cyan", "white", "white"],
    prompt: ["white", "white", "cyan", "white", "cyan", "cyan"],
    options: [OPTS.white, OPTS.cyan, OPTS.purple],
    answer: ["cyan", "white", "white"],
  },
];

// ─── Helpers ─────────────────────────────────────────────────

function loadSave(): { currentLevel: number; completedLevels: number[] } {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}

function writeSave(save: { currentLevel: number; completedLevels: number[] }) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

function rarityForScore(score: number): Rarity {
  if (score >= 95) return "legendary";
  if (score >= 80) return "gold";
  if (score >= 60) return "silver";
  return "bronze";
}

// ─── Component ───────────────────────────────────────────────

export default function SignalDecoderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#05050A] flex items-center justify-center text-teal-400 font-mono tracking-widest uppercase animate-pulse">Initializing Decoder...</div>}>
      <SignalDecoderContent />
    </Suspense>
  );
}

function SignalDecoderContent() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const matchId = searchParams.get("match");
  const playerNum = searchParams.get("p");
  const isMultiplayer = !!matchId;

  // State
  const [save, setSave] = useState<{ currentLevel: number; completedLevels: number[] }>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen] = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [reward, setReward] = useState<{ rarity: Rarity; score: number; total: number } | null>(null);
  const [milestoneKey, setMilestoneKey] = useState(0);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  const currentLevel = LEVELS.find(l => l.level === activeLevel) ?? LEVELS[0];

  // Init
  useEffect(() => {
    const s = loadSave();
    setSave(s);
    setActiveLevel(Math.min(s.currentLevel, 10));
  }, []);

  const startLevel = useCallback((lvlNum: number) => {
    setActiveLevel(lvlNum);
    setUserInput([]);
    setFeedback("");
    setIsWrong(false);
    setScreen("playing");
    setReward(null);
    setScoreSubmitted(false);
    incrementTotalGames();
  }, []);

  const handleInput = (optionId: string) => {
    if (isWrong || feedback) return;

    const nextInput = [...userInput, optionId];
    const expected = currentLevel.answer;
    
    // Check if correct so far
    const isCorrectSoFar = nextInput.every((id, idx) => id === expected[idx]);

    if (!isCorrectSoFar) {
      setIsWrong(true);
      setFeedback(t.wrong);
      setTimeout(() => {
        setUserInput([]);
        setIsWrong(false);
        setFeedback("");
      }, 1500);
      return;
    }

    setUserInput(nextInput);

    // Check if finished
    if (nextInput.length === expected.length) {
      setFeedback(t.correct);
      setTimeout(() => handleWin(), 800);
    }
  };

  const handleWin = () => {
    const score = 100; // Binary success for pattern recognition
    setReward({ rarity: "gold", score, total: 100 });

    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      submitScore(matchId, score, playerNum === "1").then(() => router.push("/multiplayer"));
      return;
    }

    setScreen("reward");
    const newCompleted = Array.from(new Set([...save.completedLevels, activeLevel]));
    const nextLevel = Math.max(save.currentLevel, Math.min(activeLevel + 1, 10));
    const newSave = { currentLevel: nextLevel, completedLevels: newCompleted };
    setSave(newSave);
    writeSave(newSave);
  };

  // UI
  if (screen === "reward" && reward) {
    return (
      <RewardReveal 
        rarity={reward.rarity}
        game="signaldecoder"
        score={reward.score}
        total={reward.total}
        onDone={() => {
          setScreen("levelComplete");
          setMilestoneKey(v => v + 1);
        }}
      />
    );
  }

  if (screen === "levelComplete") {
    return (
      <main className="min-h-screen bg-[#05050A] text-white flex flex-col items-center justify-center p-6">
        <motion.div 
          className="w-full max-w-md rounded-[32px] border border-teal-500/20 bg-teal-500/5 backdrop-blur-xl p-8 text-center shadow-[0_0_50px_rgba(20,184,166,0.1)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-teal-500/30">
            <ShieldCheck className="text-teal-400" size={40} />
          </div>
          <h2 className="text-4xl font-black tracking-tighter mb-2">{t.levelDone}</h2>
          <p className="text-teal-400/60 font-mono uppercase tracking-widest text-sm mb-8">{currentLevel.title}</p>
          
          <div className="flex flex-col gap-3">
            {activeLevel < 10 && (
              <button 
                onClick={() => startLevel(activeLevel + 1)}
                className="w-full py-4 bg-teal-500 text-[#05050A] rounded-2xl font-black text-lg hover:bg-teal-400 transition-colors flex items-center justify-center gap-2"
              >
                {t.nextLevel} <ChevronRight size={20} />
              </button>
            )}
            <button 
              onClick={() => setScreen("expedition")}
              className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white/70 hover:bg-white/10 transition-colors"
            >
              {t.expeditionMap}
            </button>
          </div>
          <MilestonePopup key={milestoneKey} />
        </motion.div>
      </main>
    );
  }

  if (screen === "playing") {
    return (
      <main className="min-h-screen bg-[#05050A] text-white flex flex-col overflow-hidden touch-none">
        {/* HUD */}
        <div className="p-4 flex items-center justify-between bg-black/60 border-b border-teal-500/20 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <button onClick={() => setScreen("expedition")} className="text-white/40 hover:text-white transition-colors">
              <Home size={20} />
            </button>
            <div>
              <div className="text-[10px] font-black tracking-[0.2em] text-teal-500/50 uppercase">{t.levelLabel} {activeLevel}</div>
              <div className="font-bold text-sm tracking-tight">{currentLevel.title}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <div className="text-[8px] font-black text-white/30 uppercase">Link</div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-teal-400">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                {t.locked}
              </div>
            </div>
          </div>
        </div>

        {/* Decoder Interface */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
          {/* Signal Stream */}
          <div className="w-full max-w-md">
            <div className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-4 flex items-center gap-2">
              <Terminal size={12} /> {t.how1}
            </div>
            <div className="flex flex-wrap gap-2 min-h-[60px] p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
              {currentLevel.prompt.map((id, i) => (
                <SignalBlock key={`p-${i}`} id={id} options={currentLevel.options} />
              ))}
              {/* Highlight blanks or current input */}
              {Array.from({ length: currentLevel.answer.length }).map((_, i) => (
                <div 
                  key={`a-${i}`}
                  className={`w-10 h-10 rounded-lg border-2 border-dashed flex items-center justify-center transition-all ${
                    userInput[i] 
                      ? 'border-teal-500/50 bg-teal-500/10' 
                      : 'border-white/10 bg-white/2'
                  }`}
                >
                  {userInput[i] && <SignalBlock id={userInput[i]} options={currentLevel.options} noMargin />}
                </div>
              ))}
            </div>
          </div>

          {/* Prompt */}
          <div className="text-center">
            <motion.div 
              className={`text-sm font-bold tracking-wide ${isWrong ? 'text-rose-400' : 'text-teal-400/80'}`}
              animate={isWrong ? { x: [-5, 5, -5, 5, 0] } : {}}
            >
              {feedback || t.prompt}
            </motion.div>
          </div>

          {/* Input Pads */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            {currentLevel.options.map((opt) => (
              <motion.button
                key={opt.id}
                whileTap={{ scale: 0.92 }}
                onClick={() => handleInput(opt.id)}
                className="aspect-square rounded-3xl border-2 flex flex-col items-center justify-center gap-3 transition-all shadow-lg"
                style={{ 
                  backgroundColor: `${opt.color}15`, 
                  borderColor: `${opt.color}40`,
                  boxShadow: `0 0 20px ${opt.color}10`
                }}
              >
                <div className="w-12 h-12 rounded-2xl shadow-inner flex items-center justify-center" style={{ backgroundColor: opt.color }}>
                  <Cpu size={24} className={opt.id === 'white' ? 'text-black' : 'text-white'} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{opt.id}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-black/40 border-t border-teal-500/10 flex items-center justify-center">
          <button 
            onClick={() => startLevel(activeLevel)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-bold text-xs hover:bg-white/10 transition-colors"
          >
            <RotateCcw size={14} /> {t.retry}
          </button>
        </div>
      </main>
    );
  }

  // Expedition Screen
  return (
    <main className="min-h-screen bg-[#05050A] text-white px-5 py-8">
      <div className="mx-auto w-full max-w-[1000px]">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors font-bold text-sm">
            <Home size={18} /> {t.home}
          </Link>
          <div className="text-xs font-black tracking-[0.4em] text-teal-500 uppercase">{t.expeditionMap}</div>
        </div>

        <div className="relative rounded-[40px] border border-teal-500/20 bg-teal-500/5 backdrop-blur-xl p-8 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-teal-400 font-black text-sm uppercase tracking-[0.3em] mb-4">
              <Radio size={20} /> {t.title}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">{t.subtitle}</h1>
            
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {LEVELS.map((lvl) => {
                const unlocked = lvl.level <= save.currentLevel;
                const completed = save.completedLevels.includes(lvl.level);
                return (
                  <button
                    key={lvl.level}
                    disabled={!unlocked}
                    onClick={() => startLevel(lvl.level)}
                    className={`group relative aspect-square rounded-3xl border-2 flex flex-col items-center justify-center transition-all ${
                      unlocked 
                        ? 'bg-teal-500/5 border-teal-500/30 hover:border-teal-400 hover:bg-teal-500/10 shadow-lg' 
                        : 'bg-white/2 border-white/5 opacity-40 grayscale cursor-not-allowed'
                    }`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{completed ? '📡' : lvl.level}</div>
                    <div className="text-[10px] font-black tracking-widest text-teal-500/60 uppercase">{lvl.title}</div>
                    {unlocked && !completed && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                        <Zap size={12} className="text-black" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Decoder Logs */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
            <div className="text-teal-400"><Cpu size={20} /></div>
            <div className="font-bold text-sm">Pattern Flow</div>
            <p className="text-xs text-white/40 leading-relaxed">Read the visible rhythm and continue it with the right blocks.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
            <div className="text-teal-400"><AlertTriangle size={20} /></div>
            <div className="font-bold text-sm">Interference</div>
            <p className="text-xs text-white/40 leading-relaxed">Later bands change the rhythm and make the pattern harder to read.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
            <div className="text-teal-400"><ShieldCheck size={20} /></div>
            <div className="font-bold text-sm">Clear Signal</div>
            <p className="text-xs text-white/40 leading-relaxed">Finish all 10 bands to clear the whole transmission line.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function SignalBlock({ id, options, noMargin }: { id: string; options: any[]; noMargin?: boolean }) {
  if (id === "___") return <div className="w-10 h-10 rounded-lg bg-white/10 animate-pulse" />;
  const opt = options.find(o => o.id === id);
  if (!opt) return null;
  return (
    <div 
      className={`w-10 h-10 rounded-lg shadow-lg border border-white/20 ${noMargin ? '' : 'shrink-0'}`} 
      style={{ backgroundColor: opt.color }} 
    />
  );
}
