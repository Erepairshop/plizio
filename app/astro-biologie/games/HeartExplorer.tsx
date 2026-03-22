"use client";
// HeartExplorer — Island: Heart & Blood (Herz & Blut) Grade 6
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Blood components, heart structure, blood vessels, blood types

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Blood Components
    r1_title: "What's in Your Blood?",
    r1_text: "Blood is made of four main components that work together to keep you healthy.",
    r1_fact1: "Red blood cells (RBCs) carry oxygen to all your organs",
    r1_fact2: "White blood cells (WBCs) fight infections and pathogens",
    r1_fact3: "Platelets are tiny cell fragments that help blood clot and stop bleeding",
    r1_fact4: "Plasma is the liquid part that carries all components throughout your body",

    // Round 2: The Heart
    r2_title: "The Heart: Your Body's Pump",
    r2_text: "The heart is a muscular organ with four chambers that pumps blood throughout your body.",
    r2_fact1: "Right atrium receives oxygen-poor blood from the body",
    r2_fact2: "Right ventricle pumps blood to the lungs to pick up oxygen",
    r2_fact3: "Left atrium receives oxygen-rich blood from the lungs",
    r2_fact4: "Left ventricle pumps oxygen-rich blood out to the whole body",

    // Round 3: Blood Vessels
    r3_title: "Blood Vessels: The Transportation Network",
    r3_text: "Three types of blood vessels transport blood throughout your body.",
    r3_fact1: "Arteries have thick, muscular walls and carry oxygen-rich blood away from the heart",
    r3_fact2: "Veins have thin walls with valves and return oxygen-poor blood to the heart",
    r3_fact3: "Capillaries are tiny blood vessels where gas exchange happens with body cells",
    r3_fact4: "This network forms a complete loop throughout your entire body",

    // Round 4: Blood Types
    r4_title: "Blood Types & Compatibility",
    r4_text: "There are four main blood types based on proteins on red blood cell surfaces.",
    r4_fact1: "Type A has A proteins; Type B has B proteins; Type AB has both A & B",
    r4_fact2: "Type O has no A or B proteins and is the universal donor",
    r4_fact3: "The Rh factor (+ or -) is another protein that can be present or absent",
    r4_fact4: "Knowing your blood type is important for safe blood transfusions",

    // Round 5: Quiz
    r5_title: "Blood & Heart Review",

    // Quiz Questions (3 questions)
    q1_q: "What is the main function of red blood cells?",
    q1_oxygen: "Carry oxygen",
    q1_infection: "Fight infections",
    q1_clot: "Form blood clots",
    q1_energy: "Store energy",

    q2_q: "Which chamber pumps oxygen-rich blood to the entire body?",
    q2_ra: "Right atrium",
    q2_rv: "Right ventricle",
    q2_la: "Left atrium",
    q2_lv: "Left ventricle",

    q3_q: "Which blood type is the universal donor?",
    q3_a: "Type A",
    q3_b: "Type B",
    q3_ab: "Type AB",
    q3_o: "Type O",

    // Round 1 MCQ
    r1_q: "Which blood component fights infections?",
    r1_rbc: "Red blood cells",
    r1_wbc: "White blood cells",
    r1_platelets: "Platelets",
    r1_plasma: "Plasma",

    // Round 2 MCQ
    r2_q: "Why does the right ventricle pump blood?",
    r2_lungs: "To send it to the lungs for oxygen",
    r2_body: "To send it to the entire body",
    r2_heart: "To keep the heart beating",
    r2_brain: "To send it to the brain",

    // Round 3 MCQ
    r3_q: "Where does gas exchange between blood and cells happen?",
    r3_arteries: "In arteries",
    r3_veins: "In veins",
    r3_capillaries: "In capillaries",
    r3_heart: "In the heart",

    // Round 4 MCQ
    r4_q: "What determines whether you have a positive or negative blood type?",
    r4_ab: "A and B proteins",
    r4_rh: "Rh factor protein",
    r4_oxygen: "Oxygen levels",
    r4_plasma: "Plasma type",
  },
  de: {
    r1_title: "Was ist in deinem Blut?",
    r1_text: "Blut besteht aus vier Hauptkomponenten, die zusammenarbeiten, um dich gesund zu halten.",
    r1_fact1: "Rote Blutkörperchen (RBKs) transportieren Sauerstoff zu allen deinen Organen",
    r1_fact2: "Weiße Blutkörperchen (WBKs) bekämpfen Infektionen und Krankheitserreger",
    r1_fact3: "Blutplättchen sind kleine Zellfragmente, die beim Blutgerinnen helfen und Blutungen stoppen",
    r1_fact4: "Plasma ist der flüssige Teil, der alle Komponenten durch deinen Körper trägt",

    r2_title: "Das Herz: Die Pumpe deines Körpers",
    r2_text: "Das Herz ist ein Muskelorgan mit vier Kammern, das Blut durch deinen Körper pumpt.",
    r2_fact1: "Der rechte Vorhof erhält sauerstoffarmes Blut vom Körper",
    r2_fact2: "Die rechte Herzkammer pumpt Blut zur Lunge, um Sauerstoff aufzunehmen",
    r2_fact3: "Der linke Vorhof erhält sauerstoffreiches Blut von den Lungen",
    r2_fact4: "Die linke Herzkammer pumpt sauerstoffreiches Blut in den ganzen Körper",

    r3_title: "Blutgefäße: Das Transportnetzwerk",
    r3_text: "Drei Arten von Blutgefäßen transportieren Blut durch deinen Körper.",
    r3_fact1: "Arterien haben dicke, muskulöse Wände und transportieren sauerstoffreiches Blut vom Herzen weg",
    r3_fact2: "Venen haben dünne Wände mit Ventilen und führen sauerstoffarmes Blut zum Herzen zurück",
    r3_fact3: "Kapillaren sind winzige Blutgefäße, wo der Gasaustausch mit Körperzellen stattfindet",
    r3_fact4: "Dieses Netzwerk bildet eine vollständige Schleife durch deinen gesamten Körper",

    r4_title: "Blutgruppen & Kompatibilität",
    r4_text: "Es gibt vier Hauptblutgruppen basierend auf Proteinen auf der Oberfläche roter Blutkörperchen.",
    r4_fact1: "Typ A hat A-Proteine; Typ B hat B-Proteine; Typ AB hat sowohl A als auch B",
    r4_fact2: "Typ O hat keine A- oder B-Proteine und ist der universelle Spender",
    r4_fact3: "Der Rh-Faktor (+ oder -) ist ein weiteres Protein, das vorhanden sein kann oder nicht",
    r4_fact4: "Deine Blutgruppe zu kennen ist wichtig für sichere Bluttransfusionen",

    r5_title: "Blut & Herz Wiederholung",

    q1_q: "Was ist die Hauptfunktion roter Blutkörperchen?",
    q1_oxygen: "Sauerstoff transportieren",
    q1_infection: "Infektionen bekämpfen",
    q1_clot: "Blutgerinsel bilden",
    q1_energy: "Energie speichern",

    q2_q: "Welche Herzkammer pumpt sauerstoffreiches Blut in den ganzen Körper?",
    q2_ra: "Rechter Vorhof",
    q2_rv: "Rechte Herzkammer",
    q2_la: "Linker Vorhof",
    q2_lv: "Linke Herzkammer",

    q3_q: "Welche Blutgruppe ist der universelle Spender?",
    q3_a: "Typ A",
    q3_b: "Typ B",
    q3_ab: "Typ AB",
    q3_o: "Typ O",

    r1_q: "Welche Blutkomponente bekämpft Infektionen?",
    r1_rbc: "Rote Blutkörperchen",
    r1_wbc: "Weiße Blutkörperchen",
    r1_platelets: "Blutplättchen",
    r1_plasma: "Plasma",

    r2_q: "Warum pumpt die rechte Herzkammer Blut?",
    r2_lungs: "Um es zur Lunge zur Sauerstoffaufnahme zu schicken",
    r2_body: "Um es zum ganzen Körper zu schicken",
    r2_heart: "Um das Herz schlagen zu halten",
    r2_brain: "Um es zum Gehirn zu schicken",

    r3_q: "Wo findet der Gasaustausch zwischen Blut und Zellen statt?",
    r3_arteries: "In Arterien",
    r3_veins: "In Venen",
    r3_capillaries: "In Kapillaren",
    r3_heart: "Im Herzen",

    r4_q: "Was bestimmt, ob du eine positive oder negative Blutgruppe hast?",
    r4_ab: "A- und B-Proteine",
    r4_rh: "Rh-Faktor-Protein",
    r4_oxygen: "Sauerstoffspiegel",
    r4_plasma: "Plasma-Typ",
  },
  hu: {
    r1_title: "Mi van a vérben?",
    r1_text: "A vér négy fő összetevőből áll, amelyek együttesen tartanak téged egészségesnek.",
    r1_fact1: "A vörösvérsejtek (VVS) oxigént szállítanak az összes szervhez",
    r1_fact2: "A fehérvérsejtek (FVS) fertőzéseket és kórokozókat küzdenek",
    r1_fact3: "A trombociták apró sejtfragmentumok, amelyek segítenek a vér alvadásában",
    r1_fact4: "A vérplazma a folyékony rész, amely az összes összetevőt szállítja a testben",

    r2_title: "A szív: Tested szivattyúja",
    r2_text: "A szív egy izomszerv négy kamrával, amely vért pumpál az egész test körül.",
    r2_fact1: "A jobb pitvar oxigénszegény vért fogad a testből",
    r2_fact2: "A jobb kamra vért pumpál a tüdőhöz oxigén felvételéhez",
    r2_fact3: "A bal pitvar oxigénben gazdag vért fogad a tüdőből",
    r2_fact4: "A bal kamra oxigénben gazdag vért pumpál az egész testbe",

    r3_title: "Vérkeringési rendszer: A szállítási hálózat",
    r3_text: "Három típusú vérszállító edény szállít vért az egész testen.",
    r3_fact1: "Az artériák vastag, izmos falakkal rendelkeznek és oxigénben gazdag vért szállítanak el a szívtől",
    r3_fact2: "A vénák vékony falakkal és szelepekkel rendelkeznek, és oxigénszegény vért szállítanak vissza a szívhez",
    r3_fact3: "A kapillárisok apró vérszállító edények, ahol a gázcsere megtörténik a testsejtekkel",
    r3_fact4: "Ez a hálózat egy teljes kört alkot az egész tested körül",

    r4_title: "Vércsoportok & Kompatibilitás",
    r4_text: "Négy fő vércsoport van a vörösvérsejtek felszínén lévő fehérjék alapján.",
    r4_fact1: "Az A típus A fehérjékkel rendelkezik; a B típus B fehérjékkel; az AB típus mindkettővel",
    r4_fact2: "Az O típus nincs A vagy B fehérjével, és az univerzális donor",
    r4_fact3: "Az Rh faktor (+ vagy -) egy másik fehérje, amely jelen lehet vagy hiányozhat",
    r4_fact4: "A vércsoportod ismerete fontos a biztonságos vérátömlesztéshez",

    r5_title: "Vér & Szív Áttekintés",

    q1_q: "Mi a vörösvérsejtek fő funkciója?",
    q1_oxygen: "Oxigén szállítása",
    q1_infection: "Fertőzések leküzdése",
    q1_clot: "Vérrögök képzése",
    q1_energy: "Energia tárolása",

    q2_q: "Melyik szívkamra pumpál oxigénben gazdag vért az egész testbe?",
    q2_ra: "Jobb pitvar",
    q2_rv: "Jobb kamra",
    q2_la: "Bal pitvar",
    q2_lv: "Bal kamra",

    q3_q: "Melyik vércsoport az univerzális donor?",
    q3_a: "A típus",
    q3_b: "B típus",
    q3_ab: "AB típus",
    q3_o: "O típus",

    r1_q: "Melyik vérkomponens küzd az infekciók ellen?",
    r1_rbc: "Vörösvérsejtek",
    r1_wbc: "Fehérvérsejtek",
    r1_platelets: "Trombociták",
    r1_plasma: "Plazma",

    r2_q: "Miért pumpál a jobb kamra vért?",
    r2_lungs: "Hogy a tüdőhöz küldje oxigén felvételéhez",
    r2_body: "Hogy az egész testbe küldje",
    r2_heart: "Hogy a szívet verítékezzen tartsa",
    r2_brain: "Hogy az agyba küldje",

    r3_q: "Hol történik a gázcsere a vér és a sejtek között?",
    r3_arteries: "Az artériákban",
    r3_veins: "A vénákban",
    r3_capillaries: "A kapillárisokban",
    r3_heart: "A szívben",

    r4_q: "Mi határozza meg, hogy pozitív vagy negatív vércsoportod van-e?",
    r4_ab: "A és B fehérjék",
    r4_rh: "Rh faktor fehérje",
    r4_oxygen: "Oxigénszint",
    r4_plasma: "Plazma típusa",
  },
  ro: {
    r1_title: "Ce este în sângele tău?",
    r1_text: "Sângele este alcătuit din patru componente principale care lucrează împreună pentru a te menține sănătos.",
    r1_fact1: "Celulele roșii de sânge (CRS) transportă oxigenul la toate organele tale",
    r1_fact2: "Celulele albe de sânge (CAS) luptă împotriva infecțiilor și patogenilor",
    r1_fact3: "Trombocitele sunt mici fragmente celulare care ajută la coagularea sângelui",
    r1_fact4: "Plasma este partea lichidă care transportă toate componentele prin corp",

    r2_title: "Inima: Pompa corpului tău",
    r2_text: "Inima este un organ muscular cu patru camere care pompează sânge prin întreg corpul.",
    r2_fact1: "Atriul drept primește sânge sărac în oxigen din corp",
    r2_fact2: "Ventriculul drept pompează sânge spre plămâni pentru a ridica oxigenul",
    r2_fact3: "Atriul stâng primește sânge bogat în oxigen din plămâni",
    r2_fact4: "Ventriculul stâng pompează sânge bogat în oxigen în tot corpul",

    r3_title: "Vase de sânge: Rețeaua de transport",
    r3_text: "Trei tipuri de vase de sânge transportă sânge prin întreg corpul.",
    r3_fact1: "Arterele au pereți groși și musculari și transportă sânge bogat în oxigen departe de inimă",
    r3_fact2: "Venele au pereți subțiri cu valve și returnează sânge sărac în oxigen la inimă",
    r3_fact3: "Capilarii sunt vase de sânge minuscule unde au loc schimburi de gaze cu celulele corpului",
    r3_fact4: "Această rețea formează o buclă completă prin întreg corpul",

    r4_title: "Grupele de sânge & Compatibilitate",
    r4_text: "Există patru grupe de sânge principale pe baza proteinelor de pe suprafața celulelor roșii de sânge.",
    r4_fact1: "Tipul A are proteine A; Tipul B are proteine B; Tipul AB are atât A cât și B",
    r4_fact2: "Tipul O nu are proteine A sau B și este donator universal",
    r4_fact3: "Factorul Rh (+ sau -) este o altă proteină care poate fi prezentă sau absentă",
    r4_fact4: "A-ți cunoaște grupa de sânge este important pentru transfuzii sigure",

    r5_title: "Sânge & Inimă Recapitulare",

    q1_q: "Care este funcția principală a celulelor roșii de sânge?",
    q1_oxygen: "Transport oxigen",
    q1_infection: "Lupta împotriva infecțiilor",
    q1_clot: "Formează cheaguri de sânge",
    q1_energy: "Depozitare energie",

    q2_q: "Care cameră pompează sânge bogat în oxigen în tot corpul?",
    q2_ra: "Atriul drept",
    q2_rv: "Ventriculul drept",
    q2_la: "Atriul stâng",
    q2_lv: "Ventriculul stâng",

    q3_q: "Care este grupa de sânge donator universal?",
    q3_a: "Tipul A",
    q3_b: "Tipul B",
    q3_ab: "Tipul AB",
    q3_o: "Tipul O",

    r1_q: "Care componentă de sânge luptă împotriva infecțiilor?",
    r1_rbc: "Celule roșii de sânge",
    r1_wbc: "Celule albe de sânge",
    r1_platelets: "Trombocite",
    r1_plasma: "Plasma",

    r2_q: "De ce pompează ventriculul drept sânge?",
    r2_lungs: "Pentru a-l trimite la plămâni pentru ridicarea oxigenului",
    r2_body: "Pentru a-l trimite în tot corpul",
    r2_heart: "Pentru a ține inima bătând",
    r2_brain: "Pentru a-l trimite la creier",

    r3_q: "Unde are loc schimbul de gaze între sânge și celule?",
    r3_arteries: "În artere",
    r3_veins: "În vene",
    r3_capillaries: "În capilari",
    r3_heart: "În inimă",

    r4_q: "Ce determină dacă ai grupa de sânge pozitivă sau negativă?",
    r4_ab: "Proteine A și B",
    r4_rh: "Proteina factorului Rh",
    r4_oxygen: "Niveluri de oxigen",
    r4_plasma: "Tip plasma",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS — viewBox="0 0 240 160", NO text inside
// ─────────────────────────────────────────────────────────────────────────────

const R1_BloodComponents = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Microscope view background */}
    <circle cx="120" cy="80" r="70" fill="#2a2a3e" stroke="#3b82f6" strokeWidth="2" />

    {/* Yellow liquid (plasma) */}
    <circle cx="120" cy="80" r="68" fill="rgba(255, 235, 100, 0.15)" />

    {/* Red blood cells - circles */}
    <circle cx="85" cy="50" r="8" fill="#e74c3c" opacity="0.8" />
    <circle cx="110" cy="45" r="8" fill="#e74c3c" opacity="0.8" />
    <circle cx="140" cy="55" r="8" fill="#e74c3c" opacity="0.8" />
    <circle cx="155" cy="75" r="8" fill="#e74c3c" opacity="0.8" />
    <circle cx="145" cy="100" r="8" fill="#e74c3c" opacity="0.8" />
    <circle cx="90" cy="110" r="8" fill="#e74c3c" opacity="0.8" />

    {/* White blood cells - larger blue blobs */}
    <circle cx="100" cy="75" r="10" fill="#3b82f6" opacity="0.7" />
    <circle cx="150" cy="85" r="10" fill="#3b82f6" opacity="0.7" />
    <circle cx="120" cy="115" r="10" fill="#3b82f6" opacity="0.7" />

    {/* Platelets - tiny dots */}
    <circle cx="75" cy="70" r="3" fill="#8b5cf6" opacity="0.8" />
    <circle cx="130" cy="75" r="3" fill="#8b5cf6" opacity="0.8" />
    <circle cx="165" cy="110" r="3" fill="#8b5cf6" opacity="0.8" />
    <circle cx="95" cy="90" r="3" fill="#8b5cf6" opacity="0.8" />
    <circle cx="125" cy="50" r="3" fill="#8b5cf6" opacity="0.8" />
  </svg>
);

