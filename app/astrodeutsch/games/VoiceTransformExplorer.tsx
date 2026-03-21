"use client";
// VoiceTransformExplorer — Island i1: Aktiv & Passiv (K6)
// Teaches: Active/Passive overview, werden+Partizip II, sentence ordering, von-Agent, MCQ

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SentenceReorder from "./blocks/SentenceReorder";
import TapToHighlight from "./blocks/TapToHighlight";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Active & Passive Voice",
    round1Title: "Active ↔ Passive",
    round1Hint: "Tap each sentence to see what changes!",
    round1Discovery: "💡 To transform active → passive: the object becomes subject, use 'werden' + Partizip II, and the original subject becomes 'von + Dativ' (optional).",
    round2Title: "How to Form Passive",
    round2Hint: "Tap to reveal each form of 'werden' + Partizip II.",
    round3Title: "Build the Passive Sentence",
    round3Hint: "Put the words in the right order!",
    round4Title: "The 'von' Agent",
    round4Hint: "Tap the 'von + Dativ' part in each sentence.",
    round5Title: "Active or Passive?",
    round5Hint: "Choose the correct passive form.",
    next: "Next",
    finish: "Finished!",
    active: "Active",
    passive: "Passive",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    check: "Check",
    subject: "Subject",
    werden: "werden",
    partizip: "Partizip II",
    von: "von + Dativ (agent)",
  },
  hu: {
    title: "Aktív & Szenvedő alak",
    round1Title: "Aktív ↔ Szenvedő",
    round1Hint: "Koppints minden mondatra, hogy lásd mi változik!",
    round1Discovery: "💡 Az aktívból szenvedőbe való átalakításnál: a tárgy alany lesz, 'werden' + Partizip II-t használunk, az eredeti alany 'von + Dativ' lesz (opcionális).",
    round2Title: "A szenvedő alak képzése",
    round2Hint: "Koppints, hogy felfedezd a 'werden' alakjait + Partizip II.",
    round3Title: "Rakd össze a mondatot!",
    round3Hint: "Tedd a szavakat helyes sorrendbe!",
    round4Title: "A 'von' cselekvő",
    round4Hint: "Koppints a 'von + Dativ' részre minden mondatban.",
    round5Title: "Aktív vagy szenvedő?",
    round5Hint: "Válaszd ki a helyes szenvedő alakot.",
    next: "Tovább",
    finish: "Kész!",
    active: "Aktív",
    passive: "Szenvedő",
    tapToReveal: "Koppints",
    correct: "Helyes!",
    check: "Ellenőrzés",
    subject: "Alany",
    werden: "werden",
    partizip: "Partizip II",
    von: "von + Dativ (cselekvő)",
  },
  de: {
    title: "Aktiv & Passiv",
    round1Title: "Aktiv ↔ Passiv",
    round1Hint: "Tippe auf jeden Satz, um die Veränderung zu sehen!",
    round1Discovery: "💡 Bei der Umwandlung Aktiv → Passiv: Das Objekt wird zum Subjekt, 'werden' + Partizip II wird verwendet, und das ursprüngliche Subjekt wird 'von + Dativ' (optional).",
    round2Title: "Passivbildung",
    round2Hint: "Tippe, um die 'werden'-Formen + Partizip II zu entdecken.",
    round3Title: "Bau den Passivsatz!",
    round3Hint: "Bringe die Wörter in die richtige Reihenfolge!",
    round4Title: "Das 'von'-Agens",
    round4Hint: "Tippe auf den 'von + Dativ'-Teil in jedem Satz.",
    round5Title: "Aktiv oder Passiv?",
    round5Hint: "Wähle die richtige Passivform.",
    next: "Weiter",
    finish: "Fertig!",
    active: "Aktiv",
    passive: "Passiv",
    tapToReveal: "Antippen",
    correct: "Richtig!",
    check: "Prüfen",
    subject: "Subjekt",
    werden: "werden",
    partizip: "Partizip II",
    von: "von + Dativ (Agens)",
  },
  ro: {
    title: "Activ & Pasiv",
    round1Title: "Activ ↔ Pasiv",
    round1Hint: "Atinge fiecare propoziție pentru a vedea ce se schimbă!",
    round1Discovery: "💡 La transformarea activ → pasiv: obiectul devine subiect, se folosește 'werden' + Partizip II, și subiectul original devine 'von + Dativ' (opțional).",
    round2Title: "Formarea pasivului",
    round2Hint: "Atinge pentru a descoperi formele 'werden' + Partizip II.",
    round3Title: "Construiește propoziția la pasiv!",
    round3Hint: "Pune cuvintele în ordinea corectă!",
    round4Title: "Agentul 'von'",
    round4Hint: "Atinge partea 'von + Dativ' din fiecare propoziție.",
    round5Title: "Activ sau pasiv?",
    round5Hint: "Alege forma corectă de pasiv.",
    next: "Înainte",
    finish: "Gata!",
    active: "Activ",
    passive: "Pasiv",
    tapToReveal: "Atinge",
    correct: "Corect!",
    check: "Verifică",
    subject: "Subiect",
    werden: "werden",
    partizip: "Partizip II",
    von: "von + Dativ (agent)",
  },
};

const PAIRS = [
  {
    active: "Der Hund frisst den Knochen.",
    passive: "Der Knochen wird vom Hund gefressen.",
    emoji: "🦴",
  },
  {
    active: "Die Lehrerin erklärt die Aufgabe.",
    passive: "Die Aufgabe wird von der Lehrerin erklärt.",
    emoji: "📖",
  },
  {
    active: "Der Maler malt ein Bild.",
    passive: "Ein Bild wird vom Maler gemalt.",
    emoji: "🎨",
  },
  {
    active: "Die Köchin backt einen Kuchen.",
    passive: "Ein Kuchen wird von der Köchin gebacken.",
    emoji: "🍰",
  },
];

