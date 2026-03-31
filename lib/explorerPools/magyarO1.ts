// lib/explorerPools/magyarO1.ts

import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// LABELS (hu)
// ─────────────────────────────────────────────────────────────────────────────

export const MAGYAR_O1_I1_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Betűsziget",
    t1_title: "Magánhangzók",
    t1_text: "A magánhangzók (a, e, i, o, u...) a beszéd alapjai. Önállóan is kimondhatók.",
    t1_b1: "Magánhangzó", t1_b2: "Mássalhangzó",
    t1_i1: "a", t1_i2: "e", t1_i3: "i", t1_i4: "o", t1_i5: "b", t1_i6: "k", t1_i7: "m", t1_i8: "p",
    t1_inst: "Válogasd szét a betűket!",
    t2_title: "Mássalhangzók",
    t2_text: "A mássalhangzók (b, c, d...) kiejtéséhez egy magánhangzó is kell.",
    t2_b1: "Mássalhangzó", t2_b2: "Magánhangzó",
    t2_i1: "c", t2_i2: "d", t2_i3: "f", t2_i4: "g", t2_i5: "á", t2_i6: "é", t2_i7: "ó", t2_i8: "ű",
    t2_inst: "Válogasd szét a betűket!",
    t3_title: "ABC-sorrend",
    t3_text: "Az ABC segít a szavak rendezésében. Az első betűt figyeld!",
    t3_w1: "alma", t3_w2: "béka", t3_w3: "cica", t3_w4: "daru",
    t3_inst: "Tedd ABC-sorrendbe a szavakat!",
    t4_title: "Szótagszám",
    t4_text: "Ahány magánhangzó van egy szóban, annyi szótagból áll.",
    t4_inst: "Koppints annyiszor, ahány szótagot hallasz!",
    t5_title: "Szótagolás",
    t5_text: "A szavakat szótagokra bonthatjuk a könnyebb olvasáshoz.",
    t5_l1: "al-", t5_r1: "ma", t5_l2: "ci-", t5_r2: "ca", t5_l3: "ka-", t5_r3: "pu",
    t5_inst: "Párosítsd a szótagokat!",
    t6_title: "Betűpárok",
    t6_text: "Vannak kétjegyű mássalhangzóink is: gy, ny, sz, zs, cs, ty, ly.",
    t6_tok1: "A", t6_tok2: "gy", t6_tok3: "er", t6_tok4: "ek", t6_tok5: "ny", t6_tok6: "u", t6_tok7: "sz", t6_tok8: "i",
    t6_inst: "Keresd meg a betűpárokat!",
    t7_title: "Rövid és hosszú",
    t7_text: "Az ékezet megváltoztatja a hang hosszát: a-á, e-é, i-í...",
    t7_l1: "a", t7_r1: "á", t7_l2: "e", t7_r2: "é", t7_l3: "o", t7_r3: "ó", t7_l4: "u", t7_r4: "ú",
    t7_inst: "Párosítsd a rövid-hosszú párokat!",
    t8_title: "J vagy LY?",
    t8_text: "A hang ugyanaz, de kétféleképpen írhatjuk. Figyelj a szavakra!",
    t8_sent: "A gó___a a réten áll.", t8_c1: "ly", t8_c2: "j",
    t8_inst: "Melyik betű hiányzik?",
    t9_title: "Főnevek",
    t9_text: "A főnevek élőlények, tárgyak és helyek nevei. (Ki? Mi?)",
    t9_b1: "Ki? (Élő)", t9_b2: "Mi? (Élettelen)",
    t9_i1: "fiú", t9_i2: "kutya", t9_i3: "mama", t9_i4: "labda", t9_i5: "ház", t9_i6: "ceruza",
    t9_inst: "Csoportosítsd a főneveket!",
    t10_title: "Igék",
    t10_text: "Az igék azt mondják meg, mit csinál valaki. (Mit csinál?)",
    t10_q: "Melyik szó IGE?",
    t10_t1: "fut", t10_t2: "énekel", t10_t3: "játszik", t10_t4: "alma", t10_t5: "szép",
    t10_inst: "Találd meg az igéket!",
  }
};

export const MAGYAR_O1_I2_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szótagsziget",
    t1_title: "Szótagszám",
    t1_b1: "1 szótag", t1_b2: "2 szótag",
    t1_i1: "hal", t1_i2: "tűz", t1_i3: "lúd", t1_i4: "maci", t1_i5: "hajó", t1_i6: "kocsi",
    t1_inst: "Válogasd szét a szavakat!",
    t2_title: "Szótagolás",
    t2_l1: "re-", t2_r1: "pül", t2_l2: "u-", t2_r2: "szik", t2_l3: "mo-", t2_r3: "soly",
    t2_inst: "Párosítsd a szótagokat!",
    t3_title: "Főnevek",
    t3_b1: "Emberek", t3_b2: "Állatok",
    t3_i1: "apa", t3_i2: "tanár", t3_i3: "orvos", t3_i4: "cica", t3_i5: "róka", t3_i6: "maci",
    t3_inst: "Csoportosíts!",
    t4_title: "Igék",
    t4_q: "Melyik cselekvés?",
    t4_t1: "olvas", t4_t2: "ugrik", t4_t3: "fest", t4_t4: "asztal", t4_t5: "piros",
    t4_inst: "Lődd le az igéket!",
    t5_title: "Melléknevek",
    t5_text: "A melléknevek tulajdonságokat fejeznek ki. (Milyen?)",
    t5_b1: "Melléknév", t5_b2: "Nem az",
    t5_i1: "gyors", t5_i2: "ügyes", t5_i3: "kék", t5_i4: "szalad", t5_i5: "ház", t5_i6: "ma",
    t5_inst: "Keresd a mellékneveket!",
    t6_title: "Ellentétek",
    t6_text: "Vannak szavak, amik egymás ellentétei. (Pl. kicsi - nagy)",
    t6_l1: "kicsi", t6_r1: "nagy", t6_l2: "hideg", t6_r2: "meleg", t6_l3: "alacsony", t6_r3: "magas",
    t6_inst: "Párosítsd az ellentéteket!",
    t7_title: "Mondatfajták",
    t7_text: "A mondatok végén jel mutatja a szándékot: . ? !",
    t7_b1: "Kijelentő (.)", t7_b2: "Kérdő (?)",
    t7_i1: "Süt a nap.", t7_i2: "Itt az ősz.", t7_i3: "A fiú fut.", t7_i4: "Ki jön?", t7_i5: "Hány óra?", t7_i6: "Hol vagy?",
    t7_inst: "Csoportosíts!",
    t8_title: "Írásjelek",
    t8_sent: "Szereted az almát___", t8_c1: "?", t8_c2: ".", t8_c3: "!",
    t8_inst: "Milyen jel kell a végére?",
    t9_title: "Nagybetűk",
    t9_tok1: "a", t9_tok2: "Peti", t9_tok3: "szereti", t9_tok4: "Budapest", t9_tok5: "városát", t9_tok6: ".", t9_tok7: "Ő", t9_tok8: "vidám",
    t9_inst: "Kattints a nagybetűkre!",
    t10_title: "Állatok",
    t10_b1: "Házias", t10_b2: "Vadon élő",
    t10_i1: "kutya", t10_i2: "ló", t10_i3: "tyúk", t10_i4: "farkas", t10_i5: "medve", t10_i6: "róka",
    t10_inst: "Hová tartoznak?",
  }
};

export const MAGYAR_O1_I3_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Életünk Szigete",
    t1_title: "Színek",
    t1_b1: "Alapszín", t1_b2: "Összetett",
    t1_i1: "piros", t1_i2: "kék", t1_i3: "sárga", t1_i4: "narancs", t1_i5: "lila", t1_i6: "zöld",
    t1_inst: "Csoportosítsd a színeket!",
    t2_title: "Család",
    t2_b1: "Felnőtt", t2_b2: "Gyermek",
    t2_i1: "anya", t2_i2: "apa", t2_i3: "mama", t2_i4: "fia", t2_i5: "lánya", t2_i6: "baba",
    t2_inst: "Családtagok szétválogatása",
    t3_title: "Testrészek",
    t3_b1: "Fej", t3_b2: "Végtag",
    t3_i1: "szem", t3_i2: "orr", t3_i3: "száj", t3_i4: "kéz", t3_i5: "láb", t3_i6: "kar",
    t3_inst: "Hol található?",
    t4_title: "Élelmiszerek",
    t4_b1: "Étel", t4_b2: "Ital",
    t4_i1: "kenyér", t4_i2: "sajt", t4_i3: "alma", t4_i4: "víz", t4_i5: "tej", t4_i6: "tea",
    t4_inst: "Étel vagy ital?",
    t5_title: "Napszakok",
    t5_b1: "Nappal", t5_b2: "Éjszaka",
    t5_i1: "reggel", t5_i2: "délelőtt", t5_i3: "dél", t5_i4: "este", t5_i5: "éjfél", t5_i6: "hajnal",
    t5_inst: "Mikor van ez?",
    t6_title: "Konyha",
    t6_l1: "kés", t6_r1: "villa", t6_l2: "tányér", t6_r2: "pohár", t6_l3: "asztal", t6_r3: "szék",
    t6_inst: "Párosítsd az eszközöket!",
    t7_title: "Iskola",
    t7_b1: "Tanszer", t7_b2: "Bútor",
    t7_i1: "ceruza", t7_i2: "füzet", t7_i3: "könyv", t7_i4: "pad", t7_i5: "tábla", t7_i6: "szék",
    t7_inst: "Iskolai dolgok",
    t8_title: "Természet",
    t8_b1: "Növény", t8_b2: "Állat",
    t8_i1: "fa", t8_i2: "fű", t8_i3: "virág", t8_i4: "bogár", t8_i5: "hal", t8_i6: "madár",
    t8_inst: "Élővilág",
    t9_title: "Hangutánzók",
    t9_q: "Mit mond a cica?",
    t9_t1: "miáú", t9_t2: "vau", t9_t3: "mú", t9_t4: "hápi", t9_t5: "gá-gá",
    t9_inst: "Állathangok",
    t10_title: "Kicsinyítés",
    t10_l1: "kutya", t10_r1: "kutyus", t10_l2: "macska", t10_r2: "cicus", t10_l3: "lány", t10_r3: "lányka",
    t10_inst: "Keresd a kicsinyített párját!",
  }
};

