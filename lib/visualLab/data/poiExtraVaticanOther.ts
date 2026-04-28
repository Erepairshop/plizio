import { POI } from './poi';

// Kategória: Landscape (tájképek, kertek, szökőkutak)
// A Vatikán mérete miatt ezek többnyire ember által alkotott tájképi elemek.
export const vaticanLandscapes: POI[] = [
  {
    id: 'landscape-vatican-gardens-extra',
    type: 'landmark',
    parent: 'VA',
    country: 'VA',
    coords: [12.4524, 41.9043],
    name: {
      de: 'Vatikanische Gärten',
      hu: 'Vatikáni Kertek',
      ro: 'Grădinile Vaticane',
      en: 'Vatican Gardens',
    },
    description: {
      de: 'Private städtische Gärten und Parks, die mehr als die Hälfte des Territoriums der Vatikanstadt bedecken.',
      hu: 'A Vatikán területének több mint felét elfoglaló privát városi kertek és parkok.',
      ro: 'Grădini și parcuri urbane private care acoperă mai mult de jumătate din teritoriul Cetății Vaticanului.',
      en: "Private urban gardens and parks covering more than half of the country's territory.",
    },
    facts: {
      de: ["Seit 1279 für Päpste reserviert', 'Enthält Befestigungsanlagen, Grotten und Brunnen', 'Verschiedene Gartenstile sind vertreten"],
      hu: ["1279 óta a pápák számára fenntartva', 'Erődítményeket, barlangokat és szökőkutakat tartalmaz', 'Többféle kertstílus megtalálható"],
      ro: ["Rezervate pentru papi din 1279', 'Conțin fortificații, grote și fântâni', 'Prezintă diverse stiluri de grădinărit"],
      en: ["Reserved for popes since 1279', 'Contains fortifications, grottoes, and fountains', 'Features various gardening styles"],
    },
    faq: {},
    plizioChallenge: {}
  },
  {
    id: 'landscape-grotto-of-lourdes-extra',
    type: 'landmark',
    parent: 'VA',
    country: 'VA',
    coords: [12.4495, 41.9038],
    name: {
      de: 'Lourdes-Grotte',
      hu: 'Lourdes-i Barlang',
      ro: 'Grota din Lourdes',
      en: 'Grotto of Lourdes',
    },
    description: {
      de: 'Eine künstliche Grotte in den Vatikanischen Gärten, die der Erscheinung in Lourdes, Frankreich, nachempfunden ist.',
      hu: 'A Vatikáni Kertekben található mesterséges barlang, amely a franciaországi Lourdes-i jelenés másolata.',
      ro: 'O grotă artificială în Grădinile Vaticane, o replică a celei de la Lourdes, Franța.',
      en: 'An artificial grotto in the Vatican Gardens, replicating the one at Lourdes, France.',
    },
    facts: {
      de: ["Von Papst Leo XIII. in Auftrag gegeben', 'Ein Ort des Gebets und der Andacht', 'Nachbildung der Grotte von Massabielle"],
      hu: ["XIII. Leó pápa megrendelésére készült', 'Az imádság és az áhítat helye', 'A Massabielle-i barlang másolata"],
      ro: ["Comandată de Papa Leon al XIII-lea', 'Un loc de rugăciune și devoțiune', 'Replică a grotei de la Massabielle"],
      en: ["Commissioned by Pope Leo XIII', 'A place of prayer and devotion', 'Replica of the Grotto of Massabielle"],
    },
    faq: {},
    plizioChallenge: {}
  },
  {
    id: 'landscape-cortile-della-pigna-extra',
    type: 'landmark',
    parent: 'VA',
    country: 'VA',
    coords: [12.4552, 41.9064],
    name: {
      de: 'Pinienhof',
      hu: 'Toboz-udvar',
      ro: 'Curtea Conului de Pin',
      en: 'Pinecone Courtyard',
    },
    description: {
      de: 'Ein großer Hof, benannt nach einem fast 4 Meter hohen römischen Pinienzapfen aus Bronze.',
      hu: 'Egy nagy udvar, amely egy közel 4 méter magas, ókori római bronz tobozról kapta a nevét.',
      ro: 'O curte mare numită după un con de pin roman din bronz, înalt de aproape 4 metri.',
      en: 'A large courtyard named after a nearly 4-meter-high ancient Roman bronze pinecone.',
    },
    facts: {
      de: ["Der Pinienzapfen war einst ein Brunnen', 'Flankiert von zwei Bronze-Pfauen', 'Verbindet den Belvedere-Palast mit dem Apostolischen Palast"],
      hu: ["A toboz egykor egy szökőkút része volt', 'Két bronz páva szegélyezi', 'Összeköti a Belvedere-palotát az Apostoli Palotával"],
      ro: ["Conul de pin a fost odată o fântână', 'Este flancat de doi păuni de bronz', 'Conectează Palatul Belvedere cu Palatul Apostolic"],
      en: ["The pinecone was once a fountain', 'Flanked by two bronze peacocks', 'Connects the Belvedere Palace with the Apostolic Palace"],
    },
    faq: {},
    plizioChallenge: {}
  }
];

