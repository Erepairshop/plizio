"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "info" | "question";
type Lang = "en" | "de" | "hu" | "ro";

interface Props {
  color?: string;
  onDone?: (score: number, total: number) => void;
  lang?: Lang;
}

const LABELS: Record<string, Record<string, string>> = {
  en: {
    gotIt: "Got it! →",
    next: "Next",
    finish: "Finish",
    correct: "Correct! ✓",
    wrong: "Not quite!",

    r1_title: "Colons (:)",
    r1_text: "Use a colon to introduce a list, explanation, or quote. Example: 'I need three things: milk, bread, and eggs.'",
    r1_q: "Which sentence uses a colon correctly?",
    r1_a: "I need three things: apples, oranges, and bananas.",
    r1_b: "I need: three things apples oranges and bananas.",
    r1_c: "I need three things, apples, oranges, and bananas.",
    r1_d: "I need three things apples oranges and bananas.",

    r2_title: "Semicolons (;)",
    r2_text: "Use a semicolon to join two independent clauses. Example: 'She wanted to go; however, it was raining.'",
    r2_q: "Which sentence uses a semicolon correctly?",
    r2_a: "She wanted to go; however it was raining.",
    r2_b: "She wanted to go; but she stayed home.",
    r2_c: "She wanted to go because; it was raining.",
    r2_d: "She wanted to go; however, it was raining.",

    r3_title: "Apostrophes for Possession",
    r3_text: "Add 's to show who owns something. Example: 'The cat's toy' or 'The boys' room'. Watch singular vs. plural!",
    r3_q: "Which shows correct possession?",
    r3_a: "The teachers book is here.",
    r3_b: "The teacher's book is here.",
    r3_c: "The teachers' book is here.",
    r3_d: "The teacher book's is here.",

    r4_title: "Apostrophes for Contractions",
    r4_text: "Use an apostrophe in contractions: don't, can't, it's, they're, won't. Example: 'I don't have time.'",
    r4_q: "Which contraction is spelled correctly?",
    r4_a: "She doesnt like swimming.",
    r4_b: "She do'nt like swimming.",
    r4_c: "She doesn't like swimming.",
    r4_d: "She does'nt like swimming.",

    r5_title: "⭐ Review Questions",
    r5_text: "Let's check what you learned!",
    r5_q1: "When do you use a colon?",
    r5_op1: "Before a dependent clause",
    r5_op2: "To introduce a list or explanation",
    r5_op3: "To replace commas",
    r5_op4: "Never",
    r5_q2: "Which is a contraction?",
    r5_op5: "Teachers' room",
    r5_op6: "Can't",
    r5_op7: "Book: pen",
    r5_op8: "Very; happy",
  },
  de: {
    gotIt: "Verstanden! →",
    next: "Weiter",
    finish: "Fertig",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",

    r1_title: "Doppelpunkt (:)",
    r1_text: "Verwende einen Doppelpunkt um eine Liste oder Erklärung einzuleiten. Beispiel: 'Ich brauche drei Dinge: Milch, Brot und Eier.'",
    r1_q: "Welcher Satz verwendet einen Doppelpunkt richtig?",
    r1_a: "Ich brauche drei Dinge: Äpfel, Orangen und Bananen.",
    r1_b: "Ich brauche: drei Dinge Äpfel Orangen und Bananen.",
    r1_c: "Ich brauche drei Dinge, Äpfel, Orangen, und Bananen.",
    r1_d: "Ich brauche drei Dinge Äpfel Orangen und Bananen.",

    r2_title: "Semikolon (;)",
    r2_text: "Verwende ein Semikolon um zwei Hauptsätze zu verbinden. Beispiel: 'Sie wollte gehen; jedoch regnete es.'",
    r2_q: "Welcher Satz verwendet ein Semikolon richtig?",
    r2_a: "Sie wollte gehen; aber sie blieb zu Hause.",
    r2_b: "Sie wollte gehen; weil es regnete.",
    r2_c: "Sie wollte gehen, jedoch; es regnete.",
    r2_d: "Sie wollte gehen; jedoch regnete es.",

    r3_title: "Apostroph für Besitz",
    r3_text: "Füge 's hinzu um zu zeigen wem etwas gehört. Beispiel: 'Das Spielzeug der Katze' oder 'Das Zimmer der Jungen'.",
    r3_q: "Welcher zeigt korrekten Besitz?",
    r3_a: "Das Buch des Lehrers ist hier.",
    r3_b: "Das Lehrer Buch ist hier.",
    r3_c: "Das Lehrer's Buch ist hier.",
    r3_d: "Das Buch's des Lehrers ist hier.",

    r4_title: "Apostroph für Kontraktionen",
    r4_text: "Verwende einen Apostroph in Kontraktionen: don't, can't, it's, they're, won't. Beispiel: 'Ich habe keine Zeit.'",
    r4_q: "Welche Kontraktion ist richtig?",
    r4_a: "Sie mag nicht schwimmen.",
    r4_b: "Sie mag'nicht Schwimmen.",
    r4_c: "She doesn't like swimming.",
    r4_d: "Sie mag'n't Schwimmen.",

    r5_title: "⭐ Wiederholungsfragen",
    r5_text: "Lass uns überprüfen was du gelernt hast!",
    r5_q1: "Wann verwendest du einen Doppelpunkt?",
    r5_op1: "Vor einem Nebensatz",
    r5_op2: "Um eine Liste oder Erklärung einzuleiten",
    r5_op3: "Um Kommas zu ersetzen",
    r5_op4: "Nie",
    r5_q2: "Welches ist eine Kontraktion?",
    r5_op5: "Das Zimmer der Lehrer",
    r5_op6: "Don't",
    r5_op7: "Buch: Stift",
    r5_op8: "Sehr; glücklich",
  },
  hu: {
    gotIt: "Értem! →",
    next: "Tovább",
    finish: "Kész",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",

    r1_title: "Kettőspont (:)",
    r1_text: "Kettőspontot használj lista vagy magyarázat bevezetéséhez. Példa: 'Három dologra van szükségem: tej, kenyér és tojás.'",
    r1_q: "Melyik mondat használja helyesen a kettőspontot?",
    r1_a: "Szükségem van három dologra: alma, narancs és banán.",
    r1_b: "Szükségem van: három dolog alma narancs és banán.",
    r1_c: "Szükségem van három dologra, alma, narancs, és banán.",
    r1_d: "Szükségem van három dolog alma narancs és banán.",

    r2_title: "Pont-vesszős (;)",
    r2_text: "Pont-vesszőt használj két független záradék összekapcsolásához. Példa: 'Menni akart; azonban esett az eső.'",
    r2_q: "Melyik mondat használja helyesen a pont-vesszőst?",
    r2_a: "Menni akart; de otthon maradt.",
    r2_b: "Menni akart; mert esett az eső.",
    r2_c: "Menni akart, azonban; esett az eső.",
    r2_d: "Menni akart; azonban esett az eső.",

    r3_title: "Aposztróf a Birtokláshoz",
    r3_text: "Adj hozzá 's-t annak mutatására, hogy kié valamit. Példa: 'A macska játéka' vagy 'A fiúk szobája'.",
    r3_q: "Melyik mutatja helyesen a birtoklást?",
    r3_a: "A tanár könyve itt van.",
    r3_b: "A tanár könyv itt van.",
    r3_c: "A tanár's könyve itt van.",
    r3_d: "A könyv's tanáré itt van.",

    r4_title: "Aposztróf a Szóösszevonásokhoz",
    r4_text: "Aposztróf használ szóösszevonásokban: don't, can't, it's, they're, won't. Példa: 'Nincs időm.'",
    r4_q: "Melyik szóösszevonás helyes?",
    r4_a: "Nem szereti az úszást.",
    r4_b: "Nem'szereti az úszást.",
    r4_c: "She doesn't like swimming.",
    r4_d: "Nem'szereti az úszást.",

    r5_title: "⭐ Ismétlő Kérdések",
    r5_text: "Ellenőrizzük mit tanultál!",
    r5_q1: "Mikor használsz kettőspontot?",
    r5_op1: "Egy függő záradék előtt",
    r5_op2: "Lista vagy magyarázat bevezetéséhez",
    r5_op3: "Vesszők helyettesítéséhez",
    r5_op4: "Soha",
    r5_q2: "Melyik szóösszevonás?",
    r5_op5: "A tanárok szobája",
    r5_op6: "Can't",
    r5_op7: "Könyv: toll",
    r5_op8: "Nagyon; boldog",
  },
  ro: {
    gotIt: "Înțeles! →",
    next: "Următorul",
    finish: "Gata",
    correct: "Corect! ✓",
    wrong: "Nu tocmai!",

    r1_title: "Două Puncte (:)",
    r1_text: "Folosește două puncte pentru a introduce o listă sau explicație. Exemplu: 'Am nevoie de trei lucruri: lapte, pâine și ouă.'",
    r1_q: "Care propoziție folosește corect două puncte?",
    r1_a: "Am nevoie de trei lucruri: mere, portocale și banane.",
    r1_b: "Am nevoie: de trei lucruri mere portocale și banane.",
    r1_c: "Am nevoie de trei lucruri, mere, portocale, și banane.",
    r1_d: "Am nevoie de trei lucruri mere portocale și banane.",

    r2_title: "Punct-Virgulă (;)",
    r2_text: "Folosește punct-virgulă pentru a uni două clauze independente. Exemplu: 'Voia să meargă; totuși, ploua.'",
    r2_q: "Care propoziție folosește corect punct-virgula?",
    r2_a: "Voia să meargă; dar a rămas acasă.",
    r2_b: "Voia să meargă; pentru că ploua.",
    r2_c: "Voia să meargă, totuși; ploua.",
    r2_d: "Voia să meargă; totuși, ploua.",

    r3_title: "Apostrof pentru Posesie",
    r3_text: "Adaugă 's pentru a arăta cui îi aparține ceva. Exemplu: 'Jucăria pisicii' sau 'Camera băieților'.",
    r3_q: "Care arată corect posesia?",
    r3_a: "Cartea profesorului este aici.",
    r3_b: "Cartea profesor' este aici.",
    r3_c: "Cartea profesor's este aici.",
    r3_d: "Cartea's profesorului este aici.",

    r4_title: "Apostrof pentru Contracții",
    r4_text: "Folosește apostrof în contracții: don't, can't, it's, they're, won't. Exemplu: 'Nu am timp.'",
    r4_q: "Care contracție este scrisă corect?",
    r4_a: "Ea nu-i place inot.",
    r4_b: "Ea nu'i place inot.",
    r4_c: "She doesn't like swimming.",
    r4_d: "Ea nu's place inot.",

    r5_title: "⭐ Întrebări de Repetiție",
    r5_text: "Să verificăm ce ai învățat!",
    r5_q1: "Când folosești două puncte?",
    r5_op1: "Înainte de o clauză dependentă",
    r5_op2: "Pentru a introduce o listă sau explicație",
    r5_op3: "Pentru a înlocui virgulele",
    r5_op4: "Niciodată",
    r5_q2: "Care este o contracție?",
    r5_op5: "Camera profesorilor",
    r5_op6: "Can't",
    r5_op7: "Carte: pix",
    r5_op8: "Foarte; fericit",
  },
};

