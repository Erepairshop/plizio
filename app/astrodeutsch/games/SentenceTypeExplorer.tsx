"use client";
// SentenceTypeExplorer — Island i4: Satzarten (K2)
// Teaches: statement/question/exclamation, punctuation, question words, word order

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Sentence Explorer",
    round1Title: "3 Types of Sentences",
    round1Hint: "Tap each sentence type to learn it!",
    round1Teach: "Every sentence tells, asks, or expresses a feeling! We can identify them by their punctuation mark at the end.",
    round2Title: "Add Punctuation!",
    round2Hint: "Which punctuation mark ends this sentence?",
    round2Teach: "German sentences MUST end with a punctuation mark. Statement (.) | Question (?) | Exclamation (!). The punctuation tells us how to read it!",
    round3Title: "Question Words",
    round3Hint: "Match the question word to its meaning!",
    round3Teach: "Questions in German start with special words: Wer (who), Was (what), Wo (where), Wann (when), Warum (why). These help us ask for different information!",
    round4Title: "Word Order",
    round4Hint: "Put the words in the correct order to build a sentence!",
    round4Teach: "In German, the word order matters! Usually: subject + verb + object. But in questions, the verb moves to the front. Listen and observe!",
    round5Title: "Sentence Challenge",
    round5Hint: "Choose the correct punctuation!",
    well: "Perfect!",
    next: "Next",
    gotIt: "Got it!",
    finish: "Finished!",
    correct: "Correct!",
    statement: "Statement",
    question: "Question",
    exclamation: "Exclamation",
    statementDesc: "A telling sentence — ends with .",
    questionDesc: "An asking sentence — ends with ?",
    exclamationDesc: "A strong feeling — ends with !",
    tapToBuild: "Tap to build the sentence",
    discovery: "💡 German has 4 sentence types: Aussagesatz (statement), Fragesatz (question), Aufforderungssatz (command), Ausrufesatz (exclamation). Verb position changes!",
  },
  hu: {
    title: "Mondat felfedező",
    round1Title: "3 mondattípus",
    round1Hint: "Koppints minden mondattípusra, hogy megtanuld!",
    round1Teach: "Minden mondat közöl, kérdez vagy érzéseket fejez ki! Az írásjel a végén segít azonosítani őket.",
    round2Title: "Írásjel hozzáadása!",
    round2Hint: "Melyik írásjel fejezi be ezt a mondatot?",
    round2Teach: "A német mondatoknak OBLIGÁT írásjellel kell végződniük. Kijelentés (.) | Kérdés (?) | Felkiáltás (!). Az írásjel megmutatja, hogyan kell olvasni!",
    round3Title: "Kérdőszavak",
    round3Hint: "Párosítsd a kérdőszót a jelentéséhez!",
    round3Teach: "A német kérdések speciális szavakkal kezdődnek: Wer (ki), Was (mi), Wo (hol), Wann (mikor), Warum (miért). Ezek segítenek eltérő információkat kérni!",
    round4Title: "Szórend",
    round4Hint: "Rakd helyes sorrendbe a szavakat, hogy mondatot alkoss!",
    round4Teach: "A németben a szórend számít! Általában: alany + ige + tárgy. De a kérdésekben az ige az eleje felé kerül. Hallgasd meg és figyeld meg!",
    round5Title: "Mondat kihívás",
    round5Hint: "Válaszd ki a helyes írásjeleket!",
    well: "Tökéletes!",
    next: "Tovább",
    gotIt: "Értem!",
    finish: "Vége!",
    correct: "Helyes!",
    statement: "Kijelentő mondat",
    question: "Kérdő mondat",
    exclamation: "Felkiáltó mondat",
    statementDesc: "Elbeszélő mondat — ponttal végződik.",
    questionDesc: "Kérdő mondat — kérdőjellel végződik?",
    exclamationDesc: "Érzelmeket kifejező — felkiáltójellel végződik!",
    tapToBuild: "Koppints a mondat felépítéséhez",
    discovery: "💡 A németben 4 mondattípus van: Aussagesatz (kijelentő), Fragesatz (kérdő), Aufforderungssatz (parancsol), Ausrufesatz (felkiáltó). Az igepozíció változik!",
  },
  de: {
    title: "Satzarten-Entdecker",
    round1Title: "3 Satzarten",
    round1Hint: "Tippe auf jede Satzart um sie zu lernen!",
    round1Teach: "Jeder Satz sagt etwas, stellt eine Frage oder drückt ein Gefühl aus! Wir können sie am Satzzeichen am Ende erkennen.",
    round2Title: "Satzzeichen setzen!",
    round2Hint: "Welches Satzzeichen beendet diesen Satz?",
    round2Teach: "Deutsche Sätze MÜSSEN mit einem Satzzeichen enden. Aussage (.) | Frage (?) | Ausruf (!). Das Satzzeichen zeigt, wie wir es lesen sollen!",
    round3Title: "Fragewörter",
    round3Hint: "Ordne das Fragewort seiner Bedeutung zu!",
    round3Teach: "Fragen im Deutschen beginnen mit speziellen Wörtern: Wer (wer), Was (was), Wo (wo), Wann (wann), Warum (warum). Diese helfen uns, verschiedene Informationen zu erfragen!",
    round4Title: "Wortstellung",
    round4Hint: "Bringe die Wörter in die richtige Reihenfolge um einen Satz zu bilden!",
    round4Teach: "Im Deutschen ist die Wortstellung wichtig! Normalerweise: Subjekt + Verb + Objekt. Aber in Fragen rutscht das Verb nach vorne. Beobachte und höre zu!",
    round5Title: "Satz-Herausforderung",
    round5Hint: "Wähle das richtige Satzzeichen!",
    well: "Perfekt!",
    next: "Weiter",
    gotIt: "Verstanden!",
    finish: "Fertig!",
    correct: "Richtig!",
    statement: "Aussagesatz",
    question: "Fragesatz",
    exclamation: "Ausrufesatz",
    statementDesc: "Ein erzählender Satz — endet mit .",
    questionDesc: "Ein fragender Satz — endet mit ?",
    exclamationDesc: "Ein Gefühlsausdruck — endet mit !",
    tapToBuild: "Tippe um den Satz zu bauen",
    discovery: "💡 Deutsch hat 4 Satzarten: Aussagesatz (Aussage), Fragesatz (Frage), Aufforderungssatz (Befehl), Ausrufesatz (Ausruf). Die Verbstellung ändert sich!",
  },
  ro: {
    title: "Exploratorul propozițiilor",
    round1Title: "3 tipuri de propoziții",
    round1Hint: "Atinge fiecare tip de propoziție pentru a-l învăța!",
    round1Teach: "Fiecare propoziție spune ceva, pune o întrebare sau exprimă un sentiment! Le putem identifica după semnul de punctuație de la sfârșitul ei.",
    round2Title: "Adaugă semnul de punctuație!",
    round2Hint: "Ce semn de punctuație termină această propoziție?",
    round2Teach: "Propozițiile germane TREBUIE să se termine cu un semn de punctuație. Declarație (.) | Întrebare (?) | Exclamație (!). Semnul de punctuație arată cum trebuie să o citim!",
    round3Title: "Cuvinte interogative",
    round3Hint: "Potrivește cuvântul interogativ cu semnificația sa!",
    round3Teach: "Întrebările în germană încep cu cuvinte speciale: Wer (cine), Was (ce), Wo (unde), Wann (când), Warum (de ce). Acestea ne ajută să cerem diferite informații!",
    round4Title: "Ordinea cuvintelor",
    round4Hint: "Pune cuvintele în ordine corectă pentru a forma o propoziție!",
    round4Teach: "În germană, ordinea cuvintelor contează! De obicei: subiect + verb + obiect. Dar în întrebări, verbul se mută la început. Observă și ascultă!",
    round5Title: "Provocare propoziții",
    round5Hint: "Alege semnul de punctuație corect!",
    well: "Perfect!",
    next: "Înainte",
    gotIt: "Înțeles!",
    finish: "Gata!",
    correct: "Corect!",
    statement: "Propoziție enunțiativă",
    question: "Propoziție interogativă",
    exclamation: "Propoziție exclamativă",
    statementDesc: "O propoziție care spune ceva — se termină cu .",
    questionDesc: "O propoziție care întreabă — se termină cu ?",
    exclamationDesc: "Un sentiment puternic — se termină cu !",
    tapToBuild: "Atinge pentru a construi propoziția",
    discovery: "💡 Germana are 4 tipuri de propoziții: Aussagesatz (declarativ), Fragesatz (interogativ), Aufforderungssatz (imperativ), Ausrufesatz (exclamativ). Poziția verbului se schimbă!",
  },
};

