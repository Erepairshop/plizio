"use client";
// EnvironmentExplorer.tsx — Sachkunde Island i9: Environment & Review (K3)
// Topics: 1) Környezetvédelem 2) Újrahasznosítás 3) Takarékosság 4) A Föld a Naprendszerben 5) K3 Bajnok: Faültetés

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Föld bolygó - Kettéosztva (Bal: Egészséges, Jobb: Szennyezett) */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="40" fill="#3B82F6" />
        {/* Bal (Zöld) */}
        <path d="M 0,-40 A 40,40 0 0,0 0,40 Z" fill="#3B82F6" />
        <path d="M 0,-30 A 20,20 0 0,0 -30,0 A 15,15 0 0,0 0,30 Z" fill="#22C55E" />
        <circle cx="-15" cy="5" r="5" fill="#22C55E" />
        {/* Jobb (Szürke/Szennyezett) */}
        <path d="M 0,-40 A 40,40 0 0,1 0,40 Z" fill="#64748B" />
        <path d="M 0,-30 A 20,20 0 0,1 30,0 A 15,15 0 0,1 0,30 Z" fill="#475569" />
        <circle cx="15" cy="5" r="5" fill="#475569" />
        
        {/* Egészséges fa balra */}
        <rect x="-60" y="10" width="4" height="15" fill="#78350F" />
        <circle cx="-58" cy="5" r="10" fill="#16A34A" />
        {/* Gyárfüst jobbra */}
        <rect x="50" y="5" width="8" height="20" fill="#334155" />
        <circle cx="54" cy="-5" r="8" fill="#94A3B8" opacity="0.8" />
        <circle cx="60" cy="-15" r="10" fill="#94A3B8" opacity="0.6" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Kék kuka (Papír) */}
      <g transform="translate(60, 80)">
        <polygon points="-15,20 15,20 20,-20 -20,-20" fill="#3B82F6" />
        <rect x="-22" y="-25" width="44" height="5" fill="#2563EB" rx="2" />
        <rect x="-10" y="-5" width="20" height="20" fill="#FFFFFF" opacity="0.2" />
        {/* Újrahasznosítás nyíl szimbólum (Absztrakt) */}
        <path d="M -5,0 L 5,0 L 0,-8 Z" fill="#FFFFFF" />
      </g>
      {/* Sárga kuka (Műanyag) */}
      <g transform="translate(120, 80)">
        <polygon points="-15,20 15,20 20,-20 -20,-20" fill="#FBBF24" />
        <rect x="-22" y="-25" width="44" height="5" fill="#D97706" rx="2" />
        <rect x="-10" y="-5" width="20" height="20" fill="#FFFFFF" opacity="0.2" />
        <path d="M -5,0 L 5,0 L 0,-8 Z" fill="#FFFFFF" />
      </g>
      {/* Zöld kuka (Üveg) */}
      <g transform="translate(180, 80)">
        <polygon points="-15,20 15,20 20,-20 -20,-20" fill="#22C55E" />
        <rect x="-22" y="-25" width="44" height="5" fill="#16A34A" rx="2" />
        <rect x="-10" y="-5" width="20" height="20" fill="#FFFFFF" opacity="0.2" />
        <path d="M -5,0 L 5,0 L 0,-8 Z" fill="#FFFFFF" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEFCE8" rx="20" />
      {/* Vízcsap */}
      <g transform="translate(70, 60)">
        <path d="M -20,-10 L 0,-10 A 10,10 0 0,1 10,0 L 10,10" fill="none" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" />
        <rect x="-5" y="-20" width="4" height="10" fill="#3B82F6" rx="2" />
        <path d="M 10,20 Q 15,30 15,35 A 5,5 0 0,1 5,35 Q 5,30 10,20 Z" fill="#3B82F6" />
        <line x1="-15" y1="-15" x2="25" y2="40" stroke="#EF4444" strokeWidth="4" />
      </g>
      {/* Villanykörte */}
      <g transform="translate(170, 70)">
        <circle cx="0" cy="-10" r="15" fill="#FDE047" />
        <path d="M -5,0 L -5,10 L 5,10 L 5,0 Z" fill="#94A3B8" />
        <line x1="-15" y1="-15" x2="20" y2="15" stroke="#EF4444" strokeWidth="4" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Nap (Nagy) */}
      <circle cx="-20" cy="70" r="50" fill="#FBBF24" />
      {/* Föld */}
      <g transform="translate(130, 70)">
        <circle cx="0" cy="0" r="20" fill="#3B82F6" />
        <path d="M -10,-10 Q 0,-20 10,-10 T 5,10 Q -5,15 -10,0 Z" fill="#22C55E" />
      </g>
      {/* Hold */}
      <circle cx="180" cy="50" r="8" fill="#CBD5E1" />
      <circle cx="178" cy="48" r="2" fill="#94A3B8" />
      <circle cx="182" cy="52" r="1.5" fill="#94A3B8" />
      
      {/* Röppálya */}
      <path d="M 130,70 A 50,50 0 0,0 180,50" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Hegyoldal */}
      <path d="M 0,100 Q 60,60 120,90 T 240,70 L 240,140 L 0,140 Z" fill="#4ADE80" opacity="0.5" />
      <path d="M 0,120 Q 80,100 160,130 T 240,110 L 240,140 L 0,140 Z" fill="#22C55E" opacity="0.6" />
      {/* A tap-count gombok fognak fát (🌳) ültetni a hegyoldalra */}
      <circle cx="40" cy="30" r="15" fill="#FFFFFF" opacity="0.8" />
      <circle cx="55" cy="35" r="10" fill="#FFFFFF" opacity="0.8" />
      <circle cx="25" cy="35" r="10" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "A Föld Védelme",
    // T1: Környezetvédelem
    t1_title: "Vigyázzunk a Földre!",
    t1_text: "A Föld az egyetlen otthonunk. Vigyáznunk kell rá, hogy az állatok, a növények és mi is egészségesek maradjunk.",
    t1_b1: "A faültetés és a biciklizés jót tesz a természetnek.",
    t1_b2: "A szemét eldobása és a gyárfüst károsítja a Földet.",
    t1_b3: "Te is tehetsz azért, hogy tisztább legyen a világ!",
    t1_inst: "Válogasd szét: Mi védi és mi károsítja a Földet?",
    t1_bucket_vedi: "Védi a Földet 🌍",
    t1_bucket_karos: "Károsítja 🚫",
    t1_item_v1: "Faültetés", t1_item_v2: "Biciklizés",
    t1_item_k1: "Szemét eldobása", t1_item_k2: "Gyárfüst",
    t1_q: "Mi az, amivel te is védheted a környezetet?",
    t1_q_a: "Ha biciklivel vagy gyalog megyek autó helyett", t1_q_b: "Ha eldobom a szemetet", t1_q_c: "Ha égve hagyom a villanyt", t1_q_d: "Ha sok vizet folyatok",

    // T2: Újrahasznosítás
    t2_title: "A színes kukák",
    t2_text: "Ha a szemetet külön válogatjuk, a gyárak újra fel tudják használni. Ezt hívjuk újrahasznosításnak!",
    t2_b1: "A kék kukába a papírt (újság, doboz) dobjuk.",
    t2_b2: "A sárga kukába a műanyagot (flakon) tesszük.",
    t2_b3: "A zöld kukába az üvegeket gyűjtjük.",
    t2_inst: "Melyik szemét melyik kukába való? Párosítsd!",
    t2_l1: "Papírdoboz", t2_r1: "Kék kuka",
    t2_l2: "Műanyag flakon", t2_r2: "Sárga kuka",
    t2_l3: "Befőttes üveg", t2_r3: "Zöld kuka",
    t2_q: "Mit jelent az újrahasznosítás?",
    t2_q_a: "A szemétből új dolgokat készítenek", t2_q_b: "Elégetik a szemetet", t2_q_c: "Eldobják az erdőben", t2_q_d: "Vesznek egy új kukát",

    // T3: Takarékosság (Highlight-text) - Cél: [2, 5] -> vízzel, árammal!
    t3_title: "Ne pazarolj!",
    t3_text: "A tiszta víz és az elektromos áram előállítása nehéz dolog. Ha spórolunk velük, védjük a bolygónkat.",
    t3_b1: "Zárd el a csapot fogmosás közben!",
    t3_b2: "Kapcsold le a lámpát, ha kimész a szobából!",
    t3_b3: "Minden kis odafigyelés számít.",
    t3_inst: "Keresd meg és jelöld meg a mondatban a KÉT dolgot, amivel spórolnunk kell!",
    t3_tok0: "Spórolj", t3_tok1: "a", t3_tok2: "vízzel", t3_tok3: "és", t3_tok4: "az", t3_tok5: "árammal!",
    t3_q: "Mit tegyél, ha kimész a szobádból?",
    t3_q_a: "Kapcsoljam le a lámpát", t3_q_b: "Hagyjam bekapcsolva a tévét", t3_q_c: "Nyissam ki az ablakot", t3_q_d: "Nyissam ki a vízcsapot",

    // T4: A Föld a Naprendszerben
    t4_title: "Helyünk az űrben",
    t4_text: "A Föld egy bolygó, ami a Nap körül kering az űrben. A Nap adja nekünk a fényt és a meleget.",
    t4_b1: "A Hold a legkisebb, az a Föld körül kering.",
    t4_b2: "A Föld nagyobb a Holdnál, és rajta élünk.",
    t4_b3: "A Nap a leghatalmasabb, ő egy csillag középen.",
    t4_inst: "Tedd őket sorba méret szerint, a legkisebbtől a legnagyobbig!",
    t4_w1: "Hold", t4_w2: "Föld", t4_w3: "Nap", t4_w4: "Naprendszer",
    t4_q: "Melyik égitest ad fényt és meleget a Földnek?",
    t4_q_a: "A Nap", t4_q_b: "A Hold", t4_q_c: "A Mars", t4_q_d: "Az üstökös",

    // T5: K3 Bajnok (Tap-count)
    t5_title: "A nagy faültetés",
    t5_text: "Gratulálunk, te is K3-as Bajnok lettél! Bebizonyítottad, hogy okos vagy és figyelsz a természetre.",
    t5_b1: "A fák tisztítják a levegőt és otthont adnak a madaraknak.",
    t5_b2: "Ültessünk minél több fát a bolygónkon!",
    t5_b3: "Bökj a hegyoldalra, és ültess fákat!",
    t5_inst: "Ünnepeljük meg a sikeredet! Bökj a képre és ültess el 5 darab fát (🌳)!",
    t5_q: "Miért fontos, hogy sok fa legyen a Földön?",
    t5_q_a: "Mert tisztítják a levegőt (oxigént adnak)", t5_q_b: "Mert eltakarják a Napot", t5_q_c: "Mert hangosak", t5_q_d: "Nem fontosak",
  },
  en: {
    explorer_title: "Protect Our Environment",
    t1_title: "Take Care of the Earth!", t1_text: "The Earth is our only home. We must protect it so animals, plants, and we can stay healthy.",
    t1_b1: "Planting trees and riding a bike is good for nature.", t1_b2: "Dropping trash and factory smoke harms the Earth.", t1_b3: "You can help make the world cleaner too!",
    t1_inst: "Sort them out: What protects and what harms the Earth?",
    t1_bucket_vedi: "Protects Earth 🌍",
    t1_bucket_karos: "Harms it 🚫",
    t1_item_v1: "Planting a tree", t1_item_v2: "Riding a bike",
    t1_item_k1: "Littering", t1_item_k2: "Factory smoke",
    t1_q: "How can you protect the environment?",
    t1_q_a: "By walking or biking instead of driving", t1_q_b: "By throwing trash on the ground", t1_q_c: "By leaving the lights on", t1_q_d: "By wasting water",

    t2_title: "The Colorful Bins", t2_text: "If we separate our trash, factories can use it again. This is called recycling!",
    t2_b1: "Put paper (newspapers, boxes) in the blue bin.", t2_b2: "Put plastic (bottles) in the yellow bin.", t2_b3: "Collect glass in the green bin.",
    t2_inst: "Which trash goes in which bin? Match them!",
    t2_l1: "Paper box", t2_r1: "Blue bin",
    t2_l2: "Plastic bottle", t2_r2: "Yellow bin",
    t2_l3: "Glass jar", t2_r3: "Green bin",
    t2_q: "What does recycling mean?",
    t2_q_a: "Making new things out of trash", t2_q_b: "Burning the trash", t2_q_c: "Throwing it in the forest", t2_q_d: "Buying a new bin",

    // Cél: [2, 5] -> water, electricity!
    t3_title: "Don't Waste!", t3_text: "Making clean water and electricity is hard. If we save them, we protect our planet.",
    t3_b1: "Turn off the tap while brushing your teeth!", t3_b2: "Turn off the light when you leave the room!", t3_b3: "Every little bit helps.",
    t3_inst: "Find and mark the TWO things we must save in the sentence!",
    t3_tok0: "Save", t3_tok1: "the", t3_tok2: "water", t3_tok3: "and", t3_tok4: "the", t3_tok5: "electricity!",
    t3_q: "What should you do when you leave your room?",
    t3_q_a: "Turn off the lights", t3_q_b: "Leave the TV on", t3_q_c: "Open the window", t3_q_d: "Turn on the tap",

    t4_title: "Earth in the Solar System", t4_text: "Earth is a planet that orbits the Sun in space. The Sun gives us light and warmth.",
    t4_b1: "The Moon is the smallest, it orbits the Earth.", t4_b2: "The Earth is bigger than the Moon, and we live on it.", t4_b3: "The Sun is the biggest, it is a star in the center.",
    t4_inst: "Order them by size, from smallest to largest!",
    t4_w1: "Moon", t4_w2: "Earth", t4_w3: "Sun", t4_w4: "Solar System",
    t4_q: "Which celestial body gives light and heat to the Earth?",
    t4_q_a: "The Sun", t4_q_b: "The Moon", t4_q_c: "Mars", t4_q_d: "A comet",

    t5_title: "Planting Trees", t5_text: "Congratulations, you are a K3 Champion! You proved that you are smart and care for nature.",
    t5_b1: "Trees clean the air and give homes to birds.", t5_b2: "Let's plant as many trees as possible!", t5_b3: "Tap the hillside to plant trees!",
    t5_inst: "Let's celebrate! Tap the picture and plant 5 trees (🌳)!",
    t5_q: "Why is it important to have many trees on Earth?",
    t5_q_a: "Because they clean the air (give oxygen)", t5_q_b: "Because they block the Sun", t5_q_c: "Because they are loud", t5_q_d: "They are not important",
  },
  de: {
    explorer_title: "Umweltschutz & Erde",
    t1_title: "Beschütze die Erde!", t1_text: "Die Erde ist unser einziges Zuhause. Wir müssen sie schützen, damit wir und die Tiere gesund bleiben.",
    t1_b1: "Bäume pflanzen und Rad fahren ist gut für die Natur.", t1_b2: "Müll wegwerfen und Fabrikrauch schaden der Erde.", t1_b3: "Auch du kannst helfen, die Welt sauberer zu machen!",
    t1_inst: "Sortiere: Was schützt und was schadet der Erde?",
    t1_bucket_vedi: "Schützt die Erde 🌍",
    t1_bucket_karos: "Schadet ihr 🚫",
    t1_item_v1: "Baum pflanzen", t1_item_v2: "Fahrrad fahren",
    t1_item_k1: "Müll wegwerfen", t1_item_k2: "Fabrikrauch",
    t1_q: "Wie kannst du die Umwelt schützen?",
    t1_q_a: "Indem ich Rad fahre statt mit dem Auto zu fahren", t1_q_b: "Indem ich Müll auf den Boden werfe", t1_q_c: "Indem ich das Licht anlasse", t1_q_d: "Indem ich Wasser verschwende",

    t2_title: "Die bunten Mülltonnen", t2_text: "Wenn wir den Müll trennen, können Fabriken ihn wiederverwenden. Das nennt man Recycling!",
    t2_b1: "Papier (Zeitungen, Kartons) kommt in die blaue Tonne.", t2_b2: "Plastik (Flaschen) kommt in die gelbe Tonne.", t2_b3: "Glas wird in der grünen Tonne gesammelt.",
    t2_inst: "Welcher Müll kommt in welche Tonne? Verbinde sie!",
    t2_l1: "Papierkarton", t2_r1: "Blaue Tonne",
    t2_l2: "Plastikflasche", t2_r2: "Gelbe Tonne",
    t2_l3: "Glasflasche", t2_r3: "Grüne Tonne",
    t2_q: "Was bedeutet Recycling?",
    t2_q_a: "Aus Müll neue Dinge machen", t2_q_b: "Müll verbrennen", t2_q_c: "Müll in den Wald werfen", t2_q_d: "Eine neue Tonne kaufen",

    // Cél: [2, 5] -> Wasser, Strom!
    t3_title: "Nicht verschwenden!", t3_text: "Sauberes Wasser und Strom herzustellen ist schwer. Wenn wir sparen, schützen wir unseren Planeten.",
    t3_b1: "Dreh den Wasserhahn beim Zähneputzen zu!", t3_b2: "Mach das Licht aus, wenn du aus dem Zimmer gehst!", t3_b3: "Jede kleine Hilfe zählt.",
    t3_inst: "Finde und markiere die ZWEI Dinge, die wir sparen müssen!",
    t3_tok0: "Spare", t3_tok1: "das", t3_tok2: "Wasser", t3_tok3: "und", t3_tok4: "den", t3_tok5: "Strom!",
    t3_q: "Was sollst du tun, wenn du aus dem Zimmer gehst?",
    t3_q_a: "Das Licht ausschalten", t3_q_b: "Den Fernseher anlassen", t3_q_c: "Das Fenster öffnen", t3_q_d: "Den Wasserhahn aufdrehen",

    t4_title: "Die Erde im Sonnensystem", t4_text: "Die Erde ist ein Planet, der sich um die Sonne dreht. Die Sonne gibt uns Licht und Wärme.",
    t4_b1: "Der Mond ist am kleinsten, er kreist um die Erde.", t4_b2: "Die Erde ist größer als der Mond, wir leben darauf.", t4_b3: "Die Sonne ist am größten, sie ist ein Stern in der Mitte.",
    t4_inst: "Bringe sie nach Größe in die richtige Reihenfolge (klein zu groß)!",
    t4_w1: "Mond", t4_w2: "Erde", t4_w3: "Sonne", t4_w4: "Sonnensystem",
    t4_q: "Welcher Himmelskörper gibt der Erde Licht und Wärme?",
    t4_q_a: "Die Sonne", t4_q_b: "Der Mond", t4_q_c: "Der Mars", t4_q_d: "Ein Komet",

    t5_title: "Bäume pflanzen", t5_text: "Herzlichen Glückwunsch, du bist ein K3-Champion! Du hast bewiesen, dass du klug bist und die Natur schützt.",
    t5_b1: "Bäume reinigen die Luft und geben Vögeln ein Zuhause.", t5_b2: "Lass uns so viele Bäume wie möglich pflanzen!", t5_b3: "Tippe auf den Hügel, um Bäume zu pflanzen!",
    t5_inst: "Lass uns feiern! Tippe auf das Bild und pflanze 5 Bäume (🌳)!",
    t5_q: "Warum ist es wichtig, viele Bäume zu haben?",
    t5_q_a: "Weil sie die Luft reinigen (Sauerstoff geben)", t5_q_b: "Weil sie die Sonne verdecken", t5_q_c: "Weil sie laut sind", t5_q_d: "Sie sind nicht wichtig",
  },
  ro: {
    explorer_title: "Protejarea Mediului",
    t1_title: "Ai grijă de Pământ!", t1_text: "Pământul este singura noastră casă. Trebuie să îl protejăm ca animalele, plantele și noi să fim sănătoși.",
    t1_b1: "Plantarea copacilor și mersul pe bicicletă fac bine naturii.", t1_b2: "Aruncatul gunoiului și fumul fabricilor dăunează Pământului.", t1_b3: "Și tu poți ajuta ca lumea să fie mai curată!",
    t1_inst: "Sortează: Ce protejează și ce dăunează Pământului?",
    t1_bucket_vedi: "Protejează 🌍",
    t1_bucket_karos: "Dăunează 🚫",
    t1_item_v1: "Plantarea unui copac", t1_item_v2: "Mersul pe bicicletă",
    t1_item_k1: "Aruncarea gunoiului", t1_item_k2: "Fumul fabricilor",
    t1_q: "Cum poți proteja mediul înconjurător?",
    t1_q_a: "Mergând pe jos sau cu bicicleta în loc de mașină", t1_q_b: "Aruncând gunoiul pe jos", t1_q_c: "Lăsând lumina aprinsă", t1_q_d: "Risiplind apa",

    t2_title: "Coșurile colorate", t2_text: "Dacă separăm gunoiul, fabricile îl pot folosi din nou. Asta se numește reciclare!",
    t2_b1: "În coșul albastru punem hârtia (ziare, cutii).", t2_b2: "În coșul galben punem plasticul (sticle).", t2_b3: "În coșul verde strângem sticla.",
    t2_inst: "Ce gunoi merge în ce coș? Potrivește-le!",
    t2_l1: "Cutie de hârtie", t2_r1: "Coșul albastru",
    t2_l2: "Sticlă de plastic", t2_r2: "Coșul galben",
    t2_l3: "Borcan de sticlă", t2_r3: "Coșul verde",
    t2_q: "Ce înseamnă reciclarea?",
    t2_q_a: "A face lucruri noi din gunoi", t2_q_b: "A arde gunoiul", t2_q_c: "A-l arunca în pădure", t2_q_d: "A cumpăra un coș nou",

    // Cél: [2, 5] -> apa, curentul!
    t3_title: "Nu risipi!", t3_text: "Producerea apei curate și a electricității este grea. Dacă economisim, ne protejăm planeta.",
    t3_b1: "Închide robinetul când te speli pe dinți!", t3_b2: "Stinge lumina când ieși din cameră!", t3_b3: "Fiecare efort contează.",
    t3_inst: "Găsește și marchează cele DOUĂ lucruri pe care trebuie să le economisim!",
    t3_tok0: "Salvează", t3_tok1: "mereu", t3_tok2: "apa", t3_tok3: "și", t3_tok4: "chiar", t3_tok5: "curentul!",
    t3_q: "Ce ar trebui să faci când ieși din cameră?",
    t3_q_a: "Să sting lumina", t3_q_b: "Să las televizorul aprins", t3_q_c: "Să deschid fereastra", t3_q_d: "Să deschid robinetul de apă",

    t4_title: "Pământul în Spațiu", t4_text: "Pământul este o planetă care se învârte în jurul Soarelui în spațiu. Soarele ne dă lumină și căldură.",
    t4_b1: "Luna este cea mai mică, ea se învârte în jurul Pământului.", t4_b2: "Pământul este mai mare decât Luna, și noi trăim pe el.", t4_b3: "Soarele este cel mai mare, este o stea în centru.",
    t4_inst: "Pune-le în ordine după mărime, de la cel mai mic la cel mai mare!",
    t4_w1: "Luna", t4_w2: "Pământul", t4_w3: "Soarele", t4_w4: "Sistemul Solar",
    t4_q: "Ce corp ceresc oferă lumină și căldură Pământului?",
    t4_q_a: "Soarele", t4_q_b: "Luna", t4_q_c: "Marte", t4_q_d: "O cometă",

    t5_title: "Plantarea copacilor", t5_text: "Felicitări, ești un Campion K3! Ai demonstrat că ești isteț și că ai grijă de natură.",
    t5_b1: "Copacii curăță aerul și oferă case păsărilor.", t5_b2: "Să plantăm cât mai mulți copaci pe planeta noastră!", t5_b3: "Apasă pe deal și plantează copaci!",
    t5_inst: "Să sărbătorim succesul! Apasă pe imagine și plantează 5 copaci (🌳)!",
    t5_q: "De ce este important să avem mulți copaci pe Pământ?",
    t5_q_a: "Pentru că ei curăță aerul (ne dau oxigen)", t5_q_b: "Pentru că ascund Soarele", t5_q_c: "Pentru că sunt gălăgioși", t5_q_d: "Nu sunt importanți",
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
        { id: "vedi", label: "t1_bucket_vedi" },
        { id: "karos", label: "t1_bucket_karos" },
      ],
      items: [
        { text: "t1_item_v1", bucketId: "vedi" },
        { text: "t1_item_k1", bucketId: "karos" },
        { text: "t1_item_v2", bucketId: "vedi" },
        { text: "t1_item_k2", bucketId: "karos" },
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
      // HU: [0:Spórolj] [1:a] [2:vízzel] [3:és] [4:az] [5:árammal!]
      // EN: [0:Save] [1:the] [2:water] [3:and] [4:the] [5:electricity!]
      // DE: [0:Spare] [1:das] [2:Wasser] [3:und] [4:den] [5:Strom!]
      // RO: [0:Salvează] [1:mereu] [2:apa] [3:și] [4:chiar] [5:curentul!]
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5"],
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
      tapCount: { emoji: "🌳", count: 5 }, // Bajnok faültetés!
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
  icon: "🌍",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const EnvironmentExplorer = memo(function EnvironmentExplorer({
  color = "#10B981", // Emerald-500 a környezetvédelemért
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
      explorerId="sachkunde_k3_environment_review" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default EnvironmentExplorer;
