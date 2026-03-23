"use client";
// CurrentExplorer — Current, Voltage, Resistance, Safety (Strom, Spannung, Widerstand, Sicherheit) Grade 6
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Electric Current", r1_text: "Current (I) is the flow of electric charge through a circuit. Measured in Amperes (A). Higher current means more charge flowing per second.",
    r1_fact1: "A household light bulb typically uses 0.5 to 1 Ampere of current",
    r1_q: "What is electric current?", r1_a: "Flow of electric charge", r1_b: "Heat from a wire", r1_c: "Light from a bulb", r1_d: "Magnetic field",
    r2_title: "Resistance", r2_text: "Resistance (R) opposes the flow of current through a conductor. Measured in Ohms (Ω). Longer wires and thinner materials have more resistance.",
    r2_fact1: "Copper wire has low resistance, so it's ideal for electrical circuits",
    r2_q: "How does resistance affect a circuit?", r2_a: "Opposes current flow", r2_b: "Increases voltage", r2_c: "Reduces power loss", r2_d: "Amplifies current",
    r3_title: "Ohm's Law", r3_text: "Ohm's Law states: Voltage = Current × Resistance, or V = I × R. This fundamental relationship helps us understand how circuits behave.",
    r3_fact1: "Higher resistance requires higher voltage to push the same current",
    r3_q: "If current increases and resistance stays the same, voltage must...", r3_a: "Increase", r3_b: "Decrease", r3_c: "Stay the same", r3_d: "Disappear",
    r4_title: "Electrical Safety", r4_text: "Never touch live wires—electricity can cause severe shock or burns. Always use insulation. Fuses and circuit breakers protect circuits from overcurrent and fire.",
    r4_fact1: "A current of 0.1 Amperes through the human body can be fatal",
    r4_q: "What prevents circuits from dangerous overcurrent?", r4_a: "Fuses or circuit breakers", r4_b: "Copper wire", r4_c: "Lightbulbs", r4_d: "Batteries",
    r5_q1_q: "Why does a longer wire have more resistance?", r5_q1_a: "Electrons travel farther", r5_q1_b: "Copper is heavier", r5_q1_c: "Voltage increases", r5_q1_d: "Current decreases",
    r5_q2_q: "What should you do if you see a sparking electrical wire?", r5_q2_a: "Stay away and report it", r5_q2_b: "Touch it carefully", r5_q2_c: "Pour water on it", r5_q2_d: "Ignore it",
  },
  de: {
    r1_title: "Elektrischer Strom", r1_text: "Strom (I) ist der Fluss von elektrischer Ladung durch einen Stromkreis. Gemessen in Ampere (A). Höherer Strom bedeutet mehr Ladung pro Sekunde.",
    r1_fact1: "Eine Haushaltsglühbirne verbraucht typischerweise 0,5 bis 1 Ampere",
    r1_q: "Was ist elektrischer Strom?", r1_a: "Fluss von elektrischer Ladung", r1_b: "Wärme aus einem Draht", r1_c: "Licht einer Glühbirne", r1_d: "Magnetisches Feld",
    r2_title: "Widerstand", r2_text: "Widerstand (R) sperrt den Stromfluss durch einen Leiter. Gemessen in Ohm (Ω). Längere Drähte und dünnere Materialien haben mehr Widerstand.",
    r2_fact1: "Kupferdraht hat niedrigen Widerstand, daher ist er ideal für Stromkreise",
    r2_q: "Wie beeinflusst Widerstand einen Stromkreis?", r2_a: "Sperrt Stromfluss", r2_b: "Erhöht Spannung", r2_c: "Reduziert Leistungsverlust", r2_d: "Verstärkt Strom",
    r3_title: "Ohmsches Gesetz", r3_text: "Ohms Gesetz besagt: Spannung = Strom × Widerstand, oder V = I × R. Diese fundamentale Beziehung hilft uns Stromkreise zu verstehen.",
    r3_fact1: "Höherer Widerstand erfordert höhere Spannung für denselben Strom",
    r3_q: "Wenn Strom zunimmt und Widerstand gleich bleibt, muss Spannung...", r3_a: "Zunehmen", r3_b: "Abnehmen", r3_c: "Gleich bleiben", r3_d: "Verschwinden",
    r4_title: "Elektrische Sicherheit", r4_text: "Berühre niemals stromführende Drähte—Elektrizität kann schwere Verletzungen verursachen. Verwende immer Isolierung. Sicherungen und Leistungsschutzschalter schützen Stromkreise.",
    r4_fact1: "Ein Strom von 0,1 Ampere durch den menschlichen Körper kann tödlich sein",
    r4_q: "Was verhindert Stromkreise vor gefährlichem Überstrom?", r4_a: "Sicherungen oder Schutzschalter", r4_b: "Kupferdraht", r4_c: "Glühbirnen", r4_d: "Batterien",
    r5_q1_q: "Warum hat ein längerer Draht mehr Widerstand?", r5_q1_a: "Elektronen reisen weiter", r5_q1_b: "Kupfer ist schwerer", r5_q1_c: "Spannung nimmt zu", r5_q1_d: "Strom nimmt ab",
    r5_q2_q: "Was solltest du tun, wenn du einen sprühenden Stromdraht siehst?", r5_q2_a: "Bleib weg und melde es", r5_q2_b: "Berühre es vorsichtig", r5_q2_c: "Gieße Wasser drauf", r5_q2_d: "Ignoriere es",
  },
  hu: {
    r1_title: "Elektromos áram", r1_text: "Az áram (I) az elektromos töltés áramlása az áramkörön keresztül. Ampere-ben (A) mérik. Magasabb áram több töltéseket jelent másodpercenként.",
    r1_fact1: "Egy háztartási izzó általában 0,5–1 Ampere áramot fogyaszt",
    r1_q: "Mi az elektromos áram?", r1_a: "Elektromos töltés áramlása", r1_b: "Drótból származó hő", r1_c: "Izzó által adott fény", r1_d: "Mágneses mező",
    r2_title: "Ellenállás", r2_text: "Az ellenállás (R) blokkolja az áram áramlását a vezetőn keresztül. Ohm-ban (Ω) mérik. A hosszabb vezetékek és vékonyabb anyagok nagyobb ellenállással bírnak.",
    r2_fact1: "A rézhuzal alacsony ellenállással rendelkezik, így ideális az áramkörökhöz",
    r2_q: "Hogyan befolyásolja az ellenállás az áramkört?", r2_a: "Blokkolja az áramáramlást", r2_b: "Emeli a feszültséget", r2_c: "Csökkenti a teljesítményveszteséget", r2_d: "Erősíti az áramot",
    r3_title: "Ohm törvénye", r3_text: "Ohm törvénye kimondja: Feszültség = Áram × Ellenállás, vagy V = I × R. Ez alapvető kapcsolat segít megérteni az áramköröket.",
    r3_fact1: "A magasabb ellenállás magasabb feszültséget igényel ugyanahhoz az áramhoz",
    r3_q: "Ha az áram nő és az ellenállás ugyanaz marad, a feszültség...", r3_a: "Nőnie kell", r3_b: "Csökkenie kell", r3_c: "Ugyanolyan marad", r3_d: "El kell tűnnie",
    r4_title: "Elektromos biztonság", r4_text: "Soha ne érintsd meg az élő vezetékeket—az elektromosság súlyos áramütéseket vagy égési sérüléseket okozhat. Mindig használj szigetelést. A biztosítékok és túláramvédelem védi az áramköröket.",
    r4_fact1: "Az emberi testen keresztüli 0,1 Ampere áram halálos lehet",
    r4_q: "Mi akadályozza meg az áramköröket a veszélyes túláramtól?", r4_a: "Biztosítékok vagy védelmi kapcsolók", r4_b: "Rézhuzal", r4_c: "Izzók", r4_d: "Akkumulátorok",
    r5_q1_q: "Miért van több ellenállása egy hosszabb vezetéknek?", r5_q1_a: "Az elektronok távolabb utaznak", r5_q1_b: "A réz nehezebb", r5_q1_c: "A feszültség nő", r5_q1_d: "Az áram csökken",
    r5_q2_q: "Mit kellene tenned, ha élő elektromos vezetéket látsz szikrázni?", r5_q2_a: "Maradj távol és jelent meg", r5_q2_b: "Óvatosan érintsd meg", r5_q2_c: "Önts vizet rá", r5_q2_d: "Hagyj figyelmen kívül",
  },
  ro: {
    r1_title: "Curent electric", r1_text: "Curentul (I) este fluxul de sarcină electrică prin circuit. Se măsoară în Amperi (A). Curent mai mare înseamnă mai multă sarcină curgând pe secundă.",
    r1_fact1: "O bec de casă consumă de obicei 0,5 până la 1 Amper de curent",
    r1_q: "Ce este curentul electric?", r1_a: "Flux de sarcină electrică", r1_b: "Căldură dintr-un fir", r1_c: "Lumina dintr-o bec", r1_d: "Câmp magnetic",
    r2_title: "Rezistență", r2_text: "Rezistența (R) se opune fluxului de curent printr-un conductor. Se măsoară în Ohmi (Ω). Firele mai lungi și materialele mai subțiri au mai multă rezistență.",
    r2_fact1: "Firul de cupru are rezistență mică, deci este ideal pentru circuite",
    r2_q: "Cum afectează rezistența un circuit?", r2_a: "Se opune fluxului de curent", r2_b: "Crește tensiunea", r2_c: "Reduce pierderea de putere", r2_d: "Amplifică curentul",
    r3_title: "Legea lui Ohm", r3_text: "Legea lui Ohm afirmă: Tensiune = Curent × Rezistență, sau V = I × R. Această relație fundamentală ne ajută să înțelegem circuitele.",
    r3_fact1: "Rezistența mai mare necesită tensiune mai mare pentru același curent",
    r3_q: "Dacă curentul crește și rezistența rămâne aceeași, tensiunea trebuie să...", r3_a: "Crească", r3_b: "Scadă", r3_c: "Rămână aceeași", r3_d: "Dispară",
    r4_title: "Siguranța electrică", r4_text: "Nu atinge niciodată firele sub tensiune—electricitatea poate cauza șoc grav sau arsuri. Folosește întotdeauna izolație. Siguranțele și disjunctoarele protejează circuitele.",
    r4_fact1: "Un curent de 0,1 Amperi prin corpul uman poate fi fatal",
    r4_q: "Ce previne circuitele de curent periculos în exces?", r4_a: "Siguranțe sau disjunctoare", r4_b: "Fir de cupru", r4_c: "Becuri", r4_d: "Baterii",
    r5_q1_q: "De ce are mai multă rezistență un fir mai lung?", r5_q1_a: "Electronii călătoresc mai departe", r5_q1_b: "Cuprul este mai greu", r5_q1_c: "Tensiunea crește", r5_q1_d: "Curentul scade",
    r5_q2_q: "Ce ar trebui să faci dacă vezi un fir electric cu stropi?", r5_q2_a: "Rămâi departe și raportează", r5_q2_b: "Atinge-l cu grijă", r5_q2_c: "Toarnă apă pe el", r5_q2_d: "Ignora-l",
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

export default function CurrentExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
