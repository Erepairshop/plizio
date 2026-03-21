"use client";
// SpellingRuleExplorer — Island i6: Rechtschreibung I (K2)
// Teaches: tz vs z rule, ck vs k rule, double vowels (aa/ee/oo)

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Spelling Rules Explorer",
    round1Title: "tz or z?",
    round1Hint: "Short vowel before → tz! Tap each word to learn the rule.",
    round2Title: "ck or k?",
    round2Hint: "Short vowel before → ck! Tap to learn.",
    round3Title: "Long vowels: aa, ee, oo",
    round3Hint: "These words have a long vowel written with two letters! Tap each one.",
    round4Title: "Choose the right spelling!",
    round4Hint: "Which spelling is correct?",
    round5Title: "Spelling Challenge",
    round5Hint: "Pick the correct form!",
    well: "Superb!",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    wrong: "Not quite!",
    shortVowel: "Short vowel",
    longVowel: "Long vowel",
    ruleZ: "After a long vowel or consonant → z",
    ruleTZ: "After a short vowel → tz",
    ruleK: "After a long vowel or consonant → k",
    ruleCK: "After a short vowel → ck",
    discovery: "💡 German spelling rules help you write correctly! After short vowels, use ck/tz. After long vowels, use k/z. Listen to the vowel length!",
  },
  hu: {
    title: "Helyesírási szabályok felfedezője",
    round1Title: "tz vagy z?",
    round1Hint: "Rövid magánhangzó előtt → tz! Koppints minden szóra, hogy megtanuld a szabályt.",
    round2Title: "ck vagy k?",
    round2Hint: "Rövid magánhangzó előtt → ck! Koppints, hogy tanuld.",
    round3Title: "Hosszú magánhangzók: aa, ee, oo",
    round3Hint: "Ezekben a szavakban a hosszú magánhangzót két betűvel írjuk! Koppints mindegyikre.",
    round4Title: "Válassz helyes írásmódot!",
    round4Hint: "Melyik helyesírás helyes?",
    round5Title: "Helyesírási kihívás",
    round5Hint: "Válaszd a helyes alakot!",
    well: "Kiváló!",
    next: "Tovább",
    finish: "Vége!",
    correct: "Helyes!",
    wrong: "Nem quite!",
    shortVowel: "Rövid magánhangzó",
    longVowel: "Hosszú magánhangzó",
    ruleZ: "Hosszú magánhangzó vagy mássalhangzó után → z",
    ruleTZ: "Rövid magánhangzó után → tz",
    ruleK: "Hosszú magánhangzó vagy mássalhangzó után → k",
    ruleCK: "Rövid magánhangzó után → ck",
    discovery: "💡 A német helyesírási szabályok segítenek helyesen írni! Rövid magánhangzó után ck/tz-t használj. Hosszú magánhangzó után k/z-t. Hallgasd meg a magánhangzó hosszát!",
  },
  de: {
    title: "Rechtschreibregeln-Entdecker",
    round1Title: "tz oder z?",
    round1Hint: "Kurzer Vokal davor → tz! Tippe auf jedes Wort um die Regel zu lernen.",
    round2Title: "ck oder k?",
    round2Hint: "Kurzer Vokal davor → ck! Tippe zum Lernen.",
    round3Title: "Lange Vokale: aa, ee, oo",
    round3Hint: "Diese Wörter haben einen langen Vokal der mit zwei Buchstaben geschrieben wird! Tippe auf jedes.",
    round4Title: "Wähle die richtige Schreibweise!",
    round4Hint: "Welche Schreibweise ist richtig?",
    round5Title: "Rechtschreib-Herausforderung",
    round5Hint: "Wähle die richtige Form!",
    well: "Hervorragend!",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    wrong: "Nicht ganz!",
    shortVowel: "Kurzer Vokal",
    longVowel: "Langer Vokal",
    ruleZ: "Nach langem Vokal oder Konsonant → z",
    ruleTZ: "Nach kurzem Vokal → tz",
    ruleK: "Nach langem Vokal oder Konsonant → k",
    ruleCK: "Nach kurzem Vokal → ck",
    discovery: "💡 Deutsche Rechtschreibregeln helfen dir, richtig zu schreiben! Nach kurzen Vokalen: ck/tz. Nach langen Vokalen: k/z. Höre auf die Vokallänge!",
  },
  ro: {
    title: "Exploratorul regulilor de ortografie",
    round1Title: "tz sau z?",
    round1Hint: "Vocală scurtă înainte → tz! Atinge fiecare cuvânt pentru a învăța regula.",
    round2Title: "ck sau k?",
    round2Hint: "Vocală scurtă înainte → ck! Atinge pentru a învăța.",
    round3Title: "Vocale lungi: aa, ee, oo",
    round3Hint: "Aceste cuvinte au o vocală lungă scrisă cu două litere! Atinge fiecare.",
    round4Title: "Alege ortografia corectă!",
    round4Hint: "Care ortografie este corectă?",
    round5Title: "Provocare ortografie",
    round5Hint: "Alege forma corectă!",
    well: "Superb!",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    wrong: "Nu chiar!",
    shortVowel: "Vocală scurtă",
    longVowel: "Vocală lungă",
    ruleZ: "După vocală lungă sau consoană → z",
    ruleTZ: "După vocală scurtă → tz",
    ruleK: "După vocală lungă sau consoană → k",
    ruleCK: "După vocală scurtă → ck",
    discovery: "💡 Regulile de ortografie germană te ajută să scrii corect! După vocale scurte: ck/tz. După vocale lungi: k/z. Ascultă lungimea vocalei!",
  },
};

