"use client";
// NatureReviewExplorer — Island i8: Nature Review
// Checkpoint 3 review: body parts, pet vs wild, seasons, senses, mixed
// All text in LABELS, randomized pools, answer lock-out, scoreRef tracking

import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TOTAL_ROUNDS = 5;

// ─── LABELS — all 4 languages, zero hardcoded strings ───────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Nature Review",
    round1Title: "Body Parts",
    round1Hint: "Which body part is described?",
    round2Title: "Pet or Wild?",
    round2Hint: "Is this animal a pet or wild?",
    round3Title: "Which Season?",
    round3Hint: "Which season matches the clue?",
    round4Title: "Senses & Organs",
    round4Hint: "Which organ do you use for this sense?",
    round5Title: "Nature Mix",
    round5Hint: "What is the answer?",
    // body parts
    head: "Head",
    eye: "Eye",
    hand: "Hand",
    leg: "Leg",
    ear: "Ear",
    nose: "Nose",
    mouth: "Mouth",
    arm: "Arm",
    // animals
    dog: "Dog",
    cat: "Cat",
    rabbit: "Rabbit",
    fox: "Fox",
    squirrel: "Squirrel",
    deer: "Deer",
    owl: "Owl",
    wolf: "Wolf",
    // pet / wild keys
    pet: "Pet",
    wild: "Wild animal",
    // seasons
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    winter: "Winter",
    // senses
    sight: "Sight",
    hearing: "Hearing",
    smell: "Smell",
    taste: "Taste",
    touch: "Touch",
    // body clues
    clue_eye: "We use this to see 👀",
    clue_ear: "We use this to hear sounds 👂",
    clue_nose: "We use this to smell 👃",
    clue_hand: "We use this to touch and feel 🤚",
    clue_leg: "We use these to walk and run 🦵",
    clue_mouth: "We use this to taste and eat 👄",
    // animal clues
    clue_squirrel: "Small, bushy tail, climbs trees 🐿️",
    clue_fox: "Red fur, cunning, lives in the forest 🦊",
    clue_dog: "Faithful companion, loves to fetch 🐕",
    clue_owl: "Nocturnal bird, hoots at night 🦉",
    clue_deer: "Graceful, antlers, lives in forests 🦌",
    clue_rabbit: "Long ears, hops around, loves carrots 🐇",
    clue_wolf: "Howls at the moon, lives in packs 🐺",
    clue_cat: "Purrs, independent, domestic 🐱",
    // season clues
    clue_spring: "Flowers bloom, birds return, mild warmth 🌸",
    clue_summer: "Hot days, long sunshine, swimming weather ☀️",
    clue_autumn: "Leaves fall, cool wind, harvest time 🍂",
    clue_winter: "Snow falls, cold frost, trees are bare ❄️",
    // sense clues
    clue_sight: "You use your eyes for this sense 👁️",
    clue_hearing: "You use your ears for this sense 👂",
    clue_smell: "You use your nose for this sense 👃",
    clue_taste: "You use your tongue and mouth for this 😋",
    clue_touch: "You use your hands and skin for this 🤚",
    // ui
    next: "Next",
    correct: "Correct!",
    tryagain: "Try again",
    finish: "Finish!",
    questionOf: "Question",
    of: "of",
  },
  de: {
    title: "Natur-Wiederholung",
    round1Title: "Körperteile",
    round1Hint: "Welcher Körperteil wird beschrieben?",
    round2Title: "Haus- oder Wildtier?",
    round2Hint: "Ist dieses Tier ein Haus- oder Wildtier?",
    round3Title: "Welche Jahreszeit?",
    round3Hint: "Welche Jahreszeit passt zum Hinweis?",
    round4Title: "Sinne & Organe",
    round4Hint: "Welches Organ benutzt du für diesen Sinn?",
    round5Title: "Natur-Mix",
    round5Hint: "Was ist die richtige Antwort?",
    head: "Kopf",
    eye: "Auge",
    hand: "Hand",
    leg: "Bein",
    ear: "Ohr",
    nose: "Nase",
    mouth: "Mund",
    arm: "Arm",
    dog: "Hund",
    cat: "Katze",
    rabbit: "Hase",
    fox: "Fuchs",
    squirrel: "Eichhörnchen",
    deer: "Reh",
    owl: "Eule",
    wolf: "Wolf",
    pet: "Haustier",
    wild: "Wildtier",
    spring: "Frühling",
    summer: "Sommer",
    autumn: "Herbst",
    winter: "Winter",
    sight: "Sehen",
    hearing: "Hören",
    smell: "Riechen",
    taste: "Schmecken",
    touch: "Fühlen",
    clue_eye: "Damit siehst du 👀",
    clue_ear: "Damit hörst du Geräusche 👂",
    clue_nose: "Damit riechst du 👃",
    clue_hand: "Damit tastest und fühlst du 🤚",
    clue_leg: "Damit läufst und rennst du 🦵",
    clue_mouth: "Damit schmeckst du und isst du 👄",
    clue_squirrel: "Kleines Tier, buschiger Schwanz, klettert auf Bäume 🐿️",
    clue_fox: "Rotes Fell, schlau, lebt im Wald 🦊",
    clue_dog: "Treuer Begleiter, liebt Apportieren 🐕",
    clue_owl: "Nachtvogel, ruft in der Nacht 🦉",
    clue_deer: "Anmutig, Geweih, lebt im Wald 🦌",
    clue_rabbit: "Lange Ohren, hüpft, liebt Möhren 🐇",
    clue_wolf: "Heult den Mond an, lebt im Rudel 🐺",
    clue_cat: "Schnurrt, selbstständig, Haustier 🐱",
    clue_spring: "Blumen blühen, Vögel kehren zurück, milde Wärme 🌸",
    clue_summer: "Heiße Tage, viel Sonne, Badezeit ☀️",
    clue_autumn: "Blätter fallen, kühler Wind, Erntezeit 🍂",
    clue_winter: "Schnee fällt, kalter Frost, Bäume sind kahl ❄️",
    clue_sight: "Du benutzt deine Augen dafür 👁️",
    clue_hearing: "Du benutzt deine Ohren dafür 👂",
    clue_smell: "Du benutzt deine Nase dafür 👃",
    clue_taste: "Du benutzt deine Zunge und deinen Mund dafür 😋",
    clue_touch: "Du benutzt deine Hände und Haut dafür 🤚",
    next: "Weiter",
    correct: "Richtig!",
    tryagain: "Nochmal versuchen",
    finish: "Fertig!",
    questionOf: "Frage",
    of: "von",
  },
  hu: {
    title: "Természet Ismétlés",
    round1Title: "Testrészek",
    round1Hint: "Melyik testrészt írják le?",
    round2Title: "Háziállat vagy vadállat?",
    round2Hint: "Ez az állat háziállat vagy vadállat?",
    round3Title: "Melyik évszak?",
    round3Hint: "Melyik évszak illik az útmutatóhoz?",
    round4Title: "Érzékek és Szervek",
    round4Hint: "Melyik szervet használod ehhez az érzékhez?",
    round5Title: "Természet Mix",
    round5Hint: "Mi a helyes válasz?",
    head: "Fej",
    eye: "Szem",
    hand: "Kéz",
    leg: "Láb",
    ear: "Fül",
    nose: "Orr",
    mouth: "Száj",
    arm: "Kar",
    dog: "Kutya",
    cat: "Macska",
    rabbit: "Nyúl",
    fox: "Róka",
    squirrel: "Mókus",
    deer: "Őz",
    owl: "Bagoly",
    wolf: "Farkas",
    pet: "Háziállat",
    wild: "Vadállat",
    spring: "Tavasz",
    summer: "Nyár",
    autumn: "Ősz",
    winter: "Tél",
    sight: "Látás",
    hearing: "Hallás",
    smell: "Szaglás",
    taste: "Ízlelés",
    touch: "Tapintás",
    clue_eye: "Ezzel látsz 👀",
    clue_ear: "Ezzel hallasz hangokat 👂",
    clue_nose: "Ezzel szagolsz 👃",
    clue_hand: "Ezzel tapintasz és érzékelsz 🤚",
    clue_leg: "Ezekkel sétálsz és futsz 🦵",
    clue_mouth: "Ezzel ízlelsz és eszel 👄",
    clue_squirrel: "Kis állat, bozontos farka van, fákon mászik 🐿️",
    clue_fox: "Vörös szőr, ravasz, az erdőben él 🦊",
    clue_dog: "Hűséges társ, szeret apportírozni 🐕",
    clue_owl: "Éjszakai madár, éjjel huhog 🦉",
    clue_deer: "Elegáns, agancs, az erdőben él 🦌",
    clue_rabbit: "Hosszú fülek, ugrál, szereti a sárgarépát 🐇",
    clue_wolf: "A holdra üvölt, falkában él 🐺",
    clue_cat: "Dorombol, független, háziállat 🐱",
    clue_spring: "Virágok nyílnak, madarak visszatérnek, enyhe meleg 🌸",
    clue_summer: "Forró napok, hosszú napsütés, fürdési idő ☀️",
    clue_autumn: "Levelek hullnak, hűvös szél, aratási idő 🍂",
    clue_winter: "Hó esik, hideg fagy, kopár fák ❄️",
    clue_sight: "A szemeidet használod ehhez 👁️",
    clue_hearing: "A füleidet használod ehhez 👂",
    clue_smell: "Az orrodat használod ehhez 👃",
    clue_taste: "A nyelvedet és a szádat használod ehhez 😋",
    clue_touch: "A kezeidet és a bőrödet használod ehhez 🤚",
    next: "Tovább",
    correct: "Helyes!",
    tryagain: "Próbáld újra",
    finish: "Befejez!",
    questionOf: "Kérdés",
    of: "/",
  },
  ro: {
    title: "Recapitulare Natură",
    round1Title: "Părți ale Corpului",
    round1Hint: "Ce parte a corpului este descrisă?",
    round2Title: "Animal domestic sau sălbatic?",
    round2Hint: "Acest animal este domestic sau sălbatic?",
    round3Title: "Ce anotimp?",
    round3Hint: "Ce anotimp se potrivește cu indiciul?",
    round4Title: "Simțuri și Organe",
    round4Hint: "Ce organ folosești pentru acest simț?",
    round5Title: "Mix Natură",
    round5Hint: "Care este răspunsul corect?",
    head: "Cap",
    eye: "Ochi",
    hand: "Mână",
    leg: "Picior",
    ear: "Ureche",
    nose: "Nas",
    mouth: "Gură",
    arm: "Braț",
    dog: "Câine",
    cat: "Pisică",
    rabbit: "Iepure",
    fox: "Vulpe",
    squirrel: "Veveriță",
    deer: "Căprioară",
    owl: "Bufniță",
    wolf: "Lup",
    pet: "Animal domestic",
    wild: "Animal sălbatic",
    spring: "Primăvară",
    summer: "Vară",
    autumn: "Toamnă",
    winter: "Iarnă",
    sight: "Vedere",
    hearing: "Auz",
    smell: "Miros",
    taste: "Gust",
    touch: "Pipăit",
    clue_eye: "Cu acesta vezi 👀",
    clue_ear: "Cu acesta auzi sunete 👂",
    clue_nose: "Cu acesta miroși 👃",
    clue_hand: "Cu aceasta atingi și simți 🤚",
    clue_leg: "Cu acestea mergi și alergi 🦵",
    clue_mouth: "Cu aceasta guști și mănânci 👄",
    clue_squirrel: "Animal mic, coadă stufoasă, se cațără în copaci 🐿️",
    clue_fox: "Blană roșie, viclean, trăiește în pădure 🦊",
    clue_dog: "Companion fidel, îi place să aducă obiecte 🐕",
    clue_owl: "Pasăre nocturnă, strigă noaptea 🦉",
    clue_deer: "Grațios, cu coarne, trăiește în pădure 🦌",
    clue_rabbit: "Urechi lungi, sare, iubește morcovii 🐇",
    clue_wolf: "Urlă la lună, trăiește în haită 🐺",
    clue_cat: "Toarce, independent, animal domestic 🐱",
    clue_spring: "Florile înfloresc, păsările revin, căldură blândă 🌸",
    clue_summer: "Zile fierbinți, mult soare, vreme de baie ☀️",
    clue_autumn: "Frunzele cad, vânt rece, timp de recoltă 🍂",
    clue_winter: "Cade zăpadă, îngheț rece, copaci goi ❄️",
    clue_sight: "Folosești ochii pentru acest simț 👁️",
    clue_hearing: "Folosești urechile pentru acest simț 👂",
    clue_smell: "Folosești nasul pentru acest simț 👃",
    clue_taste: "Folosești limba și gura pentru asta 😋",
    clue_touch: "Folosești mâinile și pielea pentru asta 🤚",
    next: "Înainte",
    correct: "Corect!",
    tryagain: "Încearcă din nou",
    finish: "Termină!",
    questionOf: "Întrebarea",
    of: "din",
  },
};

