"use client";
// BodyExplorer — Island i1: Body & Senses (Körper & Sinne)
// Teaches: body parts, 5 senses, health/hygiene

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TOTAL_ROUNDS = 5;

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Body & Senses Explorer",
    round1Title: "Body Parts",
    round1Hint: "Tap each part to discover its name!",
    round2Title: "Match the Sense",
    round2Hint: "What organ do we use to see?",
    round2Hint2: "Select: Eye, Ear, Nose",
    round3Title: "What Can We Do?",
    round3Hint: "What can we do with our nose?",
    round3Hint2: "Smell, Hear, or Taste?",
    round4Title: "Healthy Habits",
    round4Hint: "Is this healthy?",
    round4Hint2: "Yes or No?",
    round5Title: "Quick Review",
    round5Hint: "What do we use to smell?",
    answer: "Answer",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    yes: "Yes",
    no: "No",
    eye: "Eye",
    ear: "Ear",
    nose: "Nose",
    smell: "Smell",
    hear: "Hear",
    taste: "Taste",
    see: "See",
  },
  de: {
    title: "Körper & Sinne Entdecker",
    round1Title: "Körperteile",
    round1Hint: "Tippe auf jeden Teil — errate seinen Namen!",
    round2Title: "Welches Organ?",
    round2Hint: "Welches Organ brauchen wir zum Sehen?",
    round2Hint2: "Wähle: Auge, Ohr, Nase",
    round3Title: "Was können wir damit tun?",
    round3Hint: "Was können wir mit der Nase?",
    round3Hint2: "Riechen, Hören oder Schmecken?",
    round4Title: "Gesunde Gewohnheiten",
    round4Hint: "Ist das gesund?",
    round4Hint2: "Ja oder Nein?",
    round5Title: "Schnelle Wiederholung",
    round5Hint: "Womit riechen wir?",
    answer: "Antwort",
    next: "Weiter",
    finish: "Fertig",
    correct: "Korrekt!",
    yes: "Ja",
    no: "Nein",
    eye: "Auge",
    ear: "Ohr",
    nose: "Nase",
    smell: "Riechen",
    hear: "Hören",
    taste: "Schmecken",
    see: "Sehen",
  },
  hu: {
    title: "Testünk & Érzékei Felfedező",
    round1Title: "Testrészek",
    round1Hint: "Koppints minden részre — találd meg a nevét!",
    round2Title: "Melyik szervünk?",
    round2Hint: "Melyik szerv kell ahhoz, hogy lássunk?",
    round2Hint2: "Válassz: Szem, Fül, Orr",
    round3Title: "Mit tehetünk vele?",
    round3Hint: "Mit tehetünk az orrunkkal?",
    round3Hint2: "Szagolni, Hallani vagy Ízlelni?",
    round4Title: "Egészséges szokások",
    round4Hint: "Ez egészséges?",
    round4Hint2: "Igen vagy Nem?",
    round5Title: "Gyors összefoglalás",
    round5Hint: "Mivel szagolunk?",
    answer: "Válasz",
    next: "Tovább",
    finish: "Vége",
    correct: "Helyes!",
    yes: "Igen",
    no: "Nem",
    eye: "Szem",
    ear: "Fül",
    nose: "Orr",
    smell: "Szagolás",
    hear: "Hallás",
    taste: "Ízlelés",
    see: "Látás",
  },
  ro: {
    title: "Exploratorul corpului și simțurilor",
    round1Title: "Părțile corpului",
    round1Hint: "Atinge fiecare parte — descoperă numele!",
    round2Title: "Care organ?",
    round2Hint: "Care organ folosim pentru a vedea?",
    round2Hint2: "Alege: Ochi, Ureche, Nas",
    round3Title: "Ce putem face cu el?",
    round3Hint: "Ce putem face cu nasul?",
    round3Hint2: "Mirosi, Auzi sau Gusta?",
    round4Title: "Obiceiuri sănătoase",
    round4Hint: "Este sănătos?",
    round4Hint2: "Da sau Nu?",
    round5Title: "Recapitulare rapidă",
    round5Hint: "Cu ce miros?",
    answer: "Răspuns",
    next: "Înainte",
    finish: "Gata",
    correct: "Corect!",
    yes: "Da",
    no: "Nu",
    eye: "Ochi",
    ear: "Ureche",
    nose: "Nas",
    smell: "Miros",
    hear: "Auz",
    taste: "Gust",
    see: "Vedere",
  },
};

