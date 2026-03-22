"use client";
// ─────────────────────────────────────────────────────────────────────────────
// FlowerExplorer — Flowers & Reproduction (Blüte & Fortpflanzung) — Grade 5
// ExplorerEngine-based: R1-R4 teaching, R5 quiz
// ─────────────────────────────────────────────────────────────────────────────

import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef, MCQQuestion } from "./ExplorerEngine";
import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Labels — All 4 languages (en/de/hu/ro)
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: ExplorerDef["labels"] = {
  en: {
    // Round 1: Flower Structure
    r1Title: "🌺 Flower Structure",
    r1Text: "Flowers are the reproductive organs of plants. Each part has a special job in making seeds.",
    r1Bullet1: "Petals attract insects and animals with bright colors and sweet smells",
    r1Bullet2: "Sepals protect the developing flower bud before it opens",
    r1Bullet3: "Stamens (male parts) produce tiny pollen grains containing male cells",
    r1Bullet4: "Pistil (female part) contains the ovary with ovules that become seeds",

    // Round 2: Pollination
    r2Title: "🐝 Pollination",
    r2Text: "Pollen must travel from a stamen to a pistil. Different plants use different carriers!",
    r2Bullet1: "Insect pollination: bees, butterflies, and beetles carry pollen on their bodies",
    r2Bullet2: "Wind pollination: light pollen floats through the air (grasses, trees)",
    r2Bullet3: "Water pollination: some aquatic plants use water to spread pollen",
    r2Bullet4: "When pollen lands on the pistil, fertilization begins!",

    // Round 3: Seed & Fruit Formation
    r3Title: "🌱 Fertilization & Growth",
    r3Text: "After pollination, a pollen tube grows to the ovule. Fertilization creates a new seed!",
    r3Bullet1: "Pollen grain grows a tube down through the pistil to reach the ovule",
    r3Bullet2: "Male cells from pollen unite with female cells in ovule (fertilization)",
    r3Bullet3: "The ovule develops into a seed with embryo and stored food",
    r3Bullet4: "The ovary expands to become a fruit that protects the seeds",

    // Round 4: Seed Dispersal
    r4Title: "🌍 Seed Dispersal",
    r4Text: "Seeds must spread far from the parent plant. Nature has amazing ways to do this!",
    r4Bullet1: "Wind dispersal: light seeds have wings or parachutes to float far",
    r4Bullet2: "Water dispersal: seeds float on water (coconuts) or sink in water plants",
    r4Bullet3: "Animal dispersal: sticky/hooked seeds cling to fur; tasty ones eaten & dropped",
    r4Bullet4: "Explosion dispersal: some plants spring open and shoot seeds far away",

    // Round 5: Quiz
    r5Title: "❓ Review Quiz",
    r5Text: "Test what you learned about flowers and seed-making!",

    // MCQ questions
    q_struct_petal: "What do flower petals do?",
    q_struct_stamen: "Which flower part produces pollen?",
    q_struct_ovary: "Which part grows into a fruit?",
    q_poll_insect: "How do bee-pollinated flowers get pollen?",
    q_poll_method: "How do grass flowers spread their pollen?",
    q_seed_form: "What does the ovule become after fertilization?",

    // MCQ choices
    attract_pollinators: "Attract pollinators with color and smell",
    protect_bud: "Protect the flower bud",
    produce_pollen: "Produce pollen",
    become_fruit: "Become the fruit",
    stamen: "Stamen",
    pistil: "Pistil",
    on_insect_bodies: "On the bodies of insects",
    by_wind: "By wind blowing it",
    by_water: "By floating water",
    become_seed: "A seed",
    become_flower: "Another flower",
    become_petal: "A petal",
  },

  de: {
    // Round 1
    r1Title: "🌺 Blütenaufbau",
    r1Text: "Blüten sind die Fortpflanzungsorgane von Pflanzen. Jeder Teil hat eine spezielle Aufgabe.",
    r1Bullet1: "Blütenblätter locken Insekten und Tiere mit hellen Farben und süßem Duft an",
    r1Bullet2: "Kelchblätter schützen die entwickelnde Blütenknospe vor dem Öffnen",
    r1Bullet3: "Staubblätter (männliche Teile) produzieren Pollenkörner mit männlichen Zellen",
    r1Bullet4: "Stempel (weiblicher Teil) enthält Fruchtknoten mit Samenanlagen, die zu Samen werden",

    // Round 2
    r2Title: "🐝 Bestäubung",
    r2Text: "Pollen muss von Staubblatt zu Stempel gelangen. Verschiedene Pflanzen nutzen verschiedene Träger!",
    r2Bullet1: "Insektenbestäubung: Bienen, Schmetterlinge und Käfer tragen Pollen an ihren Körpern",
    r2Bullet2: "Windbestäubung: leichter Pollen schwebt durch die Luft (Gräser, Bäume)",
    r2Bullet3: "Wasserbestäubung: manche Wasserpflanzen nutzen Wasser zum Pollen verbreiten",
    r2Bullet4: "Wenn Pollen auf dem Stempel landet, beginnt die Befruchtung!",

    // Round 3
    r3Title: "🌱 Befruchtung & Wachstum",
    r3Text: "Nach der Bestäubung wächst Pollenschlauch zur Samenanlage. Befruchtung schafft neuen Samen!",
    r3Bullet1: "Pollenkorn bildet einen Schlauch, der durch Stempel zu Samenanlage wächst",
    r3Bullet2: "Männliche Zellen aus Pollen vereinigen sich mit weiblichen Zellen (Befruchtung)",
    r3Bullet3: "Die Samenanlage entwickelt sich zu Samen mit Keimling und Nährspeicher",
    r3Bullet4: "Der Fruchtknoten dehnt sich aus und wird schützende Frucht",

    // Round 4
    r4Title: "🌍 Samenverbreitung",
    r4Text: "Samen müssen weit weg von Mutterpflanze verbreitet werden. Die Natur hat erstaunliche Wege!",
    r4Bullet1: "Windverbreitung: leichte Samen haben Flügel oder Fallschirme zum Schweben",
    r4Bullet2: "Wasserverbreitung: Samen treiben auf Wasser (Kokosnüsse) oder sinken in Wasserpflanzen",
    r4Bullet3: "Tierverbreitung: klebrige/gehäkelte Samen haften am Fell; Schmackhaftes gefressen & fallengelassen",
    r4Bullet4: "Explosionsverbreitung: manche Pflanzen springen auf und schießen Samen weit weg",

    // Round 5
    r5Title: "❓ Wiederholungsquiz",
    r5Text: "Teste dein Wissen über Blüten und Samenbildung!",

    // MCQ questions
    q_struct_petal: "Was machen Blütenblätter?",
    q_struct_stamen: "Welcher Blütenteil produziert Pollen?",
    q_struct_ovary: "Welcher Teil wird zur Frucht?",
    q_poll_insect: "Wie kommen Pollenkörner bei bienenbestäubten Blüten weg?",
    q_poll_method: "Wie verbreiten Grasblüten ihren Pollen?",
    q_seed_form: "Was wird die Samenanlage nach Befruchtung?",

    // MCQ choices
    attract_pollinators: "Locken Bestäuber mit Farbe und Duft an",
    protect_bud: "Schützen die Blütenknospe",
    produce_pollen: "Produzieren Pollen",
    become_fruit: "Werden die Frucht",
    stamen: "Staubblatt",
    pistil: "Stempel",
    on_insect_bodies: "Auf den Körpern von Insekten",
    by_wind: "Durch Wind",
    by_water: "Durch schwimmen",
    become_seed: "Ein Samen",
    become_flower: "Eine andere Blüte",
    become_petal: "Ein Blütenblatt",
  },

  hu: {
    // Round 1
    r1Title: "🌺 Virág szerkezete",
    r1Text: "A virágok a növények szaporító szervei. Minden résznek speciális feladata van.",
    r1Bullet1: "Sziromok vonzzák a rovarokat és állatokat élénk színekkel és édes illattal",
    r1Bullet2: "Csészelevelek védelemben az összedolgozó virágbimbó nyitás előtt",
    r1Bullet3: "Porzók (hím részek) apró pollenszemcséket termelnek hím sejtekkel",
    r1Bullet4: "Bibeszál (nőstény rész) beépített petesejt tartalmaz, amely magvá lesz",

    // Round 2
    r2Title: "🐝 Porlódás",
    r2Text: "A virágpor a porzóból a bibeszálra kell jutnia. Különböző növények különböző szállítókat használnak!",
    r2Bullet1: "Rovar-porlódás: méhek, pillangók és bogarak virágport hordoznak testükön",
    r2Bullet2: "Szél-porlódás: könnyű virágpor lebeg a levegőben (füvek, fák)",
    r2Bullet3: "Víz-porlódás: néhány vizes növény vizet használ a virágpor terjesztésére",
    r2Bullet4: "Amikor virágpor a bibeszálra jut, a megtermékenyítés kezdődik!",

    // Round 3
    r3Title: "🌱 Megtermékenyítés és növekedés",
    r3Text: "A porlódás után virágcső nő az embrióhoz. A megtermékenyítés új magot hoz létre!",
    r3Bullet1: "Virágporszemcse cső nő bibeszálon keresztül az embrióhoz",
    r3Bullet2: "Hím sejtek a virágpor egyesülnek nőstény sejtekkel (megtermékenyítés)",
    r3Bullet3: "Az embrió maggyá fejlődik csírázással és tárolt élelemmel",
    r3Bullet4: "A petesejt-kocsány kitágul és védő gyümölccsé lesz",

    // Round 4
    r4Title: "🌍 Magszóródás",
    r4Text: "A magoknak messze kell terjedniük az anyó-növénytől. A természetnek csodálatos módszerei vannak!",
    r4Bullet1: "Szélszóródás: könnyű magoknak szárnyaik vagy ernyőjük van",
    r4Bullet2: "Vízszóródás: magok úsznak vízben (kókusz) vagy süllyednek vizes növénybe",
    r4Bullet3: "Állatszóródás: ragacsos/horogos magok ragadnak szőrön; ízletesek megevés után leesnek",
    r4Bullet4: "Robbanásszóródás: néhány növény felrobban és magokat löveti messze",

    // Round 5
    r5Title: "❓ Ismétlés kvíz",
    r5Text: "Teszeld meg tudásodat virágokról és magképzésről!",

    // MCQ questions
    q_struct_petal: "Mit csinálnak a sziromok?",
    q_struct_stamen: "Melyik virág rész termel virágport?",
    q_struct_ovary: "Melyik rész lesz gyümölcs?",
    q_poll_insect: "Hogyan jut virágpor a méhek által pollódott virágokba?",
    q_poll_method: "Hogyan terjednek a fűvirágok virágportjukat?",
    q_seed_form: "Mi lesz az embrió megtermékenyítés után?",

    // MCQ choices
    attract_pollinators: "Vonzzák a porrodókat szín és illat",
    protect_bud: "Védelemben a virág bimbót",
    produce_pollen: "Termelnek virágport",
    become_fruit: "Lesz a gyümölcs",
    stamen: "Porzó",
    pistil: "Bibeszál",
    on_insect_bodies: "Rovar testein",
    by_wind: "Szél által",
    by_water: "Víz úton",
    become_seed: "Mag",
    become_flower: "Egy másik virág",
    become_petal: "Szirmom",
  },

  ro: {
    // Round 1
    r1Title: "🌺 Structura florii",
    r1Text: "Florile sunt organele de reproducere ale plantelor. Fiecare parte are o sarcină specială.",
    r1Bullet1: "Petalele atrag insectele și animalele cu culori strălucitoare și miros dulce",
    r1Bullet2: "Sepalele protejează ghemul de floare în dezvoltare înainte de deschidere",
    r1Bullet3: "Staminele (parți mascule) produc boabe mici de polen cu celule mascule",
    r1Bullet4: "Pistilul (parte feminină) conține ovarul cu ovule care vor deveni semințe",

    // Round 2
    r2Title: "🐝 Polenizare",
    r2Text: "Polenul trebuie să ajungă de la stamen la pistil. Plante diferite folosesc purtători diferiți!",
    r2Bullet1: "Polenizare prin insecte: albine, fluturi și gândaci poartă polen pe corpuri",
    r2Bullet2: "Polenizare prin vânt: polen ușor plutește prin aer (graminee, copaci)",
    r2Bullet3: "Polenizare prin apă: unele plante acvatice folosesc apă pentru a răspândi polenul",
    r2Bullet4: "Când polenul ajunge pe pistil, fertilizarea începe!",

    // Round 3
    r3Title: "🌱 Fertilizare și creștere",
    r3Text: "După polenizare, un tub de polen crește spre ovul. Fertilizarea creează o nouă sămânță!",
    r3Bullet1: "Boaba de polen formează un tub care crește prin pistil spre ovul",
    r3Bullet2: "Celulele mascule din polen se unesc cu celulele feminine în ovul (fertilizare)",
    r3Bullet3: "Ovulul se dezvoltă într-o sămânță cu embrion și hrană depozitată",
    r3Bullet4: "Ovarul se dilată și devine fruct protector",

    // Round 4
    r4Title: "🌍 Dispersia semințelor",
    r4Text: "Semințele trebuie să se răspândească departe de planta mamă. Natura are moduri uimitoare!",
    r4Bullet1: "Dispersia prin vânt: semințele ușoare au aripi sau parașute pentru a pluti",
    r4Bullet2: "Dispersia prin apă: semințele plutesc pe apă (cocos) sau se scufundă în plante acvatice",
    r4Bullet3: "Dispersia prin animale: semințe lipicioase/cu cârlige se-agață de blană; gustoase mâncate și căzute",
    r4Bullet4: "Dispersia prin explozie: unele plante se deschid brusc și lansează semințe departe",

    // Round 5
    r5Title: "❓ Chestionar de revizuire",
    r5Text: "Testează-ți cunoștințele despre flori și formarea semințelor!",

    // MCQ questions
    q_struct_petal: "Ce fac petalele florii?",
    q_struct_stamen: "Care parte a florii produce polen?",
    q_struct_ovary: "Care parte devine fruct?",
    q_poll_insect: "Cum ajunge polenul în florile polenizate de albine?",
    q_poll_method: "Cum răspândesc florile de iarbă polenul lor?",
    q_seed_form: "Ce devine ovulul după fertilizare?",

    // MCQ choices
    attract_pollinators: "Atrag polenizatorii cu culoare și miros",
    protect_bud: "Protejează ghemul de floare",
    produce_pollen: "Produc polen",
    become_fruit: "Devin fruct",
    stamen: "Stamen",
    pistil: "Pistil",
    on_insect_bodies: "Pe corpurile insectelor",
    by_wind: "Prin vânt",
    by_water: "Prin apă",
    become_seed: "O sămânță",
    become_flower: "O altă floare",
    become_petal: "Un petal",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Components for each round
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1(lang: string): React.ReactNode {
  const l = LABELS[lang] || LABELS.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r1_petal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#FF1493" />
        </linearGradient>
        <linearGradient id="r1_stamen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient id="r1_pistil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        <radialGradient id="r1_pollen">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
      </defs>

      {/* Flower cross-section */}
      {/* Sepals (outer green parts) */}
      <path d="M 120,50 Q 100,40 90,60 Q 100,45 110,50 Z" fill="#7CB342" opacity="0.8" />
      <path d="M 120,50 Q 140,40 150,60 Q 140,45 130,50 Z" fill="#7CB342" opacity="0.8" />
      <path d="M 120,50 Q 110,30 120,20 Q 120,35 120,45 Z" fill="#7CB342" opacity="0.8" />

      {/* Petals (pink) */}
      <ellipse cx="100" cy="70" rx="18" ry="28" fill="url(#r1_petal)" opacity="0.9" />
      <ellipse cx="140" cy="70" rx="18" ry="28" fill="url(#r1_petal)" opacity="0.9" />
      <ellipse cx="120" cy="40" rx="18" ry="28" fill="url(#r1_petal)" opacity="0.9" />
      <ellipse cx="120" cy="100" rx="18" ry="28" fill="url(#r1_petal)" opacity="0.9" />

      {/* Center: Stamens with pollen (yellow) */}
      <circle cx="120" cy="75" r="8" fill="url(#r1_stamen)" />
      <circle cx="115" cy="70" r="3" fill="url(#r1_pollen)" />
      <circle cx="125" cy="70" r="3" fill="url(#r1_pollen)" />
      <circle cx="120" cy="65" r="3" fill="url(#r1_pollen)" />

      {/* Pistil (ovary at bottom, green) */}
      <path
        d="M 120,85 L 118,120 Q 120,125 122,120 Z"
        fill="url(#r1_pistil)"
        stroke="#228B22"
        strokeWidth="0.5"
      />
      <circle cx="120" cy="115" r="4" fill="#FFB6C1" stroke="#228B22" strokeWidth="0.5" />

      {/* Labels with pointers */}
      {/* Petal label */}
      <line x1="100" y1="50" x2="60" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2,2" />
      <rect x="35" y="20" width="35" height="20" rx="5" fill="rgba(255,105,180,0.2)" stroke="rgba(255,105,180,0.5)" strokeWidth="1" />
      <text x="52" y="33" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">
        Petal
      </text>

      {/* Stamen label */}
      <line x1="125" y1="75" x2="160" y2="60" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2,2" />
      <rect x="150" y="50" width="40" height="20" rx="5" fill="rgba(255,215,0,0.2)" stroke="rgba(255,215,0,0.5)" strokeWidth="1" />
      <text x="170" y="63" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">
        Stamen
      </text>

      {/* Pistil label */}
      <line x1="120" y1="110" x2="75" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2,2" />
      <rect x="35" y="120" width="40" height="20" rx="5" fill="rgba(144,238,144,0.2)" stroke="rgba(144,238,144,0.5)" strokeWidth="1" />
      <text x="55" y="133" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">
        Pistil
      </text>

      {/* Sepal label */}
      <line x1="100" y1="55" x2="70" y2="70" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2,2" />
      <rect x="35" y="63" width="35" height="20" rx="5" fill="rgba(124,179,66,0.2)" stroke="rgba(124,179,66,0.5)" strokeWidth="1" />
      <text x="52" y="76" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">
        Sepal
      </text>
    </svg>
  );
}

function SVG_R2(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r2_flower" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#FF1493" />
        </linearGradient>
        <radialGradient id="r2_bee">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF8C00" />
        </radialGradient>
      </defs>

      {/* Flower 1 — Insect pollinated (left) */}
      <circle cx="60" cy="80" r="8" fill="url(#r2_flower)" />
      <circle cx="50" cy="70" r="6" fill="url(#r2_flower)" opacity="0.8" />
      <circle cx="70" cy="70" r="6" fill="url(#r2_flower)" opacity="0.8" />
      <circle cx="50" cy="90" r="6" fill="url(#r2_flower)" opacity="0.8" />
      <circle cx="70" cy="90" r="6" fill="url(#r2_flower)" opacity="0.8" />
      <line x1="60" y1="88" x2="60" y2="120" stroke="#7CB342" strokeWidth="2" />

      {/* Bee on flower */}
      <ellipse cx="60" cy="60" rx="5" ry="7" fill="url(#r2_bee)" />
      <circle cx="60" cy="52" r="3" fill="#FFD700" />
      {/* Pollen on bee */}
      <circle cx="55" cy="58" r="2" fill="#FFFF00" opacity="0.7" />
      <circle cx="65" cy="58" r="2" fill="#FFFF00" opacity="0.7" />

      {/* Text label */}
      <text x="60" y="138" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">
        Insect
      </text>

      {/* Wind pollination (right) */}
      {/* Flower 2 */}
      <circle cx="180" cy="80" r="7" fill="url(#r2_flower)" opacity="0.9" />
      <circle cx="170" cy="72" r="5" fill="url(#r2_flower)" opacity="0.7" />
      <circle cx="190" cy="72" r="5" fill="url(#r2_flower)" opacity="0.7" />
      <circle cx="170" cy="88" r="5" fill="url(#r2_flower)" opacity="0.7" />
      <circle cx="190" cy="88" r="5" fill="url(#r2_flower)" opacity="0.7" />
      <line x1="180" y1="87" x2="180" y2="120" stroke="#7CB342" strokeWidth="2" />

      {/* Wind arrows and pollen particles */}
      <path d="M 140,60 L 165,75" stroke="rgba(100,200,255,0.5)" strokeWidth="2" fill="none" markerEnd="url(#arrowWind)" />
      <path d="M 135,80 L 160,85" stroke="rgba(100,200,255,0.5)" strokeWidth="2" fill="none" markerEnd="url(#arrowWind)" />
      <circle cx="150" cy="70" r="1.5" fill="#FFFF00" opacity="0.6" />
      <circle cx="155" cy="75" r="1.5" fill="#FFFF00" opacity="0.6" />
      <circle cx="145" cy="82" r="1.5" fill="#FFFF00" opacity="0.6" />

      <defs>
        <marker id="arrowWind" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="rgba(100,200,255,0.5)" />
        </marker>
      </defs>

      {/* Text label */}
      <text x="180" y="138" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">
        Wind
      </text>

      {/* Title area */}
      <text x="120" y="20" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">
        Two Pollination Methods
      </text>
    </svg>
  );
}

