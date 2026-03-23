"use client";
// SentencePartExplorerK4 — Island i5: Satzglieder (K4)
// Teaches: 4 sentence parts, find Subjekt, find Prädikat, label Objekte, MCQ analysis

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Sentence Parts Explorer",
    round1Title: "The 4 Sentence Parts",
    round1Hint: "Tap each part to see the question it answers!",
    round2Title: "Find the Subject",
    round2Hint: "Tap the subject (Subjekt) — who or what does the action?",
    round3Title: "Find the Predicate",
    round3Hint: "Tap the predicate (Prädikat) — the verb.",
    round4Title: "Find the Object",
    round4Hint: "Tap the correct object type for the underlined word.",
    round5Title: "Full Sentence Analysis",
    round5Hint: "What sentence part is the highlighted word?",
    next: "Next",
    finish: "Finished!",
    well: "Well done!",
    correct: "Correct!",
    subject: "Subject",
    predicate: "Predicate",
    object: "Object",
    adverbial: "Adverbial",
    akkObj: "Akkusativ-Object",
    datObj: "Dativ-Object",
    discovery: "💡 Beyond subject and predicate, sentences have objects (Akkusativ/Dativ) and adverbials (time, place, manner). They add detail to the sentence!",
  },
  hu: {
    title: "Mondatrész felfedező",
    round1Title: "A 4 mondatrész",
    round1Hint: "Koppints minden részre a megválaszolt kérdés megtekintéséhez!",
    round2Title: "Találd meg az alanyt",
    round2Hint: "Koppints az alanyra (Subjekt) — ki vagy mi végzi a cselekvést?",
    round3Title: "Találd meg az állítmányt",
    round3Hint: "Koppints az állítmányra (Prädikat) — az ige.",
    round4Title: "Találd meg a tárgyat",
    round4Hint: "Koppints a helyes tárgy típusra az aláhúzott szónál.",
    round5Title: "Teljes mondat elemzés",
    round5Hint: "Melyik mondatrész a kiemelt szó?",
    next: "Tovább",
    finish: "Kész!",
    well: "Remek!",
    correct: "Helyes!",
    subject: "Alany",
    predicate: "Állítmány",
    object: "Tárgy",
    adverbial: "Határozó",
    akkObj: "Tárgyeset-tárgy",
    datObj: "Részeseset-tárgy",
    discovery: "💡 Az alany és állítmány mellett a mondatoknak vannak tárgyaik (Akkusativ/Dativ) és határozóik (idő, hely, mód). Ezek részleteket adnak a mondatnak!",
  },
  de: {
    title: "Satzglieder-Entdecker",
    round1Title: "Die 4 Satzglieder",
    round1Hint: "Tippe auf jedes Satzglied, um zu sehen welche Frage es beantwortet!",
    round2Title: "Subjekt finden",
    round2Hint: "Tippe auf das Subjekt — wer oder was tut etwas?",
    round3Title: "Prädikat finden",
    round3Hint: "Tippe auf das Prädikat — das Verb.",
    round4Title: "Objekt finden",
    round4Hint: "Tippe auf den richtigen Objekt-Typ für das unterstrichene Wort.",
    round5Title: "Vollständige Satzanalyse",
    round5Hint: "Welches Satzglied ist das markierte Wort?",
    next: "Weiter",
    finish: "Fertig!",
    well: "Super gemacht!",
    correct: "Richtig!",
    subject: "Subjekt",
    predicate: "Prädikat",
    object: "Objekt",
    adverbial: "Adverbiale",
    akkObj: "Akkusativ-Objekt",
    datObj: "Dativ-Objekt",
    discovery: "💡 Neben Subjekt und Prädikat haben Sätze Objekte (Akkusativ/Dativ) und Adverbiale (Zeit, Ort, Art). Sie geben dem Satz mehr Details!",
  },
  ro: {
    title: "Exploratorul părților de propoziție",
    round1Title: "Cele 4 părți de propoziție",
    round1Hint: "Atinge fiecare parte pentru a vedea ce întrebare răspunde!",
    round2Title: "Găsește subiectul",
    round2Hint: "Atinge subiectul (Subjekt) — cine sau ce face acțiunea?",
    round3Title: "Găsește predicatul",
    round3Hint: "Atinge predicatul (Prädikat) — verbul.",
    round4Title: "Găsește obiectul",
    round4Hint: "Atinge tipul corect de obiect pentru cuvântul subliniat.",
    round5Title: "Analiză completă a propoziției",
    round5Hint: "Ce parte de propoziție este cuvântul evidențiat?",
    next: "Înainte",
    finish: "Gata!",
    well: "Bravo!",
    correct: "Corect!",
    subject: "Subiect",
    predicate: "Predicat",
    object: "Obiect",
    adverbial: "Circumstanțial",
    akkObj: "Obiect la Acuzativ",
    datObj: "Obiect la Dativ",
    discovery: "💡 Pe lângă subiect și predicat, propozițiile au obiecte (Acuzativ/Dativ) și circumstanțiale (timp, loc, mod). Ele adaugă detalii propoziției!",
  },
};

