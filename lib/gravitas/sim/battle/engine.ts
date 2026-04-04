import type { StarholdAvatarAnswer } from "@/lib/gravitas/sim/types";
import type { EnemyTrait, EnemyTraitId } from "./types";
import { createBattleLoot } from "./rewards";
import { getEffectiveCombatStats } from "./avatarCombat";
import type { Faction } from "./factions";
import type { BuildingDescriptor } from "./buildingDescriptors";
import {
  BATTLE_TACTICS,
  BATTLE_UNIT_PROFILES,
  type BattleArmy,
  type BattleEvaluation,
  type BattleHistoryEntry,
  type BattlePhase,
  type BattleResult,
  type EnemyBuilding,
  type ResolveBattleInput,
  type UnitCombatRole,
} from "./types";

type RuntimeStats = {
  playerHull: number;
  playerShield: number;
  playerGarrison: number;
  enemyHull: number;
  enemyShield: number;
  enemyGarrison: number;
  
  // The 6 combat stats
  playerFirepower: number;
  playerBarrier: number;
  playerTactics: number;
  playerInspiration: number;
  playerIntel: number;
  playerEnergy: number;

  enemyFirepower: number;
  enemyBarrier: number;
  enemyTactics: number;
  enemyInspiration: number;
  enemyIntel: number;
  enemyEnergy: number;

  // Modifiers
  playerDmgMul: number;
  playerDefMul: number;
  enemyDmgMul: number;
  enemyDefMul: number;
};

