"use client";
// NounExplorer — Island i1: Nomen & Artikel (K2)
// Teaches: noun recognition, der/die/das, plural forms, article+noun matching

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Noun Explorer",
    round1Title: "What is a Noun?",
    round1Hint: "Tap all the nouns — names of people, animals, things or places!",
    round1Teach: "A noun is a word that names something. It can be a person (Lehrer), an animal (Hund), a thing (Ball), or a place (Schule). In German, ALL nouns start with a capital letter — that's the big clue!",
    round2Title: "der · die · das",
    round2Hint: "Which article goes with this noun?",
    round2Teach: "Every German noun has a gender — masculine (der), feminine (die), or neutral (das). The article is the word that comes before the noun and tells us its gender.",
    round2Discovery: "💡 Nouns are naming words for people, places, things, and ideas. In German, ALL nouns are capitalized!",
    round3Title: "Plural Forms",
    round3Hint: "How do we say more than one?",
    round3Teach: "When we have more than one of something, the word changes. We add endings like -e, -n, -er, or the vowel gets an Umlaut (ä, ö, ü). Let's learn how German makes words plural!",
    round4Title: "Article Match",
    round4Hint: "Tap the correct article for each noun!",
    round4Teach: "Now it's time to practice! Remember: masculine nouns use 'der', feminine use 'die', and neutral use 'das'. Think about the gender of each word you see.",
    round5Title: "Noun Challenge",
    round5Hint: "Choose the correct article quickly!",
    round5Teach: "You've learned so much about German nouns! Let's test what you know. Remember the three articles and the gender of each noun.",
    well: "Great job!",
    next: "Next",
    finish: "Finished!",
    noun: "Noun",
    notNoun: "Not a noun",
    correct: "Correct!",
    der: "der (masculine)",
    die: "die (feminine)",
    das: "das (neutral)",
    singular: "Singular",
    plural: "Plural",
    gotIt: "Got it!",
  },
  hu: {
    title: "Főnév felfedező",
    round1Title: "Mi a főnév?",
    round1Hint: "Koppints az összes főnévre — emberek, állatok, dolgok vagy helyek neve!",
    round1Teach: "A főnév egy szó, amely valamit megnevez. Lehet egy ember (Lehrer), egy állat (Hund), egy tárgy (Ball) vagy egy hely (Schule). A német nyelvben MINDEN főnév nagybetűvel kezdődik — ez a nagy jelzés!",
    round2Title: "der · die · das",
    round2Hint: "Melyik névelő illik ehhez a főnévhez?",
    round2Teach: "Minden német főnévnek van neme — hímnem (der), nőnem (die) vagy semleges (das). A névelő a főnév előtt álló szó, amely megmondja a főnév nemét.",
    round2Discovery: "💡 A főnevek megnevezési szavak emberekre, helyekre, dolgokra és gondolatokra. A német nyelvben MINDEN főnév nagybetűvel kezdődik!",
    round3Title: "Többes szám",
    round3Hint: "Hogyan mondjuk, ha több van belőle?",
    round3Teach: "Amikor valamiből több van, a szó megváltozik. Végződéseket adunk hozzá, mint -e, -n, -er, vagy a magánhangzóhoz Umlaut (ä, ö, ü) kerül. Tanulj meg, hogyan készít a német többes szám szavakat!",
    round4Title: "Névelő párosítás",
    round4Hint: "Koppints a helyes névelőre minden főnévnél!",
    round4Teach: "Most már gyakorolhatunk! Emlékezz: hímnem főnevekhez 'der' használunk, nőnemi 'die', semleges 'das'. Gondolj minden szó nemére, amit látsz.",
    round5Title: "Főnév kihívás",
    round5Hint: "Gyorsan válaszd ki a helyes névelőt!",
    round5Teach: "Sokat tanultál a német főnevekről! Tesztelünk, mit tudsz. Emlékezz a három névelőre és mindegyik főnév nemére.",
    well: "Remek munka!",
    next: "Tovább",
    finish: "Vége!",
    noun: "Főnév",
    notNoun: "Nem főnév",
    correct: "Helyes!",
    der: "der (hímnem)",
    die: "die (nőnem)",
    das: "das (semleges)",
    singular: "Egyes szám",
    plural: "Többes szám",
    gotIt: "Értem!",
  },
  de: {
    title: "Nomen-Entdecker",
    round1Title: "Was ist ein Nomen?",
    round1Hint: "Tippe auf alle Nomen — Namen von Personen, Tieren, Dingen oder Orten!",
    round1Teach: "Ein Nomen ist ein Wort, das etwas benennt. Es kann eine Person sein (Lehrer), ein Tier (Hund), ein Ding (Ball) oder ein Ort (Schule). Im Deutschen werden ALLE Nomen großgeschrieben — das ist die große Regel!",
    round2Title: "der · die · das",
    round2Hint: "Welcher Artikel passt zu diesem Nomen?",
    round2Teach: "Jedes deutsche Nomen hat ein Geschlecht — männlich (der), weiblich (die) oder sächlich (das). Der Artikel ist das Wort vor dem Nomen und zeigt uns sein Geschlecht.",
    round2Discovery: "💡 Nomen sind Benennungswörter für Menschen, Orte, Dinge und Ideen. Im Deutschen werden ALLE Nomen großgeschrieben!",
    round3Title: "Mehrzahl",
    round3Hint: "Wie sagt man, wenn es mehrere gibt?",
    round3Teach: "Wenn es von etwas mehrere gibt, ändert sich das Wort. Wir fügen Endungen wie -e, -n, -er hinzu, oder der Vokal bekommt einen Umlaut (ä, ö, ü). Lass uns lernen, wie Deutsch Mehrzahlen macht!",
    round4Title: "Artikel-Zuordnung",
    round4Hint: "Tippe den richtigen Artikel für jedes Nomen an!",
    round4Teach: "Jetzt ist es Zeit zu üben! Erinnere dich: männliche Nomen verwenden 'der', weibliche 'die' und sächliche 'das'. Denk an das Geschlecht jedes Wortes, das du siehst.",
    round5Title: "Nomen-Herausforderung",
    round5Hint: "Wähle schnell den richtigen Artikel!",
    round5Teach: "Du hast viel über deutsche Nomen gelernt! Lass uns testen, was du weißt. Merke die drei Artikel und das Geschlecht jedes Nomens.",
    well: "Super gemacht!",
    next: "Weiter",
    finish: "Fertig!",
    noun: "Nomen",
    notNoun: "Kein Nomen",
    correct: "Richtig!",
    der: "der (männlich)",
    die: "die (weiblich)",
    das: "das (sächlich)",
    singular: "Einzahl",
    plural: "Mehrzahl",
    gotIt: "Verstanden!",
  },
  ro: {
    title: "Exploratorul substantivelor",
    round1Title: "Ce este un substantiv?",
    round1Hint: "Atinge toate substantivele — nume de persoane, animale, lucruri sau locuri!",
    round1Teach: "Un substantiv este un cuvânt care numește ceva. Poate fi o persoană (Lehrer), un animal (Hund), un lucru (Ball) sau un loc (Schule). În limba germană, TOATE substantivele se scriu cu majusculă — asta e marele semn!",
    round2Title: "der · die · das",
    round2Hint: "Care articol se potrivește cu acest substantiv?",
    round2Teach: "Fiecare substantiv german are un gen — masculin (der), feminin (die) sau neutru (das). Articolul este cuvântul care vine înainte de substantiv și ne spune genul acestuia.",
    round2Discovery: "💡 Substantivele sunt cuvinte de denumire pentru oameni, locuri, lucruri și idei. În limba germană, TOATE substantivele se scriu cu majusculă!",
    round3Title: "Forme de plural",
    round3Hint: "Cum spunem când sunt mai multe?",
    round3Teach: "Când avem mai multe din ceva, cuvântul se schimbă. Adăugăm terminații ca -e, -n, -er, sau vocalele primesc Umlaut (ä, ö, ü). Să învățăm cum formează germana pluralele!",
    round4Title: "Potrivire articol",
    round4Hint: "Atinge articolul corect pentru fiecare substantiv!",
    round4Teach: "Acum e timp să practică! Adu aminte: substantivele masculine folosesc 'der', feminine 'die' și neutre 'das'. Gândește-te la genul fiecărui cuvânt pe care îl vezi.",
    round5Title: "Provocare substantive",
    round5Hint: "Alege rapid articolul corect!",
    round5Teach: "Ai învățat mult despre substantivele germane! Hai să testez ce știi. Ține minte cei trei articoli și genul fiecărui substantiv.",
    well: "Foarte bine!",
    next: "Înainte",
    finish: "Gata!",
    noun: "Substantiv",
    notNoun: "Nu e substantiv",
    correct: "Corect!",
    der: "der (masculin)",
    die: "die (feminin)",
    das: "das (neutru)",
    singular: "Singular",
    plural: "Plural",
    gotIt: "Am înțeles!",
  },
};

