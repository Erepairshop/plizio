"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MathLevelBar, useMathGameProgress } from "@/components/visual-lab/MathGameProgress";
import { difficultyFor, type MathDifficulty } from "@/lib/visualLab/mathCurriculum";

/* ------------------------------------------------------------------ */
/* Types + rule system                                                  */
/* ------------------------------------------------------------------ */

type Lang = "de" | "hu" | "ro" | "en";

type RuleId =
  | "even"
  | "odd"
  | "multiple-of"
  | "prime"
  | "sum-to"
  | "greater-than"
  | "less-than";

interface Rule {
  id: RuleId;
  promptKey: string;
  param?: number;
  test: (n: number) => boolean;
}

interface Blade {
  uid: number;
  value: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  rotSpeed: number;
  color: string;
  sliced: boolean;
  pending?: boolean;   // sum-to: first piece selected, waiting for partner
  slicedAt?: number;
  correct?: boolean;
}

interface SlashPoint {
  x: number;
  y: number;
  t: number;
}

/* ------------------------------------------------------------------ */
/* L10n                                                                */
/* ------------------------------------------------------------------ */

const T: Record<Lang, Record<string, string>> = {
  de: {
    title: "Math Ninja",
    subtitle: "Wische die richtigen Zahlen!",
    start: "Loslegen",
    restart: "Erneut versuchen",
    tryAgain: "Nochmal versuchen",
    score: "Punkte",
    combo: "KOMBO",
    time: "Zeit",
    lives: "Leben",
    roundDone: "Level geschafft!",
    gameOver: "Versuch beendet",
    rule_even: "Zerschneide nur GERADE Zahlen!",
    rule_odd: "Zerschneide nur UNGERADE Zahlen!",
    "rule_multiple-of": "Zerschneide Vielfache von {n}!",
    rule_prime: "Zerschneide nur PRIMZAHLEN!",
    "rule_sum-to": "Zerschneide Paare, die {n} ergeben!",
    "rule_greater-than": "Zerschneide Zahlen GRÖSSER als {n}!",
    "rule_less-than": "Zerschneide Zahlen KLEINER als {n}!",
    next: "Nächstes Level",
    task: "Deine Aufgabe",
    go: "LOS!",
    goal: "Ziel",
  },
  hu: {
    title: "Math Ninja",
    subtitle: "Vágd el a helyes számokat!",
    start: "Kezdés",
    restart: "Újrapróbálom",
    tryAgain: "Próbáld újra",
    score: "Pont",
    combo: "KOMBÓ",
    time: "Idő",
    lives: "Élet",
    roundDone: "Szint teljesítve!",
    gameOver: "Próbálkozás vége",
    rule_even: "Csak PÁROS számokat vágj!",
    rule_odd: "Csak PÁRATLAN számokat vágj!",
    "rule_multiple-of": "Csak {n} többszöröseit vágd!",
    rule_prime: "Csak PRÍMSZÁMOKAT vágj!",
    "rule_sum-to": "Olyan párokat, amelyek összege {n}!",
    "rule_greater-than": "{n}-nél NAGYOBB számokat!",
    "rule_less-than": "{n}-nél KISEBB számokat!",
    next: "Következő szint",
    task: "A feladatod",
    go: "RAJT!",
    goal: "Cél",
  },
  ro: {
    title: "Math Ninja",
    subtitle: "Taie numerele corecte!",
    start: "Start",
    restart: "Încearcă din nou",
    tryAgain: "Încearcă din nou",
    score: "Punctaj",
    combo: "COMBO",
    time: "Timp",
    lives: "Vieți",
    roundDone: "Nivel complet!",
    gameOver: "Încercare încheiată",
    rule_even: "Taie doar numere PARE!",
    rule_odd: "Taie doar numere IMPARE!",
    "rule_multiple-of": "Taie multiplii de {n}!",
    rule_prime: "Taie doar numere PRIME!",
    "rule_sum-to": "Taie perechi cu suma {n}!",
    "rule_greater-than": "Numere mai MARI decât {n}!",
    "rule_less-than": "Numere mai MICI decât {n}!",
    next: "Nivelul următor",
    task: "Sarcina ta",
    go: "START!",
    goal: "Obiectiv",
  },
  en: {
    title: "Math Ninja",
    subtitle: "Slice the right numbers!",
    start: "Start",
    restart: "Try again",
    tryAgain: "Try again",
    score: "Score",
    combo: "COMBO",
    time: "Time",
    lives: "Lives",
    roundDone: "Level complete!",
    gameOver: "Attempt complete",
    rule_even: "Slice only EVEN numbers!",
    rule_odd: "Slice only ODD numbers!",
    "rule_multiple-of": "Slice multiples of {n}!",
    rule_prime: "Slice only PRIME numbers!",
    "rule_sum-to": "Slice pairs that sum to {n}!",
    "rule_greater-than": "Slice numbers GREATER than {n}!",
    "rule_less-than": "Slice numbers LESS than {n}!",
    next: "Next level",
    task: "Your task",
    go: "GO!",
    goal: "Goal",
  },
};

