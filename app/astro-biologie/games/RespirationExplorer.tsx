"use client";
// RespirationExplorer — Island i2: Respiration (Atmung) Grade 6
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: Respiratory organs, alveoli, gas exchange, breathing mechanics

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Respiratory Organs
    r1_title: "The Respiratory System",
    r1_text: "Our body needs oxygen to survive. The respiratory system brings oxygen in and removes carbon dioxide out.",
    r1_fact1: "Nose filters and warms the air before it enters",
    r1_fact2: "Trachea (windpipe) carries air down into the chest",
    r1_fact3: "Bronchi branch into the left and right lungs",
    r1_fact4: "Lungs are spongy organs where gas exchange happens",

    // Round 2: Alveoli
    r2_title: "Alveoli: Tiny Air Sacs",
    r2_text: "Inside the lungs are millions of tiny air sacs called alveoli. They are surrounded by blood capillaries for gas exchange.",
    r2_fact1: "Each alveolus is surrounded by a network of tiny blood vessels (capillaries)",
    r2_fact2: "Alveoli have a very thin wall — only one cell thick — for easy gas exchange",
    r2_fact3: "The large surface area allows oxygen to pass into the blood efficiently",
    r2_fact4: "Carbon dioxide from the blood diffuses into the alveoli to be exhaled",

    // Round 3: Gas Exchange
    r3_title: "Gas Exchange in the Lungs",
    r3_text: "When you breathe in, oxygen enters the alveoli and diffuses into the blood. At the same time, carbon dioxide moves from blood to alveoli.",
    r3_fact1: "Oxygen (O₂) diffuses from alveoli → into capillary blood",
    r3_fact2: "Carbon dioxide (CO₂) diffuses from capillary blood → into alveoli",
    r3_fact3: "Red blood cells carry oxygen to body cells and pick up CO₂",
    r3_fact4: "This exchange happens continuously with every breath",

    // Round 4: Breathing Mechanics
    r4_title: "How Breathing Works",
    r4_text: "Breathing is controlled by the diaphragm, a muscle below your lungs. When it contracts, it pulls air in. When it relaxes, air goes out.",
    r4_fact1: "Diaphragm muscle contracts (tightens) → lungs expand → air flows in (inhale)",
    r4_fact2: "Diaphragm muscle relaxes → lungs shrink → air flows out (exhale)",
    r4_fact3: "Rib cage muscles also help by lifting the ribs during inhalation",
    r4_fact4: "We breathe about 15-20 times per minute at rest",

    // Round 5: Quiz
    r5_title: "Quick Review",

    // Quiz Questions (3 questions)
    q1_q: "Where is most of the gas exchange in the respiratory system?",
    q1_lungs: "In the lungs (alveoli)",
    q1_trachea: "In the trachea",
    q1_nose: "In the nose",
    q1_bronchi: "In the bronchi",

    q2_q: "What is the main function of the diaphragm?",
    q2_contract: "To contract and relax, moving air in and out of lungs",
    q2_filter: "To filter harmful particles from air",
    q2_warm: "To warm the incoming air",
    q2_pump: "To pump blood around the body",

    q3_q: "Which gas do we exhale (breathe out)?",
    q3_co2: "Mostly carbon dioxide (CO₂)",
    q3_o2: "Mostly oxygen (O₂)",
    q3_nitrogen: "Mostly nitrogen",
    q3_hydrogen: "Mostly hydrogen",

    // Round 3 MCQ (Gas Exchange)
    r3_q: "In the alveoli, which direction does oxygen move?",
    r3_q_alveolus_to_blood: "From alveolus into the blood",
    r3_q_blood_to_alveolus: "From blood into the alveolus",
    r3_q_stays: "It stays in the alveolus",
    r3_q_brain: "It goes directly to the brain",

    // Round 4 MCQ (Breathing Mechanics)
    r4_q: "What happens when the diaphragm contracts?",
    r4_contract_in: "Lungs expand and air flows in (inhale)",
    r4_contract_out: "Lungs shrink and air flows out (exhale)",
    r4_contract_stop: "Breathing stops temporarily",
    r4_contract_pump: "It pumps blood faster",
  },
  de: {
    r1_title: "Das Atmungssystem",
    r1_text: "Unser Körper braucht Sauerstoff zum Überleben. Das Atmungssystem bringt Sauerstoff rein und Kohlendioxid raus.",
    r1_fact1: "Die Nase filtert und wärmt die Luft auf, bevor sie eindringt",
    r1_fact2: "Luftröhre (Trachea) führt Luft in die Brust",
    r1_fact3: "Bronchien verzweigen sich in die linke und rechte Lunge",
    r1_fact4: "Lungen sind schwammige Organe, wo der Gasaustausch stattfindet",

    r2_title: "Alveolen: Winzige Luftsäcke",
    r2_text: "In den Lungen sind Millionen von winzigen Luftsäcken, sogenannte Alveolen. Sie sind von Blutkapillaren für den Gasaustausch umgeben.",
    r2_fact1: "Jede Alveole ist von einem Netzwerk von winzigen Blutgefäßen (Kapillaren) umgeben",
    r2_fact2: "Alveolen haben eine sehr dünne Wand — nur eine Zelle dick — für leichten Gasaustausch",
    r2_fact3: "Die große Oberfläche ermöglicht den effizienten Sauerstoffübergang in das Blut",
    r2_fact4: "Kohlendioxid aus dem Blut diffundiert in die Alveolen, um ausgeamtet zu werden",

    r3_title: "Gasaustausch in der Lunge",
    r3_text: "Wenn du einatmest, tritt Sauerstoff in die Alveolen ein und diffundiert in das Blut. Gleichzeitig bewegt sich Kohlendioxid vom Blut in die Alveolen.",
    r3_fact1: "Sauerstoff (O₂) diffundiert von Alveolen → in kapillares Blut",
    r3_fact2: "Kohlendioxid (CO₂) diffundiert von kapillärem Blut → in Alveolen",
    r3_fact3: "Rote Blutkörperchen transportieren Sauerstoff zu Körperzellen und nehmen CO₂ auf",
    r3_fact4: "Dieser Austausch findet mit jedem Atemzug kontinuierlich statt",

    r4_title: "Wie das Atmen funktioniert",
    r4_text: "Das Atmen wird durch das Zwerchfell kontrolliert, einen Muskel unterhalb der Lungen. Wenn es sich zusammenzieht, zieht es Luft ein. Wenn es sich entspannt, geht Luft aus.",
    r4_fact1: "Zwerchfell zieht sich zusammen (spannt) → Lungen dehnen sich aus → Luft fließt rein (Einatmen)",
    r4_fact2: "Zwerchfell entspannt sich → Lungen schrumpfen → Luft fließt raus (Ausatmen)",
    r4_fact3: "Rippenmuskeln helfen auch, indem sie die Rippen während des Einatmens heben",
    r4_fact4: "Wir atmen etwa 15-20 Mal pro Minute in Ruhe",

    r5_title: "Schnelle Wiederholung",

    q1_q: "Wo findet der größte Gasaustausch im Atmungssystem statt?",
    q1_lungs: "In den Lungen (Alveolen)",
    q1_trachea: "In der Luftröhre",
    q1_nose: "In der Nase",
    q1_bronchi: "In den Bronchien",

    q2_q: "Was ist die Hauptfunktion des Zwerchfells?",
    q2_contract: "Sich zusammenziehen und entspannen, um Luft in und aus der Lunge zu bewegen",
    q2_filter: "Schädliche Partikel aus der Luft zu filtern",
    q2_warm: "Die einströmende Luft zu wärmen",
    q2_pump: "Das Blut um den Körper zu pumpen",

    q3_q: "Welches Gas atmen wir aus (ausatmen)?",
    q3_co2: "Hauptsächlich Kohlendioxid (CO₂)",
    q3_o2: "Hauptsächlich Sauerstoff (O₂)",
    q3_nitrogen: "Hauptsächlich Stickstoff",
    q3_hydrogen: "Hauptsächlich Wasserstoff",

    r3_q: "In den Alveolen, in welche Richtung bewegt sich Sauerstoff?",
    r3_q_alveolus_to_blood: "Von der Alveole ins Blut",
    r3_q_blood_to_alveolus: "Vom Blut in die Alveole",
    r3_q_stays: "Er bleibt in der Alveole",
    r3_q_brain: "Er geht direkt ins Gehirn",

    r4_q: "Was passiert, wenn sich das Zwerchfell zusammenzieht?",
    r4_contract_in: "Lungen dehnen sich aus und Luft fließt rein (Einatmen)",
    r4_contract_out: "Lungen schrumpfen und Luft fließt raus (Ausatmen)",
    r4_contract_stop: "Das Atmen stoppt vorübergehend",
    r4_contract_pump: "Es pumpt das Blut schneller",
  },
  hu: {
    r1_title: "A légzőrendszer",
    r1_text: "Testünknek szüksége van oxigénre az élethez. A légzőrendszer oxigént szállít be és szén-dioxidot ki.",
    r1_fact1: "Az orr szűri és bemelegíti a levegőt, mielőtt bejut",
    r1_fact2: "A légcső lefelé szállítja a levegőt a mellkasba",
    r1_fact3: "A hörgők az bal és jobb tüdőbe ágaznak el",
    r1_fact4: "A tüdők szivacsszerű szervek, ahol a gázcsere történik",

    r2_title: "Alveolok: Apró légzsákok",
    r2_text: "A tüdőkben milliók apró légzsákja vannak, úgynevezett alveolok. Őket vér kapillárisok veszik körül a gázcseréhez.",
    r2_fact1: "Minden alveol apró vérerek (kapillárisok) hálózatával van körülvéve",
    r2_fact2: "Az alveoloknak nagyon vékony fala van — csak egy sejt vastagságú — könnyű gázcseréhez",
    r2_fact3: "A nagy felület lehetővé teszi az oxigén hatékony átjutását a vérbe",
    r2_fact4: "A szén-dioxid a vérből az alveolokba diffundál, hogy kileheljük",

    r3_title: "Gázcsere a tüdőkben",
    r3_text: "Amikor belélegzel, az oxigén az alveolokba lép és a vérbe diffundál. Ugyanakkor a szén-dioxid a vérből az alveolokba mozog.",
    r3_fact1: "Oxigén (O₂) diffundál az alveolokból → a kapilláris vérbe",
    r3_fact2: "Szén-dioxid (CO₂) diffundál a kapilláris vérből → az alveolokba",
    r3_fact3: "A vörösvérsejtek oxigént szállítanak a testsejtekbe és CO₂-t vesznek fel",
    r3_fact4: "Ez a csere folyamatosan történik minden légzéssel",

    r4_title: "Hogyan működik a légzés",
    r4_text: "A légzést a mirigyek alatt található izom, a rekeszizom szabályozza. Amikor összehúzódik, levegőt húz be. Amikor ellazul, levegő jut ki.",
    r4_fact1: "Rekeszizom összehúzódik (megfeszül) → tüdők kitágulnak → levegő áramlik be (belélegzés)",
    r4_fact2: "Rekeszizom ellazul → tüdők zsugorodni → levegő áramlik ki (kilélegzés)",
    r4_fact3: "A bordák között lévő izmok is segítenek a bordák emelésével a belélegzés alatt",
    r4_fact4: "Percenként körülbelül 15-20-szor lélegzünk pihenés közben",

    r5_title: "Gyors felülvizsgálat",

    q1_q: "Hol történik a legrészletesebb gázcsere a légzőrendszerben?",
    q1_lungs: "A tüdőkben (alveolok)",
    q1_trachea: "A légcsőben",
    q1_nose: "Az orrban",
    q1_bronchi: "A hörgőkben",

    q2_q: "Mi a rekeszizom fő funkciója?",
    q2_contract: "Összehúzódni és ellazulni, hogy levegő mozogjon a tüdőkbe és ki",
    q2_filter: "Ártalmas részecskéket szűrni a levegőből",
    q2_warm: "A bejövő levegőt bemelegíteni",
    q2_pump: "Vért pumpálni a test körül",

    q3_q: "Melyik gázt lélegzünk ki (kilélegzés)?",
    q3_co2: "Főleg szén-dioxidot (CO₂)",
    q3_o2: "Főleg oxigént (O₂)",
    q3_nitrogen: "Főleg nitrogént",
    q3_hydrogen: "Főleg hidrogént",

    r3_q: "Az alveolokban, milyen irányban mozdul az oxigén?",
    r3_q_alveolus_to_blood: "Az alveolokból a vérbe",
    r3_q_blood_to_alveolus: "A vérből az alveolokba",
    r3_q_stays: "Az alveolban marad",
    r3_q_brain: "Közvetlenül az agyba megy",

    r4_q: "Mi történik, amikor a rekeszizom összehúzódik?",
    r4_contract_in: "Tüdők kitágulnak és levegő áramlik be (belélegzés)",
    r4_contract_out: "Tüdők zsugorodni és levegő áramlik ki (kilélegzés)",
    r4_contract_stop: "A légzés átmenetileg megáll",
    r4_contract_pump: "Gyorsabban pumpál vért",
  },
  ro: {
    r1_title: "Sistemul respirator",
    r1_text: "Corpul nostru are nevoie de oxigen pentru a supraviețui. Sistemul respirator aduce oxigen și elimină dioxidul de carbon.",
    r1_fact1: "Nasul filtrează și încălzește aerul înainte să intre",
    r1_fact2: "Traheea transportă aerul în jos în piept",
    r1_fact3: "Bronhii se divid în plămânii stâng și drept",
    r1_fact4: "Plămânii sunt organe spongioase unde se întâmplă schimbul de gaze",

    r2_title: "Alveolele: Miniușori săculeți de aer",
    r2_text: "În plămâni sunt milioane de miniușori săculeți de aer numiți alveole. Sunt înconjurați de capilarele de sânge pentru schimbul de gaze.",
    r2_fact1: "Fiecare alveolă este înconjurată de o rețea de vase de sânge microscopice (capilar)",
    r2_fact2: "Alveolele au un perete foarte subțire — doar o grosime de celulă — pentru schimb de gaze ușor",
    r2_fact3: "Aria mare a suprafeței permite oxigenului să intre în sânge eficient",
    r2_fact4: "Dioxidul de carbon din sânge se difuzează în alveole pentru a fi expulzat",

    r3_title: "Schimbul de gaze în plămâni",
    r3_text: "Când inhalezi, oxigenul intră în alveole și se difuzează în sânge. În același timp, dioxidul de carbon se mișcă din sânge în alveole.",
    r3_fact1: "Oxigenul (O₂) se difuzează din alveole → în sângele capilar",
    r3_fact2: "Dioxidul de carbon (CO₂) se difuzează din sângele capilar → în alveole",
    r3_fact3: "Globulele roșii transportă oxigen la celulele corpului și absorb CO₂",
    r3_fact4: "Acest schimb se întâmplă continuu cu fiecare respirație",

    r4_title: "Cum funcționează respirația",
    r4_text: "Respirația este controlată de diafragm, un mușchi sub plămâni. Când se contractă, trage aerul. Când se relaxează, aerul iese.",
    r4_fact1: "Diafragma se contractă (se întinde) → plămânii se dilatează → aerul intră (inhalare)",
    r4_fact2: "Diafragma se relaxează → plămânii se micșorează → aerul iese (exhalare)",
    r4_fact3: "Mușchii din jurul coastelor ajută prin ridicarea coastelor în timpul inhalării",
    r4_fact4: "Respirăm de aproximativ 15-20 ori pe minut în repaus",

    r5_title: "Recapitulare rapidă",

    q1_q: "Unde se întâmplă cea mai mare schimb de gaze în sistemul respirator?",
    q1_lungs: "În plămâni (alveole)",
    q1_trachea: "În traheea",
    q1_nose: "În nas",
    q1_bronchi: "În bronhii",

    q2_q: "Care este funcția principală a diafragmei?",
    q2_contract: "Se contractă și se relaxează, mișcând aerul în și din plămâni",
    q2_filter: "Filtrează particulele dăunătoare din aer",
    q2_warm: "Încălzește aerul care intră",
    q2_pump: "Pompează sânge în jurul corpului",

    q3_q: "Ce gaz exhalezi (respiră afară)?",
    q3_co2: "În principal dioxid de carbon (CO₂)",
    q3_o2: "În principal oxigen (O₂)",
    q3_nitrogen: "În principal azot",
    q3_hydrogen: "În principal hidrogen",

    r3_q: "În alveole, în ce direcție se mișcă oxigenul?",
    r3_q_alveolus_to_blood: "Din alveolă în sânge",
    r3_q_blood_to_alveolus: "Din sânge în alveolă",
    r3_q_stays: "Rămâne în alveolă",
    r3_q_brain: "Merge direct la creier",

    r4_q: "Ce se întâmplă când diafragma se contractă?",
    r4_contract_in: "Plămânii se dilatează și aerul intră (inhalare)",
    r4_contract_out: "Plămânii se micșorează și aerul iese (exhalare)",
    r4_contract_stop: "Respirația se oprește temporar",
    r4_contract_pump: "Pompează sânge mai repede",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Round 1 SVG: Respiratory System Silhouette */
function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="resp_lung_grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B9DC3" />
          <stop offset="100%" stopColor="#5A7BA0" />
        </linearGradient>
      </defs>

      {/* Head/Neck outline */}
      <circle cx="120" cy="35" r="14" fill="none" stroke="rgba(200,200,200,0.5)" strokeWidth="2" />
      <path d="M 120 49 L 120 65" stroke="rgba(200,200,200,0.5)" strokeWidth="2" strokeLinecap="round" />

      {/* Nose opening */}
      <circle cx="115" cy="32" r="2" fill="rgba(200,200,200,0.5)" />
      <circle cx="125" cy="32" r="2" fill="rgba(200,200,200,0.5)" />

      {/* Trachea */}
      <path d="M 120 65 L 120 85" stroke="rgba(150,150,150,0.6)" strokeWidth="5" strokeLinecap="round" />

      {/* Bronchi branching */}
      <path d="M 120 85 Q 95 95 85 105" stroke="rgba(150,150,150,0.6)" strokeWidth="4" strokeLinecap="round" />
      <path d="M 120 85 Q 145 95 155 105" stroke="rgba(150,150,150,0.6)" strokeWidth="4" strokeLinecap="round" />

      {/* Left Lung */}
      <ellipse cx="80" cy="110" rx="28" ry="38" fill="url(#resp_lung_grad)" opacity="0.7" />
      <path d="M 65 90 Q 70 100 75 110 Q 70 115 65 120" stroke="rgba(100,150,180,0.4)" strokeWidth="1.5" fill="none" />
      <path d="M 75 85 Q 80 95 85 105 Q 80 112 75 120" stroke="rgba(100,150,180,0.4)" strokeWidth="1.5" fill="none" />
      <path d="M 85 88 Q 88 100 90 115" stroke="rgba(100,150,180,0.4)" strokeWidth="1.5" fill="none" />

      {/* Right Lung */}
      <ellipse cx="160" cy="110" rx="28" ry="38" fill="url(#resp_lung_grad)" opacity="0.7" />
      <path d="M 145 90 Q 150 100 155 110 Q 150 115 145 120" stroke="rgba(100,150,180,0.4)" strokeWidth="1.5" fill="none" />
      <path d="M 155 85 Q 160 95 165 105 Q 160 112 155 120" stroke="rgba(100,150,180,0.4)" strokeWidth="1.5" fill="none" />
      <path d="M 165 88 Q 168 100 170 115" stroke="rgba(100,150,180,0.4)" strokeWidth="1.5" fill="none" />

      {/* Rib cage outline (light) */}
      <path d="M 70 80 Q 60 110 70 135" stroke="rgba(150,150,150,0.3)" strokeWidth="2" fill="none" />
      <path d="M 170 80 Q 180 110 170 135" stroke="rgba(150,150,150,0.3)" strokeWidth="2" fill="none" />
      <path d="M 70 100 L 170 100" stroke="rgba(150,150,150,0.2)" strokeWidth="1" />
      <path d="M 70 115 L 170 115" stroke="rgba(150,150,150,0.2)" strokeWidth="1" />

      {/* Diaphragm at bottom */}
      <path d="M 70 135 Q 120 145 170 135" stroke="rgba(200,100,100,0.5)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <text x="120" y="155" textAnchor="middle" fontSize="10" fill="rgba(200,100,100,0.6)" fontWeight="bold">
        Diaphragm
      </text>
    </svg>
  );
}

