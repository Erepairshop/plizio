"use client";
// AnimalExplorer — Island i2: Pets & Wild Animals (Haustiere & Wildtiere)
// Teaches: pets, wild animals, animal sounds, classification

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TOTAL_ROUNDS = 5;

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Pets & Animals Explorer",
    round1Title: "Discover Animals",
    round1Hint: "Tap each animal to reveal its name!",
    round2Title: "Pet or Wild?",
    round2Hint: "Is this animal a pet or wild?",
    round3Title: "Animal Sounds",
    round3Hint: "Which animal makes this sound?",
    round3Sound: "Meow!",
    round4Title: "Where Do They Live?",
    round4Hint: "Where does this animal live?",
    round5Title: "Quick Review",
    round5Hint: "What sound does the dog make?",
    pet: "Pet",
    wild: "Wild",
    forest: "Forest",
    home: "Home",
    barks: "Barks",
    meows: "Meows",
    squeaks: "Squeaks",
    dog: "Dog",
    cat: "Cat",
    fox: "Fox",
    hedgehog: "Hedgehog",
    next: "Next",
    finish: "Finish",
  },
  de: {
    title: "Haustiere & Wildtiere Entdecker",
    round1Title: "Entdecke Tiere",
    round1Hint: "Tippe auf jedes Tier — finde seinen Namen!",
    round2Title: "Haustier oder Wildtier?",
    round2Hint: "Ist dieses Tier ein Haustier oder Wildtier?",
    round3Title: "Tierlaute",
    round3Hint: "Welches Tier macht diesen Laut?",
    round3Sound: "Miau!",
    round4Title: "Wo leben sie?",
    round4Hint: "Wo lebt dieses Tier?",
    round5Title: "Schnelle Wiederholung",
    round5Hint: "Was macht der Hund?",
    pet: "Haustier",
    wild: "Wildtier",
    forest: "Wald",
    home: "Zuhause",
    barks: "Bellt",
    meows: "Miaut",
    squeaks: "Piepst",
    dog: "Hund",
    cat: "Katze",
    fox: "Fuchs",
    hedgehog: "Igel",
    next: "Weiter",
    finish: "Fertig",
  },
  hu: {
    title: "Háziállatok & Vadállatok Felfedező",
    round1Title: "Fedezd fel az állatokat",
    round1Hint: "Koppints minden állatra — találd meg a nevét!",
    round2Title: "Háziállat vagy vadállat?",
    round2Hint: "Ez az állat háziállat vagy vadállat?",
    round3Title: "Állathanagok",
    round3Hint: "Melyik állat adja ezt a hangot?",
    round3Sound: "Miau!",
    round4Title: "Hol élnek?",
    round4Hint: "Hol él ez az állat?",
    round5Title: "Gyors összefoglalás",
    round5Hint: "Mit csinál a kutya?",
    pet: "Háziállat",
    wild: "Vadállat",
    forest: "Erdő",
    home: "Otthon",
    barks: "Ugat",
    meows: "Nyávog",
    squeaks: "Cikeg",
    dog: "Kutya",
    cat: "Macska",
    fox: "Róka",
    hedgehog: "Sül",
    next: "Tovább",
    finish: "Vége",
  },
  ro: {
    title: "Exploratorul animalelor de companie și sălbatice",
    round1Title: "Descoperă animalele",
    round1Hint: "Atinge fiecare animal — descoperă numele!",
    round2Title: "Lup de companie sau sălbatic?",
    round2Hint: "Acest animal este de companie sau sălbatic?",
    round3Title: "Sunetele animalelor",
    round3Hint: "Ce animal face acest sunet?",
    round3Sound: "Miau!",
    round4Title: "Unde trăiesc?",
    round4Hint: "Unde trăiește acest animal?",
    round5Title: "Recapitulare rapidă",
    round5Hint: "Ce sunet face câinele?",
    pet: "De companie",
    wild: "Sălbatic",
    forest: "Pădure",
    home: "Acasă",
    barks: "Latră",
    meows: "Miaună",
    squeaks: "Cioartă",
    dog: "Câine",
    cat: "Pisică",
    fox: "Vulpe",
    hedgehog: "Arici",
    next: "Înainte",
    finish: "Gata",
  },
};

