"use client";
// ImmuneExplorer.tsx — Bio Island i7: Immunrendszer (K7)
// Topics: 1) Immunsejtek 2) Immunválasz 3) Védőoltások 4) Specifikus védekezés 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { ImmuneSystemSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEE2E2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="30" textAnchor="middle">🦠</text>
        <path d="M -10,0 L 20,0" stroke="#EF4444" strokeWidth="4" markerEnd="url(#arrow)" />
        <text x="50" y="10" fontSize="40" textAnchor="middle">💥</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-30" y="15" fontSize="45" textAnchor="middle">💉</text>
        <path d="M 10,0 L 40,0" stroke="#0284C7" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="60" y="15" fontSize="30" textAnchor="middle">🛡️</text>
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
        <text x="0" y="15" fontSize="40" textAnchor="middle">🛡️</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Az Immunrendszer",
    // T1: Immunsejtek (Label-diagram)
    t1_title: "A testünk katonái",
    t1_text: "Az immunrendszer feladata megvédeni a testet a kórokozóktól (baktériumok, vírusok). Különböző sejtek dolgoznak együtt a védelemben.",
    t1_b1: "Falósejtek: bekebelezik és megemésztik az idegen anyagokat.",
    t1_b2: "Nyiroksejtek (Limfociták): felismerik a specifikus ellenséget.",
    t1_b3: "Ellenanyagok: Y-alakú fehérjék, amik hatástalanítják a betolakodókat.",
    t1_inst: "Címkézd fel az immunrendszer szereplőit!",
    t1_area_phago: "Falósejt",
    t1_area_lympho: "Nyiroksejt",
    t1_area_antibody: "Ellenanyag",
    t1_area_pathogen: "Kórokozó",
    t1_q: "Melyik sejt 'eszi meg' szó szerint a baktériumokat?",
    t1_q_a: "A falósejt", t1_q_b: "A vörösvérsejt", t1_q_c: "A vérlemezke", t1_q_d: "Az idegsejt",

    // T2: Immunválasz
    t2_title: "Harc a betolakodók ellen",
    t2_text: "Amikor kórokozó jut a szervezetbe, beindul az immunválasz. A test riadót fúj, megindul a védekezés.",
    t2_b1: "Gyulladás: a terület vérellátása nő (pirosság, duzzanat).",
    t2_b2: "Láz: a magasabb hőmérséklet gátolja a baktériumok szaporodását.",
    t2_b3: "Genny: elpusztult falósejtek és kórokozók tömege.",
    t2_inst: "Melyik tünet segíti a védekezést?",
    t2_gap_sentence: "A {gap} segít elpusztítani a kórokozókat a magas hőmérséklettel.",
    t2_c1: "láz", t2_c2: "alvás", t2_c3: "evés",
    t2_q: "Mi a genny tulajdonképpen?",
    t2_q_a: "Elpusztult sejtek és kórokozók maradványa", t2_q_b: "Tiszta vérplazma", t2_q_c: "Vitaminraktár", t2_q_d: "Izomszövet",

    // T3: Védőoltások
    t3_title: "A megelőzés: Oltások",
    t3_text: "A védőoltások felkészítik az immunrendszert egy későbbi valódi fertőzésre. Két fő típusuk van.",
    t3_b1: "Aktív oltás: legyengített kórokozót kapunk, a test maga gyárt ellenanyagot.",
    t3_b2: "Passzív oltás: kész ellenanyagot kapunk (azonnali segítség).",
    t3_b3: "Emlékezősejtek: évekig 'emlékeznek' az ellenségre.",
    t3_inst: "Aktív vagy Passzív oltás? Válogasd szét!",
    t3_bucket_akt: "Aktív oltás",
    t3_bucket_pas: "Passzív oltás",
    t3_item_a1: "Legyengített kórokozó", t3_item_a2: "Saját ellenanyag-gyártás",
    t3_item_p1: "Kész ellenanyag", t3_item_p2: "Azonnali segítség",
    t3_q: "Hogyan működik az aktív védőoltás?",
    t3_q_a: "A testet saját ellenanyag termelésére készteti", t3_q_b: "Kipucolja a beleket", t3_q_c: "Lelkileg nyugtat meg", t3_q_d: "Vörösvérsejteket termel",

    // T4: Specifikus védekezés
    t4_title: "Célzott védelem",
    t4_text: "Míg a falósejtek mindent megesznek, ami idegen, a nyiroksejtek pontosan azonosítják a betolakodót az antigének alapján.",
    t4_b1: "Antigén: a kórokozó felszínén lévő egyedi jelzőmolekula.",
    t4_b2: "Az ellenanyag pontosan illeszkedik az antigénhez.",
    t4_b3: "Zár-kulcs kapcsolat: csak a megfelelő kulcs nyitja a zárat.",
    t4_inst: "Párosítsd a fogalmakat!",
    t4_l1: "Antigén", t4_r1: "A kórokozó 'rendszámtáblája'",
    t4_l2: "Ellenanyag", t4_r2: "A sejt által gyártott 'fegyver'",
    t4_l3: "Emlékezősejt", t4_r3: "Tárolja az ellenség képét",
    t4_q: "Mihez hasonlítható az ellenanyag és az antigén kapcsolata?",
    t4_q_a: "Zár és kulcs", t4_q_b: "Kalapács és szög", t4_q_c: "Víz és olaj", t4_q_d: "Tű és cérna",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Készen állsz megvédeni a várad? Ellenőrizzük a tudást!",
    t5_b1: "Falósejtek és nyiroksejtek a fő katonák.",
    t5_b2: "Az ellenanyagok specifikusak.",
    t5_b3: "Az oltás életmentő védekezési módszer.",
    t5_inst: "Miket termelnek a nyiroksejtek a vírusok ellen?",
    t5_gap_sentence2: "A nyiroksejtek speciális {gap} gyártanak a védelemhez.",
    t5_c51: "ellenanyagokat", t5_c52: "cukrokat", t5_c53: "hormonokat",
    t5_q: "Melyik állítás IGAZ az immunrendszerre?",
    t5_q_a: "Képes felismerni és megjegyezni a kórokozókat.", t5_q_b: "Csak akkor működik, ha fáj valamink.", t5_q_c: "A szívben termeli az oxigént.", t5_q_d: "A csontok mozgatásáért felelős.",
  },
  en: {
    explorer_title: "The Immune System",
    t1_title: "Body's Soldiers", t1_text: "The immune system's job is to protect the body from pathogens. Different cells work together for defense.",
    t1_b1: "Phagocytes: engulf and digest foreign materials.", t1_b2: "Lymphocytes: recognize specific enemies.", t1_b3: "Antibodies: Y-shaped proteins that neutralize invaders.",
    t1_inst: "Label the players of the immune system!",
    t1_area_phago: "Phagocyte", t1_area_lympho: "Lymphocyte", t1_area_antibody: "Antibody", t1_area_pathogen: "Pathogen",
    t1_q: "Which cell literally 'eats' bacteria?", t1_q_a: "Phagocyte", t1_q_b: "Red blood cell", t1_q_c: "Platelet", t1_q_d: "Neuron",

    t2_title: "Immune Response", t2_text: "When a pathogen enters, the immune response starts. The body sounds an alarm.",
    t2_b1: "Inflammation: blood flow increases (redness, swelling).", t2_b2: "Fever: higher temperature inhibits bacterial growth.", t2_b3: "Pus: mass of dead phagocytes and pathogens.",
    t2_inst: "Which symptom helps the defense?", t2_gap_sentence: "{gap} helps kill pathogens with high temperature.",
    t2_c1: "Fever", t2_c2: "Sleep", t2_c3: "Eating",
    t2_q: "What is pus actually?", t2_q_a: "Remnants of dead cells and pathogens", t2_q_b: "Pure plasma", t2_q_c: "Vitamin storage", t2_q_d: "Muscle tissue",

    t3_title: "Prevention: Vaccines", t3_text: "Vaccines prepare the immune system for a future infection. There are two main types.",
    t3_b1: "Active vaccine: contains weakened pathogens, body makes its own antibodies.", t3_b2: "Passive vaccine: ready-made antibodies (immediate help).", t3_b3: "Memory cells: 'remember' the enemy for years.",
    t3_inst: "Active or Passive vaccine? Sort them!",
    t3_bucket_akt: "Active vaccine", t3_bucket_pas: "Passive vaccine",
    t3_item_a1: "Weakened pathogen", t3_item_a2: "Body makes antibodies",
    t3_item_p1: "Ready-made antibodies", t3_item_p2: "Immediate help",
    t3_q: "How does an active vaccine work?",
    t3_q_a: "It triggers the body to produce its own antibodies", t3_q_b: "It cleans the intestines", t3_q_c: "It calms the mind", t3_q_d: "It makes red blood cells",

    t4_title: "Specific Defense", t4_text: "While phagocytes eat everything foreign, lymphocytes identify invaders exactly using antigens.",
    t4_b1: "Antigen: unique marker molecule on the pathogen surface.", t4_b2: "Antibodies fit antigens exactly.", t4_b3: "Lock-and-key relationship.",
    t4_inst: "Match the concepts!",
    t4_l1: "Antigen", t4_r1: "The pathogen's 'license plate'",
    t4_l2: "Antibody", t4_r2: "The 'weapon' produced by the cell",
    t4_l3: "Memory cell", t4_r3: "Stores the enemy's image",
    t4_q: "What is the antibody-antigen relationship like?",
    t4_q_a: "Lock and key", t4_q_b: "Hammer and nail", t4_q_c: "Water and oil", t4_q_d: "Needle and thread",

    t5_title: "Summary Quiz", t5_text: "Ready to defend your castle?",
    t5_b1: "Phagocytes and lymphocytes are the main soldiers.", t5_b2: "Antibodies are specific.", t5_b3: "Vaccination is a life-saving method.",
    t5_inst: "What do lymphocytes produce against viruses?", t5_gap_sentence2: "Lymphocytes produce special {gap} for defense.",
    t5_c51: "antibodies", t5_c52: "sugars", t5_c53: "hormones",
    t5_q: "Which statement is TRUE about the immune system?",
    t5_q_a: "It can recognize and remember pathogens.", t5_q_b: "It only works when we are in pain.", t5_q_c: "It produces oxygen in the heart.", t5_q_d: "It's responsible for moving bones.",
  },
  de: {
    explorer_title: "Das Immunsystem",
    t1_title: "Soldaten des Körpers", t1_text: "Das Immunsystem schützt den Körper vor Krankheitserregern. Verschiedene Zellen arbeiten zusammen.",
    t1_b1: "Fresszellen: umschließen und verdauen Fremdstoffe.", t1_b2: "Lymphozyten: erkennen spezifische Feinde.", t1_b3: "Antikörper: Y-förmige Proteine, die Eindringlinge ausschalten.",
    t1_inst: "Beschrifte die Akteure des Immunsystems!",
    t1_area_phago: "Fresszelle", t1_area_lympho: "Lymphozyt", t1_area_antibody: "Antikörper", t1_area_pathogen: "Erreger",
    t1_q: "Welche Zelle 'frisst' Bakterien buchstäblich?", t1_q_a: "Die Fresszelle", t1_q_b: "Rotes Blutkörperchen", t1_q_c: "Blutplättchen", t1_q_d: "Nervenzelle",

    t2_title: "Immunantwort", t2_text: "Dringt ein Erreger ein, startet die Immunantwort. Der Körper schlägt Alarm.",
    t2_b1: "Entzündung: Durchblutung steigt (Rötung, Schwellung).", t2_b2: "Fieber: höhere Temperatur hemmt Bakterienwachstum.", t2_b3: "Eiter: tote Fresszellen und Erreger.",
    t2_inst: "Welches Symptom hilft bei der Abwehr?", t2_gap_sentence: "{gap} hilft durch Hitze, Erreger zu töten.",
    t2_c1: "Fieber", t2_c2: "Schlaf", t2_c3: "Essen",
    t2_q: "Was ist Eiter eigentlich?", t2_q_a: "Reste toter Zellen und Erreger", t2_q_b: "Reines Plasma", t2_q_c: "Vitaminspeicher", t2_q_d: "Muskelgewebe",

    t3_title: "Vorsorge: Impfungen", t3_text: "Impfungen bereiten das System auf Infektionen vor. Es gibt zwei Arten.",
    t3_b1: "Aktive Impfung: abgeschwächte Erreger, Körper macht selbst Antikörper.", t3_b2: "Passive Impfung: fertige Antikörper (Soforthilfe).", t3_b3: "Gedächtniszellen: 'erinnern' sich jahrelang.",
    t3_inst: "Aktiv oder Passiv? Sortiere!",
    t3_bucket_akt: "Aktive Impfung", t3_bucket_pas: "Passive Impfung",
    t3_item_a1: "Abgeschwächter Erreger", t3_item_a2: "Eigene Antikörperbildung",
    t3_item_p1: "Fertige Antikörper", t3_item_p2: "Soforthilfe",
    t3_q: "Wie wirkt die aktive Impfung?",
    t3_q_a: "Sie regt den Körper zur eigenen Antikörperbildung an", t3_q_b: "Sie reinigt den Darm", t3_q_c: "Sie beruhigt den Geist", t3_q_d: "Sie macht rote Blutzellen",

    t4_title: "Spezifische Abwehr", t4_text: "Während Fresszellen alles Fremde fressen, identifizieren Lymphozyten Erreger genau über Antigene.",
    t4_b1: "Antigen: einzigartiges Molekül auf dem Erreger.", t4_b2: "Antikörper passen genau zum Antigen.", t4_b3: "Schlüssel-Schloss-Prinzip.",
    t4_inst: "Verbinde die Begriffe!",
    t4_l1: "Antigen", t4_r1: "Das 'Kennzeichen' des Erregers",
    t4_l2: "Antikörper", t4_r2: "Die gebaute 'Waffe'",
    t4_l3: "Gedächtniszelle", t4_r3: "Speichert das Bild des Feindes",
    t4_q: "Wie nennt man die Verbindung von Antikörper und Antigen?",
    t4_q_a: "Schlüssel-Schloss-Prinzip", t4_q_b: "Hammer und Nagel", t4_q_c: "Wasser und Öl", t4_q_d: "Nadel und Faden",

    t5_title: "Zusammenfassung", t5_text: "Bereit für den Abwehr-Check?",
    t5_b1: "Fress- und Lymphzellen sind die Soldaten.", t5_b2: "Antikörper sind spezifisch.", t5_b3: "Impfung ist lebensrettend.",
    t5_inst: "Was produzieren Lymphozyten gegen Viren?", t5_gap_sentence2: "Lymphozyten bilden spezielle {gap}.",
    t5_c51: "Antikörper", t5_c52: "Zucker", t5_c53: "Hormone",
    t5_q: "Was ist WAHR über das Immunsystem?",
    t5_q_a: "Es kann Erreger erkennen und sich an sie erinnern.", t5_q_b: "Es arbeitet nur bei Schmerzen.", t5_q_c: "Es macht Sauerstoff im Herz.", t5_q_d: "Es bewegt die Knochen.",
  },
  ro: {
    explorer_title: "Sistemul Imunitar",
    t1_title: "Soldații corpului", t1_text: "Rolul sistemului imunitar este de a proteja corpul de agenți patogeni. Diferite celule colaborează.",
    t1_b1: "Fagocite: înglobează și digeră materialele străine.", t1_b2: "Limfocite: recunosc inamici specifici.", t1_b3: "Anticorpi: proteine în formă de Y care neutralizează invadatorii.",
    t1_inst: "Etichetează actorii sistemului imunitar!",
    t1_area_phago: "Fagocită", t1_area_lympho: "Limfocită", t1_area_antibody: "Anticorp", t1_area_pathogen: "Agent patogen",
    t1_q: "Care celulă 'mănâncă' la propriu bacteriile?", t1_q_a: "Fagocita", t1_q_b: "Globula roșie", t1_q_c: "Trombocita", t1_q_d: "Neuronul",

    t2_title: "Răspunsul Imun", t2_text: "Când un agent patogen intră în corp, pornește răspunsul imun.",
    t2_b1: "Inflamație: fluxul de sânge crește (roșeață, umflare).", t2_b2: "Febră: temperatura ridicată oprește înmulțirea bacteriilor.", t2_b3: "Puroi: masă de fagocite și agenți patogeni morți.",
    t2_inst: "Ce simptom ajută apărarea?", t2_gap_sentence: "{gap} ajută la uciderea agenților patogeni prin căldură.",
    t2_c1: "Febra", t2_c2: "Somnul", t2_c3: "Mâncatul",
    t2_q: "Ce este puroiul de fapt?", t2_q_a: "Rămășițe de celule moarte și agenți patogeni", t2_q_b: "Plasmă pură", t2_q_c: "Depozit de vitamine", t2_q_d: "Țesut muscular",

    t3_title: "Prevenție: Vaccinuri", t3_text: "Vaccinurile pregătesc sistemul imunitar pentru o infecție viitoare.",
    t3_b1: "Vaccin activ: conține agenți patogeni slăbiți, corpul face singur anticorpi.", t3_b2: "Vaccin pasiv: anticorpi gata făcuți (ajutor imediat).", t3_b3: "Celule cu memorie: 'țin minte' inamicul ani de zile.",
    t3_inst: "Vaccin activ sau pasiv? Sortează-le!",
    t3_bucket_akt: "Vaccin activ", t3_bucket_pas: "Vaccin pasiv",
    t3_item_a1: "Agent patogen slăbit", t3_item_a2: "Producție proprie de anticorpi",
    t3_item_p1: "Anticorpi gata făcuți", t3_item_p2: "Ajutor imediat",
    t3_q: "Cum funcționează un vaccin activ?",
    t3_q_a: "Determină corpul să producă proprii anticorpi", t3_q_b: "Curăță intestinele", t3_q_c: "Calmează mintea", t3_q_d: "Produce globule roșii",

    t4_title: "Apărarea Specifică", t4_text: "În timp ce fagocitele mănâncă tot ce e străin, limfocitele identifică invadatorii prin antigene.",
    t4_b1: "Antigen: moleculă unică de marcaj pe suprafața patogenului.", t4_b2: "Anticorpii se potrivesc exact pe antigene.", t4_b3: "Relație cheie-broască.",
    t4_inst: "Potrivește conceptele!",
    t4_l1: "Antigen", t4_r1: "Numărul de înmatriculare al patogenului",
    t4_l2: "Anticorp", t4_r2: "Arma produsă de celulă",
    t4_l3: "Celulă cu memorie", t4_r3: "Stochează imaginea inamicului",
    t4_q: "Cum este relația anticorp-antigen?",
    t4_q_a: "Cheie și broască", t4_q_b: "Ciocan și cui", t4_q_c: "Apă și ulei", t4_q_d: "Ac și ață",

    t5_title: "Recapitulare", t5_text: "Ești gata să îți aperi castelul?",
    t5_b1: "Fagocitele și limfocitele sunt soldații principali.", t5_b2: "Anticorpii sunt specifici.", t5_b3: "Vaccinarea este o metodă vitală de apărare.",
    t5_inst: "Ce produc limfocitele împotriva virusurilor?", t5_gap_sentence2: "Limfocitele produc {gap} speciale pentru apărare.",
    t5_c51: "anticorpi", t5_c52: "zaharuri", t5_c53: "hormoni",
    t5_q: "Care afirmație este ADEVĂRATĂ despre sistemul imunitar?",
    t5_q_a: "Poate recunoaște și memora agenții patogeni.", t5_q_b: "Funcționează doar când avem dureri.", t5_q_c: "Produce oxigen în inimă.", t5_q_d: "Este responsabil de mișcarea oaselor.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <ImmuneSystemSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "phago",  x: 25, y: 55, label: "t1_area_phago" },
        { id: "lympho", x: 75, y: 55, label: "t1_area_lympho" },
        { id: "anti",   x: 50, y: 30, label: "t1_area_antibody" },
        { id: "path",   x: 50, y: 75, label: "t1_area_pathogen" },
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
      hint1: "t2_b2",
      hint2: "t2_b1",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "akt", label: "t3_bucket_akt" },
        { id: "pas", label: "t3_bucket_pas" },
      ],
      items: [
        { text: "t3_item_a1", bucketId: "akt" },
        { text: "t3_item_p1", bucketId: "pas" },
        { text: "t3_item_a2", bucketId: "akt" },
        { text: "t3_item_p2", bucketId: "pas" },
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
    svg: (lang) => <ImmuneSystemSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
      ],
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
  icon: "🛡️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ImmuneExplorer = memo(function ImmuneExplorer({
  color = "#6366F1", // Indigo-500 a védekezéshez
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
      explorerId="bio_k7_immune" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default ImmuneExplorer;
