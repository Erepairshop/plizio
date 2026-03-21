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
    title: "Weather Explorer",
    round1Title: "Weather Types",
    round1Hint: "Tap each weather icon to discover its name!",
    round1Sunny: "Sunny",
    round1Rain: "Rainy",
    round1Snow: "Snowy",
    round1Wind: "Windy",
    round1Storm: "Thunderstorm",
    round1Cloudy: "Cloudy",
    round2Title: "What Do You Wear?",
    round2Hint: "What do you wear in rainy weather?",
    round2Umbrella: "Umbrella",
    round2Hat: "Sun Hat",
    round2Scarf: "Scarf",
    round2Boots: "Rain Boots",
    round3Title: "Months in Order",
    round3Hint: "Tap the months in order: Jan → Feb → ... → Dec!",
    round3Correct: "Perfect order!",
    round4Title: "Which Month?",
    round4Hint: "Which month belongs to summer?",
    round4June: "June",
    round4July: "July",
    round4August: "August",
    round4December: "December",
    round5Title: "Days of the Week",
    round5Hint: "Tap the days in order!",
    round5Monday: "Monday",
    round5Tuesday: "Tuesday",
    round5Wednesday: "Wednesday",
    round5Thursday: "Thursday",
    round5Friday: "Friday",
    round5Saturday: "Saturday",
    round5Sunday: "Sunday",
    correct: "Correct!",
    wrong: "Try again!",
    next: "Next",
    finish: "Finished!",
  },
  hu: {
    title: "Időjárás felfedező",
    round1Title: "Időjárási típusok",
    round1Hint: "Koppints az időjárási ikonokra!",
    round1Sunny: "Napos",
    round1Rain: "Esős",
    round1Snow: "Havas",
    round1Wind: "Szeles",
    round1Storm: "Vihar",
    round1Cloudy: "Felhős",
    round2Title: "Mit viselsz?",
    round2Hint: "Mit viselsz esős időben?",
    round2Umbrella: "Esernyő",
    round2Hat: "Napkalap",
    round2Scarf: "Sál",
    round2Boots: "Gumicsizme",
    round3Title: "Hónapok sorrendje",
    round3Hint: "Koppints a hónapokra sorban: Jan → Feb → ... → Dec!",
    round3Correct: "Tökéletes sorrend!",
    round4Title: "Melyik hónap?",
    round4Hint: "Melyik hónap tartozik a nyárhoz?",
    round4June: "Június",
    round4July: "Július",
    round4August: "Augusztus",
    round4December: "December",
    round5Title: "A hét napjai",
    round5Hint: "Koppints a napokra sorban!",
    round5Monday: "Hétfő",
    round5Tuesday: "Kedd",
    round5Wednesday: "Szerda",
    round5Thursday: "Csütörtök",
    round5Friday: "Péntek",
    round5Saturday: "Szombat",
    round5Sunday: "Vasárnap",
    correct: "Helyes!",
    wrong: "Próbálj újra!",
    next: "Tovább",
    finish: "Vége!",
  },
  de: {
    title: "Wetter-Entdecker",
    round1Title: "Wettertypen",
    round1Hint: "Tippe auf jedes Wetter-Symbol!",
    round1Sunny: "Sonnig",
    round1Rain: "Regnerisch",
    round1Snow: "Schneeig",
    round1Wind: "Windig",
    round1Storm: "Gewitter",
    round1Cloudy: "Bewölkt",
    round2Title: "Was ziehst du an?",
    round2Hint: "Was ziehst du bei Regen an?",
    round2Umbrella: "Regenschirm",
    round2Hat: "Sonnenhut",
    round2Scarf: "Schal",
    round2Boots: "Gummistiefel",
    round3Title: "Monate in Reihenfolge",
    round3Hint: "Tippe die Monate in Reihenfolge: Jan → Feb → ... → Dez!",
    round3Correct: "Perfekte Reihenfolge!",
    round4Title: "Welcher Monat?",
    round4Hint: "Welcher Monat gehört zum Sommer?",
    round4June: "Juni",
    round4July: "Juli",
    round4August: "August",
    round4December: "Dezember",
    round5Title: "Wochentage",
    round5Hint: "Tippe die Wochentage in Reihenfolge!",
    round5Monday: "Montag",
    round5Tuesday: "Dienstag",
    round5Wednesday: "Mittwoch",
    round5Thursday: "Donnerstag",
    round5Friday: "Freitag",
    round5Saturday: "Samstag",
    round5Sunday: "Sonntag",
    correct: "Richtig!",
    wrong: "Versuchen Sie es erneut!",
    next: "Weiter",
    finish: "Fertig!",
  },
  ro: {
    title: "Exploratorul vremii",
    round1Title: "Tipuri de vreme",
    round1Hint: "Atinge fiecare simbol de vreme!",
    round1Sunny: "Însorit",
    round1Rain: "Ploios",
    round1Snow: "Ninge",
    round1Wind: "Vântos",
    round1Storm: "Furtună",
    round1Cloudy: "Noros",
    round2Title: "Ce îmbrăcăminte porți?",
    round2Hint: "Ce porți când plouă?",
    round2Umbrella: "Umbrelă",
    round2Hat: "Pălărie de soare",
    round2Scarf: "Șal",
    round2Boots: "Cizme de ploaie",
    round3Title: "Luni în ordine",
    round3Hint: "Atinge lunile în ordine: Ian → Feb → ... → Dec!",
    round3Correct: "Ordine perfectă!",
    round4Title: "Ce lună?",
    round4Hint: "Ce lună aparține verii?",
    round4June: "Iunie",
    round4July: "Iulie",
    round4August: "August",
    round4December: "Decembrie",
    round5Title: "Zilele săptămânii",
    round5Hint: "Atinge zilele în ordine!",
    round5Monday: "Luni",
    round5Tuesday: "Marți",
    round5Wednesday: "Miercuri",
    round5Thursday: "Joi",
    round5Friday: "Vineri",
    round5Saturday: "Sâmbătă",
    round5Sunday: "Duminică",
    correct: "Corect!",
    wrong: "Încearcă din nou!",
    next: "Înainte",
    finish: "Gata!",
  },
};

