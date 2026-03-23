"use client";
// AnimalExplorer — Island i2: Pets & Wild Animals (Haustiere & Wildtiere)
// Teaches: animal sounds, pet vs wild, animal homes, animal babies

import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Volume2 } from "lucide-react";

function SVG_DOG(lang: string) { const labels = { en: { ears: "Ears", nose: "Nose", legs: "4 Legs" }, de: { ears: "Ohren", nose: "Nase", legs: "4 Beine" }, hu: { ears: "Fülek", nose: "Orr", legs: "4 láb" }, ro: { ears: "Urechi", nose: "Nas", legs: "4 picioare" }, }; const l = labels[lang as keyof typeof labels] || labels.en; return ( <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40"> <defs> {/* Background */} <linearGradient id="dogBg" x1="0%" y1="0%" x2="0%" y2="100%"> <stop offset="0%" stopColor="#1e293b" /> <stop offset="100%" stopColor="#020617" /> </linearGradient> {/* Body gradient */} <linearGradient id="dogBody" x1="0%" y1="0%" x2="0%" y2="100%"> <stop offset="0%" stopColor="#fbbf24" /> <stop offset="100%" stopColor="#d97706" /> </linearGradient> {/* Belly */} <linearGradient id="dogBelly" x1="0%" y1="0%" x2="0%" y2="100%"> <stop offset="0%" stopColor="#fde68a" /> <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2" /> </linearGradient> </defs> {/* Background */} <rect width="240" height="160" fill="url(#dogBg)" /> {/* Body */} <ellipse cx="120" cy="95" rx="55" ry="35" fill="url(#dogBody)" /> {/* Belly highlight */} <ellipse cx="120" cy="105" rx="35" ry="20" fill="url(#dogBelly)" /> {/* Head */} <circle cx="120" cy="55" r="30" fill="url(#dogBody)" /> {/* Ears */} <path d="M 95 40 Q 85 10 110 35 Z" fill="#92400e" /> <path d="M 145 40 Q 155 10 130 35 Z" fill="#92400e" /> {/* Eyes */} <circle cx="110" cy="55" r="4" fill="#000" /> <circle cx="130" cy="55" r="4" fill="#000" /> <circle cx="111" cy="53" r="1" fill="white" /> <circle cx="131" cy="53" r="1" fill="white" /> {/* Nose */} <ellipse cx="120" cy="65" rx="6" ry="4" fill="#000" /> {/* Mouth */} <path d="M 115 70 Q 120 75 125 70" stroke="#000" strokeWidth="1.5" fill="none" /> {/* Legs */} <rect x="90" y="115" width="10" height="25" rx="5" fill="#d97706" /> <rect x="110" y="115" width="10" height="25" rx="5" fill="#d97706" /> <rect x="130" y="115" width="10" height="25" rx="5" fill="#d97706" /> <rect x="150" y="115" width="10" height="25" rx="5" fill="#d97706" /> {/* Tail */} <path d="M 170 90 Q 200 70 185 100" stroke="#d97706" strokeWidth="6" fill="none" /> {/* ─── LABELS ─── */} {/* Ears */} <line x1="95" y1="35" x2="40" y2="20" stroke="#fbbf24" strokeDasharray="3,2" /> <rect x="10" y="10" width="60" height="18" rx="8" fill="black" stroke="#fbbf24" /> <text x="40" y="23" fontSize="10" fill="#fbbf24" textAnchor="middle">{l.ears}</text> {/* Nose */} <line x1="120" y1="65" x2="200" y2="40" stroke="#22c55e" strokeDasharray="3,2" /> <rect x="180" y="30" width="50" height="18" rx="8" fill="black" stroke="#22c55e" /> <text x="205" y="43" fontSize="10" fill="#22c55e" textAnchor="middle">{l.nose}</text> {/* Legs */} <line x1="120" y1="130" x2="120" y2="155" stroke="#38bdf8" strokeDasharray="3,2" /> <rect x="90" y="140" width="60" height="18" rx="8" fill="black" stroke="#38bdf8" /> <text x="120" y="153" fontSize="10" fill="#38bdf8" textAnchor="middle">{l.legs}</text> </svg> ); }
function SVG_CAT(lang: string) {
  const labels = {
    en: { ears: "Ears", nose: "Nose", legs: "4 Legs" },
    de: { ears: "Ohren", nose: "Nase", legs: "4 Beine" },
    hu: { ears: "Fülek", nose: "Orr", legs: "4 láb" },
    ro: { ears: "Urechi", nose: "Nas", legs: "4 picioare" },
  };

  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="catBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <linearGradient id="catBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>

        <linearGradient id="catBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="100%" stopColor="#f472b6" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#catBg)" />

      <ellipse cx="120" cy="95" rx="55" ry="35" fill="url(#catBody)" />
      <ellipse cx="120" cy="105" rx="35" ry="20" fill="url(#catBelly)" />

      <circle cx="120" cy="55" r="30" fill="url(#catBody)" />

      {/* Ears */}
      <path d="M 95 40 L 105 15 L 115 40 Z" fill="#be185d" />
      <path d="M 145 40 L 135 15 L 125 40 Z" fill="#be185d" />

      {/* Eyes */}
      <circle cx="110" cy="55" r="4" fill="#000" />
      <circle cx="130" cy="55" r="4" fill="#000" />
      <circle cx="111" cy="53" r="1" fill="white" />
      <circle cx="131" cy="53" r="1" fill="white" />

      {/* Nose */}
      <polygon points="120,63 116,68 124,68" fill="#000" />

      {/* Mouth */}
      <path d="M115 72 Q120 76 125 72" stroke="#000" strokeWidth="1.5" fill="none" />

      {/* Legs */}
      <rect x="90" y="115" width="10" height="25" rx="5" fill="#be185d" />
      <rect x="110" y="115" width="10" height="25" rx="5" fill="#be185d" />
      <rect x="130" y="115" width="10" height="25" rx="5" fill="#be185d" />
      <rect x="150" y="115" width="10" height="25" rx="5" fill="#be185d" />

      {/* Tail */}
      <path d="M 170 90 Q 200 70 185 100" stroke="#be185d" strokeWidth="6" fill="none" />

      {/* LABELS */}
      <line x1="95" y1="35" x2="40" y2="20" stroke="#f472b6" strokeDasharray="3,2" />
      <rect x="10" y="10" width="60" height="18" rx="8" fill="black" stroke="#f472b6" />
      <text x="40" y="23" fontSize="10" fill="#f472b6" textAnchor="middle">{l.ears}</text>

      <line x1="120" y1="65" x2="200" y2="40" stroke="#22c55e" strokeDasharray="3,2" />
      <rect x="180" y="30" width="50" height="18" rx="8" fill="black" stroke="#22c55e" />
      <text x="205" y="43" fontSize="10" fill="#22c55e" textAnchor="middle">{l.nose}</text>

      <line x1="120" y1="130" x2="120" y2="155" stroke="#38bdf8" strokeDasharray="3,2" />
      <rect x="90" y="140" width="60" height="18" rx="8" fill="black" stroke="#38bdf8" />
      <text x="120" y="153" fontSize="10" fill="#38bdf8" textAnchor="middle">{l.legs}</text>
    </svg>
  );
}
function SVG_COW(lang: string) {
  const labels = {
    en: { ears: "Ears", nose: "Nose", legs: "4 Legs" },
    de: { ears: "Ohren", nose: "Nase", legs: "4 Beine" },
    hu: { ears: "Fülek", nose: "Orr", legs: "4 láb" },
    ro: { ears: "Urechi", nose: "Nas", legs: "4 picioare" },
  };

  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="cowBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <linearGradient id="cowBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>

        <linearGradient id="cowBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#cowBg)" />

      {/* Body */}
      <ellipse cx="120" cy="95" rx="55" ry="35" fill="url(#cowBody)" />
      <ellipse cx="120" cy="105" rx="35" ry="20" fill="url(#cowBelly)" />

      {/* Spots */}
      <ellipse cx="100" cy="95" rx="15" ry="10" fill="#000" />
      <ellipse cx="140" cy="85" rx="12" ry="8" fill="#000" />

      {/* Head */}
      <circle cx="120" cy="55" r="30" fill="url(#cowBody)" />

      {/* Ears */}
      <ellipse cx="90" cy="55" rx="10" ry="15" fill="#9ca3af" />
      <ellipse cx="150" cy="55" rx="10" ry="15" fill="#9ca3af" />

      {/* Eyes */}
      <circle cx="110" cy="55" r="4" fill="#000" />
      <circle cx="130" cy="55" r="4" fill="#000" />
      <circle cx="111" cy="53" r="1" fill="white" />
      <circle cx="131" cy="53" r="1" fill="white" />

      {/* Nose */}
      <ellipse cx="120" cy="70" rx="12" ry="8" fill="#fda4af" />
      <circle cx="115" cy="70" r="2" fill="#000" />
      <circle cx="125" cy="70" r="2" fill="#000" />

      {/* Legs */}
      <rect x="90" y="115" width="10" height="25" rx="5" fill="#9ca3af" />
      <rect x="110" y="115" width="10" height="25" rx="5" fill="#9ca3af" />
      <rect x="130" y="115" width="10" height="25" rx="5" fill="#9ca3af" />
      <rect x="150" y="115" width="10" height="25" rx="5" fill="#9ca3af" />

      {/* Tail */}
      <path d="M 170 90 Q 200 70 185 100" stroke="#9ca3af" strokeWidth="6" fill="none" />

      {/* LABELS */}
      <line x1="90" y1="55" x2="40" y2="20" stroke="#e5e7eb" strokeDasharray="3,2" />
      <rect x="10" y="10" width="60" height="18" rx="8" fill="black" stroke="#e5e7eb" />
      <text x="40" y="23" fontSize="10" fill="#e5e7eb" textAnchor="middle">{l.ears}</text>

      <line x1="120" y1="70" x2="200" y2="40" stroke="#22c55e" strokeDasharray="3,2" />
      <rect x="180" y="30" width="50" height="18" rx="8" fill="black" stroke="#22c55e" />
      <text x="205" y="43" fontSize="10" fill="#22c55e" textAnchor="middle">{l.nose}</text>

      <line x1="120" y1="130" x2="120" y2="155" stroke="#38bdf8" strokeDasharray="3,2" />
      <rect x="90" y="140" width="60" height="18" rx="8" fill="black" stroke="#38bdf8" />
      <text x="120" y="153" fontSize="10" fill="#38bdf8" textAnchor="middle">{l.legs}</text>
    </svg>
  );
}
function SVG_FROG(lang: string) {
  const labels = {
    en: { ears: "Eyes", nose: "Nose", legs: "4 Legs" },
    de: { ears: "Augen", nose: "Nase", legs: "4 Beine" },
    hu: { ears: "Szemek", nose: "Orr", legs: "4 láb" },
    ro: { ears: "Ochi", nose: "Nas", legs: "4 picioare" },
  };

  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="frogBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <linearGradient id="frogBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>

        <linearGradient id="frogBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bbf7d0" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#frogBg)" />

      {/* Body */}
      <ellipse cx="120" cy="100" rx="55" ry="35" fill="url(#frogBody)" />
      <ellipse cx="120" cy="110" rx="35" ry="20" fill="url(#frogBelly)" />

      {/* Head */}
      <circle cx="120" cy="60" r="28" fill="url(#frogBody)" />

      {/* Eyes (big frog eyes) */}
      <circle cx="100" cy="40" r="12" fill="#bbf7d0" />
      <circle cx="140" cy="40" r="12" fill="#bbf7d0" />
      <circle cx="100" cy="40" r="5" fill="#000" />
      <circle cx="140" cy="40" r="5" fill="#000" />

      {/* Nose */}
      <circle cx="115" cy="65" r="2" fill="#000" />
      <circle cx="125" cy="65" r="2" fill="#000" />

      {/* Mouth */}
      <path d="M110 75 Q120 82 130 75" stroke="#000" strokeWidth="2" fill="none" />

      {/* Legs */}
      <ellipse cx="90" cy="130" rx="10" ry="18" fill="#15803d" />
      <ellipse cx="110" cy="130" rx="10" ry="18" fill="#15803d" />
      <ellipse cx="130" cy="130" rx="10" ry="18" fill="#15803d" />
      <ellipse cx="150" cy="130" rx="10" ry="18" fill="#15803d" />

      {/* LABELS */}

      {/* Eyes */}
      <line x1="100" y1="40" x2="40" y2="20" stroke="#4ade80" strokeDasharray="3,2" />
      <rect x="10" y="10" width="60" height="18" rx="8" fill="black" stroke="#4ade80" />
      <text x="40" y="23" fontSize="10" fill="#4ade80" textAnchor="middle">{l.ears}</text>

      {/* Nose */}
      <line x1="120" y1="65" x2="200" y2="40" stroke="#22c55e" strokeDasharray="3,2" />
      <rect x="180" y="30" width="50" height="18" rx="8" fill="black" stroke="#22c55e" />
      <text x="205" y="43" fontSize="10" fill="#22c55e" textAnchor="middle">{l.nose}</text>

      {/* Legs */}
      <line x1="120" y1="130" x2="120" y2="155" stroke="#38bdf8" strokeDasharray="3,2" />
      <rect x="90" y="140" width="60" height="18" rx="8" fill="black" stroke="#38bdf8" />
      <text x="120" y="153" fontSize="10" fill="#38bdf8" textAnchor="middle">{l.legs}</text>
    </svg>
  );
}
function SVG_DUCK(lang: string) {
  const labels = {
    en: { ears: "Head", nose: "Beak", legs: "2 Legs" },
    de: { ears: "Kopf", nose: "Schnabel", legs: "2 Beine" },
    hu: { ears: "Fej", nose: "Csőr", legs: "2 láb" },
    ro: { ears: "Cap", nose: "Cioc", legs: "2 picioare" },
  };

  const l = labels[lang as keyof typeof labels] || labels.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="duckBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <linearGradient id="duckBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>

        <linearGradient id="duckBelly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#fde047" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="url(#duckBg)" />

      {/* Body */}
      <ellipse cx="120" cy="100" rx="55" ry="35" fill="url(#duckBody)" />
      <ellipse cx="120" cy="110" rx="35" ry="20" fill="url(#duckBelly)" />

      {/* Head */}
      <circle cx="120" cy="60" r="28" fill="url(#duckBody)" />

      {/* Eye */}
      <circle cx="125" cy="60" r="4" fill="#000" />
      <circle cx="126" cy="58" r="1" fill="#fff" />

      {/* Beak */}
      <ellipse cx="120" cy="75" rx="14" ry="8" fill="#f97316" />
      <line x1="106" y1="75" x2="134" y2="75" stroke="#ea580c" strokeWidth="2" />

      {/* Wings */}
      <ellipse cx="105" cy="100" rx="15" ry="10" fill="#eab308" />
      <ellipse cx="135" cy="100" rx="15" ry="10" fill="#eab308" />

      {/* Legs */}
      <rect x="105" y="125" width="6" height="20" rx="3" fill="#f97316" />
      <rect x="129" y="125" width="6" height="20" rx="3" fill="#f97316" />

      {/* Feet */}
      <ellipse cx="108" cy="145" rx="8" ry="4" fill="#f97316" />
      <ellipse cx="132" cy="145" rx="8" ry="4" fill="#f97316" />

      {/* LABELS */}

      {/* Head */}
      <line x1="120" y1="60" x2="40" y2="20" stroke="#fde047" strokeDasharray="3,2" />
      <rect x="10" y="10" width="60" height="18" rx="8" fill="black" stroke="#fde047" />
      <text x="40" y="23" fontSize="10" fill="#fde047" textAnchor="middle">{l.ears}</text>

      {/* Beak */}
      <line x1="120" y1="75" x2="200" y2="40" stroke="#f97316" strokeDasharray="3,2" />
      <rect x="180" y="30" width="50" height="18" rx="8" fill="black" stroke="#f97316" />
      <text x="205" y="43" fontSize="10" fill="#f97316" textAnchor="middle">{l.nose}</text>

      {/* Legs */}
      <line x1="120" y1="135" x2="120" y2="155" stroke="#38bdf8" strokeDasharray="3,2" />
      <rect x="90" y="140" width="60" height="18" rx="8" fill="black" stroke="#38bdf8" />
      <text x="120" y="153" fontSize="10" fill="#38bdf8" textAnchor="middle">{l.legs}</text>
    </svg>
  );
}
function renderAnimal(animal: string, lang: string) {
  const content = (() => {
    switch (animal) {
      case "dog": return <SVG_DOG lang={lang} />;
      case "cat": return <SVG_CAT lang={lang} />;
      case "cow": return <SVG_COW lang={lang} />;
      case "frog": return <SVG_FROG lang={lang} />;
      case "duck": return <SVG_DUCK lang={lang} />;
      default:
        return <span className="text-6xl">{ANIMAL_EMOJI[animal] ?? "🐾"}</span>;
    }
  })();

  return (
    <motion.div
      whileTap={{ scale: 0.9, rotate: -2 }}
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{ duration: 0.4 }}
      className="cursor-pointer"
    >
      {content}
    </motion.div>
  );
}
}
const TOTAL_ROUNDS = 5;