const R2_HeartDiagram = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Outline of heart shape */}
    <path
      d="M 120 130 C 60 90, 40 70, 40 50 C 40 35, 50 25, 65 25 C 80 25, 95 35, 120 55 C 145 35, 160 25, 175 25 C 190 25, 200 35, 200 50 C 200 70, 180 90, 120 130 Z"
      fill="none"
      stroke="#e74c3c"
      strokeWidth="2"
    />

    {/* Right atrium (top right) - blue */}
    <rect x="130" y="35" width="35" height="30" fill="#3b82f6" opacity="0.6" rx="4" />

    {/* Right ventricle (bottom right) - light blue */}
    <rect x="130" y="75" width="35" height="35" fill="#60a5fa" opacity="0.5" rx="4" />

    {/* Left atrium (top left) - blue */}
    <rect x="75" y="35" width="35" height="30" fill="#3b82f6" opacity="0.6" rx="4" />

    {/* Left ventricle (bottom left) - dark red */}
    <rect x="75" y="75" width="35" height="35" fill="#dc2626" opacity="0.6" rx="4" />

    {/* Arrows showing blood flow */}
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="white" />
      </marker>
    </defs>

    {/* Flow arrows */}
    <path d="M 145 65 Q 145 70 145 75" stroke="white" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
    <path d="M 90 65 Q 90 70 90 75" stroke="white" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
    <path d="M 165 50 L 180 50" stroke="white" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
    <path d="M 75 50 L 60 50" stroke="white" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
  </svg>
);

