import type { CSSProperties } from "react";
import type { GalaxyNode } from "@/lib/gravitas/world";

export function getNodeAuraStyle(node: GalaxyNode): CSSProperties {
  if (node.type === "base") {
    return {
      background:
        "radial-gradient(circle, rgba(34,211,238,0.28) 0%, rgba(34,211,238,0.14) 28%, rgba(34,211,238,0.05) 50%, transparent 74%)",
    };
  }
  if (node.type === "battle") {
    return {
      background:
        "radial-gradient(circle, rgba(251,146,60,0.26) 0%, rgba(251,146,60,0.12) 28%, rgba(251,146,60,0.05) 52%, transparent 76%)",
    };
  }
  if (node.type === "resource") {
    const materialId = node.materialId ?? "aether_ore";
    const palette: Record<string, string> = {
      lumen_dust: "rgba(167,139,250,0.24)",
      verdant_crystals: "rgba(74,222,128,0.24)",
      aether_ore: "rgba(34,211,238,0.24)",
      ember_shards: "rgba(251,191,36,0.24)",
      sable_alloy: "rgba(148,163,184,0.22)",
      rift_stone: "rgba(56,189,248,0.24)",
    };
    const color = palette[materialId] ?? "rgba(34,211,238,0.24)";
    return {
      background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0.12) 28%, rgba(255,255,255,0.05) 54%, transparent 78%)`,
    };
  }
  return {
    background:
      "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 32%, rgba(255,255,255,0.03) 58%, transparent 78%)",
  };
}

export function localizeGalaxy<T extends { en: string; hu?: string; de?: string; ro?: string }>(
  lang: "en" | "hu" | "de" | "ro",
  ls: T,
): string {
  return (ls as any)[lang] ?? ls.en;
}
