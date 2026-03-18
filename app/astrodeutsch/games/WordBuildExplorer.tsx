"use client";
// WordBuildExplorer — Islands i7+i8: Wortbildung + Zeichensetzung (K6)
// Teaches: Komposita (WordCombine), Derivation (WordCombine), Doppelpunkt, Gedankenstrich, MCQ

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import WordCombine from "./blocks/WordCombine";
import TapToHighlight from "./blocks/TapToHighlight";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Word Formation & Punctuation",
    round1Title: "Compound Words",
    round1Hint: "Tap the parts in order to build the word!",
    round2Title: "Word Derivation",
    round2Hint: "Tap prefix/stem/suffix to build the derived word!",
    round3Title: "The Colon (:)",
    round3Hint: "Tap the word/phrase that the colon introduces.",
    round4Title: "The Dash (—)",
    round4Hint: "The dash sets off a parenthetical aside. Tap the aside!",
    round5Title: "Correct Punctuation",
    round5Hint: "Choose the right punctuation mark or word form.",
    next: "Next",
    finish: "Finished!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    check: "Check",
    rule: "Rule",
    colon: "colon = introduces a list or explanation",
    dash: "dash = parenthetical aside",
    compound: "Compound",
    derived: "Derived word",
  },
  hu: {
    title: "Szóalkotás & Írásjelek",
    round1Title: "Összetett szavak",
    round1Hint: "Koppints a részekre sorban, hogy összerakd a szót!",
    round2Title: "Szóképzés",
    round2Hint: "Koppints az előtagra/tőre/utótagra a szó összerakásához!",
    round3Title: "A kettőspont (:)",
    round3Hint: "Koppints a szóra/kifejezésre, amelyet a kettőspont bevezet.",
    round4Title: "A gondolatjel (—)",
    round4Hint: "A gondolatjel közbevetést jelöl. Koppints a közbevetésre!",
    round5Title: "Helyes írásjel",
    round5Hint: "Válaszd ki a helyes írásjelet vagy szóalakot.",
    next: "Tovább",
    finish: "Kész!",
    tapToReveal: "Koppints",
    correct: "Helyes!",
    check: "Ellenőrzés",
    rule: "Szabály",
    colon: "kettőspont = listát vagy magyarázatot vezet be",
    dash: "gondolatjel = közbevetés",
    compound: "Összetett szó",
    derived: "Képzett szó",
  },
  de: {
    title: "Wortbildung & Zeichensetzung",
    round1Title: "Komposita",
    round1Hint: "Tippe die Teile der Reihe nach an, um das Wort zu bauen!",
    round2Title: "Wortableitung",
    round2Hint: "Tippe Präfix/Stamm/Suffix, um das abgeleitete Wort zu bauen!",
    round3Title: "Der Doppelpunkt (:)",
    round3Hint: "Tippe auf das Wort/den Ausdruck, den der Doppelpunkt einleitet.",
    round4Title: "Der Gedankenstrich (—)",
    round4Hint: "Der Gedankenstrich markiert eine Einschaltung. Tippe darauf!",
    round5Title: "Richtige Zeichensetzung",
    round5Hint: "Wähle das richtige Satzzeichen oder die richtige Wortform.",
    next: "Weiter",
    finish: "Fertig!",
    tapToReveal: "Antippen",
    correct: "Richtig!",
    check: "Prüfen",
    rule: "Regel",
    colon: "Doppelpunkt = leitet Liste oder Erklärung ein",
    dash: "Gedankenstrich = Einschaltung/Parenthese",
    compound: "Kompositum",
    derived: "Ableitung",
  },
  ro: {
    title: "Formare de cuvinte & Punctuație",
    round1Title: "Cuvinte compuse",
    round1Hint: "Atinge părțile în ordine pentru a construi cuvântul!",
    round2Title: "Derivarea cuvintelor",
    round2Hint: "Atinge prefixul/rădăcina/sufixul pentru a forma cuvântul!",
    round3Title: "Două puncte (:)",
    round3Hint: "Atinge cuvântul/expresia pe care îl introduce semnul două puncte.",
    round4Title: "Linia de pauză (—)",
    round4Hint: "Linia de pauză marchează o intercalare. Atinge-o!",
    round5Title: "Punctuație corectă",
    round5Hint: "Alege semnul de punctuație corect sau forma cuvântului.",
    next: "Înainte",
    finish: "Gata!",
    tapToReveal: "Atinge",
    correct: "Corect!",
    check: "Verifică",
    rule: "Regulă",
    colon: "două puncte = introduce o listă sau explicație",
    dash: "linie de pauză = intercalare",
    compound: "Cuvânt compus",
    derived: "Cuvânt derivat",
  },
};

