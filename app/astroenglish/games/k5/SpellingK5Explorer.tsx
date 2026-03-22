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
    correct: "Correct! ✓",
    wrong: "Not quite!",

    r1_title: "ie vs. ei",
    r1_text: "I before E except after C. Examples: believe, piece, ceil, receipt. But remember: weight, their, weigh are exceptions.",
    r1_q: "Which is spelled correctly?",
    r1_a: "Believe",
    r1_b: "Beleive",
    r1_c: "Beleave",
    r1_d: "Beleve",

    r2_title: "Silent Letters",
    r2_text: "English has many words with silent letters. Examples: knight (k is silent), write (w is silent), psychology (p is silent).",
    r2_q: "Which word has a silent letter?",
    r2_a: "Apple",
    r2_b: "Knight",
    r2_c: "Banana",
    r2_d: "Happy",

    r3_title: "Double Consonants",
    r3_text: "When a one-syllable word ends in consonant-vowel-consonant, double the consonant before adding -ing or -ed. Example: run → running, hop → hopped.",
    r3_q: "Which adds the suffix correctly?",
    r3_a: "Hop + ing = Hoping",
    r3_b: "Hop + ing = Hopping",
    r3_c: "Hop + ed = Hopeed",
    r3_d: "Hop + ing = Hopeling",

    r4_title: "Y to I",
    r4_text: "When a word ends in consonant + y, change the y to i before adding a suffix. Example: happy → happiness, study → studies.",
    r4_q: "Which changes y to i correctly?",
    r4_a: "Happy + ness = Happyness",
    r4_b: "Happy + ness = Happiness",
    r4_c: "Happily + ness = Happiliness",
    r4_d: "Happy + ness = Happiness",

    r5_title: "⭐ Review Questions",
    r5_text: "Let's check what you learned!",
    r5_q1: "What rule helps spell 'receive'?",
    r5_op1: "I before E",
    r5_op2: "E before I after C",
    r5_op3: "Silent letter rule",
    r5_op4: "Double consonant",
    r5_q2: "Which is spelled correctly?",
    r5_op5: "Studys",
    r5_op6: "Studies",
    r5_op7: "Studyes",
    r5_op8: "Studys",
  },
  de: {
    gotIt: "Verstanden! →",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",

    r1_title: "ie vs. ei",
    r1_text: "I vor E außer nach C. Beispiele: believe, piece, ceil, receipt. Aber Ausnahmen: weight, their, weigh.",
    r1_q: "Welches ist richtig geschrieben?",
    r1_a: "Believe",
    r1_b: "Beleive",
    r1_c: "Beleave",
    r1_d: "Beleve",

    r2_title: "Stille Buchstaben",
    r2_text: "Englisch hat viele Wörter mit stummen Buchstaben. Beispiele: knight (k ist still), write (w ist still), psychology (p ist still).",
    r2_q: "Welches Wort hat einen stillen Buchstaben?",
    r2_a: "Apple",
    r2_b: "Knight",
    r2_c: "Banana",
    r2_d: "Happy",

    r3_title: "Doppelte Konsonanten",
    r3_text: "Bei einsylbigen Wörtern mit Konsonant-Vokal-Konsonant wird der Konsonant verdoppelt vor -ing oder -ed. Beispiel: run → running.",
    r3_q: "Welche fügt das Suffix korrekt hinzu?",
    r3_a: "Hop + ing = Hoping",
    r3_b: "Hop + ing = Hopping",
    r3_c: "Hop + ed = Hopeed",
    r3_d: "Hop + ing = Hopeling",

    r4_title: "Y zu I",
    r4_text: "Wenn ein Wort auf Konsonant + y endet, ändere y zu i vor einem Suffix. Beispiel: happy → happiness.",
    r4_q: "Welche ändert y zu i korrekt?",
    r4_a: "Happy + ness = Happyness",
    r4_b: "Happy + ness = Happiness",
    r4_c: "Happily + ness = Happiliness",
    r4_d: "Happy + ness = Happiness",

    r5_title: "⭐ Wiederholungsfragen",
    r5_text: "Lass uns überprüfen was du gelernt hast!",
    r5_q1: "Welche Regel hilft 'receive' zu schreiben?",
    r5_op1: "I vor E",
    r5_op2: "E vor I nach C",
    r5_op3: "Stille Buchstaben Regel",
    r5_op4: "Doppelte Konsonanten",
    r5_q2: "Welches ist richtig geschrieben?",
    r5_op5: "Studys",
    r5_op6: "Studies",
    r5_op7: "Studyes",
    r5_op8: "Studys",
  },
  hu: {
    gotIt: "Értem! →",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",

    r1_title: "ie vs. ei",
    r1_text: "I az E előtt, kivéve C után. Példák: believe, piece, ceil, receipt. De kivételek: weight, their, weigh.",
    r1_q: "Melyik helyesen írva?",
    r1_a: "Believe",
    r1_b: "Beleive",
    r1_c: "Beleave",
    r1_d: "Beleve",

    r2_title: "Csendes Betűk",
    r2_text: "Az angolban sok szó van csendes betűkkel. Példák: knight (k csendes), write (w csendes), psychology (p csendes).",
    r2_q: "Melyik szónak van csendes betűje?",
    r2_a: "Apple",
    r2_b: "Knight",
    r2_c: "Banana",
    r2_d: "Happy",

    r3_title: "Kettős Mássalhangzók",
    r3_text: "Egytagú szóknál, ha mássalhangzó-magánhangzó-mássalhangzó végzés van, a mássalhangzót megkétszereztük az -ing vagy -ed előtt. Példa: run → running.",
    r3_q: "Melyik adja helyesen a végzetet?",
    r3_a: "Hop + ing = Hoping",
    r3_b: "Hop + ing = Hopping",
    r3_c: "Hop + ed = Hopeed",
    r3_d: "Hop + ing = Hopeling",

    r4_title: "Y -> I",
    r4_text: "Ha egy szó mássalhangzó + y-ra végződik, az y-t i-re változtasd végzet előtt. Példa: happy → happiness.",
    r4_q: "Melyik változtatja helyesen az y-t i-re?",
    r4_a: "Happy + ness = Happyness",
    r4_b: "Happy + ness = Happiness",
    r4_c: "Happily + ness = Happiliness",
    r4_d: "Happy + ness = Happiness",

    r5_title: "⭐ Ismétlő Kérdések",
    r5_text: "Ellenőrizzük mit tanultál!",
    r5_q1: "Melyik szabály segít az 'receive' írásában?",
    r5_op1: "I az E előtt",
    r5_op2: "E az I előtt C után",
    r5_op3: "Csendes betűk szabálya",
    r5_op4: "Kettős mássalhangzók",
    r5_q2: "Melyik helyesen írva?",
    r5_op5: "Studys",
    r5_op6: "Studies",
    r5_op7: "Studyes",
    r5_op8: "Studys",
  },
  ro: {
    gotIt: "Înțeles! →",
    correct: "Corect! ✓",
    wrong: "Nu tocmai!",

    r1_title: "ie vs. ei",
    r1_text: "I înainte de E, cu excepție după C. Exemple: believe, piece, ceil, receipt. Dar excepții: weight, their, weigh.",
    r1_q: "Care este scrisă corect?",
    r1_a: "Believe",
    r1_b: "Beleive",
    r1_c: "Beleave",
    r1_d: "Beleve",

    r2_title: "Litere Tăcute",
    r2_text: "Engleza are multe cuvinte cu litere tăcute. Exemple: knight (k este tăcută), write (w este tăcută), psychology (p este tăcută).",
    r2_q: "Care cuvânt are o literă tăcută?",
    r2_a: "Apple",
    r2_b: "Knight",
    r2_c: "Banana",
    r2_d: "Happy",

    r3_title: "Consoane Duble",
    r3_text: "Pentru cuvintele de o silabă care se termină în consoană-vocală-consoană, dublează consoana înainte de -ing sau -ed. Exemplu: run → running.",
    r3_q: "Care adaugă sufixul corect?",
    r3_a: "Hop + ing = Hoping",
    r3_b: "Hop + ing = Hopping",
    r3_c: "Hop + ed = Hopeed",
    r3_d: "Hop + ing = Hopeling",

    r4_title: "Y -> I",
    r4_text: "Când un cuvânt se termină în consoană + y, schimbă y în i înainte de sufix. Exemplu: happy → happiness.",
    r4_q: "Care schimbă corect y în i?",
    r4_a: "Happy + ness = Happyness",
    r4_b: "Happy + ness = Happiness",
    r4_c: "Happily + ness = Happiliness",
    r4_d: "Happy + ness = Happiness",

    r5_title: "⭐ Întrebări de Repetiție",
    r5_text: "Să verificăm ce ai învățat!",
    r5_q1: "Care regulă ajută la scrierea 'receive'?",
    r5_op1: "I înainte de E",
    r5_op2: "E înainte de I după C",
    r5_op3: "Regula literelor tăcute",
    r5_op4: "Consoane duble",
    r5_q2: "Care este scrisă corect?",
    r5_op5: "Studys",
    r5_op6: "Studies",
    r5_op7: "Studyes",
    r5_op8: "Studys",
  },
};

interface MCQQuestion {
  question: string;
  choices: string[];
  answer: string;
}

export default function SpellingK5Explorer({ color = "#F59E0B", onDone, lang = "en" }: Props) {
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
    0: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    1: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    2: "linear-gradient(135deg, #fecdd3 0%, #fca5a5 100%)",
    3: "linear-gradient(135deg, #ddd6fe 0%, #c7d2fe 100%)",
    4: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {phase === "info" && (
        <motion.div className="bg-white/95 rounded-3xl p-8 text-center"
          style={{ background: infoBgs[round] }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <h2 className="text-2xl font-black text-slate-800 mb-4">{t[`r${round + 1}_title`] || "Spelling"}</h2>
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