type BattleContext = {
  traitTriggered: Set<string>;
  countersUsed: Set<string>;
  notes: string[];
  playerDamageDone: number;
  playerDamageTaken: number;
  unitsTotal: number;
  specialUnitCount: number;
  dominantRole: UnitCombatRole;
  raiderLossStreak: number;
  tacticalVictory: boolean;
};

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function makeSeededRng(seed: number): () => number {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

function l(hu: string, en: string, de: string, ro: string) {
  return { hu, en, de, ro };
}

function buildPhase(
  timestamp: number,
  event: BattlePhase["event"],
  source: BattlePhase["source"],
  description: ReturnType<typeof l>,
  damage?: number,
): BattlePhase {
  return { timestamp, event, source, description, damage };
}

function calculateArmyEvaluation(army: BattleArmy) {
  let attack = 0;
  let defense = 0;
  let speed = 0;
  let totalUnits = 0;
  let specialUnits = 0;
  const roleScores: Record<UnitCombatRole, number> = { infantry: 0, ranged: 0, special: 0, drone: 0 };

  Object.entries(army.units).forEach(([unitId, countRaw]) => {
    const count = Math.max(0, Math.floor(countRaw));
    if (!count) return;
    const unit = BATTLE_UNIT_PROFILES[unitId];
    if (!unit) return;
    totalUnits += count;
    if (unit.role === "special" || unit.role === "drone") specialUnits += count;
    roleScores[unit.role] += count;
    attack += unit.attack * count;
    defense += unit.defense * count;
    speed += unit.speed * count;
  });

  const dominantRole = (Object.entries(roleScores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "infantry") as UnitCombatRole;
  return { attack, defense, speed, dominantRole, totalUnits, specialUnits };
}

function collectAvatarAbilities(answers: import("@/lib/gravitas/sim/types").StarholdAvatarAnswer[] | undefined): Set<string> {
  const out = new Set<string>();
  (answers ?? []).forEach((a) => {
    out.add(a.optionId.toLowerCase());
    out.add(a.questionId.toLowerCase());
  });
  return out;
}

function hasCounter(abilitySet: Set<string>, trait: EnemyTrait): boolean {
  if (!trait.counterAbility) return false;
  return abilitySet.has(trait.counterAbility.toLowerCase());
}

function applyTraitEffect(
  trait: EnemyTrait,
  runtime: RuntimeStats,
  ctx: BattleContext,
  battleTime: number,
  abilities: Set<string>,
  phases: BattlePhase[]
) {
  const counter = hasCounter(abilities, trait);
  const counterFactor = counter ? 1 - (trait.counterEffectiveness ?? 0) : 1;
  
  if (counter && !ctx.countersUsed.has(trait.counterAbility!)) {
    ctx.countersUsed.add(trait.counterAbility!);
    phases.push(buildPhase(battleTime, "counter", "player", l("Avatar kontra aktiv", "Avatar counter active", "Avatar-Konter aktiv", "Contra-avatar activa")));
  }

  if (trait.modifiers.damageMultiplier) {
    runtime.enemyDmgMul *= 1 + (trait.modifiers.damageMultiplier - 1) * counterFactor;
  }
  if (trait.modifiers.defenseMultiplier) {
    runtime.enemyDefMul *= 1 + (trait.modifiers.defenseMultiplier - 1) * counterFactor;
  }
  
  ctx.traitTriggered.add(trait.id);
}

function computeCasualties(units: Record<string, number>, damageTaken: number): Record<string, number> {
  const result: Record<string, number> = {};
  const totalUnits = Object.values(units).reduce((a, b) => a + Math.max(0, b), 0);
  if (!totalUnits) return result;
  const casualtyRatio = clamp(damageTaken / Math.max(60, totalUnits * 32), 0, 1);
  Object.entries(units).forEach(([id, amount]) => {
    const lost = Math.min(amount, Math.floor(amount * casualtyRatio * 0.65));
    if (lost > 0) result[id] = lost;
  });
  return result;
}

export function resolveBattle(input: ResolveBattleInput): BattleResult {
  const { army, enemy, playerState, avatarCombat, scoutReport, descriptor, faction, battleHistory, seedNow } = input;
  
  const tactic = BATTLE_TACTICS[army.tacticId];
  const armyBase = calculateArmyEvaluation(army);
  const abilities = collectAvatarAbilities(playerState.avatarProfile?.answers);
  const intel = scoutReport?.intelLevel ?? 0;

  const seedBasis = [
    seedNow ?? Date.now(),
    enemy.id,
    army.tacticId,
    JSON.stringify(army.units),
    intel,
    playerState.tick,
  ].join("|");
  const rng = makeSeededRng(hashString(seedBasis));

  // 1. Calculate Player Effective Stats
  const avatarStats = getEffectiveCombatStats(avatarCombat);
  const baseStatMod = 1.0 + (playerState.resources.morale - 50) / 200; 
  
  const playerEval = {
    firepower: avatarStats.firepower * (armyBase.attack / 100) * baseStatMod * tactic.attackMod,
    barrier: avatarStats.barrier * (armyBase.defense / 100) * baseStatMod * tactic.defenseMod,
    tactics: avatarStats.tactics * (armyBase.speed / 100) * baseStatMod * tactic.speedMod,
    inspiration: avatarStats.inspiration * baseStatMod,
    intel: avatarStats.intel * (1 + intel / 100),
    energy: avatarStats.energy * baseStatMod,
  };

  // 2. Calculate Enemy Effective Stats
  const conditionMod = descriptor.condition.type === "fortified" ? 1.2 : descriptor.condition.type === "decaying" ? 0.8 : 1.0;
  
  const enemyEval = {
    firepower: faction.profile.firepower * (enemy.stats.firepower / 50) * conditionMod,
    barrier: faction.profile.barrier * (enemy.stats.armor / 50) * conditionMod,
    tactics: faction.profile.tactics * (enemy.stats.speed / 50) * conditionMod,
    inspiration: faction.profile.inspiration * (enemy.stats.garrison / 100) * conditionMod,
    intel: faction.profile.intel * conditionMod,
    energy: faction.profile.energy * (enemy.stats.shield / 50) * conditionMod,
  };

  const runtime: RuntimeStats = {
    playerHull: armyBase.totalUnits * 4.2,
    playerShield: (avatarStats.barrier * 2) + (playerState.resources.shield * 0.5),
    playerGarrison: armyBase.totalUnits,
    enemyHull: enemy.stats.garrison * 3.5,
    enemyShield: enemy.stats.shield * 2.0,
    enemyGarrison: enemy.stats.garrison,
    
    playerFirepower: playerEval.firepower,
    playerBarrier: playerEval.barrier,
    playerTactics: playerEval.tactics,
    playerInspiration: playerEval.inspiration,
    playerIntel: playerEval.intel,
    playerEnergy: playerEval.energy,

    enemyFirepower: enemyEval.firepower,
    enemyBarrier: enemyEval.barrier,
    enemyTactics: enemyEval.tactics,
    enemyInspiration: enemyEval.inspiration,
    enemyIntel: enemyEval.intel,
    enemyEnergy: enemyEval.energy,

    playerDmgMul: 1.0,
    playerDefMul: 1.0,
    enemyDmgMul: 1.0,
    enemyDefMul: 1.0,
  };

  const phases: BattlePhase[] = [];
  const phaseCount = 6;
  const durationMs = 6000;
  const phaseStep = 1000;

  const ctx: BattleContext = {
    traitTriggered: new Set<string>(),
    countersUsed: new Set<string>(),
    notes: [],
    playerDamageDone: 0,
    playerDamageTaken: 0,
    unitsTotal: armyBase.totalUnits,
    specialUnitCount: armyBase.specialUnits,
    dominantRole: armyBase.dominantRole,
    raiderLossStreak: 0,
    tacticalVictory: false,
  };

  // 3. Battle Loop
  for (let i = 0; i < phaseCount; i += 1) {
    const t = i * phaseStep;
    const isStart = i === 0;
    const isMid = i === 2 || i === 3;
    const isEnd = i === 5;

    // Apply traits
    enemy.traits.forEach(trait => {
      if (trait.phase === "always" || 
         (isStart && trait.phase === "start") ||
         (isMid && trait.phase === "mid") ||
         (isEnd && trait.phase === "end")) {
        applyTraitEffect(trait, runtime, ctx, t, abilities, phases);
      }
    });
    
    // Initiative & Tactics
    const playerInitiative = runtime.playerTactics > runtime.enemyTactics ? 1.15 : 0.85;
    const enemyInitiative = runtime.enemyTactics > runtime.playerTactics ? 1.15 : 0.85;

    // Damage calculation
    let playerDamage = (runtime.playerFirepower * playerInitiative * runtime.playerDmgMul) / (1 + (runtime.enemyBarrier * runtime.enemyDefMul) / 100);
    let enemyDamage = (runtime.enemyFirepower * enemyInitiative * runtime.enemyDmgMul) / (1 + (runtime.playerBarrier * runtime.playerDefMul) / 100);

    // Intel advantage
    if (runtime.playerIntel > runtime.enemyIntel + 15) playerDamage *= 1.2;
    if (runtime.enemyIntel > runtime.playerIntel + 15) enemyDamage *= 1.2;

    // Energy burst
    if (rng() < runtime.playerEnergy / 250) {
      playerDamage *= 1.6;
      phases.push(buildPhase(t, "critical_hit", "player", l("Energia kitores!", "Energy burst!", "Energieausbruch!", "Explozie de energie!"), Math.round(playerDamage)));
    }

    // Apply damage to enemy
    if (runtime.enemyShield > 0) {
      const shieldDmg = Math.min(runtime.enemyShield, playerDamage);
      runtime.enemyShield -= shieldDmg;
      if (runtime.enemyShield <= 0) phases.push(buildPhase(t, "shield_break", "player", l("Ellenseges pajzs attores", "Enemy shield broken", "Feindschild gebrochen", "Scut inamic spart")));
    } else {
      runtime.enemyHull -= playerDamage;
      runtime.enemyGarrison -= playerDamage / 30;
    }

    // Apply damage to player
    if (runtime.playerShield > 0) {
      const shieldDmg = Math.min(runtime.playerShield, enemyDamage);
      runtime.playerShield -= shieldDmg;
      if (runtime.playerShield <= 0) phases.push(buildPhase(t, "shield_break", "enemy", l("Sajat pajzs összeomlott", "Your shield collapsed", "Dein Schild ist zusammengebrochen", "Scutul tău s-a prăbușit")));
    } else {
      const inspirationSave = Math.min(0.5, runtime.playerInspiration / 200);
      runtime.playerHull -= enemyDamage;
      runtime.playerGarrison -= (enemyDamage / 35) * (1 - inspirationSave);
    }

    ctx.playerDamageDone += playerDamage;
    ctx.playerDamageTaken += enemyDamage;

    phases.push(buildPhase(t, "clash", "player", l("Tuzcsere", "Exchange of fire", "Feuerwechsel", "Schimb de foc"), Math.round(playerDamage)));

    if (runtime.enemyGarrison <= 0 || runtime.playerGarrison <= 0) break;
  }

  const victory = runtime.enemyGarrison <= 0 && runtime.playerGarrison > 0;
  
  phases.push(
    buildPhase(
      durationMs,
      victory ? "victory" : "defeat",
      victory ? "player" : "enemy",
      victory
        ? l("A csata gyozelemmel zart", "Battle won", "Kampf gewonnen", "Lupta castigata")
        : l("A csata elveszett", "Battle lost", "Kampf verloren", "Lupta pierduta"),
    ),
  );

  const rewardPack = createBattleLoot({
    enemy,
    victory,
    tacticalVictory: false,
    durationMs,
    playerPowerScore: Math.round(ctx.playerDamageDone),
    enemyPowerScore: Math.round(ctx.playerDamageTaken),
    scoutIntel: intel,
    supplyFlow: playerState.resources.supplyFlow,
    raiderLootStack: 0,
    exactUnitCount: armyBase.totalUnits,
    seedRng: rng,
  });

  return {
    victory,
    durationMs,
    phases,
    stats: {
      damageDealt: Math.round(ctx.playerDamageDone),
      damageReceived: Math.round(ctx.playerDamageTaken),
      unitsLost: computeCasualties(army.units, ctx.playerDamageTaken),
      enemyGarrisonDestroyed: Math.max(0, enemy.stats.garrison - runtime.enemyGarrison),
      traitTriggered: Array.from(ctx.traitTriggered) as EnemyTraitId[],
      counterUsed: Array.from(ctx.countersUsed),
    },
    loot: rewardPack.loot,
    intelGained: victory ? 12 : 4,
  };
}
