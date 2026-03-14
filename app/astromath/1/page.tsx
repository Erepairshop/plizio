"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Home, X, ChevronRight, ChevronLeft, Check, Volume2 } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, checkNewMilestones } from "@/lib/milestones";
import type { CardRarity } from "@/lib/cards";
import type { MathQuestion } from "@/lib/mathCurriculum";
import {
  G1_ISLANDS, CHECKPOINT_MAP, type IslandDef, type MissionDef, type Lang,
  loadG1Progress, saveG1Progress, type G1Progress,
  isMissionDone, isIslandDone, isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, completeTest,
  generateIslandQuestions, generateCheckpointQuestions, generateSortRound, generateMatchPairs,
} from "@/lib/astromath";

// ─── Text-to-Speech ────────────────────────────────────────────────────────────
const LANG_TO_TTS: Record<string, string> = {
  hu: "hu-HU", de: "de-DE", en: "en-US", ro: "ro-RO",
};

function emojiToSpoken(text: string): string {
  // Replace each consecutive run of emojis with their count (if >1) or remove (if single decorative)
  // e.g. "🍎🍎🍎 + 🍎🍎 = ?" → "3 + 2 = ?"
  // e.g. "🚀 Számolj!" → " Számolj!" → "Számolj!"
  return text
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]+/gu, (run) => {
      const count = [...run].length;
      return count > 1 ? String(count) : "";
    })
    .replace(/\s+/g, " ")
    .trim();
}

function speak(text: string, lang: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const clean = emojiToSpoken(text);
  if (!clean) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(clean);
  utt.lang = LANG_TO_TTS[lang] ?? "en-US";
  utt.rate = 0.88;
  utt.pitch = 1.1;
  window.speechSynthesis.speak(utt);
}

function SpeakButton({ text, lang, size = 18 }: { text: string; lang: string; size?: number }) {
  return (
    <motion.button
      onClick={(e) => { e.stopPropagation(); speak(text, lang); }}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 active:bg-white/30 transition-colors flex-shrink-0"
      whileTap={{ scale: 0.9 }}>
      <Volume2 size={size} />
    </motion.button>
  );
}

// ─── Screen types ──────────────────────────────────────────────────────────────
type Screen =
  | "island-map"
  | "island-intro"
  | "mission-select"
  | "orbit-quiz"
  | "star-match"
  | "gravity-sort"
  | "black-hole"
  | "mission-done"
  | "island-done"
  | "reward"
  | "checkpoint-intro"
  | "checkpoint-quiz"
  | "checkpoint-done";

// ─── Translations ──────────────────────────────────────────────────────────────
const T = {
  en: {
    back: "Back", next: "Next", start: "Start", done: "Done!", correct: "Correct!", wrong: "Wrong!",
    missionDone: "Mission complete!", islandDone: "Island complete!",
    missions: "Missions", mission: "Mission", of: "of",
    checkpointReady: "Test unlocked!", checkpointDesc: "You completed 3 islands! Take a mini-test to check what you learned.",
    startTest: "Start Test", testDone: "Test complete!", yourScore: "Your score",
    tapAscending: "Tap numbers from smallest to largest", allMatched: "All pairs found!",
    selectAnswer: "Select the correct answer", questionOf: "Question",
    gradeLabel: "Grade 1 · Space Adventure", islandMap: "Island Map",
    checkpointTitle: "Checkpoint Test",
    missionLabels: { "orbit-quiz": "Number Quiz", "star-match": "Star Match", "gravity-sort": "Sort!", "black-hole": "Black Hole" },
    testTopics: { test1: "Counting & Operations", test2: "Numbers to 20", test3: "Shapes & Measurement" },
  },
  hu: {
    back: "Vissza", next: "Következő", start: "Kezdés", done: "Kész!", correct: "Helyes!", wrong: "Téves!",
    missionDone: "Küldetés teljesítve!", islandDone: "Sziget teljesítve!",
    missions: "Küldetések", mission: "Küldetés", of: "/",
    checkpointReady: "Teszt feloldva!", checkpointDesc: "Teljesítettél 3 szigetet! Töltsd ki a mini-tesztet az ismeretek ellenőrzésére.",
    startTest: "Teszt indítása", testDone: "Teszt kész!", yourScore: "Eredményed",
    tapAscending: "Koppints a számokra a legkisebbtől a legnagyobbig", allMatched: "Minden pár megtalálva!",
    selectAnswer: "Válaszd ki a helyes választ", questionOf: "Kérdés",
    gradeLabel: "1. osztály · Ûrkaland", islandMap: "Szigettérkép",
    checkpointTitle: "Checkpoint teszt",
    missionLabels: { "orbit-quiz": "Számkvíz", "star-match": "Csillagpárosítás", "gravity-sort": "Rendezés!", "black-hole": "Fekete lyuk" },
    testTopics: { test1: "Számolás és műveletek", test2: "Számok 20-ig", test3: "Alakzatok és mérések" },
  },
  de: {
    back: "Zurück", next: "Weiter", start: "Start", done: "Fertig!", correct: "Richtig!", wrong: "Falsch!",
    missionDone: "Mission abgeschlossen!", islandDone: "Insel abgeschlossen!",
    missions: "Missionen", mission: "Mission", of: "von",
    checkpointReady: "Test freigeschaltet!", checkpointDesc: "Du hast 3 Inseln abgeschlossen! Mache den Mini-Test um dein Wissen zu prüfen.",
    startTest: "Test starten", testDone: "Test fertig!", yourScore: "Dein Ergebnis",
    tapAscending: "Tippe die Zahlen vom kleinsten zum größten", allMatched: "Alle Paare gefunden!",
    selectAnswer: "Wähle die richtige Antwort", questionOf: "Frage",
    gradeLabel: "Klasse 1 · Weltraumabenteuer", islandMap: "Inselkarte",
    checkpointTitle: "Checkpoint-Test",
    missionLabels: { "orbit-quiz": "Zahlenquiz", "star-match": "Sternenpaare", "gravity-sort": "Sortieren!", "black-hole": "Schwarzes Loch" },
    testTopics: { test1: "Zählen & Rechnen", test2: "Zahlen bis 20", test3: "Formen & Messen" },
  },
  ro: {
    back: "Înapoi", next: "Înainte", start: "Start", done: "Gata!", correct: "Corect!", wrong: "Greșit!",
    missionDone: "Misiune completă!", islandDone: "Insulă completă!",
    missions: "Misiuni", mission: "Misiune", of: "din",
    checkpointReady: "Test deblocat!", checkpointDesc: "Ai completat 3 insule! Fă mini-testul pentru a verifica ce ai învățat.",
    startTest: "Pornește testul", testDone: "Test complet!", yourScore: "Scorul tău",
    tapAscending: "Atinge numerele de la cel mai mic la cel mai mare", allMatched: "Toate perechile găsite!",
    selectAnswer: "Alege răspunsul corect", questionOf: "Întrebarea",
    gradeLabel: "Clasa 1 · Aventură spațială", islandMap: "Harta insulelor",
    checkpointTitle: "Test checkpoint",
    missionLabels: { "orbit-quiz": "Quiz numere", "star-match": "Perechi stele", "gravity-sort": "Sortare!", "black-hole": "Gaura neagră" },
    testTopics: { test1: "Numărare & Operații", test2: "Numere până la 20", test3: "Forme & Măsurare" },
  },
} as const;

