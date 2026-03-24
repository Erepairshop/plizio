"use client";
// ReviewExplorerK8 — Island i9: Große Prüfung (K8)
// Teaches: mixed review of all K8 topics: Konjunktiv, Passiv, Partizipien, Stilmittel, Literaturepochen

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "K8 Big Review",
    round1Title: "Konjunktiv I & II",
    round1Hint: "Choose the correct subjunctive form.",
    round2Title: "Passive & Alternatives",
    round2Hint: "Identify the passive type or its replacement.",
    round3Title: "Partizipialkonstruktionen",
    round3Hint: "Transform between participle attributes and relative clauses.",
    round4Title: "Stilmittel & Rhetorik",
    round4Hint: "Which stylistic device is used?",
    round5Title: "Literaturepochen",
    round5Hint: "Match the work or feature to the literary epoch.",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    discovery: "💡 At this level, you can analyze texts like a pro! Style devices, sentence analysis, and advanced grammar are your tools.",
  },
  hu: {
    title: "8. osztály összefoglalás",
    round1Title: "Konjunktív I & II",
    round1Hint: "Válaszd ki a helyes kötőmód-alakot.",
    round2Title: "Szenvedő szerkezet & alternatívák",
    round2Hint: "Azonosítsd a szenvedő típust vagy kiváltóját.",
    round3Title: "Melléknévi igeneves szerkezetek",
    round3Hint: "Alakítsd át igeneves szerkezet és vonatkozói mondat között.",
    round4Title: "Stíluseszközök & Retorika",
    round4Hint: "Milyen stíluseszközt használnak?",
    round5Title: "Irodalmi korszakok",
    round5Hint: "Párosítsd a művet vagy jellemzőt a korszakkal.",
    next: "Tovább",
    finish: "Kész!",
    correct: "Helyes!",
    discovery: "💡 Ezen a szinten profi szövegelemző lehetsz! A stíluseszközök, mondatelemzés és fejlett nyelvtan az eszközeid.",
  },
  de: {
    title: "K8 Große Wiederholung",
    round1Title: "Konjunktiv I & II",
    round1Hint: "Wähle die richtige Konjunktivform.",
    round2Title: "Passiv & Passiversatz",
    round2Hint: "Erkenne den Passivtyp oder seine Alternative.",
    round3Title: "Partizipialkonstruktionen",
    round3Hint: "Wandle zwischen Partizipialattribut und Relativsatz um.",
    round4Title: "Stilmittel & Rhetorik",
    round4Hint: "Welches Stilmittel wird verwendet?",
    round5Title: "Literaturepochen",
    round5Hint: "Ordne das Werk oder Merkmal der Epoche zu.",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    discovery: "💡 Auf dieser Stufe kannst du Texte wie ein Profi analysieren! Stilmittel, Satzanalyse und fortgeschrittene Grammatik sind deine Werkzeuge.",
  },
  ro: {
    title: "Recapitulare K8",
    round1Title: "Conjunctiv I & II",
    round1Hint: "Alege forma corectă de conjunctiv.",
    round2Title: "Pasiv & Alternative",
    round2Hint: "Identifică tipul de pasiv sau înlocuitorul lui.",
    round3Title: "Construcții participiale",
    round3Hint: "Transformă între atribut participial și propoziție relativă.",
    round4Title: "Figuri de stil & Retorică",
    round4Hint: "Ce figură de stil este folosită?",
    round5Title: "Epoci literare",
    round5Hint: "Asociază opera sau trăsătura cu epoca literară.",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    discovery: "💡 La acest nivel, poți analiza texte ca un profesionist! Figurile de stil, analiza propoziției și gramatica avansată sunt instrumentele tale.",
  },
};

// Round 1: Konjunktiv I & II mixed
const MCQ1 = [
  {
    sentence: 'Er sagt, er ___ keine Zeit.',
    options: ["hat", "habe", "hätte", "hatte"],
    correct: "habe",
    label: "Konjunktiv I (indirekte Rede)",
  },
  {
    sentence: 'Wenn ich reich ___, würde ich reisen.',
    options: ["bin", "sei", "wäre", "war"],
    correct: "wäre",
    label: "Konjunktiv II (irrealer Wunsch)",
  },
  {
    sentence: 'Sie berichtet, sie ___ den Film gesehen.',
    options: ["hat", "habe", "hätte", "hatte"],
    correct: "habe",
    label: "Konjunktiv I (indirekte Rede, Perfekt)",
  },
  {
    sentence: 'An deiner Stelle ___ ich zum Arzt gehen.',
    options: ["werde", "wäre", "würde", "wollte"],
    correct: "würde",
    label: "Konjunktiv II (höflicher Ratschlag)",
  },
];

