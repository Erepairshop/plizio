"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Swords,
  Wrench,
  ArrowUpCircle,
  Skull,
  Globe,
  Rocket,
  Package,
  Clock,
  Radio,
  ShieldAlert,
} from "lucide-react";
import type { OfflineProgressReport } from "@/lib/gravitas/sim/offlineProgress";

/* ────────────────────────── i18n ────────────────────────── */

const UNIT_NAMES: Record<string, Record<string, string>> = {
  sentinel: { en: "Sentinel", hu: "Sentinel", de: "Sentinel", ro: "Sentinel" },
  vanguard: { en: "Vanguard", hu: "Vanguard", de: "Vanguard", ro: "Vanguard" },
  wraith:   { en: "Wraith",   hu: "Wraith",   de: "Wraith",   ro: "Wraith" },
  nexus:    { en: "Nexus",    hu: "Nexus",     de: "Nexus",    ro: "Nexus" },
};

const MODULE_NAMES: Record<string, Record<string, string>> = {
  reactor:   { en: "Reactor",   hu: "Reaktor",    de: "Reaktor",    ro: "Reactor" },
  logistics: { en: "Logistics", hu: "Logisztika",  de: "Logistik",   ro: "Logistică" },
  core:      { en: "Core",      hu: "Mag",         de: "Kern",       ro: "Nucleu" },
  sensor:    { en: "Sensor",    hu: "Szenzor",     de: "Sensor",     ro: "Senzor" },
  warroom:   { en: "War Room",  hu: "Hadszoba",    de: "Kriegsraum", ro: "Cameră de război" },
  repairbay: { en: "Repair Bay",hu: "Javítóműhely",de: "Reparaturbucht", ro: "Baie de reparații" },
};

const L = {
  title:     { en: "SYSTEM WAKEUP",          hu: "RENDSZER ÉBREDÉS",           de: "SYSTEM-AUFWACHUNG",         ro: "TREZIREA SISTEMULUI" },
  subtitle:  { en: "COMMANDER'S BRIEFING",   hu: "PARANCSNOKI ELIGAZÍTÁS",     de: "KOMMANDANTEN-BRIEFING",     ro: "BRIEFING-UL COMANDANTULUI" },
  elapsed:   { en: "Time offline",           hu: "Offline idő",               de: "Offline-Zeit",              ro: "Timp offline" },
  gains:     { en: "GAINS",                  hu: "NYERESÉGEK",                de: "GEWINNE",                   ro: "CÂȘTIGURI" },
  losses:    { en: "LOSSES",                 hu: "VESZTESÉGEK",               de: "VERLUSTE",                  ro: "PIERDERI" },
  events:    { en: "EVENTS",                 hu: "ESEMÉNYEK",                 de: "EREIGNISSE",                ro: "EVENIMENTE" },
  ack:       { en: "ACKNOWLEDGE",            hu: "NYUGTÁZÁS",                 de: "BESTÄTIGEN",                ro: "CONFIRMĂ" },
  noEvents:  { en: "No significant changes", hu: "Nincs jelentős változás",   de: "Keine wesentlichen Änderungen", ro: "Nicio schimbare semnificativă" },
  trained:   { en: "trained",               hu: "kiképezve",                 de: "ausgebildet",               ro: "antrenat" },
  repaired:  { en: "repaired",              hu: "javítva",                   de: "repariert",                 ro: "reparat" },
  wounded:   { en: "wounded soldiers died",  hu: "sebesült katona meghalt",   de: "verwundete Soldaten gestorben", ro: "soldați răniți au murit" },
  droneMissions: { en: "drone mission(s) returned", hu: "drón küldetés tért vissza", de: "Drohnenmission(en) zurückgekehrt", ro: "misiuni drone s-au întors" },
  delayedFx: { en: "delayed effect(s) triggered", hu: "késleltetett hatás aktiválódott", de: "verzögerte Effekte ausgelöst", ro: "efecte întârziate activate" },
};

function t(map: Record<string, string>, lang: string): string {
  return map[lang] ?? map.en ?? "";
}

/* ────────────────────── time formatting ─────────────────── */

