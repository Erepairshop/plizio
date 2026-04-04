import type { LocalizedString } from "@/lib/gravitas/sim/types";
import { BATTLE_TACTICS, type BattleTactic, type BattleTacticId, type EnemyBuilding, type EnemyTrait, type EnemyTraitId } from "./types";

const HOUR_MS = 60 * 60 * 1000;

function l(hu: string, en: string, de: string, ro: string): LocalizedString {
  return { hu, en, de, ro };
}

const DERELICT_TRAITS: EnemyTrait[] = [
  {
    id: "unstable_systems",
    name: l("Instabil rendszerek", "Unstable Systems", "Instabile Systeme", "Sisteme instabile"),
    description: l(
      "30% esellyel leall a pajzs 2 mp-re, majd visszaepul.",
      "30% chance to shut shield down for 2s, then restore.",
      "30% Chance auf 2s Schildausfall, danach Wiederaufbau.",
      "30% sansa de oprire a scutului timp de 2s, apoi revenire.",
    ),
    hiddenDescription: l(
      "Ha a tulterheles pajzs >50 allapotnal indul, nagyobb robbanasi sebzes jon.",
      "If overload starts while shield >50, blast damage spikes.",
      "Wenn Uberlastung bei Schild >50 startet, steigt Explosionsschaden stark.",
      "Daca suprasarcina porneste la scut >50, dauna exploziei creste mult.",
    ),
    phase: "always",
    modifiers: { specialEffect: "unstable_systems_proc" },
    counterAbility: "engineer",
    counterEffectiveness: 0.5,
  },
  {
    id: "hidden_cache",
    name: l("Rejtett raktar", "Hidden Cache", "Verstecktes Lager", "Depozit ascuns"),
    description: l(
      "Ha 4 mp alatt gyoznek ellene, dupla lootot ad.",
      "If defeated under 4s, rewards are doubled.",
      "Bei Sieg unter 4s wird der Loot verdoppelt.",
      "Daca este invins in sub 4s, ofera loot dublu.",
    ),
    hiddenDescription: l(
      "Pontosan 3 tamado egyseggel +30% ritka drop esely.",
      "Exactly 3 attacking units grant +30% rare drop chance.",
      "Genau 3 angreifende Einheiten geben +30% Rare-Drop-Chance.",
      "Exact 3 unitati atacatoare ofera +30% sansa drop rar.",
    ),
    phase: "end",
    modifiers: { specialEffect: "hidden_cache_bonus" },
    counterAbility: "intuitive",
    counterEffectiveness: 1,
  },
];

const RAIDER_TRAITS: EnemyTrait[] = [
  {
    id: "ambush_tactics",
    name: l("Lesbol tamad", "Ambush Tactics", "Angriff aus dem Hinterhalt", "Tactici de ambuscada"),
    description: l(
      "Az elso 2 mp-ben dupla tuzero, utana 3 mp kimerules.",
      "Double firepower for first 2s, then 3s exhaustion.",
      "Doppelte Feuerkraft in den ersten 2s, danach 3s Erschopfung.",
      "Putere dubla in primele 2s, apoi 3s de epuizare.",
    ),
    hiddenDescription: l(
      "Vedekezo taktika ellen csak 1.5x kezdo sebzes.",
      "Against defensive tactic the opening burst is only 1.5x.",
      "Gegen defensive Taktik nur 1.5x Anfangsschaden.",
      "Impotriva tacticii defensive deschiderea este doar 1.5x.",
    ),
    phase: "start",
    modifiers: { specialEffect: "raider_ambush" },
    counterAbility: "strategist",
    counterEffectiveness: 0.4,
  },
  {
    id: "loot_hoarder",
    name: l("Zsakmanyhalmozo", "Loot Hoarder", "Beutehorter", "Colector de prada"),
    description: l(
      "Minden vereseg utan +15% kovetkezo gyozelmi loot, max 5 stack.",
      "Each defeat grants +15% next-win loot, max 5 stacks.",
      "Jede Niederlage gibt +15% Loot fur den nachsten Sieg, max 5 Stacks.",
      "Fiecare infrangere ofera +15% loot la urmatoarea victorie, max 5 stackuri.",
    ),
    hiddenDescription: l(
      "5 stacknel garantalt ritka drop.",
      "At 5 stacks, rare drop is guaranteed.",
      "Bei 5 Stacks ist ein seltener Drop garantiert.",
      "La 5 stackuri, drop-ul rar este garantat.",
    ),
    phase: "always",
    modifiers: { specialEffect: "raider_loot_stack" },
  },
  {
    id: "improvised_armor",
    name: l("Improvizalt pancel", "Improvised Armor", "Improvisierte Panzerung", "Armura improvizata"),
    description: l(
      "50% HP alatt ideiglenesen +25 armor.",
      "Below 50% HP, gains temporary +25 armor.",
      "Unter 50% HP erhalt er vorubergehend +25 Rustung.",
      "Sub 50% HP primeste temporar +25 armura.",
    ),
    hiddenDescription: l(
      "Energiafegyverek figyelmen kivul hagyjak ezt a bonuszt.",
      "Energy weapons ignore this bonus.",
      "Energiewaffen ignorieren diesen Bonus.",
      "Armele energetice ignora acest bonus.",
    ),
    phase: "mid",
    modifiers: { defenseMultiplier: 1.25, specialEffect: "improvised_armor_trigger" },
    counterAbility: "analyst",
    counterEffectiveness: 1,
  },
];

