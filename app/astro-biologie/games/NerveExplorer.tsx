"use client";
// NerveExplorer — Klasse 7: Nervous System (Nervensystem)
// Topics: Neurons, synapses, reflex arc, brain regions, review
// Teaching-first pattern: R1-R4 info rounds + questions, R5 quiz

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Neurons
    r1_title: "Neurons: The Brain's Cells",
    r1_text: "Neurons are specialized cells that send and receive electrical signals. They're the building blocks of the nervous system.",
    r1_fact1: "Cell body (soma) — contains the nucleus and controls the neuron",
    r1_fact2: "Dendrites — branching arms that RECEIVE signals from other neurons",
    r1_fact3: "Axon — long extension that SENDS signals to other neurons",
    r1_fact4: "Myelin sheath — insulation that speeds up electrical signals",

    // Round 2: Synapses
    r2_title: "Synapses: The Connection Points",
    r2_text: "Synapses are tiny gaps between neurons where signals jump from one cell to another using chemical messengers.",
    r2_fact1: "Electrical signal travels down the axon",
    r2_fact2: "Neurotransmitters (chemical messengers) are released across the gap",
    r2_fact3: "Neurotransmitters bind to receptors on the next neuron",
    r2_fact4: "This triggers an electrical signal in the next neuron",

    // Round 3: Reflex Arc
    r3_title: "Reflex Arc: Quick Reactions",
    r3_text: "A reflex arc is the fastest way your nervous system responds. Your hand pulls away from a hot stove before you feel pain!",
    r3_fact1: "Receptor detects stimulus (heat, touch, pain)",
    r3_fact2: "Sensory nerve sends signal to spinal cord",
    r3_fact3: "Spinal cord processes and sends signal to motor nerve",
    r3_fact4: "Motor nerve activates muscle — instant reaction without brain delay!",

    // Round 4: Brain Regions
    r4_title: "Brain Regions: The Control Center",
    r4_text: "The brain has specialized regions. Each controls different functions like thinking, balance, and breathing.",
    r4_fact1: "Cerebrum — largest part, handles thinking, learning, memory, emotions",
    r4_fact2: "Cerebellum — coordinates balance and fine motor movements",
    r4_fact3: "Brain stem — controls vital functions (breathing, heart rate, sleep)",
    r4_fact4: "All parts work together to control your body",

    // Round 5: Quiz
    r5_title: "Nervous System Review",

    // Quiz Questions
    q1_q: "What do dendrites do?",
    q1_receive: "Receive signals from other neurons",
    q1_send: "Send signals to other neurons",
    q1_insulate: "Insulate the axon",
    q1_process: "Process signals in the brain",

    q2_q: "What crosses the synapse between neurons?",
    q2_neurotrans: "Neurotransmitters (chemical messengers)",
    q2_electrical: "Electrical current",
    q2_myelin: "Myelin sheath",
    q2_axons: "Axon tips",

    q3_q: "Which brain part controls breathing and heart rate?",
    q3_stem: "Brain stem",
    q3_cerebrum: "Cerebrum",
    q3_cerebellum: "Cerebellum",
    q3_cortex: "Cortex",
  },
  de: {
    r1_title: "Neuronen: Die Zellen des Gehirns",
    r1_text: "Neuronen sind spezialisierte Zellen, die elektrische Signale senden und empfangen. Sie sind die Bausteine des Nervensystems.",
    r1_fact1: "Zellkörper (Soma) — enthält den Kern und steuert das Neuron",
    r1_fact2: "Dendriten — verzweigte Arme, die Signale von anderen Neuronen EMPFANGEN",
    r1_fact3: "Axon — lange Verlängerung, die Signale an andere Neuronen SENDET",
    r1_fact4: "Myelinscheide — Isolierung, die elektrische Signale beschleunigt",

    r2_title: "Synapsen: Die Verbindungspunkte",
    r2_text: "Synapsen sind winzige Lücken zwischen Neuronen, wo Signale von einer Zelle zur anderen mit chemischen Botenstoffen springen.",
    r2_fact1: "Elektrisches Signal wandert das Axon hinunter",
    r2_fact2: "Neurotransmitter (chemische Botenstoffe) werden über die Lücke freigesetzt",
    r2_fact3: "Neurotransmitter binden an Rezeptoren im nächsten Neuron",
    r2_fact4: "Dies löst ein elektrisches Signal im nächsten Neuron aus",

    r3_title: "Reflexbogen: Schnelle Reaktionen",
    r3_text: "Ein Reflexbogen ist die schnellste Art, wie dein Nervensystem reagiert. Deine Hand zieht sich von einem heißen Herd weg, bevor du Schmerz spürst!",
    r3_fact1: "Rezeptor erkennt Reiz (Hitze, Berührung, Schmerz)",
    r3_fact2: "Sensorneuron sendet Signal zum Rückenmark",
    r3_fact3: "Rückenmark verarbeitet und sendet Signal an Motorneuron",
    r3_fact4: "Motorneuron aktiviert Muskel — sofortige Reaktion ohne Gehirnverzögerung!",

    r4_title: "Gehirnregionen: Das Kontrollzentrum",
    r4_text: "Das Gehirn hat spezialisierte Regionen. Jede kontrolliert verschiedene Funktionen wie Denken, Gleichgewicht und Atmung.",
    r4_fact1: "Großhirn — größter Teil, verarbeitet Denken, Lernen, Gedächtnis, Gefühle",
    r4_fact2: "Kleinhirn — koordiniert Gleichgewicht und feine Bewegungen",
    r4_fact3: "Hirnstamm — steuert lebensnotwendige Funktionen (Atmung, Herzschlag, Schlaf)",
    r4_fact4: "Alle Teile arbeiten zusammen, um deinen Körper zu steuern",

    r5_title: "Nervensystem Wiederholung",

    q1_q: "Was tun Dendriten?",
    q1_receive: "Empfangen Signale von anderen Neuronen",
    q1_send: "Senden Signale an andere Neuronen",
    q1_insulate: "Isolieren das Axon",
    q1_process: "Verarbeiten Signale im Gehirn",

    q2_q: "Was kreuzt die Synapse zwischen Neuronen?",
    q2_neurotrans: "Neurotransmitter (chemische Botenstoffe)",
    q2_electrical: "Elektrischer Strom",
    q2_myelin: "Myelinscheide",
    q2_axons: "Axonspitzen",

    q3_q: "Welches Gehirnteil steuert Atmung und Herzschlag?",
    q3_stem: "Hirnstamm",
    q3_cerebrum: "Großhirn",
    q3_cerebellum: "Kleinhirn",
    q3_cortex: "Cortex",
  },
  hu: {
    r1_title: "Neuronok: Az Agy Sejtjei",
    r1_text: "A neuronok speciális sejtek, amelyek elektromos jeleket küldenek és fogadnak. Az idegrendszer építőkövei.",
    r1_fact1: "Sejttörzs (soma) — tartalmazza az alapvetet és szabályozza a neuront",
    r1_fact2: "Dendritek — elágazó karok, amelyek más neuronokból FOGADNAK jeleket",
    r1_fact3: "Axon — hosszú kiterjesztés, amely jeleket KÜLd más neuronoknak",
    r1_fact4: "Mielinhüvely — szigetelés, amely felgyorsítja az elektromos jeleket",

    r2_title: "Szinapszisok: A Kapcsolódási Pontok",
    r2_text: "A szinapszisok apró rések a neuronok között, ahol a jelek az egyik sejtből a másikba ugranak kémiai hírnökök segítségével.",
    r2_fact1: "Az elektromos jel az axon mentén halad",
    r2_fact2: "A neurotranszmitterek (kémiai hírnökök) a rés között szabadulnak fel",
    r2_fact3: "A neurotranszmitterek a következő neuron receptoraihoz kötődnek",
    r2_fact4: "Ez elektromos jelet indít el a következő neuronban",

    r3_title: "Reflex Ív: Gyors Reakciók",
    r3_text: "A reflex ív az az idegrendszered leggyorsabb módja a reagálásra. A kezed meghúzódik egy forró spórolótól, mielőtt még fájdalmat éreznél!",
    r3_fact1: "A receptor észleli az ingert (hő, érintés, fájdalom)",
    r3_fact2: "Az érzékelő idegsejt jelet küld a gerincvelőhöz",
    r3_fact3: "A gerinc feldolgozza és jelet küld az izmot aktiváló idegsejtre",
    r3_fact4: "Az izmot aktiváló idegsejt aktiválja az izmot — azonnali reakció agyértékítés nélkül!",

    r4_title: "Agyi Régiók: Az Irányítóközpont",
    r4_text: "Az agynak speciális régiói vannak. Mindegyik különböző funkciókat irányít, mint gondolkodás, egyensúly és légzés.",
    r4_fact1: "Nagytekintély (nagyagy) — legnagyobb rész, gondolkodás, tanulás, memória, érzelmek",
    r4_fact2: "Cerebellum (kisagy) — koordinálja az egyensúlyt és az apró mozgásokat",
    r4_fact3: "Agytörzs — szabályozza az élettani funkciókat (légzés, szívritmus, alvás)",
    r4_fact4: "Minden rész együtt dolgozik a tested irányításához",

    r5_title: "Idegrendszer Áttekintés",

    q1_q: "Mit tesznek a dendritek?",
    q1_receive: "Jeleket fogadnak más neuronokból",
    q1_send: "Jeleket küldenek más neuronoknak",
    q1_insulate: "Szigetelésit adnak az axonnak",
    q1_process: "Az agyban feldolgozzák a jeleket",

    q2_q: "Mi keresztezi a szinapszist neuronok között?",
    q2_neurotrans: "Neurotranszmitterek (kémiai hírnökök)",
    q2_electrical: "Elektromos áram",
    q2_myelin: "Mielinhüvely",
    q2_axons: "Axon végződések",

    q3_q: "Mely agyrész irányítja a légzést és a szívverést?",
    q3_stem: "Agytörzs",
    q3_cerebrum: "Nagytekintély",
    q3_cerebellum: "Kisagy",
    q3_cortex: "Cortex",
  },
  ro: {
    r1_title: "Neuroni: Celulele Creierului",
    r1_text: "Neuronii sunt celule specializate care trimit și primesc semnale electrice. Sunt blocurile de construcție ale sistemului nervos.",
    r1_fact1: "Corp celular (soma) — conține nucleul și controlează neuronul",
    r1_fact2: "Dendrite — brațe ramificate care PRIMESC semnale de la alți neuroni",
    r1_fact3: "Axon — extensie lungă care TRIMITE semnale altor neuroni",
    r1_fact4: "Teacă de mielină — izolare care accelerează semnalele electrice",

    r2_title: "Sinapsa: Punctele de Conexiune",
    r2_text: "Sinapsele sunt mica spații între neuroni unde semnalele sar de la o celulă la alta folosind mesageri chimici.",
    r2_fact1: "Semnalul electric se deplasează pe axon",
    r2_fact2: "Neurotransmiții (mesageri chimici) sunt eliberați peste gol",
    r2_fact3: "Neurotransmiții se leagă de receptori pe neuronul următor",
    r2_fact4: "Aceasta declanșează un semnal electric în neuronul următor",

    r3_title: "Arc Reflex: Reacții Rapide",
    r3_text: "Un arc reflex este cea mai rapidă cale prin care sistemul nervos răspunde. Mâna ta se retrage de la o sobă fierbinte înainte de a simți durerea!",
    r3_fact1: "Receptorul detectează stimulul (căldură, atingere, durere)",
    r3_fact2: "Nervul senzorial trimite semnal măduvei spinării",
    r3_fact3: "Măduva spinării procesează și trimite semnal nervului motor",
    r3_fact4: "Nervul motor activează musculul — reacție instantanee fără întârziere cerebrală!",

    r4_title: "Regiuni Cerebrale: Centrul de Control",
    r4_text: "Creierul are regiuni specializate. Fiecare controlează funcții diferite, cum ar fi gândirea, echilibrul și respirația.",
    r4_fact1: "Cerebru — cea mai mare parte, gestionează gândirea, învățarea, memoria, emoțiile",
    r4_fact2: "Cerebel — coordonează echilibrul și mișcările fine",
    r4_fact3: "Trunchirul cerebral — controlează funcții vitale (respirație, ritm cardiac, somn)",
    r4_fact4: "Toate părțile lucrează împreună pentru a controla corpul tău",

    r5_title: "Revizuire Sistem Nervos",

    q1_q: "Ce fac dendritele?",
    q1_receive: "Primesc semnale de la alți neuroni",
    q1_send: "Trimit semnale altor neuroni",
    q1_insulate: "Izolează axonul",
    q1_process: "Procesează semnale în creier",

    q2_q: "Ce traversează sinapsa între neuroni?",
    q2_neurotrans: "Neurotransmitorii (mesageri chimici)",
    q2_electrical: "Curent electric",
    q2_myelin: "Teacă de mielină",
    q2_axons: "Vârfuri de axon",

    q3_q: "Care parte a creierului controlează respirația și ritmul cardiac?",
    q3_stem: "Trunchi cerebral",
    q3_cerebrum: "Cerebru",
    q3_cerebellum: "Cerebel",
    q3_cortex: "Cortex",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS — simple colored shapes, NO TEXT
// ─────────────────────────────────────────────────────────────────────────────

function R1SVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Cell body (soma) */}
      <circle cx="120" cy="50" r="16" fill="#8B5CF6" />
      {/* Dendrites (branching) */}
      <line x1="100" y1="40" x2="70" y2="20" stroke="#A78BFA" strokeWidth="2" />
      <line x1="100" y1="45" x2="60" y2="35" stroke="#A78BFA" strokeWidth="2" />
      <line x1="100" y1="50" x2="70" y2="60" stroke="#A78BFA" strokeWidth="2" />
      <line x1="100" y1="55" x2="60" y2="70" stroke="#A78BFA" strokeWidth="2" />
      {/* Axon (extending down-right with myelin sheath) */}
      <line x1="135" y1="60" x2="180" y2="130" stroke="#7C3AED" strokeWidth="3" />
      {/* Myelin sheath segments */}
      <rect x="155" y="90" width="12" height="3" fill="#C4B5FD" rx="1" />
      <rect x="165" y="105" width="12" height="3" fill="#C4B5FD" rx="1" />
      {/* Axon terminal */}
      <circle cx="185" cy="135" r="6" fill="#7C3AED" />
    </svg>
  );
}