const R3_BloodVessels = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Artery (left) - thick walls */}
    <g>
      <ellipse cx="50" cy="50" rx="25" ry="12" fill="#e74c3c" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="18" ry="8" fill="#dc2626" opacity="0.5" />
      <line x1="50" y1="42" x2="50" y2="58" stroke="white" strokeWidth="0.5" />
    </g>

    {/* Vein (right) - thin walls */}
    <g>
      <ellipse cx="190" cy="50" rx="20" ry="10" fill="#3b82f6" opacity="0.6" />
      <ellipse cx="190" cy="50" rx="15" ry="7" fill="#1e40af" opacity="0.5" />
      {/* Valve marks */}
      <line x1="185" y1="43" x2="185" y2="57" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
    </g>

    {/* Capillary (center) - very tiny */}
    <g>
      <line x1="100" y1="100" x2="140" y2="100" stroke="#8b5cf6" strokeWidth="2" opacity="0.7" />
      <circle cx="100" cy="100" r="2" fill="#c084fc" />
      <circle cx="140" cy="100" r="2" fill="#c084fc" />
    </g>

    {/* Labels area (visual only, no text) */}
    <text x="50" y="70" fontSize="10" fill="white/60" textAnchor="middle">Artery</text>
    <text x="190" y="70" fontSize="10" fill="white/60" textAnchor="middle">Vein</text>
    <text x="120" y="120" fontSize="10" fill="white/60" textAnchor="middle">Capillary</text>
  </svg>
);

