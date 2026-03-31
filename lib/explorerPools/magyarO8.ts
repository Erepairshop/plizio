// lib/explorerPools/magyarO8.ts

import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS (hu)
// ─────────────────────────────────────────────────────────────────────────────

export const MAGYAR_O8_I1_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Nyelvünk Hajnala",
    t1_title: "Ómagyar nyelvemlékek",
    t1_text: "A legkorábbi írásos emlékeink a 11-12. századból maradtak ránk. Ezek bizonyítják nyelvünk ősi eredetét és fejlődését.",
    t1_b1: "Nyelvemlék", t1_b2: "Nem az",
    t1_i1: "Halotti beszéd", t1_i2: "Mária-siralom", t1_i3: "Királytükör", t1_i4: "Újságcikk",
    t1_inst: "Válogasd szét a nyelvemlékeket!",
    t2_title: "Halotti beszéd",
    t2_text: "Az első összefüggő magyar nyelvű szövegemlék. A latin nyelvű Pray-kódexben maradt fenn.",
    t2_l1: "Latiatuc feleym", t2_r1: "Látjátok feleim", t2_l2: "puev s mc", t2_r2: "por és hamu",
    t2_inst: "Párosítsd az ómagyar szöveget a maival!",
    t3_title: "Mária-siralom",
    t3_text: "Az első magyar nyelvű versünk. Mély érzelmeket fejez ki a szenvedő anyáról.",
    t3_q: "Milyen kódexben található az Ómagyar Mária-siralom?",
    t3_t1: "Leuveni kódex", t3_t2: "Pray-kódex", t3_t3: "Jókai-kódex",
    t3_inst: "Válaszd ki a helyes kódexet!",
    t4_title: "Kódexek világa",
    t4_text: "A kódexek kézzel írt könyvek, gyakran díszes iniciálékkal. A kolostorokban készült pergamenre írták őket.",
    t4_b1: "Középkor", t4_b2: "Újkor",
    t4_i1: "Kódex", t4_i2: "Pergamen", t4_i3: "Lúdtoll", t4_i4: "Nyomdagép",
    t4_inst: "Mi tartozik a kódexmásoláshoz?",
    t5_title: "Jókai-kódex",
    t5_text: "A legrégebbi teljesen magyar nyelvű kódexünk, Szent Ferenc életéről és csodáiról szól.",
    t5_sent: "A Jókai-kódex a ___ századból származik.", t5_c1: "14.", t5_c2: "10.", t5_c3: "18.",
    t5_inst: "Mikor írták a kódexet?",
    t6_title: "Müncheni-kódex",
    t6_text: "A huszita bibliafordítás egyik fontos emléke, tartalmazza a négy evangéliumot magyarul.",
    t6_q: "Mit tartalmaz a Müncheni-kódex?",
    t6_t1: "Evangéliumokat", t6_t2: "Törvényeket", t6_t3: "Verseket",
    t6_inst: "Keresd a tartalmát!",
    t7_title: "Érdy-kódex",
    t7_text: "A legterjedelmesebb magyar nyelvű kódex, legendákat és prédikációkat tartalmaz a 16. századból.",
    t7_l1: "Legenda", t7_r1: "Szent élet", t7_l2: "Prédikáció", t7_r2: "Tanítás",
    t7_inst: "Párosítsd a műfajokat!",
    t8_title: "Történeti nyelvészet",
    t8_text: "A nyelvek időbeli változásait és rokoni kapcsolatait vizsgáló tudományág.",
    t8_tok1: "nyelv", t8_tok2: "változás", t8_tok3: "fejlődés", t8_tok4: "rokonság", t8_tok5: "szótár",
    t8_inst: "Melyek a nyelvészet kulcsszavai?",
    t9_title: "Nyelvrokonság",
    t9_text: "A magyar nyelv a finnugor nyelvcsaládba tartozik. Közös alapnyelvből származunk más rokon népekkel.",
    t9_b1: "Rokon", t9_b2: "Nem rokon",
    t9_i1: "Finn", t9_i2: "Észt", t9_i3: "Manysi", t9_i4: "Német", t9_i5: "Orosz",
    t9_inst: "Válogasd szét a rokon nyelveket!",
    t10_title: "Finno-ugor eredet",
    t10_text: "Alapszókincsünk (pl. hal, víz, kéz) és nyelvtani szerkezetünk mutatja a legszorosabb egyezést.",
    t10_q: "Melyik szó finnugor eredetű?",
    t10_t1: "hal", t10_t2: "autó", t10_t3: "iskola", t10_t4: "város",
    t10_inst: "Keresd az ősi szót!",
  }
};

export const MAGYAR_O8_I2_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Stílus és Alakzatok",
    t1_title: "Alliteráció",
    t1_text: "A szókezdő hangok ismétlődése, amely zeneiséget és hangsúlyt ad a szövegnek.",
    t1_tok1: "Szél", t1_tok2: "szikra", t1_tok3: "szándék", t1_tok4: "száll", t1_tok5: "magas",
    t1_inst: "Kattints az alliteráló szavakra!",
    t2_title: "Ritmika",
    t2_text: "A hangsúlyos és hangsúlytalan, vagy hosszú és rövid szótagok váltakozása.",
    t2_l1: "Jambus", t2_r1: "u -", t2_l2: "Trocheus", t2_r2: "- u", t2_l3: "Daktilus", t2_r3: "- u u",
    t2_inst: "Párosítsd a verslábakat!",
    t3_title: "Irónia",
    t3_text: "Amikor mást mondunk, mint amit valójában gondolunk, de a kontextusból kiderül az igazság.",
    t3_sent: "De 'szép' is ez a vihar!", t3_c1: "Irónia", t3_c2: "Dicséret",
    t3_inst: "Milyen stilisztikai eszköz ez?",
    t4_title: "Szatíra",
    t4_text: "A visszásságok, hibák nevetségessé tétele társadalmi kritika céljából.",
    t4_q: "Mi a szatíra fő célja?",
    t4_t1: "Társadalmi kritika", t4_t2: "Csak nevettetés", t4_t3: "Félelemkeltés",
    t4_inst: "Válaszd ki a célt!",
    t5_title: "Paródia",
    t5_text: "Egy ismert mű vagy stílus gúnyos, utánzó kiforgatása.",
    t5_b1: "Eredeti", t5_b2: "Paródia",
    t5_i1: "Himnusz", t5_i2: "Karinthy: Így írtok ti", t5_i3: "Hamlet", t5_i4: "Gúnyos utánzat",
    t5_inst: "Válogasd szét!",
    t6_title: "Stílusvariációk",
    t6_text: "A beszédhelyzethez alkalmazkodó nyelvhasználat (regiszterek).",
    t6_b1: "Hivatalos", t6_b2: "Bizalmas",
    t6_i1: "Tisztelt Uram!", t6_i2: "Szia haver!", t6_i3: "Kérem alássan", t6_i4: "Mi újság?",
    t6_inst: "Melyik stílus melyik?",
    t7_title: "Idiolektus",
    t7_text: "Az egyénre jellemző, egyedi nyelvhasználat és szófordulatok.",
    t7_q: "Mit jelent az idiolektus?",
    t7_t1: "Egyéni nyelvhasználat", t7_t2: "Tájnyelv", t7_t3: "Szaknyelv",
    t7_inst: "Keresd a jelentést!",
    t8_title: "Szociolektus",
    t8_text: "Egy adott társadalmi csoporthoz való tartozást kifejező nyelvhasználat.",
    t8_tok1: "szleng", t8_tok2: "argó", t8_tok3: "szaknyelv", t8_tok4: "tolvajnyelv",
    t8_inst: "Keresd a szociolektus típusait!",
    t9_title: "Dialektus",
    t9_text: "Egy adott földrajzi területre jellemző nyelvjárás vagy tájnyelv.",
    t9_l1: "Zárt e", t9_r1: "Ö-zés", t9_l2: "Sukkölés", t9_r2: "Nyelvjárás",
    t9_inst: "Párosítsd a jelenségeket!",
    t10_title: "Archaizmus",
    t10_text: "Régies, a mai köznyelvből már kiveszett szavak használata.",
    t10_q: "Melyik szó archaizmus?",
    t10_t1: "kend", t10_t2: "számítógép", t10_t3: "internet",
    t10_inst: "Keresd a régies szót!",
  }
};

