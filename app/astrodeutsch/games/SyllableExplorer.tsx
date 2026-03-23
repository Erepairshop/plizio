"use client";
// SyllableExplorer — Island i2: Silben (Syllables)
// Teaches: syllable splitting, counting, diphthongs (au/ei/eu), sp/st sounds

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Syllable Explorer",
    round1Title: "Split the Word!",
    round1Hint: "Tap each syllable part to split the word:",
    round1Teach: "Syllables are the parts of words. Every syllable has one vowel sound. If you clap when you say the vowels, you'll hear the syllables! Try: Schmet-ter-ling has 3 claps = 3 syllables.",
    round2Title: "Count the Syllables",
    round2Hint: "How many syllables does this word have? Clap along!",
    round2Teach: "Listen carefully to each word and count how many vowel sounds (claps) you hear. Sometimes one word has 1 clap, sometimes 2, 3, or even 4!",
    round3Title: "Find the Diphthong",
    round3Hint: "Which sound do you hear? au · ei · eu",
    round3Teach: "A diphthong is two vowels together that make ONE special sound. Watch the word carefully and listen: au (like in 'Haus'), ei (like in 'Ei'), eu (like in 'Freund').",
    round4Title: "sp or st?",
    round4Hint: "Which sound does this word start with?",
    round4Teach: "Some pairs of consonants make special sounds at the start of words. 'sp' sounds like 'shp', and 'st' sounds like 'sht'. Listen and watch the beginning of the word!",
    round5Title: "Mixed Practice",
    round5Hint: "How many syllables?",
    round5Teach: "Now you know all about syllables! Let's practice everything you learned. Remember to clap and listen for the vowel sounds in each word.",
    well: "Well done!",
    next: "Next",
    finish: "Finished!",
    syllables: "syllable(s)",
    correct: "Correct!",
    hint: "Count the syllables!",
    discovery: "💡 Every syllable has at least one vowel. Clap your hands to count syllables: Schmet-ter-ling = 3 syllables!",
    gotIt: "Got it!",
  },
  hu: {
    title: "Szótag felfedező",
    round1Title: "Szeld fel a szót!",
    round1Hint: "Koppints minden szótagra hogy felszeld a szót:",
    round1Teach: "A szótagok a szavak részei. Minden szótagnak egy magánhangzó hang van. Ha tapsolsz, amikor a magánhangzókat mondod, meghallod a szótagokat! Próbáld: Schmet-ter-ling 3 taps = 3 szótag.",
    round2Title: "Számold meg a szótagokat",
    round2Hint: "Hány szótag van? Tapsolj!",
    round2Teach: "Figyelmesen hallgass meg minden szót, és számold meg, hány magánhangzó hang (taps) hallható. Néha 1 szótag, néha 2, 3 vagy még több!",
    round3Title: "Találd meg a kettőshangzót",
    round3Hint: "Melyik hangot hallod? au · ei · eu",
    round3Teach: "A kettőshangzó két magánhangzó, ami EGYET speciális hangot csinál. Figyelj a szóra és hallgass: au (mint az 'Haus'), ei (mint az 'Ei'), eu (mint a 'Freund').",
    round4Title: "sp vagy st?",
    round4Hint: "Melyik hanggal kezdődik a szó?",
    round4Teach: "Egyes mássalhangzó párok speciális hangok a szó elején. 'sp' olyan hangzik mint 'shp', és 'st' olyan mint 'sht'. Hallgass és nézd a szó kezdetét!",
    round5Title: "Vegyes feladat",
    round5Hint: "Hány szótag van?",
    round5Teach: "Már tudod mindent a szótagokról! Gyakoroljunk mindennel, amit tanultál. Emlékezz: tapsolj és hallgass a magánhangzók hangjára minden szóban.",
    well: "Remek!",
    next: "Tovább",
    finish: "Vége!",
    syllables: "szótag",
    correct: "Helyes!",
    hint: "Számold a szótagokat!",
    discovery: "💡 Minden szótagnak van legalább egy magánhangzója. Tapsold meg a szótagokat: Schmet-ter-ling = 3 szótag!",
    gotIt: "Értem!",
  },
  de: {
    title: "Silben-Entdecker",
    round1Title: "Trenne das Wort!",
    round1Hint: "Tippe auf jede Silbe, um das Wort zu trennen:",
    round1Teach: "Silben sind die Teile von Wörtern. Jede Silbe hat einen Vokal-Laut. Wenn du klatschst, wenn du die Vokale sprichst, hörst du die Silben! Versuch: Schmet-ter-ling hat 3 Klatscher = 3 Silben.",
    round2Title: "Zähle die Silben",
    round2Hint: "Wie viele Silben hat das Wort? Klatsche mit!",
    round2Teach: "Höre jedes Wort sorgfältig an und zähle, wie viele Vokal-Laute (Klatscher) du hörst. Manchmal 1 Silbe, manchmal 2, 3 oder sogar 4!",
    round3Title: "Finde den Zwielaut",
    round3Hint: "Welchen Laut hörst du? au · ei · eu",
    round3Teach: "Ein Zwielaut ist zwei Vokale zusammen, die EINEN speziellen Laut machen. Schau das Wort an und höre: au (wie in 'Haus'), ei (wie in 'Ei'), eu (wie in 'Freund').",
    round4Title: "sp oder st?",
    round4Hint: "Mit welchem Laut beginnt das Wort?",
    round4Teach: "Manche Konsonanten-Paare machen spezielle Laute am Wortanfang. 'sp' klingt wie 'shp', und 'st' klingt wie 'sht'. Höre und schau auf den Wortanfang!",
    round5Title: "Gemischte Übung",
    round5Hint: "Wie viele Silben?",
    round5Teach: "Jetzt kennst du alles über Silben! Lass uns alles üben, was du gelernt hast. Erinnere dich: Klatsche und höre auf die Vokal-Laute in jedem Wort.",
    well: "Toll gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    syllables: "Silbe(n)",
    correct: "Richtig!",
    hint: "Zähle die Silben!",
    discovery: "💡 Jede Silbe hat mindestens einen Vokal. Klatsche mit, um Silben zu zählen: Schmet-ter-ling = 3 Silben!",
    gotIt: "Verstanden!",
  },
  ro: {
    title: "Exploratorul silabelor",
    round1Title: "Desparte cuvântul!",
    round1Hint: "Atinge fiecare silabă pentru a despărți cuvântul:",
    round1Teach: "Silabele sunt părțile cuvintelor. Fiecare silabă are un sunet de vocală. Dacă bați din palme când spui vocalele, vei auzi silabele! Încearcă: Schmet-ter-ling are 3 bătăi = 3 silabe.",
    round2Title: "Numără silabele",
    round2Hint: "Câte silabe are cuvântul? Bate din palme!",
    round2Teach: "Ascultă atent fiecare cuvânt și numără câte sunete de vocală (bătăi) auzi. Uneori 1 silabă, uneori 2, 3 sau chiar 4!",
    round3Title: "Găsește diftongul",
    round3Hint: "Ce sunet auzi? au · ei · eu",
    round3Teach: "Un difton este două vocale împreună care fac UN sunet special. Privește cuvântul și ascultă: au (ca în 'Haus'), ei (ca în 'Ei'), eu (ca în 'Freund').",
    round4Title: "sp sau st?",
    round4Hint: "Cu ce sunet începe cuvântul?",
    round4Teach: "Unele perechi de consoane fac sunete speciale la începutul cuvintelor. 'sp' sună ca 'shp', și 'st' sună ca 'sht'. Ascultă și privește începutul cuvântului!",
    round5Title: "Exercițiu mixt",
    round5Hint: "Câte silabe?",
    round5Teach: "Acum știi totul despre silabe! Să practică ce ai învățat. Amintește-ți: bate din palme și ascultă sunetele vocale din fiecare cuvânt.",
    well: "Bravo!",
    next: "Înainte",
    finish: "Gata!",
    syllables: "silabă/silabe",
    correct: "Corect!",
    hint: "Numără silabele!",
    discovery: "💡 Fiecare silabă are cel puțin o vocală. Bate din palme ca să numeri silabele: Schmet-ter-ling = 3 silabe!",
    gotIt: "Am înțeles!",
  },
};

