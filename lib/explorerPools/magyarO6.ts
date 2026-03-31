// lib/explorerPools/magyarO6.ts

import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS (hu)
// ─────────────────────────────────────────────────────────────────────────────

export const MAGYAR_O6_I1_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Mondatok Világa",
    t1_title: "Mellérendelő mondatok",
    t1_text: "Két vagy több egyenrangú tagmondat kapcsolata. Lehet kapcsolatos, ellentétes, választó stb.",
    t1_b1: "Kapcsolatos", t1_b2: "Ellentétes",
    t1_i1: "Péter olvas, és Anna ír.", t1_i2: "Süt a nap, de fúj a szél.", t1_i3: "Eszik és iszik.", t1_i4: "Tanult, mégis megbukott.",
    t1_inst: "Válogasd szét a mondatokat!",
    t2_title: "Kapcsolatos mondatok",
    t2_text: "A tagmondatok tartalma között egyszerű összefüggés van. Kötőszavai: és, s, meg, is-is.",
    t2_l1: "Péter fut", t2_r1: "és Anna nevet.", t2_l2: "Süt a nap", t2_r2: "meg fúj a szél.",
    t2_inst: "Párosítsd a tagmondatokat!",
    t3_title: "Ellentétes mondatok",
    t3_text: "A tagmondatok tartalma szemben áll egymással. Kötőszavai: de, azonban, ellenben, mégis.",
    t3_sent: "Szeretnék menni, ___ nincs időm.", t3_c1: "de", t3_c2: "és", t3_c3: "vagy",
    t3_inst: "Melyik kötőszó illik bele?",
    t4_title: "Választó mondatok",
    t4_text: "A tagmondatok közül választhatunk. Kötőszavai: vagy, vagy-vagy, akár-akár.",
    t4_q: "Melyik kötőszó jellemző a választó mondatra?",
    t4_t1: "vagy", t4_t2: "és", t4_t3: "de",
    t4_inst: "Válaszd ki a helyes kötőszót!",
    t5_title: "Alárendelő mondatok",
    t5_text: "Az egyik tagmondat (mellékmondat) kiegészíti a másikat (főmondat).",
    t5_b1: "Főmondat", t5_b2: "Mellékmondat",
    t5_i1: "Azt mondta,", t5_i2: "hogy eljön.", t5_i3: "Ott lakunk,", t5_i4: "ahol a fák vannak.",
    t5_inst: "Válogasd szét a tagmondatokat!",
    t6_title: "Tárgyi alárendelés",
    t6_text: "A mellékmondat a főmondat tárgyát fejti ki. Kérdése: Mit?",
    t6_tok1: "Azt", t6_tok2: "akarom", t6_tok3: ",", t6_tok4: "hogy", t6_tok5: "tanulj", t6_tok6: "!",
    t6_inst: "Keresd meg a mellékmondatot bevezető kötőszót!",
    t7_title: "Jelzői alárendelés",
    t7_text: "A mellékmondat a főmondat egyik névszójához kapcsolódik jelzőként.",
    t7_l1: "Az a könyv,", t7_r1: "amit olvastam.", t7_l2: "Olyan ház,", t7_r2: "amelyik kék.",
    t7_inst: "Párosítsd össze!",
    t8_title: "Határozói alárendelés",
    t8_text: "A mellékmondat a főmondat állítmányának körülményeit (hely, idő, ok stb.) adja meg.",
    t8_sent: "Akkor jöttem, ___ hívtál.", t8_c1: "amikor", t8_c2: "mert", t8_c3: "hogy",
    t8_inst: "Pótold a hiányzó szót!",
    t9_title: "Kötőszók szerepe",
    t9_text: "A kötőszók mutatják meg a tagmondatok közötti nyelvtani és logikai viszonyt.",
    t9_q: "Melyik szó alárendelő kötőszó?",
    t9_t1: "hogy", t9_t2: "és", t9_t3: "vagy",
    t9_inst: "Válaszd ki!",
    t10_title: "Szórend a mondatban",
    t10_text: "A magyar nyelvben a szórend változatos, de a hangsúlyos elem az állítmány elé kerül.",
    t10_w1: "Anna", t10_w2: "tegnap", t10_w3: "olvasott", t10_w4: "egy könyvet.",
    t10_inst: "Tedd sorrendbe a szavakat!",
  }
};

export const MAGYAR_O6_I2_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Képes Beszéd",
    t1_title: "Hasonlat",
    t1_text: "Két dolgot vetünk össze közös tulajdonságuk alapján a 'mint' szóval.",
    t1_sent: "Olyan, mint egy ___.", t1_c1: "színpad", t1_c2: "folyó", t1_c3: "asztal",
    t1_inst: "Fejezd be a hasonlatot!",
    t2_title: "Metafora",
    t2_text: "Két fogalom azonosítása közös tulajdonság alapján, kötőszó nélkül.",
    t2_l1: "Az élet", t2_r1: "színpad.", t2_l2: "A remény", t2_r2: "csillag.",
    t2_inst: "Párosítsd az azonosításokat!",
    t3_title: "Megszemélyesítés",
    t3_text: "Élettelen dolgok felruházása emberi tulajdonságokkal vagy cselekvéssel.",
    t3_q: "Melyik mondatban van megszemélyesítés?",
    t3_t1: "A szél suttog.", t3_t2: "A szél fúj.", t3_t3: "Hideg a szél.",
    t3_inst: "Keresd az emberi tulajdonságot!",
    t4_title: "Metonímia",
    t4_text: "Névátvitel térbeli, időbeli vagy anyagbeli érintkezés alapján (pl. egy tálat evett).",
    t4_b1: "Metonímia", t4_b2: "Nem az",
    t4_i1: "Iszik egy pohárral.", t4_i2: "Olvasom Aranyt.", t4_i3: "Szép a ház.", t4_i4: "Fut a fiú.",
    t4_inst: "Válogasd szét a kifejezéseket!",
    t5_title: "Szinonimák",
    t5_text: "Azonos vagy hasonló jelentésű szavak, amelyek változatosabbá teszik a beszédet.",
    t5_l1: "gyors", t5_r1: "sebes", t5_l2: "néz", t5_r2: "tekint", t5_l3: "szép", t5_r3: "gyönyörű",
    t5_inst: "Keresd a szópárokat!",
    t6_title: "Antonimák (Ellentétek)",
    t6_text: "Egymással ellentétes jelentésű szavak (pl. édes - savanyú).",
    t6_l1: "nagy", t6_r1: "kicsi", t6_l2: "hideg", t6_r2: "meleg", t6_l3: "okos", t6_r3: "buta",
    t6_inst: "Párosítsd az ellentéteket!",
    t7_title: "Homonimák",
    t7_text: "Azonos alakú, de teljesen eltérő jelentésű szavak (pl. bank).",
    t7_q: "Melyik szónak van két teljesen más jelentése?",
    t7_t1: "fog", t7_t2: "ház", t7_t3: "autó",
    t7_inst: "Keresd az azonos alakú szót!",
    t8_title: "Többjelentésű szavak",
    t8_text: "Egy alapjelentésből kiinduló, összefüggő jelentések (pl. a kör jelentései).",
    t8_tok1: "szem", t8_tok2: "fül", t8_tok3: "láb", t8_tok4: "asztal", t8_tok5: "könyv",
    t8_inst: "Kattints a többjelentésű szavakra!",
    t9_title: "Hangulatfestő szavak",
    t9_text: "Olyan szavak, amelyek hangzása kifejezi a cselekvés vagy dolog hangulatát (pl. cammog).",
    t9_b1: "Hangulatfestő", t9_b2: "Neutrális",
    t9_i1: "battyog", t9_i2: "surran", t9_i3: "megy", t9_i4: "halad",
    t9_inst: "Válogasd szét a szavakat!",
    t10_title: "Ritmus a versben",
    t10_text: "A hosszú és rövid szótagok váltakozása adja a vers zeneiségét.",
    t10_l1: "ti-ti-tá", t10_r1: "Anapesztus", t10_l2: "tá-ti", t10_r2: "Trocheus",
    t10_inst: "Párosítsd a ritmust a névvel!",
  }
};

