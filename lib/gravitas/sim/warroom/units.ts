import type { WarRoomUnitId, WarRoomUnitDef } from "./types";
import { UNIT_COSTS } from "../../economy";

// ── Unit definitions ──────────────────────────────────────────
// Costs & limits come from economy.ts (single source of truth)

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
    productionTicks: UNIT_COSTS.militia.productionTicks,
    cost: UNIT_COSTS.militia.cost,
    maxCount: UNIT_COSTS.militia.maxCount,
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
    productionTicks: UNIT_COSTS.ranger.productionTicks,
    cost: UNIT_COSTS.ranger.cost,
    maxCount: UNIT_COSTS.ranger.maxCount,
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
    productionTicks: UNIT_COSTS.shieldbearer.productionTicks,
    cost: UNIT_COSTS.shieldbearer.cost,
    maxCount: UNIT_COSTS.shieldbearer.maxCount,
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
    productionTicks: UNIT_COSTS.scout_drone.productionTicks,
    cost: UNIT_COSTS.scout_drone.cost,
    maxCount: UNIT_COSTS.scout_drone.maxCount,
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