/* ------------------------------------------------------------------ */
/* Math helpers                                                         */
/* ------------------------------------------------------------------ */

function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
  return true;
}

/* ------------------------------------------------------------------ */
/* Rule + number pool per grade                                         */
/* ------------------------------------------------------------------ */

interface RoundPool {
  rule: Rule;
  range: [number, number];
  spawnIntervalMs: number;
  durationMs: number;
  goal: number;
  maxLives: number;
}

function makeRule(grade: number, level: number, seed: number): Rule {
  const pick = (arr: Rule[]) => {
    const available = arr.slice(0, Math.min(arr.length, Math.max(2, level)));
    return available[seed % available.length];
  };

  if (grade <= 1) {
    return pick([
      { id: "multiple-of", promptKey: "rule_multiple-of", param: 2, test: (n) => n % 2 === 0 },
      { id: "greater-than", promptKey: "rule_greater-than", param: 5, test: (n) => n > 5 },
      { id: "less-than", promptKey: "rule_less-than", param: 6, test: (n) => n < 6 },
    ]);
  }
  if (grade <= 2) {
    return pick([
      { id: "even", promptKey: "rule_even", test: (n) => n % 2 === 0 },
      { id: "odd", promptKey: "rule_odd", test: (n) => n % 2 === 1 },
      { id: "greater-than", promptKey: "rule_greater-than", param: 10, test: (n) => n > 10 },
      { id: "multiple-of", promptKey: "rule_multiple-of", param: 5, test: (n) => n % 5 === 0 },
    ]);
  }
  if (grade <= 3) {
    return pick([
      { id: "multiple-of", promptKey: "rule_multiple-of", param: 3, test: (n) => n % 3 === 0 },
      { id: "multiple-of", promptKey: "rule_multiple-of", param: 4, test: (n) => n % 4 === 0 },
      { id: "sum-to", promptKey: "rule_sum-to", param: 10, test: () => false },
      { id: "even", promptKey: "rule_even", test: (n) => n % 2 === 0 },
    ]);
  }
  if (grade <= 5) {
    return pick([
      { id: "prime", promptKey: "rule_prime", test: isPrime },
      { id: "multiple-of", promptKey: "rule_multiple-of", param: 7, test: (n) => n % 7 === 0 },
      { id: "multiple-of", promptKey: "rule_multiple-of", param: 6, test: (n) => n % 6 === 0 },
      { id: "sum-to", promptKey: "rule_sum-to", param: 20, test: () => false },
    ]);
  }
  return pick([
    { id: "prime", promptKey: "rule_prime", test: isPrime },
    { id: "multiple-of", promptKey: "rule_multiple-of", param: 11, test: (n) => n % 11 === 0 },
    { id: "sum-to", promptKey: "rule_sum-to", param: 50, test: () => false },
    { id: "greater-than", promptKey: "rule_greater-than", param: 50, test: (n) => n > 50 },
  ]);
}