// Round 1: sentence types
const SENTENCE_TYPES = [
  {
    key: "statement" as const,
    emoji: "📣",
    example: "Der Hund läuft schnell.",
    punct: ".",
    color: "#3B82F6",
  },
  {
    key: "question" as const,
    emoji: "❓",
    example: "Wo ist die Katze?",
    punct: "?",
    color: "#F59E0B",
  },
  {
    key: "exclamation" as const,
    emoji: "💥",
    example: "Das ist toll!",
    punct: "!",
    color: "#EF4444",
  },
];

// Round 2: add punctuation
const PUNCT_SENTENCES: { text: string; answer: string }[] = [
  { text: "Die Sonne scheint heute", answer: "." },
  { text: "Wo wohnst du", answer: "?" },
  { text: "Das ist wunderbar", answer: "!" },
  { text: "Der Ball ist rund", answer: "." },
  { text: "Wann kommst du", answer: "?" },
];

// Round 3: question words
const QUESTION_WORDS: { word: string; meaning: Record<string, string>; emoji: string }[] = [
  { word: "Wer", meaning: { de: "nach einer Person", en: "asks about a person", hu: "személyre kérdez", ro: "despre o persoană" }, emoji: "👤" },
  { word: "Was", meaning: { de: "nach einer Sache", en: "asks about a thing", hu: "dologra kérdez", ro: "despre un lucru" }, emoji: "📦" },
  { word: "Wo", meaning: { de: "nach einem Ort", en: "asks about a place", hu: "helyre kérdez", ro: "despre un loc" }, emoji: "📍" },
  { word: "Wann", meaning: { de: "nach einer Zeit", en: "asks about a time", hu: "időre kérdez", ro: "despre un timp" }, emoji: "🕐" },
  { word: "Warum", meaning: { de: "nach einem Grund", en: "asks about a reason", hu: "okra kérdez", ro: "despre un motiv" }, emoji: "🤔" },
];

