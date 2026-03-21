"use client";
// NatureExplorer — Island i3: Seasons & Nature (Jahreszeiten & Natur)
// Teaches: 4 seasons, trees, flowers/fruits, seasonal changes

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TOTAL_ROUNDS = 5;

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Seasons & Nature Explorer",
    round1Title: "Tree in Seasons",
    round1Hint: "Tap each season to see the tree change!",
    round2Title: "Which Season?",
    round2Hint: "Flowers are blooming and it's warm...",
    round3Title: "Tree Recognition",
    round3Hint: "Which tree has acorns?",
    round4Title: "Season Order",
    round4Hint: "Tap the seasons in order!",
    round4Challenge: "Spring → Summer → Fall → Winter",
    round5Title: "Nature Review",
    round5Hint: "When do leaves fall?",
    spring: "Spring",
    summer: "Summer",
    fall: "Fall",
    winter: "Winter",
    oak: "Oak",
    birch: "Birch",
    fir: "Fir",
    apple: "Apple Tree",
    acorns: "Acorns",
    leaves: "Leaves",
    needles: "Needles",
    apples: "Apples",
    next: "Next",
    finish: "Finish",
  },
  de: {
    title: "Jahreszeiten & Natur Entdecker",
    round1Title: "Baum im Jahreslauf",
    round1Hint: "Tippe auf jede Jahreszeit — sieh wie der Baum sich verändert!",
    round2Title: "Welche Jahreszeit?",
    round2Hint: "Blüten blühen und es ist warm...",
    round3Title: "Baumerkennung",
    round3Hint: "Welcher Baum hat Eicheln?",
    round4Title: "Jahreszeiten-Reihenfolge",
    round4Hint: "Tippe die Jahreszeiten in der richtigen Reihenfolge!",
    round4Challenge: "Frühling → Sommer → Herbst → Winter",
    round5Title: "Natur-Überblick",
    round5Hint: "Wann fallen die Blätter?",
    spring: "Frühling",
    summer: "Sommer",
    fall: "Herbst",
    winter: "Winter",
    oak: "Eiche",
    birch: "Birke",
    fir: "Tanne",
    apple: "Apfelbaum",
    acorns: "Eicheln",
    leaves: "Blätter",
    needles: "Nadeln",
    apples: "Äpfel",
    next: "Weiter",
    finish: "Fertig",
  },
  hu: {
    title: "Évszakok & Természet Felfedező",
    round1Title: "Fa az év során",
    round1Hint: "Koppints minden évszakra — nézd meg hogyan változik a fa!",
    round2Title: "Melyik évszak?",
    round2Hint: "Virágok nyílnak és meleg van...",
    round3Title: "Fák felismerése",
    round3Hint: "Melyik fának vannak makkok?",
    round4Title: "Évszakak sorrendje",
    round4Hint: "Koppints az évszakokra sorrendben!",
    round4Challenge: "Tavasz → Nyár → Ősz → Tél",
    round5Title: "Természet-összefoglalás",
    round5Hint: "Mikor hullik le a levelek?",
    spring: "Tavasz",
    summer: "Nyár",
    fall: "Ősz",
    winter: "Tél",
    oak: "Tölgy",
    birch: "Nyírfa",
    fir: "Fenyő",
    apple: "Almafa",
    acorns: "Makkok",
    leaves: "Levelek",
    needles: "Tűk",
    apples: "Almák",
    next: "Tovább",
    finish: "Vége",
  },
  ro: {
    title: "Exploratorul Anotimpurilor și Naturii",
    round1Title: "Copacul în Anotimpuri",
    round1Hint: "Atinge fiecare anotimp — vezi cum se schimbă copacul!",
    round2Title: "Care anotimp?",
    round2Hint: "Florile înfloresc și e cald...",
    round3Title: "Recunoaștere copaci",
    round3Hint: "Care copac are ghinde?",
    round4Title: "Ordinea anotimpurilor",
    round4Hint: "Atinge anotimpurile în ordine!",
    round4Challenge: "Primăvară → Vară → Toamnă → Iarnă",
    round5Title: "Recapitulare natură",
    round5Hint: "Când cad frunzele?",
    spring: "Primăvară",
    summer: "Vară",
    fall: "Toamnă",
    winter: "Iarnă",
    oak: "Stejar",
    birch: "Mesteacăn",
    fir: "Brad",
    apple: "Măr",
    acorns: "Ghinde",
    leaves: "Frunze",
    needles: "Ace",
    apples: "Mere",
    next: "Înainte",
    finish: "Gata",
  },
};

