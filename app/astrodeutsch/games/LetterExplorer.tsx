"use client";
// LetterExplorer — Island i1: Buchstaben (Letters)
// Teaches: vowels (A E I O U), uppercase/lowercase, alphabet order
// Pure guided discovery — no wrong answers, step-by-step.

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Letter Explorer",
    round1Title: "The Alphabet",
    round1Hint: "Tap each vowel — A E I O U!",
    round1Reveal: "Great! These are vowels!",
    round1Teach: "Letters are the building blocks of words! Some letters like A, E, I, O, U are special — we call them vowels. They make open, singing sounds!",
    vokal: "Vowel",
    konsonant: "Consonant",
    round2Title: "Vowel or Consonant?",
    round2Hint: "Is this letter a vowel or a consonant?",
    round2Teach: "There are only 5 vowels in English: A, E, I, O, U. Every other letter is a consonant. Consonants need vowels to make clear sounds in words!",
    round2Discovery: "💡 Vowels make open sounds: A, E, I, O, U. All other letters are consonants!",
    round3Title: "Big & Small Letters",
    round3Hint: "Tap the matching lowercase letter!",
    round3Teach: "Every letter has two forms: a BIG uppercase letter and a small lowercase letter. They sound the same but look different. We use big letters at the start of sentences!",
    round4Title: "ABC Order",
    round4Hint: "Put the letters in ABC order — tap in order!",
    round4Teach: "The alphabet has a special order: A, B, C, D... This order helps us find words in a dictionary! Let's practice putting letters in the right sequence.",
    round4Reveal: "Correct ABC order!",
    round5Title: "Quick Review",
    round5Hint: "Tap all the vowels!",
    round5Teach: "You've learned so much about letters! Let's test what you know. Remember: vowels are A, E, I, O, U — the singing sounds of the alphabet!",
    retryRound: "Practice Time — Tricky Letters",
    retryHint: "Let's practice these letters again!",
    tipVowels: "💡 Tip: Vowels A E I O U 🔴 are open sounds. Consonants 🔵 are all other letters!",
    yourOrder: "Your order",
    well: "Well done!",
    next: "Next",
    finish: "Finished!",
    tapReveal: "See the answer",
    gotIt: "Got it!",
  },
  hu: {
    title: "Betű felfedező",
    round1Title: "Az ábécé",
    round1Hint: "Koppints minden magánhangzóra — A E I O U!",
    round1Reveal: "Szuper! Ezek a magánhangzók!",
    round1Teach: "A betűk a szavak alapegységei! Néhány betű, mint az A, E, I, O, U különleges — ezeket magánhangzóknak nevezzük. Szabad, éneklő hangok!",
    vokal: "Magánhangzó",
    konsonant: "Mássalhangzó",
    round2Title: "Magánhangzó vagy mássalhangzó?",
    round2Hint: "Ez a betű magánhangzó vagy mássalhangzó?",
    round2Teach: "Csak 5 magánhangzó van: A, E, I, O, U. Az összes többi betű mássalhangzó. A mássalhangzók szükséglesek ahhoz, hogy tiszta hangok keletkezzenek a szavakban!",
    round2Discovery: "💡 A magánhangzók nyílt hangok: A, E, I, O, U. Az összes többi betű mássalhangzó!",
    round3Title: "Nagy és kis betűk",
    round3Hint: "Koppints a megfelelő kisbetűre!",
    round3Teach: "Minden betűnek két alakja van: egy NAGY nagybetű és egy kis kisbetű. Ugyanúgy hangzanak, de másképp néznek ki. Az mondatok elején nagybetűt használunk!",
    round4Title: "ÁBÉ sorrend",
    round4Hint: "Rendezd ábécé sorba — koppints sorban!",
    round4Teach: "Az ábécének egy különleges sorrendje van: A, B, C, D... Ez a sorrend segít, hogy szavakat találjunk a szótárban! Gyakoroljuk a helyes sorrendet!",
    round4Reveal: "Helyes ábécé sorrend!",
    round5Title: "Gyors összefoglalás",
    round5Hint: "Koppints minden magánhangzóra!",
    round5Teach: "Sokat tanultál a betűkről! Tesztelünk, mit tudsz. Emlékezz: a magánhangzók A, E, I, O, U — az ábécé éneklő hangjai!",
    retryRound: "Gyakorlás — Trükkös betűk",
    retryHint: "Gyakoroljuk újra ezeket a betűket!",
    tipVowels: "💡 Tipp: A magánhangzók A E I O U 🔴 nyílt hangok. A mássalhangzók 🔵 az összes többi betű!",
    yourOrder: "Te sorrendod",
    well: "Remek!",
    next: "Tovább",
    finish: "Vége!",
    tapReveal: "Mutasd a választ",
    gotIt: "Értem!",
  },
  de: {
    title: "Buchstaben-Entdecker",
    round1Title: "Das Alphabet",
    round1Hint: "Tippe auf jeden Vokal — A E I O U!",
    round1Reveal: "Super! Das sind Vokale!",
    round1Teach: "Buchstaben sind die Bausteine von Wörtern! Einige Buchstaben wie A, E, I, O, U sind besonders — wir nennen sie Vokale. Sie machen offene, singende Laute!",
    vokal: "Vokal",
    konsonant: "Konsonant",
    round2Title: "Vokal oder Konsonant?",
    round2Hint: "Ist dieser Buchstabe ein Vokal oder Konsonant?",
    round2Teach: "Es gibt nur 5 Vokale: A, E, I, O, U. Alle anderen Buchstaben sind Konsonanten. Konsonanten brauchen Vokale, um klare Laute in Wörtern zu machen!",
    round2Discovery: "💡 Vokale sind offene Laute: A, E, I, O, U. Alle anderen Buchstaben sind Konsonanten!",
    round3Title: "Groß- und Kleinbuchstaben",
    round3Hint: "Tippe auf den passenden Kleinbuchstaben!",
    round3Teach: "Jeder Buchstabe hat zwei Formen: einen GROßBUCHSTABE und einen kleinbuchstabe. Sie klingen gleich, sehen aber anders aus. Am Satzanfang verwenden wir Großbuchstaben!",
    round4Title: "ABC-Reihenfolge",
    round4Hint: "Bringe die Buchstaben in ABC-Reihenfolge — tippe der Reihe nach!",
    round4Teach: "Das Alphabet hat eine bestimmte Reihenfolge: A, B, C, D... Diese Reihenfolge hilft uns, Wörter im Wörterbuch zu finden! Lass uns trainieren, Buchstaben in die richtige Reihenfolge zu bringen.",
    round4Reveal: "Richtige ABC-Reihenfolge!",
    round5Title: "Schnelle Wiederholung",
    round5Hint: "Tippe alle Vokale an!",
    round5Teach: "Du hast viel über Buchstaben gelernt! Lass uns testen, was du weißt. Denk daran: Vokale sind A, E, I, O, U — die singenden Laute des Alphabets!",
    retryRound: "Trainingszeit — Knifflige Buchstaben",
    retryHint: "Lass uns diese Buchstaben üben!",
    tipVowels: "💡 Tipp: Vokale A E I O U 🔴 sind offene Laute. Konsonanten 🔵 sind alle anderen Buchstaben!",
    yourOrder: "Deine Reihenfolge",
    well: "Toll gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    tapReveal: "Antwort zeigen",
    gotIt: "Verstanden!",
  },
  ro: {
    title: "Exploratorul literelor",
    round1Title: "Alfabetul",
    round1Hint: "Atinge fiecare vocală — A E I O U!",
    round1Reveal: "Super! Acestea sunt vocale!",
    round1Teach: "Literele sunt blocurile de construcție ale cuvintelor! Unele litere, cum ar fi A, E, I, O, U, sunt speciale — le numim vocale. Ele fac sunete deschise, cântătoare!",
    vokal: "Vocală",
    konsonant: "Consoană",
    round2Title: "Vocală sau consoană?",
    round2Hint: "Această literă este vocală sau consoană?",
    round2Teach: "Sunt doar 5 vocale: A, E, I, O, U. Toate celelalte litere sunt consoane. Consoanele au nevoie de vocale pentru a face sunete clare în cuvinte!",
    round2Discovery: "💡 Vocalele sunt sunete deschise: A, E, I, O, U. Toate celelalte litere sunt consoane!",
    round3Title: "Litere mari și mici",
    round3Hint: "Atinge litera mică potrivită!",
    round3Teach: "Fiecare literă are două forme: o LITERĂ MARE mare și o literă mică. Sună la fel, dar arată diferit. Folosim litere mari la începutul propoziţiei!",
    round4Title: "Ordinea alfabetului",
    round4Hint: "Pune literele în ordine — atinge în ordine!",
    round4Teach: "Alfabetul are o ordine specială: A, B, C, D... Această ordine ne ajută să găsim cuvintele în dicționar! Să practică punerea literelor în ordinea corectă.",
    round4Reveal: "Ordinea corectă!",
    round5Title: "Recapitulare rapidă",
    round5Hint: "Atinge toate vocalele!",
    round5Teach: "Ai învățat mult despre litere! Hai să testez ce știi. Amintește-ți: vocalele sunt A, E, I, O, U — sunetele cântătoare ale alfabetului!",
    retryRound: "Timp de practică — Litere dificile",
    retryHint: "Hai să practică aceste litere din nou!",
    tipVowels: "💡 Sfat: Vocalele A E I O U 🔴 sunt sunete deschise. Consoanele 🔵 sunt toate celelalte litere!",
    yourOrder: "Ordinea ta",
    well: "Bravo!",
    next: "Înainte",
    finish: "Gata!",
    tapReveal: "Arată răspunsul",
    gotIt: "Am înțeles!",
  },
};