type Article = "der" | "die" | "das";
const ARTICLE_COLORS: Record<Article, string> = {
  der: "#3B82F6",
  die: "#EC4899",
  das: "#10B981",
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

// Round 1: spot the nouns (expanded pool)
const WORD_LIST_POOL: { word: string; isNoun: boolean; emoji?: string }[] = [
  { word: "Hund", isNoun: true, emoji: "🐕" },
  { word: "laufen", isNoun: false },
  { word: "Schule", isNoun: true, emoji: "🏫" },
  { word: "groß", isNoun: false },
  { word: "Baum", isNoun: true, emoji: "🌳" },
  { word: "spielen", isNoun: false },
  { word: "Kind", isNoun: true, emoji: "👦" },
  { word: "schnell", isNoun: false },
  { word: "Haus", isNoun: true, emoji: "🏠" },
  { word: "schön", isNoun: false },
  { word: "Katze", isNoun: true, emoji: "🐱" },
  { word: "tanzen", isNoun: false },
  { word: "Blume", isNoun: true, emoji: "🌸" },
  { word: "klein", isNoun: false },
  { word: "Ball", isNoun: true, emoji: "⚽" },
  { word: "springen", isNoun: false },
];

// Round 2: article sorting (expanded pool)
const ARTICLE_NOUNS_POOL: { word: string; article: Article; emoji: string }[] = [
  { word: "Hund", article: "der", emoji: "🐕" },
  { word: "Katze", article: "die", emoji: "🐱" },
  { word: "Haus", article: "das", emoji: "🏠" },
  { word: "Schule", article: "die", emoji: "🏫" },
  { word: "Ball", article: "der", emoji: "⚽" },
  { word: "Buch", article: "das", emoji: "📚" },
  { word: "Baum", article: "der", emoji: "🌳" },
  { word: "Blume", article: "die", emoji: "🌸" },
  { word: "Tisch", article: "der", emoji: "🪑" },
  { word: "Uhr", article: "die", emoji: "🕐" },
  { word: "Fenster", article: "das", emoji: "🪟" },
  { word: "Stift", article: "der", emoji: "✏️" },
];

// Round 3: plural forms (expanded pool)
const PLURAL_WORDS_POOL: { singular: string; plural: string; emoji: string; ending: string }[] = [
  { singular: "Hund", plural: "Hunde", emoji: "🐕", ending: "-e" },
  { singular: "Kind", plural: "Kinder", emoji: "👦", ending: "-er" },
  { singular: "Blume", plural: "Blumen", emoji: "🌸", ending: "-n" },
  { singular: "Ball", plural: "Bälle", emoji: "⚽", ending: "-e (Umlaut)" },
  { singular: "Buch", plural: "Bücher", emoji: "📚", ending: "-er (Umlaut)" },
  { singular: "Schule", plural: "Schulen", emoji: "🏫", ending: "-n" },
  { singular: "Katze", plural: "Katzen", emoji: "🐱", ending: "-n" },
  { singular: "Haus", plural: "Häuser", emoji: "🏠", ending: "-er (Umlaut)" },
];

// Round 4 & 5: article quiz (expanded pool)
const ARTICLE_QUIZ_POOL: { word: string; article: Article; emoji: string }[] = [
  { word: "Lehrer", article: "der", emoji: "👨‍🏫" },
  { word: "Tasche", article: "die", emoji: "🎒" },
  { word: "Fenster", article: "das", emoji: "🪟" },
  { word: "Vogel", article: "der", emoji: "🐦" },
  { word: "Maus", article: "die", emoji: "🐭" },
  { word: "Heft", article: "das", emoji: "📓" },
  { word: "Stuhl", article: "der", emoji: "🪑" },
  { word: "Tisch", article: "der", emoji: "🪑" },
  { word: "Tür", article: "die", emoji: "🚪" },
  { word: "Apfel", article: "der", emoji: "🍎" },
  { word: "Orange", article: "die", emoji: "🍊" },
  { word: "Auge", article: "das", emoji: "👁️" },
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

// ─── Round 1: Spot the nouns ──────────────────────────────────────────────────
function Round1({
  color,
  lbl,
  items,
  onNext,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  items: { word: string; isNoun: boolean; emoji?: string }[];
  onNext: () => void;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const nouns = items.filter(w => w.isNoun);
  const allNounsTapped = nouns.every((_, i) => tapped.has(items.indexOf(nouns[i])));

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
        {items.map((item, i) => {
          const isTapped = tapped.has(i);
          const isCorrect = item.isNoun;
          return (
            <motion.button key={i}
              onClick={() => { if (!isTapped) setTapped(prev => new Set([...prev, i])); }}
              className="w-full rounded-2xl p-3 flex items-center gap-2"
              style={{
                background: isTapped ? (isCorrect ? "rgba(0,255,136,0.15)" : "rgba(255,45,120,0.1)") : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? (isCorrect ? "#00FF88" : "rgba(255,45,120,0.3)") : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.95 } : {}}>
              {item.emoji && <span className="text-lg">{item.emoji}</span>}
              <span className="font-black text-base" style={{
                color: isTapped ? (isCorrect ? "#00FF88" : "rgba(255,255,255,0.4)") : "white",
              }}>{item.word}</span>
              {isTapped && isCorrect && <span className="ml-auto text-sm">✅</span>}
            </motion.button>
          );
        })}
      </div>
      {allNounsTapped && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full flex flex-col gap-2">
          <p className="text-center text-white/60 text-xs font-bold">
            {lbl.well} {nouns.length} Nomen!
          </p>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Article sorting ─────────────────────────────────────────────────
function Round2({
  color,
  lbl,
  items,
  wrongCountRef,
  onNext,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  items: { word: string; article: Article; emoji: string }[];
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);
  const item = items[idx];

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

  const handleSelect = (art: Article) => {
    if (selected || feedback) return;
    const isCorrect = art === item.article;
    setSelected(art);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.word, wrongAnswer: art, correctAnswer: item.article, topic: "German Nouns", lang: "de" });
    }

    setTimeout(() => {
      if (idx + 1 >= items.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, isCorrect ? 800 : 1000);
  };

  if (done) return (
    <div className="flex flex-col items-center gap-4 w-full">
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-2xl px-4 py-3 text-center"
        style={{ background: "rgba(180,77,255,0.1)", border: "2px solid rgba(180,77,255,0.3)" }}>
        <p className="text-[#B44DFF] font-black text-sm">{lbl.round2Discovery}</p>
      </motion.div>
      <NextBtn onClick={onNext} label={lbl.next} color={color} />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-1">
          <span className="text-5xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-white">{item.word}</span>
            <SpeakButton text={`${item.article} ${item.word}`} lang="de" size={16} />
          </div>
          {feedback && (
            <span className="text-xl font-bold" style={{ color: feedback === "correct" ? ARTICLE_COLORS[item.article] : "#FF2D78" }}>
              {feedback === "correct" ? "✅" : "❌"} {item.article} {item.word}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {(["der", "die", "das"] as Article[]).map(art => {
          const isSelected = selected === art;
          const isCorrectChoice = art === item.article;
          const shouldShowCorrect = feedback && isCorrectChoice;
          const shouldShowWrong = feedback && isSelected && !isCorrectChoice;

          return (
            <motion.button key={art} onClick={() => handleSelect(art)} disabled={!!feedback}
              className="flex-1 py-4 rounded-2xl font-black text-xl transition-colors"
              style={{
                background: shouldShowCorrect ? `${ARTICLE_COLORS[art]}33` : shouldShowWrong ? "rgba(255,45,120,0.25)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? ARTICLE_COLORS[art] : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? ARTICLE_COLORS[art] : shouldShowWrong ? "#FF2D78" : "white",
                cursor: feedback ? "default" : "pointer",
              }}
              whileTap={!feedback ? { scale: 0.93 } : {}}>
              {art}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 3: Plural forms ────────────────────────────────────────────────────
function Round3({
  color,
  lbl,
  items,
  onNext,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  items: { singular: string; plural: string; emoji: string; ending: string }[];
  onNext: () => void;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);
  const item = items[idx];

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

  const handleNext = () => {
    if (idx + 1 >= items.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 mb-1">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <motion.div key={item.singular}
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
        <span className="text-5xl">{item.emoji}</span>
        <div className="flex gap-6 w-full justify-center">
          <div className="text-center">
            <p className="text-white/50 text-xs font-bold mb-1">{lbl.singular}</p>
            <p className="text-2xl font-black text-white">{item.singular}</p>
          </div>
          <div className="text-center">
            <p className="text-white/50 text-xs font-bold mb-1">{lbl.plural}</p>
            <motion.p
              className="text-2xl font-black"
              style={{ color: tapped ? color : "rgba(255,255,255,0.2)" }}
              animate={{ scale: tapped ? [1, 1.15, 1] : 1 }}>
              {tapped ? item.plural : "?"}
            </motion.p>
          </div>
        </div>
        {!tapped && (
          <motion.button onClick={() => setTapped(true)}
            className="mt-1 px-6 py-2.5 rounded-xl font-black text-sm"
            style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
            whileTap={{ scale: 0.95 }}>
            {lbl.next} →
          </motion.button>
        )}
        {tapped && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/50 text-xs font-bold">
            Endung: <span style={{ color }}>{item.ending}</span>
          </motion.div>
        )}
      </motion.div>
      {tapped && <NextBtn onClick={handleNext} label={idx + 1 >= items.length ? lbl.next : lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: Article quiz (4 nouns, tap correct article) ─────────────────────
function Round4({
  color,
  lbl,
  items,
  wrongCountRef,
  onNext,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  items: { word: string; article: Article; emoji: string }[];
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const item = items[idx];

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

  const handleSelect = (art: Article) => {
    if (selected || feedback) return;
    const isCorrect = art === item.article;
    setSelected(art);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.word, wrongAnswer: art, correctAnswer: item.article, topic: "German Nouns", lang: "de" });
    }

    setTimeout(() => {
      if (idx + 1 >= items.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, isCorrect ? 800 : 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-2">
          <span className="text-6xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-white">{item.word}</span>
            <SpeakButton text={item.word} lang="de" size={16} />
          </div>
          {feedback && (
            <span className="font-bold text-xl" style={{ color: feedback === "correct" ? ARTICLE_COLORS[item.article] : "#FF2D78" }}>
              {feedback === "correct" ? "✅" : "❌"} {item.article} {item.word}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {(["der", "die", "das"] as Article[]).map(art => {
          const isSelected = selected === art;
          const isCorrectChoice = art === item.article;
          const shouldShowCorrect = feedback && isCorrectChoice;
          const shouldShowWrong = feedback && isSelected && !isCorrectChoice;

          return (
            <motion.button key={art} onClick={() => handleSelect(art)} disabled={!!feedback}
              className="flex-1 py-4 rounded-2xl font-black text-xl transition-colors"
              style={{
                background: shouldShowCorrect ? `${ARTICLE_COLORS[art]}33` : shouldShowWrong ? "rgba(255,45,120,0.25)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? ARTICLE_COLORS[art] : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? ARTICLE_COLORS[art] : shouldShowWrong ? "#FF2D78" : "white",
                cursor: feedback ? "default" : "pointer",
              }}
              whileTap={!feedback ? { scale: 0.93 } : {}}>
              {art}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Round 5: Mixed article quiz ──────────────────────────────────────────────
function Round5({
  color,
  lbl,
  items,
  wrongCountRef,
  onDone,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  items: { word: string; article: Article; emoji: string }[];
  wrongCountRef: React.MutableRefObject<number>;
  onDone: () => void;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const item = items[idx];

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

  const handleSelect = (art: Article) => {
    if (selected || feedback) return;
    const isCorrect = art === item.article;
    setSelected(art);
    setFeedback(isCorrect ? "correct" : "wrong");

    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: item.word, wrongAnswer: art, correctAnswer: item.article, topic: "German Nouns", lang: "de" });
    }

    setTimeout(() => {
      if (idx + 1 >= items.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); setFeedback(null); }
    }, isCorrect ? 800 : 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 mb-1">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.word} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-2">
          <span className="text-6xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-white">{item.word}</span>
            <SpeakButton text={item.word} lang="de" size={16} />
          </div>
          {feedback && (
            <span className="font-bold text-xl" style={{ color: feedback === "correct" ? ARTICLE_COLORS[item.article] : "#FF2D78" }}>
              {feedback === "correct" ? "✅" : "❌"} {item.article} {item.word}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 w-full">
        {(["der", "die", "das"] as Article[]).map(art => {
          const isSelected = selected === art;
          const isCorrectChoice = art === item.article;
          const shouldShowCorrect = feedback && isCorrectChoice;
          const shouldShowWrong = feedback && isSelected && !isCorrectChoice;

          return (
            <motion.button key={art} onClick={() => handleSelect(art)} disabled={!!feedback}
              className="flex-1 py-4 rounded-2xl font-black text-xl transition-colors"
              style={{
                background: shouldShowCorrect ? `${ARTICLE_COLORS[art]}33` : shouldShowWrong ? "rgba(255,45,120,0.25)" : "rgba(255,255,255,0.06)",
                border: `2px solid ${shouldShowCorrect ? ARTICLE_COLORS[art] : shouldShowWrong ? "#FF2D78" : "rgba(255,255,255,0.2)"}`,
                color: shouldShowCorrect ? ARTICLE_COLORS[art] : shouldShowWrong ? "#FF2D78" : "white",
                cursor: feedback ? "default" : "pointer",
              }}
              whileTap={!feedback ? { scale: 0.93 } : {}}>
              {art}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const NounExplorer = memo(function NounExplorer({
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

  // Random content generation
  const [wordListItems] = useState(() => shuffle(WORD_LIST_POOL).slice(0, 10));
  const [articleItems] = useState(() => shuffle(ARTICLE_NOUNS_POOL).slice(0, 6));
  const [pluralItems] = useState(() => shuffle(PLURAL_WORDS_POOL).slice(0, 5));
  const [round4Items] = useState(() => shuffle(ARTICLE_QUIZ_POOL).slice(0, 3));
  const [round5Items] = useState(() => shuffle(ARTICLE_QUIZ_POOL).slice(3, 6));

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
          {round === 0 && <Round1 color={color} lbl={lbl} items={wordListItems} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 1 && <Round2 color={color} lbl={lbl} items={articleItems} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 2 && <Round3 color={color} lbl={lbl} items={pluralItems} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 3 && <Round4 color={color} lbl={lbl} items={round4Items} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 4 && <Round5 color={color} lbl={lbl} items={round5Items} wrongCountRef={wrongCountRef} onDone={finish} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default NounExplorer;
