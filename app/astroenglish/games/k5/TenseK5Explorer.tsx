"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "info" | "question";
type Lang = "en" | "de" | "hu" | "ro";
interface Props { color?: string; onDone?: (score: number, total: number) => void; lang?: Lang; }

const LABELS: Record<string, Record<string, string>> = {
  en: {
    gotIt: "Got it! →", next: "Next", finish: "Finish", correct: "Correct! ✓", wrong: "Not quite!",
    r1_title: "Present Perfect",
    r1_text: "Present Perfect = have/has + past participle. Shows action starting in the past and continuing/affecting now. Example: 'I have studied French for 3 years.'",
    r1_q: "Which is present perfect?",
    r1_a: "I have eaten", r1_b: "I eat", r1_c: "I ate", r1_d: "I will eat",
    r2_title: "Past Continuous",
    r2_text: "Past Continuous = was/were + -ing. Shows action happening at a specific time in the past. Example: 'She was reading when I called.'",
    r2_q: "Which is past continuous?",
    r2_a: "She was reading", r2_b: "She reads", r2_c: "She read", r2_d: "She will read",
    r3_title: "Present Perfect vs. Simple Past",
    r3_text: "Present Perfect: 'I have lived here for 5 years' (still here). Simple Past: 'I lived in Paris for 2 years' (not anymore). Different focus!",
    r3_q: "Use present perfect for ___?",
    r3_a: "Action from past to now", r3_b: "Completed past action", r3_c: "Future plan", r3_d: "Present habit",
    r4_title: "Past Continuous Interrupted",
    r4_text: "Past Continuous can be interrupted by simple past: 'I was sleeping when the phone rang.' Longer action (was sleeping) interrupted by shorter action (rang).",
    r4_q: "Which shows interruption?",
    r4_a: "I was studying + he arrived", r4_b: "I studied", r4_c: "I study", r4_d: "I will study",
    r5_title: "⭐ Review",
    r5_text: "Let's check what you learned!",
    r5_q1: "Choose: 'I ___ French for 5 years.'",
    r5_op1: "have studied", r5_op2: "studied", r5_op3: "study", r5_op4: "will study",
    r5_q2: "Which shows an interrupted action?",
    r5_op5: "He reads", r5_op6: "He was reading + she called", r5_op7: "He will read", r5_op8: "He reads daily",
  },
  de: {
    gotIt: "Verstanden! →", next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz!",
    r1_title: "Present Perfect",
    r1_text: "Present Perfect (Perfekt) = have/has + Partizip. Zeigt Handlung von Vergangenheit bis jetzt. Beispiel: 'Ich habe 3 Jahre Französisch gelernt.'",
    r1_q: "Welches ist Present Perfect?",
    r1_a: "Ich habe gegessen", r1_b: "Ich esse", r1_c: "Ich aß", r1_d: "Ich werde essen",
    r2_title: "Vergangenheit durchgehend",
    r2_text: "Past Continuous (Präteritum Progressiv) = war + -ing. Zeigt Handlung zu bestimmtem Zeitpunkt. Beispiel: 'Sie las, als ich anrief.'",
    r2_q: "Welches zeigt durchgehende Vergangenheit?",
    r2_a: "Sie war am Lesen", r2_b: "Sie liest", r2_c: "Sie las", r2_d: "Sie wird lesen",
    r3_title: "Perfect vs. Simple Past",
    r3_text: "Perfect: 'Ich lebe hier 5 Jahre' (noch da). Simple Past: 'Ich wohnte in Paris 2 Jahre' (nicht mehr). Unterschiedlicher Fokus!",
    r3_q: "Benutze Present Perfect für ___?",
    r3_a: "Handlung bis jetzt", r3_b: "Vergangenheit beendet", r3_c: "Zukünftiges Plan", r3_d: "Gegenwärtige Gewohnheit",
    r4_title: "Unterbrochene Vergangenheit",
    r4_text: "Durchgehend kann unterbrochen werden: 'Ich schlief, als das Telefon klingelte.' Längere Handlung (schlief) unterbrochen durch kürzere (klingelte).",
    r4_q: "Welche zeigt Unterbrechung?",
    r4_a: "Ich studierte + er kam", r4_b: "Ich studierte", r4_c: "Ich studiere", r4_d: "Ich werde studieren",
    r5_title: "⭐ Wiederholung",
    r5_text: "Lass uns überprüfen was du gelernt hast!",
    r5_q1: "Wähle: 'Ich ___ 5 Jahre Deutsch.'",
    r5_op1: "habe gelernt", r5_op2: "lernte", r5_op3: "lerne", r5_op4: "werde lernen",
    r5_q2: "Welches zeigt unterbrochene Handlung?",
    r5_op5: "Er liest", r5_op6: "Er las + sie kam", r5_op7: "Er wird lesen", r5_op8: "Er liest täglich",
  },
  hu: {
    gotIt: "Értem! →", next: "Tovább", finish: "Kész", correct: "Helyes! ✓", wrong: "Nem egészen!",
    r1_title: "Present Perfect",
    r1_text: "Present Perfect (Befejezetlen múlt) = have/has + múlt részesülő. Múltban kezdődött és most is folyik. Példa: '3 éve tanulom a franciát.'",
    r1_q: "Melyik Present Perfect?",
    r1_a: "Ettem", r1_b: "Eszem", r1_c: "Ettelem", r1_d: "Eszem majd",
    r2_title: "Past Continuous",
    r2_text: "Past Continuous (Múlt folyamatos) = was/were + -ing. Múltban történő folyamatot mutat. Példa: 'Olvasott, amikor telefonáltam.'",
    r2_q: "Melyik Past Continuous?",
    r2_a: "Olvasott éppen", r2_b: "Olvas", r2_c: "Olvasott", r2_d: "Olvasni fog",
    r3_title: "Perfect vs. Simple Past",
    r3_text: "Perfect: '5 éve élek itt' (még itt). Simple Past: '2 évet laktam Párizsban' (már nem). Más a hangsúly!",
    r3_q: "Perfect-et használj ___?",
    r3_a: "Múltból jelenig", r3_b: "Befejezett múlt", r3_c: "Jövőbeli terv", r3_d: "Jelenlegi szokás",
    r4_title: "Megszakított Past Continuous",
    r4_text: "Past Continuous lehet unterbricht: 'Aludtam, amikor csengett a telefon.' Hosszabb cselekmény (aludtam) rövid által (csengett).",
    r4_q: "Melyik mutat szakítást?",
    r4_a: "Tanultam + érkezett", r4_b: "Tanultam", r4_c: "Tanulok", r4_d: "Tanulni fogok",
    r5_title: "⭐ Ismétlés",
    r5_text: "Ellenőrizzük mit tanultál!",
    r5_q1: "Válassz: '5 éve ___ a magyart.'",
    r5_op1: "tanulom", r5_op2: "tanultam", r5_op3: "tanulok", r5_op4: "tanulni fogom",
    r5_q2: "Melyik mutat szakított cselekmét?",
    r5_op5: "Olvas", r5_op6: "Olvasott + jött", r5_op7: "Olvasni fog", r5_op8: "Napi olvas",
  },
  ro: {
    gotIt: "Înțeles! →", next: "Următorul", finish: "Gata", correct: "Corect! ✓", wrong: "Nu tocmai!",
    r1_title: "Perfect Prezent",
    r1_text: "Perfect Prezent = have/has + participiu. Acțiune din trecut care durează/afectează prezentul. Exemplu: 'Am studiat franceză 3 ani.'",
    r1_q: "Care este Perfect Prezent?",
    r1_a: "Am mâncat", r1_b: "Mănânc", r1_c: "Am mâncat", r1_d: "Voi mânca",
    r2_title: "Trecut Continuu",
    r2_text: "Trecut Continuu = was/were + -ing. Arată acțiune în desfășurare într-un moment din trecut. Exemplu: 'Citea când am sunat.'",
    r2_q: "Care este Trecut Continuu?",
    r2_a: "Citeam", r2_b: "Citesc", r2_c: "Citisem", r2_d: "Voi citi",
    r3_title: "Perfect vs. Trecut Simplu",
    r3_text: "Perfect: 'Locuiesc aici 5 ani' (inca). Trecut Simplu: 'Am locuit în Paris 2 ani' (nu mai). Accent diferit!",
    r3_q: "Folosește Perfect pentru ___?",
    r3_a: "Acțiune din trecut la prezent", r3_b: "Trecut complet", r3_c: "Plan viitor", r3_d: "Obicei prezent",
    r4_title: "Trecut Continuu Întrerupt",
    r4_text: "Trecut Continuu se întrerupe: 'Dormeam când a sunat telefonul.' Acțiune mai lungă (dormeam) întreruptă de una scurtă (a sunat).",
    r4_q: "Care arată întrerupere?",
    r4_a: "Studiam + a venit", r4_b: "Am studiat", r4_c: "Studiez", r4_d: "Voi studia",
    r5_title: "⭐ Repetiție",
    r5_text: "Să verificăm ce ai învățat!",
    r5_q1: "Alege: 'Am studiat limba engleză ___ ani.'",
    r5_op1: "5", r5_op2: "de 5", r5_op3: "pentru 5", r5_op4: "la 5",
    r5_q2: "Care arată acțiune întreruptă?",
    r5_op5: "Citește", r5_op6: "Citeam + a venit", r5_op7: "Va citi", r5_op8: "Citește zilnic",
  },
};

