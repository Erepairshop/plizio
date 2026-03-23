"use client";
// NewtonExplorer — Newton's Three Laws of Motion (Newtons Bewegungsgesetze) Klasse 7
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Newton's First Law", r1_text: "Objects at rest stay at rest. Objects in motion stay in motion unless acted on by an external force. This is called inertia. It explains why passengers lurch forward when a car brakes suddenly.",
    r1_fact1: "A ball rolling on a smooth ice floor continues rolling without slowing down",
    r1_q: "Why does a rolling ball keep rolling on a smooth floor?", r1_a: "Inertia (Newton's 1st law)", r1_b: "Gravity", r1_c: "Friction", r1_d: "Air resistance",
    r2_title: "Newton's Second Law", r2_text: "Force equals mass times acceleration: F = m × a. A larger force produces more acceleration. A larger mass requires more force for the same acceleration. Doubling force doubles acceleration.",
    r2_fact1: "If you double the pushing force on an object, its acceleration doubles",
    r2_q: "If you double the force on an object, the acceleration...", r2_a: "Doubles", r2_b: "Stays the same", r2_c: "Halves", r2_d: "Quadruples",
    r3_title: "Newton's Third Law", r3_text: "For every action, there is an equal and opposite reaction. When you push a wall, the wall pushes back with equal force. Rockets work by pushing fuel downward; the fuel pushes the rocket upward.",
    r3_fact1: "A swimmer pushes water backward to move forward",
    r3_q: "When you push a wall, the wall...", r3_a: "Pushes back with equal force", r3_b: "Pushes back with less force", r3_c: "Does not push back", r3_d: "Absorbs the force",
    r4_title: "Applications of Newton's Laws", r4_text: "Seatbelts protect us from inertia (1st law). Air bags reduce injury by spreading force (2nd law). Rockets accelerate by ejecting fuel (3rd law). Understanding these laws helps us predict motion.",
    r4_fact1: "Seatbelts work because objects want to keep moving due to inertia",
    r4_q: "Seatbelts protect you because of...", r4_a: "Newton's 1st law (inertia)", r4_b: "Newton's 2nd law", r4_c: "Newton's 3rd law", r4_d: "Gravity",
    r5_q1_q: "A heavy truck requires more force to accelerate than a bicycle because of...", r5_q1_a: "Newton's 2nd law (F=ma)", r5_q1_b: "Newton's 1st law", r5_q1_c: "Friction", r5_q1_d: "Gravity",
    r5_q2_q: "A rocket launches by ejecting hot gases downward. This is an example of...", r5_q2_a: "Newton's 3rd law (action-reaction)", r5_q2_b: "Newton's 1st law", r5_q2_c: "Newton's 2nd law", r5_q2_d: "Friction",
  },
  de: {
    r1_title: "Newtons erstes Gesetz", r1_text: "Ruhende Objekte bleiben in Ruhe. Sich bewegende Objekte bleiben in Bewegung, solange keine externe Kraft wirkt. Dies wird Trägheit genannt. Es erklärt, warum Insassen nach vorne schleudern, wenn ein Auto plötzlich bremst.",
    r1_fact1: "Ein Ball, der auf einem glatten Eisboden rollt, rollt weiter, ohne zu verlangsamen",
    r1_q: "Warum rollt ein rollender Ball auf einem glatten Boden weiter?", r1_a: "Trägheit (Newtons 1. Gesetz)", r1_b: "Gravitation", r1_c: "Reibung", r1_d: "Luftwiderstand",
    r2_title: "Newtons zweites Gesetz", r2_text: "Kraft ist Masse mal Beschleunigung: F = m × a. Eine größere Kraft führt zu mehr Beschleunigung. Eine größere Masse erfordert mehr Kraft für dieselbe Beschleunigung. Die Verdopplung der Kraft verdoppelt die Beschleunigung.",
    r2_fact1: "Wenn du die Kraft auf ein Objekt verdoppelst, verdoppelt sich seine Beschleunigung",
    r2_q: "Wenn du die Kraft auf ein Objekt verdoppelst, die Beschleunigung...", r2_a: "Verdoppelt sich", r2_b: "Bleibt gleich", r2_c: "Halbiert sich", r2_d: "Vervierfacht sich",
    r3_title: "Newtons drittes Gesetz", r3_text: "Für jede Aktion gibt es eine gleiche und entgegengesetzte Reaktion. Wenn du eine Wand drückst, drückt die Wand mit gleicher Kraft zurück. Raketen funktionieren, indem sie Treibstoff nach unten drücken; der Treibstoff drückt die Rakete nach oben.",
    r3_fact1: "Ein Schwimmer drückt Wasser nach hinten, um sich vorwärts zu bewegen",
    r3_q: "Wenn du eine Wand drückst, die Wand...", r3_a: "Drückt mit gleicher Kraft zurück", r3_b: "Drückt mit weniger Kraft zurück", r3_c: "Drückt nicht zurück", r3_d: "Absorbiert die Kraft",
    r4_title: "Anwendungen der Newtonschen Gesetze", r4_text: "Sicherheitsgurte schützen uns vor Trägheit (1. Gesetz). Airbags verringern Verletzungen, indem sie die Kraft verteilen (2. Gesetz). Raketen beschleunigen, indem sie Treibstoff ausstoßen (3. Gesetz).",
    r4_fact1: "Sicherheitsgurte funktionieren, weil Objekte aufgrund von Trägheit weiterhin bewegt werden wollen",
    r4_q: "Sicherheitsgurte schützen dich wegen...", r4_a: "Newtons 1. Gesetz (Trägheit)", r4_b: "Newtons 2. Gesetz", r4_c: "Newtons 3. Gesetz", r4_d: "Gravitation",
    r5_q1_q: "Ein schwerer Lastwagen benötigt mehr Kraft zum Beschleunigen als ein Fahrrad wegen...", r5_q1_a: "Newtons 2. Gesetz (F=ma)", r5_q1_b: "Newtons 1. Gesetz", r5_q1_c: "Reibung", r5_q1_d: "Gravitation",
    r5_q2_q: "Eine Rakete startet durch Ausstoß von heißen Gasen nach unten. Dies ist ein Beispiel für...", r5_q2_a: "Newtons 3. Gesetz (Aktion-Reaktion)", r5_q2_b: "Newtons 1. Gesetz", r5_q2_c: "Newtons 2. Gesetz", r5_q2_d: "Reibung",
  },
  hu: {
    r1_title: "Newton első törvénye", r1_text: "Az objektumok, amelyek nyugalomban vannak, nyugalomban maradnak. Az objektumok, amelyek mozgásban vannak, mozgásban maradnak, hacsak valamilyen külső erő nem hat rájuk. Ezt tehetetlenségnek hívják. Ez magyarázza, miért vetődnek az utasok előre, amikor egy autó hirtelen fékezik.",
    r1_fact1: "Egy labda, amely sima jégtálon gördül, továbbgördül, anélkül hogy lassulna",
    r1_q: "Miért gördül egy gördülő labda tovább a sima tálon?", r1_a: "Tehetetlenség (Newton 1. törvénye)", r1_b: "Gravitáció", r1_c: "Súrlódás", r1_d: "Légellenállás",
    r2_title: "Newton második törvénye", r2_text: "Az erő egyenlő a tömeggel szorozva a gyorsulással: F = m × a. Nagyobb erő nagyobb gyorsuláshoz vezet. Nagyobb tömeg azonos gyorsuláshoz nagyobb erőt igényel. Az erő megduplázása megduplázza a gyorsulást.",
    r2_fact1: "Ha megduplázod az erőt az objektumon, a gyorsulás megduplázódik",
    r2_q: "Ha megduplázod az erőt az objektumon, a gyorsulás...", r2_a: "Megduplázódik", r2_b: "Ugyanaz marad", r2_c: "Feleződik", r2_d: "Négyszereződik",
    r3_title: "Newton harmadik törvénye", r3_text: "Minden erőhöz tartozik egy egyenlő és ellentétes reakció. Amikor falat nyomsz, a fal egyenlő erővel nyom vissza. A rakéták úgy működnek, hogy lefelé tolják az üzemanyagot; az üzemanyag a rakétát felfelé tolja.",
    r3_fact1: "Egy úszó hátrafelé nyomja a vizet, hogy előre mozogjon",
    r3_q: "Amikor falat nyomsz, a fal...", r3_a: "Egyenlő erővel nyom vissza", r3_b: "Kevesebb erővel nyom vissza", r3_c: "Nem nyom vissza", r3_d: "Felszívja az erőt",
    r4_title: "Newton törvényeinek alkalmazásai", r4_text: "A biztonsági övet a tehetetlenség előtti védelmet nyújtanak (1. törvény). A légzsákok csökkentik a sérüléseket az erő szétterítésével (2. törvény). A rakéták az üzemanyag kibocsátásával gyorsulnak (3. törvény).",
    r4_fact1: "A biztonsági övek azért működnek, mert az objektumok a tehetetlenség miatt tovább akarnak mozogni",
    r4_q: "A biztonsági övek azért védik meg a... miatt", r4_a: "Newton 1. törvénye (tehetetlenség)", r4_b: "Newton 2. törvénye", r4_c: "Newton 3. törvénye", r4_d: "Gravitáció",
    r5_q1_q: "Egy nehéz teherautó több erőt igényel a gyorsuláshoz, mint egy kerékpár... miatt", r5_q1_a: "Newton 2. törvénye (F=ma)", r5_q1_b: "Newton 1. törvénye", r5_q1_c: "Súrlódás", r5_q1_d: "Gravitáció",
    r5_q2_q: "Egy rakéta forró gázokat lövell ki lefelé az indításhoz. Ez egy példája...-nak", r5_q2_a: "Newton 3. törvényének (akció-reakció)", r5_q2_b: "Newton 1. törvényének", r5_q2_c: "Newton 2. törvényének", r5_q2_d: "Súrlódásnak",
  },
  ro: {
    r1_title: "Legea întâia a lui Newton", r1_text: "Obiectele în repaus rămân în repaus. Obiectele în mișcare rămân în mișcare, cu excepția cazului în care o forță externă acționează. Aceasta se numește inerție. Explică de ce pasagerii se azvârl înainte când o mașină frânează brusc.",
    r1_fact1: "O minge care se rostogolește pe o suprafață netedă de gheață continuă să se rostogolească fără a încetini",
    r1_q: "De ce continuă o minge care se rostogolește pe o suprafață netă?", r1_a: "Inerție (legea 1 a lui Newton)", r1_b: "Gravitație", r1_c: "Frecare", r1_d: "Rezistență la aer",
    r2_title: "Legea a doua a lui Newton", r2_text: "Forța este egală cu masa înmulțită cu accelerația: F = m × a. O forță mai mare produce mai multă accelerație. O masă mai mare necesită mai multă forță pentru aceeași accelerație. Dublarea forței dublează accelerația.",
    r2_fact1: "Dacă dublezi forța pe un obiect, accelerația sa se dublează",
    r2_q: "Dacă dublezi forța pe un obiect, accelerația...", r2_a: "Se dublează", r2_b: "Rămâne la fel", r2_c: "Se înjumătățește", r2_d: "Se cvadruplez",
    r3_title: "Legea a treia a lui Newton", r3_text: "Pentru fiecare acțiune, există o reacție egală și opusă. Când împingi un perete, peretele te împinge înapoi cu forță egală. Rachetele funcționează prin împingerea combustibilului în jos; combustibilul împinge racheta în sus.",
    r3_fact1: "Un înnotător împinge apa înapoi pentru a se deplasa înainte",
    r3_q: "Când împingi un perete, peretele...", r3_a: "Te împinge înapoi cu forță egală", r3_b: "Te împinge înapoi cu mai puțină forță", r3_c: "Nu te împinge înapoi", r3_d: "Absoarbe forța",
    r4_title: "Aplicații ale legilor lui Newton", r4_text: "Centurile de siguranță ne protejează de inerție (legea 1). Airbag-urile reduc rănile prin răspândirea forței (legea 2). Rachetele accelerează prin expulzarea combustibilului (legea 3).",
    r4_fact1: "Centurile de siguranță funcționează deoarece obiectele vor să continue să se miște din cauza inerției",
    r4_q: "Centurile de siguranță te protejează din cauza...", r4_a: "Legii 1 a lui Newton (inerție)", r4_b: "Legii 2 a lui Newton", r4_c: "Legii 3 a lui Newton", r4_d: "Gravitației",
    r5_q1_q: "Un camion greu necesită mai multă forță pentru a accelera decât o bicicletă din cauza...", r5_q1_a: "Legii 2 a lui Newton (F=ma)", r5_q1_b: "Legii 1 a lui Newton", r5_q1_c: "Frecării", r5_q1_d: "Gravitației",
    r5_q2_q: "O rachetă se lansează prin expulzarea gazelor fierbinți în jos. Acesta este un exemplu de...", r5_q2_a: "Legea 3 a lui Newton (acțiune-reacție)", r5_q2_b: "Legea 1 a lui Newton", r5_q2_c: "Legea 2 a lui Newton", r5_q2_d: "Frecare",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🍎</text></svg>
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

export default function NewtonExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
