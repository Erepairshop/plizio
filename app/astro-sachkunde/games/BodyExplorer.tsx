"use client";
// BodyExplorer — Island i1: Body & Senses (Körper & Sinne)
// Teaches: body parts, 5 senses, health/hygiene

import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Volume2 } from "lucide-react";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const TOTAL_ROUNDS = 5;

/* ─── i18n labels ─── */
const LABELS: Record<string, Record<string, string>> = {
  en: {
    round1Title: "Body Parts",
    round1Hint: "Tap on the highlighted body part!",
    round1Teach: "Our body has many parts! We have a head, arms, legs, hands and feet. Inside we have a heart that pumps blood, lungs for breathing, and a brain for thinking.",
    round2Title: "Match the Sense",
    round2Hint: "Which organ do we use for this?",
    round2Teach: "We have 5 senses to explore the world! Eyes for seeing, ears for hearing, nose for smelling, tongue for tasting, and skin for touching.",
    round3Title: "What Can We Do?",
    round3Hint: "What can we do with this organ?",
    round3Teach: "Our senses help us experience the world — eyes help us see colors and shapes, ears help us hear sounds, and our nose and tongue help us enjoy food!",
    round4Title: "Healthy Habits",
    round4Hint: "Is this healthy or unhealthy?",
    round4Teach: "To stay healthy, we should brush our teeth twice a day, wash our hands before eating, eat fruits and vegetables, sleep enough, and exercise every day!",
    round5Title: "Quick Review",
    round5Hint: "Answer the question!",
    round5Teach: "Let's review what you learned about your body, senses, and staying healthy!",
    gotIt: "Got it! →",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    wrong: "Wrong!",
    healthy: "Healthy",
    unhealthy: "Unhealthy",
    whatIsThis: "What is this?",
    head: "Head", arm: "Arm", leg: "Leg", hand: "Hand",
    body: "Body", foot: "Foot",
    eye: "Eye", ear: "Ear", nose: "Nose", tongue: "Tongue",
    see: "See", hear: "Hear", smell: "Smell", taste: "Taste",
    brushTeeth: "Brush teeth every day",
    washHands: "Wash hands before eating",
    eatVegetables: "Eat fruits and vegetables",
    sleepEnough: "Sleep enough hours",
    drinkWater: "Drink water regularly",
    eatCandies: "Eat candy all day long",
    skipWashing: "Never wash your hands",
    stayUpLate: "Stay up very late every night",
    noExercise: "Never play outside or exercise",
    drinkSoda: "Drink only soda, no water",
    senseForSeeing: "Which organ do we use to see?",
    senseForHearing: "Which organ do we use to hear?",
    senseForSmelling: "Which organ do we use to smell?",
    senseForTasting: "Which organ do we use to taste?",
    whatCanEyesDo: "What can we do with our eyes?",
    whatCanEarsDo: "What can we do with our ears?",
    whatCanNoseDo: "What can we do with our nose?",
    whatCanTongueDo: "What can we do with our tongue?",
    howManySenses: "How many senses do humans have?",
    answerFive: "5",
    answerThree: "3",
    answerTen: "10",
    whereIsHeart: "Where is the heart?",
    inChest: "In the chest",
    inHead: "In the head",
    inLeg: "In the leg",
  },
  de: {
    round1Title: "Körperteile",
    round1Hint: "Tippe auf den markierten Körperteil!",
    round1Teach: "Unser Körper hat viele Teile! Wir haben einen Kopf, Arme, Beine, Hände und Füße. Innen haben wir ein Herz, das Blut pumpt, Lungen zum Atmen und ein Gehirn zum Denken.",
    round2Title: "Welches Organ?",
    round2Hint: "Welches Organ brauchen wir dafür?",
    round2Teach: "Wir haben 5 Sinne, um die Welt zu erkunden! Augen zum Sehen, Ohren zum Hören, Nase zum Riechen, Zunge zum Schmecken und Haut zum Anfassen.",
    round3Title: "Was können wir damit tun?",
    round3Hint: "Was können wir mit diesem Organ?",
    round3Teach: "Unsere Sinne helfen uns, die Welt zu erleben — Augen helfen uns Farben und Formen zu sehen, Ohren helfen uns Geräusche zu hören und Nase und Zunge helfen uns Essen zu genießen!",
    round4Title: "Gesunde Gewohnheiten",
    round4Hint: "Ist das gesund oder ungesund?",
    round4Teach: "Um gesund zu bleiben, sollten wir täglich zweimal Zähne putzen, vor dem Essen Hände waschen, Obst und Gemüse essen, genug schlafen und täglich Sport treiben!",
    round5Title: "Schnelle Wiederholung",
    round5Hint: "Beantworte die Frage!",
    round5Teach: "Lass uns überprüfen, was du über deinen Körper, deine Sinne und deine Gesundheit gelernt hast!",
    gotIt: "Verstanden! →",
    next: "Weiter",
    finish: "Fertig",
    correct: "Richtig!",
    wrong: "Falsch!",
    healthy: "Gesund",
    unhealthy: "Ungesund",
    whatIsThis: "Was ist das?",
    head: "Kopf", arm: "Arm", leg: "Bein", hand: "Hand",
    body: "Körper", foot: "Fuß",
    eye: "Auge", ear: "Ohr", nose: "Nase", tongue: "Zunge",
    see: "Sehen", hear: "Hören", smell: "Riechen", taste: "Schmecken",
    brushTeeth: "Jeden Tag Zähne putzen",
    washHands: "Vor dem Essen Hände waschen",
    eatVegetables: "Obst und Gemüse essen",
    sleepEnough: "Genug Stunden schlafen",
    drinkWater: "Regelmäßig Wasser trinken",
    eatCandies: "Den ganzen Tag Süßigkeiten essen",
    skipWashing: "Nie die Hände waschen",
    stayUpLate: "Jede Nacht sehr spät aufbleiben",
    noExercise: "Nie draußen spielen oder Sport machen",
    drinkSoda: "Nur Limonade trinken, kein Wasser",
    senseForSeeing: "Welches Organ brauchen wir zum Sehen?",
    senseForHearing: "Welches Organ brauchen wir zum Hören?",
    senseForSmelling: "Welches Organ brauchen wir zum Riechen?",
    senseForTasting: "Welches Organ brauchen wir zum Schmecken?",
    whatCanEyesDo: "Was können wir mit unseren Augen?",
    whatCanEarsDo: "Was können wir mit unseren Ohren?",
    whatCanNoseDo: "Was können wir mit unserer Nase?",
    whatCanTongueDo: "Was können wir mit unserer Zunge?",
    howManySenses: "Wie viele Sinne hat der Mensch?",
    answerFive: "5",
    answerThree: "3",
    answerTen: "10",
    whereIsHeart: "Wo ist das Herz?",
    inChest: "In der Brust",
    inHead: "Im Kopf",
    inLeg: "Im Bein",
  },
  hu: {
    round1Title: "Testrészek",
    round1Hint: "Koppints a kijelölt testrészre!",
    round1Teach: "A testünknek sok része van! Van fejünk, karjaink, lábaink, kezünk és lábfejünk. Benne van egy szíve, amely vért pumpál, tüdeje, amely lélegzik, és agya, amely gondolkodik.",
    round2Title: "Melyik szervünk?",
    round2Hint: "Melyik szervünkkel érzékeljük?",
    round2Teach: "5 érzékszerveink vannak a világ felfedezésére! Szemünk a látáshoz, füleink a halláshoz, orrunk a szagláshoz, nyelvünk az ízleléshez és bőrünk az érintéshez.",
    round3Title: "Mit tehetünk vele?",
    round3Hint: "Mit tehetünk ezzel a szervünkkel?",
    round3Teach: "Az érzékszerveink segítenek a világot megtapasztalni — a szemünk segít látni a színeket és formákat, a füleink segítik hallani a hangokat, és az orrunk és nyelvünk élvezni az ételt!",
    round4Title: "Egészséges szokások",
    round4Hint: "Ez egészséges vagy egészségtelen?",
    round4Teach: "Az egészséges maradáshoz naponta kétszer mosni kell a fogainkat, evés előtt kezet mosni, gyümölcsöt és zöldséget enni, eleget aludni és naponta sportolni!",
    round5Title: "Gyors összefoglalás",
    round5Hint: "Válaszolj a kérdésre!",
    round5Teach: "Nézzük meg, mit tanultál a tested, érzékeidről és az egészséged megőrzéséről!",
    gotIt: "Értem! →",
    next: "Tovább",
    finish: "Kész",
    correct: "Helyes!",
    wrong: "Hibás!",
    healthy: "Egészséges",
    unhealthy: "Egészségtelen",
    whatIsThis: "Mi ez?",
    head: "Fej", arm: "Kar", leg: "Láb", hand: "Kéz",
    body: "Törzs", foot: "Lábfej",
    eye: "Szem", ear: "Fül", nose: "Orr", tongue: "Nyelv",
    see: "Látás", hear: "Hallás", smell: "Szaglás", taste: "Ízlelés",
    brushTeeth: "Minden nap fogat mosni",
    washHands: "Evés előtt kezet mosni",
    eatVegetables: "Gyümölcsöt és zöldséget enni",
    sleepEnough: "Eleget aludni",
    drinkWater: "Rendszeresen vizet inni",
    eatCandies: "Egész nap édességet enni",
    skipWashing: "Soha nem kezet mosni",
    stayUpLate: "Minden éjjel nagyon későn feküdni",
    noExercise: "Soha nem sportolni és kint játszani",
    drinkSoda: "Csak üdítőt inni, vizet soha",
    senseForSeeing: "Melyik szervünkkel látunk?",
    senseForHearing: "Melyik szervünkkel hallunk?",
    senseForSmelling: "Melyik szervünkkel szagolunk?",
    senseForTasting: "Melyik szervünkkel ízlelünk?",
    whatCanEyesDo: "Mit tehetünk a szemünkkel?",
    whatCanEarsDo: "Mit tehetünk a fülünkkel?",
    whatCanNoseDo: "Mit tehetünk az orrunkkal?",
    whatCanTongueDo: "Mit tehetünk a nyelvünkkel?",
    howManySenses: "Hány érzékszerve van az embernek?",
    answerFive: "5",
    answerThree: "3",
    answerTen: "10",
    whereIsHeart: "Hol van a szív?",
    inChest: "A mellkasban",
    inHead: "A fejben",
    inLeg: "A lábban",
  },
  ro: {
    round1Title: "Părțile corpului",
    round1Hint: "Atinge partea evidențiată a corpului!",
    round1Teach: "Corpul nostru are multe părți! Avem o cap, brațe, picioare, mâini și tălpi. Înăuntru avem o inimă care pompează sânge, plămâni pentru respirație și un creier pentru gândire.",
    round2Title: "Care organ?",
    round2Hint: "Care organ folosim pentru asta?",
    round2Teach: "Avem 5 simțuri pentru a explora lumea! Ochi pentru a vedea, urechi pentru a auzi, nas pentru a mirosi, limbă pentru a gusta și piele pentru a atinge.",
    round3Title: "Ce putem face cu el?",
    round3Hint: "Ce putem face cu acest organ?",
    round3Teach: "Simțurile noastre ne ajută să experimentăm lumea — ochii ne ajută să vedem culori și forme, urechile ne ajută să auzim sunete și nasul și limba ne ajută să ne bucurăm de mâncare!",
    round4Title: "Obiceiuri sănătoase",
    round4Hint: "Este sănătos sau nesănătos?",
    round4Teach: "Pentru a rămâne sănătos, trebuie să ne spălăm pe dinți de două ori pe zi, să ne spălăm pe mâini înainte de a mânca, să mâncăm fructe și legume, să dormim suficient și să facem sport în fiecare zi!",
    round5Title: "Recapitulare rapidă",
    round5Hint: "Răspunde la întrebare!",
    round5Teach: "Să recapitulăm ce ai învățat despre corpul tău, simțurile tale și rămânerea sănătos!",
    gotIt: "Am înțeles! →",
    next: "Înainte",
    finish: "Gata",
    correct: "Corect!",
    wrong: "Greșit!",
    healthy: "Sănătos",
    unhealthy: "Nesănătos",
    whatIsThis: "Ce este asta?",
    head: "Cap", arm: "Braț", leg: "Picior", hand: "Mână",
    body: "Trunchi", foot: "Talpă",
    eye: "Ochi", ear: "Ureche", nose: "Nas", tongue: "Limbă",
    see: "Vedere", hear: "Auz", smell: "Miros", taste: "Gust",
    brushTeeth: "Spală-te pe dinți în fiecare zi",
    washHands: "Spală-te pe mâini înainte de masă",
    eatVegetables: "Mănâncă fructe și legume",
    sleepEnough: "Doarme suficiente ore",
    drinkWater: "Bea apă regulat",
    eatCandies: "Mănâncă dulciuri toată ziua",
    skipWashing: "Nu te spăla niciodată pe mâini",
    stayUpLate: "Stai treaz foarte târziu în fiecare noapte",
    noExercise: "Nu te juca afară și nu face sport",
    drinkSoda: "Bea doar suc, niciodată apă",
    senseForSeeing: "Care organ folosim pentru a vedea?",
    senseForHearing: "Care organ folosim pentru a auzi?",
    senseForSmelling: "Care organ folosim pentru a mirosi?",
    senseForTasting: "Care organ folosim pentru a gusta?",
    whatCanEyesDo: "Ce putem face cu ochii?",
    whatCanEarsDo: "Ce putem face cu urechile?",
    whatCanNoseDo: "Ce putem face cu nasul?",
    whatCanTongueDo: "Ce putem face cu limba?",
    howManySenses: "Câte simțuri are omul?",
    answerFive: "5",
    answerThree: "3",
    answerTen: "10",
    whereIsHeart: "Unde este inima?",
    inChest: "În piept",
    inHead: "În cap",
    inLeg: "În picior",
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
function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

/* ─── Interactive Body SVG ─── */
type BodyPartId = "head" | "arm" | "leg" | "hand" | "body" | "foot";

interface BodyPartZone {
  id: BodyPartId;
  paths: string[];  // SVG path data
  center: [number, number]; // for label positioning
}

const BODY_ZONES: BodyPartZone[] = [
  {
    id: "head",
    paths: ["M 42 12 Q 42 2, 60 2 Q 78 2, 78 28 Q 78 48, 60 48 Q 42 48, 42 28 Z"],
    center: [60, 25],
  },
  {
    id: "body",
    paths: ["M 44 52 L 76 52 L 76 96 L 44 96 Z"],
    center: [60, 74],
  },
  {
    id: "arm",
    paths: [
      "M 44 52 L 28 56 L 22 78 L 30 80 L 36 62 L 44 58 Z",
      "M 76 52 L 92 56 L 98 78 L 90 80 L 84 62 L 76 58 Z",
    ],
    center: [24, 66],
  },
  {
    id: "hand",
    paths: [
      "M 22 78 Q 18 86, 24 88 Q 30 86, 30 80 Z",
      "M 98 78 Q 102 86, 96 88 Q 90 86, 90 80 Z",
    ],
    center: [96, 83],
  },
  {
    id: "leg",
    paths: [
      "M 44 96 L 52 96 L 50 140 L 42 140 Z",
      "M 68 96 L 76 96 L 78 140 L 70 140 Z",
    ],
    center: [46, 118],
  },
  {
    id: "foot",
    paths: [
      "M 42 140 L 50 140 L 52 150 L 38 150 Z",
      "M 70 140 L 78 140 L 82 150 L 68 150 Z",
    ],
    center: [75, 145],
  },
];

function InteractiveBody({
  color,
  highlightPart,
  onTapPart,
  tappedCorrect,
}: {
  color: string;
  highlightPart: BodyPartId | null;
  onTapPart: (id: BodyPartId) => void;
  tappedCorrect: boolean | null;
}) {
  const skinColor = "#e8c0a0";
  const skinDark = "#d4a88a";

  return (
    <svg viewBox="0 0 120 160" className="w-40 h-52 sm:w-48 sm:h-60">
      {/* Shadow */}
      <ellipse cx="60" cy="155" rx="30" ry="5" fill="rgba(0,0,0,0.15)" />

      {BODY_ZONES.map((zone) => {
        const isHighlighted = highlightPart === zone.id;
        const fillColor = isHighlighted
          ? tappedCorrect === true
            ? "#00FF88"
            : tappedCorrect === false
              ? "#FF2D78"
              : color
          : skinColor;
        const fillOpacity = isHighlighted ? 0.6 : 0.85;
        const strokeColor = isHighlighted ? color : skinDark;
        const strokeW = isHighlighted ? 2.5 : 1;

        return (
          <g
            key={zone.id}
            onClick={() => onTapPart(zone.id)}
            style={{ cursor: "pointer" }}
          >
            {zone.paths.map((d, i) => (
              <path
                key={i}
                d={d}
                fill={fillColor}
                fillOpacity={fillOpacity}
                stroke={strokeColor}
                strokeWidth={strokeW}
                strokeLinejoin="round"
              />
            ))}
            {isHighlighted && tappedCorrect === null && (
              <motion.circle
                cx={zone.center[0]}
                cy={zone.center[1]}
                r={8}
                fill="transparent"
                stroke={color}
                strokeWidth="2"
                animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.3, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              />
            )}
          </g>
        );
      })}

      {/* Eyes */}
      <circle cx="53" cy="22" r="2.5" fill="#333" />
      <circle cx="67" cy="22" r="2.5" fill="#333" />
      <circle cx="54" cy="21" r="0.8" fill="white" />
      <circle cx="68" cy="21" r="0.8" fill="white" />
      {/* Mouth */}
      <path d="M 54 34 Q 60 39 66 34" stroke="#c97a6a" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/* ─── main component ─── */
interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

function BodyExplorer({ color, lang = "de", onDone, onClose }: Props) {
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

  /* ─── Round 0: Body parts quiz — tap the highlighted part ─── */
  const bodyQuiz = useMemo(() => {
    const parts: BodyPartId[] = shuffle(["head", "arm", "leg", "hand", "body", "foot"]);
    return parts.slice(0, 4);
  }, []);
  const [bodyQIdx, setBodyQIdx] = useState(0);
  const [bodyTapped, setBodyTapped] = useState<boolean | null>(null);

  /* ─── Round 1: Sense → organ quiz ─── */
  type SenseQ = { questionKey: string; answer: string; options: string[] };
  const senseQuestions = useMemo<SenseQ[]>(() => shuffle([
    { questionKey: "senseForSeeing", answer: "eye", options: ["eye", "ear", "nose"] },
    { questionKey: "senseForHearing", answer: "ear", options: ["eye", "ear", "tongue"] },
    { questionKey: "senseForSmelling", answer: "nose", options: ["nose", "ear", "eye"] },
    { questionKey: "senseForTasting", answer: "tongue", options: ["tongue", "nose", "ear"] },
  ]).slice(0, 3), []);
  const [senseIdx, setSenseIdx] = useState(0);
  const [senseAnswer, setSenseAnswer] = useState<string | null>(null);

  /* ─── Round 2: Organ → action quiz ─── */
  type ActionQ = { questionKey: string; answer: string; options: string[] };
  const actionQuestions = useMemo<ActionQ[]>(() => shuffle([
    { questionKey: "whatCanEyesDo", answer: "see", options: ["see", "hear", "smell"] },
    { questionKey: "whatCanEarsDo", answer: "hear", options: ["hear", "see", "taste"] },
    { questionKey: "whatCanNoseDo", answer: "smell", options: ["smell", "hear", "taste"] },
    { questionKey: "whatCanTongueDo", answer: "taste", options: ["taste", "smell", "see"] },
  ]).slice(0, 3), []);
  const [actionIdx, setActionIdx] = useState(0);
  const [actionAnswer, setActionAnswer] = useState<string | null>(null);

  /* ─── Round 3: Healthy / Unhealthy ─── */
  type HygieneQ = { labelKey: string; healthy: boolean };
  const hygieneQuestions = useMemo<HygieneQ[]>(() => shuffle([
    { labelKey: "brushTeeth", healthy: true },
    { labelKey: "washHands", healthy: true },
    { labelKey: "eatVegetables", healthy: true },
    { labelKey: "sleepEnough", healthy: true },
    { labelKey: "drinkWater", healthy: true },
    { labelKey: "eatCandies", healthy: false },
    { labelKey: "skipWashing", healthy: false },
    { labelKey: "stayUpLate", healthy: false },
    { labelKey: "noExercise", healthy: false },
    { labelKey: "drinkSoda", healthy: false },
  ]).slice(0, 4), []);
  const [hygieneIdx, setHygieneIdx] = useState(0);
  const [hygieneAnswer, setHygieneAnswer] = useState<boolean | null>(null);

  /* ─── Round 4: Mixed review ─── */
  type ReviewQ = { questionKey: string; answer: string; options: string[] };
  const reviewQuestions = useMemo<ReviewQ[]>(() => shuffle([
    { questionKey: "howManySenses", answer: "answerFive", options: ["answerFive", "answerThree", "answerTen"] },
    { questionKey: "senseForSmelling", answer: "nose", options: ["nose", "eye", "tongue"] },
    { questionKey: "whatCanEyesDo", answer: "see", options: ["see", "taste", "smell"] },
    { questionKey: "whereIsHeart", answer: "inChest", options: ["inChest", "inHead", "inLeg"] },
  ]).slice(0, 3), []);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [reviewAnswer, setReviewAnswer] = useState<string | null>(null);

  /* ─── helpers ─── */
  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      onDone(scoreRef.current, totalRef.current);
    } else {
      setRound(r => r + 1);
      setShowTeach(true);
    }
  }, [round, onDone]);

  /* ─── Body part tap handler ─── */
  const handleBodyTap = useCallback((part: BodyPartId) => {
    if (bodyTapped !== null) return; // already answered
    const correct = part === bodyQuiz[bodyQIdx];
    totalRef.current++;
    if (correct) scoreRef.current++;
    setBodyTapped(correct);
  }, [bodyQIdx, bodyQuiz, bodyTapped]);

  const advanceBodyQ = useCallback(() => {
    if (bodyQIdx < bodyQuiz.length - 1) {
      setBodyQIdx(i => i + 1);
      setBodyTapped(null);
    } else {
      advance();
    }
  }, [bodyQIdx, bodyQuiz.length, advance]);

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
          {/* ═══ ROUND 0 — Body parts: tap the highlighted part ═══ */}
          {round === 0 && (
            <>
              {showTeach ? (
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
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
                    <button onClick={() => speak(lbl.round1Title + ". " + lbl.round1Hint)}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>

                  <div className="relative">
                    <InteractiveBody
                      color={color}
                      highlightPart={bodyQuiz[bodyQIdx]}
                      onTapPart={handleBodyTap}
                      tappedCorrect={bodyTapped}
                    />
                  </div>

                  {/* Question + sub-progress */}
                  <div className="flex items-center gap-2">
                    <span className="text-white/40 text-xs font-bold">{bodyQIdx + 1}/{bodyQuiz.length}</span>
                    <span className="text-white/80 text-sm font-bold">
                      {lbl.whatIsThis} <span style={{ color }}>{lbl[bodyQuiz[bodyQIdx]]}</span>?
                    </span>
                  </div>

                  {bodyTapped !== null && renderFeedback(
                    bodyTapped ? bodyQuiz[bodyQIdx] : "wrong",
                    bodyQuiz[bodyQIdx],
                  )}

                  {renderNext(bodyTapped === null, advanceBodyQ)}
                </>
              )}
            </>
          )}

          {/* ═══ ROUND 1 — Sense → organ ═══ */}
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
            const q = senseQuestions[senseIdx];
            if (!q) return null;
            const opts = useMemo(() => shuffle(q.options), [senseIdx]); // eslint-disable-line
            return (
              <>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
                  <button onClick={() => speak(lbl.round2Title + ". " + lbl.round2Hint)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                    <Volume2 size={16} />
                  </button>
                </div>
                <p className="text-white/60 text-sm font-bold text-center">{lbl[q.questionKey]}</p>
                <span className="text-white/40 text-xs font-bold">{senseIdx + 1}/{senseQuestions.length}</span>

                {renderMCQ(
                  opts,
                  senseAnswer,
                  q.answer,
                  makeMcqHandler(q.answer, setSenseAnswer),
                )}
                {renderFeedback(senseAnswer, q.answer)}
                {renderNext(senseAnswer === null, () => {
                  if (senseIdx < senseQuestions.length - 1) {
                    setSenseIdx(i => i + 1);
                    setSenseAnswer(null);
                  } else {
                    advance();
                  }
                })}
              </>
            );
          })()}

          {/* ═══ ROUND 2 — Organ → action ═══ */}
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
            const q = actionQuestions[actionIdx];
            if (!q) return null;
            const opts = useMemo(() => shuffle(q.options), [actionIdx]); // eslint-disable-line
            return (
              <>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
                  <button onClick={() => speak(lbl.round3Title + ". " + lbl.round3Hint)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                    <Volume2 size={16} />
                  </button>
                </div>
                <p className="text-white/60 text-sm font-bold text-center">{lbl[q.questionKey]}</p>
                <span className="text-white/40 text-xs font-bold">{actionIdx + 1}/{actionQuestions.length}</span>

                {renderMCQ(
                  opts,
                  actionAnswer,
                  q.answer,
                  makeMcqHandler(q.answer, setActionAnswer),
                )}
                {renderFeedback(actionAnswer, q.answer)}
                {renderNext(actionAnswer === null, () => {
                  if (actionIdx < actionQuestions.length - 1) {
                    setActionIdx(i => i + 1);
                    setActionAnswer(null);
                  } else {
                    advance();
                  }
                })}
              </>
            );
          })()}

          {/* ═══ ROUND 3 — Healthy habits ═══ */}
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
            const q = hygieneQuestions[hygieneIdx];
            if (!q) return null;
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
                <span className="text-white/40 text-xs font-bold">{hygieneIdx + 1}/{hygieneQuestions.length}</span>

                {/* Action card */}
                <div
                  className="w-full max-w-xs py-5 px-6 rounded-2xl text-center"
                  style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="text-white font-bold text-base">{lbl[q.labelKey]}</p>
                </div>

                {/* Yes / No buttons */}
                <div className="flex gap-3 w-full max-w-xs">
                  {([true, false] as const).map((val) => {
                    const label = val ? lbl.healthy : lbl.unhealthy;
                    const isSelected = hygieneAnswer === val;
                    const isCorrect = val === q.healthy;
                    let bg = "rgba(255,255,255,0.06)";
                    let border = "rgba(255,255,255,0.1)";
                    if (hygieneAnswer !== null) {
                      if (isCorrect) { bg = "#00FF8833"; border = "#00FF88"; }
                      else if (isSelected && !isCorrect) { bg = "#FF2D7833"; border = "#FF2D78"; }
                    }
                    return (
                      <motion.button
                        key={String(val)}
                        onClick={() => {
                          if (hygieneAnswer !== null) return;
                          totalRef.current++;
                          if (val === q.healthy) scoreRef.current++;
                          setHygieneAnswer(val);
                        }}
                        whileTap={hygieneAnswer === null ? { scale: 0.97 } : undefined}
                        className="flex-1 py-3 rounded-xl transition-all font-black text-white text-sm"
                        style={{ background: bg, border: `2px solid ${border}` }}
                      >
                        {val ? "👍" : "👎"} {label}
                      </motion.button>
                    );
                  })}
                </div>

                {hygieneAnswer !== null && renderFeedback(
                  hygieneAnswer === q.healthy ? "c" : "w",
                  "c",
                )}

                {renderNext(hygieneAnswer === null, () => {
                  if (hygieneIdx < hygieneQuestions.length - 1) {
                    setHygieneIdx(i => i + 1);
                    setHygieneAnswer(null);
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
            const opts = useMemo(() => shuffle(q.options), [reviewIdx]); // eslint-disable-line
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

                {renderMCQ(
                  opts,
                  reviewAnswer,
                  q.answer,
                  makeMcqHandler(q.answer, setReviewAnswer),
                )}
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

export default memo(BodyExplorer);
