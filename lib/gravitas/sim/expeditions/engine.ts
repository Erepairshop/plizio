import type { StarholdState, LocalizedString } from "../types";
import type { ActiveExpedition, ExpeditionState, ExpeditionDurationType, ExpeditionFleet, ExpeditionEventResult, ExpeditionRouteProfile } from "./types";
import { pushNotification } from "../notifications/engine";
import { pushJournal, withAlert } from "../shared";
import type { WarRoomUnitId } from "../warroom/types";
import { getRouteProfile, getCrewProfile, getRouteRiskMultiplier, getRouteLootMultiplier, generateExpeditionLesson } from "./logic";
import { giveExpeditionRewards } from "./rewards";
import { getResearchEffect } from "../research/engine";
import { nextRandom, randomInt } from "../rng";
import { reserveUnits, releaseAllocation, releaseAllocationWithCasualties, updateAllocationStatus, reportLostAllocation } from "../warroom/ledger";
import { pushArchiveEvent } from "../archive/manager";

const EXPEDITION_DURATIONS_TICKS: Record<ExpeditionDurationType, number> = {
  short: 4 * 3600, // 4 hours in ticks (1 tick = 1 sec)
  medium: 12 * 3600, // 12 hours
  long: 24 * 3600, // 24 hours
  deep_space: 72 * 3600, // 3 days
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
    const error: LocalizedString = {
      en: `Sensor level too low. Level ${requiredLevel} required.`,
      hu: `Szenzor szint túl alacsony. ${requiredLevel}. szint szükséges.`,
      de: `Sensorstufe zu niedrig. Stufe ${requiredLevel} erforderlich.`,
      ro: `Nivel senzor prea mic. Nivelul ${requiredLevel} este necesar.`,
    };
    return {
      ...withAlert(state, error),
      lastActionFeedback: {
        actionType: "expedition_launch",
        success: false,
        summary: error,
      }
    };
  }

  let currentRngState = state.globalRngState;
  const { value: r1, nextState: s1 } = randomInt(currentRngState, 0, 999);
  currentRngState = s1;

  const expeditionId = `exp_${state.tick}_${r1}`;

  // 2. Validate Officer before reserving units so failed launches do not leak allocations
  let nextOfficers = { ...state.officers };
  if (fleet.officerId) {
    const oIndex = nextOfficers.active.findIndex(o => o.id === fleet.officerId);
    if (oIndex !== -1 && nextOfficers.active[oIndex].status === "ready") {
      const updatedOfficers = [...nextOfficers.active];
      // Officer becomes busy until the expedition ends
      updatedOfficers[oIndex] = { ...updatedOfficers[oIndex], status: "wounded", availableAtTick: state.tick + EXPEDITION_DURATIONS_TICKS[durationMode] };      nextOfficers.active = updatedOfficers;
    } else {
      const error: LocalizedString = {
        en: "Expedition failed. Selected officer is wounded or unavailable.",
        hu: "Az expedíció meghiúsult. A választott tiszt sebesült vagy nem elérhető.",
        de: "Expedition fehlgeschlagen. Der gewählte Offizier ist verwundet oder nicht verfügbar.",
        ro: "Expediție eșuată. Ofițerul selectat este rănit sau indisponibil.",
      };
      return {
        ...withAlert(state, error),
        lastActionFeedback: {
          actionType: "expedition_launch",
          success: false,
          summary: error,
        }
      };
    }
  }

  // 3. Reserve units via ledger once the launch is guaranteed to proceed
  const reservation = reserveUnits(state, expeditionId, "expedition", fleet.units);
  if (!reservation.success) {
    const missing = Object.entries(reservation.missingUnits ?? {})
      .map(([id, count]) => `${count} ${id}`)
      .join(", ");
    const error: LocalizedString = {
      en: `Expedition failed. Missing units: ${missing}`,
      hu: `Expedíció sikertelen. Hiányzó egységek: ${missing}`,
      de: `Expedition fehlgeschlagen. Fehlende Einheiten: ${missing}`,
      ro: `Expediție eșuată. Unități lipsă: ${missing}`,
    };
    return {
      ...withAlert(state, error),
      lastActionFeedback: {
        actionType: "expedition_launch",
        success: false,
        summary: error,
      }
    };
  }

  // Set status to traveling in the ledger
  let nextState = updateAllocationStatus(reservation.nextState, expeditionId, "traveling");

  const durationTicks = EXPEDITION_DURATIONS_TICKS[durationMode];
  const crewProfile = getCrewProfile(fleet);

  const newExpedition: ActiveExpedition = {
    id: expeditionId,
    durationMode,
    routeProfile,
    crewProfile,
    fleet: {
      ...fleet,
      originalComposition: { ...fleet.units },
    },
    startedAtTick: state.tick,
    endsAtTick: state.tick + durationTicks,
    logs: [
      {
        tick: state.tick,
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
    casualties: { killed: {}, wounded: {} },
  };

  const successSummary: LocalizedString = { 
    en: "A fleet has been dispatched on a deep space expedition.", 
    hu: "Egy flotta mélyűri expedícióra indult.", 
    de: "Eine flotta wurde auf eine Tiefenraum-Expedition entsandt.", 
    ro: "O flotă a fost trimisă într-o expediție în spațiul îndepărtat." 
  };

  nextState = {
    ...nextState,
    globalRngState: currentRngState,
    officers: nextOfficers,
    journal: pushJournal(nextState, successSummary),
    expeditions: {
      ...nextState.expeditions,
      activeExpeditions: [...nextState.expeditions.activeExpeditions, newExpedition],
    },
    lastActionFeedback: {
      actionType: "expedition_launch",
      success: true,
      summary: successSummary,
      etaSummary: `Duration: ${durationMode}`,
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
  const ticksSpent = state.tick - exp.startedAtTick;
  
  // It takes the same amount of time to get back as they spent going out (capped at max duration)
  const returnTicks = Math.min(ticksSpent, EXPEDITION_DURATIONS_TICKS[exp.durationMode]);

  const updatedExp: ActiveExpedition = {
    ...exp,
    status: "returning" as const,
    returnAtTick: state.tick + returnTicks,
    recalled: true,
    logs: [
      ...exp.logs,
      {
        tick: state.tick,
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

  const stateWithAllocation = updateAllocationStatus(state, expeditionId, "returning");

  return {
    ...stateWithAllocation,
    expeditions: {
      ...stateWithAllocation.expeditions,
      activeExpeditions: nextActive,
    }
  };
}

export function tickExpeditions(state: StarholdState): StarholdState {
  if (state.tick % 60 !== 0) return state; // Run every minute in sim time

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
        const delayTicks = 3600 * Math.max(1, Math.floor(rDelay * 3));
        exp.endsAtTick += delayTicks;
        if (exp.returnAtTick) exp.returnAtTick += delayTicks;
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
          let totalLost = isDisaster ? Math.floor(rCasualty * 4) + 2 : 1;
          
          if (exp.crewProfile === "support_heavy") totalLost = Math.max(0, totalLost - 2);
          if (exp.crewProfile === "tank_heavy") totalLost = Math.max(0, totalLost - 2);

          // Avatar reckless effect
          if (isReckless && exp.routeProfile === "black_route" && isDisaster) {
            totalLost += 1;
          }

          let lostUnitId: WarRoomUnitId | null = null;
          const availableUnits = Object.entries(exp.fleet.units).filter(([_, count]) => count > 0);
          
          if (availableUnits.length > 0 && totalLost > 0) {
            const { value: rUnit, nextState: sUnit } = randomInt(currentRngState, 0, availableUnits.length - 1);
            currentRngState = sUnit;
            const randomUnit = availableUnits[rUnit];
            lostUnitId = randomUnit[0] as WarRoomUnitId;
            const actualLoss = Math.min(randomUnit[1], totalLost);
            
            exp.fleet.units[lostUnitId] -= actualLoss;
            
            // Distinguish between killed and wounded
            const killedCount = Math.floor(actualLoss * (isDisaster ? 0.7 : 0.3));
            const woundedCount = actualLoss - killedCount;
            
            if (killedCount > 0) exp.casualties.killed[lostUnitId] = (exp.casualties.killed[lostUnitId] || 0) + killedCount;
            if (woundedCount > 0) exp.casualties.wounded[lostUnitId] = (exp.casualties.wounded[lostUnitId] || 0) + woundedCount;

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

      exp.logs.push({ tick: state.tick, text: logText, resultType });
    }

    // Check if fleet was completely wiped out
    const totalRemaining = Object.values(exp.fleet.units).reduce((sum, count) => sum + (count ?? 0), 0);
    if (totalRemaining <= 0 && exp.status !== "lost" && exp.status !== "completed") {
      mutated = true;
      exp.status = "lost";
      
      state = reportLostAllocation(state, exp.id);
      nextGarrison = state.warRoom.garrison;
      
      if (exp.fleet.officerId) {
        const oIndex = nextOfficers.active.findIndex(o => o.id === exp.fleet.officerId);
        if (oIndex !== -1) {
          const updatedOfficers = [...nextOfficers.active];
          updatedOfficers[oIndex] = { ...updatedOfficers[oIndex], status: "wounded", availableAtTick: state.tick + 14400 };          nextOfficers.active = updatedOfficers;
        }
      }

      exp.logs.push({
        tick: state.tick,
        text: { en: "Expedition lost. All units destroyed in the Void.", hu: "Expedíció elveszett. Minden egység megsemmisült az űrben.", de: "Expedition verloren. Alle Einheiten im Nichts zerstört.", ro: "Expediție pierdută. Toate unitățile distruse în Vid." },
        resultType: "disaster",
      });

      completedLogAdditions.push(exp);
      const lossJournal: LocalizedString = { en: `Expedition fleet ${exp.id} lost all units.`, hu: `A(z) ${exp.id} expedíciós flotta teljesen megsemmisült.`, de: `Expeditionsflotte ${exp.id} hat alle Einheiten verloren.`, ro: `Flota de expediție ${exp.id} a pierdut toate unitățile.` };
      journalEntries.push(lossJournal);
      
      state = pushNotification(
        state,
        "raid",
        { en: "Expedition Lost", hu: "Expedíció Elveszett", de: "Expedition Verloren", ro: "Expediție Pierdută" },
        lossJournal,
        "AlertTriangle"
      );

      state = pushArchiveEvent(state, {
        category: "expedition",
        severity: "critical",
        importance: 4,
        title: { en: "Expedition Lost", hu: "Expedíció Elveszett", de: "Expedition Verloren", ro: "Expediție Pierdută" },
        summary: lossJournal,
        details: {
          targetId: exp.id,
          outcome: "lost",
          casualties: exp.casualties,
          officerId: exp.fleet.officerId,
        }
      });
      continue;
    }

    // Process Completion / Return
    const isDone = (exp.status === "en_route" && state.tick >= exp.endsAtTick) || (exp.status === "returning" && exp.returnAtTick && state.tick >= exp.returnAtTick);
    
    if (isDone) {
      mutated = true;
      
      if (exp.status === "en_route") {
        exp.status = "returning";
        const ticksSpent = state.tick - exp.startedAtTick;
        const returnTicks = Math.min(ticksSpent, EXPEDITION_DURATIONS_TICKS[exp.durationMode]);
        exp.returnAtTick = state.tick + returnTicks;
        state = updateAllocationStatus(state, exp.id, "returning");
        
        exp.logs.push({
          tick: state.tick,
          text: { en: "Expedition target reached. Commencing return trip.", hu: "Az expedíció elérte a célpontot. Hazautazás megkezdve.", de: "Expeditionsziel erreicht. Rückreise beginnt.", ro: "Ținta expediției a fost atinsă. Începe călătoria de întoarcere." },
          resultType: "safe",
        });
        
        journalEntries.push({
          en: `Expedition ${exp.id} reached target. Returning to base.`,
          hu: `A(z) ${exp.id} expedíció elérte a célpontot. Visszatér a bázisra.`,
          de: `Expedition ${exp.id} hat das Ziel erreicht. Rückkehr zur Basis.`,
          ro: `Expediția ${exp.id} a atins ținta. Se întoarce la bază.`,
        });
      } else {
        exp.status = "completed";
        
        const { nextState: rewardedState, journalEntries: rewardJournals } = giveExpeditionRewards(
          {...state, globalRngState: currentRngState}, 
          exp
        );
        
        currentRngState = rewardedState.globalRngState;
        nextResources = rewardedState.resources;
        
        if (rewardedState.factionReputation.reputation !== state.factionReputation.reputation) {
          state = { ...state, factionReputation: rewardedState.factionReputation };
        }
        
        const totalKilled = Object.values(exp.casualties.killed).reduce((sum, count) => sum + (count ?? 0), 0);
        const totalWounded = Object.values(exp.casualties.wounded).reduce((sum, count) => sum + (count ?? 0), 0);
        
        // 2. Return Survivors via Ledger
        state = (totalKilled > 0 || totalWounded > 0)
          ? releaseAllocationWithCasualties(state, exp.id, exp.casualties.killed, exp.casualties.wounded) 
          : releaseAllocation(state, exp.id);
        
        nextGarrison = state.warRoom.garrison;

        if (exp.fleet.officerId) {
          const oIndex = nextOfficers.active.findIndex(o => o.id === exp.fleet.officerId);
          if (oIndex !== -1) {
            const updatedOfficers = [...nextOfficers.active];
            updatedOfficers[oIndex] = { 
              ...updatedOfficers[oIndex], 
              status: "ready", 
              availableAtTick: 0,
              xp: updatedOfficers[oIndex].xp + 75
            };
            nextOfficers.active = updatedOfficers;
          }
        }

        const hadLosses = totalKilled > 0 || totalWounded > 0;
        exp.lessonText = generateExpeditionLesson(exp.routeProfile, exp.crewProfile, exp.recalled, hadLosses);

        exp.logs.push({
          tick: state.tick,
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

        state = pushArchiveEvent(state, {
          category: "expedition",
          severity: totalKilled > 0 ? "warning" : "success",
          importance: 3,
          title: { en: "Expedition Returned", hu: "Expedíció Visszatért", de: "Expedition Zurückgekehrt", ro: "Expediție Întoarsă" },
          summary: journalEntries[journalEntries.length - 1],
          details: {
            targetId: exp.id,
            outcome: "completed",
            loot: exp.loot,
            casualties: exp.casualties,
            officerId: exp.fleet.officerId,
          }
        });
      }
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
        completedLog: [...state.expeditions.completedLog, ...completedLogAdditions].slice(-20),
      }
    };
    
    for (const j of journalEntries) {
      finalState.journal = pushJournal(finalState, j);
    }

    return finalState;
  }

  return { ...state, globalRngState: currentRngState };
}
