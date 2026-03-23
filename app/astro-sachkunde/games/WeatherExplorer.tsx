"use client";
// WeatherExplorer — Weather & Seasons (Wetter & Jahreszeiten)
// 5 rounds: Weather Types MCQ, What to Wear MCQ, Seasons & Weather MCQ,
//           Hot/Cold binary, Quick Review MCQ
// All text in LABELS, randomized with useMemo+shuffle, answer lock-out, scoreRef/totalRef

import { memo, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Volume2 } from "lucide-react";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

// ─── Labels ─────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Weather Explorer",

    // Round 1 — Weather Types
    round1Title: "What Weather Is This?",
    round1Hint: "Look at the emoji and choose the correct weather type!",
    round1Teach: "There are many types of weather: ☀️ sunny and warm, 🌧️ rainy and wet, ❄️ snowy and cold, 🌤️ cloudy, 💨 windy, and ⛈️ stormy with thunder and lightning. We check the weather to know what to wear!",

    // Round 2 — What to wear
    round2Title: "What Should You Wear?",
    round2HintRain: "It's raining outside. What do you need?",
    round2HintSnow: "It's snowing outside. What should you put on?",
    round2HintSunny: "It's sunny and hot. What do you wear?",
    round2Teach: "We dress for the weather! When it rains, we wear a raincoat and boots. When it's cold, we wear a warm jacket, hat and gloves. When it's sunny, we wear sunscreen and light clothes.",

    // Round 3 — Seasons
    round3Title: "Which Season?",
    round3HintSnow: "Which season has snow and frost?",
    round3HintFlowers: "Which season do flowers bloom and birds sing?",
    round3HintHot: "Which season has the hottest days?",
    round3HintLeaves: "Which season do leaves turn orange and fall?",
    round3Teach: "A year has 4 seasons with different weather: 🌸 Spring (warm, flowers bloom), ☀️ Summer (hot, long days), 🍂 Autumn (cool, leaves fall), ❄️ Winter (cold, snow). Each season brings different clothes and activities!",

    // Round 4 — Hot or cold
    round4Title: "Hot or Cold?",
    round4HintSnow: "What's the temperature when it's snowing?",
    round4HintSun: "What's it like on a sunny summer day?",
    round4HintRain: "What's a rainy autumn day usually like?",
    round4HintFrost: "What happens to water when it's very cold outside?",
    round4Teach: "Temperature tells us how hot or cold it is! Water freezes at 0°C and boils at 100°C. A nice day is about 20-25°C. Very hot days are above 30°C, and freezing days are below 0°C.",

    // Round 5 — Quick Review
    round5Title: "Quick Weather Review",
    round5Hint: "Show what you know!",
    round5Teach: "Let's see what you remember about weather, seasons, and temperature!",

    gotIt: "Got it! →",

    // Weather names (answer keys used in code + displayed)
    sunny: "Sunny ☀️",
    rainy: "Rainy 🌧️",
    snowy: "Snowy ❄️",
    windy: "Windy 💨",
    cloudy: "Cloudy ☁️",
    stormy: "Stormy ⛈️",

    // Clothing items
    umbrella: "Umbrella ☂️",
    rainCoat: "Rain Coat 🧥",
    sunglasses: "Sunglasses 🕶️",
    sunscreen: "Sun Cream 🧴",
    boots: "Snow Boots 👢",
    scarf: "Scarf & Gloves 🧤",
    hat: "Sun Hat 👒",

    // Seasons
    spring: "Spring 🌸",
    summer: "Summer ☀️",
    autumn: "Autumn 🍂",
    winter: "Winter ⛄",

    // Temp
    hot: "Hot 🥵",
    cold: "Cold 🥶",
    cool: "Cool 🍃",
    freezing: "Freezing 🧊",

    correct: "Correct! ✓",
    wrong: "Not quite!",
    next: "Next",
    finish: "Finish!",
  },

  de: {
    title: "Wetter-Entdecker",

    round1Title: "Welches Wetter ist das?",
    round1Hint: "Schau dir das Emoji an und wähle den richtigen Wettertyp!",
    round1Teach: "Es gibt viele Arten von Wetter: ☀️ sonnig und warm, 🌧️ regnerisch und nass, ❄️ verschneit und kalt, 🌤️ bewölkt, 💨 windig und ⛈️ Gewitter mit Donner und Blitzschlag. Wir schauen auf das Wetter, um zu wissen, was wir anziehen!",

    round2Title: "Was ziehst du an?",
    round2HintRain: "Es regnet draußen. Was brauchst du?",
    round2HintSnow: "Es schneit draußen. Was ziehst du an?",
    round2HintSunny: "Die Sonne scheint und es ist heiß. Was trägst du?",
    round2Teach: "Wir kleiden uns je nach Wetter an! Wenn es regnet, tragen wir einen Regenmantel und Stiefel. Wenn es kalt ist, tragen wir eine warme Jacke, Mütze und Handschuhe. Wenn es sonnig ist, tragen wir Sonnencreme und leichte Kleidung.",

    round3Title: "Welche Jahreszeit?",
    round3HintSnow: "In welcher Jahreszeit gibt es Schnee und Frost?",
    round3HintFlowers: "In welcher Jahreszeit blühen Blumen und singen Vögel?",
    round3HintHot: "Welche Jahreszeit hat die heißesten Tage?",
    round3HintLeaves: "In welcher Jahreszeit werden die Blätter orange und fallen?",
    round3Teach: "Ein Jahr hat 4 Jahreszeiten mit unterschiedlichem Wetter: 🌸 Frühling (warm, Blüten), ☀️ Sommer (heiß, lange Tage), 🍂 Herbst (kühl, Blätter fallen), ❄️ Winter (kalt, Schnee). Jede Jahreszeit bringt andere Kleidung und Aktivitäten!",

    round4Title: "Warm oder kalt?",
    round4HintSnow: "Wie ist die Temperatur, wenn es schneit?",
    round4HintSun: "Wie ist es an einem sonnigen Sommertag?",
    round4HintRain: "Wie ist ein regnerischer Herbsttag meistens?",
    round4HintFrost: "Was passiert mit Wasser, wenn es sehr kalt ist?",
    round4Teach: "Temperatur sagt uns, wie heiß oder kalt es ist! Wasser gefriert bei 0°C und kocht bei 100°C. Ein schöner Tag ist etwa 20-25°C. Sehr heiße Tage sind über 30°C, und eiskalte Tage sind unter 0°C.",

    round5Title: "Schnelle Wetter-Wiederholung",
    round5Hint: "Zeig, was du weißt!",
    round5Teach: "Mal sehen, was du über Wetter, Jahreszeiten und Temperatur gelernt hast!",

    gotIt: "Verstanden! →",

    sunny: "Sonnig ☀️",
    rainy: "Regnerisch 🌧️",
    snowy: "Verschneit ❄️",
    windy: "Windig 💨",
    cloudy: "Bewölkt ☁️",
    stormy: "Gewitter ⛈️",

    umbrella: "Regenschirm ☂️",
    rainCoat: "Regenmantel 🧥",
    sunglasses: "Sonnenbrille 🕶️",
    sunscreen: "Sonnencreme 🧴",
    boots: "Schneestiefel 👢",
    scarf: "Schal & Handschuhe 🧤",
    hat: "Sonnenhut 👒",

    spring: "Frühling 🌸",
    summer: "Sommer ☀️",
    autumn: "Herbst 🍂",
    winter: "Winter ⛄",

    hot: "Heiß 🥵",
    cold: "Kalt 🥶",
    cool: "Kühl 🍃",
    freezing: "Eiskalt 🧊",

    correct: "Richtig! ✓",
    wrong: "Nicht ganz!",
    next: "Weiter",
    finish: "Fertig!",
  },

  hu: {
    title: "Időjárás-felfedező",

    round1Title: "Milyen időjárás ez?",
    round1Hint: "Nézd meg az emojit és válaszd a helyes időjárást!",
    round1Teach: "Sokféle időjárás létezik: ☀️ napos és meleg, 🌧️ esős és nedves, ❄️ havas és hideg, 🌤️ felhős, 💨 szeles és ⛈️ viharos villámlásokkal és dörgésekkel. Az időjárást figyeljük, hogy tudjuk, mit kell felvenni!",

    round2Title: "Mit vegyél fel?",
    round2HintRain: "Odakint esik az eső. Mire van szükséged?",
    round2HintSnow: "Odakint havazik. Mit vegyél fel?",
    round2HintSunny: "Süt a nap és meleg van. Mit viselsz?",
    round2Teach: "Az időjárásnak megfelelően öltözödünk! Amikor esik, esőkabátot és csizmát viselünk. Amikor hideg van, meleg kabátot, sapkát és kesztyűt viselünk. Amikor napos van, naptejet és könnyű ruhákat viselünk.",

    round3Title: "Melyik évszak?",
    round3HintSnow: "Melyik évszakban van hó és fagy?",
    round3HintFlowers: "Melyik évszakban nyílnak virágok és énekelnek madarak?",
    round3HintHot: "Melyik évszaknak vannak a legmelegebb napjai?",
    round3HintLeaves: "Melyik évszakban sárgulnak és hullanak a levelek?",
    round3Teach: "Az év 4 évszakból áll különböző időjárással: 🌸 tavasz (meleg, virágok nyílnak), ☀️ nyár (forró, hosszú napok), 🍂 ősz (hűvös, levelek hulnak), ❄️ tél (hideg, hó). Minden évszak más ruhákat és tevékenységeket hoz!",

    round4Title: "Meleg vagy hideg?",
    round4HintSnow: "Milyen a hőmérséklet, amikor havazik?",
    round4HintSun: "Milyen egy napsütéses nyári napon?",
    round4HintRain: "Milyen általában egy esős őszi nap?",
    round4HintFrost: "Mi történik a vízzel, amikor nagyon hideg van odakint?",
    round4Teach: "A hőmérséklet megmutatja, hogy meleg vagy hideg van! A víz 0°C-nál fagyott és 100°C-nál forr. Egy szép nap körülbelül 20-25°C. Nagyon meleg napok 30°C felett vannak, és fagy napok 0°C alatt.",

    round5Title: "Gyors időjárás-összefoglaló",
    round5Hint: "Mutasd meg, mit tudsz!",
    round5Teach: "Nézzük meg, mit tanultál az időjárásról, évszakokról és hőmérsékletről!",

    gotIt: "Értettem! →",

    sunny: "Napos ☀️",
    rainy: "Esős 🌧️",
    snowy: "Havas ❄️",
    windy: "Szeles 💨",
    cloudy: "Felhős ☁️",
    stormy: "Viharos ⛈️",

    umbrella: "Esernyő ☂️",
    rainCoat: "Esőkabát 🧥",
    sunglasses: "Napszemüveg 🕶️",
    sunscreen: "Napkrém 🧴",
    boots: "Hócipő 👢",
    scarf: "Sál & Kesztyű 🧤",
    hat: "Napellenző 👒",

    spring: "Tavasz 🌸",
    summer: "Nyár ☀️",
    autumn: "Ősz 🍂",
    winter: "Tél ⛄",

    hot: "Meleg 🥵",
    cold: "Hideg 🥶",
    cool: "Hűvös 🍃",
    freezing: "Fagyos 🧊",

    correct: "Helyes! ✓",
    wrong: "Nem egészen!",
    next: "Tovább",
    finish: "Befejezés!",
  },

  ro: {
    title: "Exploratorul vremii",

    round1Title: "Ce vreme este aceasta?",
    round1Hint: "Privește emoji-ul și alege tipul corect de vreme!",
    round1Teach: "Există multe tipuri de vreme: ☀️ însorit și cald, 🌧️ ploios și umed, ❄️ nins și frig, 🌤️ noros, 💨 vântos și ⛈️ furtunos cu tunet și fulger. Urmărim vremea ca să știm ce să purtăm!",

    round2Title: "Ce să îmbraci?",
    round2HintRain: "Afară plouă. De ce ai nevoie?",
    round2HintSnow: "Afară ninge. Ce să îmbraci?",
    round2HintSunny: "Soarele strălucește și e cald. Ce porți?",
    round2Teach: "Ne îmbrăcăm în funcție de vreme! Când plouă, purtăm impermeabil și cizme. Când e frig, purtăm geacă caldă, pălărie și mănuși. Când e însorit, purtăm cremă de soare și haine ușoare.",

    round3Title: "Ce anotimp?",
    round3HintSnow: "În ce anotimp există zăpadă și ger?",
    round3HintFlowers: "În ce anotimp înfloresc florile și cântă păsurile?",
    round3HintHot: "Ce anotimp are cele mai călduroase zile?",
    round3HintLeaves: "În ce anotimp frunzele devin portocalii și cad?",
    round3Teach: "Anul are 4 anotimpuri cu vremuri diferite: 🌸 primăvara (cald, înfloresc florile), ☀️ vara (fierbinte, zile lungi), 🍂 toamna (răcoare, cad frunzele), ❄️ iarna (frig, zăpadă). Fiecare anotimp aduce alte haine și activități!",

    round4Title: "Cald sau frig?",
    round4HintSnow: "Ce temperatură este când ninge?",
    round4HintSun: "Cum este într-o zi însorită de vară?",
    round4HintRain: "Cum este de obicei o zi ploioasă de toamnă?",
    round4HintFrost: "Ce se întâmplă cu apa când e foarte frig afară?",
    round4Teach: "Temperatura ne spune cum de cald sau frig este! Apa se îngheață la 0°C și fierbe la 100°C. O zi frumoasă este aproximativ 20-25°C. Zilele foarte calde sunt peste 30°C, și zilele îngheț sunt sub 0°C.",

    round5Title: "Recapitulare rapidă",
    round5Hint: "Arată ce știi!",
    round5Teach: "Hai să vedem ce ai învățat despre vreme, anotimpuri și temperatură!",

    gotIt: "Am înțeles! →",

    sunny: "Însorit ☀️",
    rainy: "Ploios 🌧️",
    snowy: "Nins ❄️",
    windy: "Vântos 💨",
    cloudy: "Noros ☁️",
    stormy: "Furtunos ⛈️",

    umbrella: "Umbrelă ☂️",
    rainCoat: "Impermeabil 🧥",
    sunglasses: "Ochelari de soare 🕶️",
    sunscreen: "Cremă de soare 🧴",
    boots: "Cizme de zăpadă 👢",
    scarf: "Fular & Mănuși 🧤",
    hat: "Pălărie de soare 👒",

    spring: "Primăvară 🌸",
    summer: "Vară ☀️",
    autumn: "Toamnă 🍂",
    winter: "Iarnă ⛄",

    hot: "Cald 🥵",
    cold: "Frig 🥶",
    cool: "Răcoare 🍃",
    freezing: "Înghețat 🧊",

    correct: "Corect! ✓",
    wrong: "Nu chiar!",
    next: "Înainte",
    finish: "Gata!",
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── Question types ───────────────────────────────────────────────────────────

interface MCQQuestion {
  questionKey: string;     // key into lbl for the question text
  emoji?: string;          // optional big emoji display
  correctKey: string;      // language-independent answer key
  wrongKeys: string[];     // 3 wrong answer keys (from lbl)
}

// ─── Component ───────────────────────────────────────────────────────────────

const TOTAL_ROUNDS = 5;

function WeatherExplorer({ color, lang = "de", onDone, onClose }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "hu" ? "hu-HU" : lang === "de" ? "de-DE" : lang === "ro" ? "ro-RO" : "en-US";
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }, [lang]);

  const [round, setRound] = useState(0);
  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  // Teaching phase state
  const [showTeach, setShowTeach] = useState(true);

  // Per-round answer state (reset on advance)
  const [qIndex, setQIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);

  // ── Round 1: Weather Types — show emoji, pick weather name ──────────────────
  const r1Questions = useMemo<MCQQuestion[]>(() => {
    const pool: MCQQuestion[] = [
      { questionKey: "round1Hint", emoji: "☀️", correctKey: "sunny",  wrongKeys: ["rainy", "cloudy", "windy"] },
      { questionKey: "round1Hint", emoji: "🌧️", correctKey: "rainy",  wrongKeys: ["sunny", "snowy", "stormy"] },
      { questionKey: "round1Hint", emoji: "❄️", correctKey: "snowy",  wrongKeys: ["cloudy", "windy", "rainy"] },
      { questionKey: "round1Hint", emoji: "💨", correctKey: "windy",  wrongKeys: ["sunny", "rainy", "cloudy"] },
      { questionKey: "round1Hint", emoji: "☁️", correctKey: "cloudy", wrongKeys: ["sunny", "windy", "snowy"] },
      { questionKey: "round1Hint", emoji: "⛈️", correctKey: "stormy", wrongKeys: ["rainy", "cloudy", "windy"] },
    ];
    return shuffle(pool).slice(0, 4);
  }, []);

  // ── Round 2: What to Wear ───────────────────────────────────────────────────
  const r2Questions = useMemo<MCQQuestion[]>(() => {
    const pool: MCQQuestion[] = [
      { questionKey: "round2HintRain",  correctKey: "umbrella",   wrongKeys: ["sunglasses", "hat", "sunscreen"] },
      { questionKey: "round2HintSnow",  correctKey: "boots",      wrongKeys: ["sunglasses", "hat", "sunscreen"] },
      { questionKey: "round2HintSnow",  correctKey: "scarf",      wrongKeys: ["umbrella", "sunglasses", "sunscreen"] },
      { questionKey: "round2HintRain",  correctKey: "rainCoat",   wrongKeys: ["hat", "sunscreen", "sunglasses"] },
      { questionKey: "round2HintSunny", correctKey: "sunglasses", wrongKeys: ["umbrella", "boots", "scarf"] },
      { questionKey: "round2HintSunny", correctKey: "hat",        wrongKeys: ["umbrella", "boots", "scarf"] },
    ];
    return shuffle(pool).slice(0, 3);
  }, []);

  // ── Round 3: Seasons & Weather ─────────────────────────────────────────────
  const r3Questions = useMemo<MCQQuestion[]>(() => {
    const pool: MCQQuestion[] = [
      { questionKey: "round3HintSnow",    correctKey: "winter", wrongKeys: ["spring", "summer", "autumn"] },
      { questionKey: "round3HintFlowers", correctKey: "spring", wrongKeys: ["winter", "summer", "autumn"] },
      { questionKey: "round3HintHot",     correctKey: "summer", wrongKeys: ["spring", "winter", "autumn"] },
      { questionKey: "round3HintLeaves",  correctKey: "autumn", wrongKeys: ["spring", "summer", "winter"] },
    ];
    return shuffle(pool).slice(0, 3);
  }, []);

  // ── Round 4: Hot or Cold — binary choice ───────────────────────────────────
  const r4Questions = useMemo<{ hintKey: string; correctKey: string; wrongKey: string }[]>(() => {
    const pool = [
      { hintKey: "round4HintSnow",  correctKey: "cold",     wrongKey: "hot" },
      { hintKey: "round4HintSun",   correctKey: "hot",      wrongKey: "cold" },
      { hintKey: "round4HintRain",  correctKey: "cool",     wrongKey: "hot" },
      { hintKey: "round4HintFrost", correctKey: "freezing", wrongKey: "hot" },
    ];
    return shuffle(pool).slice(0, 4);
  }, []);

  // ── Round 5: Quick Review — mixed ──────────────────────────────────────────
  const r5Questions = useMemo<MCQQuestion[]>(() => {
    const pool: MCQQuestion[] = [
      { questionKey: "round1Hint", emoji: "⛈️", correctKey: "stormy", wrongKeys: ["rainy", "sunny", "windy"] },
      { questionKey: "round2HintRain",  correctKey: "umbrella", wrongKeys: ["sunglasses", "hat", "boots"] },
      { questionKey: "round3HintSnow",  correctKey: "winter",   wrongKeys: ["spring", "summer", "autumn"] },
      { questionKey: "round4HintSun",   correctKey: "hot",      wrongKeys: ["cold", "cool", "freezing"] },
      { questionKey: "round1Hint", emoji: "🌧️", correctKey: "rainy",  wrongKeys: ["sunny", "snowy", "stormy"] },
      { questionKey: "round3HintLeaves", correctKey: "autumn",  wrongKeys: ["spring", "summer", "winter"] },
    ];
    return shuffle(pool).slice(0, 4);
  }, []);

  // ── Advance helpers ─────────────────────────────────────────────────────────

  const advanceQuestion = useCallback(() => {
    const lengths = [r1Questions.length, r2Questions.length, r3Questions.length, r4Questions.length, r5Questions.length];
    const currentLen = lengths[round] ?? 1;
    const nextIdx = qIndex + 1;
    if (nextIdx < currentLen) {
      setQIndex(nextIdx);
      setSelectedKey(null);
      setLocked(false);
    } else {
      // end of round
      if (round >= TOTAL_ROUNDS - 1) {
        onDone(scoreRef.current, totalRef.current);
      } else {
        setRound(r => r + 1);
        setQIndex(0);
        setSelectedKey(null);
        setLocked(false);
        setShowTeach(true);
      }
    }
  }, [round, qIndex, r1Questions.length, r2Questions.length, r3Questions.length, r4Questions.length, r5Questions.length, onDone]);

  const handleMCQSelect = useCallback((choiceKey: string, correctKey: string) => {
    if (locked) return;
    setLocked(true);
    setSelectedKey(choiceKey);
    totalRef.current += 1;
    if (choiceKey === correctKey) {
      scoreRef.current += 1;
    } else {
      fireWrongAnswer({ question: "Weather Explorer", wrongAnswer: (lbl as Record<string, string>)[choiceKey] ?? choiceKey, correctAnswer: (lbl as Record<string, string>)[correctKey] ?? correctKey, topic: "Weather Explorer", lang });
    }
  }, [locked, lbl, lang]);

  // ── Render helpers ──────────────────────────────────────────────────────────

  const renderNextBtn = (isLast: boolean) => (
    <motion.button
      onClick={advanceQuestion}
      className="mt-3 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}>
      {isLast ? lbl.finish : lbl.next} <ChevronRight size={16} />
    </motion.button>
  );

  const renderMCQ = (
    questions: MCQQuestion[],
    qIdx: number,
    roundTitle: string,
    isLastRound: boolean,
  ) => {
    const q = questions[qIdx];
    if (!q) return null;
    const allChoices = shuffle([q.correctKey, ...q.wrongKeys]);
    const qText = (lbl as Record<string, string>)[q.questionKey] ?? q.questionKey;
    const isLastQ = qIdx === questions.length - 1;

    return (
      <>
        <p className="text-2xl font-black text-white text-center">{roundTitle}</p>

        {/* Sub-progress dots */}
        <div className="flex gap-1 justify-center">
          {questions.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full transition-colors"
              style={{ background: i < qIdx ? "#00FF88" : i === qIdx ? color : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>

        {/* Big emoji if present */}
        {q.emoji && (
          <div className="text-6xl select-none">{q.emoji}</div>
        )}

        <p className="text-white/70 text-sm font-bold text-center px-2">{qText}</p>

        <div className="flex flex-col gap-2 w-full max-w-sm">
          {allChoices.map(key => {
            const label = (lbl as Record<string, string>)[key] ?? key;
            const isSelected = selectedKey === key;
            const isCorrect = key === q.correctKey;
            let bg = "rgba(255,255,255,0.06)";
            let border = "rgba(255,255,255,0.15)";
            if (locked && isSelected) {
              bg = isCorrect ? "#00FF8833" : "#FF2D7833";
              border = isCorrect ? "#00FF88" : "#FF2D78";
            } else if (locked && isCorrect) {
              bg = "#00FF8822";
              border = "#00FF8866";
            }
            return (
              <motion.button key={key}
                onClick={() => handleMCQSelect(key, q.correctKey)}
                disabled={locked}
                className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors text-left"
                style={{ background: bg, border: `2px solid ${border}` }}
                whileTap={locked ? {} : { scale: 0.97 }}>
                {label}
              </motion.button>
            );
          })}
        </div>

        {/* Feedback text */}
        {locked && (
          <motion.p
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-black"
            style={{ color: selectedKey === q.correctKey ? "#00FF88" : "#FF2D78" }}>
            {selectedKey === q.correctKey ? lbl.correct : lbl.wrong}
          </motion.p>
        )}

        {locked && renderNextBtn(isLastRound && isLastQ)}
      </>
    );
  };

  // ── Round 4 binary render ───────────────────────────────────────────────────

  const renderBinary = () => {
    const q = r4Questions[qIndex];
    if (!q) return null;
    const hintText = (lbl as Record<string, string>)[q.hintKey] ?? q.hintKey;
    const isLastQ = qIndex === r4Questions.length - 1;
    const choices = shuffle([q.correctKey, q.wrongKey]);

    return (
      <>
        <p className="text-2xl font-black text-white text-center">{lbl.round4Title}</p>

        <div className="flex gap-1 justify-center">
          {r4Questions.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full transition-colors"
              style={{ background: i < qIndex ? "#00FF88" : i === qIndex ? color : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>

        <p className="text-white/70 text-sm font-bold text-center px-2">{hintText}</p>

        <div className="flex gap-3 w-full max-w-sm">
          {choices.map(key => {
            const label = (lbl as Record<string, string>)[key] ?? key;
            const isSelected = selectedKey === key;
            const isCorrect = key === q.correctKey;
            let bg = "rgba(255,255,255,0.06)";
            let border = "rgba(255,255,255,0.15)";
            if (locked && isSelected) {
              bg = isCorrect ? "#00FF8833" : "#FF2D7833";
              border = isCorrect ? "#00FF88" : "#FF2D78";
            } else if (locked && isCorrect) {
              bg = "#00FF8822";
              border = "#00FF8866";
            }
            return (
              <motion.button key={key}
                onClick={() => handleMCQSelect(key, q.correctKey)}
                disabled={locked}
                className="flex-1 py-4 rounded-xl font-black text-white text-base transition-colors"
                style={{ background: bg, border: `2px solid ${border}` }}
                whileTap={locked ? {} : { scale: 0.97 }}>
                {label}
              </motion.button>
            );
          })}
        </div>

        {locked && (
          <motion.p
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-black"
            style={{ color: selectedKey === q.correctKey ? "#00FF88" : "#FF2D78" }}>
            {selectedKey === q.correctKey ? lbl.correct : lbl.wrong}
          </motion.p>
        )}

        {locked && renderNextBtn(round === TOTAL_ROUNDS - 2 && isLastQ)}
      </>
    );
  };

  // ── Main render ─────────────────────────────────────────────────────────────

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
      <div className="flex justify-center gap-1.5 pt-4 pb-2">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={`${round}-${qIndex}-${showTeach}`}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4">

          {/* Teaching phase for all rounds */}
          {showTeach && (
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex items-center gap-2 justify-center">
                <p className="text-xl font-black text-white text-center">{round === 0 ? lbl.round1Title : round === 1 ? lbl.round2Title : round === 2 ? lbl.round3Title : round === 3 ? lbl.round4Title : lbl.round5Title}</p>
                <button onClick={() => speak((round === 0 ? lbl.round1Title : round === 1 ? lbl.round2Title : round === 2 ? lbl.round3Title : round === 3 ? lbl.round4Title : lbl.round5Title) + ". " + (round === 0 ? lbl.round1Teach : round === 1 ? lbl.round2Teach : round === 2 ? lbl.round3Teach : round === 3 ? lbl.round4Teach : lbl.round5Teach))}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                  <Volume2 size={16} />
                </button>
              </div>
              <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-sm text-white/80 leading-relaxed">{round === 0 ? lbl.round1Teach : round === 1 ? lbl.round2Teach : round === 2 ? lbl.round3Teach : round === 3 ? lbl.round4Teach : lbl.round5Teach}</p>
              </div>
              <motion.button onClick={() => setShowTeach(false)}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
                whileTap={{ scale: 0.97 }}>
                {lbl.gotIt} <ChevronRight size={16} />
              </motion.button>
            </div>
          )}

          {!showTeach && round === 0 && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <p className="text-2xl font-black text-white text-center">{lbl.round1Title}</p>
                <button onClick={() => speak(lbl.round1Title + ". " + lbl.round1Hint)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                  <Volume2 size={16} />
                </button>
              </div>
              {renderMCQ(r1Questions, qIndex, lbl.round1Title, false)}
            </>
          )}
          {!showTeach && round === 1 && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <p className="text-2xl font-black text-white text-center">{lbl.round2Title}</p>
                <button onClick={() => speak(lbl.round2Title + ". " + lbl.round2Hint)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                  <Volume2 size={16} />
                </button>
              </div>
              {renderMCQ(r2Questions, qIndex, lbl.round2Title, false)}
            </>
          )}
          {!showTeach && round === 2 && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <p className="text-2xl font-black text-white text-center">{lbl.round3Title}</p>
                <button onClick={() => speak(lbl.round3Title + ". " + lbl.round3Hint)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                  <Volume2 size={16} />
                </button>
              </div>
              {renderMCQ(r3Questions, qIndex, lbl.round3Title, false)}
            </>
          )}
          {!showTeach && round === 3 && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <p className="text-2xl font-black text-white text-center">{lbl.round4Title}</p>
                <button onClick={() => speak(lbl.round4Title + ". " + lbl.round4Hint)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                  <Volume2 size={16} />
                </button>
              </div>
              {renderBinary()}
            </>
          )}
          {!showTeach && round === 4 && (
            <>
              <div className="flex items-center gap-2 justify-center">
                <p className="text-2xl font-black text-white text-center">{lbl.round5Title}</p>
                <button onClick={() => speak(lbl.round5Title + ". " + lbl.round5Hint)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors flex-shrink-0">
                  <Volume2 size={16} />
                </button>
              </div>
              {renderMCQ(r5Questions, qIndex, lbl.round5Title, true)}
            </>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(WeatherExplorer);
