"use client";
// FamilyExplorer.tsx — Sachkunde Island i5: Family & Home (K1)
// Topics: 1) A családtagok 2) Szobák a házban 3) Segítünk otthon 4) Reggeli készülődés 5) Összefoglaló

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
import { FamilyTreeSvg, HouseRoomsSvg } from "@/app/astro-sachkunde/svg/k2/EverydayLifeSvg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="45" textAnchor="middle">🧸</text>
        <path d="M -10,0 L 10,0" stroke="#16A34A" strokeWidth="4" markerEnd="url(#arrow)" />
        <text x="40" y="15" fontSize="45" textAnchor="middle">📦</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EFF6FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="15" fontSize="40" textAnchor="middle">🛏️</text>
        <text x="0" y="15" fontSize="40" textAnchor="middle">🪥</text>
        <text x="60" y="15" fontSize="40" textAnchor="middle">🎒</text>
        <path d="M -30,0 L -20,0 M 20,0 L 30,0" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrow)" />
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">👨‍👩‍👧‍👦</text>
        <text x="25" y="5" fontSize="30" textAnchor="middle">❤️</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Család és Otthon",
    // T1: Család (Match-pairs)
    t1_title: "A családom",
    t1_text: "A családunk azokból az emberekből áll, akik a legjobban szeretnek minket. Együtt élünk, vagy gyakran meglátogatjuk egymást.",
    t1_b1: "Anya és apa a szüleink.",
    t1_b2: "A testvérünk lehet lány (húg, nővér) vagy fiú (öccs, báty).",
    t1_b3: "A nagyszülők (nagyi és nagypapa) anya és apa szülei.",
    t1_inst: "Párosítsd össze a családtagokat!",
    t1_l1: "Anya és Apa", t1_r1: "A szüleim 👩‍❤️‍👨",
    t1_l2: "Nagymama", t1_r2: "Anya vagy apa anyukája 👵",
    t1_l3: "Testvér", t1_r3: "Velem együtt nő fel 👧👦",
    t1_q: "Kik a nagyszüleink?",
    t1_q_a: "A szüleink szülei", t1_q_b: "A szomszédok", t1_q_c: "Az osztálytársak", t1_q_d: "A tanító nénik",

    // T2: Szobák (Label-diagram)
    t2_title: "Szobák a házban",
    t2_text: "Az otthonunkban különböző szobák vannak. Minden szobát másra használunk.",
    t2_b1: "A konyhában főzünk és eszünk.",
    t2_b2: "A fürdőszobában mosdunk meg.",
    t2_b3: "A hálószobában alszunk és pihenünk.",
    t2_inst: "Keresd meg, melyik szoba hol van a házban!",
    t2_area_kitchen: "Konyha",
    t2_area_bedroom: "Hálószoba",
    t2_area_bathroom: "Fürdőszoba",
    t2_area_livingroom: "Nappali",
    t2_q: "Melyik szobában van a hűtőszekrény és a tűzhely?",
    t2_q_a: "A konyhában", t2_q_b: "A fürdőszobában", t2_q_c: "A hálószobában", t2_q_d: "A gyerekszobában",

    // T3: Segítés (Drag-to-bucket)
    t3_title: "Segítünk otthon",
    t3_text: "Otthon mindenki segít egy kicsit, hogy szép tiszta és rendes legyen a ház. Te is tudsz segíteni!",
    t3_b1: "Elpakolhatod a játékaidat, ha már nem játszol velük.",
    t3_b2: "Segíthetsz megteríteni az asztalt.",
    t3_b3: "Ha rendet tartunk, sokkal jobb otthon lenni.",
    t3_inst: "Melyik jó dolog és melyik nem? Válogasd szét!",
    t3_bucket_jo: "Jó dolog (Segítség) 👍",
    t3_bucket_rossz: "Nem jó dolog 👎",
    t3_item_j1: "Játékok elpakolása", t3_item_j2: "Asztal megterítése",
    t3_item_r1: "Ruhák szétdobálása", t3_item_r2: "Morzsázás a szőnyegen",
    t3_q: "Mit csinálj a játékaiddal, miután befejezted a játékot?",
    t3_q_a: "Elpakolom a helyükre", t3_q_b: "A földön hagyom őket", t3_q_c: "Kidobom őket", t3_q_d: "Elrejtem az ágy alá",

    // T4: Reggeli rutin (Word-order)
    t4_title: "Reggeli készülődés",
    t4_text: "Minden reggel ugyanazokat a dolgokat csináljuk, hogy időben elkészüljünk az iskolába.",
    t4_b1: "Először felébredünk és kikelünk az ágyból.",
    t4_b2: "Aztán megmossuk az arcunkat és a fogunkat.",
    t4_b3: "Felöltözünk, megreggelizünk, és indulunk!",
    t4_inst: "Tedd sorba a reggeli teendőket!",
    t4_w1: "Felkelés", t4_w2: "Fogmosás", t4_w3: "Öltözködés", t4_w4: "Indulás a suliba",
    t4_q: "Mit csinálunk rögtön azután, hogy felkeltünk az ágyból?",
    t4_q_a: "Megmosakszunk és fogat mosunk", t4_q_b: "Megyünk aludni", t4_q_c: "Tévét nézünk", t4_q_d: "Hazajövünk a suliból",

    // T5: Összefoglaló
    t5_title: "Az én otthonom",
    t5_text: "A családunk és az otthonunk nagyon fontos. Itt érezzük magunkat a legnagyobb biztonságban.",
    t5_b1: "A családdal jó együtt lenni.",
    t5_b2: "Minden szobának megvan a maga célja.",
    t5_b3: "Vigyázzunk a rendre otthon!",
    t5_inst: "Kikkel élünk együtt az otthonunkban?",
    t5_gap_sentence2: "Otthon a {gap} élünk együtt, akik nagyon szeretnek minket.",
    t5_c51: "családunkkal", t5_c52: "szomszédokkal", t5_c53: "mókusokkal",
    t5_q: "Miért fontos a család?",
    t5_q_a: "Mert szeretjük és segítjük egymást", t5_q_b: "Hogy legyen kivel veszekedni", t5_q_c: "Mert mindenki egyforma", t5_q_d: "Nincs semmi haszna",
  },
  en: {
    explorer_title: "Family & Home",
    t1_title: "My Family", t1_text: "Our family is made up of people who love us the most. We live together or visit each other.",
    t1_b1: "Mom and Dad are our parents.", t1_b2: "Our siblings can be sisters or brothers.", t1_b3: "Grandparents (grandma and grandpa) are our parents' parents.",
    t1_inst: "Match the family members!",
    t1_l1: "Mom and Dad", t1_r1: "My parents 👩‍❤️‍👨",
    t1_l2: "Grandma", t1_r2: "Mom or Dad's mother 👵",
    t1_l3: "Sibling", t1_r3: "Grows up with me 👧👦",
    t1_q: "Who are our grandparents?",
    t1_q_a: "Our parents' parents", t1_q_b: "The neighbors", t1_q_c: "Classmates", t1_q_d: "The teachers",

    t2_title: "Rooms in the House", t2_text: "There are different rooms in our home. We use each room for something else.",
    t2_b1: "We cook and eat in the kitchen.", t2_b2: "We wash in the bathroom.", t2_b3: "We sleep and rest in the bedroom.",
    t2_inst: "Find where the rooms are in the house!",
    t2_area_kitchen: "Kitchen", t2_area_bedroom: "Bedroom", t2_area_bathroom: "Bathroom", t2_area_livingroom: "Living room",
    t2_q: "In which room is the fridge and the stove?",
    t2_q_a: "In the kitchen", t2_q_b: "In the bathroom", t2_q_c: "In the bedroom", t2_q_d: "In the kid's room",

    t3_title: "Helping at Home", t3_text: "Everyone helps a little at home to keep the house clean and tidy. You can help too!",
    t3_b1: "You can pack away your toys when you are done playing.", t3_b2: "You can help set the table.", t3_b3: "If we keep it tidy, it's much better to be home.",
    t3_inst: "Which is a good thing and which is not? Sort them!",
    t3_bucket_jo: "Good thing (Helping) 👍", t3_bucket_rossz: "Not a good thing 👎",
    t3_item_j1: "Packing away toys", t3_item_j2: "Setting the table",
    t3_item_r1: "Throwing clothes around", t3_item_r2: "Making crumbs on the rug",
    t3_q: "What should you do with your toys after playing?",
    t3_q_a: "Pack them away", t3_q_b: "Leave them on the floor", t3_q_c: "Throw them away", t3_q_d: "Hide them under the bed",

    t4_title: "Morning Routine", t4_text: "Every morning we do the same things to get ready for school on time.",
    t4_b1: "First, we wake up and get out of bed.", t4_b2: "Then we wash our face and brush our teeth.", t4_b3: "We get dressed, eat breakfast, and go!",
    t4_inst: "Put the morning tasks in order!",
    t4_w1: "Waking up", t4_w2: "Brushing teeth", t4_w3: "Getting dressed", t4_w4: "Going to school",
    t4_q: "What do we do right after we get out of bed?",
    t4_q_a: "Wash and brush our teeth", t4_q_b: "Go to sleep", t4_q_c: "Watch TV", t4_q_d: "Come home from school",

    t5_title: "My Home", t5_text: "Our family and home are very important. This is where we feel the safest.",
    t5_b1: "It's good to be with family.", t5_b2: "Every room has its purpose.", t5_b3: "Let's keep our home tidy!",
    t5_inst: "Who do we live with in our home?",
    t5_gap_sentence2: "At home we live with our {gap}, who love us very much.",
    t5_c51: "family", t5_c52: "neighbors", t5_c53: "squirrels",
    t5_q: "Why is family important?",
    t5_q_a: "Because we love and help each other", t5_q_b: "To have someone to argue with", t5_q_c: "Because everyone is exactly the same", t5_q_d: "It has no use",
  },
  de: {
    explorer_title: "Familie & Zuhause",
    t1_title: "Meine Familie", t1_text: "Unsere Familie besteht aus den Menschen, die uns am meisten lieben. Wir leben zusammen.",
    t1_b1: "Mama und Papa sind unsere Eltern.", t1_b2: "Wir können Schwestern oder Brüder haben.", t1_b3: "Die Großeltern (Oma und Opa) sind die Eltern von Mama und Papa.",
    t1_inst: "Verbinde die Familienmitglieder!",
    t1_l1: "Mama und Papa", t1_r1: "Meine Eltern 👩‍❤️‍👨",
    t1_l2: "Oma", t1_r2: "Mamas oder Papas Mama 👵",
    t1_l3: "Geschwister", t1_r3: "Wachsen mit mir auf 👧👦",
    t1_q: "Wer sind unsere Großeltern?",
    t1_q_a: "Die Eltern unserer Eltern", t1_q_b: "Die Nachbarn", t1_q_c: "Die Mitschüler", t1_q_d: "Die Lehrer",

    t2_title: "Zimmer im Haus", t2_text: "In unserem Zuhause gibt es verschiedene Zimmer. Jedes Zimmer wird für etwas anderes genutzt.",
    t2_b1: "In der Küche kochen und essen wir.", t2_b2: "Im Badezimmer waschen wir uns.", t2_b3: "Im Schlafzimmer schlafen wir.",
    t2_inst: "Zeige, wo die Zimmer im Haus sind!",
    t2_area_kitchen: "Küche", t2_area_bedroom: "Schlafzimmer", t2_area_bathroom: "Badezimmer", t2_area_livingroom: "Wohnzimmer",
    t2_q: "In welchem Zimmer stehen der Kühlschrank und der Herd?",
    t2_q_a: "In der Küche", t2_q_b: "Im Badezimmer", t2_q_c: "Im Schlafzimmer", t2_q_d: "Im Kinderzimmer",

    t3_title: "Wir helfen zu Hause", t3_text: "Jeder hilft zu Hause ein bisschen mit, damit es schön sauber und ordentlich ist.",
    t3_b1: "Du kannst deine Spielsachen aufräumen.", t3_b2: "Du kannst beim Tischdecken helfen.", t3_b3: "Wenn wir aufräumen, ist es viel schöner zu Hause.",
    t3_inst: "Was ist gut und was nicht? Sortiere!",
    t3_bucket_jo: "Gute Sache (Helfen) 👍", t3_bucket_rossz: "Nicht gut 👎",
    t3_item_j1: "Spielzeug aufräumen", t3_item_j2: "Tisch decken",
    t3_item_r1: "Kleidung herumwerfen", t3_item_r2: "Auf den Teppich krümeln",
    t3_q: "Was machst du mit dem Spielzeug, wenn du fertig bist?",
    t3_q_a: "Ich räume es auf", t3_q_b: "Ich lasse es auf dem Boden", t3_q_c: "Ich werfe es weg", t3_q_d: "Ich verstecke es",

    t4_title: "Am Morgen", t4_text: "Jeden Morgen machen wir dasselbe, um pünktlich zur Schule zu kommen.",
    t4_b1: "Zuerst wachen wir auf und stehen auf.", t4_b2: "Dann waschen wir unser Gesicht und putzen die Zähne.", t4_b3: "Wir ziehen uns an, frühstücken und gehen los!",
    t4_inst: "Bringe die Aufgaben in die richtige Reihenfolge!",
    t4_w1: "Aufwachen", t4_w2: "Zähne putzen", t4_w3: "Anziehen", t4_w4: "Zur Schule gehen",
    t4_q: "Was machen wir, direkt nachdem wir aufgestanden sind?",
    t4_q_a: "Wir waschen uns und putzen die Zähne", t4_q_b: "Wir gehen schlafen", t4_q_c: "Wir schauen fern", t4_q_d: "Wir kommen nach Hause",

    t5_title: "Mein Zuhause", t5_text: "Unsere Familie und unser Zuhause sind sehr wichtig. Hier fühlen wir uns sicher.",
    t5_b1: "Es ist schön, mit der Familie zusammen zu sein.", t5_b2: "Jedes Zimmer hat einen Zweck.", t5_b3: "Wir halten unser Zuhause ordentlich!",
    t5_inst: "Mit wem leben wir in unserem Zuhause?",
    t5_gap_sentence2: "Zu Hause leben wir mit unserer {gap}, die uns sehr liebt.",
    t5_c51: "Familie", t5_c52: "Nachbarn", t5_c53: "Eichhörnchen",
    t5_q: "Warum ist die Familie wichtig?",
    t5_q_a: "Weil wir uns lieben und helfen", t5_q_b: "Um jemanden zum Streiten zu haben", t5_q_c: "Weil alle gleich aussehen", t5_q_d: "Es gibt keinen Grund",
  },
  ro: {
    explorer_title: "Familia și Casa",
    t1_title: "Familia mea", t1_text: "Familia noastră este formată din oamenii care ne iubesc cel mai mult. Trăim împreună.",
    t1_b1: "Mama și tata sunt părinții noștri.", t1_b2: "Frații noștri pot fi surori sau frați.", t1_b3: "Bunicii (bunica și bunicul) sunt părinții părinților noștri.",
    t1_inst: "Potrivește membrii familiei!",
    t1_l1: "Mama și tata", t1_r1: "Părinții mei 👩‍❤️‍👨",
    t1_l2: "Bunica", t1_r2: "Mama mamei sau a tatei 👵",
    t1_l3: "Frate/Soră", t1_r3: "Crește împreună cu mine 👧👦",
    t1_q: "Cine sunt bunicii noștri?",
    t1_q_a: "Părinții părinților noștri", t1_q_b: "Vecinii", t1_q_c: "Colegii de clasă", t1_q_d: "Profesorii",

    t2_title: "Camerele casei", t2_text: "În casa noastră există diferite camere. Folosim fiecare cameră pentru altceva.",
    t2_b1: "În bucătărie gătim și mâncăm.", t2_b2: "În baie ne spălăm.", t2_b3: "În dormitor dormim și ne odihnim.",
    t2_inst: "Arată unde sunt camerele în casă!",
    t2_area_kitchen: "Bucătărie", t2_area_bedroom: "Dormitor", t2_area_bathroom: "Baie", t2_area_livingroom: "Sufragerie",
    t2_q: "În ce cameră se află frigiderul și aragazul?",
    t2_q_a: "În bucătărie", t2_q_b: "În baie", t2_q_c: "În dormitor", t2_q_d: "În camera copiilor",

    t3_title: "Ajutăm acasă", t3_text: "Fiecare ajută puțin acasă pentru ca locuința să fie curată și ordonată.",
    t3_b1: "Poți să-ți strângi jucăriile când termini de jucat.", t3_b2: "Poți să ajuți la așezarea mesei.", t3_b3: "Dacă facem ordine, e mult mai frumos acasă.",
    t3_inst: "Ce este bine și ce nu? Sortează!",
    t3_bucket_jo: "Lucru bun (Ajutor) 👍", t3_bucket_rossz: "Lucru rău 👎",
    t3_item_j1: "Strângerea jucăriilor", t3_item_j2: "Așezarea mesei",
    t3_item_r1: "Aruncarea hainelor", t3_item_r2: "Firimituri pe covor",
    t3_q: "Ce faci cu jucăriile după ce te joci?",
    t3_q_a: "Le pun la locul lor", t3_q_b: "Le las pe jos", t3_q_c: "Le arunc", t3_q_d: "Le ascund sub pat",

    t4_title: "Rutina de dimineață", t4_text: "În fiecare dimineață facem aceleași lucruri pentru a ajunge la timp la școală.",
    t4_b1: "Mai întâi ne trezim și ne dăm jos din pat.", t4_b2: "Apoi ne spălăm pe față și pe dinți.", t4_b3: "Ne îmbrăcăm, mâncăm și plecăm!",
    t4_inst: "Pune sarcinile de dimineață în ordine!",
    t4_w1: "Trezirea", t4_w2: "Spălatul pe dinți", t4_w3: "Îmbrăcarea", t4_w4: "Plecarea la școală",
    t4_q: "Ce facem imediat după ce ne dăm jos din pat?",
    t4_q_a: "Ne spălăm pe față și pe dinți", t4_q_b: "Mergem la culcare", t4_q_c: "Ne uităm la TV", t4_q_d: "Venim de la școală",

    t5_title: "Casa mea", t5_text: "Familia și casa sunt foarte importante. Aici ne simțim cel mai în siguranță.",
    t5_b1: "Este bine să fim cu familia.", t5_b2: "Fiecare cameră are un scop.", t5_b3: "Păstrăm ordinea acasă!",
    t5_inst: "Cu cine locuim în casa noastră?",
    t5_gap_sentence2: "Acasă locuim cu {gap} noastră, care ne iubește foarte mult.",
    t5_c51: "familia", t5_c52: "vecinii", t5_c53: "veverițele",
    t5_q: "De ce este importantă familia?",
    t5_q_a: "Pentru că ne iubim și ne ajutăm", t5_q_b: "Ca să avem cu cine să ne certăm", t5_q_c: "Pentru că toți arată la fel", t5_q_d: "Nu are nicio importanță",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <FamilyTreeSvg lang={lang} />,
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
    svg: (lang) => <HouseRoomsSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "kitchen",     x: 30, y: 70, label: "t2_area_kitchen" },
        { id: "livingroom",  x: 70, y: 70, label: "t2_area_livingroom" },
        { id: "bedroom",     x: 70, y: 30, label: "t2_area_bedroom" },
        { id: "bathroom",    x: 30, y: 30, label: "t2_area_bathroom" },
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
      type: "drag-to-bucket",
      buckets: [
        { id: "jo", label: "t3_bucket_jo" },
        { id: "rossz", label: "t3_bucket_rossz" },
      ],
      items: [
        { text: "t3_item_j1", bucketId: "jo" },
        { text: "t3_item_r1", bucketId: "rossz" },
        { text: "t3_item_j2", bucketId: "jo" },
        { text: "t3_item_r2", bucketId: "rossz" },
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
  icon: "👨‍👩‍👧‍👦",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const FamilyExplorer = memo(function FamilyExplorer({
  color = "#F97316", // Narancssárga (Orange-500) az otthon melegéért
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
      explorerId="sachkunde_k1_family" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default FamilyExplorer;
