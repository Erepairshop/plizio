"use client";
// WaterExplorer.tsx — Bio Island i4: Vízi ökoszisztémák (K6)
// Topics: 1) Édesvizek 2) Sósvizek 3) Planktonok 4) Vízi tápláléklánc 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { WaterEcosystemSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#CFFAFE" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="15" fontSize="50" textAnchor="middle">🌊</text>
        <text x="-40" y="10" fontSize="30" textAnchor="middle">🐋</text>
        <text x="40" y="20" fontSize="25" textAnchor="middle">🦈</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-30" y="15" fontSize="45" textAnchor="middle">🦠</text>
        <text x="30" y="15" fontSize="45" textAnchor="middle">🔬</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="15" fontSize="30" textAnchor="middle">🌿</text>
        <path d="M -40,0 L -20,0" stroke="#0284C7" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="0" y="15" fontSize="30" textAnchor="middle">🐟</text>
        <path d="M 20,0 L 40,0" stroke="#0284C7" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="60" y="15" fontSize="30" textAnchor="middle">🦈</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">💧</text>
        <text x="25" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Vízi Ökoszisztémák",
    // T1: Édesvizek
    t1_title: "Az édesvizek világa",
    t1_text: "Az édesvízi ökoszisztémák (tavak, folyók, patakok) sótartalma nagyon alacsony. Bár a Föld vízkészletének csak kis részét teszik ki, rengeteg élőlénynek adnak otthont.",
    t1_b1: "Állóvizek: tavak, mocsarak. Itt a víz rétegződik, a felszínen sok a fény.",
    t1_b2: "Folyóvizek: folyók, patakok. A víz folyamatosan mozgásban van, magasabb az oxigéntartalma.",
    t1_b3: "Élővilág: hódok, vidrák, békák, pontyok, vízililiomok.",
    t1_inst: "Milyen víz található a folyókban és a tavakban?",
    t1_gap_sentence: "A folyók és tavak {gap} alkotnak.",
    t1_c1: "édesvizet", t1_c2: "sósvizet", t1_c3: "jeget",
    t1_q: "Miért van a gyors folyású patakokban több oxigén?",
    t1_q_a: "Mert a mozgó víz folyamatosan keveredik a levegővel.", t1_q_b: "Mert több bennük a hal.", t1_q_c: "Mert sósak.", t1_q_d: "Mert mélyebbek.",

    // T2: Sósvizek
    t2_title: "Tengerek és Óceánok",
    t2_text: "A Föld felszínének több mint 70%-át sós vizű óceánok és tengerek borítják. Ez a bolygó legnagyobb összefüggő ökoszisztémája.",
    t2_b1: "Nyílt óceán: hatalmas mélységek, ahol a fény csak a felső rétegekbe jut le.",
    t2_b2: "Korallzátonyok: a tengerek esőerdei, sekély, meleg vízben találhatók, rengeteg fajjal.",
    t2_b3: "Élővilág: bálnák, cápák, delfinek, korallok, tengeri teknősök.",
    t2_inst: "Édesvízi vagy Sósvízi élőlény? Válogasd szét!",
    t2_bucket_ede: "Édesvízi (Tó/Folyó)",
    t2_bucket_sos: "Sósvízi (Óceán)",
    t2_item_e1: "Ponty", t2_item_e2: "Tavirózsa",
    t2_item_s1: "Cápa", t2_item_s2: "Korall",
    t2_q: "Mi jellemző a korallzátonyokra?",
    t2_q_a: "Sekély, meleg vízben élnek, és rendkívül fajgazdagok.", t2_q_b: "A mélyóceán sötét fenekén találhatók.", t2_q_c: "Csak édesvízben nőnek.", t2_q_d: "Nincsenek ott állatok.",

    // T3: Planktonok
    t3_title: "A planktonok titkos élete",
    t3_text: "A planktonok apró, gyakran mikroszkopikus élőlények, amelyek a vízben lebegnek. Ők alkotják a vízi táplálékhálózat alapját.",
    t3_b1: "Fitoplankton (növényi): fotoszintetizálnak. Ők termelik a Föld oxigénjének több mint felét!",
    t3_b2: "Zooplankton (állati): apró rákok, medúzák lárvái, amik a fitoplanktont eszik.",
    t3_b3: "Sok hatalmas állat (pl. sziláscetek) is planktonnal táplálkozik.",
    t3_inst: "Párosítsd a plankton típusát a jellemzőjével!",
    t3_l1: "Fitoplankton", t3_r1: "Növényi, oxigént termel",
    t3_l2: "Zooplankton", t3_r2: "Állati, algákat eszik",
    t3_l3: "Lebegés", t3_r3: "A víz áramlatai viszik őket",
    t3_q: "Mit termel a fitoplankton hatalmas mennyiségben, ami az egész Föld számára létfontosságú?",
    t3_q_a: "Oxigént", t3_q_b: "Sót", t3_q_c: "Műanyagot", t3_q_d: "Kőolajat",

    // T4: Vízi tápláléklánc
    t4_title: "Tápláléklánc a vízben",
    t4_text: "A vízben is megvan a szigorú rend: ki kit eszik meg. Minden a napfényt hasznosító fitoplanktonnal kezdődik.",
    t4_b1: "Termelők: Fitoplankton és tengeri algák.",
    t4_b2: "Elsődleges fogyasztók: Zooplankton, apró halak, csigák.",
    t4_b3: "Csúcsragadozók: Cápák, kardszárnyú delfinek, nagy ragadozó halak.",
    t4_inst: "Tedd sorba a vízi táplálékláncot (alulról felfelé)!",
    t4_w1: "Fitoplankton", t4_w2: "Zooplankton", t4_w3: "Apró hal", t4_w4: "Nagy hal", t4_w5: "Cápa",
    t4_q: "Mik a termelők az óceáni ökoszisztémában?",
    t4_q_a: "A fitoplankton és az algák", t4_q_b: "A bálnák", t4_q_c: "A cápák", t4_q_d: "A rákok",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a vízi világ csodáiról!",
    t5_b1: "Édesvizek (tavak, folyók) és sósvizek (óceánok).",
    t5_b2: "A fitoplankton termeli a földi oxigén nagy részét.",
    t5_b3: "A korallzátonyok a tengerek oázisai.",
    t5_inst: "Melyik a legnagyobb vízi ökoszisztéma?",
    t5_gap_sentence2: "A Föld felszínének nagy részét a sós vizű {gap} borítják.",
    t5_c51: "óceánok", t5_c52: "tavak", t5_c53: "mocsarak",
    t5_q: "Melyik állítás IGAZ a zooplanktonra?",
    t5_q_a: "Állati eredetű lebegő élőlények, melyek algákat esznek.", t5_q_b: "Ők termelik az oxigént.", t5_q_c: "Édesvízben egyáltalán nincsenek.", t5_q_d: "A vízfenéken gyökereznek.",
  },
  en: {
    explorer_title: "Aquatic Ecosystems",
    t1_title: "World of Freshwater", t1_text: "Freshwater ecosystems (lakes, rivers, streams) have very low salt content. Although they make up a small part of Earth's water, they house many species.",
    t1_b1: "Still water: lakes, swamps. Water forms layers, surface gets lots of light.", t1_b2: "Flowing water: rivers, streams. Water is constantly moving, higher oxygen content.", t1_b3: "Wildlife: beavers, otters, frogs, carp, water lilies.",
    t1_inst: "What kind of water is in rivers and lakes?", t1_gap_sentence: "Rivers and lakes consist of {gap}.",
    t1_c1: "freshwater", t1_c2: "saltwater", t1_c3: "ice",
    t1_q: "Why do fast-flowing streams have more oxygen?", t1_q_a: "Moving water constantly mixes with air.", t1_q_b: "Because there are more fish.", t1_q_c: "Because they are salty.", t1_q_d: "Because they are deeper.",

    t2_title: "Seas and Oceans", t2_text: "More than 70% of the Earth's surface is covered by saltwater oceans and seas. It is the planet's largest continuous ecosystem.",
    t2_b1: "Open ocean: vast depths where light only reaches the top layers.", t2_b2: "Coral reefs: the rainforests of the sea, found in shallow, warm water.", t2_b3: "Wildlife: whales, sharks, dolphins, corals, sea turtles.",
    t2_inst: "Freshwater or Saltwater creature? Sort them!",
    t2_bucket_ede: "Freshwater (Lake/River)", t2_bucket_sos: "Saltwater (Ocean)",
    t2_item_e1: "Carp", t2_item_e2: "Water lily", t2_item_s1: "Shark", t2_item_s2: "Coral",
    t2_q: "What is a characteristic of coral reefs?", t2_q_a: "They live in shallow, warm water and are rich in species.", t2_q_b: "They are found in the dark deep ocean.", t2_q_c: "They only grow in freshwater.", t2_q_d: "There are no animals there.",

    t3_title: "The Secret Life of Plankton", t3_text: "Plankton are tiny, often microscopic organisms drifting in the water. They form the base of the aquatic food web.",
    t3_b1: "Phytoplankton (plant-like): they photosynthesize. They produce more than half of Earth's oxygen!", t3_b2: "Zooplankton (animal-like): tiny crustaceans, jellyfish larvae that eat phytoplankton.", t3_b3: "Many huge animals (e.g., baleen whales) also feed on plankton.",
    t3_inst: "Match the type of plankton to its characteristic!",
    t3_l1: "Phytoplankton", t3_r1: "Plant-like, produces oxygen", t3_l2: "Zooplankton", t3_r2: "Animal-like, eats algae", t3_l3: "Drifting", t3_r3: "Carried by water currents",
    t3_q: "What does phytoplankton produce in huge amounts that is vital for the whole Earth?", t3_q_a: "Oxygen", t3_q_b: "Salt", t3_q_c: "Plastic", t3_q_d: "Oil",

    t4_title: "Aquatic Food Chain", t4_text: "There is a strict order in the water too: who eats whom. Everything starts with phytoplankton utilizing sunlight.",
    t4_b1: "Producers: Phytoplankton and marine algae.", t4_b2: "Primary consumers: Zooplankton, small fish, snails.", t4_b3: "Apex predators: Sharks, killer whales, large predatory fish.",
    t4_inst: "Put the aquatic food chain in order (from bottom to top)!",
    t4_w1: "Phytoplankton", t4_w2: "Zooplankton", t4_w3: "Small fish", t4_w4: "Big fish", t4_w5: "Shark",
    t4_q: "What are the producers in the ocean ecosystem?", t4_q_a: "Phytoplankton and algae", t4_q_b: "Whales", t4_q_c: "Sharks", t4_q_d: "Crabs",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about the wonders of the aquatic world!",
    t5_b1: "Freshwater (lakes, rivers) and saltwater (oceans).", t5_b2: "Phytoplankton produces most of the Earth's oxygen.", t5_b3: "Coral reefs are the oases of the seas.",
    t5_inst: "What is the largest aquatic ecosystem?", t5_gap_sentence2: "Most of the Earth's surface is covered by saltwater {gap}.",
    t5_c51: "oceans", t5_c52: "lakes", t5_c53: "swamps",
    t5_q: "Which statement is TRUE about zooplankton?", t5_q_a: "They are drifting animal-like organisms that eat algae.", t5_q_b: "They produce oxygen.", t5_q_c: "They don't exist in freshwater.", t5_q_d: "They root on the water floor.",
  },
  de: {
    explorer_title: "Wasserökosysteme",
    t1_title: "Süßgewässer", t1_text: "Süßwasserökosysteme (Seen, Flüsse) haben sehr wenig Salz. Obwohl sie nur einen kleinen Teil des Wassers ausmachen, leben hier viele Arten.",
    t1_b1: "Stehende Gewässer: Seen, Sümpfe. Das Wasser bildet Schichten.", t1_b2: "Fließgewässer: Flüsse, Bäche. Das Wasser bewegt sich, mehr Sauerstoff.", t1_b3: "Tiere: Biber, Otter, Frösche, Karpfen.",
    t1_inst: "Welches Wasser befindet sich in Flüssen und Seen?", t1_gap_sentence: "Flüsse und Seen bestehen aus {gap}.",
    t1_c1: "Süßwasser", t1_c2: "Salzwasser", t1_c3: "Eis",
    t1_q: "Warum haben schnell fließende Bäche mehr Sauerstoff?", t1_q_a: "Das bewegte Wasser mischt sich ständig mit Luft.", t1_q_b: "Weil es mehr Fische gibt.", t1_q_c: "Weil sie salzig sind.", t1_q_d: "Weil sie tiefer sind.",

    t2_title: "Meere und Ozeane", t2_text: "Über 70% der Erdoberfläche ist von Salzwasserozeanen bedeckt. Es ist das größte zusammenhängende Ökosystem der Erde.",
    t2_b1: "Offener Ozean: riesige Tiefen, in die nur oben Licht dringt.", t2_b2: "Korallenriffe: die Regenwälder der Meere, flach und warm.", t2_b3: "Tiere: Wale, Haie, Delfine, Meeresschildkröten.",
    t2_inst: "Süßwasser oder Salzwasser? Sortiere!",
    t2_bucket_ede: "Süßwasser (See/Fluss)", t2_bucket_sos: "Salzwasser (Ozean)",
    t2_item_e1: "Karpfen", t2_item_e2: "Seerose", t2_item_s1: "Hai", t2_item_s2: "Koralle",
    t2_q: "Was ist ein Merkmal von Korallenriffen?", t2_q_a: "Sie liegen in flachem, warmem Wasser und sind sehr artenreich.", t2_q_b: "Sie liegen in der dunklen Tiefsee.", t2_q_c: "Sie wachsen nur im Süßwasser.", t2_q_d: "Dort gibt es keine Tiere.",

    t3_title: "Das Geheimnis des Planktons", t3_text: "Plankton sind winzige, im Wasser schwebende Organismen. Sie bilden die Basis des Nahrungsnetzes im Wasser.",
    t3_b1: "Phytoplankton (pflanzlich): betreibt Fotosynthese. Produziert über die Hälfte des Sauerstoffs der Erde!", t3_b2: "Zooplankton (tierisch): winzige Krebschen, die Phytoplankton fressen.", t3_b3: "Auch riesige Tiere (Bartenwale) fressen Plankton.",
    t3_inst: "Verbinde die Planktonart mit ihrer Eigenschaft!",
    t3_l1: "Phytoplankton", t3_r1: "Pflanzlich, produziert Sauerstoff", t3_l2: "Zooplankton", t3_r2: "Tierisch, frisst Algen", t3_l3: "Schweben", t3_r3: "Werden von Strömungen getragen",
    t3_q: "Was produziert das Phytoplankton in riesigen Mengen?", t3_q_a: "Sauerstoff", t3_q_b: "Salz", t3_q_c: "Plastik", t3_q_d: "Erdöl",

    t4_title: "Die Nahrungskette im Wasser", t4_text: "Auch im Wasser gibt es eine strenge Ordnung: Wer frisst wen. Alles beginnt mit dem Phytoplankton.",
    t4_b1: "Produzenten: Phytoplankton und Algen.", t4_b2: "Primärkonsumenten: Zooplankton, kleine Fische.", t4_b3: "Spitzenprädatoren: Haie, Schwertwale, große Raubfische.",
    t4_inst: "Bringe die Nahrungskette in die richtige Reihenfolge (von unten nach oben)!",
    t4_w1: "Phytoplankton", t4_w2: "Zooplankton", t4_w3: "Kleiner Fisch", t4_w4: "Großer Fisch", t4_w5: "Hai",
    t4_q: "Wer sind die Produzenten im Ozean?", t4_q_a: "Phytoplankton und Algen", t4_q_b: "Wale", t4_q_c: "Haie", t4_q_d: "Krebse",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über die Welt der Gewässer!",
    t5_b1: "Süßwasser (Seen, Flüsse) und Salzwasser (Ozeane).", t5_b2: "Phytoplankton produziert den meisten Sauerstoff.", t5_b3: "Korallenriffe sind Oasen der Meere.",
    t5_inst: "Was ist das größte Wasserökosystem?", t5_gap_sentence2: "Der Großteil der Erde ist von salzigen {gap} bedeckt.",
    t5_c51: "Ozeanen", t5_c52: "Seen", t5_c53: "Sümpfen",
    t5_q: "Welche Aussage über Zooplankton ist WAHR?", t5_q_a: "Es sind tierische Schwebeorganismen, die Algen fressen.", t5_q_b: "Sie produzieren Sauerstoff.", t5_q_c: "Sie leben nur in Salzwasser.", t5_q_d: "Sie haben Wurzeln im Boden.",
  },
  ro: {
    explorer_title: "Ecosisteme Acvatice",
    t1_title: "Apele Dulci", t1_text: "Ecosistemele de apă dulce (lacuri, râuri) au un conținut foarte scăzut de sare. Deși reprezintă o mică parte din apa Pământului, găzduiesc multe specii.",
    t1_b1: "Ape stătătoare: lacuri, mlaștini. Lumina pătrunde la suprafață.", t1_b2: "Ape curgătoare: râuri, pâraie. Apa se mișcă, mai mult oxigen.", t1_b3: "Faună: castori, vidre, broaște, crapi.",
    t1_inst: "Ce fel de apă se găsește în râuri și lacuri?", t1_gap_sentence: "Râurile și lacurile sunt formate din {gap}.",
    t1_c1: "apă dulce", t1_c2: "apă sărată", t1_c3: "gheață",
    t1_q: "De ce pâraiele rapide au mai mult oxigen?", t1_q_a: "Apa în mișcare se amestecă constant cu aerul.", t1_q_b: "Pentru că au mai mulți pești.", t1_q_c: "Pentru că sunt sărate.", t1_q_d: "Pentru că sunt mai adânci.",

    t2_title: "Mări și Oceane", t2_text: "Peste 70% din suprafața Pământului este acoperită de oceane și mări cu apă sărată. Este cel mai mare ecosistem continuu.",
    t2_b1: "Oceanul deschis: adâncimi uriașe, lumina ajunge doar sus.", t2_b2: "Recife de corali: pădurile tropicale ale mării, în ape calde și puțin adânci.", t2_b3: "Faună: balene, rechini, delfini, corali.",
    t2_inst: "Vietate de apă dulce sau sărată? Sortează-le!",
    t2_bucket_ede: "Apă dulce (Lac/Râu)", t2_bucket_sos: "Apă sărată (Ocean)",
    t2_item_e1: "Crap", t2_item_e2: "Nufăr", t2_item_s1: "Rechin", t2_item_s2: "Coral",
    t2_q: "Ce este caracteristic recifelor de corali?", t2_q_a: "Trăiesc în ape calde, puțin adânci și sunt foarte bogate în specii.", t2_q_b: "Se găsesc în adâncul întunecat al oceanului.", t2_q_c: "Cresc doar în apă dulce.", t2_q_d: "Nu există animale acolo.",

    t3_title: "Viața Secretă a Planctonului", t3_text: "Planctonul este format din organisme minuscule care plutesc în apă. Ele sunt baza rețelei trofice acvatice.",
    t3_b1: "Fitoplancton (vegetal): face fotosinteză. Produce peste jumătate din oxigenul Pământului!", t3_b2: "Zooplancton (animal): mici crustacee care mănâncă fitoplancton.", t3_b3: "Multe animale uriașe (ex. balene) mănâncă plancton.",
    t3_inst: "Potrivește tipul de plancton cu trăsătura sa!",
    t3_l1: "Fitoplancton", t3_r1: "Vegetal, produce oxigen", t3_l2: "Zooplancton", t3_r2: "Animal, mănâncă alge", t3_l3: "Plutire", t3_r3: "Purtat de curenții de apă",
    t3_q: "Ce produce fitoplanctonul în cantități uriașe, fiind vital pentru Pământ?", t3_q_a: "Oxigen", t3_q_b: "Sare", t3_q_c: "Plastic", t3_q_d: "Petrol",

    t4_title: "Lanțul Trofic Acvatic", t4_text: "Și în apă există o ordine strictă a cine mănâncă pe cine. Totul începe cu fitoplanctonul.",
    t4_b1: "Producători: Fitoplancton și alge.", t4_b2: "Consumatori primari: Zooplancton, pești mici.", t4_b3: "Prădători de top: Rechini, orci, pești prădători mari.",
    t4_inst: "Pune lanțul trofic acvatic în ordine (de jos în sus)!",
    t4_w1: "Fitoplancton", t4_w2: "Zooplancton", t4_w3: "Pește mic", t4_w4: "Pește mare", t4_w5: "Rechin",
    t4_q: "Care sunt producătorii în ecosistemul oceanului?", t4_q_a: "Fitoplanctonul și algele", t4_q_b: "Balenele", t4_q_c: "Rechinii", t4_q_d: "Crabii",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre minunile lumii acvatice!",
    t5_b1: "Apă dulce (lacuri, râuri) și apă sărată (oceane).", t5_b2: "Fitoplanctonul produce majoritatea oxigenului.", t5_b3: "Recifele de corali sunt oazele mărilor.",
    t5_inst: "Care este cel mai mare ecosistem acvatic?", t5_gap_sentence2: "Marea parte a Pământului este acoperită de {gap} cu apă sărată.",
    t5_c51: "oceane", t5_c52: "lacuri", t5_c53: "mlaștini",
    t5_q: "Care afirmație este ADEVĂRATĂ despre zooplancton?", t5_q_a: "Sunt organisme plutitoare de origine animală care mănâncă alge.", t5_q_b: "Ele produc oxigenul.", t5_q_c: "Nu trăiesc deloc în apă dulce.", t5_q_d: "Au rădăcini pe fundul apei.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <WaterEcosystemSvg lang={lang} />,
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "ede", label: "t2_bucket_ede" },
        { id: "sos", label: "t2_bucket_sos" },
      ],
      items: [
        { text: "t2_item_e1", bucketId: "ede" },
        { text: "t2_item_s1", bucketId: "sos" },
        { text: "t2_item_e2", bucketId: "ede" },
        { text: "t2_item_s2", bucketId: "sos" },
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
    svg: () => <Topic3Svg />,
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5"],
      correctOrder: [0, 1, 2, 3, 4],
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b3",
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
  icon: "💧",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WaterExplorer = memo(function WaterExplorer({
  color = "#0284C7", // Óceánkék (Sky-600)
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
      explorerId="bio_k6_water" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default WaterExplorer;
