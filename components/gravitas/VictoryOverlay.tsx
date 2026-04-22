"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { StatItem } from "./GravitasUiParts";

interface Props {
  state: StarholdState;
  lang: string;
  onAction: (action: "retry" | "continue") => void;
}

export function VictoryOverlay({ state, lang, onAction }: Props) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const isLost = state.stationLost;
  const title = isLost 
    ? { en: "STATION LOST", hu: "ÁLLOMÁS ELVESZETT", de: "STATION VERLOREN", ro: "STAȚIE PIERDUTĂ" }
    : { en: "PHASE II OPENED", hu: "II. FÁZIS MEGNYÍLT", de: "PHASE II GEÖFFNET", ro: "FAZA II DESCHISĂ" };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-3xl flex flex-col items-center justify-center p-8 text-center"
    >
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-md space-y-8">
        <div className={`w-24 h-24 rounded-full border-2 flex items-center justify-center mx-auto ${isLost ? "border-rose-500/30" : "border-amber-400/30"}`}>
          <Star size={48} className={`${isLost ? "text-rose-500" : "text-amber-400"} animate-pulse`} />
        </div>
        <div className="space-y-4">
          <h2 className={`text-4xl font-black tracking-tighter uppercase ${isLost ? "text-rose-500" : "text-amber-400"}`}>
            {localize(title)}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            {isLost 
              ? localize({ en: "Your station drifted into the void. Every lesson carries forward.", hu: "Az állomásod elsodródott a semmibe. Minden lecke a jövőt szolgálja.", de: "Deine Station trieb in die Leere. Jede Lektion trägt Früchte.", ro: "Stația ta a rătăcit în vid. Fiecare lecție contează." })
              : localize({ en: "The shell opened its eyes. The station is now your anchor, not your boundary.", hu: "A test felnézett. Az állomás most már horgony, nem határ.", de: "Die Hülle hat die Augen geöffnet. Die Station ist jetzt dein Anker, nicht dein Rand.", ro: "Corpul a deschis ochii. Stația este acum ancora ta, nu limita ta." })}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
          <StatItem label="Ticks" value={state.tick} />
          <StatItem label="Chapter" value={state.chapter === "demo" ? "I" : "II"} />
          <StatItem label="Threats" value={state.threatCycle} />
          <StatItem label="Stars" value={state.progression.stars} />
        </div>
        <div className="flex flex-col gap-3">
          {isLost ? (
            <button 
              onClick={() => onAction("retry")} 
              className="w-full py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition shadow-2xl"
            >
              {localize({ en: "Try Again", hu: "Újrapróbálás", de: "Nochmal versuchen", ro: "Încearcă din nou" })}
            </button>
          ) : (
            <button 
              onClick={() => onAction("continue")} 
              className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition shadow-2xl"
            >
              {localize({ en: "Enter the wider world", hu: "Belépés a tágabb világba", de: "In die weitere Welt", ro: "Intră în lumea largă" })}
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
