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

    r1_title: "Relative Pronouns (Who/Which/That)",
    r1_text: "Relative pronouns introduce adjective clauses. WHO (people), WHICH (things), THAT (people/things). Example: 'The student who studied hard passed.'",
    r1_q: "Which relative pronoun is correct?",
    r1_a: "The book which I read was interesting.",
    r1_b: "The book who I read was interesting.",
    r1_c: "The book that I read was boring.",
    r1_d: "Both A and C are correct.",

    r2_title: "Reflexive Pronouns",
    r2_text: "Reflexive pronouns: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves. Use when subject = object. Example: 'I taught myself.'",
    r2_q: "Which sentence uses a reflexive pronoun correctly?",
    r2_a: "He gave it to myself.",
    r2_b: "She hurt herself while playing.",
    r2_c: "I like him himself.",
    r2_d: "They enjoyed ourselves at the party.",

    r3_title: "Relative Pronouns (Whose)",
    r3_text: "WHOSE shows possession in relative clauses. Example: 'The girl whose book was lost cried.' (NOT: The girl who's book...)",
    r3_q: "Which uses WHOSE correctly?",
    r3_a: "The student whose test was hard complained.",
    r3_b: "The student who's test was hard complained.",
    r3_c: "The student that's book was lost.",
    r3_d: "The student whose he lost his book.",

    r4_title: "Intensive Pronouns",
    r4_text: "Intensive pronouns emphasize the subject: 'I myself saw it!' or 'The president himself spoke.' They look like reflexive pronouns but work differently!",
    r4_q: "Which uses an intensive pronoun correctly?",
    r4_a: "The teacher myself graded the test.",
    r4_b: "The teacher herself graded the test.",
    r4_c: "The teacher himself is tall.",
    r4_d: "Both B and C are correct.",

    r5_title: "⭐ Review Questions",
    r5_text: "Let's check what you learned!",
    r5_q1: "Which pronoun introduces a clause about a person?",
    r5_op1: "Which",
    r5_op2: "That",
    r5_op3: "Who",
    r5_op4: "Whose",
    r5_q2: "What's the difference between reflexive and intensive pronouns?",
    r5_op5: "No difference—they're the same",
    r5_op6: "Reflexive: subject=object; Intensive: emphasizes",
    r5_op7: "Reflexive: things only; Intensive: people only",
    r5_op8: "Intensive: must follow a verb",
  },
  de: {
    gotIt: "Verstanden! →",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",

    r1_title: "Relativpronomen (Who/Which/That)",
    r1_text: "Relativpronomen leiten Relativsätze ein. WHO (Personen), WHICH (Dinge), THAT (Personen/Dinge). Beispiel: 'Der Schüler, der hart studiert, bestand.'",
    r1_q: "Welches Relativpronomen ist korrekt?",
    r1_a: "The book which I read was interesting.",
    r1_b: "The book who I read was interesting.",
    r1_c: "The book that I read was boring.",
    r1_d: "Both A and C are correct.",

    r2_title: "Reflexive Pronomen",
    r2_text: "Reflexive Pronomen: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves. Verwende wenn Subjekt = Objekt. Beispiel: 'I taught myself.'",
    r2_q: "Welcher Satz verwendet ein reflexives Pronomen korrekt?",
    r2_a: "He gave it to myself.",
    r2_b: "She hurt herself while playing.",
    r2_c: "I like him himself.",
    r2_d: "They enjoyed ourselves at the party.",

    r3_title: "Relativpronomen (Whose)",
    r3_text: "WHOSE zeigt Besitz in Relativsätzen. Beispiel: 'Das Mädchen, dessen Buch verloren war, weinte.'",
    r3_q: "Welcher verwendet WHOSE korrekt?",
    r3_a: "The student whose test was hard complained.",
    r3_b: "The student who's test was hard complained.",
    r3_c: "The student that's book was lost.",
    r3_d: "The student whose he lost his book.",

    r4_title: "Intensive Pronomen",
    r4_text: "Intensive Pronomen betonen das Subjekt: 'I myself saw it!' oder 'Der Präsident selbst sprach.' Sie sehen wie reflexive Pronomen aus, funktionieren aber anders!",
    r4_q: "Welcher verwendet ein intensives Pronomen korrekt?",
    r4_a: "The teacher myself graded the test.",
    r4_b: "The teacher herself graded the test.",
    r4_c: "The teacher himself is tall.",
    r4_d: "Both B and C are correct.",

    r5_title: "⭐ Wiederholungsfragen",
    r5_text: "Lass uns überprüfen was du gelernt hast!",
    r5_q1: "Welches Pronomen leitet einen Satz über eine Person ein?",
    r5_op1: "Which",
    r5_op2: "That",
    r5_op3: "Who",
    r5_op4: "Whose",
    r5_q2: "Was ist der Unterschied zwischen reflexiv und intensiv?",
    r5_op5: "Kein Unterschied—gleich",
    r5_op6: "Reflexiv: Subjekt=Objekt; Intensiv: betont",
    r5_op7: "Reflexiv: nur Dinge; Intensiv: nur Personen",
    r5_op8: "Intensiv: muss einem Verb folgen",
  },
  hu: {
    gotIt: "Értem! →",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",

    r1_title: "Relatív Névmások (Who/Which/That)",
    r1_text: "A relatív névmások bevezetik a relatív záradékokat. WHO (személyek), WHICH (dolgok), THAT (személyek/dolgok). Példa: 'A diák, aki keményen tanult, sikerült.'",
    r1_q: "Melyik relatív névmás helyes?",
    r1_a: "The book which I read was interesting.",
    r1_b: "The book who I read was interesting.",
    r1_c: "The book that I read was boring.",
    r1_d: "Both A and C are correct.",

    r2_title: "Visszaható Névmások",
    r2_text: "Visszaható névmások: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves. Akkor használj amikor alany = tárgy. Példa: 'I taught myself.'",
    r2_q: "Melyik mondat használja helyesen a visszaható névmást?",
    r2_a: "He gave it to myself.",
    r2_b: "She hurt herself while playing.",
    r2_c: "I like him himself.",
    r2_d: "They enjoyed ourselves at the party.",

    r3_title: "Relatív Névmások (Whose)",
    r3_text: "WHOSE mutatja a birtoklást relatív záradékban. Példa: 'A lány, akinek a könyve elveszett, sírva fakadt.'",
    r3_q: "Melyik használja helyesen a WHOSE-t?",
    r3_a: "The student whose test was hard complained.",
    r3_b: "The student who's test was hard complained.",
    r3_c: "The student that's book was lost.",
    r3_d: "The student whose he lost his book.",

    r4_title: "Fokozó Névmások",
    r4_text: "A fokozó névmások hangsúlyozzák az alanytagot: 'I myself saw it!' vagy 'Az elnök maga beszélt.' Az visszaható névmásokhoz hasonlóan néznek ki, de másként működnek!",
    r4_q: "Melyik használja helyesen a fokozó névmást?",
    r4_a: "The teacher myself graded the test.",
    r4_b: "The teacher herself graded the test.",
    r4_c: "The teacher himself is tall.",
    r4_d: "Both B and C are correct.",

    r5_title: "⭐ Ismétlő Kérdések",
    r5_text: "Ellenőrizzük mit tanultál!",
    r5_q1: "Melyik névmás vezet be egy személyről szóló záradékot?",
    r5_op1: "Which",
    r5_op2: "That",
    r5_op3: "Who",
    r5_op4: "Whose",
    r5_q2: "Mi a különbség visszaható és fokozó név mások között?",
    r5_op5: "Nincs különbség—ugyanazok",
    r5_op6: "Visszaható: alany=tárgy; Fokozó: hangsúlyoz",
    r5_op7: "Visszaható: csak dolgok; Fokozó: csak személyek",
    r5_op8: "Fokozó: igét követnie kell",
  },
  ro: {
    gotIt: "Înțeles! →",
    correct: "Corect! ✓",
    wrong: "Nu tocmai!",

    r1_title: "Pronume Relative (Who/Which/That)",
    r1_text: "Pronumele relative introduc clauze relative. WHO (persoane), WHICH (lucruri), THAT (persoane/lucruri). Exemplu: 'Elevul care a studiat din greu a trecut.'",
    r1_q: "Care pronume relativ este corect?",
    r1_a: "The book which I read was interesting.",
    r1_b: "The book who I read was interesting.",
    r1_c: "The book that I read was boring.",
    r1_d: "Both A and C are correct.",

    r2_title: "Pronume Reflexive",
    r2_text: "Pronume reflexive: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves. Folosește când subiect = obiect. Exemplu: 'I taught myself.'",
    r2_q: "Care propoziție folosește corect un pronume reflexiv?",
    r2_a: "He gave it to myself.",
    r2_b: "She hurt herself while playing.",
    r2_c: "I like him himself.",
    r2_d: "They enjoyed ourselves at the party.",

    r3_title: "Pronume Relative (Whose)",
    r3_text: "WHOSE arată posesia în clauze relative. Exemplu: 'Fata a cărei carte a fost pierdută a plâns.'",
    r3_q: "Care folosește WHOSE corect?",
    r3_a: "The student whose test was hard complained.",
    r3_b: "The student who's test was hard complained.",
    r3_c: "The student that's book was lost.",
    r3_d: "The student whose he lost his book.",

    r4_title: "Pronume Intensive",
    r4_text: "Pronumele intensive pun accent pe subiect: 'I myself saw it!' sau 'Președintele însuși a vorbit.' Arată ca pronume reflexive dar funcționează diferit!",
    r4_q: "Care folosește corect un pronume intensiv?",
    r4_a: "The teacher myself graded the test.",
    r4_b: "The teacher herself graded the test.",
    r4_c: "The teacher himself is tall.",
    r4_d: "Both B and C are correct.",

    r5_title: "⭐ Întrebări de Repetiție",
    r5_text: "Să verificăm ce ai învățat!",
    r5_q1: "Care pronume introduce o clauză despre o persoană?",
    r5_op1: "Which",
    r5_op2: "That",
    r5_op3: "Who",
    r5_op4: "Whose",
    r5_q2: "Care este diferența între pronume reflexive și intensive?",
    r5_op5: "Fără diferență—sunt la fel",
    r5_op6: "Reflexiv: subiect=obiect; Intensiv: pune accent",
    r5_op7: "Reflexiv: doar lucruri; Intensiv: doar persoane",
    r5_op8: "Intensiv: trebuie să urmeze un verb",
  },
};

interface MCQQuestion {
  question: string;
  choices: string[];
  answer: string;
}

export default function PronounK6Explorer({ color = "#8B5CF6", onDone, lang = "en" }: Props) {
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
      { question: "r5_q1", choices: ["r5_op1", "r5_op2", "r5_op3", "r5_op4"], answer: "r5_op3" },
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
    0: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
    1: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    2: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    3: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    4: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {phase === "info" && (
        <motion.div className="bg-white/95 rounded-3xl p-8 text-center"
          style={{ background: infoBgs[round] }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <h2 className="text-2xl font-black text-slate-800 mb-4">{t[`r${round + 1}_title`] || "Pronouns"}</h2>
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
