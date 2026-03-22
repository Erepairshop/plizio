"use client";
// AdjectiveExplorer — Island i3: Adjektive & Pronomen (K2)
// Teaches: adjective recognition, opposites, personal pronouns er/sie/es

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Adjective Explorer",
    round1Title: "Find the Adjective!",
    round1Hint: "Tap all the describing words (adjectives)!",
    round1Teach: "An adjective is a word that describes something. Words like groß (big), klein (small), schnell (fast), and blau (blue) are adjectives. They tell us MORE about nouns — what they look like or how they act!",
    round2Title: "Opposites!",
    round2Hint: "Tap the pair of opposite adjectives!",
    round2Teach: "Many adjectives have opposites. Big is opposite to small (groß ↔ klein). Fast is opposite to slow (schnell ↔ langsam). Hot is opposite to cold (heiß ↔ kalt). Let's learn these pairs!",
    round3Title: "Personal Pronouns",
    round3Hint: "Tap each pronoun to learn it!",
    round3Teach: "Pronouns are words that replace nouns. Instead of saying 'the dog' every time, we say 'it' (es). Or instead of 'Anna', we say 'she' (sie). There are different pronouns for different people!",
    round4Title: "er, sie or es?",
    round4Hint: "Which pronoun replaces this noun?",
    round4Teach: "Each German noun has a gender, so it uses the right pronoun. A dog (der Hund) = er. A cat (die Katze) = sie. A child (das Kind) = es. Match the pronoun to the noun's gender!",
    round5Title: "Adjective Challenge",
    round5Hint: "Choose the correct opposite!",
    round5Teach: "You've learned adjectives and their opposites! Let's practice finding the correct opposite for each word. Remember: they describe things and show what they're like!",
    well: "Wonderful!",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    tapToLearn: "Tap to learn!",
    replaces: "replaces",
    discovery: "💡 Adjectives describe nouns: groß, klein, schnell, langsam. They can go before a noun (der große Hund) or after a verb (der Hund ist groß).",
    gotIt: "Got it!",
  },
  hu: {
    title: "Melléknév felfedező",
    round1Title: "Keresd a melléknevet!",
    round1Hint: "Koppints az összes leíró szóra (melléknévre)!",
    round1Teach: "A melléknév egy szó, amely valamit leír. Az olyan szavak, mint a groß (nagy), klein (kicsi), schnell (gyors) és blau (kék) melléknevek. Többet mondanak nekünk a főnevekről — hogyan néznek ki vagy hogyan viselkednek!",
    round2Title: "Ellentétek!",
    round2Hint: "Koppints az ellentétes melléknevekre!",
    round2Teach: "Sok melléknévnek van ellentétje. A nagy az ellentéke a kicsinek (groß ↔ klein). A gyors az ellentéke a lassúnak (schnell ↔ langsam). A meleg az ellentéke a hidegnek (heiß ↔ kalt). Tanuljunk meg ezeket a párokat!",
    round3Title: "Személyes névmások",
    round3Hint: "Koppints minden névmásra, hogy megtanuld!",
    round3Teach: "A névmások olyan szavak, amelyek helyettesítik a főneveket. Ahelyett, hogy azt mondjuk, 'a kutya' minden alkalommal, azt mondjuk, 'az' (es). Vagy ahelyett, hogy 'Anna', azt mondjuk, 'ő' (sie). Különböző névmások vannak a különböző emberekhez!",
    round4Title: "er, sie vagy es?",
    round4Hint: "Melyik névmás helyettesíti ezt a főnevet?",
    round4Teach: "Minden német főnévnek van neme, ezért a helyes névmást használja. Egy kutya (der Hund) = er. Egy macska (die Katze) = sie. Egy gyerek (das Kind) = es. Párosítsd a névmást a főnév nemével!",
    round5Title: "Melléknév kihívás",
    round5Hint: "Válaszd ki a helyes ellentétet!",
    round5Teach: "Megtanultad a mellékneveket és azok ellentéteit! Gyakoroljunk, hogy megtaláljuk az egyes szavak helyes ellentétét. Emlékezz: a főneveket írják le és mutatják meg, milyek!",
    well: "Csodálatos!",
    next: "Tovább",
    finish: "Vége!",
    correct: "Helyes!",
    tapToLearn: "Koppints, hogy tanuld!",
    replaces: "helyettesíti",
    discovery: "💡 A melléknevek főneveket írnak le: groß, klein, schnell, langsam. Mehetnek főnév elé (der große Hund) vagy ige után (der Hund ist groß).",
    gotIt: "Értem!",
  },
  de: {
    title: "Adjektiv-Entdecker",
    round1Title: "Finde das Adjektiv!",
    round1Hint: "Tippe auf alle Eigenschaftswörter (Adjektive)!",
    round1Teach: "Ein Adjektiv ist ein Wort, das etwas beschreibt. Wörter wie groß, klein, schnell und blau sind Adjektive. Sie sagen uns MEHR über Nomen — wie sie aussehen oder wie sie handeln!",
    round2Title: "Gegensätze!",
    round2Hint: "Tippe auf das Gegensatz-Paar!",
    round2Teach: "Viele Adjektive haben Gegensätze. Groß ist das Gegenteil von Klein (groß ↔ klein). Schnell ist das Gegenteil von Langsam (schnell ↔ langsam). Heiß ist das Gegenteil von Kalt (heiß ↔ kalt). Lass uns diese Paare lernen!",
    round3Title: "Personalpronomen",
    round3Hint: "Tippe auf jedes Pronomen um es zu lernen!",
    round3Teach: "Pronomen sind Wörter, die Nomen ersetzen. Anstatt jedes Mal 'der Hund' zu sagen, sagen wir 'es' (es). Oder anstatt 'Anna' sagen wir 'sie' (sie). Es gibt verschiedene Pronomen für verschiedene Menschen!",
    round4Title: "er, sie oder es?",
    round4Hint: "Welches Pronomen ersetzt dieses Nomen?",
    round4Teach: "Jedes deutsche Nomen hat ein Geschlecht, also verwendet das richtige Pronomen. Ein Hund (der Hund) = er. Eine Katze (die Katze) = sie. Ein Kind (das Kind) = es. Passe das Pronomen zum Geschlecht des Nomens an!",
    round5Title: "Adjektiv-Herausforderung",
    round5Hint: "Wähle den richtigen Gegensatz!",
    round5Teach: "Du hast Adjektive und ihre Gegensätze gelernt! Lass uns üben, das richtige Gegenteil für jedes Wort zu finden. Erinnere dich: Sie beschreiben Dinge und zeigen, wie sie sind!",
    well: "Wunderbar!",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    tapToLearn: "Tippe zum Lernen!",
    replaces: "ersetzt",
    discovery: "💡 Adjektive beschreiben Nomen: groß, klein, schnell, langsam. Sie können vor einem Nomen stehen (der große Hund) oder nach einem Verb (der Hund ist groß).",
    gotIt: "Verstanden!",
  },
  ro: {
    title: "Exploratorul adjectivelor",
    round1Title: "Găsește adjectivul!",
    round1Hint: "Atinge toate cuvintele descriptive (adjective)!",
    round1Teach: "Un adjectiv este un cuvânt care descrie ceva. Cuvinte ca groß (mare), klein (mic), schnell (rapid) și blau (albastru) sunt adjective. Ne spun MAI MULT despre substantive — cum arată sau cum se comportă!",
    round2Title: "Contrarii!",
    round2Hint: "Atinge perechea de adjective contrare!",
    round2Teach: "Multe adjective au contrarii. Mare este opusul micului (groß ↔ klein). Rapid este opusul lentului (schnell ↔ langsam). Fierbinte este opusul rece (heiß ↔ kalt). Hai să învățăm aceste perechi!",
    round3Title: "Pronume personale",
    round3Hint: "Atinge fiecare pronume pentru a-l învăța!",
    round3Teach: "Pronumele sunt cuvinte care înlocuiesc substantivele. În loc să spunem 'câinele' de fiecare dată, spunem 'el' (es). Sau în loc să spunem 'Anna', spunem 'ea' (sie). Sunt pronume diferite pentru oameni diferiți!",
    round4Title: "er, sie sau es?",
    round4Hint: "Care pronume înlocuiește acest substantiv?",
    round4Teach: "Fiecare substantiv german are un gen, deci folosește pronumele potrivit. Un câine (der Hund) = er. O pisică (die Katze) = sie. Un copil (das Kind) = es. Potrivește pronumele cu genul substantivului!",
    round5Title: "Provocare adjective",
    round5Hint: "Alege contrariul corect!",
    round5Teach: "Ai învățat adjective și contrarii lor! Hai să practică găsirea contrarielor corecte pentru fiecare cuvânt. Ține minte: ele descriu lucruri și arată cum sunt!",
    well: "Minunat!",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    tapToLearn: "Atinge pentru a învăța!",
    replaces: "înlocuiește",
    discovery: "💡 Adjectivele descriu substantivele: groß, klein, schnell, langsam. Pot sta înainte unui substantiv (der große Hund) sau după un verb (der Hund ist groß).",
    gotIt: "Am înțeles!",
  },
};

