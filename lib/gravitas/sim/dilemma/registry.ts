import type { DilemmaEvent, DilemmaId } from "./types";

export const DILEMMA_DEFS: DilemmaEvent[] = [
  // 1. Refugees
  {
    id: "refugees",
    name: { en: "Refugees", hu: "Menekültek", de: "Flüchtlinge", ro: "Refugiați" },
    description: {
      en: "Refugees from a shattered ship are asking for help.",
      hu: "Menekültek érkeznek egy szétvert hajóról. Segítséget kérnek.",
      de: "Flüchtlinge von einem zerstörten Schiff bitten um Hilfe.",
      ro: "Refugiați de pe o navă distrusă cer ajutor.",
    },
    factionId: null, // Any faction can be chosen at runtime
    options: [
      { id: "A", label: { en: "Accept", hu: "Befogadás", de: "Aufnehmen", ro: "Acceptă" }, description: { en: "Take them in. Cost: 50 supply. Bonus: +10 rep, permanent drone speed boost later.", hu: "Befogadod. Költség: 50 ellátmány. Bónusz: +10 reputáció, később drón sebesség bónusz.", de: "Nimm sie auf. Kosten: 50 Vorräte. Bonus: +10 Rep, später Drohnengeschwindigkeit.", ro: "Primește-i. Cost: 50 provizii. Bonus: +10 rep, viteză drone mai târziu." } },
      { id: "B", label: { en: "Refuse", hu: "Elutasítás", de: "Ablehnen", ro: "Refuză" }, description: { en: "Turn them away. -5 rep, risk of future raid.", hu: "Elutasítod. -5 reputáció, jövőbeli portya kockázata.", de: "Weise sie ab. -5 Rep, Risiko eines späteren Überfalls.", ro: "Refuză-i. -5 rep, risc de raid viitor." } },
      { id: "C", label: { en: "Give supplies", hu: "Ellátmányt adsz", de: "Vorräte geben", ro: "Dă provizii" }, description: { en: "Give resources but don't take them in. Cost: 25 supply. +3 rep.", hu: "Anyagot adsz de nem fogadod be. Költség: 25 ellátmány. +3 reputáció.", de: "Gib Vorräte, aber nimm sie nicht auf. Kosten: 25 Vorräte. +3 Rep.", ro: "Dă-le resurse dar nu îi primi. Cost: 25 provizii. +3 rep." } },
    ],
    requiredPhase: null,
    conditions: { minPlayDays: 3 },
    cooldownDays: 14,
    rare: false,
  },
  // 2. Trader Offer
  {
    id: "trader_offer",
    name: { en: "Trader Offer", hu: "Kereskedő ajánlat", de: "Händlerangebot", ro: "Ofertă de comerciant" },
    description: {
      en: "A trader offers rare materials in exchange for sector map data.",
      hu: "Egy kereskedő ritka anyagot kínál, de cserébe a szektorod térképét kéri.",
      de: "Ein Händler bietet seltene Materialien gegen Sektorkartendaten an.",
      ro: "Un comerciant oferă materiale rare în schimbul datelor despre sector.",
    },
    factionId: "noma", // Velari or Noma
    options: [
      { id: "A", label: { en: "Accept", hu: "Elfogadás", de: "Akzeptieren", ro: "Acceptă" }, description: { en: "Gain 80 rift stone, but 30% risk of raid in 14 days.", hu: "Kapsz 80 rift követ, de 30% esély portyára 14 nap múlva.", de: "Erhalte 80 Rift-Steine, aber 30% Risiko eines Überfalls in 14 Tagen.", ro: "Primește 80 rift stone, dar risc de 30% raid în 14 zile." } },
      { id: "B", label: { en: "Refuse", hu: "Elutasítás", de: "Ablehnen", ro: "Refuză" }, description: { en: "No trade. -2 rep.", hu: "Nincs üzlet. -2 reputáció.", de: "Kein Handel. -2 Rep.", ro: "Fără schimb. -2 rep." } },
      { id: "C", label: { en: "Pay double", hu: "Duplán fizetsz", de: "Doppelt bezahlen", ro: "Plătește dublu" }, description: { en: "Cost: 120 lumen dust. Gain 80 rift stone. No risk.", hu: "Költség: 120 lumen por. Kapsz 80 rift követ. Nincs kockázat.", de: "Kosten: 120 Lumenstaub. Erhalte 80 Rift-Steine. Kein Risiko.", ro: "Cost: 120 lumen dust. Primește 80 rift stone. Fără risc." } },
    ],
    requiredPhase: "trade", // or calm
    conditions: {},
    cooldownDays: 10,
    rare: false,
  },
  // 3. Spy Offer
  {
    id: "spy_offer",
    name: { en: "Spy Offer", hu: "Kém ajánlat", de: "Spion-Angebot", ro: "Ofertă de spionaj" },
    description: {
      en: "A deserter offers secret information about their enemy.",
      hu: "Egy dezertőr titkos információkat kínál az ellenségéről.",
      de: "Ein Deserteur bietet geheime Informationen über seinen Feind an.",
      ro: "Un dezertor oferă informații secrete despre inamicul său.",
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Accept", hu: "Elfogadás", de: "Akzeptieren", ro: "Acceptă" }, description: { en: "Gain 30% intel. 40% chance of discovery (-10 rep).", hu: "Kapsz 30% intel-t. 40% esély lebukásra (-10 rep).", de: "Erhalte 30% Intel. 40% Entdeckungschance (-10 Rep).", ro: "Primește 30% intel. 40% șansă de descoperire (-10 rep)." } },
      { id: "B", label: { en: "Report", hu: "Jelentés", de: "Melden", ro: "Raportează" }, description: { en: "Decline and report. +8 rep with deserter's faction.", hu: "Elutasítod és jelented. +8 rep a dezertőr frakciójával.", de: "Ablehnen und melden. +8 Rep bei der Fraktion des Deserteurs.", ro: "Refuză și raportează. +8 rep cu fracțiunea dezertorului." } },
      { id: "C", label: { en: "Double Play", hu: "Dupla játék", de: "Doppelspiel", ro: "Joc dublu" }, description: { en: "Intel +15%, +4 rep, but 25% risk of -20 rep with both.", hu: "Intel +15%, +4 rep, de 25% esély -20 rep-re mindkettővel.", de: "Intel +15%, +4 Rep, aber 25% Risiko von -20 Rep bei beiden.", ro: "Intel +15%, +4 rep, dar 25% risc de -20 rep cu ambele." } },
    ],
    requiredPhase: null,
    conditions: { minModuleLevel: { warroom: 5 } },
    cooldownDays: 20,
    rare: false,
  },
  // 4. Alliance Request
  {
    id: "alliance_request",
    name: { en: "Alliance Request", hu: "Szövetségi kérés", de: "Bündnisanfrage", ro: "Cerere de alianță" },
    description: {
      en: "A friendly faction asks for military help against their enemy.",
      hu: "Egy baráti frakció segítséget kér egy másik frakció ellen. Csatlakozol?",
      de: "Eine befreundete Fraktion bittet um militärische Hilfe gegen ihren Feind.",
      ro: "O fracțiune prietenă cere ajutor militar împotriva inamicului său.",
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Yes", hu: "Igen", de: "Ja", ro: "Da" }, description: { en: "Send 100 soldiers. +15 rep, -12 enemy rep, chance for loot.", hu: "Küldesz 100 katonát. +15 rep, -12 ellenség rep, loot esély.", de: "Sende 100 Soldaten. +15 Rep, -12 feindliche Rep, Chance auf Loot.", ro: "Trimite 100 soldați. +15 rep, -12 enemy rep, șansă de loot." } },
      { id: "B", label: { en: "No", hu: "Nem", de: "Nein", ro: "Nu" }, description: { en: "Refuse help. -8 rep (Unreliable).", hu: "Nem segítesz. -8 rep (Megbízhatatlan).", de: "Hilfe ablehnen. -8 Rep (Unzuverlässig).", ro: "Refuză ajutorul. -8 rep (Nesigur)." } },
    ],
    requiredPhase: null,
    conditions: { minReputation: { noma: 21 } }, // Dynamic check in engine for any faction
    cooldownDays: 30,
    rare: false,
  },
  // 5. Reactor Overload
  {
    id: "reactor_overload",
    name: { en: "Reactor Overload", hu: "Reaktor túlterhelés", de: "Reaktorüberlastung", ro: "Supraîncărcare reactor" },
    description: {
      en: "Reactor is overloaded. Shutdown for maintenance or risk it?",
      hu: "A reaktor túlterhelt. Kikapcsolod karbantartásra vagy kockáztatsz?",
      de: "Reaktor ist überlastet. Wartung oder Risiko?",
      ro: "Reactorul este supraîncărcat. Oprire pentru mentenanță sau riști?"
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Shutdown", hu: "Kikapcsolás", de: "Abschalten", ro: "Oprire" }, description: { en: "Offline for 30 mins, then +30 integrity.", hu: "Kikapcsolás 30 percre, utána +30 integrity.", de: "30 Min. offline, dann +30 Integrität.", ro: "Offline 30 min, apoi +30 integritate." } },
      { id: "B", label: { en: "Risk it", hu: "Kockáztatás", de: "Riskieren", ro: "Riscă" }, description: { en: "40% chance of critical failure.", hu: "40% esély kritikus hibára.", de: "40% Risiko eines kritischen Fehlers.", ro: "Șansă de 40% de eșec critic." } },
    ],
    requiredPhase: null,
    conditions: { minModuleLevel: { reactor: 1 } }, // reactor integrity < 60 check in engine
    cooldownDays: 7,
    rare: false,
  },
  // 6. Unknown Signal
  {
    id: "unknown_signal",
    name: { en: "Unknown Signal", hu: "Ismeretlen jelzés", de: "Unbekanntes Signal", ro: "Semnal necunoscut" },
    description: {
      en: "Sensors picked up an unknown signal. Investigate?",
      hu: "A szenzorok ismeretlen jelzést fogtak. Kivizsgálod?",
      de: "Sensoren haben ein unbekanntes Signal empfangen. Untersuchen?",
      ro: "Senzorii au captat un semnal necunoscut. Investighezi?"
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Investigate", hu: "Kivizsgálás", de: "Untersuchen", ro: "Investighează" }, description: { en: "Chance for rare material or ambush.", hu: "Esély ritka anyagra vagy csapdára.", de: "Chance auf seltenes Material oder Hinterhalt.", ro: "Șansă de material rar sau ambuscadă." } },
      { id: "B", label: { en: "Ignore", hu: "Ignorálás", de: "Ignorieren", ro: "Ignoră" }, description: { en: "Safe, but might miss something valuable.", hu: "Biztonságos, de lemaradhatsz valamiről.", de: "Sicher, aber du könntest etwas Wertvolles verpassen.", ro: "Sigur, dar poți pierde ceva valoros." } },
    ],
    requiredPhase: null,
    conditions: { minModuleLevel: { sensor: 3 } },
    cooldownDays: 10,
    rare: false,
  },
  // 7. Supply Crisis
  {
    id: "supply_crisis",
    name: { en: "Supply Crisis", hu: "Ellátmány válság", de: "Versorgungskrise", ro: "Criză de aprovizionare" },
    description: {
      en: "Supplies are critically low. Crew is restless.",
      hu: "Az ellátmány kritikusan alacsony. A legénység zúgolódik.",
      de: "Vorräte sind kritisch niedrig. Die Besatzung ist unruhig.",
      ro: "Proviziile sunt critic de scăzute. Echipajul este neliniștit."
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Rationalize", hu: "Racionalizálás", de: "Rationalisieren", ro: "Raționalizează" }, description: { en: "Morale -15, supply +20, slower repair for 7 days.", hu: "Morál -15, supply +20, lassabb repair 7 napig.", de: "Moral -15, Vorräte +20, langsamere Reparatur für 7 Tage.", ro: "Moral -15, provizii +20, reparații mai lente 7 zile." } },
      { id: "B", label: { en: "Use reserves", hu: "Tartalékok", de: "Reserven nutzen", ro: "Folosește rezervele" }, description: { en: "Supply +40, but lose rare materials from warehouse.", hu: "Supply +40, de ritka anyagok vesznek el a raktárból.", de: "Vorräte +40, aber verliere seltene Materialien aus dem Lager.", ro: "Provizii +40, dar pierzi materiale rare din depozit." } },
      { id: "C", label: { en: "Do nothing", hu: "Semmittevés", de: "Nichts tun", ro: "Nu fă nimic" }, description: { en: "Morale -25, 30% risk of mutiny.", hu: "Morál -25, 30% esély lázadásra.", de: "Moral -25, 30% Meutereirisiko.", ro: "Moral -25, risc de 30% de revoltă." } },
    ],
    requiredPhase: null,
    conditions: { minResource: { supply: 30 } }, // supply < 30 in engine
    cooldownDays: 14,
    rare: false,
  },
  // 8. Repair Bay Accident
  {
    id: "repair_accident",
    name: { en: "Repair Bay Accident", hu: "Repair Bay baleset", de: "Reparaturbucht-Unfall", ro: "Accident la Repair Bay" },
    description: {
      en: "Accident in repair bay. Wounded are in critical condition.",
      hu: "Baleset a javítóüzemben. A sebesültek egy része kritikus állapotba került.",
      de: "Unfall in der Reparaturbucht. Verwundete sind in kritischem Zustand.",
      ro: "Accident în hangarul de reparații. Răniții sunt în stare critică."
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Save all", hu: "Mindenkit megmentesz", de: "Alle retten", ro: "Salvează-i pe toți" }, description: { en: "Stop repairs for 1h, save everyone.", hu: "Javítás 1 órára leáll, mindenki megmenekül.", de: "Reparaturen für 1h stoppen, alle retten.", ro: "Oprește reparațiile 1h, salvează pe toată lumea." } },
      { id: "B", label: { en: "Continue", hu: "Folytatás", de: "Fortfahren", ro: "Continuă" }, description: { en: "Normal operation. 30% of wounded die.", hu: "Normál működés. 30% sebesült meghal.", de: "Normalbetrieb. 30% der Verwundeten sterben.", ro: "Operare normală. 30% din răniți mor." } },
    ],
    requiredPhase: null,
    conditions: { minModuleLevel: { repairbay: 3 } }, // wounded > 0 in engine
    cooldownDays: 15,
    rare: false,
  },
  // 9. Energy Anomaly
  {
    id: "energy_anomaly",
    name: { en: "Energy Anomaly", hu: "Energia anomália", de: "Energieanomalie", ro: "Anomalie de energie" },
    description: {
      en: "Core detects a strange energy pattern. Sync with it?",
      hu: "A mag furcsa energiamintát érzékel. Szinkronizálod?",
      de: "Der Kern erkennt ein seltsames Energiemuster. Synchronisieren?",
      ro: "Nucleul detectează un model ciudat de energie. Sincronizezi?"
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Sync", hu: "Szinkron", de: "Sync", ro: "Sincronizează" }, description: { en: "40% chance of bonus activation/shield.", hu: "40% esély bónusz aktivációra/pajzsra.", de: "40% Chance auf Bonus-Aktivierung/Schild.", ro: "40% șansă de bonus activare/scut." } },
      { id: "B", label: { en: "Ignore", hu: "Ignorálás", de: "Ignorieren", ro: "Ignoră" }, description: { en: "Safe.", hu: "Biztonságos.", de: "Sicher.", ro: "Sigur." } },
      { id: "C", label: { en: "Force sync", hu: "Erőltetett szinkron", de: "Erzwungener Sync", ro: "Sincronizare forțată" }, description: { en: "30% huge bonus, 70% backfire.", hu: "30% nagy bónusz, 70% visszaütés.", de: "30% großer Bonus, 70% Rückschlag.", ro: "30% bonus mare, 70% eșec." } },
    ],
    requiredPhase: null,
    conditions: { minModuleLevel: { core: 5 } },
    cooldownDays: 12,
    rare: false,
  },
  // 10. Drifting Wreck
  {
    id: "drifting_wreck",
    name: { en: "Drifting Wreck", hu: "Sodródó roncs", de: "Treibendes Wrack", ro: "Epavă în derivă" },
    description: {
      en: "A drifting wreck has been spotted in the galaxy. Investigate?",
      hu: "Egy sodródó roncsot észleltek. Megvizsgálod?",
      de: "Ein treibendes Wrack wurde gesichtet. Untersuchen?",
      ro: "O epavă în derivă a fost observată. Investighezi?"
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Send drones", hu: "Drónokat küldesz", de: "Drohnen senden", ro: "Trimite drone" }, description: { en: "1 drone occupied for 2h. 60% loot chance.", hu: "1 drón 2 órára foglalt. 60% loot esély.", de: "1 Drohne für 2h belegt. 60% Loot-Chance.", ro: "1 dronă ocupată 2h. 60% șansă de loot." } },
      { id: "B", label: { en: "Leave it", hu: "Hagyod", de: "Ignorieren", ro: "Las-o" }, description: { en: "Risk others taking it.", hu: "Kockázat hogy más viszi el.", de: "Risiko, dass andere es nehmen.", ro: "Risc ca alții să o ia." } },
    ],
    requiredPhase: null,
    conditions: { isGalaxyActive: true },
    cooldownDays: 8,
    rare: false,
  },
  // 11. Faction War
  {
    id: "faction_war",
    name: { en: "Local Faction War", hu: "Frakció háború közelben", de: "Lokaler Fraktionskrieg", ro: "Război civil local" },
    description: {
      en: "Two factions are fighting nearby. Intervene?",
      hu: "Két frakció háborúzik a közeledben. Beavatkozol?",
      de: "Zwei Fraktionen kämpfen in der Nähe. Eingreifen?",
      ro: "Două fracțiuni se luptă în apropiere. Intervii?"
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Side with A", hu: "A oldalra állsz", de: "Seite A wählen", ro: "De partea lui A" }, description: { en: "+12 rep A, -12 rep B, 50% loot.", hu: "+12 rep A, -12 rep B, 50% loot.", de: "+12 Rep A, -12 Rep B, 50% Loot.", ro: "+12 rep A, -12 rep B, 50% loot." } },
      { id: "B", label: { en: "Side with B", hu: "B oldalra állsz", de: "Seite B wählen", ro: "De partea lui B" }, description: { en: "+12 rep B, -12 rep A, 50% loot.", hu: "+12 rep B, -12 rep A, 50% loot.", de: "+12 Rep B, -12 Rep A, 50% Loot.", ro: "+12 rep B, -12 rep A, 50% loot." } },
      { id: "C", label: { en: "Stay neutral", hu: "Semleges maradsz", de: "Neutral bleiben", ro: "Rămâi neutru" }, description: { en: "-3 rep both (Coward).", hu: "Mindkét frakció -3 rep (Gyáva).", de: "-3 Rep bei beiden (Feigling).", ro: "-3 rep ambele (Laș)." } },
      { id: "D", label: { en: "Spy on both", hu: "Kémkedsz", de: "Beide ausspionieren", ro: "Spionează pe amândoi" }, description: { en: "40% big loot/intel, 60% -15 rep both.", hu: "40% nagy loot/intel, 60% -15 rep mindkettővel.", de: "40% großer Loot/Intel, 60% -15 Rep bei beiden.", ro: "40% loot/intel mare, 60% -15 rep ambele." } },
    ],
    requiredPhase: "war",
    conditions: {},
    cooldownDays: 15,
    rare: false,
  },
  // 12. Meteor Warning
  {
    id: "meteor_warning",
    name: { en: "Meteor Warning", hu: "Meteorzápor figyelmeztetés", de: "Meteorwarnung", ro: "Avertizare meteoriți" },
    description: {
      en: "A brutal meteor shower is approaching. Recall drones?",
      hu: "Brutális meteorzápor közeledik. Visszahívod a drónokat?",
      de: "Ein heftiger Meteorschauer nähert sich. Drohnen zurückrufen?",
      ro: "O ploaie brutală de meteoriți se apropie. Rechemi dronele?"
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Recall all", hu: "Visszahívod mind", de: "Alle zurückrufen", ro: "Recheamă tot" }, description: { en: "Safe, but current progress is lost.", hu: "Biztonságos, de a jelenlegi haladás elvész.", de: "Sicher, aber der aktuelle Fortschritt geht verloren.", ro: "Sigur, dar progresul curent se pierde." } },
      { id: "B", label: { en: "Risk it", hu: "Kockáztatás", de: "Riskieren", ro: "Riscă" }, description: { en: "30% risk of mission failure.", hu: "30% esély mission failure-re.", de: "30% Risiko eines Missionsfehlers.", ro: "30% risc de eșec al misiunii." } },
      { id: "C", label: { en: "Sacrifice one", hu: "Egyet feláldozol", de: "Eine opfern", ro: "Sacrifică una" }, description: { en: "1 drone fails, others 95% safe.", hu: "1 drón elvész, többi 95% biztonságban.", de: "1 Drohne geht verloren, andere zu 95% sicher.", ro: "1 dronă eșuează, restul 95% sigure." } },
    ],
    requiredPhase: "storm",
    conditions: {},
    cooldownDays: 12,
    rare: false,
  },
  // 13. Refugee Revenge (Followup)
  {
    id: "refugee_revenge",
    name: { en: "Refugee Revenge", hu: "A menekültek bosszúja", de: "Rache der Flüchtlinge", ro: "Răzbunarea refugiaților" },
    description: {
      en: "The refugees you refused have joined pirates and are attacking.",
      hu: "Az elutasított menekültek kalózokhoz csatlakoztak. Támadnak.",
      de: "Die abgelehnten Flüchtlinge haben sich Piraten angeschlossen und greifen an.",
      ro: "Refugiații refuzați s-au alăturat piraților și atacă."
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Defend", hu: "Védekezés", de: "Verteidigen", ro: "Apără-te" }, description: { en: "Brace for a strong raid.", hu: "Készülj egy erős portyára.", de: "Bereite dich auf einen starken Überfall vor.", ro: "Pregătește-te pentru un raid puternic." } },
    ],
    requiredPhase: null,
    conditions: { requirePreviousChoice: { dilemmaId: "refugees", optionId: "B" } },
    cooldownDays: 999,
    rare: false,
  },
  // 14. Trader Return (Followup)
  {
    id: "trader_return",
    name: { en: "The Trader Returns", hu: "A kereskedő visszatér", de: "Der Händler kehrt zurück", ro: "Comerciantul revine" },
    description: {
      en: "The trader you trusted returns with a better offer.",
      hu: "A kereskedő visszatért — ezúttal jobb ajánlattal.",
      de: "Der Händler, dem du vertraut hast, kehrt mit einem besseren Angebot zurück.",
      ro: "Comerciantul în care ai avut încredere revine cu o ofertă mai bună."
    },
    factionId: "noma",
    options: [
      { id: "A", label: { en: "Accept gift", hu: "Ajándék elfogadása", de: "Geschenk annehmen", ro: "Acceptă cadoul" }, description: { en: "Pure reward for previous trust.", hu: "Tiszta jutalom a korábbi bizalomért.", de: "Belohnung für früheres Vertrauen.", ro: "Recompensă pentru încrederea anterioară." } },
    ],
    requiredPhase: null,
    conditions: { requirePreviousChoice: { dilemmaId: "trader_offer", optionId: "A" } },
    cooldownDays: 999,
    rare: false,
  },
  // 15. Double Play Consequence (Followup)
  {
    id: "spy_backfire",
    name: { en: "Double Play Exposed", hu: "Dupla játék következménye", de: "Doppelspiel aufgedeckt", ro: "Joc dublu expus" },
    description: {
      en: "Both factions found out about your deception.",
      hu: "Mindkét frakció megtudta a csalásodat.",
      de: "Beide Fraktionen haben von deiner Täuschung erfahren.",
      ro: "Ambele fracțiuni au aflat despre înșelătoria ta."
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Face consequences", hu: "Következmények", de: "Konsequenzen tragen", ro: "Înfruntă consecințele" }, description: { en: "-20 rep both and joint raid soon.", hu: "-20 rep mindkettővel és hamarosan közös portya.", de: "-20 Rep bei beiden und bald ein gemeinsamer Überfall.", ro: "-20 rep ambele și raid comun în curând." } },
    ],
    requiredPhase: null,
    conditions: { requirePreviousChoice: { dilemmaId: "spy_offer", optionId: "C" } }, // engine should roll for 25% chance
    cooldownDays: 999,
    rare: false,
  },
  // 16. Ancient Signal (Rare)
  {
    id: "ancient_signal",
    name: { en: "The Ancient Signal", hu: "Az Ősi Jelzés", de: "Das antike Signal", ro: "Semnalul antic" },
    description: {
      en: "Ancient signal detected. Decoding requires massive resources.",
      hu: "Ősi, ismeretlen eredetű jelzést fogtunk. Rendkívüli erőforrást igényel a dekódolás.",
      de: "Antikes Signal entdeckt. Dekodierung erfordert massive Ressourcen.",
      ro: "Semnal antic detectat. Decodarea necesită resurse masive."
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Decode", hu: "Dekódolás", de: "Dekodieren", ro: "Decodează" }, description: { en: "Cost: 500 lumen, 300 aether. Wait 7 days for massive reward.", hu: "Költség: 500 lumen, 300 éter. 7 nap várakozás a nagy jutalomért.", de: "Kosten: 500 Lumen, 300 Aether. 7 Tage warten auf Belohnung.", ro: "Cost: 500 lumen, 300 aether. Așteaptă 7 zile pentru recompensă mare." } },
      { id: "B", label: { en: "Ignore", hu: "Ignorálás", de: "Ignorieren", ro: "Ignoră" }, description: { en: "No risk, but won't appear for a long time.", hu: "Nincs kockázat, de sokáig nem jön újra.", de: "Kein Risiko, erscheint aber lange nicht wieder.", ro: "Fără risc, dar nu va apărea mult timp." } },
    ],
    requiredPhase: null,
    conditions: { minModuleLevel: { sensor: 15 } },
    cooldownDays: 90,
    rare: true,
  },
  // 17. Galactic Fair (Rare)
  {
    id: "galactic_fair",
    name: { en: "Galactic Fair", hu: "Galaktikus vásár", de: "Galaktischer Jahrmarkt", ro: "Târg galactic" },
    description: {
      en: "A rare galactic fair has opened! All factions are trading.",
      hu: "Ritka galaktikus vásár nyílt! Minden frakció kereskedik.",
      de: "Ein seltener galaktischer Jahrmarkt hat eröffnet! Alle Fraktionen handeln.",
      ro: "Un târg galactic rar s-a deschis! Toate fracțiunile fac schimb."
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Join", hu: "Csatlakozás", de: "Teilnehmen", ro: "Alătură-te" }, description: { en: "24h of 50% discount, followed by 48h trade cooldown.", hu: "24 óra 50% kedvezmény, utána 48 óra trade szünet.", de: "24h 50% Rabatt, danach 48h Handelspause.", ro: "24h reducere 50%, urmată de 48h pauză de schimb." } },
    ],
    requiredPhase: "trade",
    conditions: {},
    cooldownDays: 30,
    rare: true,
  },
  // 18. Dark Storm (Rare)
  {
    id: "dark_storm",
    name: { en: "The Dark Storm", hu: "A Sötét Vihar", de: "Der dunkle Sturm", ro: "Furtuna Întunecată" },
    description: {
      en: "An extraordinary storm is approaching.",
      hu: "Rendkívüli erősségű vihar közeledik.",
      de: "Ein außergewöhnlich starker Sturm nähert sich.",
      ro: "O furtună extraordinară se apropie."
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Brace", hu: "Készülés", de: "Vorbereiten", ro: "Pregătește-te" }, description: { en: "12h: 3x mining yield, 60% fail chance, hull drain.", hu: "12 óra: 3x bányászat, 60% hibaesély, hull sebzés.", de: "12h: 3x Ertrag, 60% Fehlerrisiko, Hüllenschaden.", ro: "12h: 3x randament, 60% șansă de eșec, carenă scade." } },
    ],
    requiredPhase: "storm",
    conditions: {},
    cooldownDays: 30,
    rare: true,
  },
  // 19. Truce (Rare)
  {
    id: "truce_offer",
    name: { en: "Truce Offer", hu: "Fegyverszünet", de: "Waffenstillstand", ro: "Ofertă de armistițiu" },
    description: {
      en: "A faction offers a truce.",
      hu: "Egy frakció fegyverszünetet ajánl.",
      de: "Eine Fraktion bietet einen Waffenstillstand an.",
      ro: "O fracțiune oferă un armistițiu."
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Accept", hu: "Elfogadás", de: "Akzeptieren", ro: "Acceptă" }, description: { en: "48h no-raid, +10 rep. Breaking it costs -30 rep.", hu: "48 óra no-raid, +10 rep. Megszegése -30 rep.", de: "48h kein Überfall, +10 Rep. Bruch kostet -30 Rep.", ro: "48h fără raid, +10 rep. Încălcarea costă -30 rep." } },
      { id: "B", label: { en: "Refuse", hu: "Elutasítás", de: "Ablehnen", ro: "Refuză" }, description: { en: "-5 rep, but free to attack.", hu: "-5 rep, de szabadon támadsz.", de: "-5 Rep, aber freie Angriffe.", ro: "-5 rep, dar liber să ataci." } },
    ],
    requiredPhase: "war",
    conditions: {},
    cooldownDays: 30,
    rare: true,
  },
  // 20. Avatar Vision
  {
    id: "avatar_vision",
    name: { en: "Avatar Vision", hu: "Avatar vízió", de: "Avatar-Vision", ro: "Viziune Avatar" },
    description: {
      en: "The avatar shares a strange vision of the future.",
      hu: "Az avatar különös víziót oszt meg veled a jövőről.",
      de: "Der Avatar teilt eine seltsame Vision der Zukunft.",
      ro: "Avatarul îți împărtășește o viziune ciudată despre viitor."
    },
    factionId: null,
    options: [
      { id: "A", label: { en: "Listen", hu: "Hallgatás", de: "Zuhören", ro: "Ascultă" }, description: { en: "Receive a cryptic hint about the next 7 days.", hu: "Kapsz egy rejtélyes tippet a következő 7 napra.", de: "Erhalte einen kryptischen Hinweis für die nächsten 7 Tage.", ro: "Primește un indiciu criptic pentru următoarele 7 zile." } },
    ],
    requiredPhase: null,
    conditions: { minResource: { activation: 80 } },
    cooldownDays: 7,
    rare: false,
  },
];

export const DILEMMA_MAP: Record<DilemmaId, DilemmaEvent> = DILEMMA_DEFS.reduce((acc, def) => {
  acc[def.id] = def;
  return acc;
}, {} as Record<DilemmaId, DilemmaEvent>);
