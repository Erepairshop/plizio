"use client";
// PubertyExplorer — Island i5: Puberty (Pubertät) Grade 6
// Teaching-first pattern: R1-R4 info rounds, R5 quiz
// Topic: What is puberty, hormones, physical changes, hygiene & health (age-appropriate, educational)

import React from "react";
import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS — all content in 4 languages
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Round 1: What is Puberty
    r1_title: "What is Puberty?",
    r1_text: "Puberty is the time when your body changes from childhood to adulthood. It usually starts between ages 8-14. These changes happen to everyone, but at different times.",
    r1_fact1: "Puberty brings physical growth (you get taller and stronger)",
    r1_fact2: "Your hormones control these changes—they are chemical messengers in your body",
    r1_fact3: "Mental and emotional changes happen too—your feelings become more complex",
    r1_fact4: "Everyone goes through puberty at their own pace—this is completely normal",

    // Round 2: Hormones
    r2_title: "Hormones: The Control System",
    r2_text: "Your brain contains a gland called the pituitary gland. It produces hormones that signal your body to start growing and developing.",
    r2_fact1: "The pituitary gland is about the size of a pea in your brain",
    r2_fact2: "It releases hormones like testosterone and estrogen into the bloodstream",
    r2_fact3: "These hormones travel throughout your body and trigger growth and changes",
    r2_fact4: "The pituitary gland is called the 'master gland' because it controls many processes",

    // Round 3: Physical Changes
    r3_title: "Physical Changes During Puberty",
    r3_text: "During puberty, your body grows quickly. You might gain height, develop muscle, and your body shape changes. These physical changes prepare your body for adulthood.",
    r3_fact1: "Growth spurt: You grow taller, sometimes very quickly over a few months",
    r3_fact2: "Voice changes: Your voice gets deeper (this happens more noticeably for some people)",
    r3_fact3: "Body proportions change: Your arms, legs, and head grow at different rates",
    r3_fact4: "New body features develop: Gradual changes in skin, hair, and body composition",

    // Round 4: Hygiene & Health
    r4_title: "Staying Healthy During Puberty",
    r4_text: "During puberty, taking care of your body becomes more important. Good hygiene habits, nutrition, sleep, and exercise help your body grow strong and healthy.",
    r4_fact1: "Shower or bathe regularly—hormones increase oil and sweat production",
    r4_fact2: "Eat a balanced diet with fruits, vegetables, proteins, and whole grains",
    r4_fact3: "Get 8-10 hours of sleep—your body does most of its growing at night",
    r4_fact4: "Exercise regularly—physical activity builds strong muscles and bones",

    // Round 5: Quiz
    r5_title: "Quick Review",

    // Quiz Questions (3 questions)
    q1_q: "At what age does puberty usually start?",
    q1_815: "Between 8-14 years old",
    q1_1518: "Between 15-18 years old",
    q1_68: "Between 6-8 years old",
    q1_1820: "Between 18-20 years old",

    q2_q: "Which gland in your brain produces hormones that start puberty?",
    q2_pituitary: "The pituitary gland",
    q2_thyroid: "The thyroid gland",
    q2_pineal: "The pineal gland",
    q2_pancreas: "The pancreas",

    q3_q: "Which is an important health habit during puberty?",
    q3_regular_hygiene: "Regular hygiene, good nutrition, and exercise",
    q3_skip_sleep: "Skipping sleep to stay awake longer",
    q3_avoid_food: "Avoiding all sugary foods completely",
    q3_no_exercise: "Avoiding physical activity",

    // Round 3 MCQ (Physical Changes)
    r3_q: "Why do physical changes happen during puberty?",
    r3_q_growth_hormones: "Hormones trigger growth and development toward adulthood",
    r3_q_diet_change: "Eating different food causes the changes",
    r3_q_age_number: "They happen because you reached a certain age number",
    r3_q_weather: "They are caused by weather and seasons",

    // Round 4 MCQ (Health)
    r4_q: "During puberty, why do you need to shower or bathe more often?",
    r4_sweat_oil: "Hormones increase sweat and oil production",
    r4_colder: "The weather gets colder",
    r4_required_rule: "Because there is a rule you must follow",
    r4_faster_dirty: "You get dirty faster than before",
  },
  de: {
    r1_title: "Was ist Pubertät?",
    r1_text: "Die Pubertät ist die Zeit, in der sich dein Körper von der Kindheit zum Erwachsenenalter verändert. Sie beginnt normalerweise zwischen 8-14 Jahren. Diese Veränderungen passieren jedem, aber zu unterschiedlichen Zeiten.",
    r1_fact1: "Die Pubertät bringt körperliches Wachstum (du wirst größer und stärker)",
    r1_fact2: "Deine Hormone kontrollieren diese Veränderungen — sie sind chemische Botenstoffe in deinem Körper",
    r1_fact3: "Mentale und emotionale Veränderungen passieren auch — deine Gefühle werden komplexer",
    r1_fact4: "Jeder durchläuft die Pubertät in seinem eigenen Tempo — das ist völlig normal",

    r2_title: "Hormone: Das Kontrollsystem",
    r2_text: "Dein Gehirn enthält eine Drüse namens Hypophyse (Hirnanhangsdrüse). Sie produziert Hormone, die deinen Körper signalisieren, mit dem Wachstum und der Entwicklung zu beginnen.",
    r2_fact1: "Die Hypophyse ist etwa so groß wie eine Erbse in deinem Gehirn",
    r2_fact2: "Sie setzt Hormone wie Testosteron und Östrogen in den Blutkreislauf frei",
    r2_fact3: "Diese Hormone reisen durch deinen Körper und lösen Wachstum und Veränderungen aus",
    r2_fact4: "Die Hypophyse wird die 'Masterdrüse' genannt, weil sie viele Prozesse kontrolliert",

    r3_title: "Körperliche Veränderungen während der Pubertät",
    r3_text: "Während der Pubertät wächst dein Körper schnell. Du könntest größer werden, Muskeln entwickeln, und deine Körperform verändert sich. Diese körperlichen Veränderungen bereiten deinen Körper auf das Erwachsenenalter vor.",
    r3_fact1: "Wachstumsschub: Du wirst größer, manchmal sehr schnell über ein paar Monate",
    r3_fact2: "Stimmveränderung: Deine Stimme wird tiefer (das passiert für manche Menschen deutlicher)",
    r3_fact3: "Körperproportionen ändern sich: Deine Arme, Beine und dein Kopf wachsen mit unterschiedlichen Raten",
    r3_fact4: "Neue körperliche Merkmale entwickeln sich: Allmähliche Veränderungen in Haut, Haaren und Körperzusammensetzung",

    r4_title: "Gesundheit während der Pubertät",
    r4_text: "Während der Pubertät wird es wichtiger, auf deinen Körper zu achten. Gute Hygienegewohnheiten, Ernährung, Schlaf und Bewegung helfen deinem Körper, stark und gesund zu wachsen.",
    r4_fact1: "Duschen oder baden Sie regelmäßig — Hormone erhöhen die Öl- und Schweißproduktion",
    r4_fact2: "Iss eine ausgewogene Ernährung mit Obst, Gemüse, Proteinen und Vollkornprodukten",
    r4_fact3: "Schlafen Sie 8-10 Stunden — Ihr Körper macht das meiste seines Wachstums nachts",
    r4_fact4: "Trainieren Sie regelmäßig — körperliche Aktivität baut starke Muskeln und Knochen auf",

    r5_title: "Schnelle Wiederholung",

    q1_q: "In welchem Alter beginnt die Pubertät normalerweise?",
    q1_815: "Zwischen 8-14 Jahren",
    q1_1518: "Zwischen 15-18 Jahren",
    q1_68: "Zwischen 6-8 Jahren",
    q1_1820: "Zwischen 18-20 Jahren",

    q2_q: "Welche Drüse in deinem Gehirn produziert Hormone, die die Pubertät starten?",
    q2_pituitary: "Die Hypophyse",
    q2_thyroid: "Die Schilddrüse",
    q2_pineal: "Die Zirbeldrüse",
    q2_pancreas: "Die Bauchspeicheldrüse",

    q3_q: "Welche ist eine wichtige Gewohnheit zur Gesundheitserhaltung während der Pubertät?",
    q3_regular_hygiene: "Regelmäßige Hygiene, gute Ernährung und Bewegung",
    q3_skip_sleep: "Schlaf überspringen, um länger wach zu bleiben",
    q3_avoid_food: "Alle zuckerhaltigen Lebensmittel komplett vermeiden",
    q3_no_exercise: "Körperliche Aktivität vermeiden",

    r3_q: "Warum treten körperliche Veränderungen während der Pubertät auf?",
    r3_q_growth_hormones: "Hormone lösen Wachstum und Entwicklung zum Erwachsenenalter aus",
    r3_q_diet_change: "Das Essen verschiedener Lebensmittel verursacht die Veränderungen",
    r3_q_age_number: "Sie treten auf, weil du ein bestimmtes Alter erreicht hast",
    r3_q_weather: "Sie werden durch Wetter und Jahreszeiten verursacht",

    r4_q: "Warum musst du dich während der Pubertät häufiger duschen oder baden?",
    r4_sweat_oil: "Hormone erhöhen die Schweiß- und Ölproduktion",
    r4_colder: "Das Wetter wird kälter",
    r4_required_rule: "Weil es eine Regel gibt, der du folgen musst",
    r4_faster_dirty: "Du wirst schneller schmutzig als zuvor",
  },
  hu: {
    r1_title: "Mi az a pubertás?",
    r1_text: "A pubertás az az időszak, amikor a tested változik a gyermekkorból a felnőttkorba. Általában 8-14 évesen kezdődik. Ezek a változások mindenkivel megtörténnek, de különböző időpontokban.",
    r1_fact1: "A pubertás testi növekedést hoz (nagyobb és erősebb leszel)",
    r1_fact2: "A hormonok irányítják ezeket a változásokat — kémiai hírvivők a tested körül",
    r1_fact3: "Mentális és érzelmi változások is történnek — az érzéseid bonyolultabbá válnak",
    r1_fact4: "Mindenki a saját tempójában megy keresztül a pubertáson — ez teljesen normális",

    r2_title: "Hormonok: Az irányítási rendszer",
    r2_text: "Az agyadban egy hipofízis (agyalapi mirigy) nevű mirigy található. Olyan hormonokat termel, amelyek jelzik testének, hogy kezdjen el nőni és fejlődni.",
    r2_fact1: "A hipofízis körülbelül olyan nagy, mint egy bors az agyadban",
    r2_fact2: "Olyan hormonokat bocsát ki, mint a tesztoszteronés az ösztrogén a vérkeringésbe",
    r2_fact3: "Ezek a hormonok az egész testben keringnek és növekedés és változások váltanak ki",
    r2_fact4: "A hipofízist 'mestermirigynek' hívják, mert sok folyamatot szabályoz",

    r3_title: "Testi Változások a Pubertás Alatt",
    r3_text: "A pubertás alatt a tested gyorsan nő. Nagyobb lehetsz, fejleszthetsz izmokat, és a tested alakja megváltozik. Ezek a testi változások az agyadat az felnőttkorhoz készítik elő.",
    r3_fact1: "Növekedési ugrás: Gyorsabban nőhetsz, néha nagyon gyorsan néhány hónapon keresztül",
    r3_fact2: "Hangváltozás: A hangod mélyebbre megy (ez néhány embernél szembetűnőbb)",
    r3_fact3: "A testi arányok megváltoznak: A karod, a lábad és a fejed különböző sebességgel nő",
    r3_fact4: "Új testi jellemzők fejlődnek: Fokozatos változások a bőr, a haj és a testösszetételben",

    r4_title: "Egészség a Pubertás Alatt",
    r4_text: "A pubertás alatt fontosabb lett, hogy gondoskodjál a tested körül. Jó higiénikus szokások, táplálkozás, alvás és mozgás segítik a testedet, hogy erősen és egészségesen nőjön.",
    r4_fact1: "Rendszeresen zuhanyozz vagy fürdj — a hormonok fokozzák az olaj- és izzadságtermelést",
    r4_fact2: "Egyél egy kiegyensúlyozott étrendet gyümölccsel, zöldséggel, fehérjékkel és teljes gabonákkal",
    r4_fact3: "Aludj 8-10 órát — a tested az éjszaka nagy részében nő",
    r4_fact4: "Rendszeresen edzj — a fizikai aktivitás erős izmokat és csontokat épít fel",

    r5_title: "Gyors felülvizsgálat",

    q1_q: "Milyen korban kezdődik általában a pubertás?",
    q1_815: "8-14 évesen",
    q1_1518: "15-18 évesen",
    q1_68: "6-8 évesen",
    q1_1820: "18-20 évesen",

    q2_q: "Az agyadban mely mirigy termel hormonokat, amelyek a pubertást elindítják?",
    q2_pituitary: "A hipofízis",
    q2_thyroid: "A pajzsmirigy",
    q2_pineal: "A nyakkendőmirigy",
    q2_pancreas: "A hasnyálmirigy",

    q3_q: "Melyik egy fontos egészségi szokás a pubertás alatt?",
    q3_regular_hygiene: "Rendszeres higiénia, jó táplálkozás és mozgás",
    q3_skip_sleep: "Az alvás kihagyása, hogy ébresztkedjél",
    q3_avoid_food: "Minden cukorral töltött étel teljes elkerülése",
    q3_no_exercise: "A fizikai aktivitás elkerülése",

    r3_q: "Miért történnek testi változások a pubertás alatt?",
    r3_q_growth_hormones: "A hormonok megindítják a növekedést és fejlődést a felnőttkor felé",
    r3_q_diet_change: "Különböző ételek evése okozza a változásokat",
    r3_q_age_number: "Azért történnek, mert egy bizonyos korot értek el",
    r3_q_weather: "Az időjárás és az évszakok okozzák",

    r4_q: "Miért kell gyakrabban zuhanyozni vagy fürdeni a pubertás alatt?",
    r4_sweat_oil: "A hormonok fokozzák az izzadság- és ólajtermelést",
    r4_colder: "Az időjárás hidegebbé válik",
    r4_required_rule: "Mert van egy szabály, amelyet követni kell",
    r4_faster_dirty: "Gyorsabban koszos leszel, mint előtte",
  },
  ro: {
    r1_title: "Ce este pubertatea?",
    r1_text: "Pubertatea este perioada în care corpul tău se schimbă din copilărie în vârstă adultă. De obicei începe între 8-14 ani. Aceste schimbări se întâmplă cu toți, dar în momente diferite.",
    r1_fact1: "Pubertatea aduce creștere fizică (devine mai înalt și mai puternic)",
    r1_fact2: "Hormonii tăi controlează aceste schimbări — sunt mesageri chimici în corpul tău",
    r1_fact3: "Schimbări mentale și emoționale se întâmplă și — sentimentele tale devin mai complexe",
    r1_fact4: "Toți trec prin pubertate în ritmul lor propriu — aceasta este complet normal",

    r2_title: "Hormonii: Sistemul de Control",
    r2_text: "Creierul tău conține o glandă numită hipofiza (glanda pituitară). Produce hormoni care semnalează corpului tău să înceapă să crească și să se dezvolte.",
    r2_fact1: "Hipofiza are aproximativ mărimea unui bob de piper în creierul tău",
    r2_fact2: "Eliberează hormoni precum testosteronul și estrogenul în fluxul sanguin",
    r2_fact3: "Acești hormoni circulă prin întreg corpul tău și declanșează creștere și schimbări",
    r2_fact4: "Hipofiza se numește 'glanda principală' pentru că controlează multe procese",

    r3_title: "Schimbări Fizice În Timpul Pubertății",
    r3_text: "Durante pubertății, corpul tău crește repede. S-ar putea să devii mai înalt, să dezvolți mușchi, și forma corpului tău se schimbă. Aceste schimbări fizice pregătesc corpul tău pentru vârstă adultă.",
    r3_fact1: "Spurt de creștere: Devii mai înalt, uneori foarte repede peste câteva luni",
    r3_fact2: "Schimbarea vocii: Vocea ți se-adânciți (aceasta se întâmplă mai vizibil pentru unii oameni)",
    r3_fact3: "Proporțiile corpului se schimbă: Brațele, picioarele și capul tău cresc cu rate diferite",
    r3_fact4: "Se dezvoltă noi caracteristici fizice: Schimbări treptate în piele, păr și compoziție corporală",

    r4_title: "Rămâi Sănătos În Timpul Pubertății",
    r4_text: "În timpul pubertății, devine mai important să ai grijă de corpul tău. Obiceiuri bune de igienă, nutriție, somn și exercițiu ajută corpul tău să crească puternic și sănătos.",
    r4_fact1: "Duc dus sau baie regulat — hormonii cresc producția de ulei și transpirație",
    r4_fact2: "Mănâncă o dietă echilibrată cu fructe, legume, proteine și cereale integrale",
    r4_fact3: "Dormi 8-10 ore — corpul tău face cea mai mare parte a creșterii sale noaptea",
    r4_fact4: "Exercițiu regulat — activitatea fizică construiește mușchi și oase puternice",

    r5_title: "Recapitulare rapidă",

    q1_q: "La ce vârstă începe de obicei pubertatea?",
    q1_815: "Între 8-14 ani",
    q1_1518: "Între 15-18 ani",
    q1_68: "Între 6-8 ani",
    q1_1820: "Între 18-20 ani",

    q2_q: "Ce glandă din creierul tău produce hormoni care declanșează pubertatea?",
    q2_pituitary: "Hipofiza",
    q2_thyroid: "Glanda tiroidă",
    q2_pineal: "Glanda pineală",
    q2_pancreas: "Pancreasul",

    q3_q: "Care este un obicei important de sănătate în timpul pubertății?",
    q3_regular_hygiene: "Igienă regulată, nutriție bună și exercițiu",
    q3_skip_sleep: "Sărind peste somn pentru a rămâne treaz mai mult",
    q3_avoid_food: "Evitând complet toate alimentele cu zahăr",
    q3_no_exercise: "Evitând activitatea fizică",

    r3_q: "De ce se întâmplă schimbări fizice în timpul pubertății?",
    r3_q_growth_hormones: "Hormonii declanșează creștere și dezvoltare spre vârstă adultă",
    r3_q_diet_change: "Mâncarea diferită cauzează schimbările",
    r3_q_age_number: "Se întâmplă pentru că ai atins o anumită vârstă",
    r3_q_weather: "Sunt cauzate de vreme și anotimpuri",

    r4_q: "De ce trebuie să te duși sub duș mai des în timp ce treci prin pubertate?",
    r4_sweat_oil: "Hormonii cresc transpirația și producția de ulei",
    r4_colder: "Vremea devine mai rece",
    r4_required_rule: "Pentru că există o regulă pe care trebuie s-o urmezi",
    r4_faster_dirty: "Devii murdar mai repede decât înainte",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG ILLUSTRATIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Round 1 SVG: Growth Timeline */
function SVG_R1(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      {/* Title */}
      <text x="120" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="rgba(255,255,255,0.7)">
        Childhood to Adulthood
      </text>

      {/* Timeline base */}
      <line x1="20" y1="100" x2="220" y2="100" stroke="rgba(150,150,150,0.4)" strokeWidth="2" />

      {/* Child silhouette (stage 1) */}
      <g>
        <circle cx="50" cy="65" r="6" fill="rgba(100,150,255,0.6)" />
        <rect x="47" y="73" width="6" height="15" fill="rgba(100,150,255,0.6)" />
        <rect x="40" y="78" width="4" height="10" fill="rgba(100,150,255,0.6)" />
        <rect x="56" y="78" width="4" height="10" fill="rgba(100,150,255,0.6)" />
        <rect x="44" y="90" width="3" height="8" fill="rgba(100,150,255,0.6)" />
        <rect x="54" y="90" width="3" height="8" fill="rgba(100,150,255,0.6)" />
        <text x="50" y="115" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)">
          Child
        </text>
        <text x="50" y="130" textAnchor="middle" fontSize="8" fill="rgba(150,150,150,0.5)">
          (0-8)
        </text>
      </g>

      {/* Teen silhouette (stage 2) */}
      <g>
        <circle cx="120" cy="55" r="7" fill="rgba(200,150,100,0.6)" />
        <rect x="116" y="65" width="8" height="20" fill="rgba(200,150,100,0.6)" />
        <rect x="108" y="72" width="4" height="13" fill="rgba(200,150,100,0.6)" />
        <rect x="128" y="72" width="4" height="13" fill="rgba(200,150,100,0.6)" />
        <rect x="112" y="87" width="3" height="11" fill="rgba(200,150,100,0.6)" />
        <rect x="125" y="87" width="3" height="11" fill="rgba(200,150,100,0.6)" />
        <text x="120" y="115" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)">
          Teen
        </text>
        <text x="120" y="130" textAnchor="middle" fontSize="8" fill="rgba(150,150,150,0.5)">
          (8-18)
        </text>
      </g>

      {/* Adult silhouette (stage 3) */}
      <g>
        <circle cx="190" cy="50" r="8" fill="rgba(100,200,100,0.6)" />
        <rect x="185" y="62" width="10" height="25" fill="rgba(100,200,100,0.6)" />
        <rect x="175" y="70" width="4" height="16" fill="rgba(100,200,100,0.6)" />
        <rect x="201" y="70" width="4" height="16" fill="rgba(100,200,100,0.6)" />
        <rect x="178" y="88" width="3" height="12" fill="rgba(100,200,100,0.6)" />
        <rect x="199" y="88" width="3" height="12" fill="rgba(100,200,100,0.6)" />
        <text x="190" y="115" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)">
          Adult
        </text>
        <text x="190" y="130" textAnchor="middle" fontSize="8" fill="rgba(150,150,150,0.5)">
          (18+)
        </text>
      </g>

      {/* Arrows connecting stages */}
      <path d="M 65 100 L 105 100" stroke="rgba(255,200,100,0.5)" strokeWidth="2" markerEnd="url(#arrow_orange)" fill="none" />
      <path d="M 135 100 L 175 100" stroke="rgba(255,200,100,0.5)" strokeWidth="2" markerEnd="url(#arrow_orange)" fill="none" />

      <defs>
        <marker id="arrow_orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="rgba(255,200,100,0.5)" />
        </marker>
      </defs>
    </svg>
  );
}