// Round 1: spot adjectives
const MIXED_WORDS_POOL: { word: string; isAdj: boolean; emoji?: string }[] = [
  { word: "groß", isAdj: true },
  { word: "Hund", isAdj: false, emoji: "🐕" },
  { word: "schnell", isAdj: true },
  { word: "spielen", isAdj: false },
  { word: "blau", isAdj: true },
  { word: "Schule", isAdj: false, emoji: "🏫" },
  { word: "warm", isAdj: true },
  { word: "laufen", isAdj: false },
  { word: "klein", isAdj: true },
  { word: "Baum", isAdj: false, emoji: "🌳" },
  { word: "rot", isAdj: true },
  { word: "Stuhl", isAdj: false, emoji: "🪑" },
  { word: "alt", isAdj: true },
  { word: "Licht", isAdj: false, emoji: "💡" },
  { word: "dünn", isAdj: true },
];

// Round 2: opposites
const OPPOSITE_PAIRS_POOL: { a: string; b: string; emojiA: string; emojiB: string }[] = [
  { a: "groß", b: "klein", emojiA: "🦒", emojiB: "🐭" },
  { a: "heiß", b: "kalt", emojiA: "🔥", emojiB: "🧊" },
  { a: "schnell", b: "langsam", emojiA: "🐆", emojiB: "🐢" },
  { a: "hell", b: "dunkel", emojiA: "☀️", emojiB: "🌑" },
  { a: "jung", b: "alt", emojiA: "🧒", emojiB: "👴" },
  { a: "sauber", b: "schmutzig", emojiA: "✨", emojiB: "🤎" },
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

// Round 3: personal pronouns
const PRONOUNS: { pronoun: string; meaning: Record<string, string>; emoji: string; color: string }[] = [
  { pronoun: "ich", meaning: { de: "ich (I — über mich selbst)", en: "I (about myself)", hu: "én", ro: "eu" }, emoji: "👤", color: "#3B82F6" },
  { pronoun: "du", meaning: { de: "du (you — jemanden ansprechen)", en: "you (talking to someone)", hu: "te", ro: "tu" }, emoji: "👉", color: "#EC4899" },
  { pronoun: "er", meaning: { de: "er (he — ein Mann / Junge)", en: "he (a man/boy)", hu: "ő (hím)", ro: "el" }, emoji: "👦", color: "#10B981" },
  { pronoun: "sie", meaning: { de: "sie (she — eine Frau / ein Mädchen)", en: "she (a woman/girl)", hu: "ő (nő)", ro: "ea" }, emoji: "👧", color: "#F59E0B" },
  { pronoun: "es", meaning: { de: "es (it — ein sächliches Nomen)", en: "it (a neutral noun)", hu: "az (semleges)", ro: "el/ea (neutru)" }, emoji: "📦", color: "#A855F7" },
  { pronoun: "wir", meaning: { de: "wir (we — mehrere Personen)", en: "we (multiple people)", hu: "mi", ro: "noi" }, emoji: "👥", color: "#14B8A6" },
];

// Round 4: pronoun replacement
const PRONOUN_SUBS: { noun: string; article: string; pronoun: string; emoji: string }[] = [
  { noun: "Hund", article: "der", pronoun: "er", emoji: "🐕" },
  { noun: "Katze", article: "die", pronoun: "sie", emoji: "🐱" },
  { noun: "Kind", article: "das", pronoun: "es", emoji: "👦" },
  { noun: "Lehrer", article: "der", pronoun: "er", emoji: "👨‍🏫" },
  { noun: "Blume", article: "die", pronoun: "sie", emoji: "🌸" },
];

// Round 5: opposites quiz
const OPPOSITE_QUIZ_POOL: { word: string; options: string[]; answer: string }[] = [
  { word: "alt", options: ["jung", "groß", "schnell"], answer: "jung" },
  { word: "nass", options: ["warm", "trocken", "klein"], answer: "trocken" },
  { word: "laut", options: ["leise", "hell", "kalt"], answer: "leise" },
  { word: "süß", options: ["sauer", "bitter", "salzhaltig"], answer: "sauer" },
  { word: "traurig", options: ["happy", "froh", "lustig"], answer: "lustig" },
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

// ─── Round 1: Find adjectives ─────────────────────────────────────────────────
function Round1({ color, lbl, onNext, showTeach, onTeachDone }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; onTeachDone: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const adjCount = MIXED_WORDS_POOL.filter(w => w.isAdj).length;
  const tappedAdjCount = [...tapped].filter(i => MIXED_WORDS_POOL[i].isAdj).length;
  const allAdjTapped = tappedAdjCount === adjCount;

  if (showTeach) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round1Teach}</p>
        </div>
        <motion.button onClick={onTeachDone}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {MIXED_WORDS_POOL.map((item, i) => {
          const isTapped = tapped.has(i);
          const isAdj = item.isAdj;
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="w-full rounded-2xl p-3 flex items-center gap-2"
              style={{
                background: isTapped ? (isAdj ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.04)") : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? (isAdj ? "#00FF88" : "rgba(255,255,255,0.1)") : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.95 } : {}}>
              {item.emoji && <span className="text-lg">{item.emoji}</span>}
              <span className="font-black text-base" style={{
                color: isTapped ? (isAdj ? "#00FF88" : "rgba(255,255,255,0.35)") : "white",
              }}>{item.word}</span>
              {isTapped && isAdj && <span className="ml-auto text-sm">✅</span>}
            </motion.button>
          );
        })}
      </div>
      {allAdjTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 2: Opposites pairs ─────────────────────────────────────────────────
function Round2({ color, lbl, wrongCountRef, onNext, showTeach, onTeachDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onNext: () => void; showTeach: boolean; onTeachDone: () => void }) {
  const [pairs] = useState(() => shuffle(OPPOSITE_PAIRS_POOL).slice(0, 4));
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [feedback, setFeedback] = useState<"correct" | null>(null);
  const pair = pairs[idx];
  const bothTapped = tapped.has(0) && tapped.has(1);

  if (showTeach) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round2Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round2Teach}</p>
        </div>
        <motion.button onClick={onTeachDone}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    );
  }

  const handleTap = (i: number) => {
    if (feedback) return;
    if (!tapped.has(i)) {
      const newTapped = new Set([...tapped, i]);
      setTapped(newTapped);
      if (newTapped.size === 2) {
        setFeedback("correct");
      }
    }
  };

  const handleNext = () => {
    if (idx + 1 >= pairs.length) onNext();
    else { setIdx(i => i + 1); setTapped(new Set()); setFeedback(null); }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {OPPOSITE_PAIRS_POOL.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex gap-4 w-full">
          {[{ word: pair.a, emoji: pair.emojiA }, { word: pair.b, emoji: pair.emojiB }].map((item, i) => {
            const isTapped = tapped.has(i);
            return (
              <motion.button key={i}
                onClick={() => handleTap(i)}
                className="flex-1 rounded-2xl p-4 flex flex-col items-center gap-2"
                style={{
                  background: isTapped ? `${color}22` : "rgba(255,255,255,0.05)",
                  border: `2px solid ${isTapped ? color : "rgba(255,255,255,0.15)"}`,
                }}
                whileTap={!tapped.has(i) && !feedback ? { scale: 0.93 } : {}}>
                <span className="text-4xl">{item.emoji}</span>
                <span className="text-xl font-black" style={{ color: isTapped ? color : "white" }}>
                  {item.word}
                </span>
                {isTapped && <SpeakButton text={item.word} lang="de" size={14} />}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
      {bothTapped && feedback && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="w-full flex flex-col items-center gap-3">
          <div className="w-full text-center">
            <span className="text-lg font-black" style={{ color }}>{pair.a}</span>
            <span className="text-white/50"> ↔ </span>
            <span className="text-lg font-black" style={{ color }}>{pair.b}</span>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="text-2xl font-black text-[#00FF88]">✅ {lbl.correct}</motion.div>
          <NextBtn onClick={handleNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 3: Personal pronouns display ──────────────────────────────────────
function Round3({ lang, color, lbl, onNext, showTeach, onTeachDone }: { lang: string; color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; onTeachDone: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === PRONOUNS.length;

  if (showTeach) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round3Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round3Teach}</p>
        </div>
        <motion.button onClick={onTeachDone}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {PRONOUNS.map((p, i) => {
          const isTapped = tapped.has(i);
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="rounded-2xl p-3 flex items-center gap-2"
              style={{
                background: isTapped ? `${p.color}22` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? p.color : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.95 } : {}}>
              <span className="text-2xl">{p.emoji}</span>
              <div className="flex-1 text-left">
                <p className="font-black text-lg" style={{ color: p.color }}>{p.pronoun}</p>
                {isTapped && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-[10px] font-bold text-white/60 leading-tight">
                    {p.meaning[lang] ?? p.meaning.de}
                  </motion.p>
                )}
              </div>
              {isTapped && <SpeakButton text={p.pronoun} lang="de" size={12} />}
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: er/sie/es replacement ──────────────────────────────────────────
function Round4({ color, lbl, wrongCountRef, onNext, showTeach, onTeachDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onNext: () => void; showTeach: boolean; onTeachDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const item = PRONOUN_SUBS[idx];
  const pronColors: Record<string, string> = { er: "#10B981", sie: "#F59E0B", es: "#A855F7" };

  if (showTeach) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round4Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round4Teach}</p>
        </div>
        <motion.button onClick={onTeachDone}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    );
  }

  const handleSelect = (p: string) => {
    if (selected || feedback) return;
    setSelected(p);
    const isCorrect = p === item.pronoun;
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
    }

    setTimeout(() => {
      if (idx + 1 >= PRONOUN_SUBS.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {PRONOUN_SUBS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.noun} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-2">
          <span className="text-5xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-white/60">{item.article}</span>
            <span className="text-3xl font-black text-white">{item.noun}</span>
            <SpeakButton text={`${item.article} ${item.noun}`} lang="de" size={16} />
          </div>
          <p className="text-white/40 text-xs font-bold">→ {lbl.replaces}:</p>
          {selected && (
            <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="text-4xl font-black"
              style={{ color: pronColors[item.pronoun] ?? color }}>
              {item.pronoun} {selected === item.pronoun ? "✅" : ""}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 w-full">
        {["er", "sie", "es"].map(p => {
          let bgColor = "rgba(255,255,255,0.06)";
          let borderColor = "rgba(255,255,255,0.2)";
          let textColor = "white";

          if (feedback && selected === p) {
            if (p === item.pronoun) {
              bgColor = `${pronColors[p]}33`;
              borderColor = pronColors[p];
              textColor = pronColors[p];
            } else {
              bgColor = "rgba(255,45,120,0.15)";
              borderColor = "#FF2D78";
              textColor = "#FF2D78";
            }
          } else if (feedback && p === item.pronoun && selected !== p) {
            bgColor = `${pronColors[p]}33`;
            borderColor = pronColors[p];
            textColor = pronColors[p];
          }

          return (
            <motion.button key={p} onClick={() => handleSelect(p)}
              className="flex-1 py-4 rounded-2xl font-black text-2xl"
              style={{
                background: bgColor,
                border: `2px solid ${borderColor}`,
                color: textColor,
              }}
              whileTap={!selected && !feedback ? { scale: 0.93 } : {}}>
              {p}
              {feedback && selected === p && p === item.pronoun && " ✅"}
              {feedback && selected === p && p !== item.pronoun && " ❌"}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 5: Opposites quiz ──────────────────────────────────────────────────
function Round5({ color, lbl, wrongCountRef, onDone, showTeach, onTeachDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void; showTeach: boolean; onTeachDone: () => void }) {
  const [quiz] = useState(() => shuffle(OPPOSITE_QUIZ_POOL).slice(0, 3));
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const item = quiz[idx];
  const isCorrect = selected === item.answer;

  if (showTeach) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round5Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round5Teach}</p>
        </div>
        <motion.button onClick={onTeachDone}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    );
  }

  const handleSelect = (opt: string) => {
    if (selected || feedback) return;
    setSelected(opt);
    const isCorrectChoice = opt === item.answer;
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
      <div className="flex gap-1 mb-1">
        {quiz.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-white/60 text-sm font-bold mb-1">Gegenteil von:</p>
          <p className="text-3xl font-black text-white">{item.word}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => {
          let bgColor = "rgba(255,255,255,0.06)";
          let borderColor = "rgba(255,255,255,0.2)";
          let textColor = "white";

          if (feedback && selected === opt) {
            if (opt === item.answer) {
              bgColor = "rgba(0,255,136,0.2)";
              borderColor = "#00FF88";
              textColor = "#00FF88";
            } else {
              bgColor = "rgba(255,45,120,0.15)";
              borderColor = "#FF2D78";
              textColor = "#FF2D78";
            }
          } else if (feedback && opt === item.answer && selected !== opt) {
            bgColor = "rgba(0,255,136,0.2)";
            borderColor = "#00FF88";
            textColor = "#00FF88";
          }

          return (
            <motion.button key={opt} onClick={() => handleSelect(opt)}
              className="w-full py-3.5 rounded-2xl font-black text-lg"
              style={{
                background: bgColor,
                border: `2px solid ${borderColor}`,
                color: textColor,
              }}
              whileTap={!selected && !feedback ? { scale: 0.97 } : {}}>
              {opt}
              {feedback && selected === opt && opt === item.answer && " ✅"}
              {feedback && selected === opt && opt !== item.answer && " ❌"}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const AdjectiveExplorer = memo(function AdjectiveExplorer({
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

  // Error tracking
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
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 1 && <Round2 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 2 && <Round3 lang={lang} color={color} lbl={lbl} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default AdjectiveExplorer;
