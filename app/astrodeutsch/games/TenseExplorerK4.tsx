"use client";
// TenseExplorerK4 — Island i3: Zeitformen (Präteritum & Perfekt) (K4)
// Teaches: 3 past tenses overview, Präteritum formation, irregular forms, Perfekt haben/sein, comparison

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Tense Explorer",
    round1Title: "Three Past Tenses",
    round1Hint: "Tap each tense to learn when it is used.",
    round2Title: "Präteritum — Regular",
    round2Hint: "Tap to reveal the Präteritum form!",
    round3Title: "Irregular Präteritum",
    round3Hint: "These change completely — flip each card!",
    round4Title: "Perfekt — haben or sein?",
    round4Hint: "Sort verbs into the haben or sein group.",
    round5Title: "Choose the Right Form",
    round5Hint: "Select Präteritum or Perfekt for each sentence.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    haben: "haben",
    sein: "sein",
    praeteritum: "Präteritum",
    perfekt: "Perfekt",
    plusquamperfekt: "Plusquamperfekt",
    written: "written language",
    spoken: "spoken language",
    beforePast: "before the past",
    discovery: "💡 Perfekt = haben/sein + Partizip II. Most verbs use 'haben', but movement verbs (gehen, fahren, fliegen) use 'sein'!",
  },
  hu: {
    title: "Igeidő felfedező",
    round1Title: "Három múlt idő",
    round1Hint: "Koppints minden igeidőre, hogy megtanuld mikor használják.",
    round2Title: "Präteritum — szabályos",
    round2Hint: "Koppints a Präteritum alak felfedéséhez!",
    round3Title: "Rendhagyó Präteritum",
    round3Hint: "Ezek teljesen megváltoznak — fordítsd meg a kártyát!",
    round4Title: "Perfekt — haben vagy sein?",
    round4Hint: "Rendezd az igéket haben vagy sein csoportba.",
    round5Title: "Válaszd a helyes alakot",
    round5Hint: "Válaszd ki a Präteritum-ot vagy Perfekt-et a mondathoz.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    haben: "haben",
    sein: "sein",
    praeteritum: "Präteritum",
    perfekt: "Perfekt",
    plusquamperfekt: "Plusquamperfekt",
    written: "írott nyelv",
    spoken: "beszélt nyelv",
    beforePast: "a múlt előtt",
    discovery: "💡 Perfekt = haben/sein + Partizip II. A legtöbb ige a 'haben'-t használja, de a mozgást kifejező igék (gehen, fahren, fliegen) a 'sein'-t!",
  },
  de: {
    title: "Zeitformen-Entdecker",
    round1Title: "Drei Vergangenheitszeiten",
    round1Hint: "Tippe auf jede Zeitform, um zu lernen wann sie verwendet wird.",
    round2Title: "Präteritum — regelmäßig",
    round2Hint: "Tippe, um die Präteritum-Form aufzudecken!",
    round3Title: "Unregelmäßiges Präteritum",
    round3Hint: "Diese ändern sich komplett — drehe jede Karte um!",
    round4Title: "Perfekt — haben oder sein?",
    round4Hint: "Sortiere Verben in die haben- oder sein-Gruppe.",
    round5Title: "Wähle die richtige Form",
    round5Hint: "Wähle Präteritum oder Perfekt für jeden Satz.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    haben: "haben",
    sein: "sein",
    praeteritum: "Präteritum",
    perfekt: "Perfekt",
    plusquamperfekt: "Plusquamperfekt",
    written: "Schriftsprache",
    spoken: "Umgangssprache",
    beforePast: "vor der Vergangenheit",
    discovery: "💡 Perfekt = haben/sein + Partizip II. Die meisten Verben nehmen 'haben', aber Bewegungsverben (gehen, fahren, fliegen) nehmen 'sein'!",
  },
  ro: {
    title: "Exploratorul timpurilor",
    round1Title: "Trei timpuri trecute",
    round1Hint: "Atinge fiecare timp pentru a afla când se folosește.",
    round2Title: "Präteritum — regulat",
    round2Hint: "Atinge pentru a dezvălui forma de Präteritum!",
    round3Title: "Präteritum neregulat",
    round3Hint: "Acestea se schimbă complet — întoarce fiecare card!",
    round4Title: "Perfekt — haben sau sein?",
    round4Hint: "Sortează verbele în grupul haben sau sein.",
    round5Title: "Alege forma corectă",
    round5Hint: "Selectează Präteritum sau Perfekt pentru fiecare propoziție.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    haben: "haben",
    sein: "sein",
    praeteritum: "Präteritum",
    perfekt: "Perfekt",
    plusquamperfekt: "Plusquamperfekt",
    written: "limbaj scris",
    spoken: "limbaj vorbit",
    beforePast: "înainte de trecut",
    discovery: "💡 Perfekt = haben/sein + Partizip II. Majoritatea verbelor folosesc 'haben', dar verbele de mișcare (gehen, fahren, fliegen) folosesc 'sein'!",
  },
};

