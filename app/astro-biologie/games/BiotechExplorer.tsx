"use client";
// BiotechExplorer — Island i8: Biotechnology (Biotechnologie) Grade 8
// Topics: Enzymes, Biotech applications, Bioethics, Modern biotech (PCR, gel electrophoresis, CRISPR)
// Teaching-first: R1-R4 info rounds, R5 quiz

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: Enzymes
    r1_title: "Enzymes: Biological Catalysts",
    r1_text: "Enzymes are proteins that speed up chemical reactions in living cells without being used up themselves.",
    r1_fact1: "Each enzyme has a unique 3D shape that fits specific molecules (lock-and-key model)",
    r1_fact2: "Enzymes lower the activation energy needed to start a reaction",
    r1_fact3: "Body temperature affects enzyme activity — too hot denatures them, too cold slows them down",
    r1_fact4: "Examples: amylase breaks down starch, protease breaks down proteins, lipase breaks down fats",

    // Round 2: Biotech Applications
    r2_title: "Biotechnology in Real Life",
    r2_text: "Biotechnology uses living organisms to make products we use every day — from medicine to food.",
    r2_fact1: "Insulin production: genetically modified bacteria make insulin for diabetics",
    r2_fact2: "Fermentation: yeast ferments sugar to make bread rise and beer/wine alcohol",
    r2_fact3: "Biofuels: algae and plants are engineered to produce ethanol and biodiesel",
    r2_fact4: "Cheese-making: enzymes from bacteria curdle milk to separate curds and whey",

    // Round 3: Bioethics
    r3_title: "Bioethics: The Moral Questions",
    r3_text: "As biotechnology advances, we face important ethical questions about modifying life.",
    r3_fact1: "GMO crops: Pros = higher yield, drought-resistant; Cons = unknown long-term effects",
    r3_fact2: "Gene therapy: Can fix genetic diseases, but raises questions about designer babies",
    r3_fact3: "Animal testing: Still needed to test safety, but we must minimize suffering",
    r3_fact4: "CRISPR editing: Powerful tool, but should we edit human genes? Who decides?",

    // Round 4: Modern Biotechnology Techniques
    r4_title: "High-Tech Tools: PCR, Gel Electrophoresis, CRISPR",
    r4_text: "Modern biotechnology uses sophisticated techniques to read, copy, and edit DNA.",
    r4_fact1: "PCR (Polymerase Chain Reaction): Makes millions of copies of a DNA segment in hours",
    r4_fact2: "Gel electrophoresis: Separates DNA fragments by size using electric current — like molecular sorting",
    r4_fact3: "CRISPR-Cas9: Molecular scissors that can cut DNA at precise spots and edit genes",
    r4_fact4: "DNA sequencing: Reads the exact order of billions of base pairs in the human genome",

    // Round 5: Quiz
    r5_title: "Biotechnology Review",

    // Quiz questions
    q1_q: "What is the main function of an enzyme?",
    q1_a: "Store energy in molecules",
    q1_b: "Speed up chemical reactions without being used up",
    q1_c: "Transport oxygen in the bloodstream",
    q1_d: "Build muscle tissue",

    q2_q: "Which process involves genetically modified organisms making products for humans?",
    q2_a: "Natural selection",
    q2_b: "Photosynthesis",
    q2_c: "Biotechnology applications (like insulin from bacteria)",
    q2_d: "Cellular respiration",

    q3_q: "What does CRISPR-Cas9 do?",
    q3_a: "Copies DNA molecules",
    q3_b: "Acts as molecular scissors to edit genes",
    q3_c: "Breaks down proteins",
    q3_d: "Transports nutrients in cells",
  },
  de: {
    // Round 1: Enzyme
    r1_title: "Enzyme: Biologische Katalysatoren",
    r1_text: "Enzyme sind Proteine, die chemische Reaktionen in lebenden Zellen beschleunigen, ohne dabei aufgebraucht zu werden.",
    r1_fact1: "Jedes Enzym hat eine einzigartige 3D-Form, die zu bestimmten Molekülen passt (Schlüssel-Schloss-Modell)",
    r1_fact2: "Enzyme senken die Aktivierungsenergie, die für den Start einer Reaktion erforderlich ist",
    r1_fact3: "Die Körpertemperatur beeinflusst die Enzymaktivität — zu heiß denaturiert sie, zu kalt verlangsamt sie",
    r1_fact4: "Beispiele: Amylase spaltet Stärke, Protease spaltet Proteine, Lipase spaltet Fette",

    // Round 2: Biotechnologie Anwendungen
    r2_title: "Biotechnologie im Alltag",
    r2_text: "Biotechnologie nutzt lebende Organismen, um Produkte herzustellen, die wir täglich verwenden — von Medizin bis Lebensmitteln.",
    r2_fact1: "Insulinproduktion: gentechnisch veränderte Bakterien stellen Insulin für Diabetiker her",
    r2_fact2: "Gärung: Hefe gärt Zucker, um Brot zum Aufgehen zu bringen und Alkohol in Bier/Wein zu erzeugen",
    r2_fact3: "Biokraftstoffe: Algen und Pflanzen werden so gezüchtet, dass sie Ethanol und Biodiesel produzieren",
    r2_fact4: "Käseherstellung: Enzyme aus Bakterien lassen Milch gerinnen, um Molke und Quark zu trennen",

    // Round 3: Bioethik
    r3_title: "Bioethik: Die moralischen Fragen",
    r3_text: "Mit dem Fortschritt der Biotechnologie stehen wir vor wichtigen ethischen Fragen über die Veränderung von Leben.",
    r3_fact1: "Gentechnisch veränderte Pflanzen: Vorteile = höherer Ertrag, trockenheitsresistent; Nachteile = unbekannte Langzeiteffekte",
    r3_fact2: "Gentherapie: Kann genetische Krankheiten heilen, wirft aber Fragen über Designerbabys auf",
    r3_fact3: "Tierversuche: Noch nötig zur Sicherheitsprüfung, aber wir müssen Leiden minimieren",
    r3_fact4: "CRISPR-Bearbeitung: Kraftvolles Werkzeug, aber sollten wir menschliche Gene bearbeiten? Wer entscheidet?",

    // Round 4: Moderne Biotechnologie Techniken
    r4_title: "High-Tech Tools: PCR, Gelelektrophorese, CRISPR",
    r4_text: "Moderne Biotechnologie nutzt ausgefeilte Techniken zum Lesen, Kopieren und Bearbeiten von DNA.",
    r4_fact1: "PCR (Polymerase-Kettenreaktion): Macht in Stunden Millionen Kopien eines DNA-Segments",
    r4_fact2: "Gelelektrophorese: Trennt DNA-Fragmente durch Größe mit Hilfe von Elektrizität — wie molekulares Sortieren",
    r4_fact3: "CRISPR-Cas9: Molekulare Schere, die DNA an genauen Stellen schneiden und Gene bearbeiten kann",
    r4_fact4: "DNA-Sequenzierung: Liest die exakte Reihenfolge von Milliarden Basenpaaren im Humangenom",

    // Round 5: Quiz
    r5_title: "Biotechnologie-Überprüfung",

    q1_q: "Was ist die Hauptfunktion eines Enzyms?",
    q1_a: "Energie in Molekülen speichern",
    q1_b: "Chemische Reaktionen beschleunigen, ohne aufgebraucht zu werden",
    q1_c: "Sauerstoff im Blutkreislauf transportieren",
    q1_d: "Muskelgewebe aufbauen",

    q2_q: "Welcher Prozess bezieht gentechnisch veränderte Organismen ein, die Produkte für Menschen herstellen?",
    q2_a: "Natürliche Selektion",
    q2_b: "Photosynthese",
    q2_c: "Biotechnologie-Anwendungen (z.B. Insulin aus Bakterien)",
    q2_d: "Zellatmung",

    q3_q: "Was tut CRISPR-Cas9?",
    q3_a: "Kopiert DNA-Moleküle",
    q3_b: "Wirkt als molekulare Schere zum Bearbeiten von Genen",
    q3_c: "Spaltet Proteine auf",
    q3_d: "Transportiert Nährstoffe in Zellen",
  },
  hu: {
    // Round 1: Enzimek
    r1_title: "Enzimek: Biológiai katalitikusok",
    r1_text: "Az enzimek olyan fehérjék, amelyek felgyorsítják az élő sejtek kémiai reakcióit, miközben maguk nem fogynak el.",
    r1_fact1: "Minden enzimnek egyedi 3D alakja van, amely specifikus molekulákhoz illeszkedik (kulcs-zár modell)",
    r1_fact2: "Az enzimek csökkentik az aktiválási energiát, amely szükséges a reakció megkezdéséhez",
    r1_fact3: "A testhőmérséklet befolyásolja az enzim aktivitást — túl meleg denaturálja, túl hideg lelassítja",
    r1_fact4: "Példák: amiláz bontja a keményítőt, proteáz bontja a fehérjéket, lipáz bontja a zsírokat",

    // Round 2: Biotechnológia alkalmazások
    r2_title: "Biotechnológia a valós életben",
    r2_text: "A biotechnológia élő szervezeteket használ olyan termékek előállítására, amelyeket naponta használunk — gyógyszertől az élelmiszerekig.",
    r2_fact1: "Inzulin termelés: genetikailag módosított baktériumok inzulint termelnek a cukorbetegeknek",
    r2_fact2: "Erjedés: az élesztő cukrot erjeszti, hogy a kenyér felemelkedjen és alkoholt termeljen sörben/borban",
    r2_fact3: "Biofuels: algákat és növényeket úgy tenyésztik, hogy etanolt és biodízelt termeljenek",
    r2_fact4: "Sajtkészítés: baktériumokból származó enzimek sajtot csomósítanak, hogy tejsavót és túrót választanak szét",

    // Round 3: Biológiai etika
    r3_title: "Biológiai etika: A morális kérdések",
    r3_text: "Ahogy a biotechnológia előrehalad, fontos etikai kérdésekkel állunk szemben az élet módosításáról.",
    r3_fact1: "GMO termények: Előnyök = magasabb hozam, szárazságtűrés; Hátrányok = ismeretlen hosszú távú hatások",
    r3_fact2: "Génterápia: Ki tudja szüntetni a genetikai betegségeket, de kérdéseket vet fel a tervezett babákról",
    r3_fact3: "Állatpróbák: Továbbra is szükséges a biztonság teszteléséhez, de minimalizálnunk kell a szenvedést",
    r3_fact4: "CRISPR szerkesztés: Hatékony eszköz, de szerkesszünk-e az emberi géneket? Ki dönt?",

    // Round 4: Modern biotechnológiai technikák
    r4_title: "Csúcstechnika: PCR, gél elektroforézis, CRISPR",
    r4_text: "A modern biotechnológia kifinomult technikákat használ a DNS olvasásához, másolásához és szerkesztéséhez.",
    r4_fact1: "PCR (polimeráz lánc reakció): Órák alatt millió másolatot készít egy DNS szegmentből",
    r4_fact2: "Gél elektroforézis: Elektromosság segítségével méret szerint elkülöníti a DNS fragmentumokat — mint molekuláris rendezés",
    r4_fact3: "CRISPR-Cas9: Molekuláris olló, amely pontosan DNS-t vág és géneket szerkeszthet",
    r4_fact4: "DNS szekvenálás: Az emberi genóm milliárd bázispárjának pontos sorrendjét olvassa",

    // Round 5: Quiz
    r5_title: "Biotechnológia áttekintés",

    q1_q: "Mi az enzim fő funkciója?",
    q1_a: "Energia tárolása molekulákban",
    q1_b: "Kémiai reakciók felgyorsítása felhasználás nélkül",
    q1_c: "Oxigén szállítása a vérkeringésben",
    q1_d: "Izomszövet építése",

    q2_q: "Mely folyamat magában foglalja a genetikailag módosított szervezeteket, amelyek termékeket termelnek az embernek?",
    q2_a: "Természetes szelekció",
    q2_b: "Fotoszintézis",
    q2_c: "Biotechnológiai alkalmazások (pl. inzulin baktériumokból)",
    q2_d: "Sejtes légzés",

    q3_q: "Mit csinál a CRISPR-Cas9?",
    q3_a: "DNS molekulákat másolja",
    q3_b: "Molekuláris olló, amely géneket szerkeszt",
    q3_c: "Fehérjéket bont le",
    q3_d: "Tápanyagokat szállít a sejtekben",
  },
  ro: {
    // Round 1: Enzime
    r1_title: "Enzime: Catalizatori biologici",
    r1_text: "Enzimele sunt proteine care accelerează reacțiile chimice în celulele vii fără a fi consumate.",
    r1_fact1: "Fiecare enzimă are o formă 3D unică care se potrivește cu molecule specifice (modelul cheie-broască)",
    r1_fact2: "Enzimele scad energia de activare necesară pentru a începe o reacție",
    r1_fact3: "Temperatura corpului afectează activitatea enzimelor — prea cald le denaturează, prea rece le încetinește",
    r1_fact4: "Exemple: amilaza descompune amidonul, proteaza descompune proteinele, lipaza descompune grasimile",

    // Round 2: Aplicații biotehice
    r2_title: "Biotehnologie în viața reală",
    r2_text: "Biotehnologia folosește organisme vii pentru a produce produse pe care le folosim zilnic — de la medicamente la alimente.",
    r2_fact1: "Producția de insulină: bacteriile modificate genetic produc insulină pentru diabetici",
    r2_fact2: "Fermentație: drojdia fermentează zahărul pentru a ridica pâinea și a produce alcool în bere/vin",
    r2_fact3: "Biocombustibili: algele și plantele sunt inginerie genetică pentru a produce etanol și biodiesel",
    r2_fact4: "Fabricarea brânzetei: enzimele din bacterii înăcresc laptele pentru a separa zer și brânzetă",

    // Round 3: Bioetica
    r3_title: "Bioetica: Întrebări morale",
    r3_text: "Pe măsură ce biotehnologia avansează, ne confruntăm cu întrebări etice importante despre modificarea vieții.",
    r3_fact1: "Culturi GMO: Avantaje = randament mai mare, rezistent la secetă; Dezavantaje = efecte pe termen lung necunoscute",
    r3_fact2: "Terapia genică: Poate vindeca bolile genetice, dar ridică întrebări despre bebeluși designeri",
    r3_fact3: "Testarea pe animale: Încă este necesară pentru testarea siguranței, dar trebuie să minimizăm suferința",
    r3_fact4: "Editarea CRISPR: Instrument puternic, dar ar trebui să modificăm genele umane? Cine decide?",

    // Round 4: Tehnici moderne de biotehnologie
    r4_title: "Instrumente high-tech: PCR, electroforeza pe gel, CRISPR",
    r4_text: "Biotehnologia modernă folosește tehnici sofisticate pentru a citi, copia și edita ADN.",
    r4_fact1: "PCR (reacția lanțului polimerazei): Face milioane de copii ale unui segment de ADN în ore",
    r4_fact2: "Electroforeza pe gel: Separă fragmentele de ADN după mărime folosind curent electric — cum ar fi sortarea moleculară",
    r4_fact3: "CRISPR-Cas9: Foarfecă moleculară care poate tăia ADN în locuri precise și edita gene",
    r4_fact4: "Secvențierea ADN: Citește ordinea exactă a miliardelor de perechi de baze din genomul uman",

    // Round 5: Quiz
    r5_title: "Revizuire biotehnologie",

    q1_q: "Care este funcția principală a unui enzimă?",
    q1_a: "Stocarea energiei în molecule",
    q1_b: "Accelerarea reacțiilor chimice fără a fi consumate",
    q1_c: "Transportul oxigenului în circulația sângelui",
    q1_d: "Construirea țesutului muscular",

    q2_q: "Care proces implică organisme modificate genetic care produc produse pentru oameni?",
    q2_a: "Selecția naturală",
    q2_b: "Fotosinteza",
    q2_c: "Aplicații biotehnologie (cum ar fi insulină din bacterii)",
    q2_d: "Respirația celulară",

    q3_q: "Ce face CRISPR-Cas9?",
    q3_a: "Copiază molecule de ADN",
    q3_b: "Acționează ca foarfecă moleculară pentru a edita gene",
    q3_c: "Descompune proteinele",
    q3_d: "Transportă nutrienți în celule",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Round 1 SVG: Enzyme with substrate lock-and-key model */
function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="biotech_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E3F2FD" />
          <stop offset="100%" stopColor="#BBDEFB" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#biotech_bg)" />

      {/* ENZYME (left side) — purple protein shape */}
      <ellipse cx="60" cy="80" rx="35" ry="40" fill="#BA68C8" opacity="0.9" />
      <circle cx="50" cy="70" r="12" fill="#BA68C8" opacity="0.9" />
      <circle cx="75" cy="90" r="14" fill="#BA68C8" opacity="0.9" />

      {/* SUBSTRATE (right side) — orange shape fitting the enzyme */}
      <g transform="translate(160, 80)">
        <ellipse cx="0" cy="0" rx="28" ry="30" fill="#FF9800" opacity="0.8" />
        <circle cx="-15" cy="-12" r="10" fill="#FF9800" opacity="0.8" />
      </g>

      {/* ARROW showing fit */}
      <path d="M 105 80 L 125 80" stroke="#555" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#555" />
        </marker>
      </defs>

      {/* LABELS — no text, just shapes */}
      {/* Bottom description panels as colored boxes */}
      <rect x="20" y="130" width="60" height="20" fill="rgba(186,104,200,0.3)" rx="4" />
      <rect x="160" y="130" width="60" height="20" fill="rgba(255,152,0,0.3)" rx="4" />
      <line x1="80" y1="120" x2="160" y2="120" stroke="#999" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
  );
}

