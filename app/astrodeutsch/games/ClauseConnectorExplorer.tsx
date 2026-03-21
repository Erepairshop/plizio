"use client";
// ClauseConnectorExplorer — Island i6: Relativsatz & Kausalsatz (K6)
// Teaches: Relativsatz anatomy, Relativpronomen table, Kausalsatz verb-end, SentenceReorder, MCQ

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import TapToHighlight from "./blocks/TapToHighlight";
import SentenceReorder from "./blocks/SentenceReorder";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Clauses & Connectors",
    round1Title: "Relative Clauses",
    round1Hint: "Tap to highlight each part of the sentence!",
    round2Title: "Relative Pronouns",
    round2Hint: "Tap to match: which relative pronoun goes with which noun?",
    round3Title: "weil / da / denn",
    round3Hint: "With 'weil', the verb goes to the END. Tap to highlight it!",
    round4Title: "Build a Relative Clause",
    round4Hint: "Put the words in the correct order!",
    round5Title: "Choose the Right Word",
    round5Hint: "Pick the correct relative pronoun or conjunction.",
    next: "Next",
    finish: "Finished!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    check: "Check",
    main: "Main clause",
    rel: "Relative pronoun",
    relClause: "Relative clause",
    verbEnd: "verb goes to end!",
    discovery: "💡 Relative clauses give extra info about a noun: 'Der Mann, DER dort steht, ist mein Lehrer.' The relative pronoun (der/die/das) matches the noun's gender!",
  },
  hu: {
    title: "Mellékmondatok",
    round1Title: "Vonatkozói mellékmondat",
    round1Hint: "Koppints a mondat egyes részeinek kiemelésére!",
    round2Title: "Vonatkozói névmások",
    round2Hint: "Koppints: melyik vonatkozói névmás melyik főnévhez illik?",
    round3Title: "weil / da / denn",
    round3Hint: "A 'weil' után az ige a VÉGÉRE kerül. Koppints rá!",
    round4Title: "Rakj össze egy vonatkozói mondatot!",
    round4Hint: "Tedd a szavakat helyes sorrendbe!",
    round5Title: "Válaszd ki a helyes szót!",
    round5Hint: "Válassz helyes vonatkozói névmást vagy kötőszót.",
    next: "Tovább",
    finish: "Kész!",
    tapToReveal: "Koppints",
    correct: "Helyes!",
    check: "Ellenőrzés",
    main: "Főmondat",
    rel: "Vonatkozói névmás",
    relClause: "Vonatkozói mellékmondat",
    verbEnd: "az ige a végére kerül!",
    discovery: "💡 A vonatkozói mellékmondatok egy főnévről adnak plusz információt: 'Der Mann, DER dort steht, ist mein Lehrer.' A vonatkozói névmás (der/die/das) megegyezik a főnév nemével!",
  },
  de: {
    title: "Nebensätze",
    round1Title: "Relativsatz",
    round1Hint: "Tippe auf jeden Teil des Satzes!",
    round2Title: "Relativpronomen",
    round2Hint: "Tippe: Welches Relativpronomen passt zu welchem Nomen?",
    round3Title: "weil / da / denn",
    round3Hint: "Nach 'weil' steht das Verb am ENDE. Tippe darauf!",
    round4Title: "Bau einen Relativsatz!",
    round4Hint: "Bringe die Wörter in die richtige Reihenfolge!",
    round5Title: "Richtiges Wort wählen",
    round5Hint: "Wähle das richtige Relativpronomen oder die Konjunktion.",
    next: "Weiter",
    finish: "Fertig!",
    tapToReveal: "Antippen",
    correct: "Richtig!",
    check: "Prüfen",
    main: "Hauptsatz",
    rel: "Relativpronomen",
    relClause: "Relativsatz",
    verbEnd: "Verb ans Ende!",
    discovery: "💡 Relativsätze geben extra Info über ein Nomen: 'Der Mann, DER dort steht, ist mein Lehrer.' Das Relativpronomen (der/die/das) passt zum Genus des Nomens!",
  },
  ro: {
    title: "Propoziții subordonate",
    round1Title: "Propoziție relativă",
    round1Hint: "Atinge fiecare parte a propoziției!",
    round2Title: "Pronume relative",
    round2Hint: "Atinge: care pronume relativ se potrivește cu ce substantiv?",
    round3Title: "weil / da / denn",
    round3Hint: "După 'weil', verbul merge la FINAL. Atinge-l!",
    round4Title: "Construiește o propoziție relativă!",
    round4Hint: "Pune cuvintele în ordinea corectă!",
    round5Title: "Alege cuvântul corect",
    round5Hint: "Alege pronumele relativ sau conjuncția corectă.",
    next: "Înainte",
    finish: "Gata!",
    tapToReveal: "Atinge",
    correct: "Corect!",
    check: "Verifică",
    main: "Propoziție principală",
    rel: "Pronume relativ",
    relClause: "Propoziție relativă",
    verbEnd: "verbul la final!",
    discovery: "💡 Propozițiile relative dau info suplimentară despre un substantiv: 'Der Mann, DER dort steht, ist mein Lehrer.' Pronumele relativ (der/die/das) se potrivește cu genul substantivului!",
  },
};

// Round 1 TapToHighlight — tap different parts
const REL_SENTENCE = "Das ist der Mann, der Deutsch spricht.";
// Indices: "Das"=0, "ist"=1, "der"=2, "Mann,"=3, "der"=4, "Deutsch"=5, "spricht."=6
const REL_PARTS = [
  { label: "Relativpronomen", indices: [4], color: "#FF9500" },
  { label: "Hauptsatz", indices: [0, 1, 2, 3], color: "#3B82F6" },
  { label: "Relativsatz", indices: [4, 5, 6], color: "#10B981" },
];

