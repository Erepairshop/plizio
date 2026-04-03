import { GALAXY_WORLD_SIZE, METEOR_MATERIAL_ORDER } from "./constants";
import { findGalaxySpawnPosition } from "./placement";
import type { GalaxyDecorLayer, GalaxyNode, GalaxyNodeDetail, GalaxyWorldPosition } from "./types";

type MeteorVariantDefinition = {
  id: string;
  materialId: string;
  title: GalaxyNode["title"];
  material: GalaxyNode["title"];
  rarityRank: 1 | 2 | 3 | 4 | 5 | 6;
  oreLevel: number;
  amountRange: [number, number];
  mineTimeText: GalaxyNode["title"];
  footer: GalaxyNode["footer"];
  assetSrc: string;
  assetClassName: string;
  pulseClassName: string;
  radius: number;
  cardOffset: { x: number; y: number };
  motion: GalaxyNode["motion"];
  motionDuration: number;
  toneClassName: string;
};

type EncounterVariantDefinition = {
  id: string;
  title: GalaxyNode["title"];
  description: GalaxyNode["description"];
  threatLevel: GalaxyNode["title"];
  reward: GalaxyNode["title"];
  recommendedPower: string;
  footer: GalaxyNode["footer"];
  assetSrc: string;
  assetClassName: string;
  pulseClassName: string;
  radius: number;
  cardOffset: { x: number; y: number };
  motion: GalaxyNode["motion"];
  motionDuration: number;
  toneClassName: string;
};

const VARIANT_TONE_CLASS: Record<string, string> = {
  aether: "drop-shadow-[0_0_24px_rgba(34,211,238,0.32)] brightness-110",
  ember: "drop-shadow-[0_0_26px_rgba(249,115,22,0.34)] brightness-105",
  verdant: "drop-shadow-[0_0_22px_rgba(74,222,128,0.30)] brightness-110",
  sable: "drop-shadow-[0_0_24px_rgba(148,163,184,0.28)] brightness-95",
  lumen: "drop-shadow-[0_0_26px_rgba(167,139,250,0.32)] brightness-120",
  rift: "drop-shadow-[0_0_28px_rgba(56,189,248,0.30)] brightness-115",
  default: "drop-shadow-[0_0_18px_rgba(255,255,255,0.20)]",
};