export const MAGYAR_O1_I4_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Helyesírás Sziget",
    t1_title: "Hosszú magánhangzó",
    t1_q: "Melyik szóban van HOSSZÚ magánhangzó?",
    t1_t1: "óra", t1_t2: "béka", t1_t3: "út", t1_t4: "alma", t1_t5: "asztal",
    t1_inst: "Figyelj az ékezetre!",
    t2_title: "Kettőzött betűk",
    t2_q: "Melyik szó írása helyes?",
    t2_t1: "toll", t2_t2: "allatt", t2_t3: "reggel", t2_t4: "labba", t2_t5: "fűtt",
    t2_inst: "Két betű egy hangért!",
    t3_title: "J vagy LY?",
    t3_sent: "A ___uk a falon van.", t3_c1: "ly", t3_c2: "j",
    t3_inst: "Válaszd ki a helyes betűt!",
    t4_title: "Nagy kezdőbetű",
    t4_q: "Melyik szót írjuk NAGYBETŰVEL?",
    t4_t1: "Peti", t4_t2: "Budapest", t4_t3: "Duna", t4_t4: "kutya", t4_t5: "ház",
    t4_inst: "Nevek és helyszínek!",
    t5_title: "Betűpárok: SZ-ZS-CS",
    t5_tok1: "sz", t5_tok2: "a", t5_tok3: "zs", t5_tok4: "i", t5_tok5: "cs", t5_tok6: "u", t5_tok7: "m", t5_tok8: "sz",
    t5_inst: "Keresd a kétjegyűeket!",
    t6_title: "Szótagolás: Mássalhangzók",
    t6_l1: "ab-", t6_r1: "lak", t6_l2: "asz-", t6_r2: "tal", t6_l3: "ud-", t6_r3: "var",
    t6_inst: "Válaszd szét a szavakat!",
    t7_title: "Betűfelismerés",
    t7_b1: "Kisbetű", t7_b2: "Nagybetű",
    t7_i1: "a", t7_i2: "b", t7_i3: "c", t7_i4: "A", t7_i5: "B", t7_i6: "C",
    t7_inst: "Kis vagy nagy?",
    t8_title: "Rövid vagy hosszú?",
    t8_b1: "Rövid (u/ü)", t8_b2: "Hosszú (ú/ű)",
    t8_i1: "falu", t8_i2: "betü", t8_i3: "guru", t8_i4: "húsz", t8_i5: "fű", t8_i6: "tű",
    t8_inst: "Figyeld a hang hosszát!",
    t9_title: "Magánhangzók",
    t9_q: "Melyik magánhangzó?",
    t9_t1: "ö", t9_t2: "ő", t9_t3: "ü", t9_t4: "v", t9_t5: "x",
    t9_inst: "Keresd a magánhangzókat!",
    t10_title: "Mássalhangzók",
    t10_q: "Melyik mássalhangzó?",
    t10_t1: "t", t10_t2: "p", t10_t3: "r", t10_t4: "í", t10_t5: "ó",
    t10_inst: "Keresd a mássalhangzókat!",
  }
};

export const MAGYAR_O1_I5_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Mondatsziget",
    t1_title: "Kijelentő mondat",
    t1_text: "Valamit megállapítunk. A végére pont (.) kerül.",
    t1_sent: "Süt a nap___", t1_c1: ".", t1_c2: "?", t1_c3: "!",
    t1_inst: "Milyen jel kell ide?",
    t2_title: "Kérdő mondat",
    t2_text: "Kérdezünk valamit. A végére kérdőjel (?) kerül.",
    t2_sent: "Hová mész___", t2_c1: "?", t2_c2: ".", t2_c3: "!",
    t2_inst: "Milyen jel kell ide?",
    t3_title: "Felkiáltó mondat",
    t3_text: "Érzelmet, parancsot fejezünk ki. A végére felkiáltójel (!) kerül.",
    t3_sent: "Gyere ide___", t3_c1: "!", t3_c2: ".", t3_c3: "?",
    t3_inst: "Milyen jel kell ide?",
    t4_title: "Mondatkezdés",
    t4_text: "Minden mondatot nagybetűvel kezdünk!",
    t4_tok1: "ma", t4_tok2: "iskolába", t4_tok3: "megyek", t4_tok4: ".", t4_tok5: "ott", t4_tok6: "tanulok", t4_tok7: ".",
    t4_inst: "Melyik szót kellene naggyal írni?",
    t5_title: "Kérdés és felelet",
    t5_l1: "Hogy hívnak?", t5_r1: "Peti vagyok.", t5_l2: "Hány éves vagy?", t5_r2: "Hét éves.", t5_l3: "Hol laksz?", t5_r3: "Budapesten.",
    t5_inst: "Párosítsd a kérdést a válasszal!",
    t6_title: "Mondatfajták mix",
    t6_b1: "Kijelentő", t6_b2: "Kérdő",
    t6_i1: "Megyek haza.", t6_i2: "Eszem.", t6_i3: "Alszom.", t6_i4: "Eszel?", t6_i5: "Itt vagy?", t6_i6: "Mikor?",
    t6_inst: "Válogasd szét!",
    t7_title: "Nagybetűk a mondatban",
    t7_tok1: "tegnap", t7_tok2: "láttam", t7_tok3: "anit", t7_tok4: "és", t7_tok5: "balázst", t7_tok6: ".",
    t7_inst: "Hol hiányzik a nagybetű?",
    t8_title: "Mondatrészek",
    t8_b1: "Ki? Mi?", t8_b2: "Mit csinál?",
    t8_i1: "anya", t8_i2: "kutya", t8_i3: "autó", t8_i4: "főz", t8_i5: "ugat", t8_i6: "száguld",
    t8_inst: "Alany vagy állítmány?",
    t9_title: "Logikai sorrend",
    t9_w1: "Reggel", t9_w2: "felkelek,", t9_w3: "aztán", t9_w4: "reggelizem.",
    t9_inst: "Tedd sorrendbe a mondatrészeket!",
    t10_title: "Írásjel mester",
    t10_q: "Melyik mondat végére kell PONT?",
    t10_t1: "A kislány olvas", t10_t2: "Hány óra van", t10_t3: "Vigyázz", t10_t4: "Ki az", t10_t5: "Fuss",
    t10_inst: "Figyelj a mondat értelmére!",
  }
};

