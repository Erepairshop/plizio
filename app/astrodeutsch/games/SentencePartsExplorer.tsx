"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import TapToHighlight from "@/app/astrodeutsch/games/blocks/TapToHighlight";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Subjekt & Prädikat",
    round1: "Subjekt und Prädikat kennenlernen",
    round2: "Tippe das Subjekt!",
    round3: "Tippe das Prädikat!",
    round4: "Subjekt und Prädikat finden",
    round5: "Satzteile-Quiz!",
    tapReveal: "Tippe um Beispiele zu sehen",
    next: "Weiter →",
    done: "Fertig! 🌟",
    subject: "Subjekt",
    predicate: "Prädikat",
    subjectQ: "Wer? Was?",
    predicateQ: "Was tut? Was ist?",
    tapSubject: "Tippe auf das Subjekt",
    tapPredicate: "Tippe auf das Prädikat",
    checkLabel: "Prüfen ✓",
    whatIsSubject: "Was ist das Subjekt?",
    whatIsPredicate: "Was ist das Prädikat?",
    discovery: "💡 Jeder Satz hat ein Subjekt (WER? WAS?) und ein Prädikat (WAS TUT? WAS IST?). Das Subjekt ist meist ein Nomen, das Prädikat ist immer das Verb!",
  },
  en: {
    title: "Subject & Predicate",
    round1: "Meet subject and predicate",
    round2: "Tap the subject!",
    round3: "Tap the predicate!",
    round4: "Find subject and predicate",
    round5: "Sentence parts quiz!",
    tapReveal: "Tap to see examples",
    next: "Next →",
    done: "Done! 🌟",
    subject: "Subject",
    predicate: "Predicate",
    subjectQ: "Who? What?",
    predicateQ: "What does? What is?",
    tapSubject: "Tap the subject",
    tapPredicate: "Tap the predicate",
    checkLabel: "Check ✓",
    whatIsSubject: "What is the subject?",
    whatIsPredicate: "What is the predicate?",
    discovery: "💡 Every sentence has a subject (WHO? WHAT?) and a predicate (WHAT does? WHAT is?). The subject is usually a noun, the predicate is always the verb!",
  },
  hu: {
    title: "Alany és állítmány",
    round1: "Ismerd meg az alanyt és az állítmányt",
    round2: "Koppints az alanyra!",
    round3: "Koppints az állítmányra!",
    round4: "Keresd az alanyt és állítmányt",
    round5: "Mondatrészek kvíz!",
    tapReveal: "Koppints a példák megtekintéséhez",
    next: "Tovább →",
    done: "Kész! 🌟",
    subject: "Alany",
    predicate: "Állítmány",
    subjectQ: "Ki? Mi?",
    predicateQ: "Mit csinál? Mi?",
    tapSubject: "Koppints az alanyra",
    tapPredicate: "Koppints az állítmányra",
    checkLabel: "Ellenőrzés ✓",
    whatIsSubject: "Mi az alany?",
    whatIsPredicate: "Mi az állítmány?",
    discovery: "💡 Minden mondatnak van egy alanya (KI? MI?) és egy állítványa (MIT CSINÁL? MI?). Az alany általában egy főnév, az állítmány pedig mindig az ige!",
  },
  ro: {
    title: "Subiect & Predicat",
    round1: "Cunoaște subiectul și predicatul",
    round2: "Apasă subiectul!",
    round3: "Apasă predicatul!",
    round4: "Găsește subiectul și predicatul",
    round5: "Quiz părți de propoziție!",
    tapReveal: "Apasă pentru a vedea exemple",
    next: "Mai departe →",
    done: "Gata! 🌟",
    subject: "Subiect",
    predicate: "Predicat",
    subjectQ: "Cine? Ce?",
    predicateQ: "Ce face? Ce este?",
    tapSubject: "Apasă subiectul",
    tapPredicate: "Apasă predicatul",
    checkLabel: "Verifică ✓",
    whatIsSubject: "Care este subiectul?",
    whatIsPredicate: "Care este predicatul?",
    discovery: "💡 Fiecare propoziție are un subiect (CINE? CE?) și un predicat (CE FACE? CE ESTE?). Subiectul este de obicei un substantiv, predicatul este întotdeauna verbul!",
  },
};

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="w-full flex items-center gap-2 px-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="h-2 flex-1 rounded-full transition-all duration-500"
          style={{ background: i < current ? color : "rgba(255,255,255,0.15)" }} />
      ))}
    </div>
  );
}

