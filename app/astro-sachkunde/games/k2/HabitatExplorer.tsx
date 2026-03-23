"use client";
// HabitatExplorer — Habitats & Animals (Lebensräume) Grade 2

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Forest Habitat", r1_text: "Forests are full of trees, and many animals live there. Deer, squirrels, and birds find food and shelter.",
    r1_fact1: "Forests have tall trees that provide homes for animals",
    r1_q: "Which animal lives in a forest?", r1_a: "Squirrel", r1_b: "Polar bear", r1_c: "Camel", r1_d: "Penguin",
    r2_title: "Water Habitat", r2_text: "Rivers, lakes, and oceans are home to fish, frogs, and ducks. These animals have special adaptations to live in water.",
    r2_fact1: "Fish have gills to breathe underwater",
    r2_q: "Where do frogs live?", r2_a: "Near water", r2_b: "In deserts", r2_c: "In mountains", r2_d: "On ice",
    r3_title: "Desert Habitat", r3_text: "Deserts are hot and dry with little water. Animals like camels and snakes adapt to survive there.",
    r3_fact1: "Camels store water in their humps",
    r3_q: "What helps a camel survive in the desert?", r3_a: "It stores water", r3_b: "It eats ice", r3_c: "It sleeps all day", r3_d: "It drinks soda",
    r4_title: "Arctic Habitat", r4_text: "The Arctic is very cold and icy. Polar bears, seals, and penguins have thick fur or feathers to stay warm.",
    r4_fact1: "Penguins have waterproof feathers and blubber for warmth",
    r4_q: "What keeps polar bears warm?", r4_a: "Thick fur", r4_b: "Dark skin", r4_c: "Eating ice", r4_d: "Small size",
    r5_q1_q: "Which habitat is cold and icy?", r5_q1_a: "Arctic", r5_q1_b: "Desert", r5_q1_c: "Forest", r5_q1_d: "River",
    r5_q2_q: "What adaptation helps fish live in water?", r5_q2_a: "Gills for breathing", r5_q2_b: "Fur for warmth", r5_q2_c: "Wings for flying", r5_q2_d: "Legs for walking",
  },
  de: {
    r1_title: "Waldlebensraum", r1_text: "Wälder sind voller Bäume, und viele Tiere leben dort. Hirsche, Eichhörnchen und Vögel finden Nahrung und Unterschlupf.",
    r1_fact1: "Wälder haben hohe Bäume, die Häuser für Tiere bieten",
    r1_q: "Welches Tier lebt im Wald?", r1_a: "Eichhörnchen", r1_b: "Eisbär", r1_c: "Kamel", r1_d: "Pinguin",
    r2_title: "Wasserlebensraum", r2_text: "Flüsse, Seen und Ozeane sind Heimat von Fischen, Fröschen und Enten. Diese Tiere haben besondere Anpassungen zum Wasserleben.",
    r2_fact1: "Fische haben Kiemen zum Atmen unter Wasser",
    r2_q: "Wo leben Frösche?", r2_a: "Nähe Wasser", r2_b: "In Wüsten", r2_c: "In Bergen", r2_d: "Auf Eis",
    r3_title: "Wüstenlebensraum", r3_text: "Wüsten sind heiß und trocken mit wenig Wasser. Tiere wie Kamele und Schlangen passen sich an, um dort zu überleben.",
    r3_fact1: "Kamele speichern Wasser in ihren Höckern",
    r3_q: "Was hilft einem Kamel, in der Wüste zu überleben?", r3_a: "Es speichert Wasser", r3_b: "Es isst Eis", r3_c: "Es schläft den ganzen Tag", r3_d: "Es trinkt Limonade",
    r4_title: "Arktislebensraum", r4_text: "Die Arktis ist sehr kalt und eisig. Eisbären, Robben und Pinguine haben dickes Fell oder Federn, um warm zu bleiben.",
    r4_fact1: "Pinguine haben wasserfeste Federn und Fettschicht zur Wärmung",
    r4_q: "Was hält Eisbären warm?", r4_a: "Dickes Fell", r4_b: "Dunkle Haut", r4_c: "Eis essen", r4_d: "Kleine Größe",
    r5_q1_q: "Welcher Lebensraum ist kalt und eisig?", r5_q1_a: "Arktis", r5_q1_b: "Wüste", r5_q1_c: "Wald", r5_q1_d: "Fluss",
    r5_q2_q: "Welche Anpassung hilft Fischen im Wasser zu leben?", r5_q2_a: "Kiemen zum Atmen", r5_q2_b: "Fell zur Wärmung", r5_q2_c: "Flügel zum Fliegen", r5_q2_d: "Beine zum Gehen",
  },
  hu: {
    r1_title: "Erdő élőhely", r1_text: "Az erdőkben sok fa van, és sok állat él ott. Az őzek, mókusok és madarak táplálékot és menedéket találnak.",
    r1_fact1: "Az erdőkben magas fák vannak, amelyek házakat adnak az állatoknak",
    r1_q: "Melyik állat él az erdőben?", r1_a: "Mókus", r1_b: "Jegesmedve", r1_c: "Teve", r1_d: "Pingvin",
    r2_title: "Víz élőhely", r2_text: "A folyók, tavak és океán halak, békák és kacsák otthona. Ezeknek az állatoknak speciális alkalmazkodásuk van a vízi életre.",
    r2_fact1: "A halaknak lebenyek vannak a víz alatti lélegzéshez",
    r2_q: "Hol élnek a békák?", r2_a: "Vízhez közeli helyen", r2_b: "Sivatagban", r2_c: "Hegyekben", r2_d: "Jégen",
    r3_title: "Sivatag élőhely", r3_text: "A sivatagok forróak és szárazak, kevés vízzel. Az olyan állatok, mint a teve és a kígyó alkalmazkodnak az ott való túléléshez.",
    r3_fact1: "A tevék vizet tárolnak a púpjaikban",
    r3_q: "Mit segít a tevének a sivatagban túlélni?", r3_a: "Vizet tárol", r3_b: "Jeget eszik", r3_c: "Egész nap alszik", r3_d: "Szódát iszik",
    r4_title: "Arktikus élőhely", r4_text: "Az Arktusz nagyon hideg és jeges. A jegesmedvék, fókák és pingvinek vastag szőrzet vagy tollak vannak a meleg tartáshoz.",
    r4_fact1: "A pingvineknek vízálló tollak és réteg vannak az értékhez",
    r4_q: "Mit tartja melegen a jegesmedveeket?", r4_a: "Vastag szőrzet", r4_b: "Sötét bőr", r4_c: "Jég evés", r4_d: "Kis méret",
    r5_q1_q: "Melyik élőhely hideg és jeges?", r5_q1_a: "Arktusz", r5_q1_b: "Sivatag", r5_q1_c: "Erdő", r5_q1_d: "Folyó",
    r5_q2_q: "Milyen alkalmazkodás segít a halaknak vízben élni?", r5_q2_a: "Lebenyek a lélegzéshez", r5_q2_b: "Szőrzet a melegítéshez", r5_q2_c: "Szárnyak a repüléshez", r5_q2_d: "Lábak a járáshoz",
  },
  ro: {
    r1_title: "Habitat pădure", r1_text: "Pădurile sunt pline de copaci și mulți animale trăiesc acolo. Cerbi, veverițe și păsări găsesc mâncare și adăpost.",
    r1_fact1: "Pădurile au copaci înalți care oferă case animalelor",
    r1_q: "Ce animal trăiește într-o pădure?", r1_a: "Veveriță", r1_b: "Urs polar", r1_c: "Cămilă", r1_d: "Pinguin",
    r2_title: "Habitat apă", r2_text: "Râurile, lacurile și oceanele sunt acasă pentru pești, broaște și rațe. Aceste animale au adaptări speciale pentru a trăi în apă.",
    r2_fact1: "Peștii au branhii pentru a respira sub apă",
    r2_q: "Unde trăiesc broaștele?", r2_a: "Lângă apă", r2_b: "În deșerturi", r2_c: "În munți", r2_d: "Pe gheață",
    r3_title: "Habitat deșert", r3_text: "Deșerturile sunt fierbinți și uscate cu puțină apă. Animale ca cămilele și șerpii se adaptează pentru a supraviețui acolo.",
    r3_fact1: "Cămilele stochează apă în cocoașele lor",
    r3_q: "Ce ajută o cămilă să supraviețuiască în deșert?", r3_a: "Stochează apă", r3_b: "Mânâncă gheață", r3_c: "Doarme toată ziua", r3_d: "Bea limonadă",
    r4_title: "Habitat arctic", r4_text: "Arctici este foarte rece și plin de gheață. Ursii polari, focile și pinguinii au blană sau pene groase pentru a rămâne caldi.",
    r4_fact1: "Pinguinii au pene impermeabile și strat de grăsime pentru căldură",
    r4_q: "Ce ține ursii polari caldi?", r4_a: "Blană groasă", r4_b: "Piele închisă", r4_c: "Mâncarea gheții", r4_d: "Dimensiune mică",
    r5_q1_q: "Ce habitat este rece și plin de gheață?", r5_q1_a: "Arctic", r5_q1_b: "Deșert", r5_q1_c: "Pădure", r5_q1_d: "Râu",
    r5_q2_q: "Ce adaptare ajută peștii să trăiască în apă?", r5_q2_a: "Branhii pentru respirație", r5_q2_b: "Blană pentru căldură", r5_q2_c: "Aripi pentru zbor", r5_q2_d: "Picioare pentru mers",
  },
};

