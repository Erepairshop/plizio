import type { StarholdState, LocalizedString } from "../../types";
import type { StarChamberOffer, StarChamberRotationState } from "./types";
import { DAILY_OFFER_POOL, WEEKLY_OFFER_POOL } from "./registry";
import { randomInt, nextRandom } from "../../rng";
import { withAlert, addResourceDelta, clamp, pushJournal } from "../../shared";
import { pushArchiveEvent } from "../../archive/manager";

const TICKS_PER_DAY = 86400;
const TICKS_PER_WEEK = 604800;

/**
 * Refreshes the rotation if a new day or week has started.
 * Uses seeded RNG for determinism.
 */
export function tickStarChamberRotation(state: StarholdState): StarholdState {
  const currentDay = Math.floor(state.tick / TICKS_PER_DAY);
  const currentWeek = Math.floor(state.tick / TICKS_PER_WEEK);
  
  const lastDay = Math.floor(state.starChamber.rotation.lastDailyRefreshTick / TICKS_PER_DAY);
  const lastWeek = Math.floor(state.starChamber.rotation.lastWeeklyRefreshTick / TICKS_PER_WEEK);

  let nextState = state;
  let mutated = false;

  if (currentDay > lastDay || state.starChamber.rotation.dailyOffers.length === 0) {
    nextState = refreshDailyOffers(nextState);
    mutated = true;
  }

  if (currentWeek > lastWeek || state.starChamber.rotation.weeklyOffers.length === 0) {
    nextState = refreshWeeklyOffers(nextState);
    mutated = true;
  }

  return nextState;
}

function refreshDailyOffers(state: StarholdState): StarholdState {
  let rng = state.globalRngState;
  const offers: StarChamberOffer[] = [];
  
  // Pick 2 random offers from the daily pool
  const pool = [...DAILY_OFFER_POOL];
  for (let i = 0; i < 2; i++) {
    const { value: index, nextState: n1 } = randomInt(rng, 0, pool.length - 1);
    rng = n1;
    const base = pool.splice(index, 1)[0];
    offers.push({
      ...base,
      instanceId: `daily_${state.tick}_${i}`,
      claimedCount: 0,
    });
  }

  return {
    ...state,
    globalRngState: rng,
    starChamber: {
      ...state.starChamber,
      rotation: {
        ...state.starChamber.rotation,
        dailyOffers: offers,
        lastDailyRefreshTick: state.tick,
      }
    }
  };
}

function refreshWeeklyOffers(state: StarholdState): StarholdState {
  let rng = state.globalRngState;
  const offers: StarChamberOffer[] = [];
  
  // Pick 2 random offers from the weekly pool
  const pool = [...WEEKLY_OFFER_POOL];
  for (let i = 0; i < 2; i++) {
    const { value: index, nextState: n1 } = randomInt(rng, 0, pool.length - 1);
    rng = n1;
    const base = pool.splice(index, 1)[0];
    offers.push({
      ...base,
      instanceId: `weekly_${state.tick}_${i}`,
      claimedCount: 0,
    });
  }

  return {
    ...state,
    globalRngState: rng,
    starChamber: {
      ...state.starChamber,
      rotation: {
        ...state.starChamber.rotation,
        weeklyOffers: offers,
        lastWeeklyRefreshTick: state.tick,
      }
    }
  };
}