const WERDEN_FORMS = [
  { pronoun: "ich", form: "werde" },
  { pronoun: "du", form: "wirst" },
  { pronoun: "er/sie/es", form: "wird" },
  { pronoun: "wir", form: "werden" },
  { pronoun: "ihr", form: "werdet" },
  { pronoun: "sie/Sie", form: "werden" },
];

// Round 3 reorder
const REORDER_WORDS = ["wird", "Das", "gegessen.", "Brot"];
const REORDER_CORRECT = ["Das", "Brot", "wird", "gegessen."];

// Round 4 TapToHighlight sentences
const AGENT_SENTENCES = [
  { sentence: "Das Buch wird von der Lehrerin gelesen.", highlight: [5, 6, 7], agent: "von der Lehrerin" },
  { sentence: "Der Brief wurde vom Chef geschrieben.", highlight: [4, 5], agent: "vom Chef" },
];

// Round 5 MCQ
const MCQ5 = [
  { sentence: "Das Essen ___ gekocht.", options: ["wird", "ist", "hat"], correct: "wird", label: "Passiv Präsens" },
  { sentence: "Der Kuchen ___ gebacken.", options: ["wurde", "hat", "war"], correct: "wurde", label: "Passiv Präteritum" },
  { sentence: "Die Hausaufgaben ___ gemacht.", options: ["werden", "haben", "sind"], correct: "werden", label: "Passiv Präsens" },
  { sentence: "Das Fenster ___ repariert.", options: ["wird", "ist", "hat"], correct: "wird", label: "Passiv Präsens" },
  { sentence: "Der Brief ___ geschrieben.", options: ["wurde", "ist", "hat"], correct: "wurde", label: "Passiv Präteritum" },
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
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      {PAIRS.map((pair, i) => {
        const open = revealed.has(i);
        return (
          <motion.div key={i} className="w-full rounded-2xl overflow-hidden"
            style={{ border: `2px solid ${open ? color : "rgba(255,255,255,0.1)"}` }}>
            <div className="p-3" style={{ background: `${color}12` }}>
              <span className="text-xs font-black px-2 py-0.5 rounded-full mr-2"
                style={{ background: `${color}33`, color }}>
                {lbl.active}
              </span>
              <span className="text-white/80 text-sm font-semibold">{pair.emoji} {pair.active}</span>
            </div>
            <motion.button
              className="w-full p-3 text-left"
              style={{ background: open ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)" }}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              whileTap={!open ? { scale: 0.98 } : {}}>
              {open ? (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
                  <span className="text-xs font-black px-2 py-0.5 rounded-full mr-2"
                    style={{ background: "#FF950033", color: "#FF9500" }}>
                    {lbl.passive}
                  </span>
                  <span className="text-white/80 text-sm font-semibold">{pair.passive}</span>
                </motion.div>
              ) : (
                <span className="text-white/30 text-xs">{lbl.tapToReveal} → {lbl.passive}</span>
              )}
            </motion.button>
          </motion.div>
        );
      })}
      {revealed.size >= PAIRS.length && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= WERDEN_FORMS.length;
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="w-full rounded-2xl overflow-hidden" style={{ border: `2px solid ${color}33` }}>
        <div className="grid grid-cols-3 px-3 py-2 bg-white/5">
          <span className="text-white/40 text-xs font-bold">Pronomen</span>
          <span className="text-white/60 text-xs font-bold text-center" style={{ color }}>{lbl.werden}</span>
          <span className="text-white/40 text-xs font-bold text-right">{lbl.partizip}</span>
        </div>
        {WERDEN_FORMS.map((row, i) => {
          const open = revealed.has(i);
          return (
            <motion.button key={row.pronoun}
              className="w-full grid grid-cols-3 items-center px-3 py-2.5"
              style={{ background: open ? `${color}0F` : "transparent", borderTop: "1px solid rgba(255,255,255,0.06)" }}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              whileTap={!open ? { scale: 0.98 } : {}}>
              <span className="text-white/70 text-xs font-bold">{row.pronoun}</span>
              <span className="font-black text-sm text-center" style={{ color: open ? color : "rgba(255,255,255,0.2)" }}>
                {open ? row.form : "?"}
              </span>
              <span className="text-white/30 text-xs font-semibold text-right">+ Partizip II</span>
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
  const [done, setDone] = useState(false);
  const handleDone = (_: boolean) => { setDone(true); setTimeout(onNext, 1000); };
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <SentenceReorder words={REORDER_WORDS} correct={REORDER_CORRECT} color={color} onDone={handleDone} />
      {done && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const item = AGENT_SENTENCES[idx];
  const handleDone = (_: boolean) => {
    const nd = doneCount + 1;
    setDoneCount(nd);
    if (idx + 1 >= AGENT_SENTENCES.length) { setTimeout(onNext, 900); }
    else { setTimeout(() => { setIdx(i => i + 1); }, 900); }
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 justify-center">
        {AGENT_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <TapToHighlight
            sentence={item.sentence}
            correctIndices={item.highlight}
            color={color}
            label={lbl.von}
            checkLabel={lbl.check}
            onDone={handleDone}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Round5({ color, lbl, wrongCountRef, onDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void }) {
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
              {selected === item.correct ? `✅ ${item.label}` : `❌ → ${item.correct}`}
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

const VoiceTransformExplorer = memo(function VoiceTransformExplorer({
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

export default VoiceTransformExplorer;
