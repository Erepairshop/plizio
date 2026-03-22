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
    q_disp_wind: "Which type of seed has adaptations for wind dispersal?",

    // MCQ choices
    attract_pollinators: "Attract pollinators with color and smell",
    protect_bud: "Protect the flower bud",
    produce_pollen: "Produce pollen",
    become_fruit: "Become the fruit",
    stamen: "Stamen",
    pistil: "Pistil",
    sepal: "Sepal",
    on_insect_bodies: "On the bodies of insects",
    by_wind: "By wind blowing it",
    by_water: "By floating water",
    become_seed: "A seed",
    become_flower: "Another flower",
    become_petal: "A petal",
    disp_wings: "Seeds with wings or parachutes",
    disp_hooks: "Seeds with hooks or spines",
    disp_float: "Large floating seeds",
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
    q_disp_wind: "Welche Art von Samen hat Anpassungen für Windverbreitung?",

    // MCQ choices
    attract_pollinators: "Locken Bestäuber mit Farbe und Duft an",
    protect_bud: "Schützen die Blütenknospe",
    produce_pollen: "Produzieren Pollen",
    become_fruit: "Werden die Frucht",
    stamen: "Staubblatt",
    pistil: "Stempel",
    sepal: "Kelchblatt",
    on_insect_bodies: "Auf den Körpern von Insekten",
    by_wind: "Durch Wind",
    by_water: "Durch schwimmen",
    become_seed: "Ein Samen",
    become_flower: "Eine andere Blüte",
    become_petal: "Ein Blütenblatt",
    disp_wings: "Samen mit Flügeln oder Fallschirmen",
    disp_hooks: "Samen mit Haken oder Dornen",
    disp_float: "Große schwimmende Samen",
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
    q_disp_wind: "Mely magok vannak szél terjedésre alkalmazkodva?",

    // MCQ choices
    attract_pollinators: "Vonzzák a porrodókat szín és illat",
    protect_bud: "Védelemben a virág bimbót",
    produce_pollen: "Termelnek virágport",
    become_fruit: "Lesz a gyümölcs",
    stamen: "Porzó",
    pistil: "Bibeszál",
    sepal: "CsészElev",
    on_insect_bodies: "Rovar testein",
    by_wind: "Szél által",
    by_water: "Víz úton",
    become_seed: "Mag",
    become_flower: "Egy másik virág",
    become_petal: "Szirmom",
    disp_wings: "Magok szárnyakkal vagy ernyőkkel",
    disp_hooks: "Magok horogokkal vagy tövisekkel",
    disp_float: "Nagy úszó magok",
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
    q_disp_wind: "Ce tip de semințe sunt adaptate pentru dispersia prin vânt?",

    // MCQ choices
    attract_pollinators: "Atrag polenizatorii cu culoare și miros",
    protect_bud: "Protejează ghemul de floare",
    produce_pollen: "Produc polen",
    become_fruit: "Devin fruct",
    stamen: "Stamen",
    pistil: "Pistil",
    sepal: "Sepal",
    on_insect_bodies: "Pe corpurile insectelor",
    by_wind: "Prin vânt",
    by_water: "Prin apă",
    become_seed: "O sămânță",
    become_flower: "O altă floare",
    become_petal: "Un petal",
    disp_wings: "Semințe cu aripi sau parașute",
    disp_hooks: "Semințe cu cârlige sau spini",
    disp_float: "Semințe mari plutitoare",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Components for each round
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="fl_r1_bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#1a2a1a" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <linearGradient id="fl_r1_petal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8AC5" />
          <stop offset="30%" stopColor="#FF69B4" />
          <stop offset="70%" stopColor="#FF1493" />
          <stop offset="100%" stopColor="#C71076" />
        </linearGradient>
        <linearGradient id="fl_r1_petal_vein" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FF9ED0" />
          <stop offset="100%" stopColor="#FF1493" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="fl_r1_center" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFEE88" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CC9900" />
        </radialGradient>
        <radialGradient id="fl_r1_pollen" cx="40%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FFFFAA" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
        <linearGradient id="fl_r1_pistil" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="50%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
        <linearGradient id="fl_r1_sepal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8BC34A" />
          <stop offset="50%" stopColor="#558B2F" />
          <stop offset="100%" stopColor="#33691E" />
        </linearGradient>
        <linearGradient id="fl_r1_stem" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <radialGradient id="fl_r1_ovary" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#A5D6A7" />
          <stop offset="60%" stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#2E7D32" />
        </radialGradient>
        <filter id="fl_r1_glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="fl_r1_soft">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#fl_r1_bg)" />

      {/* Soft glow behind flower */}
      <ellipse cx="120" cy="72" rx="55" ry="50" fill="#FF69B4" opacity="0.06" filter="url(#fl_r1_soft)" />

      {/* Stem */}
      <path d="M 120,108 Q 118,125 116,148" stroke="url(#fl_r1_stem)" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Leaf on stem */}
      <path d="M 117,130 Q 100,122 95,128 Q 102,132 117,130 Z" fill="url(#fl_r1_sepal)" opacity="0.8" />
      <path d="M 117,130 Q 103,126 95,128" stroke="#33691E" strokeWidth="0.4" fill="none" opacity="0.5" />

      {/* Sepals behind petals */}
      <path d="M 120,72 Q 80,52 72,68 Q 85,58 100,65 Z" fill="url(#fl_r1_sepal)" opacity="0.85" />
      <path d="M 120,72 Q 160,52 168,68 Q 155,58 140,65 Z" fill="url(#fl_r1_sepal)" opacity="0.85" />
      <path d="M 120,72 Q 100,100 108,112 Q 108,98 115,85 Z" fill="url(#fl_r1_sepal)" opacity="0.7" />
      <path d="M 120,72 Q 140,100 132,112 Q 132,98 125,85 Z" fill="url(#fl_r1_sepal)" opacity="0.7" />

      {/* Petals — 5 overlapping with veins */}
      {/* Top petal */}
      <ellipse cx="120" cy="38" rx="20" ry="28" fill="url(#fl_r1_petal)" opacity="0.92" />
      <path d="M 120,18 Q 118,35 120,58" stroke="url(#fl_r1_petal_vein)" strokeWidth="0.6" fill="none" opacity="0.5" />
      <path d="M 112,22 Q 115,38 120,50" stroke="url(#fl_r1_petal_vein)" strokeWidth="0.4" fill="none" opacity="0.3" />
      <path d="M 128,22 Q 125,38 120,50" stroke="url(#fl_r1_petal_vein)" strokeWidth="0.4" fill="none" opacity="0.3" />
      {/* Top-right petal */}
      <ellipse cx="146" cy="55" rx="18" ry="26" transform="rotate(35 146 55)" fill="url(#fl_r1_petal)" opacity="0.88" />
      <path d="M 157,36 Q 150,48 142,65" stroke="url(#fl_r1_petal_vein)" strokeWidth="0.5" fill="none" opacity="0.35" />
      {/* Top-left petal */}
      <ellipse cx="94" cy="55" rx="18" ry="26" transform="rotate(-35 94 55)" fill="url(#fl_r1_petal)" opacity="0.88" />
      <path d="M 83,36 Q 90,48 98,65" stroke="url(#fl_r1_petal_vein)" strokeWidth="0.5" fill="none" opacity="0.35" />
      {/* Bottom-right petal */}
      <ellipse cx="140" cy="90" rx="16" ry="24" transform="rotate(20 140 90)" fill="url(#fl_r1_petal)" opacity="0.85" />
      {/* Bottom-left petal */}
      <ellipse cx="100" cy="90" rx="16" ry="24" transform="rotate(-20 100 90)" fill="url(#fl_r1_petal)" opacity="0.85" />

      {/* Stamen filaments radiating from center */}
      <line x1="120" y1="72" x2="108" y2="58" stroke="#CCAA44" strokeWidth="1" opacity="0.7" />
      <line x1="120" y1="72" x2="132" y2="58" stroke="#CCAA44" strokeWidth="1" opacity="0.7" />
      <line x1="120" y1="72" x2="120" y2="55" stroke="#CCAA44" strokeWidth="1" opacity="0.7" />
      <line x1="120" y1="72" x2="110" y2="62" stroke="#CCAA44" strokeWidth="1" opacity="0.6" />
      <line x1="120" y1="72" x2="130" y2="62" stroke="#CCAA44" strokeWidth="1" opacity="0.6" />
      {/* Anthers (pollen sacs) at filament tips */}
      <ellipse cx="108" cy="56" rx="3.5" ry="2.5" fill="url(#fl_r1_pollen)" filter="url(#fl_r1_glow)" />
      <ellipse cx="132" cy="56" rx="3.5" ry="2.5" fill="url(#fl_r1_pollen)" filter="url(#fl_r1_glow)" />
      <ellipse cx="120" cy="53" rx="3.5" ry="2.5" fill="url(#fl_r1_pollen)" filter="url(#fl_r1_glow)" />
      <ellipse cx="110" cy="60" rx="3" ry="2" fill="url(#fl_r1_pollen)" />
      <ellipse cx="130" cy="60" rx="3" ry="2" fill="url(#fl_r1_pollen)" />
      {/* Tiny floating pollen grains */}
      <circle cx="105" cy="50" r="1" fill="#FFEE88" opacity="0.6" />
      <circle cx="135" cy="52" r="0.8" fill="#FFEE88" opacity="0.5" />
      <circle cx="118" cy="48" r="0.7" fill="#FFEE88" opacity="0.4" />

      {/* Pistil — stigma, style, ovary */}
      {/* Style (tube) */}
      <path d="M 120,72 L 119,95 Q 120,97 121,95 Z" fill="url(#fl_r1_pistil)" />
      {/* Stigma at top (sticky end) */}
      <circle cx="120" cy="70" r="3" fill="url(#fl_r1_center)" filter="url(#fl_r1_glow)" />
      {/* Ovary at base — cross-section showing ovules */}
      <ellipse cx="120" cy="102" rx="8" ry="6" fill="url(#fl_r1_ovary)" stroke="#1B5E20" strokeWidth="0.5" />
      {/* Ovules inside ovary */}
      <circle cx="116" cy="101" r="1.8" fill="#FFCC80" opacity="0.8" />
      <circle cx="120" cy="103" r="1.8" fill="#FFCC80" opacity="0.8" />
      <circle cx="124" cy="101" r="1.8" fill="#FFCC80" opacity="0.8" />

      {/* Dashed pointer lines (no text labels) */}
      <line x1="96" y1="42" x2="42" y2="22" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" strokeDasharray="2,2" />
      <circle cx="40" cy="20" r="3" fill="rgba(255,105,180,0.3)" stroke="rgba(255,105,180,0.6)" strokeWidth="0.8" />
      <line x1="132" y1="56" x2="185" y2="38" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" strokeDasharray="2,2" />
      <circle cx="187" cy="37" r="3" fill="rgba(255,215,0,0.3)" stroke="rgba(255,215,0,0.6)" strokeWidth="0.8" />
      <line x1="120" y1="102" x2="62" y2="130" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" strokeDasharray="2,2" />
      <circle cx="60" cy="132" r="3" fill="rgba(144,238,144,0.3)" stroke="rgba(144,238,144,0.6)" strokeWidth="0.8" />
      <line x1="78" y1="62" x2="42" y2="68" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" strokeDasharray="2,2" />
      <circle cx="40" cy="68" r="3" fill="rgba(124,179,66,0.3)" stroke="rgba(124,179,66,0.6)" strokeWidth="0.8" />
    </svg>
  );
}

