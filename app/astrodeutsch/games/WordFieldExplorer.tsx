"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Wortfelder",
    round1Title: "Wörter sortieren",
    round1Teach: "Ein Wortfeld ist eine Gruppe von Wörtern, die zusammenhängen! Sie sprechen über ähnliche Themen oder Konzepte. Zum Beispiel gehören 'Katze', 'Hund', 'Vogel', 'Fisch' alle zum Wortfeld 'Tiere'. Und 'Apfel', 'Brot', 'Milch', 'Käse' gehören zum Wortfeld 'Essen'. Lass uns Wörter nach ihrem Wortfeld sortieren!",
    round1: "Sortiere die Wörter in die richtige Gruppe!",
    round2Title: "Körperteile entdecken",
    round2Teach: "Ein Wortfeld kann auch sehr spezifisch sein! Das Wortfeld 'Körper' enthält alle Teile des menschlichen Körpers: Kopf, Auge, Nase, Mund, Ohr, Hand, Fuß, Arm. Wenn du ein neues Wort siehst, frag dich: Passt es in dieses Wortfeld?",
    round2: "Welches Wort gehört dazu?",
    round3Title: "Der Eindringling",
    round3Teach: "Manchmal gibt es ein Wort, das NICHT in ein Wortfeld passt! Zum Beispiel: 'Hund', 'Katze', 'Tisch', 'Vogel' — welches passt nicht? 'Tisch' ist kein Tier! Diese Übung hilft dir, die Unterschiede zwischen Wortfeldern zu verstehen!",
    round3: "Welches Wort passt in diese Gruppe?",
    round4Title: "Welches Wort gehört dazu?",
    round4Teach: "Jetzt spielen wir ein Spiel: Ich nenne dir ein Wortfeld, und du wählst ein Wort aus, das DAZUGEHÖRT! Denk daran, was alle Wörter in einem Wortfeld gemeinsam haben. Sie sind alle verwandt!",
    round4: "Welches Wort passt NICHT?",
    round5Title: "Großes Wortfeld-Quiz!",
    round5Teach: "Du kennst Wortfelder jetzt! Lass mich verschiedene Wortfelder durchmischen und du wählst aus. Denk immer: Welche Wörter gehören zusammen? Was haben sie gemeinsam?",
    round5: "Kleines Wortfeld-Quiz!",
    correct: "Super! ✓",
    next: "Weiter →",
    gotIt: "Verstanden!",
    done: "Fertig! 🌟",
    tap: "Tippe auf ein Wort, um es zuzuordnen!",
    belongs: "gehört zu",
    doesntBelong: "passt nicht",
    school: "Schule",
    animals: "Tiere",
    family: "Familie",
    food: "Essen",
    body: "Körper",
    question: "Welches Wort gehört zur Gruppe",
    oddOut: "Welches Wort passt NICHT in die Gruppe?",
    discovery: "💡 Ein Wortfeld (Wortfeld) gruppiert zusammenhängende Wörter. Zum Beispiel gehört zum Wortfeld 'glücklich': froh, fröhlich, erfreut, vergnügt!",
  },
  en: {
    title: "Word Fields",
    round1Title: "Sort words",
    round1Teach: "A word field is a group of words that are related! They talk about similar topics or concepts. For example, 'cat', 'dog', 'bird', 'fish' all belong to the word field 'animals'. And 'apple', 'bread', 'milk', 'cheese' all belong to the word field 'food'. Let's sort words by their word field!",
    round1: "Sort the words into the right group!",
    round2Title: "Discover body parts",
    round2Teach: "A word field can also be very specific! The word field 'body' contains all parts of the human body: head, eye, nose, mouth, ear, hand, foot, arm. When you see a new word, ask yourself: Does it fit in this word field?",
    round2: "Which word belongs here?",
    round3Title: "The odd one out",
    round3Teach: "Sometimes there is a word that does NOT fit in a word field! For example: 'dog', 'cat', 'table', 'bird' — which one doesn't belong? 'Table' is not an animal! This exercise helps you understand the differences between word fields!",
    round3: "Which word fits in this group?",
    round4Title: "Which word belongs?",
    round4Teach: "Now we play a game: I tell you a word field, and you pick a word that BELONGS to it! Remember what all the words in a word field have in common. They're all related!",
    round4: "Which word does NOT fit?",
    round5Title: "Big word field quiz!",
    round5Teach: "You know word fields now! Let me mix different word fields and you choose. Always think: Which words belong together? What do they have in common?",
    round5: "Word field quiz!",
    correct: "Great! ✓",
    next: "Next →",
    gotIt: "Got it!",
    done: "Done! 🌟",
    tap: "Tap a word to assign it!",
    belongs: "belongs to",
    doesntBelong: "doesn't belong",
    school: "School",
    animals: "Animals",
    family: "Family",
    food: "Food",
    body: "Body",
    question: "Which word belongs to the group",
    oddOut: "Which word does NOT fit the group?",
    discovery: "💡 A word field (Wortfeld) groups related words together. For example, the word field 'happy' includes: glad, cheerful, delighted, joyful!",
  },
  hu: {
    title: "Szócsoportok",
    round1Title: "Szavak rendezése",
    round1Teach: "A szócsoport szavaknak egy csoportja, amelyek összefüggenek! Hasonló témákról vagy fogalmakról beszélnek. Például a 'kutya', 'macska', 'madár', 'hal' mind az 'állatok' szócsoportjához tartoznak. És az 'alma', 'kenyér', 'tej', 'sajt' mind az 'étel' szócsoportjához tartoznak. Rendezzük a szavakat a szócsoportok szerint!",
    round1: "Rendezd a szavakat a megfelelő csoportba!",
    round2Title: "Testmények felfedezése",
    round2Teach: "A szócsoport nagyon specifikus is lehet! A 'test' szócsoport az emberi test összes részét tartalmazza: fej, szem, orr, száj, fül, kéz, láb, kar. Amikor új szót látsz, kérd meg magadtól: Passzolódik-e ez a szócsoportba?",
    round2: "Melyik szó tartozik ide?",
    round3Title: "A kimaradó",
    round3Teach: "Néha van egy szó, amely NEM illik egy szócsoportba! Például: 'kutya', 'macska', 'asztal', 'madár' — melyik nem passzol? Az 'asztal' nem állat! Ez a gyakorlat segít megérteni a szócsoportok közötti különbségeket!",
    round3: "Melyik szó illik ebbe a csoportba?",
    round4Title: "Melyik szó tartozik?",
    round4Teach: "Most játszunk: Elmondom a szócsoportot, és te olyan szót választasz, amely HOZZÁTARTOZIK! Emlékezz arra, hogy a szócsoport összes szavának mi közös. Mind összefüggő!",
    round4: "Melyik szó NEM illik ide?",
    round5Title: "Nagy szócsoport kvíz!",
    round5Teach: "Most már tudod a szócsoportokról! Keverjük össze a különböző szócsoportokat és te választasz. Mindig gondolkodjunk: Mely szavak tartoznak össze? Mit közösen?",
    round5: "Szócsoport kvíz!",
    correct: "Szuper! ✓",
    next: "Tovább →",
    gotIt: "Értem!",
    done: "Kész! 🌟",
    tap: "Koppints egy szóra a hozzárendeléshez!",
    belongs: "ide tartozik",
    doesntBelong: "nem illik",
    school: "Iskola",
    animals: "Állatok",
    family: "Család",
    food: "Étel",
    body: "Test",
    question: "Melyik szó tartozik a csoportba",
    oddOut: "Melyik szó NEM illik a csoportba?",
    discovery: "💡 Egy szócsoport (Wortfeld) kapcsolódó szavakat csoportosít. Például az 'boldog' szócsoportjában: vidám, jókedvű, derűs, elégedett!",
  },
  ro: {
    title: "Câmpuri lexicale",
    round1Title: "Sortare cuvinte",
    round1Teach: "Un câmp lexical este un grup de cuvinte care sunt înrudite! Vorbesc despre subiecte sau concepte similare. De exemplu, 'câine', 'pisică', 'pasăre', 'pește' aparțin toate câmpului lexical 'animale'. Și 'măr', 'pâine', 'lapte', 'cașcaval' aparțin toate câmpului lexical 'mâncare'. Să sortăm cuvintele după câmpurile lor lexicale!",
    round1: "Sortează cuvintele în grupul corect!",
    round2Title: "Descoperă părți ale corpului",
    round2Teach: "Un câmp lexical poate fi și foarte specific! Câmpul lexical 'corp' conține toate părțile corpului uman: cap, ochi, nas, gură, ureche, mână, picior, braț. Când vezi un cuvânt nou, întreab-te pe tine însuți: Se potrivește în acest câmp lexical?",
    round2: "Care cuvânt aparține aici?",
    round3Title: "Cel diferit",
    round3Teach: "Uneori există un cuvânt care NU se potrivește într-un câmp lexical! De exemplu: 'câine', 'pisică', 'masă', 'pasăre' — care nu se potrivește? 'Masa' nu este animal! Acest exercițiu te ajută să înțelegi diferențele dintre câmpurile lexicale!",
    round3: "Care cuvânt se potrivește în acest grup?",
    round4Title: "Care cuvânt aparține?",
    round4Teach: "Acum jucăm un joc: Ți spun un câmp lexical, și tu alegi un cuvânt care APARȚINE lui! Ține minte ce au în comun toate cuvintele dintr-un câmp lexical. Sunt toate înrudite!",
    round4: "Care cuvânt NU se potrivește?",
    round5Title: "Mare quiz câmpuri lexicale!",
    round5Teach: "Acum știi despre câmpurile lexicale! Să amestecăm diferite câmpuri lexicale și tu alegi. Întotdeauna gândește-te: Ce cuvinte aparțin împreună? Ce au în comun?",
    round5: "Mini-quiz câmpuri lexicale!",
    correct: "Super! ✓",
    next: "Mai departe →",
    gotIt: "Înțeles!",
    done: "Gata! 🌟",
    tap: "Apasă un cuvânt pentru a-l atribui!",
    belongs: "aparține grupului",
    doesntBelong: "nu aparține",
    school: "Școală",
    animals: "Animale",
    family: "Familie",
    food: "Mâncare",
    body: "Corp",
    question: "Care cuvânt aparține grupului",
    oddOut: "Care cuvânt NU aparține grupului?",
    discovery: "💡 Un câmp lexical (Wortfeld) grupează cuvinte înrudite. De exemplu, câmpul lexical al cuvântului 'fericit' include: vesel, bucuros, mulțumit, plin de bucurie!",
  },
};

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="w-full flex items-center gap-2 px-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-2 flex-1 rounded-full transition-all duration-500"
          style={{ background: i < current ? color : "rgba(255,255,255,0.15)" }}
        />
      ))}
    </div>
  );
}

