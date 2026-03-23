"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Rechtschreibung K3",
    round1: "ie oder i?",
    round2: "ss oder ß?",
    round3: "Doppelkonsonant finden",
    round4: "Lücke füllen",
    round5: "Rechtschreibungs-Quiz!",
    next: "Weiter →",
    done: "Fertig! 🌟",
    wrong: "Nicht ganz!",
    longI: "Langer i-Laut → ie",
    shortI: "Kurzer i-Laut → i",
    shortVowel: "Kurzer Vokal → ss",
    longVowel: "Langer Vokal → ß",
    tapDouble: "Tippe den Doppelkonsonanten",
    chooseRight: "Wähle die richtige Schreibweise",
    checkLabel: "Prüfen ✓",
    ieWords: "ie-Wörter",
    iWords: "i-Wörter",
    rule: "Regel",
    discovery: "💡 ie macht einen langen 'i'-Laut (Tier, Spiel). Nach kurzen Vokalen verdoppeln sich Konsonanten (Sonne, Wasser). Diese Muster helfen dir, richtig zu schreiben!",
  },
  en: {
    title: "Spelling Rules K3",
    round1: "ie or i?",
    round2: "ss or ß?",
    round3: "Find the double consonant",
    round4: "Fill the gap",
    round5: "Spelling quiz!",
    next: "Next →",
    done: "Done! 🌟",
    wrong: "Not quite!",
    longI: "Long 'i' sound → ie",
    shortI: "Short 'i' sound → i",
    shortVowel: "Short vowel → ss",
    longVowel: "Long vowel → ß",
    tapDouble: "Tap the double consonant",
    chooseRight: "Choose the correct spelling",
    checkLabel: "Check ✓",
    ieWords: "ie-words",
    iWords: "i-words",
    rule: "Rule",
    discovery: "💡 ie makes a long 'i' sound (Tier, Spiel). After short vowels, consonants double (Sonne, Wasser). These patterns help you spell correctly!",
  },
  hu: {
    title: "Helyesírás K3",
    round1: "ie vagy i?",
    round2: "ss vagy ß?",
    round3: "Keresd a kettős mássalhangzót",
    round4: "Töltsd ki a rést",
    round5: "Helyesírás kvíz!",
    next: "Tovább →",
    done: "Kész! 🌟",
    wrong: "Nem quite!",
    longI: "Hosszú 'i' hang → ie",
    shortI: "Rövid 'i' hang → i",
    shortVowel: "Rövid magánhangzó → ss",
    longVowel: "Hosszú magánhangzó → ß",
    tapDouble: "Koppints a kettős mássalhangzóra",
    chooseRight: "Válaszd a helyes írásmódot",
    checkLabel: "Ellenőrzés ✓",
    ieWords: "ie-szavak",
    iWords: "i-szavak",
    rule: "Szabály",
    discovery: "💡 Az ie hosszú 'i' hangot jelent (Tier, Spiel). Rövid magánhangzó után a mássalhangzók megkettőznek (Sonne, Wasser). Ezek a minták segítenek helyesen írni!",
  },
  ro: {
    title: "Ortografie K3",
    round1: "ie sau i?",
    round2: "ss sau ß?",
    round3: "Găsește consoanele duble",
    round4: "Completează spațiul",
    round5: "Quiz ortografie!",
    next: "Mai departe →",
    done: "Gata! 🌟",
    wrong: "Nu chiar!",
    longI: "Sunet lung 'i' → ie",
    shortI: "Sunet scurt 'i' → i",
    shortVowel: "Vocală scurtă → ss",
    longVowel: "Vocală lungă → ß",
    tapDouble: "Apasă consoana dublă",
    chooseRight: "Alege grafia corectă",
    checkLabel: "Verifică ✓",
    ieWords: "cuvinte cu ie",
    iWords: "cuvinte cu i",
    rule: "Regulă",
    discovery: "💡 ie face un sunet lung 'i' (Tier, Spiel). După vocale scurte, consoanele se dublează (Sonne, Wasser). Aceste modele te ajută să scrii corect!",
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

// Helper: shuffle array
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const IE_WORDS = ["Brief", "Spiel", "Tier", "Liebe", "Dieb"];
const I_WORDS = ["mit", "bin", "im"];

function Round1({ color, lbl, onNext, showTeach = false }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach?: boolean }) {
  const [teach, setTeach] = useState(showTeach);
  const ieColor = "#3b82f6";
  const iColor = "#ef4444";

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">Das Muster "ie" macht den langen i-Laut (Tier, Spiel). Nach kurzen Vokalen verdoppeln sich Konsonanten: Sonne, Wasser. Diese Regeln helfen dir, richtig zu schreiben!</p>
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
      {/* ie rule */}
      <div className="w-full px-1">
        <div className="px-3 py-2 rounded-xl border-2 mb-2"
          style={{ borderColor: ieColor, background: `${ieColor}18` }}>
          <div className="text-xs font-bold mb-1" style={{ color: ieColor }}>📘 {lbl.rule}: {lbl.longI}</div>
          <div className="flex flex-wrap gap-2">
            {IE_WORDS.map(w => {
              const idx = w.toLowerCase().indexOf("ie");
              return (
                <span key={w} className="px-2 py-1 rounded-lg text-sm font-bold bg-white/08 text-white/80">
                  {w.slice(0, idx)}
                  <span className="font-black underline" style={{ color: ieColor }}>{w.slice(idx, idx + 2)}</span>
                  {w.slice(idx + 2)}
                </span>
              );
            })}
          </div>
        </div>
        {/* i rule */}
        <div className="px-3 py-2 rounded-xl border-2"
          style={{ borderColor: iColor, background: `${iColor}18` }}>
          <div className="text-xs font-bold mb-1" style={{ color: iColor }}>📕 {lbl.rule}: {lbl.shortI}</div>
          <div className="flex flex-wrap gap-2">
            {I_WORDS.map(w => {
              const idx = w.toLowerCase().indexOf("i");
              return (
                <span key={w} className="px-2 py-1 rounded-lg text-sm font-bold bg-white/08 text-white/80">
                  {w.slice(0, idx)}
                  <span className="font-black underline" style={{ color: iColor }}>{w.slice(idx, idx + 1)}</span>
                  {w.slice(idx + 1)}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
        style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
    </div>
  );
}

const SS_PAIRS = [
  { word: "Fluss", rule: "ss", short: true },
  { word: "Wasser", rule: "ss", short: true },
  { word: "muss", rule: "ss", short: true },
  { word: "Straße", rule: "ß", short: false },
  { word: "Fuß", rule: "ß", short: false },
  { word: "groß", rule: "ß", short: false },
];

function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const ssColor = "#3b82f6";
  const szColor = "#f59e0b";
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const tap = (i: number) => setRevealed(prev => { const n = new Set(prev); n.add(i); return n; });
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round2}</div>
      <div className="flex gap-2">
        <span className="text-xs font-bold px-2 py-1 rounded-lg"
          style={{ background: `${ssColor}22`, color: ssColor }}>{lbl.shortVowel}</span>
        <span className="text-xs font-bold px-2 py-1 rounded-lg"
          style={{ background: `${szColor}22`, color: szColor }}>{lbl.longVowel}</span>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full px-1">
        {SS_PAIRS.map((p, i) => {
          const pc = p.short ? ssColor : szColor;
          const ruleStr = p.rule;
          const displayWord = p.word.replace(ruleStr, `[${ruleStr}]`);
          const parts = displayWord.split(`[${ruleStr}]`);
          return (
            <motion.button key={p.word}
              className="p-2.5 rounded-xl border-2 text-center"
              style={{
                borderColor: revealed.has(i) ? pc : "rgba(255,255,255,0.12)",
                background: revealed.has(i) ? `${pc}18` : "rgba(255,255,255,0.04)",
              }}
              whileTap={{ scale: 0.95 }} onClick={() => tap(i)}>
              <div className="text-sm font-bold text-white/85">
                {parts[0]}
                <span style={{ color: pc, fontWeight: 900 }}>{ruleStr}</span>
                {parts[1] ?? ""}
              </div>
              {revealed.has(i) && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-xs font-bold mt-0.5" style={{ color: pc }}>
                  {p.short ? "kurz" : "lang"}
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
      {revealed.size >= 4 && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const DOUBLE_WORDS = [
  { word: "Spinne", doubled: "nn" },
  { word: "Brummen", doubled: "mm" },
  { word: "rennen", doubled: "nn" },
  { word: "sitzen", doubled: "tz" },
];

function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Record<string, boolean>>({});

  const handleTap = (wordKey: string, doubled: string, letterIdx: number) => {
    setTapped(prev => ({ ...prev, [wordKey]: true }));
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round3}</div>
      <p className="text-xs text-white/60 text-center">{lbl.tapDouble}</p>
      <div className="w-full flex flex-col gap-2 px-1">
        {DOUBLE_WORDS.map(dw => {
          const isDone = tapped[dw.word];
          const idx = dw.word.toLowerCase().indexOf(dw.doubled.toLowerCase());
          return (
            <div key={dw.word} className="flex gap-1 justify-center">
              {dw.word.split("").map((ch, i) => {
                const isDouble = i === idx || i === idx + 1;
                const isSecondChar = dw.doubled.length === 2 && i === idx + 1;
                return (
                  <motion.button key={`${dw.word}-${i}`}
                    className="w-9 h-10 rounded-lg border-2 font-black text-base flex items-center justify-center"
                    style={{
                      borderColor: isDone && isDouble ? color : "rgba(255,255,255,0.15)",
                      background: isDone && isDouble ? `${color}33` : "rgba(255,255,255,0.06)",
                      color: isDone && isDouble ? "#fff" : "rgba(255,255,255,0.75)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleTap(dw.word, dw.doubled, i)}>
                    {ch}
                  </motion.button>
                );
              })}
            </div>
          );
        })}
      </div>
      {Object.keys(tapped).length >= DOUBLE_WORDS.length && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const GAP_ITEMS = [
  { display: "Fl_ss", root: "Flu", options: ["u+ss", "u+ß", "u+s"], correct: 0, answer: "Fluss" },
  { display: "F_ß", root: "Fu", options: ["u+ss", "u+ß", "ü+ß"], correct: 1, answer: "Fuß" },
  { display: "Stra_e", root: "Straß", options: ["ss+e", "ß+e", "sz+e"], correct: 1, answer: "Straße" },
  { display: "m_ss", root: "mu", options: ["u+ss", "u+ß", "u+s"], correct: 0, answer: "muss" },
];

function Round4({ color, lbl, wrongCountRef, onNext }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onNext: () => void }) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = GAP_ITEMS[qi];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i !== q.correct) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: q.display, wrongAnswer: String(i), correctAnswer: String(q.correct), topic: "Spelling", lang: "de" });
    }
  };
  const handleNext = () => {
    if (qi + 1 >= GAP_ITEMS.length) onNext();
    else { setQi(qi + 1); setSelected(null); setRevealed(false); }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round4}</div>
      <div className="text-2xl font-black text-white">
        {q.display.replace("_", "")}<span style={{ color }}>___</span>
      </div>
      <div className="flex gap-2 justify-center flex-wrap">
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === i) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={opt}
              className="px-4 py-2.5 rounded-xl font-black text-sm border-2 text-white"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.92 }} onClick={() => handleSelect(i)}>{opt}</motion.button>
          );
        })}
      </div>
      {revealed && (
        <div className="text-base font-bold" style={{ color: "#22c55e" }}>→ {q.answer}</div>
      )}
      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={handleNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const SPELL_QUIZ = [
  { question: "Tier", options: ["Tir", "Tier", "Teer"], correct: 1 },
  { question: "rennen", options: ["renen", "rennen", "renenn"], correct: 1 },
  { question: "Straße", options: ["Strasse", "Strase", "Straße"], correct: 2 },
];

function Round5({ color, lbl, wrongCountRef, onDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void }) {
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
      fireWrongAnswer({ question: q.question, wrongAnswer: String(i), correctAnswer: String(q.correct), topic: "Spelling", lang: "de" });
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
      <div className="flex items-center justify-center gap-2">
        <span className="text-2xl font-black text-white">{q.question}</span>
        <SpeakButton text={q.question} lang="de" size={16} />
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

const SpellingK3Explorer = memo(function SpellingK3Explorer({
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
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});
export default SpellingK3Explorer;