export default function TenseK5Explorer({ color = "#A78BFA", onDone, lang = "en" }: Props) {
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
      { question: "r5_q1", choices: ["r5_op1", "r5_op2", "r5_op3", "r5_op4"], answer: "r5_op1" },
      { question: "r5_q2", choices: ["r5_op5", "r5_op6", "r5_op7", "r5_op8"], answer: "r5_op6" },
    ];
  }, [round]);

  const handleAnswer = useCallback((choice: string) => {
    if (locked) return;
    setSelected(choice);
    setLocked(true);
    if (choice === questionsPerRound[0].answer) setScore(s => s + 1);
    setTimeout(() => {
      if (round < 4) { setRound(r => r + 1); setPhase("info"); setSelected(null); setLocked(false); }
      else { onDone?.(score + (choice === questionsPerRound[0].answer ? 1 : 0), 5); }
    }, 1200);
  }, [locked, round, questionsPerRound, score, onDone]);

  const infoBgs: Record<number, string> = {
    0: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    1: "linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%)",
    2: "linear-gradient(135deg, #fecdd3 0%, #fca5a5 100%)",
    3: "linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 100%)",
    4: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {phase === "info" && (
        <motion.div className="bg-white/95 rounded-3xl p-8 text-center" style={{ background: infoBgs[round] }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <h2 className="text-2xl font-black text-slate-800 mb-4">{t[`r${round + 1}_title`]}</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">{t[`r${round + 1}_text`]}</p>
          <motion.button onClick={() => setPhase("question")} className="px-6 py-3 rounded-full font-bold text-white transition-all"
            style={{ background: color }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{t.gotIt}</motion.button>
        </motion.div>
      )}
      <AnimatePresence mode="wait">
        {phase === "question" && (
          <motion.div key={`q-${round}`} className="bg-white/95 rounded-3xl p-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <p className="text-xl font-bold text-center mb-6 text-slate-800">{t[questionsPerRound[0].question]}</p>
            <div className="grid grid-cols-1 gap-3">
              {questionsPerRound[0].choices.map((ch) => (
                <motion.button key={ch} onClick={() => handleAnswer(ch)}
                  className={`py-4 px-4 rounded-2xl font-bold text-base transition-all border-2 ${
                    selected === ch ? ch === questionsPerRound[0].answer
                      ? "bg-green-500 border-green-500 text-white"
                      : "bg-red-100 border-red-300 text-red-600 opacity-70"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-400"
                  }`} disabled={locked} whileHover={!locked ? { scale: 1.02 } : {}}>{t[ch]}</motion.button>
              ))}
            </div>
            {locked && (
              <motion.div className="mt-4 text-center font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
