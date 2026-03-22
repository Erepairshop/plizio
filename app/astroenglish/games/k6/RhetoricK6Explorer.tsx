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

    r1_title: "Ethos (Credibility)",
    r1_text: "Ethos persuades through credibility and authority. Example: A doctor arguing about health uses their expertise. 'As a medical professional with 20 years of experience, I...'",
    r1_q: "Which uses ETHOS?",
    r1_a: "Everyone loves ice cream, so buy this brand!",
    r1_b: "As a nutrition expert, I recommend this product.",
    r1_c: "This ice cream will make you happy!",
    r1_d: "Ice cream is delicious.",

    r2_title: "Pathos (Emotion)",
    r2_text: "Pathos persuades through emotion and personal connection. Example: 'Imagine your child's smile when they get this gift.' It appeals to feelings, not logic.",
    r2_q: "Which uses PATHOS?",
    r2_a: "Research shows 90% prefer this.",
    r2_b: "I've been using this for 5 years.",
    r2_c: "Picture families playing together, laughing without worry.",
    r2_d: "This costs $50.",

    r3_title: "Logos (Logic)",
    r3_text: "Logos persuades through facts, data, and logical reasoning. Example: 'Studies show that 95% of dentists recommend this toothpaste.' It uses evidence.",
    r3_q: "Which uses LOGOS?",
    r3_a: "Everyone will love you if you buy this!",
    r3_b: "This makes you feel powerful and confident.",
    r3_c: "Research from Harvard shows this reduces risk by 40%.",
    r3_d: "Famous celebrities use this product.",

    r4_title: "Combining Ethos, Pathos, Logos",
    r4_text: "Good arguments often mix all three. Example: 'As a coach (ethos), I understand your desire to be fit (pathos), and studies prove this method works (logos).'",
    r4_q: "Which sentence uses ETHOS + PATHOS + LOGOS?",
    r4_a: "Buy this now because it's on sale.",
    r4_b: "As a teacher, I know learning is hard, and research shows this helps.",
    r4_c: "Everyone wants to be healthy.",
    r4_d: "This product is amazing.",

    r5_title: "⭐ Review Questions",
    r5_text: "Let's check what you learned!",
    r5_q1: "Which persuades through EMOTION?",
    r5_op1: "Ethos",
    r5_op2: "Logos",
    r5_op3: "Pathos",
    r5_op4: "Rhetoric",
    r5_q2: "Which uses evidence and facts?",
    r5_op5: "Ethos",
    r5_op6: "Pathos",
    r5_op7: "Logos",
    r5_op8: "Tone",
  },
  de: {
    gotIt: "Verstanden! →",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",

    r1_title: "Ethos (Glaubwürdigkeit)",
    r1_text: "Ethos überzeugt durch Glaubwürdigkeit und Autorität. Beispiel: Ein Arzt argumentiert über Gesundheit mit Fachwissen. 'Als Mediziner mit 20 Jahren Erfahrung...'",
    r1_q: "Welcher nutzt ETHOS?",
    r1_a: "Jeder mag Eis, also kaufe diese Marke!",
    r1_b: "Als Ernährungsexperte empfehle ich dieses Produkt.",
    r1_c: "Dieses Eis macht dich glücklich!",
    r1_d: "Eis ist köstlich.",

    r2_title: "Pathos (Emotion)",
    r2_text: "Pathos überzeugt durch Emotion und persönliche Verbindung. Beispiel: 'Stell dir das Lächeln deines Kindes vor.' Es spricht Gefühle an, nicht Logik.",
    r2_q: "Welcher nutzt PATHOS?",
    r2_a: "Forschung zeigt 90% bevorzugen dieses.",
    r2_b: "Ich nutze dieses 5 Jahre.",
    r2_c: "Stell dir Familien vor, gemeinsam lachend ohne Sorge.",
    r2_d: "Dies kostet 50 Euro.",

    r3_title: "Logos (Logik)",
    r3_text: "Logos überzeugt durch Fakten, Daten und logisches Denken. Beispiel: 'Studien zeigen 95% der Zahnärzte empfehlen dies.' Es nutzt Beweise.",
    r3_q: "Welcher nutzt LOGOS?",
    r3_a: "Jeder wird dich lieben wenn du dies kaufst!",
    r3_b: "Dies macht dich stark und zuversichtlich.",
    r3_c: "Harvard-Forschung zeigt das reduziert Risiko um 40%.",
    r3_d: "Berühmte Prominente nutzen dieses Produkt.",

    r4_title: "Ethos, Pathos, Logos Kombinieren",
    r4_text: "Gute Argumente mischen oft alle drei. Beispiel: 'Als Trainer (ethos) verstehe ich dein Ziel (pathos), und Studien zeigen dies funktioniert (logos).'",
    r4_q: "Welcher nutzt ETHOS + PATHOS + LOGOS?",
    r4_a: "Kaufe dies jetzt weil es Rabatt gibt.",
    r4_b: "Als Lehrer weiß ich Lernen ist schwer, und Forschung zeigt dies hilft.",
    r4_c: "Jeder will gesund sein.",
    r4_d: "Dieses Produkt ist fantastisch.",

    r5_title: "⭐ Wiederholungsfragen",
    r5_text: "Lass uns überprüfen was du gelernt hast!",
    r5_q1: "Welcher überzeugt durch EMOTION?",
    r5_op1: "Ethos",
    r5_op2: "Logos",
    r5_op3: "Pathos",
    r5_op4: "Rhetorik",
    r5_q2: "Welcher nutzt Beweise und Fakten?",
    r5_op5: "Ethos",
    r5_op6: "Pathos",
    r5_op7: "Logos",
    r5_op8: "Ton",
  },
  hu: {
    gotIt: "Értem! →",
    correct: "Helyes! ✓",
    wrong: "Nem egészen!",

    r1_title: "Ethos (Hitelesség)",
    r1_text: "Az ethos hitelesség és tekintély segítségével persuadál. Példa: Egy orvos egészségről érvel szakértelmével. 'Mint orvos 20 éves tapasztalattal...'",
    r1_q: "Melyik használ ETHOS-t?",
    r1_a: "Mindenki szereti a fagylaltot, tehát vedd ezt a márkát!",
    r1_b: "Mint táplálkozási szakértő, ezt ajánlom.",
    r1_c: "Ez a fagylalt boldoggá tesz!",
    r1_d: "A fagylalt finom.",

    r2_title: "Pathos (Érzelem)",
    r2_text: "A pathos érzelem és személyes kapcsolat segítségével persuadál. Példa: 'Képzeld el gyermeked mosolyát.' Az érzelmi szinttel szól, nem logikával.",
    r2_q: "Melyik használ PATHOS-t?",
    r2_a: "Kutatás mutatja 90% ezt szereti.",
    r2_b: "5 éve ezt használom.",
    r2_c: "Képzeld el az családokat együtt nevetni, gondnélkül.",
    r2_d: "Ez 50 forint.",

    r3_title: "Logos (Logika)",
    r3_text: "A logos tények, adatok és logikus érvelés segítségével persuadál. Példa: 'Tanulmányok mutatják 95% fogorvos ezt ajánlja.' Bizonyítékot használ.",
    r3_q: "Melyik használ LOGOS-t?",
    r3_a: "Mindenki szeretni fog ha ezt veszed!",
    r3_b: "Ez erőssé és magabiztossá tesz.",
    r3_c: "Harvard kutatás mutatja ez 40%-kal csökkenti a kockázatot.",
    r3_d: "Híres celebek ezt a terméket használják.",

    r4_title: "Ethos, Pathos, Logos Kombinálása",
    r4_text: "Jó érvelések szokják mind a hármat keverni. Példa: 'Mint edző (ethos) értem célod (pathos), és tanulmányok mutatják ez működik (logos).'",
    r4_q: "Melyik használ ETHOS + PATHOS + LOGOS-t?",
    r4_a: "Vedd ezt most mert akción van.",
    r4_b: "Mint tanár tudom a tanulás nehéz, és kutatás mutatja ez segít.",
    r4_c: "Mindenki egészséges lenni akar.",
    r4_d: "Ez a termék nagyszerű.",

    r5_title: "⭐ Ismétlő Kérdések",
    r5_text: "Ellenőrizzük mit tanultál!",
    r5_q1: "Melyik persuadál ÉRZELEM segítségével?",
    r5_op1: "Ethos",
    r5_op2: "Logos",
    r5_op3: "Pathos",
    r5_op4: "Retorika",
    r5_q2: "Melyik használ bizonyítékot és tényeket?",
    r5_op5: "Ethos",
    r5_op6: "Pathos",
    r5_op7: "Logos",
    r5_op8: "Hang",
  },
  ro: {
    gotIt: "Înțeles! →",
    correct: "Corect! ✓",
    wrong: "Nu tocmai!",

    r1_title: "Ethos (Credibilitate)",
    r1_text: "Ethos persuadează prin credibilitate și autoritate. Exemplu: Un doctor argumentând despre sănătate folosind expertiza. 'Ca profesionist medical cu 20 ani de experiență...'",
    r1_q: "Care folosește ETHOS?",
    r1_a: "Toată lumea iubește inghetata, deci cumpără această marcă!",
    r1_b: "Ca expert în nutriție, recomand acest produs.",
    r1_c: "Această inghetata te va face fericit!",
    r1_d: "Inghetata este delicioasă.",

    r2_title: "Pathos (Emoție)",
    r2_text: "Pathos persuadează prin emoție și conexiune personală. Exemplu: 'Imaginează-ți zâmbetul copilului tău.' Apelează la sentimente, nu la logică.",
    r2_q: "Care folosește PATHOS?",
    r2_a: "Cercetarea arată 90% preferă aceasta.",
    r2_b: "Folosesc aceasta de 5 ani.",
    r2_c: "Imaginează-ți familiile jucând împreună, rând fără griji.",
    r2_d: "Aceasta costă 50 lei.",

    r3_title: "Logos (Logică)",
    r3_text: "Logos persuadează prin fapte, date și raționament logic. Exemplu: 'Studiile arată că 95% din stomatologi recomandă aceasta.' Folosește dovezi.",
    r3_q: "Care folosește LOGOS?",
    r3_a: "Toată lumea te va iubi dacă cumperi aceasta!",
    r3_b: "Aceasta te face puternic și încrezător.",
    r3_c: "Cercetarea Harvard arată aceasta reduce riscul cu 40%.",
    r3_d: "Celebritati celebre folosesc acest produs.",

    r4_title: "Combinând Ethos, Pathos, Logos",
    r4_text: "Argumentele bune adesea amestecă toate trei. Exemplu: 'Ca antrenor (ethos), înțeleg dorința ta (pathos), și studiile arată aceasta funcționează (logos).'",
    r4_q: "Care propoziție folosește ETHOS + PATHOS + LOGOS?",
    r4_a: "Cumpără aceasta acum pentru că e în ofertă.",
    r4_b: "Ca profesor, știu că învățarea e grea, și cercetarea arată aceasta ajută.",
    r4_c: "Toată lumea vrea să fie sănătoasă.",
    r4_d: "Acest produs este minunat.",

    r5_title: "⭐ Întrebări de Repetiție",
    r5_text: "Să verificăm ce ai învățat!",
    r5_q1: "Care persuadează prin EMOȚIE?",
    r5_op1: "Ethos",
    r5_op2: "Logos",
    r5_op3: "Pathos",
    r5_op4: "Retorică",
    r5_q2: "Care folosește dovezi și fapte?",
    r5_op5: "Ethos",
    r5_op6: "Pathos",
    r5_op7: "Logos",
    r5_op8: "Ton",
  },
};

interface MCQQuestion {
  question: string;
  choices: string[];
  answer: string;
}

export default function RhetoricK6Explorer({ color = "#F59E0B", onDone, lang = "en" }: Props) {
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
      { question: "r5_q1", choices: ["r5_op1", "r5_op2", "r5_op3", "r5_op4"], answer: "r5_op3" },
      { question: "r5_q2", choices: ["r5_op5", "r5_op6", "r5_op7", "r5_op8"], answer: "r5_op7" },
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
    3: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
    4: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {phase === "info" && (
        <motion.div className="bg-white/95 rounded-3xl p-8 text-center"
          style={{ background: infoBgs[round] }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <h2 className="text-2xl font-black text-slate-800 mb-4">{t[`r${round + 1}_title`] || "Rhetoric"}</h2>
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