function poolFor(grade: number, difficulty: MathDifficulty, seed: number): RoundPool {
  const rule = makeRule(grade, difficulty.level, seed);
  const gradeBase = grade === 1 ? 10
    : grade === 2 ? 20
      : grade === 3 ? 30
        : grade === 4 ? 50
          : grade === 5 ? 60
            : 100;
  const levelGrowth = grade <= 2 ? 4 : grade <= 4 ? 10 : grade === 5 ? 20 : 30;
  const range: [number, number] = [grade <= 3 ? 1 : 2, Math.min(250, gradeBase + (difficulty.level - 1) * levelGrowth)];
  const baseSpawnInterval = grade <= 2 ? 1_050 : grade <= 4 ? 900 : 760;
  const spawnIntervalMs = Math.round(baseSpawnInterval / difficulty.speedMultiplier);
  const durationMs = 45_000;
  const goal = difficulty.rounds;
  return { rule, range, spawnIntervalMs, durationMs, goal, maxLives: 3 };
}

function localizePrompt(t: Record<string, string>, rule: Rule): string {
  const tpl = t[rule.promptKey] ?? rule.promptKey;
  return tpl.replace("{n}", String(rule.param ?? ""));
}

/* ------------------------------------------------------------------ */
/* Game                                                                 */
/* ------------------------------------------------------------------ */

interface Props {
  grade: number;
  lang: Lang;
  onDone?: (score: number) => void;
}

const PALETTE = ["#22D3EE", "#F472B6", "#A78BFA", "#FBBF24", "#34D399", "#F97316", "#60A5FA"];