const SENTENCE_PARTS = [
  { key: "subject", question: "Wer? / Was?", color: "#3B82F6", emoji: "👤", example: "Der Hund bellt." },
  { key: "predicate", question: "Was tut er?", color: "#10B981", emoji: "⚡", example: "Der Hund bellt laut." },
  { key: "object", question: "Wen? / Wem?", color: "#F59E0B", emoji: "📦", example: "Er füttert den Hund." },
  { key: "adverbial", question: "Wann? Wo? Wie?", color: "#EC4899", emoji: "🗺️", example: "Er kommt morgen nach Hause." },
];

const SUBJ_SENTENCES = [
  { sentence: "Der Lehrer erklärt.", subject: "Der Lehrer", emoji: "👨‍🏫" },
  { sentence: "Die Schüler lernen viel.", subject: "Die Schüler", emoji: "📚" },
  { sentence: "Das Mädchen singt laut.", subject: "Das Mädchen", emoji: "🎤" },
];

const PRED_SENTENCES = [
  { sentence: "Der Vogel singt schön.", predicate: "singt", emoji: "🐦" },
  { sentence: "Wir essen Mittag.", predicate: "essen", emoji: "🍽️" },
  { sentence: "Sie rennt schnell.", predicate: "rennt", emoji: "🏃" },
];

const OBJ_SENTENCES = [
  { sentence: "Er sieht den Hund.", underlined: "den Hund", type: "akkObj", options: ["akkObj", "datObj"] },
  { sentence: "Sie hilft dem Kind.", underlined: "dem Kind", type: "datObj", options: ["akkObj", "datObj"] },
  { sentence: "Ich kaufe das Buch.", underlined: "das Buch", type: "akkObj", options: ["akkObj", "datObj"] },
];

const ANALYSIS_QUIZ = [
  { sentence: "Die Katze schläft.", highlight: "Die Katze", part: "subject" },
  { sentence: "Er läuft sehr schnell.", highlight: "läuft", part: "predicate" },
  { sentence: "Wir besuchen die Oma.", highlight: "die Oma", part: "object" },
  { sentence: "Er kommt morgen.", highlight: "morgen", part: "adverbial" },
];

const PART_COLORS: Record<string, string> = {
  subject: "#3B82F6", predicate: "#10B981", object: "#F59E0B", adverbial: "#EC4899",
};

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

