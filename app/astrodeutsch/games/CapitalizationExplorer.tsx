"use client";
// CapitalizationExplorer — Island i5: Großschreibung (K2)
// Teaches: nouns + sentence starts get capital letters, conjunctions stay lowercase

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Capital Letter Explorer",
    round1Title: "The Big Rules!",
    round1Hint: "Tap each rule to learn when we use capital letters!",
    round1Teach: "German capitalization is special! NOUNS (things, people, animals) are ALWAYS capitalized, no matter where they are in the sentence. Every sentence STARTS with a capital letter. And names of people and places are ALWAYS capitalized. These are the three big rules!",
    round2Title: "Who needs a capital?",
    round2Hint: "Tap the word that should start with a capital letter!",
    round2Teach: "In every sentence, look for nouns — the names of things, animals, people. They should be CAPITALIZED! Remember: In German, ALL nouns are capitalized, not just important ones. This is different from English!",
    round3Title: "Small conjunctions",
    round3Hint: "und, oder, aber — these stay lowercase! Tap them all.",
    round3Teach: "Words like 'und' (and), 'oder' (or), 'aber' (but), 'denn' (because) are CONJUNCTIONS. They are NOT nouns, so they stay LOWERCASE. Even at the start of a sentence (in special cases), they can stay small! Connecting words are not capitalized!",
    round4Title: "Fix the sentence!",
    round4Hint: "Tap the word that is missing its capital letter!",
    round4Teach: "Look at each sentence and find mistakes! Which word should be capitalized? Is it the first word of the sentence? Is it a noun? Use the rules you learned to fix the capitalization!",
    round5Title: "Capital Challenge",
    round5Hint: "Choose correctly!",
    well: "Brilliant!",
    next: "Next",
    gotIt: "Got it!",
    finish: "Finished!",
    correct: "Correct!",
    rule1: "Nouns always start with a capital letter",
    rule1Ex: "Hund, Haus, Ball, Schule",
    rule2: "Every sentence starts with a capital letter",
    rule2Ex: "Der Hund bellt. Wo ist der Ball?",
    rule3: "Names of people and places are always capitalized",
    rule3Ex: "Anna, Berlin, Deutschland",
    tapToLearn: "Tap to learn!",
    discovery: "💡 In German, ALL nouns are capitalized — not just names! Also capitalize after a period, and the formal 'Sie' (you) is always capitalized.",
  },
  hu: {
    title: "Nagybetű felfedező",
    round1Title: "A nagy szabályok!",
    round1Hint: "Koppints minden szabályra, hogy megtanuld, mikor írunk nagybetűt!",
    round1Teach: "A német nagybetűzés különleges! A FŐNEVEK (dolgok, emberek, állatok) MINDIG nagybetűvel kezdődnek, függetlenül a mondatban elfoglalt helytől. Minden mondat NAGYBETŰVEL kezdődik. A személyek és helyek nevei MINDIG nagybetűsek. Ezek a három nagy szabály!",
    round2Title: "Kinek kell nagybetű?",
    round2Hint: "Koppints arra a szóra, amelynek nagybetűvel kell kezdődnie!",
    round2Teach: "Minden mondatban keress főneveket — dolgok, állatok, emberek neveit. NAGYBETŰVEL kell kezdődniük! Ne feledd: A németben MINDEN főnév nagybetűvel kezdődik, nem csak a fontosak. Ez az angol nyelvtől eltérő!",
    round3Title: "Kis kötőszavak",
    round3Hint: "und, oder, aber — ezek kisbetűsek maradnak! Koppints mindegyikre.",
    round3Teach: "Az olyan szavak mint 'und' (és), 'oder' (vagy), 'aber' (de), 'denn' (mert) KÖTŐSZAVAK. Nem főnevek, ezért KISBETŰSEK maradnak. Még a mondat elején is (különleges esetekben) maradhatnak kicsik! A kötőszavak nincsenek nagybetűzve!",
    round4Title: "Javítsd ki a mondatot!",
    round4Hint: "Koppints arra a szóra, amelyről hiányzik a nagybetű!",
    round4Teach: "Nézd meg minden mondatot és keress hibákat! Melyik szónak kellene nagybetűvel kezdődnie? Egy mondat első szava? Egy főnév? Használd az általad tanult szabályokat a nagybetűzés kijavításához!",
    round5Title: "Nagybetű kihívás",
    round5Hint: "Válassz helyesen!",
    well: "Zseniális!",
    next: "Tovább",
    gotIt: "Értem!",
    finish: "Vége!",
    correct: "Helyes!",
    rule1: "A főnevek mindig nagybetűvel kezdődnek",
    rule1Ex: "Hund, Haus, Ball, Schule",
    rule2: "Minden mondat nagybetűvel kezdődik",
    rule2Ex: "Der Hund bellt. Wo ist der Ball?",
    rule3: "A személyek és helyek nevei mindig nagybetűsek",
    rule3Ex: "Anna, Berlin, Deutschland",
    tapToLearn: "Koppints, hogy tanuld!",
    discovery: "💡 A németben MINDEN főnév nagybetűvel kezdődik — nem csak a nevek! A mondat után is kell nagybetű, és a formális 'Sie' (te) mindig nagybetűvel íródik.",
  },
  de: {
    title: "Großschreibung-Entdecker",
    round1Title: "Die großen Regeln!",
    round1Hint: "Tippe auf jede Regel um zu lernen, wann wir großschreiben!",
    round1Teach: "Deutsche Großschreibung ist besonders! NOMEN (Dinge, Menschen, Tiere) beginnen IMMER mit Großbuchstaben, egal wo sie im Satz stehen. Jeder Satz beginnt mit einem GROSSBUCHSTABEN. Und Namen von Personen und Orten werden IMMER großgeschrieben. Das sind die drei großen Regeln!",
    round2Title: "Wer braucht einen Großbuchstaben?",
    round2Hint: "Tippe auf das Wort, das mit einem Großbuchstaben beginnen muss!",
    round2Teach: "In jedem Satz suche nach Nomen — den Namen von Dingen, Tieren, Menschen. Sie sollten GROSSGESCHRIEBEN sein! Merke dir: Im Deutschen werden ALLE Nomen großgeschrieben, nicht nur wichtige. Das ist anders als im Englischen!",
    round3Title: "Kleine Bindewörter",
    round3Hint: "und, oder, aber — diese bleiben klein! Tippe auf alle.",
    round3Teach: "Wörter wie 'und' (and), 'oder' (or), 'aber' (but), 'denn' (because) sind BINDEWÖRTER (Konjunktionen). Sie sind keine Nomen, also bleiben sie KLEINGESCHRIEBEN. Auch am Satzanfang (in besonderen Fällen) können sie klein bleiben! Bindewörter werden nicht großgeschrieben!",
    round4Title: "Korrigiere den Satz!",
    round4Hint: "Tippe auf das Wort, dem der Großbuchstabe fehlt!",
    round4Teach: "Schaue dir jeden Satz an und suche nach Fehlern! Welches Wort sollte großgeschrieben sein? Ist es das erste Wort des Satzes? Ist es ein Nomen? Nutze die gelernten Regeln, um die Großschreibung zu korrigieren!",
    round5Title: "Großschreibung-Herausforderung",
    round5Hint: "Wähle richtig!",
    well: "Brillant!",
    next: "Weiter",
    gotIt: "Verstanden!",
    finish: "Fertig!",
    correct: "Richtig!",
    rule1: "Nomen beginnen immer mit einem Großbuchstaben",
    rule1Ex: "Hund, Haus, Ball, Schule",
    rule2: "Jeder Satz beginnt mit einem Großbuchstaben",
    rule2Ex: "Der Hund bellt. Wo ist der Ball?",
    rule3: "Namen von Personen und Orten werden immer groß geschrieben",
    rule3Ex: "Anna, Berlin, Deutschland",
    tapToLearn: "Tippe zum Lernen!",
    discovery: "💡 Im Deutschen werden ALLE Nomen großgeschrieben — nicht nur Namen! Auch nach einem Punkt kommt ein Großbuchstabe, und das formale 'Sie' wird immer großgeschrieben.",
  },
  ro: {
    title: "Exploratorul majusculelor",
    round1Title: "Regulile mari!",
    round1Hint: "Atinge fiecare regulă pentru a învăța când folosim majuscule!",
    round1Teach: "Casing-ul germanic este special! SUBSTANTIVELE (lucruri, oameni, animale) încep ÎNTOTDEAUNA cu majusculă, indiferent unde sunt în propoziție. Fiecare propoziție ÎNCEPE cu o MAJUSCULĂ. Și numele de persoane și locuri sunt ÎNTOTDEAUNA capitalizate. Acestea sunt cele trei reguli principale!",
    round2Title: "Cine are nevoie de majusculă?",
    round2Hint: "Atinge cuvântul care trebuie să înceapă cu majusculă!",
    round2Teach: "În fiecare propoziție, caută substantive — numele lucrurilor, animalelor, oamenilor. Ar trebui să fie CAPITALIZATE! Ține minte: În germană, TOATE substantivele sunt capitalizate, nu doar importante. Aceasta este diferit de engleza!",
    round3Title: "Conjuncții mici",
    round3Hint: "und, oder, aber — acestea rămân cu literă mică! Atinge-le pe toate.",
    round3Teach: "Cuvinte precum 'und' (and), 'oder' (or), 'aber' (but), 'denn' (because) sunt CONJUNCȚII. Nu sunt substantive, deci rămân MICI. Chiar și la începutul propoziției (în cazuri speciale), pot rămâne mici! Cuvintele de legătură nu sunt capitalizate!",
    round4Title: "Corectează propoziția!",
    round4Hint: "Atinge cuvântul căruia îi lipsește majuscula!",
    round4Teach: "Privește fiecare propoziție și caută greșeli! Care cuvânt ar trebui capitalizat? Este primul cuvânt al propoziției? Este un substantiv? Folosește regulile pe care le-ai învățat pentru a corecta capitalizarea!",
    round5Title: "Provocare majuscule",
    round5Hint: "Alege corect!",
    well: "Strălucit!",
    next: "Înainte",
    gotIt: "Înțeles!",
    finish: "Gata!",
    correct: "Corect!",
    rule1: "Substantivele încep întotdeauna cu majusculă",
    rule1Ex: "Hund, Haus, Ball, Schule",
    rule2: "Fiecare propoziție începe cu majusculă",
    rule2Ex: "Der Hund bellt. Wo ist der Ball?",
    rule3: "Numele persoanelor și locurilor se scriu mereu cu majusculă",
    rule3Ex: "Anna, Berlin, Deutschland",
    tapToLearn: "Atinge pentru a învăța!",
    discovery: "💡 În germană, TOATE substantivele se scriu cu majusculă — nu doar numele! De asemenea, după o perioadă vine o majusculă, iar formal 'Sie' (tu) se scrie întotdeauna cu majusculă.",
  },
};

