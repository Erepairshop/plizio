"use client";
// ReviewExplorerK5 — Island i9: Review Mix (K5)
// 5 review rounds covering all K5 topics: Steigerung, Pronomen, Partizip, Passiv, Spelling

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "K5 Review Mix",
    round1Title: "Steigerung Quick Round",
    round1Hint: "Choose the correct comparative or superlative form.",
    round2Title: "Pronomen in Context",
    round2Hint: "Select the correct personal or relative pronoun.",
    round3Title: "Partizip I or II?",
    round3Hint: "Identify or complete the participle form.",
    round4Title: "Active or Passive?",
    round4Hint: "Identify whether the sentence is active or passive.",
    round5Title: "Spelling & Word Building",
    round5Hint: "Choose ss/ß or the correct word form.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    topic: "Topic",
    steigerung: "Comparison",
    pronomen: "Pronoun",
    partizip: "Participle",
    passiv: "Passive",
    spelling: "Spelling",
  },
  hu: {
    title: "K5 Vegyes ismétlés",
    round1Title: "Fokozás gyors kör",
    round1Hint: "Válaszd ki a helyes közép- vagy felsőfokot.",
    round2Title: "Névmások szövegkörnyezetben",
    round2Hint: "Válaszd ki a helyes személyes vagy vonatkozó névmást.",
    round3Title: "Partizip I vagy II?",
    round3Hint: "Azonosítsd vagy egészítsd ki az igenév alakot.",
    round4Title: "Cselekvő vagy szenvedő?",
    round4Hint: "Döntsd el, hogy a mondat cselekvő vagy szenvedő szerkezetű.",
    round5Title: "Helyesírás & Szóalkotás",
    round5Hint: "Válaszd az ss/ß-t vagy a helyes szóalakot.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    topic: "Témakör",
    steigerung: "Fokozás",
    pronomen: "Névmás",
    partizip: "Igenév",
    passiv: "Szenvedő szerkezet",
    spelling: "Helyesírás",
  },
  de: {
    title: "K5-Wiederholungsmix",
    round1Title: "Steigerung — Schnelldurchlauf",
    round1Hint: "Wähle die richtige Komparativ- oder Superlativform.",
    round2Title: "Pronomen im Kontext",
    round2Hint: "Wähle das richtige Personal- oder Relativpronomen.",
    round3Title: "Partizip I oder II?",
    round3Hint: "Erkenne oder vervollständige die Partizipform.",
    round4Title: "Aktiv oder Passiv?",
    round4Hint: "Bestimme, ob der Satz Aktiv oder Passiv ist.",
    round5Title: "Rechtschreibung & Wortbildung",
    round5Hint: "Wähle ss/ß oder die korrekte Wortform.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    topic: "Thema",
    steigerung: "Steigerung",
    pronomen: "Pronomen",
    partizip: "Partizip",
    passiv: "Passiv",
    spelling: "Rechtschreibung",
  },
  ro: {
    title: "Mix recapitulare K5",
    round1Title: "Grad de comparație — Rundă rapidă",
    round1Hint: "Alege forma corectă de comparativ sau superlativ.",
    round2Title: "Pronume în context",
    round2Hint: "Selectează pronumele personal sau relativ corect.",
    round3Title: "Partizip I sau II?",
    round3Hint: "Identifică sau completează forma participiului.",
    round4Title: "Activ sau pasiv?",
    round4Hint: "Identifică dacă propoziția este la diateza activă sau pasivă.",
    round5Title: "Ortografie & Formare de cuvinte",
    round5Hint: "Alege ss/ß sau forma corectă a cuvântului.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    topic: "Subiect",
    steigerung: "Comparație",
    pronomen: "Pronume",
    partizip: "Participiu",
    passiv: "Pasiv",
    spelling: "Ortografie",
  },
};

const ROUND1_QUIZ = [
  { sentence: "Er ist ___ als sein Bruder.", options: ["groß", "größer", "am größten"], correct: "größer", topic: "steigerung" },
  { sentence: "Das ist das ___ Auto.", options: ["schnell", "schneller", "schnellste"], correct: "schnellste", topic: "steigerung" },
  { sentence: "Sie läuft ___ als ich.", options: ["gut", "besser", "am besten"], correct: "besser", topic: "steigerung" },
  { sentence: "Es ist das ___ Wetter.", options: ["schön", "schöner", "schönste"], correct: "schönste", topic: "steigerung" },
];

