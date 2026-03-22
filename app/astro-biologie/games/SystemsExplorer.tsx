"use client";
// SystemsExplorer — Island i9: Systems Biology (Systembbiologie) Grade 8
// Topics: Homeostasis, Metabolism, Body system integration, Organ system cooperation
// Teaching-first: R1-R4 info rounds, R5 quiz

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Homeostasis
    r1_title: "Homeostasis: Keeping Conditions Stable",
    r1_text: "Homeostasis is the process by which living organisms maintain a stable internal environment despite changes in the external world.",
    r1_fact1: "Body temperature: Thermoregulation keeps you at ~37°C (98.6°F) — sweating cools, shivering warms",
    r1_fact2: "Blood pH: Stays near 7.4 — kidneys and lungs work together to regulate acid-base balance",
    r1_fact3: "Blood glucose: Insulin (from pancreas) lowers it; glucagon raises it — keeping energy stable",
    r1_fact4: "Water balance: Kidneys adjust urine production to keep blood osmolarity constant",

    // Round 2: Metabolism Types
    r2_title: "Metabolism: Building & Breaking Down",
    r2_text: "Metabolism is all the chemical reactions that keep you alive. Two main types work together.",
    r2_fact1: "Anabolism: Building-up reactions (photosynthesis, protein synthesis, bone growth) — requires energy",
    r2_fact2: "Catabolism: Breaking-down reactions (digestion, cell respiration) — releases energy (ATP)",
    r2_fact3: "Basal metabolic rate (BMR): Energy your body needs just to maintain basic functions at rest",
    r2_fact4: "Exercise increases catabolism: Muscles burn glucose and fats to produce ATP for movement",

    // Round 3: Body System Integration
    r3_title: "How Systems Work Together",
    r3_text: "Your body is a coordinated team. The nervous, endocrine, and immune systems communicate constantly.",
    r3_fact1: "Nervous system (brain, spinal cord, nerves): Fast electrical signals — instant responses (reflex arc)",
    r3_fact2: "Endocrine system (glands, hormones): Slow chemical signals — long-term regulation (growth, metabolism)",
    r3_fact3: "Immune system (white blood cells, lymph): Defends against pathogens — works with lymphoid organs",
    r3_fact4: "Example: Stress response — nervous system releases epinephrine → heart rate ↑, blood pressure ↑",

    // Round 4: Organ System Cooperation
    r4_title: "Example: Exercise Calls All Systems",
    r4_text: "When you exercise, every major system springs into coordinated action to support muscle work.",
    r4_fact1: "Muscular system: Contracts with ATP energy to generate force and movement",
    r4_fact2: "Cardiovascular system: Heart pumps faster, blood vessels dilate to deliver O₂ and glucose to muscles",
    r4_fact3: "Respiratory system: Breathing deepens to increase oxygen uptake and CO₂ removal",
    r4_fact4: "Nervous & endocrine: Activate fight-or-flight response; regulate lactate, body temp, water loss (sweat)",

    // Round 5: Quiz
    r5_title: "Systems Biology Review",

    // Quiz questions
    q1_q: "What is homeostasis?",
    q1_a: "The process of digesting food",
    q1_b: "Maintaining a stable internal environment despite external changes",
    q1_c: "The movement of molecules across cell membranes",
    q1_d: "The breakdown of glucose in mitochondria",

    q2_q: "Which process builds up molecules and requires energy?",
    q2_a: "Catabolism",
    q2_b: "Respiration",
    q2_c: "Anabolism",
    q2_d: "Digestion",

    q3_q: "During exercise, which system delivers oxygen to working muscles?",
    q3_a: "Digestive system",
    q3_b: "Nervous system",
    q3_c: "Cardiovascular system",
    q3_d: "Endocrine system",
  },
  de: {
    // Round 1: Homöostase
    r1_title: "Homöostase: Bedingungen stabil halten",
    r1_text: "Homöostase ist der Prozess, durch den lebende Organismen eine stabile innere Umgebung trotz Veränderungen in der äußeren Welt aufrechterhalten.",
    r1_fact1: "Körpertemperatur: Thermoregulation hält dich bei ~37°C (98,6°F) — Schwitzen kühlt, Schüttelfrost wärmt",
    r1_fact2: "Blut-pH: Bleibt bei ~7,4 — Nieren und Lungen arbeiten zusammen, um das Säure-Basen-Gleichgewicht zu regulieren",
    r1_fact3: "Blutglukose: Insulin (aus der Bauchspeicheldrüse) senkt es; Glukagon erhöht es — hält Energie stabil",
    r1_fact4: "Wasserbilanz: Nieren passen die Urinproduktion an, um die Blutosmolarität konstant zu halten",

    // Round 2: Metabolismus Typen
    r2_title: "Metabolismus: Aufbau & Abbau",
    r2_text: "Der Metabolismus umfasst alle chemischen Reaktionen, die dich am Leben erhalten. Zwei Haupttypen arbeiten zusammen.",
    r2_fact1: "Anabolismus: Aufbau-Reaktionen (Fotosynthese, Proteinsynthese, Knochenwachstum) — benötigen Energie",
    r2_fact2: "Katabolismus: Abbau-Reaktionen (Verdauung, Zellatmung) — setzen Energie frei (ATP)",
    r2_fact3: "Basaler Stoffwechsel (BMR): Energie, die dein Körper nur zur Aufrechterhaltung grundlegender Funktionen in Ruhe benötigt",
    r2_fact4: "Bewegung erhöht den Katabolismus: Muskeln verbrennen Glukose und Fette, um ATP für Bewegung zu produzieren",

    // Round 3: Körpersystem Integration
    r3_title: "Wie Systeme zusammenarbeiten",
    r3_text: "Dein Körper ist ein koordiniertes Team. Das Nervensystem, das endokrine System und das Immunsystem kommunizieren ständig.",
    r3_fact1: "Nervensystem (Gehirn, Rückenmark, Nerven): Schnelle elektrische Signale — sofortige Reaktionen (Reflexbogen)",
    r3_fact2: "Endokrines System (Drüsen, Hormone): Langsame chemische Signale — Langzeitregulation (Wachstum, Metabolismus)",
    r3_fact3: "Immunsystem (weiße Blutkörperchen, Lymphe): Verteidigt gegen Krankheitserreger — arbeitet mit lymphoiden Organen",
    r3_fact4: "Beispiel: Stressreaktion — Nervensystem setzt Epinephrin frei → Herzfrequenz ↑, Blutdruck ↑",

    // Round 4: Organsystem Kooperation
    r4_title: "Beispiel: Bewegung ruft alle Systeme auf",
    r4_text: "Wenn du trainierst, springt jedes Hauptsystem in koordinierte Aktion, um Muskelarbeit zu unterstützen.",
    r4_fact1: "Muskelsystem: Kontrahiert mit ATP-Energie, um Kraft und Bewegung zu erzeugen",
    r4_fact2: "Herz-Kreislauf-System: Herz pumpt schneller, Blutgefäße erweitern sich, um O₂ und Glukose an Muskeln zu liefern",
    r4_fact3: "Atemwegsystem: Atmung vertieft sich, um die Sauerstoffaufnahme zu erhöhen und CO₂-Entfernung",
    r4_fact4: "Nervensystem & Endokrin: Aktivieren Kampf-oder-Flucht-Reaktion; regulieren Laktat, Körpertemp, Wasserverlust (Schweiß)",

    // Round 5: Quiz
    r5_title: "Systembbiologie Überprüfung",

    q1_q: "Was ist Homöostase?",
    q1_a: "Der Prozess der Nahrungsverdauung",
    q1_b: "Aufrechterhaltung einer stabilen inneren Umgebung trotz äußerer Veränderungen",
    q1_c: "Die Bewegung von Molekülen über Zellmembranen",
    q1_d: "Der Abbau von Glukose in Mitochondrien",

    q2_q: "Welcher Prozess baut Moleküle auf und benötigt Energie?",
    q2_a: "Katabolismus",
    q2_b: "Respiration",
    q2_c: "Anabolismus",
    q2_d: "Verdauung",

    q3_q: "Während der Bewegung, welches System liefert Sauerstoff an arbeitende Muskeln?",
    q3_a: "Verdauungssystem",
    q3_b: "Nervensystem",
    q3_c: "Herz-Kreislauf-System",
    q3_d: "Endokrines System",
  },
  hu: {
    // Round 1: Homeosztázis
    r1_title: "Homeosztázis: Körülmények stabilak tartása",
    r1_text: "A homeosztázis az az folyamat, amellyel az élő szervezetek stabil belső környezetet tartanak fenn a külső világ változásai ellenére.",
    r1_fact1: "Testhőmérséklet: Termoreguláció tartja az ~37°C-on (98,6°F) — az izzadás lehűti, a remegés melegít",
    r1_fact2: "Vér pH: ~7,4-nél marad — a veseek és a tüdő együtt dolgoznak a savas-bázikus egyensúly szabályozásához",
    r1_fact3: "Vércukor: Az inzulin (hasnyálmirigy) csökkenti; a glucagon megemeli — energiát tart stabilnak",
    r1_fact4: "Vízháztartás: A veseek a vizelet termelésre állítanak be, hogy a vér osmolaritása állandó maradjon",

    // Round 2: Anyagcsere típusok
    r2_title: "Anyagcsere: Építés & Lebontás",
    r2_text: "Az anyagcsere az összes kémiai reakció, amely téged életben tart. Két fő típus működik együtt.",
    r2_fact1: "Anabolizmus: Építő reakciók (fotoszintézis, fehérjeszintézis, csonttan) — energiát igényel",
    r2_fact2: "Katabolizmus: Lebontó reakciók (emésztés, sejtlégzés) — energiát felszabadít (ATP)",
    r2_fact3: "Alapanyagcsere (BMR): Az a energia, amelyre a szervezetednek szüksége van alapfunkcióinak kiegészítésére",
    r2_fact4: "A testmozgás növeli a katabolizmust: Az izmok glükózt és zsírokat égetnek el ATP előállításához",

    // Round 3: Testrendszer integráció
    r3_title: "Hogyan működnek együtt a rendszerek",
    r3_text: "A tested egy koordinált csapat. Az ideg-, endokrin és immunrendszer folyamatosan kommunikál.",
    r3_fact1: "Idegrendszer (agy, gerincvelő, idegek): Gyors elektromos jelzések — azonnali válaszok (reflexív)",
    r3_fact2: "Endokrin rendszer (mirigyek, hormonok): Lassú kémiai jelzések — hosszú távú szabályozás (növekedés, anyagcsere)",
    r3_fact3: "Immunrendszer (fehér vértest, nyirok): Megvéd a kórokozók ellen — linfoid szervekkel működik",
    r3_fact4: "Példa: Stresszválasz — idegrendszer felszabadítja az epinefrint → szívütés ↑, vérnyomás ↑",

    // Round 4: Szervrendszer együttműködés
    r4_title: "Példa: A testmozgás minden rendszert felhív",
    r4_text: "Amikor edzel, minden fő rendszer koordinált akcióba lendül az izomzat munkájának támogatására.",
    r4_fact1: "Izomrendszer: ATP energiával kontrahálódik erő és mozgás előállításához",
    r4_fact2: "Szív- és érrendszer: A szív gyorsabban pumpál, az erek kitágulnak O₂ és glükóz szállítására az izmoknak",
    r4_fact3: "Légzőrendszer: A légzés mélyül az oxigénfelvétel növeléséhez és a CO₂ eltávolításához",
    r4_fact4: "Ideg- és endokrin: Aktiválják a harc-vagy-menekülés reakciót; szabályozzák a laktátot, testhőmérsékletet, a vízvesztést",

    // Round 5: Quiz
    r5_title: "Rendszerbiológia áttekintés",

    q1_q: "Mi a homeosztázis?",
    q1_a: "Az étel megemésztésének folyamata",
    q1_b: "Stabil belső környezet fenntartása a külső változások ellenére",
    q1_c: "Molekulák mozgása a sejthártyák között",
    q1_d: "A glükóz lebontása a mitokondriákban",

    q2_q: "Mely folyamat építi fel a molekulákat és szükséges az energiára?",
    q2_a: "Katabolizmus",
    q2_b: "Légzés",
    q2_c: "Anabolizmus",
    q2_d: "Emésztés",

    q3_q: "A testmozgás során mely rendszer szállít oxigént a működő izmoknak?",
    q3_a: "Emésztőrendszer",
    q3_b: "Idegrendszer",
    q3_c: "Szív- és érrendszer",
    q3_d: "Endokrin rendszer",
  },
  ro: {
    // Round 1: Homeostază
    r1_title: "Homeostază: Menținerea condițiilor stabile",
    r1_text: "Homeostaza este procesul prin care organismele vii mențin un mediu intern stabil în ciuda schimbărilor în lumea externă.",
    r1_fact1: "Temperatura corpului: Termoregularea te ține la ~37°C (98,6°F) — transpirul răcorește, tremuratul încălzește",
    r1_fact2: "pH-ul sângelui: Rămâne aproape de 7,4 — rinichii și plămânii lucrează împreună pentru a regula echilibrul acido-bazic",
    r1_fact3: "Glucoza din sânge: Insulina (din pancreas) o scade; glucagonul o crește — ținând energia stabilă",
    r1_fact4: "Echilibrul apei: Rinichii ajustează producția de urină pentru a menține osmolaritatea sângelui constantă",

    // Round 2: Tipuri de metabol
    r2_title: "Metabolism: Construire și dezagregare",
    r2_text: "Metabolismul este toate reacțiile chimice care te țin viu. Două tipuri principale lucrează împreună.",
    r2_fact1: "Anabolism: Reacții de construire (fotosinteza, sinteza proteinelor, creșterea oaselor) — necesită energie",
    r2_fact2: "Catabolism: Reacții de dezagregare (digestie, respirație celulară) — eliberează energie (ATP)",
    r2_fact3: "Rata metabolică bazală (BMR): Energia de care are nevoie corpul pentru a menține funcțiile de bază în repaus",
    r2_fact4: "Exercițiul crește catabolismul: Mușchii ard glucoză și grăsimi pentru a produce ATP pentru mișcare",

    // Round 3: Integrarea sistemului corpului
    r3_title: "Cum lucrează sistemele împreună",
    r3_text: "Corpul tău este o echipă coordonată. Sistemul nervos, endocrin și imunitar comunică constant.",
    r3_fact1: "Sistemul nervos (creier, măduvă spinării, nervi): Semnale electrice rapide — răspunsuri instantanee (arc reflex)",
    r3_fact2: "Sistemul endocrin (glande, hormoni): Semnale chimice lente — reglare pe termen lung (creștere, metabol)",
    r3_fact3: "Sistemul imunitar (celule albe din sânge, limfă): Apără împotriva agenților patogeni — lucrează cu organele limfoide",
    r3_fact4: "Exemplu: Răspunsul la stres — sistemul nervos eliberează epinefrina → pulsul ↑, presiunea sângelui ↑",

    // Round 4: Cooperare sistemului de organe
    r4_title: "Exemplu: Exercițiul cheamă toate sistemele",
    r4_text: "Atunci când te exercițiezi, fiecare sistem major intră în acțiune coordonată pentru a susține munca musculară.",
    r4_fact1: "Sistemul muscular: Se contractă cu energia ATP pentru a genera forță și mișcare",
    r4_fact2: "Sistemul cardiovascular: Inima pompează mai rapid, vasele de sânge se dilatează pentru a livra O₂ și glucoză mușchilor",
    r4_fact3: "Sistemul respirator: Respirația se aprofundează pentru a crește captarea oxigenului și îndepărtarea CO₂",
    r4_fact4: "Nervos și endocrin: Activează răspunsul de luptă-sau-fug; reglează lactatul, temperatura corpului, pierderea de apă (transpirație)",

    // Round 5: Quiz
    r5_title: "Revizuire biologie sisteme",

    q1_q: "Ce este homeostaza?",
    q1_a: "Procesul de digestie a alimentelor",
    q1_b: "Menținerea unui mediu intern stabil în ciuda schimbărilor externe",
    q1_c: "Mișcarea moleculelor peste membranele celulare",
    q1_d: "Descompunerea glucozei în mitocondrii",

    q2_q: "Care proces construiește molecule și necesită energie?",
    q2_a: "Catabolism",
    q2_b: "Respirație",
    q2_c: "Anabolism",
    q2_d: "Digestie",

    q3_q: "În timpul exercițiului, care sistem furnizează oxigen mușchilor în muncă?",
    q3_a: "Sistemul digestiv",
    q3_b: "Sistemul nervos",
    q3_c: "Sistemul cardiovascular",
    q3_d: "Sistemul endocrin",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Round 1 SVG: Homeostasis — body with temperature, pH, glucose, water symbols */
function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="systems_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E1F5FE" />
          <stop offset="100%" stopColor="#B3E5FC" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#systems_bg)" />

      {/* Central body outline — simplified */}
      <ellipse cx="120" cy="80" rx="25" ry="35" fill="rgba(200,150,100,0.2)" stroke="#8B6844" strokeWidth="1.5" />

      {/* TOP LEFT: Temperature/Thermometer */}
      <g transform="translate(50, 45)">
        <rect x="-2" y="0" width="4" height="20" fill="rgba(255,100,100,0.4)" stroke="#FF6464" strokeWidth="1" rx="2" />
        <circle cx="0" cy="22" r="4" fill="#FF6464" opacity="0.5" />
        <text x="-8" y="-5" fontSize="10" fontWeight="bold" fill="#FF6464">T</text>
      </g>

      {/* TOP RIGHT: pH scale */}
      <g transform="translate(190, 45)">
        <rect x="-12" y="0" width="24" height="3" fill="none" stroke="#2196F3" strokeWidth="1.5" />
        <circle cx="-6" cy="1.5" r="2" fill="#2196F3" />
        <circle cx="0" cy="1.5" r="2" fill="#2196F3" />
        <circle cx="6" cy="1.5" r="2" fill="#2196F3" />
        <text x="-10" y="-5" fontSize="10" fontWeight="bold" fill="#2196F3">pH</text>
      </g>

      {/* BOTTOM LEFT: Glucose/Energy molecule */}
      <g transform="translate(50, 120)">
        <circle cx="0" cy="0" r="5" fill="#FFD700" opacity="0.6" />
        <text x="-3" y="3" fontSize="10" fontWeight="bold" fill="#F57F17">G</text>
      </g>

      {/* BOTTOM RIGHT: Water droplet */}
      <g transform="translate(190, 120)">
        <path d="M 0 -5 L -3 0 Q -3 3 0 4 Q 3 3 3 0 Z" fill="#4DB6AC" opacity="0.6" />
        <text x="-3" y="1" fontSize="9" fontWeight="bold" fill="#00796B">H₂O</text>
      </g>

      {/* Central arrows showing balance */}
      <circle cx="120" cy="80" r="8" fill="none" stroke="#999" strokeWidth="0.8" strokeDasharray="1,2" opacity="0.5" />
      <text x="116" y="84" fontSize="9" fontWeight="bold" fill="#666">BALANCE</text>
    </svg>
  );
}

