"use client";

import React from "react";
import {
  Bell,
  AlertTriangle,
  ArrowUpCircle,
  FlaskConical,
  Eye,
  Calendar,
  ArrowLeftRight,
  Scale,
  Wrench,
  Users,
  Globe,
  Check,
} from "lucide-react";
import type { StarholdState, LocalizedString, StarholdCommand } from "@/lib/gravitas/sim/types";
import type { NotificationEntry, NotificationType } from "@/lib/gravitas/sim/notifications/types";
import { formatRelativeTime } from "./starhallShared";

interface Props {
  state: StarholdState;
  lang: string;
  doAction: (cmd: StarholdCommand, color: string) => void;
}

const TYPE_ICONS: Record<NotificationType, React.ReactNode> = {
  research: <FlaskConical size={14} />,
  upgrade: <ArrowUpCircle size={14} />,
  raid: <AlertTriangle size={14} />,
  exposure: <Eye size={14} />,
  weekly: <Calendar size={14} />,
  trade: <ArrowLeftRight size={14} />,
  dilemma: <Scale size={14} />,
  repair: <Wrench size={14} />,
  training: <Users size={14} />,
  system: <Globe size={14} />,
  espionage: <Eye size={14} />,
  general: <Bell size={14} />,
};

const TYPE_RING: Record<NotificationType, string> = {
  research: "border-cyan-400/35 text-cyan-300 bg-cyan-400/5",
  upgrade: "border-emerald-400/35 text-emerald-300 bg-emerald-400/5",
  raid: "border-rose-400/35 text-rose-300 bg-rose-400/5",
  exposure: "border-rose-500/35 text-rose-300 bg-rose-500/5",
  weekly: "border-amber-400/35 text-amber-300 bg-amber-400/5",
  trade: "border-amber-300/35 text-amber-200 bg-amber-300/5",
  dilemma: "border-indigo-400/35 text-indigo-300 bg-indigo-400/5",
  repair: "border-emerald-300/35 text-emerald-200 bg-emerald-300/5",
  training: "border-cyan-300/35 text-cyan-200 bg-cyan-300/5",
  system: "border-purple-400/35 text-purple-300 bg-purple-400/5",
  espionage: "border-purple-500/35 text-purple-300 bg-purple-500/5",
  general: "border-white/15 text-white/70 bg-white/5",
};

export default function ChronicleTab({ state, lang, doAction }: Props) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  const entries = [...(state.notifications?.queue ?? [])].sort((a, b) => b.timestamp - a.timestamp);

  const handleDismiss = (id: string) => {
    doAction({ type: "DISMISS_NOTIFICATION", id }, "rgba(255,255,255,0.1)");
  };

  return (
    <div className="flex flex-col gap-3 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-black">
          {localize({ en: "Station Chronicle", hu: "Állomás Krónika", de: "Stationschronik", ro: "Cronica Stației" })}
        </h3>
        <div className="text-[10px] text-white/40 font-black">
          {entries.length} {localize({ en: "entries", hu: "bejegyzés", de: "Einträge", ro: "intrări" })}
        </div>
      </div>

      {entries.length === 0 ? (
        <div className="py-10 text-center text-white/30 text-xs italic border border-dashed border-white/10 rounded-xl">
          {localize({
            en: "No chronicle entries yet. The station hums quietly.",
            hu: "Még nincs krónika bejegyzés. Az állomás csendesen zümmög.",
            de: "Noch keine Chronikeinträge. Die Station brummt leise.",
            ro: "Încă nu există intrări. Stația murmură liniștit.",
          })}
        </div>
      ) : (
        <ul className="space-y-2">
          {entries.map((entry: NotificationEntry) => {
            const ring = TYPE_RING[entry.type] ?? TYPE_RING.general;
            return (
              <li
                key={entry.id}
                className={`rounded-xl border px-3 py-2.5 flex items-start gap-3 ${ring} ${
                  entry.read ? "opacity-60" : ""
                }`}
              >
                <div className="mt-0.5 shrink-0">{TYPE_ICONS[entry.type] ?? <Bell size={14} />}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="text-[11px] font-black uppercase tracking-widest text-white truncate">
                      {localize(entry.title)}
                    </div>
                    {!entry.read && (
                      <span className="px-1 rounded bg-white/10 text-[8px] font-black uppercase tracking-widest text-white/80">
                        new
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-white/60 leading-snug line-clamp-3">{localize(entry.message)}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-white/30">{formatRelativeTime(entry.timestamp)}</span>
                    <button
                      onClick={() => handleDismiss(entry.id)}
                      className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition"
                    >
                      <Check size={10} />
                      {localize({ en: "Dismiss", hu: "Elrejt", de: "Schliessen", ro: "Închide" })}
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
