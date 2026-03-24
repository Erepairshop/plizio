"use client";
// RespirationExplorer.tsx — Bio Island i7: Légzés (K6)
// Topics: 1) Légutak 2) Légzőmozgások 3) Gázcsere 4) Sejtlégzés 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { LungsSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="10" fontSize="35" textAnchor="middle">🌬️</text>
        <path d="M -20,0 L 20,0" stroke="#0284C7" strokeWidth="4" markerEnd="url(#arrow)" />
        <text x="40" y="10" fontSize="35" textAnchor="middle">🫁</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FCE7F3" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-30" y="15" fontSize="40" textAnchor="middle">🫧</text>
        <path d="M -10,-10 Q 0,-30 10,-10" fill="none" stroke="#E11D48" strokeWidth="3" markerEnd="url(#arrow)" />
        <path d="M 10,10 Q 0,30 -10,10" fill="none" stroke="#64748B" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="30" y="15" fontSize="40" textAnchor="middle">🩸</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="15" fontSize="40" textAnchor="middle">🦠</text>
        <text x="0" y="15" fontSize="30" textAnchor="middle">➕</text>
        <text x="40" y="15" fontSize="40" textAnchor="middle">⚡</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="45" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🫁</text>
        <text x="25" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "A Légzőrendszer",
    // T1: Légutak
    t1_title: "A levegő útja",
    t1_text: "A légzőrendszer feladata, hogy oxigénben gazdag levegőt juttasson a szervezetbe. A levegő az orrüregtől a tüdőig hosszú utat tesz meg.",
    t1_b1: "Orrüreg: itt a levegő felmelegszik, párásodik és megtisztul.",
    t1_b2: "Gége és légcső: a levegőt a tüdő felé vezetik.",
    t1_b3: "Főhörgők: a légcső két ágra bomlik, bevezetve a két tüdőfélbe.",
    t1_inst: "Tedd sorba a mondat szavait!",
    t1_w1: "A", t1_w2: "levegő", t1_w3: "a", t1_w4: "légcsövön", t1_w5: "át", t1_w6: "áramlik.",
    t1_q: "Miért jobb az orrunkon át lélegezni, mint a szánkon?",
    t1_q_a: "Mert az orrüreg felmelegíti és megtisztítja a levegőt.", t1_q_b: "Mert gyorsabban jut be az oxigén.", t1_q_c: "Mert a szánkon csak szén-dioxid jön ki.", t1_q_d: "Mert a szájban nincs levegő.",

    // T2: Légzőmozgások
    t2_title: "Be- és kilégzés",
    t2_text: "A tüdőnek nincsenek saját izmai. A légzést a mellkas izmai és egy nagy, kupola alakú izom, a rekeszizom végzi.",
    t2_b1: "Belégzés: a rekeszizom lelapul, a mellkas tágul, levegő áramlik be.",
    t2_b2: "Kilégzés: a rekeszizom elernyed (feldomborodik), a levegő kipréselődik.",
    t2_b3: "Percenként átlagosan 14-16 alkalommal veszünk levegőt.",
    t2_inst: "Belégzés vagy Kilégzés? Válogasd szét a folyamatokat!",
    t2_bucket_be: "Belégzés",
    t2_bucket_ki: "Kilégzés",
    t2_item_b1: "Mellkas tágul", t2_item_b2: "Rekeszizom lelapul",
    t2_item_k1: "Mellkas szűkül", t2_item_k2: "Levegő távozik",
    t2_q: "Melyik izom játssza a legfőbb szerepet a légzésben?",
    t2_q_a: "A rekeszizom", t2_q_b: "A szívizom", t2_q_c: "A hasizom", t2_q_d: "A nyelvizom",

    // T3: Gázcsere
    t3_title: "Gázcsere a tüdőben",
    t3_text: "A tüdő belsejében apró léghólyagocskák (alveolusok) találhatók, melyeket hajszálerek vesznek körül. Itt történik a csoda: a gázcsere.",
    t3_b1: "Az oxigén a hólyagocskákból átlép a vérbe.",
    t3_b2: "A vérből a szén-dioxid átlép a hólyagocskákba, majd kilélegezzük.",
    t3_b3: "A tüdő hatalmas belső felülete teszi ezt olyan hatékonnyá.",
    t3_inst: "Párosítsd az anyagot az irányával a tüdőben!",
    t3_l1: "Oxigén", t3_r1: "Be a véráramba",
    t3_l2: "Szén-dioxid", t3_r2: "Ki a tüdőbe (majd a levegőbe)",
    t3_l3: "Tüdőhólyagocska", t3_r3: "A gázcsere helyszíne",
    t3_q: "Hol történik a tényleges gázcsere a tüdőben?",
    t3_q_a: "A tüdőhólyagocskákban", t3_q_b: "A légcsőben", t3_q_c: "A gégében", t3_q_d: "Az orrüregben",

    // T4: Sejtlégzés
    t4_title: "A sejtlégzés: az élet motorja",
    t4_text: "Miért van szükségünk oxigénre? A válasz a sejtekben rejlik. A légzés végső célja az energiatermelés.",
    t4_b1: "A vér az oxigént a test minden sejtjéhez elszállítja.",
    t4_b2: "A sejtek az oxigént a tápanyagok (cukrok) elégetésére használják.",
    t4_b3: "Ebből a folyamatból nyer energiát a szervezetünk.",
    t4_inst: "Mit termelnek a sejtek az oxigén segítségével?",
    t4_gap_sentence: "A sejtek az oxigén felhasználásával {gap} termelnek az életben maradáshoz.",
    t4_c1: "energiát", t4_c2: "fényt", t4_c3: "hangot",
    t4_q: "Mi a légzés végső, legfontosabb célja a szervezetben?",
    t4_q_a: "Energiatermelés a sejtekben", t4_q_b: "A vér lehűtése", t4_q_c: "A hangképzés", t4_q_d: "A tüdő kitágítása",

    // T5: Review
    t5_title: "Összefoglaló Kvíz",
    t5_text: "Teszteld a tudásod a légzésről és az oxigén útjáról!",
    t5_b1: "A levegő az orron át jut a légcsőbe, majd a tüdőbe.",
    t5_b2: "A rekeszizom működteti a tüdőt.",
    t5_b3: "A cél az oxigén bejuttatása és a CO2 eltávolítása.",
    t5_inst: "Hová szállítja a vér az oxigént?",
    t5_gap_sentence2: "A tüdőből felvett oxigént a vér a {gap} szállítja.",
    t5_c51: "sejtekhez", t5_c52: "gyomorba", t5_c53: "levegőbe",
    t5_q: "Melyik gázt lélegezzük ki a legnagyobb arányban a felsoroltak közül az oxigénhez képest?",
    t5_q_a: "Szén-dioxidot", t5_q_b: "Oxigént", t5_q_c: "Héliumot", t5_q_d: "Hidrogént",
  },
  en: {
    explorer_title: "The Respiratory System",
    t1_title: "Path of the Air", t1_text: "The respiratory system brings oxygen-rich air into the body. The air travels a long path from the nasal cavity to the lungs.",
    t1_b1: "Nasal cavity: warms, moistens, and filters the air.", t1_b2: "Larynx and trachea: guide the air toward the lungs.", t1_b3: "Bronchi: the trachea splits into two branches entering the lungs.",
    t1_inst: "Put the words in order!", t1_w1: "Air", t1_w2: "flows", t1_w3: "through", t1_w4: "the", t1_w5: "trachea.",
    t1_q: "Why is it better to breathe through our nose than our mouth?", t1_q_a: "Because the nasal cavity warms and cleans the air.", t1_q_b: "Because oxygen enters faster.", t1_q_c: "Because the mouth only exhales carbon dioxide.", t1_q_d: "Because there is no air in the mouth.",

    t2_title: "Breathing Movements", t2_text: "The lungs don't have their own muscles. Breathing is done by chest muscles and a large, dome-shaped muscle called the diaphragm.",
    t2_b1: "Inhalation: the diaphragm flattens, chest expands, air rushes in.", t2_b2: "Exhalation: the diaphragm relaxes (domes up), air is pushed out.", t2_b3: "We take about 14-16 breaths per minute on average.",
    t2_inst: "Inhalation or Exhalation? Sort the processes!",
    t2_bucket_be: "Inhalation", t2_bucket_ki: "Exhalation",
    t2_item_b1: "Chest expands", t2_item_b2: "Diaphragm flattens",
    t2_item_k1: "Chest shrinks", t2_item_k2: "Air leaves",
    t2_q: "Which muscle plays the biggest role in breathing?", t2_q_a: "The diaphragm", t2_q_b: "The heart muscle", t2_q_c: "The abdominal muscle", t2_q_d: "The tongue muscle",

    t3_title: "Gas Exchange", t3_text: "Inside the lungs are tiny air sacs (alveoli) surrounded by capillaries. This is where the magic happens: gas exchange.",
    t3_b1: "Oxygen moves from the air sacs into the blood.", t3_b2: "Carbon dioxide moves from the blood into the air sacs to be exhaled.", t3_b3: "The huge internal surface of the lungs makes this very efficient.",
    t3_inst: "Match the substance to its direction in the lungs!",
    t3_l1: "Oxygen", t3_r1: "Into the bloodstream", t3_l2: "Carbon dioxide", t3_r2: "Out into the lungs (then air)", t3_l3: "Alveoli (Air sacs)", t3_r3: "Site of gas exchange",
    t3_q: "Where does the actual gas exchange happen in the lungs?", t3_q_a: "In the alveoli (air sacs)", t3_q_b: "In the trachea", t3_q_c: "In the larynx", t3_q_d: "In the nasal cavity",

    t4_title: "Cellular Respiration", t4_text: "Why do we need oxygen? The answer lies in the cells. The ultimate goal of breathing is energy production.",
    t4_b1: "The blood carries oxygen to every cell in the body.", t4_b2: "Cells use oxygen to 'burn' nutrients (like sugar).", t4_b3: "This process provides energy for our body to live.",
    t4_inst: "What do cells produce using oxygen?", t4_gap_sentence: "Cells use oxygen to produce {gap} in order to survive.",
    t4_c1: "energy", t4_c2: "light", t4_c3: "sound",
    t4_q: "What is the ultimate, most important goal of breathing?", t4_q_a: "Energy production in the cells", t4_q_b: "Cooling down the blood", t4_q_c: "Producing voice", t4_q_d: "Expanding the lungs",

    t5_title: "Summary Quiz", t5_text: "Test your knowledge about breathing and the path of oxygen!",
    t5_b1: "Air goes through the nose, windpipe, to the lungs.", t5_b2: "The diaphragm operates the lungs.", t5_b3: "The goal is getting O2 in and CO2 out.",
    t5_inst: "Where does the blood transport the oxygen?", t5_gap_sentence2: "Oxygen taken from the lungs is carried by the blood to the {gap}.",
    t5_c51: "cells", t5_c52: "stomach", t5_c53: "air",
    t5_q: "Which gas do we exhale in a much higher proportion compared to what we inhaled?", t5_q_a: "Carbon dioxide", t5_q_b: "Oxygen", t5_q_c: "Helium", t5_q_d: "Hydrogen",
  },
  de: {
    explorer_title: "Das Atmungssystem",
    t1_title: "Weg der Luft", t1_text: "Das Atmungssystem bringt sauerstoffreiche Luft in den Körper. Die Luft legt einen langen Weg von der Nasenhöhle zur Lunge zurück.",
    t1_b1: "Nasenhöhle: wärmt, befeuchtet und reinigt die Luft.", t1_b2: "Kehlkopf und Luftröhre: leiten die Luft zur Lunge.", t1_b3: "Bronchien: die Luftröhre teilt sich in zwei Äste, die in die Lunge führen.",
    t1_inst: "Bringe die Wörter in die richtige Reihenfolge!", t1_w1: "Die", t1_w2: "Luft", t1_w3: "strömt", t1_w4: "durch", t1_w5: "die", t1_w6: "Luftröhre.",
    t1_q: "Warum ist es besser, durch die Nase statt durch den Mund zu atmen?", t1_q_a: "Weil die Nase die Luft wärmt und reinigt.", t1_q_b: "Weil Sauerstoff schneller reinkommt.", t1_q_c: "Weil der Mund nur Kohlendioxid ausatmet.", t1_q_d: "Weil im Mund keine Luft ist.",

    t2_title: "Atembewegungen", t2_text: "Die Lunge hat keine eigenen Muskeln. Die Atmung wird durch die Brustmuskulatur und das Zwerchfell (ein großer Kuppelmuskel) gesteuert.",
    t2_b1: "Einatmen: das Zwerchfell flacht ab, der Brustkorb weitet sich, Luft strömt ein.", t2_b2: "Ausatmen: das Zwerchfell entspannt (wölbt sich), die Luft wird herausgepresst.", t2_b3: "Wir atmen im Durchschnitt 14-16 Mal pro Minute.",
    t2_inst: "Einatmen oder Ausatmen? Sortiere die Vorgänge!",
    t2_bucket_be: "Einatmen", t2_bucket_ki: "Ausatmen",
    t2_item_b1: "Brustkorb weitet sich", t2_item_b2: "Zwerchfell flacht ab",
    t2_item_k1: "Brustkorb verengt sich", t2_item_k2: "Luft strömt aus",
    t2_q: "Welcher Muskel spielt die größte Rolle bei der Atmung?", t2_q_a: "Das Zwerchfell", t2_q_b: "Der Herzmuskel", t2_q_c: "Die Bauchmuskeln", t2_q_d: "Der Zungenmuskel",

    t3_title: "Gasaustausch", t3_text: "In der Lunge befinden sich winzige Lungenbläschen (Alveolen), die von Kapillaren umgeben sind. Hier geschieht der Gasaustausch.",
    t3_b1: "Sauerstoff wandert aus den Bläschen ins Blut.", t3_b2: "Kohlendioxid wandert aus dem Blut in die Bläschen zum Ausatmen.", t3_b3: "Die riesige innere Oberfläche der Lunge macht dies so effizient.",
    t3_inst: "Verbinde den Stoff mit seiner Richtung in der Lunge!",
    t3_l1: "Sauerstoff", t3_r1: "Ins Blut hinein", t3_l2: "Kohlendioxid", t3_r2: "In die Lunge (zum Ausatmen)", t3_l3: "Lungenbläschen", t3_r3: "Ort des Gasaustauschs",
    t3_q: "Wo findet der eigentliche Gasaustausch in der Lunge statt?", t3_q_a: "In den Lungenbläschen", t3_q_b: "In der Luftröhre", t3_q_c: "Im Kehlkopf", t3_q_d: "In der Nasenhöhle",

    t4_title: "Zellatmung", t4_text: "Warum brauchen wir Sauerstoff? Die Antwort liegt in den Zellen. Das ultimative Ziel der Atmung ist die Energiegewinnung.",
    t4_b1: "Das Blut bringt den Sauerstoff zu jeder Zelle im Körper.", t4_b2: "Die Zellen nutzen Sauerstoff, um Nährstoffe (Zucker) zu 'verbrennen'.", t4_b3: "Aus diesem Prozess gewinnt der Körper Energie zum Leben.",
    t4_inst: "Was produzieren die Zellen mit Hilfe von Sauerstoff?", t4_gap_sentence: "Zellen nutzen Sauerstoff, um {gap} zum Überleben zu produzieren.",
    t4_c1: "Energie", t4_c2: "Licht", t4_c3: "Töne",
    t4_q: "Was ist das wichtigste und letzte Ziel der Atmung im Körper?", t4_q_a: "Energiegewinnung in den Zellen", t4_q_b: "Abkühlung des Blutes", t4_q_c: "Stimmbildung", t4_q_d: "Dehnung der Lunge",

    t5_title: "Abschluss-Quiz", t5_text: "Teste dein Wissen über die Atmung und den Weg des Sauerstoffs!",
    t5_b1: "Die Luft strömt durch Nase und Luftröhre in die Lunge.", t5_b2: "Das Zwerchfell steuert die Lunge.", t5_b3: "Das Ziel ist: O2 rein und CO2 raus.",
    t5_inst: "Wohin transportiert das Blut den Sauerstoff?", t5_gap_sentence2: "Der aus der Lunge aufgenommene Sauerstoff wird zu den {gap} transportiert.",
    t5_c51: "Zellen", t5_c52: "Magen", t5_c53: "Luft",
    t5_q: "Welches Gas atmen wir im Vergleich zum Sauerstoff in deutlich größerer Menge aus?", t5_q_a: "Kohlendioxid", t5_q_b: "Sauerstoff", t5_q_c: "Helium", t5_q_d: "Wasserstoff",
  },
  ro: {
    explorer_title: "Sistemul Respirator",
    t1_title: "Drumul Aerului", t1_text: "Sistemul respirator aduce aer bogat în oxigen în organism. Aerul parcurge un drum lung de la cavitatea nazală până la plămâni.",
    t1_b1: "Cavitatea nazală: încălzește, umezește și curăță aerul.", t1_b2: "Laringele și traheea: conduc aerul spre plămâni.", t1_b3: "Bronhiile: traheea se desparte în două ramuri ce intră în plămâni.",
    t1_inst: "Pune cuvintele în ordine!", t1_w1: "Aerul", t1_w2: "curge", t1_w3: "prin", t1_w4: "trahee", t1_w5: "spre", t1_w6: "plămâni.",
    t1_q: "De ce este mai bine să respirăm pe nas decât pe gură?", t1_q_a: "Pentru că nasul încălzește și curăță aerul.", t1_q_b: "Pentru că oxigenul intră mai repede.", t1_q_c: "Pentru că gura expiră doar dioxid de carbon.", t1_q_d: "Pentru că în gură nu există aer.",

    t2_title: "Mișcările Respiratorii", t2_text: "Plămânii nu au mușchi proprii. Respirația este realizată de mușchii cutiei toracice și de un mușchi mare în formă de cupolă, diafragma.",
    t2_b1: "Inspirația: diafragma se aplatizează, pieptul se extinde, aerul intră.", t2_b2: "Expirația: diafragma se relaxează (se curbează), aerul este împins afară.", t2_b3: "Respirăm în medie de 14-16 ori pe minut.",
    t2_inst: "Inspirație sau Expirație? Sortează procesele!",
    t2_bucket_be: "Inspirație", t2_bucket_ki: "Expirație",
    t2_item_b1: "Pieptul se extinde", t2_item_b2: "Diafragma se aplatizează",
    t2_item_k1: "Pieptul se micșorează", t2_item_k2: "Aerul iese",
    t2_q: "Care mușchi are cel mai mare rol în respirație?", t2_q_a: "Diafragma", t2_q_b: "Mușchiul cardiac", t2_q_c: "Mușchii abdominali", t2_q_d: "Mușchiul limbii",

    t3_title: "Schimbul de Gaze", t3_text: "În interiorul plămânilor se află mici saci aerieni (alveole) înconjurați de capilare. Aici are loc magia: schimbul de gaze.",
    t3_b1: "Oxigenul trece din alveole în sânge.", t3_b2: "Dioxidul de carbon trece din sânge în alveole pentru a fi expirat.", t3_b3: "Suprafața internă uriașă a plămânilor face acest lucru foarte eficient.",
    t3_inst: "Potrivește substanța cu direcția ei în plămâni!",
    t3_l1: "Oxigen", t3_r1: "Intră în fluxul sanguin", t3_l2: "Dioxid de carbon", t3_r2: "Iese în plămâni (apoi în aer)", t3_l3: "Alveole", t3_r3: "Locul schimbului de gaze",
    t3_q: "Unde are loc propriu-zis schimbul de gaze în plămâni?", t3_q_a: "În alveole (sacii aerieni)", t3_q_b: "În trahee", t3_q_c: "În laringe", t3_q_d: "În cavitatea nazală",

    t4_title: "Respirația Celulară", t4_text: "De ce avem nevoie de oxigen? Răspunsul se află în celule. Scopul final al respirației este producerea de energie.",
    t4_b1: "Sângele transportă oxigenul la fiecare celulă din corp.", t4_b2: "Celulele folosesc oxigenul pentru a 'arde' nutrienții (cum ar fi zahărul).", t4_b3: "Acest proces oferă energie organismului pentru a trăi.",
    t4_inst: "Ce produc celulele folosind oxigenul?", t4_gap_sentence: "Celulele folosesc oxigenul pentru a produce {gap} și a supraviețui.",
    t4_c1: "energie", t4_c2: "lumină", t4_c3: "sunet",
    t4_q: "Care este scopul final și cel mai important al respirației?", t4_q_a: "Producerea de energie în celule", t4_q_b: "Răcirea sângelui", t4_q_c: "Producerea vocii", t4_q_d: "Extinderea plămânilor",

    t5_title: "Test Recapitulativ", t5_text: "Testează-ți cunoștințele despre respirație și drumul oxigenului!",
    t5_b1: "Aerul trece prin nas, trahee, până în plămâni.", t5_b2: "Diafragma controlează plămânii.", t5_b3: "Scopul este oxigen înăuntru, CO2 afară.",
    t5_inst: "Unde transportă sângele oxigenul?", t5_gap_sentence2: "Oxigenul preluat din plămâni este transportat de sânge la {gap}.",
    t5_c51: "celule", t5_c52: "stomac", t5_c53: "aer",
    t5_q: "Ce gaz expirăm într-o proporție mult mai mare în comparație cu ceea ce am inspirat?", t5_q_a: "Dioxid de carbon", t5_q_b: "Oxigen", t5_q_c: "Heliu", t5_q_d: "Hidrogen",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <LungsSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "word-order",
      words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      instruction: "t1_inst",
      hint1: "t1_b2",
      hint2: "t1_b3",
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
        { id: "be", label: "t2_bucket_be" },
        { id: "ki", label: "t2_bucket_ki" },
      ],
      items: [
        { text: "t2_item_b1", bucketId: "be" },
        { text: "t2_item_k1", bucketId: "ki" },
        { text: "t2_item_b2", bucketId: "be" },
        { text: "t2_item_k2", bucketId: "ki" },
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
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
      type: "gap-fill",
      sentence: "t4_gap_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "t4_b3",
      hint2: "t4_b2",
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
      type: "gap-fill",
      sentence: "t5_gap_sentence2",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b3",
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
  icon: "💨",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const RespirationExplorer = memo(function RespirationExplorer({
  color = "#0284C7", // Égszínkék (Sky-600) a levegőre/oxigénre utalva
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
      grade={6} 
      explorerId="bio_k6_respiration" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default RespirationExplorer;