const DEMO_METEOR_VARIANTS: MeteorVariantDefinition[] = [
  {
    id: "aether",
    materialId: "aether_ore",
    title: { en: "Aether Cache", hu: "Éter-raktár", de: "Aether-Lager", ro: "Depozit de eter" },
    material: { en: "Aether Ore", hu: "Éterérc", de: "Aether-Erz", ro: "Minereu de eter" },
    rarityRank: 3,
    oreLevel: 4,
    amountRange: [72, 96],
    mineTimeText: { en: "1h 12m", hu: "1ó 12p", de: "1h 12m", ro: "1h 12m" },
    footer: {
      en: "Stable mid-tier cache. Ideal baseline for future shared mining rules.",
      hu: "Stabil középszintű lelőhely. Jó alap a későbbi közös bányászati szabályokhoz.",
      de: "Stabiles Mittelfeld-Vorkommen. Gute Basis für spätere gemeinsame Abbauregeln.",
      ro: "Zăcământ stabil de nivel mediu. Bază bună pentru viitoarele reguli comune de minerit.",
    },
    assetSrc: "/gravitas/galaxy/meteor-aether.webp",
    assetClassName: "relative z-10 w-[74px] select-none opacity-100 saturate-125 contrast-110 drop-shadow-[0_0_14px_rgba(34,211,238,0.12)] transition-transform duration-300 hover:scale-[1.04]",
    pulseClassName: "pointer-events-none absolute inset-0 rounded-full border border-cyan-300/30 bg-cyan-300/8 blur-[2px]",
    radius: 170,
    cardOffset: { x: 92, y: -24 },
    motion: { x: [0, 6, -4, 0], y: [0, -4, 3, 0], rotate: [-3, 1.5, -1, -3] },
    motionDuration: 26,
    toneClassName: VARIANT_TONE_CLASS.aether,
  },
  {
    id: "ember",
    materialId: "ember_shards",
    title: { en: "Ember Vein", hu: "Parázs-értelep", de: "Glutader", ro: "Filon incandescent" },
    material: { en: "Ember Shards", hu: "Parázs-szilánk", de: "Glutsplitter", ro: "Fragmente de jar" },
    rarityRank: 4,
    oreLevel: 5,
    amountRange: [54, 82],
    mineTimeText: { en: "1h 30m", hu: "1ó 30p", de: "1h 30m", ro: "1h 30m" },
    footer: {
      en: "Hot fracture field. Richer than average, but slower to strip clean.",
      hu: "Forró hasadékmező. Gazdagabb az átlagnál, de lassabb teljesen kitermelni.",
      de: "Heißes Bruchfeld. Reicher als der Durchschnitt, aber langsamer vollständig abzubauen.",
      ro: "Câmp de fractură fierbinte. Mai bogat decât media, dar mai lent de extras complet.",
    },
    assetSrc: "/gravitas/galaxy/meteor-ember.webp",
    assetClassName: "relative z-10 w-[78px] select-none opacity-100 saturate-125 contrast-110 drop-shadow-[0_0_16px_rgba(249,115,22,0.18)] transition-transform duration-300 hover:scale-[1.04]",
    pulseClassName: "pointer-events-none absolute inset-0 rounded-full border border-amber-300/35 bg-orange-300/10 blur-[2px]",
    radius: 180,
    cardOffset: { x: 92, y: -18 },
    motion: { x: [0, 4, -3, 0], y: [0, -5, 2, 0], rotate: [-2, 1.2, -0.8, -2] },
    motionDuration: 24,
    toneClassName: VARIANT_TONE_CLASS.ember,
  },
  {
    id: "verdant",
    materialId: "verdant_crystals",
    title: { en: "Verdant Cluster", hu: "Zöld kristálycsomó", de: "Grün-Cluster", ro: "Cluster verde" },
    material: { en: "Verdant Crystals", hu: "Zöld kristály", de: "Grünkristalle", ro: "Cristale verzi" },
    rarityRank: 2,
    oreLevel: 3,
    amountRange: [88, 118],
    mineTimeText: { en: "54m", hu: "54p", de: "54m", ro: "54m" },
    footer: {
      en: "Fast extraction node with broad shard spread and strong visibility.",
      hu: "Gyors kitermelésű pont széles kristályszórással és erős láthatósággal.",
      de: "Schneller Abbauknoten mit breiter Kristallstreuung und hoher Sichtbarkeit.",
      ro: "Nod cu extracție rapidă, cu răspândire largă de cristale și vizibilitate ridicată.",
    },
    assetSrc: "/gravitas/galaxy/meteor-verdant.webp",
    assetClassName: "relative z-10 w-[72px] select-none opacity-100 saturate-125 contrast-110 drop-shadow-[0_0_14px_rgba(74,222,128,0.16)] transition-transform duration-300 hover:scale-[1.04]",
    pulseClassName: "pointer-events-none absolute inset-0 rounded-full border border-emerald-300/35 bg-emerald-300/10 blur-[2px]",
    radius: 165,
    cardOffset: { x: 86, y: -16 },
    motion: { x: [0, 5, -2, 0], y: [0, -3, 4, 0], rotate: [-4, 1, -1.2, -4] },
    motionDuration: 27,
    toneClassName: VARIANT_TONE_CLASS.verdant,
  },
  {
    id: "sable",
    materialId: "sable_alloy",
    title: { en: "Sable Core", hu: "Sötét magtelep", de: "Schwarzkern", ro: "Nucleu întunecat" },
    material: { en: "Sable Alloy", hu: "Árnyékötvözet", de: "Schattenlegierung", ro: "Aliaj întunecat" },
    rarityRank: 5,
    oreLevel: 6,
    amountRange: [46, 74],
    mineTimeText: { en: "1h 48m", hu: "1ó 48p", de: "1h 48m", ro: "1h 48m" },
    footer: {
      en: "Dense heavy-mass deposit. Harder to crack, stronger payout profile.",
      hu: "Sűrű, nehéz tömegű lelőhely. Nehezebb feltörni, de erősebb a hozamprofilja.",
      de: "Dichte Schwerlagerstätte. Schwerer aufzubrechen, aber mit stärkerem Ertragsprofil.",
      ro: "Zăcământ dens, cu masă mare. Mai greu de spart, dar cu randament mai puternic.",
    },
    assetSrc: "/gravitas/galaxy/meteor-sable.webp",
    assetClassName: "relative z-10 w-[72px] select-none opacity-100 saturate-125 contrast-110 drop-shadow-[0_0_14px_rgba(148,163,184,0.14)] transition-transform duration-300 hover:scale-[1.04]",
    pulseClassName: "pointer-events-none absolute inset-0 rounded-full border border-slate-300/28 bg-slate-300/8 blur-[2px]",
    radius: 195,
    cardOffset: { x: 92, y: -22 },
    motion: { x: [0, 3, -2, 0], y: [0, -2, 2, 0], rotate: [-1.6, 0.8, -0.4, -1.6] },
    motionDuration: 29,
    toneClassName: VARIANT_TONE_CLASS.sable,
  },
  {
    id: "lumen",
    materialId: "lumen_dust",
    title: { en: "Lumen Bloom", hu: "Fényvirág-mező", de: "Lumenblüte", ro: "Înflorire luminoasă" },
    material: { en: "Lumen Dust", hu: "Fénypor", de: "Lumenstaub", ro: "Praf luminos" },
    rarityRank: 1,
    oreLevel: 2,
    amountRange: [96, 132],
    mineTimeText: { en: "36m", hu: "36p", de: "36m", ro: "36m" },
    footer: {
      en: "Light, unstable bloom field. Lower tier, but fast and visually obvious.",
      hu: "Könnyű, instabil fénymező. Alacsonyabb szint, de gyors és jól látható.",
      de: "Leichtes, instabiles Leuchtfeld. Niedrigeres Niveau, aber schnell und gut sichtbar.",
      ro: "Câmp luminos ușor și instabil. Nivel mai mic, dar rapid și vizibil.",
    },
    assetSrc: "/gravitas/galaxy/meteor-lumen.webp",
    assetClassName: "relative z-10 w-[70px] select-none opacity-100 saturate-125 contrast-110 drop-shadow-[0_0_16px_rgba(167,139,250,0.18)] transition-transform duration-300 hover:scale-[1.04]",
    pulseClassName: "pointer-events-none absolute inset-0 rounded-full border border-violet-300/34 bg-violet-300/10 blur-[2px]",
    radius: 160,
    cardOffset: { x: 82, y: -18 },
    motion: { x: [0, 7, -4, 0], y: [0, -4, 5, 0], rotate: [-5, 1.5, -1.4, -5] },
    motionDuration: 23,
    toneClassName: VARIANT_TONE_CLASS.lumen,
  },
  {
    id: "rift",
    materialId: "rift_stone",
    title: { en: "Rift Spine", hu: "Hasadékgerinc", de: "Riftgrat", ro: "Spinare de ruptură" },
    material: { en: "Rift Stone", hu: "Hasadékkő", de: "Riftstein", ro: "Piatră de ruptură" },
    rarityRank: 6,
    oreLevel: 7,
    amountRange: [38, 60],
    mineTimeText: { en: "2h 06m", hu: "2ó 06p", de: "2h 06m", ro: "2h 06m" },
    footer: {
      en: "High-friction endgame seam. Sparse but strategically valuable.",
      hu: "Nagy súrlódású végjáték ér. Ritkább, de stratégiailag értékes.",
      de: "Hochreibungs-Endgame-Ader. Selten, aber strategisch wertvoll.",
      ro: "Filon de final cu frecare ridicată. Rar, dar valoros strategic.",
    },
    assetSrc: "/gravitas/galaxy/meteor-rift.webp",
    assetClassName: "relative z-10 w-[80px] select-none opacity-100 saturate-125 contrast-110 drop-shadow-[0_0_16px_rgba(56,189,248,0.16)] transition-transform duration-300 hover:scale-[1.04]",
    pulseClassName: "pointer-events-none absolute inset-0 rounded-full border border-sky-300/34 bg-sky-300/10 blur-[2px]",
    radius: 205,
    cardOffset: { x: 96, y: -22 },
    motion: { x: [0, 4, -5, 0], y: [0, -5, 2, 0], rotate: [-2.4, 1.2, -1, -2.4] },
    motionDuration: 28,
    toneClassName: VARIANT_TONE_CLASS.rift,
  },
];

