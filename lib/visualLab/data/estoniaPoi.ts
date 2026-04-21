import { projectCoordsEE } from "../maps/estonia.svg";
import type { POI } from "./poi";

const estoniaAllPoiBase: POI[] = [
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

export const estoniaCountry = estoniaAllPoiBase[0] as POI;
export const estoniaRegions: POI[] = estoniaAllPoiBase.slice(1);

export const estoniaCities: POI[] = [
  {
    id: "city-tallinn",
    type: "city",
    parent: "ee-country",
    coords: projectCoordsEE(24.7536, 59.4369),
    name: {
      de: "Tallinn",
      hu: "Tallinn",
      ro: "Tallinn",
      en: "Tallinn"
    },
    description: {
      de: "Hauptstadt, UNESCO-Altstadt und Toompea.",
      hu: "Főváros, UNESCO óváros, Toompea.",
      ro: "Capitala, orașul vechi UNESCO, Toompea.",
      en: "Capital city, UNESCO old town, Toompea."
    },
    facts: {
      de: ["Estlands Hauptstadt", "UNESCO-Altstadt"],
      hu: ["Észtország fővárosa", "UNESCO óváros"],
      ro: ["Capitala Estoniei", "Oraș vechi UNESCO"],
      en: ["Capital of Estonia", "UNESCO old town"]
    },
    image: "/geo-images/estonia/tallinn.webp"
  },
  {
    id: "city-tartu",
    type: "city",
    parent: "ee-country",
    coords: projectCoordsEE(26.7213, 58.3776),
    name: {
      de: "Tartu",
      hu: "Tartu",
      ro: "Tartu",
      en: "Tartu"
    },
    description: {
      de: "Die zweitgrößte Stadt, mit Universität von 1632.",
      hu: "2. legnagyobb, 1632-es egyetem.",
      ro: "Al doilea oraș ca mărime, universitate din 1632.",
      en: "Second-largest city, university from 1632."
    },
    facts: {
      de: ["Zweitgrößte Stadt", "Universität von 1632"],
      hu: ["2. legnagyobb város", "1632-es egyetem"],
      ro: ["Al doilea oraș ca mărime", "Universitate din 1632"],
      en: ["Second-largest city", "University founded in 1632"]
    },
    image: "/geo-images/estonia/tartu.webp"
  },
  {
    id: "city-parnu",
    type: "city",
    parent: "ee-country",
    coords: projectCoordsEE(24.4968, 58.3859),
    name: {
      de: "Pärnu",
      hu: "Pärnu",
      ro: "Pärnu",
      en: "Pärnu"
    },
    description: {
      de: "Küstenkurort und Estlands Sommerhauptstadt.",
      hu: "Tengerparti üdülőhely, észt nyári főváros.",
      ro: "Stațiune de coastă și capitala de vară a Estoniei.",
      en: "Coastal resort and Estonia's summer capital."
    },
    facts: {
      de: ["Badeort an der Küste", "Sommerhauptstadt Estlands"],
      hu: ["Tengerparti üdülőhely", "Észt nyári főváros"],
      ro: ["Stațiune de coastă", "Capitala de vară a Estoniei"],
      en: ["Coastal resort", "Estonia's summer capital"]
    },
    image: "/geo-images/estonia/parnu.webp"
  },
  {
    id: "city-narva",
    type: "city",
    parent: "ee-country",
    coords: projectCoordsEE(28.1939, 59.3794),
    name: {
      de: "Narva",
      hu: "Narva",
      ro: "Narva",
      en: "Narva"
    },
    description: {
      de: "Östliche Grenzstadt mit Burg aus dem 13. Jahrhundert.",
      hu: "Kelet-határ, 13. századi kastély, Ivangorod.",
      ro: "Oraș de graniță estic, castel din secolul al XIII-lea, Ivangorod.",
      en: "Eastern border city, 13th-century castle, Ivangorod."
    },
    facts: {
      de: ["Östliche Grenzstadt", "Burg aus dem 13. Jahrhundert"],
      hu: ["Keleti határváros", "13. századi kastély"],
      ro: ["Oraș de graniță estic", "Castel din secolul al XIII-lea"],
      en: ["Eastern border city", "13th-century castle"]
    },
    image: "/geo-images/estonia/narva.webp"
  }
];

export const estoniaCulture: POI[] = [
  {
    id: "cult-tallinn-oldtown",
    type: "culture",
    parent: "ee-country",
    coords: projectCoordsEE(24.7442, 59.4394),
    name: {
      de: "Tallinner Altstadt",
      hu: "Tallinn óváros",
      ro: "Orașul vechi Tallinn",
      en: "Tallinn Old Town"
    },
    description: {
      de: "UNESCO-Mauern aus dem 13. Jahrhundert mit Türmen.",
      hu: "UNESCO 13. századi fal + tornyok.",
      ro: "Zid UNESCO din secolul al XIII-lea + turnuri.",
      en: "UNESCO 13th-century wall and towers."
    },
    facts: {
      de: ["UNESCO-Welterbe", "13. Jahrhundert"],
      hu: ["UNESCO világörökség", "13. század"],
      ro: ["Patrimoniu UNESCO", "Secolul al XIII-lea"],
      en: ["UNESCO World Heritage", "13th century"]
    },
    image: "/geo-images/estonia/tallinn-oldtown.webp"
  },
  {
    id: "cult-tartu-university",
    type: "culture",
    parent: "ee-country",
    coords: projectCoordsEE(26.7208, 58.3806),
    name: {
      de: "Universität Tartu",
      hu: "Tartu egyetem",
      ro: "Universitatea din Tartu",
      en: "University of Tartu"
    },
    description: {
      de: "Schwedische Gründung von 1632.",
      hu: "Svéd alapítás 1632.",
      ro: "Fondată de suedezi în 1632.",
      en: "Founded by Sweden in 1632."
    },
    facts: {
      de: ["Gegründet 1632", "Alte Universitätsstadt"],
      hu: ["1632-ben alapították", "Régi egyetemi város"],
      ro: ["Fondată în 1632", "Oraș universitar istoric"],
      en: ["Founded in 1632", "Historic university city"]
    },
    image: "/geo-images/estonia/tartu-university.webp"
  },
  {
    id: "cult-kadriorg",
    type: "culture",
    parent: "ee-country",
    coords: projectCoordsEE(24.7897, 59.4394),
    name: {
      de: "Kadriorg-Palast",
      hu: "Kadriorg-palota Tallinn",
      ro: "Palatul Kadriorg",
      en: "Kadriorg Palace"
    },
    description: {
      de: "Peter der Große, 1718, Barock.",
      hu: "Nagy Péter 1718 barokk.",
      ro: "Petru cel Mare, 1718, baroc.",
      en: "Peter the Great, 1718, baroque."
    },
    facts: {
      de: ["Barockpalast", "1718 erbaut"],
      hu: ["Barokk palota", "1718-ban épült"],
      ro: ["Palat baroc", "Construit în 1718"],
      en: ["Baroque palace", "Built in 1718"]
    },
    image: "/geo-images/estonia/kadriorg.webp"
  },
  {
    id: "cult-haapsalu",
    type: "culture",
    parent: "ee-country",
    coords: projectCoordsEE(23.5417, 58.9444),
    name: {
      de: "Bischofsburg Haapsalu",
      hu: "Haapsalu püspöki vár",
      ro: "Castelul episcopal Haapsalu",
      en: "Haapsalu Bishop's Castle"
    },
    description: {
      de: "Burg aus dem 13. Jahrhundert, von Tschaikowski besucht.",
      hu: "13. század, Csajkovszkij látogatta.",
      ro: "Secolul al XIII-lea, vizitat de Ceaikovski.",
      en: "13th century, visited by Tchaikovsky."
    },
    facts: {
      de: ["13. Jahrhundert", "Tschaikowski-Besuch"],
      hu: ["13. század", "Csajkovszkij látogatta"],
      ro: ["Secolul al XIII-lea", "Vizitat de Ceaikovski"],
      en: ["13th century", "Visited by Tchaikovsky"]
    },
    image: "/geo-images/estonia/haapsalu.webp"
  }
];

export const estoniaNature: POI[] = [
  {
    id: "nat-lahemaa",
    type: "nature",
    parent: "ee-country",
    coords: projectCoordsEE(25.9, 59.55),
    name: {
      de: "Lahemaa-Nationalpark",
      hu: "Lahemaa NP",
      ro: "Parcul Național Lahemaa",
      en: "Lahemaa National Park"
    },
    description: {
      de: "Größter Nationalpark, Küste, Wald und Moor.",
      hu: "Legnagyobb NP, tengerpart + erdő + mocsár.",
      ro: "Cel mai mare parc național, coastă + pădure + mlaștină.",
      en: "Largest national park, coast, forest and bog."
    },
    facts: {
      de: ["Größter Nationalpark", "Küste und Moor"],
      hu: ["Legnagyobb nemzeti park", "Tengerpart és mocsár"],
      ro: ["Cel mai mare parc național", "Coastă și mlaștină"],
      en: ["Largest national park", "Coast and bog"]
    },
    image: "/geo-images/estonia/lahemaa.webp"
  },
  {
    id: "nat-saaremaa",
    type: "nature",
    parent: "ee-country",
    coords: projectCoordsEE(22.5, 58.4),
    name: {
      de: "Saaremaa-Insel",
      hu: "Saaremaa-sziget",
      ro: "Insula Saaremaa",
      en: "Saaremaa Island"
    },
    description: {
      de: "Größte estnische Insel, Kuressaare-Burg.",
      hu: "Legnagyobb észt sziget, Kuressaare vár.",
      ro: "Cea mai mare insulă estoniană, castelul Kuressaare.",
      en: "Largest Estonian island, Kuressaare Castle."
    },
    facts: {
      de: ["Größte Insel Estlands", "Kuressaare-Burg"],
      hu: ["Észtország legnagyobb szigete", "Kuressaare vár"],
      ro: ["Cea mai mare insulă a Estoniei", "Castelul Kuressaare"],
      en: ["Largest island in Estonia", "Kuressaare Castle"]
    },
    image: "/geo-images/estonia/saaremaa.webp"
  },
  {
    id: "nat-hiiumaa",
    type: "nature",
    parent: "ee-country",
    coords: projectCoordsEE(22.6, 58.9),
    name: {
      de: "Hiiumaa-Insel",
      hu: "Hiiumaa-sziget + Kõpu világítótorony",
      ro: "Insula Hiiumaa + farul Kõpu",
      en: "Hiiumaa Island + Kõpu Lighthouse"
    },
    description: {
      de: "Mit dem 1504 erbauten, zweitältesten Leuchtturm.",
      hu: "1504 második legrégebbi VT.",
      ro: "Cu farul din 1504, al doilea cel mai vechi.",
      en: "With the 1504 lighthouse, the second-oldest."
    },
    facts: {
      de: ["Leuchtturm von 1504", "Zweitältester Leuchtturm"],
      hu: ["1504-es világítótorony", "Második legrégebbi VT"],
      ro: ["Far din 1504", "Al doilea cel mai vechi far"],
      en: ["1504 lighthouse", "Second-oldest lighthouse"]
    },
    image: "/geo-images/estonia/hiiumaa-kopu-lighthouse.webp"
  },
  {
    id: "nat-soomaa",
    type: "nature",
    parent: "ee-country",
    coords: projectCoordsEE(25.0, 58.5),
    name: {
      de: "Soomaa-Nationalpark",
      hu: "Soomaa NP",
      ro: "Parcul Național Soomaa",
      en: "Soomaa National Park"
    },
    description: {
      de: "Moorgebiet mit der Frühlingsflut als 'fünfte Jahreszeit'.",
      hu: "Mocsár 'ötödik évszak' tavaszi árvíz.",
      ro: "Mlaștină cu inundații de primăvară, 'al cincilea anotimp'.",
      en: "Bogland with spring floods, the 'fifth season'."
    },
    facts: {
      de: ["Moorgebiet", "Fünfte Jahreszeit"],
      hu: ["Mocsárvidék", "Ötödik évszak"],
      ro: ["Mlaștină", "Al cincilea anotimp"],
      en: ["Bogland", "Fifth season"]
    },
    image: "/geo-images/estonia/soomaa.webp"
  }
];

export const estoniaAllPoi: POI[] = [estoniaCountry, ...estoniaRegions, ...estoniaCities, ...estoniaCulture, ...estoniaNature];
