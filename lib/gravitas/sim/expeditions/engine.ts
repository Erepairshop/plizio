import type { StarholdState, LocalizedString } from "../types";
import type { ActiveExpedition, ExpeditionState, ExpeditionDurationType, ExpeditionFleet, ExpeditionEventResult, ExpeditionRouteProfile } from "./types";
import { pushNotification } from "../notifications/engine";
import { pushJournal } from "../shared";
import type { WarRoomUnitId } from "../warroom/types";
import { getRouteProfile, getCrewProfile, getRouteRiskMultiplier, getRouteLootMultiplier, generateExpeditionLesson } from "./logic";
import { giveExpeditionRewards } from "./rewards";
import { getResearchEffect } from "../research/engine";
import { nextRandom, randomInt } from "../rng";

const EXPEDITION_DURATIONS: Record<ExpeditionDurationType, number> = {
  short: 4 * 60 * 60 * 1000, // 4 hours
  medium: 12 * 60 * 60 * 1000, // 12 hours
  long: 24 * 60 * 60 * 1000, // 24 hours
  deep_space: 72 * 60 * 60 * 1000, // 3 days
};

export function createInitialExpeditionState(): ExpeditionState {
  return {
    activeExpeditions: [],
    completedLog: [],
  };
}

export function launchExpedition(
  state: StarholdState,
  durationMode: ExpeditionDurationType,
  routeProfile: ExpeditionRouteProfile,
  fleet: ExpeditionFleet
): StarholdState {
  
  // 1. Validate Sensor level (Gatekeeping)
  const requiredLevel = durationMode === "short" ? 1 : durationMode === "medium" ? 3 : durationMode === "long" ? 5 : 8;
  if (state.modules.sensor.integrity === 0 || !state.modules.sensor.online || state.moduleLevels.sensor < requiredLevel) {
    return state; // Failed validation
  }

  // 2. Remove units from Garrison
  let nextGarrison = { ...state.warRoom.garrison };
  let hasEnough = true;
  for (const [rawUnitId, rawCount] of Object.entries(fleet.units)) {
    const count = rawCount as number;
    if (count <= 0) continue;
    const unitId = rawUnitId as WarRoomUnitId;
    const entries = nextGarrison[unitId] || [];
    const totalAvailable = entries.reduce((sum, e) => sum + e.count, 0);
    if (totalAvailable < count) {
      hasEnough = false;
      break;
    }
  }

  if (!hasEnough) return state;

  // Perform removal (simplistic for now: take from best/first entries)
  for (const [rawUnitId, rawCount] of Object.entries(fleet.units)) {
    const count = rawCount as number;
    if (count <= 0) continue;
    const unitId = rawUnitId as WarRoomUnitId;
    let remainingToTake = count;
    let updatedEntries = [...(nextGarrison[unitId] || [])];
    
    // Sort by level ascending (send rookies to expedition first if we can, or just standard pop)
    updatedEntries.sort((a, b) => a.level - b.level);
    
    for (let i = 0; i < updatedEntries.length && remainingToTake > 0; i++) {
      if (updatedEntries[i].count <= remainingToTake) {
        remainingToTake -= updatedEntries[i].count;
        updatedEntries[i] = { ...updatedEntries[i], count: 0 };
      } else {
        updatedEntries[i] = { ...updatedEntries[i], count: updatedEntries[i].count - remainingToTake };
        remainingToTake = 0;
      }
    }
    nextGarrison[unitId] = updatedEntries.filter(e => e.count > 0);
  }

  // 3. Mark Officer as deployed (busy)
  let nextOfficers = { ...state.officers };
  if (fleet.officerId) {
    const oIndex = nextOfficers.active.findIndex(o => o.id === fleet.officerId);
    if (oIndex !== -1 && nextOfficers.active[oIndex].status === "ready") {
      const updatedOfficers = [...nextOfficers.active];
      updatedOfficers[oIndex] = { ...updatedOfficers[oIndex], status: "wounded", availableAt: Date.now() + EXPEDITION_DURATIONS[durationMode] }; // Treat as unavailable/busy
      nextOfficers.active = updatedOfficers;
    } else {
      return state; // Officer not ready
    }
  }

  const durationMs = EXPEDITION_DURATIONS[durationMode];
  const now = Date.now();
  const crewProfile = getCrewProfile(fleet);

  let currentRngState = state.globalRngState;
  const { value: r1, nextState: s1 } = randomInt(currentRngState, 0, 999);
  currentRngState = s1;

  const newExpedition: ActiveExpedition = {
    id: `exp_${now}_${r1}`,
    durationMode,
    routeProfile,
    crewProfile,
    fleet,
    startedAt: now,
    endsAt: now + durationMs,
    logs: [
      {
        timestamp: now,
        text: { 
          en: "Fleet departed the Starhold. Commencing hyperspace jump into unknown sectors.", 
          hu: "A flotta elhagyta a Starholdot. Hiperugrás az ismeretlen szektorokba megkezdve.", 
          de: "Flotte hat den Starhold verlassen. Hyperraumsprung in unbekannte Sektoren wird eingeleitet.", 
          ro: "Flota a părăsit Starhold. Începe saltul hiperspațial în sectoare necunoscute." 
        },
        resultType: "safe",
      }
    ],
    loot: {},
    status: "en_route",
    recalled: false,
    casualties: {},
  };

  const nextState = {
    ...state,
    globalRngState: currentRngState,
    warRoom: { ...state.warRoom, garrison: nextGarrison },
    officers: nextOfficers,
    journal: pushJournal(state, { 
      en: "A fleet has been dispatched on a deep space expedition.", 
      hu: "Egy flotta mélyűri expedícióra indult.", 
      de: "Eine Flotte wurde auf eine Tiefenraum-Expedition entsandt.", 
      ro: "O flotă a fost trimisă într-o expediție în spațiul îndepărtat." 
    }),
    expeditions: {
      ...state.expeditions,
      activeExpeditions: [...state.expeditions.activeExpeditions, newExpedition],
    }
  };

  return pushNotification(
    nextState,
    "general",
    { en: "Expedition Launched", hu: "Expedíció Indítva", de: "Expedition gestartet", ro: "Expediție Lansată" },
    { en: `The fleet has entered the Void. They will return in ${durationMode} duration.`, hu: `A flotta belépett a Voidba. Visszatérésük várható: ${durationMode}.`, de: `Die Flotte ist ins Nichts eingetreten. Sie wird in ${durationMode} zurückkehren.`, ro: `Flota a intrat în Vid. Se vor întoarce în durata ${durationMode}.` },
    "Compass"
  );
}

