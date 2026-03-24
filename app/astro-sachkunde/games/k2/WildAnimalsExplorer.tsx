"use client";
// WildAnimalsExplorer.tsx — Sachkunde Island i3: Wild Animals (K2)
// Topics: 1) Alkalmazkodás 2) Ragadozó és Zsákmány 3) Téli álom 4) Költöző madarak 5) Állatnyomok

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Jégtábla és Jegesmedve absztrakt */}
      <g transform="translate(120, 100)">
        <path d="M -80,0 L 80,0 L 60,30 L -60,30 Z" fill="#BAE6FD" />
        <circle cx="0" cy="-30" r="25" fill="#FFFFFF" />
        <circle cx="-15" cy="-45" r="8" fill="#FFFFFF" />
        <circle cx="15" cy="-45" r="8" fill="#FFFFFF" />
        <circle cx="-8" cy="-35" r="2" fill="#000000" />
        <circle cx="8" cy="-35" r="2" fill="#000000" />
        <ellipse cx="0" cy="-25" rx="5" ry="3" fill="#000000" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      {/* Oroszlán (Ragadozó) */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="30" fill="#D97706" /> {/* Sörény */}
        <circle cx="0" cy="0" r="20" fill="#FBBF24" /> {/* Arc */}
        <path d="M -10,-5 L -5,-5 M 5,-5 L 10,-5" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <path d="M 0,0 L -5,10 L 5,10 Z" fill="#000" />
      </g>
      {/* Nyuszi (Zsákmány) */}
      <g transform="translate(180, 70)">
        <ellipse cx="0" cy="0" rx="15" ry="12" fill="#94A3B8" /> {/* Fej */}
        <ellipse cx="-5" cy="-20" rx="4" ry="15" fill="#94A3B8" transform="rotate(-15 -5 -20)" />
        <ellipse cx="5" cy="-20" rx="4" ry="15" fill="#94A3B8" transform="rotate(15 5 -20)" />
        <circle cx="-5" cy="-2" r="2" fill="#000" />
        <circle cx="5" cy="-2" r="2" fill="#000" />
      </g>
      {/* Nyíl */}
      <path d="M 100,70 L 140,70" stroke="#EF4444" strokeWidth="4" strokeDasharray="4 4" markerEnd="url(#arrow)" />
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Barlang és alvó medve */}
      <g transform="translate(120, 100)">
        <path d="M -60,20 C -60,-60 60,-60 60,20 Z" fill="#475569" />
        <ellipse cx="0" cy="0" rx="30" ry="15" fill="#78350F" />
        <circle cx="-25" cy="-5" r="10" fill="#78350F" />
        <path d="M -30,-5 L -20,-5 M -25,-10 L -25,0" stroke="#000" strokeWidth="1" opacity="0.5" />
        {/* Zzz */}
        <text x="15" y="-30" fill="#CBD5E1" fontSize="16" fontWeight="bold">Z</text>
        <text x="30" y="-45" fill="#CBD5E1" fontSize="20" fontWeight="bold">Z</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFEDD5" rx="20" />
      {/* V alakban repülő madarak */}
      <g transform="translate(120, 70)">
        <path d="M 0,-20 L -10,-30 M 0,-20 L 10,-30" stroke="#475569" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M -30,0 L -40,-10 M -30,0 L -20,-10" stroke="#475569" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 30,0 L 20,-10 M 30,0 L 40,-10" stroke="#475569" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M -60,20 L -70,10 M -60,20 L -50,10" stroke="#475569" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 60,20 L 50,10 M 60,20 L 70,10" stroke="#475569" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#D1FAE5" rx="20" />
      {/* Állatnyom (Mancs) */}
      <g transform="translate(120, 75)">
        <path d="M -15,10 C -25,-10 0,-30 15,-10 C 25,10 5,30 -15,10 Z" fill="#047857" />
        <circle cx="-25" cy="-25" r="8" fill="#047857" />
        <circle cx="0" cy="-35" r="9" fill="#047857" />
        <circle cx="25" cy="-25" r="8" fill="#047857" />
        <circle cx="35" cy="0" r="7" fill="#047857" />
        <circle cx="-35" cy="0" r="7" fill="#047857" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Vadállatok Világa",
    // T1: Alkalmazkodás
    t1_title: "Álca és túlélés",
    t1_text: "A vadállatok szuperképessége az alkalmazkodás! Egyesek vastag bundát növesztenek a hideg ellen, mások beleolvadnak a környezetbe.",
    t1_b1: "A jegesmedve fehér bundája elrejti őt a hóban.",
    t1_b2: "A zöld béka észrevétlen marad a leveleken (álcázás).",
    t1_b3: "A sasnak nagyon éles a szeme a vadászathoz.",
    t1_inst: "Párosítsd az állatot a szuperképességével!",
    t1_l1: "Jegesmedve", t1_r1: "Fehér, vastag bunda",
    t1_l2: "Béka", t1_r2: "Zöld bőr a levelek között",
    t1_l3: "Sas", t1_r3: "Éles látás messziről",
    t1_q: "Miért jó a zöld békának a zöld színe?",
    t1_q_a: "Mert így elrejtőzhet a fűben és a leveleken", t1_q_b: "Mert jobban tud ugrani", t1_q_c: "Mert így melegebb van", t1_q_d: "Mert szereti a zöld almát",

    // T2: Ragadozó és Zsákmány
    t2_title: "Ki eszik kit?",
    t2_text: "A természetben vannak ragadozók, akik vadásznak, és vannak zsákmányállatok, akik menekülnek és elbújnak.",
    t2_b1: "Az oroszlán és a farkas erős ragadozók.",
    t2_b2: "A nyuszi és az őz zsákmányállatok.",
    t2_b3: "A zsákmányállatok gyorsan futnak, hogy megmeneküljenek.",
    t2_inst: "Ragadozó vagy Zsákmány? Válogasd szét őket!",
    t2_bucket_ragadozo: "Ragadozó (Vadász)",
    t2_bucket_zsakmany: "Zsákmány (Menekül)",
    t2_item_r1: "Farkas", t2_item_r2: "Oroszlán",
    t2_item_z1: "Nyuszi", t2_item_z2: "Egér",
    t2_q: "Milyen állat az oroszlán?",
    t2_q_a: "Ragadozó", t2_q_b: "Zsákmány", t2_q_c: "Növényevő", t2_q_d: "Háziállat",

    // T3: Téli álom
    t3_title: "Alszik az erdő",
    t3_text: "Télen nagyon hideg van és kevés az élelem. Ezért sok állat inkább átalussza az egész telet!",
    t3_b1: "A medve, a sün és a denevér téli álmot alszik.",
    t3_b2: "Ősszel nagyon sokat esznek, hogy jól meghízzanak.",
    t3_b3: "Tavasszal ébrednek fel, amikor már jó idő van.",
    t3_inst: "Egészítsd ki a mondatot!",
    t3_gap_sentence: "Amikor télen nincs élelem, a medve behúzódik a barlangba és {gap} alszik.",
    t3_c1: "téli álmot", t3_c2: "nyári álmot", t3_c3: "délutáni álmot",
    t3_q: "Miért alszanak az állatok téli álmot?",
    t3_q_a: "Mert hideg van és kevés az élelem", t3_q_b: "Mert nagyon lusták", t3_q_c: "Mert a hóember megijeszti őket", t3_q_d: "Mert télen csak sötét van",

    // T4: Költöző madarak
    t4_title: "Irány a meleg!",
    t4_text: "A madarak egy része nem alszik téli álmot, hanem ősszel hosszú útra indul egy melegebb országba.",
    t4_b1: "A gólyák és a fecskék költöző madarak.",
    t4_b2: "Sokszor nagy 'V' alakban repülnek az égen.",
    t4_b3: "Tavasszal visszatérnek a régi fészkükbe.",
    t4_inst: "Tedd sorba, hogyan történik a költözés!",
    t4_w1: "Eljön az őszi hideg", t4_w2: "A madarak összegyűlnek", t4_w3: "Elrepülnek délre", t4_w4: "Megérkeznek a melegbe",
    t4_q: "Melyik madár költözik melegebb tájakra ősszel?",
    t4_q_a: "A gólya", t4_q_b: "A pingvin", t4_q_c: "A tyúk", t4_q_d: "A strucc",

    // T5: Állatnyomok
    t5_title: "Nyomozás az erdőben",
    t5_text: "Ha esik a hó vagy saras az út, az állatok lábnyomokat hagynak. Így tudjuk, kik jártak arra!",
    t5_b1: "A medve nyoma nagy, és látszanak a karmai.",
    t5_b2: "A madarak nyoma apró villára hasonlít.",
    t5_b3: "A tappancsos nyomok (pl. róka) közepén talppárna van.",
    t5_inst: "Keresd meg a mancs részeit az ábrán!",
    t5_area_pad: "Talppárna (Középen)",
    t5_area_claw: "Lábujjak (Körülötte)",
    t5_q: "Mikor látszanak a legjobban az állatnyomok az erdőben?",
    t5_q_a: "Ha sár van, vagy friss hó esett", t5_q_b: "Amikor fúj a szél", t5_q_c: "Éjszaka a sötétben", t5_q_d: "Ha nagyon száraz a fű",
  },
  en: {
    explorer_title: "Wild Animals",
    t1_title: "Camouflage & Survival", t1_text: "Wild animals have a superpower called adaptation! Some grow thick fur, others blend into the background.",
    t1_b1: "The polar bear's white fur hides it in the snow.", t1_b2: "The green frog stays unseen on leaves (camouflage).", t1_b3: "The eagle has sharp eyes for hunting.",
    t1_inst: "Match the animal with its superpower!",
    t1_l1: "Polar bear", t1_r1: "White, thick fur",
    t1_l2: "Frog", t1_r2: "Green skin to hide",
    t1_l3: "Eagle", t1_r3: "Sharp eyesight",
    t1_q: "Why is the green color good for the frog?",
    t1_q_a: "It hides them in the grass and leaves", t1_q_b: "It helps them jump", t1_q_c: "It keeps them warm", t1_q_d: "They like green apples",

    t2_title: "Predator or Prey?", t2_text: "In nature, predators hunt for food, while prey animals run and hide to stay safe.",
    t2_b1: "Lions and wolves are strong predators.", t2_b2: "Rabbits and deer are prey animals.", t2_b3: "Prey animals run very fast to escape.",
    t2_inst: "Predator or Prey? Sort them out!",
    t2_bucket_ragadozo: "Predator (Hunts)",
    t2_bucket_zsakmany: "Prey (Escapes)",
    t2_item_r1: "Wolf", t2_item_r2: "Lion",
    t2_item_z1: "Rabbit", t2_item_z2: "Mouse",
    t2_q: "What kind of animal is a lion?",
    t2_q_a: "A predator", t2_q_b: "Prey", t2_q_c: "Herbivore", t2_q_d: "Pet",

    t3_title: "Winter Sleep", t3_text: "Winter is cold and there is little food. Many animals sleep through the whole winter!",
    t3_b1: "Bears, hedgehogs, and bats hibernate.", t3_b2: "They eat a lot in autumn to get fat.", t3_b3: "They wake up in spring when it is warm.",
    t3_inst: "Fill in the missing word!",
    t3_gap_sentence: "When there is no food in winter, the bear goes into a cave for {gap}.",
    t3_c1: "hibernation", t3_c2: "a summer nap", t3_c3: "an afternoon nap",
    t3_q: "Why do animals hibernate?",
    t3_q_a: "Because it is cold and there is little food", t3_q_b: "Because they are lazy", t3_q_c: "Snowmen scare them", t3_q_d: "It's too dark",

    t4_title: "Migrating Birds", t4_text: "Some birds do not sleep in winter. In autumn, they fly far away to a warmer country.",
    t4_b1: "Storks and swallows are migrating birds.", t4_b2: "They often fly in a 'V' shape in the sky.", t4_b3: "They return to their nests in spring.",
    t4_inst: "Put the steps of migration in order!",
    t4_w1: "Autumn cold arrives", t4_w2: "Birds gather together", t4_w3: "They fly south", t4_w4: "They arrive in a warm place",
    t4_q: "Which bird flies to warmer places in autumn?",
    t4_q_a: "Stork", t4_q_b: "Penguin", t4_q_c: "Chicken", t4_q_d: "Ostrich",

    t5_title: "Animal Tracks", t5_text: "When it snows or the ground is muddy, animals leave footprints. We can tell who walked there!",
    t5_b1: "A bear's track is big with visible claws.", t5_b2: "Bird tracks look like tiny forks.", t5_b3: "Paw prints (like a fox) have a pad in the middle.",
    t5_inst: "Find the parts of the paw print on the diagram!",
    t5_area_pad: "Paw Pad (Middle)",
    t5_area_claw: "Toes (Around it)",
    t5_q: "When can we see animal tracks best in the forest?",
    t5_q_a: "In mud or fresh snow", t5_q_b: "When the wind blows", t5_q_c: "At night", t5_q_d: "On dry grass",
  },
  de: {
    explorer_title: "Welt der Wildtiere",
    t1_title: "Tarnung und Überleben", t1_text: "Wildtiere können sich gut anpassen! Manche haben dickes Fell, andere verschmelzen mit der Natur.",
    t1_b1: "Das weiße Fell versteckt den Eisbären im Schnee.", t1_b2: "Der grüne Frosch ist auf Blättern unsichtbar (Tarnung).", t1_b3: "Der Adler hat scharfe Augen für die Jagd.",
    t1_inst: "Verbinde das Tier mit seiner Fähigkeit!",
    t1_l1: "Eisbär", t1_r1: "Weißes, dickes Fell",
    t1_l2: "Frosch", t1_r2: "Grüne Haut zur Tarnung",
    t1_l3: "Adler", t1_r3: "Scharfe Augen",
    t1_q: "Warum ist die grüne Farbe gut für den Frosch?",
    t1_q_a: "Er kann sich im Gras verstecken", t1_q_b: "Er kann besser springen", t1_q_c: "Ihm ist wärmer", t1_q_d: "Er mag grüne Äpfel",

    t2_title: "Raubtier oder Beute?", t2_text: "In der Natur gibt es Raubtiere, die jagen, und Beutetiere, die fliehen und sich verstecken.",
    t2_b1: "Löwen und Wölfe sind starke Raubtiere.", t2_b2: "Hasen und Rehe sind Beutetiere.", t2_b3: "Beutetiere rennen schnell, um zu entkommen.",
    t2_inst: "Raubtier oder Beutetier? Sortiere sie!",
    t2_bucket_ragadozo: "Raubtier (Jäger)",
    t2_bucket_zsakmany: "Beutetier (Flieht)",
    t2_item_r1: "Wolf", t2_item_r2: "Löwe",
    t2_item_z1: "Hase", t2_item_z2: "Maus",
    t2_q: "Was für ein Tier ist der Löwe?",
    t2_q_a: "Ein Raubtier", t2_q_b: "Ein Beutetier", t2_q_c: "Pflanzenfresser", t2_q_d: "Haustier",

    t3_title: "Winterschlaf", t3_text: "Im Winter ist es kalt und es gibt wenig Futter. Viele Tiere schlafen den ganzen Winter!",
    t3_b1: "Bär, Igel und Fledermaus halten Winterschlaf.", t3_b2: "Im Herbst essen sie viel, um sich eine Fettschicht anzufressen.", t3_b3: "Im Frühling wachen sie auf.",
    t3_inst: "Ergänze den Satz!",
    t3_gap_sentence: "Wenn es im Winter kein Futter gibt, hält der Bär in der Höhle {gap}.",
    t3_c1: "Winterschlaf", t3_c2: "Sommerschlaf", t3_c3: "Mittagsschlaf",
    t3_q: "Warum halten Tiere Winterschlaf?",
    t3_q_a: "Weil es kalt ist und es wenig Futter gibt", t3_q_b: "Weil sie faul sind", t3_q_c: "Weil Schneemänner sie erschrecken", t3_q_d: "Weil es dunkel ist",

    t4_title: "Zugvögel", t4_text: "Manche Vögel schlafen nicht. Sie fliegen im Herbst in ein wärmeres Land.",
    t4_b1: "Störche und Schwalben sind Zugvögel.", t4_b2: "Sie fliegen oft in einer 'V'-Form am Himmel.", t4_b3: "Im Frühling kehren sie in ihr Nest zurück.",
    t4_inst: "Bringe die Reise der Zugvögel in die richtige Reihenfolge!",
    t4_w1: "Der kalte Herbst kommt", t4_w2: "Die Vögel sammeln sich", t4_w3: "Sie fliegen in den Süden", t4_w4: "Sie kommen im Warmen an",
    t4_q: "Welcher Vogel fliegt im Herbst ins Warme?",
    t4_q_a: "Der Storch", t4_q_b: "Der Pinguin", t4_q_c: "Das Huhn", t4_q_d: "Der Strauß",

    t5_title: "Tierspuren", t5_text: "Im Schnee oder Matsch hinterlassen Tiere Fußspuren. So wissen wir, wer dort war!",
    t5_b1: "Die Spur eines Bären ist groß und zeigt Krallen.", t5_b2: "Vogelspuren sehen aus wie kleine Gabeln.", t5_b3: "Pfotenabdrücke (z.B. Fuchs) haben einen Ballen in der Mitte.",
    t5_inst: "Finde die Teile des Pfotenabdrucks!",
    t5_area_pad: "Ballen (Mitte)",
    t5_area_claw: "Zehen (Außen)",
    t5_q: "Wann sehen wir Tierspuren am besten?",
    t5_q_a: "Im Matsch oder Neuschnee", t5_q_b: "Wenn der Wind weht", t5_q_c: "In der Nacht", t5_q_d: "Auf trockenem Gras",
  },
  ro: {
    explorer_title: "Lumea Animalelor Sălbatice",
    t1_title: "Camuflaj și Supraviețuire", t1_text: "Animalele sălbatice au o superputere: adaptarea! Unele au blană groasă, altele se ascund perfect.",
    t1_b1: "Blana albă ascunde ursul polar în zăpadă.", t1_b2: "Broasca verde este nevăzută pe frunze (camuflaj).", t1_b3: "Vulturul are ochi foarte ageri pentru vânătoare.",
    t1_inst: "Potrivește animalul cu superputerea sa!",
    t1_l1: "Urs polar", t1_r1: "Blană albă și groasă",
    t1_l2: "Broască", t1_r2: "Piele verde pentru ascundere",
    t1_l3: "Vultur", t1_r3: "Vedere ascuțită",
    t1_q: "De ce culoarea verde este bună pentru broască?",
    t1_q_a: "Se poate ascunde în iarbă și pe frunze", t1_q_b: "O ajută să sară", t1_q_c: "Îi ține cald", t1_q_d: "Îi plac merele verzi",

    t2_title: "Prădător sau Pradă?", t2_text: "În natură, prădătorii vânează, iar prada fuge și se ascunde pentru a se salva.",
    t2_b1: "Leul și lupul sunt prădători puternici.", t2_b2: "Iepurele și căprioara sunt pradă.", t2_b3: "Prada aleargă foarte repede ca să scape.",
    t2_inst: "Prădător sau Pradă? Sortează-le!",
    t2_bucket_ragadozo: "Prădător (Vânează)",
    t2_bucket_zsakmany: "Pradă (Fuge)",
    t2_item_r1: "Lup", t2_item_r2: "Leu",
    t2_item_z1: "Iepure", t2_item_z2: "Șoarece",
    t2_q: "Ce fel de animal este leul?",
    t2_q_a: "Un prădător", t2_q_b: "O pradă", t2_q_c: "Erbivor", t2_q_d: "Animal de companie",

    t3_title: "Somnul de iarnă", t3_text: "Iarna e frig și puțină mâncare. De aceea, multe animale dorm toată iarna!",
    t3_b1: "Ursul, ariciul și liliacul hibernează.", t3_b2: "Toamna mănâncă mult ca să se îngrașe.", t3_b3: "Se trezesc primăvara, când e cald.",
    t3_inst: "Completează cuvântul!",
    t3_gap_sentence: "Când nu e mâncare iarna, ursul intră în peșteră și intră în {gap}.",
    t3_c1: "hibernare", t3_c2: "somn de vară", t3_c3: "somn de prânz",
    t3_q: "De ce hibernează animalele?",
    t3_q_a: "Pentru că e frig și puțină mâncare", t3_q_b: "Pentru că sunt leneșe", t3_q_c: "Oamenii de zăpadă le sperie", t3_q_d: "Pentru că e întuneric",

    t4_title: "Păsări migratoare", t4_text: "Unele păsări nu dorm iarna. Toamna zboară foarte departe, în țări calde.",
    t4_b1: "Berzele și rândunelele sunt păsări migratoare.", t4_b2: "Ele zboară adesea în formă de 'V' pe cer.", t4_b3: "Primăvara se întorc la cuiburile lor.",
    t4_inst: "Pune etapele migrației în ordine!",
    t4_w1: "Vine frigul de toamnă", t4_w2: "Păsările se adună", t4_w3: "Zboară spre sud", t4_w4: "Ajung la căldură",
    t4_q: "Care pasăre migrează spre locuri calde toamna?",
    t4_q_a: "Barza", t4_q_b: "Pinguinul", t4_q_c: "Găina", t4_q_d: "Struțul",

    t5_title: "Urme de animale", t5_text: "Pe zăpadă sau noroi, animalele lasă urme de pași. Așa știm cine a trecut pe acolo!",
    t5_b1: "Urma ursului este mare, cu gheare vizibile.", t5_b2: "Urmele păsărilor arată ca niște furculițe mici.", t5_b3: "Urmele de lăbuțe (ex. vulpe) au o perniță la mijloc.",
    t5_inst: "Găsește părțile urmei de lăbuță pe desen!",
    t5_area_pad: "Perniță (Mijloc)",
    t5_area_claw: "Degete (În jur)",
    t5_q: "Când se văd cel mai bine urmele animalelor?",
    t5_q_a: "În noroi sau zăpadă proaspătă", t5_q_b: "Când bate vântul", t5_q_c: "Noaptea", t5_q_d: "Pe iarba uscată",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "ragadozo", label: "t2_bucket_ragadozo" },
        { id: "zsakmany", label: "t2_bucket_zsakmany" },
      ],
      items: [
        { text: "t2_item_r1", bucketId: "ragadozo" },
        { text: "t2_item_z1", bucketId: "zsakmany" },
        { text: "t2_item_r2", bucketId: "ragadozo" },
        { text: "t2_item_z2", bucketId: "zsakmany" },
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
      type: "label-diagram",
      areas: [
        { id: "pad", x: 50, y: 70, label: "t5_area_pad" },
        { id: "claw", x: 20, y: 30, label: "t5_area_claw" },
      ],
      instruction: "t5_inst",
      hint1: "t5_b3",
      hint2: "t5_b1",
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
  icon: "🐻",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WildAnimalsExplorer = memo(function WildAnimalsExplorer({
  color = "#B45309", // Amber-700
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
      explorerId="sachkunde_k2_wild_animals" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default WildAnimalsExplorer;
