"use client";
// ClauseExplorer — Island i6: Satzarten & Nebensätze (K4)
// Teaches: 4 sentence types, Hauptsatz vs Nebensatz, conjunctions, word order in subordinate clauses

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Clause Explorer",
    round1Title: "4 Sentence Types",
    round1Hint: "Tap each type to see an example!",
    round2Title: "Main vs. Subordinate Clause",
    round2Hint: "Tap to color-code the two parts!",
    round3Title: "Conjunctions",
    round3Hint: "Tap each conjunction to see what it introduces.",
    round4Title: "Word Order in Subclauses",
    round4Hint: "The verb goes to the END in a Nebensatz! Tap to see.",
    round5Title: "Choose the Right Conjunction",
    round5Hint: "Pick the correct conjunction for each sentence.",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    hauptsatz: "Main Clause",
    nebensatz: "Subordinate Clause",
    statement: "Statement",
    question: "Question",
    exclamation: "Exclamation",
    imperative: "Command",
    discovery: "💡 A main clause (Hauptsatz) can stand alone — the verb is in position 2. A subordinate clause (Nebensatz) starts with a conjunction and the verb goes to the END!",
  },
  hu: {
    title: "Tagmondat felfedező",
    round1Title: "4 mondattípus",
    round1Hint: "Koppints minden típusra egy példa megtekintéséhez!",
    round2Title: "Főmondat vs. Mellékmondat",
    round2Hint: "Koppints a két rész színkóddal való megjelöléséhez!",
    round3Title: "Kötőszavak",
    round3Hint: "Koppints minden kötőszóra a bevezetett tartalom megtekintéséhez.",
    round4Title: "Szórend a mellékmondatban",
    round4Hint: "Az ige a VÉGÉRE kerül a mellékmondatban! Koppints.",
    round5Title: "Válaszd a helyes kötőszót",
    round5Hint: "Válaszd ki a megfelelő kötőszót minden mondathoz.",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    tapToReveal: "Koppints a megjelenítéshez",
    correct: "Helyes!",
    hauptsatz: "Főmondat",
    nebensatz: "Mellékmondat",
    statement: "Kijelentő mondat",
    question: "Kérdő mondat",
    exclamation: "Felkiáltó mondat",
    imperative: "Felszólító mondat",
    discovery: "💡 A főmondat (Hauptsatz) önmagában értelmes — az ige a 2. helyen áll. A mellékmondat (Nebensatz) kötőszóval kezdődik és az ige a VÉGÉRE kerül!",
  },
  de: {
    title: "Satzarten-Entdecker",
    round1Title: "4 Satzarten",
    round1Hint: "Tippe auf jede Satzart, um ein Beispiel zu sehen!",
    round2Title: "Hauptsatz vs. Nebensatz",
    round2Hint: "Tippe, um die beiden Teile farbig zu markieren!",
    round3Title: "Konjunktionen",
    round3Hint: "Tippe auf jede Konjunktion, um zu sehen was sie einleitet.",
    round4Title: "Wortstellung im Nebensatz",
    round4Hint: "Das Verb steht am ENDE im Nebensatz! Tippe zum Aufdecken.",
    round5Title: "Richtige Konjunktion wählen",
    round5Hint: "Wähle die passende Konjunktion für jeden Satz.",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    tapToReveal: "Zum Aufdecken tippen",
    correct: "Richtig!",
    hauptsatz: "Hauptsatz",
    nebensatz: "Nebensatz",
    statement: "Aussagesatz",
    question: "Fragesatz",
    exclamation: "Ausrufesatz",
    imperative: "Aufforderungssatz",
    discovery: "💡 Ein Hauptsatz (Hauptsatz) kann allein stehen — das Verb steht an Position 2. Ein Nebensatz (Nebensatz) beginnt mit einer Konjunktion und das Verb steht am ENDE!",
  },
  ro: {
    title: "Exploratorul propozițiilor",
    round1Title: "4 tipuri de propoziții",
    round1Hint: "Atinge fiecare tip pentru a vedea un exemplu!",
    round2Title: "Propoziție principală vs. subordonată",
    round2Hint: "Atinge pentru a colora cele două părți!",
    round3Title: "Conjuncții",
    round3Hint: "Atinge fiecare conjuncție pentru a vedea ce introduce.",
    round4Title: "Ordinea cuvintelor în propoziția subordonată",
    round4Hint: "Verbul merge la FINAL în Nebensatz! Atinge pentru a vedea.",
    round5Title: "Alege conjuncția corectă",
    round5Hint: "Alege conjuncția potrivită pentru fiecare propoziție.",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    tapToReveal: "Atinge pentru a dezvălui",
    correct: "Corect!",
    hauptsatz: "Propoziție principală",
    nebensatz: "Propoziție subordonată",
    statement: "Propoziție enunțiativă",
    question: "Propoziție interogativă",
    exclamation: "Propoziție exclamativă",
    imperative: "Propoziție imperativă",
    discovery: "💡 O propoziție principală (Hauptsatz) poate sta singură — verbul este în poziția 2. O propoziție subordonată (Nebensatz) începe cu o conjuncție și verbul merge la FINAL!",
  },
};

