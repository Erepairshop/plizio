import type { WarRoomUnitId, WarRoomUnitDef } from "./types";

// ── Unit definitions (static data only) ────────────────────────
// 1 tick ≈ 5 seconds → 12 ticks/min → 180 ticks = 15 min

export const WARROOM_UNITS: Record<WarRoomUnitId, WarRoomUnitDef> = {
  militia: {
    id: "militia",
    icon: "⚔️",
    name: { en: "Voidwalker", hu: "Űrjáró", de: "Voidwalker", ro: "Void-Walker" },
    desc: {
      en: "Standard hull trooper. Quick to deploy for station defense.",
      hu: "Alap páncélos katona. Gyorsan bevethető az állomás védelmére.",
      de: "Standard-Hüllentruppe. Schnell einsetzbar für die Stationsverteidigung.",
      ro: "Soldat standard de carenă. Rapid de desfășurat pentru apărarea stației.",
    },
    productionTicks: 180, // 15 min
    cost: { lumen_dust: 30, sable_alloy: 20 },
    maxCount: 10,
    minLevel: 1,
  },
  ranger: {
    id: "ranger",
    icon: "🏹",
    name: { en: "Recon Probe", hu: "Felderítő szonda", de: "Aufklärungssonde", ro: "Sondă de recunoaștere" },
    desc: {
      en: "Long-range scout unit. Reveals threats beyond sensor range.",
      hu: "Nagy hatótávú felderítő. Felfedi a szenzortávon túli veszélyeket.",
      de: "Langstrecken-Aufklärer. Erkennt Bedrohungen jenseits der Sensorreichweite.",
      ro: "Unitate de recunoaștere pe distanță lungă. Detectează amenințări dincolo de raza senzorilor.",
    },
    productionTicks: 120, // 10 min
    cost: { aether_ore: 80, verdant_crystals: 50 },
    maxCount: 1,
    minLevel: 1,
  },
  shieldbearer: {
    id: "shieldbearer",
    icon: "🛡️",
    name: { en: "Aegis Sentinel", hu: "Aegis őrszem", de: "Aegis-Wächter", ro: "Santinelă Aegis" },
    desc: {
      en: "Heavy defense unit. Absorbs incoming damage during threat waves.",
      hu: "Nehéz védelmi egység. Elnyeli a támadások erejét fenyegetési hullámok idején.",
      de: "Schwere Verteidigungseinheit. Absorbiert Schaden während Bedrohungswellen.",
      ro: "Unitate grea de apărare. Absoarbe daunele în timpul valurilor de amenințare.",
    },
    productionTicks: 120, // 10 min
    cost: { ember_shards: 80, rift_stone: 60 },
    maxCount: 1,
    minLevel: 1,
  },
  scout_drone: {
    id: "scout_drone",
    icon: "🤖",
    name: { en: "Scan Drone", hu: "Pásztázó drón", de: "Scan-Drohne", ro: "Dronă de scanare" },
    desc: {
      en: "Automated surveillance drone. Fast but fragile.",
      hu: "Automatizált megfigyelő drón. Gyors, de sérülékeny.",
      de: "Automatisierte Überwachungsdrohne. Schnell, aber zerbrechlich.",
      ro: "Dronă automatizată de supraveghere. Rapidă, dar fragilă.",
    },
    productionTicks: 120, // 10 min
    cost: { verdant_crystals: 40, lumen_dust: 30 },
    maxCount: 3,
    minLevel: 1,
  },
};

/** Render order for UI cards */
export const WARROOM_UNIT_ORDER: WarRoomUnitId[] = [
  "militia",
  "ranger",
  "shieldbearer",
  "scout_drone",
];
