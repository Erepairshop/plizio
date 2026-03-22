"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "info" | "question";
type Lang = "en" | "de" | "hu" | "ro";

interface Props { color?: string; onDone?: (score: number, total: number) => void; lang?: Lang; }

const LABELS: Record<string, Record<string, string>> = {
  en: {
    gotIt: "Got it! →", next: "Next", finish: "Finish", correct: "Correct! ✓", wrong: "Not quite!",
    r1_title: "Interjections: Wow & Oh",
    r1_text: "Interjections are exclamatory words: Wow!, Oh!, Hey!, Ouch! They show emotion and are often followed by ! (exclamation mark). Example: 'Wow! That's amazing!'",
    r1_q: "Which is an interjection?",
    r1_a: "Wow!", r1_b: "Amazing", r1_c: "Excellent", r1_d: "Great",
    r2_title: "Interjections: Varieties",
    r2_text: "Joy: Yay!, Hooray! Surprise: What?!, No way! Doubt: Hmm, Really? Sadness: Oh no!, Alas! Each conveys different emotions.",
    r2_q: "Which interjection shows SURPRISE?",
    r2_a: "No way!", r2_b: "Hmm", r2_c: "Alas", r2_d: "Yay",
    r3_title: "Punctuation with Interjections",
    r3_text: "Strong emotion → ! (exclamation): 'Wow! Amazing!' Mild emotion → , (comma): 'Well, I think so.' Or standalone: 'Oh. That's interesting.'",
    r3_q: "How punctuate a mild interjection?",
    r3_a: "With a comma", r3_b: "With !", r3_c: "With ?", r3_d: "No punctuation",
    r4_title: "Interjections vs. Adverbs",
    r4_text: "Interjection (emotion): 'Oh! You startled me!' Adverb: 'You startled me quite suddenly.' Interjections stand alone; adverbs modify verbs.",
    r4_q: "Which is an interjection?",
    r4_a: "Oh!", r4_b: "Suddenly", r4_c: "Very", r4_d: "Quickly",
    r5_title: "⭐ Review",
    r5_text: "Let's check what you learned!",
    r5_q1: "Interjections show ___?",
    r5_op1: "Emotion", r5_op2: "Action", r5_op3: "Description", r5_op4: "Time",
    r5_q2: "Which needs an ! mark?",
    r5_op5: "Hmm", r5_op6: "Yes!", r5_op7: "Maybe", r5_op8: "Think",
  },
  de: {
    gotIt: "Verstanden! →", next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz!",
    r1_title: "Ausrufe: Wow & Oh",
    r1_text: "Ausrufe sind Ausdruckswörter: Wow!, Oh!, Hey!, Autsch! Sie zeigen Emotion und werden oft mit ! gefolgt. Beispiel: 'Wow! Das ist erstaunlich!'",
    r1_q: "Welches ist ein Ausruf?",
    r1_a: "Wow!", r1_b: "Erstaunlich", r1_c: "Ausgezeichnet", r1_d: "Großartig",
    r2_title: "Ausrufe: Sorten",
    r2_text: "Freude: Juchhu!, Hurra! Überraschung: Was?!, Unmöglich! Zweife: Hmm, Wirklich? Trauer: Oh nein!, Ach! Jeder zeigt andere Gefühle.",
    r2_q: "Welcher Ausruf zeigt ÜBERRASCHUNG?",
    r2_a: "Unmöglich!", r2_b: "Hmm", r2_c: "Ach", r2_d: "Juchhu",
    r3_title: "Satzzeichen mit Ausrufen",
    r3_text: "Starke Emotion → ! (Ausrufezeichen): 'Wow! Erstaunlich!' Milde Emotion → , (Komma): 'Nun, ich denke so.' Oder allein: 'Oh. Das ist interessant.'",
    r3_q: "Wie interpunktieren Sie einen milden Ausruf?",
    r3_a: "Mit Komma", r3_b: "Mit !", r3_c: "Mit ?", r3_d: "Kein Satzzeichen",
    r4_title: "Ausruf vs. Adverb",
    r4_text: "Ausruf (Emotion): 'Oh! Du hast mir einen Schreck eingejagt!' Adverb: 'Du hast mir einen Schreck sehr plötzlich eingejagt.' Ausrufe stehen allein.",
    r4_q: "Welches ist ein Ausruf?",
    r4_a: "Oh!", r4_b: "Plötzlich", r4_c: "Sehr", r4_d: "Schnell",
    r5_title: "⭐ Wiederholung",
    r5_text: "Lass uns überprüfen was du gelernt hast!",
    r5_q1: "Ausrufe zeigen ___?",
    r5_op1: "Emotion", r5_op2: "Aktion", r5_op3: "Beschreibung", r5_op4: "Zeit",
    r5_q2: "Welches braucht ein ! Zeichen?",
    r5_op5: "Hmm", r5_op6: "Ja!", r5_op7: "Vielleicht", r5_op8: "Denken",
  },
  hu: {
    gotIt: "Értem! →", next: "Tovább", finish: "Kész", correct: "Helyes! ✓", wrong: "Nem egészen!",
    r1_title: "Felkiáltások: Wow & Oh",
    r1_text: "A felkiáltások érzelmi szavak: Wow!, Oh!, Hey!, Ájjaj! Érzelmet mutatnak és gyakran ! után állnak. Példa: 'Wow! Ez fantasztikus!'",
    r1_q: "Melyik felkiáltás?",
    r1_a: "Wow!", r1_b: "Fantasztikus", r1_c: "Kiváló", r1_d: "Nagyszerű",
    r2_title: "Felkiáltások: Fajtái",
    r2_text: "Öröm: Hurá!, Évvé! Meglepetés: Mi?!, Nem igaz! Kétség: Hmm, Valóban? Szomorúság: Ó nem!, Jaj! Mindegyik más érzelmet fejez ki.",
    r2_q: "Melyik felkiáltás mutat MEGLEPETÉST?",
    r2_a: "Nem igaz!", r2_b: "Hmm", r2_c: "Jaj", r2_d: "Hurá",
    r3_title: "Írásjelek felkiáltásokkal",
    r3_text: "Erős érzelem → ! (felkiáltójel): 'Wow! Fantasztikus!' Enyhe érzelem → , (vessző): 'Nos, szerintem igen.' Vagy egyedül: 'Ó. Ez érdekes.'",
    r3_q: "Hogyan írjunk egy enyhe felkiáltást?",
    r3_a: "Vesszővel", r3_b: "Felkiáltójellel", r3_c: "Kérdőjellel", r3_d: "Nincs írásjel",
    r4_title: "Felkiáltás vs. Határozó",
    r4_text: "Felkiáltás (érzelem): 'Ó! Megijesztettél!' Határozó: 'Nagyon hirtelen megijesztettél.' Felkiáltások állnak egyedül.",
    r4_q: "Melyik felkiáltás?",
    r4_a: "Ó!", r4_b: "Hirtelen", r4_c: "Nagyon", r4_d: "Gyorsan",
    r5_title: "⭐ Ismétlés",
    r5_text: "Ellenőrizzük mit tanultál!",
    r5_q1: "Felkiáltások mutatnak ___?",
    r5_op1: "Érzelmet", r5_op2: "Cselekvést", r5_op3: "Leírást", r5_op4: "Időt",
    r5_q2: "Melyiknek kell ! jel?",
    r5_op5: "Hmm", r5_op6: "Igen!", r5_op7: "Talán", r5_op8: "Gondol",
  },
  ro: {
    gotIt: "Înțeles! →", next: "Următorul", finish: "Gata", correct: "Corect! ✓", wrong: "Nu tocmai!",
    r1_title: "Exclamații: Wow & Oh",
    r1_text: "Exclamațiile sunt cuvinte emoționale: Wow!, Oh!, Hey!, Auuu! Arată emoție și sunt urmate adesea de ! (semnul exclamării). Exemplu: 'Wow! Asta-i fantastic!'",
    r1_q: "Care este o exclamație?",
    r1_a: "Wow!", r1_b: "Fantastic", r1_c: "Excelent", r1_d: "Grozav",
    r2_title: "Exclamații: Varietăți",
    r2_text: "Bucurie: Ura!, Hura! Surpriză: Ce?!, Nu se poate! Îndoială: Hmm, Adevărat? Tristețe: Oh nu!, Vai! Fiecare exprimă alte emoții.",
    r2_q: "Care exclamație arată SURPRIZĂ?",
    r2_a: "Nu se poate!", r2_b: "Hmm", r2_c: "Vai", r2_d: "Ura",
    r3_title: "Punctuație cu Exclamații",
    r3_text: "Emoție puternică → ! (semnul exclamării): 'Wow! Fantastic!' Emoție ușoară → , (virgulă): 'Ei bine, cred că da.' Sau singură: 'Oh. Asta-i interesant.'",
    r3_q: "Cum punctuezi o exclamație ușoară?",
    r3_a: "Cu virgulă", r3_b: "Cu !", r3_c: "Cu ?", r3_d: "Fără punctuație",
    r4_title: "Exclamație vs. Adverb",
    r4_text: "Exclamație (emoție): 'Oh! M-ai sperie!' Adverb: 'M-ai sperie foarte brusc.' Exclamațiile stau singure.",
    r4_q: "Care este o exclamație?",
    r4_a: "Oh!", r4_b: "Brusc", r4_c: "Foarte", r4_d: "Repede",
    r5_title: "⭐ Repetiție",
    r5_text: "Să verificăm ce ai învățat!",
    r5_q1: "Exclamațiile arată ___?",
    r5_op1: "Emoție", r5_op2: "Acțiune", r5_op3: "Descriere", r5_op4: "Timp",
    r5_q2: "Care are nevoie de ! semn?",
    r5_op5: "Hmm", r5_op6: "Da!", r5_op7: "Poate", r5_op8: "Cred",
  },
};

export default function InterjectionExplorer({ color = "#A78BFA", onDone, lang = "en" }: Props) {
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
    0: "linear-gradient(135deg, #fecdd3 0%, #fca5a5 100%)",
    1: "linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",
    2: "linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%)",
    3: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    4: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {phase === "info" && (
        <motion.div className="bg-white/95 rounded-3xl p-8 text-center"
          style={{ background: infoBgs[round] }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <h2 className="text-2xl font-black text-slate-800 mb-4">{t[`r${round + 1}_title`]}</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">{t[`r${round + 1}_text`]}</p>
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
            <p className="text-xl font-bold text-center mb-6 text-slate-800">{t[questionsPerRound[0].question]}</p>
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
                  {t[ch]}
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