/** Round 2 SVG: Pituitary Gland in Brain */
function SVG_R2(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <radialGradient id="brain_grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9BA8C4" />
          <stop offset="100%" stopColor="#5A7BA0" />
        </radialGradient>
      </defs>

      {/* Title */}
      <text x="120" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="rgba(255,255,255,0.7)">
        Pituitary Gland in Brain
      </text>

      {/* Brain outline (side view) */}
      <ellipse cx="85" cy="80" rx="35" ry="40" fill="url(#brain_grad)" opacity="0.8" stroke="rgba(150,150,150,0.5)" strokeWidth="1.5" />

      {/* Folded brain pattern (light lines) */}
      <path d="M 55 60 Q 60 70 55 80" stroke="rgba(200,200,200,0.2)" strokeWidth="1" fill="none" />
      <path d="M 65 50 Q 70 70 65 90" stroke="rgba(200,200,200,0.2)" strokeWidth="1" fill="none" />
      <path d="M 75 45 Q 80 75 75 100" stroke="rgba(200,200,200,0.2)" strokeWidth="1" fill="none" />
      <path d="M 90 45 Q 95 75 90 105" stroke="rgba(200,200,200,0.2)" strokeWidth="1" fill="none" />

      {/* Pituitary gland (small ball at base) */}
      <circle cx="85" cy="115" r="6" fill="#FFB366" stroke="rgba(255,180,100,0.8)" strokeWidth="1.5" />
      <circle cx="85" cy="115" r="3" fill="rgba(255,255,100,0.5)" />

      {/* Label arrow from pituitary */}
      <line x1="85" y1="122" x2="85" y2="140" stroke="rgba(255,180,100,0.6)" strokeWidth="1.5" strokeDasharray="2,2" />
      <text x="120" y="145" fontSize="10" fontWeight="bold" fill="#FFB366">
        Pituitary Gland (Master Gland)
      </text>

      {/* Hormone arrows spreading from pituitary */}
      <path d="M 70 115 L 50 115" stroke="#FF6B9D" strokeWidth="2" markerEnd="url(#arrow_hormone)" opacity="0.6" />
      <path d="M 100 115 L 120 115" stroke="#FF6B9D" strokeWidth="2" markerEnd="url(#arrow_hormone)" opacity="0.6" />
      <path d="M 80 125 L 70 145" stroke="#FF6B9D" strokeWidth="2" markerEnd="url(#arrow_hormone)" opacity="0.6" />
      <path d="M 90 125 L 100 145" stroke="#FF6B9D" strokeWidth="2" markerEnd="url(#arrow_hormone)" opacity="0.6" />

      {/* Hormone labels */}
      <text x="45" y="120" fontSize="8" fill="#FF6B9D" fontWeight="bold">
        Hormones
      </text>

      <defs>
        <marker id="arrow_hormone" markerWidth="8" markerHeight="8" refX="7" refY="2" orient="auto">
          <polygon points="0 0, 8 2, 0 4" fill="#FF6B9D" />
        </marker>
      </defs>
    </svg>
  );
}

