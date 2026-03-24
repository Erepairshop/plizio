"use client";
// SafetyFirstAidExplorer.tsx — Sachkunde Island i7: Safety & First Aid (K2)
// Topics: 1) Otthoni biztonság 2) Gyalogos közlekedés 3) Biciklis biztonság 4) Elsősegély doboz 5) Segítség hívása

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// SVG Importok a megadott mappákból:
import { PedestrianRulesSvg, BicycleSafetySvg } from "@/app/astro-sachkunde/svg/k1/TrafficRecyclingSvg";
import { EmergencySvg, HomeSafetySvg } from "@/app/astro-sachkunde/svg/k2/EverydayLifeSvg";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ──────────────────

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEE2E2" rx="20" />
      {/* Elsősegély doboz */}
      <g transform="translate(70, 75)">
        <rect x="-30" y="-20" width="60" height="40" fill="#FFFFFF" rx="4" />
        <path d="M -10,-20 L -10,-30 L 10,-30 L 10,-20" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <path d="M -10,0 L 10,0 M 0,-10 L 0,10" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* Sebtapasz */}
      <g transform="translate(150, 50)">
        <rect x="-15" y="-6" width="30" height="12" fill="#FDBA74" rx="6" transform="rotate(15)" />
        <rect x="-5" y="-5" width="10" height="10" fill="#FFEDD5" rx="2" transform="rotate(15)" />
      </g>
      {/* Kötszer (Tekercs) */}
      <g transform="translate(170, 95)">
        <rect x="-10" y="-12" width="20" height="24" fill="#FFFFFF" rx="2" />
        <ellipse cx="0" cy="-12" rx="10" ry="4" fill="#F1F5F9" />
        <ellipse cx="0" cy="12" rx="10" ry="4" fill="#E2E8F0" />
        <line x1="-10" y1="-5" x2="10" y2="-5" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="-10" y1="2" x2="10" y2="2" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M 10,0 Q 20,5 25,15" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Biztonság és Elsősegély",
    // T1: Otthoni biztonság
    t1_title: "Vigyázz otthon is!",
    t1_text: "Otthon is történhetnek balesetek, ha nem vigyázunk. Forró vagy éles dolgokhoz nem szabad nyúlni felnőtt nélkül!",
    t1_b1: "A tűzhely és a sütő nagyon forró lehet.",
    t1_b2: "A késekkel és ollókkal könnyen megvághatjuk magunkat.",
    t1_b3: "Biztonságos a játékokkal játszani a szőnyegen.",
    t1_inst: "Válogasd szét: Mi biztonságos és mi veszélyes?",
    t1_bucket_biztonsagos: "Biztonságos ✅",
    t1_bucket_veszelyes: "Veszélyes ❌",
    t1_item_b1: "Rajzolás az asztalnál", t1_item_b2: "Építőkockázás",
    t1_item_v1: "Tűzhely piszkálása", t1_item_v2: "Késsel játszás",
    t1_q: "Mit csinálj, ha valami eltörik és üvegszilánkok vannak a földön?",
    t1_q_a: "Szólok egy felnőttnek, hogy segítsen", t1_q_b: "Összeszedem puszta kézzel", t1_q_c: "Rálépek", t1_q_d: "Elbújok az ágy alá",

    // T2: Gyalogos közlekedés
    t2_title: "A zebránál",
    t2_text: "Az utcán mindig nagyon kell figyelni az autókra. Ha át akarunk menni az úton, mindig a zebrát keressük!",
    t2_b1: "Mindig állj meg a járda szélén.",
    t2_b2: "Nézz körül: balra, jobbra, majd újra balra.",
    t2_b3: "Csak akkor indulj, ha az autók megálltak.",
    t2_inst: "Tedd sorba, mit teszel, ha át akarsz menni az úton!",
    t2_w1: "Megállok a járdán", t2_w2: "Körülnézek", t2_w3: "Megvárom, amíg megállnak", t2_w4: "Átsétálok",
    t2_q: "Hol a legbiztonságosabb átkelni az úton?",
    t2_q_a: "A zebrán (kijelölt gyalogos-átkelőhelyen)", t2_q_b: "Két parkoló autó között", t2_q_c: "Ahol nincs felfestés", t2_q_d: "A kanyarban",

    // T3: Biciklis biztonság
    t3_title: "Biciklizz okosan!",
    t3_text: "A biciklizés szuper, de fontos a védelem! A felszerelések megvédenek a sérülésektől és segítenek, hogy mások is lássanak minket.",
    t3_b1: "A bukósisak a legfontosabb, védi a fejedet.",
    t3_b2: "A csengővel jelezni tudsz a gyalogosoknak.",
    t3_b3: "A lámpák és a fényvisszaverők sötétben is láthatóvá tesznek.",
    t3_inst: "Párosítsd a felszerelést a feladatával!",
    t3_l1: "Bukósisak", t3_r1: "Védi a fejedet",
    t3_l2: "Csengő", t3_r2: "Hangjelzést ad",
    t3_l3: "Lámpa", t3_r3: "Láthatóvá tesz sötétben",
    t3_q: "Melyik felszerelés kötelező, ha sötétedik?",
    t3_q_a: "Lámpa és fényvisszaverő", t3_q_b: "Rádió", t3_q_c: "Napszemüveg", t3_q_d: "Sál",

    // T4: Elsősegély
    t4_title: "Az elsősegély doboz",
    t4_text: "Ha valaki kisebb balesetet szenved (pl. lehorzsolja a térdét), az elsősegély dobozban mindent megtalálunk, ami segít.",
    t4_b1: "A sebtapasz a kis vágásokra jó.",
    t4_b2: "A kötszerrel be lehet tekerni a sebet.",
    t4_b3: "A dobozon gyakran egy piros (vagy zöld) kereszt van.",
    t4_inst: "Keresd meg az elsősegélyhez szükséges dolgokat!",
    t4_area_box: "Elsősegély doboz",
    t4_area_plaster: "Sebtapasz",
    t4_area_bandage: "Kötszer (tekercs)",
    t4_q: "Mit teszünk egy apró karcolásra, hogy ne menjen bele a kosz?",
    t4_q_a: "Sebtapaszt", t4_q_b: "Sarat", t4_q_c: "Vizet", t4_q_d: "Ragasztót",

    // T5: Segítség hívása
    t5_title: "Ha nagyobb a baj",
    t5_text: "Ha nagy baj van, vagy valaki nagyon megüti magát, azonnal segítséget kell kérni egy felnőttől, vagy hívni a mentőket.",
    t5_b1: "Maradj nyugodt, és mondd el, mi történt.",
    t5_b2: "Mondd el pontosan, hol vagytok.",
    t5_b3: "Európában a 112 a segélyhívó szám.",
    t5_inst: "Egészítsd ki a mondatot!",
    t5_gap_sentence: "Ha nagyon nagy a baj, a {gap} számot kell tárcsázni a telefonon.",
    t5_c51: "112-es", t5_c52: "123-as", t5_c53: "000-ás",
    t5_q: "Mit kell elsőként mondanod, ha felhívod a mentőket?",
    t5_q_a: "Azt, hogy mi történt és hol vagyunk", t5_q_b: "Azt, hogy mi a kedvenc ételem", t5_q_c: "Hogy hány óra van", t5_q_d: "Nem szabad semmit mondani",
  },
  en: {
    explorer_title: "Safety & First Aid",
    t1_title: "Safe at Home", t1_text: "Accidents can happen at home if we are not careful. Do not touch hot or sharp things without an adult!",
    t1_b1: "The stove and oven can be very hot.", t1_b2: "Knives and scissors can cut us easily.", t1_b3: "Playing with toys on the rug is safe.",
    t1_inst: "Sort it out: What is safe and what is dangerous?",
    t1_bucket_biztonsagos: "Safe ✅", t1_bucket_veszelyes: "Dangerous ❌",
    t1_item_b1: "Drawing at the table", t1_item_b2: "Playing with building blocks",
    t1_item_v1: "Touching the stove", t1_item_v2: "Playing with knives",
    t1_q: "What should you do if something breaks and there is glass on the floor?",
    t1_q_a: "Tell an adult to help", t1_q_b: "Pick it up with bare hands", t1_q_c: "Step on it", t1_q_d: "Hide under the bed",

    t2_title: "Crossing the Road", t2_text: "Always watch out for cars on the street. If you want to cross, always look for the zebra crossing!",
    t2_b1: "Always stop at the edge of the sidewalk.", t2_b2: "Look around: left, right, and left again.", t2_b3: "Only go when the cars have stopped.",
    t2_inst: "Put the steps in order when crossing the road!",
    t2_w1: "Stop at the edge", t2_w2: "Look around", t2_w3: "Wait for cars to stop", t2_w4: "Walk across",
    t2_q: "Where is the safest place to cross the road?",
    t2_q_a: "At the zebra crossing", t2_q_b: "Between two parked cars", t2_q_c: "Where there are no lines", t2_q_d: "In a curve",

    t3_title: "Ride Smart", t3_text: "Cycling is great, but protection is important! Gear protects us from injuries and helps others see us.",
    t3_b1: "The helmet is the most important, it protects your head.", t3_b2: "With the bell, you can warn pedestrians.", t3_b3: "Lights and reflectors make you visible in the dark.",
    t3_inst: "Match the gear with its job!",
    t3_l1: "Helmet", t3_r1: "Protects your head",
    t3_l2: "Bell", t3_r2: "Gives a warning sound",
    t3_l3: "Lights", t3_r3: "Makes you visible in the dark",
    t3_q: "Which equipment is mandatory when it gets dark?",
    t3_q_a: "Lights and reflectors", t3_q_b: "A radio", t3_q_c: "Sunglasses", t3_q_d: "A scarf",

    t4_title: "The First Aid Kit", t4_text: "If someone has a minor accident (like scraping a knee), the first aid kit has everything to help.",
    t4_b1: "A plaster is good for small cuts.", t4_b2: "A bandage can wrap around a wound.", t4_b3: "The box often has a red (or green) cross on it.",
    t4_inst: "Find the first aid items on the picture!",
    t4_area_box: "First Aid Kit",
    t4_area_plaster: "Plaster",
    t4_area_bandage: "Bandage roll",
    t4_q: "What do we put on a tiny scratch to keep the dirt out?",
    t4_q_a: "A plaster", t4_q_b: "Mud", t4_q_c: "Water", t4_q_d: "Glue",

    t5_title: "Calling for Help", t5_text: "If there is a big emergency or someone is badly hurt, call an adult immediately or call the ambulance.",
    t5_b1: "Stay calm and say what happened.", t5_b2: "Tell them exactly where you are.", t5_b3: "In Europe, 112 is the emergency number.",
    t5_inst: "Fill in the missing word!",
    t5_gap_sentence: "If there is a big emergency, you must dial {gap} on the phone.",
    t5_c51: "112", t5_c52: "123", t5_c53: "000",
    t5_q: "What is the first thing you must say when calling an ambulance?",
    t5_q_a: "What happened and where we are", t5_q_b: "What my favorite food is", t5_q_c: "What time it is", t5_q_d: "You shouldn't say anything",
  },
  de: {
    explorer_title: "Sicherheit & Erste Hilfe",
    t1_title: "Sicher zu Hause", t1_text: "Auch zu Hause können Unfälle passieren. Fasse heiße oder scharfe Dinge nie ohne Erwachsene an!",
    t1_b1: "Herd und Ofen können sehr heiß sein.", t1_b2: "An Messern und Scheren können wir uns schneiden.", t1_b3: "Mit Spielzeug auf dem Teppich zu spielen ist sicher.",
    t1_inst: "Sortiere: Was ist sicher und was ist gefährlich?",
    t1_bucket_biztonsagos: "Sicher ✅", t1_bucket_veszelyes: "Gefährlich ❌",
    t1_item_b1: "Am Tisch malen", t1_item_b2: "Mit Bauklötzen spielen",
    t1_item_v1: "Den Herd anfassen", t1_item_v2: "Mit Messern spielen",
    t1_q: "Was tust du, wenn Glas auf den Boden fällt und zerbricht?",
    t1_q_a: "Ich hole einen Erwachsenen zur Hilfe", t1_q_b: "Ich hebe es mit den Händen auf", t1_q_c: "Ich trete darauf", t1_q_d: "Ich verstecke mich",

    t2_title: "Am Zebrastreifen", t2_text: "Auf der Straße musst du gut auf Autos achten. Nutze immer den Zebrastreifen zum Überqueren!",
    t2_b1: "Bleibe immer am Rand stehen.", t2_b2: "Schau dich um: links, rechts, nochmal links.", t2_b3: "Geh erst los, wenn die Autos stehen.",
    t2_inst: "Bringe die Schritte in die richtige Reihenfolge!",
    t2_w1: "Am Rand stehen bleiben", t2_w2: "Umschauen", t2_w3: "Warten, bis Autos stehen", t2_w4: "Rübergehen",
    t2_q: "Wo ist es am sichersten, die Straße zu überqueren?",
    t2_q_a: "Am Zebrastreifen", t2_q_b: "Zwischen parkenden Autos", t2_q_c: "Wo keine Linien sind", t2_q_d: "In einer Kurve",

    t3_title: "Sicher Rad fahren", t3_text: "Fahrradfahren ist toll, aber Schutz ist wichtig! Ausrüstung schützt uns und macht uns sichtbar.",
    t3_b1: "Der Helm ist das Wichtigste, er schützt den Kopf.", t3_b2: "Mit der Klingel kannst du Fußgänger warnen.", t3_b3: "Licht und Reflektoren machen dich im Dunkeln sichtbar.",
    t3_inst: "Verbinde die Ausrüstung mit ihrer Aufgabe!",
    t3_l1: "Helm", t3_r1: "Schützt deinen Kopf",
    t3_l2: "Klingel", t3_r2: "Gibt ein Warnsignal",
    t3_l3: "Licht", t3_r3: "Macht dich im Dunkeln sichtbar",
    t3_q: "Was ist Pflicht, wenn es dunkel wird?",
    t3_q_a: "Licht und Reflektoren", t3_q_b: "Ein Radio", t3_q_c: "Eine Sonnenbrille", t3_q_d: "Ein Schal",

    t4_title: "Der Erste-Hilfe-Kasten", t4_text: "Wenn sich jemand leicht verletzt (z.B. das Knie aufschürft), hilft der Erste-Hilfe-Kasten.",
    t4_b1: "Ein Pflaster ist gut für kleine Schnitte.", t4_b2: "Mit einer Binde kann man eine Wunde einwickeln.", t4_b3: "Auf dem Kasten ist oft ein rotes (oder grünes) Kreuz.",
    t4_inst: "Finde die Erste-Hilfe-Dinge auf dem Bild!",
    t4_area_box: "Erste-Hilfe-Kasten",
    t4_area_plaster: "Pflaster",
    t4_area_bandage: "Verbandsrolle",
    t4_q: "Was machen wir auf einen kleinen Kratzer, damit kein Schmutz reinkommt?",
    t4_q_a: "Ein Pflaster", t4_q_b: "Matsch", t4_q_c: "Wasser", t4_q_d: "Kleber",

    t5_title: "Hilfe rufen", t5_text: "Wenn es ein großer Notfall ist, hol sofort einen Erwachsenen oder ruf den Notruf an.",
    t5_b1: "Bleib ruhig und erzähle, was passiert ist.", t5_b2: "Sag genau, wo du bist.", t5_b3: "In Europa ist die 112 die Notrufnummer.",
    t5_inst: "Ergänze den Satz!",
    t5_gap_sentence: "Bei einem großen Notfall wählst du am Telefon die {gap}.",
    t5_c51: "112", t5_c52: "123", t5_c53: "000",
    t5_q: "Was musst du als Erstes sagen, wenn du den Notruf wählst?",
    t5_q_a: "Was passiert ist und wo wir sind", t5_q_b: "Was mein Lieblingsessen ist", t5_q_c: "Wie spät es ist", t5_q_d: "Ich sage gar nichts",
  },
  ro: {
    explorer_title: "Siguranță și Prim Ajutor",
    t1_title: "Sigur acasă", t1_text: "Accidentele se pot întâmpla și acasă dacă nu suntem atenți. Nu atinge lucruri fierbinți sau ascuțite fără adulți!",
    t1_b1: "Aragazul și cuptorul pot fi foarte fierbinți.", t1_b2: "Ne putem tăia ușor cu cuțite și foarfece.", t1_b3: "E sigur să ne jucăm cu jucării pe covor.",
    t1_inst: "Sortează: Ce este sigur și ce este periculos?",
    t1_bucket_biztonsagos: "Sigur ✅", t1_bucket_veszelyes: "Periculos ❌",
    t1_item_b1: "Desenatul la masă", t1_item_b2: "Joaca cu cuburile",
    t1_item_v1: "Atingerea aragazului", t1_item_v2: "Joaca cu cuțite",
    t1_q: "Ce faci dacă se sparge ceva și sunt cioburi pe jos?",
    t1_q_a: "Chem un adult să mă ajute", t1_q_b: "Le adun cu mâinile goale", t1_q_c: "Calc pe ele", t1_q_d: "Mă ascund sub pat",

    t2_title: "Trecerea străzii", t2_text: "Pe stradă trebuie să fii foarte atent la mașini. Caută mereu trecerea de pietoni (zebra)!",
    t2_b1: "Oprește-te mereu la marginea trotuarului.", t2_b2: "Uită-te stânga, dreapta și iar stânga.", t2_b3: "Treci doar când mașinile s-au oprit.",
    t2_inst: "Pune pașii în ordine pentru traversare!",
    t2_w1: "Mă opresc la margine", t2_w2: "Mă asigur", t2_w3: "Aștept oprirea mașinilor", t2_w4: "Traversez",
    t2_q: "Unde este cel mai sigur să traversezi strada?",
    t2_q_a: "Pe trecerea de pietoni (zebră)", t2_q_b: "Între două mașini parcate", t2_q_c: "Unde nu sunt marcaje", t2_q_d: "În curbă",

    t3_title: "Biciclist deștept", t3_text: "Mersul pe bicicletă e super, dar protecția e importantă! Echipamentul ne protejează și ne face vizibili.",
    t3_b1: "Casca este cea mai importantă, îți protejează capul.", t3_b2: "Cu soneria poți avertiza pietonii.", t3_b3: "Farurile și reflectoarele te fac vizibil pe întuneric.",
    t3_inst: "Potrivește echipamentul cu rolul său!",
    t3_l1: "Cască", t3_r1: "Îți protejează capul",
    t3_l2: "Sonerie", t3_r2: "Dă un semnal sonor",
    t3_l3: "Far", t3_r3: "Te face vizibil pe întuneric",
    t3_q: "Care echipament este obligatoriu când se întunecă?",
    t3_q_a: "Farurile și reflectoarele", t3_q_b: "Un radio", t3_q_c: "Ochelari de soare", t3_q_d: "Un fular",

    t4_title: "Trusa de prim ajutor", t4_text: "Dacă cineva are un mic accident (ex. își julește genunchiul), trusa de prim ajutor are de toate.",
    t4_b1: "Plasturele este bun pentru tăieturi mici.", t4_b2: "Un bandaj poate fi înfășurat în jurul rănii.", t4_b3: "Cutia are adesea o cruce roșie (sau verde).",
    t4_inst: "Găsește elementele de prim ajutor în imagine!",
    t4_area_box: "Trusă de prim ajutor",
    t4_area_plaster: "Plasture",
    t4_area_bandage: "Rolă de bandaj",
    t4_q: "Ce punem pe o zgârietură mică ca să nu intre murdăria?",
    t4_q_a: "Un plasture", t4_q_b: "Noroi", t4_q_c: "Apă", t4_q_d: "Lipici",

    t5_title: "Chemarea ajutorului", t5_text: "Dacă este o urgență mare, cheamă imediat un adult sau sună la ambulanță.",
    t5_b1: "Rămâi calm și spune ce s-a întâmplat.", t5_b2: "Spune exact unde vă aflați.", t5_b3: "În Europa, 112 este numărul de urgență.",
    t5_inst: "Completează propoziția!",
    t5_gap_sentence: "Dacă este o urgență mare, trebuie să formezi la telefon {gap}.",
    t5_c51: "112", t5_c52: "123", t5_c53: "000",
    t5_q: "Ce trebuie să spui prima dată când suni la ambulanță?",
    t5_q_a: "Ce s-a întâmplat și unde suntem", t5_q_b: "Care este mâncarea mea preferată", t5_q_c: "Cât este ceasul", t5_q_d: "Nu trebuie să spui nimic",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <HomeSafetySvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "biztonsagos", label: "t1_bucket_biztonsagos" },
        { id: "veszelyes", label: "t1_bucket_veszelyes" },
      ],
      items: [
        { text: "t1_item_b1", bucketId: "biztonsagos" },
        { text: "t1_item_v1", bucketId: "veszelyes" },
        { text: "t1_item_b2", bucketId: "biztonsagos" },
        { text: "t1_item_v2", bucketId: "veszelyes" },
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
    svg: (lang) => <PedestrianRulesSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctOrder: [0, 1, 2, 3],
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
    svg: (lang) => <BicycleSafetySvg lang={lang} />,
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
      hint2: "t3_b3",
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
      type: "label-diagram",
      areas: [
        { id: "box",     x: 35, y: 55, label: "t4_area_box" },
        { id: "plaster", x: 65, y: 35, label: "t4_area_plaster" },
        { id: "bandage", x: 75, y: 70, label: "t4_area_bandage" },
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
    svg: (lang) => <EmergencySvg lang={lang} />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_gap_sentence",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_b3",
      hint2: "t5_b1",
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
  icon: "🚑",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SafetyFirstAidExplorer = memo(function SafetyFirstAidExplorer({
  color = "#EF4444", // Piros a figyelemfelhívás és az elsősegély (kereszt) miatt
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
      explorerId="sachkunde_k2_safety_firstaid" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default SafetyFirstAidExplorer;
