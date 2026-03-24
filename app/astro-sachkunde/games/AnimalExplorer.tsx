"use client";
// AnimalExplorer.tsx — Sachkunde Island i2: Pets & Wild Animals (K1)
// Topics: 1) Háziállatok 2) Vadállatok 3) Mit esznek? 4) Állatkölykök 5) Összefoglaló

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="20" fontSize="70" textAnchor="middle">🐕</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="15" fontSize="45" textAnchor="middle">🌲</text>
        <text x="0" y="15" fontSize="45" textAnchor="middle">🐻</text>
        <text x="50" y="15" fontSize="45" textAnchor="middle">🌲</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="45" textAnchor="middle">🐇</text>
        <path d="M -10,0 L 10,0" stroke="#16A34A" strokeWidth="4" strokeDasharray="4 4" markerEnd="url(#arrow)" />
        <text x="40" y="15" fontSize="45" textAnchor="middle">🥕</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FCE7F3" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-30" y="15" fontSize="45" textAnchor="middle">🐈</text>
        <text x="30" y="15" fontSize="30" textAnchor="middle">🐈‍⬛</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="45" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🐾</text>
        <text x="25" y="5" fontSize="30" textAnchor="middle">❤️</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Állatok világa",
    // T1: Háziállatok (Label-diagram)
    t1_title: "A háziállatok",
    t1_text: "Néhány állat velünk él otthon vagy a ház körül. Ők a háziállatok. Etetjük őket, vigyázunk rájuk és sokat játszunk velük.",
    t1_b1: "A kutya megvédi a házat és hűséges társ.",
    t1_b2: "A cica egeret fog és szeret dorombolni.",
    t1_b3: "Vannak még nyuszik, hörcsögök és papagájok is!",
    t1_inst: "Mutasd meg a kutyus testrészeit!",
    t1_area_ear: "Fül",
    t1_area_tail: "Farok",
    t1_area_paw: "Mancs",
    t1_q: "Melyik állat ugat és őrzi a házat?",
    t1_q_a: "A kutya", t1_q_b: "A macska", t1_q_c: "Az aranyhal", t1_q_d: "A nyuszi",

    // T2: Vadállatok (Drag-to-bucket)
    t2_title: "Vadon élő állatok",
    t2_text: "A vadállatok kint élnek a természetben, az erdőben vagy a mezőn. Maguknak keresnek élelmet és elbújnak az emberek elől.",
    t2_b1: "A medve szereti a málnát és a mézet.",
    t2_b2: "A róka ravasz és nagyon gyors.",
    t2_b3: "A szarvas agancsot visel a fején.",
    t2_inst: "Háziállat vagy Vadállat? Válogasd szét őket!",
    t2_bucket_hazi: "Háziállat 🏠",
    t2_bucket_vad: "Vadállat 🌲",
    t2_item_h1: "Kutya", t2_item_h2: "Cica",
    t2_item_v1: "Medve", t2_item_v2: "Róka",
    t2_q: "Hol élnek a vadállatok?",
    t2_q_a: "Az erdőben és a mezőn", t2_q_b: "A szobánkban", t2_q_c: "Az ágy alatt", t2_q_d: "A boltokban",

    // T3: Mit esznek? (Match-pairs)
    t3_title: "Mit esznek az állatok?",
    t3_text: "Minden állat mást szeret enni. Van, amelyik a ropogós zöldségeket szereti, mások a húst vagy a magvakat.",
    t3_b1: "A nyuszi imádja a répát és a káposztát.",
    t3_b2: "A boci és a ló friss füvet legel.",
    t3_b3: "A majom kedvence a sárga banán.",
    t3_inst: "Párosítsd az állatot a kedvenc ételével!",
    t3_l1: "Nyuszi 🐇", t3_r1: "Répa 🥕",
    t3_l2: "Majom 🐒", t3_r2: "Banán 🍌",
    t3_l3: "Tehén 🐄", t3_r3: "Fű 🌿",
    t3_q: "Mit szeret a legjobban ropogtatni a nyuszi?",
    t3_q_a: "A répát", t3_q_b: "A csokit", t3_q_c: "A kavicsot", t3_q_d: "A fagyit",

    // T4: Állatkölykök (Gap-fill)
    t4_title: "Az állatok kicsinyei",
    t4_text: "Az állatok is kisbabaként születnek. Az állatkölykök nagyon aranyosak, és sokszor külön nevük van.",
    t4_b1: "A kutya kicsinye a kiskutya vagy kölyökkutya.",
    t4_b2: "A macska babája a kiscica.",
    t4_b3: "A ló kicsinye a kiscsikó.",
    t4_inst: "Egészítsd ki a mondatot!",
    t4_gap_sentence: "A macska kicsinyét {gap} hívjuk.",
    t4_c1: "kiscicának", t4_c2: "kiskutyának", t4_c3: "kiscsibének",
    t4_q: "Hogyan nevezzük a kutya kicsinyét?",
    t4_q_a: "Kölyökkutya", t4_q_b: "Malac", t4_q_c: "Bárány", t4_q_d: "Boci",

    // T5: Összefoglaló
    t5_title: "Szeretjük az állatokat",
    t5_text: "Legyen szó háziállatról vagy vadállatról, minden állat nagyon fontos a Földön. Vigyáznunk kell rájuk!",
    t5_b1: "A háziállatokat etetni kell.",
    t5_b2: "A vadállatokat ne zavarjuk az erdőben.",
    t5_b3: "Szeressük a természetet!",
    t5_inst: "Mit kell tennünk az állatokkal?",
    t5_gap_sentence2: "Minden állatra {gap} kell.",
    t5_c51: "vigyáznunk", t5_c52: "kiabálnunk", t5_c53: "ijjesztenünk",
    t5_q: "Hogyan kell bánni az állatokkal?",
    t5_q_a: "Szeretettel és gondoskodással", t5_q_b: "Hangos kiabálással", t5_q_c: "Soha nem szabad rájuk nézni", t5_q_d: "El kell zavarni őket",
  },
  en: {
    explorer_title: "World of Animals",
    t1_title: "Our Pets", t1_text: "Some animals live with us at home. They are our pets. We feed them, care for them, and play with them.",
    t1_b1: "The dog protects the house and is a loyal friend.", t1_b2: "The cat catches mice and loves to purr.", t1_b3: "We also have bunnies, hamsters, and parrots!",
    t1_inst: "Show the body parts of the dog!",
    t1_area_ear: "Ear", t1_area_tail: "Tail", t1_area_paw: "Paw",
    t1_q: "Which animal barks and guards the house?", t1_q_a: "The dog", t1_q_b: "The cat", t1_q_c: "The goldfish", t1_q_d: "The bunny",

    t2_title: "Wild Animals", t2_text: "Wild animals live outside in nature, in the forest or fields. They find their own food and hide from people.",
    t2_b1: "The bear likes berries and honey.", t2_b2: "The fox is clever and very fast.", t2_b3: "The deer wears antlers on its head.",
    t2_inst: "Pet or Wild Animal? Sort them out!",
    t2_bucket_hazi: "Pet 🏠", t2_bucket_vad: "Wild Animal 🌲",
    t2_item_h1: "Dog", t2_item_h2: "Cat",
    t2_item_v1: "Bear", t2_item_v2: "Fox",
    t2_q: "Where do wild animals live?", t2_q_a: "In the forest and fields", t2_q_b: "In our room", t2_q_c: "Under the bed", t2_q_d: "In shops",

    t3_title: "What do they eat?", t3_text: "Every animal likes to eat different things. Some like crunchy veggies, others like meat or seeds.",
    t3_b1: "The bunny loves carrots and cabbage.", t3_b2: "The cow and horse eat fresh grass.", t3_b3: "The monkey's favorite is a yellow banana.",
    t3_inst: "Match the animal with its favorite food!",
    t3_l1: "Bunny 🐇", t3_r1: "Carrot 🥕",
    t3_l2: "Monkey 🐒", t3_r2: "Banana 🍌",
    t3_l3: "Cow 🐄", t3_r3: "Grass 🌿",
    t3_q: "What does the bunny like to crunch on the most?", t3_q_a: "Carrots", t3_q_b: "Chocolate", t3_q_c: "Pebbles", t3_q_d: "Ice cream",

    t4_title: "Animal Babies", t4_text: "Animals are born as babies too. Animal babies are very cute and often have special names.",
    t4_b1: "A baby dog is a puppy.", t4_b2: "A baby cat is a kitten.", t4_b3: "A baby horse is a foal.",
    t4_inst: "Complete the sentence!", t4_gap_sentence: "The baby of a cat is called a {gap}.",
    t4_c1: "kitten", t4_c2: "puppy", t4_c3: "chick",
    t4_q: "What do we call a baby dog?", t4_q_a: "Puppy", t4_q_b: "Piglet", t4_q_c: "Lamb", t4_q_d: "Calf",

    t5_title: "We Love Animals", t5_text: "Whether it is a pet or a wild animal, every animal is important. We must take care of them!",
    t5_b1: "Pets need to be fed.", t5_b2: "Do not disturb wild animals in the forest.", t5_b3: "Let's love nature!",
    t5_inst: "What should we do with animals?", t5_gap_sentence2: "We must {gap} all animals.",
    t5_c51: "protect", t5_c52: "yell at", t5_c53: "scare",
    t5_q: "How should we treat animals?", t5_q_a: "With love and care", t5_q_b: "With loud yelling", t5_q_c: "Never look at them", t5_q_d: "Chase them away",
  },
  de: {
    explorer_title: "Welt der Tiere",
    t1_title: "Unsere Haustiere", t1_text: "Einige Tiere leben bei uns zu Hause. Es sind Haustiere. Wir füttern sie und spielen mit ihnen.",
    t1_b1: "Der Hund beschützt das Haus und ist ein treuer Freund.", t1_b2: "Die Katze fängt Mäuse und schnurrt gern.", t1_b3: "Es gibt auch Kaninchen, Hamster und Papageien!",
    t1_inst: "Zeige die Körperteile des Hundes!",
    t1_area_ear: "Ohr", t1_area_tail: "Schwanz", t1_area_paw: "Pfote",
    t1_q: "Welches Tier bellt und bewacht das Haus?", t1_q_a: "Der Hund", t1_q_b: "Die Katze", t1_q_c: "Der Goldfisch", t1_q_d: "Das Kaninchen",

    t2_title: "Wilde Tiere", t2_text: "Wilde Tiere leben draußen in der Natur, im Wald oder auf dem Feld. Sie suchen ihr Futter selbst.",
    t2_b1: "Der Bär mag Beeren und Honig.", t2_b2: "Der Fuchs ist schlau und sehr schnell.", t2_b3: "Der Hirsch trägt ein Geweih auf dem Kopf.",
    t2_inst: "Haustier oder Wildtier? Sortiere sie!",
    t2_bucket_hazi: "Haustier 🏠", t2_bucket_vad: "Wildtier 🌲",
    t2_item_h1: "Hund", t2_item_h2: "Katze",
    t2_item_v1: "Bär", t2_item_v2: "Fuchs",
    t2_q: "Wo leben die wilden Tiere?", t2_q_a: "Im Wald und auf dem Feld", t2_q_b: "In unserem Zimmer", t2_q_c: "Unter dem Bett", t2_q_d: "In Geschäften",

    t3_title: "Was fressen sie?", t3_text: "Jedes Tier isst etwas anderes. Manche mögen knackiges Gemüse, andere Fleisch oder Körner.",
    t3_b1: "Das Kaninchen liebt Möhren und Kohl.", t3_b2: "Die Kuh und das Pferd fressen frisches Gras.", t3_b3: "Der Affe mag am liebsten gelbe Bananen.",
    t3_inst: "Verbinde das Tier mit seinem Lieblingsessen!",
    t3_l1: "Kaninchen 🐇", t3_r1: "Möhre 🥕",
    t3_l2: "Affe 🐒", t3_r2: "Banane 🍌",
    t3_l3: "Kuh 🐄", t3_r3: "Gras 🌿",
    t3_q: "Was knabbert das Kaninchen am liebsten?", t3_q_a: "Möhren", t3_q_b: "Schokolade", t3_q_c: "Steine", t3_q_d: "Eiscreme",

    t4_title: "Tierkinder", t4_text: "Auch Tiere werden als Babys geboren. Tierkinder sind sehr süß und haben oft eigene Namen.",
    t4_b1: "Das Baby vom Hund ist der Welpe.", t4_b2: "Das Baby der Katze ist das Kätzchen.", t4_b3: "Das Baby vom Pferd ist das Fohlen.",
    t4_inst: "Ergänze den Satz!", t4_gap_sentence: "Das Baby der Katze nennen wir {gap}.",
    t4_c1: "Kätzchen", t4_c2: "Welpe", t4_c3: "Küken",
    t4_q: "Wie nennen wir das Baby vom Hund?", t4_q_a: "Welpe", t4_q_b: "Ferkel", t4_q_c: "Lamm", t4_q_d: "Kalb",

    t5_title: "Wir lieben Tiere", t5_text: "Ob Haustier oder Wildtier, jedes Tier ist wichtig auf der Erde. Wir müssen auf sie aufpassen!",
    t5_b1: "Haustiere müssen gefüttert werden.", t5_b2: "Wilde Tiere im Wald nicht stören.", t5_b3: "Wir lieben die Natur!",
    t5_inst: "Was müssen wir für die Tiere tun?", t5_gap_sentence2: "Wir müssen alle Tiere {gap}.",
    t5_c51: "beschützen", t5_c52: "anschreien", t5_c53: "erschrecken",
    t5_q: "Wie sollen wir mit Tieren umgehen?", t5_q_a: "Mit Liebe und Fürsorge", t5_q_b: "Mit lautem Schreien", t5_q_c: "Gar nicht anschauen", t5_q_d: "Wegjagen",
  },
  ro: {
    explorer_title: "Lumea Animalelor",
    t1_title: "Animalele de companie", t1_text: "Unele animale trăiesc cu noi acasă. Le hrănim și ne jucăm mult cu ele.",
    t1_b1: "Câinele apără casa și este un prieten fidel.", t1_b2: "Pisica prinde șoareci și îi place să toarcă.", t1_b3: "Mai avem și iepurași, hamsteri și papagali!",
    t1_inst: "Arată părțile corpului cățelului!",
    t1_area_ear: "Ureche", t1_area_tail: "Coadă", t1_area_paw: "Lăbuță",
    t1_q: "Care animal latră și păzește casa?", t1_q_a: "Câinele", t1_q_b: "Pisica", t1_q_c: "Peștișorul", t1_q_d: "Iepurașul",

    t2_title: "Animale sălbatice", t2_text: "Animalele sălbatice trăiesc afară în natură, în pădure. Ele își caută singure hrana.",
    t2_b1: "Ursului îi plac zmeura și mierea.", t2_b2: "Vulpea este șireată și foarte rapidă.", t2_b3: "Cerbul poartă coarne pe cap.",
    t2_inst: "Animal de companie sau Sălbatic? Sortează-le!",
    t2_bucket_hazi: "De companie 🏠", t2_bucket_vad: "Sălbatic 🌲",
    t2_item_h1: "Câine", t2_item_h2: "Pisică",
    t2_item_v1: "Urs", t2_item_v2: "Vulpe",
    t2_q: "Unde trăiesc animalele sălbatice?", t2_q_a: "În pădure și pe câmp", t2_q_b: "În camera noastră", t2_q_c: "Sub pat", t2_q_d: "În magazine",

    t3_title: "Ce mănâncă?", t3_text: "Fiecare animal mănâncă altceva. Unora le plac legumele, altora carnea sau semințele.",
    t3_b1: "Iepurașul iubește morcovii și varza.", t3_b2: "Văcuța și calul mănâncă iarbă proaspătă.", t3_b3: "Preferata maimuței este banana galbenă.",
    t3_inst: "Potrivește animalul cu mâncarea preferată!",
    t3_l1: "Iepuraș 🐇", t3_r1: "Morcov 🥕",
    t3_l2: "Maimuță 🐒", t3_r2: "Banană 🍌",
    t3_l3: "Văcuță 🐄", t3_r3: "Iarbă 🌿",
    t3_q: "Ce îi place iepurașului să ronțăie cel mai mult?", t3_q_a: "Morcovul", t3_q_b: "Ciocolata", t3_q_c: "Pietricele", t3_q_d: "Înghețata",

    t4_title: "Puii de animale", t4_text: "Și animalele se nasc ca bebeluși. Puii de animale sunt foarte drăguți.",
    t4_b1: "Puiul câinelui este cățelușul.", t4_b2: "Puiul pisicii este pisoiul.", t4_b3: "Puiul calului este mânzul.",
    t4_inst: "Completează propoziția!", t4_gap_sentence: "Puiul pisicii se numește {gap}.",
    t4_c1: "pisoi", t4_c2: "cățeluș", t4_c3: "puișor",
    t4_q: "Cum numim puiul câinelui?", t4_q_a: "Cățeluș", t4_q_b: "Purceluș", t4_q_c: "Miel", t4_q_d: "Vițel",

    t5_title: "Iubim animalele", t5_text: "Fie că e de companie sau sălbatic, fiecare animal este important pe Pământ.",
    t5_b1: "Animalele de companie trebuie hrănite.", t5_b2: "Nu deranjăm animalele sălbatice în pădure.", t5_b3: "Să iubim natura!",
    t5_inst: "Ce trebuie să facem cu animalele?", t5_gap_sentence2: "Trebuie să {gap} toate animalele.",
    t5_c51: "protejăm", t5_c52: "strigăm la", t5_c53: "speriem",
    t5_q: "Cum trebuie să ne purtăm cu animalele?", t5_q_a: "Cu dragoste și grijă", t5_q_b: "Să strigăm la ele", t5_q_c: "Să nu ne uităm la ele", t5_q_d: "Să le alungăm",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />, // Nagy kutyus emoji
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "ear",  x: 40, y: 35, label: "t1_area_ear" },
        { id: "tail", x: 65, y: 55, label: "t1_area_tail" },
        { id: "paw",  x: 45, y: 80, label: "t1_area_paw" },
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
        { id: "hazi", label: "t2_bucket_hazi" },
        { id: "vad", label: "t2_bucket_vad" },
      ],
      items: [
        { text: "t2_item_h1", bucketId: "hazi" },
        { text: "t2_item_v1", bucketId: "vad" },
        { text: "t2_item_h2", bucketId: "hazi" },
        { text: "t2_item_v2", bucketId: "vad" },
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
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
      type: "gap-fill",
      sentence: "t4_gap_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0,
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
      sentence: "t5_gap_sentence2",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
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
  icon: "🐻",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const AnimalExplorer = memo(function AnimalExplorer({
  color = "#F59E0B", // Borostyánsárga az állatokhoz
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
      grade={1} 
      explorerId="sachkunde_k1_animals" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default AnimalExplorer;