function R2SVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Sending neuron axon terminal (left) */}
      <circle cx="40" cy="70" r="8" fill="#3B82F6" />
      {/* Synaptic vesicles (small circles) */}
      <circle cx="38" cy="65" r="2" fill="#1E40AF" />
      <circle cx="42" cy="68" r="2" fill="#1E40AF" />
      {/* Neurotransmitters crossing gap (arrows/dots) */}
      <circle cx="80" cy="60" r="3" fill="#10B981" opacity="0.7" />
      <circle cx="90" cy="65" r="3" fill="#10B981" opacity="0.7" />
      <circle cx="100" cy="70" r="3" fill="#10B981" opacity="0.7" />
      <circle cx="110" cy="75" r="3" fill="#10B981" opacity="0.7" />
      {/* Receiving neuron (right) */}
      <circle cx="150" cy="70" r="8" fill="#10B981" />
      {/* Receptors on receiving neuron */}
      <circle cx="145" cy="65" r="2" fill="#047857" />
      <circle cx="152" cy="68" r="2" fill="#047857" />
      {/* Signal propagation */}
      <line x1="150" y1="60" x2="150" y2="20" stroke="#10B981" strokeWidth="2" />
    </svg>
  );
}

function R3SVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Receptor (left) — stimulus detection */}
      <circle cx="30" cy="50" r="10" fill="#F59E0B" />
      {/* Hot stove stimulus */}
      <circle cx="30" cy="25" r="8" fill="#EF4444" opacity="0.8" />
      {/* Sensory nerve (blue line) */}
      <line x1="30" y1="60" x2="80" y2="80" stroke="#3B82F6" strokeWidth="3" />
      {/* Spinal cord (gray) */}
      <rect x="75" y="70" width="20" height="30" fill="#9CA3AF" />
      {/* Motor nerve (green line) */}
      <line x1="100" y1="85" x2="180" y2="100" stroke="#10B981" strokeWidth="3" />
      {/* Muscle (right) */}
      <rect x="180" y="90" width="30" height="20" fill="#10B981" rx="2" />
    </svg>
  );
}