function SVG_R3(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r3_seed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        <linearGradient id="r3_fruit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#DC143C" />
        </linearGradient>
      </defs>

      {/* Stage 1: Pollen grain & tube */}
      <text x="20" y="15" fontSize="10" fill="white" fontWeight="bold">
        1. Pollen tube
      </text>
      <circle cx="30" cy="40" r="3" fill="#FFD700" />
      <path d="M 30,43 Q 28,70 30,100" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="105" r="4" fill="#90EE90" stroke="#228B22" strokeWidth="0.5" />

      {/* Stage 2: Fertilization */}
      <text x="95" y="15" fontSize="10" fill="white" fontWeight="bold">
        2. Fertilization
      </text>
      <circle cx="120" cy="50" r="5" fill="#90EE90" stroke="#228B22" strokeWidth="1" />
      <text x="120" y="52" fontSize="8" fill="white" textAnchor="middle">
        ♀
      </text>
      <circle cx="120" cy="35" r="2.5" fill="#FFD700" />
      <path d="M 120,37.5 L 120,44" stroke="#FFD700" strokeWidth="1" />
      <text x="120" y="27" fontSize="8" fill="white" textAnchor="middle">
        ♂
      </text>

      {/* Stage 3: Seed formation */}
      <text x="175" y="15" fontSize="10" fill="white" fontWeight="bold">
        3. Seed forms
      </text>
      <ellipse cx="210" cy="50" rx="6" ry="10" fill="url(#r3_seed)" stroke="#654321" strokeWidth="0.5" />
      <circle cx="210" cy="48" r="2" fill="#FFD700" opacity="0.6" />

      {/* Stage 4: Fruit develops */}
      <text x="20" y="100" fontSize="10" fill="white" fontWeight="bold">
        4. Fruit grows
      </text>
      <ellipse cx="50" cy="130" rx="15" ry="12" fill="url(#r3_fruit)" stroke="#8B0000" strokeWidth="0.5" />
      <ellipse cx="50" cy="128" rx="13" ry="8" fill="#FF7F50" opacity="0.5" />

      {/* Flow arrows */}
      <path d="M 35,50 L 95,50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" markerEnd="url(#arrowFlow)" />
      <path d="M 130,50 L 190,50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" markerEnd="url(#arrowFlow)" />
      <path d="M 50,70 L 50,110" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" markerEnd="url(#arrowFlow)" />

      <defs>
        <marker id="arrowFlow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="rgba(255,255,255,0.3)" />
        </marker>
      </defs>
    </svg>
  );
}