const DEMO_ENCOUNTER_VARIANTS: EncounterVariantDefinition[] = [
  {
    id: "derelict-outpost",
    title: { en: "Derelict Outpost", hu: "Elhagyott előőrs", de: "Verlassener Außenposten", ro: "Avanpost abandonat" },
    description: {
      en: "Abandoned deep-space platform with unstable systems and recoverable caches.",
      hu: "Elhagyott mélyűri platform instabil rendszerekkel és visszaszerezhető készletekkel.",
      de: "Verlassene Tiefraum-Plattform mit instabilen Systemen und plünderbaren Vorräten.",
      ro: "Platformă abandonată în spațiul adânc, cu sisteme instabile și stocuri recuperabile.",
    },
    threatLevel: { en: "Low", hu: "Alacsony", de: "Niedrig", ro: "Scăzut" },
    reward: { en: "Dust + parts", hu: "Por + alkatrész", de: "Staub + Teile", ro: "Praf + piese" },
    recommendedPower: "240",
    footer: {
      en: "Early attackable node. Later this can open into a proper combat simulation and battle report flow.",
      hu: "Korai támadható pont. Később rendes harci szimuláció és battle report flow nyílhat rá.",
      de: "Früher angreifbarer Knoten. Später kann hieraus ein echtes Kampfsimulations- und Battle-Report-System werden.",
      ro: "Nod atacabil timpuriu. Mai târziu poate deschide o simulare completă de luptă și battle report.",
    },
    assetSrc: "/gravitas/galaxy/derelict-outpost.webp",
    assetClassName: "relative z-10 w-[198px] select-none opacity-100 saturate-150 contrast-125 brightness-110 drop-shadow-[0_0_34px_rgba(34,211,238,0.24)] transition-transform duration-300 hover:scale-[1.04]",
    pulseClassName: "pointer-events-none absolute inset-0 rounded-full border border-cyan-200/14 bg-cyan-200/3 blur-[2px]",
    radius: 250,
    cardOffset: { x: 118, y: -26 },
    motion: { x: [0, 5, -3, 0], y: [0, -4, 2, 0], rotate: [-1.2, 0.4, -0.5, -1.2] },
    motionDuration: 30,
    toneClassName: "drop-shadow-[0_0_20px_rgba(34,211,238,0.16)] brightness-105",
  },
  {
    id: "raider-stronghold",
    title: { en: "Raider Stronghold", hu: "Portyázó erőd", de: "Räuberfestung", ro: "Fortăreață de pirați" },
    description: {
      en: "Hostile outlaw station stitched from stolen hulls, docks and improvised weapon decks.",
      hu: "Ellenséges törvényen kívüli állomás lopott hajótestekből, dokkokból és rögtönzött fegyverfedélzetekből.",
      de: "Feindliche gesetzlose Station aus gestohlenen Hüllen, Docks und improvisierten Waffendecks.",
      ro: "Stație ostilă construită din carcase furate, docuri și platforme improvizate de arme.",
    },
    threatLevel: { en: "Medium", hu: "Közepes", de: "Mittel", ro: "Mediu" },
    reward: { en: "Shards + alloy", hu: "Szilánk + ötvözet", de: "Splitter + Legierung", ro: "Fragmente + aliaj" },
    recommendedPower: "420",
    footer: {
      en: "Aggressive combat site. Designed for later encounter logic where setup and stat allocation matter.",
      hu: "Agresszív harci pont. Későbbi encounter logikához készült, ahol számít a setup és a statelosztás.",
      de: "Aggressiver Kampfpunkt. Für spätere Encounter-Logik gedacht, bei der Setup und Statverteilung zählen.",
      ro: "Punct de luptă agresiv. Gândit pentru logica viitoare de encounter, unde contează setupul și distribuția atributelor.",
    },
    assetSrc: "/gravitas/galaxy/raider-stronghold.webp",
    assetClassName: "relative z-10 w-[126px] select-none opacity-100 saturate-125 contrast-110 drop-shadow-[0_0_24px_rgba(249,115,22,0.16)] transition-transform duration-300 hover:scale-[1.035]",
    pulseClassName: "pointer-events-none absolute inset-0 rounded-full border border-orange-300/26 bg-orange-300/7 blur-[2px]",
    radius: 280,
    cardOffset: { x: 126, y: -28 },
    motion: { x: [0, 4, -4, 0], y: [0, -5, 3, 0], rotate: [-1.5, 0.45, -0.55, -1.5] },
    motionDuration: 28,
    toneClassName: VARIANT_TONE_CLASS.ember,
  },
  {
    id: "fortified-relay",
    title: { en: "Fortified Relay", hu: "Erődített relay", de: "Befestigtes Relay", ro: "Releu fortificat" },
    description: {
      en: "Armored relay array with a luminous core field and disciplined defense architecture.",
      hu: "Páncélozott relay-állomás fénylő magmezővel és fegyelmezett védelmi architektúrával.",
      de: "Gepanzerte Relay-Anlage mit leuchtendem Kernfeld und disziplinierter Verteidigungsarchitektur.",
      ro: "Stație relay blindată cu miez luminos și arhitectură defensivă disciplinată.",
    },
    threatLevel: { en: "High", hu: "Magas", de: "Hoch", ro: "Ridicat" },
    reward: { en: "Ore + rare core", hu: "Érc + ritka mag", de: "Erz + seltener Kern", ro: "Minereu + nucleu rar" },
    recommendedPower: "620",
    footer: {
      en: "High-risk objective node. Later this can become a proper control-point battle site.",
      hu: "Magas kockázatú objective pont. Később rendes kontrollpont-csatahely lehet belőle.",
      de: "Hochrisiko-Objective-Knoten. Später kann daraus ein echter Kontrollpunkt-Kampfort werden.",
      ro: "Nod objective cu risc ridicat. Mai târziu poate deveni un adevărat punct de control pentru luptă.",
    },
    assetSrc: "/gravitas/galaxy/fortified-relay.webp",
    assetClassName: "relative z-10 w-[122px] select-none opacity-100 saturate-125 contrast-110 drop-shadow-[0_0_26px_rgba(56,189,248,0.16)] transition-transform duration-300 hover:scale-[1.035]",
    pulseClassName: "pointer-events-none absolute inset-0 rounded-full border border-sky-300/28 bg-sky-300/8 blur-[2px]",
    radius: 290,
    cardOffset: { x: 120, y: -26 },
    motion: { x: [0, 3, -2, 0], y: [0, -4, 2, 0], rotate: [-1.1, 0.35, -0.35, -1.1] },
    motionDuration: 32,
    toneClassName: VARIANT_TONE_CLASS.rift,
  },
];