interface MCQQuestion {
  question: string;
  choices: string[];
  answer: string;
}

export default function PunctuationK5Explorer({ color = "#EC4899", onDone, lang = "en" }: Props) {
  const langCode = lang || "en";
  const t = LABELS[langCode] || LABELS.en;

  const [round, setRound] = useState(0);
  const [phase, setPhase] = useState<Phase>("info");
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);

  const questionsPerRound = useMemo(() => {
    if (round < 4) return [{ question: `r${round + 1}_q`, choices: [`r${round + 1}_a`, `r${round + 1}_b`, `r${round + 1}_c`, `r${round + 1}_d`], answer: `r${round + 1}_a` }];
    return [
      { question: "r5_q1", choices: ["r5_op1", "r5_op2", "r5_op3", "r5_op4"], answer: "r5_op2" },
      { question: "r5_q2", choices: ["r5_op5", "r5_op6", "r5_op7", "r5_op8"], answer: "r5_op6" },
    ];
  }, [round]);

  const handleAnswer = useCallback((choice: string) => {
    if (locked) return;
    setSelected(choice);
    setLocked(true);
    if (choice === questionsPerRound[0].answer) {
      setScore(s => s + 1);
    }
    setTimeout(() => {
      if (round < 4) {
        setRound(r => r + 1);
        setPhase("info");
        setSelected(null);
        setLocked(false);
      } else {
        onDone?.(score + (choice === questionsPerRound[0].answer ? 1 : 0), 5);
      }
    }, 1200);
  }, [locked, round, questionsPerRound, score, onDone]);

  const infoBgs: Record<number, string> = {
    0: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
    1: "linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%)",
    2: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    3: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    4: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {phase === "info" && (
        <motion.div className="bg-white/95 rounded-3xl p-8 text-center"
          style={{ background: infoBgs[round] }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <h2 className="text-2xl font-black text-slate-800 mb-4">{t[`r${round + 1}_title`] || "Punctuation"}</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">{t[`r${round + 1}_text`] || ""}</p>
          <motion.button
            onClick={() => setPhase("question")}
            className="px-6 py-3 rounded-full font-bold text-white transition-all"
            style={{ background: color }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {t.gotIt}
          </motion.button>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {phase === "question" && (
          <motion.div key={`q-${round}`} className="bg-white/95 rounded-3xl p-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <p className="text-lg font-bold text-center mb-6 text-slate-800">{t[questionsPerRound[0].question] || ""}</p>
            <div className="grid grid-cols-1 gap-3">
              {questionsPerRound[0].choices.map((ch) => (
                <motion.button
                  key={ch}
                  onClick={() => handleAnswer(ch)}
                  className={`py-4 px-4 rounded-2xl font-bold text-sm transition-all border-2 ${
                    selected === ch
                      ? ch === questionsPerRound[0].answer
                        ? "bg-green-500 border-green-500 text-white"
                        : "bg-red-100 border-red-300 text-red-600 opacity-70"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-400"
                  }`}
                  disabled={locked}
                  whileHover={!locked ? { scale: 1.02 } : {}}>
                  {t[ch] || ""}
                </motion.button>
              ))}
            </div>
            {locked && (
              <motion.div className="mt-4 text-center font-bold"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <span className={selected === questionsPerRound[0].answer ? "text-green-600" : "text-red-600"}>
                  {selected === questionsPerRound[0].answer ? t.correct : t.wrong}
                </span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
