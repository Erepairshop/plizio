"use client";
// WaterExplorer.tsx — Sachkunde Island i5: Water (K2)
// Topics: 1) Halmazállapotok 2) Vízkörzés 3) Hol találunk vizet? 4) Takarékoskodás 5) Összefoglaló

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      {/* Jégkocka (Szilárd) */}
      <g transform="translate(50, 70)">
        <rect x="-15" y="-15" width="30" height="30" fill="#BAE6FD" stroke="#3B82F6" strokeWidth="2" rx="4" />
        <path d="M -10,-10 L 5,-10 L 5,5" fill="none" stroke="#E0F2FE" strokeWidth="2" />
      </g>
      {/* Vízcsepp (Folyékony) */}
      <g transform="translate(120, 75)">
        <path d="M 0,-20 Q 15,0 15,10 A 15,15 0 0,1 -15,10 Q -15,0 0,-20 Z" fill="#3B82F6" />
        <path d="M 5,5 A 5,5 0 0,0 10,10" fill="none" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Gőz (Gáz) */}
      <g transform="translate(190, 70)">
        <path d="M -10,10 Q -5,0 -10,-10 T -10,-20" fill="none" stroke="#93C5FD" strokeWidth="4" strokeLinecap="round" />
        <path d="M 0,15 Q 5,5 0,-5 T 0,-15" fill="none" stroke="#93C5FD" strokeWidth="4" strokeLinecap="round" />
        <path d="M 10,10 Q 15,0 10,-10 T 10,-20" fill="none" stroke="#93C5FD" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFEFF" rx="20" />
      <g transform="translate(120, 70)">
        {/* Tenger */}
        <path d="M -80,40 Q -40,30 0,40 T 80,40 L 80,70 L -80,70 Z" fill="#0EA5E9" />
        {/* Nap */}
        <circle cx="-50" cy="-40" r="15" fill="#FBBF24" />
        {/* Felhő */}
        <path d="M 40,-40 A 10,10 0 0,0 30,-30 A 10,10 0 0,0 50,-20 L 65,-20 A 10,10 0 0,0 70,-40 A 15,15 0 0,0 40,-40 Z" fill="#94A3B8" />
        {/* Eső cseppek */}
        <line x1="40" y1="-15" x2="35" y2="-5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="-10" x2="45" y2="0" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="-15" x2="55" y2="-5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        {/* Körforgás nyilak */}
        <path d="M -30,25 Q -30,0 -10,-15" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        {/* Hegy */}
        <polygon points="-80,20 -40,-30 0,20" fill="#94A3B8" />
        <polygon points="-40,-30 -25,-10 -55,-10" fill="#F8FAFC" />
        {/* Folyó */}
        <path d="M -20,20 Q 0,30 20,20 T 60,30 L 60,70 L -20,70 Z" fill="#3B82F6" />
        {/* Felhő */}
        <path d="M 20,-40 A 10,10 0 0,0 10,-30 A 10,10 0 0,0 30,-20 L 50,-20 A 10,10 0 0,0 55,-40 A 15,15 0 0,0 20,-40 Z" fill="#FFFFFF" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEFCE8" rx="20" />
      {/* Csaptelep */}
      <g transform="translate(120, 60)">
        <path d="M -20,-10 L 0,-10 A 10,10 0 0,1 10,0 L 10,10" fill="none" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" />
        <rect x="-25" y="-15" width="10" height="10" fill="#CBD5E1" rx="2" />
        <rect x="-5" y="-20" width="4" height="10" fill="#EF4444" rx="2" />
        {/* Vízcsepp */}
        <path d="M 10,20 Q 15,30 15,35 A 5,5 0 0,1 5,35 Q 5,30 10,20 Z" fill="#3B82F6" />
        {/* Piros áthúzás (Ne pazarolj) */}
        <line x1="-10" y1="-10" x2="30" y2="40" stroke="#EF4444" strokeWidth="4" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 75)">
        {/* Nagy vízcsepp szívvel */}
        <path d="M 0,-40 Q 30,0 30,20 A 30,30 0 0,1 -30,20 Q -30,0 0,-40 Z" fill="#3B82F6" />
        <path d="M 0,25 L -15,10 A 8,8 0 0,1 0,-5 A 8,8 0 0,1 15,10 Z" fill="#EF4444" />
        <path d="M 10,5 A 5,5 0 0,0 20,15" fill="none" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "A Víz Csodái",
    // T1: Halmazállapotok (Match-pairs)
    t1_title: "A víz három arca",
    t1_text: "A víz nagyon különleges, mert háromféle formában is találkozhatunk vele a természetben. Ezt halmazállapotnak hívjuk.",
    t1_b1: "Ha megfagy, kemény jég lesz belőle (szilárd).",
    t1_b2: "Ha iszunk belőle, akkor folyik (folyékony).",
    t1_b3: "Ha nagyon felmelegszik, gőz lesz belőle (gáz).",
    t1_inst: "Párosítsd a formát az állapotával!",
    t1_l1: "Jég", t1_r1: "Szilárd (kemény)",
    t1_l2: "Víz", t1_r2: "Folyékony (folyik)",
    t1_l3: "Gőz", t1_r3: "Gáz (elszáll)",
    t1_q: "Mivé változik a víz, ha betesszük a mélyhűtőbe?",
    t1_q_a: "Jéggé", t1_q_b: "Gőzzé", t1_q_c: "Homokká", t1_q_d: "Limonádévá",

    // T2: Vízkörzés (Word-order)
    t2_title: "A nagy vízkörzés",
    t2_text: "A víz folyamatosan utazik a Földön! A tengerekből az égbe száll, majd esőként újra leesik.",
    t2_b1: "A Nap felmelegíti a tavak és tengerek vizét.",
    t2_b2: "A meleg víz párává válik és felszáll az égbe.",
    t2_b3: "A párából felhő lesz, amiből végül eső esik.",
    t2_inst: "Tedd sorba a vízkörzés lépéseit!",
    t2_w1: "A Nap melegít", t2_w2: "A pára felszáll", t2_w3: "Felhő lesz belőle", t2_w4: "Esik az eső",
    t2_q: "Mi melegíti fel a vizet, hogy felszálljon az égbe?",
    t2_q_a: "A Nap", t2_q_b: "A Hold", t2_q_c: "A szél", t2_q_d: "A fák",

    // T3: Hol van víz? (Label-diagram)
    t3_title: "Hol találunk vizet?",
    t3_text: "A Föld nagy részét víz borítja. Megtalálhatjuk a magasban, a földön és a föld alatt is.",
    t3_b1: "A felhők apró vízcseppekből állnak az égen.",
    t3_b2: "A folyók a hegyekből folynak a tengerek felé.",
    t3_b3: "A tengerek és óceánok hatalmas, sós vizek.",
    t3_inst: "Keresd meg a vizeket a képen!",
    t3_area_cloud: "Felhő (Ég)",
    t3_area_river: "Folyó (Föld)",
    t3_area_mountain: "Havas hegy",
    t3_q: "Miből vannak a felhők?",
    t3_q_a: "Apró vízcseppekből", t3_q_b: "Vattából", t3_q_c: "Fehér füstből", t3_q_d: "Hóból",

    // T4: Takarékoskodás (Drag-to-bucket)
    t4_title: "Vigyázz a vízre!",
    t4_text: "Az édesvíz (amit meg tudunk inni) nagyon értékes. Takarékoskodnunk kell vele, hogy sose fogyjon el!",
    t4_b1: "Zárd el a csapot, amíg mosod a fogad!",
    t4_b2: "Zuhanyozni jobb, mint teleengedni a kádat.",
    t4_b3: "Ne pazaroljuk a vizet feleslegesen!",
    t4_inst: "Melyik jó a víznek, és melyik pazarlás? Válogasd szét!",
    t4_bucket_jo: "Vizet spórol 💧",
    t4_bucket_rossz: "Vizet pazarol 🚫",
    t4_item_j1: "Zuhanyzás kád helyett", t4_item_j2: "Elzárt csap fogmosáskor",
    t4_item_r1: "Csepegő, nyitva hagyott csap", t4_item_r2: "Hatalmas kád fürdővíz",
    t4_q: "Mi a jobb, ha spórolni akarunk a vízzel?",
    t4_q_a: "Zuhanyozni", t4_q_b: "Teleengedni a kádat", t4_q_c: "Nyitva hagyni a csapot", t4_q_d: "Kétszer fürdeni",

    // T5: Összefoglaló (Gap-fill)
    t5_title: "A víz az élet",
    t5_text: "Víz nélkül nem lennének növények, állatok és emberek sem. A víz maga az élet!",
    t5_b1: "A növények a gyökerükkel szívják fel a vizet.",
    t5_b2: "Minden állatnak innia kell.",
    t5_b3: "Te is igyál sok tiszta vizet minden nap!",
    t5_inst: "Egészítsd ki a mondatot!",
    t5_gap_sentence: "A Földön minden élőlénynek szüksége van a {gap} az élethez.",
    t5_c51: "vízre", t5_c52: "kólára", t5_c53: "szélre",
    t5_q: "Mit csinálnak a növények, ha nem kapnak sokáig vizet?",
    t5_q_a: "Elszáradnak", t5_q_b: "Megnőnek", t5_q_c: "Táncolnak", t5_q_d: "Megkékülnek",
  },
  en: {
    explorer_title: "Wonders of Water",
    t1_title: "Three Faces of Water", t1_text: "Water is special because it can be found in three forms in nature. We call these the states of matter.",
    t1_b1: "When it freezes, it becomes hard ice (solid).", t1_b2: "When we drink it, it flows (liquid).", t1_b3: "When it gets very hot, it becomes steam (gas).",
    t1_inst: "Match the form with its state!",
    t1_l1: "Ice", t1_r1: "Solid (hard)",
    t1_l2: "Water", t1_r2: "Liquid (flows)",
    t1_l3: "Steam", t1_r3: "Gas (floats away)",
    t1_q: "What does water turn into if we put it in the freezer?",
    t1_q_a: "Ice", t1_q_b: "Steam", t1_q_c: "Sand", t1_q_d: "Lemonade",

    t2_title: "The Water Cycle", t2_text: "Water is always traveling! It goes up from the seas to the sky, and falls back down as rain.",
    t2_b1: "The Sun warms the water in lakes and seas.", t2_b2: "Warm water turns into vapor and rises.", t2_b3: "Vapor becomes clouds, and then it rains.",
    t2_inst: "Order the steps of the water cycle!",
    t2_w1: "Sun warms water", t2_w2: "Vapor rises", t2_w3: "Clouds form", t2_w4: "Rain falls",
    t2_q: "What warms the water so it rises into the sky?",
    t2_q_a: "The Sun", t2_q_b: "The Moon", t2_q_c: "The wind", t2_q_d: "The trees",

    t3_title: "Where is water?", t3_text: "Most of the Earth is covered in water. We can find it high up, on the ground, and under the ground.",
    t3_b1: "Clouds are made of tiny water drops.", t3_b2: "Rivers flow from mountains to the sea.", t3_b3: "Seas and oceans are huge, salty waters.",
    t3_inst: "Find the water in the picture!",
    t3_area_cloud: "Cloud (Sky)",
    t3_area_river: "River (Ground)",
    t3_area_mountain: "Snowy Mountain",
    t3_q: "What are clouds made of?",
    t3_q_a: "Tiny water drops", t3_q_b: "Cotton", t3_q_c: "White smoke", t3_q_d: "Snow",

    t4_title: "Save Water!", t4_text: "Freshwater (the kind we can drink) is very precious. We must save it so we never run out!",
    t4_b1: "Turn off the tap while brushing your teeth!", t4_b2: "Taking a shower is better than a full bath.", t4_b3: "Don't waste water!",
    t4_inst: "Which saves water and which wastes it? Sort them!",
    t4_bucket_jo: "Saves Water 💧",
    t4_bucket_rossz: "Wastes Water 🚫",
    t4_item_j1: "Taking a quick shower", t4_item_j2: "Closing tap while brushing",
    t4_item_r1: "Leaving the tap running", t4_item_r2: "A huge full bathtub",
    t4_q: "What is better if we want to save water?",
    t4_q_a: "Taking a shower", t4_q_b: "Filling the bathtub", t4_q_c: "Leaving the tap open", t4_q_d: "Bathing twice a day",

    t5_title: "Water is Life", t5_text: "Without water, there would be no plants, animals, or people. Water is life itself!",
    t5_b1: "Plants drink water with their roots.", t5_b2: "Every animal needs to drink.", t5_b3: "Drink plenty of clean water every day too!",
    t5_inst: "Fill in the missing word!",
    t5_gap_sentence: "Every living thing on Earth needs {gap} to live.",
    t5_c51: "water", t5_c52: "cola", t5_c53: "wind",
    t5_q: "What happens to plants if they don't get water?",
    t5_q_a: "They dry out and die", t5_q_b: "They grow bigger", t5_q_c: "They dance", t5_q_d: "They turn blue",
  },
  de: {
    explorer_title: "Die Welt des Wassers",
    t1_title: "Drei Formen von Wasser", t1_text: "Wasser ist besonders, weil es in drei Formen vorkommt. Das nennen wir Aggregatzustände.",
    t1_b1: "Wenn es gefriert, wird es zu Eis (fest).", t1_b2: "Wenn wir es trinken, fließt es (flüssig).", t1_b3: "Wenn es heiß wird, wird es zu Dampf (gasförmig).",
    t1_inst: "Verbinde die Form mit dem Zustand!",
    t1_l1: "Eis", t1_r1: "Fest (hart)",
    t1_l2: "Wasser", t1_r2: "Flüssig (fließt)",
    t1_l3: "Dampf", t1_r3: "Gasförmig",
    t1_q: "Was wird aus Wasser, wenn wir es in den Gefrierschrank stellen?",
    t1_q_a: "Eis", t1_q_b: "Dampf", t1_q_c: "Sand", t1_q_d: "Limonade",

    t2_title: "Der Wasserkreislauf", t2_text: "Wasser reist ständig! Es steigt vom Meer in den Himmel und fällt als Regen zurück.",
    t2_b1: "Die Sonne erwärmt das Wasser.", t2_b2: "Warmes Wasser wird zu Dampf und steigt auf.", t2_b3: "Aus Dampf werden Wolken, aus denen Regen fällt.",
    t2_inst: "Bringe den Wasserkreislauf in die richtige Reihenfolge!",
    t2_w1: "Die Sonne wärmt", t2_w2: "Dampf steigt auf", t2_w3: "Wolken entstehen", t2_w4: "Regen fällt",
    t2_q: "Was erwärmt das Wasser, damit es aufsteigt?",
    t2_q_a: "Die Sonne", t2_q_b: "Der Mond", t2_q_c: "Der Wind", t2_q_d: "Die Bäume",

    t3_title: "Wo gibt es Wasser?", t3_text: "Der Großteil der Erde ist mit Wasser bedeckt. Wir finden es oben, am Boden und unter der Erde.",
    t3_b1: "Wolken bestehen aus winzigen Wassertropfen.", t3_b2: "Flüsse fließen von den Bergen ins Meer.", t3_b3: "Ozeane sind riesige, salzige Gewässer.",
    t3_inst: "Finde das Wasser auf dem Bild!",
    t3_area_cloud: "Wolke (Himmel)",
    t3_area_river: "Fluss (Boden)",
    t3_area_mountain: "Schneeberg",
    t3_q: "Woraus bestehen Wolken?",
    t3_q_a: "Aus winzigen Wassertropfen", t3_q_b: "Aus Watte", t3_q_c: "Aus Rauch", t3_q_d: "Aus Schnee",

    t4_title: "Wasser sparen!", t4_text: "Trinkwasser ist sehr wertvoll. Wir müssen es sparen, damit es nie ausgeht!",
    t4_b1: "Dreh den Hahn zu, während du die Zähne putzt!", t4_b2: "Duschen ist besser als eine volle Badewanne.", t4_b3: "Verschwende kein Wasser!",
    t4_inst: "Was spart Wasser und was nicht? Sortiere!",
    t4_bucket_jo: "Spart Wasser 💧",
    t4_bucket_rossz: "Verschwendet 🚫",
    t4_item_j1: "Kurz duschen", t4_item_j2: "Hahn zu beim Putzen",
    t4_item_r1: "Tropfender Wasserhahn", t4_item_r2: "Volle Badewanne",
    t4_q: "Was ist besser, um Wasser zu sparen?",
    t4_q_a: "Duschen", t4_q_b: "Die Badewanne füllen", t4_q_c: "Den Hahn laufen lassen", t4_q_d: "Zweimal baden",

    t5_title: "Wasser ist Leben", t5_text: "Ohne Wasser gäbe es keine Pflanzen, Tiere oder Menschen. Wasser ist das Leben selbst!",
    t5_b1: "Pflanzen trinken mit ihren Wurzeln.", t5_b2: "Jedes Tier muss trinken.", t5_b3: "Trinke jeden Tag genug Wasser!",
    t5_inst: "Ergänze den Satz!",
    t5_gap_sentence: "Jedes Lebewesen auf der Erde braucht {gap} zum Leben.",
    t5_c51: "Wasser", t5_c52: "Cola", t5_c53: "Wind",
    t5_q: "Was passiert mit Pflanzen, wenn sie kein Wasser bekommen?",
    t5_q_a: "Sie vertrocknen", t5_q_b: "Sie werden größer", t5_q_c: "Sie tanzen", t5_q_d: "Sie werden blau",
  },
  ro: {
    explorer_title: "Minunile Apei",
    t1_title: "Cele trei stări", t1_text: "Apa este specială pentru că o putem găsi în trei forme în natură. Acestea se numesc stări de agregare.",
    t1_b1: "Când îngheață, devine gheață tare (solidă).", t1_b2: "Când o bem, curge (lichidă).", t1_b3: "Când se încălzește tare, devine abur (gaz).",
    t1_inst: "Potrivește forma cu starea ei!",
    t1_l1: "Gheață", t1_r1: "Solid (tare)",
    t1_l2: "Apă", t1_r2: "Lichid (curge)",
    t1_l3: "Abur", t1_r3: "Gaz (se ridică)",
    t1_q: "În ce se transformă apa dacă o punem în congelator?",
    t1_q_a: "În gheață", t1_q_b: "În abur", t1_q_c: "În nisip", t1_q_d: "În limonadă",

    t2_title: "Circuitul apei", t2_text: "Apa călătorește mereu! Urcă din mări spre cer și cade înapoi sub formă de ploaie.",
    t2_b1: "Soarele încălzește apa din lacuri și mări.", t2_b2: "Apa caldă devine vapori și se ridică.", t2_b3: "Vaporii formează nori, apoi plouă.",
    t2_inst: "Pune etapele circuitului apei în ordine!",
    t2_w1: "Soarele încălzește", t2_w2: "Vaporii se ridică", t2_w3: "Se formează nori", t2_w4: "Cade ploaia",
    t2_q: "Ce încălzește apa pentru a se ridica spre cer?",
    t2_q_a: "Soarele", t2_q_b: "Luna", t2_q_c: "Vântul", t2_q_d: "Copacii",

    t3_title: "Unde găsim apă?", t3_text: "Cea mai mare parte a Pământului este acoperită de apă. O găsim sus, pe pământ și sub pământ.",
    t3_b1: "Norii sunt făcuți din picături mici de apă.", t3_b2: "Râurile curg din munți spre mări.", t3_b3: "Mările și oceanele sunt ape mari și sărate.",
    t3_inst: "Găsește apa din imagine!",
    t3_area_cloud: "Nor (Cer)",
    t3_area_river: "Râu (Pământ)",
    t3_area_mountain: "Munte înzăpezit",
    t3_q: "Din ce sunt făcuți norii?",
    t3_q_a: "Din picături mici de apă", t3_q_b: "Din vată", t3_q_c: "Din fum alb", t3_q_d: "Din zăpadă",

    t4_title: "Să economisim apa!", t4_text: "Apa dulce (pe care o putem bea) este foarte prețioasă. Trebuie să o economisim ca să nu se termine niciodată!",
    t4_b1: "Închide robinetul când te speli pe dinți!", t4_b2: "E mai bine să faci un duș decât să umpli cada.", t4_b3: "Nu risipi apa!",
    t4_inst: "Ce economisește și ce risipește apa? Sortează-le!",
    t4_bucket_jo: "Economisește 💧",
    t4_bucket_rossz: "Risipește 🚫",
    t4_item_j1: "Duș rapid", t4_item_j2: "Robinet închis la spălat",
    t4_item_r1: "Robinet lăsat deschis", t4_item_r2: "O cadă uriașă plină",
    t4_q: "Ce este mai bine dacă vrem să economisim apă?",
    t4_q_a: "Să facem duș", t4_q_b: "Să umplem cada", t4_q_c: "Să lăsăm robinetul deschis", t4_q_d: "Să facem baie de două ori",

    t5_title: "Apa înseamnă Viață", t5_text: "Fără apă nu ar exista plante, animale sau oameni. Apa este viața însăși!",
    t5_b1: "Plantele beau apă prin rădăcini.", t5_b2: "Fiecare animal are nevoie să bea.", t5_b3: "Bea multă apă curată în fiecare zi!",
    t5_inst: "Completează propoziția!",
    t5_gap_sentence: "Fiecare ființă de pe Pământ are nevoie de {gap} pentru a trăi.",
    t5_c51: "apă", t5_c52: "cola", t5_c53: "vânt",
    t5_q: "Ce se întâmplă cu plantele dacă nu primesc apă?",
    t5_q_a: "Se usucă și mor", t5_q_b: "Cresc mai mari", t5_q_c: "Dansează", t5_q_d: "Se fac albastre",
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctOrder: [0, 1, 2, 3],
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
      type: "label-diagram",
      areas: [
        { id: "cloud", x: 25, y: 20, label: "t3_area_cloud" },
        { id: "mountain", x: 25, y: 55, label: "t3_area_mountain" },
        { id: "river", x: 70, y: 70, label: "t3_area_river" },
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
      type: "drag-to-bucket",
      buckets: [
        { id: "jo", label: "t4_bucket_jo" },
        { id: "rossz", label: "t4_bucket_rossz" },
      ],
      items: [
        { text: "t4_item_j1", bucketId: "jo" },
        { text: "t4_item_r1", bucketId: "rossz" },
        { text: "t4_item_j2", bucketId: "jo" },
        { text: "t4_item_r2", bucketId: "rossz" },
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
      type: "gap-fill",
      sentence: "t5_gap_sentence",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
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
  icon: "💧",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WaterExplorer = memo(function WaterExplorer({
  color = "#3B82F6", // Blue-500 a vízhez
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
      explorerId="sachkunde_k2_water" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default WaterExplorer;
