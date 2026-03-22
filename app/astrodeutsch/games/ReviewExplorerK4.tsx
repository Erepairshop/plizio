"use client";
// ReviewExplorerK4 — Island i9: Große Prüfung (Review) (K4)
// Reviews: Kasus, Zeitformen, Satzglieder, Spelling, Mixed challenge

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "K4 Review",
    round1Title: "Cases Quick Review",
    round1Hint: "Match each question to its case!",
    round2Title: "Past Tense Review",
    round2Hint: "Choose the correct past tense form.",
    round3Title: "Sentence Parts Review",
    round3Hint: "Identify the highlighted sentence part.",
    round4Title: "Spelling Review",
    round4Hint: "das or dass? ss or ß?",
    round5Title: "Mixed K4 Challenge",
    round5Hint: "Show everything you learned!",
    next: "Next",
    finish: "Finished!",
    well: "Excellent!",
    correct: "Correct!",
    nom: "Nominativ",
    akk: "Akkusativ",
    dat: "Dativ",
    gen: "Genitiv",
    subject: "Subject",
    predicate: "Predicate",
    object: "Object",
    adverbial: "Adverbial",
    discovery: "💡 You've learned a lot! Articles, verbs, tenses, sentence parts — they all work together to build correct German sentences.",
  },
  hu: {
    title: "K4 Összefoglalás",
    round1Title: "Esetek gyors összefoglaló",
    round1Hint: "Párosítsd minden kérdést az esetével!",
    round2Title: "Múlt idő összefoglaló",
    round2Hint: "Válaszd a helyes múlt idejű alakot.",
    round3Title: "Mondatrészek összefoglaló",
    round3Hint: "Azonosítsd a kiemelt mondatrészt.",
    round4Title: "Helyesírás összefoglaló",
    round4Hint: "das vagy dass? ss vagy ß?",
    round5Title: "Vegyes K4 kihívás",
    round5Hint: "Mutasd meg mindent, amit tanultál!",
    next: "Tovább",
    finish: "Kész!",
    well: "Kiváló!",
    correct: "Helyes!",
    nom: "Nominativ",
    akk: "Akkusativ",
    dat: "Dativ",
    gen: "Genitiv",
    subject: "Alany",
    predicate: "Állítmány",
    object: "Tárgy",
    adverbial: "Határozó",
    discovery: "💡 Sokat tanultál! Az artikelok, igék, időalakok, mondatrészek — mindez együtt működik a helyes német mondatok felépítéséhez.",
  },
  de: {
    title: "K4-Wiederholung",
    round1Title: "Kasus Schnellwiederholung",
    round1Hint: "Ordne jede Frage ihrem Kasus zu!",
    round2Title: "Vergangenheit Wiederholung",
    round2Hint: "Wähle die richtige Vergangenheitsform.",
    round3Title: "Satzglieder Wiederholung",
    round3Hint: "Bestimme das markierte Satzglied.",
    round4Title: "Rechtschreibung Wiederholung",
    round4Hint: "das oder dass? ss oder ß?",
    round5Title: "Gemischte K4-Herausforderung",
    round5Hint: "Zeige alles, was du gelernt hast!",
    next: "Weiter",
    finish: "Fertig!",
    well: "Ausgezeichnet!",
    correct: "Richtig!",
    nom: "Nominativ",
    akk: "Akkusativ",
    dat: "Dativ",
    gen: "Genitiv",
    subject: "Subjekt",
    predicate: "Prädikat",
    object: "Objekt",
    adverbial: "Adverbiale",
    discovery: "💡 Du hast viel gelernt! Artikel, Verben, Zeitformen, Satzglieder — sie funktionieren alle zusammen, um korrekte deutsche Sätze zu bauen.",
  },
  ro: {
    title: "Recapitulare K4",
    round1Title: "Recapitulare rapidă cazuri",
    round1Hint: "Potrivește fiecare întrebare cu cazul ei!",
    round2Title: "Recapitulare trecut",
    round2Hint: "Alege forma corectă de trecut.",
    round3Title: "Recapitulare părți de propoziție",
    round3Hint: "Identifică partea de propoziție evidențiată.",
    round4Title: "Recapitulare ortografie",
    round4Hint: "das sau dass? ss sau ß?",
    round5Title: "Provocare mixtă K4",
    round5Hint: "Arată tot ce ai învățat!",
    next: "Înainte",
    finish: "Gata!",
    well: "Excelent!",
    correct: "Corect!",
    nom: "Nominativ",
    akk: "Acuzativ",
    dat: "Dativ",
    gen: "Genitiv",
    subject: "Subiect",
    predicate: "Predicat",
    object: "Obiect",
    adverbial: "Circumstanțial",
    discovery: "💡 Ai învățat o mulțime! Articolele, verbele, timpurile, părțile propoziției — toate funcționează împreună pentru a construi propoziții germane corecte.",
  },
};

