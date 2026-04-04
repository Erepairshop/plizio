"use client";

import { motion } from "framer-motion";
import { Clock, Swords, Wrench, ArrowUpCircle, Skull, Globe, Rocket, Package } from "lucide-react";
import type { OfflineProgressReport } from "@/lib/gravitas/sim/offlineProgress";

interface OfflineProgressPopupProps {
  report: OfflineProgressReport;
  onDismiss: () => void;
  lang: string;
}

const UNIT_NAMES: Record<string, Record<string, string>> = {
  sentinel: { en: "Sentinel", hu: "Sentinel", de: "Sentinel", ro: "Sentinel" },
  vanguard: { en: "Vanguard", hu: "Vanguard", de: "Vanguard", ro: "Vanguard" },
  wraith:   { en: "Wraith",   hu: "Wraith",   de: "Wraith",   ro: "Wraith" },
  nexus:    { en: "Nexus",    hu: "Nexus",     de: "Nexus",    ro: "Nexus" },
};

const MODULE_NAMES: Record<string, Record<string, string>> = {
  reactor:   { en: "Reactor",   hu: "Reaktor",   de: "Reaktor",   ro: "Reactor" },
  logistics: { en: "Logistics", hu: "Logisztika", de: "Logistik",  ro: "Logistică" },
  core:      { en: "Core",      hu: "Mag",        de: "Kern",      ro: "Nucleu" },
  sensor:    { en: "Sensor",    hu: "Szenzor",    de: "Sensor",    ro: "Senzor" },
  warroom:   { en: "War Room",  hu: "Hadszoba",   de: "Kriegsraum",ro: "Cameră de război" },
  repairbay: { en: "Repair Bay",hu: "Javítóműhely",de:"Reparaturbucht",ro:"Baie de reparații" },
};

const TITLES: Record<string, string> = {
  en: "While you were away...",
  hu: "Amíg távol voltál...",
  de: "Während du weg warst...",
  ro: "Cât ai fost plecat...",
};

const OK_LABEL: Record<string, string> = {
  en: "Continue",
  hu: "Tovább",
  de: "Weiter",
  ro: "Continuă",
};

function formatDuration(ms: number, lang: string): string {
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const mins = Math.floor((ms % 3_600_000) / 60_000);
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins}m`;
}

function loc(map: Record<string, string>, lang: string): string {
  return map[lang] ?? map.en ?? "";
}

interface ReportLine {
  icon: React.ReactNode;
  text: string;
  positive?: boolean;
  negative?: boolean;
}

export default function OfflineProgressPopup({ report, onDismiss, lang }: OfflineProgressPopupProps) {
  const lines: ReportLine[] = [];

  // Training completions
  for (const t of report.completedTraining) {
    const name = UNIT_NAMES[t.unitId]?.[lang] ?? t.unitId;
    lines.push({
      icon: <Swords size={14} />,
      text: `${t.batchSize}× ${name} (Lv${t.level})`,
      positive: true,
    });
  }

  // Repair completions
  for (const r of report.completedRepairs) {
    const name = UNIT_NAMES[r.unitId]?.[lang] ?? r.unitId;
    lines.push({
      icon: <Wrench size={14} />,
      text: `${r.count}× ${name}`,
      positive: true,
    });
  }

  // Module upgrades
  for (const u of report.completedUpgrades) {
    const name = MODULE_NAMES[u.moduleId]?.[lang] ?? u.moduleId;
    lines.push({
      icon: <ArrowUpCircle size={14} />,
      text: `${name} → Lv${u.newLevel}`,
      positive: true,
    });
  }

  // Decayed wounded
  if (report.decayedWounded > 0) {
    const label = lang === "hu" ? "sebesült katona meghalt" : lang === "de" ? "verwundete Soldaten gestorben" : lang === "ro" ? "soldați răniți au murit" : "wounded soldiers died";
    lines.push({
      icon: <Skull size={14} />,
      text: `${report.decayedWounded} ${label}`,
      negative: true,
    });
  }

  // Phase changes
  for (const p of report.phaseChanges) {
    lines.push({
      icon: <Globe size={14} />,
      text: `${p.from} → ${p.to}`,
    });
  }

  // Drone missions
  if (report.completedMissions > 0) {
    const label = lang === "hu" ? "drón küldetés tért vissza" : lang === "de" ? "Drohnenmission(en) zurückgekehrt" : lang === "ro" ? "misiuni drone s-au întors" : "drone mission(s) returned";
    lines.push({
      icon: <Rocket size={14} />,
      text: `${report.completedMissions} ${label}`,
      positive: true,
    });
  }

  // Gathered materials
  const matEntries = Object.entries(report.gatheredMaterials).filter(([, v]) => v && v > 0);
  if (matEntries.length > 0) {
    const matStr = matEntries.map(([k, v]) => `${k.split("_")[0].substring(0, 2).toUpperCase()} +${v}`).join(", ");
    lines.push({
      icon: <Package size={14} />,
      text: matStr,
      positive: true,
    });
  }

  // Delayed effects
  if (report.triggeredDelayedEffects > 0) {
    const label = lang === "hu" ? "késleltetett hatás aktiválódott" : lang === "de" ? "verzögerte Effekte ausgelöst" : lang === "ro" ? "efecte întârziate activate" : "delayed effect(s) triggered";
    lines.push({
      icon: <Clock size={14} />,
      text: `${report.triggeredDelayedEffects} ${label}`,
    });
  }

  if (lines.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[50] flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onDismiss}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative z-10 w-[90vw] max-w-md bg-zinc-900/95 border border-white/10 rounded-2xl p-5 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-black text-white/90 tracking-tight">
            {TITLES[lang] ?? TITLES.en}
          </h2>
          <p className="text-xs text-cyan-400/80 font-mono mt-1">
            {formatDuration(report.offlineDurationMs, lang)}
          </p>
        </div>

        {/* Report lines */}
        <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border ${
                line.negative
                  ? "bg-red-900/10 border-red-500/20"
                  : line.positive
                  ? "bg-emerald-900/10 border-emerald-500/20"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <span className={
                line.negative ? "text-red-400" : line.positive ? "text-emerald-400" : "text-white/60"
              }>
                {line.icon}
              </span>
              <span className={`text-sm font-medium ${
                line.negative ? "text-red-300" : line.positive ? "text-emerald-300" : "text-white/70"
              }`}>
                {line.text}
              </span>
            </div>
          ))}
        </div>

        {/* Dismiss */}
        <button
          onClick={onDismiss}
          className="w-full mt-5 py-2.5 rounded-xl bg-cyan-600/20 border border-cyan-400/30 hover:bg-cyan-600/40 transition-colors text-sm font-black text-cyan-300 tracking-wide"
        >
          {OK_LABEL[lang] ?? OK_LABEL.en}
        </button>
      </motion.div>
    </div>
  );
}
