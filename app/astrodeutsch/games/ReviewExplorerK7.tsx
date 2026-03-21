"use client";
// ReviewExplorerK7 — Island i9: Große Prüfung (K7)
// Teaches: mixed review of all K7 topics: Konjunktiv I, Passiv, Stilmittel, Nebensatztypen, Infinitivkonstruktionen

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "K7 Big Review",
    round1Title: "Konjunktiv I",
    round1Hint: "Choose the correct Konjunktiv I form for indirect speech.",
    round2Title: "Werden-Passiv vs. Zustandspassiv",
    round2Hint: "Identify: is this a werden-Passiv or sein-Passiv?",
    round3Title: "Stilmittel",
    round3Hint: "What figure of speech is used?",
    round4Title: "Nebensatztyp",
    round4Hint: "Identify the type of subordinate clause.",
    round5Title: "Infinitivkonstruktionen",
    round5Hint: "Does this sentence need 'zu'?",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    werdenPassiv: "werden-Passiv",
    seinPassiv: "sein-Passiv",
    discovery: "💡 You're mastering German grammar! Active/passive, direct/indirect speech — these tools let you express any idea precisely.",
  },
  hu: {
    title: "7. osztály összefoglalás",
    round1Title: "Konjunktív I",
    round1Hint: "Válaszd ki a helyes Konjunktív I alakot a függő beszédhez.",
    round2Title: "werden-szenvedő vs. sein-szenvedő",
    round2Hint: "Azonosítsd: werden-Passiv vagy sein-Passiv?",
    round3Title: "Stíluseszköz",
    round3Hint: "Milyen stíluseszközt használnak?",
    round4Title: "Mellékmondat típusa",
    round4Hint: "Azonosítsd az alárendelt mondat típusát.",
    round5Title: "Infinitív szerkezetek",
    round5Hint: "Kell 'zu' ebbe a mondatba?",
    next: "Tovább",
    finish: "Kész!",
    correct: "Helyes!",
    werdenPassiv: "werden-Passiv",
    seinPassiv: "sein-Passiv",
    discovery: "💡 Kiváló német nyelvtan tanulásban! Aktív/passzív, közvetlen/függő beszéd — ezek az eszközök lehetővé teszik bármely ötlet pontos kifejezését.",
  },
  de: {
    title: "K7 Große Wiederholung",
    round1Title: "Konjunktiv I",
    round1Hint: "Wähle die richtige Konjunktiv-I-Form für die indirekte Rede.",
    round2Title: "Werden-Passiv vs. Zustandspassiv",
    round2Hint: "Erkenne: Handlungspassiv (werden) oder Zustandspassiv (sein)?",
    round3Title: "Stilmittel",
    round3Hint: "Welches Stilmittel wird verwendet?",
    round4Title: "Nebensatztyp",
    round4Hint: "Erkenne den Typ des Nebensatzes.",
    round5Title: "Infinitivkonstruktionen",
    round5Hint: "Braucht dieser Satz 'zu'?",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    werdenPassiv: "Handlungspassiv",
    seinPassiv: "Zustandspassiv",
    discovery: "💡 Du beherrschst die deutsche Grammatik! Aktiv/Passiv, direkte/indirekte Rede — diese Werkzeuge ermöglichen dir, jede Idee präzise auszudrücken.",
  },
  ro: {
    title: "Recapitulare K7",
    round1Title: "Conjunctiv I",
    round1Hint: "Alege forma corectă de Conjunctiv I pentru vorbirea indirectă.",
    round2Title: "Pasiv cu werden vs. sein",
    round2Hint: "Identifică: pasiv cu werden sau pasiv cu sein?",
    round3Title: "Figuri de stil",
    round3Hint: "Ce figură de stil este folosită?",
    round4Title: "Tipul propoziției subordonate",
    round4Hint: "Identifică tipul propoziției subordonate.",
    round5Title: "Construcții infinitivale",
    round5Hint: "Are nevoie de 'zu' această propoziție?",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    werdenPassiv: "Pasiv cu werden",
    seinPassiv: "Pasiv cu sein",
    discovery: "💡 Stăpânești gramatica germană! Activ/pasiv, vorbire directă/indirectă — aceste instrumente îți permit să exprimi orice idee cu precizie.",
  },
};

// Round 1: Konjunktiv I — indirect speech form
const MCQ1 = [
  {
    sentence: 'Er sagt, er ___ müde.',
    options: ["ist", "sei", "wäre"],
    correct: "sei",
    label: "Konjunktiv I: sei",
  },
  {
    sentence: 'Sie erklärt, sie ___ das Buch.',
    options: ["hat", "habe", "hätte"],
    correct: "habe",
    label: "Konjunktiv I: habe",
  },
  {
    sentence: 'Er berichtet, er ___ morgen kommen.',
    options: ["wird", "werde", "würde"],
    correct: "werde",
    label: "Konjunktiv I: werde",
  },
  {
    sentence: 'Sie sagt, sie ___ Deutsch.',
    options: ["lernt", "lerne", "lernte"],
    correct: "lerne",
    label: "Konjunktiv I: lerne",
  },
];

// Round 2: Passiv type identification
const MCQ2 = [
  {
    sentence: "Das Fenster wird geöffnet.",
    options: ["Handlungspassiv", "Zustandspassiv"],
    correct: "Handlungspassiv",
    label: "werden + Partizip II = Handlung",
  },
  {
    sentence: "Das Fenster ist geöffnet.",
    options: ["Handlungspassiv", "Zustandspassiv"],
    correct: "Zustandspassiv",
    label: "sein + Partizip II = Zustand",
  },
  {
    sentence: "Die Tür wird geschlossen.",
    options: ["Handlungspassiv", "Zustandspassiv"],
    correct: "Handlungspassiv",
    label: "werden + Partizip II = Handlung",
  },
];