const SVG_R1 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
    <defs>
      {/* Égbolt gradiens */}
      <linearGradient id="forest_sky_pro" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A3D9FF" />
        <stop offset="100%" stopColor="#E0F2F1" />
      </linearGradient>
      {/* Távoli hegyek/erdő ködös színe */}
      <linearGradient id="misty_forest" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#80CBC4" />
        <stop offset="100%" stopColor="#4DB6AC" />
      </linearGradient>
      {/* Fa törzs textúra */}
      <linearGradient id="bark" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#5D4037" />
        <stop offset="100%" stopColor="#3E2723" />
      </linearGradient>
    </defs>

    {/* Háttér kártya */}
    <rect width="240" height="160" rx="20" fill="url(#forest_sky_pro)" />

    {/* Távoli réteg (Hegyek/Ködös erdő) */}
    <path d="M0 130 Q60 80 120 110 T240 90 L240 160 L0 160 Z" fill="url(#misty_forest)" opacity="0.4" />

    {/* Talaj - füves textúra hatás */}
    <path d="M0 140 Q120 130 240 140 L240 160 L0 160 Z" fill="#2E7D32" />
    <path d="M0 150 Q120 145 240 155 L240 160 L0 160 Z" fill="#1B5E20" opacity="0.6" />

    {/* Középső fa (Részletesebb lomb) */}
    <g transform="translate(60, 140)">
      <rect x="-6" y="-60" width="12" height="60" fill="url(#bark)" />
      {/* Lomb rétegek */}
      <path d="M-30 -50 Q0 -90 30 -50 Z" fill="#388E3C" />
      <path d="M-25 -70 Q0 -100 25 -70 Z" fill="#43A047" />
      <path d="M-15 -85 Q0 -110 15 -85 Z" fill="#66BB6A" />
    </g>

    {/* Jobb oldali fa */}
    <g transform="translate(180, 145)">
      <rect x="-4" y="-40" width="8" height="40" fill="url(#bark)" />
      <circle cx="0" cy="-45" r="20" fill="#2E7D32" />
      <circle cx="12" cy="-40" r="12" fill="#388E3C" />
      <circle cx="-10" cy="-35" r="10" fill="#1B5E20" opacity="0.3" />
    </g>

    {/* Apró virágok/pöttyök a fűben */}
    <g fill="#FFF59D">
      <circle cx="30" cy="145" r="1.5" />
      <circle cx="120" cy="150" r="1.5" />
      <circle cx="210" cy="148" r="1.5" />
    </g>

    {/* Fénycsíkok a lombok között (Sunbeams) */}
    <path d="M100 0 L140 0 L100 160 L60 160 Z" fill="white" opacity="0.1" />
  </svg>
);
const SVG_R2 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
    <defs>
      {/* Mélyvízi gradiens */}
      <linearGradient id="ocean_deep" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4FC3F7" />
        <stop offset="100%" stopColor="#01579B" />
      </linearGradient>
      {/* Fénytörés (Caustics) minta */}
      <pattern id="water_rays" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20 Q10 0 20 20 T40 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
      </pattern>
      {/* Halacska teste */}
      <radialGradient id="fish_grad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFCA28" />
        <stop offset="100%" stopColor="#F57C00" />
      </radialGradient>
    </defs>

    {/* Alap vízfelület */}
    <rect width="240" height="160" rx="20" fill="url(#ocean_deep)" />
    
    {/* Fénytörés effekt a felszínen */}
    <rect width="240" height="160" rx="20" fill="url(#water_rays)" />

    {/* Homokos aljzat */}
    <path d="M0 140 Q120 130 240 150 L240 160 L0 160 Z" fill="#FFE082" opacity="0.8" />

    {/* Rétegzett hínár (elöl és hátul) */}
    <g strokeLinecap="round" fill="none">
      <path d="M30 160 Q20 130 35 100" stroke="#1B5E20" strokeWidth="4" opacity="0.6" />
      <path d="M45 160 Q55 120 40 90" stroke="#2E7D32" strokeWidth="5" />
      <path d="M190 160 Q200 130 185 105" stroke="#1B5E20" strokeWidth="4" />
      <path d="M210 160 Q200 140 215 115" stroke="#2E7D32" strokeWidth="3" opacity="0.7" />
    </g>

    {/* Pro Halacska - Dinamikusabb forma */}
    <g transform="translate(120, 85)">
      {/* Test és uszonyok */}
      <path d="M-20 0 Q-25 -15 -10 -12 T15 -5 Q25 0 15 5 T-10 12 Q-25 15 -20 0" fill="url(#fish_grad)" />
      {/* Farokúszó */}
      <path d="M-18 0 L-30 -10 L-26 0 L-30 10 Z" fill="#E65100" />
      {/* Szem csillanással */}
      <circle cx="12" cy="-2" r="3" fill="white" />
      <circle cx="13" cy="-2" r="1.2" fill="black" />
      {/* Kopoltyú */}
      <path d="M5 -5 Q8 0 5 5" stroke="#BF360C" strokeWidth="1" fill="none" />
    </g>

    {/* Animált buborékok */}
    <g fill="white" opacity="0.4">
      <circle cx="160" cy="110" r="2">
        <animate attributeName="cy" values="110;30" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="130" r="3">
        <animate attributeName="cy" values="130;50" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0" dur="5s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Víz felszíni csillogás */}
    <rect width="240" height="15" rx="5" fill="white" opacity="0.1" />
  </svg>
);
const SVG_R3 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
    <defs>
      {/* Forró égbolt gradiens */}
      <linearGradient id="desert_sky_pro" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFAB00" />
        <stop offset="100%" stopColor="#FFE082" />
      </linearGradient>
      {/* Homok dűne gradiens */}
      <linearGradient id="dune_grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFCC80" />
        <stop offset="100%" stopColor="#FB8C00" />
      </linearGradient>
      {/* Hőhullám szűrő (torzítás effekt) */}
      <filter id="heatwave">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
      </filter>
    </defs>

    {/* Égbolt */}
    <rect width="240" height="160" rx="20" fill="url(#desert_sky_pro)" />

    {/* Lüktető Nap */}
    <g transform="translate(190, 40)">
      <circle r="18" fill="#FFF59D" opacity="0.6">
        <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle r="12" fill="#FFFF00" />
    </g>

    {/* Távoli dűnék */}
    <path d="M0 130 Q70 80 150 120 T240 100 L240 160 L0 160 Z" fill="#FFA726" opacity="0.5" />

    {/* Közeli dűne (Remegő effektussal a tetején) */}
    <path d="M-20 160 Q60 110 160 145 T280 120 L280 160 Z" fill="url(#dune_grad)" />

    {/* Pro Teve (Camel) - Anatómiailag felismerhetőbb */}
    <g transform="translate(80, 130) scale(0.9)">
      {/* Lábak */}
      <line x1="5" y1="0" x2="5" y2="12" stroke="#A1887F" strokeWidth="3" />
      <line x1="25" y1="0" x2="25" y2="12" stroke="#A1887F" strokeWidth="3" />
      {/* Test */}
      <path d="M0 0 L30 0 L32 -10 Q15 -30 0 -10 Z" fill="#A1887F" />
      {/* Púp (Hump) - Kiemelve a kérdéshez */}
      <path d="M8 -12 Q15 -25 22 -12" fill="#8D6E63" />
      {/* Nyak és Fej */}
      <path d="M30 -5 Q40 -5 42 -15 Q42 -22 35 -22" fill="#A1887F" />
      <circle cx="38" cy="-18" r="1" fill="black" />
    </g>

    {/* Kaktusz (Context) */}
    <g transform="translate(180, 135) scale(0.7)">
      <rect x="-3" y="-30" width="6" height="30" rx="3" fill="#2E7D32" />
      <path d="M3 -20 Q10 -20 10 -10" fill="none" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
      <path d="M-3 -15 Q-10 -15 -10 -5" fill="none" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Szálló porszemcsék */}
    <g fill="#E65100" opacity="0.2">
      <circle cx="40" cy="100" r="1" />
      <circle cx="120" cy="80" r="0.8" />
      <circle cx="200" cy="110" r="1.2" />
    </g>
  </svg>
);