export const MAGYAR_O8_I3_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szövegműhely",
    t1_title: "Motívumok",
    t1_text: "Visszatérő elemek, amelyek mélyebb értelmet adnak a műnek (pl. fény, út, kert).",
    t1_tok1: "Fény", t1_tok2: "Éjszaka", t1_tok3: "Út", t1_tok4: "Tükör", t1_tok5: "Betű",
    t1_inst: "Keresd a gyakori motívumokat!",
    t2_title: "Szimbólumok",
    t2_text: "Olyan jelkép, amely egy elvont fogalmat vagy érzést jelenít meg (pl. mérleg = igazság).",
    t2_l1: "Fehér galamb", t2_r1: "Béke", t2_l2: "Mérleg", t2_r2: "Igazság", t2_l3: "Vörös rózsa", t2_r3: "Szerelem",
    t2_inst: "Párosítsd a jelképet a jelentéssel!",
    t3_title: "Allegória",
    t3_text: "Egy egész művön vagy hosszabb szakaszon végigvitt metafora vagy jelképsor.",
    t3_q: "Mi az allegória lényege?",
    t3_t1: "Végigvitt kép", t3_t2: "Rövid hasonlat", t3_t3: "Szóvicc",
    t3_inst: "Válaszd a helyes választ!",
    t4_title: "Metafora (haladó)",
    t4_text: "Két fogalom azonosítása közös tulajdonság alapján. Lehet teljes vagy csonka.",
    t4_sent: "A tölgy egy ___ óriás.", t4_c1: "sudár", t4_c2: "zöld", t4_c3: "mozdulatlan",
    t4_inst: "Egészítsd ki a metaforát!",
    t5_title: "Kritikai gondolkodás",
    t5_text: "A szövegek elemzése során feltárjuk a rejtett összefüggéseket és szándékokat.",
    t5_b1: "Tény", t5_b2: "Vélemény",
    t5_i1: "A Duna folyó.", t5_i2: "Szerintem szép.", t5_i3: "Ez rossz döntés.", t5_i4: "100 fokon forr.",
    t5_inst: "Válogasd szét!",
    t6_title: "Tudományos szöveg",
    t6_text: "Tárgyilagos, pontos, szakkifejezéseket használó szövegtípus.",
    t6_tok1: "objektív", t6_tok2: "pontos", t6_tok3: "bizonyított", t6_tok4: "érzelmes", t6_tok5: "szubjektív",
    t6_inst: "Keresd a tudományos stílusjegyeit!",
    t7_title: "Absztrakt",
    t7_text: "A tudományos cikk elején álló rövid, tömör összefoglaló.",
    t7_q: "Hol található az absztrakt?",
    t7_t1: "A szöveg elején", t7_t2: "A végén", t7_t3: "Lábjegyzetben",
    t7_inst: "Keresd a helyét!",
    t8_title: "Konklúzió",
    t8_text: "A vizsgálat végén levont végső következtetés vagy eredmény.",
    t8_l1: "Hipotézis", t8_r1: "Feltételezés", t8_l2: "Konklúzió", t8_r2: "Zárás",
    t8_inst: "Párosítsd a fogalmakat!",
    t9_title: "Diskurzuselemzés",
    t9_text: "A szöveg és a társadalmi környezet közötti kapcsolat vizsgálata.",
    t9_sent: "Ki beszél? Kinek szól? Milyen ___ van?", t9_c1: "helyzet", t9_c2: "idő", t9_c3: "szín",
    t9_inst: "Mi hiányzik a kérdésből?",
    t10_title: "Szöveglingvisztika",
    t10_text: "A szöveg egészének szerkezetével és összefüggéseivel (koherencia) foglalkozik.",
    t10_q: "Mit jelent a koherencia?",
    t10_t1: "Összetartó erő", t10_t2: "Szószám", t10_t3: "Betűméret",
    t10_inst: "Keresd az értelmét!",
  }
};

export const MAGYAR_O8_I4_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Irodalomelmélet",
    t1_title: "Narratológia",
    t1_text: "Az elbeszélés tudománya: hogyan épül fel egy történet és ki meséli el.",
    t1_b1: "Elbeszélő", t1_b2: "Szereplő",
    t1_i1: "Narrátor", t1_i2: "Hős", t1_i3: "Antihős", t1_i4: "Mondó",
    t1_inst: "Ki kicsoda?",
    t2_title: "Nézőpontok",
    t2_text: "Az elbeszélő pozíciója: lehet mindentudó, korlátozott vagy külső szemlélő.",
    t2_l1: "E/1", t2_r1: "Én-elbeszélő", t2_l2: "E/3", t2_r2: "Mindentudó",
    t2_inst: "Párosítsd a nézőpontokat!",
    t3_title: "Megbízhatatlan narrátor",
    t3_text: "Amikor az elbeszélő szándékosan vagy tudatlanul félrevezeti az olvasót.",
    t3_q: "Mit tesz a megbízhatatlan narrátor?",
    t3_t1: "Félrevezet", t3_t2: "Mindig igazat mond", t3_t3: "Nincs benne a műben",
    t3_inst: "Válaszd a helyeset!",
    t4_title: "Poétika (haladó)",
    t4_text: "A költői formák és szerkezetek tudományos vizsgálata.",
    t4_tok1: "versláb", t4_tok2: "rím", t4_tok3: "strofa", t4_tok4: "ütem", t4_tok5: "mondat",
    t4_inst: "Keresd a poétikai fogalmakat!",
    t5_title: "Metrika",
    t5_text: "A versritmus szabályszerűségeinek rendszere (pl. időmértékes jambus).",
    t5_l1: "Jambus", t5_r1: "Emelkedő", t5_l2: "Trocheus", t5_r2: "Ereszkedő",
    t5_inst: "Milyen a lejtése?",
    t6_title: "Műfajelmélet",
    t6_text: "Az irodalmi alkotások csoportosítása (epika, líra, dráma) és alcsoportjaik.",
    t6_b1: "Líra", t6_b2: "Epika",
    t6_i1: "Dal", t6_i2: "Óda", t6_i3: "Regény", t6_i4: "Novella", t6_i5: "Elégia", t6_i6: "Eposz",
    t6_inst: "Válogasd szét a műfajokat!",
    t7_title: "Hibrid műfajok",
    t7_text: "Amikor több műfaj vagy műnem jegyei keverednek egy alkotásban.",
    t7_sent: "A ballada: tragédia dalban ___.", t7_c1: "elbeszélve", t7_c2: "eltáncolva", t7_c3: "lefestve",
    t7_inst: "Hogy nevezzük a balladát?",
    t8_title: "Recepcióesztétika",
    t8_text: "Az olvasó szerepét hangsúlyozza a mű értelmezésében és befogadásában.",
    t8_q: "Mit hangsúlyoz ez az elmélet?",
    t8_t1: "Az olvasó szerepét", t8_t2: "A papír minőségét", t8_t3: "Az író születésnapját",
    t8_inst: "Ki a fontos itt?",
    t9_title: "Horizontváltás",
    t9_text: "Az olvasói elvárások és a mű újdonsága közötti feszültség és változás.",
    t9_l1: "Elvárás", t9_r1: "Horizont", t9_l2: "Újdonság", t9_r2: "Váltás",
    t9_inst: "Párosítsd!",
    t10_title: "Interpretáció",
    t10_text: "A szöveg értelmezése, jelentésének feltárása különböző nézőpontokból.",
    t10_tok1: "elemzés", t10_tok2: "megértés", t10_tok3: "magyarázat", t10_tok4: "másolás",
    t10_inst: "Mi tartozik az értelmezéshez?",
  }
};