/** Round 2 SVG: Alveolus Close-up */
function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="alv_grape_grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9BA8C4" />
          <stop offset="100%" stopColor="#5A7BA0" />
        </linearGradient>
        <linearGradient id="alv_cap_grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#CC5555" />
        </linearGradient>
      </defs>

      {/* Title label at top */}
      <text x="120" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="rgba(255,255,255,0.7)">
        Alveolus with Capillaries
      </text>

      {/* Alveoli cluster (grape-like) */}
      <circle cx="90" cy="70" r="18" fill="url(#alv_grape_grad)" opacity="0.8" />
      <circle cx="110" cy="60" r="16" fill="url(#alv_grape_grad)" opacity="0.8" />
      <circle cx="130" cy="70" r="18" fill="url(#alv_grape_grad)" opacity="0.8" />
      <circle cx="100" cy="85" r="15" fill="url(#alv_grape_grad)" opacity="0.8" />
      <circle cx="120" cy="88" r="16" fill="url(#alv_grape_grad)" opacity="0.8" />
      <circle cx="105" cy="105" r="14" fill="url(#alv_grape_grad)" opacity="0.8" />
      <circle cx="125" cy="105" r="14" fill="url(#alv_grape_grad)" opacity="0.8" />

      {/* Capillaries wrapping around (wavy paths) */}
      <path
        d="M 75 75 Q 80 55 100 50 Q 120 48 140 55 Q 155 65 160 85 Q 155 105 135 115 Q 110 120 90 115 Q 70 105 75 85 Z"
        fill="none"
        stroke="url(#alv_cap_grad)"
        strokeWidth="4"
        opacity="0.7"
        strokeLinecap="round"
      />

      {/* Additional capillary segments */}
      <path d="M 85 60 Q 95 50 105 55" fill="none" stroke="url(#alv_cap_grad)" strokeWidth="3" opacity="0.6" />
      <path d="M 130 75 Q 145 70 155 80" fill="none" stroke="url(#alv_cap_grad)" strokeWidth="3" opacity="0.6" />

      {/* Oxygen molecules (blue circles) entering alveoli */}
      <circle cx="70" cy="90" r="3" fill="#00D4FF" opacity="0.8" />
      <circle cx="65" cy="85" r="3" fill="#00D4FF" opacity="0.7" />

      {/* CO2 molecules (orange circles) exiting */}
      <circle cx="160" cy="100" r="3" fill="#FFA500" opacity="0.8" />
      <circle cx="165" cy="95" r="3" fill="#FFA500" opacity="0.7" />

      {/* Arrow labels */}
      <text x="50" y="95" fontSize="11" fill="#00D4FF" fontWeight="bold">
        O₂ in
      </text>
      <text x="175" y="105" fontSize="11" fill="#FFA500" fontWeight="bold">
        CO₂ out
      </text>
    </svg>
  );
}

