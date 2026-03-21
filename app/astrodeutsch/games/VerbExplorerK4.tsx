"use client";
// VerbExplorerK4 — Island i7: Verben & Futur (K4)
// Teaches: separable verbs (trennbare Verben), Futur I formation & conjugation

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Verb Explorer",
    round1Title: "Separable Verbs",
    round1Hint: "The prefix jumps to the end! Tap to see the split.",
    round2Title: "Common Separable Verbs",
    round2Hint: "Tap each verb to see how it splits in a sentence.",
    round3Title: "Futur I — Formation",
    round3Hint: "Futur I = werden + Infinitive. Tap to see examples.",
    round4Title: "werden Conjugation",
    round4Hint: "Tap each person to reveal their werden form.",
    round5Title: "Futur I or Separable?",
    round5Hint: "Identify the verb type in each sentence.",
    round5Discovery: "💡 Verbs change form based on tense (past/present/future) and person. Learning the patterns helps you conjugate ANY verb!",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    futur: "Futur I",
    separable: "Separable Verb",
  },
  hu: {
    title: "Ige felfedező",
    round1Title: "Elváló igék",
    round1Hint: "Az előtag a VÉGÉRE ugrik! Koppints a szétválasztás megtekintéséhez.",
    round2Title: "Közönséges elváló igék",
    round2Hint: "Koppints minden igére a mondat közbeni szétválasztás megtekintéséhez.",
    round3Title: "Futur I — Képzés",
    round3Hint: "Futur I = werden + főnévi igenév. Koppints a példák megtekintéséhez.",
    round4Title: "werden ragozása",
    round4Hint: "Koppints minden személyre a werden alak felfedéséhez.",
    round5Title: "Futur I vagy elváló ige?",
    round5Hint: "Azonosítsd az igetípust minden mondatban.",
    round5Discovery: "💡 Az igék az idő (múlt/jelen/jövő) és a személy alapján megváltoznak. A minták megtanulása segít BÁRMELY igét ragozni!",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    futur: "Futur I",
    separable: "Elváló ige",
  },
  de: {
    title: "Verben-Entdecker",
    round1Title: "Trennbare Verben",
    round1Hint: "Die Vorsilbe springt ans Ende! Tippe, um die Trennung zu sehen.",
    round2Title: "Häufige trennbare Verben",
    round2Hint: "Tippe auf jedes Verb, um zu sehen wie es im Satz getrennt wird.",
    round3Title: "Futur I — Bildung",
    round3Hint: "Futur I = werden + Infinitiv. Tippe für Beispiele.",
    round4Title: "werden-Konjugation",
    round4Hint: "Tippe auf jede Person, um ihre werden-Form aufzudecken.",
    round5Title: "Futur I oder trennbar?",
    round5Hint: "Bestimme den Verbtyp in jedem Satz.",
    round5Discovery: "💡 Verben ändern ihre Form je nach Zeitform (Vergangenheit/Gegenwart/Zukunft) und Person. Das Erlernen der Muster hilft dir, JEDES Verb zu konjugieren!",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    futur: "Futur I",
    separable: "Trennbares Verb",
  },
  ro: {
    title: "Exploratorul verbelor",
    round1Title: "Verbe separabile",
    round1Hint: "Prefixul sare la FINAL! Atinge pentru a vedea separarea.",
    round2Title: "Verbe separabile comune",
    round2Hint: "Atinge fiecare verb pentru a vedea cum se separă în propoziție.",
    round3Title: "Futur I — Formare",
    round3Hint: "Futur I = werden + infinitiv. Atinge pentru exemple.",
    round4Title: "Conjugarea verbului werden",
    round4Hint: "Atinge fiecare persoană pentru a dezvălui forma sa de werden.",
    round5Title: "Futur I sau separabil?",
    round5Hint: "Identifică tipul de verb din fiecare propoziție.",
    round5Discovery: "💡 Verbele schimbă forma în funcție de timp (trecut/prezent/viitor) și persoană. Învățarea modelelor te ajută să conjugi ORICE verb!",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    futur: "Futur I",
    separable: "Verb separabil",
  },
};

const SEP_INTRO = [
  { full: "aufmachen", prefix: "auf", stem: "machen", sentence: "Ich mache die Tür auf.", emoji: "🚪" },
  { full: "anrufen", prefix: "an", stem: "rufen", sentence: "Er ruft seine Mutter an.", emoji: "📱" },
  { full: "aufstehen", prefix: "auf", stem: "stehen", sentence: "Sie steht früh auf.", emoji: "🌅" },
];

const SEP_VERBS = [
  { verb: "einladen", prefix: "ein", sentence: "Er lädt seine Freunde ein.", emoji: "🎉" },
  { verb: "zumachen", prefix: "zu", sentence: "Sie macht das Fenster zu.", emoji: "🪟" },
  { verb: "aufräumen", prefix: "auf", sentence: "Ich räume mein Zimmer auf.", emoji: "🧹" },
  { verb: "mitnehmen", prefix: "mit", sentence: "Er nimmt sein Heft mit.", emoji: "📓" },
];

const FUTUR_EXAMPLES = [
  { person: "Ich", werden: "werde", verb: "spielen", full: "Ich werde spielen.", emoji: "⚽" },
  { person: "Er", werden: "wird", verb: "lernen", full: "Er wird lernen.", emoji: "📚" },
  { person: "Wir", werden: "werden", verb: "reisen", full: "Wir werden reisen.", emoji: "✈️" },
];

const WERDEN_CONJ = [
  { person: "ich", form: "werde" },
  { person: "du", form: "wirst" },
  { person: "er/sie/es", form: "wird" },
  { person: "wir", form: "werden" },
  { person: "ihr", form: "werdet" },
  { person: "sie/Sie", form: "werden" },
];

