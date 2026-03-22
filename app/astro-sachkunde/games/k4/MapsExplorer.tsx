"use client";
// MapsExplorer — Grade 4 Sachkunde: Maps & Orientation

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What is a Map?",
    r1_text: "A map is a representation of an area on a flat surface, showing locations and features.",
    r1_fact1: "Map: Visual representation of Earth or an area 🗺️",
    r1_fact2: "Legend: Key showing symbols on a map 📋",
    r1_fact3: "Scale: Shows how map distances relate to real distances 📏",
    r1_fact4: "Compass rose: Shows map directions (N, S, E, W) 🧭",

    r2_title: "Types of Maps",
    r2_text: "Different maps serve different purposes and show different information.",
    r2_fact1: "Political maps: Show countries, borders, cities 🏛️",
    r2_fact2: "Physical maps: Show mountains, rivers, oceans 🏔️",
    r2_fact3: "Thematic maps: Show specific data (weather, population) 📊",
    r2_fact4: "Street maps: Show roads and neighborhoods 🛣️",

    r3_title: "Using a Compass",
    r3_text: "A compass helps us find directions no matter where we are.",
    r3_fact1: "Cardinal directions: North, South, East, West 🧭",
    r3_fact2: "Compass needle: Always points north ↑",
    r3_fact3: "Intermediate: Northeast, Southeast, Southwest, Northwest ⬈️",
    r3_fact4: "Navigation: Using compass and map together 🗺️",
    r3_q: "Which direction does a compass needle always point?",
    r3_a: "North",
    r3_b: "South",
    r3_c: "East",
    r3_d: "West",

    r4_title: "Coordinates & Location",
    r4_text: "We can find exact locations using coordinates on maps.",
    r4_fact1: "Latitude: Lines running east-west, measure north-south 🎯",
    r4_fact2: "Longitude: Lines running north-south, measure east-west 🎯",
    r4_fact3: "Equator: 0° latitude, divides north and south ➡️",
    r4_fact4: "Prime Meridian: 0° longitude, divides east and west ↕️",
    r4_q: "What are horizontal lines on a map called?",
    r4_a: "Latitude",
    r4_b: "Longitude",
    r4_c: "Borders",
    r4_d: "Meridians",

    r5_title: "Maps & Orientation Review",
    q1_q: "What does a map legend show?",
    q1_a: "Symbols and their meanings",
    q1_b: "Where mountains are",
    q1_c: "How far cities are",
    q1_d: "The compass direction",

    q2_q: "Which type of map shows countries and borders?",
    q2_a: "Political map",
    q2_b: "Physical map",
    q2_c: "Weather map",
    q2_d: "Street map",

    q3_q: "What do latitude and longitude together form?",
    q3_a: "Coordinates for location",
    q3_b: "A compass rose",
    q3_c: "A scale",
    q3_d: "A legend",
  },
  de: {
    r1_title: "Was ist eine Karte?",
    r1_text: "Eine Karte ist eine Darstellung eines Gebiets auf einer flachen Oberfläche, die Orte und Merkmale zeigt.",
    r1_fact1: "Karte: Visuelle Darstellung der Erde oder eines Gebiets 🗺️",
    r1_fact2: "Legende: Schlüssel zeigt Symbole auf einer Karte 📋",
    r1_fact3: "Maßstab: Zeigt, wie sich Kartenabstände auf reale Abstände beziehen 📏",
    r1_fact4: "Kompassrose: Zeigt Kartenhimmelsrichtungen (N, S, O, W) 🧭",

    r2_title: "Arten von Karten",
    r2_text: "Verschiedene Karten dienen verschiedenen Zwecken und zeigen verschiedene Informationen.",
    r2_fact1: "Politische Karten: Zeigen Länder, Grenzen, Städte 🏛️",
    r2_fact2: "Physische Karten: Zeigen Berge, Flüsse, Ozeane 🏔️",
    r2_fact3: "Thematische Karten: Zeigen spezifische Daten (Wetter, Bevölkerung) 📊",
    r2_fact4: "Straßenkarten: Zeigen Straßen und Nachbarschaften 🛣️",

    r3_title: "Einen Kompass benutzen",
    r3_text: "Ein Kompass hilft uns, egal wo wir sind, Richtungen zu finden.",
    r3_fact1: "Kardinalrichtungen: Nord, Süd, Ost, West 🧭",
    r3_fact2: "Kompassnadel: Weist immer nach Norden ↑",
    r3_fact3: "Zwischenrichtungen: Nordost, Südost, Südwest, Nordwest ⬈️",
    r3_fact4: "Navigation: Kompass und Karte zusammen nutzen 🗺️",
    r3_q: "In welche Richtung weist eine Kompassnadel immer?",
    r3_a: "Norden",
    r3_b: "Süden",
    r3_c: "Osten",
    r3_d: "Westen",

    r4_title: "Koordinaten & Position",
    r4_text: "Wir können genaue Orte mit Koordinaten auf Karten finden.",
    r4_fact1: "Breitengrad: Linien von Ost nach West, messen Nord-Süd 🎯",
    r4_fact2: "Längengrad: Linien von Nord nach Süd, messen Ost-West 🎯",
    r4_fact3: "Äquator: 0° Breitengrad, teilt Nord und Süd ➡️",
    r4_fact4: "Nullmeridian: 0° Längengrad, teilt Ost und West ↕️",
    r4_q: "Wie heißen horizontale Linien auf einer Karte?",
    r4_a: "Breitengrad",
    r4_b: "Längengrad",
    r4_c: "Grenzen",
    r4_d: "Meridiane",

    r5_title: "Karten & Orientierungsprüfung",
    q1_q: "Was zeigt eine Kartenlegende?",
    q1_a: "Symbole und ihre Bedeutungen",
    q1_b: "Wo Berge sind",
    q1_c: "Wie weit Städte sind",
    q1_d: "Die Kompassrichtung",

    q2_q: "Welche Art von Karte zeigt Länder und Grenzen?",
    q2_a: "Politische Karte",
    q2_b: "Physische Karte",
    q2_c: "Wetterkarte",
    q2_d: "Straßenkarte",

    q3_q: "Was bilden Breitengrad und Längengrad zusammen?",
    q3_a: "Koordinaten für Standort",
    q3_b: "Eine Kompassrose",
    q3_c: "Ein Maßstab",
    q3_d: "Eine Legende",
  },
  hu: {
    r1_title: "Mi az a térkép?",
    r1_text: "A térkép egy terület megjelenítése egy lapos felületen, amely helyeket és jellemzőket mutat.",
    r1_fact1: "Térkép: A Föld vagy egy terület vizuális megjelenítése 🗺️",
    r1_fact2: "Jelmagyarázat: Kulcs mutatja a térkép szimbólumait 📋",
    r1_fact3: "Méretarány: Mutatja, hogyan kapcsolódnak a térképi távolságok a valódi távolságokhoz 📏",
    r1_fact4: "Iránytű rózsa: Mutatja a térképi irányokat (É, D, K, Ny) 🧭",

    r2_title: "A térképek típusai",
    r2_text: "A különböző térképek eltérő célokat szolgálnak és különbözően információt mutatnak.",
    r2_fact1: "Politikai térképek: Országokat, határokat, városokat mutatnak 🏛️",
    r2_fact2: "Fizikai térképek: Hegyeket, folyókat, óceánokat mutatnak 🏔️",
    r2_fact3: "Tematikus térképek: Specifikus adatokat mutatnak (időjárás, népesség) 📊",
    r2_fact4: "Utcatérképek: Utakat és szomszédságokat mutatnak 🛣️",

    r3_title: "Iránytű használata",
    r3_text: "Az iránytű segít az irányok megtalálásában, bárhol vagyunk.",
    r3_fact1: "Főirányok: Észak, Dél, Kelet, Nyugat 🧭",
    r3_fact2: "Iránytű tű: Mindig északra mutat ↑",
    r3_fact3: "Közbülső irányok: Északkeleti, Délkeleti, Délnyugati, Északnyugati ⬈️",
    r3_fact4: "Navigáció: Iránytű és térkép együtt használata 🗺️",
    r3_q: "Melyik irányba mutat az iránytű tűje mindig?",
    r3_a: "Északra",
    r3_b: "Délre",
    r3_c: "Kelet",
    r3_d: "Nyugatra",

    r4_title: "Koordináták és elhelyezkedés",
    r4_text: "Pontos helyeket találhatunk koordinátákkal a térképeken.",
    r4_fact1: "Szélességi vonal: Vonalak kelet-nyugat, mérhetik az észak-délt 🎯",
    r4_fact2: "Hosszúsági vonal: Vonalak észak-dél, mérhetik a kelet-nyugatot 🎯",
    r4_fact3: "Egyenlítő: 0° szélességi vonal, észak-délt osztja ➡️",
    r4_fact4: "Kezdő délkör: 0° hosszúsági vonal, kelet-nyugatot osztja ↕️",
    r4_q: "Hogyan nevezzük a térképen a vízszintes vonalakat?",
    r4_a: "Szélességi vonalak",
    r4_b: "Hosszúsági vonalak",
    r4_c: "Határok",
    r4_d: "Délköri",

    r5_title: "Térképek és orientáció felülvizsgálat",
    q1_q: "Mit mutat egy térkép jelmagyarázata?",
    q1_a: "Szimbólumok és azok jelentése",
    q1_b: "Hol vannak a hegyek",
    q1_c: "Milyen messze vannak a városok",
    q1_d: "Az iránytű iránya",

    q2_q: "Melyik típusú térkép mutatja az országokat és határokat?",
    q2_a: "Politikai térkép",
    q2_b: "Fizikai térkép",
    q2_c: "Időjárás térkép",
    q2_d: "Utca térkép",

    q3_q: "Mit alkotnak a szélességi és hosszúsági vonalak együtt?",
    q3_a: "Helyzet koordinátái",
    q3_b: "Egy iránytű rózsa",
    q3_c: "Egy méretarány",
    q3_d: "Egy jelmagyarázat",
  },
  ro: {
    r1_title: "Ce este o hartă?",
    r1_text: "O hartă este o reprezentare a unei zone pe o suprafață plană, arătând locurile și caracteristicile.",
    r1_fact1: "Hartă: Reprezentare vizuală a Pământului sau a unei zone 🗺️",
    r1_fact2: "Legendă: Cheie arată simboluri pe o hartă 📋",
    r1_fact3: "Scară: Arată cum distanțele pe hartă se raportează la distanțele reale 📏",
    r1_fact4: "Rozeta bussolei: Arată direcțiile hărții (N, S, E, V) 🧭",

    r2_title: "Tipuri de hărți",
    r2_text: "Diferitele hărți servesc scopuri diferite și arată informații diferite.",
    r2_fact1: "Hărți politice: Arată țări, granițe, orașe 🏛️",
    r2_fact2: "Hărți fizice: Arată munți, râuri, oceane 🏔️",
    r2_fact3: "Hărți tematice: Arată date specifice (vreme, populație) 📊",
    r2_fact4: "Hărți stradale: Arată drumuri și cartiere 🛣️",

    r3_title: "Utilizarea unei busole",
    r3_text: "O busolă ne ajută să găsim direcții indiferent unde suntem.",
    r3_fact1: "Direcții cardinale: Nord, Sud, Est, Vest 🧭",
    r3_fact2: "Ac busolei: Indică întotdeauna nordul ↑",
    r3_fact3: "Direcții intermediare: Northeast, Sudest, Sudvest, Northwest ⬈️",
    r3_fact4: "Navigație: Utilizarea busole și hărții împreună 🗺️",
    r3_q: "În ce direcție indică întotdeauna acul busolei?",
    r3_a: "Nord",
    r3_b: "Sud",
    r3_c: "Est",
    r3_d: "Vest",

    r4_title: "Coordonate și locație",
    r4_text: "Putem găsi locații exacte folosind coordonate pe hărți.",
    r4_fact1: "Latitudine: Linii care rulează est-vest, măsoară nord-sud 🎯",
    r4_fact2: "Longitudine: Linii care rulează nord-sud, măsoară est-vest 🎯",
    r4_fact3: "Ecuator: 0° latitudine, împarte nord și sud ➡️",
    r4_fact4: "Meridian prim: 0° longitudine, împarte est și vest ↕️",
    r4_q: "Cum se numesc liniile orizontale pe o hartă?",
    r4_a: "Latitudine",
    r4_b: "Longitudine",
    r4_c: "Granițe",
    r4_d: "Meridiane",

    r5_title: "Hărți și orientare revizuire",
    q1_q: "Ce arată o legendă de hartă?",
    q1_a: "Simboluri și semnificațiile lor",
    q1_b: "Unde sunt munții",
    q1_c: "Cât de departe sunt orașele",
    q1_d: "Direcția busolei",

    q2_q: "Ce tip de hartă arată țări și granițe?",
    q2_a: "Hartă politică",
    q2_b: "Hartă fizică",
    q2_c: "Hartă meteo",
    q2_d: "Hartă stradală",

    q3_q: "Ce formează lauda și longitudinea împreună?",
    q3_a: "Coordonate pentru locație",
    q3_b: "O rozetă bussolei",
    q3_c: "O scară",
    q3_d: "O legendă",
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#BB8FCE" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🗺️
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#A569BD" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🧭
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#9248B1" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            ↑
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#7D3FA4" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🎯
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#652A8A" />
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

export default function MapsExplorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />
  );
}
