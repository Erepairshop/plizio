"use client";

import React, { useState, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MCQQuestion {
  question: string;
  choices: string[];
  answer: string;
}

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

    r1_title: "Coordinating Conjunctions",
    r1_text: "Coordinating conjunctions connect equal ideas using FANBOYS: For, And, Nor, But, Or, Yet, So. Example: 'She wanted to go swimming, but it was raining.'",
    r1_q: "Which coordinating conjunction means 'however'?",
    r1_a: "But",
    r1_b: "And",
    r1_c: "So",
    r1_d: "For",

    r2_title: "Subordinating Conjunctions",
    r2_text: "Subordinating conjunctions introduce dependent clauses: because, although, when, since, if, unless, while. Example: 'She studied hard because the test was tomorrow.'",
    r2_q: "Which subordinating conjunction shows a TIME relationship?",
    r2_a: "When",
    r2_b: "Because",
    r2_c: "Although",
    r2_d: "Unless",

    r3_title: "Using But vs. Yet",
    r3_text: "'But' is common and casual. 'Yet' is more formal and literary. Both show contrast. Example: 'He was tired, yet he continued working.'",
    r3_q: "Which is more formal?",
    r3_a: "Yet",
    r3_b: "But",
    r3_c: "Both are equal",
    r3_d: "Neither",

    r4_title: "Because vs. Since",
    r4_text: "'Because' gives the reason directly. 'Since' can mean 'because' OR 'from that time until now'. Example: 'Since you're here, let's start.'",
    r4_q: "What TWO meanings can 'since' have?",
    r4_a: "Reason OR time",
    r4_b: "Only reason",
    r4_c: "Only time",
    r4_d: "Contrast",

    r5_title: "⭐ Review Questions",
    r5_text: "Let's check what you learned!",
    r5_q1: "Choose the best conjunction: 'I want pizza __ I'm also hungry for tacos.'",
    r5_op1: "because",
    r5_op2: "and",
    r5_op3: "although",
    r5_op4: "when",
    r5_q2: "Which is a subordinating conjunction?",
    r5_op5: "But",
    r5_op6: "Although",
    r5_op7: "Yet",
    r5_op8: "Or",
  },
  de: {
    gotIt: "Verstanden! →",
    next: "Weiter",
    finish: "Fertig",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",

    r1_title: "Nebenordnende Konjunktionen",
    r1_text: "Nebenordnende Konjunktionen verbinden gleichwertige Ideen: und, oder, aber, weil, denn. Beispiel: 'Sie wollte schwimmen, aber es regnete.'",
    r1_q: "Welche Konjunktion zeigt einen Grund?",
    r1_a: "Denn",
    r1_b: "Und",
    r1_c: "Aber",
    r1_d: "Oder",

    r2_title: "Unterordnende Konjunktionen",
    r2_text: "Unterordnende Konjunktionen leiten Nebensätze ein: weil, obwohl, wenn, während, seit. Beispiel: 'Sie studierte hart, weil der Test morgen war.'",
    r2_q: "Welche Konjunktion zeigt eine ZEIT-Beziehung?",
    r2_a: "Während",
    r2_b: "Weil",
    r2_c: "Obwohl",
    r2_d: "Wenn",

    r3_title: "Aber vs. Doch",
    r3_text: "'Aber' ist casual. 'Doch' ist formaler. Beide zeigen Gegensatz. Beispiel: 'Er war müde, doch er arbeitet weiter.'",
    r3_q: "Welche ist formaler?",
    r3_a: "Doch",
    r3_b: "Aber",
    r3_c: "Beide sind gleich",
    r3_d: "Keine",

    r4_title: "Weil vs. Da",
    r4_text: "'Weil' gibt den Grund direkt. 'Da' kann 'weil' bedeuten ODER 'von dort an'. Beispiel: 'Da du hier bist, lass uns starten.'",
    r4_q: "Welche ZWEI Bedeutungen hat 'da'?",
    r4_a: "Grund ODER Zeit",
    r4_b: "Nur Grund",
    r4_c: "Nur Zeit",
    r4_d: "Gegensatz",

    r5_title: "⭐ Wiederholungsfragen",
    r5_text: "Lass uns überprüfen was du gelernt hast!",
    r5_q1: "Wähle die beste Konjunktion: 'Ich will Pizza __ ich bin auch hungrig nach Tacos.'",
    r5_op1: "weil",
    r5_op2: "und",
    r5_op3: "obwohl",
    r5_op4: "wenn",
    r5_q2: "Welche ist eine unterordnende Konjunktion?",
    r5_op5: "Aber",
    r5_op6: "Obwohl",
    r5_op7: "Und",
    r5_op8: "Oder",
  },
  hu: {
    gotIt: "Értem! →",
    next: "Tovább",
    finish: "Kész",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",

    r1_title: "Mellérendelő Kötőszavak",
    r1_text: "A mellérendelő kötőszavak egyenlő értékű ötleteket kapcsolnak: és, vagy, de, mert, mivel. Példa: 'Úszni akart, de esett az eső.'",
    r1_q: "Melyik kötőszó mutat OKOT?",
    r1_a: "Mert",
    r1_b: "És",
    r1_c: "De",
    r1_d: "Vagy",

    r2_title: "Alárendelő Kötőszavak",
    r2_text: "Az alárendelő kötőszavak mellékmondatokat vezetnek be: mert, bár, amikor, mivel, ha. Példa: 'Keményen tanult, mert holnap vizsga volt.'",
    r2_q: "Melyik kötőszó mutat IDŐ-kapcsolatot?",
    r2_a: "Amikor",
    r2_b: "Mert",
    r2_c: "Bár",
    r2_d: "Ha",

    r3_title: "De vs. Azonban",
    r3_text: "'De' közönséges. 'Azonban' formai. Mindkettő ellentétet mutat. Példa: 'Fáradt volt, azonban dolgozott tovább.'",
    r3_q: "Melyik formai?",
    r3_a: "Azonban",
    r3_b: "De",
    r3_c: "Mindkettő egyforma",
    r3_d: "Egyik sem",

    r4_title: "Mert vs. Mivel",
    r4_text: "'Mert' közvetlenül adja az okot. 'Mivel' lehet 'mert' VAGY 'attól az időtől kezdve'. Példa: 'Mivel itt vagy, kezdjük el.'",
    r4_q: "Mely KÉT jelentése lehet a 'mivel'-nek?",
    r4_a: "Ok VAGY idő",
    r4_b: "Csak ok",
    r4_c: "Csak idő",
    r4_d: "Ellentét",

    r5_title: "⭐ Ismétlő Kérdések",
    r5_text: "Ellenőrizzük mit tanultál!",
    r5_q1: "Válassz: 'Pizza akarok __ szendvicset is akarok.'",
    r5_op1: "mert",
    r5_op2: "és",
    r5_op3: "bár",
    r5_op4: "amikor",
    r5_q2: "Melyik alárendelő kötőszó?",
    r5_op5: "De",
    r5_op6: "Bár",
    r5_op7: "Vagy",
    r5_op8: "Azonban",
  },
  ro: {
    gotIt: "Înțeles! →",
    next: "Următorul",
    finish: "Gata",
    correct: "Corect! ✓",
    wrong: "Nu tocmai!",

    r1_title: "Conjuncții Coordonatoare",
    r1_text: "Conjuncții coordonatoare conectează idei egale: și, sau, dar, pentru că, deoarece. Exemplu: 'Vroia să înoate, dar ploua.'",
    r1_q: "Care conjuncție arată un MOTIV?",
    r1_a: "Pentru că",
    r1_b: "Și",
    r1_c: "Dar",
    r1_d: "Sau",

    r2_title: "Conjuncții Subordonate",
    r2_text: "Conjuncții subordonate introduc clauze dependente: pentru că, deși, când, dacă, în timp ce. Exemplu: 'A studiat din greu pentru că testul era mâine.'",
    r2_q: "Care conjuncție arată o relație de TIMP?",
    r2_a: "Când",
    r2_b: "Pentru că",
    r2_c: "Deși",
    r2_d: "Dacă",

    r3_title: "Dar vs. Totuși",
    r3_text: "'Dar' este casual. 'Totuși' este formal. Amândouă arată contrast. Exemplu: 'Era obosit, totuși a continuat.'",
    r3_q: "Care este mai formal?",
    r3_a: "Totuși",
    r3_b: "Dar",
    r3_c: "Amândouă sunt egale",
    r3_d: "Niciunul",

    r4_title: "Pentru că vs. Fiindcă",
    r4_text: "'Pentru că' dă motivul direct. 'Fiindcă' poate înseamna 'pentru că' SAU 'din acel timp'. Exemplu: 'Fiindcă ești aici, să începem.'",
    r4_q: "Care DOUĂ sensuri are 'fiindcă'?",
    r4_a: "Motiv SAU timp",
    r4_b: "Doar motiv",
    r4_c: "Doar timp",
    r4_d: "Contrast",

    r5_title: "⭐ Întrebări de Repetiție",
    r5_text: "Să verificăm ce ai învățat!",
    r5_q1: "Alege: 'Vreau pizza __ vreau și sandwich.'",
    r5_op1: "pentru că",
    r5_op2: "și",
    r5_op3: "deși",
    r5_op4: "când",
    r5_q2: "Care este o conjuncție subordonată?",
    r5_op5: "Dar",
    r5_op6: "Deși",
    r5_op7: "Sau",
    r5_op8: "Și",
  },
};

interface Props {
  color?: string;
  onDone?: (score: number, total: number) => void;
  lang?: Lang;
}

export default function ConjunctionExplorer({ color = "#A78BFA", onDone, lang = "en" }: Props) {
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
          <h2 className="text-2xl font-black text-slate-800 mb-4">{t[`r${round + 1}_title`] || "Conjunctions"}</h2>
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
            <p className="text-xl font-bold text-center mb-6 text-slate-800">{t[questionsPerRound[0].question] || ""}</p>
            <div className="grid grid-cols-1 gap-3">
              {questionsPerRound[0].choices.map((ch) => (
                <motion.button
                  key={ch}
                  onClick={() => handleAnswer(ch)}
                  className={`py-4 px-4 rounded-2xl font-bold text-base transition-all border-2 ${
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
