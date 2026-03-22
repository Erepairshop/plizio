"use client";
// SkeletonExplorer — Island i6: Skeleton & Muscles (Skelett & Muskeln)
// Teaching-first pattern: R1-R4 (info + SVG), R5 (MCQ quiz)
// Grade 5 biology — skeletal system, bones, muscles, function

import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef, MCQQuestion } from "./ExplorerEngine";
import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Labels — all content, all 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: ExplorerDef["labels"] = {
  en: {
    // Round 1: Skeleton Functions
    r1Title: "Skeleton Functions",
    r1Text: "The skeleton is a framework of bones that supports your body. It has four main jobs:",
    r1B1: "Support: Holds your body upright and gives it shape",
    r1B2: "Protection: Shields vital organs like the brain (skull), heart (ribs), lungs (ribs)",
    r1B3: "Movement: Muscles attach to bones and move them, creating motion",
    r1B4: "Blood Production: Inside bones, red blood cells are made in bone marrow",

    // Round 2: Major Bones
    r2Title: "Major Bones",
    r2Text: "These bones are key structures you should know:",
    r2B1: "Skull: Protects the brain and forms your face shape",
    r2B2: "Spine (Vertebral Column): Runs down your back, supports your body, protects the spinal cord",
    r2B3: "Ribs: Cage around chest, protect the heart and lungs",
    r2B4: "Pelvis: Basin-shaped bone, supports organs and legs",
    r2B5: "Femur (Thighbone): The longest bone, supports body weight during standing and walking",
    r2B6: "Humerus (Upper Arm Bone): Allows arm movement at the shoulder",

    // Round 3: Muscles & Movement
    r3Title: "Muscles & Movement",
    r3Text: "Three types of muscles work in your body, but only skeletal muscles are under your control:",
    r3B1: "Skeletal Muscles: Voluntary — you control them. Move your bones. (Example: biceps when you flex your arm)",
    r3B2: "Smooth Muscles: Involuntary — your body controls them. Found in stomach, intestines, blood vessels",
    r3B3: "Cardiac Muscle: Involuntary — only in the heart. Beats without you thinking about it",
    r3B4: "How They Work: Muscles pull on bones in pairs. When one contracts (shortens), it pulls the bone; the other relaxes (lengthens)",

    // Round 4: Joints & Flexibility
    r4Title: "Joints & Flexibility",
    r4Text: "Joints are where two bones meet, allowing movement and flexibility:",
    r4B1: "Fixed Joints (Skull): Bones fused together, no movement. Protects the brain",
    r4B2: "Hinge Joints (Elbow, Knee): Move back and forth like a door. Controlled by muscle pairs",
    r4B3: "Ball & Socket Joints (Hip, Shoulder): Move in multiple directions. Give great flexibility",
    r4B4: "Cartilage: Smooth tissue between bones reduces friction and cushions impacts",

    // Quiz Round 5
    q1: "Which bone protects the brain?",
    a1_skull: "Skull",
    a1_spine: "Spine",
    a1_ribs: "Ribs",
    a1_femur: "Femur",

    q2: "What is the main function of ribs?",
    a2_protect: "Protect the heart and lungs",
    a2_movement: "Enable movement",
    a2_support: "Support the head",
    a2_blood: "Produce blood cells",

    q3: "Which type of muscle do you control voluntarily?",
    a3_skeletal: "Skeletal muscles",
    a3_smooth: "Smooth muscles",
    a3_cardiac: "Cardiac muscles",
    a3_all: "All three types",

    q4: "What happens when a muscle contracts?",
    a4_shortens: "It shortens and pulls a bone",
    a4_lengthens: "It lengthens and pushes a bone",
    a4_vibrates: "It vibrates rapidly",
    a4_relaxes: "It relaxes and rests",

    q5: "Which joint allows movement in many directions?",
    a5_ballsocket: "Ball & socket (hip, shoulder)",
    a5_hinge: "Hinge joint (elbow, knee)",
    a5_fixed: "Fixed joint (skull)",
    a5_pivot: "Pivot joint (neck)",
  },

  de: {
    // Round 1: Skeleton Functions
    r1Title: "Skelettfunktionen",
    r1Text: "Das Skelett ist ein Gerüst aus Knochen, das deinen Körper stützt. Es hat vier Hauptaufgaben:",
    r1B1: "Stützen: Hält deinen Körper aufrecht und gibt ihm Form",
    r1B2: "Schutz: Schützt lebenswichtige Organe wie das Gehirn (Schädel), Herz (Rippen), Lungen (Rippen)",
    r1B3: "Bewegung: Muskeln sind an Knochen befestigt und bewegen sie, was Bewegung ermöglicht",
    r1B4: "Blutproduktion: In Knochen werden in Mark rote Blutkörperchen gebildet",

    // Round 2: Major Bones
    r2Title: "Hauptknochen",
    r2Text: "Diese Knochen sind wichtige Strukturen, die du kennen solltest:",
    r2B1: "Schädel: Schützt das Gehirn und formt dein Gesicht",
    r2B2: "Wirbelsäule: Verläuft den Rücken hinunter, stützt deinen Körper, schützt das Rückenmark",
    r2B3: "Rippen: Käfig um die Brust, schützen Herz und Lungen",
    r2B4: "Becken: Beckenförmiger Knochen, stützt Organe und Beine",
    r2B5: "Oberschenkelknochen: Der längste Knochen, trägt Körpergewicht beim Stehen und Gehen",
    r2B6: "Oberarmknochen: Ermöglicht Armbewegung an der Schulter",

    // Round 3: Muscles & Movement
    r3Title: "Muskeln & Bewegung",
    r3Text: "Drei Arten von Muskeln arbeiten in deinem Körper, aber nur Skelettmuskeln sind unter deiner Kontrolle:",
    r3B1: "Skelettmuskeln: Willkürlich — du kontrollierst sie. Bewegen deine Knochen. (Beispiel: Bizeps beim Armflexen)",
    r3B2: "Glatte Muskeln: Unwillkürlich — dein Körper kontrolliert sie. In Magen, Darm, Blutgefäßen",
    r3B3: "Herzmuskel: Unwillkürlich — nur im Herzen. Schlägt ohne dein Denken",
    r3B4: "So funktionieren sie: Muskeln ziehen an Knochen paarweise. Wenn einer sich kontrahiert (verkürzt), zieht er; der andere entspannt sich (verlängert)",

    // Round 4: Joints & Flexibility
    r4Title: "Gelenke & Flexibilität",
    r4Text: "Gelenke sind Stellen, an denen zwei Knochen treffen, was Bewegung und Flexibilität ermöglicht:",
    r4B1: "Echte Gelenke (Schädel): Knochen verschmolzen, keine Bewegung. Schützt das Gehirn",
    r4B2: "Scharniergelenke (Ellbogen, Knie): Bewegen sich vor und zurück wie eine Tür. Von Muskelpaaren gesteuert",
    r4B3: "Kugelgelenke (Hüfte, Schulter): Bewegen sich in viele Richtungen. Geben große Flexibilität",
    r4B4: "Knorpel: Glattes Gewebe zwischen Knochen reduziert Reibung und dämpft Stöße",

    // Quiz Round 5
    q1: "Welcher Knochen schützt das Gehirn?",
    a1_skull: "Schädel",
    a1_spine: "Wirbelsäule",
    a1_ribs: "Rippen",
    a1_femur: "Oberschenkelknochen",

    q2: "Was ist die Hauptfunktion der Rippen?",
    a2_protect: "Schützen Herz und Lungen",
    a2_movement: "Ermöglichen Bewegung",
    a2_support: "Stützen den Kopf",
    a2_blood: "Bilden Blutzellen",

    q3: "Welcher Muskeltyp wird willkürlich kontrolliert?",
    a3_skeletal: "Skelettmuskeln",
    a3_smooth: "Glatte Muskeln",
    a3_cardiac: "Herzmuskel",
    a3_all: "Alle drei Typen",

    q4: "Was passiert, wenn sich ein Muskel kontrahiert?",
    a4_shortens: "Er verkürzt sich und zieht einen Knochen",
    a4_lengthens: "Er verlängert sich und drückt einen Knochen",
    a4_vibrates: "Er vibriert schnell",
    a4_relaxes: "Er entspannt sich und ruht",

    q5: "Welches Gelenk erlaubt Bewegung in viele Richtungen?",
    a5_ballsocket: "Kugelgelenk (Hüfte, Schulter)",
    a5_hinge: "Scharniergelenk (Ellbogen, Knie)",
    a5_fixed: "Echtes Gelenk (Schädel)",
    a5_pivot: "Drehgelenk (Nacken)",
  },

  hu: {
    // Round 1: Skeleton Functions
    r1Title: "A csontváz funkciói",
    r1Text: "A csontváz csontokból álló váz, amely a tested támogatja. Négy fő feladata van:",
    r1B1: "Támogatás: Tartja a tested egyenesen és adja meg az alakját",
    r1B2: "Védelem: Megvédi az élelmes szerveket, mint az agy (koponya), szív (bordák), tüdő (bordák)",
    r1B3: "Mozgás: Az izmok a csontokra tapadnak és mozgatják őket, mozgást hozva létre",
    r1B4: "Vértermelés: A csontok belsejében a velőben vörösvérsejtek képződnek",

    // Round 2: Major Bones
    r2Title: "Fő csontok",
    r2Text: "Ezek a csontok fontos struktúrák, amelyeket ismernél:",
    r2B1: "Koponya: Megvédi az agyat és alakítja az arcod",
    r2B2: "Gerincoszlop: A hátad mentén fut le, támogatja a tested, megvédi a gerincvelőt",
    r2B3: "Bordák: Ketrecábra a mellkas körül, megvédik a szívet és tüdőt",
    r2B4: "Medence: Medenceformájú csont, támogatja a szerveket és a lábakat",
    r2B5: "Combcsont: A leghosszabb csont, hordja a testsúlyod álláskor és járáskor",
    r2B6: "Felkarcsont: Lehetővé teszi a karmovement a váll mellett",

    // Round 3: Muscles & Movement
    r3Title: "Izmok & Mozgás",
    r3Text: "Háromféle izom működik a tested, de csak a vázizmok vannak az irányítás alatt:",
    r3B1: "Vázizmok: Akaratlagos — te irányítod őket. Mozgatják a csontjaidat. (Például: bicepsz, ha meghajlítod a karod)",
    r3B2: "Sima izmok: Nem akaratlagos — a tested irányítja őket. A gyomorban, szoros, erekben",
    r3B3: "Szívizom: Nem akaratlagos — csak a szívben. A gondolatod nélkül ver",
    r3B4: "Hogyan működnek: Az izmok páros csontokat húznak. Ha az egyik összehúzódik (rövidül), húz; a másik ellazít (meghosszabbodik)",

    // Round 4: Joints & Flexibility
    r4Title: "Ízületek & Rugalmasság",
    r4Text: "Az ízületek azok a helyek, ahol két csont találkozik, lehetővé téve a mozgást és rugalmasságot:",
    r4B1: "Rögzített ízületek (Koponya): Csontok összenőve, mozgás. Megvédi az agyat",
    r4B2: "Ajtózár ízületek (Könyök, Térd): Előre és hátra mozognak, mint egy ajtó. Az izmok párok irányítják",
    r4B3: "Gömb ízületek (Csípő, Váll): Sok irányba mozognak. Nagy rugalmasságot adnak",
    r4B4: "Porc: Sima szövet a csontok között csökkenti a súrlódást és csillapítja az ütéseket",

    // Quiz Round 5
    q1: "Melyik csont megvédi az agyat?",
    a1_skull: "Koponya",
    a1_spine: "Gerincoszlop",
    a1_ribs: "Bordák",
    a1_femur: "Combcsont",

    q2: "Mi a bordák fő funkciója?",
    a2_protect: "Megvédi a szívet és tüdőt",
    a2_movement: "Lehetővé teszi a mozgást",
    a2_support: "Támogatja a fejet",
    a2_blood: "Vérsejteket termel",

    q3: "Melyik izomtípus akaratlagos?",
    a3_skeletal: "Vázizmok",
    a3_smooth: "Sima izmok",
    a3_cardiac: "Szívizom",
    a3_all: "Mindhárom típus",

    q4: "Mi történik, amikor egy izom összehúzódik?",
    a4_shortens: "Rövidül és húz egy csontot",
    a4_lengthens: "Meghosszabbodik és nyom egy csontot",
    a4_vibrates: "Gyorsan rezeg",
    a4_relaxes: "Ellazít és pihen",

    q5: "Melyik ízület sokféle irányú mozgást enged?",
    a5_ballsocket: "Gömb ízület (csípő, váll)",
    a5_hinge: "Ajtózár ízület (könyök, térd)",
    a5_fixed: "Rögzített ízület (koponya)",
    a5_pivot: "Forgó ízület (nyak)",
  },

  ro: {
    // Round 1: Skeleton Functions
    r1Title: "Funcțiile scheletului",
    r1Text: "Scheletul este o structură din oase care susține corpul tău. Are patru sarcini principale:",
    r1B1: "Suport: Ține corpul drept și îi dă forma",
    r1B2: "Protecție: Protejează organele vitale precum creierul (craniu), inima (coaste), plămânii (coaste)",
    r1B3: "Mișcare: Mușchii sunt atașați la oase și le mișcă, creând mișcare",
    r1B4: "Producție de sânge: În oase, în măduva oaselor se produc globule roșii",

    // Round 2: Major Bones
    r2Title: "Oase majore",
    r2Text: "Aceste oase sunt structuri cheie pe care ar trebui să le cunoști:",
    r2B1: "Craniu: Protejează creierul și formează fața",
    r2B2: "Coloana vertebrală: Se prelungește pe spate, susține corpul, protejează măduva spinării",
    r2B3: "Coaste: Cușcă în jurul pieptului, protejează inima și plămânii",
    r2B4: "Pelvis: Os în formă de bazin, susține organele și picioarele",
    r2B5: "Femur: Cel mai lung os, suportă greutatea corpului în timp ce stai și mergi",
    r2B6: "Humerus: Permite mișcarea brațului la umăr",

    // Round 3: Muscles & Movement
    r3Title: "Mușchi & Mișcare",
    r3Text: "Trei tipuri de mușchi lucrează în corpul tău, dar doar mușchii scheletici sunt sub control:",
    r3B1: "Mușchi scheletici: Voluntari — tu îi controlezi. Mișcă oasele. (Exemplu: biceps când îți încrețești brațul)",
    r3B2: "Mușchi lin: Involuntar — corpul tău îi controlează. În stomac, intestine, vase de sânge",
    r3B3: "Mușchiul cardiac: Involuntar — doar în inimă. Bate fără să te gândești",
    r3B4: "Cum funcționează: Mușchii trag pe oase în perechi. Când unul se contractă (se scurtează), trage; celălalt se relaxează (se alungește)",

    // Round 4: Joints & Flexibility
    r4Title: "Articulații & Flexibilitate",
    r4Text: "Articulațiile sunt locuri în care doi oase se întâlnesc, permițând mișcare și flexibilitate:",
    r4B1: "Articulații fixe (Craniu): Oasele fuzionate, fără mișcare. Protejează creierul",
    r4B2: "Articulații balamale (Cot, Genunchi): Se mișcă înainte și înapoi ca o ușă. Controlate de perechi de mușchi",
    r4B3: "Articulații sferice (Șold, Umăr): Se mișcă în mai multe direcții. Oferă mare flexibilitate",
    r4B4: "Cartilaj: Țesut neted între oase reduce fricțiunea și amortizează impacturile",

    // Quiz Round 5
    q1: "Care os protejează creierul?",
    a1_skull: "Craniu",
    a1_spine: "Coloana vertebrală",
    a1_ribs: "Coaste",
    a1_femur: "Femur",

    q2: "Care este funcția principală a coastelor?",
    a2_protect: "Protejează inima și plămânii",
    a2_movement: "Permit mișcarea",
    a2_support: "Susțin capul",
    a2_blood: "Produc celule de sânge",

    q3: "Ce tip de mușchi controlezi voluntar?",
    a3_skeletal: "Mușchi scheletici",
    a3_smooth: "Mușchi lin",
    a3_cardiac: "Mușchiul cardiac",
    a3_all: "Toate trei tipuri",

    q4: "Ce se întâmplă când un mușchi se contractă?",
    a4_shortens: "Se scurtează și trage un os",
    a4_lengthens: "Se alungește și împinge un os",
    a4_vibrates: "Vibrează rapid",
    a4_relaxes: "Se relaxează și se odihnește",

    q5: "Care articulație permite mișcarea în mai multe direcții?",
    a5_ballsocket: "Articulație sferică (șold, umăr)",
    a5_hinge: "Articulație balamală (cot, genunchi)",
    a5_fixed: "Articulație fixă (craniu)",
    a5_pivot: "Articulație pivotantă (gât)",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Illustrations
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1(lang: string) {
  const l = LABELS[lang] || LABELS.en;
  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#F9CA24"];
  const badges = [
    { icon: "🏗️", label: "support", color: colors[0] },
    { icon: "🛡️", label: "protect", color: colors[1] },
    { icon: "💪", label: "movement", color: colors[2] },
    { icon: "🩸", label: "blood_cells", color: colors[3] },
  ];

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r1_skeleton" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c4a0" />
          <stop offset="100%" stopColor="#d4a574" />
        </linearGradient>
        <filter id="r1_glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dark background */}
      <rect width="240" height="160" fill="#0a0a14" />

      {/* Center skeleton silhouette */}
      <g>
        {/* Head */}
        <circle cx="120" cy="35" r="12" fill="url(#r1_skeleton)" filter="url(#r1_glow)" />
        {/* Spine */}
        <rect x="116" y="48" width="8" height="35" fill="url(#r1_skeleton)" filter="url(#r1_glow)" />
        {/* Ribcage */}
        <ellipse cx="120" cy="70" rx="18" ry="14" fill="none" stroke="url(#r1_skeleton)" strokeWidth="2" filter="url(#r1_glow)" />
        {/* Pelvis */}
        <ellipse cx="120" cy="95" rx="16" ry="10" fill="none" stroke="url(#r1_skeleton)" strokeWidth="2" filter="url(#r1_glow)" />
        {/* Left arm */}
        <line x1="102" y1="60" x2="90" y2="50" stroke="url(#r1_skeleton)" strokeWidth="3" filter="url(#r1_glow)" />
        {/* Right arm */}
        <line x1="138" y1="60" x2="150" y2="50" stroke="url(#r1_skeleton)" strokeWidth="3" filter="url(#r1_glow)" />
        {/* Left leg */}
        <line x1="110" y1="105" x2="108" y2="135" stroke="url(#r1_skeleton)" strokeWidth="3" filter="url(#r1_glow)" />
        {/* Right leg */}
        <line x1="130" y1="105" x2="132" y2="135" stroke="url(#r1_skeleton)" strokeWidth="3" filter="url(#r1_glow)" />
      </g>

      {/* Function badges around skeleton */}
      {badges.map((b, i) => {
        const angles = [0, 90, 180, 270];
        const angle = (angles[i] * Math.PI) / 180;
        const radius = 65;
        const cx = 120 + radius * Math.cos(angle);
        const cy = 80 + radius * Math.sin(angle);

        return (
          <g key={i}>
            {/* Circle background */}
            <circle cx={cx} cy={cy} r="18" fill={b.color} opacity="0.2" />
            <circle cx={cx} cy={cy} r="18" fill="none" stroke={b.color} strokeWidth="1.5" />
            {/* Badge icon */}
            <text x={cx} y={cy + 7} textAnchor="middle" fontSize="18" dominantBaseline="middle">
              {b.icon}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <text x="120" y="155" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.5)" fontWeight="600">
        4 Functions
      </text>
    </svg>
  );
}

function SVG_R2(lang: string) {
  const l = LABELS[lang] || LABELS.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r2_bone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0e6d2" />
          <stop offset="100%" stopColor="#c9b8a0" />
        </linearGradient>
        <filter id="r2_shadow">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      <rect width="240" height="160" fill="#0a0a14" />

      {/* Skeleton with labeled bones */}
      <g>
        {/* Skull */}
        <circle cx="120" cy="30" r="10" fill="url(#r2_bone)" />
        <text x="120" y="52" textAnchor="middle" fontSize="10" fill="#e8c4a0" fontWeight="bold">
          💀
        </text>
        <line x1="120" y1="40" x2="120" y2="48" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2" />
        <text x="135" y="48" fontSize="5.5" fill="rgba(255,255,255,0.7)" fontWeight="500">
          Skull
        </text>

        {/* Spine */}
        <rect x="116" y="45" width="8" height="32" fill="url(#r2_bone)" />
        <line x1="128" y1="60" x2="150" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2" />
        <text x="155" y="63" fontSize="5.5" fill="rgba(255,255,255,0.7)" fontWeight="500">
          Spine
        </text>

        {/* Ribs */}
        <ellipse cx="120" cy="68" rx="16" ry="11" fill="none" stroke="url(#r2_bone)" strokeWidth="2" />
        <line x1="104" y1="68" x2="85" y2="68" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2" />
        <text x="70" y="71" fontSize="5.5" fill="rgba(255,255,255,0.7)" fontWeight="500">
          Ribs
        </text>

        {/* Pelvis */}
        <ellipse cx="120" cy="100" rx="14" ry="8" fill="none" stroke="url(#r2_bone)" strokeWidth="2" />
        <line x1="134" y1="100" x2="160" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2" />
        <text x="165" y="103" fontSize="5.5" fill="rgba(255,255,255,0.7)" fontWeight="500">
          Pelvis
        </text>

        {/* Femur (left leg) */}
        <line x1="110" y1="108" x2="105" y2="135" stroke="url(#r2_bone)" strokeWidth="3" />
        <line x1="89" y1="125" x2="105" y2="135" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2" />
        <text x="75" y="128" fontSize="5.5" fill="rgba(255,255,255,0.7)" fontWeight="500">
          Femur
        </text>

        {/* Humerus (left arm) */}
        <line x1="104" y1="55" x2="85" y2="38" stroke="url(#r2_bone)" strokeWidth="2.5" />
        <line x1="75" y1="42" x2="85" y2="38" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2,2" />
        <text x="68" y="34" fontSize="5.5" fill="rgba(255,255,255,0.7)" fontWeight="500">
          Humerus
        </text>
      </g>

      <text x="120" y="155" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.5)" fontWeight="600">
        Major Bones
      </text>
    </svg>
  );
}

function SVG_R3(lang: string) {
  const l = LABELS[lang] || LABELS.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r3_skeletal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#cc5555" />
        </linearGradient>
        <linearGradient id="r3_smooth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#cc8400" />
        </linearGradient>
        <linearGradient id="r3_cardiac" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1744" />
          <stop offset="100%" stopColor="#cc1133" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="#0a0a14" />

      {/* Three muscle types */}

      {/* Left: Skeletal (Arm) */}
      <g>
        <rect x="20" y="20" width="55" height="120" rx="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="47.5" y="35" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)" fontWeight="bold">
          Skeletal
        </text>
        {/* Bicep */}
        <ellipse cx="35" cy="70" rx="8" ry="15" fill="url(#r3_skeletal)" />
        <text x="35" y="72" textAnchor="middle" fontSize="20" dominantBaseline="middle">
          💪
        </text>
        {/* Label */}
        <text x="47.5" y="105" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.7)" fontWeight="500">
          Voluntary
        </text>
        <text x="47.5" y="115" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)">
          (You control)
        </text>
      </g>

      {/* Center: Smooth (Stomach) */}
      <g>
        <rect x="92.5" y="20" width="55" height="120" rx="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="120" y="35" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)" fontWeight="bold">
          Smooth
        </text>
        {/* Stomach */}
        <path
          d="M 110 65 Q 115 55 125 60 Q 130 70 120 80 Q 110 85 105 75 Z"
          fill="url(#r3_smooth)"
        />
        <text x="120" y="72" textAnchor="middle" fontSize="20" dominantBaseline="middle">
          🫙
        </text>
        {/* Label */}
        <text x="120" y="105" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.7)" fontWeight="500">
          Involuntary
        </text>
        <text x="120" y="115" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)">
          (Body controls)
        </text>
      </g>

      {/* Right: Cardiac (Heart) */}
      <g>
        <rect x="165" y="20" width="55" height="120" rx="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="192.5" y="35" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)" fontWeight="bold">
          Cardiac
        </text>
        {/* Heart */}
        <path
          d="M 192 65 L 188 60 Q 185 55 182 60 Q 180 65 185 72 L 192 80 L 199 72 Q 204 65 202 60 Q 199 55 196 60 Z"
          fill="url(#r3_cardiac)"
        />
        <text x="192" y="68" textAnchor="middle" fontSize="20" dominantBaseline="middle">
          ❤️
        </text>
        {/* Label */}
        <text x="192.5" y="105" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.7)" fontWeight="500">
          Involuntary
        </text>
        <text x="192.5" y="115" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)">
          (Always beats)
        </text>
      </g>
    </svg>
  );
}