/** Round 2 SVG: Biotechnology applications (insulin from bacteria, fermentation, biofuel) */
function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="biotech_bg2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F0F4C3" />
          <stop offset="100%" stopColor="#E6F3FF" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#biotech_bg2)" />

      {/* LEFT: Bacteria container (insulin) */}
      <circle cx="50" cy="60" r="30" fill="none" stroke="#4CAF50" strokeWidth="2" />
      <circle cx="45" cy="50" r="5" fill="#4CAF50" />
      <circle cx="55" cy="55" r="4" fill="#4CAF50" />
      <circle cx="50" cy="65" r="5" fill="#4CAF50" />
      {/* Insulin symbol — simple Y shape */}
      <path d="M 50 35 L 48 45 L 45 50 M 50 35 L 52 45 L 55 50 M 50 35 L 50 50" stroke="#FF1744" strokeWidth="1.5" fill="none" />

      {/* CENTER: Fermentation vessel (bread/beer) */}
      <path d="M 115 90 L 110 50 Q 110 40 120 40 L 140 40 Q 150 40 150 50 L 145 90 Z" stroke="#8B4513" strokeWidth="2" fill="rgba(139,69,19,0.2)" />
      {/* Bubbles inside — fermentation */}
      <circle cx="125" cy="70" r="3" fill="rgba(100,200,255,0.5)" />
      <circle cx="130" cy="65" r="2.5" fill="rgba(100,200,255,0.4)" />
      <circle cx="128" cy="50" r="2" fill="rgba(100,200,255,0.3)" />

      {/* RIGHT: Biofuel pump/dispenser */}
      <rect x="185" y="50" width="30" height="35" fill="none" stroke="#FFC107" strokeWidth="2" rx="3" />
      <rect x="190" y="55" width="20" height="15" fill="rgba(255,193,7,0.3)" />
      {/* Drop symbol */}
      <path d="M 200 72 L 197 80 Q 200 85 203 80 Z" fill="#FFC107" />

      {/* Bottom labels as shapes */}
      <rect x="35" y="110" width="30" height="12" fill="rgba(76,175,80,0.2)" rx="2" />
      <rect x="105" y="110" width="30" height="12" fill="rgba(139,69,19,0.2)" rx="2" />
      <rect x="180" y="110" width="40" height="12" fill="rgba(255,193,7,0.2)" rx="2" />
    </svg>
  );
}

