"use client";
// NatureReviewExplorer — Island i8: Nature Review
// Mix of topics from i1-i3 (body, animals, nature)

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TOTAL_ROUNDS = 5;

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Nature Review",
    round1Title: "Body Parts",
    round1Hint: "Tap each body part on the figure",
    round2Title: "Animal Classification",
    round2Hint: "Pet or wild animal?",
    round3Title: "Season Clues",
    round3Hint: "Which season is this?",
    round4Title: "Senses & Organs",
    round4Hint: "Match the sense to the organ!",
    round5Title: "Nature Mix",
    round5Hint: "Test your nature knowledge!",
    head: "Head",
    eye: "Eye",
    hand: "Hand",
    leg: "Leg",
    dog: "Dog",
    fox: "Fox",
    squirrel: "Squirrel",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    winter: "Winter",
    flowers: "Flowers",
    sunshine: "Sunshine",
    leaves: "Falling leaves",
    snow: "Snow",
    sight: "Sight",
    hearing: "Hearing",
    smell: "Smell",
    ear: "Ear",
    nose: "Nose",
    next: "Next",
    correct: "Correct!",
    tryagain: "Try again",
    finish: "Finished!",
  },
  hu: {
    title: "Természet Összefoglalás",
    round1Title: "Testfejek",
    round1Hint: "Koppints az ábrán az egyes testrészekre",
    round2Title: "Állat Osztályozása",
    round2Hint: "Háziállat vagy vadállatl?",
    round3Title: "Évszak Nyomok",
    round3Hint: "Melyik évszak ez?",
    round4Title: "Érzékek és Szervek",
    round4Hint: "Párosítsd az érzéket a szervvel!",
    round5Title: "Természet Mix",
    round5Hint: "Teszteld a természet tudásod!",
    head: "Fej",
    eye: "Szem",
    hand: "Kéz",
    leg: "Láb",
    dog: "Kutya",
    fox: "Róka",
    squirrel: "Mókus",
    spring: "Tavasz",
    summer: "Nyár",
    autumn: "Ősz",
    winter: "Tél",
    flowers: "Virágok",
    sunshine: "Napsütés",
    leaves: "Lehulló levelek",
    snow: "Hó",
    sight: "Látás",
    hearing: "Hallás",
    smell: "Szaglás",
    ear: "Fül",
    nose: "Orr",
    next: "Tovább",
    correct: "Helyes!",
    tryagain: "Próbáld újra",
    finish: "Vége!",
  },
  de: {
    title: "Natur-Übersicht",
    round1Title: "Körperteile",
    round1Hint: "Tippe auf jeden Körperteil auf der Figur",
    round2Title: "Tierklassifizierung",
    round2Hint: "Haustier oder Wildtier?",
    round3Title: "Jahreszeit-Hinweise",
    round3Hint: "Welche Jahreszeit ist das?",
    round4Title: "Sinne & Organe",
    round4Hint: "Ordne den Sinn dem Organ zu!",
    round5Title: "Natur-Mix",
    round5Hint: "Teste dein Naturwissen!",
    head: "Kopf",
    eye: "Auge",
    hand: "Hand",
    leg: "Bein",
    dog: "Hund",
    fox: "Fuchs",
    squirrel: "Eichhörnchen",
    spring: "Frühling",
    summer: "Sommer",
    autumn: "Herbst",
    winter: "Winter",
    flowers: "Blumen",
    sunshine: "Sonnenschein",
    leaves: "Fallende Blätter",
    snow: "Schnee",
    sight: "Sehen",
    hearing: "Hören",
    smell: "Riechen",
    ear: "Ohr",
    nose: "Nase",
    next: "Weiter",
    correct: "Richtig!",
    tryagain: "Versuchen Sie es erneut",
    finish: "Fertig!",
  },
  ro: {
    title: "Recapitulare Natură",
    round1Title: "Părți ale Corpului",
    round1Hint: "Atinge fiecare parte a corpului din figură",
    round2Title: "Clasificarea Animalului",
    round2Hint: "Animal de casă sau sălbatic?",
    round3Title: "Indicii Anotimpului",
    round3Hint: "Care anotimp este acesta?",
    round4Title: "Simțuri și Organe",
    round4Hint: "Potrivește simțul cu organul!",
    round5Title: "Amestec Natură",
    round5Hint: "Testează-ți cunoștințele despre natură!",
    head: "Cap",
    eye: "Ochi",
    hand: "Mână",
    leg: "Picior",
    dog: "Câine",
    fox: "Vulpe",
    squirrel: "Veveriță",
    spring: "Primăvară",
    summer: "Vară",
    autumn: "Toamnă",
    winter: "Iarnă",
    flowers: "Flori",
    sunshine: "Soare",
    leaves: "Frunze cădătoare",
    snow: "Zăpadă",
    sight: "Vedere",
    hearing: "Auz",
    smell: "Miros",
    ear: "Ureche",
    nose: "Nas",
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

function NatureReviewExplorer({ color, lang = "de", onDone }: Props) {
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

          {round === 0 && <Round1 color={color} lbl={lbl} />}
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

function Round1({ color, lbl }: { color: string; lbl: Record<string, string> }) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const bodyParts = ["head", "eye", "hand", "leg"];

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round1Hint}</p>
      <svg viewBox="0 0 80 140" className="w-16 h-24">
        {/* Head */}
        <circle cx="40" cy="25" r="15" fill="#E8C9A0" />
        {/* Eyes */}
        <circle cx="35" cy="23" r="2" fill="#333" />
        <circle cx="45" cy="23" r="2" fill="#333" />
        {/* Body */}
        <rect x="30" y="42" width="20" height="25" fill="#6B8FAD" rx="3" />
        {/* Arms */}
        <rect x="15" y="45" width="15" height="8" fill="#E8C9A0" rx="2" />
        <rect x="50" y="45" width="15" height="8" fill="#E8C9A0" rx="2" />
        {/* Legs */}
        <rect x="32" y="70" width="6" height="20" fill="#4A5A7A" rx="2" />
        <rect x="42" y="70" width="6" height="20" fill="#4A5A7A" rx="2" />
      </svg>
      <div className="grid grid-cols-2 gap-2">
        {bodyParts.map(part => (
          <motion.button key={part}
            onClick={() => setRevealed(prev => new Set([...prev, part]))}
            className="px-4 py-2 rounded-lg text-xs font-bold text-white transition-colors"
            style={{
              background: revealed.has(part) ? `${color}33` : "rgba(255,255,255,0.06)",
              border: `2px solid ${revealed.has(part) ? color : "rgba(255,255,255,0.15)"}`,
            }}>
            {lbl[part]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Round2({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const animal = "dog";
  const correct = "pet";

  const handleSelect = (choice: string) => {
    setSelected(choice);
    if (choice !== correct) onWrong();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round2Hint}</p>
      <svg viewBox="0 0 80 60" className="w-16 h-12">
        {/* Dog */}
        <ellipse cx="40" cy="35" rx="18" ry="12" fill="#C1956F" />
        <circle cx="25" cy="30" r="8" fill="#C1956F" />
        <rect x="30" y="45" width="4" height="8" fill="#8B6F4E" />
        <rect x="40" y="45" width="4" height="8" fill="#8B6F4E" />
      </svg>
      <p className="text-white font-bold">{lbl[animal]}</p>
      <div className="flex gap-3">
        {[
          { key: "pet", label: "Haustier" },
          { key: "wild", label: "Wildtier" },
        ].map(opt => (
          <motion.button key={opt.key}
            onClick={() => handleSelect(opt.key)}
            className="px-6 py-2 rounded-lg font-bold text-white text-sm transition-colors"
            style={{
              background: selected === opt.key ? (opt.key === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt.key ? (opt.key === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            {opt.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Round3({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const seasons = ["spring", "summer", "autumn"];
  const correct = "autumn";

  const handleSelect = (season: string) => {
    setSelected(season);
    if (season !== correct) onWrong();
  };

  const seasonEmoji: Record<string, string> = {
    spring: "🌸",
    summer: "☀️",
    autumn: "🍂",
    winter: "❄️",
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round3Hint}</p>
      <div className="text-4xl mb-2">{seasonEmoji.autumn}</div>
      <p className="text-white/60 text-sm text-center mb-2">Falling leaves, cool weather</p>
      <div className="flex flex-col gap-2 w-full">
        {seasons.map(season => (
          <motion.button key={season}
            onClick={() => handleSelect(season)}
            className="py-3 px-4 rounded-xl font-bold text-white transition-colors"
            style={{
              background: selected === season ? (season === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === season ? (season === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            {lbl[season]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Round4({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const pairs = [
    { sense: "sight", organ: "eye" },
    { sense: "hearing", organ: "ear" },
    { sense: "smell", organ: "nose" },
  ];
  const testPair = pairs[0];
  const correct = "eye";
  const options = ["eye", "ear", "nose"];

  const handleSelect = (organ: string) => {
    setSelected(organ);
    if (organ !== correct) onWrong();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round4Hint}</p>
      <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 px-6 text-center">
        <p className="text-white font-bold">{lbl.sight}</p>
        <p className="text-white/60 text-xs">→ which organ?</p>
      </div>
      <div className="flex gap-2">
        {options.map(organ => (
          <motion.button key={organ}
            onClick={() => handleSelect(organ)}
            className="px-4 py-2 rounded-lg font-bold text-white text-sm transition-colors"
            style={{
              background: selected === organ ? (organ === correct ? "#00FF8833" : "#FF2D7833") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === organ ? (organ === correct ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
            }}>
            {lbl[organ]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Round5({ color, lbl, onWrong }: { color: string; lbl: Record<string, string>; onWrong: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const correct = "squirrel";
  const options = ["dog", "fox", "squirrel"];

  const handleSelect = (opt: string) => {
    setSelected(opt);
    if (opt !== correct) onWrong();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold">{lbl.round5Hint}</p>
      <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 px-6 text-center">
        <p className="text-white font-bold">Small, bushy tail, climbs trees</p>
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

export default memo(NatureReviewExplorer);