export const MAGYAR_O6_I3_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szavak Eredete",
    t1_title: "Jövevényszavak",
    t1_text: "Más nyelvekből átvett, a magyar nyelvhez idomult szavak.",
    t1_b1: "Szláv", t1_b2: "Német",
    t1_i1: "asztal", t1_i2: "udvar", t1_i3: "kastély", t1_i4: "polgár",
    t1_inst: "Hová tartoznak a szavak?",
    t2_title: "Idegen szavak",
    t2_text: "Olyan szavak, amelyek még nem simultak bele teljesen a nyelvünkbe.",
    t2_l1: "computer", t2_r1: "számítógép", t2_l2: "display", t2_r2: "képernyő",
    t2_inst: "Párosítsd az idegen szót a magyarral!",
    t3_title: "Szóösszetétel",
    t3_text: "Két vagy több önálló szó összekapcsolása egy új fogalommá.",
    t3_l1: "asztal", t3_r1: "láb", t3_l2: "iskola", t3_r2: "táska", t3_l3: "számító", t3_r3: "gép",
    t3_inst: "Alkosd meg az összetett szavakat!",
    t4_title: "Szóképzés",
    t4_text: "Alapszóból képző segítségével új szót hozunk létre.",
    t4_sent: "A 'szép' szóból a '___' képzővel lesz 'szépség'.", t4_c1: "-ség", t4_c2: "-val", t4_c3: "-nak",
    t4_inst: "Melyik a jó képző?",
    t5_title: "Prefixum és Szuffixum",
    t5_text: "Szóeleji (prefixum/igekötő) és szóvégi (szuffixum) toldalékok.",
    t5_b1: "Igekötő", t5_b2: "Képző/Jel",
    t5_i1: "be-", t5_i2: "ki-", t5_i3: "-ság", t5_i4: "-abb",
    t5_inst: "Csoportosítsd a toldalékokat!",
    t6_title: "Szócsaládok",
    t6_text: "Azonos tőből származó, jelentésben összefüggő szavak csoportja.",
    t6_tok1: "ír", t6_tok2: "írás", t6_tok3: "író", t6_tok4: "irat", t6_tok5: "itthon",
    t6_inst: "Keresd a családtagokat!",
    t7_title: "Etimológia",
    t7_text: "A szavak eredetével és történetével foglalkozó tudományág.",
    t7_q: "Mit kutat az etimológia?",
    t7_t1: "A szavak eredetét", t7_t2: "A helyesírást", t7_t3: "A kiejtést",
    t7_inst: "Válaszd ki a választ!",
    t8_title: "Nyelvcsaládok",
    t8_text: "Közös ősből származó nyelvek csoportja (pl. finnugor).",
    t8_b1: "Rokon", t8_b2: "Nem rokon",
    t8_i1: "Finn", t8_i2: "Észt", t8_i3: "Angol", t8_i4: "Német",
    t8_inst: "Válogasd szét a rokon nyelveket!",
    t9_title: "Finnugor alapnyelv",
    t9_text: "A magyar nyelv legősibb rétege ebből a közös forrásból ered.",
    t9_sent: "A magyar nyelv a ___ nyelvcsaládba tartozik.", t9_c1: "finnugor", t9_c2: "indoeurópai", t9_c3: "szláv",
    t9_inst: "Pótold a hiányzó szót!",
    t10_title: "Szókincs rétegződése",
    t10_text: "Alapszókincs, szaknyelv, tájnyelv és rétegnyelvek.",
    t10_q: "Hogy hívjuk a fiatalok sajátos nyelvét?",
    t10_t1: "Szleng", t10_t2: "Szaknyelv", t10_t3: "Archaizmus",
    t10_inst: "Válaszd ki a réteget!",
  }
};

export const MAGYAR_O6_I4_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Érvelő Gondolatok",
    t1_title: "Érvelés alapjai",
    t1_text: "Saját véleményünk alátámasztása okokkal és bizonyítékokkal.",
    t1_l1: "Tétel", t1_r1: "Állítás", t1_l2: "Érv", t1_r2: "Bizonyíték", t1_l3: "Zárás", t1_r3: "Összegzés",
    t1_inst: "Párosítsd az érvelés részeit!",
    t2_title: "Logikus érvelés",
    t2_text: "Tényekből levont logikus következtetések sora.",
    t2_sent: "Ha minden ember halandó, és Szókratész ember, akkor ő ___.", t2_c1: "halandó", t2_c2: "vidám", t2_c3: "gyors",
    t2_inst: "Vond le a következtetést!",
    t3_title: "Tapasztalati érvek",
    t3_text: "Saját vagy mások tapasztalatán alapuló meggyőzés.",
    t3_q: "Milyen érv ez: 'Tudom, mert tegnap is esett az eső'?",
    t3_t1: "Tapasztalati", t3_t2: "Logikai", t3_t3: "Tekintélyi",
    t3_inst: "Válaszd ki az érvtípust!",
    t4_title: "Cáfolat",
    t4_text: "Az ellenfél érveinek megdöntése ellenérvekkel.",
    t4_b1: "Állítás", t4_b2: "Cáfolat",
    t4_i1: "Mindenki ott volt.", t4_i2: "De én nem!", t4_i3: "Soha nem késik.", t4_i4: "Ma is késett.",
    t4_inst: "Válogasd szét a mondatokat!",
    t5_title: "Retorikai kérdés",
    t5_text: "Olyan kérdés, amelyre nem várunk választ, mert a válasz nyilvánvaló.",
    t5_sent: "Hát nem mindenki szeretne boldog lenni___", t5_c1: "?", t5_c2: ".", t5_c3: "!",
    t5_inst: "Milyen jel kell a végére?",
    t6_title: "Meggyőzés művészete",
    t6_text: "A hallgatóság érzelmeire és értelmére gyakorolt hatás.",
    t6_tok1: "adat", t6_tok2: "példa", t6_tok3: "érzelem", t6_tok4: "logika", t6_tok5: "zaj",
    t6_inst: "Melyek a meggyőzés eszközei?",
    t7_title: "Vita és párbeszéd",
    t7_text: "Különböző vélemények ütköztetése kulturált formában.",
    t7_l1: "Vitatkozó", t7_r1: "Érv", t7_l2: "Ellenfél", t7_r2: "Cáfolat",
    t7_inst: "Párosítsd a szereplőket a tetteikkel!",
    t8_title: "Manipuláció",
    t8_text: "A hallgatóság félrevezetése a tények elferdítésével vagy elhallgatásával.",
    t8_q: "Mi a manipuláció célja?",
    t8_t1: "Önérdekű befolyásolás", t8_t2: "Segítségnyújtás", t8_t3: "Tájékoztatás",
    t8_inst: "Válaszd ki a szándékot!",
    t9_title: "Érvelő esszé",
    t9_text: "Olyan írásmű, amelyben egy témáról fejtjük ki a véleményünket érvekkel.",
    t9_w1: "Bevezetés", t9_w2: "Tárgyalás", t9_w3: "Befejezés",
    t9_inst: "Tedd sorrendbe a vázlatot!",
    t10_title: "Nyilvános beszéd",
    t10_text: "Közönség előtt tartott, felépített mondanivaló.",
    t10_sent: "A beszéd elején fel kell kelteni az ___.", t10_c1: "érdeklődést", t10_c2: "álmot", t10_c3: "étvágyat",
    t10_inst: "Mi hiányzik a mondatból?",
  }
};

