"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import SplitWordAnimation from "@/app/astrodeutsch/games/blocks/SplitWordAnimation";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Trennbare Verben",
    round1: "Trennbare Verben kennenlernen",
    round1Title: "Trennbare Verben kennenlernen",
    round1Teach: "Trennbare Verben haben ein Präfix (auf-, ein-, an-, ab-, aus-) und einen Stamm. In Hauptsätzen trennen sich die Teile: 'Ich STEHE auf', 'Er RUFT an'. Das ist eine deutsche Besonderheit!",
    round1Hint: "Tippe um Beispiele zu sehen",
    round1Discovery: "💡 Separable verbs split apart in main clauses! 'aufstehen': Ich STEHE um 7 Uhr AUF. But in subordinate clauses they stay together: ...weil ich um 7 Uhr AUFSTEHE.",
    round2: "Aufstehen — getrennt!",
    round2Title: "Aufstehen — getrennt!",
    round2Teach: "Schau, wie 'auf' + 'stehen' sich in einem Satz trennt! Im Satz 'Ich stehe um 7 Uhr auf' wandert 'auf' ans Ende. Das ist die Regel für alle trennbaren Verben.",
    round2Hint: "Beobachte die Animation",
    round3: "Was ist das Präfix?",
    round3Title: "Was ist das Präfix?",
    round3Teach: "Das Präfix ist der trennbare Teil des Verbs. 'auf-stehen' hat das Präfix 'auf'. 'an-rufen' hat das Präfix 'an'. Erkenne alle 6 Präfixe!",
    round3Hint: "Tippe das Präfix",
    round4: "Satz bauen: 'anrufen'",
    round4Title: "Satz bauen: 'anrufen'",
    round4Teach: "Tippst die Wörter in der richtigen Reihenfolge an. Hauptsatz: 'Ich | rufe | meine | Mutter | an.' Das Präfix 'an' kommt ans Ende!",
    round4Hint: "Tippe die Wörter",
    round5: "Trennbare Verben Quiz!",
    round5Title: "Trennbare Verben Quiz!",
    round5Teach: "Wähle den ganzen Satz mit dem richtigen trennbaren Verb. Das Präfix MUSS separiert sein: 'Er MACHT die Tür AUF', nicht 'Er macht AUF die Tür'.",
    round5Hint: "Wähle den richtigen Satz",
    gotIt: "Ich verstehe! Weiter →",
    tapReveal: "Tippe für die Übersetzung",
    next: "Weiter →",
    done: "Fertig! 🌟",
    split: "Trennen! ✂️",
    showSentence: "Im Satz zeigen →",
    prefix: "Präfix",
    tapCorrect: "Tippe das richtige Präfix",
    tapWords: "Tippe die Wörter in der richtigen Reihenfolge",
    correct: "Richtig! ✓",
    wrong: "Falsch ✗",
    pickForm: "Welche Form ist richtig?",
  },
  en: {
    title: "Separable Verbs",
    round1: "Meet separable verbs",
    round1Discovery: "💡 Separable verbs split apart in main clauses! 'aufstehen': Ich STEHE um 7 Uhr AUF. But in subordinate clauses they stay together: ...weil ich um 7 Uhr AUFSTEHE.",
    round2: "Aufstehen — split!",
    round3: "What is the prefix?",
    round4: "Build a sentence: 'anrufen'",
    round5: "Separable verbs quiz!",
    tapReveal: "Tap for translation",
    next: "Next →",
    done: "Done! 🌟",
    split: "Split! ✂️",
    showSentence: "Show in sentence →",
    prefix: "Prefix",
    tapCorrect: "Tap the correct prefix",
    tapWords: "Tap the words in the correct order",
    correct: "Correct! ✓",
    wrong: "Wrong ✗",
    pickForm: "Which form is correct?",
  },
  hu: {
    title: "Elváló igék",
    round1: "Ismerkedj az elváló igékkel",
    round1Discovery: "💡 Az elváló igék főmondatban szétválnak! 'aufstehen': Ich STEHE um 7 Uhr AUF. De alárendelt mondatban együtt maradnak: ...weil ich um 7 Uhr AUFSTEHE.",
    round2: "Aufstehen — szétválasztva!",
    round3: "Mi az előtag?",
    round4: "Mondatépítés: 'anrufen'",
    round5: "Elváló igék kvíz!",
    tapReveal: "Koppints a fordításért",
    next: "Tovább →",
    done: "Kész! 🌟",
    split: "Szétválaszt! ✂️",
    showSentence: "Mutasd mondatban →",
    prefix: "Előtag",
    tapCorrect: "Koppints a helyes előtagra",
    tapWords: "Koppints a szavakra a helyes sorrendben",
    correct: "Helyes! ✓",
    wrong: "Helytelen ✗",
    pickForm: "Melyik forma helyes?",
  },
  ro: {
    title: "Verbe separabile",
    round1: "Cunoaște verbele separabile",
    round1Discovery: "💡 Verbele separabile se despart în propozițiile principale! 'aufstehen': Ich STEHE um 7 Uhr AUF. Dar în propozițiile subordonate rămân împreună: ...weil ich um 7 Uhr AUFSTEHE.",
    round2: "Aufstehen — separat!",
    round3: "Care este prefixul?",
    round4: "Construiește propoziția: 'anrufen'",
    round5: "Quiz verbe separabile!",
    tapReveal: "Apasă pentru traducere",
    next: "Mai departe →",
    done: "Gata! 🌟",
    split: "Separă! ✂️",
    showSentence: "Arată în propoziție →",
    prefix: "Prefix",
    tapCorrect: "Apasă prefixul corect",
    tapWords: "Apasă cuvintele în ordinea corectă",
    correct: "Corect! ✓",
    wrong: "Greșit ✗",
    pickForm: "Care formă este corectă?",
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

const VERBS_INTRO = [
  { verb: "aufstehen", prefix: "auf", hint: "aufwachen / to get up", emoji: "⏰" },
  { verb: "einlaufen", prefix: "ein", hint: "eintreten / to run in", emoji: "🏃" },
  { verb: "anrufen", prefix: "an", hint: "telefonieren / to call", emoji: "📞" },
  { verb: "abholen", prefix: "ab", hint: "mitnehmen / to pick up", emoji: "🚗" },
  { verb: "ausgehen", prefix: "aus", hint: "hinausgehen / to go out", emoji: "🚪" },
  { verb: "einschlafen", prefix: "ein", hint: "schlafen / to fall asleep", emoji: "😴" },
];

function Round1({ color, lbl, onNext, showTeach = false }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach?: boolean }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [teach, setTeach] = useState(showTeach);
  const tap = (i: number) => setRevealed(prev => { const n = new Set(prev); n.add(i); return n; });

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round1Teach}</p>
        </div>
        <motion.button onClick={() => setTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round1}</div>
      <p className="text-xs text-white/60 text-center px-2">{lbl.tapReveal}</p>
      <div className="w-full flex flex-col gap-2 px-1">
        {VERBS_INTRO.map((v, i) => (
          <motion.button key={v.verb}
            className="w-full flex items-center gap-3 p-3 rounded-2xl border-2 text-left"
            style={{
              borderColor: revealed.has(i) ? color : "rgba(255,255,255,0.15)",
              background: revealed.has(i) ? `${color}18` : "rgba(255,255,255,0.04)",
            }}
            whileTap={{ scale: 0.97 }} onClick={() => tap(i)}>
            <span className="text-xl">{v.emoji}</span>
            <div className="flex-1">
              <span className="font-black text-base" style={{ color }}>{v.prefix}</span>
              <span className="font-bold text-base text-white">{v.verb.slice(v.prefix.length)}</span>
            </div>
            {revealed.has(i) && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-xs text-white/70 italic text-right">{v.hint}</motion.span>
            )}
          </motion.button>
        ))}
      </div>
      {revealed.size === VERBS_INTRO.length && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round2}</div>
      <SplitWordAnimation
        prefix="auf"
        stem="stehen"
        fullVerb="aufstehen"
        sentence="Ich stehe um 7 Uhr ___."
        color={color}
        nextLabel={lbl.next}
        splitLabel={lbl.split}
        showLabel={lbl.showSentence}
        onNext={onNext}
      />
    </div>
  );
}