// SVG Tree in Seasons
function TreeInSeasons({ color, season }: { color: string; season: string }) {
  const seasonColors: Record<string, { tree: string; leaves: string; bg: string }> = {
    spring: { tree: "#8B6F47", leaves: "#90EE90", bg: "rgba(144, 238, 144, 0.2)" },
    summer: { tree: "#8B6F47", leaves: "#228B22", bg: "rgba(34, 139, 34, 0.2)" },
    fall: { tree: "#8B6F47", leaves: "#FF8C00", bg: "rgba(255, 140, 0, 0.2)" },
    winter: { tree: "#8B6F47", leaves: "none", bg: "rgba(200, 200, 220, 0.2)" },
  };

  const colors = seasonColors[season] || seasonColors.spring;

  return (
    <svg viewBox="0 0 200 240" className="w-32 h-40" style={{ filter: `drop-shadow(0 0 12px ${color}40)` }}>
      {/* Background */}
      <rect width="200" height="240" fill={colors.bg} />

      {/* Trunk */}
      <rect x="80" y="120" width="40" height="80" fill={colors.tree} rx="4" />

      {/* Canopy (leaves/foliage) */}
      {season !== "winter" && (
        <ellipse cx="100" cy="80" rx="60" ry="70" fill={colors.leaves} opacity="0.8" />
      )}

      {/* Snowcap for winter */}
      {season === "winter" && (
        <>
          <ellipse cx="100" cy="80" rx="50" ry="60" fill="#FFFFFF" opacity="0.9" />
          <circle cx="75" cy="50" r="8" fill="#FFFFFF" opacity="0.7" />
          <circle cx="125" cy="55" r="8" fill="#FFFFFF" opacity="0.7" />
        </>
      )}

      {/* Ground */}
      <ellipse cx="100" cy="210" rx="70" ry="15" fill="rgba(100, 100, 100, 0.2)" />

      {/* Spring flowers */}
      {season === "spring" && (
        <>
          <circle cx="60" cy="190" r="4" fill="#FF69B4" />
          <circle cx="75" cy="195" r="4" fill="#FFB6C1" />
          <circle cx="140" cy="192" r="4" fill="#FF69B4" />
        </>
      )}

      {/* Summer sun */}
      {season === "summer" && (
        <circle cx="160" cy="40" r="20" fill="#FFD700" opacity="0.6" />
      )}

      {/* Fall leaves falling */}
      {season === "fall" && (
        <>
          <circle cx="55" cy="140" r="5" fill="#FF8C00" opacity="0.6" />
          <circle cx="145" cy="160" r="5" fill="#FF6347" opacity="0.6" />
        </>
      )}
    </svg>
  );
}

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}