export const MAGYAR_O6_I5_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szövegek Világa",
    t1_title: "Szövegtípusok",
    t1_text: "A szövegek céljuk szerint lehetnek elbeszélők, leírók vagy érvelők.",
    t1_b1: "Leíró", t1_b2: "Elbeszélő",
    t1_i1: "A ház kék.", t1_i2: "Magas falak.", t1_i3: "Szaladt a fiú.", t1_i4: "Aztán megállt.",
    t1_inst: "Válogasd szét a mondatokat!",
    t2_title: "Szöveg szerkezete",
    t2_text: "Bevezetés, tárgyalás és befejezés alkotja a szöveg vázát.",
    t2_l1: "Bevezetés", t2_r1: "Témamegjölölés", t2_l2: "Tárgyalás", t2_r2: "Részletezés", t2_l3: "Befejezés", t2_r3: "Összegzés",
    t2_inst: "Párosítsd a részeket a funkcióval!",
    t3_title: "Bekezdés",
    t3_text: "A szöveg gondolati egysége, amelyet formailag beljebb kezdéssel jelölünk.",
    t3_q: "Mikor kezdünk új bekezdést?",
    t3_t1: "Új gondolatnál", t3_t2: "Minden mondatnál", t3_t3: "Minden szónál",
    t3_inst: "Válaszd ki a szabályt!",
    t4_title: "Szövegösszetartó erő",
    t4_text: "A mondatok közötti logikai és nyelvi kapcsolat (kohézió).",
    t4_tok1: "kötőszó", t4_tok2: "névmás", t4_tok3: "ismétlés", t4_tok4: "zaj", t4_tok5: "üresség",
    t4_inst: "Melyek segítik a szöveg összefüggését?",
    t5_title: "Cím és altéma",
    t5_text: "A cím megnevezi a témát, az alcímek pedig tagolják a kifejtést.",
    t5_sent: "A jó cím felkelti az ___.", t5_c1: "érdeklődést", t5_c2: "álmot", t5_c3: "éhséget",
    t5_inst: "Mi a feladata a címnek?",
    t6_title: "Szövegértelmezés",
    t6_text: "A szöveg mélyebb rétegeinek feltárása (miért írta a szerző?).",
    t6_q: "Mit jelent a kontextus?",
    t6_t1: "Beszédhelyzet", t6_t2: "Szószám", t6_t3: "Papírméret",
    t6_inst: "Válaszd ki a jelentést!",
    t7_title: "Tájékoztató szöveg",
    t7_text: "Célja az információközlés (pl. hír, hirdetés, tudósítás).",
    t7_b1: "Hír", t7_b2: "Hirdetés",
    t7_i1: "Tegnap esett.", t7_i2: "Megnyílt a bolt.", t7_i3: "Eladó bicikli.", t7_i4: "Olcsó ház.",
    t7_inst: "Csoportosítsd a szövegeket!",
    t8_title: "Szövegvázlat",
    t8_text: "A szöveg megírása előtt készített pontokba szedett terv.",
    t8_w1: "1. Kezdés", t8_w2: "2. Alpont", t8_w3: "3. Lezárás",
    t8_inst: "Tedd sorrendbe a vázlatpontokat!",
    t9_title: "Stílus és szöveg",
    t9_text: "A szóhasználat meghatározza a szöveg hangulatát és hitelességét.",
    t9_tok1: "választékos", t9_tok2: "közönséges", t9_tok3: "pontos", t9_tok4: "színes", t9_tok5: "szürke",
    t9_inst: "Keresd a stílusjelzőket!",
    t10_title: "Média és szöveg",
    t10_text: "A modern hírforrások (online, TV, rádió) szövegeinek sajátosságai.",
    t10_q: "Milyen az online hírek stílusa?",
    t10_t1: "Rövid és ütős", t10_t2: "Nagyon hosszú", t10_t3: "Kézzel írott",
    t10_inst: "Válaszd ki a jellemzőt!",
  }
};

