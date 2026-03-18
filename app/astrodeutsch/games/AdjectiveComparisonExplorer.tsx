"use client";
// AdjectiveComparisonExplorer — Island i1: Adjektive & Steigerung (K5)
// Teaches: 3 degrees of comparison, regular/irregular/umlaut forms, MCQ practice

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Adjective Comparison",
    round1Title: "3 Degrees of Comparison",
    round1Hint: "Tap each degree to see an example!",
    round2Title: "Regular Forms",
    round2Hint: "Tap each step to reveal the form!",
    round3Title: "Irregular Forms",
    round3Hint: "These are special — flip each card!",
    round4Title: "Umlaut Forms",
    round4Hint: "Tap to discover how the vowel changes!",
    round5Title: "Mixed Challenge",
    round5Hint: "Choose the correct comparative or superlative form.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    positiv: "Positiv",
    komparativ: "Komparativ",
    superlativ: "Superlativ",
    basic: "basic form",
    more: "more / -er",
    most: "most / am -sten",
  },
  hu: {
    title: "Melléknév fokozás",
    round1Title: "3 fokozati fok",
    round1Hint: "Koppints minden fokra, hogy példát lássál!",
    round2Title: "Szabályos alakok",
    round2Hint: "Koppints minden lépésre az alak felfedéséhez!",
    round3Title: "Rendhagyó alakok",
    round3Hint: "Ezek különlegesek — fordítsd meg a kártyát!",
    round4Title: "Umlautos alakok",
    round4Hint: "Koppints, hogy meglásd hogyan változik a magánhangzó!",
    round5Title: "Vegyes kihívás",
    round5Hint: "Válaszd ki a helyes közép- vagy felsőfokot.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    positiv: "Pozitív fok",
    komparativ: "Középfok",
    superlativ: "Felsőfok",
    basic: "alapfok",
    more: "középfok",
    most: "felsőfok",
  },
  de: {
    title: "Adjektiv-Steigerung",
    round1Title: "3 Steigerungsstufen",
    round1Hint: "Tippe auf jede Stufe, um ein Beispiel zu sehen!",
    round2Title: "Regelmäßige Formen",
    round2Hint: "Tippe auf jeden Schritt, um die Form aufzudecken!",
    round3Title: "Unregelmäßige Formen",
    round3Hint: "Diese sind besonders — drehe jede Karte um!",
    round4Title: "Formen mit Umlaut",
    round4Hint: "Tippe, um zu sehen wie sich der Vokal verändert!",
    round5Title: "Gemischte Aufgabe",
    round5Hint: "Wähle die richtige Komparativ- oder Superlativform.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    positiv: "Positiv",
    komparativ: "Komparativ",
    superlativ: "Superlativ",
    basic: "Grundform",
    more: "Vergleich (-er)",
    most: "Höchstgrad (am -sten)",
  },
  ro: {
    title: "Comparația adjectivului",
    round1Title: "3 grade de comparație",
    round1Hint: "Atinge fiecare grad pentru a vedea un exemplu!",
    round2Title: "Forme regulate",
    round2Hint: "Atinge fiecare pas pentru a descoperi forma!",
    round3Title: "Forme neregulate",
    round3Hint: "Acestea sunt speciale — întoarce fiecare carte!",
    round4Title: "Forme cu Umlaut",
    round4Hint: "Atinge pentru a vedea cum se schimbă vocala!",
    round5Title: "Provocare mixtă",
    round5Hint: "Alege forma corectă de comparativ sau superlativ.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    positiv: "Pozitiv",
    komparativ: "Comparativ",
    superlativ: "Superlativ",
    basic: "forma de bază",
    more: "comparativ (-er)",
    most: "superlativ (am -sten)",
  },
};

const DEGREES = [
  { key: "positiv", color: "#3B82F6", emoji: "🐱", example: "Die Katze ist klein.", label: "Positiv" },
  { key: "komparativ", color: "#F59E0B", emoji: "🐈", example: "Der Hund ist kleiner.", label: "Komparativ" },
  { key: "superlativ", color: "#EF4444", emoji: "🦁", example: "Der Löwe ist am kleinsten.", label: "Superlativ" },
];

const REGULAR_FORMS = [
  { base: "klein", komp: "kleiner", sup: "am kleinsten" },
  { base: "schnell", komp: "schneller", sup: "am schnellsten" },
  { base: "laut", komp: "lauter", sup: "am lautesten" },
];

const IRREGULAR_FORMS = [
  { base: "gut", komp: "besser", sup: "am besten", emoji: "✅" },
  { base: "viel", komp: "mehr", sup: "am meisten", emoji: "💰" },
  { base: "gern", komp: "lieber", sup: "am liebsten", emoji: "❤️" },
];

const UMLAUT_FORMS = [
  { base: "alt", komp: "älter", sup: "am ältesten", vowel: "a→ä" },
  { base: "groß", komp: "größer", sup: "am größten", vowel: "o→ö" },
  { base: "jung", komp: "jünger", sup: "am jüngsten", vowel: "u→ü" },
];

