"use client";
// SpellingWordExplorer — Island i8: Rechtschreibung & Wortbildung (K5)
// Teaches: ss vs ß rule, prefixes (Vorsilben), suffixes (Nachsilben), compound words, MCQ

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Spelling & Word Building",
    round1Title: "ss vs. ß Rule",
    round1Hint: "Tap to reveal the rule, then sort each word!",
    round2Title: "Prefixes (Vorsilben)",
    round2Hint: "Tap prefix + base word to build a new word!",
    round3Title: "Suffixes (Nachsilben)",
    round3Hint: "Tap to discover how suffixes change words!",
    round4Title: "Compound Words",
    round4Hint: "Tap to combine the parts into one compound word!",
    round5Title: "Spelling Challenge",
    round5Hint: "Choose the correct spelling for each word.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    shortVowel: "short vowel → ss",
    longVowel: "long vowel or diphthong → ß",
    prefix: "Prefix",
    suffix: "Suffix",
    result: "Result",
    compound: "Compound",
  },
  hu: {
    title: "Helyesírás & Szóalkotás",
    round1Title: "ss vs. ß szabály",
    round1Hint: "Koppints a szabály felfedéséhez, majd rendezd be a szavakat!",
    round2Title: "Előképzők (Vorsilben)",
    round2Hint: "Koppints az előképzőre + alapszóra egy új szó alkotásához!",
    round3Title: "Utóképzők (Nachsilben)",
    round3Hint: "Koppints, hogy megtudd hogyan változtatják meg az utóképzők a szavakat!",
    round4Title: "Összetett szavak",
    round4Hint: "Koppints az összetevők egyesítéséhez egy összetett szóvá!",
    round5Title: "Helyesírási kihívás",
    round5Hint: "Válaszd ki a helyes írásmódot minden szónál.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    shortVowel: "rövid magánhangzó → ss",
    longVowel: "hosszú magánhangzó vagy diftongus → ß",
    prefix: "Előképző",
    suffix: "Utóképző",
    result: "Eredmény",
    compound: "Összetett szó",
  },
  de: {
    title: "Rechtschreibung & Wortbildung",
    round1Title: "ss vs. ß-Regel",
    round1Hint: "Tippe, um die Regel aufzudecken, und sortiere dann jedes Wort!",
    round2Title: "Vorsilben",
    round2Hint: "Tippe Vorsilbe + Grundwort, um ein neues Wort zu bilden!",
    round3Title: "Nachsilben",
    round3Hint: "Tippe, um zu entdecken wie Nachsilben Wörter verändern!",
    round4Title: "Zusammengesetzte Wörter",
    round4Hint: "Tippe, um die Teile zu einem Kompositum zu verbinden!",
    round5Title: "Rechtschreib-Herausforderung",
    round5Hint: "Wähle die richtige Schreibweise für jedes Wort.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    shortVowel: "kurzer Vokal → ss",
    longVowel: "langer Vokal oder Diphthong → ß",
    prefix: "Vorsilbe",
    suffix: "Nachsilbe",
    result: "Ergebnis",
    compound: "Kompositum",
  },
  ro: {
    title: "Ortografie & Formare de cuvinte",
    round1Title: "Regula ss vs. ß",
    round1Hint: "Atinge pentru a dezvălui regula, apoi sortează fiecare cuvânt!",
    round2Title: "Prefixe (Vorsilben)",
    round2Hint: "Atinge prefix + cuvânt de bază pentru a forma un cuvânt nou!",
    round3Title: "Sufixe (Nachsilben)",
    round3Hint: "Atinge pentru a descoperi cum schimbă sufixele cuvintele!",
    round4Title: "Cuvinte compuse",
    round4Hint: "Atinge pentru a combina părțile într-un cuvânt compus!",
    round5Title: "Provocare ortografică",
    round5Hint: "Alege ortografia corectă pentru fiecare cuvânt.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    shortVowel: "vocală scurtă → ss",
    longVowel: "vocală lungă sau diftong → ß",
    prefix: "Prefix",
    suffix: "Sufix",
    result: "Rezultat",
    compound: "Cuvânt compus",
  },
};

const SS_BETA_WORDS = [
  { word: "Wasser", correct: "ss", rule: "short", hint: "Was-ser (short a)" },
  { word: "Straße", correct: "ß", rule: "long", hint: "Stra-ße (long a)" },
  { word: "heiß", correct: "ß", rule: "diphthong", hint: "heiß (diphthong ei)" },
  { word: "essen", correct: "ss", rule: "short", hint: "es-sen (short e)" },
  { word: "groß", correct: "ß", rule: "long", hint: "groß (long o)" },
];

const PREFIXES = [
  { prefix: "un-", base: "glücklich", result: "unglücklich", meaning: "not happy" },
  { prefix: "ver-", base: "kaufen", result: "verkaufen", meaning: "to sell" },
  { prefix: "be-", base: "schreiben", result: "beschreiben", meaning: "to describe" },
  { prefix: "zer-", base: "brechen", result: "zerbrechen", meaning: "to break apart" },
];