function SVG_R4(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r4_seed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
      </defs>

      {/* Panel 1: Wind dispersal (dandelion) */}
      <text x="30" y="18" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">
        Wind
      </text>
      <circle cx="30" cy="45" r="6" fill="rgba(200,200,200,0.6)" />
      {/* Parachute lines */}
      <line x1="30" y1="39" x2="20" y2="28" stroke="rgba(200,200,200,0.7)" strokeWidth="0.5" />
      <line x1="30" y1="39" x2="30" y2="28" stroke="rgba(200,200,200,0.7)" strokeWidth="0.5" />
      <line x1="30" y1="39" x2="40" y2="28" stroke="rgba(200,200,200,0.7)" strokeWidth="0.5" />
      {/* Seed pod at center */}
      <circle cx="30" cy="41" r="2" fill="url(#r4_seed)" />

      {/* Panel 2: Water dispersal (coconut) */}
      <text x="120" y="18" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">
        Water
      </text>
      {/* Coconut shape */}
      <ellipse cx="120" cy="45" rx="8" ry="9" fill="url(#r4_seed)" stroke="#654321" strokeWidth="0.5" />
      <path d="M 115,35 L 125,35 Q 125,30 120,28 Q 115,30 115,35 Z" fill="#8B6F47" />
      {/* Water waves */}
      <path d="M 105,65 Q 110,62 115,65" stroke="rgba(100,200,255,0.5)" strokeWidth="1" fill="none" />
      <path d="M 120,68 Q 130,65 140,68" stroke="rgba(100,200,255,0.5)" strokeWidth="1" fill="none" />

      {/* Panel 3: Animal dispersal (burrs) */}
      <text x="210" y="18" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">
        Animal
      </text>
      {/* Spiky seed pod */}
      <circle cx="210" cy="45" r="5" fill="url(#r4_seed)" />
      <line x1="210" y1="38" x2="210" y2="30" stroke="#654321" strokeWidth="1.5" />
      <line x1="217" y1="40" x2="223" y2="33" stroke="#654321" strokeWidth="1.5" />
      <line x1="218" y1="50" x2="224" y2="56" stroke="#654321" strokeWidth="1.5" />
      <line x1="203" y1="50" x2="197" y2="56" stroke="#654321" strokeWidth="1.5" />
      <line x1="202" y1="40" x2="196" y2="33" stroke="#654321" strokeWidth="1.5" />

      {/* Bottom panel: Explosion dispersal */}
      <text x="120" y="125" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">
        Explosion
      </text>
      {/* Pod opening */}
      <path d="M 110,115 Q 115,110 120,115 Q 125,110 130,115" stroke="#7CB342" strokeWidth="1.5" fill="none" />
      {/* Seeds flying */}
      <circle cx="100" cy="100" r="1.5" fill="url(#r4_seed)" />
      <circle cx="140" cy="100" r="1.5" fill="url(#r4_seed)" />
      <circle cx="110" cy="95" r="1.5" fill="url(#r4_seed)" />
      <circle cx="130" cy="95" r="1.5" fill="url(#r4_seed)" />
      {/* Motion lines */}
      <path d="M 115,115 L 100,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <path d="M 125,115 L 140,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
    </svg>
  );
}

