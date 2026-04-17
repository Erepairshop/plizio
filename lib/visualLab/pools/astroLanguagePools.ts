import { LanguagePools } from "../languageTypes";

// Flash durations by grade (ms): grade 1 = 5s, grade 8 = 2.9s
const FLASH: Record<number, number> = {
  1: 5000, 2: 4600, 3: 4200, 4: 3900,
  5: 3600, 6: 3300, 7: 3100, 8: 2900,
};

const TS_THEME = { bg: "#0d0a1f", accent: "#a855f7" };
const WW_THEME = { bg: "#0f172a", accent: "#38bdf8" };
const AA_THEME = { bg: "#1e1b4b", accent: "#c084fc" };
const SS_THEME = { bg: "#052e16", accent: "#a7f3d0" };
const SL_THEME = { bg: "#4c1d95", accent: "#f472b6" };
const VV_THEME = { bg: "#2e1065", accent: "#fbbf24" };

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
        theme: WW_THEME,
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
        theme: AA_THEME,
      }],
      satzbauSniper: [{
        id: "de-ss-k1-1", title: "Satzbau-Sniper",
        instruction: "Bilde den Satz!",
        words: ["Hund","Der","bellt"],
        correctOrder: ["Der","Hund","bellt"],
        theme: SS_THEME,
      }],
      silbenSlicer: [{
        id: "de-sl-k1-1", title: "Silben-Slicer",
        instruction: "Zerschneide die Wörter!",
        words: [
          { word: "Katze", syllables: ["Kat","ze"] },
          { word: "Hunde", syllables: ["Hun","de"] },
        ],
        theme: SL_THEME,
      }],
      verbenVortex: [{
        id: "de-vv-k1-1", title: "Verben-Vortex",
        instruction: "Welches Verb passt?",
        pronoun: "ich", correctVerb: "gehe",
        wrongVerbs: ["geht","gehen","gehst"],
        theme: VV_THEME,
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
      wortWaechter: [
        {
          id: "de-ww-k2-1", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Schule",
          wrongWords: ["Scule","Shule","Schulle"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k2-2", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Fenster",
          wrongWords: ["Fenstern","Fensten","Fensder"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k2-3", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Brücke",
          wrongWords: ["Brüke","Brückke","Brücck"],
          theme: WW_THEME,
        },
      ],
      artikelAsteroids: [
        {
          id: "de-aa-k2-1", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Vogel", article: "der" },
            { word: "Blume", article: "die" },
            { word: "Fenster", article: "das" },
            { word: "Garten", article: "der" },
            { word: "Straße", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k2-2", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Lehrer", article: "der" },
            { word: "Schule", article: "die" },
            { word: "Wasser", article: "das" },
            { word: "Schnee", article: "der" },
            { word: "Wolke", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k2-3", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Abend", article: "der" },
            { word: "Tafel", article: "die" },
            { word: "Buch", article: "das" },
            { word: "Frühling", article: "der" },
            { word: "Stunde", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
      ],
      satzbauSniper: [
        {
          id: "de-ss-k2-1", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Vogel","Der","singt","laut"],
          correctOrder: ["Der","Vogel","singt","laut"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k2-2", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["spielt","Kind","Das","im","Garten"],
          correctOrder: ["Das","Kind","spielt","im","Garten"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k2-3", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Blume","Die","ist","schön"],
          correctOrder: ["Die","Blume","ist","schön"],
          theme: SS_THEME,
        },
      ],
      silbenSlicer: [
        {
          id: "de-sl-k2-1", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Blume", syllables: ["Blu","me"] },
            { word: "Vogel", syllables: ["Vo","gel"] },
            { word: "Garten", syllables: ["Gar","ten"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k2-2", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Fenster", syllables: ["Fens","ter"] },
            { word: "Lehrer", syllables: ["Leh","rer"] },
            { word: "Wolke", syllables: ["Wol","ke"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k2-3", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Sommer", syllables: ["Som","mer"] },
            { word: "Winter", syllables: ["Win","ter"] },
            { word: "Stunde", syllables: ["Stun","de"] },
          ],
          theme: SL_THEME,
        },
      ],
      verbenVortex: [
        {
          id: "de-vv-k2-1", title: "Verben-Vortex",
          instruction: "Welches Verb passt?",
          pronoun: "er", correctVerb: "spielt",
          wrongVerbs: ["spielen","spiele","spielst"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k2-2", title: "Verben-Vortex",
          instruction: "Welches Verb passt?",
          pronoun: "wir", correctVerb: "lesen",
          wrongVerbs: ["lese","liest","lest"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k2-3", title: "Verben-Vortex",
          instruction: "Welches Verb passt?",
          pronoun: "sie (Pl.)", correctVerb: "singen",
          wrongVerbs: ["singt","singe","singst"],
          theme: VV_THEME,
        },
      ],
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
      wortWaechter: [
        {
          id: "de-ww-k3-1", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Schmetterling",
          wrongWords: ["Schmeterling","Schmetterlink","Schmetterlinng"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k3-2", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Freundschaft",
          wrongWords: ["Freundchaft","Freundschafft","Freuntschaft"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k3-3", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Geburtstag",
          wrongWords: ["Geburtztag","Geburstag","Geburststag"],
          theme: WW_THEME,
        },
      ],
      artikelAsteroids: [
        {
          id: "de-aa-k3-1", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Schmetterling", article: "der" },
            { word: "Freundschaft", article: "die" },
            { word: "Geheimnis", article: "das" },
            { word: "Geburtstag", article: "der" },
            { word: "Mannschaft", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k3-2", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "November", article: "der" },
            { word: "Taschenlampe", article: "die" },
            { word: "Abenteuer", article: "das" },
            { word: "Computer", article: "der" },
            { word: "Geschichte", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k3-3", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Donnerstag", article: "der" },
            { word: "Hausaufgabe", article: "die" },
            { word: "Frühstück", article: "das" },
            { word: "Samstag", article: "der" },
            { word: "Schultasche", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
      ],
      satzbauSniper: [
        {
          id: "de-ss-k3-1", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Hausaufgaben","macht","er","nach","der","Schule"],
          correctOrder: ["Er","macht","nach","der","Schule","Hausaufgaben"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k3-2", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Schmetterling","Der","fliegt","über","die","Blumen"],
          correctOrder: ["Der","Schmetterling","fliegt","über","die","Blumen"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k3-3", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["spielen","Kinder","Fußball","Die","im","Park"],
          correctOrder: ["Die","Kinder","spielen","Fußball","im","Park"],
          theme: SS_THEME,
        },
      ],
      silbenSlicer: [
        {
          id: "de-sl-k3-1", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Geburtstag", syllables: ["Ge","burts","tag"] },
            { word: "Computer", syllables: ["Com","pu","ter"] },
            { word: "November", syllables: ["No","vem","ber"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k3-2", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Freundschaft", syllables: ["Freund","schaft"] },
            { word: "Taschenlampe", syllables: ["Ta","schen","lam","pe"] },
            { word: "Schmetterling", syllables: ["Schmet","ter","ling"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k3-3", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Mittagessen", syllables: ["Mit","tag","es","sen"] },
            { word: "Weihnachten", syllables: ["Weih","nach","ten"] },
            { word: "Kindergarten", syllables: ["Kin","der","gar","ten"] },
          ],
          theme: SL_THEME,
        },
      ],
      verbenVortex: [
        {
          id: "de-vv-k3-1", title: "Verben-Vortex",
          instruction: "Welches Verb passt?",
          pronoun: "ich", correctVerb: "kann",
          wrongVerbs: ["kann","kannst","können","könnst"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k3-2", title: "Verben-Vortex",
          instruction: "Welches Verb passt?",
          pronoun: "du", correctVerb: "musst",
          wrongVerbs: ["muss","müssen","müsst"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k3-3", title: "Verben-Vortex",
          instruction: "Welches Verb passt?",
          pronoun: "wir", correctVerb: "wollen",
          wrongVerbs: ["will","wollt","willst"],
          theme: VV_THEME,
        },
      ],
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
      wortWaechter: [
        {
          id: "de-ww-k4-1", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Phantasie",
          wrongWords: ["Fantasie","Phantassi","Phantazie"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k4-2", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Qualität",
          wrongWords: ["Qualitet","Qualitätt","Qualittät"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k4-3", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Leidenschaft",
          wrongWords: ["Leidenschaft","Leidenshaft","Leidenschafft","Leidenscahft"],
          theme: WW_THEME,
        },
      ],
      artikelAsteroids: [
        {
          id: "de-aa-k4-1", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Unterricht", article: "der" },
            { word: "Erinnerung", article: "die" },
            { word: "Ergebnis", article: "das" },
            { word: "Wettbewerb", article: "der" },
            { word: "Bedeutung", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k4-2", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Jahrestag", article: "der" },
            { word: "Eigenschaft", article: "die" },
            { word: "Versprechen", article: "das" },
            { word: "Gleichgewicht", article: "das" },
            { word: "Nachricht", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k4-3", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Wettbewerb", article: "der" },
            { word: "Landschaft", article: "die" },
            { word: "Gewicht", article: "das" },
            { word: "Beobachtung", article: "die" },
            { word: "Entdecker", article: "der" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
      ],
      satzbauSniper: [
        {
          id: "de-ss-k4-1", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["hat","Er","vergessen","Hausaufgaben","seine"],
          correctOrder: ["Er","hat","seine","Hausaufgaben","vergessen"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k4-2", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["die","hat","Die","Klasse","Aufgabe","gelöst"],
          correctOrder: ["Die","Klasse","hat","die","Aufgabe","gelöst"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k4-3", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["gestern","Wir","beobachtet","haben","Vögel"],
          correctOrder: ["Wir","haben","gestern","Vögel","beobachtet"],
          theme: SS_THEME,
        },
      ],
      silbenSlicer: [
        {
          id: "de-sl-k4-1", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Beobachtung", syllables: ["Be","ob","ach","tung"] },
            { word: "Erinnerung", syllables: ["Er","in","ne","rung"] },
            { word: "Entwicklung", syllables: ["Ent","wick","lung"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k4-2", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Eigenschaft", syllables: ["Ei","gen","schaft"] },
            { word: "Landschaft", syllables: ["Land","schaft"] },
            { word: "Herausforderung", syllables: ["He","raus","for","de","rung"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k4-3", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Leidenschaft", syllables: ["Lei","den","schaft"] },
            { word: "Möglichkeit", syllables: ["Mög","lich","keit"] },
            { word: "Schwierigkeit", syllables: ["Schwie","rig","keit"] },
          ],
          theme: SL_THEME,
        },
      ],
      verbenVortex: [
        {
          id: "de-vv-k4-1", title: "Verben-Vortex",
          instruction: "Welches Verb passt?",
          pronoun: "ich (Vergangenheit)", correctVerb: "habe gespielt",
          wrongVerbs: ["hatte gespielt","bin gespielt","habe spielen"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k4-2", title: "Verben-Vortex",
          instruction: "Welches Verb passt?",
          pronoun: "sie (Sing.)", correctVerb: "ist gegangen",
          wrongVerbs: ["hat gegangen","ist gehend","war gegangen"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k4-3", title: "Verben-Vortex",
          instruction: "Welches Verb passt?",
          pronoun: "wir (Vergangenheit)", correctVerb: "haben gelesen",
          wrongVerbs: ["sind gelesen","haben gelest","hatten gelesen"],
          theme: VV_THEME,
        },
      ],
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
      wortWaechter: [
        {
          id: "de-ww-k5-1", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Selbstständigkeit",
          wrongWords: ["Selbstständigkeit","Selbstständigkeid","Selbstständigkait","Selbstständigheit"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k5-2", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Verantwortung",
          wrongWords: ["Verantwortunng","Verantwortunk","Verantwordung"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k5-3", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Gerechtigkeit",
          wrongWords: ["Gerechtigkeid","Gerechtikkeit","Gerechtigkeit"],
          theme: WW_THEME,
        },
      ],
      artikelAsteroids: [
        {
          id: "de-aa-k5-1", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Zusammenhalt", article: "der" },
            { word: "Verantwortung", article: "die" },
            { word: "Bewusstsein", article: "das" },
            { word: "Fortschritt", article: "der" },
            { word: "Gerechtigkeit", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k5-2", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Ausdruck", article: "der" },
            { word: "Selbstständigkeit", article: "die" },
            { word: "Ergebnis", article: "das" },
            { word: "Einfluss", article: "der" },
            { word: "Beziehung", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k5-3", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Auftrag", article: "der" },
            { word: "Übersetzung", article: "die" },
            { word: "Verhalten", article: "das" },
            { word: "Vorschlag", article: "der" },
            { word: "Erscheinung", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
      ],
      satzbauSniper: [
        {
          id: "de-ss-k5-1", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["weil","Er","lernte","fleißig","er","eine","Prüfung","hatte"],
          correctOrder: ["Er","lernte","fleißig","weil","er","eine","Prüfung","hatte"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k5-2", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Das","Buch","das","ich","las","sehr","war","interessant"],
          correctOrder: ["Das","Buch","das","ich","las","war","sehr","interessant"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k5-3", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["wenn","Ich","helfe","du","brauchst","Hilfe","dir"],
          correctOrder: ["Ich","helfe","dir","wenn","du","Hilfe","brauchst"],
          theme: SS_THEME,
        },
      ],
      silbenSlicer: [
        {
          id: "de-sl-k5-1", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Eigenverantwortung", syllables: ["Ei","gen","ver","ant","wor","tung"] },
            { word: "Gerechtigkeit", syllables: ["Ge","rech","tig","keit"] },
            { word: "Zusammenarbeit", syllables: ["Zu","sam","men","ar","beit"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k5-2", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Kommunikation", syllables: ["Kom","mu","ni","ka","ti","on"] },
            { word: "Übersetzung", syllables: ["Ü","ber","set","zung"] },
            { word: "Selbstständigkeit", syllables: ["Selbst","stän","dig","keit"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k5-3", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Verantwortung", syllables: ["Ver","ant","wor","tung"] },
            { word: "Lernbereitschaft", syllables: ["Lern","be","reit","schaft"] },
            { word: "Meinungsfreiheit", syllables: ["Mei","nungs","frei","heit"] },
          ],
          theme: SL_THEME,
        },
      ],
      verbenVortex: [
        {
          id: "de-vv-k5-1", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Konjunktiv II)",
          pronoun: "ich", correctVerb: "würde helfen",
          wrongVerbs: ["werde helfen","hätte helfen","würden helfen"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k5-2", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Konjunktiv II)",
          pronoun: "er", correctVerb: "käme",
          wrongVerbs: ["komme","kämt","kämst"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k5-3", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Konjunktiv II)",
          pronoun: "wir", correctVerb: "hätten",
          wrongVerbs: ["hatten","hättet","haben"],
          theme: VV_THEME,
        },
      ],
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
      wortWaechter: [
        {
          id: "de-ww-k6-1", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Zivilcourage",
          wrongWords: ["Zivilkourage","Sivilcourage","Zivilcurage"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k6-2", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Nachhaltigkeit",
          wrongWords: ["Nachhaltigkeid","Nachhaltigheit","Nachalltigkeit"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k6-3", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Menschenwürde",
          wrongWords: ["Menschenwürte","Menschenwürde","Menschenwüde","Menshenwürde"],
          theme: WW_THEME,
        },
      ],
      artikelAsteroids: [
        {
          id: "de-aa-k6-1", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Zusammenhalt", article: "der" },
            { word: "Gesellschaft", article: "die" },
            { word: "Grundgesetz", article: "das" },
            { word: "Staatsbürger", article: "der" },
            { word: "Nachhaltigkeit", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k6-2", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Entschluss", article: "der" },
            { word: "Demokratie", article: "die" },
            { word: "Bewusstsein", article: "das" },
            { word: "Zusammenhalt", article: "der" },
            { word: "Persönlichkeit", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k6-3", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Umweltschutz", article: "der" },
            { word: "Toleranz", article: "die" },
            { word: "Umweltbewusstsein", article: "das" },
            { word: "Weltanschauung", article: "die" },
            { word: "Bürger", article: "der" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
      ],
      satzbauSniper: [
        {
          id: "de-ss-k6-1", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["wird","Das","Grundgesetz","von","allen","respektiert","Bürgern"],
          correctOrder: ["Das","Grundgesetz","wird","von","allen","Bürgern","respektiert"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k6-2", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["obwohl","Sie","half","schwierig","es","war","ihm"],
          correctOrder: ["Sie","half","ihm","obwohl","es","schwierig","war"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k6-3", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Die","Gesellschaft","muss","füreinander","einstehen"],
          correctOrder: ["Die","Gesellschaft","muss","füreinander","einstehen"],
          theme: SS_THEME,
        },
      ],
      silbenSlicer: [
        {
          id: "de-sl-k6-1", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Nachhaltigkeit", syllables: ["Nach","hal","tig","keit"] },
            { word: "Demokratie", syllables: ["De","mo","kra","tie"] },
            { word: "Zivilcourage", syllables: ["Zi","vil","cou","ra","ge"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k6-2", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Persönlichkeit", syllables: ["Per","sön","lich","keit"] },
            { word: "Grundgesetz", syllables: ["Grund","ge","setz"] },
            { word: "Weltanschauung", syllables: ["Welt","an","schau","ung"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k6-3", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Menschenwürde", syllables: ["Men","schen","wür","de"] },
            { word: "Bevölkerung", syllables: ["Be","völ","ke","rung"] },
            { word: "Zusammenhalt", syllables: ["Zu","sam","men","halt"] },
          ],
          theme: SL_THEME,
        },
      ],
      verbenVortex: [
        {
          id: "de-vv-k6-1", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Passiv)",
          pronoun: "Das Buch", correctVerb: "wird gelesen",
          wrongVerbs: ["liest sich","ist lesen","hat gelesen"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k6-2", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Passiv Vergangenheit)",
          pronoun: "Die Aufgabe", correctVerb: "wurde gelöst",
          wrongVerbs: ["hat gelöst","wird gelöst","war gelöst"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k6-3", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Konjunktiv II)",
          pronoun: "Sie", correctVerb: "wären",
          wrongVerbs: ["waren","würden sein","seien"],
          theme: VV_THEME,
        },
      ],
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
      wortWaechter: [
        {
          id: "de-ww-k7-1", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Gleichberechtigung",
          wrongWords: ["Gleichberechigung","Gleichberechtigunng","Gleichberechtikung"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k7-2", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Vergangenheitsbewältigung",
          wrongWords: ["Vergangenheitsbeweltigung","Vergangenheitsbewältigunng","Vergangennheitsbewältigung"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k7-3", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Interessenvertretung",
          wrongWords: ["Interessenvertetung","Interessenverträtung","Interessenvertretunng"],
          theme: WW_THEME,
        },
      ],
      artikelAsteroids: [
        {
          id: "de-aa-k7-1", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Reformeifer", article: "der" },
            { word: "Gleichberechtigung", article: "die" },
            { word: "Demokratieverständnis", article: "das" },
            { word: "Gesellschaftskritiker", article: "der" },
            { word: "Zivilcourage", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k7-2", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Rechtsstaat", article: "der" },
            { word: "Interessenvertretung", article: "die" },
            { word: "Grundgesetzartikel", article: "der" },
            { word: "Menschenrecht", article: "das" },
            { word: "Toleranzbereitschaft", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k7-3", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Bürgerrecht", article: "das" },
            { word: "Weltanschauung", article: "die" },
            { word: "Verfassungsschutz", article: "der" },
            { word: "Nachhaltigkeitsziel", article: "das" },
            { word: "Gesellschaft", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
      ],
      satzbauSniper: [
        {
          id: "de-ss-k7-1", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["da","Er","konnte","erschöpft","war","nicht","mehr","he","weitermachen"],
          correctOrder: ["Da","er","erschöpft","war","konnte","er","nicht","mehr","weitermachen"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k7-2", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Gleichberechtigung","Die","anerkannt","muss","von","allen","werden"],
          correctOrder: ["Die","Gleichberechtigung","muss","von","allen","anerkannt","werden"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k7-3", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Trotzdem","sie","weitergemacht","hat","obwohl","schwierig","es","war"],
          correctOrder: ["Sie","hat","weitergemacht","obwohl","es","schwierig","war"],
          theme: SS_THEME,
        },
      ],
      silbenSlicer: [
        {
          id: "de-sl-k7-1", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Gleichberechtigung", syllables: ["Gleich","be","rech","ti","gung"] },
            { word: "Demokratieverständnis", syllables: ["De","mo","kra","tie","ver","ständ","nis"] },
            { word: "Interessenvertretung", syllables: ["In","ter","es","sen","ver","tre","tung"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k7-2", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Persönlichkeitsentwicklung", syllables: ["Per","sön","lich","keits","ent","wick","lung"] },
            { word: "Grundgesetzartikel", syllables: ["Grund","ge","setz","ar","ti","kel"] },
            { word: "Vergangenheitsbewältigung", syllables: ["Ver","gan","gen","heits","be","wäl","ti","gung"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k7-3", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Nachhaltigkeitsstrategie", syllables: ["Nach","hal","tig","keits","stra","te","gie"] },
            { word: "Menschenrechtskonvention", syllables: ["Men","schen","rechts","kon","ven","ti","on"] },
            { word: "Bürgergesellschaft", syllables: ["Bür","ger","ge","sell","schaft"] },
          ],
          theme: SL_THEME,
        },
      ],
      verbenVortex: [
        {
          id: "de-vv-k7-1", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Konjunktiv I – indirekte Rede)",
          pronoun: "Er sagte, er", correctVerb: "sei krank",
          wrongVerbs: ["ist krank","wäre krank","sei krankt"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k7-2", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Konjunktiv I – indirekte Rede)",
          pronoun: "Sie behauptete, sie", correctVerb: "habe gelernt",
          wrongVerbs: ["hat gelernt","hätte gelernt","haben gelernt"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k7-3", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Passiv Perfekt)",
          pronoun: "Das Haus", correctVerb: "ist gebaut worden",
          wrongVerbs: ["wurde gebaut worden","ist gebaut gewesen","hat gebaut worden"],
          theme: VV_THEME,
        },
      ],
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
      wortWaechter: [
        {
          id: "de-ww-k8-1", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Rhythmus",
          wrongWords: ["Rythmus","Rytmus","Ryhtmus"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k8-2", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Vegetarismus",
          wrongWords: ["Vegatarismus","Vegetariszmus","Vegetarismuss"],
          theme: WW_THEME,
        },
        {
          id: "de-ww-k8-3", title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Selbstverwirklichung",
          wrongWords: ["Selbstverwirkligung","Selbstverwirklichunng","Selbstverwirklichkung"],
          theme: WW_THEME,
        },
      ],
      artikelAsteroids: [
        {
          id: "de-aa-k8-1", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Kulturrelativismus", article: "der" },
            { word: "Staatsbürgerschaft", article: "die" },
            { word: "Demokratieverständnis", article: "das" },
            { word: "Reformeifer", article: "der" },
            { word: "Zivilgesellschaft", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k8-2", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Grundgesetzartikel", article: "der" },
            { word: "Bürgerrechtsbewegung", article: "die" },
            { word: "Verfassungsgebot", article: "das" },
            { word: "Zusammenhalt", article: "der" },
            { word: "Gleichstellungspolitik", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
        {
          id: "de-aa-k8-3", title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Bürgermeister", article: "der" },
            { word: "Selbstverwirklichung", article: "die" },
            { word: "Grundrecht", article: "das" },
            { word: "Entscheidungsträger", article: "der" },
            { word: "Verantwortungsübernahme", article: "die" },
          ],
          categories: ["der","die","das"],
          theme: AA_THEME,
        },
      ],
      satzbauSniper: [
        {
          id: "de-ss-k8-1", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Er","behauptete","er","habe","das","Buch","nicht","gelesen"],
          correctOrder: ["Er","behauptete","er","habe","das","Buch","nicht","gelesen"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k8-2", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["werden","Die","Rechte","der","Bürger","durch","Verfassung","die","geschützt"],
          correctOrder: ["Die","Rechte","der","Bürger","werden","durch","die","Verfassung","geschützt"],
          theme: SS_THEME,
        },
        {
          id: "de-ss-k8-3", title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Hätte","ich","gewusst","ich","das","wäre","gegangen","nicht"],
          correctOrder: ["Hätte","ich","das","gewusst","wäre","ich","nicht","gegangen"],
          theme: SS_THEME,
        },
      ],
      silbenSlicer: [
        {
          id: "de-sl-k8-1", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Staatsbürgerschaft", syllables: ["Staats","bür","ger","schaft"] },
            { word: "Kulturrelativismus", syllables: ["Kul","tur","re","la","ti","vis","mus"] },
            { word: "Selbstverwirklichung", syllables: ["Selbst","ver","wirk","li","chung"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k8-2", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Bürgerrechtsbewegung", syllables: ["Bür","ger","rechts","be","we","gung"] },
            { word: "Gleichstellungspolitik", syllables: ["Gleich","stel","lungs","po","li","tik"] },
            { word: "Verantwortungsübernahme", syllables: ["Ver","ant","wor","tungs","ü","ber","nah","me"] },
          ],
          theme: SL_THEME,
        },
        {
          id: "de-sl-k8-3", title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Menschenrechtsverletzung", syllables: ["Men","schen","rechts","ver","let","zung"] },
            { word: "Nachhaltigkeitsstrategie", syllables: ["Nach","hal","tig","keits","stra","te","gie"] },
            { word: "Demokratieverständnis", syllables: ["De","mo","kra","tie","ver","ständ","nis"] },
          ],
          theme: SL_THEME,
        },
      ],
      verbenVortex: [
        {
          id: "de-vv-k8-1", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Konjunktiv II – Irrealis)",
          pronoun: "Wenn er käme,", correctVerb: "würde ich ihn begrüßen",
          wrongVerbs: ["werde ich ihn begrüßen","würde ich begrüßen ihn","würde ich ihn begrüßt"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k8-2", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Konjunktiv I – indirekte Rede)",
          pronoun: "Sie erklärte, die Aufgabe", correctVerb: "sei bereits erledigt",
          wrongVerbs: ["ist bereits erledigt","wäre bereits erledigt","sei bereits erledigte"],
          theme: VV_THEME,
        },
        {
          id: "de-vv-k8-3", title: "Verben-Vortex",
          instruction: "Welches Verb passt? (Passiv Plusquamperfekt)",
          pronoun: "Das Gesetz", correctVerb: "war verabschiedet worden",
          wrongVerbs: ["wurde verabschiedet worden","ist verabschiedet worden","war verabschiedet gewesen"],
          theme: VV_THEME,
        },
      ],
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
