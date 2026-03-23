"use client";
// WordProblemExplorer4 — Multi-step word problems for Grade 4 (island i6)
// Uses ExplorerEngine with 3 topics: reading problems, solving strategies, checking work

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Problem visualization with objects ─────────────────────────────────────

const ProblemVisualizationSvg = memo(function ProblemVisualizationSvg({
  scenario = "apples",
  initial = 12,
  operation = "remove",
  amount = 5,
  lang = "en",
}: {
  scenario?: string;
  initial?: number;
  operation?: string;
  amount?: number;
  lang?: string;
}) {
  const t = LABELS[lang] || LABELS.en;
  let itemColor = "#FFD700";
  let itemShape = "circle";
  if (scenario === "apples") {
    itemColor = "#EF4444";
    itemShape = "circle";
  } else if (scenario === "books") {
    itemColor = "#3B82F6";
    itemShape = "rect";
  } else if (scenario === "balls") {
    itemColor = "#10B981";
    itemShape = "circle";
  }

  const remainingAfter = operation === "remove" ? initial - amount : initial + amount;

  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="pvG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#pvG)" rx="16" />

      {/* BEFORE: Show initial items */}
      <text x="30" y="20" fontSize="12" fontWeight="bold" fill="rgba(255,255,255,0.7)" textAnchor="start">
        {t.pv_start}
      </text>
      <g transform="translate(20, 35)">
        {Array.from({ length: Math.min(initial, 10) }, (_, i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          return itemShape === "circle" ? (
            <circle key={i} cx={col * 18 + 9} cy={row * 18 + 9} r="7" fill={itemColor} opacity="0.8" />
          ) : (
            <rect key={i} x={col * 18 + 2} y={row * 18 + 2} width="14" height="14" fill={itemColor} opacity="0.8" rx="2" />
          );
        })}
        {initial > 10 && (
          <text x="95" y="15" fontSize="11" fill="rgba(255,255,255,0.5)">
            +{initial - 10}
          </text>
        )}
      </g>

      {/* Operation label */}
      <text x="120" y="45" fontSize="11" fontWeight="bold" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        {operation === "remove" ? `${t.pv_remove} ${amount}` : `${t.pv_add} ${amount}`}
      </text>

      {/* AFTER: Show remaining items */}
      <text x="150" y="20" fontSize="12" fontWeight="bold" fill="rgba(255,255,255,0.7)" textAnchor="start">
        {t.pv_now}
      </text>
      <g transform="translate(150, 35)">
        {Array.from({ length: Math.min(remainingAfter, 10) }, (_, i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          return itemShape === "circle" ? (
            <circle key={i} cx={col * 18 + 9} cy={row * 18 + 9} r="7" fill={itemColor} opacity="0.8" />
          ) : (
            <rect key={i} x={col * 18 + 2} y={row * 18 + 2} width="14" height="14" fill={itemColor} opacity="0.8" rx="2" />
          );
        })}
        {remainingAfter > 10 && (
          <text x="95" y="15" fontSize="11" fill="rgba(255,255,255,0.5)">
            +{remainingAfter - 10}
          </text>
        )}
      </g>

      {/* Answer */}
      <text x="120" y="150" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        {t.pv_answer}: {remainingAfter}
      </text>
    </svg>
  );
});

// ─── SVG: Equation format and steps ──────────────────────────────────────────────

const EquationFormatSvg = memo(function EquationFormatSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="efG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#efG)" rx="16" />

      {/* Step 1 */}
      <text x="20" y="30" fontSize="11" fontWeight="bold" fill="#8B5CF6" textAnchor="start">
        {t.ef_step1}
      </text>
      <text x="20" y="45" fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="start">
        {t.ef_know}
      </text>

      {/* Step 2 */}
      <text x="20" y="70" fontSize="11" fontWeight="bold" fill="#8B5CF6" textAnchor="start">
        {t.ef_step2}
      </text>
      <text x="20" y="85" fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="start">
        {t.ef_op}
      </text>

      {/* Step 3 */}
      <text x="20" y="110" fontSize="11" fontWeight="bold" fill="#8B5CF6" textAnchor="start">
        {t.ef_step3}
      </text>
      <text x="20" y="125" fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="start">
        {t.ef_example}
      </text>

      {/* Step 4 */}
      <text x="150" y="30" fontSize="11" fontWeight="bold" fill="#8B5CF6" textAnchor="start">
        {t.ef_step4}
      </text>
      <text x="150" y="45" fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="start">
        {t.ef_calc}
      </text>

      {/* Step 5 */}
      <text x="150" y="70" fontSize="11" fontWeight="bold" fill="#8B5CF6" textAnchor="start">
        {t.ef_step5}
      </text>
      <text x="150" y="85" fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="start">
        {t.ef_sense}
      </text>

      {/* Step 6 */}
      <text x="150" y="110" fontSize="11" fontWeight="bold" fill="#8B5CF6" textAnchor="start">
        {t.ef_step6}
      </text>
      <text x="150" y="125" fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="start">
        {t.ef_sentence}
      </text>
    </svg>
  );
});

