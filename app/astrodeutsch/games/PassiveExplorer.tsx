"use client";
// PassiveExplorer — Island i7: Passiv (Vorgangspassiv) (K5)
// Teaches: active vs passive transformation, werden+Partizip II, tenses, agent, MCQ

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Passive Voice Explorer",
    round1Title: "Active vs. Passive",
    round1Hint: "Tap to see the transformation from active to passive!",
    round1Discovery: "💡 Passive voice focuses on WHAT happened, not WHO did it. Active: 'Der Hund frisst den Knochen.' → Passive: 'Der Knochen WIRD gefressen.'",
    round2Title: "Passive Formation",
    round2Hint: "Tap each person to reveal the passive form!",
    round3Title: "Passive in Different Tenses",
    round3Hint: "Tap to discover how passive changes across tenses!",
    round4Title: "The Agent — von + Dativ",
    round4Hint: "Tap to identify the parts of each passive sentence!",
    round5Title: "Active or Passive?",
    round5Hint: "Choose the correct passive form or identify passive.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    active: "Active",
    passive: "Passive",
    agent: "Agent (by whom?)",
    praesens: "Präsens",
    praeteritum: "Präteritum",
    perfekt: "Perfekt",
    formation: "werden (conjugated) + Partizip II",
  },
  hu: {
    title: "Szenvedő szerkezet felfedező",
    round1Title: "Cselekvő vs. Szenvedő",
    round1Hint: "Koppints a cselekvőből szenvedőbe való átalakulás megtekintéséhez!",
    round1Discovery: "💡 A szenvedő szerkezet a TÖRTÉNÉSRE fókuszál, nem arra hogy KI csinálta. Cselekvő: 'Der Hund frisst den Knochen.' → Szenvedő: 'Der Knochen WIRD gefressen.'",
    round2Title: "Szenvedő képzése",
    round2Hint: "Koppints minden személyre a szenvedő alak felfedéséhez!",
    round3Title: "Szenvedő különböző igeidőkben",
    round3Hint: "Koppints, hogy megtudd hogyan változik a szenvedő igeidőkben!",
    round4Title: "Az ágens — von + Dativ",
    round4Hint: "Koppints a szenvedő mondatok részeinek azonosításához!",
    round5Title: "Cselekvő vagy szenvedő?",
    round5Hint: "Válaszd ki a helyes szenvedő alakot, vagy azonosítsd a szenvedőt.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    active: "Cselekvő",
    passive: "Szenvedő",
    agent: "Cselekvő (ki által?)",
    praesens: "Jelen idő",
    praeteritum: "Múlt idő",
    perfekt: "Befejezett múlt",
    formation: "werden (ragozva) + Partizip II",
  },
  de: {
    title: "Passiv-Entdecker",
    round1Title: "Aktiv vs. Passiv",
    round1Hint: "Tippe, um die Umwandlung von Aktiv zu Passiv zu sehen!",
    round1Discovery: "💡 Das Passiv konzentriert sich auf WAS passiert ist, nicht WER es getan hat. Aktiv: 'Der Hund frisst den Knochen.' → Passiv: 'Der Knochen WIRD gefressen.'",
    round2Title: "Passivbildung",
    round2Hint: "Tippe auf jede Person, um die Passivform aufzudecken!",
    round3Title: "Passiv in verschiedenen Zeiten",
    round3Hint: "Tippe, um zu entdecken wie sich Passiv in verschiedenen Zeiten verändert!",
    round4Title: "Das Agens — von + Dativ",
    round4Hint: "Tippe, um die Teile jedes Passivsatzes zu identifizieren!",
    round5Title: "Aktiv oder Passiv?",
    round5Hint: "Wähle die richtige Passivform oder erkenne das Passiv.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    active: "Aktiv",
    passive: "Passiv",
    agent: "Agens (von wem?)",
    praesens: "Präsens",
    praeteritum: "Präteritum",
    perfekt: "Perfekt",
    formation: "werden (konjugiert) + Partizip II",
  },
  ro: {
    title: "Exploratorul diatezei pasive",
    round1Title: "Activ vs. Pasiv",
    round1Hint: "Atinge pentru a vedea transformarea din activ în pasiv!",
    round1Discovery: "💡 Diateza pasivă se concentrează pe CEEA CE s-a întâmplat, nu pe CINE a făcut-o. Activ: 'Der Hund frisst den Knochen.' → Pasiv: 'Der Knochen WIRD gefressen.'",
    round2Title: "Formarea pasivului",
    round2Hint: "Atinge fiecare persoană pentru a dezvălui forma pasivă!",
    round3Title: "Pasiv în diferite timpuri",
    round3Hint: "Atinge pentru a descoperi cum se schimbă pasivul în diferite timpuri!",
    round4Title: "Agentul — von + Dativ",
    round4Hint: "Atinge pentru a identifica părțile fiecărei propoziții pasive!",
    round5Title: "Activ sau pasiv?",
    round5Hint: "Alege forma pasivă corectă sau identifică pasivul.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    active: "Activ",
    passive: "Pasiv",
    agent: "Agent (de către cine?)",
    praesens: "Prezent",
    praeteritum: "Trecut",
    perfekt: "Perfect compus",
    formation: "werden (conjugat) + Partizip II",
  },
};