const SENTENCE_TYPES = [
  { key: "statement", punct: ".", color: "#3B82F6", emoji: "📝", example: "Der Hund ist groß." },
  { key: "question", punct: "?", color: "#F59E0B", emoji: "❓", example: "Ist der Hund groß?" },
  { key: "exclamation", punct: "!", color: "#EF4444", emoji: "❗", example: "Der Hund ist so groß!" },
  { key: "imperative", punct: "!", color: "#10B981", emoji: "👉", example: "Sei ruhig, Hund!" },
];

const CLAUSE_PAIRS = [
  { main: "Er kommt nicht,", sub: "weil er müde ist.", conjunction: "weil" },
  { main: "Ich weiß,", sub: "dass du recht hast.", conjunction: "dass" },
  { main: "Sie bleibt zuhause,", sub: "obwohl das Wetter schön ist.", conjunction: "obwohl" },
  { main: "Er lernt hart,", sub: "damit er die Prüfung besteht.", conjunction: "damit" },
  { main: "Wir spielen,", sub: "wenn das Wetter gut ist.", conjunction: "wenn" },
  { main: "Sie arbeitet,", sub: "obwohl sie krank ist.", conjunction: "obwohl" },
];

const CONJUNCTIONS = [
  { conj: "weil", meaning: "because", example: "Er bleibt, weil er müde ist.", emoji: "🔵" },
  { conj: "dass", meaning: "that", example: "Ich denke, dass er kommt.", emoji: "💬" },
  { conj: "wenn", meaning: "when/if", example: "Wenn es regnet, bleibe ich.", emoji: "🌧️" },
  { conj: "als", meaning: "when (past)", example: "Als ich jung war, spielte ich.", emoji: "⏮️" },
  { conj: "obwohl", meaning: "although", example: "Obwohl es regnet, geht er raus.", emoji: "☔" },
  { conj: "damit", meaning: "so that", example: "Er lernt, damit er besteht.", emoji: "🎯" },
];

const WORD_ORDER_EXAMPLES = [
  { normal: "Er ist müde.", sub: "weil er müde IST.", conjunction: "weil", verbPosition: "end" },
  { normal: "Du hast recht.", sub: "dass du recht HAST.", conjunction: "dass", verbPosition: "end" },
  { normal: "Sie kommt morgen.", sub: "wenn sie morgen KOMMT.", conjunction: "wenn", verbPosition: "end" },
  { normal: "Ich lerne.", sub: "damit ich LERNE.", conjunction: "damit", verbPosition: "end" },
  { normal: "Er arbeitet.", sub: "obwohl er ARBEITET.", conjunction: "obwohl", verbPosition: "end" },
];

