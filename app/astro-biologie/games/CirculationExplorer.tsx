"use client";
// CirculationExplorer — Island: Blood Circulation (Blutkreislauf) Grade 6
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Pulmonary circulation, systemic circulation, blood pressure, heart health

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Pulmonary Circulation
    r1_title: "Pulmonary Circulation",
    r1_text: "This loop brings blood to the lungs to pick up oxygen and drop off carbon dioxide.",
    r1_fact1: "Oxygen-poor blood leaves the right ventricle toward the lungs",
    r1_fact2: "Pulmonary arteries carry dark blue blood (low oxygen) to both lungs",
    r1_fact3: "In the lungs, blood picks up fresh oxygen and releases CO₂",
    r1_fact4: "Pulmonary veins return bright red blood (oxygen-rich) back to the heart",

    // Round 2: Systemic Circulation
    r2_title: "Systemic Circulation",
    r2_text: "This loop delivers oxygen-rich blood to every part of your body and returns used blood.",
    r2_fact1: "Oxygen-rich blood leaves the left ventricle through the aorta",
    r2_fact2: "Arteries branch and deliver oxygen to the brain, heart, organs, and muscles",
    r2_fact3: "Cells use oxygen and produce carbon dioxide as waste",
    r2_fact4: "Oxygen-poor blood returns to the right atrium via the vena cava",

    // Round 3: Blood Pressure
    r3_title: "Blood Pressure: Keeping the Flow",
    r3_text: "Blood pressure is the force of blood pushing against artery walls. It changes with each heartbeat.",
    r3_fact1: "Systole is when the heart contracts and pushes blood out (higher number)",
    r3_fact2: "Diastole is when the heart relaxes and fills with blood (lower number)",
    r3_fact3: "Normal blood pressure is around 120/80 mmHg",
    r3_fact4: "Your pulse is the beating of blood through arteries — you can feel it on your wrist",

    // Round 4: Heart Health
    r4_title: "Keeping Your Heart Healthy",
    r4_text: "A healthy heart works efficiently and lasts a lifetime with good habits.",
    r4_fact1: "Regular exercise strengthens the heart and improves circulation",
    r4_fact2: "Eating healthy foods (fruits, vegetables, whole grains) provides good nutrition",
    r4_fact3: "Smoking damages blood vessels and increases heart disease risk",
    r4_fact4: "Staying active, reducing stress, and getting sleep are all good for your heart",

    // Round 5: Quiz
    r5_title: "Circulation Review",

    // Quiz Questions (3 questions)
    q1_q: "What is the purpose of pulmonary circulation?",
    q1_oxygen_pickup: "To pick up oxygen in the lungs",
    q1_deliver: "To deliver oxygen to the body",
    q1_filter: "To filter waste from blood",
    q1_store: "To store oxygen",

    q2_q: "The aorta is part of which circulation?",
    q2_pulmonary: "Pulmonary circulation",
    q2_systemic: "Systemic circulation",
    q2_coronary: "Coronary circulation",
    q2_both: "Both pulmonary and systemic",

    q3_q: "What is the lower number in a blood pressure reading?",
    q3_systole: "Systole",
    q3_diastole: "Diastole",
    q3_pulse: "Pulse",
    q3_heartbeat: "Heartbeat",

    // Round 1 MCQ
    r1_q: "What happens to blood in the lungs?",
    r1_gains_o2: "Picks up oxygen",
    r1_loses_o2: "Loses oxygen",
    r1_gains_co2: "Picks up carbon dioxide",
    r1_gains_nutrients: "Gains nutrients",

    // Round 2 MCQ
    r2_q: "Which blood vessel carries oxygen-rich blood away from the heart?",
    r2_vena_cava: "Vena cava",
    r2_pulmonary_artery: "Pulmonary artery",
    r2_aorta: "Aorta",
    r2_pulmonary_vein: "Pulmonary vein",

    // Round 3 MCQ
    r3_q: "What does the top number in blood pressure (120) represent?",
    r3_diastole: "Diastole (relaxing)",
    r3_systole: "Systole (contracting)",
    r3_pulse: "Pulse rate",
    r3_heart_rate: "Heart rate",

    // Round 4 MCQ
    r4_q: "Which habit is best for heart health?",
    r4_exercise: "Regular exercise",
    r4_stress: "Being stressed",
    r4_smoking: "Smoking",
    r4_inactivity: "Staying still",
  },
  de: {
    r1_title: "Lungenkreislauf",
    r1_text: "Diese Schleife bringt Blut in die Lunge, um Sauerstoff aufzunehmen und Kohlendioxid abzugeben.",
    r1_fact1: "Sauerstoffarmes Blut verlässt die rechte Herzkammer Richtung Lunge",
    r1_fact2: "Lungenarterien transportieren dunkelblaues Blut (sauerstoffarm) zu beiden Lungen",
    r1_fact3: "In der Lunge nimmt Blut frischen Sauerstoff auf und setzt CO₂ frei",
    r1_fact4: "Lungenvenen bringen hellrotes Blut (sauerstoffreich) zurück zum Herzen",

    r2_title: "Großer Kreislauf",
    r2_text: "Diese Schleife liefert sauerstoffreiches Blut zu jedem Teil deines Körpers und bringt verbrauchtes Blut zurück.",
    r2_fact1: "Sauerstoffreiches Blut verlässt die linke Herzkammer durch die Aorta",
    r2_fact2: "Arterien verzweigen sich und liefern Sauerstoff an Gehirn, Herz, Organe und Muskeln",
    r2_fact3: "Zellen nutzen Sauerstoff und produzieren Kohlendioxid als Abfallprodukt",
    r2_fact4: "Sauerstoffarmes Blut kehrt zur rechten Vorhof über die untere Hohlvene zurück",

    r3_title: "Blutdruck: Den Fluss halten",
    r3_text: "Blutdruck ist die Kraft des Blutes, das gegen Arterienwände drückt. Er ändert sich mit jedem Herzschlag.",
    r3_fact1: "Systole ist, wenn das Herz sich zusammenzieht und Blut ausstößt (höhere Zahl)",
    r3_fact2: "Diastole ist, wenn das Herz sich entspannt und mit Blut füllt (niedrigere Zahl)",
    r3_fact3: "Der normale Blutdruck liegt bei etwa 120/80 mmHg",
    r3_fact4: "Dein Puls ist das Pochen des Blutes durch Arterien — du kannst es am Handgelenk spüren",

    r4_title: "Dein Herz gesund halten",
    r4_text: "Ein gesundes Herz arbeitet effizient und hält ein Leben lang mit guten Gewohnheiten.",
    r4_fact1: "Regelmäßiges Training stärkt das Herz und verbessert die Durchblutung",
    r4_fact2: "Gesunde Ernährung (Obst, Gemüse, Vollkornprodukte) sorgt für gute Ernährung",
    r4_fact3: "Rauchen schädigt Blutgefäße und erhöht das Herzerkrankungsrisiko",
    r4_fact4: "Aktiv bleiben, Stress abbauen und ausreichend Schlaf sind alle gut für dein Herz",

    r5_title: "Kreislauf Wiederholung",

    q1_q: "Was ist der Zweck des Lungenkreislaufs?",
    q1_oxygen_pickup: "Sauerstoff in der Lunge aufzunehmen",
    q1_deliver: "Sauerstoff an den Körper zu liefern",
    q1_filter: "Abfallstoffe aus dem Blut zu filtern",
    q1_store: "Sauerstoff zu speichern",

    q2_q: "Die Aorta ist Teil welcher Zirkulation?",
    q2_pulmonary: "Lungenkreislauf",
    q2_systemic: "Großer Kreislauf",
    q2_coronary: "Koronarer Kreislauf",
    q2_both: "Beide Kreisläufe",

    q3_q: "Was ist die untere Zahl in einer Blutdruckmessung?",
    q3_systole: "Systole",
    q3_diastole: "Diastole",
    q3_pulse: "Puls",
    q3_heartbeat: "Herzschlag",

    r1_q: "Was passiert mit Blut in der Lunge?",
    r1_gains_o2: "Nimmt Sauerstoff auf",
    r1_loses_o2: "Verliert Sauerstoff",
    r1_gains_co2: "Nimmt Kohlendioxid auf",
    r1_gains_nutrients: "Nimmt Nährstoffe auf",

    r2_q: "Welches Blutgefäß transportiert sauerstoffreiches Blut vom Herzen weg?",
    r2_vena_cava: "Untere Hohlvene",
    r2_pulmonary_artery: "Lungenarterie",
    r2_aorta: "Aorta",
    r2_pulmonary_vein: "Lungenvene",

    r3_q: "Was stellt die obere Zahl im Blutdruck (120) dar?",
    r3_diastole: "Diastole (entspannend)",
    r3_systole: "Systole (zusammenziehend)",
    r3_pulse: "Pulsfrequenz",
    r3_heart_rate: "Herzfrequenz",

    r4_q: "Welche Gewohnheit ist am besten für die Herzgesundheit?",
    r4_exercise: "Regelmäßiges Training",
    r4_stress: "Gestresst sein",
    r4_smoking: "Rauchen",
    r4_inactivity: "Stillsitzen",
  },
  hu: {
    r1_title: "Tüdőkeringés",
    r1_text: "Ez a kör oxigént vesz fel a tüdőben és szén-dioxidot enged ki.",
    r1_fact1: "Oxigénszegény vér elhagyja a jobb kamrát a tüdő felé",
    r1_fact2: "A tüdőartériák sötétkék vért (oxigénszegény) szállítanak mindkét tüdőhöz",
    r1_fact3: "A tüdőben a vér friss oxigént vesz fel és CO₂-t enged ki",
    r1_fact4: "A tüdővénák világos vöröset (oxigénben gazdag) vért szállítanak vissza a szívhez",

    r2_title: "Nagy keringés",
    r2_text: "Ez a kör oxigénben gazdag vért szállít a tested minden részéhez és használt vért szállít vissza.",
    r2_fact1: "Az oxigénben gazdag vér elhagyja a bal kamrát az aorta által",
    r2_fact2: "Az artériák elágaznak és oxigént szállítanak az agyhoz, szívhez, szervekhez és izomhoz",
    r2_fact3: "A sejtek oxigént használnak és szén-dioxidot termelnek hulladékként",
    r2_fact4: "Az oxigénszegény vér a felső üres vénán keresztül visszatér a jobb pitvarra",

    r3_title: "Vérnyomás: Az áramlás megtartása",
    r3_text: "A vérnyomás az a erő, amellyel a vér az artéria falainak ellenében nyomódik. Minden szívveréshez változik.",
    r3_fact1: "A szisztolé az, amikor a szív összehúzódik és kidobja a vért (magasabb szám)",
    r3_fact2: "A diasztolé az, amikor a szív ellazul és vérkkel telik meg (alacsonyabb szám)",
    r3_fact3: "A normális vérnyomás körülbelül 120/80 mmHg",
    r3_fact4: "A pulzusod az a vér verése az artériákon - érezheted a csuklódon",

    r4_title: "Szíved egészségesnek tartása",
    r4_text: "Az egészséges szív hatékonyan működik és jó szokásokkal egész életen át tart.",
    r4_fact1: "A rendszeres testmozgás erősíti a szívet és javítja a keringést",
    r4_fact2: "Az egészséges táplálkozás (gyümölcs, zöldség, teljes kiőrlésű gabona) jó tápanyagot biztosít",
    r4_fact3: "A dohányzás károsítja az ereket és növeli a szívbetegség kockázatát",
    r4_fact4: "Aktív maradás, stressz csökkentés és megfelelő alvás mind jó a szívedhez",

    r5_title: "Keringés Áttekintés",

    q1_q: "Mi a tüdőkeringés célja?",
    q1_oxygen_pickup: "Oxigén felvétele a tüdőben",
    q1_deliver: "Oxigén szállítása a testbe",
    q1_filter: "Hulladék szűrése a vérből",
    q1_store: "Oxigén tárolása",

    q2_q: "Az aorta melyik keringés része?",
    q2_pulmonary: "Tüdőkeringés",
    q2_systemic: "Nagy keringés",
    q2_coronary: "Koszorúer keringés",
    q2_both: "Mindkét keringés",

    q3_q: "Mi az alsó szám a vérnyomásmérésnél?",
    q3_systole: "Szisztolé",
    q3_diastole: "Diasztolé",
    q3_pulse: "Pulzus",
    q3_heartbeat: "Szívverés",

    r1_q: "Mi történik a vérrel a tüdőben?",
    r1_gains_o2: "Oxigént vesz fel",
    r1_loses_o2: "Oxigént veszít",
    r1_gains_co2: "Szén-dioxidot vesz fel",
    r1_gains_nutrients: "Tápanyagokat vesz fel",

    r2_q: "Melyik vérszállító edény szállít oxigénben gazdag vért a szívtől?",
    r2_vena_cava: "Felső üres véna",
    r2_pulmonary_artery: "Tüdőartéria",
    r2_aorta: "Aorta",
    r2_pulmonary_vein: "Tüdővéna",

    r3_q: "Mit jelent a vérnyomás felső száma (120)?",
    r3_diastole: "Diasztolé (lazító)",
    r3_systole: "Szisztolé (összehúzódó)",
    r3_pulse: "Pulzusfrekvencia",
    r3_heart_rate: "Szívfrekvencia",

    r4_q: "Melyik szokás a legjobb a szív egészségéhez?",
    r4_exercise: "Rendszeres testmozgás",
    r4_stress: "Stresszben lenni",
    r4_smoking: "Dohányzás",
    r4_inactivity: "Mozdulatlanul maradás",
  },
  ro: {
    r1_title: "Circulația pulmonară",
    r1_text: "Această buclă aduce sânge la plămâni pentru a ridica oxigenul și a elibera dioxidul de carbon.",
    r1_fact1: "Sângele sărac în oxigen părăsește ventriculul drept către plămâni",
    r1_fact2: "Arterele pulmonare transportă sânge albastru închis (sărac în oxigen) la ambii plămâni",
    r1_fact3: "În plămâni, sângele ridică oxigen proaspăt și eliberează CO₂",
    r1_fact4: "Venele pulmonare aduc sânge roșu închis (bogat în oxigen) înapoi la inimă",

    r2_title: "Circulația sistemică",
    r2_text: "Această buclă livrează sânge bogat în oxigen la fiecare parte a corpului tău și returnează sângele folosit.",
    r2_fact1: "Sângele bogat în oxigen pleacă din ventriculul stâng prin aortă",
    r2_fact2: "Arterele se ramifică și livrează oxigen la creier, inimă, organe și mușchi",
    r2_fact3: "Celulele folosesc oxigenul și produc dioxid de carbon ca deșeu",
    r2_fact4: "Sângele sărac în oxigen se întoarce la atriul drept prin vena cava",

    r3_title: "Tensiunea arterială: Menținerea fluxului",
    r3_text: "Tensiunea arterială este forța cu care sângele împinge împotriva pereților arteriali. Se schimbă cu fiecare bătaie.",
    r3_fact1: "Sistola este când inima se contractă și împinge sângele (număr mai mare)",
    r3_fact2: "Diastola este când inima se relaxează și se umple cu sânge (număr mai mic)",
    r3_fact3: "Tensiunea arterială normală este de aproximativ 120/80 mmHg",
    r3_fact4: "Pulsul tău este bătaia sangelui prin artere — poți să-l simți la încheietura mâinii",

    r4_title: "Menținerea unei inimi sănătoase",
    r4_text: "O inimă sănătoasă funcționează eficient și durează o viață cu obiceiuri bune.",
    r4_fact1: "Exercițiul regulat întărește inima și îmbunătățește circulația",
    r4_fact2: "Alimentele sănătoase (fructe, legume, cereale integrale) oferă o nutriție bună",
    r4_fact3: "Fumatul deteriorează vasele de sânge și crește riscul bolii de inimă",
    r4_fact4: "Rămânerea activ, reducerea stresului și obținerea de somn sunt bune pentru inima ta",

    r5_title: "Recapitulare Circulație",

    q1_q: "Care este scopul circulației pulmonare?",
    q1_oxygen_pickup: "Pentru a ridica oxigen în plămâni",
    q1_deliver: "Pentru a livra oxigen corpului",
    q1_filter: "Pentru a filtra deșeurile din sânge",
    q1_store: "Pentru a stoca oxigen",

    q2_q: "Aorta face parte din care circulație?",
    q2_pulmonary: "Circulația pulmonară",
    q2_systemic: "Circulația sistemică",
    q2_coronary: "Circulația coronariană",
    q2_both: "Ambele circulații",

    q3_q: "Care este numărul inferior în citirea tensiunii arteriale?",
    q3_systole: "Sistola",
    q3_diastole: "Diastola",
    q3_pulse: "Pulsul",
    q3_heartbeat: "Bătaia inimii",

    r1_q: "Ce se întâmplă cu sângele în plămâni?",
    r1_gains_o2: "Ridică oxigen",
    r1_loses_o2: "Pierde oxigen",
    r1_gains_co2: "Ridică dioxid de carbon",
    r1_gains_nutrients: "Ridică nutrienți",

    r2_q: "Care vas de sânge transportă sânge bogat în oxigen departe de inimă?",
    r2_vena_cava: "Vena cava inferioară",
    r2_pulmonary_artery: "Artera pulmonară",
    r2_aorta: "Aorta",
    r2_pulmonary_vein: "Vena pulmonară",

    r3_q: "Ce reprezintă numărul superior în tensiunea arterială (120)?",
    r3_diastole: "Diastola (relaxare)",
    r3_systole: "Sistola (contracție)",
    r3_pulse: "Rata pulsului",
    r3_heart_rate: "Frecvența cardiacă",

    r4_q: "Care obicei este cel mai bun pentru sănătatea inimii?",
    r4_exercise: "Exercițiu regulat",
    r4_stress: "A fi stresat",
    r4_smoking: "Fumatul",
    r4_inactivity: "A sta pe loc",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS — viewBox="0 0 240 160", NO text inside
// ─────────────────────────────────────────────────────────────────────────────

const R1_PulmonaryCirculation = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Heart simplified */}
    <circle cx="60" cy="80" r="18" fill="#e74c3c" opacity="0.6" stroke="white" strokeWidth="1" />

    {/* Lungs */}
    <circle cx="150" cy="60" r="20" fill="#f0ad4e" opacity="0.5" stroke="white" strokeWidth="1" />
    <circle cx="170" cy="60" r="20" fill="#f0ad4e" opacity="0.5" stroke="white" strokeWidth="1" />

    {/* Pulmonary arteries (dark blue going to lungs) */}
    <path
      d="M 75 75 Q 110 60 130 50"
      stroke="#3b82f6"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#arrowhead1)"
    />
    <path
      d="M 75 85 Q 110 95 170 100"
      stroke="#3b82f6"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#arrowhead1)"
    />

    {/* Pulmonary veins (red coming from lungs) */}
    <path
      d="M 140 75 Q 100 90 75 100"
      stroke="#e74c3c"
      strokeWidth="3"
      fill="none"
      markerEnd="url(#arrowhead2)"
    />

    {/* Arrows */}
    <defs>
      <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
      </marker>
      <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#e74c3c" />
      </marker>
    </defs>
  </svg>
);

