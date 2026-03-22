"use client";
// SachkundeReviewExplorer — Island i9: Grand Finale Review
// 5 rounds × 3 MCQ questions covering all Sachkunde topics

import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, XCircle } from "lucide-react";

// ─── Labels ────────────────────────────────────────────────────────────────

const LABELS = {
  en: {
    title: "Grand Finale",
    subtitle: "All Topics Review",
    // round titles & hints
    r1Title: "Body & Senses",
    r1Hint: "Which organ or sense is described?",
    r2Title: "Seasons & Nature",
    r2Hint: "What season or nature fact fits?",
    r3Title: "Traffic Safety",
    r3Hint: "Choose the correct traffic rule!",
    r4Title: "Family & Social",
    r4Hint: "Who is this family member?",
    r5Title: "Recycling & Environment",
    r5Hint: "Where does this waste go?",
    // round progress
    roundOf: "Round",
    of: "of",
    // questions r1: body & senses
    q_eye_organ: "Which organ do we use to see?",
    q_ear_organ: "Which organ do we use to hear?",
    q_nose_organ: "Which organ do we use to smell?",
    // answers r1
    a_eye: "Eye",
    a_ear: "Ear",
    a_nose: "Nose",
    a_mouth: "Mouth",
    a_hand: "Hand",
    a_knee: "Knee",
    a_foot: "Foot",
    a_elbow: "Elbow",
    // questions r2: seasons & nature
    q_snow_season: "In which season does it snow?",
    q_flower_season: "In which season do flowers bloom?",
    q_leaf_season: "In which season do leaves fall from trees?",
    // answers r2
    a_winter: "Winter",
    a_spring: "Spring",
    a_summer: "Summer",
    a_autumn: "Autumn",
    // questions r3: traffic safety
    q_red_light: "What does a red traffic light mean?",
    q_green_light: "What does a green traffic light mean?",
    q_crosswalk: "Where should pedestrians cross the street?",
    q_helmet: "What should you wear on your head when riding a bicycle?",
    // answers r3
    a_stop: "Stop",
    a_go: "Go",
    a_wait: "Wait",
    a_slow: "Drive slowly",
    a_crosswalk: "At the crosswalk",
    a_anywhere: "Anywhere",
    a_at_corner: "At the street corner",
    a_in_middle: "In the middle of the road",
    a_helmet: "Helmet",
    a_cap: "Cap",
    a_sunglasses: "Sunglasses",
    a_scarf: "Scarf",
    // questions r4: family & social
    q_grandmother: "Your mother's mother is your…?",
    q_uncle: "Your father's brother is your…?",
    q_cousin: "Your aunt's child is your…?",
    // answers r4
    a_grandmother: "Grandmother",
    a_grandfather: "Grandfather",
    a_aunt: "Aunt",
    a_sister: "Sister",
    a_uncle: "Uncle",
    a_father: "Father",
    a_brother: "Brother",
    a_cousin: "Cousin",
    // questions r5: recycling
    q_paper: "Where does old newspaper go?",
    q_glass: "Where does an empty glass bottle go?",
    q_plastic: "Where does a plastic bottle go?",
    // answers r5
    a_paper_bin: "Paper bin (blue)",
    a_glass_bin: "Glass container",
    a_plastic_bin: "Yellow bin / plastics",
    a_organic_bin: "Organic / compost bin",
    a_residual_bin: "Residual waste bin",
    a_electronics_bin: "Electronics recycling",
    a_clothes_bin: "Clothing donation",
    a_battery_bin: "Battery collection",
    // feedback
    correct: "Correct!",
    wrong: "Not quite!",
    next: "Next",
    finish: "Finish!",
    score: "Score",
  },
  de: {
    title: "Großes Finale",
    subtitle: "Alle Themen im Überblick",
    r1Title: "Körper & Sinne",
    r1Hint: "Welches Organ oder welcher Sinn ist gemeint?",
    r2Title: "Jahreszeiten & Natur",
    r2Hint: "Welche Jahreszeit oder welcher Naturfakt passt?",
    r3Title: "Verkehrssicherheit",
    r3Hint: "Wähle die richtige Verkehrsregel!",
    r4Title: "Familie & Soziales",
    r4Hint: "Wer ist dieses Familienmitglied?",
    r5Title: "Recycling & Umwelt",
    r5Hint: "Wo kommt dieser Abfall hin?",
    roundOf: "Runde",
    of: "von",
    q_eye_organ: "Womit sehen wir?",
    q_ear_organ: "Womit hören wir?",
    q_nose_organ: "Womit riechen wir?",
    a_eye: "Auge",
    a_ear: "Ohr",
    a_nose: "Nase",
    a_mouth: "Mund",
    a_hand: "Hand",
    a_knee: "Knie",
    a_foot: "Fuß",
    a_elbow: "Ellbogen",
    q_snow_season: "In welcher Jahreszeit schneit es?",
    q_flower_season: "In welcher Jahreszeit blühen die Blumen?",
    q_leaf_season: "In welcher Jahreszeit fallen die Blätter von den Bäumen?",
    a_winter: "Winter",
    a_spring: "Frühling",
    a_summer: "Sommer",
    a_autumn: "Herbst",
    q_red_light: "Was bedeutet eine rote Ampel?",
    q_green_light: "Was bedeutet eine grüne Ampel?",
    q_crosswalk: "Wo solltest du als Fußgänger die Straße überqueren?",
    q_helmet: "Was trägst du beim Fahrradfahren auf dem Kopf?",
    a_stop: "Anhalten",
    a_go: "Fahren / Gehen",
    a_wait: "Warten",
    a_slow: "Langsam fahren",
    a_crosswalk: "Am Zebrastreifen",
    a_anywhere: "Irgendwo",
    a_at_corner: "An der Straßenecke",
    a_in_middle: "Mitten auf der Straße",
    a_helmet: "Helm",
    a_cap: "Mütze",
    a_sunglasses: "Sonnenbrille",
    a_scarf: "Schal",
    q_grandmother: "Die Mutter deiner Mutter ist deine …?",
    q_uncle: "Der Bruder deines Vaters ist dein …?",
    q_cousin: "Das Kind deiner Tante ist dein …?",
    a_grandmother: "Oma",
    a_grandfather: "Opa",
    a_aunt: "Tante",
    a_sister: "Schwester",
    a_uncle: "Onkel",
    a_father: "Vater",
    a_brother: "Bruder",
    a_cousin: "Cousin / Cousine",
    q_paper: "Wohin kommt eine alte Zeitung?",
    q_glass: "Wohin kommt eine leere Glasflasche?",
    q_plastic: "Wohin kommt eine Plastikflasche?",
    a_paper_bin: "Papiertonne (blau)",
    a_glass_bin: "Glascontainer",
    a_plastic_bin: "Gelbe Tonne / Gelber Sack",
    a_organic_bin: "Biotonne / Kompost",
    a_residual_bin: "Restmülltonne",
    a_electronics_bin: "Elektroschrott",
    a_clothes_bin: "Kleidercontainer",
    a_battery_bin: "Batterie-Sammlung",
    correct: "Richtig!",
    wrong: "Nicht ganz!",
    next: "Weiter",
    finish: "Fertig!",
    score: "Punkte",
  },
  hu: {
    title: "Nagy Finálé",
    subtitle: "Összes téma összefoglalója",
    r1Title: "Test és Érzékszervek",
    r1Hint: "Melyik szerv vagy érzék van leírva?",
    r2Title: "Évszakok és Természet",
    r2Hint: "Melyik évszak vagy természeti tény illik?",
    r3Title: "Közlekedésbiztonság",
    r3Hint: "Válaszd a helyes közlekedési szabályt!",
    r4Title: "Család és Társadalom",
    r4Hint: "Ki ez a rokonsági viszony?",
    r5Title: "Újrahasznosítás és Környezet",
    r5Hint: "Hova kerül ez a szemét?",
    roundOf: "Forduló",
    of: "/",
    q_eye_organ: "Melyik szervünkkel látunk?",
    q_ear_organ: "Melyik szervünkkel hallunk?",
    q_nose_organ: "Melyik szervünkkel szagolunk?",
    a_eye: "Szem",
    a_ear: "Fül",
    a_nose: "Orr",
    a_mouth: "Száj",
    a_hand: "Kéz",
    a_knee: "Térd",
    a_foot: "Láb",
    a_elbow: "Könyök",
    q_snow_season: "Melyik évszakban havazik?",
    q_flower_season: "Melyik évszakban nyílnak a virágok?",
    q_leaf_season: "Melyik évszakban hullnak le a falevelek?",
    a_winter: "Tél",
    a_spring: "Tavasz",
    a_summer: "Nyár",
    a_autumn: "Ősz",
    q_red_light: "Mit jelent a piros közlekedési lámpa?",
    q_green_light: "Mit jelent a zöld közlekedési lámpa?",
    q_crosswalk: "Hol kell az úttest gyalogosoknak átkelniük?",
    q_helmet: "Mit kell viselni a fejeden kerékpározáskor?",
    a_stop: "Megállj",
    a_go: "Menj / Haladj",
    a_wait: "Várj",
    a_slow: "Lassan haladj",
    a_crosswalk: "A zebrán",
    a_anywhere: "Bárhol",
    a_at_corner: "Az utca sarkán",
    a_in_middle: "Az út közepén",
    a_helmet: "Bukósisak",
    a_cap: "Sapka",
    a_sunglasses: "Napszemüveg",
    a_scarf: "Sál",
    q_grandmother: "Az anyukád anyukája a te …?",
    q_uncle: "Az apukád fivére a te …?",
    q_cousin: "A nagynénéd gyereke a te …?",
    a_grandmother: "Nagymama",
    a_grandfather: "Nagypapa",
    a_aunt: "Nagynéni",
    a_sister: "Nővér / Húg",
    a_uncle: "Nagybácsi",
    a_father: "Apa",
    a_brother: "Fivér / Öcs",
    a_cousin: "Unokatestvér",
    q_paper: "Hova kerül egy régi újság?",
    q_glass: "Hova kerül egy üres üvegpalack?",
    q_plastic: "Hova kerül egy műanyag palack?",
    a_paper_bin: "Papír gyűjtő (kék)",
    a_glass_bin: "Üveg gyűjtő",
    a_plastic_bin: "Sárga zsák / műanyag",
    a_organic_bin: "Szerves hulladék / komposzt",
    a_residual_bin: "Vegyes hulladék",
    a_electronics_bin: "Elektromos hulladék",
    a_clothes_bin: "Ruha gyűjtő",
    a_battery_bin: "Elem gyűjtő",
    correct: "Helyes!",
    wrong: "Nem egészen!",
    next: "Tovább",
    finish: "Befejezés!",
    score: "Pont",
  },
  ro: {
    title: "Marea Finală",
    subtitle: "Recapitulare — toate temele",
    r1Title: "Corp și Simțuri",
    r1Hint: "Care organ sau simț este descris?",
    r2Title: "Anotimpuri și Natură",
    r2Hint: "Ce anotimp sau fapt din natură se potrivește?",
    r3Title: "Siguranța în Trafic",
    r3Hint: "Alege regula de circulație corectă!",
    r4Title: "Familie și Social",
    r4Hint: "Cine este acest membru al familiei?",
    r5Title: "Reciclare și Mediu",
    r5Hint: "Unde se aruncă acest deșeu?",
    roundOf: "Runda",
    of: "din",
    q_eye_organ: "Cu ce organ vedem?",
    q_ear_organ: "Cu ce organ auzim?",
    q_nose_organ: "Cu ce organ mirosim?",
    a_eye: "Ochi",
    a_ear: "Ureche",
    a_nose: "Nas",
    a_mouth: "Gură",
    a_hand: "Mână",
    a_knee: "Genunchi",
    a_foot: "Picior",
    a_elbow: "Cot",
    q_snow_season: "În ce anotimp ninge?",
    q_flower_season: "În ce anotimp înfloresc florile?",
    q_leaf_season: "În ce anotimp cad frunzele din copaci?",
    a_winter: "Iarnă",
    a_spring: "Primăvară",
    a_summer: "Vară",
    a_autumn: "Toamnă",
    q_red_light: "Ce înseamnă semaforul roșu?",
    q_green_light: "Ce înseamnă semaforul verde?",
    q_crosswalk: "Unde trebuie să treacă pietonii strada?",
    q_helmet: "Ce porți pe cap când mergi cu bicicleta?",
    a_stop: "Oprește-te",
    a_go: "Mergi",
    a_wait: "Așteaptă",
    a_slow: "Mergi încet",
    a_crosswalk: "La trecerea de pietoni",
    a_anywhere: "Oriunde",
    a_at_corner: "La colțul străzii",
    a_in_middle: "În mijlocul drumului",
    a_helmet: "Cască",
    a_cap: "Șapcă",
    a_sunglasses: "Ochelari de soare",
    a_scarf: "Fular",
    q_grandmother: "Mama mamei tale este…?",
    q_uncle: "Fratele tatălui tău este…?",
    q_cousin: "Copilul mătușii tale este…?",
    a_grandmother: "Bunică",
    a_grandfather: "Bunic",
    a_aunt: "Mătușă",
    a_sister: "Soră",
    a_uncle: "Unchi",
    a_father: "Tată",
    a_brother: "Frate",
    a_cousin: "Văr / Vară",
    q_paper: "Unde arunci un ziar vechi?",
    q_glass: "Unde arunci o sticlă de sticlă goală?",
    q_plastic: "Unde arunci o sticlă de plastic?",
    a_paper_bin: "Tomberon hârtie (albastru)",
    a_glass_bin: "Container sticlă",
    a_plastic_bin: "Sac galben / plastic",
    a_organic_bin: "Gunoi organic / compost",
    a_residual_bin: "Gunoi menajer",
    a_electronics_bin: "Deșeuri electronice",
    a_clothes_bin: "Container haine",
    a_battery_bin: "Colectare baterii",
    correct: "Corect!",
    wrong: "Nu chiar!",
    next: "Înainte",
    finish: "Gata!",
    score: "Puncte",
  },
} as const;