const MIXED_QUIZ = [
  { sentence: "Dieser Berg ist ___ als jener.", options: ["hoch", "höher", "am höchsten"], correct: "höher", hint: "Komparativ" },
  { sentence: "Sie ist die ___ Schülerin.", options: ["gut", "besser", "beste"], correct: "beste", hint: "Superlativ" },
  { sentence: "Er läuft ___ als sein Bruder.", options: ["schnell", "schneller", "am schnellsten"], correct: "schneller", hint: "Komparativ" },
  { sentence: "Das ist das ___ Buch im Regal.", options: ["interessant", "interessanter", "interessanteste"], correct: "interessanteste", hint: "Superlativ" },
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

// ─── Round 1: 3 Degrees overview ───────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= DEGREES.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {DEGREES.map((d, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={d.key}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${d.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? d.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{d.emoji}</span>
                <span className="font-black text-base" style={{ color: d.color }}>{d.label}</span>
              </div>
              {isOpen && (
                <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                  className="text-white/80 text-sm pl-1">{d.example}</motion.p>
              )}
              {!isOpen && <p className="text-white/30 text-xs pl-1">{lbl.tapToReveal}</p>}
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

// ─── Round 2: Regular forms step-by-step ──────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const item = REGULAR_FORMS[idx];

  const revealAll = () => setRevealed(new Set(["komp", "sup"]));
  const handleNext = () => {
    if (idx + 1 >= REGULAR_FORMS.length) onNext();
    else { setIdx(i => i + 1); setRevealed(new Set()); }
  };
  const allRevealed = revealed.has("komp") && revealed.has("sup");

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1">
        {REGULAR_FORMS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.base} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full flex flex-col gap-3 rounded-3xl p-5"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <div className="flex items-center justify-between">
            <span className="text-white/50 text-xs font-bold uppercase">{lbl.positiv}</span>
            <span className="text-white font-black text-xl">{item.base}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase" style={{ color: "#F59E0B" }}>{lbl.komparativ}</span>
            <motion.button
              onClick={() => setRevealed(prev => new Set([...prev, "komp"]))}
              className="font-black text-xl px-3 py-1 rounded-xl"
              style={{ background: revealed.has("komp") ? "#F59E0B22" : "rgba(255,255,255,0.06)", color: revealed.has("komp") ? "#F59E0B" : "rgba(255,255,255,0.25)", border: `1px solid ${revealed.has("komp") ? "#F59E0B55" : "rgba(255,255,255,0.1)"}` }}>
              {revealed.has("komp") ? item.komp : "?"}
            </motion.button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase" style={{ color: "#EF4444" }}>{lbl.superlativ}</span>
            <motion.button
              onClick={() => setRevealed(prev => new Set([...prev, "sup"]))}
              className="font-black text-sm px-3 py-1 rounded-xl"
              style={{ background: revealed.has("sup") ? "#EF444422" : "rgba(255,255,255,0.06)", color: revealed.has("sup") ? "#EF4444" : "rgba(255,255,255,0.25)", border: `1px solid ${revealed.has("sup") ? "#EF444455" : "rgba(255,255,255,0.1)"}` }}>
              {revealed.has("sup") ? item.sup : "?"}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
      {!allRevealed && (
        <motion.button onClick={revealAll} className="w-full py-2.5 rounded-xl font-bold text-sm"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
          whileTap={{ scale: 0.97 }}>
          {lbl.tapToReveal}
        </motion.button>
      )}
      {allRevealed && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 3: Irregular forms — flip cards ────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const allFlipped = flipped.size >= IRREGULAR_FORMS.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {IRREGULAR_FORMS.map((item, i) => {
          const isFlipped = flipped.has(i);
          return (
            <motion.button key={item.base}
              onClick={() => setFlipped(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isFlipped ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isFlipped ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isFlipped ? { scale: 0.98 } : {}}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-white font-black text-lg">{item.base}</span>
                </div>
                {isFlipped ? (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2 items-center">
                    <span className="font-bold text-sm" style={{ color: "#F59E0B" }}>{item.komp}</span>
                    <span className="text-white/30">·</span>
                    <span className="font-bold text-sm" style={{ color: "#EF4444" }}>{item.sup}</span>
                  </motion.div>
                ) : (
                  <span className="text-white/30 text-xs">{lbl.tapToReveal}</span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
      {allFlipped && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 4: Umlaut forms — tap to discover ──────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= UMLAUT_FORMS.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {UMLAUT_FORMS.map((item, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={item.base}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-white font-black text-lg">{item.base}</span>
                  {isOpen && (
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${color}33`, color }}>
                      {item.vowel}
                    </motion.span>
                  )}
                </div>
                {isOpen ? (
                  <motion.div initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2 items-center text-right">
                    <span className="font-bold text-sm" style={{ color: "#F59E0B" }}>{item.komp}</span>
                    <span className="text-white/30 text-xs">·</span>
                    <span className="font-bold text-xs" style={{ color: "#EF4444" }}>{item.sup}</span>
                  </motion.div>
                ) : (
                  <span className="text-white/30 text-xs">{lbl.tapToReveal}</span>
                )}
              </div>
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

// ─── Round 5: MCQ — Komparativ / Superlativ ───────────────────────────────────
function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MIXED_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= MIXED_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
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
              {isCorrect ? `✅ ${lbl.correct} (${item.hint})` : `❌ → ${item.correct} (${item.hint})`}
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
const AdjectiveComparisonExplorer = memo(function AdjectiveComparisonExplorer({
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

export default AdjectiveComparisonExplorer;
