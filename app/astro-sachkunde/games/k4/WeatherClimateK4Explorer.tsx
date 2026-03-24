"use client";
// WeatherClimateK4Explorer.tsx — Sachkunde Island i5: Weather & Climate (K4)
// Topics: 1) Éghajlati övezetek 2) Szélsőséges időjárás 3) Hogyan keletkezik a szél? 4) Évszakok és a Nap 5) Ernyőgyűjtés

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Földgömb övezetekkel */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="50" fill="#3B82F6" stroke="#94A3B8" strokeWidth="2" />
        {/* Sarki övezet (Hideg - Kék/Fehér) */}
        <path d="M -30,-40 A 50,50 0 0,1 30,-40 Z" fill="#F1F5F9" stroke="#BAE6FD" />
        <path d="M -30,40 A 50,50 0 0,0 30,40 Z" fill="#F1F5F9" stroke="#BAE6FD" />
        {/* Trópusi övezet (Forró - Sárga/Narancs az egyenlítőnél) */}
        <rect x="-48" y="-10" width="96" height="20" fill="#FBBF24" opacity="0.6" />
        <line x1="-50" y1="0" x2="50" y2="0" stroke="#D97706" strokeWidth="2" strokeDasharray="4 2" />
        {/* Mérsékelt övezet (Zöld) */}
        <path d="M -48,-10 A 50,50 0 0,1 -30,-40 L 30,-40 A 50,50 0 0,1 48,-10 Z" fill="#22C55E" opacity="0.4" />
        <path d="M -48,10 A 50,50 0 0,0 -30,40 L 30,40 A 50,50 0 0,0 48,10 Z" fill="#22C55E" opacity="0.4" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E2E8F0" rx="20" />
      {/* Tornádó/Vihar sziluett */}
      <g transform="translate(120, 70)">
        <path d="M -10,40 L 10,40 L 30,-30 L -30,-30 Z" fill="#94A3B8" />
        <path d="M -20,10 Q 0,0 20,10" fill="none" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
        <path d="M -25,-10 Q 0,-20 25,-10" fill="none" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
        {/* Villám */}
        <polygon points="40,-20 30,0 45,0 35,25" fill="#FDE047" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      {/* Meleg és hideg levegő áramlása */}
      <g transform="translate(120, 70)">
        {/* Piros nyíl (Meleg fel) */}
        <path d="M -40,30 L -40,-20" stroke="#EF4444" strokeWidth="6" markerEnd="url(#arrow)" />
        <circle cx="-40" cy="40" r="8" fill="#FCA5A5" opacity="0.5" />
        {/* Kék nyíl (Hideg le/be) */}
        <path d="M 40,-20 L 40,30" stroke="#3B82F6" strokeWidth="6" markerEnd="url(#arrow)" />
        <circle cx="40" cy="-30" r="8" fill="#BAE6FD" opacity="0.5" />
        {/* Szélvonalak */}
        <path d="M -20,0 Q 0,10 20,0" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5 5" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Nap és Föld tengelyferdesége */}
      <circle cx="0" cy="70" r="40" fill="#FBBF24" />
      <g transform="translate(160, 70) rotate(23)">
        <circle cx="0" cy="0" r="25" fill="#3B82F6" />
        <line x1="0" y1="-35" x2="0" y2="35" stroke="#FFFFFF" strokeWidth="2" /> {/* Tengely */}
        <path d="M -25,0 A 25,25 0 0,0 25,0" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#DBEAFE" rx="20" />
      {/* Esős háttér */}
      <g stroke="#60A5FA" strokeWidth="2" strokeLinecap="round">
        <line x1="20" y1="20" x2="15" y2="40" />
        <line x1="60" y1="10" x2="55" y2="30" />
        <line x1="100" y1="30" x2="95" y2="50" />
        <line x1="180" y1="15" x2="175" y2="35" />
        <line x1="220" y1="25" x2="215" y2="45" />
      </g>
      {/* A tap-count gombok ernyőket (☂️) tesznek majd a képre! */}
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Időjárás és Éghajlat (K4)",
    // T1: Övezetek
    t1_title: "Éghajlati övezetek",
    t1_text: "A Földet három nagy éghajlati övezetre osztjuk a Nap melege alapján: a forró trópusi, a változatos mérsékelt és a fagyos sarki övezetre.",
    t1_b1: "Az Egyenlítőnél a legforróbb az éghajlat (Trópusi).",
    t1_b2: "Mi a mérsékelt övezetben élünk, ahol 4 évszak van.",
    t1_b3: "A sarkvidékeken egész évben hideg van és hó borítja a tájat.",
    t1_inst: "Melyik övezetre mi jellemző? Párosítsd össze!",
    t1_l1: "Trópusi", t1_r1: "Forróság és sok eső",
    t1_l2: "Mérsékelt", t1_r2: "Négy különböző évszak",
    t1_l3: "Sarki", t1_r3: "Állandó fagy és jég",
    t1_q: "Melyik éghajlati övezetben élünk mi itt, Európa szívében?",
    t1_q_a: "A mérsékelt övezetben", t1_q_b: "A trópusi övezetben", t1_q_c: "A sarki övezetben", t1_q_d: "A Holdon",

    // T2: Szélsőségek
    t2_title: "Amikor az idő megvadul",
    t2_text: "A szélsőséges időjárás nagy károkat okozhat. Ilyenek a hurkánok, a tornádók vagy a hatalmas aszályok.",
    t2_b1: "A tornádó egy tölcsér alakú, forgó szélvihar.",
    t2_b2: "Az aszály akkor van, ha nagyon hosszú ideig nem esik eső.",
    t2_b3: "A villámárvíz hirtelen, nagy mennyiségű esőtől alakul ki.",
    t2_inst: "Válogasd szét az időjárási jelenségeket!",
    t2_bucket_szelsoseg: "Szélsőséges (Veszélyes)",
    t2_bucket_normal: "Normál (Átlagos)",
    t2_item_s1: "Hurrikán", t2_item_s2: "Tornádó",
    t2_item_n1: "Lágy szellő", t2_item_n2: "Szemerkélő eső",
    t1_q_2: "Hogyan hívjuk azt a jelenséget, amikor hónapokig nem esik eső és kiszárad a föld?",
    t1_q_2_a: "Aszály", t1_q_2_b: "Árvíz", t1_q_2_c: "Hóvihar", t1_q_2_d: "Szivárvány",

    // T3: Szél keletkezése (Highlight-text) - Cél: [2, 4]
    t3_title: "Miért fúj a szél?",
    t3_text: "A szél valójában a levegő mozgása. Akkor keletkezik, amikor a Nap nem egyformán melegíti fel a földfelszínt.",
    t3_b1: "A meleg levegő könnyebb, ezért felfelé száll.",
    t3_b2: "A helyére hidegebb levegő áramlik: ez maga a szél.",
    t3_b3: "A szél erejét a meteorológusok mérik.",
    t3_inst: "Keresd meg és jelöld meg a mondatban, mi mozog és mi keletkezik belőle!",
    t3_tok0: "A", t3_tok1: "mozgó", t3_tok2: "levegő", t3_tok3: "valójában", t3_tok4: "szél,", t3_tok5: "ami", t3_tok6: "fúj.",
    t3_q: "Hogyan keletkezik a szél?",
    t3_q_a: "A levegő mozgása miatt", t3_q_b: "A fák rázzák az ágaikat", t3_q_c: "A felhők fújják a levegőt", t3_q_d: "A repülők miatt",

    // T4: Évszakok
    t4_title: "A tengely titka",
    t4_text: "Az évszakok azért váltakoznak, mert a Föld tengelye ferde, miközben kerüli a Napot. Így hol az északi, hol a déli féltekét éri több fény.",
    t4_b1: "Amikor felénk dől a Föld, nálunk nyár van.",
    t4_b2: "Amikor elfelé dőlünk a Naptól, nálunk tél van.",
    t4_b3: "A Föld egy év alatt kerüli meg a Napot.",
    t4_inst: "Tedd sorba az évszakokat, tavasztól indulva!",
    t4_w1: "Tavasz", t4_w2: "Nyár", t4_w3: "Ősz", t4_w4: "Tél",
    t4_q: "Mennyi idő alatt kerüli meg a Föld a Napot?",
    t4_q_a: "Egy év alatt", t4_q_b: "Egy nap alatt", t4_q_c: "Egy hónap alatt", t4_q_d: "Egy óra alatt",

    // T5: Ernyők (Tap-count)
    t5_title: "Felhőszakadás",
    t5_text: "Hirtelen nagy eső kerekedett! Mindenkinek szüksége van egy ernyőre, hogy ne ázzon bőrig.",
    t5_b1: "A légnyomás mérése segít megjósolni az esőt.",
    t5_b2: "Az eső után néha gyönyörű szivárványt láthatunk.",
    t5_b3: "Gyűjtsd össze az ernyőket a képen!",
    t5_inst: "Szakad az eső! Keresd meg és bökj rá az 5 darab ernyőre (☂️) a képen!",
    t5_q: "Mit jelent a meteorológiában a csapadék szó?",
    t5_q_a: "Minden vizet, ami az égből hullik (eső, hó, jég)", t5_q_b: "Csak a napsütést", t5_q_c: "A szél irányát", t5_q_d: "A tenger hullámait",
  },
  en: {
    explorer_title: "Weather & Climate (K4)",
    t1_title: "Climate Zones", t1_text: "Earth is divided into three major climate zones: the hot tropical, the diverse temperate, and the freezing polar zone.",
    t1_b1: "The climate is hottest near the Equator (Tropical).", t1_b2: "We live in the temperate zone, which has 4 seasons.", t1_b3: "The poles are cold all year round and covered in snow.",
    t1_inst: "Match the feature to the zone!",
    t1_l1: "Tropical", t1_r1: "Heat and lots of rain",
    t1_l2: "Temperate", t1_r2: "Four distinct seasons",
    t1_l3: "Polar", t1_r3: "Constant frost and ice",
    t1_q: "In which climate zone do we live here in the heart of Europe?",
    t1_q_a: "Temperate zone", t1_q_b: "Tropical zone", t1_q_c: "Polar zone", t1_q_d: "On the Moon",

    t2_title: "Extreme Weather", t2_text: "Extreme weather can cause great damage, such as hurricanes, tornadoes, or severe droughts.",
    t2_b1: "A tornado is a funnel-shaped, rotating windstorm.", t2_b2: "Drought occurs when it doesn't rain for a very long time.", t2_b3: "Flash floods are caused by sudden, heavy rain.",
    t2_inst: "Sort the weather phenomena!",
    t2_bucket_szelsoseg: "Extreme (Dangerous)",
    t2_bucket_normal: "Normal (Average)",
    t2_item_s1: "Hurricane", t2_item_s2: "Tornado",
    t2_item_n1: "Light breeze", t2_item_n2: "Drizzle",
    t1_q_2: "What is it called when no rain falls for months and the land dries out?",
    t1_q_2_a: "Drought", t1_q_2_b: "Flood", t1_q_2_c: "Blizzard", t1_q_2_d: "Rainbow",

    // Cél: [2, 4] -> air, wind
    t3_title: "Why Does Wind Blow?", t3_text: "Wind is actually the movement of air. It happens when the Sun heats the Earth unevenly.",
    t3_b1: "Warm air is lighter and rises upwards.", t3_b2: "Colder air flows in to take its place: this is the wind.", t3_b3: "Meteorologists measure wind strength.",
    t3_inst: "Find and mark the words air and wind in the sentence!",
    t3_tok0: "The", t3_tok1: "moving", t3_tok2: "air", t3_tok3: "is", t3_tok4: "wind", t3_tok5: "that", t3_tok6: "blows.",
    t3_q: "How is wind created?",
    t3_q_a: "By the movement of air", t3_q_b: "Trees shaking branches", t3_q_c: "Clouds blowing air", t3_q_d: "By airplanes",

    t4_title: "Secret of the Axis", t4_text: "Seasons change because Earth's axis is tilted as it orbits the Sun. Different parts get more light at different times.",
    t4_b1: "When Earth tilts toward us, it is summer.", t4_b2: "When we tilt away from the Sun, it is winter.", t4_b3: "Earth orbits the Sun once a year.",
    t4_inst: "Order the seasons starting from spring!",
    t4_w1: "Spring", t4_w2: "Summer", t4_w3: "Autumn", t4_w4: "Winter",
    t4_q: "How long does it take for Earth to orbit the Sun?",
    t4_q_a: "One year", t4_q_b: "One day", t4_q_c: "One month", t4_q_d: "One hour",

    t5_title: "Downpour", t5_text: "Suddenly it's raining hard! Everyone needs an umbrella to stay dry.",
    t5_b1: "Measuring air pressure helps predict rain.", t5_b2: "Sometimes a beautiful rainbow appears after rain.", t5_b3: "Collect the umbrellas in the picture!",
    t5_inst: "It's pouring! Find and tap the 5 umbrellas (☂️) in the picture!",
    t5_q: "What does precipitation mean in meteorology?",
    t5_q_a: "Any water falling from the sky (rain, snow, ice)", t5_q_b: "Only sunshine", t5_q_c: "Wind direction", t5_q_d: "Sea waves",
  },
  de: {
    explorer_title: "Wetter & Klima (K4)",
    t1_title: "Klimazonen", t1_text: "Die Erde ist in drei Klimazonen unterteilt: die heiße tropische, die gemäßigte und die eisige polare Zone.",
    t1_b1: "Am Äquator ist es am heißesten (Tropen).", t1_b2: "Wir leben in der gemäßigten Zone mit 4 Jahreszeiten.", t1_b3: "An den Polen ist es das ganze Jahr über kalt.",
    t1_inst: "Verbinde das Merkmal mit der Zone!",
    t1_l1: "Tropisch", t1_r1: "Hitze und viel Regen",
    t1_l2: "Gemäßigt", t1_r2: "Vier verschiedene Jahreszeiten",
    t1_l3: "Polar", t1_r3: "Ewiger Frost und Eis",
    t1_q: "In welcher Klimazone leben wir hier in Europa?",
    t1_q_a: "In der gemäßigten Zone", t1_q_b: "In der tropischen Zone", t1_q_c: "In der polaren Zone", t1_q_d: "Auf dem Mond",

    t2_title: "Extremwetter", t2_text: "Extremes Wetter kann große Schäden anrichten, wie Hurrikane, Tornados oder Dürren.",
    t2_b1: "Ein Tornado ist ein wirbelnder Sturm.", t2_b2: "Dürre herrscht, wenn es lange nicht regnet.", t2_b3: "Sturzfluten entstehen durch plötzlichen Starkregen.",
    t2_inst: "Sortiere die Wetterphänomene!",
    t2_bucket_szelsoseg: "Extrem (Gefährlich)",
    t2_bucket_normal: "Normal",
    t2_item_s1: "Hurrikan", t2_item_s2: "Tornado",
    t2_item_n1: "Leichte Brise", t2_item_n2: "Nieselregen",
    t1_q_2: "Wie nennt man es, wenn monatelang kein Regen fällt?",
    t1_q_2_a: "Dürre", t1_q_2_b: "Flut", t1_q_2_c: "Schneesturm", t1_q_2_d: "Regenbogen",

    // Cél: [2, 4] -> Luft, Wind
    t3_title: "Warum weht der Wind?", t3_text: "Wind ist die Bewegung von Luft. Er entsteht durch ungleichmäßige Erwärmung der Erde.",
    t3_b1: "Warme Luft ist leichter und steigt auf.", t3_b2: "Kältere Luft strömt nach: Das ist der Wind.", t3_b3: "Die Windstärke wird gemessen.",
    t3_inst: "Markiere die Wörter Luft und Wind im Satz!",
    t3_tok0: "Die", t3_tok1: "bewegte", t3_tok2: "Luft", t3_tok3: "erzeugt", t3_tok4: "Wind", t3_tok5: "beim", t3_tok6: "Blasen.",
    t3_q: "Wie entsteht Wind?",
    t3_q_a: "Durch Luftbewegung", t3_q_b: "Bäume wackeln", t3_q_c: "Wolken pusten", t3_q_d: "Durch Flugzeuge",

    t4_title: "Das Geheimnis der Achse", t4_text: "Jahreszeiten entstehen durch die Neigung der Erdachse. So bekommt mal der Norden, mal der Süden mehr Sonne.",
    t4_b1: "Neigt sich die Erde zur Sonne, haben wir Sommer.", t4_b2: "Neigen wir uns weg, haben wir Winter.", t4_b3: "Die Erde braucht ein Jahr um die Sonne.",
    t4_inst: "Bringe die Jahreszeiten in die richtige Reihenfolge!",
    t4_w1: "Frühling", t4_w2: "Sommer", t4_w3: "Herbst", t4_w4: "Winter",
    t4_q: "Wie lange braucht die Erde für eine Runde um die Sonne?",
    t4_q_a: "Ein Jahr", t4_q_b: "Einen Tag", t4_q_c: "Einen Monat", t4_q_d: "Eine Stunde",

    t5_title: "Wolkenbruch", t5_text: "Es regnet in Strömen! Jeder braucht einen Regenschirm.",
    t5_b1: "Luftdruckmessung hilft bei der Vorhersage.", t5_b2: "Nach dem Regen kommt oft ein Regenbogen.", t5_b3: "Sammle die Regenschirme!",
    t5_inst: "Es gießt! Finde und tippe auf die 5 Regenschirme (☂️) im Bild!",
    t5_q: "Was bedeutet Niederschlag in der Meteorologie?",
    t5_q_a: "Alles Wasser aus dem Himmel (Regen, Schnee, Hagel)", t5_q_b: "Nur Sonnenschein", t5_q_c: "Windrichtung", t5_q_d: "Meereswellen",
  },
  ro: {
    explorer_title: "Vremea și Clima (K4)",
    t1_title: "Zonele climatice", t1_text: "Pământul este împărțit în trei mari zone climatice: zona caldă tropicală, zona temperată și zona rece polară.",
    t1_b1: "Clima este cea mai caldă la Ecuator (Tropicală).", t1_b2: "Noi trăim în zona temperată, unde sunt 4 anotimpuri.", t1_b3: "La poli este frig tot anul și multă zăpadă.",
    t1_inst: "Potrivește zona cu descrierea sa!",
    t1_l1: "Tropicală", t1_r1: "Căldură și ploi multe",
    t1_l2: "Temperată", t1_r2: "Patru anotimpuri diferite",
    t1_l3: "Polară", t1_r3: "Îngheț și gheață permanentă",
    t1_q: "În ce zonă climatică trăim noi aici, în Europa?",
    t1_q_a: "În zona temperată", t1_q_b: "În zona tropicală", t1_q_c: "În zona polară", t1_q_d: "Pe Lună",

    t2_title: "Fenomene extreme", t2_text: "Vremea extremă poate provoca daune mari, cum ar fi uraganele, tornadele sau secetele severe.",
    t2_b1: "O tornadă este o furtună rotativă sub formă de pâlnie.", t2_b2: "Seceta apare când nu plouă o perioadă lungă de timp.", t2_b3: "Inundațiile rapide sunt cauzate de ploi bruște și torențiale.",
    t2_inst: "Sortează fenomenele meteo!",
    t2_bucket_szelsoseg: "Extreme (Periculoase)",
    t2_bucket_normal: "Normale",
    t2_item_s1: "Uragan", t2_item_s2: "Tornadă",
    t2_item_n1: "Briză ușoară", t2_item_n2: "Ploaie măruntă",
    t1_q_2: "Cum se numește fenomenul când nu plouă luni de zile?",
    t1_q_2_a: "Secetă", t1_q_2_b: "Inundație", t1_q_2_c: "Viscol", t1_q_2_d: "Curcubeu",

    // Cél: [2, 4] -> aer, vânt
    t3_title: "De ce bate vântul?", t3_text: "Vântul este de fapt mișcarea aerului. Apare când Soarele nu încălzește uniform suprafața Pământului.",
    t3_b1: "Aerul cald este mai ușor și se ridică.", t3_b2: "Aerul mai rece ocupă locul acestuia: acesta este vântul.", t3_b3: "Meteorologii măsoară puterea vântului.",
    t3_inst: "Găsește și marchează cuvintele aer și vânt în propoziție!",
    t3_tok0: "Acest", t3_tok1: "mișcat", t3_tok2: "aer", t3_tok3: "devine", t3_tok4: "vânt", t3_tok5: "care", t3_tok6: "bate.",
    t3_q: "Cum se formează vântul?",
    t3_q_a: "Prin mișcarea aerului", t3_q_b: "Copacii își mișcă ramurile", t3_q_c: "Norii suflă aerul", t3_q_d: "Din cauza avioanelor",

    t4_title: "Secretul axei", t4_text: "Anotimpurile se schimbă deoarece axa Pământului este înclinată în timp ce se rotește în jurul Soarelui.",
    t4_b1: "Când Pământul este înclinat spre Soare, este vară.", t4_b2: "Când ne înclinăm invers, avem iarnă.", t4_b3: "Pământul se rotește în jurul Soarelui într-un an.",
    t4_inst: "Pune anotimpurile în ordine, începând cu primăvara!",
    t4_w1: "Primăvară", t4_w2: "Vară", t4_w3: "Toamnă", t4_w4: "Iarnă",
    t4_q: "În cât timp se rotește Pământul în jurul Soarelui?",
    t4_q_a: "Într-un an", t4_q_b: "Într-o zi", t4_q_c: "Într-o lună", t4_q_d: "Într-o oră",

    t5_title: "Ruptură de nori", t5_text: "A început o ploaie torențială! Toată lumea are nevoie de o umbrelă.",
    t5_b1: "Măsurarea presiunii aerului ajută la prognoză.", t5_b2: "După ploaie apare uneori curcubeul.", t5_b3: "Adună umbrelele din imagine!",
    t5_inst: "Plouă tare! Găsește și apasă pe cele 5 umbrele (☂️) din imagine!",
    t5_q: "Ce înseamnă precipitațiile în meteorologie?",
    t5_q_a: "Orice apă care cade din cer (ploaie, zăpadă, gheață)", t5_q_b: "Doar soarele", t5_q_c: "Direcția vântului", t5_q_d: "Valurile mării",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b3",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "szelsoseg", label: "t2_bucket_szelsoseg" },
        { id: "normal", label: "t2_bucket_normal" },
      ],
      items: [
        { text: "t2_item_s1", bucketId: "szelsoseg" },
        { text: "t2_item_n1", bucketId: "normal" },
        { text: "t2_item_s2", bucketId: "szelsoseg" },
        { text: "t2_item_n2", bucketId: "normal" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
    },
    quiz: {
      question: "t1_q_2",
      choices: ["t1_q_2_a", "t1_q_2_b", "t1_q_2_c", "t1_q_2_d"],
      answer: "t1_q_2_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [2, 4],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b3",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "☂️", count: 5 },
      instruction: "t5_inst",
      hint1: "t5_b2",
      hint2: "t5_b3",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🌡️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WeatherClimateK4Explorer = memo(function WeatherClimateK4Explorer({
  color = "#60A5FA", // Blue-400 az időjáráshoz
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={4} 
      explorerId="sachkunde_k4_weather_climate" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default WeatherClimateK4Explorer;