function SVG_R2(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="fl_r2_bg" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#1a2a1a" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <linearGradient id="fl_r2_petal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8AC5" />
          <stop offset="50%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#C71076" />
        </linearGradient>
        <radialGradient id="fl_r2_bee_body" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="50%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#E65100" />
        </radialGradient>
        <linearGradient id="fl_r2_stem" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <radialGradient id="fl_r2_pollen_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF88" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fl_r2_wing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(200,230,255,0.6)" />
          <stop offset="100%" stopColor="rgba(150,200,255,0.2)" />
        </linearGradient>
        <linearGradient id="fl_r2_grass_flower" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#A5D6A7" />
          <stop offset="100%" stopColor="#558B2F" />
        </linearGradient>
        <filter id="fl_r2_glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="240" height="160" fill="url(#fl_r2_bg)" />

      {/* ── LEFT SIDE: Insect (bee) pollination ── */}
      {/* Ground */}
      <ellipse cx="65" cy="148" rx="40" ry="4" fill="#1B5E20" opacity="0.3" />

      {/* Flower stem + leaves */}
      <path d="M 65,100 Q 63,120 62,148" stroke="url(#fl_r2_stem)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 63,120 Q 50,115 48,120 Q 54,122 63,120 Z" fill="#4CAF50" opacity="0.7" />
      <path d="M 64,134 Q 76,130 78,134 Q 72,136 64,134 Z" fill="#4CAF50" opacity="0.6" />

      {/* Flower head — 5 petals */}
      <ellipse cx="65" cy="68" rx="14" ry="22" fill="url(#fl_r2_petal)" opacity="0.85" />
      <ellipse cx="45" cy="82" rx="13" ry="20" transform="rotate(-30 45 82)" fill="url(#fl_r2_petal)" opacity="0.80" />
      <ellipse cx="85" cy="82" rx="13" ry="20" transform="rotate(30 85 82)" fill="url(#fl_r2_petal)" opacity="0.80" />
      <ellipse cx="50" cy="98" rx="12" ry="18" transform="rotate(-15 50 98)" fill="url(#fl_r2_petal)" opacity="0.75" />
      <ellipse cx="80" cy="98" rx="12" ry="18" transform="rotate(15 80 98)" fill="url(#fl_r2_petal)" opacity="0.75" />
      {/* Flower center */}
      <circle cx="65" cy="88" r="8" fill="#FFB300" />
      <circle cx="65" cy="88" r="5" fill="#FF8F00" />
      {/* Petal veins */}
      <path d="M 65,68 Q 64,78 65,88" stroke="#FF9ED0" strokeWidth="0.4" fill="none" opacity="0.4" />
      <path d="M 50,78 Q 58,83 65,88" stroke="#FF9ED0" strokeWidth="0.4" fill="none" opacity="0.3" />

      {/* Bee — detailed with stripes, wings, legs */}
      <g transform="translate(52,58) rotate(-20)">
        {/* Wings */}
        <ellipse cx="4" cy="-7" rx="7" ry="4" fill="url(#fl_r2_wing)" stroke="rgba(180,210,255,0.4)" strokeWidth="0.3" />
        <ellipse cx="-2" cy="-6" rx="6" ry="3.5" fill="url(#fl_r2_wing)" stroke="rgba(180,210,255,0.4)" strokeWidth="0.3" />
        {/* Body */}
        <ellipse cx="0" cy="0" rx="5" ry="8" fill="url(#fl_r2_bee_body)" />
        {/* Stripes */}
        <path d="M -4,-2 Q 0,-3 4,-2" stroke="#1a0a00" strokeWidth="1.2" fill="none" />
        <path d="M -4.5,1 Q 0,0 4.5,1" stroke="#1a0a00" strokeWidth="1.2" fill="none" />
        <path d="M -4,4 Q 0,3 4,4" stroke="#1a0a00" strokeWidth="1.2" fill="none" />
        {/* Head */}
        <circle cx="0" cy="-9" r="3.5" fill="#332200" />
        <circle cx="-1.2" cy="-10" r="0.8" fill="#FFEE88" />
        <circle cx="1.2" cy="-10" r="0.8" fill="#FFEE88" />
        {/* Antennae */}
        <path d="M -1,-12 Q -3,-15 -5,-16" stroke="#332200" strokeWidth="0.5" fill="none" />
        <path d="M 1,-12 Q 3,-15 5,-16" stroke="#332200" strokeWidth="0.5" fill="none" />
        {/* Legs */}
        <line x1="-4" y1="2" x2="-8" y2="5" stroke="#332200" strokeWidth="0.5" />
        <line x1="4" y1="2" x2="8" y2="5" stroke="#332200" strokeWidth="0.5" />
        {/* Pollen on legs */}
        <circle cx="-8" cy="5" r="1.5" fill="#FFD700" opacity="0.7" />
        <circle cx="8" cy="5" r="1.5" fill="#FFD700" opacity="0.7" />
      </g>

      {/* Pollen transfer glow */}
      <circle cx="56" cy="72" r="5" fill="url(#fl_r2_pollen_glow)" />
      <circle cx="48" cy="65" r="1" fill="#FFEE88" opacity="0.6" />
      <circle cx="62" cy="62" r="0.8" fill="#FFEE88" opacity="0.5" />

      {/* ── RIGHT SIDE: Wind pollination ── */}
      {/* Grass stem cluster */}
      <path d="M 175,148 Q 174,120 175,85" stroke="url(#fl_r2_grass_flower)" strokeWidth="2" fill="none" />
      <path d="M 185,148 Q 186,125 185,90" stroke="url(#fl_r2_grass_flower)" strokeWidth="1.5" fill="none" opacity="0.8" />
      <path d="M 195,148 Q 194,130 195,95" stroke="url(#fl_r2_grass_flower)" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Grass flower heads (catkin-like) */}
      <ellipse cx="175" cy="80" rx="3" ry="6" fill="#C8E6C9" stroke="#81C784" strokeWidth="0.5" />
      <ellipse cx="185" cy="85" rx="2.5" ry="5" fill="#C8E6C9" stroke="#81C784" strokeWidth="0.5" />
      <ellipse cx="195" cy="90" rx="2.5" ry="5" fill="#C8E6C9" stroke="#81C784" strokeWidth="0.5" />
      {/* Dangling anthers */}
      <line x1="173" y1="78" x2="168" y2="74" stroke="#A5D6A7" strokeWidth="0.5" />
      <circle cx="168" cy="73" r="1.5" fill="#FFD700" opacity="0.6" />
      <line x1="177" y1="78" x2="182" y2="74" stroke="#A5D6A7" strokeWidth="0.5" />
      <circle cx="182" cy="73" r="1.5" fill="#FFD700" opacity="0.6" />

      {/* Wind streaks */}
      <path d="M 140,55 Q 155,52 170,56" stroke="rgba(140,200,255,0.35)" strokeWidth="1.5" fill="none" />
      <path d="M 138,68 Q 155,64 175,70" stroke="rgba(140,200,255,0.3)" strokeWidth="1.2" fill="none" />
      <path d="M 142,80 Q 160,76 180,82" stroke="rgba(140,200,255,0.25)" strokeWidth="1" fill="none" />
      <path d="M 136,42 Q 152,38 168,44" stroke="rgba(140,200,255,0.2)" strokeWidth="1" fill="none" />

      {/* Pollen grains drifting in wind */}
      <circle cx="150" cy="58" r="1.2" fill="#FFEE88" opacity="0.6" />
      <circle cx="158" cy="50" r="1" fill="#FFEE88" opacity="0.5" />
      <circle cx="163" cy="65" r="0.9" fill="#FFEE88" opacity="0.4" />
      <circle cx="148" cy="72" r="1.1" fill="#FFEE88" opacity="0.5" />
      <circle cx="155" cy="78" r="0.8" fill="#FFEE88" opacity="0.35" />
      <circle cx="143" cy="62" r="0.7" fill="#FFEE88" opacity="0.3" />

      {/* Receiving flower on right side */}
      <path d="M 210,148 Q 208,125 210,95" stroke="url(#fl_r2_grass_flower)" strokeWidth="1.5" fill="none" />
      <ellipse cx="210" cy="90" rx="3" ry="6" fill="#C8E6C9" stroke="#81C784" strokeWidth="0.5" />
      {/* Feathery stigma catching pollen */}
      <path d="M 207,85 Q 204,80 202,78" stroke="#A5D6A7" strokeWidth="0.5" />
      <path d="M 210,84 Q 210,79 210,76" stroke="#A5D6A7" strokeWidth="0.5" />
      <path d="M 213,85 Q 216,80 218,78" stroke="#A5D6A7" strokeWidth="0.5" />

      {/* Divider line */}
      <line x1="120" y1="20" x2="120" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="3,3" />

      {/* Ground line right */}
      <ellipse cx="190" cy="148" rx="40" ry="4" fill="#1B5E20" opacity="0.3" />
    </svg>
  );
}

