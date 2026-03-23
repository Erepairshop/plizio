"use client";
// WavesK7Explorer — Wave Equation, EM Spectrum, Interference (Klasse 7)
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Wave Equation", r1_text: "All waves follow the equation: v = f × λ (speed = frequency × wavelength). Frequency is how many waves pass a point per second (measured in Hz). Wavelength is the distance between two wave crests. All electromagnetic waves travel at the speed of light: c = 3×10⁸ m/s.",
    r1_fact1: "Radio waves, light, and X-rays all travel at the same speed (light speed)",
    r1_q: "If frequency is 500 Hz and wavelength is 2 m, the wave speed is...", r1_a: "1000 m/s", r1_b: "250 m/s", r1_c: "1 m/s", r1_d: "500 m/s",
    r2_title: "Electromagnetic Spectrum", r2_text: "The EM spectrum is the range of all EM waves: radio waves (longest wavelength), microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays (shortest wavelength). All travel at speed of light. Longer wavelengths = lower frequency. Shorter wavelengths = higher frequency.",
    r2_fact1: "Visible light is only a tiny fraction of the entire EM spectrum",
    r2_q: "Which EM wave has the longest wavelength?", r2_a: "Radio waves", r2_b: "Visible light", r2_c: "X-rays", r2_d: "Gamma rays",
    r3_title: "Infrared & Ultraviolet", r3_text: "Infrared (IR) radiation is below the visible spectrum. It is heat radiation—thermal cameras detect it. UV radiation is above the visible spectrum. UV causes sunburn and skin cancer. UV also helps plants grow and our bodies make vitamin D. UV is used to sterilize medical equipment.",
    r3_fact1: "The sun's UV radiation is stronger at high altitudes (less atmosphere to filter it)",
    r3_q: "Which EM radiation causes sunburn?", r3_a: "Ultraviolet (UV)", r3_b: "Infrared (IR)", r3_c: "Microwave", r3_d: "Visible light",
    r4_title: "Wave Interference", r4_text: "When two waves meet, they interfere. Constructive interference: wave crests meet crests = the waves add up, making a bigger wave. Destructive interference: crests meet troughs = waves cancel out, making smaller or zero amplitude. This creates interference patterns (stripes of bright and dark).",
    r4_fact1: "Noise-canceling headphones use destructive interference to block sound",
    r4_q: "When two wave crests meet, what happens?", r4_a: "Constructive interference (bigger wave)", r4_b: "Destructive interference (waves cancel)", r4_c: "The waves disappear", r4_d: "A new color forms",
    r5_q1_q: "What is wavelength?", r5_q1_a: "Distance between two wave crests", r5_q1_b: "How fast the wave travels", r5_q1_c: "How tall the wave is", r5_q1_d: "The color of the wave",
    r5_q2_q: "Why is visible light such a small part of the EM spectrum?", r5_q2_a: "Our eyes can only detect a narrow range", r5_q2_b: "Visible light is rare in space", r5_q2_c: "Radio waves are stronger", r5_q2_d: "X-rays block visible light",
  },
  de: {
    r1_title: "Wellengleichung", r1_text: "Alle Wellen folgen der Gleichung: v = f × λ (Geschwindigkeit = Frequenz × Wellenlänge). Frequenz ist die Anzahl der Wellen, die einen Punkt pro Sekunde passieren (in Hz gemessen). Wellenlänge ist der Abstand zwischen zwei Wellenkämmen. Alle elektromagnetischen Wellen reisen mit Lichtgeschwindigkeit: c = 3×10⁸ m/s.",
    r1_fact1: "Radiowellen, Licht und Röntgenstrahlen reisen alle mit der gleichen Geschwindigkeit",
    r1_q: "Wenn Frequenz 500 Hz und Wellenlänge 2 m sind, ist die Wellengeschwindigkeit...", r1_a: "1000 m/s", r1_b: "250 m/s", r1_c: "1 m/s", r1_d: "500 m/s",
    r2_title: "Elektromagnetisches Spektrum", r2_text: "Das EM-Spektrum ist der Bereich aller EM-Wellen: Radiowellen (längste Wellenlänge), Mikrowellen, Infrarot, sichtbares Licht, Ultraviolett, Röntgenstrahlen und Gammastrahlen (kürzeste Wellenlänge). Alle reisen mit Lichtgeschwindigkeit. Längere Wellenlängen = niedrigere Frequenz. Kürzere Wellenlängen = höhere Frequenz.",
    r2_fact1: "Sichtbares Licht ist nur ein winziger Bruchteil des gesamten EM-Spektrums",
    r2_q: "Welche EM-Welle hat die längste Wellenlänge?", r2_a: "Radiowellen", r2_b: "Sichtbares Licht", r2_c: "Röntgenstrahlen", r2_d: "Gammastrahlen",
    r3_title: "Infrarot und Ultraviolett", r3_text: "Infrarot (IR) ist Strahlung unterhalb des sichtbaren Spektrums. Es ist Wärmestrahlung—Wärmekameras erkennen sie. UV-Strahlung ist über dem sichtbaren Spektrum. UV verursacht Sonnenbrand und Hautkrebs. UV hilft auch Pflanzen wachsen und unsere Körper produzieren Vitamin D. UV wird verwendet, um medizinische Geräte zu sterilisieren.",
    r3_fact1: "Die UV-Strahlung der Sonne ist in großer Höhe stärker",
    r3_q: "Welche EM-Strahlung verursacht Sonnenbrand?", r3_a: "Ultraviolett (UV)", r3_b: "Infrarot (IR)", r3_c: "Mikrowelle", r3_d: "Sichtbares Licht",
    r4_title: "Welleninterferenz", r4_text: "Wenn zwei Wellen sich treffen, stören sie sich. Konstruktive Interferenz: Wellenkämme treffen Kamme = die Wellen addieren sich, bilden eine größere Welle. Destruktive Interferenz: Kamme treffen Täler = Wellen heben sich auf. Dies erzeugt Interferenzmuster (Streifen).",
    r4_fact1: "Lärmkopfhörer verwenden destruktive Interferenz, um Schall zu blockieren",
    r4_q: "Was passiert, wenn sich zwei Wellenkämme treffen?", r4_a: "Konstruktive Interferenz (größere Welle)", r4_b: "Destruktive Interferenz (Wellen heben sich auf)", r4_c: "Die Wellen verschwinden", r4_d: "Eine neue Farbe entsteht",
    r5_q1_q: "Was ist Wellenlänge?", r5_q1_a: "Abstand zwischen zwei Wellenkämmen", r5_q1_b: "Wie schnell die Welle reist", r5_q1_c: "Wie hoch die Welle ist", r5_q1_d: "Die Farbe der Welle",
    r5_q2_q: "Warum ist sichtbares Licht ein so kleiner Teil des EM-Spektrums?", r5_q2_a: "Unsere Augen können nur einen schmalen Bereich erkennen", r5_q2_b: "Sichtbares Licht ist selten im Weltraum", r5_q2_c: "Radiowellen sind stärker", r5_q2_d: "Röntgenstrahlen blockieren sichtbares Licht",
  },
  hu: {
    r1_title: "Hullámegyenlet", r1_text: "Minden hullám követi az egyenletet: v = f × λ (sebesség = frekvencia × hullámhossz). A frekvencia az egyes pontok másodpercenkénti hullámszmáma (Hz-ben mérve). A hullámhossz a két hullámdomb közötti távolság. Minden elektromágneses hullám a fénysebességgel utazik: c = 3×10⁸ m/s.",
    r1_fact1: "A rádiójel, a fény és a röntgensugár ugyanazzal a sebességgel utazik",
    r1_q: "Ha a frekvencia 500 Hz és a hullámhossz 2 m, a hullámsebessség...", r1_a: "1000 m/s", r1_b: "250 m/s", r1_c: "1 m/s", r1_d: "500 m/s",
    r2_title: "Elektromágneses spektrum", r2_text: "Az EM-spektrum az összes EM-hullám tartománya: rádiójel (leghosszabb hullámhossz), mikrohullám, infravörös, látható fény, ultraibolya, röntgensugár és gammasugár (legrövidebb hullámhossz). Mindegyik a fénysebességgel utazik. Hosszabb hullámhossz = alacsonyabb frekvencia. Rövidebb hullámhossz = magasabb frekvencia.",
    r2_fact1: "A látható fény az egész EM-spektrum csak egy apró része",
    r2_q: "Melyik EM-hullám rendelkezik a leghosszabb hullámhosszal?", r2_a: "Rádiójel", r2_b: "Látható fény", r2_c: "Röntgensugár", r2_d: "Gammasugár",
    r3_title: "Infravörös és ultraibolya", r3_text: "Az infravörös (IR) sugárzás a látható spektrum alatt van. Ez hősugárzás—termikus kamerák érzékelik. Az ultraibolya sugárzás a látható spektrum felett van. Az UV napsugárzást okoz és bőrrákot. Az UV segít a növényeknek növekedni és testünk D-vitamint termel. Az UV az orvosi eszközök sterilizálására szolgál.",
    r3_fact1: "A Nap UV-sugárzása erősebb nagy magasságban",
    r3_q: "Mely EM-sugárzás okozza a napégést?", r3_a: "Ultraibolya (UV)", r3_b: "Infravörös (IR)", r3_c: "Mikrohullám", r3_d: "Látható fény",
    r4_title: "Hulláminterferencia", r4_text: "Amikor két hullám találkozik, zavart okoznak. Konstruktív interferencia: hullámdombok találkoznak = a hullámok összeadódnak, nagyobb hullámot hoznak létre. Destruktív interferencia: dombok völgyekkel találkoznak = hullámok törlődnek. Ez interferencia mintákat hoz létre.",
    r4_fact1: "A zajszűrő fejhallgatók destruktív interferenciaval blokkolják a hangot",
    r4_q: "Mi történik, amikor két hullámdomb találkozik?", r4_a: "Konstruktív interferencia (nagyobb hullám)", r4_b: "Destruktív interferencia (hullámok törlődnek)", r4_c: "A hullámok eltűnnek", r4_d: "Új szín képződik",
    r5_q1_q: "Mi a hullámhossz?", r5_q1_a: "Távolság két hullámdomb között", r5_q1_b: "Mennyire gyors a hullám", r5_q1_c: "Milyen magas a hullám", r5_q1_d: "A hullám színe",
    r5_q2_q: "Miért olyan kicsi a látható fény az EM-spektrumban?", r5_q2_a: "Szemeink csak szűk tartományt tudnak érzékelni", r5_q2_b: "A látható fény ritka az űrben", r5_q2_c: "A rádiójel erősebb", r5_q2_d: "A röntgensugár blokkolja a látható fényt",
  },
  ro: {
    r1_title: "Ecuația undelor", r1_text: "Toate undele urmează ecuația: v = f × λ (viteză = frecvență × lungime de undă). Frecvența este câte unde trec un punct pe secundă (măsurată în Hz). Lungimea de undă este distanța dintre două creste de undă. Toate undele electromagnetice călătoresc cu viteza luminii: c = 3×10⁸ m/s.",
    r1_fact1: "Undele radio, lumina și razele X călătoresc toate cu aceeași viteză",
    r1_q: "Dacă frecvența este 500 Hz și lungimea de undă 2 m, viteza undei este...", r1_a: "1000 m/s", r1_b: "250 m/s", r1_c: "1 m/s", r1_d: "500 m/s",
    r2_title: "Spectrul electromagnetic", r2_text: "Spectrul EM este gama tuturor undelor EM: unde radio (lungime de undă cea mai lungă), microunde, infraroșu, lumină vizibilă, ultravioletă, raze X și raze gamma (lungime de undă cea mai scurtă). Toate călătoresc cu viteza luminii. Lungimi de undă mai lungi = frecvență mai scăzută. Lungimi de undă mai scurte = frecvență mai ridicată.",
    r2_fact1: "Lumina vizibilă este doar o fracție mică din spectrul EM",
    r2_q: "Ce undă EM are cea mai lungă lungime de undă?", r2_a: "Unde radio", r2_b: "Lumină vizibilă", r2_c: "Raze X", r2_d: "Raze gamma",
    r3_title: "Infraroșu și ultravioletă", r3_text: "Radiația infraroșie (IR) este sub spectrul vizibil. Este radiație de căldură—camerele termice o detectează. Radiația UV este deasupra spectrului vizibil. UV provoacă arsuri solare și cancer de piele. UV ajută plantele să crească și corpul nostru produce vitamina D. UV se utilizează pentru sterilizarea echipamentelor medicale.",
    r3_fact1: "Radiația UV a soarelui este mai puternică la altitudini mari",
    r3_q: "Ce radiație EM provoacă arsuri solare?", r3_a: "Ultravioletă (UV)", r3_b: "Infraroșie (IR)", r3_c: "Microundă", r3_d: "Lumină vizibilă",
    r4_title: "Interferența undelor", r4_text: "Când două unde se întâlnesc, se interferează. Interferență constructivă: creste se întâlnesc cu creste = undele se adună, formând o undă mai mare. Interferență destructivă: creste se întâlnesc cu văi = undele se anulează. Aceasta creează modele de interferență (dungi luminoase și întunecate).",
    r4_fact1: "Căștile cu anulare de zgomot folosesc interferență destructivă pentru a bloca sunetul",
    r4_q: "Ce se întâmplă când două creste de undă se întâlnesc?", r4_a: "Interferență constructivă (undă mai mare)", r4_b: "Interferență destructivă (undele se anulează)", r4_c: "Undele dispar", r4_d: "Se formează o culoare nouă",
    r5_q1_q: "Ce este lungimea de undă?", r5_q1_a: "Distanța dintre două creste de undă", r5_q1_b: "Cât de repede călătorește unda", r5_q1_c: "Cât de înaltă este unda", r5_q1_d: "Culoarea undei",
    r5_q2_q: "De ce este lumina vizibilă atât de mică parte a spectrului EM?", r5_q2_a: "Ochii noștri pot detecta doar o gamă îngustă", r5_q2_b: "Lumina vizibilă este rară în spațiu", r5_q2_c: "Undele radio sunt mai puternice", r5_q2_d: "Razele X blochează lumina vizibilă",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a5e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌊</text></svg>
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

export default function WavesK7Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