type Lang = keyof typeof LABELS;
type LabelKey = keyof typeof LABELS.en;
type Lbl = typeof LABELS.en;

// ─── Question types ─────────────────────────────────────────────────────────

interface Question {
  emoji: string;
  qKey: LabelKey;
  correctKey: LabelKey;
  wrongKeys: [LabelKey, LabelKey, LabelKey];
}

// ─── Round question pools ────────────────────────────────────────────────────

const ROUND1_POOL: Question[] = [
  { emoji: "👁️", qKey: "q_eye_organ",  correctKey: "a_eye",  wrongKeys: ["a_hand",  "a_mouth", "a_knee"] },
  { emoji: "👂", qKey: "q_ear_organ",  correctKey: "a_ear",  wrongKeys: ["a_eye",   "a_nose",  "a_foot"] },
  { emoji: "👃", qKey: "q_nose_organ", correctKey: "a_nose", wrongKeys: ["a_ear",   "a_elbow", "a_mouth"] },
];

const ROUND2_POOL: Question[] = [
  { emoji: "❄️", qKey: "q_snow_season",   correctKey: "a_winter", wrongKeys: ["a_spring", "a_summer", "a_autumn"] },
  { emoji: "🌸", qKey: "q_flower_season", correctKey: "a_spring", wrongKeys: ["a_winter", "a_summer", "a_autumn"] },
  { emoji: "🍂", qKey: "q_leaf_season",   correctKey: "a_autumn", wrongKeys: ["a_spring", "a_summer", "a_winter"] },
];