const KOMPOSITA = [
  { prefix: "Haus", stem: "Tür", suffix: undefined, result: "Haustür" },
  { prefix: "Hand", stem: "Schuh", suffix: undefined, result: "Handschuh" },
];

const ABLEITUNGEN = [
  { prefix: "un-", stem: "möglich", suffix: undefined, result: "unmöglich" },
  { prefix: undefined, stem: "Schön", suffix: "-heit", result: "Schönheit" },
];

// Round 3 TapToHighlight: tap what follows the colon
// "Er sagte: Ich komme morgen." → "Ich" is index 2 (after colon)
const COLON_SENTENCES = [
  { sentence: "Er sagte: Ich komme morgen.", correctIndices: [2, 3, 4], rule: ": introduces speech" },
  { sentence: "Zutaten: Mehl, Zucker, Eier.", correctIndices: [1, 2, 3, 4], rule: ": introduces list" },
];

// Round 4 TapToHighlight: tap the Gedankenstrich aside
// "Er kam — wie immer — zu spät." → indices 2,3,4 = "— wie immer —"
const DASH_SENTENCE = {
  sentence: "Er kam — wie immer — zu spät.",
  correctIndices: [2, 3, 4],
  aside: "wie immer",
};

const MCQ5 = [
  { sentence: "Er sagte ___ Ich bin müde.", options: [":", "—", ","], correct: ":" },
  { sentence: "Sie kam ___ wie erwartet ___ zu spät.", options: ["—", ":", ","], correct: "—" },
  { sentence: "Das ist ___ unmöglich!", options: ["un-", "mis-", "non-"], correct: "un-" },
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
  const [step, setStep] = useState(0);
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex gap-1 justify-center mb-1">
        {KOMPOSITA.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < step ? "#00FF88" : i === step ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          {step < KOMPOSITA.length ? (
            <WordCombine
              prefix={KOMPOSITA[step].prefix}
              stem={KOMPOSITA[step].stem}
              suffix={KOMPOSITA[step].suffix}
              result={KOMPOSITA[step].result}
              color={color}
              onDone={(_) => setTimeout(() => {
                if (step + 1 >= KOMPOSITA.length) onNext();
                else setStep(s => s + 1);
              }, 1200)}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [step, setStep] = useState(0);
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 justify-center mb-1">
        {ABLEITUNGEN.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < step ? "#00FF88" : i === step ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          {step < ABLEITUNGEN.length ? (
            <WordCombine
              prefix={ABLEITUNGEN[step].prefix}
              stem={ABLEITUNGEN[step].stem}
              suffix={ABLEITUNGEN[step].suffix}
              result={ABLEITUNGEN[step].result}
              color={color}
              onDone={(_) => setTimeout(() => {
                if (step + 1 >= ABLEITUNGEN.length) onNext();
                else setStep(s => s + 1);
              }, 1200)}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const item = COLON_SENTENCES[idx];
  const handleDone = (_: boolean) => {
    if (idx + 1 >= COLON_SENTENCES.length) setTimeout(onNext, 900);
    else setTimeout(() => setIdx(i => i + 1), 900);
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="w-full rounded-2xl p-3 text-center"
        style={{ background: `${color}12`, border: `2px solid ${color}33` }}>
        <p className="text-xs font-bold" style={{ color }}>{lbl.colon}</p>
      </div>
      <div className="flex gap-1 justify-center">
        {COLON_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <TapToHighlight
            sentence={item.sentence}
            correctIndices={item.correctIndices}
            color={color}
            label={item.rule}
            checkLabel={lbl.check}
            onDone={handleDone}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const handleDone = (_: boolean) => setTimeout(onNext, 900);
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="w-full rounded-2xl p-3 text-center"
        style={{ background: `${color}12`, border: `2px solid ${color}33` }}>
        <p className="text-xs font-bold" style={{ color }}>{lbl.dash}</p>
      </div>
      <TapToHighlight
        sentence={DASH_SENTENCE.sentence}
        correctIndices={DASH_SENTENCE.correctIndices}
        color={color}
        label={`Tippe auf: "${DASH_SENTENCE.aside}"`}
        checkLabel={lbl.check}
        onDone={handleDone}
      />
    </div>
  );
}

function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MCQ5[idx];
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= MCQ5.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
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
          <p className="text-white font-bold text-base">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: selected === item.correct ? "#00FF88" : "#FF6B6B" }}>
              {selected === item.correct ? `✅ ${lbl.correct}` : `❌ → "${item.correct}"`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
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

const WordBuildExplorer = memo(function WordBuildExplorer({
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

export default WordBuildExplorer;
