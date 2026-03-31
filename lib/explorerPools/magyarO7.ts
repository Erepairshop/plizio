// lib/explorerPools/magyarO7.ts

import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS (hu)
// ─────────────────────────────────────────────────────────────────────────────

export const MAGYAR_O7_I1_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Hangok és Szavak",
    t1_title: "Hangváltozások",
    t1_text: "A mássalhangzók találkozásakor különböző változások mehetnek végbe: hasonulás, összeolvadás, rövidülés.",
    t1_b1: "Hasonulás", t1_b2: "Összeolvadás",
    t1_i1: "anyja", t1_i2: "hagyja", t1_i3: "botja", t1_i4: "barátja", t1_i5: "egészség",
    t1_inst: "Válogasd szét a hangváltozásokat!",
    t2_title: "Teljes hasonulás",
    t2_text: "Amikor az egyik hang teljesen azonossá válik a másikkal (pl. vízzel, kézzel).",
    t2_l1: "váz", t2_r1: "-zal", t2_l2: "méz", t2_r2: "-zel", t2_l3: "hal", t2_r3: "-lal",
    t2_inst: "Párosítsd a tövet a helyes raggal!",
    t3_title: "Jövevényszavak",
    t3_text: "Más nyelvekből átvett szavak, amelyek beépültek a magyar nyelvbe.",
    t3_q: "Melyik nyelvcsoportból vettük át a legtöbb középkori szót?",
    t3_t1: "Szláv", t3_t2: "Latin", t3_t3: "Német", t3_t4: "Török",
    t3_inst: "Válaszd ki az eredetet!",
    t4_title: "Idegen szavak",
    t4_text: "Olyan szavak, amelyek még őrzik idegen jellegüket és eredeti írásmódjukat.",
    t4_b1: "Idegen szó", t4_b2: "Magyar megfelelő",
    t4_i1: "Computer", t4_i2: "Számítógép", t4_i3: "Display", t4_i4: "Képernyő",
    t4_inst: "Párosítsd az idegen szót a magyarral!",
    t5_title: "Szóalkotás módjai",
    t5_text: "Új szavakat alkothatunk szóösszetétellel, szóképzéssel vagy ritkább módokon.",
    t5_l1: "Szóképzés", t5_r1: "asztal-os", t5_l2: "Szóösszetétel", t5_r2: "ház-tető",
    t5_inst: "Melyik szóalkotási mód ez?",
    t6_title: "Részleges hasonulás",
    t6_text: "Amikor a hang csak egy tulajdonságában változik meg a szomszédja hatására (pl. zöngésség szerinti).",
    t6_tok1: "vas-ban", t6_tok2: "szín-pad", t6_tok3: "nép-dal", t6_tok4: "dob-szó",
    t6_inst: "Keresd a részleges hasonulás példáit!",
    t7_title: "Hangrendi illeszkedés",
    t7_text: "A magyar szavakban a magánhangzók hangrendje (magas, mély, vegyes) meghatározza a toldalékokat.",
    t7_b1: "Mély", t7_b2: "Magas",
    t7_i1: "autó", t7_i2: "ablak", t7_i3: "ház", t7_i4: "tükör", t7_i5: "felhő", t7_i6: "szék",
    t7_inst: "Válogasd szét hangrend szerint!",
    t8_title: "Szókincs rétegei",
    t8_text: "Nyelvünk szavai különböző csoportokba oszthatók eredet és használat szerint.",
    t8_q: "Mit jelent az alapszókincs?",
    t8_t1: "A legfontosabb szavak", t8_t2: "Csak a sport szavai", t8_t3: "Idegen kifejezések",
    t8_inst: "Keresd a definíciót!",
    t9_title: "Archaizmus vs Neologizmus",
    t9_text: "Régies szavak (archaizmusok) és újonnan alkotott szavak (neologizmusok).",
    t9_b1: "Régi", t9_b2: "Új",
    t9_i1: "lebuj", t9_i2: "mentő", t9_i3: "önarckép", t9_i4: "vitéz", t9_i5: "okostelefon",
    t9_inst: "Régi vagy új szó?",
    t10_title: "Szójelentés változása",
    t10_text: "A szavak jelentése az idő folyamán bővülhet, szűkülhet vagy átalakulhat.",
    t10_l1: "Bővülés", t10_r1: "toll (íróeszköz)", t10_l2: "Szűkülés", t10_r2: "marha (állat)",
    t10_inst: "Párosítsd a változást a példával!",
  }
};

export const MAGYAR_O7_I2_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Mondatszerkezet",
    t1_title: "Egyszerű mondat",
    t1_text: "Egyetlen állítást tartalmazó mondat, lehet tőmondat vagy bővített mondat.",
    t1_b1: "Tőmondat", t1_b2: "Bővített",
    t1_i1: "Esik.", t1_i2: "Fúj a szél.", t1_i3: "Péter olvas.", t1_i4: "A kislány halkan énekel.",
    t1_inst: "Válogasd szét a mondatokat!",
    t2_title: "Összetett mondat",
    t2_text: "Két vagy több tagmondatból áll, amelyek mellé- vagy alárendelő viszonyban vannak.",
    t2_l1: "Mellérendelő", t2_r1: "Süt a nap, és fúj a szél.", t2_l2: "Alárendelő", t2_r2: "Azt mondta, hogy jön.",
    t2_inst: "Milyen típusú az összetett mondat?",
    t3_title: "Mondatrészek: Alany",
    t3_text: "A mondatnak az a része, amelyről állítunk valamit. Kérdése: Ki? Mi?",
    t3_tok1: "A", t3_tok2: "kutya", t3_tok3: "vidáman", t3_tok4: "szalad", t3_tok5: "a", t3_tok6: "kertben",
    t3_inst: "Kattints az ALANYRA!",
    t4_title: "Mondatrészek: Állítmány",
    t4_text: "A mondat központi eleme, amely elmondja, mi történik. Kérdése: Mit csinál?",
    t4_tok1: "Az", t4_tok2: "alma", t4_tok3: "pirosodik", t4_tok4: "a", t4_tok5: "fán",
    t4_inst: "Kattints az ÁLLÍTMÁNYRA!",
    t5_title: "Tárgy és Határozók",
    t5_text: "A mondatot bővítő elemek, amelyek pontosítják a cselekvést vagy a dolgot.",
    t5_l1: "Tárgy", t5_r1: "almát (eszik)", t5_l2: "Helyhatározó", t5_r2: "kertben (játszik)", t5_l3: "Időhatározó", t5_r3: "reggel (kel)",
    t5_inst: "Párosítsd a mondatrészt a példával!",
    t6_title: "Igei állítmány",
    t6_text: "Amikor az állítmány egy ragozott ige (pl. olvas, játszott).",
    t6_q: "Melyik mondatban van IGEI állítmány?",
    t6_t1: "Péter könyvet olvas.", t6_t2: "A ház szép.", t6_t3: "Ő tanár.",
    t6_inst: "Keresd az igét!",
    t7_title: "Névszói állítmány",
    t7_text: "Amikor az állítmány egy névszó (főnév, melléknév), általában E/3 vagy T/3 személyben.",
    t7_q: "Melyik mondatban van NÉVSZÓI állítmány?",
    t7_t1: "Az ég kék.", t7_t2: "Süt a nap.", t7_t3: "Megyünk haza.",
    t7_inst: "Keresd a névszót az állítmány helyén!",
    t8_title: "Szórend és hangsúly",
    t8_text: "A magyar mondatban a hangsúlyos elem közvetlenül az állítmány elé kerül.",
    t8_w1: "Ma", t8_w2: "Péter", t8_w3: "megy", t8_w4: "moziba.",
    t8_inst: "Tedd sorrendbe a szavakat!",
    t9_title: "Tagadó mondat",
    t9_text: "A cselekvés vagy állapot hiányát fejezi ki a 'nem', 'ne', 'sem' szavakkal.",
    t9_sent: "Péter ___ szereti a spenótot.", t9_c1: "nem", t9_c2: "igen", t9_c3: "is",
    t9_inst: "Melyik szó teszi tagadóvá?",
    t10_title: "Általános alany",
    t10_text: "Amikor az alany nem egy konkrét személy, hanem bárki lehet (pl. Az ember tervez).",
    t10_q: "Melyik mondatban van ÁLTALÁNOS alany?",
    t10_t1: "Sok lúd disznót győz.", t10_t2: "Peti almát eszik.", t10_t3: "Én itt vagyok.",
    t10_inst: "Keresd a közmondást vagy általánosítást!",
  }
};