const VERB_TYPE_QUIZ = [
  { sentence: "Ich werde morgen kommen.", type: "futur", options: ["futur", "separable"] },
  { sentence: "Er ruft seine Oma an.", type: "separable", options: ["futur", "separable"] },
  { sentence: "Wir werden das Buch lesen.", type: "futur", options: ["futur", "separable"] },
  { sentence: "Sie macht die Tür auf.", type: "separable", options: ["futur", "separable"] },
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

// ─── Round 1: Separable verbs intro ───────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);

  const item = SEP_INTRO[idx];
  const handleNext = () => {
    if (idx + 1 >= SEP_INTRO.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex gap-1">
        {SEP_INTRO.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.full} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <span className="text-4xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="font-black text-xl" style={{ color }}>
              {item.prefix}
            </span>
            <span className="font-black text-xl text-white">+{item.stem}</span>
            <span className="text-white/40 text-xl">=</span>
            <span className="font-black text-xl text-white">{item.full}</span>
          </div>
          {!tapped ? (
            <motion.button onClick={() => setTapped(true)}
              className="px-5 py-2 rounded-xl text-sm font-black"
              style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
              whileTap={{ scale: 0.95 }}>
              {lbl.tapToReveal}
            </motion.button>
          ) : (
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <p className="text-white/80 text-base font-bold">
                {item.sentence.split(item.prefix).map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && <span style={{ color }} className="font-black">{item.prefix}</span>}
                  </span>
                ))}
              </p>
              <p className="text-white/40 text-xs mt-1">Vorsilbe am Ende!</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 2: Common separable verbs ─────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= SEP_VERBS.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {SEP_VERBS.map((item, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={item.verb}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.96 } : {}}>
              <div className="flex items-center gap-1">
                <span className="text-xl">{item.emoji}</span>
                <span className="font-black text-sm" style={{ color }}>{item.verb}</span>
              </div>
              {isOpen ? (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-white/70 text-[11px]">{item.sentence}</motion.p>
              ) : (
                <p className="text-white/30 text-xs">{lbl.tapToReveal}</p>
              )}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 3: Futur I formation ───────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);

  const item = FUTUR_EXAMPLES[idx];
  const handleNext = () => {
    if (idx + 1 >= FUTUR_EXAMPLES.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1">
        {FUTUR_EXAMPLES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.person} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <span className="text-4xl">{item.emoji}</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="font-bold text-white text-lg">{item.person}</span>
            <span className="font-black text-xl" style={{ color }}>{item.werden}</span>
            <span className="font-black text-xl text-white/60">{item.verb}</span>
          </div>
          {!tapped ? (
            <motion.button onClick={() => setTapped(true)}
              className="px-5 py-2 rounded-xl text-sm font-black"
              style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
              whileTap={{ scale: 0.95 }}>
              {lbl.tapToReveal}
            </motion.button>
          ) : (
            <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              className="text-white font-bold text-lg text-center">
              ✅ {item.full}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: werden conjugation ──────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= WERDEN_CONJ.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {WERDEN_CONJ.map((item, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={item.person}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="rounded-xl p-3 flex items-center gap-2"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.96 } : {}}>
              <span className="text-white/60 text-sm font-bold w-16 text-left">{item.person}</span>
              <span className="font-black text-base" style={{ color: isOpen ? color : "rgba(255,255,255,0.2)" }}>
                {isOpen ? item.form : "?"}
              </span>
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: Futur I or Separable MCQ ────────────────────────────────────────
function Round5({
  color,
  lbl,
  onDone,
  wrongCountRef,
}: {
  color: string;
  lbl: Record<string, string>;
  onDone: () => void;
  wrongCountRef: React.MutableRefObject<number>;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const item = VERB_TYPE_QUIZ[idx];
  const isCorrect = selected === item.type;

  const handleSelect = (opt: string) => {
    if (selected) return;
    const correct = opt === item.type;
    if (!correct) {
      wrongCountRef.current++;
    }
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= VERB_TYPE_QUIZ.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, correct ? 800 : 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-2xl px-4 py-3 text-center"
          style={{ background: "rgba(180,77,255,0.1)", border: "2px solid rgba(180,77,255,0.3)" }}>
          <p className="text-[#B44DFF] font-black text-sm">{lbl.round5Discovery}</p>
        </motion.div>
        <motion.button onClick={onDone}
          className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
          style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
          whileTap={{ scale: 0.97 }}>
          {lbl.finish} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {VERB_TYPE_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-base">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${lbl[item.type]}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {item.options.map(opt => {
          const correctOpt = opt === item.type;
          const shouldShowCorrect = selected && correctOpt;
          const shouldShowWrong = selected && selected === opt && !correctOpt;
          return (
            <motion.button key={opt}
              onClick={() => handleSelect(opt)}
              className="flex-1 py-3 rounded-xl font-black text-sm"
              style={{
                background: shouldShowCorrect
                  ? "rgba(0,255,136,0.2)"
                  : shouldShowWrong
                    ? "rgba(255,45,120,0.2)"
                    : "rgba(255,255,255,0.06)",
                border: `2px solid ${
                  shouldShowCorrect
                    ? "#00FF88"
                    : shouldShowWrong
                      ? "#FF2D78"
                      : "rgba(255,255,255,0.2)"
                }`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "white",
              }}
              whileTap={!selected ? { scale: 0.93 } : {}}>
              {lbl[opt]}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const VerbExplorerK4 = memo(function VerbExplorerK4({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 5;

  // Error tracking
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
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onDone={finish} wrongCountRef={wrongCountRef} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default VerbExplorerK4;
