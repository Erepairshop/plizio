import type { StarholdState, LocalizedString } from "../types";
import type { ActiveExpedition, ExpeditionState, ExpeditionDurationType, ExpeditionFleet, ExpeditionEventResult } from "./types";
import { pushNotification } from "../notifications/engine";
import { pushJournal } from "../shared";
import type { WarRoomUnitId } from "../warroom/types";

function rng() { return Math.random(); }

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

  const newExpedition: ActiveExpedition = {
    id: `exp_${now}_${Math.floor(Math.random() * 1000)}`,
    durationMode,
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
  };

  const nextState = {
    ...state,
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

  const updatedExp = {
    ...exp,
    status: "returning" as const,
    returnAt: now + returnTime,
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
  let journalEntries: LocalizedString[] = [];

  for (let i = 0; i < nextActive.length; i++) {
    const exp = nextActive[i];
    
    // Process Random Events while en route
    if (exp.status === "en_route" && rng() < 0.05) { // 5% chance per minute to hit an event
      mutated = true;
      const eventRoll = rng();
      let resultType: ExpeditionEventResult = "safe";
      let logText: LocalizedString;

      if (eventRoll < 0.4) {
        // Discovery / Intel
        resultType = "discovery";
        exp.loot.intel = (exp.loot.intel || 0) + Math.floor(rng() * 10) + 5;
        logText = { 
          en: "Intercepted old transmission buoys. We've compiled useful intel.", 
          hu: "Régi kommunikációs bójákat fogtunk be. Hasznos adatokat nyertünk ki.", 
          de: "Alte Übertragungsbojen abgefangen. Wir haben nützliche Daten gesammelt.", 
          ro: "Am interceptat geamanduri de transmisie vechi. Am compilat informații utile." 
        };
      } else if (eventRoll < 0.7) {
        // Reward / Supply
        resultType = "reward";
        exp.loot.supply = (exp.loot.supply || 0) + Math.floor(rng() * 150) + 50;
        logText = { 
          en: "Discovered an intact cargo pod floating in the debris field. Supplies secured.", 
          hu: "Egy érintetlen rakománykapszulát találtunk a törmelékmezőben. Készletek biztosítva.", 
          de: "Intakte Frachtkapsel im Trümmerfeld entdeckt. Vorräte gesichert.", 
          ro: "Am descoperit o capsulă de marfă intactă plutind în câmpul de resturi. Provizii asigurate." 
        };
      } else if (eventRoll < 0.9) {
        // Danger / Minor loss
        resultType = "danger";
        logText = { 
          en: "Navigated through a dense micro-meteoroid swarm. Hull suffered minor abrasions.", 
          hu: "Sűrű mikro-meteorid rajon haladtunk át. A hajótest kisebb sérüléseket szenvedett.", 
          de: "Durch einen dichten Mikrometeoritenschwarm navigiert. Hülle erlitt leichte Abschürfungen.", 
          ro: "Am navigat printr-un roi dens de micrometeoriți. Coca a suferit abraziuni minore." 
        };
        // Could subtract a unit here if we wanted deep simulation
      } else {
        // Disaster
        resultType = "disaster";
        logText = { 
          en: "Ambushed by unknown entities in the dark. We lost several automated drones in the escape.", 
          hu: "Ismeretlen entitások ütöttek rajtunk a sötétben. Több automata drónt elvesztettünk a menekülés során.", 
          de: "Von unbekannten Entitäten im Dunkeln überfallen. Wir haben bei der Flucht mehrere automatische Drohnen verloren.", 
          ro: "Ambuscadă de entități necunoscute în întuneric. Am pierdut mai multe drone automate în timpul evadării." 
        };
        // Penalty logic could apply here
      }

      exp.logs.push({ timestamp: now, text: logText, resultType });
    }

    // Process Completion / Return
    const isDone = (exp.status === "en_route" && now >= exp.endsAt) || (exp.status === "returning" && exp.returnAt && now >= exp.returnAt);
    
    if (isDone) {
      mutated = true;
      exp.status = "completed";
      
      // 1. Give Loot
      if (exp.loot.intel) nextResources.activation = Math.min(100, nextResources.activation + exp.loot.intel); // Treat intel as activation/sync data
      if (exp.loot.supply) nextResources.supply += exp.loot.supply;
      
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

      // 4. Wrap up logs
      exp.logs.push({
        timestamp: now,
        text: { en: "Expedition concluded. Fleet has docked successfully.", hu: "Expedíció befejezve. A flotta sikeresen dokkolt.", de: "Expedition abgeschlossen. Flotte erfolgreich angedockt.", ro: "Expediție încheiată. Flota a acostat cu succes." },
        resultType: "safe",
      });

      completedLogAdditions.push(exp);
      journalEntries.push({
        en: `Expedition returned safely. Secured ${exp.loot.supply || 0} SU.`,
        hu: `Az expedíció épségben visszatért. ${exp.loot.supply || 0} SU biztosítva.`,
        de: `Expedition sicher zurückgekehrt. ${exp.loot.supply || 0} SU gesichert.`,
        ro: `Expediția s-a întors în siguranță. S-au asigurat ${exp.loot.supply || 0} SU.`
      });
      
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
    nextActive = nextActive.filter(e => e.status !== "completed" && e.status !== "lost");
    
    let finalState = {
      ...state,
      resources: nextResources,
      warRoom: { ...state.warRoom, garrison: nextGarrison },
      officers: nextOfficers,
      expeditions: {
        activeExpeditions: nextActive,
        completedLog: [...state.expeditions.completedLog, ...completedLogAdditions].slice(-20), // Keep last 20
      }
    };
    
    for (const j of journalEntries) {
      finalState.journal = pushJournal(finalState, j);
    }

    return finalState;
  }

  return state;
}