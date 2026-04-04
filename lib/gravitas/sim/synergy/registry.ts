import type { SynergyDef, SynergyId } from "./types";

export const SYNERGY_DEFS: SynergyDef[] = [
  // Tier 1
  {
    id: "energy_field",
    tier: 1,
    name: { en: "Energy Field", hu: "Energiamező", de: "Energiefeld", ro: "Câmp de Energie" },
    description: { en: "+10% shield regen per tick", hu: "+10% pajzs visszatöltés körönként", de: "+10% Schildregeneration pro Tick", ro: "+10% regenerare scut pe tick" },
    requirements: { reactor: 5, sensor: 5 },
    effects: { shieldRegenBonus: 0.10 },
  },
  {
    id: "efficient_supply",
    tier: 1,
    name: { en: "Efficient Supply", hu: "Hatékony ellátás", de: "Effiziente Versorgung", ro: "Aprovizionare Eficientă" },
    description: { en: "+15% drone mining speed", hu: "+15% drón bányászati sebesség", de: "+15% Drohnen-Bergbaugeschwindigkeit", ro: "+15% viteză de minare a dronelor" },
    requirements: { logistics: 5, core: 5 },
    effects: { miningSpeedBonus: 0.15 },
  },
  {
    id: "battlefield_comms",
    tier: 1,
    name: { en: "Battlefield Comms", hu: "Harctéri kommunikáció", de: "Schlachtfeldkommunikation", ro: "Comunicații pe Câmpul de Luptă" },
    description: { en: "+10% unit speed in battle", hu: "+10% egység sebesség a csatában", de: "+10% Einheitengeschwindigkeit im Kampf", ro: "+10% viteză unitate în luptă" },
    requirements: { warroom: 5, sensor: 5 },
    effects: { unitSpeedBonus: 0.10 },
  },
  // Tier 2
  {
    id: "deep_scan",
    tier: 2,
    name: { en: "Deep Space Scan", hu: "Mélytéri letapogatás", de: "Tiefraumscan", ro: "Scanare Spațială Profundă" },
    description: { en: "New rare objects appear in the galaxy", hu: "Új ritka objektumok jelennek meg a galaxisban", de: "Neue seltene Objekte erscheinen in der Galaxie", ro: "Noi obiecte rare apar în galaxie" },
    requirements: { reactor: 10, sensor: 10 },
    effects: { unlockDeepScan: true },
  },
  {
    id: "automated_supply",
    tier: 2,
    name: { en: "Automated Supply", hu: "Automatizált ellátás", de: "Automatisierte Versorgung", ro: "Aprovizionare Automatizată" },
    description: { en: "+20% drone speed", hu: "+20% drónok sebessége", de: "+20% Drohnengeschwindigkeit", ro: "+20% viteză drone" },
    requirements: { logistics: 10, core: 10 },
    effects: { droneSpeedBonus: 0.20 },
  },
  {
    id: "field_medic",
    tier: 2,
    name: { en: "Battlefield First Aid", hu: "Harctéri elsősegély", de: "Schlachtfeld-Erste-Hilfe", ro: "Prim Ajutor pe Câmpul de Luptă" },
    description: { en: "15% of wounded heal instantly after victory", hu: "Csata győzelemnél sebesültek 15%-a azonnal gyógyul", de: "15% der Verwundeten heilen sofort nach dem Sieg", ro: "15% din răniți se vindecă instantaneu după victorie" },
    requirements: { warroom: 10, repairbay: 10 },
    effects: { instantHealRatio: 0.15 },
  },
  {
    id: "overcharge",
    tier: 2,
    name: { en: "Overcharge", hu: "Túltöltés", de: "Überladung", ro: "Supraîncărcare" },
    description: { en: "+8% unit attack in battle", hu: "+8% egységek támadása csatában", de: "+8% Einheitenangriff im Kampf", ro: "+8% atac unitate în luptă" },
    requirements: { reactor: 10, warroom: 10 },
    effects: { unitAttackBonus: 0.08 },
  },
  // Tier 3
  {
    id: "resonance_shield",
    tier: 3,
    name: { en: "Resonance Shield", hu: "Rezonancia pajzs", de: "Resonanzschild", ro: "Scut de Rezonanță" },
    description: { en: "+15 max shield, +10 max hull", hu: "+15 pajzs max, +10 hull max", de: "+15 max. Schild, +10 max. Hülle", ro: "+15 scut max, +10 carenă max" },
    requirements: { reactor: 15, core: 15, sensor: 15 },
    effects: { shieldMaxBonus: 15, hullMaxBonus: 10 },
  },
  {
    id: "elite_training",
    tier: 3,
    name: { en: "Elite Training", hu: "Elit kiképzés", de: "Elitetraining", ro: "Antrenament de Elită" },
    description: { en: "-20% unit upgrade cost", hu: "-20% egység upgrade költség", de: "-20% Einheiten-Upgrade-Kosten", ro: "-20% cost upgrade unitate" },
    requirements: { warroom: 15, core: 15 },
    effects: { upgradeCostReduction: 0.20 },
  },
  {
    id: "logistics_dominance",
    tier: 3,
    name: { en: "Logistics Dominance", hu: "Logisztikai dominancia", de: "Logistikdominanz", ro: "Dominanță Logistică" },
    description: { en: "-25% repair time, -15% repair cost", hu: "-25% javítási idő, -15% javítási költség", de: "-25% Reparaturzeit, -15% Reparaturkosten", ro: "-25% timp reparație, -15% cost reparație" },
    requirements: { logistics: 15, repairbay: 15 },
    effects: { repairTimeReduction: 0.25, repairCostReduction: 0.15 },
  },
  // Tier 4
  {
    id: "superstation",
    tier: 4,
    name: { en: "Superstation", hu: "Szuperállomás", de: "Superstation", ro: "Superstație" },
    description: { en: "+10% resource regen, +20 max hull", hu: "+10% összes erőforrás regen, +20 hull max", de: "+10% Ressourcenregeneration, +20 max. Hülle", ro: "+10% regen resurse, +20 carenă max" },
    requirements: { core: 20, reactor: 20, logistics: 20 },
    effects: { resourceRegenBonus: 0.10, hullMaxBonus: 20 },
  },
  {
    id: "warlord",
    tier: 4,
    name: { en: "Warlord", hu: "Hadúr", de: "Kriegsherr", ro: "Stăpânul Războiului" },
    description: { en: "+12% unit stats in battle, -10% casualties", hu: "+12% egység statok csatában, -10% sebesülés", de: "+12% Einheitenwerte im Kampf, -10% Verluste", ro: "+12% statistici unități în luptă, -10% pierderi" },
    requirements: { warroom: 20, repairbay: 20, sensor: 20 },
    effects: { unitAllStatsBonus: 0.12, casualtyReduction: 0.10 },
  },
];

export const SYNERGY_MAP: Record<SynergyId, SynergyDef> = SYNERGY_DEFS.reduce(
  (acc, def) => {
    acc[def.id] = def;
    return acc;
  },
  {} as Record<SynergyId, SynergyDef>,
);
