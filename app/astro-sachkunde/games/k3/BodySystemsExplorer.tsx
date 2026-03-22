"use client";
import React, { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    round1Title: "Skeleton & Bones", round1Text: "Your skeleton supports your body. Learn the main bones!",
    q1: "Which bone is the largest in your body?", a1: "Thighbone", a2: "Skull", a3: "Spine", a4: "Ribcage",
    round2Title: "Muscles", round2Text: "Muscles help you move. They work with bones!",
    q2: "What do muscles do?", a5: "Help you move", a6: "Digest food", a7: "Store water", a8: "Make sounds",
    round3Title: "Heart & Lungs", round3Text: "Your heart pumps blood. Your lungs help you breathe!",
    q3: "What does the heart do?", a9: "Pumps blood", a10: "Digests food", a11: "Filters air", a12: "Stores fat",
    round4Title: "Digestion", round4Text: "Your stomach breaks down food for energy!",
    q4: "Where does food go first?", a13: "Stomach", a14: "Intestines", a15: "Mouth", a16: "Liver",
    round5Title: "Review", round5Text: "Quick questions about body systems!",
    q5: "Which system helps you think?", a17: "Nervous system", a18: "Digestive system", a19: "Skeletal system", a20: "Respiratory system",
    q6: "How many bones does an adult have?", a21: "About 206", a22: "About 100", a23: "About 300", a24: "About 50",
  },
  de: {
    round1Title: "Skelett & Knochen", round1Text: "Dein Skelett stützt deinen Körper. Lerne die Hauptknochen!",
    q1: "Welcher Knochen ist der größte in deinem Körper?", a1: "Oberschenkelknochen", a2: "Schädel", a3: "Wirbelsäule", a4: "Brustkorb",
    round2Title: "Muskeln", round2Text: "Muskeln helfen dir zu bewegen. Sie arbeiten mit Knochen!",
    q2: "Was tun Muskeln?", a5: "Helfen dir zu bewegen", a6: "Verdauen Nahrung", a7: "Speichern Wasser", a8: "Machen Geräusche",
    round3Title: "Herz & Lungen", round3Text: "Dein Herz pumpt Blut. Deine Lungen helfen dir zu atmen!",
    q3: "Was tut das Herz?", a9: "Pumpt Blut", a10: "Verdaut Nahrung", a11: "Filtert Luft", a12: "Speichert Fett",
    round4Title: "Verdauung", round4Text: "Dein Magen bricht Nahrung für Energie auf!",
    q4: "Wohin geht das Essen zuerst?", a13: "Magen", a14: "Darm", a15: "Mund", a16: "Leber",
    round5Title: "Wiederholung", round5Text: "Schnelle Fragen zum Körper!",
    q5: "Welches System hilft dir zu denken?", a17: "Nervensystem", a18: "Verdauungssystem", a19: "Knochensystem", a20: "Atemwegsystem",
    q6: "Wie viele Knochen hat ein Erwachsener?", a21: "Etwa 206", a22: "Etwa 100", a23: "Etwa 300", a24: "Etwa 50",
  },
  hu: {
    round1Title: "Csontváz & Csontok", round1Text: "A csontváz támogatja a tested. Ismerd meg a fő csontokat!",
    q1: "Melyik csont a legnagyobb a tested?", a1: "Comb csont", a2: "Koponya", a3: "Gerinc", a4: "Bordák",
    round2Title: "Izmok", round2Text: "Az izmok segítik a mozgásod. Csontokkal dolgoznak!",
    q2: "Mit csinálnak az izmok?", a5: "Segítik a mozgást", a6: "Emésztik az ételt", a7: "Tárolják a vizet", a8: "Hangokat készítik",
    round3Title: "Szív & Tüdők", round3Text: "A szíved vért pumpál. A tüdőid segítik a lélegzést!",
    q3: "Mit csinál a szív?", a9: "Pumpálja a vért", a10: "Megemészti az ételt", a11: "Szűri a levegőt", a12: "Zsírt tárol",
    round4Title: "Emésztés", round4Text: "A gyomrod feldarabolja az ételt az energia érdekében!",
    q4: "Hová kerül az étel először?", a13: "Gyomor", a14: "Bélrendszer", a15: "Száj", a16: "Máj",
    round5Title: "Ismétlés", round5Text: "Gyors kérdések a testrendszerekről!",
    q5: "Melyik rendszer segít gondolkozni?", a17: "Idegrendszer", a18: "Emésztőrendszer", a19: "Csontrendszer", a20: "Légzőrendszer",
    q6: "Hány csont van egy felnőtt testében?", a21: "Körülbelül 206", a22: "Körülbelül 100", a23: "Körülbelül 300", a24: "Körülbelül 50",
  },
  ro: {
    round1Title: "Schelet & Oase", round1Text: "Scheletul tău susține corpul. Învață oasele principale!",
    q1: "Ce os este cel mai mare din corpul tău?", a1: "Femurul", a2: "Craniu", a3: "Coloană vertebrală", a4: "Coșul toracic",
    round2Title: "Mușchi", round2Text: "Mușchii te ajută să te miști. Lucrează cu oasele!",
    q2: "Ce fac mușchii?", a5: "Te ajută să te miști", a6: "Digeră hrana", a7: "Stochează apă", a8: "Fac sunete",
    round3Title: "Inimă & Plămâni", round3Text: "Inima ta pompează sânge. Plămânii tăi te ajută să respiri!",
    q3: "Ce face inima?", a9: "Pompează sânge", a10: "Digeră hrana", a11: "Filtrează aerul", a12: "Stochează grăsime",
    round4Title: "Digestie", round4Text: "Stomacul tău descompune hrana pentru energie!",
    q4: "Unde merge mâncarea mai întâi?", a13: "Stomac", a14: "Intestine", a15: "Gură", a16: "Ficat",
    round5Title: "Revizuire", round5Text: "Întrebări rapide despre sisteme corporale!",
    q5: "Ce sistem te ajută să gândești?", a17: "Sistemul nervos", a18: "Sistemul digestiv", a19: "Sistemul osos", a20: "Sistemul respirator",
    q6: "Câte oase are un adult?", a21: "Aproximativ 206", a22: "Aproximativ 100", a23: "Aproximativ 300", a24: "Aproximativ 50",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "round1Title",
      infoText: "round1Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🫀</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "a2", "a3", "a4"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "round2Title",
      infoText: "round2Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">💪</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a5", "a6", "a7", "a8"], answer: "a5" }],
    },
    {
      type: "mcq",
      infoTitle: "round3Title",
      infoText: "round3Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🫁</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a9", "a10", "a11", "a12"], answer: "a9" }],
    },
    {
      type: "mcq",
      infoTitle: "round4Title",
      infoText: "round4Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🍽️</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a13", "a14", "a15", "a16"], answer: "a15" }],
    },
    {
      type: "mcq",
      infoTitle: "round5Title",
      infoText: "round5Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">❓</text>
        </svg>
      ),
      questions: [
        { question: "q5", choices: ["a17", "a18", "a19", "a20"], answer: "a17" },
        { question: "q6", choices: ["a21", "a22", "a23", "a24"], answer: "a21" },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default memo(function BodySystemsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
});
