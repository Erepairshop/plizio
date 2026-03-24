"use client";
// CirculationExplorer.tsx — Bio Island i6: Keringés (K6)
// Topics: 1) Kis vérkör 2) Nagy vérkör 3) Vérerek 4) Vércsoportok 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { CirculationSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEE2E2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="5" fontSize="40" textAnchor="middle">🫀</text>
        <path d="M -20,15 Q -40,40 0,45 Q 40,40 20,15" fill="none" stroke="#E11D48" strokeWidth="3" markerEnd="url(#arrow)" />
        <path d="M -20,-15 Q -40,-40 0,-45 Q 40,-40 20,-15" fill="none" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="0" y="60" fontSize="20" textAnchor="middle">🏃</text>
        <text x="0" y="-50" fontSize="20" textAnchor="middle">🫁</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F3F4F6" rx="20" />
      <g transform="translate(120, 70)">
        <path d="M -60,0 L -20,0" stroke="#E11D48" strokeWidth="8" />
        <path d="M 20,0 L 60,0" stroke="#2563EB" strokeWidth="8" />
        <path d="M -20,0 Q 0,-20 20,0 M -20,0 Q 0,0 20,0 M -20,0 Q 0,20 20,0" fill="none" stroke="#9CA3AF" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-35" y="15" fontSize="40" textAnchor="middle">🩸</text>
        <text x="35" y="15" fontSize="40" textAnchor="middle">💉</text>
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🔄</text>
        <text x="25" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "A Keringési Rendszer",
    // T1: Kis vérkör
    t1_title: "A kis vérkör (Tüdővérkör)",
    t1_text: "A vérkeringésünk két nagy körből áll. A kis vérkör a szív jobb kamrájából indul, és a tüdőbe szállítja a szén-dioxidban gazdag vért.",
    t1_b1: "A tüdőben a vér leadja a szén-dioxidot és felveszi az oxigént.",
    t1_b2: "A friss, oxigéndús vér ezután visszatér a szív bal pitvarába.",
    t1_b3: "A kis vérkör feladata tehát a vér 'felfrissítése'.",
    t1_inst: "Hová pumpálja a szív a vért a kis vérkörben?",
    t1_gap_sentence: "A kis vérkör a szívből a {gap} szállítja a vért oxigénért.",
    t1_c1: "tüdőbe", t1_c2: "agyba", t1_c3: "gyomorba",
    t1_q: "Milyen vér tér vissza a tüdőből a szív bal pitvarába?",
    t1_q_a: "Oxigénben gazdag vér", t1_q_b: "Szén-dioxidban gazdag vér", t1_q_c: "Vérsejtek nélküli plazma", t1_q_d: "Tápanyagokban gazdag vér",

    // T2: Nagy vérkör
    t2_title: "A nagy vérkör (Testvérkör)",
    t2_text: "A nagy vérkör a szív bal kamrájából indul. Hatalmas erővel pumpálja ki az oxigéndús vért, hogy az eljusson a test minden egyes sejtjéhez.",
    t2_b1: "A vér leadja az oxigént a sejteknek, és felveszi a szén-dioxidot.",
    t2_b2: "A beleknél felveszi a tápanyagokat is.",
    t2_b3: "Az elhasznált, oxigénszegény vér visszatér a szív jobb pitvarába.",
    t2_inst: "Kis vérkör vagy Nagy vérkör? Válogasd szét a jellemzőket!",
    t2_bucket_kis: "Kis vérkör",
    t2_bucket_nag: "Nagy vérkör",
    t2_item_k1: "A tüdőbe vezet", t2_item_k2: "A jobb kamrából indul",
    t2_item_n1: "Az egész testbe vezet", t2_item_n2: "A bal kamrából indul",
    t2_q: "Melyik szívüregből indul ki a testet ellátó nagy vérkör?",
    t2_q_a: "A bal kamrából", t2_q_b: "A jobb kamrából", t2_q_c: "A jobb pitvarból", t2_q_d: "A bal pitvarból",

    // T3: Vérerek
    t3_title: "Az erek hálózata",
    t3_text: "A vér zárt csőrendszerben, az erekben kering. Három fő típusuk van, melyek felépítése a feladatukhoz igazodik.",
    t3_b1: "Artériák (ütőerek): elviszik a vért a szívből (vastag, rugalmas fal).",
    t3_b2: "Vénák (gyűjtőerek): visszaviszik a vért a szívbe (vékonyabb fal, billentyűk).",
    t3_b3: "Hajszálerek (kapillárisok): itt történik a gáz- és tápanyagcsere a sejtekkel.",
    t3_inst: "Párosítsd az eret a feladatával!",
    t3_l1: "Artéria (Ütőér)", t3_r1: "Elviszi a vért a szívből",
    t3_l2: "Véna (Gyűjtőér)", t3_r2: "Visszaviszi a vért a szívbe",
    t3_l3: "Hajszálér", t3_r3: "Anyagkicserélődés a sejteknél",
    t3_q: "Milyen erekben történik az oxigén és a tápanyagok átadása a sejteknek?",
    t3_q_a: "A hajszálerekben", t3_q_b: "Az artériákban", t3_q_c: "A vénákban", t3_q_d: "A nyirokerekben",

    // T4: Vércsoportok
    t4_title: "Vércsoportok és véradás",
    t4_text: "Az emberek vérében lévő fehérjék alapján 4 fő vércsoportot különböztetünk meg: A, B, AB és 0 (nullás). Véradáskor életmentő a pontos egyezés.",
    t4_b1: "Ha valaki nem megfelelő vért kap, a vére kicsapódik (rögösödik).",
    t4_b2: "A 0-s vércsoport 'általános adó', mindenkinek adhat vért.",
    t4_b3: "Az AB-s vércsoport 'általános kapó', mindenkitől kaphat vért.",
    t4_inst: "Tedd sorba a mondat szavait!",
    t4_w1: "A", t4_w2: "nullás", t4_w3: "vércsoport", t4_w4: "az", t4_w5: "általános", t4_w6: "adó.",
    t4_q: "Melyik vércsoportú ember adhat vért az összes többi vércsoportnak?",
    t4_q_a: "A 0-s (nullás)", t4_q_b: "Az A-s", t4_q_c: "A B-s", t4_q_d: "Az AB-s",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a vérkeringésről és az erekről!",
    t5_b1: "Kis vérkör: tüdő (oxigénfelvétel).",
    t5_b2: "Nagy vérkör: test (oxigén leadás).",
    t5_b3: "Artériák viszik el, vénák hozzák vissza a vért.",
    t5_inst: "Melyik éren át távozik a vér a szívből?",
    t5_gap_sentence2: "A vért a szívből az {gap} szállítják el.",
    t5_c51: "artériák", t5_c52: "vénák", t5_c53: "hajszálerek",
    t5_q: "Melyik állítás IGAZ a vénákra (gyűjtőerekre)?",
    t5_q_a: "A testből a szív felé szállítják a vért.", t5_q_b: "A szívből indulnak ki.", t5_q_c: "Ezekben történik a sejtek oxigénellátása.", t5_q_d: "Nincsenek bennük billentyűk.",
  },
  en: {
    explorer_title: "The Circulatory System",
    t1_title: "The Pulmonary Circulation", t1_text: "Our blood circulation consists of two main loops. The pulmonary circulation starts from the right ventricle and carries carbon dioxide-rich blood to the lungs.",
    t1_b1: "In the lungs, the blood releases CO2 and picks up oxygen.", t1_b2: "Fresh, oxygen-rich blood then returns to the left atrium.", t1_b3: "Its main purpose is to 'refresh' the blood.",
    t1_inst: "Where does the heart pump blood in the pulmonary circulation?", t1_gap_sentence: "The pulmonary circulation carries blood to the {gap} for oxygen.",
    t1_c1: "lungs", t1_c2: "brain", t1_c3: "stomach",
    t1_q: "What kind of blood returns from the lungs to the left atrium?", t1_q_a: "Oxygen-rich blood", t1_q_b: "Carbon dioxide-rich blood", t1_q_c: "Plasma without cells", t1_q_d: "Nutrient-rich blood",

    t2_title: "The Systemic Circulation", t2_text: "The systemic circulation starts from the left ventricle. It pumps oxygen-rich blood with immense force to reach every cell in the body.",
    t2_b1: "Blood delivers oxygen to the cells and picks up CO2.", t2_b2: "It also picks up nutrients at the intestines.", t2_b3: "Used, oxygen-poor blood returns to the right atrium.",
    t2_inst: "Pulmonary or Systemic? Sort the features!",
    t2_bucket_kis: "Pulmonary (Lungs)", t2_bucket_nag: "Systemic (Body)",
    t2_item_k1: "Leads to the lungs", t2_item_k2: "Starts from right ventricle",
    t2_item_n1: "Leads to the whole body", t2_item_n2: "Starts from left ventricle",
    t2_q: "Which heart chamber pumps blood into the systemic circulation?", t2_q_a: "Left ventricle", t2_q_b: "Right ventricle", t2_q_c: "Right atrium", t2_q_d: "Left atrium",

    t3_title: "Network of Blood Vessels", t3_text: "Blood circulates in a closed network of tubes called blood vessels. There are three main types, built for their specific tasks.",
    t3_b1: "Arteries: carry blood away from the heart (thick, elastic walls).", t3_b2: "Veins: carry blood back to the heart (thinner walls, valves).", t3_b3: "Capillaries: where gas and nutrient exchange happens with cells.",
    t3_inst: "Match the blood vessel with its function!",
    t3_l1: "Artery", t3_r1: "Carries blood away from the heart", t3_l2: "Vein", t3_r2: "Carries blood back to the heart", t3_l3: "Capillary", t3_r3: "Exchange of materials at cells",
    t3_q: "In which vessels are oxygen and nutrients delivered to the cells?", t3_q_a: "In the capillaries", t3_q_b: "In the arteries", t3_q_c: "In the veins", t3_q_d: "In the lymph vessels",

    t4_title: "Blood Types and Donation", t4_text: "Based on proteins in the blood, there are 4 main blood types: A, B, AB, and O. An exact match is life-saving during transfusions.",
    t4_b1: "If someone gets the wrong blood, it clots (clumps together).", t4_b2: "Type O is the 'universal donor' (can give to anyone).", t4_b3: "Type AB is the 'universal recipient' (can receive from anyone).",
    t4_inst: "Put the words in order!",
    t4_w1: "Type", t4_w2: "O", t4_w3: "is", t4_w4: "the", t4_w5: "universal", t4_w6: "donor.",
    t4_q: "Which blood type can be given to all other blood types?", t4_q_a: "Type O", t4_q_b: "Type A", t4_q_c: "Type B", t4_q_d: "Type AB",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about blood circulation and vessels!",
    t5_b1: "Pulmonary loop: lungs (getting oxygen).", t5_b2: "Systemic loop: body (delivering oxygen).", t5_b3: "Arteries take blood away, veins bring it back.",
    t5_inst: "Which vessels carry blood away from the heart?", t5_gap_sentence2: "Blood is carried away from the heart by {gap}.",
    t5_c51: "arteries", t5_c52: "veins", t5_c53: "capillaries",
    t5_q: "Which statement is TRUE about veins?", t5_q_a: "They carry blood from the body back to the heart.", t5_q_b: "They originate directly from the heart.", t5_q_c: "They supply cells with oxygen.", t5_q_d: "They do not have any valves.",
  },
  de: {
    explorer_title: "Der Blutkreislauf",
    t1_title: "Der Lungenkreislauf", t1_text: "Unser Blutkreislauf besteht aus zwei großen Kreisläufen. Der Lungenkreislauf beginnt in der rechten Herzkammer und pumpt sauerstoffarmes Blut zur Lunge.",
    t1_b1: "In der Lunge gibt das Blut CO2 ab und nimmt Sauerstoff auf.", t1_b2: "Das frische, sauerstoffreiche Blut kehrt in den linken Vorhof zurück.", t1_b3: "Seine Hauptaufgabe ist die 'Erfrischung' des Blutes.",
    t1_inst: "Wohin pumpt das Herz das Blut im kleinen Kreislauf?", t1_gap_sentence: "Der Lungenkreislauf transportiert Blut zur {gap}.",
    t1_c1: "Lunge", t1_c2: "Gehirn", t1_c3: "Magen",
    t1_q: "Welches Blut kehrt aus der Lunge in den linken Vorhof zurück?", t1_q_a: "Sauerstoffreiches Blut", t1_q_b: "Kohlendioxidreiches Blut", t1_q_c: "Blutplasma ohne Zellen", t1_q_d: "Nährstoffreiches Blut",

    t2_title: "Der Körperkreislauf", t2_text: "Der Körperkreislauf beginnt in der linken Herzkammer. Er pumpt sauerstoffreiches Blut mit enormer Kraft zu jeder Zelle des Körpers.",
    t2_b1: "Das Blut gibt Sauerstoff an die Zellen ab und nimmt CO2 auf.", t2_b2: "Es nimmt auch Nährstoffe im Darm auf.", t2_b3: "Sauerstoffarmes Blut kehrt in den rechten Vorhof zurück.",
    t2_inst: "Lungenkreislauf oder Körperkreislauf? Sortiere!",
    t2_bucket_kis: "Lungenkreislauf", t2_bucket_nag: "Körperkreislauf",
    t2_item_k1: "Führt zur Lunge", t2_item_k2: "Startet rechte Kammer",
    t2_item_n1: "Führt in ganzen Körper", t2_item_n2: "Startet linke Kammer",
    t2_q: "Aus welcher Herzkammer beginnt der große Körperkreislauf?", t2_q_a: "Aus der linken Kammer", t2_q_b: "Aus der rechten Kammer", t2_q_c: "Aus dem rechten Vorhof", t2_q_d: "Aus dem linken Vorhof",

    t3_title: "Das Netz der Blutgefäße", t3_text: "Blut fließt in einem geschlossenen Röhrensystem. Es gibt drei Hauptarten, die an ihre Aufgaben angepasst sind.",
    t3_b1: "Arterien (Schlagadern): führen Blut vom Herzen weg (dicke, elastische Wände).", t3_b2: "Venen: führen Blut zum Herzen zurück (dünnere Wände, Venenklappen).", t3_b3: "Kapillaren (Haargefäße): hier findet der Stoffaustausch an den Zellen statt.",
    t3_inst: "Verbinde das Blutgefäß mit seiner Aufgabe!",
    t3_l1: "Arterie", t3_r1: "Führt Blut vom Herzen weg", t3_l2: "Vene", t3_r2: "Führt Blut zum Herzen zurück", t3_l3: "Kapillare", t3_r3: "Stoffaustausch an den Zellen",
    t3_q: "In welchen Gefäßen werden Sauerstoff und Nährstoffe an die Zellen abgegeben?", t3_q_a: "In den Kapillaren", t3_q_b: "In den Arterien", t3_q_c: "In den Venen", t3_q_d: "In den Lymphgefäßen",

    t4_title: "Blutgruppen und Blutspende", t4_text: "Anhand von Proteinen im Blut unterscheiden wir 4 Hauptblutgruppen: A, B, AB und 0 (Null). Bei Blutspenden ist die richtige Gruppe lebensrettend.",
    t4_b1: "Bekommt jemand falsches Blut, verklumpt es.", t4_b2: "Blutgruppe 0 ist der 'Universalspender' (kann jedem spenden).", t4_b3: "Blutgruppe AB ist der 'Universalempfänger' (kann von jedem empfangen).",
    t4_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t4_w1: "Blutgruppe", t4_w2: "Null", t4_w3: "ist", t4_w4: "der", t4_w5: "universelle", t4_w6: "Spender.",
    t4_q: "Welche Blutgruppe kann allen anderen Blutgruppen spenden?", t4_q_a: "Blutgruppe 0 (Null)", t4_q_b: "Blutgruppe A", t4_q_c: "Blutgruppe B", t4_q_d: "Blutgruppe AB",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über den Blutkreislauf und die Gefäße!",
    t5_b1: "Kleiner Kreislauf: Lunge (Sauerstoffaufnahme).", t5_b2: "Großer Kreislauf: Körper (Sauerstoffabgabe).", t5_b3: "Arterien vom Herzen weg, Venen zum Herzen hin.",
    t5_inst: "Durch welche Gefäße verlässt das Blut das Herz?", t5_gap_sentence2: "Das Blut wird durch {gap} vom Herzen weggeleitet.",
    t5_c51: "Arterien", t5_c52: "Venen", t5_c53: "Kapillaren",
    t5_q: "Welche Aussage über Venen ist WAHR?", t5_q_a: "Sie transportieren das Blut aus dem Körper zum Herzen zurück.", t5_q_b: "Sie beginnen direkt am Herzen.", t5_q_c: "Sie versorgen die Zellen direkt mit Sauerstoff.", t5_q_d: "Sie haben keine Klappen.",
  },
  ro: {
    explorer_title: "Sistemul Circulator",
    t1_title: "Mica Circulație (Pulmonară)", t1_text: "Circulația sângelui are două circuite principale. Mica circulație începe din ventriculul drept și duce sângele încărcat cu dioxid de carbon la plămâni.",
    t1_b1: "În plămâni, sângele eliberează CO2 și preia oxigen.", t1_b2: "Sângele proaspăt oxigenat se întoarce în atriul stâng.", t1_b3: "Scopul său este de a 'împrospăta' sângele.",
    t1_inst: "Unde pompează inima sângele în mica circulație?", t1_gap_sentence: "Mica circulație transportă sângele la {gap} pentru oxigen.",
    t1_c1: "plămâni", t1_c2: "creier", t1_c3: "stomac",
    t1_q: "Ce fel de sânge se întoarce de la plămâni în atriul stâng?", t1_q_a: "Sânge bogat în oxigen", t1_q_b: "Sânge bogat în dioxid de carbon", t1_q_c: "Plasmă fără celule", t1_q_d: "Sânge bogat în nutrienți",

    t2_title: "Marea Circulație (Sistemică)", t2_text: "Marea circulație începe din ventriculul stâng. Pompează sânge bogat în oxigen cu o forță uriașă pentru a ajunge la fiecare celulă.",
    t2_b1: "Sângele dă oxigen celulelor și preia CO2.", t2_b2: "Preia și nutrienți de la intestine.", t2_b3: "Sângele folosit se întoarce în atriul drept.",
    t2_inst: "Mica sau Marea Circulație? Sortează-le!",
    t2_bucket_kis: "Mica Circulație (Plămâni)", t2_bucket_nag: "Marea Circulație (Corp)",
    t2_item_k1: "Duce la plămâni", t2_item_k2: "Începe în ventriculul drept",
    t2_item_n1: "Duce la tot corpul", t2_item_n2: "Începe în ventriculul stâng",
    t2_q: "Din ce cameră a inimii începe marea circulație?", t2_q_a: "Din ventriculul stâng", t2_q_b: "Din ventriculul drept", t2_q_c: "Din atriul drept", t2_q_d: "Din atriul stâng",

    t3_title: "Rețeaua de Vase de Sânge", t3_text: "Sângele circulă într-o rețea închisă de tuburi. Există trei tipuri principale, construite pentru sarcinile lor.",
    t3_b1: "Artere: duc sângele de la inimă (pereți groși, elastici).", t3_b2: "Vene: aduc sângele înapoi la inimă (pereți mai subțiri, valve).", t3_b3: "Capilare: aici are loc schimbul de gaze și nutrienți la celule.",
    t3_inst: "Potrivește vasul de sânge cu funcția sa!",
    t3_l1: "Arteră", t3_r1: "Duce sângele de la inimă", t3_l2: "Venă", t3_r2: "Aduce sângele la inimă", t3_l3: "Capilar", t3_r3: "Schimb de substanțe la celule",
    t3_q: "În ce vase se dau oxigenul și nutrienții celulelor?", t3_q_a: "În capilare", t3_q_b: "În artere", t3_q_c: "În vene", t3_q_d: "În vasele limfatice",

    t4_title: "Grupe de Sânge și Donare", t4_text: "Pe baza proteinelor din sânge, există 4 grupe principale: A, B, AB și O (zero). O potrivire exactă salvează vieți la transfuzii.",
    t4_b1: "Dacă cineva primește sânge greșit, acesta se coagulează (se strânge).", t4_b2: "Grupa O este 'donatorul universal' (poate da oricui).", t4_b3: "Grupa AB este 'primitorul universal' (poate primi de la oricine).",
    t4_inst: "Pune cuvintele în ordine!",
    t4_w1: "Grupa", t4_w2: "O", t4_w3: "este", t4_w4: "donatorul", t4_w5: "universal", t4_w6: "general.",
    t4_q: "Care grupă de sânge poate fi donată tuturor celorlalte grupe?", t4_q_a: "Grupa O (Zero)", t4_q_b: "Grupa A", t4_q_c: "Grupa B", t4_q_d: "Grupa AB",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre circulația sângelui și vasele de sânge!",
    t5_b1: "Micul circuit: plămâni (preluare oxigen).", t5_b2: "Marele circuit: corp (predare oxigen).", t5_b3: "Arterele pleacă de la inimă, venele se întorc.",
    t5_inst: "Prin ce vase părăsește sângele inima?", t5_gap_sentence2: "Sângele este transportat de la inimă prin {gap}.",
    t5_c51: "artere", t5_c52: "vene", t5_c53: "capilare",
    t5_q: "Care afirmație este ADEVĂRATĂ despre vene?", t5_q_a: "Transportă sângele din corp înapoi la inimă.", t5_q_b: "Pornesc direct din inimă.", t5_q_c: "Furnizează oxigen celulelor direct.", t5_q_d: "Nu au niciun fel de valve.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <CirculationSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b3",
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
        { id: "kis", label: "t2_bucket_kis" },
        { id: "nag", label: "t2_bucket_nag" },
      ],
      items: [
        { text: "t2_item_k1", bucketId: "kis" },
        { text: "t2_item_n1", bucketId: "nag" },
        { text: "t2_item_k2", bucketId: "kis" },
        { text: "t2_item_n2", bucketId: "nag" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b3",
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
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6"], 
      correctOrder: [0, 1, 2, 3, 4, 5],
      instruction: "t4_inst",
      hint1: "t4_b2",
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
      hint1: "t5_b3",
      hint2: "t5_b1",
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
  icon: "🩸",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const CirculationExplorer = memo(function CirculationExplorer({
  color = "#BE123C", // Erős kárminpiros (Rose-700) az artériás vérre utalva
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
      explorerId="bio_k6_circulation" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default CirculationExplorer;
