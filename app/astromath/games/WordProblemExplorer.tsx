"use client";
// WordProblemExplorer — Word problem analysis for Grade 3–4
// Teaches students to break any problem into 3 steps:
//   1. Gegeben  (what we know)
//   2. Gesucht  (what we must find)
//   3. Rechnung (which calculation solves it)
// No wrong answers — pure guided discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface WordProblem {
  text: string;
  given: string;
  asked: string;
  calc: string;
  answer: string;
}

// ─── Translations ─────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    concept: "Every word problem has 3 steps!",
    givenLabel: "📦 What do we know?",
    askedLabel: "🎯 What must we find?",
    calcLabel: "🧮 Which calculation?",
    discover: "Solution:",
    next: "Next", done: "Brilliant! ✨", tap: "Tap to reveal",
  },
  hu: {
    concept: "Minden szöveges feladatnak 3 lépése van!",
    givenLabel: "📦 Mit tudunk?",
    askedLabel: "🎯 Mit keresünk?",
    calcLabel: "🧮 Melyik számítás?",
    discover: "Megoldás:",
    next: "Következő", done: "Fantasztikus! ✨", tap: "Koppints!",
  },
  de: {
    concept: "Jede Sachaufgabe hat 3 Schritte!",
    givenLabel: "📦 Was wissen wir?",
    askedLabel: "🎯 Was suchen wir?",
    calcLabel: "🧮 Welche Rechnung?",
    discover: "Lösung:",
    next: "Weiter", done: "Fantastisch! ✨", tap: "Antippen",
  },
  ro: {
    concept: "Fiecare problemă are 3 pași!",
    givenLabel: "📦 Ce știm?",
    askedLabel: "🎯 Ce căutăm?",
    calcLabel: "🧮 Care calcul?",
    discover: "Soluție:",
    next: "Înainte", done: "Fantastic! ✨", tap: "Atinge",
  },
};