// SVG Animal Illustrations
function AnimalIcon({ type, color, size = 80 }: { type: string; color: string; size?: number }) {
  if (type === "dog") {
    return (
      <svg viewBox="0 0 120 100" style={{ width: size, height: "auto" }}>
        {/* Body */}
        <ellipse cx="60" cy="55" rx="25" ry="22" fill={color} opacity="0.4" stroke={color} strokeWidth="2" />
        {/* Head */}
        <circle cx="50" cy="35" r="16" fill={color} opacity="0.4" stroke={color} strokeWidth="2" />
        {/* Ears */}
        <ellipse cx="40" cy="20" rx="6" ry="10" fill={color} opacity="0.5" stroke={color} strokeWidth="1.5" />
        <ellipse cx="60" cy="18" rx="6" ry="10" fill={color} opacity="0.5" stroke={color} strokeWidth="1.5" />
        {/* Snout */}
        <circle cx="45" cy="38" r="4" fill={color} opacity="0.3" />
        {/* Eyes */}
        <circle cx="48" cy="32" r="2" fill={color} />
        <circle cx="52" cy="32" r="2" fill={color} />
      </svg>
    );
  }
  if (type === "cat") {
    return (
      <svg viewBox="0 0 120 100" style={{ width: size, height: "auto" }}>
        {/* Body */}
        <ellipse cx="60" cy="60" rx="22" ry="20" fill={color} opacity="0.4" stroke={color} strokeWidth="2" />
        {/* Head */}
        <circle cx="50" cy="35" r="14" fill={color} opacity="0.4" stroke={color} strokeWidth="2" />
        {/* Ears (triangles) */}
        <polygon points="40,18 35,28 45,25" fill={color} opacity="0.5" stroke={color} strokeWidth="1.5" />
        <polygon points="60,18 65,28 55,25" fill={color} opacity="0.5" stroke={color} strokeWidth="1.5" />
        {/* Eyes */}
        <circle cx="47" cy="32" r="2.5" fill={color} />
        <circle cx="53" cy="32" r="2.5" fill={color} />
        {/* Tail (curved) */}
        <path d="M 80 55 Q 95 50 90 65" stroke={color} strokeWidth="2" fill="none" opacity="0.5" />
      </svg>
    );
  }
  if (type === "fox") {
    return (
      <svg viewBox="0 0 120 100" style={{ width: size, height: "auto" }}>
        {/* Body */}
        <ellipse cx="60" cy="55" rx="24" ry="20" fill={color} opacity="0.4" stroke={color} strokeWidth="2" />
        {/* Head */}
        <circle cx="48" cy="32" r="15" fill={color} opacity="0.4" stroke={color} strokeWidth="2" />
        {/* Ears (pointed) */}
        <polygon points="38,15 32,30 42,28" fill={color} opacity="0.5" stroke={color} strokeWidth="1.5" />
        <polygon points="58,15 52,28 62,30" fill={color} opacity="0.5" stroke={color} strokeWidth="1.5" />
        {/* Eyes */}
        <circle cx="45" cy="30" r="2" fill={color} />
        <circle cx="51" cy="30" r="2" fill={color} />
        {/* Snout */}
        <circle cx="48" cy="38" r="3" fill={color} opacity="0.3" />
      </svg>
    );
  }
  if (type === "hedgehog") {
    return (
      <svg viewBox="0 0 120 100" style={{ width: size, height: "auto" }}>
        {/* Body (spiky) */}
        <circle cx="60" cy="55" r="18" fill={color} opacity="0.4" stroke={color} strokeWidth="2" />
        {/* Spikes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 60 + Math.cos(rad) * 18;
          const y1 = 55 + Math.sin(rad) * 18;
          const x2 = 60 + Math.cos(rad) * 28;
          const y2 = 55 + Math.sin(rad) * 28;
          return (
            <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" opacity="0.5" />
          );
        })}
        {/* Head/face */}
        <circle cx="50" cy="40" r="10" fill={color} opacity="0.4" stroke={color} strokeWidth="1.5" />
        {/* Eyes */}
        <circle cx="48" cy="38" r="1.5" fill={color} />
        <circle cx="52" cy="38" r="1.5" fill={color} />
      </svg>
    );
  }
  return null;
}

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}

