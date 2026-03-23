"use client";
// WildAnimalExplorer — Wild Animals & Behavior (Wildtiere) Grade 2

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Predators and Prey", r1_text: "Some animals hunt other animals for food. The hunter is called a predator, and the hunted animal is called prey.",
    r1_fact1: "Lions hunt zebras and antelopes",
    r1_q: "What is an animal that hunts others called?", r1_a: "Predator", r1_b: "Herbivore", r1_c: "Plant", r1_d: "Prey",
    r2_title: "Herbivores and Carnivores", r2_text: "Herbivores eat only plants. Carnivores eat meat. Some animals eat both plants and meat (omnivores).",
    r2_fact1: "Rabbits are herbivores that eat grass and vegetables",
    r2_q: "What does a herbivore eat?", r2_a: "Plants", r2_b: "Meat only", r2_c: "Other animals", r2_d: "Nothing",
    r3_title: "Nocturnal and Diurnal Animals", r3_text: "Some animals sleep during the day and hunt at night (nocturnal). Others are active during the day (diurnal).",
    r3_fact1: "Owls are nocturnal and hunt at night",
    r3_q: "When are nocturnal animals active?", r3_a: "At night", r3_b: "During the day", r3_c: "All the time", r3_d: "Never",
    r4_title: "Animal Adaptations", r4_text: "Animals have special features to help them survive. Camouflage helps them hide from predators.",
    r4_fact1: "A rabbit's white fur helps it hide in snow",
    r4_q: "What helps an animal hide from predators?", r4_a: "Camouflage", r4_b: "Loud noise", r4_c: "Speed only", r4_d: "Bright color",
    r5_q1_q: "Which animal is a carnivore?", r5_q1_a: "Tiger", r5_q1_b: "Deer", r5_q1_c: "Cow", r5_q1_d: "Sheep",
    r5_q2_q: "What is an animal that eats plants only?", r5_q2_a: "Herbivore", r5_q2_b: "Carnivore", r5_q2_c: "Predator", r5_q2_d: "Hunter",
  },
  de: {
    r1_title: "Räuber und Beute", r1_text: "Manche Tiere jagen andere Tiere zur Nahrung. Der Jäger heißt Raubtier und das gejagte Tier heißt Beute.",
    r1_fact1: "Löwen jagen Zebras und Antilopen",
    r1_q: "Wie heißt ein Tier, das andere jagt?", r1_a: "Raubtier", r1_b: "Pflanzenfresser", r1_c: "Pflanze", r1_d: "Beute",
    r2_title: "Pflanzenfresser und Fleischfresser", r2_text: "Pflanzenfresser essen nur Pflanzen. Fleischfresser essen Fleisch. Manche Tiere essen beide (Allesfresser).",
    r2_fact1: "Kaninchen sind Pflanzenfresser, die Gras und Gemüse essen",
    r2_q: "Was frisst ein Pflanzenfresser?", r2_a: "Pflanzen", r2_b: "Nur Fleisch", r2_c: "Andere Tiere", r2_d: "Nichts",
    r3_title: "Nacht- und Tagtiere", r3_text: "Manche Tiere schlafen tagsüber und jagen nachts (Nachttiere). Andere sind tagsüber aktiv (Tagtiere).",
    r3_fact1: "Eulen sind Nachttiere und jagen nachts",
    r3_q: "Wann sind Nachttiere aktiv?", r3_a: "Nachts", r3_b: "Tagsüber", r3_c: "Die ganze Zeit", r3_d: "Niemals",
    r4_title: "Tierverstecke", r4_text: "Tiere haben spezielle Fähigkeiten zum Überleben. Tarnung hilft ihnen, sich vor Raubtieren zu verstecken.",
    r4_fact1: "Das weiße Fell eines Kaninchens hilft ihm, sich im Schnee zu verstecken",
    r4_q: "Was hilft einem Tier, sich vor Raubtieren zu verstecken?", r4_a: "Tarnung", r4_b: "Lautes Geräusch", r4_c: "Nur Geschwindigkeit", r4_d: "Helle Farbe",
    r5_q1_q: "Welches Tier ist ein Fleischfresser?", r5_q1_a: "Tiger", r5_q1_b: "Hirsch", r5_q1_c: "Kuh", r5_q1_d: "Schaf",
    r5_q2_q: "Wie heißt ein Tier, das nur Pflanzen frisst?", r5_q2_a: "Pflanzenfresser", r5_q2_b: "Fleischfresser", r5_q2_c: "Raubtier", r5_q2_d: "Jäger",
  },
  hu: {
    r1_title: "Ragadozók és zsákmány", r1_text: "Egyes állatok vadásznak más állatokra táplálékért. A vadász ragadozónak nevezzük, a vadászott állat zsákmánynak.",
    r1_fact1: "Az oroszlánok zebrákra és antilopokra vadásznak",
    r1_q: "Hogyan hívják az állatot, amely másokat vadászik?", r1_a: "Ragadozó", r1_b: "Növényi étrend", r1_c: "Növény", r1_d: "Zsákmány",
    r2_title: "Növényi és húsevők", r2_text: "A növényi ételeket csak növények esznek. A húsevők húst esznek. Néhány állat mindkettőt eszik (omnivore).",
    r2_fact1: "A nyulak növényevő állatok, amelyek füvet és zöldséget esznek",
    r2_q: "Mit eszik egy növényi etető?", r2_a: "Növények", r2_b: "Csak húst", r2_c: "Más állatok", r2_d: "Semmit",
    r3_title: "Éjszakai és nappali állatok", r3_text: "Egyes állatok napközben alszanak és éjszaka vadásznak (éjszakai). Mások nappali aktívak (nappali).",
    r3_fact1: "A báránykák éjszakai állatok és éjszaka vadásznak",
    r3_q: "Mikor aktívak az éjszakai állatok?", r3_a: "Éjszaka", r3_b: "Nappali", r3_c: "Az egész idő", r3_d: "Soha",
    r4_title: "Állat adaptációk", r4_text: "Az állatoknak speciális jellegzetességeik vannak a túléléshez. A maszkírozás segít rejtve maradni a ragadozóktól.",
    r4_fact1: "A nyúl fehér szőrzete segít a hóban rejtve maradni",
    r4_q: "Mit segít az állatnak a ragadozóktól rejtve maradni?", r4_a: "Maszkírozás", r4_b: "Hangos zaj", r4_c: "Csak sebesség", r4_d: "Fényes szín",
    r5_q1_q: "Melyik állat húsevő?", r5_q1_a: "Tigris", r5_q1_b: "Szarvas", r5_q1_c: "Tehén", r5_q1_d: "Juh",
    r5_q2_q: "Hogyan hívják az állatot, amely csak növényt eszik?", r5_q2_a: "Növényevő", r5_q2_b: "Húsevő", r5_q2_c: "Ragadozó", r5_q2_d: "Vadász",
  },
  ro: {
    r1_title: "Prădători și pradă", r1_text: "Unele animale vânează alte animale pentru hrană. Vânătorul se numește pradă, iar animalul vânat se numește pradă.",
    r1_fact1: "Leii vânează zebre și antilope",
    r1_q: "Cum se numește un animal care vânează altele?", r1_a: "Prădător", r1_b: "Erbivore", r1_c: "Plantă", r1_d: "Pradă",
    r2_title: "Erbivore și carnivore", r2_text: "Erbivore mănâncă doar plante. Carnivorele mănâncă carne. Unele animale mănâncă atât plante, cât și carne (omnivor).",
    r2_fact1: "Iepurii sunt erbivore care mănâncă iarba și legume",
    r2_q: "Ce mănâncă un erbivore?", r2_a: "Plante", r2_b: "Doar carne", r2_c: "Alte animale", r2_d: "Nimic",
    r3_title: "Animale nocturne și diurne", r3_text: "Unele animale dorm ziua și vânează noaptea (nocturne). Altele sunt active ziua (diurne).",
    r3_fact1: "Ciufuleții sunt animale nocturne și vânează noaptea",
    r3_q: "Când sunt active animalele nocturne?", r3_a: "Noaptea", r3_b: "Ziua", r3_c: "Tot timpul", r3_d: "Niciodată",
    r4_title: "Adaptări ale animalelor", r4_text: "Animalele au caracteristici speciale pentru a supraviețui. Camuflajul le ajută să se ascundă de prădători.",
    r4_fact1: "Blana albă a iepurelui o ajută să se ascundă în zăpadă",
    r4_q: "Ce ajută un animal să se ascundă de prădători?", r4_a: "Camuflaj", r4_b: "Zgomot puternic", r4_c: "Doar viteza", r4_d: "Culoare strălucitoare",
    r5_q1_q: "Ce animal este carnivor?", r5_q1_a: "Tigru", r5_q1_b: "Cărăbușă", r5_q1_c: "Vacă", r5_q1_d: "Oaie",
    r5_q2_q: "Cum se numește un animal care mănâncă doar plante?", r5_q2_a: "Erbivore", r5_q2_b: "Carnivor", r5_q2_c: "Prădător", r5_q2_d: "Vânător",
  },
};

