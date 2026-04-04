import type { StarholdAvatarAnswer } from "@/lib/gravitas/sim/types";
import { createBattleLoot } from "./rewards";
import {
  BATTLE_TACTICS,
  BATTLE_UNIT_PROFILES,
  type BattleArmy,
  type BattleEvaluation,
  type BattleHistoryEntry,
  type BattlePhase,
  type BattleResult,
  type EnemyBuilding,
  type EnemyTrait,
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
  playerAttack: number;
  playerDefense: number;
  playerSpeed: number;
  enemyAttack: number;
  enemyDefense: number;
  enemySpeed: number;
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

function calculateArmyEvaluation(army: BattleArmy): BattleEvaluation & { dominantRole: UnitCombatRole; totalUnits: number; specialUnits: number } {
  let attack = 0;
  let defense = 0;
  let speed = 0;
  let shield = 0;
  let garrison = 0;
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
    shield += unit.defense * count * 0.35;
    garrison += count;
  });

  const dominantRole = (Object.entries(roleScores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "infantry") as UnitCombatRole;
  return { attack, defense, speed, shield, garrison, dominantRole, totalUnits, specialUnits };
}

function normalizeAbilityId(raw: string): string {
  const id = raw.toLowerCase();
  if (id.includes("engineer") || id.includes("mernok") || id.includes("inginer")) return "engineer";
  if (id.includes("strate") || id.includes("strateg")) return "strategist";
  if (id.includes("anal") || id.includes("elemzo")) return "analyst";
  if (id.includes("leader") || id.includes("vezer")) return "leader";
  if (id.includes("tact") || id.includes("taktik")) return "tactician";
  if (id.includes("intu") || id.includes("intuit")) return "intuitive";
  return id;
}

function collectAvatarAbilities(answers: StarholdAvatarAnswer[] | undefined): Set<string> {
  const out = new Set<string>();
  (answers ?? []).forEach((a) => {
    out.add(normalizeAbilityId(a.optionId));
    out.add(normalizeAbilityId(a.questionId));
    out.add(normalizeAbilityId(a.trait));
  });
  return out;
}

function hasCounter(abilitySet: Set<string>, trait: EnemyTrait): boolean {
  if (!trait.counterAbility) return false;
  return abilitySet.has(normalizeAbilityId(trait.counterAbility));
}

function getRaiderLossStreak(history: BattleHistoryEntry[]): number {
  let streak = 0;
  for (let i = history.length - 1; i >= 0; i -= 1) {
    const h = history[i];
    if (h.buildingId !== "raider-stronghold") continue;
    if (h.victory) break;
    streak += 1;
    if (streak >= 5) break;
  }
  return streak;
}

function applyTraitStart(
  trait: EnemyTrait,
  runtime: RuntimeStats,
  ctx: BattleContext,
  battleTime: number,
  rng: () => number,
  abilities: Set<string>,
  tacticId: BattleArmy["tacticId"],
  phases: BattlePhase[],
) {
  const counter = hasCounter(abilities, trait);
  const counterFactor = counter ? 1 - (trait.counterEffectiveness ?? 0) : 1;
  if (counter) {
    ctx.countersUsed.add(trait.counterAbility!);
    phases.push(buildPhase(
      battleTime,
      "counter",
      "player",
      l("Avatar kontra aktiv", "Avatar counter active", "Avatar-Konter aktiv", "Contra-avatar activa"),
    ));
  }

  if (trait.id === "ambush_tactics") {
    ctx.traitTriggered.add(trait.id);
    const defensiveNerf = tacticId === "defensive" ? 0.75 : 1;
    const ambushMul = 2 * defensiveNerf * counterFactor;
    runtime.enemyAttack *= ambushMul;
    phases.push(buildPhase(
      battleTime,
      "trait_activate",
      "enemy",
      l("Lesbol tamadas!", "Ambush activated!", "Hinterhalt aktiviert!", "Ambuscada activata!"),
    ));
  }

  if (trait.id === "core_force_field") {
    ctx.traitTriggered.add(trait.id);
    const baseLockMs = ctx.specialUnitCount > 0 ? 3000 : 5000;
    const lockMs = Math.round(baseLockMs * (counter ? counterFactor : 1));
    ctx.notes.push(`force_field_lock_ms:${lockMs}`);
    phases.push(buildPhase(
      battleTime,
      "trait_activate",
      "enemy",
      l("Mag-eroter aktiv", "Core force field active", "Kern-Kraftfeld aktiv", "Camp de forta activ"),
    ));
  }

  if (trait.id === "unstable_systems" && rng() < 0.3 * (counter ? counterFactor : 1)) {
    ctx.traitTriggered.add(trait.id);
    runtime.enemyShield = Math.max(0, runtime.enemyShield - 28);
    ctx.notes.push("unstable_systems_shutdown");
    phases.push(buildPhase(
      battleTime,
      "trait_activate",
      "enemy",
      l("Instabil pajzs leallas", "Unstable shield shutdown", "Instabiler Schildausfall", "Cadere scut instabil"),
    ));
  }
}