const ROUND3_POOL: Question[] = [
  { emoji: "🔴", qKey: "q_red_light",   correctKey: "a_stop",      wrongKeys: ["a_go",        "a_wait",     "a_slow"] },
  { emoji: "🟢", qKey: "q_green_light", correctKey: "a_go",        wrongKeys: ["a_stop",       "a_wait",     "a_slow"] },
  { emoji: "🚶", qKey: "q_crosswalk",   correctKey: "a_crosswalk", wrongKeys: ["a_anywhere",   "a_at_corner","a_in_middle"] },
  { emoji: "🚲", qKey: "q_helmet",      correctKey: "a_helmet",    wrongKeys: ["a_cap",        "a_sunglasses","a_scarf"] },
];

const ROUND4_POOL: Question[] = [
  { emoji: "👵", qKey: "q_grandmother", correctKey: "a_grandmother", wrongKeys: ["a_grandfather", "a_aunt",   "a_sister"] },
  { emoji: "🧔", qKey: "q_uncle",       correctKey: "a_uncle",       wrongKeys: ["a_grandfather", "a_father", "a_brother"] },
  { emoji: "🧒", qKey: "q_cousin",      correctKey: "a_cousin",      wrongKeys: ["a_sister",      "a_brother","a_aunt"] },
];