export const MAGYAR_O7_I3_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Irodalmi Formák",
    t1_title: "Irodalmi műnemek",
    t1_text: "Az irodalmi alkotások három nagy csoportja: líra, epika és dráma.",
    t1_b1: "Líra", t1_b2: "Epika",
    t1_i1: "Dal", t1_i2: "Óda", t1_i3: "Himnusz", t1_i4: "Regény", t1_i5: "Novella", t1_i6: "Mese",
    t1_inst: "Válogasd szét a műnemeket!",
    t2_title: "A dráma világa",
    t2_text: "Színpadra szánt alkotás, amely párbeszédekből (dialógusokból) épül fel.",
    t2_l1: "Tragédia", t2_r1: "Szomorú vég", t2_l2: "Komédia", t2_r2: "Nevettetés", t2_l3: "Szereplő", t2_r3: "Hős",
    t2_inst: "Párosítsd a drámai fogalmakat!",
    t3_title: "Versformák",
    t3_text: "A versek ritmusa és rímei adják a mű zeneiségét.",
    t3_q: "Hogy hívjuk a négy sorból álló egységet a versben?",
    t3_t1: "Versenyszak (strófa)", t3_t2: "Fejezet", t3_t3: "Bekezdés",
    t3_inst: "Válaszd ki a szakkifejezést!",
    t4_title: "Rímfajták",
    t4_text: "A sorvégi hangok összecsengése. Lehet páros rím, keresztrím vagy ölelkező rím.",
    t4_l1: "aabb", t4_r1: "Páros rím", t4_l2: "abab", t4_r2: "Keresztrím", t4_l3: "abba", t4_r3: "Ölelkező rím",
    t4_inst: "Párosítsd a képletet a névvel!",
    t5_title: "Epikai műfajok",
    t5_text: "Történetet elbeszélő művek, a rövidtől a hosszú terjedelemig.",
    t5_b1: "Kisepika", t5_b2: "Nagyepika",
    t5_i1: "Novella", t5_i2: "Monda", t5_i3: "Anekdota", t5_i4: "Regény", t5_i5: "Eposz",
    t5_inst: "Válogasd szét terjedelem szerint!",
    t6_title: "Irodalmi motívumok",
    t6_text: "Visszatérő elemek vagy képek, amelyek mélyebb jelentést hordoznak (pl. az út motívuma).",
    t6_tok1: "út", t6_tok2: "fény", t6_tok3: "éjszaka", t6_tok4: "szék", t6_tok5: "asztal",
    t6_inst: "Melyek gyakori motívumok az irodalomban?",
    t7_title: "Hasonlat",
    t7_text: "Két dolog összevetése valamilyen közös tulajdonság alapján, a 'mint' vagy 'akár' szavakkal.",
    t7_sent: "Olyan büszke, ___ a páva.", t7_c1: "mint", t7_c2: "hogy", t7_c3: "és",
    t7_inst: "Egészítsd ki a hasonlatot!",
    t8_title: "Megszemélyesítés",
    t8_text: "Amikor élettelen dolgokat emberi tulajdonságokkal vagy cselekvésekkel ruházunk fel.",
    t8_q: "Melyik példa a megszemélyesítés?",
    t8_t1: "Sír a szél.", t8_t2: "Kék az ég.", t8_t3: "Gyors az autó.",
    t8_inst: "Keresd az emberi tulajdonságot!",
    t9_title: "Irodalmi korstílusok",
    t9_text: "Egy-egy korszakra jellemző stílusirányzatok (pl. barokk, reneszánsz).",
    t9_l1: "Reneszánsz", t9_r1: "Újjászületés", t9_l2: "Barokk", t9_r2: "Díszítettség",
    t9_inst: "Párosítsd a korszakot a jellemzővel!",
    t10_title: "Szépirodalmi stílus",
    t10_text: "Művészi célú nyelvhasználat, amely tele van képekkel és alakzatokkal.",
    t10_tok1: "metafora", t10_tok2: "jelző", t10_tok3: "rím", t10_tok4: "számadat", t10_tok5: "tény",
    t10_inst: "Mi jellemző a szépirodalomra?",
  }
};

export const MAGYAR_O7_I4_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Stílus és Hatás",
    t1_title: "Stílusrétegek",
    t1_text: "A beszédhelyzetnek megfelelő nyelvi kifejezésmódok (közéleti, tudományos, hivatalos stb.).",
    t1_b1: "Hivatalos", t1_b2: "Tudományos",
    t1_i1: "Kérvényezem", t1_i2: "Határozat", t1_i3: "Hipotézis", t1_i4: "Kísérlet",
    t1_inst: "Hová tartoznak a szavak?",
    t2_title: "Közéleti stílus",
    t2_text: "Az újságok, hírek és nyilvános beszédek nyelve. Célja a tájékoztatás és meggyőzés.",
    t2_l1: "Hír", t2_r1: "Információ", t2_l2: "Interjú", t2_r2: "Párbeszéd", t2_l3: "Cikk", t2_r3: "Elemzés",
    t2_inst: "Párosítsd a műfajt a funkcióval!",
    t3_title: "Retorikai eszközök",
    t3_text: "Olyan kifejezésmódok, amelyek hatásosabbá teszik a beszédet (pl. szónoki kérdés).",
    t3_q: "Mit jelent a szónoki kérdés?",
    t3_t1: "Választ nem váró kérdés", t3_t2: "Nagyon nehéz kérdés", t3_t3: "Titkos kérdés",
    t3_inst: "Válaszd ki a helyes definíciót!",
    t4_title: "Érvelés alapjai",
    t4_text: "Saját álláspontunk bizonyítása tényekkel és logikai lépésekkel.",
    t4_l1: "Tétel", t4_r1: "Állítás", t4_l2: "Bizonyíték", t4_r2: "Érv", t4_l3: "Zárás", t4_r3: "Összegzés",
    t4_inst: "Párosítsd az érvelés részeit!",
    t5_title: "Meggyőzés művészete",
    t5_text: "A hallgatóság véleményének befolyásolása érzelmi és logikai úton.",
    t5_sent: "A jó szónok figyel a ___ érzelmeire is.", t5_c1: "közönség", t5_c2: "saját", t5_c3: "szomszéd",
    t5_inst: "Mi hiányzik a mondatból?",
    t6_title: "Szövegtípusok",
    t6_text: "A szövegek céljuk szerint lehetnek elbeszélők, leírók vagy érvelők.",
    t6_b1: "Leíró", t6_b2: "Érvelő",
    t6_i1: "Táj bemutatása", t6_i2: "Személyleírás", t6_i3: "Vita", t6_i4: "Véleménykifejtés",
    t6_inst: "Válogasd szét a célokat!",
    t7_title: "Szóhasználat és hatás",
    t7_text: "A szavak megválasztása nagyban befolyásolja az üzenet erejét és hangulatát.",
    t7_tok1: "zengő", t7_tok2: "suhanó", t7_tok3: "vészjósló", t7_tok4: "megy", t7_tok5: "csinál",
    t7_inst: "Keresd a hangulatfestő szavakat!",
    t8_title: "Eufemizmus",
    t8_text: "Kellemetlen dolgok szépítő, enyhítő kifejezése (pl. elhunyt a meghalt helyett).",
    t8_q: "Mi az eufemizmus célja?",
    t8_t1: "Szépítés, enyhítés", t8_t2: "Sértés", t8_t3: "Nevettetés",
    t8_inst: "Válaszd ki a célt!",
    t9_title: "Szleng és csoportnyelv",
    t9_text: "Bizonyos közösségek sajátos, informális nyelvhasználata.",
    t9_b1: "Szleng", t9_b2: "Köznyelv",
    t9_i1: "vágom", t9_i2: "király", t9_i3: "értem", t9_i4: "kiváló", t9_i5: "telo",
    t9_inst: "Válogasd szét a stílusokat!",
    t10_title: "Hivatalos stílus",
    t10_text: "Száraz, pontos, kötött formájú nyelvhasználat ügyintézéskor.",
    t10_sent: "Ezúton ___ beadványomat.", t10_c1: "benyújtom", t10_c2: "odaadom", t10_c3: "küldöm",
    t10_inst: "Melyik szó illik a hivatalos stílusba?",
  }
};