// Round 2: Passiv & Passiversatz
const MCQ2 = [
  {
    sentence: "Das Buch wird von vielen gelesen.",
    options: ["Vorgangspassiv", "Zustandspassiv", "Passiversatz"],
    correct: "Vorgangspassiv",
    label: "werden + Part. II = Vorgang",
  },
  {
    sentence: "Das Problem ist gelöst.",
    options: ["Vorgangspassiv", "Zustandspassiv", "Passiversatz"],
    correct: "Zustandspassiv",
    label: "sein + Part. II = Zustand",
  },
  {
    sentence: "Dieses Buch lässt sich leicht lesen.",
    options: ["Vorgangspassiv", "Zustandspassiv", "Passiversatz"],
    correct: "Passiversatz",
    label: "sich lassen + Inf. = Passiversatz",
  },
  {
    sentence: "Die Aufgabe ist zu erledigen.",
    options: ["Vorgangspassiv", "Zustandspassiv", "Passiversatz"],
    correct: "Passiversatz",
    label: "sein + zu + Inf. = Passiversatz",
  },
];

// Round 3: Partizipialkonstruktionen
const MCQ3 = [
  {
    sentence: '"der im Park spielende Junge" — Was ist das?',
    options: ["Partizip I (Attribut)", "Partizip II (Attribut)", "Relativsatz"],
    correct: "Partizip I (Attribut)",
    label: "spielend → aktiv, gleichzeitig",
  },
  {
    sentence: '"das geschriebene Buch" — Welches Partizip?',
    options: ["Partizip I", "Partizip II", "Infinitiv"],
    correct: "Partizip II",
    label: "geschrieben → abgeschlossen, passiv",
  },
  {
    sentence: '"die zu erledigende Aufgabe" — Was drückt das aus?',
    options: ["Abgeschlossene Handlung", "Möglichkeit/Notwendigkeit", "Gegenwart"],
    correct: "Möglichkeit/Notwendigkeit",
    label: "zu + Part. I = Gerundivum",
  },
  {
    sentence: 'Wandle um: "das reparierte Auto" → ?',
    options: ["das Auto, das repariert wurde", "das Auto, das repariert", "das Auto repariert"],
    correct: "das Auto, das repariert wurde",
    label: "Part. II → Relativsatz (Passiv)",
  },
];

// Round 4: Stilmittel & Rhetorik
const MCQ4 = [
  {
    sentence: '"Ist das nicht wunderbar?" (keine echte Frage)',
    options: ["Rhetorische Frage", "Klimax", "Ellipse"],
    correct: "Rhetorische Frage",
  },
  {
    sentence: '"Er kam, sah, siegte."',
    options: ["Parallelismus", "Klimax", "Anapher"],
    correct: "Klimax",
    label: "Steigerung: kommen → sehen → siegen",
  },
  {
    sentence: '"Arm und reich, jung und alt."',
    options: ["Metapher", "Antithese", "Alliteration"],
    correct: "Antithese",
    label: "Gegensatzpaare = Antithese",
  },
  {
    sentence: '"Heute nicht. Morgen auch nicht."',
    options: ["Ellipse", "Ironie", "Hyperbel"],
    correct: "Ellipse",
    label: "Unvollständiger Satz = Ellipse",
  },
];

// Round 5: Literaturepochen
const MCQ5 = [
  {
    sentence: 'Gefühl, Natur, Sehnsucht — welche Epoche?',
    options: ["Aufklärung", "Romantik", "Realismus"],
    correct: "Romantik",
    label: "Romantik (~1795–1848)",
  },
  {
    sentence: '"Sturm und Drang" betont...',
    options: ["Vernunft und Ordnung", "Gefühl und Rebellion", "Sachlichkeit"],
    correct: "Gefühl und Rebellion",
    label: "Sturm und Drang (~1765–1790)",
  },
  {
    sentence: 'Welche Epoche betont Vernunft und Rationalität?',
    options: ["Barock", "Aufklärung", "Expressionismus"],
    correct: "Aufklärung",
    label: "Aufklärung (~1720–1800)",
  },
  {
    sentence: '"Die Verwandlung" (Kafka) gehört zum...',
    options: ["Naturalismus", "Expressionismus", "Romantik"],
    correct: "Expressionismus",
    label: "Expressionismus (~1910–1925)",
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
const ReviewExplorerK8 = memo(function ReviewExplorerK8({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const [showTeach, setShowTeach] = useState(true);
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
          {round === 0 && (
            <MCQRound title={lbl.round1Title} hint={lbl.round1Hint}
              items={MCQ1} color={color} lbl={lbl} onDone={next} lang={lang} />
          )}
          {round === 1 && (
            <MCQRound title={lbl.round2Title} hint={lbl.round2Hint}
              items={MCQ2} color={color} lbl={lbl} onDone={next} lang={lang} />
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

export default ReviewExplorerK8;
