"use client";
// GrandFinaleK4Explorer — Grade 4 Sachkunde: Grand Finale Review

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Bodies & Living Creatures",
    r1_text: "Review what we learned about humans, animals, and ecosystems.",
    r1_fact1: "Humans have organ systems that work together 🫀",
    r1_fact2: "Animals have different habitats and ways of living 🐘",
    r1_fact3: "Ecosystems need balance between all living things ⚖️",
    r1_fact4: "Food chains show how energy moves through nature ⛓️",

    r2_title: "Earth & Weather",
    r2_text: "Remember what we explored about our planet and its weather.",
    r2_fact1: "Earth has layers: crust, mantle, and core 🌍",
    r2_fact2: "Water cycles between oceans, air, and land 💧",
    r2_fact3: "Weather patterns change with seasons 🌦️",
    r2_fact4: "Climate zones have different characteristics 🏔️",

    r3_title: "Mixed Review Challenge",
    r3_text: "Can you answer questions from different topics?",
    r3_fact1: "Focus on main ideas from all islands 💭",
    r3_fact2: "Remember key facts and definitions 📝",
    r3_fact3: "Think about how topics connect 🔗",
    r3_fact4: "Show what you have learned! 🏆",
    r3_q: "Which of these is a renewable energy source?",
    r3_a: "Solar power",
    r3_b: "Coal",
    r3_c: "Oil",
    r3_d: "Natural gas",

    r4_title: "Final Challenge!",
    r4_text: "Great job reviewing! You're ready for the final quiz.",
    r4_fact1: "You learned about human bodies and health 💪",
    r4_fact2: "You explored animal habitats and ecosystems 🌲",
    r4_fact3: "You studied weather, climate, and Earth 🌎",
    r4_fact4: "You discovered energy and navigation skills 🧭",
    r4_q: "What do latitude and longitude form together?",
    r4_a: "Coordinates for finding locations",
    r4_b: "A compass rose",
    r4_c: "A map legend",
    r4_d: "A map scale",

    r5_title: "Grand Finale Quiz!",
    q1_q: "How many bones do adult humans have?",
    q1_a: "About 206",
    q1_b: "About 150",
    q1_c: "About 300",
    q1_d: "About 500",

    q2_q: "What percentage of Earth's water is in oceans?",
    q2_a: "About 97%",
    q2_b: "About 50%",
    q2_c: "About 30%",
    q2_d: "About 10%",

    q3_q: "Which direction does a compass needle always point?",
    q3_a: "North",
    q3_b: "South",
    q3_c: "East",
    q3_d: "West",
  },
  de: {
    r1_title: "Körper und lebende Kreaturen",
    r1_text: "Überprüfe, was wir über Menschen, Tiere und Ökosysteme gelernt haben.",
    r1_fact1: "Menschen haben Organsysteme, die zusammenarbeiten 🫀",
    r1_fact2: "Tiere haben verschiedene Lebensräume und Lebensweisen 🐘",
    r1_fact3: "Ökosysteme brauchen Gleichgewicht zwischen allen Lebewesen ⚖️",
    r1_fact4: "Nahrungsketten zeigen, wie Energie durch die Natur fließt ⛓️",

    r2_title: "Erde und Wetter",
    r2_text: "Denke an das, was wir über unseren Planeten und sein Wetter erforscht haben.",
    r2_fact1: "Erde hat Schichten: Kruste, Mantel und Kern 🌍",
    r2_fact2: "Wasser zirkuliert zwischen Ozeanen, Luft und Land 💧",
    r2_fact3: "Wettermuster ändern sich mit den Jahreszeiten 🌦️",
    r2_fact4: "Klimazonen haben unterschiedliche Merkmale 🏔️",

    r3_title: "Gemischte Überprüfung",
    r3_text: "Kannst du Fragen aus verschiedenen Themen beantworten?",
    r3_fact1: "Konzentriere dich auf Hauptideen von allen Inseln 💭",
    r3_fact2: "Merke dir Schlüsselfakten und Definitionen 📝",
    r3_fact3: "Denke darüber nach, wie Themen miteinander verbunden sind 🔗",
    r3_fact4: "Zeige, was du gelernt hast! 🏆",
    r3_q: "Welches ist eine erneuerbare Energiequelle?",
    r3_a: "Solarenergie",
    r3_b: "Kohle",
    r3_c: "Öl",
    r3_d: "Erdgas",

    r4_title: "Letzte Herausforderung!",
    r4_text: "Großartig, dass du überprüft hast! Du bist bereit für das abschließende Quiz.",
    r4_fact1: "Du hast viel über menschliche Körper und Gesundheit gelernt 💪",
    r4_fact2: "Du hast Tierlebensräume und Ökosysteme erforscht 🌲",
    r4_fact3: "Du hast Wetter, Klima und Erde studiert 🌎",
    r4_fact4: "Du hast Energie- und Navigationsfähigkeiten entdeckt 🧭",
    r4_q: "Was bilden Breitengrad und Längengrad zusammen?",
    r4_a: "Koordinaten zum Finden von Orten",
    r4_b: "Eine Kompassrose",
    r4_c: "Eine Kartenlegende",
    r4_d: "Ein Kartenmaßstab",

    r5_title: "Großes Finale Quiz!",
    q1_q: "Wie viele Knochen haben Erwachsene?",
    q1_a: "Etwa 206",
    q1_b: "Etwa 150",
    q1_c: "Etwa 300",
    q1_d: "Etwa 500",

    q2_q: "Welcher Prozentsatz des Wassers der Erde ist in Ozeanen?",
    q2_a: "Etwa 97%",
    q2_b: "Etwa 50%",
    q2_c: "Etwa 30%",
    q2_d: "Etwa 10%",

    q3_q: "In welche Richtung weist eine Kompassnadel immer?",
    q3_a: "Norden",
    q3_b: "Süden",
    q3_c: "Osten",
    q3_d: "Westen",
  },
  hu: {
    r1_title: "Testik és élőlények",
    r1_text: "Tekintse át, mit tanultunk az emberekről, állatokról és ökoszisztémákról.",
    r1_fact1: "Az embereknek van szervrendszere, amely együtt működik 🫀",
    r1_fact2: "Az állatok különböző élőhelyeik és életmódjuk vannak 🐘",
    r1_fact3: "Az ökoszisztémák egyensúlyra van szüksége az összes élőlény között ⚖️",
    r1_fact4: "Táplálékláncok mutatják, hogyan halad az energia a természetben ⛓️",

    r2_title: "Föld és időjárás",
    r2_text: "Emlékezz arra, amit a bolygónkról és az időjárásáról fedeztünk fel.",
    r2_fact1: "A Föld rétegeket tartalmaz: kéreg, köpeny és mag 🌍",
    r2_fact2: "A víz keringése az óceánok, levegő és föld között 💧",
    r2_fact3: "Az időjárási minták az évszakokkal változnak 🌦️",
    r2_fact4: "Az éghajlati övezetek különböző jellemzőkkel rendelkeznek 🏔️",

    r3_title: "Vegyes felülvizsgálat",
    r3_text: "Meg tudod válaszolni a különböző témákból származó kérdéseket?",
    r3_fact1: "Összpontosítsd a fő ötleteket az összes szigetről 💭",
    r3_fact2: "Emlékeztess a kulcs tényekre és definíciókra 📝",
    r3_fact3: "Gondolkodjon azon, hogyan kapcsolódnak a témák 🔗",
    r3_fact4: "Mutasd meg, mit tanultál! 🏆",
    r3_q: "Melyik a megújítható energia forrása?",
    r3_a: "Napenergia",
    r3_b: "Szén",
    r3_c: "Olaj",
    r3_d: "Földgáz",

    r4_title: "Utolsó kihívás!",
    r4_text: "Nagyszerű, hogy átnéztél! Készen állsz a végső kvízre.",
    r4_fact1: "Sokat tanultál az emberi testről és egészségről 💪",
    r4_fact2: "Felfedezted az állatélőhelyeket és ökoszisztémákat 🌲",
    r4_fact3: "Tanulmányoztad az időjárást, éghajlatot és a Földet 🌎",
    r4_fact4: "Felfedezted az energia- és navigációs képességeket 🧭",
    r4_q: "Mit alkot a szélességi és hosszúsági vonal együtt?",
    r4_a: "Helyzetkoordináták",
    r4_b: "Egy iránytű rózsa",
    r4_c: "Egy térkép jelmagyarázata",
    r4_d: "Egy térkép méretaránya",

    r5_title: "Grand Finale Quiz!",
    q1_q: "Hány csont van a felnőtt embereknek?",
    q1_a: "Körülbelül 206",
    q1_b: "Körülbelül 150",
    q1_c: "Körülbelül 300",
    q1_d: "Körülbelül 500",

    q2_q: "A Föld vizének hány százaléka van az óceánokban?",
    q2_a: "Körülbelül 97%",
    q2_b: "Körülbelül 50%",
    q2_c: "Körülbelül 30%",
    q2_d: "Körülbelül 10%",

    q3_q: "Melyik irányba mutat az iránytű tűje mindig?",
    q3_a: "Északra",
    q3_b: "Délre",
    q3_c: "Keletre",
    q3_d: "Nyugatra",
  },
  ro: {
    r1_title: "Corpuri și creaturi vii",
    r1_text: "Recapitulează ceea ce am învățat despre oameni, animale și ecosisteme.",
    r1_fact1: "Oamenii au sisteme de organe care funcționează împreună 🫀",
    r1_fact2: "Animalele au habitate și moduri de viață diferite 🐘",
    r1_fact3: "Ecosistemele au nevoie de echilibru între toate lucrurile vii ⚖️",
    r1_fact4: "Lanțurile alimentare arată cum energia se mișcă prin natură ⛓️",

    r2_title: "Pământ și vreme",
    r2_text: "Amintiți-vă ce am explorat despre planeta noastră și vremea ei.",
    r2_fact1: "Pământul are straturi: crustă, manta și nucleu 🌍",
    r2_fact2: "Apa se ciclează între oceane, aer și pământ 💧",
    r2_fact3: "Modelele meteorologice se schimbă cu anotimpurile 🌦️",
    r2_fact4: "Zonele climatice au caracteristici diferite 🏔️",

    r3_title: "Revizuire mixtă",
    r3_text: "Poți răspunde la întrebări din diferite subiecte?",
    r3_fact1: "Concentrează-te pe ideile principale din toate insulele 💭",
    r3_fact2: "Adu-ți aminte faptele și definițiile cheie 📝",
    r3_fact3: "Gândește-te la modul în care subiectele se conectează 🔗",
    r3_fact4: "Arată ce ai învățat! 🏆",
    r3_q: "Care dintre acestea este o sursă de energie regenerabilă?",
    r3_a: "Energie solară",
    r3_b: "Cărbune",
    r3_c: "Ulei",
    r3_d: "Gaz natural",

    r4_title: "Provocare finală!",
    r4_text: "Excelent că ai revizuit! Ești gata pentru chestionarul final.",
    r4_fact1: "Ai învățat despre corpul uman și sănătate 💪",
    r4_fact2: "Ai explorat habitatele și ecosistemele animalelor 🌲",
    r4_fact3: "Ai studiat vremea, clima și Pământul 🌎",
    r4_fact4: "Ai descoperit abilități de energie și navigație 🧭",
    r4_q: "Ce formează latitudinea și longitudinea împreună?",
    r4_a: "Coordonate pentru găsirea locurilor",
    r4_b: "O rozetă bussolei",
    r4_c: "O legendă de hartă",
    r4_d: "O scară de hartă",

    r5_title: "Grand Finale Quiz!",
    q1_q: "Câți oase au adulții?",
    q1_a: "Aproximativ 206",
    q1_b: "Aproximativ 150",
    q1_c: "Aproximativ 300",
    q1_d: "Aproximativ 500",

    q2_q: "Ce procent din apa Pământului este în oceane?",
    q2_a: "Aproximativ 97%",
    q2_b: "Aproximativ 50%",
    q2_c: "Aproximativ 30%",
    q2_d: "Aproximativ 10%",

    q3_q: "In ce direcție indică întotdeauna acul busolei?",
    q3_a: "Nord",
    q3_b: "Sud",
    q3_c: "Est",
    q3_d: "Vest",
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#F1948A" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🏆
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#EC7063" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🌍
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#E74C3C" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            💭
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#CB4335" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            ⭐
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#A93226" />
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

export default function GrandFinaleK4Explorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />
  );
}
