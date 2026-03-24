"use client";
// WeatherClimateExplorer.tsx — Sachkunde Island i5: Weather & Climate (K3)
// Topics: 1) Időjárási eszközök 2) Hőmérséklet 3) Időjárás vs Éghajlat 4) Vízkörzés részletesen 5) Keresd a villámokat!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
import { WeatherTypesSvg, ThermometerSvg } from "@/app/astro-sachkunde/svg/k1/NatureWeatherSvg";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Földgömb középen */}
      <circle cx="120" cy="70" r="40" fill="#3B82F6" />
      <path d="M 90,50 Q 110,30 130,50 T 140,80 Q 120,100 100,80 Z" fill="#22C55E" />
      <circle cx="100" cy="90" r="10" fill="#22C55E" />
      <circle cx="140" cy="40" r="8" fill="#22C55E" />
      
      {/* Forró (Sivatagi/Trópusi éghajlat) - Bal oldal */}
      <g transform="translate(40, 40)">
        <circle cx="0" cy="0" r="15" fill="#F59E0B" />
        <line x1="0" y1="-20" x2="0" y2="-25" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        <line x1="0" y1="20" x2="0" y2="25" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        <line x1="-20" y1="0" x2="-25" y2="0" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="0" x2="25" y2="0" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      </g>
      
      {/* Hideg (Sarki éghajlat) - Jobb oldal */}
      <g transform="translate(200, 40)">
        <path d="M 0,-15 L 0,15 M -15,0 L 15,0 M -10,-10 L 10,10 M -10,10 L 10,-10" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFEFF" rx="20" />
      <g transform="translate(120, 75)">
        {/* Víz (Párolgás) */}
        <path d="M -80,25 Q -40,15 0,25 T 80,25 L 80,65 L -80,65 Z" fill="#0EA5E9" />
        <path d="M -40,15 Q -40,-5 -20,-15" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="4 4" markerEnd="url(#arrow)" />
        <path d="M 0,15 Q 0,-5 20,-15" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="4 4" markerEnd="url(#arrow)" />
        
        {/* Felhő (Kicsapódás / Kondenzáció) */}
        <path d="M -20,-35 A 15,15 0 0,0 -35,-20 A 15,15 0 0,0 -5,-5 L 25,-5 A 15,15 0 0,0 35,-30 A 20,20 0 0,0 -20,-35 Z" fill="#94A3B8" />
        
        {/* Eső (Csapadék) */}
        <line x1="50" y1="-10" x2="45" y2="10" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        <line x1="65" y1="-5" x2="60" y2="15" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        <path d="M 45,15 Q 35,25 20,25" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="4 4" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Viharos háttér (Sötét felhők) */}
      <circle cx="50" cy="40" r="30" fill="#334155" />
      <circle cx="120" cy="30" r="40" fill="#475569" />
      <circle cx="190" cy="50" r="35" fill="#334155" />
      
      {/* A villámokat (⚡) a játékmotor teszi rá gombként, ez csak a háttér. */}
      <path d="M 0,100 Q 60,80 120,110 T 240,90 L 240,140 L 0,140 Z" fill="#0F172A" />
      <path d="M 0,120 Q 80,100 160,130 T 240,110 L 240,140 L 0,140 Z" fill="#020617" opacity="0.6" />
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Időjárás és Éghajlat",
    // T1: Időjárási eszközök
    t1_title: "A meteorológusok eszközei",
    t1_text: "A meteorológusok a tudósok, akik az időjárást vizsgálják. Különféle műszereket használnak a mérésekhez.",
    t1_b1: "A hőmérő a levegő hőmérsékletét méri.",
    t1_b2: "A szélirányjelző (szélkakas) megmutatja, merről fúj a szél.",
    t1_b3: "A csapadékmérő összegyűjti és megméri az esőt.",
    t1_inst: "Párosítsd a műszert azzal, amit mér!",
    t1_l1: "Hőmérő", t1_r1: "Hőmérséklet (Hideg/Meleg)",
    t1_l2: "Szélkakas", t1_r2: "A szél iránya",
    t1_l3: "Csapadékmérő", t1_r3: "Az eső mennyisége",
    t1_q: "Mit mér a hőmérő?",
    t1_q_a: "A levegő hőmérsékletét", t1_q_b: "A szél sebességét", t1_q_c: "A felhők magasságát", t1_q_d: "Az esőcseppek méretét",

    // T2: Hőmérséklet
    t2_title: "Fagypont alatt és felett",
    t2_text: "A hőmérsékletet Celsius-fokban (°C) mérjük. Ha a hőmérséklet 0 °C alá esik, a víz megfagy!",
    t2_b1: "0 °C alatt fagy van (hó és jég).",
    t2_b2: "Nyáron gyakran van 25-30 °C, ami kellemes meleg.",
    t2_b3: "A folyadék a hőmérőben melegben kitágul és felemelkedik.",
    t2_inst: "Hideg vagy Meleg? Válogasd szét a dolgokat!",
    t2_bucket_hideg: "Hideg (< 0 °C)",
    t2_bucket_meleg: "Meleg (> 20 °C)",
    t2_item_h1: "Hóember", t2_item_h2: "Jégcsap",
    t2_item_m1: "Strandolás", t2_item_m2: "Rövidnadrág",
    t2_q: "Hány Celsius-foknál fagy meg a víz?",
    t2_q_a: "0 °C-nál", t2_q_b: "100 °C-nál", t2_q_c: "50 °C-nál", t2_q_d: "10 °C-nál",

    // T3: Időjárás vs Éghajlat (Highlight-text) - Cél: [1, 6] -> időjárás, éghajlat
    t3_title: "Időjárás vagy Éghajlat?",
    t3_text: "Sokan összekeverik ezt a kettőt. Az időjárás az, ami éppen most van kint (pl. esik). Az éghajlat az, amilyen az időjárás általában, hosszú évek alatt egy adott helyen.",
    t3_b1: "Az időjárás óráról órára megváltozhat.",
    t3_b2: "Az éghajlat (pl. sivatagi vagy sarki) nagyon lassan változik.",
    t3_b3: "A Földön sokféle éghajlat található.",
    t3_inst: "Keresd meg és jelöld meg a MONDATBAN az időjárás és az éghajlat szavakat!",
    t3_tok0: "Az", t3_tok1: "időjárás", t3_tok2: "gyorsan", t3_tok3: "változik,", t3_tok4: "de", t3_tok5: "az", t3_tok6: "éghajlat", t3_tok7: "állandó.",
    t3_q: "Mi az éghajlat?",
    t3_q_a: "Az időjárás átlaga hosszú évek alatt", t3_q_b: "A mai eső", t3_q_c: "A szél sebessége", t3_q_d: "A felhők színe",

    // T4: Vízkörzés részletesen
    t4_title: "A víz utazása",
    t4_text: "Tanultuk a vízkörzést, de most nézzük meg a tudományos neveket is!",
    t4_b1: "Párolgás: a Nap felmelegíti a vizet, ami gőzzé válik.",
    t4_b2: "Kicsapódás (Kondenzáció): a gőz lehűl és felhő lesz belőle.",
    t4_b3: "Csapadék: az eső vagy a hó visszahullik a földre.",
    t4_inst: "Tedd tudományos sorrendbe a vízkörzés lépéseit!",
    t4_w1: "Párolgás", t4_w2: "Kicsapódás (Felhő)", t4_w3: "Csapadék (Eső)", t4_w4: "Vízgyűjtés (Tenger)",
    t4_q: "Hogy hívják azt a folyamatot, amikor a vízgőz lehűl és felhő lesz belőle?",
    t4_q_a: "Kicsapódás (Kondenzáció)", t4_q_b: "Párolgás", t4_q_c: "Olvadás", t4_q_d: "Fagyás",

    // T5: Keresd a villámokat! (Tap-count)
    t5_title: "Vihar a láthatáron",
    t5_text: "Amikor a meleg és a hideg levegő gyorsan találkozik, viharok és villámok alakulhatnak ki az égen.",
    t5_b1: "A villám elektromos kisülés.",
    t5_b2: "Villámláskor soha ne állj magas fa alá!",
    t5_b3: "Keress menedéket egy épületben.",
    t5_inst: "Vihar közeleg! Keresd meg és bökj rá az 5 villámra az égen!",
    t5_q: "Mit NE csinálj, ha villámlik?",
    t5_q_a: "Ne állj be egy magas fa alá", t5_q_b: "Ne menj be a házba", t5_q_c: "Ne vegyél fel cipőt", t5_q_d: "Ne olvass könyvet",
  },
  en: {
    explorer_title: "Weather & Climate",
    t1_title: "Tools of Meteorologists", t1_text: "Meteorologists are scientists who study the weather. They use different instruments for measurements.",
    t1_b1: "A thermometer measures the air temperature.", t1_b2: "A wind vane shows the direction of the wind.", t1_b3: "A rain gauge collects and measures rain.",
    t1_inst: "Match the instrument with what it measures!",
    t1_l1: "Thermometer", t1_r1: "Temperature (Hot/Cold)",
    t1_l2: "Wind vane", t1_r2: "Wind direction",
    t1_l3: "Rain gauge", t1_r3: "Amount of rain",
    t1_q: "What does a thermometer measure?",
    t1_q_a: "Air temperature", t1_q_b: "Wind speed", t1_q_c: "Cloud height", t1_q_d: "Raindrop size",

    t2_title: "Above and Below Freezing", t2_text: "We measure temperature in degrees Celsius (°C). If the temperature drops below 0 °C, water freezes!",
    t2_b1: "Below 0 °C it is freezing (snow and ice).", t2_b2: "In summer it is often 25-30 °C, which is nice and warm.", t2_b3: "The liquid in a thermometer expands and rises when it's hot.",
    t2_inst: "Cold or Hot? Sort the items!",
    t2_bucket_hideg: "Cold (< 0 °C)",
    t2_bucket_meleg: "Hot (> 20 °C)",
    t2_item_h1: "Snowman", t2_item_h2: "Icicle",
    t2_item_m1: "Swimming at the beach", t2_item_m2: "Shorts",
    t2_q: "At what Celsius temperature does water freeze?",
    t2_q_a: "0 °C", t2_q_b: "100 °C", t2_q_c: "50 °C", t2_q_d: "10 °C",

    // Cél: [1, 6] -> weather, climate
    t3_title: "Weather or Climate?", t3_text: "Many people confuse these two. Weather is what it's doing outside right now. Climate is what the weather is usually like over many years.",
    t3_b1: "Weather can change from hour to hour.", t3_b2: "Climate (like desert or polar) changes very slowly.", t3_b3: "There are many different climates on Earth.",
    t3_inst: "Find and mark the words weather and climate in the sentence!",
    t3_tok0: "The", t3_tok1: "weather", t3_tok2: "changes", t3_tok3: "fast,", t3_tok4: "but", t3_tok5: "the", t3_tok6: "climate", t3_tok7: "stays.",
    t3_q: "What is climate?",
    t3_q_a: "The average weather over many years", t3_q_b: "Today's rain", t3_q_c: "Wind speed", t3_q_d: "The color of clouds",

    t4_title: "The Water Cycle in Detail", t4_text: "We learned the water cycle, but let's look at the scientific names!",
    t4_b1: "Evaporation: The Sun heats the water, turning it into vapor.", t4_b2: "Condensation: Vapor cools down and becomes a cloud.", t4_b3: "Precipitation: Rain or snow falls back to the ground.",
    t4_inst: "Put the scientific steps of the water cycle in order!",
    t4_w1: "Evaporation", t4_w2: "Condensation (Cloud)", t4_w3: "Precipitation (Rain)", t4_w4: "Collection (Sea)",
    t4_q: "What is the process called when water vapor cools and becomes a cloud?",
    t4_q_a: "Condensation", t4_q_b: "Evaporation", t4_q_c: "Melting", t4_q_d: "Freezing",

    t5_title: "Storm on the Horizon", t5_text: "When warm and cold air meet quickly, storms and lightning can form in the sky.",
    t5_b1: "Lightning is an electrical discharge.", t5_b2: "During a thunderstorm, never stand under a tall tree!", t5_b3: "Seek shelter inside a building.",
    t5_inst: "A storm is coming! Find and tap the 5 lightning bolts in the sky!",
    t5_q: "What should you NOT do during a thunderstorm?",
    t5_q_a: "Do not stand under a tall tree", t5_q_b: "Do not go inside the house", t5_q_c: "Do not put on shoes", t5_q_d: "Do not read a book",
  },
  de: {
    explorer_title: "Wetter & Klima",
    t1_title: "Werkzeuge der Meteorologen", t1_text: "Meteorologen sind Wissenschaftler, die das Wetter studieren. Sie benutzen verschiedene Instrumente.",
    t1_b1: "Das Thermometer misst die Lufttemperatur.", t1_b2: "Die Wetterfahne zeigt die Windrichtung.", t1_b3: "Der Regenmesser sammelt und misst den Regen.",
    t1_inst: "Verbinde das Instrument mit dem, was es misst!",
    t1_l1: "Thermometer", t1_r1: "Temperatur (Kalt/Warm)",
    t1_l2: "Wetterfahne", t1_r2: "Windrichtung",
    t1_l3: "Regenmesser", t1_r3: "Regenmenge",
    t1_q: "Was misst das Thermometer?",
    t1_q_a: "Die Lufttemperatur", t1_q_b: "Die Windgeschwindigkeit", t1_q_c: "Die Wolkenhöhe", t1_q_d: "Die Regentropfengröße",

    t2_title: "Über und unter Null", t2_text: "Wir messen die Temperatur in Grad Celsius (°C). Wenn die Temperatur unter 0 °C fällt, gefriert Wasser!",
    t2_b1: "Unter 0 °C gibt es Frost (Schnee und Eis).", t2_b2: "Im Sommer ist es oft 25-30 °C, was angenehm warm ist.", t2_b3: "Die Flüssigkeit im Thermometer steigt bei Hitze.",
    t2_inst: "Kalt oder Warm? Sortiere die Dinge!",
    t2_bucket_hideg: "Kalt (< 0 °C)",
    t2_bucket_meleg: "Warm (> 20 °C)",
    t2_item_h1: "Schneemann", t2_item_h2: "Eiszapfen",
    t2_item_m1: "Baden am Strand", t2_item_m2: "Kurze Hosen",
    t2_q: "Bei wie viel Grad Celsius gefriert Wasser?",
    t2_q_a: "Bei 0 °C", t2_q_b: "Bei 100 °C", t2_q_c: "Bei 50 °C", t2_q_d: "Bei 10 °C",

    // Cél: [1, 6] -> Wetter, Klima
    t3_title: "Wetter oder Klima?", t3_text: "Viele verwechseln das. Das Wetter ist das, was jetzt gerade draußen passiert. Das Klima ist das, wie das Wetter über viele Jahre meistens ist.",
    t3_b1: "Das Wetter kann sich stündlich ändern.", t3_b2: "Das Klima ändert sich nur sehr langsam.", t3_b3: "Es gibt viele verschiedene Klimate auf der Erde.",
    t3_inst: "Finde und markiere die Worte Wetter und Klima im Satz!",
    t3_tok0: "Das", t3_tok1: "Wetter", t3_tok2: "wechselt", t3_tok3: "schnell,", t3_tok4: "aber", t3_tok5: "das", t3_tok6: "Klima", t3_tok7: "bleibt.",
    t3_q: "Was ist das Klima?",
    t3_q_a: "Das durchschnittliche Wetter über viele Jahre", t3_q_b: "Der heutige Regen", t3_q_c: "Die Windgeschwindigkeit", t3_q_d: "Die Farbe der Wolken",

    t4_title: "Der Wasserkreislauf im Detail", t4_text: "Wir kennen den Wasserkreislauf, aber schauen wir uns die wissenschaftlichen Namen an!",
    t4_b1: "Verdunstung: Die Sonne erhitzt das Wasser.", t4_b2: "Kondensation: Wasserdampf kühlt ab und wird zur Wolke.", t4_b3: "Niederschlag: Regen oder Schnee fallen.",
    t4_inst: "Bringe die wissenschaftlichen Schritte in die richtige Reihenfolge!",
    t4_w1: "Verdunstung", t4_w2: "Kondensation (Wolke)", t4_w3: "Niederschlag (Regen)", t4_w4: "Sammlung (Meer)",
    t4_q: "Wie nennt man den Vorgang, wenn Wasserdampf abkühlt und zur Wolke wird?",
    t4_q_a: "Kondensation", t4_q_b: "Verdunstung", t4_q_c: "Schmelzen", t4_q_d: "Gefrieren",

    t5_title: "Gewitter am Horizont", t5_text: "Wenn warme und kalte Luft schnell aufeinandertreffen, können Gewitter und Blitze entstehen.",
    t5_b1: "Ein Blitz ist eine elektrische Entladung.", t5_b2: "Stelle dich bei einem Gewitter nie unter einen hohen Baum!", t5_b3: "Suche Schutz in einem Gebäude.",
    t5_inst: "Ein Sturm kommt! Finde und tippe auf die 5 Blitze am Himmel!",
    t5_q: "Was darfst du bei einem Gewitter NICHT tun?",
    t5_q_a: "Dich unter einen hohen Baum stellen", t5_q_b: "Ins Haus gehen", t5_q_c: "Schuhe anziehen", t5_q_d: "Ein Buch lesen",
  },
  ro: {
    explorer_title: "Vremea și Clima",
    t1_title: "Instrumentele meteorologilor", t1_text: "Meteorologii sunt oamenii de știință care studiază vremea. Ei folosesc diferite instrumente pentru măsurători.",
    t1_b1: "Termometrul măsoară temperatura aerului.", t1_b2: "Giruieta arată direcția vântului.", t1_b3: "Pluviometrul adună și măsoară ploaia.",
    t1_inst: "Potrivește instrumentul cu ceea ce măsoară!",
    t1_l1: "Termometru", t1_r1: "Temperatura (Cald/Frig)",
    t1_l2: "Giruietă", t1_r2: "Direcția vântului",
    t1_l3: "Pluviometru", t1_r3: "Cantitatea de ploaie",
    t1_q: "Ce măsoară termometrul?",
    t1_q_a: "Temperatura aerului", t1_q_b: "Viteza vântului", t1_q_c: "Înălțimea norilor", t1_q_d: "Mărimea picăturilor",

    t2_title: "Sub și peste îngheț", t2_text: "Măsurăm temperatura în grade Celsius (°C). Dacă scade sub 0 °C, apa îngheață!",
    t2_b1: "Sub 0 °C este îngheț (zăpadă și gheață).", t2_b2: "Vara sunt adesea 25-30 °C, adică e cald și bine.", t2_b3: "Lichidul din termometru se extinde la căldură.",
    t2_inst: "Frig sau Cald? Sortează lucrurile!",
    t2_bucket_hideg: "Frig (< 0 °C)",
    t2_bucket_meleg: "Cald (> 20 °C)",
    t2_item_h1: "Om de zăpadă", t2_item_h2: "Țurțure",
    t2_item_m1: "La plajă", t2_item_m2: "Pantaloni scurți",
    t2_q: "La câte grade Celsius îngheață apa?",
    t2_q_a: "La 0 °C", t2_q_b: "La 100 °C", t2_q_c: "La 50 °C", t2_q_d: "La 10 °C",

    // Cél: [1, 6] -> vremea, climat
    t3_title: "Vreme sau Climă?", t3_text: "Mulți le confundă. Vremea este ceea ce se întâmplă afară chiar acum. Clima este cum e vremea de obicei, de-a lungul multor ani.",
    t3_b1: "Vremea se poate schimba de la o oră la alta.", t3_b2: "Clima (ex. deșertică) se schimbă foarte lent.", t3_b3: "Pe Pământ există multe tipuri de climă.",
    t3_inst: "Găsește și marchează cuvintele vremea și climat în propoziție!",
    t3_tok0: "Iar", t3_tok1: "vremea", t3_tok2: "se", t3_tok3: "schimbă,", t3_tok4: "dar", t3_tok5: "acest", t3_tok6: "climat", t3_tok7: "rămâne.",
    t3_q: "Ce este clima?",
    t3_q_a: "Media vremii pe parcursul multor ani", t3_q_b: "Ploaia de azi", t3_q_c: "Viteza vântului", t3_q_d: "Culoarea norilor",

    t4_title: "Circuitul apei în detaliu", t4_text: "Am învățat circuitul apei, dar haideți să vedem denumirile științifice!",
    t4_b1: "Evaporare: Soarele încălzește apa, transformând-o în vapori.", t4_b2: "Condensare: Vaporii se răcesc și devin un nor.", t4_b3: "Precipitații: Ploaia sau zăpada cad pe pământ.",
    t4_inst: "Pune pașii științifici ai circuitului apei în ordine!",
    t4_w1: "Evaporare", t4_w2: "Condensare (Nor)", t4_w3: "Precipitații (Ploaie)", t4_w4: "Colectare (Mare)",
    t4_q: "Cum se numește procesul prin care vaporii de apă se răcesc și devin un nor?",
    t4_q_a: "Condensare", t4_q_b: "Evaporare", t4_q_c: "Topire", t4_q_d: "Înghețare",

    t5_title: "Furtună la orizont", t5_text: "Când aerul cald se întâlnește rapid cu cel rece, pe cer se pot forma furtuni și fulgere.",
    t5_b1: "Fulgerul este o descărcare electrică.", t5_b2: "În timpul unei furtuni, nu sta niciodată sub un copac înalt!", t5_b3: "Caută adăpost într-o clădire.",
    t5_inst: "Vine furtuna! Găsește și apasă pe cele 5 fulgere de pe cer!",
    t5_q: "Ce NU ar trebui să faci în timpul unei furtuni cu fulgere?",
    t5_q_a: "Să nu stai sub un copac înalt", t5_q_b: "Să nu intri în casă", t5_q_c: "Să nu te încalți", t5_q_d: "Să nu citești o carte",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <WeatherTypesSvg lang={lang} />, // A meteorológiai jelek miatt jó lesz ez
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
      hint2: "t1_b2",
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
    svg: (lang) => <ThermometerSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "hideg", label: "t2_bucket_hideg" },
        { id: "meleg", label: "t2_bucket_meleg" },
      ],
      items: [
        { text: "t2_item_h1", bucketId: "hideg" },
        { text: "t2_item_m1", bucketId: "meleg" },
        { text: "t2_item_h2", bucketId: "hideg" },
        { text: "t2_item_m2", bucketId: "meleg" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      // Szavak:
      // HU: [0:Az] [1:időjárás] [2:gyorsan] [3:változik,] [4:de] [5:az] [6:éghajlat] [7:állandó.]
      // EN: [0:The] [1:weather] [2:changes] [3:fast,] [4:but] [5:the] [6:climate] [7:stays.]
      // DE: [0:Das] [1:Wetter] [2:wechselt] [3:schnell,] [4:aber] [5:das] [6:Klima] [7:bleibt.]
      // RO: [0:Iar] [1:vremea] [2:se] [3:schimbă,] [4:dar] [5:acest] [6:climat] [7:rămâne.]
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [1, 6], 
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
      hint2: "t4_b2",
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
      tapCount: { emoji: "⚡", count: 5 }, // A tap-count motor villámokat rajzol a gombokra
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
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
  icon: "🌦️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WeatherClimateExplorer = memo(function WeatherClimateExplorer({
  color = "#0EA5E9", // Sky-500 az égbolt miatt
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
      grade={3} 
      explorerId="sachkunde_k3_weather_climate" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default WeatherClimateExplorer;