export function recallExpedition(state: StarholdState, expeditionId: string): StarholdState {
  const expIndex = state.expeditions.activeExpeditions.findIndex(e => e.id === expeditionId);
  if (expIndex === -1 || state.expeditions.activeExpeditions[expIndex].status !== "en_route") return state;

  const exp = state.expeditions.activeExpeditions[expIndex];
  const now = Date.now();
  const timeSpent = now - exp.startedAt;
  
  // It takes the same amount of time to get back as they spent going out (capped at max duration)
  const returnTime = Math.min(timeSpent, EXPEDITION_DURATIONS[exp.durationMode]);

  const updatedExp: ActiveExpedition = {
    ...exp,
    status: "returning" as const,
    returnAt: now + returnTime,
    recalled: true,
    logs: [
      ...exp.logs,
      {
        timestamp: now,
        text: { 
          en: "Recall order received. Fleet is turning around and burning fuel for home.", 
          hu: "Visszahívási parancs nyugtázva. A flotta visszafordul a bázis felé.", 
          de: "Rückrufbefehl erhalten. Flotte dreht um und verbrennt Treibstoff für den Heimweg.", 
          ro: "Ordin de rechemare primit. Flota se întoarce și arde combustibil spre casă." 
        },
        resultType: "safe" as ExpeditionEventResult,
      }
    ]
  };

  const nextActive = [...state.expeditions.activeExpeditions];
  nextActive[expIndex] = updatedExp;

  return {
    ...state,
    expeditions: {
      ...state.expeditions,
      activeExpeditions: nextActive,
    }
  };
}