/** Round 2 SVG: Metabolism — Anabolism (building) vs Catabolism (breaking down) */
function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="systems_bg2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF3E0" />
          <stop offset="100%" stopColor="#FFE0B2" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#systems_bg2)" />

      {/* LEFT: Anabolism — building up (green up arrow) */}
      <g transform="translate(60, 80)">
        {/* Building blocks stacking */}
        <rect x="-10" y="15" width="20" height="8" fill="#4CAF50" opacity="0.7" />
        <rect x="-10" y="3" width="20" height="8" fill="#4CAF50" opacity="0.85" />
        <rect x="-10" y="-9" width="20" height="8" fill="#4CAF50" opacity="1" />
        {/* Up arrow */}
        <path d="M 0 -20 L 0 -14 M -3 -17 L 0 -20 L 3 -17" stroke="#4CAF50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Energy symbol (sun rays) */}
        <g transform="translate(15, -18)" fill="rgba(255,193,7,0.6)">
          <circle cx="0" cy="0" r="3" />
          <line x1="0" y1="-6" x2="0" y2="-8" strokeWidth="1" stroke="#FFC107" />
          <line x1="6" y1="0" x2="8" y2="0" strokeWidth="1" stroke="#FFC107" />
        </g>
      </g>

      {/* RIGHT: Catabolism — breaking down (red down arrow) */}
      <g transform="translate(180, 80)">
        {/* Breaking apart molecule */}
        <circle cx="-8" cy="-5" r="6" fill="#F44336" opacity="0.7" />
        <circle cx="0" cy="-8" r="6" fill="#F44336" opacity="0.7" />
        <circle cx="8" cy="-5" r="6" fill="#F44336" opacity="0.7" />
        {/* Down arrow */}
        <path d="M 0 10 L 0 4 M -3 7 L 0 10 L 3 7" stroke="#F44336" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Energy release symbol (ATP) */}
        <g transform="translate(0, 20)" fill="#FF9800">
          <circle cx="0" cy="0" r="2" />
          <path d="M -1 -3 L 1 -3" strokeWidth="1" stroke="#FF9800" />
          <path d="M -1 3 L 1 3" strokeWidth="1" stroke="#FF9800" />
        </g>
      </g>

      {/* Center separation line */}
      <line x1="120" y1="30" x2="120" y2="130" stroke="#999" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />

      {/* Bottom labels as colored boxes */}
      <rect x="30" y="125" width="60" height="12" fill="rgba(76,175,80,0.2)" rx="2" />
      <rect x="150" y="125" width="60" height="12" fill="rgba(244,67,54,0.2)" rx="2" />
    </svg>
  );
}