// ─── helpers ─────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── question types ───────────────────────────────────────────────────────────
interface MCQ {
  clueKey: string;          // LABELS key for the clue text
  correctKey: string;       // language-independent answer key
  optionKeys: string[];     // shuffled option keys (display via LABELS[key])
}

// ─── question pools ───────────────────────────────────────────────────────────

// Round 1 — body parts: clue → correct key, distractors
const BODY_POOL: Array<{ clueKey: string; correctKey: string; distractors: string[] }> = [
  { clueKey: "clue_eye",   correctKey: "eye",   distractors: ["ear", "nose", "hand"] },
  { clueKey: "clue_ear",   correctKey: "ear",   distractors: ["eye", "nose", "mouth"] },
  { clueKey: "clue_nose",  correctKey: "nose",  distractors: ["ear", "mouth", "hand"] },
  { clueKey: "clue_hand",  correctKey: "hand",  distractors: ["leg", "arm", "foot"] },
  { clueKey: "clue_leg",   correctKey: "leg",   distractors: ["arm", "hand", "head"] },
  { clueKey: "clue_mouth", correctKey: "mouth", distractors: ["nose", "eye", "ear"] },
];

// Round 2 — animal classification: which are pets, which are wild
const PET_ANIMALS  = ["dog", "cat", "rabbit"] as const;
const WILD_ANIMALS = ["fox", "squirrel", "deer", "owl", "wolf"] as const;
const ANIMAL_POOL: Array<{ animalKey: string; correctKey: "pet" | "wild" }> = [
  ...PET_ANIMALS.map(a  => ({ animalKey: a, correctKey: "pet"  as const })),
  ...WILD_ANIMALS.map(a => ({ animalKey: a, correctKey: "wild" as const })),
];