export const MAGYAR_O6_I6_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Helyesírás Mester",
    t1_title: "Tulajdonnevek",
    t1_text: "Személyek, helyek, intézmények neveit mindig nagybetűvel írjuk.",
    t1_tok1: "Anna", t1_tok2: "Budapest", t1_tok3: "Duna", t1_tok4: "folyó", t1_tok5: "lány",
    t1_inst: "Kattints a nagybetűs nevekre!",
    t2_title: "Földrajzi nevek",
    t2_text: "Városok, országok, hegyek, vizek neveinek helyesírása.",
    t2_l1: "Magyar", t2_r1: "-ország", t2_l2: "Buda", t2_r2: "-pest", t2_l3: "Balaton", t2_r3: "-part",
    t2_inst: "Párosítsd össze a név elemeit!",
    t3_title: "Mozaikszók",
    t3_text: "Szavak kezdőbetűiből alkotott új szó, általában csupa nagybetűvel.",
    t3_sent: "Az UNESCO egy ___.", t3_c1: "mozaikszó", t3_c2: "ige", t3_c3: "főnév",
    t3_inst: "Mi a helyes megnevezés?",
    t4_title: "Írásjelek a mondatban",
    t4_text: "Vessző, kettőspont, gondolatjel használata a tagoláshoz.",
    t4_sent: "Azt mondta___ hogy eljön.", t4_c1: ",", t4_c2: ":", t4_c3: "-",
    t4_inst: "Melyik jel hiányzik?",
    t5_title: "Kettőzött betűk",
    t5_text: "Hosszú mássalhangzók jelölése két betűvel (pl. toll, reggel).",
    t5_b1: "Helyes", t5_b2: "Helytelen",
    t5_i1: "toll", t5_i2: "reggel", t5_i3: "alatt", t5_i4: "labba", t5_i5: "mehetett",
    t5_inst: "Melyik szó van jól írva?",
    t6_title: "J vagy LY?",
    t6_text: "A kiejtés azonos, de az írásmódot meg kell tanulni.",
    t6_q: "Melyik szó írása helyes?",
    t6_t1: "gólya", t6_t2: "gójya", t6_t3: "gólja",
    t6_inst: "Válaszd ki a jót!",
    t7_title: "Elválasztás szabályai",
    t7_text: "A szavakat szótagok szerint választjuk el a sor végén.",
    t7_sent: "ka-rá-___-ny", t7_c1: "cso", t7_c2: "cson", t7_c3: "csó",
    t7_inst: "Hogy választjuk el helyesen?",
    t8_title: "Mondatzáró írásjelek",
    t8_text: "A mondat végére pont, kérdőjel vagy felkiáltójel kerül.",
    t8_l1: "Esik az eső", t8_r1: ".", t8_l2: "Hová mész", t8_r2: "?", t8_l3: "Vigyázz", t8_r3: "!",
    t8_inst: "Párosítsd a mondatot a jellel!",
    t9_title: "Helyesírási szótár",
    t9_text: "Segítség, ha bizonytalanok vagyunk egy szó írásában.",
    t9_q: "Hol nézzük meg a szavak helyes írását?",
    t9_t1: "Helyesírási szótár", t9_t2: "Matekkönyv", t9_t3: "Térkép",
    t9_inst: "Válaszd a forrást!",
    t10_title: "Egyszerűsítés elve",
    t10_text: "Amikor a többjegyű mássalhangzók kettőzésekor csak az elsőt kettőzzük meg (pl. asszony).",
    t10_sent: "A___ony szó írása.", t10_c1: "ssz", t10_c2: "szsz", t10_c3: "sz",
    t10_inst: "Melyik a helyes forma?",
  }
};

export const MAGYAR_O6_I7_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Irodalmi Műhely",
    t1_title: "Műfajok: Novella",
    t1_text: "Rövid elbeszélő mű, kevés szereplővel, egy szálon futó cselekménnyel.",
    t1_q: "Milyen hosszú általában a novella?",
    t1_t1: "Rövid", t1_t2: "Több kötet", t1_t3: "Egy szó",
    t1_inst: "Válaszd ki a hosszát!",
    t2_title: "Műfajok: Regény",
    t2_text: "Hosszú epikai mű, sok szereplővel és több szálon futó történettel.",
    t2_l1: "Novella", t2_r1: "Rövid", t2_l2: "Regény", t2_r2: "Hosszú",
    t2_inst: "Párosítsd terjedelem szerint!",
    t3_title: "Az elbeszélő (Narrátor)",
    t3_text: "Aki a történetet elmondja. Lehet kívülálló vagy szereplő.",
    t3_q: "Hogy hívjuk azt, aki meséli a történetet?",
    t3_t1: "Narrátor", t3_t2: "Olvasó", t3_t3: "Papír",
    t3_inst: "Válaszd ki a szakkifejezést!",
    t4_title: "Jellemzés",
    t4_text: "A szereplők tulajdonságainak bemutatása (külső és belső jellemzés).",
    t4_b1: "Külső", t4_b2: "Belső",
    t4_i1: "magas", t4_i2: "szőke", t4_i3: "jószívű", t4_i4: "bátor",
    t4_inst: "Válogasd szét a jellemzőket!",
    t5_title: "Alaphelyzet és Fordulat",
    t5_text: "A cselekmény kezdete és a váratlan változás a történetben.",
    t5_sent: "A történet csúcspontja a ___.", t5_c1: "tetőpont", t5_c2: "kezdés", t5_c3: "vég",
    t5_inst: "Mi a legizgalmasabb rész?",
    t6_title: "Irodalmi hősök",
    t6_text: "A történet központi alakjai, akikkel azonosulni tudunk.",
    t6_tok1: "hős", t6_tok2: "ellenség", t6_tok3: "segítő", t6_tok4: "szék", t6_tok5: "asztal",
    t6_inst: "Keresd a szerepneveket!",
    t7_title: "Idő és Helyszín",
    t7_text: "Mikor és hol játszódik a történet? Ez adja a cselekmény keretét.",
    t7_l1: "Hol?", t7_r1: "Helyszín", t7_l2: "Mikor?", t7_r2: "Idő",
    t7_inst: "Párosítsd a kérdést a fogalommal!",
    t8_title: "Tanulság",
    t8_text: "A mű végén megfogalmazott erkölcsi üzenet vagy tapasztalat.",
    t8_q: "Hol van általában a tanulság?",
    t8_t1: "A végén", t8_t2: "Az elején", t8_t3: "Középen",
    t8_inst: "Keresd a helyét!",
    t9_title: "Illusztráció",
    t9_text: "A szöveget kísérő rajz vagy kép, amely segíti a megértést és a hangulatot.",
    t9_tok1: "rajz", t9_tok2: "festmény", t9_tok3: "fénykép", t9_tok4: "betű", t9_tok5: "hang",
    t9_inst: "Milyen lehet egy illusztráció?",
    t10_title: "Vers és Próza",
    t10_text: "Két alapvető irodalmi forma: a kötött ritmusú és a kötetlen beszéd.",
    t10_b1: "Vers", t10_b2: "Próza",
    t10_i1: "Rímek vannak.", t10_i2: "Ritmus.", t10_i3: "Folyószöveg.", t10_i4: "Bekezdések.",
    t10_inst: "Melyik jellemző melyikre?",
  }
};

