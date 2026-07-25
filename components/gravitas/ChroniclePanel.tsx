"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, History, Sword, Rocket, Compass, 
  ArrowLeftRight, FlaskConical, AlertTriangle, 
  Unlock, Settings, Gift, ChevronDown, ChevronUp,
  Pin, Trash2, CheckCheck
} from "lucide-react";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import type { ArchiveEvent, ArchiveCategory } from "@/lib/gravitas/sim/archive/types";

interface Props {
  state: StarholdState;
  lang: string;
  onClose: () => void;
  doAction: (cmd: StarholdCommand, color: string) => void;
}

const CATEGORY_ICONS: Record<ArchiveCategory, any> = {
  battle: Sword,
  fleet: Rocket,
  expedition: Compass,
  trade: ArrowLeftRight,
  research: FlaskConical,
  alert: AlertTriangle,
  unlock: Unlock,
  system: Settings,
  reward: Gift,
};

const CATEGORY_COLORS: Record<ArchiveCategory, string> = {
  battle: "text-rose-400 bg-rose-400/10",
  fleet: "text-cyan-400 bg-cyan-400/10",
  expedition: "text-emerald-400 bg-emerald-400/10",
  trade: "text-amber-400 bg-amber-400/10",
  research: "text-indigo-400 bg-indigo-400/10",
  alert: "text-orange-400 bg-orange-400/10",
  unlock: "text-fuchsia-400 bg-fuchsia-400/10",
  system: "text-slate-400 bg-slate-400/10",
  reward: "text-yellow-400 bg-yellow-400/10",
};