const R4_BloodTypes = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Type A circle */}
    <circle cx="40" cy="60" r="25" fill="#ef4444" opacity="0.7" />
    <text x="40" y="65" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">A</text>
    <circle cx="40" cy="110" r="8" fill="white" />
    <text x="40" y="115" fontSize="10" fontWeight="bold" fill="black" textAnchor="middle">+</text>

    {/* Type B circle */}
    <circle cx="90" cy="60" r="25" fill="#3b82f6" opacity="0.7" />
    <text x="90" y="65" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">B</text>
    <circle cx="90" cy="110" r="8" fill="white" />
    <text x="90" y="115" fontSize="10" fontWeight="bold" fill="black" textAnchor="middle">-</text>

    {/* Type AB circle */}
    <circle cx="140" cy="60" r="25" fill="#8b5cf6" opacity="0.7" />
    <text x="140" y="65" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">AB</text>
    <circle cx="140" cy="110" r="8" fill="white" />
    <text x="140" y="115" fontSize="10" fontWeight="bold" fill="black" textAnchor="middle">+</text>

    {/* Type O circle */}
    <circle cx="190" cy="60" r="25" fill="#10b981" opacity="0.7" />
    <text x="190" y="65" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">O</text>
    <circle cx="190" cy="110" r="8" fill="white" />
    <text x="190" y="115" fontSize="10" fontWeight="bold" fill="black" textAnchor="middle">±</text>
  </svg>
);

