import type { WarRoomUnitId, WarRoomUnitDef } from "./types";
import { UNIT_COSTS } from "../../economy";

// ── Unit definitions ──────────────────────────────────────────
// Costs & limits come from economy.ts (single source of truth)

export const WARROOM_UNITS: Record<WarRoomUnitId, WarRoomUnitDef> = {
  sentinel: {
    id: "sentinel",
    icon: "🛡️",
    name: { en: "Sentinel", hu: "Orszem", de: "Wachter", ro: "Santinela" },
    desc: {
      en: "Heavy front-line guardian with high survivability.",
      hu: "Nehéz frontvonalbeli vedo, kiemelkedo tulelessel.",
      de: "Schwerer Frontwachter mit hoher Uberlebensfahigkeit.",
      ro: "Gardian greu de prima linie cu supravietuire ridicata.",
    },
    role: "tank",
    focus: {
      en: "Defense and high HP",
      hu: "Vedelem es magas HP",
      de: "Verteidigung und hohe HP",
      ro: "Aparare si HP ridicat",
    },
    baseStats: { attack: 8, defense: 28, speed: 6, hp: 45 },
    cost: UNIT_COSTS.sentinel,
    minLevel: 1,
  },
  vanguard: {
    id: "vanguard",
    icon: "⚔",
    name: { en: "Vanguard", hu: "Elharcos", de: "Vorhut", ro: "Avangarda" },
    desc: {
      en: "Assault spearhead focused on raw firepower.",
      hu: "Tamado elorseg, amely tiszta tuzerore epul.",
      de: "Sturm-Vorhut mit Fokus auf rohe Feuerkraft.",
      ro: "Varf de asalt orientat pe putere de foc.",
    },
    role: "assault",
    focus: {
      en: "Offense and firepower",
      hu: "Tamadas es tuzero",
      de: "Angriff und Feuerkraft",
      ro: "Ofensiva si putere de foc",
    },
    baseStats: { attack: 24, defense: 12, speed: 16, hp: 28 },
    cost: UNIT_COSTS.vanguard,
    minLevel: 1,
  },
  wraith: {
    id: "wraith",
    icon: "🛰",
    name: { en: "Wraith", hu: "Arnyek", de: "Phantom", ro: "Fantoma" },
    desc: {
      en: "Fast recon operative for intel and tactical openings.",
      hu: "Gyors felderito egyseg intelre es taktikai nyitasokra.",
      de: "Schnelle Aufklarungseinheit fur Intel und Taktikfenster.",
      ro: "Unitate rapida de recunoastere pentru intel si fereastra tactica.",
    },
    role: "recon",
    focus: {
      en: "Tactics, intel, speed",
      hu: "Taktika, intel, gyorsasag",
      de: "Taktik, Intel, Tempo",
      ro: "Tactica, intel, viteza",
    },
    baseStats: { attack: 14, defense: 10, speed: 26, hp: 20 },
    cost: UNIT_COSTS.wraith,
    minLevel: 1,
  },
  nexus: {
    id: "nexus",
    icon: "🤖",
    name: { en: "Nexus Drone", hu: "Nexus Dron", de: "Nexus-Drohne", ro: "Drona Nexus" },
    desc: {
      en: "Support drone for buffs, energy routing, and battlefield sustain.",
      hu: "Tamogato dron buffokhoz, energia-atereszteshez es harcteri fenntartashoz.",
      de: "Support-Drohne fur Buffs, Energiefluss und Kampffeld-Stabilitat.",
      ro: "Drona suport pentru buffuri, energie si sustain pe campul de lupta.",
    },
    role: "support",
    focus: {
      en: "Buff, energy, heal",
      hu: "Buff, energia, heal",
      de: "Buff, Energie, Heilung",
      ro: "Buff, energie, vindecare",
    },
    baseStats: { attack: 6, defense: 14, speed: 12, hp: 22 },
    cost: UNIT_COSTS.nexus,
    minLevel: 1,
  },
};

/** Render order for UI cards */
export const WARROOM_UNIT_ORDER: WarRoomUnitId[] = [
  "sentinel",
  "vanguard",
  "wraith",
  "nexus",
];

export function getScaledUnitStats(unitId: WarRoomUnitId, level: number) {
  const def = WARROOM_UNITS[unitId];
  const safeLevel = Math.max(1, Math.min(10, Math.floor(level)));
  const scale = 1 + (safeLevel - 1) * 0.15;
  return {
    attack: Math.round(def.baseStats.attack * scale),
    defense: Math.round(def.baseStats.defense * scale),
    speed: Math.round(def.baseStats.speed * scale),
    hp: Math.round(def.baseStats.hp * scale),
  };
}