// Round 3: Stilmittel identification
const MCQ3 = [
  {
    sentence: '"Das Leben ist ein Traum."',
    options: ["Metapher", "Alliteration", "Vergleich"],
    correct: "Metapher",
  },
  {
    sentence: '"Er läuft wie der Wind."',
    options: ["Hyperbel", "Personifikation", "Vergleich"],
    correct: "Vergleich",
  },
  {
    sentence: '"Die Bäume tanzen im Sturm."',
    options: ["Vergleich", "Personifikation", "Metapher"],
    correct: "Personifikation",
  },
  {
    sentence: '"Nie, nie, nie!"',
    options: ["Anapher", "Wiederholung", "Klimax"],
    correct: "Wiederholung",
  },
];

// Round 4: Nebensatztyp
const MCQ4 = [
  {
    sentence: '"Er bleibt zuhause, weil er krank ist."',
    options: ["Kausalsatz", "Konditionalsatz", "Temporalsatz"],
    correct: "Kausalsatz",
    label: "weil = Grund/Ursache",
  },
  {
    sentence: '"Wenn du lernst, wirst du erfolgreich sein."',
    options: ["Finalsatz", "Konditionalsatz", "Konzessivsatz"],
    correct: "Konditionalsatz",
    label: "wenn = Bedingung",
  },
  {
    sentence: '"Obwohl es regnet, gehen wir spazieren."',
    options: ["Kausalsatz", "Finalsatz", "Konzessivsatz"],
    correct: "Konzessivsatz",
    label: "obwohl = Einräumung",
  },
  {
    sentence: '"Als er ankam, war es schon dunkel."',
    options: ["Temporalsatz", "Kausalsatz", "Finalsatz"],
    correct: "Temporalsatz",
    label: "als = Zeitpunkt",
  },
];

// Round 5: Infinitivkonstruktionen — with or without zu
const MCQ5 = [
  {
    sentence: "Er versucht, mehr ___ schlafen.",
    options: ["zu", "—", "um zu"],
    correct: "zu",
    label: "nach versuchen → zu + Infinitiv",
  },
  {
    sentence: "Sie geht in die Bibliothek, ___ Bücher lesen.",
    options: ["zu", "um zu", "ohne zu"],
    correct: "um zu",
    label: "um...zu = Zweck/Absicht",
  },
  {
    sentence: "Er kann ___ kommen.",
    options: ["zu", "—", "um zu"],
    correct: "—",
    label: "nach Modalverb → kein zu!",
  },
  {
    sentence: "Sie hofft, bald ___ kommen.",
    options: ["—", "zu", "um zu"],
    correct: "zu",
    label: "nach hoffen → zu + Infinitiv",
  },
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

function MCQRound({
  title, hint, items, color, lbl, onDone, lang,
}: {
  title: string;
  hint: string;
  items: { sentence: string; options: string[]; correct: string; label?: string }[];
  color: string;
  lbl: Record<string, string>;
  onDone: () => void;
  lang?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = items[idx];
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= items.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{hint}</p>
      <div className="flex gap-1 justify-center">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <div className="flex items-center justify-center gap-2">
            <p className="text-white font-bold text-lg">{item.sentence}</p>
            <SpeakButton text={item.sentence} lang={"de"} size={16} />
          </div>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: selected === item.correct ? "#00FF88" : "#FF6B6B" }}>
              {selected === item.correct
                ? `✅ ${item.label ?? lbl.correct}`
                : `❌ → ${item.correct}${item.label ? ` (${item.label})` : ""}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full flex-wrap justify-center">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="flex-1 min-w-20 py-3 rounded-xl font-black text-sm"
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
const ReviewExplorerK7 = memo(function ReviewExplorerK7({
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

  // Map MCQ2 options to localized labels
  const mcq2Localized = MCQ2.map(item => ({
    ...item,
    options: [lbl.werdenPassiv, lbl.seinPassiv],
    correct: item.correct === "Handlungspassiv" ? lbl.werdenPassiv : lbl.seinPassiv,
    label: item.label,
  }));

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 px-1">
      <ProgressBar current={round} total={TOTAL_ROUNDS} color={color} />
      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && (
            <MCQRound title={lbl.round1Title} hint={lbl.round1Hint}
              items={MCQ1} color={color} lbl={lbl} onDone={next} lang={lang} />
          )}
          {round === 1 && (
            <MCQRound title={lbl.round2Title} hint={lbl.round2Hint}
              items={mcq2Localized} color={color} lbl={lbl} onDone={next} lang={lang} />
          )}
          {round === 2 && (
            <MCQRound title={lbl.round3Title} hint={lbl.round3Hint}
              items={MCQ3} color={color} lbl={lbl} onDone={next} lang={lang} />
          )}
          {round === 3 && (
            <MCQRound title={lbl.round4Title} hint={lbl.round4Hint}
              items={MCQ4} color={color} lbl={lbl} onDone={next} lang={lang} />
          )}
          {round === 4 && (
            <MCQRound title={lbl.round5Title} hint={lbl.round5Hint}
              items={MCQ5} color={color} lbl={lbl} onDone={finish} lang={lang} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ReviewExplorerK7;
