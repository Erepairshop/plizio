"use client";
// WavesExplorer — Waves & Sound, Ultrasound, Infrasound (Wellen und Schall) Grade 6

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What Are Waves?", r1_text: "Waves transfer energy without moving matter. Light waves, water waves, and sound waves are all examples. Wave properties: wavelength (distance between peaks), frequency (how often peaks occur), amplitude (height of peaks).",
    r1_fact1: "Water waves transfer energy to distant shores without moving the water itself",
    r1_q: "What do waves transfer?", r1_a: "Energy without moving matter", r1_b: "Matter across distances", r1_c: "Heat only", r1_d: "Light particles",
    r2_title: "Sound Properties", r2_text: "Pitch depends on frequency—higher frequency = higher pitch. Loudness depends on amplitude—bigger waves = louder sound. Timbre is the unique sound quality of an instrument. Different instruments sound different even at same pitch!",
    r2_fact1: "A violin and flute can play the same note, but they sound different because of timbre",
    r2_q: "What determines the pitch of a sound?", r2_a: "Frequency", r2_b: "Amplitude", r2_c: "Color", r2_d: "Temperature",
    r3_title: "Ultrasound", r3_text: "Sound above 20,000 Hz (humans can't hear). Used in medical imaging (ultrasounds) to see inside the body. Also used in cleaning machines and animal repellents. Bats and dolphins use ultrasound for navigation!",
    r3_fact1: "Ultrasound is used in hospitals to see babies before they are born",
    r3_q: "What is ultrasound used for in hospitals?", r3_a: "Medical imaging (seeing inside body)", r3_b: "Heating the body", r3_c: "Treating broken bones", r3_d: "Hearing tests",
    r4_title: "Infrasound", r4_text: "Sound below 20 Hz (humans can feel but not hear). Elephants use infrasound to communicate over long distances. Earthquakes produce infrasound. Humans can feel infrasound as vibrations, especially in the chest.",
    r4_fact1: "Elephants communicate using infrasound that can travel miles through the ground",
    r4_q: "What is special about infrasound?", r4_a: "Humans can feel but not hear it", r4_b: "Animals hate it", r4_c: "It travels very slowly", r4_d: "It is used only in hospitals",
    r5_q1_q: "What is the difference between pitch and loudness?", r5_q1_a: "Pitch is frequency, loudness is amplitude", r5_q1_b: "They are the same thing", r5_q1_c: "Pitch depends on color", r5_q1_d: "Loudness is temperature",
    r5_q2_q: "Which animal uses ultrasound for navigation?", r5_q2_a: "Bats", r5_q2_b: "Cats", r5_q2_c: "Dogs", r5_q2_d: "Birds",
  },
  de: {
    r1_title: "Was sind Wellen?", r1_text: "Wellen übertragen Energie ohne Materie zu bewegen. Lichtwellen, Wasserwellen und Schallwellen sind Beispiele. Welleneigenschaften: Wellenlänge (Abstand zwischen Spitzen), Frequenz (wie oft Spitzen auftreten), Amplitude (Höhe der Spitzen).",
    r1_fact1: "Wasserwellen übertragen Energie zu fernen Küsten, ohne das Wasser selbst zu bewegen",
    r1_q: "Was übertragen Wellen?", r1_a: "Energie ohne Materie zu bewegen", r1_b: "Materie über Distanzen", r1_c: "Nur Wärme", r1_d: "Lichtpartikel",
    r2_title: "Schalleigenschaften", r2_text: "Tonhöhe hängt von Frequenz ab—höhere Frequenz = höhere Tonhöhe. Lautstärke hängt von Amplitude ab—größere Wellen = lauterer Schall. Timbre ist die einzigartige Klangqualität eines Instruments. Verschiedene Instrumente klingen unterschiedlich!",
    r2_fact1: "Eine Violine und eine Flöte können die gleiche Note spielen, aber klingen unterschiedlich",
    r2_q: "Was bestimmt die Tonhöhe eines Schalls?", r2_a: "Frequenz", r2_b: "Amplitude", r2_c: "Farbe", r2_d: "Temperatur",
    r3_title: "Ultraschall", r3_text: "Schall über 20.000 Hz (Menschen können nicht hören). Verwendet in medizinischen Bildgebungen (Ultraschall) um ins Körperinnere zu sehen. Auch in Reinigungsmaschinen und Tierabwehrgeräten. Fledermäuse und Delfine nutzen Ultraschall zur Navigation!",
    r3_fact1: "Ultraschall wird in Krankenhäusern verwendet, um Babys vor der Geburt zu sehen",
    r3_q: "Wofür wird Ultraschall in Krankenhäusern verwendet?", r3_a: "Medizinische Bildgebung (ins Körperinnere schauen)", r3_b: "Den Körper erwärmen", r3_c: "Knochenbrüche behandeln", r3_d: "Hörtests",
    r4_title: "Infraschall", r4_text: "Schall unter 20 Hz (Menschen können fühlen aber nicht hören). Elefanten nutzen Infraschall um über große Entfernungen zu kommunizieren. Erdbeben produzieren Infraschall. Menschen können Infraschall als Vibrationen besonders in der Brust fühlen.",
    r4_fact1: "Elefanten kommunizieren mit Infraschall, der miles durch den Boden reisen kann",
    r4_q: "Was ist besonderes an Infraschall?", r4_a: "Menschen können es fühlen aber nicht hören", r4_b: "Tiere hassen es", r4_c: "Es reist sehr langsam", r4_d: "Es wird nur in Krankenhäusern verwendet",
    r5_q1_q: "Was ist der Unterschied zwischen Tonhöhe und Lautstärke?", r5_q1_a: "Tonhöhe ist Frequenz, Lautstärke ist Amplitude", r5_q1_b: "Sie sind das gleiche", r5_q1_c: "Tonhöhe hängt von Farbe ab", r5_q1_d: "Lautstärke ist Temperatur",
    r5_q2_q: "Welches Tier nutzt Ultraschall zur Navigation?", r5_q2_a: "Fledermäuse", r5_q2_b: "Katzen", r5_q2_c: "Hunde", r5_q2_d: "Vögel",
  },
  hu: {
    r1_title: "Mik azok a hullámok?", r1_text: "A hullámok energiát visznek anélkül, hogy mozgatnák az anyagot. A fény-, víz- és hanghullámok mindegyike példa. Hullámo tulajdonságai: hullámhossz (a csúcsok közötti távolság), frekvencia (milyen gyakran fordulnak elő csúcsok), amplitúdó (csúcsok magassága).",
    r1_fact1: "A vízhullámok energiát visznek távoli partokra anélkül, hogy magát a vizet mozgatnák",
    r1_q: "Mit visznek a hullámok?", r1_a: "Energiát anélkül, hogy anyagot mozgatnának", r1_b: "Anyagot távolságok felett", r1_c: "Csak hőt", r1_d: "Fényrészecskéket",
    r2_title: "Hangtulajdonságok", r2_text: "A magasság a frekvenciától függ—magasabb frekvencia = magasabb hang. A hangerő az amplitúdótól függ—nagyobb hullámok = hangosabb hang. A timbre az instrument egyedi hanggal. Különböző hangszerek másképpen szólnak!",
    r2_fact1: "Egy hegedű és egy fuvola ugyanazt a megjegyzést játszhat, de másképp szól",
    r2_q: "Mi határozza meg a hang magasságát?", r2_a: "Frekvencia", r2_b: "Amplitúdó", r2_c: "Szín", r2_d: "Hőmérséklet",
    r3_title: "Ultrahanghang", r3_text: "Hang 20 000 Hz felett (az emberek nem hallják). Orvosi képalkotásban (ultrahang) használják a test belsejébe látásához. Takarítógépekben és állat-riasztóban is használták. Denevérek és delfinek ultrahangot használnak a navigációhoz!",
    r3_fact1: "Az ultrahang a kórházakban használják a babákat születés előtt látni",
    r3_q: "Mire használnak ultrahangsotot a kórházakban?", r3_a: "Orvosi képalkotás (test belülről nézve)", r3_b: "A test melegítése", r3_c: "Csontok kezelése", r3_d: "Hallás tesztek",
    r4_title: "Infrahang", r4_text: "Hang 20 Hz alatt (az emberek érzik de nem hallják). Az elefántok infrahangsotot használnak a hosszú távolságú kommunikációhoz. A földrengések infrahangsotot termelnek. Az emberek az infrahangsotot rezgésként érzik, különösen a mellkason.",
    r4_fact1: "Az elefántok infrahangsottal kommunikálnak, amely mérföldeket utazhat a talajon",
    r4_q: "Mi az különleges az infrahangsotban?", r4_a: "Az emberek érzik de nem hallják", r4_b: "Az állatok gyűlölik", r4_c: "Nagyon lassan utazik", r4_d: "Csak kórházakban használható",
    r5_q1_q: "Mi a különbség a magasság és a hangerő között?", r5_q1_a: "Magasság frekvencia, hangerő amplitúdó", r5_q1_b: "Ugyanaz", r5_q1_c: "A magasság szín függő", r5_q1_d: "A hangerő hőmérséklet",
    r5_q2_q: "Melyik állat használ ultrahangsotot a navigációhoz?", r5_q2_a: "Denevérek", r5_q2_b: "Macskák", r5_q2_c: "Kutyák", r5_q2_d: "Madarak",
  },
  ro: {
    r1_title: "Ce sunt undele?", r1_text: "Undele transmit energia fără a muta materia. Undele de lumină, apă și sunet sunt exemple. Proprietățile undei: lungimea de undă (distanța dintre vârfuri), frecvență (cât de des apar vârfuri), amplitudine (înălțimea vârfurilor).",
    r1_fact1: "Undele apei transmit energie la țărmuri îndepărtate fără a muta apa în sine",
    r1_q: "Ce transmit undele?", r1_a: "Energie fără a muta materia", r1_b: "Materie pe distanțe", r1_c: "Doar căldură", r1_d: "Particule de lumină",
    r2_title: "Proprietăți sunet", r2_text: "Tonul depinde de frecvență—frecvență mai înaltă = ton mai înalt. Volumul depinde de amplitudine—unde mai mari = sunet mai tare. Timbrul este calitatea unică a sunetului unui instrument. Instrumente diferite sună diferit!",
    r2_fact1: "Un vioară și o fluieră pot cânta aceeași notă dar sună diferit",
    r2_q: "Ce determină tonul unui sunet?", r2_a: "Frecvență", r2_b: "Amplitudine", r2_c: "Culoare", r2_d: "Temperatură",
    r3_title: "Ultrasunete", r3_text: "Sunet peste 20.000 Hz (oamenii nu pot auzi). Utilizat în imagistica medicală (ecografii) pentru a vedea în interiorul corpului. Folosit și în mașini de curățat și aparate anti-animal. Lilieci și delfinii folosesc ultrasunete pentru navigație!",
    r3_fact1: "Ultrasunete sunt folosite în spitale pentru a vedea bebelușii înainte de naștere",
    r3_q: "Pentru ce sunt utilizate ultrasunete în spitale?", r3_a: "Imagistica medicală (vedere în corp)", r3_b: "Încălzire corp", r3_c: "Tratament fracturi", r3_d: "Teste auz",
    r4_title: "Infrasunete", r4_text: "Sunet sub 20 Hz (oamenii pot simți dar nu aud). Elefanții folosesc infrasunete pentru a comunica pe distanțe lungi. Cutremurele produc infrasunete. Oamenii pot simți infrasunete ca vibrații, mai ales în piept.",
    r4_fact1: "Elefanții comunică folosind infrasunete care pot călători mile prin pământ",
    r4_q: "Ce este special la infrasunete?", r4_a: "Oamenii pot simți dar nu aud", r4_b: "Animalele le urăsc", r4_c: "Calătorește foarte lent", r4_d: "Utilizate doar în spitale",
    r5_q1_q: "Care este diferența dintre ton și volum?", r5_q1_a: "Tonul este frecvență, volumul este amplitudine", r5_q1_b: "Sunt același lucru", r5_q1_c: "Tonul depinde de culoare", r5_q1_d: "Volumul este temperatură",
    r5_q2_q: "Care animal folosește ultrasunete pentru navigație?", r5_q2_a: "Lilieci", r5_q2_b: "Pisici", r5_q2_c: "Câini", r5_q2_d: "Păsări",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌊</text></svg>
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

export default function WavesExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
