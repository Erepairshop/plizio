"use client";
import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Reptile Characteristics", r1_text: "Reptiles are cold-blooded vertebrates with scaly skin.",
    r1_fact1: "Scaly skin: Protects from water loss 🦎", r1_fact2: "Cold-blooded: Body temperature changes with environment 🌡️",
    r1_fact3: "Lay eggs: Most reptiles lay eggs with leathery shells 🥚", r1_fact4: "Types: Lizards, snakes, turtles, crocodiles 🐢",
    r2_title: "Reptile Diversity", r2_text: "Reptiles live in many environments and have diverse diets.",
    r2_fact1: "Lizards: Have legs and tails, eat insects and plants 🦎", r2_fact2: "Snakes: No legs, eat rodents and small animals 🐍",
    r2_fact3: "Turtles: Protected by shells, eat plants and meat 🐢", r2_fact4: "Crocodiles: Powerful predators, live in water 🐊",
    r3_title: "Insect Characteristics", r3_text: "Insects are invertebrates with six legs and often have wings.",
    r3_fact1: "Exoskeleton: Hard outer shell protects body 🛡️", r3_fact2: "Six legs: All insects have exactly 6 legs 🦗",
    r3_fact3: "Metamorphosis: Transform from egg to adult 🦋", r3_fact4: "Wings: Most insects have wings for flight 🐝",
    r3_q: "How many legs do all insects have?", r3_a: "Six", r3_b: "Eight", r3_c: "Four", r3_d: "Ten",
    r4_title: "Insect Life Cycles", r4_text: "Insects go through amazing transformations as they grow.",
    r4_fact1: "Egg: Insects start as tiny eggs 🥚", r4_fact2: "Larva: Young form eats constantly and grows 🐛",
    r4_fact3: "Pupa: Resting stage where transformation happens 🛡️", r4_fact4: "Adult: Fully developed insect can reproduce 🦋",
    r4_q: "What is the final stage of insect metamorphosis?", r4_a: "Adult", r4_b: "Larva", r4_c: "Pupa", r4_d: "Egg",
    r5_title: "Reptiles & Insects Quiz",
    q1_q: "What kind of skin do reptiles have?", q1_a: "Scaly skin", q1_b: "Feathers", q1_c: "Hair", q1_d: "Smooth skin",
    q2_q: "How many legs do insects have?", q2_a: "Six", q2_b: "Eight", q2_c: "Four", q2_d: "Ten",
    q3_q: "Are reptiles warm-blooded or cold-blooded?", q3_a: "Cold-blooded", q3_b: "Warm-blooded", q3_c: "Both", q3_d: "Neither",
  },
  de: {
    r1_title: "Reptilienmerkmale", r1_text: "Reptilien sind kaltblütige Wirbeltiere mit schuppiger Haut.",
    r1_fact1: "Schuppige Haut: Schützt vor Wasserlust 🦎", r1_fact2: "Kaltblütig: Körpertemperatur ändert sich mit Umgebung 🌡️",
    r1_fact3: "Legen Eier: Leguan-ähnliche Eier mit lederartigen Schalen 🥚", r1_fact4: "Typen: Eidechsen, Schlangen, Schildkröten, Krokodile 🐢",
    r2_title: "Reptilienvielfalt", r2_text: "Reptilien leben in vielen Umgebungen.",
    r2_fact1: "Eidechsen: Haben Beine und Schwänze 🦎", r2_fact2: "Schlangen: Keine Beine, fressen Nagetiere 🐍",
    r2_fact3: "Schildkröten: Geschützt durch Panzer 🐢", r2_fact4: "Krokodile: Mächtige Raubtiere 🐊",
    r3_title: "Insektenmerkmale", r3_text: "Insekten sind Wirbellose mit sechs Beinen.",
    r3_fact1: "Exoskelett: Harte äußere Schale 🛡️", r3_fact2: "Sechs Beine: Alle Insekten haben genau 6 Beine 🦗",
    r3_fact3: "Metamorphose: Umwandlung vom Ei bis zum Erwachsenen 🦋", r3_fact4: "Flügel: Die meisten Insekten haben Flügel 🐝",
    r3_q: "Wie viele Beine haben alle Insekten?", r3_a: "Sechs", r3_b: "Acht", r3_c: "Vier", r3_d: "Zehn",
    r4_title: "Insekten-Lebenszyklen", r4_text: "Insekten durchlaufen erstaunliche Transformationen.",
    r4_fact1: "Ei: Insekten beginnen als winzige Eier 🥚", r4_fact2: "Larve: Junges Formular frisst ständig 🐛",
    r4_fact3: "Puppe: Ruhestadium 🛡️", r4_fact4: "Erwachsen: Vollentwickeltes Insekt 🦋",
    r4_q: "Was ist die letzte Stufe der Insektenmetamorphose?", r4_a: "Erwachsen", r4_b: "Larve", r4_c: "Puppe", r4_d: "Ei",
    r5_title: "Reptilien & Insekten Quiz",
    q1_q: "Welche Hautart haben Reptilien?", q1_a: "Schuppig", q1_b: "Federn", q1_c: "Haare", q1_d: "Glatte Haut",
    q2_q: "Wie viele Beine haben Insekten?", q2_a: "Sechs", q2_b: "Acht", q2_c: "Vier", q2_d: "Zehn",
    q3_q: "Sind Reptilien warm- oder kaltblütig?", q3_a: "Kaltblütig", q3_b: "Warmblütig", q3_c: "Beides", q3_d: "Keins",
  },
  hu: {
    r1_title: "Hüllő jellegzetességek", r1_text: "A hüllők hidegvérű gerincesek pikkelyeshővel.",
    r1_fact1: "Pikkelyes bőr: Megvédi a vízből 🦎", r1_fact2: "Hidegvérű: Testhőmérséklet változik 🌡️",
    r1_fact3: "Tojásokat raknak 🥚", r1_fact4: "Típusok: Gyík, kígyó, teknős, krokodil 🐢",
    r2_title: "Hüllő sokféleség", r2_text: "A hüllők sok helyen élnek.",
    r2_fact1: "Gyíkok: Vannak lábaik és farokjuk 🦎", r2_fact2: "Kígyók: Nincsenek lábaik 🐍",
    r2_fact3: "Teknősök: Héjukkal védett 🐢", r2_fact4: "Krokodilok: Erős ragadozók 🐊",
    r3_title: "Rovar jellegzetességek", r3_text: "A rovarok hat lábú gerinctelenek.",
    r3_fact1: "Külső vázrendszer: Kemény külső héj 🛡️", r3_fact2: "Hat láb: Minden rovarnak pontosan 6 lába van 🦗",
    r3_fact3: "Metamorfózis: Átalakulás 🦋", r3_fact4: "Szárnyak: Legtöbb rovarnak szárnya van 🐝",
    r3_q: "Hány lába van az összes rovarnak?", r3_a: "Hat", r3_b: "Nyolc", r3_c: "Négy", r3_d: "Tíz",
    r4_title: "Rovar élettartam", r4_text: "A rovarok mennek keresztül csodálatos átalakulásokon.",
    r4_fact1: "Tojás: Kis tojásokból indulnak 🥚", r4_fact2: "Lárva: Fiatal forma folyton eszik 🐛",
    r4_fact3: "Báb: Pihenő szakasz 🛡️", r4_fact4: "Felnőtt: Teljes rovar 🦋",
    r4_q: "Mi az utolsó szakasz a rovar metamorfózisban?", r4_a: "Felnőtt", r4_b: "Lárva", r4_c: "Báb", r4_d: "Tojás",
    r5_title: "Hüllő és rovar kvíz",
    q1_q: "Milyen bőre van a hüllőknek?", q1_a: "Pikkelyes", q1_b: "Tollak", q1_c: "Szőr", q1_d: "Sima bőr",
    q2_q: "Hány lába van a rovaroknak?", q2_a: "Hat", q2_b: "Nyolc", q2_c: "Négy", q2_d: "Tíz",
    q3_q: "A hüllők meleg- vagy hidegvérűek?", q3_a: "Hidegvérű", q3_b: "Meleg vérű", q3_c: "Mindkettő", q3_d: "Egyik sem",
  },
  ro: {
    r1_title: "Caracteristicile reptilelor", r1_text: "Reptilele sunt vertebrate reci cu piele scaioză.",
    r1_fact1: "Piele scaioză: Protejează 🦎", r1_fact2: "Reci: Temperatura corp se schimbă 🌡️",
    r1_fact3: "Pun ouă 🥚", r1_fact4: "Tipuri: Șopârle, șerpi, țestoase, crocodili 🐢",
    r2_title: "Diversitate reptile", r2_text: "Reptilele trăiesc în multe locuri.",
    r2_fact1: "Șopârle: Au picioare și cozi 🦎", r2_fact2: "Șerpi: Nu au picioare 🐍",
    r2_fact3: "Țestoase: Protejate de coajă 🐢", r2_fact4: "Crocodili: Răpitori puternici 🐊",
    r3_title: "Caracteristicile insectelor", r3_text: "Insectele sunt nevertebrate cu șase picioare.",
    r3_fact1: "Exoschelet: Coajă externă dură 🛡️", r3_fact2: "Șase picioare: Toate insectele au exact 6 picioare 🦗",
    r3_fact3: "Metamorfoză: Transformare 🦋", r3_fact4: "Aripi: Majoritatea insectelor au aripi 🐝",
    r3_q: "Câte picioare au toate insectele?", r3_a: "Șase", r3_b: "Opt", r3_c: "Patru", r3_d: "Zece",
    r4_title: "Cicluri de viață ale insectelor", r4_text: "Insectele trec prin transformări uimitoare.",
    r4_fact1: "Ou: Insectele încep ca ouă mici 🥚", r4_fact2: "Larvă: Forma tânără mănâncă constant 🐛",
    r4_fact3: "Pupă: Stadiu de odihnă 🛡️", r4_fact4: "Adult: Insectă complet dezvoltată 🦋",
    r4_q: "Care este etapa finală a metamorfozei insectelor?", r4_a: "Adult", r4_b: "Larvă", r4_c: "Pupă", r4_d: "Ou",
    r5_title: "Reptile și insecte chestionar",
    q1_q: "Ce fel de piele au reptilele?", q1_a: "Scaioză", q1_b: "Pene", q1_c: "Păr", q1_d: "Piele netedă",
    q2_q: "Câte picioare au insectele?", q2_a: "Șase", q2_b: "Opt", q2_c: "Patru", q2_d: "Zece",
    q3_q: "Sunt reptilele calde sau reci?", q3_a: "Reci", q3_b: "Calde", q3_c: "Ambele", q3_d: "Nici unu",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "info", infoTitle: "r1_title", infoText: "r1_text", svg: () => <svg viewBox="0 0 240 160"><rect width="240" height="160" rx="16" fill="#2a4a1a"/><text x="120" y="90" textAnchor="middle" fontSize="50">🦎</text></svg>, bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"] },
    { type: "info", infoTitle: "r2_title", infoText: "r2_text", svg: () => <svg viewBox="0 0 240 160"><rect width="240" height="160" rx="16" fill="#4a1a2a"/><text x="120" y="90" textAnchor="middle" fontSize="50">🐍</text></svg>, bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"] },
    { type: "info", infoTitle: "r3_title", infoText: "r3_text", svg: () => <svg viewBox="0 0 240 160"><rect width="240" height="160" rx="16" fill="#1a2a4a"/><text x="120" y="90" textAnchor="middle" fontSize="50">🦗</text></svg>, bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"] },
    { type: "mcq", infoTitle: "r3_title", infoText: "r3_text", svg: () => <svg viewBox="0 0 240 160"><rect width="240" height="160" rx="16" fill="#1a2a4a"/><text x="120" y="90" textAnchor="middle" fontSize="50">🦗</text></svg>, questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_a" }] },
    { type: "mcq", infoTitle: "r4_title", infoText: "r4_text", svg: () => <svg viewBox="0 0 240 160"><rect width="240" height="160" rx="16" fill="#4a2a1a"/><text x="120" y="90" textAnchor="middle" fontSize="50">🦋</text></svg>, questions: [{ question: "q1_q", choices: ["q1_a", "q1_b", "q1_c", "q1_d"], answer: "q1_a" }, { question: "q2_q", choices: ["q2_a", "q2_b", "q2_c", "q2_d"], answer: "q2_a" }, { question: "q3_q", choices: ["q3_a", "q3_b", "q3_c", "q3_d"], answer: "q3_a" }] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function ReptilesInsectsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