// Round 3 — seasons
const SEASON_POOL: Array<{ clueKey: string; correctKey: string }> = [
  { clueKey: "clue_spring", correctKey: "spring" },
  { clueKey: "clue_summer", correctKey: "summer" },
  { clueKey: "clue_autumn", correctKey: "autumn" },
  { clueKey: "clue_winter", correctKey: "winter" },
];
const ALL_SEASONS = ["spring", "summer", "autumn", "winter"];

// Round 4 — senses → organ
const SENSE_ORGAN_MAP: Record<string, string> = {
  sight:   "eye",
  hearing: "ear",
  smell:   "nose",
  taste:   "mouth",
  touch:   "hand",
};
const SENSE_POOL = Object.keys(SENSE_ORGAN_MAP);

// Round 5 — mixed: animal clue → animal name
const ANIMAL_CLUE_POOL: Array<{ clueKey: string; correctKey: string; distractors: string[] }> = [
  { clueKey: "clue_squirrel", correctKey: "squirrel", distractors: ["fox",  "deer", "owl"] },
  { clueKey: "clue_fox",      correctKey: "fox",      distractors: ["wolf", "deer", "owl"] },
  { clueKey: "clue_dog",      correctKey: "dog",      distractors: ["cat",  "rabbit", "fox"] },
  { clueKey: "clue_owl",      correctKey: "owl",      distractors: ["fox",  "squirrel", "deer"] },
  { clueKey: "clue_deer",     correctKey: "deer",     distractors: ["fox",  "wolf", "squirrel"] },
  { clueKey: "clue_rabbit",   correctKey: "rabbit",   distractors: ["cat",  "dog", "squirrel"] },
  { clueKey: "clue_wolf",     correctKey: "wolf",     distractors: ["fox",  "deer", "owl"] },
  { clueKey: "clue_cat",      correctKey: "cat",      distractors: ["dog",  "rabbit", "fox"] },
];