const INTRO_EXAMPLES = {
  subject: [
    "Der Hund bellt.",
    "Anna schläft.",
  ],
  predicate: [
    "Die Katze schläft.",
    "Der Ball rollt.",
  ],
};

function Round1({ color, lbl, onNext, showTeach = false }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach?: boolean }) {
  const [showSubj, setShowSubj] = useState(false);
  const [showPred, setShowPred] = useState(false);
  const [teach, setTeach] = useState(showTeach);
  const subjectColor = "#3b82f6";
  const predicateColor = "#ef4444";

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">Jeden Satz bauen zwei Teile: Das Subjekt antwortet auf "Wer? Was?" und ist meist ein Nomen. Das Prädikat antwortet auf "Was tut? Was ist?" und ist immer das Verb!</p>
        </div>
        <motion.button onClick={() => setTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt || "Ich verstehe! Weiter →"} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round1}</div>
      <div className="w-full flex flex-col gap-2 px-1">
        {/* Subject card */}
        <motion.button
          className="w-full p-3 rounded-2xl border-2 text-left"
          style={{
            borderColor: showSubj ? subjectColor : "rgba(255,255,255,0.15)",
            background: showSubj ? `${subjectColor}18` : "rgba(255,255,255,0.04)",
          }}
          whileTap={{ scale: 0.97 }} onClick={() => setShowSubj(s => !s)}>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded-lg text-xs font-black text-white"
              style={{ background: subjectColor }}>{lbl.subject}</span>
            <span className="text-xs text-white/60">{lbl.subjectQ}</span>
          </div>
          {showSubj && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-1 mt-1">
              {INTRO_EXAMPLES.subject.map(ex => (
                <div key={ex} className="text-sm text-white/80 px-1">
                  • {ex.split(" ").map((w, i) => i === 0 || i === 1
                    ? <span key={i} className="font-bold" style={{ color: subjectColor }}>{w} </span>
                    : <span key={i}>{w} </span>)}
                </div>
              ))}
            </motion.div>
          )}
          {!showSubj && <div className="text-xs text-white/30 mt-1">{lbl.tapReveal}</div>}
        </motion.button>
        {/* Predicate card */}
        <motion.button
          className="w-full p-3 rounded-2xl border-2 text-left"
          style={{
            borderColor: showPred ? predicateColor : "rgba(255,255,255,0.15)",
            background: showPred ? `${predicateColor}18` : "rgba(255,255,255,0.04)",
          }}
          whileTap={{ scale: 0.97 }} onClick={() => setShowPred(s => !s)}>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded-lg text-xs font-black text-white"
              style={{ background: predicateColor }}>{lbl.predicate}</span>
            <span className="text-xs text-white/60">{lbl.predicateQ}</span>
          </div>
          {showPred && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-1 mt-1">
              {INTRO_EXAMPLES.predicate.map(ex => {
                const words = ex.split(" ");
                const lastWord = words[words.length - 1];
                return (
                  <div key={ex} className="text-sm text-white/80 px-1">
                    • {words.map((w, i) => i === words.length - 1
                      ? <span key={i} className="font-bold" style={{ color: predicateColor }}>{w} </span>
                      : <span key={i}>{w} </span>)}
                  </div>
                );
              })}
            </motion.div>
          )}
          {!showPred && <div className="text-xs text-white/30 mt-1">{lbl.tapReveal}</div>}
        </motion.button>
      </div>
      {showSubj && showPred && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const SUBJ_SENTENCES = [
  { sentence: "Der Hund bellt laut.", correctIndices: [0, 1] },
  { sentence: "Die Kinder spielen draußen.", correctIndices: [0, 1] },
  { sentence: "Mein Bruder liest ein Buch.", correctIndices: [0, 1] },
];

function Round2({ color, lbl, onNext, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const subjectColor = "#3b82f6";
  const [si, setSi] = useState(0);
  const handleDone = (correct: boolean) => {
    if (!correct) wrongCountRef.current++;
    if (si + 1 >= SUBJ_SENTENCES.length) onNext();
    else setSi(si + 1);
  };
  const s = SUBJ_SENTENCES[si];
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round2}</div>
      <div className="text-xs text-center font-bold px-3 py-1 rounded-lg"
        style={{ background: `${subjectColor}22`, color: subjectColor }}>{lbl.subject}: {lbl.subjectQ}</div>
      <TapToHighlight
        key={`s-${si}`}
        sentence={s.sentence}
        correctIndices={s.correctIndices}
        color={subjectColor}
        label={lbl.tapSubject}
        checkLabel={lbl.checkLabel}
        onDone={handleDone}
      />
    </div>
  );
}