// SVG Body Outline Illustration
function BodySVG({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 240" className="w-32 h-48">
      {/* Head */}
      <circle cx="60" cy="30" r="18" fill={color} opacity="0.3" stroke={color} strokeWidth="2" />
      {/* Eyes */}
      <circle cx="54" cy="26" r="2" fill={color} />
      <circle cx="66" cy="26" r="2" fill={color} />
      {/* Nose */}
      <line x1="60" y1="28" x2="60" y2="33" stroke={color} strokeWidth="2" />
      {/* Mouth */}
      <path d="M 54 36 Q 60 38 66 36" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Body */}
      <rect x="48" y="48" width="24" height="40" fill={color} opacity="0.2" stroke={color} strokeWidth="2" rx="4" />
      {/* Arms */}
      <line x1="48" y1="55" x2="30" y2="70" stroke={color} strokeWidth="2" />
      <line x1="72" y1="55" x2="90" y2="70" stroke={color} strokeWidth="2" />
      {/* Legs */}
      <line x1="54" y1="88" x2="48" y2="130" stroke={color} strokeWidth="2" />
      <line x1="66" y1="88" x2="72" y2="130" stroke={color} strokeWidth="2" />
      {/* Feet */}
      <line x1="48" y1="130" x2="44" y2="135" stroke={color} strokeWidth="2" />
      <line x1="72" y1="130" x2="76" y2="135" stroke={color} strokeWidth="2" />
    </svg>
  );
}

// Helper functions
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}

