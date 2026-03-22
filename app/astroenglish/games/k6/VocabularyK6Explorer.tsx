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

    r1_title: "Connotation vs. Denotation",
    r1_text: "Denotation is the literal meaning. Connotation is the emotional feeling. 'Cheap' (negative) vs. 'economical' (positive) mean similar things but feel different.",
    r1_q: "Which word has a POSITIVE connotation?",
    r1_a: "Stubborn",
    r1_b: "Determined",
    r1_c: "Lazy",
    r1_d: "Reckless",

    r2_title: "Formal vs. Informal Register",
    r2_text: "Register is the level of formality. Informal: 'Hey!' Formal: 'Hello.' Choose the right register for your audience and situation.",
    r2_q: "Which is FORMAL English?",
    r2_a: "Yo, what's up?",
    r2_b: "I regret to inform you...",
    r2_c: "How's it going?",
    r2_d: "Wassup?",

    r3_title: "Synonyms with Different Connotations",
    r3_text: "Similar words can have different emotional colors. 'Assertive' (good), 'aggressive' (bad), 'pushy' (worse). All mean similar but feel different.",
    r3_q: "Which pair are SYNONYMS?",
    r3_a: "Happy and sad",
    r3_b: "Run and sprint",
    r3_c: "Hot and cold",
    r3_d: "Big and tiny",

    r4_title: "Word Choice Matters",
    r4_text: "The right word can change how people understand you. 'Mistake' (neutral) vs. 'error' (technical) vs. 'blunder' (serious). Same idea, different tone.",
    r4_q: "Which is the MOST NEGATIVE?",
    r4_a: "Question",
    r4_b: "Challenge",
    r4_c: "Dispute",
    r4_d: "Ask",

    r5_title: "⭐ Review Questions",
    r5_text: "Let's check what you learned!",
    r5_q1: "What's the emotional feeling of a word called?",
    r5_op1: "Denotation",
    r5_op2: "Connotation",
    r5_op3: "Register",
    r5_op4: "Synonym",
    r5_q2: "Which register is appropriate for a job interview?",
    r5_op5: "Very informal",
    r5_op6: "Formal",
    r5_op7: "Slang",
    r5_op8: "Casual",
  },
  de: {
    gotIt: "Verstanden! →",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",

    r1_title: "Konnotation vs. Denotation",
    r1_text: "Denotation ist die wörtliche Bedeutung. Konnotation ist das emotionale Gefühl. 'Billig' (negativ) vs. 'wirtschaftlich' (positiv) bedeuten Ähnliches, fühlen sich aber anders an.",
    r1_q: "Welches Wort hat eine POSITIVE Konnotation?",
    r1_a: "Stur",
    r1_b: "Entschlossen",
    r1_c: "Faul",
    r1_d: "Leichtfertig",

    r2_title: "Formales vs. Informales Register",
    r2_text: "Register ist die Formalitätsstufe. Informel: 'Hey!' Formal: 'Hallo.' Wähle das richtige Register für dein Publikum.",
    r2_q: "Welches ist FORMALES Englisch?",
    r2_a: "Yo, what's up?",
    r2_b: "I regret to inform you...",
    r2_c: "How's it going?",
    r2_d: "Wassup?",

    r3_title: "Synonyme mit verschiedenen Konnotationen",
    r3_text: "Ähnliche Wörter können unterschiedliche emotionale Farben haben. 'Entschlossen' (gut), 'aggressiv' (schlecht). Ähnliche Bedeutung, unterschiedliches Gefühl.",
    r3_q: "Welches Paar sind SYNONYME?",
    r3_a: "Glücklich und traurig",
    r3_b: "Laufen und sprinten",
    r3_c: "Heiß und kalt",
    r3_d: "Groß und winzig",

    r4_title: "Wortschatz ist wichtig",
    r4_text: "Das richtige Wort kann ändern, wie Leute dich verstehen. 'Fehler' (neutral) vs. 'Irrtum' (technisch). Ähnliche Idee, unterschiedlicher Ton.",
    r4_q: "Welches ist am NEGATIVSTEN?",
    r4_a: "Frage",
    r4_b: "Herausforderung",
    r4_c: "Bestreitung",
    r4_d: "Fragen",

    r5_title: "⭐ Wiederholungsfragen",
    r5_text: "Lass uns überprüfen was du gelernt hast!",
    r5_q1: "Wie heißt das emotionale Gefühl eines Wortes?",
    r5_op1: "Denotation",
    r5_op2: "Konnotation",
    r5_op3: "Register",
    r5_op4: "Synonym",
    r5_q2: "Welches Register ist für ein Vorstellungsgespräch geeignet?",
    r5_op5: "Sehr informell",
    r5_op6: "Formal",
    r5_op7: "Slang",
    r5_op8: "Lässig",
  },
  hu: {
    gotIt: "Értem! →",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",

    r1_title: "Konnotáció vs. Denotáció",
    r1_text: "Denotáció az alapjelentés. Konnotáció az érzelmi kép. 'Olcsó' (negatív) vs. 'gazdaságos' (pozitív) hasonlóak, de másként érzik.",
    r1_q: "Melyik szónak van POZITÍV konnotációja?",
    r1_a: "Eigensinnig",
    r1_b: "Elszánt",
    r1_c: "Lusta",
    r1_d: "Meggondolatlan",

    r2_title: "Formális vs. Informális Regiszter",
    r2_text: "A regiszter a formalitás szintje. Informális: 'Szia!' Formális: 'Jó napot.' Válaszd az megfelelőt a közönségnek és helyzetnek.",
    r2_q: "Melyik FORMÁLIS angol?",
    r2_a: "Yo, what's up?",
    r2_b: "I regret to inform you...",
    r2_c: "How's it going?",
    r2_d: "Wassup?",

    r3_title: "Szinonimák Eltérő Konnotációkkal",
    r3_text: "Hasonló szavak eltérő érzelmi színűek lehetnek. 'Határozottan' (jó), 'agresszíven' (rossz). Hasonló tartalom, más hangulat.",
    r3_q: "Melyik pár SZINONIMA?",
    r3_a: "Boldog és szomorú",
    r3_b: "Fut és sprintez",
    r3_c: "Meleg és hideg",
    r3_d: "Nagy és apró",

    r4_title: "A Szóválasztás Számít",
    r4_text: "A helyes szó megváltoztathatja, hogyan értenek meg. 'Hiba' (semleges) vs. 'tévedés' (technikai). Hasonló gondolat, más tónus.",
    r4_q: "Melyik a LEGNEGATÍVabb?",
    r4_a: "Kérdés",
    r4_b: "Kihívás",
    r4_c: "Vitatás",
    r4_d: "Megkérdez",

    r5_title: "⭐ Ismétlő Kérdések",
    r5_text: "Ellenőrizzük mit tanultál!",
    r5_q1: "Mi a szó érzelmi képe?",
    r5_op1: "Denotáció",
    r5_op2: "Konnotáció",
    r5_op3: "Regiszter",
    r5_op4: "Szinonima",
    r5_q2: "Melyik regiszter járulékos munkainterjúhoz?",
    r5_op5: "Nagyon informális",
    r5_op6: "Formális",
    r5_op7: "Szleng",
    r5_op8: "Laza",
  },
  ro: {
    gotIt: "Înțeles! →",
    correct: "Corect! ✓",
    wrong: "Nu tocmai!",

    r1_title: "Conotație vs. Denotație",
    r1_text: "Denotație este sensul literal. Conotație este sentimentul emoțional. 'Ieftin' (negativ) vs. 'economic' (pozitiv) sunt asemănătoare dar simțite diferit.",
    r1_q: "Care cuvânt are o conotație POZITIVĂ?",
    r1_a: "Încăpățânat",
    r1_b: "Hotărât",
    r1_c: "Leneș",
    r1_d: "Nechibzuit",

    r2_title: "Registru Formal vs. Informal",
    r2_text: "Registrul este nivelul de formalitate. Informal: 'Hei!' Formal: 'Salut.' Alege registrul corect pentru publicul și situația ta.",
    r2_q: "Care este engleza FORMALĂ?",
    r2_a: "Yo, what's up?",
    r2_b: "I regret to inform you...",
    r2_c: "How's it going?",
    r2_d: "Wassup?",

    r3_title: "Sinonime cu Conotații Diferite",
    r3_text: "Cuvinte asemănătoare pot avea culori emoționale diferite. 'Hotărât' (bun), 'agresiv' (rău). Sens asemănător, sentiment diferit.",
    r3_q: "Care pereche sunt SINONIME?",
    r3_a: "Fericit și trist",
    r3_b: "Aleargă și sprinta",
    r3_c: "Cald și rece",
    r3_d: "Mare și mic",

    r4_title: "Alegerea Cuvintelor Contează",
    r4_text: "Cuvântul corect poate schimba cum te înțeleg. 'Greșeală' (neutru) vs. 'eroare' (tehnică). Idee asemănătoare, ton diferit.",
    r4_q: "Care este cea mai NEGATIVĂ?",
    r4_a: "Întrebare",
    r4_b: "Provocare",
    r4_c: "Dispută",
    r4_d: "Întreba",

    r5_title: "⭐ Întrebări de Repetiție",
    r5_text: "Să verificăm ce ai învățat!",
    r5_q1: "Cum se numește sentimentul emoțional al unui cuvânt?",
    r5_op1: "Denotație",
    r5_op2: "Conotație",
    r5_op3: "Registru",
    r5_op4: "Sinonim",
    r5_q2: "Care registru este corespunzător unui interviu de angajare?",
    r5_op5: "Foarte informal",
    r5_op6: "Formal",
    r5_op7: "Argou",
    r5_op8: "Casual",
  },
};

interface MCQQuestion {
  question: string;
  choices: string[];
  answer: string;
}

export default function VocabularyK6Explorer({ color = "#EF4444", onDone, lang = "en" }: Props) {
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
    0: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
    1: "linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%)",
    2: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    3: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
    4: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {phase === "info" && (
        <motion.div className="bg-white/95 rounded-3xl p-8 text-center"
          style={{ background: infoBgs[round] }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <h2 className="text-2xl font-black text-slate-800 mb-4">{t[`r${round + 1}_title`] || "Vocabulary"}</h2>
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