const PRED_SENTENCES = [
  { sentence: "Die Katze schläft auf dem Sofa.", correctIndices: [2] },
  { sentence: "Das Mädchen singt ein Lied.", correctIndices: [2] },
  { sentence: "Der Lehrer erklärt die Aufgabe.", correctIndices: [2] },
];

function Round3({ color, lbl, onNext, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const predicateColor = "#ef4444";
  const [si, setSi] = useState(0);
  const handleDone = (correct: boolean) => {
    if (!correct) wrongCountRef.current++;
    if (si + 1 >= PRED_SENTENCES.length) onNext();
    else setSi(si + 1);
  };
  const s = PRED_SENTENCES[si];
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round3}</div>
      <div className="text-xs text-center font-bold px-3 py-1 rounded-lg"
        style={{ background: `${predicateColor}22`, color: predicateColor }}>{lbl.predicate}: {lbl.predicateQ}</div>
      <TapToHighlight
        key={`p-${si}`}
        sentence={s.sentence}
        correctIndices={s.correctIndices}
        color={predicateColor}
        label={lbl.tapPredicate}
        checkLabel={lbl.checkLabel}
        onDone={handleDone}
      />
    </div>
  );
}

const BOTH_SENTENCES = [
  { sentence: "Der Vogel singt.", subjectIdx: [0, 1], predicateIdx: [2] },
  { sentence: "Meine Schwester tanzt.", subjectIdx: [0, 1], predicateIdx: [2] },
  { sentence: "Das kleine Kind weint.", subjectIdx: [0, 1, 2], predicateIdx: [3] },
  { sentence: "Die Sonne scheint hell.", subjectIdx: [0, 1], predicateIdx: [2] },
];

function Round4({ color, lbl, onNext, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const subjectColor = "#3b82f6";
  const predicateColor = "#ef4444";
  const [qi, setQi] = useState(0);
  const [phase, setPhase] = useState<"subject" | "predicate">("subject");
  const [subjDone, setSubjDone] = useState(false);

  const q = BOTH_SENTENCES[qi];
  const handleSubjDone = (c: boolean) => { if (!c) wrongCountRef.current++; setSubjDone(true); setPhase("predicate"); };
  const handlePredDone = (c: boolean) => {
    if (!c) wrongCountRef.current++;
    if (qi + 1 >= BOTH_SENTENCES.length) onNext();
    else { setQi(qi + 1); setPhase("subject"); setSubjDone(false); }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round4}</div>
      <div className="flex gap-2">
        <span className="text-xs font-bold px-2 py-1 rounded-lg"
          style={{ background: phase === "subject" ? `${subjectColor}33` : `${subjectColor}11`, color: subjectColor }}>
          1. {lbl.subject}
        </span>
        <span className="text-xs font-bold px-2 py-1 rounded-lg"
          style={{ background: phase === "predicate" ? `${predicateColor}33` : `${predicateColor}11`, color: predicateColor }}>
          2. {lbl.predicate}
        </span>
      </div>
      {phase === "subject" && (
        <TapToHighlight
          key={`both-s-${qi}`}
          sentence={q.sentence}
          correctIndices={q.subjectIdx}
          color={subjectColor}
          label={lbl.tapSubject}
          checkLabel={lbl.checkLabel}
          onDone={handleSubjDone}
        />
      )}
      {phase === "predicate" && (
        <TapToHighlight
          key={`both-p-${qi}`}
          sentence={q.sentence}
          correctIndices={q.predicateIdx}
          color={predicateColor}
          label={lbl.tapPredicate}
          checkLabel={lbl.checkLabel}
          onDone={handlePredDone}
        />
      )}
    </div>
  );
}

