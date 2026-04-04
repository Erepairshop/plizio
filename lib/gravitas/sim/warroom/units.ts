import type { WarRoomUnitId, WarRoomUnitDef } from "./types";

// ── Unit definitions (static data only) ────────────────────────

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
    productionTicks: 12,
    cost: { materials: 5 },
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
    productionTicks: 18,
    cost: { materials: 8 },
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
    productionTicks: 24,
    cost: { materials: 12 },
    minLevel: 1,
  },
  scout_drone: {
    id: "scout_drone",
    icon: "🤖",
    name: { en: "Scan Drone", hu: "Pásztázó drón", de: "Scan-Drohne", ro: "Dronă de scanare" },
    desc: {
      en: "Automated surveillance drone. Fast but requires power to maintain.",
      hu: "Automatizált megfigyelő drón. Gyors, de energiát igényel.",
      de: "Automatisierte Überwachungsdrohne. Schnell, benötigt aber Energie.",
      ro: "Dronă automatizată de supraveghere. Rapidă, dar necesită energie.",
    },
    productionTicks: 9,
    cost: { materials: 6, power: 2 },
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