const VOWELS = new Set(["A", "E", "I", "O", "U"]);
const ALPHABET_SAMPLE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const VOKAL_COLOR = "#FF2D78";
const KONS_COLOR = "#00D4FF";

// ─── Content Pools (randomly sampled) ─────────────────────────────────────
const CLASSIFY_POOL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const UPPER_LOWER_POOL: [string, string][] = [
  ["A", "a"], ["B", "b"], ["C", "c"], ["D", "d"], ["E", "e"],
  ["F", "f"], ["G", "g"], ["H", "h"], ["I", "i"], ["J", "j"],
];
const SORT_POOL: string[][] = [
  ["D", "A", "C", "B"],
  ["G", "E", "H", "F"],
  ["K", "I", "L", "J"],
  ["P", "M", "O", "N"],
  ["V", "S", "U", "T"],
  ["Z", "W", "Y", "X"],
];
const REVIEW_POOL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];

// Helper: shuffle array
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Helper: select random items ensuring min vowel count
function selectWithMinVowels(pool: string[], count: number, minVowels: number = 3): string[] {
  const vowels = pool.filter(l => VOWELS.has(l));
  const consonants = pool.filter(l => !VOWELS.has(l));
  const selectedVowels = vowels.slice(0, Math.min(minVowels, vowels.length));
  const remaining = count - selectedVowels.length;
  const selectedConsonants = shuffle(consonants).slice(0, remaining);
  return shuffle([...selectedVowels, ...selectedConsonants]);
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

// ─── Round 1: Tap vowels in alphabet ─────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [showTeach, setShowTeach] = useState(true);
  const [tapped, setTapped] = useState<Set<string>>(new Set());
  const allVowelsTapped = ["A", "E", "I", "O", "U"].every(v => tapped.has(v));

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {showTeach ? (
        <motion.div key="teach" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 w-full">
          <p className="text-xl font-black text-white">{lbl.round1Title}</p>
          <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
            <p className="text-sm text-white/80 leading-relaxed">{lbl.round1Teach}</p>
          </div>
          <motion.button onClick={() => setShowTeach(false)}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
            whileTap={{ scale: 0.97 }}>
            {lbl.gotIt} <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      ) : (
        <motion.div key="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 w-full">
          <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
          <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {ALPHABET_SAMPLE.map(letter => {
              const isVokal = VOWELS.has(letter);
              const isTapped = tapped.has(letter);
              const isCorrectTap = isVokal && isTapped;
              return (
                <motion.button key={letter}
                  onClick={() => { if (isVokal) setTapped(prev => new Set([...prev, letter])); }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-base"
                  style={{
                    background: isCorrectTap ? `${VOKAL_COLOR}33` : "rgba(255,255,255,0.06)",
                    border: `2px solid ${isCorrectTap ? VOKAL_COLOR : "rgba(255,255,255,0.15)"}`,
                    color: isCorrectTap ? VOKAL_COLOR : "rgba(255,255,255,0.7)",
                    boxShadow: isCorrectTap ? `0 0 12px ${VOKAL_COLOR}55` : "none",
                  }}
                  animate={isCorrectTap ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.25 }}>
                  {letter}
                </motion.button>
              );
            })}
          </div>
          {allVowelsTapped && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              className="w-full rounded-2xl px-4 py-3 text-center"
              style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
              <p className="text-[#00FF88] font-black">🎉 {lbl.round1Reveal}</p>
              <p className="text-white/50 text-xs mt-1">A · E · I · O · U</p>
            </motion.div>
          )}
          {allVowelsTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Classify letters ────────────────────────────────────────────────
function Round2({
  color,
  lbl,
  letters,
  wrongCountRef,
  onWrongLetters,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  letters: string[];
  wrongCountRef: React.MutableRefObject<number>;
  onWrongLetters: (letters: string[]) => void;
  onNext: () => void;
}) {
  const [showTeach, setShowTeach] = useState(true);
  const [idx, setIdx] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);

  const letter = letters[idx];
  const isVokal = VOWELS.has(letter);
  const correctType = isVokal ? "vokal" : "konsonant";

  const handleChoice = (type: "vokal" | "konsonant") => {
    if (choice || feedback) return;
    const isCorrect = type === correctType;
    setChoice(type);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: type, correctAnswer: correctType, topic: "Letters", lang: "de" });
      setWrongLetters(prev => {
        const updated = [...prev, letter];
        // If this is the last letter, report wrong letters immediately
        if (idx + 1 >= letters.length) {
          onWrongLetters(updated);
        }
        return updated;
      });
    }

    setTimeout(() => {
      if (idx + 1 >= letters.length) {
        setDone(true);
        // If no errors on last letter, report current wrongLetters
        if (isCorrect) onWrongLetters(wrongLetters);
      } else {
        setIdx(i => i + 1);
        setChoice(null);
        setFeedback(null);
      }
    }, 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-2xl px-4 py-3 text-center"
          style={{ background: "rgba(180,77,255,0.1)", border: "2px solid rgba(180,77,255,0.3)" }}>
          <p className="text-[#B44DFF] font-black text-sm">{lbl.round2Discovery}</p>
        </motion.div>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {showTeach ? (
        <motion.div key="teach" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 w-full">
          <p className="text-xl font-black text-white">{lbl.round2Title}</p>
          <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
            <p className="text-sm text-white/80 leading-relaxed">{lbl.round2Teach}</p>
          </div>
          <motion.button onClick={() => setShowTeach(false)}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
            whileTap={{ scale: 0.97 }}>
            {lbl.gotIt} <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      ) : (
        <motion.div key="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 w-full">
          <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
          <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
          <div className="flex gap-1 mb-1">
            {letters.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full"
                style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={letter} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="w-24 h-24 rounded-3xl flex items-center justify-center text-6xl font-black"
              style={{
                background: feedback
                  ? (feedback === "correct" ? (isVokal ? `${VOKAL_COLOR}22` : `${KONS_COLOR}22`) : "rgba(255,45,120,0.15)")
                  : "rgba(255,255,255,0.06)",
                border: `3px solid ${feedback
                  ? (feedback === "correct" ? (isVokal ? VOKAL_COLOR : KONS_COLOR) : "#FF2D78")
                  : "rgba(255,255,255,0.2)"}`,
                color: feedback
                  ? (feedback === "correct" ? (isVokal ? VOKAL_COLOR : KONS_COLOR) : "#FF2D78")
                  : "white",
              }}>
              {letter}
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center">
            <SpeakButton text={letter} lang="de" size={16} />
          </div>
          <div className="flex gap-3 w-full">
            {(["vokal", "konsonant"] as const).map(type => {
              const selectedThisType = choice === type;
              const isCorrectChoice = type === correctType;
              const shouldShowCorrect = feedback && isCorrectChoice;
              const shouldShowWrong = feedback && selectedThisType && !isCorrectChoice;

              return (
                <motion.button key={type} onClick={() => handleChoice(type)} disabled={!!choice}
                  className="flex-1 py-4 rounded-2xl font-black text-base transition-colors"
                  style={{
                    background: shouldShowCorrect ? `${VOKAL_COLOR}33` : shouldShowWrong ? "rgba(255,45,120,0.25)" : "rgba(255,255,255,0.06)",
                    border: `2px solid ${shouldShowCorrect ? VOKAL_COLOR : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.15)"}`,
                    color: type === "vokal" ? VOKAL_COLOR : KONS_COLOR,
                    cursor: choice ? "default" : "pointer",
                  }}
                  whileTap={!choice ? { scale: 0.95 } : {}}>
                  {type === "vokal" ? `🔴 ${lbl.vokal}` : `🔵 ${lbl.konsonant}`}
                </motion.button>
              );
            })}
          </div>
          {feedback && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="font-black text-lg"
              style={{ color: feedback === "correct" ? (isVokal ? VOKAL_COLOR : KONS_COLOR) : "#FF2D78" }}>
              {letter} = {isVokal ? lbl.vokal : lbl.konsonant} {isVokal ? "🔴" : "🔵"}
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 3: Match uppercase to lowercase ────────────────────────────────────
function Round3({
  color,
  lbl,
  pairs,
  wrongCountRef,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  pairs: [string, string][];
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
}) {
  const [showTeach, setShowTeach] = useState(true);
  const [pairIdx, setPairIdx] = useState(0);
  const [choices] = useState(() =>
    pairs.map(([, lower]) => {
      const wrongOpts = pairs.filter(p => p[1] !== lower).slice(0, 2).map(p => p[1]);
      return shuffle([lower, ...wrongOpts]).slice(0, 3);
    })
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);

  const pair = pairs[pairIdx];
  const correct = pair[1];
  const isCorrect = selected === correct;

  const handleSelect = (lower: string) => {
    if (selected || feedback) return;
    const isCorrectChoice = lower === correct;
    setSelected(lower);
    setFeedback(isCorrectChoice ? "correct" : "wrong");

    if (!isCorrectChoice) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: opt, correctAnswer: item.answer, topic: "Letters", lang: "de" });
    }

    setTimeout(() => {
      if (pairIdx + 1 >= pairs.length) {
        setDone(true);
      } else {
        setPairIdx(i => i + 1);
        setSelected(null);
        setFeedback(null);
      }
    }, 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">✨</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {showTeach ? (
        <motion.div key="teach" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 w-full">
          <p className="text-xl font-black text-white">{lbl.round3Title}</p>
          <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
            <p className="text-sm text-white/80 leading-relaxed">{lbl.round3Teach}</p>
          </div>
          <motion.button onClick={() => setShowTeach(false)}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
            whileTap={{ scale: 0.97 }}>
            {lbl.gotIt} <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      ) : (
        <motion.div key="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 w-full">
          <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
          <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
          <div className="flex gap-1 mb-1">
            {pairs.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full"
                style={{ background: i < pairIdx ? "#00FF88" : i === pairIdx ? color : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={pair[0]} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="w-24 h-24 rounded-3xl flex items-center justify-center text-6xl font-black"
              style={{ background: "rgba(255,255,255,0.06)", border: `3px solid ${color}60`, color }}>
              {pair[0]}
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center">
            <SpeakButton text={pair[0]} lang="de" size={16} />
          </div>
          <div className="flex gap-3 justify-center">
            {choices[pairIdx].map(lower => {
              const selectedThisOne = selected === lower;
              const isCorrectChoice = lower === correct;
              const shouldShowCorrect = feedback && isCorrectChoice;
              const shouldShowWrong = feedback && selectedThisOne && !isCorrectChoice;

              return (
                <motion.button key={lower} onClick={() => handleSelect(lower)} disabled={!!selected}
                  className="w-16 h-16 rounded-2xl font-black text-3xl flex items-center justify-center"
                  style={{
                    background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,45,120,0.2)" : "rgba(255,255,255,0.06)",
                    border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.2)"}`,
                    color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "white",
                    cursor: selected ? "default" : "pointer",
                  }}
                  whileTap={!selected ? { scale: 0.93 } : {}}>
                  {lower}
                </motion.button>
              );
            })}
          </div>
          {feedback && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="font-black text-lg" style={{ color: feedback === "correct" ? "#00FF88" : "#FF2D78" }}>
              {pair[0]} = {correct} {feedback === "correct" ? "✅" : ""}
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 4: Put letters in ABC order ────────────────────────────────────────
function Round4({
  color,
  lbl,
  sets,
  wrongCountRef,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  sets: string[][];
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
}) {
  const [showTeach, setShowTeach] = useState(true);
  const [setIdx, setSetIdx] = useState(0);
  const [tapped, setTapped] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);
  const currentSet = sets[setIdx];
  const sorted = [...currentSet].sort();
  const allTapped = tapped.length === currentSet.length;
  const isCorrect = tapped.join("") === sorted.join("");

  const handleTap = (letter: string) => {
    if (tapped.includes(letter) || revealed) return;
    setTapped(prev => [...prev, letter]);
  };

  const handleReveal = () => {
    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: sorted.join(""), wrongAnswer: tapped.join(""), correctAnswer: sorted.join(""), topic: "Letters", lang: "de" });
    }
    setRevealed(true);
  };

  const handleNext = () => {
    if (setIdx + 1 >= sets.length) {
      setDone(true);
    } else {
      setSetIdx(i => i + 1);
      setTapped([]);
      setRevealed(false);
    }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🏆</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {showTeach ? (
        <motion.div key="teach" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 w-full">
          <p className="text-xl font-black text-white">{lbl.round4Title}</p>
          <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
            <p className="text-sm text-white/80 leading-relaxed">{lbl.round4Teach}</p>
          </div>
          <motion.button onClick={() => setShowTeach(false)}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
            whileTap={{ scale: 0.97 }}>
            {lbl.gotIt} <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      ) : (
        <motion.div key="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 w-full">
          <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
          <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {sets.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < setIdx ? "#00FF88" : i === setIdx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      {/* Tapped sequence */}
      <div className="flex gap-2 h-12 items-center justify-center">
        {Array.from({ length: currentSet.length }, (_, i) => (
          <div key={i} className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-2xl"
            style={{
              background: tapped[i] ? `${color}22` : "rgba(255,255,255,0.04)",
              border: `2px solid ${tapped[i] ? color : "rgba(255,255,255,0.15)"}`,
              color: tapped[i] ? color : "transparent",
            }}>
            {tapped[i] ?? ""}
          </div>
        ))}
      </div>
      {/* Letter buttons */}
      <div className="flex gap-3 justify-center">
        {currentSet.map(letter => (
          <motion.button key={letter}
            onClick={() => handleTap(letter)}
            disabled={tapped.includes(letter) || revealed}
            className="w-14 h-14 rounded-2xl font-black text-3xl flex items-center justify-center"
            style={{
              background: tapped.includes(letter) ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.08)",
              border: `2px solid ${tapped.includes(letter) ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.25)"}`,
              color: tapped.includes(letter) ? "rgba(255,255,255,0.15)" : "white",
              opacity: tapped.includes(letter) ? 0.4 : 1,
              cursor: revealed ? "default" : "pointer",
            }}
            whileTap={!tapped.includes(letter) && !revealed ? { scale: 0.9 } : {}}>
            {letter}
          </motion.button>
        ))}
      </div>
      {allTapped && !revealed && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={handleReveal}
          className="w-full py-3 rounded-2xl font-black text-white text-sm"
          style={{ background: `${color}22`, border: `2px solid ${color}55` }}
          whileTap={{ scale: 0.97 }}>
          {lbl.tapReveal}
        </motion.button>
      )}
      {revealed && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col gap-2 items-center">
          <div className="w-full rounded-2xl px-4 py-3 text-center"
            style={{ background: isCorrect ? "rgba(0,255,136,0.08)" : "rgba(255,45,120,0.08)", border: `2px solid ${isCorrect ? "rgba(0,255,136,0.3)" : "rgba(255,45,120,0.3)"}` }}>
            <p className="font-bold text-sm" style={{ color: isCorrect ? "#00FF88" : "#FF2D78" }}>
              {isCorrect ? "✅" : "❌"} {lbl.round4Reveal}: {sorted.join(" → ")}
            </p>
            {!isCorrect && <p className="text-white/60 text-xs mt-1">{lbl.yourOrder}: {tapped.join(" → ")}</p>}
          </div>
          <NextBtn onClick={handleNext} label={setIdx + 1 >= sets.length ? lbl.finish : lbl.next} color={color} />
        </motion.div>
      )}
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 5: Quick review — tap all vowels ───────────────────────────────────
function Round5({
  color,
  lbl,
  letters,
  wrongLetters,
  wrongCountRef,
  onDone,
}: {
  color: string;
  lbl: Record<string, string>;
  letters: string[];
  wrongLetters: string[];
  wrongCountRef: React.MutableRefObject<number>;
  onDone: () => void;
}) {
  const [phase, setPhase] = useState<"main" | "retry" | "tip" | "done">("main");
  const [tapped, setTapped] = useState<Set<string>>(new Set());
  const [retryIdx, setRetryIdx] = useState(0);
  const [retryChoice, setRetryChoice] = useState<string | null>(null);
  const [retryFeedback, setRetryFeedback] = useState<"correct" | "wrong" | null>(null);
  const vowelsInReview = letters.filter(l => VOWELS.has(l));
  const allVowelsTapped = vowelsInReview.every(v => tapped.has(v));

  const handleDone = () => {
    if (wrongLetters.length > 0) {
      setPhase("retry");
    } else {
      setPhase("done");
    }
  };

  // Retry round: re-classify the wrong letters (vokal/konsonant)
  if (phase === "retry") {
    if (retryIdx >= wrongLetters.length) {
      // Show tip card after retry, then done
      return (
        <div className="flex flex-col items-center gap-4 w-full">
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="w-full rounded-2xl px-4 py-4 text-center"
            style={{ background: "rgba(180,77,255,0.1)", border: "2px solid rgba(180,77,255,0.3)" }}>
            <p className="text-[#B44DFF] font-black text-sm">{lbl.tipVowels}</p>
          </motion.div>
          <NextBtn onClick={() => setPhase("done")} label={lbl.next} color={color} />
        </div>
      );
    }

    const retryLetter = wrongLetters[retryIdx];
    const retryIsVokal = VOWELS.has(retryLetter);
    const retryCorrectType = retryIsVokal ? "vokal" : "konsonant";

    const handleRetryChoice = (type: "vokal" | "konsonant") => {
      if (retryChoice || retryFeedback) return;
      const isCorrect = type === retryCorrectType;
      setRetryChoice(type);
      setRetryFeedback(isCorrect ? "correct" : "wrong");
      setTimeout(() => {
        setRetryIdx(i => i + 1);
        setRetryChoice(null);
        setRetryFeedback(null);
      }, 1000);
    };

    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-2xl font-black text-white">{lbl.retryRound}</p>
        <p className="text-white/60 text-xs font-bold text-center">{lbl.retryHint}</p>
        <div className="flex gap-1 mb-1">
          {wrongLetters.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full"
              style={{ background: i < retryIdx ? "#00FF88" : i === retryIdx ? color : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={retryLetter + retryIdx} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="w-24 h-24 rounded-3xl flex items-center justify-center text-6xl font-black"
            style={{
              background: retryFeedback
                ? (retryFeedback === "correct" ? (retryIsVokal ? `${VOKAL_COLOR}22` : `${KONS_COLOR}22`) : "rgba(255,45,120,0.15)")
                : "rgba(255,255,255,0.06)",
              border: `3px solid ${retryFeedback
                ? (retryFeedback === "correct" ? (retryIsVokal ? VOKAL_COLOR : KONS_COLOR) : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: retryFeedback
                ? (retryFeedback === "correct" ? (retryIsVokal ? VOKAL_COLOR : KONS_COLOR) : "#FF2D78")
                : "white",
            }}>
            {retryLetter}
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center justify-center">
          <SpeakButton text={retryLetter} lang="de" size={16} />
        </div>
        <div className="flex gap-3 w-full">
          {(["vokal", "konsonant"] as const).map(type => {
            const selectedThis = retryChoice === type;
            const isCorrectChoice = type === retryCorrectType;
            const showCorrect = retryFeedback && isCorrectChoice;
            const showWrong = retryFeedback && selectedThis && !isCorrectChoice;
            return (
              <motion.button key={type} onClick={() => handleRetryChoice(type)} disabled={!!retryChoice}
                className="flex-1 py-4 rounded-2xl font-black text-base transition-colors"
                style={{
                  background: showCorrect ? `${VOKAL_COLOR}33` : showWrong ? "rgba(255,45,120,0.25)" : "rgba(255,255,255,0.06)",
                  border: `2px solid ${showCorrect ? VOKAL_COLOR : showWrong ? "#FF2D78" : "rgba(255,255,255,0.15)"}`,
                  color: type === "vokal" ? VOKAL_COLOR : KONS_COLOR,
                  cursor: retryChoice ? "default" : "pointer",
                }}
                whileTap={!retryChoice ? { scale: 0.95 } : {}}>
                {type === "vokal" ? `🔴 ${lbl.vokal}` : `🔵 ${lbl.konsonant}`}
              </motion.button>
            );
          })}
        </div>
        {retryFeedback && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-black text-lg"
            style={{ color: retryFeedback === "correct" ? (retryIsVokal ? VOKAL_COLOR : KONS_COLOR) : "#FF2D78" }}>
            {retryLetter} = {retryIsVokal ? lbl.vokal : lbl.konsonant} {retryIsVokal ? "🔴" : "🔵"}
          </motion.p>
        )}
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🎉</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onDone} label={lbl.finish} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {letters.map((letter, i) => {
          const isV = VOWELS.has(letter);
          const isTapped = tapped.has(letter);
          return (
            <motion.button key={i}
              onClick={() => {
                if (isV) {
                  setTapped(prev => new Set([...prev, letter]));
                } else {
                  wrongCountRef.current++;
                  fireWrongAnswer({ question: "", wrongAnswer: "", correctAnswer: "", topic: "Letters", lang: "de" });
                }
              }}
              className="w-14 h-14 rounded-2xl font-black text-3xl flex items-center justify-center"
              style={{
                background: isTapped ? `${VOKAL_COLOR}33` : "rgba(255,255,255,0.06)",
                border: `2px solid ${isTapped ? VOKAL_COLOR : "rgba(255,255,255,0.15)"}`,
                color: isTapped ? VOKAL_COLOR : "white",
                boxShadow: isTapped ? `0 0 14px ${VOKAL_COLOR}55` : "none",
              }}
              animate={isTapped ? { scale: [1, 1.18, 1] } : {}}
              transition={{ duration: 0.22 }}>
              {letter}
            </motion.button>
          );
        })}
      </div>
      <div className="text-white/50 text-xs font-bold">
        {tapped.size} / {vowelsInReview.length} ✅
      </div>
      {allVowelsTapped && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="w-full flex flex-col gap-3 items-center">
          <div className="w-full rounded-2xl px-4 py-3 text-center"
            style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
            <p className="text-[#00FF88] font-black text-lg">🎉 {lbl.well}</p>
          </div>
          <NextBtn onClick={handleDone} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const LetterExplorer = memo(function LetterExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const TOTAL_ROUNDS = 5;

  // Random content generation
  const [classifyLetters] = useState(() => selectWithMinVowels(CLASSIFY_POOL, 10, 3));
  const [upperLowerPairs] = useState(() => shuffle(UPPER_LOWER_POOL).slice(0, 5));
  const [sortSets] = useState(() => shuffle(SORT_POOL).slice(0, 3));
  const [reviewLetters] = useState(() => selectWithMinVowels(REVIEW_POOL, 8, 3));

  // Error tracking
  const wrongCountRef = useRef(0);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);

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
          {round === 1 && (
            <Round2
              color={color}
              lbl={lbl}
              letters={classifyLetters}
              wrongCountRef={wrongCountRef}
              onWrongLetters={setWrongLetters}
              onNext={next}
            />
          )}
          {round === 2 && (
            <Round3
              color={color}
              lbl={lbl}
              pairs={upperLowerPairs}
              wrongCountRef={wrongCountRef}
              onNext={next}
            />
          )}
          {round === 3 && (
            <Round4
              color={color}
              lbl={lbl}
              sets={sortSets}
              wrongCountRef={wrongCountRef}
              onNext={next}
            />
          )}
          {round === 4 && (
            <Round5
              color={color}
              lbl={lbl}
              letters={reviewLetters}
              wrongLetters={wrongLetters}
              wrongCountRef={wrongCountRef}
              onDone={finish}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default LetterExplorer;
