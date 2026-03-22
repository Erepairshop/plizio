"use client";
// SenseExplorer — Island i8: Sense Organs (Sinnesorgane) Grade 5
// R1-R4: Teaching rounds with SVG illustrations
// R5: MCQ quiz to verify understanding

import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef, MCQQuestion } from "./ExplorerEngine";
import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: The 5 Senses
    r1_title: "The 5 Senses",
    r1_text: "Your body has five special senses that help you understand the world. Each sense has its own organ that detects stimuli.",
    r1_b1: "Sight (Eyes) — detects light and color",
    r1_b2: "Hearing (Ears) — detects sound waves",
    r1_b3: "Smell (Nose) — detects chemicals in air",
    r1_b4: "Taste (Tongue) — detects dissolved chemicals",
    r1_b5: "Touch (Skin) — detects pressure, temperature, pain",

    // Round 2: The Eye
    r2_title: "The Eye",
    r2_text: "Light enters through the pupil and lens. The lens focuses light onto the retina, which sends signals to the brain through the optic nerve.",
    r2_b1: "Pupil — opening that controls light entry",
    r2_b2: "Iris — colored ring that adjusts pupil size",
    r2_b3: "Lens — bends light to focus it on the retina",
    r2_b4: "Retina — contains light-sensitive cells",
    r2_b5: "Optic nerve — carries signals to the brain",

    // Round 3: The Ear
    r3_title: "The Ear",
    r3_text: "Sound waves enter the outer ear and travel through the canal. Tiny bones (ossicles) amplify vibrations to the cochlea, which sends signals to the brain.",
    r3_b1: "Outer ear — collects sound waves",
    r3_b2: "Ear canal — guides sound to the eardrum",
    r3_b3: "Eardrum — vibrates when sound hits it",
    r3_b4: "Ossicles — three tiny bones that amplify vibrations",
    r3_b5: "Cochlea — converts vibrations to nerve signals",

    // Round 4: The Nervous System
    r4_title: "Reflex Arc",
    r4_text: "When you sense something, a nerve signal travels from the sense organ to the brain. The brain processes it and sends a response back to muscles.",
    r4_b1: "Stimulus — change in the environment (hot surface touch)",
    r4_b2: "Receptor — sense organ detects the stimulus",
    r4_b3: "Signal travels — up the nerve to the brain",
    r4_b4: "Brain response — decides what to do (pull hand away)",

    // Round 1: The 5 Senses — Question
    r1_q: "Which of these is a sense organ?",
    r1_q_a: "Eye (sight)",
    r1_q_b: "Heart (breathing)",
    r1_q_c: "Muscle (motion)",
    r1_q_d: "Bone (support)",

    // Round 2: The Eye — Question
    r2_q: "What does the pupil do?",
    r2_q_a: "Controls how much light enters the eye",
    r2_q_b: "Focuses light on the retina",
    r2_q_c: "Carries signals to the brain",
    r2_q_d: "Contains light-sensitive cells",

    // Round 3: The Ear — Question
    r3_q: "Which part of the ear receives sound waves first?",
    r3_q_a: "Cochlea",
    r3_q_b: "Eardrum",
    r3_q_c: "Outer ear",
    r3_q_d: "Ossicles",

    // Round 4: Reflex Arc — Question
    r4_q: "In a reflex arc, what happens right after the receptor detects a stimulus?",
    r4_q_a: "The brain decides what to do",
    r4_q_b: "A nerve signal travels upward",
    r4_q_c: "The muscle contracts immediately",
    r4_q_d: "The stimulus stops",

    // Round 5: Quiz
    r5_title: "Sense Organs Quiz",
    r5_text: "Let's check your understanding!",

    q1_q: "Which sense organ contains the retina?",
    q1_a: "Eye",
    q1_b: "Ear",
    q1_c: "Nose",
    q1_d: "Tongue",

    q2_q: "What do the ossicles do?",
    q2_a: "Collect sound waves",
    q2_b: "Amplify vibrations",
    q2_c: "Convert vibrations to nerve signals",
    q2_d: "Send signals to the brain",

    q3_q: "How many main senses does the human body have?",
    q3_a: "Three",
    q3_b: "Four",
    q3_c: "Five",
    q3_d: "Six",
  },
  de: {
    // Round 1: Die 5 Sinne
    r1_title: "Die 5 Sinne",
    r1_text: "Dein Körper hat fünf Sinne, die dir helfen, die Welt zu verstehen. Jeder Sinn hat sein eigenes Organ, das Reize erkennt.",
    r1_b1: "Sehen (Augen) — erkennt Licht und Farbe",
    r1_b2: "Hören (Ohren) — erkennt Schallwellen",
    r1_b3: "Riechen (Nase) — erkennt Chemikalien in der Luft",
    r1_b4: "Schmecken (Zunge) — erkennt aufgelöste Chemikalien",
    r1_b5: "Tasten (Haut) — erkennt Druck, Temperatur, Schmerz",

    // Round 2: Das Auge
    r2_title: "Das Auge",
    r2_text: "Licht tritt durch die Pupille und die Linse ein. Die Linse fokussiert das Licht auf die Netzhaut, die Signale zum Gehirn sendet.",
    r2_b1: "Pupille — Öffnung, die Lichteinfall regelt",
    r2_b2: "Iris — farbiger Ring, der die Pupillengröße anpasst",
    r2_b3: "Linse — beugt Licht, um es auf die Netzhaut zu fokussieren",
    r2_b4: "Netzhaut — enthält lichtsensitive Zellen",
    r2_b5: "Sehnerv — leitet Signale zum Gehirn",

    // Round 3: Das Ohr
    r3_title: "Das Ohr",
    r3_text: "Schallwellen treten durch das äußere Ohr ein und reisen durch den Gehörgang. Winzige Knochen (Gehörknöchelchen) verstärken Vibrationen zur Schnecke, die Signale zum Gehirn sendet.",
    r3_b1: "Äußeres Ohr — sammelt Schallwellen",
    r3_b2: "Gehörgang — leitet Schall zum Trommelfell",
    r3_b3: "Trommelfell — vibriert, wenn Schall es trifft",
    r3_b4: "Gehörknöchelchen — drei winzige Knochen, die Vibrationen verstärken",
    r3_b5: "Schnecke — wandelt Vibrationen in Nervensignale um",

    // Round 4: Das Nervensystem
    r4_title: "Reflexbogen",
    r4_text: "Wenn du etwas erkennst, reist ein Nervensignal vom Sinnesorgan zum Gehirn. Das Gehirn verarbeitet es und sendet eine Antwort zu den Muskeln.",
    r4_b1: "Reiz — Veränderung in der Umwelt (heiße Oberfläche berühren)",
    r4_b2: "Rezeptor — Sinnesorgan erkennt den Reiz",
    r4_b3: "Signal reist — auf dem Nerv zum Gehirn",
    r4_b4: "Gehirnreaktion — entscheidet, was zu tun ist (Hand wegziehen)",

    // Round 1: Die 5 Sinne — Frage
    r1_q: "Welches ist ein Sinnesorgan?",
    r1_q_a: "Auge (Sehen)",
    r1_q_b: "Herz (Atmung)",
    r1_q_c: "Muskel (Bewegung)",
    r1_q_d: "Knochen (Unterstützung)",

    // Round 2: Das Auge — Frage
    r2_q: "Was macht die Pupille?",
    r2_q_a: "Kontrolliert, wie viel Licht in das Auge eintritt",
    r2_q_b: "Fokussiert Licht auf die Netzhaut",
    r2_q_c: "Trägt Signale zum Gehirn",
    r2_q_d: "Enthält lichtsensitive Zellen",

    // Round 3: Das Ohr — Frage
    r3_q: "Welcher Teil des Ohrs nimmt Schallwellen zuerst auf?",
    r3_q_a: "Cochlea",
    r3_q_b: "Trommelfell",
    r3_q_c: "Außenohr",
    r3_q_d: "Gehörknöchelchen",

    // Round 4: Reflex-Bogen — Frage
    r4_q: "Was passiert im Reflex-Bogen unmittelbar nach der Reizerfassung?",
    r4_q_a: "Das Gehirn entscheidet, was zu tun ist",
    r4_q_b: "Ein Nervensignal wandert nach oben",
    r4_q_c: "Der Muskel zieht sich sofort zusammen",
    r4_q_d: "Der Reiz stoppt",

    // Round 5: Quiz
    r5_title: "Quiz zu Sinnesorganen",
    r5_text: "Überprüfen wir dein Verständnis!",

    q1_q: "Welches Sinnesorgan enthält die Netzhaut?",
    q1_a: "Auge",
    q1_b: "Ohr",
    q1_c: "Nase",
    q1_d: "Zunge",

    q2_q: "Was macht die Pupille?",
    q2_a: "Regelt, wie viel Licht ins Auge eintritt",
    q2_b: "Fokussiert Licht auf die Netzhaut",
    q2_c: "Leitet Signale zum Gehirn",
    q2_d: "Enthält lichtsensitive Zellen",

    q3_q: "Welcher Teil des Ohres empfängt zuerst Schallwellen?",
    q3_a: "Schnecke",
    q3_b: "Trommelfell",
    q3_c: "Äußeres Ohr",
    q3_d: "Gehörknöchelchen",

    q4_q: "Was machen die Gehörknöchelchen?",
    q4_a: "Sammeln Schallwellen",
    q4_b: "Verstärken Vibrationen",
    q4_c: "Wandeln Vibrationen in Nervensignale um",
    q4_d: "Senden Signale zum Gehirn",

    q5_q: "Was passiert im Reflexbogen direkt nach der Reizwahrnehmung?",
    q5_a: "Das Gehirn entscheidet, was zu tun ist",
    q5_b: "Ein Nervensignal reist aufwärts",
    q5_c: "Der Muskel zieht sich sofort zusammen",
    q5_d: "Der Reiz stoppt",
  },
  hu: {
    // Round 1: Az 5 érzék
    r1_title: "Az 5 érzék",
    r1_text: "A tested öt szenzorikus érzettel rendelkezik, amelyek segítenek megérteni a világot. Minden érzéknek saját szerve van, amely ingereket érzékel.",
    r1_b1: "Látás (Szem) — fényt és színeket érzékel",
    r1_b2: "Hallás (Fül) — hanghullámokat érzékel",
    r1_b3: "Szaglás (Orr) — levegőben lévő vegyi anyagokat érzékel",
    r1_b4: "Ízlelés (Nyelv) — oldott vegyi anyagokat érzékel",
    r1_b5: "Tapintás (Bőr) — nyomást, hőmérsékletet, fájdalmat érzékel",

    // Round 2: A szem
    r2_title: "A szem",
    r2_text: "A fény a pupilláon és a lencsésen keresztül jut be. A lencse a fényt a retinára fókuszálja, amely jeleket küld az agynak.",
    r2_b1: "Pupilla — nyílás, amely a fénybejutást szabályozza",
    r2_b2: "Szivárvány — színes gyűrű, amely a pupilla méretét állítja",
    r2_b3: "Lencse — meghajlítja a fényt, hogy a retinára fókuszálja",
    r2_b4: "Retina — fényre érzékeny sejteket tartalmaz",
    r2_b5: "Látóideg — jeleket szállít az agyhoz",

    // Round 3: A fül
    r3_title: "A fül",
    r3_text: "A hanghullámok a külső fülon keresztül lépnek be és az hallójáráton utaznak. Apró csontok (hallócsontok) erősítik a vibrációkat a cochleához, amely jeleket küld az agyhoz.",
    r3_b1: "Külső fül — hanghullámokat gyűjt",
    r3_b2: "Hallójárat — hang vezet a dobhártyához",
    r3_b3: "Dobhártya — rezeg, amikor a hang megtöri",
    r3_b4: "Hallócsontok — három apró csont, amely erősíti a vibrációkat",
    r3_b5: "Cochlea — vibrációkat idegi jelekké alakít",

    // Round 4: Az idegrendszer
    r4_title: "Reflex ív",
    r4_text: "Amikor valamit érzékelsz, egy idegi jel a szenzoros szervből az agy felé utazik. Az agy feldolgozza és választ küld az izmoknak.",
    r4_b1: "Inger — változás a környezetben (meleg felület érintése)",
    r4_b2: "Receptor — szenzoros szerv felismer az ingert",
    r4_b3: "Jel utazik — az ideget követve az agy felé",
    r4_b4: "Agyi válasz — eldönti, mit kell tenni (kéz húzd vissza)",

    // Round 1: Az 5 érzék — Kérdés
    r1_q: "Melyik az érzékszerv?",
    r1_q_a: "Szem (látás)",
    r1_q_b: "Szív (légzés)",
    r1_q_c: "Izom (mozgás)",
    r1_q_d: "Csont (támogatás)",

    // Round 2: A szem — Kérdés
    r2_q: "Mit csinál a pupilla?",
    r2_q_a: "Szabályozza, mennyi fény jut a szembe",
    r2_q_b: "A fényt a retinára fókuszálja",
    r2_q_c: "Jeleket szállít az agyhoz",
    r2_q_d: "Fényre érzékeny sejteket tartalmaz",

    // Round 3: A fül — Kérdés
    r3_q: "A fül melyik része fogad először hanghullámokat?",
    r3_q_a: "Cochlea",
    r3_q_b: "Dobhártya",
    r3_q_c: "Külső fül",
    r3_q_d: "Hallócsontok",

    // Round 4: Reflex ív — Kérdés
    r4_q: "Mi történik a reflex ívben közvetlenül az ingerfelfogás után?",
    r4_q_a: "Az agy eldönti, mit kell tenni",
    r4_q_b: "Egy idegi jel utazik felfelé",
    r4_q_c: "Az izom azonnal összehúzódik",
    r4_q_d: "Az inger megáll",

    // Round 5: Quiz
    r5_title: "Érzékszervek kvíz",
    r5_text: "Ellenőrizzük az ismereteidet!",

    q1_q: "Melyik szenzoros szerv tartalmazza a retinát?",
    q1_a: "Szem",
    q1_b: "Fül",
    q1_c: "Orr",
    q1_d: "Nyelv",

    q2_q: "Mit csinál a pupilla?",
    q2_a: "Szabályozza, mennyi fény jut a szembe",
    q2_b: "A fényt a retinára fókuszálja",
    q2_c: "Jeleket szállít az agyhoz",
    q2_d: "Fényre érzékeny sejteket tartalmaz",

    q3_q: "A fül melyik része fogad először hanghullámokat?",
    q3_a: "Cochlea",
    q3_b: "Dobhártya",
    q3_c: "Külső fül",
    q3_d: "Hallócsontok",

    q4_q: "Mit csinálnak a hallócsontok?",
    q4_a: "Gyűjtik a hanghullámokat",
    q4_b: "Erősítik a vibrációkat",
    q4_c: "Vibrációkat idegi jelekké alakítanak",
    q4_d: "Jeleket küldenek az agyhoz",

    q5_q: "Mi történik a reflex ívben közvetlenül az ingerfelfogás után?",
    q5_a: "Az agy eldönti, mit kell tenni",
    q5_b: "Egy idegi jel utazik felfelé",
    q5_c: "Az izom azonnal összehúzódik",
    q5_d: "Az inger megáll",
  },
  ro: {
    // Round 1: Cele 5 simțuri
    r1_title: "Cele 5 simțuri",
    r1_text: "Corpul tău are cinci simțuri speciale care te ajută să înțelegi lumea. Fiecare simț are propriul organ care detectează stimuli.",
    r1_b1: "Vedere (Ochi) — detectează lumina și culoarea",
    r1_b2: "Auz (Urechi) — detectează undele sonore",
    r1_b3: "Miros (Nas) — detectează chimicalele din aer",
    r1_b4: "Gust (Limbă) — detectează chimicalele dizolvate",
    r1_b5: "Atingere (Piele) — detectează presiunea, temperatura, durerea",

    // Round 2: Ochiul
    r2_title: "Ochiul",
    r2_text: "Lumina intră prin pupilă și lentilă. Lentila focalizează lumina pe retină, care trimite semnale la creier.",
    r2_b1: "Pupilă — deschidere care controlează intrarea luminii",
    r2_b2: "Iris — inel colorat care ajustează mărimea pupilei",
    r2_b3: "Lentilă — curbează lumina pentru a o focaliza pe retină",
    r2_b4: "Retină — conține celule sensibile la lumină",
    r2_b5: "Nervul optic — transmite semnale la creier",

    // Round 3: Urechea
    r3_title: "Urechea",
    r3_text: "Undele sonore intră în urechea externă și călătoresc prin canalul auditiv. Oasele mici (oscioarele) amplifică vibrațiile la cohleă, care trimite semnale la creier.",
    r3_b1: "Urechea externă — colectează undele sonore",
    r3_b2: "Canalul auditiv — conduce sunetul la timpan",
    r3_b3: "Timpan — vibrează când sunetul îl lovește",
    r3_b4: "Oscioarele — trei oase mici care amplifică vibrațiile",
    r3_b5: "Cohleă — convertește vibrațiile în semnale nervoase",

    // Round 4: Sistemul nervos
    r4_title: "Arc reflex",
    r4_text: "Când simți ceva, un semnal nervos călătorește de la organul senzorial la creier. Creierul îl procesează și trimite un răspuns înapoi la mușchi.",
    r4_b1: "Stimul — schimbare în mediu (atingere suprafață fierbinte)",
    r4_b2: "Receptor — organul senzorial detectează stimulul",
    r4_b3: "Semnalul călătorește — în sus pe nerv la creier",
    r4_b4: "Răspunsul creierului — decide ce să facă (trage mâna)",

    // Round 1: Cele 5 simțuri — Întrebare
    r1_q: "Care este un organ senzorial?",
    r1_q_a: "Ochi (vedere)",
    r1_q_b: "Inimă (respirație)",
    r1_q_c: "Mușchi (mișcare)",
    r1_q_d: "Os (suport)",

    // Round 2: Ochiul — Întrebare
    r2_q: "Ce face pupila?",
    r2_q_a: "Controlează cât de mult lumină intră în ochi",
    r2_q_b: "Focalizează lumina pe retină",
    r2_q_c: "Transmite semnale la creier",
    r2_q_d: "Conține celule sensibile la lumină",

    // Round 3: Urechea — Întrebare
    r3_q: "Care parte a urechii primește prima undele sonore?",
    r3_q_a: "Cohleă",
    r3_q_b: "Timpan",
    r3_q_c: "Urechea externă",
    r3_q_d: "Oscioare",

    // Round 4: Arc reflex — Întrebare
    r4_q: "Ce se întâmplă în arcul reflex imediat după detectarea stimulului?",
    r4_q_a: "Creierul decide ce să facă",
    r4_q_b: "Un semnal nervos călătorește în sus",
    r4_q_c: "Mușchiul se contractă imediat",
    r4_q_d: "Stimulul se oprește",

    // Round 5: Quiz
    r5_title: "Chestionar organelor senzoriale",
    r5_text: "Să-ți verificăm înțelegerea!",

    q1_q: "Care organ senzorial conține retina?",
    q1_a: "Ochi",
    q1_b: "Ureche",
    q1_c: "Nas",
    q1_d: "Limbă",

    q2_q: "Ce face pupila?",
    q2_a: "Controlează cât de mult lumină intră în ochi",
    q2_b: "Focalizează lumina pe retină",
    q2_c: "Transmite semnale la creier",
    q2_d: "Conține celule sensibile la lumină",

    q3_q: "Care parte a urechii primește prima undele sonore?",
    q3_a: "Cohleă",
    q3_b: "Timpan",
    q3_c: "Urechea externă",
    q3_d: "Oscioarele",

    q4_q: "Ce fac oscioarele?",
    q4_a: "Colectează undele sonore",
    q4_b: "Amplifică vibrațiile",
    q4_c: "Convertesc vibrațiile în semnale nervoase",
    q4_d: "Trimit semnale la creier",

    q5_q: "Ce se întâmplă în arcul reflex imediat după detectarea stimulului?",
    q5_a: "Creierul decide ce să facă",
    q5_b: "Un semnal nervos călătorește în sus",
    q5_c: "Mușchiul se contractă imediat",
    q5_d: "Stimulul se oprește",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS
// ─────────────────────────────────────────────────────────────────────────────

function SvgRound1(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r1_eye" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <radialGradient id="r1_nose_grad">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#EC4899" />
        </radialGradient>
        <linearGradient id="r1_ear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>

      {/* Head silhouette — center */}
      <circle cx="120" cy="80" r="28" fill="#374151" opacity="0.8" />
      <path d="M 105 65 Q 92 75, 95 95 Q 100 108, 120 110 Q 140 108, 145 95 Q 148 75, 135 65 Z" fill="#4B5563" />

      {/* Eye — top right */}
      <circle cx="155" cy="50" r="12" fill="url(#r1_eye)" />
      <circle cx="157" cy="50" r="5" fill="#000" />
      <circle cx="158" cy="48" r="2" fill="#fff" opacity="0.6" />
      <text x="155" y="75" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#3B82F6">👁</text>

      {/* Ear — left */}
      <path d="M 70 70 Q 55 65, 52 80 Q 55 95, 70 93 Z" fill="url(#r1_ear)" opacity="0.9" />
      <path d="M 65 78 Q 60 75, 60 80 Q 60 85, 65 85 Z" fill="#7C3AED" opacity="0.7" />
      <text x="35" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A855F7">👂</text>

      {/* Nose — top center */}
      <ellipse cx="120" cy="30" rx="8" ry="10" fill="url(#r1_nose_grad)" />
      <ellipse cx="116" cy="38" rx="2" ry="3" fill="#BE123C" opacity="0.6" />
      <ellipse cx="124" cy="38" rx="2" ry="3" fill="#BE123C" opacity="0.6" />
      <text x="120" y="12" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EC4899">👃</text>

      {/* Tongue/Taste — bottom center */}
      <ellipse cx="120" cy="130" rx="10" ry="8" fill="#F87171" />
      <text x="120" y="150" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#DC2626">👅</text>

      {/* Hand/Touch — right */}
      <g transform="translate(195, 90)">
        <rect x="-8" y="-12" width="5" height="18" rx="2" fill="#D4A574" />
        <circle cx="-5.5" cy="-10" r="2.5" fill="#D4A574" />
        <circle cx="-5.5" cy="-5" r="2.5" fill="#D4A574" />
        <circle cx="-5.5" cy="0" r="2.5" fill="#D4A574" />
        <circle cx="-5.5" cy="5" r="2.5" fill="#D4A574" />
      </g>
      <text x="215" y="95" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D4A574">✋</text>

      {/* Connectors — dashed lines to head */}
      <line x1="145" y1="58" x2="135" y2="65" stroke="rgba(100,200,255,0.4)" strokeWidth="1.5" strokeDasharray="2,2" />
      <line x1="65" y1="80" x2="92" y2="78" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" strokeDasharray="2,2" />
      <line x1="120" y1="42" x2="120" y2="52" stroke="rgba(236,72,153,0.4)" strokeWidth="1.5" strokeDasharray="2,2" />
      <line x1="120" y1="108" x2="120" y2="120" stroke="rgba(248,113,113,0.4)" strokeWidth="1.5" strokeDasharray="2,2" />
      <line x1="190" y1="98" x2="155" y2="90" stroke="rgba(212,165,116,0.4)" strokeWidth="1.5" strokeDasharray="2,2" />
    </svg>
  );
}

