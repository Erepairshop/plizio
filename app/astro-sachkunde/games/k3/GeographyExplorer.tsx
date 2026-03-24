"use client";
// GeographyExplorer.tsx — Sachkunde Island i6: Water & Geography (K3)
// Topics: 1) Vízterek típusai 2) Az iránytű 3) Térképolvasás 4) A folyó útja 5) Kincskeresés a térképen

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      {/* Tó (Zárt állóvíz) */}
      <g transform="translate(40, 70)">
        <ellipse cx="0" cy="0" rx="25" ry="15" fill="#3B82F6" />
        <path d="M -30,0 C -30,-20 30,-20 30,0 C 30,20 -30,20 -30,0 Z" fill="none" stroke="#22C55E" strokeWidth="4" />
      </g>
      {/* Folyó (Folyóvíz) */}
      <g transform="translate(120, 70)">
        <path d="M -15,-30 Q 0,-10 -15,10 T 0,35" fill="none" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" />
        <path d="M -15,-30 Q 0,-10 -15,10 T 0,35" fill="none" stroke="#60A5FA" strokeWidth="2" />
      </g>
      {/* Óceán/Tenger (Nagy, sós) */}
      <g transform="translate(200, 70)">
        <path d="M -30,10 Q -15,-5 0,10 T 30,10 L 30,30 L -30,30 Z" fill="#0EA5E9" />
        <path d="M -30,-5 Q -15,-20 0,-5 T 30,-5 L 30,30 L -30,30 Z" fill="#0284C7" opacity="0.5" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      <g transform="translate(120, 70)">
        {/* Iránytű alapja */}
        <circle cx="0" cy="0" r="45" fill="#FFFFFF" stroke="#D97706" strokeWidth="4" />
        <circle cx="0" cy="0" r="35" fill="#FEF3C7" opacity="0.5" />
        {/* Mutatók (Piros Észak, Kék Dél) */}
        <polygon points="-5,0 0,-30 5,0" fill="#EF4444" />
        <polygon points="-5,0 0,30 5,0" fill="#3B82F6" />
        {/* Kelet-Nyugat mutatók (Kisebbek) */}
        <polygon points="0,-4 20,0 0,4" fill="#94A3B8" />
        <polygon points="0,-4 -20,0 0,4" fill="#94A3B8" />
        <circle cx="0" cy="0" r="4" fill="#D97706" />
        {/* Betűk helyett csak geometriai jelölők (vonalak a fő irányoknál) */}
        <line x1="0" y1="-45" x2="0" y2="-38" stroke="#D97706" strokeWidth="3" />
        <line x1="0" y1="45" x2="0" y2="38" stroke="#D97706" strokeWidth="3" />
        <line x1="45" y1="0" x2="38" y2="0" stroke="#D97706" strokeWidth="3" />
        <line x1="-45" y1="0" x2="-38" y2="0" stroke="#D97706" strokeWidth="3" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      <rect x="20" y="20" width="200" height="100" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" rx="5" />
      {/* Térkép jelmagyarázat (Legend) */}
      <g transform="translate(60, 45)">
        <rect x="-10" y="-10" width="20" height="20" fill="#22C55E" rx="3" />
        <line x1="20" y1="0" x2="60" y2="0" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="translate(60, 95)">
        <rect x="-10" y="-10" width="20" height="20" fill="#3B82F6" rx="3" />
        <line x1="20" y1="0" x2="60" y2="0" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="translate(150, 45)">
        <polygon points="0,-10 10,10 -10,10" fill="#78350F" />
        <line x1="20" y1="0" x2="60" y2="0" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="translate(150, 95)">
        <rect x="-8" y="-8" width="16" height="16" fill="#EF4444" />
        <line x1="20" y1="0" x2="60" y2="0" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Hegy (Forrás) */}
      <polygon points="20,120 70,20 120,120" fill="#94A3B8" />
      <polygon points="70,20 55,50 85,50" fill="#FFFFFF" />
      {/* Folyó útja */}
      <path d="M 70,50 Q 80,70 60,90 T 120,110 T 180,120 T 240,110 L 240,140 L 0,140 Z" fill="#3B82F6" />
      {/* Tenger (Torkolat) */}
      <path d="M 180,120 Q 210,100 240,110 L 240,140 L 180,140 Z" fill="#0EA5E9" />
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      {/* Kincses Térkép alapja */}
      <rect x="20" y="20" width="200" height="100" fill="#FDE047" stroke="#D97706" strokeWidth="3" rx="10" />
      <path d="M 50,40 Q 80,20 120,60 T 190,40" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M 60,100 Q 100,120 140,80 T 200,90" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="5 5" />
      
      {/* A "❌" jeleket (vagy kincsesládákat) a tap-count interakció rajzolja a gombokra! */}
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Víz és Földrajz",
    // T1: Vízterek
    t1_title: "A Föld vizei",
    t1_text: "Bolygónkon sokféle víz található. Vannak édesvizek (amiket megihatunk, ha tiszták) és hatalmas sós vizek.",
    t1_b1: "A folyó folyamatosan áramlik és mozog.",
    t1_b2: "A tó állóvíz, amit minden oldalról szárazföld vesz körbe.",
    t1_b3: "Az óceán hatalmas és sós vizű.",
    t1_inst: "Párosítsd a vizet a tulajdonságával!",
    t1_l1: "Folyó", t1_r1: "Folyamatosan áramlik",
    t1_l2: "Tó", t1_r2: "Állóvíz, föld veszi körbe",
    t1_l3: "Óceán", t1_r3: "Hatalmas és nagyon sós",
    t1_q: "Milyen víz található az óceánokban?",
    t1_q_a: "Sós víz", t1_q_b: "Édesvíz", t1_q_c: "Szénsavas víz", t1_q_d: "Limonádé",

    // T2: Iránytű (Label-diagram)
    t2_title: "Merre menjünk?",
    t2_text: "Az iránytű segít a tájékozódásban. A mutatója mindig Észak felé mutat, így tudjuk, merre vannak a fő égtájak.",
    t2_b1: "Észak (É) mindig felfelé van a térképeken.",
    t2_b2: "Dél (D) lefelé, Északkal szemben található.",
    t2_b3: "Kelet (K) jobbra, Nyugat (Ny) pedig balra van.",
    t2_inst: "Keresd meg a négy fő égtájat az iránytűn!",
    t2_area_north: "Észak (Fel)",
    t2_area_south: "Dél (Le)",
    t2_area_east: "Kelet (Jobbra)",
    t2_area_west: "Nyugat (Balra)",
    t2_q: "Melyik égtáj felé mutat mindig az iránytű piros mutatója?",
    t2_q_a: "Észak felé", t2_q_b: "Dél felé", t2_q_c: "Kelet felé", t2_q_d: "Nyugat felé",

    // T3: Térképolvasás
    t3_title: "A térkép titkai",
    t3_text: "A térképeken színeket és jeleket használunk, hogy megmutassuk, mi hol található. Ezt jelmagyarázatnak hívjuk.",
    t3_b1: "A kék szín mindig a vizet (folyó, tó, tenger) jelöli.",
    t3_b2: "A zöld a növényzetet, a barna a hegyeket jelenti.",
    t3_b3: "A fekete vagy piros jelek általában utakat és épületeket mutatnak.",
    t3_inst: "Víz vagy Szárazföld? Válogasd szét a térkép színeit!",
    t3_bucket_viz: "Víz (Kék)",
    t3_bucket_fold: "Szárazföld (Zöld/Barna)",
    t3_item_v1: "Kék vonal (Folyó)", t3_item_v2: "Kék folt (Tó)",
    t3_item_f1: "Zöld folt (Erdő)", t3_item_f2: "Barna háromszög (Hegy)",
    t3_q: "Milyen színnel jelölik a tavakat és folyókat a térképen?",
    t3_q_a: "Kékkel", t3_q_b: "Zölddel", t3_q_c: "Pirossal", t3_q_d: "Sárgával",

    // T4: A folyó útja (Word-order)
    t4_title: "A hegyektől a tengerig",
    t4_text: "A folyók a magas hegyekben születnek, és hosszú utat tesznek meg, amíg elérik a tengert.",
    t4_b1: "A víz a forrásból indul.",
    t4_b2: "Először kis patak lesz, majd egyre nagyobb folyóvá válik.",
    t4_b3: "Végül beömlik (torkollik) a tengerbe.",
    t4_inst: "Tedd sorba a víz útját a hegytől a tengerig!",
    t4_w1: "Forrás", t4_w2: "Patak", t4_w3: "Folyó", t4_w4: "Tenger",
    t4_q: "Hol születik meg a folyó vize?",
    t4_q_a: "A forrásnál, általában a hegyekben", t4_q_b: "A tengerben", t4_q_c: "A felhők felett", t4_q_d: "A sivatagban",

    // T5: Kincskeresés (Tap-count)
    t5_title: "Kincskereső térkép",
    t5_text: "A kalózok és a felfedezők térképeket használnak, hogy megtalálják az elrejtett kincseket.",
    t5_b1: "A térképeken a kincset gyakran egy 'X' jelöli.",
    t5_b2: "Kövesd a szaggatott vonalakat!",
    t5_b3: "Vajon hány kincset rejtettünk el ezen a szigeten?",
    t5_inst: "Keresd meg és bökj rá az 5 db '❌' jelre a térképen!",
    t5_q: "Mivel jelölik gyakran a kincset a kalóztérképeken?",
    t5_q_a: "Egy nagy X jellel", t5_q_b: "Egy kék körrel", t5_q_c: "Egy zöld fával", t5_q_d: "Nem jelölik semmivel",
  },
  en: {
    explorer_title: "Water & Geography",
    t1_title: "Types of Water", t1_text: "There are many types of water on our planet. Some are freshwater (which we can drink if clean), and some are huge and salty.",
    t1_b1: "A river flows and moves constantly.", t1_b2: "A lake is still water surrounded by land.", t1_b3: "An ocean is huge and very salty.",
    t1_inst: "Match the water with its description!",
    t1_l1: "River", t1_r1: "Flows constantly",
    t1_l2: "Lake", t1_r2: "Still water, surrounded by land",
    t1_l3: "Ocean", t1_r3: "Huge and very salty",
    t1_q: "What kind of water is found in oceans?",
    t1_q_a: "Salty water", t1_q_b: "Freshwater", t1_q_c: "Sparkling water", t1_q_d: "Lemonade",

    t2_title: "Which Way?", t2_text: "A compass helps us navigate. Its needle always points North, so we can find the other cardinal directions.",
    t2_b1: "North (N) is always at the top of maps.", t2_b2: "South (S) is at the bottom, opposite North.", t2_b3: "East (E) is to the right, West (W) is to the left.",
    t2_inst: "Find the four cardinal directions on the compass!",
    t2_area_north: "North (Top)", t2_area_south: "South (Bottom)", t2_area_east: "East (Right)", t2_area_west: "West (Left)",
    t2_q: "Which direction does the red needle of a compass always point to?",
    t2_q_a: "North", t2_q_b: "South", t2_q_c: "East", t2_q_d: "West",

    t3_title: "Map Secrets", t3_text: "Maps use colors and symbols to show where things are. This is called a legend or key.",
    t3_b1: "Blue always shows water (rivers, lakes, seas).", t3_b2: "Green means vegetation, brown means mountains.", t3_b3: "Black or red marks usually show roads and buildings.",
    t3_inst: "Water or Land? Sort the map colors!",
    t3_bucket_viz: "Water (Blue)", t3_bucket_fold: "Land (Green/Brown)",
    t3_item_v1: "Blue line (River)", t3_item_v2: "Blue shape (Lake)",
    t3_item_f1: "Green shape (Forest)", t3_item_f2: "Brown triangle (Mountain)",
    t3_q: "What color is used to show lakes and rivers on a map?",
    t3_q_a: "Blue", t3_q_b: "Green", t3_q_c: "Red", t3_q_d: "Yellow",

    t4_title: "The River's Journey", t4_text: "Rivers are born high in the mountains and travel a long way until they reach the sea.",
    t4_b1: "The water starts from a spring.", t4_b2: "First it becomes a small stream, then a larger river.", t4_b3: "Finally, it flows into the sea.",
    t4_inst: "Order the journey of water from the mountain to the sea!",
    t4_w1: "Spring", t4_w2: "Stream", t4_w3: "River", t4_w4: "Sea",
    t4_q: "Where is a river usually born?",
    t4_q_a: "At a spring, usually in the mountains", t4_q_b: "In the sea", t4_q_c: "Above the clouds", t4_q_d: "In the desert",

    t5_title: "Treasure Hunt", t5_text: "Pirates and explorers use maps to find hidden treasures.",
    t5_b1: "On maps, treasure is often marked with an 'X'.", t5_b2: "Follow the dotted lines!", t5_b3: "How many treasures are hidden on this island?",
    t5_inst: "Find and tap the 5 '❌' marks on the map!",
    t5_q: "How is treasure often marked on a pirate map?",
    t5_q_a: "With a big X", t5_q_b: "With a blue circle", t5_q_c: "With a green tree", t5_q_d: "It's not marked at all",
  },
  de: {
    explorer_title: "Wasser & Geografie",
    t1_title: "Arten von Gewässern", t1_text: "Es gibt viele Arten von Wasser auf der Erde. Süßwasser (das wir trinken können) und riesiges Salzwasser.",
    t1_b1: "Ein Fluss fließt und bewegt sich ständig.", t1_b2: "Ein See ist stilles Wasser, umgeben von Land.", t1_b3: "Ein Ozean ist riesig und sehr salzig.",
    t1_inst: "Verbinde das Gewässer mit seiner Eigenschaft!",
    t1_l1: "Fluss", t1_r1: "Fließt ständig",
    t1_l2: "See", t1_r2: "Stilles Wasser, von Land umgeben",
    t1_l3: "Ozean", t1_r3: "Riesig und sehr salzig",
    t1_q: "Welches Wasser findet man in Ozeanen?",
    t1_q_a: "Salzwasser", t1_q_b: "Süßwasser", t1_q_c: "Sprudelwasser", t1_q_d: "Limonade",

    t2_title: "Welche Richtung?", t2_text: "Der Kompass hilft uns bei der Orientierung. Seine Nadel zeigt immer nach Norden.",
    t2_b1: "Norden (N) ist auf Karten immer oben.", t2_b2: "Süden (S) ist unten, gegenüber von Norden.", t2_b3: "Osten (O) ist rechts, Westen (W) ist links.",
    t2_inst: "Finde die vier Himmelsrichtungen auf dem Kompass!",
    t2_area_north: "Norden (Oben)", t2_area_south: "Süden (Unten)", t2_area_east: "Osten (Rechts)", t2_area_west: "Westen (Links)",
    t2_q: "In welche Richtung zeigt die rote Nadel des Kompasses immer?",
    t2_q_a: "Nach Norden", t2_q_b: "Nach Süden", t2_q_c: "Nach Osten", t2_q_d: "Nach Westen",

    t3_title: "Karten lesen", t3_text: "Karten verwenden Farben und Symbole, um zu zeigen, wo Dinge sind. Das nennt man Legende.",
    t3_b1: "Blau zeigt immer Wasser (Flüsse, Seen, Meere).", t3_b2: "Grün bedeutet Pflanzen, Braun bedeutet Berge.", t3_b3: "Schwarze oder rote Zeichen zeigen oft Straßen und Gebäude.",
    t3_inst: "Wasser oder Land? Sortiere die Kartenfarben!",
    t3_bucket_viz: "Wasser (Blau)", t3_bucket_fold: "Land (Grün/Braun)",
    t3_item_v1: "Blaue Linie (Fluss)", t3_item_v2: "Blauer Fleck (See)",
    t3_item_f1: "Grüner Fleck (Wald)", t3_item_f2: "Braunes Dreieck (Berg)",
    t3_q: "Mit welcher Farbe werden Seen und Flüsse auf einer Karte dargestellt?",
    t3_q_a: "Blau", t3_q_b: "Grün", t3_q_c: "Rot", t3_q_d: "Gelb",

    t4_title: "Die Reise des Flusses", t4_text: "Flüsse entstehen hoch in den Bergen und legen einen weiten Weg zurück, bis sie das Meer erreichen.",
    t4_b1: "Das Wasser beginnt an einer Quelle.", t4_b2: "Zuerst wird es ein Bach, dann ein großer Fluss.", t4_b3: "Am Ende fließt es ins Meer.",
    t4_inst: "Bringe den Weg des Wassers vom Berg zum Meer in die richtige Reihenfolge!",
    t4_w1: "Quelle", t4_w2: "Bach", t4_w3: "Fluss", t4_w4: "Meer",
    t4_q: "Wo entsteht ein Fluss meistens?",
    t4_q_a: "An einer Quelle, meistens in den Bergen", t4_q_b: "Im Meer", t4_q_c: "Über den Wolken", t4_q_d: "In der Wüste",

    t5_title: "Schatzsuche", t5_text: "Piraten und Entdecker nutzen Karten, um versteckte Schätze zu finden.",
    t5_b1: "Auf Karten wird ein Schatz oft mit einem 'X' markiert.", t5_b2: "Folge den gestrichelten Linien!", t5_b3: "Wie viele Schätze sind hier versteckt?",
    t5_inst: "Finde und tippe auf die 5 '❌'-Markierungen auf der Karte!",
    t5_q: "Womit wird ein Schatz oft auf einer Piratenkarte markiert?",
    t5_q_a: "Mit einem großen X", t5_q_b: "Mit einem blauen Kreis", t5_q_c: "Mit einem grünen Baum", t5_q_d: "Gar nicht",
  },
  ro: {
    explorer_title: "Apă și Geografie",
    t1_title: "Tipuri de ape", t1_text: "Pe planeta noastră există multe feluri de apă. Unele sunt dulci (pe care le putem bea), altele sunt uriașe și sărate.",
    t1_b1: "Râul curge și se mișcă constant.", t1_b2: "Lacul este o apă stătătoare, înconjurată de uscat.", t1_b3: "Oceanul este uriaș și foarte sărat.",
    t1_inst: "Potrivește apa cu descrierea ei!",
    t1_l1: "Râu", t1_r1: "Curge constant",
    t1_l2: "Lac", t1_r2: "Apă stătătoare, înconjurată de pământ",
    t1_l3: "Ocean", t1_r3: "Uriaș și foarte sărat",
    t1_q: "Ce fel de apă găsim în oceane?",
    t1_q_a: "Apă sărată", t1_q_b: "Apă dulce", t1_q_c: "Apă minerală", t1_q_d: "Limonadă",

    t2_title: "Încotro mergem?", t2_text: "Busola ne ajută să ne orientăm. Acul ei arată mereu spre Nord, așa că putem găsi celelalte puncte cardinale.",
    t2_b1: "Nordul (N) este mereu în partea de sus a hărților.", t2_b2: "Sudul (S) este jos, opus Nordului.", t2_b3: "Estul (E) este la dreapta, Vestul (V) la stânga.",
    t2_inst: "Găsește cele patru puncte cardinale pe busolă!",
    t2_area_north: "Nord (Sus)", t2_area_south: "Sud (Jos)", t2_area_east: "Est (Dreapta)", t2_area_west: "Vest (Stânga)",
    t2_q: "Spre ce direcție arată mereu acul roșu al unei busole?",
    t2_q_a: "Spre Nord", t2_q_b: "Spre Sud", t2_q_c: "Spre Est", t2_q_d: "Spre Vest",

    t3_title: "Secretele hărților", t3_text: "Hărțile folosesc culori și simboluri pentru a arăta unde sunt lucrurile. Asta se numește legendă.",
    t3_b1: "Culoarea albastră arată mereu apa (râuri, lacuri, mări).", t3_b2: "Verdele înseamnă plante, maro înseamnă munți.", t3_b3: "Semnele negre sau roșii arată drumuri și clădiri.",
    t3_inst: "Apă sau Uscat? Sortează culorile de pe hartă!",
    t3_bucket_viz: "Apă (Albastru)", t3_bucket_fold: "Uscat (Verde/Maro)",
    t3_item_v1: "Linie albastră (Râu)", t3_item_v2: "Pată albastră (Lac)",
    t3_item_f1: "Pată verde (Pădure)", t3_item_f2: "Triunghi maro (Munte)",
    t3_q: "Cu ce culoare sunt desenate lacurile și râurile pe o hartă?",
    t3_q_a: "Cu albastru", t3_q_b: "Cu verde", t3_q_c: "Cu roșu", t3_q_d: "Cu galben",

    t4_title: "Călătoria râului", t4_text: "Râurile se nasc sus în munți și călătoresc mult până ajung la mare.",
    t4_b1: "Apa pornește de la un izvor.", t4_b2: "Mai întâi devine un pârâu mic, apoi un râu mare.", t4_b3: "La final, se varsă în mare.",
    t4_inst: "Pune în ordine călătoria apei de la munte la mare!",
    t4_w1: "Izvor", t4_w2: "Pârâu", t4_w3: "Râu", t4_w4: "Mare",
    t4_q: "Unde se naște de obicei un râu?",
    t4_q_a: "La un izvor, de obicei în munți", t4_q_b: "În mare", t4_q_c: "Deasupra norilor", t4_q_d: "În deșert",

    t5_title: "Vânătoarea de comori", t5_text: "Pirații și exploratorii folosesc hărți pentru a găsi comori ascunse.",
    t5_b1: "Pe hărți, comoara este adesea marcată cu un 'X'.", t5_b2: "Urmărește liniile punctate!", t5_b3: "Câte comori sunt ascunse pe această insulă?",
    t5_inst: "Găsește și apasă pe cele 5 semne '❌' de pe hartă!",
    t5_q: "Cum este adesea marcată o comoară pe o hartă a piraților?",
    t5_q_a: "Cu un X mare", t5_q_b: "Cu un cerc albastru", t5_q_c: "Cu un copac verde", t5_q_d: "Nu este marcată deloc",
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
      type: "label-diagram",
      areas: [
        { id: "north", x: 50, y: 15, label: "t2_area_north" },
        { id: "south", x: 50, y: 85, label: "t2_area_south" },
        { id: "east",  x: 85, y: 50, label: "t2_area_east" },
        { id: "west",  x: 15, y: 50, label: "t2_area_west" },
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
      type: "drag-to-bucket",
      buckets: [
        { id: "viz", label: "t3_bucket_viz" },
        { id: "fold", label: "t3_bucket_fold" },
      ],
      items: [
        { text: "t3_item_v1", bucketId: "viz" },
        { text: "t3_item_f1", bucketId: "fold" },
        { text: "t3_item_v2", bucketId: "viz" },
        { text: "t3_item_f2", bucketId: "fold" },
      ],
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
      tapCount: { emoji: "❌", count: 5 }, // Kincskeresés!
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
  icon: "🗺️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const GeographyExplorer = memo(function GeographyExplorer({
  color = "#0284C7", // Ocean Blue a földrajz és víz miatt
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
      explorerId="sachkunde_k3_geography" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default GeographyExplorer;
