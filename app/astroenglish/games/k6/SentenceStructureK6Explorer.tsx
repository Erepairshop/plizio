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

    r1_title: "Periodic Sentences",
    r1_text: "A periodic sentence delays the main idea until the end for suspense. Example: 'Because she studied hard, practiced daily, and never gave up, she won the competition.'",
    r1_q: "Which is a periodic sentence?",
    r1_a: "She won because she studied hard.",
    r1_b: "Because she studied hard, practiced daily, and never gave up, she won.",
    r1_c: "She studied hard and she won.",
    r1_d: "The teacher gave an exam.",

    r2_title: "Loose Sentences",
    r2_text: "A loose sentence presents the main idea first, then adds details. Example: 'She won the competition, conquering her fears, surprising everyone, and achieving her dreams.'",
    r2_q: "Which is a loose sentence?",
    r2_a: "Before running, she stretched.",
    r2_b: "She won, surprising everyone, achieving glory, and making history.",
    r2_c: "Because she practiced, she won.",
    r2_d: "The race was long.",

    r3_title: "Parallel Structure",
    r3_text: "Use the same grammatical form for similar ideas: 'She likes running, swimming, and biking.' (NOT: 'running, swimming, and to bike.')",
    r3_q: "Which shows parallel structure?",
    r3_a: "I like to read, write, and to paint.",
    r3_b: "I like reading, writing, and painting.",
    r3_c: "I like reading, writing, and to paint.",
    r3_d: "I like read, write, and paint.",

    r4_title: "Antithesis",
    r4_text: "Antithesis contrasts opposite ideas in parallel form. Example: 'Ask not what your country can do for you; ask what you can do for your country.'",
    r4_q: "Which uses antithesis?",
    r4_a: "He was happy and sad.",
    r4_b: "To seek is human; to find is divine.",
    r4_c: "She ran quickly.",
    r4_d: "The test was hard but fair.",

    r5_title: "⭐ Review Questions",
    r5_text: "Let's check what you learned!",
    r5_q1: "What does a periodic sentence do?",
    r5_op1: "Starts with the main idea",
    r5_op2: "Delays the main idea until the end",
    r5_op3: "Uses opposite words",
    r5_op4: "Compares two ideas",
    r5_q2: "Which shows parallel structure?",
    r5_op5: "She likes to read and writing",
    r5_op6: "She likes reading and writing",
    r5_op7: "She likes reading and to write",
    r5_op8: "She likes reading and wrote",
  },
  de: {
    gotIt: "Verstanden! →",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",

    r1_title: "Periodische Sätze",
    r1_text: "Ein periodischer Satz verzögert die Hauptidee bis zum Ende. Beispiel: 'Weil sie hart studiert, täglich geübt und nie aufgegeben hat, gewann sie den Wettbewerb.'",
    r1_q: "Welcher ist ein periodischer Satz?",
    r1_a: "Sie gewann, weil sie hart studierte.",
    r1_b: "Weil sie hart studiert, täglich geübt und nie aufgegeben hat, gewann sie.",
    r1_c: "Sie studierte hart und gewann.",
    r1_d: "Der Lehrer gab eine Prüfung.",

    r2_title: "Lockere Sätze",
    r2_text: "Ein lockerer Satz präsentiert die Hauptidee zuerst, dann Details. Beispiel: 'Sie gewann, alle überraschend, Ruhm erreichend, Geschichte machend.'",
    r2_q: "Welcher ist ein lockerer Satz?",
    r2_a: "Vor dem Laufen dehnte sie.",
    r2_b: "Sie gewann, alle überraschend, Ruhm erreichend, Geschichte machend.",
    r2_c: "Weil sie übte, gewann sie.",
    r2_d: "Das Rennen war lang.",

    r3_title: "Parallele Struktur",
    r3_text: "Nutze die gleiche grammatikalische Form: 'Sie mag Laufen, Schwimmen und Radfahren.' (NICHT: 'Laufen, Schwimmen und radfahren.')",
    r3_q: "Welcher zeigt parallele Struktur?",
    r3_a: "Ich mag zu lesen, zu schreiben, und zu malen.",
    r3_b: "Ich mag Lesen, Schreiben und Malen.",
    r3_c: "Ich mag Lesen, Schreiben, und zu malen.",
    r3_d: "Ich mag lesen, schreiben, und malen.",

    r4_title: "Antithese",
    r4_text: "Antithese kontrastiert gegensätzliche Ideen in paralleler Form. Beispiel: 'Frage nicht, was dein Land für dich tun kann; frage, was du für dein Land tun kannst.'",
    r4_q: "Welcher nutzt Antithese?",
    r4_a: "Er war glücklich und traurig.",
    r4_b: "Zu suchen ist menschlich; zu finden ist göttlich.",
    r4_c: "Sie lief schnell.",
    r4_d: "Der Test war schwer aber fair.",

    r5_title: "⭐ Wiederholungsfragen",
    r5_text: "Lass uns überprüfen was du gelernt hast!",
    r5_q1: "Was macht ein periodischer Satz?",
    r5_op1: "Beginnt mit der Hauptidee",
    r5_op2: "Verzögert die Hauptidee bis zum Ende",
    r5_op3: "Nutzt gegensätzliche Wörter",
    r5_op4: "Vergleicht zwei Ideen",
    r5_q2: "Welcher zeigt parallele Struktur?",
    r5_op5: "Sie mag zu lesen und Schreiben",
    r5_op6: "Sie mag Lesen und Schreiben",
    r5_op7: "Sie mag Lesen und zu schreiben",
    r5_op8: "Sie mag Lesen und schrieb",
  },
  hu: {
    gotIt: "Értem! →",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",

    r1_title: "Periodikus Mondatok",
    r1_text: "A periodikus mondat a fő gondolatot a végéig késlelteti. Példa: 'Mivel keményen tanult, napi szinten gyakorolt és soha nem adta fel, megnyerte a versenyt.'",
    r1_q: "Melyik a periodikus mondat?",
    r1_a: "Megnyert, mert keményen tanult.",
    r1_b: "Mivel keményen tanult, napi szinten gyakorolt és soha nem adta fel, megnyert.",
    r1_c: "Keményen tanult és megnyert.",
    r1_d: "A tanár vizsgát adott.",

    r2_title: "Laza Mondatok",
    r2_text: "A laza mondat először a fő gondolatot mutatja, majd részleteket ad. Példa: 'Megnyert, mindenkit meglepve, dicsőséget elérve, történelmet írva.'",
    r2_q: "Melyik a laza mondat?",
    r2_a: "Futás előtt nyújtott.",
    r2_b: "Megnyert, mindenkit meglepve, dicsőséget elérve, történelmet írva.",
    r2_c: "Mivel gyakorolt, megnyert.",
    r2_d: "A futam hosszú volt.",

    r3_title: "Párhuzamos Szerkezet",
    r3_text: "Használj ugyanazt a nyelvtani formát: 'Szereti a futást, az úszást és a kerékpározást.' (NEM: 'futás, úszás és kerékpározni.')",
    r3_q: "Melyik mutat párhuzamos szerkezetet?",
    r3_a: "Szeretem az olvasást, az írást és festeni.",
    r3_b: "Szeretem az olvasást, az írást és a festést.",
    r3_c: "Szeretem az olvasást, az írást és festeni.",
    r3_d: "Szeretem olvasni, írni, és festeni.",

    r4_title: "Antitézis",
    r4_text: "Az antitézis ellentétes gondolatokat állít szembe párhuzamos formában. Példa: 'Ne azt kérdezd mit tehet az ország érted; azt kérdezd mit tegyél te az országért.'",
    r4_q: "Melyik használ antitézist?",
    r4_a: "Boldog és szomorú volt.",
    r4_b: "Keresni emberséges; megtalálni isteni.",
    r4_c: "Gyorsan futott.",
    r4_d: "A teszt nehéz de fair volt.",

    r5_title: "⭐ Ismétlő Kérdések",
    r5_text: "Ellenőrizzük mit tanultál!",
    r5_q1: "Mit tesz a periodikus mondat?",
    r5_op1: "A fő gondolattal kezd",
    r5_op2: "A fő gondolatot a végéig késlelteti",
    r5_op3: "Ellentétes szavakat használ",
    r5_op4: "Két gondolatot hasonlít össze",
    r5_q2: "Melyik mutat párhuzamos szerkezetet?",
    r5_op5: "Szeretem az olvasást és írni",
    r5_op6: "Szeretem az olvasást és az írást",
    r5_op7: "Szeretem az olvasást és írni",
    r5_op8: "Szeretem az olvasást és írtak",
  },
  ro: {
    gotIt: "Înțeles! →",
    correct: "Corect! ✓",
    wrong: "Nu tocmai!",

    r1_title: "Propoziții Periodice",
    r1_text: "O propoziție periodică amână idea principală până la sfârșitul. Exemplu: 'Pentru că a studiat din greu, a practicat zilnic și niciodată nu a renunțat, a câștigat competiția.'",
    r1_q: "Care este o propoziție periodică?",
    r1_a: "A câștigat pentru că a studiat din greu.",
    r1_b: "Pentru că a studiat din greu, a practicat zilnic și niciodată nu a renunțat, a câștigat.",
    r1_c: "A studiat din greu și a câștigat.",
    r1_d: "Profesorul a dat un test.",

    r2_title: "Propoziții Lejere",
    r2_text: "O propoziție lejere prezintă idea principală apoi adaugă detalii. Exemplu: 'A câștigat, surprinzând pe toți, realizând glorie, scriind istorie.'",
    r2_q: "Care este o propoziție lejera?",
    r2_a: "Înainte de alergare, a făcut stretching.",
    r2_b: "A câștigat, surprinzând pe toți, realizând glorie, scriind istorie.",
    r2_c: "Pentru că a practicat, a câștigat.",
    r2_d: "Cursa a fost lungă.",

    r3_title: "Structură Paralelă",
    r3_text: "Folosește aceeași formă gramaticală: 'Îi place alergatul, înnotul și mersul cu bicicleta.' (NU: 'alergat, înot și a merge cu bicicleta.')",
    r3_q: "Care arată structură paralelă?",
    r3_a: "Îmi place să citesc, să scriu și să pictez.",
    r3_b: "Îmi place cititul, scrierea și pictura.",
    r3_c: "Îmi place cititul, scrierea și pictatul.",
    r3_d: "Îmi place citi, scrie și picta.",

    r4_title: "Antiteza",
    r4_text: "Antiteza opune idei contrare în formă paralelă. Exemplu: 'Nu cere ce poate face țara pentru tine; cere ce poți face tu pentru țara ta.'",
    r4_q: "Care folosește antiteza?",
    r4_a: "Era fericit și trist.",
    r4_b: "A căuta este uman; a găsi este divin.",
    r4_c: "A alergat rapid.",
    r4_d: "Testul a fost greu dar corect.",

    r5_title: "⭐ Întrebări de Repetiție",
    r5_text: "Să verificăm ce ai învățat!",
    r5_q1: "Ce face o propoziție periodică?",
    r5_op1: "Începe cu idea principală",
    r5_op2: "Amână idea principală până la final",
    r5_op3: "Folosește cuvinte contrare",
    r5_op4: "Compară două idei",
    r5_q2: "Care arată structură paralelă?",
    r5_op5: "Îmi place să citesc și scrierea",
    r5_op6: "Îmi place cititul și scrierea",
    r5_op7: "Îmi place cititul și să scriu",
    r5_op8: "Îmi place cititul și a scris",
  },
};

interface MCQQuestion {
  question: string;
  choices: string[];
  answer: string;
}

export default function SentenceStructureK6Explorer({ color = "#06B6D4", onDone, lang = "en" }: Props) {
  const langCode = lang || "en";
  const t = LABELS[langCode] || LABELS.en;

  const [round, setRound] = useState(0);
  const [phase, setPhase] = useState<Phase>("info");
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);

  const questionsPerRound = useMemo(() => {
    if (round < 4) return [{ question: `r${round + 1}_q`, choices: [`r${round + 1}_a`, `r${round + 1}_b`, `r${round + 1}_c`, `r${round + 1}_d`], answer: `r${round + 1}_b` }];
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
    3: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
    4: "linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {phase === "info" && (
        <motion.div className="bg-white/95 rounded-3xl p-8 text-center"
          style={{ background: infoBgs[round] }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <h2 className="text-2xl font-black text-slate-800 mb-4">{t[`r${round + 1}_title`] || "Sentence Structure"}</h2>
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