const PREFIX_QUIZ = [
  { verb: "ausgehen", options: ["aus", "ge", "ein"], correct: 0 },
  { verb: "einschlafen", options: ["schla", "ein", "an"], correct: 1 },
  { verb: "ankommen", options: ["kom", "ab", "an"], correct: 2 },
  { verb: "abholen", options: ["ab", "hol", "auf"], correct: 0 },
  { verb: "aufmachen", options: ["auf", "mach", "ein"], correct: 0 },
  { verb: "anstellen", options: ["an", "stell", "aus"], correct: 0 },
];

function Round3({ color, lbl, wrongCountRef, onNext }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onNext: () => void }) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = PREFIX_QUIZ[qi];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    if (i !== q.correct) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: String(i), correctAnswer: String(q.correct), topic: "Separable Verbs", lang: "de" });
    }
    setRevealed(true);
  };
  const handleNext = () => {
    if (qi + 1 >= PREFIX_QUIZ.length) onNext();
    else { setQi(qi + 1); setSelected(null); setRevealed(false); }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round3}</div>
      <p className="text-xs text-white/60 text-center">{lbl.tapCorrect}</p>
      <div className="flex items-center justify-center gap-2">
        <div className="px-5 py-3 rounded-2xl border-2 text-xl font-black text-white"
          style={{ borderColor: color, background: `${color}22` }}>{q.verb}</div>
        <SpeakButton text={q.verb} lang="de" size={16} />
      </div>
      <div className="flex gap-3 justify-center">
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === i) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={opt}
              className="px-5 py-2.5 rounded-xl font-black text-base border-2 text-white"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.92 }} onClick={() => handleSelect(i)}>{opt}-</motion.button>
          );
        })}
      </div>
      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={handleNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const SENTENCE_WORDS = ["Ich", "rufe", "meine", "Mutter", "an."];

function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const remaining = SENTENCE_WORDS.filter((w, i) => !tapped.includes(`${w}-${i}`));
  const isCorrect = tapped.map(t => t.split("-").slice(0, -1).join("-")).join(" ") === SENTENCE_WORDS.join(" ");

  const handleTap = (word: string, idx: number) => {
    const key = `${word}-${idx}`;
    const newTapped = [...tapped, key];
    setTapped(newTapped);
    if (newTapped.length === SENTENCE_WORDS.length) setDone(true);
  };
  const handleReset = () => { setTapped([]); setDone(false); };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round4}</div>
      <p className="text-xs text-white/60 text-center">{lbl.tapWords}</p>
      {/* Built sentence */}
      <div className="min-h-12 w-full px-2 py-2 rounded-2xl border border-white/15 flex flex-wrap gap-1.5 items-center"
        style={{ background: "rgba(255,255,255,0.04)" }}>
        {tapped.length === 0
          ? <span className="text-white/30 text-sm italic w-full text-center">...</span>
          : tapped.map((key, i) => {
              const word = key.split("-").slice(0, -1).join("-");
              const isLast = word === "an.";
              return (
                <span key={i} className="px-2 py-0.5 rounded-lg text-sm font-bold"
                  style={{ background: isLast ? `${color}44` : `${color}22`, color: "#fff" }}>{word}</span>
              );
            })}
      </div>
      {/* Word bank */}
      <div className="flex flex-wrap gap-2 justify-center">
        {SENTENCE_WORDS.map((word, idx) => {
          const key = `${word}-${idx}`;
          const used = tapped.includes(key);
          return (
            <motion.button key={key}
              className="px-3 py-1.5 rounded-xl text-sm font-bold border-2"
              style={{
                opacity: used ? 0.3 : 1,
                background: used ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
                borderColor: used ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.9)",
              }}
              disabled={used}
              whileTap={{ scale: 0.92 }} onClick={() => handleTap(word, idx)}>{word}</motion.button>
          );
        })}
      </div>
      {done && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-2">
          <div className="text-sm font-bold" style={{ color: isCorrect ? "#22c55e" : "#ef4444" }}>
            {isCorrect ? lbl.correct : lbl.wrong}
          </div>
          {!isCorrect && (
            <motion.button className="px-4 py-1.5 rounded-xl text-xs font-bold border border-white/20 text-white/80"
              whileTap={{ scale: 0.95 }} onClick={handleReset}>↩</motion.button>
          )}
          {isCorrect && (
            <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
              style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
          )}
        </motion.div>
      )}
    </div>
  );
}