export const MAGYAR_O8_I5_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Helyesírás és Norma",
    t1_title: "Helyesírási alapok",
    t1_text: "A magyar helyesírás alapelvei: kiejtés, szóelemzés, hagyomány, egyszerűsítés.",
    t1_b1: "Helyes", t1_b2: "Helytelen",
    t1_i1: "bicikli", t1_i2: "folyó", t1_i3: "muszáj", t1_i4: "jösz", t1_i5: "mindíg",
    t1_inst: "Melyik van jól írva?",
    t2_title: "Összetett szavak",
    t2_text: "Két vagy több szó összekapcsolása. Figyelj a szótagszámra és a kötőjelre!",
    t2_l1: "asztal", t2_r1: "láb", t2_l2: "iskola", t2_r2: "táska", t2_l3: "számító", t2_r3: "gép",
    t2_inst: "Alkosd meg az összetett szavakat!",
    t3_title: "Tulajdonnevek",
    t3_text: "Személynevek, földrajzi nevek, intézmények neveit mindig nagybetűvel kezdjük.",
    t3_tok1: "Duna", t3_tok2: "Kovács", t3_tok3: "Magyarország", t3_tok4: "iskola", t3_tok5: "folyó",
    t3_inst: "Kattints a nagybetűs nevekre!",
    t4_title: "Elválasztás",
    t4_text: "A szavakat szótagok szerint választjuk el a sor végén.",
    t4_sent: "ka-rasz-___-ny", t4_c1: "ony", t4_c2: "on", t4_c3: "nyo",
    t4_inst: "Hogy választjuk el a 'karácsony' szót?",
    t5_title: "Köznyelviség",
    t5_text: "Az egységes, mindenki számára érthető és elfogadott nyelvváltozat (norma).",
    t5_q: "Mi a köznyelv szerepe?",
    t5_t1: "Közös megértés", t5_t2: "Csoportkizárás", t5_t3: "Titkos beszéd",
    t5_inst: "Válaszd ki a szerepét!",
    t6_title: "Szociolingvisztika",
    t6_text: "A nyelv és a társadalom közötti kölcsönhatásokat vizsgáló tudomány.",
    t6_tok1: "rétegződés", t6_tok2: "csoport", t6_tok3: "helyzet", t6_tok4: "atom", t6_tok5: "sejt",
    t6_inst: "Keresd a szociolingvisztika szavait!",
    t7_title: "Nyelvi egyenlőtlenség",
    t7_text: "Amikor bizonyos nyelvváltozatokat hátrányos megkülönböztetés ér a társadalomban.",
    t7_sent: "A nyelvhasználat alapján nem szabad ___.", t7_c1: "ítélkezni", t7_c2: "beszélni", t7_c3: "írni",
    t7_inst: "Egészítsd ki az elvet!",
    t8_title: "Kognitív nyelvészet",
    t8_text: "A nyelvhasználatot az emberi megismerés és gondolkodás felől közelíti meg.",
    t8_q: "Mit vizsgál a kognitív nyelvészet?",
    t8_t1: "Gondolkodást", t8_t2: "Csak hangokat", t8_t3: "Papírméretet",
    t8_inst: "Mire fókuszál?",
    t9_title: "Mentális reprezentáció",
    t9_text: "A fogalmak és szavak lenyomata az agyunkban és emlékezetünkben.",
    t9_l1: "Kép", t9_r1: "Reprezentáció", t9_l2: "Agy", t9_r2: "Mentális",
    t9_inst: "Párosítsd!",
    t10_title: "Prototípus elmélet",
    t10_text: "A kategóriáknak vannak tipikus (prototipikus) és kevésbé tipikus tagjai.",
    t10_b1: "Prototípus", t10_b2: "Szélső tag",
    t10_i1: "Veréb (madár)", t10_i2: "Pingvin (madár)", t10_i3: "Alma (gyümölcs)", t10_i4: "Kiwi (gyümölcs)",
    t10_inst: "Válogasd szét a tipikus példákat!",
  }
};

