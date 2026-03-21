"use client";
// ParticipleExplorer — Island i6: Partizip I & II (K5)
// Teaches: Partizip II review, Partizip I discovery, Partizip as adjective (I+II), MCQ

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Participle Explorer",
    round1Title: "Partizip II — Review",
    round1Hint: "Tap each card to reveal the Partizip II form!",
    round2Title: "Partizip I — Discovery",
    round2Hint: "Tap to discover how Partizip I is formed!",
    round3Title: "Partizip I as Adjective",
    round3Hint: "Tap to see how Partizip I works as an adjective!",
    round4Title: "Partizip II as Adjective",
    round4Hint: "Tap to compare Partizip II adjective endings!",
    round5Title: "Choose the Partizip",
    round5Hint: "Select Partizip I or II for each sentence.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    regular: "regular",
    irregular: "irregular",
    partizip1: "Partizip I",
    partizip2: "Partizip II",
    formation: "Formation: Infinitiv + -d",
    adjEnding: "adjective ending applies!",
    discovery: "💡 Partizip I = stem + d (spielend = playing). Partizip II = ge- + stem + -t/-en (gespielt = played). Partizip II is used for Perfekt tense!",
  },
  hu: {
    title: "Igenév felfedező",
    round1Title: "Partizip II — ismétlés",
    round1Hint: "Koppints minden kártyára a Partizip II alak felfedéséhez!",
    round2Title: "Partizip I — felfedezés",
    round2Hint: "Koppints, hogy megtudd hogyan képezzük a Partizip I-t!",
    round3Title: "Partizip I melléknévként",
    round3Hint: "Koppints, hogy meglásd hogyan működik a Partizip I melléknévként!",
    round4Title: "Partizip II melléknévként",
    round4Hint: "Koppints a Partizip II melléknévi végzetek összehasonlításához!",
    round5Title: "Válaszd ki a Partizip-ot",
    round5Hint: "Válaszd ki a Partizip I-t vagy II-t a mondathoz.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    regular: "szabályos",
    irregular: "rendhagyó",
    partizip1: "Partizip I",
    partizip2: "Partizip II",
    formation: "Képzés: Főnévi igenév + -d",
    adjEnding: "melléknévi végzet járul hozzá!",
    discovery: "💡 Partizip I = tővé + d (spielend = playing). Partizip II = ge- + tő + -t/-en (gespielt = played). A Partizip II a Perfekt igeidőben használatos!",
  },
  de: {
    title: "Partizip-Entdecker",
    round1Title: "Partizip II — Wiederholung",
    round1Hint: "Tippe auf jede Karte, um die Partizip-II-Form aufzudecken!",
    round2Title: "Partizip I — Entdeckung",
    round2Hint: "Tippe, um zu entdecken wie Partizip I gebildet wird!",
    round3Title: "Partizip I als Adjektiv",
    round3Hint: "Tippe, um zu sehen wie Partizip I als Adjektiv verwendet wird!",
    round4Title: "Partizip II als Adjektiv",
    round4Hint: "Tippe, um Partizip-II-Adjektivendungen zu vergleichen!",
    round5Title: "Partizip auswählen",
    round5Hint: "Wähle Partizip I oder II für jeden Satz.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    regular: "regelmäßig",
    irregular: "unregelmäßig",
    partizip1: "Partizip I",
    partizip2: "Partizip II",
    formation: "Bildung: Infinitiv + -d",
    adjEnding: "Adjektivendung wird angefügt!",
    discovery: "💡 Partizip I = Stamm + d (spielend = spielend). Partizip II = ge- + Stamm + -t/-en (gespielt = gespielt). Partizip II wird im Perfekt verwendet!",
  },
  ro: {
    title: "Exploratorul participiului",
    round1Title: "Partizip II — Recapitulare",
    round1Hint: "Atinge fiecare carte pentru a dezvălui forma Partizip II!",
    round2Title: "Partizip I — Descoperire",
    round2Hint: "Atinge pentru a descoperi cum se formează Partizip I!",
    round3Title: "Partizip I ca adjectiv",
    round3Hint: "Atinge pentru a vedea cum funcționează Partizip I ca adjectiv!",
    round4Title: "Partizip II ca adjectiv",
    round4Hint: "Atinge pentru a compara terminațiile adjectivale ale Partizip II!",
    round5Title: "Alege Participiul",
    round5Hint: "Selectează Partizip I sau II pentru fiecare propoziție.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    regular: "regulat",
    irregular: "neregulat",
    partizip1: "Partizip I",
    partizip2: "Partizip II",
    formation: "Formare: Infinitiv + -d",
    adjEnding: "se adaugă terminația adjectivală!",
    discovery: "💡 Partizip I = stem + d (spielend = jucând). Partizip II = ge- + stem + -t/-en (gespielt = jucat). Partizip II se folosește în Perfekt!",
  },
};