function SVG_R5(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r5_petal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#FF1493" />
        </linearGradient>
        <linearGradient id="r5_stamen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient id="r5_pistil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
      </defs>

      {/* Unlabeled flower for quiz */}
      <circle cx="120" cy="70" r="8" fill="url(#r5_stamen)" />
      <ellipse cx="100" cy="50" rx="16" ry="24" fill="url(#r5_petal)" opacity="0.85" />
      <ellipse cx="140" cy="50" rx="16" ry="24" fill="url(#r5_petal)" opacity="0.85" />
      <ellipse cx="120" cy="25" rx="16" ry="24" fill="url(#r5_petal)" opacity="0.85" />
      <ellipse cx="120" cy="90" rx="16" ry="24" fill="url(#r5_petal)" opacity="0.85" />

      {/* Sepal parts */}
      <path d="M 100,60 Q 85,65 80,75" stroke="#7CB342" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M 140,60 Q 155,65 160,75" stroke="#7CB342" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M 120,35 Q 110,25 100,20" stroke="#7CB342" strokeWidth="1.5" fill="none" opacity="0.7" />

      {/* Pistil at bottom */}
      <path d="M 120,78 L 118,110 Q 120,115 122,110 Z" fill="url(#r5_pistil)" stroke="#228B22" strokeWidth="0.5" />
      <circle cx="120" cy="110" r="3.5" fill="#FFB6C1" stroke="#228B22" strokeWidth="0.5" />

      {/* Stem */}
      <line x1="120" y1="115" x2="120" y2="150" stroke="#7CB342" strokeWidth="2" />
      <ellipse cx="130" cy="130" rx="6" ry="4" fill="#7CB342" opacity="0.6" />

      {/* Question marks near unlabeled parts */}
      <text x="95" y="42" fontSize="16" fill="white" opacity="0.6">
        ?
      </text>
      <text x="125" y="12" fontSize="16" fill="white" opacity="0.6">
        ?
      </text>
      <text x="120" y="105" fontSize="16" fill="white" opacity="0.6">
        ?
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Questions for Round 5
// ─────────────────────────────────────────────────────────────────────────────

const QUESTIONS: MCQQuestion[] = [
  {
    question: "q_struct_petal",
    choices: ["attract_pollinators", "protect_bud", "produce_pollen"],
    answer: "attract_pollinators",
  },
  {
    question: "q_struct_stamen",
    choices: ["stamen", "pistil", "sepal"],
    answer: "stamen",
  },
  {
    question: "q_struct_ovary",
    choices: ["become_fruit", "attract_pollinators", "protect_bud"],
    answer: "become_fruit",
  },
  {
    question: "q_poll_insect",
    choices: ["on_insect_bodies", "by_wind", "by_water"],
    answer: "on_insect_bodies",
  },
  {
    question: "q_poll_method",
    choices: ["by_wind", "by_water", "on_insect_bodies"],
    answer: "by_wind",
  },
  {
    question: "q_seed_form",
    choices: ["become_seed", "become_flower", "become_petal"],
    answer: "become_seed",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Explorer Definition
// ─────────────────────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1Title",
      infoText: "r1Text",
      bulletKeys: ["r1Bullet1", "r1Bullet2", "r1Bullet3", "r1Bullet4"],
      svg: (lang) => SVG_R1(lang),
    },
    {
      type: "info",
      infoTitle: "r2Title",
      infoText: "r2Text",
      bulletKeys: ["r2Bullet1", "r2Bullet2", "r2Bullet3", "r2Bullet4"],
      svg: (lang) => SVG_R2(lang),
    },
    {
      type: "info",
      infoTitle: "r3Title",
      infoText: "r3Text",
      bulletKeys: ["r3Bullet1", "r3Bullet2", "r3Bullet3", "r3Bullet4"],
      svg: (lang) => SVG_R3(lang),
    },
    {
      type: "info",
      infoTitle: "r4Title",
      infoText: "r4Text",
      bulletKeys: ["r4Bullet1", "r4Bullet2", "r4Bullet3", "r4Bullet4"],
      svg: (lang) => SVG_R4(lang),
    },
    {
      type: "mcq",
      infoTitle: "r5Title",
      infoText: "r5Text",
      svg: (lang) => SVG_R5(lang),
      questions: QUESTIONS,
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

export default function FlowerExplorer({ color = "#FF69B4", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} />;
}
