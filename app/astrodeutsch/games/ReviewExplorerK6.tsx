"use client";
// ReviewExplorerK6 — Island i9: Große Prüfung (K6)
// Mixed review: Passiv, Konjunktiv II, Relativpronomen, Synonym/Fremdwort, Wortbildung

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import FillTheGap from "./blocks/FillTheGap";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Big Review",
    round1Title: "Active & Passive",
    round1Hint: "Identify or choose the correct passive form.",
    round2Title: "Konjunktiv II",
    round2Hint: "Choose wäre / hätte / würde in context.",
    round3Title: "Relative Pronouns",
    round3Hint: "Choose the correct relative pronoun.",
    round4Title: "Synonyms & Foreign Words",
    round4Hint: "Which word is a synonym? Which is a German equivalent?",
    round5Title: "Word Formation",
    round5Hint: "Tap the correct compound or derived word.",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
  },
  hu: {
    title: "Nagy áttekintés",
    round1Title: "Aktív & Szenvedő",
    round1Hint: "Azonosítsd vagy válaszd ki a helyes szenvedő alakot.",
    round2Title: "Konjunktív II",
    round2Hint: "Válassz wäre / hätte / würde a kontextusban.",
    round3Title: "Vonatkozói névmások",
    round3Hint: "Válaszd ki a helyes vonatkozói névmást.",
    round4Title: "Szinonimák & Idegen szavak",
    round4Hint: "Melyik szó szinonima? Melyik a német megfelelő?",
    round5Title: "Szóalkotás",
    round5Hint: "Koppints a helyes összetett vagy képzett szóra.",
    next: "Tovább",
    finish: "Kész!",
    correct: "Helyes!",
  },
  de: {
    title: "Große Wiederholung",
    round1Title: "Aktiv & Passiv",
    round1Hint: "Erkenne oder wähle die richtige Passivform.",
    round2Title: "Konjunktiv II",
    round2Hint: "Wähle wäre / hätte / würde im Kontext.",
    round3Title: "Relativpronomen",
    round3Hint: "Wähle das richtige Relativpronomen.",
    round4Title: "Synonyme & Fremdwörter",
    round4Hint: "Welches Wort ist ein Synonym? Welches ist das deutsche Äquivalent?",
    round5Title: "Wortbildung",
    round5Hint: "Tippe auf das richtige Kompositum oder die richtige Ableitung.",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
  },
  ro: {
    title: "Recapitulare mare",
    round1Title: "Activ & Pasiv",
    round1Hint: "Identifică sau alege forma corectă de pasiv.",
    round2Title: "Conjunctiv II",
    round2Hint: "Alege wäre / hätte / würde în context.",
    round3Title: "Pronume relative",
    round3Hint: "Alege pronumele relativ corect.",
    round4Title: "Sinonime & Cuvinte străine",
    round4Hint: "Care cuvânt este sinonim? Care este echivalentul german?",
    round5Title: "Formare de cuvinte",
    round5Hint: "Atinge cuvântul compus sau derivat corect.",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    discovery: "💡 Advanced grammar builds on basics. Cases, clauses, and tenses combine to create complex, meaningful sentences!",
  },
};

// Add discovery to all language objects
const DISCOVERY_LABELS: Record<string, string> = {
  en: "💡 Advanced grammar builds on basics. Cases, clauses, and tenses combine to create complex, meaningful sentences!",
  hu: "💡 A haladó nyelvtan az alapokra épül. Az esetek, mellékmondatok és időalakok kombinációja összetett, értelmes mondatokat hoz létre!",
  de: "💡 Fortgeschrittene Grammatik baut auf Grundlagen auf. Fälle, Nebensätze und Zeitformen kombinieren sich zu komplexen, aussagekräftigen Sätzen!",
  ro: "💡 Gramatica avansată se construiește pe baze. Cazurile, clauze și timpurile se combină pentru a crea propoziții complexe și semnificative!",
};

const MCQ1 = [
  { sentence: "Das Auto ___ repariert.", options: ["wird", "ist", "hat"], correct: "wird", label: "Passiv" },
  { sentence: "Der Brief ___ vom Chef geschrieben.", options: ["wurde", "hat", "war"], correct: "wurde", label: "Passiv Prät." },
];

const MCQ2 = [
  { sentence: "Wenn ich reich ___, würde ich reisen.", options: ["wäre", "werde", "war"], correct: "wäre" },
  { sentence: "Er ___ gern Arzt.", options: ["wäre", "wird", "hat"], correct: "wäre" },
  { sentence: "Wenn ich mehr Zeit ___, käme ich.", options: ["hätte", "habe", "hat"], correct: "hätte" },
];

const MCQ3 = [
  { sentence: "Das ist die Frau, ___ hier wohnt.", options: ["die", "der", "das"], correct: "die" },
  { sentence: "Das ist das Kind, ___ spielt.", options: ["das", "die", "der"], correct: "das" },
  { sentence: "Das ist der Mann, ___ kommt.", options: ["der", "die", "das"], correct: "der" },
];

const MCQ4 = [
  { question: "Was ist ein Synonym für 'schnell'?", options: ["rasch", "langsam", "laut"], correct: "rasch" },
  { question: "Was ist das deutsche Wort für 'Computer'?", options: ["Rechner", "Schreiber", "Sprecher"], correct: "Rechner" },
];

const MCQ5 = [
  { question: "Haus + Tür =?", options: ["Haustür", "Türhaus", "Haustüre"], correct: "Haustür" },
  { question: "un- + möglich =?", options: ["unmöglich", "nichtmöglich", "möglich-un"], correct: "unmöglich" },
  { question: "Schön + -heit =?", options: ["Schönheit", "Schönigkeit", "Schönnis"], correct: "Schönheit" },
];

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="flex gap-1.5 w-full">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex-1 h-2 rounded-full"
          style={{ background: i < current ? "#00FF88" : i === current ? color : "rgba(255,255,255,0.12)" }} />
      ))}
    </div>
  );
}

