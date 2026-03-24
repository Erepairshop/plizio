"use client";
// TechMachinesExplorer.tsx — Sachkunde Island i7: Technology & Energy (K3)
// Topics: 1) Egyszerű gépek 2) Energiaforrások 3) Járművek 4) Elektromos áramkör 5) Keresd a fogaskerekeket!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F1F5F9" rx="20" />
      {/* Lejtő */}
      <g transform="translate(40, 90)">
        <polygon points="-20,20 20,20 20,-10" fill="#94A3B8" />
        <polygon points="-20,20 20,-10 20,20" fill="#CBD5E1" opacity="0.5" />
        <rect x="-10" y="-2" width="12" height="12" fill="#F59E0B" transform="rotate(35)" />
      </g>
      {/* Emelő (Mérleghinta) */}
      <g transform="translate(120, 90)">
        <polygon points="-5,20 5,20 0,5" fill="#475569" />
        <line x1="-25" y1="5" x2="25" y2="5" stroke="#D97706" strokeWidth="4" strokeLinecap="round" transform="rotate(15)" />
        <rect x="-25" y="-15" width="10" height="10" fill="#3B82F6" transform="translate(0, 10) rotate(15)" />
      </g>
      {/* Kerék */}
      <g transform="translate(200, 90)">
        <circle cx="0" cy="5" r="15" fill="#FFFFFF" stroke="#1E293B" strokeWidth="4" />
        <circle cx="0" cy="5" r="3" fill="#1E293B" />
        <line x1="0" y1="-10" x2="0" y2="20" stroke="#1E293B" strokeWidth="2" />
        <line x1="-15" y1="5" x2="15" y2="5" stroke="#1E293B" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEFCE8" rx="20" />
      {/* Megújuló (Nap, Szél) */}
      <g transform="translate(60, 70)">
        <circle cx="-15" cy="-15" r="12" fill="#FBBF24" />
        <line x1="-15" y1="-32" x2="-15" y2="-3" stroke="#F59E0B" strokeWidth="2" />
        <line x1="-32" y1="-15" x2="-3" y2="-15" stroke="#F59E0B" strokeWidth="2" />
        
        {/* Szélturbina */}
        <line x1="15" y1="20" x2="15" y2="-5" stroke="#94A3B8" strokeWidth="3" />
        <circle cx="15" cy="-5" r="3" fill="#64748B" />
        <line x1="15" y1="-5" x2="5" y2="-20" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="15" y1="-5" x2="25" y2="-20" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="15" y1="-5" x2="15" y2="10" stroke="#CBD5E1" strokeWidth="2" />
      </g>
      {/* Elválasztó vonal */}
      <line x1="120" y1="20" x2="120" y2="120" stroke="#E2E8F0" strokeWidth="4" strokeDasharray="6 6" />
      {/* Nem megújuló (Olaj, Szén) */}
      <g transform="translate(180, 70)">
        <path d="M 10,0 Q 20,15 10,20 Q 0,15 10,0 Z" fill="#1E293B" />
        <polygon points="-15,-10 -5,5 -25,10" fill="#334155" />
        <polygon points="-15,-10 -5,5 -15,-5" fill="#475569" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Repülő (Ég) */}
      <g transform="translate(120, 35)">
        <ellipse cx="0" cy="0" rx="30" ry="8" fill="#FFFFFF" />
        <polygon points="-10,0 -20,15 5,0" fill="#94A3B8" />
        <polygon points="-10,0 -20,-15 5,0" fill="#94A3B8" />
        <polygon points="-25,0 -35,-8 -25,0" fill="#94A3B8" />
        <path d="M 15,-5 Q 25,-5 25,0 Q 25,5 15,5 Z" fill="#38BDF8" />
      </g>
      {/* Vonat (Föld) */}
      <g transform="translate(120, 100)">
        <line x1="-60" y1="15" x2="60" y2="15" stroke="#64748B" strokeWidth="3" />
        <rect x="-40" y="-10" width="80" height="20" fill="#EF4444" rx="4" />
        <rect x="25" y="-5" width="10" height="10" fill="#BAE6FD" />
        <rect x="5" y="-5" width="10" height="10" fill="#BAE6FD" />
        <rect x="-15" y="-5" width="10" height="10" fill="#BAE6FD" />
        <circle cx="-30" cy="10" r="4" fill="#1E293B" />
        <circle cx="-10" cy="10" r="4" fill="#1E293B" />
        <circle cx="10" cy="10" r="4" fill="#1E293B" />
        <circle cx="30" cy="10" r="4" fill="#1E293B" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        {/* Áramkör vezetékei */}
        <rect x="-60" y="-30" width="120" height="60" fill="none" stroke="#94A3B8" strokeWidth="4" />
        {/* Elem */}
        <g transform="translate(0, 30)">
          <rect x="-15" y="-8" width="30" height="16" fill="#FCA5A5" />
          <rect x="-15" y="-8" width="10" height="16" fill="#1E293B" />
          <rect x="15" y="-4" width="4" height="8" fill="#94A3B8" />
        </g>
        {/* Izzó */}
        <g transform="translate(0, -30)">
          <circle cx="0" cy="-15" r="15" fill="#FDE047" />
          <path d="M -5,-5 L -5,5 L 5,5 L 5,-5 Z" fill="#94A3B8" />
          <line x1="-5" y1="-5" x2="0" y2="-15" stroke="#D97706" strokeWidth="2" />
          <line x1="5" y1="-5" x2="0" y2="-15" stroke="#D97706" strokeWidth="2" />
          {/* Fényvonalak */}
          <line x1="0" y1="-35" x2="0" y2="-45" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
          <line x1="-20" y1="-15" x2="-30" y2="-15" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="-15" x2="30" y2="-15" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E2E8F0" rx="20" />
      {/* Gépezet belseje (Nagyobb fogaskerekek) */}
      <g transform="translate(80, 70)">
        <circle cx="0" cy="0" r="35" fill="#94A3B8" />
        <circle cx="0" cy="0" r="10" fill="#F1F5F9" />
        <path d="M -40,0 L 40,0 M 0,-40 L 0,40 M -28,-28 L 28,28 M -28,28 L 28,-28" stroke="#94A3B8" strokeWidth="8" />
      </g>
      <g transform="translate(160, 40)">
        <circle cx="0" cy="0" r="25" fill="#64748B" />
        <circle cx="0" cy="0" r="8" fill="#F1F5F9" />
        <path d="M -30,0 L 30,0 M 0,-30 L 0,30 M -20,-20 L 20,20 M -20,20 L 20,-20" stroke="#64748B" strokeWidth="6" />
      </g>
      {/* Tap-count emoji-k fognak megjelenni ezen a vásznon */}
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Technológia és Energia",
    // T1: Egyszerű gépek
    t1_title: "Az egyszerű gépek",
    t1_text: "Az emberek évezredek óta használnak egyszerű gépeket, hogy könnyebbé tegyék a nehéz munkákat.",
    t1_b1: "A lejtő segít feljuttatni a nehéz dolgokat a magasba.",
    t1_b2: "A kerék gurul, így sokkal könnyebb húzni a szekeret.",
    t1_b3: "Az emelővel kis erővel is megemelhetünk nagy súlyokat.",
    t1_inst: "Párosítsd a gépet azzal, miben segít!",
    t1_l1: "Lejtő", t1_r1: "Könnyebben feltolhatsz rajta dolgokat",
    t1_l2: "Kerék", t1_r2: "Gurul, könnyebb vele húzni",
    t1_l3: "Emelő", t1_r3: "Kevés erővel nagy súlyt emel",
    t1_q: "Melyik egyszerű gép található az autókon és a bicikliken?",
    t1_q_a: "A kerék", t1_q_b: "A lejtő", t1_q_c: "Az emelő", t1_q_d: "A csavar",

    // T2: Energiaforrások
    t2_title: "Honnan van energiánk?",
    t2_text: "A gépek működéséhez energia kell. Vannak energiák, amik sosem fogynak el, és vannak, amik egyszer elfogynak és szennyezik a Földet.",
    t2_b1: "A megújuló energia (nap, szél) sosem fogy el és tiszta.",
    t2_b2: "A fosszilis energia (szén, olaj) füstöl, és egyszer elfogy.",
    t2_b3: "Vigyáznunk kell a Földre, használjunk tiszta energiát!",
    t2_inst: "Válogasd szét az energiaforrásokat!",
    t2_bucket_megujulo: "Megújuló (Tiszta)",
    t2_bucket_fosszilis: "Fosszilis (Fogyó)",
    t2_item_m1: "Napfény", t2_item_m2: "Szél (Szélturbina)",
    t2_item_f1: "Szén", t2_item_f2: "Kőolaj",
    t2_q: "Miért jó a nap- és szélenergia?",
    t2_q_a: "Mert sosem fogynak el és nem szennyeznek", t2_q_b: "Mert füstölnek", t2_q_c: "Mert nagyon ritkák", t2_q_d: "Mert fekete színűek",

    // T3: Járművek (Highlight-text) - Cél indexek: [1, 4]
    t3_title: "Járművek mozgásban",
    t3_text: "A járművek arra valók, hogy embereket vagy árukat szállítsanak a földön, a vízen vagy a levegőben.",
    t3_b1: "A repülőgép nagyon gyorsan száll a felhők között.",
    t3_b2: "A vonat a síneken fut a földön.",
    t3_b3: "A hajók pedig a tengereken és a folyókon úsznak.",
    t3_inst: "Keresd meg és jelöld meg a mondatban a KÉT járművet!",
    t3_tok0: "A", t3_tok1: "vonat", t3_tok2: "és", t3_tok3: "a", t3_tok4: "repülő", t3_tok5: "nagyon", t3_tok6: "gyorsak.",
    t3_q: "Hol közlekedik a vonat?",
    t3_q_a: "A síneken", t3_q_b: "Az égen", t3_q_c: "A víz alatt", t3_q_d: "Az űrben",

    // T4: Elektromosság (Label-diagram)
    t4_title: "Az elektromos áramkör",
    t4_text: "A villanykörte csak akkor világít, ha az elektromosság egy zárt körben, az áramkörben haladhat.",
    t4_b1: "Az elem (akkumulátor) adja az energiát.",
    t4_b2: "A vezetékek (kábelek) szállítják az áramot.",
    t4_b3: "Az izzó (villanykörte) fényt ad, ha áramot kap.",
    t4_inst: "Keresd meg az áramkör részeit a rajzon!",
    t4_area_battery: "Elem (Energia)",
    t4_area_wire: "Vezeték",
    t4_area_bulb: "Izzó",
    t4_q: "Mi adja az energiát egy zseblámpában?",
    t4_q_a: "Az elem", t4_q_b: "Az izzó", t4_q_c: "A kapcsoló", t4_q_d: "A műanyag ház",

    // T5: Fogaskerekek (Tap-count)
    t5_title: "A gépek belseje",
    t5_text: "A nagy gépek, az órák és a biciklik belsejében gyakran fogaskerekek rejtőznek. Ezek kapcsolódnak össze és hajtják meg a gépet.",
    t5_b1: "A fogaskerekek fogai egymásba kapaszkodnak.",
    t5_b2: "Ha az egyik elfordul, forgatja a másikat is.",
    t5_b3: "Keresd meg a fogaskerekeket a gépezetben!",
    t5_inst: "A gépezetben elbújt 5 kis fogaskerék. Bökj rájuk, hogy megszámold őket!",
    t5_q: "Mi történik, ha két fogaskerék összekapcsolódik és az egyik forogni kezd?",
    t5_q_a: "Forgatja a másikat is", t5_q_b: "Megáll a gép", t5_q_c: "Felrobban", t5_q_d: "Kiesik a kerék",
  },
  en: {
    explorer_title: "Technology & Energy",
    t1_title: "Simple Machines", t1_text: "Humans have used simple machines for thousands of years to make heavy work easier.",
    t1_b1: "An inclined plane helps move heavy things up.", t1_b2: "A wheel rolls, making it much easier to pull a cart.", t1_b3: "A lever lifts heavy weights with little force.",
    t1_inst: "Match the machine with how it helps!",
    t1_l1: "Inclined Plane", t1_r1: "Easier to push things up",
    t1_l2: "Wheel", t1_r2: "Rolls, easier to pull",
    t1_l3: "Lever", t1_r3: "Lifts heavy things easily",
    t1_q: "Which simple machine is found on cars and bicycles?",
    t1_q_a: "The wheel", t1_q_b: "The inclined plane", t1_q_c: "The lever", t1_q_d: "The screw",

    t2_title: "Where is our energy from?", t2_text: "Machines need energy to work. Some energy sources never run out, while others do and pollute the Earth.",
    t2_b1: "Renewable energy (sun, wind) never runs out and is clean.", t2_b2: "Fossil energy (coal, oil) smokes and will run out.", t2_b3: "We must protect the Earth, let's use clean energy!",
    t2_inst: "Sort the energy sources!",
    t2_bucket_megujulo: "Renewable (Clean)",
    t2_bucket_fosszilis: "Fossil (Runs out)",
    t2_item_m1: "Sunlight", t2_item_m2: "Wind turbine",
    t2_item_f1: "Coal", t2_item_f2: "Oil",
    t2_q: "Why are solar and wind energy good?",
    t2_q_a: "Because they never run out and don't pollute", t2_q_b: "Because they make smoke", t2_q_c: "Because they are rare", t2_q_d: "Because they are black",

    // Cél: [1, 4] -> train, airplane
    t3_title: "Vehicles in Motion", t3_text: "Vehicles are used to transport people or goods on land, water, or in the air.",
    t3_b1: "The airplane flies very fast in the clouds.", t3_b2: "The train runs on tracks on the ground.", t3_b3: "Ships float on seas and rivers.",
    t3_inst: "Find and mark the TWO vehicles in the sentence!",
    t3_tok0: "The", t3_tok1: "train", t3_tok2: "and", t3_tok3: "the", t3_tok4: "airplane", t3_tok5: "are", t3_tok6: "fast.",
    t3_q: "Where does the train travel?",
    t3_q_a: "On tracks", t3_q_b: "In the sky", t3_q_c: "Under water", t3_q_d: "In space",

    t4_title: "The Electric Circuit", t4_text: "A lightbulb only shines if electricity can travel in a closed loop, called a circuit.",
    t4_b1: "The battery gives the energy.", t4_b2: "The wires carry the electricity.", t4_b3: "The bulb gives light when it receives power.",
    t4_inst: "Find the parts of the circuit on the drawing!",
    t4_area_battery: "Battery (Energy)",
    t4_area_wire: "Wire",
    t4_area_bulb: "Lightbulb",
    t4_q: "What provides the energy in a flashlight?",
    t4_q_a: "The battery", t4_q_b: "The bulb", t4_q_c: "The switch", t4_q_d: "The plastic case",

    t5_title: "Inside the Machines", t5_text: "Inside big machines, clocks, and bicycles, gears are often hidden. They connect and drive the machine.",
    t5_b1: "The teeth of the gears interlock.", t5_b2: "If one turns, it turns the other too.", t5_b3: "Find the gears inside the machine!",
    t5_inst: "There are 5 small gears hidden in the machine. Tap to count them!",
    t5_q: "What happens if two gears connect and one starts spinning?",
    t5_q_a: "It turns the other one too", t5_q_b: "The machine stops", t5_q_c: "It explodes", t5_q_d: "The wheel falls out",
  },
  de: {
    explorer_title: "Technologie & Energie",
    t1_title: "Einfache Maschinen", t1_text: "Menschen nutzen seit Jahrtausenden einfache Maschinen, um schwere Arbeit leichter zu machen.",
    t1_b1: "Die schiefe Ebene hilft, schwere Dinge hochzuschieben.", t1_b2: "Das Rad rollt, so ist das Ziehen viel einfacher.", t1_b3: "Der Hebel hebt schwere Dinge mit wenig Kraft.",
    t1_inst: "Verbinde die Maschine damit, wie sie hilft!",
    t1_l1: "Schiefe Ebene", t1_r1: "Leichteres Hochschieben",
    t1_l2: "Rad", t1_r2: "Rollt, leichter zu ziehen",
    t1_l3: "Hebel", t1_r3: "Hebt Schweres leicht an",
    t1_q: "Welche einfache Maschine findet man an Autos und Fahrrädern?",
    t1_q_a: "Das Rad", t1_q_b: "Die schiefe Ebene", t1_q_c: "Den Hebel", t1_q_d: "Die Schraube",

    t2_title: "Woher kommt unsere Energie?", t2_text: "Maschinen brauchen Energie. Manche Energiequellen gehen nie aus, andere schon und verschmutzen die Erde.",
    t2_b1: "Erneuerbare Energie (Sonne, Wind) ist sauber und endlos.", t2_b2: "Fossile Energie (Kohle, Öl) raucht und wird leer.", t2_b3: "Wir müssen die Erde schützen, nutze saubere Energie!",
    t2_inst: "Sortiere die Energiequellen!",
    t2_bucket_megujulo: "Erneuerbar (Sauber)",
    t2_bucket_fosszilis: "Fossil (Wird leer)",
    t2_item_m1: "Sonnenlicht", t2_item_m2: "Windrad",
    t2_item_f1: "Kohle", t2_item_f2: "Erdöl",
    t2_q: "Warum sind Sonnen- und Windenergie gut?",
    t2_q_a: "Weil sie nie ausgehen und nicht verschmutzen", t2_q_b: "Weil sie rauchen", t2_q_c: "Weil sie selten sind", t2_q_d: "Weil sie schwarz sind",

    // Cél: [1, 4] -> Zug, Flugzeug
    t3_title: "Fahrzeuge in Bewegung", t3_text: "Fahrzeuge transportieren Menschen oder Waren an Land, auf dem Wasser oder in der Luft.",
    t3_b1: "Das Flugzeug fliegt sehr schnell in den Wolken.", t3_b2: "Der Zug fährt auf Schienen am Boden.", t3_b3: "Schiffe schwimmen auf Meeren und Flüssen.",
    t3_inst: "Finde und markiere die ZWEI Fahrzeuge im Satz!",
    t3_tok0: "Der", t3_tok1: "Zug", t3_tok2: "und", t3_tok3: "das", t3_tok4: "Flugzeug", t3_tok5: "sind", t3_tok6: "schnell.",
    t3_q: "Wo fährt der Zug?",
    t3_q_a: "Auf Schienen", t3_q_b: "Am Himmel", t3_q_c: "Unter Wasser", t3_q_d: "Im Weltraum",

    t4_title: "Der Stromkreis", t4_text: "Eine Glühbirne leuchtet nur, wenn der Strom in einem geschlossenen Kreis fließen kann.",
    t4_b1: "Die Batterie gibt die Energie.", t4_b2: "Die Kabel leiten den Strom.", t4_b3: "Die Glühbirne leuchtet, wenn sie Strom bekommt.",
    t4_inst: "Finde die Teile des Stromkreises auf dem Bild!",
    t4_area_battery: "Batterie (Energie)",
    t4_area_wire: "Kabel",
    t4_area_bulb: "Glühbirne",
    t4_q: "Was liefert die Energie in einer Taschenlampe?",
    t4_q_a: "Die Batterie", t4_q_b: "Die Glühbirne", t4_q_c: "Der Schalter", t4_q_d: "Das Plastikgehäuse",

    t5_title: "Im Inneren der Maschinen", t5_text: "In großen Maschinen, Uhren und Fahrrädern verstecken sich oft Zahnräder. Sie treiben die Maschine an.",
    t5_b1: "Die Zähne der Zahnräder greifen ineinander.", t5_b2: "Wenn sich eines dreht, dreht es auch das andere.", t5_b3: "Finde die Zahnräder in der Maschine!",
    t5_inst: "In der Maschine sind 5 kleine Zahnräder versteckt. Tippe sie an!",
    t5_q: "Was passiert, wenn zwei Zahnräder verbunden sind und eines sich dreht?",
    t5_q_a: "Es dreht auch das andere", t5_q_b: "Die Maschine hält an", t5_q_c: "Es explodiert", t5_q_d: "Das Rad fällt heraus",
  },
  ro: {
    explorer_title: "Tehnologie și Energie",
    t1_title: "Mașinării simple", t1_text: "Oamenii folosesc mașinării simple de mii de ani pentru a face munca grea mai ușoară.",
    t1_b1: "Planul înclinat ajută la ridicarea lucrurilor grele.", t1_b2: "Roata se rostogolește, fiind mai ușor să tragi ceva.", t1_b3: "Pârghia ridică greutăți mari cu puțină forță.",
    t1_inst: "Potrivește mașinăria cu modul în care ajută!",
    t1_l1: "Plan înclinat", t1_r1: "Împingi lucruri mai ușor",
    t1_l2: "Roată", t1_r2: "Se rostogolește, tragi mai ușor",
    t1_l3: "Pârghie", t1_r3: "Ridică greutăți cu forță mică",
    t1_q: "Ce mașinărie simplă găsim la mașini și biciclete?",
    t1_q_a: "Roata", t1_q_b: "Planul înclinat", t1_q_c: "Pârghia", t1_q_d: "Șurubul",

    t2_title: "De unde avem energie?", t2_text: "Mașinile au nevoie de energie. Unele surse nu se termină niciodată, altele se termină și poluează Pământul.",
    t2_b1: "Energia regenerabilă (soare, vânt) nu se termină și e curată.", t2_b2: "Energia fosilă (cărbune, petrol) scoate fum și se va termina.", t2_b3: "Trebuie să protejăm Pământul, folosiți energie curată!",
    t2_inst: "Sortează sursele de energie!",
    t2_bucket_megujulo: "Regenerabilă (Curată)",
    t2_bucket_fosszilis: "Fosilă (Se termină)",
    t2_item_m1: "Lumina soarelui", t2_item_m2: "Turbină eoliană",
    t2_item_f1: "Cărbune", t2_item_f2: "Petrol",
    t2_q: "De ce sunt bune energiile solară și eoliană?",
    t2_q_a: "Pentru că nu se termină și nu poluează", t2_q_b: "Pentru că fac fum", t2_q_c: "Pentru că sunt rare", t2_q_d: "Pentru că sunt negre",

    // Cél: [1, 4] -> tren, avion
    t3_title: "Vehicule în mișcare", t3_text: "Vehiculele sunt folosite pentru a transporta oameni sau mărfuri pe uscat, pe apă sau în aer.",
    t3_b1: "Avionul zboară foarte repede printre nori.", t3_b2: "Trenul merge pe șine pe pământ.", t3_b3: "Vapoarele plutesc pe mări și râuri.",
    t3_inst: "Găsește și marchează cele DOUĂ vehicule în propoziție!",
    t3_tok0: "Acest", t3_tok1: "tren", t3_tok2: "și", t3_tok3: "acest", t3_tok4: "avion", t3_tok5: "sunt", t3_tok6: "rapide.",
    t3_q: "Pe unde circulă trenul?",
    t3_q_a: "Pe șine", t3_q_b: "Pe cer", t3_q_c: "Sub apă", t3_q_d: "În spațiu",

    t4_title: "Circuitul electric", t4_text: "Un bec luminează doar dacă electricitatea poate călători într-un cerc închis, numit circuit.",
    t4_b1: "Bateria oferă energia.", t4_b2: "Cablurile transportă curentul.", t4_b3: "Becul dă lumină când primește curent.",
    t4_inst: "Găsește părțile circuitului pe desen!",
    t4_area_battery: "Baterie (Energie)",
    t4_area_wire: "Cablu",
    t4_area_bulb: "Bec",
    t4_q: "Ce oferă energia într-o lanternă?",
    t4_q_a: "Bateria", t4_q_b: "Becul", t4_q_c: "Întrerupătorul", t4_q_d: "Carcasa de plastic",

    t5_title: "În interiorul mașinilor", t5_text: "În mașinile mari, în ceasuri și la biciclete, se ascund adesea roți dințate. Ele conduc mașinăria.",
    t5_b1: "Dinții roților dințate se prind unii de alții.", t5_b2: "Dacă una se învârte, o rotește și pe cealaltă.", t5_b3: "Caută roțile dințate din mașinărie!",
    t5_inst: "În mașinărie s-au ascuns 5 roți dințate mici. Apasă pe ele ca să le numeri!",
    t5_q: "Ce se întâmplă dacă două roți dințate sunt conectate și una începe să se învârtă?",
    t5_q_a: "O rotește și pe cealaltă", t5_q_b: "Mașina se oprește", t5_q_c: "Explodează", t5_q_d: "Roata cade",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "megujulo", label: "t2_bucket_megujulo" },
        { id: "fosszilis", label: "t2_bucket_fosszilis" },
      ],
      items: [
        { text: "t2_item_m1", bucketId: "megujulo" },
        { text: "t2_item_f1", bucketId: "fosszilis" },
        { text: "t2_item_m2", bucketId: "megujulo" },
        { text: "t2_item_f2", bucketId: "fosszilis" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      // HU: [0:A] [1:vonat] [2:és] [3:a] [4:repülő] [5:nagyon] [6:gyorsak.]
      // EN: [0:The] [1:train] [2:and] [3:the] [4:airplane] [5:are] [6:fast.]
      // DE: [0:Der] [1:Zug] [2:und] [3:das] [4:Flugzeug] [5:sind] [6:schnell.]
      // RO: [0:Acest] [1:tren] [2:și] [3:acest] [4:avion] [5:sunt] [6:rapide.]
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [1, 4],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "label-diagram",
      areas: [
        { id: "battery", x: 50, y: 70, label: "t4_area_battery" },
        { id: "bulb",    x: 50, y: 25, label: "t4_area_bulb" },
        { id: "wire",    x: 25, y: 50, label: "t4_area_wire" },
      ],
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b3",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "⚙️", count: 5 }, // Fogaskerekek
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "⚙️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const TechMachinesExplorer = memo(function TechMachinesExplorer({
  color = "#64748B", // Slate/Szürke a fémek és gépek miatt
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={3} 
      explorerId="sachkunde_k3_tech_machines" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default TechMachinesExplorer;
