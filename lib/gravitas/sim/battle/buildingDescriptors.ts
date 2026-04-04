import type { LocalizedString } from "../types";
import type { FactionId } from "./factions";

export type BuildingMaterialType = "titan" | "scrap" | "crystal" | "bioorganic" | "energy_lattice";
export type WeaponryType = "plasma" | "laser" | "kinetic" | "drone_swarm" | "none";
export type CommType = "advanced" | "basic" | "jammed" | "none";
export type TacticStyle = "ambush" | "siege" | "swarm" | "defensive" | "chaotic";
export type ConditionType = "abandoned" | "active" | "fortified" | "decaying" | "overcharged";

export interface BuildingDescriptor {
  buildingId: string;
  /** Construction material — implicitly determines defense types */
  material: {
    type: BuildingMaterialType;
    label: LocalizedString; // What the player sees
    hiddenEffect: string; // For the engine
  };
  /** Defending faction */
  faction: FactionId;
  /** State/Condition */
  condition: {
    type: ConditionType;
    label: LocalizedString;
    hiddenEffect: string;
  };
  /** Armament */
  weaponry: {
    type: WeaponryType;
    label: LocalizedString;
    hiddenEffect: string;
  };
  /** Communication */
  comms: {
    type: CommType;
    label: LocalizedString;
    hiddenEffect: string;
  };
  /** Tactics */
  tacticStyle: {
    type: TacticStyle;
    label: LocalizedString;
    hiddenEffect: string;
  };
  /** What the player sees based on recon levels */
  revealOrder: {
    /** 0-25% intel */
    basic: ("condition" | "material")[];
    /** 25-50% intel */
    medium: ("faction" | "weaponry")[];
    /** 50-75% intel */
    advanced: ("comms" | "tacticStyle")[];
    /** 75-100% intel */
    full: string[];
  };
}