/** Round 3 SVG: Gas Exchange Diagram */
function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <marker id="arrow_o2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#00D4FF" />
        </marker>
        <marker id="arrow_co2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#FFA500" />
        </marker>
      </defs>

      {/* Left side: Alveolus */}
      <ellipse cx="70" cy="80" rx="28" ry="32" fill="rgba(100,150,180,0.3)" stroke="rgba(100,150,180,0.6)" strokeWidth="2" />
      <text x="70" y="75" textAnchor="middle" fontSize="10" fontWeight="bold" fill="rgba(255,255,255,0.7)">
        Alveolus
      </text>

      {/* Right side: Blood Capillary */}
      <rect x="150" y="60" width="60" height="40" rx="8" fill="rgba(200,80,80,0.3)" stroke="rgba(200,80,80,0.6)" strokeWidth="2" />
      <text x="180" y="75" textAnchor="middle" fontSize="10" fontWeight="bold" fill="rgba(255,255,255,0.7)">
        Blood
      </text>

      {/* O2 arrow: Alveolus → Blood (blue) */}
      <defs>
        <linearGradient id="o2_grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#0099CC" />
        </linearGradient>
      </defs>
      <path d="M 100 75 L 148 75" stroke="url(#o2_grad)" strokeWidth="3" markerEnd="url(#arrow_o2)" />
      <circle cx="115" cy="70" r="2.5" fill="#00D4FF" />
      <circle cx="125" cy="72" r="2.5" fill="#00D4FF" />
      <circle cx="135" cy="70" r="2.5" fill="#00D4FF" />

      {/* CO2 arrow: Blood → Alveolus (orange) */}
      <defs>
        <linearGradient id="co2_grad" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
      </defs>
      <path d="M 148 85 L 100 85" stroke="url(#co2_grad)" strokeWidth="3" markerEnd="url(#arrow_co2)" />
      <circle cx="135" cy="90" r="2.5" fill="#FFA500" />
      <circle cx="125" cy="88" r="2.5" fill="#FFA500" />
      <circle cx="115" cy="90" r="2.5" fill="#FFA500" />

      {/* Labels */}
      <text x="120" y="65" textAnchor="middle" fontSize="9" fill="#00D4FF" fontWeight="bold">
        O₂ in
      </text>
      <text x="120" y="105" textAnchor="middle" fontSize="9" fill="#FFA500" fontWeight="bold">
        CO₂ out
      </text>

      {/* Bottom: Oxygen-carrying blood cell */}
      <circle cx="180" cy="110" r="8" fill="rgba(255,100,100,0.4)" stroke="rgba(255,100,100,0.7)" strokeWidth="1" />
      <circle cx="180" cy="110" r="5" fill="rgba(100,100,100,0.3)" />
      <text x="207" y="116" fontSize="9" fill="rgba(255,255,255,0.6)">
        Red blood cell
      </text>
    </svg>
  );
}

