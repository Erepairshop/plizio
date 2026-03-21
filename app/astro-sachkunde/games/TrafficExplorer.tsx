"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TOTAL_ROUNDS = 5;

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Traffic Explorer",
    round1Title: "Traffic Light",
    round1Hint: "Tap each color to learn what it means!",
    round1Red: "Red — STOP",
    round1Yellow: "Yellow — WAIT",
    round1Green: "Green — GO",
    round2Title: "Vehicles",
    round2Hint: "How many wheels does this vehicle have?",
    round2Car: "Car",
    round2Bike: "Bicycle",
    round2Bus: "Bus",
    round2Train: "Train",
    round2Wheels2: "2 wheels",
    round2Wheels4: "4 wheels",
    round2WheelsMany: "Many wheels",
    round2Rails: "Runs on rails",
    round3Title: "At the Crosswalk",
    round3Hint: "What do you do at a zebra crossing?",
    round3LookLeftRightLeft: "Look left-right-left",
    round3WaitForGreen: "Wait for green light",
    round3HoldHands: "Hold hands with adult",
    round3WalkFast: "Walk quickly across",
    round4Title: "Safety Rules",
    round4Hint: "Choose the safe option!",
    round4WearHelmet: "Wear helmet on bike",
    round4NoHelmet: "No helmet needed",
    round4Buckle: "Buckle seatbelt in car",
    round4NoBuckle: "No seatbelt needed",
    round5Title: "Traffic Signs Review",
    round5Hint: "Match the sign to its meaning!",
    round5StopSign: "Stop Sign",
    round5Crosswalk: "Crosswalk",
    round5NoEntry: "No Entry",
    round5SpeedLimit: "Speed Limit",
    round5MustStop: "Must stop",
    round5SafeCrossing: "Safe to cross",
    round5CannotEnter: "Cannot enter",
    round5SlowDown: "Slow down",
    correct: "Correct!",
    wrong: "Try again!",
    next: "Next",
    finish: "Finished!",
  },
  hu: {
    title: "Forgalom felfedező",
    round1Title: "Közlekedési lámpa",
    round1Hint: "Koppints az egyes szín ek re!",
    round1Red: "Piros — MEGÁLJ",
    round1Yellow: "Sárga — VÁRJ",
    round1Green: "Zöld — MEGY",
    round2Title: "Járművek",
    round2Hint: "Hány kereke van ennek a járműnek?",
    round2Car: "Autó",
    round2Bike: "Bicikli",
    round2Bus: "Busz",
    round2Train: "Vonat",
    round2Wheels2: "2 kerék",
    round2Wheels4: "4 kerék",
    round2WheelsMany: "Sok kerék",
    round2Rails: "Síneken fut",
    round3Title: "A zebra sávnál",
    round3Hint: "Mit csinálsz a zebra sávnál?",
    round3LookLeftRightLeft: "Nézz balra-jobbra-balra",
    round3WaitForGreen: "Várj a zöld lámpa",
    round3HoldHands: "Felnőtt keze",
    round3WalkFast: "Gyorsan át",
    round4Title: "Biztonsági szabályok",
    round4Hint: "Válassz a biztonságos opció!",
    round4WearHelmet: "Viselj sisak",
    round4NoHelmet: "Nincs sisak",
    round4Buckle: "Biztonsági öv",
    round4NoBuckle: "Nincs öv",
    round5Title: "Közlekedési táblák",
    round5Hint: "Párositsd a táblát a jelentésével!",
    round5StopSign: "Stop tábla",
    round5Crosswalk: "Zebra sáv",
    round5NoEntry: "Behajtani tilos",
    round5SpeedLimit: "Sebességkorlátozás",
    round5MustStop: "Meg kell állni",
    round5SafeCrossing: "Biztonságos átkelés",
    round5CannotEnter: "Nem lehet belépni",
    round5SlowDown: "Lassítani",
    correct: "Helyes!",
    wrong: "Próbálj újra!",
    next: "Tovább",
    finish: "Vége!",
  },
  de: {
    title: "Verkehr-Entdecker",
    round1Title: "Ampel",
    round1Hint: "Tippe auf jede Farbe!",
    round1Red: "Rot — HALT",
    round1Yellow: "Gelb — WARTEN",
    round1Green: "Grün — GEHEN",
    round2Title: "Fahrzeuge",
    round2Hint: "Wie viele Räder hat dieses Fahrzeug?",
    round2Car: "Auto",
    round2Bike: "Fahrrad",
    round2Bus: "Bus",
    round2Train: "Zug",
    round2Wheels2: "2 Räder",
    round2Wheels4: "4 Räder",
    round2WheelsMany: "Viele Räder",
    round2Rails: "Fährt auf Schienen",
    round3Title: "Am Zebrastreifen",
    round3Hint: "Was machst du am Zebrastreifen?",
    round3LookLeftRightLeft: "Schau links-rechts-links",
    round3WaitForGreen: "Warte auf grünes Licht",
    round3HoldHands: "Hand eines Erwachsenen",
    round3WalkFast: "Schnell über die Straße",
    round4Title: "Sicherheitsregeln",
    round4Hint: "Wähle die sichere Option!",
    round4WearHelmet: "Helm auf dem Fahrrad tragen",
    round4NoHelmet: "Kein Helm nötig",
    round4Buckle: "Sicherheitsgurt im Auto",
    round4NoBuckle: "Kein Gurt nötig",
    round5Title: "Verkehrszeichen",
    round5Hint: "Verbinde das Zeichen mit seiner Bedeutung!",
    round5StopSign: "Stoppschild",
    round5Crosswalk: "Zebrastreifen",
    round5NoEntry: "Einfahrt verboten",
    round5SpeedLimit: "Geschwindigkeitsbegrenzung",
    round5MustStop: "Muss halten",
    round5SafeCrossing: "Sicheres Überqueren",
    round5CannotEnter: "Kann nicht einfahren",
    round5SlowDown: "Verlangsamen",
    correct: "Richtig!",
    wrong: "Versuchen Sie es erneut!",
    next: "Weiter",
    finish: "Fertig!",
  },
  ro: {
    title: "Exploratorul traficului",
    round1Title: "Semafor",
    round1Hint: "Atinge fiecare culoare!",
    round1Red: "Roșu — OPRI",
    round1Yellow: "Galben — ASTEAPTA",
    round1Green: "Verde — MERGI",
    round2Title: "Vehicule",
    round2Hint: "Câte roți are acest vehicul?",
    round2Car: "Mașină",
    round2Bike: "Bicicletă",
    round2Bus: "Autobuz",
    round2Train: "Tren",
    round2Wheels2: "2 roți",
    round2Wheels4: "4 roți",
    round2WheelsMany: "Multe roți",
    round2Rails: "Merge pe șine",
    round3Title: "La trecerea de cale ferată",
    round3Hint: "Ce faci la o trecere de pietoni?",
    round3LookLeftRightLeft: "Privește stânga-dreapta-stânga",
    round3WaitForGreen: "Asteapta lumina verde",
    round3HoldHands: "Mâna unui adult",
    round3WalkFast: "Traversează repede",
    round4Title: "Reguli de siguranță",
    round4Hint: "Alege opțiunea sigură!",
    round4WearHelmet: "Poartă cască pe bicicletă",
    round4NoHelmet: "Fără cască",
    round4Buckle: "Centură de siguranță în mașină",
    round4NoBuckle: "Fără centură",
    round5Title: "Semne de circulație",
    round5Hint: "Potrivește semnul cu semnificația lui!",
    round5StopSign: "Semn de stop",
    round5Crosswalk: "Trecere de pietoni",
    round5NoEntry: "Intrare interzisă",
    round5SpeedLimit: "Limita de viteză",
    round5MustStop: "Trebuie să oprești",
    round5SafeCrossing: "Traversare sigură",
    round5CannotEnter: "Nu poți intra",
    round5SlowDown: "Încetinește",
    correct: "Corect!",
    wrong: "Încearcă din nou!",
    next: "Înainte",
    finish: "Gata!",
  },
};