export const BUILDING_DESCRIPTORS: Record<string, BuildingDescriptor> = {
  "derelict-outpost": {
    buildingId: "derelict-outpost",
    material: {
      type: "scrap",
      label: {
        hu: "Összefoltozva roncsokból és elhagyott űrhulladékból",
        en: "Patched together from wrecks and abandoned space debris",
        de: "Zusammengeflickt aus Wracks und verlassenem Weltraumschrott",
        ro: "Peticit din epave și deșeuri spațiale abandonate",
      },
      hiddenEffect: "armor_low_unpredictable",
    },
    faction: "noma",
    condition: {
      type: "abandoned",
      label: {
        hu: "Évek óta elhagyatott, rendszerek instabilak",
        en: "Abandoned for years, systems are unstable",
        de: "Seit Jahren verlassen, Systeme sind instabil",
        ro: "Abandonat de ani de zile, sistemele sunt instabile",
      },
      hiddenEffect: "hp_low_random_shield_failure",
    },
    weaponry: {
      type: "kinetic",
      label: {
        hu: "Régi ballisztikus lövegtornyok — lassúak de ha eltalálnak, fáj",
        en: "Old ballistic turrets — slow but they hurt if they hit",
        de: "Alte ballistische Geschütztürme — langsam, aber schmerzhaft bei Treffern",
        ro: "Turele balistice vechi — lente, dar dor dacă lovesc",
      },
      hiddenEffect: "damage_high_speed_low",
    },
    comms: {
      type: "none",
      label: {
        hu: "Nincs szervezett kommunikáció",
        en: "No organized communication",
        de: "Keine organisierte Kommunikation",
        ro: "Fără comunicare organizată",
      },
      hiddenEffect: "no_comms",
    },
    tacticStyle: {
      type: "chaotic",
      label: {
        hu: "Nincs rend, mindenki magáért harcol — kiszámíthatatlan",
        en: "No order, everyone for themselves — unpredictable",
        de: "Keine Ordnung, jeder für sich — unberechenbar",
        ro: "Fără ordine, fiecare pentru sine — imprevizibil",
      },
      hiddenEffect: "unpredictable_solo",
    },
    revealOrder: {
      basic: ["condition", "material"],
      medium: ["faction"],
      advanced: ["weaponry", "comms"],
      full: ["tacticStyle", "traits"],
    },
  },
  "raider-stronghold": {
    buildingId: "raider-stronghold",
    material: {
      type: "titan",
      label: {
        hu: "Lopott titánötvözet páncélzat — katonai minőség",
        en: "Stolen titanium alloy armor — military grade",
        de: "Gestohlene Titanlegierungspanzerung — Militärqualität",
        ro: "Blindaj din aliaj de titan furat — calitate militară",
      },
      hiddenEffect: "armor_high_military",
    },
    faction: "korgath",
    condition: {
      type: "active",
      label: {
        hu: "Aktív, jól karbantartott bázis — folyamatosan megerősítik",
        en: "Active, well-maintained base — constantly reinforced",
        de: "Aktive, gut gepflegte Basis — wird ständig verstärkt",
        ro: "Bază activă, bine întreținută — întărită constant",
      },
      hiddenEffect: "hp_high_reinforced",
    },
    weaponry: {
      type: "plasma",
      label: {
        hu: "Improvizált plazmatornyok — pontatlanok de pusztító erejűek",
        en: "Improvised plasma towers — inaccurate but devastating power",
        de: "Improvisierte Plasmatürme — ungenau, aber mit vernichtender Kraft",
        ro: "Turnuri de plasmă improvizate — imprecise, dar cu putere devastatoare",
      },
      hiddenEffect: "damage_high_accuracy_low",
    },
    comms: {
      type: "jammed",
      label: {
        hu: "Zavarolt, rövid hatótávú rendszerek — nem látják jönni a bajt",
        en: "Jammed, short-range systems — they don't see trouble coming",
        de: "Gestörte Kurzstreckensysteme — sie sehen den Ärger nicht kommen",
        ro: "Sisteme bruiate, pe rază scurtă — nu văd pericolul venind",
      },
      hiddenEffect: "intel_low_blind",
    },
    tacticStyle: {
      type: "ambush",
      label: {
        hu: "Lesállás specialisták — az első csapás mindig az övék",
        en: "Ambush specialists — the first strike is always theirs",
        de: "Hinterhalt-Spezialisten — der erste Schlag gehört immer ihnen",
        ro: "Specialiști în ambuscadă — prima lovitură este întotdeauna a lor",
      },
      hiddenEffect: "first_strike_high",
    },
    revealOrder: {
      basic: ["condition", "material"],
      medium: ["faction", "weaponry"],
      advanced: ["comms", "tacticStyle"],
      full: ["traits"],
    },
  },
  "fortified-relay": {
    buildingId: "fortified-relay",
    material: {
      type: "energy_lattice",
      label: {
        hu: "Energia-kristály rácshálózat — öngyógyító szerkezet",
        en: "Energy-crystal lattice — self-healing structure",
        de: "Energiekristall-Gitter — selbstheilende Struktur",
        ro: "Rețea de cristal de energie — structură cu autoreparare",
      },
      hiddenEffect: "armor_regenerating",
    },
    faction: "synthoid",
    condition: {
      type: "fortified",
      label: {
        hu: "Erődített és többszörösen megerősített — tervezetten védik",
        en: "Fortified and multi-reinforced — protected by design",
        de: "Befestigt und mehrfach verstärkt — planmäßig geschützt",
        ro: "Fortificat și reîntărit de mai multe ori — protejat prin design",
      },
      hiddenEffect: "hp_high_planned",
    },
    weaponry: {
      type: "laser",
      label: {
        hu: "Precíziós lézerrendszerek — kisebb damage de szinte sosem hibáznak",
        en: "Precision laser systems — lower damage but almost never miss",
        de: "Präzisionslasersysteme — geringerer Schaden, aber fast nie Fehlschüsse",
        ro: "Sisteme laser de precizie — daune mai mici, dar aproape niciodată nu ratează",
      },
      hiddenEffect: "damage_low_accuracy_high",
    },
    comms: {
      type: "advanced",
      label: {
        hu: "Fejlett kommunikáció — mindent látnak, mindent tudnak",
        en: "Advanced communication — they see everything, they know everything",
        de: "Fortschrittliche Kommunikation — sie sehen alles, sie wissen alles",
        ro: "Comunicare avansată — văd totul, știu totul",
      },
      hiddenEffect: "intel_high_omnipresent",
    },
    tacticStyle: {
      type: "defensive",
      label: {
        hu: "Fegyelmezett védelem — nem pánikba esnek, kivárnak",
        en: "Disciplined defense — they don't panic, they wait",
        de: "Disziplinierte Verteidigung — sie geraten nicht in Panik, sie warten ab",
        ro: "Apărare disciplinată — nu intră în panică, așteaptă",
      },
      hiddenEffect: "patient_defense",
    },
    revealOrder: {
      basic: ["condition", "material"],
      medium: ["faction", "weaponry"],
      advanced: ["comms", "tacticStyle"],
      full: ["traits"],
    },
  },
};
