import type { ResearchProject } from "./types";

const h = 60 * 60 * 1000;

export const RESEARCH_PROJECTS: ResearchProject[] = [
  // --- WEAPONS BRANCH ---
  {
    id: "wp_t1_calibrations",
    fieldId: "weapons",
    tier: 1,
    name: { en: "Targeting Calibrations", hu: "Célzási Kalibrációk", de: "Zielkalibrierungen", ro: "Calibrări de Țintire" },
    description: { en: "Refines the station's auto-turret targeting.", hu: "Finomítja az állomás automata lövegeinek célzását.", de: "Verfeinert die Zielerfassung der Auto-Geschütztürme.", ro: "Rafinează țintirea turelelor automate." },
    effects: [
      { type: "statBoost", target: "battle.firepower", value: 10, description: { en: "+10 Firepower", hu: "+10 Tűzerő", de: "+10 Feuerkraft", ro: "+10 Putere de Foc" } }
    ],
    prerequisites: {},
    materialCost: { lumen_dust: 100 },
    baseDurationMs: 6 * h,
  },
  {
    id: "wp_t1_garrison",
    fieldId: "weapons",
    tier: 1,
    name: { en: "Garrison Quarters", hu: "Helyőrségi Szállások", de: "Garnisonsquartiere", ro: "Cazarma Garnizoanei" },
    description: { en: "Expands the base capacity for stationed troops.", hu: "Kibővíti az állomásozó csapatok alapkapacitását.", de: "Erweitert die Grundkapazität für stationierte Truppen.", ro: "Extinde capacitatea de bază pentru trupe." },
    effects: [
      { type: "statBoost", target: "garrison.capacity", value: 100, description: { en: "+100 Garrison Capacity", hu: "+100 Helyőrség Kapacitás", de: "+100 Garnisonskapazität", ro: "+100 Capacitate Garnizoană" } }
    ],
    prerequisites: {},
    materialCost: { verdant_crystals: 80 },
    baseDurationMs: 6 * h,
  },
  {
    id: "wp_t2_plasma",
    fieldId: "weapons",
    tier: 2,
    name: { en: "Plasma Chambers", hu: "Plazmakamrák", de: "Plasmakammern", ro: "Camere cu Plasmă" },
    description: { en: "Supercharges the vanguard assault rifles.", hu: "Túltölti a vanguard rohamlövegeket.", de: "Lädt die Sturmgewehre der Vorhut auf.", ro: "Supraîncarcă puștile de asalt ale avangardei." },
    effects: [
      { type: "statBoost", target: "battle.firepower", value: 25, description: { en: "+25 Firepower", hu: "+25 Tűzerő", de: "+25 Feuerkraft", ro: "+25 Putere de Foc" } },
      { type: "modifier", target: "expedition.dangerRisk", value: -10, description: { en: "-10% Expedition Danger", hu: "-10% Expedíciós Veszély", de: "-10% Expeditionsgefahr", ro: "-10% Pericol Expediție" } }
    ],
    prerequisites: { projects: ["wp_t1_calibrations"], moduleLevels: { warroom: 5 } },
    materialCost: { aether_ore: 150, lumen_dust: 200 },
    baseDurationMs: 18 * h,
  },
  {
    id: "wp_t2_tactics",
    fieldId: "weapons",
    tier: 2,
    name: { en: "Assault Tactics", hu: "Rohamtaktikák", de: "Sturmtaktiken", ro: "Tactici de Asalt" },
    description: { en: "Unlocks advanced offensive maneuvers for expeditions and defenses.", hu: "Fejlett támadó manővereket nyit meg.", de: "Schaltet fortgeschrittene offensive Manöver frei.", ro: "Deblochează manevre ofensive avansate." },
    unlockHint: { en: "Require Rep > 20 with Korgath", hu: "Korgath Rep > 20 kell", de: "Benötigt Korgath Rep > 20", ro: "Necesită Rep Korgath > 20" },
    effects: [
      { type: "unlock", target: "tactic.aggressive", value: 1, description: { en: "Unlocks Aggressive Tactic", hu: "Agresszív Taktika feloldva", de: "Schaltet Aggressive Taktik frei", ro: "Deblochează Tactica Agresivă" } }
    ],
    prerequisites: { projects: ["wp_t1_garrison"], factionReputation: { korgath: 21 } },
    materialCost: { ember_shards: 100 },
    baseDurationMs: 24 * h,
  },
  {
    id: "wp_t3_wraith",
    fieldId: "weapons",
    tier: 3,
    name: { en: "Wraith Sabotage", hu: "Wraith Szabotázs", de: "Wraith-Sabotage", ro: "Sabotaj Wraith" },
    description: { en: "Wraiths can now inflict severe logistical damage before combat.", hu: "A Wraith-ek mostantól komoly logisztikai károkat okozhatnak a harc előtt.", de: "Wraiths können nun vor dem Kampf schwere logistische Schäden verursachen.", ro: "Wraith-urile pot provoca daune logistice grave înainte de luptă." },
    effects: [
      { type: "statBoost", target: "battle.preDamage", value: 15, description: { en: "15% Pre-emptive Damage", hu: "15% Megelőző Sebzés", de: "15% Präventivschaden", ro: "15% Daune Preventive" } }
    ],
    prerequisites: { projects: ["wp_t2_tactics", "wp_t2_plasma"], moduleLevels: { warroom: 15 } },
    materialCost: { sable_alloy: 250, aether_ore: 300 },
    baseDurationMs: 48 * h,
  },
  {
    id: "wp_t4_voidcannon",
    fieldId: "weapons",
    tier: 4,
    name: { en: "Void Cannon", hu: "Void Ágyú", de: "Nichts-Kanone", ro: "Tun de Void" },
    description: { en: "A massive station-mounted weapon utilizing pure entropy.", hu: "Masszív, állomásra szerelt fegyver, amely tiszta entrópiát használ.", de: "Eine massive stationsmontierte Waffe, die reine Entropie nutzt.", ro: "O armă masivă montată pe stație care utilizează entropie pură." },
    effects: [
      { type: "statBoost", target: "battle.firepower", value: 150, description: { en: "+150 Station Firepower", hu: "+150 Állomás Tűzerő", de: "+150 Stationsfeuerkraft", ro: "+150 Putere de Foc a Stației" } }
    ],
    prerequisites: { projects: ["wp_t3_wraith"], moduleLevels: { core: 20, warroom: 20 } },
    materialCost: { rift_stone: 150, ember_shards: 500 },
    baseDurationMs: 120 * h,
  },

  // --- SHIELDS BRANCH ---
  {
    id: "sh_t1_plating",
    fieldId: "shields",
    tier: 1,
    name: { en: "Hardened Plating", hu: "Edzett Páncélzat", de: "Gehärtete Panzerung", ro: "Placaj Întărit" },
    description: { en: "Basic structural reinforcement for the station.", hu: "Alapvető szerkezeti megerősítés az állomásnak.", de: "Grundlegende strukturelle Verstärkung für die Station.", ro: "Consolidare structurală de bază pentru stație." },
    effects: [
      { type: "statBoost", target: "battle.armor", value: 15, description: { en: "+15 Armor", hu: "+15 Páncél", de: "+15 Panzerung", ro: "+15 Armură" } }
    ],
    prerequisites: {},
    materialCost: { verdant_crystals: 100 },
    baseDurationMs: 6 * h,
  },
  {
    id: "sh_t2_regen",
    fieldId: "shields",
    tier: 2,
    name: { en: "Nanite Regeneration", hu: "Nanit Regeneráció", de: "Naniten-Regeneration", ro: "Regenerare cu Naniți" },
    description: { en: "Passive hull integrity restoration during calm periods.", hu: "Passzív hajótest-integritás helyreállítás nyugodt időszakokban.", de: "Passive Wiederherstellung der Hüllenintegrität während ruhiger Perioden.", ro: "Restaurare pasivă a integrității carenei în perioadele de calm." },
    effects: [
      { type: "modifier", target: "repair.cost", value: -15, description: { en: "-15% Repair Cost", hu: "-15% Javítási Költség", de: "-15% Reparaturkosten", ro: "-15% Cost de Reparație" } }
    ],
    prerequisites: { projects: ["sh_t1_plating"] },
    materialCost: { aether_ore: 120, verdant_crystals: 200 },
    baseDurationMs: 18 * h,
  },
  {
    id: "sh_t3_fortify",
    fieldId: "shields",
    tier: 3,
    name: { en: "Aegis Network", hu: "Aegis Hálózat", de: "Aegis-Netzwerk", ro: "Rețeaua Aegis" },
    description: { en: "Massively reduces casualty rates when defending.", hu: "Jelentősen csökkenti a veszteségeket védekezéskor.", de: "Reduziert die Verlustraten bei der Verteidigung massiv.", ro: "Reduce masiv ratele de pierderi în apărare." },
    effects: [
      { type: "modifier", target: "casualty.reduction", value: 20, description: { en: "-20% Casualties", hu: "-20% Veszteség", de: "-20% Verluste", ro: "-20% Pierderi" } }
    ],
    prerequisites: { projects: ["sh_t2_regen"], moduleLevels: { reactor: 15 } },
    materialCost: { sable_alloy: 200, ember_shards: 150 },
    baseDurationMs: 48 * h,
  },
  {
    id: "sh_t4_barrier",
    fieldId: "shields",
    tier: 4,
    name: { en: "Absolute Barrier", hu: "Abszolút Gát", de: "Absolute Barriere", ro: "Barieră Absolută" },
    description: { en: "Project a nearly impenetrable shield, heavily resisting Storm and Raid events.", hu: "Szinte áthatolhatatlan pajzsot vetít, amely erősen ellenáll a Vihar és Portya eseményeknek.", de: "Projiziert einen fast undurchdringlichen Schild, der stark gegen Sturm- und Überfallereignisse resistent ist.", ro: "Proiectează un scut aproape impenetrabil, rezistând puternic la evenimentele de Furtună și Raid." },
    effects: [
      { type: "statBoost", target: "battle.shield", value: 100, description: { en: "+100 Shield", hu: "+100 Pajzs", de: "+100 Schild", ro: "+100 Scut" } },
      { type: "modifier", target: "storm.damage", value: -50, description: { en: "-50% Storm Damage", hu: "-50% Vihar Sebzés", de: "-50% Sturmschaden", ro: "-50% Daune Furtună" } }
    ],
    prerequisites: { projects: ["sh_t3_fortify"], moduleLevels: { core: 20 } },
    materialCost: { rift_stone: 120, sable_alloy: 400 },
    baseDurationMs: 120 * h,
  },

  // --- LOGISTICS BRANCH ---
  {
    id: "lo_t1_drones",
    fieldId: "logistics",
    tier: 1,
    name: { en: "Drone Thrusters", hu: "Drón Hajtóművek", de: "Drohnen-Triebwerke", ro: "Propulsoare Drone" },
    description: { en: "Improves mining drone speed, slightly reducing travel times.", hu: "Növeli a bányászdrónok sebességét, némileg csökkentve az utazási időt.", de: "Verbessert die Geschwindigkeit der Bergbau-Drohnen und reduziert die Reisezeiten leicht.", ro: "Îmbunătățește viteza dronelor miniere, reducând ușor timpii de călătorie." },
    effects: [
      { type: "modifier", target: "drone.travelTime", value: -10, description: { en: "-10% Drone Travel Time", hu: "-10% Drón Utazási Idő", de: "-10% Drohnen-Reisezeit", ro: "-10% Timp Călătorie Drone" } }
    ],
    prerequisites: {},
    materialCost: { lumen_dust: 150 },
    baseDurationMs: 6 * h,
  },
  {
    id: "lo_t2_trade",
    fieldId: "logistics",
    tier: 2,
    name: { en: "Trade Algorithms", hu: "Kereskedelmi Algoritmusok", de: "Handels-Algorithmen", ro: "Algoritmi de Comerț" },
    description: { en: "Optimizes merchant negotiations for better exchange rates.", hu: "Optimalizálja a kereskedői tárgyalásokat a jobb árfolyamokért.", de: "Optimiert Händlerverhandlungen für bessere Wechselkurse.", ro: "Optimizează negocierile cu comercianții pentru rate de schimb mai bune." },
    effects: [
      { type: "modifier", target: "trade.prices", value: -15, description: { en: "-15% Trade Markup", hu: "-15% Kereskedelmi Felár", de: "-15% Handelsaufschlag", ro: "-15% Adaos Comercial" } }
    ],
    prerequisites: { projects: ["lo_t1_drones"] },
    materialCost: { verdant_crystals: 250, aether_ore: 100 },
    baseDurationMs: 18 * h,
  },
  {
    id: "lo_t2_repair",
    fieldId: "logistics",
    tier: 2,
    name: { en: "Automated Triage", hu: "Automatizált Triage", de: "Automatisierte Triage", ro: "Triaj Automatizat" },
    description: { en: "Wounded units are processed faster in the repair bay.", hu: "A sebesült egységeket gyorsabban dolgozzák fel a javítóüzemben.", de: "Verwundete Einheiten werden in der Reparaturbucht schneller verarbeitet.", ro: "Unitățile rănite sunt procesate mai rapid în hangarul de reparații." },
    effects: [
      { type: "modifier", target: "repair.speed", value: 20, description: { en: "+20% Repair Speed", hu: "+20% Javítási Sebesség", de: "+20% Reparatur-Geschwindigkeit", ro: "+20% Viteză Reparație" } }
    ],
    prerequisites: { projects: ["lo_t1_drones"], moduleLevels: { repairbay: 5 } },
    materialCost: { aether_ore: 150, lumen_dust: 200 },
    baseDurationMs: 24 * h,
  },
  {
    id: "lo_t3_salvage",
    fieldId: "logistics",
    tier: 3,
    name: { en: "Deep Space Salvage", hu: "Mélyűri Mentés", de: "Tiefenraum-Bergung", ro: "Recuperare în Spațiul Adânc" },
    description: { en: "Expeditions bring back significantly more supplies and rarely, artifacts.", hu: "Az expedíciók jelentősen több ellátmányt és ritkán ereklyéket is visszahoznak.", de: "Expeditionen bringen deutlich mehr Vorräte und selten Artefakte zurück.", ro: "Expedițiile aduc mult mai multe provizii și, rareori, artefacte." },
    unlockHint: { en: "Require Logistics LVL 15", hu: "Logistics LVL 15 kell", de: "Benötigt Logistik LVL 15", ro: "Necesită Logistică LVL 15" },
    effects: [
      { type: "modifier", target: "expedition.lootChance", value: 30, description: { en: "+30% Expedition Loot", hu: "+30% Expedíció Zsákmány", de: "+30% Expeditions-Loot", ro: "+30% Pradă Expediție" } },
      { type: "modifier", target: "expedition.rareChance", value: 15, description: { en: "+15% Rare Discovery", hu: "+15% Ritka Felfedezés", de: "+15% Seltene Entdeckung", ro: "+15% Descoperire Rară" } }
    ],
    prerequisites: { projects: ["lo_t2_trade", "lo_t2_repair"], moduleLevels: { logistics: 15 } },
    materialCost: { ember_shards: 300, aether_ore: 200 },
    baseDurationMs: 48 * h,
  },
  {
    id: "lo_t4_quantum",
    fieldId: "logistics",
    tier: 4,
    name: { en: "Quantum Cargo", hu: "Kvantum Raktér", de: "Quantenfracht", ro: "Marfă Cuantică" },
    description: { en: "Completely eliminates logistics flow bottlenecks.", hu: "Teljesen kiküszöböli a logisztikai áramlás szűk keresztmetszeteit.", de: "Beseitigt Logistikfluss-Engpässe vollständig.", ro: "Elimină complet blocajele fluxului logistic." },
    effects: [
      { type: "statBoost", target: "supply.flow", value: 100, description: { en: "Massive Supply Flow", hu: "Masszív Ellátmány Áramlás", de: "Massiver Vorratsfluss", ro: "Flux Masiv de Provizii" } },
      { type: "modifier", target: "upgrade.time", value: -25, description: { en: "-25% Upgrade Time", hu: "-25% Fejlesztési Idő", de: "-25% Upgrade-Zeit", ro: "-25% Timp Upgrade" } }
    ],
    prerequisites: { projects: ["lo_t3_salvage"], moduleLevels: { core: 20 } },
    materialCost: { sable_alloy: 400, rift_stone: 100 },
    baseDurationMs: 120 * h,
  },

  // --- SENSORS / ESPIONAGE BRANCH ---
  {
    id: "se_t1_recon",
    fieldId: "sensors",
    tier: 1,
    name: { en: "Recon Uplink", hu: "Felderítő Kapcsolat", de: "Aufklärungs-Uplink", ro: "Legătură de Recunoaștere" },
    description: { en: "Improves scout drone intel gathering speed.", hu: "Növeli a felderítő drónok adatgyűjtési sebességét.", de: "Verbessert die Geschwindigkeit der Datenbeschaffung von Aufklärungsdrohnen.", ro: "Îmbunătățește viteza de colectare a datelor de către dronele de recunoaștere." },
    effects: [
      { type: "modifier", target: "scout.speed", value: 20, description: { en: "+20% Scout Speed", hu: "+20% Felderítési Sebesség", de: "+20% Aufklärungsgeschwindigkeit", ro: "+20% Viteză Recunoaștere" } }
    ],
    prerequisites: {},
    materialCost: { aether_ore: 80, verdant_crystals: 80 },
    baseDurationMs: 6 * h,
  },
  {
    id: "se_t2_stealth",
    fieldId: "sensors",
    tier: 2,
    name: { en: "Stealth Coating", hu: "Lopakodó Bevonat", de: "Tarnbeschichtung", ro: "Acoperire Stealth" },
    description: { en: "Reduces exposure growth during espionage missions.", hu: "Csökkenti a lebukás növekedését a kémküldetések során.", de: "Reduziert das Wachstum der Entdeckung während Spionagemissionen.", ro: "Reduce creșterea expunerii în timpul misiunilor de spionaj." },
    effects: [
      { type: "modifier", target: "espionage.exposure", value: -20, description: { en: "-20% Exposure Growth", hu: "-20% Lebukás Növekedés", de: "-20% Entdeckungswachstum", ro: "-20% Creștere Expunere" } }
    ],
    prerequisites: { projects: ["se_t1_recon"], moduleLevels: { sensor: 8 } },
    materialCost: { ember_shards: 150, aether_ore: 100 },
    baseDurationMs: 18 * h,
  },
  {
    id: "se_t3_predict",
    fieldId: "sensors",
    tier: 3,
    name: { en: "Predictive Models", hu: "Prediktív Modellek", de: "Prädiktive Modelle", ro: "Modele Predictive" },
    description: { en: "Automatically predicts enemy threats, mitigating surprise damage.", hu: "Automatikusan előrejelzi az ellenséges fenyegetéseket, enyhítve a meglepetésszerű sebzést.", de: "Sagt feindliche Bedrohungen automatisch voraus und mindert Überraschungsschäden.", ro: "Prezice automat amenințările inamice, atenuând daunele surpriză." },
    effects: [
      { type: "unlock", target: "threat.predictionAuto", value: 1, description: { en: "Auto Threat Prediction", hu: "Auto Fenyegetés Előrejelzés", de: "Auto-Bedrohungsvorhersage", ro: "Predicție Auto Amenințare" } },
      { type: "modifier", target: "threat.damage", value: -15, description: { en: "-15% Threat Damage", hu: "-15% Fenyegetés Sebzés", de: "-15% Bedrohungsschaden", ro: "-15% Daune Amenințare" } }
    ],
    prerequisites: { projects: ["se_t2_stealth"], moduleLevels: { sensor: 14 } },
    materialCost: { sable_alloy: 250, ember_shards: 200 },
    baseDurationMs: 48 * h,
  },
  {
    id: "se_t4_omni",
    fieldId: "sensors",
    tier: 4,
    name: { en: "Omniscience", hu: "Mindentudás", de: "Allwissenheit", ro: "Omnisciență" },
    description: { en: "Unveils all enemy traits and base stats instantly before battles.", hu: "Azonnal felfedi az összes ellenséges tulajdonságot és alapstatisztikát a csaták előtt.", de: "Enthüllt sofort alle feindlichen Eigenschaften und Basiswerte vor Schlachten.", ro: "Dezvăluie instantaneu toate trăsăturile și statisticile de bază inamice înainte de lupte." },
    effects: [
      { type: "unlock", target: "sensor.omniscience", value: 1, description: { en: "Pre-Scout Battles", hu: "Csaták Elő-Felderítése", de: "Schlachten Vor-Aufklärung", ro: "Pre-Recunoaștere Lupte" } }
    ],
    prerequisites: { projects: ["se_t3_predict"], moduleLevels: { core: 20 } },
    materialCost: { rift_stone: 150, sable_alloy: 300 },
    baseDurationMs: 120 * h,
  },

  // --- VOID / ANOMALY BRANCH ---
  {
    id: "vo_t1_entropy",
    fieldId: "void",
    tier: 1,
    name: { en: "Entropy Weaving", hu: "Entrópia Szövés", de: "Entropie-Weben", ro: "Țeserea Entropiei" },
    description: { en: "Slows down the passive accumulation of entropy in the station.", hu: "Lassítja a passzív entrópia felhalmozódást az állomáson.", de: "Verlangsamt die passive Ansammlung von Entropie in der Station.", ro: "Încetinește acumularea pasivă de entropie în stație." },
    effects: [
      { type: "modifier", target: "entropy.decay", value: 15, description: { en: "15% Slower Entropy", hu: "15%-kal Lassabb Entrópia", de: "15% Langsamere Entropie", ro: "Entropie mai lentă cu 15%" } }
    ],
    prerequisites: {},
    materialCost: { ember_shards: 150 },
    baseDurationMs: 12 * h, // specialized first tier
  },
  {
    id: "vo_t2_resonance",
    fieldId: "void",
    tier: 2,
    name: { en: "Resonance Focusing", hu: "Rezonancia Fókuszálás", de: "Resonanz-Fokussierung", ro: "Focalizarea Rezonanței" },
    description: { en: "Boosts activation resource yields from high-tier phenomena.", hu: "Növeli az aktivációs erőforrás hozamát a magas szintű jelenségekből.", de: "Erhöht die Ausbeute an Aktivierungsressourcen aus hochrangigen Phänomenen.", ro: "Mărește randamentul resurselor de activare din fenomenele de nivel înalt." },
    effects: [
      { type: "statBoost", target: "resonance.efficiency", value: 30, description: { en: "+30% Activation Yield", hu: "+30% Aktivációs Hozam", de: "+30% Aktivierungsertrag", ro: "+30% Randament Activare" } }
    ],
    prerequisites: { projects: ["vo_t1_entropy"] },
    materialCost: { sable_alloy: 150, ember_shards: 100 },
    baseDurationMs: 24 * h,
  },
  {
    id: "vo_t3_crisis",
    fieldId: "void",
    tier: 3,
    name: { en: "Crisis Buffer", hu: "Krízis Puffer", de: "Krisenpuffer", ro: "Tampon de Criză" },
    description: { en: "The station can endure multi-system failures longer before lockdown.", hu: "Az állomás tovább bírja a többszörös rendszerhibákat teljes lezárás előtt.", de: "Die Station kann Multi-System-Ausfälle länger aushalten, bevor sie abgeriegelt wird.", ro: "Stația poate suporta eșecuri multi-sistem mai mult timp înainte de blocare." },
    effects: [
      { type: "statBoost", target: "crisis.threshold", value: 20, description: { en: "+20 Crisis Tolerance", hu: "+20 Krízis Tolerancia", de: "+20 Krisentoleranz", ro: "+20 Toleranță Criză" } }
    ],
    prerequisites: { projects: ["vo_t2_resonance"], moduleLevels: { core: 15 } },
    materialCost: { rift_stone: 80, sable_alloy: 200 },
    baseDurationMs: 48 * h,
  },

  // --- CORE / AWAKENING BRANCH ---
  {
    id: "co_t1_synergy",
    fieldId: "core",
    tier: 1,
    name: { en: "Synergy Routines", hu: "Szinergia Rutinok", de: "Synergie-Routinen", ro: "Rutine de Sinergie" },
    description: { en: "Initial protocols to bind the Avatar closer to the station's core.", hu: "Kezdeti protokollok, amik szorosabban az állomás magjához kötik az Avatart.", de: "Initiale Protokolle, um den Avatar enger an den Kern der Station zu binden.", ro: "Protocoale inițiale pentru a lega Avatarul mai strâns de nucleul stației." },
    effects: [
      { type: "statBoost", target: "avatar.syncRate", value: 10, description: { en: "+10% Avatar Sync Rate", hu: "+10% Avatar Szinkronizáció", de: "+10% Avatar-Synchronisationsrate", ro: "+10% Rata de Sincronizare Avatar" } }
    ],
    prerequisites: {},
    materialCost: { aether_ore: 200 },
    baseDurationMs: 12 * h,
  },
  {
    id: "co_t2_memory",
    fieldId: "core",
    tier: 2,
    name: { en: "Memory Echoes", hu: "Memória Visszhangok", de: "Erinnerungs-Echos", ro: "Ecouri de Memorie" },
    description: { en: "Allows the dilemma system to provide extra options based on past choices.", hu: "Lehetővé teszi, hogy a dilemma rendszer extra opciókat kínáljon a múltbeli döntések alapján.", de: "Ermöglicht dem Dilemma-System, basierend auf vergangenen Entscheidungen, zusätzliche Optionen anzubieten.", ro: "Permite sistemului de dileme să ofere opțiuni suplimentare pe baza alegerilor anterioare." },
    effects: [
      { type: "unlock", target: "dilemma.extraOption", value: 1, description: { en: "Dilemma Insight", hu: "Dilemma Rálátás", de: "Dilemma-Einsicht", ro: "Perspectivă Dilemă" } }
    ],
    prerequisites: { projects: ["co_t1_synergy"] },
    materialCost: { sable_alloy: 150, ember_shards: 150 },
    baseDurationMs: 24 * h,
  },
  {
    id: "co_t3_architect",
    fieldId: "core",
    tier: 3,
    name: { en: "Architect Directives", hu: "Tervezői Direktívák", de: "Architekten-Direktiven", ro: "Directivele Arhitectului" },
    description: { en: "Global reduction in base module upgrade costs across the station.", hu: "Globálisan csökkenti az alap modulok fejlesztési költségeit az állomáson.", de: "Globale Reduzierung der Basis-Modul-Upgrade-Kosten auf der gesamten Station.", ro: "Reducere globală a costurilor de upgrade pentru modulele de bază din stație." },
    effects: [
      { type: "modifier", target: "upgrade.cost", value: -15, description: { en: "-15% Upgrade Costs", hu: "-15% Fejlesztési Költségek", de: "-15% Upgrade-Kosten", ro: "-15% Costuri Upgrade" } }
    ],
    prerequisites: { projects: ["co_t2_memory"], moduleLevels: { core: 16 } },
    materialCost: { rift_stone: 100, sable_alloy: 250 },
    baseDurationMs: 72 * h,
  },
  {
    id: "co_t5_ascension",
    fieldId: "core",
    tier: 5,
    name: { en: "Ascension Engine", hu: "Felemelkedés Motor", de: "Aufstiegs-Triebwerk", ro: "Motorul Înălțării" },
    description: { en: "The ultimate pinnacle of station tech. Temporarily renders the station immune to Void Storms and massive raids.", hu: "Az állomás technológiájának csúcsa. Átmenetileg immunissá teszi az állomást a Void Viharokkal és a hatalmas portyákkal szemben.", de: "Der absolute Höhepunkt der Stationstechnologie. Macht die Station vorübergehend immun gegen Nichts-Stürme und massive Überfälle.", ro: "Punctul culminant al tehnologiei stației. Face stația temporar imună la Furtunile de Void și raidurile masive." },
    unlockHint: { en: "Require Core LVL 25", hu: "Core LVL 25 kell", de: "Benötigt Kern LVL 25", ro: "Necesită Core LVL 25" },
    effects: [
      { type: "unlock", target: "core.invulnerability", value: 1, description: { en: "Invulnerability Protocol", hu: "Sérthetetlenségi Protokoll", de: "Unverwundbarkeits-Protokoll", ro: "Protocol de Invulnerabilitate" } }
    ],
    prerequisites: { projects: ["co_t3_architect"], moduleLevels: { core: 25 } },
    materialCost: { rift_stone: 400, sable_alloy: 600 },
    baseDurationMs: 240 * h, // 10 days
  }
];