const MATERIAL_BASE_YIELD_PER_HOUR: Record<string, number> = {
  lumen_dust: 100,
  verdant_crystals: 82,
  aether_ore: 66,
  ember_shards: 52,
  sable_alloy: 38,
  rift_stone: 26,
};

const MATERIAL_BASE_DURATION_MINUTES: Record<string, number> = {
  lumen_dust: 60,
  verdant_crystals: 90,
  aether_ore: 120,
  ember_shards: 150,
  sable_alloy: 180,
  rift_stone: 210,
};

const MATERIAL_DURATION_RANGE_MINUTES: Record<string, [number, number]> = {
  lumen_dust: [60, 120],
  verdant_crystals: [75, 150],
  aether_ore: [90, 180],
  ember_shards: [120, 210],
  sable_alloy: [150, 225],
  rift_stone: [180, 240],
};

export const METEOR_MATERIAL_META = {
  lumen_dust: {
    label: { en: "Lumen", hu: "Lumen", de: "Lumen", ro: "Lumen" },
    short: { en: "LD", hu: "LD", de: "LD", ro: "LD" },
    colorClassName: "text-violet-300",
    glowClassName: "bg-violet-300/12 border-violet-300/20",
  },
  verdant_crystals: {
    label: { en: "Verdant", hu: "Verdant", de: "Verdant", ro: "Verdant" },
    short: { en: "VC", hu: "VC", de: "VC", ro: "VC" },
    colorClassName: "text-emerald-300",
    glowClassName: "bg-emerald-300/12 border-emerald-300/20",
  },
  aether_ore: {
    label: { en: "Aether", hu: "Éter", de: "Aether", ro: "Aether" },
    short: { en: "AO", hu: "ÉE", de: "AE", ro: "AE" },
    colorClassName: "text-cyan-300",
    glowClassName: "bg-cyan-300/12 border-cyan-300/20",
  },
  ember_shards: {
    label: { en: "Ember", hu: "Parázs", de: "Ember", ro: "Ember" },
    short: { en: "ES", hu: "PSZ", de: "ES", ro: "ES" },
    colorClassName: "text-amber-300",
    glowClassName: "bg-amber-300/12 border-amber-300/20",
  },
  sable_alloy: {
    label: { en: "Sable", hu: "Sable", de: "Sable", ro: "Sable" },
    short: { en: "SA", hu: "SÖ", de: "SA", ro: "SA" },
    colorClassName: "text-slate-300",
    glowClassName: "bg-slate-300/12 border-slate-300/20",
  },
  rift_stone: {
    label: { en: "Rift", hu: "Rift", de: "Rift", ro: "Rift" },
    short: { en: "RS", hu: "RK", de: "RS", ro: "RS" },
    colorClassName: "text-sky-300",
    glowClassName: "bg-sky-300/12 border-sky-300/20",
  },
} as const;