// Helper: shuffle array
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Round 1: words split into syllables (doubled pool for variety)
const SPLIT_WORDS_POOL: { word: string; parts: string[] }[] = [
  { word: "Schule", parts: ["Schu", "le"] },
  { word: "Banane", parts: ["Ba", "na", "ne"] },
  { word: "Elefant", parts: ["E", "le", "fant"] },
  { word: "Telefon", parts: ["Te", "le", "fon"] },
  { word: "Nase", parts: ["Na", "se"] },
  { word: "Kirsche", parts: ["Kir", "sche"] },
  { word: "Kamel", parts: ["Ka", "mel"] },
  { word: "Kokosnuss", parts: ["Ko", "kos", "nuss"] },
];

// Round 2: count syllables (doubled pool)
const COUNT_WORDS_POOL: { word: string; count: number }[] = [
  { word: "Haus", count: 1 },
  { word: "Auto", count: 2 },
  { word: "Butter", count: 2 },
  { word: "Schokolade", count: 4 },
  { word: "Katze", count: 2 },
  { word: "Fenster", count: 2 },
  { word: "Computer", count: 3 },
  { word: "Blume", count: 2 },
  { word: "Tisch", count: 1 },
  { word: "Schmetterling", count: 3 },
];

// Round 3: diphthongs (doubled pool)
const DIPHTHONG_WORDS_POOL: { word: string; diphthong: string }[] = [
  { word: "Haus", diphthong: "au" },
  { word: "Ei", diphthong: "ei" },
  { word: "Auto", diphthong: "au" },
  { word: "Freund", diphthong: "eu" },
  { word: "Baum", diphthong: "au" },
  { word: "Leid", diphthong: "ei" },
  { word: "Raus", diphthong: "au" },
  { word: "Neu", diphthong: "eu" },
  { word: "Treu", diphthong: "eu" },
  { word: "Heil", diphthong: "ei" },
];

