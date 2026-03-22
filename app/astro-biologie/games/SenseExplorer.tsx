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
        <radialGradient id="se_r1_bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#1a1a3e" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </radialGradient>
        <radialGradient id="se_r1_eye_iris" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="40%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E3A5F" />
        </radialGradient>
        <radialGradient id="se_r1_ear_inner" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#DDD6FE" />
          <stop offset="100%" stopColor="#7C3AED" />
        </radialGradient>
        <linearGradient id="se_r1_nose" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#FBCFE8" />
          <stop offset="50%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
        <linearGradient id="se_r1_tongue" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="se_r1_skin" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#FDEBD0" />
          <stop offset="50%" stopColor="#E8C9A0" />
          <stop offset="100%" stopColor="#C9A87C" />
        </linearGradient>
        <radialGradient id="se_r1_glow_blue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.25)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0)" />
        </radialGradient>
        <radialGradient id="se_r1_glow_purple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(168,85,247,0.25)" />
          <stop offset="100%" stopColor="rgba(168,85,247,0)" />
        </radialGradient>
        <radialGradient id="se_r1_glow_pink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(236,72,153,0.25)" />
          <stop offset="100%" stopColor="rgba(236,72,153,0)" />
        </radialGradient>
        <radialGradient id="se_r1_glow_red" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(239,68,68,0.25)" />
          <stop offset="100%" stopColor="rgba(239,68,68,0)" />
        </radialGradient>
        <radialGradient id="se_r1_glow_amber" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(217,119,6,0.25)" />
          <stop offset="100%" stopColor="rgba(217,119,6,0)" />
        </radialGradient>
        <filter id="se_r1_soft">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#se_r1_bg)" rx="6" />

      {/* Central head silhouette */}
      <ellipse cx="120" cy="80" rx="22" ry="26" fill="#2D2B55" opacity="0.7" />
      <ellipse cx="120" cy="72" rx="18" ry="20" fill="#3D3B65" opacity="0.6" />
      {/* Neck */}
      <rect x="114" y="96" width="12" height="10" rx="4" fill="#2D2B55" opacity="0.5" />

      {/* Connector lines — glowing nerve paths */}
      <path d="M 120 56 Q 100 30, 55 28" stroke="url(#se_r1_nose)" strokeWidth="1.2" fill="none" opacity="0.4" strokeDasharray="3,2" />
      <path d="M 135 68 Q 155 55, 175 42" stroke="#3B82F6" strokeWidth="1.2" fill="none" opacity="0.4" strokeDasharray="3,2" />
      <path d="M 105 75 Q 75 70, 45 75" stroke="#A855F7" strokeWidth="1.2" fill="none" opacity="0.4" strokeDasharray="3,2" />
      <path d="M 120 100 Q 120 115, 120 125" stroke="#EF4444" strokeWidth="1.2" fill="none" opacity="0.4" strokeDasharray="3,2" />
      <path d="M 135 90 Q 165 105, 195 100" stroke="#D97706" strokeWidth="1.2" fill="none" opacity="0.4" strokeDasharray="3,2" />

      {/* EYE — top right */}
      <circle cx="185" cy="38" r="22" fill="url(#se_r1_glow_blue)" filter="url(#se_r1_soft)" />
      {/* Eyeball */}
      <ellipse cx="185" cy="38" rx="16" ry="12" fill="#F0F4FF" />
      <ellipse cx="185" cy="38" rx="16" ry="12" fill="none" stroke="#64748B" strokeWidth="0.8" />
      {/* Iris */}
      <circle cx="185" cy="38" r="7" fill="url(#se_r1_eye_iris)" />
      {/* Pupil */}
      <circle cx="185" cy="38" r="3.5" fill="#0F172A" />
      {/* Highlight */}
      <circle cx="187" cy="35" r="1.8" fill="#fff" opacity="0.8" />
      <circle cx="183" cy="40" r="0.8" fill="#fff" opacity="0.4" />
      {/* Eyelid upper */}
      <path d="M 169 38 Q 177 28, 185 26 Q 193 28, 201 38" fill="none" stroke="#94A3B8" strokeWidth="1" />
      {/* Eyelid lower */}
      <path d="M 169 38 Q 177 46, 185 48 Q 193 46, 201 38" fill="none" stroke="#94A3B8" strokeWidth="0.6" />

      {/* EAR — left */}
      <circle cx="40" cy="75" r="22" fill="url(#se_r1_glow_purple)" filter="url(#se_r1_soft)" />
      {/* Outer ear (pinna) */}
      <path d="M 48 58 Q 28 62, 26 78 Q 25 92, 38 96 Q 42 97, 44 93 Q 32 88, 32 78 Q 32 68, 48 64 Z" fill="#C4B5FD" stroke="#8B5CF6" strokeWidth="0.8" />
      {/* Inner ear folds */}
      <path d="M 45 65 Q 36 68, 36 78 Q 36 86, 42 90" fill="none" stroke="#7C3AED" strokeWidth="1.2" opacity="0.7" />
      <path d="M 43 69 Q 38 72, 38 78 Q 38 83, 41 86" fill="none" stroke="#6D28D9" strokeWidth="0.8" opacity="0.5" />
      {/* Canal opening */}
      <ellipse cx="44" cy="78" rx="3" ry="4" fill="#4C1D95" />

      {/* NOSE — top left */}
      <circle cx="52" cy="25" r="22" fill="url(#se_r1_glow_pink)" filter="url(#se_r1_soft)" />
      {/* Nose bridge */}
      <path d="M 52 12 Q 48 18, 44 28 Q 42 34, 46 36 Q 50 38, 52 36 Q 54 38, 58 36 Q 62 34, 60 28 Q 56 18, 52 12 Z" fill="url(#se_r1_nose)" />
      {/* Nostrils */}
      <ellipse cx="48" cy="34" rx="3" ry="2.5" fill="#9D174D" opacity="0.7" />
      <ellipse cx="56" cy="34" rx="3" ry="2.5" fill="#9D174D" opacity="0.7" />
      {/* Highlight */}
      <path d="M 51 14 Q 50 20, 48 26" stroke="#FDF2F8" strokeWidth="0.8" fill="none" opacity="0.5" />

      {/* TONGUE — bottom center */}
      <circle cx="120" cy="132" r="22" fill="url(#se_r1_glow_red)" filter="url(#se_r1_soft)" />
      {/* Mouth outline */}
      <path d="M 105 128 Q 112 122, 120 122 Q 128 122, 135 128" fill="none" stroke="#FDA4AF" strokeWidth="1" />
      {/* Tongue body */}
      <path d="M 108 130 Q 108 140, 120 144 Q 132 140, 132 130 Q 128 126, 120 126 Q 112 126, 108 130 Z" fill="url(#se_r1_tongue)" />
      {/* Taste zones — subtle dots */}
      <circle cx="115" cy="132" r="1" fill="#FCA5A5" opacity="0.6" />
      <circle cx="120" cy="130" r="1" fill="#FCA5A5" opacity="0.6" />
      <circle cx="125" cy="132" r="1" fill="#FCA5A5" opacity="0.6" />
      <circle cx="120" cy="136" r="1.2" fill="#FCA5A5" opacity="0.5" />
      {/* Center groove */}
      <line x1="120" y1="127" x2="120" y2="140" stroke="#B91C1C" strokeWidth="0.5" opacity="0.4" />

      {/* HAND — right */}
      <circle cx="200" cy="100" r="22" fill="url(#se_r1_glow_amber)" filter="url(#se_r1_soft)" />
      {/* Palm */}
      <path d="M 193 100 Q 191 108, 195 112 Q 200 114, 205 112 Q 209 108, 207 100 Z" fill="url(#se_r1_skin)" />
      {/* Fingers */}
      <rect x="194" y="86" width="4" height="14" rx="2" fill="url(#se_r1_skin)" />
      <rect x="198.5" y="83" width="4" height="17" rx="2" fill="url(#se_r1_skin)" />
      <rect x="203" y="85" width="4" height="15" rx="2" fill="url(#se_r1_skin)" />
      <rect x="207" y="88" width="3.5" height="12" rx="1.8" fill="url(#se_r1_skin)" />
      {/* Thumb */}
      <path d="M 193 102 Q 189 100, 188 96 Q 187 93, 189 91" stroke="url(#se_r1_skin)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* Fingertip details */}
      <path d="M 195 87" stroke="#C9A87C" strokeWidth="0.3" fill="none" opacity="0.4" />
      {/* Skin texture lines on palm */}
      <path d="M 195 104 Q 200 102, 205 104" stroke="#C9A87C" strokeWidth="0.4" fill="none" opacity="0.3" />
      <path d="M 196 107 Q 200 106, 204 107" stroke="#C9A87C" strokeWidth="0.3" fill="none" opacity="0.3" />
    </svg>
  );
}