export const MAGYAR_O1_I6_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Világunk Szigete",
    t1_title: "Ruházat",
    t1_b1: "Téli", t1_b2: "Nyári",
    t1_i1: "kabát", t1_i2: "sál", t1_i3: "sapka", t1_i4: "póló", t1_i5: "papucs", t1_i6: "rövidnadrág",
    t1_inst: "Mikor hordjuk?",
    t2_title: "Időjárás",
    t2_b1: "Jó idő", t2_b2: "Rossz idő",
    t2_i1: "napsütés", t2_i2: "szivárvány", t2_i3: "meleg", t2_i4: "eső", t2_i5: "szél", t2_i6: "vihar",
    t2_inst: "Milyen az idő?",
    t3_title: "Közlekedés",
    t3_b1: "Szárazföldi", t3_b2: "Vízi/Légi",
    t3_i1: "autó", t3_i2: "busz", t3_i3: "vonat", t3_i4: "hajó", t3_i5: "repülő", t3_i6: "csónak",
    t3_inst: "Hol közlekedik?",
    t4_title: "Hét napjai",
    t4_w1: "hétfő", t4_w2: "kedd", t4_w3: "szerda", t4_w4: "csütörtök",
    t4_inst: "Tedd sorrendbe a napokat!",
    t5_title: "Évszakok",
    t5_l1: "tavasz", t5_r1: "virágzás", t5_l2: "nyár", t5_r2: "hőség", t5_l3: "ősz", t5_r3: "levélhullás", t5_l4: "tél", t5_r4: "hó",
    t5_inst: "Párosítsd az évszakot a jellemzőjével!",
    t6_title: "Növények",
    t6_b1: "Virág", t6_b2: "Fa",
    t6_i1: "tulipán", t6_i2: "rózsa", t6_i3: "ibolya", t6_i4: "tölgy", t6_i5: "fenyő", t6_i6: "bükk",
    t6_inst: "Válogasd szét!",
    t7_title: "Gyümölcsök",
    t7_b1: "Hazai", t7_b2: "Déli",
    t7_i1: "alma", t7_i2: "körte", t7_i3: "szilva", t7_i4: "banán", t7_i5: "kiwi", t7_i6: "narancs",
    t7_inst: "Hol terem?",
    t8_title: "Zöldségek",
    t8_b1: "Föld feletti", t8_b2: "Föld alatti",
    t8_i1: "paprika", t8_i2: "paradicsom", t8_i3: "borsó", t8_i4: "répa", t8_i5: "krumpli", t8_i6: "hagyma",
    t8_inst: "Hol nő a zöldség?",
    t9_title: "Játékok",
    t9_b1: "Szabadtéri", t9_b2: "Benti",
    t9_i1: "labda", t9_i2: "bicikli", t9_i3: "homokozó", t9_i4: "bábu", t9_i5: "kártya", t9_i6: "társas",
    t9_inst: "Hol játszunk vele?",
    t10_title: "Hónapok",
    t10_l1: "január", t10_r1: "tél", t10_l2: "április", t10_r2: "tavasz", t10_l3: "július", t10_r3: "nyár", t10_l4: "október", t10_r4: "ősz",
    t10_inst: "Melyik hónap melyik évszak?",
  }
};

export const MAGYAR_O1_I7_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Nyelvtan Sziget",
    t1_title: "Főnév - Ki?",
    t1_q: "Melyik szó válaszol a KI? kérdésre?",
    t1_t1: "orvos", t1_t2: "mama", t1_t3: "Peti", t1_t4: "ház", t1_t5: "kék",
    t1_inst: "Emberekre gondolj!",
    t2_title: "Főnév - Mi?",
    t2_q: "Melyik szó válaszol a MI? kérdésre?",
    t2_t1: "asztal", t2_t2: "könyv", t2_t3: "ceruza", t2_t4: "apa", t2_t5: "fut",
    t2_inst: "Tárgyakra gondolj!",
    t3_title: "Ige - Mit csinál?",
    t3_q: "Melyik szó válaszol a MIT CSINÁL? kérdésre?",
    t3_t1: "olvas", t3_t2: "ugrik", t3_t3: "eszik", t3_t4: "szép", t3_t5: "labda",
    t3_inst: "Cselekvést keress!",
    t4_title: "Melléknév - Milyen?",
    t4_q: "Melyik szó válaszol a MILYEN? kérdésre?",
    t4_t1: "gyors", t4_t2: "szép", t4_t3: "piros", t4_t4: "ház", t4_t5: "ír",
    t4_inst: "Tulajdonságot keress!",
    t5_title: "Ellentétek: Melléknév",
    t5_l1: "édes", t5_r1: "savanyú", t5_l2: "tiszta", t5_r2: "koszos", t5_l3: "száraz", t5_r3: "vizes",
    t5_inst: "Keresd az ellentéteket!",
    t6_title: "Szótagolás gyakorlás",
    t6_b1: "1 szótag", t6_b2: "3 szótag",
    t6_i1: "fa", t6_i2: "ló", t6_i3: "tű", t6_i4: "iskola", t6_i5: "autó", t6_i6: "ceruza",
    t6_inst: "Hány szótag?",
    t7_title: "ABC mix",
    t7_w1: "béka", t7_w2: "bor", t7_w3: "bot", t7_w4: "bú",
    t7_inst: "Rendezd ABC-be! Figyeld a második betűt!",
    t8_title: "Kicsinyítő képzők",
    t8_q: "Melyik a 'ház' kicsinyített formája?",
    t8_t1: "házikó", t8_t2: "házas", t8_t3: "házfal", t8_t4: "háztető", t8_t5: "háznép",
    t8_inst: "Kicsi ház...",
    t9_title: "Betűpárok: GY-NY-TY",
    t9_tok1: "gy", t9_tok2: "u", t9_tok3: "ty", t9_tok4: "ú", t9_tok5: "ny", t9_tok6: "á", t9_tok7: "r", t9_tok8: "gy",
    t9_inst: "Keresd a kétjegyűeket!",
    t10_title: "J vagy LY? Mester",
    t10_sent: "A sza___onna nagyon finom.", t10_c1: "j", t10_c2: "ly",
    t10_inst: "Helyesírási kvíz",
  }
};

export const MAGYAR_O1_I8_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Mester Sziget",
    t1_title: "Betűfelismerés: B-D",
    t1_b1: "B betű", t1_b2: "D betű",
    t1_i1: "b", t1_i2: "B", t1_i3: "be", t1_i4: "d", t1_i5: "D", t1_i6: "de",
    t1_inst: "Ne keverd össze!",
    t2_title: "Betűfelismerés: P-B",
    t2_b1: "P betű", t2_b2: "B betű",
    t2_i1: "p", t2_i2: "P", t2_i3: "apa", t2_i4: "b", t2_i5: "B", t2_i6: "aba",
    t2_inst: "Figyelj a formára!",
    t3_title: "Kettőzött mássalhangzók",
    t3_sent: "A pö___yös labda gurul.", t3_c1: "tty", t3_c2: "ty",
    t3_inst: "Egy vagy kettő?",
    t4_title: "Hosszú magánhangzók",
    t4_b1: "Rövid (o/ö)", t4_b2: "Hosszú (ó/ő)",
    t4_i1: "orr", t4_i2: "öt", t4_i3: "dob", t4_i4: "hó", t4_i5: "kő", t4_i6: "tó",
    t4_inst: "Válogasd szét!",
    t5_title: "Kérdés-felelet mix",
    t5_l1: "Mi ez?", t5_r1: "Ez egy ház.", t5_l2: "Ki ez?", t5_r2: "Ez egy fiú.", t5_l3: "Milyen?", t5_r3: "Nagyon szép.",
    t5_inst: "Mihez mi tartozik?",
    t6_title: "Nagybetűs nevek",
    t6_q: "Melyik egy NÉV?",
    t6_t1: "Anna", t6_t2: "Zoli", t6_t3: "Fifi", t6_t4: "cica", t6_t5: "asztal",
    t6_inst: "Keresd a neveket!",
    t7_title: "Mondatvég: Pont",
    t7_sent: "Megyek az iskolába___", t7_c1: ".", t7_c2: "?", t7_c3: "!",
    t7_inst: "Mondat befejezése",
    t8_title: "Mondatvég: Kérdőjel",
    t8_sent: "Hol van a táskám___", t8_c1: "?", t8_c2: ".", t8_c3: "!",
    t8_inst: "Mondat befejezése",
    t9_title: "Mondatvég: Felkiáltójel",
    t9_sent: "Vigyázz, autó jön___", t9_c1: "!", t9_c2: ".", t9_c3: "?",
    t9_inst: "Mondat befejezése",
    t10_title: "ABC végső teszt",
    t10_w1: "kép", t10_w2: "lép", t10_w3: "nép", t10_w4: "tép",
    t10_inst: "Sorrendbe tétel",
  }
};