// ─── Starfield ─────────────────────────────────────────────────────────────────
const STAR_DATA = Array.from({ length: 50 }, (_, i) => ({
  id: i, x: (i * 37 + 13) % 100, y: (i * 53 + 7) % 100,
  size: (i % 3) * 0.7 + 0.4, dur: 2 + (i % 5) * 0.5, delay: (i % 7) * 0.4,
}));
function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STAR_DATA.map((s) => (
        <motion.div key={s.id} className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.1, 0.85, 0.1] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

// ─── Island Map SVG ────────────────────────────────────────────────────────────
// 9 islands in a winding vertical path, SVG 320×640, scrollable
const MAP_W = 320;
const MAP_H = 640;

// Checkpoint marker positions (between islands 3-4, 6-7, after 9)
const CP_POS: Record<string, { x: number; y: number }> = {
  test1: { x: 155, y: 295 },
  test2: { x: 155, y: 50 },
  test3: { x: 155, y: -165 },
};

function IslandMapSVG({ progress, onIsland, onCheckpoint }: {
  progress: G1Progress;
  onIsland: (island: IslandDef) => void;
  onCheckpoint: (testId: string) => void;
}) {
  // Build path through all islands
  const pts = G1_ISLANDS.map((i) => `${i.svgX},${i.svgY}`);
  const pathD = `M ${pts[0]} ` + pts.slice(1).map((p) => `L ${p}`).join(" ");

  return (
    <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      {/* Path */}
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={2} strokeDasharray="8 6" />

      {/* Checkpoint markers */}
      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlocked(progress, testId);
        const done = isCheckpointDone(progress, testId);
        return (
          <g key={testId} onClick={() => unlocked && !done && onCheckpoint(testId)}
            style={{ cursor: unlocked && !done ? "pointer" : "default" }}>
            <rect x={pos.x - 45} y={pos.y - 14} width={90} height={28} rx={14}
              fill={done ? "rgba(0,255,136,0.2)" : unlocked ? "rgba(255,215,0,0.2)" : "rgba(255,255,255,0.04)"}
              stroke={done ? "#00FF88" : unlocked ? "#FFD700" : "rgba(255,255,255,0.1)"} strokeWidth={1.5} />
            <text x={pos.x} y={pos.y + 5} textAnchor="middle" fontSize={10} fontWeight="bold"
              fill={done ? "#00FF88" : unlocked ? "#FFD700" : "rgba(255,255,255,0.25)"}>
              {done ? "✓ Test" : unlocked ? "🎓 Test!" : "🔒 Test"}
            </text>
          </g>
        );
      })}

      {/* Islands */}
      {G1_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlocked(progress, island.id);
        const done = isIslandDone(progress, island.id);
        const missionsDone = island.missions.filter((m) => isMissionDone(progress, island.id, m.id)).length;

        return (
          <g key={island.id} onClick={() => unlocked && onIsland(island)}
            style={{ cursor: unlocked ? "pointer" : "default" }}>
            {/* Glow */}
            {unlocked && <circle cx={island.svgX} cy={island.svgY} r={34} fill={island.color} opacity={0.12} />}
            {/* Main circle */}
            <circle cx={island.svgX} cy={island.svgY} r={26}
              fill={unlocked ? `${island.color}22` : "rgba(255,255,255,0.03)"}
              stroke={unlocked ? island.color : "rgba(255,255,255,0.1)"}
              strokeWidth={unlocked ? 2.5 : 1.5}
              opacity={unlocked ? 1 : 0.4} />
            {/* Icon */}
            <text x={island.svgX} y={island.svgY + 7} textAnchor="middle" fontSize={18}>
              {unlocked ? island.icon : "🔒"}
            </text>
            {/* Done badge */}
            {done && (
              <>
                <circle cx={island.svgX + 20} cy={island.svgY - 20} r={10} fill="#00FF88" />
                <text x={island.svgX + 20} y={island.svgY - 15} textAnchor="middle" fontSize={12} fill="#000" fontWeight="bold">✓</text>
              </>
            )}
            {/* Mission dots */}
            {unlocked && !done && (
              <g>
                {island.missions.map((m, mi) => (
                  <circle key={mi} cx={island.svgX - 8 + mi * 8} cy={island.svgY + 32} r={3.5}
                    fill={isMissionDone(progress, island.id, m.id) ? island.color : "rgba(255,255,255,0.2)"} />
                ))}
              </g>
            )}
            {/* Number label */}
            <text x={island.svgX} y={island.svgY + 46} textAnchor="middle" fontSize={9} fontWeight="bold"
              fill={unlocked ? island.color : "rgba(255,255,255,0.2)"}>
              {idx + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Orbit Quiz ────────────────────────────────────────────────────────────────
function OrbitQuiz({ questions, color, onDone }: {
  questions: MathQuestion[]; color: string; onDone: (score: number, total: number) => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);

  const q = questions[idx];
  const opts = q?.options ?? [];
  const isCorrect = selected !== null && String(selected) === String(q?.correctAnswer);

  // Auto-read question when it changes
  useEffect(() => {
    if (q?.question) speak(q.question, lang);
  }, [idx, q?.question, lang]);

  const confirm = useCallback((opt: number | string) => {
    if (confirmed) return;
    setSelected(opt);
    setConfirmed(true);
    if (String(opt) === String(q?.correctAnswer)) setScore((s) => s + 1);
  }, [confirmed, q]);

  const next = useCallback(() => {
    if (idx + 1 >= questions.length) {
      onDone(isCorrect ? score + 1 : score, questions.length);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
      setConfirmed(false);
    }
  }, [idx, questions.length, score, isCorrect, onDone]);

  if (!q) return null;

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5">
        {questions.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full transition-all"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="rounded-3xl p-5 min-h-[120px] flex items-center gap-3"
          style={{ background: `${color}12`, border: `1.5px solid ${color}30` }}>
          <p className="text-xl font-black text-white leading-snug flex-1 text-center">{q.question}</p>
          <SpeakButton text={q.question} lang={lang} size={16} />
        </motion.div>
      </AnimatePresence>

      {/* Options */}
      <div className="grid grid-cols-2 gap-2.5">
        {opts.map((opt, i) => {
          const isThis = String(opt) === String(selected);
          const isRight = String(opt) === String(q.correctAnswer);
          let bg = "rgba(255,255,255,0.06)";
          let border = "rgba(255,255,255,0.12)";
          let textColor = "rgba(255,255,255,0.85)";
          if (confirmed) {
            if (isRight) { bg = "rgba(0,255,136,0.2)"; border = "#00FF88"; textColor = "#00FF88"; }
            else if (isThis && !isRight) { bg = "rgba(255,50,50,0.15)"; border = "#FF4444"; textColor = "#FF6666"; }
          } else if (isThis) {
            bg = `${color}30`; border = color; textColor = "#fff";
          }

          return (
            <motion.button key={i} onClick={() => !confirmed && confirm(opt)}
              className="py-4 px-3 rounded-2xl font-bold text-sm text-center transition-colors"
              style={{ background: bg, border: `2px solid ${border}`, color: textColor }}
              whileTap={!confirmed ? { scale: 0.96 } : {}}>
              {String(opt)}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback + Next */}
      <AnimatePresence>
        {confirmed && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2 items-center">
            <span className="font-black text-base" style={{ color: isCorrect ? "#00FF88" : "#FF6666" }}>
              {isCorrect ? t.correct : `${t.wrong} ${q.correctAnswer}`}
            </span>
            <motion.button onClick={next}
              className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= questions.length ? t.done : t.next} <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Black Hole (same as OrbitQuiz, different styling) ─────────────────────────
function BlackHole({ questions, color, onDone }: {
  questions: MathQuestion[]; color: string; onDone: (score: number, total: number) => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);

  const q = questions[idx];
  const isCorrect = selected !== null && String(selected) === String(q?.correctAnswer);

  // Auto-read question when it changes
  useEffect(() => {
    if (q?.question) speak(q.question, lang);
  }, [idx, q?.question, lang]);

  const confirm = useCallback((opt: number | string) => {
    if (confirmed) return;
    setSelected(opt);
    setConfirmed(true);
    if (String(opt) === String(q?.correctAnswer)) setScore((s) => s + 1);
  }, [confirmed, q]);

  const next = useCallback(() => {
    if (idx + 1 >= questions.length) onDone(isCorrect ? score + 1 : score, questions.length);
    else { setIdx((i) => i + 1); setSelected(null); setConfirmed(false); }
  }, [idx, questions.length, score, isCorrect, onDone]);

  if (!q) return null;
  const opts = q.options ?? [];

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1 justify-center">
        {questions.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full transition-all"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>

      {/* Black hole visual */}
      <div className="flex flex-col items-center gap-3">
        <motion.div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
          style={{ background: "radial-gradient(circle, rgba(0,0,0,0.9) 30%, rgba(100,0,200,0.3) 70%, transparent)", border: `2px solid ${color}` }}
          animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
          🕳️
        </motion.div>
        <div className="rounded-2xl px-5 py-4 w-full flex items-center gap-3"
          style={{ background: "rgba(0,0,0,0.5)", border: `1.5px solid ${color}40` }}>
          <p className="text-xl font-black text-white flex-1 text-center">{q.question}</p>
          <SpeakButton text={q.question} lang={lang} size={16} />
        </div>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-2">
        {opts.map((opt, i) => {
          const isThis = String(opt) === String(selected);
          const isRight = String(opt) === String(q.correctAnswer);
          let bg = "rgba(0,0,0,0.4)";
          let border = "rgba(255,255,255,0.12)";
          if (confirmed) {
            if (isRight) { bg = "rgba(0,255,136,0.15)"; border = "#00FF88"; }
            else if (isThis) { bg = "rgba(255,50,50,0.1)"; border = "#FF4444"; }
          } else if (isThis) { bg = `${color}25`; border = color; }

          return (
            <motion.button key={i} onClick={() => !confirmed && confirm(opt)}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-left text-white/90 text-sm"
              style={{ background: bg, border: `2px solid ${border}` }}
              whileTap={!confirmed ? { scale: 0.98 } : {}}>
              {String(opt)}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {confirmed && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 items-center">
            <span className="font-black text-sm" style={{ color: isCorrect ? "#00FF88" : "#FF6666" }}>
              {isCorrect ? t.correct : `${t.wrong} ${q.correctAnswer}`}
            </span>
            <motion.button onClick={next}
              className="w-full py-3.5 rounded-2xl font-black text-white flex items-center justify-center gap-2"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= questions.length ? t.done : t.next} <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Gravity Sort ──────────────────────────────────────────────────────────────
function GravitySort({ sortRange, color, onDone }: {
  sortRange: [number, number]; color: string; onDone: (score: number, total: number) => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const ROUNDS = 5;
  const [round, setRound] = useState(0);
  const [roundData, setRoundData] = useState(() => generateSortRound(sortRange));
  const [tapped, setTapped] = useState<number[]>([]);  // indices tapped in order
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const tap = useCallback((idx: number) => {
    if (feedback || tapped.includes(idx)) return;
    const newTapped = [...tapped, idx];
    setTapped(newTapped);

    if (newTapped.length === roundData.numbers.length) {
      // Check if order matches sorted
      const userOrder = newTapped.map((i) => roundData.numbers[i]);
      const isCorrect = userOrder.every((n, i) => n === roundData.sorted[i]);
      const newCorrect = isCorrect ? correct + 1 : correct;
      setFeedback(isCorrect ? "correct" : "wrong");
      setCorrect(newCorrect);

      setTimeout(() => {
        if (round + 1 >= ROUNDS) {
          onDone(newCorrect, ROUNDS);
        } else {
          setRound((r) => r + 1);
          setRoundData(generateSortRound(sortRange));
          setTapped([]);
          setFeedback(null);
        }
      }, 900);
    }
  }, [feedback, tapped, roundData, correct, round, sortRange, onDone]);

  return (
    <div className="flex flex-col gap-5 w-full max-w-sm mx-auto items-center">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {Array.from({ length: ROUNDS }).map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <p className="text-white/60 text-sm font-medium text-center">{t.tapAscending}</p>
        <SpeakButton text={t.tapAscending} lang={lang} size={14} />
      </div>

      {/* Numbers to tap */}
      <div className="flex gap-3 flex-wrap justify-center">
        {roundData.numbers.map((num, idx) => {
          const tapIdx = tapped.indexOf(idx);
          const isTapped = tapIdx >= 0;
          const isWrong = feedback === "wrong" && isTapped && roundData.numbers[idx] !== roundData.sorted[tapIdx];

          return (
            <motion.button key={idx} onClick={() => tap(idx)}
              className="w-16 h-16 rounded-2xl font-black text-2xl flex items-center justify-center"
              style={{
                background: isTapped
                  ? feedback === "correct" ? "rgba(0,255,136,0.3)" : feedback === "wrong" ? "rgba(255,50,50,0.2)" : `${color}30`
                  : "rgba(255,255,255,0.07)",
                border: `2.5px solid ${isTapped ? (feedback === "correct" ? "#00FF88" : feedback === "wrong" ? "#FF4444" : color) : "rgba(255,255,255,0.15)"}`,
                color: isTapped ? "#fff" : "rgba(255,255,255,0.7)",
                opacity: isTapped && !feedback ? 0.7 : 1,
              }}
              whileTap={!isTapped && !feedback ? { scale: 0.9 } : {}}>
              {num}
              {isTapped && <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[9px] font-black flex items-center justify-center"
                style={{ background: color, color: "#fff" }}>{tapIdx + 1}</span>}
            </motion.button>
          );
        })}
      </div>

      {/* Correct order hint */}
      <div className="flex gap-2 items-center">
        {roundData.sorted.map((n, i) => (
          <span key={i} className="text-white/20 font-bold text-sm">{i > 0 ? "< " : ""}{n}</span>
        ))}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="text-xl font-black"
            style={{ color: feedback === "correct" ? "#00FF88" : "#FF6666" }}>
            {feedback === "correct" ? t.correct : t.wrong}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Star Match ────────────────────────────────────────────────────────────────
// Tap-to-pair: questions visible on left, shuffled answers on right.
// Tap a question → it gets selected (highlighted). Then tap the matching answer.
// Correct → both turn green. Wrong → both flash red, deselect.
const SM_LABELS = {
  en: { hint: "Tap a question, then tap the matching answer", pairs: "pairs" },
  hu: { hint: "Koppints egy kérdésre, majd a helyes válaszra", pairs: "pár" },
  de: { hint: "Tippe auf eine Aufgabe, dann auf die passende Antwort", pairs: "Paare" },
  ro: { hint: "Atinge o întrebare, apoi răspunsul potrivit", pairs: "perechi" },
};

function StarMatch({ questions, color, onDone }: {
  questions: MathQuestion[]; color: string; onDone: (score: number, total: number) => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const sl = SM_LABELS[lang as keyof typeof SM_LABELS] ?? SM_LABELS.en;
  const pairs = generateMatchPairs(questions);

  // Right column: shuffled answer indices
  const [answerOrder] = useState(() =>
    [...pairs.map((_, i) => i)].sort(() => Math.random() - 0.5)
  );

  const [selectedQ, setSelectedQ] = useState<number | null>(null); // selected question index
  const [matched, setMatched] = useState<Set<number>>(new Set());  // matched pair indices
  const [wrongQ, setWrongQ] = useState<number | null>(null);       // flash red on question
  const [wrongA, setWrongA] = useState<number | null>(null);       // flash red on answer
  const [done, setDone] = useState(false);
  const lockRef = useRef(false);

  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => onDone(matched.size, pairs.length), 1200);
      return () => clearTimeout(timer);
    }
  }, [done, onDone, matched.size, pairs.length]);

  const tapQuestion = useCallback((idx: number) => {
    if (lockRef.current || matched.has(idx)) return;
    speak(pairs[idx].left, lang);
    setSelectedQ(idx === selectedQ ? null : idx);
  }, [selectedQ, matched, pairs, lang]);

  const tapAnswer = useCallback((pairIdx: number) => {
    if (lockRef.current || matched.has(pairIdx)) return;
    speak(pairs[pairIdx].right, lang);

    if (selectedQ === null) {
      // No question selected — select the corresponding question
      setSelectedQ(pairIdx);
      return;
    }

    if (selectedQ === pairIdx) {
      // Correct match!
      const newMatched = new Set(matched);
      newMatched.add(pairIdx);
      setMatched(newMatched);
      setSelectedQ(null);
      if (newMatched.size === pairs.length) setDone(true);
    } else {
      // Wrong — flash red
      lockRef.current = true;
      setWrongQ(selectedQ);
      setWrongA(pairIdx);
      setTimeout(() => {
        setSelectedQ(null);
        setWrongQ(null);
        setWrongA(null);
        lockRef.current = false;
      }, 700);
    }
  }, [selectedQ, matched, pairs, lang]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Instruction + progress */}
      <div className="flex items-center justify-between">
        <p className="text-white/50 text-xs font-medium">{sl.hint}</p>
        <span className="text-white/60 text-xs font-bold flex-shrink-0 ml-2">
          {matched.size}/{pairs.length}
        </span>
      </div>

      {done && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
          className="text-center text-xl font-black" style={{ color: "#00FF88" }}>
          {t.allMatched} ⭐
        </motion.div>
      )}

      {/* Two columns: questions | answers */}
      <div className="grid grid-cols-2 gap-3">
        {/* Left: questions in order */}
        <div className="flex flex-col gap-2">
          {pairs.map((pair, i) => {
            const isMatched = matched.has(i);
            const isSelected = selectedQ === i;
            const isWrong = wrongQ === i;
            return (
              <motion.button key={i} onClick={() => tapQuestion(i)}
                disabled={isMatched}
                className="rounded-2xl px-3 py-4 text-sm font-bold text-center min-h-[64px] flex items-center justify-center leading-snug"
                style={{
                  background: isMatched ? "rgba(0,255,136,0.18)"
                    : isWrong ? "rgba(255,50,50,0.18)"
                    : isSelected ? `${color}30`
                    : "rgba(255,255,255,0.05)",
                  border: `2px solid ${isMatched ? "#00FF88" : isWrong ? "#FF4444" : isSelected ? color : "rgba(255,255,255,0.12)"}`,
                  color: isMatched ? "#00FF88" : isWrong ? "#FF6666" : isSelected ? "#fff" : "rgba(255,255,255,0.80)",
                  boxShadow: isSelected ? `0 0 12px ${color}55` : "none",
                }}
                whileTap={!isMatched ? { scale: 0.95 } : {}}>
                {isMatched ? "✓" : pair.left}
              </motion.button>
            );
          })}
        </div>

        {/* Right: answers shuffled */}
        <div className="flex flex-col gap-2">
          {answerOrder.map((pairIdx) => {
            const isMatched = matched.has(pairIdx);
            const isWrong = wrongA === pairIdx;
            const isHighlighted = selectedQ !== null && !isMatched;
            return (
              <motion.button key={pairIdx} onClick={() => tapAnswer(pairIdx)}
                disabled={isMatched}
                className="rounded-2xl px-3 py-4 text-lg font-black text-center min-h-[64px] flex items-center justify-center"
                style={{
                  background: isMatched ? "rgba(0,255,136,0.18)"
                    : isWrong ? "rgba(255,50,50,0.18)"
                    : isHighlighted ? "rgba(255,255,255,0.10)"
                    : "rgba(255,255,255,0.05)",
                  border: `2px solid ${isMatched ? "#00FF88" : isWrong ? "#FF4444" : isHighlighted ? "rgba(255,255,255,0.30)" : "rgba(255,255,255,0.12)"}`,
                  color: isMatched ? "#00FF88" : isWrong ? "#FF6666" : "#fff",
                }}
                whileTap={!isMatched ? { scale: 0.95 } : {}}>
                {isMatched ? "✓" : pairs[pairIdx].right}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Mission Done screen ───────────────────────────────────────────────────────
function MissionDoneScreen({ mission, island, score, total, onContinue }: {
  mission: MissionDef; island: IslandDef; score: number; total: number; onContinue: () => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const pct = Math.round((score / total) * 100);
  const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
      <motion.div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl"
        style={{ background: `${island.color}22`, border: `3px solid ${island.color}`, boxShadow: `0 0 30px ${island.color}55` }}
        animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        {mission.icon}
      </motion.div>
      <div>
        <p className="text-white/50 text-sm font-medium mb-1">{t.missionDone}</p>
        <h2 className="text-2xl font-black text-white">{mission.label[lang as Lang] ?? mission.label.en}</h2>
      </div>
      <div className="flex gap-1 text-3xl">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.15, type: "spring" }}>
            {i < stars ? "⭐" : "✩"}
          </motion.span>
        ))}
      </div>
      <div className="text-white/70 font-bold text-lg">{score}/{total}</div>
      <motion.button onClick={onContinue}
        className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
        style={{ background: `linear-gradient(135deg, ${island.color}55, ${island.color}99)`, border: `2px solid ${island.color}` }}
        whileTap={{ scale: 0.97 }}>
        {t.next} <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
}

// ─── Island Done screen ────────────────────────────────────────────────────────
function IslandDoneScreen({ island, onContinue }: { island: IslandDef; onContinue: () => void }) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
      <motion.div className="text-7xl" animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, delay: 0.2 }}>
        {island.icon}
      </motion.div>
      <div>
        <p className="text-white/50 text-sm font-medium mb-1">{t.islandDone}</p>
        <h2 className="text-2xl font-black" style={{ color: island.color }}>
          {island.name[lang as Lang] ?? island.name.en}
        </h2>
      </div>
      <div className="flex gap-1 text-3xl">
        {["⭐", "⭐", "⭐"].map((s, i) => (
          <motion.span key={i} initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.12, type: "spring" }}>{s}</motion.span>
        ))}
      </div>
      <motion.button onClick={onContinue}
        className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2"
        style={{ background: `linear-gradient(135deg, ${island.color}55, ${island.color}99)`, border: `2px solid ${island.color}` }}
        whileTap={{ scale: 0.97 }}>
        {t.back} {t.islandMap} <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
}

// ─── Checkpoint Done ───────────────────────────────────────────────────────────
function CheckpointDoneScreen({ score, total, testId, onContinue }: {
  score: number; total: number; testId: string; onContinue: () => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const pct = Math.round((score / total) * 100);
  const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "🎯" : "💪";

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
      <motion.div className="text-6xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
        {emoji}
      </motion.div>
      <div>
        <p className="text-white/50 text-sm font-medium">{t.testDone}</p>
        <h2 className="text-2xl font-black text-[#FFD700] mt-1">{t.yourScore}</h2>
        <p className="text-4xl font-black text-white mt-2">{score}/{total}</p>
        <p className="text-white/50 text-base mt-1 font-medium">{pct}%</p>
      </div>
      <motion.button onClick={onContinue}
        className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2"
        style={{ background: "linear-gradient(135deg, #FFD70055, #FFD70099)", border: "2px solid #FFD700" }}
        whileTap={{ scale: 0.97 }}>
        {t.back} {t.islandMap} <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function AstroMathG1Page() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [screen, setScreen] = useState<Screen>("island-map");
  const [progress, setProgress] = useState<G1Progress>({ completedMissions: [], completedIslands: [], completedTests: [] });
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [checkpointScore, setCheckpointScore] = useState({ score: 0, total: 10 });
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  // Flag: did completing the last mission just unlock an island for the first time?
  const [justUnlockedIsland, setJustUnlockedIsland] = useState(false);

  useEffect(() => {
    setProgress(loadG1Progress());
  }, []);

  // ── Island selected ──────────────────────────────────────────────────────────
  const handleIslandSelect = useCallback((island: IslandDef) => {
    setActiveIsland(island);
    setScreen("island-intro");
  }, []);

  // ── Start mission ────────────────────────────────────────────────────────────
  const startMission = useCallback((mission: MissionDef) => {
    if (!activeIsland) return;
    setActiveMission(mission);
    const qs = generateIslandQuestions(activeIsland, lang as Lang, 10);
    setQuestions(qs);
    setScreen(mission.gameType as Screen);
  }, [activeIsland, lang]);

  // ── Mission finished ─────────────────────────────────────────────────────────
  const handleMissionDone = useCallback((score: number, total: number) => {
    if (!activeIsland || !activeMission) return;
    setMissionScore({ score, total });

    const wasIslandDone = progress.completedIslands.includes(activeIsland.id);
    const newProgress = completeMission(progress, activeIsland.id, activeMission.id);
    const isNowIslandDone = newProgress.completedIslands.includes(activeIsland.id);
    setJustUnlockedIsland(!wasIslandDone && isNowIslandDone);
    saveG1Progress(newProgress);
    setProgress(newProgress);

    setScreen("mission-done");
  }, [activeIsland, activeMission, progress]);

  // ── After mission-done: check if island complete ─────────────────────────────
  const handleAfterMission = useCallback(() => {
    if (!activeIsland) return;
    if (justUnlockedIsland) {
      // First-time island completion — award card
      const rarity = calculateRarity(missionScore.score, missionScore.total, 0, false);
      saveCard({ id: generateCardId(), game: "astromath", rarity, score: missionScore.score, total: missionScore.total, date: new Date().toISOString() });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();
      checkNewMilestones();
      setEarnedCard(rarity);
      setRewardScore({ score: missionScore.score, total: missionScore.total });
      setScreen("reward");
    } else {
      setScreen("mission-select");
    }
  }, [activeIsland, justUnlockedIsland, missionScore]);

  // ── Checkpoint ───────────────────────────────────────────────────────────────
  const startCheckpoint = useCallback((testId: string) => {
    setActiveTestId(testId);
    setScreen("checkpoint-intro");
  }, []);

  const startCheckpointQuiz = useCallback(() => {
    if (!activeTestId) return;
    const qs = generateCheckpointQuestions(activeTestId, lang as Lang, 10);
    setQuestions(qs);
    setScreen("checkpoint-quiz");
  }, [activeTestId, lang]);

  const handleCheckpointDone = useCallback((score: number, total: number) => {
    if (!activeTestId) return;
    setCheckpointScore({ score, total });

    const newProgress = completeTest(progress, activeTestId);
    saveG1Progress(newProgress);
    setProgress(newProgress);

    // Award card
    const rarity = calculateRarity(score, total, 0, false);
    saveCard({ id: generateCardId(), game: "astromath", rarity, score, total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score, total });
    setScreen("reward");
  }, [activeTestId, progress]);

  const goToMap = useCallback(() => {
    setScreen("island-map");
    setActiveIsland(null);
    setActiveMission(null);
    setActiveTestId(null);
  }, []);

  // ── Background color based on active island ──────────────────────────────────
  const bgColor = activeIsland?.color ?? "#4ECDC4";

  // ─── ISLAND MAP ─────────────────────────────────────────────────────────────
  if (screen === "island-map") {
    const totalDone = progress.completedIslands.length;
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
        <Starfield />
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2 flex-shrink-0">
          <button onClick={() => router.push("/astromath")}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <div className="text-center">
            <h1 className="text-lg font-black text-white">🪐 {t.islandMap}</h1>
            <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest">{t.gradeLabel}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/50 text-xs font-bold">
            {totalDone}/9
          </div>
        </div>
        {/* Progress bar */}
        <div className="relative z-10 px-4 mb-2 flex-shrink-0">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #4ECDC4, #B44DFF)" }}
              initial={{ width: 0 }} animate={{ width: `${(totalDone / 9) * 100}%` }} transition={{ duration: 0.8 }} />
          </div>
        </div>
        {/* Scrollable map */}
        <div className="relative z-10 flex-1 overflow-y-auto">
          <div className="px-4 pb-6" style={{ minHeight: MAP_H + 40 }}>
            <IslandMapSVG progress={progress} onIsland={handleIslandSelect} onCheckpoint={startCheckpoint} />
          </div>
        </div>
      </div>
    );
  }

  // ─── ISLAND INTRO ────────────────────────────────────────────────────────────
  if (screen === "island-intro" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4">
          <button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
          <div className="w-9" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center pb-6">
          <motion.div className="text-7xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }}>
            {activeIsland.icon}
          </motion.div>
          <div>
            <h2 className="text-2xl font-black text-white">{activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2>
            <p className="text-white/50 text-sm mt-2 font-medium">{activeIsland.missions.length} {t.missions}</p>
          </div>
          <motion.button onClick={() => setScreen("mission-select")}
            className="w-full max-w-xs py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${bgColor}55, ${bgColor}99)`, border: `2px solid ${bgColor}` }}
            whileTap={{ scale: 0.97 }}>
            {t.start} <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    );
  }

  // ─── MISSION SELECT ──────────────────────────────────────────────────────────
  if (screen === "mission-select" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4">
          <button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
          <h2 className="font-black text-white text-base">{activeIsland.icon} {activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2>
          <div className="w-9" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col px-5 gap-3 pb-6">
          {activeIsland.missions.map((mission, idx) => {
            const done = isMissionDone(progress, activeIsland.id, mission.id);
            const prevDone = idx === 0 || isMissionDone(progress, activeIsland.id, activeIsland.missions[idx - 1].id);
            const locked = !prevDone;
            return (
              <motion.button key={mission.id} onClick={() => !locked && startMission(mission)} disabled={locked}
                className="flex items-center gap-4 rounded-2xl px-4 py-4"
                style={{
                  background: done ? `${bgColor}18` : locked ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.05)",
                  border: `1.5px solid ${done ? bgColor : locked ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.12)"}`,
                  opacity: locked ? 0.45 : 1,
                }}
                whileTap={!locked ? { scale: 0.97 } : {}}>
                <span className="text-2xl">{locked ? "🔒" : done ? "✅" : mission.icon}</span>
                <div className="flex-1 text-left">
                  <p className="font-bold text-sm text-white/90">{mission.label[lang as Lang] ?? mission.label.en}</p>
                  <p className="text-[11px] text-white/40">{t.mission} {idx + 1}</p>
                </div>
                {done && <Check size={16} style={{ color: bgColor }} />}
                {!done && !locked && <ChevronRight size={16} className="text-white/30" />}
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  // ─── GAME SCREENS (orbit-quiz, black-hole, gravity-sort, star-match) ─────────
  const gameScreen = (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}18 0%, #060614 55%)` }}>
      <Starfield />
      {/* HUD */}
      <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
        <button onClick={() => setScreen("mission-select")}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button>
        <div className="flex-1">
          <p className="text-white/70 text-xs font-bold">{activeIsland?.icon} {activeIsland?.name[lang as Lang]}</p>
          <p className="text-white/40 text-[10px]">{activeMission?.label[lang as Lang] ?? activeMission?.label.en}</p>
        </div>
      </div>
      {/* Game */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
        {screen === "orbit-quiz" && questions.length > 0 && (
          <OrbitQuiz questions={questions} color={bgColor} onDone={handleMissionDone} />
        )}
        {screen === "black-hole" && questions.length > 0 && (
          <BlackHole questions={questions} color={bgColor} onDone={handleMissionDone} />
        )}
        {screen === "gravity-sort" && activeIsland && (
          <GravitySort sortRange={activeIsland.sortRange} color={bgColor} onDone={handleMissionDone} />
        )}
        {screen === "star-match" && questions.length > 0 && (
          <StarMatch questions={questions} color={bgColor} onDone={handleMissionDone} />
        )}
      </div>
    </div>
  );

  if (["orbit-quiz", "black-hole", "gravity-sort", "star-match"].includes(screen)) return gameScreen;

  // ─── MISSION DONE ────────────────────────────────────────────────────────────
  if (screen === "mission-done" && activeIsland && activeMission) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5"
        style={{ background: `radial-gradient(ellipse at 50% 30%, ${bgColor}22 0%, #060614 60%)` }}>
        <Starfield />
        <div className="relative z-10 w-full">
          <MissionDoneScreen mission={activeMission} island={activeIsland}
            score={missionScore.score} total={missionScore.total} onContinue={handleAfterMission} />
        </div>
      </div>
    );
  }

  // ─── REWARD ──────────────────────────────────────────────────────────────────
  if (screen === "reward" && earnedCard) {
    return (
      <>
        <RewardReveal rarity={earnedCard} game="astromath"
          score={rewardScore.score} total={rewardScore.total}
          onDone={() => {
            if (activeTestId) {
              setScreen("checkpoint-done");
            } else {
              setScreen("island-done");
            }
          }} />
        <MilestonePopup />
      </>
    );
  }

  // ─── ISLAND DONE ─────────────────────────────────────────────────────────────
  if (screen === "island-done" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5"
        style={{ background: `radial-gradient(ellipse at 50% 30%, ${bgColor}22 0%, #060614 60%)` }}>
        <Starfield />
        <div className="relative z-10 w-full">
          <IslandDoneScreen island={activeIsland} onContinue={goToMap} />
        </div>
        <MilestonePopup />
      </div>
    );
  }

  // ─── CHECKPOINT INTRO ────────────────────────────────────────────────────────
  if (screen === "checkpoint-intro" && activeTestId) {
    const testTopics = (t.testTopics as Record<string, string>)[activeTestId] ?? "";
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5 gap-6"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.12) 0%, #060614 60%)" }}>
        <Starfield />
        <div className="relative z-10 flex flex-col items-center gap-5 text-center w-full max-w-sm">
          <button onClick={goToMap} className="absolute top-0 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
          <motion.div className="text-6xl" animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎓</motion.div>
          <div>
            <h2 className="text-2xl font-black text-[#FFD700]">{t.checkpointReady}</h2>
            <p className="text-white/60 text-sm mt-2 font-medium leading-relaxed">{t.checkpointDesc}</p>
            <p className="text-white/40 text-xs mt-2">{testTopics}</p>
          </div>
          <motion.button onClick={startCheckpointQuiz}
            className="w-full py-4 rounded-2xl font-black text-black text-base flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
            whileTap={{ scale: 0.97 }}>
            {t.startTest} 🚀
          </motion.button>
        </div>
      </div>
    );
  }

  // ─── CHECKPOINT QUIZ ─────────────────────────────────────────────────────────
  if (screen === "checkpoint-quiz" && questions.length > 0) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.12) 0%, #060614 55%)" }}>
        <Starfield />
        <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
          <button onClick={goToMap} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button>
          <p className="text-white/70 text-sm font-bold flex-1">{t.checkpointTitle}</p>
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
          <OrbitQuiz questions={questions} color="#FFD700" onDone={handleCheckpointDone} />
        </div>
      </div>
    );
  }

  // ─── CHECKPOINT DONE ─────────────────────────────────────────────────────────
  if (screen === "checkpoint-done" && activeTestId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.12) 0%, #060614 60%)" }}>
        <Starfield />
        <div className="relative z-10 w-full">
          <CheckpointDoneScreen score={checkpointScore.score} total={checkpointScore.total}
            testId={activeTestId} onContinue={goToMap} />
        </div>
        <MilestonePopup />
      </div>
    );
  }

  return null;
}