export default function MathNinjaGame({ grade, lang, onDone }: Props) {
  const t = T[lang] ?? T.en;
  const { progress, difficulty, levelRef, mastery, selectLevel, recordAnswer, advanceToUnlockedLevel } = useMathGameProgress("math-ninja", grade);
  const [phase, setPhase] = useState<"reveal" | "playing" | "won" | "lost">("reveal");
  const [pool, setPool] = useState<RoundPool>(() => poolFor(grade, difficultyFor(grade, 1), Math.floor(Math.random() * 1000)));

  const [blades, setBlades] = useState<Blade[]>([]);
  const [slashPoints, setSlashPoints] = useState<SlashPoint[]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [correctHits, setCorrectHits] = useState(0);
  const [flash, setFlash] = useState<"good" | "bad" | null>(null);
  const [lastComboText, setLastComboText] = useState<string | null>(null);

  const scoreRef = useRef(0);
  const uidRef = useRef(1);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const slicingRef = useRef(false);
  const lastSliceTsRef = useRef(0);
  const pendingPairRef = useRef<Blade | null>(null);
  const frameRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number>(0);

  const loseLives = useCallback((count = 1) => {
    if (count <= 0) return;
    setLives((current) => Math.max(0, current - count));
    setCombo(0);
    setFlash("bad");
  }, []);

  /* Start / restart */
  const start = useCallback(() => {
    const seed = Math.floor(Math.random() * 1000);
    const p = poolFor(grade, difficultyFor(grade, levelRef.current), seed);
    setPool(p);
    setBlades([]);
    setSlashPoints([]);
    setScore(0);
    scoreRef.current = 0;
    setCombo(0);
    setLives(p.maxLives);
    setCorrectHits(0);
    setFlash(null);
    setLastComboText(null);
    pendingPairRef.current = null;
    setPhase("reveal");
  }, [grade, levelRef]);

  /* Spawner */
  useEffect(() => {
    if (phase !== "playing") return;
    const interval = setInterval(() => {
      setBlades((prev) => {
        const nextUid = uidRef.current++;
        const [min, max] = pool.range;
        const value = Math.floor(Math.random() * (max - min + 1)) + min;
        const x = 12 + Math.random() * 76;
        const vx = (Math.random() - 0.5) * 35;
        // Stronger upward launch so numbers reach top area
        const vy = -(90 + Math.random() * 50);
        const blade: Blade = {
          uid: nextUid,
          value,
          x,
          y: 132,
          vx,
          vy,
          rot: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 380,
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          sliced: false,
        };
        return [...prev, blade];
      });
    }, pool.spawnIntervalMs);
    return () => clearInterval(interval);
  }, [phase, pool]);

  /* Physics loop — gravity + cleanup */
  useEffect(() => {
    if (phase !== "playing") return;
    const step = (ts: number) => {
      const last = lastFrameRef.current || ts;
      const dt = Math.min(48, ts - last) / 1000;
      lastFrameRef.current = ts;

      let effectsQueued = false;
      setBlades((prev) => {
        let missedTargets = 0;
        let escapedPendingUid: number | null = null;
        const gravity = 85; // lower = higher arcs
        const next: Blade[] = [];
        for (const b of prev) {
          if (b.sliced) {
            if (ts - (b.slicedAt ?? ts) < 500) next.push(b);
            continue;
          }
          const newVy = b.vy + gravity * dt;
          const newX = b.x + b.vx * dt;
          const newY = b.y + newVy * dt;
          const newRot = b.rot + b.rotSpeed * dt;
          if (newY > 138) {
            // Off-screen: clear pending if this was the selected pair piece
            if (pool.rule.id === "sum-to") {
              if (pendingPairRef.current?.uid === b.uid) {
                escapedPendingUid = b.uid;
              }
            } else if (pool.rule.test(b.value)) {
              missedTargets += 1;
            }
            continue;
          }
          next.push({ ...b, x: newX, y: newY, vy: newVy, rot: newRot });
        }
        if (!effectsQueued && (escapedPendingUid !== null || missedTargets > 0)) {
          effectsQueued = true;
          queueMicrotask(() => {
            if (pendingPairRef.current?.uid === escapedPendingUid) pendingPairRef.current = null;
            if (missedTargets > 0) {
              for (let index = 0; index < missedTargets; index++) recordAnswer(false);
              loseLives(missedTargets);
            }
          });
        }
        return next;
      });

      setSlashPoints((prev) => prev.filter((sp) => ts - sp.t < 300));
      frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      lastFrameRef.current = 0;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, pool, loseLives, recordAnswer]);

  /* Win / lose watchers */
  useEffect(() => {
    if (phase === "playing" && correctHits >= pool.goal) {
      advanceToUnlockedLevel();
      setPhase("won");
      onDone?.(scoreRef.current);
    }
  }, [correctHits, pool.goal, phase, onDone, advanceToUnlockedLevel]);

  useEffect(() => {
    if (phase === "playing" && lives <= 0) {
      setPhase("lost");
    }
  }, [lives, phase]);

  /* Combo decay */
  useEffect(() => {
    if (phase !== "playing" || combo === 0) return;
    const timer = setTimeout(() => setCombo(0), 1400);
    return () => clearTimeout(timer);
  }, [combo, phase]);

  /* Flash auto-clear */
  useEffect(() => {
    if (!flash) return;
    const timer = setTimeout(() => setFlash(null), 250);
    return () => clearTimeout(timer);
  }, [flash]);

  /* Combo text auto-clear */
  useEffect(() => {
    if (!lastComboText) return;
    const timer = setTimeout(() => setLastComboText(null), 900);
    return () => clearTimeout(timer);
  }, [lastComboText]);

  /* Pointer → SVG coords */
  const toSvgCoords = (e: React.PointerEvent<SVGSVGElement>): { x: number; y: number } => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const rect = svg.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 130,
    };
  };

  /* Slice logic */
  const slashHitTest = (pt: SlashPoint) => {
    let resultQueued = false;
    setBlades((prev) => {
      let hitAnyCorrect = 0;
      let hitWrong = false;
      let partnerUid: number | null = null;
      const initialPendingUid = pendingPairRef.current?.uid ?? null;
      let pendingAfter = pendingPairRef.current;

      const next = prev.map((b) => {
        if (b.sliced) return b;
        const dx = b.x - pt.x;
        const dy = b.y - pt.y;
        if (dx * dx + dy * dy < 36) {
          const rule = pool.rule;
          if (rule.id === "sum-to") {
            const target = rule.param ?? 0;
            const partner = pendingAfter;
            if (partner && partner.uid !== b.uid && partner.value + b.value === target) {
              // Match! Slice B and mark partner for second pass
              hitAnyCorrect++;
              partnerUid = partner.uid;
              pendingAfter = null;
              return { ...b, sliced: true, slicedAt: performance.now(), correct: true };
            } else if (b.pending) {
              // Tap pending again → deselect
              pendingAfter = null;
              return { ...b, pending: false };
            } else {
              // Select as first piece
              pendingAfter = b;
              return { ...b, pending: true };
            }
          } else {
            const correct = rule.test(b.value);
            if (correct) hitAnyCorrect++;
            else hitWrong = true;
            return { ...b, sliced: true, slicedAt: performance.now(), correct };
          }
        }
        return b;
      });

      // Second pass: mark the sum-to partner as sliced correctly
      if (partnerUid !== null) {
        for (let i = 0; i < next.length; i++) {
          if (next[i].uid === partnerUid) {
            next[i] = { ...next[i], sliced: true, slicedAt: performance.now(), correct: true, pending: false };
            hitAnyCorrect++;
            break;
          }
        }
      }

      // Only one number may remain selected for a sum pair. Without this
      // cleanup, tapping a non-matching second number left the old one glowing
      // while the new number became the actual pending partner.
      const activePendingUid = pendingAfter?.uid ?? null;
      for (let i = 0; i < next.length; i++) {
        if (next[i].pending && next[i].uid !== activePendingUid) {
          next[i] = { ...next[i], pending: false };
        }
      }

      const pendingChanged = initialPendingUid !== activePendingUid;
      if (!resultQueued && (hitAnyCorrect > 0 || hitWrong || pendingChanged)) {
        resultQueued = true;
        queueMicrotask(() => {
          if (pendingChanged) pendingPairRef.current = pendingAfter;
          if (hitAnyCorrect > 0) {
            for (let index = 0; index < hitAnyCorrect; index++) recordAnswer(true);
            setCombo((current) => {
              const newCombo = current + hitAnyCorrect;
              if (newCombo >= 3) setLastComboText(`${newCombo}× ${t.combo}`);
              return newCombo;
            });
            setScore((current) => {
              const bonus = Math.max(0, combo - 1) * 5;
              const nextScore = current + hitAnyCorrect * 10 + bonus;
              scoreRef.current = nextScore;
              return nextScore;
            });
            setCorrectHits((current) => current + hitAnyCorrect);
            setFlash("good");
          }
          if (hitWrong) {
            recordAnswer(false);
            loseLives(1);
          }
        });
      }
      return next;
    });
  };

  /* Pointer handlers */
  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (phase !== "playing") return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    slicingRef.current = true;
    const p = toSvgCoords(e);
    const sp: SlashPoint = { ...p, t: performance.now() };
    setSlashPoints([sp]);
    slashHitTest(sp);
    lastSliceTsRef.current = sp.t;
  };
  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (phase !== "playing" || !slicingRef.current) return;
    const now = performance.now();
    if (now - lastSliceTsRef.current < 14) return;
    const p = toSvgCoords(e);
    const sp: SlashPoint = { ...p, t: now };
    setSlashPoints((prev) => [...prev.slice(-22), sp]);
    slashHitTest(sp);
    lastSliceTsRef.current = now;
  };
  const onPointerUp = () => {
    slicingRef.current = false;
  };

  /* Slash trail */
  const slashPath = useMemo(() => {
    if (slashPoints.length < 2) return "";
    let d = `M${slashPoints[0].x.toFixed(2)},${slashPoints[0].y.toFixed(2)}`;
    for (let i = 1; i < slashPoints.length; i++) {
      d += ` L${slashPoints[i].x.toFixed(2)},${slashPoints[i].y.toFixed(2)}`;
    }
    return d;
  }, [slashPoints]);

  const prompt = localizePrompt(t, pool.rule);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <MathLevelBar
        grade={grade}
        lang={lang}
        progress={progress}
        mastery={mastery}
        onSelect={(level) => {
          selectLevel(level);
          setPhase("reveal");
          setPool(poolFor(grade, difficultyFor(grade, level), Math.floor(Math.random() * 1000)));
        }}
      />
      <div
        className="relative rounded-[32px] border border-white/10 overflow-hidden shadow-2xl"
        style={{
          aspectRatio: "10 / 13",
          background:
            "radial-gradient(ellipse at 50% 115%, rgba(34,211,238,0.18) 0%, rgba(9,12,32,0.95) 45%, #03050f 100%)",
        }}
      >
        {/* Starfield */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => {
            const x = (i * 73) % 100;
            const y = (i * 37) % 100;
            const s = ((i * 13) % 3) + 1;
            const d = 1.8 + ((i * 7) % 40) / 10;
            return (
              <motion.span
                key={i}
                className="absolute rounded-full bg-white"
                style={{ left: `${x}%`, top: `${y}%`, width: s, height: s, opacity: 0.4 }}
                animate={{ opacity: [0.15, 0.75, 0.15] }}
                transition={{ duration: d, repeat: Infinity, delay: i * 0.07 }}
              />
            );
          })}
        </div>

        {/* HUD */}
        <div className="absolute top-0 left-0 right-0 p-3 z-20 flex items-start justify-between gap-2 pointer-events-none">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/45 font-bold">{t.title}</p>
            <p
              className="text-white/90 text-sm sm:text-base font-bold leading-tight max-w-[200px]"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
            >
              {prompt}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 text-xs">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur rounded-full px-3 py-1">
              <span className="text-white/55">{t.score}</span>
              <span className="text-cyan-300 font-black text-base tabular-nums">{score}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur rounded-full px-3 py-1">
              <span className="text-white/55">{t.lives}</span>
              <span className="text-rose-300 tracking-widest">
                {"❤".repeat(lives)}{"·".repeat(Math.max(0, pool.maxLives - lives))}
              </span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="absolute top-20 left-3 z-20 pointer-events-none">
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur rounded-full px-2.5 py-0.5">
            <span className="text-white/55 text-[10px] uppercase tracking-wider">{t.goal}</span>
            <span className="text-emerald-300 font-bold text-xs tabular-nums">
              {correctHits}/{pool.goal}
            </span>
          </div>
        </div>

        {/* Combo popup */}
        <AnimatePresence>
          {lastComboText && (
            <motion.div
              key={lastComboText}
              initial={{ scale: 0.5, opacity: 0, y: 25 }}
              animate={{ scale: 1.1, opacity: 1, y: 0 }}
              exit={{ scale: 0.75, opacity: 0, y: -25 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
            >
              <p
                className="text-4xl sm:text-6xl font-black tracking-tight select-none"
                style={{
                  color: "#FFF1C1",
                  textShadow: "0 0 18px #F59E0B, 0 0 44px #F97316, 0 4px 14px rgba(0,0,0,0.6)",
                  transform: "rotate(-5deg)",
                }}
              >
                {lastComboText}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Flash overlay */}
        <AnimatePresence>
          {flash && (
            <motion.div
              key={flash}
              className="absolute inset-0 pointer-events-none z-10 rounded-[32px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{
                background:
                  flash === "good"
                    ? "radial-gradient(circle at center, rgba(34,211,238,0.55), transparent 65%)"
                    : "radial-gradient(circle at center, rgba(244,63,94,0.6), transparent 65%)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Main SVG playfield */}
        <svg
          ref={svgRef}
          viewBox="0 0 100 130"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full touch-none select-none z-[15]"
          style={{ cursor: phase === "playing" ? "crosshair" : "default" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <defs>
            <filter id="mn-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="mn-glow-gold" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodColor="#F59E0B" floodOpacity="0.6" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="mn-slash" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
              <stop offset="50%" stopColor="#A5F3FC" stopOpacity="1" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
            </linearGradient>
          </defs>

          {blades.map((b) => {
            /* Sliced: drift up and fade */
            if (b.sliced) {
              const age = performance.now() - (b.slicedAt ?? performance.now());
              const progress = age / 500;
              const fade = Math.max(0, 1 - progress);
              const drift = progress * 10;
              const scale = 1 + progress * 0.6;
              const colorRing =
                b.correct === true ? "#34D399"
                : b.correct === false ? "#F43F5E"
                : "#94A3B8";
              return (
                <g
                  key={b.uid}
                  opacity={fade}
                  transform={`translate(${b.x} ${b.y - drift}) scale(${scale})`}
                >
                  <circle r={5} fill="none" stroke={colorRing} strokeWidth={1.0} opacity={0.8} />
                  <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={b.value >= 100 ? 3 : b.value >= 10 ? 4 : 5}
                    fontWeight={900}
                    fill={colorRing}
                  >
                    {b.value}
                  </text>
                </g>
              );
            }

            /* Pending (sum-to first piece selected) */
            if (b.pending) {
              return (
                <g
                  key={b.uid}
                  transform={`translate(${b.x} ${b.y}) rotate(${b.rot})`}
                  filter="url(#mn-glow-gold)"
                >
                  <circle r={8} fill="#F59E0B" opacity={0.12} />
                  <circle r={6} fill="none" stroke="#F59E0B" strokeWidth={1.4} strokeDasharray="2.5 1.5" />
                  <circle r={4.6} fill="#1a0f00" stroke="#F59E0B" strokeWidth={0.9} />
                  <text
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={b.value >= 100 ? 2.8 : b.value >= 10 ? 3.6 : 4.4}
                    fontWeight={900}
                    fill="#FEF3C7"
                  >
                    {b.value}
                  </text>
                </g>
              );
            }

            /* Normal flying blade */
            return (
              <g
                key={b.uid}
                transform={`translate(${b.x} ${b.y}) rotate(${b.rot})`}
                filter="url(#mn-glow)"
              >
                <circle r={6.5} fill={b.color} opacity={0.18} />
                <circle r={5} fill="#0a1020" stroke={b.color} strokeWidth={0.7} />
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={b.value >= 100 ? 2.8 : b.value >= 10 ? 3.6 : 4.4}
                  fontWeight={900}
                  fill="#F0FDFF"
                  style={{ paintOrder: "stroke", stroke: "#03060e", strokeWidth: 0.5 }}
                >
                  {b.value}
                </text>
              </g>
            );
          })}

          {/* Slash trail */}
          {slashPath && (
            <path
              d={slashPath}
              stroke="url(#mn-slash)"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#mn-glow)"
              opacity={0.92}
            />
          )}
        </svg>

        {/* ── Reveal overlay: the learner starts when ready ── */}
        {phase === "reveal" && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-6 text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 font-semibold mb-4">
              {t.task}
            </p>
            <div className="rounded-2xl border border-cyan-400/35 bg-cyan-500/12 px-6 py-5 mb-8 max-w-xs">
              <p
                className="text-cyan-100 text-xl sm:text-2xl font-bold leading-snug"
                style={{ textShadow: "0 2px 12px rgba(34,211,238,0.35)" }}
              >
                {prompt}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPhase("playing")}
              className="rounded-2xl border border-cyan-300/50 bg-cyan-500/20 px-8 py-4 text-2xl font-black text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.25)] active:scale-95"
            >
              {t.start}
            </button>
          </div>
        )}

        {/* ── Won / Lost overlay ── */}
        {(phase === "won" || phase === "lost") && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/75 backdrop-blur-sm p-6 text-center">
            <p
              className="text-3xl sm:text-4xl font-black mb-3"
              style={{
                color: phase === "won" ? "#86EFAC" : "#FCA5A5",
                textShadow: "0 4px 18px rgba(0,0,0,0.5)",
              }}
            >
              {phase === "won" ? t.roundDone : t.gameOver}
            </p>
            <p className="text-white/60 mb-2 text-sm">{t.score}</p>
            <p className="text-5xl font-black text-white mb-6 tabular-nums">{score}</p>
            <button
              onClick={start}
              className="
                px-7 py-3 rounded-full text-white text-base font-bold
                bg-gradient-to-r from-cyan-500 to-fuchsia-500
                shadow-[0_8px_28px_rgba(34,211,238,0.40)]
                hover:scale-[1.05] active:scale-[0.97] transition
              "
            >
              🔄 {phase === "won" ? t.next : t.tryAgain}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
