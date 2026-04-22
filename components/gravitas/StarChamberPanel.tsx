"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Star, Zap, Shield, Lock, Unlock, 
  Compass, Activity, Clock, Sparkles, 
  ChevronRight, AlertTriangle, Gift,
  Move, Heart, Key, Box, RefreshCcw, Calendar,
  CheckCircle2, Target, ListTodo, ShieldAlert
} from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { STAR_CHAMBER_ITEMS } from "@/lib/gravitas/sim/starchamber/registry";
import type { StarChamberCategory, StarChamberItem } from "@/lib/gravitas/sim/starchamber/types";
import type { StarChamberOffer } from "@/lib/gravitas/sim/starchamber/rotation/types";
import type { ActiveTaskInstance } from "@/lib/gravitas/sim/tasks/types";
import { STARHOLD_MILESTONES } from "@/lib/gravitas/sim/progression";

interface Props {
  state: StarholdState;
  lang: string;
  onClose: () => void;
  doAction: (command: any, color: string) => void;
}

type TabType = StarChamberCategory | "rotation" | "tasks";

const CATEGORIES: { id: TabType; label: LocalizedString; icon: any }[] = [
  { id: "tasks", label: { en: "Tasks", hu: "Feladatok", de: "Aufgaben", ro: "Sarcini" }, icon: ListTodo },
  { id: "rotation", label: { en: "Rotation", hu: "Rotáció", de: "Rotation", ro: "Rotație" }, icon: RefreshCcw },
  { id: "mobility", label: { en: "Mobility", hu: "Mobilitás", de: "Mobilität", ro: "Mobilitate" }, icon: Move },
  { id: "support", label: { en: "Support", hu: "Támogatás", de: "Unterstützung", ro: "Suport" }, icon: Shield },
  { id: "access", label: { en: "Access", hu: "Hozzáférés", de: "Zugang", ro: "Acces" }, icon: Key },
  { id: "cohesion", label: { en: "Cohesion", hu: "Kohézió", de: "Kohäsion", ro: "Coeziune" }, icon: Heart },
  { id: "specials", label: { en: "Specials", hu: "Speciális", de: "Spezial", ro: "Speciale" }, icon: Box },
];

