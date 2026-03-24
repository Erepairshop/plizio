"use client";
// CommunityTownExplorer.tsx — Sachkunde Island i8: Community & Rules (K3)
// Topics: 1) Falu vs Város 2) Szabályok és Törvények 3) Alapszükségletek 4) Közösségi terek 5) Tiszta város (Tap-count)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Falu (Bal oldal) */}
      <g transform="translate(60, 90)">
        <rect x="-20" y="-20" width="40" height="20" fill="#FEF08A" />
        <polygon points="-25,-20 25,-20 0,-40" fill="#EF4444" />
        <rect x="-5" y="-10" width="10" height="10" fill="#78350F" />
        {/* Fa */}
        <rect x="25" y="-15" width="6" height="15" fill="#78350F" />
        <circle cx="28" cy="-20" r="12" fill="#22C55E" />
      </g>
      {/* Elválasztó */}
      <line x1="120" y1="20" x2="120" y2="120" stroke="#CBD5E1" strokeWidth="4" strokeDasharray="6 6" />
      {/* Város (Jobb oldal) */}
      <g transform="translate(180, 90)">
        <rect x="-30" y="-60" width="25" height="60" fill="#94A3B8" />
        <rect x="5" y="-80" width="25" height="80" fill="#64748B" />
        {/* Ablakok */}
        <rect x="-25" y="-50" width="5" height="5" fill="#FDE047" />
        <rect x="-15" y="-50" width="5" height="5" fill="#FDE047" />
        <rect x="-25" y="-30" width="5" height="5" fill="#FDE047" />
        <rect x="-15" y="-30" width="5" height="5" fill="#FDE047" />
        <rect x="10" y="-70" width="5" height="5" fill="#FDE047" />
        <rect x="20" y="-70" width="5" height="5" fill="#FDE047" />
        <rect x="10" y="-40" width="5" height="5" fill="#FDE047" />
        <rect x="20" y="-40" width="5" height="5" fill="#FDE047" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      {/* Stop tábla */}
      <g transform="translate(120, 70)">
        <rect x="-4" y="0" width="8" height="50" fill="#94A3B8" />
        <polygon points="-20,-30 0,-40 20,-30 30,-10 20,10 0,20 -20,10 -30,-10" fill="#EF4444" />
        {/* Fehér vonal (Stop szöveg helyett geometria) */}
        <rect x="-15" y="-12" width="30" height="6" fill="#FFFFFF" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      {/* Víz */}
      <g transform="translate(50, 70)">
        <path d="M 0,-15 Q 10,5 0,15 Q -10,5 0,-15 Z" fill="#3B82F6" />
      </g>
      {/* Étel (Kenyér/Alma) */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="15" fill="#EF4444" />
        <path d="M 0,-15 Q 10,-25 15,-15 Q 5,-10 0,-15 Z" fill="#22C55E" />
      </g>
      {/* Menedék (Ház) */}
      <g transform="translate(190, 70)">
        <rect x="-15" y="-5" width="30" height="20" fill="#D97706" />
        <polygon points="-20,-5 20,-5 0,-20" fill="#B45309" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Park (Pad és fa) */}
      <g transform="translate(60, 80)">
        <rect x="-20" y="0" width="40" height="5" fill="#B45309" />
        <rect x="-15" y="5" width="4" height="10" fill="#78350F" />
        <rect x="11" y="5" width="4" height="10" fill="#78350F" />
        <rect x="-30" y="-30" width="6" height="30" fill="#78350F" />
        <circle cx="-27" cy="-35" r="15" fill="#16A34A" />
      </g>
      {/* Kórház */}
      <g transform="translate(180, 80)">
        <rect x="-20" y="-30" width="40" height="40" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
        <path d="M -8,-15 L 8,-15 M 0,-23 L 0,-7" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      <path d="M 0,100 Q 120,80 240,110 L 240,140 L 0,140 Z" fill="#A3E635" opacity="0.5" />
      <circle cx="40" cy="50" r="30" fill="#84CC16" opacity="0.6" />
      <circle cx="200" cy="60" r="40" fill="#65A30D" opacity="0.6" />
      {/* Ide a tap-count interakció fogja rátenni a "🗑️" emojikat gombként! */}
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Közösség és Szabályok",
    // T1: Falu vs Város
    t1_title: "Falu vagy Város?",
    t1_text: "Az emberek különböző méretű településeken élnek. A városokban sok ember és magas épület van, a falvakban több a természet és a nyugalom.",
    t1_b1: "A városban metrók, buszok és felhőkarcolók vannak.",
    t1_b2: "A falvakban sok a kertes ház és a gazdaság (farm).",
    t1_b3: "Mindkét helyen jó közösségek élnek!",
    t1_inst: "Válogasd szét: Mi jellemző a falura és mi a városra?",
    t1_bucket_falu: "Falu",
    t1_bucket_varos: "Város",
    t1_item_f1: "Kertes ház", t1_item_f2: "Traktor",
    t1_item_v1: "Felhőkarcoló", t1_item_v2: "Metró",
    t1_q: "Hol él több ember, és hol vannak magasabb épületek?",
    t1_q_a: "A városban", t1_q_b: "A faluban", t1_q_c: "Az erdőben", t1_q_d: "A farmon",

    // T2: Szabályok és Törvények (Highlight-text) - Cél: [1, 4]
    t2_title: "Miért kellenek szabályok?",
    t2_text: "Ahhoz, hogy az emberek békében éljenek együtt, szabályokra van szükség. Ezek megmondják, mit szabad és mit nem.",
    t2_b1: "A szabályok (pl. iskolai házirend) segítenek a rend megtartásában.",
    t2_b2: "A törvények a felnőttekre és az egész országra vonatkoznak.",
    t2_b3: "Ha mindenki betartja őket, biztonságban vagyunk.",
    t2_inst: "Keresd meg és jelöld meg a MONDATBAN a szabályok és a törvények szavakat!",
    t2_tok0: "A", t2_tok1: "szabályok", t2_tok2: "és", t2_tok3: "a", t2_tok4: "törvények", t2_tok5: "védenek", t2_tok6: "minket.",
    t2_q: "Mi történne, ha nem lennének szabályok a közlekedésben?",
    t2_q_a: "Zűrzavar lenne és sok baleset történne", t2_q_b: "Mindenki gyorsabban hazaérne", t2_q_c: "Nem lennének autók", t2_q_d: "Sütne a nap",

    // T3: Alapszükségletek
    t3_title: "Mire van szükségünk?",
    t3_text: "Minden embernek (és állatnak) vannak alapszükségletei, amik nélkül nem tudna élni.",
    t3_b1: "Tiszta víz kell az iváshoz.",
    t3_b2: "Egészséges étel kell, hogy legyen energiánk.",
    t3_b3: "Menedék (ház) kell, ami megvéd az esőtől és a hidegtől.",
    t3_inst: "Párosítsd az alapszükségletet a feladatával!",
    t3_l1: "Víz", t3_r1: "Iváshoz és mosakodáshoz",
    t3_l2: "Étel", t3_r2: "Energiát ad a testnek",
    t3_l3: "Menedék", t3_r3: "Megvéd a hidegtől és esőtől",
    t3_q: "Melyik egy ALAPSZÜKSÉGLET a túléléshez?",
    t3_q_a: "A tiszta ivóvíz", t3_q_b: "Egy új okostelefon", t3_q_c: "A televízió", t3_q_d: "A rengeteg cukorka",

    // T4: Közösségi terek
    t4_title: "Helyek a közösségért",
    t4_text: "Egy városban vagy faluban vannak helyek, amiket mindenki közösen használ. Ezek a közösségi terek.",
    t4_b1: "A parkban mindenki sétálhat és játszhat.",
    t4_b2: "A kórházba azok mennek, akik gyógyulni szeretnének.",
    t4_b3: "A könyvtárban bárki olvashat és kölcsönözhet könyveket.",
    t4_inst: "Keresd meg a közösségi tereket az ábrán!",
    t4_area_park: "Park (Pad)",
    t4_area_hospital: "Kórház",
    t4_q: "Miért jó a park a városban?",
    t4_q_a: "Mert az emberek pihenhetnek és játszhatnak a friss levegőn", t4_q_b: "Mert ott autókat szerelnek", t4_q_c: "Mert ott vásárolunk ruhákat", t4_q_d: "Mert ott alszanak a tűzoltók",

    // T5: Tiszta város (Tap-count)
    t5_title: "Vigyázz a városra!",
    t5_text: "A mi felelősségünk is, hogy a környezetünk tiszta maradjon. A szemetet mindig a kukába kell dobni!",
    t5_b1: "Ha szemetelsz, a város csúnya és koszos lesz.",
    t5_b2: "Az utcán mindig vannak szemeteskukák.",
    t5_b3: "Segíts tisztán tartani a parkot!",
    t5_inst: "Segíts a takarításban! Keresd meg és bökj rá az 5 szemeteskukára a parkban!",
    t5_q: "Mit teszel egy üres üdítős palackkal a parkban?",
    t5_q_a: "Megkeresem a szemeteskukát és beledobom", t5_q_b: "Eldobom a fűbe", t5_q_c: "Otthagyom a padon", t5_q_d: "Beledobom a szökőkútba",
  },
  en: {
    explorer_title: "Community & Rules",
    t1_title: "Village or City?", t1_text: "People live in different sized settlements. Cities have many people and tall buildings, villages have more nature and peace.",
    t1_b1: "Cities have subways, buses, and skyscrapers.", t1_b2: "Villages have houses with gardens and farms.", t1_b3: "Both places have good communities!",
    t1_inst: "Sort it out: What belongs to a village and what to a city?",
    t1_bucket_falu: "Village", t1_bucket_varos: "City",
    t1_item_f1: "House with garden", t1_item_f2: "Tractor",
    t1_item_v1: "Skyscraper", t1_item_v2: "Subway",
    t1_q: "Where do more people live and where are buildings taller?",
    t1_q_a: "In the city", t1_q_b: "In the village", t1_q_c: "In the forest", t1_q_d: "On the farm",

    // Cél: [1, 4]
    t2_title: "Why do we need rules?", t2_text: "For people to live together in peace, we need rules. They tell us what we can and cannot do.",
    t2_b1: "Rules (like school rules) help maintain order.", t2_b2: "Laws apply to adults and the whole country.", t2_b3: "If everyone follows them, we are safe.",
    t2_inst: "Find and mark the words rules and laws in the sentence!",
    t2_tok0: "The", t2_tok1: "rules", t2_tok2: "and", t2_tok3: "the", t2_tok4: "laws", t2_tok5: "protect", t2_tok6: "us.",
    t2_q: "What would happen if there were no traffic rules?",
    t2_q_a: "There would be chaos and many accidents", t2_q_b: "Everyone would get home faster", t2_q_c: "There would be no cars", t2_q_d: "The sun would shine",

    t3_title: "What do we need?", t3_text: "Every person (and animal) has basic needs without which they could not live.",
    t3_b1: "We need clean water to drink.", t3_b2: "We need healthy food for energy.", t3_b3: "We need shelter (a house) to protect us from rain and cold.",
    t3_inst: "Match the basic need with its purpose!",
    t3_l1: "Water", t3_r1: "For drinking and washing",
    t3_l2: "Food", t3_r2: "Gives energy to the body",
    t3_l3: "Shelter", t3_r3: "Protects from cold and rain",
    t3_q: "Which is a BASIC NEED for survival?",
    t3_q_a: "Clean drinking water", t3_q_b: "A new smartphone", t3_q_c: "A television", t3_q_d: "Lots of candy",

    t4_title: "Community Spaces", t4_text: "In a city or village, there are places that everyone shares. These are community spaces.",
    t4_b1: "Everyone can walk and play in the park.", t4_b2: "People go to the hospital to get better.", t4_b3: "Anyone can read and borrow books in the library.",
    t4_inst: "Find the community spaces in the picture!",
    t4_area_park: "Park (Bench)",
    t4_area_hospital: "Hospital",
    t4_q: "Why is a park good in a city?",
    t4_q_a: "People can rest and play in the fresh air", t4_q_b: "Because they fix cars there", t4_q_c: "Because we buy clothes there", t4_q_d: "Because firefighters sleep there",

    t5_title: "Keep the City Clean", t5_text: "It is our responsibility to keep our environment clean. Always throw trash in the bin!",
    t5_b1: "If you litter, the city becomes ugly and dirty.", t5_b2: "There are always trash bins on the street.", t5_b3: "Help keep the park clean!",
    t5_inst: "Help clean up! Find and tap the 5 trash bins in the park!",
    t5_q: "What do you do with an empty bottle in the park?",
    t5_q_a: "Find a trash bin and throw it in", t5_q_b: "Throw it in the grass", t5_q_c: "Leave it on the bench", t5_q_d: "Throw it in the fountain",
  },
  de: {
    explorer_title: "Gemeinschaft & Regeln",
    t1_title: "Dorf oder Stadt?", t1_text: "Menschen leben in verschieden großen Orten. In Städten gibt es viele Menschen und hohe Gebäude, in Dörfern mehr Natur.",
    t1_b1: "In der Stadt gibt es U-Bahnen, Busse und Wolkenkratzer.", t1_b2: "In Dörfern gibt es Häuser mit Gärten und Bauernhöfe.", t1_b3: "An beiden Orten gibt es gute Gemeinschaften!",
    t1_inst: "Dorf oder Stadt? Sortiere!",
    t1_bucket_falu: "Dorf", t1_bucket_varos: "Stadt",
    t1_item_f1: "Haus mit Garten", t1_item_f2: "Traktor",
    t1_item_v1: "Wolkenkratzer", t1_item_v2: "U-Bahn",
    t1_q: "Wo leben mehr Menschen und wo sind Gebäude höher?",
    t1_q_a: "In der Stadt", t1_q_b: "Im Dorf", t1_q_c: "Im Wald", t1_q_d: "Auf dem Bauernhof",

    // Cél: [1, 4]
    t2_title: "Warum brauchen wir Regeln?", t2_text: "Damit Menschen in Frieden zusammenleben können, brauchen wir Regeln. Sie sagen uns, was wir tun dürfen und was nicht.",
    t2_b1: "Regeln (wie Schulregeln) helfen, Ordnung zu halten.", t2_b2: "Gesetze gelten für Erwachsene und das ganze Land.", t2_b3: "Wenn alle sich daran halten, sind wir sicher.",
    t2_inst: "Finde und markiere die Worte Regeln und Gesetze im Satz!",
    t2_tok0: "Die", t2_tok1: "Regeln", t2_tok2: "und", t2_tok3: "die", t2_tok4: "Gesetze", t2_tok5: "schützen", t2_tok6: "uns.",
    t2_q: "Was würde passieren, wenn es keine Verkehrsregeln gäbe?",
    t2_q_a: "Es gäbe Chaos und viele Unfälle", t2_q_b: "Jeder wäre schneller zu Hause", t2_q_c: "Es gäbe keine Autos", t2_q_d: "Die Sonne würde scheinen",

    t3_title: "Was brauchen wir?", t3_text: "Jeder Mensch (und jedes Tier) hat Grundbedürfnisse, ohne die er nicht leben könnte.",
    t3_b1: "Wir brauchen sauberes Wasser zum Trinken.", t3_b2: "Wir brauchen gesundes Essen für Energie.", t3_b3: "Wir brauchen Schutz (ein Haus) vor Regen und Kälte.",
    t3_inst: "Verbinde das Bedürfnis mit seinem Zweck!",
    t3_l1: "Wasser", t3_r1: "Zum Trinken und Waschen",
    t3_l2: "Essen", t3_r2: "Gibt dem Körper Energie",
    t3_l3: "Haus", t3_r3: "Schützt vor Kälte und Regen",
    t3_q: "Was ist ein GRUNDBEDÜRFNIS zum Überleben?",
    t3_q_a: "Sauberes Trinkwasser", t3_q_b: "Ein neues Smartphone", t3_q_c: "Ein Fernseher", t3_q_d: "Viele Süßigkeiten",

    t4_title: "Öffentliche Plätze", t4_text: "In einer Stadt oder einem Dorf gibt es Orte, die alle gemeinsam nutzen. Das sind öffentliche Plätze.",
    t4_b1: "Im Park kann jeder spazieren und spielen.", t4_b2: "Ins Krankenhaus gehen Menschen, um gesund zu werden.", t4_b3: "In der Bibliothek kann jeder Bücher lesen.",
    t4_inst: "Finde die öffentlichen Plätze auf dem Bild!",
    t4_area_park: "Park (Bank)",
    t4_area_hospital: "Krankenhaus",
    t4_q: "Warum ist ein Park in der Stadt gut?",
    t4_q_a: "Weil die Menschen sich an der frischen Luft erholen und spielen können", t4_q_b: "Weil dort Autos repariert werden", t4_q_c: "Weil wir dort Kleidung kaufen", t4_q_d: "Weil dort die Feuerwehr schläft",

    t5_title: "Halt die Stadt sauber", t5_text: "Es ist unsere Verantwortung, unsere Umwelt sauber zu halten. Wirf Müll immer in den Eimer!",
    t5_b1: "Wenn du Müll wegwirfst, wird die Stadt hässlich und schmutzig.", t5_b2: "Auf der Straße gibt es immer Mülleimer.", t5_b3: "Hilf mit, den Park sauber zu halten!",
    t5_inst: "Hilf beim Aufräumen! Finde und tippe auf die 5 Mülleimer im Park!",
    t5_q: "Was machst du mit einer leeren Flasche im Park?",
    t5_q_a: "Ich suche einen Mülleimer und werfe sie hinein", t5_q_b: "Ich werfe sie ins Gras", t5_q_c: "Ich lasse sie auf der Bank", t5_q_d: "Ich werfe sie in den Brunnen",
  },
  ro: {
    explorer_title: "Comunitate și Reguli",
    t1_title: "Sat sau Oraș?", t1_text: "Oamenii locuiesc în așezări de diferite mărimi. În orașe sunt mulți oameni și clădiri înalte, în sate este mai multă natură.",
    t1_b1: "În oraș există metrouri, autobuze și zgârie-nori.", t1_b2: "În sate sunt case cu curte și ferme.", t1_b3: "În ambele locuri trăiesc comunități bune!",
    t1_inst: "Sortează: Ce aparține satului și ce aparține orașului?",
    t1_bucket_falu: "Sat", t1_bucket_varos: "Oraș",
    t1_item_f1: "Casă cu curte", t1_item_f2: "Tractor",
    t1_item_v1: "Zgârie-nori", t1_item_v2: "Metrou",
    t1_q: "Unde locuiesc mai mulți oameni și clădirile sunt mai înalte?",
    t1_q_a: "În oraș", t1_q_b: "În sat", t1_q_c: "În pădure", t1_q_d: "La fermă",

    // Cél: [1, 4]
    t2_title: "De ce avem nevoie de reguli?", t2_text: "Pentru ca oamenii să trăiască în pace împreună, avem nevoie de reguli. Ele ne spun ce putem face și ce nu.",
    t2_b1: "Regulile (ex. regulile școlii) ajută la păstrarea ordinii.", t2_b2: "Legile se aplică adulților și întregii țări.", t2_b3: "Dacă toți le respectă, suntem în siguranță.",
    t2_inst: "Găsește și marchează cuvintele reguli și legi în propoziție!",
    t2_tok0: "Aceste", t2_tok1: "reguli", t2_tok2: "și", t2_tok3: "aceste", t2_tok4: "legi", t2_tok5: "ne", t2_tok6: "protejează.",
    t2_q: "Ce s-ar întâmpla dacă nu ar exista reguli de circulație?",
    t2_q_a: "Ar fi haos și multe accidente", t2_q_b: "Toți ar ajunge acasă mai repede", t2_q_c: "Nu ar mai fi mașini", t2_q_d: "Ar ieși soarele",

    t3_title: "De ce avem nevoie?", t3_text: "Fiecare om (și animal) are nevoi de bază fără de care nu ar putea trăi.",
    t3_b1: "Avem nevoie de apă curată pentru a bea.", t3_b2: "Avem nevoie de mâncare sănătoasă pentru energie.", t3_b3: "Avem nevoie de un adăpost (casă) care să ne apere de ploaie și frig.",
    t3_inst: "Potrivește nevoia de bază cu rolul ei!",
    t3_l1: "Apă", t3_r1: "Pentru băut și spălat",
    t3_l2: "Mâncare", t3_r2: "Dă energie corpului",
    t3_l3: "Adăpost", t3_r3: "Ne apără de frig și ploaie",
    t3_q: "Care este o NEVOIE DE BAZĂ pentru supraviețuire?",
    t3_q_a: "Apa curată de băut", t3_q_b: "Un smartphone nou", t3_q_c: "Un televizor", t3_q_d: "Multe bomboane",

    t4_title: "Spații comunitare", t4_text: "Într-un oraș sau sat, există locuri pe care le folosim cu toții împreună. Acestea sunt spațiile comunitare.",
    t4_b1: "În parc, toată lumea se poate plimba și juca.", t4_b2: "La spital merg cei care vor să se vindece.", t4_b3: "La bibliotecă oricine poate citi și împrumuta cărți.",
    t4_inst: "Găsește spațiile comunitare în imagine!",
    t4_area_park: "Parc (Bancă)",
    t4_area_hospital: "Spital",
    t4_q: "De ce este bun un parc în oraș?",
    t4_q_a: "Pentru că oamenii se pot odihni și juca la aer curat", t4_q_b: "Pentru că acolo se repară mașini", t4_q_c: "Pentru că acolo cumpărăm haine", t4_q_d: "Pentru că acolo dorm pompierii",

    t5_title: "Păstrează orașul curat", t5_text: "Este și responsabilitatea noastră ca mediul să rămână curat. Aruncă mereu gunoiul la coș!",
    t5_b1: "Dacă arunci gunoi pe jos, orașul devine urât și murdar.", t5_b2: "Pe stradă există mereu coșuri de gunoi.", t5_b3: "Ajută la păstrarea curățeniei în parc!",
    t5_inst: "Ajută la curățenie! Găsește și apasă pe cele 5 coșuri de gunoi din parc!",
    t5_q: "Ce faci cu o sticlă goală în parc?",
    t5_q_a: "Caut un coș de gunoi și o arunc", t5_q_b: "O arunc în iarbă", t5_q_c: "O las pe bancă", t5_q_d: "O arunc în fântână",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "falu", label: "t1_bucket_falu" },
        { id: "varos", label: "t1_bucket_varos" },
      ],
      items: [
        { text: "t1_item_f1", bucketId: "falu" },
        { text: "t1_item_v1", bucketId: "varos" },
        { text: "t1_item_f2", bucketId: "falu" },
        { text: "t1_item_v2", bucketId: "varos" },
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "highlight-text",
      // Szavak mind a 4 nyelven: 1 és 4 index a szabályok/törvények
      tokens: ["t2_tok0", "t2_tok1", "t2_tok2", "t2_tok3", "t2_tok4", "t2_tok5", "t2_tok6"],
      correctIndices: [1, 4],
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b3",
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
      type: "label-diagram",
      areas: [
        { id: "park", x: 25, y: 55, label: "t4_area_park" },
        { id: "hospital", x: 75, y: 50, label: "t4_area_hospital" },
      ],
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
      tapCount: { emoji: "🗑️", count: 5 }, // A tap-count interakció rajzolja rá a kukákat!
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
  icon: "🏘️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const CommunityTownExplorer = memo(function CommunityTownExplorer({
  color = "#F59E0B", // Amber-500 a falu és házak miatt
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
      explorerId="sachkunde_k3_community_town" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default CommunityTownExplorer;