export const MAGYAR_O6_I8_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Gyakorló Sziget",
    t1_title: "Mondatok rendezése",
    t1_text: "Tedd logikai sorrendbe a mondatokat az értelmes történethez.",
    t1_w1: "Egyszer", t1_w2: "volt,", t1_w3: "hol", t1_w4: "nem volt.",
    t1_inst: "Rendezd sorba a szavakat!",
    t2_title: "Helyesírási hiba",
    t2_text: "Keresd meg és javítsd ki a szövegben lévő hibákat.",
    t2_tok1: "Ma", t2_tok2: "van", t2_tok3: "szombat", t2_tok4: "muszály", t2_tok5: "menni",
    t2_inst: "Kattints a HIBÁS szóra!",
    t3_title: "Kérdés és Felelet",
    t3_text: "Válaszolj a szöveggel kapcsolatos kérdésekre.",
    t3_l1: "Ki jön?", t3_r1: "Péter.", t3_l2: "Hova?", t3_r2: "Haza.", t3_l3: "Mikor?", t3_r3: "Most.",
    t3_inst: "Párosítsd a kérdést a válasszal!",
    t4_title: "Szófajok keresése",
    t4_text: "Jelöld meg a megadott szófajú szavakat a mondatban.",
    t4_tok1: "A", t4_tok2: "nagy", t4_tok3: "kutya", t4_tok4: "gyorsan", t4_tok5: "szalad",
    t4_inst: "Melyik az IGE?",
    t5_title: "Kép és szó",
    t5_text: "Párosítsd a látott képet a leíró szavakkal.",
    t5_l1: "🐶", t5_r1: "kutya", t5_l2: "🐱", t5_r2: "macska", t5_l3: "🐭", t5_r3: "egér",
    t5_inst: "Párosítsd az emojit a szóval!",
    t6_title: "Ellentétes párok",
    t6_text: "Gyakorold az ellentétes jelentésű szavakat.",
    t6_l1: "vidám", t6_r1: "szomorú", t6_l2: "gazdag", t6_r2: "szegény",
    t6_inst: "Keresd az ellentéteket!",
    t7_title: "Hiányzó betű",
    t7_text: "Pótold a hiányzó betűket a szavakban.",
    t7_sent: "A mackó szereti a mé___et.", t7_c1: "z", t7_c2: "s", t7_c3: "sz",
    t7_inst: "Melyik betű kell a végére?",
    t8_title: "Mondatvég",
    t8_text: "Tedd ki a megfelelő írásjelet a mondat végére.",
    t8_sent: "Hű de meleg van___", t8_c1: "!", t8_c2: ".", t8_c3: "?",
    t8_inst: "Válaszd ki a jelet!",
    t9_title: "Betűrend",
    t9_text: "Tedd ABC-sorrendbe a megadott szavakat.",
    t9_w1: "alma", t9_w2: "barack", t9_w3: "cseresznye", t9_w4: "dió",
    t9_inst: "Rendezd sorba a gyümölcsöket!",
    t10_title: "Összegzés",
    t10_text: "Válaszd ki a legfontosabb állítást a tanultakról.",
    t10_q: "Mi a nyelvtan célja?",
    t10_t1: "A helyes közlés", t10_t2: "Csak a sok írás", t10_t3: "Számolás",
    t10_inst: "Válaszd a választ!",
  }
};

export const MAGYAR_O6_I9_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Nagy Ismétlés",
    t1_title: "Mindent a mondatról",
    t1_b1: "Alárendelő", t1_b2: "Mellérendelő",
    t1_i1: "Azt mondta, hogy jön.", t1_i2: "Süt a nap és fúj.",
    t1_inst: "Válogasd szét!",
    t2_title: "Mindent a stílusról",
    t2_l1: "Hasonlat", t2_r1: "mint", t2_l2: "Metafora", t2_r2: "azonosítás",
    t2_inst: "Párosíts!",
    t3_title: "Mindent a szavakról",
    t3_q: "Mit jelent a szinonima?",
    t3_t1: "Hasonló jelentés", t3_t2: "Ellentét", t3_t3: "Azonos alak",
    t3_inst: "Válaszd a jót!",
    t4_title: "Ismétlő kvíz 1",
    t4_tok1: "tétel", t4_tok2: "érv", t4_tok3: "cáfolat", t4_tok4: "asztal",
    t4_inst: "Melyek az érvelés részei?",
    t5_title: "Ismétlő kvíz 2",
    t5_sent: "A 'muszá___' írása.", t5_c1: "j", t5_c2: "ly",
    t5_inst: "Válaszd ki!",
    t6_title: "Ismétlő kvíz 3",
    t6_b1: "Vers", t6_b2: "Próza",
    t6_i1: "Petőfi verse", t6_i2: "Móra elbeszélése",
    t6_inst: "Csoportosíts!",
    t7_title: "Ismétlő kvíz 4",
    t7_q: "Mi a kommunikáció vevője?",
    t7_t1: "Hallgató", t7_t2: "Beszélő", t7_t3: "Üzenet",
    t7_inst: "Ki kapja az üzenetet?",
    t8_title: "Ismétlő kvíz 5",
    t8_l1: "Finn", t8_r1: "Rokon", t8_l2: "Német", t8_r2: "Nem rokon",
    t8_inst: "Párosítsd a rokonságot!",
    t9_title: "Ismétlő kvíz 6",
    t9_sent: "Az új gondolatot új ___ kezdjük.", t9_c1: "bekezdéssel", t9_c2: "mondattal",
    t9_inst: "Mi hiányzik?",
    t10_title: "Végső vizsga",
    t10_q: "Készen állsz a 7. osztályra?",
    t10_t1: "Igen!", t10_t2: "Még nem.", t10_t3: "Talán.",
    t10_inst: "Az utolsó gomb!",
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// POOLS
// ─────────────────────────────────────────────────────────────────────────────

export const MAGYAR_O6_I1_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["és", "meg"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["de", "mégis"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "cap", label: "t1_b1" }, { id: "opp", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "cap" }, { text: "t1_i2", bucketId: "opp" }, { text: "t1_i3", bucketId: "cap" }, { text: "t1_i4", bucketId: "opp" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "mellér" },
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "➕", title: "És", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }], instruction: "t2_inst" },
    quiz: { generate: "mellér" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "↔️", title: "De", bg: "#FEE2E2", color: "#DC2626" },
    interactive: { type: "gap-fill", sentence: "t3_sent", choices: ["t3_c1", "t3_c2", "t3_c3"], correctIndex: 0, instruction: "t3_inst" },
    quiz: { generate: "mellér" },
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "❓", title: "Vagy", bg: "#FEF3C7", color: "#D97706" },
    interactive: {
      type: "physics-slingshot", question: "t4_q",
      targets: [{ id: "v1", text: "t4_t1", isCorrect: true }, { id: "n1", text: "t4_t2", isCorrect: false }, { id: "n2", text: "t4_t3", isCorrect: false }],
      instruction: "t4_inst"
    },
    quiz: { generate: "mellér" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Fő"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["Mellék"], bg: "#E0F2FE", border: "#0EA5E9" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "main", label: "t5_b1" }, { id: "sub", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "main" }, { text: "t5_i2", bucketId: "sub" }, { text: "t5_i3", bucketId: "main" }, { text: "t5_i4", bucketId: "sub" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "alár" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "📦", title: "Hogy", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4", "t6_tok5", "t6_tok6"], correctIndices: [3], instruction: "t6_inst" },
    quiz: { generate: "alár" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🔖", title: "Ami", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_l1", right: "t7_r1" }, { left: "t7_l2", right: "t7_r2" }], instruction: "t7_inst" },
    quiz: { generate: "alár" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "📍", title: "Ahol", bg: "#F0F9FF", color: "#0369A1" },
    interactive: { type: "gap-fill", sentence: "t8_sent", choices: ["t8_c1", "t8_c2", "t8_c3"], correctIndex: 0, instruction: "t8_inst" },
    quiz: { generate: "alár" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "📎", title: "Kapcs", bg: "#F3F4F6", color: "#374151" },
    interactive: {
      type: "physics-slingshot", question: "t9_q",
      targets: [{ id: "v1", text: "t9_t1", isCorrect: true }, { id: "n1", text: "t9_t2", isCorrect: false }, { id: "n2", text: "t9_t3", isCorrect: false }],
      instruction: "t9_inst"
    },
    quiz: { generate: "kötőszók" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🧩", title: "Rendez", bg: "#F3F4F6", color: "#111827" },
    interactive: { type: "physics-stacker", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4"], correctOrder: [0, 1, 2, 3], instruction: "t10_inst" },
    quiz: { generate: "szórend" },
  },
];