// ─── Problem pools per language ───────────────────────────────────────────────
const PROBLEMS: Record<string, WordProblem[]> = {
  de: [
    {
      text: "Anna hat 1240 Aufkleber gesammelt. Sie gibt 385 davon ihrer Schwester. Wie viele hat sie noch?",
      given: "1240 Aufkleber, 385 verschenkt",
      asked: "Wie viele hat Anna noch?",
      calc: "1240 − 385 = ?",
      answer: "1240 − 385 = 855 Aufkleber",
    },
    {
      text: "Ein Buch kostet 24 €. Lena kauft 6 Bücher. Wie viel zahlt sie insgesamt?",
      given: "1 Buch kostet 24 €, Lena kauft 6 Bücher",
      asked: "Wie viel zahlt Lena insgesamt?",
      calc: "6 × 24 = ?",
      answer: "6 × 24 = 144 €",
    },
    {
      text: "Im Stadion sitzen 3600 Zuschauer. 750 gehen nach Hause. Wie viele bleiben noch?",
      given: "3600 Zuschauer, 750 gehen weg",
      asked: "Wie viele Zuschauer bleiben?",
      calc: "3600 − 750 = ?",
      answer: "3600 − 750 = 2850 Zuschauer",
    },
    {
      text: "Ein Bauer hat 245 Äpfel. Er verteilt sie gleichmäßig in 5 Körbe. Wie viele kommen in jeden Korb?",
      given: "245 Äpfel, 5 Körbe",
      asked: "Wie viele Äpfel pro Korb?",
      calc: "245 ÷ 5 = ?",
      answer: "245 ÷ 5 = 49 Äpfel pro Korb",
    },
    {
      text: "Max spart jeden Monat 150 €. Wie viel hat er nach 8 Monaten gespart?",
      given: "150 € pro Monat, 8 Monate",
      asked: "Wie viel hat Max insgesamt gespart?",
      calc: "8 × 150 = ?",
      answer: "8 × 150 = 1200 €",
    },
    {
      text: "Eine Klasse hat 28 Schüler. Sie sitzen in 4 gleichen Reihen. Wie viele sitzen in einer Reihe?",
      given: "28 Schüler, 4 gleiche Reihen",
      asked: "Wie viele Schüler pro Reihe?",
      calc: "28 ÷ 4 = ?",
      answer: "28 ÷ 4 = 7 Schüler pro Reihe",
    },
  ],
  en: [
    {
      text: "Anna collected 1240 stickers. She gives 385 to her sister. How many does she have left?",
      given: "1240 stickers, 385 given away",
      asked: "How many stickers does Anna have left?",
      calc: "1240 − 385 = ?",
      answer: "1240 − 385 = 855 stickers",
    },
    {
      text: "A book costs 24 €. Lena buys 6 books. How much does she pay in total?",
      given: "1 book = 24 €, Lena buys 6 books",
      asked: "How much does Lena pay in total?",
      calc: "6 × 24 = ?",
      answer: "6 × 24 = 144 €",
    },
    {
      text: "3600 spectators are in the stadium. 750 go home. How many remain?",
      given: "3600 spectators, 750 leave",
      asked: "How many spectators remain?",
      calc: "3600 − 750 = ?",
      answer: "3600 − 750 = 2850 spectators",
    },
    {
      text: "A farmer has 245 apples. He distributes them equally into 5 baskets. How many apples are in each basket?",
      given: "245 apples, 5 baskets",
      asked: "How many apples per basket?",
      calc: "245 ÷ 5 = ?",
      answer: "245 ÷ 5 = 49 apples per basket",
    },
    {
      text: "Max saves 150 € every month. How much has he saved after 8 months?",
      given: "150 € per month, 8 months",
      asked: "How much has Max saved in total?",
      calc: "8 × 150 = ?",
      answer: "8 × 150 = 1200 €",
    },
    {
      text: "A class has 28 students. They sit in 4 equal rows. How many students are in each row?",
      given: "28 students, 4 equal rows",
      asked: "How many students per row?",
      calc: "28 ÷ 4 = ?",
      answer: "28 ÷ 4 = 7 students per row",
    },
  ],
  hu: [
    {
      text: "Anna 1240 matricát gyűjtött össze. 385-öt odaad a nővérének. Hány marad neki?",
      given: "1240 matrica, 385-öt ajándékoz",
      asked: "Hány matrica marad Annánál?",
      calc: "1240 − 385 = ?",
      answer: "1240 − 385 = 855 matrica",
    },
    {
      text: "Egy könyv 24 euróba kerül. Lena 6 könyvet vesz. Mennyit fizet összesen?",
      given: "1 könyv = 24 €, Lena 6 könyvet vesz",
      asked: "Mennyit fizet Lena összesen?",
      calc: "6 × 24 = ?",
      answer: "6 × 24 = 144 €",
    },
    {
      text: "A stadionban 3600 néző ül. 750-en hazamennek. Hányan maradnak?",
      given: "3600 néző, 750 elmegy",
      asked: "Hány néző marad a stadionban?",
      calc: "3600 − 750 = ?",
      answer: "3600 − 750 = 2850 néző",
    },
    {
      text: "Egy gazdának 245 almája van. Egyenlően osztja el 5 kosárba. Hány kerül minden kosárba?",
      given: "245 alma, 5 kosár",
      asked: "Hány alma kerül egy kosárba?",
      calc: "245 ÷ 5 = ?",
      answer: "245 ÷ 5 = 49 alma kosáranként",
    },
    {
      text: "Max havonta 150 eurót takarít meg. Mennyit takarít meg 8 hónap alatt?",
      given: "havi 150 €, 8 hónap",
      asked: "Mennyit takarított meg Max összesen?",
      calc: "8 × 150 = ?",
      answer: "8 × 150 = 1200 €",
    },
    {
      text: "Egy osztálynak 28 tanulója van. 4 egyenlő sorban ülnek. Hány tanuló ül egy sorban?",
      given: "28 tanuló, 4 egyenlő sor",
      asked: "Hány tanuló ül egy sorban?",
      calc: "28 ÷ 4 = ?",
      answer: "28 ÷ 4 = 7 tanuló soronként",
    },
  ],
  ro: [
    {
      text: "Ana a colectat 1240 de abțibilduri. Dă 385 surorii sale. Câte îi rămân?",
      given: "1240 abțibilduri, 385 dăruite",
      asked: "Câte abțibilduri îi rămân Anei?",
      calc: "1240 − 385 = ?",
      answer: "1240 − 385 = 855 abțibilduri",
    },
    {
      text: "O carte costă 24 €. Lena cumpără 6 cărți. Cât plătește în total?",
      given: "1 carte = 24 €, Lena cumpără 6 cărți",
      asked: "Cât plătește Lena în total?",
      calc: "6 × 24 = ?",
      answer: "6 × 24 = 144 €",
    },
    {
      text: "3600 de spectatori sunt în stadion. 750 pleacă acasă. Câți rămân?",
      given: "3600 spectatori, 750 pleacă",
      asked: "Câți spectatori rămân?",
      calc: "3600 − 750 = ?",
      answer: "3600 − 750 = 2850 spectatori",
    },
    {
      text: "Un fermier are 245 de mere. Le împarte egal în 5 coșuri. Câte mere sunt în fiecare coș?",
      given: "245 mere, 5 coșuri",
      asked: "Câte mere sunt într-un coș?",
      calc: "245 ÷ 5 = ?",
      answer: "245 ÷ 5 = 49 mere pe coș",
    },
    {
      text: "Max economisește 150 € pe lună. Cât a economisit după 8 luni?",
      given: "150 € pe lună, 8 luni",
      asked: "Cât a economisit Max în total?",
      calc: "8 × 150 = ?",
      answer: "8 × 150 = 1200 €",
    },
    {
      text: "O clasă are 28 de elevi. Stau în 4 rânduri egale. Câți elevi sunt în fiecare rând?",
      given: "28 elevi, 4 rânduri egale",
      asked: "Câți elevi sunt pe rând?",
      calc: "28 ÷ 4 = ?",
      answer: "28 ÷ 4 = 7 elevi pe rând",
    },
  ],
};