export function getMeteorYieldPerHour(materialId: string, logisticsLevel = 1) {
  const baseYieldPerHour = MATERIAL_BASE_YIELD_PER_HOUR[materialId] ?? 50;
  const logisticsMultiplier = 1 + Math.max(0, logisticsLevel - 1) * 0.2;
  return Math.round(baseYieldPerHour * logisticsMultiplier);
}

export function getMeteorBaseDurationMinutes(materialId: string, logisticsLevel = 1) {
  const baseDurationMinutes = MATERIAL_BASE_DURATION_MINUTES[materialId] ?? 60;
  const logisticsMultiplier = 1 + Math.max(0, logisticsLevel - 1) * 0.2;
  return Math.max(12, Math.round(baseDurationMinutes / logisticsMultiplier));
}

export function getMeteorBaseUnitsPerRun(materialId: string, logisticsLevel = 1) {
  const durationHours = getMeteorBaseDurationMinutes(materialId, logisticsLevel) / 60;
  return Math.max(8, Math.round(getMeteorYieldPerHour(materialId, logisticsLevel) * durationHours));
}

const SHOWCASE_METEOR_POSITIONS: GalaxyWorldPosition[] = [
  { x: 260, y: 260 },
  { x: 840, y: 260 },
  { x: 1420, y: 260 },
  { x: 260, y: 860 },
  { x: 840, y: 860 },
  { x: 1420, y: 860 },
];