// Round 1: tz vs z words
const TZ_WORDS: { word: string; rule: "tz" | "z"; emoji: string; vowelBefore: string }[] = [
  { word: "Katze", rule: "tz", emoji: "🐱", vowelBefore: "a (kurz)" },
  { word: "Mütze", rule: "tz", emoji: "🎩", vowelBefore: "ü (kurz)" },
  { word: "Platz", rule: "tz", emoji: "🏞️", vowelBefore: "a (kurz)" },
  { word: "Zahl", rule: "z", emoji: "🔢", vowelBefore: "— (Satzanfang)" },
  { word: "Zeit", rule: "z", emoji: "⏰", vowelBefore: "— (Satzanfang)" },
  { word: "Netz", rule: "tz", emoji: "🥅", vowelBefore: "e (kurz)" },
];

// Round 2: ck vs k words
const CK_WORDS: { word: string; rule: "ck" | "k"; emoji: string }[] = [
  { word: "backen", rule: "ck", emoji: "🍞" },
  { word: "Rücken", rule: "ck", emoji: "🔙" },
  { word: "Kuh", rule: "k", emoji: "🐄" },
  { word: "Brücke", rule: "ck", emoji: "🌉" },
  { word: "Baum", rule: "k", emoji: "🌳" },
  { word: "Socke", rule: "ck", emoji: "🧦" },
];

// Round 3: aa/ee/oo words
const DOUBLE_VOWEL_WORDS: { word: string; vowelPair: string; emoji: string; meaning: Record<string, string> }[] = [
  { word: "Waage", vowelPair: "aa", emoji: "⚖️", meaning: { de: "Waage (scales)", en: "scale", hu: "mérleg", ro: "cântar" } },
  { word: "See", vowelPair: "ee", emoji: "🌊", meaning: { de: "See (lake/sea)", en: "lake/sea", hu: "tenger/tó", ro: "mare/lac" } },
  { word: "Zoo", vowelPair: "oo", emoji: "🦁", meaning: { de: "Zoo", en: "zoo", hu: "állatkert", ro: "grădina zoologică" } },
  { word: "Tee", vowelPair: "ee", emoji: "🫖", meaning: { de: "Tee (tea)", en: "tea", hu: "tea", ro: "ceai" } },
  { word: "Haar", vowelPair: "aa", emoji: "💇", meaning: { de: "Haar (hair)", en: "hair", hu: "haj", ro: "păr" } },
];