export const MAGYAR_O8_I6_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Jelentés és Használat",
    t1_title: "Szemantika",
    t1_text: "A nyelvi jelek jelentésével és jelentéskapcsolataival foglalkozó tudományág.",
    t1_tok1: "jelentés", t1_tok2: "fogalom", t1_tok3: "jel", t1_tok4: "forma", t1_tok5: "szín",
    t1_inst: "Keresd a szemantika fogalmait!",
    t2_title: "Poliszémia",
    t2_text: "Többjelentésű szavak, ahol a jelentések között logikai kapcsolat van (pl. szem).",
    t2_sent: "A 'szem' szó jelentései ___ vannak egymással.", t2_c1: "kapcsolatban", t2_c2: "ellentétben",
    t2_inst: "Mi az igaz a poliszémiára?",
    t3_title: "Homonímia",
    t3_text: "Azonos alakú szavak, ahol a jelentések között nincs kapcsolat (pl. fog).",
    t3_b1: "Fog (testrész)", t3_b2: "Fog (cselekvés)",
    t3_i1: "Főnév", t3_i2: "Ige",
    t3_inst: "Válaszd szét a homonimákat!",
    t4_title: "Pragmatika",
    t4_text: "A nyelvhasználat és a beszédhelyzet összefüggéseit vizsgálja konkrét szituációkban.",
    t4_q: "Mivel foglalkozik a pragmatika?",
    t4_t1: "Nyelvhasználattal", t4_t2: "Csak helyesírással", t4_t3: "Betűkkel",
    t4_inst: "Keresd a területét!",
    t5_title: "Kontextus",
    t5_text: "A beszédhelyzet egésze, amely meghatározza a közlés pontos értelmét.",
    t5_l1: "Ki mondja?", t5_r1: "Beszélő", t5_l2: "Hol mondja?", t5_r2: "Helyszín", t5_l3: "Mikor?", t5_r3: "Idő",
    t5_inst: "Párosítsd a körülményeket!",
    t6_title: "Implicit közlés",
    t6_text: "Amikor a szándékunkat nem mondjuk ki nyíltan, csak utalunk rá a hallgatónak.",
    t6_sent: "Hű, de hideg van itt! (Szándék: ___)", t6_c1: "Csukd be az ablakot", t6_c2: "Szeretnék fagyit",
    t6_inst: "Mi a rejtett üzenet?",
    t7_title: "Előfeltevés",
    t7_text: "Az információ, amit a beszélő igaznak feltételez az értelmezéshez.",
    t7_q: "Mit jelent a preszuppozíció?",
    t7_t1: "Előfeltevés", t7_t2: "Utólagos javítás", t7_t3: "Tagadás",
    t7_inst: "Keresd az idegen szót!",
    t8_title: "Interlanguage",
    t8_text: "A nyelvtanuló által használt 'köztes' nyelv az anyanyelv és a célnyelv között.",
    t8_tok1: "transzfer", t8_tok2: "hiba", t8_tok3: "fejlődés", t8_tok4: "tökéletesség",
    t8_inst: "Keresd a nyelvtanulás szavait!",
    t9_title: "Nyelvi transzfer",
    t9_text: "Amikor az anyanyelv szabályait visszük át az idegen nyelvre.",
    t9_sent: "A transzfer lehet pozitív vagy ___.", t9_c1: "negatív", t9_c2: "vidám", t9_c3: "gyors",
    t9_inst: "Milyen lehet a hatás?",
    t10_title: "Túlgeneralizálás",
    t10_text: "Amikor egy nyelvi szabályt olyan esetekre is alkalmazunk, ahol az nem érvényes.",
    t10_q: "Melyik példa a túlgeneralizálás?",
    t10_t1: "Szabálytalan ige szabályos ragozása", t10_t2: "Helyesírási hiba", t10_t3: "Félrehallás",
    t10_inst: "Keresd a hibát!",
  }
};

export const MAGYAR_O8_I7_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Érvelés és Vita",
    t1_title: "Érvelési technikák",
    t1_text: "A meggyőzés eszközei: adatok, bizonyítékok, logikai láncolatok és példák.",
    t1_tok1: "adat", t1_tok2: "példa", t1_tok3: "idézet", t1_tok4: "gúny", t1_tok5: "kiabálás",
    t1_inst: "Mivel érdemes érvelni?",
    t2_title: "Logikai bizonyítás",
    t2_text: "Következtetés levonása tényekből és előzményekből (szillogizmus).",
    t2_l1: "Tézis", t2_r1: "Állítás", t2_l2: "Argumentum", t2_r2: "Érv", t2_l3: "Konklúzió", t2_r3: "Zárás",
    t2_inst: "Párosítsd a részeket!",
    t3_title: "Analógia",
    t3_text: "Hasonlóságon alapuló következtetés két dolog vagy jelenség között.",
    t3_sent: "Ahogy a nap süt, úgy ___ az igazság.", t3_c1: "fénylik", t3_c2: "esik", t3_c3: "fúj",
    t3_inst: "Fejezd be az analógiát!",
    t4_title: "Etikai érvek",
    t4_text: "Erkölcsi értékekre, tisztességre és felelősségre alapozott meggyőzés.",
    t4_q: "Melyik egy etikai érv?",
    t4_t1: "Mert ez a helyes", t4_t2: "Mert olcsóbb", t4_t3: "Mert gyorsabb",
    t4_inst: "Keresd a morális választ!",
    t5_title: "Cáfolás módszerei",
    t5_text: "Az ellenfél érveinek megdöntése bizonyítékokkal vagy logikai rámutatással.",
    t5_b1: "Érv", t5_b2: "Cáfolat",
    t5_i1: "Mindenki ezt csinálja.", t5_i2: "De én nem!", t5_i3: "Sosem esik eső.", t5_i4: "Tegnap esett.",
    t5_inst: "Válogasd szét!",
    t6_title: "Ellenpélda",
    t6_text: "Egyetlen konkrét eset, amely megdönti az elhamarkodott általánosítást.",
    t6_sent: "Minden madár repül. Cáfolat: a ___.", t6_c1: "pingvin", t6_c2: "sas", t6_c3: "veréb",
    t6_inst: "Keresd az ellenpéldát!",
    t7_title: "Logikai hibák",
    t7_text: "Érvelési csapdák, mint a személyeskedés, a körbeforgás vagy a terelés.",
    t7_tok1: "személyeskedés", t7_tok2: "általánosítás", t7_tok3: "terelés", t7_tok4: "logika",
    t7_inst: "Melyek a hibák?",
    t8_title: "Forráskritika",
    t8_text: "Az információk hitelességének, eredetének és elfogulatlanságának ellenőrzése.",
    t8_q: "Mi a forráskritika lényege?",
    t8_t1: "Hitelesség ellenőrzése", t8_t2: "Másolás", t8_t3: "Csak elolvasás",
    t8_inst: "Mire jó?",
    t9_title: "Érvelő szöveg",
    t9_text: "Szerkezete: bevezetés, tétel, érvek, cáfolat és végső összegzés.",
    t9_l1: "Bevezetés", t9_r1: "Figyelem", t9_l2: "Tárgyalás", t9_r2: "Kifejtés", t9_l3: "Befejezés", t9_r3: "Összegzés",
    t9_inst: "Párosítsd a részeket!",
    t10_title: "Retorika",
    t10_text: "A szónoklattan tudománya: hogyan beszéljünk meggyőzően és hatásosan a közönség előtt.",
    t10_q: "Ki volt a híres római szónok?",
    t10_t1: "Cicero", t10_t2: "Napóleon", t10_t3: "Einstein",
    t10_inst: "Keresd a szónokot!",
  }
};