/** Round 3 SVG: Bioethics — GMO, gene therapy, animal testing symbols */
function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="biotech_bg3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFEBEE" />
          <stop offset="100%" stopColor="#FCE4EC" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#biotech_bg3)" />

      {/* LEFT: GMO crop — plant in DNA helix */}
      <g transform="translate(50, 70)">
        {/* Plant stem */}
        <line x1="0" y1="0" x2="0" y2="20" stroke="#2E7D32" strokeWidth="2" />
        {/* Leaves */}
        <ellipse cx="-10" cy="-5" rx="8" ry="12" fill="#4CAF50" transform="rotate(-40 -10 -5)" />
        <ellipse cx="10" cy="-5" rx="8" ry="12" fill="#4CAF50" transform="rotate(40 10 -5)" />
        {/* DNA helix outline */}
        <path d="M -15 10 Q -5 5 5 10 Q 15 15 5 20 Q -5 25 -15 20 Z" stroke="#9C27B0" strokeWidth="1.5" fill="none" />
      </g>

      {/* CENTER: Gene therapy — cell with modification */}
      <circle cx="130" cy="70" r="20" fill="none" stroke="#2196F3" strokeWidth="2" />
      <circle cx="130" cy="70" r="12" fill="rgba(33,150,243,0.2)" />
      {/* Gene scissors symbol */}
      <path d="M 120 65 L 110 60 M 120 65 L 110 70 M 140 65 L 150 60 M 140 65 L 150 70" stroke="#FF6F00" strokeWidth="1.5" />

      {/* RIGHT: Animal testing — silhouette symbol */}
      <g transform="translate(190, 75)">
        {/* Mouse silhouette */}
        <ellipse cx="0" cy="0" rx="12" ry="8" fill="#455A64" />
        <circle cx="8" cy="-2" r="5" fill="#455A64" />
        {/* Tail */}
        <path d="M 15 2 Q 20 5 22 0" stroke="#455A64" strokeWidth="1.5" fill="none" />
        {/* Question mark overlay */}
        <text x="0" y="12" fontSize="12" fontWeight="bold" fill="#D32F2F" textAnchor="middle">?</text>
      </g>

      {/* Bottom category boxes */}
      <rect x="25" y="110" width="50" height="12" fill="rgba(76,175,80,0.2)" rx="2" />
      <rect x="105" y="110" width="50" height="12" fill="rgba(33,150,243,0.2)" rx="2" />
      <rect x="170" y="110" width="50" height="12" fill="rgba(213,0,0,0.2)" rx="2" />
    </svg>
  );
}

