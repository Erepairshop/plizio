"use client";
// EyeExplorer — Eye Optics & Optical Instruments (Klasse 7)
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "The Human Eye", r1_text: "The eye is a camera-like organ. The lens focuses light on the retina. The pupil controls how much light enters. The iris gives the eye its color.",
    r1_fact1: "The retina contains millions of light-sensitive cells",
    r1_q: "Which part of the eye focuses light?", r1_a: "The lens", r1_b: "The iris", r1_c: "The pupil", r1_d: "The retina",
    r2_title: "Correcting Vision", r2_text: "Short-sightedness means the image forms before the retina (can't see far). A concave (diverging) lens fixes this. Long-sightedness means the image forms behind the retina (can't see near). A convex (converging) lens fixes this.",
    r2_fact1: "Glasses help millions of people see clearly every day",
    r2_q: "Short-sightedness is corrected with...", r2_a: "A concave (diverging) lens", r2_b: "A convex (converging) lens", r2_c: "A magnifying glass", r2_d: "No lens needed",
    r3_title: "The Microscope", r3_text: "A microscope uses two convex lenses. The objective lens (near the specimen) creates a real, magnified image. The eyepiece lens magnifies that image again for the eye to see.",
    r3_fact1: "Microscopes can magnify objects up to 1,000 times",
    r3_q: "How many convex lenses does a microscope use?", r3_a: "Two", r3_b: "One", r3_c: "Three", r3_d: "Four",
    r4_title: "The Telescope", r4_text: "A telescope collects light from distant objects. The large objective lens gathers light from far away. The eyepiece magnifies the image. A bigger objective means more light collected, so fainter objects become visible.",
    r4_fact1: "Telescopes let us see stars and planets billions of kilometers away",
    r4_q: "Why do telescopes have large objective lenses?", r4_a: "To collect more light", r4_b: "To magnify more", r4_c: "To reduce cost", r4_d: "To look prettier",
    r5_q1_q: "What does the pupil control?", r5_q1_a: "How much light enters the eye", r5_q1_b: "The color of the eye", r5_q1_c: "The shape of the lens", r5_q1_d: "The size of the retina",
    r5_q2_q: "Which type of lens corrects long-sightedness?", r5_q2_a: "Convex (converging) lens", r5_q2_b: "Concave (diverging) lens", r5_q2_c: "Flat lens", r5_q2_d: "No lens needed",
  },
  de: {
    r1_title: "Das menschliche Auge", r1_text: "Das Auge ist ein kameraähnliches Organ. Die Linse fokussiert Licht auf die Netzhaut. Die Pupille kontrolliert, wie viel Licht eintritt. Die Iris gibt dem Auge seine Farbe.",
    r1_fact1: "Die Netzhaut enthält Millionen von lichtsensitiven Zellen",
    r1_q: "Welcher Teil des Auges fokussiert Licht?", r1_a: "Die Linse", r1_b: "Die Iris", r1_c: "Die Pupille", r1_d: "Die Netzhaut",
    r2_title: "Sehfehler korrigieren", r2_text: "Kurzsichtigkeit bedeutet, das Bild bildet sich vor der Netzhaut. Eine Zerstreuungslinse (konkav) behebt dies. Weitsichtigkeit bedeutet, das Bild bildet sich hinter der Netzhaut. Eine Sammellinse (konvex) behebt dies.",
    r2_fact1: "Brillen helfen Millionen von Menschen, klar zu sehen",
    r2_q: "Kurzsichtigkeit wird korrigiert mit...", r2_a: "Einer Zerstreuungslinse (konkav)", r2_b: "Einer Sammellinse (konvex)", r2_c: "Einer Lupe", r2_d: "Keine Linse nötig",
    r3_title: "Das Mikroskop", r3_text: "Ein Mikroskop nutzt zwei Sammellinsen. Die Objektivlinse (neben dem Objekt) erzeugt ein echtes, vergrößertes Bild. Die Okularlinse vergrößert dieses Bild erneut für das Auge.",
    r3_fact1: "Mikroskope können Objekte bis zu 1.000-mal vergrößern",
    r3_q: "Wie viele Sammellinsen hat ein Mikroskop?", r3_a: "Zwei", r3_b: "Eine", r3_c: "Drei", r3_d: "Vier",
    r4_title: "Das Teleskop", r4_text: "Ein Teleskop sammelt Licht von weit entfernten Objekten. Die große Objektivlinse erfasst Licht von weit weg. Das Okular vergrößert das Bild. Ein größeres Objektiv bedeutet mehr gesammeltes Licht, sodass schwächere Objekte sichtbar werden.",
    r4_fact1: "Teleskope lassen uns Sterne und Planeten Milliarden Kilometer entfernt sehen",
    r4_q: "Warum haben Teleskope große Objektivlinsen?", r4_a: "Um mehr Licht zu sammeln", r4_b: "Um mehr zu vergrößern", r4_c: "Um Kosten zu sparen", r4_d: "Um schöner auszusehen",
    r5_q1_q: "Was kontrolliert die Pupille?", r5_q1_a: "Wie viel Licht ins Auge eintritt", r5_q1_b: "Die Farbe des Auges", r5_q1_c: "Die Form der Linse", r5_q1_d: "Die Größe der Netzhaut",
    r5_q2_q: "Welche Art von Linse korrigiert Weitsichtigkeit?", r5_q2_a: "Sammellinse (konvex)", r5_q2_b: "Zerstreuungslinse (konkav)", r5_q2_c: "Flache Linse", r5_q2_d: "Keine Linse nötig",
  },
  hu: {
    r1_title: "Az emberi szem", r1_text: "A szem egy kamera-szerű szerv. A lencse a fényt a retinára fókuszálja. A pupilla szabályozza, mennyi fény lép be. Az írisz adja a szem színét.",
    r1_fact1: "A retina millió fényre érzékeny cellát tartalmaz",
    r1_q: "A szem mely része fókuszálja a fényt?", r1_a: "A lencse", r1_b: "Az írisz", r1_c: "A pupilla", r1_d: "A retina",
    r2_title: "Látáshiba korrigálása", r2_text: "A rövidlátás azt jelenti, hogy a kép a retina előtt képződik. Egy szórólencse ezt kijavítja. A távollátás azt jelenti, hogy a kép a retina mögött képződik. Egy gyűjtőlencse ezt kijavítja.",
    r2_fact1: "A szemüveg segít milliónak világosan látni",
    r2_q: "A rövidlátás korrigálódik...", r2_a: "Szórólencse (konkáv)", r2_b: "Gyűjtőlencse (konvex)", r2_c: "Nagyító", r2_d: "Nincs lencse szükséges",
    r3_title: "A mikroszkóp", r3_text: "A mikroszkóp két gyűjtőlencsét használ. Az objektív lencse (a minta mellett) valódi, nagyított képet hoz létre. Az okulár lencse ezt az képet ismét nagyítja a szem számára.",
    r3_fact1: "A mikroszkópok objektumokat akár 1000-szeresre képesek nagyítani",
    r3_q: "Hány gyűjtőlencsét használ a mikroszkóp?", r3_a: "Kettőt", r3_b: "Egyet", r3_c: "Hármat", r3_d: "Négyet",
    r4_title: "A teleszkóp", r4_text: "A teleszkóp távoli objektumokból gyűjt fényt. A nagy objektív lencse messze lévő fényt fogad. Az okulár nagyítja a képet. Nagyobb objektív = több gyűjtött fény, így halványabb objektumok is láthatóvá válnak.",
    r4_fact1: "A teleszkópok segítségével milliárd kilométerre lévő csillagokat láthatunk",
    r4_q: "Miért van nagy objektív lencse a teleszkópoknak?", r4_a: "Több fény gyűjtésére", r4_b: "Többszörös nagyításra", r4_c: "Költségcsökkentésre", r4_d: "Szebb megjelenésre",
    r5_q1_q: "Mit szabályoz a pupilla?", r5_q1_a: "Mennyi fény lép be a szembe", r5_q1_b: "A szem színe", r5_q1_c: "A lencse alakja", r5_q1_d: "A retina mérete",
    r5_q2_q: "Milyen lencse korrigálja a távollátást?", r5_q2_a: "Gyűjtőlencse (konvex)", r5_q2_b: "Szórólencse (konkáv)", r5_q2_c: "Lapos lencse", r5_q2_d: "Nincs lencse szükséges",
  },
  ro: {
    r1_title: "Ochiul uman", r1_text: "Ochiul este un organ asemănător unui aparat foto. Lentila focalizează lumina pe retină. Pupila controlează cât de multă lumină intră. Irisul dă ochiului culoarea.",
    r1_fact1: "Retina conține milioane de celule sensibile la lumină",
    r1_q: "Care parte a ochiului focalizează lumina?", r1_a: "Lentila", r1_b: "Irisul", r1_c: "Pupila", r1_d: "Retina",
    r2_title: "Corectarea vederii", r2_text: "Miopie înseamnă că imaginea se formează în fața retinei. O lentilă divergentă (concavă) remediază aceasta. Hipermetropia înseamnă că imaginea se formează în spatele retinei. O lentilă convergentă (convexă) remediază aceasta.",
    r2_fact1: "Ochelarii ajută milioane de oameni să vadă clar în fiecare zi",
    r2_q: "Miopia este corectată cu...", r2_a: "O lentilă divergentă (concavă)", r2_b: "O lentilă convergentă (convexă)", r2_c: "O lupă", r2_d: "Nicio lentilă necesară",
    r3_title: "Microscoapele", r3_text: "Un microscop utilizează două lentile convergente. Lentila obiectiv (lângă specimen) creează o imagine reală și mărită. Lentila oculară măreşte din nou acea imagine pentru ochi.",
    r3_fact1: "Microscopele pot mări obiecte de până la 1000 de ori",
    r3_q: "Câte lentile convergente folosește un microscop?", r3_a: "Două", r3_b: "Una", r3_c: "Trei", r3_d: "Patru",
    r4_title: "Telescopul", r4_text: "Un telescop colectează lumina din obiecte îndepărtate. Lentila obiectiv mare colectează lumina de la distanță. Lentila oculară măreşte imaginea. O obiectivă mai mare înseamnă mai multă lumină colectată, deci obiectele mai slabe devin vizibile.",
    r4_fact1: "Telescoapele ne permit să vedem stele și planete la miliarde de kilometri depărtare",
    r4_q: "De ce au telescoapele lentile obiectiv mari?", r4_a: "Pentru a colecta mai multă lumină", r4_b: "Pentru a mări mai mult", r4_c: "Pentru a reduce costurile", r4_d: "Pentru a arăta mai frumos",
    r5_q1_q: "Ce controlează pupila?", r5_q1_a: "Cât de multă lumină intră în ochi", r5_q1_b: "Culoarea ochiului", r5_q1_c: "Forma lentilei", r5_q1_d: "Mărimea retinei",
    r5_q2_q: "Ce tip de lentilă corectează hipermetropia?", r5_q2_a: "Lentilă convergentă (convexă)", r5_q2_b: "Lentilă divergentă (concavă)", r5_q2_c: "Lentilă plană", r5_q2_d: "Nicio lentilă necesară",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a5e"/><text x="120" y="90" textAnchor="middle" fontSize="50">👁️</text></svg>
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

export default function EyeExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
