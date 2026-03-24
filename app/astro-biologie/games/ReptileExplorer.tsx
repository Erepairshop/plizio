"use client";
// ReptileExplorer.tsx — Bio Island i2: Hüllők és Madarak (K5)
// Topics: 1) Hüllők 2) Madarak 3) Hüllő vs Madár 4) Kültakaró és Tojás 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { ReptileAnatomySvg, BirdAnatomySvg, ReptileVsBirdSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="45" textAnchor="middle">🥚</text>
        <text x="40" y="15" fontSize="45" textAnchor="middle">🪶</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFEDD5" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="45" fill="#FED7AA" stroke="#F97316" strokeWidth="3" />
        <text x="-15" y="10" fontSize="30" textAnchor="middle">🦎</text>
        <text x="20" y="10" fontSize="30" textAnchor="middle">🦅</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Hüllők és Madarak",
    // T1: Hüllők
    t1_title: "A hüllők világa",
    t1_text: "A hüllők (pl. gyíkok, kígyók, teknősök) szárazföldi állatok. Bőrüket száraz, elszarusodó pikkelyek vagy pajzsok borítják, amelyek védik őket a kiszáradástól.",
    t1_b1: "Testhőmérsékletük változó (hidegvérűek).",
    t1_b2: "Tüdővel lélegeznek.",
    t1_b3: "Lágy héjú tojásokkal szaporodnak.",
    t1_inst: "Milyen a hüllők testhőmérséklete?",
    t1_gap_sentence: "A hüllők testhőmérséklete {gap}, azaz a környezettől függ.",
    t1_c1: "változó", t1_c2: "állandó", t1_c3: "mindig forró",
    t1_q: "Mivel lélegeznek a hüllők?",
    t1_q_a: "Tüdővel", t1_q_b: "Kopoltyúval", t1_q_c: "Bőrrel", t1_q_d: "Légcsövekkel",

    // T2: Madarak
    t2_title: "A madarak világa",
    t2_text: "A madarak a levegő meghódítói. Mellső végtagjaik szárnyakká alakultak, testüket pedig tollak borítják, amelyek segítik a repülést és melegen tartják őket.",
    t2_b1: "Testhőmérsékletük állandó (melegvérűek).",
    t2_b2: "Fogak helyett csőrük van.",
    t2_b3: "Meszes, kemény héjú tojásokat raknak.",
    t2_inst: "Tedd sorba a mondat szavait!",
    t2_w1: "A", t2_w2: "madarak", t2_w3: "testét", t2_w4: "tollak", t2_w5: "borítják.",
    t2_q: "Mi található a madarak szájában fogak helyett?",
    t2_q_a: "Csőr", t2_q_b: "Agyar", t2_q_c: "Szűrő", t2_q_d: "Nyelv",

    // T3: Hüllő vs Madár
    t3_title: "Hüllő vagy Madár?",
    t3_text: "Bár a madarak a hüllőkből fejlődtek ki, sok különbség van köztük. A legfontosabb a kültakaró, a testhőmérséklet és a tojásaik felépítése.",
    t3_b1: "Hüllő: pikkely, hidegvérű, lágy héjú tojás.",
    t3_b2: "Madár: toll, melegvérű, kemény héjú tojás.",
    t3_b3: "Mindkét csoport belső megtermékenyítésű.",
    t3_inst: "Válogasd szét a tulajdonságokat!",
    t3_bucket_rep: "Hüllők",
    t3_bucket_bir: "Madarak",
    t3_item_r1: "Változó testhő", t3_item_r2: "Pikkelyek",
    t3_item_b1: "Tollazat", t3_item_b2: "Állandó testhő",
    t3_q: "Melyik tulajdonság KÖZÖS a hüllőkben és a madarakban?",
    t3_q_a: "Gerincesek és tüdővel lélegeznek", t3_q_b: "Tolluk van", t3_q_c: "Hidegvérűek", t3_q_d: "Kopoltyújuk van",

    // T4: Kültakaró és Tojás
    t4_title: "Kültakaró és szaporodás",
    t4_text: "A hüllők pikkelyei megakadályozzák a vízvesztést a napon. A madarak tollai könnyűek, mégis kiválóan szigetelnek.",
    t4_b1: "A hüllők tojását a nap melege költi ki.",
    t4_b2: "A madarak a testmelegükkel kotlanak a tojásokon.",
    t4_b3: "A madártojás héja meszes és kemény.",
    t4_inst: "Párosítsd a fogalmakat!",
    t4_l1: "Hüllő tojás", t4_r1: "Bőrnemű, lágy héj",
    t4_l2: "Madár tojás", t4_r2: "Meszes, kemény héj",
    t4_l3: "Hüllő kültakaró", t4_r3: "Száraz pikkely/pajzs",
    t4_l4: "Madár kültakaró", t4_r4: "Tollazat",
    t4_q: "Hogyan költik ki a madarak a tojásaikat?",
    t4_q_a: "Testmelegükkel (kotlás)", t4_q_b: "A napra teszik", t4_q_c: "A vízbe rakják", t4_q_d: "Homokba ássák",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a hüllők és madarak világából! Emlékszel a legfontosabb különbségekre?",
    t5_b1: "Hüllő: Hidegvérű, pikkelyes.",
    t5_b2: "Madár: Melegvérű, tollas.",
    t5_b3: "Mindkét csoport tojásokkal szaporodik.",
    t5_inst: "Mivel lélegeznek a madarak?",
    t5_gap_sentence2: "A madarak, akárcsak a hüllők, {gap} lélegeznek.",
    t5_c51: "tüdővel", t5_c52: "kopoltyúval", t5_c53: "bőrrel",
    t5_q: "Melyik állítás IGAZ a madarakra?",
    t5_q_a: "Mellső végtagjaik szárnyakká alakultak.", t5_q_b: "Változó a testhőmérsékletük.", t5_q_c: "Nyálkás bőrük van.", t5_q_d: "Elevenszülők.",
  },
  en: {
    explorer_title: "Reptiles and Birds",
    t1_title: "World of Reptiles", t1_text: "Reptiles (lizards, snakes, turtles) are land animals. Their skin is covered in dry scales or scutes to prevent water loss.",
    t1_b1: "Cold-blooded (variable body temperature).", t1_b2: "Breathe with lungs.", t1_b3: "Lay soft-shelled eggs.",
    t1_inst: "What is the body temperature of reptiles like?", t1_gap_sentence: "Reptiles have a {gap} body temperature.",
    t1_c1: "variable", t1_c2: "constant", t1_c3: "boiling",
    t1_q: "How do reptiles breathe?", t1_q_a: "With lungs", t1_q_b: "With gills", t1_q_c: "Through their skin", t1_q_d: "With tracheae",

    t2_title: "World of Birds", t2_text: "Birds are masters of the air. Their forelimbs evolved into wings, and they are covered in feathers.",
    t2_b1: "Warm-blooded (constant body temperature).", t2_b2: "Have beaks instead of teeth.", t2_b3: "Lay hard, chalky eggs.",
    t2_inst: "Put the words in the correct order!",
    t2_w1: "Birds", t2_w2: "are", t2_w3: "covered", t2_w4: "in", t2_w5: "feathers.",
    t2_q: "What do birds have in their mouths instead of teeth?", t2_q_a: "A beak", t2_q_b: "Tusks", t2_q_c: "A filter", t2_q_d: "A tongue",

    t3_title: "Reptile or Bird?", t3_text: "Birds evolved from reptiles, but there are many differences, mainly in covering, body temperature, and eggs.",
    t3_b1: "Reptile: scales, cold-blooded, soft egg.", t3_b2: "Bird: feathers, warm-blooded, hard egg.", t3_b3: "Both use internal fertilization.",
    t3_inst: "Sort the traits!",
    t3_bucket_rep: "Reptiles", t3_bucket_bir: "Birds",
    t3_item_r1: "Cold-blooded", t3_item_r2: "Scales", t3_item_b1: "Feathers", t3_item_b2: "Warm-blooded",
    t3_q: "What trait is COMMON to both reptiles and birds?", t3_q_a: "Vertebrates with lungs", t3_q_b: "Have feathers", t3_q_c: "Cold-blooded", t3_q_d: "Have gills",

    t4_title: "Covering and Eggs", t4_text: "Reptile scales prevent drying out. Bird feathers are light but offer excellent insulation.",
    t4_b1: "Reptile eggs are incubated by the sun.", t4_b2: "Birds incubate eggs with their body heat.", t4_b3: "Bird eggs have hard, chalky shells.",
    t4_inst: "Match the concepts!",
    t4_l1: "Reptile egg", t4_r1: "Leathery, soft shell", t4_l2: "Bird egg", t4_r2: "Hard, chalky shell", t4_l3: "Reptile skin", t4_r3: "Dry scales", t4_l4: "Bird skin", t4_r4: "Feathers",
    t4_q: "How do birds incubate their eggs?", t4_q_a: "With their body heat", t4_q_b: "They put them in the sun", t4_q_c: "They put them in water", t4_q_d: "They bury them in sand",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about the world of reptiles and birds!",
    t5_b1: "Reptile: Cold-blooded, scaly.", t5_b2: "Bird: Warm-blooded, feathered.", t5_b3: "Both lay eggs.",
    t5_inst: "How do birds breathe?", t5_gap_sentence2: "Like reptiles, birds breathe with {gap}.",
    t5_c51: "lungs", t5_c52: "gills", t5_c53: "skin",
    t5_q: "Which statement is TRUE about birds?", t5_q_a: "Their forelimbs evolved into wings.", t5_q_b: "They are cold-blooded.", t5_q_c: "They have slimy skin.", t5_q_d: "They give birth to live young.",
  },
  de: {
    explorer_title: "Reptilien und Vögel",
    t1_title: "Welt der Reptilien", t1_text: "Reptilien (Echsen, Schlangen, Schildkröten) sind Landtiere. Ihre Haut hat trockene Schuppen, die vor Austrocknung schützen.",
    t1_b1: "Wechselwarm (Kaltblüter).", t1_b2: "Atmen mit Lungen.", t1_b3: "Legen weichschalige Eier.",
    t1_inst: "Wie ist die Körpertemperatur von Reptilien?", t1_gap_sentence: "Reptilien sind {gap}.",
    t1_c1: "wechselwarm", t1_c2: "gleichwarm", t1_c3: "immer heiß",
    t1_q: "Womit atmen Reptilien?", t1_q_a: "Mit Lungen", t1_q_b: "Mit Kiemen", t1_q_c: "Durch die Haut", t1_q_d: "Mit Tracheen",

    t2_title: "Welt der Vögel", t2_text: "Vögel beherrschen die Lüfte. Die Vordergliedmaßen sind zu Flügeln umgebildet. Federn ermöglichen den Flug und wärmen.",
    t2_b1: "Gleichwarm (Warmblüter).", t2_b2: "Haben einen Schnabel statt Zähne.", t2_b3: "Legen hartschalige, kalkige Eier.",
    t2_inst: "Bringe die Wörter in die richtige Reihenfolge!",
    t2_w1: "Der", t2_w2: "Körper", t2_w3: "der", t2_w4: "Vögel", t2_w5: "hat", t2_w6: "Federn.",
    t2_q: "Was haben Vögel statt Zähnen?", t2_q_a: "Einen Schnabel", t2_q_b: "Stoßzähne", t2_q_c: "Einen Filter", t2_q_d: "Eine Zunge",

    t3_title: "Reptil oder Vogel?", t3_text: "Vögel stammen von Reptilien ab, aber es gibt viele Unterschiede bei der Haut, Temperatur und den Eiern.",
    t3_b1: "Reptil: Schuppen, wechselwarm, weiches Ei.", t3_b2: "Vogel: Federn, gleichwarm, hartes Ei.", t3_b3: "Beide haben innere Befruchtung.",
    t3_inst: "Sortiere die Eigenschaften!",
    t3_bucket_rep: "Reptilien", t3_bucket_bir: "Vögel",
    t3_item_r1: "Wechselwarm", t3_item_r2: "Schuppen", t3_item_b1: "Federn", t3_item_b2: "Gleichwarm",
    t3_q: "Welche Eigenschaft haben Reptilien und Vögel GEMEINSAM?", t3_q_a: "Wirbeltiere mit Lungenatmung", t3_q_b: "Haben Federn", t3_q_c: "Sind wechselwarm", t3_q_d: "Haben Kiemen",

    t4_title: "Körperbedeckung und Eier", t4_text: "Schuppen schützen Reptilien. Federn sind leicht und isolieren perfekt.",
    t4_b1: "Reptilieneier werden oft von der Sonne ausgebrütet.", t4_b2: "Vögel brüten Eier mit ihrer Körperwärme aus.", t4_b3: "Vogeleier haben eine harte Kalkschale.",
    t4_inst: "Verbinde die Begriffe!",
    t4_l1: "Reptilienei", t4_r1: "Lederartige, weiche Schale", t4_l2: "Vogelei", t4_r2: "Harte Kalkschale", t4_l3: "Reptilienhaut", t4_r3: "Trockene Schuppen", t4_l4: "Vogelhaut", t4_r4: "Federn",
    t4_q: "Wie brüten Vögel ihre Eier aus?", t4_q_a: "Mit ihrer Körperwärme", t4_q_b: "In der Sonne", t4_q_c: "Im Wasser", t4_q_d: "Im Sand vergraben",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über Reptilien und Vögel!",
    t5_b1: "Reptil: Wechselwarm, Schuppen.", t5_b2: "Vogel: Gleichwarm, Federn.", t5_b3: "Beide legen Eier.",
    t5_inst: "Womit atmen Vögel?", t5_gap_sentence2: "Genau wie Reptilien atmen Vögel mit {gap}.",
    t5_c51: "Lungen", t5_c52: "Kiemen", t5_c53: "der Haut",
    t5_q: "Welche Aussage über Vögel ist WAHR?", t5_q_a: "Ihre Vorderbeine wurden zu Flügeln.", t5_q_b: "Sie sind wechselwarm.", t5_q_c: "Sie haben eine schleimige Haut.", t5_q_d: "Sie gebären lebende Junge.",
  },
  ro: {
    explorer_title: "Reptile și Păsări",
    t1_title: "Lumea Reptilelor", t1_text: "Reptilele (șopârle, șerpi, țestoase) sunt animale terestre. Pielea lor are solzi uscați care previn deshidratarea.",
    t1_b1: "Sânge rece (temperatură variabilă).", t1_b2: "Respiră prin plămâni.", t1_b3: "Depun ouă cu coajă moale.",
    t1_inst: "Cum este temperatura corpului reptilelor?", t1_gap_sentence: "Reptilele au o temperatură a corpului {gap}.",
    t1_c1: "variabilă", t1_c2: "constantă", t1_c3: "fierbinte",
    t1_q: "Cu ce respiră reptilele?", t1_q_a: "Cu plămânii", t1_q_b: "Cu branhiile", t1_q_c: "Prin piele", t1_q_d: "Prin trahee",

    t2_title: "Lumea Păsărilor", t2_text: "Păsările sunt stăpânele aerului. Membrele anterioare au devenit aripi, iar corpul e acoperit cu pene.",
    t2_b1: "Sânge cald (temperatură constantă).", t2_b2: "Au cioc în loc de dinți.", t2_b3: "Depun ouă cu coajă tare, calcaroasă.",
    t2_inst: "Pune cuvintele în ordinea corectă!",
    t2_w1: "Corpul", t2_w2: "păsărilor", t2_w3: "este", t2_w4: "acoperit", t2_w5: "de", t2_w6: "pene.",
    t2_q: "Ce au păsările în gură în loc de dinți?", t2_q_a: "Un cioc", t2_q_b: "Colți", t2_q_c: "Un filtru", t2_q_d: "O limbă",

    t3_title: "Reptilă sau Pasăre?", t3_text: "Păsările au evoluat din reptile, dar există diferențe majore la piele, temperatură și ouă.",
    t3_b1: "Reptile: solzi, sânge rece, ouă moi.", t3_b2: "Păsări: pene, sânge cald, ouă tari.", t3_b3: "Ambele au fecundație internă.",
    t3_inst: "Sortează caracteristicile!",
    t3_bucket_rep: "Reptile", t3_bucket_bir: "Păsări",
    t3_item_r1: "Sânge rece", t3_item_r2: "Solzi", t3_item_b1: "Pene", t3_item_b2: "Sânge cald",
    t3_q: "Ce trăsătură este COMUNĂ reptilelor și păsărilor?", t3_q_a: "Vertebrate care respiră prin plămâni", t3_q_b: "Au pene", t3_q_c: "Sunt cu sânge rece", t3_q_d: "Au branhii",

    t4_title: "Înveliș și Ouă", t4_text: "Solzii reptilelor previn uscarea. Penele păsărilor sunt ușoare, dar izolează termic foarte bine.",
    t4_b1: "Ouăle de reptilă sunt clocite de căldura soarelui.", t4_b2: "Păsările își clocesc ouăle cu căldura corpului.", t4_b3: "Ouăle de pasăre au coajă calcaroasă tare.",
    t4_inst: "Potrivește conceptele!",
    t4_l1: "Ou de reptilă", t4_r1: "Coajă moale, pieloasă", t4_l2: "Ou de pasăre", t4_r2: "Coajă tare, calcaroasă", t4_l3: "Piele de reptilă", t4_r3: "Solzi uscați", t4_l4: "Piele de pasăre", t4_r4: "Pene",
    t4_q: "Cum își clocesc păsările ouăle?", t4_q_a: "Cu căldura corpului lor", t4_q_b: "Le pun la soare", t4_q_c: "Le pun în apă", t4_q_d: "Le îngroapă în nisip",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre reptile și păsări!",
    t5_b1: "Reptile: sânge rece, solzi.", t5_b2: "Păsări: sânge cald, pene.", t5_b3: "Ambele depun ouă.",
    t5_inst: "Cum respiră păsările?", t5_gap_sentence2: "La fel ca reptilele, păsările respiră prin {gap}.",
    t5_c51: "plămâni", t5_c52: "branhii", t5_c53: "piele",
    t5_q: "Care afirmație este ADEVĂRATĂ despre păsări?", t5_q_a: "Membrele anterioare s-au transformat în aripi.", t5_q_b: "Au sânge rece.", t5_q_c: "Au pielea mucoasă.", t5_q_d: "Nasc pui vii.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <ReptileAnatomySvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
    svg: (lang) => <BirdAnatomySvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4],
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
    svg: (lang) => <ReptileVsBirdSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "rep", label: "t3_bucket_rep" },
        { id: "bir", label: "t3_bucket_bir" },
      ],
      items: [
        { text: "t3_item_r1", bucketId: "rep" },
        { text: "t3_item_b1", bucketId: "bir" },
        { text: "t3_item_r2", bucketId: "rep" },
        { text: "t3_item_b2", bucketId: "bir" },
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
        { left: "t4_l4", right: "t4_r4" },
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
      sentence: "t5_gap_sentence2",
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
  icon: "🦎",
  topics: TOPICS,
  rounds: [], 
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReptileExplorer = memo(function ReptileExplorer({
  color = "#B45309", // Földes, narancsos barna árnyalat (amber-700)
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
      grade={5} 
      explorerId="bio_k5_reptiles_birds" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default ReptileExplorer;
