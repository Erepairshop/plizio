"use client";

import { motion } from "framer-motion";
import { Clock, AlertCircle } from "lucide-react";
import type { DilemmaEvent, DilemmaOption } from "@/lib/gravitas/sim/dilemma/types";
import type { LocalizedString } from "@/lib/gravitas/sim/types";

interface DilemmaCardProps {
  dilemma: DilemmaEvent;
  onResolve: (choiceIndex: number) => void;
  lang: string;
}

export default function DilemmaCard({ dilemma, onResolve, lang }: DilemmaCardProps) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  return (
    <div className="fixed inset-0 z-[45] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
        className="relative w-full max-w-lg bg-zinc-900/95 border border-amber-500/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-amber-500/10 bg-black/40 flex items-center gap-3 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-900/40 text-amber-400">
            <AlertCircle size={16} />
          </div>
          <h2 className="font-black text-sm uppercase tracking-widest text-amber-300">
            {localize(dilemma.name)}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            {localize(dilemma.description)}
          </p>

          <div className="space-y-3">
            {dilemma.options.map((option, idx) => (
              <button
                key={option.id}
                onClick={() => onResolve(idx)}
                className="w-full flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-amber-900/10 transition-all text-left group"
              >
                <div className="font-black text-white/90 text-sm mb-2 group-hover:text-amber-200 transition-colors">
                  {localize(option.label)}
                </div>
                
                <div className="text-xs text-white/60 leading-relaxed mb-2">
                  {localize(option.description)}
                </div>
                
                {option.hasDelayedEffect && (
                  <div className="mt-1 flex items-center gap-1.5 text-amber-400/70 italic text-[10px] font-medium">
                    <Clock size={12} />
                    <span>{localize({ en: "Long-term consequences expected...", hu: "Hosszútávú következmények várhatók...", de: "Langfristige Konsequenzen erwartet...", ro: "Sunt de așteptat consecințe pe termen lung..." })}</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}