// Kategória: Port (kikötők, közlekedési csomópontok)
// A Vatikánnak nincs tengeri kikötője; a kategória a közlekedési pontokat fedi le.
export const vaticanPorts: POI[] = [
  {
    id: 'port-vatican-heliport-extra',
    type: 'port',
    parent: 'VA',
    country: 'VA',
    coords: [12.4485, 41.9023],
    name: {
      de: 'Heliport des Vatikans',
      hu: 'Vatikáni Heliport',
      ro: 'Heliportul Vatican',
      en: 'Vatican City Heliport',
    },
    description: {
      de: 'Der Heliport verbindet den Vatikan mit den internationalen Flughäfen Roms und der päpstlichen Sommerresidenz in Castel Gandolfo.',
      hu: 'A heliport köti össze a Vatikánt Róma nemzetközi repülőtereivel és a pápai nyári rezidenciával Castel Gandolfóban.',
      ro: 'Heliportul leagă Vaticanul de aeroporturile internaționale din Roma și de reședința papală de vară de la Castel Gandolfo.',
      en: "The heliport connects the Vatican to Rome's international airports and the papal summer residence at Castel Gandolfo.",
    },
    facts: {
      de: ["1976 erbaut', 'Wird für offizielle Reisen und medizinische Notfälle genutzt', 'Befindet sich im westlichsten Teil der Vatikanstadt"],
      hu: ["1976-ban épült', 'Hivatalos utakra és orvosi vészhelyzetekre használják', 'A Vatikán legnyugatibb részén található"],
      ro: ["Construit în 1976', 'Utilizat pentru călătorii oficiale și urgențe medicale', 'Situat în partea cea mai vestică a Vaticanului"],
      en: ["Built in 1976', 'Used for official travel and medical emergencies', 'Located in the westernmost bastion of the Vatican City"],
    },
    faq: {},
    plizioChallenge: {}
  },
  {
    id: 'port-vatican-railway-station-extra',
    type: 'port',
    parent: 'VA',
    country: 'VA',
    coords: [12.4511, 41.9011],
    name: {
      de: 'Bahnhof der Vatikanstadt',
      hu: 'Vatikáni vasútállomás',
      ro: 'Gara din Cetatea Vaticanului',
      en: 'Vatican City Railway Station',
    },
    description: {
      de: 'Der einzige Bahnhof der Vatikanstadt, der hauptsächlich für den Güterverkehr genutzt wird, aber gelegentlich auch Passagierzüge abfertigt.',
      hu: 'A Vatikán egyetlen vasútállomása, amelyet főként teherszállításra használnak, de esetenként személyvonatokat is fogad.',
      ro: 'Singura gară din Cetatea Vaticanului, utilizată în principal pentru transportul de marfă, dar ocazional și pentru pasageri.',
      en: "The Vatican's only railway station, primarily used for freight but occasionally handles passenger trains.",
    },
    facts: {
      de: ["Kürzeste nationale Eisenbahnstrecke der Welt', '1934 eröffnet', 'Das Empfangsgebäude wurde von Giuseppe Momo entworfen"],
      hu: ["A világ legrövidebb nemzeti vasútvonala', '1934-ben nyílt meg', 'Az állomásépületet Giuseppe Momo tervezte"],
      ro: ["Cea mai scurtă cale ferată națională din lume', 'Deschisă în 1934', 'Clădirea gării a fost proiectată de Giuseppe Momo"],
      en: ["World's shortest national railway line', 'Opened in 1934', 'The station building was designed by Giuseppe Momo"],
    },
    faq: {},
    plizioChallenge: {}
  }
];