function SvgRound2(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r2_eye_cross" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <radialGradient id="r2_pupil">
          <stop offset="0%" stopColor="#000" />
          <stop offset="100%" stopColor="#1F2937" />
        </radialGradient>
      </defs>

      {/* Eye outline — cross-section */}
      <ellipse cx="120" cy="80" rx="35" ry="40" fill="url(#r2_eye_cross)" opacity="0.3" />
      <ellipse cx="120" cy="80" rx="35" ry="40" fill="none" stroke="#3B82F6" strokeWidth="2" />

      {/* Cornea — front curve */}
      <ellipse cx="120" cy="50" rx="20" ry="15" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.6" />

      {/* Pupil — center */}
      <circle cx="120" cy="80" r="12" fill="url(#r2_pupil)" />
      <circle cx="120" cy="80" r="12" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
      <circle cx="123" cy="76" r="3" fill="#fff" opacity="0.4" />

      {/* Iris — around pupil */}
      <circle cx="120" cy="80" r="16" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" />

      {/* Lens — inside */}
      <ellipse cx="120" cy="80" rx="18" ry="22" fill="#E0F2FE" opacity="0.2" />
      <ellipse cx="120" cy="80" rx="18" ry="22" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.5" strokeDasharray="2,2" />

      {/* Retina — back */}
      <path d="M 85 60 Q 85 100, 120 110 Q 155 100, 155 60" fill="none" stroke="#DC2626" strokeWidth="2" />
      <text x="120" y="90" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#DC2626">Retina</text>

      {/* Optic nerve — back */}
      <line x1="155" y1="75" x2="200" y2="75" stroke="#7C3AED" strokeWidth="3" />
      <path d="M 200 75 L 195 70 M 200 75 L 195 80" stroke="#7C3AED" strokeWidth="2" />

      {/* Labels with leader lines */}
      {/* Pupil label */}
      <line x1="120" y1="80" x2="140" y2="55" stroke="rgba(100,200,255,0.5)" strokeWidth="1" />
      <rect x="140" y="45" width="50" height="20" rx="4" fill="#ffffff" stroke="#3B82F6" strokeWidth="1" opacity="0.9" />
      <text x="165" y="59" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1D4ED8">Pupil</text>

      {/* Lens label */}
      <line x1="120" y1="102" x2="100" y2="120" stroke="rgba(100,200,255,0.5)" strokeWidth="1" />
      <rect x="60" y="118" width="45" height="18" rx="4" fill="#ffffff" stroke="#06B6D4" strokeWidth="1" opacity="0.9" />
      <text x="82" y="131" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0369A1">Lens</text>

      {/* Optic nerve label */}
      <line x1="175" y1="65" x2="190" y2="30" stroke="rgba(150,100,200,0.5)" strokeWidth="1" />
      <rect x="175" y="15" width="60" height="20" rx="4" fill="#ffffff" stroke="#7C3AED" strokeWidth="1" opacity="0.9" />
      <text x="205" y="29" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#6D28D9">Optic nerve</text>
    </svg>
  );
}