export const MAGYAR_O7_I5_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Kommunikáció",
    t1_title: "Verbális kommunikáció",
    t1_text: "A szavakkal történő üzenetváltás, legyen az élőszó vagy írott szöveg.",
    t1_b1: "Beszélt", t1_b2: "Írott",
    t1_i1: "Párbeszéd", t1_i2: "Előadás", t1_i3: "Levél", t1_i4: "Email", t1_i5: "SMS",
    t1_inst: "Válogasd szét a formákat!",
    t2_title: "Nem verbális jelek",
    t2_text: "Testbeszéd, arcjáték, gesztusok, amelyek kísérik és módosítják a szavakat.",
    t2_l1: "Mosoly", t2_r1: "Öröm", t2_l2: "Szemöldökráncolás", t2_r2: "Harag", t2_l3: "Vállvonogatás", t2_r3: "Bizonytalanság",
    t2_inst: "Párosítsd a jelet a jelentéssel!",
    t3_title: "A kommunikáció tényezői",
    t3_text: "A folyamat elemei: beszélő, hallgató, üzenet, csatorna, kód, beszédhelyzet.",
    t3_q: "Ki fogadja be az üzenetet?",
    t3_t1: "Hallgató (vevő)", t3_t2: "Beszélő (adó)", t3_t3: "Postás",
    t3_inst: "Válaszd ki a szereplőt!",
    t4_title: "Zaj a csatornán",
    t4_text: "Minden olyan tényező, amely nehezíti vagy megakadályozza a megértést.",
    t4_tok1: "recsegés", t4_tok2: "félreértés", t4_tok3: "figyelmetlenség", t4_tok4: "mosoly", t4_tok5: "tiszta hang",
    t4_inst: "Mi zavarhatja a kommunikációt?",
    t5_title: "Médiatípusok",
    t5_text: "Különböző eszközök az információ terjesztésére (sajtó, rádió, TV, internet).",
    t5_b1: "Hagyományos", t5_b2: "Digitális",
    t5_i1: "Újság", t5_i2: "Rádió", t5_i3: "Weboldal", t5_i4: "Közösségi média",
    t5_inst: "Csoportosítsd a médiát!",
    t6_title: "Hírérték",
    t6_text: "Az a tulajdonság, ami miatt egy esemény fontossá vagy érdekessé válik a nyilvánosság számára.",
    t6_q: "Mitől lesz egy hír 'hír'?",
    t6_t1: "Újdonság, fontosság", t6_t2: "Régi dolog", t6_t3: "Unalmas adat",
    t6_inst: "Melyik a legfontosabb?",
    t7_title: "Vizuális kommunikáció",
    t7_text: "Képekkel, jelekkel, ábrákkal történő üzenetátadás (pl. KRESZ táblák).",
    t7_l1: "Piros kör", t7_r1: "Tiltás", t7_l2: "Kék négyzet", t7_r2: "Tájékoztatás",
    t7_inst: "Párosítsd a vizuális kódokat!",
    t8_title: "Reklám és propaganda",
    t8_text: "Célzott üzenetek, amelyek vásárlásra vagy egy vélemény elfogadására buzdítanak.",
    t8_sent: "A reklám célja a ___ meggyőzése.", t8_c1: "vásárló", t8_c2: "eladó", t8_c3: "gyártó",
    t8_inst: "Ki a célpont?",
    t9_title: "Közösségi média",
    t9_text: "Interaktív online felületek, ahol a felhasználók maguk hozzák létre a tartalmat.",
    t9_tok1: "megosztás", t9_tok2: "lájk", t9_tok3: "komment", t9_tok4: "papír", t9_tok5: "bélyeg",
    t9_inst: "Melyek az online média kulcsszavai?",
    t10_title: "Etika a médiában",
    t10_text: "Az igazmondás, a személyiségi jogok és a hitelesség tiszteletben tartása.",
    t10_q: "Mit jelent a 'fake news'?",
    t10_t1: "Álhír", t10_t2: "Gyors hír", t10_t3: "Érdekes hír",
    t10_inst: "Válaszd a jelentést!",
  }
};

