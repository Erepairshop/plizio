"use client";
// TrueFalseBlitz - rapid-fire true/false challenge for Grade 4
// 12 statements, big true/false buttons
// Supports: mul, div, units, angles topics

import { memo, useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const rand = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
const pick = <T,>(arr: T[]): T => arr[rand(0, arr.length - 1)];

interface TFQuestion {
  statement: string;
  isTrue: boolean;
  correctStatement: string;
}

function mulTF(): TFQuestion {
  const a = rand(2, 9);
  const b = rand(2, 9);
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
  const b = rand(2, 9);
  const c = rand(2, 9);
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
  { from: "km", to: "m", mult: 1000, wrongMult: 100 },
  { from: "m", to: "cm", mult: 100, wrongMult: 10 },
  { from: "kg", to: "g", mult: 1000, wrongMult: 100 },
  { from: "h", to: "min", mult: 60, wrongMult: 6 },
  { from: "l", to: "ml", mult: 1000, wrongMult: 100 },
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
  { deg: 30, type: "acute" },
  { deg: 45, type: "acute" },
  { deg: 60, type: "acute" },
  { deg: 90, type: "right" },
  { deg: 120, type: "obtuse" },
  { deg: 135, type: "obtuse" },
  { deg: 150, type: "obtuse" },
  { deg: 180, type: "straight" },
];

const ANGLE_NAMES: Record<string, Record<AngleType, string>> = {
  de: { acute: "spitzer Winkel", right: "rechter Winkel", obtuse: "stumpfer Winkel", straight: "gestreckter Winkel" },
  en: { acute: "acute angle", right: "right angle", obtuse: "obtuse angle", straight: "straight angle" },
  hu: { acute: "hegyes szög", right: "derékszög", obtuse: "tompaszög", straight: "nyújtott szög" },
  ro: { acute: "unghi ascuțit", right: "unghi drept", obtuse: "unghi obtuz", straight: "unghi plat" },
};

function buildAngleStmt(deg: number, name: string, lang: string): string {
  if (lang === "de") return `Ein ${deg}°-Winkel ist ein ${name}.`;
  if (lang === "en") {
    const article = name.startsWith("a") || name.startsWith("o") ? "an" : "a";
    return `A ${deg}° angle is ${article} ${name}.`;
  }
  if (lang === "hu") return `A ${deg}°-os szög ${name}.`;
  return `Un unghi de ${deg}° este un ${name}.`;
}

function angleTF(lang: string): TFQuestion {
  const item = pick(ANGLE_POOL);
  const names = ANGLE_NAMES[lang] ?? ANGLE_NAMES.en;
  const isTrue = Math.random() > 0.5;
  const wrongTypes = (Object.keys(names) as AngleType[]).filter(type => type !== item.type);
  const wrongName = names[pick(wrongTypes)];
  const correctName = names[item.type];

  return {
    statement: buildAngleStmt(item.deg, isTrue ? correctName : wrongName, lang),
    isTrue,
    correctStatement: buildAngleStmt(item.deg, correctName, lang),
  };
}

function g1AddTF(max: number): TFQuestion {
  const a = rand(1, max - 1);
  const b = rand(1, max - a);
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
  const a = rand(2, max);
  const b = rand(1, a);
  const correct = a - b;
  const isTrue = Math.random() > 0.45;
  const wrong = Math.max(0, correct + pick([-2, -1, 1, 2]));

  return {
    statement: `${a} − ${b} = ${isTrue ? correct : wrong}`,
    isTrue,
    correctStatement: `${a} − ${b} = ${correct}`,
  };
}

function g1CompareTF(max: number): TFQuestion {
  const a = rand(1, max);
  const b = rand(1, max);
  if (a === b) return g1CompareTF(max);

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
  const allG1Keys = [
    "add10", "add20", "sub10", "sub20",
    "g1_tausch", "g1_zahlzerlegung", "g1_ergaenzen", "g1_verdoppeln", "g1_halbieren",
    "g1_count", "g1_compare", "g1_pos", "g1_visual", "g1_fraction",
    "g1_num1120", "g1_place_value20", "g1_sequence", "g1_data",
    "g1_shapes", "g1_spatial", "g1_pattern",
    "g1_clock", "g1_coins", "g1_weight", "g1_volume", "g1_laenger", "g1_wochentage",
    "word",
  ];
  const isG1 = topicKeys.some(key => allG1Keys.includes(key));

  if (isG1) {
    const max = topicKeys.some(key =>
      key.includes("20") || key === "g1_sequence" || key === "g1_data" ||
      key === "g1_num1120" || key === "g1_place_value20"
    ) ? 20 : 10;
    const hasVerd = topicKeys.some(key => ["g1_verdoppeln", "g1_halbieren"].includes(key));
    const hasSub = topicKeys.some(key => ["sub10", "sub20", "g1_ergaenzen"].includes(key));

    const generators: Array<() => TFQuestion> = [() => g1AddTF(max)];
    if (hasSub) generators.push(() => g1SubTF(max));
    if (hasVerd) generators.push(() => g1VerdoppelnTF());
    generators.push(() => g1CompareTF(max));
    if (!hasSub && !hasVerd) generators.push(() => g1SubTF(max));

    return Array.from({ length: 12 }, () => generators[rand(0, generators.length - 1)]());
  }

  const hasUnits = topicKeys.some(key => key.includes("unit"));
  const hasAngles = topicKeys.some(key => key === "angles" || key === "symmetry_en");
  const hasMul = topicKeys.includes("mul");
  const hasDiv = topicKeys.includes("div");

  const generator = (): TFQuestion => {
    if (hasUnits && hasAngles) return Math.random() > 0.5 ? unitsTF() : angleTF(lang);
    if (hasUnits) return unitsTF();
    if (hasAngles) return angleTF(lang);
    if (hasMul && hasDiv) return Math.random() > 0.5 ? mulTF() : divTF();
    if (hasMul) return mulTF();
    if (hasDiv) return divTF();
    return Math.random() > 0.5 ? mulTF() : divTF();
  };

  return Array.from({ length: 12 }, generator);
}

const L: Record<string, Record<string, string>> = {
  en: { trueBtn: "TRUE ✓", falseBtn: "FALSE ✗", correct: "Correct! ✓", wrong: "Not quite!", hint: "Correct answer:", next: "Done!", score: "Score" },
  hu: { trueBtn: "IGAZ ✓", falseBtn: "HAMIS ✗", correct: "Helyes! ✓", wrong: "Nem egészen!", hint: "A helyes válasz:", next: "Kész!", score: "Pontszám" },
  de: { trueBtn: "WAHR ✓", falseBtn: "FALSCH ✗", correct: "Richtig! ✓", wrong: "Nicht ganz!", hint: "Richtige Antwort:", next: "Fertig!", score: "Punkte" },
  ro: { trueBtn: "ADEVĂRAT ✓", falseBtn: "FALS ✗", correct: "Corect! ✓", wrong: "Nu chiar!", hint: "Răspuns corect:", next: "Gata!", score: "Puncte" },
};

type FBState = "correct" | "wrong" | null;

const TrueFalseBlitz = memo(function TrueFalseBlitz({
  topicKeys,
  color,
  onDone,
  lang = "en",
}: {
  topicKeys: string[];
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const t = L[lang] ?? L.en;
  const [qs] = useState(() => generateQuestions(topicKeys, lang));
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [fb, setFb] = useState<FBState>(null);
  const [done, setDone] = useState(false);
  const answeredRef = useRef(false);
  const total = qs.length;

  const advance = useCallback(() => {
    answeredRef.current = false;
    setFb(null);
    setIdx(prev => {
      const next = prev + 1;
      if (next >= total) {
        setDone(true);
        return prev;
      }
      return next;
    });
  }, [total]);

  const respond = useCallback((result: FBState) => {
    setFb(result);
    if (result === "correct") setScore(current => current + 1);
    setTimeout(advance, 750);
  }, [advance]);

  const handleTap = (userTrue: boolean) => {
    if (answeredRef.current || done || fb !== null) return;
    answeredRef.current = true;
    respond(userTrue === qs[idx].isTrue ? "correct" : "wrong");
  };

  const q = qs[Math.min(idx, total - 1)];

  if (done) {
    const stars = score >= 10 ? 3 : score >= 8 ? 2 : 1;
    const messages: Record<string, string[]> = {
      en: ["Keep going! 💪", "Very good! ⭐⭐", "Perfect! ⭐⭐⭐"],
      hu: ["Tovább! 💪", "Nagyon jó! ⭐⭐", "Tökéletes! ⭐⭐⭐"],
      de: ["Weiter so! 💪", "Sehr gut! ⭐⭐", "Fantastisch! ⭐⭐⭐"],
      ro: ["Continuă! 💪", "Foarte bine! ⭐⭐", "Perfect! ⭐⭐⭐"],
    };
    const message = (messages[lang] ?? messages.en)[stars - 1];

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 px-4 py-8"
      >
        <div className="text-6xl font-black" style={{ color }}>
          {score}<span className="text-2xl text-white/40">/{total}</span>
        </div>
        <p className="text-center text-xl font-black text-white/90">{message}</p>
        <motion.button
          onClick={() => onDone(score, total)}
          className="flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl py-4 text-base font-black text-white"
          style={{ background: `linear-gradient(135deg, ${color}55, ${color}AA)`, border: `2px solid ${color}` }}
          whileTap={{ scale: 0.97 }}
        >
          {t.next} <ChevronRight size={18} />
        </motion.button>
      </motion.div>
    );
  }

  const fbBg = fb === "correct"
    ? "rgba(0,255,136,0.18)"
    : fb === "wrong"
      ? "rgba(255,80,80,0.18)"
      : "transparent";

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="flex flex-1 gap-1">
          {qs.map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 rounded-full"
              style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }}
            />
          ))}
        </div>
        <span className="text-xs font-black" style={{ color }}>
          {score}<span className="text-white/30">/{total}</span>
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex min-h-[130px] flex-col items-center justify-center gap-3 rounded-2xl px-5 py-6 transition-colors"
          style={{
            background: fb ? fbBg : "rgba(255,255,255,0.06)",
            border: `2px solid ${fb ? "transparent" : "rgba(255,255,255,0.1)"}`,
          }}
        >
          {fb === null ? (
            <div className="flex items-center justify-center gap-2">
              <p className="flex-1 text-center text-xl font-black leading-snug text-white/95">{q.statement}</p>
              <SpeakButton text={q.statement} lang={lang} size={16} />
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-5xl">{fb === "correct" ? "✓" : "✗"}</span>
              <span
                className="text-base font-black"
                style={{ color: fb === "correct" ? "#00FF88" : "#FF6B6B" }}
              >
                {fb === "correct" ? t.correct : t.wrong}
              </span>
              {fb !== "correct" && (
                <p className="mt-1 text-center text-sm font-bold text-white/60">
                  <span className="text-white/40">{t.hint} </span>{q.correctStatement}
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-2 gap-3">
        <motion.button
          onClick={() => handleTap(true)}
          disabled={fb !== null}
          className="flex flex-col items-center gap-1 rounded-2xl py-6 text-xl font-black"
          style={{ background: "rgba(0,255,136,0.12)", border: "2px solid rgba(0,255,136,0.4)", color: "#00FF88" }}
          whileTap={{ scale: 0.94 }}
        >
          <span className="text-3xl">✓</span>
          <span className="text-sm">{t.trueBtn}</span>
        </motion.button>

        <motion.button
          onClick={() => handleTap(false)}
          disabled={fb !== null}
          className="flex flex-col items-center gap-1 rounded-2xl py-6 text-xl font-black"
          style={{ background: "rgba(255,80,80,0.12)", border: "2px solid rgba(255,80,80,0.4)", color: "#FF6B6B" }}
          whileTap={{ scale: 0.94 }}
        >
          <span className="text-3xl">✗</span>
          <span className="text-sm">{t.falseBtn}</span>
        </motion.button>
      </div>
    </div>
  );
});

export default TrueFalseBlitz;
