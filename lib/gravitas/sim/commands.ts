import type { StarholdCommand, StarholdState, LocalizedString } from "./types";
import { addResourceDelta, clamp, pushJournal, updateModuleIntegrity, withAlert, addModuleLoad } from "./shared";
import { canStartActivationTransfer, channelActivationPulse, unlockActivationTransfer } from "./activation";
import { getModuleActionProfile } from "./modules";
import { resolveStarholdEvent } from "./events";
import { GRAVITAS_TEXT } from "./content";

export function applyStarholdCommand(state: StarholdState, command: StarholdCommand): StarholdState {
  if (state.pendingEvent && command.type !== "RESOLVE_EVENT") {
    return withAlert(state, GRAVITAS_TEXT.alerts.resolveAnomaly);
  }

  const { threat } = state;

  switch (command.type) {
    case "SCAVENGE": {
      const entropy = state.anomalies.find(a => a.id === "materialEntropy");
      const entropyPenalty = entropy ? entropy.severity : 0;
      const materialsGain = clamp((state.modules.logistics.online ? 5 : 3) - entropyPenalty, 1);
      const powerGain = state.modules.sensor.online ? 2 : 0;
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          materials: materialsGain,
          power: powerGain,
          stability: -1,
        }),
        alert: GRAVITAS_TEXT.alerts.scavengeSuccess,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.recoveredMaterials(materialsGain)),
      };
    }
    case "STABILIZE_REACTOR": {
      const profile = getModuleActionProfile("reactor");
      const entropyMod = 1 + Math.floor(state.entropy / 20);
      const cost = Math.ceil(profile.repairCost * entropyMod);
      if (state.resources.materials < cost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noMaterials);
      }
      const nextLoad = addModuleLoad(state, "reactor", profile.loadShift).load;
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          materials: -cost,
          power: 8,
          stability: 5,
        }),
        modules: {
          ...state.modules,
          reactor: {
            ...updateModuleIntegrity(state, "reactor", profile.repairGain),
            load: nextLoad,
          },
        },
        alert: GRAVITAS_TEXT.alerts.reactorStabilized,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.reactorRealigned),
      };
    }
    case "REPAIR_MODULE": {
      const profile = getModuleActionProfile(command.moduleId);
      const entropyMod = 1 + Math.floor(state.entropy / 20);
      const cost = Math.ceil(profile.repairCost * entropyMod);
      if (state.resources.materials < cost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.repairAborted);
      }
      const target = state.modules[command.moduleId];
      const nextIntegrity = clamp(target.integrity + profile.repairGain);
      const nextLoad = addModuleLoad(state, command.moduleId, target.online ? 0 : profile.loadShift).load;
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          materials: -cost,
          stability: 2,
        }),
        modules: {
          ...state.modules,
          [command.moduleId]: {
            ...target,
            integrity: nextIntegrity,
            online: nextIntegrity >= profile.onlineThreshold || target.online,
            load: nextLoad,
          },
        },
        alert: GRAVITAS_TEXT.alerts.modulePatched(target.name),
        journal: pushJournal(state, GRAVITAS_TEXT.journal.integrityRestored(target.name, nextIntegrity)),
      };
    }
    case "REROUTE_TO_CORE": {
      const entropyMod = 1 + Math.floor(state.entropy / 20);
      const cost = Math.ceil(6 * entropyMod);
      if (state.resources.power < cost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noPowerReroute);
      }
      if (!canStartActivationTransfer(state)) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noPowerReroute);
      }
      return {
        ...unlockActivationTransfer(state),
        resources: {
          ...state.resources,
          power: clamp(state.resources.power - cost),
          activation: clamp(state.resources.activation + 10),
        }
      };
    }
    case "CHANNEL_TO_CORE": {
      return channelActivationPulse(state, command.amount);
    }
    case "DISTORTION_SWEEP": {
      if (state.resources.power < 6) {
        return withAlert(state, GRAVITAS_TEXT.alerts.noPowerDistortion);
      }
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          power: -6,
          stability: 4,
        }),
        marks: {
          ...state.marks,
          reactorScar: clamp(state.marks.reactorScar - 1),
          shellStrain: clamp(state.marks.shellStrain - 1),
          supplyStress: clamp(state.marks.supplyStress - 1),
          voidEcho: clamp(state.marks.voidEcho - 1),
        },
        alert: GRAVITAS_TEXT.alerts.distortionCleared,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.driftDampened),
      };
    }
    case "PURGE_ANOMALY": {
      const anomaly = state.anomalies.find(a => a.id === command.anomalyId);
      if (!anomaly) return state;
      const powerCost = anomaly.severity * 2;
      if (state.resources.power < powerCost) {
        return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      }
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          power: -powerCost,
          stability: 2,
        }),
        anomalies: state.anomalies.filter(a => a.id !== command.anomalyId),
        alert: GRAVITAS_TEXT.alerts.anomalyPurged(anomaly.name),
        journal: pushJournal(state, {
          en: `Purged ${anomaly.name.en} from the station grid.`,
          hu: `${anomaly.name.hu} eltávolítva az állomás hálózatából.`,
          de: `${anomaly.name.de} aus dem Stationsnetz getilgt.`,
          ro: `${anomaly.name.ro} eliminat din rețeaua stației.`,
        }),
      };
    }
    case "OVERCLOCK_REACTOR": {
      const entropyMod = 1 + Math.floor(state.entropy / 20);
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          power: 20,
          stability: -8 * entropyMod,
        }),
        marks: {
          ...state.marks,
          reactorScar: clamp(state.marks.reactorScar + 3),
        },
        modules: {
          ...state.modules,
          reactor: {
            ...state.modules.reactor,
            integrity: clamp(state.modules.reactor.integrity - 12),
          }
        },
        alert: GRAVITAS_TEXT.alerts.reactorOverdriven,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.overclockJournal),
      };
    }
    case "OPTIMIZE_LOGISTICS": {
      const entropyMod = 1 + Math.floor(state.entropy / 20);
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          materials: 12,
          power: -4 * entropyMod,
        }),
        marks: {
          ...state.marks,
          supplyStress: clamp(state.marks.supplyStress + 4),
        },
        modules: {
          ...state.modules,
          logistics: {
            ...state.modules.logistics,
            load: clamp(state.modules.logistics.load + 30),
          }
        },
        alert: GRAVITAS_TEXT.alerts.logisticsOptimized,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.optimizeJournal),
      };
    }
    case "DEEP_SCAN": {
      if (state.resources.power < 12) {
        return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      }
      return {
        ...state,
        resources: addResourceDelta(state.resources, {
          power: -12,
          stability: -3,
        }),
        marks: {
          ...state.marks,
          voidEcho: clamp(state.marks.voidEcho - 4),
        },
        alert: GRAVITAS_TEXT.alerts.deepScanComplete,
        journal: pushJournal(state, GRAVITAS_TEXT.journal.deepScanJournal),
      };
    }
    case "DAMPEN_SIGNALS": {
      if (threat.countdown > 5 || threat.dampened) return state;
      if (state.resources.power < 8) return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      return {
        ...state,
        resources: addResourceDelta(state.resources, { power: -8 }),
        threat: { ...threat, dampened: true },
        alert: GRAVITAS_TEXT.threats.dampenedJournal,
        journal: pushJournal(state, GRAVITAS_TEXT.threats.dampenedJournal),
      };
    }
    case "FORTIFY_SHELL": {
      if (threat.countdown > 5 || threat.fortified) return state;
      if (state.resources.materials < 10) return withAlert(state, GRAVITAS_TEXT.alerts.repairAborted);
      return {
        ...state,
        resources: addResourceDelta(state.resources, { materials: -10 }),
        threat: { ...threat, fortified: true },
        alert: GRAVITAS_TEXT.threats.fortifiedJournal,
        journal: pushJournal(state, GRAVITAS_TEXT.threats.fortifiedJournal),
      };
    }
    case "INTERCEPT_THREAT": {
      if (threat.countdown > 5 || threat.intercepted) return state;
      if (state.resources.materials < 12) return withAlert(state, GRAVITAS_TEXT.alerts.repairAborted);
      return {
        ...state,
        resources: addResourceDelta(state.resources, { materials: -12 }),
        threat: { ...threat, intercepted: true },
        alert: {
          en: "Drone swarm deployed for interception.",
          hu: "Drónraj bevetve az elfogáshoz.",
          de: "Drohnenschwarm zum Abfangen eingesetzt.",
          ro: "Roi de drone desfășurat pentru intercepție.",
        },
        journal: pushJournal(state, {
          en: "Drones are forming a defensive perimeter.",
          hu: "A drónok védelmi kordont vonnak az állomás köré.",
          de: "Drohnen bilden einen Verteidigungsperimeter.",
          ro: "Dronele formează un perimetru defensiv.",
        }),
      };
    }
    case "PREDICT_THREAT": {
      if (threat.countdown > 10 || threat.predicted) return state;
      if (state.resources.power < 6) return withAlert(state, GRAVITAS_TEXT.alerts.critPower);
      return {
        ...state,
        resources: addResourceDelta(state.resources, { power: -6 }),
        threat: { ...threat, predicted: true },
        alert: {
          en: "Threat trajectory calculated.",
          hu: "Fenyegetés pályája kiszámítva.",
          de: "Bedrohungstrajektorie berechnet.",
          ro: "Traiectoria amenințării calculată.",
        },
        journal: pushJournal(state, {
          en: "Sensor array has locked onto the approaching pattern.",
          hu: "A szenzorok rögzítették a közelgő minta adatait.",
          de: "Sensoren haben das herannahende Muster erfasst.",
          ro: "Senzorii au blocat tiparul iminent.",
        }),
      };
    }
    case "RESOLVE_EVENT": {
      return resolveStarholdEvent(state, command.optionId);
    }
    default:
      return state;
  }
}