export const MAGYAR_O7_I6_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szöveg és Szerkezet",
    t1_title: "Szöveg egységei",
    t1_text: "A szöveg felépítése: mondat, bekezdés, fejezet, mű.",
    t1_b1: "Kisebb", t1_b2: "Nagyobb",
    t1_i1: "Mondat", t1_i2: "Szószerkezet", t1_i3: "Bekezdés", t1_i4: "Fejezet", t1_i5: "Egész mű",
    t1_inst: "Rendezd sorba méret szerint!",
    t2_title: "Bekezdés szerepe",
    t2_text: "Egy-egy gondolati egységet zár le, segít a szöveg tagolásában.",
    t2_sent: "Az új gondolatot új ___ kezdjük.", t2_c1: "bekezdéssel", t2_c2: "lappal", t2_c3: "szóval",
    t2_inst: "Mi hiányzik?",
    t3_title: "Szövegösszetartó erő",
    t3_text: "A koherencia és a kohézió biztosítja, hogy a mondatok értelmes egészet alkossanak.",
    t3_l1: "Kötőszó", t3_r1: "és, de, mert", t3_l2: "Névmásítás", t3_r2: "ő, az, ott", t3_l3: "Ismétlés", t3_r3: "kulcsszó",
    t3_inst: "Párosítsd az eszközöket!",
    t4_title: "Szöveg szerkezete",
    t4_text: "A legtöbb szöveg három fő részből áll: bevezetés, tárgyalás, befejezés.",
    t4_w1: "Bevezetés", t4_w2: "Tárgyalás", t4_w3: "Befejezés",
    t4_inst: "Tedd sorrendbe a részeket!",
    t5_title: "Cím és téma",
    t5_text: "A cím megjelöli a témát vagy felkelti az érdeklődést.",
    t5_q: "Mi a legfontosabb feladata a címnek?",
    t5_t1: "Témamegjelölés", t5_t2: "Díszítés", t5_t3: "Helykitöltés",
    t5_inst: "Válaszd ki a funkcióját!",
    t6_title: "Szöveg koherenciája",
    t6_text: "A szöveg jelentésbeli egysége és logikai folytonossága.",
    t6_tok1: "logika", t6_tok2: "értelem", t6_tok3: "összefüggés", t6_tok4: "zavar", t6_tok5: "ugrálás",
    t6_inst: "Mi jellemzi a jó szöveget?",
    t7_title: "Leíró szöveg",
    t7_text: "Tárgyak, személyek, tájak tulajdonságait mutatja be részletesen.",
    t7_b1: "Leírás", t7_b2: "Nem leírás",
    t7_i1: "A szoba tágas.", t7_i2: "Kék falak.", t7_i3: "Szaladt a fiú.", t7_i4: "Aztán hazament.",
    t7_inst: "Válogasd szét a mondatokat!",
    t8_title: "Elbeszélő szöveg",
    t8_text: "Események sorozatát mondja el időrendi sorrendben.",
    t8_l1: "Előzmény", t8_r1: "Múlt", t8_l2: "Cselekmény", t8_r2: "Jelen", t8_l3: "Következmény", t8_r3: "Jövő",
    t8_inst: "Párosítsd az időt a szakasszal!",
    t9_title: "Kulcsszavak",
    t9_text: "A szöveg legfontosabb fogalmai, amelyek nélkül nem érthető a tartalom.",
    t9_tok1: "téma", t9_tok2: "lényeg", t9_tok3: "fontos", t9_tok4: "töltelék", t9_tok5: "vessző",
    t9_inst: "Melyek a szövegelemzés szavai?",
    t10_title: "Összefoglalás",
    t10_text: "A szöveg lényegének rövid, tömör visszaadása.",
    t10_q: "Mit teszünk összefoglaláskor?",
    t10_t1: "Kiemeljük a lényeget", t10_t2: "Mindent lemásolunk", t10_t3: "Kitalálunk újakat",
    t10_inst: "Válaszd a helyes módszert!",
  }
};

export const MAGYAR_O7_I7_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Nyelv és Társadalom",
    t1_title: "Nyelvjárások",
    t1_text: "A magyar nyelv területi változatai (pl. alföldi, dunántúli, székely).",
    t1_b1: "Tájnyelv", t1_b2: "Köznyelv",
    t1_i1: "hömös", t1_i2: "mancsi", t1_i3: "homokos", t1_i4: "macska", t1_i5: "krumpli",
    t1_inst: "Válogasd szét a szavakat!",
    t2_title: "Nyelvi regiszterek",
    t2_text: "A beszédstílus alkalmazkodása a helyzethez (pl. baráti, hivatalos).",
    t2_l1: "Szia!", t2_r1: "Informális", t2_l2: "Jó napot!", t2_r2: "Neutrális", t2_l3: "Tisztelt Uram!", t2_r3: "Formális",
    t2_inst: "Párosítsd a köszönést a regiszterrel!",
    t3_title: "Nyelvi kreativitás",
    t3_text: "A nyelv játékos, újszerű használata (pl. szójátékok, új szavak alkotása).",
    t3_tok1: "szójáték", t3_tok2: "vicc", t3_tok3: "rejtvény", t3_tok4: "szabály", t3_tok5: "adat",
    t3_inst: "Melyek a nyelvi játékok eszközei?",
    t4_title: "Nyelvújítás",
    t4_text: "A 18-19. századi mozgalom nyelvünk tudatos megújítására (pl. Kazinczy Ferenc).",
    t4_q: "Ki volt a nyelvújítás vezéralakja?",
    t4_t1: "Kazinczy Ferenc", t4_t2: "Petőfi Sándor", t4_t3: "Arany János",
    t4_inst: "Válaszd ki a híres embert!",
    t5_title: "Új szavaink",
    t5_text: "A nyelvújításkor keletkezett szavak közül sok ma is alapvető (pl. zongora, rendőr).",
    t5_l1: "zene", t5_r1: "zongora", t5_l2: "rend", t5_r2: "rendőr", t5_l3: "folyik", t5_r3: "folyóirat",
    t5_inst: "Párosítsd a tövet az új szóval!",
    t6_title: "Nyelvi illem",
    t6_text: "A tisztelettudó és megfelelő nyelvhasználat szabályai.",
    t6_sent: "A tanárnak ___ köszönünk.", t6_c1: "tisztelettel", t6_c2: "lazán", t6_c3: "kiabálva",
    t6_inst: "Mi az illendő?",
    t7_title: "Digitális nyelvhasználat",
    t7_text: "Az internetes kommunikáció sajátosságai (pl. rövidítések, emotikonok).",
    t7_tok1: "emoji", t7_tok2: "lol", t7_tok3: "hashtag", t7_tok4: "toll", t7_tok5: "tintatartó",
    t7_inst: "Keresd a digitális világ szavait!",
    t8_title: "Nyelv és identitás",
    t8_text: "Az anyanyelv szerepe az önazonosságunkban és a közösséghez tartozásban.",
    t8_q: "Mit jelent az anyanyelv?",
    t8_t1: "Az elsőként megtanult nyelv", t8_t2: "Egy idegen nyelv", t8_t3: "Titkos kód",
    t8_inst: "Válaszd a definíciót!",
    t9_title: "Magyarország nyelvei",
    t9_text: "Hazánkban a magyar mellett kisebbségi nyelvek is élnek (pl. német, szlovák, roma).",
    t9_b1: "Hazai kisebbség", t9_b2: "Nem hazai",
    t9_i1: "Német", t9_i2: "Horvát", t9_i3: "Szerb", t9_i4: "Japán", t9_i5: "Spanyol",
    t9_inst: "Válogasd szét a nyelveket!",
    t10_title: "Nyelvőrzés",
    t10_text: "Nyelvünk tisztaságának és gazdagságának megőrzése a felesleges idegen hatásoktól.",
    t10_sent: "Vigyázzunk nyelvünk ___!", t10_c1: "tisztaságára", t10_c2: "színére", t10_c3: "súlyára",
    t10_inst: "Mi a célunk?",
  }
};