// ─── generate 3 unique MCQs from a pool (random each mount) ──────────────────
function makeBodyRound(): MCQ[] {
  return shuffle(BODY_POOL).slice(0, 3).map(item => ({
    clueKey: item.clueKey,
    correctKey: item.correctKey,
    optionKeys: shuffle([item.correctKey, ...shuffle(item.distractors).slice(0, 2)]),
  }));
}

function makeAnimalClassifyRound(): MCQ[] {
  const petSample   = shuffle([...PET_ANIMALS]).slice(0, 2);
  const wildSample  = shuffle([...WILD_ANIMALS]).slice(0, 1);
  const all = shuffle([...petSample, ...wildSample]);
  return all.map(animalKey => {
    const isWild = (WILD_ANIMALS as readonly string[]).includes(animalKey);
    return {
      clueKey: `clue_${animalKey}`,
      correctKey: isWild ? "wild" : "pet",
      optionKeys: ["pet", "wild"],   // always both, no shuffle needed
    };
  });
}

function makeSeasonRound(): MCQ[] {
  return shuffle(SEASON_POOL).slice(0, 3).map(item => {
    const distractors = ALL_SEASONS.filter(s => s !== item.correctKey);
    return {
      clueKey: item.clueKey,
      correctKey: item.correctKey,
      optionKeys: shuffle([item.correctKey, ...shuffle(distractors).slice(0, 2)]),
    };
  });
}