const SVG_R4 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
    <defs>
      <linearGradient id="arctic_sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#90CAF9" />
        <stop offset="100%" stopColor="#E1F5FE" />
      </linearGradient>
      <linearGradient id="ice_grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#B3E5FC" />
      </linearGradient>
    </defs>

    {/* Sky */}
    <rect width="240" height="160" rx="20" fill="url(#arctic_sky)" />

    {/* Distant mountains */}
    <path d="M0 100 L40 60 L80 90 L120 50 L160 80 L200 55 L240 85 L240 160 L0 160 Z" fill="#B3E5FC" opacity="0.5" />

    {/* Ice shelf */}
    <path d="M0 120 Q60 110 120 125 T240 115 L240 160 L0 160 Z" fill="url(#ice_grad)" />
    <path d="M0 135 Q60 130 120 140 T240 132 L240 160 L0 160 Z" fill="white" opacity="0.8" />

    {/* Polar bear */}
    <g transform="translate(75, 115) scale(0.85)">
      {/* Body */}
      <ellipse cx="0" cy="0" rx="20" ry="12" fill="#F5F5F5" />
      {/* Head */}
      <circle cx="22" cy="-8" r="9" fill="#EEEEEE" />
      <circle cx="26" cy="-10" r="1.5" fill="black" />
      <circle cx="24" cy="-5" r="2" fill="#212121" />
      {/* Ears */}
      <circle cx="17" cy="-15" r="3" fill="#E0E0E0" />
      <circle cx="25" cy="-16" r="3" fill="#E0E0E0" />
      {/* Legs */}
      <rect x="-12" y="8" width="6" height="8" rx="2" fill="#EEEEEE" />
      <rect x="4" y="8" width="6" height="8" rx="2" fill="#EEEEEE" />
    </g>

    {/* Penguin */}
    <g transform="translate(170, 118) scale(0.7)">
      {/* Body */}
      <ellipse cx="0" cy="0" rx="10" ry="14" fill="#263238" />
      <ellipse cx="0" cy="2" rx="6" ry="10" fill="white" />
      {/* Head */}
      <circle cx="0" cy="-14" r="7" fill="#263238" />
      <circle cx="3" cy="-15" r="1.2" fill="white" />
      {/* Beak */}
      <path d="M5 -12 L10 -11 L5 -9 Z" fill="#FF8F00" />
      {/* Feet */}
      <path d="M-5 14 L-10 17 L-3 15 Z" fill="#FF8F00" />
      <path d="M5 14 L10 17 L3 15 Z" fill="#FF8F00" />
    </g>

    {/* Snowflakes */}
    <g fill="white" opacity="0.6">
      <circle cx="30" cy="30" r="2"><animate attributeName="cy" values="30;50" dur="6s" repeatCount="indefinite" /></circle>
      <circle cx="100" cy="20" r="1.5"><animate attributeName="cy" values="20;45" dur="5s" repeatCount="indefinite" /></circle>
      <circle cx="200" cy="25" r="2"><animate attributeName="cy" values="25;55" dur="7s" repeatCount="indefinite" /></circle>
      <circle cx="150" cy="15" r="1"><animate attributeName="cy" values="15;40" dur="4s" repeatCount="indefinite" /></circle>
    </g>
  </svg>
);