const PART_QUIZ = [
  {
    sentence: "Die Katze trinkt Milch.",
    questionKey: "whatIsSubject",
    options: ["Die Katze", "trinkt", "Milch"],
    correct: 0,
  },
  {
    sentence: "Der Ball rollt schnell.",
    questionKey: "whatIsPredicate",
    options: ["Der Ball", "rollt", "schnell"],
    correct: 1,
  },
  {
    sentence: "Meine Mutter backt einen Kuchen.",
    questionKey: "whatIsSubject",
    options: ["backt", "Meine Mutter", "einen Kuchen"],
    correct: 1,
  },
];

function Round5({ color, lbl, onDone, wrongCountRef, lang }: { color: string; lbl: Record<string, string>; onDone: () => void; wrongCountRef: React.MutableRefObject<number>; lang: string }) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = PART_QUIZ[qi];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i !== q.correct) wrongCountRef.current++;
  };
  const handleNext = () => {
    if (qi + 1 >= PART_QUIZ.length) onDone();
    else { setQi(qi + 1); setSelected(null); setRevealed(false); }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round5}</div>
      <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-2xl border"
        style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}>
        <span className="text-sm font-semibold text-white/85">{q.sentence}</span>
        <SpeakButton text={q.sentence} lang={"de"} size={16} />
      </div>
      <p className="text-sm font-bold text-white/80">{lbl[q.questionKey as keyof typeof lbl]}</p>
      <div className="flex flex-col gap-2 w-full px-4">
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === i) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={opt}
              className="py-3 rounded-xl font-bold text-base border-2 text-white"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.96 }} onClick={() => handleSelect(i)}>
              {opt}
              {revealed && i === q.correct && " ✓"}
              {revealed && selected === i && i !== q.correct && " ✗"}
            </motion.button>
          );
        })}
      </div>
      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={handleNext}>
          {qi + 1 >= PART_QUIZ.length ? lbl.done : lbl.next}
        </motion.button>
      )}
    </div>
  );
}

const SentencePartsExplorer = memo(function SentencePartsExplorer({
  color, lang = "de", onDone,
}: { color: string; lang?: string; onDone: (score: number, total: number) => void }) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const [showTeach, setShowTeach] = useState(true);
  const TOTAL_ROUNDS = 5;
  const wrongCountRef = useRef(0);
  const next = useCallback(() => { setRound(r => r + 1); setShowTeach(true); }, []);
  const finish = useCallback(() => {
    const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongCountRef.current, TOTAL_ROUNDS - 1));
    onDone(score, TOTAL_ROUNDS);
  }, [onDone]);
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 px-1">
      <ProgressBar current={round} total={TOTAL_ROUNDS} color={color} />
      <AnimatePresence mode="wait">
        <motion.div key={round} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} showTeach={showTeach} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} wrongCountRef={wrongCountRef} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} wrongCountRef={wrongCountRef} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} wrongCountRef={wrongCountRef} />}
          {round === 4 && (
            <div className="w-full flex flex-col items-center gap-4">
              <Round5 color={color} lbl={lbl} onDone={finish} wrongCountRef={wrongCountRef} lang={lang} />
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="w-full px-4 py-3 rounded-2xl text-sm font-bold text-white/80 text-center"
                style={{ background: `${color}22` }}>
                {lbl.discovery}
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});
export default SentencePartsExplorer;