export default function ChroniclePanel({ state, lang, onClose, doAction }: Props) {
  const [filter, setFilter] = useState<ArchiveCategory | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const events = state.archive.events;
  const unreadCount = events.filter(event => !event.isRead).length;

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const filteredEvents = useMemo(() => {
    const matching = filter === "all" ? events : events.filter(e => e.category === filter);
    return [...matching].sort((a, b) => {
      if (Boolean(a.isPinned) !== Boolean(b.isPinned)) return a.isPinned ? -1 : 1;
      return b.tick - a.tick;
    });
  }, [events, filter]);

  const formatTick = (tick: number) => {
    const totalSeconds = tick;
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      className="fixed right-0 top-0 bottom-0 w-[420px] max-w-full bg-[#050810]/98 backdrop-blur-2xl border-l border-white/10 z-[70] flex flex-col shadow-2xl"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-b from-indigo-500/5 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-400/10 flex items-center justify-center text-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.15)]">
            <History size={20} />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight text-white uppercase">
              {localize({ en: "Chronicle", hu: "Krónika", de: "Chronik", ro: "Cronică" })}
            </h2>
            <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">
              {unreadCount > 0
                ? `${unreadCount} ${localize({ en: "unread", hu: "olvasatlan", de: "ungelesen", ro: "necitite" })}`
                : localize({ en: "Station Archive Log", hu: "Állomás Archívum Napló", de: "Stationsarchiv-Protokoll", ro: "Jurnal Arhivă Stație" })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <button
              onClick={() => doAction({ type: "MARK_ALL_CHRONICLE_READ" }, "rgba(129,140,248,0.2)")}
              title={localize({ en: "Mark all read", hu: "Összes olvasott", de: "Alle gelesen", ro: "Marchează toate citite" })}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition text-white/50 hover:text-indigo-300"
            >
              <CheckCheck size={15} />
            </button>
          )}
          <button onClick={onClose} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition text-white/50 hover:text-white">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-3 border-b border-white/5 bg-black/20 flex gap-2 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all whitespace-nowrap ${filter === "all" ? "bg-white/10 text-white border border-white/20" : "text-white/30 hover:text-white/60 border border-transparent"}`}
        >
          {localize({ en: "All", hu: "Mind", de: "Alle", ro: "Toate" })}
        </button>
        {(Object.keys(CATEGORY_ICONS) as ArchiveCategory[]).map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all whitespace-nowrap flex items-center gap-1.5 ${filter === cat ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" : "text-white/30 hover:text-white/60 border border-transparent"}`}
          >
            {React.createElement(CATEGORY_ICONS[cat], { size: 12 })}
            {localize({
              battle: { en: "Battle", hu: "Csata", de: "Schlacht", ro: "Luptă" },
              fleet: { en: "Fleet", hu: "Flotta", de: "Flotte", ro: "Flotă" },
              expedition: { en: "Expedition", hu: "Expedíció", de: "Expedition", ro: "Expediție" },
              trade: { en: "Trade", hu: "Kereskedelem", de: "Handel", ro: "Comerț" },
              research: { en: "Research", hu: "Kutatás", de: "Forschung", ro: "Cercetare" },
              alert: { en: "Alert", hu: "Riasztás", de: "Alarm", ro: "Alertă" },
              unlock: { en: "Unlock", hu: "Feloldás", de: "Freischaltung", ro: "Deblocare" },
              system: { en: "System", hu: "Rendszer", de: "System", ro: "Sistem" },
              reward: { en: "Reward", hu: "Jutalom", de: "Belohnung", ro: "Recompensă" },
            }[cat])}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
        {filteredEvents.length === 0 ? (
          <div className="py-20 text-center text-white/20 text-xs italic">
            {localize({ 
              en: "No archived events found for this category.", 
              hu: "Nem található archivált esemény ebben a kategóriában.", 
              de: "Keine archivierten Ereignisse in dieser Kategorie gefunden.", 
              ro: "Nu s-au găsit evenimente arhivate în această categorie." 
            })}
          </div>
        ) : (
          filteredEvents.map(event => {
            const Icon = CATEGORY_ICONS[event.category];
            const isExpanded = expandedId === event.id;

            return (
              <div
                key={event.id}
                className={`group rounded-xl border transition-all duration-300 ${event.isPinned ? "border-amber-400/20 bg-amber-400/[0.03]" : isExpanded ? "border-white/20 bg-white/5" : event.isRead ? "border-white/5 bg-white/[0.02] hover:border-white/10" : "border-indigo-400/20 bg-indigo-400/[0.04]"}`}
              >
                <div
                  className="p-3 cursor-pointer flex items-start gap-3"
                  onClick={() => {
                    setExpandedId(isExpanded ? null : event.id);
                    if (!event.isRead) doAction({ type: "MARK_CHRONICLE_READ", eventId: event.id }, "rgba(129,140,248,0.12)");
                  }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${CATEGORY_COLORS[event.category]}`}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className={`text-xs font-black truncate ${event.isRead ? "text-white/80" : "text-white"}`}>{localize(event.title)}</h4>
                      <span className="text-[9px] font-mono text-white/30 shrink-0">{formatTick(event.tick)}</span>
                    </div>
                    <p className="text-[10px] text-white/50 line-clamp-1 mt-0.5">{localize(event.summary)}</p>
                  </div>
                  <div className="text-white/20 group-hover:text-white/40 transition-colors pt-1">
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <div className="p-3 space-y-3">
                        <p className="text-[11px] text-white/70 leading-relaxed italic">
                          {localize(event.summary)}
                        </p>

                        {/* Details Grid */}
                        {event.details && (
                          <div className="grid grid-cols-2 gap-2 pt-2">
                            {event.details.outcome && (
                              <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                                <div className="text-[8px] font-black uppercase text-white/30 mb-1">
                                  {localize({ en: "Outcome", hu: "Kimenetel", de: "Ergebnis", ro: "Rezultat" })}
                                </div>
                                <div className="text-[10px] font-bold text-white/80 uppercase">{event.details.outcome}</div>
                              </div>
                            )}
                            {event.details.targetId && (
                              <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                                <div className="text-[8px] font-black uppercase text-white/30 mb-1">
                                  {localize({ en: "Target", hu: "Célpont", de: "Ziel", ro: "Țintă" })}
                                </div>
                                <div className="text-[10px] font-bold text-indigo-300 truncate">{event.details.targetId}</div>
                              </div>
                            )}
                            {event.details.loot && Object.keys(event.details.loot).length > 0 && (
                              <div className="col-span-2 p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                                <div className="text-[8px] font-black uppercase text-emerald-400/60 mb-1">
                                  {localize({ en: "Resources Secured", hu: "Szerzett Erőforrások", de: "Gesicherte Ressourcen", ro: "Resurse Securizate" })}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {Object.entries(event.details.loot).map(([res, val]) => (
                                    <div key={res} className="text-[10px] font-black text-emerald-400">
                                      +{val} {res.replace(/_/g, ' ').toUpperCase()}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {event.details.casualties && (
                              <div className="col-span-2 p-2 rounded-lg bg-rose-500/5 border border-rose-500/10">
                                <div className="text-[8px] font-black uppercase text-rose-400/60 mb-1">
                                  {localize({ en: "Casualties", hu: "Veszteségek", de: "Verluste", ro: "Pierderi" })}
                                </div>
                                <div className="space-y-1">
                                  {Object.entries(event.details.casualties.killed).map(([unit, count]) => count > 0 && (
                                    <div key={unit} className="text-[10px] font-bold text-rose-400 flex justify-between">
                                      <span>{unit.split('_').pop()}</span>
                                      <span>-{count} ({localize({ en: "Lost", hu: "Elveszett", de: "Verloren", ro: "Pierdut" })})</span>
                                    </div>
                                  ))}
                                  {Object.entries(event.details.casualties.wounded).map(([unit, count]) => count > 0 && (
                                    <div key={unit} className="text-[10px] font-bold text-amber-400 flex justify-between">
                                      <span>{unit.split('_').pop()}</span>
                                      <span>-{count} ({localize({ en: "Wounded", hu: "Sérült", de: "Verwundet", ro: "Rănit" })})</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                        <div className="flex justify-end gap-2 border-t border-white/5 pt-2">
                          <button
                            type="button"
                            onClick={() => doAction({ type: "TOGGLE_CHRONICLE_PINNED", eventId: event.id }, "rgba(251,191,36,0.16)")}
                            className={`flex items-center gap-1 rounded-lg border px-2 py-1 text-[9px] font-black uppercase transition ${event.isPinned ? "border-amber-400/30 bg-amber-400/10 text-amber-300" : "border-white/10 text-white/40 hover:text-white/70"}`}
                          >
                            <Pin size={11} />
                            {event.isPinned
                              ? localize({ en: "Unpin", hu: "Feloldás", de: "Lösen", ro: "Anulează fixarea" })
                              : localize({ en: "Pin", hu: "Rögzítés", de: "Anheften", ro: "Fixează" })}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              doAction({ type: "DISMISS_CHRONICLE_ENTRY", eventId: event.id }, "rgba(244,63,94,0.12)");
                              setExpandedId(null);
                            }}
                            className="flex items-center gap-1 rounded-lg border border-rose-400/15 px-2 py-1 text-[9px] font-black uppercase text-rose-300/60 transition hover:bg-rose-400/10 hover:text-rose-300"
                          >
                            <Trash2 size={11} />
                            {localize({ en: "Delete", hu: "Törlés", de: "Löschen", ro: "Șterge" })}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-black/40 border-t border-white/5">
        <p className="text-[9px] text-center text-white/20 font-medium leading-relaxed">
          {localize({ 
            en: "The Chronicle records all important station events. Older, low-priority entries are automatically deleted to free up memory.", 
            hu: "A Krónika minden fontos állomáseseményt rögzít. A régebbi, alacsony prioritású bejegyzések automatikusan törlődnek a memória felszabadítása érdekében.", 
            de: "Die Chronik zeichnet alle wichtigen Stationsereignisse auf. Ältere Einträge mit niedriger Priorität werden automatisch gelöscht, um Speicher freizugeben.", 
            ro: "Cronica înregistrează toate evenimentele importante ale stației. Intrările mai vechi, cu prioritate scăzută, sunt șterse automat pentru a elibera memoria." 
          })}
        </p>
      </div>
    </motion.div>
  );
}