export const MAGYAR_O8_I8_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Nyelvtani Gyakorló",
    t1_title: "Mondatok rendezése",
    t1_text: "Tedd logikai sorrendbe a mondatrészeket vagy a szöveget az értelmes közléshez.",
    t1_w1: "Az", t1_w2: "érvelés", t1_w3: "nagyon", t1_w4: "fontos.",
    t1_inst: "Rendezd sorba a szavakat!",
    t2_title: "Alany-állítmány",
    t2_text: "Az állítmány és az alany közötti nyelvtani egyeztetés számban és személyben.",
    t2_sent: "A gyerekek vidáman ___.", t2_c1: "játszanak", t2_c2: "játszik", t2_c3: "játszani",
    t2_inst: "Válaszd ki a helyes alakot!",
    t3_title: "Toldalékolás",
    t3_text: "A szavakhoz kapcsolódó képzők, jelek és ragok helyes használata.",
    t3_l1: "ház", t3_r1: "-ban", t3_l2: "kert", t3_r2: "-ben", t3_l3: "autó", t3_r3: "-val",
    t3_inst: "Párosítsd a ragozott alakokat!",
    t4_title: "Szócsaládok",
    t4_text: "Azonos tőből származó, jelentésben összefüggő szavak csoportja (pl. ír, író, írás).",
    t4_b1: "Szócsalád", t4_b2: "Nem az",
    t4_i1: "ír", t4_i2: "írás", t4_i3: "író", t4_i4: "írógép", t4_i5: "itthon",
    t4_inst: "Válogasd szét a szavakat!",
    t5_title: "Nyelvtani esetek",
    t5_text: "A főnevek mondatbeli szerepét meghatározó ragok (tárgy, részes, határozó).",
    t5_q: "Melyik a tárgyrag?",
    t5_t1: "-t", t5_t2: "-nak", t5_t3: "-ba", t5_t4: "-ért",
    t5_inst: "Keresd a ragot!",
    t6_title: "Mondatrészek",
    t6_text: "Jelöld meg a mondat legfontosabb szerkezeti elemeit: alany, állítmány, tárgy.",
    t6_tok1: "Péter", t6_tok2: "almát", t6_tok3: "eszik", t6_tok4: "a", t6_tok5: "kertben",
    t6_inst: "Melyik az ÁLLÍTMÁNY?",
    t7_title: "Lyukas mondatok",
    t7_text: "Pótold a hiányzó szavakat a szöveg értelme és a nyelvhelyesség alapján.",
    t7_sent: "A ___ tudomány a nyelvvel foglalkozik.", t7_c1: "nyelvészeti", t7_c2: "biológiai", t7_c3: "kémiai",
    t7_inst: "Mi illik a mondatba?",
    t8_title: "Hibakeresés",
    t8_text: "Keresd meg és javítsd ki a helyesírási hibákat a megadott szövegben.",
    t8_tok1: "Ez", t8_tok2: "egy", t8_tok3: "muszály", t8_tok4: "dolog", t8_tok5: ".",
    t8_inst: "Kattints a HIBÁS szóra!",
    t9_title: "Szövegszekvencia",
    t9_text: "Rendezd logikai vagy időrendi sorrendbe a szöveg bekezdéseit.",
    t9_w1: "Először", t9_w2: "Aztán", t9_w3: "Végül",
    t9_inst: "Tedd sorrendbe!",
    t10_title: "Multimodalitás",
    t10_text: "Különböző jeltípusok (kép, hang, videó, szöveg) együttes használata.",
    t10_q: "Mi jellemzi a multimodális szöveget?",
    t10_t1: "Több csatorna", t10_t2: "Csak szöveg", t10_t3: "Csak kép",
    t10_inst: "Válaszd a jellemzőt!",
  }
};

export const MAGYAR_O8_I9_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Záró Ismétlés",
    t1_title: "Nyelvtörténet",
    t1_b1: "Ómagyar", t1_b2: "Mai",
    t1_i1: "isa", t1_i2: "látjátok", t1_i3: "hadlaua", t1_i4: "halál", t1_i5: "mancsi",
    t1_inst: "Válogasd szét a korokat!",
    t2_title: "Stilisztika",
    t2_l1: "Irónia", t2_r1: "Ellentét", t2_l2: "Alliteráció", t2_r2: "Betű", t2_l3: "Szatíra", t2_r3: "Gúny",
    t2_inst: "Párosítsd a fogalmakat!",
    t3_title: "Szöveganalízis",
    t3_q: "Mit jelent a motívum?",
    t3_t1: "Visszatérő elem", t3_t2: "Egyszeri szó", t3_t3: "Helyesírás",
    t3_inst: "Ismétlő kérdés",
    t4_title: "Irodalomelmélet",
    t4_tok1: "narrátor", t4_tok2: "nézőpont", t4_tok3: "műfaj", t4_tok4: "rím", t4_tok5: "szék",
    t4_inst: "Keresd az irodalmi szakkifejezéseket!",
    t5_title: "Helyesírás",
    t5_sent: "A 'muszá___' szó írása.", t5_c1: "j", t5_c2: "ly",
    t5_inst: "Válaszd ki a jót!",
    t6_title: "Nyelv és Társadalom",
    t6_b1: "Köznyelv", t6_b2: "Szleng",
    t6_i1: "Megérkeztem.", t6_i2: "Beestem.", t6_i3: "Értem.", t6_i4: "Vágom.",
    t6_inst: "Csoportosíts!",
    t7_title: "Jelentéstan",
    t7_q: "Mit jelent a poliszémia?",
    t7_t1: "Több jelentés", t7_t2: "Egy jelentés", t7_t3: "Nincs jelentés",
    t7_inst: "Válaszd a választ!",
    t8_title: "Beszédhelyzet",
    t8_l1: "Ki?", t8_r1: "Beszélő", t8_l2: "Hol?", t8_r2: "Szituáció", t8_l3: "Hogy?", t8_r3: "Csatorna",
    t8_inst: "Párosítsd a pragmatikai elemeket!",
    t9_title: "Érvelés mester",
    t9_sent: "Az érvelés alapja a ___ gondolkodás.", t9_c1: "logikus", t9_c2: "gyors", t9_c3: "szép",
    t9_inst: "Mi hiányzik?",
    t10_title: "Záróvizsga",
    t10_q: "Mi a magyar nyelv nyelvcsaládja?",
    t10_t1: "Finnugor", t10_t2: "Indoeurópai", t10_t3: "Szláv", t10_t4: "Germán",
    t10_inst: "Az utolsó kérdés!",
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// POOLS
// ─────────────────────────────────────────────────────────────────────────────

export const MAGYAR_O8_I1_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["H. beszéd", "Mária-s."], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["Újság", "Email"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "anc", label: "t1_b1" }, { id: "mod", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "anc" }, { text: "t1_i2", bucketId: "anc" }, { text: "t1_i3", bucketId: "anc" }, { text: "t1_i4", bucketId: "mod" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "omagyr" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📜", title: "Halotti b.", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }], instruction: "t2_inst" },
    quiz: { generate: "omagyr" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "⛪", title: "Siratom", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "omagyr" },
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["Lúdtoll", "Kódex"], bg: "#FEF3C7", border: "#D97706" }, right: { items: ["Laptop", "Monitor"], bg: "#E0F2FE", border: "#0EA5E9" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "old", label: "t4_b1" }, { id: "new", label: "t4_b2" }],
      items: [{ text: "t4_i1", bucketId: "old" }, { text: "t4_i2", bucketId: "old" }, { text: "t4_i3", bucketId: "old" }, { text: "t4_i4", bucketId: "new" }],
      instruction: "t4_inst"
    },
    quiz: { generate: "kodexek" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📖", title: "Jókai-k.", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3"], correctIndex: 0, instruction: "t5_inst" },
    quiz: { generate: "kodexek" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "⛪", title: "München", bg: "#F0F9FF", color: "#0369A1" },
    interactive: {
      type: "physics-slingshot", question: "t6_q",
      targets: [{ id: "v1", text: "t6_t1", isCorrect: true }, { id: "n1", text: "t6_t2", isCorrect: false }, { id: "n2", text: "t6_t3", isCorrect: false }],
      instruction: "t6_inst"
    },
    quiz: { generate: "kodexek" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📚", title: "Érdy", bg: "#F0FDF4", color: "#15803D" },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_l1", right: "t7_r1" }, { left: "t7_l2", right: "t7_r2" }], instruction: "t7_inst" },
    quiz: { generate: "kodexek" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "nyelv", color: "#1F2937", bg: "#F3F4F6" }, { text: "idő", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t8_tok1", "t8_tok2", "t8_tok3", "t8_tok4"], correctIndices: [0, 1, 2, 3], instruction: "t8_inst" },
    quiz: { generate: "történeti_nyelvészet" },
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["Finn", "Manysi"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["Angol", "Orosz"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "rel", label: "t9_b1" }, { id: "not", label: "t9_b2" }],
      items: [{ text: "t9_i1", bucketId: "rel" }, { text: "t9_i2", bucketId: "rel" }, { text: "t9_i3", bucketId: "rel" }, { text: "t9_i4", bucketId: "not" }, { text: "t9_i5", bucketId: "not" }],
      instruction: "t9_inst"
    },
    quiz: { generate: "történeti_nyelvészet" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🏹", title: "Őshaza", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "történeti_nyelvészet" },
  },
];