function SvgRound2(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="se_r2_bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
        <linearGradient id="se_r2_sclera" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="40%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <radialGradient id="se_r2_iris" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="35%" stopColor="#3B82F6" />
          <stop offset="70%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#1E3A5F" />
        </radialGradient>
        <radialGradient id="se_r2_pupil" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
        <linearGradient id="se_r2_cornea" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="se_r2_retina" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="se_r2_nerve" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="se_r2_lens" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="se_r2_vitreous" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.05" />
        </linearGradient>
        <filter id="se_r2_glow">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#se_r2_bg)" rx="6" />

      {/* Eye cross-section — main shape */}
      {/* Sclera (outer shell) */}
      <ellipse cx="110" cy="80" rx="68" ry="52" fill="url(#se_r2_sclera)" />
      <ellipse cx="110" cy="80" rx="68" ry="52" fill="none" stroke="#94A3B8" strokeWidth="1.5" />

      {/* Choroid layer (dark inner lining) */}
      <ellipse cx="110" cy="80" rx="64" ry="48" fill="none" stroke="#7F1D1D" strokeWidth="2" opacity="0.3" />

      {/* Vitreous humor (interior) */}
      <ellipse cx="115" cy="80" rx="55" ry="42" fill="url(#se_r2_vitreous)" />

      {/* Retina — inner back surface */}
      <path d="M 145 38 Q 170 50, 175 80 Q 170 110, 145 122" fill="none" stroke="url(#se_r2_retina)" strokeWidth="3" />
      {/* Retina cell texture */}
      <path d="M 150 45 Q 165 55, 170 70" fill="none" stroke="#FCA5A5" strokeWidth="0.5" opacity="0.4" />
      <path d="M 150 115 Q 165 105, 170 90" fill="none" stroke="#FCA5A5" strokeWidth="0.5" opacity="0.4" />

      {/* Lens — biconvex shape */}
      <ellipse cx="75" cy="80" rx="12" ry="22" fill="url(#se_r2_lens)" />
      <ellipse cx="75" cy="80" rx="12" ry="22" fill="none" stroke="#0EA5E9" strokeWidth="1" opacity="0.6" />
      {/* Lens highlight */}
      <path d="M 70 62 Q 72 70, 70 78" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Cornea — front bulge */}
      <path d="M 42 58 Q 32 68, 32 80 Q 32 92, 42 102" fill="url(#se_r2_cornea)" stroke="#60A5FA" strokeWidth="1.2" />

      {/* Iris — colored ring */}
      <path d="M 58 58 Q 50 66, 50 80 Q 50 94, 58 102" fill="url(#se_r2_iris)" />
      <path d="M 58 58 L 58 102" fill="none" stroke="#1D4ED8" strokeWidth="0.5" opacity="0.3" />
      {/* Iris fiber texture */}
      <path d="M 54 62 Q 52 70, 52 80 Q 52 90, 54 98" stroke="#2563EB" strokeWidth="0.3" fill="none" opacity="0.5" />
      <path d="M 56 60 Q 53 70, 53 80 Q 53 90, 56 100" stroke="#1D4ED8" strokeWidth="0.3" fill="none" opacity="0.4" />

      {/* Pupil — opening in iris */}
      <path d="M 58 68 Q 55 74, 55 80 Q 55 86, 58 92" fill="url(#se_r2_pupil)" />
      <path d="M 58 68 L 58 92" fill="url(#se_r2_pupil)" />

      {/* Optic nerve — exiting back */}
      <path d="M 175 76 Q 185 76, 195 72 Q 208 65, 220 58" stroke="url(#se_r2_nerve)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 175 84 Q 185 84, 195 88 Q 208 95, 220 102" stroke="url(#se_r2_nerve)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Optic disc (blind spot) */}
      <circle cx="172" cy="80" r="5" fill="#FDE68A" opacity="0.4" />

      {/* Light rays entering */}
      <line x1="5" y1="65" x2="32" y2="75" stroke="#FCD34D" strokeWidth="0.8" opacity="0.3" />
      <line x1="5" y1="80" x2="32" y2="80" stroke="#FCD34D" strokeWidth="0.8" opacity="0.4" />
      <line x1="5" y1="95" x2="32" y2="85" stroke="#FCD34D" strokeWidth="0.8" opacity="0.3" />
      {/* Light converging through lens */}
      <line x1="87" y1="70" x2="165" y2="78" stroke="#FCD34D" strokeWidth="0.5" opacity="0.2" strokeDasharray="2,3" />
      <line x1="87" y1="80" x2="165" y2="80" stroke="#FCD34D" strokeWidth="0.5" opacity="0.25" strokeDasharray="2,3" />
      <line x1="87" y1="90" x2="165" y2="82" stroke="#FCD34D" strokeWidth="0.5" opacity="0.2" strokeDasharray="2,3" />

      {/* Ciliary muscle (suspensory ligaments) */}
      <line x1="63" y1="55" x2="68" y2="60" stroke="#94A3B8" strokeWidth="0.6" opacity="0.5" />
      <line x1="63" y1="105" x2="68" y2="100" stroke="#94A3B8" strokeWidth="0.6" opacity="0.5" />

      {/* Subtle label dots */}
      <circle cx="52" cy="80" r="2" fill="#3B82F6" opacity="0.7" />
      <circle cx="75" cy="80" r="2" fill="#0EA5E9" opacity="0.7" />
      <circle cx="160" cy="80" r="2" fill="#EF4444" opacity="0.7" />
      <circle cx="200" cy="68" r="2" fill="#7C3AED" opacity="0.7" />
    </svg>
  );
}

