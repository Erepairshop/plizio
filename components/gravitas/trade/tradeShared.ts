import type { LocalizedString } from "@/lib/gravitas/sim/types";
import type { FactionId } from "@/lib/gravitas/sim/faction/types";

export const FACTION_NAMES: Record<FactionId, string> = {
  korgath: "Korgath",
  velari: "Velari",
  drex: "Drex",
  synthoid: "Synthoid",
  noma: "Noma",
};

export const FACTION_COLORS: Record<FactionId, string> = {
  korgath: "text-red-400 bg-red-400/10 border-red-400/30",
  velari: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  drex: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  synthoid: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
  noma: "text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/30",
};

export const MATERIAL_MAP: Record<string, { code: string; color: string; label: LocalizedString }> = {
  lumen_dust: {
    code: "LD",
    color: "text-amber-300",
    label: { en: "Lumen Dust", hu: "Lumen Por", de: "Lumenstaub", ro: "Praf Lumen" },
  },
  verdant_crystals: {
    code: "VC",
    color: "text-emerald-300",
    label: { en: "Verdant Crystals", hu: "Zöld Kristály", de: "Grüne Kristalle", ro: "Cristale Verzi" },
  },
  aether_ore: {
    code: "AO",
    color: "text-blue-300",
    label: { en: "Aether Ore", hu: "Éter Érc", de: "Äthererz", ro: "Minereu Aether" },
  },
  ember_shards: {
    code: "ES",
    color: "text-rose-300",
    label: { en: "Ember Shards", hu: "Parázs Szilánk", de: "Glutsplitter", ro: "Cioburi de Jar" },
  },
  sable_alloy: {
    code: "SA",
    color: "text-slate-300",
    label: { en: "Sable Alloy", hu: "Sötét Ötvözet", de: "Zobellegierung", ro: "Aliaj Zibel" },
  },
  rift_stone: {
    code: "RS",
    color: "text-fuchsia-300",
    label: { en: "Rift Stone", hu: "Hasadékkő", de: "Riss-Stein", ro: "Piatră de Rift" },
  },
};

export function formatDuration(ms: number): string {
  if (ms <= 0) return "0s";
  const h = Math.floor(ms / (60 * 60 * 1000));
  const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  const s = Math.floor((ms % (60 * 1000)) / 1000);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export function localizeWith(lang: string) {
  return (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
}
