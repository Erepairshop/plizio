"use client";
// SafetyExplorer — Safety & First Aid (Unfallprävention) Grade 2
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Emergency Numbers", r1_text: "Know important numbers to call when there is danger. Police, ambulance, and fire help in emergencies.",
    r1_fact1: "Call 911 in the USA for all emergencies",
    r1_q: "What number do you call in an emergency?", r1_a: "911", r1_b: "123", r1_c: "000", r1_d: "555",
    r2_title: "Fire Safety", r2_text: "Never play with fire or matches. If there is a fire, get out fast and go to a safe place.",
    r2_fact1: "Smoke detector batteries help warn you of fire",
    r2_q: "What should you do if there is a fire?", r2_a: "Get out fast", r2_b: "Hide under bed", r2_c: "Play with it", r2_d: "Call a friend",
    r3_title: "Stranger Safety", r3_text: "Do not talk to strangers or get in cars with people you don't know. Always ask a trusted adult first.",
    r3_fact1: "It is OK to say 'No' to someone who makes you feel unsafe",
    r3_q: "What should you do if a stranger asks you to go with them?", r3_a: "Say no and tell an adult", r3_b: "Go with them", r3_c: "Stay quiet", r3_d: "Run away alone",
    r4_title: "First Aid", r4_text: "Know basic first aid: wash small cuts, use band-aids, ice for bumps. Always tell an adult about injuries.",
    r4_fact1: "Wash cuts with clean water to stop infection",
    r4_q: "What should you do for a small cut?", r4_a: "Wash it with water", r4_b: "Leave it dirty", r4_c: "Put salt on it", r4_d: "Ignore it",
    r5_q1_q: "Who helps when there is a fire?", r5_q1_a: "Firefighters", r5_q1_b: "Teachers", r5_q1_c: "Farmers", r5_q1_d: "Bakers",
    r5_q2_q: "What is one way to stay safe from fire?", r5_q2_a: "Keep away from matches", r5_q2_b: "Play with fire", r5_q2_c: "Hide fires", r5_q2_d: "Ignore alarms",
  },
  de: {
    r1_title: "Notrufnummern", r1_text: "Kenne wichtige Nummern zum Anrufen, wenn es eine Gefahr gibt. Polizei, Krankenwagen und Feuerwehr helfen im Notfall.",
    r1_fact1: "Ruf 112 in Deutschland im Notfall an",
    r1_q: "Welche Nummer rufst du im Notfall an?", r1_a: "112", r1_b: "123", r1_c: "000", r1_d: "555",
    r2_title: "Brandschutz", r2_text: "Spiele niemals mit Feuer oder Streichhölzern. Wenn es brennt, gehe schnell weg und gehe an einen sicheren Ort.",
    r2_fact1: "Rauchmelder helfen, Brände zu erkennen",
    r2_q: "Was solltest du tun, wenn es brennt?", r2_a: "Schnell rausgehen", r2_b: "Unter dem Bett verstecken", r2_c: "Damit spielen", r2_d: "Einen Freund anrufen",
    r3_title: "Sicherheit vor Fremden", r3_text: "Sprich nicht mit Fremden oder steige nicht in Autos von Menschen ein, die du nicht kennst. Frage immer einen vertrauenswürdigen Erwachsenen.",
    r3_fact1: "Es ist OK, 'Nein' zu sagen, wenn dich jemand unsicher macht",
    r3_q: "Was solltest du tun, wenn ein Fremder dich mitnehmen möchte?", r3_a: "Nein sagen und einem Erwachsenen sagen", r3_b: "Mit ihnen gehen", r3_c: "Still sein", r3_d: "Allein weglaufen",
    r4_title: "Erste Hilfe", r4_text: "Kenne Grundlagen der Ersten Hilfe: kleine Schnitte waschen, Verbandsmaterial verwenden, Eis für Beulen. Sag immer Erwachsenen von Verletzungen.",
    r4_fact1: "Wasche Schnitte mit sauberem Wasser, um Infektionen zu vermeiden",
    r4_q: "Was solltest du für einen kleinen Schnitt tun?", r4_a: "Mit Wasser waschen", r4_b: "Schmutzig lassen", r4_c: "Salz draufmachen", r4_d: "Ignorieren",
    r5_q1_q: "Wer hilft, wenn es ein Feuer gibt?", r5_q1_a: "Feuerwehrleute", r5_q1_b: "Lehrer", r5_q1_c: "Bauern", r5_q1_d: "Bäcker",
    r5_q2_q: "Was ist eine Möglichkeit, sich vor Feuer zu schützen?", r5_q2_a: "Weg von Streichhölzern bleiben", r5_q2_b: "Mit Feuer spielen", r5_q2_c: "Feuer verstecken", r5_q2_d: "Alarme ignorieren",
  },
  hu: {
    r1_title: "Vészhívások", r1_text: "Tudd a fontos számokat, ha veszély van. Rendőrség, mentő és tűzoltók segítenek a vészhelyzetben.",
    r1_fact1: "Magyarországon a 112-t hívd vészhelyzetben",
    r1_q: "Melyik számot hívsz vészhelyzetben?", r1_a: "112", r1_b: "123", r1_c: "000", r1_d: "555",
    r2_title: "Tűzmegelőzés", r2_text: "Soha ne játssz tűzzel vagy gyufával. Ha van tűz, gyorsan menj el és menj egy biztos helyre.",
    r2_fact1: "A füstérzékelő segít a tűzt felismerni",
    r2_q: "Mit kell tenned, ha tűz van?", r2_a: "Gyorsan menj ki", r2_b: "Az ágy alatt rejtőzz", r2_c: "Játssz vele", r2_d: "Hívj meg egy barátot",
    r3_title: "Idegenektől való biztonság", r3_text: "Ne beszélj idegenekkel vagy ne szállj be autóba olyan emberrel, akit nem ismersz. Mindig kérdezz meg egy megbízható felnőttet.",
    r3_fact1: "Jó azt mondani, hogy 'Nem', ha valaki biztonságtalannak éreztet",
    r3_q: "Mit kell tenned, ha egy idegen akart meghívni?", r3_a: "Mondj nemet és mond el egy felnőttnek", r3_b: "Menj vele", r3_c: "Hallgass", r3_d: "Fuss el egyedül",
    r4_title: "Első segítség", r4_text: "Ismerd az alapvető első segítséget: kis vágások mosása, sebtapasz, jég a dudorokra. Mindig mond el egy felnőttnek a sérülésekről.",
    r4_fact1: "Moss vágásokat tiszta vízzel az infekció megelőzésére",
    r4_q: "Mit kell tenned egy kis vágás esetén?", r4_a: "Vizzel mosni", r4_b: "Piszkosnak hagyni", r4_c: "Sót tenni rá", r4_d: "Figyelmen kívül hagyni",
    r5_q1_q: "Ki segít, ha van tűz?", r5_q1_a: "Tűzoltók", r5_q1_b: "Tanárok", r5_q1_c: "Farmok", r5_q1_d: "Pékek",
    r5_q2_q: "Mi az egyik módja annak, hogy biztonságban legyél a tűztől?", r5_q2_a: "Maradj messze a gyufáktól", r5_q2_b: "Játssz tűzzel", r5_q2_c: "Rejtsd el a tüzeket", r5_q2_d: "Figyelmen kívül hagyd az alarmokat",
  },
  ro: {
    r1_title: "Numere de urgență", r1_text: "Cunoaște numerele importante pentru a apela în caz de pericol. Poliția, ambulanța și pompierii ajută în urgență.",
    r1_fact1: "Suna 112 în România în caz de urgență",
    r1_q: "Ce număr sun ești în caz de urgență?", r1_a: "112", r1_b: "123", r1_c: "000", r1_d: "555",
    r2_title: "Siguranță în caz de incendiu", r2_text: "Nu juca niciodată cu focul sau cu chibriturile. Dacă este foc, fugi repede și du-te într-un loc sigur.",
    r2_fact1: "Detectorul de fum ajută la avertismentul de incendiu",
    r2_q: "Ce ar trebui să faci dacă este foc?", r2_a: "Fugi repede afară", r2_b: "Ascunde-te sub pat", r2_c: "Joacă-te cu el", r2_d: "Suna un prieten",
    r3_title: "Sigurança de la străini", r3_text: "Nu vorbi cu străinii și nu urca în mașini cu oameni pe care nu-i cunoști. Întreabă întotdeauna un adult de încredere.",
    r3_fact1: "Este bine să spui 'Nu' cuiva care te face să te simți nesigur",
    r3_q: "Ce ar trebui să faci dacă un străin te vrea cu el?", r3_a: "Spune nu și spune-i unui adult", r3_b: "Du-te cu el", r3_c: "Taci", r3_d: "Fugi singur",
    r4_title: "Prim ajutor", r4_text: "Cunoaște noțiunile de bază ale primului ajutor: spală tăieturile mici, folosește plasturi, gheață pentru bătături. Spune întotdeauna unui adult despre răniri.",
    r4_fact1: "Spală tăieturile cu apă curată pentru a preveni infecția",
    r4_q: "Ce ar trebui să faci pentru o tăietură mică?", r4_a: "Spala-o cu apă", r4_b: "Lasă-o murdar", r4_c: "Pune sare pe ea", r4_d: "Ignora-o",
    r5_q1_q: "Cine ajuta daca e foc?", r5_q1_a: "Pompierii", r5_q1_b: "Profesorii", r5_q1_c: "Fermierii", r5_q1_d: "Brutarii",
    r5_q2_q: "Care este o cale de a te proteja de incendiu?", r5_q2_a: "Rămâi departe de chibrituri", r5_q2_b: "Joacă-te cu focul", r5_q2_c: "Ascunde focurile", r5_q2_d: "Ignora alarmele",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#f57c00"/><text x="120" y="90" textAnchor="middle" fontSize="50">🚨</text></svg>
);

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: () => <SimpleSvg />, bulletKeys: ["r1_fact1"],
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" }] },
    { type: "mcq", infoTitle: "r2_title", infoText: "r2_text", svg: () => <SimpleSvg />, bulletKeys: ["r2_fact1"],
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_a" }] },
    { type: "mcq", infoTitle: "r3_title", infoText: "r3_text", svg: () => <SimpleSvg />, bulletKeys: ["r3_fact1"],
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_a" }] },
    { type: "mcq", infoTitle: "r4_title", infoText: "r4_text", svg: () => <SimpleSvg />, bulletKeys: ["r4_fact1"],
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_a" }] },
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: () => <SimpleSvg />,
      questions: [
        { question: "r5_q1_q", choices: ["r5_q1_a", "r5_q1_b", "r5_q1_c", "r5_q1_d"], answer: "r5_q1_a" },
        { question: "r5_q2_q", choices: ["r5_q2_a", "r5_q2_b", "r5_q2_c", "r5_q2_d"], answer: "r5_q2_a" },
      ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }

export default function SafetyExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