function SvgRound3(lang: string): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="se_r3_bg" cx="30%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#1a1a3e" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </radialGradient>
        <linearGradient id="se_r3_pinna" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDEBD0" />
          <stop offset="40%" stopColor="#E8C9A0" />
          <stop offset="100%" stopColor="#C9A87C" />
        </linearGradient>
        <linearGradient id="se_r3_canal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4B896" />
          <stop offset="100%" stopColor="#5C3D1E" />
        </linearGradient>
        <linearGradient id="se_r3_drum" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E5E7EB" />
          <stop offset="50%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <linearGradient id="se_r3_bone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="50%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="se_r3_cochlea" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0E7490" />
        </radialGradient>
        <linearGradient id="se_r3_nerve" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="se_r3_middle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF9C3" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.05" />
        </linearGradient>
        <filter id="se_r3_glow">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#se_r3_bg)" rx="6" />

      {/* Outer ear (pinna) */}
      <path d="M 18 42 Q 5 55, 4 80 Q 5 108, 18 118 Q 24 122, 28 118 Q 20 108, 18 95 Q 12 80, 15 65 Q 18 55, 28 48 Z" fill="url(#se_r3_pinna)" stroke="#C9A87C" strokeWidth="0.8" />
      {/* Inner ear ridge (antihelix) */}
      <path d="M 24 50 Q 14 60, 12 80 Q 14 100, 24 110" fill="none" stroke="#D4B896" strokeWidth="1.5" opacity="0.6" />
      <path d="M 26 55 Q 18 65, 16 80 Q 18 95, 26 105" fill="none" stroke="#C9A87C" strokeWidth="1" opacity="0.4" />
      {/* Tragus */}
      <ellipse cx="30" cy="80" rx="4" ry="7" fill="url(#se_r3_pinna)" stroke="#C9A87C" strokeWidth="0.5" />
      {/* Lobule */}
      <ellipse cx="22" cy="122" rx="6" ry="5" fill="url(#se_r3_pinna)" opacity="0.8" />

      {/* Ear canal */}
      <path d="M 34 74 L 72 72 Q 76 72, 76 76 L 76 84 Q 76 88, 72 88 L 34 86 Z" fill="url(#se_r3_canal)" />
      <path d="M 36 76 L 70 74" stroke="#8B6F4E" strokeWidth="0.4" opacity="0.4" />
      <path d="M 36 84 L 70 86" stroke="#3D2B14" strokeWidth="0.4" opacity="0.4" />

      {/* Eardrum (tympanic membrane) */}
      <ellipse cx="80" cy="80" rx="3" ry="10" fill="url(#se_r3_drum)" stroke="#9CA3AF" strokeWidth="0.8" />
      {/* Eardrum cone shape (umbo) */}
      <path d="M 80 72 Q 82 80, 80 88" stroke="#6B7280" strokeWidth="0.5" fill="none" />
      {/* Vibration lines */}
      <path d="M 76 75 Q 74 80, 76 85" stroke="#60A5FA" strokeWidth="0.5" opacity="0.4" />
      <path d="M 74 77 Q 72 80, 74 83" stroke="#60A5FA" strokeWidth="0.4" opacity="0.3" />

      {/* Middle ear cavity */}
      <ellipse cx="100" cy="80" rx="18" ry="22" fill="url(#se_r3_middle)" stroke="rgba(253,230,138,0.2)" strokeWidth="0.5" />

      {/* Ossicles — three bones */}
      {/* Malleus (hammer) */}
      <path d="M 83 78 L 88 72 L 90 68 Q 91 66, 93 67 L 92 70 L 90 76 Z" fill="url(#se_r3_bone)" stroke="#B45309" strokeWidth="0.5" />
      <circle cx="91" cy="66" r="2.5" fill="url(#se_r3_bone)" stroke="#B45309" strokeWidth="0.4" />

      {/* Incus (anvil) */}
      <path d="M 93 67 Q 97 65, 100 68 L 102 74 Q 103 78, 100 80 L 97 76 Q 95 72, 93 70 Z" fill="url(#se_r3_bone)" stroke="#B45309" strokeWidth="0.5" />
      <circle cx="98" cy="66" r="2" fill="url(#se_r3_bone)" stroke="#B45309" strokeWidth="0.4" />

      {/* Stapes (stirrup) */}
      <path d="M 100 78 L 104 76 Q 108 74, 110 76 L 110 84 Q 108 86, 104 84 L 100 82 Z" fill="none" stroke="url(#se_r3_bone)" strokeWidth="1.2" />
      <ellipse cx="111" cy="80" rx="2" ry="5" fill="url(#se_r3_bone)" opacity="0.6" stroke="#B45309" strokeWidth="0.4" />

      {/* Oval window */}
      <ellipse cx="114" cy="80" rx="2.5" ry="6" fill="#FEF3C7" opacity="0.3" stroke="#D97706" strokeWidth="0.5" />

      {/* Cochlea — spiral shell */}
      <g transform="translate(138, 82)">
        {/* Outer spiral */}
        <path d="M 0 -18 Q 16 -18, 18 -4 Q 20 10, 6 14 Q -8 16, -12 4 Q -14 -8, -2 -12 Q 8 -14, 12 -6 Q 14 2, 4 6 Q -4 8, -6 0 Q -6 -4, 0 -5" fill="none" stroke="url(#se_r3_cochlea)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Inner highlight */}
        <path d="M 2 -16 Q 14 -16, 16 -4 Q 18 8, 6 12" fill="none" stroke="#A5F3FC" strokeWidth="0.6" opacity="0.4" />
        {/* Center */}
        <circle cx="0" cy="-2" r="2" fill="#06B6D4" opacity="0.6" />
      </g>

      {/* Semicircular canals (balance) */}
      <path d="M 132 60 Q 142 48, 155 50 Q 162 52, 160 60" fill="none" stroke="#2DD4BF" strokeWidth="1.5" opacity="0.5" />
      <path d="M 128 58 Q 125 48, 130 42 Q 138 38, 144 44" fill="none" stroke="#2DD4BF" strokeWidth="1.2" opacity="0.4" />

      {/* Auditory nerve */}
      <path d="M 155 88 Q 170 95, 185 98 Q 200 100, 215 95" stroke="url(#se_r3_nerve)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 158 92 Q 172 98, 188 100" stroke="#A78BFA" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
      {/* Nerve signal dots */}
      <circle cx="175" cy="96" r="1.5" fill="#C084FC" opacity="0.6" />
      <circle cx="190" cy="99" r="1.2" fill="#A78BFA" opacity="0.5" />
      <circle cx="205" cy="97" r="1" fill="#8B5CF6" opacity="0.4" />

      {/* Sound wave lines entering */}
      <path d="M 2 72 Q 0 80, 2 88" stroke="#60A5FA" strokeWidth="0.6" opacity="0.3" fill="none" />
      <path d="M 5 70 Q 3 80, 5 90" stroke="#60A5FA" strokeWidth="0.5" opacity="0.25" fill="none" />

      {/* Region indicator dots */}
      <circle cx="55" cy="80" r="1.5" fill="#D97706" opacity="0.5" />
      <circle cx="80" cy="80" r="1.5" fill="#9CA3AF" opacity="0.6" />
      <circle cx="98" cy="74" r="1.5" fill="#F59E0B" opacity="0.6" />
      <circle cx="138" cy="80" r="1.5" fill="#06B6D4" opacity="0.6" />
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
      <text x="145" y="70" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#DC2626">Brain</text>

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