export function claimStarChamberOffer(state: StarholdState, instanceId: string): StarholdState {
  const isDaily = instanceId.startsWith("daily");
  const offers = isDaily ? state.starChamber.rotation.dailyOffers : state.starChamber.rotation.weeklyOffers;
  const offerIndex = offers.findIndex(o => o.instanceId === instanceId);
  
  if (offerIndex === -1) return state;
  const offer = offers[offerIndex];

  if (offer.claimedCount >= offer.stock) {
    return withAlert(state, { en: "Offer out of stock.", hu: "Az ajánlat elfogyott.", de: "Angebot ausverkauft.", ro: "Ofertă epuizată." });
  }

  // Check costs
  if (offer.cost.stars && state.progression.stars < offer.cost.stars) {
    return withAlert(state, { en: "Not enough stars.", hu: "Nincs elég csillag.", de: "Nicht genug Sterne.", ro: "Nu sunt destule stele." });
  }
  if (offer.cost.resources) {
    for (const [resId, cost] of Object.entries(offer.cost.resources)) {
      if ((state.resources as any)[resId] < (cost ?? 0)) {
        return withAlert(state, { en: `Not enough ${resId}.`, hu: `Nincs elég ${resId}.`, de: `Nicht genug ${resId}.`, ro: `Nu este destul ${resId}.` });
      }
    }
  }

  let nextState = state;

  // Deduct costs
  if (offer.cost.stars) {
    nextState.progression.stars -= offer.cost.stars;
  }
  if (offer.cost.resources) {
    const delta: any = {};
    for (const [resId, cost] of Object.entries(offer.cost.resources)) {
      delta[resId] = -(cost ?? 0);
    }
    nextState.resources = addResourceDelta(nextState.resources, delta);
  }

  // Apply effects
  nextState = applyOfferEffect(nextState, offer);

  // Update claimed count
  const nextOffers = [...offers];
  nextOffers[offerIndex] = { ...offer, claimedCount: offer.claimedCount + 1 };

  return {
    ...nextState,
    starChamber: {
      ...nextState.starChamber,
      rotation: {
        ...nextState.starChamber.rotation,
        dailyOffers: isDaily ? nextOffers : state.starChamber.rotation.dailyOffers,
        weeklyOffers: isDaily ? state.starChamber.rotation.weeklyOffers : nextOffers,
      }
    }
  };
}

function applyOfferEffect(state: StarholdState, offer: StarChamberOffer): StarholdState {
  let nextState = state;
  const journalText: LocalizedString = {
    en: `Star Chamber: Claimed ${offer.name.en}.`,
    hu: `Csillagkamra: ${offer.name.hu} beváltva.`,
    de: `Sternenkammer: ${offer.name.de} beansprucht.`,
    ro: `Camera Stelelor: ${offer.name.ro} revendicat.`
  };

  switch (offer.type) {
    case "refill":
      if (offer.targetId === "power") {
        nextState.resources.power = clamp(nextState.resources.power + (offer.effectValue ?? 0));
      } else if (offer.targetId === "supply") {
        nextState.resources.supply = clamp(nextState.resources.supply + (offer.effectValue ?? 0));
      }
      break;
    case "cooldown_reset":
      const unlocked = state.starChamber.unlockedItemIds;
      if (unlocked.length > 0) {
        let rng = state.globalRngState;
        const { value: index, nextState: n1 } = randomInt(rng, 0, unlocked.length - 1);
        const itemId = unlocked[index];
        const nextCooldowns = { ...state.starChamber.itemCooldowns };
        delete nextCooldowns[itemId];
        nextState = {
          ...state,
          globalRngState: n1,
          starChamber: {
            ...state.starChamber,
            itemCooldowns: nextCooldowns,
          }
        };
      }
      break;
    case "consumable":
      if (offer.id === "weekly_chrono_overdrive") {
        nextState = {
          ...nextState,
          galaxy: {
            ...nextState.galaxy,
            activeFleets: nextState.galaxy.activeFleets.map(f => ({ ...f, arrivalTime: state.tick }))
          }
        };
      }
      break;
    case "temporary_buff":
      // Buffs would be handled in tick.ts or specific engines by checking active buffs
      // For now we just log it, but in a real system we'd add to a 'buffs' array in state
      break;
  }

  nextState.journal = pushJournal(nextState, journalText);
  nextState.alert = journalText;

  return pushArchiveEvent(nextState, {
    category: "reward",
    severity: "success",
    importance: 3,
    title: offer.name,
    summary: offer.description,
    details: { targetId: offer.id }
  });
}