const TRAFFIC_LIGHT_COLORS = [
  { id: "red", label: "red", display: "#EF4444" },
  { id: "yellow", label: "yellow", display: "#FBBF24" },
  { id: "green", label: "green", display: "#10B981" },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function TrafficExplorer({ color, lang = "de", onDone }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const wrongRef = useRef(0);

  // Round 1: Traffic light colors
  const [discoveredColors, setDiscoveredColors] = useState<Set<string>>(new Set());

  // Round 2: Vehicle wheels/type MCQ
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [vehicleSubmitted, setVehicleSubmitted] = useState(false);

  // Round 3: Crosswalk safety
  const [selectedCrosswalk, setSelectedCrosswalk] = useState<string | null>(null);
  const [crosswalkSubmitted, setCrosswalkSubmitted] = useState(false);

  // Round 4: Safety rules
  const [selectedSafety, setSelectedSafety] = useState<string | null>(null);
  const [safetySubmitted, setSafetySubmitted] = useState(false);

  // Round 5: Traffic signs matching
  const [signMatches, setSignMatches] = useState<Record<string, string>>({});

  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongRef.current, TOTAL_ROUNDS - 1));
      onDone(score, TOTAL_ROUNDS);
    } else {
      setRound(r => r + 1);
      setSelectedVehicle(null);
      setVehicleSubmitted(false);
      setSelectedCrosswalk(null);
      setCrosswalkSubmitted(false);
      setSelectedSafety(null);
      setSafetySubmitted(false);
    }
  }, [round, onDone]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      {/* Progress dots */}
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

          {/* ROUND 1: Traffic light */}
          {round === 0 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
              <div className="flex flex-col gap-2 w-full max-w-sm">
                {TRAFFIC_LIGHT_COLORS.map((c) => (
                  <motion.button key={c.id}
                    onClick={() => setDiscoveredColors(prev => new Set([...prev, c.id]))}
                    className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors flex items-center gap-3"
                    style={{
                      background: discoveredColors.has(c.id) ? `${c.display}33` : "rgba(255,255,255,0.06)",
                      border: `2px solid ${discoveredColors.has(c.id) ? c.display : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    <div className="w-6 h-6 rounded-full" style={{ background: c.display }} />
                    {lbl[`round1${c.label.charAt(0).toUpperCase() + c.label.slice(1)}` as keyof typeof lbl] || c.label}
                  </motion.button>
                ))}
              </div>
              {discoveredColors.size > 0 && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 2: Vehicles */}
          {round === 1 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
              <div className="flex flex-col gap-2 w-full max-w-sm">
                {[
                  { id: "car", vehicle: lbl.round2Car, label: lbl.round2Wheels4, correct: true },
                  { id: "bike", vehicle: lbl.round2Bike, label: lbl.round2Wheels2, correct: false },
                  { id: "bus", vehicle: lbl.round2Bus, label: lbl.round2WheelsMany, correct: false },
                  { id: "train", vehicle: lbl.round2Train, label: lbl.round2Rails, correct: false },
                ].map((opt) => (
                  <motion.button key={opt.id}
                    onClick={() => {
                      setSelectedVehicle(opt.id);
                      if (!opt.correct) wrongRef.current++;
                      setVehicleSubmitted(true);
                    }}
                    className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors"
                    style={{
                      background: selectedVehicle === opt.id
                        ? opt.correct ? "#00FF8833" : "#FF2D7833"
                        : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedVehicle === opt.id
                        ? opt.correct ? "#00FF88" : "#FF2D78"
                        : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    <div className="flex justify-between">
                      <span>{opt.vehicle}</span>
                      <span className="text-white/60">{opt.label}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
              {vehicleSubmitted && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 3: Crosswalk */}
          {round === 2 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
              <div className="flex flex-col gap-2 w-full max-w-sm">
                {[
                  { id: "look", label: lbl.round3LookLeftRightLeft, correct: true },
                  { id: "wait", label: lbl.round3WaitForGreen, correct: false },
                  { id: "hold", label: lbl.round3HoldHands, correct: false },
                  { id: "fast", label: lbl.round3WalkFast, correct: false },
                ].map((opt) => (
                  <motion.button key={opt.id}
                    onClick={() => {
                      setSelectedCrosswalk(opt.id);
                      if (!opt.correct) wrongRef.current++;
                      setCrosswalkSubmitted(true);
                    }}
                    className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors"
                    style={{
                      background: selectedCrosswalk === opt.id
                        ? opt.correct ? "#00FF8833" : "#FF2D7833"
                        : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedCrosswalk === opt.id
                        ? opt.correct ? "#00FF88" : "#FF2D78"
                        : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {opt.label}
                  </motion.button>
                ))}
              </div>
              {crosswalkSubmitted && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 4: Safety rules */}
          {round === 3 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
              <div className="flex flex-col gap-2 w-full max-w-sm">
                {[
                  { id: "helmet", label: lbl.round4WearHelmet, correct: true },
                  { id: "no-helmet", label: lbl.round4NoHelmet, correct: false },
                  { id: "buckle", label: lbl.round4Buckle, correct: true },
                  { id: "no-buckle", label: lbl.round4NoBuckle, correct: false },
                ].map((opt) => (
                  <motion.button key={opt.id}
                    onClick={() => {
                      setSelectedSafety(opt.id);
                      if (!opt.correct) wrongRef.current++;
                      setSafetySubmitted(true);
                    }}
                    className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors"
                    style={{
                      background: selectedSafety === opt.id
                        ? opt.correct ? "#00FF8833" : "#FF2D7833"
                        : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedSafety === opt.id
                        ? opt.correct ? "#00FF88" : "#FF2D78"
                        : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {opt.label}
                  </motion.button>
                ))}
              </div>
              {safetySubmitted && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 5: Traffic signs */}
          {round === 4 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
              <div className="flex flex-col gap-3 w-full max-w-sm">
                {[
                  { sign: "stop", signLabel: lbl.round5StopSign },
                  { sign: "crosswalk", signLabel: lbl.round5Crosswalk },
                  { sign: "noentry", signLabel: lbl.round5NoEntry },
                ].map((s) => (
                  <div key={s.sign} className="flex gap-2">
                    <div className="flex-1 py-2 px-3 rounded-lg bg-white/10 border border-white/15 text-white text-xs font-bold flex items-center justify-center">
                      {s.signLabel}
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      {[
                        { id: `${s.sign}-a`, meaning: s.sign === "stop" ? lbl.round5MustStop : s.sign === "crosswalk" ? lbl.round5SafeCrossing : lbl.round5CannotEnter, correct: true },
                        { id: `${s.sign}-b`, meaning: s.sign === "stop" ? lbl.round5SafeCrossing : s.sign === "crosswalk" ? lbl.round5MustStop : lbl.round5SlowDown, correct: false },
                      ].map((opt) => (
                        <motion.button key={opt.id}
                          onClick={() => {
                            setSignMatches(prev => ({ ...prev, [s.sign]: opt.id }));
                            if (!opt.correct) wrongRef.current++;
                          }}
                          className="py-1.5 px-2 rounded-lg font-bold text-white text-xs transition-colors"
                          style={{
                            background: signMatches[s.sign] === opt.id
                              ? opt.correct ? "#00FF8833" : "#FF2D7833"
                              : "rgba(255,255,255,0.06)",
                            border: `2px solid ${signMatches[s.sign] === opt.id
                              ? opt.correct ? "#00FF88" : "#FF2D78"
                              : "rgba(255,255,255,0.15)"}`,
                          }}
                          whileTap={{ scale: 0.95 }}>
                          {opt.meaning}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {Object.keys(signMatches).length === 3 && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
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

export default memo(TrafficExplorer);
