"use client";
// JobsCommunityExplorer.tsx — Sachkunde Island i6: Jobs & Community (K2)
// Topics: 1) Foglalkozások 2) Szerszámok 3) Munkahelyek 4) Családi szerepek 5) Összefoglaló

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
import { ProfessionsSvg } from "@/app/astro-sachkunde/svg/k2/EverydayLifeSvg";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric, No Emojis) ───────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F3F4F6" rx="20" />
      {/* Orvosi táska */}
      <g transform="translate(70, 75)">
        <rect x="-20" y="-15" width="40" height="30" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" rx="4" />
        <rect x="-5" y="-20" width="10" height="5" fill="none" stroke="#94A3B8" strokeWidth="2" />
        <path d="M -8,0 L 8,0 M 0,-8 L 0,8" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* Építőmester kalapácsa */}
      <g transform="translate(170, 75)">
        <rect x="-3" y="-10" width="6" height="35" fill="#78350F" rx="2" />
        <rect x="-15" y="-15" width="25" height="10" fill="#64748B" rx="2" />
        <rect x="10" y="-13" width="5" height="6" fill="#64748B" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* Iskola */}
      <g transform="translate(60, 90)">
        <rect x="-25" y="-40" width="50" height="40" fill="#FCD34D" />
        <polygon points="-30,-40 0,-60 30,-40" fill="#EA580C" />
        <rect x="-10" y="-15" width="20" height="15" fill="#78350F" />
        <circle cx="0" cy="-45" r="5" fill="#FFFFFF" />
        <path d="M 0,-45 L 0,-48 M 0,-45 L 3,-45" stroke="#000" strokeWidth="1" />
      </g>
      {/* Kórház */}
      <g transform="translate(180, 90)">
        <rect x="-25" y="-50" width="50" height="50" fill="#FFFFFF" />
        <rect x="-30" y="-55" width="60" height="5" fill="#94A3B8" />
        <rect x="-10" y="-20" width="20" height="20" fill="#93C5FD" />
        <path d="M -8,-35 L 8,-35 M 0,-43 L 0,-27" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      {/* Felnőtt (Szülő) */}
      <g transform="translate(80, 80)">
        <circle cx="0" cy="-35" r="10" fill="#FCA5A5" />
        <rect x="-10" y="-25" width="20" height="30" fill="#3B82F6" rx="4" />
        <rect x="-5" y="5" width="4" height="20" fill="#1E3A8A" rx="2" />
        <rect x="1" y="5" width="4" height="20" fill="#1E3A8A" rx="2" />
      </g>
      {/* Gyerek (Seprűvel) */}
      <g transform="translate(160, 80)">
        <circle cx="0" cy="-20" r="8" fill="#FCA5A5" />
        <rect x="-8" y="-12" width="16" height="20" fill="#10B981" rx="3" />
        <rect x="-4" y="8" width="3" height="15" fill="#065F46" rx="1" />
        <rect x="1" y="8" width="3" height="15" fill="#065F46" rx="1" />
        {/* Seprű */}
        <line x1="-15" y1="-10" x2="-25" y2="15" stroke="#92400E" strokeWidth="2" />
        <polygon points="-25,15 -30,25 -20,25" fill="#F59E0B" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#D1FAE5" rx="20" />
      {/* Közösség (Három figura kéz a kézben) */}
      <g transform="translate(120, 80)">
        {/* Bal */}
        <circle cx="-30" cy="-25" r="8" fill="#FCA5A5" />
        <rect x="-36" y="-15" width="12" height="20" fill="#F59E0B" rx="3" />
        {/* Közép */}
        <circle cx="0" cy="-30" r="10" fill="#FCA5A5" />
        <rect x="-8" y="-18" width="16" height="25" fill="#3B82F6" rx="3" />
        {/* Jobb */}
        <circle cx="30" cy="-25" r="8" fill="#FCA5A5" />
        <rect x="24" y="-15" width="12" height="20" fill="#EF4444" rx="3" />
        {/* Karok */}
        <path d="M -24,-10 Q -15,-5 -8,-10 M 8,-10 Q 15,-5 24,-10" fill="none" stroke="#FCA5A5" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Közösség és Munkák",
    // T1: Foglalkozások
    t1_title: "Különféle foglalkozások",
    t1_text: "Minden felnőttnek van valamilyen szakmája, amivel segít a közösségnek. A pék kenyeret süt, a tanár olvasni tanít.",
    t1_b1: "A tűzoltó bátor, és eloltja a tüzet.",
    t1_b2: "Az orvos meggyógyít, ha beteg vagy.",
    t1_b3: "A rendőr vigyáz a biztonságunkra.",
    t1_inst: "Párosítsd a foglalkozást a feladatával!",
    t1_l1: "Orvos", t1_r1: "Meggyógyítja a betegeket",
    t1_l2: "Pék", t1_r2: "Friss kenyeret és kiflit süt",
    t1_l3: "Tanár", t1_r3: "Írni és olvasni tanít",
    t1_q: "Kihez mész, ha fáj a torkod és lázas vagy?",
    t1_q_a: "Az orvoshoz", t1_q_b: "A pékhez", t1_q_c: "Az építőmesterhez", t1_q_d: "A rendőrhöz",

    // T2: Szerszámok
    t2_title: "Kinek a szerszáma?",
    t2_text: "Minden munkához kellenek eszközök. Az asztalosnak kalapács kell, az orvosnak pedig gyógyszerek.",
    t2_b1: "A fonendoszkóppal a doktornéni meghallgatja a szívedet.",
    t2_b2: "A kalapács és a szög az építkezésen fontos.",
    t2_b3: "A pék fakanalat és tálat használ a sütéshez.",
    t2_inst: "Kinek a táskájába való? Válogasd szét!",
    t2_bucket_orvos: "Orvos táskája",
    t2_bucket_epito: "Építőmester doboza",
    t2_item_o1: "Kötszer", t2_item_o2: "Lázmérő",
    t2_item_e1: "Kalapács", t2_item_e2: "Szögek",
    t2_q: "Milyen eszközt használ az orvos, hogy megmérje a testhőmérsékletedet?",
    t2_q_a: "Lázmérőt", t2_q_b: "Kalapácsot", t2_q_c: "Fakanalat", t2_q_d: "Vonalzót",

    // T3: Munkahelyek
    t3_title: "Hol dolgoznak az emberek?",
    t3_text: "A városban sokféle épület van. Mindegyik egy-egy fontos munkahely, ahová az emberek dolgozni járnak.",
    t3_b1: "Az iskolában a tanárok és a diákok vannak.",
    t3_b2: "A kórházban az orvosok és az ápolók dolgoznak.",
    t3_b3: "A boltban az eladók segítenek nekünk.",
    t3_inst: "Keresd meg az épületeket a képen!",
    t3_area_school: "Iskola (Órával)",
    t3_area_hospital: "Kórház (Piros kereszttel)",
    t3_q: "Melyik épület tetején látsz általában egy nagy piros keresztet?",
    t3_q_a: "A kórházén", t3_q_b: "Az iskoláén", t3_q_c: "A cukrászdáén", t3_q_d: "A múzeumén",

    // T4: Családi szerepek
    t4_title: "Munkamegosztás otthon",
    t4_text: "Nemcsak a városban, hanem otthon is van mindenkinek feladata. A család egy kis közösség!",
    t4_b1: "A szülők dolgoznak, hogy legyen étel és ruha.",
    t4_b2: "A gyerekek feladata a tanulás és a játék elpakolása.",
    t4_b3: "Ha mindenki segít egy kicsit, hamar kész a takarítás.",
    t4_inst: "Tedd sorba! Hogyan takarítunk ki közösen?",
    t4_w1: "Szülők porszívóznak", t4_w2: "Gyerekek elpakolnak", t4_w3: "Minden tiszta lesz", t4_w4: "Közösen pihenünk",
    t4_q: "Mi a gyerekek egyik legfontosabb feladata otthon?",
    t4_q_a: "Segíteni a rendrakásban", t4_q_b: "Egész nap tévét nézni", t4_q_c: "Elvezetni az autót", t4_q_d: "Megjavítani a tetőt",

    // T5: Összefoglaló
    t5_title: "Együtt a közösségben",
    t5_text: "A városban és otthon is mindenkinek megvan a maga szerepe. Csak akkor működik jól a világ, ha segítünk egymásnak!",
    t5_b1: "A munkások a közösségért dolgoznak.",
    t5_b2: "Otthon is fontos a segítség.",
    t5_b3: "Együtt mindent könnyebb megoldani.",
    t5_inst: "Egészítsd ki a mondatot!",
    t5_gap_sentence: "Ha az emberek segítik egymást és együtt dolgoznak, azt úgy hívjuk, hogy egy jó {gap}.",
    t5_c51: "közösség", t5_c52: "játék", t5_c53: "verseny",
    t5_q: "Miért jó, ha mindenkinek van egy feladata a családban és a városban?",
    t5_q_a: "Mert így tudunk segíteni egymásnak és rend van", t5_q_b: "Hogy minél többet veszekedjünk", t5_q_c: "Mert mindenki ugyanazt csinálja", t5_q_d: "Nem jó, jobb ha senki sem csinál semmit",
  },
  en: {
    explorer_title: "Jobs & Community",
    t1_title: "Different Professions", t1_text: "Every adult has a job to help the community. A baker bakes bread, a teacher teaches how to read.",
    t1_b1: "A firefighter is brave and puts out fires.", t1_b2: "A doctor heals you when you are sick.", t1_b3: "A police officer keeps us safe.",
    t1_inst: "Match the job with its task!",
    t1_l1: "Doctor", t1_r1: "Heals sick people",
    t1_l2: "Baker", t1_r2: "Bakes fresh bread",
    t1_l3: "Teacher", t1_r3: "Teaches writing and reading",
    t1_q: "Who do you go to if your throat hurts and you have a fever?",
    t1_q_a: "The doctor", t1_q_b: "The baker", t1_q_c: "The builder", t1_q_d: "The police officer",

    t2_title: "Whose Tools?", t2_text: "Every job needs tools. A carpenter needs a hammer, and a doctor needs medicine.",
    t2_b1: "The doctor listens to your heart with a stethoscope.", t2_b2: "A hammer and nails are important for building.", t2_b3: "A baker uses a bowl and a wooden spoon.",
    t2_inst: "Whose bag do these belong in? Sort them out!",
    t2_bucket_orvos: "Doctor's bag",
    t2_bucket_epito: "Builder's toolbox",
    t2_item_o1: "Bandage", t2_item_o2: "Thermometer",
    t2_item_e1: "Hammer", t2_item_e2: "Nails",
    t2_q: "What tool does a doctor use to measure your body temperature?",
    t2_q_a: "A thermometer", t2_q_b: "A hammer", t2_q_c: "A wooden spoon", t2_q_d: "A ruler",

    t3_title: "Where do people work?", t3_text: "There are many buildings in a city. Each is a workplace where people go to do their jobs.",
    t3_b1: "Teachers and students are at the school.", t3_b2: "Doctors and nurses work at the hospital.", t3_b3: "Shop assistants help us at the store.",
    t3_inst: "Find the buildings in the picture!",
    t3_area_school: "School (with a clock)",
    t3_area_hospital: "Hospital (with a red cross)",
    t3_q: "Which building usually has a big red cross on its roof?",
    t3_q_a: "The hospital", t3_q_b: "The school", t3_q_c: "The bakery", t3_q_d: "The museum",

    t4_title: "Family Roles", t4_text: "Not only in the city, but at home too, everyone has a task. The family is a small community!",
    t4_b1: "Parents work to provide food and clothes.", t4_b2: "Children's task is to learn and put away toys.", t4_b3: "If everyone helps, cleaning is done fast.",
    t4_inst: "Put in order! How do we clean together?",
    t4_w1: "Parents vacuum", t4_w2: "Children tidy up toys", t4_w3: "Everything is clean", t4_w4: "We rest together",
    t4_q: "What is one of the most important tasks for children at home?",
    t4_q_a: "Helping to tidy up", t4_q_b: "Watching TV all day", t4_q_c: "Driving the car", t4_q_d: "Fixing the roof",

    t5_title: "Together in the Community", t5_text: "In the city and at home, everyone has a role. The world only works well if we help each other!",
    t5_b1: "Workers do their job for the community.", t5_b2: "Helping at home is also important.", t5_b3: "Everything is easier together.",
    t5_inst: "Fill in the missing word!",
    t5_gap_sentence: "When people help each other and work together, it is called a good {gap}.",
    t5_c51: "community", t5_c52: "game", t5_c53: "race",
    t5_q: "Why is it good that everyone has a task in the family and city?",
    t5_q_a: "So we can help each other and keep order", t5_q_b: "To argue as much as possible", t5_q_c: "Because everyone does the exact same thing", t5_q_d: "It's not good, nobody should do anything",
  },
  de: {
    explorer_title: "Berufe & Gemeinschaft",
    t1_title: "Verschiedene Berufe", t1_text: "Jeder Erwachsene hat einen Beruf, mit dem er der Gemeinschaft hilft. Der Bäcker backt Brot.",
    t1_b1: "Der Feuerwehrmann ist mutig und löscht Feuer.", t1_b2: "Der Arzt macht dich gesund.", t1_b3: "Der Polizist sorgt für Sicherheit.",
    t1_inst: "Verbinde den Beruf mit seiner Aufgabe!",
    t1_l1: "Arzt", t1_r1: "Macht Kranke gesund",
    t1_l2: "Bäcker", t1_r2: "Backt frisches Brot",
    t1_l3: "Lehrer", t1_r3: "Bringt Lesen und Schreiben bei",
    t1_q: "Zu wem gehst du, wenn dein Hals wehtut?",
    t1_q_a: "Zum Arzt", t1_q_b: "Zum Bäcker", t1_q_c: "Zum Baumeister", t1_q_d: "Zum Polizisten",

    t2_title: "Wessen Werkzeug?", t2_text: "Für jede Arbeit braucht man Werkzeuge. Der Arzt braucht Medizin, der Handwerker einen Hammer.",
    t2_b1: "Mit dem Stethoskop hört der Arzt dein Herz ab.", t2_b2: "Hammer und Nägel sind wichtig auf der Baustelle.", t2_b3: "Der Bäcker benutzt eine Schüssel zum Backen.",
    t2_inst: "In wessen Tasche gehört das? Sortiere!",
    t2_bucket_orvos: "Arzttasche",
    t2_bucket_epito: "Werkzeugkiste",
    t2_item_o1: "Verband", t2_item_o2: "Fieberthermometer",
    t2_item_e1: "Hammer", t2_item_e2: "Nägel",
    t2_q: "Womit misst der Arzt deine Körpertemperatur?",
    t2_q_a: "Mit dem Fieberthermometer", t2_q_b: "Mit dem Hammer", t2_q_c: "Mit dem Kochlöffel", t2_q_d: "Mit dem Lineal",

    t3_title: "Arbeitsplätze", t3_text: "In der Stadt gibt es viele Gebäude. Jedes ist ein Arbeitsplatz für bestimmte Menschen.",
    t3_b1: "In der Schule sind Lehrer und Schüler.", t3_b2: "Im Krankenhaus arbeiten Ärzte und Pfleger.", t3_b3: "Im Laden helfen uns Verkäufer.",
    t3_inst: "Finde die Gebäude auf dem Bild!",
    t3_area_school: "Schule (mit Uhr)",
    t3_area_hospital: "Krankenhaus (mit rotem Kreuz)",
    t3_q: "Welches Gebäude hat meistens ein großes rotes Kreuz auf dem Dach?",
    t3_q_a: "Das Krankenhaus", t3_q_b: "Die Schule", t3_q_c: "Die Bäckerei", t3_q_d: "Das Museum",

    t4_title: "Aufgaben in der Familie", t4_text: "Auch zu Hause hat jeder seine Aufgabe. Die Familie ist eine kleine Gemeinschaft!",
    t4_b1: "Eltern arbeiten, um Essen und Kleidung zu kaufen.", t4_b2: "Kinder lernen und räumen ihr Spielzeug auf.", t4_b3: "Wenn alle helfen, ist das Putzen schnell fertig.",
    t4_inst: "Bringe die Schritte in die richtige Reihenfolge!",
    t4_w1: "Eltern staubsaugen", t4_w2: "Kinder räumen Spielzeug auf", t4_w3: "Alles ist sauber", t4_w4: "Wir ruhen uns gemeinsam aus",
    t4_q: "Was ist eine wichtige Aufgabe für Kinder zu Hause?",
    t4_q_a: "Beim Aufräumen helfen", t4_q_b: "Den ganzen Tag fernsehen", t4_q_c: "Das Auto fahren", t4_q_d: "Das Dach reparieren",

    t5_title: "Zusammenhalten", t5_text: "In der Stadt und zu Hause hat jeder eine Rolle. Die Welt funktioniert nur gut, wenn wir uns helfen!",
    t5_b1: "Arbeiter helfen der Gemeinschaft.", t5_b2: "Auch zu Hause ist Hilfe wichtig.", t5_b3: "Zusammen ist alles einfacher.",
    t5_inst: "Ergänze den Satz!",
    t5_gap_sentence: "Wenn Menschen einander helfen und zusammenarbeiten, nennt man das eine gute {gap}.",
    t5_c51: "Gemeinschaft", t5_c52: "Spiel", t5_c53: "Wettkampf",
    t5_q: "Warum ist es gut, dass jeder eine Aufgabe hat?",
    t5_q_a: "Damit wir einander helfen können und Ordnung herrscht", t5_q_b: "Damit wir viel streiten", t5_q_c: "Weil alle das Gleiche tun", t5_q_d: "Es ist nicht gut",
  },
  ro: {
    explorer_title: "Meserii și Comunitate",
    t1_title: "Diferite meserii", t1_text: "Fiecare adult are o meserie cu care ajută comunitatea. Brutarul face pâine, profesorul te învață să citești.",
    t1_b1: "Pompierul este curajos și stinge incendiile.", t1_b2: "Medicul te vindecă atunci când ești bolnav.", t1_b3: "Polițistul păstrează ordinea.",
    t1_inst: "Potrivește meseria cu sarcina ei!",
    t1_l1: "Medic", t1_r1: "Vindecă bolnavii",
    t1_l2: "Brutar", t1_r2: "Coace pâine proaspătă",
    t1_l3: "Profesor", t1_r3: "Învață copiii să scrie și să citească",
    t1_q: "La cine te duci dacă te doare gâtul și ai febră?",
    t1_q_a: "La medic", t1_q_b: "La brutar", t1_q_c: "La constructor", t1_q_d: "La polițist",

    t2_title: "Uneltele potrivite", t2_text: "Orice muncă are nevoie de unelte. Tâmplarul are nevoie de ciocan, iar medicul de medicamente.",
    t2_b1: "Cu stetoscopul, medicul îți ascultă inima.", t2_b2: "Ciocanul și cuiele sunt importante în construcții.", t2_b3: "Brutarul folosește un bol și o lingură de lemn.",
    t2_inst: "În geanta cui aparțin? Sortează-le!",
    t2_bucket_orvos: "Geanta medicului",
    t2_bucket_epito: "Cutia constructorului",
    t2_item_o1: "Bandaj", t2_item_o2: "Termometru",
    t2_item_e1: "Ciocan", t2_item_e2: "Cuie",
    t2_q: "Ce instrument folosește medicul pentru a-ți măsura temperatura?",
    t2_q_a: "Un termometru", t2_q_b: "Un ciocan", t2_q_c: "O lingură de lemn", t2_q_d: "O riglă",

    t3_title: "Unde se lucrează?", t3_text: "În oraș sunt multe clădiri. Fiecare este un loc de muncă important pentru oameni.",
    t3_b1: "La școală sunt profesorii și elevii.", t3_b2: "La spital lucrează medicii și asistentele.", t3_b3: "La magazin ne ajută vânzătorii.",
    t3_inst: "Găsește clădirile din imagine!",
    t3_area_school: "Școala (cu un ceas)",
    t3_area_hospital: "Spitalul (cu cruce roșie)",
    t3_q: "Care clădire are de obicei o cruce mare roșie pe acoperiș?",
    t3_q_a: "Spitalul", t3_q_b: "Școala", t3_q_c: "Brutăria", t3_q_d: "Muzeul",

    t4_title: "Roluri în familie", t4_text: "Nu doar în oraș, ci și acasă, toată lumea are o sarcină. Familia este o mică comunitate!",
    t4_b1: "Părinții muncesc pentru a asigura mâncare și haine.", t4_b2: "Sarcina copiilor este să învețe și să-și strângă jucăriile.", t4_b3: "Dacă toți ajută, curățenia e gata repede.",
    t4_inst: "Pune în ordine! Cum facem curat împreună?",
    t4_w1: "Părinții dau cu aspiratorul", t4_w2: "Copiii strâng jucăriile", t4_w3: "Totul e curat", t4_w4: "Ne odihnim împreună",
    t4_q: "Care este una dintre cele mai importante sarcini ale copiilor acasă?",
    t4_q_a: "Să ajute la curățenie", t4_q_b: "Să se uite la TV toată ziua", t4_q_c: "Să conducă mașina", t4_q_d: "Să repare acoperișul",

    t5_title: "Împreună în comunitate", t5_text: "În oraș și acasă, toată lumea are un rol. Lumea funcționează bine doar dacă ne ajutăm unii pe alții!",
    t5_b1: "Muncitorii lucrează pentru comunitate.", t5_b2: "Să ajutăm acasă este și asta important.", t5_b3: "Împreună, totul este mai ușor.",
    t5_inst: "Completează propoziția!",
    t5_gap_sentence: "Când oamenii se ajută și lucrează împreună, numim asta o {gap} bună.",
    t5_c51: "comunitate", t5_c52: "joacă", t5_c53: "cursă",
    t5_q: "De ce este bine ca toată lumea să aibă o sarcină?",
    t5_q_a: "Pentru că așa ne putem ajuta reciproc și este ordine", t5_q_b: "Ca să ne certăm cât mai mult", t5_q_c: "Pentru că toți fac același lucru", t5_q_d: "Nu e bine, nimeni n-ar trebui să facă nimic",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <ProfessionsSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
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
      type: "drag-to-bucket",
      buckets: [
        { id: "orvos", label: "t2_bucket_orvos" },
        { id: "epito", label: "t2_bucket_epito" },
      ],
      items: [
        { text: "t2_item_o1", bucketId: "orvos" },
        { text: "t2_item_e1", bucketId: "epito" },
        { text: "t2_item_o2", bucketId: "orvos" },
        { text: "t2_item_e2", bucketId: "epito" },
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
      type: "label-diagram",
      areas: [
        { id: "school",   x: 25, y: 50, label: "t3_area_school" },
        { id: "hospital", x: 75, y: 50, label: "t3_area_hospital" },
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
      type: "gap-fill",
      sentence: "t5_gap_sentence",
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
  icon: "🤝",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const JobsCommunityExplorer = memo(function JobsCommunityExplorer({
  color = "#4F46E5", // Indigo-600 a komolyság és szakmák tisztelete miatt
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
      grade={2} 
      explorerId="sachkunde_k2_jobs_community" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default JobsCommunityExplorer;