function NextBtn({ onClick, label, color }: { onClick: () => void; label: string; color: string }) {
  return (
    <motion.button onClick={onClick}
      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
      whileTap={{ scale: 0.97 }}>
      {label} <ChevronRight size={16} />
    </motion.button>
  );
}

function MCQRound({
  title, hint, items, color, lbl, onDone, wrongCountRef, lang,
}: {
  title: string; hint: string;
  items: { sentence?: string; question?: string; options: string[]; correct: string; label?: string }[];
  color: string; lbl: Record<string, string>; onDone: () => void; wrongCountRef?: React.MutableRefObject<number>; lang?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const item = items[idx];
  const displayText = item.question ?? item.sentence ?? "";
  const handleSelect = (opt: string) => {
    if (selected || feedback) return;
    const correct = opt === item.correct;
    setSelected(opt);
    setFeedback(correct ? "correct" : "wrong");
    if (!correct && wrongCountRef) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.sentence || item.question || "", wrongAnswer: opt, correctAnswer: item.correct, topic: "Review", lang: "de" });
    }
    setTimeout(() => {
      if (idx + 1 >= items.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, correct ? 800 : 1000);
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{hint}</p>
      <div className="flex gap-1 justify-center">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={displayText} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <div className="flex items-center justify-center gap-2">
            <p className="text-white font-bold text-base">{displayText}</p>
            <SpeakButton text={displayText} lang={"de"} size={16} />
          </div>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: selected === item.correct ? "#00FF88" : "#FF6B6B" }}>
              {selected === item.correct
                ? `✅ ${item.label ? item.label + "!" : lbl.correct}`
                : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full flex-wrap">
        {item.options.map(opt => {
          const isCorrectChoice = opt === item.correct;
          const shouldShowCorrect = feedback && isCorrectChoice;
          const shouldShowWrong = feedback && selected === opt && !isCorrectChoice;

          return (
            <motion.button key={opt} onClick={() => handleSelect(opt)} disabled={!!selected}
              className="flex-1 min-w-14 py-3 rounded-xl font-black text-base transition-colors"
              style={{
                background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,107,107,0.15)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF6B6B" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF6B6B" : "white",
                cursor: selected ? "default" : "pointer",
              }}
              whileTap={!selected ? { scale: 0.93 } : {}}>
              {opt}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Round 2 uses FillTheGap for variety
function Round2({
  color,
  lbl,
  wrongCountRef,
  onNext,
  lang,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
  lang?: string;
}) {
  const [idx, setIdx] = useState(0);
  const ITEMS = [
    { sentence: "Wenn ich Zeit ___, käme ich.", options: ["hätte", "wäre", "würde"], correct: "hätte" },
    { sentence: "Er ___ gern Pilot.", options: ["wäre", "wird", "hatte"], correct: "wäre" },
  ];
  const item = ITEMS[idx];
  const handleDone = (correct: boolean) => {
    if (!correct) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: "", correctAnswer: "", topic: "Review", lang: "de" });
    }
    if (idx + 1 >= ITEMS.length) setTimeout(onNext, 800);
    else setTimeout(() => setIdx(i => i + 1), 900);
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 justify-center">
        {ITEMS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-white font-bold text-sm">{item.sentence}</p>
            <SpeakButton text={item.sentence} lang={"de"} size={14} />
          </div>
          <FillTheGap
            sentence={item.sentence}
            options={item.options}
            correct={item.correct}
            color={color}
            onDone={handleDone}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function DiscoveryCard({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <motion.div className="text-7xl" animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}>
        🎓
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-2xl px-4 py-3 text-center"
        style={{ background: "rgba(180,77,255,0.1)", border: "2px solid rgba(180,77,255,0.3)" }}>
        <p className="text-[#B44DFF] font-black text-sm">{lbl.discovery}</p>
      </motion.div>
      <NextBtn onClick={onDone} label={lbl.finish} color={color} />
    </div>
  );
}

const ReviewExplorerK6 = memo(function ReviewExplorerK6({
  color, lang = "de", onDone,
}: {
  color: string; lang?: string; onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 6;
  const wrongCountRef = useRef(0);
  const next = useCallback(() => setRound(r => r + 1), []);
  const finish = useCallback(() => {
    const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongCountRef.current, TOTAL_ROUNDS - 1));
    onDone(score, TOTAL_ROUNDS);
  }, [onDone]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 px-1">
      <ProgressBar current={round} total={TOTAL_ROUNDS} color={color} />
      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && (
            <MCQRound title={lbl.round1Title} hint={lbl.round1Hint} items={MCQ1} color={color} lbl={lbl} onDone={next} wrongCountRef={wrongCountRef} lang={lang} />
          )}
          {round === 1 && <Round2 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} lang={lang} />}
          {round === 2 && (
            <MCQRound title={lbl.round3Title} hint={lbl.round3Hint} items={MCQ3} color={color} lbl={lbl} onDone={next} wrongCountRef={wrongCountRef} lang={lang} />
          )}
          {round === 3 && (
            <MCQRound title={lbl.round4Title} hint={lbl.round4Hint} items={MCQ4} color={color} lbl={lbl} onDone={next} wrongCountRef={wrongCountRef} lang={lang} />
          )}
          {round === 4 && (
            <MCQRound title={lbl.round5Title} hint={lbl.round5Hint} items={MCQ5} color={color} lbl={lbl} onDone={next} wrongCountRef={wrongCountRef} lang={lang} />
          )}
          {round === 5 && <DiscoveryCard color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ReviewExplorerK6;