function NatureExplorer({ color, lang = "de", onDone }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const wrongRef = useRef(0);
  const [tappedSeasons, setTappedSeasons] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [seasonOrder, setSeasonOrder] = useState<string[]>([]);

  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongRef.current, TOTAL_ROUNDS - 1));
      onDone(score, TOTAL_ROUNDS);
    } else {
      setRound(r => r + 1);
      setTappedSeasons(new Set());
      setSelectedAnswer(null);
      setSeasonOrder([]);
    }
  }, [round, onDone]);

  const handleSeasonTap = (season: string) => {
    setTappedSeasons(prev => new Set([...prev, season]));
  };

  const handleSelectAnswer = (answer: string, correct: boolean) => {
    setSelectedAnswer(answer);
    if (!correct) wrongRef.current++;
  };

  const handleSeasonOrderTap = (season: string) => {
    const correctOrder = [lbl.spring, lbl.summer, lbl.fall, lbl.winter];
    const nextExpected = correctOrder[seasonOrder.length];

    if (season === nextExpected) {
      const newOrder = [...seasonOrder, season];
      setSeasonOrder(newOrder);
      if (newOrder.length === 4) {
        setTimeout(advance, 600);
      }
    } else {
      wrongRef.current++;
    }
  };

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

          {round === 0 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>

              {tappedSeasons.size > 0 && (
                <TreeInSeasons color={color} season={Array.from(tappedSeasons)[tappedSeasons.size - 1]?.toLowerCase() || "spring"} />
              )}

              <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
                {[lbl.spring, lbl.summer, lbl.fall, lbl.winter].map(season => (
                  <motion.button key={season} onClick={() => handleSeasonTap(season)}
                    className="py-3 px-2 rounded-lg font-bold text-white text-sm transition-all"
                    style={{
                      background: tappedSeasons.has(season) ? `${color}33` : "rgba(255,255,255,0.06)",
                      border: `2px solid ${tappedSeasons.has(season) ? color : "rgba(255,255,255,0.1)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {season}
                  </motion.button>
                ))}
              </div>

              <motion.button onClick={advance}
                disabled={tappedSeasons.size < 4}
                className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                style={{
                  background: tappedSeasons.size === 4 ? `linear-gradient(135deg, ${color}55, ${color}99)` : "rgba(255,255,255,0.06)",
                  border: `2px solid ${tappedSeasons.size === 4 ? color : "rgba(255,255,255,0.1)"}`,
                }}
                whileTap={{ scale: 0.97 }}>
                {lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}

          {round === 1 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>

              <div className="space-y-2 w-full max-w-xs">
                {[lbl.spring, lbl.summer, lbl.fall, lbl.winter].map(season => (
                  <motion.button key={season} onClick={() => handleSelectAnswer(season, season === lbl.spring)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-white transition-all"
                    style={{
                      background: selectedAnswer === season ? (season === lbl.spring ? `${color}33` : "#FF2D7833") : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedAnswer === season ? (season === lbl.spring ? color : "#FF2D78") : "rgba(255,255,255,0.1)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {season}
                  </motion.button>
                ))}
              </div>

              {selectedAnswer && (
                <motion.button onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {round === 2 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>

              <div className="space-y-2 w-full max-w-xs">
                {[lbl.oak, lbl.birch, lbl.fir].map(tree => (
                  <motion.button key={tree} onClick={() => handleSelectAnswer(tree, tree === lbl.oak)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-white transition-all"
                    style={{
                      background: selectedAnswer === tree ? (tree === lbl.oak ? `${color}33` : "#FF2D7833") : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedAnswer === tree ? (tree === lbl.oak ? color : "#FF2D78") : "rgba(255,255,255,0.1)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {tree}
                  </motion.button>
                ))}
              </div>

              {selectedAnswer && (
                <motion.button onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                  whileTap={{ scale: 0.97 }}>
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {round === 3 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
              <p className="text-white/40 text-xs text-center">{lbl.round4Challenge}</p>

              <div className="flex flex-col gap-2 w-full max-w-xs">
                {[lbl.spring, lbl.summer, lbl.fall, lbl.winter].map((season, idx) => (
                  <motion.button key={season} onClick={() => handleSeasonOrderTap(season)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-white transition-all"
                    style={{
                      background: seasonOrder.includes(season) ? `${color}33` : "rgba(255,255,255,0.06)",
                      border: `2px solid ${seasonOrder.includes(season) ? color : "rgba(255,255,255,0.1)"}`,
                      opacity: seasonOrder.length > idx && !seasonOrder.includes(season) ? 0.4 : 1,
                    }}
                    disabled={seasonOrder.length > idx && !seasonOrder.includes(season)}
                    whileTap={{ scale: 0.97 }}>
                    {idx + 1}. {season}
                  </motion.button>
                ))}
              </div>

              {seasonOrder.length < 4 && (
                <p className="text-white/40 text-xs text-center">
                  {seasonOrder.length === 0 ? "Start with Spring..." : `Next: ${[lbl.spring, lbl.summer, lbl.fall, lbl.winter][seasonOrder.length]}`}
                </p>
              )}
            </>
          )}

          {round === 4 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>

              <div className="space-y-2 w-full max-w-xs">
                {[lbl.spring, lbl.summer, lbl.fall, lbl.winter].map(season => (
                  <motion.button key={season} onClick={() => handleSelectAnswer(season, season === lbl.fall)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-white transition-all"
                    style={{
                      background: selectedAnswer === season ? (season === lbl.fall ? `${color}33` : "#FF2D7833") : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedAnswer === season ? (season === lbl.fall ? color : "#FF2D78") : "rgba(255,255,255,0.1)"}`,
                    }}
                    whileTap={{ scale: 0.97 }}>
                    {season}
                  </motion.button>
                ))}
              </div>

              {selectedAnswer && (
                <motion.button onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
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

export default memo(NatureExplorer);