const SVG_LION_PRO = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
    <defs>
      <linearGradient id="savanna_sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD194" />
        <stop offset="100%" stopColor="#D1913C" />
      </linearGradient>
      {/* Sörény textúra minta */}
      <radialGradient id="mane_grad" cx="50%" cy="50%" r="50%">
        <stop offset="70%" stopColor="#8B4513" />
        <stop offset="100%" stopColor="#5D2906" />
      </radialGradient>
    </defs>

    {/* Háttér kártya */}
    <rect width="240" height="160" rx="20" fill="url(#savanna_sky)" />

    {/* Sörény - egy "csillag" jellegű path, ami organikusabb */}
    <path 
      d="M120 20 L135 35 L155 30 L165 50 L185 55 L180 75 L195 90 L180 105 L185 125 L165 130 L155 150 L135 145 L120 160 L105 145 L85 150 L75 130 L55 125 L60 105 L45 90 L60 75 L55 55 L75 50 L85 30 L105 35 Z" 
      fill="url(#mane_grad)" 
    />

    {/* Arc alap */}
    <circle cx="120" cy="90" r="45" fill="#F4A460" />
    
    {/* Pofazacskók (világosabb rész) */}
    <circle cx="108" cy="105" r="15" fill="#FFDEAD" />
    <circle cx="132" cy="105" r="15" fill="#FFDEAD" />

    {/* Szemek - mélységgel */}
    <circle cx="100" cy="85" r="8" fill="white" />
    <circle cx="140" cy="85" r="8" fill="white" />
    <circle cx="102" cy="86" r="4" fill="#333" />
    <circle cx="142" cy="86" r="4" fill="#333" />
    <circle cx="99" cy="83" r="2" fill="white" /> {/* Csillanás */}
    <circle cx="139" cy="83" r="2" fill="white" />

    {/* Orr */}
    <path d="M112 95 L128 95 L120 105 Z" fill="#5D2906" rx="2" />

    {/* Bajusz pöttyök */}
    <g fill="#5D2906" opacity="0.3">
      <circle cx="105" cy="102" r="1" /> <circle cx="110" cy="104" r="1" />
      <circle cx="130" cy="104" r="1" /> <circle cx="135" cy="102" r="1" />
    </g>

    {/* Animált száj/mosoly */}
    <path 
      d="M110 115 Q120 125 130 115" 
      stroke="#5D2906" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round"
    />
  </svg>
);
const SVG_R2_PRO = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
    <defs>
      <linearGradient id="meadow_bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e1f5fe" />
        <stop offset="100%" stopColor="#b3e5fc" />
      </linearGradient>
      <radialGradient id="rabbit_fur" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E0E0E0" />
      </radialGradient>
    </defs>

    <rect width="240" height="160" rx="20" fill="url(#meadow_bg)" />
    
    {/* Dombsor a háttérben */}
    <path d="M0 160 Q60 100 120 130 T240 110 L240 160 L0 160 Z" fill="#81c784" />
    <path d="M0 160 Q80 120 160 140 T240 130 L240 160 L0 160 Z" fill="#66bb6a" opacity="0.8" />

    {/* Nyuszi Test - Path-szel rajzolva */}
    <path 
      d="M90 135 Q70 135 70 115 Q70 90 100 85 Q120 85 135 105 Q145 125 130 135 Z" 
      fill="url(#rabbit_fur)" 
    />

    {/* Nyuszi Fej */}
    <circle cx="140" cy="95" r="18" fill="url(#rabbit_fur)" />

    {/* Fülek - Organikus kanál forma */}
    <path d="M132 80 Q125 40 135 40 Q145 40 140 80" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="1" />
    <path d="M145 80 Q152 40 162 40 Q172 40 158 80" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="1" />
    <path d="M135 75 Q132 50 137 50 Q142 50 139 75" fill="#ffcdd2" />
    <path d="M150 75 Q155 50 160 50 Q165 50 155 75" fill="#ffcdd2" />

    {/* Arc részletek */}
    <circle cx="150" cy="92" r="2.5" fill="#333" /> {/* Szem */}
    <path d="M158 98 L164 98 L161 102 Z" fill="#f06292" /> {/* Orr */}
    
    {/* Répa a fűben */}
    <g transform="translate(40, 130) rotate(-15)">
      <path d="M0 0 L20 -5 L20 5 Z" fill="#fb8c00" />
      <path d="M20 -3 Q25 -8 22 -12 M20 0 Q28 -3 28 -8" stroke="#2e7d32" strokeWidth="2" fill="none" />
    </g>
  </svg>
);
const SVG_R3_PRO = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
    <defs>
      <linearGradient id="night_grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a237e" />
        <stop offset="100%" stopColor="#000051" />
      </linearGradient>
      <radialGradient id="owl_grad">
        <stop offset="0%" stopColor="#795548" />
        <stop offset="100%" stopColor="#3e2723" />
      </radialGradient>
    </defs>

    <rect width="240" height="160" rx="20" fill="url(#night_grad)" />
    
    {/* Csillagok és Hold */}
    <circle cx="200" cy="40" r="15" fill="#fff9c4" />
    <circle cx="200" cy="40" r="25" fill="#fff9c4" opacity="0.1" />
    <g fill="white" opacity="0.4">
      <circle cx="40" cy="30" r="1" /> <circle cx="100" cy="20" r="1" />
      <circle cx="150" cy="50" r="1" /> <circle cx="30" cy="80" r="1.5" />
    </g>

    {/* Faág */}
    <path d="M40 125 Q120 115 200 135" stroke="#5d4037" strokeWidth="8" strokeLinecap="round" fill="none" />

    {/* Bagoly Test */}
    <path d="M90 120 Q120 140 150 120 Q165 90 155 60 Q120 50 85 60 Q75 90 90 120" fill="url(#owl_grad)" />

    {/* Szárnyak */}
    <path d="M90 115 Q75 90 85 65" stroke="#2b1a13" strokeWidth="3" fill="none" />
    <path d="M150 115 Q165 90 155 65" stroke="#2b1a13" strokeWidth="3" fill="none" />

    {/* Szem környéke (arc) */}
    <circle cx="105" cy="75" r="16" fill="#a1887f" opacity="0.5" />
    <circle cx="135" cy="75" r="16" fill="#a1887f" opacity="0.5" />

    {/* Hatalmas sárga szemek */}
    <circle cx="105" cy="75" r="12" fill="#ffd600" />
    <circle cx="135" cy="75" r="12" fill="#ffd600" />
    <circle cx="105" cy="75" r="6" fill="#000" />
    <circle cx="135" cy="75" r="6" fill="#000" />
    <circle cx="103" cy="73" r="2" fill="#fff" /> {/* Csillanás */}
    <circle cx="133" cy="73" r="2" fill="#fff" />

    {/* Csőr */}
    <path d="M120 82 L125 92 L115 92 Z" fill="#ffab00" />

    {/* Tollak (mintázat) */}
    <g stroke="white" strokeWidth="1" opacity="0.2" fill="none">
      <path d="M110 105 Q120 110 130 105" />
      <path d="M112 112 Q120 117 128 112" />
    </g>
  </svg>
);
const SVG_R4_PRO = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
    <defs>
      {/* Hideg, téli égbolt gradiens */}
      <linearGradient id="winter_sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#cfd8dc" />
        <stop offset="100%" stopColor="#eceff1" />
      </linearGradient>
      
      {/* Hó árnyékolás */}
      <linearGradient id="snow_shading" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e1f5fe" />
      </linearGradient>

      {/* Finom árnyék az állat alatt */}
      <filter id="camo_shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="0" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Kártya alap */}
    <rect width="240" height="160" rx="20" fill="url(#winter_sky)" />

    {/* Távoli fenyőfák sziluettje (egyszerű háromszögek) */}
    <g fill="#b0bec5" opacity="0.4">
      <path d="M20 110 L35 70 L50 110 Z" />
      <path d="M45 115 L60 85 L75 115 Z" />
      <path d="M180 110 L200 60 L220 110 Z" />
    </g>

    {/* Hóbuckák - több rétegben a mélységért */}
    <path d="M0 160 Q80 100 160 140 T240 120 L240 160 L0 160 Z" fill="url(#snow_shading)" />
    <path d="M-20 160 Q60 120 140 150 T280 130 L280 160 L-20 160 Z" fill="#ffffff" opacity="0.7" />

    {/* A Sarki Nyúl (Camouflage) */}
    <g filter="url(#camo_shadow)" transform="translate(100, 105)">
      {/* Test - nem kör, hanem "fekvő" nyúl forma */}
      <path 
        d="M0 25 Q-15 25 -15 15 Q-15 0 10 -5 Q35 -5 45 10 Q50 25 35 30 Z" 
        fill="#ffffff" 
        stroke="#e0e0e0" 
        strokeWidth="0.5"
      />
      {/* Fej (kicsit behúzva) */}
      <path 
        d="M35 10 Q55 5 55 15 Q55 25 40 25 Z" 
        fill="#ffffff" 
      />
      {/* Fülek - hátrafektetve, hogy kisebb legyen a sziluett */}
      <path d="M38 8 Q25 -5 15 2" fill="#ffffff" stroke="#eceff1" />
      <path d="M42 6 Q30 -8 20 0" fill="#ffffff" stroke="#eceff1" />
      
      {/* Szem - csak egy apró sötét pont, ami elárulja */}
      <circle cx="48" cy="14" r="1.2" fill="#455a64" opacity="0.6" />
      
      {/* Orrhegy - halvány rózsaszín */}
      <circle cx="54" cy="18" r="0.8" fill="#ffcdd2" />
    </g>

    {/* Szálló hópelyhek */}
    <g fill="white">
      <circle cx="30" cy="40" r="1" opacity="0.8" />
      <circle cx="80" cy="20" r="1.5" opacity="0.5" />
      <circle cx="150" cy="60" r="1" opacity="0.9" />
      <circle cx="210" cy="35" r="1.2" opacity="0.6" />
    </g>

    {/* Oktatási felirat - stílusosan */}
    <text x="120" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#90a4ae" letterSpacing="2" opacity="0.5">
      CAMOUFLAGE
    </text>
  </svg>
);
const SVG_R5_PRO = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
    <defs>
      {/* Nappali oldal gradiens */}
      <linearGradient id="day_side" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#81D4FA" />
        <stop offset="100%" stopColor="#4FC3F7" />
      </linearGradient>
      
      {/* Éjszakai oldal gradiens */}
      <linearGradient id="night_side" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1A237E" />
        <stop offset="100%" stopColor="#0D47A1" />
      </linearGradient>

      {/* Átmenet a kettő között */}
      <linearGradient id="split_bg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="45%" stopColor="#4FC3F7" />
        <stop offset="55%" stopColor="#1A237E" />
      </linearGradient>
    </defs>

    {/* Alap háttér kártya */}
    <rect width="240" height="160" rx="20" fill="url(#split_bg)" />

    {/* Talaj (Nappal vs Éj) */}
    <path d="M0 130 Q60 120 120 130 T240 130 L240 160 L0 160 Z" fill="#558B2F" /> {/* Bal oldal - fű */}
    <path d="M120 130 T240 130 L240 160 L120 160 Z" fill="#1B5E20" opacity="0.6" /> {/* Jobb oldal - sötétebb fű */}

    {/* Elemek: Nap és Hold */}
    <circle cx="40" cy="40" r="12" fill="#FFF176" /> {/* Nap */}
    <path d="M210 30 A12 12 0 1 0 210 54 A9 9 0 1 1 210 30" fill="#E1F5FE" /> {/* Hold kifli */}

    {/* --- MINI ÁLLAT FIGURÁK --- */}

    {/* 1. Mini Oroszlán (A Ragadozó) - Balra */}
    <g transform="translate(35, 100) scale(0.6)">
      <circle cx="0" cy="0" r="25" fill="#8B4513" /> {/* Sörény */}
      <circle cx="0" cy="5" r="18" fill="#F4A460" />  {/* Arc */}
      <circle cx="-6" cy="2" r="2" fill="#333" />     {/* Szemek */}
      <circle cx="6" cy="2" r="2" fill="#333" />
    </g>

    {/* 2. Mini Nyuszi (A Növényevő) - Középen */}
    <g transform="translate(100, 115) scale(0.5)">
      <ellipse cx="0" cy="0" rx="20" ry="14" fill="white" />
      <circle cx="15" cy="-8" r="10" fill="white" />
      <path d="M12 -15 Q10 -25 15 -25 Q20 -25 18 -15" fill="white" stroke="#DDD" />
      <circle cx="18" cy="-10" r="1.5" fill="#333" />
    </g>

    {/* 3. Mini Bagoly (Az Éjszakai) - Jobbra */}
    <g transform="translate(185, 100) scale(0.55)">
      <path d="M-20 20 Q0 35 20 20 Q25 0 0 -15 Q-25 0 -20 20" fill="#5D4037" />
      <circle cx="-8" cy="0" r="8" fill="#FFD600" />
      <circle cx="8" cy="0" r="8" fill="#FFD600" />
      <circle cx="-8" cy="0" r="4" fill="black" />
      <circle cx="8" cy="0" r="4" fill="black" />
      <path d="M-5 5 L5 5 L0 12 Z" fill="#FFA000" />
    </g>

    {/* Választóvonal effekt (középen egy fénysugár vagy fa) */}
    <rect x="119" y="20" width="2" height="110" fill="white" opacity="0.1" />

    {/* Dekoráció: Felhő és csillagok */}
    <circle cx="75" cy="45" r="5" fill="white" opacity="0.6" />
    <circle cx="85" cy="45" r="6" fill="white" opacity="0.6" />
    <g fill="white" opacity="0.5">
      <circle cx="155" cy="35" r="1" />
      <circle cx="175" cy="55" r="1" />
      <circle cx="215" cy="80" r="1" />
    </g>
  </svg>
);
const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: () => <SimpleSvg />, bulletKeys: ["r1_fact1"],
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" }] },
    { type: "mcq", infoTitle: "r2_title", infoText: "r2_text", svg: () => <SimpleSvg />, bulletKeys: ["r2_fact1"],
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_a" }] },
    { type: "mcq", infoTitle: "r3_title", infoText: "r3_text", svg: () => <SimpleSvg />, bulletKeys: ["r3_fact1"],
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_a" }] },
    { type: "mcq", infoTitle: "r4_title", infoText: "r4_text", svg: () => <SimpleSvg />, bulletKeys: ["r4_fact1"],
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_a" }] },
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: () => <SimpleSvg />,
      questions: [
        { question: "r5_q1_q", choices: ["r5_q1_a", "r5_q1_b", "r5_q1_c", "r5_q1_d"], answer: "r5_q1_a" },
        { question: "r5_q2_q", choices: ["r5_q2_a", "r5_q2_b", "r5_q2_c", "r5_q2_d"], answer: "r5_q2_a" },
      ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }

export default function WildAnimalExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
