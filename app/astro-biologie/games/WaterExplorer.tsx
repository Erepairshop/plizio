"use client";
// WaterExplorer — Grade 6 Biology: Water Ecosystems (Gewässer)
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Freshwater, saltwater, water organisms, pollution & protection

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Freshwater Ecosystems
    r1_title: "Freshwater Ecosystems",
    r1_text: "Freshwater ecosystems include rivers, lakes, and ponds. Each water body has different zones with unique conditions.",
    r1_fact1: "Rivers: Flowing freshwater that moves downstream toward the ocean 🌊",
    r1_fact2: "Lakes & Ponds: Still freshwater surrounded by land 💧",
    r1_fact3: "Shore zone: Shallow water with plants and sunlight 🌱",
    r1_fact4: "Open water & Deep zone: Deeper areas with less light and pressure 🐠",

    // Round 2: Saltwater Ecosystems
    r2_title: "Saltwater Ecosystems",
    r2_text: "Saltwater ecosystems include oceans and coral reefs. The ocean covers most of Earth and is home to millions of species.",
    r2_fact1: "Oceans: Vast saltwater bodies that cover 71% of Earth 🌊",
    r2_fact2: "Coral reefs: Shallow, colorful ecosystems built by tiny coral animals 🪸",
    r2_fact3: "Surface zone: Warm, sunlit water where photosynthesis happens ☀️",
    r2_fact4: "Deep sea: Cold, dark zone where only special adapted creatures live 🐙",

    // Round 3: Water Organisms
    r3_title: "Water Organisms",
    r3_text: "Water ecosystems are home to incredible diversity. Different organisms have adapted to survive in water.",
    r3_fact1: "Fish: Use gills to breathe oxygen from water 🐟",
    r3_fact2: "Amphibians: Live part of life in water, part on land (frogs, tadpoles) 🐸",
    r3_fact3: "Aquatic insects: Dragonfly larvae, water beetles live in water 🦗",
    r3_fact4: "Plankton & Algae: Tiny organisms that are the base of water food chains 🔬",
    r3_q: "What do fish use to breathe underwater?",
    r3_gills: "Gills",
    r3_lungs: "Lungs",
    r3_spiracles: "Spiracles",
    r3_skin: "Skin",

    // Round 4: Water Pollution & Protection
    r4_title: "Water Pollution & Protection",
    r4_text: "Water ecosystems are threatened by pollution. We must protect them for the plants and animals that depend on clean water.",
    r4_fact1: "Pollution sources: Factories, farms, and cities release harmful chemicals 🏭",
    r4_fact2: "Plastic pollution: Garbage damages water ecosystems and harms wildlife 🛑",
    r4_fact3: "Oil spills: Damage water life and create dead zones 🚫",
    r4_fact4: "Conservation: Protected areas, clean energy, and recycling help keep water clean 🌍",
    r4_q: "Which action best protects water ecosystems?",
    r4_reduce: "Reduce pollution, protect habitats",
    r4_build: "Build more factories",
    r4_drain: "Drain wetlands for farmland",
    r4_ignore: "Ignore water protection",

    // Round 5: Quiz
    r5_title: "Water Ecosystems Quiz",

    q1_q: "Which is an example of a freshwater ecosystem?",
    q1_river: "River",
    q1_ocean: "Ocean",
    q1_sea: "Sea",
    q1_gulf: "Gulf",

    q2_q: "What percentage of Earth is covered by oceans?",
    q2_71: "About 71%",
    q2_50: "About 50%",
    q2_30: "About 30%",
    q2_90: "About 90%",

    q3_q: "What is the main threat to many water ecosystems?",
    q3_pollution: "Pollution",
    q3_rain: "Rain",
    q3_sunlight: "Sunlight",
    q3_wind: "Wind",
  },
  de: {
    r1_title: "Süßwasserökosysteme",
    r1_text: "Süßwasserökosysteme umfassen Flüsse, Seen und Teiche. Jedes Gewässer hat verschiedene Zonen mit einzigartigen Bedingungen.",
    r1_fact1: "Flüsse: Fließendes Süßwasser, das flussabwärts zum Ozean fließt 🌊",
    r1_fact2: "Seen und Teiche: Stilles Süßwasser umgeben von Land 💧",
    r1_fact3: "Uferzone: Flaches Wasser mit Pflanzen und Sonnenlicht 🌱",
    r1_fact4: "Offenes Wasser & Tiefenzone: Tiefere Bereiche mit weniger Licht und Druck 🐠",

    r2_title: "Salzwasserökosysteme",
    r2_text: "Salzwasserökosysteme umfassen Ozeane und Korallenriffe. Der Ozean bedeckt den größten Teil der Erde und beherbergt Millionen von Arten.",
    r2_fact1: "Ozeane: Riesige Salzwasserkörper, die 71% der Erde bedecken 🌊",
    r2_fact2: "Korallenriffe: Flache, farbenfrohe Ökosysteme, die von winzigen Korallenorganismen gebaut werden 🪸",
    r2_fact3: "Oberflächenzone: Warmes, sonniges Wasser, wo Photosynthese stattfindet ☀️",
    r2_fact4: "Tiefensee: Kalte, dunkle Zone, in der nur speziell angepasste Kreaturen leben 🐙",

    r3_title: "Wasserorganismen",
    r3_text: "Wasserökosysteme beherbergen eine unglaubliche Vielfalt. Verschiedene Organismen haben sich entwickelt, um im Wasser zu überleben.",
    r3_fact1: "Fische: Nutzen Kiemen, um Sauerstoff aus dem Wasser zu atmen 🐟",
    r3_fact2: "Amphibien: Leben teilweise im Wasser, teilweise an Land (Frösche, Kaulquappen) 🐸",
    r3_fact3: "Wassertiere: Libellenlarven, Wasserkäfer leben im Wasser 🦗",
    r3_fact4: "Plankton & Algen: Winzige Organismen, die die Grundlage von Wasserfutternetzen sind 🔬",
    r3_q: "Was verwenden Fische, um unter Wasser zu atmen?",
    r3_gills: "Kiemen",
    r3_lungs: "Lungen",
    r3_spiracles: "Stigmen",
    r3_skin: "Haut",

    r4_title: "Wasserverschmutzung & Schutz",
    r4_text: "Wasserökosysteme sind durch Verschmutzung bedroht. Wir müssen sie schützen für die Pflanzen und Tiere, die auf sauberes Wasser angewiesen sind.",
    r4_fact1: "Verschmutzungsquellen: Fabriken, Farmen und Städte setzen schädliche Chemikalien frei 🏭",
    r4_fact2: "Kunststoffverschmutzung: Müll beschädigt Wasserökosysteme und verletzt Wildtiere 🛑",
    r4_fact3: "Ölverschüttungen: Beschädigen Wassertiere und schaffen tote Zonen 🚫",
    r4_fact4: "Naturschutz: Geschützte Gebiete, saubere Energie und Recycling helfen, Wasser sauber zu halten 🌍",
    r4_q: "Welche Aktion schützt Wasserökosysteme am besten?",
    r4_reduce: "Verschmutzung reduzieren, Lebensraum schützen",
    r4_build: "Mehr Fabriken bauen",
    r4_drain: "Feuchtgebiete für Ackerland entwässern",
    r4_ignore: "Wasserschutz ignorieren",

    r5_title: "Wasserökosysteme-Quiz",

    q1_q: "Welches ist ein Beispiel für ein Süßwasserökosystem?",
    q1_river: "Fluss",
    q1_ocean: "Ozean",
    q1_sea: "Meer",
    q1_gulf: "Golf",

    q2_q: "Welcher Prozentsatz der Erde ist von Ozeanen bedeckt?",
    q2_71: "Etwa 71%",
    q2_50: "Etwa 50%",
    q2_30: "Etwa 30%",
    q2_90: "Etwa 90%",

    q3_q: "Was ist die Hauptbedrohung für viele Wasserökosysteme?",
    q3_pollution: "Verschmutzung",
    q3_rain: "Regen",
    q3_sunlight: "Sonnenlicht",
    q3_wind: "Wind",
  },
  hu: {
    r1_title: "Édesvízi ökoszisztémák",
    r1_text: "Az édesvízi ökoszisztémák folyókat, tavakat és tavacskákat tartalmaznak. Minden víztest különböző zónákat tartalmaz egyedi feltételekkel.",
    r1_fact1: "Folyók: Folyó édesvíz, amely az óceán felé folyik 🌊",
    r1_fact2: "Tavak és tavacskák: Csöndes édesvíz szárazföld körül 💧",
    r1_fact3: "Partvonal zóna: Sekély víz növényekkel és napfénnyel 🌱",
    r1_fact4: "Nyílt víz és mélyebb zóna: Mélyebb területek kevesebb fénnyel és nyomással 🐠",

    r2_title: "Sószvízi ökoszisztémák",
    r2_text: "A sósvízi ökoszisztémák az óceánokat és korallzátonyokat tartalmazzák. Az óceán a Föld nagyobb részét borítja és millió faj otthona.",
    r2_fact1: "Óceánok: Hatalmas sósvíz kiterjedések, amelyek a Föld 71% -át borítják 🌊",
    r2_fact2: "Korallzátonyok: Sekély, színes ökoszisztémák, amelyeket apró korallfajok építenek 🪸",
    r2_fact3: "Felszín zóna: Meleg, napos víz, ahol fotoszintézis történik ☀️",
    r2_fact4: "Mély tenger: Hideg, sötét zóna, ahol csak speciálisan adaptált lények élnek 🐙",

    r3_title: "Vízorganizmusok",
    r3_text: "A vízökoszisztémák hihetetlen sokféleséget rejtkeztetnek. Különböző organizmusok alkalmazkodtak a vízben való életre.",
    r3_fact1: "Halak: Kopoltyúkat használnak a víz oxigénjét szívás 🐟",
    r3_fact2: "Kétéltűek: Részben vízben, részben szárazföldön élnek (béka, fejlődés) 🐸",
    r3_fact3: "Vízi rovarok: Szitakötő lárva, vízibogarak vízben élnek 🦗",
    r3_fact4: "Planktun és algák: Apró organizmusok, amelyek a vízi élelmiszerlánc alapját képezik 🔬",
    r3_q: "Mit használnak a halak a víz alatti lélegzéshez?",
    r3_gills: "Kopoltyúk",
    r3_lungs: "Tüdő",
    r3_spiracles: "Légnyílások",
    r3_skin: "Bőr",

    r4_title: "Vízcsapolódás és Védelme",
    r4_text: "A vízökoszisztémák szennyeződés által fenyegetett. Meg kell védenünk őket az olyan növények és állatok számára, amelyek tiszta víztől függenek.",
    r4_fact1: "Szennyezésforrások: Gyárak, gazdaságok és városok ártalmas vegyi anyagokat bocsátanak ki 🏭",
    r4_fact2: "Műanyag szennyezés: Hulladék sérülésekből származó vízökoszisztémákat és vadállatokat 🛑",
    r4_fact3: "Olajszennyezés: Vízállatokat sérülnek és halott zónákat hoznak létre 🚫",
    r4_fact4: "Természetvédelem: Védett területek, tiszta energia és újrahasznosítás segítségnek a víz tisztaságában 🌍",
    r4_q: "Melyik intézkedés védi legjobban a vízökoszisztémákat?",
    r4_reduce: "Szennyezés csökkentése, élőhely védelme",
    r4_build: "Több gyár építése",
    r4_drain: "Mocsarak lecsapolása mezőgazdasági célokra",
    r4_ignore: "Vízövedelem figyelmen kívül hagyása",

    r5_title: "Vízökoszisztémák kvíz",

    q1_q: "Melyik egy édesvízi ökoszisztéma példája?",
    q1_river: "Folyó",
    q1_ocean: "Óceán",
    q1_sea: "Tenger",
    q1_gulf: "Öböl",

    q2_q: "A Föld hány százalékát borítják az óceánok?",
    q2_71: "Körülbelül 71%",
    q2_50: "Körülbelül 50%",
    q2_30: "Körülbelül 30%",
    q2_90: "Körülbelül 90%",

    q3_q: "Mi a fő veszély sok vízökoszisztémára?",
    q3_pollution: "Szennyezés",
    q3_rain: "Eső",
    q3_sunlight: "Napfény",
    q3_wind: "Szél",
  },
  ro: {
    r1_title: "Ecosisteme de apă dulce",
    r1_text: "Ecosistemele de apă dulce includ fluvii, lacuri și iazuri. Fiecare corp de apă are zone diferite cu condiții unice.",
    r1_fact1: "Fluvii: Apă dulce care curge în jos spre ocean 🌊",
    r1_fact2: "Lacuri și iazuri: Apă dulce liniștit înconjurat de pământ 💧",
    r1_fact3: "Zona de țărm: Apă puțin adâncă cu plante și lumina soarelui 🌱",
    r1_fact4: "Apă deschisă și zona profundă: Zone mai adânci cu mai puțin lumină și presiune 🐠",

    r2_title: "Ecosisteme de apă sărată",
    r2_text: "Ecosistemele de apă sărată includ oceanele și recifurile de corali. Oceanul acoperă cea mai mare parte a Pământului și este acasă pentru milioane de specii.",
    r2_fact1: "Oceane: Corpuri uriașe de apă sărată care acoperă 71% din Pământ 🌊",
    r2_fact2: "Recifuri de corali: Ecosisteme colorate construite de către mici animale de corali 🪸",
    r2_fact3: "Zona de suprafață: Apă caldă și luminoasă unde se întâmplă fotosinteza ☀️",
    r2_fact4: "Marea adâncă: Zona rece și întunecată unde doar creaturi special adaptate trăiesc 🐙",

    r3_title: "Organisme acvatice",
    r3_text: "Ecosistemele acvatice găzduiesc o diversitate incredibilă. Diferiți organisme s-au adaptat pentru a supraviețui în apă.",
    r3_fact1: "Pești: Utilizează branhii pentru a respira oxigenul din apă 🐟",
    r3_fact2: "Amfibieni: Trăiesc parțial în apă, parțial pe uscat (broaște, tadpoles) 🐸",
    r3_fact3: "Insecte acvatice: Larve de libelule, coleoptere acvatice trăiesc în apă 🦗",
    r3_fact4: "Planctoni și alge: Organisme minuscule care sunt baza lanțurilor trofice acvatice 🔬",
    r3_q: "Ce folosesc pești pentru a respira sub apă?",
    r3_gills: "Branhii",
    r3_lungs: "Plămâni",
    r3_spiracles: "Spiracule",
    r3_skin: "Piele",

    r4_title: "Poluarea apei și protecție",
    r4_text: "Ecosistemele acvatice sunt amenințate de poluare. Trebuie să le protejăm pentru plantele și animalele care depind de apă curată.",
    r4_fact1: "Surse de poluare: Fabrici, ferme și orașe eliberează substanțe chimice dăunătoare 🏭",
    r4_fact2: "Poluarea cu plastic: Deșeurile dăunează ecosistemelor acvatice și rănesc fauna sălbatică 🛑",
    r4_fact3: "Deversări de petrol: Dăunează vieții acvatice și creează zone moarte 🚫",
    r4_fact4: "Conservare: Zone protejate, energie curată și reciclare ajută să mențin apă curată 🌍",
    r4_q: "Care acțiune protejează cel mai bine ecosistemele acvatice?",
    r4_reduce: "Reduce poluarea, protejaaza habitaturile",
    r4_build: "Construieți mai multe fabrici",
    r4_drain: "Dreineaza terenuri mlastoase pentru agricultura",
    r4_ignore: "Ignora protectia apei",

    r5_title: "Ecosisteme acvatice Quiz",

    q1_q: "Care este un exemplu de ecosistem de apă dulce?",
    q1_river: "Fluviu",
    q1_ocean: "Ocean",
    q1_sea: "Mare",
    q1_gulf: "Golf",

    q2_q: "Ce procent din Pământ este acoperit de oceane?",
    q2_71: "Aproximativ 71%",
    q2_50: "Aproximativ 50%",
    q2_30: "Aproximativ 30%",
    q2_90: "Aproximativ 90%",

    q3_q: "Care este amenințarea principală pentru multe ecosisteme acvatice?",
    q3_pollution: "Poluare",
    q3_rain: "Ploaie",
    q3_sunlight: "Lumina soarelui",
    q3_wind: "Vânt",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS (NO TEXT INSIDE SVG)
// ─────────────────────────────────────────────────────────────────────────────

/** Round 1 SVG: Freshwater lake cross-section with zones */
function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="freshwaterBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4DB8FF" />
        </linearGradient>
        <linearGradient id="lakeBed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6BA3B8" />
          <stop offset="100%" stopColor="#5A8FA0" />
        </linearGradient>
      </defs>

      {/* Water background */}
      <rect width="240" height="160" fill="url(#freshwaterBg)" />

      {/* Shore zone — shallow with plants */}
      <g id="shoreZone">
        <rect x="0" y="80" width="50" height="80" fill="url(#lakeBed)" opacity="0.5" />
        {/* Water plants */}
        <path d="M 10 80 Q 12 70 14 60" stroke="#2D7D2D" strokeWidth="2" />
        <path d="M 25 80 Q 27 68 28 55" stroke="#3A9A3A" strokeWidth="2.5" />
        <path d="M 40 80 Q 42 70 44 60" stroke="#2D7D2D" strokeWidth="2" />
        {/* Fish in shallow */}
        <ellipse cx="30" cy="70" rx="6" ry="4" fill="#FF6B35" />
        <polygon points="36,70 42,68 42,72" fill="#FF6B35" />
      </g>

      {/* Open water zone — middle depth */}
      <g id="openWaterZone">
        <rect x="50" y="80" width="140" height="80" fill="url(#lakeBed)" opacity="0.7" />
        {/* Larger fish */}
        <ellipse cx="100" cy="100" rx="10" ry="6" fill="#4DB8FF" opacity="0.8" />
        <polygon points="110,100 120,97 120,103" fill="#4DB8FF" opacity="0.8" />
        {/* Water lily on surface */}
        <circle cx="130" cy="80" r="8" fill="#90EE90" opacity="0.7" />
      </g>

      {/* Deep zone — dark bottom */}
      <g id="deepZone">
        <rect x="190" y="80" width="50" height="80" fill="url(#lakeBed)" opacity="0.85" />
        {/* Bottom sediment */}
        <ellipse cx="215" cy="150" rx="20" ry="8" fill="#4A5A3A" opacity="0.6" />
      </g>

      {/* Water surface line */}
      <line x1="0" y1="80" x2="240" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2,2" />

      {/* Zone labels positions (no text, just color regions) */}
      {/* Sun rays filtering down */}
      <line x1="60" y1="20" x2="60" y2="80" stroke="rgba(255,255,100,0.2)" strokeWidth="3" />
      <line x1="120" y1="20" x2="120" y2="80" stroke="rgba(255,255,100,0.2)" strokeWidth="3" />
      <line x1="180" y1="20" x2="180" y2="80" stroke="rgba(255,255,100,0.2)" strokeWidth="2" opacity="0.5" />

      {/* Shore vegetation above water */}
      <g id="shoreVeg">
        <ellipse cx="15" cy="70" rx="10" ry="15" fill="#4A8B4A" />
        <ellipse cx="40" cy="65" rx="12" ry="18" fill="#5BA85B" />
      </g>
    </svg>
  );
}

