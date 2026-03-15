"use client";
// TrueFalseBlitz — rapid-fire true/false challenge for Grade 4
// 12 statements, 4s per question, big ✓ / ✗ buttons
// Supports: mul, div, units, angles topics

import { memo, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { speak, SpeakButton } from "@/lib/astromath-tts";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const rand = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
const pick = <T,>(arr: T[]): T => arr[rand(0, arr.length - 1)];

// ─── Types ────────────────────────────────────────────────────────────────────
interface TFQuestion {
  statement: string;
  isTrue: boolean;
  correctStatement: string; // always the true version, shown on wrong
}

// ─── Question generators ──────────────────────────────────────────────────────

function mulTF(): TFQuestion {
  const a = rand(2, 9), b = rand(2, 9);
  const correct = a * b;
  const isTrue = Math.random() > 0.5;
  const offsets = [-3, -2, -1, 1, 2, 3].filter(o => correct + o > 0);
  const wrong = correct + pick(offsets);
  return {
    statement: `${a} × ${b} = ${isTrue ? correct : wrong}`,
    isTrue,
    correctStatement: `${a} × ${b} = ${correct}`,
  };
}

function divTF(): TFQuestion {
  const b = rand(2, 9), c = rand(2, 9);
  const a = b * c;
  const isTrue = Math.random() > 0.5;
  const wrongC = Math.max(1, c + pick([-2, -1, 1, 2]));
  return {
    statement: `${a} ÷ ${b} = ${isTrue ? c : wrongC}`,
    isTrue,
    correctStatement: `${a} ÷ ${b} = ${c}`,
  };
}

const CONVERSIONS = [
  { from: "km", to: "m",   mult: 1000, wrongMult: 100  },
  { from: "m",  to: "cm",  mult: 100,  wrongMult: 10   },
  { from: "kg", to: "g",   mult: 1000, wrongMult: 100  },
  { from: "h",  to: "min", mult: 60,   wrongMult: 6    },
  { from: "l",  to: "ml",  mult: 1000, wrongMult: 100  },
];

function unitsTF(): TFQuestion {
  const conv = pick(CONVERSIONS);
  const n = rand(1, 9);
  const isTrue = Math.random() > 0.5;
  return {
    statement: `${n} ${conv.from} = ${isTrue ? n * conv.mult : n * conv.wrongMult} ${conv.to}`,
    isTrue,
    correctStatement: `${n} ${conv.from} = ${n * conv.mult} ${conv.to}`,
  };
}

type AngleType = "acute" | "right" | "obtuse" | "straight";
const ANGLE_POOL: { deg: number; type: AngleType }[] = [
  { deg: 30,  type: "acute"    }, { deg: 45,  type: "acute"    },
  { deg: 60,  type: "acute"    }, { deg: 90,  type: "right"    },
  { deg: 120, type: "obtuse"   }, { deg: 135, type: "obtuse"   },
  { deg: 150, type: "obtuse"   }, { deg: 180, type: "straight" },
];
const ANGLE_NAMES: Record<string, Record<AngleType, string>> = {
  de: { acute: "spitzer Winkel", right: "rechter Winkel", obtuse: "stumpfer Winkel", straight: "gestreckter Winkel" },
  en: { acute: "acute angle",    right: "right angle",    obtuse: "obtuse angle",    straight: "straight angle"    },
  hu: { acute: "hegyes szög",    right: "derékszög",      obtuse: "tompaszög",       straight: "nyújtott szög"     },
  ro: { acute: "unghi ascuțit",  right: "unghi drept",    obtuse: "unghi obtuz",     straight: "unghi plat"        },
};

function buildAngleStmt(deg: number, name: string, lang: string): string {
  if (lang === "de") return `Ein ${deg}°-Winkel ist ein ${name}.`;
  if (lang === "en") {
    const art = name.startsWith("a") || name.startsWith("o") ? "an" : "a";
    return `A ${deg}° angle is ${art} ${name}.`;
  }
  if (lang === "hu") return `A ${deg}°-os szög ${name}.`;
  return `Un unghi de ${deg}° este un ${name}.`;
}

function angleTF(lang: string): TFQuestion {
  const item = pick(ANGLE_POOL);
  const names = ANGLE_NAMES[lang] ?? ANGLE_NAMES.en;
  const isTrue = Math.random() > 0.5;
  const wrongTypes = (Object.keys(names) as AngleType[]).filter(t => t !== item.type);
  const wrongName = names[pick(wrongTypes)];
  const correctName = names[item.type];
  return {
    statement: buildAngleStmt(item.deg, isTrue ? correctName : wrongName, lang),
    isTrue,
    correctStatement: buildAngleStmt(item.deg, correctName, lang),
  };
}

// ─── G1 generators ────────────────────────────────────────────────────────────
function g1AddTF(max: number): TFQuestion {
  const a = rand(1, max - 1), b = rand(1, max - a);
  const correct = a + b;
  const isTrue = Math.random() > 0.45;
  const wrong = Math.max(1, correct + pick([-2, -1, 1, 2]));
  return {
    statement: `${a} + ${b} = ${isTrue ? correct : wrong}`,
    isTrue,
    correctStatement: `${a} + ${b} = ${correct}`,
  };
}

function g1SubTF(max: number): TFQuestion {
  const a = rand(2, max), b = rand(1, a);
  const correct = a - b;
  const isTrue = Math.random() > 0.45;
  const wrong = Math.max(0, correct + pick([-2, -1, 1, 2]));
  return {
    statement: `${a} − ${b} = ${isTrue ? correct : wrong}`,
    isTrue,
    correctStatement: `${a} − ${b} = ${correct}`,
  };
}

function g1CompareTF(): TFQuestion {
  const a = rand(1, 20), b = rand(1, 20);
  if (a === b) return g1CompareTF();
  const showOp = Math.random() > 0.5 ? ">" : "<";
  const isTrue = showOp === ">" ? a > b : a < b;
  const actualOp = a > b ? ">" : "<";
  return {
    statement: `${a} ${showOp} ${b}`,
    isTrue,
    correctStatement: `${a} ${actualOp} ${b}`,
  };
}

function g1VerdoppelnTF(): TFQuestion {
  const n = rand(1, 9);
  const correct = n * 2;
  const isTrue = Math.random() > 0.45;
  const wrong = Math.max(1, correct + pick([-2, -1, 1, 2]));
  return {
    statement: `${n} + ${n} = ${isTrue ? correct : wrong}`,
    isTrue,
    correctStatement: `${n} + ${n} = ${correct}`,
  };
}

function generateQuestions(topicKeys: string[], lang: string): TFQuestion[] {
  // G1 detection
  const isG1 = topicKeys.some(k =>
    ["add10", "add20", "sub10", "sub20", "g1_tausch", "g1_zahlzerlegung",
     "g1_ergaenzen", "g1_verdoppeln", "g1_halbieren", "g1_count", "g1_compare",
     "g1_pos", "word", "g1_data", "g1_sequence"].includes(k)
  );

  if (isG1) {
    const max = topicKeys.some(k => k.includes("20") || k === "g1_sequence" || k === "g1_data") ? 20 : 10;
    const hasVerd    = topicKeys.some(k => ["g1_verdoppeln", "g1_halbieren"].includes(k));
    const hasCompare = topicKeys.some(k => ["g1_compare", "g1_count", "g1_pos"].includes(k));
    const hasSub     = topicKeys.some(k => ["sub10", "sub20", "g1_ergaenzen"].includes(k));

    const gens: (() => TFQuestion)[] = [() => g1AddTF(max)];
    if (hasSub)     gens.push(() => g1SubTF(max));
    if (hasVerd)    gens.push(() => g1VerdoppelnTF());
    if (hasCompare) gens.push(() => g1CompareTF());
    // Always mix in compare for variety
    if (!hasCompare) gens.push(() => g1CompareTF());

    return Array.from({ length: 12 }, () => gens[rand(0, gens.length - 1)]());
  }

  const hasUnits  = topicKeys.some(k => k.includes("unit"));
  const hasAngles = topicKeys.some(k => k === "angles" || k === "symmetry_en");
  const hasMul    = topicKeys.includes("mul");
  const hasDiv    = topicKeys.includes("div");

  const gen = (): TFQuestion => {
    if (hasUnits && hasAngles) return Math.random() > 0.5 ? unitsTF() : angleTF(lang);
    if (hasUnits)  return unitsTF();
    if (hasAngles) return angleTF(lang);
    if (hasMul && hasDiv) return Math.random() > 0.5 ? mulTF() : divTF();
    if (hasMul) return mulTF();
    if (hasDiv) return divTF();
    return Math.random() > 0.5 ? mulTF() : divTF();
  };

  return Array.from({ length: 12 }, gen);
}

// ─── Translations ─────────────────────────────────────────────────────────────
const L: Record<string, Record<string, string>> = {
  en: { trueBtn: "TRUE ✓", falseBtn: "FALSE ✗", correct: "Correct! ✓", wrong: "Not quite!", missed: "Time's up!",
        hint: "Correct answer:", next: "Done!", score: "Score" },
  hu: { trueBtn: "IGAZ ✓",  falseBtn: "HAMIS ✗", correct: "Helyes! ✓", wrong: "Nem egészen!", missed: "Idő lejárt!",
        hint: "A helyes válasz:", next: "Kész!", score: "Pontszám" },
  de: { trueBtn: "WAHR ✓",  falseBtn: "FALSCH ✗", correct: "Richtig! ✓", wrong: "Nicht ganz!", missed: "Zeit um!",
        hint: "Richtige Antwort:", next: "Fertig!", score: "Punkte" },
  ro: { trueBtn: "ADEVĂRAT ✓", falseBtn: "FALS ✗", correct: "Corect! ✓", wrong: "Nu chiar!", missed: "Timp expirat!",
        hint: "Răspuns corect:", next: "Gata!", score: "Puncte" },
};

type FBState = "correct" | "wrong" | "missed" | null;

// ─── Main Component ───────────────────────────────────────────────────────────
const TrueFalseBlitz = memo(function TrueFalseBlitz({
  topicKeys, color, onDone, lang = "en", timerSeconds = 9,
}: {
  topicKeys: string[]; color: string;
  onDone: (score: number, total: number) => void; lang?: string;
  timerSeconds?: number; // 0 = no timer, no auto-advance (G1 mode)
}) {
  const t = L[lang] ?? L.en;
  const [qs] = useState(() => generateQuestions(topicKeys, lang));
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [fb, setFb] = useState<FBState>(null);
  const [done, setDone] = useState(false);
  const answeredRef = useRef(false);
  const total = qs.length;

  // Speak statement when new question appears
  useEffect(() => {
    if (!done && qs[idx]) speak(qs[idx].statement, lang);
  }, [idx, done]); // eslint-disable-line react-hooks/exhaustive-deps

  const advance = useCallback(() => {
    answeredRef.current = false; // Reset for next question (needed when timerSeconds=0)
    setFb(null);
    setIdx(prev => {
      const next = prev + 1;
      if (next >= total) { setDone(true); return prev; }
      return next;
    });
  }, [total]);

  const respond = useCallback((result: FBState) => {
    setFb(result);
    if (result === "correct") setScore(s => s + 1);
    setTimeout(advance, 750);
  }, [advance]);

  // Auto-advance timer (disabled when timerSeconds=0)
  useEffect(() => {
    if (done || timerSeconds === 0) return;
    answeredRef.current = false;
    const t = setTimeout(() => {
      if (!answeredRef.current) { answeredRef.current = true; respond("missed"); }
    }, timerSeconds * 1000);
    return () => clearTimeout(t);
  }, [idx, done, respond, timerSeconds]);

  const handleTap = (userTrue: boolean) => {
    if (answeredRef.current || done || fb !== null) return;
    answeredRef.current = true;
    respond(userTrue === qs[idx].isTrue ? "correct" : "wrong");
  };

  const q = qs[Math.min(idx, total - 1)];

  // ── Done screen ──
  if (done) {
    const stars = score >= 10 ? 3 : score >= 8 ? 2 : 1;
    const msgs: Record<string, string[]> = {
      en: ["Keep going! 💪", "Very good! ⭐⭐", "Perfect! ⭐⭐⭐"],
      hu: ["Tovább! 💪", "Nagyon jó! ⭐⭐", "Tökéletes! ⭐⭐⭐"],
      de: ["Weiter so! 💪", "Sehr gut! ⭐⭐", "Fantastisch! ⭐⭐⭐"],
      ro: ["Continuă! 💪", "Foarte bine! ⭐⭐", "Perfect! ⭐⭐⭐"],
    };
    const msg = (msgs[lang] ?? msgs.en)[stars - 1];
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 py-8 px-4">
        <div className="text-6xl font-black" style={{ color }}>
          {score}<span className="text-2xl text-white/40">/{total}</span>
        </div>
        <p className="text-xl font-black text-white/90 text-center">{msg}</p>
        <motion.button onClick={() => onDone(score, total)}
          className="w-full max-w-xs py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2"
          style={{ background: `linear-gradient(135deg, ${color}55, ${color}AA)`, border: `2px solid ${color}` }}
          whileTap={{ scale: 0.97 }}>
          {t.next} <ChevronRight size={18} />
        </motion.button>
      </motion.div>
    );
  }

  const fbBg = fb === "correct" ? "rgba(0,255,136,0.18)"
             : fb === "wrong"   ? "rgba(255,80,80,0.18)"
             : fb === "missed"  ? "rgba(120,120,120,0.18)"
             : "transparent";

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress + score */}
      <div className="flex items-center gap-3">
        <div className="flex-1 flex gap-1">
          {qs.map((_, i) => (
            <div key={i} className="flex-1 h-1.5 rounded-full"
              style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
          ))}
        </div>
        <span className="text-xs font-black" style={{ color }}>
          {score}<span className="text-white/30">/{total}</span>
        </span>
      </div>

      {/* Statement card */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="rounded-2xl px-5 py-6 flex flex-col items-center justify-center gap-3 min-h-[130px] transition-colors"
          style={{ background: fb ? fbBg : "rgba(255,255,255,0.06)", border: `2px solid ${fb ? "transparent" : "rgba(255,255,255,0.1)"}` }}>

          {fb === null ? (
            <div className="flex items-center gap-2 justify-center">
              <p className="text-xl font-black text-white/95 text-center leading-snug flex-1">{q.statement}</p>
              <SpeakButton text={q.statement} lang={lang} size={16} />
            </div>
          ) : (
            <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-2">
              <span className="text-5xl">
                {fb === "correct" ? "✓" : fb === "wrong" ? "✗" : "⏱"}
              </span>
              <span className="text-base font-black"
                style={{ color: fb === "correct" ? "#00FF88" : fb === "wrong" ? "#FF6B6B" : "#888" }}>
                {fb === "correct" ? t.correct : t.wrong}
              </span>
              {fb !== "correct" && (
                <p className="text-sm font-bold text-white/60 text-center mt-1">
                  <span className="text-white/40">{t.hint} </span>{q.correctStatement}
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Timer bar (only when waiting) */}
      {timerSeconds > 0 && (
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          {fb === null && (
            <motion.div key={`timer-${idx}`}
              className="h-full rounded-full origin-left"
              style={{ background: color }}
              initial={{ scaleX: 1 }} animate={{ scaleX: 0 }}
              transition={{ duration: timerSeconds, ease: "linear" }} />
          )}
        </div>
      )}

      {/* True / False buttons */}
      <div className="grid grid-cols-2 gap-3">
        <motion.button
          onClick={() => handleTap(true)}
          disabled={fb !== null}
          className="py-6 rounded-2xl font-black text-xl flex flex-col items-center gap-1"
          style={{ background: "rgba(0,255,136,0.12)", border: "2px solid rgba(0,255,136,0.4)", color: "#00FF88" }}
          whileTap={{ scale: 0.94 }}>
          <span className="text-3xl">✓</span>
          <span className="text-sm">{t.trueBtn}</span>
        </motion.button>

        <motion.button
          onClick={() => handleTap(false)}
          disabled={fb !== null}
          className="py-6 rounded-2xl font-black text-xl flex flex-col items-center gap-1"
          style={{ background: "rgba(255,80,80,0.12)", border: "2px solid rgba(255,80,80,0.4)", color: "#FF6B6B" }}
          whileTap={{ scale: 0.94 }}>
          <span className="text-3xl">✗</span>
          <span className="text-sm">{t.falseBtn}</span>
        </motion.button>
      </div>
    </div>
  );
});

export default TrueFalseBlitz;
