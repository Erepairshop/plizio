"use client";
// ForestExplorer.tsx — Bio Island i3: Erdei ökoszisztéma (K6)
// Topics: 1) Erdő szintjei 2) Táplálékhálózat 3) Lebontók 4) Az erdő egyensúlya 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { ForestLayersSvg, FoodWebSvg, DecomposerSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#DCFCE7" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="10" fontSize="35" textAnchor="middle">🌲</text>
        <path d="M -25,-10 Q 0,-25 25,-10" fill="none" stroke="#16A34A" strokeWidth="3" markerEnd="url(#arrow)" />
        <path d="M 25,10 Q 0,25 -25,10" fill="none" stroke="#16A34A" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="50" y="10" fontSize="35" textAnchor="middle">🦌</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🌳</text>
        <text x="25" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Erdei Ökoszisztéma",
    // T1: Erdő szintjei
    t1_title: "Az erdő szintjei",
    t1_text: "Az erdő egy emeletes házhoz hasonlít. A növények magasságuk és fényigényük alapján különböző szinteket alkotnak, melyek mindegyikének megvan a maga állatvilága.",
    t1_b1: "Lombkoronaszint: a fák koronája, itt éri a legtöbb fény az erdőt (madarak, mókusok).",
    t1_b2: "Cserjeszint és gyepszint: kevesebb fény jut ide (bokrok, páfrányok, rovarok, őzek).",
    t1_b3: "Avar- és talajszint: sötét és nedves (gombák, férgek).",
    t1_inst: "Hogy hívják az erdő legfelső szintjét?",
    t1_gap_sentence: "Az erdő legfelső, napfényes emelete a {gap}.",
    t1_c1: "lombkoronaszint", t1_c2: "cserjeszint", t1_c3: "talajszint",
    t1_q: "Melyik szinten jut a legkevesebb fény a növényeknek?",
    t1_q_a: "A gyep- és talajszinten", t1_q_b: "A lombkoronaszinten", t1_q_c: "A cserjeszinten", t1_q_d: "A fák csúcsán",

    // T2: Táplálékhálózat
    t2_title: "A táplálékhálózat",
    t2_text: "Az erdőben az élőlények bonyolult táplálékhálózatot alkotnak. Mindenki eszik valakit, és mindenkit megeszik valaki (kivéve a csúcsragadozókat).",
    t2_b1: "Termelők: a zöld növények, amelyek napfényből állítanak elő táplálékot.",
    t2_b2: "Fogyasztók: az állatok (növényevők és húsevők).",
    t2_b3: "Csúcsragadozók: a táplálékhálózat csúcsán állnak (pl. farkas, sas).",
    t2_inst: "Termelő vagy Fogyasztó? Válogasd szét!",
    t2_bucket_ter: "Termelők",
    t2_bucket_fog: "Fogyasztók",
    t2_item_t1: "Tölgyfa", t2_item_t2: "Páfrány",
    t2_item_f1: "Róka", t2_item_f2: "Szarvas",
    t2_q: "Kik állnak a táplálékhálózat legalapvetőbb szintjén (a bázison)?",
    t2_q_a: "A termelők (zöld növények)", t2_q_b: "A csúcsragadozók", t2_q_c: "A növényevő állatok", t2_q_d: "A lebontók",

    // T3: Lebontók
    t3_title: "A lebontók szerepe",
    t3_text: "A lebontók (gombák, baktériumok, férgek) az erdő takarítói. Ők bontják le az elhalt növényeket és állatokat, visszajuttatva a tápanyagokat a talajba.",
    t3_b1: "Az elhalt avar és fatörzsek a gombák táplálékai.",
    t3_b2: "A folyamat végén humusz keletkezik, ami táplálja a növényeket.",
    t3_b3: "Lebontók nélkül az erdő megfulladna a saját hulladékában.",
    t3_inst: "Párosítsd az élőlényt a szerepével az erdőben!",
    t3_l1: "Fa (Növény)", t3_r1: "Termelő (táplálékot készít)",
    t3_l2: "Szarvas (Állat)", t3_r2: "Fogyasztó (növényt eszik)",
    t3_l3: "Gomba (Lebontó)", t3_r3: "Elhalt anyagokat bont le",
    t3_q: "Mi keletkezik a lebontók munkája nyomán a talajban?",
    t3_q_a: "Humusz (tápanyagdús talaj)", t3_q_b: "Mészkő", t3_q_c: "Műanyag", t3_q_d: "Üveg",

    // T4: Az erdő egyensúlya
    t4_title: "Az ökoszisztéma egyensúlya",
    t4_text: "Az erdő egy zárt, önfenntartó rendszer. Ha egyetlen faj eltűnik (pl. kiirtják a farkasokat), az egész rendszer egyensúlya felborulhat.",
    t4_b1: "Növények oxigént termelnek az állatoknak.",
    t4_b2: "Az állatok szén-dioxidot lélegeznek ki a növényeknek.",
    t4_b3: "A ragadozók szabályozzák a növényevők számát, védve az erdőt.",
    t4_inst: "Tedd sorba a mondat szavait!",
    t4_w1: "Az", t4_w2: "erdő", t4_w3: "egy", t4_w4: "bonyolult", t4_w5: "és", t4_w6: "érzékeny", t4_w7: "ökoszisztéma.",
    t4_q: "Mi történik, ha egy erdőből eltűnnek a ragadozók?",
    t4_q_a: "Túlszaporodnak a növényevők, és lelegelik az erdőt.", t4_q_b: "Több lesz a növény.", t4_q_c: "A fák gyorsabban nőnek.", t4_q_d: "Semmi sem változik.",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod az erdei ökoszisztémáról!",
    t5_b1: "Szintek: lombkorona, cserje, gyep, talaj.",
    t5_b2: "Hálózat: termelők -> fogyasztók -> lebontók.",
    t5_b3: "A gombák és baktériumok bontják le az avart.",
    t5_inst: "Kik juttatják vissza a tápanyagokat a talajba?",
    t5_gap_sentence2: "Az elhalt anyagokat a {gap} alakítják humusszá.",
    t5_c51: "lebontók", t5_c52: "termelők", t5_c53: "csúcsragadozók",
    t5_q: "Melyik állítás IGAZ az erdei ökoszisztémára?",
    t5_q_a: "A növények, állatok és lebontók szorosan együttműködnek.", t5_q_b: "A gombák a táplálékhálózat csúcsán állnak.", t5_q_c: "Az erdő talajszintjén van a legtöbb fény.", t5_q_d: "A fák fogyasztók.",
  },
  en: {
    explorer_title: "Forest Ecosystem",
    t1_title: "Forest Layers", t1_text: "A forest is like a multi-story building. Plants form different layers based on their height and light needs, each with its own wildlife.",
    t1_b1: "Canopy: the treetops, gets the most sunlight (birds, squirrels).", t1_b2: "Understory and Shrub layer: less light reaches here (bushes, ferns, deer).", t1_b3: "Forest floor: dark and damp (fungi, worms).",
    t1_inst: "What is the highest layer of the forest called?", t1_gap_sentence: "The highest, sunniest level of the forest is the {gap}.",
    t1_c1: "canopy", t1_c2: "shrub layer", t1_c3: "forest floor",
    t1_q: "Which layer gets the least amount of light?", t1_q_a: "The forest floor", t1_q_b: "The canopy", t1_q_c: "The shrub layer", t1_q_d: "The treetops",

    t2_title: "The Food Web", t2_text: "Living things in the forest form a complex food web. Everything eats something, and everything is eaten by something (except apex predators).",
    t2_b1: "Producers: green plants that make food from sunlight.", t2_b2: "Consumers: animals (herbivores and carnivores).", t2_b3: "Apex predators: at the top of the food web (e.g., wolves, eagles).",
    t2_inst: "Producer or Consumer? Sort them!",
    t2_bucket_ter: "Producers", t2_bucket_fog: "Consumers",
    t2_item_t1: "Oak tree", t2_item_t2: "Fern", t2_item_f1: "Fox", t2_item_f2: "Deer",
    t2_q: "Who is at the most basic level (the base) of the food web?", t2_q_a: "Producers (green plants)", t2_q_b: "Apex predators", t2_q_c: "Herbivores", t2_q_d: "Decomposers",

    t3_title: "Role of Decomposers", t3_text: "Decomposers (fungi, bacteria, worms) are the forest's cleaners. They break down dead plants and animals, returning nutrients to the soil.",
    t3_b1: "Dead leaves and logs are food for fungi.", t3_b2: "The process creates humus, which feeds the plants.", t3_b3: "Without decomposers, the forest would choke on its own waste.",
    t3_inst: "Match the living thing to its role in the forest!",
    t3_l1: "Tree (Plant)", t3_r1: "Producer (makes food)", t3_l2: "Deer (Animal)", t3_r2: "Consumer (eats plants)", t3_l3: "Fungus (Decomposer)", t3_r3: "Breaks down dead matter",
    t3_q: "What is created in the soil by the work of decomposers?", t3_q_a: "Humus (nutrient-rich soil)", t3_q_b: "Limestone", t3_q_c: "Plastic", t3_q_d: "Glass",

    t4_title: "Ecosystem Balance", t4_text: "The forest is a closed, self-sustaining system. If a single species disappears (e.g., wolves are hunted), the entire balance can collapse.",
    t4_b1: "Plants produce oxygen for animals.", t4_b2: "Animals exhale carbon dioxide for plants.", t4_b3: "Predators control herbivore numbers, protecting the forest.",
    t4_inst: "Put the words in order!",
    t4_w1: "The", t4_w2: "forest", t4_w3: "is", t4_w4: "a", t4_w5: "complex", t4_w6: "ecosystem.",
    t4_q: "What happens if predators disappear from a forest?", t4_q_a: "Herbivores overpopulate and overgraze the forest.", t4_q_b: "There will be more plants.", t4_q_c: "Trees grow faster.", t4_q_d: "Nothing changes.",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about the forest ecosystem!",
    t5_b1: "Layers: canopy, shrub, herb, forest floor.", t5_b2: "Web: producers -> consumers -> decomposers.", t5_b3: "Fungi and bacteria break down dead leaves.",
    t5_inst: "Who returns nutrients to the soil?", t5_gap_sentence2: "Dead materials are turned into humus by {gap}.",
    t5_c51: "decomposers", t5_c52: "producers", t5_c53: "apex predators",
    t5_q: "Which statement is TRUE about the forest ecosystem?", t5_q_a: "Plants, animals, and decomposers work closely together.", t5_q_b: "Fungi are at the top of the food web.", t5_q_c: "The forest floor gets the most light.", t5_q_d: "Trees are consumers.",
  },
  de: {
    explorer_title: "Ökosystem Wald",
    t1_title: "Stockwerke des Waldes", t1_text: "Ein Wald ist wie ein mehrstöckiges Haus. Pflanzen bilden je nach Höhe und Lichtbedarf Schichten, jede mit ihrer eigenen Tierwelt.",
    t1_b1: "Baumschicht (Kronendach): bekommt am meisten Licht (Vögel, Eichhörnchen).", t1_b2: "Strauch- und Krautschicht: weniger Licht (Sträucher, Farne, Rehe).", t1_b3: "Bodenschicht: dunkel und feucht (Pilze, Würmer).",
    t1_inst: "Wie nennt man die oberste Schicht des Waldes?", t1_gap_sentence: "Das oberste, sonnige Stockwerk ist die {gap}.",
    t1_c1: "Baumschicht", t1_c2: "Strauchschicht", t1_c3: "Bodenschicht",
    t1_q: "Welche Schicht bekommt am wenigsten Licht?", t1_q_a: "Die Bodenschicht", t1_q_b: "Die Baumschicht", t1_q_c: "Die Strauchschicht", t1_q_d: "Die Baumkronen",

    t2_title: "Das Nahrungsnetz", t2_text: "Im Wald bilden Lebewesen ein komplexes Nahrungsnetz. Jeder frisst jemanden und wird gefressen (außer Spitzenprädatoren).",
    t2_b1: "Produzenten: grüne Pflanzen, die aus Sonnenlicht Nahrung herstellen.", t2_b2: "Konsumenten: Tiere (Pflanzenfresser und Fleischfresser).", t2_b3: "Spitzenprädatoren: stehen an der Spitze des Nahrungsnetzes (z.B. Wolf, Adler).",
    t2_inst: "Produzent oder Konsument? Sortiere!",
    t2_bucket_ter: "Produzenten", t2_bucket_fog: "Konsumenten",
    t2_item_t1: "Eiche", t2_item_t2: "Farn", t2_item_f1: "Fuchs", t2_item_f2: "Reh",
    t2_q: "Wer steht auf der untersten Stufe (der Basis) des Nahrungsnetzes?", t2_q_a: "Die Produzenten (Pflanzen)", t2_q_b: "Die Spitzenprädatoren", t2_q_c: "Die Pflanzenfresser", t2_q_d: "Die Zersetzer",

    t3_title: "Die Zersetzer", t3_text: "Zersetzer (Pilze, Bakterien, Würmer) sind die Müllabfuhr des Waldes. Sie bauen tote Pflanzen und Tiere ab und geben Nährstoffe an den Boden zurück.",
    t3_b1: "Totes Laub und Holz sind Nahrung für Pilze.", t3_b2: "Dabei entsteht Humus, der die Pflanzen ernährt.", t3_b3: "Ohne Zersetzer würde der Wald im eigenen Müll ersticken.",
    t3_inst: "Verbinde das Lebewesen mit seiner Rolle im Wald!",
    t3_l1: "Baum (Pflanze)", t3_r1: "Produzent (stellt Nahrung her)", t3_l2: "Reh (Tier)", t3_r2: "Konsument (frisst Pflanzen)", t3_l3: "Pilz (Zersetzer)", t3_r3: "Baut totes Material ab",
    t3_q: "Was entsteht im Boden durch die Arbeit der Zersetzer?", t3_q_a: "Humus (nährstoffreiche Erde)", t3_q_b: "Kalkstein", t3_q_c: "Plastik", t3_q_d: "Glas",

    t4_title: "Gleichgewicht des Ökosystems", t4_text: "Der Wald ist ein geschlossenes System. Wenn eine Art verschwindet (z.B. Wölfe), kann das ganze Gleichgewicht kippen.",
    t4_b1: "Pflanzen produzieren Sauerstoff für Tiere.", t4_b2: "Tiere atmen Kohlendioxid für Pflanzen aus.", t4_b3: "Raubtiere kontrollieren die Zahl der Pflanzenfresser.",
    t4_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t4_w1: "Der", t4_w2: "Wald", t4_w3: "ist", t4_w4: "ein", t4_w5: "komplexes", t4_w6: "Ökosystem.",
    t4_q: "Was passiert, wenn Raubtiere aus einem Wald verschwinden?", t4_q_a: "Pflanzenfresser vermehren sich zu stark und fressen den Wald kahl.", t4_q_b: "Es gibt mehr Pflanzen.", t4_q_c: "Bäume wachsen schneller.", t4_q_d: "Nichts verändert sich.",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über das Ökosystem Wald!",
    t5_b1: "Schichten: Baum, Strauch, Kraut, Boden.", t5_b2: "Netz: Produzent -> Konsument -> Zersetzer.", t5_b3: "Pilze und Bakterien bauen das Laub ab.",
    t5_inst: "Wer gibt die Nährstoffe an den Boden zurück?", t5_gap_sentence2: "Totes Material wird durch {gap} zu Humus.",
    t5_c51: "Zersetzer", t5_c52: "Produzenten", t5_c53: "Spitzenprädatoren",
    t5_q: "Welche Aussage über das Ökosystem Wald ist WAHR?", t5_q_a: "Pflanzen, Tiere und Zersetzer arbeiten eng zusammen.", t5_q_b: "Pilze stehen an der Spitze des Nahrungsnetzes.", t5_q_c: "Die Bodenschicht hat das meiste Licht.", t5_q_d: "Bäume sind Konsumenten.",
  },
  ro: {
    explorer_title: "Ecosistemul Pădurii",
    t1_title: "Nivelurile Pădurii", t1_text: "O pădure este ca o clădire cu mai multe etaje. Plantele formează straturi pe baza înălțimii și a nevoii de lumină, fiecare cu propria faună.",
    t1_b1: "Coronamentul: vârfurile copacilor, primește cea mai multă lumină (păsări, veverițe).", t1_b2: "Stratul arbustiv și erbaceu: ajunge mai puțină lumină (tufișuri, ferigi, căprioare).", t1_b3: "Litiera: întunecat și umed (ciuperci, viermi).",
    t1_inst: "Cum se numește cel mai înalt strat al pădurii?", t1_gap_sentence: "Cel mai înalt și însorit etaj al pădurii este {gap}.",
    t1_c1: "coronamentul", t1_c2: "stratul arbustiv", t1_c3: "litiera",
    t1_q: "Care strat primește cel mai puțină lumină?", t1_q_a: "Litiera și solul", t1_q_b: "Coronamentul", t1_q_c: "Stratul arbustiv", t1_q_d: "Vârfurile copacilor",

    t2_title: "Rețeaua Trofică", t2_text: "În pădure, viețuitoarele formează o rețea trofică complexă. Totul mănâncă ceva și este mâncat de altceva (cu excepția prădătorilor de top).",
    t2_b1: "Producători: plante verzi care fac hrană din lumina soarelui.", t2_b2: "Consumatori: animale (erbivore și carnivore).", t2_b3: "Prădători de top: în vârful rețelei trofice (ex. lup, vultur).",
    t2_inst: "Producător sau Consumator? Sortează-le!",
    t2_bucket_ter: "Producători", t2_bucket_fog: "Consumatori",
    t2_item_t1: "Stejar", t2_item_t2: "Ferigă", t2_item_f1: "Vulpe", t2_item_f2: "Căprioară",
    t2_q: "Cine se află la nivelul cel mai de bază al rețelei trofice?", t2_q_a: "Producătorii (plantele verzi)", t2_q_b: "Prădătorii de top", t2_q_c: "Animalele erbivore", t2_q_d: "Descompunătorii",

    t3_title: "Rolul Descompunătorilor", t3_text: "Descompunătorii (ciuperci, bacterii, viermi) sunt gunoierii pădurii. Ei descompun plantele și animalele moarte, returnând nutrienții în sol.",
    t3_b1: "Frunzele moarte și trunchiurile sunt hrana ciupercilor.", t3_b2: "Procesul creează humus, care hrănește plantele.", t3_b3: "Fără descompunători, pădurea s-ar sufoca în propriile deșeuri.",
    t3_inst: "Potrivește viețuitoarea cu rolul ei în pădure!",
    t3_l1: "Copac (Plantă)", t3_r1: "Producător (face hrană)", t3_l2: "Căprioară (Animal)", t3_r2: "Consumator (mănâncă plante)", t3_l3: "Ciupercă (Descompunător)", t3_r3: "Descompune materia moartă",
    t3_q: "Ce se creează în sol prin munca descompunătorilor?", t3_q_a: "Humus (sol bogat în nutrienți)", t3_q_b: "Calcar", t3_q_c: "Plastic", t3_q_d: "Sticlă",

    t4_title: "Echilibrul Ecosistemului", t4_text: "Pădurea este un sistem închis, care se auto-susține. Dacă o singură specie dispare (ex. lupii), întregul echilibru se poate prăbuși.",
    t4_b1: "Plantele produc oxigen pentru animale.", t4_b2: "Animalele expiră dioxid de carbon pentru plante.", t4_b3: "Prădătorii controlează numărul erbivorelor, protejând pădurea.",
    t4_inst: "Pune cuvintele în ordine!",
    t4_w1: "Pădurea", t4_w2: "este", t4_w3: "un", t4_w4: "ecosistem", t4_w5: "complex.",
    t4_q: "Ce se întâmplă dacă prădătorii dispar dintr-o pădure?", t4_q_a: "Erbivorele se înmulțesc prea mult și distrug pădurea.", t4_q_b: "Vor fi mai multe plante.", t4_q_c: "Copacii cresc mai repede.", t4_q_d: "Nu se schimbă nimic.",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre ecosistemul pădurii!",
    t5_b1: "Straturi: coronament, arbustiv, erbaceu, litieră.", t5_b2: "Rețea: producători -> consumatori -> descompunători.", t5_b3: "Ciupercile și bacteriile descompun frunzele.",
    t5_inst: "Cine returnează nutrienții în sol?", t5_gap_sentence2: "Materialele moarte sunt transformate în humus de către {gap}.",
    t5_c51: "descompunători", t5_c52: "producători", t5_c53: "prădătorii de top",
    t5_q: "Care afirmație este ADEVĂRATĂ despre ecosistemul pădurii?", t5_q_a: "Plantele, animalele și descompunătorii colaborează strâns.", t5_q_b: "Ciupercile sunt în vârful rețelei trofice.", t5_q_c: "Stratul solului primește cea mai multă lumină.", t5_q_d: "Copacii sunt consumatori.",
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
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
    svg: (lang) => <FoodWebSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "ter", label: "t2_bucket_ter" },
        { id: "fog", label: "t2_bucket_fog" },
      ],
      items: [
        { text: "t2_item_t1", bucketId: "ter" },
        { text: "t2_item_f1", bucketId: "fog" },
        { text: "t2_item_t2", bucketId: "ter" },
        { text: "t2_item_f2", bucketId: "fog" },
      ],
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
      hint2: "t3_b3",
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      instruction: "t4_inst",
      hint1: "t4_b3",
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
      hint1: "t5_b3",
      hint2: "t5_b2",
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
  icon: "🌲",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ForestExplorer = memo(function ForestExplorer({
  color = "#15803D", // Erdőzöld (Green-700)
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
      grade={6} 
      explorerId="bio_k6_forest" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default ForestExplorer;