export const MAGYAR_O7_I8_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Jelentés és Kontextus",
    t1_title: "Pragmatika",
    t1_text: "A nyelvhasználat és a szituáció összefüggése: miért pont ezt és így mondjuk?",
    t1_l1: "Ki mondja?", t1_r1: "Beszélő", t1_l2: "Kinek?", t1_r2: "Hallgató", t1_l3: "Hol?", t1_r3: "Helyszín",
    t1_inst: "Párosítsd a tényezőket!",
    t2_title: "Beszédhelyzet (Kontextus)",
    t2_text: "A környezet, amely segít eldönteni egy mondat pontos jelentését.",
    t2_sent: "Az 'Itt van' mondat jelentése a ___ függ.", t2_c1: "helyzettől", t2_c2: "színtől", t2_c3: "időtől",
    t2_inst: "Mitől függ a jelentés?",
    t3_title: "Beszélői szándék",
    t3_text: "Mit akarunk elérni a közléssel? (pl. kérés, parancs, tájékoztatás).",
    t3_q: "Mi a célja az 'Add ide!' mondatnak?",
    t3_t1: "Kérés/Parancs", t3_t2: "Tájékoztatás", t3_t3: "Kérdés",
    t3_inst: "Válaszd ki a szándékot!",
    t4_title: "Direkt vs Indirekt",
    t4_text: "Nyíltan mondjuk ki (direkt) vagy csak utalunk rá (indirekt/implicit).",
    t4_b1: "Direkt", t4_b2: "Indirekt",
    t4_i1: "Csukd be az ablakot!", t4_i2: "Kérlek, csukd be.", t4_i3: "Hű, de hideg van itt.", t4_i4: "Bejön a szél.",
    t4_inst: "Válogasd szét a stílusokat!",
    t5_title: "Szemantika (Jelentéstan)",
    t5_text: "A nyelvi jelek és jelentések kapcsolata (pl. rokon értelműség).",
    t5_l1: "Szinonima", t5_r1: "ház - lakás", t5_l2: "Ellentét", t5_r2: "kicsi - nagy",
    t5_inst: "Párosítsd a fogalmakat!",
    t6_title: "Többjelentésű szavak",
    t6_text: "Amikor egy alakhoz több, egymással összefüggő jelentés tartozik (pl. daru).",
    t6_q: "Melyik szó poliszém (többjelentésű)?",
    t6_t1: "kör", t6_t2: "asztal", t6_t3: "ceruza",
    t6_inst: "Keresd a többjelentésűt!",
    t7_title: "Azonos alakú szavak",
    t7_text: "Azonos írásmód, de teljesen eltérő jelentés (homonímia, pl. fog).",
    t7_b1: "Fog (ige)", t7_b2: "Fog (főnév)",
    t7_i1: "Megfogom a kezed.", t7_i2: "Fáj a fogam.",
    t7_inst: "Melyik jelentés melyik?",
    t8_title: "Helyesírási alapelvek",
    t8_text: "Kiejtés, szóelemzés, hagyomány és egyszerűsítés.",
    t8_tok1: "kiejtés", t8_tok2: "szóelemzés", t8_tok3: "hagyomány", t8_tok4: "rajz", t8_tok5: "szín",
    t8_inst: "Melyek a helyesírási alapelvek?",
    t9_title: "Tulajdonnevek írása",
    t9_text: "Személyek, városok, országok neveit mindig nagybetűvel írjuk.",
    t9_tok1: "Budapest", t9_tok2: "Kovács", t9_tok3: "Tisza", t9_tok4: "folyó", t9_tok5: "hegy",
    t9_inst: "Kattints a tulajdonnevekre!",
    t10_title: "Vesszőhasználat",
    t10_text: "A mondatrészek és tagmondatok elválasztásának fontos eszköze.",
    t10_sent: "Azt mondta___ hogy eljön.", t10_c1: ",", t10_c2: ".", t10_c3: "!",
    t10_inst: "Melyik jel hiányzik?",
  }
};

export const MAGYAR_O7_I9_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Záró Ismétlés",
    t1_title: "Hangtan és Szótan",
    t1_b1: "Mély hang", t1_b2: "Magas hang",
    t1_i1: "a", t1_i2: "o", t1_i3: "u", t1_i4: "e", t1_i5: "i", t1_i6: "ö",
    t1_inst: "Ismétlő válogatás",
    t2_title: "Mondattan ismétlés",
    t2_l1: "Alany", t2_r1: "Ki?", t2_l2: "Állítmány", t2_r2: "Mit csinál?", t2_l3: "Tárgy", t2_r3: "Mit?",
    t2_inst: "Párosítsd a kérdéseket!",
    t3_title: "Irodalmi alapok",
    t3_q: "Melyik NEM irodalmi műnem?",
    t3_t1: "Sajtó", t3_t2: "Líra", t3_t3: "Epika", t3_t4: "Dráma",
    t3_inst: "Keresd a kakukktojást!",
    t4_title: "Kommunikáció mix",
    t4_tok1: "adó", t4_tok2: "vevő", t4_tok3: "csatorna", t4_tok4: "asztal", t4_tok5: "szék",
    t4_inst: "Melyek a kommunikáció elemei?",
    t5_title: "Helyesírási teszt",
    t5_sent: "A 'jö___ön' szó helyes alakja.", t5_c1: "jöjjön", t5_c2: "jöjön", t5_c3: "jölyön",
    t5_inst: "Válaszd ki a jót!",
    t6_title: "Nyelv és Társadalom",
    t6_b1: "Régi szó", t6_b2: "Szleng",
    t6_i1: "vitéz", t6_i2: "kaftán", t6_i3: "király", t6_i4: "beadja",
    t6_inst: "Csoportosíts!",
    t7_title: "Szövegtani kvíz",
    t7_q: "Hány fő részből áll egy vázlat?",
    t7_t1: "3", t7_t2: "1", t7_t3: "5", t7_t4: "10",
    t7_inst: "Gondolj a szerkezetre!",
    t8_title: "Pragmatikai párosító",
    t8_l1: "Személy", t8_r1: "Adó", t8_l2: "Helyzet", t8_r2: "Kontextus", t8_l3: "Jelrendszer", t8_r3: "Kód",
    t8_inst: "Párosítsd az elemeket!",
    t9_title: "Retorika és Stílus",
    t9_sent: "A jó beszéd ___ és világos.", t9_c1: "meggyőző", t9_c2: "halk", t9_c3: "hosszú",
    t9_inst: "Mi hiányzik?",
    t10_title: "Záróvizsga",
    t10_q: "Melyik állítás igaz a magyar nyelvre?",
    t10_t1: "Finnugor rokonunk van", t10_t2: "Nincsenek nyelvjárásaink", t10_t3: "Csak 5 magánhangzónk van",
    t10_inst: "Az utolsó kérdés!",
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// POOLS
// ─────────────────────────────────────────────────────────────────────────────

export const MAGYAR_O7_I1_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["anyja", "hagyja"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["botja", "egészség"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "has", label: "t1_b1" }, { id: "oss", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "has" }, { text: "t1_i2", bucketId: "has" }, { text: "t1_i3", bucketId: "oss" }, { text: "t1_i4", bucketId: "oss" }, { text: "t1_i5", bucketId: "has" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "hangvaltozas" },
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "➕", title: "Hasonulás", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "hangvaltozas" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🌍", title: "Eredet", bg: "#F3F4F6", color: "#374151" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "jovenényszó_haladó" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["Comp"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["Szám"], bg: "#E0F2FE", border: "#0EA5E9" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "ext", label: "t4_b1" }, { id: "hun", label: "t4_b2" }],
      items: [{ text: "t4_i1", bucketId: "ext" }, { text: "t4_i2", bucketId: "hun" }, { text: "t4_i3", bucketId: "ext" }, { text: "t4_i4", bucketId: "hun" }],
      instruction: "t4_inst"
    },
    quiz: { generate: "jovenényszó_haladó" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "compound-word", word1: "ház", word2: "tető", result: "háztető", color: "#3B82F6" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }], instruction: "t5_inst" },
    quiz: { generate: "szintaxis_szóban" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "vasban", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4"], correctIndices: [1, 2, 3], instruction: "t6_inst" },
    quiz: { generate: "hangvaltozas" },
  },
  {
    difficulty: "easy", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["a", "o"], bg: "#FFF7ED", border: "#C2410C" }, right: { items: ["e", "ö"], bg: "#F0FDF4", border: "#15803D" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "low", label: "t7_b1" }, { id: "high", label: "t7_b2" }],
      items: [{ text: "t7_i1", bucketId: "low" }, { text: "t7_i2", bucketId: "low" }, { text: "t7_i3", bucketId: "low" }, { text: "t7_i4", bucketId: "high" }, { text: "t7_i5", bucketId: "high" }, { text: "t7_i6", bucketId: "high" }],
      instruction: "t7_inst"
    },
    quiz: { generate: "hangvaltozas" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "📚", title: "Szó", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: {
      type: "physics-slingshot", question: "t8_q",
      targets: [{ id: "v1", text: "t8_t1", isCorrect: true }, { id: "n1", text: "t8_t2", isCorrect: false }, { id: "n2", text: "t8_t3", isCorrect: false }],
      instruction: "t8_inst"
    },
    quiz: { generate: "szintaxis_szóban" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["Régi"], bg: "#FEF3C7", border: "#D97706" }, right: { items: ["Új"], bg: "#DCFCE7", border: "#16A34A" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "arc", label: "t9_b1" }, { id: "neo", label: "t9_b2" }],
      items: [{ text: "t9_i1", bucketId: "arc" }, { text: "t9_i2", bucketId: "neo" }, { text: "t9_i3", bucketId: "neo" }, { text: "t9_i4", bucketId: "arc" }, { text: "t9_i5", bucketId: "neo" }],
      instruction: "t9_inst"
    },
    quiz: { generate: "szintaxis_szóban" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📈", title: "Változás", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t10_l1", right: "t10_r1" }, { left: "t10_l2", right: "t10_r2" }], instruction: "t10_inst" },
    quiz: { generate: "szintaxis_szóban" },
  },
];

