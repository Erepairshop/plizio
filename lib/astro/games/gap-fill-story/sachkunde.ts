import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "photosynthesis",
    story: {
      en: "Plants use {{0}}, water, and {{1}} to make their own food through {{2}}.",
      hu: "A növények a {{0}}, a víz és a {{1}} segítségével állítják elő saját táplálékukat a {{2}} során.",
      de: "Pflanzen nutzen {{0}}, Wasser und {{1}}, um durch {{2}} ihre eigene Nahrung herzustellen.",
      ro: "Plantele folosesc {{0}}, apa și {{1}} pentru a-și produce propria hrană prin {{2}}."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "opt_sunlight",
        options: [
          { id: "opt_sunlight", label: { en: "sunlight", hu: "napfény", de: "Sonnenlicht", ro: "lumina soarelui" } },
          { id: "opt_soil", label: { en: "soil", hu: "talaj", de: "Boden", ro: "sol" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "opt_co2",
        options: [
          { id: "opt_co2", label: { en: "carbon dioxide", hu: "szén-dioxid", de: "Kohlendioxid", ro: "dioxid de carbon" } },
          { id: "opt_o2", label: { en: "oxygen", hu: "oxigén", de: "Sauerstoff", ro: "oxigen" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "opt_photo",
        options: [
          { id: "opt_photo", label: { en: "photosynthesis", hu: "fotoszintézis", de: "Photosynthese", ro: "fotosinteză" } },
          { id: "opt_resp", label: { en: "respiration", hu: "légzés", de: "Atmung", ro: "respirație" } }
        ]
      }
    ]
  },
  {
    id: "water_cycle",
    story: {
      en: "The sun heats the water, causing it to {{0}} and rise as water vapor. High in the air, it cools down and {{1}} to form clouds.",
      hu: "A nap felmelegíti a vizet, amely ezáltal {{0}} és vízgőzként felemelkedik. A levegőben lehűl, és felhőkké {{1}}.",
      de: "Die Sonne erwärmt das Wasser, woraufhin es {{0}} und als Wasserdampf aufsteigt. In der Höhe kühlt es ab und {{1}} zu Wolken.",
      ro: "Soarele încălzește apa, determinând-o să se {{0}} și să se ridice ca vapori de apă. Sus în aer, ea se răcește și se {{1}} formând nori."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "opt_evaporate",
        options: [
          { id: "opt_freeze", label: { en: "freeze", hu: "megfagy", de: "gefriert", ro: "înghețe" } },
          { id: "opt_evaporate", label: { en: "evaporate", hu: "elpárolog", de: "verdunstet", ro: "evapore" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "opt_condenses",
        options: [
          { id: "opt_condenses", label: { en: "condenses", hu: "lecsapódik", de: "kondensiert", ro: "condensează" } },
          { id: "opt_melts", label: { en: "melts", hu: "elolvad", de: "schmilzt", ro: "topește" } }
        ]
      }
    ]
  },
  {
    id: "planets",
    story: {
      en: "The {{0}} is the third planet from the {{1}} and the only place we know of that has {{2}}.",
      hu: "A {{0}} a harmadik bolygó a {{1}}tól számítva, és az egyetlen hely, amiről tudjuk, hogy van rajta {{2}}.",
      de: "Die {{0}} ist der dritte Planet von der {{1}} aus gesehen und der einzige Ort, von dem wir wissen, dass er {{2}} beherbergt.",
      ro: "{{0}} este a treia planetă de la {{1}} și singurul loc pe care îl cunoaștem care are {{2}}."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "opt_earth",
        options: [
          { id: "opt_venus", label: { en: "Venus", hu: "Vénusz", de: "Venus", ro: "Venus" } },
          { id: "opt_earth", label: { en: "Earth", hu: "Föld", de: "Erde", ro: "Pământul" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "opt_sun",
        options: [
          { id: "opt_sun", label: { en: "Sun", hu: "Nap", de: "Sonne", ro: "Soarele" } },
          { id: "opt_moon", label: { en: "Moon", hu: "Hold", de: "Mond", ro: "Luna" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "opt_life",
        options: [
          { id: "opt_rings", label: { en: "rings", hu: "gyűrűk", de: "Ringe", ro: "inele" } },
          { id: "opt_life", label: { en: "life", hu: "élet", de: "Leben", ro: "viață" } }
        ]
      }
    ]
  },
  {
    id: "mammals",
    story: {
      en: "Mammals are animals that give birth to live young and feed them with {{0}}. Most mammals have {{1}} on their bodies.",
      hu: "Az emlősök olyan állatok, amelyek elevenszülők, és kicsinyeiket {{0}} táplálják. A legtöbb emlős testét {{1}} borítja.",
      de: "Säugetiere sind Tiere, die lebende Junge gebären und sie mit {{0}} füttern. Die meisten Säugetiere haben {{1}} auf ihrem Körper.",
      ro: "Mamiferele sunt animale care nasc pui vii și îi hrănesc cu {{0}}. Majoritatea mamiferelor au {{1}} pe corp."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "opt_milk",
        options: [
          { id: "opt_milk", label: { en: "milk", hu: "tejjel", de: "Milch", ro: "lapte" } },
          { id: "opt_insects", label: { en: "insects", hu: "rovarokkal", de: "Insekten", ro: "insecte" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "opt_hair",
        options: [
          { id: "opt_scales", label: { en: "scales", hu: "pikkely", de: "Schuppen", ro: "solzi" } },
          { id: "opt_hair", label: { en: "hair or fur", hu: "szőr vagy haj", de: "Haare oder Fell", ro: "păr sau blană" } }
        ]
      }
    ]
  },
  {
    id: "seasons",
    story: {
      en: "The seasons occur because the Earth's axis is {{0}}. When a hemisphere is tilted towards the sun, we have {{1}}.",
      hu: "Az évszakok azért alakulnak ki, mert a Föld tengelye {{0}}. Amikor az egyik félteke a nap felé dől, akkor {{1}} van.",
      de: "Die Jahreszeiten entstehen, weil die Erdachse {{0}} ist. Wenn eine Halbkugel der Sonne zugeneigt ist, haben wir {{1}}.",
      ro: "Anotimpurile apar deoarece axa Pământului este {{0}}. Când o emisferă este înclinată spre soare, avem {{1}}."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "opt_tilted",
        options: [
          { id: "opt_straight", label: { en: "straight", hu: "egyenes", de: "gerade", ro: "dreaptă" } },
          { id: "opt_tilted", label: { en: "tilted", hu: "megdöntött", de: "geneigt", ro: "înclinată" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "opt_summer",
        options: [
          { id: "opt_summer", label: { en: "summer", hu: "nyár", de: "Sommer", ro: "vară" } },
          { id: "opt_winter", label: { en: "winter", hu: "tél", de: "Winter", ro: "iarnă" } }
        ]
      }
    ]
  }
];
