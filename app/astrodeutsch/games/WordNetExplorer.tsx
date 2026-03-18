"use client";
// WordNetExplorer — Islands i4+i5: Synonyme/Antonyme + Fremdwörter (K6)
// Teaches: synonym discovery, antonym memory pairs, foreign word origins, MCQ, memory match

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import MemoryPairCards from "./blocks/MemoryPairCards";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Word Network",
    round1Title: "Synonyms — Same Meaning",
    round1Hint: "Tap each synonym to see it highlighted!",
    round2Title: "Antonyms — Match the Opposites!",
    round2Hint: "Find all matching pairs!",
    round3Title: "Foreign Words — Where Do They Come From?",
    round3Hint: "Tap the flag to reveal the language origin!",
    round4Title: "Synonym or Antonym?",
    round4Hint: "What is a synonym for this word?",
    round5Title: "Match the Foreign Word",
    round5Hint: "Match the foreign word to its German equivalent!",
    next: "Next",
    finish: "Finished!",
    tapToReveal: "Tap the flag",
    correct: "Correct!",
    synonym: "Synonym",
    antonym: "Antonym",
    origin: "Origin",
  },
  hu: {
    title: "Szóháló",
    round1Title: "Szinonimák — azonos jelentés",
    round1Hint: "Koppints minden szinonimára, hogy kiemelt legyen!",
    round2Title: "Antonimák — találd meg az ellentétpárokat!",
    round2Hint: "Találd meg az összes párt!",
    round3Title: "Idegen szavak — honnan jönnek?",
    round3Hint: "Koppints a zászlóra az eredet felfedezéséhez!",
    round4Title: "Szinonima vagy antonima?",
    round4Hint: "Mi a szinonimája ennek a szónak?",
    round5Title: "Párosítsd az idegen szavakat",
    round5Hint: "Párosítsd az idegen szót a német megfelelőjével!",
    next: "Tovább",
    finish: "Kész!",
    tapToReveal: "Koppints a zászlóra",
    correct: "Helyes!",
    synonym: "Szinonima",
    antonym: "Antonima",
    origin: "Eredet",
  },
  de: {
    title: "Wortnetz",
    round1Title: "Synonyme — gleiche Bedeutung",
    round1Hint: "Tippe auf jedes Synonym, um es hervorzuheben!",
    round2Title: "Antonyme — finde die Gegenteile!",
    round2Hint: "Finde alle Paare!",
    round3Title: "Fremdwörter — woher kommen sie?",
    round3Hint: "Tippe auf die Flagge, um die Herkunft zu entdecken!",
    round4Title: "Synonym oder Antonym?",
    round4Hint: "Was ist ein Synonym für dieses Wort?",
    round5Title: "Fremdwort zuordnen",
    round5Hint: "Ordne das Fremdwort seinem deutschen Äquivalent zu!",
    next: "Weiter",
    finish: "Fertig!",
    tapToReveal: "Flagge antippen",
    correct: "Richtig!",
    synonym: "Synonym",
    antonym: "Antonym",
    origin: "Herkunft",
  },
  ro: {
    title: "Rețeaua cuvintelor",
    round1Title: "Sinonime — același înțeles",
    round1Hint: "Atinge fiecare sinonim pentru a-l evidenția!",
    round2Title: "Antonime — găsește perechile opuse!",
    round2Hint: "Găsește toate perechile!",
    round3Title: "Cuvinte străine — de unde vin?",
    round3Hint: "Atinge steagul pentru a descoperi originea!",
    round4Title: "Sinonim sau antonim?",
    round4Hint: "Care este sinonimul acestui cuvânt?",
    round5Title: "Potrivește cuvântul străin",
    round5Hint: "Potrivește cuvântul străin cu echivalentul german!",
    next: "Înainte",
    finish: "Gata!",
    tapToReveal: "Atinge steagul",
    correct: "Corect!",
    synonym: "Sinonim",
    antonym: "Antonim",
    origin: "Origine",
  },
};

const SYNONYM_GROUPS = [
  { word: "groß", synonyms: ["riesig", "gewaltig", "enorm"], color: "#3B82F6", emoji: "🏔️" },
  { word: "schnell", synonyms: ["rasch", "flink", "zügig"], color: "#10B981", emoji: "⚡" },
];

