"use client";
// SentenceAnalysisExplorer — Island i4: Satzglieder (K5 advanced)
// Teaches: 5 sentence parts incl. Adverbiale types, word order flexibility, adjective declension preview, MCQ

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Sentence Analysis",
    round1Title: "5 Sentence Parts",
    round1Hint: "Tap each part to see its role and an example!",
    round2Title: "Adverbiale Types",
    round2Hint: "Tap the highlighted word — what kind of Adverbiale is it?",
    round3Title: "Moveable Adverbiale",
    round3Hint: "Both sentences mean the same! Tap each to compare.",
    round4Title: "Adjective Declension",
    round4Hint: "Tap to reveal how the adjective ending changes!",
    round5Title: "Sentence Part Challenge",
    round5Hint: "Identify the role of the highlighted word.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    subjekt: "Subjekt",
    praedikat: "Prädikat",
    akkObj: "Akkusativobjekt",
    datObj: "Dativobjekt",
    adverbiale: "Adverbiale",
    lokaladv: "Lokaladverbiale (wo?)",
    temporaladv: "Temporaladverbiale (wann?)",
    modaladv: "Modaladverbiale (wie?)",
    kausaladv: "Kausaladverbiale (warum?)",
    discovery: "💡 Sentence analysis (Satzgliedbestimmung) means identifying each part's role. Ask questions: Wer? Was? Wem? Wo? Wann? to find each part!",
  },
  hu: {
    title: "Mondatelemzés",
    round1Title: "5 mondatrész",
    round1Hint: "Koppints minden mondatrészre a szerepük és egy példa megtekintéséhez!",
    round2Title: "Határozói típusok",
    round2Hint: "Koppints a kiemelt szóra — milyen határozó ez?",
    round3Title: "Mozgatható határozó",
    round3Hint: "Mindkét mondat ugyanazt jelenti! Koppints mindkettőre az összehasonlításhoz.",
    round4Title: "Melléknév ragozása",
    round4Hint: "Koppints, hogy meglásd hogyan változik a melléknév végzete!",
    round5Title: "Mondatrész kihívás",
    round5Hint: "Azonosítsd a kiemelt szó szerepét.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    subjekt: "Alany",
    praedikat: "Állítmány",
    akkObj: "Tárgy (Akkusativ)",
    datObj: "Részestárgy (Dativ)",
    adverbiale: "Határozó",
    lokaladv: "Helyhatározó (hol?)",
    temporaladv: "Időhatározó (mikor?)",
    modaladv: "Módhatározó (hogyan?)",
    kausaladv: "Okhatározó (miért?)",
    discovery: "💡 A mondatelemzés (Satzgliedbestimmung) az egyes részek szerepének azonosítása. Kérdezz: Wer? Was? Wem? Wo? Wann? hogy megtaláld az egyes részeket!",
  },
  de: {
    title: "Satzgliederanalyse",
    round1Title: "5 Satzglieder",
    round1Hint: "Tippe auf jedes Satzglied, um seine Funktion und ein Beispiel zu sehen!",
    round2Title: "Adverbiale-Typen",
    round2Hint: "Tippe auf das hervorgehobene Wort — welches Adverbial ist es?",
    round3Title: "Verschiebbare Adverbiale",
    round3Hint: "Beide Sätze haben dieselbe Bedeutung! Tippe zum Vergleichen.",
    round4Title: "Adjektivdeklination",
    round4Hint: "Tippe, um zu sehen wie sich die Adjektivendung verändert!",
    round5Title: "Satzglieder-Herausforderung",
    round5Hint: "Bestimme die Funktion des hervorgehobenen Wortes.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    subjekt: "Subjekt",
    praedikat: "Prädikat",
    akkObj: "Akkusativobjekt",
    datObj: "Dativobjekt",
    adverbiale: "Adverbiale",
    lokaladv: "Lokaladverbiale (wo?)",
    temporaladv: "Temporaladverbiale (wann?)",
    modaladv: "Modaladverbiale (wie?)",
    kausaladv: "Kausaladverbiale (warum?)",
    discovery: "💡 Satzgliedbestimmung bedeutet, die Funktion jedes Teils zu identifizieren. Stelle Fragen: Wer? Was? Wem? Wo? Wann? um die Teile zu finden!",
  },
  ro: {
    title: "Analiza propoziției",
    round1Title: "5 părți de propoziție",
    round1Hint: "Atinge fiecare parte pentru a vedea rolul și un exemplu!",
    round2Title: "Tipuri de circumstanțiale",
    round2Hint: "Atinge cuvântul evidențiat — ce tip de circumstanțial este?",
    round3Title: "Circumstanțiale deplasabile",
    round3Hint: "Ambele propoziții au același sens! Atinge pentru comparație.",
    round4Title: "Declinarea adjectivului",
    round4Hint: "Atinge pentru a vedea cum se schimbă terminația adjectivului!",
    round5Title: "Provocare — analiza propoziției",
    round5Hint: "Identifică rolul cuvântului evidențiat.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    subjekt: "Subiect",
    praedikat: "Predicat",
    akkObj: "Complement direct",
    datObj: "Complement indirect",
    adverbiale: "Circumstanțial",
    lokaladv: "Circumstanțial de loc (unde?)",
    temporaladv: "Circumstanțial de timp (când?)",
    modaladv: "Circumstanțial de mod (cum?)",
    kausaladv: "Circumstanțial de cauză (de ce?)",
    discovery: "💡 Analiza propoziției (Satzgliedbestimmung) înseamnă identificarea rolului fiecărei părți. Pune întrebări: Wer? Was? Wem? Wo? Wann? pentru a găsi fiecare parte!",
  },
};