const FIXED_METEOR_POSITIONS: GalaxyWorldPosition[] = [
  { x: 3240, y: 840 }, { x: 4820, y: 1140 }, { x: 6420, y: 760 }, { x: 8120, y: 1280 }, { x: 3240, y: 1280 },
  { x: 3780, y: 2280 }, { x: 5440, y: 1900 }, { x: 7060, y: 2180 }, { x: 8740, y: 2020 }, { x: 10360, y: 2320 },
  { x: 11980, y: 1880 }, { x: 13660, y: 2200 }, { x: 15280, y: 1960 }, { x: 16820, y: 2260 }, { x: 1540, y: 3200 },
  { x: 3220, y: 3480 }, { x: 4880, y: 3320 }, { x: 6520, y: 3040 }, { x: 8220, y: 3520 }, { x: 9960, y: 3180 },
  { x: 11620, y: 3460 }, { x: 13260, y: 3100 }, { x: 14940, y: 3380 }, { x: 16580, y: 3240 },
];

const FIXED_ENCOUNTER_POSITIONS: GalaxyWorldPosition[] = [
  { x: 980, y: 620 }, { x: 4480, y: 520 }, { x: 8720, y: 620 }, { x: 12880, y: 560 }, { x: 17180, y: 680 },
  { x: 1740, y: 1550 }, { x: 6180, y: 1520 }, { x: 10680, y: 1580 }, { x: 14880, y: 1540 }, { x: 17320, y: 1680 },
  { x: 1140, y: 4080 }, { x: 5660, y: 4240 }, { x: 10320, y: 4140 }, { x: 14420, y: 4220 }, { x: 17380, y: 3960 },
];

export const GALAXY_PLAYER_BASE_NODE: GalaxyNode = {
  id: "player-base-1",
  type: "base",
  title: { en: "Gravitas Base", hu: "Gravitas bázis", de: "Gravitas-Basis", ro: "Baza Gravitas" },
  description: {
    en: "Singleplayer home base and dispatch origin for drones, mining routes and future expeditions.",
    hu: "Singleplayer otthoni bázis és kiindulópont a drónokhoz, bányászati útvonalakhoz és későbbi expedíciókhoz.",
    de: "Singleplayer-Heimatbasis und Ausgangspunkt für Drohnen, Abbaurouten und spätere Expeditionen.",
    ro: "Bază singleplayer și punct de plecare pentru drone, rute de minerit și expediții viitoare.",
  },
  position: { x: 1540, y: 1500 },
  cardOffset: { x: 128, y: -24 },
  radius: 320,
  assetSrc: "/gravitas/galaxy/gravitas-base.webp",
  assetAlt: { en: "Gravitas base", hu: "Gravitas bázis", de: "Gravitas-Basis", ro: "Baza Gravitas" },
  assetClassName: "relative z-10 w-[213px] select-none opacity-100 saturate-150 contrast-125 brightness-110 drop-shadow-[0_0_38px_rgba(34,211,238,0.28)] transition-transform duration-300 hover:scale-[1.035]",
  pulseClassName: "pointer-events-none absolute inset-0 rounded-full border border-cyan-200/12 bg-cyan-200/2 blur-[2px]",
  motion: { x: [0, 2, -2, 0], y: [0, -3, 1, 0], rotate: [-0.6, 0.18, -0.2, -0.6] },
  motionDuration: 34,
  toneClassName: "drop-shadow-[0_0_24px_rgba(34,211,238,0.18)] brightness-106",
  details: [
    {
      id: "status",
      label: { en: "Status", hu: "Státusz", de: "Status", ro: "Status" },
      value: { en: "Online", hu: "Online", de: "Online", ro: "Online" },
      tone: "emerald",
    },
    {
      id: "hangar",
      label: { en: "Hangar", hu: "Hangár", de: "Hangar", ro: "Hangar" },
      value: { en: "Drone-ready", hu: "Drónkész", de: "Drohnenbereit", ro: "Pregătit pentru drone" },
      tone: "cyan",
    },
    {
      id: "reach",
      label: { en: "Map Reach", hu: "Térképi elérés", de: "Kartenreichweite", ro: "Acoperire pe hartă" },
      value: "18000u",
      tone: "amber",
    },
    {
      id: "route-mode",
      label: { en: "Route Mode", hu: "Útvonal mód", de: "Routenmodus", ro: "Mod rută" },
      value: { en: "Drone dispatch", hu: "Drón indítás", de: "Drohnen-Dispatch", ro: "Lansare dronă" },
    },
  ],
  footer: {
    en: "This base position is the origin point for travel-time calculations on the galaxy map.",
    hu: "Ez a bázispozíció a galaxy térképen végzett menetidő-számítások kiindulópontja.",
    de: "Diese Basisposition ist der Ausgangspunkt für Reisezeitberechnungen auf der Galaxiekarte.",
    ro: "Această poziție de bază este punctul de pornire pentru calculele de timp de deplasare pe harta galaxiei.",
  },
};

