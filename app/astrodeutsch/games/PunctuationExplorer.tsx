"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Dehnungs-h & Komma",
    round1: "Das Dehnungs-h",
    round2: "Komma in Aufzählungen",
    round3: "Wo gehört das Komma hin?",
    round4: "Komma vor und/oder?",
    round5: "Rechtschreibungs-Quiz!",
    tapReveal: "Tippe um Silben zu sehen",
    next: "Weiter →",
    done: "Fertig! 🌟",
    rule: "Regel",
    longVowelH: "Langes h nach einem langen Vokal in der Wortmitte",
    exampleSplit: "Silbentrennung",
    tapComma: "Tippe zwischen zwei Wörter für ein Komma",
    commaRule: "Komma zwischen Listenpunkten — aber NICHT vor und/oder",
    yes: "Ja, Komma!",
    no: "Nein, kein Komma!",
    beforeUnd: "Vor und/oder?",
    chooseRight: "Wähle die richtige Schreibweise",
    checkLabel: "Prüfen ✓",
    syllable: "Silbe",
    discovery: "💡 Kommas trennen Nebensätze im Deutschen! Setze immer ein Komma vor Konjunktionen von Nebensätzen (weil, dass, wenn, ob, obwohl).",
  },
  en: {
    title: "Lengthening h & Comma",
    round1: "The lengthening h",
    round2: "Comma in lists",
    round3: "Where does the comma go?",
    round4: "Comma before und/oder?",
    round5: "Spelling quiz!",
    tapReveal: "Tap to see syllables",
    next: "Next →",
    done: "Done! 🌟",
    rule: "Rule",
    longVowelH: "Silent 'h' after a long vowel in the middle of a word",
    exampleSplit: "Syllable split",
    tapComma: "Tap between two words to add a comma",
    commaRule: "Comma between list items — but NOT before und/oder",
    yes: "Yes, comma!",
    no: "No comma!",
    beforeUnd: "Before und/oder?",
    chooseRight: "Choose the correct spelling",
    checkLabel: "Check ✓",
    syllable: "Syllable",
    discovery: "💡 Commas separate subordinate clauses in German! Always put a comma before subordinate clause conjunctions (weil, dass, wenn, ob, obwohl).",
  },
  hu: {
    title: "Nyújtó h & Vessző",
    round1: "A nyújtó h",
    round2: "Vessző felsorolásokban",
    round3: "Hova kerül a vessző?",
    round4: "Vessző und/oder előtt?",
    round5: "Helyesírás kvíz!",
    tapReveal: "Koppints a szótagok megtekintéséhez",
    next: "Tovább →",
    done: "Kész! 🌟",
    rule: "Szabály",
    longVowelH: "Néma h hosszú magánhangzó után szó közepén",
    exampleSplit: "Szótagolás",
    tapComma: "Koppints két szó közé vesszőért",
    commaRule: "Vessző a felsorolás tagjai között — de und/oder előtt NEM!",
    yes: "Igen, vessző!",
    no: "Nem, nincs vessző!",
    beforeUnd: "und/oder előtt?",
    chooseRight: "Válaszd a helyes írásmódot",
    checkLabel: "Ellenőrzés ✓",
    syllable: "Szótag",
    discovery: "💡 A vesszők elváasztják a mellékmondatokat a németben! Mindig tegyél vesszőt a mellékmondat kötőszavak előtt (weil, dass, wenn, ob, obwohl).",
  },
  ro: {
    title: "h de lungire & Virgulă",
    round1: "H-ul de lungire",
    round2: "Virgulă în enumerări",
    round3: "Unde merge virgula?",
    round4: "Virgulă înainte de und/oder?",
    round5: "Quiz ortografie!",
    tapReveal: "Apasă pentru a vedea silabele",
    next: "Mai departe →",
    done: "Gata! 🌟",
    rule: "Regulă",
    longVowelH: "'h' mut după o vocală lungă în interiorul cuvântului",
    exampleSplit: "Despărțire în silabe",
    tapComma: "Apasă între două cuvinte pentru o virgulă",
    commaRule: "Virgulă între elementele listei — dar NU înainte de und/oder",
    yes: "Da, virgulă!",
    no: "Nu, fără virgulă!",
    beforeUnd: "Înainte de und/oder?",
    chooseRight: "Alege grafia corectă",
    checkLabel: "Verifică ✓",
    syllable: "Silabă",
    discovery: "💡 Virgulele separă propozițiile subordonate în germană! Pune întotdeauna o virgulă înainte de conjuncțiile propozițiilor subordonate (weil, dass, wenn, ob, obwohl).",
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

const DEHNUNGS_H = [
  { word: "fahren", split: "fah-ren", hIdx: 2 },
  { word: "sehen", split: "se-hen", hIdx: 2 },
  { word: "Wohnung", split: "Woh-nung", hIdx: 2 },
  { word: "Schuh", split: "Schuh", hIdx: 4 },
  { word: "Uhr", split: "Uhr", hIdx: 2 },
];

function Round1({ color, lbl, onNext, showTeach = false }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach?: boolean }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [teach, setTeach] = useState(showTeach);
  const tap = (i: number) => setRevealed(prev => { const n = new Set(prev); n.add(i); return n; });

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">Das "Dehnungs-h" steht nach langen Vokalen in der Wortmitte (fahren, sehen, Wohnung). Es ist quasi stumm! Diese Regel hilft dir, die Wortform richtig zu schreiben.</p>
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
      <div className="px-3 py-2 rounded-xl border text-xs font-semibold text-white/80 text-center w-full"
        style={{ borderColor: `${color}44`, background: `${color}11` }}>
        📘 {lbl.rule}: {lbl.longVowelH}
      </div>
      <p className="text-xs text-white/60 text-center">{lbl.tapReveal}</p>
      <div className="w-full flex flex-col gap-2 px-1">
        {DEHNUNGS_H.map((dh, i) => (
          <motion.button key={dh.word}
            className="w-full flex items-center gap-3 p-3 rounded-2xl border-2 text-left"
            style={{
              borderColor: revealed.has(i) ? color : "rgba(255,255,255,0.12)",
              background: revealed.has(i) ? `${color}18` : "rgba(255,255,255,0.04)",
            }}
            whileTap={{ scale: 0.97 }} onClick={() => tap(i)}>
            <span className="font-black text-base flex-1">
              {dh.word.split("").map((ch, ci) => (
                <span key={ci} style={ch === "h" && dh.word[ci] === "h" && ci === dh.hIdx
                  ? { color, fontWeight: 900, textDecoration: "underline" }
                  : { color: "rgba(255,255,255,0.85)" }}>{ch}</span>
              ))}
            </span>
            {revealed.has(i) && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-xs text-white/60">{lbl.syllable}: {dh.split}</motion.span>
            )}
          </motion.button>
        ))}
      </div>
      {revealed.size >= 3 && (
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
      <div className="px-3 py-2 rounded-xl border text-xs font-semibold text-white/80 text-center w-full"
        style={{ borderColor: `${color}44`, background: `${color}11` }}>
        {lbl.commaRule}
      </div>
      <div className="w-full flex flex-col gap-2 px-1">
        {[
          { sentence: "Äpfel, Birnen und Trauben.", highlight: [0] },
          { sentence: "Ich mag Hunde, Katzen und Fische.", highlight: [2] },
          { sentence: "Rot, Blau, Grün oder Gelb.", highlight: [0, 2] },
        ].map((ex, i) => (
          <div key={i} className="px-3 py-2 rounded-xl border text-sm font-semibold text-white/85"
            style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}>
            {ex.sentence.split(",").map((part, pi, arr) => (
              <span key={pi}>
                {part}
                {pi < arr.length - 1 && (
                  <span className="font-black" style={{ color }}>
                    ,
                  </span>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
        style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
    </div>
  );
}

const COMMA_INSERT = [
  { words: ["Ich", "mag", "Hunde", "Katzen", "und", "Fische."], correctCommaAfter: [2] },
  { words: ["Wir", "haben", "Äpfel", "Birnen", "und", "Trauben", "gekauft."], correctCommaAfter: [2, 3] },
  { words: ["Sie", "tanzt", "singt", "und", "spielt", "Gitarre."], correctCommaAfter: [2] },
  { words: ["Er", "kauft", "Brot", "Käse", "und", "Butter."], correctCommaAfter: [2, 3] },
  { words: ["Ich", "sehe", "Autos", "Züge", "oder", "Fahrräder."], correctCommaAfter: [2, 3] },
];

function Round3({
  color,
  lbl,
  wrongCountRef,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
}) {
  const [qi, setQi] = useState(0);
  const [inserted, setInserted] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const q = COMMA_INSERT[qi];

  const toggle = (afterIdx: number) => {
    if (submitted) return;
    setInserted(prev => {
      const n = new Set(prev);
      n.has(afterIdx) ? n.delete(afterIdx) : n.add(afterIdx);
      return n;
    });
  };

  const handleCheck = () => {
    setSubmitted(true);
    const isCorrect = inserted.size === q.correctCommaAfter.length &&
                      q.correctCommaAfter.every(i => inserted.has(i));
    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: q.words.join(" "), wrongAnswer: Array.from(inserted).join(","), correctAnswer: q.correctCommaAfter.join(","), topic: "Punctuation", lang: "de" });
    }
    setTimeout(() => {
      if (qi + 1 >= COMMA_INSERT.length) onNext();
      else { setQi(qi + 1); setInserted(new Set()); setSubmitted(false); }
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round3}</div>
      <p className="text-xs text-white/60 text-center">{lbl.tapComma}</p>
      <div className="flex flex-wrap gap-1 justify-center px-2 py-3 rounded-2xl border"
        style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}>
        {q.words.map((w, i) => {
          const hasCommaAfter = inserted.has(i);
          const correctHere = q.correctCommaAfter.includes(i);
          const wrongComma = submitted && hasCommaAfter && !correctHere;
          const missedComma = submitted && !hasCommaAfter && correctHere;
          return (
            <span key={i} className="flex items-center">
              <motion.button
                className="px-2 py-1 rounded text-sm font-bold"
                style={{ color: "rgba(255,255,255,0.85)" }}
                whileTap={{ scale: 0.92 }} onClick={() => toggle(i)}>
                {w}
              </motion.button>
              {/* Comma insertion zone */}
              {i < q.words.length - 1 && (
                <motion.button
                  className="w-5 h-5 flex items-center justify-center text-sm font-black rounded"
                  style={{
                    color: hasCommaAfter
                      ? (submitted ? (correctHere ? "#22c55e" : "#ef4444") : color)
                      : "rgba(255,255,255,0.15)",
                    background: hasCommaAfter ? "rgba(255,255,255,0.08)" : "transparent",
                  }}
                  whileTap={{ scale: 0.85 }} onClick={() => toggle(i)}>
                  {hasCommaAfter ? "," : "·"}
                </motion.button>
              )}
              {missedComma && <span className="text-sm font-black text-yellow-400">,</span>}
            </span>
          );
        })}
      </div>
      {!submitted && (
        <motion.button className="px-6 py-2 rounded-xl text-white text-sm font-bold"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={handleCheck}>
          {lbl.checkLabel}
        </motion.button>
      )}
    </div>
  );
}

const UND_ODER_QUIZ = [
  { sentence: "Ich esse Brot und Käse.", needsComma: false },
  { sentence: "Wir spielen Fußball, Tennis und Volleyball.", needsComma: false },
  { sentence: "Er liest ein Buch oder schläft.", needsComma: false },
  { sentence: "Anna, Ben und Clara kommen.", needsComma: false },
  { sentence: "Sie trinkt Tee oder Kaffee.", needsComma: false },
  { sentence: "Der Hund, die Katze und der Vogel spielen.", needsComma: false },
];

function Round4({
  color,
  lbl,
  wrongCountRef,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
}) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<boolean | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = UND_ODER_QUIZ[qi];

  const handleSelect = (val: boolean) => {
    if (revealed) return;
    setSelected(val);
    setRevealed(true);
    if (val !== q.needsComma) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: "", correctAnswer: "", topic: "Punctuation", lang: "de" });
    }
  };
  const handleNext = () => {
    if (qi + 1 >= UND_ODER_QUIZ.length) onNext();
    else { setQi(qi + 1); setSelected(null); setRevealed(false); }
  };
  const isCorrect = selected === q.needsComma;

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round4}</div>
      <div className="px-4 py-2 rounded-2xl border text-sm font-semibold text-white/85 text-center"
        style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}>{q.sentence}</div>
      <p className="text-xs text-white/60 text-center">{lbl.beforeUnd}</p>
      <div className="flex gap-3">
        {[true, false].map(val => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)";
          if (revealed) {
            if (val === q.needsComma) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === val) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === val) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={String(val)}
              className="px-5 py-2.5 rounded-xl font-black text-sm border-2 text-white"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.92 }} onClick={() => handleSelect(val)}>
              {val ? lbl.yes : lbl.no}
            </motion.button>
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