const VERB_QUIZ = [
  {
    verb: "aufmachen",
    sentence: "Er ___ die Tür ___.",
    options: ["Er aufmacht die Tür.", "Er macht die Tür auf.", "Er macht auf die Tür."],
    correct: 1,
  },
  {
    verb: "einschlafen",
    sentence: "Das Kind ___ früh ___.",
    options: ["Das Kind schläft früh ein.", "Das Kind einschläft früh.", "Das Kind schläft einfrüh."],
    correct: 0,
  },
  {
    verb: "anrufen",
    sentence: "Sie ___ ihren Vater ___.",
    options: ["Sie anruft ihren Vater.", "Sie ruft an ihren Vater.", "Sie ruft ihren Vater an."],
    correct: 2,
  },
  {
    verb: "ausgehen",
    sentence: "Wir ___ am Wochenende ___.",
    options: ["Wir ausgehen am Wochenende.", "Wir gehen am Wochenende aus.", "Wir gehen aus am Wochenende."],
    correct: 1,
  },
  {
    verb: "aufstehen",
    sentence: "Ich ___ um 6 Uhr ___.",
    options: ["Ich aufstehe um 6 Uhr.", "Ich stehe um 6 Uhr auf.", "Ich stehe auf um 6 Uhr."],
    correct: 1,
  },
];

function Round5({ color, lbl, wrongCountRef, onDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void }) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = VERB_QUIZ[qi];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    if (i !== q.correct) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: String(i), correctAnswer: String(q.correct), topic: "Separable Verbs", lang: "de" });
    }
    setRevealed(true);
  };
  const handleNext = () => {
    if (qi + 1 >= VERB_QUIZ.length) onDone();
    else { setQi(qi + 1); setSelected(null); setRevealed(false); }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round5}</div>
      <div className="px-4 py-2 rounded-xl border text-sm font-bold text-white/80 text-center"
        style={{ borderColor: `${color}44`, background: `${color}11` }}>{lbl.pickForm}: <span style={{ color }}>{q.verb}</span></div>
      <div className="flex flex-col gap-2 w-full px-2">
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === i) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={opt}
              className="py-3 px-3 rounded-xl font-semibold text-sm border-2 text-white text-left"
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
          {qi + 1 >= VERB_QUIZ.length ? lbl.done : lbl.next}
        </motion.button>
      )}
    </div>
  );
}

const SeparableVerbExplorer = memo(function SeparableVerbExplorer({
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
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});
export default SeparableVerbExplorer;