export const MAGYAR_O6_I2_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤝", title: "Mint", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3"], correctIndex: 0, instruction: "t1_inst" },
    quiz: { generate: "hasonlat_metafora" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🎭", title: "Csere", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }], instruction: "t2_inst" },
    quiz: { generate: "hasonlat_metafora" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "👤", title: "Ember", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "megszemelyes" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["Pohár"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Fiú"], bg: "#DCFCE7", border: "#16A34A" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "met", label: "t4_b1" }, { id: "not", label: "t4_b2" }],
      items: [{ text: "t4_i1", bucketId: "met" }, { text: "t4_i2", bucketId: "met" }, { text: "t4_i3", bucketId: "not" }, { text: "t4_i4", bucketId: "not" }],
      instruction: "t4_inst"
    },
    quiz: { generate: "hasonlat_metafora" },
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "👯", title: "Rokon", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }, { left: "t5_l3", right: "t5_r3" }], instruction: "t5_inst" },
    quiz: { generate: "szinonimia" },
  },
  {
    difficulty: "easy", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "↔️", title: "Ellentét", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: { type: "match-pairs", pairs: [{ left: "t6_l1", right: "t6_r1" }, { left: "t6_l2", right: "t6_r2" }, { left: "t6_l3", right: "t6_r3" }], instruction: "t6_inst" },
    quiz: { generate: "szopár_antonimia" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "👥", title: "Kettő", bg: "#F3F4F6", color: "#111827" },
    interactive: {
      type: "physics-slingshot", question: "t7_q",
      targets: [{ id: "v1", text: "t7_t1", isCorrect: true }, { id: "n1", text: "t7_t2", isCorrect: false }, { id: "n2", text: "t7_t3", isCorrect: false }],
      instruction: "t7_inst"
    },
    quiz: { generate: "homonimia" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "szem", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t8_tok1", "t8_tok2", "t8_tok3", "t8_tok4", "t8_tok5"], correctIndices: [0, 1, 2], instruction: "t8_inst" },
    quiz: { generate: "homonimia" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["Battyog"], bg: "#FEF3C7", border: "#D97706" }, right: { items: ["Megy"], bg: "#F3F4F6", border: "#9CA3AF" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "mood", label: "t9_b1" }, { id: "neut", label: "t9_b2" }],
      items: [{ text: "t9_i1", bucketId: "mood" }, { text: "t9_i2", bucketId: "mood" }, { text: "t9_i3", bucketId: "neut" }, { text: "t9_i4", bucketId: "neut" }],
      instruction: "t9_inst"
    },
    quiz: { generate: "intonáció_ritmus" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🥁", title: "Láb", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "match-pairs", pairs: [{ left: "t10_l1", right: "t10_r1" }, { left: "t10_l2", right: "t10_r2" }], instruction: "t10_inst" },
    quiz: { generate: "intonáció_ritmus" },
  },
];

export const MAGYAR_O6_I3_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Asztal"], bg: "#FFF7ED", border: "#C2410C" }, right: { items: ["Polgár"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "slav", label: "t1_b1" }, { id: "germ", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "slav" }, { text: "t1_i2", bucketId: "slav" }, { text: "t1_i3", bucketId: "germ" }, { text: "t1_i4", bucketId: "germ" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "idegen_szavak" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "⌨️", title: "Comp", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }], instruction: "t2_inst" },
    quiz: { generate: "idegen_szavak" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "compound-word", word1: "asztal", word2: "láb", result: "asztalláb", color: "#3B82F6" },
    interactive: { type: "match-pairs", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }], instruction: "t3_inst" },
    quiz: { generate: "szóképzés" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "➕", title: "Képző", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "gap-fill", sentence: "t4_sent", choices: ["t4_c1", "t4_c2", "t4_c3"], correctIndex: 0, instruction: "t4_inst" },
    quiz: { generate: "szóképzés" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Be-"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["-ség"], bg: "#DCFCE7", border: "#16A34A" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "pre", label: "t5_b1" }, { id: "suf", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "pre" }, { text: "t5_i2", bucketId: "pre" }, { text: "t5_i3", bucketId: "suf" }, { text: "t5_i4", bucketId: "suf" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "prefixum_szuffixum" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "icon-grid", items: [{ emoji: "✒️" }, { emoji: "📖" }] },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4", "t6_tok5"], correctIndices: [0, 1, 2, 3], instruction: "t6_inst" },
    quiz: { generate: "szóképzés" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🔍", title: "Eredet", bg: "#F3F4F6", color: "#1F2937" },
    interactive: {
      type: "physics-slingshot", question: "t7_q",
      targets: [{ id: "v1", text: "t7_t1", isCorrect: true }, { id: "n1", text: "t7_t2", isCorrect: false }, { id: "n2", text: "t7_t3", isCorrect: false }],
      instruction: "t7_inst"
    },
    quiz: { generate: "szómagyarázat" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "two-groups", left: { items: ["Finn"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["Angol"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "rel", label: "t8_b1" }, { id: "not", label: "t8_b2" }],
      items: [{ text: "t8_i1", bucketId: "rel" }, { text: "t8_i2", bucketId: "rel" }, { text: "t8_i3", bucketId: "not" }, { text: "t8_i4", bucketId: "not" }],
      instruction: "t8_inst"
    },
    quiz: { generate: "nyelvcsal" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🇭🇺", title: "Ős", bg: "#FEE2E2", color: "#DC2626" },
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2", "t9_c3"], correctIndex: 0, instruction: "t9_inst" },
    quiz: { generate: "nyelvcsal" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🛹", title: "Szleng", bg: "#FEF3C7", color: "#D97706" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "szómagyarázat" },
  },
];

export const MAGYAR_O6_I4_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧠", title: "Tétel", bg: "#F3F4F6", color: "#111827" },
    interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst" },
    quiz: { generate: "erveles_alap" },
  },
  {
    difficulty: "hard", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "⚖️", title: "Logika", bg: "#F0F9FF", color: "#0369A1" },
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3"], correctIndex: 0, instruction: "t2_inst" },
    quiz: { generate: "erveles_alap" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "👣", title: "Tapaszt", bg: "#DCFCE7", color: "#16A34A" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "erveles_alap" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["Mindenki"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["De én nem"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "arg", label: "t4_b1" }, { id: "ref", label: "t4_b2" }],
      items: [{ text: "t4_i1", bucketId: "arg" }, { text: "t4_i2", bucketId: "ref" }, { text: "t4_i3", bucketId: "arg" }, { text: "t4_i4", bucketId: "ref" }],
      instruction: "t4_inst"
    },
    quiz: { generate: "erveles_alap" },
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "❓", title: "Retor", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3"], correctIndex: 0, instruction: "t5_inst" },
    quiz: { generate: "retorikai_kérdések" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "adat", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4"], correctIndices: [0, 1, 2, 3], instruction: "t6_inst" },
    quiz: { generate: "erveles_alap" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🗣️", title: "Vita", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_l1", right: "t7_r1" }, { left: "t7_l2", right: "t7_r2" }], instruction: "t7_inst" },
    quiz: { generate: "erveles_alap" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🤥", title: "Becsap", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: {
      type: "physics-slingshot", question: "t8_q",
      targets: [{ id: "v1", text: "t8_t1", isCorrect: true }, { id: "n1", text: "t8_t2", isCorrect: false }, { id: "n2", text: "t8_t3", isCorrect: false }],
      instruction: "t8_inst"
    },
    quiz: { generate: "retorikai_kérdések" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "📝", title: "Vázlat", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "physics-stacker", words: ["t9_w1", "t9_w2", "t9_w3"], correctOrder: [0, 1, 2], instruction: "t9_inst" },
    quiz: { generate: "essze" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🎤", title: "Beszéd", bg: "#FEE2E2", color: "#DC2626" },
    interactive: { type: "gap-fill", sentence: "t10_sent", choices: ["t10_c1", "t10_c2", "t10_c3"], correctIndex: 0, instruction: "t10_inst" },
    quiz: { generate: "essze" },
  },
];