// R1-R4 Question Pools
const R1_QUESTIONS: Record<string, MCQQuestion[]> = {
  en: [{ question: "r1_q", choices: ["r1_q_a", "r1_q_b", "r1_q_c", "r1_q_d"], answer: "r1_q_a" }],
  de: [{ question: "r1_q", choices: ["r1_q_a", "r1_q_b", "r1_q_c", "r1_q_d"], answer: "r1_q_a" }],
  hu: [{ question: "r1_q", choices: ["r1_q_a", "r1_q_b", "r1_q_c", "r1_q_d"], answer: "r1_q_a" }],
  ro: [{ question: "r1_q", choices: ["r1_q_a", "r1_q_b", "r1_q_c", "r1_q_d"], answer: "r1_q_a" }],
};

const R2_QUESTIONS: Record<string, MCQQuestion[]> = {
  en: [{ question: "r2_q", choices: ["r2_q_a", "r2_q_b", "r2_q_c", "r2_q_d"], answer: "r2_q_a" }],
  de: [{ question: "r2_q", choices: ["r2_q_a", "r2_q_b", "r2_q_c", "r2_q_d"], answer: "r2_q_a" }],
  hu: [{ question: "r2_q", choices: ["r2_q_a", "r2_q_b", "r2_q_c", "r2_q_d"], answer: "r2_q_a" }],
  ro: [{ question: "r2_q", choices: ["r2_q_a", "r2_q_b", "r2_q_c", "r2_q_d"], answer: "r2_q_a" }],
};

