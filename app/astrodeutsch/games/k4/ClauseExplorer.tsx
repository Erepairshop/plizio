"use client";
// ClauseExplorer — Island i6: Satzarten & Nebensätze (Clauses & Subordinate Clauses)
// Topics: 1) Satzarten 2) Hauptsatz vs. Nebensatz 3) Bindewörter (weil/dass/wenn) 4) Verb am Ende 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="0" fontSize="24" fontWeight="bold" fill="#312E81" textAnchor="middle">.</text>
        <text x="0" y="0" fontSize="24" fontWeight="bold" fill="#312E81" textAnchor="middle">?</text>
        <text x="60" y="0" fontSize="24" fontWeight="bold" fill="#312E81" textAnchor="middle">!</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="80" height="30" rx="4" fill="#86EFAC" />
        <circle cx="-5" cy="0" r="4" fill="#16A34A" />
        <rect x="5" y="-15" width="80" height="30" rx="4" fill="#BBF7D0" stroke="#22C55E" strokeDasharray="2 2" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="-50" cy="-5" r="3" fill="#C2410C" />
        <circle cx="0" cy="-5" r="3" fill="#C2410C" />
        <circle cx="50" cy="-5" r="3" fill="#C2410C" />
        <path d="M -70,10 L 70,10" stroke="#FB923C" strokeWidth="2" strokeDasharray="4 2" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-20" y="-15" width="50" height="20" fill="#FECACA" rx="4" />
        <rect x="40" y="-15" width="50" height="20" fill="#F87171" rx="4" />
        <path d="M 0,20 L 65,20 L 65,10" fill="none" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k4Grad6_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k4Grad6_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="0" fontSize="30" textAnchor="middle">🔗</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzarten & Nebensätze",

    // T1
    t1_title: "Die drei Satzarten",
    t1_text: "Wir wiederholen kurz: Ein Aussagesatz endet mit einem Punkt (.). Ein Fragesatz endet mit einem Fragezeichen (?). Ein Aufforderungssatz (Befehl) endet mit einem Ausrufezeichen (!).",
    t1_b1: "Aussage: Der Hund bellt.",
    t1_b2: "Frage: Bellt der Hund?",
    t1_b3: "Befehl: Komm her!",
    t1_inst: "Welches Satzzeichen gehört zu welchem Satz? Verbinde sie!",
    t1_h1: "Ein Befehl sagt dir, was du tun sollst (!).",
    t1_h2: "Eine Frage möchte etwas wissen (?).",
    t1_l1: "Ich gehe in die Schule", t1_r1: ".",
    t1_l2: "Wie spät ist es", t1_r2: "?",
    t1_l3: "Hör auf damit", t1_r3: "!",
    t1_q: "Welches Zeichen steht am Ende eines Fragesatzes?",
    t1_q_a: "Fragezeichen (?)", t1_q_b: "Punkt (.)", t1_q_c: "Ausrufezeichen (!)", t1_q_d: "Komma (,)",

    // T2
    t2_title: "Hauptsatz vs. Nebensatz",
    t2_text: "Ein Hauptsatz kann ganz alleine stehen. Er macht Sinn. Ein Nebensatz kann NICHT alleine stehen. Er braucht einen Hauptsatz und ist mit einem Komma angehängt.",
    t2_b1: "Hauptsatz: Ich bleibe zu Hause.",
    t2_b2: "Nebensatz: ..., weil es regnet.",
    t2_b3: "Hauptsatz und Nebensatz werden durch ein Komma getrennt.",
    t2_inst: "Ist es ein Hauptsatz oder ein Nebensatz? Sortiere sie!",
    t2_h1: "Kann der Satz alleine stehen und Sinn machen? Dann ist es ein Hauptsatz.",
    t2_h2: "Beginnt er mit 'weil' oder 'dass'? Dann ist es ein Nebensatz.",
    t2_bucket_haupt: "Hauptsatz",
    t2_bucket_neben: "Nebensatz",
    t2_item_h1: "Ich esse Pizza.", t2_item_h2: "Die Sonne scheint.",
    t2_item_n1: "... weil ich Hunger habe.", t2_item_n2: "... dass er kommt.",
    t2_q: "Kann ein Nebensatz (z.B. 'weil es regnet') alleine als ganzer Satz stehen?",
    t2_q_a: "Nein, er braucht einen Hauptsatz.", t2_q_b: "Ja, immer.", t2_q_c: "Nur am Anfang eines Textes.", t2_q_d: "Ja, aber nur mit Fragezeichen.",

    // T3
    t3_title: "Wichtige Bindewörter",
    t3_text: "Nebensätze beginnen meist mit einem Bindewort (Konjunktion). Die wichtigsten sind: 'weil' (Grund), 'dass' (Ergänzung) und 'wenn' (Bedingung/Zeit).",
    t3_b1: "weil: Ich lache, weil ich froh bin.",
    t3_b2: "dass: Ich weiß, dass du kommst.",
    t3_b3: "wenn: Ich spiele, wenn ich Zeit habe.",
    t3_inst: "Welches Bindewort passt in die Lücke?",
    t3_h1: "Es geht um einen Grund (Why?).",
    t3_h2: "Das Wort für den Grund ist 'weil'.",
    t3_gap_sentence: "Ich ziehe eine Jacke an, {gap} mir kalt ist.",
    t3_c1: "weil", t3_c2: "dass", t3_c3: "wenn",
    t3_q: "Welches Bindewort gibt eine Bedingung an (z.B. ___ es regnet, bleibe ich hier)?",
    t3_q_a: "wenn", t3_q_b: "weil", t3_q_c: "dass", t3_q_d: "oder",

    // T4
    t4_title: "Das Verb am Ende",
    t4_text: "Die wichtigste Regel für den Nebensatz: Das ragozott Verb (das Prädikat) steht im Nebensatz IMMER GANZ AM ENDE!",
    t4_b1: "Hauptsatz (Verb auf 2): Ich BIN müde.",
    t4_b2: "Nebensatz (Verb am Ende): ..., weil ich müde BIN.",
    t4_b3: "Vergiss das Komma vor dem Bindewort nicht!",
    t4_inst: "Bringe den Nebensatz in die richtige Reihenfolge!",
    t4_h1: "Der Nebensatz beginnt mit dem Bindewort 'dass'.",
    t4_h2: "Das Verb 'kommst.' muss ganz ans Ende.",
    t4_w1: "dass", t4_w2: "du", t4_w3: "heute", t4_w4: "kommst.",
    t4_q: "Wo steht das konjugierte Verb in einem Nebensatz (z.B. mit 'weil')?",
    t4_q_a: "Ganz am Ende", t4_q_b: "An Position 2", t4_q_c: "Ganz am Anfang", t4_q_d: "Vor dem Komma",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Jetzt verbinden wir Hauptsatz und Nebensatz! Denke an das Komma, das Bindewort und daran, dass das Verb im Nebensatz ans Ende rutscht.",
    t5_b1: "Hauptsatz + , + Bindewort + ... + Verb.",
    t5_b2: "Beispiel: Ich sehe, dass der Hund schläft.",
    t5_b3: "Achte auf die Satzstellung!",
    t5_inst: "Markiere das Verb, das am Ende des Nebensatzes steht!",
    t5_h1: "Suche das konjugierte Verb (Prädikat) im zweiten Teil des Satzes.",
    t5_h2: "Das Verb am Ende ist 'scheint'.",
    t5_w1: "Ich", t5_w2: "freue", t5_w3: "mich,", t5_w4: "weil", t5_w5: "die", t5_w6: "Sonne", t5_w7: "scheint.",
    t5_q: "Ist dieser Satz richtig? 'Ich komme nicht, weil ich habe keine Zeit.'",
    t5_q_a: "Falsch (Das Verb muss ans Ende: ... weil ich keine Zeit habe.)", t5_q_b: "Richtig", t5_q_c: "Falsch (Es fehlt ein Fragezeichen)", t5_q_d: "Falsch (Das Komma ist falsch)",
  },
  en: {
    explorer_title: "Clauses & Sentences",
    t1_title: "The Three Clause Types",
    t1_text: "We recap quickly: A statement sentence ends with a period (.). A question sentence ends with a question mark (?). A command sentence (imperative) ends with an exclamation mark (!).",
    t1_b1: "Statement: The dog barks.",
    t1_b2: "Question: Does the dog bark?",
    t1_b3: "Command: Come here!",
    t1_inst: "Which punctuation mark belongs to which sentence? Match them!",
    t1_h1: "A command tells you what to do (!).",
    t1_h2: "A question wants to know something (?).",
    t1_l1: "I go to school", t1_r1: ".",
    t1_l2: "What time is it", t1_r2: "?",
    t1_l3: "Stop that", t1_r3: "!",
    t1_q: "What punctuation mark ends a question sentence?",
    t1_q_a: "Question mark (?)", t1_q_b: "Period (.)", t1_q_c: "Exclamation mark (!)", t1_q_d: "Comma (,)",
    t2_title: "Main Clause vs. Subordinate Clause",
    t2_text: "A main clause can stand alone. It makes sense. A subordinate clause CANNOT stand alone. It needs a main clause and is attached with a comma.",
    t2_b1: "Main clause: I stay at home.",
    t2_b2: "Subordinate clause: ..., because it rains.",
    t2_b3: "Main clause and subordinate clause are separated by a comma.",
    t2_inst: "Is it a main clause (Hauptsatz) or a subordinate clause (Nebensatz)? Sort them!",
    t2_h1: "Can the sentence stand alone and make sense? Then it's a main clause.",
    t2_h2: "Does it start with 'weil' or 'dass'? Then it's a subordinate clause.",
    t2_bucket_haupt: "Main Clause",
    t2_bucket_neben: "Subordinate Clause",
    t2_item_h1: "I eat pizza.", t2_item_h2: "The sun shines.",
    t2_item_n1: "... because I am hungry.", t2_item_n2: "... that he comes.",
    t2_q: "Can a subordinate clause (e.g. 'because it rains') stand alone as a complete sentence?",
    t2_q_a: "No, it needs a main clause.", t2_q_b: "Yes, always.", t2_q_c: "Only at the beginning of a text.", t2_q_d: "Yes, but only with a question mark.",
    t3_title: "Important Conjunctions",
    t3_text: "Subordinate clauses usually start with a conjunction. The most important are: 'weil' (because), 'dass' (that), and 'wenn' (if/when).",
    t3_b1: "weil: I laugh because I am happy.",
    t3_b2: "dass: I know that you are coming.",
    t3_b3: "wenn: I play when I have time.",
    t3_inst: "Which conjunction fits in the gap?",
    t3_h1: "It is about a reason (Why?).",
    t3_h2: "The word for a reason is 'weil' (because).",
    t3_gap_sentence: "I put on a jacket, {gap} I am cold.",
    t3_c1: "weil", t3_c2: "dass", t3_c3: "wenn",
    t3_q: "Which conjunction indicates a condition (e.g. ___ it rains, I stay here)?",
    t3_q_a: "wenn", t3_q_b: "weil", t3_q_c: "dass", t3_q_d: "oder",
    t4_title: "The Verb at the End",
    t4_text: "The most important rule for the subordinate clause: The conjugated verb (the predicate) ALWAYS stands at the VERY END in a subordinate clause!",
    t4_b1: "Main clause (verb at position 2): I AM tired.",
    t4_b2: "Subordinate clause (verb at end): ..., because I tired AM.",
    t4_b3: "Don't forget the comma before the conjunction!",
    t4_inst: "Put the subordinate clause in the correct order!",
    t4_h1: "The subordinate clause starts with the conjunction 'dass'.",
    t4_h2: "The verb 'kommst.' must go to the very end.",
    t4_w1: "dass", t4_w2: "you", t4_w3: "today", t4_w4: "come.",
    t4_q: "Where does the conjugated verb stand in a subordinate clause (e.g. with 'weil')?",
    t4_q_a: "At the very end", t4_q_b: "At position 2", t4_q_c: "At the very beginning", t4_q_d: "Before the comma",
    t5_title: "Mixed Quiz",
    t5_text: "Now we connect main clause and subordinate clause! Remember the comma, the conjunction, and that the verb in the subordinate clause moves to the end.",
    t5_b1: "Main clause + , + Conjunction + ... + Verb.",
    t5_b2: "Example: I see that the dog is sleeping.",
    t5_b3: "Pay attention to word order!",
    t5_inst: "Highlight the verb that stands at the end of the subordinate clause!",
    t5_h1: "Look for the conjugated verb (predicate) in the second part of the sentence.",
    t5_h2: "The verb at the end is 'scheint'.",
    t5_w1: "I", t5_w2: "am happy,", t5_w3: "because", t5_w4: "the", t5_w5: "sun", t5_w6: "shines.",
    t5_q: "Is this sentence correct? 'I don't come, because I have no time.'",
    t5_q_a: "Wrong (The verb must go to the end: ... because I no time have.)", t5_q_b: "Correct", t5_q_c: "Wrong (Missing a question mark)", t5_q_d: "Wrong (The comma is wrong)",
  },
  hu: {
    explorer_title: "Mondatok és Mellékmondatok",
    t1_title: "A három mondattípus",
    t1_text: "Gyorsan felelevenítjük: A kijelentő mondat ponttal végződik (.). A kérdő mondat kérdőjellel (?) végződik. A felszólító mondat (parancs) felkiáltójellel (!) végződik.",
    t1_b1: "Kijelentés: A kutya ugat.",
    t1_b2: "Kérdés: Ugat-e a kutya?",
    t1_b3: "Parancs: Gyere ide!",
    t1_inst: "Melyik írásjel melyik mondathoz tartozik? Kösd össze őket!",
    t1_h1: "A felszólítás megmondja, mit csinálj (!).",
    t1_h2: "A kérdés tudni akar valamit (?).",
    t1_l1: "Az iskolába megyek", t1_r1: ".",
    t1_l2: "Hány óra van", t1_r2: "?",
    t1_l3: "Hagyd abba", t1_r3: "!",
    t1_q: "Melyik írásjel zárja a kérdő mondatot?",
    t1_q_a: "Kérdőjel (?)", t1_q_b: "Pont (.)", t1_q_c: "Felkiáltójel (!)", t1_q_d: "Vessző (,)",
    t2_title: "Főmondat vs. mellékmondat",
    t2_text: "A főmondat önmagában megállja a helyét. Értelme van. A mellékmondat NEM áll meg önmagában. Szüksége van egy főmondat ra és vesszővel van hozzákötve.",
    t2_b1: "Főmondat: Otthon maradok.",
    t2_b2: "Mellékmondat: ..., mert esik az eső.",
    t2_b3: "A főmondatot és mellékmondatot vessző választja el.",
    t2_inst: "Ez egy főmondat (Hauptsatz) vagy mellékmondat (Nebensatz)? Válogasd szét őket!",
    t2_h1: "Megállja a helyét önmagában? Akkor főmondat.",
    t2_h2: "'weil'-lel vagy 'dass'-szal kezdődik? Akkor mellékmondat.",
    t2_bucket_haupt: "Főmondat",
    t2_bucket_neben: "Mellékmondat",
    t2_item_h1: "Pizzát eszem.", t2_item_h2: "A nap világít.",
    t2_item_n1: "... mert éhes vagyok.", t2_item_n2: "... hogy ő eljön.",
    t2_q: "Megállhat-e egy mellékmondat (pl. 'mert esik az eső') önálló teljes mondatként?",
    t2_q_a: "Nem, szüksége van egy főmondat ra.", t2_q_b: "Igen, mindig.", t2_q_c: "Csak egy szöveg elején.", t2_q_d: "Igen, de csak kérdőjellel.",
    t3_title: "Fontos kötőszók",
    t3_text: "A mellékmondat ok általában egy kötőszóval kezdődnek. A legfontosabbak: 'weil' (mert), 'dass' (hogy) és 'wenn' (ha/amikor).",
    t3_b1: "weil: Nevetgélek, mert vidám vagyok.",
    t3_b2: "dass: Tudom, hogy jössz.",
    t3_b3: "wenn: Játszom, amikor van időm.",
    t3_inst: "Melyik kötőszó illik az űrbe?",
    t3_h1: "Egy okról van szó (Miért?).",
    t3_h2: "Az okot kifejező szó a 'weil' (mert).",
    t3_gap_sentence: "Felöltöztem egy kabátot, {gap} fázom.",
    t3_c1: "weil", t3_c2: "dass", t3_c3: "wenn",
    t3_q: "Melyik kötőszó jelöl meg egy feltételt (pl. ___ esik az eső, otthon maradok)?",
    t3_q_a: "wenn", t3_q_b: "weil", t3_q_c: "dass", t3_q_d: "oder",
    t4_title: "Az ige a végén",
    t4_text: "A mellékmondat legfontosabb szabálya: A ragozott ige (az állítmány) a mellékmondatban MINDIG a LEGVÉGÉN áll!",
    t4_b1: "Főmondat (ige a 2. helyen): JÓ vagyok.",
    t4_b2: "Mellékmondat (ige a végén): ..., mert JÓ vagyok.",
    t4_b3: "Ne felejtsd el a vesszőt a kötőszó előtt!",
    t4_inst: "Tedd a mellékmondatot a helyes sorrendbe!",
    t4_h1: "A mellékmondat a 'dass' kötőszóval kezdődik.",
    t4_h2: "A 'kommst.' igének a legvégére kell kerülnie.",
    t4_w1: "dass", t4_w2: "te", t4_w3: "ma", t4_w4: "jössz.",
    t4_q: "Hol áll a ragozott ige egy mellékmondatban (pl. 'mert'-tel)?",
    t4_q_a: "A legvégén", t4_q_b: "A 2. helyen", t4_q_c: "A legelején", t4_q_d: "A vessző előtt",
    t5_title: "Vegyes kvíz",
    t5_text: "Most összekapcsoljuk a főmondatot és mellékmondatot! Emlékezzünk a vesszőre, a kötőszóra és arra, hogy a mellékmondat igéje a végére kerül.",
    t5_b1: "Főmondat + , + Kötőszó + ... + Ige.",
    t5_b2: "Példa: Látom, hogy a kutya alszik.",
    t5_b3: "Figyelj az ige sorrendjére!",
    t5_inst: "Jelöld ki azt az igét, ami a mellékmondat végén áll!",
    t5_h1: "Keresd a ragozott igét (állítmányt) a mondat második felében.",
    t5_h2: "A mondatvégi ige a 'scheint'.",
    t5_w1: "Én", t5_w2: "blij ben,", t5_w3: "omdat", t5_w4: "de", t5_w5: "zon", t5_w6: "schijnt.",
    t5_q: "Helyes-e ez a mondat? 'Nem jövök, mert nincs időm.'",
    t5_q_a: "Helytelen (Az igének a végére kell kerülnie: ... mert nincs időm vagyok.)", t5_q_b: "Helyes", t5_q_c: "Helytelen (Hiányzik a kérdőjel)", t5_q_d: "Helytelen (A vessző rossz helyen van)",
  },
  ro: {
    explorer_title: "Propoziții principale și secundare",
    t1_title: "Cele trei tipuri de propoziții",
    t1_text: "Ne reamintim repede: O propoziție afirmativă se termină cu o perioadă (.). O propoziție întrebătoare se termină cu un semn de întrebare (?). O propoziție imperativă (comandă) se termină cu un semn de exclamare (!).",
    t1_b1: "Afirmație: Câinele latră.",
    t1_b2: "Întrebare: Latră câinele?",
    t1_b3: "Comandă: Vino aici!",
    t1_inst: "Ce semn de punctuație aparține cărei propoziții? Leagă-le!",
    t1_h1: "O poruncă îți spune ce să faci (!).",
    t1_h2: "O întrebare vrea să afle ceva (?).",
    t1_l1: "Merg la școală", t1_r1: ".",
    t1_l2: "Cât e ora", t1_r2: "?",
    t1_l3: "Încetează asta", t1_r3: "!",
    t1_q: "Ce semn de punctuație termină o propoziție întrebătoare?",
    t1_q_a: "Semnul de întrebare (?)", t1_q_b: "Perioada (.)", t1_q_c: "Semnul de exclamare (!)", t1_q_d: "Virgula (,)",
    t2_title: "Propoziție principală vs. propoziție secundară",
    t2_text: "O propoziție principală poate sta singură. Și are sens. O propoziție secundară NU poate sta singură. Necesită o propoziție principală și este atașată cu o virgulă.",
    t2_b1: "Principală: Rămân acasă.",
    t2_b2: "Secundară: ..., pentru că plouă.",
    t2_b3: "Principala și secundara sunt separate de o virgulă.",
    t2_inst: "Este o propoziție principală (Hauptsatz) sau secundară (Nebensatz)? Sortează-le!",
    t2_h1: "Poate propoziția să stea singură și să aibă sens? Atunci e principală.",
    t2_h2: "Începe cu 'weil' sau 'dass'? Atunci e secundară.",
    t2_bucket_haupt: "Propoziție principală",
    t2_bucket_neben: "Propoziție secundară",
    t2_item_h1: "Mănânc pizza.", t2_item_h2: "Soarele strălucește.",
    t2_item_n1: "... pentru că sunt flămând.", t2_item_n2: "... că el vine.",
    t2_q: "Poate o propoziție secundară (de ex. 'pentru că plouă') să stea singură ca o propoziție completă?",
    t2_q_a: "Nu, are nevoie de o propoziție principală.", t2_q_b: "Da, mereu.", t2_q_c: "Doar la începutul unui text.", t2_q_d: "Da, dar numai cu semn de întrebare.",
    t3_title: "Conjuncții importante",
    t3_text: "Propozițiile secundare de obicei încep cu o conjuncție. Cele mai importante sunt: 'weil' (pentru că), 'dass' (că) și 'wenn' (dacă/când).",
    t3_b1: "weil: Râd pentru că sunt fericit.",
    t3_b2: "dass: Știu că vii.",
    t3_b3: "wenn: Joc când am timp.",
    t3_inst: "Ce conjuncție se potrivește în spațiu?",
    t3_h1: "Este vorba despre un motiv (De ce?).",
    t3_h2: "Cuvântul pentru motiv este 'weil' (deoarece).",
    t3_gap_sentence: "Pun o jachetă, {gap} mi-e frig.",
    t3_c1: "weil", t3_c2: "dass", t3_c3: "wenn",
    t3_q: "Ce conjuncție indică o condiție (de ex. ___ plouă, rămân aici)?",
    t3_q_a: "wenn", t3_q_b: "weil", t3_q_c: "dass", t3_q_d: "oder",
    t4_title: "Verbul la final",
    t4_text: "Cea mai importantă regulă a propoziției secundare: Verbul conjugat (predicatul) MEREU stă la FINAL într-o propoziție secundară!",
    t4_b1: "Principală (verb la poziția 2): SUnT obosit.",
    t4_b2: "Secundară (verb la final): ..., pentru că obosit SUnT.",
    t4_b3: "Nu uita virgula înainte de conjuncție!",
    t4_inst: "Așază propoziția secundară în ordinea corectă!",
    t4_h1: "Propoziția secundară începe cu conjuncția 'dass'.",
    t4_h2: "Verbul 'kommst.' trebuie să meargă la final.",
    t4_w1: "dass", t4_w2: "tu", t4_w3: "azi", t4_w4: "vii.",
    t4_q: "Unde stă verbul conjugat într-o propoziție secundară (de ex. cu 'weil')?",
    t4_q_a: "La final absolut", t4_q_b: "La poziția 2", t4_q_c: "La începutul absolut", t4_q_d: "Înainte de virgulă",
    t5_title: "Chestionar mixt",
    t5_text: "Acum conectăm propoziția principală și secundara! Ține minte virgula, conjuncția și că verbul din secundara merge la final.",
    t5_b1: "Principală + , + Conjuncție + ... + Verb.",
    t5_b2: "Exemplu: Văd că câinele doarme.",
    t5_b3: "Acordă atenție ordinii cuvintelor!",
    t5_inst: "Marchează verbul care stă la sfârșitul propoziției secundare!",
    t5_h1: "Caută verbul conjugat (predicatul) în a doua parte a propoziției.",
    t5_h2: "Verbul de la sfârșit este 'scheint'.",
    t5_w1: "Eu", t5_w2: "sunt fericit,", t5_w3: "pentru că", t5_w4: "soarele", t5_w5: "strălucește.",
    t5_q: "Această propoziție este corectă? 'Nu vin, pentru că nu am timp.'",
    t5_q_a: "Greșit (Verbul trebuie să meargă la final: ... pentru că timp nu am.)", t5_q_b: "Corect", t5_q_c: "Greșit (Lipsește semnul de întrebare)", t5_q_d: "Greșit (Virgula este greșit plasată)",
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
        { left: "t1_l1", right: "t1_r1" }, // Aussage -> .
        { left: "t1_l2", right: "t1_r2" }, // Frage -> ?
        { left: "t1_l3", right: "t1_r3" }, // Befehl -> !
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
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
        { id: "haupt", label: "t2_bucket_haupt" },
        { id: "neben", label: "t2_bucket_neben" },
      ],
      items: [
        { text: "t2_item_h1", bucketId: "haupt" },
        { text: "t2_item_n1", bucketId: "neben" },
        { text: "t2_item_h2", bucketId: "haupt" },
        { text: "t2_item_n2", bucketId: "neben" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
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
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"], // weil, dass, wenn
      correctIndex: 0,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], // dass du heute kommst.
      correctOrder: [0, 1, 2, 3],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
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
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6", "t5_w7"], // Ich freue mich, weil die Sonne scheint.
      correctIndices: [6], // scheint.
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
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
  icon: "🔗",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ClauseExplorer = memo(function ClauseExplorer({
  color = "#4F46E5",
  lang = "de",
  onDone,
}: {
  color?: string;
  lang?: string;
  onDone?: (s: number, t: number) => void;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="deutsch_k4_clause" color={color} lang={lang} onDone={onDone} />;
});

export default ClauseExplorer;