export const MAGYAR_O1_I9_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Nagy Ismétlő Sziget",
    t1_title: "Mindent a betűkről",
    t1_b1: "Magánhangzó", t1_b2: "Mássalhangzó",
    t1_i1: "á", t1_i2: "ő", t1_i3: "ú", t1_i4: "dzs", t1_i5: "ty", t1_i6: "sz",
    t1_inst: "Végső válogatás",
    t2_title: "Mindent a szavakról",
    t2_b1: "1 szótag", t2_b2: "2 szótag",
    t2_i1: "ég", t2_i2: "föld", t2_i3: "víz", t2_i4: "felhő", t2_i5: "eső", t2_i6: "szél",
    t2_inst: "Szótagolás ismétlés",
    t3_title: "Mindent a főnevekről",
    t3_b1: "Ki?", t3_b2: "Mi?",
    t3_i1: "orvos", t3_i2: "pék", t3_i3: "bácsi", t3_i4: "kifli", t3_i5: "autó", t3_i6: "lámpa",
    t3_inst: "Főnév ismétlés",
    t4_title: "Mindent az igékről",
    t4_q: "Mit csinál a madár?",
    t4_t1: "repül", t4_t2: "énekel", t4_t3: "eszik", t4_t4: "kék", t4_t5: "toll",
    t4_inst: "Ige ismétlés",
    t5_title: "Mindent a melléknevekről",
    t5_b1: "Melléknév", t5_b2: "Nem az",
    t5_i1: "forró", t5_i2: "hideg", t5_i3: "édes", t5_i4: "cukor", t5_i5: "víz", t5_i6: "főz",
    t5_inst: "Melléknév ismétlés",
    t6_title: "Mindent a mondatokról",
    t6_b1: "Kijelentő", t6_b2: "Kérdő",
    t6_i1: "Itt vagyok.", t6_i2: "Kész van.", t6_i3: "Vége.", t6_i4: "Hahó?", t6_i5: "Mikor?", t6_i6: "Miért?",
    t6_inst: "Mondatfajta ismétlés",
    t7_title: "J vagy LY? Végső",
    t7_sent: "A ___uk mély és sötét.", t7_c1: "ly", t7_c2: "j",
    t7_inst: "Helyesírás ismétlés",
    t8_title: "Nagybetűk Végső",
    t8_tok1: "ma", t8_tok2: "van", t8_tok3: "zoli", t8_tok4: "szülinapja", t8_tok5: ".", t8_tok6: "vettem", t8_tok7: "ajándékot", t8_tok8: ".",
    t8_inst: "Javítsd ki a szöveget!",
    t9_title: "Ellentétek Végső",
    t9_l1: "okos", t9_r1: "buta", t9_l2: "vidám", t9_r2: "szomorú", t9_l3: "jó", t9_r3: "rossz",
    t9_inst: "Párosítás ismétlés",
    t10_title: "Végső Vizsga",
    t10_q: "Melyik állítás IGAZ?",
    t10_t1: "Az ABC az 'a' betűvel kezdődik", t10_t2: "A mondat végén mindig pont van", t10_t3: "A nevek kisbetűsek", t10_t4: "A 'ly' és 'j' más hang", t10_t5: "A főnév cselekvést jelent",
    t10_inst: "Gondolkozz!",
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// POOLS
// ─────────────────────────────────────────────────────────────────────────────

export const MAGYAR_O1_I1_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "two-groups", left: { items: ["a", "e"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["b", "k"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "vow", label: "t1_b1" }, { id: "con", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "vow" }, { text: "t1_i2", bucketId: "vow" }, { text: "t1_i3", bucketId: "vow" }, { text: "t1_i4", bucketId: "vow" }, { text: "t1_i5", bucketId: "con" }, { text: "t1_i6", bucketId: "con" }, { text: "t1_i7", bucketId: "con" }, { text: "t1_i8", bucketId: "con" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "maganhangzok" },
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "two-groups", left: { items: ["c", "d"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["á", "é"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "con", label: "t2_b1" }, { id: "vow", label: "t2_b2" }],
      items: [{ text: "t2_i1", bucketId: "con" }, { text: "t2_i2", bucketId: "con" }, { text: "t2_i3", bucketId: "con" }, { text: "t2_i4", bucketId: "con" }, { text: "t2_i5", bucketId: "vow" }, { text: "t2_i6", bucketId: "vow" }, { text: "t2_i7", bucketId: "vow" }, { text: "t2_i8", bucketId: "vow" }],
      instruction: "t2_inst"
    },
    quiz: { generate: "massalhangzok" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "ABC", title: "ABC", bg: "#E0F2FE", color: "#0EA5E9" },
    interactive: { type: "physics-stacker", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], correctOrder: [0, 1, 2, 3], instruction: "t3_inst" },
    quiz: { generate: "abc_sorrend" },
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-syllables", parts: ["is", "ko", "la"], color: "#D97706", showClap: true },
    interactive: { type: "tap-count", tapCount: { emoji: "👏", count: 3 }, instruction: "t4_inst" },
    quiz: { generate: "szotagszam" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "✂️", title: "Vágás", bg: "#FCE7F3", color: "#DB2777" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }, { left: "t5_l3", right: "t5_r3" }], instruction: "t5_inst" },
    quiz: { generate: "elvalasztas" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "sz", color: "#374151", bg: "#F3F4F6" }, { text: "gy", color: "#374151", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t6_tok1", "t6_tok2", "t6_tok3", "t6_tok4", "t6_tok5", "t6_tok6", "t6_tok7", "t6_tok8"], correctIndices: [1, 4, 6], instruction: "t6_inst" },
    quiz: { generate: "betuparok" },
  },
  {
    difficulty: "easy", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "letter-pairs", pairs: [["A", "a"], ["E", "e"]], color: "#16A34A" },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_l1", right: "t7_r1" }, { left: "t7_l2", right: "t7_r2" }, { left: "t7_l3", right: "t7_r3" }, { left: "t7_l4", right: "t7_r4" }], instruction: "t7_inst" },
    quiz: { generate: "rovid_hosszu" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "❓", title: "J-LY", bg: "#DBEAFE", color: "#2563EB" },
    interactive: { type: "gap-fill", sentence: "t8_sent", choices: ["t8_c1", "t8_c2"], correctIndex: 0, instruction: "t8_inst" },
    quiz: { generate: "j_ly" },
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{ emoji: "👦", label: "t9_i1" }, { emoji: "🏀", label: "t9_i4" }] },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "who", label: "t9_b1" }, { id: "what", label: "t9_b2" }],
      items: [{ text: "t9_i1", bucketId: "who" }, { text: "t9_i2", bucketId: "who" }, { text: "t9_i3", bucketId: "who" }, { text: "t9_i4", bucketId: "what" }, { text: "t9_i5", bucketId: "what" }, { text: "t9_i6", bucketId: "what" }],
      instruction: "t9_inst"
    },
    quiz: { generate: "fonevek" },
  },
  {
    difficulty: "easy", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🏃", title: "Ige", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "v2", text: "t10_t2", isCorrect: true }, { id: "v3", text: "t10_t3", isCorrect: true }, { id: "n1", text: "t10_t4", isCorrect: false }, { id: "n2", text: "t10_t5", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "igek" },
  },
];

export const MAGYAR_O1_I2_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["hal"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["maci"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "1", label: "t1_b1" }, { id: "2", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "1" }, { text: "t1_i2", bucketId: "1" }, { text: "t1_i3", bucketId: "1" }, { text: "t1_i4", bucketId: "2" }, { text: "t1_i5", bucketId: "2" }, { text: "t1_i6", bucketId: "2" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "szotagszam" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "",
    svg: { type: "simple-icon", icon: "🧩", title: "Szótag", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }], instruction: "t2_inst" },
    quiz: { generate: "elvalasztas" },
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["apa"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["cica"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "hum", label: "t3_b1" }, { id: "ani", label: "t3_b2" }],
      items: [{ text: "t3_i1", bucketId: "hum" }, { text: "t3_i2", bucketId: "hum" }, { text: "t3_i3", bucketId: "hum" }, { text: "t3_i4", bucketId: "ani" }, { text: "t3_i5", bucketId: "ani" }, { text: "t3_i6", bucketId: "ani" }],
      instruction: "t3_inst"
    },
    quiz: { generate: "fonevek" },
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "",
    svg: { type: "simple-icon", icon: "🎯", title: "Cél", bg: "#FFEDD5", color: "#EA580C" },
    interactive: {
      type: "physics-slingshot", question: "t4_q",
      targets: [{ id: "v1", text: "t4_t1", isCorrect: true }, { id: "v2", text: "t4_t2", isCorrect: true }, { id: "v3", text: "t4_t3", isCorrect: true }, { id: "n1", text: "t4_t4", isCorrect: false }, { id: "n2", text: "t4_t5", isCorrect: false }],
      instruction: "t4_inst"
    },
    quiz: { generate: "igek" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["gyors"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["asztal"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "adj", label: "t5_b1" }, { id: "not", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "adj" }, { text: "t5_i2", bucketId: "adj" }, { text: "t5_i3", bucketId: "adj" }, { text: "t5_i4", bucketId: "not" }, { text: "t5_i5", bucketId: "not" }, { text: "t5_i6", bucketId: "not" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "melleknevek" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "↔️", title: "Ellentét", bg: "#F1F5F9", color: "#475569" },
    interactive: { type: "match-pairs", pairs: [{ left: "t6_l1", right: "t6_r1" }, { left: "t6_l2", right: "t6_r2" }, { left: "t6_l3", right: "t6_r3" }], instruction: "t6_inst" },
    quiz: { generate: "ellentetek" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["."], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["?"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "dot", label: "t7_b1" }, { id: "que", label: "t7_b2" }],
      items: [{ text: "t7_i1", bucketId: "dot" }, { text: "t7_i2", bucketId: "dot" }, { text: "t7_i3", bucketId: "dot" }, { text: "t7_i4", bucketId: "que" }, { text: "t7_i5", bucketId: "que" }, { text: "t7_i6", bucketId: "que" }],
      instruction: "t7_inst"
    },
    quiz: { generate: "mondatfajtak" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "✍️", title: "Írásjel", bg: "#CFFAFE", color: "#0891B2" },
    interactive: { type: "gap-fill", sentence: "t8_sent", choices: ["t8_c1", "t8_c2", "t8_c3"], correctIndex: 0, instruction: "t8_inst" },
    quiz: { generate: "irasjelek" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "Peti", highlightChars: ["P"], color: "#B91C1C" },
    interactive: { type: "highlight-text", tokens: ["t9_tok1", "t9_tok2", "t9_tok3", "t9_tok4", "t9_tok5", "t9_tok6", "t9_tok7", "t9_tok8"], correctIndices: [1, 3, 6], instruction: "t9_inst" },
    quiz: { generate: "nagybetu" },
  },
  {
    difficulty: "easy", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐶", label: "t10_i1" }, { emoji: "🦁", label: "t10_i4" }] },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "dom", label: "t10_b1" }, { id: "wild", label: "t10_b2" }],
      items: [{ text: "t10_i1", bucketId: "dom" }, { text: "t10_i2", bucketId: "dom" }, { text: "t10_i3", bucketId: "dom" }, { text: "t10_i4", bucketId: "wild" }, { text: "t10_i5", bucketId: "wild" }, { text: "t10_i6", bucketId: "wild" }],
      instruction: "t10_inst"
    },
    quiz: { generate: "allatok" },
  },
];

