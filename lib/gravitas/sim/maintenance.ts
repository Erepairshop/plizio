import type { StarholdState } from "./types";
import { pushJournal } from "./shared";

export function runMaintenance(state: StarholdState): StarholdState {
  const now = Date.now();
  let nextState = state;
  let mutated = false;

  // 1. Sliding Windows (Hard Limits)
  const maxJournal = 50;
  const maxBattleHistory = 50;
  const maxCompletedExpeditions = 50;
  const maxNotifications = 50;
  const maxDilemmaHistory = 50;

  if (nextState.journal && nextState.journal.length > maxJournal) {
    nextState = { ...nextState, journal: nextState.journal.slice(-maxJournal) };
    mutated = true;
  }

  if (nextState.battleState && nextState.battleState.battleHistory && nextState.battleState.battleHistory.length > maxBattleHistory) {
    nextState = { 
      ...nextState, 
      battleState: { 
        ...nextState.battleState, 
        battleHistory: nextState.battleState.battleHistory.slice(-maxBattleHistory) 
      } 
    };
    mutated = true;
  }

  if (nextState.expeditions && nextState.expeditions.completedLog && nextState.expeditions.completedLog.length > maxCompletedExpeditions) {
    nextState = {
      ...nextState,
      expeditions: {
        ...nextState.expeditions,
        completedLog: nextState.expeditions.completedLog.slice(-maxCompletedExpeditions)
      }
    };
    mutated = true;
  }

  if (nextState.notifications && nextState.notifications.queue && nextState.notifications.queue.length > maxNotifications) {
    nextState = {
      ...nextState,
      notifications: {
        ...nextState.notifications,
        queue: nextState.notifications.queue.slice(0, maxNotifications) // The queue puts newest at start (index 0) in pushNotification
      }
    };
    mutated = true;
  }

  if (nextState.dilemmaSystem && nextState.dilemmaSystem.history && nextState.dilemmaSystem.history.length > maxDilemmaHistory) {
    nextState = {
      ...nextState,
      dilemmaSystem: {
        ...nextState.dilemmaSystem,
        history: nextState.dilemmaSystem.history.slice(-maxDilemmaHistory)
      }
    };
    mutated = true;
  }

  if (nextState.dilemmaSystem && nextState.dilemmaSystem.memoryLog && nextState.dilemmaSystem.memoryLog.length > maxDilemmaHistory) {
    nextState = {
      ...nextState,
      dilemmaSystem: {
        ...nextState.dilemmaSystem,
        memoryLog: nextState.dilemmaSystem.memoryLog.slice(-maxDilemmaHistory)
      }
    };
    mutated = true;
  }

  // 2. TTL Pruning
  if (nextState.tradeSystem && nextState.tradeSystem.offers) {
    const validOffers = nextState.tradeSystem.offers.filter(o => now < o.expiresAt);
    if (validOffers.length !== nextState.tradeSystem.offers.length) {
      nextState = {
        ...nextState,
        tradeSystem: {
          ...nextState.tradeSystem,
          offers: validOffers
        }
      };
      mutated = true;
    }
  }

  if (nextState.dilemmaSystem && nextState.dilemmaSystem.pendingEffects) {
    // Keep effects that haven't triggered yet, or only recently triggered if we want to be safe,
    // but pendingEffects are usually removed by tickDilemmaEffects once triggered.
    // In case any get stuck past a large threshold (e.g. 10 days), purge them.
    const staleThreshold = 10 * 24 * 60 * 60 * 1000;
    const activeEffects = nextState.dilemmaSystem.pendingEffects.filter(e => now - e.triggerAt < staleThreshold);
    if (activeEffects.length !== nextState.dilemmaSystem.pendingEffects.length) {
      nextState = {
        ...nextState,
        dilemmaSystem: {
          ...nextState.dilemmaSystem,
          pendingEffects: activeEffects
        }
      };
      mutated = true;
    }
  }

  if (nextState.notifications && nextState.notifications.queue) {
    const AUTO_DISMISS_MS = 5 * 60 * 1000;
    const activeNotifs = nextState.notifications.queue.filter(n => now - n.timestamp <= AUTO_DISMISS_MS);
    if (activeNotifs.length !== nextState.notifications.queue.length) {
      nextState = {
        ...nextState,
        notifications: {
          ...nextState.notifications,
          queue: activeNotifs,
          unreadCount: activeNotifs.filter(n => !n.read).length
        }
      };
      mutated = true;
    }
  }

  // 3. Dead Entity Cleanup
  if (nextState.espionage && nextState.espionage.missions) {
    const staleThreshold = 2 * 24 * 60 * 60 * 1000; // 2 days
    const activeMissions = nextState.espionage.missions.filter(m => {
      if ((m.phase === "extracted" || m.phase === "lost") && (now - m.lastYieldAt > staleThreshold)) {
        return false;
      }
      return true;
    });
    if (activeMissions.length !== nextState.espionage.missions.length) {
      nextState = {
        ...nextState,
        espionage: {
          ...nextState.espionage,
          missions: activeMissions
        }
      };
      mutated = true;
    }
  }

  if (nextState.expeditions && nextState.expeditions.activeExpeditions) {
    // Completed or lost expeditions that are somehow still in the active array for too long
    // They are normally moved to completedLog or deleted immediately, but as a fallback:
    const activeExpeditions = nextState.expeditions.activeExpeditions.filter(e => {
      if (e.status === "completed" || e.status === "lost") {
        return false;
      }
      return true;
    });
    if (activeExpeditions.length !== nextState.expeditions.activeExpeditions.length) {
      nextState = {
        ...nextState,
        expeditions: {
          ...nextState.expeditions,
          activeExpeditions
        }
      };
      mutated = true;
    }
  }

  if (nextState.galaxy && nextState.galaxy.transientNodes) {
    const expiredNodes = nextState.galaxy.transientNodes.filter(node => node.expiresAt <= nextState.tick);
    const activeTransientNodes = nextState.galaxy.transientNodes.filter(node => node.expiresAt > nextState.tick);
    
    if (activeTransientNodes.length !== nextState.galaxy.transientNodes.length) {
      let nextActiveFleets = [...(nextState.galaxy.activeFleets ?? [])];
      let alerts: import("./types").LocalizedString[] = [];

      expiredNodes.forEach(node => {
        nextActiveFleets.forEach(fleet => {
          if (fleet.targetNodeId === node.id && fleet.status !== "returning") {
            fleet.status = "returning";
            // Correct arrival time based on how far it traveled (using ticks)
            const travelDuration = nextState.tick - fleet.departureTime;
            fleet.departureTime = nextState.tick;
            fleet.arrivalTime = nextState.tick + travelDuration;
            fleet.miningCompletesAt = undefined;
            
            alerts.push({
              en: `Sensor connection lost. Target disappeared. Fleet automatically returned to base.`,
              hu: `Szenzor-kapcsolat megszakadt. A célpont eltűnt. A flotta automatikusan visszafordult a bázisra.`,
              de: `Sensorverbindung abgebrochen. Ziel verschwunden. Flotte kehrt automatisch zur Basis zurück.`,
              ro: `Conexiune senzor întreruptă. Ținta a dispărut. Flota s-a întors automat la bază.`
            });
          }
        });
      });

      nextState = {
        ...nextState,
        galaxy: {
          ...nextState.galaxy,
          transientNodes: activeTransientNodes,
          activeFleets: nextActiveFleets,
        },
        archive: {
          ...nextState.archive,
          expiredMapNodes: [...nextState.archive.expiredMapNodes, ...expiredNodes].slice(-50),
        }
      };
      
      for (const alert of alerts) {
        nextState.journal = pushJournal(nextState, alert);
        nextState.alert = alert;
      }
      
      mutated = true;
    }
  }

  return mutated ? nextState : state;
}