const CASE_MATCH = [
  { question: "Wer?", case: "nom", color: "#3B82F6" },
  { question: "Wen?", case: "akk", color: "#EF4444" },
  { question: "Wem?", case: "dat", color: "#10B981" },
  { question: "Wessen?", case: "gen", color: "#F59E0B" },
];

const TENSE_REVIEW = [
  { sentence: "Er ___ gestern ins Kino. (gehen)", correct: "ging", options: ["ging", "geht", "gegangen"] },
  { sentence: "Ich ___ das Buch schon gelesen.", correct: "habe", options: ["habe", "bin", "hatte"] },
  { sentence: "Sie ___ laut, als sie jung war.", correct: "lachte", options: ["lachte", "lacht", "hat gelacht"] },
];

const PART_REVIEW = [
  { sentence: "Die Schüler lernen fleißig.", highlight: "Die Schüler", part: "subject" },
  { sentence: "Er kauft das neue Buch.", highlight: "kauft", part: "predicate" },
  { sentence: "Wir spielen heute draußen.", highlight: "heute", part: "adverbial" },
];

const SPELL_REVIEW = [
  { options: ["das", "dass"], correct: "dass", context: "Ich glaube, ___ er kommt." },
  { options: ["Straße", "Strasse"], correct: "Straße", context: "Wir wohnen in der ___." },
  { options: ["Wasser", "Waßer"], correct: "Wasser", context: "___ ist kalt." },
];

