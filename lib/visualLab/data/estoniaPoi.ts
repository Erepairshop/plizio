import { projectCoordsEE } from "../maps/estonia.svg";

export const estoniaAllPoi = [
  {
    id: "ee-country",
    type: "country",
    coords: projectCoordsEE(24.7536, 59.4370),
    name: {
      de: "Estland",
      hu: "Észtország",
      ro: "Estonia",
      en: "Estonia"
    },
    description: {
      de: "Der nördlichste der baltischen Staaten, bekannt für seine digitale Gesellschaft, dichten Wälder und die mittelalterliche Hauptstadt Tallinn.",
      hu: "A balti államok legészakibbika, amely digitális társadalmáról, sűrű erdeiről és középkori fővárosáról, Tallinnról ismert.",
      ro: "Cel mai nordic dintre statele baltice, cunoscut pentru societatea sa digitală, pădurile dese și capitala medievală Tallinn.",
      en: "The northernmost of the Baltic states, known for its digital society, dense forests, and medieval capital Tallinn."
    },
    facts: {
      de: ["Hauptstadt: Tallinn", "Währung: Euro", "Bevölkerung: ~1,3 Millionen"],
      hu: ["Főváros: Tallinn", "Pénznem: Euró", "Népesség: ~1,3 millió"],
      ro: ["Capitala: Tallinn", "Moneda: Euro", "Populație: ~1,3 milioane"],
      en: ["Capital: Tallinn", "Currency: Euro", "Population: ~1.3 million"]
    },
    image: "/images/visualLab/estonia/country.jpg"
  },
  {
    id: "ee-tallinn",
    type: "city",
    parent: "ee-country",
    coords: projectCoordsEE(24.7536, 59.4370),
    name: {
      de: "Tallinn",
      hu: "Tallinn",
      ro: "Tallinn",
      en: "Tallinn"
    },
    description: {
      de: "Die Hauptstadt Estlands, berühmt für ihre außergewöhnlich gut erhaltene mittelalterliche Altstadt.",
      hu: "Észtország fővárosa, amely kivételesen jól megőrzött középkori óvárosáról híres.",
      ro: "Capitala Estoniei, faimoasă pentru orașul său vechi medieval excepțional de bine conservat.",
      en: "The capital of Estonia, famous for its exceptionally well-preserved medieval old town."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Ehemalige Hansestadt"],
      hu: ["UNESCO világörökség", "Egykori Hanza-város"],
      ro: ["Patrimoniul Mondial UNESCO", "Fost oraș hanseatic"],
      en: ["UNESCO World Heritage site", "Former Hanseatic city"]
    },
    image: "/images/visualLab/estonia/tallinn.jpg"
  },
  {
    id: "ee-tartu",
    type: "city",
    parent: "ee-country",
    coords: projectCoordsEE(26.7290, 58.3780),
    name: {
      de: "Tartu",
      hu: "Tartu",
      ro: "Tartu",
      en: "Tartu"
    },
    description: {
      de: "Die zweitgrößte Stadt Estlands und das intellektuelle Zentrum des Landes mit der ältesten Universität.",
      hu: "Észtország második legnagyobb városa és az ország szellemi központja a legrégebbi egyetemmel.",
      ro: "Al doilea oraș ca mărime din Estonia și centrul intelectual al țării, cu cea mai veche universitate.",
      en: "The second-largest city in Estonia and the intellectual center of the country with the oldest university."
    },
    facts: {
      de: ["Universität Tartu (gegr. 1632)", "Kulturhauptstadt Europas 2024"],
      hu: ["Tartui Egyetem (alapítva 1632)", "Európa Kulturális Fővárosa 2024"],
      ro: ["Universitatea din Tartu (fondată 1632)", "Capitala Europeană a Culturii 2024"],
      en: ["University of Tartu (est. 1632)", "European Capital of Culture 2024"]
    },
    image: "/images/visualLab/estonia/tartu.jpg"
  },
  {
    id: "ee-parnu",
    type: "city",
    parent: "ee-country",
    coords: projectCoordsEE(24.4971, 58.3859),
    name: {
      de: "Pärnu",
      hu: "Pärnu",
      ro: "Pärnu",
      en: "Pärnu"
    },
    description: {
      de: "Die 'Sommerhauptstadt' Estlands, ein beliebter Kurort mit langen Sandstränden.",
      hu: "Észtország 'nyári fővárosa', népszerű gyógyüdülőhely hosszú homokos strandokkal.",
      ro: "'Capitala de vară' a Estoniei, o stațiune balneară populară cu plaje lungi de nisip.",
      en: "The 'summer capital' of Estonia, a popular spa resort with long sandy beaches."
    },
    facts: {
      de: ["Historische Schlammbäder", "Lange Sandstrände"],
      hu: ["Történelmi iszapfürdők", "Hosszú homokos strandok"],
      ro: ["Băi de nămol istorice", "Plaje lungi de nisip"],
      en: ["Historic mud baths", "Long sandy beaches"]
    },
    image: "/images/visualLab/estonia/parnu.jpg"
  },
  {
    id: "ee-saaremaa",
    type: "nature",
    parent: "ee-country",
    coords: projectCoordsEE(22.5000, 58.4000),
    name: {
      de: "Saaremaa",
      hu: "Saaremaa",
      ro: "Saaremaa",
      en: "Saaremaa"
    },
    description: {
      de: "Die größte Insel Estlands, bekannt für ihre Windmühlen, Meteoritenkrater und die Burg Kuressaare.",
      hu: "Észtország legnagyobb szigete, amely szélmalmairól, meteoritkrátereiről és a Kuressaare várról ismert.",
      ro: "Cea mai mare insulă a Estoniei, cunoscută pentru morile sale de vânt, craterele de meteoriți și Castelul Kuressaare.",
      en: "The largest island in Estonia, known for its windmills, meteorite craters, and Kuressaare Castle."
    },
    facts: {
      de: ["Kaali-Meteoritenkrater", "Bischofsburg Kuressaare"],
      hu: ["Kaali meteoritkráter", "Kuressaare püspöki vár"],
      ro: ["Craterul de meteorit Kaali", "Castelul episcopal Kuressaare"],
      en: ["Kaali meteorite crater", "Kuressaare Episcopal Castle"]
    },
    image: "/images/visualLab/estonia/saaremaa.jpg"
  },
  {
    id: "ee-lahemaa",
    type: "nature",
    parent: "ee-country",
    coords: projectCoordsEE(25.8333, 59.5667),
    name: {
      de: "Lahemaa-Nationalpark",
      hu: "Lahemaa Nemzeti Park",
      ro: "Parcul Național Lahemaa",
      en: "Lahemaa National Park"
    },
    description: {
      de: "Der älteste und größte Nationalpark Estlands, der Küstenlandschaften, Moore und historische Gutshöfe schützt.",
      hu: "Észtország legrégebbi és legnagyobb nemzeti parkja, amely part menti tájakat, mocsarakat és történelmi udvarházakat véd.",
      ro: "Cel mai vechi și cel mai mare parc național din Estonia, protejând peisaje de coastă, mlaștini și conace istorice.",
      en: "The oldest and largest national park in Estonia, protecting coastal landscapes, bogs, and historic manors."
    },
    facts: {
      de: ["Gegründet 1971", "Viru-Moor"],
      hu: ["1971-ben alapították", "Viru-mocsár"],
      ro: ["Înființat în 1971", "Mlaștina Viru"],
      en: ["Established in 1971", "Viru Bog"]
    },
    image: "/images/visualLab/estonia/lahemaa.jpg"
  },
  {
    id: "ee-narva",
    type: "city",
    parent: "ee-country",
    coords: projectCoordsEE(28.1833, 59.3833),
    name: {
      de: "Narva",
      hu: "Narva",
      ro: "Narva",
      en: "Narva"
    },
    description: {
      de: "Die östlichste Stadt Estlands an der Grenze zu Russland, dominiert von der mächtigen Hermannsburg.",
      hu: "Észtország legkeletibb városa az orosz határon, amelyet a hatalmas Hermann-vár ural.",
      ro: "Cel mai estic oraș din Estonia, la granița cu Rusia, dominat de puternicul Castel Hermann.",
      en: "The easternmost city in Estonia on the border with Russia, dominated by the mighty Hermann Castle."
    },
    facts: {
      de: ["Hermannsburg", "Grenzstadt zu Russland"],
      hu: ["Hermann-vár", "Határváros Oroszországgal"],
      ro: ["Castelul Hermann", "Oraș de graniță cu Rusia"],
      en: ["Hermann Castle", "Border city with Russia"]
    },
    image: "/images/visualLab/estonia/narva.jpg"
  },
  {
    id: "ee-haapsalu",
    type: "city",
    parent: "ee-country",
    coords: projectCoordsEE(23.5333, 58.9333),
    name: {
      de: "Haapsalu",
      hu: "Haapsalu",
      ro: "Haapsalu",
      en: "Haapsalu"
    },
    description: {
      de: "Eine historische Kurstadt an der Westküste, bekannt für ihre Bischofsburg und die hölzerne Promenade.",
      hu: "Történelmi fürdőváros a nyugati parton, amely püspöki váráról és fa sétányáról ismert.",
      ro: "Un oraș balnear istoric pe coasta de vest, cunoscut pentru castelul său episcopal și promenada din lemn.",
      en: "A historic spa town on the west coast, known for its episcopal castle and wooden promenade."
    },
    facts: {
      de: ["Bischofsburg Haapsalu", "Tschaikowski-Bank"],
      hu: ["Haapsalu püspöki vár", "Csajkovszkij-pad"],
      ro: ["Castelul episcopal Haapsalu", "Banca Ceaikovski"],
      en: ["Haapsalu Episcopal Castle", "Tchaikovsky's Bench"]
    },
    image: "/images/visualLab/estonia/haapsalu.jpg"
  }
];