function SvgRound3(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r3_ear_grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D8B4FE" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
        <linearGradient id="r3_canal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>

      {/* Outer ear — C shape */}
      <path d="M 60 60 Q 40 70, 40 90 Q 40 110, 60 120 L 65 110 Q 50 105, 50 90 Q 50 75, 65 70 Z" fill="url(#r3_ear_grad)" />
      <path d="M 60 70 Q 48 75, 48 90 Q 48 105, 58 115" fill="none" stroke="#7C3AED" strokeWidth="2" opacity="0.5" />

      {/* Ear canal — tube */}
      <rect x="55" y="85" width="35" height="12" rx="6" fill="url(#r3_canal)" />
      <text x="72" y="93" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#6D28D9">Canal</text>

      {/* Eardrum — line */}
      <line x1="92" y1="85" x2="92" y2="100" stroke="#EF4444" strokeWidth="2.5" />
      <circle cx="92" cy="92" r="2.5" fill="#DC2626" />
      <text x="92" y="110" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#DC2626">Eardrum</text>

      {/* Ossicles — three tiny bones */}
      <g transform="translate(110, 90)">
        {/* Malleus — hammer */}
        <rect x="-8" y="-4" width="4" height="12" rx="2" fill="#F59E0B" />
        <circle cx="-6" cy="-6" r="3" fill="#F59E0B" />
        {/* Incus — anvil */}
        <rect x="-2" y="-6" width="4" height="14" rx="2" fill="#FBBF24" />
        <circle cx="0" cy="-8" r="2.5" fill="#FBBF24" />
        {/* Stapes — stirrup */}
        <path d="M 4 -2 L 8 -2 L 8 6 L 4 6 Z" fill="#F59E0B" opacity="0.8" />
        <circle cx="6" cy="8" r="2.5" fill="#F59E0B" />
      </g>
      <text x="110" y="115" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#F59E0B">Ossicles</text>

      {/* Cochlea — spiral */}
      <g transform="translate(150, 85)">
        <path d="M 0 -15 Q 10 -15, 10 -5 Q 10 5, 0 5 Q -10 5, -10 -5 Q -10 -15, 0 -20" fill="none" stroke="#06B6D4" strokeWidth="2" />
        <circle cx="0" cy="-8" r="1.5" fill="#06B6D4" />
      </g>
      <text x="150" y="115" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#06B6D4">Cochlea</text>

      {/* Nerve signal arrow */}
      <path d="M 160 85 L 200 85" stroke="#8B5CF6" strokeWidth="2.5" markerEnd="url(#r3_arrow)" />
      <defs>
        <marker id="r3_arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#8B5CF6" />
        </marker>
      </defs>
      <text x="180" y="78" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#8B5CF6">to brain</text>
    </svg>
  );
}