const R2_SystemicCirculation = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Heart center */}
    <circle cx="50" cy="80" r="15" fill="#e74c3c" opacity="0.7" stroke="white" strokeWidth="1" />

    {/* Body silhouette (simplified) */}
    <ellipse cx="160" cy="70" rx="50" ry="60" fill="rgba(100,200,255,0.1)" stroke="white" strokeWidth="1" />

    {/* Brain */}
    <circle cx="160" cy="35" r="10" fill="rgba(200,200,200,0.3)" />

    {/* Heart organ */}
    <circle cx="145" cy="75" r="8" fill="rgba(255,100,100,0.3)" />

    {/* Aorta going right (red) */}
    <path
      d="M 65 75 Q 100 70 120 60"
      stroke="#e74c3c"
      strokeWidth="2.5"
      fill="none"
      markerEnd="url(#arrowhead3)"
    />

    {/* Arteries to organs */}
    <path d="M 125 60 L 160 35" stroke="#e74c3c" strokeWidth="1.5" fill="none" />
    <path d="M 120 65 L 145 75" stroke="#e74c3c" strokeWidth="1.5" fill="none" />
    <path d="M 120 85 L 160 110" stroke="#e74c3c" strokeWidth="1.5" fill="none" />

    {/* Return vein (blue) */}
    <path
      d="M 130 110 Q 100 95 65 90"
      stroke="#3b82f6"
      strokeWidth="2.5"
      fill="none"
      markerEnd="url(#arrowhead4)"
    />

    {/* Arrows */}
    <defs>
      <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#e74c3c" />
      </marker>
      <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
      </marker>
    </defs>
  </svg>
);