/** Round 4 SVG: Modern biotech — PCR tubes, gel electrophoresis, CRISPR scissors */
function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="biotech_bg4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0F2F1" />
          <stop offset="100%" stopColor="#B2DFDB" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#biotech_bg4)" />

      {/* LEFT: PCR tubes — three test tubes with increasing DNA strands */}
      <g transform="translate(45, 60)">
        {/* Tube 1 */}
        <rect x="0" y="0" width="8" height="20" fill="rgba(255,152,0,0.5)" stroke="#FF9800" strokeWidth="1" rx="1" />
        <line x1="3" y1="2" x2="5" y2="8" stroke="#FF5722" strokeWidth="0.8" />
        {/* Tube 2 */}
        <rect x="12" y="0" width="8" height="20" fill="rgba(255,152,0,0.6)" stroke="#FF9800" strokeWidth="1" rx="1" />
        <line x1="15" y1="2" x2="17" y2="4" stroke="#FF5722" strokeWidth="0.8" />
        <line x1="16" y1="6" x2="18" y2="10" stroke="#FF5722" strokeWidth="0.8" />
        {/* Tube 3 */}
        <rect x="24" y="0" width="8" height="20" fill="rgba(255,152,0,0.7)" stroke="#FF9800" strokeWidth="1" rx="1" />
        <line x1="27" y1="2" x2="29" y2="6" stroke="#FF5722" strokeWidth="0.8" />
        <line x1="28" y1="8" x2="30" y2="12" stroke="#FF5722" strokeWidth="0.8" />
        <line x1="27" y1="13" x2="29" y2="18" stroke="#FF5722" strokeWidth="0.8" />
      </g>

      {/* CENTER: Gel electrophoresis — gel with separated bands */}
      <g transform="translate(125, 55)">
        {/* Gel base */}
        <rect x="0" y="0" width="25" height="30" fill="rgba(156,39,176,0.2)" stroke="#9C27B0" strokeWidth="1.5" rx="2" />
        {/* DNA bands */}
        <rect x="2" y="3" width="21" height="2" fill="#9C27B0" />
        <rect x="4" y="10" width="17" height="2" fill="#9C27B0" opacity="0.8" />
        <rect x="6" y="17" width="13" height="2" fill="#9C27B0" opacity="0.6" />
        <rect x="8" y="24" width="9" height="2" fill="#9C27B0" opacity="0.4" />
      </g>

      {/* RIGHT: CRISPR scissors — DNA double helix with scissors */}
      <g transform="translate(185, 70)">
        {/* DNA helix */}
        <path d="M -8 -10 Q 0 -5 8 -10 Q 16 -15 8 -20" stroke="#2196F3" strokeWidth="1.5" fill="none" />
        <path d="M -8 0 Q 0 5 8 0 Q 16 -5 8 -10" stroke="#2196F3" strokeWidth="1.5" fill="none" opacity="0.6" />
        {/* Scissors cutting */}
        <path d="M -4 -5 L 4 5 M 4 -5 L -4 5" stroke="#FF1744" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Bottom labels */}
      <rect x="20" y="110" width="50" height="12" fill="rgba(255,152,0,0.2)" rx="2" />
      <rect x="105" y="110" width="50" height="12" fill="rgba(156,39,176,0.2)" rx="2" />
      <rect x="170" y="110" width="50" height="12" fill="rgba(33,150,243,0.2)" rx="2" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const BIOTECH_DEF: ExplorerDef = {
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
      type: "info",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => SVG_R3(),
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
    },
    {
      type: "info",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => SVG_R4(),
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => SVG_R4(),
      questions: [
        {
          question: "q1_q",
          choices: ["q1_a", "q1_b", "q1_c", "q1_d"],
          answer: "q1_b",
        },
        {
          question: "q2_q",
          choices: ["q2_a", "q2_b", "q2_c", "q2_d"],
          answer: "q2_c",
        },
        {
          question: "q3_q",
          choices: ["q3_a", "q3_b", "q3_c", "q3_d"],
          answer: "q3_b",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function BiotechExplorer({
  color = "#8E24AA",
  lang = "en",
  onDone,
}: {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}) {
  return <ExplorerEngine def={BIOTECH_DEF} color={color} lang={lang} onDone={onDone} />;
}