export const MAGYAR_O7_I2_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Esik."], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["Fúj."], bg: "#E0F2FE", border: "#0EA5E9" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "base", label: "t1_b1" }, { id: "ext", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "base" }, { text: "t1_i2", bucketId: "ext" }, { text: "t1_i3", bucketId: "base" }, { text: "t1_i4", bucketId: "ext" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "szintaxis_mondatszerkezet" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔗", title: "Kötés", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }], instruction: "t2_inst" },
    quiz: { generate: "tobbsz_osszetett" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "sentence-display", words: ["A", "kutya", "szalad"], highlightIndices: [1], color: "#2563EB" },
    interactive: { type: "highlight-text", tokens: ["t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5"], correctIndices: [1], instruction: "t3_inst" },
    quiz: { generate: "szintaxis_mondatszerkezet" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "sentence-display", words: ["Az", "alma", "érik"], highlightIndices: [2], color: "#DC2626" },
    interactive: { type: "highlight-text", tokens: ["t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4"], correctIndices: [2], instruction: "t4_inst" },
    quiz: { generate: "szintaxis_mondatszerkezet" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📍", title: "Elemek", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }, { left: "t5_l3", right: "t5_r3" }], instruction: "t5_inst" },
    quiz: { generate: "szintaxis_mondatszerkezet" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🏃", title: "Ige", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t6_q",
      targets: [{ id: "v1", text: "t6_t1", isCorrect: true }, { id: "n1", text: "t6_t2", isCorrect: false }, { id: "n2", text: "t6_t3", isCorrect: false }],
      instruction: "t6_inst"
    },
    quiz: { generate: "szintaxis_igealakok" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏷️", title: "Névszó", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: {
      type: "physics-slingshot", question: "t7_q",
      targets: [{ id: "v1", text: "t7_t1", isCorrect: true }, { id: "n1", text: "t7_t2", isCorrect: false }, { id: "n2", text: "t7_t3", isCorrect: false }],
      instruction: "t7_inst"
    },
    quiz: { generate: "szintaxis_mondatszerkezet" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧩", title: "Rendez", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "physics-stacker", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"], correctOrder: [0, 1, 2, 3], instruction: "t8_inst" },
    quiz: { generate: "szintaxis_mondatszerkezet" },
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🚫", title: "Nem", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2"], correctIndex: 0, instruction: "t9_inst" },
    quiz: { generate: "szintaxis_mondatszerkezet" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "👥", title: "Emberek", bg: "#F3F4F6", color: "#111827" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "szintaxis_mondatszerkezet" },
  },
];

