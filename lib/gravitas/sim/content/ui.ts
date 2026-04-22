import type { LocalizedString } from "../types";

export const UI_TEXT = {
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
  pattern: { en: "Pattern", hu: "Minta", de: "Muster", ro: "Tipar" },
  patternQuiet: { en: "Quiet", hu: "Csendes", de: "Still", ro: "Liniștit" },
  patternFrayed: { en: "Frayed", hu: "Foszló", de: "Fransig", ro: "Dezlegat" },
  patternStrange: { en: "Strange", hu: "Furcsa", de: "Seltsam", ro: "Straniu" },
  patternThin: { en: "Thin", hu: "Vékony", de: "Dünn", ro: "Subțire" },
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
  repairSensor: { en: "Repair sensor", hu: "Szenzor javítása", de: "Sensor reparieren", ro: "Repară senzorul" },
  hold: { en: "Hold to transfer pulse", hu: "Tartsd nyomva az átvitelt", de: "Gedrückt halten für Transfer", ro: "Ține apăsat pentru transfer" },
  imprintTitle: { en: "Core imprint", hu: "Mag lenyomat", de: "Kernprägung", ro: "Amprentă nucleu" },
  imprintReady: {
    en: "The profile is sealed. Hold the core seal for 30 seconds without letting go.",
    hu: "A profil lezárva. Tartsd lenyomva a magzárat 30 másodpercig anélkül, hogy elengednéd.",
    de: "Das Profil ist versiegelt. Halte das Kernsiegel 30 Sekunden lang ohne Loslassen.",
    ro: "Profilul este sigilat. Ține sigiliul nucleului 30 de secunde fără să eliberezi.",
  },
  imprintLocked: {
    en: "Keep steady. The imprint must stay continuous or it will collapse.",
    hu: "Maradj stabil. A lenyomatnak folyamatosnak kell maradnia, különben összeomlik.",
    de: "Bleib ruhig. Die Prägung muss durchgehend bleiben, sonst bricht sie zusammen.",
    ro: "Rămâi stabil. Amprenta trebuie să rămână continuă sau se va prăbuși.",
  },
  imprintHold: { en: "Hold the seal", hu: "Zárat tartsd nyomva", de: "Siegel halten", ro: "Ține sigiliul" },
  imprintCharge: { en: "Imprint charge", hu: "Lenyomat töltés", de: "Prägeladung", ro: "Încărcare amprentă" },
  imprintComplete: {
    en: "Imprint complete. The avatar can awaken now.",
    hu: "A lenyomat kész. Az avatár most felébredhet.",
    de: "Prägung abgeschlossen. Der Avatar kann jetzt erwachen.",
    ro: "Amprenta este completă. Avatarul se poate trezi acum.",
  },
  repairChain: { en: "Repair chain", hu: "Javítási lánc", de: "Reparaturkette", ro: "Lanț de reparații" },
  repairWindow: { en: "Keep repairing every 15 seconds", hu: "Minden 15 másodpercben javíts", de: "Alle 15 Sekunden reparieren", ro: "Repară la fiecare 15 secunde" },
  repairTimeout: { en: "No repair response. Station failure.", hu: "Nincs javítási reakció. Az állomás elbukott.", de: "Keine Reparaturreaktion. Stationsausfall.", ro: "Nicio reacție de reparație. Stația a eșuat." },
  repairReady: { en: "Repair now", hu: "Javíts most", de: "Jetzt reparieren", ro: "Repară acum" },
  repairSequenceDone: { en: "Repair chain held. Avatar preparation unlocked.", hu: "A javítási lánc kitartott. Az avatar-előkészítés feloldva.", de: "Reparaturkette gehalten. Avatar-Vorbereitung freigeschaltet.", ro: "Lanțul de reparații a rezistat. Pregătirea avatarului a fost deblocată." },
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
  onboardingTitle: { en: "First run", hu: "Első futás", de: "Erster Lauf", ro: "Prima sesiune" },
  onboardingStep1: {
    en: "Tap Scavenge. You need materials before anything else.",
    hu: "Nyomd meg a Nyersanyag gyűjtése gombot. Előbb anyagra van szükséged.",
    de: "Tippe auf Material bergen. Du brauchst zuerst Material.",
    ro: "Apasă Colectează resurse. Ai nevoie de materiale înainte de orice."
  },
  onboardingStep2: {
    en: "Repair Logistics. That opens the flow of resources.",
    hu: "Javítsd meg a logisztikát. Ez nyitja meg az anyagáramlást.",
    de: "Repariere die Logistik. Das öffnet den Ressourcenfluss.",
    ro: "Repară logistica. Asta deschide fluxul de resurse."
  },
  onboardingStep3: {
    en: "Reroute power to the core when the station is steady enough.",
    hu: "Amikor az állomás elég stabil, irányíts energiát a maghoz.",
    de: "Leite Energie zum Kern um, wenn die Station stabil genug ist.",
    ro: "Redirecționează energia spre nucleu când stația este suficient de stabilă."
  },
  onboardingStep4: {
    en: "Hold the transfer in Activation. That is how the shell wakes up.",
    hu: "Az Aktiválásnál tartsd nyomva az átvitelt. Így ébred fel a test.",
    de: "Halte den Transfer in der Aktivierung. So erwacht die Hülle.",
    ro: "Ține transferul în Activare. Așa se trezește corpul."
  },
  onboardingTapHint: {
    en: "You can inspect modules any time by tapping them in the station view.",
    hu: "A modulokat bármikor megnyithatod az állomásnézetben.",
    de: "Du kannst Module jederzeit in der Stationsansicht antippen.",
    ro: "Poți inspecta modulele oricând atingându-le în vederea stației."
  },
  bootstrapCheck: {
    en: "Boot checklist",
    hu: "Boot ellenőrzőlista",
    de: "Boot-Checkliste",
    ro: "Listă de pornire",
  },
  bootstrapHint: {
    en: "Activate every critical module before Wave 1 or the station fails.",
    hu: "Aktiváld az összes kritikus modult az 1. hullám előtt, különben az állomás elbukik.",
    de: "Aktiviere alle kritischen Module vor Welle 1 oder die Station fällt aus.",
    ro: "Activează toate modulele critice înainte de Valul 1 sau stația eșuează.",
  },
  startDirective: {
    en: "Keep the station alive. Repair logistics, stabilize the reactor, and let the strange signals surface on their own.",
    hu: "Tartsd életben az állomást. Javítsd a logisztikát, stabilizáld a reaktort, és hagyd, hogy a furcsa jelek maguktól előjöjjenek.",
    de: "Halte die Station am Leben. Repariere die Logistik, stabilisiere den Reaktor und lass die seltsamen Signale selbst auftauchen.",
    ro: "Ține stația în viață. Repară logistica, stabilizează reactorul și lasă semnalele ciudate să apară de la sine."
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
    en: "The shell opened its eyes. The station is now your anchor, not your boundary.",
    hu: "A test felnézett. Az állomás most már horgony, nem határ.",
    de: "Die Hülle hat die Augen geöffnet. Die Station ist jetzt dein Anker, nicht dein Rand.",
    ro: "Corpul a deschis ochii. Stația este acum ancora ta, nu limita ta."
  },
  phaseShift: {
    en: "Phase II unlocked. The wider world is now active.",
    hu: "II. fázis feloldva. A tágabb világ most aktív.",
    de: "Phase II freigeschaltet. Die weitere Welt ist jetzt aktiv.",
    ro: "Faza II deblocată. Lumea mai largă este acum activă.",
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
};
