import type { LocalizedString } from "../types";
import type { FactionId } from "../faction/types";
import type { WarRoomUnitId } from "../warroom/types";
import type { PveArchetypeId } from "./types";

export interface PveArchetype {
  id: PveArchetypeId;
  factionId: FactionId;
  name: LocalizedString;
  description: LocalizedString;
  assetSrc: string;
  defenceMultiplier: number;
  casualtyMultiplier: number;
  lootMultiplier: number;
  counterUnitId: WarRoomUnitId;
  counterHint: LocalizedString;
}

export const PVE_ARCHETYPE_ORDER: PveArchetypeId[] = [
  "synthoid_sentinel",
  "korgath_drone_hive",
  "drex_scrap_foundry",
  "velari_mirror_array",
  "noma_void_engine",
];

export const PVE_ARCHETYPES: Record<PveArchetypeId, PveArchetype> = {
  synthoid_sentinel: {
    id: "synthoid_sentinel",
    factionId: "synthoid",
    name: { en: "Synthoid Sentinel", hu: "Synthoid őrszem", de: "Synthoid-Wächter", ro: "Santinelă Synthoid" },
    description: {
      en: "A disciplined machine bastion with layered armor and predictive targeting.",
      hu: "Fegyelmezett gépi erőd réteges páncéllal és prediktív célzással.",
      de: "Eine disziplinierte Maschinenbastion mit Schichtpanzerung und vorausschauender Zielerfassung.",
      ro: "Un bastion mecanic disciplinat, cu armură stratificată și țintire predictivă.",
    },
    assetSrc: "/gravitas/galaxy/fortified-relay.webp",
    defenceMultiplier: 1.35,
    casualtyMultiplier: 1.1,
    lootMultiplier: 1.2,
    counterUnitId: "wraith",
    counterHint: {
      en: "Wraiths disrupt its targeting lattice.",
      hu: "A Wraithekkel megzavarható a célzórácsa.",
      de: "Wraiths stören sein Zielerfassungsnetz.",
      ro: "Unitățile Wraith îi perturbă rețeaua de țintire.",
    },
  },
  korgath_drone_hive: {
    id: "korgath_drone_hive",
    factionId: "korgath",
    name: { en: "Korgath Drone Hive", hu: "Korgath drónkaptár", de: "Korgath-Drohnennest", ro: "Stup de drone Korgath" },
    description: {
      en: "A fast assault nest that floods the battlespace with expendable hunter drones.",
      hu: "Gyors rohamfészek, amely feláldozható vadászdrónokkal árasztja el a csatateret.",
      de: "Ein schnelles Angriffsnest, das den Kampfraum mit entbehrlichen Jagddrohnen flutet.",
      ro: "Un cuib de asalt rapid care inundă câmpul de luptă cu drone de vânătoare.",
    },
    assetSrc: "/gravitas/galaxy/raider-stronghold.webp",
    defenceMultiplier: 0.9,
    casualtyMultiplier: 1.35,
    lootMultiplier: 1.1,
    counterUnitId: "sentinel",
    counterHint: {
      en: "Sentinels absorb the opening drone rush.",
      hu: "A Sentinelek felfogják a kezdeti drónrohamot.",
      de: "Sentinels fangen den ersten Drohnenansturm ab.",
      ro: "Santinelele absorb primul val de drone.",
    },
  },
  drex_scrap_foundry: {
    id: "drex_scrap_foundry",
    factionId: "drex",
    name: { en: "Drex Scrap Foundry", hu: "Drex roncsöntöde", de: "Drex-Schrottgießerei", ro: "Turnătorie de fier vechi Drex" },
    description: {
      en: "A self-repairing industrial fortress assembled from captured hulls.",
      hu: "Elfoglalt hajótestekből épített, önjavító ipari erőd.",
      de: "Eine selbstreparierende Industriefestung aus erbeuteten Schiffsrümpfen.",
      ro: "O fortăreață industrială autoreparabilă, construită din carcase capturate.",
    },
    assetSrc: "/gravitas/galaxy/enemy-hq.webp",
    defenceMultiplier: 1.2,
    casualtyMultiplier: 1,
    lootMultiplier: 1.45,
    counterUnitId: "vanguard",
    counterHint: {
      en: "Vanguards can breach the exposed fabrication lines.",
      hu: "A Vanguardok áttörhetik a nyitott gyártósorokat.",
      de: "Vanguards können die offenen Fertigungslinien durchbrechen.",
      ro: "Unitățile Vanguard pot străpunge liniile de fabricație expuse.",
    },
  },
  velari_mirror_array: {
    id: "velari_mirror_array",
    factionId: "velari",
    name: { en: "Velari Mirror Array", hu: "Velari tükörmező", de: "Velari-Spiegelmatrix", ro: "Matrice-oglindă Velari" },
    description: {
      en: "A deceptive signal fortress that projects false fleets and weapon signatures.",
      hu: "Megtévesztő jelerőd, amely hamis flottákat és fegyverjeleket vetít ki.",
      de: "Eine täuschende Signalfestung, die falsche Flotten und Waffensignaturen projiziert.",
      ro: "O fortăreață de semnal care proiectează flote și semnături de armament false.",
    },
    assetSrc: "/gravitas/galaxy/derelict-outpost.webp",
    defenceMultiplier: 1.05,
    casualtyMultiplier: 0.9,
    lootMultiplier: 1.25,
    counterUnitId: "nexus",
    counterHint: {
      en: "Nexus units isolate the real command signal.",
      hu: "A Nexus egységek elkülönítik a valódi parancsjelet.",
      de: "Nexus-Einheiten isolieren das echte Kommandosignal.",
      ro: "Unitățile Nexus izolează semnalul real de comandă.",
    },
  },
  noma_void_engine: {
    id: "noma_void_engine",
    factionId: "noma",
    name: { en: "Noma Void Engine", hu: "Noma void-gépezet", de: "Noma-Voidmaschine", ro: "Motor Void Noma" },
    description: {
      en: "An unstable autonomous engine that bends distance around its defense ring.",
      hu: "Instabil autonóm gépezet, amely meghajlítja a távolságot a védelmi gyűrűje körül.",
      de: "Eine instabile autonome Maschine, die Entfernungen um ihren Verteidigungsring krümmt.",
      ro: "Un motor autonom instabil care curbează distanța în jurul inelului defensiv.",
    },
    assetSrc: "/gravitas/galaxy/neutral-node.webp",
    defenceMultiplier: 1.15,
    casualtyMultiplier: 1.2,
    lootMultiplier: 1.55,
    counterUnitId: "wraith",
    counterHint: {
      en: "Wraith navigation can pierce the distorted approach.",
      hu: "A Wraith navigáció áttörhet a torzított megközelítésen.",
      de: "Wraith-Navigation kann den verzerrten Anflug durchdringen.",
      ro: "Navigația Wraith poate străpunge apropierea distorsionată.",
    },
  },
};

export function getPveArchetype(id?: PveArchetypeId): PveArchetype | null {
  return id ? PVE_ARCHETYPES[id] ?? null : null;
}