const R3_QUESTIONS: Record<string, MCQQuestion[]> = {
  en: [{ question: "r3_q", choices: ["r3_q_a", "r3_q_b", "r3_q_c", "r3_q_d"], answer: "r3_q_c" }],
  de: [{ question: "r3_q", choices: ["r3_q_a", "r3_q_b", "r3_q_c", "r3_q_d"], answer: "r3_q_c" }],
  hu: [{ question: "r3_q", choices: ["r3_q_a", "r3_q_b", "r3_q_c", "r3_q_d"], answer: "r3_q_c" }],
  ro: [{ question: "r3_q", choices: ["r3_q_a", "r3_q_b", "r3_q_c", "r3_q_d"], answer: "r3_q_c" }],
};

const R4_QUESTIONS: Record<string, MCQQuestion[]> = {
  en: [{ question: "r4_q", choices: ["r4_q_a", "r4_q_b", "r4_q_c", "r4_q_d"], answer: "r4_q_b" }],
  de: [{ question: "r4_q", choices: ["r4_q_a", "r4_q_b", "r4_q_c", "r4_q_d"], answer: "r4_q_b" }],
  hu: [{ question: "r4_q", choices: ["r4_q_a", "r4_q_b", "r4_q_c", "r4_q_d"], answer: "r4_q_b" }],
  ro: [{ question: "r4_q", choices: ["r4_q_a", "r4_q_b", "r4_q_c", "r4_q_d"], answer: "r4_q_b" }],
};

