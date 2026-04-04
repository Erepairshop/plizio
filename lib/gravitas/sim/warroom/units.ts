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
  korgath_berserker: {
    id: "korgath_berserker",
    icon: "🪓",
    name: { en: "Korgath Berserker", hu: "Korgath Berserker", de: "Korgath Berserker", ro: "Berserker Korgath" },
    desc: { en: "Elite pirate assault force.", hu: "Elit kalóz rohamcsapat.", de: "Elitäre Piraten-Sturmtruppe.", ro: "Forță de asalt de elită pirat." },
    role: "assault", focus: { en: "Extreme damage", hu: "Extrém sebzés", de: "Extremer Schaden", ro: "Daune extreme" },
    baseStats: { attack: 40, defense: 15, speed: 18, hp: 40 }, cost: UNIT_COSTS.korgath_berserker, minLevel: 10, requiredFaction: "korgath"
  },
  velari_shadow: {
    id: "velari_shadow",
    icon: "🥷",
    name: { en: "Velari Shadow", hu: "Velari Árnyék", de: "Velari Schatten", ro: "Umbră Velari" },
    desc: { en: "Extremely fast stealth operative.", hu: "Extrém gyors lopakodó ügynök.", de: "Extrem schnelle Tarnkappeneinheit.", ro: "Agent invizibil extrem de rapid." },
    role: "recon", focus: { en: "Extreme speed", hu: "Extrém sebesség", de: "Extreme Geschwindigkeit", ro: "Viteză extremă" },
    baseStats: { attack: 25, defense: 12, speed: 45, hp: 25 }, cost: UNIT_COSTS.velari_shadow, minLevel: 10, requiredFaction: "velari"
  },
  drex_marauder: {
    id: "drex_marauder",
    icon: "🐜",
    name: { en: "Drex Marauder", hu: "Drex Fosztogató", de: "Drex Plünderer", ro: "Prădător Drex" },
    desc: { en: "Swarm assault unit with high resilience.", hu: "Raj támadó egység nagy szívóssággal.", de: "Schwarm-Sturmeinheit mit hoher Widerstandskraft.", ro: "Unitate de asalt roi cu rezistență ridicată." },
    role: "assault", focus: { en: "Balanced assault", hu: "Kiegyensúlyozott roham", de: "Ausgewogener Angriff", ro: "Asalt echilibrat" },
    baseStats: { attack: 30, defense: 20, speed: 20, hp: 35 }, cost: UNIT_COSTS.drex_marauder, minLevel: 10, requiredFaction: "drex"
  },
  synthoid_titan: {
    id: "synthoid_titan",
    icon: "🦾",
    name: { en: "Synthoid Titan", hu: "Synthoid Titán", de: "Synthoid Titan", ro: "Titan Synthoid" },
    desc: { en: "Massive mechanized fortress.", hu: "Hatalmas gépesített erőd.", de: "Massive mechanisierte Festung.", ro: "Fortăreață mecanizată masivă." },
    role: "tank", focus: { en: "Extreme defense", hu: "Extrém védelem", de: "Extreme Verteidigung", ro: "Apărare extremă" },
    baseStats: { attack: 15, defense: 60, speed: 5, hp: 80 }, cost: UNIT_COSTS.synthoid_titan, minLevel: 10, requiredFaction: "synthoid"
  },
  noma_weaver: {
    id: "noma_weaver",
    icon: "🔮",
    name: { en: "Noma Weaver", hu: "Noma Szövő", de: "Noma Weber", ro: "Țesător Noma" },
    desc: { en: "Mystical support manipulating the battlefield.", hu: "Misztikus támogató a harctér manipulálásához.", de: "Mystischer Support zur Manipulation des Schlachtfelds.", ro: "Suport mistic care manipulează câmpul de luptă." },
    role: "support", focus: { en: "Tactical support", hu: "Taktikai támogatás", de: "Taktischer Support", ro: "Suport tactic" },
    baseStats: { attack: 10, defense: 30, speed: 25, hp: 35 }, cost: UNIT_COSTS.noma_weaver, minLevel: 10, requiredFaction: "noma"
  },
};

/** Render order for UI cards */
export const WARROOM_UNIT_ORDER: WarRoomUnitId[] = [
  "sentinel",
  "vanguard",
  "wraith",
  "nexus",
  "korgath_berserker",
  "velari_shadow",
  "drex_marauder",
  "synthoid_titan",
  "noma_weaver",
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