export const MAGYAR_O1_I3_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["piros"], bg: "#EF4444", border: "#B91C1C" }, right: { items: ["zöld"], bg: "#10B981", border: "#065F46" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "pri", label: "t1_b1" }, { id: "sec", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "pri" }, { text: "t1_i2", bucketId: "pri" }, { text: "t1_i3", bucketId: "pri" }, { text: "t1_i4", bucketId: "sec" }, { text: "t1_i5", bucketId: "sec" }, { text: "t1_i6", bucketId: "sec" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "szinek" },
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "",
    svg: { type: "icon-grid", items: [{ emoji: "👩", label: "t2_i1" }, { emoji: "👶", label: "t2_i6" }] },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "adu", label: "t2_b1" }, { id: "chi", label: "t2_b2" }],
      items: [{ text: "t2_i1", bucketId: "adu" }, { text: "t2_i2", bucketId: "adu" }, { text: "t2_i3", bucketId: "adu" }, { text: "t2_i4", bucketId: "chi" }, { text: "t2_i5", bucketId: "chi" }, { text: "t2_i6", bucketId: "chi" }],
      instruction: "t2_inst"
    },
    quiz: { generate: "csalad" },
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "",
    svg: { type: "icon-grid", items: [{ emoji: "👁️", label: "t3_i1" }, { emoji: "🦶", label: "t3_i5" }] },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "hea", label: "t3_b1" }, { id: "lim", label: "t3_b2" }],
      items: [{ text: "t3_i1", bucketId: "hea" }, { text: "t3_i2", bucketId: "hea" }, { text: "t3_i3", bucketId: "hea" }, { text: "t3_i4", bucketId: "lim" }, { text: "t3_i5", bucketId: "lim" }, { text: "t3_i6", bucketId: "lim" }],
      instruction: "t3_inst"
    },
    quiz: { generate: "testresz" },
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "",
    svg: { type: "icon-grid", items: [{ emoji: "🍞", label: "t4_i1" }, { emoji: "💧", label: "t4_i4" }] },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "foo", label: "t4_b1" }, { id: "dri", label: "t4_b2" }],
      items: [{ text: "t4_i1", bucketId: "foo" }, { text: "t4_i2", bucketId: "foo" }, { text: "t4_i3", bucketId: "foo" }, { text: "t4_i4", bucketId: "dri" }, { text: "t4_i5", bucketId: "dri" }, { text: "t4_i6", bucketId: "dri" }],
      instruction: "t4_inst"
    },
    quiz: { generate: "elelmiszer" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["☀️"], bg: "#FFEDD5", border: "#F97316" }, right: { items: ["🌙"], bg: "#E0E7FF", border: "#4338CA" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "day", label: "t5_b1" }, { id: "nig", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "day" }, { text: "t5_i2", bucketId: "day" }, { text: "t5_i3", bucketId: "day" }, { text: "t5_i4", bucketId: "nig" }, { text: "t5_i5", bucketId: "nig" }, { text: "t5_i6", bucketId: "nig" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "napszakok" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "",
    svg: { type: "simple-icon", icon: "🍳", title: "Konyha", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "match-pairs", pairs: [{ left: "t6_l1", right: "t6_r1" }, { left: "t6_l2", right: "t6_r2" }, { left: "t6_l3", right: "t6_r3" }], instruction: "t6_inst" },
    quiz: { generate: "fonevek" },
  },
  {
    difficulty: "easy", infoTitle: "t7_title", infoText: "",
    svg: { type: "icon-grid", items: [{ emoji: "✏️", label: "t7_i1" }, { emoji: "🏫", label: "t7_i4" }] },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "sup", label: "t7_b1" }, { id: "fur", label: "t7_b2" }],
      items: [{ text: "t7_i1", bucketId: "sup" }, { text: "t7_i2", bucketId: "sup" }, { text: "t7_i3", bucketId: "sup" }, { text: "t7_i4", bucketId: "fur" }, { text: "t7_i5", bucketId: "fur" }, { text: "t7_i6", bucketId: "fur" }],
      instruction: "t7_inst"
    },
    quiz: { generate: "fonevek" },
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["🌲"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["🐦"], bg: "#DBEAFE", border: "#2563EB" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "pla", label: "t8_b1" }, { id: "ani", label: "t8_b2" }],
      items: [{ text: "t8_i1", bucketId: "pla" }, { text: "t8_i2", bucketId: "pla" }, { text: "t8_i3", bucketId: "pla" }, { text: "t8_i4", bucketId: "ani" }, { text: "t8_i5", bucketId: "ani" }, { text: "t8_i6", bucketId: "ani" }],
      instruction: "t8_inst"
    },
    quiz: { generate: "allatok" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "",
    svg: { type: "simple-icon", icon: "📢", title: "Hangok", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t9_q",
      targets: [{ id: "c1", text: "t9_t1", isCorrect: true }, { id: "c2", text: "t9_t2", isCorrect: false }, { id: "c3", text: "t9_t3", isCorrect: false }, { id: "c4", text: "t9_t4", isCorrect: false }, { id: "c5", text: "t9_t5", isCorrect: false }],
      instruction: "t9_inst"
    },
    quiz: { generate: "hangutanzo" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "",
    svg: { type: "simple-icon", icon: "🔬", title: "Kicsi", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "match-pairs", pairs: [{ left: "t10_l1", right: "t10_r1" }, { left: "t10_l2", right: "t10_r2" }, { left: "t10_l3", right: "t10_r3" }], instruction: "t10_inst" },
    quiz: { generate: "kicsinyitokepozo" },
  },
];