const SPELL_QUIZ = [
  { question: "fahren", options: ["faren", "fahren", "faahren"], correct: 1 },
  { question: "Straße, Schuh, Tier", options: ["Strase, Schuh, Tier", "Straße, Schuuh, Tier", "Straße, Schuh, Tier"], correct: 2 },
  { question: "Wohnung", options: ["Wonnung", "Wohnung", "Woohnung"], correct: 1 },
  { question: "sehen", options: ["seen", "sehen", "seehen"], correct: 1 },
  { question: "Uhr", options: ["ur", "uhr", "uuhr"], correct: 1 },
];

function Round5({
  color,
  lbl,
  wrongCountRef,
  onDone,
  lang,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onDone: () => void;
  lang: string;
}) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = SPELL_QUIZ[qi];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i !== q.correct) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: String(i), correctAnswer: String(q.correct), topic: "Punctuation", lang: "de" });
    }
  };
  const handleNext = () => {
    if (qi + 1 >= SPELL_QUIZ.length) onDone();
    else { setQi(qi + 1); setSelected(null); setRevealed(false); }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round5}</div>
      <p className="text-sm font-bold text-white/80">{lbl.chooseRight}</p>
      <div className="flex items-center justify-center gap-2 px-4">
        <span className="text-base font-black text-white">{q.question}</span>
        <SpeakButton text={q.question} lang={"de"} size={16} />
      </div>
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
          {qi + 1 >= SPELL_QUIZ.length ? lbl.done : lbl.next}
        </motion.button>
      )}
    </div>
  );
}

const PunctuationExplorer = memo(function PunctuationExplorer({
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
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} lang={lang} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});
export default PunctuationExplorer;