// Kategória: Industry (gyárak, ipari parkok)
// A Vatikánban nincsenek nehézipari létesítmények; ezek speciális műhelyek és szolgáltatások.
export const vaticanIndustries: POI[] = [
  {
    id: 'industry-vatican-pharmacy-extra',
    type: 'industry',
    parent: 'VA',
    country: 'VA',
    coords: [12.4528, 41.9022],
    name: {
      de: 'Vatikanische Apotheke',
      hu: 'Vatikáni Gyógyszertár',
      ro: 'Farmacia Vaticanului',
      en: 'Vatican Pharmacy',
    },
    description: {
      de: 'Die 1874 gegründete einzige Apotheke in der Vatikanstadt, die für ihre große Auswahl an internationalen Medikamenten bekannt ist.',
      hu: 'Az 1874-ben alapított egyetlen gyógyszertár a Vatikánban, amely nemzetközi gyógyszerek széles választékáról ismert.',
      ro: 'Fondată în 1874, este singura farmacie din Cetatea Vaticanului, cunoscută pentru selecția largă de medicamente internaționale.',
      en: 'Founded in 1874, it is the only pharmacy in the Vatican City, known for its wide selection of international medicines.',
    },
    facts: {
      de: ["Eine der meistbesuchten Apotheken der Welt', 'Steht Bewohnern und Angestellten des Vatikans zur Verfügung', 'Erfordert ein Rezept und einen Ausweis für den Zugang"],
      hu: ["A világ egyik legforgalmasabb gyógyszertára', 'A vatikáni lakosok és alkalmazottak számára elérhető', 'A belépéshez recept és személyazonosító igazolvány szükséges"],
      ro: ["Una dintre cele mai aglomerate farmacii din lume', 'Disponibilă rezidenților și angajaților Vaticanului', 'Necesită rețetă și act de identitate pentru acces"],
      en: ["One of the busiest pharmacies in the world', 'Serves Vatican residents and employees', 'Requires a prescription and ID for access"],
    },
    faq: {},
    plizioChallenge: {}
  },
  {
    id: 'industry-vatican-mosaic-studio-extra',
    type: 'industry',
    parent: 'VA',
    country: 'VA',
    coords: [12.4581, 41.9025],
    name: {
      de: 'Vatikanisches Mosaikstudio',
      hu: 'Vatikáni Mozaikstúdió',
      ro: 'Studioul de Mozaic al Vaticanului',
      en: 'Vatican Mosaic Studio',
    },
    description: {
      de: 'Eine 1727 gegründete Werkstatt, die für die Restaurierung der Mosaike des Vatikans und die Herstellung neuer Mosaikkunstwerke verantwortlich ist.',
      hu: 'Egy 1727-ben alapított műhely, amely a vatikáni mozaikok restaurálásáért és új mozaikművészeti alkotások készítéséért felelős.',
      ro: 'Un atelier fondat în 1727, responsabil pentru restaurarea mozaicurilor Vaticanului și crearea de noi opere de artă mozaicată.',
      en: "A workshop founded in 1727, responsible for restoring the Vatican's mosaics and creating new mosaic artworks.",
    },
    facts: {
      de: ['Stellt Mosaike als Geschenke für Staats- und Regierungschefs her\', \'Verwendet eine einzigartige Technik mit winzigen "Smalti"-Stücken\', \'Befindet sich in der Nähe des Petersdoms'],
      hu: ['Államfőknek szánt ajándékmozaikokat készít\', \'Egyedi technikát használ apró "smalti" darabokkal\', \'A Szent Péter-bazilika közelében található'],
      ro: ['Produce mozaicuri ca daruri pentru șefii de stat\', \'Folosește o tehnică unică cu piese minuscule de "smalti"\', \'Situat lângă Bazilica Sf. Petru'],
      en: ['Creates mosaics as gifts for heads of state\', \'Uses a unique technique with tiny "smalti" pieces\', \'Located near St. Peter\'s Basilica'],
    },
    faq: {},
    plizioChallenge: {}
  }
];

