export const GRAVITAS_TEXT = {
  ui: {
    phaseBoot: { en: "Boot Phase", hu: "Boot fázis", de: "Boot-Phase", ro: "Faza Boot" },
    phaseActivation: { en: "Activation Phase", hu: "Aktiválási fázis", de: "Aktivierungsphase", ro: "Faza de activare" },
    phaseAwakened: { en: "Awakened", hu: "Felébredt", de: "Erwacht", ro: "Trezit" },
    riskLow: { en: "Low", hu: "Alacsony", de: "Niedrig", ro: "Scăzut" },
    riskRising: { en: "Rising", hu: "Emelkedő", de: "Steigend", ro: "În creștere" },
    riskCritical: { en: "Critical", hu: "Kritikus", de: "Kritisch", ro: "Critic" },
    entropy: { en: "Entropy", hu: "Entrópia", de: "Entropie", ro: "Entropie" },
  },
  activation: {
    conduitUnlockedAlert: {
      en: "Core conduit unlocked. Manual transfer now possible.",
      hu: "A magcsatorna megnyílt. Elindítható a kézi átviteli folyamat.",
      de: "Kernleitung freigeschaltet. Manueller Transfer ist jetzt möglich.",
      ro: "Canalul nucleului a fost deschis. Transferul manual este acum posibil.",
    },
    conduitUnlockedJournal: {
      en: "Core chamber is ready for activation transfer.",
      hu: "A magkamra készen áll az aktiválási átadásra.",
      de: "Die Kernkammer ist für den Aktivierungstransfer bereit.",
      ro: "Camera nucleului este pregătită pentru transferul de activare.",
    },
    powerExhausted: {
      en: "Transfer interrupted. Power reserve exhausted.",
      hu: "Az átviteli folyamat megszakadt. Az energiatartalék kifogyott.",
      de: "Transfer unterbrochen. Energiereserve erschöpft.",
      ro: "Transfer întrerupt. Rezerva de energie s-a epuizat.",
    },
    awakenedAlert: {
      en: "Core shell awakened. Presence synchronized.",
      hu: "A maghéj felébredt. A jelenlét szinkronba került.",
      de: "Die Kernhülle ist erwacht. Die Präsenz wurde synchronisiert.",
      ro: "Carcasa nucleului s-a trezit. Prezența a fost sincronizată.",
    },
    resonanceRisingAlert: {
      en: "Pulse sustained. Core resonance rising...",
      hu: "Az impulzus fennmaradt. A magrezonancia emelkedik...",
      de: "Impuls gehalten. Kernresonanz steigt...",
      ro: "Impulsul este menținut. Rezonanța nucleului crește...",
    },
    criticalResonanceAlert: {
      en: "Warning: critical resonance. Shell integrity at risk.",
      hu: "Figyelem: kritikus rezonancia. A test integritása veszélyben van.",
      de: "Warnung: kritische Resonanz. Die Integrität der Hülle ist gefährdet.",
      ro: "Avertisment: rezonanță critică. Integritatea corpului este în pericol.",
    },
    awakenedJournal: {
      en: "The shell responded. A presence looked back.",
      hu: "A test válaszolt. Valami visszanézett rád.",
      de: "Die Hülle antwortete. Eine Präsenz blickte zurück.",
      ro: "Corpul a răspuns. O prezență a privit înapoi.",
    },
    transferIntensityJournal: {
      en: "Transfer intensity",
      hu: "Átviteli intenzitás",
      de: "Transferintensität",
      ro: "Intensitatea transferului",
    },
  },
  modules: {
    reactor: {
      name: { en: "Reactor", hu: "Reaktor", de: "Reaktor", ro: "Reactor" },
      role: {
        en: "Keeps the station breathing and smooths out dangerous power spikes.",
        hu: "Életben tartja az állomást és kisimítja a veszélyes energialökéseket.",
        de: "Hält die Station am Leben und dämpft gefährliche Energiespitzen.",
        ro: "Ține stația în viață și amortizează vârfurile periculoase de energie.",
      }
    },
    logistics: {
      name: { en: "Logistics", hu: "Logisztika", de: "Logistik", ro: "Logistică" },
      role: {
        en: "Pulls salvage in from the outer hull and reopens dormant supply routes.",
        hu: "Begyűjti a külső roncsmezőből a nyersanyagot és újranyitja az ellátási útvonalakat.",
        de: "Zieht Bergungsgut aus der Außenhülle und öffnet Versorgungslinien erneut.",
        ro: "Aduce materiale din carcasa exterioară și redeschide rutele de aprovizionare.",
      }
    },
    core: {
      name: { en: "Core Chamber", hu: "Magkamra", de: "Kernkammer", ro: "Camera nucleului" },
      role: {
        en: "Holds the dormant shell and becomes the center of the awakening ritual.",
        hu: "Itt nyugszik a szunnyadó test, és ez lesz az ébredés központja.",
        de: "Hier ruht die schlafende Hülle, und hier beginnt das Erwachen.",
        ro: "Aici se află corpul adormit și tot aici începe trezirea.",
      }
    },
    sensor: {
      name: { en: "Sensor Node", hu: "Szenzormodul", de: "Sensorenknoten", ro: "Nodul senzor" },
      role: {
        en: "Reads distortion, signal drift and faint activity beyond the hull.",
        hu: "A torzulásokat, jeleltolódásokat és a burkon túli halvány aktivitást figyeli.",
        de: "Erfasst Verzerrungen, Signaldrift und schwache Aktivität außerhalb der Hülle.",
        ro: "Citește distorsiuni, deviații de semnal și activitate slabă dincolo de carcasă.",
      }
    }
  },
  events: {
    powerFluctuation: {
      title: "Power fluctuation",
      body: "A surge is running through the outer shell. You can vent it fast or absorb it carefully.",
      options: {
        vent: "Vent the surge",
        absorb: "Absorb into reserves",
      },
      overload: {
        title: "Grid overload",
        body: "The reserve grid is swelling. Lock the excess into the core spine or bleed it through the reactor housing.",
        options: {
          lockCore: "Lock into core spine",
          bleedHousing: "Bleed through housing",
        }
      }
    },
    materialBottleneck: {
      title: "Material bottleneck",
      body: "Supply flow is collapsing. You can send a risky drone sweep or strip dormant plating.",
      options: {
        droneSweep: "Launch drone sweep",
        stripPlating: "Strip inner plating",
      }
    },
    signalPulse: {
      title: "Signal pulse",
      body: "Something inside the shell answers. You can synchronize softly or amplify the response.",
      options: {
        synchronize: "Synchronize softly",
        amplify: "Amplify response",
      },
      fracture: {
        title: "Echo fracture",
        body: "The shell pushes back with a fragmented echo. Hold resonance steady or break contact and regroup.",
        options: {
          holdResonance: "Hold resonance",
          breakContact: "Break contact",
        }
      }
    },
    driftLock: {
      title: "Drift lock warning",
      body: "Too many scars are pulling the station toward a repeating pattern. Break the loop now or let the system fold inward.",
      options: {
        breakLoop: "Break the loop",
        foldInward: "Let it fold inward",
      }
    },
    voidBreach: {
      step1: {
        title: "Void breach",
        body: "A fracture in the psychic layer of the core has opened. It leaks cold silence. Seal it with power or attempt to commune?",
        options: {
          seal: "Seal with power",
          commune: "Commune with silence",
        }
      },
      step2: {
        title: "The Silence answers",
        body: "The breach did not close. It is demanding a sacrifice of material to stabilize or a permanent scar on the reactor to anchor it.",
        options: {
          sacrifice: "Sacrifice materials",
          anchor: "Anchor to reactor",
        }
      }
    },
    sensorGhosting: {
      title: "Sensor ghosting",
      body: "Phantoms are appearing on the long-range grid. They might be real debris or just drift noise. Ignore them or run a deep recalibration?",
      options: {
        ignore: "Ignore the ghosts",
        recalibrate: "Deep recalibration",
      }
    },
    deepTrek: {
      title: "Deep Trek",
      body: "A salvage drone has found a path into a derelict hull nearby. It's a risk to the drone, but the payoff could be huge.",
      options: {
        sendDrone: "Send drone deep",
        recall: "Recall drone",
      }
    },
    entropyCascade: {
      step1: {
        title: "Entropy cascade",
        body: "Structural entropy is reaching critical levels. The station's logic grid is beginning to fragment. Purge the buffer with materials or attempt to isolate the affected modules?",
        options: {
          purgeBuffer: "Purge with materials",
          isolateModules: "Isolate modules",
        }
      },
      step2: {
        title: "Isolator failure",
        body: "The isolation failed to contain the cascade. A random module is being flooded with junk data. Let it burn out or redirect the junk into the core resonance?",
        options: {
          burnOut: "Allow burnout",
          redirectCore: "Redirect to core",
        }
      }
    },
    supplyCascade: {
      step1: {
        title: "Supply cascade",
        body: "A logistics drone has identified a cache in the debris field, but it's guarded by a magnetic storm. Divert power to shields or risk the drones?",
        options: {
          divertPower: "Divert power to shields",
          riskDrones: "Risk the drones",
        }
      },
      step2: {
        title: "Cache recovery",
        body: "The drones found the cache. It contains unstable volatile matter. Process it immediately for fuel or stabilize it for structural repairs?",
        options: {
          processFuel: "Process for fuel",
          stabilizeStructure: "Stabilize for repairs",
        }
      },
      step3: {
        title: "Volatile feedback",
        body: "The matter is reacting with the station grid. Lock the feedback into the logistics sub-frame or vent it through the sensors?",
        options: {
          lockLogistics: "Lock into logistics",
          ventSensors: "Vent through sensors",
        }
      }
    }
  },
  alerts: {
    absorbed: "The fluctuation was absorbed, but the reserve grid is overloading.",
    coreLocked: "Excess charge locked into the core spine.",
    housingBurn: "The overload burned through the outer housing and cleared.",
    vented: "Excess charge vented into the dark.",
    stripped: "Inner plating was stripped for emergency stock.",
    scavenged: "Drone sweep returned with limited salvage.",
    echoStrong: "The shell answered harder than expected.",
    resonanceHeld: "The fractured echo was held in resonance.",
    contactBroken: "Contact was broken before the shell destabilized further.",
    shellAligned: "The shell pulse aligned cleanly.",
    foldedInward: "The station folded inward and the pattern deepened.",
    driftBroken: "The repeating pattern was broken before it sealed.",
    critPower: "Power reserves critically low.",
    critStability: "Station stability slipping.",
    resolveAnomaly: "Resolve the current anomaly before issuing a new command.",
    noMaterials: "Not enough materials to stabilize the reactor.",
    noPowerReroute: "Insufficient power to reroute into the core chamber.",
    repairAborted: "Repair aborted. Materials too low.",
    modulePatched: (name: string) => `${name} patched and recalibrated.`,
    scavengeSuccess: "Scavenger drones returned with salvage.",
    reactorStabilized: "Reactor pulse stabilized.",
    distortionCleared: "Distortion sweep completed. Local drift dampened.",
    noPowerDistortion: "Insufficient power for distortion sweep.",
    powerDiverted: "Power diverted to shields. Drones safe.",
    dronesLost: "Drones damaged by the storm.",
    fuelProcessed: "Volatile matter converted to power.",
    structureStabilized: "Station integrity reinforced.",
    logisticsLocked: "Feedback locked. Logistics stressed.",
    sensorsVented: "Feedback vented. Sensors distorted.",
    voidSealed: "The breach was sealed with a heavy pulse.",
    voidCommune: "You looked into the breach and it looked back.",
    voidSacrifice: "Materials were fed to the void to quiet it.",
    voidAnchored: "The void was anchored to the reactor housing.",
    ghostsIgnored: "Ghosts remain on the sensors.",
    sensorRecalibrated: "Sensors cleared of ghost patterns.",
    trekSuccess: "Deep trek returned with rare materials.",
    trekFailed: "The drone was lost in the derelict.",
    entropyPurged: "Buffer purged. Entropy levels stabilized.",
    cascadeIsolated: "Modules isolated, but the cascade continues.",
    moduleBurnout: (name: string) => `${name} suffered a logic burnout and went offline.`,
    coreRedirection: "Cascade junk redirected to the core. Activation destabilized.",
    anomalyPurged: (name: string) => `${name} anomaly has been purged.`,
    driftGlitch: (name: string) => `Drift glitch: ${name} integrity dropping.`,
  },
  journal: {
    surgeCaptured: "You captured the surge, but the station frame trembled.",
    overloadCore: "The overload was redirected into the core, accelerating activation at a structural cost.",
    reactorScar: "You protected the frame, but the reactor housing took the scar.",
    surgeVented: "The surge was vented safely through the outer hull.",
    emergencyPlating: "Emergency plating was cut loose to keep systems supplied.",
    scavengerDrone: "Scavenger drones found material, but burned precious power doing it.",
    forcedEcho: "You forced a stronger echo from the shell at a structural cost.",
    deepResponse: "You kept the shell aligned through the fracture and gained a deeper response.",
    resonanceCut: "You cut the resonance and preserved the station at the cost of momentum.",
    steadiedResonance: "A careful synchronization steadied the shell resonance.",
    repeatingPattern: "You let the repeating pattern close around the station. It answered, but not cleanly.",
    burnedToBreak: "You burned resources to break the drift before it hardened into a loop.",
    voidSealedJournal: "The void breach was closed, but at a significant power cost.",
    voidEchoJournal: "The void echo remains in the core, whispering.",
    voidSacrificeJournal: "The void was appeased by a sacrifice of structure.",
    voidReactorScarJournal: "The reactor now hums with the cold resonance of the void.",
    ghostAnomalyJournal: "Persistent ghost signals are clouding the sensors.",
    sensorRecalibratedJournal: "You cleared the ghost signals, but the scan was taxing.",
    trekRichesJournal: "The deep trek was incredibly lucrative.",
    trekLossJournal: "A logistics drone was swallowed by the dark.",
    recoveredMaterials: (amount: number) => `Recovered ${amount} materials from the outer ring.`,
    reactorRealigned: "Reactor field realigned successfully.",
    integrityRestored: (name: string, value: number) => `${name} integrity restored to ${value}%.`,
    driftDampened: "Sensor sweep cleared structural micro-fractures and supply friction.",
    cascadeStart: "Logistics cascade detected in the debris belt.",
    dronesProtected: "You shielded the recovery team at a power cost.",
    droneDamage: "Magnetic interference battered the scavenger flight.",
    volatilePower: "The unstable matter gave a massive boost to reserves.",
    structuralReinforce: "Refined materials patched critical hull weak points.",
    logisticsStress: "The logistics frame took the heat to protect the core.",
    sensorDistortion: "Sensor arrays were used as a lightning rod for the feedback.",
    entropyStable: "The entropy cascade was successfully contained.",
    entropyBurnout: "A module took the brunt of the entropy to save the rest of the grid.",
    coreSpike: "Core resonance spiked dangerously due to junk data redirection.",
    overclockJournal: "Reactor core overdriven for immediate power. Structural scars detected.",
    optimizeJournal: "Logistics throughput maximized. Supply grid is under heavy stress.",
    deepScanJournal: "Sensors focused on the shell's psychic layer, dampening void echoes.",
    initialJournal: [
      "Emergency reserve power detected.",
      "Core chamber sealed.",
      "Activation conduit requires manual transfer.",
    ],
    initialAlert: "Station shell offline. Core signature faint but present.",
  }
};