function AnimalExplorer({ color, lang = "de", onDone }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const wrongRef = useRef(0);

  // Round states
  const [discoveredAnimals, setDiscoveredAnimals] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const animals = ["dog", "cat", "fox", "hedgehog"];
  const petStatus = { dog: true, cat: true, fox: false, hedgehog: false };

  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongRef.current, TOTAL_ROUNDS - 1));
      onDone(score, TOTAL_ROUNDS);
    } else {
      setRound(r => r + 1);
      setDiscoveredAnimals(new Set());
      setSelectedAnswer(null);
    }
  }, [round, onDone]);

  const handleAnimalTap = (animal: string) => {
    if (!discoveredAnimals.has(animal)) {
      setDiscoveredAnimals(prev => new Set([...prev, animal]));
    }
  };

  const handlePetWildSelect = (animal: string, isPet: boolean) => {
    const correct = isPet === petStatus[animal as keyof typeof petStatus];
    if (!correct) wrongRef.current++;
    setSelectedAnswer(animal);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      {/* Progress */}
      <div className="flex justify-center gap-1.5 pt-4 pb-4">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.15)" }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={round}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-5"
        >
          {round === 0 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {animals.map(animal => (
                  <motion.button
                    key={animal}
                    onClick={() => handleAnimalTap(animal)}
                    className="py-4 px-2 rounded-xl transition-all flex flex-col items-center justify-center gap-2"
                    style={{
                      background: discoveredAnimals.has(animal) ? `${color}33` : "rgba(255,255,255,0.06)",
                      border: `2px solid ${discoveredAnimals.has(animal) ? color : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    <AnimalIcon type={animal} color={color} size={50} />
                    {discoveredAnimals.has(animal) && (
                      <p className="text-xs font-bold text-white">
                        {animal === "dog" ? lbl.dog : animal === "cat" ? lbl.cat : animal === "fox" ? lbl.fox : lbl.hedgehog}
                      </p>
                    )}
                  </motion.button>
                ))}
              </div>
              <motion.button
                onClick={advance}
                disabled={discoveredAnimals.size < 4}
                className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                style={{
                  background: discoveredAnimals.size === 4 ? `linear-gradient(135deg, ${color}55, ${color}99)` : "rgba(255,255,255,0.06)",
                  border: `2px solid ${discoveredAnimals.size === 4 ? color : "rgba(255,255,255,0.1)"}`,
                }}
              >
                {lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}

          {round === 1 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
              <p className="text-white/60 text-sm font-bold text-center">{lbl.round2Hint}</p>
              {["dog", "fox"].map((animal, idx) => (
                <div key={idx} className="w-full max-w-xs space-y-2">
                  <div className="flex items-center justify-center gap-3 py-2">
                    <AnimalIcon type={animal} color={color} size={60} />
                    <p className="text-white font-bold text-lg">
                      {animal === "dog" ? lbl.dog : animal === "cat" ? lbl.cat : animal === "fox" ? lbl.fox : lbl.hedgehog}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => handlePetWildSelect(animal, true)}
                      className="flex-1 py-2 px-3 rounded-lg transition-all font-bold text-white text-sm"
                      style={{
                        background:
                          selectedAnswer === animal && petStatus[animal as keyof typeof petStatus] === true
                            ? `${color}33`
                            : "rgba(255,255,255,0.06)",
                        border: `2px solid ${selectedAnswer === animal ? color : "rgba(255,255,255,0.1)"}`,
                      }}
                    >
                      {lbl.pet}
                    </motion.button>
                    <motion.button
                      onClick={() => handlePetWildSelect(animal, false)}
                      className="flex-1 py-2 px-3 rounded-lg transition-all font-bold text-white text-sm"
                      style={{
                        background:
                          selectedAnswer === animal && petStatus[animal as keyof typeof petStatus] === false
                            ? `#FF2D7833`
                            : "rgba(255,255,255,0.06)",
                        border: `2px solid ${selectedAnswer === animal ? "#FF2D78" : "rgba(255,255,255,0.1)"}`,
                      }}
                    >
                      {lbl.wild}
                    </motion.button>
                  </div>
                </div>
              ))}
              {selectedAnswer && (
                <motion.button
                  onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                >
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {round === 2 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
              <p className="text-white/60 text-sm font-bold text-center">{lbl.round3Hint}</p>
              <div className="bg-white/10 rounded-2xl p-6 text-center mb-4">
                <p className="text-4xl font-black" style={{ color }}>
                  {lbl.round3Sound}
                </p>
              </div>
              <div className="space-y-2 w-full max-w-xs">
                {["dog", "cat", "fox"].map((animal, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      if (animal === "cat") {
                        setSelectedAnswer(animal);
                      } else {
                        wrongRef.current++;
                        setSelectedAnswer(animal);
                      }
                    }}
                    className="w-full py-3 px-4 rounded-xl transition-all font-bold text-white flex items-center justify-center gap-3"
                    style={{
                      background:
                        selectedAnswer === animal
                          ? animal === "cat"
                            ? `#00FF8833`
                            : `#FF2D7833`
                          : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedAnswer === animal ? (animal === "cat" ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    <AnimalIcon type={animal} color={color} size={40} />
                    <span>
                      {animal === "dog" ? lbl.dog : animal === "cat" ? lbl.cat : animal === "fox" ? lbl.fox : ""}
                    </span>
                  </motion.button>
                ))}
              </div>
              {selectedAnswer && (
                <motion.button
                  onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                >
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {round === 3 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
              <p className="text-white/60 text-sm font-bold text-center">{lbl.round4Hint}</p>
              <div className="flex items-center justify-center gap-4 py-4">
                <AnimalIcon type="fox" color={color} size={70} />
              </div>
              <div className="space-y-2 w-full max-w-xs">
                {[lbl.forest, lbl.home].map((location, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      if (location === lbl.forest) {
                        setSelectedAnswer(location);
                      } else {
                        wrongRef.current++;
                        setSelectedAnswer(location);
                      }
                    }}
                    className="w-full py-3 px-4 rounded-xl transition-all font-bold text-white"
                    style={{
                      background:
                        selectedAnswer === location
                          ? location === lbl.forest
                            ? `#00FF8833`
                            : `#FF2D7833`
                          : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedAnswer === location ? (location === lbl.forest ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    {location}
                  </motion.button>
                ))}
              </div>
              {selectedAnswer && (
                <motion.button
                  onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                >
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {round === 4 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
              <p className="text-white/60 text-sm font-bold text-center">{lbl.round5Hint}</p>
              <div className="space-y-2 w-full max-w-xs">
                {[lbl.barks, lbl.meows, lbl.squeaks].map((sound, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      if (sound === lbl.barks) {
                        setSelectedAnswer(sound);
                      } else {
                        wrongRef.current++;
                        setSelectedAnswer(sound);
                      }
                    }}
                    className="w-full py-3 px-4 rounded-xl transition-all font-bold text-white"
                    style={{
                      background:
                        selectedAnswer === sound
                          ? sound === lbl.barks
                            ? `#00FF8833`
                            : `#FF2D7833`
                          : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedAnswer === sound ? (sound === lbl.barks ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    {sound}
                  </motion.button>
                ))}
              </div>
              {selectedAnswer && (
                <motion.button
                  onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                >
                  {lbl.finish} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(AnimalExplorer);
