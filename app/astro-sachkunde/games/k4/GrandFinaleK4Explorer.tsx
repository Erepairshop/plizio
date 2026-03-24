"use client";
// GrandFinaleK4Explorer.tsx — Sachkunde Island i9: Grand Finale (K4)
// Topics: 1) Testünk és Egészségünk 2) Az állatok védelme 3) Fenntarthatóság 4) Európa és mi 5) A Sachkunde Bajnoka!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEE2E2" rx="20" />
      {/* Szív és tüdő absztrakt kompozíció */}
      <g transform="translate(120, 70)">
        <ellipse cx="-20" cy="0" rx="25" ry="40" fill="#EF4444" opacity="0.2" />
        <ellipse cx="20" cy="0" rx="25" ry="40" fill="#EF4444" opacity="0.2" />
        <path d="M 0,15 L -25,-10 A 15,15 0 0,1 0,-30 A 15,15 0 0,1 25,-10 Z" fill="#EF4444" />
        <path d="M -50,30 L 50,30" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Védett állatok jelképe (Lábnyom és szív) */}
      <g transform="translate(120, 70)">
        <path d="M -30,20 C -45,0 -15,-30 0,-10 C 15,-30 45,0 30,20 Z" fill="#10B981" opacity="0.3" />
        <circle cx="0" cy="0" r="15" fill="#065F46" />
        <circle cx="-15" cy="-20" r="8" fill="#065F46" />
        <circle cx="15" cy="-20" r="8" fill="#065F46" />
        <circle cx="-25" cy="0" r="6" fill="#065F46" />
        <circle cx="25" cy="0" r="6" fill="#065F46" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Újrahasznosítási körforgás geometriával */}
      <g transform="translate(120, 70)">
        <path d="M 0,-40 L 10,-30 L -10,-30 Z" fill="#22C55E" />
        <path d="M 35,20 L 40,5 L 25,10 Z" fill="#22C55E" transform="rotate(120)" />
        <path d="M -35,20 L -25,10 L -40,5 Z" fill="#22C55E" transform="rotate(240)" />
        <path d="M -30,-20 A 40,40 0 0,1 30,-20" fill="none" stroke="#22C55E" strokeWidth="4" />
        <path d="M 40,10 A 40,40 0 0,1 0,40" fill="none" stroke="#22C55E" strokeWidth="4" />
        <path d="M -40,10 A 40,40 0 0,0 0,40" fill="none" stroke="#22C55E" strokeWidth="4" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Európa csillagai körben */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="45" fill="#1E3A8A" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
          <polygon key={deg} points="0,-35 2,-30 -2,-30" fill="#FDE047" transform={`rotate(${deg})`} />
        ))}
        <path d="M -20,0 Q 0,-20 20,0 T 0,20 Z" fill="#3B82F6" opacity="0.5" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      {/* Nagy kupa csillaggal */}
      <g transform="translate(120, 75)">
        <path d="M -30,-35 L 30,-35 L 25,5 A 25,25 0 0,1 -25,5 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="3" />
        <rect x="-10" y="20" width="20" height="15" fill="#D97706" />
        <rect x="-30" y="35" width="60" height="8" fill="#B45309" rx="2" />
        {/* Kupa fülei */}
        <path d="M -30,-25 Q -45,-25 -45,-10 T -30,0" fill="none" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
        <path d="M 30,-25 Q 45,-25 45,-10 T 30,0" fill="none" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "K4 Nagy Finálé",
    t1_title: "Összetett testünk",
    t1_text: "Az emberi test szervek, csontok és izmok tökéletes együttműködése. A negyedik év végére már tudod, hogyan vigyázz erre a bonyolult gépezetre.",
    t1_b1: "A szívünk percenként átlagosan 70-szer dobban.",
    t1_b2: "A tüdőnk tisztítja meg a vért oxigénnel.",
    t1_b3: "A rendszeres mozgás erősíti az izmokat és a csontokat.",
    t1_inst: "Válogasd szét a szerveket a feladatuk szerint!",
    t1_bucket_keringes: "Vérkeringés",
    t1_bucket_mozgas: "Mozgásszerv",
    t1_item_k1: "Szív", t1_item_k2: "Vérerek",
    t1_item_m1: "Bicepsz izom", t1_item_m2: "Combcsont",
    t1_q: "Hány csontból áll egy felnőtt emberi csontváz körülbelül?",
    t1_q_a: "Több mint 200", t1_q_b: "Pontosan 50", t1_q_c: "Csak 10", t1_q_d: "Ezer",

    t2_title: "Életközösségek védelme",
    t2_text: "Minden állat és növény fontos láncszeme az ökoszisztémának. Ha egy faj eltűnik, az az egész természetre hatással van.",
    t2_b1: "A ragadozók szabályozzák a növényevők számát.",
    t2_b2: "A rovarok beporozzák a növényeket, amiket megeszünk.",
    t2_b3: "A vizes élőhelyek védelme kulcsfontosságú a kétéltűeknek.",
    t2_inst: "Párosítsd az élőlényt a szerepével!",
    t2_l1: "Méh", t2_r1: "Beporzás",
    t2_l2: "Farkas", t2_r2: "Létszám szabályozás",
    t2_l3: "Zöld növény", t2_r3: "Oxigén termelés",
    t2_q: "Mi történik az ökoszisztémával, ha felborul az egyensúly?",
    t2_q_a: "Veszélybe kerülhet sok élőlény élete", t2_q_b: "Minden jobb lesz", t2_q_c: "Az állatok elköltöznek a Holdra", t2_q_d: "Semmi nem változik",

    // Cél: [2, 5] -> Földet, jövőnket
    t3_title: "Fenntartható jövő",
    t3_text: "A környezetvédelem nem csak a szemétgyűjtésről szól. Arról is, hogyan használjuk az energiát és a vizet okosan.",
    t3_b1: "Használjunk megújuló energiát, például napfényt!",
    t3_b2: "Vásároljunk tudatosan, kevesebb műanyagot.",
    t3_b3: "Védjük az erdőket, mert ők a Föld tüdeje.",
    t3_inst: "Keresd meg és jelöld meg a mondatban a bolygónk nevét és a célunkat!",
    t3_tok0: "Védjük", t3_tok1: "a", t3_tok2: "Földet", t3_tok3: "és", t3_tok4: "közös", t3_tok5: "jövőnket", t3_tok6: "együtt!",
    t3_q: "Melyik energiaforrás NEM szennyezi a levegőt?",
    t3_q_a: "A szélenergia", t3_q_b: "A kőszén égetése", t3_q_c: "Az autó kipufogógáza", t3_q_d: "A gyárfüst",

    t4_title: "Európai polgárok",
    t4_text: "Európa a hazánk és a közös otthonunk. Ismerjük a szomszédainkat és a közös értékeinket.",
    t4_b1: "Németország és Magyarország is Európában van.",
    t4_b2: "A térképek segítenek eligazodni a világban.",
    t4_b3: "A különböző nyelvek gazdagítják a kultúránkat.",
    t4_inst: "Tedd sorba a településeket/területeket méret szerint (kicsitől a nagyig)!",
    t4_w1: "Falu", t4_w2: "Város", t4_w3: "Ország", t4_w4: "Kontinens",
    t4_q: "Mi az Európai Unió egyik fő célja?",
    t4_q_a: "Az országok békés együttműködése", t4_q_b: "Hogy mindenki ugyanazt egye", t4_q_c: "Hogy ne legyenek térképek", t4_q_d: "Hogy betiltsák a bicikliket",

    t5_title: "A Sachkunde Bajnoka",
    t5_text: "Gratulálunk! Elérkeztél a negyedik osztályos Sachkunde út végére. Rengeteg mindent tanultál a világról.",
    t5_b1: "Most már te is tudatos környezetvédő vagy.",
    t5_b2: "Ismered a tested és a természet titkait.",
    t5_b3: "Készen állsz a következő nagy kalandra!",
    t5_inst: "Te vagy a győztes! Gyűjtsd össze az 5 arany csillagot (⭐) a jutalmadért!",
    t5_q: "Mit tanultál meg a leginkább ebben a sorozatban?",
    t5_q_a: "Hogy felelősek vagyunk a környezetünkért", t5_q_b: "Hogy a Hold sajtból van", t5_q_c: "Hogy nem kell fogat mosni", t5_q_d: "Hogy a hangyáknak 10 lábuk van",
  },
  en: {
    explorer_title: "K4 Grand Finale",
    t1_title: "Our Complex Body", t1_text: "The human body is a perfect cooperation of organs, bones, and muscles. You now know how to care for this machine.",
    t1_b1: "Our heart beats about 70 times per minute.", t1_b2: "Lungs oxygenate the blood.", t1_b3: "Exercise strengthens muscles and bones.",
    t1_inst: "Sort organs by their system!",
    t1_bucket_keringes: "Circulation", t1_bucket_mozgas: "Movement",
    t1_item_k1: "Heart", t1_item_k2: "Blood vessels",
    t1_item_m1: "Biceps", t1_item_m2: "Femur",
    t1_q: "How many bones are in an adult human skeleton roughly?",
    t1_q_a: "More than 200", t1_q_b: "Exactly 50", t1_q_c: "Only 10", t1_q_d: "A thousand",

    t2_title: "Protecting Ecosystems", t2_text: "Every animal and plant is a link in the food chain. If one disappears, it affects all of nature.",
    t2_b1: "Predators regulate prey numbers.", t2_b2: "Insects pollinate the plants we eat.", t2_b3: "Protecting wetlands is key for amphibians.",
    t2_inst: "Match the being to its role!",
    t2_l1: "Bee", t2_r1: "Pollination",
    t2_l2: "Wolf", t2_r2: "Regulating numbers",
    t2_l3: "Green plant", t2_r3: "Producing oxygen",
    t2_q: "What happens to the ecosystem if the balance is lost?",
    t2_q_a: "The lives of many beings may be in danger", t2_q_b: "Everything gets better", t2_q_c: "Animals move to the Moon", t2_q_d: "Nothing changes",

    // Target: [2, 5] -> Earth, future
    t3_title: "Sustainable Future", t3_text: "Environmental protection is about more than just picking up trash. It's about using energy and water wisely.",
    t3_b1: "Use renewable energy like sunlight!", t3_b2: "Shop consciously, use less plastic.", t3_b3: "Protect forests, they are Earth's lungs.",
    t3_inst: "Find and mark our planet's name and our goal in the sentence!",
    t3_tok0: "Protect", t3_tok1: "the", t3_tok2: "Earth", t3_tok3: "and", t3_tok4: "our", t3_tok5: "future", t3_tok6: "now!",
    t3_q: "Which energy source does NOT pollute the air?",
    t3_q_a: "Wind energy", t3_q_b: "Burning coal", t3_q_c: "Car exhaust", t3_q_d: "Factory smoke",

    t4_title: "European Citizens", t4_text: "Europe is our home. We know our neighbors and our shared values.",
    t4_b1: "Germany and Hungary are both in Europe.", t4_b2: "Maps help us navigate the world.", t4_b3: "Different languages enrich our culture.",
    t4_inst: "Order by size (small to large)!",
    t4_w1: "Village", t4_w2: "City", t4_w3: "Country", t4_w4: "Continent",
    t4_q: "What is a main goal of the European Union?",
    t4_q_a: "Peaceful cooperation between countries", t4_q_b: "Everyone eating the same food", t4_q_c: "Abolishing maps", t4_q_d: "Banning bicycles",

    t5_title: "Sachkunde Champion", t5_text: "Congratulations! You reached the end of the Grade 4 Sachkunde journey.",
    t5_b1: "You are now a conscious environmentalist.", t5_b2: "You know the secrets of your body and nature.", t5_b3: "Ready for the next big adventure!",
    t5_inst: "You are the winner! Collect the 5 golden stars (⭐) for your reward!",
    t5_q: "What was the most important thing you learned?",
    t5_q_a: "That we are responsible for our environment", t5_q_b: "That the Moon is made of cheese", t5_q_c: "That brushing teeth is optional", t5_q_d: "That ants have 10 legs",
  },
  de: {
    explorer_title: "K4 Großes Finale",
    t1_title: "Unser Körper", t1_text: "Der menschliche Körper ist ein Wunderwerk. Du weißt jetzt, wie du ihn gesund hältst.",
    t1_b1: "Unser Herz schlägt etwa 70 Mal pro Minute.", t1_b2: "Lungen geben Sauerstoff ins Blut.", t1_b3: "Sport stärkt Muskeln und Knochen.",
    t1_inst: "Sortiere die Organe!",
    t1_bucket_keringes: "Kreislauf", t1_bucket_mozgas: "Bewegung",
    t1_item_k1: "Herz", t1_item_k2: "Blutgefäße",
    t1_item_m1: "Bizeps", t1_item_m2: "Oberschenkelknochen",
    t1_q: "Aus wie vielen Knochen besteht ein Skelett etwa?",
    t1_q_a: "Über 200", t1_q_b: "Genau 50", t1_q_c: "Nur 10", t1_q_d: "Tausend",

    t2_title: "Ökosysteme schützen", t2_text: "Jedes Tier und jede Pflanze ist wichtig. Wenn eine Art fehlt, leidet die Natur.",
    t2_b1: "Raubtiere halten das Gleichgewicht.", t2_b2: "Insekten bestäuben Pflanzen.", t2_b3: "Moore sind wichtig für Amphibien.",
    t2_inst: "Verbinde Lebewesen und Rolle!",
    t2_l1: "Biene", t2_r1: "Bestäubung",
    t2_l2: "Wolf", t2_r2: "Gleichgewicht halten",
    t2_l3: "Grüne Pflanze", t2_r3: "Sauerstoff machen",
    t2_q: "Was passiert bei einem Ungleichgewicht?",
    t2_q_a: "Lebewesen geraten in Gefahr", t2_q_b: "Alles wird besser", t2_q_c: "Tiere fliegen zum Mond", t2_q_d: "Nichts",

    // Target: [2, 5] -> Erde, Zukunft
    t3_title: "Nachhaltige Zukunft", t3_text: "Umwelt zu schützen heißt, Energie und Wasser klug zu nutzen.",
    t3_b1: "Nutze Sonnenenergie!", t3_b2: "Kaufe bewusst ein.", t3_b3: "Schütze den Wald.",
    t3_inst: "Markiere Planet und Ziel im Satz!",
    t3_tok0: "Rettet", t3_tok1: "unsere", t3_tok2: "Erde", t3_tok3: "und", t3_tok4: "unsere", t3_tok5: "Zukunft", t3_tok6: "jetzt!",
    t3_q: "Welche Energie ist sauber?",
    t3_q_a: "Windenergie", t3_q_b: "Kohle", t3_q_c: "Abgase", t3_q_d: "Fabrikrauch",

    t4_title: "Europäer sein", t4_text: "Europa ist unsere Heimat. Wir kennen unsere Nachbarn.",
    t4_b1: "Deutschland und Ungarn liegen in Europa.", t4_b2: "Karten helfen bei der Orientierung.", t4_b3: "Sprachen machen uns reicher.",
    t4_inst: "Ordne nach Größe!",
    t4_w1: "Dorf", t4_w2: "Stadt", t4_w3: "Land", t4_w4: "Kontinent",
    t4_q: "Was will die EU?",
    t4_q_a: "Friedliche Zusammenarbeit", t4_q_b: "Gleiches Essen für alle", t4_q_c: "Keine Karten mehr", t4_q_d: "Fahrradverbot",

    t5_title: "Sachkunde-Champion", t5_text: "Herzlichen Glückwunsch! Du hast die 4. Klasse geschafft.",
    t5_b1: "Du bist nun ein Umweltschützer.", t5_b2: "Du kennst die Naturgeheimnisse.", t5_b3: "Bereit für das nächste Abenteuer!",
    t5_inst: "Du bist der Sieger! Sammle die 5 Sterne (⭐)!",
    t5_q: "Was war am wichtigsten?",
    t5_q_a: "Dass wir Verantwortung tragen", t5_q_b: "Dass der Mond aus Käse ist", t5_q_c: "Dass Zähneputzen egal ist", t5_q_d: "Ameisen haben 10 Beine",
  },
  ro: {
    explorer_title: "Marea Finală K4",
    t1_title: "Corpul nostru", t1_text: "Corpul uman este o colaborare perfectă între organe, oase și mușchi.",
    t1_b1: "Inima bate de aprox. 70 de ori pe minut.", t1_b2: "Plămânii oxigenează sângele.", t1_b3: "Sportul întărește oasele.",
    t1_inst: "Sortează organele!",
    t1_bucket_keringes: "Circulație", t1_bucket_mozgas: "Mișcare",
    t1_item_k1: "Inimă", t1_item_k2: "Vase de sânge",
    t1_item_m1: "Biceps", t1_item_m2: "Femur",
    t1_q: "Câte oase are un adult?",
    t1_q_a: "Peste 200", t1_q_b: "Fix 50", t1_q_c: "Doar 10", t1_q_d: "O mie",

    t2_title: "Protejarea naturii", t2_text: "Fiecare specie este importantă. Dispariția uneia afectează totul.",
    t2_b1: "Prădătorii mențin echilibrul.", t2_b2: "Insectele polenizează plantele.", t2_b3: "Zonele umede sunt vitale.",
    t2_inst: "Potrivește rolul!",
    t2_l1: "Albină", t2_r1: "Polenizare",
    t2_l2: "Lup", t2_r2: "Echilibru",
    t2_l3: "Plantă", t2_r3: "Oxigen",
    t2_q: "Ce se întâmplă la dezechilibru?",
    t2_q_a: "Viața ființelor e în pericol", t2_q_b: "E mai bine", t2_q_c: "Animalele pleacă pe Lună", t2_q_d: "Nimic",

    // Target: [2, 5] -> Pământul, viitorul
    t3_title: "Viitor sustenabil", t3_text: "Protecția mediului înseamnă să folosim resursele cu cap.",
    t3_b1: "Folosește energia solară!", t3_b2: "Cumpără conștient.", t3_b3: "Protejează pădurea.",
    t3_inst: "Marchează planeta și scopul în propoziție!",
    t3_tok0: "Salvați", t3_tok1: "azi", t3_tok2: "Pământul", t3_tok3: "și", t3_tok4: "tot", t3_tok5: "viitorul", t3_tok6: "nostru!",
    t3_q: "Care energie e curată?",
    t3_q_a: "Energia eoliană", t3_q_b: "Cărbunele", t3_q_c: "Eșapamentul", t3_q_d: "Fumul",

    t4_title: "Cetățeni europeni", t4_text: "Europa e casa noastră. Ne cunoaștem vecinii.",
    t4_b1: "Germania și Ungaria sunt în Europa.", t4_b2: "Hărțile ne ajută să navigăm.", t4_b3: "Cultura e bogată.",
    t4_inst: "Ordonează după mărime!",
    t4_w1: "Sat", t4_w2: "Oraș", t4_w3: "Țară", t4_w4: "Continent",
    t4_q: "Ce vrea UE?",
    t4_q_a: "Cooperare pașnică", t4_q_b: "Mâncare identică", t4_q_c: "Fără hărți", t4_q_d: "Interzicerea bicicletelor",

    t5_title: "Campion Sachkunde", t5_text: "Felicitări! Ai terminat clasa a 4-a.",
    t5_b1: "Ești un ecologist acum.", t5_b2: "Știi secretele naturii.", t5_b3: "Ești gata de noi aventuri!",
    t5_inst: "Ești câștigător! Adună cele 5 stele (⭐)!",
    t5_q: "Ce a fost cel mai important?",
    t5_q_a: "Că suntem responsabili", t5_q_b: "Luna e din brânză", t5_q_c: "Spălatul pe dinți e opțional", t5_q_d: "Furnicile au 10 picioare",
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
        { id: "keringes", label: "t1_bucket_keringes" },
        { id: "mozgas", label: "t1_bucket_mozgas" },
      ],
      items: [
        { text: "t1_item_k1", bucketId: "keringes" },
        { text: "t1_item_m1", bucketId: "mozgas" },
        { text: "t1_item_k2", bucketId: "keringes" },
        { text: "t1_item_m2", bucketId: "mozgas" },
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
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
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
      // HU: [0:Védjük] [1:a] [2:Földet] [3:és] [4:közös] [5:jövőnket] [6:együtt!]
      // EN: [0:Protect] [1:the] [2:Earth] [3:and] [4:our] [5:future] [6:now!]
      // DE: [0:Rettet] [1:unsere] [2:Erde] [3:und] [4:unsere] [5:Zukunft] [6:jetzt!]
      // RO: [0:Salvați] [1:azi] [2:Pământul] [3:și] [4:tot] [5:viitorul] [6:nostru!]
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [2, 5],
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
      tapCount: { emoji: "⭐", count: 5 },
      instruction: "t5_inst",
      hint1: "t5_b1",
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
  icon: "🏆",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const GrandFinaleK4Explorer = memo(function GrandFinaleK4Explorer({
  color = "#F59E0B", // Arany a győzteseknek
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
      explorerId="sachkunde_k4_grand_finale" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default GrandFinaleK4Explorer;
