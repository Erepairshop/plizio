"use client";

import { X, Bell, Trash2, FlaskConical, ArrowUpCircle, AlertTriangle, Eye, Calendar, ArrowLeftRight, Scale, Wrench, Users, Globe, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { StarholdState, StarholdCommand, LocalizedString } from "@/lib/gravitas/sim/types";
import type { NotificationEntry, NotificationType } from "@/lib/gravitas/sim/notifications/types";

interface NotificationPanelProps {
  state: StarholdState;
  doAction: (cmd: StarholdCommand, color: string) => void;
  onClose: () => void;
  lang: string;
}

const TYPE_ICONS: Record<NotificationType, React.ReactNode> = {
  research: <FlaskConical size={16} />,
  upgrade: <ArrowUpCircle size={16} />,
  raid: <AlertTriangle size={16} />,
  exposure: <Eye size={16} />,
  weekly: <Calendar size={16} />,
  trade: <ArrowLeftRight size={16} />,
  dilemma: <Scale size={16} />,
  repair: <Wrench size={16} />,
  training: <Users size={16} />,
  system: <Globe size={16} />,
  espionage: <Eye size={16} />,
  general: <Bell size={16} />,
};

const TYPE_COLORS: Record<NotificationType, string> = {
  research: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
  upgrade: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  raid: "text-rose-400 bg-rose-400/10 border-rose-400/30",
  exposure: "text-rose-500 bg-rose-500/10 border-rose-500/30",
  weekly: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  trade: "text-amber-300 bg-amber-300/10 border-amber-300/30",
  dilemma: "text-indigo-400 bg-indigo-400/10 border-indigo-400/30",
  repair: "text-emerald-300 bg-emerald-300/10 border-emerald-300/30",
  training: "text-cyan-300 bg-cyan-300/10 border-cyan-300/30",
  system: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  espionage: "text-purple-500 bg-purple-500/10 border-purple-500/30",
  general: "text-white/80 bg-white/10 border-white/20",
};

function formatTimeAgo(timestamp: number): string {
  const diff = Date.now() - timestamp;
  if (diff < 60000) return "Just now";
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  return `${h}h ago`;
}

export default function NotificationPanel({ state, doAction, onClose, lang }: NotificationPanelProps) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  const dispatchColor = "rgba(255,255,255,0.15)";

  const notifications = state.notifications?.queue ?? [];

  const handleDismiss = (id: string) => {
    doAction({ type: "DISMISS_NOTIFICATION", id }, dispatchColor);
  };

  const handleMarkAllRead = () => {
    doAction({ type: "MARK_NOTIFICATIONS_READ" }, dispatchColor);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 top-20 z-[60] bg-[#0a0f1e]/95 backdrop-blur-2xl border-t border-white/10 rounded-t-[32px] flex flex-col max-h-[85vh] lg:max-h-none">
      <div className="sticky top-0 z-10 bg-[#0a0f1e]/80 backdrop-blur-md flex items-center justify-between p-6 border-b border-white/5 rounded-t-[32px]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
            <Bell size={20} />
          </div>
          <div>
            <h2 className="text-lg font-black uppercase tracking-tight text-white">
              {localize({ en: "Notifications", hu: "Értesítések", de: "Benachrichtigungen", ro: "Notificări" })}
            </h2>
            <div className="text-[10px] text-blue-200/60 font-medium tracking-wider">
              {state.notifications?.unreadCount ?? 0} Unread
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={handleMarkAllRead}
            disabled={notifications.length === 0}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition disabled:opacity-30"
          >
            <Check size={12} />
            {localize({ en: "Mark All Read", hu: "Összes olvasott", de: "Alle als gelesen markieren", ro: "Marchează toate ca citite" })}
          </button>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition text-white">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-32 space-y-3">
        <AnimatePresence initial={false}>
          {notifications.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 text-white/30"
            >
              <Bell size={48} className="mb-4 opacity-20" />
              <p className="text-sm font-black uppercase tracking-widest">
                {localize({ en: "No new notifications", hu: "Nincsenek új értesítések", de: "Keine neuen Benachrichtigungen", ro: "Nicio notificare nouă" })}
              </p>
            </motion.div>
          ) : (
            notifications.map(notif => {
              const iconStyle = TYPE_COLORS[notif.type] || TYPE_COLORS.general;
              const IconComp = TYPE_ICONS[notif.type] || TYPE_ICONS.general;
              
              return (
                <motion.div
                  key={notif.id}
                  layout="position"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl border transition-colors ${notif.read ? "bg-white/5 border-white/5 opacity-70" : "bg-white/10 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"}`}
                >
                  <div className={`p-3 rounded-lg border shrink-0 ${iconStyle}`}>
                    {IconComp}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-black uppercase tracking-widest ${notif.read ? "text-white/40" : "text-white/80"}`}>
                        {notif.type}
                      </span>
                      <span className="text-[10px] text-white/30 font-mono">
                        • {formatTimeAgo(notif.timestamp)}
                      </span>
                      {!notif.read && (
                        <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
                      )}
                    </div>
                    <div className={`text-sm leading-relaxed ${notif.read ? "text-white/60" : "text-white font-medium"}`}>
                      {localize(notif.message)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDismiss(notif.id)}
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white/30 hover:text-rose-400 hover:bg-rose-400/10 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}