// G3 problems — numbers ≤ 999, simpler operations
const PROBLEMS_G3: Record<string, WordProblem[]> = {
  de: [
    { text: "Lukas hat 350 Murmeln. Er verschenkt 125 an seinen Freund. Wie viele hat er noch?", given: "350 Murmeln, 125 verschenkt", asked: "Wie viele Murmeln hat Lukas noch?", calc: "350 − 125 = ?", answer: "350 − 125 = 225 Murmeln" },
    { text: "In der Bibliothek stehen 248 Bücher. Es kommen 134 neue dazu. Wie viele sind es jetzt?", given: "248 Bücher, 134 neue", asked: "Wie viele Bücher sind es jetzt?", calc: "248 + 134 = ?", answer: "248 + 134 = 382 Bücher" },
    { text: "Eine Schachtel enthält 8 Stifte. Die Klasse braucht 5 Schachteln. Wie viele Stifte sind das?", given: "8 Stifte pro Schachtel, 5 Schachteln", asked: "Wie viele Stifte insgesamt?", calc: "5 × 8 = ?", answer: "5 × 8 = 40 Stifte" },
    { text: "24 Kinder teilen sich gleichmäßig in 4 Gruppen auf. Wie viele sind in jeder Gruppe?", given: "24 Kinder, 4 Gruppen", asked: "Wie viele Kinder pro Gruppe?", calc: "24 ÷ 4 = ?", answer: "24 ÷ 4 = 6 Kinder pro Gruppe" },
    { text: "Auf dem Bauernhof sind 475 Hühner. 180 laufen auf die Weide. Wie viele bleiben im Stall?", given: "475 Hühner, 180 auf der Weide", asked: "Wie viele Hühner bleiben im Stall?", calc: "475 − 180 = ?", answer: "475 − 180 = 295 Hühner" },
    { text: "Ein Korb fasst 6 Äpfel. Der Bauer füllt 7 Körbe. Wie viele Äpfel hat er?", given: "6 Äpfel pro Korb, 7 Körbe", asked: "Wie viele Äpfel insgesamt?", calc: "7 × 6 = ?", answer: "7 × 6 = 42 Äpfel" },
  ],
  en: [
    { text: "Lukas has 350 marbles. He gives 125 to his friend. How many does he have left?", given: "350 marbles, 125 given away", asked: "How many marbles does Lukas have left?", calc: "350 − 125 = ?", answer: "350 − 125 = 225 marbles" },
    { text: "The library has 248 books. 134 new ones arrive. How many are there now?", given: "248 books, 134 new ones", asked: "How many books are there now?", calc: "248 + 134 = ?", answer: "248 + 134 = 382 books" },
    { text: "A box contains 8 pencils. The class needs 5 boxes. How many pencils is that?", given: "8 pencils per box, 5 boxes", asked: "How many pencils in total?", calc: "5 × 8 = ?", answer: "5 × 8 = 40 pencils" },
    { text: "24 children split into 4 equal groups. How many are in each group?", given: "24 children, 4 groups", asked: "How many children per group?", calc: "24 ÷ 4 = ?", answer: "24 ÷ 4 = 6 children per group" },
    { text: "There are 475 chickens on the farm. 180 run to the meadow. How many stay in the barn?", given: "475 chickens, 180 in the meadow", asked: "How many chickens stay in the barn?", calc: "475 − 180 = ?", answer: "475 − 180 = 295 chickens" },
    { text: "A basket holds 6 apples. The farmer fills 7 baskets. How many apples does he have?", given: "6 apples per basket, 7 baskets", asked: "How many apples in total?", calc: "7 × 6 = ?", answer: "7 × 6 = 42 apples" },
  ],
  hu: [
    { text: "Lukásnak 350 golyója van. 125-öt odaad a barátjának. Hány marad neki?", given: "350 golyó, 125-öt ajándékoz", asked: "Hány golyója marad Lukásnak?", calc: "350 − 125 = ?", answer: "350 − 125 = 225 golyó" },
    { text: "A könyvtárban 248 könyv van. 134 új könyv érkezik. Hány van most?", given: "248 könyv, 134 új", asked: "Összesen hány könyv van?", calc: "248 + 134 = ?", answer: "248 + 134 = 382 könyv" },
    { text: "Egy dobozban 8 ceruza van. Az osztálynak 5 dobozra van szüksége. Hány ceruza az?", given: "8 ceruza/doboz, 5 doboz", asked: "Összesen hány ceruza?", calc: "5 × 8 = ?", answer: "5 × 8 = 40 ceruza" },
    { text: "24 gyerek 4 egyenlő csoportra oszlik. Hányan vannak egy csoportban?", given: "24 gyerek, 4 csoport", asked: "Hányan vannak csoportonként?", calc: "24 ÷ 4 = ?", answer: "24 ÷ 4 = 6 gyerek csoportonként" },
    { text: "A tanyán 475 csirke van. 180 kimegy a legelőre. Hány marad az istállóban?", given: "475 csirke, 180 a legelőn", asked: "Hány csirke marad az istállóban?", calc: "475 − 180 = ?", answer: "475 − 180 = 295 csirke" },
    { text: "Egy kosárba 6 alma fér. A gazda 7 kosarat tölt meg. Hány almája van?", given: "6 alma/kosár, 7 kosár", asked: "Összesen hány alma?", calc: "7 × 6 = ?", answer: "7 × 6 = 42 alma" },
  ],
  ro: [
    { text: "Lukas are 350 de bile. Dă 125 prietenului său. Câte îi mai rămân?", given: "350 bile, 125 dăruite", asked: "Câte bile îi rămân lui Lukas?", calc: "350 − 125 = ?", answer: "350 − 125 = 225 bile" },
    { text: "Biblioteca are 248 de cărți. Sosesc 134 noi. Câte sunt acum?", given: "248 cărți, 134 noi", asked: "Câte cărți sunt acum?", calc: "248 + 134 = ?", answer: "248 + 134 = 382 cărți" },
    { text: "O cutie conține 8 creioane. Clasa are nevoie de 5 cutii. Câte creioane sunt?", given: "8 creioane/cutie, 5 cutii", asked: "Câte creioane în total?", calc: "5 × 8 = ?", answer: "5 × 8 = 40 creioane" },
    { text: "24 de copii se împart în 4 grupe egale. Câți sunt în fiecare grupă?", given: "24 copii, 4 grupe", asked: "Câți copii pe grupă?", calc: "24 ÷ 4 = ?", answer: "24 ÷ 4 = 6 copii pe grupă" },
    { text: "La fermă sunt 475 de găini. 180 aleargă pe pajiște. Câte rămân în grajd?", given: "475 găini, 180 pe pajiște", asked: "Câte găini rămân în grajd?", calc: "475 − 180 = ?", answer: "475 − 180 = 295 găini" },
    { text: "Un coș încape 6 mere. Fermierul umple 7 coșuri. Câte mere are?", given: "6 mere/coș, 7 coșuri", asked: "Câte mere în total?", calc: "7 × 6 = ?", answer: "7 × 6 = 42 mere" },
  ],
};