function SvgRound4(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r4_hand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="r4_brain_grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
      </defs>

      {/* HOT SURFACE — left */}
      <rect x="20" y="100" width="40" height="30" rx="3" fill="#F87171" opacity="0.7" />
      <text x="40" y="123" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">🔥</text>

      {/* HAND TOUCHING — left */}
      <g transform="translate(35, 75)">
        <rect x="-6" y="-10" width="4" height="14" rx="1.5" fill="url(#r4_hand)" />
        <circle cx="-4" cy="-12" r="2" fill="url(#r4_hand)" />
        <rect x="-1" y="-8" width="3" height="12" rx="1.5" fill="url(#r4_hand)" />
        <circle cx="0.5" cy="-10" r="1.8" fill="url(#r4_hand)" />
        <rect x="3" y="-6" width="3" height="10" rx="1.5" fill="url(#r4_hand)" />
        <circle cx="4.5" cy="-8" r="1.8" fill="url(#r4_hand)" />
      </g>

      {/* NERVE SIGNAL — upward arrow path */}
      <path d="M 35 65 Q 50 50, 80 35" stroke="#06B6D4" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="35" cy="65" r="3" fill="#06B6D4" />
      <circle cx="50" cy="50" r="2.5" fill="#06B6D4" opacity="0.6" />
      <circle cx="65" cy="42" r="2" fill="#06B6D4" opacity="0.4" />

      {/* BRAIN — right top */}
      <g transform="translate(145, 35)">
        <ellipse cx="0" cy="0" rx="20" ry="22" fill="url(#r4_brain_grad)" opacity="0.8" />
        <path d="M -15 -8 Q -10 -12, -5 -10 Q 0 -14, 5 -10 Q 10 -12, 15 -8" fill="none" stroke="#991B1B" strokeWidth="1.5" opacity="0.6" />
        <circle cx="-8" cy="2" r="2.5" fill="#991B1B" opacity="0.5" />
        <circle cx="0" cy="5" r="2.5" fill="#991B1B" opacity="0.5" />
        <circle cx="8" cy="2" r="2.5" fill="#991B1B" opacity="0.5" />
      </g>
      <text x="145" y="70" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#DC2626">Brain</text>

      {/* NERVE SIGNAL DOWN — from brain to muscle */}
      <path d="M 145 57 Q 115 75, 80 95" stroke="#06B6D4" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="145" cy="57" r="2.5" fill="#06B6D4" />
      <circle cx="115" cy="75" r="2" fill="#06B6D4" opacity="0.6" />

      {/* ARM PULLING BACK — right */}
      <g transform="translate(50, 80)">
        <line x1="0" y1="0" x2="-15" y2="-5" stroke="url(#r4_hand)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="-16" cy="-6" r="3" fill="url(#r4_hand)" />
      </g>

      {/* Label text boxes */}
      <rect x="15" y="50" width="45" height="15" rx="3" fill="#ffffff" stroke="#06B6D4" strokeWidth="1" opacity="0.85" />
      <text x="37" y="60" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0369A1">Stimulus</text>

      <rect x="155" y="80" width="50" height="15" rx="3" fill="#ffffff" stroke="#06B6D4" strokeWidth="1" opacity="0.85" />
      <text x="180" y="90" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0369A1">Response</text>
    </svg>
  );
}