/** Round 3 SVG: Growth Changes */
function SVG_R3(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      {/* Title */}
      <text x="120" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="rgba(255,255,255,0.7)">
        Physical Growth During Puberty
      </text>

      {/* Left: Before (shorter) */}
      <text x="60" y="35" textAnchor="middle" fontSize="10" fill="rgba(100,150,255,0.7)" fontWeight="bold">
        Before
      </text>

      {/* Figure 1: child/young teen */}
      <circle cx="60" cy="50" r="5" fill="rgba(100,150,255,0.6)" />
      <rect x="57" y="57" width="6" height="18" fill="rgba(100,150,255,0.6)" />
      <rect x="50" y="63" width="4" height="12" fill="rgba(100,150,255,0.6)" />
      <rect x="66" y="63" width="4" height="12" fill="rgba(100,150,255,0.6)" />
      <rect x="53" y="77" width="3" height="9" fill="rgba(100,150,255,0.6)" />
      <rect x="64" y="77" width="3" height="9" fill="rgba(100,150,255,0.6)" />

      {/* Arrow between */}
      <text x="120" y="100" textAnchor="middle" fontSize="20" fill="rgba(255,200,100,0.5)">
        →
      </text>

      {/* Right: After (taller) */}
      <text x="180" y="35" textAnchor="middle" fontSize="10" fill="rgba(100,200,100,0.7)" fontWeight="bold">
        After
      </text>

      {/* Figure 2: grown teen */}
      <circle cx="180" cy="45" r="6" fill="rgba(100,200,100,0.6)" />
      <rect x="176" y="54" width="8" height="25" fill="rgba(100,200,100,0.6)" />
      <rect x="168" y="62" width="4" height="15" fill="rgba(100,200,100,0.6)" />
      <rect x="188" y="62" width="4" height="15" fill="rgba(100,200,100,0.6)" />
      <rect x="171" y="80" width="3" height="10" fill="rgba(100,200,100,0.6)" />
      <rect x="186" y="80" width="3" height="10" fill="rgba(100,200,100,0.6)" />

      {/* Growth spurt indicator */}
      <path d="M 130 65 L 150 50" stroke="rgba(255,200,100,0.6)" strokeWidth="2" markerEnd="url(#arrow_growth)" />
      <text x="145" y="48" fontSize="9" fill="rgba(255,200,100,0.6)" fontWeight="bold">
        Growth!
      </text>

      {/* Body changes labels (bottom) */}
      <g opacity="0.7">
        <text x="120" y="130" textAnchor="middle" fontSize="8" fill="rgba(200,180,100,0.6)">
          Height ↑ · Muscles ↑ · Voice Changes · Proportions Shift
        </text>
      </g>

      <defs>
        <marker id="arrow_growth" markerWidth="8" markerHeight="8" refX="7" refY="2" orient="auto">
          <polygon points="0 0, 8 2, 0 4" fill="rgba(255,200,100,0.6)" />
        </marker>
      </defs>
    </svg>
  );
}