export const MAGYAR_O6_I5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Kék"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Szalad"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "desc", label: "t1_b1" }, { id: "act", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "desc" }, { text: "t1_i2", bucketId: "desc" }, { text: "t1_i3", bucketId: "act" }, { text: "t1_i4", bucketId: "act" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "szövegtipusok_6" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📐", title: "Váz", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "szövegtipusok_6" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📑", title: "Tag", bg: "#E0F2FE", color: "#0369A1" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "szövegtipusok_6" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "text-bubbles", items: [{ text: "kapocs", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t4_tok1", "t4_tok2", "t4_tok3"], correctIndices: [0, 1, 2], instruction: "t4_inst" },
    quiz: { generate: "szövegkohézió" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🏷️", title: "Cím", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3"], correctIndex: 0, instruction: "t5_inst" },
    quiz: { generate: "szövegtipusok_6" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🔍", title: "Körny", bg: "#F3F4F6", color: "#111827" },
    interactive: {
      type: "physics-slingshot", question: "t6_q",
      targets: [{ id: "v1", text: "t6_t1", isCorrect: true }, { id: "n1", text: "t6_t2", isCorrect: false }, { id: "n2", text: "t6_t3", isCorrect: false }],
      instruction: "t6_inst"
    },
    quiz: { generate: "ertelmez_halado" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["Hír"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["Bolt"], bg: "#FEF3C7", border: "#D97706" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "news", label: "t7_b1" }, { id: "ads", label: "t7_b2" }],
      items: [{ text: "t7_i1", bucketId: "news" }, { text: "t7_i2", bucketId: "news" }, { text: "t7_i3", bucketId: "ads" }, { text: "t7_i4", bucketId: "ads" }],
      instruction: "t7_inst"
    },
    quiz: { generate: "szövegtipusok_6" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🔢", title: "Terv", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "physics-stacker", words: ["t8_w1", "t8_w2", "t8_w3"], correctOrder: [0, 1, 2], instruction: "t8_inst" },
    quiz: { generate: "szövegtipusok_6" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "pontos", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t9_tok1", "t9_tok2", "t9_tok3", "t9_tok4"], correctIndices: [0, 2, 3], instruction: "t9_inst" },
    quiz: { generate: "szövegtipusok_6" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📰", title: "Web", bg: "#F0F9FF", color: "#0369A1" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "szövegtipusok_6" },
  },
];

export const MAGYAR_O6_I6_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🔠", title: "Nagy", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: { type: "highlight-text", tokens: ["t1_tok1", "t1_tok2", "t1_tok3", "t1_tok4", "t1_tok5"], correctIndices: [0, 1, 2], instruction: "t1_inst" },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🗺️", title: "Hely", bg: "#ECFDF5", color: "#047857" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }], instruction: "t2_inst" },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🆔", title: "Szó", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t3_sent", choices: ["t3_c1", "t3_c2", "t3_c3"], correctIndex: 0, instruction: "t3_inst" },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: ",", title: "Vessző", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "gap-fill", sentence: "t4_sent", choices: ["t4_c1", "t4_c2", "t4_c3"], correctIndex: 0, instruction: "t4_inst" },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Toll"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["Labba"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "ok", label: "t5_b1" }, { id: "bad", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "ok" }, { text: "t5_i2", bucketId: "ok" }, { text: "t5_i3", bucketId: "ok" }, { text: "t5_i4", bucketId: "bad" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🦆", title: "Madár", bg: "#F3F4F6", color: "#374151" },
    interactive: {
      type: "physics-slingshot", question: "t6_q",
      targets: [{ id: "v1", text: "t6_t1", isCorrect: true }, { id: "n1", text: "t6_t2", isCorrect: false }, { id: "n2", text: "t6_t3", isCorrect: false }],
      instruction: "t6_inst"
    },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-syllables", parts: ["ka", "rá", "csony"], color: "#DB2777" },
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2", "t7_c3"], correctIndex: 0, instruction: "t7_inst" },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🔚", title: "Vége", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }], instruction: "t8_inst" },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "📖", title: "Lexi", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t9_q",
      targets: [{ id: "v1", text: "t9_t1", isCorrect: true }, { id: "n1", text: "t9_t2", isCorrect: false }, { id: "n2", text: "t9_t3", isCorrect: false }],
      instruction: "t9_inst"
    },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "✨", title: "Egysz", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t10_sent", choices: ["t10_c1", "t10_c2", "t10_c3"], correctIndex: 0, instruction: "t10_inst" },
    quiz: { generate: "tulajdonnev" },
  },
];

