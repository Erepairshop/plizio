"use client";
// ScienceExperimentsExplorer.tsx — Sachkunde Island i8: Science Experiments (K2)
// Topics: 1) Anyagtulajdonságok 2) Mágnesség 3) Úszik vagy süllyed 4) Oldódás 5) Kísérlet lépései

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
import { 
  MaterialPropertiesSvg, 
  MagnetismSvg, 
  DissolvingSvg, 
  ExperimentStepsSvg 
} from "@/app/astro-sachkunde/svg/k2/KidsScienceSvg";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Üvegedény */}
      <path d="M 70,30 L 70,110 A 10,10 0 0,0 80,120 L 160,120 A 10,10 0 0,0 170,110 L 170,30" fill="none" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      {/* Víz */}
      <path d="M 72,60 L 168,60 L 168,110 A 8,8 0 0,1 160,118 L 80,118 A 8,8 0 0,1 72,110 Z" fill="#3B82F6" opacity="0.3" />
      {/* Hullámvonal a víz tetején */}
      <path d="M 72,60 Q 90,65 120,60 T 168,60" fill="none" stroke="#60A5FA" strokeWidth="2" />
      
      {/* Fadarab (Úszik) */}
      <rect x="90" y="45" width="40" height="20" rx="3" fill="#B45309" />
      <line x1="95" y1="50" x2="125" y2="50" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
      <line x1="95" y1="58" x2="115" y2="58" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />

      {/* Kő (Elmerül) */}
      <polygon points="135,115 145,100 160,105 155,118" fill="#64748B" />
      <polygon points="140,110 145,105 150,112" fill="#475569" />

      {/* Buborékok */}
      <circle cx="150" cy="85" r="3" fill="#BAE6FD" />
      <circle cx="145" cy="70" r="2" fill="#BAE6FD" />
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Tudományos Kísérletek",
    // T1: Anyagtulajdonságok
    t1_title: "Milyen az anyaga?",
    t1_text: "A tárgyak különböző anyagokból készülnek. Egy kísérletben megvizsgálhatjuk a tulajdonságaikat: kemény vagy puha, átlátszó vagy nem?",
    t1_b1: "A fa és a fém kemény anyagok.",
    t1_b2: "A szivacs és a vatta puha, könnyen összenyomható.",
    t1_b3: "Az üveg átlátszó, a fa nem ereszti át a fényt.",
    t1_inst: "Párosítsd az anyagot a tulajdonságával!",
    t1_l1: "Üveg", t1_r1: "Átlátszó és törékeny",
    t1_l2: "Fa", t1_r2: "Kemény és nem átlátszó",
    t1_l3: "Szivacs", t1_r3: "Puha és összenyomható",
    t1_q: "Milyen tulajdonsága van az üvegnek az ablakban?",
    t1_q_a: "Átlátszó, átengedi a fényt", t1_q_b: "Puha és összenyomható", t1_q_c: "Rugalmas", t1_q_d: "Melegít",

    // T2: Mágnesség
    t2_title: "A varázslatos mágnes",
    t2_text: "A mágnesnek láthatatlan ereje van! Képes magához vonzani bizonyos anyagokat, míg másokat egyáltalán nem.",
    t2_b1: "A mágnes vonzza a vasból készült tárgyakat (pl. szög, gémkapocs).",
    t2_b2: "A fát, a műanyagot és a papírt NEM vonzza a mágnes.",
    t2_b3: "A mágnesnek két pólusa van: északi és déli.",
    t2_inst: "Melyiket vonzza a mágnes? Válogasd szét!",
    t2_bucket_vonz: "Vonzza a mágnes",
    t2_bucket_nemvonz: "NEM vonzza",
    t2_item_v1: "Vasszög", t2_item_v2: "Fém gémkapocs",
    t2_item_n1: "Fakocka", t2_item_n2: "Műanyag kanál",
    t2_q: "Mit csinál a mágnes egy műanyag legókockával?",
    t2_q_a: "Semmit, nem vonzza", t2_q_b: "Magához vonzza", t2_q_c: "Eltolja magától", t2_q_d: "Vassá változtatja",

    // T3: Úszik vagy elmerül
    t3_title: "Úszik vagy süllyed?",
    t3_text: "Ha dolgokat dobunk a vízbe, érdekes dolog történik. Van, ami a víz tetején marad, és van, ami lepottyan az aljára.",
    t3_b1: "A nehéz és tömör dolgok (kő, vas) elmerülnek.",
    t3_b2: "A könnyű dolgok (fa, műanyag, parafa) úsznak a vízen.",
    t3_b3: "A levegővel teli lufi mindig a felszínen marad.",
    t3_inst: "Egészítsd ki a mondatot!",
    t3_gap_sentence: "Ha egy nehéz kavicsot dobunk a tóba, az egyből {gap} a víz aljára.",
    t3_c1: "elsüllyed", t3_c2: "felúszik", t3_c3: "elrepül",
    t3_q: "Mi történik egy fadarabbal, ha vízbe tesszük?",
    t3_q_a: "Úszik a víz tetején", t3_q_b: "Elsüllyed", t3_q_c: "Felrobban", t3_q_d: "Elolvad",

    // T4: Oldódás
    t4_title: "Eltűnik a vízben?",
    t4_text: "Ha cukrot vagy sót keverünk a vízbe, egy idő után nem látjuk őket. De a víz íze megváltozik! Ezt hívjuk oldódásnak.",
    t4_b1: "A só és a cukor feloldódik a vízben.",
    t4_b2: "A homok vagy a kavics NEM oldódik fel.",
    t4_b3: "Ha kevergetjük a kanállal, gyorsabban feloldódik.",
    t4_inst: "Keresd meg a kísérlet kellékeit a képen!",
    t4_area_water: "Pohár víz",
    t4_area_sugar: "Cukor",
    t4_area_spoon: "Kanál (keveréshez)",
    t4_q: "Mi történik a kristálycukorral, ha belekeverjük a meleg teába?",
    t4_q_a: "Feloldódik (eltűnik benne)", t4_q_b: "Kővé válik", t4_q_c: "Megnő", t4_q_d: "Elszíneződik zöldre",

    // T5: Kísérlet lépései
    t5_title: "Hogyan kísérletezünk?",
    t5_text: "A tudósok sosem találgatnak összevissza. Egy kísérletnek szigorú szabályai és lépései vannak!",
    t5_b1: "1. Először felteszünk egy kérdést (Pl. Úszik a fa?).",
    t5_b2: "2. Tippelünk egyet (Szerintem úszni fog).",
    t5_b3: "3. Kipróbáljuk (Bedobjuk a vízbe) és megnézzük az Eredményt.",
    t5_inst: "Tedd helyes sorrendbe a tudományos kísérlet lépéseit!",
    t5_w1: "Kérdés", t5_w2: "Tippelés (Hipotézis)", t5_w3: "Kipróbálás (Kísérlet)", t5_w4: "Eredmény",
    t5_q: "Mi a legelső lépés egy tudományos kísérletben?",
    t5_q_a: "Felteszünk egy kérdést", t5_q_b: "Összetörjük az üveget", t5_q_c: "Leírjuk az eredményt", t5_q_d: "Elkezdünk sírni",
  },
  en: {
    explorer_title: "Science Experiments",
    t1_title: "Material Properties", t1_text: "Objects are made of different materials. In an experiment, we can check if they are hard, soft, or transparent.",
    t1_b1: "Wood and metal are hard materials.", t1_b2: "Sponges and cotton are soft and squashy.", t1_b3: "Glass is transparent, wood blocks light.",
    t1_inst: "Match the material with its property!",
    t1_l1: "Glass", t1_r1: "Transparent and fragile",
    t1_l2: "Wood", t1_r2: "Hard and not transparent",
    t1_l3: "Sponge", t1_r3: "Soft and squashy",
    t1_q: "What is a property of a window glass?",
    t1_q_a: "It is transparent and lets light through", t1_q_b: "It is soft and squashy", t1_q_c: "It is flexible", t1_q_d: "It warms you",

    t2_title: "The Magic Magnet", t2_text: "Magnets have invisible power! They can attract certain materials, while ignoring others completely.",
    t2_b1: "Magnets attract things made of iron (like nails, paper clips).", t2_b2: "Wood, plastic, and paper are NOT attracted to magnets.", t2_b3: "A magnet has two poles: North and South.",
    t2_inst: "What does the magnet attract? Sort them out!",
    t2_bucket_vonz: "Attracts it",
    t2_bucket_nemvonz: "Does NOT attract",
    t2_item_v1: "Iron nail", t2_item_v2: "Metal paper clip",
    t2_item_n1: "Wooden block", t2_item_n2: "Plastic spoon",
    t2_q: "What does a magnet do to a plastic Lego brick?",
    t2_q_a: "Nothing, it does not attract it", t2_q_b: "Attracts it", t2_q_c: "Pushes it away", t2_q_d: "Turns it into iron",

    t3_title: "Sink or Float?", t3_text: "If we drop things into water, interesting things happen. Some stay on top, some drop to the bottom.",
    t3_b1: "Heavy, dense things (stone, iron) sink.", t3_b2: "Light things (wood, plastic, cork) float on water.", t3_b3: "A balloon full of air always stays on the surface.",
    t3_inst: "Fill in the missing word!",
    t3_gap_sentence: "If we drop a heavy pebble into the lake, it instantly {gap} to the bottom.",
    t3_c1: "sinks", t3_c2: "floats up", t3_c3: "flies away",
    t3_q: "What happens to a piece of wood when put in water?",
    t3_q_a: "It floats on the water", t3_q_b: "It sinks", t3_q_c: "It explodes", t3_q_d: "It melts",

    t4_title: "Does it dissolve?", t4_text: "If we mix sugar or salt into water, we can't see them after a while. But the water's taste changes! This is dissolving.",
    t4_b1: "Salt and sugar dissolve in water.", t4_b2: "Sand and pebbles do NOT dissolve.", t4_b3: "If we stir it with a spoon, it dissolves faster.",
    t4_inst: "Find the tools for the experiment in the picture!",
    t4_area_water: "Glass of water",
    t4_area_sugar: "Sugar",
    t4_area_spoon: "Spoon (for stirring)",
    t4_q: "What happens to sugar crystals when stirred into hot tea?",
    t4_q_a: "It dissolves (disappears inside)", t4_q_b: "Turns into stone", t4_q_c: "Grows bigger", t4_q_d: "Turns green",

    t5_title: "Experiment Steps", t5_text: "Scientists never just guess wildly. An experiment has strict rules and steps!",
    t5_b1: "1. First we ask a Question (Does wood float?).", t5_b2: "2. We make a Guess (Hypothesis).", t5_b3: "3. We Test it and look at the Result.",
    t5_inst: "Put the steps of a science experiment in the correct order!",
    t5_w1: "Question", t5_w2: "Guess (Hypothesis)", t5_w3: "Test (Experiment)", t5_w4: "Result",
    t5_q: "What is the very first step in a science experiment?",
    t5_q_a: "We ask a question", t5_q_b: "We break the glass", t5_q_c: "We write the result", t5_q_d: "We start crying",
  },
  de: {
    explorer_title: "Wissenschaftliche Experimente",
    t1_title: "Eigenschaften von Materialien", t1_text: "Dinge bestehen aus verschiedenen Materialien. Wir können testen, ob sie hart, weich oder durchsichtig sind.",
    t1_b1: "Holz und Metall sind hart.", t1_b2: "Schwamm und Watte sind weich und lassen sich zusammendrücken.", t1_b3: "Glas ist durchsichtig, Holz lässt kein Licht durch.",
    t1_inst: "Verbinde das Material mit seiner Eigenschaft!",
    t1_l1: "Glas", t1_r1: "Durchsichtig und zerbrechlich",
    t1_l2: "Holz", t1_r2: "Hart und undurchsichtig",
    t1_l3: "Schwamm", t1_r3: "Weich und zusammendrückbar",
    t1_q: "Welche Eigenschaft hat Fensterglas?",
    t1_q_a: "Es ist durchsichtig und lässt Licht durch", t1_q_b: "Es ist weich", t1_q_c: "Es ist biegbar", t1_q_d: "Es wärmt dich",

    t2_title: "Der magische Magnet", t2_text: "Magnete haben unsichtbare Kräfte! Sie können bestimmte Materialien anziehen, andere nicht.",
    t2_b1: "Magnete ziehen Dinge aus Eisen an (z.B. Nägel, Büroklammern).", t2_b2: "Holz, Plastik und Papier werden NICHT angezogen.", t2_b3: "Ein Magnet hat zwei Pole: Nord und Süd.",
    t2_inst: "Was zieht der Magnet an? Sortiere!",
    t2_bucket_vonz: "Wird angezogen",
    t2_bucket_nemvonz: "NICHT angezogen",
    t2_item_v1: "Eisennagel", t2_item_v2: "Büroklammer",
    t2_item_n1: "Holzblock", t2_item_n2: "Plastiklöffel",
    t2_q: "Was macht ein Magnet mit einem Legostein aus Plastik?",
    t2_q_a: "Nichts, er zieht ihn nicht an", t2_q_b: "Zieht ihn an", t2_q_c: "Stößt ihn weg", t2_q_d: "Macht ihn zu Eisen",

    t3_title: "Schwimmen oder Sinken?", t3_text: "Wenn wir Dinge ins Wasser werfen, bleiben manche oben, andere fallen auf den Grund.",
    t3_b1: "Schwere, dichte Dinge (Stein, Eisen) sinken.", t3_b2: "Leichte Dinge (Holz, Plastik, Kork) schwimmen.", t3_b3: "Ein Ballon voller Luft bleibt immer oben.",
    t3_inst: "Ergänze den Satz!",
    t3_gap_sentence: "Wenn wir einen schweren Kiesel in den See werfen, {gap} er sofort auf den Grund.",
    t3_c1: "sinkt", t3_c2: "schwimmt", t3_c3: "fliegt",
    t3_q: "Was passiert mit einem Stück Holz im Wasser?",
    t3_q_a: "Es schwimmt auf dem Wasser", t3_q_b: "Es sinkt", t3_q_c: "Es explodiert", t3_q_d: "Es schmilzt",

    t4_title: "Löst es sich auf?", t4_text: "Wenn wir Zucker oder Salz in Wasser rühren, sehen wir sie nicht mehr. Aber das Wasser schmeckt anders!",
    t4_b1: "Salz und Zucker lösen sich in Wasser auf.", t4_b2: "Sand und Steine lösen sich NICHT auf.", t4_b3: "Wenn wir mit dem Löffel rühren, geht es schneller.",
    t4_inst: "Finde die Teile für das Experiment im Bild!",
    t4_area_water: "Glas mit Wasser",
    t4_area_sugar: "Zucker",
    t4_area_spoon: "Löffel (zum Rühren)",
    t4_q: "Was passiert mit Zucker, wenn man ihn in heißen Tee rührt?",
    t4_q_a: "Er löst sich auf", t4_q_b: "Er wird zu Stein", t4_q_c: "Er wird größer", t4_q_d: "Er wird grün",

    t5_title: "Schritte eines Experiments", t5_text: "Wissenschaftler raten nicht einfach so. Ein Experiment hat strenge Regeln!",
    t5_b1: "1. Zuerst stellen wir eine Frage.", t5_b2: "2. Wir geben einen Tipp ab (Hypothese).", t5_b3: "3. Wir testen es und schauen uns das Ergebnis an.",
    t5_inst: "Bringe die Schritte in die richtige Reihenfolge!",
    t5_w1: "Frage", t5_w2: "Tipp (Hypothese)", t5_w3: "Test (Experiment)", t5_w4: "Ergebnis",
    t5_q: "Was ist der allererste Schritt bei einem Experiment?",
    t5_q_a: "Eine Frage stellen", t5_q_b: "Das Glas kaputtmachen", t5_q_c: "Das Ergebnis aufschreiben", t5_q_d: "Anfangen zu weinen",
  },
  ro: {
    explorer_title: "Experimente Științifice",
    t1_title: "Proprietățile materialelor", t1_text: "Obiectele sunt făcute din diferite materiale. Putem testa dacă sunt tari, moi sau transparente.",
    t1_b1: "Lemnul și metalul sunt materiale tari.", t1_b2: "Buretele și vata sunt moi și se pot strânge.", t1_b3: "Sticla este transparentă, lemnul nu lasă lumina să treacă.",
    t1_inst: "Potrivește materialul cu proprietatea sa!",
    t1_l1: "Sticlă", t1_r1: "Transparentă și fragilă",
    t1_l2: "Lemn", t1_r2: "Tare și netransparent",
    t1_l3: "Burete", t1_r3: "Moale și ușor de strâns",
    t1_q: "Ce proprietate are sticla de la fereastră?",
    t1_q_a: "Este transparentă și lasă lumina să treacă", t1_q_b: "Este moale", t1_q_c: "Este flexibilă", t1_q_d: "Te încălzește",

    t2_title: "Magnetul magic", t2_text: "Magneții au o putere invizibilă! Pot atrage anumite materiale, în timp ce pe altele le ignoră.",
    t2_b1: "Magnetul atrage lucruri din fier (ex. cuie, agrafe de birou).", t2_b2: "Lemnul, plasticul și hârtia NU sunt atrase de magnet.", t2_b3: "Un magnet are doi poli: Nord și Sud.",
    t2_inst: "Pe care îl atrage magnetul? Sortează-le!",
    t2_bucket_vonz: "Îl atrage",
    t2_bucket_nemvonz: "NU îl atrage",
    t2_item_v1: "Cui din fier", t2_item_v2: "Agrafă metalică",
    t2_item_n1: "Cub de lemn", t2_item_n2: "Lingură de plastic",
    t2_q: "Ce face magnetul cu o piesă Lego din plastic?",
    t2_q_a: "Nimic, nu o atrage", t2_q_b: "O atrage", t2_q_c: "O împinge", t2_q_d: "O transformă în fier",

    t3_title: "Plutește sau se scufundă?", t3_text: "Dacă aruncăm lucruri în apă, unele rămân la suprafață, altele cad la fund.",
    t3_b1: "Lucrurile grele (piatră, fier) se scufundă.", t3_b2: "Lucrurile ușoare (lemn, plastic, dop de plută) plutesc.", t3_b3: "Un balon plin cu aer rămâne mereu la suprafață.",
    t3_inst: "Completează propoziția!",
    t3_gap_sentence: "Dacă aruncăm o pietricică grea în lac, ea {gap} imediat la fund.",
    t3_c1: "se scufundă", t3_c2: "plutește", t3_c3: "zboară",
    t3_q: "Ce se întâmplă cu o bucată de lemn în apă?",
    t3_q_a: "Plutește pe apă", t3_q_b: "Se scufundă", t3_q_c: "Explodează", t3_q_d: "Se topește",

    t4_title: "Se dizolvă?", t4_text: "Dacă amestecăm zahăr sau sare în apă, după un timp nu le mai vedem. Dar gustul apei se schimbă! Asta este dizolvarea.",
    t4_b1: "Sarea și zahărul se dizolvă în apă.", t4_b2: "Nisipul și pietrele NU se dizolvă.", t4_b3: "Dacă amestecăm cu o lingură, se dizolvă mai repede.",
    t4_inst: "Găsește uneltele pentru experiment în imagine!",
    t4_area_water: "Pahar cu apă",
    t4_area_sugar: "Zahăr",
    t4_area_spoon: "Lingură (pentru amestecat)",
    t4_q: "Ce se întâmplă cu zahărul când îl amestecăm în ceaiul fierbinte?",
    t4_q_a: "Se dizolvă (dispare înăuntru)", t4_q_b: "Devine piatră", t4_q_c: "Crește", t4_q_d: "Se face verde",

    t5_title: "Pașii unui experiment", t5_text: "Oamenii de știință nu ghicesc la întâmplare. Un experiment are reguli și pași exacți!",
    t5_b1: "1. Prima dată punem o Întrebare (Plutește lemnul?).", t5_b2: "2. Facem o presupunere (Ipoteză).", t5_b3: "3. Testăm și analizăm Rezultatul.",
    t5_inst: "Pune pașii unui experiment științific în ordinea corectă!",
    t5_w1: "Întrebare", t5_w2: "Presupunere (Ipoteză)", t5_w3: "Testare (Experiment)", t5_w4: "Rezultat",
    t5_q: "Care este primul pas într-un experiment științific?",
    t5_q_a: "Punem o întrebare", t5_q_b: "Spargem paharul", t5_q_c: "Scriem rezultatul", t5_q_d: "Începem să plângem",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <MaterialPropertiesSvg lang={lang} />,
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
    svg: (lang) => <MagnetismSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "vonz", label: "t2_bucket_vonz" },
        { id: "nemvonz", label: "t2_bucket_nemvonz" },
      ],
      items: [
        { text: "t2_item_v1", bucketId: "vonz" },
        { text: "t2_item_n1", bucketId: "nemvonz" },
        { text: "t2_item_v2", bucketId: "vonz" },
        { text: "t2_item_n2", bucketId: "nemvonz" },
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
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0,
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
    svg: (lang) => <DissolvingSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "water", x: 50, y: 70, label: "t4_area_water" },
        { id: "spoon", x: 65, y: 20, label: "t4_area_spoon" },
        { id: "sugar", x: 20, y: 80, label: "t4_area_sugar" },
      ],
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
    svg: (lang) => <ExperimentStepsSvg lang={lang} />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "word-order",
      words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"],
      correctOrder: [0, 1, 2, 3],
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
  icon: "🧲",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ScienceExperimentsExplorer = memo(function ScienceExperimentsExplorer({
  color = "#06B6D4", // Cyan-500 a tudományhoz
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
      grade={2} 
      explorerId="sachkunde_k2_science_experiments" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default ScienceExperimentsExplorer;