function formatDuration(ms: number): string {
  const days  = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const mins  = Math.floor((ms % 3_600_000) / 60_000);
  if (days > 0) return `${days}d ${hours}h ${mins}m`;
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins}m`;
}

/* ────────────────────── line builder ────────────────────── */

interface BriefingLine {
  icon: React.ReactNode;
  text: string;
  kind: "gain" | "loss" | "event";
}

function buildLines(report: OfflineProgressReport, lang: string): BriefingLine[] {
  const lines: BriefingLine[] = [];

  for (const tr of report.completedTraining) {
    const name = UNIT_NAMES[tr.unitId]?.[lang] ?? tr.unitId;
    lines.push({
      icon: <Swords size={13} />,
      text: `${tr.batchSize}× ${name} Lv${tr.level} ${t(L.trained, lang)}`,
      kind: "gain",
    });
  }

  for (const r of report.completedRepairs) {
    const name = UNIT_NAMES[r.unitId]?.[lang] ?? r.unitId;
    lines.push({
      icon: <Wrench size={13} />,
      text: `${r.count}× ${name} ${t(L.repaired, lang)}`,
      kind: "gain",
    });
  }

  for (const u of report.completedUpgrades) {
    const name = MODULE_NAMES[u.moduleId]?.[lang] ?? u.moduleId;
    lines.push({
      icon: <ArrowUpCircle size={13} />,
      text: `${name} → Lv${u.newLevel}`,
      kind: "gain",
    });
  }

  if (report.completedMissions > 0) {
    lines.push({
      icon: <Rocket size={13} />,
      text: `${report.completedMissions} ${t(L.droneMissions, lang)}`,
      kind: "gain",
    });
  }

  const matEntries = Object.entries(report.gatheredMaterials).filter(([, v]) => v && v > 0);
  if (matEntries.length > 0) {
    const matStr = matEntries
      .map(([k, v]) => `${k.split("_")[0].substring(0, 3).toUpperCase()} +${v}`)
      .join("  ");
    lines.push({
      icon: <Package size={13} />,
      text: matStr,
      kind: "gain",
    });
  }

  if (report.decayedWounded > 0) {
    lines.push({
      icon: <Skull size={13} />,
      text: `${report.decayedWounded} ${t(L.wounded, lang)}`,
      kind: "loss",
    });
  }

  for (const p of report.phaseChanges) {
    lines.push({
      icon: <Globe size={13} />,
      text: `${p.from} → ${p.to}`,
      kind: "event",
    });
  }

  if (report.triggeredDelayedEffects > 0) {
    lines.push({
      icon: <Clock size={13} />,
      text: `${report.triggeredDelayedEffects} ${t(L.delayedFx, lang)}`,
      kind: "event",
    });
  }

  return lines;
}

/* ────────────────────── animations ──────────────────────── */

const backdropV = {
  hidden: { opacity: 0 } as const,
  visible: { opacity: 1, transition: { duration: 0.5 } } as const,
  exit: { opacity: 0, transition: { duration: 0.3 } } as const,
};

const modalV = {
  hidden: { opacity: 0, y: 30, scale: 0.96 } as const,
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, damping: 22, stiffness: 200, delay: 0.15 },
  },
  exit: { opacity: 0, y: 20, scale: 0.97, transition: { duration: 0.25 } } as const,
};

const scanlineV = {
  hidden: { scaleX: 0, opacity: 0 } as const,
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.4, ease: "easeOut" as const },
  },
};

const headerV = {
  hidden: { opacity: 0, y: -8 } as const,
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.5 } } as const,
};

const sectionV = {
  hidden: { opacity: 0 } as const,
  visible: { opacity: 1, transition: { duration: 0.3 } } as const,
};

const lineV = {
  hidden: { opacity: 0, x: -12 } as const,
  visible: { opacity: 1, x: 0 } as const,
};

const btnV = {
  hidden: { opacity: 0, y: 8 } as const,
  visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.4 } } as const,
};

/* ────────────────────── component ───────────────────────── */

interface OfflineBriefingModalProps {
  report: OfflineProgressReport;
  onDismiss: () => void;
  lang: string;
}

export default function OfflineBriefingModal({
  report,
  onDismiss,
  lang,
}: OfflineBriefingModalProps) {
  const lines = buildLines(report, lang);
  const gains  = lines.filter((l) => l.kind === "gain");
  const losses = lines.filter((l) => l.kind === "loss");
  const events = lines.filter((l) => l.kind === "event");

  if (lines.length === 0) return null;

  const hasLosses = losses.length > 0;

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        variants={backdropV}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onDismiss}
      />

      {/* Modal */}
      <motion.div
        variants={modalV}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-[92vw] max-w-lg rounded-[28px] border border-cyan-500/15 bg-[#060d1b]/97 shadow-[0_0_80px_rgba(6,182,212,0.08),0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
      >
        {/* Scanline accent */}
        <motion.div
          variants={scanlineV}
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent origin-left"
        />

        {/* Header */}
        <motion.div
          variants={headerV}
          initial="hidden"
          animate="visible"
          className="pt-6 pb-4 px-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <Radio size={14} className="text-cyan-400/60 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-cyan-400/50 uppercase">
              {t(L.title, lang)}
            </span>
            <Radio size={14} className="text-cyan-400/60 animate-pulse" />
          </div>

          <h2 className="text-lg font-black tracking-[0.15em] text-white/90">
            {t(L.subtitle, lang)}
          </h2>

          {/* Time away */}
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
            <Clock size={12} className="text-cyan-400/60" />
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
              {t(L.elapsed, lang)}
            </span>
            <span className="text-sm font-mono font-bold text-cyan-300/90">
              {formatDuration(report.offlineDurationMs)}
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mx-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Content */}
        <div className="px-6 py-4 max-h-[55vh] overflow-y-auto space-y-4 scrollbar-thin">
          {/* Gains section */}
          {gains.length > 0 && (
            <motion.div
              variants={sectionV}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[1px] flex-1 bg-emerald-500/20" />
                <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-emerald-400/60 uppercase">
                  {t(L.gains, lang)}
                </span>
                <div className="h-[1px] flex-1 bg-emerald-500/20" />
              </div>
              <div className="space-y-1.5">
                {gains.map((line, i) => (
                  <motion.div
                    key={`g-${i}`}
                    variants={lineV}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 + i * 0.07, duration: 0.3 }}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-emerald-950/30 border border-emerald-500/10"
                  >
                    <span className="text-emerald-400/70">{line.icon}</span>
                    <span className="text-sm font-medium text-emerald-200/80">
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Losses section */}
          {hasLosses && (
            <motion.div
              variants={sectionV}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[1px] flex-1 bg-red-500/20" />
                <ShieldAlert size={11} className="text-red-400/50" />
                <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-red-400/60 uppercase">
                  {t(L.losses, lang)}
                </span>
                <div className="h-[1px] flex-1 bg-red-500/20" />
              </div>
              <div className="space-y-1.5">
                {losses.map((line, i) => (
                  <motion.div
                    key={`l-${i}`}
                    variants={lineV}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.0 + i * 0.07, duration: 0.3 }}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-red-950/25 border border-red-500/15"
                  >
                    <span className="text-red-400/80">{line.icon}</span>
                    <span className="text-sm font-medium text-red-200/80">
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Events section */}
          {events.length > 0 && (
            <motion.div
              variants={sectionV}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.0 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[1px] flex-1 bg-amber-500/15" />
                <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-amber-400/50 uppercase">
                  {t(L.events, lang)}
                </span>
                <div className="h-[1px] flex-1 bg-amber-500/15" />
              </div>
              <div className="space-y-1.5">
                {events.map((line, i) => (
                  <motion.div
                    key={`e-${i}`}
                    variants={lineV}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.1 + i * 0.07, duration: 0.3 }}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-amber-950/15 border border-amber-500/10"
                  >
                    <span className="text-amber-400/60">{line.icon}</span>
                    <span className="text-sm font-medium text-amber-200/70">
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom divider */}
        <div className="mx-6 h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        {/* Acknowledge button */}
        <motion.div
          variants={btnV}
          initial="hidden"
          animate="visible"
          className="px-6 pt-4 pb-5"
        >
          <button
            onClick={onDismiss}
            className="w-full py-3 rounded-xl font-black text-sm tracking-[0.2em] uppercase transition-all duration-300 border border-cyan-400/40 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/25 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] active:scale-[0.98]"
          >
            {t(L.ack, lang)}
          </button>
        </motion.div>

        {/* Bottom scanline */}
        <motion.div
          variants={scanlineV}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent origin-right"
        />
      </motion.div>
    </div>
  );
}
