"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, FastForward, Shield, Crosshair, Zap, Skull, CheckCircle2, ChevronRight } from "lucide-react";
import type { BattleResult } from "@/lib/gravitas/sim/battle/types";
import type { LocalizedString } from "@/lib/gravitas/sim/types";

interface BattleReplayPanelProps {
  result: BattleResult;
  onClose: () => void;
  lang: string;
}

export default function BattleReplayPanel({ result, onClose, lang }: BattleReplayPanelProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const log = result.replay?.entries ?? [];
  const listRef = useRef<HTMLDivElement>(null);

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  useEffect(() => {
    let id: number | undefined;
    if (autoPlay && currentStep < log.length) {
      id = window.setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1000);
    } else if (currentStep >= log.length) {
      setAutoPlay(false);
    }
    return () => clearTimeout(id);
  }, [autoPlay, currentStep, log.length]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [currentStep]);

  const totalLost = Object.values(result.stats.unitsLost).reduce((a, b) => a + b, 0);

  return (
    <div className="fixed inset-0 z-[50] flex flex-col bg-black/90 backdrop-blur-xl text-white/80">
      {/* Header Summary */}
      <div className={`p-6 border-b flex flex-col gap-4 shrink-0 transition-colors ${result.victory ? "bg-emerald-950/30 border-emerald-500/20" : "bg-rose-950/30 border-rose-500/20"}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${result.victory ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"}`}>
              {result.victory ? <CheckCircle2 size={24} /> : <Skull size={24} />}
            </div>
            <div>
              <h2 className={`text-xl font-black uppercase tracking-widest ${result.victory ? "text-emerald-400" : "text-rose-400"}`}>
                {result.victory 
                  ? localize({ en: "Victory", hu: "Győzelem", de: "Sieg", ro: "Victorie" }) 
                  : localize({ en: "Defeat", hu: "Vereség", de: "Niederlage", ro: "Înfrângere" })}
              </h2>
              <p className="text-[10px] text-white/50 uppercase tracking-widest">
                {localize({ en: "Combat Log Replay", hu: "Harcászati Napló Visszajátszás", de: "Kampfprotokoll-Wiederholung", ro: "Reluare Jurnal de Luptă" })}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-black/40 border border-white/5 rounded-xl p-3">
            <div className="text-[10px] uppercase font-black text-white/40 mb-1">{localize({ en: "Damage Dealt", hu: "Okozott Sebzés", de: "Zugefügter Schaden", ro: "Daune Produse" })}</div>
            <div className="text-lg font-mono text-cyan-400">{Math.round(result.stats.damageDealt)}</div>
          </div>
          <div className="bg-black/40 border border-white/5 rounded-xl p-3">
            <div className="text-[10px] uppercase font-black text-white/40 mb-1">{localize({ en: "Damage Taken", hu: "Kapott Sebzés", de: "Erlittener Schaden", ro: "Daune Primite" })}</div>
            <div className="text-lg font-mono text-rose-400">{Math.round(result.stats.damageReceived)}</div>
          </div>
          <div className="bg-black/40 border border-white/5 rounded-xl p-3">
            <div className="text-[10px] uppercase font-black text-white/40 mb-1">{localize({ en: "Casualties", hu: "Veszteségek", de: "Verluste", ro: "Pierderi" })}</div>
            <div className="text-lg font-mono text-rose-400">{totalLost}</div>
          </div>
        </div>
      </div>

      {/* Main Replay Area */}
      <div ref={listRef} className="flex-1 overflow-y-auto p-4 md:p-8 space-y-3 scroll-smooth">
        <AnimatePresence initial={false}>
          {log.slice(0, currentStep).map((entry) => {
            const isPlayer = entry.source === "player";
            return (
              <motion.div
                key={entry.phase}
                initial={{ opacity: 0, x: isPlayer ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex gap-4 p-4 rounded-2xl border ${isPlayer ? "bg-cyan-950/20 border-cyan-500/20 ml-0 mr-8" : "bg-rose-950/20 border-rose-500/20 ml-8 mr-0"}`}
              >
                <div className={`shrink-0 p-2 rounded-xl border flex items-center justify-center ${isPlayer ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400"}`}>
                  {isPlayer ? <Crosshair size={18} /> : <Shield size={18} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${isPlayer ? "text-cyan-500/80" : "text-rose-500/80"}`}>
                      {isPlayer ? "Player Forces" : "Enemy Forces"}
                    </span>
                    <span className="text-[10px] font-mono text-white/30">Phase {entry.phase}</span>
                  </div>
                  <div className="text-sm text-white/90 leading-relaxed font-medium">
                    {localize(entry.description)}
                  </div>
                </div>
                {entry.damage && entry.damage > 0 && (
                  <div className={`shrink-0 flex items-center gap-1 font-mono font-bold ${isPlayer ? "text-emerald-400" : "text-rose-400"}`}>
                    <Zap size={14} />
                    {Math.round(entry.damage)}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {currentStep === 0 && (
          <div className="h-full flex items-center justify-center text-white/30 text-sm font-black uppercase tracking-widest italic">
            {localize({ en: "Press Play or Next Step to begin replay", hu: "Nyomd meg a Lejátszás vagy Következő gombot a kezdéshez", de: "Drücke Play oder Nächster Schritt", ro: "Apasă Redare sau Următorul Pas" })}
          </div>
        )}
      </div>

      {/* Controls Footer */}
      <div className="p-6 bg-black/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-2 text-[10px] font-mono text-white/40">
          <span>{currentStep}</span>
          <span>/</span>
          <span>{log.length}</span>
          <span className="ml-2 uppercase tracking-widest">Phases</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentStep(0)}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white text-xs font-black uppercase tracking-widest transition"
          >
            {localize({ en: "Reset", hu: "Újra", de: "Zurücksetzen", ro: "Resetează" })}
          </button>
          
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            disabled={currentStep >= log.length}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition disabled:opacity-50 ${autoPlay ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]" : "bg-white text-black hover:bg-white/90"}`}
          >
            {autoPlay ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current ml-1" />}
          </button>

          <button
            onClick={() => { setAutoPlay(false); setCurrentStep(prev => Math.min(log.length, prev + 1)); }}
            disabled={currentStep >= log.length}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-widest transition disabled:opacity-50"
          >
            {localize({ en: "Next", hu: "Tovább", de: "Weiter", ro: "Următorul" })}
            <ChevronRight size={16} />
          </button>
          
          <button
            onClick={() => { setAutoPlay(false); setCurrentStep(log.length); }}
            disabled={currentStep >= log.length}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition disabled:opacity-50"
            title="Skip to end"
          >
            <FastForward size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}