// R5 Review Questions (3 total)
const R5_QUESTIONS: Record<string, MCQQuestion[]> = {
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
  ],
  de: [
    { question: "q1_q", choices: ["q1_a", "q1_b", "q1_c", "q1_d"], answer: "q1_a" },
    { question: "q2_q", choices: ["q2_a", "q2_b", "q2_c", "q2_d"], answer: "q2_b" },
    { question: "q3_q", choices: ["q3_a", "q3_b", "q3_c", "q3_d"], answer: "q3_c" },
  ],
  hu: [
    { question: "q1_q", choices: ["q1_a", "q1_b", "q1_c", "q1_d"], answer: "q1_a" },
    { question: "q2_q", choices: ["q2_a", "q2_b", "q2_c", "q2_d"], answer: "q2_b" },
    { question: "q3_q", choices: ["q3_a", "q3_b", "q3_c", "q3_d"], answer: "q3_c" },
  ],
  ro: [
    { question: "q1_q", choices: ["q1_a", "q1_b", "q1_c", "q1_d"], answer: "q1_a" },
    { question: "q2_q", choices: ["q2_a", "q2_b", "q2_c", "q2_d"], answer: "q2_b" },
    { question: "q3_q", choices: ["q3_a", "q3_b", "q3_c", "q3_d"], answer: "q3_c" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SvgRound1,
      bulletKeys: ["r1_b1", "r1_b2", "r1_b3", "r1_b4", "r1_b5"],
      questions: R1_QUESTIONS.en,
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SvgRound2,
      bulletKeys: ["r2_b1", "r2_b2", "r2_b3", "r2_b4", "r2_b5"],
      questions: R2_QUESTIONS.en,
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SvgRound3,
      bulletKeys: ["r3_b1", "r3_b2", "r3_b3", "r3_b4", "r3_b5"],
      questions: R3_QUESTIONS.en,
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: SvgRound4,
      bulletKeys: ["r4_b1", "r4_b2", "r4_b3", "r4_b4"],
      questions: R4_QUESTIONS.en,
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: SvgRound5,
      questions: R5_QUESTIONS.en,
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
    rounds: DEF.rounds.map((round, idx) => {
      if (round.type === "mcq" && lang) {
        if (idx === 0) return { ...round, questions: R1_QUESTIONS[lang] };
        if (idx === 1) return { ...round, questions: R2_QUESTIONS[lang] };
        if (idx === 2) return { ...round, questions: R3_QUESTIONS[lang] };
        if (idx === 3) return { ...round, questions: R4_QUESTIONS[lang] };
        if (idx === 4) return { ...round, questions: R5_QUESTIONS[lang] };
      }
      return round;
    }),
  };

  return <ExplorerEngine def={defWithLang} color={color} lang={lang} onDone={onDone} />;
}
