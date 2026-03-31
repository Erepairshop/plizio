import type { LocalizedString } from "./types";

export const GRAVITAS_TEXT = {
  ui: {
    title: { en: "Gravitas", hu: "Gravitas", de: "Gravitas", ro: "Gravitas" },
    subtitle: {
      en: "A damaged station. A dormant shell. Bring the system back online.",
      hu: "Sérült állomás. Szunnyadó test. Indítsd újra a rendszert.",
      de: "Eine beschädigte Station. Eine schlafende Hülle. Bring das System zurück.",
      ro: "O stație avariată. Un corp adormit. Repune sistemul în viață."
    },
    phaseBoot: { en: "Boot Phase", hu: "Boot fázis", de: "Boot-Phase", ro: "Faza Boot" },
    phaseActivation: { en: "Activation Phase", hu: "Aktiválási fázis", de: "Aktivierungsphase", ro: "Faza de activare" },
    phaseAwakened: { en: "Awakened", hu: "Felébredt", de: "Erwacht", ro: "Trezit" },
    riskLow: { en: "Low", hu: "Alacsony", de: "Niedrig", ro: "Scăzut" },
    riskRising: { en: "Rising", hu: "Emelkedő", de: "Steigend", ro: "În creștere" },
    riskCritical: { en: "Critical", hu: "Kritikus", de: "Kritisch", ro: "Critic" },
    entropy: { en: "Entropy", hu: "Entrópia", de: "Entropie", ro: "Entropie" },
    back: { en: "Home", hu: "Főoldal", de: "Start", ro: "Acasă" },
    pwr: { en: "Power", hu: "Energia", de: "Energie", ro: "Energie" },
    mat: { en: "Materials", hu: "Anyag", de: "Material", ro: "Materiale" },
    stb: { en: "Stability", hu: "Stabilitás", de: "Stabilität", ro: "Stabilitate" },
    act: { en: "Activation", hu: "Aktiválás", de: "Aktivierung", ro: "Activare" },
    ent: { en: "Entropy", hu: "Entrópia", de: "Entropie", ro: "Entropie" },
    scavenge: { en: "Scavenge materials", hu: "Nyersanyag gyűjtése", de: "Material bergen", ro: "Colectează resurse" },
    stabilize: { en: "Stabilize reactor", hu: "Reaktor stabilizálása", de: "Reaktor stabilisieren", ro: "Stabilizează reactorul" },
    reroute: { en: "Reroute power to core", hu: "Energia átirányítása a maghoz", de: "Energie zum Kern umleiten", ro: "Redirecționează energia spre nucleu" },
    repairLogistics: { en: "Repair logistics", hu: "Logisztika javítása", de: "Logistik reparieren", ro: "Repară logistica" },
    hold: { en: "Hold to transfer pulse", hu: "Tartsd nyomva az átvitelt", de: "Gedrückt halten für Transfer", ro: "Ține apăsat pentru transfer" },
    transferTitle: { en: "Awakening transfer", hu: "Ébresztési átadás", de: "Erweckungstransfer", ro: "Transfer de trezire" },
    transferStageLabel: { en: "Activation ladder", hu: "Aktiválási lépcső", de: "Aktivierungsleiter", ro: "Scara activării" },
    resonance: { en: "Resonance", hu: "Rezonancia", de: "Resonanz", ro: "Rezonanță" },
    transferReady: {
      en: "The chamber is listening. Hold the transfer and push your own pulse into the shell.",
      hu: "A kamra már figyel. Tartsd az átvitelt, és told át a saját pulzusodat a testbe.",
      de: "Die Kammer hört zu. Halte den Transfer und drücke deinen Puls in die Hülle.",
      ro: "Camera ascultă deja. Ține transferul și împinge propriul puls în corp."
    },
    transferLocked: {
      en: "Stabilize the station first, then route power into the core chamber.",
      hu: "Előbb stabilizáld az állomást, majd irányíts energiát a magkamrába.",
      de: "Stabilisiere zuerst die Station und leite dann Energie in die Kernkammer.",
      ro: "Stabilizează mai întâi stația, apoi redirecționează energia spre camera nucleului."
    },
    awakeningMoment: { en: "Awakening moment", hu: "Ébredési pillanat", de: "Erwachensmoment", ro: "Momentul trezirii" },
    awakeningBody: {
      en: "The shell catches your pulse, opens its eyes and becomes the first living version of your avatar.",
      hu: "A test elkapja a pulzusodat, kinyitja a szemét, és az avatárod első élő formájává válik.",
      de: "Die Hülle fängt deinen Puls auf, öffnet die Augen und wird zur ersten lebendigen Form deines Avatars.",
      ro: "Corpul îți prinde pulsul, deschide ochii și devine prima formă vie a avatarului tău."
    },
    modules: { en: "Modules", hu: "Modulok", de: "Module", ro: "Module" },
    focus: { en: "Focus", hu: "Fókusz", de: "Fokus", ro: "Focus" },
    focusHint: {
      en: "Tap a module in the station view to inspect its status and current role.",
      hu: "Érints meg egy modult az állomásnézetben, hogy lásd az állapotát és szerepét.",
      de: "Tippe im Stationsbild auf ein Modul, um Zustand und Aufgabe zu prüfen.",
      ro: "Atinge un modul din imaginea stației pentru a-i vedea starea și rolul."
    },
    actions: { en: "Actions", hu: "Műveletek", de: "Aktionen", ro: "Acțiuni" },
    actionHint: {
      en: "The current command deck changes with the module you are focusing on.",
      hu: "A parancspanel annak megfelelően változik, hogy melyik modulra fókuszálsz.",
      de: "Das Befehlsfeld passt sich dem gerade fokussierten Modul an.",
      ro: "Panoul de comandă se schimbă în funcție de modulul pe care îl urmărești."
    },
    journal: { en: "Journal", hu: "Napló", de: "Logbuch", ro: "Jurnal" },
    eventTitle: { en: "Live event", hu: "Aktív esemény", de: "Aktives Ereignis", ro: "Eveniment activ" },
    resolve: { en: "Resolve", hu: "Döntés", de: "Entscheidung", ro: "Decizie" },
    eventChain: { en: "Incident chain", hu: "Incidenslánc", de: "Ereigniskette", ro: "Lanț de incidente" },
    objective: { en: "Objective", hu: "Cél", de: "Ziel", ro: "Obiectiv" },
    objectiveText: {
      en: "Recover enough power and stability to awaken the shell in the core chamber.",
      hu: "Szerezz elég energiát és stabilitást ahhoz, hogy felébresszd a testet a magkamrában.",
      de: "Sammle genug Energie und Stabilität, um die Hülle in der Kernkammer zu erwecken.",
      ro: "Adună suficientă energie și stabilitate pentru a trezi corpul din camera nucleului."
    },
    awakened: {
      en: "The shell opened its eyes. This is the first living spark of your avatar.",
      hu: "A test felnézett. Ez az avatárod első valódi pillanata.",
      de: "Die Hülle hat die Augen geöffnet. Das ist der erste lebendige Moment deines Avatars.",
      ro: "Corpul a deschis ochii. Acesta este primul moment viu al avatarului tău."
    },
    offline: { en: "Offline", hu: "Offline", de: "Offline", ro: "Offline" },
    online: { en: "Online", hu: "Online", de: "Online", ro: "Online" },
    integrity: { en: "Integrity", hu: "Integritás", de: "Integrität", ro: "Integritate" },
    load: { en: "Load", hu: "Terhelés", de: "Last", ro: "Încărcare" },
    selectedStatus: { en: "Status", hu: "Állapot", de: "Status", ro: "Stare" },
    selectedRole: { en: "Role", hu: "Szerep", de: "Rolle", ro: "Rol" },
    marks: { en: "Persistent marks", hu: "Tartós nyomok", de: "Dauerhafte Spuren", ro: "Urme persistente" },
    driftRisk: { en: "Drift risk", hu: "Drift kockázat", de: "Driftrisiko", ro: "Risc de derivă" },
    riskHint: {
      en: "If scars, strain and supply stress accumulate together, the station can start falling into repeating patterns.",
      hu: "Ha a sebek, a testfeszülés és az ellátási nyomás együtt nőnek, az állomás ismétlődő mintákba csúszhat.",
      de: "Wenn Narben, Hüllenspannung und Versorgungsdruck gemeinsam wachsen, kann die Station in Wiederholungsmuster fallen.",
      ro: "Dacă cicatricile, tensiunea și presiunea logistică cresc împreună, stația poate aluneca în tipare repetitive."
    },
    reactorScar: { en: "Reactor scar", hu: "Reaktorseb", de: "Reaktornarbe", ro: "Cicatrice reactor" },
    shellStrain: { en: "Shell strain", hu: "Testfeszülés", de: "Hüllenspannung", ro: "Tensiune corp" },
    supplyStress: { en: "Supply stress", hu: "Ellátási nyomás", de: "Versorgungsdruck", ro: "Presiune logistică" },
    voidEcho: { en: "Void echo", hu: "Void visszhang", de: "Void-Echo", ro: "Ecou void" },
    anomalies: { en: "Active anomalies", hu: "Aktív anomáliák", de: "Aktive Anomalien", ro: "Anomalii active" },
    purge: { en: "Purge", hu: "Semlegesítés", de: "Tilgen", ro: "Purjează" },
    severity: { en: "Severity", hu: "Súlyosság", de: "Stärke", ro: "Severitate" },
    fortified: { en: "Fortified", hu: "Megerősítve", de: "Verstärkt", ro: "Fortificat" },
    dampened: { en: "Dampened", hu: "Csillapítva", de: "Gedämpft", ro: "Atenuat" },
    approachingThreat: { en: "Approaching Threat", hu: "Közelgő fenyegetés", de: "Herannahende Bedrohung", ro: "Amenințare iminentă" },
    shopTitle: { en: "Star Exchange", hu: "Csillag-tőzsde", de: "Sternenbörse", ro: "Schimb de stele" },
    shopStars: { en: "Stars", hu: "Csillag", de: "Sterne", ro: "Stele" },
    shopUnlock: { en: "Unlocked", hu: "Feloldva", de: "Freigeschaltet", ro: "Deblocat" },
    shopDescription: {
      en: "Rewards are permanent for this session. Stars are earned through milestones, surviving threats and event chains.",
      hu: "A jutalmak a jelenlegi játékra szólnak. Csillagokat mérföldkövekért, túlélésért és eseményekért kapsz.",
      de: "Belohnungen sind für diese Sitzung dauerhaft. Sterne werden durch Meilensteine, Überleben und Ereignisketten verdient.",
      ro: "Recompensenele sunt permanente pentru această sesiune. Stelele sunt câștigate prin obiective, supraviețuirea amenințărilor și lanțuri de evenimente."
    },
    milestoneReached: { en: "Milestone reached", hu: "Mérföldkő elérve", de: "Meilenstein erreicht", ro: "Obiectiv atins" },
    itemUnlocked: { en: "Unlocked", hu: "Feloldva", de: "Freigeschaltet", ro: "Deblocat" },
    newEquipment: { en: "New equipment acquired", hu: "Új felszerelés beszerezve", de: "Neue Ausrüstung erworben", ro: "Echipament nou achiziționat" },
    allSystemsNominal: { en: "All systems nominal", hu: "Minden rendszer stabil", de: "Alle Systeme nominal", ro: "Toate sistemele nominale" },
    awaitingLog: { en: "Awaiting first log entry...", hu: "Várakozás az első naplóbejegyzésre...", de: "Warte auf ersten Logbucheintrag...", ro: "Se așteaptă prima intrare în jurnal..." },
  },
  lore: {
    stationName: { en: "Starhold Nexus", hu: "Csillagkapu Nexus", de: "Sternenfeste Nexus", ro: "Nexusul Stelar" },
    intro: {
      en: "You wake in a damaged station drifting at the edge of known space. Systems are failing. Something sleeps in the core.",
      hu: "Egy sérült állomáson térsz magadhoz az ismert tér szélén. A rendszerek hibásak. Valami alszik a magkamrában.",
      de: "Du erwachst in einer beschädigten Station am Rand des bekannten Raums. Systeme versagen. Etwas schläft im Kern.",
      ro: "Te trezești într-o stație avariată la marginea spațiului cunoscut. Sistemele cedează. Ceva doarme în nucleu.",
    },
    phaseDescriptions: {
      boot: { en: "Emergency protocols active. Stabilize systems to survive.", hu: "Vészprotokollok aktívak. Stabilizáld a rendszereket.", de: "Notfallprotokolle aktiv. Systeme stabilisieren.", ro: "Protocoale de urgență active. Stabilizează sistemele." },
      activation: { en: "The core chamber resonates. Something is awakening.", hu: "A magkamra rezonál. Valami ébredezik.", de: "Die Kernkammer resoniert. Etwas erwacht.", ro: "Camera nucleului rezonează. Ceva se trezește." },
      awakened: { en: "The avatar breathes. A new presence fills the station.", hu: "Az avatár lélegzik. Új jelenlét tölti be az állomást.", de: "Der Avatar atmet. Eine neue Präsenz erfüllt die Station.", ro: "Avatarul respiră. O nouă prezență umple stația." },
    },
    voidWhispers: [
      { en: "...the void remembers...", hu: "...az űr emlékszik...", de: "...die Leere erinnert sich...", ro: "...vidul își amintește..." },
      { en: "...patterns in the static...", hu: "...minták a zajban...", de: "...Muster im Rauschen...", ro: "...tipare în static..." },
      { en: "...not alone...", hu: "...nem vagy egyedül...", de: "...nicht allein...", ro: "...nu ești singur..." },
      { en: "...the shell listens...", hu: "...a burok figyel...", de: "...die Hülle lauscht...", ro: "...învelișul ascultă..." },
      { en: "...echoes of what was...", hu: "...visszhangok a múltból...", de: "...Echos von dem was war...", ro: "...ecouri ale trecutului..." },
    ],
  },
  victory: {
    stationLostTitle: { en: "STATION LOST", hu: "ÁLLOMÁS ELVESZETT", de: "STATION VERLOREN", ro: "STAȚIE PIERDUTĂ" },
    stationLostBody: {
      en: "Your station drifted into the void. Every lesson carries forward.",
      hu: "Az állomásod elsodródott a semmibe. Minden lecke a jövőt szolgálja.",
      de: "Deine Station trieb in die Leere. Jede Lektion trägt Früchte.",
      ro: "Stația ta a rătăcit în vid. Fiecare lecție contează."
    },
    firstLoopTitle: { en: "FIRST LOOP COMPLETE", hu: "ELSŐ CIKLUS KÉSZ", de: "ERSTER ZYKLUS VOLLENDET", ro: "PRIMUL CICLU COMPLET" },
    tryAgain: { en: "Try Again", hu: "Újrapróbálás", de: "Nochmal versuchen", ro: "Încearcă din nou" },
    continuePlaying: { en: "Continue Playing", hu: "Folytatás", de: "Weiterpielen", ro: "Continuă" },
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
    stage0: { en: "Dormant shell", hu: "Szunnyadó test", de: "Schlafende Hülle", ro: "Corp adormit" },
    stage1: { en: "Conduit primed", hu: "Csatorna nyitva", de: "Leitung geöffnet", ro: "Canal deschis" },
    stage2: { en: "Pulse anchored", hu: "Pulzus rögzítve", de: "Puls verankert", ro: "Puls fixat" },
    stage3: { en: "Shell resonance", hu: "Testrezgés", de: "Hüllenresonanz", ro: "Rezonanța corpului" },
    stage4: { en: "Conscious spark", hu: "Tudati szikra", de: "Bewusstseinsfunke", ro: "Scânteie conștientă" },
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
      title: { en: "Power fluctuation", hu: "Energia-ingadozás", de: "Energieschwankung", ro: "Fluctuație de energie" },
      body: {
        en: "A surge is running through the outer shell. You can vent it fast or absorb it carefully.",
        hu: "Túlfeszültség fut végig a külső burkolaton. Gyorsan kivezetheted, vagy óvatosan elnyelheted.",
        de: "Ein Stoß läuft durch die Außenhülle. Du kannst ihn schnell ablassen oder vorsichtig absorbieren.",
        ro: "Un vârf de tensiune trece prin carcasa exterioară. Îl poți evacua rapid sau absorbi cu atenție."
      },
      options: {
        vent: { en: "Vent the surge", hu: "Túlfeszültség kivezetése", de: "Stoß ablassen", ro: "Evacuare tensiune" },
        absorb: { en: "Absorb into reserves", hu: "Elnyelés a tartalékba", de: "In Reserven absorbieren", ro: "Absorbire în rezerve" },
      },
      overload: {
        title: { en: "Grid overload", hu: "Hálózati túlterhelés", de: "Netzüberlastung", ro: "Supraîncărcare rețea" },
        body: {
          en: "The reserve grid is swelling. Lock the excess into the core spine or bleed it through the reactor housing.",
          hu: "A tartalék hálózat duzzad. Zárd le a felesleget a mag gerincébe, vagy vezesd át a reaktorházon.",
          de: "Das Reservenetz schwillt an. Sperre den Überschuss in das Kernrückgrat oder leite ihn durch das Reaktorgehäuse ab.",
          ro: "Rețeaua de rezervă se umflă. Blochează excesul în coloana nucleului sau evacuează-l prin carcasa reactorului."
        },
        options: {
          lockCore: { en: "Lock into core spine", hu: "Lezárás a magba", de: "Im Kern fixieren", ro: "Blocare în nucleu" },
          bleedHousing: { en: "Bleed through housing", hu: "Átvezetés a házon", de: "Durch Gehäuse ableiten", ro: "Evacuare prin carcasă" },
        }
      }
    },
    materialBottleneck: {
      title: { en: "Material bottleneck", hu: "Nyersanyag szűkület", de: "Materialengpass", ro: "Blocaj materiale" },
      body: {
        en: "Supply flow is collapsing. You can send a risky drone sweep or strip dormant plating.",
        hu: "Az ellátási lánc összeomlik. Küldhetsz egy kockázatos drónrajt, vagy lefejtheted a szunnyadó burkolatot.",
        de: "Der Versorgungsfluss bricht zusammen. Du kannst einen riskanten Drohneneinsatz schicken oder schlafende Panzerung abstreifen.",
        ro: "Fluxul de aprovizionare se prăbușește. Poți trimite o dronă riscantă sau demonta placarea adormită."
      },
      options: {
        droneSweep: { en: "Launch drone sweep", hu: "Drónraj indítása", de: "Drohneneinsatz starten", ro: "Lansare dronă" },
        stripPlating: { en: "Strip inner plating", hu: "Belső burkolat lefejtése", de: "Innere Panzerung abstreifen", ro: "Demontare placare" },
      }
    },
    signalPulse: {
      title: { en: "Signal pulse", hu: "Jelimpulzus", de: "Signalimpuls", ro: "Puls de semnal" },
      body: {
        en: "Something inside the shell answers. You can synchronize softly or amplify the response.",
        hu: "Valami a testben válaszol. Szinkronizálhatsz lágyan, vagy felerősítheted a választ.",
        de: "Etwas in der Hülle antwortet. Du kannst sanft synchronisieren oder die Antwort verstärken.",
        ro: "Ceva din interiorul corpului răspunde. Poți sincroniza ușor sau amplifica răspunsul."
      },
      options: {
        synchronize: { en: "Synchronize softly", hu: "Lágy szinkronizálás", de: "Sanft synchronisieren", ro: "Sincronizare ușoară" },
        amplify: { en: "Amplify response", hu: "Válasz felerősítése", de: "Antwort verstärken", ro: "Amplificare răspuns" },
      },
      fracture: {
        title: { en: "Echo fracture", hu: "Visszhang-törés", de: "Echofraktur", ro: "Fractură de ecou" },
        body: {
          en: "The shell pushes back with a fragmented echo. Hold resonance steady or break contact and regroup.",
          hu: "A test töredezett visszhanggal válaszol. Tartsd stabilan a rezonanciát, vagy szakítsd meg a kapcsolatot.",
          de: "Die Hülle drückt mit einem fragmentierten Echo zurück. Halte die Resonanz stabil oder brich den Kontakt ab.",
          ro: "Corpul responde cu un ecou fragmentat. Menține rezonanța stabilă sau întrerupe contactul."
        },
        options: {
          holdResonance: { en: "Hold resonance", hu: "Rezonancia tartása", de: "Resonanz halten", ro: "Menținere rezonanță" },
          breakContact: { en: "Break contact", hu: "Kapcsolat bontása", de: "Kontakt abbrechen", ro: "Întrerupere contact" },
        }
      }
    },
    driftLock: {
      title: { en: "Drift lock warning", hu: "Drift-zár figyelmeztetés", de: "Drift-Lock-Warnung", ro: "Avertisment blocaj derivă" },
      body: {
        en: "Too many scars are pulling the station toward a repeating pattern. Break the loop now or let the system fold inward.",
        hu: "Túl sok seb húzza az állomást egy ismétlődő minta felé. Törd meg a hurkot most, vagy hagyd befelé omlani a rendszert.",
        de: "Zu viele Narben ziehen die Station in ein Wiederholungsmuster. Brich die Schleife jetzt ab oder lass das System in sich zusammenfalten.",
        ro: "Prea multe cicatrici trag stația spre un tipar repetitiv. Întrerupe bucla acum sau lasă sistemul să se plieze spre interior."
      },
      options: {
        breakLoop: { en: "Break the loop", hu: "Hurok megtörése", de: "Schleife abbrechen", ro: "Ruperea buclei" },
        foldInward: { en: "Let it fold inward", hu: "Befelé omlás engedése", de: "In sich zusammenfalten lassen", ro: "Pliere spre interior" },
      }
    },
    voidBreach: {
      step1: {
        title: { en: "Void breach", hu: "Void repedés", de: "Void-Bruch", ro: "Breșă Void" },
        body: {
          en: "A fracture in the psychic layer of the core has opened. It leaks cold silence. Seal it with power or attempt to commune?",
          hu: "Repedés nyílt a mag pszichikai rétegén. Hideg csend szivárog belőle. Zárd le energiával, vagy próbálj meg kapcsolatba lépni vele?",
          de: "Ein Bruch in der psychischen Schicht des Kerns hat sich geöffnet. Kalte Stille tritt aus. Mit Energie versiegeln oder kommunizieren?",
          ro: "O fractură în stratul psihic al nucleului s-a deschis. Scurge o tăcere rece. Sigilează-l cu energie sau încearcă să comunici?"
        },
        options: {
          seal: { en: "Seal with power", hu: "Lezárás energiával", de: "Mit Energie versiegeln", ro: "Sigilare cu energie" },
          commune: { en: "Commune with silence", hu: "Kapcsolatfelvétel", de: "Mit Stille kommunizieren", ro: "Comunicare cu tăcerea" },
        }
      },
      step2: {
        title: { en: "The Silence answers", hu: "A Csend válaszol", de: "Die Stille antwortet", ro: "Tăcerea răspunde" },
        body: {
          en: "The breach did not close. It is demanding a sacrifice of material to stabilize or a permanent scar on the reactor to anchor it.",
          hu: "A repedés nem zárult be. Anyagi áldozatot követel a stabilizáláshoz, vagy egy állandó sebet a reaktoron a rögzítéshez.",
          de: "Der Bruch schloss sich nicht. Er fordert ein Materialopfer zur Stabilisierung oder eine Narbe am Reaktor zur Verankerung.",
          ro: "Breșa nu s-a închis. Cere un sacrificiu de materiale pentru stabilizare sau o cicatrice permanentă pe reactor pentru ancorare."
        },
        options: {
          sacrifice: { en: "Sacrifice materials", hu: "Anyagi áldozat", de: "Material opfern", ro: "Sacrificiu materiale" },
          anchor: { en: "Anchor to reactor", hu: "Rögzítés a reaktorhoz", de: "Am Reaktor verankern", ro: "Ancorare la reactor" },
        }
      }
    },
    sensorGhosting: {
      title: { en: "Sensor ghosting", hu: "Szenzor-szellemkép", de: "Sensorgeister", ro: "Imagini fantomă senzori" },
      body: {
        en: "Phantoms are appearing on the long-range grid. They might be real debris or just drift noise. Ignore them or run a deep recalibration?",
        hu: "Fantomjelek jelennek meg a távoli hálón. Lehetnek valódi törmelékek vagy csak zaj. Hagyd figyelmen kívül, vagy indíts mély újrakalibrálást?",
        de: "Phantome erscheinen auf dem Langstreckengitter. Es könnten echte Trümmer oder nur Rauschen sein. Ignorieren oder neu kalibrieren?",
        ro: "Fantome apar pe rețeaua la distanță. Ar putea fi resturi reale sau doar zgomot de derivă. Ignoră-le sau rulează o recalibrare profundă?"
      },
      options: {
        ignore: { en: "Ignore the ghosts", hu: "Fantomok figyelmen kívül hagyása", de: "Geister ignorieren", ro: "Ignorare fantome" },
        recalibrate: { en: "Deep recalibration", hu: "Mély újrakalibrálás", de: "Tiefe Neukalibrierung", ro: "Recalibrare profundă" },
      }
    },
    deepTrek: {
      title: { en: "Deep Trek", hu: "Mély-expedíció", de: "Tiefenexpedition", ro: "Expediție profundă" },
      body: {
        en: "A salvage drone has found a path into a derelict hull nearby. It's a risk to the drone, but the payoff could be huge.",
        hu: "Egy mentődrón utat talált egy közeli elhagyatott hajótestbe. Kockázatos a drón számára, de a nyereség hatalmas lehet.",
        de: "Eine Bergungsdrohne hat einen Weg in ein Wrack in der Nähe gefunden. Es ist riskant, aber der Gewinn könnte groß sein.",
        ro: "O dronă de recuperare a găsit o cale într-o epavă din apropiere. Este un risc pentru dronă, dar câștigul ar putea fi uriaș."
      },
      options: {
        sendDrone: { en: "Send drone deep", hu: "Drón küldése mélyre", de: "Drohne tief schicken", ro: "Trimitere dronă în profunzime" },
        recall: { en: "Recall drone", hu: "Drón visszahívása", de: "Drohne zurückrufen", ro: "Rechemare dronă" },
      }
    },
    entropyCascade: {
      step1: {
        title: { en: "Entropy cascade", hu: "Entrópia-kaszkád", de: "Entropiekaskade", ro: "Cascadă de entropie" },
        body: {
          en: "Structural entropy is reaching critical levels. The station's logic grid is beginning to fragment. Purge the buffer with materials or attempt to isolate the affected modules?",
          hu: "A szerkezeti entrópia kritikus szintet ér el. Az állomás logikai hálózata töredezni kezd. Ürítsd ki a puffert anyagokkal, vagy próbáld izolálni a modulokat?",
          de: "Strukturelle Entropie erreicht kritische Werte. Das Logiknetz beginnt zu fragmentieren. Puffer mit Material leeren oder Module isolieren?",
          ro: "Entropia structurală atinge niveluri critice. Rețeaua logică a stației începe să se fragmenteze. Purjează tamponul sau izolează modulele?"
        },
        options: {
          purgeBuffer: { en: "Purge with materials", hu: "Tisztítás anyaggal", de: "Mit Material leeren", ro: "Purjare cu materiale" },
          isolateModules: { en: "Isolate modules", hu: "Modulok izolálása", de: "Module isolieren", ro: "Izolare module" },
        }
      },
      step2: {
        title: { en: "Isolator failure", hu: "Izolációs hiba", de: "Isolatorfehler", ro: "Eșec izolator" },
        body: {
          en: "The isolation failed to contain the cascade. A random module is being flooded with junk data. Let it burn out or redirect the junk into the core resonance?",
          hu: "Az izoláció nem tudta megállítani a folyamatot. Egy modul elárad szemétadatokkal. Hagyd kiégni, vagy irányítsd át a szemetet a magrezonanciába?",
          de: "Die Isolation schlug fehl. Ein Modul wird mit Datenmüll überflutet. Ausbrennen lassen oder Müll in die Kernresonanz leiten?",
          ro: "Izolarea nu a reușit să conțină cascada. Un modul este inundat cu date inutile. Lasă-l să se ardă sau redirecționează datele în nucleu?"
        },
        options: {
          burnOut: { en: "Allow burnout", hu: "Kiégés engedése", de: "Ausbrennen lassen", ro: "Permite arderea" },
          redirectCore: { en: "Redirect to core", hu: "Átirányítás a maghoz", de: "Zum Kern leiten", ro: "Redirecționare spre nucleu" },
        }
      }
    },
    supplyCascade: {
      step1: {
        title: { en: "Supply cascade", hu: "Ellátási kaszkád", de: "Versorgungskaskade", ro: "Cascadă de aprovizionare" },
        body: {
          en: "A logistics drone has identified a cache in the debris field, but it's guarded by a magnetic storm. Divert power to shields or risk the drones?",
          hu: "Egy logisztikai drón készletet talált a törmelékmezőben, de mágneses vihar védi. Irányíts energiát a pajzsokra, vagy kockáztasd a drónokat?",
          de: "Eine Drohne hat ein Lager im Trümmerfeld gefunden, aber ein Magnetsturm bewacht es. Energie auf Schilde oder Drohnen riskieren?",
          ro: "O dronă logistică a identificat un depozit, dar este păzit de o furtună magnetică. Redirecționează energia spre scuturi sau riscă dronele?"
        },
        options: {
          divertPower: { en: "Divert power to shields", hu: "Energia a pajzsokra", de: "Energie auf Schilde", ro: "Redirecționare spre scuturi" },
          riskDrones: { en: "Risk the drones", hu: "Drónok kockáztatása", de: "Drohnen riskieren", ro: "Riscarea dronelor" },
        }
      },
      step2: {
        title: { en: "Cache recovery", hu: "Készlet kinyerése", de: "Lagerbergung", ro: "Recuperare depozit" },
        body: {
          en: "The drones found the cache. It contains unstable volatile matter. Process it immediately for fuel or stabilize it for structural repairs?",
          hu: "A drónok megtalálták a készletet. Instabil anyagot tartalmaz. Dolgozd fel üzemanyagnak, vagy stabilizáld a szerkezeti javításokhoz?",
          de: "Drohnen fanden das Lager. Es enthält instabile Materie. Sofort als Treibstoff nutzen oder für Reparaturen stabilisieren?",
          ro: "Dronele au găsit depozitul. Conține materie instabilă. Proceseaz-o pentru combustibil sau stabilizeaz-o pentru reparații?"
        },
        options: {
          processFuel: { en: "Process for fuel", hu: "Feldolgozás üzemanyagnak", de: "Als Treibstoff nutzen", ro: "Procesare combustibil" },
          stabilizeStructure: { en: "Stabilize for repairs", hu: "Stabilizálás javításhoz", de: "Für Reparaturen stabilisieren", ro: "Stabilizare pentru reparații" },
        }
      },
      step3: {
        title: { en: "Volatile feedback", hu: "Veszélyes visszacsatolás", de: "Instabiles Feedback", ro: "Feedback volatil" },
        body: {
          en: "The matter is reacting with the station grid. Lock the feedback into the logistics sub-frame or vent it through the sensors?",
          hu: "Az anyag reakcióba lép az állomás hálózatával. Zárd a visszacsatolást a logisztikai keretbe, vagy vezesd ki a szenzorokon át?",
          de: "Die Materie reagiert mit dem Netz. Feedback in die Logistik sperren oder durch Sensoren ablassen?",
          ro: "Materia reacționează cu rețeaua. Blochează feedback-ul în logisitică sau evacuează-l prin senzori?"
        },
        options: {
          lockLogistics: { en: "Lock into logistics", hu: "Lezárás a logisztikába", de: "In Logistik sperren", ro: "Blocare în logistică" },
          ventSensors: { en: "Vent through sensors", hu: "Kivezetés a szenzorokon", de: "Durch Sensoren ablassen", ro: "Evacuare prin senzori" },
        }
      }
    },
    emergencyOverride: {
      step1: {
        title: { en: "EMERGENCY OVERRIDE", hu: "KÉZI FELÜLBÍRÁLÁS", de: "NOTFALL-OVERRIDE", ro: "SUPRASCRIERE DE URGENȚĂ" },
        body: {
          en: "Mainframe locked. Systems are dark. Force the power grid or attempt a cold reboot of the logic buffer?",
          hu: "Főkeret lezárva. A rendszerek sötétek. Erőltesd meg a hálózatot, vagy próbálj meg egy hideg újraindítást a logikai pufferen?",
          de: "Mainframe gesperrt. Systeme dunkel. Stromnetz forzieren oder Kaltstart des Logikpuffers?",
          ro: "Unitatea centrală blocată. Sistemele sunt întunecate. Forțează rețeaua sau încearcă o repornire la rece a tamponului logic?"
        },
        options: {
          forceGrid: { en: "Force grid (+STB)", hu: "Hálózat erőltetése (+STB)", de: "Netz forzieren (+STB)", ro: "Forțare rețea (+STB)" },
          purgeBuffer: { en: "Cold reboot (-PWR)", hu: "Hideg újraindítás (-PWR)", de: "Kaltstart (-PWR)", ro: "Repornire la rece (-PWR)" },
        }
      },
      step2: {
        title: { en: "SYSTEM RECOVERY", hu: "RENDSZER HELYREÁLLÍTÁSA", de: "SYSTEMWIEDERHERSTELLUNG", ro: "RECUPERARE SISTEM" },
        body: {
          en: "The bypass is working, but systems are stuttering. Sacrifice materials to patch the cooling vents, or let the core resonance absorb the entropy surge?",
          hu: "A felülbírálás működik, de a rendszerek akadoznak. Áldozz fel anyagot a hűtőnyílások javítására, vagy hagyd, hogy a magrezonancia nyelje el az entrópiát?",
          de: "Bypass funktioniert, aber Systeme stottern. Material opfern für Kühlung oder Kernresonanz die Entropie schlucken lassen?",
          ro: "Bypass-ul funcționează, dar sistemele sacadează. Sacrifică materiale pentru răcire sau lasă rezonanța nucleului să absoarbă fluxul de entropie?"
        },
        options: {
          patchVents: { en: "Patch vents (-MAT)", hu: "Nyílások javítása (-ANYAG)", de: "Lüftungen flicken (-MAT)", ro: "Reparare orificii (-MAT)" },
          absorbSurge: { en: "Absorb surge (+ENT)", hu: "Entrópia elnyelése (+ENT)", de: "Stoß absorbieren (+ENT)", ro: "Absorbire flux (+ENT)" },
        }
      }
    }
  },
  alerts: {
    absorbed: { en: "The fluctuation was absorbed, but the reserve grid is overloading.", hu: "Az ingadozást elnyelted, de a tartalék hálózat túlterhelődik.", de: "Schwankung absorbiert, aber Netz überlastet.", ro: "Fluctuația a fost absorbită, dar rețeaua se supraîncărcă." },
    coreLocked: { en: "Excess charge locked into the core spine.", hu: "A felesleges töltés a mag gerincébe lett zárva.", de: "Überschuss im Kern fixiert.", ro: "Sarcina în exces a fost blocată în nucleu." },
    housingBurn: { en: "The overload burned through the outer housing and cleared.", hu: "A túlterhelés átégette a külső házat és megszűnt.", de: "Überlastung brannte durch Gehäuse und klärte sich.", ro: "Supraîncărcarea a ars prin carcasă și s-a curajat." },
    vented: { en: "Excess charge vented into the dark.", hu: "A felesleges töltés kivezetve a sötétbe.", de: "Überschuss ins Dunkle abgelassen.", ro: "Sarcina în exces a fost evacuată în întuneric." },
    stripped: { en: "Inner plating was stripped for emergency stock.", hu: "A belső burkolatot lefejtették a vészhelyzeti készlethez.", de: "Innere Panzerung für Notvorrat abgestreift.", ro: "Placarea interioară a fost demontată pentru stocul de urgență." },
    scavenged: { en: "Drone sweep returned with limited salvage.", hu: "A drónok kevés nyersanyaggal tértek vissza.", de: "Drohnen kehrten mit wenig Material zurück.", ro: "Drona s-a întors cu materiale limitate." },
    echoStrong: { en: "The shell answered harder than expected.", hu: "A test a vártnál erősebben válaszolt.", de: "Die Hülle antwortete stärker als erwartet.", ro: "Corpul a răspuns mai puternic decât se aștepta." },
    resonanceHeld: { en: "The fractured echo was held in resonance.", hu: "A töredezett visszhangot sikerült rezonanciában tartani.", de: "Gespaltener Echo in Resonanz gehalten.", ro: "Ecouul fragmentat a fost menținut în rezonanță." },
    contactBroken: { en: "Contact was broken before the shell destabilized further.", hu: "A kapcsolat megszakadt, mielőtt a test tovább destabilizálódott volna.", de: "Kontakt abgebrochen, bevor Hülle weiter destabilisierte.", ro: "Contactul a fost întrerupt înainte de destabilizarea corpului." },
    shellAligned: { en: "The shell pulse aligned cleanly.", hu: "A test impulzusa tisztán illeszkedett.", de: "Hüllenpuls sauber ausgerichtet.", ro: "Pulsul corpului s-a aliniat curat." },
    foldedInward: { en: "The station folded inward and the pattern deepened.", hu: "Az állomás befelé omlott, és a minta elmélyült.", de: "Station faltete sich nach innen, Muster vertiefte sich.", ro: "Stația s-a pliat spre interior și tiparul s-a adâncit." },
    driftBroken: { en: "The repeating pattern was broken before it sealed.", hu: "Az ismétlődő minta megtört, mielőtt rögzült volna.", de: "Wiederholungsmuster gebrochen, bevor es sich schloss.", ro: "Tiparul repetitiv a fost rupt înainte de a se sigila." },
    critPower: { en: "Power reserves critically low.", hu: "Az energiatartalékok kritikusan alacsonyak.", de: "Energiereserven kritisch niedrig.", ro: "Rezerve de energie critic de scăzute." },
    critStability: { en: "Station stability slipping.", hu: "Az állomás stabilitása csökken.", de: "Stationsstabilität sinkt.", ro: "Stabilitatea stației scade." },
    resolveAnomaly: { en: "Resolve the current anomaly before issuing a new command.", hu: "Hárítsd el az anomáliát az új parancs kiadása előtt.", de: "Anomalie lösen, bevor neuer Befehl erteilt wird.", ro: "Rezolvă anomalia înainte de a da o comandă nouă." },
    noMaterials: { en: "Not enough materials to stabilize the reactor.", hu: "Nincs elég anyag a reaktor stabilizálásához.", de: "Nicht genug Material für Reaktorstabilisierung.", ro: "Nu sunt suficiente materiale pentru a stabiliza reactorul." },
    noPowerReroute: { en: "Insufficient power to reroute into the core chamber.", hu: "Nincs elég energia az átirányításhoz a magkamrába.", de: "Zu wenig Energie für Umleitung in Kernkammer.", ro: "Energie insuficientă pentru redirecționare în nucleu." },
    repairAborted: { en: "Repair aborted. Materials too low.", hu: "Javítás megszakítva. Kevés nyersanyag.", de: "Reparatur abgebrochen. Zu wenig Material.", ro: "Reparație abandonată. Materiale insuficiente." },
    modulePatched: (name: LocalizedString) => ({ en: `${name.en} patched and recalibrated.`, hu: `${name.hu} foltozva és újrakalibrálva.`, de: `${name.de} geflickt und neu kalibriert.`, ro: `${name.ro} reparat și recalibrat.` }),
    scavengeSuccess: { en: "Scavenger drones returned with salvage.", hu: "A mentődrónok nyersanyaggal tértek vissza.", de: "Drohnen mit Material zurückgekehrt.", ro: "Dronele s-au întors cu materiale." },
    reactorStabilized: { en: "Reactor pulse stabilized.", hu: "A reaktor pulzusa stabilizálódott.", de: "Reaktorpuls stabilisiert.", ro: "Pulsul reactorului s-a stabilizat." },
    distortionCleared: { en: "Distortion sweep completed. Local drift dampened.", hu: "Torzítás-eltávolítás kész. A helyi drift csökkent.", de: "Distortionssweep fertig. Lokaler Drift gedämpft.", ro: "Scanare distorsiuni gata. Deriva locală atenuată." },
    noPowerDistortion: { en: "Insufficient power for distortion sweep.", hu: "Nincs elég energia a torzítás-eltávolításhoz.", de: "Zu wenig Energie für Distortionssweep.", ro: "Energie insuficientă pentru scanare distorsiuni." },
    powerDiverted: { en: "Power diverted to shields. Drones safe.", hu: "Energia a pajzsokra irányítva. A drónok épek.", de: "Energie auf Schilde. Drohnen sicher.", ro: "Energie redirecționată spre scuturi. Drone sigure." },
    dronesLost: { en: "Drones damaged by the storm.", hu: "A drónok megsérültek a viharban.", de: "Drohnen im Sturm beschädigt.", ro: "Drone afectate de furtună." },
    fuelProcessed: { en: "Volatile matter converted to power.", hu: "Az instabil anyag energiává lett alakítva.", de: "Instabile Materie in Energie umgewandelt.", ro: "Materie volatilă convertită în energie." },
    structureStabilized: { en: "Station integrity reinforced.", hu: "Az állomás szerkezete megerősítve.", de: "Stationsintegrität verstärkt.", ro: "Integritatea stației consolidată." },
    logisticsLocked: { en: "Feedback locked. Logistics stressed.", hu: "Visszacsatolás rögzítve. A logisztika terhelve.", de: "Feedback fixiert. Logistik belastet.", ro: "Feedback blocat. Logistică tensionată." },
    sensorsVented: { en: "Feedback vented. Sensors distorted.", hu: "Visszacsatolás kivezetve. A szenzorok torzultak.", de: "Feedback abgelassen. Sensoren verzerrt.", ro: "Feedback evacuat. Senzori distorsionați." },
    voidSealed: { en: "The breach was sealed with a heavy pulse.", hu: "A repedést lezárta egy erős impulzus.", de: "Bruch mit starkem Impuls versiegelt.", ro: "Breșa a fost sigilată cu un puls puternic." },
    voidCommune: { en: "You looked into the breach and it looked back.", hu: "Belénéztél a repedésbe, és az visszanézett rád.", de: "Du blicktest in den Bruch und er blickte zurück.", ro: "Te-ai uitat în breșă și ea s-a uitat înapoi." },
    voidSacrifice: { en: "Materials were fed to the void to quiet it.", hu: "Anyagokat adtál a voidnak, hogy lecsendesítsd.", de: "Material an Void verfüttert, um es zu beruhigen.", ro: "Materiale oferite voidului pentru a-l liniști." },
    voidAnchored: { en: "The void was anchored to the reactor housing.", hu: "A voidot a reaktorházhoz rögzítetted.", de: "Void am Reaktorgehäuse verankert.", ro: "Void-ul a fost ancorat de carcasa reactorului." },
    ghostsIgnored: { en: "Ghosts remain on the sensors.", hu: "A szellemjelek a szenzorokon maradtak.", de: "Geister bleiben auf Sensoren.", ro: "Fantomele rămân pe senzori." },
    sensorRecalibrated: { en: "Sensors cleared of ghost patterns.", hu: "A szenzorok tiszták a szellemjelektől.", de: "Sensoren von Geistern befreit.", ro: "Senzori curățați de fantome." },
    trekSuccess: { en: "Deep trek returned with rare materials.", hu: "A mély-expedíció ritka anyagokkal tért vissza.", de: "Tiefenexpedition mit seltenem Material zurück.", ro: "Expediția s-a întors cu materiale rare." },
    trekFailed: { en: "The drone was lost in the derelict.", hu: "A drón elveszett az elhagyatott hajóban.", de: "Drohne im Wrack verloren.", ro: "Drona a fost pierdută în epavă." },
    entropyPurged: { en: "Buffer purged. Entropy levels stabilized.", hu: "Puffer ürítve. Az entrópiaszint stabilizálódott.", de: "Puffer geleert. Entropie stabilisiert.", ro: "Tampon purjat. Niveluri de entropie stabilizate." },
    cascadeIsolated: { en: "Modules isolated, but the cascade continues.", hu: "Modulok izolálva, de a kaszkád folytatódik.", de: "Module isoliert, aber Kaskade läuft weiter.", ro: "Module izolate, dar cascada continuă." },
    moduleBurnout: (name: LocalizedString) => ({ en: `${name.en} suffered a logic burnout and went offline.`, hu: `${name.hu} logikai kiégést szenvedett és leállt.`, de: `${name.de} erlitt Logikausfall und ging offline.`, ro: `${name.ro} a suferit o ardere logică și s-a oprit.` }),
    coreRedirection: { en: "Cascade junk redirected to the core. Activation destabilized.", hu: "Szemétadatok a maghoz irányítva. Az aktiválás bizonytalan.", de: "Datenmüll zum Kern geleitet. Aktivierung instabil.", ro: "Date inutile redirecționate spre nucleu. Activare destabilizată." },
    reactorOverdriven: { en: "Reactor core overdriven! Output surging!", hu: "Reaktormag túlhajtva! Az energia ömlik!", de: "Reaktorkern überlastet! Output steigt!", ro: "Nucleu reactor suprasolicitat! Producție crescută!" },
    logisticsOptimized: { en: "Logistics routes optimized for maximum throughput.", hu: "Logisztikai útvonalak optimalizálva a maximumra.", de: "Logistikrouten auf Maximum optimiert.", ro: "Rute logistice optimizate pentru flux maxim." },
    deepScanComplete: { en: "Deep sensor scan completed. Void echoes dampened.", hu: "Mély szenzoros vizsgálat kész. Void visszhangok tompítva.", de: "Tiefer Sensorscan fertig. Void-Echos gedämpft.", ro: "Scanare senzori gata. Ecouri void atenuate." },
    anomalyPurged: (name: LocalizedString) => ({
      en: `${name.en} anomaly has been purged.`,
      hu: `${name.hu} anomália semlegesítve.`,
      de: `${name.de} Anomalie getilgt.`,
      ro: `${name.ro} anomalia a fost eliminată.`
    }),
    driftGlitch: (name: LocalizedString) => ({ en: `Drift glitch: ${name.en} integrity dropping.`, hu: `Drift hiba: ${name.hu} integritása csökken.`, de: `Drift-Glitch: ${name.de}-Integrität sinkt.`, ro: `Eroare derivă: integritatea ${name.ro} scade.` }),
    overrideForced: { en: "Power grid forced. Frame is screaming.", hu: "Hálózat megfeszítve. A váz sikolt.", de: "Netz forziert. Rahmen schreit.", ro: "Rețea forțată. Cadrul scoate sunete stridente." },
    overrideBypass: { en: "Cold reboot initiated. Buffer cleared.", hu: "Hideg újraindítás elindítva. Puffer ürítve.", de: "Kaltstart initiiert. Puffer leer.", ro: "Repornire la rece inițiată. Tampon purjat." },
    lockdownLifted: { en: "Lockdown lifted. Control restored.", hu: "Lezárás feloldva. Vezérlés helyreállítva.", de: "Lockdown aufgehoben. Kontrolle zurück.", ro: "Blocare ridicată. Control restabilit." },
    overridePatch: { en: "Cooling vents patched. System cooling down.", hu: "Hűtőnyílások befoltozva. A rendszer hűl.", de: "Lüftungen geflickt. System kühlt ab.", ro: "Orificii reparate. Sistemul se răcește." },
    overrideFocus: { en: "Core absorbed the surge. Static remains.", hu: "A mag elnyelte az entrópiát. Statikus zaj maradt.", de: "Kern absorbierte Stoß. Statik bleibt.", ro: "Nucleul a absorbit fluxul. Rămâne electricitate statică." },
    powerDischarged: { en: "Energy discharged into stabilizers. Stability up.", hu: "Energia a stabilizátorokba vezetve. Stabilitás nőtt.", de: "Energie in Stabilisatoren entladen. Stabilität hoch.", ro: "Energie descărcată în stabilizatori. Stabilitate crescută." },
    rapidFabSuccess: (name: LocalizedString) => ({ en: `Rapid fabrication complete for ${name.en}.`, hu: `Gyorsgyártás kész: ${name.hu}.`, de: `Schnellfertigung für ${name.de} abgeschlossen.`, ro: `Fabricare rapidă finalizată pentru ${name.ro}.` }),
  },
  journal: {
    surgeCaptured: { en: "You captured the surge, but the station frame trembled.", hu: "Elkaptad a túlfeszültséget, de az állomás váza megremegett.", de: "Stoß eingefangen, aber Stationsrahmen bebte.", ro: "Ai captat tensiunea, dar cadrul stației a tremurat." },
    overloadCore: { en: "The overload was redirected into the core, accelerating activation at a structural cost.", hu: "A túlterhelés a magba lett irányítva, gyorsítva az aktiválást, de károsítva a szerkezetet.", de: "Überlastung in den Kern geleitet, beschleunigt Aktivierung auf Kosten der Struktur.", ro: "Supraîncărcarea a fost redirecționată în nucleu, accelerând activarea cu cost structural." },
    reactorScar: { en: "You protected the frame, but the reactor housing took the scar.", hu: "Megvédted a vázat, de a reaktorház sebet kapott.", de: "Rahmen geschützt, aber Reaktorgehäuse nahm Narbe auf.", ro: "Ai protejat cadrul, dar carcasa reactorului a primit o cicatrice." },
    surgeVented: { en: "The surge was vented safely through the outer hull.", hu: "A túlfeszültséget biztonságosan kivezetted a külső burkolaton.", de: "Stoß sicher durch Außenhülle abgelassen.", ro: "Tensiunea a fost evacuată în siguranță prin carcasă." },
    emergencyPlating: { en: "Emergency plating was cut loose to keep systems supplied.", hu: "Vészburkolatot bontottak le a rendszerek ellátásához.", de: "Notpanzerung gelöst, um Systeme zu versorgen.", ro: "Placarea de urgență a fost demontată pentru a aproviziona sistemele." },
    scavengerDrone: { en: "Scavenger drones found material, but burned precious power doing it.", hu: "A mentődrónok anyagot találtak, de értékes energiát égettek el hozzá.", de: "Bergungsdrohnen fanden Material, verbrauchten aber viel Energie.", ro: "Dronele au găsit materiale, dar au consumat energie prețioasă." },
    forcedEcho: { en: "You forced a stronger echo from the shell at a structural cost.", hu: "Erősebb visszhangot kényszerítettél ki a testből, szerkezeti áron.", de: "Stärkeres Echo aus Hülle erzwungen, Strukturkosten.", ro: "Ai forțat un ecou mai puternic, cu cost structural." },
    deepResponse: { en: "You kept the shell aligned through the fracture and gained a deeper response.", hu: "A repedés ellenére összehangolva tartottad a testet, és mélyebb választ kaptál.", de: "Hülle trotz Bruch ausgerichtet gehalten, tiefere Antwort erhalten.", ro: "Ai menținut corpul aliniat prin fractură și ai obținut un răspuns mai profund." },
    resonanceCut: { en: "You cut the resonance and preserved the station at the cost of momentum.", hu: "Megszakítottad a rezonanciát az állomás védelmében, a lendület árán.", de: "Resonanz abgebrochen, Station geschützt, Schwung verloren.", ro: "Ai întrerupt rezonanța și ai protejat stația în detrimentul impulsului." },
    steadiedResonance: { en: "A careful synchronization steadied the shell resonance.", hu: "Óvatos szinkronizálás stabilizálta a test rezonanciáját.", de: "Vorsichtige Synchronisation stabilisierte Hüllenresonanz.", ro: "O sincronizare atentă a stabilizat rezonanța corpului." },
    repeatingPattern: { en: "You let the repeating pattern close around the station. It answered, but not cleanly.", hu: "Hagytad, hogy az ismétlődő minta körbezárja az állomást. Válaszolt, de nem tisztán.", de: "Wiederholungsmuster schließen lassen. Es antwortete, aber unrein.", ro: "Ai lăsat tiparul repetitiv să se închidă. A răspuns, dar nu curat." },
    burnedToBreak: { en: "You burned resources to break the drift before it hardened into a loop.", hu: "Erőforrásokat égettél el, hogy megtörd a driftet, mielőtt hurokká merevedne.", de: "Ressourcen verbrannt, um Drift vor Schleifenbildung zu brechen.", ro: "Ai consumat resurse pentru a rupe deriva înainte de a se fixa." },
    voidSealedJournal: { en: "The void breach was closed, but at a significant power cost.", hu: "A void repedést sikerült lezárni, de jelentős energia árán.", de: "Void-Bruch geschlossen, aber hoher Energieaufwand.", ro: "Breșa void a fost închisă, dar cu un cost mare de energie." },
    voidEchoJournal: { en: "The void echo remains in the core, whispering.", hu: "A void visszhang a magban maradt, suttogva.", de: "Void-Echo bleibt im Kern, flüsternd.", ro: "Ecouul void rămâne în nucleu, șoptind." },
    voidSacrificeJournal: { en: "The void was appeased by a sacrifice of structure.", hu: "A voidot megbékítette a szerkezeti áldozat.", de: "Void durch Strukturpfer besänftigt.", ro: "Void-ul a fost liniștit de un sacrificiu structural." },
    voidReactorScarJournal: { en: "The reactor now hums with the cold resonance of the void.", hu: "A reaktor most a void hideg rezonanciájával zúg.", de: "Reaktor summt nun mit kalter Void-Resonanz.", ro: "Reactorul zumzăie acum cu rezonanța rece a void-ului." },
    ghostAnomalyJournal: { en: "Persistent ghost signals are clouding the sensors.", hu: "Folyamatos szellemjelek zavarják a szenzorokat.", de: "Dauerhafte Geistersignale trüben Sensoren.", ro: "Semnale fantomă persistente bruiază senzorii." },
    sensorRecalibratedJournal: { en: "You cleared the ghost signals, but the scan was taxing.", hu: "Eltávolítottad a szellemjeleket, de a vizsgálat kimerítő volt.", de: "Geistersignale geklärt, Scan war anstrengend.", ro: "Ai curățat semnalele fantomă, dar scanarea a fost solicitantă." },
    trekRichesJournal: { en: "The deep trek was incredibly lucrative.", hu: "A mély-expedíció hihetetlenül jövedelmező volt.", de: "Tiefenexpedition war sehr lukrativ.", ro: "Expediția a fost incredibil de profitabilă." },
    trekLossJournal: { en: "A logistics drone was swallowed by the dark.", hu: "Egy logisztikai drónt elnyelt a sötétség.", de: "Logistikdrohne von Dunkelheit verschluckt.", ro: "O dronă logistică a fost înghițită de întuneric." },
    recoveredMaterials: (amount: number) => ({ en: `Recovered ${amount} materials from the outer ring.`, hu: `Begyűjtöttél ${amount} egység anyagot a külső gyűrűből.`, de: `${amount} Materialien aus Außenring geborgen.`, ro: `Recuperat ${amount} materiale din inelul exterior.` }),
    reactorRealigned: { en: "Reactor field realigned successfully.", hu: "A reaktormező sikeresen újraillesztve.", de: "Reaktorfeld erfolgreich neu ausgerichtet.", ro: "Câmpul reactorului a fost realiniat." },
    integrityRestored: (name: LocalizedString, value: number) => ({ en: `${name.en} integrity restored to ${value}%.`, hu: `${name.hu} integritása helyreállítva: ${value}%.`, de: `${name.de}-Integrität auf ${value}% wiederhergestellt.`, ro: `Integritatea ${name.ro} restabilită la ${value}%.` }),
    driftDampened: { en: "Sensor sweep cleared structural micro-fractures and supply friction.", hu: "A szenzoros vizsgálat eltávolította a mikro-repedéseket és az ellátási súrlódást.", de: "Sensorsweep klärte Mikrofrakturen und Versorgungsreibung.", ro: "Scanarea a curățat micro-fracturile și fricțiunea." },
    gridForced: { en: "You forced the main power bus. Systems are flickering back to life.", hu: "Megfeszítetted a fő tápvezetéket. A rendszerek villódzva éledeznek.", de: "Hauptbus forziert. Systeme flackern wieder auf.", ro: "Ai forțat magistrala principală de energie. Sistemele revin la viață." },
    coolingBypassed: { en: "Manual logic bypass complete. Cooling systems are screaming but operational.", hu: "Kézi logikai bypass kész. A hűtőrendszerek sikoltanak, de működnek.", de: "Manueller Bypass fertig. Kühlung schreit, aber läuft.", ro: "Bypass logic manual finalizat. Sistemele de răcire scot sunete stridente, dar sunt operaționale." },
    hullPatched: { en: "Structural integrity stabilized via manual material welding.", hu: "Szerkezeti integritás stabilizálva kézi hegesztéssel.", de: "Integrität durch manuelles Schweißen stabilisiert.", ro: "Integritate structurală stabilizată prin sudare manuală." },
    voidWhisperHeeded: { en: "The core resonance shifted to a cold, stable rhythm.", hu: "A magrezonancia hideg, stabil ritmusra váltott.", de: "Kernresonanz wechselte in kalten, stabilen Rhythmus.", ro: "Rezonanța nucleului a trecut la un ritm rece și stabil." },
    kineticRegen: { en: "Kinetic stabilizers pulsed with excess energy, anchoring the station.", hu: "A kinetikus stabilizátorok elnyelték a felesleges energiát, rögzítve az állomást.", de: "Kinetische Stabilisatoren pulsierten, Station verankert.", ro: "Stabilizatorii cinetici au pulsat cu energie în exces, ancorând stația." },
    rapidRepair: (name: LocalizedString) => ({ en: `Automated fabricators used raw stock to reinforce ${name.en}.`, hu: `Az automata gyártók nyersanyagból erősítették meg a(z) ${name.hu} egységet.`, de: `Automatisierte Fertiger verstärkten ${name.de} mit Rohmaterial.`, ro: `Fabricatorii automați au folosit materie primă pentru a consolida ${name.ro}.` }),
    cascadeStart: { en: "Logistics cascade detected in the debris belt.", hu: "Logisztikai kaszkád észlelve a törmelékövben.", de: "Logistikkaskade im Trümmergürtel entdeckt.", ro: "Cascadă logistică detectată în centura de resturi." },
    dronesProtected: { en: "You shielded the recovery team at a power cost.", hu: "Megvédted a mentőcsapatot energia árán.", de: "Bergungsteam unter Energieeinsatz geschützt.", ro: "Ai protejat echipa de recuperare cu un cost de energie." },
    droneDamage: { en: "Magnetic interference battered the scavenger flight.", hu: "Mágneses interferencia tépázta meg a mentőrajt.", de: "Magnetische Interferenz beschädigte Bergungstrupp.", ro: "Interferența magnetică a afectat dronele." },
    volatilePower: { en: "The unstable matter gave a massive boost to reserves.", hu: "Az instabil anyag hatalmas lökést adott a tartalékoknak.", de: "Instabile Materie gab Reserven starken Schub.", ro: "Materia instabilă a oferit un impuls masiv rezervelor." },
    structuralReinforce: { en: "Refined materials patched critical hull weak points.", hu: "A finomított anyagok befoltozták a kritikus gyenge pontokat.", de: "Verfeinerte Materialien flickten Hüllenschwachstellen.", ro: "Materialele rafinate au reparat punctele slabe ale carcasei." },
    logisticsStress: { en: "The logistics frame took the heat to protect the core.", hu: "A logisztikai keret vette át a terhelést a mag védelmében.", de: "Logistikrahmen fing Belastung ab, um Kern zu schützen.", ro: "Cadrul logistic a preluat tensiunea pentru a proteja nucleul." },
    sensorDistortion: { en: "Sensor arrays were used as a lightning rod for the feedback.", hu: "A szenzorhálózat villámhárítóként szolgált a visszacsatoláshoz.", de: "Sensorfelder dienten als Blitzableiter für Feedback.", ro: "Senzorii au fost folosiți ca paratrăsnet pentru feedback." },
    entropyStable: { en: "The entropy cascade was successfully contained.", hu: "Az entrópiakaszkádot sikerült megfékezni.", de: "Entropiekaskade erfolgreich eingedämmt.", ro: "Cascada de entropie a fost conținută." },
    entropyBurnout: { en: "A module took the brunt of the entropy to save the rest of the grid.", hu: "Egy modul feláldozta magát, hogy megmentse a hálózat többi részét.", de: "Ein Modul opferte sich, um den Rest des Netzes zu retten.", ro: "Un modul a preluat șocul entropiei pentru a salva rețeaua." },
    coreSpike: { en: "Core resonance spiked dangerously due to junk data redirection.", hu: "A magrezonancia veszélyesen megugrott a szemétadatok miatt.", de: "Kernresonanz stieg durch Datenmüll gefährlich an.", ro: "Rezonanța nucleului a crescut periculos din cauza datelor inutile." },
    overclockJournal: { en: "Reactor core overdriven for immediate power. Structural scars detected.", hu: "Reaktormag túlhajtva az azonnali energiáért. Szerkezeti sebek észlelve.", de: "Reaktorkern für sofortige Energie überlastet. Strukturnarben.", ro: "Nucleu reactor suprasolicitat. Cicatrici structurale detectate." },
    optimizeJournal: { en: "Logistics throughput maximized. Supply grid is under heavy stress.", hu: "Logisztikai átvitel maximalizálva. Az ellátóhálózat súlyos terhelés alatt.", de: "Logistikdurchsatz maximiert. Versorgungsnetz unter schwerer Last.", ro: "Flux logistic maximizat. Rețeaua este sub tensiune." },
    deepScanJournal: { en: "Sensors focused on the shell's psychic layer, dampening void echoes.", hu: "A szenzorok a test pszichikai rétegére fókuszáltak, tompítva a void visszhangokat.", de: "Sensoren auf psychische Hüllenschicht fokussiert, Void-Echos gedämpft.", ro: "Senzorii s-au concentrat pe stratul psihic, atenuând ecourile void." },
    initialJournal: [
      { en: "Emergency reserve power detected.", hu: "Vészhelyzeti tartalék energia észlelve.", de: "Notreserveenergie entdeckt.", ro: "Energie de rezervă detectată." },
      { en: "Core chamber sealed.", hu: "Magkamra lezárva.", de: "Kernkammer versiegelt.", ro: "Camera nucleului sigilată." },
      { en: "Activation conduit requires manual transfer.", hu: "Az aktiválási csatorna kézi átvitelt igényel.", de: "Aktivierungsleitung erfordert manuellen Transfer.", ro: "Canalul de activare necesită transfer manual." },
    ],
    initialAlert: { en: "Station shell offline. Core signature faint but present.", hu: "Állomás burkolat leállt. A mag jele gyenge, de észlelhető.", de: "Stationshülle offline. Kernsignatur schwach aber da.", ro: "Carcasa stației offline. Semnătura nucleului este slabă." },
  },
  threats: {
    distortionWave: { en: "Distortion Wave", hu: "Torzítási hullám", de: "Distortionswelle", ro: "Val de distorsiune" },
    voidStorm: { en: "Void Storm", hu: "Void vihar", de: "Void-Sturm", ro: "Furtună Void" },
    meteorShower: { en: "Meteor Shower", hu: "Meteorzápor", de: "Meteorschauer", ro: "Ploaie de meteoriți" },
    distortionWaveImpact: { en: "The distortion wave slammed into the hull, destabilizing systems.", hu: "A torzítási hullám a testnek csapódott, destabilizálva a rendszereket.", de: "Die Distortionswelle traf die Hülle und destabilisierte die Systeme.", ro: "Valul de distorsiune a lovit corpul, destabilizând sistemele." },
    voidStormImpact: { en: "The void storm drained power and left psychic echoes.", hu: "A void vihar energiát szívott el és pszichikai visszhangokat hagyott.", de: "Der Void-Sturm entzog Energie und hinterließ psychische Echos.", ro: "Furtuna void a consumat energia și a lăsat ecouri psihice." },
    meteorShowerImpact: { en: "Meteors battered the station modules.", hu: "Meteorok tépázták meg az állomás moduljait.", de: "Meteore malträtierten die Stationsmodule.", ro: "Metoriții au lovit modulele stației." },
    fortifiedJournal: { en: "Shell fortified against the coming impact.", hu: "A burkolat megerősítve a közelgő becsapódás ellen.", de: "Hülle gegen den kommenden Einschlag verstärkt.", ro: "Corpul a fost fortificat împotriva impactului viitor." },
    dampenedJournal: { en: "Sensor dampeners active. Void exposure reduced.", hu: "Szenzorcsillapítók aktívak. Void kitettség csökkent.", de: "Sensordämpfer aktiv. Void-Belastung reduziert.", ro: "Amortizoarele de senzori sunt active. Expunerea la void a fost redusă." },
    aftershockPhase: { en: "Aftershock Phase", hu: "Utórengés fázis", de: "Nachbeben-Phase", ro: "Faza de replici" },
    lingeringDrift: { en: "Lingering logic drift detected. System stabilization required.", hu: "Fennmaradó logikai drift észlelve. Rendszerstabilizálás szükséges.", de: "Anhaltender Logikdrift erkannt. Systemstabilisierung erforderlich.", ro: "Derivă logică persistentă detectată. Este necesară stabilizarea sistemului." },
    aftershockCleared: { en: "System stabilized. Aftershock effects neutralized.", hu: "Rendszer stabilizálva. Az utórengés hatásai megszűntek.", de: "System stabilisiert. Nachbebeneffekte neutralisiert.", ro: "Sistem stabilizat. Efectele replicilor au fost neutralizate." },
  }
};
