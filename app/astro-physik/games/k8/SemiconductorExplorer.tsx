"use client";
// SemiconductorExplorer — Semiconductors (Halbleiter) Klasse 8
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What are Semiconductors?", r1_text: "Semiconductors are materials that conduct electricity better than insulators but not as well as conductors. Silicon and germanium are the most common. Their conductivity can be precisely controlled by adding impurities (doping), making them essential for electronics.",
    r1_fact1: "Silicon is the second most abundant element on Earth and forms the basis of modern electronics",
    r1_q: "Silicon is a...", r1_a: "Semiconductor", r1_b: "Conductor", r1_c: "Insulator", r1_d: "Magnetic material",
    r2_title: "Diodes", r2_text: "A diode is made from a semiconductor junction (p-type and n-type). It allows electric current to flow in one direction only. The positive terminal is the anode; the negative is the cathode. Diodes are used to convert AC to DC and to protect circuits.",
    r2_fact1: "A forward-biased diode conducts; a reverse-biased diode blocks current almost completely",
    r2_q: "A diode allows current in...", r2_a: "One direction only", r2_b: "Both directions equally", r2_c: "No direction (always blocks)", r2_d: "All directions randomly",
    r3_title: "Light Emitting Diodes (LEDs)", r3_text: "LEDs are special diodes that emit light when current flows through them. Different semiconductors emit different colors: red (aluminum gallium arsenide), green (gallium phosphide), blue (gallium nitride). LEDs are extremely efficient, converting 20–40% of energy to light versus only 5% for incandescent bulbs.",
    r3_fact1: "LEDs are used in displays, traffic lights, flashlights, and decorative lighting worldwide",
    r3_q: "LED stands for...", r3_a: "Light Emitting Diode", r3_b: "Low Energy Luminescence", r3_c: "Light Electric Device", r3_d: "Luminous Electron Discharge",
    r4_title: "Transistors", r4_text: "Transistors are semiconductor devices with three terminals: base, collector, and emitter (for BJT). They act as electronic switches and amplifiers. A tiny current at the base controls a large current through the collector-emitter path. Billions of transistors are packed into modern computer chips.",
    r4_fact1: "Modern processors contain billions of transistors smaller than a human cell",
    r4_q: "Transistors are used as...", r4_a: "Switches and amplifiers", r4_b: "Only light sources", r4_c: "Only power supplies", r4_d: "Heat generators",
    r5_q1_q: "Which material is most commonly used in semiconductors?", r5_q1_a: "Silicon", r5_q1_b: "Copper", r5_q1_c: "Aluminum", r5_q1_d: "Gold",
    r5_q2_q: "What is the main advantage of an LED over an incandescent bulb?", r5_q2_a: "Much higher energy efficiency", r5_q2_b: "Produces more heat", r5_q2_c: "Lasts only a short time", r5_q2_d: "Cannot be dimmed",
  },
  de: {
    r1_title: "Was sind Halbleiter?", r1_text: "Halbleiter sind Materialien, die Elektrizität besser leiten als Isolatoren, aber nicht so gut wie Leiter. Silizium und Germanium sind am häufigsten. Ihre Leitfähigkeit kann präzise durch Zugabe von Verunreinigungen (Dotierung) gesteuert werden, was sie für die Elektronik unverzichtbar macht.",
    r1_fact1: "Silizium ist das zweithäufigste Element auf der Erde und bildet die Grundlage moderner Elektronik",
    r1_q: "Silizium ist ein...", r1_a: "Halbleiter", r1_b: "Leiter", r1_c: "Isolator", r1_d: "Magnetisches Material",
    r2_title: "Dioden", r2_text: "Eine Diode wird aus einem Halbleiterkontakt (p-Typ und n-Typ) hergestellt. Sie ermöglicht nur in eine Richtung Stromfluss. Das positive Terminal ist die Anode; das negative die Kathode. Dioden werden verwendet, um AC in DC umzuwandeln und Schaltkreise zu schützen.",
    r2_fact1: "Eine vorwärts vorgespannte Diode leitet; eine rückwärts vorgespannte Diode blockiert den Strom fast vollständig",
    r2_q: "Eine Diode lässt Strom zu in...", r2_a: "Nur eine Richtung", r2_b: "Beide Richtungen gleich", r2_c: "Keine Richtung (blockiert immer)", r2_d: "Alle Richtungen zufällig",
    r3_title: "Lichtemittierende Dioden (LEDs)", r3_text: "LEDs sind spezielle Dioden, die Licht ausstrahlen, wenn Strom durch sie fließt. Verschiedene Halbleiter emittieren verschiedene Farben: Rot (Galliumarsenid), Grün (Galliumphosphid), Blau (Galliumnitrid). LEDs sind äußerst effizient und wandeln 20–40% der Energie in Licht um, gegenüber nur 5% bei Glühbirnen.",
    r3_fact1: "LEDs werden in Displays, Ampeln, Taschenlampen und Dekorationsbeleuchtung weltweit verwendet",
    r3_q: "LED steht für...", r3_a: "Lichtemittierende Diode", r3_b: "Niedrige Energielumineszenz", r3_c: "Lichtelektrisches Gerät", r3_d: "Leuchtende Elektronenentladung",
    r4_title: "Transistoren", r4_text: "Transistoren sind Halbleiterbauelemente mit drei Anschlüssen: Basis, Kollektor und Emitter (für BJT). Sie fungieren als elektronische Schalter und Verstärker. Ein winziger Strom an der Basis steuert einen großen Strom durch den Kollektor-Emitter-Pfad. Milliarden von Transistoren sind in modernen Computerchips eingebaut.",
    r4_fact1: "Moderne Prozessoren enthalten Milliarden von Transistoren, die kleiner als eine menschliche Zelle sind",
    r4_q: "Transistoren werden verwendet als...", r4_a: "Schalter und Verstärker", r4_b: "Nur Lichtquellen", r4_c: "Nur Stromversorgungen", r4_d: "Wärmegeneratoren",
    r5_q1_q: "Welches Material wird am häufigsten in Halbleitern verwendet?", r5_q1_a: "Silizium", r5_q1_b: "Kupfer", r5_q1_c: "Aluminium", r5_q1_d: "Gold",
    r5_q2_q: "Welcher ist der Hauptvorteil einer LED gegenüber einer Glühbirne?", r5_q2_a: "Viel höhere Energieeffizienz", r5_q2_b: "Erzeugt mehr Wärme", r5_q2_c: "Hält nur kurze Zeit", r5_q2_d: "Kann nicht gedimmt werden",
  },
  hu: {
    r1_title: "Mik a félévezetők?", r1_text: "A félévezetők olyan anyagok, amelyek jobban vezetik az elektromosságot, mint az isolátorok, de nem olyan jól, mint a vezetők. A szilícium és a germánium a legáltalánosabbak. Vezetőképességük pontosan szabályozható szennyeződések (adalékolás) hozzáadásával, amely nélkülözhetetlenné teszi azokat az elektronikában.",
    r1_fact1: "A szilícium a Föld második leggyakoribb eleme, és a modern elektronika alapja",
    r1_q: "A szilícium egy...", r1_a: "Félvezető", r1_b: "Vezető", r1_c: "Isolátor", r1_d: "Mágneses anyag",
    r2_title: "Diódák", r2_text: "A diódát egy félvezető kontaktusból (p-típus és n-típus) készítik. Csak egy irányba engedélyezi az elektromos áram áramlását. A pozitív terminánt ánódnak, a negatívat katódnak hívják. A diódákat az AC-ből DC-be való átalakításra és az áramkörök védelméhez használják.",
    r2_fact1: "Az előre feszített diódavezetés; a fordított feszítettség szinte teljesen blokkolja az áramot",
    r2_q: "A diódavezetés lehetővé teszi az áramot...", r2_a: "Csak egy irányba", r2_b: "Mindkét irányban egyenlően", r2_c: "Nincs irány (mindig blokkolja)", r2_d: "Minden irányban véletlenszerűen",
    r3_title: "Fénykibocsátó diódák (LED-ek)", r3_text: "Az LED-ek speciális diódák, amelyek fényt bocsátanak ki, amikor áram folyik rajtuk. Különféle félvezetők különböző színeket bocsátanak ki: piros (gallium-arzenid), zöld (gallium-foszfid), kék (gallium-nitrid). Az LED-ek rendkívül hatékonyak, az energia 20–40%-át fénnyé alakítják az izzólámpáknál csak 5%-ra.",
    r3_fact1: "Az LED-eket világszerte kijelzőkben, közlekedési lámpákban, zseblámpákban és dekoratív megvilágításban használják",
    r3_q: "LED az alábbiak rövidítése...", r3_a: "Fénykibocsátó diódát", r3_b: "Alacsony energialumineszenciát", r3_c: "Fényelektromos eszközt", r3_d: "Fényes elektronok kibocsátását",
    r4_title: "Tranzisztorok", r4_text: "A tranzisztorok olyan félvezető eszközök, amelyeknek három termináljai vannak: bázis, kollektor és emitter (BJT-nél). Elektronikus kapcsolóként és erősítőként működnek. A bázison lévő apró áram a kollektor-emitter pályán keresztül nagyobb áramot vezérel. Milliárd tranzisztor van beépítve a modern számítógépes chipekbe.",
    r4_fact1: "A modern processzorok milliárd tranzisztort tartalmaznak, amelyek kisebbek, mint az emberi sejt",
    r4_q: "A tranzisztorokat a következőkre használják...", r4_a: "Kapcsolók és erősítők", r4_b: "Csak fényforrások", r4_c: "Csak tápegységek", r4_d: "Hőfejlesztők",
    r5_q1_q: "Melyik anyag a leggyakoribb a félvezetőkben?", r5_q1_a: "Szilícium", r5_q1_b: "Réz", r5_q1_c: "Alumínium", r5_q1_d: "Arany",
    r5_q2_q: "Melyik az LED fő előnye az izzólámpához képest?", r5_q2_a: "Sokkal nagyobb energiahatékonyság", r5_q2_b: "Több hőt termel", r5_q2_c: "Csak rövid ideig tart", r5_q2_d: "Nem lehet sotengetni",
  },
  ro: {
    r1_title: "Ce sunt semiconductorii?", r1_text: "Semiconductorii sunt materiale care conduc electricitatea mai bine decât izolatorii, dar nu la fel de bine ca și conductorii. Siliciul și germaniul sunt cele mai comune. Conductivitatea lor poate fi controlată cu precizie prin adăugarea impurităților (dopare), ceea ce le face esențiale pentru electronică.",
    r1_fact1: "Siliciul este al doilea element cel mai abundent de pe Pământ și formează baza electronicii moderne",
    r1_q: "Siliciul este un...", r1_a: "Semiconductor", r1_b: "Conductor", r1_c: "Izolator", r1_d: "Material magnetic",
    r2_title: "Diode", r2_text: "O diodă este fabricată dintr-o joncțiune semiconductoare (tip p și tip n). Permite fluxului de curent electric să curgă doar într-o direcție. Terminalul pozitiv este anodul; negativul este catodul. Diodele sunt folosite pentru a converti AC în DC și pentru a proteja circuitele.",
    r2_fact1: "O diodă polarizată în avans conduce; o diodă polarizată în sens invers blochează curentul aproape complet",
    r2_q: "O diodă permite curentul în...", r2_a: "O singură direcție", r2_b: "Ambele direcții în mod egal", r2_c: "Fără direcție (întotdeauna blochează)", r2_d: "Toate direcțiile aleatoriu",
    r3_title: "Diode emițătoare de lumină (LED-uri)", r3_text: "LED-urile sunt diode speciale care emit lumină atunci când curentul curge prin ele. Semiconductori diferiți emit culori diferite: roșu (arzenură de galiu), verde (fosfură de galiu), albastru (nitridă de galiu). LED-urile sunt extrem de eficiente, convertind 20–40% din energie în lumină comparativ cu doar 5% pentru becuri incandescente.",
    r3_fact1: "LED-urile sunt folosite în afișaje, semafoare, lanterne și iluminat decorativ în întreaga lume",
    r3_q: "LED înseamnă...", r3_a: "Diodă emițătoare de lumină", r3_b: "Luminescență cu energie scăzută", r3_c: "Dispozitiv electroluminos", r3_d: "Descărcare de electroni luminoasă",
    r4_title: "Tranzistori", r4_text: "Tranzistorii sunt dispozitive semiconductoare cu trei terminale: bază, colector și emitor (pentru BJT). Funcționează ca întrerupătoare și amplificatoare electronice. Un curent mic la bază controlează un curent mare prin calea colector-emitor. Miliarde de tranzistori sunt îngrămădiți în cipurile computerelor moderne.",
    r4_fact1: "Procesoarele moderne conțin miliarde de tranzistori mai mici decât o celulă umană",
    r4_q: "Tranzistorii sunt folosiți ca...", r4_a: "Întrerupătoare și amplificatoare", r4_b: "Doar surse de lumină", r4_c: "Doar surse de alimentare", r4_d: "Generatori de căldură",
    r5_q1_q: "Ce material este cel mai frecvent utilizat în semiconductori?", r5_q1_a: "Siliciu", r5_q1_b: "Cupru", r5_q1_c: "Aluminiu", r5_q1_d: "Aur",
    r5_q2_q: "Care este avantajul principal al unui LED comparativ cu o bec incandescent?", r5_q2_a: "Eficiență energetică mult mai mare", r5_q2_b: "Produce mai mult căldură", r5_q2_c: "Durează doar puțin timp", r5_q2_d: "Nu poate fi stins",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🔬</text></svg>
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

export default function SemiconductorExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