// ─── Round 1: 4 sentence parts overview ──────────────────────────────────────
function Round1({ color, lbl, onNext, showTeach, setShowTeach }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= SENTENCE_PARTS.length;


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
        {SENTENCE_PARTS.map((sp, i) => {
          const isOpen = revealed.has(i);
          return (
            <motion.button key={sp.key}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              className="rounded-2xl p-3 flex flex-col items-start gap-1 text-left"
              style={{
                background: isOpen ? `${sp.color}18` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isOpen ? sp.color : "rgba(255,255,255,0.1)"}`,
              }}
              whileTap={!isOpen ? { scale: 0.96 } : {}}>
              <div className="flex items-center gap-1">
                <span className="text-xl">{sp.emoji}</span>
                <span className="font-black text-sm" style={{ color: sp.color }}>{lbl[sp.key]}</span>
              </div>
              <span className="text-white/50 text-xs font-bold">{sp.question}</span>
              {isOpen && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-white/70 text-[11px]">{sp.example}</motion.p>
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

// ─── Round 2: Find the Subjekt ────────────────────────────────────────────────
function Round2({ color, lbl, onNext, showTeach, setShowTeach, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);

  const item = SUBJ_SENTENCES[idx];
  const handleNext = () => {
    if (idx + 1 >= SUBJ_SENTENCES.length) onNext();
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
        {SUBJ_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <span className="text-4xl">{item.emoji}</span>
          <p className="text-white font-bold text-lg text-center">{item.sentence}</p>
          {!tapped ? (
            <motion.button onClick={() => setTapped(true)}
              className="px-5 py-2.5 rounded-xl font-black text-sm"
              style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
              whileTap={{ scale: 0.95 }}>
              {item.subject}
            </motion.button>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 rounded-xl text-sm font-black"
              style={{ background: `${color}33`, border: `2px solid ${color}`, color }}>
              ✅ {lbl.subject}: {item.subject}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 3: Find the Prädikat ───────────────────────────────────────────────
function Round3({ color, lbl, onNext, showTeach, setShowTeach, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);

  const item = PRED_SENTENCES[idx];
  const handleNext = () => {
    if (idx + 1 >= PRED_SENTENCES.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };


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
      <div className="flex gap-1">
        {PRED_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <span className="text-4xl">{item.emoji}</span>
          <p className="text-white font-bold text-lg text-center">{item.sentence}</p>
          {!tapped ? (
            <motion.button onClick={() => setTapped(true)}
              className="px-5 py-2.5 rounded-xl font-black text-sm"
              style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
              whileTap={{ scale: 0.95 }}>
              {item.predicate}
            </motion.button>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 rounded-xl text-sm font-black"
              style={{ background: `${color}33`, border: `2px solid ${color}`, color }}>
              ✅ {lbl.predicate}: {item.predicate}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: Object Akk/Dat ──────────────────────────────────────────────────
function Round4({ color, lbl, onNext, showTeach, setShowTeach, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; setShowTeach: (v: boolean) => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const item = OBJ_SENTENCES[idx];
  const isCorrect = selected === item.type;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.type) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.sentence, wrongAnswer: opt, correctAnswer: item.type, topic: "Sentence Parts", lang: "de" });
    }
    setTimeout(() => {
      if (idx + 1 >= OBJ_SENTENCES.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
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
        {OBJ_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-lg">
            {item.sentence.split(item.underlined).map((part, j, arr) => (
              <span key={j}>
                {part}
                {j < arr.length - 1 && (
                  <span className="underline font-black" style={{ color }}>{item.underlined}</span>
                )}
              </span>
            ))}
          </p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${lbl[item.type]}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="flex-1 py-3 rounded-xl font-black text-xs"
            style={{
              background: selected === opt ? (opt === item.type ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === item.type ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.type ? "#00FF88" : "#FF6B6B") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {lbl[opt]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 5: Full sentence analysis MCQ ─────────────────────────────────────
function Round5({ color, lbl, onDone, wrongCountRef, lang }: { color: string; lbl: Record<string, string>; onDone: () => void; wrongCountRef: React.MutableRefObject<number>; lang: string }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const item = ANALYSIS_QUIZ[idx];
  const isCorrect = selected === item.part;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.part) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.sentence, wrongAnswer: opt, correctAnswer: item.part, topic: "Sentence Parts", lang: "de" });
    }
    setTimeout(() => {
      if (idx + 1 >= ANALYSIS_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  const parts = item.sentence.split(item.highlight);

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
          className="w-full rounded-2xl p-4"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <div className="flex items-center justify-center gap-2">
            <p className="text-white font-bold text-lg">
              {parts[0]}
              <span className="font-black underline" style={{ color: PART_COLORS[item.part] }}>
                {item.highlight}
              </span>
              {parts[1]}
            </p>
            <SpeakButton text={item.sentence} lang={"de"} size={16} />
          </div>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${lbl[item.part]}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-2 gap-2 w-full">
        {["subject", "predicate", "object", "adverbial"].map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="py-3 rounded-xl font-black text-xs"
            style={{
              background: selected === opt ? (opt === item.part ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : `${PART_COLORS[opt]}18`,
              border: `2px solid ${selected === opt ? (opt === item.part ? "#00FF88" : "#FF6B6B") : PART_COLORS[opt] + "55"}`,
              color: selected === opt ? (opt === item.part ? "#00FF88" : "#FF6B6B") : PART_COLORS[opt],
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {lbl[opt]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const SentencePartExplorerK4 = memo(function SentencePartExplorerK4({
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
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} wrongCountRef={wrongCountRef} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} wrongCountRef={wrongCountRef} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} wrongCountRef={wrongCountRef} />}
          {round === 4 && (
            <div className="w-full flex flex-col items-center gap-4">
              <Round5 color={color} lbl={lbl} onDone={finish} wrongCountRef={wrongCountRef} lang={lang} />
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

export default SentencePartExplorerK4;
