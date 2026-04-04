"use client";

import { useState } from "react";
import { X, Book, FileText, Zap, Network, Scale, Lock, Shield, Cpu, Wrench, Eye, FlaskConical, Globe, Award, Timer, Users, Wind, Link, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import { CODEX_ENTRIES } from "@/lib/gravitas/sim/codex/entries";
import type { CodexCategory } from "@/lib/gravitas/sim/codex/types";

interface CodexPanelProps {
  state: StarholdState;
  doAction: (cmd: StarholdCommand, color: string) => void;
  onClose: () => void;
  lang: string;
}

const CATEGORY_NAMES: Record<CodexCategory, LocalizedString> = {
  rules: { en: "Rules of Engagement", hu: "Alapszabályok", de: "Einsatzregeln", ro: "Reguli de Angajare" },
  tips: { en: "Tactical Advice", hu: "Taktikai Tippek", de: "Taktischer Rat", ro: "Sfaturi Tactice" },
  mechanics: { en: "Systems & Mechanics", hu: "Rendszerek és Mechanikák", de: "Systeme & Mechaniken", ro: "Sisteme și Mecanici" },
  lore: { en: "Station Logs", hu: "Állomás Naplók", de: "Stationsprotokolle", ro: "Jurnalele Stației" },
};

const CATEGORY_ICONS: Record<CodexCategory, React.ReactNode> = {
  rules: <Scale size={16} />,
  tips: <Zap size={16} />,
  mechanics: <Network size={16} />,
  lore: <Book size={16} />,
};

const DYNAMIC_ICONS: Record<string, React.ReactNode> = {
  Scale: <Scale size={16} />,
  Link: <Link size={16} />,
  Balance: <Scale size={16} />, // fallback
  User: <Users size={16} />,
  Clock: <Clock size={16} />,
  BookOpen: <Book size={16} />,
  Zap: <Zap size={16} />,
  Cpu: <Cpu size={16} />,
  Wrench: <Wrench size={16} />,
  Eye: <Eye size={16} />,
  FlaskConical: <FlaskConical size={16} />,
  Shield: <Shield size={16} />,
  Network: <Network size={16} />,
  Globe: <Globe size={16} />,
  Award: <Award size={16} />,
  Timer: <Timer size={16} />,
  Book: <Book size={16} />,
  Users: <Users size={16} />,
  Wind: <Wind size={16} />,
  FileText: <FileText size={16} />
};

export default function CodexPanel({ state, doAction, onClose, lang }: CodexPanelProps) {
  const [activeCategory, setActiveCategory] = useState<CodexCategory>("rules");
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null);

  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const handleEntryClick = (id: string, isUnlocked: boolean) => {
    if (!isUnlocked) return;
    
    if (expandedEntry === id) {
      setExpandedEntry(null);
    } else {
      setExpandedEntry(id);
      if (!state.codex.readEntries.includes(id)) {
        doAction({ type: "MARK_CODEX_READ", entryId: id }, "rgba(255,255,255,0.1)");
      }
    }
  };

  const getUnlockHint = (condition: any): string => {
    switch (condition.type) {
      case "coreLevelReached": return `Core Level ${condition.level} required`;
      case "moduleUsed": return `${condition.moduleId} must be online`;
      case "battleWon": return `Win ${condition.count} battles`;
      case "phaseReached": return `Reach ${condition.phase} phase`;
      case "systemUsed": return `Use ${condition.system} system`;
      default: return "Unknown requirement";
    }
  };

  const filteredEntries = CODEX_ENTRIES.filter(e => e.category === activeCategory);
  
  const totalInCategory = filteredEntries.length;
  const unlockedInCategory = filteredEntries.filter(e => state.codex.unlockedEntries.includes(e.id)).length;
  const unreadInCategory = filteredEntries.filter(e => state.codex.unlockedEntries.includes(e.id) && !state.codex.readEntries.includes(e.id)).length;

  return (
    <div className="absolute inset-0 z-[28] flex flex-col bg-black/90 backdrop-blur-xl text-white/80">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-indigo-500/20 bg-indigo-950/20 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
            <Book size={24} />
          </div>
          <div>
            <h2 className="text-lg font-black uppercase tracking-widest text-white shadow-indigo-500/50 drop-shadow-md">
              {localize({ en: "Command Manual", hu: "Parancsnoki Kézikönyv", de: "Kommandohandbuch", ro: "Manual de Comandă" })}
            </h2>
            <p className="text-xs text-indigo-200/60 font-medium tracking-wider">
              {localize({ en: "Station Knowledge Base", hu: "Állomás Tudásbázis", de: "Wissensdatenbank der Station", ro: "Baza de Cunoștințe a Stației" })}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="px-3 py-1.5 rounded-lg bg-indigo-900/30 border border-indigo-500/30 text-indigo-200 text-xs font-black tracking-widest hidden sm:block">
            {state.codex.unlockedEntries.length} / {CODEX_ENTRIES.length} UNLOCKED
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row min-h-0">
        {/* Categories Sidebar */}
        <div className="md:w-64 flex flex-row md:flex-col border-b md:border-b-0 md:border-r border-indigo-500/20 bg-black/40 shrink-0 overflow-x-auto md:overflow-y-auto no-scrollbar">
          {(["rules", "tips", "mechanics", "lore"] as CodexCategory[]).map(cat => {
            const isActive = activeCategory === cat;
            const entriesInCat = CODEX_ENTRIES.filter(e => e.category === cat);
            const unreadCount = entriesInCat.filter(e => state.codex.unlockedEntries.includes(e.id) && !state.codex.readEntries.includes(e.id)).length;
            
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-3 px-5 py-4 border-b-2 md:border-b-0 md:border-l-2 transition-all whitespace-nowrap md:whitespace-normal text-left ${
                  isActive 
                    ? "border-indigo-400 bg-indigo-900/20 text-white" 
                    : "border-transparent text-white/50 hover:bg-white/5 hover:text-white/80"
                }`}
              >
                <span className={isActive ? "text-indigo-400" : "text-white/40"}>
                  {CATEGORY_ICONS[cat]}
                </span>
                <span className="text-xs font-black uppercase tracking-widest flex-1">
                  {localize(CATEGORY_NAMES[cat])}
                </span>
                {unreadCount > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white text-[10px] font-bold">
                    {unreadCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Entries Content */}
        <div className="flex-1 overflow-y-auto bg-[url('/noise.png')] bg-repeat opacity-90 p-4 md:p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-white/10">
              <h3 className="text-2xl font-black text-indigo-300 uppercase tracking-wider">
                {localize(CATEGORY_NAMES[activeCategory])}
              </h3>
              <div className="text-sm font-mono text-white/40">
                {unlockedInCategory}/{totalInCategory} 
                {unreadInCategory > 0 && <span className="text-indigo-400 ml-2">({unreadInCategory} new)</span>}
              </div>
            </div>

            <div className="space-y-4">
              {filteredEntries.map(entry => {
                const isUnlocked = state.codex.unlockedEntries.includes(entry.id);
                const isRead = state.codex.readEntries.includes(entry.id);
                const isExpanded = expandedEntry === entry.id;

                if (!isUnlocked) {
                  return (
                    <div key={entry.id} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-black/40 opacity-50 select-none">
                      <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-white/20">
                        <Lock size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">
                          {localize({ en: "Encrypted Entry", hu: "Titkosított Bejegyzés", de: "Verschlüsselter Eintrag", ro: "Intrare Criptată" })}
                        </div>
                        <div className="text-[10px] text-white/30 font-mono">
                          {getUnlockHint(entry.unlockCondition)}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <motion.div 
                    key={entry.id}
                    layout="position"
                    className={`rounded-xl border transition-colors overflow-hidden ${
                      isExpanded 
                        ? "border-indigo-400/50 bg-indigo-950/30 shadow-[0_0_30px_rgba(99,102,241,0.1)]" 
                        : !isRead 
                          ? "border-indigo-500/30 bg-indigo-900/10 hover:border-indigo-400/50 hover:bg-indigo-900/20 cursor-pointer" 
                          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 cursor-pointer"
                    }`}
                  >
                    <div 
                      onClick={() => handleEntryClick(entry.id, true)}
                      className="flex items-center gap-4 p-4"
                    >
                      <div className={`h-10 w-10 shrink-0 rounded-lg flex items-center justify-center ${
                        !isRead ? "bg-indigo-500/20 text-indigo-300" : "bg-white/10 text-white/50"
                      }`}>
                        {DYNAMIC_ICONS[entry.icon] || <FileText size={18} />}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-sm font-black uppercase tracking-widest truncate ${
                          !isRead ? "text-indigo-200" : "text-white/80"
                        }`}>
                          {localize(entry.title)}
                        </h4>
                      </div>
                      
                      {!isRead && (
                        <div className="shrink-0 px-2 py-1 bg-indigo-500 text-white text-[9px] font-black uppercase tracking-widest rounded shadow-[0_0_10px_rgba(99,102,241,0.8)]">
                          NEW
                        </div>
                      )}
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-6 pt-2 border-t border-indigo-500/10 text-sm text-indigo-100/70 leading-relaxed font-medium">
                            {localize(entry.content)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}