export const MAGYAR_O8_I2_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "sz", color: "#1F2937", bg: "#F3F4F6" }, { text: "sz", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t1_tok1", "t1_tok2", "t1_tok3", "t1_tok4", "t1_tok5"], correctIndices: [0, 1, 2, 3], instruction: "t1_inst" },
    quiz: { generate: "alliteracio_ritmika" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🥁", title: "Ritmus", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "alliteracio_ritmika" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "😏", title: "Irónia", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "gap-fill", sentence: "t3_sent", choices: ["t3_c1", "t3_c2"], correctIndex: 0, instruction: "t3_inst" },
    quiz: { generate: "ironia_szatira" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "👺", title: "Szatíra", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t4_q",
      targets: [{ id: "v1", text: "t4_t1", isCorrect: true }, { id: "n1", text: "t4_t2", isCorrect: false }, { id: "n2", text: "t4_t3", isCorrect: false }],
      instruction: "t4_inst"
    },
    quiz: { generate: "ironia_szatira" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Eredeti"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["Gúny"], bg: "#FEF2F2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "orig", label: "t5_b1" }, { id: "par", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "orig" }, { text: "t5_i2", bucketId: "par" }, { text: "t5_i3", bucketId: "orig" }, { text: "t5_i4", bucketId: "par" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "ironia_szatira" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["Önnel"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Veled"], bg: "#DCFCE7", border: "#16A34A" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "form", label: "t6_b1" }, { id: "inf", label: "t6_b2" }],
      items: [{ text: "t6_i1", bucketId: "form" }, { text: "t6_i2", bucketId: "inf" }, { text: "t6_i3", bucketId: "form" }, { text: "t6_i4", bucketId: "inf" }],
      instruction: "t6_inst"
    },
    quiz: { generate: "stílus_variacio" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "👤", title: "Én", bg: "#F3F4F6", color: "#111827" },
    interactive: {
      type: "physics-slingshot", question: "t7_q",
      targets: [{ id: "v1", text: "t7_t1", isCorrect: true }, { id: "n1", text: "t7_t2", isCorrect: false }, { id: "n2", text: "t7_t3", isCorrect: false }],
      instruction: "t7_inst"
    },
    quiz: { generate: "stílus_variacio" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "csoport", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t8_tok1", "t8_tok2", "t8_tok3", "t8_tok4"], correctIndices: [0, 1, 2, 3], instruction: "t8_inst" },
    quiz: { generate: "stílus_variacio" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🌍", title: "Vidék", bg: "#ECFDF5", color: "#047857" },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_l1", right: "t9_r1" }, { left: "t9_l2", right: "t9_r2" }], instruction: "t9_inst" },
    quiz: { generate: "stílus_variacio" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "⏳", title: "Régies", bg: "#FFFBEB", color: "#B45309" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "stílus_variacio" },
  },
];

export const MAGYAR_O8_I3_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "icon-grid", items: [{ emoji: "🔆" }, { emoji: "🛣️" }] },
    interactive: { type: "highlight-text", tokens: ["t1_tok1", "t1_tok2", "t1_tok3", "t1_tok4", "t1_tok5"], correctIndices: [0, 1, 2, 3], instruction: "t1_inst" },
    quiz: { generate: "irodalmi_elemzes" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🕊️", title: "Jelkép", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "irodalmi_elemzes" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🏰", title: "Vár", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "irodalmi_elemzes" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🌳", title: "Fa", bg: "#F0FDF4", color: "#15803D" },
    interactive: { type: "gap-fill", sentence: "t4_sent", choices: ["t4_c1", "t4_c2", "t4_c3"], correctIndex: 0, instruction: "t4_inst" },
    quiz: { generate: "irodalmi_elemzes" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Folyó"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Szép"], bg: "#FDF2F8", border: "#DB2777" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "fact", label: "t5_b1" }, { id: "op", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "fact" }, { text: "t5_i2", bucketId: "op" }, { text: "t5_i3", bucketId: "op" }, { text: "t5_i4", bucketId: "fact" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "kritikai_gondolkodas" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "adat", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4", "t6_tok5"], correctIndices: [0, 1, 2], instruction: "t6_inst" },
    quiz: { generate: "tudomanyos_szoveg" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📄", title: "Kivonat", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t7_q",
      targets: [{ id: "v1", text: "t7_t1", isCorrect: true }, { id: "n1", text: "t7_t2", isCorrect: false }, { id: "n2", text: "t7_t3", isCorrect: false }],
      instruction: "t7_inst"
    },
    quiz: { generate: "tudomanyos_szoveg" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏁", title: "Vége", bg: "#F3F4F6", color: "#111827" },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }], instruction: "t8_inst" },
    quiz: { generate: "tudomanyos_szoveg" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🗣️", title: "Diskurzus", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2", "t9_c3"], correctIndex: 0, instruction: "t9_inst" },
    quiz: { generate: "diskurzus_elemzés" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🧶", title: "Kötés", bg: "#FDF2F8", color: "#DB2777" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "szöveglingu_szöveg" },
  },
];

export const MAGYAR_O8_I4_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Elbeszélő"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Hős"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "narr", label: "t1_b1" }, { id: "char", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "narr" }, { text: "t1_i2", bucketId: "char" }, { text: "t1_i3", bucketId: "char" }, { text: "t1_i4", bucketId: "narr" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "narratologia_narracio" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "👁️", title: "Szem", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }], instruction: "t2_inst" },
    quiz: { generate: "narratologia_narracio" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🤥", title: "Hazug", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "narratologia_narracio" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "text-bubbles", items: [{ text: "rím", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"], correctIndices: [0, 1, 2, 3], instruction: "t4_inst" },
    quiz: { generate: "poétika_haladó" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📏", title: "Mérték", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }], instruction: "t5_inst" },
    quiz: { generate: "poétika_haladó" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["Dal"], bg: "#FDF2F8", border: "#DB2777" }, right: { items: ["Regény"], bg: "#DBEAFE", border: "#2563EB" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "lyr", label: "t6_b1" }, { id: "epi", label: "t6_b2" }],
      items: [{ text: "t6_i1", bucketId: "lyr" }, { text: "t6_i2", bucketId: "lyr" }, { text: "t6_i3", bucketId: "epi" }, { text: "t6_i4", bucketId: "epi" }, { text: "t6_i5", bucketId: "lyr" }, { text: "t6_i6", bucketId: "epi" }],
      instruction: "t6_inst"
    },
    quiz: { generate: "műfajok_elméleti" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧬", title: "Hibrid", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2"], correctIndex: 0, instruction: "t7_inst" },
    quiz: { generate: "műfajok_elméleti" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "👓", title: "Olvasó", bg: "#F3F4F6", color: "#111827" },
    interactive: {
      type: "physics-slingshot", question: "t8_q",
      targets: [{ id: "v1", text: "t8_t1", isCorrect: true }, { id: "n1", text: "t8_t2", isCorrect: false }, { id: "n2", text: "t8_t3", isCorrect: false }],
      instruction: "t8_inst"
    },
    quiz: { generate: "recepció_esztétika" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🌅", title: "Látóhatár", bg: "#FFEDD5", color: "#D97706" },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_l1", right: "t9_r1" }, { left: "t9_l2", right: "t9_r2" }], instruction: "t9_inst" },
    quiz: { generate: "recepció_esztétika" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "text-bubbles", items: [{ text: "megértés", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t10_tok1", "t10_tok2", "t10_tok3", "t10_tok4"], correctIndices: [0, 1, 2], instruction: "t10_inst" },
    quiz: { generate: "recepció_esztétika" },
  },
];

export const MAGYAR_O8_I5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["Helyes"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["Rossz"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "ok", label: "t1_b1" }, { id: "bad", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "ok" }, { text: "t1_i2", bucketId: "ok" }, { text: "t1_i3", bucketId: "ok" }, { text: "t1_i4", bucketId: "bad" }, { text: "t1_i5", bucketId: "bad" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "compound-word", word1: "asztal", word2: "láb", result: "asztalláb", color: "#3B82F6" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🏙️", title: "Nagybetű", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "highlight-text", tokens: ["t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5"], correctIndices: [0, 1, 2], instruction: "t3_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-syllables", parts: ["ka", "rác", "sony"], color: "#DB2777" },
    interactive: { type: "gap-fill", sentence: "t4_sent", choices: ["t4_c1", "t4_c2"], correctIndex: 0, instruction: "t4_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⚖️", title: "Norma", bg: "#F3F4F6", color: "#374151" },
    interactive: {
      type: "physics-slingshot", question: "t5_q",
      targets: [{ id: "v1", text: "t5_t1", isCorrect: true }, { id: "n1", text: "t5_t2", isCorrect: false }, { id: "n2", text: "t5_t3", isCorrect: false }],
      instruction: "t5_inst"
    },
    quiz: { generate: "kozmagyar" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "társadalom", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4", "t6_tok5"], correctIndices: [0, 1, 2], instruction: "t6_inst" },
    quiz: { generate: "szociolingvisztika_szocio" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🚫", title: "Tilos", bg: "#FEE2E2", color: "#DC2626" },
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2"], correctIndex: 0, instruction: "t7_inst" },
    quiz: { generate: "szociolingvisztika_szocio" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧠", title: "Elme", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t8_q",
      targets: [{ id: "v1", text: "t8_t1", isCorrect: true }, { id: "n1", text: "t8_t2", isCorrect: false }, { id: "n2", text: "t8_t3", isCorrect: false }],
      instruction: "t8_inst"
    },
    quiz: { generate: "kognitív_nyelv" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🖼️", title: "Kép", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_l1", right: "t9_r1" }, { left: "t9_l2", right: "t9_r2" }], instruction: "t9_inst" },
    quiz: { generate: "kognitív_nyelv" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["Veréb"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["Pingvin"], bg: "#F3F4F6", border: "#9CA3AF" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "prot", label: "t10_b1" }, { id: "edge", label: "t10_b2" }],
      items: [{ text: "t10_i1", bucketId: "prot" }, { text: "t10_i2", bucketId: "edge" }, { text: "t10_i3", bucketId: "prot" }, { text: "t10_i4", bucketId: "edge" }],
      instruction: "t10_inst"
    },
    quiz: { generate: "kognitív_nyelv" },
  },
];

export const MAGYAR_O8_I6_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "jelentés", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t1_tok1", "t1_tok2", "t1_tok3", "t1_tok4", "t1_tok5"], correctIndices: [0, 1, 2], instruction: "t1_inst" },
    quiz: { generate: "szemantika_szomantika" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔗", title: "Kötés", bg: "#F0F9FF", color: "#0369A1" },
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2"], correctIndex: 0, instruction: "t2_inst" },
    quiz: { generate: "szemantika_szomantika" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["Test"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["Tesz"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "noun", label: "t3_i1" }, { id: "verb", label: "t3_i2" }],
      items: [{ text: "Fog", bucketId: "noun" }, { text: "Fog", bucketId: "verb" }],
      instruction: "t3_inst"
    },
    quiz: { generate: "szemantika_szomantika" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "💬", title: "Beszéd", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: {
      type: "physics-slingshot", question: "t4_q",
      targets: [{ id: "v1", text: "t4_t1", isCorrect: true }, { id: "n1", text: "t4_t2", isCorrect: false }, { id: "n2", text: "t4_t3", isCorrect: false }],
      instruction: "t4_inst"
    },
    quiz: { generate: "pragmatika_pragmatika" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📍", title: "Hely", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }, { left: "t5_l3", right: "t5_r3" }], instruction: "t5_inst" },
    quiz: { generate: "pragmatika_pragmatika" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🤫", title: "Súg", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "gap-fill", sentence: "t6_sent", choices: ["t6_c1", "t6_c2"], correctIndex: 0, instruction: "t6_inst" },
    quiz: { generate: "pragmatika_pragmatika" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "💡", title: "Tud", bg: "#FFFBEB", color: "#B45309" },
    interactive: {
      type: "physics-slingshot", question: "t7_q",
      targets: [{ id: "v1", text: "t7_t1", isCorrect: true }, { id: "n1", text: "t7_t2", isCorrect: false }, { id: "n2", text: "t7_t3", isCorrect: false }],
      instruction: "t7_inst"
    },
    quiz: { generate: "pragmatika_pragmatika" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "köztes", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t8_tok1", "t8_tok2", "t8_tok3", "t8_tok4"], correctIndices: [0, 1, 2], instruction: "t8_inst" },
    quiz: { generate: "interlingva_interfész" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "✈️", title: "Átvitel", bg: "#DBEAFE", color: "#2563EB" },
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2"], correctIndex: 0, instruction: "t9_inst" },
    quiz: { generate: "interlingva_interfész" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📏", title: "Mindenre", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "interlingva_interfész" },
  },
];

export const MAGYAR_O8_I7_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "adat", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t1_tok1", "t1_tok2", "t1_tok3", "t1_tok4", "t1_tok5"], correctIndices: [0, 1, 2], instruction: "t1_inst" },
    quiz: { generate: "ervales_technika" },
  },
  {
    difficulty: "hard", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🧠", title: "Logika", bg: "#F3F4F6", color: "#111827" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "ervales_technika" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "⚖️", title: "Mérleg", bg: "#F0F9FF", color: "#0369A1" },
    interactive: { type: "gap-fill", sentence: "t3_sent", choices: ["t3_c1", "t3_c2", "t3_c3"], correctIndex: 0, instruction: "t3_inst" },
    quiz: { generate: "ervales_technika" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "❤️", title: "Jó", bg: "#FDF2F8", color: "#DB2777" },
    interactive: {
      type: "physics-slingshot", question: "t4_q",
      targets: [{ id: "v1", text: "t4_t1", isCorrect: true }, { id: "n1", text: "t4_t2", isCorrect: false }, { id: "n2", text: "t4_t3", isCorrect: false }],
      instruction: "t4_inst"
    },
    quiz: { generate: "ervales_technika" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Állítás"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Ellentét"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "arg", label: "t5_b1" }, { id: "ref", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "arg" }, { text: "t5_i2", bucketId: "ref" }, { text: "t5_i3", bucketId: "arg" }, { text: "t5_i4", bucketId: "ref" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "cafolás" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🐧", title: "Pingvin", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t6_sent", choices: ["t6_c1", "t6_c2", "t6_c3"], correctIndex: 0, instruction: "t6_inst" },
    quiz: { generate: "cafolás" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "text-bubbles", items: [{ text: "hiba", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t7_tok1", "t7_tok2", "t7_tok3", "t7_tok4"], correctIndices: [0, 1, 2], instruction: "t7_inst" },
    quiz: { generate: "cafolás" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🔍", title: "Vizsgálat", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t8_q",
      targets: [{ id: "v1", text: "t8_t1", isCorrect: true }, { id: "n1", text: "t8_t2", isCorrect: false }, { id: "n2", text: "t8_t3", isCorrect: false }],
      instruction: "t8_inst"
    },
    quiz: { generate: "cafolás" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "📝", title: "Vázlat", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_l1", right: "t9_r1" }, { left: "t9_l2", right: "t9_r2" }, { left: "t9_l3", right: "t9_r3" }], instruction: "t9_inst" },
    quiz: { generate: "ervales_technika" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🎤", title: "Beszéd", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "ervales_technika" },
  },
];

export const MAGYAR_O8_I8_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧩", title: "Rendez", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "physics-stacker", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"], correctOrder: [0, 1, 2, 3], instruction: "t1_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🤝", title: "Egyez", bg: "#F0F9FF", color: "#0369A1" },
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3"], correctIndex: 0, instruction: "t2_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📎", title: "Rag", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "match-pairs", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }], instruction: "t3_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["ír", "író"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["itthon"], bg: "#F3F4F6", border: "#9CA3AF" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "fam", label: "t4_b1" }, { id: "not", label: "t4_b2" }],
      items: [{ text: "t4_i1", bucketId: "fam" }, { text: "t4_i2", bucketId: "fam" }, { text: "t4_i3", bucketId: "fam" }, { text: "t4_i4", bucketId: "fam" }, { text: "t4_i5", bucketId: "not" }],
      instruction: "t4_inst"
    },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📦", title: "Eset", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t5_q",
      targets: [{ id: "v1", text: "t5_t1", isCorrect: true }, { id: "n1", text: "t5_t2", isCorrect: false }, { id: "n2", text: "t5_t3", isCorrect: false }],
      instruction: "t5_inst"
    },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "✂️", title: "Elem", bg: "#FEE2E2", color: "#DC2626" },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4", "t6_tok5"], correctIndices: [2], instruction: "t6_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🕳️", title: "Lyuk", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2", "t7_c3"], correctIndex: 0, instruction: "t7_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🚨", title: "Hiba", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: { type: "highlight-text", tokens: ["t8_tok1", "t8_tok2", "t8_tok3", "t8_tok4", "t8_tok5"], correctIndices: [2], instruction: "t8_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🔢", title: "Sorrend", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "physics-stacker", words: ["t9_w1", "t9_w2", "t9_w3"], correctOrder: [0, 1, 2], instruction: "t9_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🎥", title: "Média", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "osszefoglalo" },
  },
];