const TENSE_OVERVIEW = [
  {
    tense: "Präteritum",
    color: "#3B82F6",
    emoji: "✍️",
    labelKey: "written",
    example: "Er spielte Fußball.",
    desc: "stem + -te (regular)",
  },
  {
    tense: "Perfekt",
    color: "#10B981",
    emoji: "🗣️",
    labelKey: "spoken",
    example: "Er hat Fußball gespielt.",
    desc: "haben/sein + Partizip II",
  },
  {
    tense: "Plusquamperfekt",
    color: "#F59E0B",
    emoji: "⏮️",
    labelKey: "beforePast",
    example: "Er hatte gespielt, bevor er aß.",
    desc: "hatte/war + Partizip II",
  },
];

const REG_PRATERITUM = [
  { verb: "spielen", praeteritum: "spielte", example: "Er ___ Fußball." },
  { verb: "lernen", praeteritum: "lernte", example: "Sie ___ Deutsch." },
  { verb: "machen", praeteritum: "machte", example: "Ich ___ Hausaufgaben." },
  { verb: "kaufen", praeteritum: "kaufte", example: "Er ___ ein Buch." },
];

const IRREG_PRATERITUM = [
  { verb: "gehen", praeteritum: "ging", emoji: "🚶" },
  { verb: "sein", praeteritum: "war", emoji: "🌟" },
  { verb: "haben", praeteritum: "hatte", emoji: "🤲" },
  { verb: "kommen", praeteritum: "kam", emoji: "🏃" },
  { verb: "fahren", praeteritum: "fuhr", emoji: "🚗" },
];

const PERFEKT_SORT = [
  { verb: "spielen", aux: "haben", partizip: "gespielt", emoji: "⚽" },
  { verb: "gehen", aux: "sein", partizip: "gegangen", emoji: "🚶" },
  { verb: "kaufen", aux: "haben", partizip: "gekauft", emoji: "🛒" },
  { verb: "fahren", aux: "sein", partizip: "gefahren", emoji: "🚗" },
  { verb: "essen", aux: "haben", partizip: "gegessen", emoji: "🍽️" },
  { verb: "laufen", aux: "sein", partizip: "gelaufen", emoji: "🏃" },
];