export const MAGYAR_O7_I3_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Dal"], bg: "#FDF2F8", border: "#DB2777" }, right: { items: ["Mese"], bg: "#DBEAFE", border: "#2563EB" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "lyr", label: "t1_b1" }, { id: "epi", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "lyr" }, { text: "t1_i2", bucketId: "lyr" }, { text: "t1_i3", bucketId: "lyr" }, { text: "t1_i4", bucketId: "epi" }, { text: "t1_i5", bucketId: "epi" }, { text: "t1_i6", bucketId: "epi" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "irodalom_mufaj" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🎭", title: "Dráma", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "irodalom_mufaj" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📜", title: "Strófa", bg: "#F3F4F6", color: "#374151" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "irodalom_mufaj" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🎶", title: "Rím", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "match-pairs", pairs: [{ left: "t4_l1", right: "t4_r1" }, { left: "t4_l2", right: "t4_r2" }, { left: "t4_l3", right: "t4_r3" }], instruction: "t4_inst" },
    quiz: { generate: "irodalom_mufaj" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Novella"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["Regény"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "short", label: "t5_b1" }, { id: "long", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "short" }, { text: "t5_i2", bucketId: "short" }, { text: "t5_i3", bucketId: "short" }, { text: "t5_i4", bucketId: "long" }, { text: "t5_i5", bucketId: "long" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "irodalom_mű" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "icon-grid", items: [{ emoji: "🛣️" }, { emoji: "🔆" }] },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4", "t6_tok5"], correctIndices: [0, 1, 2], instruction: "t6_inst" },
    quiz: { generate: "irodalom_motívumok" },
  },
  {
    difficulty: "easy", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🤝", title: "Mint", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2"], correctIndex: 0, instruction: "t7_inst" },
    quiz: { generate: "irodalom_mű" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "👤", title: "Ember", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t8_q",
      targets: [{ id: "v1", text: "t8_t1", isCorrect: true }, { id: "n1", text: "t8_t2", isCorrect: false }, { id: "n2", text: "t8_t3", isCorrect: false }],
      instruction: "t8_inst"
    },
    quiz: { generate: "irodalom_mű" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🏰", title: "Kor", bg: "#FFFBEB", color: "#B45309" },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_l1", right: "t9_r1" }, { left: "t9_l2", right: "t9_r2" }], instruction: "t9_inst" },
    quiz: { generate: "irodalom_mű" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "text-bubbles", items: [{ text: "metafora", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t10_tok1", "t10_tok2", "t10_tok3", "t10_tok4"], correctIndices: [0, 1, 2], instruction: "t10_inst" },
    quiz: { generate: "irodalom_mű" },
  },
];

export const MAGYAR_O7_I4_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Kérvény"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Adat"], bg: "#DCFCE7", border: "#16A34A" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "off", label: "t1_b1" }, { id: "sci", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "off" }, { text: "t1_i2", bucketId: "off" }, { text: "t1_i3", bucketId: "sci" }, { text: "t1_i4", bucketId: "sci" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "stilusretegek" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📰", title: "Hírek", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "szovegstilus" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "❓", title: "Kérdés", bg: "#F0F9FF", color: "#0369A1" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "retorika_hatás" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🧠", title: "Logika", bg: "#F3F4F6", color: "#111827" },
    interactive: { type: "match-pairs", pairs: [{ left: "t4_l1", right: "t4_r1" }, { left: "t4_l2", right: "t4_r2" }, { left: "t4_l3", right: "t4_r3" }], instruction: "t4_inst" },
    quiz: { generate: "ervales_haladó" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎤", title: "Szónok", bg: "#FEE2E2", color: "#DC2626" },
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2"], correctIndex: 0, instruction: "t5_inst" },
    quiz: { generate: "meggyozes_haladó" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["Tájkép"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["Vita"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "desc", label: "t6_b1" }, { id: "arg", label: "t6_b2" }],
      items: [{ text: "t6_i1", bucketId: "desc" }, { text: "t6_i2", bucketId: "desc" }, { text: "t6_i3", bucketId: "arg" }, { text: "t6_i4", bucketId: "arg" }],
      instruction: "t6_inst"
    },
    quiz: { generate: "szovegstilus" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "text-bubbles", items: [{ text: "zengő", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t7_tok1", "t7_tok2", "t7_tok3", "t7_tok4", "t7_tok5"], correctIndices: [0, 1, 2], instruction: "t7_inst" },
    quiz: { generate: "szovegstilus" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "✨", title: "Szép", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t8_q",
      targets: [{ id: "v1", text: "t8_t1", isCorrect: true }, { id: "n1", text: "t8_t2", isCorrect: false }, { id: "n2", text: "t8_t3", isCorrect: false }],
      instruction: "t8_inst"
    },
    quiz: { generate: "stilusretegek" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["Barát"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["Tanár"], bg: "#DBEAFE", border: "#2563EB" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "slang", label: "t9_b1" }, { id: "norm", label: "t9_b2" }],
      items: [{ text: "t9_i1", bucketId: "slang" }, { text: "t9_i2", bucketId: "slang" }, { text: "t9_i3", bucketId: "norm" }, { text: "t9_i4", bucketId: "norm" }, { text: "t9_i5", bucketId: "slang" }],
      instruction: "t9_inst"
    },
    quiz: { generate: "stilusretegek" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "👔", title: "Iroda", bg: "#F3F4F6", color: "#111827" },
    interactive: { type: "gap-fill", sentence: "t10_sent", choices: ["t10_c1", "t10_c2"], correctIndex: 0, instruction: "t10_inst" },
    quiz: { generate: "stilusretegek" },
  },
];

export const MAGYAR_O7_I5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Száj"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["Toll"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "spk", label: "t1_b1" }, { id: "wrt", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "spk" }, { text: "t1_i2", bucketId: "spk" }, { text: "t1_i3", bucketId: "wrt" }, { text: "t1_i4", bucketId: "wrt" }, { text: "t1_i5", bucketId: "wrt" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "verbalis" },
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "icon-grid", items: [{ emoji: "😊" }, { emoji: "😠" }, { emoji: "🤷" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "verbalis" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📡", title: "Adás", bg: "#F3F4F6", color: "#1F2937" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "verbalis" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⚡", title: "Hiba", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: { type: "highlight-text", tokens: ["t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"], correctIndices: [0, 1, 2], instruction: "t4_inst" },
    quiz: { generate: "verbalis" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["TV"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["Web"], bg: "#DBEAFE", border: "#2563EB" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "trad", label: "t5_b1" }, { id: "dig", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "trad" }, { text: "t5_i2", bucketId: "trad" }, { text: "t5_i3", bucketId: "dig" }, { text: "t5_i4", bucketId: "dig" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "mediaszoveg" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "✨", title: "Fontos", bg: "#F0F9FF", color: "#0369A1" },
    interactive: {
      type: "physics-slingshot", question: "t6_q",
      targets: [{ id: "v1", text: "t6_t1", isCorrect: true }, { id: "n1", text: "t6_t2", isCorrect: false }, { id: "n2", text: "t6_t3", isCorrect: false }],
      instruction: "t6_inst"
    },
    quiz: { generate: "mediaszoveg" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "🔴" }, { emoji: "ℹ️" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_l1", right: "t7_r1" }, { left: "t7_l2", right: "t7_r2" }], instruction: "t7_inst" },
    quiz: { generate: "media_multimodal" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏷️", title: "Vedd meg", bg: "#FEF3C7", color: "#D97706" },
    interactive: { type: "gap-fill", sentence: "t8_sent", choices: ["t8_c1", "t8_c2"], correctIndex: 0, instruction: "t8_inst" },
    quiz: { generate: "mediaszoveg" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "lájk", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t9_tok1", "t9_tok2", "t9_tok3", "t9_tok4", "t9_tok5"], correctIndices: [0, 1, 2], instruction: "t9_inst" },
    quiz: { generate: "mediaszoveg" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🤥", title: "Álhír", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "mediaszoveg" },
  },
];

export const MAGYAR_O7_I6_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Szó"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["Mű"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "sml", label: "t1_b1" }, { id: "big", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "sml" }, { text: "t1_i2", bucketId: "sml" }, { text: "t1_i3", bucketId: "big" }, { text: "t1_i4", bucketId: "big" }, { text: "t1_i5", bucketId: "big" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "szoveg_szerkezet" },
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📐", title: "Tag", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2"], correctIndex: 0, instruction: "t2_inst" },
    quiz: { generate: "szoveg_szerkezet" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🧶", title: "Kötés", bg: "#F0F9FF", color: "#0369A1" },
    interactive: { type: "match-pairs", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }], instruction: "t3_inst" },
    quiz: { generate: "szoveg_osszefu" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔢", title: "Sorrend", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "physics-stacker", words: ["t4_w1", "t4_w2", "t4_w3"], correctOrder: [0, 1, 2], instruction: "t4_inst" },
    quiz: { generate: "szoveg_szerkezet" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🏷️", title: "Cím", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t5_q",
      targets: [{ id: "v1", text: "t5_t1", isCorrect: true }, { id: "n1", text: "t5_t2", isCorrect: false }, { id: "n2", text: "t5_t3", isCorrect: false }],
      instruction: "t5_inst"
    },
    quiz: { generate: "szoveg_szerkezet" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "logika", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4", "t6_tok5"], correctIndices: [0, 1, 2], instruction: "t6_inst" },
    quiz: { generate: "szoveg_osszefu" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["Szoba"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["Szalad"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "desc", label: "t7_b1" }, { id: "act", label: "t7_b2" }],
      items: [{ text: "t7_i1", bucketId: "desc" }, { text: "t7_i2", bucketId: "desc" }, { text: "t7_i3", bucketId: "act" }, { text: "t7_i4", bucketId: "act" }],
      instruction: "t7_inst"
    },
    quiz: { generate: "szoveg_szerkezet" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "⏳", title: "Idő", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }], instruction: "t8_inst" },
    quiz: { generate: "szoveg_szerkezet" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "téma", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t9_tok1", "t9_tok2", "t9_tok3", "t9_tok4", "t9_tok5"], correctIndices: [0, 1, 2], instruction: "t9_inst" },
    quiz: { generate: "szoveg_osszefu" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🏆", title: "Lényeg", bg: "#F0FDF4", color: "#15803D" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "szoveg_szerkezet" },
  },
];

export const MAGYAR_O7_I7_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["hömös"], bg: "#FEF3C7", border: "#D97706" }, right: { items: ["homok"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "dial", label: "t1_b1" }, { id: "norm", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "dial" }, { text: "t1_i2", bucketId: "dial" }, { text: "t1_i3", bucketId: "norm" }, { text: "t1_i4", bucketId: "norm" }, { text: "t1_i5", bucketId: "norm" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "tajnyelv" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "👔", title: "Stílus", bg: "#F3F4F6", color: "#111827" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "nyelvhasznalat_register" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "szójáték", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5"], correctIndices: [0, 1, 2], instruction: "t3_inst" },
    quiz: { generate: "nyelvhasznalat_kreativitas" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "✒️", title: "Kazinczy", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t4_q",
      targets: [{ id: "v1", text: "t4_t1", isCorrect: true }, { id: "n1", text: "t4_t2", isCorrect: false }, { id: "n2", text: "t4_t3", isCorrect: false }],
      instruction: "t4_inst"
    },
    quiz: { generate: "nyelvhasznalat_kreativitas" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "➕", title: "Új", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }, { left: "t5_l3", right: "t5_r3" }], instruction: "t5_inst" },
    quiz: { generate: "nyelvhasznalat_kreativitas" },
  },
  {
    difficulty: "easy", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🤝", title: "Illem", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t6_sent", choices: ["t6_c1", "t6_c2"], correctIndex: 0, instruction: "t6_inst" },
    quiz: { generate: "nyelvhasznalat_register" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "📱" }, { emoji: "💬" }] },
    interactive: { type: "highlight-text", tokens: ["t7_tok1", "t7_tok2", "t7_tok3", "t7_tok4", "t7_tok5"], correctIndices: [0, 1, 2], instruction: "t7_inst" },
    quiz: { generate: "nyelvhasznalat_register" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🇭🇺", title: "Haza", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t8_q",
      targets: [{ id: "v1", text: "t8_t1", isCorrect: true }, { id: "n1", text: "t8_t2", isCorrect: false }, { id: "n2", text: "t8_t3", isCorrect: false }],
      instruction: "t8_inst"
    },
    quiz: { generate: "nyelvhasznalat_register" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["Német"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["Horvát"], bg: "#FDF2F8", border: "#DB2777" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "min", label: "t9_b1" }, { id: "ext", label: "t9_b2" }],
      items: [{ text: "t9_i1", bucketId: "min" }, { text: "t9_i2", bucketId: "min" }, { text: "t9_i3", bucketId: "min" }, { text: "t9_i4", bucketId: "ext" }, { text: "t9_i5", bucketId: "ext" }],
      instruction: "t9_inst"
    },
    quiz: { generate: "tajnyelv" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🛡️", title: "Őrzés", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "gap-fill", sentence: "t10_sent", choices: ["t10_c1", "t10_c2"], correctIndex: 0, instruction: "t10_inst" },
    quiz: { generate: "nyelvhasznalat_register" },
  },
];