/** Round 2 SVG: Ocean depth zones with creatures */
function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="oceanBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0077BE" />
          <stop offset="50%" stopColor="#004E89" />
          <stop offset="100%" stopColor="#001a4d" />
        </linearGradient>
      </defs>

      {/* Ocean background with gradient */}
      <rect width="240" height="160" fill="url(#oceanBg)" />

      {/* Surface zone — bright colors, coral reef */}
      <g id="surfaceZone">
        <rect x="0" y="0" width="240" height="40" fill="rgba(0,150,200,0.3)" />
        {/* Sun circle */}
        <circle cx="200" cy="15" r="8" fill="#FFD700" opacity="0.7" />
        {/* Coral reef structure */}
        <polygon points="30,40 20,50 40,50" fill="#FF6B35" opacity="0.8" />
        <polygon points="70,40 65,50 75,50" fill="#FFB347" opacity="0.8" />
        <polygon points="110,40 100,50 120,50" fill="#FF8C42" opacity="0.8" />
        <polygon points="160,40 150,50 170,50" fill="#FF6B35" opacity="0.8" />
        {/* Fish in surface zone */}
        <ellipse cx="50" cy="25" rx="8" ry="5" fill="#FFD700" />
        <polygon points="58,25 68,23 68,27" fill="#FFD700" />
      </g>

      {/* Twilight zone — dimmer, medium creatures */}
      <g id="twilightZone">
        <rect x="0" y="40" width="240" height="40" fill="rgba(0,100,150,0.2)" />
        {/* Jellyfish */}
        <circle cx="60" cy="55" r="6" fill="#9D4EDD" opacity="0.7" />
        <path d="M 56 61 Q 54 68 56 75" stroke="#9D4EDD" strokeWidth="1.5" opacity="0.6" />
        <path d="M 60 61 Q 60 70 60 75" stroke="#9D4EDD" strokeWidth="1.5" opacity="0.6" />
        <path d="M 64 61 Q 66 68 64 75" stroke="#9D4EDD" strokeWidth="1.5" opacity="0.6" />
        {/* Medium fish */}
        <ellipse cx="140" cy="50" rx="9" ry="5" fill="#4DB8FF" opacity="0.6" />
        <polygon points="149,50 158,48 158,52" fill="#4DB8FF" opacity="0.6" />
      </g>

      {/* Deep zone — very dark, bioluminescent creatures */}
      <g id="deepZone">
        <rect x="0" y="80" width="240" height="80" fill="rgba(0,20,60,0.4)" />
        {/* Bioluminescent fish (glowing dots) */}
        <circle cx="80" cy="110" r="3" fill="#00FF00" opacity="0.8" />
        <circle cx="78" cy="108" r="2" fill="#00FF88" opacity="0.6" />
        {/* Anglerfish silhouette */}
        <ellipse cx="150" cy="120" rx="8" ry="6" fill="#000033" stroke="#0066CC" strokeWidth="0.5" />
        <circle cx="156" cy="118" r="2" fill="#FF0000" />
        {/* Giant squid eye */}
        <circle cx="220" cy="130" r="4" fill="#1E90FF" opacity="0.7" />
      </g>

      {/* Pressure indicator lines */}
      <line x1="5" y1="0" x2="5" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  );
}

