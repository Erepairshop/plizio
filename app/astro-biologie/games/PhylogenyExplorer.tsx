"use client";
// PhylogenyExplorer.tsx — Bio Island i9: Törzsfejlődés & Természetvédelem (K8)
// Topics: 1) Filogénia alapjai 2) Evolúciós bizonyítékok 3) Élő kövületek 4) Természetvédelem 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { EcologyEvolutionSvg, FoodWebSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F1F5F9" rx="20" />
      <g transform="translate(120, 70)">
        {/* Fosszília absztrakt ábrázolása */}
        <path d="M -40,20 L 40,20 M -30,10 L 30,10 M -20,0 L 20,0" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
        <circle cx="0" cy="-20" r="25" fill="#CBD5E1" />
        <path d="M -10,-25 L 10,-15 M -10,-15 L 10,-25" stroke="#64748B" strokeWidth="2" />
        <text x="0" y="45" fontSize="12" fill="#475569" fontWeight="bold" textAnchor="middle">FOSSIL</text>
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
        <text x="-15" y="15" fontSize="30" textAnchor="middle">🌿</text>
        <text x="20" y="5" fontSize="30" textAnchor="middle">🌍</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Törzsfejlődés és Védelem",
    // T1: Filogénia alapjai (Match-pairs)
    t1_title: "Az élet családfája",
    t1_text: "A filogénia az élőlények evolúciós származását és rokonsági kapcsolatait vizsgáló tudomány. A törzsfa megmutatja, mely fajoknak volt közös őse a múltban.",
    t1_b1: "Közös ős: az a pont, ahol két fejlődési ág kettévált.",
    t1_b2: "Klán (Klád): egy közös ősből és annak összes leszármazottjából álló csoport.",
    t1_b3: "DNS-vizsgálat: ma már a gének alapján határozzuk meg a rokonságot.",
    t1_inst: "Párosítsd a fogalmat a jelentésével!",
    t1_l1: "Homológ szervek", t1_r1: "Közös eredetű, de más funkciójú",
    t1_l2: "Analóg szervek", t1_r2: "Más eredetű, de hasonló funkciójú",
    t1_l3: "Törzsfa", t1_r3: "Rokonsági kapcsolatok ábrája",
    t1_q: "Melyik szervpár homológ (közös eredetű)?",
    t1_q_a: "Madár szárnya és az ember karja", t1_q_b: "Madár szárnya és a légy szárnya", t1_q_c: "Hal úszója és a kerékpárkerék", t1_q_d: "Vakond lába és az ásó",

    // T2: Evolúciós bizonyítékok (Gap-fill)
    t2_title: "A múlt nyomai",
    t2_text: "Az evolúciót közvetlen és közvetett bizonyítékok támasztják alá. A legfontosabbak a kőzetekbe zárt ősmaradványok.",
    t2_b1: "Fosszíliák: megkövesedett vázak, lenyomatok.",
    t2_b2: "Átmeneti alakok: olyan lények, amik két nagy csoport jegyeit is hordozzák.",
    t2_b3: "Példa: Archaeopteryx (átmenet a hüllők és madarak között).",
    t2_inst: "Hogy hívjuk a kőzetekben megőrzött maradványokat?",
    t2_gap_sentence: "Az evolúció legfontosabb tárgyi bizonyítékai a {gap}.",
    t2_c1: "fosszíliák", t2_c2: "műanyagok", t2_c3: "felhők",
    t2_q: "Mit bizonyít az Archaeopteryx létezése?",
    t2_q_a: "A hüllők és a madarak közötti rokonságot", t2_q_b: "Hogy a sárkányok léteztek", t2_q_c: "Hogy a halak tudnak repülni", t2_q_d: "Hogy régen nem volt gravitáció",

    // T3: Élő kövületek (Match-pairs)
    t3_title: "Időutazók: Élő kövületek",
    t3_text: "Vannak olyan fajok, amelyek évmilliók óta alig változtak, mert élőhelyük stabil maradt. Ezeket élő kövületeknek nevezzük.",
    t3_b1: "Bojtosúszós hal: ősinek hitt halcsoport ma is élő tagja.",
    t3_b2: "Ginkgo biloba: egyetlen életben maradt faja egy ősi növénycsoportnak.",
    t3_b3: "Tőrfarkú rák: több mint 400 millió éve változatlan forma.",
    t3_inst: "Párosítsd az élő kövületet a csoportjával!",
    t3_l1: "Ginkgo fa", t3_r1: "Nyitvatermő növény",
    t3_l2: "Latimeria", t3_r2: "Bojtosúszós hal",
    t3_l3: "Tuatara", t3_r3: "Hidasgyík (hüllő)",
    t3_q: "Mi jellemzi az élő kövületeket?",
    t3_q_a: "Évmilliók óta alig változott a felépítésük", t3_q_b: "Nagyon gyorsan mutálódnak", t3_q_c: "Már rég kihaltak", t3_q_d: "Csak laboratóriumban léteznek",

    // T4: Természetvédelem (Drag-to-bucket)
    t4_title: "A biodiverzitás védelme",
    t4_text: "Az emberi tevékenység miatt a fajok kihalása felgyorsult. A természetvédelem célja az élőhelyek és a genetikai sokféleség megőrzése.",
    t4_b1: "Vörös Könyv: a veszélyeztetett fajok listája.",
    t4_b2: "Nemzeti parkok: védett területek az élővilág számára.",
    t4_b3: "Ökoszisztéma szolgáltatások: tiszta víz, levegő, beporzás.",
    t4_inst: "Mi veszélyezteti és mi védi a természetet? Válogasd szét!",
    t4_bucket_veszely: "Veszélyforrás",
    t4_bucket_vedelem: "Védelmi intézkedés",
    t4_item_v1: "Élőhelyek pusztítása", t4_item_v2: "Klíma változás",
    t4_item_d1: "Védetté nyilvánítás", t4_item_d2: "Génbankok létrehozása",
    t4_q: "Hogy hívjuk a veszélyeztetett fajokat tartalmazó hivatalos jegyzéket?",
    t4_q_a: "Vörös Könyv", t4_q_b: "Kék Újság", t4_q_c: "Sárga Lista", t4_q_d: "Zöld Recept",

    // T5: Review
    t5_title: "Záró összefoglaló",
    t5_text: "Gratulálunk! Végigjártad az élet fejlődésének és megőrzésének útját.",
    t5_b1: "A rokonságot a közös eredet határozza meg.",
    t5_b2: "A fosszíliák az evolúció ablakai.",
    t5_b3: "A természetvédelem közös felelősségünk.",
    t5_inst: "Melyik fogalom jelenti az élőlények sokféleségét?",
    t5_gap_sentence2: "A földi élet alapértéke a {gap}.",
    t5_c51: "biodiverzitás", t5_c52: "egyhangúság", t5_c53: "kristályrács",
    t5_q: "Miért fontos a fajok sokféleségének megőrzése?",
    t5_q_a: "Mert az ökoszisztémák így maradnak stabilak", t5_q_b: "Hogy több filmet lehessen forgatni", t5_q_c: "Hogy ne legyen csend az erdőben", t5_q_d: "Nincs különösebb jelentősége",
  },
  en: {
    explorer_title: "Phylogeny & Protection",
    t1_title: "The Tree of Life", t1_text: "Phylogeny studies the evolutionary history and relationships of organisms.",
    t1_b1: "Common ancestor: the split point of lineages.", t1_b2: "Clade: a group with one ancestor and all descendants.", t1_b3: "DNA analysis: used for modern grouping.",
    t1_inst: "Match the terms!",
    t1_l1: "Homologous organs", t1_r1: "Same origin, different function",
    t1_l2: "Analogous organs", t1_r2: "Different origin, similar function",
    t1_l3: "Phylogenetic tree", t1_r3: "Diagram of relationships",
    t1_q: "Which pair is homologous?",
    t1_q_a: "Bird wing and human arm", t1_q_b: "Bird wing and fly wing", t1_q_c: "Fish fin and bike wheel", t1_q_d: "Mole foot and shovel",

    t2_title: "Traces of the Past", t2_text: "Fossils locked in rocks are key evidence for evolution.",
    t2_b1: "Fossils: petrified skeletons, imprints.", t2_b2: "Transitional forms: traits of two groups.", t2_b3: "Example: Archaeopteryx (reptile/bird transition).",
    t2_inst: "What do we call remains preserved in rocks?", t2_gap_sentence: "The key evidence for evolution are {gap}.",
    t2_c1: "fossils", t2_c2: "plastics", t2_c3: "clouds",
    t2_q: "What does Archaeopteryx prove?",
    t2_q_a: "Relationship between reptiles and birds", t2_q_b: "Dragons existed", t2_q_c: "Fish fly", t2_q_d: "No gravity in the past",

    t3_title: "Living Fossils", t3_text: "Species that haven't changed for millions of years due to stable habitats.",
    t3_b1: "Coelacanth: ancient fish group member.", t3_b2: "Ginkgo biloba: survivor of an ancient plant group.", t3_b3: "Horseshoe crab: unchanged for 400M years.",
    t3_inst: "Match the living fossil with its group!",
    t3_l1: "Ginkgo tree", t3_r1: "Gymnosperm",
    t3_l2: "Latimeria", t3_r2: "Coelacanth",
    t3_l3: "Tuatara", t3_r3: "Rhynchocephalia (reptile)",
    t3_q: "What characterizes living fossils?",
    t3_q_a: "Unchanged structure for millions of years", t3_q_b: "Fast mutation", t3_q_c: "Extinct", t3_q_d: "Only in labs",

    t4_title: "Saving Biodiversity", t4_text: "Human activity accelerates extinction. Conservation aims to save habitats.",
    t4_b1: "Red List: endangered species inventory.", t4_b2: "National Parks: protected areas.", t4_b3: "Ecosystem services: clean water, air, pollination.",
    t4_inst: "Danger or Protection? Sort them!",
    t4_bucket_veszely: "Threat", t4_bucket_vedelem: "Conservation",
    t4_item_v1: "Habitat destruction", t4_item_v2: "Climate change",
    t4_item_d1: "Legal protection", t4_item_d2: "Gene banks",
    t4_q: "What is the official list of endangered species called?",
    t4_q_a: "Red List (Book)", t4_q_b: "Blue News", t4_q_c: "Yellow Note", t4_q_d: "Green Recipe",

    t5_title: "Final Summary", t5_text: "You have completed the journey of evolution and protection.",
    t5_b1: "Relationships based on common origin.", t5_b2: "Fossils are windows to evolution.", t5_b3: "Nature protection is our responsibility.",
    t5_inst: "Which term means the variety of life?",
    t5_gap_sentence2: "A core value of life is {gap}.",
    t5_c51: "biodiversity", t5_c52: "monotony", t5_c53: "crystal lattice",
    t5_q: "Why is biodiversity important?",
    t5_q_a: "It ensures ecosystem stability", t5_q_b: "For better movies", t5_q_c: "Quiet forests are bad", t5_q_d: "No significance",
  },
  de: {
    explorer_title: "Stammgeschichte & Schutz",
    t1_title: "Stammbaum des Lebens", t1_text: "Phylogenie untersucht die evolutionäre Abstammung der Lebewesen.",
    t1_b1: "Gemeinsamer Vorfahre: Verzweigungspunkt.", t1_b2: "Klade: Vorfahre und alle Nachkommen.", t1_b3: "DNA-Analysen: moderne Verwandtschaftsbestimmung.",
    t1_inst: "Verbinde die Begriffe!",
    t1_l1: "Homologe Organe", t1_r1: "Gleicher Ursprung, andere Funktion",
    t1_l2: "Analoge Organe", t1_r2: "Anderer Ursprung, ähnliche Funktion",
    t1_l3: "Stammbaum", t1_r3: "Diagramm der Verwandtschaft",
    t1_q: "Welches Paar ist homolog?",
    t1_q_a: "Vogelflügel und Menschenarm", t1_q_b: "Vogelflügel und Fliegenflügel", t1_q_c: "Flosse und Rad", t1_q_d: "Maulwurfskralle und Schaufel",

    t2_title: "Spuren der Vergangenheit", t2_text: "Fossilien in Gesteinen sind wichtige Belege der Evolution.",
    t2_b1: "Fossilien: Versteinerungen, Abdrücke.", t2_b2: "Brückentiere: Merkmale zweier Gruppen.", t2_b3: "Beispiel: Archaeopteryx (Reptil/Vogel).",
    t2_inst: "Wie nennt man versteinerte Überreste?", t2_gap_sentence: "Wichtige Belege sind {gap}.",
    t2_c1: "Fossilien", t2_c2: "Plastik", t2_c3: "Wolken",
    t2_q: "Was beweist der Archaeopteryx?",
    t2_q_a: "Verwandtschaft Reptil-Vogel", t2_q_b: "Drachen existierten", t2_q_c: "Fische fliegen", t2_q_d: "Keine Schwerkraft früher",

    t3_title: "Lebende Fossilien", t3_text: "Arten, die sich über Jahrmillionen kaum verändert haben.",
    t3_b1: "Quastenflosser: lebendes Fossil der Fische.", t3_b2: "Ginkgo: Überlebender einer Ur-Gruppe.", t3_b3: "Pfeilschwanzkrebs: seit 400 Mio. Jahren unverändert.",
    t3_inst: "Verbinde Fossil und Gruppe!",
    t3_l1: "Ginkgo-Baum", t3_r1: "Nacktsamer",
    t3_l2: "Latimeria", t3_r2: "Quastenflosser",
    t3_l3: "Brückenechse", t3_r3: "Reptil",
    t3_q: "Was ist typisch für lebende Fossilien?",
    t3_q_a: "Struktur seit Jahrmillionen fast gleich", t3_q_b: "Schnelle Mutation", t3_q_c: "Ausgestorben", t3_q_d: "Nur Labor",

    t4_title: "Artenschutz", t4_text: "Menschliches Handeln beschleunigt das Aussterben. Schutz bewahrt Lebensräume.",
    t4_b1: "Rote Liste: bedrohte Arten.", t4_b2: "Nationalparks: Schutzgebiete.", t4_b3: "Ökosystemleistungen: Wasser, Luft, Bestäubung.",
    t4_inst: "Gefahr oder Schutz? Sortiere!",
    t4_bucket_veszely: "Gefahr", t4_bucket_vedelem: "Schutz",
    t4_item_v1: "Lebensraumzerstörung", t4_item_v2: "Klimawandel",
    t4_item_d1: "Schutzstatus", t4_item_d2: "Genbanken",
    t4_q: "Wie heißt das Verzeichnis bedrohter Arten?",
    t4_q_a: "Rote Liste", t4_q_b: "Blaue Post", t4_q_c: "Gelber Zettel", t4_q_d: "Grünes Rezept",

    t5_title: "Abschluss-Quiz", t5_text: "Du hast die Evolution gemeistert!",
    t5_b1: "Verwandtschaft durch Ursprung.", t5_b2: "Fossilien sind Fenster zur Zeit.", t5_b3: "Schutz ist unsere Pflicht.",
    t5_inst: "Wie nennt man die Vielfalt des Lebens?",
    t5_gap_sentence2: "Ein Grundwert ist die {gap}.",
    t5_c51: "Biodiversität", t5_c52: "Einfalt", t5_c53: "Kristallstruktur",
    t5_q: "Warum ist Biodiversität wichtig?",
    t5_q_a: "Sichert Stabilität der Ökosysteme", t5_q_b: "Für Filme", t5_q_c: "Keine Stille im Wald", t5_q_d: "Unwichtig",
  },
  ro: {
    explorer_title: "Filogenie și Protecție",
    t1_title: "Arborele Vieții", t1_text: "Filogenia studiază istoria evolutivă și relațiile de rudenie.",
    t1_b1: "Strămoș comun: punctul de ramificare.", t1_b2: "Cladă: strămoșul și toți urmașii.", t1_b3: "Analiza ADN: metodă modernă de clasificare.",
    t1_inst: "Potrivește termenii!",
    t1_l1: "Organe omologe", t1_r1: "Origine comună, funcție diferită",
    t1_l2: "Organe analoage", t1_r2: "Origine diferită, funcție similară",
    t1_l3: "Arbore filogenetic", t1_r3: "Diagrama rudeniei",
    t1_q: "Care pereche este omoloagă?",
    t1_q_a: "Aripa păsării și brațul omului", t1_q_b: "Aripa păsării și aripa muștei", t1_q_c: "Înotătoarea și roata", t1_q_d: "Piciorul cârtiței și lopata",

    t2_title: "Urme ale Trecutului", t2_text: "Fosilele sunt dovezi cheie ale evoluției.",
    t2_b1: "Fosile: schelete pietrificate, amprente.", t2_b2: "Forme de tranziție: trăsături din două grupuri.", t2_b3: "Ex: Archaeopteryx (tranziție reptilă/pasăre).",
    t2_inst: "Cum numim resturile conservate în roci?", t2_gap_sentence: "Dovezile cheie sunt {gap}.",
    t2_c1: "fosilele", t2_c2: "plasticele", t2_c3: "norii",
    t2_q: "Ce dovedește Archaeopteryx?",
    t2_q_a: "Rudenia între reptile și păsări", t2_q_b: "Dragonii au existat", t2_q_c: "Peștii zboară", t2_q_d: "Nu era gravitație",

    t3_title: "Fosile Vii", t3_text: "Specii care s-au schimbat foarte puțin în milioane de ani.",
    t3_b1: "Celacant: pește străvechi care încă trăiește.", t3_b2: "Ginkgo biloba: supraviețuitor al unui grup antic.", t3_b3: "Limulide: neschimbate de 400 mil. ani.",
    t3_inst: "Potrivește fosila vie cu grupul!",
    t3_l1: "Ginkgo", t3_r1: "Gimnospermă",
    t3_l2: "Latimeria", t3_r2: "Celacant",
    t3_l3: "Tuatara", t3_r3: "Reptilă",
    t3_q: "Ce caracterizează fosilele vii?",
    t3_q_a: "Structură neschimbată de milioane de ani", t3_q_b: "Mutație rapidă", t3_q_c: "Dispărute", t3_q_d: "Doar în laborator",

    t4_title: "Protecția Biodiversității", t4_text: "Activitatea umană accelerează extincția. Conservarea salvează habitate.",
    t4_b1: "Cartea Roșie: lista speciilor periclitate.", t4_b2: "Parcuri Naționale: zone protejate.", t4_b3: "Servicii ecosistemice: apă, aer, polenizare.",
    t4_inst: "Pericol sau Protecție? Sortează!",
    t4_bucket_veszely: "Pericol", t4_bucket_vedelem: "Protecție",
    t4_item_v1: "Distrugerea habitatelor", t4_item_v2: "Schimbări climatice",
    t4_item_d1: "Statut protejat", t4_item_d2: "Bănci de gene",
    t4_q: "Cum se numește lista oficială a speciilor periclitate?",
    t4_q_a: "Cartea Roșie", t4_q_b: "Știrea Albastră", t4_q_c: "Lista Galbenă", t4_q_d: "Rețeta Verde",

    t5_title: "Test Recapitulativ", t5_text: "Ai terminat călătoria evoluției!",
    t5_b1: "Rudenie prin origine.", t5_b2: "Fosilele sunt ferestre spre trecut.", t5_b3: "Protecția naturii e datoria noastră.",
    t5_inst: "Ce termen definește diversitatea vieții?",
    t5_gap_sentence2: "O valoare a vieții este {gap}.",
    t5_c51: "biodiversitatea", t5_c52: "monotonia", t5_c53: "rețeaua cristalină",
    t5_q: "De ce e importantă biodiversitatea?",
    t5_q_a: "Asigură stabilitatea ecosistemelor", t5_q_b: "Pentru filme", t5_q_c: "Ca să fie zgomot", t5_q_d: "Nu e importantă",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <EcologyEvolutionSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
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
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"],
      correctIndex: 0,
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
    svg: (lang) => <EcologyEvolutionSvg lang={lang} />,
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
    svg: (lang) => <FoodWebSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "veszely", label: "t4_bucket_veszely" },
        { id: "vedelem", label: "t4_bucket_vedelem" },
      ],
      items: [
        { text: "t4_item_v1", bucketId: "veszely" },
        { text: "t4_item_d1", bucketId: "vedelem" },
        { text: "t4_item_v2", bucketId: "veszely" },
        { text: "t4_item_d2", bucketId: "vedelem" },
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
  icon: "🌿",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PhylogenyExplorer = memo(function PhylogenyExplorer({
  color = "#16A34A", // Green-600
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
      grade={8} 
      explorerId="bio_k8_phylogeny" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default PhylogenyExplorer;