function applyTraitMid(
  trait: EnemyTrait,
  runtime: RuntimeStats,
  ctx: BattleContext,
  battleTime: number,
  abilities: Set<string>,
  phases: BattlePhase[],
) {
  const counter = hasCounter(abilities, trait);
  const counterFactor = counter ? 1 - (trait.counterEffectiveness ?? 0) : 1;
  if (trait.id === "improvised_armor" && runtime.enemyHull <= 50) {
    ctx.traitTriggered.add(trait.id);
    runtime.enemyDefense += Math.round(25 * (counter ? counterFactor : 1));
    phases.push(buildPhase(
      battleTime,
      "trait_activate",
      "enemy",
      l("Improvizalt pancel felkerul", "Improvised armor engaged", "Improvisierte Panzerung aktiv", "Armura improvizata activa"),
    ));
  }
}

function applyTraitAlways(
  trait: EnemyTrait,
  runtime: RuntimeStats,
  ctx: BattleContext,
  playerMorale: number,
  battleHistory: BattleHistoryEntry[],
  abilities: Set<string>,
) {
  const counter = hasCounter(abilities, trait);
  const counterFactor = counter ? 1 - (trait.counterEffectiveness ?? 0) : 1;

  if (trait.id === "adaptive_shield") {
    ctx.traitTriggered.add(trait.id);
    const sameBuilding = battleHistory.filter((h) => h.buildingId === "fortified-relay").slice(-4);
    const dominantPrev = sameBuilding[sameBuilding.length - 1]?.dominantUnitType;
    if (dominantPrev && dominantPrev === ctx.dominantRole) {
      const baseMul = 1.4;
      const finalMul = counter ? 1 + (baseMul - 1) * counterFactor : baseMul;
      runtime.enemyDefense *= finalMul;
      ctx.notes.push("adaptive_against_dominant_role");
    }
    if (sameBuilding.length >= 4) {
      const uniq = new Set(sameBuilding.map((h) => h.dominantUnitType));
      if (uniq.size === 4) {
        runtime.enemyAttack *= 0.8;
        runtime.enemyDefense *= 0.8;
        runtime.enemySpeed *= 0.8;
        ctx.notes.push("adaptive_confused_penalty");
      }
    }
  }

  if (trait.id === "disciplined_defense") {
    ctx.traitTriggered.add(trait.id);
    if (!counter && playerMorale < 50) runtime.enemyAttack *= 1.2;
    if (!counter && playerMorale > 80) runtime.enemyAttack *= 0.9;
  }
}

function calcHit(att: number, def: number): number {
  return Math.max(1, att * (1 - def / 200));
}

function applyDamageOnShieldFirst(shield: number, hull: number, damage: number): { shield: number; hull: number; shieldBroken: boolean } {
  if (shield > 0) {
    const nextShield = Math.max(0, shield - damage);
    const overflow = Math.max(0, damage - shield);
    return {
      shield: nextShield,
      hull: Math.max(0, hull - overflow),
      shieldBroken: shield > 0 && nextShield <= 0,
    };
  }
  return { shield, hull: Math.max(0, hull - damage), shieldBroken: false };
}

function computeCasualties(units: Record<string, number>, damageTaken: number): Record<string, number> {
  const result: Record<string, number> = {};
  const totalUnits = Object.values(units).reduce((a, b) => a + Math.max(0, b), 0);
  if (!totalUnits) return result;
  const casualtyRatio = clamp(damageTaken / Math.max(60, totalUnits * 26), 0, 1);
  Object.entries(units).forEach(([id, amount]) => {
    const lost = Math.min(amount, Math.floor(amount * casualtyRatio * 0.7));
    if (lost > 0) result[id] = lost;
  });
  return result;
}