export default function StarChamberPanel({ state, lang, onClose, doAction }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>("tasks");
  const stars = state.progression.stars;
  const unlockedIds = state.starChamber.unlockedItemIds;
  const cooldowns = state.starChamber.itemCooldowns;
  const rotation = state.starChamber.rotation;
  const dailyTasks = state.dailyTasks;
  const unclaimed = state.progression.unclaimedMilestones || [];

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const filteredItems = useMemo(() => 
    STAR_CHAMBER_ITEMS.filter(item => item.category === activeTab),
    [activeTab]
  );

  const handleUnlock = (itemId: string) => {
    doAction({ type: "UNLOCK_STAR_CHAMBER_ITEM", itemId }, "rgba(251,191,36,0.2)");
  };

  const handleActivate = (itemId: string) => {
    doAction({ type: "ACTIVATE_STAR_CHAMBER_ITEM", itemId }, "rgba(34,211,238,0.2)");
  };

  const handleClaimOffer = (instanceId: string) => {
    doAction({ type: "CLAIM_STAR_CHAMBER_OFFER", instanceId }, "rgba(251,191,36,0.2)");
  };

  const handleClaimTask = (taskId: string) => {
    doAction({ type: "CLAIM_DAILY_TASK_REWARD", taskId }, "rgba(34,211,238,0.2)");
  };

  const handleClaim = (milestoneId: string) => {
    doAction({ type: "CLAIM_MILESTONE", milestoneId }, "rgba(251,191,36,0.2)");
  };

  const currentDayIndex = Math.floor(state.tick / 86400) % 7;

  const renderTask = (task: ActiveTaskInstance) => {
    const progress = dailyTasks.progress[task.id] || 0;
    const isCompleted = progress >= task.targetValue;
    const isClaimed = dailyTasks.claimedTaskIds.includes(task.id);
    const isToday = task.dayIndex === currentDayIndex;
    const progressPercent = Math.min(100, (progress / task.targetValue) * 100);

    return (
      <div key={task.id} className={`rounded-2xl border p-4 transition-all ${isToday ? "border-cyan-500/30 bg-cyan-500/5 shadow-[0_0_20px_rgba(34,211,238,0.1)]" : "opacity-60 border-white/5 bg-white/[0.02]"}`}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isCompleted ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-white/40"}`}>
              {isCompleted ? <CheckCircle2 size={16} /> : <Target size={16} />}
            </div>
            <div>
              <h4 className="text-sm font-black text-white leading-none">{localize(task.title)}</h4>
              <span className="text-[8px] font-black uppercase tracking-widest text-white/30">
                {localize({
                  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][task.dayIndex],
                  hu: ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"][task.dayIndex],
                  de: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"][task.dayIndex],
                  ro: ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"][task.dayIndex],
                })}
              </span>
            </div>
          </div>
          {isToday && (
            <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">
              {localize({ en: "Active", hu: "Aktív", de: "Aktiv", ro: "Activ" })}
            </span>
          )}
        </div>
        <p className="text-[11px] text-white/50 leading-relaxed mb-3">{localize(task.description)}</p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[9px] font-black text-white/40 uppercase">
              {localize({ en: "Progress", hu: "Haladás", de: "Fortschritt", ro: "Progres" })}
            </div>
            <div className="text-[9px] font-black text-white/60">{progress} / {task.targetValue}</div>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${isCompleted ? "bg-emerald-500" : "bg-cyan-500"}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex flex-wrap gap-2">
            {task.reward.stars && (
              <div className="flex items-center gap-1">
                <Star size={10} className="text-amber-400" fill="currentColor" />
                <span className="text-[10px] font-black text-amber-400">+{task.reward.stars}</span>
              </div>
            )}
            {task.reward.chronoCore && (
              <div className="flex items-center gap-1">
                <Zap size={10} className="text-fuchsia-400" fill="currentColor" />
                <span className="text-[10px] font-black text-fuchsia-400">+{task.reward.chronoCore}</span>
              </div>
            )}
          </div>
          
          {isCompleted && !isClaimed && isToday && (
            <button
              onClick={() => handleClaimTask(task.id)}
              className="px-4 py-1.5 rounded-lg bg-emerald-500 text-white text-[10px] font-black hover:scale-105 active:scale-95 transition shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              {localize({ en: "CLAIM REWARD", hu: "JUTALOM ÁTVÉTELE", de: "BELOHNUNG FORDERN", ro: "REVENDICĂ RECOMPENSA" })}
            </button>
          )}
          {isClaimed && (
            <span className="text-[9px] text-emerald-400/60 font-black uppercase tracking-widest">
              {localize({ en: "Claimed", hu: "Átvéve", de: "Behauptet", ro: "Revendicat" })}
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderOffer = (offer: StarChamberOffer, isWeekly: boolean) => {
    const canAffordStars = !offer.cost.stars || stars >= offer.cost.stars;
    let canAffordResources = true;
    if (offer.cost.resources) {
      for (const [resId, cost] of Object.entries(offer.cost.resources)) {
        if ((state.resources as any)[resId] < (cost ?? 0)) canAffordResources = false;
      }
    }
    const canAfford = canAffordStars && canAffordResources;
    const isSoldOut = offer.claimedCount >= offer.stock;

    return (
      <div key={offer.instanceId} className={`rounded-2xl border p-4 transition-all ${isSoldOut ? "opacity-50 border-white/5 bg-white/5" : "border-amber-500/20 bg-amber-500/5"}`}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
              {isWeekly ? <Calendar size={16} /> : <Clock size={16} />}
            </div>
            <h4 className="text-sm font-black text-white">{localize(offer.name)}</h4>
          </div>
          <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/20">
            {isSoldOut ? localize({ en: "Sold Out", hu: "Elfogyott", de: "Ausverkauft", ro: "Epuizat" }) : `${offer.stock - offer.claimedCount} ${localize({ en: "Left", hu: "maradt", de: "übrig", ro: "rămase" })}`}
          </span>
        </div>
        <p className="text-[11px] text-white/50 leading-relaxed mb-4">{localize(offer.description)}</p>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap gap-2">
              {offer.cost.stars && (
                <div className="flex items-center gap-1">
                  <Star size={10} className="text-amber-400" fill="currentColor" />
                  <span className={`text-[10px] font-black ${canAffordStars ? "text-amber-400" : "text-rose-400"}`}>{offer.cost.stars}</span>
                </div>
              )}
              {offer.cost.resources && Object.entries(offer.cost.resources).map(([res, cost]) => (
                <div key={res} className="flex items-center gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${res === 'power' ? 'bg-cyan-400' : 'bg-indigo-400'}`} />
                  <span className="text-[10px] font-black text-white/60">{cost} {res.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            disabled={isSoldOut || !canAfford}
            onClick={() => handleClaimOffer(offer.instanceId)}
            className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all ${!isSoldOut && canAfford ? "bg-amber-400 text-black hover:scale-105 active:scale-95" : "bg-white/5 text-white/20 cursor-not-allowed"}`}
          >
            {isSoldOut ? localize({ en: "CLAIMED", hu: "ÁTVÉVE", de: "BEHAUPTET", ro: "REVENDICAT" }) : localize({ en: "CLAIM", hu: "ÁTVÉTEL", de: "FORDERN", ro: "REVENDICĂ" })}
          </button>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      className="fixed right-0 top-0 bottom-0 w-[380px] max-w-full bg-[#080c18]/95 backdrop-blur-xl border-l border-white/10 z-[60] flex flex-col shadow-2xl"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-b from-amber-500/5 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
            <Star size={20} fill="currentColor" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-white uppercase">
              {localize({ en: "Star Chamber", hu: "Csillagkamra", de: "Sternenkammer", ro: "Camera Stelelor" })}
            </h2>
            <div className="flex items-center gap-1.5">
              <Star size={10} className="text-amber-400" fill="currentColor" />
              <span className="text-xs text-amber-400 font-black">{stars}</span>
              <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest ml-1">
                {localize({ en: "Meta Essence", hu: "Meta Esszencia", de: "Meta-Essenz", ro: "Esență Meta" })}
              </span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition text-white/50 hover:text-white">
          <X size={16} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/5 bg-black/20">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex-1 py-3 flex flex-col items-center gap-1 transition-all relative ${activeTab === cat.id ? "text-cyan-400" : "text-white/30 hover:text-white/60"}`}
          >
            <cat.icon size={16} />
            <span className="text-[9px] font-black uppercase tracking-tighter">{localize(cat.label)}</span>
            {activeTab === cat.id && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
        {/* Unclaimed Rewards */}
        <AnimatePresence>
          {unclaimed.length > 0 && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-2"
            >
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-black flex items-center gap-2 mb-3">
                <Sparkles size={12} /> {localize({ en: "Pending Resonances", hu: "Függő Rezonanciák", de: "Ausstehende Resonanzen", ro: "Rezonanțe în Așteptare" })}
              </h3>
              {unclaimed.map(id => {
                const milestone = STARHOLD_MILESTONES.find(m => m.id === id);
                if (!milestone) return null;
                return (
                  <div key={id} className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Gift size={18} className="text-amber-400" />
                      <div className="text-xs font-black text-white">{localize(milestone.label)}</div>
                    </div>
                    <button
                      onClick={() => handleClaim(id)}
                      className="px-3 py-1.5 rounded-lg bg-amber-400 text-black text-[10px] font-black hover:scale-105 active:scale-95 transition shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                    >
                      {localize({ en: "CLAIM", hu: "ÁTVÉTEL", de: "FORDERN", ro: "REVENDICĂ" })} +{milestone.rewardStars}
                    </button>
                  </div>
                );
              })}
              <div className="h-px w-full bg-white/5 my-4" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Items List */}
        <div className="grid gap-3">
          {activeTab === "tasks" ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-black flex items-center gap-2">
                  <ListTodo size={12} /> {localize({ en: "Weekly Challenges", hu: "Heti Kihívások", de: "Wöchentliche Herausforderungen", ro: "Provocări Săptămânale" })}
                </h3>
                <div className="text-[9px] font-black text-white/30 uppercase tracking-widest">
                  {localize({ en: "Resets in", hu: "Visszaállítás", de: "Zurücksetzen in", ro: "Resetare în" })} {Math.ceil((604800 - (state.tick % 604800)) / 3600)}h
                </div>
              </div>
              {dailyTasks.weeklySet.map(t => renderTask(t))}
            </div>
          ) : activeTab === "rotation" ? (
            <>
              <div className="space-y-3">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-black flex items-center gap-2 mb-2">
                  <Clock size={12} /> {localize({ en: "Daily Resonances", hu: "Napi Rezonanciák", de: "Tägliche Resonanzen", ro: "Rezonanțe Zilnice" })}
                </h3>
                {rotation.dailyOffers.map(o => renderOffer(o, false))}
              </div>
              <div className="h-px w-full bg-white/5 my-4" />
              <div className="space-y-3">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-black flex items-center gap-2 mb-2">
                  <Calendar size={12} /> {localize({ en: "Weekly Alignments", hu: "Heti Összehangolások", de: "Wöchentliche Ausrichtungen", ro: "Alinieri Săptămânale" })}
                </h3>
                {rotation.weeklyOffers.map(o => renderOffer(o, true))}
              </div>
            </>
          ) : (
            filteredItems.map(item => {
              const isUnlocked = unlockedIds.includes(item.id);
              const canAffordUnlock = stars >= item.unlockStarCost;
              const readyAt = cooldowns[item.id] || 0;
              const isOnCooldown = state.tick < readyAt;
              const cooldownRemaining = Math.ceil((readyAt - state.tick) / 60);

              // Check resource costs
              let canAffordActivation = true;
              if (item.activationResourceCost) {
                for (const [resId, cost] of Object.entries(item.activationResourceCost)) {
                  if ((state.resources as any)[resId] < (cost ?? 0)) canAffordActivation = false;
                }
              }

              return (
                <div 
                  key={item.id}
                  className={`group rounded-2xl border p-4 transition-all duration-300 ${isUnlocked ? "border-cyan-500/20 bg-cyan-500/5" : "border-white/5 bg-white/[0.02] hover:border-white/10"}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isUnlocked ? "bg-cyan-400/10 text-cyan-400" : "bg-white/5 text-white/20"}`}>
                        {isUnlocked ? <Unlock size={16} /> : <Lock size={16} />}
                      </div>
                      <h4 className={`text-sm font-black ${isUnlocked ? "text-white" : "text-white/40"}`}>{localize(item.name)}</h4>
                    </div>
                    {item.isPassive && (
                      <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/20">
                        {localize({ en: "Passive", hu: "Passzív", de: "Passiv", ro: "Pasiv" })}
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-white/50 leading-relaxed mb-4">{localize(item.description)}</p>

                  {/* Requirements */}
                  {!isUnlocked && item.requirements && (
                    <div className="mb-4 p-2 rounded-lg bg-rose-500/5 border border-rose-500/10 space-y-1">
                      <div className="text-[8px] font-black uppercase tracking-widest text-rose-400/60 flex items-center gap-1">
                        <ShieldAlert size={10} /> {localize({ en: "Requirements", hu: "Követelmények", de: "Anforderungen", ro: "Cerințe" })}
                      </div>
                      {item.requirements.coreLevel && (
                        <div className={`text-[10px] font-bold ${state.moduleLevels.core >= item.requirements.coreLevel ? "text-emerald-400/60" : "text-rose-400/80"}`}>
                          • {localize({ en: "Core Level", hu: "Mag Szint", de: "Kern-Level", ro: "Nivel Nucleu" })} {item.requirements.coreLevel}
                        </div>
                      )}
                      {item.requirements.completedResearch?.map(resId => (
                        <div key={resId} className={`text-[10px] font-bold ${state.research.completed.includes(resId) ? "text-emerald-400/60" : "text-rose-400/80"}`}>
                          • {localize({ en: "Research", hu: "Kutatás", de: "Forschung", ro: "Cercetare" })}: {resId.replace(/_/g, ' ')}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Costs & Actions */}                  <div className="flex items-center justify-between gap-4 mt-auto">
                    <div className="flex flex-col gap-1">
                      {!isUnlocked ? (
                        <div className="flex items-center gap-1.5">
                          <Star size={12} className="text-amber-400" fill="currentColor" />
                          <span className={`text-xs font-black ${canAffordUnlock ? "text-amber-400" : "text-rose-400"}`}>{item.unlockStarCost}</span>
                          <span className="text-[9px] text-white/20 uppercase font-bold">
                            {localize({ en: "Unlock", hu: "Feloldás", de: "Freischalten", ro: "Deblocare" })}
                          </span>
                        </div>
                      ) : item.activationResourceCost ? (
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(item.activationResourceCost).map(([res, cost]) => (
                            <div key={res} className="flex items-center gap-1">
                              <div className={`w-1.5 h-1.5 rounded-full ${res === 'power' ? 'bg-cyan-400' : res === 'supply' ? 'bg-amber-400' : 'bg-rose-400'}`} />
                              <span className="text-[10px] font-black text-white/60">{cost} {res.toUpperCase()}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-[9px] text-emerald-400/60 font-black uppercase tracking-widest">
                          {localize({ en: "Permanent Active", hu: "Állandó Aktív", de: "Permanent Aktiv", ro: "Activ Permanent" })}
                        </span>
                      )}
                    </div>

                    {!isUnlocked ? (
                      <button
                        disabled={!canAffordUnlock}
                        onClick={() => handleUnlock(item.id)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all ${canAffordUnlock ? "bg-amber-400 text-black hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(251,191,36,0.2)]" : "bg-white/5 text-white/20 cursor-not-allowed"}`}
                      >
                        {localize({ en: "UNLOCK", hu: "FELOLDÁS", de: "FREISCHALTEN", ro: "DEBLOCARE" })}
                      </button>
                    ) : !item.isPassive ? (
                      <button
                        disabled={isOnCooldown || !canAffordActivation}
                        onClick={() => handleActivate(item.id)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all flex items-center gap-2 ${
                          isOnCooldown 
                            ? "bg-white/5 text-white/20 cursor-not-allowed" 
                            : canAffordActivation
                              ? "bg-cyan-500 text-white hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                              : "bg-rose-500/10 text-rose-400 border border-rose-500/20 cursor-not-allowed"
                        }`}
                      >
                        {isOnCooldown ? (
                          <><Clock size={12} /> {cooldownRemaining}m</>
                        ) : (
                          <>{localize({ en: "ACTIVATE", hu: "AKTIVÁLÁS", de: "AKTIVIEREN", ro: "ACTIVEAZĂ" })}</>
                        )}
                      </button>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <Unlock size={14} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Milestones Progress */}
        <div className="pt-6 border-t border-white/5">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-black mb-4">
            {localize({ en: "Meta Progression", hu: "Meta Progresszió", de: "Meta-Progression", ro: "Progresie Meta" })}
          </h3>
          <div className="space-y-3">
            {STARHOLD_MILESTONES.filter(m => !state.progression.completedMilestones.includes(m.id)).slice(0, 3).map(milestone => {
              const progress = milestone.getProgress?.(state) ?? 0;
              return (
                <div key={milestone.id} className="p-3 rounded-xl border border-white/5 bg-white/[0.01]">
                  <div className="text-[10px] font-black text-white/60 mb-2 truncate">{localize(milestone.label)}</div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500/50 rounded-full transition-all duration-1000"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-black/40 border-t border-white/5">
        <p className="text-[9px] text-center text-white/20 font-medium leading-relaxed">
          {localize({ 
            en: "The Star Chamber systems draw power from the Starhold's ancient core. Activation strains the station's grid.", 
            hu: "A Csillagkamra rendszerei a Starhold ősi magjából merítik erejüket. Az aktiválás megterheli az állomás hálózatát.", 
            de: "Die Systeme der Sternenkammer beziehen Energie aus dem uralten Kern des Starholds. Die Aktivierung belastet das Netz der Station.", 
            ro: "Sistemele Camerei Stelelor extrag putere din nucleul antic al Starhold. Activarea solicită rețeaua stației." 
          })}
        </p>
      </div>
    </motion.div>
  );
}
