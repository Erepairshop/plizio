import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "mcq-env-1",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "Which of these materials takes the longest time to decompose in nature?",
      de: "Welches dieser Materialien braucht am längsten, um in der Natur abgebaut zu werden?",
      hu: "Melyik anyag lebomlása tart a legtovább a természetben?",
      ro: "Care dintre aceste materiale durează cel mai mult timp să se descompună în natură?"
    },
    options: [
      { en: "Apple core", de: "Apfelgriebs", hu: "Alma csutka", ro: "Cotor de măr" },
      { en: "Paper bag", de: "Papiertüte", hu: "Papírzacskó", ro: "Pungă de hârtie" },
      { en: "Glass bottle", de: "Glasflasche", hu: "Üvegpalack", ro: "Sticlă" },
      { en: "Cotton shirt", de: "Baumwollhemd", hu: "Pamut póló", ro: "Cămașă de bumbac" }
    ],
    correctIndex: 2,
    explanation: {
      en: "A glass bottle can take up to 1 million years to decompose in nature, while organic matter like an apple core takes only a few weeks.",
      de: "Eine Glasflasche kann bis zu 1 Million Jahre brauchen, um sich in der Natur zu zersetzen, während organisches Material wie ein Apfelgriebs nur wenige Wochen braucht.",
      hu: "Egy üvegpalack lebomlása akár 1 millió évig is eltarthat a természetben, míg a szerves anyagok, mint az alma csutka, csak néhány hétig.",
      ro: "O sticlă poate dura până la 1 milion de ani pentru a se descompune în natură, în timp ce materia organică precum cotorul de măr durează doar câteva săptămâni."
    }
  },
  {
    id: "mcq-env-2",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What is the primary cause of global warming?",
      de: "Was ist die Hauptursache der globalen Erwärmung?",
      hu: "Mi a globális felmelegedés elsődleges oka?",
      ro: "Care este cauza principală a încălzirii globale?"
    },
    options: [
      { en: "Too many trees", de: "Zu viele Bäume", hu: "Túl sok fa", ro: "Prea mulți copaci" },
      { en: "Volcanic eruptions", de: "Vulkanausbrüche", hu: "Vulkánkitörések", ro: "Erupții vulcanice" },
      { en: "Greenhouse gases", de: "Treibhausgase", hu: "Üvegházhatású gázok", ro: "Gaze cu efect de seră" },
      { en: "Ocean currents", de: "Meeresströmungen", hu: "Óceáni áramlatok", ro: "Curenții oceanici" }
    ],
    correctIndex: 2,
    explanation: {
      en: "Greenhouse gases, like carbon dioxide from burning fossil fuels, trap heat in the Earth's atmosphere, leading to a rise in global temperatures.",
      de: "Treibhausgase wie Kohlendioxid aus der Verbrennung fossiler Brennstoffe fangen Wärme in der Erdatmosphäre ein und führen so zu einem Anstieg der globalen Temperaturen.",
      hu: "Az üvegházhatású gázok, mint a fosszilis tüzelőanyagok elégetéséből származó szén-dioxid, csapdába ejtik a hőt a Föld légkörében, ami a globális hőmérséklet emelkedéséhez vezet.",
      ro: "Gazele cu efect de seră, precum dioxidul de carbon provenit din arderea combustibililor fosili, captează căldura în atmosfera Pământului, ducând la o creștere a temperaturilor globale."
    }
  },
  {
    id: "mcq-env-3",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "Which of the following is a renewable energy source?",
      de: "Welche der folgenden ist eine erneuerbare Energiequelle?",
      hu: "Az alábbiak közül melyik megújuló energiaforrás?",
      ro: "Care dintre următoarele este o sursă de energie regenerabilă?"
    },
    options: [
      { en: "Coal", de: "Kohle", hu: "Szén", ro: "Cărbune" },
      { en: "Wind", de: "Wind", hu: "Szél", ro: "Vânt" },
      { en: "Natural Gas", de: "Erdgas", hu: "Földgáz", ro: "Gaze naturale" },
      { en: "Oil", de: "Öl", hu: "Olaj", ro: "Petrol" }
    ],
    correctIndex: 1,
    explanation: {
      en: "Wind is a renewable resource because it is naturally replenished and will never run out, unlike fossil fuels such as coal and oil.",
      de: "Wind ist eine erneuerbare Ressource, da er auf natürliche Weise erneuert wird und im Gegensatz zu fossilen Brennstoffen wie Kohle und Öl nie ausgeht.",
      hu: "A szél megújuló erőforrás, mert természetes módon újratermelődik és sosem fogy el, ellentétben a fosszilis tüzelőanyagokkal, mint a szén és az olaj.",
      ro: "Vântul este o resursă regenerabilă deoarece este completată natural și nu se va epuiza niciodată, spre deosebire de combustibilii fosili cum ar fi cărbunele și petrolul."
    }
  }
];
