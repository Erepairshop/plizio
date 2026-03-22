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
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="sk_r1_bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0f1525" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <linearGradient id="sk_r1_bone" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#f5e6d0" />
          <stop offset="30%" stopColor="#e8d4b8" />
          <stop offset="70%" stopColor="#d4b896" />
          <stop offset="100%" stopColor="#c4a478" />
        </linearGradient>
        <linearGradient id="sk_r1_bone_dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4b896" />
          <stop offset="100%" stopColor="#a08060" />
        </linearGradient>
        <radialGradient id="sk_r1_skull" cx="45%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#f5e6d0" />
          <stop offset="50%" stopColor="#e8d4b8" />
          <stop offset="100%" stopColor="#c4a478" />
        </radialGradient>
        <radialGradient id="sk_r1_marrow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF5252" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#B71C1C" stopOpacity="0.3" />
        </radialGradient>
        <filter id="sk_r1_glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sk_r1_soft">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <rect width="240" height="160" fill="url(#sk_r1_bg)" />

      {/* Soft body silhouette behind skeleton */}
      <ellipse cx="120" cy="78" rx="28" ry="55" fill="rgba(100,150,200,0.06)" filter="url(#sk_r1_soft)" />

      {/* ── FULL SKELETON ── */}
      <g filter="url(#sk_r1_glow)">
        {/* Skull */}
        <ellipse cx="120" cy="22" rx="11" ry="13" fill="url(#sk_r1_skull)" />
        <ellipse cx="120" cy="20" rx="9" ry="10" fill="url(#sk_r1_skull)" />
        {/* Eye sockets */}
        <ellipse cx="116" cy="20" rx="2.5" ry="2" fill="#0a0a14" opacity="0.6" />
        <ellipse cx="124" cy="20" rx="2.5" ry="2" fill="#0a0a14" opacity="0.6" />
        {/* Nasal cavity */}
        <path d="M 119,24 L 120,27 L 121,24" stroke="#a08060" strokeWidth="0.5" fill="none" />
        {/* Jaw */}
        <path d="M 112,28 Q 120,34 128,28" stroke="url(#sk_r1_bone_dark)" strokeWidth="1.5" fill="none" />

        {/* Cervical spine (neck) */}
        {[36, 39, 42].map((y, i) => (
          <rect key={`c${i}`} x="117" y={y} width="6" height="2.5" rx="1" fill="url(#sk_r1_bone)" opacity={0.9 - i * 0.05} />
        ))}

        {/* Ribcage — curved ribs */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const y = 48 + i * 5;
          const spread = 12 + i * 1.5;
          return (
            <g key={`rib${i}`}>
              <path d={`M 120,${y} Q ${120 - spread},${y + 2} ${120 - spread - 2},${y + 4}`} stroke="url(#sk_r1_bone)" strokeWidth="1.5" fill="none" opacity="0.85" />
              <path d={`M 120,${y} Q ${120 + spread},${y + 2} ${120 + spread + 2},${y + 4}`} stroke="url(#sk_r1_bone)" strokeWidth="1.5" fill="none" opacity="0.85" />
            </g>
          );
        })}
        {/* Sternum */}
        <rect x="118.5" y="48" width="3" height="28" rx="1" fill="url(#sk_r1_bone)" opacity="0.7" />

        {/* Thoracic + Lumbar spine */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect key={`s${i}`} x="117" y={48 + i * 5} width="6" height="3.5" rx="1" fill="url(#sk_r1_bone)" opacity={0.8 - i * 0.03} />
        ))}

        {/* Pelvis */}
        <path d="M 104,92 Q 108,84 120,82 Q 132,84 136,92 Q 132,98 120,100 Q 108,98 104,92 Z" fill="url(#sk_r1_bone)" opacity="0.8" />
        <ellipse cx="120" cy="92" rx="8" ry="5" fill="#0a0a14" opacity="0.3" />

        {/* Clavicles */}
        <path d="M 120,46 Q 108,44 98,48" stroke="url(#sk_r1_bone)" strokeWidth="2" fill="none" />
        <path d="M 120,46 Q 132,44 142,48" stroke="url(#sk_r1_bone)" strokeWidth="2" fill="none" />

        {/* Scapulae hints */}
        <path d="M 96,50 Q 94,56 96,62" stroke="url(#sk_r1_bone_dark)" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M 144,50 Q 146,56 144,62" stroke="url(#sk_r1_bone_dark)" strokeWidth="1.2" fill="none" opacity="0.5" />

        {/* Left arm */}
        <line x1="98" y1="48" x2="88" y2="72" stroke="url(#sk_r1_bone)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="88" cy="72" r="2" fill="url(#sk_r1_bone)" />
        <line x1="88" y1="72" x2="82" y2="95" stroke="url(#sk_r1_bone)" strokeWidth="2" strokeLinecap="round" />
        <line x1="88" y1="72" x2="85" y2="95" stroke="url(#sk_r1_bone_dark)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        {/* Right arm */}
        <line x1="142" y1="48" x2="152" y2="72" stroke="url(#sk_r1_bone)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="152" cy="72" r="2" fill="url(#sk_r1_bone)" />
        <line x1="152" y1="72" x2="158" y2="95" stroke="url(#sk_r1_bone)" strokeWidth="2" strokeLinecap="round" />
        <line x1="152" y1="72" x2="155" y2="95" stroke="url(#sk_r1_bone_dark)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        {/* Left leg: femur + tibia/fibula */}
        <line x1="112" y1="98" x2="106" y2="125" stroke="url(#sk_r1_bone)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="106" cy="125" r="2.5" fill="url(#sk_r1_bone)" />
        <line x1="106" y1="125" x2="104" y2="148" stroke="url(#sk_r1_bone)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="106" y1="125" x2="107" y2="148" stroke="url(#sk_r1_bone_dark)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

        {/* Right leg */}
        <line x1="128" y1="98" x2="134" y2="125" stroke="url(#sk_r1_bone)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="134" cy="125" r="2.5" fill="url(#sk_r1_bone)" />
        <line x1="134" y1="125" x2="136" y2="148" stroke="url(#sk_r1_bone)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="134" y1="125" x2="133" y2="148" stroke="url(#sk_r1_bone_dark)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

        {/* Hands (simplified) */}
        <circle cx="82" cy="96" r="2.5" fill="url(#sk_r1_bone)" opacity="0.7" />
        <circle cx="158" cy="96" r="2.5" fill="url(#sk_r1_bone)" opacity="0.7" />

        {/* Feet */}
        <path d="M 100,148 L 104,148 L 108,148" stroke="url(#sk_r1_bone)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 132,148 L 136,148 L 140,148" stroke="url(#sk_r1_bone)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Function indicators — colored dots around skeleton */}
      {/* Support (top) */}
      <circle cx="120" cy="6" r="5" fill="rgba(255,107,107,0.2)" stroke="#FF6B6B" strokeWidth="0.8" />
      <circle cx="120" cy="6" r="2" fill="#FF6B6B" opacity="0.6" />
      {/* Protect (left — ribs area) */}
      <circle cx="62" cy="60" r="5" fill="rgba(78,205,196,0.2)" stroke="#4ECDC4" strokeWidth="0.8" />
      <circle cx="62" cy="60" r="2" fill="#4ECDC4" opacity="0.6" />
      {/* Movement (right) */}
      <circle cx="178" cy="60" r="5" fill="rgba(69,183,209,0.2)" stroke="#45B7D1" strokeWidth="0.8" />
      <circle cx="178" cy="60" r="2" fill="#45B7D1" opacity="0.6" />
      {/* Blood production (marrow glow in femur) */}
      <circle cx="120" cy="150" r="5" fill="rgba(249,202,36,0.2)" stroke="#F9CA24" strokeWidth="0.8" />
      <circle cx="120" cy="150" r="2" fill="#F9CA24" opacity="0.6" />
      {/* Bone marrow hint inside femur */}
      <ellipse cx="110" cy="112" rx="1.5" ry="8" fill="url(#sk_r1_marrow)" />
      <ellipse cx="130" cy="112" rx="1.5" ry="8" fill="url(#sk_r1_marrow)" />
    </svg>
  );
}

function SVG_R2(lang: string) {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="sk_r2_bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0f1525" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <linearGradient id="sk_r2_bone" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#f5e6d0" />
          <stop offset="40%" stopColor="#e0c8a8" />
          <stop offset="100%" stopColor="#c4a478" />
        </linearGradient>
        <radialGradient id="sk_r2_skull" cx="45%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#f5e6d0" />
          <stop offset="100%" stopColor="#c4a478" />
        </radialGradient>
        <filter id="sk_r2_glow">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="240" height="160" fill="url(#sk_r2_bg)" />

      <g filter="url(#sk_r2_glow)">
        {/* Skull — detailed */}
        <ellipse cx="120" cy="18" rx="10" ry="12" fill="url(#sk_r2_skull)" />
        <ellipse cx="116" cy="17" rx="2" ry="1.8" fill="#0a0a14" opacity="0.5" />
        <ellipse cx="124" cy="17" rx="2" ry="1.8" fill="#0a0a14" opacity="0.5" />
        <path d="M 119,21 L 120,23 L 121,21" stroke="#a08060" strokeWidth="0.4" fill="none" />
        <path d="M 114,25 Q 120,29 126,25" stroke="#c4a478" strokeWidth="1" fill="none" />

        {/* Spine vertebrae */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <rect key={`v${i}`} x="117.5" y={32 + i * 4} width="5" height="3" rx="1" fill="url(#sk_r2_bone)" opacity={0.85 - i * 0.02} />
        ))}

        {/* Ribs — curved pairs */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const y = 38 + i * 5;
          const sp = 10 + i * 1.8;
          return (
            <g key={`rb${i}`}>
              <path d={`M 120,${y} Q ${120 - sp},${y + 2} ${120 - sp - 3},${y + 3.5}`} stroke="url(#sk_r2_bone)" strokeWidth="1.3" fill="none" opacity="0.8" />
              <path d={`M 120,${y} Q ${120 + sp},${y + 2} ${120 + sp + 3},${y + 3.5}`} stroke="url(#sk_r2_bone)" strokeWidth="1.3" fill="none" opacity="0.8" />
            </g>
          );
        })}

        {/* Pelvis */}
        <path d="M 106,82 Q 110,76 120,74 Q 130,76 134,82 Q 130,88 120,90 Q 110,88 106,82 Z" fill="url(#sk_r2_bone)" opacity="0.75" />

        {/* Clavicles */}
        <path d="M 120,36 Q 110,34 100,38" stroke="url(#sk_r2_bone)" strokeWidth="1.8" fill="none" />
        <path d="M 120,36 Q 130,34 140,38" stroke="url(#sk_r2_bone)" strokeWidth="1.8" fill="none" />

        {/* Left arm: humerus + radius/ulna */}
        <line x1="100" y1="38" x2="90" y2="60" stroke="url(#sk_r2_bone)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="90" cy="60" r="1.8" fill="url(#sk_r2_bone)" />
        <line x1="90" y1="60" x2="84" y2="80" stroke="url(#sk_r2_bone)" strokeWidth="1.8" strokeLinecap="round" />

        {/* Right arm */}
        <line x1="140" y1="38" x2="150" y2="60" stroke="url(#sk_r2_bone)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="150" cy="60" r="1.8" fill="url(#sk_r2_bone)" />
        <line x1="150" y1="60" x2="156" y2="80" stroke="url(#sk_r2_bone)" strokeWidth="1.8" strokeLinecap="round" />

        {/* Left leg: femur */}
        <line x1="114" y1="88" x2="108" y2="118" stroke="url(#sk_r2_bone)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="108" cy="118" r="2.2" fill="url(#sk_r2_bone)" />
        <line x1="108" y1="118" x2="106" y2="145" stroke="url(#sk_r2_bone)" strokeWidth="2" strokeLinecap="round" />

        {/* Right leg */}
        <line x1="126" y1="88" x2="132" y2="118" stroke="url(#sk_r2_bone)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="132" cy="118" r="2.2" fill="url(#sk_r2_bone)" />
        <line x1="132" y1="118" x2="134" y2="145" stroke="url(#sk_r2_bone)" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Colored highlight indicators (no text) pointing to bone regions */}
      {/* Skull pointer */}
      <line x1="130" y1="14" x2="170" y2="10" stroke="rgba(255,107,107,0.4)" strokeWidth="0.7" strokeDasharray="2,2" />
      <circle cx="172" cy="10" r="3" fill="rgba(255,107,107,0.2)" stroke="#FF6B6B" strokeWidth="0.7" />
      {/* Spine pointer */}
      <line x1="124" y1="52" x2="168" y2="52" stroke="rgba(78,205,196,0.4)" strokeWidth="0.7" strokeDasharray="2,2" />
      <circle cx="170" cy="52" r="3" fill="rgba(78,205,196,0.2)" stroke="#4ECDC4" strokeWidth="0.7" />
      {/* Ribs pointer */}
      <line x1="100" y1="50" x2="62" y2="50" stroke="rgba(69,183,209,0.4)" strokeWidth="0.7" strokeDasharray="2,2" />
      <circle cx="60" cy="50" r="3" fill="rgba(69,183,209,0.2)" stroke="#45B7D1" strokeWidth="0.7" />
      {/* Pelvis pointer */}
      <line x1="134" y1="82" x2="172" y2="82" stroke="rgba(249,202,36,0.4)" strokeWidth="0.7" strokeDasharray="2,2" />
      <circle cx="174" cy="82" r="3" fill="rgba(249,202,36,0.2)" stroke="#F9CA24" strokeWidth="0.7" />
      {/* Femur pointer */}
      <line x1="108" y1="130" x2="68" y2="130" stroke="rgba(171,130,255,0.4)" strokeWidth="0.7" strokeDasharray="2,2" />
      <circle cx="66" cy="130" r="3" fill="rgba(171,130,255,0.2)" stroke="#AB82FF" strokeWidth="0.7" />
      {/* Humerus pointer */}
      <line x1="88" y1="50" x2="58" y2="38" stroke="rgba(255,167,38,0.4)" strokeWidth="0.7" strokeDasharray="2,2" />
      <circle cx="56" cy="37" r="3" fill="rgba(255,167,38,0.2)" stroke="#FFA726" strokeWidth="0.7" />
    </svg>
  );
}

function SVG_R3(lang: string) {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="sk_r3_bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0f1525" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <linearGradient id="sk_r3_skeletal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8A80" />
          <stop offset="40%" stopColor="#FF5252" />
          <stop offset="100%" stopColor="#C62828" />
        </linearGradient>
        <linearGradient id="sk_r3_smooth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFCC80" />
          <stop offset="40%" stopColor="#FFA726" />
          <stop offset="100%" stopColor="#E65100" />
        </linearGradient>
        <linearGradient id="sk_r3_cardiac" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="40%" stopColor="#D50000" />
          <stop offset="100%" stopColor="#8E0000" />
        </linearGradient>
        <linearGradient id="sk_r3_bone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5e6d0" />
          <stop offset="100%" stopColor="#c4a478" />
        </linearGradient>
        <filter id="sk_r3_glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="240" height="160" fill="url(#sk_r3_bg)" />

      {/* ── LEFT: Skeletal Muscle (arm flexing) ── */}
      <g>
        <rect x="8" y="8" width="68" height="144" rx="10" fill="rgba(255,82,82,0.05)" stroke="rgba(255,82,82,0.15)" strokeWidth="0.8" />

        {/* Arm bones */}
        <line x1="30" y1="35" x2="30" y2="70" stroke="url(#sk_r3_bone)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="30" cy="70" r="2.5" fill="url(#sk_r3_bone)" />
        <line x1="30" y1="70" x2="50" y2="50" stroke="url(#sk_r3_bone)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Bicep muscle (contracted) — bulging shape */}
        <path d="M 26,42 Q 18,50 16,58 Q 18,66 26,68 Q 30,62 32,55 Q 30,46 26,42 Z" fill="url(#sk_r3_skeletal)" opacity="0.85" />
        {/* Striations (parallel lines = striated muscle) */}
        <path d="M 19,48 Q 22,50 24,52" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" fill="none" />
        <path d="M 18,52 Q 22,54 25,56" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" fill="none" />
        <path d="M 18,56 Q 22,58 25,60" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" fill="none" />
        <path d="M 19,60 Q 22,62 24,64" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" fill="none" />

        {/* Tricep (relaxed) */}
        <path d="M 34,42 Q 40,50 42,58 Q 40,66 34,68" fill="url(#sk_r3_skeletal)" opacity="0.4" />

        {/* Tendon attachments */}
        <path d="M 26,42 L 28,38" stroke="#FFAB91" strokeWidth="1" opacity="0.6" />
        <path d="M 26,68 L 28,70" stroke="#FFAB91" strokeWidth="1" opacity="0.6" />

        {/* Flex arrow */}
        <path d="M 50,55 Q 58,48 55,38" stroke="rgba(255,200,150,0.4)" strokeWidth="1" fill="none" />
        <polygon points="55,38 52,42 57,41" fill="rgba(255,200,150,0.4)" />

        {/* Voluntary indicator — small brain icon */}
        <circle cx="42" cy="100" r="8" fill="rgba(255,82,82,0.1)" stroke="rgba(255,82,82,0.3)" strokeWidth="0.6" />
        <path d="M 38,100 Q 38,95 42,94 Q 46,95 46,100 Q 46,104 42,105 Q 38,104 38,100 Z" fill="rgba(255,82,82,0.3)" />
        <path d="M 40,97 Q 42,96 44,97" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
        <path d="M 40,100 Q 42,99 44,100" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
      </g>

      {/* ── CENTER: Smooth Muscle (organ wall) ── */}
      <g>
        <rect x="86" y="8" width="68" height="144" rx="10" fill="rgba(255,167,38,0.05)" stroke="rgba(255,167,38,0.15)" strokeWidth="0.8" />

        {/* Intestine/organ tube cross-section */}
        <ellipse cx="120" cy="52" rx="22" ry="28" fill="rgba(255,167,38,0.1)" stroke="url(#sk_r3_smooth)" strokeWidth="1.5" />
        {/* Organ wall layers */}
        <ellipse cx="120" cy="52" rx="18" ry="24" fill="none" stroke="url(#sk_r3_smooth)" strokeWidth="0.8" opacity="0.5" />
        <ellipse cx="120" cy="52" rx="14" ry="20" fill="none" stroke="url(#sk_r3_smooth)" strokeWidth="0.6" opacity="0.3" />

        {/* Smooth muscle fibers — spindle shapes */}
        {[
          { cx: 105, cy: 38 }, { cx: 135, cy: 38 },
          { cx: 100, cy: 52 }, { cx: 140, cy: 52 },
          { cx: 105, cy: 66 }, { cx: 135, cy: 66 },
        ].map((p, i) => (
          <ellipse key={`sm${i}`} cx={p.cx} cy={p.cy} rx="6" ry="2.5" fill="url(#sk_r3_smooth)" opacity="0.6" transform={`rotate(${i % 2 === 0 ? -20 : 20} ${p.cx} ${p.cy})`} />
        ))}
        {/* Nuclei in smooth muscle cells */}
        {[
          { cx: 105, cy: 38 }, { cx: 135, cy: 38 },
          { cx: 100, cy: 52 }, { cx: 140, cy: 52 },
        ].map((p, i) => (
          <circle key={`sn${i}`} cx={p.cx} cy={p.cy} r="1" fill="#4E342E" opacity="0.4" />
        ))}

        {/* Peristalsis wave arrows */}
        <path d="M 120,28 Q 125,22 120,16" stroke="rgba(255,167,38,0.3)" strokeWidth="0.8" fill="none" />
        <path d="M 120,88 Q 115,82 120,76" stroke="rgba(255,167,38,0.3)" strokeWidth="0.8" fill="none" />

        {/* Automatic indicator */}
        <circle cx="120" cy="105" r="8" fill="rgba(255,167,38,0.1)" stroke="rgba(255,167,38,0.3)" strokeWidth="0.6" />
        <path d="M 117,103 L 120,99 L 123,103" stroke="rgba(255,167,38,0.5)" strokeWidth="0.8" fill="none" />
        <path d="M 117,107 L 120,103 L 123,107" stroke="rgba(255,167,38,0.5)" strokeWidth="0.8" fill="none" />
      </g>

      {/* ── RIGHT: Cardiac Muscle (heart) ── */}
      <g>
        <rect x="164" y="8" width="68" height="144" rx="10" fill="rgba(213,0,0,0.05)" stroke="rgba(213,0,0,0.15)" strokeWidth="0.8" />

        {/* Heart shape — anatomical */}
        <path d="M 198,35 Q 188,28 182,35 Q 178,42 185,52 L 198,68 L 211,52 Q 218,42 214,35 Q 208,28 198,35 Z" fill="url(#sk_r3_cardiac)" filter="url(#sk_r3_glow)" />
        {/* Heart shine */}
        <path d="M 188,36 Q 185,40 186,45" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" strokeLinecap="round" />

        {/* Cardiac muscle striations + branching */}
        <path d="M 186,40 L 194,42 L 198,40 L 206,43" stroke="rgba(255,200,200,0.25)" strokeWidth="0.5" fill="none" />
        <path d="M 188,46 L 195,48 L 200,46 L 208,49" stroke="rgba(255,200,200,0.25)" strokeWidth="0.5" fill="none" />
        <path d="M 190,52 L 196,54 L 200,52 L 206,55" stroke="rgba(255,200,200,0.25)" strokeWidth="0.5" fill="none" />
        {/* Intercalated discs */}
        <line x1="194" y1="40" x2="194" y2="44" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        <line x1="200" y1="44" x2="200" y2="48" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />

        {/* Heartbeat pulse lines */}
        <path d="M 172,85 L 178,85 L 182,75 L 186,92 L 190,80 L 194,85 L 198,85 L 202,85 L 206,75 L 210,92 L 214,80 L 218,85 L 224,85" stroke="rgba(213,0,0,0.5)" strokeWidth="1" fill="none" />

        {/* Always beating indicator */}
        <circle cx="198" cy="105" r="8" fill="rgba(213,0,0,0.1)" stroke="rgba(213,0,0,0.3)" strokeWidth="0.6" />
        <circle cx="198" cy="105" r="4" fill="rgba(213,0,0,0.15)" />
        <circle cx="198" cy="105" r="2" fill="rgba(213,0,0,0.25)" />
      </g>
    </svg>
  );
}

function SVG_R4(lang: string) {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="sk_r4_bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0f1525" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <linearGradient id="sk_r4_bone" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#f5e6d0" />
          <stop offset="50%" stopColor="#e0c8a8" />
          <stop offset="100%" stopColor="#c4a478" />
        </linearGradient>
        <linearGradient id="sk_r4_bone2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8d4b8" />
          <stop offset="100%" stopColor="#b89870" />
        </linearGradient>
        <radialGradient id="sk_r4_cartilage" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(100,255,218,0.5)" />
          <stop offset="100%" stopColor="rgba(0,191,165,0.2)" />
        </radialGradient>
        <radialGradient id="sk_r4_ball" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#f5e6d0" />
          <stop offset="50%" stopColor="#d4b896" />
          <stop offset="100%" stopColor="#a08060" />
        </radialGradient>
        <radialGradient id="sk_r4_socket" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b89870" />
          <stop offset="100%" stopColor="#8B7355" />
        </radialGradient>
        <filter id="sk_r4_glow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="240" height="160" fill="url(#sk_r4_bg)" />

      {/* ── LEFT: Hinge Joint (Elbow) ── */}
      <g>
        <rect x="5" y="5" width="70" height="150" rx="10" fill="rgba(69,183,209,0.04)" stroke="rgba(69,183,209,0.12)" strokeWidth="0.6" />

        {/* Upper arm bone (humerus) */}
        <path d="M 36,18 L 38,18 Q 42,20 42,25 L 42,60 Q 42,64 40,66 L 34,66 Q 32,64 32,60 L 32,25 Q 32,20 36,18 Z" fill="url(#sk_r4_bone)" />
        {/* Bone texture lines */}
        <path d="M 34,30 L 40,30" stroke="rgba(160,128,96,0.2)" strokeWidth="0.4" />
        <path d="M 34,40 L 40,40" stroke="rgba(160,128,96,0.2)" strokeWidth="0.4" />
        <path d="M 34,50 L 40,50" stroke="rgba(160,128,96,0.2)" strokeWidth="0.4" />

        {/* Joint cartilage */}
        <ellipse cx="37" cy="68" rx="8" ry="3" fill="url(#sk_r4_cartilage)" />

        {/* Lower arm bone (ulna) — slightly angled to show hinge */}
        <path d="M 36,70 L 38,70 Q 42,72 43,76 L 48,108 Q 48,112 46,114 L 40,114 Q 38,112 38,108 L 33,76 Q 32,72 36,70 Z" fill="url(#sk_r4_bone2)" />

        {/* Hinge motion arc */}
        <path d="M 52,62 Q 60,70 56,82" stroke="rgba(69,183,209,0.4)" strokeWidth="1.2" fill="none" />
        <polygon points="56,82 53,78 58,79" fill="rgba(69,183,209,0.4)" />
        <path d="M 22,62 Q 14,70 18,82" stroke="rgba(69,183,209,0.4)" strokeWidth="1.2" fill="none" />
        <polygon points="18,82 21,78 16,79" fill="rgba(69,183,209,0.4)" />

        {/* Colored dot indicator */}
        <circle cx="37" cy="135" r="4" fill="rgba(69,183,209,0.15)" stroke="#45B7D1" strokeWidth="0.7" />
        <circle cx="37" cy="135" r="1.5" fill="#45B7D1" opacity="0.5" />
      </g>

      {/* ── CENTER: Ball & Socket Joint (Hip/Shoulder) ── */}
      <g>
        <rect x="85" y="5" width="70" height="150" rx="10" fill="rgba(171,130,255,0.04)" stroke="rgba(171,130,255,0.12)" strokeWidth="0.6" />

        {/* Socket (acetabulum) — cup shape */}
        <path d="M 108,55 Q 108,40 120,38 Q 132,40 132,55" stroke="url(#sk_r4_bone)" strokeWidth="3" fill="none" />
        <ellipse cx="120" cy="55" rx="14" ry="4" fill="url(#sk_r4_socket)" opacity="0.6" />

        {/* Ball (femoral head) */}
        <circle cx="120" cy="58" r="9" fill="url(#sk_r4_ball)" />
        {/* Highlight on ball */}
        <ellipse cx="117" cy="55" rx="3" ry="2" fill="rgba(255,255,255,0.15)" />

        {/* Cartilage ring */}
        <circle cx="120" cy="58" r="9.5" fill="none" stroke="url(#sk_r4_cartilage)" strokeWidth="1.5" />

        {/* Femur shaft below */}
        <path d="M 117,67 L 118,67 Q 122,70 122,74 L 124,108 Q 124,112 122,114 L 118,114 Q 116,112 116,108 L 114,74 Q 114,70 117,67 Z" fill="url(#sk_r4_bone2)" />

        {/* Multi-direction arrows */}
        <path d="M 135,58 L 146,58" stroke="rgba(171,130,255,0.4)" strokeWidth="1" fill="none" />
        <polygon points="146,58 143,56 143,60" fill="rgba(171,130,255,0.4)" />
        <path d="M 105,58 L 94,58" stroke="rgba(171,130,255,0.4)" strokeWidth="1" fill="none" />
        <polygon points="94,58 97,56 97,60" fill="rgba(171,130,255,0.4)" />
        <path d="M 120,44 L 120,33" stroke="rgba(171,130,255,0.4)" strokeWidth="1" fill="none" />
        <polygon points="120,33 118,36 122,36" fill="rgba(171,130,255,0.4)" />
        <path d="M 130,48 L 138,40" stroke="rgba(171,130,255,0.35)" strokeWidth="0.8" fill="none" />
        <path d="M 110,48 L 102,40" stroke="rgba(171,130,255,0.35)" strokeWidth="0.8" fill="none" />

        {/* Colored dot indicator */}
        <circle cx="120" cy="135" r="4" fill="rgba(171,130,255,0.15)" stroke="#AB82FF" strokeWidth="0.7" />
        <circle cx="120" cy="135" r="1.5" fill="#AB82FF" opacity="0.5" />
      </g>

      {/* ── RIGHT: Pivot Joint (neck) + Cartilage detail ── */}
      <g>
        <rect x="165" y="5" width="70" height="150" rx="10" fill="rgba(0,200,150,0.04)" stroke="rgba(0,200,150,0.12)" strokeWidth="0.6" />

        {/* Atlas/Axis vertebrae — pivot mechanism */}
        {/* Atlas (ring) — top view */}
        <ellipse cx="200" cy="42" rx="14" ry="10" fill="none" stroke="url(#sk_r4_bone)" strokeWidth="2" />
        <ellipse cx="200" cy="42" rx="8" ry="5" fill="#0a0a14" opacity="0.4" />
        {/* Axis (peg/dens) sticking up through atlas */}
        <ellipse cx="200" cy="42" rx="3.5" ry="2.5" fill="url(#sk_r4_ball)" />
        <circle cx="200" cy="42" r="2" fill="url(#sk_r4_bone)" />

        {/* Rotation arrows around pivot */}
        <path d="M 185,42 Q 185,30 200,28" stroke="rgba(0,200,150,0.4)" strokeWidth="1" fill="none" />
        <polygon points="200,28 197,31 201,31" fill="rgba(0,200,150,0.4)" />
        <path d="M 215,42 Q 215,54 200,56" stroke="rgba(0,200,150,0.4)" strokeWidth="1" fill="none" />
        <polygon points="200,56 203,53 199,53" fill="rgba(0,200,150,0.4)" />

        {/* Cartilage detail — zoomed cross-section */}
        <rect x="178" y="75" width="44" height="40" rx="5" fill="rgba(0,200,150,0.06)" stroke="rgba(0,200,150,0.15)" strokeWidth="0.5" />
        {/* Top bone surface */}
        <rect x="184" y="80" width="32" height="8" rx="2" fill="url(#sk_r4_bone)" opacity="0.7" />
        {/* Cartilage layer */}
        <rect x="184" y="88" width="32" height="6" rx="1" fill="url(#sk_r4_cartilage)" />
        {/* Cartilage cell dots */}
        <circle cx="192" cy="91" r="1.2" fill="rgba(0,150,136,0.4)" />
        <circle cx="200" cy="91" r="1.2" fill="rgba(0,150,136,0.4)" />
        <circle cx="208" cy="91" r="1.2" fill="rgba(0,150,136,0.4)" />
        {/* Bottom bone surface */}
        <rect x="184" y="94" width="32" height="8" rx="2" fill="url(#sk_r4_bone2)" opacity="0.7" />
        {/* Synovial fluid hint */}
        <ellipse cx="200" cy="91" rx="16" ry="3" fill="rgba(100,255,218,0.08)" />

        {/* Colored dot indicator */}
        <circle cx="200" cy="135" r="4" fill="rgba(0,200,150,0.15)" stroke="#00C896" strokeWidth="0.7" />
        <circle cx="200" cy="135" r="1.5" fill="#00C896" opacity="0.5" />
      </g>
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
          <defs>
            <radialGradient id="sk_r5_bg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#0f1525" />
              <stop offset="100%" stopColor="#0a0a14" />
            </radialGradient>
            <linearGradient id="sk_r5_bone" x1="30%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#f5e6d0" />
              <stop offset="50%" stopColor="#e0c8a8" />
              <stop offset="100%" stopColor="#c4a478" />
            </linearGradient>
            <radialGradient id="sk_r5_skull" cx="45%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#f5e6d0" />
              <stop offset="100%" stopColor="#c4a478" />
            </radialGradient>
            <filter id="sk_r5_pulse">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          <rect width="240" height="160" fill="url(#sk_r5_bg)" />
          {/* Faded skeleton silhouette */}
          <g opacity="0.3">
            <ellipse cx="120" cy="30" rx="9" ry="11" fill="url(#sk_r5_skull)" />
            {[0,1,2,3,4,5,6,7].map(i => <rect key={i} x="118" y={44+i*4} width="4" height="3" rx="1" fill="url(#sk_r5_bone)" />)}
            {[0,1,2,3].map(i => (
              <g key={`r${i}`}>
                <path d={`M 120,${48+i*5} Q ${120-10-i*1.5},${50+i*5} ${120-12-i*1.5},${51+i*5}`} stroke="url(#sk_r5_bone)" strokeWidth="1.2" fill="none" />
                <path d={`M 120,${48+i*5} Q ${120+10+i*1.5},${50+i*5} ${120+12+i*1.5},${51+i*5}`} stroke="url(#sk_r5_bone)" strokeWidth="1.2" fill="none" />
              </g>
            ))}
            <path d="M 108,78 Q 112,74 120,72 Q 128,74 132,78 Q 128,82 120,84 Q 112,82 108,78 Z" fill="url(#sk_r5_bone)" />
            <line x1="100" y1="44" x2="92" y2="62" stroke="url(#sk_r5_bone)" strokeWidth="2" />
            <line x1="140" y1="44" x2="148" y2="62" stroke="url(#sk_r5_bone)" strokeWidth="2" />
            <line x1="114" y1="82" x2="110" y2="110" stroke="url(#sk_r5_bone)" strokeWidth="2.5" />
            <line x1="126" y1="82" x2="130" y2="110" stroke="url(#sk_r5_bone)" strokeWidth="2.5" />
          </g>
          {/* Pulsing question marks */}
          {[{x:55,y:50,c:"#FF6B6B"},{x:185,y:50,c:"#4ECDC4"},{x:55,y:110,c:"#45B7D1"},{x:185,y:110,c:"#F9CA24"}].map((p,i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="12" fill={p.c} opacity="0.08" filter="url(#sk_r5_pulse)" />
              <circle cx={p.x} cy={p.y} r="10" fill={p.c} opacity="0.08" />
              <circle cx={p.x} cy={p.y} r="10" fill="none" stroke={p.c} strokeWidth="0.8" opacity="0.4" />
              <path d={`M ${p.x-3},${p.y-3} Q ${p.x-3},${p.y-6} ${p.x},${p.y-6} Q ${p.x+3},${p.y-6} ${p.x+3},${p.y-3} Q ${p.x+3},${p.y-1} ${p.x},${p.y} L ${p.x},${p.y+2}`} stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <circle cx={p.x} cy={p.y+5} r="0.8" fill="rgba(255,255,255,0.5)" />
            </g>
          ))}
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
