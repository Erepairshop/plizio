
import type { POI } from "./poi";

export const poiExtraHondurasNatureV2: POI[] = [
  {
    id: "islas-del-cisne-nature-v2",
    type: "island",
    parent: "HN-IB",
    coords: [-83.941, 17.415],
    name: {
      de: "Schwaneninseln",
      hu: "Hattyú-szigetek",
      ro: "Insulele Lebedei",
      en: "Swan Islands"
    },
    description: {
      de: "Eine abgelegene Inselgruppe in der Karibik, die für ihre unberührte Natur bekannt ist.",
      hu: "Egy távoli szigetcsoport a Karib-tengeren, érintetlen természetéről ismert.",
      ro: "Un grup de insule îndepărtate în Marea Caraibilor, cunoscute pentru natura lor neatinsă.",
      en: "A remote group of islands in the Caribbean Sea, known for their untouched nature."
    },
    facts: {
      de: ["Besteht aus drei Inseln", "Wichtiger Nistplatz für Seevögel", "Früher von den USA beansprucht", "Keine permanente Bevölkerung"],
      hu: ["Három szigetből áll", "Fontos fészkelőhely tengeri madarak számára", "Korábban az USA birtokolta", "Nincs állandó lakossága"],
      ro: ["Constă din trei insule", "Loc important de cuibărit pentru păsările marine", "Revendicate anterior de SUA", "Fără populație permanentă"],
      en: ["Consists of three islands", "Important nesting site for seabirds", "Formerly claimed by the US", "No permanent population"]
    }
  },
  {
    id: "rio-chamelecon-nature-v2",
    type: "river",
    parent: "HN-CR",
    coords: [-87.945, 15.867],
    name: {
      de: "Fluss Chamelecón",
      hu: "Chamelecón-folyó",
      ro: "Râul Chamelecón",
      en: "Chamelecón River"
    },
    description: {
      de: "Ein bedeutender Fluss im Nordwesten von Honduras, der durch das Sula-Tal fließt.",
      hu: "Jelentős folyó Honduras északnyugati részén, amely a Sula-völgyön folyik keresztül.",
      ro: "Un râu important în nord-vestul Hondurasului, care curge prin Valea Sula.",
      en: "A major river in northwestern Honduras that flows through the Sula Valley."
    },
    facts: {
      de: ["Neigt zu Überschwemmungen", "Wichtig für die Landwirtschaft", "Etwa 200 km lang", "Mündet ins Karibische Meer"],
      hu: ["Hajlamos az áradásokra", "Fontos a mezőgazdaság számára", "Körülbelül 200 km hosszú", "A Karib-tengerbe ömlik"],
      ro: ["Predispus la inundații", "Important pentru agricultură", "Aproximativ 200 km lungime", "Se varsă în Marea Caraibilor"],
      en: ["Prone to flooding", "Important for agriculture", "Approximately 200 km long", "Flows into the Caribbean Sea"]
    }
  },
  {
    id: "cerro-pico-cristal-nature-v2",
    type: "mountain",
    parent: "HN-LE",
    coords: [-88.65, 14.65],
    name: {
      de: "Pico Cristal",
      hu: "Pico Cristal",
      ro: "Vârful Cristal",
      en: "Pico Cristal"
    },
    description: {
      de: "Ein markanter Gipfel in der Montaña de Celaque, der eine anspruchsvolle Wanderung bietet.",
      hu: "A Montaña de Celaque egyik jellegzetes csúcsa, amely kihívást jelentő túrát kínál.",
      ro: "Un vârf proeminent în Montaña de Celaque, care oferă o drumeție provocatoare.",
      en: "A prominent peak in the Montaña de Celaque, offering a challenging hike."
    },
    facts: {
      de: ["Teil des Celaque-Nationalparks", "Höhe über 2.500 m", "Reiche Flora und Fauna", "Nebelwald-Ökosystem"],
      hu: ["A Celaque Nemzeti Park része", "Több mint 2500 m magas", "Gazdag növény- és állatvilág", "Köderdő-ökoszisztéma"],
      ro: ["Parte a Parcului Național Celaque", "Altitudine de peste 2.500 m", "Floră și faună bogată", "Ecosistem de pădure de ceață"],
      en: ["Part of the Celaque National Park", "Altitude over 2,500 m", "Rich flora and fauna", "Cloud forest ecosystem"]
    }
  },
  {
    id: "laguna-de-caratasca-nature-v2",
    type: "lake",
    parent: "HN-GD",
    coords: [-83.8, 15.883],
    name: {
      de: "Caratasca-Lagune",
      hu: "Caratasca-lagúna",
      ro: "Laguna Caratasca",
      en: "Caratasca Lagoon"
    },
    description: {
      de: "Eine riesige Küstenlagune in der Region La Mosquitia, die ein wichtiges Feuchtgebiet darstellt.",
      hu: "Hatalmas part menti lagúna La Mosquitia régióban, amely fontos vizes élőhely.",
      ro: "O lagună de coastă uriașă în regiunea La Mosquitia, care este o zonă umedă importantă.",
      en: "A huge coastal lagoon in the La Mosquitia region, which is an important wetland."
    },
    facts: {
      de: ["Größte Lagune in Honduras", "Brackwasser-Ökosystem", "Reich an Fischen und Vögeln", "Lebensraum für Seekühe"],
      hu: ["Honduras legnagyobb lagúnája", "Brakkvíz-ökoszisztéma", "Halakban és madarakban gazdag", "Lamantinok élőhelye"],
      ro: ["Cea mai mare lagună din Honduras", "Ecosistem de apă salmastră", "Bogat în pești și păsări", "Habitat pentru lamantini"],
      en: ["Largest lagoon in Honduras", "Brackish water ecosystem", "Rich in fish and birds", "Habitat for manatees"]
    }
  },
  {
    id: "montana-de-comayagua-np-nature-v2",
    type: "forest",
    parent: "HN-CM",
    coords: [-87.5, 14.667],
    name: {
      de: "Nationalpark Montaña de Comayagua",
      hu: "Montaña de Comayagua Nemzeti Park",
      ro: "Parcul Național Montaña de Comayagua",
      en: "Montaña de Comayagua National Park"
    },
    description: {
      de: "Ein Nationalpark, der einen großen Nebelwald schützt und als wichtige Wasserquelle dient.",
      hu: "Egy nemzeti park, amely egy nagy kiterjedésű köderdőt véd, és fontos vízforrásként szolgál.",
      ro: "Un parc național care protejează o pădure de ceață mare și servește ca o sursă importantă de apă.",
      en: "A national park that protects a large cloud forest and serves as an important water source."
    },
    facts: {
      de: ["Höhe bis zu 2.407 m", "Heimat des Quetzals", "Wanderwege durch den Nebelwald", "Wichtige Wasserscheide"],
      hu: ["Magassága eléri a 2407 métert", "A kvézál otthona", "Túraútvonalak a köderdőn keresztül", "Fontos vízválasztó"],
      ro: ["Altitudine de până la 2.407 m", "Habitat pentru quetzal", "Trasee de drumeție prin pădurea de ceață", "Bazin hidrografic important"],
      en: ["Altitude up to 2,407 m", "Home to the Quetzal", "Hiking trails through the cloud forest", "Important watershed"]
    }
  },
  {
    id: "karibisches-meer-honduras-nature-v2",
    type: "sea",
    parent: "HN",
    coords: [-85.0, 16.0],
    name: {
      de: "Karibisches Meer (Küste Honduras)",
      hu: "Karib-tenger (Honduras partvidéke)",
      ro: "Marea Caraibilor (Coasta Hondurasului)",
      en: "Caribbean Sea (Honduras Coast)"
    },
    description: {
      de: "Die ausgedehnte Nordküste von Honduras, geprägt von Sandstränden, Lagunen und Korallenriffen.",
      hu: "Honduras kiterjedt északi partvidéke, amelyet homokos strandok, lagúnák és korallzátonyok jellemeznek.",
      ro: "Coasta de nord extinsă a Hondurasului, caracterizată prin plaje cu nisip, lagune și recife de corali.",
      en: "The extensive northern coast of Honduras, characterized by sandy beaches, lagoons, and coral reefs."
    },
    facts: {
      de: ["Teil des Mesoamerikanischen Riffs", "Wichtige Hafenstädte", "Heimat der Garifuna-Kultur", "Tropisches Klima"],
      hu: ["A Mezoamerikai-korallzátony része", "Fontos kikötővárosok", "A garifuna kultúra otthona", "Trópusi éghajlat"],
      ro: ["Parte a Recifului Mezoamerican", "Orașe portuare importante", "Leagănul culturii Garifuna", "Climă tropicală"],
      en: ["Part of the Mesoamerican Reef System", "Important port cities", "Home to the Garifuna culture", "Tropical climate"]
    }
  },
  {
    id: "rio-ulua-nature-v2",
    type: "river",
    parent: "HN-YO",
    coords: [-87.88, 15.89],
    name: {
      de: "Fluss Ulúa",
      hu: "Ulúa-folyó",
      ro: "Râul Ulúa",
      en: "Ulúa River"
    },
    description: {
      de: "Einer der größten und wirtschaftlich wichtigsten Flüsse des Landes.",
      hu: "Az ország egyik legnagyobb és gazdaságilag legfontosabb folyója.",
      ro: "Unul dintre cele mai mari și mai importante râuri din punct de vedere economic ale țării.",
      en: "One of the largest and most economically important rivers in the country."
    },
    facts: {
      de: ["Durchfließt das Sula-Tal", "Wichtig für die Bewässerung", "Historisch wichtige Wasserstraße", "Quelle in den Intibucá-Bergen"],
      hu: ["Átfolyik a Sula-völgyön", "Fontos az öntözéshez", "Történelmileg fontos vízi út", "Forrása az Intibucá-hegységben van"],
      ro: ["Curge prin Valea Sula", "Important pentru irigații", "Cale navigabilă importantă din punct de vedere istoric", "Izvorăște din munții Intibucá"],
      en: ["Flows through the Sula Valley", "Important for irrigation", "Historically important waterway", "Source in the Intibucá mountains"]
    }
  },
  {
    id: "pico-pijol-nature-v2",
    type: "mountain",
    parent: "HN-YO",
    coords: [-87.58, 15.18],
    name: {
      de: "Pico Pijol",
      hu: "Pico Pijol",
      ro: "Vârful Pijol",
      en: "Pico Pijol"
    },
    description: {
      de: "Der höchste Gipfel im Nationalpark Pico Pijol, bekannt für seinen unberührten Nebelwald.",
      hu: "A Pico Pijol Nemzeti Park legmagasabb csúcsa, érintetlen köderdőjéről ismert.",
      ro: "Cel mai înalt vârf din Parcul Național Pico Pijol, cunoscut pentru pădurea sa de ceață virgină.",
      en: "The highest peak in Pico Pijol National Park, known for its pristine cloud forest."
    },
    facts: {
      de: ["Höhe 2.282 Meter", "Schutzgebiet für Vögel", "Sehr hohe Luftfeuchtigkeit", "Steile Wanderwege"],
      hu: ["2282 méter magas", "Madárvédelmi terület", "Nagyon magas páratartalom", "Meredek túraútvonalak"],
      ro: ["Altitudine 2.282 metri", "Arie protejată pentru păsări", "Umiditate foarte ridicată", "Trasee montane abrupte"],
      en: ["Altitude 2,282 meters", "Protected area for birds", "Very high humidity", "Steep hiking trails"]
    }
  },
  {
    id: "laguna-de-los-micos-nature-v2",
    type: "lake",
    parent: "HN-AT",
    coords: [-87.58, 15.83],
    name: {
      de: "Laguna de los Micos",
      hu: "Los Micos lagúna",
      ro: "Laguna Los Micos",
      en: "Los Micos Lagoon"
    },
    description: {
      de: "Eine Küstenlagune in der Nähe von Tela, die ein reiches Ökosystem für Wildtiere bietet.",
      hu: "Part menti lagúna Tela közelében, gazdag ökoszisztémát kínál a vadon élő állatok számára.",
      ro: "O lagună de coastă lângă Tela, care oferă un ecosistem bogat pentru fauna sălbatică.",
      en: "A coastal lagoon near Tela that offers a rich ecosystem for wildlife."
    },
    facts: {
      de: ["Teil des Jeannette-Kawas-Nationalparks", "Heimat von Brüllaffen", "Mangrovenwälder", "Wichtig für die lokale Fischerei"],
      hu: ["A Jeannette Kawas Nemzeti Park része", "Bőgőmajmok otthona", "Mangroveerdők", "Fontos a helyi halászat számára"],
      ro: ["Parte a Parcului Național Jeannette Kawas", "Habitat pentru maimuțe urlătoare", "Păduri de mangrove", "Important pentru pescuitul local"],
      en: ["Part of the Jeannette Kawas National Park", "Home to howler monkeys", "Mangrove forests", "Important for local fishing"]
    }
  },
  {
    id: "isla-barbareta-nature-v2",
    type: "island",
    parent: "HN-IB",
    coords: [-86.13, 16.43],
    name: {
      de: "Insel Barbareta",
      hu: "Barbareta-sziget",
      ro: "Insula Barbareta",
      en: "Barbareta Island"
    },
    description: {
      de: "Eine private Insel östlich von Roatán, die als Naturschutzgebiet erhalten wird.",
      hu: "Roatántól keletre fekvő magánsziget, amelyet természetvédelmi területként tartanak fenn.",
      ro: "O insulă privată la est de Roatán, păstrată ca rezervație naturală.",
      en: "A private island east of Roatán, preserved as a nature reserve."
    },
    facts: {
      de: ["In Privatbesitz", "Dichter Dschungel", "Unberührte Strände", "Teil des Roatán-Riffs"],
      hu: ["Magántulajdonban van", "Sűrű dzsungel", "Érintetlen strandok", "A Roatán-zátony része"],
      ro: ["Proprietate privată", "Junglă deasă", "Plaje virgine", "Parte a recifului Roatán"],
      en: ["Privately owned", "Dense jungle", "Pristine beaches", "Part of the Roatán reef"]
    }
  },
  {
    id: "tawahka-asagni-reservat-nature-v2",
    type: "forest",
    parent: "HN-GD",
    coords: [-85.0, 15.25],
    name: {
      de: "Tawahka Asangni Biosphärenreservat",
      hu: "Tawahka Asangni Bioszféra-rezervátum",
      ro: "Rezervația Biosferei Tawahka Asangni",
      en: "Tawahka Asangni Biosphere Reserve"
    },
    description: {
      de: "Ein Schutzgebiet, das den traditionellen Lebensraum des indigenen Volkes der Tawahka umfasst.",
      hu: "Egy védett terület, amely a tawahka őslakos nép hagyományos élőhelyét foglalja magában.",
      ro: "O arie protejată care cuprinde habitatul tradițional al poporului indigen Tawahka.",
      en: "A protected area that encompasses the traditional habitat of the Tawahka indigenous people."
    },
    facts: {
      de: ["Schutz für indigene Kultur", "Entlang des Patuca-Flusses", "Reiche Biodiversität", "Dichter Regenwald"],
      hu: ["Az őslakos kultúra védelme", "A Patuca folyó mentén", "Gazdag biodiverzitás", "Sűrű esőerdő"],
      ro: ["Protecție pentru cultura indigenă", "De-a lungul râului Patuca", "Biodiversitate bogată", "Pădure tropicală deasă"],
      en: ["Protection for indigenous culture", "Along the Patuca River", "Rich biodiversity", "Dense rainforest"]
    }
  },
  {
    id: "golf-von-fonseca-natur-v2",
    type: "sea",
    parent: "HN-VA",
    coords: [-87.66, 13.25],
    name: {
      de: "Golf von Fonseca",
      hu: "Fonseca-öböl",
      ro: "Golful Fonseca",
      en: "Gulf of Fonseca"
    },
    description: {
      de: "Ein strategisch wichtiger Golf am Pazifik, den sich Honduras mit El Salvador und Nicaragua teilt.",
      hu: "Stratégiailag fontos öböl a Csendes-óceánon, amelyen Honduras El Salvadorral és Nicaraguával osztozik.",
      ro: "Un golf strategic la Pacific, pe care Honduras îl împarte cu El Salvador și Nicaragua.",
      en: "A strategically important gulf on the Pacific, shared by Honduras with El Salvador and Nicaragua."
    },
    facts: {
      de: ["Wird von drei Ländern geteilt", "Vulkanische Inseln", "Wichtige Mangrovenwälder", "Reiche Meeresfauna"],
      hu: ["Három ország osztozik rajta", "Vulkanikus szigetek", "Fontos mangroveerdők", "Gazdag tengeri élővilág"],
      ro: ["Împărțit de trei țări", "Insule vulcanice", "Păduri importante de mangrove", "Faună marină bogată"],
      en: ["Shared by three countries", "Volcanic islands", "Important mangrove forests", "Rich marine fauna"]
    }
  },
  {
    id: "rio-negro-nature-v2",
    type: "river",
    parent: "HN-CH",
    coords: [-87.0, 13.1],
    name: {
      de: "Fluss Negro",
      hu: "Negro-folyó",
      ro: "Râul Negro",
      en: "Negro River"
    },
    description: {
      de: "Ein Fluss im Süden von Honduras, der in den Golf von Fonseca mündet.",
      hu: "Honduras déli részén található folyó, amely a Fonseca-öbölbe ömlik.",
      ro: "Un râu în sudul Hondurasului care se varsă în Golful Fonseca.",
      en: "A river in southern Honduras that flows into the Gulf of Fonseca."
    },
    facts: {
      de: ["Bildet teilweise die Grenze zu Nicaragua", "Wichtiges Einzugsgebiet", "Trockenwald-Vegetation", "Mündet in den Pazifik"],
      hu: ["Részben határt képez Nicaraguával", "Fontos vízgyűjtő terület", "Száraz erdő vegetáció", "A Csendes-óceánba ömlik"],
      ro: ["Formează parțial granița cu Nicaragua", "Bazin hidrografic important", "Vegetație de pădure uscată", "Se varsă în Pacific"],
      en: ["Partially forms the border with Nicaragua", "Important watershed", "Dry forest vegetation", "Flows into the Pacific"]
    }
  },
  {
    id: "montana-verde-nature-v2",
    type: "mountain",
    parent: "HN-SB",
    coords: [-88.5, 14.88],
    name: {
      de: "Montaña Verde",
      hu: "Montaña Verde",
      ro: "Muntele Verde",
      en: "Montaña Verde"
    },
    description: {
      de: "Ein Berg mit reicher Vegetation und Nebelwald in der Nähe des Yojoa-Sees.",
      hu: "Gazdag növényzetű, köderdős hegy a Yojoa-tó közelében.",
      ro: "Un munte cu vegetație bogată și pădure de ceață în apropierea Lacului Yojoa.",
      en: "A mountain with rich vegetation and cloud forest near Lake Yojoa."
    },
    facts: {
      de: ["Teil des Nationalparks Santa Bárbara", "Wichtiger Lebensraum für Vögel", "Kühles Klima", "Hohe Niederschlagsmengen"],
      hu: ["A Santa Bárbara Nemzeti Park része", "Fontos madárélőhely", "Hűvös éghajlat", "Magas csapadékmennyiség"],
      ro: ["Parte a Parcului Național Santa Bárbara", "Habitat important pentru păsări", "Climă răcoroasă", "Precipitații abundente"],
      en: ["Part of Santa Bárbara National Park", "Important habitat for birds", "Cool climate", "High rainfall"]
    }
  },
    {
    id: "laguna-de-alvarado-nature-v2",
    type: "lake",
    parent: "HN-CR",
    coords: [-88.07, 15.78],
    name: {
      de: "Laguna de Alvarado",
      hu: "Alvarado-lagúna",
      ro: "Laguna Alvarado",
      en: "Alvarado Lagoon"
    },
    description: {
      de: "Eine Küstenlagune, die die Stadt Puerto Cortés umgibt und mit der Karibik verbunden ist.",
      hu: "Part menti lagúna, amely Puerto Cortés városát veszi körül, és összeköttetésben áll a Karib-tengerrel.",
      ro: "O lagună de coastă care înconjoară orașul Puerto Cortés și este conectată la Marea Caraibilor.",
      en: "A coastal lagoon that surrounds the city of Puerto Cortés and is connected to the Caribbean."
    },
    facts: {
      de: ["Umspült Puerto Cortés", "Wichtiges Mangroven-Ökosystem", "Historische Brücke überquert sie", "Lebensraum für viele Fischarten"],
      hu: ["Körülveszi Puerto Cortést", "Fontos mangrové-ökoszisztéma", "Történelmi híd ível át rajta", "Sok halfaj élőhelye"],
      ro: ["Înconjoară Puerto Cortés", "Ecosistem important de mangrove", "Traversată de un pod istoric", "Habitat pentru multe specii de pești"],
      en: ["Surrounds Puerto Cortés", "Important mangrove ecosystem", "Crossed by a historic bridge", "Habitat for many fish species"]
    }
  },
  {
    id: "isla-zacate-grande-nature-v2",
    type: "island",
    parent: "HN-VA",
    coords: [-87.63, 13.33],
    name: {
      de: "Isla Zacate Grande",
      hu: "Zacate Grande-sziget",
      ro: "Insula Zacate Grande",
      en: "Zacate Grande Island"
    },
    description: {
      de: "Eine große, vulkanische Insel im Golf von Fonseca, die durch eine Brücke mit dem Festland verbunden ist.",
      hu: "Nagy, vulkanikus sziget a Fonseca-öbölben, amelyet híd köt össze a szárazfölddel.",
      ro: "O insulă vulcanică mare în Golful Fonseca, conectată la continent printr-un pod.",
      en: "A large volcanic island in the Gulf of Fonseca, connected to the mainland by a bridge."
    },
    facts: {
      de: ["Schichtvulkan", "Beliebte Strände", "Mit dem Festland verbunden", "Höchster Punkt ca. 640 m"],
      hu: ["R стратовулкán", "Népszerű strandok", "Híd köti össze a szárazfölddel", "Legmagasabb pontja kb. 640 m"],
      ro: ["Stratovulcan", "Plaje populare", "Conectată la continent", "Cel mai înalt punct aprox. 640 m"],
      en: ["Stratovolcano", "Popular beaches", "Connected to the mainland", "Highest point approx. 640 m"]
    }
  },
  {
    id: "la-muralla-nationalpark-nature-v2",
    type: "forest",
    parent: "HN-OL",
    coords: [-86.77, 15.08],
    name: {
      de: "La Muralla Nationalpark",
      hu: "La Muralla Nemzeti Park",
      ro: "Parcul Național La Muralla",
      en: "La Muralla National Park"
    },
    description: {
      de: "Ein Schutzgebiet im Departement Olancho, bekannt für seine Nebelwälder und reiche Tierwelt.",
      hu: "Védett terület Olancho megyében, köderdőiről és gazdag állatvilágáról ismert.",
      ro: "O arie protejată în departamentul Olancho, cunoscută pentru pădurile sale de ceață și fauna bogată.",
      en: "A protected area in the Olancho department, known for its cloud forests and rich wildlife."
    },
    facts: {
      de: ["Heimat des Quetzals", "Dichter Nebelwald", "Höhe bis 2.064 m", "Wichtige Wasserquelle für die Region"],
      hu: ["A kvézál otthona", "Sűrű köderdő", "Magassága eléri a 2064 métert", "Fontos vízforrás a régió számára"],
      ro: ["Habitat pentru quetzal", "Pădure de ceață deasă", "Altitudine de până la 2.064 m", "Sursă importantă de apă pentru regiune"],
      en: ["Home of the Quetzal", "Dense cloud forest", "Altitude up to 2,064 m", "Important water source for the region"]
    }
  },
  {
    id: "rio-goascoran-nature-v2",
    type: "river",
    parent: "HN-VA",
    coords: [-87.75, 13.48],
    name: {
      de: "Fluss Goascorán",
      hu: "Goascorán-folyó",
      ro: "Râul Goascorán",
      en: "Goascorán River"
    },
    description: {
      de: "Ein Fluss, der einen großen Teil der Grenze zwischen Honduras und El Salvador bildet.",
      hu: "Egy folyó, amely a Honduras és El Salvador közötti határ nagy részét képezi.",
      ro: "Un râu care formează o mare parte a graniței dintre Honduras și El Salvador.",
      en: "A river that forms a large part of the border between Honduras and El Salvador."
    },
    facts: {
      de: ["Grenzfluss zu El Salvador", "Mündet in den Golf von Fonseca", "Länge ca. 130 km", "Wichtiges Einzugsgebiet"],
      hu: ["Határfolyó El Salvadorral", "A Fonseca-öbölbe ömlik", "Hossza kb. 130 km", "Fontos vízgyűjtő terület"],
      ro: ["Râu de graniță cu El Salvador", "Se varsă în Golful Fonseca", "Lungime aprox. 130 km", "Bazin hidrografic important"],
      en: ["Border river with El Salvador", "Flows into the Gulf of Fonseca", "Length approx. 130 km", "Important watershed"]
    }
  },
  {
    id: "cerro-el-pital-nature-v2",
    type: "mountain",
    parent: "HN-OC",
    coords: [-89.12, 14.38],
    name: {
      de: "Cerro El Pital",
      hu: "Cerro El Pital",
      ro: "Vârful El Pital",
      en: "Cerro El Pital"
    },
    description: {
      de: "Ein Berg an der Grenze zu El Salvador, dessen Gipfel der höchste Punkt in El Salvador ist.",
      hu: "Hegy az El Salvador-i határon, amelynek csúcsa El Salvador legmagasabb pontja.",
      ro: "Un munte la granița cu El Salvador, al cărui vârf este cel mai înalt punct din El Salvador.",
      en: "A mountain on the border with El Salvador, whose summit is the highest point in El Salvador."
    },
    facts: {
      de: ["Teilt sich die Grenze mit El Salvador", "Höhe 2.730 m", "Kaltes Klima", "Nebelwald und Pinien"],
      hu: ["A határon osztozik El Salvadorral", "2730 m magas", "Hideg éghajlat", "Köderdő és fenyvesek"],
      ro: ["Împarte granița cu El Salvador", "Altitudine 2.730 m", "Climă rece", "Pădure de ceață și pini"],
      en: ["Shared border with El Salvador", "Altitude of 2,730 m", "Cold climate", "Cloud forest and pine trees"]
    }
  },
  {
    id: "isla-el-tigre-nature-v2",
    type: "island",
    parent: "HN-VA",
    coords: [-87.63, 13.26],
    name: {
      de: "Isla El Tigre",
      hu: "El Tigre-sziget",
      ro: "Insula El Tigre",
      en: "El Tigre Island"
    },
    description: {
      de: "Eine kleine, konische Vulkaninsel im Golf von Fonseca, auf der sich der Hafen von Amapala befindet.",
      hu: "Kis, kúp alakú vulkanikus sziget a Fonseca-öbölben, amelyen Amapala kikötője található.",
      ro: "O mică insulă vulcanică conică în Golful Fonseca, unde se află portul Amapala.",
      en: "A small, conical volcanic island in the Gulf of Fonseca, home to the port of Amapala."
    },
    facts: {
      de: ["Schichtvulkan", "Historischer Hafen", "Wanderweg zum Gipfel", "Panoramablick auf den Golf"],
      hu: ["R стратовулкán", "Történelmi kikötő", "Túraútvonal a csúcsra", "Panorámás kilátás az öbölre"],
      ro: ["Stratovulcan", "Port istoric", "Traseu de drumeție spre vârf", "Vedere panoramică asupra golfului"],
      en: ["Stratovolcano", "Historic port", "Hiking trail to the summit", "Panoramic view of the gulf"]
    }
  },
  {
    id: "aguacatal-waldreservat-nature-v2",
    type: "forest",
    parent: "HN-EP",
    coords: [-86.25, 14.1],
    name: {
      de: "Aguacatal Waldreservat",
      hu: "Aguacatal Erdőrezervátum",
      ro: "Rezervația forestieră Aguacatal",
      en: "Aguacatal Forest Reserve"
    },
    description: {
      de: "Ein Schutzgebiet mit tropischem Trockenwald in der Nähe der nicaraguanischen Grenze.",
      hu: "Védett terület trópusi száraz erdővel a nicaraguai határ közelében.",
      ro: "O arie protejată cu pădure uscată tropicală lângă granița cu Nicaragua.",
      en: "A protected area with tropical dry forest near the Nicaraguan border."
    },
    facts: {
      de: ["Tropischer Trockenwald", "Wichtiger Korridor für Wildtiere", "Bedrohte Baumarten", "Nahe der Grenze zu Nicaragua"],
      hu: ["Trópusi száraz erdő", "Fontos folyosó a vadon élő állatok számára", "Veszélyeztetett fafajok", "Közel a nicaraguai határhoz"],
      ro: ["Pădure uscată tropicală", "Coridor important pentru fauna sălbatică", "Specii de copaci amenințate", "Aproape de granița cu Nicaragua"],
      en: ["Tropical dry forest", "Important wildlife corridor", "Threatened tree species", "Near the Nicaraguan border"]
    }
  },
  {
    id: "rio-sico-tinto-nature-v2",
    type: "river",
    parent: "HN-CL",
    coords: [-84.98, 15.97],
    name: {
      de: "Fluss Sico Tinto",
      hu: "Sico Tinto folyó",
      ro: "Râul Sico Tinto",
      en: "Sico Tinto River"
    },
    description: {
      de: "Ein Fluss in La Mosquitia, der durch dichten Regenwald fließt und in die Karibik mündet.",
      hu: "Folyó La Mosquitia régióban, amely sűrű esőerdőn halad át, és a Karib-tengerbe ömlik.",
      ro: "Un râu în La Mosquitia care curge prin pădurea tropicală deasă și se varsă în Marea Caraibilor.",
      en: "A river in La Mosquitia that flows through dense rainforest and into the Caribbean Sea."
    },
    facts: {
      de: ["Auch als Río Negro bekannt", "Durchquert La Mosquitia", "Wichtige Wasserstraße für lokale Gemeinschaften", "Hohe Artenvielfalt"],
      hu: ["Río Negro néven is ismert", "Átszeli La Mosquitiát", "Fontos vízi út a helyi közösségek számára", "Nagy fajgazdagság"],
      ro: ["Cunoscut și ca Río Negro", "Traversează La Mosquitia", "Cale navigabilă importantă pentru comunitățile locale", "Biodiversitate ridicată"],
      en: ["Also known as Río Negro", "Crosses La Mosquitia", "Important waterway for local communities", "High biodiversity"]
    }
  },
  {
    id: "montana-de-la-sierra-nature-v2",
    type: "mountain",
    parent: "HN-YO",
    coords: [-87.2, 15.0],
    name: {
      de: "Montaña de La Sierra",
      hu: "Montaña de La Sierra",
      ro: "Muntele La Sierra",
      en: "Montaña de La Sierra"
    },
    description: {
      de: "Ein Bergmassiv im Departement Yoro, das Teil der größeren Sierra de Sulaco ist.",
      hu: "Hegymasszívum Yoro megyében, amely a nagyobb Sierra de Sulaco része.",
      ro: "Un masiv muntos în departamentul Yoro, care face parte din Sierra de Sulaco mai mare.",
      en: "A mountain massif in the Yoro department, part of the larger Sierra de Sulaco."
    },
    facts: {
      de: ["Teil der Sierra de Sulaco", "Nebelwald in den Höhenlagen", "Wichtige Quelle für Flüsse", "Abgelegene Region"],
      hu: ["A Sierra de Sulaco része", "Köderdő a magasabb részeken", "Fontos folyóforrás", "Távoli régió"],
      ro: ["Parte a Sierra de Sulaco", "Pădure de ceață la altitudini mari", "Sursă importantă pentru râuri", "Regiune izolată"],
      en: ["Part of the Sierra de Sulaco", "Cloud forest at high altitudes", "Important source for rivers", "Remote region"]
    }
  },
  {
    id: "islas-de-la-bahia-riff-nature-v2",
    type: "sea",
    parent: "HN-IB",
    coords: [-86.5, 16.3],
    name: {
      de: "Riffsystem der Bay Islands",
      hu: "Öböl-szigetek zátonyrendszere",
      ro: "Sistemul de recife al Insulelor Golfului",
      en: "Bay Islands Reef System"
    },
    description: {
      de: "Das Korallenriff, das die Inseln Roatán, Utila und Guanaja umgibt und Teil des Mesoamerikanischen Riffs ist.",
      hu: "A korallzátony, amely Roatán, Utila és Guanaja szigeteket veszi körül, és a Mezoamerikai Korallzátony része.",
      ro: "Reciful de corali care înconjoară insulele Roatán, Utila și Guanaja și face parte din Reciful Mezoamerican.",
      en: "The coral reef surrounding the islands of Roatán, Utila, and Guanaja, part of the Mesoamerican Reef."
    },
    facts: {
      de: ["Zweitgrößtes Barriereriff der Welt", "Hohe marine Biodiversität", "Weltklasse-Tauchgebiet", "Wichtig für den Tourismus"],
      hu: ["A világ második legnagyobb korallzátonya", "Magas tengeri biodiverzitás", "Világszínvonalú búvárterület", "Fontos a turizmus szempontjából"],
      ro: ["A doua cea mai mare barieră de corali din lume", "Biodiversitate marină ridicată", "Zonă de scufundări de clasă mondială", "Important pentru turism"],
      en: ["Second largest barrier reef in the world", "High marine biodiversity", "World-class diving area", "Important for tourism"]
    }
  },
  {
    id: "punta-sal-nationalpark-nature-v2",
    type: "forest",
    parent: "HN-AT",
    coords: [-87.62, 15.92],
    name: {
      de: "Jeannette Kawas Nationalpark (Punta Sal)",
      hu: "Jeannette Kawas Nemzeti Park (Punta Sal)",
      ro: "Parcul Național Jeannette Kawas (Punta Sal)",
      en: "Jeannette Kawas National Park (Punta Sal)"
    },
    description: {
      de: "Ein Küstennationalpark mit Stränden, Dschungel, Mangroven und einer reichen Tierwelt.",
      hu: "Part menti nemzeti park strandokkal, dzsungellel, mangrovéval és gazdag állatvilággal.",
      ro: "Un parc național de coastă cu plaje, junglă, mangrove și o faună bogată.",
      en: "A coastal national park with beaches, jungle, mangroves, and a rich wildlife."
    },
    facts: {
      de: ["Früher Punta Sal genannt", "Schützt Küsten- und Meeresökosysteme", "Heimat von Brüll- und Weißkopfaffen", "Felsige Halbinsel"],
      hu: ["Korábban Punta Sal-nak hívták", "Védett tengerparti és tengeri ökoszisztémák", "Bőgő- és fehérfejű majmok otthona", "Sziklás félsziget"],
      ro: ["Numit anterior Punta Sal", "Protejează ecosistemele de coastă și marine", "Habitat pentru maimuțe urlătoare și capucin", "Peninsulă stâncoasă"],
      en: ["Formerly named Punta Sal", "Protects coastal and marine ecosystems", "Home to howler and capuchin monkeys", "Rocky peninsula"]
    }
  },
  {
    id: "rio-lempa-oberlauf-nature-v2",
    type: "river",
    parent: "HN-OC",
    coords: [-89.0, 14.5],
    name: {
      de: "Oberlauf des Río Lempa",
      hu: "Lempa-folyó felső szakasza",
      ro: "Cursul superior al râului Lempa",
      en: "Upper Lempa River"
    },
    description: {
      de: "Der Ursprung des längsten Flusses Zentralamerikas, der in den Bergen von Honduras entspringt.",
      hu: "Közép-Amerika leghosszabb folyójának eredete, amely Honduras hegyeiben fakad.",
      ro: "Originea celui mai lung râu din America Centrală, care izvorăște din munții Hondurasului.",
      en: "The origin of Central America's longest river, which rises in the mountains of Honduras."
    },
    facts: {
      de: ["Quelle in Honduras", "Fließt durch drei Länder", "Wichtige Wasserquelle für El Salvador", "Bergiges Quellgebiet"],
      hu: ["Forrása Hondurasban van", "Három országon folyik keresztül", "Fontos vízforrás El Salvador számára", "Hegyvidéki forrásterület"],
      ro: ["Izvorăște în Honduras", "Curge prin trei țări", "Sursă importantă de apă pentru El Salvador", "Zonă montană de izvor"],
      en: ["Source in Honduras", "Flows through three countries", "Important water source for El Salvador", "Mountainous source area"]
    }
  },
  {
    id: "el-carbon-berg-nature-v2",
    type: "mountain",
    parent: "HN-OL",
    coords: [-85.7, 15.5],
    name: {
      de: "Cerro El Carbón",
      hu: "Cerro El Carbón",
      ro: "Vârful El Carbón",
      en: "Cerro El Carbón"
    },
    description: {
      de: "Ein Berg im Biosphärenreservat Río Plátano, der für seine reiche und oft unberührte Natur bekannt ist.",
      hu: "Hegy a Río Plátano Bioszféra-rezervátumban, amely gazdag és gyakran érintetlen természetéről ismert.",
      ro: "Un munte în Rezervația Biosferei Río Plátano, cunoscut pentru natura sa bogată și adesea neatinsă.",
      en: "A mountain in the Río Plátano Biosphere Reserve, known for its rich and often untouched nature."
    },
    facts: {
      de: ["Teil des Río Plátano Reservats", "Schwer zugänglich", "Hohe Biodiversität", "Dichter tropischer Regenwald"],
      hu: ["A Río Plátano Rezervátum része", "Nehezen megközelíthető", "Magas biodiverzitás", "Sűrű trópusi esőerdő"],
      ro: ["Parte a Rezervației Río Plátano", "Greu accesibil", "Biodiversitate ridicată", "Pădure tropicală deasă"],
      en: ["Part of the Río Plátano Reserve", "Difficult to access", "High biodiversity", "Dense tropical rainforest"]
    }
  },
  {
    id: "laguna-cuchilla-nature-v2",
    type: "lake",
    parent: "HN-AT",
    coords: [-87.2, 15.9],
    name: {
      de: "Laguna Cuchilla",
      hu: "Cuchilla-lagúna",
      ro: "Laguna Cuchilla",
      en: "Cuchilla Lagoon"
    },
    description: {
      de: "Eine Süßwasserlagune, die Teil des Cuero y Salado Wildschutzgebiets ist.",
      hu: "Édesvízi lagúna, amely a Cuero y Salado Vadvédelmi Terület része.",
      ro: "O lagună de apă dulce care face parte din Refugiul Sălbatic Cuero y Salado.",
      en: "A freshwater lagoon that is part of the Cuero y Salado Wildlife Refuge."
    },
    facts: {
      de: ["Teil des Cuero y Salado Schutzgebiets", "Lebensraum für Seekühe", "Umgeben von Mangroven", "Wichtig für Vögel"],
      hu: ["A Cuero y Salado Vadvédelmi Terület része", "Lamantinok élőhelye", "Mangrovéval körülvéve", "Fontos a madarak számára"],
      ro: ["Parte a Refugiului Cuero y Salado", "Habitat pentru lamantini", "Înconjurată de mangrove", "Importantă pentru păsări"],
      en: ["Part of the Cuero y Salado Wildlife Refuge", "Habitat for manatees", "Surrounded by mangroves", "Important for birds"]
    }
  },
  {
    id: "cuero-y-salado-wald-nature-v2",
    type: "forest",
    parent: "HN-AT",
    coords: [-87.1, 15.78],
    name: {
      de: "Cuero y Salado Wildschutzgebiet",
      hu: "Cuero y Salado Vadvédelmi Terület",
      ro: "Refugiul Sălbatic Cuero y Salado",
      en: "Cuero y Salado Wildlife Refuge"
    },
    description: {
      de: "Ein Schutzgebiet aus Mangrovenwäldern und Feuchtgebieten an der Karibikküste.",
      hu: "Mangroveerdőkből és vizes élőhelyekből álló védett terület a Karib-tenger partján.",
      ro: "O arie protejată formată din păduri de mangrove și zone umede pe coasta Caraibelor.",
      en: "A protected area of mangrove forests and wetlands on the Caribbean coast."
    },
    facts: {
      de: ["Schutzgebiet für Seekühe", "Mündung der Flüsse Cuero und Salado", "Reiche Vogelwelt", "Erreichbar mit einer alten Eisenbahn"],
      hu: ["Lamantinok védett területe", "A Cuero és Salado folyók torkolata", "Gazdag madárvilág", "Egy régi vasúttal érhető el"],
      ro: ["Arie protejată pentru lamantini", "Estuarul râurilor Cuero și Salado", "Avifaună bogată", "Accesibil cu un tren vechi"],
      en: ["Protected area for manatees", "Estuary of the Cuero and Salado rivers", "Rich birdlife", "Accessible by an old railway"]
    }
  }
];