export const MAGYAR_O8_I9_POOL: PoolTopicDef[] = [
  {
    difficulty: "hard", infoTitle: "t1_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["isa"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["mai"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "old", label: "t1_b1" }, { id: "new", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "old" }, { text: "t1_i2", bucketId: "new" }, { text: "t1_i3", bucketId: "old" }, { text: "t1_i4", bucketId: "new" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "omagyr" },
  },
  {
    difficulty: "hard", infoTitle: "t2_title", infoText: "",
    svg: { type: "simple-icon", icon: "🎭", title: "Ismétlő", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "ironia_szatira" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "",
    svg: { type: "simple-icon", icon: "🔍", title: "Ismétlő", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "n1", text: "t3_t2", isCorrect: false }, { id: "n2", text: "t3_t3", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "irodalmi_elemzes" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "",
    svg: { type: "text-bubbles", items: [{ text: "irodalom", color: "#1F2937", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"], correctIndices: [0, 1, 2, 3], instruction: "t4_inst" },
    quiz: { generate: "narratologia_narracio" },
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "",
    svg: { type: "simple-icon", icon: "✏️", title: "J-ly", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3"], correctIndex: 0, instruction: "t5_inst" },
    quiz: { generate: "osszefoglalo" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["Köznyelv"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Szleng"], bg: "#DCFCE7", border: "#16A34A" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "norm", label: "t6_b1" }, { id: "slang", label: "t6_b2" }],
      items: [{ text: "t6_i1", bucketId: "norm" }, { text: "t6_i2", bucketId: "slang" }, { text: "t6_i3", bucketId: "norm" }, { text: "t6_i4", bucketId: "slang" }],
      instruction: "t6_inst"
    },
    quiz: { generate: "szociolingvisztika_szocio" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "",
    svg: { type: "simple-icon", icon: "🧠", title: "Értelem", bg: "#FFFBEB", color: "#B45309" },
    interactive: {
      type: "physics-slingshot", question: "t7_q",
      targets: [{ id: "v1", text: "t7_t1", isCorrect: true }, { id: "n1", text: "t7_t2", isCorrect: false }, { id: "n2", text: "t7_t3", isCorrect: false }],
      instruction: "t7_inst"
    },
    quiz: { generate: "szemantika_szomantika" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "",
    svg: { type: "simple-icon", icon: "💬", title: "Használat", bg: "#F0F9FF", color: "#0369A1" },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }], instruction: "t8_inst" },
    quiz: { generate: "pragmatika_pragmatika" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "",
    svg: { type: "simple-icon", icon: "💡", title: "Érv", bg: "#F0FDF4", color: "#15803D" },
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2", "t9_c3"], correctIndex: 0, instruction: "t9_inst" },
    quiz: { generate: "ervales_technika" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "",
    svg: { type: "simple-icon", icon: "🎓", title: "Vizsga", bg: "#FEFCE8", color: "#A16207" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }, { id: "n3", text: "t10_t4", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "történeti_nyelvészet" },
  },
];