const ROUND5_POOL: Question[] = [
  { emoji: "📰", qKey: "q_paper",   correctKey: "a_paper_bin",   wrongKeys: ["a_glass_bin",    "a_organic_bin", "a_residual_bin"] },
  { emoji: "🍾", qKey: "q_glass",   correctKey: "a_glass_bin",   wrongKeys: ["a_paper_bin",    "a_plastic_bin", "a_residual_bin"] },
  { emoji: "🥤", qKey: "q_plastic", correctKey: "a_plastic_bin", wrongKeys: ["a_organic_bin",  "a_glass_bin",   "a_battery_bin"] },
];

const ALL_POOLS = [ROUND1_POOL, ROUND2_POOL, ROUND3_POOL, ROUND4_POOL, ROUND5_POOL];

const ROUND_TITLE_KEYS: LabelKey[] = ["r1Title", "r2Title", "r3Title", "r4Title", "r5Title"];
const ROUND_HINT_KEYS:  LabelKey[] = ["r1Hint",  "r2Hint",  "r3Hint",  "r4Hint",  "r5Hint"];

const ROUND_BG = [
  "linear-gradient(135deg, #1a0533 0%, #2d0a4e 100%)",
  "linear-gradient(135deg, #0a1f0a 0%, #0d3d0d 100%)",
  "linear-gradient(135deg, #1a1000 0%, #3d2b00 100%)",
  "linear-gradient(135deg, #00101f 0%, #002240 100%)",
  "linear-gradient(135deg, #001a10 0%, #003322 100%)",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick3<T>(arr: T[]): [T, T, T] {
  const s = shuffle(arr);
  return [s[0], s[1], s[2]];
}

// Build a round: pick 3 questions from pool, shuffle each question's options
function buildRound(pool: Question[]): Array<Question & { options: LabelKey[] }> {
  const questions = pick3(pool);
  return questions.map(q => ({
    ...q,
    options: shuffle([q.correctKey, ...q.wrongKeys]),
  }));
}

// ─── Props ───────────────────────────────────────────────────────────────────

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

// ─── MCQ Sub-component ───────────────────────────────────────────────────────

interface MCQProps {
  emoji: string;
  question: string;
  options: string[];
  correctIndex: number;
  answered: boolean;
  selected: number | null;
  onSelect: (i: number) => void;
  color: string;
  correctLabel: string;
  wrongLabel: string;
}

function MCQ({ emoji, question, options, correctIndex, answered, selected, onSelect, color, correctLabel, wrongLabel }: MCQProps) {
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="text-4xl mt-1">{emoji}</div>
      <div className="bg-white/[0.07] border border-white/10 rounded-2xl px-5 py-4 w-full text-center">
        <p className="text-white font-bold text-base leading-snug">{question}</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect  = i === correctIndex;
          let bg = "rgba(255,255,255,0.06)";
          let border = "rgba(255,255,255,0.15)";
          let textColor = "rgba(255,255,255,0.85)";
          if (answered) {
            if (isCorrect) { bg = "rgba(0,255,136,0.18)"; border = "#00FF88"; textColor = "#00FF88"; }
            else if (isSelected) { bg = "rgba(255,45,120,0.18)"; border = "#FF2D78"; textColor = "#FF2D78"; }
          } else if (isSelected) {
            bg = `${color}22`; border = color; textColor = "#fff";
          }
          return (
            <motion.button
              key={i}
              onClick={() => !answered && onSelect(i)}
              disabled={answered}
              className="py-3 px-4 rounded-xl font-bold text-sm text-left flex items-center gap-2 transition-colors"
              style={{ background: bg, border: `2px solid ${border}`, color: textColor }}
              whileTap={answered ? {} : { scale: 0.97 }}
            >
              {answered && isCorrect  && <CheckCircle2 size={15} className="shrink-0" style={{ color: "#00FF88" }} />}
              {answered && isSelected && !isCorrect && <XCircle size={15} className="shrink-0" style={{ color: "#FF2D78" }} />}
              {(!answered || (!isCorrect && !isSelected)) && (
                <span className="w-4 h-4 rounded-full border shrink-0 inline-block"
                  style={{ borderColor: border, background: isSelected ? color : "transparent" }} />
              )}
              {opt}
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        {answered && (
          <motion.p
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="text-xs font-bold"
            style={{ color: selected === correctIndex ? "#00FF88" : "#FF2D78" }}
          >
            {selected === correctIndex ? correctLabel : wrongLabel}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

function SachkundeReviewExplorer({ color, lang = "de", onDone, onClose }: Props) {
  const l = lang as Lang;
  const lbl: Lbl = (LABELS[l] ?? LABELS.de) as Lbl;

  // Pre-build all 5 rounds once
  const rounds = useMemo(() => ALL_POOLS.map(buildRound), []);

  const TOTAL_QUESTIONS = rounds.reduce((s, r) => s + r.length, 0); // 5×3 = 15

  const scoreRef = useRef(0);
  const totalRef = useRef(TOTAL_QUESTIONS);

  // Navigation state
  const [roundIdx,    setRoundIdx]    = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selected,    setSelected]    = useState<number | null>(null);
  const [answered,    setAnswered]    = useState(false);

  const currentRound    = rounds[roundIdx];
  const currentQuestion = currentRound[questionIdx];
  const correctIndex    = currentRound[questionIdx].options.indexOf(currentQuestion.correctKey);

  const isLastQuestion = questionIdx === currentRound.length - 1;
  const isLastRound    = roundIdx === rounds.length - 1;
  const isDone         = isLastRound && isLastQuestion && answered;

  const handleSelect = useCallback((i: number) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    const isCorrect = currentRound[questionIdx].options[i] === currentRound[questionIdx].correctKey;
    if (isCorrect) scoreRef.current += 1;
  }, [answered, currentRound, questionIdx]);

  const handleNext = useCallback(() => {
    if (isDone) {
      onDone(scoreRef.current, totalRef.current);
      return;
    }
    if (isLastQuestion) {
      setRoundIdx(r => r + 1);
      setQuestionIdx(0);
    } else {
      setQuestionIdx(q => q + 1);
    }
    setSelected(null);
    setAnswered(false);
  }, [isDone, isLastQuestion, onDone]);

  // Overall question number (1-based)
  const globalQNum = rounds.slice(0, roundIdx).reduce((s, r) => s + r.length, 0) + questionIdx + 1;

  const bgStyle = ROUND_BG[roundIdx];

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-auto" style={{ background: bgStyle }}>
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
        >✕</button>
      )}

      {/* ── Header ── */}
      <div className="flex flex-col items-center pt-5 pb-2 px-4 gap-1">
        <p className="text-white font-black text-lg tracking-wide">{lbl.title}</p>
        <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">{lbl.subtitle}</p>

        {/* Round progress dots */}
        <div className="flex gap-1.5 mt-2">
          {rounds.map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                background: i < roundIdx
                  ? "#00FF88"
                  : i === roundIdx
                    ? color
                    : "rgba(255,255,255,0.15)",
                transform: i === roundIdx ? "scale(1.25)" : "scale(1)",
              }} />
          ))}
        </div>

        {/* Round title & hint */}
        <p className="text-white font-black text-base mt-3" style={{ color }}>
          {lbl[ROUND_TITLE_KEYS[roundIdx]]}
        </p>
        <p className="text-white/55 text-xs font-semibold text-center px-4">
          {lbl[ROUND_HINT_KEYS[roundIdx]]}
        </p>

        {/* Question counter */}
        <p className="text-white/35 text-[11px] font-bold mt-1">
          {globalQNum} / {TOTAL_QUESTIONS}
        </p>
      </div>

      {/* ── Question area ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${roundIdx}-${questionIdx}`}
          initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.22 }}
          className="flex-1 flex flex-col items-center justify-center px-4 pb-4 gap-3"
        >
          <MCQ
            emoji={currentQuestion.emoji}
            question={lbl[currentQuestion.qKey]}
            options={currentQuestion.options.map(k => lbl[k])}
            correctIndex={correctIndex}
            answered={answered}
            selected={selected}
            onSelect={handleSelect}
            color={color}
            correctLabel={lbl.correct}
            wrongLabel={lbl.wrong}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Next / Finish button ── */}
      <div className="px-4 pb-8">
        <motion.button
          onClick={handleNext}
          disabled={!answered}
          className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2 transition-opacity"
          style={{
            background: answered
              ? `linear-gradient(135deg, ${color}77, ${color}bb)`
              : "rgba(255,255,255,0.08)",
            border: `2px solid ${answered ? color : "rgba(255,255,255,0.12)"}`,
            opacity: answered ? 1 : 0.45,
          }}
          whileTap={answered ? { scale: 0.97 } : {}}
        >
          {isDone ? lbl.finish : lbl.next}
          {!isDone && <ChevronRight size={16} />}
        </motion.button>
      </div>
    </div>
  );
}

export default memo(SachkundeReviewExplorer);