/** Round 4 SVG: Health Habits */
function SVG_R4(): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      {/* Title */}
      <text x="120" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="rgba(255,255,255,0.7)">
        Stay Healthy During Puberty
      </text>

      {/* Shower icon */}
      <g>
        <circle cx="40" cy="50" r="5" fill="none" stroke="rgba(100,200,255,0.6)" strokeWidth="1.5" />
        <line x1="40" y1="55" x2="40" y2="70" stroke="rgba(100,200,255,0.6)" strokeWidth="2" />
        <line x1="35" y1="60" x2="45" y2="60" stroke="rgba(100,200,255,0.6)" strokeWidth="1.5" />
        <circle cx="37" cy="72" r="1.5" fill="rgba(100,200,255,0.5)" />
        <circle cx="43" cy="75" r="1.5" fill="rgba(100,200,255,0.5)" />
        <circle cx="40" cy="78" r="1.5" fill="rgba(100,200,255,0.5)" />
        <text x="40" y="95" textAnchor="middle" fontSize="8" fill="rgba(100,200,255,0.6)" fontWeight="bold">
          Shower
        </text>
      </g>

      {/* Food icon */}
      <g>
        <circle cx="100" cy="52" r="6" fill="none" stroke="rgba(100,200,100,0.6)" strokeWidth="1.5" />
        <path d="M 96 52 L 104 52" stroke="rgba(100,200,100,0.6)" strokeWidth="1" />
        <path d="M 100 48 L 100 56" stroke="rgba(100,200,100,0.6)" strokeWidth="1" />
        <rect x="90" y="63" width="20" height="15" rx="2" fill="none" stroke="rgba(100,200,100,0.6)" strokeWidth="1.5" />
        <text x="100" y="95" textAnchor="middle" fontSize="8" fill="rgba(100,200,100,0.6)" fontWeight="bold">
          Nutrition
        </text>
      </g>

      {/* Sleep icon */}
      <g>
        <circle cx="160" cy="55" r="6" fill="none" stroke="rgba(200,150,100,0.6)" strokeWidth="1.5" />
        <path d="M 157 52 Q 160 48 163 52" fill="rgba(200,150,100,0.3)" stroke="rgba(200,150,100,0.6)" strokeWidth="1" />
        <path d="M 160 55 L 160 70" stroke="rgba(200,150,100,0.6)" strokeWidth="2" />
        <path d="M 155 65 L 160 70 L 165 65" stroke="rgba(200,150,100,0.6)" strokeWidth="1.5" fill="none" />
        <text x="160" y="95" textAnchor="middle" fontSize="8" fill="rgba(200,150,100,0.6)" fontWeight="bold">
          Sleep
        </text>
      </g>

      {/* Exercise icon */}
      <g>
        <circle cx="220" cy="50" r="5" fill="none" stroke="rgba(200,100,200,0.6)" strokeWidth="1.5" />
        <line x1="220" y1="55" x2="220" y2="65" stroke="rgba(200,100,200,0.6)" strokeWidth="2" />
        <line x1="215" y1="60" x2="225" y2="60" stroke="rgba(200,100,200,0.6)" strokeWidth="1.5" />
        <line x1="218" y1="65" x2="210" y2="78" stroke="rgba(200,100,200,0.6)" strokeWidth="1.5" />
        <line x1="222" y1="65" x2="230" y2="78" stroke="rgba(200,100,200,0.6)" strokeWidth="1.5" />
        <text x="220" y="95" textAnchor="middle" fontSize="8" fill="rgba(200,100,200,0.6)" fontWeight="bold">
          Exercise
        </text>
      </g>

      {/* Center message */}
      <text x="120" y="125" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontStyle="italic">
        A balanced life helps you grow strong!
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORER DEFINITION
// ─────────────────────────────────────────────────────────────────────────────

const PUBERTY_EXPLORER: ExplorerDef = {
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
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => SVG_R3(),
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_q_growth_hormones", "r3_q_diet_change", "r3_q_age_number", "r3_q_weather"],
          answer: "r3_q_growth_hormones",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => SVG_R4(),
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_sweat_oil", "r4_colder", "r4_required_rule", "r4_faster_dirty"],
          answer: "r4_sweat_oil",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40" />,
      questions: [
        {
          question: "q1_q",
          choices: ["q1_815", "q1_1518", "q1_68", "q1_1820"],
          answer: "q1_815",
        },
        {
          question: "q2_q",
          choices: ["q2_pituitary", "q2_thyroid", "q2_pineal", "q2_pancreas"],
          answer: "q2_pituitary",
        },
        {
          question: "q3_q",
          choices: ["q3_regular_hygiene", "q3_skip_sleep", "q3_avoid_food", "q3_no_exercise"],
          answer: "q3_regular_hygiene",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function PubertyExplorer({
  color = "#9B59B6",
  lang = "en",
  onDone,
}: {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}) {
  return <ExplorerEngine def={PUBERTY_EXPLORER} color={color} lang={lang} onDone={onDone} />;
}
