"use client";
// BodyExplorer.tsx — Sachkunde Island i1: Body & Senses (K1)
// Topics: 1) Testrészek 2) Az öt érzékünk 3) Látás és Hallás 4) Ízlelés és Szaglás 5) Összefoglaló

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
// Import a táblázat alapján:
import { FiveSensesSvg } from "@/app/astro-sachkunde/svg/k2/KidsScienceSvg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF4FF" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="-30" r="20" fill="#FDE047" /> {/* Fej */}
        <rect x="-10" y="-10" width="20" height="40" rx="5" fill="#3B82F6" /> {/* Test */}
        <rect x="-35" y="-10" width="20" height="8" rx="4" fill="#FDE047" transform="rotate(-30, -25, -6)" /> {/* Bal kar */}
        <rect x="15" y="-10" width="20" height="8" rx="4" fill="#FDE047" transform="rotate(30, 25, -6)" /> {/* Jobb kar */}
        <rect x="-10" y="30" width="8" height="25" rx="4" fill="#FDE047" /> {/* Bal láb */}
        <rect x="2" y="30" width="8" height="25" rx="4" fill="#FDE047" /> {/* Jobb láb */}
        <text x="0" y="-25" fontSize="15" textAnchor="middle">😊</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="45" textAnchor="middle">👁️</text>
        <text x="40" y="15" fontSize="45" textAnchor="middle">👂</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="45" textAnchor="middle">👃</text>
        <text x="40" y="15" fontSize="45" textAnchor="middle">👅</text>
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
        <text x="0" y="15" fontSize="45" textAnchor="middle">🖐️</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Testünk és Érzékeink",
    // T1: Testrészek (Label-diagram)
    t1_title: "A testrészeim",
    t1_text: "Nézd meg jól a testünket! Minden résznek megvan a maga fontos feladata. A lábunkkal futunk, a kezünkkel fogunk.",
    t1_b1: "Fej: itt van az agyunk és az arcunk.",
    t1_b2: "Törzs: a hasunk és a hátunk.",
    t1_b3: "Végtagok: a két karunk és a két lábunk.",
    t1_inst: "Mutasd meg, hol vannak a testrészek!",
    t1_area_head: "Fej",
    t1_area_arm: "Kar",
    t1_area_tummy: "Has (Törzs)",
    t1_area_leg: "Láb",
    t1_q: "Mivel szoktunk futni és ugrálni?",
    t1_q_a: "A lábunkkal", t1_q_b: "A fejünkkel", t1_q_c: "A hasunkkal", t1_q_d: "A fülünkkel",

    // T2: Az öt érzék (Match-pairs)
    t2_title: "Az öt érzékünk",
    t2_text: "A világot ötféleképpen tudjuk megfigyelni. Ezeket az érzékszerveinkkel csináljuk.",
    t2_b1: "Szememmel látok, fülemmel hallok.",
    t2_b2: "Orrommal szaglászok, nyelvemmel ízlelek.",
    t2_b3: "A bőrömmel, a kezemmel pedig tapintok.",
    t2_inst: "Melyik testrésszel mit csinálunk? Párosítsd össze!",
    t2_l1: "Szem 👁️", t2_r1: "Látás",
    t2_l2: "Fül 👂", t2_r2: "Hallás",
    t2_l3: "Orr 👃", t2_r3: "Szaglás",
    t2_q: "Melyik testrészünkkel halljuk a madarak énekét?",
    t2_q_a: "A fülünkkel", t2_q_b: "A szemünkkel", t2_q_c: "A nyelvünkkel", t2_q_d: "Az orrunkkal",

    // T3: Látás és Hallás (Drag-to-bucket)
    t3_title: "Mit látok? Mit hallok?",
    t3_text: "A szemünk a színeket és formákat figyeli, a fülünk pedig a hangokat gyűjti össze.",
    t3_b1: "A naplementét vagy egy szép rajzot látunk.",
    t3_b2: "A zenét vagy a kutyaugatást halljuk.",
    t3_b3: "Vigyázzunk rájuk: a túl hangos zene rossz a fülnek!",
    t3_inst: "Ezt látjuk vagy halljuk? Válogasd szét!",
    t3_bucket_lat: "Ezt látom 👁️",
    t3_bucket_hal: "Ezt hallom 👂",
    t3_item_l1: "Szivárvány az égen", t3_item_l2: "Piros labda",
    t3_item_h1: "Mentőautó szirénája", t3_item_h2: "Madárcsicsergés",
    t3_q: "Melyiket tudjuk LÁTNI?",
    t3_q_a: "A kék eget", t3_q_b: "A zene dallamát", t3_q_c: "A szél zúgását", t3_q_d: "A telefon csörgését",

    // T4: Ízlelés és Szaglás (Gap-fill)
    t4_title: "Finom illatok és ízek",
    t4_text: "Amikor eszünk, az orrunk és a nyelvünk együtt dolgozik, hogy érezzük, milyen finom az étel.",
    t4_b1: "A citrom savanyú, a csoki édes.",
    t4_b2: "A virágnak jó illata van, a szemétnek büdös.",
    t4_b3: "A nyelved hegyével érzed az édeset a legjobban!",
    t4_inst: "Egészítsd ki a mondatot!",
    t4_gap_sentence: "A fagyit nagyon szeretjük, mert az íze {gap}.",
    t4_c1: "édes", t4_c2: "sós", t4_c3: "savanyú",
    t4_q: "Mivel érezzük a frissen sült kalács illatát?",
    t4_q_a: "Az orrunkkal", t4_q_b: "A fülünkkel", t4_q_c: "A lábunkkal", t4_q_d: "A szemünkkel",

    // T5: Összefoglaló
    t5_title: "A kezem mindent érez",
    t5_text: "A tapintás is nagyon fontos! Ezzel érezzük, ha valami hideg, meleg, puha vagy szúrós.",
    t5_b1: "A jégkrém hideg, a tea meleg.",
    t5_b2: "A cica bundája puha, a kaktusz szúrós.",
    t5_b3: "Testünk minden része egy kis csoda!",
    t5_inst: "Milyen a kismacska bundája?",
    t5_gap_sentence2: "Ha megsimogatunk egy kiscicát, érezzük, hogy a szőre nagyon {gap}.",
    t5_c51: "puha", t5_c52: "kemény", t5_c53: "szúrós",
    t5_q: "Mivel tapintjuk meg legkönnyebben a dolgokat?",
    t5_q_a: "A kezünkkel", t5_q_b: "A hajunkkal", t5_q_c: "A hátunkkal", t5_q_d: "A szemünkkel",
  },
  en: {
    explorer_title: "Our Body & Senses",
    t1_title: "My Body Parts", t1_text: "Look at our body! Every part has an important job. We run with our legs and grab with our hands.",
    t1_b1: "Head: holds our brain and face.", t1_b2: "Trunk: our tummy and back.", t1_b3: "Limbs: our two arms and two legs.",
    t1_inst: "Show where the body parts are!",
    t1_area_head: "Head", t1_area_arm: "Arm", t1_area_tummy: "Tummy", t1_area_leg: "Leg",
    t1_q: "What do we use to run and jump?", t1_q_a: "Our legs", t1_q_b: "Our head", t1_q_c: "Our tummy", t1_q_d: "Our ears",

    t2_title: "Our Five Senses", t2_text: "We can observe the world in five ways using our sense organs.",
    t2_b1: "I see with my eyes, hear with my ears.", t2_b2: "I smell with my nose, taste with my tongue.", t2_b3: "I touch with my skin and hands.",
    t2_inst: "Match the body part with what it does!",
    t2_l1: "Eyes 👁️", t2_r1: "Seeing",
    t2_l2: "Ears 👂", t2_r2: "Hearing",
    t2_l3: "Nose 👃", t2_r3: "Smelling",
    t2_q: "Which body part hears the birds singing?", t2_q_a: "Ears", t2_q_b: "Eyes", t2_q_c: "Tongue", t2_q_d: "Nose",

    t3_title: "What do I see? What do I hear?", t3_text: "Our eyes watch colors and shapes, while our ears collect sounds.",
    t3_b1: "We see a sunset or a pretty drawing.", t3_b2: "We hear music or a dog barking.", t3_b3: "Take care of them: very loud music is bad for ears!",
    t3_inst: "Do we see it or hear it? Sort them!",
    t3_bucket_lat: "I see it 👁️", t3_bucket_hal: "I hear it 👂",
    t3_item_l1: "Rainbow in the sky", t3_item_l2: "Red ball",
    t3_item_h1: "Ambulance siren", t3_item_h2: "Birds chirping",
    t3_q: "Which one can we SEE?", t3_q_a: "The blue sky", t3_q_b: "A music melody", t3_q_c: "The wind blowing", t3_q_d: "A ringing phone",

    t4_title: "Yummy Smells and Tastes", t4_text: "When we eat, our nose and tongue work together to feel how yummy the food is.",
    t4_b1: "Lemons are sour, chocolate is sweet.", t4_b2: "Flowers smell good, trash smells bad.", t4_b3: "You taste sweet things best on the tip of your tongue!",
    t4_inst: "Fill in the word!", t4_gap_sentence: "We love ice cream because it tastes so {gap}.",
    t4_c1: "sweet", t4_c2: "salty", t4_c3: "sour",
    t4_q: "What do we use to smell fresh baked bread?", t4_q_a: "Our nose", t4_q_b: "Our ears", t4_q_c: "Our legs", t4_q_d: "Our eyes",

    t5_title: "My Hands Feel Everything", t5_text: "Touch is very important! We feel if something is hot, cold, soft, or prickly.",
    t5_b1: "Ice cream is cold, tea is hot.", t5_b2: "A kitty's fur is soft, a cactus is prickly.", t5_b3: "Every part of our body is amazing!",
    t5_inst: "How does a kitten's fur feel?", t5_gap_sentence2: "When we pet a kitten, we feel its fur is very {gap}.",
    t5_c51: "soft", t5_c52: "hard", t5_c53: "prickly",
    t5_q: "What do we use most to touch things?", t5_q_a: "Our hands", t5_q_b: "Our hair", t5_q_c: "Our back", t5_q_d: "Our eyes",
  },
  de: {
    explorer_title: "Körper & Sinne",
    t1_title: "Meine Körperteile", t1_text: "Schau dir unseren Körper an! Jeder Teil hat eine wichtige Aufgabe. Mit den Beinen laufen wir, mit den Händen greifen wir.",
    t1_b1: "Kopf: hier sind Gehirn und Gesicht.", t1_b2: "Rumpf: unser Bauch und Rücken.", t1_b3: "Gliedmaßen: zwei Arme und zwei Beine.",
    t1_inst: "Zeige, wo die Körperteile sind!",
    t1_area_head: "Kopf", t1_area_arm: "Arm", t1_area_tummy: "Bauch (Rumpf)", t1_area_leg: "Bein",
    t1_q: "Womit können wir laufen und springen?", t1_q_a: "Mit den Beinen", t1_q_b: "Mit dem Kopf", t1_q_c: "Mit dem Bauch", t1_q_d: "Mit den Ohren",

    t2_title: "Unsere fünf Sinne", t2_text: "Wir können die Welt auf fünf Arten erleben. Dafür nutzen wir unsere Sinnesorgane.",
    t2_b1: "Mit den Augen sehe ich, mit Ohren höre ich.", t2_b2: "Mit der Nase rieche ich, mit der Zunge schmecke ich.", t2_b3: "Mit den Händen fühle ich.",
    t2_inst: "Verbinde das Körperteil mit dem Sinn!",
    t2_l1: "Augen 👁️", t2_r1: "Sehen",
    t2_l2: "Ohren 👂", t2_r2: "Hören",
    t2_l3: "Nase 👃", t2_r3: "Riechen",
    t2_q: "Womit hören wir das Vogelgezwitscher?", t2_q_a: "Mit den Ohren", t2_q_b: "Mit den Augen", t2_q_c: "Mit der Zunge", t2_q_d: "Mit der Nase",

    t3_title: "Was sehe ich? Was höre ich?", t3_text: "Unsere Augen sehen Farben und Formen, unsere Ohren fangen Töne ein.",
    t3_b1: "Wir sehen einen Regenbogen oder ein Bild.", t3_b2: "Wir hören Musik oder einen Hund bellen.", t3_b3: "Zu laute Musik ist schlecht für die Ohren!",
    t3_inst: "Sehen oder Hören? Sortiere!",
    t3_bucket_lat: "Das sehe ich 👁️", t3_bucket_hal: "Das höre ich 👂",
    t3_item_l1: "Regenbogen am Himmel", t3_item_l2: "Roter Ball",
    t3_item_h1: "Krankenwagensirene", t3_item_h2: "Vogelgesang",
    t3_q: "Was können wir SEHEN?", t3_q_a: "Den blauen Himmel", t3_q_b: "Eine Melodie", t3_q_c: "Den Wind heulen", t3_q_d: "Das Telefon klingeln",

    t4_title: "Leckere Düfte und Geschmäcker", t4_text: "Beim Essen arbeiten Nase und Zunge zusammen, damit wir schmecken, wie gut es ist.",
    t4_b1: "Zitronen sind sauer, Schokolade ist süß.", t4_b2: "Blumen duften gut, Müll stinkt.", t4_b3: "Süßes schmeckt man gut an der Zungenspitze!",
    t4_inst: "Ergänze das Wort!", t4_gap_sentence: "Wir lieben Eiscreme, weil sie so {gap} schmeckt.",
    t4_c1: "süß", t4_c2: "salzig", t4_c3: "sauer",
    t4_q: "Womit riechen wir frisches Brot?", t4_q_a: "Mit der Nase", t4_q_b: "Mit den Ohren", t4_q_c: "Mit den Beinen", t4_q_d: "Mit den Augen",

    t5_title: "Ich fühle alles", t5_text: "Fühlen ist sehr wichtig! So merken wir, ob etwas heiß, kalt, weich oder stachelig ist.",
    t5_b1: "Eis ist kalt, Tee ist heiß.", t5_b2: "Katzenfell ist weich, Kakteen stechen.", t5_b3: "Unser Körper ist ein Wunder!",
    t5_inst: "Wie fühlt sich ein Kätzchen an?", t5_gap_sentence2: "Wenn wir eine Katze streicheln, ist ihr Fell sehr {gap}.",
    t5_c51: "weich", t5_c52: "hart", t5_c53: "stachelig",
    t5_q: "Womit fühlen (tasten) wir Dinge am besten?", t5_q_a: "Mit den Händen", t5_q_b: "Mit den Haaren", t5_q_c: "Mit dem Rücken", t5_q_d: "Mit den Augen",
  },
  ro: {
    explorer_title: "Corpul și Simțurile",
    t1_title: "Părțile corpului", t1_text: "Privește corpul nostru! Fiecare parte are un rol important. Cu picioarele alergăm, cu mâinile prindem.",
    t1_b1: "Cap: aici este creierul și fața.", t1_b2: "Trunchi: burta și spatele.", t1_b3: "Membre: două brațe și două picioare.",
    t1_inst: "Arată unde sunt părțile corpului!",
    t1_area_head: "Cap", t1_area_arm: "Braț", t1_area_tummy: "Burtă (Trunchi)", t1_area_leg: "Picior",
    t1_q: "Cu ce alergăm și sărim?", t1_q_a: "Cu picioarele", t1_q_b: "Cu capul", t1_q_c: "Cu burta", t1_q_d: "Cu urechile",

    t2_title: "Cele cinci simțuri", t2_text: "Putem descoperi lumea în cinci feluri. Pentru asta folosim organele de simț.",
    t2_b1: "Cu ochii văd, cu urechile aud.", t2_b2: "Cu nasul miros, cu limba gust.", t2_b3: "Cu pielea și mâinile simt (pipăi).",
    t2_inst: "Potrivește partea corpului cu ce face!",
    t2_l1: "Ochi 👁️", t2_r1: "Văz",
    t2_l2: "Urechi 👂", t2_r2: "Auz",
    t2_l3: "Nas 👃", t2_r3: "Miros",
    t2_q: "Cu ce auzim cântecul păsărilor?", t2_q_a: "Cu urechile", t2_q_b: "Cu ochii", t2_q_c: "Cu limba", t2_q_d: "Cu nasul",

    t3_title: "Ce văd? Ce aud?", t3_text: "Ochii noștri văd culori și forme, iar urechile prind sunetele.",
    t3_b1: "Vedem un apus de soare sau un desen frumos.", t3_b2: "Auzim muzică sau un câine lătrând.", t3_b3: "Atenție: muzica prea tare face rău la urechi!",
    t3_inst: "Vedem sau auzim? Sortează-le!",
    t3_bucket_lat: "Asta văd 👁️", t3_bucket_hal: "Asta aud 👂",
    t3_item_l1: "Curcubeu pe cer", t3_item_l2: "Minge roșie",
    t3_item_h1: "Sirena salvării", t3_item_h2: "Ciripit de păsări",
    t3_q: "Ce putem VEDEA?", t3_q_a: "Cerul albastru", t3_q_b: "O melodie", t3_q_c: "Vântul bătând", t3_q_d: "Telefonul sunând",

    t4_title: "Arome și Gusturi", t4_text: "Când mâncăm, nasul și limba lucrează împreună ca să simțim cât de bun e felul de mâncare.",
    t4_b1: "Lămâia e acră, ciocolata e dulce.", t4_b2: "Florile miros frumos, gunoiul miroase urât.", t4_b3: "Simțim dulcele cel mai bine pe vârful limbii!",
    t4_inst: "Completează cuvântul!", t4_gap_sentence: "Ne place înghețata pentru că are gust {gap}.",
    t4_c1: "dulce", t4_c2: "sărat", t4_c3: "acru",
    t4_q: "Cu ce mirosim pâinea proaspătă?", t4_q_a: "Cu nasul", t4_q_b: "Cu urechile", t4_q_c: "Cu picioarele", t4_q_d: "Cu ochii",

    t5_title: "Mâinile simt tot", t5_text: "Pipăitul este foarte important! Așa ne dăm seama dacă ceva este cald, rece, moale sau înțeapă.",
    t5_b1: "Înghețata este rece, ceaiul e cald.", t5_b2: "Blana pisicii e moale, cactusul înțeapă.", t5_b3: "Corpul nostru este minunat!",
    t5_inst: "Cum este blănița unui pui de pisică?", t5_gap_sentence2: "Când mângâiem o pisicuță, simțim că blana ei este foarte {gap}.",
    t5_c51: "moale", t5_c52: "tare", t5_c53: "aspră",
    t5_q: "Cu ce pipăim lucrurile cel mai bine?", t5_q_a: "Cu mâinile", t5_q_b: "Cu părul", t5_q_c: "Cu spatele", t5_q_d: "Cu ochii",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />, // Használjuk az aranyos inline emberkét
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "head",  x: 50, y: 15, label: "t1_area_head" },
        { id: "arm",   x: 20, y: 40, label: "t1_area_arm" },
        { id: "tummy", x: 50, y: 55, label: "t1_area_tummy" },
        { id: "leg",   x: 40, y: 85, label: "t1_area_leg" },
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
    svg: (lang) => <FiveSensesSvg lang={lang} />, // Külső import az 5 érzékhez
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
      type: "drag-to-bucket",
      buckets: [
        { id: "lat", label: "t3_bucket_lat" },
        { id: "hal", label: "t3_bucket_hal" },
      ],
      items: [
        { text: "t3_item_l1", bucketId: "lat" },
        { text: "t3_item_h1", bucketId: "hal" },
        { text: "t3_item_l2", bucketId: "lat" },
        { text: "t3_item_h2", bucketId: "hal" },
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
      sentence: "t5_gap_sentence2",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_b2",
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
  icon: "🏃",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const BodyExplorer = memo(function BodyExplorer({
  color = "#F43F5E", // Rose szín a testhez
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
      explorerId="sachkunde_k1_body_senses" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default BodyExplorer;