const R3_BloodPressure = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Artery cross-section */}
    <circle cx="80" cy="80" r="35" fill="none" stroke="white" strokeWidth="1" />
    <circle cx="80" cy="80" r="28" fill="#e74c3c" opacity="0.5" />
    <circle cx="80" cy="80" r="20" fill="#dc2626" opacity="0.6" />

    {/* Blood pressure wave visualization */}
    <text x="80" y="85" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
      120/80
    </text>

    {/* Pressure wave lines */}
    <path
      d="M 140 60 Q 145 50 150 60 T 160 60"
      stroke="#ffeb3b"
      strokeWidth="2"
      fill="none"
      opacity="0.8"
    />
    <path
      d="M 140 90 Q 145 95 150 90 T 160 90"
      stroke="#90caf9"
      strokeWidth="2"
      fill="none"
      opacity="0.8"
    />

    {/* Pulse point (wrist) */}
    <circle cx="180" cy="120" r="8" fill="white" opacity="0.3" />
    <circle cx="180" cy="120" r="6" fill="none" stroke="white" strokeWidth="1" />
    <text x="180" y="140" fontSize="9" fill="white/60" textAnchor="middle">
      Pulse
    </text>
  </svg>
);

const R4_HeartHealth = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Heart outline */}
    <path
      d="M 120 140 C 60 100, 40 75, 40 55 C 40 40, 50 30, 65 30 C 80 30, 95 40, 120 60 C 145 40, 160 30, 175 30 C 190 30, 200 40, 200 55 C 200 75, 180 100, 120 140 Z"
      fill="#e74c3c"
      opacity="0.5"
      stroke="white"
      strokeWidth="1"
    />

    {/* Exercise checkmark ✓ */}
    <circle cx="60" cy="40" r="12" fill="#10b981" opacity="0.6" />
    <polyline points="55,42 58,45 65,38" stroke="white" strokeWidth="2" fill="none" />

    {/* Healthy food checkmark ✓ */}
    <circle cx="180" cy="40" r="12" fill="#10b981" opacity="0.6" />
    <polyline points="175,42 178,45 185,38" stroke="white" strokeWidth="2" fill="none" />

    {/* Smoking X mark */}
    <circle cx="60" cy="130" r="12" fill="#ef4444" opacity="0.6" />
    <line x1="54" y1="124" x2="66" y2="136" stroke="white" strokeWidth="2" />
    <line x1="66" y1="124" x2="54" y2="136" stroke="white" strokeWidth="2" />

    {/* Sleep checkmark ✓ */}
    <circle cx="180" cy="130" r="12" fill="#10b981" opacity="0.6" />
    <polyline points="175,132 178,135 185,128" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);