function SVG_R3(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="fl_r3_bg" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#1a1a2a" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <radialGradient id="fl_r3_pollen" cx="40%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FFFFAA" />
          <stop offset="100%" stopColor="#FFB300" />
        </radialGradient>
        <linearGradient id="fl_r3_tube" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="50%" stopColor="#FFA726" />
          <stop offset="100%" stopColor="#EF6C00" />
        </linearGradient>
        <radialGradient id="fl_r3_ovule" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#C8E6C9" />
          <stop offset="60%" stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#2E7D32" />
        </radialGradient>
        <linearGradient id="fl_r3_seed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A1887F" />
          <stop offset="40%" stopColor="#795548" />
          <stop offset="100%" stopColor="#4E342E" />
        </linearGradient>
        <linearGradient id="fl_r3_fruit" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FF8A65" />
          <stop offset="30%" stopColor="#FF5722" />
          <stop offset="70%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
        <radialGradient id="fl_r3_fruit_shine" cx="35%" cy="25%" r="40%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="fl_r3_pistil_wall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81C784" />
          <stop offset="100%" stopColor="#388E3C" />
        </linearGradient>
        <filter id="fl_r3_glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <marker id="fl_r3_arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="rgba(255,255,255,0.35)" />
        </marker>
      </defs>

      <rect width="240" height="160" fill="url(#fl_r3_bg)" />

      {/* ── STAGE 1: Pollen grain lands on stigma, tube grows ── */}
      {/* Pistil cross-section */}
      <path d="M 28,20 Q 22,22 20,28 L 20,85 Q 22,95 28,98 L 38,98 Q 44,95 46,85 L 46,28 Q 44,22 38,20 Z" fill="url(#fl_r3_pistil_wall)" opacity="0.4" stroke="#388E3C" strokeWidth="0.5" />
      {/* Stigma at top */}
      <ellipse cx="33" cy="22" rx="10" ry="4" fill="#66BB6A" stroke="#2E7D32" strokeWidth="0.5" />
      {/* Pollen grain on stigma */}
      <circle cx="33" cy="18" r="3.5" fill="url(#fl_r3_pollen)" filter="url(#fl_r3_glow)" />
      <circle cx="32" cy="17" r="1" fill="#FFEE88" opacity="0.6" />
      {/* Pollen tube growing down */}
      <path d="M 33,22 Q 31,40 32,55 Q 33,70 33,82" stroke="url(#fl_r3_tube)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeDasharray="2,1.5" />
      {/* Ovule at bottom of pistil */}
      <ellipse cx="33" cy="88" rx="7" ry="6" fill="url(#fl_r3_ovule)" stroke="#2E7D32" strokeWidth="0.5" />
      <circle cx="33" cy="87" r="2.5" fill="#FFCC80" opacity="0.7" />

      {/* Arrow 1 → 2 */}
      <path d="M 52,55 L 68,55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" fill="none" markerEnd="url(#fl_r3_arrow)" />

      {/* ── STAGE 2: Fertilization — cells unite ── */}
      <ellipse cx="95" cy="55" rx="20" ry="22" fill="rgba(102,187,106,0.15)" stroke="rgba(102,187,106,0.3)" strokeWidth="0.5" rx="20" />
      {/* Ovule */}
      <ellipse cx="95" cy="58" rx="9" ry="8" fill="url(#fl_r3_ovule)" stroke="#2E7D32" strokeWidth="0.5" />
      {/* Male cell arriving */}
      <circle cx="88" cy="45" r="3" fill="url(#fl_r3_pollen)" opacity="0.9" />
      <path d="M 88,48 Q 90,52 92,55" stroke="#FFB300" strokeWidth="1" fill="none" opacity="0.7" />
      {/* Female cell */}
      <circle cx="95" cy="58" r="3.5" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="0.4" />
      {/* Merge spark */}
      <circle cx="92" cy="54" r="2" fill="#FFEE88" opacity="0.5" filter="url(#fl_r3_glow)" />

      {/* Arrow 2 → 3 */}
      <path d="M 118,55 L 138,55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" fill="none" markerEnd="url(#fl_r3_arrow)" />

      {/* ── STAGE 3: Seed forms — embryo + food store ── */}
      <ellipse cx="162" cy="55" rx="12" ry="16" fill="url(#fl_r3_seed)" stroke="#4E342E" strokeWidth="0.8" />
      {/* Seed coat highlight */}
      <ellipse cx="158" cy="50" rx="5" ry="8" fill="rgba(255,255,255,0.1)" />
      {/* Embryo inside */}
      <path d="M 160,48 Q 156,52 158,58 Q 162,62 166,58 Q 168,54 164,48 Z" fill="#A5D6A7" opacity="0.7" />
      {/* Food store */}
      <circle cx="160" cy="55" r="3" fill="#FFCC80" opacity="0.5" />

      {/* Arrow 3 → 4 */}
      <path d="M 178,55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" fill="none" />
      <path d="M 178,55 L 194,55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" fill="none" markerEnd="url(#fl_r3_arrow)" />

      {/* ── STAGE 4: Fruit develops — ovary wall swells ── */}
      {/* Fruit (apple-like) */}
      <ellipse cx="218" cy="52" rx="16" ry="18" fill="url(#fl_r3_fruit)" />
      <ellipse cx="218" cy="52" rx="16" ry="18" fill="url(#fl_r3_fruit_shine)" />
      {/* Stem dimple */}
      <path d="M 216,34 Q 218,32 220,34" stroke="#795548" strokeWidth="1" fill="none" />
      <line x1="218" y1="32" x2="218" y2="28" stroke="#795548" strokeWidth="1" />
      {/* Tiny leaf */}
      <path d="M 218,28 Q 224,24 226,28 Q 222,28 218,28 Z" fill="#66BB6A" opacity="0.8" />
      {/* Seeds visible inside (cross-section hint) */}
      <ellipse cx="213" cy="54" rx="2.5" ry="3.5" fill="url(#fl_r3_seed)" opacity="0.6" />
      <ellipse cx="223" cy="54" rx="2.5" ry="3.5" fill="url(#fl_r3_seed)" opacity="0.6" />
      <ellipse cx="218" cy="58" rx="2.5" ry="3.5" fill="url(#fl_r3_seed)" opacity="0.5" />

      {/* Bottom: progression dots */}
      {[33, 95, 162, 218].map((cx, i) => (
        <circle key={i} cx={cx} cy="115" r="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
      ))}
      <path d="M 36,115 L 92,115" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <path d="M 98,115 L 159,115" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <path d="M 165,115 L 215,115" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    </svg>
  );
}