// Round 1: rules
const RULES = [
  { key: "rule1", key2: "rule1Ex", emoji: "📦", color: "#3B82F6" },
  { key: "rule2", key2: "rule2Ex", emoji: "📝", color: "#10B981" },
  { key: "rule3", key2: "rule3Ex", emoji: "🌍", color: "#F59E0B" },
];

// Round 2: tap the word needing capital
const CAPITAL_SETS: { words: string[]; nounIdx: number }[] = [
  { words: ["der", "hund", "bellt"], nounIdx: 1 },
  { words: ["ein", "ball", "liegt"], nounIdx: 1 },
  { words: ["die", "schule", "ist"], nounIdx: 1 },
  { words: ["das", "kind", "spielt"], nounIdx: 1 },
  { words: ["ein", "baum", "steht"], nounIdx: 1 },
  { words: ["die", "sonne", "scheint"], nounIdx: 1 },
  { words: ["ein", "tisch", "steht"], nounIdx: 1 },
  { words: ["der", "vogel", "singt"], nounIdx: 1 },
];

// Round 3: conjunctions (tap all)
const CONJUNCTIONS = [
  { word: "und", emoji: "➕", color: "#10B981" },
  { word: "oder", emoji: "🔀", color: "#3B82F6" },
  { word: "aber", emoji: "↔️", color: "#F59E0B" },
  { word: "denn", emoji: "💡", color: "#EC4899" },
  { word: "weil", emoji: "❓", color: "#A855F7" },
];

