"use client";
// EcologyExplorer.tsx — Bio Island i5: Ökológia (K7)
// Topics: 1) Populáció 2) Táplálékhálózat 3) Ökológiai fülke 4) Versengés 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { FoodWebSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="30" textAnchor="middle">🦊</text>
        <text x="0" y="20" fontSize="30" textAnchor="middle">塑造</text> {/* Abstract group shape */}
        <text x="40" y="0" fontSize="30" textAnchor="middle">🦊</text>
        <text x="0" y="-20" fontSize="30" textAnchor="middle">塑造</text>
        <circle cx="0" cy="0" r="55" fill="none" stroke="#65A30D" strokeWidth="2" strokeDasharray="5 5" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF9C3" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-50" y="-30" width="100" height="60" fill="none" stroke="#CA8A04" strokeWidth="2" />
        <text x="0" y="10" fontSize="40" textAnchor="middle">🏘️</text>
        <text x="0" y="-40" fontSize="20" textAnchor="middle">📍</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEE2E2" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="10" fontSize="40" textAnchor="middle">🦅</text>
        <text x="40" y="10" fontSize="40" textAnchor="middle">🦅</text>
        <text x="0" y="10" fontSize="30" textAnchor="middle">🍖</text>
        <path d="M -20,-10 L 20,-10" stroke="#EF4444" strokeWidth="3" markerEnd="url(#arrow)" />
        <path d="M 20,-10 L -20,-10" stroke="#EF4444" strokeWidth="3" markerEnd="url(#arrow)" />
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
        <text x="-15" y="15" fontSize="35" textAnchor="middle">🌍</text>
        <text x="25" y="5" fontSize="25" textAnchor="middle">❓</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Ökológia Alapjai",
    // T1: Populáció
    t1_title: "A populáció fogalma",
    t1_text: "Az ökológia az élőlények és környezetük kapcsolatát vizsgálja. A legalapvetőbb egység a populáció: az egy fajba tartozó, egy időben és egy helyen élő egyedek összessége.",
    t1_b1: "Azonos faj: az egyedek képesek egymással szaporodni.",
    t1_b2: "Tér és idő: csak akkor alkotnak populációt, ha ténylegesen találkozhatnak.",
    t1_b3: "Példa: egy erdőben élő összes erdei egér egy populációt alkot.",
    t1_inst: "Egészítsd ki a populáció meghatározását!",
    t1_gap_sentence: "A populáció az {gap} fajba tartozó, egy helyen élő egyedek csoportja.",
    t1_c1: "azonos", t1_c2: "különböző", t1_c3: "kihalt",
    t1_q: "Mikor beszélhetünk egy populációról?",
    t1_q_a: "Ha azonos faj egyedei élnek egy helyen, egy időben", t1_q_b: "Ha sok különböző állat él az állatkertben", t1_q_c: "Ha egy állat egyedül él a szigeten", t1_q_d: "Ha csak növények vannak egy réten",

    // T2: Táplálékhálózat
    t2_title: "Összetett táplálékhálózatok",
    t2_text: "A természetben a táplálékláncok nem különülnek el, hanem bonyolult hálózatot alkotnak. Egy élőlény több mást is ehet, és őt is több ragadozó vadászhatja.",
    t2_b1: "Termelők: növények, a hálózat alapjai.",
    t2_b2: "Fogyasztók: növényevők, húsevők és mindenevők.",
    t2_b3: "Energiaáramlás: a napfény energiája vándorol élőlényről élőlényre.",
    t2_inst: "Termelő vagy Fogyasztó? Válogasd szét őket!",
    t2_bucket_ter: "Termelők",
    t2_bucket_fog: "Fogyasztók",
    t2_item_t1: "Fű", t2_item_t2: "Tölgyfa",
    t2_item_f1: "Róka", t2_item_f2: "Szarvas",
    t2_q: "Kik alkotják a táplálékhálózat legalsó szintjét?",
    t2_q_a: "A termelők (zöld növények)", t2_q_b: "A csúcsragadozók", t2_q_c: "A lebontók", t2_q_d: "A vírusok",

    // T3: Ökológiai fülke
    t3_title: "Az ökológiai fülke (niche)",
    t3_text: "Az ökológiai fülke nem egy fizikai hely, hanem az élőlény 'szerepköre' az ökoszisztémában: mit eszik, mikor aktív, hol fészkel.",
    t3_b1: "A 'lakhely' a környezet, a 'fülke' a foglalkozás.",
    t3_b2: "Két faj nem töltheti be ugyanazt a fülkét tartósan egy helyen.",
    t3_b3: "Példa: a bagoly és az egerészölyv ugyanazt eszi, de az egyik éjjel, a másik nappal vadászik.",
    t3_inst: "Párosítsd a fogalmakat!",
    t3_l1: "Élőhely", t3_r1: "Ahol az élőlény él (a címe)",
    t3_l2: "Ökológiai fülke", t3_r2: "Az élőlény szerepe (a munkája)",
    t3_l3: "Niche-szegregáció", t3_r3: "Eltérő vadászati időpontok",
    t3_q: "Hogyan tud egy erdőben megélni a bagoly és az ölyv, ha mindkettő egérre vadászik?",
    t3_q_a: "Eltérő az ökológiai fülkéjük (időbeli elkülönülés)", t3_q_b: "Összebarátkoznak", t3_q_c: "Ugyanazon a fán fészkelnek", t3_q_d: "Nem élnek meg egy helyen",

    // T4: Versengés
    t4_title: "Versengés a forrásokért",
    t4_text: "Ha a környezeti erőforrások (táplálék, fény, fészkelőhely) korlátozottak, az élőlények között versengés (konkurrencia) alakul ki.",
    t4_b1: "Fajon belüli: pl. hímek küzdelme a nőstényekért.",
    t4_b2: "Fajok közötti: pl. két növény küzdelme a fényért.",
    t4_b3: "A gyengébb fél gyakran kiszorul a területről.",
    t4_inst: "Miért versenghetnek az élőlények? Válaszd ki a helyes okokat!",
    t4_bucket_ver: "Versengés oka",
    t4_bucket_nem: "Nem okoz versengést",
    t4_item_v1: "Kevés táplálék", t4_item_v2: "Fészkelőhely",
    t4_item_n1: "Végtelen oxigén", t4_item_n2: "Barátság",
    t4_q: "Mi történik a versengés során a gyengébbik populációval?",
    t4_q_a: "Létszáma csökken vagy kiszorul", t4_q_b: "Hirtelen növekedésnek indul", t4_q_c: "Átváltozik a másik fajjá", t4_q_d: "Semmi nem változik",

    // T5: Review
    t5_title: "Ökológiai összefoglaló",
    t5_text: "Minden élőlény része a nagy egésznek. A populációk hálózatokat alkotnak, versengenek és alkalmazkodnak.",
    t5_b1: "Populáció = azonos faj, közös terület.",
    t5_b2: "Hálózat = ki kit eszik.",
    t5_b3: "Versengés = küzdelem a szűkös javakért.",
    t5_inst: "Hogy hívjuk a táplálékláncok összességét?",
    t5_gap_sentence2: "A természetben az élőlények bonyolult {gap} alkotnak.",
    t5_c51: "táplálékhálózatot", t5_c52: "várost", t5_c53: "iskolát",
    t5_q: "Melyik állítás IGAZ az ökológiára?",
    t5_q_a: "Minden populáció függ a környezetétől.", t5_q_b: "A ragadozóknak nincs szükségük táplálékra.", t5_q_c: "Az élőlények csak magányosan élnek.", t5_q_d: "A Nap nem fontos az ökoszisztémának.",
  },
  en: {
    explorer_title: "Basics of Ecology",
    t1_title: "The Population", t1_text: "Ecology studies the relationship between organisms and their environment. A population is a group of individuals of the same species living in the same area at the same time.",
    t1_b1: "Same species: individuals can interbreed.", t1_b2: "Space and time: they must be able to interact.", t1_b3: "Example: all field mice in a specific forest.",
    t1_inst: "Complete the definition of population!", t1_gap_sentence: "A population is a group of individuals of the {gap} species.",
    t1_c1: "same", t1_c2: "different", t1_c3: "extinct",
    t1_q: "What defines a population?", t1_q_a: "Same species, same place, same time", t1_q_b: "Different animals in a zoo", t1_q_c: "One animal alone on an island", t1_q_d: "Only plants in a meadow",

    t2_title: "Food Webs", t2_text: "In nature, food chains are interlinked into complex webs. One organism can eat many others and be preyed upon by multiple predators.",
    t2_b1: "Producers: plants, the foundation of the web.", t2_b2: "Consumers: herbivores, carnivores, and omnivores.", t2_b3: "Energy flow: solar energy moves from organism to organism.",
    t2_inst: "Producer or Consumer? Sort them!",
    t2_bucket_ter: "Producers", t2_bucket_fog: "Consumers",
    t2_item_t1: "Grass", t2_item_t2: "Oak tree", t2_item_f1: "Fox", t2_item_f2: "Deer",
    t2_q: "Who is at the base of the food web?", t2_q_a: "Producers", t2_q_b: "Apex predators", t2_q_c: "Decomposers", t2_q_d: "Viruses",

    t3_title: "Ecological Niche", t3_text: "A niche is not a place, but an organism's 'role' or 'job': what it eats, when it's active, where it nests.",
    t3_b1: "Habitat is the address, niche is the profession.", t3_b2: "Two species cannot occupy the exact same niche for long.", t3_b3: "Example: owls (night) and hawks (day) hunting the same prey.",
    t3_inst: "Match the concepts!",
    t3_l1: "Habitat", t3_r1: "Where it lives (address)",
    t3_l2: "Ecological Niche", t3_r2: "Its role (profession)",
    t3_l3: "Niche segregation", t3_r3: "Different hunting times",
    t3_q: "How can owls and hawks live in the same forest if they both hunt mice?", t3_q_a: "They have different niches (time of day)", t3_q_b: "They become friends", t3_q_c: "They nest in the same spot", t3_q_d: "They cannot coexist",

    t4_title: "Competition", t4_text: "When resources (food, light, nesting space) are limited, competition occurs between organisms.",
    t4_b1: "Intraspecific: between the same species (e.g., for mates).", t4_b2: "Interspecific: between different species (e.g., for light).", t4_b3: "The weaker often gets displaced.",
    t4_inst: "What causes competition? Sort them!",
    t4_bucket_ver: "Cause of competition", t4_bucket_nem: "Not a cause",
    t4_item_v1: "Limited food", t4_item_v2: "Nesting sites",
    t4_item_n1: "Abundant oxygen", t4_item_n2: "Friendship",
    t4_q: "What happens to the weaker population in competition?", t4_q_a: "It decreases or gets displaced", t4_q_b: "It grows suddenly", t4_q_c: "It turns into the other species", t4_q_d: "Nothing changes",

    t5_title: "Ecology Summary", t5_text: "Every living being is part of a whole. Populations form webs, compete, and adapt.",
    t5_b1: "Population = same species, same area.", t5_b2: "Web = who eats whom.", t5_b3: "Competition = struggle for scarce resources.",
    t5_inst: "What do we call the sum of food chains?", t5_gap_sentence2: "In nature, organisms form complex {gap}.",
    t5_c51: "food webs", t5_c52: "cities", t5_c53: "schools",
    t5_q: "Which statement is TRUE about ecology?", t5_q_a: "Every population depends on its environment.", t5_q_b: "Predators don't need food.", t5_q_c: "Organisms only live alone.", t5_q_d: "The Sun is not important.",
  },
  de: {
    explorer_title: "Grundlagen der Ökologie",
    t1_title: "Die Population", t1_text: "Ökologie untersucht die Beziehung zwischen Lebewesen und Umwelt. Eine Population besteht aus Individuen derselben Art am selben Ort zur selben Zeit.",
    t1_b1: "Gleiche Art: können sich untereinander fortpflanzen.", t1_b2: "Raum und Zeit: müssen interagieren können.", t1_b3: "Beispiel: alle Mäuse in einem Wald.",
    t1_inst: "Ergänze die Definition!", t1_gap_sentence: "Eine Population besteht aus Individuen der {gap} Art.",
    t1_c1: "gleichen", t1_c2: "verschiedenen", t1_c3: "ausgestorbenen",
    t1_q: "Was definiert eine Population?", t1_q_a: "Gleiche Art, gleicher Ort, gleiche Zeit", t1_q_b: "Verschiedene Tiere im Zoo", t1_q_c: "Ein Einzeltier", t1_q_d: "Nur Pflanzen",

    t2_title: "Nahrungsnetze", t2_text: "In der Natur bilden Nahrungsketten komplexe Netze. Ein Tier kann vieles fressen und von vielen gefressen werden.",
    t2_b1: "Produzenten: Pflanzen, die Basis.", t2_b2: "Konsumenten: Pflanzen- und Fleischfresser.", t2_b3: "Energiefluss: Sonnenenergie wandert durch das Netz.",
    t2_inst: "Produzent oder Konsument?",
    t2_bucket_ter: "Produzenten", t2_bucket_fog: "Konsumenten",
    t2_item_t1: "Gras", t2_item_t2: "Eiche", t2_item_f1: "Fuchs", t2_item_f2: "Reh",
    t2_q: "Wer steht an der Basis des Nahrungsnetzes?", t2_q_a: "Produzenten", t2_q_b: "Spitzenprädatoren", t2_q_c: "Zersetzer", t2_q_d: "Viren",

    t3_title: "Ökologische Nische", t3_text: "Die Nische ist kein Ort, sondern die 'Rolle' eines Lebewesens: was es frisst, wann es jagt, wo es brütet.",
    t3_b1: "Lebensraum ist die Adresse, Nische der Beruf.", t3_b2: "Zwei Arten können nicht dauerhaft dieselbe Nische besetzen.", t3_b3: "Beispiel: Eule (Nacht) und Bussard (Tag) fressen dasselbe.",
    t3_inst: "Verbinde die Begriffe!",
    t3_l1: "Habitat", t3_r1: "Wo es lebt (Adresse)",
    t3_l2: "Ökologische Nische", t3_r2: "Rolle (Beruf)",
    t3_l3: "Nischentrennung", t3_r3: "Unterschiedliche Jagdzeiten",
    t3_q: "Wie können Eule und Bussard im selben Wald leben?", t3_q_a: "Sie haben unterschiedliche Nischen", t3_q_b: "Sie sind Freunde", t3_q_c: "Sie teilen das Nest", t3_q_d: "Sie können es nicht",

    t4_title: "Konkurrenz", t4_text: "Wenn Ressourcen (Nahrung, Licht) knapp sind, entsteht Konkurrenz.",
    t4_b1: "Innerartlich: Kampf um Partner.", t4_b2: "Zwischenartlich: Kampf um Licht oder Raum.", t4_b3: "Der Schwächere wird oft verdrängt.",
    t4_inst: "Gründe für Konkurrenz?",
    t4_bucket_ver: "Grund", t4_bucket_nem: "Kein Grund",
    t4_item_v1: "Wenig Nahrung", t4_item_v2: "Brutplätze",
    t4_item_n1: "Viel Sauerstoff", t4_item_n2: "Freundschaft",
    t4_q: "Was passiert mit dem Schwächeren bei Konkurrenz?", t4_q_a: "Wird verdrängt", t4_q_b: "Wächst schneller", t4_q_c: "Wird zur anderen Art", t4_q_d: "Nichts",

    t5_title: "Zusammenfassung", t5_text: "Alles hängt zusammen. Populationen bilden Netze und konkurrieren.",
    t5_b1: "Population = gleiche Art, gleiches Gebiet.", t5_b2: "Netz = wer frisst wen.", t5_b3: "Konkurrenz = Kampf um Ressourcen.",
    t5_inst: "Wie nennt man die Summe der Nahrungsketten?",
    t5_gap_sentence2: "In der Natur bilden Lebewesen ein {gap}.",
    t5_c51: "Nahrungsnetz", t5_c52: "Stadtnetz", t5_c53: "Schulnetz",
    t5_q: "Was ist WAHR?", t5_q_a: "Jede Population hängt von der Umwelt ab.", t5_q_b: "Raubtiere brauchen kein Essen.", t5_q_c: "Sonne ist egal.", t5_q_d: "Tiere leben nur allein.",
  },
  ro: {
    explorer_title: "Bazele Ecologiei",
    t1_title: "Populația", t1_text: "Ecologia studiază relația dintre organisme și mediu. O populație este un grup de indivizi din aceeași specie care trăiesc în același loc, în același timp.",
    t1_b1: "Aceeași specie: se pot reproduce între ei.", t1_b2: "Spațiu și timp: trebuie să poată interacționa.", t1_b3: "Exemplu: toți șoarecii de câmp dintr-o pădure specifică.",
    t1_inst: "Completează definiția!", t1_gap_sentence: "O populație este un grup de indivizi din {gap} specie.",
    t1_c1: "aceeași", t1_c2: "altă", t1_c3: "specie moartă",
    t1_q: "Ce definește o populație?", t1_q_a: "Aceeași specie, loc și timp", t1_q_b: "Animale diferite la zoo", t1_q_c: "Un animal singur", t1_q_d: "Doar plante",

    t2_title: "Rețele Trofice", t2_text: "În natură, lanțurile trofice formează rețele complexe. Un organism poate mânca mai multe specii și poate fi vânat de mai mulți prădători.",
    t2_b1: "Producători: plantele, baza rețelei.", t2_b2: "Consumatori: erbivore, carnivore, omnivore.", t2_b3: "Fluxul de energie: energia solară circulă între organisme.",
    t2_inst: "Producător sau Consumator?",
    t2_bucket_ter: "Producători", t2_bucket_fog: "Consumatori",
    t2_item_t1: "Iarbă", t2_item_t2: "Stejar",
    t2_item_f1: "Vulpe", t2_item_f2: "Căprioară",
    t2_q: "Cine se află la baza rețelei trofice?", t2_q_a: "Producătorii", t2_q_b: "Prădătorii de top", t2_q_c: "Descompunătorii", t2_q_d: "Virușii",

    t3_title: "Nișa Ecologică", t3_text: "Nișa nu este un loc, ci 'rolul' organismului: ce mănâncă, când e activ, unde cuibărește.",
    t3_b1: "Habitatul este adresa, nișa este profesia.", t3_b2: "Două specii nu pot ocupa aceeași nișă mult timp.", t3_b3: "Exemplu: bufnița (noaptea) și uliul (ziua) vânează aceeași pradă.",
    t3_inst: "Potrivește conceptele!",
    t3_l1: "Habitat", t3_r1: "Unde trăiește (adresa)",
    t3_l2: "Nișă ecologică", t3_r2: "Rolul său (profesia)",
    t3_l3: "Segregarea nișelor", t3_r3: "Ore de vânătoare diferite",
    t3_q: "Cum pot bufnița și uliul să trăiască în aceeași pădure?", t3_q_a: "Au nișe diferite (timp diferit)", t3_q_b: "Sunt prieteni", t3_q_c: "Stau în același cuib", t3_q_d: "Nu pot",

    t4_title: "Competiția", t4_text: "Când resursele (hrana, lumina) sunt limitate, apare competiția între organisme.",
    t4_b1: "Intraspecifică: între aceeași specie (ex: pentru parteneri).", t4_b2: "Interspecifică: între specii diferite (ex: pentru lumină).", t4_b3: "Cea mai slabă specie este adesea eliminată.",
    t4_inst: "Cauze de competiție?",
    t4_bucket_ver: "Cauză", t4_bucket_nem: "Nu e cauză",
    t4_item_v1: "Hrană puțină", t4_item_v2: "Locuri de cuibărit",
    t4_item_n1: "Oxigen din abundență", t4_item_n2: "Prietenie",
    t4_q: "Ce se întâmplă cu populația mai slabă în competiție?", t4_q_a: "Scade sau este eliminată", t4_q_b: "Crește brusc", t4_q_c: "Se transformă", t4_q_d: "Nimic",

    t5_title: "Recapitulare", t5_text: "Totul este conectat. Populațiile formează rețele și concurează.",
    t5_b1: "Populație = aceeași specie, aceeași zonă.", t5_b2: "Rețea = cine pe cine mănâncă.", t5_b3: "Competiție = lupta pentru resurse.",
    t5_inst: "Cum numim suma lanțurilor trofice?",
    t5_gap_sentence2: "În natură, organismele formează o {gap} complexă.",
    t5_c51: "rețea trofică", t5_c52: "rețea urbană", t5_c53: "școală",
    t5_q: "Ce este ADEVĂRAT?", t5_q_a: "Fiecare populație depinde de mediu.", t5_q_b: "Prădătorii nu mănâncă.", t5_q_c: "Soarele nu contează.", t5_q_d: "Trăiesc doar singuri.",
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
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
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
    svg: (lang) => <FoodWebSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "ter", label: "t2_bucket_ter" },
        { id: "fog", label: "t2_bucket_fog" },
      ],
      items: [
        { text: "t2_item_t1", bucketId: "ter" },
        { text: "t2_item_f1", bucketId: "fog" },
        { text: "t2_item_t2", bucketId: "ter" },
        { text: "t2_item_f2", bucketId: "fog" },
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
      type: "drag-to-bucket",
      buckets: [
        { id: "ver", label: "t4_bucket_ver" },
        { id: "nem", label: "t4_bucket_nem" },
      ],
      items: [
        { text: "t4_item_v1", bucketId: "ver" },
        { text: "t4_item_n1", bucketId: "nem" },
        { text: "t4_item_v2", bucketId: "ver" },
        { text: "t4_item_n2", bucketId: "nem" },
      ],
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
  icon: "🌍",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const EcologyExplorer = memo(function EcologyExplorer({
  color = "#15803D", // Zöld (Green-700) az ökoszisztémákhoz
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
      grade={7} 
      explorerId="bio_k7_ecology" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default EcologyExplorer;
