"use client";
// HumanBodyExplorer.tsx — Sachkunde Island i1: Human Body (K4)
// Topics: 1) Szervrendszerek 2) Csontváz 3) Izmok 4) Egészséges életmód 5) Baktérium vadászat

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      {/* Légzőrendszer (Tüdő) */}
      <g transform="translate(70, 70)">
        <path d="M -2, -30 L -2, -10 M 2, -30 L 2, -10" stroke="#93C5FD" strokeWidth="4" />
        <path d="M -2,-10 L -15,0 M 2,-10 L 15,0" stroke="#93C5FD" strokeWidth="3" />
        <ellipse cx="-15" cy="15" rx="15" ry="25" fill="#BAE6FD" opacity="0.8" />
        <ellipse cx="15" cy="15" rx="15" ry="25" fill="#BAE6FD" opacity="0.8" />
      </g>
      {/* Emésztőrendszer (Gyomor és Belek) */}
      <g transform="translate(170, 70)">
        <path d="M -5,-30 L -5,-15" stroke="#FCA5A5" strokeWidth="4" />
        <path d="M -15,-15 C 20,-30 30,10 5,15 C -20,20 -30,-5 -15,-15 Z" fill="#F87171" />
        <path d="M -5,15 C -15,25 20,30 5,40" fill="none" stroke="#FCA5A5" strokeWidth="8" strokeLinecap="round" />
      </g>
      {/* Elválasztó */}
      <line x1="120" y1="20" x2="120" y2="120" stroke="#E0F2FE" strokeWidth="4" strokeDasharray="5 5" />
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F1F5F9" rx="20" />
      {/* Csontváz */}
      <g transform="translate(120, 60)">
        {/* Koponya */}
        <circle cx="0" cy="-40" r="14" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
        <rect x="-6" y="-28" width="12" height="6" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
        {/* Gerinc */}
        <rect x="-3" y="-20" width="6" height="45" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
        {/* Bordák */}
        <path d="M -3,-10 Q -25,-10 -25,5 M 3,-10 Q 25,-10 25,5" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <path d="M -3,0 Q -22,0 -22,12 M 3,0 Q 22,0 22,12" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        {/* Medence */}
        <polygon points="-18,25 18,25 12,40 -12,40" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" strokeLinejoin="round" />
        {/* Karok */}
        <line x1="-15" y1="-10" x2="-35" y2="10" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="-10" x2="35" y2="10" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      {/* Behajlított kar (Bicepsz) */}
      <g transform="translate(120, 90)">
        {/* Csontok (Alul) */}
        <line x1="0" y1="0" x2="-40" y2="0" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        <line x1="0" y1="0" x2="0" y2="-50" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        {/* Izom (Bicepsz megfeszülve) */}
        <path d="M -30,-5 Q -15,-30 5,-40" fill="none" stroke="#EF4444" strokeWidth="15" strokeLinecap="round" />
        {/* Izomrostok vonalai */}
        <path d="M -25,-5 Q -10,-25 0,-35" fill="none" stroke="#FCA5A5" strokeWidth="2" />
        <path d="M -20,0 Q -5,-20 5,-35" fill="none" stroke="#FCA5A5" strokeWidth="2" />
        <circle cx="0" cy="0" r="6" fill="#94A3B8" /> {/* Ízület */}
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Alma (Étkezés) */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="20" fill="#EF4444" />
        <path d="M 0,-20 Q 10,-35 20,-25 Q 10,-15 0,-20" fill="#22C55E" />
      </g>
      {/* Súlyzó (Sport) */}
      <g transform="translate(120, 70)">
        <rect x="-20" y="-3" width="40" height="6" fill="#94A3B8" />
        <rect x="-25" y="-15" width="10" height="30" fill="#1E293B" rx="2" />
        <rect x="15" y="-15" width="10" height="30" fill="#1E293B" rx="2" />
      </g>
      {/* Alvó Hold (Pihenés) */}
      <g transform="translate(180, 70)">
        <path d="M 10,-20 A 20,20 0 0,0 10,20 A 25,25 0 0,1 10,-20 Z" fill="#FBBF24" />
        <text x="15" y="-10" fill="#D97706" fontSize="12" fontWeight="bold">Z</text>
        <text x="25" y="-20" fill="#D97706" fontSize="10" fontWeight="bold">z</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Vízcsap és kezek (Kézmosás) */}
      <g transform="translate(120, 40)">
        <path d="M -20,-30 L 0,-30 A 15,15 0 0,1 15,-15 L 15,0" fill="none" stroke="#94A3B8" strokeWidth="12" strokeLinecap="round" />
        <path d="M 15,5 Q 25,20 15,50" fill="none" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
      </g>
      {/* Kezek (Geometriai formák) */}
      <g transform="translate(120, 90)">
        <rect x="-30" y="-10" width="40" height="20" fill="#FDBA74" rx="10" transform="rotate(15)" />
        <rect x="10" y="-15" width="35" height="18" fill="#FDBA74" rx="9" transform="rotate(-20)" />
      </g>
      {/* Szappanbuborékok */}
      <circle cx="100" cy="70" r="8" fill="#FFFFFF" opacity="0.8" />
      <circle cx="140" cy="80" r="12" fill="#FFFFFF" opacity="0.8" />
      <circle cx="120" cy="110" r="6" fill="#FFFFFF" opacity="0.8" />
      
      {/* A tap-count baktériumai (🦠) ide fognak kerülni a gombok segítségével! */}
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Az Emberi Test",
    // T1: Szervrendszerek
    t1_title: "Szervrendszerek",
    t1_text: "A testünkben a szervek csapatokban dolgoznak. A légzőrendszer a levegőért, az emésztőrendszer az étel feldolgozásáért felel.",
    t1_b1: "A tüdő és a légcső a légzőrendszer része.",
    t1_b2: "A gyomor és a belek az emésztőrendszert alkotják.",
    t1_b3: "A vérkeringés szállítja az oxigént a testben.",
    t1_inst: "Válogasd szét: Melyik szerv hová tartozik?",
    t1_bucket_legzes: "Légzőrendszer (Levegő)",
    t1_bucket_emesztes: "Emésztőrendszer (Étel)",
    t1_item_l1: "Tüdő", t1_item_l2: "Légcső",
    t1_item_e1: "Gyomor", t1_item_e2: "Vékonybél",
    t1_q: "Melyik szervrendszer felelős az elfogyasztott étel lebontásáért?",
    t1_q_a: "Az emésztőrendszer", t1_q_b: "A légzőrendszer", t1_q_c: "A csontrendszer", t1_q_d: "Az idegrendszer",

    // T2: Csontváz
    t2_title: "A belső vázunk",
    t2_text: "Felnőtt korban az emberi csontváz több mint 200 csontból áll! Ez adja a testünk szilárdságát.",
    t2_b1: "A koponya védi az agyat.",
    t2_b2: "A gerincoszlop rugalmas, de nagyon erős.",
    t2_b3: "A bordakosár a szívet és a tüdőt védi.",
    t2_inst: "Keresd meg a csontváz részeit az ábrán!",
    t2_area_skull: "Koponya",
    t2_area_spine: "Gerincoszlop",
    t2_area_ribs: "Bordakosár",
    t2_area_pelvis: "Medencecsont",
    t2_q: "Mit véd a bordakosár?",
    t2_q_a: "A szívet és a tüdőt", t2_q_b: "Az agyat", t2_q_c: "A gyomrot", t2_q_d: "Az izmokat",

    // T3: Izmok (Highlight-text) - Cél index: [1, 4] -> izmok, csontokat
    t3_title: "Az izmok ereje",
    t3_text: "A csontváz önmagában nem tud mozogni. Az izmok azok, amik húzzák és mozgatják a csontjainkat!",
    t3_b1: "Az izmok inakkal tapadnak a csontokhoz.",
    t3_b2: "Amikor egy izom megfeszül, megrövidül és húz.",
    t3_b3: "Még a mosolygáshoz is rengeteg izomra van szükségünk!",
    t3_inst: "Keresd meg és jelöld meg a mondatban az 'izmok' és a 'csontokat' szavakat!",
    t3_tok0: "Az", t3_tok1: "izmok", t3_tok2: "húzzák", t3_tok3: "a", t3_tok4: "csontokat", t3_tok5: "mozgáskor.",
    t3_q: "Mik mozgatják a csontjainkat?",
    t3_q_a: "Az izmok", t3_q_b: "A tüdő", t3_q_c: "A bőr", t3_q_d: "A vér",

    // T4: Egészséges életmód
    t4_title: "Egészségesen élni",
    t4_text: "Ahhoz, hogy a szerveink, csontjaink és izmaink jól működjenek, vigyáznunk kell magunkra.",
    t4_b1: "Egyél sok vitamint (zöldséget, gyümölcsöt).",
    t4_b2: "Sportolj és mozogj minden nap.",
    t4_b3: "Aludj eleget, hogy a tested regenerálódjon.",
    t4_inst: "Tedd sorba, mi a titka az egészséges életnek!",
    t4_w1: "Jól eszem", t4_w2: "Sokat sportolok", t4_w3: "Nagyot alszom", t4_w4: "Erős leszek",
    t4_q: "Miért fontos az alvás a testünk számára?",
    t4_q_a: "Hogy kipihenje magát és regenerálódjon", t4_q_b: "Hogy gyorsabban teljen az idő", t4_q_c: "Hogy ne kelljen enni", t4_q_d: "Egyáltalán nem fontos",

    // T5: Kézmosás (Tap-count)
    t5_title: "Láthatatlan ellenségek",
    t5_text: "A baktériumok és vírusok olyan kicsik, hogy nem látjuk őket. Ha nem mosunk kezet, könnyen megbetegíthetnek minket.",
    t5_b1: "A szappanos kézmosás elpusztítja a bacilusokat.",
    t5_b2: "Mindig moss kezet evés előtt és vécézés után!",
    t5_b3: "Segíts megtisztítani a kezeket!",
    t5_inst: "Bakteriumok rejtőznek a kézen! Bökj rá mind az 5 darabra (🦠), hogy lemosd őket!",
    t5_q: "Miért kell szappannal kezet mosni?",
    t5_q_a: "Mert elpusztítja a láthatatlan baktériumokat", t5_q_b: "Mert jó illata van", t5_q_c: "Mert így gyorsabban nő a körmünk", t5_q_d: "Mert puhább lesz a bőrünk",
  },
  en: {
    explorer_title: "The Human Body",
    t1_title: "Organ Systems", t1_text: "Organs in our body work in teams. The respiratory system is for air, the digestive system processes food.",
    t1_b1: "The lungs and windpipe are part of the respiratory system.", t1_b2: "The stomach and intestines make up the digestive system.", t1_b3: "Circulation transports oxygen in the body.",
    t1_inst: "Sort them out: Which organ belongs where?",
    t1_bucket_legzes: "Respiratory (Air)",
    t1_bucket_emesztes: "Digestive (Food)",
    t1_item_l1: "Lungs", t1_item_l2: "Windpipe",
    t1_item_e1: "Stomach", t1_item_e2: "Intestines",
    t1_q: "Which system is responsible for breaking down the food we eat?",
    t1_q_a: "The digestive system", t1_q_b: "The respiratory system", t1_q_c: "The skeletal system", t1_q_d: "The nervous system",

    t2_title: "Our Inner Frame", t2_text: "As an adult, the human skeleton consists of more than 200 bones! It gives our body its shape.",
    t2_b1: "The skull protects the brain.", t2_b2: "The spine is flexible but very strong.", t2_b3: "The rib cage protects the heart and lungs.",
    t2_inst: "Find the parts of the skeleton on the drawing!",
    t2_area_skull: "Skull", t2_area_spine: "Spine", t2_area_ribs: "Rib Cage", t2_area_pelvis: "Pelvis",
    t2_q: "What does the rib cage protect?",
    t2_q_a: "The heart and lungs", t2_q_b: "The brain", t2_q_c: "The stomach", t2_q_d: "The muscles",

    // Cél: [1, 4] -> muscles, bones
    t3_title: "Power of Muscles", t3_text: "The skeleton cannot move on its own. Muscles are the ones that pull and move our bones!",
    t3_b1: "Muscles attach to bones with tendons.", t3_b2: "When a muscle tenses, it shortens and pulls.", t3_b3: "Even smiling requires many muscles!",
    t3_inst: "Find and mark the words muscles and bones in the sentence!",
    t3_tok0: "The", t3_tok1: "muscles", t3_tok2: "pull", t3_tok3: "the", t3_tok4: "bones", t3_tok5: "to", t3_tok6: "move.",
    t3_q: "What moves our bones?",
    t3_q_a: "The muscles", t3_q_b: "The lungs", t3_q_c: "The skin", t3_q_d: "The blood",

    t4_title: "Healthy Lifestyle", t4_text: "For our organs, bones, and muscles to work well, we must take care of ourselves.",
    t4_b1: "Eat lots of vitamins (vegetables, fruits).", t4_b2: "Play sports and move every day.", t4_b3: "Get enough sleep so your body recovers.",
    t4_inst: "Put the secrets of a healthy life in order!",
    t4_w1: "I eat well", t4_w2: "I play sports", t4_w3: "I sleep a lot", t4_w4: "I grow strong",
    t4_q: "Why is sleep important for our body?",
    t4_q_a: "To rest and recover", t4_q_b: "To make time pass faster", t4_q_c: "So we don't have to eat", t4_q_d: "It's not important at all",

    t5_title: "Invisible Enemies", t5_text: "Bacteria and viruses are so small we cannot see them. If we don't wash our hands, they can make us sick.",
    t5_b1: "Washing hands with soap kills germs.", t5_b2: "Always wash your hands before eating and after the toilet!", t5_b3: "Help clean the hands!",
    t5_inst: "Germs are hiding on the hands! Tap all 5 of them (🦠) to wash them away!",
    t5_q: "Why must we wash our hands with soap?",
    t5_q_a: "Because it kills invisible bacteria", t5_q_b: "Because it smells good", t5_q_c: "So our nails grow faster", t5_q_d: "To make our skin softer",
  },
  de: {
    explorer_title: "Der menschliche Körper",
    t1_title: "Organsysteme", t1_text: "Die Organe in unserem Körper arbeiten im Team. Das Atmungssystem ist für Luft, das Verdauungssystem für Essen.",
    t1_b1: "Lunge und Luftröhre gehören zum Atmungssystem.", t1_b2: "Magen und Darm bilden das Verdauungssystem.", t1_b3: "Der Blutkreislauf transportiert Sauerstoff.",
    t1_inst: "Sortiere: Welches Organ gehört wohin?",
    t1_bucket_legzes: "Atmung (Luft)",
    t1_bucket_emesztes: "Verdauung (Essen)",
    t1_item_l1: "Lunge", t1_item_l2: "Luftröhre",
    t1_item_e1: "Magen", t1_item_e2: "Darm",
    t1_q: "Welches System verarbeitet das gegessene Essen?",
    t1_q_a: "Das Verdauungssystem", t1_q_b: "Das Atmungssystem", t1_q_c: "Das Skelettsystem", t1_q_d: "Das Nervensystem",

    t2_title: "Unser inneres Gerüst", t2_text: "Das Skelett eines Erwachsenen besteht aus über 200 Knochen! Es gibt unserem Körper Halt.",
    t2_b1: "Der Schädel schützt das Gehirn.", t2_b2: "Die Wirbelsäule ist biegsam, aber sehr stark.", t2_b3: "Der Brustkorb schützt Herz und Lunge.",
    t2_inst: "Finde die Teile des Skeletts auf dem Bild!",
    t2_area_skull: "Schädel", t2_area_spine: "Wirbelsäule", t2_area_ribs: "Brustkorb", t2_area_pelvis: "Becken",
    t2_q: "Was schützt der Brustkorb?",
    t2_q_a: "Herz und Lunge", t2_q_b: "Das Gehirn", t2_q_c: "Den Magen", t2_q_d: "Die Muskeln",

    // Cél: [1, 4] -> Muskeln, Knochen
    t3_title: "Die Kraft der Muskeln", t3_text: "Das Skelett allein kann sich nicht bewegen. Die Muskeln ziehen an unseren Knochen und bewegen sie!",
    t3_b1: "Muskeln sind mit Sehnen an Knochen befestigt.", t3_b2: "Wenn ein Muskel sich anspannt, wird er kürzer und zieht.", t3_b3: "Sogar zum Lächeln brauchen wir viele Muskeln!",
    t3_inst: "Finde und markiere die Worte Muskeln und Knochen im Satz!",
    t3_tok0: "Die", t3_tok1: "Muskeln", t3_tok2: "ziehen", t3_tok3: "die", t3_tok4: "Knochen", t3_tok5: "zum", t3_tok6: "Bewegen.",
    t3_q: "Was bewegt unsere Knochen?",
    t3_q_a: "Die Muskeln", t3_q_b: "Die Lunge", t3_q_c: "Die Haut", t3_q_d: "Das Blut",

    t4_title: "Gesunder Lebensstil", t4_text: "Damit Organe, Knochen und Muskeln gut arbeiten, müssen wir auf uns aufpassen.",
    t4_b1: "Iss viele Vitamine (Gemüse, Obst).", t4_b2: "Treibe Sport und bewege dich jeden Tag.", t4_b3: "Schlafe genug, damit sich der Körper erholt.",
    t4_inst: "Bringe das Geheimnis eines gesunden Lebens in die richtige Reihenfolge!",
    t4_w1: "Ich esse gesund", t4_w2: "Ich mache Sport", t4_w3: "Ich schlafe viel", t4_w4: "Ich werde stark",
    t4_q: "Warum ist Schlaf wichtig für den Körper?",
    t4_q_a: "Damit er sich ausruht und erholt", t4_q_b: "Damit die Zeit schneller vergeht", t4_q_c: "Damit man nicht essen muss", t4_q_d: "Gar nicht wichtig",

    t5_title: "Unsichtbare Feinde", t5_text: "Bakterien und Viren sind so klein, dass wir sie nicht sehen. Wenn wir keine Hände waschen, machen sie uns krank.",
    t5_b1: "Händewaschen mit Seife tötet Keime.", t5_b2: "Wasche immer vor dem Essen und nach der Toilette die Hände!", t5_b3: "Hilf, die Hände sauber zu machen!",
    t5_inst: "Bakterien verstecken sich! Tippe auf alle 5 (🦠), um sie abzuwaschen!",
    t5_q: "Warum müssen wir uns die Hände mit Seife waschen?",
    t5_q_a: "Weil es unsichtbare Bakterien tötet", t5_q_b: "Weil es gut riecht", t5_q_c: "Damit die Nägel schneller wachsen", t5_q_d: "Damit die Haut weicher wird",
  },
  ro: {
    explorer_title: "Corpul Uman",
    t1_title: "Sisteme de organe", t1_text: "Organele din corpul nostru lucrează în echipă. Sistemul respirator e pentru aer, cel digestiv pentru hrană.",
    t1_b1: "Plămânii și traheea fac parte din sistemul respirator.", t1_b2: "Stomacul și intestinele formează sistemul digestiv.", t1_b3: "Circulația transportă oxigenul în corp.",
    t1_inst: "Sortează: Ce organ aparține cărui sistem?",
    t1_bucket_legzes: "Sistem respirator (Aer)",
    t1_bucket_emesztes: "Sistem digestiv (Hrană)",
    t1_item_l1: "Plămâni", t1_item_l2: "Traheea",
    t1_item_e1: "Stomac", t1_item_e2: "Intestine",
    t1_q: "Care sistem este responsabil pentru descompunerea mâncării?",
    t1_q_a: "Sistemul digestiv", t1_q_b: "Sistemul respirator", t1_q_c: "Sistemul osos", t1_q_d: "Sistemul nervos",

    t2_title: "Cadrul nostru interior", t2_text: "La adulți, scheletul uman este format din peste 200 de oase! El dă forma corpului nostru.",
    t2_b1: "Craniul protejează creierul.", t2_b2: "Coloana vertebrală este flexibilă, dar foarte puternică.", t2_b3: "Cutia toracică protejează inima și plămânii.",
    t2_inst: "Găsește părțile scheletului pe desen!",
    t2_area_skull: "Craniu", t2_area_spine: "Coloană vertebrală", t2_area_ribs: "Cutie toracică", t2_area_pelvis: "Bazin",
    t2_q: "Ce protejează cutia toracică?",
    t2_q_a: "Inima și plămânii", t2_q_b: "Creierul", t2_q_c: "Stomacul", t2_q_d: "Mușchii",

    // Cél: [1, 4] -> mușchii, oasele
    t3_title: "Puterea mușchilor", t3_text: "Scheletul nu se poate mișca singur. Mușchii sunt cei care trag și mișcă oasele noastre!",
    t3_b1: "Mușchii sunt atașați de oase prin tendoane.", t3_b2: "Când un mușchi se încordează, se scurtează și trage.", t3_b3: "Chiar și pentru a zâmbi avem nevoie de mulți mușchi!",
    t3_inst: "Găsește și marchează cuvintele mușchii și oasele în propoziție!",
    t3_tok0: "Acești", t3_tok1: "mușchii", t3_tok2: "trag", t3_tok3: "toate", t3_tok4: "oasele", t3_tok5: "pentru", t3_tok6: "mișcare.",
    t3_q: "Ce anume ne mișcă oasele?",
    t3_q_a: "Mușchii", t3_q_b: "Plămânii", t3_q_c: "Pielea", t3_q_d: "Sângele",

    t4_title: "Stil de viață sănătos", t4_text: "Pentru ca organele, oasele și mușchii să funcționeze bine, trebuie să avem grijă de noi.",
    t4_b1: "Mănâncă multe vitamine (legume, fructe).", t4_b2: "Fă sport și mișcă-te în fiecare zi.", t4_b3: "Dormi destul ca corpul să se recupereze.",
    t4_inst: "Pune secretul unei vieți sănătoase în ordine!",
    t4_w1: "Mănânc bine", t4_w2: "Fac sport mult", t4_w3: "Dorm adânc", t4_w4: "Devin puternic",
    t4_q: "De ce este important somnul pentru corpul nostru?",
    t4_q_a: "Pentru a se odihni și recupera", t4_q_b: "Ca să treacă timpul mai repede", t4_q_c: "Ca să nu trebuiască să mâncăm", t4_q_d: "Nu este deloc important",

    t5_title: "Inamici invizibili", t5_text: "Bacteriile și virușii sunt atât de mici încât nu îi vedem. Dacă nu ne spălăm pe mâini, ne pot îmbolnăvi.",
    t5_b1: "Spălatul pe mâini cu săpun ucide microbii.", t5_b2: "Spală-te mereu înainte de masă și după baie!", t5_b3: "Ajută la curățarea mâinilor!",
    t5_inst: "Bacteriile se ascund pe mâini! Apasă pe toate 5 (🦠) ca să le speli!",
    t5_q: "De ce trebuie să ne spălăm pe mâini cu săpun?",
    t5_q_a: "Pentru că ucide bacteriile invizibile", t5_q_b: "Pentru că miroase frumos", t5_q_c: "Ca să ne crească unghiile mai repede", t5_q_d: "Pentru a avea pielea mai moale",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "legzes", label: "t1_bucket_legzes" },
        { id: "emesztes", label: "t1_bucket_emesztes" },
      ],
      items: [
        { text: "t1_item_l1", bucketId: "legzes" },
        { text: "t1_item_e1", bucketId: "emesztes" },
        { text: "t1_item_l2", bucketId: "legzes" },
        { text: "t1_item_e2", bucketId: "emesztes" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b2",
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
      type: "label-diagram",
      areas: [
        { id: "skull",  x: 50, y: 15, label: "t2_area_skull" },
        { id: "spine",  x: 50, y: 40, label: "t2_area_spine" },
        { id: "ribs",   x: 65, y: 55, label: "t2_area_ribs" },
        { id: "pelvis", x: 50, y: 80, label: "t2_area_pelvis" },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b3",
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
      type: "highlight-text",
      // HU: [0:Az] [1:izmok] [2:húzzák] [3:a] [4:csontokat] [5:mozgáskor.]
      // EN: [0:The] [1:muscles] [2:pull] [3:the] [4:bones] [5:to] [6:move.]
      // DE: [0:Die] [1:Muskeln] [2:ziehen] [3:die] [4:Knochen] [5:zum] [6:Bewegen.]
      // RO: [0:Acești] [1:mușchii] [2:trag] [3:toate] [4:oasele] [5:pentru] [6:mișcare.]
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [1, 4],
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t4_inst",
      hint1: "t4_b1",
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
      type: "tap-count",
      tapCount: { emoji: "🦠", count: 5 }, // Baktérium vadászat!
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
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
  icon: "🫁",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const HumanBodyExplorer = memo(function HumanBodyExplorer({
  color = "#EF4444", // Piros a vérkeringés és az izmok miatt
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
      grade={4} 
      explorerId="sachkunde_k4_human_body" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default HumanBodyExplorer;