// Step colors: given=color (passed), asked=gold, calc=green
const STEP_COLORS = ["#00D4FF", "#FFD700", "#00FF88"];

// ─── Reveal block ─────────────────────────────────────────────────────────────
function StepBlock({
  label, content, revealed, stepColor, onTap, tapLabel,
}: {
  label: string; content: string; revealed: boolean;
  stepColor: string; onTap: () => void; tapLabel: string;
}) {
  return (
    <motion.button
      onClick={onTap}
      disabled={revealed}
      className="w-full text-left rounded-2xl px-4 py-3"
      style={{
        background: revealed ? `${stepColor}15` : "rgba(255,255,255,0.06)",
        border: `2px solid ${revealed ? stepColor : "rgba(255,255,255,0.15)"}`,
      }}
      whileTap={!revealed ? { scale: 0.97 } : {}}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-black" style={{ color: stepColor }}>{label}</span>
        {!revealed && (
          <span className="text-[10px] font-bold text-white/30">{tapLabel}</span>
        )}
      </div>
      {revealed ? (
        <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          className="text-sm font-bold text-white/90 mt-1">
          {content}
        </motion.p>
      ) : (
        <p className="text-sm font-black text-white/20 mt-1">?</p>
      )}
    </motion.button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const WordProblemExplorer = memo(function WordProblemExplorer({
  color, onDone, lang = "en", grade = 4,
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
  grade?: number;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const problemSet = grade <= 3 ? PROBLEMS_G3 : PROBLEMS;
  const pool = problemSet[lang] ?? problemSet.en;

  const [rounds] = useState<WordProblem[]>(() => {
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 5);
  });

  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState([false, false, false]);
  const [completed, setCompleted] = useState(0);

  const problem = rounds[idx];
  const allRevealed = revealed.every(Boolean);

  const revealStep = (i: number) => {
    if (revealed[i]) return;
    // Enforce order: can only reveal next step
    if (i > 0 && !revealed[i - 1]) return;
    const next = [...revealed];
    next[i] = true;
    setRevealed(next);
  };

  const next = useCallback(() => {
    const newCompleted = completed + 1;
    setCompleted(newCompleted);
    setRevealed([false, false, false]);
    if (idx + 1 >= rounds.length) { onDone(newCompleted, rounds.length); return; }
    setIdx(i => i + 1);
  }, [idx, rounds.length, onDone, completed]);

  const steps = [
    { label: lbl.givenLabel, content: problem.given },
    { label: lbl.askedLabel, content: problem.asked },
    { label: lbl.calcLabel,  content: problem.calc  },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Concept label */}
      <p className="text-white/50 text-xs font-bold text-center">{lbl.concept}</p>

      {/* Problem text */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl px-4 py-4"
          style={{ background: `${color}12`, border: `2px solid ${color}50` }}>
          <p className="text-white/90 text-sm font-semibold leading-relaxed">
            {problem.text}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* 3 step blocks */}
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <StepBlock key={i}
            label={step.label}
            content={step.content}
            revealed={revealed[i]}
            stepColor={STEP_COLORS[i]}
            onTap={() => revealStep(i)}
            tapLabel={lbl.tap} />
        ))}
      </div>

      {/* Answer + Next */}
      <AnimatePresence>
        {allRevealed && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3">
            <motion.div className="w-full rounded-2xl px-5 py-3 text-center"
              style={{ background: "rgba(0,255,136,0.10)", border: "2px solid rgba(0,255,136,0.3)" }}
              animate={{ scale: [0.94, 1.02, 1] }} transition={{ duration: 0.45 }}>
              <p className="text-white/50 text-xs font-bold mb-1">{lbl.discover}</p>
              <p className="text-xl font-black" style={{ color: "#00FF88" }}>{problem.answer}</p>
            </motion.div>

            <motion.button onClick={next}
              className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= rounds.length ? lbl.done : lbl.next} <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default WordProblemExplorer;
