"use client";
// ThermoExplorer — Thermal Expansion, Specific Heat, Phase Changes, Heat Engines (Klasse 7)
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Thermal Expansion", r1_text: "When materials are heated, they expand (get bigger). When cooled, they contract (get smaller). This happens because atoms vibrate more when warm. Railroad tracks have gaps so they can expand in summer without buckling.",
    r1_fact1: "A 1-meter steel rod expands about 1 mm when heated by 100°C",
    r1_q: "Why do railroad tracks have gaps?", r1_a: "To allow for thermal expansion", r1_b: "To make them cheaper", r1_c: "To reduce noise", r1_d: "To catch rain",
    r2_title: "Specific Heat Capacity", r2_text: "Specific heat is the energy needed to raise 1 kg of a substance by 1°C. Water has a very high specific heat (4200 J/kg°C), meaning it takes a lot of energy to heat it. Sand has low specific heat, so it heats quickly in the sun and cools quickly at night.",
    r2_fact1: "Oceans have high specific heat, so they regulate Earth's climate",
    r2_q: "Which substance has the highest specific heat?", r2_a: "Water", r2_b: "Sand", r2_c: "Iron", r2_d: "Copper",
    r3_title: "Phase Changes", r3_text: "Phase changes happen when matter changes state: melting (solid→liquid), freezing (liquid→solid), boiling (liquid→gas), condensing (gas→liquid). During phase changes, energy is absorbed or released, but temperature stays constant until the change completes.",
    r3_fact1: "Ice at 0°C and water at 0°C can coexist during melting",
    r3_q: "During melting, what happens to temperature?", r3_a: "It stays constant", r3_b: "It increases rapidly", r3_c: "It decreases", r3_d: "It fluctuates",
    r4_title: "Heat Engines", r4_text: "Heat engines convert thermal energy (heat) into mechanical work. Examples: car engines (gasoline ignites, pushes pistons), steam turbines (steam drives blades). Efficiency is limited by thermodynamic laws—no engine can convert 100% of heat to work.",
    r4_fact1: "Most car engines are only about 30% efficient, wasting 70% as heat",
    r4_q: "A heat engine converts...", r4_a: "Thermal energy into mechanical work", r4_b: "Mechanical work into thermal energy", r4_c: "Light into heat", r4_d: "Sound into motion",
    r5_q1_q: "When you heat a substance, what happens to its atoms?", r5_q1_a: "They vibrate more", r5_q1_b: "They move slower", r5_q1_c: "They disappear", r5_q1_d: "They split apart",
    r5_q2_q: "Why does sand heat up faster than water in the sun?", r5_q2_a: "Sand has lower specific heat", r5_q2_b: "Sand is darker", r5_q2_c: "Water has better conduction", r5_q2_d: "Sand attracts more sunlight",
  },
  de: {
    r1_title: "Wärmeausdehnung", r1_text: "Wenn Materialien erhitzt werden, dehnen sie sich aus. Wenn sie abgekühlt werden, ziehen sie sich zusammen. Dies geschieht, weil Atome bei Wärme stärker vibrieren. Eisenbahnschienen haben Lücken, damit sie sich im Sommer ausdehnen können, ohne zu verbiegen.",
    r1_fact1: "Eine 1-Meter-Stahlstange dehnt sich um etwa 1 mm bei Erwärmung um 100°C aus",
    r1_q: "Warum haben Eisenbahnschienen Lücken?", r1_a: "Um Wärmeausdehnung zu ermöglichen", r1_b: "Um sie billiger zu machen", r1_c: "Um Lärm zu reduzieren", r1_d: "Um Regen zu fangen",
    r2_title: "Spezifische Wärmekapazität", r2_text: "Spezifische Wärme ist die Energie, die benötigt wird, um 1 kg eines Stoffes um 1°C zu erwärmen. Wasser hat sehr hohe spezifische Wärme (4200 J/kg°C), daher braucht es viel Energie zum Erhitzen. Sand hat niedrige spezifische Wärme, deshalb heizt es sich schnell in der Sonne auf und kühlt schnell in der Nacht ab.",
    r2_fact1: "Ozeane haben hohe spezifische Wärme und regulieren Erdklima",
    r2_q: "Welcher Stoff hat die höchste spezifische Wärmekapazität?", r2_a: "Wasser", r2_b: "Sand", r2_c: "Eisen", r2_d: "Kupfer",
    r3_title: "Phasenübergänge", r3_text: "Phasenübergänge treten auf, wenn sich Materie ändert: Schmelzen (fest→flüssig), Erstarren (flüssig→fest), Kochen (flüssig→gas), Kondensieren (gas→flüssig). Während Phasenübergängen wird Energie aufgenommen oder abgegeben, aber die Temperatur bleibt konstant, bis die Änderung abgeschlossen ist.",
    r3_fact1: "Eis bei 0°C und Wasser bei 0°C können während des Schmelzens koexistieren",
    r3_q: "Was passiert mit der Temperatur beim Schmelzen?", r3_a: "Sie bleibt konstant", r3_b: "Sie steigt schnell", r3_c: "Sie sinkt", r3_d: "Sie schwankt",
    r4_title: "Wärmekraftmaschinen", r4_text: "Wärmekraftmaschinen wandeln Wärmeenergie in mechanische Arbeit um. Beispiele: Automotoren (Benzin zündet, bewegt Kolben), Dampfturbinen (Dampf treibt Schaufeln). Die Effizienz ist durch thermodynamische Gesetze begrenzt—kein Motor kann 100% der Wärme in Arbeit umwandeln.",
    r4_fact1: "Die meisten Automotoren sind nur etwa 30% effizient und verschwenden 70% als Wärme",
    r4_q: "Eine Wärmekraftmaschine wandelt um...", r4_a: "Wärmeenergie in mechanische Arbeit", r4_b: "Mechanische Arbeit in Wärmeenergie", r4_c: "Licht in Wärme", r4_d: "Schall in Bewegung",
    r5_q1_q: "Was passiert mit Atomen, wenn Sie einen Stoff erhitzen?", r5_q1_a: "Sie vibrieren mehr", r5_q1_b: "Sie bewegen sich langsamer", r5_q1_c: "Sie verschwinden", r5_q1_d: "Sie teilen sich auf",
    r5_q2_q: "Warum heizt sich Sand schneller als Wasser in der Sonne auf?", r5_q2_a: "Sand hat niedrigere spezifische Wärme", r5_q2_b: "Sand ist dunkler", r5_q2_c: "Wasser leitet besser", r5_q2_d: "Sand zieht mehr Sonnenlicht an",
  },
  hu: {
    r1_title: "Hőtágulás", r1_text: "Amikor anyagokat melegítünk, kitágulnak. Amikor lehűtjük, összehúzódnak. Ez azért történik, mert az atomok jobban rezegnek, amikor melegek. A vasúti sínek hézagokkal rendelkeznek, hogy nyáron kitágulhassanak anélkül, hogy megcsavarlódnának.",
    r1_fact1: "Egy 1 méter hosszú acélrúd 100°C melegedéskor körülbelül 1 mm-t tágul",
    r1_q: "Miért vannak hézagok a vasúti síneknél?", r1_a: "A hőtágulás megengedésére", r1_b: "Hogy olcsóbbak legyenek", r1_c: "A zaj csökkentésére", r1_d: "Az eső elfogására",
    r2_title: "Fajlagos hőkapacitás", r2_text: "A fajlagos hő az energia, amely 1 kg anyag 1°C-os emelésére szükséges. A víznek nagyon magas fajlagos hőkapacitása van (4200 J/kg°C), ezért sok energia szükséges a melegítéshez. A homoknak alacsony fajlagos hője van, ezért gyorsan felmelegszik a napban, és gyorsan lehűl éjszaka.",
    r2_fact1: "Az óceánok nagy fajlagos hővel rendelkeznek, és szabályozzák a Föld klímáját",
    r2_q: "Melyik anyagnak a legmagasabb a fajlagos hőkapacitása?", r2_a: "Víz", r2_b: "Homok", r2_c: "Vas", r2_d: "Réz",
    r3_title: "Fázisátmenet", r3_text: "Fázisátmenet akkor történik, amikor az anyag megváltoztatja halmazállapotát: olvadás (szilárd→folyékony), fagyás (folyékony→szilárd), forrás (folyékony→gáz), kondenzáció (gáz→folyékony). A fázisátmenet során energia felszabadul vagy felszívódik, de a hőmérséklet konstans marad.",
    r3_fact1: "A jég 0°C-on és a víz 0°C-on koegzisztálhatnak az olvadás alatt",
    r3_q: "Mi történik a hőmérséklettel az olvadás során?", r3_a: "Állandó marad", r3_b: "Gyorsan emelkedik", r3_c: "Csökken", r3_d: "Ingadozik",
    r4_title: "Hőmotor", r4_text: "A hőmotorok hőenergiát alakítanak mechanikai munkává. Példák: autómotorok (benzin gyullad, dugattyúkat mozgat), gőzturbinák (gőz hajtja a lapátokat). A hatásfok termodinamikai törvények által korlátozott—egyetlen motor sem alakíthatja 100%-ban át a hőt munkává.",
    r4_fact1: "A legtöbb autómotor csak körülbelül 30% hatásfokú, 70% energiát veszít hőként",
    r4_q: "A hőmotor átalakulást végez...", r4_a: "Hőenergia mechanikai munkává", r4_b: "Mechanikai munka hőenergiává", r4_c: "Fény hőenergiává", r4_d: "Hang mozgássá",
    r5_q1_q: "Mi történik az atomokkal, amikor melegít egy anyagot?", r5_q1_a: "Több rezegnek", r5_q1_b: "Lassabban mozognak", r5_q1_c: "Eltűnnek", r5_q1_d: "Szétválnak",
    r5_q2_q: "Miért melegszik fel a homok gyorsabban, mint a víz a napban?", r5_q2_a: "A homoknak alacsonyabb a fajlagos hője", r5_q2_b: "A homok sötétebb", r5_q2_c: "A víz jobban vezeti a hőt", r5_q2_d: "A homok több napfényt vonz",
  },
  ro: {
    r1_title: "Dilatare termică", r1_text: "Când materialele sunt încălzite, se dilată. Când sunt răcite, se contractă. Aceasta se întâmplă deoarece atomii vibrează mai mult când sunt caldi. Șinele de cale ferată au goluri pentru a se putea dilata vara fără să se deformeze.",
    r1_fact1: "O tijă de oțel de 1 metru se dilată cu aproximativ 1 mm la încălzire cu 100°C",
    r1_q: "De ce au goluri șinele de cale ferată?", r1_a: "Pentru a permite dilatarea termică", r1_b: "Pentru a fi mai ieftine", r1_c: "Pentru a reduce zgomotul", r1_d: "Pentru a prinde ploaia",
    r2_title: "Capacitate termică specifică", r2_text: "Căldura specifică este energia necesară pentru a ridica 1 kg dintr-o substanță cu 1°C. Apa are o capacitate termică specifică foarte ridicată (4200 J/kg°C), ceea ce înseamnă că ia mult timp să se încălzească. Nisipul are o capacitate termică specifică scăzută, deci se încălzește rapid în soare și se răcește rapid noaptea.",
    r2_fact1: "Oceanele au o capacitate termică specifică ridicată și reglează clima Pământului",
    r2_q: "Care substanță are cea mai ridicată capacitate termică specifică?", r2_a: "Apa", r2_b: "Nisipul", r2_c: "Fierul", r2_d: "Cuprul",
    r3_title: "Schimbări de fază", r3_text: "Schimbările de fază apar când materia schimbă stare: topire (solid→lichid), congelare (lichid→solid), fierbere (lichid→gaz), condensare (gaz→lichid). În timpul schimbărilor de fază, energia este absorbită sau eliberată, dar temperatura rămâne constantă.",
    r3_fact1: "Gheața la 0°C și apa la 0°C pot coexista în timp ce gheața se topește",
    r3_q: "Ce se întâmplă cu temperatura în timpul topirii?", r3_a: "Rămâne constantă", r3_b: "Crește rapid", r3_c: "Scade", r3_d: "Fluctuează",
    r4_title: "Motoare termice", r4_text: "Motoarele termice convertesc energia termică în lucru mecanic. Exemple: motoare auto (benzina aprinde, mută pistonii), turbine cu abur (aburul conduce paletele). Eficiența este limitată de legi termodinamice—niciun motor nu poate converti 100% din căldură în lucru.",
    r4_fact1: "Cele mai multe motoare auto sunt eficiente doar la 30%, risipind 70% în căldură",
    r4_q: "Un motor termic convertește...", r4_a: "Energia termică în lucru mecanic", r4_b: "Lucrul mecanic în energie termică", r4_c: "Lumina în căldură", r4_d: "Sunetul în mișcare",
    r5_q1_q: "Ce se întâmplă cu atomii atunci când încălzești o substanță?", r5_q1_a: "Vibrează mai mult", r5_q1_b: "Se mișcă mai încet", r5_q1_c: "Dispar", r5_q1_d: "Se împart",
    r5_q2_q: "De ce se încălzește nisipul mai repede decât apa la soare?", r5_q2_a: "Nisipul are o capacitate termică specifică mai scăzută", r5_q2_b: "Nisipul este mai întunecat", r5_q2_c: "Apa conduce mai bine", r5_q2_d: "Nisipul atrage mai multă lumină solară",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#5e1a1a"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌡️</text></svg>
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

export default function ThermoExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