const SENTENCE_PARTS = [
  { key: "subjekt", question: "Wer?", color: "#3B82F6", emoji: "👤", example: "Der Hund bellt.", highlight: "Der Hund" },
  { key: "praedikat", question: "Was tut er?", color: "#10B981", emoji: "⚡", example: "Der Hund bellt laut.", highlight: "bellt" },
  { key: "akkObj", question: "Wen?/Was?", color: "#EF4444", emoji: "🎯", example: "Er isst den Kuchen.", highlight: "den Kuchen" },
  { key: "datObj", question: "Wem?", color: "#F59E0B", emoji: "🤝", example: "Ich helfe dem Freund.", highlight: "dem Freund" },
  { key: "adverbiale", question: "Wo?/Wann?/Wie?/Warum?", color: "#A855F7", emoji: "📍", example: "Er läuft schnell.", highlight: "schnell" },
];

const ADV_QUIZ = [
  { sentence: "Er schläft", highlight: "im Bett", sentence2: ".", advType: "lokal", options: ["lokal", "temporal", "modal", "kausal"], correct: "lokal" },
  { sentence: "Sie singt", highlight: "laut", sentence2: ".", advType: "modal", options: ["lokal", "temporal", "modal", "kausal"], correct: "modal" },
  { sentence: "Gestern", highlight: "gestern", sentence2: "kam er nach Hause.", advType: "temporal", options: ["lokal", "temporal", "modal", "kausal"], correct: "temporal" },
];

const ADJ_DECL = [
  { form: "der alte Mann", case: "Nom. m.", color: "#3B82F6" },
  { form: "den alten Mann", case: "Akk. m.", color: "#EF4444" },
  { form: "dem alten Mann", case: "Dat. m.", color: "#10B981" },
];