const ANTONYM_PAIRS = [
  { a: "groß", b: "klein" },
  { a: "laut", b: "leise" },
  { a: "hell", b: "dunkel" },
  { a: "schnell", b: "langsam" },
];

const FREMDWOERTER = [
  { word: "Telefon", flag: "🏛️", origin: "Griechisch", detail: "tele (fern) + phone (Stimme)" },
  { word: "Computer", flag: "🏛️", origin: "Latein", detail: "computare (berechnen)" },
  { word: "Pizza", flag: "🇮🇹", origin: "Italienisch", detail: "aus dem Italienischen" },
];

const MCQ4 = [
  { question: "Was ist ein Synonym für 'schnell'?", options: ["rasch", "langsam", "ruhig"], correct: "rasch" },
  { question: "Was ist ein Antonym für 'hell'?", options: ["dunkel", "strahlend", "weiß"], correct: "dunkel" },
  { question: "Was ist ein Synonym für 'beginnen'?", options: ["anfangen", "aufhören", "bleiben"], correct: "anfangen" },
];

const MEMORY5_PAIRS = [
  { a: "Computer", b: "Rechner" },
  { a: "Hobby", b: "Freizeitbeschäftigung" },
  { a: "Telefon", b: "Fernsprecher" },
  { a: "Foto", b: "Lichtbild" },
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
  const [revealedSynonyms, setRevealedSynonyms] = useState<Set<string>>(new Set());
  const allRevealed = SYNONYM_GROUPS.every(g => g.synonyms.every(s => revealedSynonyms.has(`${g.word}-${s}`)));
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      {SYNONYM_GROUPS.map((group) => (
        <div key={group.word} className="w-full rounded-2xl p-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${group.color}33` }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{group.emoji}</span>
            <span className="font-black text-lg" style={{ color: group.color }}>{group.word}</span>
            <span className="text-white/40 text-sm">=</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.synonyms.map(syn => {
              const key = `${group.word}-${syn}`;
              const revealed = revealedSynonyms.has(key);
              return (
                <motion.button key={syn}
                  onClick={() => setRevealedSynonyms(prev => new Set([...prev, key]))}
                  className="px-3 py-1.5 rounded-xl font-bold text-sm border-2"
                  style={{
                    background: revealed ? `${group.color}22` : "rgba(255,255,255,0.06)",
                    borderColor: revealed ? group.color : "rgba(255,255,255,0.15)",
                    color: revealed ? group.color : "rgba(255,255,255,0.7)",
                  }}
                  whileTap={!revealed ? { scale: 0.93 } : {}}>
                  {syn}
                </motion.button>
              );
            })}
          </div>
        </div>
      ))}
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <MemoryPairCards pairs={ANTONYM_PAIRS} color={color} onDone={() => { setDone(true); setTimeout(onNext, 700); }} />
      {done && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= FREMDWOERTER.length;
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      {FREMDWOERTER.map((fw, i) => {
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
            <span className="text-2xl">{fw.flag}</span>
            <div className="flex-1">
              <p className="font-black text-white text-base">{fw.word}</p>
              {open ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-sm font-bold" style={{ color }}>{fw.origin}</p>
                  <p className="text-white/50 text-xs italic">{fw.detail}</p>
                </motion.div>
              ) : (
                <p className="text-white/30 text-xs">{lbl.tapToReveal} {lbl.origin}</p>
              )}
            </div>
          </motion.button>
        );
      })}
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MCQ4[idx];
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= MCQ4.length) { setTimeout(onNext, 200); }
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 justify-center">
        {MCQ4.map((_, i) => (
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
              className="text-xs font-bold mt-2"
              style={{ color: selected === item.correct ? "#00FF88" : "#FF6B6B" }}>
              {selected === item.correct ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full flex-wrap">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="flex-1 py-3 rounded-xl font-black text-base"
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

function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <MemoryPairCards pairs={MEMORY5_PAIRS} color={color} onDone={() => { setDone(true); setTimeout(onDone, 700); }} />
      {done && (
        <motion.button onClick={onDone}
          className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
          style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
          whileTap={{ scale: 0.97 }}>
          {lbl.finish} <ChevronRight size={16} />
        </motion.button>
      )}
    </div>
  );
}

const WordNetExplorer = memo(function WordNetExplorer({
  color, lang = "de", onDone,
}: {
  color: string; lang?: string; onDone: (score: number, total: number) => void;
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

export default WordNetExplorer;
