"use client";
// SpaceExplorer — Universal Gravitation, Solar System, Orbits, Seasons/Tides (Klasse 7)
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Universal Gravitation", r1_text: "Every object with mass attracts every other object with mass. This force is gravity. The gravitational force follows the equation: F = G × m₁ × m₂ / r². The force is stronger when masses are larger and when objects are closer together (smaller distance = larger force).",
    r1_fact1: "Even you attract everything around you with gravity, but the force is incredibly tiny",
    r1_q: "Gravitational force increases when...", r1_a: "Objects are closer together", r1_b: "Objects move faster", r1_c: "Temperature increases", r1_d: "Light is brighter",
    r2_title: "The Solar System", r2_text: "Our solar system has the Sun at the center. Orbiting the Sun are 8 planets: Mercury, Venus, Earth, Mars (rocky inner planets), then Jupiter, Saturn, Uranus, Neptune (gas giants). Between Mars and Jupiter is the asteroid belt with thousands of rocky bodies. The Moon orbits Earth.",
    r2_fact1: "Jupiter is 11 times wider than Earth and could fit 1,000 Earths inside",
    r2_q: "The largest planet in our solar system is...", r2_a: "Jupiter", r2_b: "Saturn", r2_c: "Earth", r2_d: "Neptune",
    r3_title: "Orbital Motion", r3_text: "Planets orbit the Sun because gravity pulls them toward it. Gravity provides the centripetal force that keeps planets in circular or elliptical paths. Planets closer to the Sun orbit faster because they experience stronger gravity. Earth orbits the Sun every 365 days. The Moon orbits Earth every 27.3 days.",
    r3_fact1: "Pluto was reclassified as a dwarf planet in 2006, but was planet #9 for 76 years",
    r3_q: "What keeps planets in orbit around the Sun?", r3_a: "Gravity", r3_b: "Magnetism", r3_c: "Friction", r3_d: "The Sun's light",
    r4_title: "Seasons & Tides", r4_text: "Seasons are caused by Earth's tilted axis (23.5° tilt). As Earth orbits, different hemispheres receive more/less direct sunlight. Tides are caused by the Moon's gravity pulling on Earth's oceans. The Moon's gravity pulls ocean water toward it, creating high tides. On the opposite side, there's also a high tide due to inertia.",
    r4_fact1: "High tides occur about twice per day as Earth rotates beneath the Moon's pull",
    r4_q: "What causes the seasons?", r4_a: "Earth's tilted axis", r4_b: "Earth's distance from the Sun", r4_c: "Solar flares", r4_d: "The Moon's gravity",
    r5_q1_q: "How many planets orbit the Sun in our solar system?", r5_q1_a: "8", r5_q1_b: "9", r5_q1_c: "10", r5_q1_d: "12",
    r5_q2_q: "What causes tides in our oceans?", r5_q2_a: "The Moon's gravity", r5_q2_b: "The Sun's heat", r5_q2_c: "Earth's rotation", r5_q2_d: "Wind patterns",
  },
  de: {
    r1_title: "Universelle Gravitation", r1_text: "Jedes Objekt mit Masse zieht jedes andere Objekt mit Masse an. Dies ist Schwerkraft. Die Gravitationskraft folgt der Gleichung: F = G × m₁ × m₂ / r². Die Kraft ist stärker, wenn Massen größer sind und wenn Objekte näher beieinander sind (kleinere Entfernung = größere Kraft).",
    r1_fact1: "Selbst du ziehst alles um dich mit Schwerkraft an, aber die Kraft ist unglaublich schwach",
    r1_q: "Gravitationskraft nimmt zu, wenn...", r1_a: "Objekte näher beieinander sind", r1_b: "Objekte schneller bewegen", r1_c: "Temperatur steigt", r1_d: "Licht heller wird",
    r2_title: "Das Sonnensystem", r2_text: "Unser Sonnensystem hat die Sonne im Zentrum. Um die Sonne kreisen 8 Planeten: Merkur, Venus, Erde, Mars (felsige innere Planeten), dann Jupiter, Saturn, Uranus, Neptun (Gasriesen). Zwischen Mars und Jupiter ist der Asteroidengürtel mit Tausenden von felsigen Objekten. Der Mond umkreist die Erde.",
    r2_fact1: "Jupiter ist 11-mal breiter als die Erde und würde 1.000 Erden passen",
    r2_q: "Der größte Planet unseres Sonnensystems ist...", r2_a: "Jupiter", r2_b: "Saturn", r2_c: "Erde", r2_d: "Neptun",
    r3_title: "Orbitalbewegung", r3_text: "Planeten kreisen um die Sonne, weil die Schwerkraft sie anzieht. Schwerkraft bietet die Zentripetalkraft, die Planeten in kreisförmigen oder elliptischen Bahnen hält. Planeten näher an der Sonne kreisen schneller, weil sie stärkere Schwerkraft erfahren. Die Erde umkreist die Sonne alle 365 Tage. Der Mond umkreist die Erde alle 27,3 Tage.",
    r3_fact1: "Pluto wurde 2006 zu einem Zwergplaneten reklassifiziert, war aber 76 Jahre lang Planet #9",
    r3_q: "Was hält Planeten in der Umlaufbahn um die Sonne?", r3_a: "Schwerkraft", r3_b: "Magnetismus", r3_c: "Reibung", r3_d: "Das Licht der Sonne",
    r4_title: "Jahreszeiten & Gezeiten", r4_text: "Jahreszeiten werden durch Erdachseneigung verursacht (23,5° Neigung). Wenn die Erde umkreist, erhalten verschiedene Hemisphären mehr/weniger direkte Sonneneinstrahlung. Gezeiten werden durch die Mondgravitation verursacht, die Erdozeane zieht. Die Mondgravitation zieht Meereswasser an, was Flut erzeugt. Auf der anderen Seite gibt es auch Hochwasser durch Trägheit.",
    r4_fact1: "Hochwasser tritt etwa zweimal täglich auf, wenn die Erde unter dem Mond rotiert",
    r4_q: "Was verursacht die Jahreszeiten?", r4_a: "Erdachseneigung", r4_b: "Entfernung der Erde von der Sonne", r4_c: "Sonneneruptionen", r4_d: "Mondgravitation",
    r5_q1_q: "Wie viele Planeten kreisen in unserem Sonnensystem um die Sonne?", r5_q1_a: "8", r5_q1_b: "9", r5_q1_c: "10", r5_q1_d: "12",
    r5_q2_q: "Was verursacht Gezeiten in unseren Ozeanen?", r5_q2_a: "Mondgravitation", r5_q2_b: "Sonnenwärme", r5_q2_c: "Erdrotation", r5_q2_d: "Windmuster",
  },
  hu: {
    r1_title: "Univerzális gravitáció", r1_text: "Minden tömegű objektum vonzza az összes többi tömegű objektumot. Ez a gravitáció. A gravitációs erő követi az egyenletet: F = G × m₁ × m₂ / r². Az erő erősebb, ha a tömegek nagyobbak és ha az objektumok közelebb vannak egymáshoz (kisebb távolság = nagyobb erő).",
    r1_fact1: "Még te is vonzod körülötted minden gravitációval, de az erő hihetetlen apró",
    r1_q: "A gravitációs erő növekszik, amikor...", r1_a: "Az objektumok közelebb vannak egymáshoz", r1_b: "Az objektumok gyorsabban mozognak", r1_c: "A hőmérséklet emelkedik", r1_d: "A fény világosabb",
    r2_title: "A Naprendszer", r2_text: "Naprendszerünk középpontjában a Nap van. A Nap körül 8 bolygó kering: Merkúr, Vénusz, Föld, Mars (sziklás belső bolygók), majd Jupiter, Szaturnusz, Uránusz, Neptunusz (gázóriások). Mars és Jupiter között van az aszterida öv több ezer sziklás testtel. A Hold a Föld körül kering.",
    r2_fact1: "Jupiter 11-szer szélesebb, mint a Föld, és 1000 Föld férne bele",
    r2_q: "Naprendszerünk legnagyobb bolygója...", r2_a: "Jupiter", r2_b: "Szaturnusz", r2_c: "Föld", r2_d: "Neptunusz",
    r3_title: "Pályamozgás", r3_text: "A bolygók a Nap körül keringnek, mert a gravitáció vonzza őket. A gravitáció biztosítja a centripetális erőt, amely a bolygókat körkörös vagy elliptikus pályán tartja. A Naphoz közelebb eső bolygók gyorsabban keringenek, mert erősebb gravitáció hat rájuk. A Föld 365 nap alatt kering a Nap körül. A Hold 27,3 nap alatt kering a Föld körül.",
    r3_fact1: "Plutót 2006-ban átsorolták egy törpebolygónak, de 76 évig volt a #9-es bolygó",
    r3_q: "Mi tartja a bolygókat pályán a Nap körül?", r3_a: "Gravitáció", r3_b: "Mágnesesség", r3_c: "Súrlódás", r3_d: "A Nap fénye",
    r4_title: "Évszakok és dagályok", r4_text: "Az évszakokat a Föld tengely ferdesége okozza (23,5°-os dőlés). Ahogy a Föld kering, a különböző féltekék több/kevesebb közvetlen napfényt kapnak. A dagályokat a Hold gravitációja okozza, amely az óceánokat húzza. A Hold gravitációja húzza az óceán vizet, ami dagályt hoz létre. Az ellenkező oldalon apály van a tehetetlenség miatt.",
    r4_fact1: "Dagály körülbelül naponta kétszer fordul elő, ahogy a Föld a Hold alatt forog",
    r4_q: "Mi okozza az évszakokat?", r4_a: "A Föld tengely ferdesége", r4_b: "A Föld távolsága a Naptól", r4_c: "Napkitörések", r4_d: "A Hold gravitációja",
    r5_q1_q: "Hány bolygó kering a Nap körül naprendszerünkben?", r5_q1_a: "8", r5_q1_b: "9", r5_q1_c: "10", r5_q1_d: "12",
    r5_q2_q: "Mi okozza az óceáni dagályokat?", r5_q2_a: "A Hold gravitációja", r5_q2_b: "A Nap hője", r5_q2_c: "A Föld forgása", r5_q2_d: "Szélmintázatok",
  },
  ro: {
    r1_title: "Gravitație universală", r1_text: "Fiecare obiect cu masă atrage fiecare alt obiect cu masă. Aceasta este gravitația. Forța gravitațională urmează ecuația: F = G × m₁ × m₂ / r². Forța este mai puternică atunci când masele sunt mai mari și când obiectele sunt mai apropiate (distanță mai mică = forță mai mare).",
    r1_fact1: "Chiar tu atrag totul în jurul tău cu gravitație, dar forța este incredibil de mică",
    r1_q: "Forța gravitațională crește când...", r1_a: "Obiectele sunt mai apropiate", r1_b: "Obiectele se mișcă mai repede", r1_c: "Temperatura crește", r1_d: "Lumina este mai strălucitoare",
    r2_title: "Sistemul solar", r2_text: "Sistemul nostru solar are Soarele în centru. Orbitând în jurul Soarelui sunt 8 planete: Mercur, Venus, Pământ, Marte (planete stâncoase interioare), apoi Jupiter, Saturn, Uranus, Neptun (giganți de gaz). Între Marte și Jupiter se află centura de asteroizi cu mii de corpuri stâncoase. Luna orbitează Pământul.",
    r2_fact1: "Jupiter este de 11 ori mai lat decât Pământul și ar putea încăpea 1.000 de Pământuri în interior",
    r2_q: "Cea mai mare planetă din sistemul nostru solar este...", r2_a: "Jupiter", r2_b: "Saturn", r2_c: "Pământ", r2_d: "Neptun",
    r3_title: "Mișcarea orbitală", r3_text: "Planetele orbitează în jurul Soarelui deoarece gravitația le atrage. Gravitația furnizează forța centripetă care menține planetele în căi circulare sau eliptice. Planetele mai apropiate de Soare orbitează mai repede deoarece experimentează o gravitație mai puternică. Pământul orbitează Soarele la fiecare 365 de zile. Luna orbitează Pământul la fiecare 27,3 zile.",
    r3_fact1: "Pluton a fost reclasificat ca planetă pitică în 2006, dar a fost planeta #9 timp de 76 de ani",
    r3_q: "Ce ține planetele în orbita în jurul Soarelui?", r3_a: "Gravitația", r3_b: "Magnetismul", r3_c: "Fricțiunea", r3_d: "Lumina Soarelui",
    r4_title: "Sezoane și maree", r4_text: "Anotimpurile sunt cauzate de înclinarea axei Pământului (înclinație de 23,5°). Pe măsură ce Pământul orbitează, diferite emisfere primesc mai mult/mai puțin lumină solară directă. Mareele sunt cauzate de gravitația Lunii care trage oceanele Pământului. Gravitația Lunii trage apa oceanului spre ea, creând maree înalte. Pe partea opusă, există și o maree înaltă din cauza inerției.",
    r4_fact1: "Mareele înalte apar de aproximativ două ori pe zi pe măsură ce Pământul se rotește sub Luna",
    r4_q: "Ce provoacă anotimpurile?", r4_a: "Înclinarea axei Pământului", r4_b: "Distanța Pământului de la Soare", r4_c: "Erupțiile solare", r4_d: "Gravitația Lunii",
    r5_q1_q: "Câte planete orbitează Soarele în sistemul nostru solar?", r5_q1_a: "8", r5_q1_b: "9", r5_q1_c: "10", r5_q1_d: "12",
    r5_q2_q: "Ce provoacă mareele din oceanele noastre?", r5_q2_a: "Gravitația Lunii", r5_q2_b: "Căldura Soarelui", r5_q2_c: "Rotația Pământului", r5_q2_d: "Tiparele vântului",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌍</text></svg>
);

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: () => <SimpleSvg />, bulletKeys: ["r1_fact1"],
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" }] },
    { type: "mcq", infoTitle: "r2_title", infoText: "r2_text", svg: () => <SimpleSvg />, bulletKeys: ["r2_fact1"],
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_a" }] },
    { type: "mcq", infoTitle: "r3_title", infoText: "r3_text", svg: () => <SimpleSvg />, bulletKeys: ["r3_fact1"],
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_a" }] },
    { type: "mcq", infoTitle: "r4_title", infoText: "r4_text", svg: () => <SimpleSvg />, bulletKeys: ["r4_fact1"],
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_a" }] },
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: () => <SimpleSvg />,
      questions: [
        { question: "r5_q1_q", choices: ["r5_q1_a", "r5_q1_b", "r5_q1_c", "r5_q1_d"], answer: "r5_q1_a" },
        { question: "r5_q2_q", choices: ["r5_q2_a", "r5_q2_b", "r5_q2_c", "r5_q2_d"], answer: "r5_q2_a" },
      ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }

export default function SpaceExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