/* ─── i18n labels ─── */
const LABELS: Record<string, Record<string, string>> = {
  en: {
    round1Title: "Animal Sounds",
    round1Hint: "Which animal makes this sound?",
    round1Teach: "Animals communicate with sounds! Dogs bark (woof!), cats meow, cows moo, frogs croak, and ducks quack. Each animal has its own special sound.",
    round2Title: "Pet or Wild?",
    round2Hint: "Is this animal a pet or wild?",
    round2Teach: "Pets live with people at home — like dogs, cats, and rabbits. Wild animals live in nature — like foxes, bears, and eagles. Some animals can be both!",
    round3Title: "Animal Homes",
    round3Hint: "Where does this animal live?",
    round3Teach: "Every animal has a special home! Fish live in water, birds live in nests, bears sleep in caves, and dogs live in houses with their families.",
    round4Title: "Animal Babies",
    round4Hint: "What is a baby of this animal called?",
    round4Teach: "Baby animals have special names! A baby dog is a puppy, a baby cat is a kitten, a baby cow is a calf, and a baby duck is a duckling.",
    round5Title: "Quick Review",
    round5Hint: "Answer the question!",
    round5Teach: "Let's see what you remember about animals — their sounds, homes, and babies!",
    gotIt: "Got it! →",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    wrong: "Wrong!",
    pet: "Pet",
    wild: "Wild",
    // Animals
    dog: "Dog",
    cat: "Cat",
    cow: "Cow",
    frog: "Frog",
    duck: "Duck",
    lion: "Lion",
    bird: "Bird",
    fish: "Fish",
    bear: "Bear",
    horse: "Horse",
    rabbit: "Rabbit",
    hedgehog: "Hedgehog",
    // Sounds (language-independent keys, translated values)
    sound_dog: "Woof!",
    sound_cat: "Meow!",
    sound_cow: "Moo!",
    sound_frog: "Ribbit!",
    sound_duck: "Quack!",
    sound_lion: "Roar!",
    // Homes
    nest: "Nest",
    water: "Water",
    cave: "Cave",
    barn: "Barn",
    forest: "Forest",
    home: "Home",
    // Baby names
    kitten: "Kitten",
    puppy: "Puppy",
    calf: "Calf",
    foal: "Foal",
    chick: "Chick",
    cub: "Cub",
    // Review questions
    howManyLegs_dog: "How many legs does a dog have?",
    ans_four: "4",
    ans_two: "2",
    ans_six: "6",
    isFishPet: "Can a fish be a pet?",
    ansYes: "Yes",
    ansNo: "No",
    whereDoFishLive: "Where do fish live?",
    babyDogCalled: "What is a baby dog called?",
    soundCat: "What sound does a cat make?",
  },
  de: {
    round1Title: "Tierlaute",
    round1Hint: "Welches Tier macht diesen Laut?",
    round1Teach: "Tiere kommunizieren mit Lauten! Hunde bellen (Wuff!), Katzen miauen, Kühe muhen, Frösche quaken und Enten quaken. Jedes Tier hat seinen eigenen besonderen Laut.",
    round2Title: "Haustier oder Wildtier?",
    round2Hint: "Ist dieses Tier ein Haustier oder Wildtier?",
    round2Teach: "Haustiere leben bei Menschen zu Hause — wie Hunde, Katzen und Kaninchen. Wildtiere leben in der Natur — wie Füchse, Bären und Adler. Einige Tiere können beides sein!",
    round3Title: "Wo leben Tiere?",
    round3Hint: "Wo lebt dieses Tier?",
    round3Teach: "Jedes Tier hat ein besonderes Zuhause! Fische leben im Wasser, Vögel leben in Nestern, Bären schlafen in Höhlen und Hunde leben in Häusern mit ihren Familien.",
    round4Title: "Tierkinder",
    round4Hint: "Wie heißt das Jungtier?",
    round4Teach: "Tierbabys haben spezielle Namen! Ein Hundebabyheißt Welpe, ein Katzenbaby heißt Kätzchen, ein Kuhbaby heißt Kalb und ein Entenküken heißt Küken.",
    round5Title: "Schnelle Wiederholung",
    round5Hint: "Beantworte die Frage!",
    round5Teach: "Mal sehen, was du über Tiere, Tiergeräusche und Tierbabys gelernt hast!",
    gotIt: "Verstanden! →",
    next: "Weiter",
    finish: "Fertig",
    correct: "Richtig!",
    wrong: "Falsch!",
    pet: "Haustier",
    wild: "Wildtier",
    dog: "Hund",
    cat: "Katze",
    cow: "Kuh",
    frog: "Frosch",
    duck: "Ente",
    lion: "Löwe",
    bird: "Vogel",
    fish: "Fisch",
    bear: "Bär",
    horse: "Pferd",
    rabbit: "Hase",
    hedgehog: "Igel",
    sound_dog: "Wuff!",
    sound_cat: "Miau!",
    sound_cow: "Muh!",
    sound_frog: "Quak!",
    sound_duck: "Quak!",
    sound_lion: "Roar!",
    nest: "Nest",
    water: "Wasser",
    cave: "Höhle",
    barn: "Stall",
    forest: "Wald",
    home: "Zuhause",
    kitten: "Kätzchen",
    puppy: "Welpe",
    calf: "Kalb",
    foal: "Fohlen",
    chick: "Küken",
    cub: "Jungtier",
    howManyLegs_dog: "Wie viele Beine hat ein Hund?",
    ans_four: "4",
    ans_two: "2",
    ans_six: "6",
    isFishPet: "Kann ein Fisch ein Haustier sein?",
    ansYes: "Ja",
    ansNo: "Nein",
    whereDoFishLive: "Wo leben Fische?",
    babyDogCalled: "Wie heißt das Hundebaby?",
    soundCat: "Welchen Laut macht die Katze?",
  },
  hu: {
    round1Title: "Állathangok",
    round1Hint: "Melyik állat adja ezt a hangot?",
    round1Teach: "Az állatok hangokkal kommunikálnak! A kutyák ugatnak (vau!), a macskák miaunak, a tehenek belegelnek, a békák brekegnek és a kacsák hápnak. Minden állatnak saját hangja van.",
    round2Title: "Háziállat vagy vadállat?",
    round2Hint: "Ez az állat háziállat vagy vadállat?",
    round2Teach: "A háziállatok otthon élnek az emberekkel — például kutyák, macskák és nyulak. A vadállatok a természetben élnek — például rókák, medvék és sas. Néhány állat mindkettő lehet!",
    round3Title: "Hol élnek az állatok?",
    round3Hint: "Hol él ez az állat?",
    round3Teach: "Minden állatnak van egy különleges otthona! A halak vízben élnek, a madarak fészekben, a medvék barlangban alszanak, és a kutyák házakban élnek családjaikkal.",
    round4Title: "Állatkölyök",
    round4Hint: "Hogy hívják ennek az állatnak a kölykét?",
    round4Teach: "Az állatbábyoknak speciális nevei vannak! A kutya kölykét kölyöknek, a macska kölykét cicakölyköknek, a marha kölykét borjúnak, és a kacsa kölykét csibének hívjuk.",
    round5Title: "Gyors összefoglalás",
    round5Hint: "Válaszolj a kérdésre!",
    round5Teach: "Nézzük meg, mit tanultál az állatokról — a hangokról, otthonokról és kölykökről!",
    gotIt: "Értem! →",
    next: "Tovább",
    finish: "Kész",
    correct: "Helyes!",
    wrong: "Hibás!",
    pet: "Háziállat",
    wild: "Vadállat",
    dog: "Kutya",
    cat: "Macska",
    cow: "Tehén",
    frog: "Béka",
    duck: "Kacsa",
    lion: "Oroszlán",
    bird: "Madár",
    fish: "Hal",
    bear: "Medve",
    horse: "Ló",
    rabbit: "Nyúl",
    hedgehog: "Süni",
    sound_dog: "Vau!",
    sound_cat: "Miau!",
    sound_cow: "Mú!",
    sound_frog: "Brekeke!",
    sound_duck: "Háp!",
    sound_lion: "Rrrr!",
    nest: "Fészek",
    water: "Víz",
    cave: "Barlang",
    barn: "Istálló",
    forest: "Erdő",
    home: "Otthon",
    kitten: "Cicakölyök",
    puppy: "Kutyakölyök",
    calf: "Borjú",
    foal: "Csikó",
    chick: "Csibe",
    cub: "Kölyök",
    howManyLegs_dog: "Hány lába van a kutyának?",
    ans_four: "4",
    ans_two: "2",
    ans_six: "6",
    isFishPet: "Lehet a hal háziállat?",
    ansYes: "Igen",
    ansNo: "Nem",
    whereDoFishLive: "Hol élnek a halak?",
    babyDogCalled: "Hogy hívják a kutyakölyköt?",
    soundCat: "Milyen hangot ad a macska?",
  },
  ro: {
    round1Title: "Sunetele animalelor",
    round1Hint: "Ce animal face acest sunet?",
    round1Teach: "Animalele comunică prin sunete! Câinii latră (ham!), pisicile mieună, vacile muguiesc, broaștele cârâiesc și rațele cârâiesc. Fiecare animal are sunetul lui special.",
    round2Title: "Animal de companie sau sălbatic?",
    round2Hint: "Acest animal este de companie sau sălbatic?",
    round2Teach: "Animalele de companie trăiesc cu oamenii acasă — ca câini, pisici și iepuri. Animalele sălbatice trăiesc în natură — ca vulpi, urși și vulturi. Unele animale pot fi amândouă!",
    round3Title: "Unde trăiesc animalele?",
    round3Hint: "Unde trăiește acest animal?",
    round3Teach: "Fiecare animal are o casă specială! Peștii trăiesc în apă, păsările trăiesc în cuiburi, urșii dorm în peșteri, și câinii trăiesc în case cu familiile lor.",
    round4Title: "Puii de animale",
    round4Hint: "Cum se numește puiul acestui animal?",
    round4Teach: "Puii de animale au nume speciale! Puiul de câine se numește cățeluș, puiul de pisică se numește pisicuță, puiul de vacă se numește vițel, și puiul de rață se numește pui de rață.",
    round5Title: "Recapitulare rapidă",
    round5Hint: "Răspunde la întrebare!",
    round5Teach: "Să vedem ce ai învățat despre animale — sunetele lor, case și pui!",
    gotIt: "Am înțeles! →",
    next: "Înainte",
    finish: "Gata",
    correct: "Corect!",
    wrong: "Greșit!",
    pet: "Animal de companie",
    wild: "Sălbatic",
    dog: "Câine",
    cat: "Pisică",
    cow: "Vacă",
    frog: "Broască",
    duck: "Rață",
    lion: "Leu",
    bird: "Pasăre",
    fish: "Pește",
    bear: "Urs",
    horse: "Cal",
    rabbit: "Iepure",
    hedgehog: "Arici",
    sound_dog: "Ham!",
    sound_cat: "Miau!",
    sound_cow: "Muuu!",
    sound_frog: "Oac!",
    sound_duck: "Mac!",
    sound_lion: "Rrrr!",
    nest: "Cuib",
    water: "Apă",
    cave: "Peșteră",
    barn: "Grajd",
    forest: "Pădure",
    home: "Acasă",
    kitten: "Pisicuță",
    puppy: "Cățeluș",
    calf: "Vițel",
    foal: "Mânz",
    chick: "Pui de găină",
    cub: "Pui",
    howManyLegs_dog: "Câte picioare are câinele?",
    ans_four: "4",
    ans_two: "2",
    ans_six: "6",
    isFishPet: "Poate fi peștele animal de companie?",
    ansYes: "Da",
    ansNo: "Nu",
    whereDoFishLive: "Unde trăiesc peștii?",
    babyDogCalled: "Cum se numește puiul de câine?",
    soundCat: "Ce sunet face pisica?",
  },
};

