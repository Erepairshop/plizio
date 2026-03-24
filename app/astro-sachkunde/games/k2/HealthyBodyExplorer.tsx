"use client";
// HealthyBodyExplorer.tsx — Sachkunde Island i1: Healthy Body (K2)
// Topics: 1) Táplálkozás (Egészséges/Egészségtelen) 2) Emésztés 3) Fogegészség 4) Mozgás és Testápolás 5) Összefoglaló

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis in <text>) ───

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Alma (Egészséges) */}
      <g transform="translate(80, 70)">
        <circle cx="0" cy="0" r="20" fill="#EF4444" />
        <path d="M 0,-20 Q 10,-35 20,-25 Q 10,-15 0,-20" fill="#22C55E" />
        <rect x="-2" y="-28" width="4" height="10" fill="#78350F" />
      </g>
      {/* Cukorka (Egészségtelen) */}
      <g transform="translate(160, 70)">
        <rect x="-15" y="-10" width="30" height="20" rx="4" fill="#F59E0B" />
        <polygon points="-15,0 -25,-10 -25,10" fill="#F59E0B" />
        <polygon points="15,0 25,-10 25,10" fill="#F59E0B" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEE2E2" rx="20" />
      {/* Emésztőrendszer leegyszerűsítve (Nyelőcső és Gyomor) */}
      <g transform="translate(120, 60)">
        <rect x="-10" y="-40" width="20" height="50" fill="#FCA5A5" rx="5" />
        <path d="M -10,10 C -40,10 -50,50 -10,60 C 30,70 50,30 10,10 Z" fill="#F87171" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Fog ábra */}
      <g transform="translate(120, 70)">
        <path d="M -20,-20 C -20,-40 -5,-40 0,-30 C 5,-40 20,-40 20,-20 C 20,0 15,10 10,30 C 8,40 5,40 5,30 C 5,20 -5,20 -5,30 C -5,40 -8,40 -10,30 C -15,10 -20,0 -20,-20 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="4" strokeLinejoin="round" />
        <path d="M -25,0 L 25,0" stroke="#BAE6FD" strokeWidth="2" strokeDasharray="4 4" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F3E8FF" rx="20" />
      {/* Szappan és buborékok */}
      <g transform="translate(120, 70)">
        <rect x="-30" y="-15" width="60" height="30" rx="15" fill="#A78BFA" />
        <ellipse cx="0" cy="0" rx="20" ry="8" fill="#C4B5FD" />
        <circle cx="-35" cy="-25" r="8" fill="#DDD6FE" opacity="0.8" />
        <circle cx="25" cy="-35" r="12" fill="#DDD6FE" opacity="0.8" />
        <circle cx="40" cy="-10" r="5" fill="#DDD6FE" opacity="0.8" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      {/* Szív alakzat a test egészségéért */}
      <g transform="translate(120, 75)">
        <path d="M 0,20 L -30,-10 A 15,15 0 0,1 0,-30 A 15,15 0 0,1 30,-10 Z" fill="#EF4444" />
        <path d="M -15,-15 L -5,-25" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Egészséges Test",
    // T1: Táplálkozás
    t1_title: "Egészséges és Egészségtelen",
    t1_text: "Ahhoz, hogy nagyra nőjünk és sok energiánk legyen, jól kell táplálkoznunk. A zöldségek és gyümölcsök tele vannak vitaminnal!",
    t1_b1: "A gyümölcsök (pl. alma) egészségesek.",
    t1_b2: "A túl sok édesség és cukor elrontja a fogunkat.",
    t1_b3: "Igyunk sok vizet a cukros üdítők helyett!",
    t1_inst: "Válogasd szét, mi egészséges és mi nem!",
    t1_bucket_egeszseges: "Egészséges",
    t1_bucket_rossz: "Egészségtelen",
    t1_item_e1: "Alma", t1_item_e2: "Sárgarépa",
    t1_item_r1: "Cukorka", t1_item_r2: "Kóla",
    t1_q: "Mit érdemes inni, ha nagyon szomjas vagy?",
    t1_q_a: "Tiszta vizet", t1_q_b: "Cukros szörpöt", t1_q_c: "Kólát", t1_q_d: "Forró csokit",

    // T2: Emésztés
    t2_title: "Hová tűnik az étel?",
    t2_text: "Amikor megeszünk valamit, az egy hosszú úton megy keresztül a testünkben. Ezt a folyamatot emésztésnek hívjuk.",
    t2_b1: "Először a szánkban jól megrágjuk az ételt.",
    t2_b2: "Utána a nyelőcsövön keresztül a gyomorba jut.",
    t2_b3: "Végül a belekből felszívódnak a fontos vitaminok.",
    t2_inst: "Tedd sorba, merre halad az étel!",
    t2_w1: "Száj", t2_w2: "Nyelőcső", t2_w3: "Gyomor", t2_w4: "Belek",
    t2_q: "Hol rágjuk apróra az ételt?",
    t2_q_a: "A szánkban a fogainkkal", t2_q_b: "A gyomrunkban", t2_q_c: "A nyelőcsőben", t2_q_d: "A belekben",

    // T3: Fogegészség
    t3_title: "A ragyogó mosoly",
    t3_text: "A fogaink segítenek a rágásban és a beszédben. Vigyáznunk kell rájuk, hogy ne lyukadjanak ki!",
    t3_b1: "A fog felső része a korona, ezt mossuk a fogkefével.",
    t3_b2: "A fog alsó része a gyökér, ami az ínyünkben bújik meg.",
    t3_b3: "Mossunk fogat naponta legalább kétszer!",
    t3_inst: "Keresd meg a fog részeit az ábrán!",
    t3_area_crown: "Korona (Felső rész)",
    t3_area_root: "Gyökér (Alsó rész)",
    t3_q: "Hányszor kell fogat mosni egy nap?",
    t3_q_a: "Legalább kétszer (reggel és este)", t3_q_b: "Csak vasárnap", t3_q_c: "Egyszer egy héten", t3_q_d: "Nem kell fogat mosni",

    // T4: Mozgás és Testápolás
    t4_title: "Tisztaság és sport",
    t4_text: "Az egészséges élethez fontos a mozgás és az, hogy tisztán tartsuk a testünket.",
    t4_b1: "Szappannal mossuk le a piszkot és a bacilusokat.",
    t4_b2: "A samponnal a hajunkat tartjuk tisztán.",
    t4_b3: "A sportcipőben kényelmesen tudunk futni és ugrálni.",
    t4_inst: "Melyiket mire használjuk? Párosítsd össze!",
    t4_l1: "Szappan", t4_r1: "Kéz- és testmosás",
    t4_l2: "Sampon", t4_r2: "Hajmosás",
    t4_l3: "Sportcipő", t4_r3: "Futás és mozgás",
    t4_q: "Mit használunk kézmosáshoz, hogy eltüntessük a baktériumokat?",
    t4_q_a: "Szappant és meleg vizet", t4_q_b: "Sarat", t4_q_c: "Cukrot", t4_q_d: "Testápolót",

    // T5: Összefoglaló
    t5_title: "Egészség bajnoka",
    t5_text: "A testünk egy csodálatos gépezet. Ha jól tápláljuk, sokat mozgunk és tisztán tartjuk, nagyon sokáig erős marad!",
    t5_b1: "Az egészség a legnagyobb kincsünk.",
    t5_b2: "A vitaminok megvédenek a betegségektől.",
    t5_b3: "Aludjunk eleget, hogy kipihenjük magunkat!",
    t5_inst: "Egészítsd ki a mondatot!",
    t5_gap_sentence: "Ha sok gyümölcsöt eszünk és sokat mozgunk, a testünk {gap} és erős lesz.",
    t5_c51: "egészséges", t5_c52: "fáradt", t5_c53: "beteg",
    t5_q: "Miért fontos az alvás?",
    t5_q_a: "Hogy a testünk és az agyunk kipihenje magát", t5_q_b: "Hogy ne kelljen iskolába menni", t5_q_c: "Hogy gyorsabban nőjön a hajunk", t5_q_d: "Nem fontos egyáltalán",
  },
  en: {
    explorer_title: "Healthy Body",
    t1_title: "Healthy vs. Unhealthy", t1_text: "To grow big and have lots of energy, we must eat well. Fruits and vegetables are full of vitamins!",
    t1_b1: "Fruits (like apples) are healthy.", t1_b2: "Too much candy and sugar ruins our teeth.", t1_b3: "Drink water instead of sugary sodas!",
    t1_inst: "Sort out what is healthy and what is not!",
    t1_bucket_egeszseges: "Healthy", t1_bucket_rossz: "Unhealthy",
    t1_item_e1: "Apple", t1_item_e2: "Carrot",
    t1_item_r1: "Candy", t1_item_r2: "Cola",
    t1_q: "What should you drink when you are very thirsty?",
    t1_q_a: "Clean water", t1_q_b: "Sugary syrup", t1_q_c: "Cola", t1_q_d: "Hot chocolate",

    t2_title: "Where Does Food Go?", t2_text: "When we eat, the food travels a long way inside our body. This is called digestion.",
    t2_b1: "First, we chew the food well in our mouth.", t2_b2: "Then it goes down the esophagus to the stomach.", t2_b3: "Finally, the intestines absorb important vitamins.",
    t2_inst: "Put the path of the food in order!",
    t2_w1: "Mouth", t2_w2: "Esophagus", t2_w3: "Stomach", t2_w4: "Intestines",
    t2_q: "Where do we chew our food into small pieces?",
    t2_q_a: "In our mouth with our teeth", t2_q_b: "In our stomach", t2_q_c: "In the esophagus", t2_q_d: "In the intestines",

    t3_title: "A Bright Smile", t3_text: "Our teeth help us chew and speak. We must take care of them so they don't get cavities!",
    t3_b1: "The top part of the tooth is the crown, we brush this.", t3_b2: "The bottom part is the root, hidden in the gums.", t3_b3: "Brush your teeth at least twice a day!",
    t3_inst: "Find the parts of the tooth on the diagram!",
    t3_area_crown: "Crown (Top part)", t3_area_root: "Root (Bottom part)",
    t3_q: "How many times should you brush your teeth a day?",
    t3_q_a: "At least twice (morning and night)", t3_q_b: "Only on Sundays", t3_q_c: "Once a week", t3_q_d: "No need to brush",

    t4_title: "Hygiene and Exercise", t4_text: "For a healthy life, moving around and keeping our bodies clean are very important.",
    t4_b1: "We use soap to wash away dirt and germs.", t4_b2: "We use shampoo to keep our hair clean.", t4_b3: "Sports shoes help us run and jump comfortably.",
    t4_inst: "What do we use them for? Match them up!",
    t4_l1: "Soap", t4_r1: "Washing hands and body",
    t4_l2: "Shampoo", t4_r2: "Washing hair",
    t4_l3: "Sports shoes", t4_r3: "Running and moving",
    t4_q: "What do we use to wash our hands and remove bacteria?",
    t4_q_a: "Soap and warm water", t4_q_b: "Mud", t4_q_c: "Sugar", t4_q_d: "Lotion",

    t5_title: "Health Champion", t5_text: "Our body is an amazing machine. If we feed it well, exercise, and keep it clean, it stays strong for a long time!",
    t5_b1: "Health is our greatest treasure.", t5_b2: "Vitamins protect us from getting sick.", t5_b3: "Get enough sleep to rest well!",
    t5_inst: "Fill in the missing word!",
    t5_gap_sentence: "If we eat lots of fruits and exercise, our body will be {gap} and strong.",
    t5_c51: "healthy", t5_c52: "tired", t5_c53: "sick",
    t5_q: "Why is sleep important?",
    t5_q_a: "To let our body and brain rest", t5_q_b: "To skip school", t5_q_c: "To make our hair grow faster", t5_q_d: "It's not important at all",
  },
  de: {
    explorer_title: "Gesunder Körper",
    t1_title: "Gesund und Ungesund", t1_text: "Um groß zu werden und Energie zu haben, müssen wir gut essen. Obst und Gemüse stecken voller Vitamine!",
    t1_b1: "Obst (wie Äpfel) ist gesund.", t1_b2: "Zu viel Zucker macht die Zähne kaputt.", t1_b3: "Trinke Wasser statt süßer Limonade!",
    t1_inst: "Sortiere, was gesund ist und was nicht!",
    t1_bucket_egeszseges: "Gesund", t1_bucket_rossz: "Ungesund",
    t1_item_e1: "Apfel", t1_item_e2: "Karotte",
    t1_item_r1: "Bonbon", t1_item_r2: "Cola",
    t1_q: "Was solltest du trinken, wenn du großen Durst hast?",
    t1_q_a: "Sauberes Wasser", t1_q_b: "Süßen Sirup", t1_q_c: "Cola", t1_q_d: "Heiße Schokolade",

    t2_title: "Wohin geht das Essen?", t2_text: "Wenn wir essen, macht das Essen eine lange Reise durch den Körper. Das nennt man Verdauung.",
    t2_b1: "Zuerst kauen wir das Essen im Mund gut durch.", t2_b2: "Dann rutscht es durch die Speiseröhre in den Magen.", t2_b3: "Zum Schluss nehmen die Därme wichtige Vitamine auf.",
    t2_inst: "Bringe den Weg des Essens in die richtige Reihenfolge!",
    t2_w1: "Mund", t2_w2: "Speiseröhre", t2_w3: "Magen", t2_w4: "Darm",
    t2_q: "Wo zerkleinern wir unser Essen?",
    t2_q_a: "Im Mund mit den Zähnen", t2_q_b: "Im Magen", t2_q_c: "In der Speiseröhre", t2_q_d: "Im Darm",

    t3_title: "Ein strahlendes Lächeln", t3_text: "Unsere Zähne helfen beim Kauen und Sprechen. Wir müssen sie pflegen, damit sie keine Löcher bekommen!",
    t3_b1: "Der obere Teil ist die Krone, die wir putzen.", t3_b2: "Der untere Teil ist die Wurzel im Zahnfleisch.", t3_b3: "Putze deine Zähne mindestens zweimal am Tag!",
    t3_inst: "Finde die Teile des Zahns auf dem Bild!",
    t3_area_crown: "Krone (Oben)", t3_area_root: "Wurzel (Unten)",
    t3_q: "Wie oft am Tag solltest du Zähne putzen?",
    t3_q_a: "Mindestens zweimal (morgens und abends)", t3_q_b: "Nur am Sonntag", t3_q_c: "Einmal pro Woche", t3_q_d: "Gar nicht",

    t4_title: "Pflege und Bewegung", t4_text: "Für ein gesundes Leben sind Bewegung und Sauberkeit sehr wichtig.",
    t4_b1: "Mit Seife waschen wir Schmutz und Bakterien weg.", t4_b2: "Mit Shampoo halten wir unsere Haare sauber.", t4_b3: "Mit Sportschuhen können wir bequem laufen.",
    t4_inst: "Wofür benutzen wir was? Verbinde die Paare!",
    t4_l1: "Seife", t4_r1: "Hände und Körper waschen",
    t4_l2: "Shampoo", t4_r2: "Haare waschen",
    t4_l3: "Sportschuhe", t4_r3: "Laufen und Bewegen",
    t4_q: "Womit waschen wir uns die Hände, um Bakterien zu entfernen?",
    t4_q_a: "Mit Seife und warmem Wasser", t4_q_b: "Mit Matsch", t4_q_c: "Mit Zucker", t4_q_d: "Mit Bodylotion",

    t5_title: "Gesundheits-Champion", t5_text: "Unser Körper ist eine tolle Maschine. Wenn wir ihn gut behandeln, bleibt er stark!",
    t5_b1: "Gesundheit ist unser größter Schatz.", t5_b2: "Vitamine schützen uns vor Krankheiten.", t5_b3: "Schlafe genug, um dich auszuruhen!",
    t5_inst: "Ergänze den Satz!",
    t5_gap_sentence: "Wenn wir viel Obst essen und uns bewegen, wird unser Körper {gap} und stark.",
    t5_c51: "gesund", t5_c52: "müde", t5_c53: "krank",
    t5_q: "Warum ist Schlaf so wichtig?",
    t5_q_a: "Damit sich Körper und Gehirn ausruhen", t5_q_b: "Damit man nicht zur Schule muss", t5_q_c: "Damit die Haare schneller wachsen", t5_q_d: "Ist gar nicht wichtig",
  },
  ro: {
    explorer_title: "Corpul Sănătos",
    t1_title: "Sănătos și Nesănătos", t1_text: "Ca să creștem mari și plini de energie, trebuie să mâncăm bine. Fructele și legumele sunt pline de vitamine!",
    t1_b1: "Fructele (cum ar fi merele) sunt sănătoase.", t1_b2: "Prea mult zahăr ne strică dinții.", t1_b3: "Bea apă curată în loc de sucuri cu zahăr!",
    t1_inst: "Sortează ce este sănătos și ce nu!",
    t1_bucket_egeszseges: "Sănătos", t1_bucket_rossz: "Nesănătos",
    t1_item_e1: "Măr", t1_item_e2: "Morcov",
    t1_item_r1: "Bomboană", t1_item_r2: "Cola",
    t1_q: "Ce ar trebui să bei când îți este foarte sete?",
    t1_q_a: "Apă curată", t1_q_b: "Sirop dulce", t1_q_c: "Cola", t1_q_d: "Ciocolată caldă",

    t2_title: "Unde merge mâncarea?", t2_text: "Când mâncăm, alimentele fac o călătorie lungă în corpul nostru. Acest proces se numește digestie.",
    t2_b1: "Prima dată mestecăm bine mâncarea în gură.", t2_b2: "Apoi coboară prin esofag până în stomac.", t2_b3: "La final, intestinele absorb vitaminele importante.",
    t2_inst: "Pune traseul mâncării în ordine!",
    t2_w1: "Gură", t2_w2: "Esofag", t2_w3: "Stomac", t2_w4: "Intestine",
    t2_q: "Unde mestecăm mâncarea în bucăți mici?",
    t2_q_a: "În gură, cu dinții noștri", t2_q_b: "În stomac", t2_q_c: "În esofag", t2_q_d: "În intestine",

    t3_title: "Un zâmbet strălucitor", t3_text: "Dinții ne ajută să mestecăm și să vorbim. Trebuie să avem grijă de ei ca să nu facă carii!",
    t3_b1: "Partea de sus este coroana, pe care o spălăm cu periuța.", t3_b2: "Partea de jos este rădăcina, ascunsă în gingie.", t3_b3: "Spală-te pe dinți de cel puțin două ori pe zi!",
    t3_inst: "Găsește părțile dintelui pe desen!",
    t3_area_crown: "Coroană (Partea de sus)", t3_area_root: "Rădăcină (Partea de jos)",
    t3_q: "De câte ori pe zi ar trebui să te speli pe dinți?",
    t3_q_a: "De cel puțin două ori (dimineața și seara)", t3_q_b: "Doar duminica", t3_q_c: "O dată pe săptămână", t3_q_d: "Nu trebuie",

    t4_title: "Igienă și Mișcare", t4_text: "Pentru o viață sănătoasă, mișcarea și curățenia corpului sunt foarte importante.",
    t4_b1: "Cu săpunul spălăm murdăria și microbii.", t4_b2: "Cu șamponul ne păstrăm părul curat.", t4_b3: "Cu pantofii sport putem alerga confortabil.",
    t4_inst: "Pentru ce le folosim? Potrivește-le!",
    t4_l1: "Săpun", t4_r1: "Spălarea mâinilor și a corpului",
    t4_l2: "Șampon", t4_r2: "Spălarea părului",
    t4_l3: "Pantofi sport", t4_r3: "Alergare și mișcare",
    t4_q: "Ce folosim pentru a ne spăla pe mâini și a scăpa de bacterii?",
    t4_q_a: "Săpun și apă caldă", t4_q_b: "Noroi", t4_q_c: "Zahăr", t4_q_d: "Loțiune",

    t5_title: "Campionul Sănătății", t5_text: "Corpul nostru este o mașinărie uimitoare. Dacă îl hrănim bine, facem sport și îl ținem curat, rămâne puternic mult timp!",
    t5_b1: "Sănătatea este cea mai mare comoară.", t5_b2: "Vitaminele ne apără de boli.", t5_b3: "Dormi destul pentru a te odihni!",
    t5_inst: "Completează propoziția!",
    t5_gap_sentence: "Dacă mâncăm multe fructe și facem mișcare, corpul nostru va fi {gap} și puternic.",
    t5_c51: "sănătos", t5_c52: "obosit", t5_c53: "bolnav",
    t5_q: "De ce este important somnul?",
    t5_q_a: "Pentru ca mintea și corpul să se odihnească", t5_q_b: "Ca să nu mergem la școală", t5_q_c: "Pentru ca părul să crească mai repede", t5_q_d: "Nu este important",
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
        { id: "egeszseges", label: "t1_bucket_egeszseges" },
        { id: "rossz", label: "t1_bucket_rossz" },
      ],
      items: [
        { text: "t1_item_e1", bucketId: "egeszseges" },
        { text: "t1_item_r1", bucketId: "rossz" },
        { text: "t1_item_e2", bucketId: "egeszseges" },
        { text: "t1_item_r2", bucketId: "rossz" },
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
      type: "label-diagram",
      areas: [
        { id: "crown", x: 50, y: 35, label: "t3_area_crown" },
        { id: "root",  x: 50, y: 80, label: "t3_area_root" },
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
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
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
  icon: "🍎",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const HealthyBodyExplorer = memo(function HealthyBodyExplorer({
  color = "#10B981", // Emerald green az egészséghez
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
      explorerId="sachkunde_k2_healthy_body" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default HealthyBodyExplorer;