export function tickExpeditions(state: StarholdState): StarholdState {
  if (state.tick % 60 !== 0) return state; // Run every minute in sim time

  const now = Date.now();
  let mutated = false;
  let nextActive = [...state.expeditions.activeExpeditions];
  const completedLogAdditions: ActiveExpedition[] = [];
  let nextGarrison = { ...state.warRoom.garrison };
  let nextResources = { ...state.resources };
  let nextOfficers = state.officers;
  let nextTrauma = { ...state.statistics.trauma };
  let journalEntries: LocalizedString[] = [];
  
  let currentRngState = state.globalRngState;

  // Avatar traits logic checks
  const isAggressive = state.derived?.commanderBonuses.isBold;
  const isReckless = state.derived?.commanderBonuses.isReckless;

  for (let i = 0; i < nextActive.length; i++) {
    const exp = nextActive[i];
    
    // Process Random Events
    // During return, events can still happen (retreat is dangerous)
    const dangerReduction = getResearchEffect(state.research.completed, "expedition.dangerRisk") / 100;
    const riskMult = Math.max(0.1, getRouteRiskMultiplier(exp.routeProfile) * (exp.status === "returning" ? 1.5 : 1.0) * (1 + dangerReduction));
    
    const lootBoost = getResearchEffect(state.research.completed, "expedition.lootChance") / 100;
    const lootMult = getRouteLootMultiplier(exp.routeProfile) * (1 + lootBoost);
    
    const { value: rngTick, nextState: sTick } = nextRandom(currentRngState);
    currentRngState = sTick;

    if ((exp.status === "en_route" || exp.status === "returning") && rngTick < 0.05 * riskMult) { 
      mutated = true;
      const { value: eventRoll, nextState: sEvent } = nextRandom(currentRngState);
      currentRngState = sEvent;
      
      let resultType: ExpeditionEventResult = "safe";
      let logText: LocalizedString;

      // Adjust chances based on crew profile
      let discoveryChance = 0.2;
      let rewardChance = 0.25;
      let signalChance = 0.1;
      let lostChance = 0.05;
      
      if (exp.crewProfile === "scout_heavy") { discoveryChance += 0.15; signalChance += 0.1; lostChance = 0; }
      if (exp.crewProfile === "support_heavy") { rewardChance += 0.15; }
      if (exp.routeProfile === "black_route") { lostChance += 0.1; signalChance += 0.1; }

      if (eventRoll < discoveryChance) {
        // Discovery / Intel
        resultType = "discovery";
        const { value: rIntel, nextState: sIntel } = nextRandom(currentRngState);
        currentRngState = sIntel;
        const intelGained = Math.floor((rIntel * 10 + 5) * lootMult);
        exp.loot.intel = (exp.loot.intel || 0) + intelGained;
        logText = { 
          en: `Intercepted old transmission buoys. Compiled ${intelGained} intel.`, 
          hu: `Régi bójákat fogtunk be. ${intelGained} adat nyerve.`, 
          de: `Alte Übertragungsbojen abgefangen. ${intelGained} Daten gesammelt.`, 
          ro: `Geamanduri interceptate. ${intelGained} intel obținut.` 
        };
      } else if (eventRoll < discoveryChance + rewardChance) {
        // Reward / Supply
        resultType = "reward";
        const { value: rSupply, nextState: sSupply } = nextRandom(currentRngState);
        currentRngState = sSupply;
        const supplyGained = Math.floor((rSupply * 150 + 50) * lootMult);
        exp.loot.supply = (exp.loot.supply || 0) + supplyGained;
        logText = { 
          en: `Discovered a cargo pod. ${supplyGained} supplies secured.`, 
          hu: `Rakománykapszula. ${supplyGained} készlet biztosítva.`, 
          de: `Frachtkapsel entdeckt. ${supplyGained} Vorräte gesichert.`, 
          ro: `Capsulă descoperită. ${supplyGained} provizii asigurate.` 
        };
      } else if (eventRoll < discoveryChance + rewardChance + signalChance) {
        resultType = "signal_trace";
        const { value: rSignal, nextState: sSignal } = nextRandom(currentRngState);
        currentRngState = sSignal;
        const supplyGained = Math.floor((rSignal * 100) * lootMult);
        exp.loot.supply = (exp.loot.supply || 0) + supplyGained;
        logText = { 
          en: `Traced a faint distress signal. Found an abandoned cache with ${supplyGained} supplies.`, 
          hu: `Egy gyenge vészjelzést követtünk. Találtunk egy elhagyatott rejtekhelyet ${supplyGained} ellátmánnyal.`, 
          de: `Einem schwachen Notsignal gefolgt. Versteck mit ${supplyGained} Vorräten gefunden.`, 
          ro: `Am urmărit un semnal slab de primejdie. Am găsit o ascunzătoare abandonată cu ${supplyGained} provizii.` 
        };
      } else if (eventRoll < discoveryChance + rewardChance + signalChance + lostChance) {
        resultType = "lost_route";
        // Delay the expedition
        const { value: rDelay, nextState: sDelay } = nextRandom(currentRngState);
        currentRngState = sDelay;
        const delayMs = 60 * 60 * 1000 * Math.max(1, Math.floor(rDelay * 3));
        exp.endsAt += delayMs;
        if (exp.returnAt) exp.returnAt += delayMs;
        logText = { 
          en: `Navigation systems malfunctioned. Expedition delayed by severe spatial anomalies.`, 
          hu: `Navigációs rendszerek meghibásodtak. Az expedíciót súlyos téranomáliák késleltetik.`, 
          de: `Navigationssysteme ausgefallen. Expedition durch schwere Raumanomalien verzögert.`, 
          ro: `Sistemele de navigație s-au defectat. Expediție întârziată de anomalii spațiale severe.` 
        };
      } else {
        // Danger or Disaster
        const { value: rDisaster, nextState: sDisaster } = nextRandom(currentRngState);
        currentRngState = sDisaster;
        const isDisaster = rDisaster < 0.4 * riskMult;
        
        const { value: rAmbush, nextState: sAmbush } = nextRandom(currentRngState);
        currentRngState = sAmbush;

        const ambushSurviveChance = isAggressive ? 0.75 : 0.6; // Avatar effect
        
        if (exp.crewProfile === "assault_heavy" && rAmbush < ambushSurviveChance) {
          // Assault heavy fends off the ambush without losses
          resultType = "ambush_survived";
          logText = {
            en: "Ambushed in deep space, but our assault forces crushed the attackers.",
            hu: "Rajtaütés a mélyűrben, de rohamcsapataink megsemmisítették a támadókat.",
            de: "Im Tiefenraum überfallen, aber unsere Sturmtruppen zerschmetterten die Angreifer.",
            ro: "Ambuscadă în spațiul adânc, dar forțele noastre de asalt i-au strivit pe atacatori."
          };
        } else {
          resultType = isDisaster ? "disaster" : "danger";
          
          // Calculate casualty
          const { value: rCasualty, nextState: sCasualty } = nextRandom(currentRngState);
          currentRngState = sCasualty;
          let casualtyCount = isDisaster ? Math.floor(rCasualty * 4) + 2 : 1;
          
          if (exp.crewProfile === "support_heavy") casualtyCount = Math.max(0, casualtyCount - 2);
          if (exp.crewProfile === "tank_heavy") casualtyCount = Math.max(0, casualtyCount - 2);

          // Avatar reckless effect: slightly more casualties on disasters in black route
          if (isReckless && exp.routeProfile === "black_route" && isDisaster) {
            casualtyCount += 1;
          }

          let lostUnitId: WarRoomUnitId | null = null;
          const availableUnits = Object.entries(exp.fleet.units).filter(([_, count]) => count > 0);
          
          if (availableUnits.length > 0 && casualtyCount > 0) {
            const { value: rUnit, nextState: sUnit } = randomInt(currentRngState, 0, availableUnits.length - 1);
            currentRngState = sUnit;
            const randomUnit = availableUnits[rUnit];
            lostUnitId = randomUnit[0] as WarRoomUnitId;
            const actualLoss = Math.min(randomUnit[1], casualtyCount);
            
            exp.fleet.units[lostUnitId] -= actualLoss;
            exp.casualties[lostUnitId] = (exp.casualties[lostUnitId] || 0) + actualLoss;

            // Update trauma counters
            nextTrauma.ambushesSuffered += 1;
            nextTrauma.expeditionCasualties += actualLoss;

            logText = {
              en: `Hostile encounter. We lost ${actualLoss} ${lostUnitId}(s) during the skirmish.`,
              hu: `Ellenséges találkozás. Elvesztettünk ${actualLoss} ${lostUnitId}-t az összecsapásban.`,
              de: `Feindliche Begegnung. Wir haben ${actualLoss} ${lostUnitId}(s) im Scharmützel verloren.`,
              ro: `Întâlnire ostilă. Am pierdut ${actualLoss} ${lostUnitId} în timpul luptei.`
            };
          } else {
            // Also count as ambush suffered even if no casualties
            nextTrauma.ambushesSuffered += 1;

            logText = { 
              en: "Navigated through a dense hazard. Hull suffered abrasions but no units lost.", 
              hu: "Sűrű veszélyzónán haladtunk át. A hajótest sérült, de nincs veszteség.", 
              de: "Durch eine dichte Gefahrenzone navigiert. Hülle beschädigt, keine Verluste.", 
              ro: "Am navigat printr-un pericol dens. Coca a suferit daune, nicio pierdere." 
            };
          }
        }
      }

      exp.logs.push({ timestamp: now, text: logText, resultType });
    }

    // Process Completion / Return
    const isDone = (exp.status === "en_route" && now >= exp.endsAt) || (exp.status === "returning" && exp.returnAt && now >= exp.returnAt);
    
    if (isDone) {
      mutated = true;
      exp.status = "completed";
      
      const { nextState: rewardedState, journalEntries: rewardJournals } = giveExpeditionRewards(
        {...state, globalRngState: currentRngState}, 
        exp
      );
      
      currentRngState = rewardedState.globalRngState;
      nextResources = rewardedState.resources;
      
      // Merge reputation if it changed
      if (rewardedState.factionReputation.reputation !== state.factionReputation.reputation) {
        state = {
          ...state,
          factionReputation: rewardedState.factionReputation
        };
      }
      
      // 2. Return Units
      for (const [rawUnitId, rawCount] of Object.entries(exp.fleet.units)) {
        const count = rawCount as number;
        if (count <= 0) continue;
        const unitId = rawUnitId as WarRoomUnitId;
        const existing = nextGarrison[unitId] || [];
        existing.push({ count, level: 1, battlesSurvived: 1 }); // Returning from expedition counts as a battle survived
        nextGarrison[unitId] = existing;
      }

      // 3. Return Officer
      if (exp.fleet.officerId) {
        const oIndex = nextOfficers.active.findIndex(o => o.id === exp.fleet.officerId);
        if (oIndex !== -1) {
          const updatedOfficers = [...nextOfficers.active];
          updatedOfficers[oIndex] = { 
            ...updatedOfficers[oIndex], 
            status: "ready", 
            availableAt: 0,
            xp: updatedOfficers[oIndex].xp + 75 // Flat XP for expedition
          };
          nextOfficers.active = updatedOfficers;
        }
      }

      const hadLosses = Object.values(exp.casualties).some(count => (count ?? 0) > 0);
      exp.lessonText = generateExpeditionLesson(exp.routeProfile, exp.crewProfile, exp.recalled, hadLosses);

      // 4. Wrap up logs
      exp.logs.push({
        timestamp: now,
        text: { en: "Expedition concluded. Fleet has docked successfully.", hu: "Expedíció befejezve. A flotta sikeresen dokkolt.", de: "Expedition abgeschlossen. Flotte erfolgreich angedockt.", ro: "Expediție încheiată. Flota a acostat cu succes." },
        resultType: "safe",
      });

      completedLogAdditions.push(exp);
      journalEntries.push(...rewardJournals);
      
      state = pushNotification(
        state,
        "general",
        { en: "Expedition Returned", hu: "Expedíció Visszatért", de: "Expedition Zurückgekehrt", ro: "Expediție Întoarsă" },
        journalEntries[journalEntries.length - 1],
        "Compass"
      );
    }
  }

  if (mutated) {
    let finalState = {
      ...state,
      globalRngState: currentRngState,
      resources: nextResources,
      warRoom: { ...state.warRoom, garrison: nextGarrison },
      officers: nextOfficers,
      statistics: {
        ...state.statistics,
        trauma: nextTrauma,
      },
      expeditions: {
        activeExpeditions: nextActive.filter(e => e.status !== "completed" && e.status !== "lost"),
        completedLog: [...state.expeditions.completedLog, ...completedLogAdditions].slice(-20), // Keep last 20
      }
    };
    
    for (const j of journalEntries) {
      finalState.journal = pushJournal(finalState, j);
    }

    return finalState;
  }

  return { ...state, globalRngState: currentRngState };
}