const MIXED_CHALLENGE = [
  { sentence: "___ Hund bellt.", options: ["Der", "Den", "Dem"], correct: "Der", topic: "Nominativ" },
  { sentence: "Ich sehe ___ Katze.", options: ["die", "der", "den"], correct: "die", topic: "Akkusativ" },
  { sentence: "Er ___ gestern früh auf.", options: ["stand", "steht", "stehen"], correct: "stand", topic: "Präteritum" },
  { sentence: "Ich hoffe, ___ du gesund bist.", options: ["dass", "das", "weil"], correct: "dass", topic: "Rechtschreibung" },
  { sentence: "Sie kommt nicht, ___ sie müde ist.", options: ["weil", "dass", "wenn"], correct: "weil", topic: "Konjunktion" },
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

// ─── Round 1: Kasus quick match ───────────────────────────────────────────────
function Round1({ color, lbl, onNext, showTeach, setShowTeach }: { color: string; lbl: Record<string, string>; onNext, showTeach, setShowTeach: () => void }) {
  const [matched, setMatched] = useState<Record<string, string>>({});
  const [selectedQ, setSelectedQ] = useState<string | null>(null);
  const allMatched = Object.keys(matched).length >= CASE_MATCH.length;

  const handleQ = (q: string) => {
    if (matched[q]) return;
    setSelectedQ(q);
  };
  const handleCase = (c: string) => {
    if (!selectedQ) return;
    setMatched(prev => ({ ...prev, [selectedQ]: c }));
    setSelectedQ(null);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        <div className="grid grid-cols-2 gap-2">
          {CASE_MATCH.map(item => {
            const isMatched = !!matched[item.question];
            const isSelected = selectedQ === item.question;
            return (
              <motion.button key={item.question}
                onClick={() => handleQ(item.question)}
                className="rounded-xl py-2.5 font-black text-base"
                style={{
                  background: isMatched ? `${item.color}22` : isSelected ? `${color}33` : "rgba(255,255,255,0.05)",
                  border: `2px solid ${isMatched ? item.color : isSelected ? color : "rgba(255,255,255,0.1)"}`,
                  color: isMatched ? item.color : isSelected ? color : "white",
                }}
                whileTap={!isMatched ? { scale: 0.95 } : {}}>
                {item.question}
                {isMatched && <span className="ml-1 text-xs">→ {lbl[item.case]}</span>}
              </motion.button>
            );
          })}
        </div>
        {selectedQ && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 gap-2">
            {CASE_MATCH.map(item => (
              <motion.button key={item.case}
                onClick={() => handleCase(item.case)}
                className="rounded-xl py-2.5 font-black text-sm"
                style={{
                  background: `${item.color}22`,
                  border: `2px solid ${item.color}66`,
                  color: item.color,
                }}
                whileTap={{ scale: 0.95 }}>
                {lbl[item.case]}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
      {allMatched && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full">
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Tense review MCQ ────────────────────────────────────────────────
function Round2({
  color,
  lbl,
  wrongCountRef,
  onNext, showTeach, setShowTeach,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext, showTeach, setShowTeach: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const item = TENSE_REVIEW[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected || feedback) return;
    const correct = opt === item.correct;
    setSelected(opt);
    setFeedback(correct ? "correct" : "wrong");

    if (!correct) {
      wrongCountRef.current++;
    }

    setTimeout(() => {
      if (idx + 1 >= TENSE_REVIEW.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, correct ? 800 : 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1">
        {TENSE_REVIEW.map((_, i) => (
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
            <SpeakButton text={item.sentence} lang={"de"} size={16} />
          </div>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full flex-wrap">
        {item.options.map(opt => {
          const isCorrectChoice = opt === item.correct;
          const shouldShowCorrect = feedback && isCorrectChoice;
          const shouldShowWrong = feedback && selected === opt && !isCorrectChoice;

          return (
            <motion.button key={opt}
              onClick={() => handleSelect(opt)}
              disabled={!!selected}
              className="flex-1 py-2.5 rounded-xl font-black text-sm min-w-0 transition-colors"
              style={{
                background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,107,107,0.15)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF6B6B" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF6B6B" : "white",
                cursor: selected ? "default" : "pointer",
              }}
              whileTap={!selected ? { scale: 0.93 } : {}}>
              {opt}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 3: Sentence parts review ──────────────────────────────────────────
function Round3({
  color,
  lbl,
  wrongCountRef,
  onNext, showTeach, setShowTeach,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext, showTeach, setShowTeach: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const item = PART_REVIEW[idx];
  const isCorrect = selected === item.part;

  const handleSelect = (opt: string) => {
    if (selected || feedback) return;
    const correct = opt === item.part;
    setSelected(opt);
    setFeedback(correct ? "correct" : "wrong");

    if (!correct) {
      wrongCountRef.current++;
    }

    setTimeout(() => {
      if (idx + 1 >= PART_REVIEW.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, correct ? 800 : 1000);
  };

  const parts = item.sentence.split(item.highlight);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1">
        {PART_REVIEW.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-lg">
            {parts[0]}
            <span className="font-black underline" style={{ color: PART_COLORS[item.part] }}>{item.highlight}</span>
            {parts[1]}
          </p>
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
        {["subject", "predicate", "object", "adverbial"].map(opt => {
          const isCorrectChoice = opt === item.part;
          const shouldShowCorrect = feedback && isCorrectChoice;
          const shouldShowWrong = feedback && selected === opt && !isCorrectChoice;

          return (
            <motion.button key={opt}
              onClick={() => handleSelect(opt)}
              disabled={!!selected}
              className="py-2.5 rounded-xl font-black text-xs transition-colors"
              style={{
                background: shouldShowCorrect
                  ? "rgba(0,255,136,0.2)"
                  : shouldShowWrong
                  ? "rgba(255,107,107,0.15)"
                  : `${PART_COLORS[opt]}18`,
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF6B6B" : PART_COLORS[opt] + "55"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF6B6B" : PART_COLORS[opt],
                cursor: selected ? "default" : "pointer",
              }}
              whileTap={!selected ? { scale: 0.93 } : {}}>
              {lbl[opt]}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 4: Spelling review ─────────────────────────────────────────────────
function Round4({
  color,
  lbl,
  wrongCountRef,
  onNext, showTeach, setShowTeach,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext, showTeach, setShowTeach: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const item = SPELL_REVIEW[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected || feedback) return;
    const correct = opt === item.correct;
    setSelected(opt);
    setFeedback(correct ? "correct" : "wrong");

    if (!correct) {
      wrongCountRef.current++;
    }

    setTimeout(() => {
      if (idx + 1 >= SPELL_REVIEW.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, correct ? 800 : 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1">
        {SPELL_REVIEW.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.context} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white font-bold text-lg">{item.context}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {item.options.map(opt => {
          const isCorrectChoice = opt === item.correct;
          const shouldShowCorrect = feedback && isCorrectChoice;
          const shouldShowWrong = feedback && selected === opt && !isCorrectChoice;

          return (
            <motion.button key={opt}
              onClick={() => handleSelect(opt)}
              disabled={!!selected}
              className="flex-1 py-3 rounded-xl font-black text-base transition-colors"
              style={{
                background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,107,107,0.15)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF6B6B" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF6B6B" : "white",
                cursor: selected ? "default" : "pointer",
              }}
              whileTap={!selected ? { scale: 0.93 } : {}}>
              {opt}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 5: Mixed K4 challenge ──────────────────────────────────────────────
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
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const item = MIXED_CHALLENGE[idx];
  const isCorrect = selected === item.correct;

  const handleSelect = (opt: string) => {
    if (selected || feedback) return;
    const correct = opt === item.correct;
    setSelected(opt);
    setFeedback(correct ? "correct" : "wrong");

    if (!correct) {
      wrongCountRef.current++;
    }

    setTimeout(() => {
      if (idx + 1 >= MIXED_CHALLENGE.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, correct ? 800 : 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1">
        {MIXED_CHALLENGE.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white/50 text-[10px] font-bold mb-1" style={{ color }}>{item.topic}</p>
          <p className="text-white font-bold text-lg text-center">{item.sentence}</p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2 text-center"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? `✅ ${lbl.correct}` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full">
        {item.options.map(opt => {
          const isCorrectChoice = opt === item.correct;
          const shouldShowCorrect = feedback && isCorrectChoice;
          const shouldShowWrong = feedback && selected === opt && !isCorrectChoice;

          return (
            <motion.button key={opt}
              onClick={() => handleSelect(opt)}
              disabled={!!selected}
              className="flex-1 py-3 rounded-xl font-black text-base transition-colors"
              style={{
                background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,107,107,0.15)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF6B6B" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF6B6B" : "white",
                cursor: selected ? "default" : "pointer",
              }}
              whileTap={!selected ? { scale: 0.93 } : {}}>
              {opt}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 6: Discovery card ────────────────────────────────────────────────────
function Round6({
  color,
  lbl,
  onDone,
}: {
  color: string;
  lbl: Record<string, string>;
  onDone: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <motion.div className="text-7xl" animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}>
        🎓
      </motion.div>
      <div className="text-center">
        <h2 className="text-2xl font-black text-white">{lbl.well}</h2>
      </div>
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-2xl px-4 py-3 text-center"
        style={{ background: "rgba(180,77,255,0.1)", border: "2px solid rgba(180,77,255,0.3)" }}>
        <p className="text-[#B44DFF] font-black text-sm">{lbl.discovery}</p>
      </motion.div>
      <motion.button onClick={onDone}
        className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
        style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
        whileTap={{ scale: 0.97 }}>
        {lbl.finish} <ChevronRight size={16} />
      </motion.button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const ReviewExplorerK4 = memo(function ReviewExplorerK4({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [showTeach, setShowTeach] = useState(true);
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 6;
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
          {round === 1 && <Round2 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 2 && <Round3 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={next} />}
          {round === 5 && <Round6 color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ReviewExplorerK4;