const TRANSFORMATIONS = [
  { active: "Der Hund frisst den Knochen.", passive: "Der Knochen wird vom Hund gefressen.", emoji: "🐕" },
  { active: "Der Lehrer erklärt die Aufgabe.", passive: "Die Aufgabe wird vom Lehrer erklärt.", emoji: "👨‍🏫" },
  { active: "Die Mutter backt einen Kuchen.", passive: "Ein Kuchen wird von der Mutter gebacken.", emoji: "🍰" },
  { active: "Der Schüler liest das Buch.", passive: "Das Buch wird vom Schüler gelesen.", emoji: "📖" },
  { active: "Die Künstlerin malt ein Gemälde.", passive: "Ein Gemälde wird von der Künstlerin gemalt.", emoji: "🎨" },
];

const PASSIVE_CONJUGATION = [
  { person: "ich", form: "werde gespielt", color: "#3B82F6" },
  { person: "du", form: "wirst gespielt", color: "#10B981" },
  { person: "er/sie/es", form: "wird gespielt", color: "#F59E0B" },
  { person: "wir", form: "werden gespielt", color: "#A855F7" },
];

const TENSE_PASSIVE = [
  { tense: "praesens", example: "Das Haus wird gebaut.", color: "#3B82F6" },
  { tense: "praeteritum", example: "Das Haus wurde gebaut.", color: "#F59E0B" },
  { tense: "perfekt", example: "Das Haus ist gebaut worden.", color: "#10B981" },
];

const AGENT_SENTENCES = [
  { sentence: "Das Buch wird vom Lehrer gelesen.", subject: "Das Buch", verb: "wird ... gelesen", agent: "vom Lehrer" },
  { sentence: "Die Brücke wurde von den Arbeitern gebaut.", subject: "Die Brücke", verb: "wurde ... gebaut", agent: "von den Arbeitern" },
];