/** Round 3 SVG: Body systems integration — nervous, endocrine, immune symbols */
function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="systems_bg3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F3E5F5" />
          <stop offset="100%" stopColor="#E1BEE7" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#systems_bg3)" />

      {/* Central brain symbol */}
      <g transform="translate(120, 50)">
        <circle cx="0" cy="0" r="12" fill="#FFB74D" stroke="#FF9800" strokeWidth="1" />
        <path d="M -8 -8 Q -12 -6 -12 0 M 8 -8 Q 12 -6 12 0 M -6 8 Q -8 12 0 12 Q 8 12 6 8" fill="none" stroke="#FF9800" strokeWidth="1" />
      </g>

      {/* LEFT: Nervous system — branching nerves (blue) */}
      <g transform="translate(50, 100)">
        <line x1="0" y1="0" x2="-12" y2="-15" stroke="#2196F3" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="-18" stroke="#2196F3" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="12" y2="-15" stroke="#2196F3" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="3" fill="#2196F3" />
      </g>

      {/* CENTER: Endocrine system — hormone droplets (orange) */}
      <g transform="translate(120, 100)">
        <circle cx="-8" cy="-8" r="4" fill="#FF9800" opacity="0.7" />
        <circle cx="0" cy="-10" r="4" fill="#FF9800" opacity="0.7" />
        <circle cx="8" cy="-8" r="4" fill="#FF9800" opacity="0.7" />
        <circle cx="0" cy="0" r="3" fill="#FF9800" />
      </g>

      {/* RIGHT: Immune system — antibodies/cells (green) */}
      <g transform="translate(190, 100)">
        <circle cx="0" cy="-6" r="5" fill="#4CAF50" opacity="0.7" />
        <circle cx="-8" cy="2" r="4" fill="#4CAF50" opacity="0.7" />
        <circle cx="8" cy="2" r="4" fill="#4CAF50" opacity="0.7" />
        <path d="M 0 -6 L -8 2 M 0 -6 L 8 2" stroke="#4CAF50" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Connecting arrows from brain to systems */}
      <path d="M 108 58 L 70 92" stroke="#999" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M 120 62 L 120 88" stroke="#999" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M 132 58 L 170 92" stroke="#999" strokeWidth="1" fill="none" opacity="0.4" />

      {/* System labels as colored boxes */}
      <rect x="30" y="125" width="40" height="10" fill="rgba(33,150,243,0.2)" rx="2" />
      <rect x="100" y="125" width="40" height="10" fill="rgba(255,152,0,0.2)" rx="2" />
      <rect x="170" y="125" width="40" height="10" fill="rgba(76,175,80,0.2)" rx="2" />
    </svg>
  );
}