const WEATHER_ICONS = [
  { name: "sunny", emoji: "☀️" },
  { name: "rain", emoji: "🌧️" },
  { name: "snow", emoji: "❄️" },
  { name: "wind", emoji: "💨" },
  { name: "storm", emoji: "⛈️" },
  { name: "cloudy", emoji: "☁️" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function WeatherExplorer({ color, lang = "de", onDone }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const wrongRef = useRef(0);

  // Round 1: Tap weather icons
  const [discovered, setDiscovered] = useState<Set<string>>(new Set());

  // Round 2: Clothing MCQ
  const [selectedClothing, setSelectedClothing] = useState<string | null>(null);
  const [clothingSubmitted, setClothingSubmitted] = useState(false);

  // Round 3: Months sequence
  const [monthsShuffled] = useState(() => shuffle(MONTHS));
  const [monthOrder, setMonthOrder] = useState<string[]>([]);

  // Round 4: Summer month MCQ
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [monthSubmitted, setMonthSubmitted] = useState(false);

  // Round 5: Days sequence
  const [daysShuffled] = useState(() => shuffle(DAYS));
  const [dayOrder, setDayOrder] = useState<string[]>([]);

  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongRef.current, TOTAL_ROUNDS - 1));
      onDone(score, TOTAL_ROUNDS);
    } else {
      setRound(r => r + 1);
      setSelectedClothing(null);
      setClothingSubmitted(false);
      setSelectedMonth(null);
      setMonthSubmitted(false);
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

          {/* ROUND 1: Weather icons */}
          {round === 0 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
              <div className="flex flex-wrap gap-3 justify-center max-w-sm">
                {WEATHER_ICONS.map((w) => (
                  <motion.button key={w.name}
                    onClick={() => setDiscovered(prev => new Set([...prev, w.name]))}
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-5xl transition-colors"
                    style={{
                      background: discovered.has(w.name) ? `${color}33` : "rgba(255,255,255,0.06)",
                      border: `2px solid ${discovered.has(w.name) ? color : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.95 }}>
                    {w.emoji}
                  </motion.button>
                ))}
              </div>
              {discovered.size > 0 && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 2: Clothing MCQ */}
          {round === 1 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
              <div className="flex flex-col gap-2 w-full max-w-sm">
                {[
                  { id: "umbrella", label: lbl.round2Umbrella, correct: true },
                  { id: "hat", label: lbl.round2Hat, correct: false },
                  { id: "scarf", label: lbl.round2Scarf, correct: false },
                  { id: "boots", label: lbl.round2Boots, correct: false },
                ].map((opt) => (
                  <motion.button key={opt.id}
                    onClick={() => {
                      setSelectedClothing(opt.id);
                      if (!opt.correct) wrongRef.current++;
                      setClothingSubmitted(true);
                    }}
                    className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors"
                    style={{
                      background: selectedClothing === opt.id
                        ? opt.correct ? "#00FF8833" : "#FF2D7833"
                        : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedClothing === opt.id
                        ? opt.correct ? "#00FF88" : "#FF2D78"
                        : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {opt.label}
                  </motion.button>
                ))}
              </div>
              {clothingSubmitted && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 3: Months in order */}
          {round === 2 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
              <div className="flex flex-wrap gap-2 justify-center max-w-sm">
                {monthsShuffled.map((m) => {
                  const correct = monthOrder.includes(m);
                  return (
                    <motion.button key={m}
                      onClick={() => {
                        if (!monthOrder.includes(m)) {
                          const newOrder = [...monthOrder, m];
                          setMonthOrder(newOrder);
                          if (newOrder.length === 12 && JSON.stringify(newOrder) !== JSON.stringify(MONTHS)) {
                            wrongRef.current++;
                          }
                        }
                      }}
                      className="px-3 py-2 rounded-lg font-bold text-sm transition-colors"
                      style={{
                        background: correct ? `${color}33` : "rgba(255,255,255,0.06)",
                        color: "white",
                        border: `2px solid ${correct ? color : "rgba(255,255,255,0.15)"}`,
                      }}
                      disabled={correct}
                      whileTap={{ scale: 0.95 }}>
                      {m}
                    </motion.button>
                  );
                })}
              </div>
              {monthOrder.length === 12 && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 4: Summer month MCQ */}
          {round === 3 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
              <div className="flex flex-col gap-2 w-full max-w-sm">
                {[
                  { id: "june", label: lbl.round4June, correct: true },
                  { id: "july", label: lbl.round4July, correct: true },
                  { id: "august", label: lbl.round4August, correct: true },
                  { id: "december", label: lbl.round4December, correct: false },
                ].map((opt) => (
                  <motion.button key={opt.id}
                    onClick={() => {
                      setSelectedMonth(opt.id);
                      if (!opt.correct) wrongRef.current++;
                      setMonthSubmitted(true);
                    }}
                    className="py-3 px-4 rounded-xl font-bold text-white text-sm transition-colors"
                    style={{
                      background: selectedMonth === opt.id
                        ? opt.correct ? "#00FF8833" : "#FF2D7833"
                        : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedMonth === opt.id
                        ? opt.correct ? "#00FF88" : "#FF2D78"
                        : "rgba(255,255,255,0.15)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {opt.label}
                  </motion.button>
                ))}
              </div>
              {monthSubmitted && (
                <motion.button onClick={advance}
                  className="mt-4 w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {/* ROUND 5: Days of week */}
          {round === 4 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
              <div className="flex flex-wrap gap-2 justify-center max-w-sm">
                {daysShuffled.map((d) => {
                  const correct = dayOrder.includes(d);
                  return (
                    <motion.button key={d}
                      onClick={() => {
                        if (!dayOrder.includes(d)) {
                          const newOrder = [...dayOrder, d];
                          setDayOrder(newOrder);
                          if (newOrder.length === 7 && JSON.stringify(newOrder) !== JSON.stringify(DAYS)) {
                            wrongRef.current++;
                          }
                        }
                      }}
                      className="px-3 py-2 rounded-lg font-bold text-sm transition-colors"
                      style={{
                        background: correct ? `${color}33` : "rgba(255,255,255,0.06)",
                        color: "white",
                        border: `2px solid ${correct ? color : "rgba(255,255,255,0.15)"}`,
                      }}
                      disabled={correct}
                      whileTap={{ scale: 0.95 }}>
                      {d}
                    </motion.button>
                  );
                })}
              </div>
              {dayOrder.length === 7 && (
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

export default memo(WeatherExplorer);
