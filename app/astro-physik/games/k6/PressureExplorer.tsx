"use client";
// PressureExplorer — Pressure Basics (Druck) Grade 6
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What is Pressure?", r1_text: "Pressure = Force ÷ Area. Smaller area = higher pressure. A knife edge and high heels demonstrate this principle.",
    r1_fact1: "Pressure is measured in Pascals (Pa)",
    r1_q: "Which has more pressure: a knife edge or a flat surface?", r1_a: "Knife edge", r1_b: "Flat surface", r1_c: "They are equal", r1_d: "Cannot compare",
    r2_title: "Liquid Pressure", r2_text: "Pressure in liquids increases with depth. Dams are thicker at the bottom because they must support greater pressure from deeper water.",
    r2_fact1: "Submarines are designed to withstand high water pressure",
    r2_q: "Why are dams thicker at the bottom?", r2_a: "Greater water pressure below", r2_b: "To look better", r2_c: "To reduce cost", r2_d: "For stronger appearance",
    r3_title: "Atmospheric Pressure", r3_text: "Atmospheric pressure is caused by the weight of air above us. Standard atmospheric pressure is 101,325 Pa at sea level.",
    r3_fact1: "Air pressure decreases with altitude",
    r3_q: "What causes atmospheric pressure?", r3_a: "Weight of air above", r3_b: "Wind", r3_c: "Temperature", r3_d: "Humidity",
    r4_title: "Applications", r4_text: "Barometers measure atmospheric pressure. Submarines and diving equipment are designed to handle high water pressure safely.",
    r4_fact1: "Pressure gauges are used in car tires and diving tanks",
    r4_q: "Which instrument measures atmospheric pressure?", r4_a: "Barometer", r4_b: "Thermometer", r4_c: "Speedometer", r4_d: "Altimeter",
    r5_q1_q: "As you go deeper in water, pressure...", r5_q1_a: "Increases", r5_q1_b: "Decreases", r5_q1_c: "Stays constant", r5_q1_d: "Varies randomly",
    r5_q2_q: "High heels apply more pressure than flat shoes because...", r5_q2_a: "Area is smaller", r5_q2_b: "They weigh more", r5_q2_c: "They are harder", r5_q2_d: "They are hotter",
  },
  de: {
    r1_title: "Was ist Druck?", r1_text: "Druck = Kraft ÷ Fläche. Kleinere Fläche = höherer Druck. Ein Messerrand und High Heels zeigen dieses Prinzip.",
    r1_fact1: "Druck wird in Pascal (Pa) gemessen",
    r1_q: "Welcher hat mehr Druck: ein Messerrand oder eine flache Oberfläche?", r1_a: "Messerrand", r1_b: "Flache Oberfläche", r1_c: "Sie sind gleich", r1_d: "Kann nicht vergleichen",
    r2_title: "Flüssigkeitsdruck", r2_text: "Der Druck in Flüssigkeiten nimmt mit der Tiefe zu. Dämme sind unten dicker, weil sie größeren Druck aus tieferem Wasser aushalten müssen.",
    r2_fact1: "U-Boote sind so ausgelegt, dass sie hohen Wasserdruck aushalten",
    r2_q: "Warum sind Dämme unten dicker?", r2_a: "Größerer Wasserdruck unten", r2_b: "Um besser auszusehen", r2_c: "Kosten zu reduzieren", r2_d: "Für stärkeres Aussehen",
    r3_title: "Atmosphärendruck", r3_text: "Der Atmosphärendruck wird durch das Gewicht der Luft über uns verursacht. Der Standardluftdruck beträgt 101.325 Pa auf Meereshöhe.",
    r3_fact1: "Der Luftdruck nimmt mit der Höhe ab",
    r3_q: "Was verursacht Atmosphärendruck?", r3_a: "Gewicht der Luft oben", r3_b: "Wind", r3_c: "Temperatur", r3_d: "Feuchtigkeit",
    r4_title: "Anwendungen", r4_text: "Barometer messen den Atmosphärendruck. U-Boote und Tauchausrüstungen sind so ausgelegt, dass sie hohen Wasserdruck sicher handhaben.",
    r4_fact1: "Druckmanometer werden in Autoreifen und Tauchflaschen verwendet",
    r4_q: "Welches Instrument misst den Atmosphärendruck?", r4_a: "Barometer", r4_b: "Thermometer", r4_c: "Tachometer", r4_d: "Höhenmesser",
    r5_q1_q: "Je tiefer Sie im Wasser sind, desto mehr Druck...", r5_q1_a: "Nimmt zu", r5_q1_b: "Nimmt ab", r5_q1_c: "Bleibt gleich", r5_q1_d: "Variiert zufällig",
    r5_q2_q: "High Heels üben mehr Druck aus als flache Schuhe, weil...", r5_q2_a: "Fläche kleiner ist", r5_q2_b: "Sie schwerer wiegen", r5_q2_c: "Sie härter sind", r5_q2_d: "Sie heißer sind",
  },
  hu: {
    r1_title: "Mi az a nyomás?", r1_text: "Nyomás = Erő ÷ Terület. Kisebb terület = nagyobb nyomás. A kés éle és a magassarkú cipők ezt az elvet mutatják.",
    r1_fact1: "A nyomást Pascal-ban (Pa) mérik",
    r1_q: "Melyiknek van több nyomása: a kés élének vagy a sík felületnek?", r1_a: "Kés éle", r1_b: "Sík felület", r1_c: "Egyenlőek", r1_d: "Nem lehet összehasonlítani",
    r2_title: "Folyadék nyomása", r2_text: "A folyadékok nyomása a mélységgel növekszik. A gátak alul vastagabbak, mivel a mélyebb vízből nagyobb nyomásnak kell ellenállniuk.",
    r2_fact1: "A tengeralattjárók úgy vannak megtervezve, hogy nagy vízi nyomást kibírjanak",
    r2_q: "Miért vastagabb a gát alul?", r2_a: "Nagyobb vízi nyomás alul", r2_b: "Hogy jobban nézzen ki", r2_c: "Költségek csökkentéséhez", r2_d: "Erősebb megjelenéshez",
    r3_title: "Légköri nyomás", r3_text: "A légköri nyomást a felettünk lévő levegő súlya okozza. A standard légköri nyomás 101 325 Pa a tengerszinten.",
    r3_fact1: "A légnyomás csökken a magassággal",
    r3_q: "Mi okozza a légköri nyomást?", r3_a: "A felettünk lévő levegő súlya", r3_b: "Szél", r3_c: "Hőmérséklet", r3_d: "Páratartalom",
    r4_title: "Alkalmazások", r4_text: "A barométerek mérik a légköri nyomást. A tengeralattjárók és búvárkészülékek úgy vannak megtervezve, hogy biztonságosan kezeljék a magas vízi nyomást.",
    r4_fact1: "A nyomásmérőket autó gumiabroncsban és búvárruhákban használják",
    r4_q: "Melyik műszer méri a légköri nyomást?", r4_a: "Barométer", r4_b: "Hőmérő", r4_c: "Sebesség-mérő", r4_d: "Magasságmérő",
    r5_q1_q: "Ahogy mélyebbre mész a vízben, a nyomás...", r5_q1_a: "Növekszik", r5_q1_b: "Csökken", r5_q1_c: "Állandó marad", r5_q1_d: "Véletlenszerűen változik",
    r5_q2_q: "A magassarkú cipők több nyomást fejtanak ki, mint a lapos cipők, mert...", r5_q2_a: "A terület kisebb", r5_q2_b: "Nehezebbek", r5_q2_c: "Keményebbek", r5_q2_d: "Forróbbak",
  },
  ro: {
    r1_title: "Ce este presiunea?", r1_text: "Presiune = Forță ÷ Arie. Arie mai mică = presiune mai mare. Marginea cuțitului și pantofii cu toc înalt demonstrează acest principiu.",
    r1_fact1: "Presiunea se măsoară în Pascali (Pa)",
    r1_q: "Care are mai multă presiune: marginea cuțitului sau suprafața plană?", r1_a: "Marginea cuțitului", r1_b: "Suprafață plană", r1_c: "Sunt egale", r1_d: "Nu se poate compara",
    r2_title: "Presiunea lichidelor", r2_text: "Presiunea în lichide crește cu adâncimea. Barajele sunt mai groase în jos, deoarece trebuie să suporte o presiune mai mare din apa mai adâncă.",
    r2_fact1: "Submarinele sunt proiectate pentru a rezista la presiunea ridicată a apei",
    r2_q: "De ce sunt barajele mai groase în jos?", r2_a: "Presiune mai mare a apei mai jos", r2_b: "Pentru a arăta mai bine", r2_c: "Pentru a reduce costul", r2_d: "Pentru o apariție mai puternică",
    r3_title: "Presiunea atmosferică", r3_text: "Presiunea atmosferică este cauzată de greutatea aerului de deasupra noastră. Presiunea atmosferică standard este 101.325 Pa la nivelul mării.",
    r3_fact1: "Presiunea aerului scade odată cu altitudinea",
    r3_q: "Ce cauzează presiunea atmosferică?", r3_a: "Greutatea aerului de deasupra", r3_b: "Vânt", r3_c: "Temperatură", r3_d: "Umiditate",
    r4_title: "Aplicații", r4_text: "Barometrele măsoară presiunea atmosferică. Submarinele și echipamentele de scufundare sunt concepute pentru a manipula în siguranță presiunea ridicată a apei.",
    r4_fact1: "Manometrele sunt utilizate în pneurile de mașini și rezervoarele de scufundare",
    r4_q: "Care instrument măsoară presiunea atmosferică?", r4_a: "Barometru", r4_b: "Termometru", r4_c: "Vitezometru", r4_d: "Altimetru",
    r5_q1_q: "Pe măsură ce cobori mai adânc în apă, presiunea...", r5_q1_a: "Crește", r5_q1_b: "Scade", r5_q1_c: "Rămâne constantă", r5_q1_d: "Variază aleatoriu",
    r5_q2_q: "Pantofii cu toc înalt exercită mai multă presiune decât pantofii plani pentru că...", r5_q2_a: "Aria este mai mică", r5_q2_b: "Cântăresc mai mult", r5_q2_c: "Sunt mai grei", r5_q2_d: "Sunt mai fierbinți",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">💨</text></svg>
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

export default function PressureExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
