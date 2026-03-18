"use client";
// PunctuationExplorerK5 — Island i5: Zeichensetzung (Komma + Direkte Rede) (K5)
// Teaches: comma before Nebensatz, comma in lists, direct speech rules, tap-to-insert, find-the-error

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Punctuation Explorer",
    round1Title: "Comma before Subordinate Clause",
    round1Hint: "Tap where the comma goes in each sentence!",
    round2Title: "Comma in Lists",
    round2Hint: "Tap the positions where a comma is needed!",
    round3Title: "Direct Speech",
    round3Hint: "Tap to reveal the punctuation rules for direct speech!",
    round4Title: "Insert the Punctuation",
    round4Hint: "Tap the correct punctuation mark for the gap.",
    round5Title: "Find the Error",
    round5Hint: "Which sentence has a punctuation error? Tap it!",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    comma: "Comma",
    period: "Period",
    colon: "Colon",
    noComma: "No comma here",
    commaNeeded: "Comma needed!",
    correctSentence: "Correct!",
    errorSentence: "Error here!",
    rule1: "Comma before: weil, dass, wenn, obwohl, damit...",
    rule2: "Comma between items in a list (not before 'und'/'oder' at end)",
    rule3: "Colon before direct speech, speech in quotation marks",
  },
  hu: {
    title: "Írásjel felfedező",
    round1Title: "Vessző a mellékmondatok előtt",
    round1Hint: "Koppints, ahol a vessző kerül az egyes mondatokban!",
    round2Title: "Vesszők felsorolásban",
    round2Hint: "Koppints azokra a helyekre, ahol vesszőre van szükség!",
    round3Title: "Egyenes beszéd",
    round3Hint: "Koppints az egyenes beszéd írásjeleinek szabályainak felfedéséhez!",
    round4Title: "Szúrd be az írásjeleket",
    round4Hint: "Koppints a helyes írásjelre az üres helyen.",
    round5Title: "Keresd a hibát",
    round5Hint: "Melyik mondatban van írásjelezési hiba? Koppints rá!",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    comma: "Vessző",
    period: "Pont",
    colon: "Kettőspont",
    noComma: "Nincs itt vessző",
    commaNeeded: "Vesszőre van szükség!",
    correctSentence: "Helyes!",
    errorSentence: "Hiba van itt!",
    rule1: "Vessző előtt: weil, dass, wenn, obwohl, damit...",
    rule2: "Vesszők a felsorolásban (az utolsó 'und'/'oder' előtt nem)",
    rule3: "Kettőspont az egyenes beszéd előtt, idézőjelben",
  },
  de: {
    title: "Zeichensetzungs-Entdecker",
    round1Title: "Komma vor dem Nebensatz",
    round1Hint: "Tippe, wo das Komma in jedem Satz hingehört!",
    round2Title: "Komma in Aufzählungen",
    round2Hint: "Tippe die Stellen, an denen ein Komma nötig ist!",
    round3Title: "Direkte Rede",
    round3Hint: "Tippe, um die Satzzeichenregeln für direkte Rede zu entdecken!",
    round4Title: "Satzzeichen einsetzen",
    round4Hint: "Tippe das richtige Satzzeichen für die Lücke.",
    round5Title: "Fehler finden",
    round5Hint: "Welcher Satz hat einen Fehler bei den Satzzeichen? Tippe ihn an!",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    comma: "Komma",
    period: "Punkt",
    colon: "Doppelpunkt",
    noComma: "Hier kein Komma",
    commaNeeded: "Komma nötig!",
    correctSentence: "Richtig!",
    errorSentence: "Fehler hier!",
    rule1: "Komma vor: weil, dass, wenn, obwohl, damit...",
    rule2: "Komma zwischen Aufzählungen (nicht vor 'und'/'oder' am Ende)",
    rule3: "Doppelpunkt vor direkter Rede, Rede in Anführungszeichen",
  },
  ro: {
    title: "Exploratorul punctuației",
    round1Title: "Virgulă înaintea propoziției subordonate",
    round1Hint: "Atinge unde merge virgula în fiecare propoziție!",
    round2Title: "Virgulă în enumerații",
    round2Hint: "Atinge pozițiile unde este necesară o virgulă!",
    round3Title: "Vorbirea directă",
    round3Hint: "Atinge pentru a descoperi regulile de punctuație ale vorbirii directe!",
    round4Title: "Inserează semnele de punctuație",
    round4Hint: "Atinge semnul de punctuație corect pentru spațiu.",
    round5Title: "Găsește eroarea",
    round5Hint: "Care propoziție are o eroare de punctuație? Atinge-o!",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    comma: "Virgulă",
    period: "Punct",
    colon: "Două puncte",
    noComma: "Fără virgulă",
    commaNeeded: "Virgulă necesară!",
    correctSentence: "Corect!",
    errorSentence: "Eroare aici!",
    rule1: "Virgulă înaintea: weil, dass, wenn, obwohl, damit...",
    rule2: "Virgulă între elemente enumerate (nu înaintea ultimului 'und'/'oder')",
    rule3: "Două puncte înaintea vorbirii directe, discursul între ghilimele",
  },
};

const COMMA_SENTENCES = [
  { before: "Er schläft", after: "weil er müde ist.", needsComma: true },
  { before: "Sie lernt", after: "und er spielt.", needsComma: false },
  { before: "Ich glaube", after: "dass er kommt.", needsComma: true },
];

const LIST_SENTENCE = {
  parts: ["Ich kaufe", "Äpfel", "Birnen", "Bananen", "und Orangen", "."],
  commaAfter: [false, true, true, true, false, false],
};

