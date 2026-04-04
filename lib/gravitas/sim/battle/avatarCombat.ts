import type { LocalizedString } from "../types";

export interface AvatarCombatAllocation {
  /** All 0-100, their sum must be EXACTLY 100 */
  firepower: number;
  barrier: number;
  tactics: number;
  inspiration: number;
  intel: number;
  energy: number;
}

export interface AvatarCombatProfile {
  /** Thematic name of the archetype */
  title: LocalizedString;
  /** The current allocation of the 6 values */
  allocation: AvatarCombatAllocation;
  /** Innate bonuses derived from avatar personality (demo answers) */
  innateBonus: Partial<Record<keyof AvatarCombatAllocation, number>>;
  /** Avatar level (experience from battles) */
  combatLevel: number;
  /** Experience points */
  combatXP: number;
}

/** Stat names displayed to the PLAYER (thematic labels) */
export const AVATAR_STAT_LABELS: Record<keyof AvatarCombatAllocation, {
  name: LocalizedString;
  description: LocalizedString;
  icon: string;
}> = {
  firepower: {
    name: { en: "Strike Force", hu: "Csapáserő", de: "Schlagkraft", ro: "Forță de lovitură" },
    description: {
      en: "Your avatar's direct combat intensity. Higher means more damage dealt to enemy forces.",
      hu: "Az avatárod közvetlen harci intenzitása. Magasabb érték = több sebzés az ellenséges erőknek.",
      de: "Die direkte Kampfintensität deines Avatars. Höher bedeutet mehr Schaden an feindlichen Kräften.",
      ro: "Intensitatea directă de luptă a avatarului. Mai mare înseamnă mai mult damage forțelor inamice.",
    },
    icon: "sword",
  },
  barrier: {
    name: { en: "Aegis Field", hu: "Védőmező", de: "Schutzfeld", ro: "Câmp de protecție" },
    description: {
      en: "Protective energy projected around your forces. Absorbs incoming damage before it reaches your troops.",
      hu: "Védő energia a csapataid körül. Elnyeli a beérkező sebzést mielőtt eléri az egységeidet.",
      de: "Schutzenergie um deine Truppen. Absorbiert eingehenden Schaden bevor er deine Einheiten erreicht.",
      ro: "Energie protectivă proiectată în jurul forțelor. Absoarbe damage-ul înainte să ajungă la trupe.",
    },
    icon: "shield",
  },
  tactics: {
    name: { en: "Command Sense", hu: "Vezetői érzék", de: "Befehlssinn", ro: "Simț de comandă" },
    description: {
      en: "Your tactical awareness and initiative. Determines strike order and tactical maneuver effectiveness.",
      hu: "Taktikai tudatosságod és kezdeményezőképességed. Meghatározza a csapás sorrendjét és a manőverek hatékonyságát.",
      de: "Dein taktisches Bewusstsein und Initiative. Bestimmt die Angriffsreihenfolge und Manövereffektivität.",
      ro: "Conștiința tactică și inițiativa ta. Determină ordinea loviturilor și eficiența manevrelor.",
    },
    icon: "compass",
  },
  inspiration: {
    name: { en: "War Cry", hu: "Harci kiáltás", de: "Kampfruf", ro: "Strigăt de luptă" },
    description: {
      en: "How much your presence inspires your troops. Higher means units fight harder and suffer fewer losses.",
      hu: "Mennyire inspirálja a jelenleted a csapataidat. Magasabb = az egységek erősebben harcolnak, kevesebb veszteség.",
      de: "Wie sehr deine Präsenz die Truppen inspiriert. Höher = Einheiten kämpfen härter, weniger Verluste.",
      ro: "Cât de mult inspiră prezența ta trupele. Mai mare = unitățile luptă mai tare, pierderi mai mici.",
    },
    icon: "megaphone",
  },
  intel: {
    name: { en: "Sixth Sense", hu: "Hatodik érzék", de: "Sechster Sinn", ro: "Al șaselea simț" },
    description: {
      en: "Your ability to read the battlefield. Reveals hidden enemy abilities and improves counter-effectiveness.",
      hu: "Képességed a csatatér olvasására. Feltárja a rejtett ellenséges képességeket és javítja a kontrák hatékonyságát.",
      de: "Deine Fähigkeit das Schlachtfeld zu lesen. Enthüllt verborgene Feindkräfte und verbessert Kontereffektivität.",
      ro: "Capacitatea ta de a citi câmpul de luptă. Dezvăluie abilitățile ascunse ale inamicului și îmbunătățește contraatacurile.",
    },
    icon: "eye",
  },
  energy: {
    name: { en: "Void Channel", hu: "Űrcsatorna", de: "Leerenkanal", ro: "Canal al vidului" },
    description: {
      en: "Raw energy manipulation. Powers shields mid-battle, disrupts enemy energy systems, and fuels special counters.",
      hu: "Nyers energiamanipuláció. Pajzsokat tölt csata közben, megzavarja az ellenség energiarendszereit és speciális kontrákat táplál.",
      de: "Rohe Energiemanipulation. Lädt Schilde im Kampf, stört feindliche Energiesysteme und speist spezielle Konter.",
      ro: "Manipulare de energie brută. Alimentează scuturi în luptă, perturbă sistemele energetice inamice și alimentează contraatacuri speciale.",
    },
    icon: "zap",
  },
};

/**
 * Calculates innate bonuses from demo answers.
 * Each matching answer grants a 1.3x multiplier to a specific stat.
 */
export function computeInnateBonus(answers: string[]): Partial<Record<keyof AvatarCombatAllocation, number>> {
  // Answer -> stat mapping
  const bonusMap: Record<string, keyof AvatarCombatAllocation> = {
    bold: "firepower",
    calm: "barrier",
    strategic: "tactics",
    protective: "inspiration",
    curious: "intel",
    technical: "energy",
    cautious: "barrier",
    charismatic: "inspiration",
  };

  const bonus: Partial<Record<keyof AvatarCombatAllocation, number>> = {};
  for (const answer of answers) {
    const stat = bonusMap[answer];
    if (stat) {
      bonus[stat] = (bonus[stat] ?? 1.0) + 0.3; // 1.3x multiplier per matching answer
    }
  }
  return bonus;
}

/** Validates that the sum of the allocation is 100 */
export function validateAllocation(alloc: AvatarCombatAllocation): boolean {
  const sum = alloc.firepower + alloc.barrier + alloc.tactics + alloc.inspiration + alloc.intel + alloc.energy;
  return Math.abs(sum - 100) < 0.5;
}

/** Default allocation (balanced) */
export function defaultAllocation(): AvatarCombatAllocation {
  return { firepower: 20, barrier: 20, tactics: 20, inspiration: 15, intel: 15, energy: 10 };
}

/** Effective stats = allocation × innateBonus × combatLevel multiplier */
export function getEffectiveCombatStats(
  profile: AvatarCombatProfile
): Record<keyof AvatarCombatAllocation, number> {
  const levelMultiplier = 1 + (profile.combatLevel - 1) * 0.05; // lv1=1.0, lv10=1.45, lv20=1.95
  const result = {} as Record<keyof AvatarCombatAllocation, number>;
  const keys = ["firepower", "barrier", "tactics", "inspiration", "intel", "energy"] as const;
  for (const key of keys) {
    const base = profile.allocation[key];
    const innate = profile.innateBonus[key] ?? 1.0;
    result[key] = base * innate * levelMultiplier;
  }
  return result;
}
