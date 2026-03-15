"use client";
// WordProblemIntro — Guided word problem reading for Grade 1 (i6)
// Teaches HOW to read and solve a word problem step by step.
// No wrong answers — pure guided discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Story Problem Explorer",
    intro: "Let's learn to read math stories step by step!",
    step1: "Read the story:",
    step2: "What do we know?",
    step3: "What do we need to find?",
    tapCalc: "Tap to calculate!",
    answer: "Answer:",
    next: "Next",
    done: "Well done!",
  },
  hu: {
    title: "Szöveges feladat felfedezés",
    intro: "Tanuljuk meg lépésről lépésre a szöveges feladatokat!",
    step1: "Olvasd el a történetet:",
    step2: "Mit tudunk?",
    step3: "Mit kell kiszámolni?",
    tapCalc: "Koppints a számításhoz!",
    answer: "Válasz:",
    next: "Következő",
    done: "Ügyes!",
  },
  de: {
    title: "Sachaufgaben entdecken",
    intro: "Lernen wir Schritt für Schritt, Sachaufgaben zu lösen!",
    step1: "Lies die Geschichte:",
    step2: "Was wissen wir?",
    step3: "Was müssen wir herausfinden?",
    tapCalc: "Tippe zum Rechnen!",
    answer: "Antwort:",
    next: "Weiter",
    done: "Toll!",
  },
  ro: {
    title: "Explorare probleme",
    intro: "Să învățăm pas cu pas cum rezolvăm problemele!",
    step1: "Citește povestea:",
    step2: "Ce știm?",
    step3: "Ce trebuie să aflăm?",
    tapCalc: "Atinge pentru a calcula!",
    answer: "Răspuns:",
    next: "Înainte",
    done: "Bravo!",
  },
};

// ─── Story data ──────────────────────────────────────────────────────────────
interface Story {
  story: Record<string, string>;
  known: Record<string, string>;
  question: Record<string, string>;
  equation: string;
  answer: number;
  emoji: string;
}

