"use client";

import React, { useState } from "react";
import { X, Star, Book, Flame } from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import StarChamberTab from "./StarChamberTab";
import ChronicleTab from "./ChronicleTab";
import DailyTasksTab from "./DailyTasksTab";
import type { StarhallTabId } from "./starhallShared";

interface Props {
  state: StarholdState;
  lang: string;
  onClose: () => void;
  onBuy: (itemId: string) => void;
  onClaim: (milestoneId: string) => void;
  onDismissNotification: (id: string) => void;
}

const TAB_LABELS: Record<StarhallTabId, LocalizedString> = {
  chamber: { en: "Star Chamber", hu: "Csillagkamra", de: "Sternenkammer", ro: "Camera Stelară" },
  chronicle: { en: "Chronicle", hu: "Krónika", de: "Chronik", ro: "Cronică" },
  daily: { en: "Field Orders", hu: "Napi Feladatok", de: "Tagesbefehle", ro: "Ordine Zilnice" },
};

export default function StarhallPanel({
  state,
  lang,
  onClose,
  onBuy,
  onClaim,
  onDismissNotification,
}: Props) {
  const [tab, setTab] = useState<StarhallTabId>("chamber");
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const unread = state.notifications?.unreadCount ?? 0;
  const unclaimed = state.progression.unclaimedMilestones?.length ?? 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-stretch justify-end bg-black/70 backdrop-blur-md">
      <div
        className="relative w-full sm:max-w-xl flex flex-col bg-[#050810] border-l border-amber-500/15 shadow-[-20px_0_60px_rgba(0,0,0,0.6)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(251,191,36,0.06), transparent 40%), radial-gradient(circle at 100% 100%, rgba(99,102,241,0.05), transparent 55%)",
        }}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-black/40 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-300 border border-amber-400/20">
              <Star size={16} fill="currentColor" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-black uppercase tracking-widest text-white truncate">
                {localize({ en: "Starhall", hu: "Csillagterem", de: "Sternenhalle", ro: "Sala Stelară" })}
              </h2>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-black">
                {state.progression.stars}{" "}
                {localize({ en: "stars", hu: "csillag", de: "Sterne", ro: "stele" })}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 transition"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </header>

        {/* Tabs */}
        <nav className="flex border-b border-white/5 bg-black/20 shrink-0">
          <TabButton
            active={tab === "chamber"}
            label={localize(TAB_LABELS.chamber)}
            icon={<Star size={13} />}
            accent="amber"
            badge={unclaimed > 0 ? unclaimed : undefined}
            onClick={() => setTab("chamber")}
          />
          <TabButton
            active={tab === "chronicle"}
            label={localize(TAB_LABELS.chronicle)}
            icon={<Book size={13} />}
            accent="indigo"
            badge={unread > 0 ? unread : undefined}
            onClick={() => setTab("chronicle")}
          />
          <TabButton
            active={tab === "daily"}
            label={localize(TAB_LABELS.daily)}
            icon={<Flame size={13} />}
            accent="rose"
            onClick={() => setTab("daily")}
          />
        </nav>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {tab === "chamber" && (
            <StarChamberTab state={state} lang={lang} onBuy={onBuy} onClaim={onClaim} />
          )}
          {tab === "chronicle" && (
            <ChronicleTab
              state={state}
              lang={lang}
              doAction={(cmd) => {
                if (cmd.type === "DISMISS_NOTIFICATION") onDismissNotification(cmd.id);
              }}
            />
          )}
          {tab === "daily" && <DailyTasksTab state={state} lang={lang} onClaim={onClaim} />}
        </div>
      </div>
    </div>
  );
}

interface TabButtonProps {
  active: boolean;
  label: string;
  icon: React.ReactNode;
  accent: "amber" | "indigo" | "rose";
  badge?: number;
  onClick: () => void;
}

const ACCENT_CLASS: Record<TabButtonProps["accent"], string> = {
  amber: "border-amber-400 text-amber-200",
  indigo: "border-indigo-400 text-indigo-200",
  rose: "border-rose-400 text-rose-200",
};

function TabButton({ active, label, icon, accent, badge, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex-1 flex items-center justify-center gap-2 px-3 py-3 text-[10px] font-black uppercase tracking-widest border-b-2 transition-all ${
        active ? ACCENT_CLASS[accent] : "border-transparent text-white/40 hover:text-white/80 hover:bg-white/[0.03]"
      }`}
    >
      {icon}
      <span className="truncate">{label}</span>
      {badge != null && badge > 0 && (
        <span className="ml-1 min-w-[16px] h-4 px-1 rounded-full bg-amber-400 text-black text-[9px] font-black flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
}