const PART2_CARDS_POOL = [
  { inf: "spielen", p2: "gespielt", type: "regular", emoji: "⚽" },
  { inf: "machen", p2: "gemacht", type: "regular", emoji: "🔨" },
  { inf: "singen", p2: "gesungen", type: "irregular", emoji: "🎵" },
  { inf: "gehen", p2: "gegangen", type: "irregular", emoji: "🚶" },
  { inf: "schreiben", p2: "geschrieben", type: "irregular", emoji: "✏️" },
  { inf: "finden", p2: "gefunden", type: "irregular", emoji: "🔍" },
  { inf: "arbeiten", p2: "gearbeitet", type: "regular", emoji: "💼" },
];

const PART1_EXAMPLES_POOL = [
  { inf: "spielen", p1: "spielend", example: "das spielende Kind", emoji: "🧒" },
  { inf: "singen", p1: "singend", example: "die singende Frau", emoji: "🎤" },
  { inf: "lachen", p1: "lachend", example: "der lachende Mann", emoji: "😄" },
  { inf: "tanzen", p1: "tanzend", example: "das tanzende Paar", emoji: "💃" },
];

const PART1_ADJ_POOL = [
  { base: "schlafend", nom: "der schlafende Hund", akk: "einen schlafenden Hund" },
  { base: "laufend", nom: "die laufende Katze", akk: "eine laufende Katze" },
  { base: "spielend", nom: "das spielende Kind", akk: "ein spielendes Kind" },
];

const PART2_ADJ_POOL = [
  { base: "gebrochen", nom: "das gebrochene Glas", akk: "ein gebrochenes Glas" },
  { base: "geschrieben", nom: "der geschriebene Brief", akk: "einen geschriebenen Brief" },
  { base: "geöffnet", nom: "die geöffnete Tür", akk: "eine geöffnete Tür" },
];

const MIXED_QUIZ_POOL = [
  { sentence: "Die ___ Kinder spielen im Garten.", fill: "P1 → spielend → spielenden", options: ["gespielten", "spielenden", "gespielt"], correct: "spielenden", hint: "Partizip I als Adjektiv" },
  { sentence: "Das ___ Fenster war offen.", fill: "P2 → brechen → gebrochen", options: ["brechende", "gebrochene", "bricht"], correct: "gebrochene", hint: "Partizip II als Adjektiv" },
  { sentence: "Der ___ Brief liegt auf dem Tisch.", fill: "P2 → schreiben → geschrieben", options: ["schreibende", "schreibenden", "geschriebene"], correct: "geschriebene", hint: "Partizip II als Adjektiv" },
  { sentence: "Ich sehe den ___ Vogel.", fill: "P1 → singen → singend", options: ["gesungenen", "singenden", "singt"], correct: "singenden", hint: "Partizip I als Adjektiv (Akk)" },
  { sentence: "Die ___ Tür ist jetzt zu.", fill: "P2 → öffnen → geöffnet", options: ["öffnende", "geöffnete", "öffnet"], correct: "geöffnete", hint: "Partizip II als Adjektiv" },
];

// Helper: shuffle array
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

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

