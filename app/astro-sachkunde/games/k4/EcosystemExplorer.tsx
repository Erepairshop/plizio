"use client";
// EcosystemExplorer.tsx — Sachkunde Island i4: Ecosystems (K4)
// Topics: 1) Ökoszisztéma alapok 2) Erdei életközösség 3) Környezeti egyensúly 4) Növénytermesztés 5) Alma szüret

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Élettelen környezet (Víz, Nap, Szikla) */}
      <circle cx="200" cy="30" r="15" fill="#FBBF24" />
      <ellipse cx="60" cy="110" rx="40" ry="10" fill="#3B82F6" opacity="0.4" />
      <polygon points="140,120 160,90 180,120" fill="#94A3B8" />
      {/* Élőlények (Növény, Állat sziluett) */}
      <g transform="translate(100, 90)">
        <rect x="-2" y="0" width="4" height="30" fill="#16A34A" />
        <circle cx="0" cy="0" r="10" fill="#22C55E" />
      </g>
      <g transform="translate(40, 70)">
        <ellipse cx="0" cy="0" rx="12" ry="8" fill="#92400E" />
        <circle cx="-10" cy="-5" r="4" fill="#92400E" />
      </g>
      {/* Összekötő nyilak (Kölcsönhatás) */}
      <path d="M 100,60 Q 120,40 180,35" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
      <path d="M 60,95 Q 80,85 95,95" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Erdei életközösség rétegei */}
      <rect x="0" y="110" width="240" height="30" fill="#78350F" />
      {/* Fa és bokor */}
      <g transform="translate(160, 110)">
        <rect x="-10" y="-80" width="20" height="80" fill="#92400E" />
        <circle cx="0" cy="-85" r="35" fill="#15803D" />
      </g>
      <g transform="translate(60, 110)">
        <circle cx="0" cy="-15" r="15" fill="#16A34A" />
        <circle cx="-15" cy="-10" r="10" fill="#22C55E" />
      </g>
      {/* Gomba és moha */}
      <g transform="translate(110, 110)">
        <rect x="-3" y="-10" width="6" height="10" fill="#F1F5F9" />
        <path d="M -8,-10 Q 0,-20 8,-10 Z" fill="#EF4444" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Mérleg az egyensúly jelképeként */}
      <g transform="translate(120, 100)">
        <rect x="-2" y="-60" width="4" height="60" fill="#475569" />
        <rect x="-50" y="0" width="100" height="5" fill="#1E293B" rx="2" />
        <line x1="-60" y1="-50" x2="60" y2="-50" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
        {/* Bal serpenyő: Természet (Zöld kör) */}
        <g transform="translate(-60, -50)">
          <line x1="0" y1="0" x2="0" y2="20" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="0" cy="25" r="15" fill="#22C55E" />
        </g>
        {/* Jobb serpenyő: Emberi tevékenység (Szürke négyzet) */}
        <g transform="translate(60, -50)">
          <line x1="0" y1="0" x2="0" y2="20" stroke="#94A3B8" strokeWidth="2" />
          <rect x="-12" y="15" width="24" height="20" fill="#64748B" />
        </g>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEFCE8" rx="20" />
      {/* Szántóföld barázdákkal */}
      <g transform="translate(120, 100)">
        <rect x="-100" y="-30" width="200" height="60" fill="#D97706" opacity="0.3" />
        <line x1="-100" y1="-10" x2="100" y2="-10" stroke="#B45309" strokeWidth="2" />
        <line x1="-100" y1="10" x2="100" y2="10" stroke="#B45309" strokeWidth="2" />
        {/* Traktor sziluett */}
        <g transform="translate(40, -15)">
          <rect x="-20" y="-15" width="30" height="20" fill="#EF4444" rx="2" />
          <rect x="0" y="-25" width="15" height="15" fill="#BAE6FD" rx="1" />
          <circle cx="-15" cy="10" r="8" fill="#1E293B" />
          <circle cx="10" cy="10" r="5" fill="#1E293B" />
        </g>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Almafa (Tap-count célpont) */}
      <g transform="translate(120, 110)">
        <rect x="-10" y="-80" width="20" height="80" fill="#78350F" />
        <circle cx="0" cy="-80" r="45" fill="#16A34A" />
        <circle cx="-25" cy="-70" r="30" fill="#15803D" />
        <circle cx="25" cy="-70" r="30" fill="#15803D" />
      </g>
      {/* A tap-count gombok almákat (🍎) fognak ide tenni! */}
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Ökoszisztémák",
    // T1: Alapok
    t1_title: "Az élet hálózata",
    t1_text: "Az ökoszisztéma az élőlények és az élettelen környezetük (víz, levegő, talaj) közössége, ahol mindenki hatással van a másikra.",
    t1_b1: "Az élőlényeknek szükségük van a napfényre és a vízre.",
    t1_b2: "A növények oxigént termelnek az állatoknak.",
    t1_b3: "Ha egy rész megsérül, az egész hálózat veszélybe kerül.",
    t1_inst: "Válogasd szét: Mi él és mi élettelen?",
    t1_bucket_elo: "Élő (Élőlény)",
    t1_bucket_elettelen: "Élettelen környezet",
    t1_item_e1: "Őzike", t1_item_e2: "Fenyőfa",
    t1_item_i1: "Napsugár", t1_item_i2: "Folyóvíz",
    t1_q: "Mit jelent az ökoszisztéma?",
    t1_q_a: "Az élőlények és környezetük kapcsolata", t1_q_b: "Egy nagy bevásárlóközpont", t1_q_c: "Csak az állatok csoportja", t1_q_d: "Egy fajta növény neve",

    // T2: Erdei ökoszisztéma
    t2_title: "Az erdő egyensúlya",
    t2_text: "Az erdőben minden szintnek megvan a maga lakója. A fák védelmet és élelmet nyújtanak az apróbb élőlényeknek.",
    t2_b1: "A lombkorona a madarak otthona.",
    t2_b2: "A cserjeszint bogyóit sok állat szereti.",
    t2_b3: "A talajszinten gombák és bogarak élnek.",
    t2_inst: "Keresd meg az erdő lakóit az ábrán!",
    t2_area_tree: "Lombkorona",
    t2_area_shrub: "Cserjeszint (Bokor)",
    t2_area_floor: "Talaj (Gombák)",
    t2_q: "Ki készíti az erdőben az oxigént?",
    t2_q_a: "A zöld növények és fák", t2_q_b: "A kövek", t2_q_c: "A felhők", t2_q_d: "A vakondok",

    // T3: Környezeti egyensúly (Highlight-text) - Cél: [2, 5]
    t3_title: "Vigyázz az egyensúlyra!",
    t3_text: "A természet egy kényes egyensúlyban működik. Az emberi tevékenység (pl. erdőirtás) felboríthatja ezt a rendet.",
    t3_b1: "Az egyensúly megtartása közös feladatunk.",
    t3_b2: "A védett területeken tilos a vadászat.",
    t3_b3: "Ültessünk fákat a tisztább levegőért!",
    t3_inst: "Keresd meg és jelöld meg a MONDATBAN az egyensúly és a védeni szavakat!",
    t3_tok0: "Fontos", t3_tok1: "az", t3_tok2: "egyensúly,", t3_tok3: "a", t3_tok4: "természetet", t3_tok5: "védeni", t3_tok6: "kell.",
    t3_q: "Mi történik, ha túl sok fát vágnak ki egy erdőben?",
    t3_q_a: "Sok állat elveszíti az otthonát", t3_q_b: "Több lesz az oxigén", t3_q_c: "Mindenki boldogabb lesz", t3_q_d: "Nem történik semmi",

    // T4: Növénytermesztés
    t4_title: "A föld ajándékai",
    t4_text: "Az emberek növényeket termesztenek, hogy élelemhez jussanak. Ehhez jó talajra, vízre és sok gondoskodásra van szükség.",
    t4_b1: "A gazdák szántanak, vetnek és aratnak.",
    t4_b2: "A traktorok segítenek a nehéz munkában.",
    t4_b3: "A zöldségek és gabonák az asztalunkra kerülnek.",
    t4_inst: "Tedd sorba a növénytermesztés lépéseit!",
    t4_w1: "Magvetés", t4_w2: "Öntözés", t4_w3: "Növekedés", t4_w4: "Aratás",
    t4_q: "Mire van szüksége a magnak a földben, hogy csírázni kezdjen?",
    t4_q_a: "Vízre és megfelelő hőmérsékletre", t4_q_b: "Televízióra", t4_q_c: "Sötét festékre", t4_q_d: "Jégkrémre",

    // T5: Alma szüret (Tap-count)
    t5_title: "Itt a szüret ideje!",
    t5_text: "Az almafa roskadozik a piros gyümölcsöktől. Segíts leszedni őket, mielőtt lepotyognának a földre!",
    t5_b1: "Az alma tele van vitaminnal és rosttal.",
    t5_b2: "Együnk minden nap egy almát az egészségünkért!",
    t5_b3: "Nézd meg a fát, és szedd le a termést!",
    t5_inst: "Érett almák vannak a fán! Kattints rájuk és szedj le 5 darabot (🍎) a kosaradba!",
    t5_q: "Miért egészséges gyümölcsöt enni?",
    t5_q_a: "Mert sok bennük a vitamin", t5_q_b: "Mert kék lesz tőle a nyelvünk", t5_q_c: "Mert helyettesíti az alvást", t5_q_d: "Mert nehéz tőlük futni",
  },
  en: {
    explorer_title: "Ecosystems",
    t1_title: "Web of Life", t1_text: "An ecosystem is a community of living things and their non-living environment (water, air, soil).",
    t1_b1: "Living things need sunlight and water.", t1_b2: "Plants produce oxygen for animals.", t1_b3: "If one part is damaged, the whole web is in danger.",
    t1_inst: "Sort them out: Living or Non-living?",
    t1_bucket_elo: "Living", t1_bucket_elettelen: "Non-living",
    t1_item_e1: "Deer", t1_item_e2: "Pine tree",
    t1_item_i1: "Sunlight", t1_item_i2: "River water",
    t1_q: "What does an ecosystem mean?",
    t1_q_a: "Interaction between living things and environment", t1_q_b: "A large mall", t1_q_c: "Just a group of animals", t1_q_d: "The name of a plant",

    t2_title: "Forest Community", t2_text: "In the forest, every level has its residents. Trees provide protection and food for smaller beings.",
    t2_b1: "The canopy is home to birds.", t2_b2: "Many animals love berries from the shrubs.", t2_b3: "Mushrooms and bugs live on the floor.",
    t2_inst: "Find the forest residents on the diagram!",
    t2_area_tree: "Canopy", t2_area_shrub: "Shrub layer", t2_area_floor: "Forest floor",
    t2_q: "Who makes oxygen in the forest?",
    t2_q_a: "Green plants and trees", t2_q_b: "The rocks", t2_q_c: "The clouds", t2_q_d: "Moles",

    t3_title: "Keep the Balance!", t3_text: "Nature works in a delicate balance. Human activities can disturb this order.",
    t3_b1: "Maintaining balance is our shared task.", t3_b2: "Hunting is forbidden in protected areas.", t3_b3: "Plant trees for cleaner air!",
    t3_inst: "Find and mark the words balance and protect in the sentence!",
    t3_tok0: "Keep", t3_tok1: "the", t3_tok2: "balance,", t3_tok3: "we", t3_tok4: "must", t3_tok5: "protect", t3_tok6: "nature.",
    t3_q: "What happens if too many trees are cut down?",
    t3_q_a: "Many animals lose their homes", t3_q_b: "There will be more oxygen", t3_q_c: "Everyone will be happier", t3_q_d: "Nothing happens",

    t4_title: "Gifts of the Soil", t4_text: "People grow plants for food. This requires good soil, water, and care.",
    t4_b1: "Farmers plow, sow, and harvest.", t4_b2: "Tractors help with the heavy work.", t4_b3: "Vegetables and grains end up on our tables.",
    t4_inst: "Put the steps of farming in order!",
    t4_w1: "Sowing", t4_w2: "Watering", t4_w3: "Growing", t4_w4: "Harvesting",
    t4_q: "What does a seed need in the soil to start sprouting?",
    t4_q_a: "Water and right temperature", t4_q_b: "A television", t4_q_c: "Dark paint", t4_q_d: "Ice cream",

    t5_title: "Harvest Time!", t5_text: "The apple tree is full of red fruits. Help pick them before they fall!",
    t5_b1: "Apples are full of vitamins.", t5_b2: "Eat an apple every day for health!", t5_b3: "Check the tree and pick the crop!",
    t5_inst: "Ripe apples are on the tree! Click on them and pick 5 (🍎) for your basket!",
    t5_q: "Why is it healthy to eat fruit?",
    t5_q_a: "Because they have many vitamins", t5_q_b: "Because it turns our tongue blue", t5_q_c: "Because it replaces sleep", t5_q_d: "Because they make it hard to run",
  },
  de: {
    explorer_title: "Ökosysteme",
    t1_title: "Netz des Lebens", t1_text: "Ein Ökosystem ist eine Gemeinschaft von Lebewesen und ihrer Umwelt (Wasser, Luft, Boden).",
    t1_b1: "Lebewesen brauchen Sonnenlicht und Wasser.", t1_b2: "Pflanzen produzieren Sauerstoff.", t1_b3: "Wird ein Teil zerstört, leidet das ganze Netz.",
    t1_inst: "Sortiere: Lebendig oder Unbelebt?",
    t1_bucket_elo: "Lebendig", t1_bucket_elettelen: "Unbelebt",
    t1_item_e1: "Reh", t1_item_e2: "Tanne",
    t1_item_i1: "Sonnenstrahl", t1_item_i2: "Flusswasser",
    t1_q: "Was bedeutet Ökosystem?",
    t1_q_a: "Zusammenspiel von Lebewesen und Umwelt", t1_q_b: "Ein großes Kaufhaus", t1_q_c: "Nur eine Gruppe von Tieren", t1_q_d: "Ein Pflanzenname",

    t2_title: "Waldgemeinschaft", t2_text: "Im Wald hat jede Schicht ihre Bewohner. Bäume bieten Schutz und Nahrung.",
    t2_b1: "Die Krone ist das Zuhause der Vögel.", t2_b2: "Tiere lieben Beeren aus der Strauchschicht.", t2_b3: "Pilze und Käfer leben am Boden.",
    t2_inst: "Finde die Waldbewohner auf dem Bild!",
    t2_area_tree: "Baumkrone", t2_area_shrub: "Strauchschicht", t2_area_floor: "Waldboden",
    t2_q: "Wer macht im Wald den Sauerstoff?",
    t2_q_a: "Grüne Pflanzen und Bäume", t2_q_b: "Die Steine", t2_q_c: "Die Wolken", t2_q_d: "Maulwürfe",

    t3_title: "Gleichgewicht halten!", t3_text: "Die Natur funktioniert im Gleichgewicht. Menschliches Handeln kann dies stören.",
    t3_b1: "Das Gleichgewicht zu halten ist unsere Aufgabe.", t3_b2: "In Schutzgebieten ist Jagd verboten.", t3_b3: "Pflanze Bäume für saubere Luft!",
    t3_inst: "Finde und markiere die Worte Gleichgewicht und schützen im Satz!",
    t3_tok0: "Das", t3_tok1: "gute", t3_tok2: "Gleichgewicht", t3_tok3: "und", t3_tok4: "Natur", t3_tok5: "schützen", t3_tok6: "helfen.",
    t3_q: "Was passiert, wenn zu viele Bäume gefällt werden?",
    t3_q_a: "Viele Tiere verlieren ihr Zuhause", t3_q_b: "Es gibt mehr Sauerstoff", t3_q_c: "Alle sind glücklicher", t3_q_d: "Nichts passiert",

    t4_title: "Geschenke des Bodens", t4_text: "Menschen bauen Pflanzen für Nahrung an. Das braucht Boden, Wasser und Pflege.",
    t4_b1: "Bauern pflügen, säen und ernten.", t4_b2: "Traktoren helfen bei der Arbeit.", t4_b3: "Gemüse und Getreide kommen auf den Tisch.",
    t4_inst: "Bringe die Schritte der Landwirtschaft in die richtige Reihenfolge!",
    t4_w1: "Aussaat", t4_w2: "Bewässerung", t4_w3: "Wachstum", t4_w4: "Ernte",
    t4_q: "Was braucht ein Samen zum Keimen?",
    t4_q_a: "Wasser und Wärme", t4_q_b: "Einen Fernseher", t4_q_c: "Dunkle Farbe", t4_q_d: "Eiscreme",

    t5_title: "Erntezeit!", t5_text: "Der Apfelbaum ist voller roter Früchte. Hilf beim Pflücken!",
    t5_b1: "Äpfel haben viele Vitamine.", t5_b2: "Iss jeden Tag einen Apfel!", t5_b3: "Schau dir den Baum an!",
    t5_inst: "Reife Äpfel am Baum! Klicke auf sie und sammle 5 (🍎)!",
    t5_q: "Warum ist Obst essen gesund?",
    t5_q_a: "Wegen der Vitamine", t5_q_b: "Weil die Zunge blau wird", t5_q_c: "Ersetzt den Schlaf", t5_q_d: "Macht langsam",
  },
  ro: {
    explorer_title: "Ecosisteme",
    t1_title: "Rețeaua vieții", t1_text: "Un ecosistem este o comunitate de ființe vii și mediul lor neviu (apă, aer, sol).",
    t1_b1: "Ființele au nevoie de lumină și apă.", t1_b2: "Plantele produc oxigen pentru animale.", t1_b3: "Dacă o parte e distrusă, întreaga rețea e în pericol.",
    t1_inst: "Sortează: Viu sau Neviu?",
    t1_bucket_elo: "Viu", t1_bucket_elettelen: "Neviu",
    t1_item_e1: "Căprioară", t1_item_e2: "Brad",
    t1_item_i1: "Raza de soare", t1_item_i2: "Apa râului",
    t1_q: "Ce înseamnă ecosistem?",
    t1_q_a: "Relația dintre ființe și mediu", t1_q_b: "Un mall mare", t1_q_c: "Doar un grup de animale", t1_q_d: "Numele unei plante",

    t2_title: "Comunitatea pădurii", t2_text: "În pădure, fiecare nivel are locuitorii săi. Copacii oferă hrană și protecție.",
    t2_b1: "Coronamentul e casa păsărilor.", t2_b2: "Animalele iubesc fructele de pădure.", t2_b3: "Ciupercile și gândacii stau pe sol.",
    t2_inst: "Găsește locuitorii pădurii în imagine!",
    t2_area_tree: "Coronament", t2_area_shrub: "Arbuști", t2_area_floor: "Solul pădurii",
    t2_q: "Cine produce oxigen în pădure?",
    t2_q_a: "Plantele verzi și copacii", t2_q_b: "Pietrele", t2_q_c: "Norii", t2_q_d: "Cârtițele",

    t3_title: "Păstrează echilibrul!", t3_text: "Natura funcționează într-un echilibru delicat. Activitatea umană îl poate strica.",
    t3_b1: "Păstrarea echilibrului este datoria noastră.", t3_b2: "Vânătoarea e interzisă în zone protejate.", t3_b3: "Plantăm copaci pentru aer curat!",
    t3_inst: "Găsește și marchează cuvintele echilibru și proteja în propoziție!",
    t3_tok0: "Păstrează", t3_tok1: "un", t3_tok2: "echilibru,", t3_tok3: "trebuie", t3_tok4: "să", t3_tok5: "proteja", t3_tok6: "natura.",
    t3_q: "Ce se întâmplă dacă tăiem prea mulți copaci?",
    t3_q_a: "Multe animale își pierd casa", t3_q_b: "Va fi mai mult oxigen", t3_q_c: "Toată lumea va fi fericită", t3_q_d: "Nu se întâmplă nimic",

    t4_title: "Darurile pământului", t4_text: "Oamenii cultivă plante pentru hrană. E nevoie de sol bun, apă și grijă.",
    t4_b1: "Fermierii ară, siamănă și recoltează.", t4_b2: "Tractoarele ajută la munca grea.", t4_b3: "Legumele și cerealele ajung pe masa noastră.",
    t4_inst: "Pune etapele agriculturii în ordine!",
    t4_w1: "Semănat", t4_w2: "Irigat", t4_w3: "Creștere", t4_w4: "Recoltat",
    t4_q: "De ce are nevoie sămânța pentru a încolți?",
    t4_q_a: "Apă și căldură", t4_q_b: "Televizor", t4_q_c: "Vopsea neagră", t4_q_d: "Înghețată",

    t5_title: "Timpul recoltei!", t5_text: "Mărul este plin de fructe roșii. Ajută la cules!",
    t5_b1: "Merele au multe vitamine.", t5_b2: "Mănâncă un măr zilnic!", t5_b3: "Uită-te la copac!",
    t5_inst: "Mere coapte în copac! Apasă pe ele și culege 5 (🍎)!",
    t5_q: "De ce e sănătos să mâncăm fructe?",
    t5_q_a: "Pentru că au vitamine", t5_q_b: "Pentru că ne fac limba albastră", t5_q_c: "Înlocuiesc somnul", t5_q_d: "Ne fac lenți",
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
        { id: "elo", label: "t1_bucket_elo" },
        { id: "elettelen", label: "t1_bucket_elettelen" },
      ],
      items: [
        { text: "t1_item_e1", bucketId: "elo" },
        { text: "t1_item_i1", bucketId: "elettelen" },
        { text: "t1_item_e2", bucketId: "elo" },
        { text: "t1_item_i2", bucketId: "elettelen" },
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
      type: "label-diagram",
      areas: [
        { id: "tree",  x: 65, y: 35, label: "t2_area_tree" },
        { id: "shrub", x: 25, y: 70, label: "t2_area_shrub" },
        { id: "floor", x: 45, y: 85, label: "t2_area_floor" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b3",
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
      // HU: [0:Fontos] [1:az] [2:egyensúly,] [3:a] [4:természetet] [5:védeni] [6:kell.]
      // EN: [0:Keep] [1:the] [2:balance,] [3:we] [4:must] [5:protect] [6:nature.]
      // DE: [0:Das] [1:gute] [2:Gleichgewicht] [3:und] [4:Natur] [5:schützen] [6:helfen.]
      // RO: [0:Păstrează] [1:un] [2:echilibru,] [3:trebuie] [4:să] [5:proteja] [6:natura.]
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [2, 5],
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
      tapCount: { emoji: "🍎", count: 5 }, // Alma szüret
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
  icon: "🌳",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const EcosystemExplorer = memo(function EcosystemExplorer({
  color = "#16A34A", // Green-600 az ökoszisztémához
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
      explorerId="sachkunde_k4_ecosystems" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default EcosystemExplorer;