export const MAGYAR_O1_I4_POOL: PoolTopicDef[] = [
  {
    difficulty: "medium", infoTitle: "t1_title", infoText: "",
    svg: { type: "simple-icon", icon: "📏", title: "Hosszú", bg: "#DCFCE7", color: "#16A34A" },
    interactive: {
      type: "physics-slingshot", question: "t1_q",
      targets: [{ id: "v1", text: "t1_t1", isCorrect: true }, { id: "v2", text: "t1_t2", isCorrect: true }, { id: "v3", text: "t1_t3", isCorrect: true }, { id: "n1", text: "t1_t4", isCorrect: false }, { id: "n2", text: "t1_t5", isCorrect: false }],
      instruction: "t1_inst"
    },
    quiz: { generate: "rovid_hosszu" },
  },
  {
    difficulty: "medium", infoTitle: "t2_title", infoText: "",
    svg: { type: "simple-icon", icon: "👯", title: "Kettőzés", bg: "#F3F4F6", color: "#374151" },
    interactive: {
      type: "physics-slingshot", question: "t2_q",
      targets: [{ id: "v1", text: "t2_t1", isCorrect: true }, { id: "n1", text: "t2_t2", isCorrect: false }, { id: "v2", text: "t2_t3", isCorrect: true }, { id: "n2", text: "t2_t4", isCorrect: false }, { id: "n3", text: "t2_t5", isCorrect: false }],
      instruction: "t2_inst"
    },
    quiz: { generate: "kettozodes" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "",
    svg: { type: "simple-icon", icon: "❓", title: "J-LY", bg: "#DBEAFE", color: "#2563EB" },
    interactive: { type: "gap-fill", sentence: "t3_sent", choices: ["t3_c1", "t3_c2"], correctIndex: 0, instruction: "t3_inst" },
    quiz: { generate: "j_ly" },
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "",
    svg: { type: "simple-icon", icon: "🔠", title: "Nagybetű", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: {
      type: "physics-slingshot", question: "t4_q",
      targets: [{ id: "n1", text: "t4_t1", isCorrect: true }, { id: "n2", text: "t4_t2", isCorrect: true }, { id: "n3", text: "t4_t3", isCorrect: true }, { id: "n4", text: "t4_t4", isCorrect: false }, { id: "n5", text: "t4_t5", isCorrect: false }],
      instruction: "t4_inst"
    },
    quiz: { generate: "nagybetu" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "",
    svg: { type: "text-bubbles", items: [{ text: "sz", color: "#374151", bg: "#F3F4F6" }, { text: "cs", color: "#374151", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t5_tok1", "t5_tok2", "t5_tok3", "t5_tok4", "t5_tok5", "t5_tok6", "t5_tok7", "t5_tok8"], correctIndices: [0, 2, 4, 7], instruction: "t5_inst" },
    quiz: { generate: "betuparok" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "",
    svg: { type: "simple-icon", icon: "✂️", title: "Szét", bg: "#FCE7F3", color: "#DB2777" },
    interactive: { type: "match-pairs", pairs: [{ left: "t6_l1", right: "t6_r1" }, { left: "t6_l2", right: "t6_r2" }, { left: "t6_l3", right: "t6_r3" }], instruction: "t6_inst" },
    quiz: { generate: "elvalasztas" },
  },
  {
    difficulty: "easy", infoTitle: "t7_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["a", "b"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["A", "B"], bg: "#E5E7EB", border: "#9CA3AF" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "low", label: "t7_b1" }, { id: "upp", label: "t7_b2" }],
      items: [{ text: "t7_i1", bucketId: "low" }, { text: "t7_i2", bucketId: "low" }, { text: "t7_i3", bucketId: "low" }, { text: "t7_i4", bucketId: "upp" }, { text: "t7_i5", bucketId: "upp" }, { text: "t7_i6", bucketId: "upp" }],
      instruction: "t7_inst"
    },
    quiz: { generate: "betufelismeres" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["u", "ü"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["ú", "ű"], bg: "#F0FDF4", border: "#22C55E" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "sho", label: "t8_b1" }, { id: "lon", label: "t8_b2" }],
      items: [{ text: "t8_i1", bucketId: "sho" }, { text: "t8_i2", bucketId: "sho" }, { text: "t8_i3", bucketId: "sho" }, { text: "t8_i4", bucketId: "lon" }, { text: "t8_i5", bucketId: "lon" }, { text: "t8_i6", bucketId: "lon" }],
      instruction: "t8_inst"
    },
    quiz: { generate: "rovid_hosszu" },
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "",
    svg: { type: "simple-icon", icon: "❤️", title: "Magán", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t9_q",
      targets: [{ id: "v1", text: "t9_t1", isCorrect: true }, { id: "v2", text: "t9_t2", isCorrect: true }, { id: "v3", text: "t9_t3", isCorrect: true }, { id: "c1", text: "t9_t4", isCorrect: false }, { id: "c2", text: "t9_t5", isCorrect: false }],
      instruction: "t9_inst"
    },
    quiz: { generate: "maganhangzok" },
  },
  {
    difficulty: "easy", infoTitle: "t10_title", infoText: "",
    svg: { type: "simple-icon", icon: "💙", title: "Mással", bg: "#DBEAFE", color: "#2563EB" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "c1", text: "t10_t1", isCorrect: true }, { id: "c2", text: "t10_t2", isCorrect: true }, { id: "c3", text: "t10_t3", isCorrect: true }, { id: "v1", text: "t10_t4", isCorrect: false }, { id: "v2", text: "t10_t5", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "massalhangzok" },
  },
];

export const MAGYAR_O1_I5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: ".", title: "Pont", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3"], correctIndex: 0, instruction: "t1_inst" },
    quiz: { generate: "irasjelek" },
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "?", title: "Kérdő", bg: "#DBEAFE", color: "#2563EB" },
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3"], correctIndex: 0, instruction: "t2_inst" },
    quiz: { generate: "irasjelek" },
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "!", title: "Felkiáltó", bg: "#FEE2E2", color: "#DC2626" },
    interactive: { type: "gap-fill", sentence: "t3_sent", choices: ["t3_c1", "t3_c2", "t3_c3"], correctIndex: 0, instruction: "t3_inst" },
    quiz: { generate: "irasjelek" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔠", title: "Start", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: { type: "highlight-text", tokens: ["t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6", "t4_tok7"], correctIndices: [0, 4], instruction: "t4_inst" },
    quiz: { generate: "nagybetu" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "",
    svg: { type: "simple-icon", icon: "🤝", title: "Páros", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }, { left: "t5_l3", right: "t5_r3" }], instruction: "t5_inst" },
    quiz: { generate: "kerdes_felelet" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["."], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["?"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "dot", label: "t6_b1" }, { id: "que", label: "t6_b2" }],
      items: [{ text: "t6_i1", bucketId: "dot" }, { text: "t6_i2", bucketId: "dot" }, { text: "t6_i3", bucketId: "dot" }, { text: "t6_i4", bucketId: "que" }, { text: "t6_i5", bucketId: "que" }, { text: "t6_i6", bucketId: "que" }],
      instruction: "t6_inst"
    },
    quiz: { generate: "mondatfajtak" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "",
    svg: { type: "simple-icon", icon: "✏️", title: "Nagy", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: { type: "highlight-text", tokens: ["t7_tok1", "t7_tok2", "t7_tok3", "t7_tok4", "t7_tok5", "t7_tok6"], correctIndices: [0, 2, 4], instruction: "t7_inst" },
    quiz: { generate: "nagybetu" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["Ki?"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["Teszi"], bg: "#FEE2E2", border: "#DC2626" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "sub", label: "t8_b1" }, { id: "pre", label: "t8_b2" }],
      items: [{ text: "t8_i1", bucketId: "sub" }, { text: "t8_i2", bucketId: "sub" }, { text: "t8_i3", bucketId: "sub" }, { text: "t8_i4", bucketId: "pre" }, { text: "t8_i5", bucketId: "pre" }, { text: "t8_i6", bucketId: "pre" }],
      instruction: "t8_inst"
    },
    quiz: { generate: "fonevek" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "",
    svg: { type: "simple-icon", icon: "🧩", title: "Rendez", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "physics-stacker", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4"], correctOrder: [0, 1, 2, 3], instruction: "t9_inst" },
    quiz: { generate: "abc_sorrend" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "",
    svg: { type: "simple-icon", icon: "🏆", title: "Pont", bg: "#F3F4F6", color: "#111827" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }, { id: "n3", text: "t10_t4", isCorrect: false }, { id: "n4", text: "t10_t5", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "irasjelek" },
  },
];

export const MAGYAR_O1_I6_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["❄️"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["☀️"], bg: "#FFEDD5", border: "#F97316" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "win", label: "t1_b1" }, { id: "sum", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "win" }, { text: "t1_i2", bucketId: "win" }, { text: "t1_i3", bucketId: "win" }, { text: "t1_i4", bucketId: "sum" }, { text: "t1_i5", bucketId: "sum" }, { text: "t1_i6", bucketId: "sum" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "ruhazat" },
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["☀️"], bg: "#FEF9C3", border: "#EAB308" }, right: { items: ["🌧️"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "goo", label: "t2_b1" }, { id: "bad", label: "t2_b2" }],
      items: [{ text: "t2_i1", bucketId: "goo" }, { text: "t2_i2", bucketId: "goo" }, { text: "t2_i3", bucketId: "goo" }, { text: "t2_i4", bucketId: "bad" }, { text: "t2_i5", bucketId: "bad" }, { text: "t2_i6", bucketId: "bad" }],
      instruction: "t2_inst"
    },
    quiz: { generate: "idojaras" },
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["🚗"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["✈️"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "lan", label: "t3_b1" }, { id: "air", label: "t3_b2" }],
      items: [{ text: "t3_i1", bucketId: "lan" }, { text: "t3_i2", bucketId: "lan" }, { text: "t3_i3", bucketId: "lan" }, { text: "t3_i4", bucketId: "air" }, { text: "t3_i5", bucketId: "air" }, { text: "t3_i6", bucketId: "air" }],
      instruction: "t3_inst"
    },
    quiz: { generate: "kozlekedes" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "",
    svg: { type: "simple-icon", icon: "📅", title: "Napok", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "physics-stacker", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], correctOrder: [0, 1, 2, 3], instruction: "t4_inst" },
    quiz: { generate: "heteknapjai" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "",
    svg: { type: "simple-icon", icon: "🌱", title: "Évszak", bg: "#DCFCE7", color: "#16A34A" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }, { left: "t5_l3", right: "t5_r3" }, { left: "t5_l4", right: "t5_r4" }], instruction: "t5_inst" },
    quiz: { generate: "idojaras" },
  },
  {
    difficulty: "easy", infoTitle: "t6_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["🌷"], bg: "#FDF2F8", border: "#DB2777" }, right: { items: ["🌳"], bg: "#DCFCE7", border: "#16A34A" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "flo", label: "t6_b1" }, { id: "tre", label: "t6_b2" }],
      items: [{ text: "t6_i1", bucketId: "flo" }, { text: "t6_i2", bucketId: "flo" }, { text: "t6_i3", bucketId: "flo" }, { text: "t6_i4", bucketId: "tre" }, { text: "t6_i5", bucketId: "tre" }, { text: "t6_i6", bucketId: "tre" }],
      instruction: "t6_inst"
    },
    quiz: { generate: "fonevek" },
  },
  {
    difficulty: "easy", infoTitle: "t7_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["🍎"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["🍌"], bg: "#FEF9C3", border: "#EAB308" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "loc", label: "t7_b1" }, { id: "sou", label: "t7_b2" }],
      items: [{ text: "t7_i1", bucketId: "loc" }, { text: "t7_i2", bucketId: "loc" }, { text: "t7_i3", bucketId: "loc" }, { text: "t7_i4", bucketId: "sou" }, { text: "t7_i5", bucketId: "sou" }, { text: "t7_i6", bucketId: "sou" }],
      instruction: "t7_inst"
    },
    quiz: { generate: "elelmiszer" },
  },
  {
    difficulty: "easy", infoTitle: "t7_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["🍎"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["🍌"], bg: "#FEF9C3", border: "#EAB308" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "loc", label: "t7_b1" }, { id: "sou", label: "t7_b2" }],
      items: [{ text: "t7_i1", bucketId: "loc" }, { text: "t7_i2", bucketId: "loc" }, { text: "t7_i3", bucketId: "loc" }, { text: "t7_i4", bucketId: "sou" }, { text: "t7_i5", bucketId: "sou" }, { text: "t7_i6", bucketId: "sou" }],
      instruction: "t7_inst"
    },
    quiz: { generate: "elelmiszer" },
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["🍅"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["🥕"], bg: "#FFEDD5", border: "#F97316" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "abo", label: "t8_b1" }, { id: "bel", label: "t8_b2" }],
      items: [{ text: "t8_i1", bucketId: "abo" }, { text: "t8_i2", bucketId: "abo" }, { text: "t8_i3", bucketId: "abo" }, { text: "t8_i4", bucketId: "bel" }, { text: "t8_i5", bucketId: "bel" }, { text: "t8_i6", bucketId: "bel" }],
      instruction: "t8_inst"
    },
    quiz: { generate: "elelmiszer" },
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["⚽"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["🧸"], bg: "#FDF4FF", border: "#A21CAF" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "out", label: "t9_b1" }, { id: "ind", label: "t9_b2" }],
      items: [{ text: "t9_i1", bucketId: "out" }, { text: "t9_i2", bucketId: "out" }, { text: "t9_i3", bucketId: "out" }, { text: "t9_i4", bucketId: "ind" }, { text: "t9_i5", bucketId: "ind" }, { text: "t9_i6", bucketId: "ind" }],
      instruction: "t9_inst"
    },
    quiz: { generate: "fonevek" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "",
    svg: { type: "simple-icon", icon: "🗓️", title: "Év", bg: "#EDE9FE", color: "#7C3AED" },
    interactive: { type: "match-pairs", pairs: [{ left: "t10_l1", right: "t10_r1" }, { left: "t10_l2", right: "t10_r2" }, { left: "t10_l3", right: "t10_r3" }, { left: "t10_l4", right: "t10_r4" }], instruction: "t10_inst" },
    quiz: { generate: "napszakok" },
  },
];