function SVG_R4(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="fl_r4_bg" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#141428" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <linearGradient id="fl_r4_seed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A1887F" />
          <stop offset="50%" stopColor="#795548" />
          <stop offset="100%" stopColor="#4E342E" />
        </linearGradient>
        <radialGradient id="fl_r4_dandelion" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="60%" stopColor="rgba(220,220,220,0.5)" />
          <stop offset="100%" stopColor="rgba(200,200,200,0)" />
        </radialGradient>
        <linearGradient id="fl_r4_water" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4FC3F7" />
          <stop offset="100%" stopColor="#0277BD" />
        </linearGradient>
        <linearGradient id="fl_r4_coconut" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#A1887F" />
          <stop offset="40%" stopColor="#6D4C41" />
          <stop offset="100%" stopColor="#3E2723" />
        </linearGradient>
        <radialGradient id="fl_r4_coconut_shine" cx="30%" cy="25%" r="40%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="fl_r4_fur" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D7CCC8" />
          <stop offset="50%" stopColor="#A1887F" />
          <stop offset="100%" stopColor="#6D4C41" />
        </linearGradient>
        <linearGradient id="fl_r4_pod" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#8BC34A" />
          <stop offset="50%" stopColor="#558B2F" />
          <stop offset="100%" stopColor="#33691E" />
        </linearGradient>
        <filter id="fl_r4_glow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="240" height="160" fill="url(#fl_r4_bg)" />

      {/* ── PANEL 1 (top-left): Wind — dandelion ── */}
      {/* Dandelion stem */}
      <path d="M 50,95 Q 48,75 50,55" stroke="#558B2F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Dandelion seed head — wispy pappus */}
      <circle cx="50" cy="48" r="18" fill="url(#fl_r4_dandelion)" opacity="0.15" />
      {/* Individual parachute seeds radiating out */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const r = 14 + (i % 3) * 2;
        const ex = 50 + r * Math.cos(rad);
        const ey = 48 + r * Math.sin(rad);
        return (
          <g key={`d${i}`}>
            <line x1="50" y1="48" x2={ex} y2={ey} stroke="rgba(220,220,220,0.3)" strokeWidth="0.3" />
            <circle cx={ex} cy={ey} r="0.8" fill="rgba(255,255,255,0.6)" />
          </g>
        );
      })}
      {/* Detached seeds floating away */}
      <g opacity="0.6">
        <line x1="28" y1="32" x2="22" y2="22" stroke="rgba(220,220,220,0.4)" strokeWidth="0.3" />
        <circle cx="22" cy="22" r="0.7" fill="white" opacity="0.7" />
        <circle cx="28" cy="33" r="1" fill="url(#fl_r4_seed)" />
        <line x1="18" y1="42" x2="12" y2="34" stroke="rgba(220,220,220,0.35)" strokeWidth="0.3" />
        <circle cx="12" cy="34" r="0.6" fill="white" opacity="0.6" />
        <circle cx="18" cy="43" r="0.8" fill="url(#fl_r4_seed)" />
      </g>
      {/* Wind streaks */}
      <path d="M 8,28 Q 18,25 28,28" stroke="rgba(140,200,255,0.2)" strokeWidth="0.8" fill="none" />
      <path d="M 5,38 Q 15,35 25,38" stroke="rgba(140,200,255,0.15)" strokeWidth="0.7" fill="none" />

      {/* ── PANEL 2 (top-right): Water — coconut ── */}
      {/* Water surface */}
      <path d="M 130,70 Q 140,66 150,70 Q 160,74 170,70 Q 180,66 190,70 Q 200,74 210,70 Q 220,66 230,70" stroke="url(#fl_r4_water)" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 128,76 Q 138,72 148,76 Q 158,80 168,76 Q 178,72 188,76 Q 198,80 208,76 Q 218,72 228,76" stroke="url(#fl_r4_water)" strokeWidth="0.8" fill="none" opacity="0.3" />
      {/* Underwater wash */}
      <ellipse cx="175" cy="78" rx="45" ry="12" fill="rgba(33,150,243,0.08)" />
      {/* Coconut floating */}
      <ellipse cx="175" cy="60" rx="14" ry="12" fill="url(#fl_r4_coconut)" />
      <ellipse cx="175" cy="60" rx="14" ry="12" fill="url(#fl_r4_coconut_shine)" />
      {/* Three eyes on coconut */}
      <circle cx="171" cy="56" r="1.5" fill="#3E2723" opacity="0.6" />
      <circle cx="179" cy="56" r="1.5" fill="#3E2723" opacity="0.6" />
      <circle cx="175" cy="62" r="1.3" fill="#3E2723" opacity="0.5" />
      {/* Husk fibers */}
      <path d="M 168,50 Q 170,46 175,44" stroke="#8D6E63" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M 182,50 Q 180,46 175,44" stroke="#8D6E63" strokeWidth="0.5" fill="none" opacity="0.5" />
      {/* Ripples around coconut */}
      <ellipse cx="175" cy="68" rx="18" ry="3" fill="none" stroke="rgba(79,195,247,0.3)" strokeWidth="0.5" />
      <ellipse cx="175" cy="70" rx="24" ry="4" fill="none" stroke="rgba(79,195,247,0.2)" strokeWidth="0.4" />

      {/* ── PANEL 3 (bottom-left): Animal — burr on fur ── */}
      {/* Animal fur patch */}
      <ellipse cx="50" cy="130" rx="30" ry="18" fill="url(#fl_r4_fur)" opacity="0.25" />
      {/* Fur texture lines */}
      {[30, 35, 40, 45, 50, 55, 60, 65, 70].map((x, i) => (
        <path key={`f${i}`} d={`M ${x},${118 + (i % 2) * 2} Q ${x + 1},${128} ${x - 1},${140}`} stroke="rgba(161,136,127,0.3)" strokeWidth="0.5" fill="none" />
      ))}
      {/* Burr seed — spiky ball */}
      <circle cx="50" cy="126" r="6" fill="url(#fl_r4_seed)" />
      {/* Hooks/spines radiating out */}
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const sx = 50 + 6 * Math.cos(rad);
        const sy = 126 + 6 * Math.sin(rad);
        const ex = 50 + 11 * Math.cos(rad);
        const ey = 126 + 11 * Math.sin(rad);
        return <line key={`s${i}`} x1={sx} y1={sy} x2={ex} y2={ey} stroke="#5D4037" strokeWidth="0.8" strokeLinecap="round" />;
      })}
      {/* Hook tips */}
      {[0, 80, 160, 240, 320].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const ex = 50 + 11.5 * Math.cos(rad);
        const ey = 126 + 11.5 * Math.sin(rad);
        return <circle key={`h${i}`} cx={ex} cy={ey} r="0.6" fill="#4E342E" />;
      })}

      {/* ── PANEL 4 (bottom-right): Explosion — pod bursting ── */}
      {/* Pod halves splitting */}
      <path d="M 175,135 Q 165,128 170,118 Q 172,112 168,108" fill="none" stroke="url(#fl_r4_pod)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 185,135 Q 195,128 190,118 Q 188,112 192,108" fill="none" stroke="url(#fl_r4_pod)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pod interior */}
      <ellipse cx="180" cy="130" rx="6" ry="3" fill="#8BC34A" opacity="0.3" />
      {/* Seeds flying outward with motion trails */}
      <circle cx="155" cy="105" r="2" fill="url(#fl_r4_seed)" />
      <path d="M 168,112 L 157,106" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <circle cx="205" cy="105" r="2" fill="url(#fl_r4_seed)" />
      <path d="M 192,112 L 203,106" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <circle cx="160" cy="118" r="1.8" fill="url(#fl_r4_seed)" />
      <path d="M 170,120 L 162,118" stroke="rgba(255,255,255,0.12)" strokeWidth="0.4" />
      <circle cx="200" cy="118" r="1.8" fill="url(#fl_r4_seed)" />
      <path d="M 190,120 L 198,118" stroke="rgba(255,255,255,0.12)" strokeWidth="0.4" />
      <circle cx="180" cy="100" r="1.5" fill="url(#fl_r4_seed)" />
      <path d="M 180,110 L 180,102" stroke="rgba(255,255,255,0.12)" strokeWidth="0.4" />
      {/* Burst energy */}
      <circle cx="180" cy="122" r="4" fill="rgba(139,195,74,0.15)" filter="url(#fl_r4_glow)" />

      {/* Panel divider lines */}
      <line x1="120" y1="5" x2="120" y2="95" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      <line x1="5" y1="95" x2="235" y2="95" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
    </svg>
  );
}

