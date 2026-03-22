"use client";
import { memo, useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Interface ───────────────────────────────────────────────────────────────
interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

// ─── LABELS (ALL text, 4 languages) ─────────────────────────────────────────
const LABELS = {
  en: {
    // Round titles & hints
    r1Title: "Family Members",
    r1Hint: "Who is this? Pick the right family member.",
    r2Title: "Family Relationships",
    r2Hint: "Choose the correct answer.",
    r3Title: "Polite or Rude?",
    r3Hint: "Is this behavior polite or rude?",
    r4Title: "Where Does It Happen?",
    r4Hint: "Where do we do this? Pick the right room.",
    r5Title: "Quick Review",
    r5Hint: "Answer the question.",
    // Family member names (keys used as answer values)
    mother: "Mother",
    father: "Father",
    sister: "Sister",
    brother: "Brother",
    grandma: "Grandma",
    grandpa: "Grandpa",
    aunt: "Aunt",
    uncle: "Uncle",
    // Polite/Rude labels
    polite: "Polite",
    rude: "Rude",
    // Room names
    kitchen: "Kitchen",
    bedroom: "Bedroom",
    livingRoom: "Living Room",
    bathroom: "Bathroom",
    // Round 1 — who is this? descriptions
    descMother: "She takes care of you at home and is your female parent.",
    descFather: "He goes to work and is your male parent.",
    descSister: "She lives with you and is a girl in your family.",
    descBrother: "He lives with you and is a boy in your family.",
    descGrandma: "She is your mother's or father's mother.",
    descGrandpa: "He is your mother's or father's father.",
    // Round 2 — relationship questions
    relQ1: "Your mother's mother is your…",
    relQ2: "Your father's brother is your…",
    relQ3: "Your parents' daughter is your…",
    relA1Correct: "Grandma",
    relA1W1: "Aunt",
    relA1W2: "Sister",
    relA2Correct: "Uncle",
    relA2W1: "Grandpa",
    relA2W2: "Brother",
    relA3Correct: "Sister",
    relA3W1: "Grandma",
    relA3W2: "Mother",
    // Round 3 — polite behaviors (key = "polite" or "rude")
    bhv1Text: "You say 'please' when asking for something.",
    bhv1Answer: "polite",
    bhv2Text: "You interrupt someone while they are talking.",
    bhv2Answer: "rude",
    bhv3Text: "You share your toys with a friend.",
    bhv3Answer: "polite",
    bhv4Text: "You leave a big mess and don't clean it up.",
    bhv4Answer: "rude",
    bhv5Text: "You hold the door open for someone.",
    bhv5Answer: "polite",
    bhv6Text: "You shout and scream inside the house.",
    bhv6Answer: "rude",
    // Round 4 — room questions
    roomQ1: "Where do we cook food?",
    roomA1: "kitchen",
    roomQ2: "Where do we sleep at night?",
    roomA2: "bedroom",
    roomQ3: "Where do we watch TV together?",
    roomA3: "livingRoom",
    roomQ4: "Where do we take a bath or shower?",
    roomA4: "bathroom",
    // Feedback
    correct: "Correct!",
    wrong: "Not quite!",
    next: "Next",
    finish: "Finish",
  },
  de: {
    r1Title: "Familienmitglieder",
    r1Hint: "Wer ist das? Wähle das richtige Familienmitglied.",
    r2Title: "Verwandtschaft",
    r2Hint: "Wähle die richtige Antwort.",
    r3Title: "Höflich oder unhöflich?",
    r3Hint: "Ist dieses Verhalten höflich oder unhöflich?",
    r4Title: "Wo passiert das?",
    r4Hint: "Wo machen wir das? Wähle das richtige Zimmer.",
    r5Title: "Schnelle Wiederholung",
    r5Hint: "Beantworte die Frage.",
    mother: "Mutter",
    father: "Vater",
    sister: "Schwester",
    brother: "Bruder",
    grandma: "Oma",
    grandpa: "Opa",
    aunt: "Tante",
    uncle: "Onkel",
    polite: "Höflich",
    rude: "Unhöflich",
    kitchen: "Küche",
    bedroom: "Schlafzimmer",
    livingRoom: "Wohnzimmer",
    bathroom: "Badezimmer",
    descMother: "Sie kümmert sich um dich und ist dein weiblicher Elternteil.",
    descFather: "Er geht arbeiten und ist dein männlicher Elternteil.",
    descSister: "Sie wohnt bei dir und ist ein Mädchen in deiner Familie.",
    descBrother: "Er wohnt bei dir und ist ein Junge in deiner Familie.",
    descGrandma: "Sie ist die Mutter von deiner Mama oder deinem Papa.",
    descGrandpa: "Er ist der Vater von deiner Mama oder deinem Papa.",
    relQ1: "Die Mutter deiner Mutter ist deine…",
    relQ2: "Der Bruder deines Vaters ist dein…",
    relQ3: "Die Tochter deiner Eltern ist deine…",
    relA1Correct: "Oma",
    relA1W1: "Tante",
    relA1W2: "Schwester",
    relA2Correct: "Onkel",
    relA2W1: "Opa",
    relA2W2: "Bruder",
    relA3Correct: "Schwester",
    relA3W1: "Oma",
    relA3W2: "Mutter",
    bhv1Text: "Du sagst 'bitte', wenn du um etwas bittest.",
    bhv1Answer: "polite",
    bhv2Text: "Du unterbrichst jemanden beim Reden.",
    bhv2Answer: "rude",
    bhv3Text: "Du teilst dein Spielzeug mit einem Freund.",
    bhv3Answer: "polite",
    bhv4Text: "Du hinterlässt Unordnung und räumst nicht auf.",
    bhv4Answer: "rude",
    bhv5Text: "Du hältst jemandem die Tür auf.",
    bhv5Answer: "polite",
    bhv6Text: "Du schreist und tobst im Haus.",
    bhv6Answer: "rude",
    roomQ1: "Wo kochen wir das Essen?",
    roomA1: "kitchen",
    roomQ2: "Wo schlafen wir nachts?",
    roomA2: "bedroom",
    roomQ3: "Wo schauen wir zusammen fern?",
    roomA3: "livingRoom",
    roomQ4: "Wo duschen oder baden wir?",
    roomA4: "bathroom",
    correct: "Richtig!",
    wrong: "Nicht ganz!",
    next: "Weiter",
    finish: "Fertig",
  },
  hu: {
    r1Title: "Családtagok",
    r1Hint: "Ki ez? Válaszd a helyes családtagot!",
    r2Title: "Rokoni kapcsolatok",
    r2Hint: "Válaszd a helyes választ!",
    r3Title: "Udvarias vagy durva?",
    r3Hint: "Ez a viselkedés udvarias vagy durva?",
    r4Title: "Hol történik?",
    r4Hint: "Hol tesszük ezt? Válaszd a helyes szobát!",
    r5Title: "Gyors ismétlés",
    r5Hint: "Válaszolj a kérdésre!",
    mother: "Anya",
    father: "Apa",
    sister: "Nővér",
    brother: "Testvér (fiú)",
    grandma: "Nagymama",
    grandpa: "Nagypapa",
    aunt: "Nagynéni",
    uncle: "Nagybácsi",
    polite: "Udvarias",
    rude: "Durva",
    kitchen: "Konyha",
    bedroom: "Hálószoba",
    livingRoom: "Nappali",
    bathroom: "Fürdőszoba",
    descMother: "Ő gondoskodik rólad otthon, és a te édesanyád.",
    descFather: "Ő dolgozni jár és a te édesapád.",
    descSister: "Veled él és lány a családban.",
    descBrother: "Veled él és fiú a családban.",
    descGrandma: "Ő az édesanyád vagy édesapád édesanyja.",
    descGrandpa: "Ő az édesanyád vagy édesapád édesapja.",
    relQ1: "Az édesanyád anyja a te…",
    relQ2: "Az édesapád fivére a te…",
    relQ3: "A szüleid lánya a te…",
    relA1Correct: "Nagymamád",
    relA1W1: "Nagynénid",
    relA1W2: "Nővéred",
    relA2Correct: "Nagybácsid",
    relA2W1: "Nagypapád",
    relA2W2: "Fivéred",
    relA3Correct: "Nővéred",
    relA3W1: "Nagymamád",
    relA3W2: "Édesanyád",
    bhv1Text: "Azt mondod: 'kérem', amikor kérsz valamit.",
    bhv1Answer: "polite",
    bhv2Text: "Félbeszakítod, amikor valaki éppen beszél.",
    bhv2Answer: "rude",
    bhv3Text: "Megosztod a játékaidat a barátaiddal.",
    bhv3Answer: "polite",
    bhv4Text: "Nagy rendetlenséget hagysz magad után és nem takarítod fel.",
    bhv4Answer: "rude",
    bhv5Text: "Kinyitod és tartod az ajtót valakinek.",
    bhv5Answer: "polite",
    bhv6Text: "Kiabálsz és lármázol a házban.",
    bhv6Answer: "rude",
    roomQ1: "Hol főzzük az ételt?",
    roomA1: "kitchen",
    roomQ2: "Hol alszunk éjszaka?",
    roomA2: "bedroom",
    roomQ3: "Hol nézünk együtt tévét?",
    roomA3: "livingRoom",
    roomQ4: "Hol fürödünk vagy zuhanyozunk?",
    roomA4: "bathroom",
    correct: "Helyes!",
    wrong: "Nem egészen!",
    next: "Tovább",
    finish: "Kész",
  },
  ro: {
    r1Title: "Membrii familiei",
    r1Hint: "Cine este acesta? Alege membrul corect al familiei.",
    r2Title: "Relații de familie",
    r2Hint: "Alege răspunsul corect.",
    r3Title: "Politicos sau nepoliticos?",
    r3Hint: "Este acest comportament politicos sau nepoliticos?",
    r4Title: "Unde se întâmplă?",
    r4Hint: "Unde facem asta? Alege camera potrivită.",
    r5Title: "Recapitulare rapidă",
    r5Hint: "Răspunde la întrebare.",
    mother: "Mamă",
    father: "Tată",
    sister: "Soră",
    brother: "Frate",
    grandma: "Bunică",
    grandpa: "Bunic",
    aunt: "Mătușă",
    uncle: "Unchi",
    polite: "Politicos",
    rude: "Nepoliticos",
    kitchen: "Bucătărie",
    bedroom: "Dormitor",
    livingRoom: "Living",
    bathroom: "Baie",
    descMother: "Ea are grijă de tine acasă și este părintele tău de sex feminin.",
    descFather: "El merge la serviciu și este părintele tău de sex masculin.",
    descSister: "Ea locuiește cu tine și este o fată în familia ta.",
    descBrother: "El locuiește cu tine și este un băiat în familia ta.",
    descGrandma: "Ea este mama mamei sau a tatălui tău.",
    descGrandpa: "El este tatăl mamei sau al tatălui tău.",
    relQ1: "Mama mamei tale este…",
    relQ2: "Fratele tatălui tău este…",
    relQ3: "Fiica părinților tăi este…",
    relA1Correct: "Bunica",
    relA1W1: "Mătușa",
    relA1W2: "Sora",
    relA2Correct: "Unchiul",
    relA2W1: "Bunicul",
    relA2W2: "Fratele",
    relA3Correct: "Sora",
    relA3W1: "Bunica",
    relA3W2: "Mama",
    bhv1Text: "Spui 'te rog' când ceri ceva.",
    bhv1Answer: "polite",
    bhv2Text: "Întrerupi pe cineva când vorbește.",
    bhv2Answer: "rude",
    bhv3Text: "Împarți jucăriile tale cu un prieten.",
    bhv3Answer: "polite",
    bhv4Text: "Lași o dezordine mare și nu o cureți.",
    bhv4Answer: "rude",
    bhv5Text: "Ții ușa deschisă pentru cineva.",
    bhv5Answer: "polite",
    bhv6Text: "Strigi și faci gălăgie în casă.",
    bhv6Answer: "rude",
    roomQ1: "Unde gătim mâncarea?",
    roomA1: "kitchen",
    roomQ2: "Unde dormim noaptea?",
    roomA2: "bedroom",
    roomQ3: "Unde ne uităm împreună la televizor?",
    roomA3: "livingRoom",
    roomQ4: "Unde facem baie sau duș?",
    roomA4: "bathroom",
    correct: "Corect!",
    wrong: "Nu chiar!",
    next: "Înainte",
    finish: "Gata",
  },
} as const;

type Lang = keyof typeof LABELS;
// Use a widened record type so any language variant is assignable
type LabelMap = Record<string, string>;

// ─── Helpers ─────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

// ─── Question types ───────────────────────────────────────────────────────────
interface MCQItem {
  question: string;      // display text
  options: string[];     // shuffled display labels
  correctKey: string;    // language-independent key
  optionKeys: string[];  // keys parallel to options[]
}

// ─── FamilyExplorer ───────────────────────────────────────────────────────────
const TOTAL_ROUNDS = 5;
// questions per round
const R1_COUNT = 4;
const R2_COUNT = 3;
const R3_COUNT = 4;
const R4_COUNT = 3;
const R5_COUNT = 4;
const TOTAL_Q = R1_COUNT + R2_COUNT + R3_COUNT + R4_COUNT + R5_COUNT;

function FamilyExplorer({ color, lang = "de", onDone, onClose }: Props) {
  const t: LabelMap = LABELS[(lang as Lang) in LABELS ? (lang as Lang) : "de"];

  // ── Score tracking ──
  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  // ── Round index ──
  const [round, setRound] = useState(0);

  // ── Per-question state ──
  const [qIndex, setQIndex] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null); // chosen key
  const [locked, setLocked] = useState(false);

  // ─────────────────────────────────────────────────────────────────────────
  // Build randomized question pools (once, stable via useMemo)
  // ─────────────────────────────────────────────────────────────────────────

  // Round 1: Family Members MCQ
  const r1Questions = useMemo((): MCQItem[] => {
    const pool: Array<{ key: string; emoji: string; descKey: keyof LabelMap }> = [
      { key: "mother", emoji: "👩", descKey: "descMother" },
      { key: "father", emoji: "👨", descKey: "descFather" },
      { key: "sister", emoji: "👧", descKey: "descSister" },
      { key: "brother", emoji: "👦", descKey: "descBrother" },
      { key: "grandma", emoji: "👵", descKey: "descGrandma" },
      { key: "grandpa", emoji: "👴", descKey: "descGrandpa" },
    ];
    const selected = pick(pool, R1_COUNT);
    const allKeys = pool.map((p) => p.key);
    return selected.map((item) => {
      const correctKey = item.key;
      // wrong options: 3 other members
      const wrongKeys = shuffle(allKeys.filter((k) => k !== correctKey)).slice(0, 3);
      const optionKeys = shuffle([correctKey, ...wrongKeys]);
      return {
        question: `${item.emoji}  ${t[item.descKey]}`,
        options: optionKeys.map((k) => t[k as keyof LabelMap] as string),
        correctKey,
        optionKeys,
      };
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Round 2: Relationships MCQ
  const r2Questions = useMemo((): MCQItem[] => {
    const pool: Array<{ question: string; correctDisplay: string; wrongDisplays: string[]; correctKey: string }> = [
      {
        question: t.relQ1,
        correctDisplay: t.relA1Correct,
        wrongDisplays: [t.relA1W1, t.relA1W2],
        correctKey: "grandma",
      },
      {
        question: t.relQ2,
        correctDisplay: t.relA2Correct,
        wrongDisplays: [t.relA2W1, t.relA2W2],
        correctKey: "uncle",
      },
      {
        question: t.relQ3,
        correctDisplay: t.relA3Correct,
        wrongDisplays: [t.relA3W1, t.relA3W2],
        correctKey: "sister",
      },
    ];
    const selected = pick(pool, R2_COUNT);
    return selected.map((item) => {
      const allDisplays = shuffle([item.correctDisplay, ...item.wrongDisplays]);
      return {
        question: item.question,
        options: allDisplays,
        correctKey: item.correctKey,
        // option keys: map display back to correct key only for the correct one, others are "wrong_N"
        optionKeys: allDisplays.map((d, i) =>
          d === item.correctDisplay ? item.correctKey : `wrong_${i}`
        ),
      };
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Round 3: Polite or Rude — binary choice
  const r3Questions = useMemo((): MCQItem[] => {
    const pool = [
      { text: t.bhv1Text, answer: t.bhv1Answer },
      { text: t.bhv2Text, answer: t.bhv2Answer },
      { text: t.bhv3Text, answer: t.bhv3Answer },
      { text: t.bhv4Text, answer: t.bhv4Answer },
      { text: t.bhv5Text, answer: t.bhv5Answer },
      { text: t.bhv6Text, answer: t.bhv6Answer },
    ];
    const selected = pick(pool, R3_COUNT);
    return selected.map((item) => ({
      question: item.text,
      // always show Polite first, Rude second (binary binary)
      options: [t.polite, t.rude],
      correctKey: item.answer, // "polite" or "rude" — language-independent
      optionKeys: ["polite", "rude"],
    }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Round 4: Room MCQ
  const r4Questions = useMemo((): MCQItem[] => {
    const pool: Array<{ question: string; correctRoomKey: string }> = [
      { question: t.roomQ1, correctRoomKey: t.roomA1 },
      { question: t.roomQ2, correctRoomKey: t.roomA2 },
      { question: t.roomQ3, correctRoomKey: t.roomA3 },
      { question: t.roomQ4, correctRoomKey: t.roomA4 },
    ];
    const selected = pick(pool, R4_COUNT);
    const allRoomKeys: string[] = ["kitchen", "bedroom", "livingRoom", "bathroom"];
    return selected.map((item) => {
      const correctKey = item.correctRoomKey;
      const wrongKeys = shuffle(allRoomKeys.filter((k) => k !== correctKey)).slice(0, 3);
      const optionKeys = shuffle([correctKey, ...wrongKeys]);
      return {
        question: item.question,
        options: optionKeys.map((k) => t[k as keyof LabelMap] as string),
        correctKey,
        optionKeys,
      };
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Round 5: Mixed quick review — pick R5_COUNT questions from rounds 1-4
  const r5Questions = useMemo((): MCQItem[] => {
    const allPool = [...r1Questions, ...r2Questions, ...r3Questions, ...r4Questions];
    return pick(allPool, R5_COUNT);
  }, [r1Questions, r2Questions, r3Questions, r4Questions]);

  // ─── Current round question list ───────────────────────────────────────────
  const questionLists = [r1Questions, r2Questions, r3Questions, r4Questions, r5Questions];
  const roundTitles = [t.r1Title, t.r2Title, t.r3Title, t.r4Title, t.r5Title];
  const roundHints = [t.r1Hint, t.r2Hint, t.r3Hint, t.r4Hint, t.r5Hint];
  const currentList = questionLists[round] ?? [];
  const currentQ: MCQItem | undefined = currentList[qIndex];
  const totalQInRound = currentList.length;

  // ─── Handle answer ──────────────────────────────────────────────────────────
  const handleAnswer = useCallback(
    (chosenKey: string) => {
      if (locked || !currentQ) return;
      setChosen(chosenKey);
      setLocked(true);
      totalRef.current += 1;
      if (chosenKey === currentQ.correctKey) {
        scoreRef.current += 1;
      }
    },
    [locked, currentQ]
  );

  // ─── Advance to next question or next round ─────────────────────────────────
  const handleNext = useCallback(() => {
    if (qIndex + 1 < totalQInRound) {
      setQIndex((i) => i + 1);
      setChosen(null);
      setLocked(false);
    } else {
      // end of round
      if (round + 1 < TOTAL_ROUNDS) {
        setRound((r) => r + 1);
        setQIndex(0);
        setChosen(null);
        setLocked(false);
      } else {
        onDone(scoreRef.current, TOTAL_Q);
      }
    }
  }, [qIndex, totalQInRound, round, onDone]);

  // ─── Helpers for rendering ──────────────────────────────────────────────────
  const isCorrect = locked && chosen === currentQ?.correctKey;
  const isWrong = locked && chosen !== currentQ?.correctKey;
  const isLastQ = round === TOTAL_ROUNDS - 1 && qIndex + 1 >= totalQInRound;

  // ─── Option button style ────────────────────────────────────────────────────
  function optionStyle(optKey: string) {
    if (!locked) {
      return {
        background: "rgba(255,255,255,0.06)",
        border: "2px solid rgba(255,255,255,0.15)",
        color: "#fff",
      };
    }
    if (optKey === currentQ?.correctKey) {
      return {
        background: "rgba(0,255,136,0.18)",
        border: "2px solid #00FF88",
        color: "#fff",
      };
    }
    if (optKey === chosen) {
      return {
        background: "rgba(255,45,120,0.18)",
        border: "2px solid #FF2D78",
        color: "#fff",
      };
    }
    return {
      background: "rgba(255,255,255,0.04)",
      border: "2px solid rgba(255,255,255,0.08)",
      color: "rgba(255,255,255,0.4)",
    };
  }

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
        >✕</button>
      )}
      {/* Round progress dots */}
      <div className="flex justify-center gap-1.5 pt-4 pb-1">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{
              background:
                i < round
                  ? "#00FF88"
                  : i === round
                  ? color
                  : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {/* Sub-progress within round */}
      {totalQInRound > 1 && (
        <div className="flex justify-center gap-1 pb-1">
          {Array.from({ length: totalQInRound }, (_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{
                background:
                  i < qIndex
                    ? "rgba(255,255,255,0.50)"
                    : i === qIndex
                    ? "rgba(255,255,255,0.85)"
                    : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={`${round}-${qIndex}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.22 }}
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4"
        >
          {/* Round title */}
          <p className="text-lg font-black text-white text-center" style={{ color }}>
            {roundTitles[round]}
          </p>

          {/* Hint — always visible */}
          <p className="text-white/60 text-xs font-bold text-center px-2">
            {roundHints[round]}
          </p>

          {currentQ && (
            <>
              {/* Question bubble */}
              <div
                className="w-full max-w-sm rounded-2xl px-5 py-4 text-center"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))`,
                  border: `1.5px solid rgba(255,255,255,0.12)`,
                }}
              >
                <p className="text-white text-base font-bold leading-snug whitespace-pre-wrap">
                  {currentQ.question}
                </p>
              </div>

              {/* Answer options */}
              <div className="flex flex-col gap-2 w-full max-w-sm">
                {currentQ.options.map((label, idx) => {
                  const optKey = currentQ.optionKeys[idx];
                  return (
                    <motion.button
                      key={optKey + idx}
                      onClick={() => handleAnswer(optKey)}
                      disabled={locked}
                      className="py-3.5 px-4 rounded-xl font-bold text-sm text-left transition-colors"
                      style={optionStyle(optKey)}
                      whileTap={locked ? {} : { scale: 0.97 }}
                    >
                      {label}
                    </motion.button>
                  );
                })}
              </div>

              {/* Feedback label */}
              <AnimatePresence>
                {locked && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm font-black"
                    style={{ color: isCorrect ? "#00FF88" : "#FF2D78" }}
                  >
                    {isCorrect ? t.correct : t.wrong}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Next / Finish button */}
              {locked && (
                <motion.button
                  onClick={handleNext}
                  className="w-full max-w-sm py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${color}55, ${color}99)`,
                    border: `2px solid ${color}`,
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isLastQ ? t.finish : t.next}
                  <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(FamilyExplorer);