export const MAGYAR_O6_I7_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📖", title: "Novell", bg: "#F3F4F6", color: "#374151" },
    interactive: {
      type: "physics-slingshot", question: "t1_q",
      targets: [{ id: "v1", text: "t1_t1", isCorrect: true }, { id: "n1", text: "t1_t2", isCorrect: false }, { id: "n2", text: "t1_t3", isCorrect: false }],
      instruction: "t1_inst"
    },
    quiz: { generate: "essze" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "two-groups", left: { items: ["Rövid"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["Hosszú"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }], instruction: "t2_inst" },
    quiz: { generate: "essze" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "👤", title: "Narr", bg: "#F3F4F6", color: "#111827" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "ertelmez_halado" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["Haj"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["Szív"], bg: "#DCFCE7", border: "#16A34A" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "out", label: "t4_b1" }, { id: "in", label: "t4_b2" }],
      items: [{ text: "t4_i1", bucketId: "out" }, { text: "t4_i2", bucketId: "out" }, { text: "t4_i3", bucketId: "in" }, { text: "t4_i4", bucketId: "in" }],
      instruction: "t4_inst"
    },
    quiz: { generate: "essze" },
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📈", title: "Ford", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3"], correctIndex: 0, instruction: "t5_inst" },
    quiz: { generate: "essze" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "hős", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4", "t6_tok5"], correctIndices: [0, 1, 2], instruction: "t6_inst" },
    quiz: { generate: "essze" },
  },
  {
    difficulty: "easy", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📍", title: "Tér", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_l1", right: "t7_r1" }, { left: "t7_l2", right: "t7_r2" }], instruction: "t7_inst" },
    quiz: { generate: "essze" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏆", title: "Cél", bg: "#F0FDF4", color: "#15803D" },
    interactive: {
      type: "physics-slingshot", question: "t8_q",
      targets: [{ id: "v1", text: "t8_t1", isCorrect: true }, { id: "n1", text: "t8_t2", isCorrect: false }, { id: "n2", text: "t8_t3", isCorrect: false }],
      instruction: "t8_inst"
    },
    quiz: { generate: "essze" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "kép", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t9_tok1", "t9_tok2", "t9_tok3", "t9_tok4", "t9_tok5"], correctIndices: [0, 1, 2], instruction: "t9_inst" },
    quiz: { generate: "essze" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["Rím"], bg: "#FDF2F8", border: "#DB2777" }, right: { items: ["Szöveg"], bg: "#F3F4F6", border: "#D1D5DB" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "ver", label: "t10_b1" }, { id: "pro", label: "t10_b2" }],
      items: [{ text: "t10_i1", bucketId: "ver" }, { text: "t10_i2", bucketId: "ver" }, { text: "t10_i3", bucketId: "pro" }, { text: "t10_i4", bucketId: "pro" }],
      instruction: "t10_inst"
    },
    quiz: { generate: "essze" },
  },
];

export const MAGYAR_O6_I8_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧩", title: "Rendez", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "physics-stacker", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], correctOrder: [0, 1, 2, 3], instruction: "t1_inst" },
    quiz: { generate: "szórend" },
  },
  {
    difficulty: "hard", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🚨", title: "Hiba", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: { type: "highlight-text", tokens: ["t2_tok1", "t2_tok2", "t2_tok3", "t2_tok4", "t2_tok5"], correctIndices: [3], instruction: "t2_inst" },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🤝", title: "Válasz", bg: "#F0F9FF", color: "#0369A1" },
    interactive: { type: "match-pairs", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }], instruction: "t3_inst" },
    quiz: { generate: "ertelmez_halado" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🏃", title: "Ige", bg: "#FEE2E2", color: "#DC2626" },
    interactive: { type: "highlight-text", tokens: ["t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"], correctIndices: [4], instruction: "t4_inst" },
    quiz: { generate: "szóképzés" },
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐶" }, { emoji: "🐱" }, { emoji: "🐭" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }, { left: "t5_l3", right: "t5_r3" }], instruction: "t5_inst" },
    quiz: { generate: "idgen_szavak" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "↔️", title: "Ell", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t6_l1", right: "t6_r1" }, { left: "t6_l2", right: "t6_r2" }], instruction: "t6_inst" },
    quiz: { generate: "szopár_antonimia" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🍯", title: "Méz", bg: "#FEF3C7", color: "#D97706" },
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2", "t7_c3"], correctIndex: 0, instruction: "t7_inst" },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "!", title: "Jel", bg: "#FEE2E2", color: "#DC2626" },
    interactive: { type: "gap-fill", sentence: "t8_sent", choices: ["t8_c1", "t8_c2", "t8_c3"], correctIndex: 0, instruction: "t8_inst" },
    quiz: { generate: "mondatfajtak_6" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🍎", title: "ABC", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "physics-stacker", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4"], correctOrder: [0, 1, 2, 3], instruction: "t9_inst" },
    quiz: { generate: "szórend" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🎓", title: "Cél", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "essze" },
  },
];

export const MAGYAR_O6_I9_POOL: PoolTopicDef[] = [
  {
    difficulty: "hard", infoTitle: "t1_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["Alár"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Mellér"], bg: "#DCFCE7", border: "#16A34A" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "sub", label: "t1_b1" }, { id: "coo", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "sub" }, { text: "t1_i2", bucketId: "coo" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "alár" },
  },
  {
    difficulty: "hard", infoTitle: "t2_title", infoText: "",
    svg: { type: "simple-icon", icon: "🎭", title: "Stílus", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "hasonlat_metafora" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "",
    svg: { type: "simple-icon", icon: "🔍", title: "Jel", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "szómagyarázat" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "",
    svg: { type: "text-bubbles", items: [{ text: "tétel", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4"], correctIndices: [0, 1, 2], instruction: "t4_inst" },
    quiz: { generate: "erveles_alap" },
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "",
    svg: { type: "simple-icon", icon: "✏️", title: "J-ly", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2"], correctIndex: 1, instruction: "t5_inst" },
    quiz: { generate: "tulajdonnev" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["Vers"], bg: "#FDF2F8", border: "#DB2777" }, right: { items: ["Próza"], bg: "#F3F4F6", border: "#D1D5DB" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "ver", label: "t6_b1" }, { id: "pro", label: "t6_b2" }],
      items: [{ text: "t6_i1", bucketId: "ver" }, { text: "t6_i2", bucketId: "pro" }],
      instruction: "t6_inst"
    },
    quiz: { generate: "essze" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "",
    svg: { type: "simple-icon", icon: "👥", title: "Vevő", bg: "#DBEAFE", color: "#2563EB" },
    interactive: {
      type: "physics-slingshot", question: "t7_q",
      targets: [{ id: "v1", text: "t7_t1", isCorrect: true }, { id: "n1", text: "t7_t2", isCorrect: false }, { id: "n2", text: "t7_t3", isCorrect: false }],
      instruction: "t7_inst"
    },
    quiz: { generate: "verbalis" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "",
    svg: { type: "simple-icon", icon: "🇭🇺", title: "Finn", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }], instruction: "t8_inst" },
    quiz: { generate: "nyelvcsal" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "",
    svg: { type: "simple-icon", icon: "📐", title: "Tag", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2"], correctIndex: 0, instruction: "t9_inst" },
    quiz: { generate: "szövegtipusok_6" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "",
    svg: { type: "simple-icon", icon: "🎓", title: "Vizsga", bg: "#FEFCE8", color: "#A16207" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "szórend" },
  },
];