function SVG_R5(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="fl_r5_bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#1a2a1a" />
          <stop offset="100%" stopColor="#0a0a14" />
        </radialGradient>
        <linearGradient id="fl_r5_petal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8AC5" />
          <stop offset="30%" stopColor="#FF69B4" />
          <stop offset="70%" stopColor="#FF1493" />
          <stop offset="100%" stopColor="#C71076" />
        </linearGradient>
        <radialGradient id="fl_r5_center" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFEE88" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CC9900" />
        </radialGradient>
        <linearGradient id="fl_r5_pistil" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="50%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
        <linearGradient id="fl_r5_sepal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8BC34A" />
          <stop offset="100%" stopColor="#33691E" />
        </linearGradient>
        <linearGradient id="fl_r5_stem" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <filter id="fl_r5_qglow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="240" height="160" fill="url(#fl_r5_bg)" />
      <ellipse cx="120" cy="70" rx="55" ry="50" fill="#FF69B4" opacity="0.04" />

      {/* Stem */}
      <path d="M 120,108 Q 118,125 116,150" stroke="url(#fl_r5_stem)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 117,130 Q 100,122 95,128 Q 102,132 117,130 Z" fill="url(#fl_r5_sepal)" opacity="0.7" />

      {/* Sepals */}
      <path d="M 120,72 Q 82,54 74,68 Q 86,58 102,66 Z" fill="url(#fl_r5_sepal)" opacity="0.75" />
      <path d="M 120,72 Q 158,54 166,68 Q 154,58 138,66 Z" fill="url(#fl_r5_sepal)" opacity="0.75" />

      {/* 5 Petals */}
      <ellipse cx="120" cy="38" rx="19" ry="27" fill="url(#fl_r5_petal)" opacity="0.88" />
      <ellipse cx="145" cy="55" rx="17" ry="25" transform="rotate(35 145 55)" fill="url(#fl_r5_petal)" opacity="0.84" />
      <ellipse cx="95" cy="55" rx="17" ry="25" transform="rotate(-35 95 55)" fill="url(#fl_r5_petal)" opacity="0.84" />
      <ellipse cx="138" cy="88" rx="15" ry="22" transform="rotate(20 138 88)" fill="url(#fl_r5_petal)" opacity="0.80" />
      <ellipse cx="102" cy="88" rx="15" ry="22" transform="rotate(-20 102 88)" fill="url(#fl_r5_petal)" opacity="0.80" />

      {/* Center stamens */}
      <circle cx="120" cy="70" r="8" fill="url(#fl_r5_center)" />
      <line x1="120" y1="70" x2="112" y2="58" stroke="#CCAA44" strokeWidth="0.8" opacity="0.6" />
      <line x1="120" y1="70" x2="128" y2="58" stroke="#CCAA44" strokeWidth="0.8" opacity="0.6" />
      <line x1="120" y1="70" x2="120" y2="56" stroke="#CCAA44" strokeWidth="0.8" opacity="0.6" />
      <circle cx="112" cy="57" r="2.5" fill="#FFD700" />
      <circle cx="128" cy="57" r="2.5" fill="#FFD700" />
      <circle cx="120" cy="55" r="2.5" fill="#FFD700" />

      {/* Pistil */}
      <path d="M 120,72 L 119,95 Q 120,97 121,95 Z" fill="url(#fl_r5_pistil)" />
      <ellipse cx="120" cy="100" rx="7" ry="5" fill="#66BB6A" stroke="#2E7D32" strokeWidth="0.4" />

      {/* Question mark indicators — glowing circles with ? shapes */}
      <circle cx="42" cy="28" r="8" fill="rgba(255,105,180,0.15)" stroke="rgba(255,105,180,0.4)" strokeWidth="0.8" filter="url(#fl_r5_qglow)" />
      <path d="M 39,25 Q 39,22 42,22 Q 45,22 45,25 Q 45,27 42,28 L 42,30" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none" strokeLinecap="round" />
      <circle cx="42" cy="32" r="0.6" fill="rgba(255,255,255,0.6)" />
      <line x1="50" y1="28" x2="82" y2="42" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2,2" />

      <circle cx="195" cy="42" r="8" fill="rgba(255,215,0,0.15)" stroke="rgba(255,215,0,0.4)" strokeWidth="0.8" filter="url(#fl_r5_qglow)" />
      <path d="M 192,39 Q 192,36 195,36 Q 198,36 198,39 Q 198,41 195,42 L 195,44" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none" strokeLinecap="round" />
      <circle cx="195" cy="46" r="0.6" fill="rgba(255,255,255,0.6)" />
      <line x1="187" y1="42" x2="140" y2="56" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2,2" />

      <circle cx="60" cy="118" r="8" fill="rgba(102,187,106,0.15)" stroke="rgba(102,187,106,0.4)" strokeWidth="0.8" filter="url(#fl_r5_qglow)" />
      <path d="M 57,115 Q 57,112 60,112 Q 63,112 63,115 Q 63,117 60,118 L 60,120" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none" strokeLinecap="round" />
      <circle cx="60" cy="122" r="0.6" fill="rgba(255,255,255,0.6)" />
      <line x1="68" y1="118" x2="110" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2,2" />
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
      type: "mcq",
      infoTitle: "r1Title",
      infoText: "r1Text",
      bulletKeys: ["r1Bullet1", "r1Bullet2", "r1Bullet3", "r1Bullet4"],
      svg: (lang) => SVG_R1(lang),
      questions: [
        {
          question: "q_struct_petal",
          choices: ["attract_pollinators", "protect_bud", "produce_pollen"],
          answer: "attract_pollinators",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r2Title",
      infoText: "r2Text",
      bulletKeys: ["r2Bullet1", "r2Bullet2", "r2Bullet3", "r2Bullet4"],
      svg: (lang) => SVG_R2(lang),
      questions: [
        {
          question: "q_poll_method",
          choices: ["by_wind", "by_water", "on_insect_bodies"],
          answer: "by_wind",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r3Title",
      infoText: "r3Text",
      bulletKeys: ["r3Bullet1", "r3Bullet2", "r3Bullet3", "r3Bullet4"],
      svg: (lang) => SVG_R3(lang),
      questions: [
        {
          question: "q_seed_form",
          choices: ["become_seed", "become_flower", "become_petal"],
          answer: "become_seed",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4Title",
      infoText: "r4Text",
      bulletKeys: ["r4Bullet1", "r4Bullet2", "r4Bullet3", "r4Bullet4"],
      svg: (lang) => SVG_R4(lang),
      questions: [
        {
          question: "q_disp_wind",
          choices: ["disp_wings", "disp_hooks", "disp_float"],
          answer: "disp_wings",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5Title",
      infoText: "r5Text",
      svg: (lang) => SVG_R5(lang),
      questions: [
        {
          question: "q_struct_stamen",
          choices: ["stamen", "pistil", "sepal"],
          answer: "stamen",
        },
        {
          question: "q_poll_insect",
          choices: ["on_insect_bodies", "by_wind", "by_water"],
          answer: "on_insect_bodies",
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

export default function FlowerExplorer({ color = "#FF69B4", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} />;
}
