import { LanguagePools } from "../languageTypes";

// Flash durations by grade (ms): grade 1 = 5s, grade 8 = 2.9s
const FLASH: Record<number, number> = {
  1: 5000, 2: 4600, 3: 4200, 4: 3900,
  5: 3600, 6: 3300, 7: 3100, 8: 2900,
};

const TS_THEME = { bg: "#0d0a1f", accent: "#a855f7" };

export const ASTRO_LANGUAGE_POOLS: LanguagePools = {

  /* ================================================================
     DEUTSCH
  ================================================================ */
  de: {
    1: {
      grade: 1,
      tippSturm: [{
        id: "de-ts-k1", title: "TippSturm", flashDuration: FLASH[1],
        instruction: "Merke das Wort! Dann tippe es auf!",
        words: [
          "Hund","Katze","Ball","Baum","Hand","Nase","Fuß","Buch",
          "Tisch","Stuhl","Haus","Maus","Brot","Milch","Kind","Wald",
          "Berg","Herz","Schuh","Fisch","Blatt","Zahn","Kopf","Mond",
          "Stern","Gras","Topf","Weg","Zug","Hut",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [{
        id: "de-ww-k1-1", title: "Wort-Wächter",
        instruction: "Welches Wort ist richtig?",
        targetWord: "Hund",
        wrongWords: ["Hunt","Hundt","Hunnd"],
        theme: { bg: "#0f172a", accent: "#38bdf8" },
      }],
      artikelAsteroids: [{
        id: "de-aa-k1-1", title: "Artikel-Asteroiden",
        instruction: "Sortiere die Nomen!",
        words: [
          { word: "Hund", article: "der" },
          { word: "Katze", article: "die" },
          { word: "Haus", article: "das" },
        ],
        categories: ["der","die","das"],
        theme: { bg: "#1e1b4b", accent: "#c084fc" },
      }],
      satzbauSniper: [{
        id: "de-ss-k1-1", title: "Satzbau-Sniper",
        instruction: "Bilde den Satz!",
        words: ["Hund","Der","bellt"],
        correctOrder: ["Der","Hund","bellt"],
        theme: { bg: "#052e16", accent: "#a7f3d0" },
      }],
      silbenSlicer: [{
        id: "de-sl-k1-1", title: "Silben-Slicer",
        instruction: "Zerschneide die Wörter!",
        words: [
          { word: "Katze", syllables: ["Kat","ze"] },
          { word: "Hunde", syllables: ["Hun","de"] },
        ],
        theme: { bg: "#4c1d95", accent: "#f472b6" },
      }],
      verbenVortex: [{
        id: "de-vv-k1-1", title: "Verben-Vortex",
        instruction: "Welches Verb passt?",
        pronoun: "ich", correctVerb: "gehe",
        wrongVerbs: ["geht","gehen","gehst"],
        theme: { bg: "#2e1065", accent: "#fbbf24" },
      }],
    },
    2: {
      grade: 2,
      tippSturm: [{
        id: "de-ts-k2", title: "TippSturm", flashDuration: FLASH[2],
        instruction: "Merke das Wort! Dann tippe es auf!",
        words: [
          "Schule","Tafel","Fenster","Wasser","Garten","Blume","Wolke","Vogel",
          "Brücke","Straße","Schnee","Abend","Stunde","Kreide","Lehrer","Schüler",
          "Frühling","Sommer","Herbst","Winter","Spielen","Lesen","Schreiben","Singen","Malen",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    3: {
      grade: 3,
      tippSturm: [{
        id: "de-ts-k3", title: "TippSturm", flashDuration: FLASH[3],
        instruction: "Merke das Wort! Dann tippe es auf!",
        words: [
          "Frühstück","Geburtstag","Hausaufgabe","Schultasche","Donnerstag",
          "Samstag","Sonntag","Deutschland","Telefon","Computer",
          "Geschichte","Mannschaft","Abenteuer","Entschuldigung","Freundschaft",
          "Geheimnis","November","Dezember","Februar","Oktober",
          "Schmetterling","Taschenlampe","Weihnachten","Kindergarten","Mittagessen",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    4: {
      grade: 4,
      tippSturm: [{
        id: "de-ts-k4", title: "TippSturm", flashDuration: FLASH[4],
        instruction: "Merke das Wort! Dann tippe es auf!",
        words: [
          "Beobachtung","Bedeutung","Eigenschaft","Einstellung","Entdeckung",
          "Entwicklung","Ergebnis","Gewohnheit","Herausforderung","Jahrestag",
          "Leidenschaft","Nachricht","Phantasie","Qualität","Rechnung",
          "Unterricht","Versprechen","Wettbewerb","Erinnerung","Möglichkeit",
          "Landschaft","Gleichgewicht","Schwierigkeit","Täuschung","Verfolgung",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    5: {
      grade: 5,
      tippSturm: [{
        id: "de-ts-k5", title: "TippSturm", flashDuration: FLASH[5],
        instruction: "Merke das Wort! Dann tippe es auf!",
        words: [
          "Abenteuerlust","Begeisterung","Beziehung","Eigenverantwortung","Entscheidung",
          "Erscheinung","Erziehung","Kommunikation","Meinungsfreiheit","Rücksichtnahme",
          "Selbstständigkeit","Übersetzung","Verantwortung","Zusammenarbeit","Beschäftigung",
          "Bewunderung","Gerechtigkeit","Gleichberechtigung","Herausforderung","Lernbereitschaft",
          "Neuigkeit","Oberfläche","Schwierigkeit","Umgestaltung","Verschiedenheit",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    6: {
      grade: 6,
      tippSturm: [{
        id: "de-ts-k6", title: "TippSturm", flashDuration: FLASH[6],
        instruction: "Merke das Wort! Dann tippe es auf!",
        words: [
          "Auseinandersetzung","Bevölkerung","Beschleunigung","Beziehungsweise","Eigenverantwortung",
          "Entscheidungsfindung","Gesellschaft","Kommunikationsmittel","Kulturverständigung","Menschenwürde",
          "Nachhaltigkeit","Persönlichkeit","Rücksichtnahme","Selbstbestimmung","Umweltbewusstsein",
          "Unterscheidung","Vergangenheit","Weltanschauung","Zivilcourage","Zusammenhalt",
          "Toleranz","Demokratie","Gerechtigkeit","Grundgesetz","Staatsbürger",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    7: {
      grade: 7,
      tippSturm: [{
        id: "de-ts-k7", title: "TippSturm", flashDuration: FLASH[7],
        instruction: "Merke das Wort! Dann tippe es auf!",
        words: [
          "Eigenverantwortlich","Entscheidungsfindung","Gleichberechtigung","Kommunikationsmittel","Kulturverständigung",
          "Menschenwürde","Nachhaltigkeitsziel","Persönlichkeitsentwicklung","Selbstbestimmung","Umweltbewusstsein",
          "Vergangenheitsbewältigung","Weltanschauung","Zivilcourage","Toleranzbereitschaft","Demokratieverständnis",
          "Grundgesetzartikel","Gesellschaftskritik","Verantwortlichkeit","Bürgergesellschaft","Interessenvertretung",
          "Reformbestrebungen","Menschenrechtskonvention","Nachhaltigkeitsstrategie","Rechtstaatsprinzip","Verfassungsgebend",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    8: {
      grade: 8,
      tippSturm: [{
        id: "de-ts-k8", title: "TippSturm", flashDuration: FLASH[8],
        instruction: "Merke das Wort! Dann tippe es auf!",
        words: [
          "Bedeutungslosigkeit","Eigenverantwortlichkeit","Entscheidungsträger","Gesellschaftsordnung","Grenzüberschreitung",
          "Interessenvertretung","Menschenrechtsverletzung","Nachhaltigkeitsstrategie","Persönlichkeitsentwicklung","Reformbestrebungen",
          "Selbstverwirklichung","Toleranzbereitschaft","Umweltverantwortung","Verantwortungsübernahme","Wertvorstellung",
          "Zivilgesellschaft","Zusammengehörigkeit","Demokratieverständnis","Gesellschaftskritisch","Gleichstellungspolitik",
          "Grundgesetzartikel","Kulturrelativismus","Bürgerrechtsbewegung","Verfassungsgebung","Staatsbürgerschaft",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [{
        id: "de-ww-k8-1", title: "Wort-Wächter",
        instruction: "Welches Wort ist richtig?",
        targetWord: "Rhythmus",
        wrongWords: ["Rythmus","Rytmus","Ryhtmus"],
        theme: { bg: "#0f172a", accent: "#38bdf8" },
      }],
      artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
  },

  /* ================================================================
     MAGYAR
  ================================================================ */
  hu: {
    1: {
      grade: 1,
      tippSturm: [{
        id: "hu-ts-k1", title: "TippSturm", flashDuration: FLASH[1],
        instruction: "Jegyezd meg a szót! Aztán írd le!",
        words: [
          "alma","ház","kéz","fa","víz","tűz","kő","nap","hold","hó",
          "só","tej","kút","híd","fej","fog","szív","hal","egér","kutya",
          "macska","madár","fiú","lány","apa","anya","néni","bácsi","levél","szem",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    2: {
      grade: 2,
      tippSturm: [{
        id: "hu-ts-k2", title: "TippSturm", flashDuration: FLASH[2],
        instruction: "Jegyezd meg a szót! Aztán írd le!",
        words: [
          "iskola","ceruza","könyv","táska","ablak","szék","asztal","virág",
          "fű","eső","szél","hegy","folyó","tó","mező","erdő",
          "város","utca","kenyér","sajt","körte","szilva","barack","narancs","barát",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    3: {
      grade: 3,
      tippSturm: [{
        id: "hu-ts-k3", title: "TippSturm", flashDuration: FLASH[3],
        instruction: "Jegyezd meg a szót! Aztán írd le!",
        words: [
          "barátság","kirándulás","tanítónő","ünnepség","születésnap",
          "karácsony","húsvét","vasárnap","csütörtök","szombat",
          "október","november","Magyarország","Budapest","számítógép",
          "telefon","szótár","könyvtár","szabadság","természet",
          "társadalom","emlékezet","képzelet","következtetés","jellemzés",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    4: {
      grade: 4,
      tippSturm: [{
        id: "hu-ts-k4", title: "TippSturm", flashDuration: FLASH[4],
        instruction: "Jegyezd meg a szót! Aztán írd le!",
        words: [
          "megfigyelés","megértés","összefoglalás","szerkesztés","tulajdonság",
          "vélemény","viselkedés","összehasonlítás","meghatározás","megfontolás",
          "megállapítás","előkészítés","megvalósítás","elgondolkodás","összefüggés",
          "megmagyarázás","szükségszerűség","gondolkodásmód","állásfoglalás","megfogalmazás",
          "önkifejezés","jellemkép","gondolat","esemény","elbeszélés",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    5: {
      grade: 5,
      tippSturm: [{
        id: "hu-ts-k5", title: "TippSturm", flashDuration: FLASH[5],
        instruction: "Jegyezd meg a szót! Aztán írd le!",
        words: [
          "alkalmazkodóképesség","átgondoltság","elhivatottság","felelősségteljesség","gondolkodóképesség",
          "irányítóképesség","kezdeményezőkészség","különbségtétel","önállóság","összehangolás",
          "személyiségfejlesztés","talpraesettség","véleménykülönbség","viszonyulás","összefüggőség",
          "elkötelezettség","értékrendszer","közösségépítés","állásfoglalás","önkifejezés",
          "jellemkép","következtetés","meghatározás","tulajdonság","viselkedés",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    6: {
      grade: 6,
      tippSturm: [{
        id: "hu-ts-k6", title: "TippSturm", flashDuration: FLASH[6],
        instruction: "Jegyezd meg a szót! Aztán írd le!",
        words: [
          "alkalmazkodóképesség","beleszólás","elhivatottság","felelősségteljesség","gondolkodóképesség",
          "irányítóképesség","kezdeményezőkészség","különbségtétel","megkülönböztetőképesség","önállóság",
          "összehangolás","személyiségfejlesztés","talpraesettség","véleménykülönbség","értékrendszer",
          "közösségépítés","elkötelezettség","álláspontképviselés","megvalósíthatóság","körülményeskedés",
          "állampolgárság","demokráciafelfogás","alkotmányértelmezés","emberközpontúság","közérdekűség",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    7: {
      grade: 7,
      tippSturm: [{
        id: "hu-ts-k7", title: "TippSturm", flashDuration: FLASH[7],
        instruction: "Jegyezd meg a szót! Aztán írd le!",
        words: [
          "alkalmazkodóképesség","beleszólás","elhivatottság","felelősségteljesség","gondolkodóképesség",
          "irányítóképesség","kezdeményezőkészség","különbségtétel","megkülönböztetőképesség","önállóság",
          "összehangolás","személyiségfejlesztés","talpraesettség","véleménykülönbség","értékrendszer",
          "közösségépítés","elkötelezettség","álláspontképviselés","megvalósíthatóság","körülményeskedés",
          "állampolgárság","demokráciafelfogás","alkotmányértelmezés","emberközpontúság","közérdekűség",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    8: {
      grade: 8,
      tippSturm: [{
        id: "hu-ts-k8", title: "TippSturm", flashDuration: FLASH[8],
        instruction: "Jegyezd meg a szót! Aztán írd le!",
        words: [
          "alkalmazkodóképesség","elkötelezettség","felelősségteljesség","gondolkodóképesség","kezdeményezőkészség",
          "különbségtétel","megkülönböztetőképesség","önállóság","összehangolás","személyiségfejlesztés",
          "talpraesettség","véleménykülönbség","értékrendszer","közösségépítés","álláspontképviselés",
          "alkotmányértelmezés","demokráciaértelmezés","emberközpontúság","közérdekűség","társadalomfejlesztés",
          "állampolgárság","demokratikus","törvényhozói","igazságszolgáltatás","alkotmányosság",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
  },

  /* ================================================================
     ROMÂNĂ
  ================================================================ */
  ro: {
    1: {
      grade: 1,
      tippSturm: [{
        id: "ro-ts-k1", title: "TippSturm", flashDuration: FLASH[1],
        instruction: "Memorează cuvântul! Apoi scrie-l!",
        words: [
          "masă","carte","apă","soare","casă","câine","pisică","copil",
          "mamă","tată","frate","soră","școală","creion","pom","floare",
          "iarbă","cer","lună","stea","minge","pâine","lapte","pește","pădure",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    2: {
      grade: 2,
      tippSturm: [{
        id: "ro-ts-k2", title: "TippSturm", flashDuration: FLASH[2],
        instruction: "Memorează cuvântul! Apoi scrie-l!",
        words: [
          "caiet","fereastră","profesor","elev","clasă","bibliotecă","grădină","câmp",
          "munte","râu","mare","vară","iarnă","toamnă","primăvară","luni",
          "marți","miercuri","joi","vineri","sâmbătă","duminică","prietenie","familie","vecin",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    3: {
      grade: 3,
      tippSturm: [{
        id: "ro-ts-k3", title: "TippSturm", flashDuration: FLASH[3],
        instruction: "Memorează cuvântul! Apoi scrie-l!",
        words: [
          "excursie","sărbătoare","naștere","Crăciun","Paște",
          "România","București","telefon","calculator","dicționar",
          "spectacol","vacanță","recunoștință","curiozitate","imaginație",
          "libertate","responsabilitate","înțelegere","cunoaștere","comportament",
          "observație","caracterizare","comparație","proprietate","definire",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    4: {
      grade: 4,
      tippSturm: [{
        id: "ro-ts-k4", title: "TippSturm", flashDuration: FLASH[4],
        instruction: "Memorează cuvântul! Apoi scrie-l!",
        words: [
          "personalitate","mentalitate","creativitate","perseverență","hotărâre",
          "independență","colaborare","comunicare","argumentare","demonstrare",
          "interpretare","justificare","reprezentare","implementare","organizare",
          "planificare","elaborare","structurare","prezentare","recapitulare",
          "sintetizare","sistematizare","valorificare","conceptualizare","raționalizare",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    5: {
      grade: 5,
      tippSturm: [{
        id: "ro-ts-k5", title: "TippSturm", flashDuration: FLASH[5],
        instruction: "Memorează cuvântul! Apoi scrie-l!",
        words: [
          "adaptabilitate","autoevaluare","conștientizare","cooperare","echilibru",
          "egalitate","exemplificare","fundamentare","generalizare","identificare",
          "individualizare","influențare","integrare","manifestare","optimizare",
          "particularizare","raționalizare","responsabilitate","sistematizare","valorificare",
          "caracterizare","diferențiere","elaborare","abstractizare","concluzionare",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    6: {
      grade: 6,
      tippSturm: [{
        id: "ro-ts-k6", title: "TippSturm", flashDuration: FLASH[6],
        instruction: "Memorează cuvântul! Apoi scrie-l!",
        words: [
          "abstractizare","caracterizare","concluzionare","contextualizare","demonstrare",
          "diferențiere","elaborare","exemplificare","fundamentare","generalizare",
          "identificare","interpretare","justificare","manifestare","optimizare",
          "particularizare","raționalizare","sistematizare","structurare","valorificare",
          "comunicare","responsabilitate","independență","perseverență","hotărâre",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    7: {
      grade: 7,
      tippSturm: [{
        id: "ro-ts-k7", title: "TippSturm", flashDuration: FLASH[7],
        instruction: "Memorează cuvântul! Apoi scrie-l!",
        words: [
          "abstractizare","caracterizare","concluzionare","contextualizare","demonstrare",
          "diferențiere","elaborare","exemplificare","fundamentare","generalizare",
          "interpretare","justificare","manifestare","optimizare","particularizare",
          "raționalizare","sistematizare","valorificare","conceptualizare","individualizare",
          "comunicare","responsabilitate","perseverență","autoevaluare","conștientizare",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    8: {
      grade: 8,
      tippSturm: [{
        id: "ro-ts-k8", title: "TippSturm", flashDuration: FLASH[8],
        instruction: "Memorează cuvântul! Apoi scrie-l!",
        words: [
          "abstractizare","caracterizare","concluzionare","contextualizare","diferențiere",
          "elaborare","exemplificare","fundamentare","generalizare","individualizare",
          "interpretare","justificare","manifestare","optimizare","particularizare",
          "raționalizare","sistematizare","valorificare","conceptualizare","comunicare",
          "responsabilitate","perseverență","autoevaluare","conștientizare","raportare",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
  },

  /* ================================================================
     ENGLISH
  ================================================================ */
  en: {
    1: {
      grade: 1,
      tippSturm: [{
        id: "en-ts-k1", title: "TippSturm", flashDuration: FLASH[1],
        instruction: "Memorize the word! Then type it!",
        words: [
          "cat","dog","sun","run","big","red","hat","cup","ten","pen",
          "man","boy","girl","bird","fish","tree","book","bell","frog","duck",
          "jump","play","sing","read","swim",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    2: {
      grade: 2,
      tippSturm: [{
        id: "en-ts-k2", title: "TippSturm", flashDuration: FLASH[2],
        instruction: "Memorize the word! Then type it!",
        words: [
          "school","apple","water","house","table","chair","black","white",
          "happy","sunny","flower","garden","friend","family","mother",
          "father","sister","brother","winter","summer","spring","autumn","Monday","Friday","Sunday",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    3: {
      grade: 3,
      tippSturm: [{
        id: "en-ts-k3", title: "TippSturm", flashDuration: FLASH[3],
        instruction: "Memorize the word! Then type it!",
        words: [
          "birthday","holiday","Saturday","November","February",
          "computer","telephone","dictionary","library","adventure",
          "breakfast","afternoon","together","beautiful","wonderful",
          "important","different","remember","discover","question",
          "animals","weather","outside","because","country",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    4: {
      grade: 4,
      tippSturm: [{
        id: "en-ts-k4", title: "TippSturm", flashDuration: FLASH[4],
        instruction: "Memorize the word! Then type it!",
        words: [
          "curiosity","imagination","community","celebration","friendship",
          "responsibility","understanding","achievement","measurement","environment",
          "temperature","electricity","geography","democracy","experiment",
          "information","government","technology","population","education",
          "communication","organization","development","determination","cooperation",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    5: {
      grade: 5,
      tippSturm: [{
        id: "en-ts-k5", title: "TippSturm", flashDuration: FLASH[5],
        instruction: "Memorize the word! Then type it!",
        words: [
          "characteristic","communication","concentration","consideration","determination",
          "development","encouragement","establishment","examination","explanation",
          "identification","independence","investigation","organization","participation",
          "perseverance","recommendation","responsibility","transportation","understanding",
          "collaboration","comprehension","contribution","differentiation","generalization",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    6: {
      grade: 6,
      tippSturm: [{
        id: "en-ts-k6", title: "TippSturm", flashDuration: FLASH[6],
        instruction: "Memorize the word! Then type it!",
        words: [
          "accomplishment","acknowledgment","administration","characterization","collaboration",
          "comprehension","consideration","contribution","determination","differentiation",
          "encouragement","establishment","generalization","identification","implementation",
          "independence","interpretation","perseverance","rationalization","systematization",
          "individualization","contextualization","conceptualization","communication","responsibility",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    7: {
      grade: 7,
      tippSturm: [{
        id: "en-ts-k7", title: "TippSturm", flashDuration: FLASH[7],
        instruction: "Memorize the word! Then type it!",
        words: [
          "anthropology","archaeology","biochemistry","cardiovascular","circumstantial",
          "conscientious","controversial","electromagnetic","entrepreneurial","environmental",
          "generalization","humanitarian","infrastructure","internationalization","interpretation",
          "justification","predominantly","characterization","collaboration","comprehension",
          "contextualization","conceptualization","individualization","acknowledgment","determination",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
    8: {
      grade: 8,
      tippSturm: [{
        id: "en-ts-k8", title: "TippSturm", flashDuration: FLASH[8],
        instruction: "Memorize the word! Then type it!",
        words: [
          "anthropological","archaeological","characterization","chronological","conscientious",
          "controversial","electromagnetic","entrepreneurial","environmental","generalization",
          "humanitarian","infrastructure","interdisciplinary","methodological","predominantly",
          "psychologically","acknowledgment","conceptualization","contextualization","individualization",
          "accomplishment","recommendation","responsibility","administration","rationalization",
        ],
        theme: TS_THEME,
      }],
      wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [],
    },
  },
};