export interface GravitasActionSlot {
  id: string;
  label: LocalizedString;
  hint: LocalizedString;
  command: StarholdCommand;
  disabled?: boolean;
  emphasis?: "primary" | "secondary";
}

export function getGravitasActionSlots(selectedModule: keyof StarholdState["modules"], state: StarholdState): GravitasActionSlot[] {
  const moduleId = selectedModule;
  const module = state.modules[moduleId];
  const { threat } = state;
  const coreReady = canStartActivationTransfer(state);

  const slots: GravitasActionSlot[] = [];

  // Add anomalies if relevant to this module
  state.anomalies.forEach(anomaly => {
    if (
      (moduleId === "sensor" && anomaly.id === "sensorGhost") ||
      (moduleId === "logistics" && anomaly.id === "materialEntropy") ||
      (moduleId === "core" && anomaly.id === "voidLeak") ||
      (moduleId === "reactor" && anomaly.id === "coreTremor")
    ) {
      slots.push({
        id: `purge-${anomaly.id}`,
        label: {
          en: `Purge ${anomaly.name.en}`,
          hu: `${anomaly.name.hu} semlegesítése`,
          de: `${anomaly.name.de} tilgen`,
          ro: `Purjare ${anomaly.name.ro}`
        },
        hint: {
          en: `Clear the ${anomaly.name.en} from the module grid at a power cost.`,
          hu: `Eltávolítja a(z) ${anomaly.name.hu} anomáliát energia árán.`,
          de: `Tilge ${anomaly.name.de} aus dem Netz gegen Energie.`,
          ro: `Elimină ${anomaly.name.ro} din rețea contra cost energie.`
        },
        command: { type: "PURGE_ANOMALY", anomalyId: anomaly.id },
        emphasis: "secondary",
      });
    }
  });

  switch (moduleId) {
    case "reactor":
      slots.push({
        id: "stabilize",
        label: { en: "Stabilize reactor", hu: "Reaktor stabilizálása", de: "Reaktor stabilisieren", ro: "Stabilizează reactorul" },
        hint: { en: "Dampen the current drift and refill the station buffer.", hu: "Csökkenti a driftet és feltölti az állomás puffereit.", de: "Dämpfe den aktuellen Drift und fülle den Stationspuffer.", ro: "Atenuează deriva actuală și umple tamponul stației." },
        command: { type: "STABILIZE_REACTOR" },
      }, {
        id: "overclock",
        label: { en: "Overclock Core", hu: "Mag túlhajtása", de: "Kern überlasten", ro: "Suprasolicitare nucleu" },
        hint: { en: "Push reactor beyond limits for +20 power. High integrity risk.", hu: "A határértékek fölé hajtja a reaktort (+20 energia). Nagy kockázat.", de: "Reaktor über Limits treiben für +20 Energie. Hohes Risiko.", ro: "Împinge reactorul peste limite pentru +20 energie. Risc ridicat." },
        command: { type: "OVERCLOCK_REACTOR" },
        emphasis: "secondary",
      });
      if (threat.countdown <= 5 && !threat.fortified) {
        slots.push({
          id: "fortify",
          label: { en: "Fortify Shell", hu: "Váz megerősítése", de: "Hülle verstärken", ro: "Fortifică corpul" },
          hint: { en: "Reinforce structure against the coming threat (Costs 10 MAT).", hu: "Szerkezet megerősítése a közelgő veszély ellen (10 ANYAG).", de: "Struktur gegen kommende Bedrohung verstärken (10 MAT).", ro: "Consolidează structura împotriva amenințării (10 MAT)." },
          command: { type: "FORTIFY_SHELL" },
          emphasis: "secondary",
        });
      }
      break;
    case "logistics":
      slots.push(
        {
          id: "scavenge",
          label: { en: "Full Scavenge", hu: "Teljes gyűjtés", de: "Vollständige Bergung", ro: "Recuperare completă" },
          hint: { en: "Deploy all available drones for a heavy material haul.", hu: "Az összes drón bevetése nagy mennyiségű anyagért.", de: "Alle Drohnen für große Materialbergung einsetzen.", ro: "Desfășoară toate dronele pentru o captură mare de materiale." },
          command: { type: "SCAVENGE" },
          emphasis: "primary",
        },
        {
          id: "optimize",
          label: { en: "Route Optimization", hu: "Útvonal optimalizálás", de: "Routenoptimierung", ro: "Optimizare rute" },
          hint: { en: "Boost material intake (+12). Stress the supply grid.", hu: "Növeli az anyagbevitelt (+12). Megterheli az ellátóhálózatot.", de: "Erhöhe Materialaufnahme (+12). Belastet Versorgungsnetz.", ro: "Crește aportul de materiale (+12). Solicită rețeaua." },
          command: { type: "OPTIMIZE_LOGISTICS" },
        },
        {
          id: "repairLogistics",
          label: { en: `Repair ${module.name.en}`, hu: `${module.name.hu} javítása`, de: `${module.name.de} reparieren`, ro: `Repară ${module.name.ro}` },
          hint: { en: "Reopen supply routing and reduce future drain.", hu: "Újranyitja az ellátási útvonalakat és csökkenti a jövőbeli veszteséget.", de: "Versorgungsrouten öffnen und zukünftigen Abfluss senken.", ro: "Redeschide rutele și reduce pierderile viitoare." },
          command: { type: "REPAIR_MODULE", moduleId: "logistics" },
        }
      );
      if (threat.countdown <= 5 && !threat.intercepted && module.online && threat.type === "meteorShower") {
        slots.push({
          id: "intercept",
          label: { en: "Intercept Meteors", hu: "Meteorok elfogása", de: "Meteore abfangen", ro: "Interceptează meteorii" },
          hint: { en: "Deploy drone swarm to block meteors (Costs 12 MAT).", hu: "Drónraj indítása a meteorok blokkolására (12 ANYAG).", de: "Drohnenschwarm zum Blockieren von Meteoren einsetzen (12 MAT).", ro: "Lansează roiul de drone pentru a bloca meteorii (12 MAT)." },
          command: { type: "INTERCEPT_THREAT" },
          emphasis: "secondary",
        });
      }
      break;
    case "sensor":
      slots.push(
        {
          id: "distortionSweep",
          label: { en: "Distortion Sweep", hu: "Torzítás-keresés", de: "Distortionssweep", ro: "Scanare distorsiuni" },
          hint: { en: "Use long-range sensors to clear structural anomalies and marks.", hu: "Távoli szenzorok használata az anomáliák és nyomok eltávolítására.", de: "Langstreckensensoren zur Klärung von Anomalien und Spuren nutzen.", ro: "Folosește senzori la distanță pentru a curăța anomaliile." },
          command: { type: "DISTORTION_SWEEP" },
          emphasis: "primary",
          disabled: !module.online,
        },
        {
          id: "deepScan",
          label: { en: "Deep Sensor Scan", hu: "Mély szenzoros vizsgálat", de: "Tiefer Sensorscan", ro: "Scanare senzori profundă" },
          hint: { en: "Directly dampen void echoes. Costly power usage.", hu: "Közvetlenül csökkenti a void visszhangokat. Magas energiaköltség.", de: "Void-Echos direkt dämpfen. Teurer Energieaufwand.", ro: "Atenuează direct ecourile void. Consum mare de energie." },
          command: { type: "DEEP_SCAN" },
          disabled: !module.online,
        },
      );
      if (threat.countdown > 5 && threat.countdown <= 10 && !threat.predicted && module.online) {
        slots.push({
          id: "predict",
          label: { en: "Predict Trajectory", hu: "Pálya jóslása", de: "Trajektorie vorhersagen", ro: "Previziune traiectorie" },
          hint: { en: "Calculate impact point to improve defense window (Costs 6 PWR).", hu: "Kiszámítja a becsapódási pontot a védelem javításához (6 ENERGIA).", de: "Einschlagpunkt berechnen, um Verteidigungsfenster zu verbessern (6 PWR).", ro: "Calculează punctul de impact pentru a îmbunătăți fereastra de apărare (6 PWR)." },
          command: { type: "PREDICT_THREAT" },
          emphasis: "secondary",
        });
      }
      if (threat.countdown <= 5 && !threat.dampened && module.online) {
        slots.push({
          id: "dampen",
          label: { en: "Dampen Signals", hu: "Jelcsillapítás", de: "Signale dämpfen", ro: "Atenuează semnalele" },
          hint: { en: "Dampen psychic signals to reduce void impact (Costs 8 PWR).", hu: "Pszichikai jelek csillapítása a void hatás csökkentésére (8 ENERGIA).", de: "Psychische Signals dämpfen, um Void-Einschlag zu senken (8 PWR).", ro: "Atenuează semnalele psihice pentru a reduce impactul void (8 PWR)." },
          command: { type: "DAMPEN_SIGNALS" },
          emphasis: "secondary",
        });
      }
      slots.push({
        id: "repairSensor",
        label: { en: `Repair ${module.name.en}`, hu: `${module.name.hu} javítása`, de: `${module.name.de} reparieren`, ro: `Repară ${module.name.ro}` },
        hint: { en: "Bring the long-range distortion grid back online.", hu: "Visszakapcsolja a távoli torzulásfigyelő hálózatot.", de: "Bringt das Langstrecken-Distortionsgitter zurück.", ro: "Repune în funcțiune rețeaua de distorsiuni." },
        command: { type: "REPAIR_MODULE", moduleId: "sensor" },
      });
      break;
    case "core":
    default:
      slots.push(
        {
          id: "reroute",
          label: { en: "Reroute power to core", hu: "Energia a maghoz", de: "Energie zum Kern", ro: "Energie spre nucleu" },
          hint: { en: "Unlock the activation chamber and start the transfer.", hu: "Felnyitja az aktivációs kamrát és elindítja az átvitelt.", de: "Kernkammer freischalten und Transfer starten.", ro: "Deblochează camera și începe transferul." },
          command: { type: "REROUTE_TO_CORE" },
          disabled: !coreReady,
          emphasis: "primary",
        },
        {
          id: "repairCore",
          label: { en: `Repair ${module.name.en}`, hu: `${module.name.hu} javítása`, de: `${module.name.de} reparieren`, ro: `Repară ${module.name.ro}` },
          hint: { en: "Reduce shell strain before the awakening run.", hu: "Csökkenti a testfeszülést az ébredés előtt.", de: "Hüllenspannung vor dem Erwachenslauf senken.", ro: "Reduce tensiunea corpului înainte de trezire." },
          command: { type: "REPAIR_MODULE", moduleId: "core" },
        }
      );
      break;
  }

  return slots;
}