const R5_ReviewIcon = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto">
    {/* Circular flow diagram */}
    <circle cx="120" cy="80" r="50" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />

    {/* Heart */}
    <circle cx="120" cy="30" r="10" fill="#e74c3c" opacity="0.7" />

    {/* Lungs */}
    <circle cx="170" cy="80" r="10" fill="#f0ad4e" opacity="0.6" />

    {/* Body */}
    <circle cx="70" cy="80" r="10" fill="#8b5cf6" opacity="0.6" />

    {/* Arrows showing circular flow */}
    <path
      d="M 130 35 Q 160 50 165 75"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
      markerEnd="url(#arrowhead5)"
    />
    <path
      d="M 160 85 Q 120 120 75 100"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
      markerEnd="url(#arrowhead5)"
    />
    <path
      d="M 75 70 Q 100 40 110 35"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
      markerEnd="url(#arrowhead5)"
    />

    {/* Arrows */}
    <defs>
      <marker id="arrowhead5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="white" />
      </marker>
    </defs>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const CIRCULATION_EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => <R1_PulmonaryCirculation />,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => <R2_SystemicCirculation />,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => <R3_BloodPressure />,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_diastole", "r3_systole", "r3_pulse", "r3_heart_rate"],
          answer: "r3_systole",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => <R4_HeartHealth />,
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_exercise", "r4_stress", "r4_smoking", "r4_inactivity"],
          answer: "r4_exercise",
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
          choices: ["q1_oxygen_pickup", "q1_deliver", "q1_filter", "q1_store"],
          answer: "q1_oxygen_pickup",
        },
        {
          question: "q2_q",
          choices: ["q2_pulmonary", "q2_systemic", "q2_coronary", "q2_both"],
          answer: "q2_systemic",
        },
        {
          question: "q3_q",
          choices: ["q3_systole", "q3_diastole", "q3_pulse", "q3_heartbeat"],
          answer: "q3_diastole",
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

export default function CirculationExplorer({ color = "#3b82f6", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={CIRCULATION_EXPLORER_DEF} color={color} lang={lang} onDone={onDone} />;
}