const MIXED_QUIZ = [
  { sentence: "Das Fenster ___ geöffnet.", options: ["ist", "wird", "hat"], correct: "wird", hint: "Passiv Präsens → wird" },
  { sentence: "Der Brief ___ gestern geschrieben.", options: ["wird", "wurde", "ist"], correct: "wurde", hint: "Passiv Präteritum → wurde" },
  { sentence: "Sie isst den Kuchen.", options: ["Aktiv", "Passiv", "Beides"], correct: "Aktiv", hint: "Subjekt handelt selbst → Aktiv" },
  { sentence: "Das Auto wurde repariert.", options: ["Aktiv", "Passiv", "Beides"], correct: "Passiv", hint: "wurde + Partizip II → Passiv" },
  { sentence: "Der Film ___ von vielen Menschen gesehen.", options: ["wird", "ist", "hat"], correct: "wird", hint: "Präsens Passiv → wird" },
  { sentence: "Die Hausaufgaben wurden vergessen.", options: ["Aktiv", "Passiv", "Beides"], correct: "Passiv", hint: "wurden + Partizip II → Passiv" },
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

// ─── Round 1: Active vs Passive ───────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= TRANSFORMATIONS.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {TRANSFORMATIONS.map((t, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={t.active}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{t.emoji}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
                  {lbl.active}
                </span>
              </div>
              <p className="text-white font-bold text-sm">{t.active}</p>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${color}25`, color }}>
                    {lbl.passive}
                  </span>
                  <p className="text-white font-bold text-sm mt-1.5">{t.passive}</p>
                </motion.div>
              )}
              {!isOpen && <p className="text-white/30 text-xs mt-2">{lbl.tapToReveal}</p>}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Passive conjugation ────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= PASSIVE_CONJUGATION.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="w-full rounded-xl p-2.5 text-center text-xs font-bold"
        style={{ background: `${color}18`, border: `1px solid ${color}44`, color }}>
        {lbl.formation}
      </div>
      <div className="flex flex-col gap-2 w-full">
        {PASSIVE_CONJUGATION.map((row, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={row.person}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-xl p-3 flex items-center justify-between"
              style={{
                background: isOpen ? `${row.color}18` : "rgba(255,255,255,0.04)",
                border: `1px solid ${isOpen ? row.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <span className="font-bold text-sm" style={{ color: row.color }}>{row.person}</span>
              {isOpen ? (
                <motion.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                  className="font-black text-base" style={{ color: row.color }}>
                  {row.form}
                </motion.span>
              ) : (
                <span className="text-white/25 text-xs">{lbl.tapToReveal}</span>
              )}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 3: Passive in tenses ───────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= TENSE_PASSIVE.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {TENSE_PASSIVE.map((item, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={item.tense}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isOpen ? `${item.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? item.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <span className="font-black text-sm" style={{ color: item.color }}>
                {lbl[item.tense] ?? item.tense}
              </span>
              {isOpen ? (
                <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                  className="text-white font-bold text-base mt-1">{item.example}</motion.p>
              ) : (
                <p className="text-white/30 text-xs mt-1">{lbl.tapToReveal}</p>
              )}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 4: Agent identification ────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= AGENT_SENTENCES.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {AGENT_SENTENCES.map((s, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={s.sentence}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <p className="text-white font-bold text-sm">{s.sentence}</p>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-2 flex flex-col gap-1">
                  <span className="text-xs font-bold" style={{ color: "#3B82F6" }}>Subjekt: {s.subject}</span>
                  <span className="text-xs font-bold" style={{ color: "#10B981" }}>Verb: {s.verb}</span>
                  <span className="text-xs font-bold" style={{ color }}>
                    {lbl.agent}: {s.agent}
                  </span>
                </motion.div>
              )}
              {!isOpen && <p className="text-white/30 text-xs mt-1">{lbl.tapToReveal}</p>}
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: Active or Passive MCQ ───────────────────────────────────────────
function Round5({ color, lbl, wrongCountRef, onDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MIXED_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.correct) {
      wrongCountRef.current++;
    }
    setTimeout(() => {
      if (idx + 1 >= MIXED_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {MIXED_QUIZ.map((_, i) => (
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
              className="text-xs font-bold mt-2" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`} ({item.hint})
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="flex-1 py-3 rounded-xl font-black text-sm"
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

// ─── Main Component ────────────────────────────────────────────────────────────
const PassiveExplorer = memo(function PassiveExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
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

export default PassiveExplorer;