// Round 2 — Relativpronomen table tap
const REL_TABLE = [
  { noun: "der Mann", pronomen: "der", example: "Der Mann, der kommt..." },
  { noun: "die Frau", pronomen: "die", example: "Die Frau, die lacht..." },
  { noun: "das Kind", pronomen: "das", example: "Das Kind, das spielt..." },
];

// Round 3 TapToHighlight verb in weil sentence
const WEIL_SENTENCES = [
  { sentence: "Er bleibt zuhause, weil er krank ist.", correctIndices: [7], verbEnd: "ist" },
];

// Round 4 SentenceReorder
const REORDER_WORDS = ["der", "Das", "kommt.", "Mann,", "aus Berlin"];
const REORDER_CORRECT = ["Das", "Mann,", "der", "aus Berlin", "kommt."];

// Round 5 MCQ
const MCQ5 = [
  { sentence: "Das ist die Frau, ___ hier arbeitet.", options: ["die", "der", "das"], correct: "die" },
  { sentence: "Er bleibt zuhause, ___ er krank ist.", options: ["weil", "denn", "aber"], correct: "weil" },
  { sentence: "Das ist das Buch, ___ ich lese.", options: ["das", "die", "der"], correct: "das" },
  { sentence: "Das ist der Mann, ___ dort steht.", options: ["der", "die", "das"], correct: "der" },
  { sentence: "Sie arbeitet, ___ sie Geld verdienen muss.", options: ["weil", "obwohl", "wenn"], correct: "weil" },
  { sentence: "Das sind die Kinder, ___ spielen.", options: ["die", "der", "das"], correct: "die" },
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

function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [partIdx, setPartIdx] = useState(0);
  const done = partIdx >= REL_PARTS.length;
  const words = REL_SENTENCE.split(" ");
  const currentPart = done ? null : REL_PARTS[partIdx];

  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="w-full rounded-2xl p-4"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
        <div className="flex flex-wrap gap-1.5 justify-center">
          {words.map((w, i) => {
            const highlighted = REL_PARTS.slice(0, partIdx).find(p => p.indices.includes(i));
            return (
              <span key={i} className="px-2 py-1 rounded-lg text-sm font-bold border-2 transition-all"
                style={{
                  background: highlighted ? `${highlighted.color}22` : "rgba(255,255,255,0.06)",
                  borderColor: highlighted ? highlighted.color : "rgba(255,255,255,0.12)",
                  color: highlighted ? highlighted.color : "rgba(255,255,255,0.8)",
                }}>
                {w}
              </span>
            );
          })}
        </div>
      </div>
      {currentPart && (
        <motion.button
          className="w-full py-3 rounded-2xl font-black text-sm"
          style={{ background: `${currentPart.color}22`, border: `2px solid ${currentPart.color}55`, color: currentPart.color }}
          onClick={() => setPartIdx(i => i + 1)}
          whileTap={{ scale: 0.97 }}>
          ▶ {currentPart.label}
        </motion.button>
      )}
      {done && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= REL_TABLE.length;
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex flex-col gap-2">
        {REL_TABLE.map((row, i) => {
          const open = revealed.has(i);
          return (
            <motion.button key={i}
              className="w-full rounded-2xl p-3 flex items-center gap-3 text-left"
              style={{
                background: open ? `${color}12` : "rgba(255,255,255,0.04)",
                border: `2px solid ${open ? color : "rgba(255,255,255,0.1)"}`,
              }}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              whileTap={!open ? { scale: 0.97 } : {}}>
              <span className="font-bold text-white/70 min-w-20">{row.noun}</span>
              <span className="text-white/30">→</span>
              {open ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <span className="font-black text-lg" style={{ color }}>{row.pronomen}</span>
                  <span className="text-white/40 text-xs ml-2 italic">{row.example}</span>
                </motion.div>
              ) : (
                <span className="text-white/20 font-black text-lg">?</span>
              )}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const item = WEIL_SENTENCES[0];
  const handleDone = (_: boolean) => setTimeout(onNext, 900);
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="w-full rounded-2xl p-3 text-center"
        style={{ background: `${color}12`, border: `2px solid ${color}33` }}>
        <p className="text-xs font-bold" style={{ color }}>
          weil → {lbl.verbEnd}
        </p>
      </div>
      <TapToHighlight
        sentence={item.sentence}
        correctIndices={item.correctIndices}
        color={color}
        label={`Tippe auf: "${item.verbEnd}"`}
        checkLabel={lbl.check}
        onDone={handleDone}
      />
    </div>
  );
}

function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <SentenceReorder words={REORDER_WORDS} correct={REORDER_CORRECT} color={color}
        onDone={(_) => { setDone(true); setTimeout(onNext, 1000); }} />
      {done && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

function Round5({
  color,
  lbl,
  wrongCountRef,
  onDone,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MCQ5[idx];
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.correct) {
      wrongCountRef.current++;
    }
    setTimeout(() => {
      if (idx + 1 >= MCQ5.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 justify-center">
        {MCQ5.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-lg">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: selected === item.correct ? "#00FF88" : "#FF6B6B" }}>
              {selected === item.correct ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="flex-1 py-3 rounded-xl font-black text-lg"
            style={{
              background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

const ClauseConnectorExplorer = memo(function ClauseConnectorExplorer({
  color, lang = "de", onDone,
}: {
  color: string; lang?: string; onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 5;
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
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ClauseConnectorExplorer;