const R5_ReviewIcon = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Heart outline */}
    <path
      d="M 120 140 C 60 100, 40 75, 40 55 C 40 40, 50 30, 65 30 C 80 30, 95 40, 120 60 C 145 40, 160 30, 175 30 C 190 30, 200 40, 200 55 C 200 75, 180 100, 120 140 Z"
      fill="#e74c3c"
      opacity="0.6"
    />

    {/* Checkmark inside */}
    <polyline
      points="100,80 110,95 140,65"
      stroke="white"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const HEART_EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => <R1_BloodComponents />,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => <R2_HeartDiagram />,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => <R3_BloodVessels />,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_arteries", "r3_veins", "r3_capillaries", "r3_heart"],
          answer: "r3_capillaries",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => <R4_BloodTypes />,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_ab", "r4_rh", "r4_oxygen", "r4_plasma"],
          answer: "r4_rh",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => <R5_ReviewIcon />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_oxygen", "q1_infection", "q1_clot", "q1_energy"],
          answer: "q1_oxygen",
        },
        {
          question: "q2_q",
          choices: ["q2_ra", "q2_rv", "q2_la", "q2_lv"],
          answer: "q2_lv",
        },
        {
          question: "q3_q",
          choices: ["q3_a", "q3_b", "q3_ab", "q3_o"],
          answer: "q3_o",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function HeartExplorer({ color = "#e74c3c", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={HEART_EXPLORER_DEF} color={color} lang={lang} onDone={onDone} />;
}