/* ─── helpers ─── */
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ─── Animal emoji map ─── */
const ANIMAL_EMOJI: Record<string, string> = {
  dog: "🐶",
  cat: "🐱",
  cow: "🐮",
  frog: "🐸",
  duck: "🦆",
  lion: "🦁",
  bird: "🐦",
  fish: "🐟",
  bear: "🐻",
  horse: "🐴",
  rabbit: "🐰",
  hedgehog: "🦔",
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

function AnimalExplorer({ color, lang = "de", onDone, onClose }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const [showTeach, setShowTeach] = useState(true);
  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "hu" ? "hu-HU" : lang === "de" ? "de-DE" : lang === "ro" ? "ro-RO" : "en-US";
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }, [lang]);

  /* ─── Round 0: Animal Sounds — show sound, pick the animal ─── */
  type SoundQ = { soundKey: string; answer: string; options: string[] };
  const soundQuestions = useMemo<SoundQ[]>(() => shuffle([
    { soundKey: "sound_dog",  answer: "dog",  options: ["dog", "cat", "cow", "frog"] },
    { soundKey: "sound_cat",  answer: "cat",  options: ["cat", "duck", "dog", "lion"] },
    { soundKey: "sound_cow",  answer: "cow",  options: ["cow", "frog", "dog", "horse"] },
    { soundKey: "sound_frog", answer: "frog", options: ["frog", "duck", "rabbit", "dog"] },
    { soundKey: "sound_duck", answer: "duck", options: ["duck", "bird", "frog", "cat"] },
    { soundKey: "sound_lion", answer: "lion", options: ["lion", "bear", "dog", "horse"] },
  ]).slice(0, 4), []);
  const [soundIdx, setSoundIdx] = useState(0);
  const [soundAnswer, setSoundAnswer] = useState<string | null>(null);

  /* ─── Round 1: Pet or Wild? ─── */
  type PetQ = { animal: string; isPet: boolean };
  const petQuestions = useMemo<PetQ[]>(() => shuffle([
    { animal: "dog",      isPet: true  },
    { animal: "cat",      isPet: true  },
    { animal: "rabbit",   isPet: true  },
    { animal: "horse",    isPet: true  },
    { animal: "lion",     isPet: false },
    { animal: "bear",     isPet: false },
    { animal: "frog",     isPet: false },
    { animal: "hedgehog", isPet: false },
  ]).slice(0, 4), []);
  const [petIdx, setPetIdx] = useState(0);
  // answer key: "pet" or "wild"
  const [petAnswer, setPetAnswer] = useState<string | null>(null);

  /* ─── Round 2: Animal Homes ─── */
  type HomeQ = { animal: string; answer: string; options: string[] };
  const homeQuestions = useMemo<HomeQ[]>(() => shuffle([
    { animal: "bird",  answer: "nest",   options: ["nest",   "cave",   "water",  "barn"]   },
    { animal: "fish",  answer: "water",  options: ["water",  "nest",   "forest", "home"]   },
    { animal: "bear",  answer: "cave",   options: ["cave",   "nest",   "water",  "barn"]   },
    { animal: "cow",   answer: "barn",   options: ["barn",   "cave",   "forest", "nest"]   },
    { animal: "lion",  answer: "forest", options: ["forest", "water",  "home",   "nest"]   },
    { animal: "dog",   answer: "home",   options: ["home",   "cave",   "nest",   "forest"] },
  ]).slice(0, 3), []);
  const [homeIdx, setHomeIdx] = useState(0);
  const [homeAnswer, setHomeAnswer] = useState<string | null>(null);

  /* ─── Round 3: Animal Babies ─── */
  type BabyQ = { animal: string; answer: string; options: string[] };
  const babyQuestions = useMemo<BabyQ[]>(() => shuffle([
    { animal: "cat",   answer: "kitten", options: ["kitten", "puppy",  "chick",  "calf"]  },
    { animal: "dog",   answer: "puppy",  options: ["puppy",  "kitten", "foal",   "chick"] },
    { animal: "cow",   answer: "calf",   options: ["calf",   "foal",   "kitten", "chick"] },
    { animal: "horse", answer: "foal",   options: ["foal",   "calf",   "puppy",  "cub"]   },
    { animal: "duck",  answer: "chick",  options: ["chick",  "kitten", "cub",    "foal"]  },
    { animal: "bear",  answer: "cub",    options: ["cub",    "calf",   "chick",  "puppy"] },
  ]).slice(0, 3), []);
  const [babyIdx, setBabyIdx] = useState(0);
  const [babyAnswer, setBabyAnswer] = useState<string | null>(null);

  /* ─── Round 4: Mixed review ─── */
  type ReviewQ = { questionKey: string; answer: string; options: string[] };
  const reviewQuestions = useMemo<ReviewQ[]>(() => shuffle([
    { questionKey: "howManyLegs_dog",  answer: "ans_four", options: ["ans_four", "ans_two", "ans_six"]  },
    { questionKey: "isFishPet",        answer: "ansYes",   options: ["ansYes",   "ansNo"]               },
    { questionKey: "whereDoFishLive",  answer: "water",    options: ["water",    "nest",    "forest"]   },
    { questionKey: "babyDogCalled",    answer: "puppy",    options: ["puppy",    "kitten",  "calf"]     },
    { questionKey: "soundCat",         answer: "sound_cat",options: ["sound_cat","sound_dog","sound_cow"]},
  ]).slice(0, 3), []);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [reviewAnswer, setReviewAnswer] = useState<string | null>(null);

  /* ─── advance round ─── */
  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      onDone(scoreRef.current, totalRef.current);
    } else {
      setRound(r => r + 1);
      setShowTeach(true);
    }
  }, [round, onDone]);

  /* ─── MCQ handler factory ─── */
  const makeMcqHandler = (
    correctAnswer: string,
    setAnswer: (v: string) => void,
  ) => (choice: string) => {
    totalRef.current++;
    if (choice === correctAnswer) scoreRef.current++;
    setAnswer(choice);
  };

  /* ─── Render helpers ─── */
  const renderMCQ = (
    options: string[],
    selected: string | null,
    correct: string,
    onSelect: (v: string) => void,
  ) => (
    <div className="space-y-2 w-full max-w-xs">
      {options.map((opt) => {
        const isSelected = selected === opt;
        const isCorrect = opt === correct;
        let bg = "rgba(255,255,255,0.06)";
        let border = "rgba(255,255,255,0.1)";
        if (selected !== null) {
          if (isCorrect) { bg = "#00FF8833"; border = "#00FF88"; }
          else if (isSelected && !isCorrect) { bg = "#FF2D7833"; border = "#FF2D78"; }
        }
        return (
          <motion.button
            key={opt}
            onClick={() => { if (selected === null) onSelect(opt); }}
            className="w-full py-3 px-4 rounded-xl transition-all font-bold text-white text-sm"
            whileTap={selected === null ? { scale: 0.97 } : undefined}
            style={{ background: bg, border: `2px solid ${border}` }}
          >
            {lbl[opt] ?? opt}
          </motion.button>
        );
      })}
    </div>
  );

  const renderMCQWithEmoji = (
    options: string[],
    selected: string | null,
    correct: string,
    onSelect: (v: string) => void,
  ) => (
    <div className="space-y-2 w-full max-w-xs">
      {options.map((opt) => {
        const isSelected = selected === opt;
        const isCorrect = opt === correct;
        let bg = "rgba(255,255,255,0.06)";
        let border = "rgba(255,255,255,0.1)";
        if (selected !== null) {
          if (isCorrect) { bg = "#00FF8833"; border = "#00FF88"; }
          else if (isSelected && !isCorrect) { bg = "#FF2D7833"; border = "#FF2D78"; }
        }
        return (
          <motion.button
            key={opt}
            onClick={() => { if (selected === null) onSelect(opt); }}
            className="w-full py-3 px-4 rounded-xl transition-all font-bold text-white text-sm flex items-center gap-3"
            whileTap={selected === null ? { scale: 0.97 } : undefined}
            style={{ background: bg, border: `2px solid ${border}` }}
          >
            <span className="text-2xl">{ANIMAL_EMOJI[opt] ?? "🐾"}</span>
            <span>{lbl[opt] ?? opt}</span>
          </motion.button>
        );
      })}
    </div>
  );

  const renderFeedback = (selected: string | null, correct: string) => {
    if (selected === null) return null;
    const isCorrect = selected === correct;
    return (
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-black"
        style={{ color: isCorrect ? "#00FF88" : "#FF2D78" }}
      >
        {isCorrect ? lbl.correct : lbl.wrong}
      </motion.p>
    );
  };

  const renderNext = (
    disabled: boolean,
    onClick: () => void,
    label?: string,
  ) => (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className="w-full max-w-xs py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2 disabled:opacity-30 transition-opacity"
      style={{
        background: !disabled ? `linear-gradient(135deg, ${color}55, ${color}99)` : "rgba(255,255,255,0.06)",
        border: `2px solid ${!disabled ? color : "rgba(255,255,255,0.1)"}`,
      }}
    >
      {label ?? lbl.next} <ChevronRight size={16} />
    </motion.button>
  );

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
        >✕</button>
      )}
      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 pt-4 pb-3">
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
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4"
        >
          {/* ═══ ROUND 0 — Animal Sounds ═══ */}
          {round === 0 && (() => {
            if (showTeach) {
              return (
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="flex items-center gap-2 justify-center">
                    <p className="text-xl font-black text-white text-center">{lbl.round1Title}</p>
                    <button onClick={() => speak(lbl.round1Title + ". " + lbl.round1Teach)}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
                    <p className="text-sm text-white/80 leading-relaxed">{lbl.round1Teach}</p>
                  </div>
                  <motion.button onClick={() => setShowTeach(false)}
                    className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
                    whileTap={{ scale: 0.97 }}>
                    {lbl.gotIt} <ChevronRight size={16} />
                  </motion.button>
                </div>
              );
            }
            const q = soundQuestions[soundIdx];
            if (!q) return null;
            const opts = shuffle(q.options);
            return (
              <>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
                  <button onClick={() => speak(lbl.round1Title + ". " + lbl.round1Hint)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                    <Volume2 size={16} />
                  </button>
                </div>
                <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
                <span className="text-white/40 text-xs font-bold">{soundIdx + 1}/{soundQuestions.length}</span>

                {/* Sound display */}
                <div
                  className="w-full max-w-xs py-6 rounded-2xl text-center"
                  style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                >
                  <p className="text-5xl font-black" style={{ color }}>
                    {lbl[q.soundKey]}
                  </p>
                  <p className="text-white/40 text-xs font-bold mt-1">{lbl.round1Hint}</p>
                </div>

                {renderMCQWithEmoji(opts, soundAnswer, q.answer, makeMcqHandler(q.answer, setSoundAnswer))}
                {renderFeedback(soundAnswer, q.answer)}
                {renderNext(soundAnswer === null, () => {
                  if (soundIdx < soundQuestions.length - 1) {
                    setSoundIdx(i => i + 1);
                    setSoundAnswer(null);
                  } else {
                    advance();
                  }
                })}
              </>
            );
          })()}

          {/* ═══ ROUND 1 — Pet or Wild? ═══ */}
          {round === 1 && (() => {
            if (showTeach) {
              return (
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="flex items-center gap-2 justify-center">
                    <p className="text-xl font-black text-white text-center">{lbl.round2Title}</p>
                    <button onClick={() => speak(lbl.round2Title + ". " + lbl.round2Teach)}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
                    <p className="text-sm text-white/80 leading-relaxed">{lbl.round2Teach}</p>
                  </div>
                  <motion.button onClick={() => setShowTeach(false)}
                    className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
                    whileTap={{ scale: 0.97 }}>
                    {lbl.gotIt} <ChevronRight size={16} />
                  </motion.button>
                </div>
              );
            }
            const q = petQuestions[petIdx];
            if (!q) return null;
            const correctKey = q.isPet ? "pet" : "wild";
            return (
              <>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
                  <button onClick={() => speak(lbl.round2Title + ". " + lbl.round2Hint)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                    <Volume2 size={16} />
                  </button>
                </div>
                <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
                <span className="text-white/40 text-xs font-bold">{petIdx + 1}/{petQuestions.length}</span>

                {/* Animal card */}
                <div
                  className="w-full max-w-xs py-6 rounded-2xl text-center"
                  style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.1)" }}
                >
<motion.div
  className="flex justify-center items-center h-[120px]"
  whileHover={{ scale: 1.08 }}
  animate={{ y: [0, -4, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
  style={{
    filter: "drop-shadow(0 0 10px rgba(0,255,200,0.3))"
  }}
>
  {renderAnimal(q.animal, lang)}
</motion.div>  {renderAnimal(q.animal, lang)}
</div>
                  <p className="text-white font-black text-lg">{lbl[q.animal]}</p>
                </div>

                {/* Pet / Wild buttons */}
                <div className="flex gap-3 w-full max-w-xs">
                  {(["pet", "wild"] as const).map((key) => {
                    const isSelected = petAnswer === key;
                    const isCorrect = key === correctKey;
                    let bg = "rgba(255,255,255,0.06)";
                    let border = "rgba(255,255,255,0.1)";
                    if (petAnswer !== null) {
                      if (isCorrect) { bg = "#00FF8833"; border = "#00FF88"; }
                      else if (isSelected && !isCorrect) { bg = "#FF2D7833"; border = "#FF2D78"; }
                    }
                    return (
                      <motion.button
                        key={key}
                        onClick={() => {
                          if (petAnswer !== null) return;
                          totalRef.current++;
                          if (key === correctKey) scoreRef.current++;
                          setPetAnswer(key);
                        }}
                        whileTap={petAnswer === null ? { scale: 0.97 } : undefined}
                        className="flex-1 py-3 rounded-xl transition-all font-black text-white text-sm"
                        style={{ background: bg, border: `2px solid ${border}` }}
                      >
                        {key === "pet" ? "🏠" : "🌿"} {lbl[key]}
                      </motion.button>
                    );
                  })}
                </div>

                {petAnswer !== null && renderFeedback(
                  petAnswer === correctKey ? "c" : "w",
                  "c",
                )}

                {renderNext(petAnswer === null, () => {
                  if (petIdx < petQuestions.length - 1) {
                    setPetIdx(i => i + 1);
                    setPetAnswer(null);
                  } else {
                    advance();
                  }
                })}
              </>
            );
          })()}

          {/* ═══ ROUND 2 — Animal Homes ═══ */}
          {round === 2 && (() => {
            if (showTeach) {
              return (
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="flex items-center gap-2 justify-center">
                    <p className="text-xl font-black text-white text-center">{lbl.round3Title}</p>
                    <button onClick={() => speak(lbl.round3Title + ". " + lbl.round3Teach)}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
                    <p className="text-sm text-white/80 leading-relaxed">{lbl.round3Teach}</p>
                  </div>
                  <motion.button onClick={() => setShowTeach(false)}
                    className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
                    whileTap={{ scale: 0.97 }}>
                    {lbl.gotIt} <ChevronRight size={16} />
                  </motion.button>
                </div>
              );
            }
            const q = homeQuestions[homeIdx];
            if (!q) return null;
            const opts = shuffle(q.options);
            return (
              <>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
                  <button onClick={() => speak(lbl.round3Title + ". " + lbl.round3Hint)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                    <Volume2 size={16} />
                  </button>
                </div>
                <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
                <span className="text-white/40 text-xs font-bold">{homeIdx + 1}/{homeQuestions.length}</span>

                {/* Animal display */}
                <div
                  className="w-full max-w-xs py-5 rounded-2xl text-center"
                  style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                >
                {renderAnimal(q.animal, lang)}
                  <p className="font-black text-white text-base">{lbl[q.animal]}</p>
                </div>

                {renderMCQ(opts, homeAnswer, q.answer, makeMcqHandler(q.answer, setHomeAnswer))}
                {renderFeedback(homeAnswer, q.answer)}
                {renderNext(homeAnswer === null, () => {
                  if (homeIdx < homeQuestions.length - 1) {
                    setHomeIdx(i => i + 1);
                    setHomeAnswer(null);
                  } else {
                    advance();
                  }
                })}
              </>
            );
          })()}

          {/* ═══ ROUND 3 — Animal Babies ═══ */}
          {round === 3 && (() => {
            if (showTeach) {
              return (
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="flex items-center gap-2 justify-center">
                    <p className="text-xl font-black text-white text-center">{lbl.round4Title}</p>
                    <button onClick={() => speak(lbl.round4Title + ". " + lbl.round4Teach)}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
                    <p className="text-sm text-white/80 leading-relaxed">{lbl.round4Teach}</p>
                  </div>
                  <motion.button onClick={() => setShowTeach(false)}
                    className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
                    whileTap={{ scale: 0.97 }}>
                    {lbl.gotIt} <ChevronRight size={16} />
                  </motion.button>
                </div>
              );
            }
            const q = babyQuestions[babyIdx];
            if (!q) return null;
            const opts = shuffle(q.options);
            return (
              <>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
                  <button onClick={() => speak(lbl.round4Title + ". " + lbl.round4Hint)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                    <Volume2 size={16} />
                  </button>
                </div>
                <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
                <span className="text-white/40 text-xs font-bold">{babyIdx + 1}/{babyQuestions.length}</span>

                {/* Animal display */}
                <div
                  className="w-full max-w-xs py-5 rounded-2xl text-center"
                  style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                >
                  {renderAnimal(q.animal, lang)}
                  <p className="font-black text-white text-base">{lbl[q.animal]}</p>
                </div>

                {renderMCQ(opts, babyAnswer, q.answer, makeMcqHandler(q.answer, setBabyAnswer))}
                {renderFeedback(babyAnswer, q.answer)}
                {renderNext(babyAnswer === null, () => {
                  if (babyIdx < babyQuestions.length - 1) {
                    setBabyIdx(i => i + 1);
                    setBabyAnswer(null);
                  } else {
                    advance();
                  }
                })}
              </>
            );
          })()}

          {/* ═══ ROUND 4 — Mixed review ═══ */}
          {round === 4 && (() => {
            if (showTeach) {
              return (
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="flex items-center gap-2 justify-center">
                    <p className="text-xl font-black text-white text-center">{lbl.round5Title}</p>
                    <button onClick={() => speak(lbl.round5Title + ". " + lbl.round5Teach)}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
                    <p className="text-sm text-white/80 leading-relaxed">{lbl.round5Teach}</p>
                  </div>
                  <motion.button onClick={() => setShowTeach(false)}
                    className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
                    whileTap={{ scale: 0.97 }}>
                    {lbl.gotIt} <ChevronRight size={16} />
                  </motion.button>
                </div>
              );
            }
            const q = reviewQuestions[reviewIdx];
            if (!q) return null;
            const opts = shuffle(q.options);
            return (
              <>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
                  <button onClick={() => speak(lbl.round5Title + ". " + lbl.round5Hint)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                    <Volume2 size={16} />
                  </button>
                </div>
                <p className="text-white/60 text-sm font-bold text-center">{lbl[q.questionKey]}</p>
                <span className="text-white/40 text-xs font-bold">{reviewIdx + 1}/{reviewQuestions.length}</span>

                {renderMCQ(opts, reviewAnswer, q.answer, makeMcqHandler(q.answer, setReviewAnswer))}
                {renderFeedback(reviewAnswer, q.answer)}
                {renderNext(reviewAnswer === null, () => {
                  if (reviewIdx < reviewQuestions.length - 1) {
                    setReviewIdx(i => i + 1);
                    setReviewAnswer(null);
                  } else {
                    advance();
                  }
                }, lbl.finish)}
              </>
            );
          })()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(AnimalExplorer);
