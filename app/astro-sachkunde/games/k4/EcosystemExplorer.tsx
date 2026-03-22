"use client";
// EcosystemExplorer — Grade 4 Sachkunde: Ecosystems & Food Webs

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What is an Ecosystem?",
    r1_text: "An ecosystem is a community of plants and animals living together in the same place.",
    r1_fact1: "Ecosystem: All living & non-living things in one area 🌍",
    r1_fact2: "Examples: Forests, oceans, deserts, grasslands, lakes 🏞️",
    r1_fact3: "Habitat: The home of an organism in the ecosystem 🏠",
    r1_fact4: "Interdependence: Living things depend on each other ✨",

    r2_title: "Producers, Consumers & Decomposers",
    r2_text: "Every ecosystem has different roles: plants make food, animals eat them, and decomposers break down dead things.",
    r2_fact1: "Producers: Plants make food from sunlight 🌱",
    r2_fact2: "Primary consumers: Herbivores eat plants 🦗",
    r2_fact3: "Secondary consumers: Carnivores eat other animals 🦁",
    r2_fact4: "Decomposers: Bacteria & fungi break down dead matter 🍄",

    r3_title: "Food Chains",
    r3_text: "A food chain shows how energy passes from one organism to another through eating.",
    r3_fact1: "Energy path: Sun → Plants → Herbivores → Carnivores ⚡",
    r3_fact2: "Example: Grass → Rabbit → Fox 🦊",
    r3_fact3: "Energy loss: Each level has less energy than before 📉",
    r3_fact4: "Pyramid: Producers are the base, carnivores at the top 🔺",
    r3_q: "What happens to energy as it moves up a food chain?",
    r3_a: "It decreases",
    r3_b: "It increases",
    r3_c: "It stays the same",
    r3_d: "It disappears",

    r4_title: "Ecosystems Are Balanced",
    r4_text: "When one organism's population changes, it affects the whole ecosystem.",
    r4_fact1: "Balance: Predators & prey keep each other in check ⚖️",
    r4_fact2: "No predators: Prey population grows too large 📈",
    r4_fact3: "No prey: Predators lose food and decrease 📉",
    r4_fact4: "Biodiversity: Many species = healthy ecosystem 🌈",
    r4_q: "What helps keep an ecosystem balanced?",
    r4_a: "Predators and prey relationships",
    r4_b: "Only herbivores",
    r4_c: "Only carnivores",
    r4_d: "No animals at all",

    r5_title: "Ecosystems Review Quiz",
    q1_q: "Which organisms make their own food?",
    q1_a: "Producers (plants)",
    q1_b: "Consumers (animals)",
    q1_c: "Decomposers",
    q1_d: "All of them",

    q2_q: "What is the first step in a food chain?",
    q2_a: "Sunlight energy captured by plants",
    q2_b: "Animals eating plants",
    q2_c: "Decomposers breaking down",
    q2_d: "Predators hunting",

    q3_q: "If all the herbivores disappeared, what would happen?",
    q3_a: "Carnivores would have no food",
    q3_b: "Plants would grow more",
    q3_c: "The ecosystem would improve",
    q3_d: "Decomposers would die first",
  },
  de: {
    r1_title: "Was ist ein Ökosystem?",
    r1_text: "Ein Ökosystem ist eine Gemeinschaft von Pflanzen und Tieren, die zusammen am selben Ort leben.",
    r1_fact1: "Ökosystem: Alle lebenden & unbelebten Dinge in einem Gebiet 🌍",
    r1_fact2: "Beispiele: Wälder, Meere, Wüsten, Wiesen, Seen 🏞️",
    r1_fact3: "Lebensraum: Das Zuhause eines Organismus 🏠",
    r1_fact4: "Abhängigkeit: Lebende Dinge brauchen sich gegenseitig ✨",

    r2_title: "Produzenten, Konsumenten & Zersetzer",
    r2_text: "Jedes Ökosystem hat verschiedene Rollen: Pflanzen machen Nahrung, Tiere essen sie, und Zersetzer bauen Totes ab.",
    r2_fact1: "Produzenten: Pflanzen machen Nahrung aus Sonnenlicht 🌱",
    r2_fact2: "Primärkonsumenten: Pflanzenfresser essen Pflanzen 🦗",
    r2_fact3: "Sekundärkonsumenten: Fleischfresser essen andere Tiere 🦁",
    r2_fact4: "Zersetzer: Bakterien & Pilze bauen Totes ab 🍄",

    r3_title: "Nahrungsketten",
    r3_text: "Eine Nahrungskette zeigt, wie Energie durch Fressen von Organismus zu Organismus weitergegeben wird.",
    r3_fact1: "Energiepfad: Sonne → Pflanzen → Pflanzenfresser → Fleischfresser ⚡",
    r3_fact2: "Beispiel: Gras → Kaninchen → Fuchs 🦊",
    r3_fact3: "Energieverlust: Jede Stufe hat weniger Energie als davor 📉",
    r3_fact4: "Pyramide: Produzenten unten, Fleischfresser oben 🔺",
    r3_q: "Was passiert mit der Energie, wenn sie eine Nahrungskette hochgeht?",
    r3_a: "Sie nimmt ab",
    r3_b: "Sie nimmt zu",
    r3_c: "Sie bleibt gleich",
    r3_d: "Sie verschwindet",

    r4_title: "Ökosysteme sind ausgewogen",
    r4_text: "Wenn sich die Population eines Organismus ändert, beeinflusst das das ganze Ökosystem.",
    r4_fact1: "Gleichgewicht: Raubtiere & Beute halten sich gegenseitig in Schach ⚖️",
    r4_fact2: "Keine Raubtiere: Beutepopulation wächst zu groß 📈",
    r4_fact3: "Keine Beute: Raubtiere verlieren Nahrung und nehmen ab 📉",
    r4_fact4: "Artenvielfalt: Viele Arten = gesundes Ökosystem 🌈",
    r4_q: "Was hilft, ein Ökosystem im Gleichgewicht zu halten?",
    r4_a: "Beziehungen zwischen Raubtieren und Beute",
    r4_b: "Nur Pflanzenfresser",
    r4_c: "Nur Fleischfresser",
    r4_d: "Keine Tiere",

    r5_title: "Ökosysteme Wiederholungsquiz",
    q1_q: "Welche Organismen stellen ihre eigene Nahrung her?",
    q1_a: "Produzenten (Pflanzen)",
    q1_b: "Konsumenten (Tiere)",
    q1_c: "Zersetzer",
    q1_d: "Alle zusammen",

    q2_q: "Was ist der erste Schritt in einer Nahrungskette?",
    q2_a: "Sonnenlichtenergie wird von Pflanzen aufgefangen",
    q2_b: "Tiere essen Pflanzen",
    q2_c: "Zersetzer bauen ab",
    q2_d: "Raubtiere jagen",

    q3_q: "Wenn alle Pflanzenfresser verschwinden würden, was würde passieren?",
    q3_a: "Fleischfresser hätten keine Nahrung",
    q3_b: "Pflanzen würden mehr wachsen",
    q3_c: "Das Ökosystem würde sich verbessern",
    q3_d: "Zersetzer würden zuerst sterben",
  },
  hu: {
    r1_title: "Mi az ökoszisztéma?",
    r1_text: "Az ökoszisztéma olyan növények és állatok közössége, akik ugyanazon a helyen élnek együtt.",
    r1_fact1: "Ökoszisztéma: Összes élő és élettelen dolog egy területen 🌍",
    r1_fact2: "Példák: Erdők, óceánok, sivatagok, füves puszták, tavak 🏞️",
    r1_fact3: "Élőhely: Az organizmus otthona az ökoszisztémában 🏠",
    r1_fact4: "Függőség: Élő dolgok egymástól függenek ✨",

    r2_title: "Termelők, fogyasztók és lebomlasztók",
    r2_text: "Minden ökoszisztémának más-más szerepei vannak: a növények élelmet készítenek, az állatok megeszik, és a lebomlasztók az elhalt dolgokat szétbontják.",
    r2_fact1: "Termelők: Növények napoló energiából készítik az ételt 🌱",
    r2_fact2: "Elsődleges fogyasztók: Növényi táplálkozók eszik a növényeket 🦗",
    r2_fact3: "Másodlagos fogyasztók: Húsevők megeszik az állatokat 🦁",
    r2_fact4: "Lebomlasztók: Baktériumok és gombák szétbontják az elhalt anyagot 🍄",

    r3_title: "Táplálékláncok",
    r3_text: "A tápláléklánc azt mutatja, hogyan halad az energia az ételsor útján az egyik szervezetből a másikba.",
    r3_fact1: "Energia útja: Nap → Növények → Növényi táplálkozók → Húsevők ⚡",
    r3_fact2: "Példa: Fű → Nyúl → Róka 🦊",
    r3_fact3: "Energia vesztés: Minden szinten kevesebb energia van 📉",
    r3_fact4: "Piramis: Termelők az alapnál, húsevők a tetőn 🔺",
    r3_q: "Mi történik az energiával, amikor felfelé halad a táplálékláncban?",
    r3_a: "Csökken",
    r3_b: "Nő",
    r3_c: "Ugyanaz marad",
    r3_d: "Eltűnik",

    r4_title: "Az ökoszisztémák egyensúlyban vannak",
    r4_text: "Amikor az egyik szervezet populációja megváltozik, az az egész ökoszisztémát érinti.",
    r4_fact1: "Egyensúly: A ragadozók és a zsákmány kölcsönösen ellenőrzik egymást ⚖️",
    r4_fact2: "Nincs ragadozó: A zsákmánypopuláció túl nagyra nő 📈",
    r4_fact3: "Nincs zsákmány: A ragadozók elveszítik az élelmet és csökkennek 📉",
    r4_fact4: "Biodiverzitás: Sok faj = egészséges ökoszisztéma 🌈",
    r4_q: "Mi segít az ökoszisztéma egyensúlyban tartásában?",
    r4_a: "Ragadozó és zsákmány kapcsolatok",
    r4_b: "Csak növényi táplálkozók",
    r4_c: "Csak húsevők",
    r4_d: "Egyáltalán nem állatok",

    r5_title: "Ökoszisztémák átismétlési kvíz",
    q1_q: "Mely szervezetek állítják elő saját élelmet?",
    q1_a: "Termelők (növények)",
    q1_b: "Fogyasztók (állatok)",
    q1_c: "Lebomlasztók",
    q1_d: "Mindenki",

    q2_q: "Mi az első lépés a táplálékláncban?",
    q2_a: "A nap energiáját a növények veszik fel",
    q2_b: "Az állatok megeszik a növényeket",
    q2_c: "A lebomlasztók szétbontanak",
    q2_d: "Az ragadozók vadásznak",

    q3_q: "Ha az összes növényi táplálkozó eltűnne, mi történne?",
    q3_a: "A húsevőknek nem lenne étele",
    q3_b: "A növények több nőnének",
    q3_c: "Az ökoszisztéma javulna",
    q3_d: "A lebomlasztók halnak meg először",
  },
  ro: {
    r1_title: "Ce este un ecosistem?",
    r1_text: "Un ecosistem este o comunitate de plante și animale care trăiesc împreună în același loc.",
    r1_fact1: "Ecosistem: Toate lucrurile vii și nevii dintr-o zonă 🌍",
    r1_fact2: "Exemple: Păduri, oceane, deșerturi, pajiști, lacuri 🏞️",
    r1_fact3: "Habitat: Acasă a unui organism în ecosistem 🏠",
    r1_fact4: "Interdependență: Lucrurile vii depind unele de altele ✨",

    r2_title: "Producători, consumatori și decompoze",
    r2_text: "Fiecare ecosistem are roluri diferite: plantele fac hrană, animalele le mănâncă, iar decompoze-rii se descompun.",
    r2_fact1: "Producători: Plantele fac hrană din lumina soarelui 🌱",
    r2_fact2: "Consumatori primari: Erbivori mănâncă plante 🦗",
    r2_fact3: "Consumatori secundari: Carnivorilor mănâncă alte animale 🦁",
    r2_fact4: "Decompoze: Bacterii și ciuperci descompun materia moartă 🍄",

    r3_title: "Lanțuri alimentare",
    r3_text: "Un lanț alimentar arată cum energia trece de la un organism la altul prin mâncare.",
    r3_fact1: "Cale energiei: Soare → Plante → Erbivori → Carnivor ⚡",
    r3_fact2: "Exemplu: Iarbă → Iepure → Vulpe 🦊",
    r3_fact3: "Pierdere de energie: Fiecare nivel are mai puțină energie decât anterior 📉",
    r3_fact4: "Piramidă: Producători la bază, carnivor în vârf 🔺",
    r3_q: "Ce se întâmplă cu energia pe măsură ce urcă într-un lanț alimentar?",
    r3_a: "Se micșorează",
    r3_b: "Se mărește",
    r3_c: "Rămâne același",
    r3_d: "Dispare",

    r4_title: "Ecosistemele sunt echilibrate",
    r4_text: "Când populația unui organism se schimbă, aceasta afectează întregul ecosistem.",
    r4_fact1: "Echilibru: Prădători și prada se ține reciproc în cec ⚖️",
    r4_fact2: "Fără prădători: Populației de pradă crește prea mult 📈",
    r4_fact3: "Fără pradă: Prădători pierd mâncare și scad 📉",
    r4_fact4: "Biodiversitate: Multe specii = ecosistem sănătos 🌈",
    r4_q: "Ce ajută la păstrarea echilibrului unui ecosistem?",
    r4_a: "Relații între prădători și pradă",
    r4_b: "Doar erbivori",
    r4_c: "Doar carnivor",
    r4_d: "Niciun animal",

    r5_title: "Chestionar de revizuire ecosisteme",
    q1_q: "Care organisme produc propriile lor hrană?",
    q1_a: "Producători (plante)",
    q1_b: "Consumatori (animale)",
    q1_c: "Decompoze",
    q1_d: "Toți împreună",

    q2_q: "Care este primul pas într-un lanț alimentar?",
    q2_a: "Energia luminii soarelui este captată de plante",
    q2_b: "Animalele mănâncă plante",
    q2_c: "Decompoze se descompun",
    q2_d: "Prădatori vânează",

    q3_q: "Dacă toți erbivori ar dispărea, ce s-ar întâmpla?",
    q3_a: "Carnivorii nu ar avea hrană",
    q3_b: "Plantele ar crește mai mult",
    q3_c: "Ecosistemul s-ar îmbunătăți",
    q3_d: "Decompoze-rii ar muri primii",
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#76D7C4" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🌳
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#10B981" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🔗
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#059669" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            ⚡
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#047857" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            ⚖️
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#006B3F" />
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

export default function EcosystemExplorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />
  );
}
