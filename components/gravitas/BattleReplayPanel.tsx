"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Play, Pause, FastForward, Shield, Crosshair, Zap, Skull, 
  CheckCircle2, ChevronRight, BarChart3, Users, Swords, 
  Package, Lightbulb, Activity, Target, ShieldHalf, Zap as SpeedIcon
} from "lucide-react";
import type { BattleResult } from "@/lib/gravitas/sim/battle/types";
import type { LocalizedString } from "@/lib/gravitas/sim/types";
import { BATTLE_UNIT_PROFILES, BATTLE_TACTICS } from "@/lib/gravitas/sim/battle/types";
import { WARROOM_UNITS } from "@/lib/gravitas/sim/warroom/units";
import { METEOR_MATERIAL_META } from "@/lib/gravitas/world/demo";

interface BattleReplayPanelProps {
  result: BattleResult;
  onClose: () => void;
  lang: string;
}

type TabId = "summary" | "breakdown" | "units" | "traits" | "loot" | "lesson" | "log";

export default function BattleReplayPanel({ result, onClose, lang }: BattleReplayPanelProps) {
  const [activeTab, setActiveTab] = useState<TabId>("summary");
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
    if (activeTab === "log" && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [currentStep, activeTab]);

  const totalLost = Object.values(result.stats.unitsLost).reduce((a, b) => a + b, 0);

  // Compute Base Army Stats
  const { armyAttack, armyDefense, armySpeed, totalSent } = useMemo(() => {
    let a = 0, d = 0, s = 0, t = 0;
    if (result.stats.unitsSent) {
      Object.entries(result.stats.unitsSent).forEach(([unitId, count]) => {
        const unit = BATTLE_UNIT_PROFILES[unitId];
        if (unit) {
          a += unit.attack * count;
          d += unit.defense * count;
          s += unit.speed * count;
        }
        t += count;
      });
    }
    return { armyAttack: a, armyDefense: d, armySpeed: s, totalSent: t };
  }, [result.stats.unitsSent]);

  const tactic = result.stats.tacticId ? BATTLE_TACTICS[result.stats.tacticId] : undefined;

  // Lesson Generation
  const lesson = useMemo(() => {
    let why = "";
    let nextTime = "";
    const fastWin = result.durationMs <= 2000;
    const timeOut = result.durationMs >= 6000 && !result.victory;
    
    if (result.victory) {
      if (fastWin) {
        why = localize({
          en: "Overwhelming firepower shattered the enemy defense rapidly.",
          hu: "A nyomasztó tűzerő gyorsan szétzúzta az ellenség védelmét.",
          de: "Überwältigende Feuerkraft zerstörte die feindliche Verteidigung schnell.",
          ro: "Puterea de foc copleșitoare a distrus rapid apărarea inamică."
        });
        nextTime = localize({
          en: "Maintain this aggressive setup against similar targets.",
          hu: "Tartsd meg ezt az agresszív felállást hasonló célpontok ellen.",
          de: "Behalte dieses aggressive Setup gegen ähnliche Ziele bei.",
          ro: "Păstrează această configurație agresivă împotriva țintelor similare."
        });
      } else {
        why = localize({
          en: "A long, grueling battle ending in our tactical superiority.",
          hu: "Hosszú, kimerítő csata, amely a mi taktikai fölényünkkel zárult.",
          de: "Ein langer, aufreibender Kampf endete in unserer taktischen Überlegenheit.",
          ro: "O luptă lungă și epuizantă s-a încheiat cu superioritatea noastră tactică."
        });
        nextTime = localize({
          en: "Consider faster tactics or more assault units to reduce casualties.",
          hu: "Fontold meg gyorsabb taktikák vagy több rohamgép használatát a veszteségek csökkentésére.",
          de: "Erwäge schnellere Taktiken oder mehr Sturmeinheiten, um Verluste zu reduzieren.",
          ro: "Ia în considerare tactici mai rapide sau mai multe unități de asalt pentru a reduce pierderile."
        });
      }
    } else {
      if (timeOut) {
        why = localize({
          en: "Forces could not break through the enemy armor in time.",
          hu: "Az erőink nem tudták időben áttörni az ellenség páncélzatát.",
          de: "Streitkräfte konnten die feindliche Panzerung nicht rechtzeitig durchbrechen.",
          ro: "Forțele nu au putut străpunge la timp armura inamică."
        });
        nextTime = localize({
          en: "Use aggressive tactics or heavy assault units against entrenched foes.",
          hu: "Használj agresszív taktikát vagy nehéz rohamgépeket beásott ellenfelek ellen.",
          de: "Nutze aggressive Taktiken oder schwere Sturmeinheiten gegen verschanzte Feinde.",
          ro: "Folosește tactici agresive sau unități de asalt grele împotriva inamicilor tranșeate."
        });
      } else {
        why = localize({
          en: "The enemy forces overwhelmed our lines quickly.",
          hu: "Az ellenséges erők gyorsan elsöpörték a vonalainkat.",
          de: "Die feindlichen Streitkräfte überrannten unsere Linien schnell.",
          ro: "Forțele inamice ne-au copleșit liniile rapid."
        });
        nextTime = localize({
          en: "Deploy more defensive units and scout ahead for traits.",
          hu: "Külldj be több védekező egységet, és előbb derítsd fel a traitjeiket.",
          de: "Setze mehr defensive Einheiten ein und kläre Eigenschaften im Voraus auf.",
          ro: "Desfășoară mai multe unități defensive și explorează pentru a le afla trăsăturile."
        });
      }
    }
    return { why, nextTime };
  }, [result, localize]);

  const tabs: { id: TabId; label: LocalizedString; icon: React.ReactNode }[] = [
    { id: "summary", label: { en: "Summary", hu: "Összegzés", de: "Zusammenf.", ro: "Rezumat" }, icon: <BarChart3 size={14} /> },
    { id: "breakdown", label: { en: "Breakdown", hu: "Részletek", de: "Details", ro: "Detalii" }, icon: <Activity size={14} /> },
    { id: "units", label: { en: "Units", hu: "Egységek", de: "Einheiten", ro: "Unități" }, icon: <Users size={14} /> },
    { id: "traits", label: { en: "Traits", hu: "Traitek", de: "Traits", ro: "Trăsături" }, icon: <ShieldHalf size={14} /> },
    { id: "loot", label: { en: "Loot", hu: "Zsákmány", de: "Beute", ro: "Pradă" }, icon: <Package size={14} /> },
    { id: "lesson", label: { en: "Lesson", hu: "Tanulság", de: "Lektion", ro: "Lecție" }, icon: <Lightbulb size={14} /> },
    { id: "log", label: { en: "Log", hu: "Napló", de: "Log", ro: "Jurnal" }, icon: <Swords size={14} /> },
  ];

  return (
    <div className="fixed inset-0 z-[50] flex flex-col bg-black/90 backdrop-blur-xl text-white/80 md:p-8 overflow-hidden">
      {/* Header */}
      <div className={`p-4 md:p-6 border-b shrink-0 transition-colors ${result.victory ? "bg-emerald-950/30 border-emerald-500/20" : "bg-rose-950/30 border-rose-500/20"}`}>
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
                {localize({ en: "Combat Report", hu: "Harcászati Jelentés", de: "Kampfbericht", ro: "Raport de Luptă" })}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto p-2 gap-2 bg-black/40 border-b border-white/5 shrink-0 [scrollbar-width:none]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              activeTab === tab.id 
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" 
                : "bg-white/5 text-white/40 border border-transparent hover:bg-white/10 hover:text-white/80"
            }`}
          >
            {tab.icon}
            {localize(tab.label)}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto relative">
        <AnimatePresence mode="wait">
          {activeTab === "summary" && (
            <motion.div key="summary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 md:p-8 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-[10px] uppercase font-black text-white/40 mb-1">{localize({ en: "Duration", hu: "Időtartam", de: "Dauer", ro: "Durată" })}</div>
                  <div className="text-lg font-mono text-white/90">{result.durationMs / 1000}s</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-[10px] uppercase font-black text-white/40 mb-1">{localize({ en: "Tactic Used", hu: "Használt Taktika", de: "Taktik", ro: "Tactică" })}</div>
                  <div className="text-sm font-black text-cyan-400 mt-1 uppercase">{tactic ? localize(tactic.name) : "---"}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-[10px] uppercase font-black text-white/40 mb-1">{localize({ en: "Damage Dealt", hu: "Okozott Sebzés", de: "Schaden", ro: "Daune" })}</div>
                  <div className="text-lg font-mono text-emerald-400">{Math.round(result.stats.damageDealt)}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-[10px] uppercase font-black text-white/40 mb-1">{localize({ en: "Damage Taken", hu: "Kapott Sebzés", de: "Erhalten", ro: "Primit" })}</div>
                  <div className="text-lg font-mono text-rose-400">{Math.round(result.stats.damageReceived)}</div>
                </div>
              </div>

              <div className="bg-black/40 border border-white/5 rounded-3xl p-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-white/50 mb-4">{localize({ en: "Force Evaluation", hu: "Erőviszonyok Értékelése", de: "Kraftauswertung", ro: "Evaluarea Forțelor" })}</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-rose-400"><Target size={16} /><span className="text-[11px] font-black uppercase">Firepower</span></div>
                      <span className="font-mono text-lg">{armyAttack}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: `${Math.min(100, armyAttack / 10)}%` }} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-cyan-400"><ShieldHalf size={16} /><span className="text-[11px] font-black uppercase">Barrier</span></div>
                      <span className="font-mono text-lg">{armyDefense}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${Math.min(100, armyDefense / 10)}%` }} />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-amber-400"><SpeedIcon size={16} /><span className="text-[11px] font-black uppercase">Speed / Tactics</span></div>
                      <span className="font-mono text-lg">{armySpeed}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: `${Math.min(100, armySpeed / 10)}%` }} />
                    </div>
                    
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-black tracking-widest text-white/60">
                        {result.durationMs <= 2000 ? "⚡ Fast Victory" : result.durationMs >= 6000 ? "⏳ Protracted" : "⚖️ Tactical Win"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "breakdown" && (
            <motion.div key="breakdown" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 md:p-8 space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Player Side */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                      <Crosshair size={14} /> {localize({ en: "Player Modifiers", hu: "Játékos Módosítók", de: "Spieler Mod.", ro: "Modificatori Jucător" })}
                    </h3>
                    <div className="bg-cyan-950/20 border border-cyan-500/20 rounded-2xl p-4 space-y-3">
                      <div className="text-[10px] text-cyan-200/50 mb-2 uppercase tracking-widest font-black">Attack Breakdown</div>
                      <div className="flex justify-between items-center text-xs"><span>Base Units</span><span className="font-mono text-cyan-300">{Math.round(result.stats.breakdown?.player.attack.base ?? armyAttack)}</span></div>
                      {result.stats.breakdown?.player.attack.tacticMod !== 1 && <div className="flex justify-between items-center text-xs text-amber-200/70"><span>Tactic</span><span className="font-mono">x{result.stats.breakdown?.player.attack.tacticMod}</span></div>}
                      {result.stats.breakdown?.player.attack.avatarMod !== 1 && <div className="flex justify-between items-center text-xs text-purple-200/70"><span>Avatar</span><span className="font-mono">x{result.stats.breakdown?.player.attack.avatarMod.toFixed(2)}</span></div>}
                      {result.stats.breakdown?.player.attack.troopRatioMod !== 1 && <div className="flex justify-between items-center text-xs text-rose-300"><span>Troop Ratio Penalty</span><span className="font-mono">x{result.stats.breakdown?.player.attack.troopRatioMod.toFixed(2)}</span></div>}
                      <div className="flex justify-between items-center text-xs font-bold pt-1 border-t border-cyan-500/20"><span>Total Attack</span><span className="font-mono text-cyan-400">{Math.round(result.stats.breakdown?.player.attack.total ?? armyAttack)}</span></div>
                      
                      <div className="text-[10px] text-cyan-200/50 mt-4 mb-2 uppercase tracking-widest font-black">Defense Breakdown</div>
                      <div className="flex justify-between items-center text-xs"><span>Base Units</span><span className="font-mono text-cyan-300">{Math.round(result.stats.breakdown?.player.defense.base ?? armyDefense)}</span></div>
                      {result.stats.breakdown?.player.defense.tacticMod !== 1 && <div className="flex justify-between items-center text-xs text-amber-200/70"><span>Tactic</span><span className="font-mono">x{result.stats.breakdown?.player.defense.tacticMod}</span></div>}
                      <div className="flex justify-between items-center text-xs font-bold pt-1 border-t border-cyan-500/20"><span>Total Defense</span><span className="font-mono text-cyan-400">{Math.round(result.stats.breakdown?.player.defense.total ?? armyDefense)}</span></div>
                      
                      <div className="w-full h-px bg-white/10 my-2" />
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/60">Intel Advantage</span>
                        <span className="font-mono text-emerald-400">+{result.intelGained} gained</span>
                      </div>
                    </div>
                 </div>

                 {/* Enemy Side */}
                 <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-rose-400 flex items-center gap-2">
                      <Shield size={14} /> {localize({ en: "Enemy Modifiers", hu: "Ellenség Módosítók", de: "Feind Mod.", ro: "Modificatori Inamic" })}
                    </h3>
                    <div className="bg-rose-950/20 border border-rose-500/20 rounded-2xl p-4 space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/60">Garrison Destroyed</span>
                        <span className="font-mono text-rose-300">{Math.floor(result.stats.enemyGarrisonDestroyed)}</span>
                      </div>
                      
                      <div className="text-[10px] text-rose-200/50 mt-4 mb-2 uppercase tracking-widest font-black">Force Multipliers</div>
                      {result.stats.breakdown?.enemy.attack.conditionMod !== 1 && <div className="flex justify-between items-center text-xs text-rose-300"><span>Condition Mod</span><span className="font-mono">x{result.stats.breakdown?.enemy.attack.conditionMod}</span></div>}
                      
                      <div className="w-full h-px bg-white/10 my-2" />
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/60">Traits Active</span>
                        <span className="font-mono text-amber-400">{result.stats.traitLog?.length ?? result.stats.traitTriggered.length}</span>
                      </div>
                    </div>
                 </div>
               </div>
            </motion.div>
          )}

          {activeTab === "units" && (
            <motion.div key="units" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 md:p-8">
              <div className="bg-black/40 border border-white/5 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 text-[10px] uppercase font-black tracking-widest text-white/40">
                      <th className="p-4 font-black">{localize({ en: "Unit Type", hu: "Egység", de: "Einheit", ro: "Unitate" })}</th>
                      <th className="p-4 font-black text-right">{localize({ en: "Sent", hu: "Küldve", de: "Gesendet", ro: "Trimis" })}</th>
                      <th className="p-4 font-black text-right">{localize({ en: "Lost", hu: "Elveszett", de: "Verloren", ro: "Pierdut" })}</th>
                      <th className="p-4 font-black text-right">{localize({ en: "Wounded", hu: "Sebesült", de: "Verwundet", ro: "Rănit" })}</th>
                      <th className="p-4 font-black text-right">{localize({ en: "Survived", hu: "Túlélte", de: "Überlebt", ro: "Supraviețuit" })}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium">
                    {result.stats.unitsSent && Object.entries(result.stats.unitsSent).map(([unitId, sent]) => {
                      if (sent <= 0) return null;
                      const lost = result.stats.unitsLost[unitId] || 0;
                      const wounded = result.casualties?.wounded[unitId] || 0;
                      const survived = Math.max(0, sent - lost - wounded);
                      
                      // Resolve unit name
                      const unitDef = WARROOM_UNITS[unitId as keyof typeof WARROOM_UNITS];
                      const name = unitDef ? localize(unitDef.name) : unitId;

                      return (
                        <tr key={unitId} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                          <td className="p-4 text-white/80">{name}</td>
                          <td className="p-4 text-right font-mono text-cyan-400">{sent}</td>
                          <td className="p-4 text-right font-mono text-rose-400">{lost > 0 ? `-${lost}` : "0"}</td>
                          <td className="p-4 text-right font-mono text-amber-400">{wounded > 0 ? wounded : "0"}</td>
                          <td className="p-4 text-right font-mono text-emerald-400">{survived}</td>
                        </tr>
                      );
                    })}
                    {!result.stats.unitsSent && (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-white/30 text-xs uppercase tracking-widest font-black">
                          {localize({ en: "No detailed unit data available", hu: "Nincs részletes egység adat", de: "Keine Daten", ro: "Fără date" })}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === "traits" && (
            <motion.div key="traits" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 md:p-8 space-y-4">
               {(!result.stats.traitLog || result.stats.traitLog.length === 0) && result.stats.traitTriggered.length === 0 ? (
                 <div className="h-32 flex items-center justify-center border border-dashed border-white/10 rounded-2xl text-white/30 text-xs font-black uppercase tracking-widest">
                   {localize({ en: "No enemy traits triggered", hu: "Nem aktiválódott ellenséges trait", de: "Keine feindlichen Eigenschaften", ro: "Nicio trăsătură declanșată" })}
                 </div>
               ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {result.stats.traitLog ? result.stats.traitLog.map((log, idx) => (
                     <div key={`${log.traitId}-${idx}`} className="bg-rose-950/10 border border-rose-500/20 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden">
                       {log.counteredBy && <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><ShieldHalf size={64} /></div>}
                       <div className="flex items-center justify-between z-10">
                         <h4 className="text-sm font-black text-rose-300 uppercase tracking-wide">{localize(log.name)}</h4>
                         {log.counteredBy ? (
                           <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[9px] font-black uppercase tracking-widest">Countered</span>
                         ) : (
                           <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-400 text-[9px] font-black uppercase tracking-widest">Active</span>
                         )}
                       </div>
                       <div className="text-xs text-white/60 z-10">
                         {log.hiddenRevealed || !log.counteredBy ? localize(log.description) : localize({ en: "Effect applied.", hu: "Hatás érvényesült.", de: "Effekt angewendet.", ro: "Efect aplicat." })}
                       </div>
                       {log.counteredBy && (
                         <div className="mt-2 pt-2 border-t border-rose-500/10 text-[10px] text-emerald-400 flex items-center gap-1.5 z-10">
                           <ShieldHalf size={12} />
                           <span>Neutralized by: <strong>{log.counteredBy.replace(/_/g, " ")}</strong> ({Math.round((log.counterEffectiveness ?? 1) * 100)}% effective)</span>
                         </div>
                       )}
                     </div>
                   )) : result.stats.traitTriggered.map((traitId, idx) => {
                     const countered = result.stats.counterUsed.includes(traitId);
                     return (
                       <div key={`${traitId}-${idx}`} className="bg-rose-950/10 border border-rose-500/20 rounded-2xl p-4 flex flex-col gap-3">
                         <div className="flex items-center justify-between">
                           <h4 className="text-sm font-black text-rose-300 uppercase tracking-wide">{traitId.replace(/_/g, " ")}</h4>
                           {countered ? (
                             <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[9px] font-black uppercase tracking-widest">Countered</span>
                           ) : (
                             <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-400 text-[9px] font-black uppercase tracking-widest">Active</span>
                           )}
                         </div>
                         <div className="text-xs text-white/60">
                           {localize({ en: "Trait effect applied during combat phases.", hu: "Trait hatás érvényesült a harc során.", de: "Effekt während des Kampfes angewendet.", ro: "Efect aplicat în timpul luptei." })}
                         </div>
                       </div>
                     );
                   })}
                 </div>
               )}
            </motion.div>
          )}

          {activeTab === "loot" && (
            <motion.div key="loot" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 md:p-8">
              {!result.loot ? (
                 <div className="h-32 flex items-center justify-center border border-dashed border-white/10 rounded-2xl text-white/30 text-xs font-black uppercase tracking-widest">
                   {localize({ en: "No loot acquired", hu: "Nincs zsákmány", de: "Keine Beute", ro: "Fără pradă" })}
                 </div>
              ) : (
                <div className="space-y-6">
                  {/* Basic Materials */}
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">{localize({ en: "Recovered Materials", hu: "Szerzett Anyagok", de: "Geborgene Materialien", ro: "Materiale Recuperate" })}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {Object.entries(result.loot.materials).map(([matId, amount]) => {
                        if (!amount) return null;
                        const matDef = METEOR_MATERIAL_META[matId as keyof typeof METEOR_MATERIAL_META];
                        return (
                          <div key={matId} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center gap-2">
                            <span className="text-2xl">📦</span>
                            <div className="text-center">
                              <div className="text-lg font-mono font-bold text-amber-400">+{amount}</div>
                              <div className="text-[10px] font-black uppercase tracking-wider text-white/50">{matDef ? localize(matDef.label) : matId}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Special Bonuses */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4">
                      <div className="text-[10px] uppercase font-black text-emerald-400 mb-1">Intel Bonus</div>
                      <div className="text-sm font-medium text-emerald-200/70">+{result.intelGained} Network Intel</div>
                    </div>
                    {result.lootBreakdown && (
                      <div className="bg-sky-950/20 border border-sky-500/20 rounded-xl p-4">
                        <div className="text-[10px] uppercase font-black text-sky-400 mb-1">Loot Factors</div>
                        <div className="text-[10px] font-medium text-sky-200/70 flex flex-col gap-1">
                          {result.lootBreakdown.bonuses.fastWinDouble && <span>• Fast Win: x2.0</span>}
                          {result.lootBreakdown.bonuses.tacticalPenalty && <span>• Tactical Penalty: x0.5</span>}
                          <span>• Rare Drop Chance: {Math.round(result.lootBreakdown.bonuses.rareChance * 100)}%</span>
                        </div>
                      </div>
                    )}
                    {result.loot.rareDrop && (
                      <div className="bg-fuchsia-950/20 border border-fuchsia-500/20 rounded-xl p-4 sm:col-span-2 md:col-span-1 flex flex-col justify-center">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[10px] uppercase font-black text-fuchsia-400 mb-1">Rare Drop Discovered!</div>
                            <div className="text-sm font-black text-fuchsia-300">{localize(result.loot.rareDrop.name)}</div>
                          </div>
                          <Package size={24} className="text-fuchsia-400" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "lesson" && (
            <motion.div key="lesson" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 md:p-8 flex items-center justify-center">
              <div className="max-w-lg w-full bg-cyan-950/10 border border-cyan-500/20 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <Lightbulb size={120} />
                </div>
                <div className="relative z-10 space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-500/80 mb-2">
                      {localize({ en: "Outcome Analysis", hu: "Kimenetel Elemzése", de: "Ergebnisanalyse", ro: "Analiza Rezultatului" })}
                    </h4>
                    <p className="text-lg text-white/90 leading-relaxed font-medium">
                      {lesson.why}
                    </p>
                  </div>
                  <div className="w-12 h-1 bg-cyan-500/30 rounded-full" />
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-amber-500/80 mb-2">
                      {localize({ en: "Tactical Recommendation", hu: "Taktikai Javaslat", de: "Taktische Empfehlung", ro: "Recomandare Tactică" })}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {lesson.nextTime}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "log" && (
            <motion.div key="log" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col">
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
                    {localize({ en: "Press Play to begin replay", hu: "Nyomd meg a Lejátszás gombot", de: "Drücke Play", ro: "Apasă Redare" })}
                  </div>
                )}
              </div>

              {/* Log Controls Footer */}
              <div className="p-4 bg-black/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