// ─── Round 1: Partizip II flip cards ─────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const allFlipped = flipped.size >= PART2_CARDS_POOL.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {PART2_CARDS_POOL.map((card, i) => {
          const isFlipped = flipped.has(i);
          const typeColor = card.type === "regular" ? "#10B981" : "#F59E0B";
          return (
            <motion.button key={card.inf}
              onClick={() => setFlipped(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 flex items-center justify-between"
              style={{
                background: isFlipped ? `${typeColor}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isFlipped ? typeColor : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isFlipped ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{card.emoji}</span>
                <span className="text-white font-bold text-base">{card.inf}</span>
                <span className="text-xs px-1.5 py-0.5 rounded-full font-bold"
                  style={{ background: `${typeColor}25`, color: typeColor }}>
                  {lbl[card.type]}
                </span>
              </div>
              {isFlipped ? (
                <motion.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                  className="font-black text-base" style={{ color: typeColor }}>
                  {card.p2}
                </motion.span>
              ) : (
                <span className="text-white/30 text-xs">{lbl.tapToReveal}</span>
              )}
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

// ─── Round 2: Partizip I discovery ───────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= PART1_EXAMPLES_POOL.length;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="w-full rounded-xl p-3 text-center text-xs font-bold"
        style={{ background: `${color}18`, border: `1px solid ${color}44`, color }}>
        {lbl.formation}
      </div>
      <div className="flex flex-col gap-2 w-full">
        {PART1_EXAMPLES_POOL.map((ex, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={ex.inf}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{ex.emoji}</span>
                <span className="text-white font-bold">{ex.inf}</span>
                <span className="text-white/40 text-xs">→</span>
                {isOpen ? (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="font-black" style={{ color }}>{ex.p1}</motion.span>
                ) : (
                  <span className="text-white/25">?</span>
                )}
              </div>
              {isOpen && (
                <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                  className="text-white/70 text-sm mt-1 pl-1 italic">{ex.example}</motion.p>
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

// ─── Round 3: Partizip I as adjective ────────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= PART1_ADJ_POOL.length * 2;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <p className="text-white/50 text-xs text-center italic">
        {lbl.partizip1}: Infinitiv + -d → {lbl.adjEnding}
      </p>
      {PART1_ADJ_POOL.map((item, i) => (
        <div key={item.base} className="w-full flex flex-col gap-1.5">
          {[item.nom, item.akk].map((form, j) => {
            const key = i * 2 + j;
            const isOpen = revealed.has(key);
            return (
              <motion.button key={form}
                onClick={() => setRevealed(prev => new Set([...prev, key]))}
                className="w-full rounded-xl p-3 text-left flex items-center justify-between"
                style={{
                  background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
                }}
                whileTap={!isOpen ? { scale: 0.98 } : {}}>
                {isOpen ? (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="font-bold text-sm" style={{ color }}>{form}</motion.span>
                ) : (
                  <span className="text-white/30 text-xs">{lbl.tapToReveal}</span>
                )}
              </motion.button>
            );
          })}
        </div>
      ))}
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 4: Partizip II as adjective ───────────────────────────────────────
function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= PART2_ADJ_POOL.length * 2;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <p className="text-white/50 text-xs text-center italic">
        {lbl.partizip2}: {lbl.adjEnding}
      </p>
      {PART2_ADJ_POOL.map((item, i) => (
        <div key={item.base} className="w-full flex flex-col gap-1.5">
          {[item.nom, item.akk].map((form, j) => {
            const key = i * 2 + j;
            const isOpen = revealed.has(key);
            return (
              <motion.button key={form}
                onClick={() => setRevealed(prev => new Set([...prev, key]))}
                className="w-full rounded-xl p-3 flex items-center justify-between"
                style={{
                  background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
                }}
                whileTap={!isOpen ? { scale: 0.98 } : {}}>
                {isOpen ? (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="font-bold text-sm" style={{ color }}>{form}</motion.span>
                ) : (
                  <span className="text-white/30 text-xs">{lbl.tapToReveal}</span>
                )}
              </motion.button>
            );
          })}
        </div>
      ))}
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: MCQ Partizip I or II ────────────────────────────────────────────
function Round5({ color, lbl, wrongCountRef, onDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void }) {
  const [quiz] = useState(() => shuffle(MIXED_QUIZ_POOL).slice(0, 4));
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const item = quiz[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected || feedback) return;
    setSelected(opt);
    const isCorrectChoice = opt === item.correct;
    setFeedback(isCorrectChoice ? "correct" : "wrong");

    if (!isCorrectChoice) {
      wrongCountRef.current++;
    }

    setTimeout(() => {
      if (idx + 1 >= quiz.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {quiz.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-base">{item.sentence}</p>
          {feedback && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2" style={{ color: isCorrect ? "#00FF88" : "#FF2D78" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`} ({item.hint})
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => {
          let bgColor = "rgba(255,255,255,0.06)";
          let borderColor = "rgba(255,255,255,0.2)";
          let textColor = "white";

          if (feedback && selected === opt) {
            if (opt === item.correct) {
              bgColor = "rgba(0,255,136,0.2)";
              borderColor = "#00FF88";
              textColor = "#00FF88";
            } else {
              bgColor = "rgba(255,45,120,0.15)";
              borderColor = "#FF2D78";
              textColor = "#FF2D78";
            }
          } else if (feedback && opt === item.correct && selected !== opt) {
            bgColor = "rgba(0,255,136,0.2)";
            borderColor = "#00FF88";
            textColor = "#00FF88";
          }

          return (
            <motion.button key={opt}
              onClick={() => handleSelect(opt)}
              className="w-full py-3 rounded-xl font-black text-base"
              style={{
                background: bgColor,
                border: `2px solid ${borderColor}`,
                color: textColor,
              }}
              whileTap={!selected && !feedback ? { scale: 0.97 } : {}}>
              {opt}
              {feedback && selected === opt && opt === item.correct && " ✅"}
              {feedback && selected === opt && opt !== item.correct && " ❌"}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const ParticipleExplorer = memo(function ParticipleExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 5;

  // Error tracking
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

export default ParticipleExplorer;