// Round 4: find the word missing capital
const BROKEN_SENTENCES: { words: string[]; brokenIdx: number; correct: string }[] = [
  { words: ["die", "Katze", "schläft"], brokenIdx: 0, correct: "Die" },
  { words: ["Der", "hund", "bellt."], brokenIdx: 1, correct: "Hund" },
  { words: ["wir", "spielen", "Fußball."], brokenIdx: 0, correct: "Wir" },
  { words: ["Das", "kind", "liest."], brokenIdx: 1, correct: "Kind" },
  { words: ["ein", "Auto", "fährt."], brokenIdx: 0, correct: "Ein" },
  { words: ["Sie", "baum", "ist groß."], brokenIdx: 1, correct: "Baum" },
];

// Round 5: quiz
const CAPITAL_QUIZ: { sentence: string[]; answer: number }[] = [
  { sentence: ["Mein", "bruder", "heißt", "Tim."], answer: 1 },
  { sentence: ["das", "Haus", "ist", "groß."], answer: 0 },
  { sentence: ["Ich", "lese", "ein", "buch."], answer: 3 },
  { sentence: ["der", "Tisch", "steht", "hier."], answer: 0 },
  { sentence: ["Anna", "kauft", "eine", "lampe."], answer: 3 },
  { sentence: ["wir", "spielen", "mit", "dem", "Ball."], answer: 0 },
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

// ─── Round 1: Rules ───────────────────────────────────────────────────────────
function Round1({ color, lbl, lang, onNext }: { color: string; lbl: Record<string, string>; lang?: string; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === RULES.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex flex-col gap-3 w-full">
        {RULES.map((r, i) => {
          const isTapped = tapped.has(i);
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="w-full rounded-2xl p-4 text-left"
              style={{
                background: isTapped ? `${r.color}22` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isTapped ? r.color : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.98 } : {}}>
              <div className="flex items-start gap-3">
                <span className="text-3xl">{r.emoji}</span>
                <div className="flex-1">
                  <p className="font-black text-sm leading-snug" style={{ color: isTapped ? r.color : "white" }}>
                    {lbl[r.key]}
                  </p>
                  {isTapped && (
                    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 mt-1">
                      <p className="text-white/60 text-xs font-bold italic">
                        {lbl[r.key2]}
                      </p>
                      <SpeakButton text={(lbl as any)[r.key2] ?? ""} lang={"de"} size={14} />
                    </motion.div>
                  )}
                </div>
                {isTapped && <span>✅</span>}
              </div>
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 2: Tap the word needing capital ────────────────────────────────────
function Round2({
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
  const [selected, setSelected] = useState<number | null>(null);
  const item = CAPITAL_SETS[idx];

  const handleTap = (wi: number) => {
    if (selected !== null) return;
    setSelected(wi);
    if (wi !== item.nounIdx) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: "", correctAnswer: "", topic: "Capitalization", lang: "de" });
    }
    setTimeout(() => {
      if (idx + 1 >= CAPITAL_SETS.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {CAPITAL_SETS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-wrap gap-2 justify-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          {item.words.map((word, wi) => {
            const isTarget = wi === item.nounIdx;
            const isSel = selected === wi;
            return (
              <motion.button key={wi} onClick={() => handleTap(wi)}
                className="px-3 py-2 rounded-xl font-black text-xl"
                style={{
                  background: isSel ? (isTarget ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)") : "rgba(255,255,255,0.07)",
                  border: `2px solid ${isSel ? (isTarget ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
                  color: isSel ? (isTarget ? "#00FF88" : "#FF2D78") : "white",
                }}
                whileTap={selected === null ? { scale: 0.9 } : {}}>
                {isSel && isTarget ? word.charAt(0).toUpperCase() + word.slice(1) : word}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Round 3: Conjunctions (lowercase) ───────────────────────────────────────
function Round3({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === CONJUNCTIONS.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-wrap gap-3 justify-center w-full">
        {CONJUNCTIONS.map((c, i) => {
          const isTapped = tapped.has(i);
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="rounded-2xl px-6 py-4 flex flex-col items-center gap-1"
              style={{
                background: isTapped ? `${c.color}22` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? c.color : "rgba(255,255,255,0.15)"}`,
                minWidth: 80,
              }}
              whileTap={!isTapped ? { scale: 0.93 } : {}}>
              <span className="text-2xl">{c.emoji}</span>
              <span className="text-2xl font-black" style={{ color: isTapped ? c.color : "white" }}>{c.word}</span>
              {isTapped && <span className="text-sm">✅</span>}
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: Find missing capital ───────────────────────────────────────────
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
  const [selected, setSelected] = useState<number | null>(null);
  const item = BROKEN_SENTENCES[idx];

  const handleTap = (wi: number) => {
    if (selected !== null) return;
    setSelected(wi);
    if (wi !== item.brokenIdx) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: "", correctAnswer: "", topic: "Capitalization", lang: "de" });
    }
    setTimeout(() => {
      if (idx + 1 >= BROKEN_SENTENCES.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {BROKEN_SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-wrap gap-2 justify-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          {item.words.map((word, wi) => {
            const isTarget = wi === item.brokenIdx;
            const isSel = selected === wi;
            const isCorrectSel = isSel && isTarget;
            return (
              <motion.button key={wi} onClick={() => handleTap(wi)}
                className="px-3 py-2 rounded-xl font-black text-xl"
                style={{
                  background: isSel ? (isCorrectSel ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)") : "rgba(255,255,255,0.07)",
                  border: `2px solid ${isSel ? (isCorrectSel ? "#00FF88" : "#FF2D78") : (isTarget ? "#FF2D7844" : "rgba(255,255,255,0.15)")}`,
                  color: isSel ? (isCorrectSel ? "#00FF88" : "#FF2D78") : "white",
                }}
                whileTap={selected === null ? { scale: 0.9 } : {}}>
                {isSel && isCorrectSel ? item.correct : word}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Round 5: Capital quiz ────────────────────────────────────────────────────
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
  const [selected, setSelected] = useState<number | null>(null);
  const item = CAPITAL_QUIZ[idx];

  const handleTap = (wi: number) => {
    if (selected !== null) return;
    setSelected(wi);
    if (wi !== item.answer) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: wi, correctAnswer: item.answer, topic: "Capitalization", lang: "de" });
    }
    setTimeout(() => {
      if (idx + 1 >= CAPITAL_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 mb-1">
        {CAPITAL_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-wrap gap-2 justify-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          {item.sentence.map((word, wi) => {
            const isTarget = wi === item.answer;
            const isSel = selected === wi;
            const isCorrectSel = isSel && isTarget;
            return (
              <motion.button key={wi} onClick={() => handleTap(wi)}
                className="px-3 py-2 rounded-xl font-black text-xl"
                style={{
                  background: isSel ? (isCorrectSel ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)") : "rgba(255,255,255,0.07)",
                  border: `2px solid ${isSel ? (isCorrectSel ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
                  color: isSel ? (isCorrectSel ? "#00FF88" : "#FF2D78") : "white",
                }}
                whileTap={selected === null ? { scale: 0.9 } : {}}>
                {word}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const CapitalizationExplorer = memo(function CapitalizationExplorer({
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
              {round === 0 && <Round1 color={color} lbl={lbl} lang={lang} onNext={next} />}
              {round === 1 && <Round2 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
              {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} />}
              {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
              {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default CapitalizationExplorer;