/** Round 3 SVG: Water organisms diversity */
function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="aquaticBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4DB8FF" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#aquaticBg)" />

      {/* Fish — gills visible */}
      <g id="fish">
        <ellipse cx="50" cy="50" rx="12" ry="8" fill="#FF6B35" />
        <polygon points="62,50 72,48 72,52" fill="#FF6B35" />
        <line x1="56" y1="45" x2="58" y2="42" stroke="#FF6B35" strokeWidth="1.5" />
        <line x1="56" y1="55" x2="58" y2="58" stroke="#FF6B35" strokeWidth="1.5" />
        <circle cx="64" cy="50" r="2" fill="black" />
      </g>

      {/* Frog — amphibian */}
      <g id="frog">
        <ellipse cx="120" cy="100" rx="10" ry="12" fill="#4CAF50" />
        <circle cx="110" cy="92" r="6" fill="#4CAF50" />
        <circle cx="130" cy="92" r="6" fill="#4CAF50" />
        <circle cx="112" cy="90" r="2" fill="black" />
        <circle cx="128" cy="90" r="2" fill="black" />
        {/* Legs */}
        <path d="M 105 108 L 95 115" stroke="#3D8B40" strokeWidth="2" />
        <path d="M 135 108 L 145 115" stroke="#3D8B40" strokeWidth="2" />
      </g>

      {/* Dragonfly larva in water */}
      <g id="dragonflyLarva">
        <ellipse cx="190" cy="120" rx="6" ry="8" fill="#8B4513" />
        <circle cx="190" cy="110" r="4" fill="#A0522D" />
        {/* Legs */}
        <line x1="185" y1="115" x2="175" y2="125" stroke="#654321" strokeWidth="1.5" />
        <line x1="195" y1="115" x2="205" y2="125" stroke="#654321" strokeWidth="1.5" />
      </g>

      {/* Plankton — tiny dots */}
      <circle cx="40" cy="20" r="2" fill="#90EE90" opacity="0.8" />
      <circle cx="60" cy="25" r="1.5" fill="#90EE90" opacity="0.8" />
      <circle cx="80" cy="20" r="2" fill="#90EE90" opacity="0.8" />
      <circle cx="100" cy="22" r="1.5" fill="#90EE90" opacity="0.8" />
      <circle cx="140" cy="18" r="2" fill="#90EE90" opacity="0.8" />
      <circle cx="180" cy="20" r="1.5" fill="#90EE90" opacity="0.8" />
      <circle cx="220" cy="25" r="2" fill="#90EE90" opacity="0.8" />

      {/* Algae/seaweed */}
      <path d="M 20 130 Q 18 110 22 90" stroke="#2D7D2D" strokeWidth="3" />
      <path d="M 210 140 Q 212 115 208 95" stroke="#2D7D2D" strokeWidth="3" />

      {/* Water bubbles indicating oxygen */}
      <circle cx="35" cy="35" r="1.5" fill="rgba(255,255,255,0.4)" />
      <circle cx="75" cy="40" r="1" fill="rgba(255,255,255,0.4)" />
      <circle cx="155" cy="35" r="1.5" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