// Kategória: Agriculture (mezőgazdaság)
// A Vatikánban nincs jelentős mezőgazdaság; ezek a kertek egyes részeit jelentik.
export const vaticanAgriculture: POI[] = [
  {
    id: 'agriculture-vatican-vineyard-extra',
    type: 'agriculture',
    parent: 'VA',
    country: 'VA',
    coords: [12.4515, 41.9048],
    name: {
      de: 'Weinberg des Vatikans',
      hu: 'Vatikáni Szőlőültetvény',
      ro: 'Via Vaticanului',
      en: 'Vatican Vineyard',
    },
    description: {
      de: 'Ein kleiner Weinberg in den Vatikanischen Gärten, der als Geschenk an den Papst gespendet wurde und symbolischen Wein produziert.',
      hu: 'A Vatikáni Kertekben található kis szőlőültetvény, amelyet ajándékba adományoztak a pápának, és szimbolikus bort termel.',
      ro: 'O mică vie în Grădinile Vaticane, donată ca un cadou Papei, care produce vin simbolic.',
      en: 'A small vineyard within the Vatican Gardens, donated as a gift to the Pope, which produces symbolic wine.',
    },
    facts: {
      de: ["Ein Geschenk aus Slowenien', 'Produziert eine begrenzte Anzahl von Flaschen', 'Ein Symbol für Freundschaft und Natur"],
      hu: ["Szlovénia ajándéka', 'Korlátozott számú palackot termel', 'A barátság és a természet szimbóluma"],
      ro: ["Un cadou din Slovenia', 'Produce un număr limitat de sticle', 'Un simbol al prieteniei și al naturii"],
      en: ["A gift from Slovenia', 'Produces a limited number of bottles', 'A symbol of friendship and nature"],
    },
    faq: {},
    plizioChallenge: {}
  },
  {
    id: 'agriculture-vatican-olive-grove-extra',
    type: 'agriculture',
    parent: 'VA',
    country: 'VA',
    coords: [12.4490, 41.9030],
    name: {
      de: 'Olivenhain des Vatikans',
      hu: 'Vatikáni Olajfaliget',
      ro: 'Livada de măslini a Vaticanului',
      en: 'Vatican Olive Grove',
    },
    description: {
      de: 'Ein Bereich in den Vatikanischen Gärten mit alten Olivenbäumen, die Öl für liturgische Zwecke und als Geschenke produzieren.',
      hu: 'A Vatikáni Kertek egy területe ősi olajfákkal, amelyek olajat termelnek liturgikus célokra és ajándékként.',
      ro: 'O zonă în Grădinile Vaticane cu măslini vechi, care produc ulei pentru scopuri liturgice și cadouri.',
      en: 'An area in the Vatican Gardens with ancient olive trees, producing oil for liturgical purposes and as gifts.',
    },
    facts: {
      de: ["Einige Bäume sind Jahrhunderte alt', 'Das Öl wird in der Chrisam-Messe verwendet', 'Einige Bäume wurden von besuchenden Würdenträgern gespendet"],
      hu: ["Néhány fa több száz éves', 'Az olajat a krizmaszentelési misén használják', 'Néhány fát látogató méltóságok adományoztak"],
      ro: ["Unii copaci au sute de ani', 'Uleiul este folosit la Liturghia Crismei', 'Unii copaci au fost donați de demnitari în vizită"],
      en: ["Some trees are centuries old', 'The oil is used in the Chrism Mass', 'Some trees were donated by visiting dignitaries"],
    },
    faq: {},
    plizioChallenge: {}
  }
];


