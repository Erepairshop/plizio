"use client";
// G2MeasurementExplorer — Measurement discovery for Grade 2 (i9)
// Teaches: length (m/cm), time (hours/minutes), weight (kg/g), money.
// Step by step, no wrong answers.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Measurement Explorer",
    intro: "Let's discover how we measure things in the real world!",
    tapLearn: "Tap to learn!",
    tapCompare: "Tap to compare!",
    tapAnswer: "Tap to see the answer!",
    didYouKnow: "Did you know?",
    next: "Next",
    done: "Amazing!",
  },
  hu: {
    title: "Mérés felfedezés",
    intro: "Fedezzük fel, hogyan mérünk a valós világban!",
    tapLearn: "Koppints a tanuláshoz!",
    tapCompare: "Koppints az összehasonlításhoz!",
    tapAnswer: "Koppints a válaszhoz!",
    didYouKnow: "Tudtad?",
    next: "Következő",
    done: "Fantasztikus!",
  },
  de: {
    title: "Messen entdecken",
    intro: "Entdecken wir, wie man in der echten Welt misst!",
    tapLearn: "Tippe zum Lernen!",
    tapCompare: "Tippe zum Vergleichen!",
    tapAnswer: "Tippe für die Antwort!",
    didYouKnow: "Wusstest du?",
    next: "Weiter",
    done: "Super!",
  },
  ro: {
    title: "Explorare măsurători",
    intro: "Să descoperim cum măsurăm lucrurile în lumea reală!",
    tapLearn: "Atinge pentru a învăța!",
    tapCompare: "Atinge pentru a compara!",
    tapAnswer: "Atinge pentru răspuns!",
    didYouKnow: "Știai?",
    next: "Înainte",
    done: "Excelent!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
interface MeasureRound {
  icon: string;
  topic: Record<string, string>;
  fact: Record<string, string>;
  visual: (color: string) => React.ReactNode;
  question: Record<string, string>;
  answer: Record<string, string>;
}

const ROUNDS: MeasureRound[] = [
  // Length
  {
    icon: "📏",
    topic: { en: "Length", hu: "Hosszúság", de: "Länge", ro: "Lungime" },
    fact: {
      en: "1 meter = 100 centimeters",
      hu: "1 méter = 100 centiméter",
      de: "1 Meter = 100 Zentimeter",
      ro: "1 metru = 100 centimetri",
    },
    visual: (color: string) => (
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="flex items-end gap-4 justify-center">
          <div className="flex flex-col items-center">
            <div className="h-3 rounded-full" style={{ width: 120, background: color }} />
            <span className="text-xs font-black text-white/60 mt-1">1 m</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-3 rounded-full" style={{ width: 60, background: `${color}66` }} />
            <span className="text-xs font-black text-white/60 mt-1">50 cm</span>
          </div>
        </div>
      </div>
    ),
    question: {
      en: "Which is longer: 1 meter or 50 cm?",
      hu: "Melyik hosszabb: 1 méter vagy 50 cm?",
      de: "Was ist länger: 1 Meter oder 50 cm?",
      ro: "Care e mai lung: 1 metru sau 50 cm?",
    },
    answer: {
      en: "1 meter is longer! 1 m = 100 cm, and 100 > 50",
      hu: "1 méter a hosszabb! 1 m = 100 cm, és 100 > 50",
      de: "1 Meter ist länger! 1 m = 100 cm, und 100 > 50",
      ro: "1 metru e mai lung! 1 m = 100 cm, și 100 > 50",
    },
  },
  // Time
  {
    icon: "⏰",
    topic: { en: "Time", hu: "Idő", de: "Zeit", ro: "Timp" },
    fact: {
      en: "1 hour = 60 minutes",
      hu: "1 óra = 60 perc",
      de: "1 Stunde = 60 Minuten",
      ro: "1 oră = 60 minute",
    },
    visual: () => (
      <div className="flex items-center gap-6 justify-center">
        <div className="flex flex-col items-center">
          <span className="text-4xl">🕐</span>
          <span className="text-xs font-black text-white/60 mt-1">1:00</span>
        </div>
        <span className="text-2xl text-white/30">→</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl">🕑</span>
          <span className="text-xs font-black text-white/60 mt-1">2:00</span>
        </div>
      </div>
    ),
    question: {
      en: "From 1:00 to 2:00 — how many minutes pass?",
      hu: "1:00-tól 2:00-ig hány perc telik el?",
      de: "Von 1:00 bis 2:00 — wie viele Minuten vergehen?",
      ro: "De la 1:00 la 2:00 — câte minute trec?",
    },
    answer: {
      en: "60 minutes! Because 1 hour = 60 minutes.",
      hu: "60 perc! Mert 1 óra = 60 perc.",
      de: "60 Minuten! Weil 1 Stunde = 60 Minuten.",
      ro: "60 minute! Pentru că 1 oră = 60 minute.",
    },
  },
  // Weight
  {
    icon: "⚖️",
    topic: { en: "Weight", hu: "Súly", de: "Gewicht", ro: "Greutate" },
    fact: {
      en: "1 kilogram = 1000 grams",
      hu: "1 kilogramm = 1000 gramm",
      de: "1 Kilogramm = 1000 Gramm",
      ro: "1 kilogram = 1000 grame",
    },
    visual: (color: string) => (
      <div className="flex items-center gap-8 justify-center">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black"
            style={{ background: `${color}33`, border: `2px solid ${color}`, color }}>
            1 kg
          </div>
        </div>
        <span className="text-2xl text-white/30">?</span>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black"
            style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}>
            500 g
          </div>
        </div>
      </div>
    ),
    question: {
      en: "Which is heavier: 1 kg or 500 g?",
      hu: "Melyik nehezebb: 1 kg vagy 500 g?",
      de: "Was ist schwerer: 1 kg oder 500 g?",
      ro: "Care e mai greu: 1 kg sau 500 g?",
    },
    answer: {
      en: "1 kg is heavier! 1 kg = 1000 g, and 1000 > 500",
      hu: "1 kg a nehezebb! 1 kg = 1000 g, és 1000 > 500",
      de: "1 kg ist schwerer! 1 kg = 1000 g, und 1000 > 500",
      ro: "1 kg e mai greu! 1 kg = 1000 g, și 1000 > 500",
    },
  },
  // Money
  {
    icon: "💰",
    topic: { en: "Money", hu: "Pénz", de: "Geld", ro: "Bani" },
    fact: {
      en: "1 euro = 100 cents",
      hu: "1 euró = 100 cent",
      de: "1 Euro = 100 Cent",
      ro: "1 euro = 100 cenți",
    },
    visual: (color: string) => (
      <div className="flex gap-2 justify-center">
        {[50, 20, 10, 10, 5, 5].map((val, i) => (
          <div key={i} className="rounded-full flex items-center justify-center font-black"
            style={{
              width: val >= 20 ? 36 : 30, height: val >= 20 ? 36 : 30,
              background: val >= 10 ? `${color}33` : "rgba(205,127,50,0.3)",
              border: `2px solid ${val >= 10 ? color : "#CD7F32"}`,
              fontSize: 10, color: val >= 10 ? color : "#CD7F32",
            }}>
            {val}¢
          </div>
        ))}
      </div>
    ),
    question: {
      en: "50 + 20 + 10 + 10 + 5 + 5 = ? cents",
      hu: "50 + 20 + 10 + 10 + 5 + 5 = ? cent",
      de: "50 + 20 + 10 + 10 + 5 + 5 = ? Cent",
      ro: "50 + 20 + 10 + 10 + 5 + 5 = ? cenți",
    },
    answer: {
      en: "100 cents = 1 euro!",
      hu: "100 cent = 1 euró!",
      de: "100 Cent = 1 Euro!",
      ro: "100 cenți = 1 euro!",
    },
  },
  // Word problem
  {
    icon: "🛒",
    topic: { en: "Shopping", hu: "Vásárlás", de: "Einkaufen", ro: "Cumpărături" },
    fact: {
      en: "When we buy things, we calculate the change!",
      hu: "Vásárláskor kiszámoljuk a visszajárót!",
      de: "Beim Einkaufen berechnen wir das Wechselgeld!",
      ro: "Când cumpărăm, calculăm restul!",
    },
    visual: () => (
      <div className="flex items-center gap-4 justify-center">
        <div className="flex flex-col items-center">
          <span className="text-3xl">💰</span>
          <span className="text-xs font-black text-white/60">50¢</span>
        </div>
        <span className="text-2xl text-white/30">→</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl">✏️</span>
          <span className="text-xs font-black text-white/60">20¢</span>
        </div>
        <span className="text-2xl text-white/30">= ?</span>
      </div>
    ),
    question: {
      en: "You have 50¢. You buy a pencil for 20¢. How much is left?",
      hu: "Van 50 cented. Veszel egy ceruzát 20 centért. Mennyi maradt?",
      de: "Du hast 50 Cent. Du kaufst einen Stift für 20 Cent. Wie viel bleibt?",
      ro: "Ai 50 de cenți. Cumperi un creion cu 20 cenți. Cât rămâne?",
    },
    answer: {
      en: "50 – 20 = 30 cents left!",
      hu: "50 – 20 = 30 cent maradt!",
      de: "50 – 20 = 30 Cent übrig!",
      ro: "50 – 20 = 30 cenți rămași!",
    },
  },
  // Weight comparison
  {
    icon: "🍉",
    topic: { en: "Compare", hu: "Összehasonlítás", de: "Vergleichen", ro: "Comparație" },
    fact: {
      en: "We can compare weights: lighter or heavier?",
      hu: "Összehasonlíthatjuk a súlyokat: könnyebb vagy nehezebb?",
      de: "Wir können Gewichte vergleichen: leichter oder schwerer?",
      ro: "Putem compara greutățile: mai ușor sau mai greu?",
    },
    visual: () => (
      <div className="flex items-center gap-6 justify-center">
        <div className="flex flex-col items-center">
          <span className="text-4xl">🍉</span>
          <span className="text-xs font-black text-white/60">3 kg</span>
        </div>
        <span className="text-2xl text-white/30">?</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl">🍎</span>
          <span className="text-xs font-black text-white/60">200 g</span>
        </div>
      </div>
    ),
    question: {
      en: "Which is heavier: a watermelon (3 kg) or an apple (200 g)?",
      hu: "Melyik nehezebb: egy dinnye (3 kg) vagy egy alma (200 g)?",
      de: "Was ist schwerer: eine Wassermelone (3 kg) oder ein Apfel (200 g)?",
      ro: "Ce e mai greu: un pepene (3 kg) sau un măr (200 g)?",
    },
    answer: {
      en: "The watermelon! 3 kg = 3000 g, and 3000 > 200",
      hu: "A dinnye! 3 kg = 3000 g, és 3000 > 200",
      de: "Die Wassermelone! 3 kg = 3000 g, und 3000 > 200",
      ro: "Pepene! 3 kg = 3000 g, și 3000 > 200",
    },
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Main Component ──────────────────────────────────────────────────────────
const G2MeasurementExplorer = memo(function G2MeasurementExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(ROUNDS));
  const [idx, setIdx] = useState(0);
  // Steps: 0=show topic+fact, 1=visual+question, 2=answer
  const [step, setStep] = useState(0);

  const round = rounds[idx];

  const handleNext = useCallback(() => {
    if (idx + 1 >= rounds.length) {
      onDone(rounds.length, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setStep(0);
  }, [idx, rounds.length, onDone]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {idx === 0 && step === 0 && (
        <p className="text-white/50 text-xs font-medium text-center px-4">{lbl.intro}</p>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={`${idx}-${step}`}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Step 0: topic + fact */}
          {step === 0 && (
            <>
              <span className="text-4xl">{round.icon}</span>
              <p className="text-lg font-black" style={{ color }}>
                {round.topic[lang] ?? round.topic.en}
              </p>
              <div className="w-full rounded-2xl px-5 py-3"
                style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                <p className="text-center text-xs font-bold text-white/50 mb-1">{lbl.didYouKnow}</p>
                <p className="text-center text-sm font-black" style={{ color }}>
                  {round.fact[lang] ?? round.fact.en}
                </p>
              </div>
              <motion.button onClick={() => setStep(1)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapLearn}
              </motion.button>
            </>
          )}

          {/* Step 1: visual + question */}
          {step === 1 && (
            <>
              {round.visual(color)}
              <p className="text-white/60 text-xs font-bold text-center px-4">
                {round.question[lang] ?? round.question.en}
              </p>
              <motion.button onClick={() => setStep(2)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapAnswer}
              </motion.button>
            </>
          )}

          {/* Step 2: answer */}
          {step === 2 && (
            <>
              <motion.div
                className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                animate={{ scale: [0.95, 1.02, 1] }} transition={{ duration: 0.4 }}>
                <p className="text-center text-lg font-black" style={{ color: "#00FF88" }}>
                  {round.answer[lang] ?? round.answer.en}
                </p>
              </motion.div>
              <motion.button onClick={handleNext}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                whileTap={{ scale: 0.97 }}>
                {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default G2MeasurementExplorer;