const RELAY_TRAITS: EnemyTrait[] = [
  {
    id: "adaptive_shield",
    name: l("Adaptiv pajzs", "Adaptive Shield", "Adaptiver Schild", "Scut adaptiv"),
    description: l(
      "A korabbi dominans tamadastipus ellen +40% vedelem a kovetkezo csataban.",
      "Gains +40% defense against your previously dominant attack type.",
      "Erhalt +40% Verteidigung gegen den zuletzt dominanten Angriffstyp.",
      "Primeste +40% defensiva impotriva tipului dominant de atac precedent.",
    ),
    hiddenDescription: l(
      "Ha negy csatan at mindig mas tipussal tamadsz, 1 csatara osszezavarodik (-20% minden stat).",
      "If you rotate types for 4 battles, it gets confused (-20% all stats for one battle).",
      "Wenn du 4 Kampfe lang rotierst, wird es verwirrt (-20% alle Werte fur einen Kampf).",
      "Daca rotesti tipurile 4 lupte, se confuzeaza (-20% la toate statisticile pentru o lupta).",
    ),
    phase: "always",
    modifiers: { defenseMultiplier: 1.4, specialEffect: "adaptive_shield" },
    counterAbility: "tactician",
    counterEffectiveness: 0.5,
  },
  {
    id: "core_force_field",
    name: l("Mag-eroter", "Core Force Field", "Kern-Kraftfeld", "Camp de forta al nucleului"),
    description: l(
      "Az elso 3 mp-ben csak specialis egysegek okoznak sebzest.",
      "For first 3s, only special units can deal damage.",
      "In den ersten 3s verursachen nur Spezial-Einheiten Schaden.",
      "In primele 3s doar unitatile speciale pot provoca daune.",
    ),
    hiddenDescription: l(
      "Ha nincs specialis egyseg, 5 mp-ig tart a zar.",
      "If no special units are sent, lockdown lasts 5s.",
      "Wenn keine Spezial-Einheiten gesendet werden, dauert die Sperre 5s.",
      "Daca nu trimiti unitati speciale, blocajul dureaza 5s.",
    ),
    phase: "start",
    modifiers: { specialEffect: "core_force_field" },
    counterAbility: "engineer",
    counterEffectiveness: 1 / 3,
  },
  {
    id: "disciplined_defense",
    name: l("Fegyelmezett vedelem", "Disciplined Defense", "Disziplinierte Verteidigung", "Aparare disciplinata"),
    description: l(
      "Alacsony morale-nal a garnizon +20% sebzest ad.",
      "At low morale, garrison deals +20% damage.",
      "Bei niedriger Moral verursacht die Garnison +20% Schaden.",
      "La moral scazut, garnizoana produce +20% daune.",
    ),
    hiddenDescription: l(
      "Magas morale eseten -10% hatekonysagra esik.",
      "At very high morale, their effectiveness drops by 10%.",
      "Bei sehr hoher Moral sinkt ihre Effektivitat um 10%.",
      "La moral foarte ridicat, eficienta lor scade cu 10%.",
    ),
    phase: "always",
    modifiers: { specialEffect: "disciplined_defense" },
    counterAbility: "leader",
    counterEffectiveness: 1,
  },
];

export const ENEMY_BUILDINGS: Record<EnemyBuilding["id"], EnemyBuilding> = {
  "derelict-outpost": {
    id: "derelict-outpost",
    stats: {
      armor: 35,
      shield: 25,
      firepower: 40,
      speed: 30,
      garrison: 60,
      antiAir: 20,
    },
    traits: DERELICT_TRAITS,
    difficulty: 3,
    resetCooldownMs: 2 * HOUR_MS,
    lootTableId: "loot_derelict_outpost",
  },
  "raider-stronghold": {
    id: "raider-stronghold",
    stats: {
      armor: 55,
      shield: 40,
      firepower: 70,
      speed: 85,
      garrison: 120,
      antiAir: 50,
    },
    traits: RAIDER_TRAITS,
    difficulty: 6,
    resetCooldownMs: 4 * HOUR_MS,
    lootTableId: "loot_raider_stronghold",
  },
  "fortified-relay": {
    id: "fortified-relay",
    stats: {
      armor: 80,
      shield: 70,
      firepower: 65,
      speed: 45,
      garrison: 200,
      antiAir: 75,
    },
    traits: RELAY_TRAITS,
    difficulty: 9,
    resetCooldownMs: 8 * HOUR_MS,
    lootTableId: "loot_fortified_relay",
  },
};

export const BATTLE_NODE_TO_BUILDING: Record<string, EnemyBuilding["id"]> = {
  "derelict-outpost": "derelict-outpost",
  "raider-stronghold": "raider-stronghold",
  "fortified-relay": "fortified-relay",
};

export function getEnemyBuildingById(id: string): EnemyBuilding | null {
  const key = BATTLE_NODE_TO_BUILDING[id] ?? (id as EnemyBuilding["id"]);
  return ENEMY_BUILDINGS[key] ?? null;
}

export function getBattleTactic(tacticId: BattleTacticId): BattleTactic {
  return BATTLE_TACTICS[tacticId];
}

export function hasTrait(tactics: BattleTactic, traitId: EnemyTraitId): "strong" | "weak" | "neutral" {
  if (tactics.strongAgainst?.includes(traitId)) return "strong";
  if (tactics.weakAgainst?.includes(traitId)) return "weak";
  return "neutral";
}

