export interface CasualtyReport {
  killed: Record<string, number>;
  wounded: Record<string, number>;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function calculateCasualties(
  army: Record<string, number>,
  result: { victory: boolean; damageDealt: number; damageReceived: number },
  isDefense: boolean,
): CasualtyReport {
  const dealt = Math.max(0, result.damageDealt);
  const received = Math.max(0, result.damageReceived);
  const damageRatio = clamp(received / Math.max(1, dealt + received), 0, 1);

  const killed: Record<string, number> = {};
  const wounded: Record<string, number> = {};

  Object.entries(army).forEach(([unitId, rawCount]) => {
    const unitCount = Math.max(0, Math.floor(rawCount));
    if (unitCount <= 0) return;

    let killedCount = 0;
    let woundedCount = 0;

    if (result.victory) {
      killedCount = Math.floor(unitCount * damageRatio * 0.15);
      woundedCount = Math.floor(unitCount * damageRatio * 0.25);
    } else if (isDefense) {
      killedCount = Math.floor(unitCount * (0.15 + damageRatio * 0.2));
      woundedCount = Math.floor(unitCount * (0.3 + damageRatio * 0.25));
    } else {
      killedCount = Math.floor(unitCount * (0.1 + damageRatio * 0.15));
      woundedCount = Math.floor(unitCount * (0.2 + damageRatio * 0.1));
    }

    killedCount = clamp(killedCount, 0, unitCount);
    woundedCount = clamp(woundedCount, 0, Math.max(0, unitCount - killedCount));

    if (killedCount > 0) killed[unitId] = killedCount;
    if (woundedCount > 0) wounded[unitId] = woundedCount;
  });

  return { killed, wounded };
}
