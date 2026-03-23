"use client";
// OhmExplorer — Ohm's Law & Resistance (Ohmsches Gesetz) Klasse 8
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Ohm's Law", r1_text: "Voltage, current, and resistance are related by Ohm's Law: V = I × R. We can rearrange it to find I = V/R or R = V/I. This law describes the linear relationship for ohmic conductors.",
    r1_fact1: "In a circuit: higher voltage creates more current; higher resistance reduces current",
    r1_q: "A 12V battery powers a 4Ω resistor. What is the current?", r1_a: "3 A", r1_b: "0.3 A", r1_c: "48 A", r1_d: "8 A",
    r2_title: "Calculating Resistance", r2_text: "Resistance depends on the material's resistivity (ρ), the length (L) of the conductor, and its cross-sectional area (A). Formula: R = ρ × L / A. A longer wire has more resistance; a thicker wire has less.",
    r2_fact1: "Doubling the wire length doubles the resistance; doubling the area halves it",
    r2_q: "If you double the length of a wire, what happens to its resistance?", r2_a: "It doubles", r2_b: "It halves", r2_c: "It stays the same", r2_d: "It quadruples",
    r3_title: "Series vs Parallel Resistors", r3_text: "When resistors are connected in series (one after another), their resistances add: R_total = R₁ + R₂. In parallel (side by side), the reciprocals add: 1/R_total = 1/R₁ + 1/R₂.",
    r3_fact1: "Series means higher total R; parallel means lower total R",
    r3_q: "Two 10Ω resistors connected in series. What is the total resistance?", r3_a: "20 Ω", r3_b: "10 Ω", r3_c: "5 Ω", r3_d: "0 Ω",
    r4_title: "I-V Graphs & Ohmic Behavior", r4_text: "On an I-V graph (current vs voltage), an ohmic conductor shows a straight line through the origin. Non-ohmic devices like filament lamps show curved lines. Diodes allow current in only one direction.",
    r4_fact1: "The slope of an I-V line represents conductance; steeper slope = lower resistance",
    r4_q: "What shape is the I-V graph for an ohmic conductor?", r4_a: "A straight line through the origin", r4_b: "A curved parabola", r4_c: "An exponential curve", r4_d: "A flat horizontal line",
    r5_q1_q: "If voltage doubles and resistance stays the same, what happens to current?", r5_q1_a: "It doubles", r5_q1_b: "It halves", r5_q1_c: "It stays the same", r5_q1_d: "It quadruples",
    r5_q2_q: "A copper wire and an aluminum wire have the same length. Which has lower resistance?", r5_q2_a: "Copper (lower resistivity)", r5_q2_b: "Aluminum (lower resistivity)", r5_q2_c: "They are identical", r5_q2_d: "Neither conducts electricity",
  },
  de: {
    r1_title: "Ohmsches Gesetz", r1_text: "Spannung, Stromstärke und Widerstand sind durch das Ohmsche Gesetz verknüpft: U = I × R. Wir können es umformen zu I = U/R oder R = U/I. Dieses Gesetz beschreibt die lineare Beziehung für ohmsche Leiter.",
    r1_fact1: "In einem Stromkreis: höhere Spannung erzeugt mehr Strom; höherer Widerstand reduziert den Strom",
    r1_q: "Eine 12V-Batterie versorgt einen 4Ω-Widerstand. Wie groß ist die Stromstärke?", r1_a: "3 A", r1_b: "0,3 A", r1_c: "48 A", r1_d: "8 A",
    r2_title: "Widerstandsberechnung", r2_text: "Der Widerstand hängt von der Resistivität (ρ) des Materials, der Länge (L) des Leiters und seiner Querschnittsfläche (A) ab. Formel: R = ρ × L / A. Ein längerer Draht hat mehr Widerstand; ein dickerer Draht hat weniger.",
    r2_fact1: "Die Verdoppelung der Drahhlänge verdoppelt den Widerstand; die Verdoppelung der Fläche halbiert ihn",
    r2_q: "Wenn Sie die Länge eines Drahtes verdoppeln, was passiert mit seinem Widerstand?", r2_a: "Er verdoppelt sich", r2_b: "Er halbiert sich", r2_c: "Er bleibt gleich", r2_d: "Er vervierfacht sich",
    r3_title: "Widerstände in Serie vs. parallel", r3_text: "Wenn Widerstände in Reihe (hintereinander) geschaltet sind, addieren sich ihre Widerstände: R_gesamt = R₁ + R₂. Bei Parallelschaltung (nebeneinander) addieren sich die Kehrwerte: 1/R_gesamt = 1/R₁ + 1/R₂.",
    r3_fact1: "Reihenschaltung bedeutet höherer Gesamtwiderstand; Parallelschaltung bedeutet niedrigerer",
    r3_q: "Zwei 10Ω-Widerstände in Reihe. Wie groß ist der Gesamtwiderstand?", r3_a: "20 Ω", r3_b: "10 Ω", r3_c: "5 Ω", r3_d: "0 Ω",
    r4_title: "U-I-Diagramme und ohmsches Verhalten", r4_text: "In einem U-I-Diagramm (Spannung vs. Strom) zeigt ein ohmscher Leiter eine gerade Linie durch den Ursprung. Nicht-ohmsche Geräte wie Glühlampen zeigen gekrümmte Linien. Dioden lassen Strom nur in eine Richtung fließen.",
    r4_fact1: "Die Steigung einer U-I-Linie stellt die Leitfähigkeit dar; steilere Steigung = niedrigerer Widerstand",
    r4_q: "Welche Form hat das U-I-Diagramm für einen ohmschen Leiter?", r4_a: "Eine gerade Linie durch den Ursprung", r4_b: "Eine gekrümmte Parabel", r4_c: "Eine Exponentialkurve", r4_d: "Eine flache horizontale Linie",
    r5_q1_q: "Wenn die Spannung sich verdoppelt und der Widerstand gleich bleibt, was passiert mit dem Strom?", r5_q1_a: "Er verdoppelt sich", r5_q1_b: "Er halbiert sich", r5_q1_c: "Er bleibt gleich", r5_q1_d: "Er vervierfacht sich",
    r5_q2_q: "Ein Kupferdraht und ein Aluminiumdraht haben dieselbe Länge. Welcher hat niedrigeren Widerstand?", r5_q2_a: "Kupfer (niedrigere Resistivität)", r5_q2_b: "Aluminium (niedrigere Resistivität)", r5_q2_c: "Sie sind identisch", r5_q2_d: "Keiner leitet Strom",
  },
  hu: {
    r1_title: "Ohm törvénye", r1_text: "A feszültség, áram és ellenállás az Ohm-törvénnyel kapcsolódik: U = I × R. Átrendezhetjük: I = U/R vagy R = U/I. Ez a törvény az ohmos vezetők lineáris kapcsolatát írja le.",
    r1_fact1: "Egy áramkörben: magasabb feszültség több áramot hoz létre; magasabb ellenállás csökkenti az áramot",
    r1_q: "Egy 12V-os akkumulátor 4Ω ellenállást táplál. Mekkora az áram?", r1_a: "3 A", r1_b: "0,3 A", r1_c: "48 A", r1_d: "8 A",
    r2_title: "Ellenállás számítása", r2_text: "Az ellenállás az anyag fajlagos ellenállásától (ρ), a vezető hosszától (L) és keresztmetszetétől (A) függ. Képlet: R = ρ × L / A. A hosszabb vezetéknek nagyobb ellenállása van; a vastagabb vezetéknek alacsonyabb.",
    r2_fact1: "A vezeték hosszának megduplázása megduplázza az ellenállást; a terület megduplázása felezi",
    r2_q: "Ha megduplázza a drót hosszát, mi történik az ellenállásával?", r2_a: "Megduplázódik", r2_b: "Feleződik", r2_c: "Ugyanaz marad", r2_d: "Megnégyszeresedik",
    r3_title: "Sorosan és párhuzamosan kapcsolt ellenállások", r3_text: "Ha az ellenállások sorosan (egymás után) vannak csatlakoztatva, az ellenállásaik összeadódnak: R_összesen = R₁ + R₂. Párhuzamosan (egymás mellett) a reciprokok összeadódnak: 1/R_összesen = 1/R₁ + 1/R₂.",
    r3_fact1: "Sorbakapcsolás = magasabb teljes R; párhuzam = alacsonyabb teljes R",
    r3_q: "Két 10Ω-os ellenállás sorozatban. Mekkora a teljes ellenállás?", r3_a: "20 Ω", r3_b: "10 Ω", r3_c: "5 Ω", r3_d: "0 Ω",
    r4_title: "I-U grafikonok és ohmos viselkedés", r4_text: "Egy I-U grafikonon (áram vs feszültség) az ohmos vezető az origón keresztül húzódó egyenes vonal. A nem ohmos eszközök, például izzólámpa ívelt vonalakat mutatnak. A diódák csak az egyik irányban engedik az áramot.",
    r4_fact1: "Az I-U vonal meredeksége a vezetőképességet jelenti; meredekebb = alacsonyabb ellenállás",
    r4_q: "Milyen alakú az I-U grafikon az ohmos vezetőnél?", r4_a: "Az origón keresztül húzódó egyenes", r4_b: "Egy görbült parabola", r4_c: "Egy exponenciális görbe", r4_d: "Egy sík vízszintes vonal",
    r5_q1_q: "Ha a feszültség megduplázódik és az ellenállás ugyanaz marad, mi történik az árammal?", r5_q1_a: "Megduplázódik", r5_q1_b: "Felezódik", r5_q1_c: "Ugyanaz marad", r5_q1_d: "Megnégyszeresedik",
    r5_q2_q: "Egy rézvezeték és egy alumíniumvezeték azonos hosszúságú. Melyiknek alacsonyabb az ellenállása?", r5_q2_a: "Réz (alacsonyabb fajlagos ellenállás)", r5_q2_b: "Alumínium (alacsonyabb fajlagos ellenállás)", r5_q2_c: "Azonosak", r5_q2_d: "Egyik sem vezet áramot",
  },
  ro: {
    r1_title: "Legea lui Ohm", r1_text: "Tensiunea, curentul și rezistența sunt legate prin legea lui Ohm: U = I × R. Putem rearanja: I = U/R sau R = U/I. Această lege descrie relația liniară pentru conductorii ohmici.",
    r1_fact1: "Într-un circuit: tensiune mai mare creează mai mult curent; rezistență mai mare reduce curentul",
    r1_q: "O baterie de 12V alimentează un rezistor de 4Ω. Care este curentul?", r1_a: "3 A", r1_b: "0,3 A", r1_c: "48 A", r1_d: "8 A",
    r2_title: "Calcularea rezistenței", r2_text: "Rezistența depinde de rezistivitatea (ρ) materialului, lungimea (L) conductorului și aria sa de secțiune (A). Formula: R = ρ × L / A. Un fir mai lung are mai multă rezistență; un fir mai gros are mai puțin.",
    r2_fact1: "Dublarea lungimii firului dublează rezistența; dublarea ariei o înjumătățește",
    r2_q: "Dacă dublezi lungimea unui fir, ce se întâmplă cu rezistența lui?", r2_a: "Se dublează", r2_b: "Se înjumătățește", r2_c: "Rămâne la fel", r2_d: "Se încadruplează",
    r3_title: "Rezistoare în serie vs. paralel", r3_text: "Când rezistoarele sunt conectate în serie (una după alta), rezistențele se adună: R_total = R₁ + R₂. În paralel (una lângă alta), reciprocele se adună: 1/R_total = 1/R₁ + 1/R₂.",
    r3_fact1: "Seria = R total mai mare; paralel = R total mai mic",
    r3_q: "Două rezistoare de 10Ω conectate în serie. Care este rezistența totală?", r3_a: "20 Ω", r3_b: "10 Ω", r3_c: "5 Ω", r3_d: "0 Ω",
    r4_title: "Grafice I-U și comportament ohmic", r4_text: "Pe un grafic I-U (curent vs. tensiune), un conductor ohmic arată o linie dreaptă prin origine. Dispozitivele non-ohmice, cum ar fi lămpile incandescente, arată linii curbe. Diodele permit curentul doar într-o direcție.",
    r4_fact1: "Panta unei linii I-U reprezintă conductanța; panta mai abruptă = rezistență mai mică",
    r4_q: "Ce formă are graficul I-U pentru un conductor ohmic?", r4_a: "O linie dreaptă prin origine", r4_b: "O parabolă curbată", r4_c: "O curbă exponențială", r4_d: "O linie orizontală plată",
    r5_q1_q: "Dacă tensiunea se dublează și rezistența rămâne aceeași, ce se întâmplă cu curentul?", r5_q1_a: "Se dublează", r5_q1_b: "Se înjumătățește", r5_q1_c: "Rămâne la fel", r5_q1_d: "Se încadruplează",
    r5_q2_q: "Un fir de cupru și un fir de aluminiu au aceeași lungime. Care are rezistență mai mică?", r5_q2_a: "Cuprul (rezistivitate mai mică)", r5_q2_b: "Aluminiul (rezistivitate mai mică)", r5_q2_c: "Sunt identice", r5_q2_d: "Nici unul nu conduce curent",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">⚡</text></svg>
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

export default function OhmExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
