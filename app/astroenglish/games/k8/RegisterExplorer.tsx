"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Formal Register", tx1: "Used in essays, presentations, business. Complete sentences, no contractions, no slang. Example: 'I am unable to attend.'",
    q1: "Which is formal?", a1: "U wanna go?", b1: "I would appreciate your attendance", c1: "Gonna happen soon", d1: "Yeah, that's cool",
    t2: "Informal Register", tx2: "Used with friends, texting, casual speech. Contractions OK, conversational. Example: 'I can't go today.'",
    q2: "Which is informal?", a2: "The data demonstrates correlation", b2: "Hey, wanna grab coffee later?", c2: "One must consider the implications", d2: "The following analysis pertains",
    t3: "Colloquial & Slang", tx3: "Very casual, regional, trendy. 'Gonna, wanna, cool, awesome, lit.' Avoid in formal writing! Used in dialogue/character voice.",
    q3: "Which is slang?", a3: "That seems appropriate", b3: "That movie was fire", c3: "That may be relevant", d3: "That appears suitable",
    t4: "Academic Register", tx4: "Used in research, scholarly writing. Objective, technical, sophisticated vocabulary. Avoids personal opinion. Example: 'The study indicates...'",
    q4: "Which is academic?", a4: "I think this is cool", b4: "The findings suggest correlation", c4: "Honestly it was awesome", d4: "In my opinion it was nice",
    t5: "Register Switching", tx5: "Adjust language based on audience & context. Teacher = formal. Friend = casual. Job interview = professional. Knowing when to switch shows maturity!",
    q5: "Where should you use FORMAL register?", a5: "Text with friends", b5: "College application essay", c5: "Chat online", d5: "Talk with parents",
  },
  de: {
    t1: "Formales Register", tx1: "In Aufsätzen, Präsentationen, Geschäft. Vollständige Sätze, keine Umgangssprache.",
    q1: "Welcher ist formal?", a1: "Du willst gehen?", b1: "Ich würde deine Anwesenheit schätzen", c1: "Wird bald passieren", d1: "Ja, das ist cool",
    t2: "Informales Register", tx2: "Mit Freunden, im Chat, Umgangssprache. Kontraktionen OK.",
    q2: "Welcher ist informell?", a2: "Die Daten zeigen Korrelation", b2: "Hey, Lust auf Kaffee später?", c2: "Man muss die Auswirkungen betrachten", d2: "Die folgende Analyse betrifft",
    t3: "Umgangssprache & Slang", tx3: "Sehr informell, regional, trendy. 'Gonna, wanna, cool, awesome.' Vermeiden in formalem Schreiben!",
    q3: "Welcher ist Slang?", a3: "Das scheint angemessen", b3: "Der Film war Feuer", c3: "Das kann relevant sein", d3: "Das sieht aus als geeignet",
    t4: "Akademisches Register", tx4: "In Forschung, wissenschaftlichem Schreiben. Objektiv, technisch, gehobenes Vokabular.",
    q4: "Welcher ist akademisch?", a4: "Ich denke, das ist cool", b4: "Die Befunde deuten auf Korrelation hin", c4: "Ehrlich, das war toll", d4: "Meiner Meinung nach war es nett",
    t5: "Register-Wechsel", tx5: "Sprache je nach Publikum & Kontext anpassen. Lehrer = formal. Freund = locker.",
    q5: "Wo sollte man FORMALES Register nutzen?", a5: "Im Chat mit Freunden", b5: "Bewerbungsaufsatz für Universität", c5: "Online chatten", d5: "Mit Eltern sprechen",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "t1",
      infoText: "tx1",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1e293b"/>
          <text x="120" y="60" textAnchor="middle" fontSize="14" fill="#0ea5e9">Formal</text>
          <rect x="40" y="75" width="160" height="45" rx="4" fill="#0ea5e9" opacity="0.2"/>
          <text x="120" y="105" textAnchor="middle" fontSize="11" fill="#bfdbfe">Essays, Business, School</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "b1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2937"/>
          <text x="120" y="60" textAnchor="middle" fontSize="14" fill="#34d399">Informal</text>
          <rect x="40" y="75" width="160" height="45" rx="4" fill="#34d399" opacity="0.2"/>
          <text x="120" y="105" textAnchor="middle" fontSize="11" fill="#a7f3d0">Friends, Texts, Chat</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "b2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f1f3a"/>
          <text x="120" y="60" textAnchor="middle" fontSize="14" fill="#f97316">Slang/Colloquial</text>
          <rect x="40" y="75" width="160" height="45" rx="4" fill="#f97316" opacity="0.2"/>
          <text x="120" y="105" textAnchor="middle" fontSize="11" fill="#fed7aa">Trendy, Casual, Regional</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "b3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f2d3d"/>
          <text x="120" y="60" textAnchor="middle" fontSize="14" fill="#60a5fa">Academic</text>
          <rect x="40" y="75" width="160" height="45" rx="4" fill="#60a5fa" opacity="0.2"/>
          <text x="120" y="105" textAnchor="middle" fontSize="11" fill="#93c5fd">Research, Scholarly, Objective</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "b4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f172a"/>
          <circle cx="60" cy="70" r="12" fill="#0ea5e9" opacity="0.5"/>
          <text x="60" y="75" textAnchor="middle" fontSize="8" fill="white">Formal</text>
          <circle cx="120" cy="70" r="12" fill="#34d399" opacity="0.5"/>
          <text x="120" y="75" textAnchor="middle" fontSize="8" fill="white">Casual</text>
          <circle cx="180" cy="70" r="12" fill="#f97316" opacity="0.5"/>
          <text x="180" y="75" textAnchor="middle" fontSize="8" fill="white">Slang</text>
          <path d="M60,85 L120,85 L180,85" stroke="#60a5fa" strokeWidth="1" opacity="0.5"/>
          <text x="120" y="135" textAnchor="middle" fontSize="10" fill="#cbd5e1">Switch Based on Audience</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "b5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function RegisterExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