// Round 4: word order
const WORD_ORDER_SENTENCES: { words: string[]; correct: string[] }[] = [
  { words: ["spielt", "Ball", "Anna", "mit", "dem"], correct: ["Anna", "spielt", "mit", "dem", "Ball"] },
  { words: ["kommt", "heute", "Tim", "nicht"], correct: ["Tim", "kommt", "heute", "nicht"] },
  { words: ["liest", "Buch", "ein", "das", "Kind"], correct: ["das", "Kind", "liest", "ein", "Buch"] },
];

// Round 5: quiz
const PUNCT_QUIZ: { text: string; options: string[]; answer: string }[] = [
  { text: "Wie heißt du", options: [".", "?", "!"], answer: "?" },
  { text: "Ich heiße Max", options: [".", "?", "!"], answer: "." },
  { text: "Das ist fantastisch", options: [".", "?", "!"], answer: "!" },
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

// ─── Round 1: Sentence types ──────────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === SENTENCE_TYPES.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {SENTENCE_TYPES.map((st, i) => {
          const isTapped = tapped.has(i);
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isTapped ? `${st.color}22` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isTapped ? st.color : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.98 } : {}}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{st.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-lg" style={{ color: isTapped ? st.color : "white" }}>
                      {lbl[st.key]}
                    </span>
                    <span className="text-2xl font-black" style={{ color: st.color }}>{st.punct}</span>
                  </div>
                  {isTapped && (
                    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
                      <p className="text-white/60 text-xs font-bold">{lbl[`${st.key}Desc`]}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <p className="text-sm font-bold italic" style={{ color: st.color }}>{st.example}</p>
                        <SpeakButton text={st.example} lang="de" size={12} />
                      </div>
                    </motion.div>
                  )}
                </div>
                {isTapped && <span className="text-lg">✅</span>}
              </div>
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 2: Punctuation ─────────────────────────────────────────────────────
function Round2({ color, lbl, onNext, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = PUNCT_SENTENCES[idx];
  const punctColors: Record<string, string> = { ".": "#3B82F6", "?": "#F59E0B", "!": "#EF4444" };

  const handleSelect = (p: string) => {
    if (selected) return;
    setSelected(p);
    if (p !== item.answer) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.sentence, wrongAnswer: p, correctAnswer: item.answer, topic: "Sentence Types", lang: "de" });
    }
    setTimeout(() => {
      if (idx + 1 >= PUNCT_SENTENCES.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {PUNCT_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-2xl font-black text-white">
            {item.text}
            <span style={{ color: selected ? (punctColors[selected] ?? color) : color }}>
              {selected ?? "_"}
            </span>
          </p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="mt-1 text-sm font-bold"
              style={{ color: selected === item.answer ? "#00FF88" : "#FF2D78" }}>
              {selected === item.answer ? "✅ " + lbl.correct : "→ " + item.answer}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 w-full">
        {[".", "?", "!"].map(p => (
          <motion.button key={p} onClick={() => handleSelect(p)}
            className="flex-1 py-5 rounded-2xl font-black text-4xl"
            style={{
              background: selected === p ? `${punctColors[p] ?? color}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === p ? (punctColors[p] ?? color) : "rgba(255,255,255,0.2)"}`,
              color: selected === p ? (punctColors[p] ?? color) : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {p}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 3: Question words ──────────────────────────────────────────────────
function Round3({ lang, color, lbl, onNext, wrongCountRef }: { lang: string; color: string; lbl: Record<string, string>; onNext: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === QUESTION_WORDS.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {QUESTION_WORDS.map((qw, i) => {
          const isTapped = tapped.has(i);
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="w-full rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{
                background: isTapped ? `${color}22` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? color : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.97 } : {}}>
              <span className="text-2xl">{qw.emoji}</span>
              <span className="text-2xl font-black" style={{ color: isTapped ? color : "white" }}>{qw.word}?</span>
              {isTapped && (
                <motion.div initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="flex-1 text-right">
                  <p className="text-xs font-bold text-white/60">{qw.meaning[lang] ?? qw.meaning.de}</p>
                </motion.div>
              )}
              {!isTapped && <span className="ml-auto text-white/30 text-sm font-bold">{lbl.tapToLearn ?? "→"}</span>}
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: Word order ──────────────────────────────────────────────────────
function Round4({ color, lbl, onNext, wrongCountRef }: { color: string; lbl: Record<string, string>; onNext: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [idx, setIdx] = useState(0);
  const [order, setOrder] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const item = WORD_ORDER_SENTENCES[idx];
  const allPlaced = order.length === item.words.length;

  const handleTap = (wi: number) => {
    if (order.includes(wi)) return;
    setOrder(prev => [...prev, wi]);
  };

  const handleNext = () => {
    if (idx + 1 >= WORD_ORDER_SENTENCES.length) setDone(true);
    else { setIdx(i => i + 1); setOrder([]); }
  };

  const isCorrect = allPlaced && order.map(i => item.words[i]).join(" ") === item.correct.join(" ");

  if (done) return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="text-5xl">🏗️</div>
      <p className="text-white font-black text-xl">{lbl.well}</p>
      <NextBtn onClick={onNext} label={lbl.next} color={color} />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {WORD_ORDER_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      {/* Built sentence */}
      <div className="w-full min-h-[52px] rounded-2xl px-4 py-2 flex flex-wrap gap-1 items-center"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${allPlaced ? (isCorrect ? "#00FF88" : "#FF2D78") : color + "33"}` }}>
        {order.length === 0 ? (
          <p className="text-white/30 text-sm font-bold">{lbl.tapToBuild}</p>
        ) : (
          order.map((wi, pos) => (
            <span key={pos} className="px-2 py-1 rounded-lg text-sm font-black"
              style={{ background: `${color}33`, color }}>
              {item.words[wi]}
            </span>
          ))
        )}
        {allPlaced && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="ml-1 text-lg">{isCorrect ? "✅" : "❌"}</motion.span>
        )}
      </div>
      {/* Word buttons */}
      <div className="flex flex-wrap gap-2 justify-center w-full">
        {item.words.map((word, wi) => {
          const placed = order.includes(wi);
          return (
            <motion.button key={wi} onClick={() => handleTap(wi)}
              className="px-3 py-2 rounded-xl font-black text-base"
              style={{
                background: placed ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.08)",
                border: `2px solid ${placed ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.25)"}`,
                color: placed ? "rgba(255,255,255,0.2)" : "white",
              }}
              whileTap={!placed ? { scale: 0.9 } : {}}>
              {word}
            </motion.button>
          );
        })}
      </div>
      {allPlaced && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full flex flex-col gap-2">
          {!isCorrect && (
            <p className="text-center text-xs font-bold text-white/60">
              {item.correct.join(" ")}
            </p>
          )}
          <NextBtn onClick={handleNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: Punctuation quiz ────────────────────────────────────────────────
function Round5({ color, lbl, onDone, wrongCountRef }: { color: string; lbl: Record<string, string>; onDone: () => void; wrongCountRef: React.MutableRefObject<number> }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = PUNCT_QUIZ[idx];
  const punctColors: Record<string, string> = { ".": "#3B82F6", "?": "#F59E0B", "!": "#EF4444" };

  const handleSelect = (p: string) => {
    if (selected) return;
    setSelected(p);
    if (p !== item.answer) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.sentence, wrongAnswer: p, correctAnswer: item.answer, topic: "Sentence Types", lang: "de" });
    }
    setTimeout(() => {
      if (idx + 1 >= PUNCT_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 mb-1">
        {PUNCT_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-2xl font-black text-white">
            {item.text}
            <span style={{ color: selected ? (punctColors[selected] ?? color) : "rgba(255,255,255,0.25)" }}>
              {selected ?? "_"}
            </span>
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 w-full">
        {item.options.map(p => (
          <motion.button key={p} onClick={() => handleSelect(p)}
            className="flex-1 py-5 rounded-2xl font-black text-4xl"
            style={{
              background: selected === p
                ? (p === item.answer ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === p
                ? (p === item.answer ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === p ? (p === item.answer ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {p}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const SentenceTypeExplorer = memo(function SentenceTypeExplorer({
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
          {showTeach && (
            <div className="flex flex-col items-center gap-4 w-full">
              <p className="text-xl font-black text-white">{lbl[`round${round + 1}Title` as keyof typeof lbl]}</p>
              <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-sm text-white/80 leading-relaxed">{lbl[`round${round + 1}Teach` as keyof typeof lbl]}</p>
              </div>
              <motion.button onClick={() => setShowTeach(false)}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
                whileTap={{ scale: 0.97 }}>
                {lbl.gotIt} <ChevronRight size={16} />
              </motion.button>
            </div>
          )}
          {!showTeach && (
            <>
              {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} />}
              {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} wrongCountRef={wrongCountRef} />}
              {round === 2 && <Round3 lang={lang} color={color} lbl={lbl} onNext={next} wrongCountRef={wrongCountRef} />}
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
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default SentenceTypeExplorer;
