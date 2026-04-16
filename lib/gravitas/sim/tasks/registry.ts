import type { DailyTask } from "./types";

export const TASK_POOL: DailyTask[] = [
  // --- Collection (3 variants) ---
  {
    id: "task_collect_resources",
    category: "collection",
    title: { en: "Resource Gathering", hu: "Nyersanyaggyűjtés", de: "Ressourcensammlung", ro: "Colectare Resurse" },
    description: { en: "Collect 100 total resources from any source.", hu: "Gyűjts össze összesen 100 nyersanyagot.", de: "Sammle insgesamt 100 Ressourcen.", ro: "Colectează 100 de resurse din orice sursă." },
    targetValue: 100,
    reward: { stars: 2, resources: { supply: 20 } },
  },
  {
    id: "task_collect_bulk",
    category: "collection",
    title: { en: "Supply Run", hu: "Ellátmány Futás", de: "Versorgungslauf", ro: "Cursă de Aprovizionare" },
    description: { en: "Collect 250 total resources from any source.", hu: "Gyűjts össze összesen 250 nyersanyagot.", de: "Sammle insgesamt 250 Ressourcen.", ro: "Colectează 250 de resurse din orice sursă." },
    targetValue: 250,
    reward: { stars: 4, resources: { supply: 50 } },
  },
  {
    id: "task_collect_fast",
    category: "collection",
    title: { en: "Emergency Scavenge", hu: "Vészgyűjtés", de: "Notfallbergung", ro: "Colectare de Urgență" },
    description: { en: "Collect 60 resources from scavenge operations.", hu: "Gyűjts 60 nyersanyagot gyűjtőoperációkból.", de: "Sammle 60 Ressourcen durch Bergungsoperationen.", ro: "Colectează 60 de resurse din operații de colectare." },
    targetValue: 60,
    reward: { stars: 2, antimatter: 5 },
  },

  // --- Fleet (3 variants) ---
  {
    id: "task_dispatch_fleets",
    category: "fleet",
    title: { en: "Fleet Operations", hu: "Flotta Műveletek", de: "Flottenoperationen", ro: "Operațiuni de Flotă" },
    description: { en: "Dispatch 3 fleets to the Galaxy Map.", hu: "Indíts el 3 flottát a galaxis térképen.", de: "Entsende 3 Flotten auf die Galaxiekarte.", ro: "Trimite 3 flote pe harta galaxiei." },
    targetValue: 3,
    reward: { stars: 3, antimatter: 15 },
  },
  {
    id: "task_patrol_run",
    category: "fleet",
    title: { en: "Patrol Sweep", hu: "Járőr Körtúra", de: "Patrouille", ro: "Patrulare" },
    description: { en: "Dispatch 1 fleet on a patrol mission.", hu: "Indíts el 1 flottát járőrözni.", de: "Entsende 1 Flotte auf Patrouille.", ro: "Trimite 1 flotă în misiune de patrulare." },
    targetValue: 1,
    reward: { stars: 2, resources: { morale: 5 } },
  },
  {
    id: "task_fleet_surge",
    category: "fleet",
    title: { en: "Force Projection", hu: "Erő Kivetítés", de: "Kraftprojektion", ro: "Proiecție de Forță" },
    description: { en: "Dispatch 5 fleets across the galaxy.", hu: "Indíts el összesen 5 flottát.", de: "Entsende insgesamt 5 Flotten.", ro: "Trimite 5 flote în galaxie." },
    targetValue: 5,
    reward: { stars: 5, antimatter: 25 },
  },

  // --- Trade (3 variants) ---
  {
    id: "task_complete_trades",
    category: "trade",
    title: { en: "Interstellar Trade", hu: "Csillagközi Kereskedelem", de: "Interstellarer Handel", ro: "Comerț Interstelar" },
    description: { en: "Successfully complete 2 trade deals.", hu: "Teljesíts sikeresen 2 kereskedelmi üzletet.", de: "Schließe erfolgreich 2 Handelsgeschäfte ab.", ro: "Finalizează cu succes 2 tranzacții comerciale." },
    targetValue: 2,
    reward: { stars: 4, resources: { power: 15 } },
  },
  {
    id: "task_trade_single",
    category: "trade",
    title: { en: "Market Entry", hu: "Piacra Lépés", de: "Markteintritt", ro: "Intrare pe Piață" },
    description: { en: "Complete 1 trade deal with any faction.", hu: "Teljesíts 1 kereskedelmi üzletet bármelyik frakcióval.", de: "Schließe 1 Handelsgeschäft mit einer Fraktion ab.", ro: "Finalizează 1 tranzacție cu orice fracțiune." },
    targetValue: 1,
    reward: { stars: 2, resources: { supply: 30 } },
  },
  {
    id: "task_trade_spree",
    category: "trade",
    title: { en: "Trade Network Blitz", hu: "Kereskedési Roham", de: "Handelsnetzwerk-Offensive", ro: "Ofensivă Comercială" },
    description: { en: "Complete 4 trade deals in one session.", hu: "Teljesíts 4 kereskedelmi üzletet.", de: "Schließe 4 Handelsgeschäfte ab.", ro: "Finalizează 4 tranzacții comerciale." },
    targetValue: 4,
    reward: { stars: 7, resources: { power: 20, supply: 20 } },
  },

  // --- Expedition (3 variants) ---
  {
    id: "task_launch_expeditions",
    category: "expedition",
    title: { en: "Deep Space Trek", hu: "Mélyűri Expedíció", de: "Tiefraum-Expedition", ro: "Expediție în Spațiu" },
    description: { en: "Launch 1 long-range expedition.", hu: "Indíts el 1 távolsági expedíciót.", de: "Starte 1 Langstrecken-Expedition.", ro: "Lansează 1 expediție pe rază lungă." },
    targetValue: 1,
    reward: { stars: 5, chronoCore: 1 },
  },
  {
    id: "task_quick_expedition",
    category: "expedition",
    title: { en: "Quick Recon Run", hu: "Gyors Felderítés", de: "Schnellaufklärung", ro: "Recunoaștere Rapidă" },
    description: { en: "Launch any expedition (short or long).", hu: "Indíts el bármilyen expedíciót.", de: "Starte eine Expedition (kurz oder lang).", ro: "Lansează orice expediție." },
    targetValue: 1,
    reward: { stars: 3, resources: { power: 10 } },
  },
  {
    id: "task_multi_expedition",
    category: "expedition",
    title: { en: "Dual Deployment", hu: "Kettős Kiküldés", de: "Doppelentsendung", ro: "Desfășurare Dublă" },
    description: { en: "Launch 2 expeditions during the day.", hu: "Indíts el 2 expedíciót ma.", de: "Starte 2 Expeditionen heute.", ro: "Lansează 2 expediții azi." },
    targetValue: 2,
    reward: { stars: 6, chronoCore: 1, antimatter: 10 },
  },

  // --- Repair (3 variants) ---
  {
    id: "task_repair_modules",
    category: "repair",
    title: { en: "Station Maintenance", hu: "Állomás Karbantartás", de: "Stationswartung", ro: "Întreținere Stație" },
    description: { en: "Restore 50 total integrity to modules.", hu: "Állíts helyre összesen 50 integritást a modulokon.", de: "Stelle insgesamt 50 Integrität wieder her.", ro: "Restaurează 50 integritate totală la module." },
    targetValue: 50,
    reward: { stars: 3, resources: { stability: 10 } },
  },
  {
    id: "task_repair_light",
    category: "repair",
    title: { en: "Patch & Seal", hu: "Foltozás", de: "Flicken & Abdichten", ro: "Petecire" },
    description: { en: "Restore 20 total integrity to any module.", hu: "Állíts helyre 20 integritást bármelyik modulon.", de: "Stelle 20 Integrität bei einem Modul wieder her.", ro: "Restaurează 20 integritate unui modul." },
    targetValue: 20,
    reward: { stars: 2, resources: { supply: 15 } },
  },
  {
    id: "task_repair_critical",
    category: "repair",
    title: { en: "Critical Overhaul", hu: "Kritikus Felújítás", de: "Kritische Überholung", ro: "Revizie Critică" },
    description: { en: "Restore 100 total integrity across all modules.", hu: "Állíts helyre összesen 100 integritást az összes modulon.", de: "Stelle insgesamt 100 Integrität bei allen Modulen wieder her.", ro: "Restaurează 100 integritate totală la toate modulele." },
    targetValue: 100,
    reward: { stars: 5, resources: { stability: 20, power: 10 } },
  },

  // --- Discovery (3 variants) ---
  {
    id: "task_inspect_nodes",
    category: "discovery",
    title: { en: "Void Reconnaissance", hu: "Void Felderítés", de: "Void-Aufklärung", ro: "Recunoaștere Void" },
    description: { en: "Inspect 5 unknown nodes on the map.", hu: "Vizsgálj meg 5 ismeretlen pontot a térképen.", de: "Untersuche 5 unbekannte Knoten.", ro: "Inspectează 5 noduri necunoscute pe hartă." },
    targetValue: 5,
    reward: { stars: 4, resources: { power: 10, supply: 10 } },
  },
  {
    id: "task_explore_single",
    category: "discovery",
    title: { en: "First Contact", hu: "Első Felfedezés", de: "Erstkontakt", ro: "Primul Contact" },
    description: { en: "Inspect 1 unknown node on the map.", hu: "Vizsgálj meg 1 ismeretlen pontot a térképen.", de: "Untersuche 1 unbekannten Knoten.", ro: "Inspectează 1 nod necunoscut pe hartă." },
    targetValue: 1,
    reward: { stars: 2, resources: { power: 5 } },
  },
  {
    id: "task_scan_deep",
    category: "discovery",
    title: { en: "Deep Field Survey", hu: "Mélyelemzés", de: "Tiefenfeld-Analyse", ro: "Analiză de Câmp Profund" },
    description: { en: "Inspect 10 nodes to map the sector.", hu: "Vizsgálj meg 10 pontot a szektortérkép elkészítéséhez.", de: "Untersuche 10 Knoten zur Kartierung des Sektors.", ro: "Inspectează 10 noduri pentru cartografierea sectorului." },
    targetValue: 10,
    reward: { stars: 6, antimatter: 20 },
  },

  // --- Battle (3 variants) ---
  {
    id: "task_kill_enemies",
    category: "battle",
    title: { en: "Combat Engagement", hu: "Harci Bevetés", de: "Kampfeinsatz", ro: "Angajament în Luptă" },
    description: { en: "Defeat 10 enemy units in battle.", hu: "Győzz le 10 ellenséges egységet a csatákban.", de: "Besiege 10 feindliche Einheiten im Kampf.", ro: "Învinge 10 unități inamice în luptă." },
    targetValue: 10,
    reward: { stars: 6, resources: { morale: 15 } },
  },
  {
    id: "task_battle_first_blood",
    category: "battle",
    title: { en: "First Strike", hu: "Első Csapás", de: "Erster Schlag", ro: "Prima Lovitură" },
    description: { en: "Win 1 battle against any enemy.", hu: "Győzz meg 1 csatát bármelyik ellenség ellen.", de: "Gewinne 1 Kampf gegen einen Feind.", ro: "Câștigă 1 luptă împotriva oricărui inamic." },
    targetValue: 1,
    reward: { stars: 3, resources: { morale: 5 } },
  },
  {
    id: "task_battle_domination",
    category: "battle",
    title: { en: "Total Dominance", hu: "Teljes Uralom", de: "Totale Dominanz", ro: "Dominanță Totală" },
    description: { en: "Eliminate 25 enemy units across all battles.", hu: "Semmisíts meg összesen 25 ellenséges egységet.", de: "Vernichte insgesamt 25 feindliche Einheiten.", ro: "Elimină 25 unități inamice în toate luptele." },
    targetValue: 25,
    reward: { stars: 8, resources: { morale: 20, supply: 20 } },
  },
];