/** Round 4 SVG: Water pollution vs clean water comparison */
function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="pollutedWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B8E23" />
          <stop offset="100%" stopColor="#556B2F" />
        </linearGradient>
        <linearGradient id="cleanWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4DB8FF" />
          <stop offset="100%" stopColor="#87CEEB" />
        </linearGradient>
      </defs>

      {/* Divider line */}
      <line x1="120" y1="0" x2="120" y2="160" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5" />

      {/* LEFT SIDE: Polluted water */}
      <rect x="0" y="0" width="120" height="160" fill="url(#pollutedWater)" />

      {/* Factory pollution */}
      <rect x="15" y="20" width="30" height="35" fill="#4A4A4A" />
      <rect x="25" y="10" width="10" height="15" fill="#333333" />
      {/* Smoke */}
      <circle cx="30" cy="5" r="6" fill="#999999" opacity="0.6" />
      <circle cx="32" cy="0" r="5" fill="#999999" opacity="0.4" />

      {/* Plastic waste in water */}
      <rect x="20" y="90" width="12" height="8" fill="#FFD700" opacity="0.7" />
      <polygon points="50,85 55,95 45,95" fill="#FFD700" opacity="0.7" />
      <rect x="80" y="100" width="8" height="10" fill="#FFD700" opacity="0.6" />

      {/* Dead fish */}
      <ellipse cx="70" cy="110" rx="10" ry="5" fill="#555555" opacity="0.5" />
      <polygon points="80,110 88,108 88,112" fill="#555555" opacity="0.5" />

      {/* RIGHT SIDE: Clean water */}
      <rect x="120" y="0" width="120" height="160" fill="url(#cleanWater)" />

      {/* Wind turbine — clean energy */}
      <g id="windTurbine">
        <rect x="170" y="45" width="4" height="40" fill="#888888" />
        <line x1="172" y1="40" x2="172" y2="15" stroke="#888888" strokeWidth="2" />
        {/* Blades */}
        <path d="M 172 35 L 175 25 L 169 25 Z" fill="#CCCCCC" opacity="0.8" />
      </g>

      {/* Healthy fish */}
      <ellipse cx="150" cy="90" rx="10" ry="6" fill="#FF6B35" />
      <polygon points="160,90 170,88 170,92" fill="#FF6B35" />
      <circle cx="168" cy="90" r="2" fill="black" />

      {/* Algae and plants — sign of health */}
      <path d="M 140 120 Q 138 100 142 80" stroke="#2D7D2D" strokeWidth="3" />
      <path d="M 200 130 Q 202 110 198 90" stroke="#2D7D2D" strokeWidth="3" />

      {/* Water droplets — fresh water indicator */}
      <circle cx="145" cy="30" r="3" fill="rgba(100,200,255,0.6)" />
      <circle cx="195" cy="35" r="3" fill="rgba(100,200,255,0.6)" />
      <circle cx="160" cy="25" r="2.5" fill="rgba(100,200,255,0.6)" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const WATER_EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
      svg: () => SVG_R1(),
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
      svg: () => SVG_R2(),
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      svg: () => SVG_R3(),
      questions: [
        {
          question: "r3_q",
          choices: ["r3_gills", "r3_lungs", "r3_spiracles", "r3_skin"],
          answer: "r3_gills",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      svg: () => SVG_R4(),
      questions: [
        {
          question: "r4_q",
          choices: ["r4_reduce", "r4_build", "r4_drain", "r4_ignore"],
          answer: "r4_reduce",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => <div />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_river", "q1_ocean", "q1_sea", "q1_gulf"],
          answer: "q1_river",
        },
        {
          question: "q2_q",
          choices: ["q2_71", "q2_50", "q2_30", "q2_90"],
          answer: "q2_71",
        },
        {
          question: "q3_q",
          choices: ["q3_pollution", "q3_rain", "q3_sunlight", "q3_wind"],
          answer: "q3_pollution",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function WaterExplorer({ color = "#0077BE", lang = "en", onDone }: { color?: string; lang?: string; onDone?: (score: number, total: number) => void }) {
  return <ExplorerEngine def={WATER_EXPLORER_DEF} color={color} lang={lang} onDone={onDone} />;
}