const SVG_R5 = () => (
  <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
    <defs>
      {/* Központi fény gradiens */}
      <radialGradient id="center_glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E0F7FA" />
      </radialGradient>
    </defs>

    {/* Alap háttér kártya (Világos szürke) */}
    <rect width="240" height="160" rx="20" fill="#ECEFF1" />

    {/* --- 4 ÉLŐHELY SZIGET --- */}

    {/* 1. Erdő Sziget (Bal Fent) */}
    <g transform="translate(60, 50)">
      <ellipse rx="50" ry="40" fill="#A5D6A7" opacity="0.8" />
      <text x="0" y="5" textAnchor="middle" fontSize="35">🌲</text>
      <path d="M-30 30 Q0 10 30 30" stroke="#2E7D32" strokeWidth="2" fill="none" opacity="0.5" />
    </g>

    {/* 2. Víz Sziget (Jobb Fent) */}
    <g transform="translate(180, 50)">
      <ellipse rx="50" ry="40" fill="#81D4FA" opacity="0.8" />
      <text x="0" y="5" textAnchor="middle" fontSize="35">🐟</text>
      <circle cx="20" cy="-15" r="3" fill="white" opacity="0.5" />
      <circle cx="25" cy="-5" r="2" fill="white" opacity="0.4" />
    </g>

    {/* 3. Sivatag Sziget (Bal Lent) */}
    <g transform="translate(60, 110)">
      <ellipse rx="50" ry="40" fill="#FFCC80" opacity="0.8" />
      <text x="0" y="5" textAnchor="middle" fontSize="35">🐪</text>
      <path d="M-20 -15 Q-15 -25 -10 -15 T0 -15" stroke="#E65100" strokeWidth="2" fill="none" opacity="0.4" />
    </g>

    {/* 4. Sarkvidék Sziget (Jobb Lent) */}
    <g transform="translate(180, 110)">
      <ellipse rx="50" ry="40" fill="#B3E5FC" opacity="0.8" />
      <text x="0" y="5" textAnchor="middle" fontSize="35">🧊</text>
      <path d="M-20 20 L20 20 L30 30 L-30 30 Z" fill="white" opacity="0.6" />
    </g>

    {/* --- KÖZPONTI ÖSSZEKÖTŐ ELEM --- */}
    
    {/* Pulzáló központi fény */}
    <circle cx="120" cy="80" r="25" fill="url(#center_glow)">
      <animate attributeName="r" values="25;28;25" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.7;1" dur="4s" repeatCount="indefinite" />
    </circle>
    
    {/* Összekötő vonalak/indák */}
    <g stroke="#90A4AE" strokeWidth="1" opacity="0.4" fill="none">
      <path d="M120 80 L60 50" />
      <path d="M120 80 L180 50" />
      <path d="M120 80 L60 110" />
      <path d="M120 80 L180 110" />
    </g>

    {/* Kis dekoratív részecskék */}
    <g fill="#90A4AE" opacity="0.3">
      <circle cx="120" cy="40" r="1.5" />
      <circle cx="120" cy="120" r="1.5" />
      <circle cx="40" cy="80" r="1.5" />
      <circle cx="200" cy="80" r="1.5" />
    </g>
  </svg>
);

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: SVG_R1, bulletKeys: ["r1_fact1"],
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" }] },
    { type: "mcq", infoTitle: "r2_title", infoText: "r2_text", svg: SVG_R2, bulletKeys: ["r2_fact1"],
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_a" }] },
    { type: "mcq", infoTitle: "r3_title", infoText: "r3_text", svg: SVG_R3, bulletKeys: ["r3_fact1"],
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_a" }] },
    { type: "mcq", infoTitle: "r4_title", infoText: "r4_text", svg: SVG_R4, bulletKeys: ["r4_fact1"],
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_a" }] },
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: SVG_R5,
      questions: [
        { question: "r5_q1_q", choices: ["r5_q1_a", "r5_q1_b", "r5_q1_c", "r5_q1_d"], answer: "r5_q1_a" },
        { question: "r5_q2_q", choices: ["r5_q2_a", "r5_q2_b", "r5_q2_c", "r5_q2_d"], answer: "r5_q2_a" },
      ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }

export default function HabitatExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