// Round 1: Sort words into categories
function Round1({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const categories = [
    { key: "school", icon: "🏫", words: ["Heft", "Tafel", "Stift", "Lineal"] },
    { key: "animals", icon: "🐾", words: ["Hund", "Katze", "Vogel", "Fisch"] },
    { key: "family", icon: "👨‍👩‍👧", words: ["Mutter", "Vater", "Bruder", "Oma"] },
    { key: "food", icon: "🍎", words: ["Brot", "Apfel", "Milch", "Käse"] },
  ];

  const allWords = categories.flatMap(c => c.words.map(w => ({ word: w, cat: c.key })));
  const shuffled = [...allWords].sort(() => Math.random() - 0.5);

  const [words] = useState(shuffled);
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const handleWordTap = (word: string) => {
    if (placed[word]) return;
    setSelected(w => w === word ? null : word);
  };

  const handleCatTap = (catKey: string) => {
    if (!selected) return;
    setPlaced(p => {
      const updated = { ...p, [selected]: catKey };
      if (Object.keys(updated).length === words.length) setDone(true);
      return updated;
    });
    setSelected(null);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>
        {lbl.round1}
      </div>

      {/* Word bank */}
      <div className="flex flex-wrap gap-2 justify-center px-2">
        {words.map(({ word }) => {
          if (placed[word]) return null;
          return (
            <motion.button key={word}
              className="px-3 py-1.5 rounded-xl text-sm font-bold border-2 transition-all"
              style={{
                background: selected === word ? color : "rgba(255,255,255,0.1)",
                borderColor: selected === word ? color : "rgba(255,255,255,0.2)",
                color: selected === word ? "#fff" : "rgba(255,255,255,0.85)",
              }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleWordTap(word)}
            >
              {word}
            </motion.button>
          );
        })}
      </div>

      {/* Category buckets */}
      <div className="w-full grid grid-cols-2 gap-2 px-1">
        {categories.map(cat => {
          const placedHere = Object.entries(placed).filter(([, v]) => v === cat.key).map(([k]) => k);
          const correct = categories.find(c => c.key === cat.key)!.words;
          return (
            <motion.div key={cat.key}
              className="rounded-2xl p-2 border-2 min-h-[70px] cursor-pointer transition-all"
              style={{ borderColor: selected ? color : "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleCatTap(cat.key)}
            >
              <div className="text-center text-xs font-bold text-white/70 mb-1">
                {cat.icon} {lbl[cat.key]}
              </div>
              <div className="flex flex-wrap gap-1 justify-center">
                {placedHere.map(w => {
                  const isCorrect = correct.includes(w);
                  return (
                    <span key={w} className="px-2 py-0.5 rounded-lg text-xs font-bold"
                      style={{ background: isCorrect ? `${color}33` : "#ef444433", color: "#fff" }}>
                      {w} {isCorrect ? "✓" : "✗"}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {done && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} onClick={onNext}>
          {lbl.next}
        </motion.button>
      )}
    </div>
  );
}

// Round 2: Body parts word field
function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const bodyParts = [
    { word: "Kopf", icon: "🤯", hint: "head" },
    { word: "Auge", icon: "👁️", hint: "eye" },
    { word: "Nase", icon: "👃", hint: "nose" },
    { word: "Mund", icon: "👄", hint: "mouth" },
    { word: "Ohr", icon: "👂", hint: "ear" },
    { word: "Hand", icon: "✋", hint: "hand" },
    { word: "Fuß", icon: "🦶", hint: "foot" },
    { word: "Arm", icon: "💪", hint: "arm" },
  ];

  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);

  const tap = (i: number) => {
    setRevealed(prev => {
      const next = new Set(prev);
      next.add(i);
      if (next.size === bodyParts.length) setDone(true);
      return next;
    });
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>
        {lbl.body} — {lbl.round2}
      </div>

      <div className="grid grid-cols-4 gap-2 w-full px-1">
        {bodyParts.map((bp, i) => (
          <motion.button key={bp.word}
            className="flex flex-col items-center gap-1 p-2 rounded-xl border-2 transition-all relative"
            style={{
              background: revealed.has(i) ? `${color}22` : "rgba(255,255,255,0.05)",
              borderColor: revealed.has(i) ? color : "rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.92 }}
            onClick={() => tap(i)}
          >
            <span className="text-xl">{bp.icon}</span>
            <span className="text-xs font-bold text-white/85">{bp.word}</span>
            {revealed.has(i) && (
              <div className="absolute top-1 right-1">
                <SpeakButton text={bp.word} lang={"de"} size={12} />
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {done && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} onClick={onNext}>
          {lbl.next}
        </motion.button>
      )}
    </div>
  );
}

// Round 3: Odd one out
const ODD_ONE_OUT = [
  { group: "Tiere", words: ["Hund", "Katze", "Tisch", "Vogel"], odd: 2 },
  { group: "Schule", words: ["Heft", "Stift", "Apfel", "Lineal"], odd: 2 },
  { group: "Familie", words: ["Mutter", "Vater", "Auto", "Bruder"], odd: 2 },
  { group: "Essen", words: ["Brot", "Milch", "Stuhl", "Käse"], odd: 2 },
];

function Round3({
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
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const q = ODD_ONE_OUT[qi];

  const handleSelect = (idx: number) => {
    if (revealed) return;
    const isCorrect = idx === q.odd;
    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: String(idx), correctAnswer: String(q.odd), topic: "Word Fields", lang: "de" });
    }
    setSelected(idx);
    setRevealed(true);
  };

  const handleNext = () => {
    if (qi + 1 >= ODD_ONE_OUT.length) {
      onNext();
    } else {
      setQi(qi + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>
        {lbl.oddOut}
      </div>

      <div className="text-center text-xs text-white/50 font-semibold">
        Gruppe: <span style={{ color }}>{q.group}</span>
      </div>

      <div className="flex flex-wrap gap-2 justify-center px-2">
        {q.words.map((w, i) => {
          let bg = "rgba(255,255,255,0.08)";
          let border = "rgba(255,255,255,0.15)";
          let textColor = "rgba(255,255,255,0.85)";
          if (revealed) {
            if (i === q.odd) { bg = "#ef444433"; border = "#ef4444"; textColor = "#ef4444"; }
            else { bg = `${color}22`; border = color; textColor = "#fff"; }
          } else if (selected === i) {
            bg = `${color}33`; border = color;
          }
          return (
            <motion.button key={w}
              className="px-5 py-2.5 rounded-xl font-bold text-sm border-2 transition-all"
              style={{ background: bg, borderColor: border, color: textColor }}
              whileTap={{ scale: 0.93 }}
              onClick={() => handleSelect(i)}
            >
              {w}
              {revealed && i === q.odd && " ✗"}
              {revealed && i !== q.odd && " ✓"}
            </motion.button>
          );
        })}
      </div>

      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} onClick={handleNext}>
          {qi + 1 >= ODD_ONE_OUT.length ? lbl.next : lbl.next}
        </motion.button>
      )}
    </div>
  );
}

// Round 4: Which word belongs to a word field?
const BELONGS_TO = [
  {
    group: "Tiere",
    icon: "🐾",
    options: ["Elefant", "Schule", "Fenster"],
    correct: 0,
  },
  {
    group: "Essen",
    icon: "🍽️",
    options: ["Stuhl", "Orange", "Heft"],
    correct: 1,
  },
  {
    group: "Schule",
    icon: "🏫",
    options: ["Auto", "Brot", "Tafel"],
    correct: 2,
  },
];

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
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const q = BELONGS_TO[qi];

  const handleSelect = (idx: number) => {
    if (revealed) return;
    const isCorrect = idx === q.correct;
    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: String(idx), correctAnswer: String(q.correct), topic: "Word Fields", lang: "de" });
    }
    setSelected(idx);
    setRevealed(true);
  };

  const handleNext = () => {
    if (qi + 1 >= BELONGS_TO.length) {
      onNext();
    } else {
      setQi(qi + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>
        {lbl.question}: <span style={{ color }}>{q.icon} {q.group}</span>
      </div>

      <div className="flex flex-col gap-2 w-full px-4">
        {q.options.map((w, i) => {
          let bg = "rgba(255,255,255,0.08)";
          let border = "rgba(255,255,255,0.15)";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === i) {
            bg = `${color}33`; border = color;
          }
          return (
            <motion.button key={w}
              className="py-3 rounded-xl font-bold text-base border-2 text-white transition-all"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleSelect(i)}
            >
              {w}
              {revealed && i === q.correct && " ✓"}
              {revealed && selected === i && i !== q.correct && " ✗"}
            </motion.button>
          );
        })}
      </div>

      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} onClick={handleNext}>
          {lbl.next}
        </motion.button>
      )}
    </div>
  );
}

// Round 5: Mixed word field quiz
const QUIZ5 = [
  {
    question: "Schule",
    icon: "🏫",
    options: ["Heft", "Hund", "Oma"],
    correct: 0,
  },
  {
    question: "Familie",
    icon: "👨‍👩‍👧",
    options: ["Brot", "Stift", "Vater"],
    correct: 2,
  },
  {
    question: "Körper",
    icon: "🫀",
    options: ["Nase", "Auto", "Käse"],
    correct: 0,
  },
];

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
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const q = QUIZ5[qi];

  const handleSelect = (idx: number) => {
    if (revealed) return;
    const isCorrect = idx === q.correct;
    if (!isCorrect) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: q.question, wrongAnswer: String(idx), correctAnswer: String(q.correct), topic: "Word Fields", lang: "de" });
    }
    setSelected(idx);
    setRevealed(true);
  };

  const handleNext = () => {
    if (qi + 1 >= QUIZ5.length) {
      onDone();
    } else {
      setQi(qi + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>
        {lbl.question}: <span style={{ color }}>{q.icon} {q.question}</span>
      </div>

      <div className="flex flex-col gap-2 w-full px-4">
        {q.options.map((w, i) => {
          let bg = "rgba(255,255,255,0.08)";
          let border = "rgba(255,255,255,0.15)";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === i) {
            bg = `${color}33`; border = color;
          }
          return (
            <motion.button key={w}
              className="py-3 rounded-xl font-bold text-base border-2 text-white transition-all"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleSelect(i)}
            >
              {w}
              {revealed && i === q.correct && " ✓"}
              {revealed && selected === i && i !== q.correct && " ✗"}
            </motion.button>
          );
        })}
      </div>

      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} onClick={handleNext}>
          {qi + 1 >= QUIZ5.length ? lbl.done : lbl.next}
        </motion.button>
      )}
    </div>
  );
}

// Main component
const WordFieldExplorer = memo(function WordFieldExplorer({
  color,
  lang = "de",
  onDone,
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
        <motion.div
          key={round}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.22 }}
          className="w-full flex flex-col items-center gap-4"
        >
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
              {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} />}
              {round === 2 && <Round3 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
              {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
              {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default WordFieldExplorer;
