import type { StarChamberItem } from "./types";

export const STAR_CHAMBER_ITEMS: StarChamberItem[] = [
  // --- MOBILITY ---
  {
    id: "phase_gate",
    category: "mobility",
    name: { en: "Phase Gate", hu: "Fáziskapu", de: "Phasentor", ro: "Poarta de Fază" },
    description: { 
      en: "Instantly teleport a fleet to any discovered node. High power cost.", 
      hu: "Azonnal teleportál egy flottát bármely felfedezett ponthoz. Magas energiaköltség.", 
      de: "Teleportiert eine Flotte sofort zu einem entdeckten Knoten. Hohe Energiekosten.", 
      ro: "Teleportează instantaneu o flotă la orice nod descoperit. Cost mare de energie." 
    },
    unlockStarCost: 15,
    activationResourceCost: { power: 25 },
    cooldownTicks: 3600, // 1 hour
    requirements: { coreLevel: 5 },
  },
  {
    id: "emergency_recall",
    category: "mobility",
    name: { en: "Emergency Recall Core", hu: "Vészvisszahívó Mag", de: "Notrückruf-Kern", ro: "Nucleu de Rechemare" },
    description: { 
      en: "Instantly return all active fleets to the Starhold. No fuel cost.", 
      hu: "Azonnal visszahív minden aktív flottát a Starholdba. Nincs üzemanyagköltség.", 
      de: "Ruft alle aktiven Flotten sofort zum Starhold zurück. Keine Treibstoffkosten.", 
      ro: "Recheamă instantaneu toate flotele active la Starhold. Fără cost de combustibil." 
    },
    unlockStarCost: 10,
    activationResourceCost: { supply: 15 },
    cooldownTicks: 7200, // 2 hours
    requirements: { coreLevel: 3 },
  },

  // --- SUPPORT ---
  {
    id: "repair_burst",
    category: "support",
    name: { en: "Repair Burst", hu: "Javító Hullám", de: "Reparaturstoß", ro: "Impuls de Reparație" },
    description: { 
      en: "Instantly restore 15% integrity to all modules.", 
      hu: "Azonnal helyreállít 15% integritást minden modulon.", 
      de: "Stellt sofort 15% Integrität bei allen Modulen wieder her.", 
      ro: "Restaurează instantaneu 15% integritate la toate modulele." 
    },
    unlockStarCost: 12,
    activationResourceCost: { supply: 40 },
    cooldownTicks: 1800, // 30 mins
  },
  {
    id: "shield_rebuild",
    category: "support",
    name: { en: "Shield Rebuild", hu: "Pajzs Újjáépítés", de: "Schildwiederaufbau", ro: "Reconstrucție Scut" },
    description: { 
      en: "Instantly refill 50% of the station shield.", 
      hu: "Azonnal feltölti az állomás pajzsának 50%-át.", 
      de: "Füllt sofort 50% des Stationsschildes auf.", 
      ro: "Reumple instantaneu 50% din scutul stației." 
    },
    unlockStarCost: 8,
    activationResourceCost: { power: 20 },
    cooldownTicks: 900, // 15 mins
  },

  // --- ACCESS ---
  {
    id: "black_route_permit",
    category: "access",
    name: { en: "Black Route Permit", hu: "Fekete Útvonal Engedély", de: "Schwarzrouten-Erlaubnis", ro: "Permis de Rută Neagră" },
    description: { 
      en: "Unlock access to high-risk, high-reward Black Routes for expeditions.", 
      hu: "Hozzáférés a magas kockázatú, de magas jutalmú Fekete Útvonalakhoz az expedíciók számára.", 
      de: "Schaltet den Zugang zu risikoreichen Schwarzrouten für Expeditionen frei.", 
      ro: "Deblochează accesul la Rutele Negre cu risc ridicat și recompensă mare." 
    },
    unlockStarCost: 20,
    isPassive: true,
  },
  {
    id: "deep_scan_license",
    category: "access",
    name: { en: "Deep Scan License", hu: "Mélyszkennelési Licenc", de: "Tiefenscan-Lizenz", ro: "Licență de Scanare Profundă" },
    description: { 
      en: "Permanently increases sensor range and intel gathering speed by 20%.", 
      hu: "Véglegesen növeli a szenzorok hatótávolságát és az adatgyűjtés sebességét 20%-kal.", 
      de: "Erhöht dauerhaft die Sensorreichweite und die Datenerfassungsgeschwindigkeit um 20%.", 
      ro: "Crește permanent raza senzorilor și viteza de colectare a informațiilor cu 20%." 
    },
    unlockStarCost: 18,
    isPassive: true,
  },

  // --- COHESION ---
  {
    id: "command_aura",
    category: "cohesion",
    name: { en: "Command Aura", hu: "Parancsnoki Aura", de: "Kommando-Aura", ro: "Aură de Comandă" },
    description: { 
      en: "Boosts unit combat effectiveness and morale gain for 4 hours.", 
      hu: "Növeli az egységek harci hatékonyságát és a morál növekedését 4 órán keresztül.", 
      de: "Erhöht die Kampfeffektivität der Einheiten und den Moralzuwachs für 4 Stunden.", 
      ro: "Crește eficiența în luptă a unităților și câștigul de moral timp de 4 ore." 
    },
    unlockStarCost: 15,
    activationResourceCost: { morale: 20 },
    cooldownTicks: 14400, // 4 hours
  },
  {
    id: "casualty_reduction",
    category: "cohesion",
    name: { en: "Casualty Reduction Shard", hu: "Veszteségcsökkentő Szilánk", de: "Verlustminderungs-Splitter", ro: "Fragment de Reducere a Victimelor" },
    description: { 
      en: "Permanently reduces unit casualties in all missions by 15%.", 
      hu: "Véglegesen csökkenti az egységveszteségeket minden küldetésben 15%-kal.", 
      de: "Reduziert dauerhaft die Einheitenverluste in allen Missionen um 15%.", 
      ro: "Reduce permanent pierderile de unități în toate misiunile cu 15%." 
    },
    unlockStarCost: 25,
    isPassive: true,
  },

  // --- SPECIALS ---
  {
    id: "void_echo_purge",
    category: "specials",
    name: { en: "Void Echo Purge", hu: "Void Visszhang Tisztítás", de: "Void-Echo-Reinigung", ro: "Purjare Ecou Void" },
    description: { 
      en: "Instantly clear all Void Echo marks and reduce entropy by 10.", 
      hu: "Azonnal eltávolít minden Void visszhang nyomot és csökkenti az entrópiát 10-zel.", 
      de: "Löscht sofort alle Void-Echo-Spuren und reduziert die Entropie um 10.", 
      ro: "Elimină instantaneu toate ecourile Void și reduce entropia cu 10." 
    },
    unlockStarCost: 12,
    activationResourceCost: { power: 15, stability: 10 },
    cooldownTicks: 3600, // 1 hour
  },
  {
    id: "chrono_core",
    category: "specials",
    name: { en: "Chrono Core Overdrive", hu: "Chrono Mag Túlhajtás", de: "Chrono-Kern-Overdrive", ro: "Suprasolicitare Chrono" },
    description: { 
      en: "Accelerate all active timers (upgrades, research, fleets) by 30 minutes.", 
      hu: "Minden aktív időzítőt (fejlesztés, kutatás, flotta) felgyorsít 30 perccel.", 
      de: "Beschleunigt alle aktiven Timer (Upgrades, Forschung, Flotten) um 30 Minuten.", 
      ro: "Accelerează toate cronometrele active (upgrade-uri, cercetare, flote) cu 30 de minute." 
    },
    unlockStarCost: 30,
    activationResourceCost: { power: 40 },
    cooldownTicks: 21600, // 6 hours
  },
];
