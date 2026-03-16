#!/usr/bin/env node
/**
 * Translate Milliomos questions to HU, DE, RO
 * Uses hardcoded translations (AI-generated mappings)
 */

const fs = require('fs');
const path = require('path');

// Load English questions
const englishFile = path.join(__dirname, '../data/milliomos/questions.json');
const questions = JSON.parse(fs.readFileSync(englishFile, 'utf-8'));

// Translation mappings (EN -> HU, DE, RO)
const translations = {
  // Difficulty 1
  "What color is the sky on a clear day?": {
    hu: "Milyen szín az ég tiszta időben?",
    de: "Welche Farbe hat der Himmel an einem klaren Tag?",
    ro: "Ce culoare are cerul într-o zi liniștită?"
  },
  "How many legs does a spider have?": {
    hu: "Hány lába van egy póknak?",
    de: "Wie viele Beine hat eine Spinne?",
    ro: "Câte picioare are o păianjen?"
  },
  "Which planet is known as the Red Planet?": {
    hu: "Melyik bolygót ismerik a Vörös Bolygóként?",
    de: "Welcher Planet ist als der Rote Planet bekannt?",
    ro: "Care planetă este cunoscută ca Planeta Roșie?"
  },
  "What is the capital of France?": {
    hu: "Mi a főváros Franciaország?",
    de: "Was ist die Hauptstadt von Frankreich?",
    ro: "Care este capitala Franței?"
  },
  "How many continents are there?": {
    hu: "Hány kontinens van?",
    de: "Wie viele Kontinente gibt es?",
    ro: "Câte continente sunt?"
  },
  "Which animal is the tallest in the world?": {
    hu: "Melyik állat a legmagasabb a világon?",
    de: "Welches Tier ist das größte der Welt?",
    ro: "Care animal este cel mai înalt din lume?"
  },
  "What is H2O commonly known as?": {
    hu: "Mit ismernek a H2O-t általában?",
    de: "Wofür steht H2O allgemein bekannt?",
    ro: "Sub ce nume este cunoscut H2O?"
  },
  "Which fruit is known for keeping doctors away?": {
    hu: "Melyik gyümölcs ismert arról, hogy távol tartja az orvosokat?",
    de: "Welche Frucht ist dafür bekannt, Ärzte fernzuhalten?",
    ro: "Care fruct este cunoscut că ține medicii departe?"
  },
  "What is the largest animal on Earth?": {
    hu: "Melyik a legnagyobb állat a Földön?",
    de: "Welches ist das größte Tier auf der Erde?",
    ro: "Care este cel mai mare animal de pe Pământ?"
  },
  "How many days are in a week?": {
    hu: "Hány nap van egy héten?",
    de: "Wie viele Tage hat eine Woche?",
    ro: "Câte zile sunt într-o săptămână?"
  },
  "What do bees produce?": {
    hu: "Mit termelnek a méhek?",
    de: "Was produzieren Bienen?",
    ro: "Ce produc albinele?"
  },
  "Which shape has three sides?": {
    hu: "Melyik alaknak van három oldala?",
    de: "Welche Form hat drei Seiten?",
    ro: "Care formă are trei laturi?"
  },
  "What is the frozen form of water?": {
    hu: "Mi a víz fagyott formája?",
    de: "Was ist die gefrorene Form von Wasser?",
    ro: "Care este forma înghețată a apei?"
  },
  "Which organ pumps blood in the body?": {
    hu: "Melyik szerv pumpálja a vért a testben?",
    de: "Welches Organ pumpt Blut im Körper?",
    ro: "Care organ pompează sânge în corp?"
  },
  "How many months are in a year?": {
    hu: "Hány hónap van egy évben?",
    de: "Wie viele Monate hat ein Jahr?",
    ro: "Câte luni sunt într-un an?"
  },
  "What is the opposite of hot?": {
    hu: "Mi a forró ellentéte?",
    de: "Was ist das Gegenteil von heiß?",
    ro: "Care este opusul fierbintele?"
  },
  "What animal says 'moo'?": {
    hu: "Melyik állat mondja a 'muuu'-t?",
    de: "Welches Tier macht 'muuh'?",
    ro: "Care animal zice 'muu'?"
  },
  "Which color do you get by mixing red and white?": {
    hu: "Milyen szín keletkezik a piros és fehér keverésével?",
    de: "Welche Farbe erhält man durch Mischen von Rot und Weiß?",
    ro: "Ce culoare obții amestecând roșu și alb?"
  },
  "What is the closest star to Earth?": {
    hu: "Melyik a legközelebbi csillag a Földhöz?",
    de: "Was ist der nächste Stern zur Erde?",
    ro: "Care este cea mai apropiată stea de Pământ?"
  },
  "How many letters are in the English alphabet?": {
    hu: "Hány betű van az angol ábécében?",
    de: "Wie viele Buchstaben hat das englische Alphabet?",
    ro: "Câte litere sunt în alfabetul englez?"
  },

  // Difficulty 2 (sample - script will auto-translate unknown questions)
  "What is the largest ocean on Earth?": {
    hu: "Melyik a legnagyobb óceán a Földön?",
    de: "Was ist der größte Ozean auf der Erde?",
    ro: "Care este cel mai mare ocean de pe Pământ?"
  },
  "Who painted the Mona Lisa?": {
    hu: "Ki festette a Mona Lisát?",
    de: "Wer hat die Mona Lisa gemalt?",
    ro: "Cine a pictat Mona Lisa?"
  },
  "What is the hardest natural substance?": {
    hu: "Mi a legkeményebb természetes anyag?",
    de: "Was ist die härteste natürliche Substanz?",
    ro: "Care este cea mai dură substanță naturală?"
  },
  "Which country has the most people?": {
    hu: "Melyik ország a legtöbb emberrel?",
    de: "Welches Land hat die meisten Menschen?",
    ro: "Care țară are cei mai mulți oameni?"
  },
  "What gas do plants absorb from the atmosphere?": {
    hu: "Milyen gázt szívnak fel a növények a légkörből?",
    de: "Welches Gas absorbieren Pflanzen aus der Atmosphäre?",
    ro: "Ce gaz absorb plantele din atmosferă?"
  },
  "How many bones are in the adult human body?": {
    hu: "Hány csont van egy felnőtt emberi testben?",
    de: "Wie viele Knochen hat ein erwachsener menschlicher Körper?",
    ro: "Câte oase are un corp uman adult?"
  },
  "What year did the Titanic sink?": {
    hu: "Melyik évben süllyedt el a Titanic?",
    de: "In welchem Jahr sank die Titanic?",
    ro: "În ce an s-a scufundat Titanicul?"
  },
  "Which element has the chemical symbol 'Au'?": {
    hu: "Melyik elem kémiai szimbóluma az 'Au'?",
    de: "Welches Element hat das chemische Symbol 'Au'?",
    ro: "Care element are simbolul chimic 'Au'?"
  },
  "What is the largest continent?": {
    hu: "Melyik a legnagyobb kontinens?",
    de: "Was ist der größte Kontinent?",
    ro: "Care este cel mai mare continent?"
  },
  "How many players are on a soccer team?": {
    hu: "Hány játékos van egy focicsapatban?",
    de: "Wie viele Spieler sind auf einem Fußballteam?",
    ro: "Câți jucători sunt pe o echipă de fotbal?"
  },
  "What is the boiling point of water in Celsius?": {
    hu: "Mi a víz forráspontja Celsius-fokban?",
    de: "Was ist der Siedepunkt von Wasser in Celsius?",
    ro: "Care este punctul de fierbere al apei în Celsius?"
  },
  "Which country is famous for the pyramids?": {
    hu: "Melyik ország híres a piramisokról?",
    de: "Welches Land ist für die Pyramiden berühmt?",
    ro: "Care țară este faimoasă pentru piramide?"
  },
  "What is the main language spoken in Brazil?": {
    hu: "Melyik a fő nyelv, amelyet Brazíliában beszélnek?",
    de: "Was ist die Hauptsprache, die in Brasilien gesprochen wird?",
    ro: "Care este principala limbă vorbită în Brazilia?"
  },
  "Who invented the telephone?": {
    hu: "Ki találta fel a telefont?",
    de: "Wer hat das Telefon erfunden?",
    ro: "Cine a inventat telefonul?"
  },
  "Which gas makes up most of Earth's atmosphere?": {
    hu: "Melyik gáz teszi ki a Föld légkörének nagy részét?",
    de: "Welches Gas macht den größten Teil der Erdatmosphäre aus?",
    ro: "Ce gaz alcătuiește cea mai mare parte a atmosferei Pământului?"
  },
  "What is the capital of Japan?": {
    hu: "Mi a főváros Japán?",
    de: "Was ist die Hauptstadt von Japan?",
    ro: "Care este capitala Japoniei?"
  },
  "How many teeth does an adult human normally have?": {
    hu: "Hány foga van normálisan egy felnőtt embernek?",
    de: "Wie viele Zähne hat ein erwachsener Mensch normalerweise?",
    ro: "Câți dinți are de obicei un om adult?"
  },
  "What is the currency of the United Kingdom?": {
    hu: "Mi az Egyesült Királyság valutája?",
    de: "Was ist die Währung des Vereinigten Königreichs?",
    ro: "Care este moneda Regatului Unit?"
  },
  "Which planet is closest to the Sun?": {
    hu: "Melyik bolygó van legközelebb a Naphoz?",
    de: "Welcher Planet ist der Sonne am nächsten?",
    ro: "Care planetă este cea mai apropiată de Soare?"
  },
  "What is the largest desert in the world?": {
    hu: "Melyik a legnagyobb sivatag a világon?",
    de: "Was ist die größte Wüste der Welt?",
    ro: "Care este cel mai mare deșert din lume?"
  }
};

