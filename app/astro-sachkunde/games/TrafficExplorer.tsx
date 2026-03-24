"use client";
// TrafficExplorer.tsx — Sachkunde Island i6: Traffic & Safety (K1)
// Topics: 1) Járművek 2) Közlekedési lámpa 3) Zebrán átkelés 4) Közlekedési táblák 5) Biciklis biztonság

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
import { 
  TrafficLightSvg, 
  TrafficSignsSvg, 
  VehiclesSvg, 
  PedestrianRulesSvg, 
  BicycleSafetySvg 
} from "@/app/astro-sachkunde/svg/k1/TrafficRecyclingSvg";

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Közlekedés és Biztonság",
    // T1: Járművek (Match-pairs)
    t1_title: "Különleges autók",
    t1_text: "Az utakon sokféle járművel találkozhatunk. Vannak olyanok, amik nagyon fontos munkát végeznek és segítenek nekünk.",
    t1_b1: "A mentőautó siet a betegekkel a kórházba.",
    t1_b2: "A rendőrautó vigyáz a rendre.",
    t1_b3: "A tűzoltóautó vizet visz, ha baj van.",
    t1_inst: "Párosítsd az autót a feladatával!",
    t1_l1: "Mentőautó 🚑", t1_r1: "Betegeken segít",
    t1_l2: "Rendőrautó 🚓", t1_r2: "Vigyáz a rendre",
    t1_l3: "Tűzoltóautó 🚒", t1_r3: "Eloltja a tüzet",
    t1_q: "Mit csinál a tűzoltóautó?",
    t1_q_a: "Eloltja a tüzet", t1_q_b: "Kenyeret hoz a boltba", t1_q_c: "Fagyit árul", t1_q_d: "Betegeket visz",

    // T2: Lámpa (Label-diagram)
    t2_title: "A közlekedési lámpa",
    t2_text: "A lámpa színei mondják meg, mikor mehetünk át az úton és mikor kell megállnunk. Figyelj jól a színekre!",
    t2_b1: "Piros: Állj meg, tilos átmenni!",
    t2_b2: "Sárga: Készülj fel, mindjárt vált a lámpa.",
    t2_b3: "Zöld: Szabad az út, átmehetsz!",
    t2_inst: "Keresd meg a lámpa színeit!",
    t2_area_red: "Piros (Állj!)",
    t2_area_yellow: "Sárga (Várj!)",
    t2_area_green: "Zöld (Mehetsz!)",
    t2_q: "Melyik színnél szabad átmenni az úton?",
    t2_q_a: "Zöldnél", t2_q_b: "Pirosnál", t2_q_c: "Sárgánál", t2_q_d: "Lilánál",

    // T3: Zebrán átkelés (Word-order)
    t3_title: "Átkelés a zebrán",
    t3_text: "Amikor át akarsz menni az úton, mindig a zebrát (kijelölt gyalogosátkelőt) használd! És nagyon fontos a helyes sorrend.",
    t3_b1: "Először állj meg az út szélén.",
    t3_b2: "Nézz körül: először balra, aztán jobbra.",
    t3_b3: "Ha nem jön autó, indulhatsz!",
    t3_inst: "Tedd sorba, mit teszel a zebránál!",
    t3_w1: "Megállok", t3_w2: "Balra nézek", t3_w3: "Jobbra nézek", t3_w4: "Átmegyek",
    t3_q: "Merre kell először nézni az út szélén?",
    t3_q_a: "Balra", t3_q_b: "Felfelé", t3_q_c: "Hátra", t3_q_d: "Jobbra",

    // T4: Táblák (Drag-to-bucket)
    t4_title: "Állj vagy mehetsz?",
    t4_text: "Az utcán sok táblát és jelzést látunk. Van, ami azt jelenti, hogy meg kell állni, és van, ahol biztonságosan átmehetünk.",
    t4_b1: "A STOP tábla és a piros lámpa: meg kell állni.",
    t4_b2: "A zöld lámpa és a zebra: itt átmehetsz.",
    t4_b3: "Mindig fogd meg egy felnőtt kezét!",
    t4_inst: "Meg kell állni, vagy szabad az út? Válogasd szét!",
    t4_bucket_stop: "Állj meg! 🛑",
    t4_bucket_go: "Szabad az út ✅",
    t4_item_s1: "Piros lámpa", t4_item_s2: "STOP tábla",
    t4_item_g1: "Zöld lámpa", t4_item_g2: "Zebra (átkelő)",
    t4_q: "Mit jelent a piros színű, nyolcszögletű STOP tábla?",
    t4_q_a: "Meg kell állni", t4_q_b: "Gyorsan kell futni", t4_q_c: "Itt lehet fagyit venni", t4_q_d: "Balra kell kanyarodni",

    // T5: Biciklis biztonság (Gap-fill)
    t5_title: "Biztonságosan a biciklin",
    t5_text: "A biciklizés nagyon jó móka, de vigyáznunk kell a fejünkre és a testi épségünkre. Sose felejtsd el a védőfelszerelést!",
    t5_b1: "A bukósisak védi a fejedet, ha elesel.",
    t5_b2: "A sötétben fontos a lámpa és a fényvisszaverő.",
    t5_b3: "A térdvédő és könyökvédő is hasznos lehet.",
    t5_inst: "Egészítsd ki a mondatot!",
    t5_gap_sentence: "Amikor biciklizek, mindig felteszem a fejemre a {gap}.",
    t5_c51: "bukósisakot", t5_c52: "napszemüveget", t5_c53: "koronát",
    t5_q: "Melyik testrészünket védi a bukósisak?",
    t5_q_a: "A fejünket", t5_q_b: "A térdünket", t5_q_c: "A hátunkat", t5_q_d: "A kezünket",
  },
  en: {
    explorer_title: "Traffic & Safety",
    t1_title: "Special Cars", t1_text: "There are many vehicles on the roads. Some do very important jobs and help us.",
    t1_b1: "The ambulance rushes sick people to the hospital.", t1_b2: "The police car keeps us safe.", t1_b3: "The fire truck brings water when there's a fire.",
    t1_inst: "Match the car with its job!",
    t1_l1: "Ambulance 🚑", t1_r1: "Helps sick people",
    t1_l2: "Police car 🚓", t1_r2: "Keeps order",
    t1_l3: "Fire truck 🚒", t1_r3: "Puts out fires",
    t1_q: "What does a fire truck do?",
    t1_q_a: "Puts out fires", t1_q_b: "Brings bread to the shop", t1_q_c: "Sells ice cream", t1_q_d: "Carries sick people",

    t2_title: "Traffic Lights", t2_text: "The colors of the traffic light tell us when to go and when to stop. Pay attention!",
    t2_b1: "Red: Stop, do not cross!", t2_b2: "Yellow: Get ready, it will change soon.", t2_b3: "Green: The road is safe, you can go!",
    t2_inst: "Find the colors of the traffic light!",
    t2_area_red: "Red (Stop!)", t2_area_yellow: "Yellow (Wait!)", t2_area_green: "Green (Go!)",
    t2_q: "At which color can you cross the road?",
    t2_q_a: "Green", t2_q_b: "Red", t2_q_c: "Yellow", t2_q_d: "Purple",

    t3_title: "Crossing the Road", t3_text: "When you want to cross the road, always use the zebra crossing! And the right order is very important.",
    t3_b1: "First, stop at the edge of the road.", t3_b2: "Look around: first left, then right.", t3_b3: "If no car is coming, you can go!",
    t3_inst: "Put the steps of crossing in order!",
    t3_w1: "Stop", t3_w2: "Look left", t3_w3: "Look right", t3_w4: "Cross",
    t3_q: "Where should you look first at the edge of the road?",
    t3_q_a: "Left", t3_q_b: "Up", t3_q_c: "Behind", t3_q_d: "Right",

    t4_title: "Stop or Go?", t4_text: "We see many signs on the street. Some mean we have to stop, others mean it's safe to go.",
    t4_b1: "STOP sign and red light: you must stop.", t4_b2: "Green light and zebra crossing: you can cross.", t4_b3: "Always hold an adult's hand!",
    t4_inst: "Stop or Go? Sort them out!",
    t4_bucket_stop: "Stop! 🛑", t4_bucket_go: "Safe to go ✅",
    t4_item_s1: "Red light", t4_item_s2: "STOP sign",
    t4_item_g1: "Green light", t4_item_g2: "Zebra crossing",
    t4_q: "What does the red STOP sign mean?",
    t4_q_a: "You must stop", t4_q_b: "Run fast", t4_q_c: "Buy ice cream here", t4_q_d: "Turn left",

    t5_title: "Bike Safety", t5_text: "Riding a bike is fun, but we must protect our head and body. Never forget your safety gear!",
    t5_b1: "A helmet protects your head if you fall.", t5_b2: "Lights and reflectors are important in the dark.", t5_b3: "Knee and elbow pads are also useful.",
    t5_inst: "Complete the sentence!",
    t5_gap_sentence: "When I ride my bike, I always wear a {gap} on my head.",
    t5_c51: "helmet", t5_c52: "sunglasses", t5_c53: "crown",
    t5_q: "Which body part does a helmet protect?",
    t5_q_a: "Our head", t5_q_b: "Our knees", t5_q_c: "Our back", t5_q_d: "Our hands",
  },
  de: {
    explorer_title: "Verkehr & Sicherheit",
    t1_title: "Besondere Autos", t1_text: "Auf der Straße gibt es viele Fahrzeuge. Manche haben wichtige Aufgaben und helfen uns.",
    t1_b1: "Der Krankenwagen bringt Kranke schnell ins Krankenhaus.", t1_b2: "Das Polizeiauto sorgt für Ordnung.", t1_b3: "Das Feuerwehrauto löscht das Feuer.",
    t1_inst: "Verbinde das Auto mit seiner Aufgabe!",
    t1_l1: "Krankenwagen 🚑", t1_r1: "Hilft Kranken",
    t1_l2: "Polizeiauto 🚓", t1_r2: "Sorgt für Ordnung",
    t1_l3: "Feuerwehrauto 🚒", t1_r3: "Löscht das Feuer",
    t1_q: "Was macht das Feuerwehrauto?",
    t1_q_a: "Löscht das Feuer", t1_q_b: "Bringt Brot in den Laden", t1_q_c: "Verkauft Eis", t1_q_d: "Transportiert Kranke",

    t2_title: "Die Ampel", t2_text: "Die Farben der Ampel sagen uns, wann wir gehen dürfen und wann wir stehen bleiben müssen.",
    t2_b1: "Rot: Stehen bleiben, nicht gehen!", t2_b2: "Gelb: Achtung, es wird gleich umschalten.", t2_b3: "Grün: Der Weg ist frei, du darfst gehen!",
    t2_inst: "Finde die Farben der Ampel!",
    t2_area_red: "Rot (Halt!)", t2_area_yellow: "Gelb (Warten!)", t2_area_green: "Grün (Gehen!)",
    t2_q: "Bei welcher Farbe darfst du über die Straße gehen?",
    t2_q_a: "Bei Grün", t2_q_b: "Bei Rot", t2_q_c: "Bei Gelb", t2_q_d: "Bei Lila",

    t3_title: "Über den Zebrastreifen", t3_text: "Nutze immer den Zebrastreifen, um über die Straße zu gehen. Die Reihenfolge ist wichtig!",
    t3_b1: "Bleibe zuerst am Straßenrand stehen.", t3_b2: "Schau dich um: erst nach links, dann nach rechts.", t3_b3: "Wenn kein Auto kommt, darfst du gehen!",
    t3_inst: "Bringe die Schritte in die richtige Reihenfolge!",
    t3_w1: "Stehen bleiben", t3_w2: "Nach links schauen", t3_w3: "Nach rechts schauen", t3_w4: "Rübergehen",
    t3_q: "Wohin musst du zuerst schauen?",
    t3_q_a: "Nach links", t3_q_b: "Nach oben", t3_q_c: "Nach hinten", t3_q_d: "Nach rechts",

    t4_title: "Gehen oder Stehen?", t4_text: "Wir sehen viele Schilder auf der Straße. Manche bedeuten Halt, andere bedeuten, dass wir sicher gehen können.",
    t4_b1: "STOP-Schild und rote Ampel: du musst anhalten.", t4_b2: "Grüne Ampel und Zebrastreifen: du darfst gehen.", t4_b3: "Halte immer die Hand eines Erwachsenen!",
    t4_inst: "Anhalten oder Gehen? Sortiere!",
    t4_bucket_stop: "Halt! 🛑", t4_bucket_go: "Weg frei ✅",
    t4_item_s1: "Rote Ampel", t4_item_s2: "STOP-Schild",
    t4_item_g1: "Grüne Ampel", t4_item_g2: "Zebrastreifen",
    t4_q: "Was bedeutet das rote STOP-Schild?",
    t4_q_a: "Du musst stehen bleiben", t4_q_b: "Schnell rennen", t4_q_c: "Hier gibt es Eis", t4_q_d: "Nach links abbiegen",

    t5_title: "Sicher auf dem Fahrrad", t5_text: "Fahrradfahren macht Spaß, aber wir müssen unseren Kopf schützen. Vergiss nie deine Ausrüstung!",
    t5_b1: "Ein Helm schützt deinen Kopf, wenn du fällst.", t5_b2: "Lichter und Reflektoren sind im Dunkeln wichtig.", t5_b3: "Knieschoner sind auch nützlich.",
    t5_inst: "Ergänze den Satz!",
    t5_gap_sentence: "Wenn ich Fahrrad fahre, trage ich immer einen {gap} auf dem Kopf.",
    t5_c51: "Helm", t5_c52: "Sonnenhut", t5_c53: "Krone",
    t5_q: "Welches Körperteil schützt der Fahrradhelm?",
    t5_q_a: "Den Kopf", t5_q_b: "Die Knie", t5_q_c: "Den Rücken", t5_q_d: "Die Hände",
  },
  ro: {
    explorer_title: "Trafic și Siguranță",
    t1_title: "Mașini speciale", t1_text: "Pe stradă vedem multe vehicule. Unele au sarcini importante și ne ajută.",
    t1_b1: "Ambulanța duce bolnavii repede la spital.", t1_b2: "Mașina de poliție păstrează ordinea.", t1_b3: "Mașina de pompieri stinge focul.",
    t1_inst: "Potrivește mașina cu treaba ei!",
    t1_l1: "Ambulanță 🚑", t1_r1: "Ajută bolnavii",
    t1_l2: "Mașină de poliție 🚓", t1_r2: "Păstrează ordinea",
    t1_l3: "Mașină de pompieri 🚒", t1_r3: "Stinge focul",
    t1_q: "Ce face mașina de pompieri?",
    t1_q_a: "Stinge focul", t1_q_b: "Aduce pâine", t1_q_c: "Vinde înghețată", t1_q_d: "Transportă bolnavi",

    t2_title: "Semaforul", t2_text: "Culorile semaforului ne spun când putem trece și când trebuie să stăm. Fii atent!",
    t2_b1: "Roșu: Stai, nu traversa!", t2_b2: "Galben: Pregătește-te, se va schimba culoarea.", t2_b3: "Verde: Drumul e liber, poți trece!",
    t2_inst: "Găsește culorile semaforului!",
    t2_area_red: "Roșu (Stai!)", t2_area_yellow: "Galben (Așteaptă!)", t2_area_green: "Verde (Treci!)",
    t2_q: "La ce culoare putem traversa strada?",
    t2_q_a: "Verde", t2_q_b: "Roșu", t2_q_c: "Galben", t2_q_d: "Mov",

    t3_title: "Trecerea de pietoni", t3_text: "Când traversezi strada, folosește mereu trecerea de pietoni (zebra). Ordinea este foarte importantă.",
    t3_b1: "Prima dată, te oprești la marginea drumului.", t3_b2: "Te uiți: mai întâi la stânga, apoi la dreapta.", t3_b3: "Dacă nu vine nicio mașină, poți traversa!",
    t3_inst: "Pune pașii în ordinea corectă!",
    t3_w1: "Mă opresc", t3_w2: "Mă uit la stânga", t3_w3: "Mă uit la dreapta", t3_w4: "Traversez",
    t3_q: "Unde te uiți mai întâi la marginea drumului?",
    t3_q_a: "La stânga", t3_q_b: "În sus", t3_q_c: "În spate", t3_q_d: "La dreapta",

    t4_title: "Stai sau Treci?", t4_text: "Vedem multe semne pe stradă. Unele ne spun să stăm, altele ne arată că e sigur să trecem.",
    t4_b1: "Semnul STOP și lumina roșie: trebuie să te oprești.", t4_b2: "Lumina verde și zebra: poți trece.", t4_b3: "Ține mereu de mână un adult!",
    t4_inst: "Stai sau Treci? Sortează-le!",
    t4_bucket_stop: "Oprește-te! 🛑", t4_bucket_go: "E sigur ✅",
    t4_item_s1: "Lumina roșie", t4_item_s2: "Semnul STOP",
    t4_item_g1: "Lumina verde", t4_item_g2: "Trecerea de pietoni",
    t4_q: "Ce înseamnă semnul roșu STOP?",
    t4_q_a: "Trebuie să te oprești", t4_q_b: "Fugi repede", t4_q_c: "Aici se vinde înghețată", t4_q_d: "Fă la stânga",

    t5_title: "Siguranța pe bicicletă", t5_text: "Mersul pe bicicletă este distractiv, dar trebuie să ne protejăm capul. Nu uita de echipament!",
    t5_b1: "Casca îți protejează capul dacă cazi.", t5_b2: "Luminile și reflectoarele sunt importante pe întuneric.", t5_b3: "Genunchierele sunt și ele utile.",
    t5_inst: "Completează propoziția!",
    t5_gap_sentence: "Când merg pe bicicletă, port mereu o {gap} pe cap.",
    t5_c51: "cască", t5_c52: "pălărie", t5_c53: "coroană",
    t5_q: "Ce parte a corpului protejează casca?",
    t5_q_a: "Capul", t5_q_b: "Genunchii", t5_q_c: "Spatele", t5_q_d: "Mâinile",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <VehiclesSvg lang={lang} />,
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
    svg: (lang) => <TrafficLightSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "red",    x: 50, y: 20, label: "t2_area_red" },
        { id: "yellow", x: 50, y: 50, label: "t2_area_yellow" },
        { id: "green",  x: 50, y: 80, label: "t2_area_green" },
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
    svg: (lang) => <PedestrianRulesSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctOrder: [0, 1, 2, 3],
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
    svg: (lang) => <TrafficSignsSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "stop", label: "t4_bucket_stop" },
        { id: "go", label: "t4_bucket_go" },
      ],
      items: [
        { text: "t4_item_s1", bucketId: "stop" },
        { text: "t4_item_g1", bucketId: "go" },
        { text: "t4_item_s2", bucketId: "stop" },
        { text: "t4_item_g2", bucketId: "go" },
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
    svg: (lang) => <BicycleSafetySvg lang={lang} />,
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
  icon: "🚦",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const TrafficExplorer = memo(function TrafficExplorer({
  color = "#EF4444", // Red-500 a stoptáblákra és a figyelemre utalva
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
      explorerId="sachkunde_k1_traffic" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default TrafficExplorer;
