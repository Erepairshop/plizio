"use client";
// SachkundeReviewExplorer — Island i9: Grand Finale
// Mix of ALL topics from entire Sachkunde game

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TOTAL_ROUNDS = 5;

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Sachkunde Grand Finale",
    round1Title: "Body & Senses",
    round1Hint: "Identify the body part or sense!",
    round2Title: "Animals & Nature",
    round2Hint: "Pick the correct answer!",
    round3Title: "Weather & Calendar",
    round3Hint: "What month is it?",
    round4Title: "Traffic & Safety",
    round4Hint: "What's the traffic rule?",
    round5Title: "Everything Review",
    round5Hint: "Final test of all topics!",
    head: "Head",
    eye: "Eye",
    hand: "Hand",
    leg: "Leg",
    nose: "Nose",
    sight: "Sight",
    hearing: "Hearing",
    smell: "Smell",
    dog: "Dog",
    fox: "Fox",
    squirrel: "Squirrel",
    owl: "Owl",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    winter: "Winter",
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    red: "Red",
    yellow: "Yellow",
    green: "Green",
    car: "Car",
    bicycle: "Bicycle",
    bus: "Bus",
    helmet: "Helmet",
    crosswalk: "Crosswalk",
    stoplight: "Traffic light",
    next: "Next",
    correct: "Correct!",
    tryagain: "Try again",
    finish: "Finished!",
  },
  hu: {
    title: "Sachkunde Grand Finale",
    round1Title: "Test és Érzékek",
    round1Hint: "Azonosítsd a testrészt vagy érzéket!",
    round2Title: "Állatok és Természet",
    round2Hint: "Válaszd a helyes választ!",
    round3Title: "Időjárás és Naptár",
    round3Hint: "Melyik hónap?",
    round4Title: "Közlekedés és Biztonság",
    round4Hint: "Mi a közlekedési szabály?",
    round5Title: "Minden Összefoglalás",
    round5Hint: "Utolsó teszt!",
    head: "Fej",
    eye: "Szem",
    hand: "Kéz",
    leg: "Láb",
    nose: "Orr",
    sight: "Látás",
    hearing: "Hallás",
    smell: "Szaglás",
    dog: "Kutya",
    fox: "Róka",
    squirrel: "Mókus",
    owl: "Bagoly",
    spring: "Tavasz",
    summer: "Nyár",
    autumn: "Ősz",
    winter: "Tél",
    january: "Január",
    february: "Február",
    march: "Március",
    april: "Április",
    red: "Piros",
    yellow: "Sárga",
    green: "Zöld",
    car: "Autó",
    bicycle: "Kerékpár",
    bus: "Busz",
    helmet: "Sisak",
    crosswalk: "Zebra",
    stoplight: "Közlekedési lámpa",
    next: "Tovább",
    correct: "Helyes!",
    tryagain: "Próbáld újra",
    finish: "Vége!",
  },
  de: {
    title: "Sachkunde Großes Finale",
    round1Title: "Körper & Sinne",
    round1Hint: "Erkennen Sie den Körperteil oder Sinn!",
    round2Title: "Tiere & Natur",
    round2Hint: "Wählen Sie die richtige Antwort!",
    round3Title: "Wetter & Kalender",
    round3Hint: "Welcher Monat?",
    round4Title: "Verkehr & Sicherheit",
    round4Hint: "Wie lautet die Verkehrsregel?",
    round5Title: "Alles Übersicht",
    round5Hint: "Abschließender Test!",
    head: "Kopf",
    eye: "Auge",
    hand: "Hand",
    leg: "Bein",
    nose: "Nase",
    sight: "Sehen",
    hearing: "Hören",
    smell: "Riechen",
    dog: "Hund",
    fox: "Fuchs",
    squirrel: "Eichhörnchen",
    owl: "Eule",
    spring: "Frühling",
    summer: "Sommer",
    autumn: "Herbst",
    winter: "Winter",
    january: "Januar",
    february: "Februar",
    march: "März",
    april: "April",
    red: "Rot",
    yellow: "Gelb",
    green: "Grün",
    car: "Auto",
    bicycle: "Fahrrad",
    bus: "Bus",
    helmet: "Helm",
    crosswalk: "Zebrastreifen",
    stoplight: "Ampel",
    next: "Weiter",
    correct: "Richtig!",
    tryagain: "Versuchen Sie es erneut",
    finish: "Fertig!",
  },
  ro: {
    title: "Sachkunde Grand Finale",
    round1Title: "Corp și Simțuri",
    round1Hint: "Identifică partea corpului sau simțul!",
    round2Title: "Animale și Natură",
    round2Hint: "Alege răspunsul corect!",
    round3Title: "Vreme și Calendar",
    round3Hint: "Care lună?",
    round4Title: "Trafic și Siguranță",
    round4Hint: "Care este regula de trafic?",
    round5Title: "Revizuire Totală",
    round5Hint: "Test final!",
    head: "Cap",
    eye: "Ochi",
    hand: "Mână",
    leg: "Picior",
    nose: "Nas",
    sight: "Vedere",
    hearing: "Auz",
    smell: "Miros",
    dog: "Câine",
    fox: "Vulpe",
    squirrel: "Veveriță",
    owl: "Bufniță",
    spring: "Primăvară",
    summer: "Vară",
    autumn: "Toamnă",
    winter: "Iarnă",
    january: "Ianuarie",
    february: "februarie",
    march: "Martie",
    april: "Aprilie",
    red: "Roșu",
    yellow: "Galben",
    green: "Verde",
    car: "Mașină",
    bicycle: "Bicicletă",
    bus: "Autobuz",
    helmet: "Cască",
    crosswalk: "Trecere de pietoni",
    stoplight: "Semafor",
    next: "Înainte",
    correct: "Corect!",
    tryagain: "Încearcă din nou",
    finish: "Gata!",
  },
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}