function BodyExplorer({ color, lang = "de", onDone }: Props) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const wrongRef = useRef(0);

  // Round states
  const [discoveredParts, setDiscoveredParts] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hygieneAnswer, setHygieneAnswer] = useState<string | null>(null);

  // Data pools
  const sensesPool = useState(() => [
    { organ: "eye", sense: "see", label: lbl.eye },
    { organ: "ear", sense: "hear", label: lbl.ear },
    { organ: "nose", sense: "smell", label: lbl.nose },
  ])[0];

  const hygienePool = useState(() => [
    { action: "wash hands", healthy: true },
    { action: "brush teeth", healthy: true },
    { action: "shower", healthy: true },
    { action: "eat candies all day", healthy: false },
    { action: "play outside", healthy: true },
    { action: "not wash before eating", healthy: false },
  ])[0];

  const advance = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongRef.current, TOTAL_ROUNDS - 1));
      onDone(score, TOTAL_ROUNDS);
    } else {
      setRound(r => r + 1);
      setDiscoveredParts(new Set());
      setSelectedAnswer(null);
      setHygieneAnswer(null);
    }
  }, [round, onDone]);

  const handleBodyPartTap = (part: string) => {
    if (!discoveredParts.has(part)) {
      setDiscoveredParts(prev => new Set([...prev, part]));
    }
  };

  const handleSenseSelect = (organ: string) => {
    const correct = organ === "eye";
    if (!correct) wrongRef.current++;
    setSelectedAnswer(organ);
  };

  const handleActionSelect = (healthy: boolean) => {
    const correct = healthy === true;
    if (!correct) wrongRef.current++;
    setHygieneAnswer(healthy ? "yes" : "no");
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      {/* Progress */}
      <div className="flex justify-center gap-1.5 pt-4 pb-4">
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
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-5"
        >
          {round === 0 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
              <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
              <BodySVG color={color} />
              <div className="grid grid-cols-2 gap-2 w-full max-w-xs text-xs text-center">
                {["Head", "Arm", "Leg", "Hand"].map(part => (
                  <motion.button
                    key={part}
                    onClick={() => handleBodyPartTap(part)}
                    className="py-2 px-2 rounded-lg transition-all"
                    style={{
                      background: discoveredParts.has(part) ? `${color}33` : "rgba(255,255,255,0.06)",
                      border: `2px solid ${discoveredParts.has(part) ? color : "rgba(255,255,255,0.1)"}`,
                      color: discoveredParts.has(part) ? color : "text-white",
                    }}
                  >
                    {part}
                  </motion.button>
                ))}
              </div>
              <motion.button
                onClick={advance}
                disabled={discoveredParts.size < 4}
                className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                style={{
                  background: discoveredParts.size === 4 ? `linear-gradient(135deg, ${color}55, ${color}99)` : "rgba(255,255,255,0.06)",
                  border: `2px solid ${discoveredParts.size === 4 ? color : "rgba(255,255,255,0.1)"}`,
                }}
              >
                {lbl.next} <ChevronRight size={16} />
              </motion.button>
            </>
          )}

          {round === 1 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
              <p className="text-white/60 text-sm font-bold text-center">{lbl.round2Hint}</p>
              <p className="text-white/60 text-xs text-center">{lbl.round2Hint2}</p>
              <div className="space-y-2 w-full max-w-xs">
                {sensesPool.map((sense, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleSenseSelect(sense.organ)}
                    className="w-full py-3 px-4 rounded-xl transition-all font-bold text-white"
                    style={{
                      background:
                        selectedAnswer === sense.organ
                          ? sense.organ === "eye"
                            ? `#00FF8833`
                            : `#FF2D7833`
                          : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedAnswer === sense.organ ? (sense.organ === "eye" ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    {sense.label}
                  </motion.button>
                ))}
              </div>
              {selectedAnswer && (
                <motion.button
                  onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                >
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {round === 2 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
              <p className="text-white/60 text-sm font-bold text-center">{lbl.round3Hint}</p>
              <p className="text-white/60 text-xs text-center">{lbl.round3Hint2}</p>
              <div className="space-y-2 w-full max-w-xs">
                {[lbl.smell, lbl.hear, lbl.taste].map((action, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      if (action === lbl.smell) handleSenseSelect("nose");
                      else wrongRef.current++;
                      setSelectedAnswer(action);
                    }}
                    className="w-full py-3 px-4 rounded-xl transition-all font-bold text-white"
                    style={{
                      background:
                        selectedAnswer === action
                          ? action === lbl.smell
                            ? `#00FF8833`
                            : `#FF2D7833`
                          : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedAnswer === action ? (action === lbl.smell ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    {action}
                  </motion.button>
                ))}
              </div>
              {selectedAnswer && (
                <motion.button
                  onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                >
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {round === 3 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
              <p className="text-white/60 text-sm font-bold text-center">{lbl.round4Hint}</p>
              <div className="space-y-3 w-full max-w-xs">
                {hygienePool.slice(0, 3).map((item, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleActionSelect(item.healthy)}
                    className="py-3 px-4 rounded-xl transition-all font-bold text-white text-sm"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "2px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <p>{item.action}?</p>
                    <p className="text-xs text-white/60 mt-1">
                      {hygieneAnswer === "yes" && item.healthy ? "✓ Healthy!" : hygieneAnswer === "no" && !item.healthy ? "✓ Not healthy!" : ""}
                    </p>
                  </motion.button>
                ))}
              </div>
              <div className="flex gap-2 w-full max-w-xs">
                <motion.button
                  onClick={() => handleActionSelect(true)}
                  className="flex-1 py-3 rounded-xl transition-all font-black text-white"
                  style={{
                    background: hygieneAnswer === "yes" ? `#00FF8833` : "rgba(255,255,255,0.06)",
                    border: `2px solid ${hygieneAnswer === "yes" ? "#00FF88" : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  {lbl.yes}
                </motion.button>
                <motion.button
                  onClick={() => handleActionSelect(false)}
                  className="flex-1 py-3 rounded-xl transition-all font-black text-white"
                  style={{
                    background: hygieneAnswer === "no" ? `#FF2D7833` : "rgba(255,255,255,0.06)",
                    border: `2px solid ${hygieneAnswer === "no" ? "#FF2D78" : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  {lbl.no}
                </motion.button>
              </div>
              {hygieneAnswer && (
                <motion.button
                  onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                >
                  {lbl.next} <ChevronRight size={16} />
                </motion.button>
              )}
            </>
          )}

          {round === 4 && (
            <>
              <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
              <p className="text-white/60 text-sm font-bold text-center">{lbl.round5Hint}</p>
              <div className="space-y-2 w-full max-w-xs">
                {[lbl.eye, lbl.ear, lbl.nose].map((organ, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      if (organ === lbl.nose) handleSenseSelect("nose");
                      else wrongRef.current++;
                      setSelectedAnswer(organ);
                    }}
                    className="w-full py-3 px-4 rounded-xl transition-all font-bold text-white"
                    style={{
                      background:
                        selectedAnswer === organ
                          ? organ === lbl.nose
                            ? `#00FF8833`
                            : `#FF2D7833`
                          : "rgba(255,255,255,0.06)",
                      border: `2px solid ${selectedAnswer === organ ? (organ === lbl.nose ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    {organ}
                  </motion.button>
                ))}
              </div>
              {selectedAnswer && (
                <motion.button
                  onClick={advance}
                  className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                  style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                >
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

export default memo(BodyExplorer);