// Kategória: Kid-Landmark (gyerekbarát látnivalók)
// Olyan helyek, amelyek vizuálisan vagy történelmileg érdekesek lehetnek a gyerekek számára.
export const vaticanKidLandmarks: POI[] = [
  {
    id: 'kid-landmark-swiss-guard-barracks-extra',
    type: 'kid-landmark',
    parent: 'VA',
    country: 'VA',
    coords: [12.4575, 41.9035],
    name: {
      de: 'Kaserne der Schweizergarde',
      hu: 'Svájci Gárda Laktanyája',
      ro: 'Cazarma Gărzii Elvețiene',
      en: 'Swiss Guard Barracks',
    },
    description: {
      de: 'Die Heimat der Päpstlichen Schweizergarde. Ihre farbenfrohen Renaissance-Uniformen faszinieren Besucher jeden Alters.',
      hu: 'A Pápai Svájci Gárda otthona. Színes reneszánsz egyenruhájuk minden korosztályt lenyűgöz.',
      ro: 'Reședința Gărzii Elvețiene Pontificale. Uniformele lor colorate din perioada Renașterii fascinează vizitatorii de toate vârstele.',
      en: 'The home of the Pontifical Swiss Guard. Their colorful Renaissance-era uniforms are fascinating to visitors of all ages.',
    },
    facts: {
      de: ["Die kleinste und älteste stehende Armee der Welt', 'Die Soldaten müssen katholische Schweizer Bürger sein', 'Die Uniform wurde möglicherweise von Michelangelo entworfen"],
      hu: ["A világ legkisebb és legrégebbi állandó hadserege', 'A katonáknak katolikus svájci állampolgárnak kell lenniük', 'Az egyenruhát talán Michelangelo tervezte"],
      ro: ["Cea mai mică și mai veche armată permanentă din lume', 'Soldații trebuie să fie cetățeni elvețieni catolici', 'Uniforma ar fi putut fi proiectată de Michelangelo"],
      en: ["World's smallest and oldest standing army', 'Soldiers must be Catholic Swiss citizens', 'The uniform may have been designed by Michelangelo"],
    },
    faq: {},
    plizioChallenge: {}
  },
  {
    id: 'kid-landmark-vatican-carriage-pavilion-extra',
    type: 'kid-landmark',
    parent: 'VA',
    country: 'VA',
    coords: [12.4542, 41.9059],
    name: {
      de: 'Kutschenpavillon',
      hu: 'Hintómúzeum',
      ro: 'Pavilionul Trăsurilor',
      en: 'Carriage Pavilion',
    },
    description: {
      de: 'Ein Teil der Vatikanischen Museen, der eine Sammlung von kunstvollen Kutschen, Limousinen und "Papamobilen" ausstellt.',
      hu: 'A Vatikáni Múzeumok része, amely díszes hintók, limuzinok és "pápamobilok" gyűjteményét mutatja be.',
      ro: 'O secțiune a Muzeelor Vaticane care expune o colecție de trăsuri ornate, limuzine și "papamobile".',
      en: 'A section of the Vatican Museums displaying a collection of ornate carriages, limousines, and "Popemobiles".',
    },
    facts: {
      de: ["Zeigt die Entwicklung des päpstlichen Transports', 'Enthält den Grand Gala Berlin von 1826', 'Eines der ersten Autos, der Graham-Paige 837, ist ausgestellt"],
      hu: ["Bemutatja a pápai közlekedés fejlődését', 'Itt látható az 1826-os Grand Gala Berlin hintó', 'Ki van állítva az egyik első autó, a Graham-Paige 837"],
      ro: ["Prezintă evoluția transportului papal', 'Include trăsura Grand Gala Berlin din 1826', 'Este expusă una dintre primele mașini, Graham-Paige 837"],
      en: ["Shows the evolution of papal transportation', 'Includes the 1826 Grand Gala Berlin carriage', 'One of the first cars, the Graham-Paige 837, is on display"],
    },
    faq: {},
    plizioChallenge: {}
  }
];

// Kategória: Animal-Habitat (állatkertek, vadasparkok)
// A Vatikánban nincsenek dedikált állatkertek vagy vadasparkok. Ez a kategória üresen marad a pontosság érdekében.
export const vaticanAnimalHabitats: POI[] = [];


// Összesített export
export const poiExtraVaticanOther: POI[] = [
  ...vaticanLandscapes,
  ...vaticanPorts,
  ...vaticanIndustries,
  ...vaticanAgriculture,
  ...vaticanKidLandmarks,
  ...vaticanAnimalHabitats,
];