const TENSE_QUIZ = [
  { sentence: "Gestern ___ er ins Kino. (gehen)", correct: "ging", alt: "ist gegangen", type: "Präteritum", options: ["ging", "ist gegangen"] },
  { sentence: "Ich ___ das Buch schon gelesen.", correct: "habe", alt: "hatte", type: "Perfekt", options: ["habe", "hatte"] },
  { sentence: "Er ___ sehr laut geschrien.", correct: "hat", alt: "hatte", type: "Perfekt", options: ["hat", "hatte"] },
  { sentence: "Sie ___ gestern Abend nach Hause.", correct: "kam", alt: "ist gekommen", type: "Präteritum", options: ["kam", "ist gekommen"] },
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

// ─── Round 1: 3 tenses overview ───────────────────────────────────────────────
function Round1({ color, lbl, onNext, showTeach, setShowTeach }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= TENSE_OVERVIEW.length;

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round1Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {TENSE_OVERVIEW.map((t, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={t.tense}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="w-full rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${t.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? t.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{t.emoji}</span>
                <span className="font-black text-base" style={{ color: t.color }}>{t.tense}</span>
                <span className="text-xs text-white/50">— {lbl[t.labelKey]}</span>
              </div>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-1">
                  <p className="text-white/80 text-sm font-bold">{t.example}</p>
                  <p className="text-white/40 text-xs">{t.desc}</p>
                </motion.div>
              )}
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

// ─── Round 2: Regular Präteritum ──────────────────────────────────────────────
function Round2({ color, lbl, onNext, showTeach, setShowTeach }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);

  const item = REG_PRATERITUM[idx];
  const handleNext = () => {
    if (idx + 1 >= REG_PRATERITUM.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round2Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round2Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1">
        {REG_PRATERITUM.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.verb} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-white">{item.verb}</span>
            <span className="text-white/40 text-lg">→</span>
            <motion.span className="text-2xl font-black"
              style={{ color: tapped ? color : "rgba(255,255,255,0.2)" }}>
              {tapped ? item.praeteritum : "?"}
            </motion.span>
          </div>
          <p className="text-white/60 text-sm text-center">
            {item.example.replace("___", tapped ? item.praeteritum : "___")}
          </p>
          {!tapped && (
            <motion.button onClick={() => setTapped(true)}
              className="px-5 py-2 rounded-xl text-sm font-black"
              style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
              whileTap={{ scale: 0.95 }}>
              {lbl.tapToReveal}
            </motion.button>
          )}
          {tapped && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-white/50 text-xs font-bold">
              {item.verb} → stem + <span style={{ color }}>-te</span> → {item.praeteritum}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 3: Irregular Präteritum flip cards ─────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const allFlipped = flipped.size >= IRREG_PRATERITUM.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {IRREG_PRATERITUM.map((item, i) => {
          const isFlipped = flipped.has(i);
          return (
            <motion.button key={item.verb}
              onClick={() => setFlipped(prev => new Set([...prev, i]))}
              className="rounded-2xl p-4 flex flex-col items-center gap-1"
              style={{
                background: isFlipped ? `${color}22` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isFlipped ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isFlipped ? { scale: 0.95 } : {}}>
              <span className="text-2xl">{item.emoji}</span>
              <span className="font-bold text-white text-sm">{item.verb}</span>
              <span className="font-black text-base" style={{ color: isFlipped ? color : "rgba(255,255,255,0.2)" }}>
                {isFlipped ? item.praeteritum : "?"}
              </span>
            </motion.button>
          );
        })}
      </div>
      {allFlipped && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 4: Perfekt haben/sein sort ─────────────────────────────────────────
function Round4({
  color,
  lbl,
  wrongCountRef,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const item = PERFEKT_SORT[idx];
  const isCorrect = selected === item.aux;

  const handleSelect = (aux: string) => {
    if (selected) return;
    setSelected(aux);
    if (aux !== item.aux) {
      wrongCountRef.current++;
    }
    setTimeout(() => {
      if (idx + 1 >= PERFEKT_SORT.length) onNext();
      else {
        setIdx(i => i + 1);
        setSelected(null);
      }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1">
        {PERFEKT_SORT.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.verb} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-2">
          <span className="text-4xl">{item.emoji}</span>
          <p className="text-2xl font-black text-white">{item.verb}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-sm font-bold" style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? "✅" : "❌"} Ich {item.aux} {item.partizip}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {["haben", "sein"].map(aux => (
          <motion.button key={aux}
            onClick={() => handleSelect(aux)}
            className="flex-1 py-3 rounded-xl font-black text-lg"
            style={{
              background: selected === aux ? (aux === item.aux ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === aux ? (aux === item.aux ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.2)"}`,
              color: selected === aux ? (aux === item.aux ? "#00FF88" : "#FF6B6B") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {aux}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 5: Präteritum vs Perfekt MCQ ───────────────────────────────────────
function Round5({
  color,
  lbl,
  wrongCountRef,
  onDone,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const item = TENSE_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.correct) {
      wrongCountRef.current++;
    }
    setTimeout(() => {
      if (idx + 1 >= TENSE_QUIZ.length) onDone();
      else {
        setIdx(i => i + 1);
        setSelected(null);
      }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {TENSE_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <div className="flex items-center justify-center gap-2">
            <p className="text-white font-bold text-base">{item.sentence}</p>
            <SpeakButton text={item.sentence} lang="de" size={16} />
          </div>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${item.type}!` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
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

// ─── Main Component ───────────────────────────────────────────────────────────
const TenseExplorerK4 = memo(function TenseExplorerK4({
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
  const wrongCountRef = useRef(0);

  const next = useCallback(() => { setRound(r => r + 1); setShowTeach(true); }, []);
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
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default TenseExplorerK4;