// Round 4: sp/st anlaut (doubled pool)
const SP_ST_WORDS_POOL: { word: string; start: "sp" | "st" }[] = [
  { word: "Spinne", start: "sp" },
  { word: "Stern", start: "st" },
  { word: "Stuhl", start: "st" },
  { word: "Sport", start: "sp" },
  { word: "Spiel", start: "sp" },
  { word: "Stadt", start: "st" },
  { word: "Spaß", start: "sp" },
  { word: "Stunde", start: "st" },
  { word: "Splitter", start: "sp" },
  { word: "Stein", start: "st" },
  { word: "Spur", start: "sp" },
  { word: "Strom", start: "st" },
];

// Round 5: count syllables mixed (doubled pool)
const MIXED_WORDS_POOL: { word: string; count: number }[] = [
  { word: "Schmetterling", count: 3 },
  { word: "Ball", count: 1 },
  { word: "Vogel", count: 2 },
  { word: "Giraffe", count: 3 },
  { word: "Pflanze", count: 2 },
  { word: "Himmel", count: 2 },
  { word: "Apfel", count: 2 },
  { word: "Wasser", count: 2 },
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

// ─── Round 1: Tap syllable parts to split word ────────────────────────────────
function Round1({ color, lbl, onNext, showTeach, onTeachDone }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; onTeachDone: () => void }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);
  const item = SPLIT_WORDS_POOL[wordIdx];
  const allTapped = tapped.size === item.parts.length;

  const handleTap = (i: number) => {
    if (tapped.has(i)) return;
    setTapped(prev => new Set([...prev, i]));
  };

  const handleNext = () => {
    if (wordIdx + 1 >= SPLIT_WORDS_POOL.length) setDone(true);
    else { setWordIdx(i => i + 1); setTapped(new Set()); }
  };

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

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">✂️</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex gap-1 mb-1">
        {SPLIT_WORDS_POOL.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < wordIdx ? "#00FF88" : i === wordIdx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black text-white tracking-wider">{item.word}</p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 flex-wrap justify-center">
        {item.parts.map((part, i) => (
          <motion.button key={i} onClick={() => handleTap(i)}
            className="px-5 py-3 rounded-2xl font-black text-xl"
            style={{
              background: tapped.has(i) ? `${color}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${tapped.has(i) ? color : "rgba(255,255,255,0.2)"}`,
              color: tapped.has(i) ? color : "white",
              boxShadow: tapped.has(i) ? `0 0 14px ${color}55` : "none",
            }}
            animate={tapped.has(i) ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.2 }}>
            {part}
          </motion.button>
        ))}
      </div>
      {allTapped && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col gap-2 items-center">
          <div className="rounded-2xl px-4 py-2 text-center"
            style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
            <p className="text-[#00FF88] font-black">{item.parts.join(" · ")}</p>
            <p className="text-white/50 text-xs">{item.parts.length} {lbl.syllables}</p>
          </div>
          <NextBtn onClick={handleNext} label={wordIdx + 1 >= SPLIT_WORDS_POOL.length ? lbl.next : lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Count syllables ─────────────────────────────────────────────────
function Round2({
  color,
  lbl,
  wrongCountRef,
  onNext,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);
  const [words] = useState(() => shuffle(COUNT_WORDS_POOL).slice(0, 5));
  const item = words[idx];

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

  const handleSelect = (n: number) => {
    if (selected !== null || feedback) return;
    const isCorrect = n === item.count;
    setSelected(n);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: String(n), correctAnswer: String(item.count), topic: "Syllables", lang: "de" });
    }

    setTimeout(() => {
      if (idx + 1 >= words.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">👏</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  const correct = item.count;
  const opts = [1, 2, 3, 4].filter(n => n !== correct);
  const shuffled = [correct, opts[0], opts[1]].sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {words.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black text-white tracking-wider">{item.word}</p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      {/* Clap visual */}
      <div className="flex gap-2 justify-center">
        {Array.from({ length: correct }, (_, i) => (
          <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{ background: `${color}22`, border: `2px solid ${color}55` }}>
            👏
          </motion.div>
        ))}
      </div>
      <div className="flex gap-3 justify-center">
        {shuffled.map(n => {
          const isSelected = selected === n;
          const isCorrect = n === correct;
          const shouldShowCorrect = feedback && isCorrect;
          const shouldShowWrong = feedback && isSelected && !isCorrect;

          return (
            <motion.button key={n} onClick={() => handleSelect(n)} disabled={!!feedback}
              className="w-16 h-16 rounded-2xl font-black text-3xl flex items-center justify-center"
              style={{
                background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,45,120,0.25)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "white",
                cursor: feedback ? "default" : "pointer",
              }}
              whileTap={!feedback ? { scale: 0.9 } : {}}>
              {n}
            </motion.button>
          );
        })}
      </div>
      {feedback && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-black text-lg"
          style={{ color: feedback === "correct" ? "#00FF88" : "#FF2D78" }}>
          {feedback === "correct" ? `✅ ${correct} ${lbl.syllables}` : `${correct} ${lbl.syllables}`}
        </motion.p>
      )}
    </div>
  );
}