export const MAGYAR_O7_I8_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "👥", title: "Kik", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "match-pairs", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }], instruction: "t1_inst" },
    quiz: { generate: "pragmatika_kontextus" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📍", title: "Hely", bg: "#F0F9FF", color: "#0369A1" },
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2"], correctIndex: 0, instruction: "t2_inst" },
    quiz: { generate: "pragmatika_kontextus" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Cél", bg: "#FDF2F8", color: "#DB2777" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "pragmatika_intenciok" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["Nyílt"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["Rejtett"], bg: "#FEF2F2", border: "#B91C1C" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "dir", label: "t4_b1" }, { id: "ind", label: "t4_b2" }],
      items: [{ text: "t4_i1", bucketId: "dir" }, { text: "t4_i2", bucketId: "dir" }, { text: "t4_i3", bucketId: "ind" }, { text: "t4_i4", bucketId: "ind" }],
      instruction: "t4_inst"
    },
    quiz: { generate: "pragmatika_intenciok" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🧩", title: "Jel", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }], instruction: "t5_inst" },
    quiz: { generate: "pragmatika_kontextus" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🔍", title: "Több", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t6_q",
      targets: [{ id: "v1", text: "t6_t1", isCorrect: true }, { id: "n1", text: "t6_t2", isCorrect: false }, { id: "n2", text: "t6_t3", isCorrect: false }],
      instruction: "t6_inst"
    },
    quiz: { generate: "pragmatika_kontextus" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["Ige"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Név"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "vrb", label: "t7_b1" }, { id: "nom", label: "t7_b2" }],
      items: [{ text: "t7_i1", bucketId: "vrb" }, { text: "t7_i2", bucketId: "nom" }],
      instruction: "t7_inst"
    },
    quiz: { generate: "pragmatika_kontextus" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "hagyomány", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t8_tok1", "t8_tok2", "t8_tok3"], correctIndices: [0, 1, 2], instruction: "t8_inst" },
    quiz: { generate: "pragmatika_kontextus" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🔠", title: "Nagy", bg: "#F3F4F6", color: "#111827" },
    interactive: { type: "highlight-text", tokens: ["t9_tok1", "t9_tok2", "t9_tok3", "t9_tok4", "t9_tok5"], correctIndices: [0, 1, 2], instruction: "t9_inst" },
    quiz: { generate: "pragmatika_kontextus" },
  },
  {
    difficulty: "easy", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: ",", title: "Vessző", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t10_sent", choices: ["t10_c1", "t10_c2"], correctIndex: 0, instruction: "t10_inst" },
    quiz: { generate: "pragmatika_kontextus" },
  },
];

export const MAGYAR_O7_I9_POOL: PoolTopicDef[] = [
  {
    difficulty: "hard", infoTitle: "t1_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["a", "o"], bg: "#FFF7ED", border: "#C2410C" }, right: { items: ["e", "ö"], bg: "#F0FDF4", border: "#15803D" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "deep", label: "t1_b1" }, { id: "high", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "deep" }, { text: "t1_i2", bucketId: "deep" }, { text: "t1_i3", bucketId: "deep" }, { text: "t1_i4", bucketId: "high" }, { text: "t1_i5", bucketId: "high" }, { text: "t1_i6", bucketId: "high" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "hangvaltozas" },
  },
  {
    difficulty: "hard", infoTitle: "t2_title", infoText: "",
    svg: { type: "simple-icon", icon: "🤝", title: "Kérdés", bg: "#F0F9FF", color: "#0369A1" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "szintaxis_mondatszerkezet" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "",
    svg: { type: "simple-icon", icon: "📰", title: "Sajtó", bg: "#F3F4F6", color: "#374151" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "irodalom_mufaj" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "",
    svg: { type: "text-bubbles", items: [{ text: "adó", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t4_tok1", "t4_tok2", "t4_tok3"], correctIndices: [0, 1, 2], instruction: "t4_inst" },
    quiz: { generate: "verbalis" },
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "",
    svg: { type: "simple-icon", icon: "✏️", title: "Írás", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2"], correctIndex: 0, instruction: "t5_inst" },
    quiz: { generate: "szintaxis_mondatszerkezet" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["vitéz"], bg: "#FEF3C7", border: "#D97706" }, right: { items: ["király"], bg: "#DCFCE7", border: "#16A34A" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "old", label: "t6_b1" }, { id: "slg", label: "t6_b2" }],
      items: [{ text: "t6_i1", bucketId: "old" }, { text: "t6_i2", bucketId: "old" }, { text: "t6_i3", bucketId: "slg" }, { text: "t6_i4", bucketId: "slg" }],
      instruction: "t6_inst"
    },
    quiz: { generate: "nyelvhasznalat_register" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "",
    svg: { type: "simple-icon", icon: "📊", title: "Szám", bg: "#F0F9FF", color: "#0369A1" },
    interactive: {
      type: "physics-slingshot", question: "t7_q",
      targets: [{ id: "v1", text: "t7_t1", isCorrect: true }, { id: "n1", text: "t7_t2", isCorrect: false }, { id: "n2", text: "t7_t3", isCorrect: false }],
      instruction: "t7_inst"
    },
    quiz: { generate: "szoveg_szerkezet" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "",
    svg: { type: "simple-icon", icon: "💬", title: "Kód", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }], instruction: "t8_inst" },
    quiz: { generate: "pragmatika_kontextus" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "",
    svg: { type: "simple-icon", icon: "💡", title: "Érv", bg: "#F0FDF4", color: "#15803D" },
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2"], correctIndex: 0, instruction: "t9_inst" },
    quiz: { generate: "ervales_haladó" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "",
    svg: { type: "simple-icon", icon: "🎓", title: "Vizsga", bg: "#FEFCE8", color: "#A16207" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "hangvaltozas" },
  },
];