// Round 4: spelling choice
const SPELLING_CHOICES_POOL: { stem: string; optA: string; optB: string; answer: string; emoji: string }[] = [
  { stem: "Ka", optA: "tze", optB: "ze", answer: "Katze", emoji: "🐱" },
  { stem: "ba", optA: "cken", optB: "ken", answer: "backen", emoji: "🍞" },
  { stem: "Bri", optA: "cke", optB: "ke", answer: "Brücke", emoji: "🌉" },
  { stem: "Mu", optA: "tze", optB: "ze", answer: "Mütze", emoji: "🎩" },
  { stem: "Pla", optA: "tz", optB: "z", answer: "Platz", emoji: "🏞️" },
  { stem: "Ne", optA: "tz", optB: "z", answer: "Netz", emoji: "🥅" },
];

// Round 5: quiz
const SPELLING_QUIZ_POOL: { options: string[]; answer: string; emoji: string }[] = [
  { options: ["Netz", "Nez"], answer: "Netz", emoji: "🥅" },
  { options: ["Socke", "Soke"], answer: "Socke", emoji: "🧦" },
  { options: ["Tee", "Te"], answer: "Tee", emoji: "🫖" },
  { options: ["Katze", "Katse"], answer: "Katze", emoji: "🐱" },
  { options: ["Mütze", "Mütse"], answer: "Mütze", emoji: "🎩" },
  { options: ["backen", "bacen"], answer: "backen", emoji: "🍞" },
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

// ─── Round 1: tz vs z ────────────────────────────────────────────────────────
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === TZ_WORDS.length;
  const tzColor = "#EC4899";
  const zColor = "#3B82F6";

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      {/* Rule summary */}
      <div className="w-full grid grid-cols-2 gap-2">
        <div className="rounded-xl p-2 text-center" style={{ background: `${tzColor}22`, border: `2px solid ${tzColor}55` }}>
          <p className="text-xs font-black" style={{ color: tzColor }}>→ tz</p>
          <p className="text-white/60 text-[10px] font-bold">{lbl.ruleTZ}</p>
        </div>
        <div className="rounded-xl p-2 text-center" style={{ background: `${zColor}22`, border: `2px solid ${zColor}55` }}>
          <p className="text-xs font-black" style={{ color: zColor }}>→ z</p>
          <p className="text-white/60 text-[10px] font-bold">{lbl.ruleZ}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full">
        {TZ_WORDS.map((item, i) => {
          const isTapped = tapped.has(i);
          const col = item.rule === "tz" ? tzColor : zColor;
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="rounded-2xl p-3 flex flex-col items-center gap-1"
              style={{
                background: isTapped ? `${col}22` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? col : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.95 } : {}}>
              <span className="text-2xl">{item.emoji}</span>
              <div className="flex items-center gap-1">
                <span className="font-black text-base text-white">{item.word}</span>
                {isTapped && <SpeakButton text={item.word} lang="de" size={12} />}
              </div>
              {isTapped && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-xs font-black px-2 py-0.5 rounded-full"
                  style={{ background: `${col}33`, color: col }}>
                  {item.rule}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 2: ck vs k ────────────────────────────────────────────────────────
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === CK_WORDS.length;
  const ckColor = "#10B981";
  const kColor = "#F59E0B";

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="w-full grid grid-cols-2 gap-2">
        <div className="rounded-xl p-2 text-center" style={{ background: `${ckColor}22`, border: `2px solid ${ckColor}55` }}>
          <p className="text-xs font-black" style={{ color: ckColor }}>→ ck</p>
          <p className="text-white/60 text-[10px] font-bold">{lbl.ruleCK}</p>
        </div>
        <div className="rounded-xl p-2 text-center" style={{ background: `${kColor}22`, border: `2px solid ${kColor}55` }}>
          <p className="text-xs font-black" style={{ color: kColor }}>→ k</p>
          <p className="text-white/60 text-[10px] font-bold">{lbl.ruleK}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full">
        {CK_WORDS.map((item, i) => {
          const isTapped = tapped.has(i);
          const col = item.rule === "ck" ? ckColor : kColor;
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="rounded-2xl p-3 flex flex-col items-center gap-1"
              style={{
                background: isTapped ? `${col}22` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? col : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.95 } : {}}>
              <span className="text-2xl">{item.emoji}</span>
              <div className="flex items-center gap-1">
                <span className="font-black text-base text-white">{item.word}</span>
                {isTapped && <SpeakButton text={item.word} lang="de" size={12} />}
              </div>
              {isTapped && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-xs font-black px-2 py-0.5 rounded-full"
                  style={{ background: `${col}33`, color: col }}>
                  {item.rule}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 3: Double vowels ───────────────────────────────────────────────────
function Round3({ lang, color, lbl, onNext }: { lang: string; color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const allTapped = tapped.size === DOUBLE_VOWEL_WORDS.length;
  const vowelColor = "#A855F7";

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex flex-col gap-2 w-full">
        {DOUBLE_VOWEL_WORDS.map((item, i) => {
          const isTapped = tapped.has(i);
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="w-full rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{
                background: isTapped ? `${vowelColor}22` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? vowelColor : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.97 } : {}}>
              <span className="text-3xl">{item.emoji}</span>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  {/* Highlight the double vowel */}
                  <span className="font-black text-xl text-white">
                    {item.word.split(item.vowelPair).map((part, pi, arr) => (
                      <span key={pi}>
                        {part}
                        {pi < arr.length - 1 && (
                          <span style={{ color: isTapped ? vowelColor : "rgba(255,255,255,0.4)" }}>
                            {item.vowelPair}
                          </span>
                        )}
                      </span>
                    ))}
                  </span>
                  {isTapped && <SpeakButton text={item.word} lang="de" size={14} />}
                </div>
                {isTapped && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-xs font-bold text-white/60">
                    {item.meaning[lang] ?? item.meaning.de}
                  </motion.p>
                )}
              </div>
              {isTapped && (
                <span className="text-sm font-black px-2 py-1 rounded-lg"
                  style={{ background: `${vowelColor}33`, color: vowelColor }}>
                  {item.vowelPair}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: Spelling choice ─────────────────────────────────────────────────
function Round4({ color, lbl, wrongCountRef, onNext }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [choices] = useState(() => shuffle(SPELLING_CHOICES_POOL).slice(0, 4));
  const item = choices[idx];

  const handleSelect = (opt: string) => {
    if (selected) return;
    const full = item.stem + opt;
    setSelected(full);
    const isCorrect = full === item.answer;
    if (!isCorrect) wrongCountRef.current++;
    setTimeout(() => {
      if (idx + 1 >= choices.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, isCorrect ? 800 : 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {choices.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-2">
          <span className="text-5xl">{item.emoji}</span>
          <div className="text-3xl font-black">
            <span className="text-white/60">{item.stem}</span>
            <span style={{ color: selected ? (selected === item.answer ? "#00FF88" : "#FF2D78") : color }}>
              {selected ? selected.slice(item.stem.length) : "___"}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 w-full">
        {[item.optA, item.optB].map(opt => {
          const full = item.stem + opt;
          const isSel = selected === full;
          const isCorrect = full === item.answer;
          return (
            <motion.button key={opt} onClick={() => handleSelect(opt)}
              className="flex-1 py-4 rounded-2xl font-black text-xl"
              style={{
                background: isSel ? (isCorrect ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)") : "rgba(255,255,255,0.06)",
                border: `2px solid ${isSel ? (isCorrect ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.2)"}`,
                color: isSel ? (isCorrect ? "#00FF88" : "#FF2D78") : color,
              }}
              whileTap={!selected ? { scale: 0.93 } : {}}>
              -{opt}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 5: Spelling quiz ───────────────────────────────────────────────────
function Round5({ color, lbl, wrongCountRef, onDone }: { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [quiz] = useState(() => shuffle(SPELLING_QUIZ_POOL).slice(0, 3));
  const item = quiz[idx];

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    const isCorrect = opt === item.answer;
    if (!isCorrect) wrongCountRef.current++;
    setTimeout(() => {
      if (idx + 1 >= quiz.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, isCorrect ? 800 : 1000);
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
      <span className="text-5xl">{item.emoji}</span>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="w-full py-4 rounded-2xl font-black text-xl"
            style={{
              background: selected === opt
                ? (opt === item.answer ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt
                ? (opt === item.answer ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.answer ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const SpellingRuleExplorer = memo(function SpellingRuleExplorer({
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
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} />}
          {round === 2 && <Round3 lang={lang} color={color} lbl={lbl} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default SpellingRuleExplorer;