export function resolveBattle(input: ResolveBattleInput): BattleResult {
  const tactic = BATTLE_TACTICS[input.army.tacticId];
  const armyBase = calculateArmyEvaluation(input.army);
  const abilities = collectAvatarAbilities(input.avatarProfile?.answers);
  const intel = input.scoutReport?.intelLevel ?? 0;

  const seedBasis = [
    input.seedNow ?? Date.now(),
    input.enemy.id,
    input.army.tacticId,
    JSON.stringify(input.army.units),
    intel,
    input.playerState.tick,
  ].join("|");
  const rng = makeSeededRng(hashString(seedBasis));

  const morale = input.playerState.resources.morale;
  const hull = input.playerState.resources.hull;
  const shield = input.playerState.resources.shield;
  const supplyFlow = input.playerState.resources.supplyFlow;

  const playerMoraleMod = morale > 80 ? 1.15 : morale < 50 ? 0.9 : 1;
  const playerHullMod = hull < 50 ? 0.75 : 1;
  const playerShieldMod = shield > 65 ? 1.12 : 1;
  const intelMod = intel > 80 ? 1.1 : intel < 30 ? 0.8 : 1;
  const lowIntelFriction = intel < 30 ? 0.92 : 1;
  const avatarGlobal = abilities.size > 0 ? 1.04 : 1;

  const playerEval: BattleEvaluation = {
    attack: armyBase.attack * tactic.attackMod * playerMoraleMod * playerHullMod * intelMod * avatarGlobal,
    defense: armyBase.defense * tactic.defenseMod * playerShieldMod * intelMod * lowIntelFriction,
    speed: armyBase.speed * tactic.speedMod * intelMod,
    shield: Math.max(0, armyBase.shield + shield * 0.45),
    garrison: Math.max(0, armyBase.garrison),
  };

  const enemyEval: BattleEvaluation = {
    attack: input.enemy.stats.firepower + input.enemy.stats.garrison * 0.55,
    defense: input.enemy.stats.armor + input.enemy.stats.antiAir * 0.28,
    speed: input.enemy.stats.speed + input.enemy.difficulty * 2,
    shield: input.enemy.stats.shield * 1.8,
    garrison: input.enemy.stats.garrison,
  };

  const runtime: RuntimeStats = {
    playerHull: Math.max(1, playerEval.garrison * 3.8),
    playerShield: Math.max(0, playerEval.shield),
    playerGarrison: playerEval.garrison,
    enemyHull: enemyEval.garrison * 3.4,
    enemyShield: enemyEval.shield,
    enemyGarrison: enemyEval.garrison,
    playerAttack: playerEval.attack,
    playerDefense: playerEval.defense,
    playerSpeed: playerEval.speed,
    enemyAttack: enemyEval.attack,
    enemyDefense: enemyEval.defense,
    enemySpeed: enemyEval.speed,
  };

  const phases: BattlePhase[] = [];
  const phaseCount = 5 + Math.floor(rng() * 6);
  const durationMs = 5000 + Math.floor((phaseCount - 5) * 1000 + rng() * 600);
  const phaseStep = Math.max(850, Math.floor(durationMs / phaseCount));

  const ctx: BattleContext = {
    traitTriggered: new Set<string>(),
    countersUsed: new Set<string>(),
    notes: [],
    playerDamageDone: 0,
    playerDamageTaken: 0,
    unitsTotal: armyBase.totalUnits,
    specialUnitCount: armyBase.specialUnits,
    dominantRole: armyBase.dominantRole,
    raiderLossStreak: getRaiderLossStreak(input.battleHistory),
    tacticalVictory: false,
  };

  input.enemy.traits.filter((t) => t.phase === "always").forEach((trait) => {
    applyTraitAlways(trait, runtime, ctx, morale, input.battleHistory, abilities);
  });

  for (let i = 0; i < phaseCount; i += 1) {
    const t = i * phaseStep;
    const isStart = i <= 1;
    const isMid = i >= Math.floor(phaseCount / 2) - 1 && i <= Math.floor(phaseCount / 2) + 1;
    const isEnd = i >= phaseCount - 2;

    if (isStart) input.enemy.traits.filter((x) => x.phase === "start").forEach((x) => applyTraitStart(x, runtime, ctx, t, rng, abilities, input.army.tacticId, phases));
    if (isMid) input.enemy.traits.filter((x) => x.phase === "mid").forEach((x) => applyTraitMid(x, runtime, ctx, t, abilities, phases));

    if (input.enemy.id === "raider-stronghold" && t > 2000 && t <= 5000) runtime.enemyAttack *= 0.7;

    let playerDamage = calcHit(runtime.playerAttack, runtime.enemyDefense);
    let enemyDamage = calcHit(runtime.enemyAttack, runtime.playerDefense);

    if (runtime.playerSpeed >= runtime.enemySpeed) playerDamage *= 1.06;
    if (runtime.enemySpeed > runtime.playerSpeed) enemyDamage *= 1.06;

    if (input.enemy.id === "fortified-relay") {
      const lockMs = Number(ctx.notes.find((n) => n.startsWith("force_field_lock_ms"))?.split(":")[1] ?? 0);
      if (lockMs > 0 && t < lockMs) {
        const onlySpecialCanDeal = ctx.specialUnitCount > 0;
        playerDamage *= onlySpecialCanDeal ? 0.65 : 0;
      }
    }

    const critRoll = rng();
    if (critRoll > 0.91) {
      playerDamage *= 1.35;
      phases.push(buildPhase(t, "critical_hit", "player", l("Kritikus talalat!", "Critical hit!", "Kritischer Treffer!", "Lovitura critica!"), Math.round(playerDamage)));
    } else if (critRoll < 0.07) {
      enemyDamage *= 1.3;
      phases.push(buildPhase(t, "critical_hit", "enemy", l("Ellenseges kritikus talalat!", "Enemy critical hit!", "Kritischer Gegentreffer!", "Lovitura critica inamica!"), Math.round(enemyDamage)));
    }

    const enemyPost = applyDamageOnShieldFirst(runtime.enemyShield, runtime.enemyHull, playerDamage);
    runtime.enemyShield = enemyPost.shield;
    runtime.enemyHull = enemyPost.hull;
    if (enemyPost.shieldBroken) phases.push(buildPhase(t, "shield_break", "player", l("Ellenseges pajzs attores", "Enemy shield broken", "Feindschild gebrochen", "Scut inamic spart")));

    const playerPost = applyDamageOnShieldFirst(runtime.playerShield, runtime.playerHull, enemyDamage);
    runtime.playerShield = playerPost.shield;
    runtime.playerHull = playerPost.hull;
    if (playerPost.shieldBroken) phases.push(buildPhase(t, "shield_break", "enemy", l("Sajat pajzs attores", "Your shield broken", "Eigenes Schild gebrochen", "Scutul tau a cedat")));

    const garrisonLossEnemy = Math.max(0, Math.floor(playerDamage / 22));
    const garrisonLossPlayer = Math.max(0, Math.floor(enemyDamage / 24));
    runtime.enemyGarrison = Math.max(0, runtime.enemyGarrison - garrisonLossEnemy);
    runtime.playerGarrison = Math.max(0, runtime.playerGarrison - garrisonLossPlayer);

    ctx.playerDamageDone += Math.round(playerDamage);
    ctx.playerDamageTaken += Math.round(enemyDamage);
    phases.push(buildPhase(t, "clash", "player", l("Tuzcsere", "Exchange of fire", "Feuerwechsel", "Schimb de foc"), Math.round(playerDamage)));

    if (runtime.enemyGarrison <= 0 || runtime.playerGarrison <= 0) break;
    if (isEnd) input.enemy.traits.filter((x) => x.phase === "end").forEach((x) => ctx.traitTriggered.add(x.id));
  }

  let victory = runtime.enemyGarrison <= 0 && runtime.playerGarrison > 0;
  const defeat = runtime.playerGarrison <= 0;
  if (!victory && !defeat) {
    victory = ctx.playerDamageDone >= ctx.playerDamageTaken;
    ctx.tacticalVictory = victory;
  }

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

  const playerPowerScore = Math.round(playerEval.attack + playerEval.defense + playerEval.speed + playerEval.garrison * 0.8);
  const enemyPowerScore = Math.round(enemyEval.attack + enemyEval.defense + enemyEval.speed + enemyEval.garrison);

  const rewardPack = createBattleLoot({
    enemy: input.enemy,
    victory,
    tacticalVictory: ctx.tacticalVictory,
    durationMs,
    playerPowerScore,
    enemyPowerScore,
    scoutIntel: intel,
    supplyFlow,
    raiderLootStack: ctx.raiderLossStreak,
    exactUnitCount: ctx.unitsTotal,
    seedRng: rng,
  });

  const intelGained = clamp(
    victory ? (ctx.tacticalVictory ? 10 : 8) : 15,
    0,
    25,
  );

  return {
    victory,
    durationMs,
    phases,
    stats: {
      damageDealt: ctx.playerDamageDone,
      damageReceived: ctx.playerDamageTaken,
      unitsLost: computeCasualties(input.army.units, ctx.playerDamageTaken),
      enemyGarrisonDestroyed: Math.max(0, enemyEval.garrison - runtime.enemyGarrison),
      traitTriggered: [...ctx.traitTriggered],
      counterUsed: [...ctx.countersUsed],
    },
    loot: rewardPack.loot,
    intelGained,
  };
}