const ANALYSIS_QUIZ = [
  { sentence: "Der Lehrer erklärt die Aufgabe.", highlight: "Der Lehrer", options: ["subjekt", "praedikat", "akkObj", "adverbiale"], correct: "subjekt" },
  { sentence: "Er kauft das Buch.", highlight: "das Buch", options: ["subjekt", "praedikat", "akkObj", "datObj"], correct: "akkObj" },
  { sentence: "Sie hilft dem Schüler.", highlight: "dem Schüler", options: ["subjekt", "akkObj", "datObj", "adverbiale"], correct: "datObj" },
  { sentence: "Er läuft schnell.", highlight: "schnell", options: ["subjekt", "praedikat", "akkObj", "adverbiale"], correct: "adverbiale" },
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

// ─── Round 1: 5 sentence parts overview ───────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= SENTENCE_PARTS.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {SENTENCE_PARTS.map((p, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={p.key}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 text-left"
              style={{
                background: isOpen ? `${p.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? p.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span>{p.emoji}</span>
                <span className="font-black text-sm" style={{ color: p.color }}>{lbl[p.key] ?? p.key}</span>
                <span className="text-white/40 text-xs">— {p.question}</span>
              </div>
              {isOpen && (
                <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                  className="text-white/70 text-sm mt-1 pl-1">
                  {p.example.split(p.highlight).map((part, j, arr) => (
                    <span key={j}>{part}{j < arr.length - 1 && <span className="font-black" style={{ color: p.color }}>{p.highlight}</span>}</span>
                  ))}
                </motion.p>
              )}
              {!isOpen && <p className="text-white/30 text-xs pl-1">{lbl.tapToReveal}</p>}
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

// ─── Round 2: Adverbiale types MCQ ────────────────────────────────────────────
function Round2({ color, lbl, onNext, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = ADV_QUIZ[idx];
  const isCorrect = selected === item.correct;
  const advColors: Record<string, string> = { lokal: "#3B82F6", temporal: "#F59E0B", modal: "#10B981", kausal: "#EF4444" };
  const advLblKeys: Record<string, string> = { lokal: "lokaladv", temporal: "temporaladv", modal: "modaladv", kausal: "kausaladv" };

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.correct) wrongCountRef.current++;
    setTimeout(() => {
      if (idx + 1 >= ADV_QUIZ.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 900);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1">
        {ADV_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-base">
            {item.sentence}{" "}
            <span className="font-black px-1 rounded" style={{ background: `${color}33`, color }}>{item.highlight}</span>
            {item.sentence2}
          </p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${lbl[advLblKeys[item.correct]] ?? item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => {
          const optColor = advColors[opt] ?? color;
          return (
            <motion.button key={opt}
              onClick={() => handleSelect(opt)}
              className="w-full py-2.5 rounded-xl font-bold text-sm text-left px-4"
              style={{
                background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : `${optColor}11`,
                border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : `${optColor}44`}`,
                color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : optColor,
              }}
              whileTap={!selected ? { scale: 0.97 } : {}}>
              {lbl[advLblKeys[opt]] ?? opt}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 3: Moveable Adverbiale ─────────────────────────────────────────────
function Round3({ color, lbl, onNext, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const EXAMPLES = [
    { a: "Er kam gestern nach Hause.", b: "Gestern kam er nach Hause.", highlight: "gestern" },
    { a: "Sie schläft immer früh.", b: "Immer schläft sie früh.", highlight: "immer" },
  ];
  const allTapped = tapped.size >= EXAMPLES.length * 2;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      {EXAMPLES.map((ex, i) => (
        <div key={i} className="w-full flex flex-col gap-2">
          {[ex.a, ex.b].map((sent, j) => {
            const key = i * 2 + j;
            const isTapped = tapped.has(key);
            return (
              <motion.button key={key}
                onClick={() => setTapped(prev => new Set([...prev, key]))}
                className="w-full rounded-2xl p-3 text-left"
                style={{
                  background: isTapped ? `${color}18` : "rgba(255,255,255,0.04)",
                  border: `2px solid ${isTapped ? color : "rgba(255,255,255,0.1)"}`,
                }}
                whileTap={!isTapped ? { scale: 0.98 } : {}}>
                <p className="text-white font-bold text-sm">
                  {sent.split(ex.highlight).map((part, k, arr) => (
                    <span key={k}>{part}{k < arr.length - 1 && (
                      <span className="font-black" style={{ color }}>{ex.highlight}</span>
                    )}</span>
                  ))}
                </p>
                {!isTapped && <p className="text-white/30 text-xs mt-1">{lbl.tapToReveal}</p>}
              </motion.button>
            );
          })}
        </div>
      ))}
      {allTapped && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 4: Adjective declension table ──────────────────────────────────────
function Round4({ color, lbl, onNext, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= ADJ_DECL.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="w-full flex flex-col gap-2">
        {ADJ_DECL.map((row, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={row.case}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 flex items-center justify-between"
              style={{
                background: isOpen ? `${row.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? row.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <span className="text-white/50 text-xs font-bold uppercase">{row.case}</span>
              {isOpen ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
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

// ─── Round 5: Full sentence analysis MCQ ─────────────────────────────────────
function Round5({ color, lbl, onDone, wrongCountRef }: { color: string; lbl: Record<string, string>; onDone: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = ANALYSIS_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.correct) wrongCountRef.current++;
    setTimeout(() => {
      if (idx + 1 >= ANALYSIS_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 900);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {ANALYSIS_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-base">
            {item.sentence.split(item.highlight).map((part, j, arr) => (
              <span key={j}>{part}{j < arr.length - 1 && (
                <span className="font-black px-1 rounded" style={{ background: `${color}33`, color }}>{item.highlight}</span>
              )}</span>
            ))}
          </p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${lbl[item.correct] ?? item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="w-full py-2.5 rounded-xl font-bold text-sm text-left px-4"
            style={{
              background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.15)"}`,
              color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {lbl[opt] ?? opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const SentenceAnalysisExplorer = memo(function SentenceAnalysisExplorer({
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
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} wrongCountRef={wrongCountRef} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} wrongCountRef={wrongCountRef} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} wrongCountRef={wrongCountRef} />}
          {round === 4 && (
            <div className="w-full flex flex-col items-center gap-4">
              <Round5 color={color} lbl={lbl} onDone={finish} wrongCountRef={wrongCountRef} />
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="w-full px-4 py-3 rounded-2xl text-sm font-bold text-white/80 text-center"
                style={{ background: `${color}22` }}>
                {lbl.discovery}
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default SentenceAnalysisExplorer;