const CONJ_QUIZ = [
  { sentence: "Er bleibt zuhause, ___ er krank ist.", correct: "weil", options: ["weil", "obwohl", "damit"] },
  { sentence: "Ich hoffe, ___ du kommst.", correct: "dass", options: ["dass", "weil", "wenn"] },
  { sentence: "___ es regnet, nehmen wir einen Schirm.", correct: "Wenn", options: ["Wenn", "Weil", "Dass"] },
  { sentence: "Sie lernt, ___ sie die Prüfung besteht.", correct: "damit", options: ["damit", "weil", "obwohl"] },
  { sentence: "Wir spielen, ___ das Wetter schön ist.", correct: "obwohl", options: ["obwohl", "wenn", "weil"] },
  { sentence: "___ ich klein war, spielte ich Fußball.", correct: "Als", options: ["Als", "Wenn", "Weil"] },
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

// ─── Round 1: 4 Sentence types ────────────────────────────────────────────────
function Round1({ color, lbl, onNext, showTeach, setShowTeach }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= SENTENCE_TYPES.length;


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
      <div className="grid grid-cols-2 gap-2 w-full">
        {SENTENCE_TYPES.map((st, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={st.key}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${st.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? st.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.96 } : {}}>
              <div className="flex items-center gap-1">
                <span className="text-xl">{st.emoji}</span>
                <span className="font-black text-xs" style={{ color: st.color }}>{lbl[st.key]}</span>
              </div>
              {isOpen ? (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-white/70 text-[11px]">{st.example}</motion.p>
              ) : (
                <p className="text-white/30 text-xs">{lbl.tapToReveal}</p>
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

// ─── Round 2: Hauptsatz vs Nebensatz color code ───────────────────────────────
function Round2({
  color,
  lbl,
  lang,
  wrongCountRef,
  onNext, showTeach, setShowTeach,
}: {
  color: string;
  lbl: Record<string, string>;
  lang?: string;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);

  const item = CLAUSE_PAIRS[idx];
  const handleNext = () => {
    if (idx + 1 >= CLAUSE_PAIRS.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };

  const fullSentence = `${item.main} ${item.sub}`;


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
        {CLAUSE_PAIRS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <motion.div key={item.conjunction}
        className="relative w-full rounded-3xl p-5 flex flex-col items-center gap-3"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
        <div className="absolute top-3 right-3">
          <SpeakButton text={fullSentence} lang={"de"} size={16} />
        </div>
        <p className="text-white/60 text-xs font-bold">
          <span style={{ color: "#3B82F6" }}>●</span> {lbl.hauptsatz} &nbsp;
          <span style={{ color: "#F59E0B" }}>●</span> {lbl.nebensatz}
        </p>
        {!tapped ? (
          <p className="text-white font-bold text-base text-center">
            {item.main} {item.sub}
          </p>
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-bold text-base text-center">
            <span className="font-bold" style={{ color: "#3B82F6" }}>{item.main}</span>
            {" "}
            <span className="font-bold" style={{ color: "#F59E0B" }}>{item.sub}</span>
          </motion.p>
        )}
        {!tapped && (
          <motion.button onClick={() => setTapped(true)}
            className="px-5 py-2 rounded-xl text-sm font-black"
            style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
            whileTap={{ scale: 0.95 }}>
            {lbl.tapToReveal}
          </motion.button>
        )}
        {tapped && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-white/50 text-xs font-bold">
            Konjunktion: <span style={{ color }}>{item.conjunction}</span>
          </motion.p>
        )}
      </motion.div>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 3: Conjunctions ────────────────────────────────────────────────────
function Round3({
  color,
  lbl,
  wrongCountRef,
  onNext, showTeach, setShowTeach,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void;
}) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= CONJUNCTIONS.length;


  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round3Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round3Teach}</p>
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
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {CONJUNCTIONS.map((item, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={item.conj}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.96 } : {}}>
              <span className="font-black text-base" style={{ color }}>{item.conj}</span>
              {isOpen ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-white/50 text-[10px] font-bold">{item.meaning}</p>
                  <p className="text-white/70 text-[11px]">{item.example}</p>
                </motion.div>
              ) : (
                <p className="text-white/30 text-xs">{lbl.tapToReveal}</p>
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

// ─── Round 4: Word order in Nebensatz ─────────────────────────────────────────
function Round4({
  color,
  lbl,
  wrongCountRef,
  onNext, showTeach, setShowTeach,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);

  const item = WORD_ORDER_EXAMPLES[idx];
  const handleNext = () => {
    if (idx + 1 >= WORD_ORDER_EXAMPLES.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };


  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round4Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round4Teach}</p>
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
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1">
        {WORD_ORDER_EXAMPLES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.conjunction} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <div className="flex flex-col gap-2 w-full">
            <div>
              <p className="text-white/40 text-[10px] font-bold mb-1">Normal:</p>
              <p className="text-white/80 text-base font-bold">{item.normal}</p>
            </div>
            <div className="border-t border-white/10 pt-2">
              <p className="text-white/40 text-[10px] font-bold mb-1">mit &quot;{item.conjunction}&quot;:</p>
              {tapped ? (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-base font-bold">
                  <span style={{ color }}>{item.conjunction}</span>{" "}
                  {item.sub.replace(item.conjunction + " ", "").split(/([A-ZÄÖÜ]{2,}|IST|HAST|KOMMT)/).map((part, j) =>
                    /^[A-ZÄÖÜ]{2,}$|^IST$|^HAST$|^KOMMT$/.test(part) ? (
                      <span key={j} className="font-black" style={{ color: "#EF4444" }}>{part}</span>
                    ) : (
                      <span key={j} className="text-white">{part}</span>
                    )
                  )}
                </motion.p>
              ) : (
                <p className="text-white/40 text-sm">{lbl.tapToReveal}</p>
              )}
            </div>
          </div>
          {!tapped && (
            <motion.button onClick={() => setTapped(true)}
              className="px-5 py-2 rounded-xl text-sm font-black"
              style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
              whileTap={{ scale: 0.95 }}>
              {lbl.tapToReveal}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 5: Conjunction MCQ ─────────────────────────────────────────────────
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

  const item = CONJ_QUIZ[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.correct) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.word, wrongAnswer: opt, correctAnswer: item.correct, topic: "Clause Structure", lang: "de" });
    }
    setTimeout(() => {
      if (idx + 1 >= CONJ_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {CONJ_QUIZ.map((_, i) => (
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
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
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
const ClauseExplorer = memo(function ClauseExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [showTeach, setShowTeach] = useState(true);
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
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 1 && <Round2 color={color} lbl={lbl} lang={lang} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 2 && <Round3 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ClauseExplorer;