// ─── SVG: Checking work / verification ────────────────────────────────────────────

const CheckWorkSvg = memo(function CheckWorkSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="cwG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#cwG)" rx="16" />

      {/* Left side: Solution */}
      <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#10B981" textAnchor="start">
        {t.cw_solution}
      </text>
      <text x="20" y="45" fontSize="11" fill="rgba(255,255,255,0.7)" textAnchor="start">
        {t.cw_had}
      </text>
      <text x="20" y="62" fontSize="11" fill="rgba(255,255,255,0.7)" textAnchor="start">
        {t.cw_ate}
      </text>
      <text x="20" y="79" fontSize="11" fontWeight="bold" fill="#10B981" textAnchor="start">
        20 − 7 = 13
      </text>

      {/* Right side: Verification */}
      <text x="130" y="25" fontSize="12" fontWeight="bold" fill="#10B981" textAnchor="start">
        {t.cw_check}
      </text>
      <text x="130" y="45" fontSize="11" fill="rgba(255,255,255,0.7)" textAnchor="start">
        13 + 7 = 20 ✓
      </text>
      <text x="130" y="62" fontSize="10" fill="rgba(255,255,255,0.5)" textAnchor="start">
        {t.cw_inverse}
      </text>

      {/* Bottom */}
      <text x="120" y="130" fontSize="11" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        {t.cw_verify}
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word Problem Solver",
    // SVG labels
    pv_start: "Start:",
    pv_now: "Now:",
    pv_remove: "Remove",
    pv_add: "Add",
    pv_answer: "Answer",
    ef_step1: "Step 1: Understand",
    ef_know: "What do we know?",
    ef_step2: "Step 2: Choose operation",
    ef_op: "Add (+) or Subtract (−)?",
    ef_step3: "Step 3: Write equation",
    ef_example: "Example: 12 − 5 = 7",
    ef_step4: "Step 4: Solve",
    ef_calc: "Calculate answer",
    ef_step5: "Step 5: Check",
    ef_sense: "Does answer make sense?",
    ef_step6: "Step 6: Answer",
    ef_sentence: "Write full sentence",
    cw_solution: "Solution:",
    cw_had: "Had: 20 apples",
    cw_ate: "Ate: 7 apples",
    cw_check: "Check:",
    cw_inverse: "(Inverse operation)",
    cw_verify: "Always verify your answer!",
    // Topic 1: Understanding the problem
    t1_title: "Reading & Understanding Problems",
    t1_text: "Word problems describe a situation using words. To solve them, first read carefully and understand: What do we know? What are we asked to find? Example: 'Maria has 20 apples. She eats 7. How many are left?'",
    t1_inst: "Read each problem. Identify what number and what action. Tap the matching operation.",
    t1_b1: "Read the problem slowly and carefully",
    t1_b2: "Identify what you know and what you need to find",
    t1_b3: "Look for number clues and action words",
    t1_h1: "Action words: 'altogether' = add, 'left' = subtract, 'each' = divide",
    t1_h2: "Number clues: numbers in the sentence tell you what to work with",
    t1_q: "What operation does 'altogether' usually mean?",
    t1_q_add: "Addition (+)",
    t1_q_sub: "Subtraction (−)",
    t1_q_mul: "Multiplication (×)",
    t1_q_div: "Division (÷)",
    // Topic 2: Problem-solving steps
    t2_title: "Steps to Solve Word Problems",
    t2_text: "Follow a process: (1) Understand – what's given and what's asked? (2) Plan – which operation? (3) Solve – write equation and calculate. (4) Check – does answer make sense?",
    t2_inst: "Arrange the problem-solving steps in the correct order.",
    t2_b1: "Always follow the same steps",
    t2_b2: "Write down your equation first",
    t2_b3: "Check by using reverse operation",
    t2_h1: "The problem-solving method: Read → Understand → Choose → Solve → Check",
    t2_h2: "Never skip the checking step! This catches your mistakes.",
    t2_q: "First step when solving a word problem?",
    t2_q_calc: "Start calculating numbers",
    t2_q_read: "Read and understand the problem",
    t2_q_skip: "Skip to the answer",
    t2_q_guess: "Make a guess",
    // Topic 3: Checking and verifying
    t3_title: "Checking Your Work",
    t3_text: "After solving, verify your answer. Use the opposite operation: If you subtracted, try adding. If you multiplied, try dividing. Does the result match the original information?",
    t3_inst: "For each answer, use the inverse operation to check. Click or tap to verify.",
    t3_b1: "Use opposite operation to check",
    t3_b2: "Ask if the answer makes sense",
    t3_b3: "Look back at the original problem",
    t3_h1: "Opposite operations: Addition ↔ Subtraction, Multiplication ↔ Division",
    t3_h2: "If your check doesn't match, you made an error. Try again!",
    t3_q: "To check 18 ÷ 3 = 6, which would you do?",
    t3_q_mul: "Multiply 3 × 6",
    t3_q_div: "Divide 18 ÷ 6",
    t3_q_add: "Add 3 + 6",
    t3_q_sub: "Subtract 18 − 3",
    // Review questions (R5)
    r5_q1: "'Sam has 15 toys. He gets 8 more. How many does he have now?' Which equation?",
    r5_q1_a: "15 − 8",
    r5_q1_b: "15 + 8",
    r5_q1_c: "8 × 15",
    r5_q1_d: "15 ÷ 8",
    r5_q2: "'There are 24 cookies. 6 friends share equally. How many per friend?' Which operation?",
    r5_q2_a: "Addition",
    r5_q2_b: "Subtraction",
    r5_q2_c: "Division",
    r5_q2_d: "Multiplication",
    r5_q3: "'A book costs 12 dollars. You have 20 dollars. How much change?' Answer?",
    r5_q3_a: "32 dollars",
    r5_q3_b: "8 dollars",
    r5_q3_c: "12 dollars",
    r5_q3_d: "20 dollars",
    // Interactive block instructions & hints
    t1_inst: "Read the problem. Identify what you know and what you need to find. Drag the blocks to match.",
    t1_h1: "Look for 'action words' in the problem",
    t1_h2: "Together, altogether = Add; left, remaining = Subtract",
    t2_inst: "Arrange the steps in the correct order to solve a word problem.",
    t2_h1: "Always: Read → Understand → Plan → Solve → Check",
    t2_h2: "Each step builds on the one before",
    t3_inst: "For each answer, combine the steps to verify your work.",
    t3_h1: "Use the opposite operation to check",
    t3_h2: "If you subtracted, add to verify. If you added, subtract to verify.",
  },
  de: {
    explorer_title: "Sachaufgaben-Löser",
    pv_start: "Start:",
    pv_now: "Jetzt:",
    pv_remove: "Entfernen",
    pv_add: "Hinzufügen",
    pv_answer: "Antwort",
    ef_step1: "Schritt 1: Verstehen",
    ef_know: "Was wissen wir?",
    ef_step2: "Schritt 2: Operation wählen",
    ef_op: "Addieren (+) oder Subtrahieren (−)?",
    ef_step3: "Schritt 3: Gleichung schreiben",
    ef_example: "Beispiel: 12 − 5 = 7",
    ef_step4: "Schritt 4: Lösen",
    ef_calc: "Antwort berechnen",
    ef_step5: "Schritt 5: Überprüfen",
    ef_sense: "Macht die Antwort Sinn?",
    ef_step6: "Schritt 6: Antwort",
    ef_sentence: "Schreib einen vollständigen Satz",
    cw_solution: "Lösung:",
    cw_had: "Hatte: 20 Äpfel",
    cw_ate: "Aß: 7 Äpfel",
    cw_check: "Überprüfung:",
    cw_inverse: "(Gegenoperation)",
    cw_verify: "Überprüfe deine Antwort immer!",
    t1_title: "Lesen & Verstehen von Aufgaben",
    t1_text: "Sachaufgaben beschreiben eine Situation in Worten. Um sie zu lösen, lies zuerst sorgfältig und verstehe: Was wissen wir? Was sollen wir finden? Beispiel: 'Maria hat 20 Äpfel. Sie isst 7. Wie viele sind übrig?'",
    t1_inst: "Lies jede Aufgabe. Finde die Zahlen und die Aktion. Tippe die passende Operation.",
    t1_b1: "Lies die Aufgabe langsam und sorgfältig",
    t1_b2: "Erkenne, was du weißt und was du finden musst",
    t1_b3: "Suche nach Zahlenschlüsseln und Aktionswörtern",
    t1_h1: "Aktionswörter: 'insgesamt' = addieren, 'übrig' = subtrahieren, 'jedes' = teilen",
    t1_h2: "Zahlenschlüssel: Zahlen im Satz sagen dir, womit du arbeitest",
    t1_q: "Was bedeutet 'insgesamt' normalerweise?",
    t1_q_add: "Addition (+)",
    t1_q_sub: "Subtraktion (−)",
    t1_q_mul: "Multiplikation (×)",
    t1_q_div: "Division (÷)",
    t2_title: "Schritte zum Lösen von Sachaufgaben",
    t2_text: "Folge einem Prozess: (1) Verstehen – was ist gegeben und was wird gefragt? (2) Planen – welche Operation? (3) Lösen – schreibe Gleichung und berechne. (4) Überprüfen – macht die Antwort Sinn?",
    t2_inst: "Ordne die Schritte zum Lösen einer Sachaufgabe in der richtigen Reihenfolge an.",
    t2_b1: "Folge immer den gleichen Schritten",
    t2_b2: "Schreib deine Gleichung zuerst auf",
    t2_b3: "Überprüfe durch Gegenoperation",
    t2_h1: "Die Lösungsmethode: Lesen → Verstehen → Wählen → Lösen → Überprüfen",
    t2_h2: "Überspringe nie den Überprüfungsschritt! Dieser findet deine Fehler.",
    t2_q: "Erster Schritt beim Lösen einer Sachaufgabe?",
    t2_q_calc: "Anfangen zu berechnen",
    t2_q_read: "Lesen und verstehen der Aufgabe",
    t2_q_skip: "Zur Antwort springen",
    t2_q_guess: "Eine Vermutung anstellen",
    t3_title: "Überprüfung deiner Arbeit",
    t3_text: "Nach dem Lösen, überprüfe deine Antwort. Nutze die gegenläufige Operation: Wenn du subtrahiert hast, versuche zu addieren. Wenn du multipliziert hast, versuche zu dividieren. Passt das Ergebnis zur ursprünglichen Information?",
    t3_inst: "Nutze für jede Antwort die inverse Operation zum Überprüfen. Tippe oder klicke zum Verifizieren.",
    t3_b1: "Nutze gegenläufige Operation zum Überprüfen",
    t3_b2: "Frage, ob die Antwort Sinn macht",
    t3_b3: "Schau zurück auf die ursprüngliche Aufgabe",
    t3_h1: "Gegenoperationen: Addition ↔ Subtraktion, Multiplikation ↔ Division",
    t3_h2: "Wenn deine Überprüfung nicht passt, hast du einen Fehler gemacht. Versuche nochmal!",
    t3_q: "Um 18 ÷ 3 = 6 zu überprüfen, was würdest du tun?",
    t3_q_mul: "Multipliziere 3 × 6",
    t3_q_div: "Dividiere 18 ÷ 6",
    t3_q_add: "Addiere 3 + 6",
    t3_q_sub: "Subtrahiere 18 − 3",
    r5_q1: "'Sam hat 15 Spielzeuge. Er bekommt 8 mehr. Wie viele hat er jetzt?' Welche Gleichung?",
    r5_q1_a: "15 − 8",
    r5_q1_b: "15 + 8",
    r5_q1_c: "8 × 15",
    r5_q1_d: "15 ÷ 8",
    r5_q2: "'Es gibt 24 Kekse. 6 Freunde teilen gleich. Wie viele pro Freund?' Welche Operation?",
    r5_q2_a: "Addition",
    r5_q2_b: "Subtraktion",
    r5_q2_c: "Division",
    r5_q2_d: "Multiplikation",
    r5_q3: "'Ein Buch kostet 12 Euro. Du hast 20 Euro. Wie viel Wechselgeld?' Antwort?",
    r5_q3_a: "32 Euro",
    r5_q3_b: "8 Euro",
    r5_q3_c: "12 Euro",
    r5_q3_d: "20 Euro",
    // Interactive block instructions & hints
    t1_inst: "Lies die Aufgabe. Erkenne, was du weißt und was du finden musst. Verschiebe die Blöcke zum Abgleich.",
    t1_h1: "Suche nach 'Aktionswörtern' in der Aufgabe",
    t1_h2: "Zusammen, insgesamt = Addieren; übrig, verbleibend = Subtrahieren",
    t2_inst: "Ordne die Schritte zur Lösung einer Sachaufgabe in der richtigen Reihenfolge an.",
    t2_h1: "Immer: Lesen → Verstehen → Planen → Lösen → Überprüfen",
    t2_h2: "Jeder Schritt baut auf dem vorherigen auf",
    t3_inst: "Kombiniere für jede Antwort die Schritte, um deine Arbeit zu überprüfen.",
    t3_h1: "Nutze die Gegenoperation zur Überprüfung",
    t3_h2: "Wenn du subtrahiert hast, addiere zur Überprüfung. Wenn du addiert hast, subtrahiere zur Überprüfung.",
  },
  hu: {
    explorer_title: "Szövegfeladat-Megoldó",
    pv_start: "Kezdet:",
    pv_now: "Most:",
    pv_remove: "Eltávolít",
    pv_add: "Hozzáad",
    pv_answer: "Válasz",
    ef_step1: "1. lépés: Megértés",
    ef_know: "Mit tudunk?",
    ef_step2: "2. lépés: Művelet kiválasztása",
    ef_op: "Összeadás (+) vagy Kivonás (−)?",
    ef_step3: "3. lépés: Egyenlet felírása",
    ef_example: "Példa: 12 − 5 = 7",
    ef_step4: "4. lépés: Megoldás",
    ef_calc: "Válasz kiszámítása",
    ef_step5: "5. lépés: Ellenőrzés",
    ef_sense: "Értelmes-e a válasz?",
    ef_step6: "6. lépés: Válasz",
    ef_sentence: "Írj egy teljes mondatot",
    cw_solution: "Megoldás:",
    cw_had: "Volt: 20 alma",
    cw_ate: "Megevett: 7 almát",
    cw_check: "Ellenőrzés:",
    cw_inverse: "(Ellentétes művelet)",
    cw_verify: "Mindig ellenőrizd a válaszodat!",
    t1_title: "Szövegfeladatok olvasása & megértése",
    t1_text: "A szövegfeladatok szavakkal írják le a helyzetet. A megoldásukhoz először olvasd el gondosan és értsd meg: Mit tudunk? Mit kell találni? Például: 'Mariának 20 almája van. Megeszik 7-et. Hány van hátra?'",
    t1_inst: "Olvasd el minden feladatot. Keress számokat és cselekvéseket. Kattints a megfelelő műveletre.",
    t1_b1: "Olvasd el a feladatot lassan és gondosan",
    t1_b2: "Ismerd fel, amit tudsz és mit kell találni",
    t1_b3: "Keress számkulcsokat és cselekvési szavakat",
    t1_h1: "Cselekvési szavak: 'összesen' = összeadás, 'hátra' = kivonás, 'mindegyik' = osztás",
    t1_h2: "Számkulcsok: A mondatban szereplő számok azt mutatják, mivel kell dolgoznod",
    t1_q: "Mit jelent általában az 'összesen'?",
    t1_q_add: "Összeadás (+)",
    t1_q_sub: "Kivonás (−)",
    t1_q_mul: "Szorzás (×)",
    t1_q_div: "Osztás (÷)",
    t2_title: "Lépések szövegfeladatok megoldásához",
    t2_text: "Kövesd a folyamatot: (1) Megértés – mit adtak és mit kérdeznek? (2) Terv – melyik művelet? (3) Megoldás – írd fel az egyenletet és számolj. (4) Ellenőrzés – értelmes-e a válasz?",
    t2_inst: "Rendezd sorba a szövegfeladat megoldási lépéseket a helyes sorrendben!",
    t2_b1: "Mindig ugyanazokat a lépéseket kövesd",
    t2_b2: "Írd fel az egyenletedet először",
    t2_b3: "Ellenőrizd az ellentétes műveletet",
    t2_h1: "A megoldási módszer: Olvasd → Értsd meg → Válassz → Oldd meg → Ellenőrizd",
    t2_h2: "Soha ne hagyd ki az ellenőrzési lépést! Ez talál meg a hibákat.",
    t2_q: "Első lépés szövegfeladat megoldásakor?",
    t2_q_calc: "Kezdj el számolni",
    t2_q_read: "Olvasd és értsd meg a feladatot",
    t2_q_skip: "Ugorj a válaszra",
    t2_q_guess: "Tippelj",
    t3_title: "Munkád Ellenőrzése",
    t3_text: "Megoldás után ellenőrizd a válaszodat. Használd az ellentétes műveletet: Ha kivontál, próbálj összeadni. Ha szoroztál, próbálj osztani. Egyezik az eredmény az eredeti információval?",
    t3_inst: "Minden válaszhoz használd az inverz műveletet az ellenőrzéshez. Kattints az ellenőrzéshez.",
    t3_b1: "Ellentétes műveletet használj az ellenőrzéshez",
    t3_b2: "Kérdezd meg, értelmes-e a válasz",
    t3_b3: "Nézd vissza az eredeti feladatra",
    t3_h1: "Ellentétes műveletek: Összeadás ↔ Kivonás, Szorzás ↔ Osztás",
    t3_h2: "Ha az ellenőrzésed nem egyezik, hibát csináltál. Próbálj újra!",
    t3_q: "18 ÷ 3 = 6 ellenőrzéséhez mit tennél?",
    t3_q_mul: "Szorzás 3 × 6",
    t3_q_div: "Osztás 18 ÷ 6",
    t3_q_add: "Összeadás 3 + 6",
    t3_q_sub: "Kivonás 18 − 3",
    r5_q1: "'Sáminak 15 játéka van. 8-at kap még. Hány játéka van most?' Melyik egyenlet?",
    r5_q1_a: "15 − 8",
    r5_q1_b: "15 + 8",
    r5_q1_c: "8 × 15",
    r5_q1_d: "15 ÷ 8",
    r5_q2: "'24 süti van. 6 barát egyenlően osztja meg. Hány mindenkinek?' Melyik művelet?",
    r5_q2_a: "Összeadás",
    r5_q2_b: "Kivonás",
    r5_q2_c: "Osztás",
    r5_q2_d: "Szorzás",
    r5_q3: "'Egy könyv 12 forint. Van 20 forintod. Mennyi a visszajáró?' Válasz?",
    r5_q3_a: "32 forint",
    r5_q3_b: "8 forint",
    r5_q3_c: "12 forint",
    r5_q3_d: "20 forint",
    // Interactive block instructions & hints
    t1_inst: "Olvasd el a feladatot. Ismerd fel, amit tudsz és mit kell találni. Húzd a blokkokat az egyezéshez.",
    t1_h1: "Keress 'cselekvési szavakat' a feladatban",
    t1_h2: "Összesen, együtt = Összeadás; hátra, marad = Kivonás",
    t2_inst: "Rendezd a szövegfeladat megoldási lépéseit a helyes sorrendbe!",
    t2_h1: "Mindig: Olvasd → Értsd meg → Tervezz → Oldd meg → Ellenőrizd",
    t2_h2: "Minden lépés az előző alapján épül",
    t3_inst: "Minden válaszhoz kombinálj lépéseket a munkád ellenőrzéséhez.",
    t3_h1: "Használd az ellentétes műveletet az ellenőrzéshez",
    t3_h2: "Ha kivontál, összeadással ellenőrizz. Ha összeadtál, kivonással ellenőrizz.",
  },
  ro: {
    explorer_title: "Rezolvator de probleme cu cuvinte",
    pv_start: "Început:",
    pv_now: "Acum:",
    pv_remove: "Înlătură",
    pv_add: "Adaug",
    pv_answer: "Răspuns",
    ef_step1: "Pasul 1: Înțelege",
    ef_know: "Ce știm?",
    ef_step2: "Pasul 2: Alege operația",
    ef_op: "Adunare (+) sau Scădere (−)?",
    ef_step3: "Pasul 3: Scrie ecuația",
    ef_example: "Exemplu: 12 − 5 = 7",
    ef_step4: "Pasul 4: Rezolvă",
    ef_calc: "Calculează răspunsul",
    ef_step5: "Pasul 5: Verifică",
    ef_sense: "Are sens răspunsul?",
    ef_step6: "Pasul 6: Răspuns",
    ef_sentence: "Scrie o propoziție completă",
    cw_solution: "Soluție:",
    cw_had: "Avea: 20 mere",
    cw_ate: "A mâncat: 7 mere",
    cw_check: "Verificare:",
    cw_inverse: "(Operație inversă)",
    cw_verify: "Verifică întotdeauna răspunsul tău!",
    t1_title: "Citirea și înțelegerea problemelor",
    t1_text: "Problemele cu cuvinte descriu o situație folosind cuvinte. Pentru a le rezolva, citește mai întâi atent și înțelege: Ce știm? Ce trebuie să găsim? Exemplu: 'Maria are 20 de mere. Mănâncă 7. Câte au rămas?'",
    t1_inst: "Citește fiecare problemă. Găsește numerele și acțiunea. Apasă pe operația corectă.",
    t1_b1: "Citește problema lent și atent",
    t1_b2: "Identifică ce știi și ce trebuie să găsești",
    t1_b3: "Caută indicii numerice și cuvinte de acțiune",
    t1_h1: "Cuvinte de acțiune: 'total' = adunare, 'rămas' = scădere, 'fiecare' = împărțire",
    t1_h2: "Indicii numerice: Numerele din problemă îți spun cu ce trebuie să lucrezi",
    t1_q: "Ce înseamnă de obicei 'în total'?",
    t1_q_add: "Adunare (+)",
    t1_q_sub: "Scădere (−)",
    t1_q_mul: "Înmulțire (×)",
    t1_q_div: "Împărțire (÷)",
    t2_title: "Pași pentru rezolvarea problemelor cu cuvinte",
    t2_text: "Urmează un proces: (1) Înțelege – ce este dat și ce se întreabă? (2) Planifică – care operație? (3) Rezolvă – scrie ecuația și calculează. (4) Verifică – are sens răspunsul?",
    t2_inst: "Ordonează pașii de rezolvare a unei probleme cu cuvinte în ordinea corectă!",
    t2_b1: "Urmează mereu aceiași pași",
    t2_b2: "Notează ecuația ta mai întâi",
    t2_b3: "Verifică folosind operația inversă",
    t2_h1: "Metoda de rezolvare: Citeste → Înțelege → Alege → Rezolvă → Verifică",
    t2_h2: "Nu sări niciodată pasul de verificare! Aceasta găsește erorile.",
    t2_q: "Primul pas la rezolvarea unei probleme cu cuvinte?",
    t2_q_calc: "Începi să calculezi",
    t2_q_read: "Citesc și înțeleg problema",
    t2_q_skip: "Salt la răspuns",
    t2_q_guess: "Fac o ghicire",
    t3_title: "Verificarea muncii tale",
    t3_text: "După rezolvare, verifică răspunsul. Folosește operația opusă: Dacă ai scăzut, încearcă să aduni. Dacă ai înmulțit, încearcă să împarți. Se potrivește rezultatul cu informația originală?",
    t3_inst: "Pentru fiecare răspuns, folosește operația inversă pentru verificare. Apasă pentru a verifica.",
    t3_b1: "Folosește operația opusă pentru verificare",
    t3_b2: "Întreabă-te dacă răspunsul are sens",
    t3_b3: "Uită-te înapoi la problema originală",
    t3_h1: "Operații opuse: Adunare ↔ Scădere, Înmulțire ↔ Împărțire",
    t3_h2: "Dacă verificarea nu se potrivește, ai făcut o greșeală. Încearcă din nou!",
    t3_q: "Pentru a verifica 18 ÷ 3 = 6, ce ai face?",
    t3_q_mul: "Înmulțește 3 × 6",
    t3_q_div: "Împarte 18 ÷ 6",
    t3_q_add: "Adună 3 + 6",
    t3_q_sub: "Scade 18 − 3",
    r5_q1: "'Sam are 15 jucării. Primește 8 mai multe. Câte are acum?' Care ecuație?",
    r5_q1_a: "15 − 8",
    r5_q1_b: "15 + 8",
    r5_q1_c: "8 × 15",
    r5_q1_d: "15 ÷ 8",
    r5_q2: "'Sunt 24 de biscuiți. 6 prieteni împart egal. Câți pe prieten?' Care operație?",
    r5_q2_a: "Adunare",
    r5_q2_b: "Scădere",
    r5_q2_c: "Împărțire",
    r5_q2_d: "Înmulțire",
    r5_q3: "'O carte costă 12 lei. Ai 20 lei. Cât rest?' Răspuns?",
    r5_q3_a: "32 lei",
    r5_q3_b: "8 lei",
    r5_q3_c: "12 lei",
    r5_q3_d: "20 lei",
    // Interactive block instructions & hints
    t1_inst: "Citește problema. Identifică ce știi și ce trebuie să găsești. Trage blocurile pentru a se potrivi.",
    t1_h1: "Caută 'cuvinte de acțiune' în problemă",
    t1_h2: "Total, împreună = Adunare; rămas, rămâne = Scădere",
    t2_inst: "Ordonează pașii de rezolvare a unei probleme cu cuvinte în ordinea corectă!",
    t2_h1: "Mereu: Citeste → Înțelege → Planifică → Rezolvă → Verifică",
    t2_h2: "Fiecare pas se construiește pe cel anterior",
    t3_inst: "Pentru fiecare răspuns, combină pașii pentru a-ți verifica munca.",
    t3_h1: "Folosește operația inversă pentru verificare",
    t3_h2: "Dacă ai scăzut, adună pentru a verifica. Dacă ai adunat, scade pentru a verifica.",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📖",
  rounds: [
    // ─ R1: Understanding problems ─
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: (lang: string) => <ProblemVisualizationSvg scenario="apples" initial={20} operation="remove" amount={7} lang={lang} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: (lang: string) => <ProblemVisualizationSvg scenario="apples" initial={20} operation="remove" amount={7} lang={lang} />,
      questions: [
        {
          question: "t1_q",
          choices: ["t1_q_add", "t1_q_sub", "t1_q_mul", "t1_q_div"],
          answer: "t1_q_add",
        },
      ],
    },

    // ─ R2: Problem-solving steps ─
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: (lang: string) => <EquationFormatSvg lang={lang} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: (lang: string) => <EquationFormatSvg lang={lang} />,
      questions: [
        {
          question: "t2_q",
          choices: ["t2_q_calc", "t2_q_read", "t2_q_skip", "t2_q_guess"],
          answer: "t2_q_read",
        },
      ],
    },

    // ─ R3: Checking work ─
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: (lang: string) => <CheckWorkSvg lang={lang} />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: (lang: string) => <CheckWorkSvg lang={lang} />,
      questions: [
        {
          question: "t3_q",
          choices: ["t3_q_mul", "t3_q_div", "t3_q_add", "t3_q_sub"],
          answer: "t3_q_mul",
        },
      ],
    },

    // ─ R5: Review (3 questions) ─
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: (lang: string) => <ProblemVisualizationSvg scenario="books" initial={15} operation="add" amount={8} lang={lang} />,
      questions: [
        {
          question: "r5_q1",
          choices: ["r5_q1_a", "r5_q1_b", "r5_q1_c", "r5_q1_d"],
          answer: "r5_q1_b",
        },
        {
          question: "r5_q2",
          choices: ["r5_q2_a", "r5_q2_b", "r5_q2_c", "r5_q2_d"],
          answer: "r5_q2_c",
        },
        {
          question: "r5_q3",
          choices: ["r5_q3_a", "r5_q3_b", "r5_q3_c", "r5_q3_d"],
          answer: "r5_q3_b",
        },
      ],
    },
  ],
};

// ─── WRAPPER COMPONENT ─────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function WordProblemExplorer4({ color = "#EF4444", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine
      def={EXPLORER_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
      grade={4}
    />
  );
}