export const GALAXY_DECOR_LAYERS: GalaxyDecorLayer[] = [
  {
    id: "fog-nw",
    src: "/gravitas/galaxy/mythic-fog.webp",
    className: "pointer-events-none absolute -left-[8%] top-[4%] w-[18%] min-w-[420px] select-none opacity-60 mix-blend-screen blur-[2px]",
  },
  {
    id: "signal-sw",
    src: "/gravitas/galaxy/signal-fog.webp",
    className: "pointer-events-none absolute left-[8%] bottom-[6%] w-[14%] min-w-[320px] select-none opacity-50 mix-blend-screen",
  },
  {
    id: "nebula-ne",
    src: "/gravitas/galaxy/nebula-cloud.webp",
    className: "pointer-events-none absolute right-[-6%] top-[12%] w-[20%] min-w-[520px] select-none opacity-52 mix-blend-screen",
  },
  {
    id: "fog-se",
    src: "/gravitas/galaxy/mythic-fog.webp",
    className: "pointer-events-none absolute right-[4%] bottom-[-4%] w-[16%] min-w-[420px] rotate-[18deg] select-none opacity-42 mix-blend-screen",
  },
];

function getAmountForMeteor(variantIndex: number, repetitionIndex: number, range: [number, number]) {
  const [min, max] = range;
  const spread = max - min;
  const wave = ((variantIndex * 7 + repetitionIndex * 11) % (spread + 1));
  return min + wave;
}

function getDurationForMeteor(materialId: string, variantIndex: number, repetitionIndex: number) {
  const [min, max] = MATERIAL_DURATION_RANGE_MINUTES[materialId] ?? [60, 120];
  const spread = max - min;
  const wave = ((variantIndex * 17 + repetitionIndex * 23) % (spread + 1));
  return min + wave;
}

function formatMinutesLocalized(totalMinutes: number): GalaxyNode["title"] {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const en = hours > 0 ? `${hours}h ${String(minutes).padStart(2, "0")}m` : `${minutes}m`;
  const hu = hours > 0 ? `${hours}ó ${String(minutes).padStart(2, "0")}p` : `${minutes}p`;
  const de = hours > 0 ? `${hours}h ${String(minutes).padStart(2, "0")}m` : `${minutes}m`;
  const ro = hours > 0 ? `${hours}h ${String(minutes).padStart(2, "0")}m` : `${minutes}m`;
  return { en, hu, de, ro };
}

function createMeteorNode(variant: MeteorVariantDefinition, variantIndex: number, repetitionIndex: number, position: GalaxyWorldPosition): GalaxyNode {
  const baseDurationMinutes = getDurationForMeteor(variant.materialId, variantIndex, repetitionIndex);
  const baseYieldPerHour = getMeteorYieldPerHour(variant.materialId, 1);
  const baseUnitsPerRun = Math.max(10, Math.round(baseYieldPerHour * (baseDurationMinutes / 60)));
  const amount = Math.min(
    variant.amountRange[1],
    Math.max(variant.amountRange[0], baseUnitsPerRun + getAmountForMeteor(variantIndex, repetitionIndex, [0, 8]) - 4)
  );
  const details: GalaxyNodeDetail[] = [
    {
      id: "material",
      label: { en: "Material", hu: "Anyag", de: "Material", ro: "Material" },
      value: variant.material,
      tone: "cyan",
    },
    {
      id: "units",
      label: { en: "Units", hu: "Darab", de: "Stück", ro: "Bucăți" },
      value: amount,
    },
    {
      id: "ore-level",
      label: { en: "Ore Level", hu: "Ércszint", de: "Erzstufe", ro: "Nivel minereu" },
      value: `LVL ${variant.oreLevel}`,
      tone: "amber",
    },
    {
      id: "mine-time",
      label: { en: "Mine Time", hu: "Bányászási idő", de: "Abbauzeit", ro: "Timp extragere" },
      value: formatMinutesLocalized(baseDurationMinutes),
      tone: "emerald",
    },
  ];

  return {
    id: `meteor-${variant.id}-${repetitionIndex + 1}`,
    type: "resource",
    variantId: variant.id,
    materialId: variant.materialId,
    title: variant.title,
    description: {
      en: "Singleplayer meteor resource node. Later this can be locked so only one player mines it at a time.",
      hu: "Singleplayer meteor nyersanyagpont. Később lezárható úgy, hogy egyszerre csak egy játékos bányássza.",
      de: "Singleplayer-Meteor-Ressourcenknoten. Später kann er so gesperrt werden, dass nur ein Spieler gleichzeitig abbaut.",
      ro: "Nod singleplayer de resurse meteorice. Mai târziu poate fi blocat astfel încât doar un jucător să mineze simultan.",
    },
    position,
    cardOffset: variant.cardOffset,
    radius: variant.radius,
    assetSrc: variant.assetSrc,
    assetAlt: variant.title,
    assetClassName: variant.assetClassName,
    pulseClassName: variant.pulseClassName,
    motion: variant.motion,
    motionDuration: variant.motionDuration,
    toneClassName: variant.toneClassName,
    details,
    footer: variant.footer,
    mining: {
      baseYieldPerHour,
      baseDurationMinutes,
      baseUnitsPerRun,
      logisticsLevelBonusPerLevel: 0.2,
    },
  };
}