function SvgRound5(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r5_grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="r5_grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {/* Eye icon */}
      <circle cx="50" cy="35" r="15" fill="url(#r5_grad1)" opacity="0.8" />
      <circle cx="50" cy="35" r="15" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="50" cy="35" r="8" fill="#000" />
      <circle cx="52" cy="32" r="2.5" fill="#fff" opacity="0.5" />
      <text x="50" y="65" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#3B82F6">Sight</text>

      {/* Ear icon */}
      <path d="M 130 25 Q 115 30, 115 45 Q 115 60, 130 65 L 135 55 Q 125 50, 125 45 Q 125 40, 135 35 Z" fill="url(#r5_grad2)" opacity="0.8" />
      <path d="M 130 35 Q 122 38, 122 45 Q 122 52, 130 55" fill="none" stroke="#7C3AED" strokeWidth="1.5" opacity="0.6" />
      <text x="130" y="65" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#7C3AED">Hearing</text>

      {/* Nose icon */}
      <ellipse cx="180" cy="40" rx="10" ry="12" fill="#F472B6" opacity="0.8" />
      <ellipse cx="176" cy="48" rx="2" ry="3" fill="#BE123C" opacity="0.7" />
      <ellipse cx="184" cy="48" rx="2" ry="3" fill="#BE123C" opacity="0.7" />
      <text x="180" y="65" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#EC4899">Smell</text>

      {/* Tongue icon */}
      <ellipse cx="50" cy="120" rx="12" ry="10" fill="#F87171" opacity="0.8" />
      <text x="50" y="145" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#DC2626">Taste</text>

      {/* Hand icon */}
      <g transform="translate(180, 105)">
        <rect x="-8" y="-8" width="4" height="12" rx="1.5" fill="#D4A574" opacity="0.8" />
        <circle cx="-6" cy="-10" r="2" fill="#D4A574" opacity="0.8" />
        <rect x="-3" y="-6" width="3" height="10" rx="1" fill="#D4A574" opacity="0.8" />
        <circle cx="-1.5" cy="-8" r="1.5" fill="#D4A574" opacity="0.8" />
        <rect x="1" y="-4" width="3" height="8" rx="1" fill="#D4A574" opacity="0.8" />
        <circle cx="2.5" cy="-6" r="1.5" fill="#D4A574" opacity="0.8" />
      </g>
      <text x="180" y="145" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#B45309">Touch</text>

      {/* Center "All senses" circle */}
      <circle cx="120" cy="95" r="18" fill="none" stroke="#F59E0B" strokeWidth="2" opacity="0.6" strokeDasharray="3,2" />
      <text x="120" y="100" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#F59E0B">5 Senses</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MCQ QUESTIONS — Round 5
// ─────────────────────────────────────────────────────────────────────────────

const MCQ_QUESTIONS: Record<string, MCQQuestion[]> = {
  en: [
    {
      question: "q1_q",
      choices: ["q1_a", "q1_b", "q1_c", "q1_d"],
      answer: "q1_a",
    },
    {
      question: "q2_q",
      choices: ["q2_a", "q2_b", "q2_c", "q2_d"],
      answer: "q2_b",
    },
    {
      question: "q3_q",
      choices: ["q3_a", "q3_b", "q3_c", "q3_d"],
      answer: "q3_c",
    },
    {
      question: "q4_q",
      choices: ["q4_a", "q4_b", "q4_c", "q4_d"],
      answer: "q4_b",
    },
    {
      question: "q5_q",
      choices: ["q5_a", "q5_b", "q5_c", "q5_d"],
      answer: "q5_b",
    },
  ],
  de: [
    { question: "q1_q", choices: ["q1_a", "q1_b", "q1_c", "q1_d"], answer: "q1_a" },
    { question: "q2_q", choices: ["q2_a", "q2_b", "q2_c", "q2_d"], answer: "q2_a" },
    { question: "q3_q", choices: ["q3_a", "q3_b", "q3_c", "q3_d"], answer: "q3_c" },
    { question: "q4_q", choices: ["q4_a", "q4_b", "q4_c", "q4_d"], answer: "q4_b" },
    { question: "q5_q", choices: ["q5_a", "q5_b", "q5_c", "q5_d"], answer: "q5_b" },
  ],
  hu: [
    { question: "q1_q", choices: ["q1_a", "q1_b", "q1_c", "q1_d"], answer: "q1_a" },
    { question: "q2_q", choices: ["q2_a", "q2_b", "q2_c", "q2_d"], answer: "q2_a" },
    { question: "q3_q", choices: ["q3_a", "q3_b", "q3_c", "q3_d"], answer: "q3_c" },
    { question: "q4_q", choices: ["q4_a", "q4_b", "q4_c", "q4_d"], answer: "q4_b" },
    { question: "q5_q", choices: ["q5_a", "q5_b", "q5_c", "q5_d"], answer: "q5_b" },
  ],
  ro: [
    { question: "q1_q", choices: ["q1_a", "q1_b", "q1_c", "q1_d"], answer: "q1_a" },
    { question: "q2_q", choices: ["q2_a", "q2_b", "q2_c", "q2_d"], answer: "q2_a" },
    { question: "q3_q", choices: ["q3_a", "q3_b", "q3_c", "q3_d"], answer: "q3_c" },
    { question: "q4_q", choices: ["q4_a", "q4_b", "q4_c", "q4_d"], answer: "q4_b" },
    { question: "q5_q", choices: ["q5_a", "q5_b", "q5_c", "q5_d"], answer: "q5_b" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SvgRound1,
      bulletKeys: ["r1_b1", "r1_b2", "r1_b3", "r1_b4", "r1_b5"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SvgRound2,
      bulletKeys: ["r2_b1", "r2_b2", "r2_b3", "r2_b4", "r2_b5"],
    },
    {
      type: "info",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SvgRound3,
      bulletKeys: ["r3_b1", "r3_b2", "r3_b3", "r3_b4", "r3_b5"],
    },
    {
      type: "info",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: SvgRound4,
      bulletKeys: ["r4_b1", "r4_b2", "r4_b3", "r4_b4"],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: SvgRound5,
      questions: MCQ_QUESTIONS.en,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function SenseExplorer({ color = "#06B6D4", lang = "en", onDone }: Props) {
  // Update MCQ questions based on language
  const defWithLang: ExplorerDef = {
    labels: LABELS,
    rounds: DEF.rounds.map((round) => {
      if (round.type === "mcq" && lang && MCQ_QUESTIONS[lang]) {
        return { ...round, questions: MCQ_QUESTIONS[lang] };
      }
      return round;
    }),
  };

  return <ExplorerEngine def={defWithLang} color={color} lang={lang} onDone={onDone} />;
}