const DIRECT_SPEECH_RULES = [
  { icon: "💬", rule: 'Er sagte: "Ich komme morgen."', desc: "rule3" },
  { icon: "📌", rule: '"Ich bin müde", sagte sie.', desc: "rule1" },
  { icon: "❓", rule: '"Kommst du?", fragte er.', desc: "rule1" },
];

const PUNCTUATION_QUIZ = [
  { sentence: 'Er rief ___ "Hilfe!"', options: [":", ",", "."], correct: ":", hint: "Doppelpunkt vor direkter Rede" },
  { sentence: "Er isst Brot___ Butter und Käse.", options: [",", ":", "."], correct: ",", hint: "Komma in Aufzählung" },
  { sentence: "Sie fragt___ ob er kommt.", options: [",", ":", "."], correct: ",", hint: "Komma vor Nebensatz" },
];

const ERROR_SENTENCES = [
  { sentence: "Er schläft, weil er müde ist.", hasError: false },
  { sentence: "Sie singt und tanzt.", hasError: false },
  { sentence: "Ich denke dass er kommt.", hasError: true, fix: "Ich denke, dass er kommt." },
  { sentence: 'Er sagte: "Ich bin da."', hasError: false },
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

// ─── Round 1: Comma before Nebensatz ─────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= COMMA_SENTENCES.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <p className="text-white/50 text-xs text-center px-2 italic">{lbl.rule1}</p>
      <div className="flex flex-col gap-2 w-full">
        {COMMA_SENTENCES.map((s, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={i}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isOpen ? (s.needsComma ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.04)") : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? (s.needsComma ? "#00FF88" : "rgba(255,255,255,0.2)") : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <p className="text-white font-bold text-sm">
                {s.before}
                {isOpen && s.needsComma && <span className="font-black text-green-400">,</span>}
                {" "}{s.after}
              </p>
              {isOpen && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-xs font-bold mt-1"
                  style={{ color: s.needsComma ? "#00FF88" : "rgba(255,255,255,0.5)" }}>
                  {s.needsComma ? `✅ ${lbl.commaNeeded}` : `✓ ${lbl.noComma}`}
                </motion.p>
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

// ─── Round 2: Comma in lists ──────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const needCount = LIST_SENTENCE.commaAfter.filter(Boolean).length;
  const allRevealed = revealed.size >= needCount;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <p className="text-white/50 text-xs text-center px-2 italic">{lbl.rule2}</p>
      <div className="w-full rounded-2xl p-4 flex flex-wrap gap-1 justify-center items-center"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
        {LIST_SENTENCE.parts.map((part, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-white font-bold text-base">{part}</span>
            {LIST_SENTENCE.commaAfter[i] && (
              <motion.button
                onClick={() => setRevealed(prev => new Set([...prev, i]))}
                className="font-black text-xl mx-0.5"
                style={{ color: revealed.has(i) ? "#00FF88" : `${color}66` }}
                whileTap={!revealed.has(i) ? { scale: 0.8 } : {}}>
                {revealed.has(i) ? "," : "[,]"}
              </motion.button>
            )}
          </span>
        ))}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-xs font-bold text-green-400 text-center">✅ {lbl.correct}</motion.div>
      )}
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 3: Direct speech rules ─────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= DIRECT_SPEECH_RULES.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {DIRECT_SPEECH_RULES.map((r, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={i}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{r.icon}</span>
                <code className="text-white font-bold text-sm flex-1 text-left">{r.rule}</code>
              </div>
              {isOpen && (
                <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-bold mt-2" style={{ color }}>
                  {lbl[r.desc]}
                </motion.p>
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

// ─── Round 4: Insert punctuation ──────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = PUNCTUATION_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= PUNCTUATION_QUIZ.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 900);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1">
        {PUNCTUATION_QUIZ.map((_, i) => (
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
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → "${item.correct}"`} ({item.hint})
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="flex-1 py-4 rounded-xl font-black text-2xl"
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

// ─── Round 5: Find the error ──────────────────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const errorIdx = ERROR_SENTENCES.findIndex(s => s.hasError);
  const isCorrect = selected === errorIdx;

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    setTimeout(() => onDone(), 1200);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {ERROR_SENTENCES.map((s, i) => {
          const isTapped = selected === i;
          const isWrongTap = isTapped && !s.hasError;
          const isCorrectTap = isTapped && s.hasError;
          const revealError = selected !== null && s.hasError;
          return (
            <motion.button key={i}
              onClick={() => handleSelect(i)}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: revealError ? "rgba(255,107,107,0.12)" : isWrongTap ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.04)",
                border: `2px solid ${revealError ? "#FF6B6B" : isWrongTap ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={selected === null ? { scale: 0.98 } : {}}>
              <p className="text-white font-bold text-sm">{s.sentence}</p>
              {revealError && s.fix && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-xs font-bold mt-1 text-green-400">
                  ✅ {s.fix}
                </motion.p>
              )}
              {selected !== null && !s.hasError && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-xs font-bold mt-1 text-white/50">
                  {lbl.correctSentence}
                </motion.p>
              )}
            </motion.button>
          );
        })}
      </div>
      {selected !== null && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-sm font-black text-center" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
          {isCorrect ? `✅ ${lbl.correct}` : `❌ ${lbl.errorSentence}`}
        </motion.p>
      )}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const PunctuationExplorerK5 = memo(function PunctuationExplorerK5({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 5;

  const next = useCallback(() => setRound(r => r + 1), []);
  const finish = useCallback(() => onDone(TOTAL_ROUNDS, TOTAL_ROUNDS), [onDone]);

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
          {round === 4 && <Round5 color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default PunctuationExplorerK5;