function SachkundeReviewExplorer({ color, lang = "de", onDone }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const wrongRef = useRef(0);

  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongRef.current, TOTAL_ROUNDS - 1));
      onDone(score, TOTAL_ROUNDS);
    } else {
      setRound(r => r + 1);
    }
  }, [round, onDone]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      <div className="flex justify-center gap-1.5 pt-4 pb-2">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4">

          {round === 0 && <Round1 color={color} lbl={lbl} onWrong={() => wrongRef.current++} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onWrong={() => wrongRef.current++} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onWrong={() => wrongRef.current++} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onWrong={() => wrongRef.current++} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onWrong={() => wrongRef.current++} />}

          <motion.button onClick={advance}
            className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
            whileTap={{ scale: 0.97 }}>
            {round === TOTAL_ROUNDS - 1 ? lbl.finish : lbl.next} <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Round1({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const correct = "eye";
  const options = ["eye", "hand", "leg"];

  const handleSelect = (opt: string) => {
    setSelected(opt);
    if (opt !== correct) onWrong();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round1Hint}</p>
      <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 px-6 text-center">
        <p className="text-white font-bold">We use this to see 👀</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="py-3 px-4 rounded-xl font-bold text-white transition-colors"
            style={{
              background: selected === opt ? (opt === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            {lbl[opt]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Round2({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const correct = "spring";
  const options = ["spring", "summer", "autumn"];

  const handleSelect = (opt: string) => {
    setSelected(opt);
    if (opt !== correct) onWrong();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round2Hint}</p>
      <div className="text-4xl mb-2">🌸</div>
      <p className="text-white/60 text-sm text-center mb-2">Flowers bloom, warm weather</p>
      <div className="flex flex-col gap-2 w-full">
        {options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="py-3 px-4 rounded-xl font-bold text-white transition-colors"
            style={{
              background: selected === opt ? (opt === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            {lbl[opt]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Round3({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const correct = "april";
  const options = ["january", "march", "april"];

  const handleSelect = (opt: string) => {
    setSelected(opt);
    if (opt !== correct) onWrong();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round3Hint}</p>
      <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 px-6 text-center">
        <p className="text-white font-bold">Spring month, comes after March</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="py-3 px-4 rounded-xl font-bold text-white transition-colors"
            style={{
              background: selected === opt ? (opt === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            {lbl[opt]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Round4({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const correct = "helmet";
  const options = ["helmet", "crosswalk", "stoplight"];

  const handleSelect = (opt: string) => {
    setSelected(opt);
    if (opt !== correct) onWrong();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round4Hint}</p>
      <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 px-6 text-center">
        <p className="text-white font-bold">Safety gear for riding a bicycle</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="py-3 px-4 rounded-xl font-bold text-white transition-colors"
            style={{
              background: selected === opt ? (opt === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            {lbl[opt]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Round5({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const correct = "dog";
  const options = ["dog", "fox", "owl"];

  const handleSelect = (opt: string) => {
    setSelected(opt);
    if (opt !== correct) onWrong();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round5Hint}</p>
      <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 px-6 text-center">
        <p className="text-white font-bold">A pet animal, man's best friend</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="py-3 px-4 rounded-xl font-bold text-white transition-colors"
            style={{
              background: selected === opt ? (opt === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            {lbl[opt]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default memo(SachkundeReviewExplorer);
