"use client";
// LensesExplorer — Convex Lenses, Concave Lenses, Image Formation (Linsen) Klasse 7
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Convex Lenses", r1_text: "A convex lens is thicker in the middle, thinner at the edges. It converges light rays to a focal point. Used in magnifying glasses, cameras, and projectors. The focal point is where light rays meet after passing through the lens.",
    r1_fact1: "A magnifying glass is a convex lens that converges light to a focal point",
    r1_q: "A convex lens makes parallel light rays...", r1_a: "Converge to a focal point", r1_b: "Diverge (spread out)", r1_c: "Stay parallel", r1_d: "Bend randomly",
    r2_title: "Concave Lenses", r2_text: "A concave lens is thinner in the middle, thicker at the edges. It diverges light rays away from a focal point. Used in glasses for near-sighted people. Concave lenses make objects appear smaller and farther away.",
    r2_fact1: "Glasses for short-sighted people contain concave lenses",
    r2_q: "A concave lens makes light rays...", r2_a: "Diverge (spread out)", r2_b: "Converge to a focal point", r2_c: "Stay parallel", r2_d: "Disappear",
    r3_title: "Real & Virtual Images", r3_text: "Real images can be projected onto a screen (like in a camera or projector). Virtual images cannot be projected; they appear to be behind the lens (like in a mirror). A magnifying glass produces a virtual image that is magnified and upright.",
    r3_fact1: "A magnifying glass makes a virtual image that appears larger and upright",
    r3_q: "A magnifying glass produces a... image", r3_a: "Virtual, magnified, upright", r3_b: "Real, inverted", r3_c: "Virtual, upside-down", r3_d: "Real, magnified",
    r4_title: "Focal Length", r4_text: "Focal length is the distance from the lens center to the focal point. A thicker convex lens (more curved) has a shorter focal length and focuses light more strongly. A thinner lens has a longer focal length. Thicker lens = shorter focal length = stronger magnification.",
    r4_fact1: "A thick convex lens focuses light faster (shorter focal length) than a thin lens",
    r4_q: "A thicker convex lens has...", r4_a: "A shorter focal length", r4_b: "A longer focal length", r4_c: "No focal point", r4_d: "A variable focal length",
    r5_q1_q: "Which type of lens do cameras use to focus light and form images?", r5_q1_a: "Convex", r5_q1_b: "Concave", r5_q1_c: "Flat", r5_q1_d: "Curved only on one side",
    r5_q2_q: "For a short-sighted person, which lens type helps correct vision?", r5_q2_a: "Concave", r5_q2_b: "Convex", r5_q2_c: "Flat", r5_q2_d: "Bifocal",
  },
  de: {
    r1_title: "Konvexe Linsen", r1_text: "Eine konvexe Linse ist in der Mitte dicker und an den Kanten dünner. Sie konvergiert Lichtstrahlen zu einem Brennpunkt. Verwendet in Lupe, Kameras und Projektoren. Der Brennpunkt ist, wo sich Lichtstrahlen nach dem Durchgang treffen.",
    r1_fact1: "Eine Lupe ist eine konvexe Linse, die Licht zu einem Brennpunkt konvergiert",
    r1_q: "Eine konvexe Linse macht parallele Lichtstrahlen...", r1_a: "Konvergieren zu einem Brennpunkt", r1_b: "Divergieren (auseinander spreizen)", r1_c: "Bleiben parallel", r1_d: "Biegen sich zufällig",
    r2_title: "Konkave Linsen", r2_text: "Eine konkave Linse ist in der Mitte dünner und an den Kanten dicker. Sie divergiert Lichtstrahlen weg von einem Brennpunkt. Verwendet in Brillen für Kurzsichtige. Konkave Linsen lassen Objekte kleiner und weiter entfernt erscheinen.",
    r2_fact1: "Brillen für Kurzsichtige enthalten konkave Linsen",
    r2_q: "Eine konkave Linse macht Lichtstrahlen...", r2_a: "Divergieren (auseinander spreizen)", r2_b: "Konvergieren zu einem Brennpunkt", r2_c: "Bleiben parallel", r2_d: "Verschwinden",
    r3_title: "Echte und virtuelle Bilder", r3_text: "Echte Bilder können auf einem Schirm projiziert werden (wie in einer Kamera oder einem Projektor). Virtuelle Bilder können nicht projiziert werden; sie scheinen hinter der Linse zu sein (wie in einem Spiegel). Eine Lupe erzeugt ein virtuelles Bild, das vergrößert und aufrecht ist.",
    r3_fact1: "Eine Lupe erzeugt ein virtuelles Bild, das größer und aufrecht aussieht",
    r3_q: "Eine Lupe erzeugt ein... Bild", r3_a: "Virtuelles, vergrößertes, aufrechtes", r3_b: "Echtes, invertiertes", r3_c: "Virtuelles, umgekehrtes", r3_d: "Echtes, vergrößertes",
    r4_title: "Brennweite", r4_text: "Die Brennweite ist der Abstand vom Linsenmittelpunkt zum Brennpunkt. Eine dickere konvexe Linse (stärker gekrümmt) hat eine kürzere Brennweite und fokussiert Licht stärker. Eine dünnere Linse hat eine längere Brennweite. Dickere Linse = kürzere Brennweite = stärkere Vergrößerung.",
    r4_fact1: "Eine dicke konvexe Linse fokussiert Licht schneller (kürzere Brennweite) als eine dünne Linse",
    r4_q: "Eine dickere konvexe Linse hat...", r4_a: "Eine kürzere Brennweite", r4_b: "Eine längere Brennweite", r4_c: "Keinen Brennpunkt", r4_d: "Eine variable Brennweite",
    r5_q1_q: "Welche Art von Linse verwenden Kameras, um Licht zu fokussieren und Bilder zu bilden?", r5_q1_a: "Konvex", r5_q1_b: "Konkav", r5_q1_c: "Flach", r5_q1_d: "Nur auf einer Seite gekrümmt",
    r5_q2_q: "Für eine kurzsichtige Person, welche Linsenart hilft, die Sehkraft zu korrigieren?", r5_q2_a: "Konkav", r5_q2_b: "Konvex", r5_q2_c: "Flach", r5_q2_d: "Bifocal",
  },
  hu: {
    r1_title: "Domború lencse", r1_text: "A domború lencse a közepén vastagabb, a szélein vékonyabb. A fénysugarat a fókuszponthoz konvergálja. Használat: nagyítóüveg, kamera és projektor. A fókuszpont az, ahol a fénysugarak a lencse áthaladása után találkoznak.",
    r1_fact1: "A nagyítóüveg egy domború lencse, amely a fényt a fókuszponthoz konvergálja",
    r1_q: "A domború lencse párhuzamos fénysugarak...", r1_a: "A fókuszponthoz konvergálja", r1_b: "Divergálja (szétoszlatja)", r1_c: "Párhuzamosan hagyja", r1_d: "Véletlenszerűen hajlítja",
    r2_title: "Homorú lencse", r2_text: "A homorú lencse a közepén vékonyabb, a szélein vastagabb. A fénysugarat a fókuszponttól divergálja. Használat: rövidlátóságot korrigáló szemüveg. A homorú lencse az objektumok kisebbnek és távolabbnak tűntetik.",
    r2_fact1: "A rövidlátó emberek szemüvege homorú lencséket tartalmaz",
    r2_q: "A homorú lencse fénysugarak...", r2_a: "Divergálja (szétoszlatja)", r2_b: "A fókuszponthoz konvergálja", r2_c: "Párhuzamosan hagyja", r2_d: "Eltűntet",
    r3_title: "Valós és virtuális kép", r3_text: "A valós kép vetítőképernyőn megjeleníthető (például a kamerában vagy projektorban). A virtuális kép nem vetíthető; úgy tűnik, hogy a lencse mögött van (például a tükörben). A nagyítóüveg virtuális képet hoz létre, amely nagyított és felfelé néz.",
    r3_fact1: "A nagyítóüveg virtuális képet hoz létre, amely nagyobbnak és felfelé néz",
    r3_q: "A nagyítóüveg egy... képet állít elő", r3_a: "Virtuális, nagyított, felfelé néző", r3_b: "Valós, invertált", r3_c: "Virtuális, fejjel lefelé", r3_d: "Valós, nagyított",
    r4_title: "Fókusztávolság", r4_text: "A fókusztávolság a lencse középpontjától a fókuszpontig terjedő távolság. A vastagabb domború lencse (jobban görbült) rövidebb fókusztávolsággal rendelkezik és erősebben fókuszálja a fényt. A vékonyabb lencse hosszabb fókusztávolsággal rendelkezik. Vastagabb lencse = rövidebb fókusztávolság = erősebb nagyítás.",
    r4_fact1: "A vastagabb domború lencse gyorsabban fókuszálja a fényt (rövidebb fókusztávolság) mint a vékonyabb lencse",
    r4_q: "A vastagabb domború lencse... rendelkezik", r4_a: "Rövidebb fókusztávolsággal", r4_b: "Hosszabb fókusztávolsággal", r4_c: "Nincs fókuszpontja", r4_d: "Változó fókusztávolsággal",
    r5_q1_q: "A kamerák milyen típusú lencsét használnak a fény fókuszálásához és képek rögzítéséhez?", r5_q1_a: "Domború", r5_q1_b: "Homorú", r5_q1_c: "Lapos", r5_q1_d: "Csak egy oldal görbült",
    r5_q2_q: "A rövidlátó személynél milyen típusú lencse segít a látás korrekciójában?", r5_q2_a: "Homorú", r5_q2_b: "Domború", r5_q2_c: "Lapos", r5_q2_d: "Bifokális",
  },
  ro: {
    r1_title: "Lentile convexe", r1_text: "O lentilă convexă este mai groasă în mijloc și mai subțire la margini. Ea converge razele de lumină la un punct focal. Utilizare: lupă, camera și proiector. Punctul focal este unde se întâlnesc razele de lumină după trecerea prin lentilă.",
    r1_fact1: "O lupă este o lentilă convexă care converge lumina la un punct focal",
    r1_q: "O lentilă convexă face razele de lumină paralele...", r1_a: "Să convergă la un punct focal", r1_b: "Să divergă (se răspândească)", r1_c: "Să rămână paralele", r1_d: "Să se îndoiască aleatoriu",
    r2_title: "Lentile concave", r2_text: "O lentilă concavă este mai subțire în mijloc și mai groasă la margini. Ea diverge razele de lumină dintr-un punct focal. Utilizare: ochelari pentru miopi. Lentilele concave fac obiectele să pară mai mici și mai departe.",
    r2_fact1: "Ochelarii pentru oamenii miopi conțin lentile concave",
    r2_q: "O lentilă concavă face razele de lumină...", r2_a: "Să divergă (se răspândească)", r2_b: "Să convergă la un punct focal", r2_c: "Să rămână paralele", r2_d: "Să dispară",
    r3_title: "Imagini reale și virtuale", r3_text: "Imaginile reale pot fi proiectate pe un ecran (cum ar fi într-o cameră sau proiector). Imaginile virtuale nu pot fi proiectate; par să fie în spatele lentilei (ca într-o oglindă). O lupă produce o imagine virtuală care este mărită și dreaptă.",
    r3_fact1: "O lupă produce o imagine virtuală care pare mai mare și dreaptă",
    r3_q: "O lupă produce o imagine...", r3_a: "Virtuală, mărită, dreaptă", r3_b: "Reală, invertită", r3_c: "Virtuală, cu susul în jos", r3_d: "Reală, mărită",
    r4_title: "Distanța focală", r4_text: "Distanța focală este distanța de la centrul lentilei la punctul focal. O lentilă convexă mai groasă (mai curbă) are o distanță focală mai scurtă și focusează lumina mai puternic. O lentilă mai subțire are o distanță focală mai lungă. Lentilă mai groasă = distanță focală mai scurtă = mărire mai puternică.",
    r4_fact1: "O lentilă convexă mai groasă focusează lumina mai repede (distanță focală mai scurtă) decât o lentilă mai subțire",
    r4_q: "O lentilă convexă mai groasă are...", r4_a: "O distanță focală mai scurtă", r4_b: "O distanță focală mai lungă", r4_c: "Nicio distanță focală", r4_d: "O distanță focală variabilă",
    r5_q1_q: "Ce tip de lentilă folosesc camerele pentru a focaliza lumina și a forma imagini?", r5_q1_a: "Convexă", r5_q1_b: "Concavă", r5_q1_c: "Plană", r5_q1_d: "Curbă doar pe o parte",
    r5_q2_q: "Pentru o persoană mioapă, ce tip de lentilă ajută la corectarea vederii?", r5_q2_a: "Concavă", r5_q2_b: "Convexă", r5_q2_c: "Plană", r5_q2_d: "Bifocală",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🔍</text></svg>
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

export default function LensesExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
