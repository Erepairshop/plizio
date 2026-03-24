"use client";
// SymbiosisExplorer.tsx — Bio Island i6: Szimbiózis & Körforgások (K7)
// Topics: 1) Szimbiózis típusai 2) Szén körforgása 3) Nitrogén körforgása 4) Anyagforgalom 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { ForestLayersSvg, DecomposerSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F1F5F9" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -40,-20 Q 0,-50 40,-20" fill="none" stroke="#475569" strokeWidth="3" markerEnd="url(#arrow)" />
        <path d="M 40,20 Q 0,50 -40,20" fill="none" stroke="#475569" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="-50" y="10" fontSize="30" textAnchor="middle">🌿</text>
        <text x="50" y="10" fontSize="30" textAnchor="middle">☁️</text>
        <text x="0" y="5" fontSize="14" fill="#64748B" textAnchor="middle">CO₂</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="40" fill="none" stroke="#16A34A" strokeWidth="2" strokeDasharray="4 4" />
        <text x="0" y="-15" fontSize="25" textAnchor="middle">☀️</text>
        <text x="-25" y="20" fontSize="25" textAnchor="middle">🌲</text>
        <text x="25" y="20" fontSize="25" textAnchor="middle">🍄</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="45" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
        <text x="-15" y="15" fontSize="30" textAnchor="middle">🔄</text>
        <text x="20" y="5" fontSize="30" textAnchor="middle">🤝</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Körforgások és Kapcsolatok",
    // T1: Szimbiózis
    t1_title: "Élőlények együttélése",
    t1_text: "A természetben a fajok nem szigetelődnek el, hanem különféle kapcsolatokba lépnek. A szimbiózis mindkét fél számára előnyös együttélés.",
    t1_b1: "Mutualizmus (+/+): mindkét fél profitál (pl. méh és virág).",
    t1_b2: "Parazitizmus (+/-): az élősködő károsítja a gazdaszervezetet (pl. kullancs).",
    t1_b3: "Kommenzalizmus (+/0): az egyiknek előnyös, a másiknak közömbös (pl. gólyafészek a villanyoszlopon).",
    t1_inst: "Melyik típusú kapcsolatról van szó? Válogasd szét!",
    t1_bucket_plusz: "Mindkettőnek jó",
    t1_bucket_minusz: "Egyiknek rossz",
    t1_item_p1: "Pillangósvirágúak és baktériumok", t1_item_p2: "Gombafonalak és fagyökér",
    t1_item_m1: "Kullancs az őzön", t1_item_m2: "Fagyöngy a fán",
    t1_q: "Hogy hívjuk azt a kapcsolatot, ahol mindkét fél számára előnyös az együttélés?",
    t1_q_a: "Szimbiózis (Mutualizmus)", t1_q_b: "Élősködés", t1_q_c: "Versengés", t1_q_d: "Kommenzalizmus",

    // T2: Szén körforgása
    t2_title: "A szén körforgása",
    t2_text: "A szén az élet alapja. A légkör szén-dioxidját a növények kötik meg, az állatok pedig légzéssel juttatják vissza.",
    t2_b1: "Fotoszintézis: szén-dioxid felvétele a levegőből.",
    t2_b2: "Légzés: szén-dioxid visszajuttatása a légkörbe.",
    t2_b3: "Fosszilis tüzelők: elégetésükkel extra szén-dioxid kerül a levegőbe.",
    t2_inst: "Tedd sorba a szén útját (Növénytől vissza a levegőbe)!",
    t2_w1: "Levegő CO₂", t2_w2: "Növényi cukor", t2_w3: "Állati táplálék", t2_w4: "Kilégzés",
    t2_q: "Melyik folyamat CSÖKKENTI a légkör szén-dioxid tartalmát?",
    t2_q_a: "Fotoszintézis", t2_q_b: "Légzés", t2_q_c: "Erdőtűz", t2_q_d: "Autózás",

    // T3: Nitrogén körforgása
    t3_title: "A nitrogén körforgása",
    t3_text: "A nitrogén a fehérjék építőköve. Bár a levegő 78%-a nitrogén, a növények csak a talajból tudják felvenni, baktériumok segítségével.",
    t3_b1: "Nitrogénkötő baktériumok: a gyökereken élve alakítják át a gázt tápanyaggá.",
    t3_b2: "Lebontók: az elhalt szervezetek nitrogénjét visszaadják a talajnak.",
    t3_b3: "A körforgás motorjai a mikroszkopikus baktériumok.",
    t3_inst: "Párosítsd a szereplőt a feladatával!",
    t3_l1: "Nitrogénkötő baktérium", t3_r1: "Levegőből tápanyagot készít",
    t3_l2: "Lebontó gomba", t3_r2: "Fehérjéket bont le a talajban",
    t3_l3: "Zöld növény", t3_r3: "Gyökerével szívja fel a nitrátot",
    t3_q: "Kik segítik a növényeket a levegő nitrogénjének hasznosításában?",
    t3_q_a: "Speciális baktériumok", t3_q_b: "Madarak", t3_q_c: "Emlősök", t3_q_d: "Halak",

    // T4: Anyagforgalom
    t4_title: "Zárt körforgás, nyílt energiaáramlás",
    t4_text: "Az ökoszisztémában az anyagok (szén, víz, nitrogén) körforgásban vannak, de az energia a Nap felől érkezik és végül hőként távozik.",
    t4_b1: "Az anyagok nem vesznek el, csak átalakulnak.",
    t4_b2: "Az energiaáramlás egyirányú: a Napból indul.",
    t4_b3: "A lebontók nélkül a körforgás megszakadna.",
    t4_inst: "Mi van körforgásban és mi áramlik egy irányba? Válogasd szét!",
    t4_bucket_kor: "Körforgásban van",
    t4_bucket_aram: "Egy irányba áramlik",
    t4_item_k1: "Szén (C)", t4_item_k2: "Víz (H₂O)",
    t4_item_a1: "Napenergia", t4_item_a2: "Hőenergia",
    t4_q: "Mi történik az ökoszisztémában az energiával?",
    t4_q_a: "Egy irányba áramlik és közben elvész (hő)", t4_q_b: "Örökké körforgásban marad", t4_q_c: "A föld alatt termelődik", t4_q_d: "Nem szükséges az élethez",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Mindent tudsz már a természet nagy körforgásairól és az élőlények kapcsolatairól?",
    t5_b1: "Szimbiózis = kölcsönös előny.",
    t5_b2: "Szén-ciklus = fotoszintézis és légzés egyensúlya.",
    t5_b3: "Nitrogén-ciklus = baktériumok nélkülözhetetlenek.",
    t5_inst: "Melyik élőlénycsoport zárja be az anyagok körforgását?",
    t5_gap_sentence2: "Az anyagkörforgást a(z) {gap} teszik teljessé.",
    t5_c51: "lebontók", t5_c52: "termelők", t5_c53: "fogyasztók",
    t5_q: "Mi jellemző a parazitizmusra?",
    t5_q_a: "Az egyik félnek jó, a másiknak káros.", t5_q_b: "Mindkét félnek rossz.", t5_q_c: "Mindkét félnek jó.", t5_q_d: "Senkit nem érint.",
  },
  en: {
    explorer_title: "Cycles and Connections",
    t1_title: "Living Together", t1_text: "Species in nature interact in various ways. Symbiosis is a close relationship that benefits both parties.",
    t1_b1: "Mutualism (+/+): both benefit (e.g., bee and flower).", t1_b2: "Parasitism (+/-): the parasite harms the host (e.g., tick).", t1_b3: "Commensalism (+/0): one benefits, the other is unaffected.",
    t1_inst: "Sort the types of relationships!",
    t1_bucket_plusz: "Good for both", t1_bucket_minusz: "Bad for one",
    t1_item_p1: "Legumes and bacteria", t1_item_p2: "Fungi and tree roots",
    t1_item_m1: "Tick on a deer", t1_item_m2: "Mistletoe on a tree",
    t1_q: "What do we call a relationship where both species benefit?",
    t1_q_a: "Mutualism", t1_q_b: "Parasitism", t1_q_c: "Competition", t1_q_d: "Commensalism",

    t2_title: "The Carbon Cycle", t2_text: "Carbon is the basis of life. Plants fix CO2 from the atmosphere, and animals return it through respiration.",
    t2_b1: "Photosynthesis: taking CO2 from the air.", t2_b2: "Respiration: returning CO2 to the atmosphere.", t2_b3: "Fossil fuels: burning them adds extra CO2 to the air.",
    t2_inst: "Put the carbon's path in order!",
    t2_w1: "Atmospheric CO₂", t2_w2: "Plant sugar", t2_w3: "Animal food", t2_w4: "Exhalation",
    t2_q: "Which process REDUCES CO2 in the atmosphere?",
    t2_q_a: "Photosynthesis", t2_q_b: "Respiration", t2_q_c: "Forest fires", t2_q_d: "Driving cars",

    t3_title: "The Nitrogen Cycle", t3_text: "Nitrogen builds proteins. Plants can only take it from the soil with the help of bacteria.",
    t3_b1: "Nitrogen-fixing bacteria: turn gas into nutrients on roots.", t3_b2: "Decomposers: return nitrogen from dead matter to the soil.", t3_b3: "Microscopic bacteria drive this cycle.",
    t3_inst: "Match the player to its role!",
    t3_l1: "Nitrogen-fixing bacteria", t3_r1: "Makes nutrients from air",
    t3_l2: "Decomposing fungi", t3_r2: "Breaks down proteins",
    t3_l3: "Green plant", t3_r3: "Absorbs nitrate with roots",
    t3_q: "Who helps plants utilize nitrogen from the air?",
    t3_q_a: "Special bacteria", t3_q_b: "Birds", t3_q_c: "Mammals", t3_q_d: "Fish",

    t4_title: "Matter and Energy Flow", t4_text: "Matter (C, H2O, N) cycles in the ecosystem, but energy flows from the Sun and eventually leaves as heat.",
    t4_b1: "Matter is not lost, only transformed.", t4_b2: "Energy flow is one-way: starting from the Sun.", t4_b3: "Without decomposers, the cycle would break.",
    t4_inst: "Cycle or One-way flow? Sort them!",
    t4_bucket_kor: "Cycles", t4_bucket_aram: "One-way flow",
    t4_item_k1: "Carbon (C)", t4_item_k2: "Water (H₂O)",
    t4_item_a1: "Solar energy", t4_item_a2: "Heat energy",
    t4_q: "What happens to energy in the ecosystem?",
    t4_q_a: "It flows one-way and is lost (heat)", t4_q_b: "It cycles forever", t4_q_c: "It's produced underground", t4_q_d: "It's not needed",

    t5_title: "Summary Quiz", t5_text: "Do you know nature's great cycles and connections?",
    t5_b1: "Symbiosis = mutual benefit.", t5_b2: "Carbon cycle = balance of photosynthesis/respiration.", t5_b3: "Nitrogen cycle = bacteria are vital.",
    t5_inst: "Which group closes the matter cycle?",
    t5_gap_sentence2: "The cycle is completed by {gap}.",
    t5_c51: "decomposers", t5_c52: "producers", t5_c53: "consumers",
    t5_q: "What characterizes parasitism?",
    t5_q_a: "Good for one, harmful for the other.", t5_q_b: "Bad for both.", t5_q_c: "Good for both.", t5_q_d: "Affects no one.",
  },
  de: {
    explorer_title: "Kreisläufe & Beziehungen",
    t1_title: "Zusammenleben", t1_text: "In der Natur leben Arten in verschiedenen Beziehungen. Symbiose ist ein Zusammenleben zum gegenseitigen Vorteil.",
    t1_b1: "Mutualismus (+/+): beide profitieren (z.B. Biene und Blume).", t1_b2: "Parasitismus (+/-): Schmarotzer schadet dem Wirt (z.B. Zecke).", t1_b3: "Kommensalismus (+/0): einer profitiert, dem anderen ist es egal.",
    t1_inst: "Sortiere die Beziehungsarten!",
    t1_bucket_plusz: "Gut für beide", t1_bucket_minusz: "Schlecht für einen",
    t1_item_p1: "Hülsenfrüchtler & Bakterien", t1_item_p2: "Pilze & Baumwurzeln",
    t1_item_m1: "Zecke am Reh", t1_item_m2: "Mistel auf dem Baum",
    t1_q: "Wie nennt man eine Beziehung zum gegenseitigen Vorteil?",
    t1_q_a: "Symbiose (Mutualismus)", t1_q_b: "Parasitismus", t1_q_c: "Konkurrenz", t1_q_d: "Kommensalismus",

    t2_title: "Der Kohlenstoffkreislauf", t2_text: "Kohlenstoff ist die Basis des Lebens. Pflanzen binden CO2, Tiere atmen es wieder aus.",
    t2_b1: "Fotosynthese: CO2-Aufnahme aus der Luft.", t2_b2: "Atmung: CO2-Abgabe an die Luft.", t2_b3: "Fossile Brennstoffe: Verbrennung erhöht CO2-Werte.",
    t2_inst: "Bringe den Weg des Kohlenstoffs in Ordnung!",
    t2_w1: "Luft-CO₂", t2_w2: "Pflanzenzucker", t2_w3: "Tiernahrung", t2_w4: "Ausatmung",
    t2_q: "Welcher Prozess VERRINGERT das CO2 in der Luft?",
    t2_q_a: "Fotosynthese", t2_q_b: "Atmung", t2_q_c: "Waldbrände", t2_q_d: "Autofahren",

    t3_title: "Der Stickstoffkreislauf", t3_text: "Stickstoff baut Eiweiße auf. Pflanzen können ihn nur mit Hilfe von Bakterien aus dem Boden aufnehmen.",
    t3_b1: "Stickstofffixierer: wandeln Luftstickstoff an Wurzeln um.", t3_b2: "Zersetzer: geben Stickstoff toter Materie an Boden zurück.", t3_b3: "Bakterien steuern diesen Kreislauf.",
    t3_inst: "Verbinde Rolle und Akteur!",
    t3_l1: "Stickstofffixierer", t3_r1: "Macht Nährstoff aus Luft",
    t3_l2: "Zersetzende Pilze", t3_r2: "Baut Eiweiße ab",
    t3_l3: "Grüne Pflanze", t3_r3: "Nimmt Nitrat über Wurzeln auf",
    t3_q: "Wer hilft Pflanzen, Luftstickstoff zu nutzen?",
    t3_q_a: "Spezielle Bakterien", t3_q_b: "Vögel", t3_q_c: "Säugetiere", t3_q_d: "Fische",

    t4_title: "Stoff- und Energiefluss", t4_text: "Stoffe (C, H2O, N) kreisen, aber Energie fließt von der Sonne ein und geht als Wärme verloren.",
    t4_b1: "Materie geht nicht verloren, sie wandelt sich.", t4_b2: "Energiefluss ist eine Einbahnstraße von der Sonne.", t4_b3: "Ohne Zersetzer stoppt der Kreislauf.",
    t4_inst: "Kreislauf oder Einbahnstraße? Sortiere!",
    t4_bucket_kor: "Kreislauf", t4_bucket_aram: "Einbahnstraße",
    t4_item_k1: "Kohlenstoff (C)", t4_item_k2: "Wasser (H₂O)",
    t4_item_a1: "Sonnenenergie", t4_item_a2: "Wärmeenergie",
    t4_q: "Was passiert mit der Energie im Ökosystem?",
    t4_q_a: "Sie fließt ein und geht als Wärme verloren", t4_q_b: "Sie kreist ewig", t4_q_c: "Wird im Boden erzeugt", t4_q_d: "Wird nicht gebraucht",

    t5_title: "Zusammenfassung", t5_text: "Kennst du die Kreisläufe der Natur?",
    t5_b1: "Symbiose = gegenseitiger Vorteil.", t5_b2: "Kohlenstoff = Fotosynthese & Atmung.", t5_b3: "Stickstoff = Bakterien sind wichtig.",
    t5_inst: "Wer schließt den Stoffkreislauf?",
    t5_gap_sentence2: "Der Kreislauf wird durch {gap} geschlossen.",
    t5_c51: "Zersetzer", t5_c52: "Produzenten", t5_c53: "Konsumenten",
    t5_q: "Was ist typisch für Parasitismus?",
    t5_q_a: "Einer profitiert, einer wird geschädigt.", t5_q_b: "Beiden schadet es.", t5_q_c: "Beide profitieren.", t5_q_d: "Niemand ist betroffen.",
  },
  ro: {
    explorer_title: "Cicluri și Relații",
    t1_title: "Conviețuirea", t1_text: "Speciile interacționează în moduri variate. Simbioza este o relație strânsă care aduce beneficii ambelor părți.",
    t1_b1: "Mutualism (+/+): ambii profită (ex: albina și floarea).", t1_b2: "Parazitism (+/-): parazitul dăunează gazdei (ex: căpușa).", t1_b3: "Comensalism (+/0): unul profită, celălalt nu este afectat.",
    t1_inst: "Sortează tipurile de relații!",
    t1_bucket_plusz: "Bun pentru ambii", t1_bucket_minusz: "Rău pentru unul",
    t1_item_p1: "Leguminoase și bacterii", t1_item_p2: "Ciuperci și rădăcini",
    t1_item_m1: "Căpușă pe căprioară", t1_item_m2: "Vâsc pe copac",
    t1_q: "Cum numim relația în care ambele specii beneficiază?",
    t1_q_a: "Mutualism (Simbioză)", t1_q_b: "Parazitism", t1_q_c: "Competiție", t1_q_d: "Comensalism",

    t2_title: "Ciclul Carbonului", t2_text: "Carbonul este baza vieții. Plantele fixează CO2 din atmosferă, iar animalele îl returnează prin respirație.",
    t2_b1: "Fotosinteză: preluarea CO2 din aer.", t2_b2: "Respirație: returnarea CO2 în atmosferă.", t2_b3: "Combustibili fosili: arderea lor adaugă CO2 extra în aer.",
    t2_inst: "Pune drumul carbonului în ordine!",
    t2_w1: "CO₂ din aer", t2_w2: "Zahăr vegetal", t2_w3: "Hrană animală", t2_w4: "Expirație",
    t2_q: "Care proces REDUCE dioxidul de carbon din atmosferă?",
    t2_q_a: "Fotosinteza", t2_q_b: "Respirația", t2_q_c: "Incendiile", t2_q_d: "Condusul mașinii",

    t3_title: "Ciclul Azotului", t3_text: "Azotul construiește proteinele. Plantele îl pot prelua din sol doar cu ajutorul bacteriilor.",
    t3_b1: "Bacterii fixatoare: transformă gazul în nutrienți pe rădăcini.", t3_b2: "Descompunători: returnează azotul din materie moartă în sol.", t3_b3: "Bacteriile microscopice conduc acest ciclu.",
    t3_inst: "Potrivește rolul cu actorul!",
    t3_l1: "Bacterii fixatoare", t3_r1: "Fac nutrienți din aer",
    t3_l2: "Ciuperci descompunătoare", t3_r2: "Descompun proteinele",
    t3_l3: "Plantă verde", t3_r3: "Absoarbe azotul prin rădăcini",
    t3_q: "Cine ajută plantele să utilizeze azotul din aer?",
    t3_q_a: "Bacterii speciale", t3_q_b: "Păsările", t3_q_c: "Mamiferele", t3_q_d: "Peștii",

    t4_title: "Fluxul de Materie și Energie", t4_text: "Materia (C, H2O, N) circulă, dar energia curge de la Soare și pleacă sub formă de căldură.",
    t4_b1: "Materia nu se pierde, se transformă.", t4_b2: "Fluxul de energie e sens unic: de la Soare.", t4_b3: "Fără descompunători, ciclul s-ar opri.",
    t4_inst: "Ciclu sau Sens unic? Sortează-le!",
    t4_bucket_kor: "Circulă în ciclu", t4_bucket_aram: "Flux în sens unic",
    t4_item_k1: "Carbon (C)", t4_item_k2: "Apă (H₂O)",
    t4_item_a1: "Energie solară", t4_item_a2: "Energie termică",
    t4_q: "Ce se întâmplă cu energia în ecosistem?",
    t4_q_a: "Curge într-un sens și se pierde (căldură)", t4_q_b: "Circulă la nesfârșit", t4_q_c: "Se produce sub pământ", t4_q_d: "Nu e necesară",

    t5_title: "Recapitulare", t5_text: "Știi marile cicluri ale naturii?",
    t5_b1: "Simbioză = beneficiu reciproc.", t5_b2: "Carbon = fotosinteză și respirație.", t5_b3: "Azot = bacteriile sunt vitale.",
    t5_inst: "Cine închide ciclul materiei?",
    t5_gap_sentence2: "Ciclul este completat de {gap}.",
    t5_c51: "descompunători", t5_c52: "producători", t5_c53: "consumatori",
    t5_q: "Ce caracterizează parazitismul?",
    t5_q_a: "Bun pentru unul, dăunător pentru altul.", t5_q_b: "Rău pentru ambii.", t5_q_c: "Bun pentru ambii.", t5_q_d: "Nu afectează pe nimeni.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <ForestLayersSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "plusz", label: "t1_bucket_plusz" },
        { id: "minusz", label: "t1_bucket_minusz" },
      ],
      items: [
        { text: "t1_item_p1", bucketId: "plusz" },
        { text: "t1_item_m1", bucketId: "minusz" },
        { text: "t1_item_p2", bucketId: "plusz" },
        { text: "t1_item_m2", bucketId: "minusz" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: (lang) => <DecomposerSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "kor", label: "t4_bucket_kor" },
        { id: "aram", label: "t4_bucket_aram" },
      ],
      items: [
        { text: "t4_item_k1", bucketId: "kor" },
        { text: "t4_item_a1", bucketId: "aram" },
        { text: "t4_item_k2", bucketId: "kor" },
        { text: "t4_item_a2", bucketId: "aram" },
      ],
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_gap_sentence2",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b3",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔄",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SymbiosisExplorer = memo(function SymbiosisExplorer({
  color = "#0891B2", // Cyan-600 a körforgásokhoz és szimbiózishoz
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={7} 
      explorerId="bio_k7_symbiosis_cycles" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default SymbiosisExplorer;
