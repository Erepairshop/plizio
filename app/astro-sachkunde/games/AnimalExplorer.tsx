"use client";
// AnimalExplorer — Island i2: Pets & Wild Animals (Haustiere & Wildtiere)
// Teaches: animal sounds, pet vs wild, animal homes, animal babies

import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TOTAL_ROUNDS = 5;

/* ─── i18n labels ─── */
const LABELS: Record<string, Record<string, string>> = {
  en: {
    round1Title: "Animal Sounds",
    round1Hint: "Which animal makes this sound?",
    round2Title: "Pet or Wild?",
    round2Hint: "Is this animal a pet or wild?",
    round3Title: "Animal Homes",
    round3Hint: "Where does this animal live?",
    round4Title: "Animal Babies",
    round4Hint: "What is a baby of this animal called?",
    round5Title: "Quick Review",
    round5Hint: "Answer the question!",
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
    round2Title: "Haustier oder Wildtier?",
    round2Hint: "Ist dieses Tier ein Haustier oder Wildtier?",
    round3Title: "Wo leben Tiere?",
    round3Hint: "Wo lebt dieses Tier?",
    round4Title: "Tierkinder",
    round4Hint: "Wie heißt das Jungtier?",
    round5Title: "Schnelle Wiederholung",
    round5Hint: "Beantworte die Frage!",
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
    round2Title: "Háziállat vagy vadállat?",
    round2Hint: "Ez az állat háziállat vagy vadállat?",
    round3Title: "Hol élnek az állatok?",
    round3Hint: "Hol él ez az állat?",
    round4Title: "Állatkölyök",
    round4Hint: "Hogy hívják ennek az állatnak a kölykét?",
    round5Title: "Gyors összefoglalás",
    round5Hint: "Válaszolj a kérdésre!",
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
    round2Title: "Animal de companie sau sălbatic?",
    round2Hint: "Acest animal este de companie sau sălbatic?",
    round3Title: "Unde trăiesc animalele?",
    round3Hint: "Unde trăiește acest animal?",
    round4Title: "Puii de animale",
    round4Hint: "Cum se numește puiul acestui animal?",
    round5Title: "Recapitulare rapidă",
    round5Hint: "Răspunde la întrebare!",
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
}

function AnimalExplorer({ color, lang = "de", onDone }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const scoreRef = useRef(0);
  const totalRef = useRef(0);

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
            const q = soundQuestions[soundIdx];
            if (!q) return null;
            const opts = shuffle(q.options);
            return (
              <>
                <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
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
            const q = petQuestions[petIdx];
            if (!q) return null;
            const correctKey = q.isPet ? "pet" : "wild";
            return (
              <>
                <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
                <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
                <span className="text-white/40 text-xs font-bold">{petIdx + 1}/{petQuestions.length}</span>

                {/* Animal card */}
                <div
                  className="w-full max-w-xs py-6 rounded-2xl text-center"
                  style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="text-6xl mb-2">{ANIMAL_EMOJI[q.animal] ?? "🐾"}</p>
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
            const q = homeQuestions[homeIdx];
            if (!q) return null;
            const opts = shuffle(q.options);
            return (
              <>
                <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
                <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
                <span className="text-white/40 text-xs font-bold">{homeIdx + 1}/{homeQuestions.length}</span>

                {/* Animal display */}
                <div
                  className="w-full max-w-xs py-5 rounded-2xl text-center"
                  style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                >
                  <p className="text-5xl mb-1">{ANIMAL_EMOJI[q.animal] ?? "🐾"}</p>
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
            const q = babyQuestions[babyIdx];
            if (!q) return null;
            const opts = shuffle(q.options);
            return (
              <>
                <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
                <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
                <span className="text-white/40 text-xs font-bold">{babyIdx + 1}/{babyQuestions.length}</span>

                {/* Animal display */}
                <div
                  className="w-full max-w-xs py-5 rounded-2xl text-center"
                  style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                >
                  <p className="text-5xl mb-1">{ANIMAL_EMOJI[q.animal] ?? "🐾"}</p>
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
            const q = reviewQuestions[reviewIdx];
            if (!q) return null;
            const opts = shuffle(q.options);
            return (
              <>
                <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
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