function buildMeteorField(): GalaxyNode[] {
  const nodes: GalaxyNode[] = [];

  DEMO_METEOR_VARIANTS.forEach((variant, variantIndex) => {
    for (let repetitionIndex = 0; repetitionIndex < 5; repetitionIndex += 1) {
      const preferredPosition =
        repetitionIndex === 0
          ? SHOWCASE_METEOR_POSITIONS[variantIndex]
          : FIXED_METEOR_POSITIONS[variantIndex * 4 + (repetitionIndex - 1)];
      const draft = createMeteorNode(variant, variantIndex, repetitionIndex, preferredPosition);

      if (repetitionIndex === 0) {
        nodes.push({
          ...draft,
          position: preferredPosition,
        });
        continue;
      }

      const { position: _position, ...spawnDraft } = draft;
      const validPosition = findGalaxySpawnPosition(
        spawnDraft,
        nodes,
        GALAXY_WORLD_SIZE,
        {
          attempts: 40,
          candidates: [preferredPosition],
        }
      ) ?? preferredPosition;

      nodes.push({
        ...draft,
        position: validPosition,
      });
    }
  });

  return nodes;
}

function createEncounterNode(
  variant: EncounterVariantDefinition,
  repetitionIndex: number,
  position: GalaxyWorldPosition,
): GalaxyNode {
  const details: GalaxyNodeDetail[] = [
    {
      id: "threat-level",
      label: { en: "Threat", hu: "Fenyegetés", de: "Gefahr", ro: "Amenințare" },
      value: variant.threatLevel,
      tone: "amber",
    },
    {
      id: "recommended-power",
      label: { en: "Recommended", hu: "Ajánlott", de: "Empfohlen", ro: "Recomandat" },
      value: variant.recommendedPower,
      tone: "cyan",
    },
    {
      id: "reward",
      label: { en: "Reward", hu: "Jutalom", de: "Belohnung", ro: "Recompensă" },
      value: variant.reward,
      tone: "emerald",
    },
    {
      id: "status",
      label: { en: "Status", hu: "Státusz", de: "Status", ro: "Status" },
      value: { en: "Open target", hu: "Nyílt célpont", de: "Offenes Ziel", ro: "Țintă deschisă" },
    },
  ];

  return {
    id: `encounter-${variant.id}-${repetitionIndex + 1}`,
    type: "battle",
    variantId: variant.id,
    title: variant.title,
    description: variant.description,
    position,
    cardOffset: variant.cardOffset,
    radius: variant.radius,
    assetSrc: variant.assetSrc,
    assetAlt: variant.title,
    assetClassName: variant.assetClassName,
    pulseClassName: variant.pulseClassName,
    motion: variant.motion,
    motionDuration: variant.motionDuration,
    toneClassName: variant.toneClassName,
    details,
    footer: variant.footer,
  };
}

function buildEncounterField(existingNodes: GalaxyNode[]): GalaxyNode[] {
  const nodes: GalaxyNode[] = [];

  DEMO_ENCOUNTER_VARIANTS.forEach((variant, variantIndex) => {
    for (let repetitionIndex = 0; repetitionIndex < 5; repetitionIndex += 1) {
      const positionIndex = variantIndex * 5 + repetitionIndex;
      const preferredPosition = FIXED_ENCOUNTER_POSITIONS[positionIndex];
      const draft = createEncounterNode(variant, repetitionIndex, preferredPosition);
      const { position: _position, ...spawnDraft } = draft;
      const validPosition = findGalaxySpawnPosition(
        spawnDraft,
        [...existingNodes, ...nodes],
        GALAXY_WORLD_SIZE,
        {
          attempts: 50,
          candidates: [preferredPosition],
        },
      ) ?? preferredPosition;

      nodes.push({
        ...draft,
        position: validPosition,
      });
    }
  });

  return nodes;
}

export const GALAXY_METEOR_NODES: GalaxyNode[] = buildMeteorField();
export const GALAXY_ENCOUNTER_NODES: GalaxyNode[] = buildEncounterField([GALAXY_PLAYER_BASE_NODE, ...GALAXY_METEOR_NODES]);
export const GALAXY_DEMO_NODES: GalaxyNode[] = [GALAXY_PLAYER_BASE_NODE, ...GALAXY_METEOR_NODES, ...GALAXY_ENCOUNTER_NODES];

export function getRecommendedMeteorCountForPlayers(activePlayers: number, baseCount = GALAXY_METEOR_NODES.length): number {
  if (activePlayers <= 0) return baseCount;
  return baseCount + Math.max(0, Math.floor(activePlayers / 25));
}