/** Round 4 SVG: Exercise — muscles, heart, lungs, nerves all active */
function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="systems_bg4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFEBEE" />
          <stop offset="100%" stopColor="#FFCDD2" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#systems_bg4)" />

      {/* Central running figure — simplified humanoid */}
      <g transform="translate(60, 70)">
        {/* Head */}
        <circle cx="0" cy="-10" r="5" fill="#D7CCC8" />
        {/* Body */}
        <rect x="-3" y="-3" width="6" height="8" fill="#D7CCC8" />
        {/* Legs (one forward) */}
        <line x1="-3" y1="5" x2="-6" y2="15" stroke="#D7CCC8" strokeWidth="2" />
        <line x1="3" y1="5" x2="2" y2="13" stroke="#D7CCC8" strokeWidth="2" />
        {/* Arms (in motion) */}
        <line x1="-3" y1="1" x2="-10" y2="-5" stroke="#D7CCC8" strokeWidth="2" />
        <line x1="3" y1="1" x2="10" y2="5" stroke="#D7CCC8" strokeWidth="2" />
      </g>

      {/* TOP LEFT: Muscular system — red muscle fibers */}
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="25" height="8" fill="#E53935" opacity="0.7" rx="2" />
        <path d="M 2 4 Q 5 2 8 4 Q 11 6 14 4 Q 17 2 20 4 Q 23 6 25 4" stroke="#E53935" strokeWidth="1" fill="none" />
      </g>

      {/* TOP CENTER: Heart — pumping */}
      <g transform="translate(120, 25)">
        <path d="M -8 -2 Q -8 -6 -4 -6 Q 0 -2 0 0 Q 0 -2 4 -6 Q 8 -6 8 -2 Q 8 2 0 8 Q -8 2 -8 -2 Z" fill="#E91E63" opacity="0.8" />
        <circle cx="0" cy="0" r="3" fill="none" stroke="#C2185B" strokeWidth="0.8" />
      </g>

      {/* TOP RIGHT: Lungs — breathing */}
      <g transform="translate(190, 30)">
        <ellipse cx="-6" cy="0" rx="5" ry="7" fill="#4FC3F7" opacity="0.7" />
        <ellipse cx="6" cy="0" rx="5" ry="7" fill="#4FC3F7" opacity="0.7" />
        <path d="M -1 -2 L 1 -2 M -1 0 L 1 0 M -1 2 L 1 2" stroke="#0277BD" strokeWidth="0.8" />
      </g>

      {/* BOTTOM: Metabolic activity — glucose/oxygen arrows */}
      <g transform="translate(40, 130)">
        <path d="M 0 0 L 8 0 M 5 -3 L 8 0 L 5 3" stroke="#FF6F00" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>

      {/* BOTTOM CENTER: Energy ATP */}
      <g transform="translate(118, 130)">
        <circle cx="0" cy="0" r="4" fill="#FFD700" />
        <text x="-3" y="2" fontSize="7" fontWeight="bold" fill="#F57F17">ATP</text>
      </g>

      {/* BOTTOM RIGHT: Heat/Sweat release */}
      <g transform="translate(185, 130)">
        <path d="M 0 0 L 0 -6 M -2 -2 L 2 -2 M -2 -4 L 2 -4" stroke="#FF5252" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const SYSTEMS_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => SVG_R1(),
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => SVG_R2(),
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "info",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => SVG_R3(),
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
    },
    {
      type: "info",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => SVG_R4(),
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => SVG_R4(),
      questions: [
        {
          question: "q1_q",
          choices: ["q1_a", "q1_b", "q1_c", "q1_d"],
          answer: "q1_b",
        },
        {
          question: "q2_q",
          choices: ["q2_a", "q2_b", "q2_c", "q2_d"],
          answer: "q2_c",
        },
        {
          question: "q3_q",
          choices: ["q3_a", "q3_b", "q3_c", "q3_d"],
          answer: "q3_c",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function SystemsExplorer({
  color = "#1976D2",
  lang = "en",
  onDone,
}: {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}) {
  return <ExplorerEngine def={SYSTEMS_DEF} color={color} lang={lang} onDone={onDone} />;
}