export const MAGYAR_O1_I7_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "",
    svg: { type: "simple-icon", icon: "👦", title: "Ki?", bg: "#DBEAFE", color: "#2563EB" },
    interactive: {
      type: "physics-slingshot", question: "t1_q",
      targets: [{ id: "v1", text: "t1_t1", isCorrect: true }, { id: "v2", text: "t1_t2", isCorrect: true }, { id: "v3", text: "t1_t3", isCorrect: true }, { id: "n1", text: "t1_t4", isCorrect: false }, { id: "n2", text: "t1_t5", isCorrect: false }],
      instruction: "t1_inst"
    },
    quiz: { generate: "fonevek" },
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "",
    svg: { type: "simple-icon", icon: "📦", title: "Mi?", bg: "#F3F4F6", color: "#1F2937" },
    interactive: {
      type: "physics-slingshot", question: "t2_q",
      targets: [{ id: "v1", text: "t2_t1", isCorrect: true }, { id: "v2", text: "t2_t2", isCorrect: true }, { id: "v3", text: "t2_t3", isCorrect: true }, { id: "n1", text: "t2_t4", isCorrect: false }, { id: "n2", text: "t2_t5", isCorrect: false }],
      instruction: "t2_inst"
    },
    quiz: { generate: "fonevek" },
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "",
    svg: { type: "simple-icon", icon: "🏃", title: "Teszi", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t3_q",
      targets: [{ id: "v1", text: "t3_t1", isCorrect: true }, { id: "v2", text: "t3_t2", isCorrect: true }, { id: "v3", text: "t3_t3", isCorrect: true }, { id: "n1", text: "t3_t4", isCorrect: false }, { id: "n2", text: "t3_t5", isCorrect: false }],
      instruction: "t3_inst"
    },
    quiz: { generate: "igek" },
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "",
    svg: { type: "simple-icon", icon: "🌈", title: "Milyen", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t4_q",
      targets: [{ id: "v1", text: "t4_t1", isCorrect: true }, { id: "v2", text: "t4_t2", isCorrect: true }, { id: "v3", text: "t4_t3", isCorrect: true }, { id: "n1", text: "t4_t4", isCorrect: false }, { id: "n2", text: "t4_t5", isCorrect: false }],
      instruction: "t4_inst"
    },
    quiz: { generate: "melleknevek" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "",
    svg: { type: "simple-icon", icon: "↔️", title: "Ellentét", bg: "#F1F5F9", color: "#475569" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }, { left: "t5_l3", right: "t5_r3" }], instruction: "t5_inst" },
    quiz: { generate: "ellentetek" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["fa"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["iskola"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "1", label: "t6_b1" }, { id: "3", label: "t6_b2" }],
      items: [{ text: "t6_i1", bucketId: "1" }, { text: "t6_i2", bucketId: "1" }, { text: "t6_i3", bucketId: "1" }, { text: "t6_i4", bucketId: "3" }, { text: "t6_i5", bucketId: "3" }, { text: "t6_i6", bucketId: "3" }],
      instruction: "t6_inst"
    },
    quiz: { generate: "szotagszam" },
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "",
    svg: { type: "simple-icon", icon: "ABC", title: "ABC", bg: "#E0F2FE", color: "#0EA5E9" },
    interactive: { type: "physics-stacker", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4"], correctOrder: [0, 1, 2, 3], instruction: "t7_inst" },
    quiz: { generate: "abc_sorrend" },
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "",
    svg: { type: "simple-icon", icon: "🏠", title: "Kicsi", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: {
      type: "physics-slingshot", question: "t8_q",
      targets: [{ id: "v1", text: "t8_t1", isCorrect: true }, { id: "n1", text: "t8_t2", isCorrect: false }, { id: "n2", text: "t8_t3", isCorrect: false }, { id: "n3", text: "t8_t4", isCorrect: false }, { id: "n4", text: "t8_t5", isCorrect: false }],
      instruction: "t8_inst"
    },
    quiz: { generate: "kicsinyitokepozo" },
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "",
    svg: { type: "text-bubbles", items: [{ text: "gy", color: "#374151", bg: "#F3F4F6" }, { text: "ny", color: "#374151", bg: "#F3F4F6" }] },
    interactive: { type: "highlight-text", tokens: ["t9_tok1", "t9_tok2", "t9_tok3", "t9_tok4", "t9_tok5", "t9_tok6", "t9_tok7", "t9_tok8"], correctIndices: [0, 2, 4, 7], instruction: "t9_inst" },
    quiz: { generate: "betuparok" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "",
    svg: { type: "simple-icon", icon: "❓", title: "J-LY", bg: "#DBEAFE", color: "#2563EB" },
    interactive: { type: "gap-fill", sentence: "t10_sent", choices: ["t10_c1", "t10_c2"], correctIndex: 1, instruction: "t10_inst" },
    quiz: { generate: "j_ly" },
  },
];

export const MAGYAR_O1_I8_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["b"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["d"], bg: "#E5E7EB", border: "#9CA3AF" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "b", label: "t1_b1" }, { id: "d", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "b" }, { text: "t1_i2", bucketId: "b" }, { text: "t1_i3", bucketId: "b" }, { text: "t1_i4", bucketId: "d" }, { text: "t1_i5", bucketId: "d" }, { text: "t1_i6", bucketId: "d" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "betufelismeres" },
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["p"], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["b"], bg: "#E5E7EB", border: "#9CA3AF" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "p", label: "t2_b1" }, { id: "b", label: "t2_b2" }],
      items: [{ text: "t2_i1", bucketId: "p" }, { text: "t2_i2", bucketId: "p" }, { text: "t2_i3", bucketId: "p" }, { text: "t2_i4", bucketId: "b" }, { text: "t2_i5", bucketId: "b" }, { text: "t2_i6", bucketId: "b" }],
      instruction: "t2_inst"
    },
    quiz: { generate: "betufelismeres" },
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "",
    svg: { type: "simple-icon", icon: "👯", title: "Egy-két", bg: "#F3F4F6", color: "#374151" },
    interactive: { type: "gap-fill", sentence: "t3_sent", choices: ["t3_c1", "t3_c2"], correctIndex: 0, instruction: "t3_inst" },
    quiz: { generate: "kettozodes" },
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["o", "ö"], bg: "#DCFCE7", border: "#16A34A" }, right: { items: ["ó", "ő"], bg: "#F0FDF4", border: "#22C55E" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "sho", label: "t4_b1" }, { id: "lon", label: "t4_b2" }],
      items: [{ text: "t4_i1", bucketId: "sho" }, { text: "t4_i2", bucketId: "sho" }, { text: "t4_i3", bucketId: "sho" }, { text: "t4_i4", bucketId: "lon" }, { text: "t4_i5", bucketId: "lon" }, { text: "t4_i6", bucketId: "lon" }],
      instruction: "t4_inst"
    },
    quiz: { generate: "rovid_hosszu" },
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "",
    svg: { type: "simple-icon", icon: "🤝", title: "Mix", bg: "#FDF4FF", color: "#A21CAF" },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_l1", right: "t5_r1" }, { left: "t5_l2", right: "t5_r2" }, { left: "t5_l3", right: "t5_r3" }], instruction: "t5_inst" },
    quiz: { generate: "kerdes_felelet" },
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "",
    svg: { type: "simple-icon", icon: "🔠", title: "Nevek", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: {
      type: "physics-slingshot", question: "t6_q",
      targets: [{ id: "n1", text: "t6_t1", isCorrect: true }, { id: "n2", text: "t6_t2", isCorrect: true }, { id: "n3", text: "t6_t3", isCorrect: true }, { id: "x1", text: "t6_t4", isCorrect: false }, { id: "x2", text: "t6_t5", isCorrect: false }],
      instruction: "t6_inst"
    },
    quiz: { generate: "nagybetu" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "",
    svg: { type: "simple-icon", icon: ".", title: "Pont", bg: "#F3F4F6", color: "#1F2937" },
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2", "t7_c3"], correctIndex: 0, instruction: "t7_inst" },
    quiz: { generate: "irasjelek" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "",
    svg: { type: "simple-icon", icon: "?", title: "Kérdő", bg: "#DBEAFE", color: "#2563EB" },
    interactive: { type: "gap-fill", sentence: "t8_sent", choices: ["t8_c1", "t8_c2", "t8_c3"], correctIndex: 0, instruction: "t8_inst" },
    quiz: { generate: "irasjelek" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "",
    svg: { type: "simple-icon", icon: "!", title: "Kiált", bg: "#FEE2E2", color: "#DC2626" },
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2", "t9_c3"], correctIndex: 0, instruction: "t9_inst" },
    quiz: { generate: "irasjelek" },
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "",
    svg: { type: "simple-icon", icon: "ABC", title: "ABC", bg: "#E0F2FE", color: "#0EA5E9" },
    interactive: { type: "physics-stacker", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4"], correctOrder: [0, 1, 2, 3], instruction: "t10_inst" },
    quiz: { generate: "abc_sorrend" },
  },
];

export const MAGYAR_O1_I9_POOL: PoolTopicDef[] = [
  {
    difficulty: "hard", infoTitle: "t1_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["á"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["ty"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "v", label: "t1_b1" }, { id: "c", label: "t1_b2" }],
      items: [{ text: "t1_i1", bucketId: "v" }, { text: "t1_i2", bucketId: "v" }, { text: "t1_i3", bucketId: "v" }, { text: "t1_i4", bucketId: "c" }, { text: "t1_i5", bucketId: "c" }, { text: "t1_i6", bucketId: "c" }],
      instruction: "t1_inst"
    },
    quiz: { generate: "maganhangzok" },
  },
  {
    difficulty: "hard", infoTitle: "t2_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["ég"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["eső"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "1", label: "t2_b1" }, { id: "2", label: "t2_b2" }],
      items: [{ text: "t2_i1", bucketId: "1" }, { text: "t2_i2", bucketId: "1" }, { text: "t2_i3", bucketId: "1" }, { text: "t2_i4", bucketId: "2" }, { text: "t2_i5", bucketId: "2" }, { text: "t2_i6", bucketId: "2" }],
      instruction: "t2_inst"
    },
    quiz: { generate: "szotagszam" },
  },
  {
    difficulty: "hard", infoTitle: "t3_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["pék"], bg: "#DBEAFE", border: "#2563EB" }, right: { items: ["kifli"], bg: "#F3F4F6", border: "#1F2937" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "ki", label: "t3_b1" }, { id: "mi", label: "t3_b2" }],
      items: [{ text: "t3_i1", bucketId: "ki" }, { text: "t3_i2", bucketId: "ki" }, { text: "t3_i3", bucketId: "ki" }, { text: "t3_i4", bucketId: "mi" }, { text: "t3_i5", bucketId: "mi" }, { text: "t3_i6", bucketId: "mi" }],
      instruction: "t3_inst"
    },
    quiz: { generate: "fonevek" },
  },
  {
    difficulty: "hard", infoTitle: "t4_title", infoText: "",
    svg: { type: "simple-icon", icon: "🦅", title: "Madár", bg: "#FEE2E2", color: "#DC2626" },
    interactive: {
      type: "physics-slingshot", question: "t4_q",
      targets: [{ id: "v1", text: "t4_t1", isCorrect: true }, { id: "v2", text: "t4_t2", isCorrect: true }, { id: "v3", text: "t4_t3", isCorrect: true }, { id: "n1", text: "t4_t4", isCorrect: false }, { id: "n2", text: "t4_t5", isCorrect: false }],
      instruction: "t4_inst"
    },
    quiz: { generate: "igek" },
  },
  {
    difficulty: "hard", infoTitle: "t5_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["forró"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["víz"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "adj", label: "t5_b1" }, { id: "not", label: "t5_b2" }],
      items: [{ text: "t5_i1", bucketId: "adj" }, { text: "t5_i2", bucketId: "adj" }, { text: "t5_i3", bucketId: "adj" }, { text: "t5_i4", bucketId: "not" }, { text: "t5_i5", bucketId: "not" }, { text: "t5_i6", bucketId: "not" }],
      instruction: "t5_inst"
    },
    quiz: { generate: "melleknevek" },
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "",
    svg: { type: "two-groups", left: { items: ["."], bg: "#F3F4F6", border: "#D1D5DB" }, right: { items: ["?"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: {
      type: "physics-bucket", buckets: [{ id: "dot", label: "t6_b1" }, { id: "que", label: "t6_b2" }],
      items: [{ text: "t6_i1", bucketId: "dot" }, { text: "t6_i2", bucketId: "dot" }, { text: "t6_i3", bucketId: "dot" }, { text: "t6_i4", bucketId: "que" }, { text: "t6_i5", bucketId: "que" }, { text: "t6_i6", bucketId: "que" }],
      instruction: "t6_inst"
    },
    quiz: { generate: "mondatfajtak" },
  },
  {
    difficulty: "hard", infoTitle: "t7_title", infoText: "",
    svg: { type: "simple-icon", icon: "❓", title: "J-LY", bg: "#DBEAFE", color: "#2563EB" },
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2"], correctIndex: 0, instruction: "t7_inst" },
    quiz: { generate: "j_ly" },
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "",
    svg: { type: "simple-icon", icon: "🔠", title: "Nagy", bg: "#FEF2F2", color: "#B91C1C" },
    interactive: { type: "highlight-text", tokens: ["t8_tok1", "t8_tok2", "t8_tok3", "t8_tok4", "t8_tok5", "t8_tok6", "t8_tok7", "t8_tok8"], correctIndices: [0, 2, 5], instruction: "t8_inst" },
    quiz: { generate: "nagybetu" },
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "",
    svg: { type: "simple-icon", icon: "↔️", title: "Ellentét", bg: "#F1F5F9", color: "#475569" },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_l1", right: "t9_r1" }, { left: "t9_l2", right: "t9_r2" }, { left: "t9_l3", right: "t9_r3" }], instruction: "t9_inst" },
    quiz: { generate: "ellentetek" },
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "",
    svg: { type: "simple-icon", icon: "🎓", title: "Vizsga", bg: "#FEFCE8", color: "#A16207" },
    interactive: {
      type: "physics-slingshot", question: "t10_q",
      targets: [{ id: "v1", text: "t10_t1", isCorrect: true }, { id: "n1", text: "t10_t2", isCorrect: false }, { id: "n2", text: "t10_t3", isCorrect: false }, { id: "n3", text: "t10_t4", isCorrect: false }, { id: "n4", text: "t10_t5", isCorrect: false }],
      instruction: "t10_inst"
    },
    quiz: { generate: "abc_sorrend" },
  },
];