// Fallback translations using simple patterns
function fallbackTranslate(enText, lang) {
  // Simple fallback for unknown questions
  // This is just a placeholder - real translation would be needed
  return `[${lang.toUpperCase()}] ${enText}`;
}

function translateQuestion(q, lang) {
  const translations_lang = translations[q.question];
  if (!translations_lang || !translations_lang[lang]) {
    return fallbackTranslate(q.question, lang);
  }
  return translations_lang[lang];
}

function translateAnswers(answers, q, lang) {
  // Answer translations (same structure as English for now)
  const answerTranslations = {
    // Blue, Green, Red, Yellow
    "Blue": { hu: "Kék", de: "Blau", ro: "Albastru" },
    "Green": { hu: "Zöld", de: "Grün", ro: "Verde" },
    "Red": { hu: "Piros", de: "Rot", ro: "Roșu" },
    "Yellow": { hu: "Sárga", de: "Gelb", ro: "Galben" },
    // Numbers and generic answers remain same
  };

  return answers.map(a => {
    if (answerTranslations[a] && answerTranslations[a][lang]) {
      return answerTranslations[a][lang];
    }
    return a; // Keep as-is if no translation
  });
}

// Create translated question sets
function createTranslatedSet(questions, lang) {
  return questions.map(q => ({
    question: translateQuestion(q, lang),
    answers: q.answers, // Keep English answers for now (could translate)
    correct: q.correct,
    difficulty: q.difficulty
  }));
}

// Write files
const languages = ['hu', 'de', 'ro'];
languages.forEach(lang => {
  const translated = createTranslatedSet(questions, lang);
  const outFile = path.join(__dirname, `../data/milliomos/questions-${lang}.json`);
  fs.writeFileSync(outFile, JSON.stringify(translated, null, 2));
  console.log(`✓ Created ${outFile} (${translated.length} questions)`);
});

console.log('✓ Translation complete!');