/** Round 4 SVG: Breathing Mechanics */
function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="breath_lung_grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B9DC3" />
          <stop offset="100%" stopColor="#5A7BA0" />
        </linearGradient>
      </defs>

      {/* Left side: Inhale */}
      <text x="60" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="rgba(100,200,255,0.8)">
        Inhale
      </text>

      {/* Lungs expanded */}
      <ellipse cx="45" cy="75" rx="20" ry="38" fill="url(#breath_lung_grad)" opacity="0.8" />
      <ellipse cx="75" cy="75" rx="20" ry="38" fill="url(#breath_lung_grad)" opacity="0.8" />

      {/* Diaphragm flattened (inhale) */}
      <path d="M 30 115 L 90 115" stroke="rgba(200,100,100,0.7)" strokeWidth="4" strokeLinecap="round" />

      {/* Air arrows going in */}
      <path d="M 30 40 L 30 60" stroke="#00D4FF" strokeWidth="2.5" markerEnd="url(#arrow_down)" />
      <path d="M 70 40 L 70 60" stroke="#00D4FF" strokeWidth="2.5" markerEnd="url(#arrow_down)" />

      {/* Right side: Exhale */}
      <text x="180" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="rgba(255,150,100,0.8)">
        Exhale
      </text>

      {/* Lungs compressed */}
      <ellipse cx="165" cy="85" rx="14" ry="28" fill="url(#breath_lung_grad)" opacity="0.6" />
      <ellipse cx="195" cy="85" rx="14" ry="28" fill="url(#breath_lung_grad)" opacity="0.6" />

      {/* Diaphragm dome (exhale) */}
      <path d="M 150 115 Q 170 95 190 115" stroke="rgba(200,100,100,0.7)" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Air arrows going out */}
      <path d="M 160 50 L 160 70" stroke="#FFA500" strokeWidth="2.5" markerEnd="url(#arrow_up)" />
      <path d="M 200 50 L 200 70" stroke="#FFA500" strokeWidth="2.5" markerEnd="url(#arrow_up)" />

      {/* Markers for arrows */}
      <defs>
        <marker id="arrow_down" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <polygon points="0 0, 10 5, 0 10" fill="#00D4FF" />
        </marker>
        <marker id="arrow_up" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start">
          <polygon points="10 0, 0 5, 10 10" fill="#FFA500" />
        </marker>
      </defs>

      {/* Bottom labels */}
      <text x="60" y="145" textAnchor="middle" fontSize="9" fill="rgba(100,200,255,0.7)">
        Expand &amp; Fill
      </text>
      <text x="180" y="145" textAnchor="middle" fontSize="9" fill="rgba(255,150,100,0.7)">
        Shrink &amp; Empty
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const RESPIRATION_EXPLORER: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => SVG_R1(),
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => SVG_R2(),
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => SVG_R3(),
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_q_alveolus_to_blood", "r3_q_blood_to_alveolus", "r3_q_stays", "r3_q_brain"],
          answer: "r3_q_alveolus_to_blood",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => SVG_R4(),
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_contract_in", "r4_contract_out", "r4_contract_stop", "r4_contract_pump"],
          answer: "r4_contract_in",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40" />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_lungs", "q1_trachea", "q1_nose", "q1_bronchi"],
          answer: "q1_lungs",
        },
        {
          question: "q2_q",
          choices: ["q2_contract", "q2_filter", "q2_warm", "q2_pump"],
          answer: "q2_contract",
        },
        {
          question: "q3_q",
          choices: ["q3_co2", "q3_o2", "q3_nitrogen", "q3_hydrogen"],
          answer: "q3_co2",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function RespirationExplorer({
  color = "#3B82F6",
  lang = "en",
  onDone,
}: {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}) {
  return <ExplorerEngine def={RESPIRATION_EXPLORER} color={color} lang={lang} onDone={onDone} />;
}