const ROUND2_QUIZ = [
  { sentence: "Ich helfe ___.", options: ["er", "ihn", "ihm"], correct: "ihm", topic: "pronomen" },
  { sentence: "Das Buch, ___ ich lese, ist toll.", options: ["der", "das", "dem"], correct: "das", topic: "pronomen" },
  { sentence: "Er wäscht ___.", options: ["sich", "ihm", "er"], correct: "sich", topic: "pronomen" },
  { sentence: "Die Frau, ___ singt, ist bekannt.", options: ["der", "die", "das"], correct: "die", topic: "pronomen" },
];

const ROUND3_QUIZ = [
  { sentence: "Das ___ Kind schläft.", options: ["geschlafene", "schlafende", "schläfende"], correct: "schlafende", topic: "partizip", hint: "Partizip I → schlafend" },
  { sentence: "Das ___ Fenster ist kaputt.", options: ["brechende", "gebrochene", "bricht"], correct: "gebrochene", topic: "partizip", hint: "Partizip II → gebrochen" },
  { sentence: "Der ___ Brief liegt hier.", options: ["schreibende", "geschriebene", "schreibende"], correct: "geschriebene", topic: "partizip", hint: "Partizip II → geschrieben" },
  { sentence: "Ich sehe den ___ Vogel.", options: ["gesungenen", "singenden", "singt"], correct: "singenden", topic: "partizip", hint: "Partizip I → singend" },
];

const ROUND4_QUIZ = [
  { sentence: "Das Haus wurde gebaut.", options: ["Aktiv", "Passiv"], correct: "Passiv", topic: "passiv" },
  { sentence: "Der Hund frisst das Brot.", options: ["Aktiv", "Passiv"], correct: "Aktiv", topic: "passiv" },
  { sentence: "Die Aufgabe wird erklärt.", options: ["Aktiv", "Passiv"], correct: "Passiv", topic: "passiv" },
  { sentence: "Sie schreibt einen Brief.", options: ["Aktiv", "Passiv"], correct: "Aktiv", topic: "passiv" },
];

const ROUND5_QUIZ = [
  { sentence: "___ ist ein Fluss.", options: ["Waser", "Wasser", "Waßer"], correct: "Wasser", topic: "spelling" },
  { sentence: "Die ___ ist lang.", options: ["Strasse", "Straße", "Strase"], correct: "Straße", topic: "spelling" },
  { sentence: "Er ist ___ (unglücklich).", options: ["unglüklich", "unglücklich", "Unglücklich"], correct: "unglücklich", topic: "spelling" },
  { sentence: "Das Haustür = Haus + ___", options: ["Tür", "tür", "Türe"], correct: "Tür", topic: "spelling" },
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

type QuizItem = { sentence: string; options: string[]; correct: string; topic: string; hint?: string };

function QuizRound({
  title, hint, items, color, lbl, onDone,
}: {
  title: string; hint: string; items: QuizItem[]; color: string; lbl: Record<string, string>; onDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = items[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= items.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{hint}</p>
      <div className="flex items-center gap-2">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
        <span className="text-xs font-bold px-2 py-0.5 rounded-full ml-1"
          style={{ background: `${color}22`, color }}>
          {lbl[item.topic] ?? item.topic}
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-base">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
              {!isCorrect && item.hint ? ` (${item.hint})` : ""}
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
const ReviewExplorerK5 = memo(function ReviewExplorerK5({
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
          {round === 0 && (
            <QuizRound title={lbl.round1Title} hint={lbl.round1Hint}
              items={ROUND1_QUIZ} color={color} lbl={lbl} onDone={next} />
          )}
          {round === 1 && (
            <QuizRound title={lbl.round2Title} hint={lbl.round2Hint}
              items={ROUND2_QUIZ} color={color} lbl={lbl} onDone={next} />
          )}
          {round === 2 && (
            <QuizRound title={lbl.round3Title} hint={lbl.round3Hint}
              items={ROUND3_QUIZ} color={color} lbl={lbl} onDone={next} />
          )}
          {round === 3 && (
            <QuizRound title={lbl.round4Title} hint={lbl.round4Hint}
              items={ROUND4_QUIZ} color={color} lbl={lbl} onDone={next} />
          )}
          {round === 4 && (
            <QuizRound title={lbl.round5Title} hint={lbl.round5Hint}
              items={ROUND5_QUIZ} color={color} lbl={lbl} onDone={finish} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ReviewExplorerK5;