const SUFFIXES = [
  { base: "Schön", suffix: "-heit", result: "Schönheit", type: "noun" },
  { base: "Freund", suffix: "-schaft", result: "Freundschaft", type: "noun" },
  { base: "schön", suffix: "-lich", result: "schönlich", note: "→ beautiful (adj)", type: "adj" },
  { base: "Lehr", suffix: "-ung", result: "Lehrung", type: "noun" },
];

const COMPOUNDS = [
  { parts: ["Haus", "Tür"], result: "Haustür", emoji: "🚪" },
  { parts: ["Schul", "Buch"], result: "Schulbuch", emoji: "📚" },
  { parts: ["Blumen", "Vase"], result: "Blumenvase", emoji: "💐" },
];

const SPELL_QUIZ = [
  { question: "Wir essen ___.", options: ["Waßer", "Wasser", "Wasßer"], correct: "Wasser", hint: "kurzes a → ss" },
  { question: "Die ___ ist lang.", options: ["Straße", "Strasse", "Strase"], correct: "Straße", hint: "langes a → ß" },
  { question: "Er ist sehr ___.", options: ["groß", "gross", "grosz"], correct: "groß", hint: "langes o → ß" },
  { question: "Sie kauft ___ (unglücklich).", options: ["unglüklich", "unglücklich", "Unglücklich"], correct: "unglücklich", hint: "Vorsilbe un- + Adjektiv" },
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

// ─── Round 1: ss vs ß ──────────────────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= SS_BETA_WORDS.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-1.5 w-full rounded-xl overflow-hidden"
        style={{ border: `1px solid ${color}33` }}>
        <div className="flex gap-2 px-3 py-2 bg-white/5">
          <span className="flex-1 text-xs font-bold text-center" style={{ color: "#EF4444" }}>ss — {lbl.shortVowel}</span>
          <span className="flex-1 text-xs font-bold text-center" style={{ color: "#F59E0B" }}>ß — {lbl.longVowel}</span>
        </div>
        {SS_BETA_WORDS.map((w, i) => {
          const isOpen = revealed.has(i);
          const ruleColor = w.correct === "ss" ? "#EF4444" : "#F59E0B";
          return (
            <motion.button key={w.word}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full px-3 py-2.5 flex items-center justify-between"
              style={{ background: isOpen ? `${ruleColor}10` : "transparent", borderTop: "1px solid rgba(255,255,255,0.05)" }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <span className="text-white font-bold text-base">{w.word}</span>
              {isOpen ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="font-black text-sm" style={{ color: ruleColor }}>
                  {w.hint}
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

// ─── Round 2: Prefixes ────────────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= PREFIXES.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {PREFIXES.map((p, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={p.result}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 flex items-center gap-2"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <span className="font-black text-sm px-2 py-1 rounded-lg"
                style={{ background: `${color}25`, color }}>{p.prefix}</span>
              <span className="text-white/50">+</span>
              <span className="text-white font-bold">{p.base}</span>
              <span className="text-white/50">=</span>
              {isOpen ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="font-black text-base flex-1 text-right" style={{ color }}>
                  {p.result}
                </motion.span>
              ) : (
                <span className="text-white/25 text-sm flex-1 text-right">?</span>
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

// ─── Round 3: Suffixes ────────────────────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= SUFFIXES.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {SUFFIXES.map((s, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={s.result}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 flex items-center gap-2"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <span className="text-white font-bold">{s.base}</span>
              <span className="text-white/50">+</span>
              <span className="font-black text-sm px-2 py-1 rounded-lg"
                style={{ background: `${color}25`, color }}>{s.suffix}</span>
              <span className="text-white/50">=</span>
              {isOpen ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="font-black text-base flex-1 text-right" style={{ color }}>
                  {s.result}
                </motion.span>
              ) : (
                <span className="text-white/25 text-sm flex-1 text-right">?</span>
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

// ─── Round 4: Compound words ──────────────────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= COMPOUNDS.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {COMPOUNDS.map((c, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={c.result}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 flex items-center justify-between"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{c.emoji}</span>
                <div className="flex items-center gap-1">
                  {c.parts.map((p, j) => (
                    <span key={j} className="flex items-center gap-1">
                      <span className="text-white font-bold">{p}</span>
                      {j < c.parts.length - 1 && <span className="text-white/40 text-xs">+</span>}
                    </span>
                  ))}
                </div>
              </div>
              {isOpen ? (
                <motion.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                  className="font-black text-base" style={{ color }}>
                  {c.result}
                </motion.span>
              ) : (
                <span className="text-white/25 text-sm">{lbl.tapToReveal}</span>
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

// ─── Round 5: Spelling MCQ ────────────────────────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = SPELL_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= SPELL_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 900);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {SPELL_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.question} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-base">{item.question}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`} ({item.hint})
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="w-full py-3 rounded-xl font-black text-base"
            style={{
              background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const SpellingWordExplorer = memo(function SpellingWordExplorer({
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

export default SpellingWordExplorer;