const STORIES: Story[] = [
  {
    story: {
      en: "Anna has 5 apples. She gets 3 more from her friend.",
      hu: "Annának 5 almája van. A barátjától kap még 3-at.",
      de: "Anna hat 5 Äpfel. Sie bekommt 3 mehr von ihrer Freundin.",
      ro: "Anna are 5 mere. Primește încă 3 de la prietena ei.",
    },
    known: {
      en: "Anna has 5. She gets 3 more.",
      hu: "Annának van 5. Kap még 3-at.",
      de: "Anna hat 5. Sie bekommt 3 dazu.",
      ro: "Anna are 5. Primește încă 3.",
    },
    question: {
      en: "How many apples does Anna have now?",
      hu: "Hány almája van most Annának?",
      de: "Wie viele Äpfel hat Anna jetzt?",
      ro: "Câte mere are Anna acum?",
    },
    equation: "5 + 3",
    answer: 8,
    emoji: "🍎",
  },
  {
    story: {
      en: "There are 9 birds on a fence. 4 fly away.",
      hu: "9 madár ül a kerítésen. 4 elrepül.",
      de: "9 Vögel sitzen auf einem Zaun. 4 fliegen weg.",
      ro: "Pe gard sunt 9 păsări. 4 zboară.",
    },
    known: {
      en: "Start: 9 birds. 4 fly away.",
      hu: "Volt 9 madár. 4 elrepül.",
      de: "Start: 9 Vögel. 4 fliegen weg.",
      ro: "Sunt 9 păsări. 4 zboară.",
    },
    question: {
      en: "How many birds are left?",
      hu: "Hány madár maradt?",
      de: "Wie viele Vögel bleiben?",
      ro: "Câte păsări au rămas?",
    },
    equation: "9 − 4",
    answer: 5,
    emoji: "🐦",
  },
  {
    story: {
      en: "Tom has 6 stickers. His mom gives him 4 more.",
      hu: "Tamásnak 6 matricája van. Anyukája ad neki még 4-et.",
      de: "Tom hat 6 Sticker. Seine Mama gibt ihm 4 mehr.",
      ro: "Tom are 6 abțibilduri. Mama lui îi dă încă 4.",
    },
    known: {
      en: "Tom has 6. Gets 4 more.",
      hu: "Tamásnak van 6. Kap még 4-et.",
      de: "Tom hat 6. Bekommt 4 dazu.",
      ro: "Tom are 6. Primește 4.",
    },
    question: {
      en: "How many stickers does Tom have?",
      hu: "Hány matricája van Tamásnak?",
      de: "Wie viele Sticker hat Tom?",
      ro: "Câte abțibilduri are Tom?",
    },
    equation: "6 + 4",
    answer: 10,
    emoji: "⭐",
  },
  {
    story: {
      en: "Sara has 8 candies. She eats 3.",
      hu: "Sárának 8 cukorkája van. Megeszik 3-at.",
      de: "Sara hat 8 Bonbons. Sie isst 3 davon.",
      ro: "Sara are 8 bomboane. Mănâncă 3.",
    },
    known: {
      en: "Sara has 8. Eats 3.",
      hu: "Sárának van 8. Megeszik 3-at.",
      de: "Sara hat 8. Isst 3.",
      ro: "Sara are 8. Mănâncă 3.",
    },
    question: {
      en: "How many candies are left?",
      hu: "Hány cukorka maradt?",
      de: "Wie viele Bonbons bleiben?",
      ro: "Câte bomboane au rămas?",
    },
    equation: "8 − 3",
    answer: 5,
    emoji: "🍬",
  },
  {
    story: {
      en: "There are 7 flowers in a garden. 5 more bloom.",
      hu: "7 virág van a kertben. Még 5 kinyílik.",
      de: "Im Garten sind 7 Blumen. 5 weitere blühen.",
      ro: "În grădină sunt 7 flori. Mai înfloresc 5.",
    },
    known: {
      en: "Start: 7 flowers. 5 more bloom.",
      hu: "Volt 7 virág. Még 5 kinyílik.",
      de: "Start: 7 Blumen. 5 blühen dazu.",
      ro: "Sunt 7 flori. Mai înfloresc 5.",
    },
    question: {
      en: "How many flowers are there now?",
      hu: "Hány virág van most?",
      de: "Wie viele Blumen gibt es jetzt?",
      ro: "Câte flori sunt acum?",
    },
    equation: "7 + 5",
    answer: 12,
    emoji: "🌸",
  },
  {
    story: {
      en: "A bus has 10 children. 6 get off at school.",
      hu: "A buszon 10 gyerek utazik. 6 leszáll az iskolánál.",
      de: "Im Bus sind 10 Kinder. 6 steigen an der Schule aus.",
      ro: "În autobuz sunt 10 copii. 6 coboară la școală.",
    },
    known: {
      en: "Start: 10 children. 6 get off.",
      hu: "Volt 10 gyerek. 6 leszáll.",
      de: "Start: 10 Kinder. 6 steigen aus.",
      ro: "Sunt 10 copii. 6 coboară.",
    },
    question: {
      en: "How many are still on the bus?",
      hu: "Hány gyerek maradt a buszon?",
      de: "Wie viele sind noch im Bus?",
      ro: "Câți copii au rămas în autobuz?",
    },
    equation: "10 − 6",
    answer: 4,
    emoji: "🚌",
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
const WordProblemIntro = memo(function WordProblemIntro({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [stories] = useState(() => shuffle(STORIES).slice(0, 6));
  const [idx, setIdx] = useState(0);
  // Steps: 0=story, 1=known+question, 2=answer
  const [step, setStep] = useState(0);

  const story = stories[idx];

  const handleNext = useCallback(() => {
    if (idx + 1 >= stories.length) {
      onDone(stories.length, stories.length);
      return;
    }
    setIdx(i => i + 1);
    setStep(0);
  }, [idx, stories.length, onDone]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {stories.map((_, i) => (
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
          {/* Step 0: Read the story */}
          {step === 0 && (
            <>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.step1}</p>
              <div className="w-full rounded-2xl p-4"
                style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
                <div className="text-center text-3xl mb-3">{story.emoji}</div>
                <p className="text-white/80 text-sm font-medium text-center leading-relaxed">
                  {story.story[lang] ?? story.story.en}
                </p>
              </div>
              <motion.button onClick={() => setStep(1)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.step2}
              </motion.button>
            </>
          )}

          {/* Step 1: Known facts + question */}
          {step === 1 && (
            <>
              <div className="w-full rounded-2xl p-4"
                style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}>
                <p className="text-xs font-bold text-center mb-2" style={{ color: "#3B82F6" }}>
                  {lbl.step2}
                </p>
                <p className="text-white/70 text-sm font-medium text-center">
                  {story.known[lang] ?? story.known.en}
                </p>
              </div>
              <div className="w-full rounded-2xl p-4"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
                <p className="text-xs font-bold text-center mb-2" style={{ color: "#EF4444" }}>
                  {lbl.step3}
                </p>
                <p className="text-white/70 text-sm font-medium text-center">
                  {story.question[lang] ?? story.question.en}
                </p>
              </div>

              <div className="text-center">
                <span className="text-xl font-black" style={{ color }}>{story.equation} = ?</span>
              </div>

              <motion.button onClick={() => setStep(2)}
                className="w-full py-3 rounded-2xl font-black text-white text-sm"
                style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                whileTap={{ scale: 0.97 }}>
                {lbl.tapCalc}
              </motion.button>
            </>
          )}

          {/* Step 2: Answer */}
          {step === 2 && (
            <>
              <motion.div
                className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}
                animate={{ scale: [0.95, 1.02, 1] }}
                transition={{ duration: 0.4 }}>
                <p className="text-white/50 text-xs font-bold text-center mb-2">{lbl.answer}</p>
                <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                  {story.equation} = {story.answer} {story.emoji}
                </p>
              </motion.div>

              <motion.button onClick={handleNext}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                whileTap={{ scale: 0.97 }}>
                {idx + 1 >= stories.length ? lbl.done : lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default WordProblemIntro;
