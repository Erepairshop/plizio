"use client";
// EarthWaterExplorer — Grade 4 Sachkunde: Earth & Water

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Layers of the Earth",
    r1_text: "The Earth has distinct layers: a thin crust, thick mantle, outer core, and inner core.",
    r1_fact1: "Crust: Thin solid outer layer where we live 🌍",
    r1_fact2: "Mantle: Hot rock layer below the crust 🔥",
    r1_fact3: "Core: Iron and nickel center, very hot ⚪",
    r1_fact4: "Tectonic plates: Crust pieces that slowly move 🔄",

    r2_title: "Rocks & Minerals",
    r2_text: "Rocks are combinations of minerals. There are three main types of rocks.",
    r2_fact1: "Igneous rocks: Formed from cooled lava 🌋",
    r2_fact2: "Sedimentary rocks: Formed from compressed layers 📚",
    r2_fact3: "Metamorphic rocks: Formed by heat and pressure ⚡",
    r2_fact4: "Minerals: Natural crystalline solids ✨",

    r3_title: "Water on Earth",
    r3_text: "Water covers most of Earth and exists in many forms.",
    r3_fact1: "Ocean water: 97% of Earth's water, salty 🌊",
    r3_fact2: "Fresh water: 3%, found in lakes and rivers 💧",
    r3_fact3: "Ice: Frozen water at poles and mountains ❄️",
    r3_fact4: "Properties: Flows downhill, dissolves many things 🌀",
    r3_q: "What percentage of Earth's water is in the oceans?",
    r3_a: "About 97%",
    r3_b: "About 50%",
    r3_c: "About 30%",
    r3_d: "About 10%",

    r4_title: "Erosion & Weathering",
    r4_text: "Wind, water, and ice slowly shape Earth's surface over time.",
    r4_fact1: "Weathering: Breaking down rocks into smaller pieces ⚒️",
    r4_fact2: "Erosion: Moving of soil and rock by water/wind 💨",
    r4_fact3: "Valleys: Formed by flowing water cutting through rock 🏔️",
    r4_fact4: "Canyons: Deep valleys created over millions of years 🌄",
    r4_q: "What is the difference between weathering and erosion?",
    r4_a: "Weathering breaks down rocks; erosion moves them",
    r4_b: "They are the same thing",
    r4_c: "Weathering moves rocks; erosion breaks them",
    r4_d: "Weathering only happens in cold areas",

    r5_title: "Earth & Water Review",
    q1_q: "Which layer of Earth is the outermost?",
    q1_a: "The crust",
    q1_b: "The mantle",
    q1_c: "The core",
    q1_d: "The atmosphere",

    q2_q: "What are igneous rocks formed from?",
    q2_a: "Cooled lava",
    q2_b: "Compressed layers",
    q2_c: "Heat and pressure",
    q2_d: "Minerals",

    q3_q: "Which process moves soil and rock by water or wind?",
    q3_a: "Erosion",
    q3_b: "Weathering",
    q3_c: "Sedimentation",
    q3_d: "Crystallization",
  },
  de: {
    r1_title: "Schichten der Erde",
    r1_text: "Die Erde hat unterschiedliche Schichten: eine dünne Kruste, einen dicken Mantel, einen äußeren und inneren Kern.",
    r1_fact1: "Kruste: Dünne feste äußere Schicht, wo wir leben 🌍",
    r1_fact2: "Mantel: Heiße Gesteinschicht unter der Kruste 🔥",
    r1_fact3: "Kern: Eisen- und Nickelmittelpunkt, sehr heiß ⚪",
    r1_fact4: "Tektonische Platten: Krustenteile, die sich langsam bewegen 🔄",

    r2_title: "Steine & Mineralien",
    r2_text: "Steine sind Kombinationen von Mineralien. Es gibt drei Haupttypen von Steinen.",
    r2_fact1: "Magmatische Gesteine: Aus erstarrter Lava gebildet 🌋",
    r2_fact2: "Sedimentgesteine: Aus komprimierten Schichten gebildet 📚",
    r2_fact3: "Metamorphe Gesteine: Durch Hitze und Druck gebildet ⚡",
    r2_fact4: "Mineralien: Natürliche kristalline Feststoffe ✨",

    r3_title: "Wasser auf der Erde",
    r3_text: "Wasser bedeckt den Großteil der Erde und existiert in vielen Formen.",
    r3_fact1: "Meerwasser: 97% des Wassers der Erde, salzig 🌊",
    r3_fact2: "Süßwasser: 3%, in Seen und Flüssen 💧",
    r3_fact3: "Eis: Gefrorenes Wasser an Polen und Bergen ❄️",
    r3_fact4: "Eigenschaften: Fließt bergab, löst viel auf 🌀",
    r3_q: "Welcher Prozentsatz des Wassers der Erde ist in den Ozeanen?",
    r3_a: "Etwa 97%",
    r3_b: "Etwa 50%",
    r3_c: "Etwa 30%",
    r3_d: "Etwa 10%",

    r4_title: "Erosion & Verwitterung",
    r4_text: "Wind, Wasser und Eis formen Erds Oberfläche im Laufe der Zeit langsam.",
    r4_fact1: "Verwitterung: Gesteine in kleinere Stücke zerbrechen ⚒️",
    r4_fact2: "Erosion: Bewegung von Boden und Gestein durch Wasser/Wind 💨",
    r4_fact3: "Täler: Gebildet durch fließendes Wasser durch Gestein 🏔️",
    r4_fact4: "Schluchten: Tiefe Täler, über Millionen Jahren geschaffen 🌄",
    r4_q: "Was ist der Unterschied zwischen Verwitterung und Erosion?",
    r4_a: "Verwitterung zerlegt Gesteine; Erosion bewegt sie",
    r4_b: "Sie sind das gleiche",
    r4_c: "Verwitterung bewegt Gesteine; Erosion zerlegt sie",
    r4_d: "Verwitterung passiert nur in kalten Gebieten",

    r5_title: "Erde & Wasser Überprüfung",
    q1_q: "Welche Schicht der Erde ist die äußerste?",
    q1_a: "Die Kruste",
    q1_b: "Der Mantel",
    q1_c: "Der Kern",
    q1_d: "Die Atmosphäre",

    q2_q: "Woraus werden Magmatische Gesteine gebildet?",
    q2_a: "Aus erstarrter Lava",
    q2_b: "Aus komprimierten Schichten",
    q2_c: "Aus Hitze und Druck",
    q2_d: "Aus Mineralien",

    q3_q: "Welcher Prozess bewegt Boden und Gestein durch Wasser oder Wind?",
    q3_a: "Erosion",
    q3_b: "Verwitterung",
    q3_c: "Sedimentation",
    q3_d: "Kristallisierung",
  },
  hu: {
    r1_title: "A Föld rétegei",
    r1_text: "A Föld különálló rétegekből áll: vékony kéreg, vastagabb köpeny, külső mag és belső mag.",
    r1_fact1: "Kéreg: Vékony szilárd külső réteg, ahol élünk 🌍",
    r1_fact2: "Köpeny: Meleg kőzetréteg a kéreg alatt 🔥",
    r1_fact3: "Mag: Vas- és nikkel középpont, nagyon meleg ⚪",
    r1_fact4: "Tektonikus lemezek: Kéreg részei, amelyek lassan mozognak 🔄",

    r2_title: "Kőzetek és ásványok",
    r2_text: "A kőzetek ásványok kombinációi. Három fő típusú kőzet van.",
    r2_fact1: "Vulkanikus kőzetek: Hűlt lávából képződnek 🌋",
    r2_fact2: "Üledékkőzetek: Tömörített rétegekből képződnek 📚",
    r2_fact3: "Metamorf kőzetek: Hő és nyomás által képződnek ⚡",
    r2_fact4: "Ásványok: Természetes kristályos szilárd anyagok ✨",

    r3_title: "Víz a Földön",
    r3_text: "A víz a Föld nagy részét borítja és sok formában létezik.",
    r3_fact1: "Óceáni víz: 97% a Föld vizének, sós 🌊",
    r3_fact2: "Édesvíz: 3%, tavakban és folyókban 💧",
    r3_fact3: "Jég: Fagyott víz a sarkokon és hegyekben ❄️",
    r3_fact4: "Tulajdonságok: Lefelé folyik, sok mindent felold 🌀",
    r3_q: "A Föld vizének hány százaléka van az óceánokban?",
    r3_a: "Körülbelül 97%",
    r3_b: "Körülbelül 50%",
    r3_c: "Körülbelül 30%",
    r3_d: "Körülbelül 10%",

    r4_title: "Erózió és elhatározás",
    r4_text: "A szél, a víz és a jég az idő során lassan alakítják a Föld felszínét.",
    r4_fact1: "Elhatározás: Kőzetek megtörése kisebb darabokra ⚒️",
    r4_fact2: "Erózió: Talaj és kőzet mozgása vízzel/széllel 💨",
    r4_fact3: "Völgyek: Folyó vizéből vésett formálódások 🏔️",
    r4_fact4: "Szurdok: Millió évek alatt kialakított mély völgyek 🌄",
    r4_q: "Mi a különbség az elhatározás és az erózió között?",
    r4_a: "Elhatározás megtöri a kőzeteket; erózió mozgatja őket",
    r4_b: "Ugyanaz a dolog",
    r4_c: "Elhatározás mozgatja a kőzeteket; erózió megtöri őket",
    r4_d: "Az elhatározás csak hideg területeken történik",

    r5_title: "Föld és víz felülvizsgálat",
    q1_q: "A Föld melyik rétege a legkülsőbb?",
    q1_a: "A kéreg",
    q1_b: "A köpeny",
    q1_c: "A mag",
    q1_d: "Az atmoszféra",

    q2_q: "Miből képződnek a vulkanikus kőzetek?",
    q2_a: "Hűlt lávából",
    q2_b: "Tömörített rétegekből",
    q2_c: "Hőből és nyomásból",
    q2_d: "Ásványokból",

    q3_q: "Melyik folyamat mozgatja a talajt és kőzetet víz vagy szél által?",
    q3_a: "Erózió",
    q3_b: "Elhatározás",
    q3_c: "Szedimentálás",
    q3_d: "Kristályosodás",
  },
  ro: {
    r1_title: "Straturi ale Pământului",
    r1_text: "Pământul are straturi distincte: o crustă subțire, manta groasă, nucleul exterior și nucleul interior.",
    r1_fact1: "Crustă: Strat exterior solid subțire unde trăim 🌍",
    r1_fact2: "Manta: Strat de rocă fierbinte sub crustă 🔥",
    r1_fact3: "Nucleu: Centru de fier și nichel, foarte cald ⚪",
    r1_fact4: "Plăci tectonice: Bucăți de crustă care se mișcă lent 🔄",

    r2_title: "Pietre și minerale",
    r2_text: "Pietele sunt combinații de minerale. Există trei tipuri principale de roci.",
    r2_fact1: "Roci vulcanice: Formate din lavă răcită 🌋",
    r2_fact2: "Roci sedimentare: Formate din straturi comprimate 📚",
    r2_fact3: "Roci metamorfice: Formate prin căldură și presiune ⚡",
    r2_fact4: "Minerale: Solide cristaline naturale ✨",

    r3_title: "Apa pe Pământ",
    r3_text: "Apa acoperă cea mai mare parte a Pământului și există în multe forme.",
    r3_fact1: "Apă de ocean: 97% din apa Pământului, sărată 🌊",
    r3_fact2: "Apă dulce: 3%, în lacuri și râuri 💧",
    r3_fact3: "Gheață: Apă înghețată la poli și munți ❄️",
    r3_fact4: "Proprietăți: Curge în jos, dizolvă mai multe lucruri 🌀",
    r3_q: "Ce procent din apa Pământului este în oceane?",
    r3_a: "Aproximativ 97%",
    r3_b: "Aproximativ 50%",
    r3_c: "Aproximativ 30%",
    r3_d: "Aproximativ 10%",

    r4_title: "Eroziune și intemperie",
    r4_text: "Vântul, apa și gheața modelează lent suprafața Pământului în timp.",
    r4_fact1: "Intemperie: Ruperea rocilor în bucăți mai mici ⚒️",
    r4_fact2: "Eroziune: Mișcarea solului și rocii prin apă/vânt 💨",
    r4_fact3: "Văi: Formate de apa curgătoare prin rocă 🏔️",
    r4_fact4: "Gârluri: Văi adânci create pe milioane de ani 🌄",
    r4_q: "Care este diferența între intemperie și eroziune?",
    r4_a: "Intemperiile rup rocile; eroziunea le mișcă",
    r4_b: "Sunt același lucru",
    r4_c: "Intemperiile mișcă rocile; eroziunea le rupe",
    r4_d: "Intemperia se întâmplă doar în zonele reci",

    r5_title: "Pământ și revizuire apă",
    q1_q: "Care strat al Pământului este cel mai exterior?",
    q1_a: "Crusta",
    q1_b: "Manta",
    q1_c: "Nucleul",
    q1_d: "Atmosfera",

    q2_q: "Din ce sunt formate rocile vulcanice?",
    q2_a: "Din lava răcită",
    q2_b: "Din straturi comprimate",
    q2_c: "Din căldură și presiune",
    q2_d: "Din minerale",

    q3_q: "Ce proces mișcă solul și rochia prin apă sau vânt?",
    q3_a: "Eroziune",
    q3_b: "Intemperie",
    q3_c: "Sedimentare",
    q3_d: "Cristalizare",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#E8D4C4" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🌍
          </text>
        </svg>
      ),
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#C4976A" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🪨
          </text>
        </svg>
      ),
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#4ECDC4" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🌊
          </text>
        </svg>
      ),
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_a", "r3_b", "r3_c", "r3_d"],
          answer: "r3_a",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#8B7355" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🏔️
          </text>
        </svg>
      ),
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_a", "r4_b", "r4_c", "r4_d"],
          answer: "r4_a",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#5A4A3A" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            📚
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q1_q",
          choices: ["q1_a", "q1_b", "q1_c", "q1_d"],
          answer: "q1_a",
        },
        {
          question: "q2_q",
          choices: ["q2_a", "q2_b", "q2_c", "q2_d"],
          answer: "q2_a",
        },
        {
          question: "q3_q",
          choices: ["q3_a", "q3_b", "q3_c", "q3_d"],
          answer: "q3_a",
        },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function EarthWaterExplorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />
  );
}
