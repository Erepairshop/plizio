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

    r1_title: "Simple Sentences",
    r1_text: "A simple sentence has one independent clause (subject + verb). Example: 'The cat sleeps.' It expresses one complete thought.",
    r1_q: "Which is a simple sentence?",
    r1_a: "The dog runs.",
    r1_b: "The dog runs, but the cat sleeps.",
    r1_c: "Although the dog runs, the cat sleeps.",
    r1_d: "The dog, which runs fast, is happy.",

    r2_title: "Compound Sentences",
    r2_text: "A compound sentence has two independent clauses joined by a conjunction (and, but, or, so). Example: 'She studied hard, and she passed the test.'",
    r2_q: "Which is a compound sentence?",
    r2_a: "The student studied.",
    r2_b: "The student studied, and the teacher helped.",
    r2_c: "The student studied because the test was hard.",
    r2_d: "The student who studied passed.",

    r3_title: "Complex Sentences",
    r3_text: "A complex sentence has one independent clause + one or more dependent clauses. Example: 'She smiled because she won the game.'",
    r3_q: "Which is a complex sentence?",
    r3_a: "The team won.",
    r3_b: "The team won, and they celebrated.",
    r3_c: "The team won because they practiced hard.",
    r3_d: "The team won and they were happy.",

    r4_title: "Compound-Complex Sentences",
    r4_text: "These have two or more independent clauses + one or more dependent clauses. Example: 'She studied hard, and she passed the test because she prepared well.'",
    r4_q: "Which is compound-complex?",
    r4_a: "She studied hard.",
    r4_b: "She studied hard and she passed.",
    r4_c: "She studied hard because she wanted to pass.",
    r4_d: "She studied hard, and she passed because she prepared well.",

    r5_title: "⭐ Review Questions",
    r5_text: "Let's check what you learned!",
    r5_q1: "How many independent clauses does a compound sentence have?",
    r5_op1: "One",
    r5_op2: "Two",
    r5_op3: "Three",
    r5_op4: "Four",
    r5_q2: "Which shows two independent clauses?",
    r5_op5: "She ran fast because she was late.",
    r5_op6: "She ran fast, and she arrived on time.",
    r5_op7: "She ran fast, arriving on time.",
    r5_op8: "She ran, and she ran fast.",
  },
  de: {
    gotIt: "Verstanden! →",
    next: "Weiter",
    finish: "Fertig",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",

    r1_title: "Einfache Sätze",
    r1_text: "Ein einfacher Satz hat eine unabhängige Klausel (Subjekt + Verb). Beispiel: 'Die Katze schläft.' Er drückt einen Gedanken aus.",
    r1_q: "Welcher ist ein einfacher Satz?",
    r1_a: "Der Hund läuft.",
    r1_b: "Der Hund läuft, aber die Katze schläft.",
    r1_c: "Obwohl der Hund läuft, schläft die Katze.",
    r1_d: "Der Hund, der schnell läuft, ist glücklich.",

    r2_title: "Zusammengesetzte Sätze",
    r2_text: "Ein zusammengesetzter Satz hat zwei unabhängige Klauseln mit einer Konjunktion. Beispiel: 'Sie studierte hart, und sie bestand die Prüfung.'",
    r2_q: "Welcher ist zusammengesetzt?",
    r2_a: "Der Schüler studierte.",
    r2_b: "Der Schüler studierte, und der Lehrer half.",
    r2_c: "Der Schüler studierte, weil die Prüfung schwer war.",
    r2_d: "Der Schüler, der studierte, bestand.",

    r3_title: "Komplexe Sätze",
    r3_text: "Ein komplexer Satz hat eine unabhängige Klausel + abhängige Klauseln. Beispiel: 'Sie lächelte, weil sie das Spiel gewann.'",
    r3_q: "Welcher ist ein komplexer Satz?",
    r3_a: "Das Team gewann.",
    r3_b: "Das Team gewann, und sie feierten.",
    r3_c: "Das Team gewann, weil sie hart trainierten.",
    r3_d: "Das Team gewann und sie waren glücklich.",

    r4_title: "Zusammengesetzt-komplexe Sätze",
    r4_text: "Diese haben zwei+ unabhängige Klauseln + abhängige Klauseln. Beispiel: 'Sie studierte hart, und sie bestand, weil sie sich vorbereitete.'",
    r4_q: "Welcher ist zusammengesetzt-komplex?",
    r4_a: "Sie studierte hart.",
    r4_b: "Sie studierte hart und sie bestand.",
    r4_c: "Sie studierte hart, weil sie bestehen wollte.",
    r4_d: "Sie studierte hart, und sie bestand, weil sie sich vorbereitete.",

    r5_title: "⭐ Wiederholungsfragen",
    r5_text: "Lass uns überprüfen was du gelernt hast!",
    r5_q1: "Wie viele unabhängige Klauseln hat ein zusammengesetzter Satz?",
    r5_op1: "Eine",
    r5_op2: "Zwei",
    r5_op3: "Drei",
    r5_op4: "Vier",
    r5_q2: "Welcher zeigt zwei unabhängige Klauseln?",
    r5_op5: "Sie lief schnell, weil sie spät war.",
    r5_op6: "Sie lief schnell, und sie kam rechtzeitig an.",
    r5_op7: "Sie lief schnell, um rechtzeitig anzukommen.",
    r5_op8: "Sie lief, und sie lief schnell.",
  },
  hu: {
    gotIt: "Értem! →",
    next: "Tovább",
    finish: "Kész",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",

    r1_title: "Egyszerű Mondatok",
    r1_text: "Az egyszerű mondat egy független záradékból áll (alany + ige). Példa: 'A macska alszik.' Egy gondolatot fejez ki.",
    r1_q: "Melyik az egyszerű mondat?",
    r1_a: "A kutya fut.",
    r1_b: "A kutya fut, de a macska alszik.",
    r1_c: "Bár a kutya fut, a macska alszik.",
    r1_d: "A kutya, amely gyorsan fut, boldog.",

    r2_title: "Összetett Mondatok",
    r2_text: "Az összetett mondat két független záradékot tartalmaz kötőszóval. Példa: 'Keményen tanult, és sikeresen vizsgázott.'",
    r2_q: "Melyik az összetett mondat?",
    r2_a: "A diák tanult.",
    r2_b: "A diák tanult, és a tanár segített.",
    r2_c: "A diák tanult, mert nehéz volt a vizsga.",
    r2_d: "A diák, aki tanult, sikerült.",

    r3_title: "Bonyolult Mondatok",
    r3_text: "A bonyolult mondatnak egy független záradéka van + egy vagy több függő záradék. Példa: 'Mosolygott, mert megnyerte a játékot.'",
    r3_q: "Melyik a bonyolult mondat?",
    r3_a: "A csapat nyert.",
    r3_b: "A csapat nyert, és ünnepeltek.",
    r3_c: "A csapat nyert, mert keményen edzett.",
    r3_d: "A csapat nyert és boldogok voltak.",

    r4_title: "Összetett-Bonyolult Mondatok",
    r4_text: "Ezek két+ független záradékot + függő záradékokat tartalmaznak. Példa: 'Keményen tanult, és sikerült, mert készült.'",
    r4_q: "Melyik összetett-bonyolult?",
    r4_a: "Keményen tanult.",
    r4_b: "Keményen tanult és sikerült.",
    r4_c: "Keményen tanult, mert sikerülni akart.",
    r4_d: "Keményen tanult, és sikerült, mert készült.",

    r5_title: "⭐ Ismétlő Kérdések",
    r5_text: "Ellenőrizzük mit tanultál!",
    r5_q1: "Hány független záradéka van az összetett mondatnak?",
    r5_op1: "Egy",
    r5_op2: "Kettő",
    r5_op3: "Három",
    r5_op4: "Négy",
    r5_q2: "Melyik mutat két független záradékot?",
    r5_op5: "Gyorsan futott, mert késett.",
    r5_op6: "Gyorsan futott, és időben érkezett.",
    r5_op7: "Gyorsan futott, hogy időben érjen.",
    r5_op8: "Futott, és gyorsan futott.",
  },
  ro: {
    gotIt: "Înțeles! →",
    next: "Următorul",
    finish: "Gata",
    correct: "Corect! ✓",
    wrong: "Nu tocmai!",

    r1_title: "Propoziții Simple",
    r1_text: "O propoziție simplă are o clauză independentă (subiect + verb). Exemplu: 'Pisica doarme.' Exprimă un gând complet.",
    r1_q: "Care este o propoziție simplă?",
    r1_a: "Câinele aleargă.",
    r1_b: "Câinele aleargă, dar pisica doarme.",
    r1_c: "Deși câinele aleargă, pisica doarme.",
    r1_d: "Câinele, care aleargă repede, este fericit.",

    r2_title: "Propoziții Compuse",
    r2_text: "O propoziție compusă are două clauze independente cu o conjuncție. Exemplu: 'A studiat din greu, și a trecut testul.'",
    r2_q: "Care este o propoziție compusă?",
    r2_a: "Elevul a studiat.",
    r2_b: "Elevul a studiat, și profesorul a ajutat.",
    r2_c: "Elevul a studiat pentru că testul era greu.",
    r2_d: "Elevul care a studiat a trecut.",

    r3_title: "Propoziții Complexe",
    r3_text: "O propoziție complexă are o clauză independentă + clauze dependente. Exemplu: 'A zâmbit pentru că a câștigat jocul.'",
    r3_q: "Care este o propoziție complexă?",
    r3_a: "Echipa a câștigat.",
    r3_b: "Echipa a câștigat, și au sărbătorit.",
    r3_c: "Echipa a câștigat pentru că au antrenat din greu.",
    r3_d: "Echipa a câștigat și au fost fericiți.",

    r4_title: "Propoziții Compus-Complexe",
    r4_text: "Acestea au două+ clauze independente + clauze dependente. Exemplu: 'A studiat din greu, și a trecut pentru că s-a pregătit.'",
    r4_q: "Care este compus-complexă?",
    r4_a: "A studiat din greu.",
    r4_b: "A studiat din greu și a trecut.",
    r4_c: "A studiat din greu pentru că voia să treacă.",
    r4_d: "A studiat din greu, și a trecut pentru că s-a pregătit.",

    r5_title: "⭐ Întrebări de Repetiție",
    r5_text: "Să verificăm ce ai învățat!",
    r5_q1: "Câte clauze independente are o propoziție compusă?",
    r5_op1: "Una",
    r5_op2: "Două",
    r5_op3: "Trei",
    r5_op4: "Patru",
    r5_q2: "Care arată două clauze independente?",
    r5_op5: "A alergat repede pentru că era târziu.",
    r5_op6: "A alergat repede, și a ajuns la timp.",
    r5_op7: "A alergat repede, ca să ajungă la timp.",
    r5_op8: "A alergat, și a alergat repede.",
  },
};

interface MCQQuestion {
  question: string;
  choices: string[];
  answer: string;
}

export default function SentenceK5Explorer({ color = "#06B6D4", onDone, lang = "en" }: Props) {
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
    0: "linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)",
    1: "linear-gradient(135deg, #fef08a 0%, #fde047 100%)",
    2: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
    3: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)",
    4: "linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {phase === "info" && (
        <motion.div className="bg-white/95 rounded-3xl p-8 text-center"
          style={{ background: infoBgs[round] }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <h2 className="text-2xl font-black text-slate-800 mb-4">{t[`r${round + 1}_title`] || "Sentence Types"}</h2>
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