function makeSenseRound(): MCQ[] {
  return shuffle(SENSE_POOL).slice(0, 3).map(senseKey => {
    const organKey = SENSE_ORGAN_MAP[senseKey];
    const allOrgans = ["eye", "ear", "nose", "mouth", "hand"];
    const distractors = allOrgans.filter(o => o !== organKey);
    return {
      clueKey: `clue_${senseKey}`,
      correctKey: organKey,
      optionKeys: shuffle([organKey, ...shuffle(distractors).slice(0, 2)]),
    };
  });
}

function makeMixedRound(): MCQ[] {
  return shuffle(ANIMAL_CLUE_POOL).slice(0, 3).map(item => ({
    clueKey: item.clueKey,
    correctKey: item.correctKey,
    optionKeys: shuffle([item.correctKey, ...shuffle(item.distractors).slice(0, 2)]),
  }));
}

// ─── sub-quiz component ───────────────────────────────────────────────────────
interface SubQuizProps {
  color: string;
  lbl: Record<string, string>;
  questions: MCQ[];
  onScore: (correct: number, total: number) => void;
  titleKey: string;
  hintKey: string;
}

function SubQuiz({ color, lbl, questions, onScore, titleKey, hintKey }: SubQuizProps) {
  const [idx, setIdx]           = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked]     = useState(false);
  const correctRef              = useRef(0);
  const done                    = useRef(false);

  const q = questions[idx];

  const handleSelect = useCallback((key: string) => {
    if (locked) return;
    setSelected(key);
    setLocked(true);
    if (key === q.correctKey) correctRef.current++;
  }, [locked, q.correctKey]);

  const handleNext = useCallback(() => {
    if (idx < questions.length - 1) {
      setIdx(i => i + 1);
      setSelected(null);
      setLocked(false);
    } else {
      if (!done.current) {
        done.current = true;
        onScore(correctRef.current, questions.length);
      }
    }
  }, [idx, questions.length, onScore]);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* title + hint */}
      <p className="text-xl font-black text-white text-center">{lbl[titleKey]}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl[hintKey]}</p>

      {/* sub-progress dots */}
      <div className="flex gap-1.5">
        {questions.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full transition-colors"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.2)" }} />
        ))}
      </div>

      {/* clue card */}
      <div className="bg-white/[0.07] border border-white/10 rounded-2xl px-5 py-4 text-center w-full">
        <p className="text-white font-bold text-sm leading-relaxed">{lbl[q.clueKey] ?? q.clueKey}</p>
      </div>

      {/* options */}
      <div className="flex flex-col gap-2 w-full">
        {q.optionKeys.map(key => {
          const isSelected = selected === key;
          const isCorrect  = key === q.correctKey;
          let bg = "rgba(255,255,255,0.06)";
          let border = "rgba(255,255,255,0.15)";
          if (isSelected) {
            bg     = isCorrect ? "rgba(0,255,136,0.15)" : "rgba(255,45,120,0.15)";
            border = isCorrect ? "#00FF88" : "#FF2D78";
          } else if (locked && isCorrect) {
            bg     = "rgba(0,255,136,0.10)";
            border = "#00FF88";
          }
          return (
            <motion.button key={key}
              onClick={() => handleSelect(key)}
              whileTap={locked ? {} : { scale: 0.97 }}
              className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors text-left"
              style={{ background: bg, border: `2px solid ${border}`, cursor: locked ? "default" : "pointer" }}>
              {lbl[key] ?? key}
            </motion.button>
          );
        })}
      </div>

      {/* feedback + next */}
      <AnimatePresence>
        {locked && (
          <motion.div className="flex flex-col items-center gap-3 w-full"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <p className="text-sm font-bold" style={{ color: selected === q.correctKey ? "#00FF88" : "#FF2D78" }}>
              {selected === q.correctKey ? lbl.correct : `${lbl.tryagain} — ${lbl[q.correctKey] ?? q.correctKey}`}
            </p>
            <motion.button onClick={handleNext}
              className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx < questions.length - 1 ? lbl.next : lbl.finish} <ChevronRight size={16} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

// ─── main component ───────────────────────────────────────────────────────────
function NatureReviewExplorer({ color, lang = "de", onDone, onClose }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;

  // randomize all question sets once per mount
  const rounds = useMemo(() => [
    makeBodyRound(),
    makeAnimalClassifyRound(),
    makeSeasonRound(),
    makeSenseRound(),
    makeMixedRound(),
  ], []);

  const ROUND_META = [
    { titleKey: "round1Title", hintKey: "round1Hint" },
    { titleKey: "round2Title", hintKey: "round2Hint" },
    { titleKey: "round3Title", hintKey: "round3Hint" },
    { titleKey: "round4Title", hintKey: "round4Hint" },
    { titleKey: "round5Title", hintKey: "round5Hint" },
  ];

  const [round, setRound] = useState(0);
  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  const handleRoundDone = useCallback((correct: number, total: number) => {
    scoreRef.current += correct;
    totalRef.current += total;
    if (round >= TOTAL_ROUNDS - 1) {
      onDone(scoreRef.current, totalRef.current);
    } else {
      setRound(r => r + 1);
    }
  }, [round, onDone]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
        >✕</button>
      )}
      {/* round progress dots */}
      <div className="flex justify-center gap-1.5 pt-4 pb-2">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>

      {/* title */}
      <p className="text-center text-white/40 text-xs font-bold pb-1">{lbl.title}</p>

      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4">
          <SubQuiz
            key={round}
            color={color}
            lbl={lbl}
            questions={rounds[round]}
            onScore={handleRoundDone}
            titleKey={ROUND_META[round].titleKey}
            hintKey={ROUND_META[round].hintKey}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(NatureReviewExplorer);