function R4SVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Cerebrum (large, top) — purple */}
      <ellipse cx="120" cy="55" rx="45" ry="35" fill="#8B5CF6" />
      {/* Cerebellum (bottom, smaller) — blue */}
      <ellipse cx="120" cy="110" rx="25" ry="20" fill="#3B82F6" />
      {/* Brain stem (thin, bottom-center) — red */}
      <rect x="115" y="125" width="10" height="25" fill="#EF4444" />
      {/* Region separation lines (subtle) */}
      <line x1="80" y1="85" x2="160" y2="85" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3,3" />
    </svg>
  );
}

function R5SVG() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto">
      {/* Neuron (center) */}
      <circle cx="120" cy="70" r="12" fill="#8B5CF6" />
      {/* Dendrites (top) */}
      <line x1="110" y1="60" x2="90" y2="30" stroke="#A78BFA" strokeWidth="2" />
      <line x1="130" y1="60" x2="150" y2="30" stroke="#A78BFA" strokeWidth="2" />
      {/* Axon (bottom) */}
      <line x1="120" y1="82" x2="120" y2="130" stroke="#7C3AED" strokeWidth="2" />
      {/* Brain regions (right) */}
      <ellipse cx="200" cy="50" rx="20" ry="15" fill="#8B5CF6" opacity="0.5" />
      <ellipse cx="200" cy="95" rx="15" ry="12" fill="#3B82F6" opacity="0.5" />
      <rect x="195" y="115" width="10" height="20" fill="#EF4444" opacity="0.5" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const NERVE_EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => <R1SVG />,
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => <R2SVG />,
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "info",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => <R3SVG />,
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => <R4SVG />,
      questions: [
        {
          question: "q3_q",
          choices: ["q3_stem", "q3_cerebrum", "q3_cerebellum", "q3_cortex"],
          answer: "q3_stem",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r1_text",
      svg: () => <R5SVG />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_receive", "q1_send", "q1_insulate", "q1_process"],
          answer: "q1_receive",
        },
        {
          question: "q2_q",
          choices: ["q2_neurotrans", "q2_electrical", "q2_myelin", "q2_axons"],
          answer: "q2_neurotrans",
        },
        {
          question: "q3_q",
          choices: ["q3_stem", "q3_cerebrum", "q3_cerebellum", "q3_cortex"],
          answer: "q3_stem",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function NerveExplorer({
  color = "#8B5CF6",
  lang = "en",
  onDone,
}: {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}) {
  return <ExplorerEngine def={NERVE_EXPLORER_DEF} color={color} lang={lang} onDone={onDone} />;
}