function SVG_R4(lang: string) {
  const l = LABELS[lang] || LABELS.en;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r4_joint" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#45B7D1" />
          <stop offset="100%" stopColor="#2a7da5" />
        </linearGradient>
      </defs>

      <rect width="240" height="160" fill="#0a0a14" />

      {/* Joint types */}

      {/* Hinge joint (Elbow-like) */}
      <g>
        {/* Upper arm */}
        <line x1="40" y1="40" x2="40" y2="70" stroke="#d4a574" strokeWidth="4" />
        {/* Joint circle */}
        <circle cx="40" cy="70" r="5" fill="url(#r4_joint)" />
        {/* Lower arm */}
        <line x1="40" y1="70" x2="40" y2="100" stroke="#c9b8a0" strokeWidth="4" />
        {/* Flex arrow */}
        <path d="M 50 80 Q 65 75 70 65" fill="none" stroke="rgba(255,200,100,0.6)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        {/* Label */}
        <text x="40" y="125" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontWeight="bold">
          Hinge
        </text>
        <text x="40" y="135" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.5)">
          (Back/Forth)
        </text>
      </g>

      {/* Ball & Socket joint (Hip-like) */}
      <g>
        {/* Pelvis */}
        <ellipse cx="140" cy="50" rx="12" ry="8" fill="none" stroke="#d4a574" strokeWidth="2" />
        {/* Joint sphere */}
        <circle cx="140" cy="75" r="7" fill="url(#r4_joint)" />
        {/* Femur */}
        <line x1="140" y1="82" x2="140" y2="110" stroke="#c9b8a0" strokeWidth="4" />
        {/* Multi-direction arrows */}
        <path d="M 155 75 L 165 75" fill="none" stroke="rgba(100,200,255,0.6)" strokeWidth="1.5" />
        <path d="M 125 75 L 115 75" fill="none" stroke="rgba(100,200,255,0.6)" strokeWidth="1.5" />
        <path d="M 140 60 L 140 50" fill="none" stroke="rgba(100,200,255,0.6)" strokeWidth="1.5" />
        {/* Label */}
        <text x="140" y="125" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontWeight="bold">
          Ball & Socket
        </text>
        <text x="140" y="135" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.5)">
          (Multi-direction)
        </text>
      </g>

      {/* Cartilage cushion illustration */}
      <g>
        {/* Two bone surfaces */}
        <rect x="220" y="50" width="8" height="15" fill="#d4a574" rx="1" />
        <rect x="220" y="70" width="8" height="15" fill="#d4a574" rx="1" />
        {/* Cartilage between */}
        <rect x="220" y="65" width="8" height="5" fill="rgba(100,255,200,0.4)" />
        {/* Label */}
        <text x="240" y="80" fontSize="7" fill="rgba(255,255,255,0.5)" fontWeight="500">
          Cartilage
        </text>
      </g>

      <text x="120" y="155" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.5)" fontWeight="600">
        Types of Joints
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Explorer Definition
// ─────────────────────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    // Round 1: Skeleton Functions (MCQ with 1 question)
    {
      type: "mcq",
      infoTitle: "r1Title",
      infoText: "r1Text",
      svg: SVG_R1,
      bulletKeys: ["r1B1", "r1B2", "r1B3", "r1B4"],
      questions: [
        {
          question: "q1",
          choices: ["a1_skull", "a1_spine", "a1_ribs", "a1_femur"],
          answer: "a1_skull",
        },
      ],
    },

    // Round 2: Major Bones (MCQ with 1 question)
    {
      type: "mcq",
      infoTitle: "r2Title",
      infoText: "r2Text",
      svg: SVG_R2,
      bulletKeys: ["r2B1", "r2B2", "r2B3", "r2B4", "r2B5", "r2B6"],
      questions: [
        {
          question: "q2",
          choices: ["a2_protect", "a2_movement", "a2_support", "a2_blood"],
          answer: "a2_protect",
        },
      ],
    },

    // Round 3: Muscles & Movement (MCQ with 1 question)
    {
      type: "mcq",
      infoTitle: "r3Title",
      infoText: "r3Text",
      svg: SVG_R3,
      bulletKeys: ["r3B1", "r3B2", "r3B3", "r3B4"],
      questions: [
        {
          question: "q3",
          choices: ["a3_skeletal", "a3_smooth", "a3_cardiac", "a3_all"],
          answer: "a3_skeletal",
        },
      ],
    },

    // Round 4: Joints & Flexibility (MCQ with 1 question)
    {
      type: "mcq",
      infoTitle: "r4Title",
      infoText: "r4Text",
      svg: SVG_R4,
      bulletKeys: ["r4B1", "r4B2", "r4B3", "r4B4"],
      questions: [
        {
          question: "q5",
          choices: ["a5_ballsocket", "a5_hinge", "a5_fixed", "a5_pivot"],
          answer: "a5_ballsocket",
        },
      ],
    },

    // Round 5: Quiz (MCQ with 2 review questions)
    {
      type: "mcq",
      infoTitle: "r1Title",
      infoText: "r1Text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
          <rect width="240" height="160" fill="#0a0a14" />
          <text x="120" y="80" textAnchor="middle" fontSize="14" fill="rgba(255,255,255,0.6)" fontWeight="bold">
            🧠 Time to Review!
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q4",
          choices: ["a4_shortens", "a4_lengthens", "a4_vibrates", "a4_relaxes"],
          answer: "a4_shortens",
        },
        {
          question: "q1",
          choices: ["a1_skull", "a1_spine", "a1_ribs", "a1_femur"],
          answer: "a1_skull",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function SkeletonExplorer({ color = "#3B82F6", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} />;
}