// ─── Round 3: Diphthongs ──────────────────────────────────────────────────────
function Round3({
  color,
  lbl,
  wrongCountRef,
  onNext,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);
  const [words] = useState(() => shuffle(DIPHTHONG_WORDS_POOL).slice(0, 5));
  const item = words[idx];
  const DIPHTHONGS = ["au", "ei", "eu"];

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

  const handleSelect = (d: string) => {
    if (selected || feedback) return;
    const isCorrect = d === item.diphthong;
    setSelected(d);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: d, correctAnswer: item.diphthong, topic: "Syllables", lang: "de" });
    }

    setTimeout(() => {
      if (idx + 1 >= words.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🔤</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  // Highlight the diphthong in the word
  const highlightWord = (word: string, di: string) => {
    const idx2 = word.toLowerCase().indexOf(di);
    if (idx2 === -1) return <span className="text-white">{word}</span>;
    return (
      <>
        <span className="text-white">{word.slice(0, idx2)}</span>
        <span style={{ color }}>{word.slice(idx2, idx2 + di.length)}</span>
        <span className="text-white">{word.slice(idx2 + di.length)}</span>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 mb-1">
        {words.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black tracking-wider">
            {feedback ? highlightWord(item.word, item.diphthong) : <span className="text-white">{item.word}</span>}
          </p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 justify-center">
        {DIPHTHONGS.map(d => {
          const isSelected = selected === d;
          const isCorrect = d === item.diphthong;
          const shouldShowCorrect = feedback && isCorrect;
          const shouldShowWrong = feedback && isSelected && !isCorrect;

          return (
            <motion.button key={d} onClick={() => handleSelect(d)} disabled={!!feedback}
              className="px-6 py-4 rounded-2xl font-black text-2xl"
              style={{
                background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,45,120,0.2)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "white",
                cursor: feedback ? "default" : "pointer",
              }}
              whileTap={!feedback ? { scale: 0.9 } : {}}>
              {d}
            </motion.button>
          );
        })}
      </div>
      {feedback && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-black text-base"
          style={{ color: feedback === "correct" ? "#00FF88" : "#FF2D78" }}>
          {lbl.correct} — „{item.diphthong}" {feedback === "correct" ? "✅" : ""}
        </motion.p>
      )}
    </div>
  );
}

// ─── Round 4: sp / st ─────────────────────────────────────────────────────────
function Round4({
  color,
  lbl,
  wrongCountRef,
  onNext,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);
  const [words] = useState(() => shuffle(SP_ST_WORDS_POOL).slice(0, 6));
  const item = words[idx];

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

  const handleSelect = (s: string) => {
    if (selected || feedback) return;
    const isCorrect = s === item.start;
    setSelected(s);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: s, correctAnswer: item.start, topic: "Syllables", lang: "de" });
    }

    setTimeout(() => {
      if (idx + 1 >= words.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, 1000);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="text-5xl">🌟</div>
        <p className="text-white font-black text-xl">{lbl.well}</p>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {words.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black text-white tracking-wider">{item.word}</p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 w-full">
        {(["sp", "st"] as const).map(s => {
          const isSelected = selected === s;
          const isCorrect = s === item.start;
          const shouldShowCorrect = feedback && isCorrect;
          const shouldShowWrong = feedback && isSelected && !isCorrect;

          return (
            <motion.button key={s} onClick={() => handleSelect(s)} disabled={!!feedback}
              className="flex-1 py-5 rounded-2xl font-black text-3xl"
              style={{
                background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,45,120,0.2)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "white",
                cursor: feedback ? "default" : "pointer",
              }}
              whileTap={!feedback ? { scale: 0.93 } : {}}>
              {s}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 5: Count syllables mixed ───────────────────────────────────────────
function Round5({
  color,
  lbl,
  wrongCountRef,
  onDone,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onDone: () => void;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);
  const [words] = useState(() => shuffle(MIXED_WORDS_POOL).slice(0, 4));
  const item = words[idx];
  const OPTIONS = [1, 2, 3, 4];

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

  const handleSelect = (n: number) => {
    if (selected !== null || feedback) return;
    const isCorrect = n === item.count;
    setSelected(n);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.word, wrongAnswer: String(n), correctAnswer: String(item.count), topic: "Syllables", lang: "de" });
    }

    setTimeout(() => {
      if (idx + 1 >= words.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, 1000);
  };

  if (done) {
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
      <div className="flex gap-1 mb-1">
        {words.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2">
          <p className="text-4xl font-black text-white tracking-wider">{item.word}</p>
          <SpeakButton text={item.word} lang="de" size={16} />
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 flex-wrap justify-center">
        {OPTIONS.map(n => {
          const isSelected = selected === n;
          const isCorrect = n === item.count;
          const shouldShowCorrect = feedback && isCorrect;
          const shouldShowWrong = feedback && isSelected && !isCorrect;

          return (
            <motion.button key={n} onClick={() => handleSelect(n)} disabled={!!feedback}
              className="w-14 h-14 rounded-2xl font-black text-2xl flex items-center justify-center"
              style={{
                background: shouldShowCorrect ? "rgba(0,255,136,0.2)" : shouldShowWrong ? "rgba(255,45,120,0.2)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? "#00FF88" : shouldShowWrong ? "#FF2D78" : "white",
                cursor: feedback ? "default" : "pointer",
              }}
              whileTap={!feedback ? { scale: 0.9 } : {}}>
              {n}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const SyllableExplorer = memo(function SyllableExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const [showTeach, setShowTeach] = useState(true);
  const wrongCountRef = useRef(0);
  const TOTAL_ROUNDS = 5;

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
          {round === 2 && <Round3 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default SyllableExplorer;
