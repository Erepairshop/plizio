
import type { POI } from "./poi";

export const poiExtraPortugalCities: POI[] = [
  {
    id: "city-cascais-extra",
    type: "city",
    parent: "PT-11",
    coords: [-9.4214, 38.6979],
    name: { de: "Cascais", hu: "Cascais", ro: "Cascais", en: "Cascais" },
    description: {
      de: "Ein charmantes Fischerdorf, das zu einem beliebten Ferienort an der Küste von Lissabon wurde, bekannt für seine Strände und seinen lebhaften Jachthafen.",
      hu: "Egy bájos halászfalu, amely népszerű üdülőhellyé vált a Lisszaboni partvidéken, ismert strandjairól és nyüzsgő kikötőjéről.",
      ro: "Un sat pescăresc fermecător devenit o stațiune populară pe coasta Lisabonei, renumit pentru plajele și portul său de agrement animat.",
      en: "A charming fishing town that became a popular resort on the Lisbon coast, known for its beaches and lively marina."
    },
    facts: {
      de: ["Einst ein ruhiges Fischerdorf.", "Veranstaltet internationale Segelevents.", "Heimat des Leuchtturms von Santa Marta."],
      hu: ["Valaha csendes halászfalu volt.", "Nemzetközi vitorlásversenyek helyszíne.", "A Santa Marta világítótorony otthona."],
      ro: ["Odinioară un sat pescăresc liniștit.", "Găzduiește evenimente internaționale de navigație.", "Acasă la Farul Santa Marta."],
      en: ["Once a quiet fishing village.", "Hosts international sailing events.", "Home to the Santa Marta Lighthouse."]
    }
  },
  {
    id: "city-guimaraes-extra",
    type: "city",
    parent: "PT-03",
    coords: [-8.2917, 41.4415],
    name: { de: "Guimarães", hu: "Guimarães", ro: "Guimarães", en: "Guimarães" },
    description: {
      de: "Gilt als Geburtsort Portugals, sein historisches Zentrum ist UNESCO-Weltkulturerbe.",
      hu: "Portugália szülőhelyének tartják, történelmi központja az UNESCO Világörökség része.",
      ro: "Considerat locul de naștere al Portugaliei, centrul său istoric este un sit al Patrimoniului Mondial UNESCO.",
      en: "Considered the birthplace of Portugal, its historic town centre is a UNESCO World Heritage site."
    },
    facts: {
      de: ["Erster König von Portugal wurde hier geboren.", "Bekannt für seine gut erhaltene mittelalterliche Architektur.", "Europäische Kulturhauptstadt 2012."],
      hu: ["Itt született Portugália első királya.", "Jól megőrzött középkori építészetéről ismert.", "Európa Kulturális Fővárosa 2012-ben."],
      ro: ["Primul rege al Portugaliei s-a născut aici.", "Cunoscut pentru arhitectura sa medievală bine conservată.", "Capitală Europeană a Culturii în 2012."],
      en: ["First king of Portugal was born here.", "Known for its well-preserved medieval architecture.", "European Capital of Culture in 2012."]
    }
  },
  {
    id: "city-coimbra-extra",
    type: "city",
    parent: "PT-06",
    coords: [-8.4293, 40.2112],
    name: { de: "Coimbra", hu: "Coimbra", ro: "Coimbra", en: "Coimbra" },
    description: {
      de: "Eine Stadt am Flussufer in Zentralportugal und ehemalige Hauptstadt des Landes, Heimat einer der ältesten Universitäten Europas.",
      hu: "Folyóparti város Közép-Portugáliában, az ország egykori fővárosa, Európa egyik legrégebbi egyetemének otthona.",
      ro: "Un oraș riveran în centrul Portugaliei și fosta capitală a țării, care găzduiește una dintre cele mai vechi universități din Europa.",
      en: "A riverfront city in central Portugal and the country's former capital, home to one of Europe's oldest universities."
    },
    facts: {
      de: ["Die Universität Coimbra wurde 1290 gegründet.", "Berühmt für ihre Bibliothek, die Biblioteca Joanina.", "Fado-Musik hat hier eine einzigartige Tradition."],
      hu: ["A Coimbrai Egyetemet 1290-ben alapították.", "Híres könyvtáráról, a Biblioteca Joanináról.", "A fado zenének itt egyedi hagyománya van."],
      ro: ["Universitatea din Coimbra a fost fondată în 1290.", "Renumită pentru biblioteca sa, Biblioteca Joanina.", "Muzica Fado are o tradiție unică aici."],
      en: ["The University of Coimbra was founded in 1290.", "Famous for its library, the Biblioteca Joanina.", "Fado music has a unique tradition here."]
    }
  },
  {
    id: "city-braga-extra",
    type: "city",
    parent: "PT-03",
    coords: [-8.4202, 41.5503],
    name: { de: "Braga", hu: "Braga", ro: "Braga", en: "Braga" },
    description: {
      de: "Bekannt als das religiöse Zentrum Portugals, mit der ältesten Kathedrale des Landes.",
      hu: "Portugália vallási központjaként ismert, itt található az ország legrégebbi katedrálisa.",
      ro: "Cunoscut ca centrul religios al Portugaliei, cu cea mai veche catedrală din țară.",
      en: "Known as the religious center of Portugal, with the country's oldest cathedral."
    },
    facts: {
      de: ["Eine der ältesten Städte Portugals.", "Heimat des Heiligtums Bom Jesus do Monte.", "Jugendliche Bevölkerung aufgrund der Universität."],
      hu: ["Portugália egyik legrégebbi városa.", "A Bom Jesus do Monte szentély otthona.", "Fiatalos lakosság az egyetem miatt."],
      ro: ["Unul dintre cele mai vechi orașe din Portugalia.", "Acasă la Sanctuarul Bom Jesus do Monte.", "Populație tânără datorită universității."],
      en: ["One of Portugal's oldest cities.", "Home to the Bom Jesus do Monte sanctuary.", "Youthful population due to its university."]
    }
  },
  {
    id: "city-aveiro-extra",
    type: "city",
    parent: "PT-01",
    coords: [-8.6538, 40.6443],
    name: { de: "Aveiro", hu: "Aveiro", ro: "Aveiro", en: "Aveiro" },
    description: {
      de: "Wird oft als 'das portugiesische Venedig' bezeichnet, wegen seiner malerischen Kanäle, Brücken und bunten Moliceiro-Boote.",
      hu: "Gyakran 'a portugál Velencének' is nevezik festői csatornái, hídjai és színes moliceiro csónakjai miatt.",
      ro: "Adesea numit 'Veneția portugheză' datorită canalelor sale pitorești, podurilor și bărcilor colorate moliceiro.",
      en: "Often called 'the Portuguese Venice' due to its scenic canals, bridges, and colorful moliceiro boats."
    },
    facts: {
      de: ["Berühmt für seine Jugendstil-Architektur.", "Die Moliceiros wurden ursprünglich zur Ernte von Seetang verwendet.", "Produziert eine süße Eier-Delikatesse namens Ovos Moles."],
      hu: ["Híres szecessziós építészetéről.", "A moliceirokat eredetileg hínár betakarítására használták.", "Készít egy édes tojásos finomságot, az Ovos Molest."],
      ro: ["Faimos pentru arhitectura sa Art Nouveau.", "Moliceiros erau folosite inițial pentru recoltarea algelor marine.", "Produce o delicatesă dulce din ouă numită Ovos Moles."],
      en: ["Famous for its Art Nouveau architecture.", "The moliceiros were originally used for harvesting seaweed.", "Produces a sweet egg delicacy called Ovos Moles."]
    }
  },
  {
    id: "city-faro-extra",
    type: "city",
    parent: "PT-08",
    coords: [-7.9304, 37.0194],
    name: { de: "Faro", hu: "Faro", ro: "Faro", en: "Faro" },
    description: {
      de: "Die Hauptstadt der Algarve-Region, mit einer charmanten Altstadt, umgeben von mittelalterlichen Mauern.",
      hu: "Az Algarve régió fővárosa, egy bájos óvárossal, amelyet középkori falak vesznek körül.",
      ro: "Capitala regiunii Algarve, cu un oraș vechi fermecător înconjurat de ziduri medievale.",
      en: "The capital of the Algarve region, featuring a charming old town encircled by medieval walls."
    },
    facts: {
      de: ["Tor zum Naturpark Ria Formosa.", "Hat einen internationalen Flughafen, der die Algarve bedient.", "Die Knochenkapelle (Capela dos Ossos) ist eine unheimliche Attraktion."],
      hu: ["A Ria Formosa Természeti Park kapuja.", "Nemzetközi repülőtérrel rendelkezik, amely az Algarve-t szolgálja ki.", "A Csontok Kápolnája (Capela dos Ossos) egy hátborzongató látványosság."],
      ro: ["Poarta de acces către Parcul Natural Ria Formosa.", "Are un aeroport internațional care deservește Algarve.", "Capela Oaselor (Capela dos Ossos) este o atracție macabră."],
      en: ["Gateway to the Ria Formosa Natural Park.", "Has an international airport serving the Algarve.", "The Chapel of Bones (Capela dos Ossos) is an eerie attraction."]
    }
  },
  {
    id: "city-evora-extra",
    type: "city",
    parent: "PT-07",
    coords: [-7.9079, 38.5714],
    name: { de: "Évora", hu: "Évora", ro: "Évora", en: "Évora" },
    description: {
      de: "Eine Museumsstadt mit Wurzeln in der Römerzeit, deren historisches Zentrum zum UNESCO-Weltkulturerbe gehört.",
      hu: "Egy múzeumváros, amelynek gyökerei a római időkig nyúlnak vissza, történelmi központja az UNESCO Világörökség része.",
      ro: "Un oraș-muzeu cu rădăcini în timpurile romane, al cărui centru istoric este un sit al Patrimoniului Mondial UNESCO.",
      en: "A museum-city with roots in Roman times, its historic centre is a UNESCO World Heritage site."
    },
    facts: {
      de: ["Heimat des römischen Tempels von Évora.", "Besitzt eine makabre Knochenkapelle.", "Zentrum der Alentejo-Region."],
      hu: ["Az Évorai római templom otthona.", "Rendelkezik egy hátborzongató Csontok Kápolnájával.", "Az Alentejo régió központja."],
      ro: ["Acasă la Templul Roman din Évora.", "Prezintă o capelă macabră a oaselor.", "Centrul regiunii Alentejo."],
      en: ["Home to the Roman Temple of Évora.", "Features a macabre Chapel of Bones.", "Center of the Alentejo region."]
    }
  },
  {
    id: "city-viana-do-castelo-extra",
    type: "city",
    parent: "PT-16",
    coords: [-8.8329, 41.6932],
    name: { de: "Viana do Castelo", hu: "Viana do Castelo", ro: "Viana do Castelo", en: "Viana do Castelo" },
    description: {
      de: "Eine historische Stadt an der Mündung des Flusses Lima, bekannt für ihre traditionellen Feste und Handwerkskunst.",
      hu: "Történelmi város a Lima folyó torkolatánál, híres hagyományos fesztiváljairól és kézművességéről.",
      ro: "Un oraș istoric la gura râului Lima, cunoscut pentru festivalurile și meșteșugurile sale tradiționale.",
      en: "A historic city at the mouth of the Lima River, known for its traditional festivals and handicrafts."
    },
    facts: {
      de: ["Berühmt für die Romaria de Nossa Senhora da Agonia.", "Das Heiligtum Santa Luzia überblickt die Stadt.", "Ein Zentrum für Filigran-Goldschmiedekunst."],
      hu: ["Híres a Romaria de Nossa Senhora da Agonia fesztiválról.", "A Santa Luzia szentély néz a városra.", "A filigrán aranyművesség központja."],
      ro: ["Faimos pentru Romaria de Nossa Senhora da Agonia.", "Sanctuarul Santa Luzia domină orașul.", "Un centru pentru bijuterii filigranate din aur."],
      en: ["Famous for the Romaria de Nossa Senhora da Agonia festival.", "The Santa Luzia Sanctuary overlooks the city.", "A center for filigree gold jewelry."]
    }
  },
  {
    id: "city-setubal-extra",
    type: "city",
    parent: "PT-15",
    coords: [-8.8926, 38.5244],
    name: { de: "Setúbal", hu: "Setúbal", ro: "Setúbal", en: "Setubal" },
    description: {
      de: "Eine große Hafenstadt und Handelszentrum, bekannt für ihre Sardinenfischerei und den Süßwein Moscatel.",
      hu: "Nagy kikötőváros és kereskedelmi központ, híres a szardíniahalászatáról és a Moscatel édesborról.",
      ro: "Un oraș portuar major și centru comercial, renumit pentru pescuitul de sardine și vinul dulce Moscatel.",
      en: "A major port city and commercial center, renowned for its sardine fishing and Moscatel sweet wine."
    },
    facts: {
      de: ["Wichtiger Hafen für die portugiesische Wirtschaft.", "Nahe dem Naturpark Arrábida.", "Heimat einer Population von Großen Tümmlern in der Sado-Mündung."],
      hu: ["Fontos kikötő a portugál gazdaság számára.", "Az Arrábida Természeti Park közelében található.", "A Sado torkolatában egy palackorrú delfin populáció él."],
      ro: ["Port important pentru economia portugheză.", "Aproape de Parcul Natural Arrábida.", "Acasă la o populație de delfini în estuarul Sado."],
      en: ["Important port for the Portuguese economy.", "Close to the Arrábida Natural Park.", "Home to a pod of bottlenose dolphins in the Sado Estuary."]
    }
  },
  {
    id: "city-leiria-extra",
    type: "city",
    parent: "PT-10",
    coords: [-8.8071, 39.7439],
    name: { de: "Leiria", hu: "Leiria", ro: "Leiria", en: "Leiria" },
    description: {
      de: "Eine Stadt, die von einer beeindruckenden mittelalterlichen Burg dominiert wird, gelegen zwischen Lissabon und Porto.",
      hu: "Egy lenyűgöző középkori vár által uralt város, amely Lisszabon és Porto között helyezkedik el.",
      ro: "Un oraș dominat de un castel medieval impresionant, situat între Lisabona și Porto.",
      en: "A city dominated by an impressive medieval castle, located between Lisbon and Porto."
    },
    facts: {
      de: ["Die Burg von Leiria bietet einen Panoramablick.", "In der Nähe des Pinienwaldes von Leiria, der im 14. Jahrhundert angelegt wurde.", "Ein wachsendes Zentrum für Technologie und Dienstleistungen."],
      hu: ["A Leiriai várból panorámás kilátás nyílik.", "A 14. században telepített Leiriai fenyőerdő közelében.", "A technológia és a szolgáltatások növekvő központja."],
      ro: ["Castelul din Leiria oferă vederi panoramice.", "Aproape de Pădurea de Pini din Leiria, plantată în secolul al XIV-lea.", "Un centru în creștere pentru tehnologie și servicii."],
      en: ["Leiria Castle offers panoramic views.", "Near the Leiria Pine Forest, planted in the 14th century.", "A growing center for technology and services."]
    }
  },
  {
    id: "city-portimao-extra",
    type: "city",
    parent: "PT-08",
    coords: [-8.537, 37.138],
    name: { de: "Portimão", hu: "Portimão", ro: "Portimão", en: "Portimão" },
    description: {
      de: "Eine geschäftige Hafenstadt an der Algarve, bekannt für ihre ausgezeichneten gegrillten Sardinen und den beliebten Strand Praia da Rocha.",
      hu: "Egy nyüzsgő kikötőváros az Algarve-parton, híres a kiváló grillezett szardíniájáról és a népszerű Praia da Rocha strandról.",
      ro: "Un oraș portuar plin de viață în Algarve, renumit pentru sardinele la grătar excelente și populara plajă Praia da Rocha.",
      en: "A bustling port city in the Algarve, famous for its excellent grilled sardines and the popular Praia da Rocha beach."
    },
    facts: {
      de: ["Einst ein Zentrum für Fischkonserven.", "Veranstaltet internationale Motorsportveranstaltungen auf dem Autódromo Internacional do Algarve.", "Ein beliebtes Ziel für Strandurlauber."],
      hu: ["Valaha a halkonzerv-ipar központja volt.", "Nemzetközi motorsport eseményeknek ad otthont az Autódromo Internacional do Algarve pályán.", "Népszerű célpont a strandolók számára."],
      ro: ["Odinioară un centru pentru conservarea peștelui.", "Găzduiește evenimente internaționale de motorsport la Autódromo Internacional do Algarve.", "O destinație populară pentru iubitorii de plajă."],
      en: ["Once a center for fish canning.", "Hosts international motorsport events at the Autódromo Internacional do Algarve.", "A popular destination for beach holidays."]
    }
  },
  {
    id: "city-funchal-extra",
    type: "city",
    parent: "PT-30",
    coords: [-16.908, 32.6669],
    name: { de: "Funchal", hu: "Funchal", ro: "Funchal", en: "Funchal" },
    description: {
      de: "Die Hauptstadt der Insel Madeira, gelegen in einem natürlichen Amphitheater mit Blick auf den Atlantik.",
      hu: "Madeira szigetének fővárosa, egy természetes amfiteátrumban fekszik, kilátással az Atlanti-óceánra.",
      ro: "Capitala insulei Madeira, așezată într-un amfiteatru natural cu vedere la Atlantic.",
      en: "The capital of Madeira island, nestled in a natural amphitheater overlooking the Atlantic."
    },
    facts: {
      de: ["Bekannt für seinen botanischen Garten und den Mercado dos Lavradores.", "Berühmt für Madeirawein.", "Bietet spektakuläre Seilbahnfahrten."],
      hu: ["Ismert botanikus kertjéről és a Mercado dos Lavradores piacról.", "Híres a Madeira borról.", "Látványos felvonóutakat kínál."],
      ro: ["Cunoscut pentru Grădina Botanică și Mercado dos Lavradores.", "Renumit pentru vinul de Madeira.", "Oferă plimbări spectaculoase cu telecabina."],
      en: ["Known for its botanical garden and the Mercado dos Lavradores.", "Famous for Madeira wine.", "Offers spectacular cable car rides."]
    }
  },
  {
    id: "city-ponta-delgada-extra",
    type: "city",
    parent: "PT-20",
    coords: [-25.6667, 37.7412],
    name: { de: "Ponta Delgada", hu: "Ponta Delgada", ro: "Ponta Delgada", en: "Ponta Delgada" },
    description: {
      de: "Die größte Stadt und Verwaltungshauptstadt der Azoren, die sich durch ihre weiß getünchten Gebäude und ihre reiche Geschichte auszeichnet.",
      hu: "Az Azori-szigetek legnagyobb városa és közigazgatási fővárosa, fehérre meszelt épületeivel és gazdag történelmével tűnik ki.",
      ro: "Cel mai mare oraș și capitala administrativă a Azorelor, caracterizat prin clădirile sale văruite în alb și istoria bogată.",
      en: "The largest city and administrative capital of the Azores, characterized by its whitewashed buildings and rich history."
    },
    facts: {
      de: ["Ein wichtiger Hafen für Kreuzfahrtschiffe.", "Stadttore aus dem 18. Jahrhundert (Portas da Cidade) sind ein Wahrzeichen.", "Tor zu den Naturwundern der Insel São Miguel."],
      hu: ["Fontos kikötő a tengerjáró hajók számára.", "A 18. századi városkapuk (Portas da Cidade) a város jelképei.", "Kapu São Miguel szigetének természeti csodáihoz."],
      ro: ["Un port important pentru navele de croazieră.", "Porțile orașului din secolul al XVIII-lea (Portas da Cidade) sunt un punct de reper.", "Poarta de acces către minunile naturale ale insulei São Miguel."],
      en: ["A major port for cruise ships.", "18th-century city gates (Portas da Cidade) are a landmark.", "Gateway to the natural wonders of São Miguel island."]
    }
  },
  {
    id: "city-viseu-extra",
    type: "city",
    parent: "PT-18",
    coords: [-7.9138, 40.6575],
    name: { de: "Viseu", hu: "Viseu", ro: "Viseu", en: "Viseu" },
    description: {
      de: "Eine Stadt in der Weinregion Dão, oft als eine der lebenswertesten Städte Portugals angesehen.",
      hu: "A Dão borrégióban található város, amelyet gyakran Portugália egyik legélhetőbb városának tartanak.",
      ro: "Un oraș din regiunea viticolă Dão, adesea considerat unul dintre cele mai bune orașe din Portugalia pentru locuit.",
      en: "A city in the Dão wine region, often ranked as one of Portugal's best cities to live in."
    },
    facts: {
      de: ["Bekannt für das Grão Vasco Museum.", "Umgeben von Weinbergen und Granitbergen.", "Hat ein gut erhaltenes historisches Zentrum."],
      hu: ["A Grão Vasco Múzeumról ismert.", "Szőlőültetvények és gránithegyek veszik körül.", "Jól megőrzött történelmi központtal rendelkezik."],
      ro: ["Cunoscut pentru Muzeul Grão Vasco.", "Înconjurat de podgorii și munți de granit.", "Are un centru istoric bine conservat."],
      en: ["Known for the Grão Vasco Museum.", "Surrounded by vineyards and granite mountains.", "Has a well-preserved historic center."]
    }
  },
  {
    id: "city-beja-extra",
    type: "city",
    parent: "PT-02",
    coords: [-7.8631, 38.0153],
    name: { de: "Beja", hu: "Beja", ro: "Beja", en: "Beja" },
    description: {
      de: "Die wichtigste Stadt in der Region Baixo Alentejo, bekannt für ihre weiten Ebenen und die Produktion von Weizen, Olivenöl und Wein.",
      hu: "A Baixo Alentejo régió legfontosabb városa, híres a hatalmas síkságairól, valamint búza-, olívaolaj- és bortermeléséről.",
      ro: "Principalul oraș din regiunea Baixo Alentejo, cunoscut pentru câmpiile sale vaste și producția de grâu, ulei de măsline și vin.",
      en: "The main city in the Baixo Alentejo region, known for its vast plains and production of wheat, olive oil, and wine."
    },
    facts: {
      de: ["Der Burgfried von Beja ist der höchste in Portugal.", "Hat ein reiches römisches und maurisches Erbe.", "Ein Zentrum für die Landwirtschaft im Alentejo."],
      hu: ["A Bejai vár öregtornya a legmagasabb Portugáliában.", "Gazdag római és mór örökséggel rendelkezik.", "Az Alentejo mezőgazdaságának központja."],
      ro: ["Donjonul castelului din Beja este cel mai înalt din Portugalia.", "Are o moștenire bogată romană și maură.", "Un centru pentru agricultura din Alentejo."],
      en: ["The keep of Beja Castle is the tallest in Portugal.", "Has a rich Roman and Moorish heritage.", "A center for Alentejo agriculture."]
    }
  },
  {
    id: "city-braganca-extra",
    type: "city",
    parent: "PT-04",
    coords: [-6.7543, 41.8058],
    name: { de: "Bragança", hu: "Bragança", ro: "Bragança", en: "Bragança" },
    description: {
      de: "Eine abgelegene Stadt im Nordosten Portugals mit einer gut erhaltenen mittelalterlichen Zitadelle.",
      hu: "Egy eldugott város Portugália északkeleti részén, egy jól megőrzött középkori fellegvárral.",
      ro: "Un oraș izolat din nord-estul Portugaliei, cu o citadelă medievală bine conservată.",
      en: "A remote city in northeastern Portugal with a well-preserved medieval citadel."
    },
    facts: {
      de: ["Innerhalb der Mauern der Zitadelle befindet sich das Dorf Bragança.", "Heimat des Domus Municipalis, eines einzigartigen Beispiels romanischer Zivilarchitektur.", "In der Nähe des Naturparks Montesinho."],
      hu: ["A fellegvár falain belül található Bragança falu.", "Itt található a Domus Municipalis, a román stílusú polgári építészet egyedülálló példája.", "A Montesinho Természeti Park közelében."],
      ro: ["Satul Bragança se află în interiorul zidurilor citadelei.", "Acasă la Domus Municipalis, un exemplu unic de arhitectură civilă romanică.", "Aproape de Parcul Natural Montesinho."],
      en: ["The village of Bragança is located inside the citadel walls.", "Home to the Domus Municipalis, a unique example of Romanesque civil architecture.", "Close to the Montesinho Natural Park."]
    }
  },
  {
    id: "city-santarem-extra",
    type: "city",
    parent: "PT-14",
    coords: [-8.683, 39.2333],
    name: { de: "Santarém", hu: "Santarém", ro: "Santarém", en: "Santarém" },
    description: {
      de: "Bekannt als die 'Hauptstadt der portugiesischen Gotik', thront sie auf einem Plateau mit Blick auf den Tejo.",
      hu: "A 'portugál gótika fővárosaként' ismert, egy fennsíkon trónol, ahonnan a Tejo folyóra nyílik kilátás.",
      ro: "Cunoscută drept 'capitala goticului portughez', este așezată pe un platou cu vedere la râul Tagus.",
      en: "Known as the 'Capital of Portuguese Gothic', it sits on a plateau overlooking the Tagus River."
    },
    facts: {
      de: ["Ein strategischer Punkt im Laufe der Geschichte.", "Berühmt für sein jährliches Nationales Gastronomiefestival.", "Die Portas do Sol bieten einen atemberaubenden Blick auf den Fluss."],
      hu: ["Stratégiai pont a történelem során.", "Híres az éves Nemzeti Gasztronómiai Fesztiváljáról.", "A Portas do Solból lélegzetelállító kilátás nyílik a folyóra."],
      ro: ["Un punct strategic de-a lungul istoriei.", "Renumit pentru Festivalul Național de Gastronomie anual.", "Portas do Sol oferă priveliști uimitoare ale râului."],
      en: ["A strategic point throughout history.", "Famous for its annual National Gastronomy Festival.", "The Portas do Sol offer stunning river views."]
    }
  },
  {
    id: "city-portalegre-extra",
    type: "city",
    parent: "PT-12",
    coords: [-7.4312, 39.294],
    name: { de: "Portalegre", hu: "Portalegre", ro: "Portalegre", en: "Portalegre" },
    description: {
      de: "Eine Stadt im Alto Alentejo, bekannt für ihre Wandteppichindustrie und ihre Nähe zum Naturpark Serra de São Mamede.",
      hu: "Város Alto Alentejo régióban, híres a faliszőnyeg-iparáról és a Serra de São Mamede Természeti Park közelségéről.",
      ro: "Un oraș din Alto Alentejo, renumit pentru industria sa de tapiserii și apropierea de Parcul Natural Serra de São Mamede.",
      en: "A city in Alto Alentejo, known for its tapestry industry and proximity to the Serra de São Mamede Natural Park."
    },
    facts: {
      de: ["Das Guy Fino Museum zeigt die Geschichte der Portalegre-Wandteppiche.", "Die Stadt hat mehrere Herrenhäuser aus dem 17. und 18. Jahrhundert.", "Ein Tor zu Wander- und Naturpfaden."],
      hu: ["A Guy Fino Múzeum bemutatja a Portalegre faliszőnyegek történetét.", "A városban több 17. és 18. századi udvarház található.", "Kapu a túra- és természetjáró ösvényekhez."],
      ro: ["Muzeul Guy Fino prezintă istoria tapiseriilor din Portalegre.", "Orașul are mai multe conace din secolele al XVII-lea și al XVIII-lea.", "O poartă de acces către trasee de drumeții și natură."],
      en: ["The Guy Fino Museum showcases the history of Portalegre tapestries.", "The city has several 17th and 18th-century manor houses.", "A gateway to hiking and nature trails."]
    }
  },
  {
    id: "city-castelo-branco-extra",
    type: "city",
    parent: "PT-05",
    coords: [-7.4946, 39.8222],
    name: { de: "Castelo Branco", hu: "Castelo Branco", ro: "Castelo Branco", en: "Castelo Branco" },
    description: {
      de: "Eine Stadt in der Region Beira Baixa, bekannt für ihre einzigartigen bestickten Bettdecken, die Colchas.",
      hu: "Város a Beira Baixa régióban, híres egyedi hímzett ágytakaróiról, a Colchas-ról.",
      ro: "Un oraș din regiunea Beira Baixa, cunoscut pentru cuverturile sale brodate unice, numite Colchas.",
      en: "A city in the Beira Baixa region, known for its unique embroidered bedspreads called Colchas."
    },
    facts: {
      de: ["Der Bischofspalastgarten ist eine bemerkenswerte Barockanlage.", "Die Colchas sind eine wichtige lokale Handwerkskunst.", "Heimat des Cargaleiro-Museums, das dem Künstler Manuel Cargaleiro gewidmet ist."],
      hu: ["A Püspöki Palota kertje egy figyelemre méltó barokk alkotás.", "A Colchas fontos helyi kézműves termék.", "Itt található a Cargaleiro Múzeum, amelyet Manuel Cargaleiro művésznek szenteltek."],
      ro: ["Grădina Palatului Episcopal este un sit baroc remarcabil.", "Colchas sunt un meșteșug local important.", "Acasă la Muzeul Cargaleiro, dedicat artistului Manuel Cargaleiro."],
      en: ["The Bishop's Palace Garden is a notable Baroque feature.", "The Colchas are an important local handicraft.", "Home to the Cargaleiro Museum, dedicated to artist Manuel Cargaleiro."]
    }
  },
  {
    id: "city-vila-real-extra",
    type: "city",
    parent: "PT-17",
    coords: [-7.7445, 41.3006],
    name: { de: "Vila Real", hu: "Vila Real", ro: "Vila Real", en: "Vila Real" },
    description: {
      de: "Eine Stadt in der Weinregion Douro, berühmt für den Mateus-Palast, der auf den Etiketten des Mateus-Roséweins abgebildet ist.",
      hu: "Város a Douro borrégióban, híres a Mateus-palotáról, amely a Mateus rozébor címkéin látható.",
      ro: "Un oraș din regiunea viticolă Douro, renumit pentru Palatul Mateus, care apare pe etichetele vinului rosé Mateus.",
      en: "A city in the Douro wine region, famous for the Mateus Palace, which is depicted on the labels of Mateus rosé wine."
    },
    facts: {
      de: ["Der Mateus-Palast ist ein Meisterwerk des Barock.", "Die Stadt liegt auf einem Plateau, das von den Flüssen Corgo und Cabril geformt wurde.", "Ein Zentrum für die Herstellung von schwarzer Keramik."],
      hu: ["A Mateus-palota a barokk építészet mesterműve.", "A város egy fennsíkon fekszik, amelyet a Corgo és Cabril folyók formáltak.", "A fekete kerámia gyártásának központja."],
      ro: ["Palatul Mateus este o capodoperă barocă.", "Orașul este situat pe un platou format de râurile Corgo și Cabril.", "Un centru pentru producția de ceramică neagră."],
      en: ["The Mateus Palace is a masterpiece of Baroque architecture.", "The city sits on a plateau formed by the Corgo and Cabril rivers.", "A center for black pottery production."]
    }
  },
  {
    id: "city-tavira-extra",
    type: "city",
    parent: "PT-08",
    coords: [-7.6508, 37.1264],
    name: { de: "Tavira", hu: "Tavira", ro: "Tavira", en: "Tavira" },
    description: {
      de: "Eine der architektonisch reizvollsten Städte der Algarve, die sich über den Fluss Gilão erstreckt.",
      hu: "Az Algarve egyik építészetileg legvonzóbb városa, amely a Gilão folyó két partján terül el.",
      ro: "Unul dintre cele mai atractive orașe din punct de vedere arhitectural din Algarve, care se întinde pe malurile râului Gilão.",
      en: "One of the Algarve's most architecturally attractive towns, straddling the Gilão River."
    },
    facts: {
      de: ["Besitzt eine römische Brücke, die die beiden Teile der Stadt verbindet.", "Mehr als 30 Kirchen in der Stadt.", "Nahe der Ilha de Tavira, einem langen Sandstrand."],
      hu: ["Római híd köti össze a város két részét.", "Több mint 30 templom található a városban.", "Közel az Ilha de Tavira-hoz, egy hosszú homokos strandhoz."],
      ro: ["Are un pod roman care leagă cele două părți ale orașului.", "Peste 30 de biserici în oraș.", "Aproape de Ilha de Tavira, o plajă lungă cu nisip."],
      en: ["Has a Roman bridge connecting the two parts of the town.", "More than 30 churches in the town.", "Close to the Ilha de Tavira, a long sandy beach."]
    }
  },
  {
    id: "city-guarda-extra",
    type: "city",
    parent: "PT-09",
    coords: [-7.2667, 40.5373],
    name: { de: "Guarda", hu: "Guarda", ro: "Guarda", en: "Guarda" },
    description: {
      de: "Die höchstgelegene Stadt auf dem portugiesischen Festland, bekannt für ihre kühle, klare Luft und ihre befestigte Kathedrale.",
      hu: "A legmagasabban fekvő város a portugál szárazföldön, ismert hűvös, tiszta levegőjéről és erődített katedrálisáról.",
      ro: "Cel mai înalt oraș din Portugalia continentală, cunoscut pentru aerul său rece și curat și catedrala sa fortificată.",
      en: "The highest city in mainland Portugal, known for its cool, clean air and its fortified cathedral."
    },
    facts: {
      de: ["Liegt auf einer Höhe von über 1.000 Metern.", "Die Kathedrale von Guarda ähnelt einer Festung.", "Ein Tor zum Naturpark Serra da Estrela."],
      hu: ["Több mint 1000 méter magasságban fekszik.", "A Guarda-i katedrális egy erődhöz hasonlít.", "Kapu a Serra da Estrela Természeti Parkhoz."],
      ro: ["Situat la o altitudine de peste 1.000 de metri.", "Catedrala din Guarda seamănă cu o fortăreață.", "O poartă de acces către Parcul Natural Serra da Estrela."],
      en: ["Located at an altitude of over 1,000 meters.", "The Guarda Cathedral resembles a fortress.", "A gateway to the Serra da Estrela Natural Park."]
    }
  },
  {
    id: "city-chaves-extra",
    type: "city",
    parent: "PT-17",
    coords: [-7.469, 41.7402],
    name: { de: "Chaves", hu: "Chaves", ro: "Chaves", en: "Chaves" },
    description: {
      de: "Eine historische Kurstadt in Nordportugal, berühmt für ihre römische Brücke und ihre Thermalquellen.",
      hu: "Történelmi fürdőváros Észak-Portugáliában, híres a római hídjáról és termálforrásairól.",
      ro: "Un oraș balnear istoric din nordul Portugaliei, renumit pentru podul său roman și izvoarele termale.",
      en: "A historic spa town in northern Portugal, famous for its Roman bridge and thermal waters."
    },
    facts: {
      de: ["Die Trajansbrücke wurde im frühen 2. Jahrhundert erbaut.", "Die Thermalwässer sind für ihre heilenden Eigenschaften bekannt.", "Ein Zentrum für die Herstellung von geräuchertem Schinken (Presunto)."],
      hu: ["A Traianus-hidat a 2. század elején építették.", "A termálvizek gyógyhatásukról ismertek.", "A füstölt sonka (Presunto) készítésének központja."],
      ro: ["Podul lui Traian a fost construit la începutul secolului al II-lea.", "Apele termale sunt cunoscute pentru proprietățile lor curative.", "Un centru pentru producția de șuncă afumată (Presunto)."],
      en: ["The Trajan's Bridge was built in the early 2nd century.", "The thermal waters are known for their healing properties.", "A center for smoked ham (Presunto) production."]
    }
  },
  {
    id: "city-elvas-extra",
    type: "city",
    parent: "PT-12",
    coords: [-7.1613, 38.8815],
    name: { de: "Elvas", hu: "Elvas", ro: "Elvas", en: "Elvas" },
    description: {
      de: "Eine Garnisonsstadt nahe der spanischen Grenze, deren Befestigungsanlagen zum UNESCO-Weltkulturerbe gehören.",
      hu: "Egy helyőrségi város a spanyol határ közelében, amelynek erődítményei az UNESCO Világörökség részét képezik.",
      ro: "Un oraș de garnizoană aproape de granița cu Spania, ale cărui fortificații sunt un sit al Patrimoniului Mondial UNESCO.",
      en: "A garrison town near the Spanish border, its fortifications are a UNESCO World Heritage site."
    },
    facts: {
      de: ["Besitzt das größte bastionierte Festungssystem der Welt.", "Das Amoreira-Aquädukt ist ein beeindruckendes Ingenieurbauwerk.", "Berühmt für seine eingelegten Pflaumen."],
      hu: ["A világ legnagyobb bástyás erődrendszerével rendelkezik.", "Az Amoreira-vízvezeték egy lenyűgöző mérnöki alkotás.", "Híres a kandírozott szilvájáról."],
      ro: ["Are cel mai mare sistem de fortificații bastionare din lume.", "Apeductul Amoreira este o lucrare de inginerie impresionantă.", "Renumit pentru prunele sale conservate."],
      en: ["Has the largest bulwarked fortress system in the world.", "The Amoreira Aqueduct is an impressive engineering feat.", "Famous for its preserved plums."]
    }
  },
  {
    id: "city-lamego-extra",
    type: "city",
    parent: "PT-18",
    coords: [-7.8091, 41.0965],
    name: { de: "Lamego", hu: "Lamego", ro: "Lamego", en: "Lamego" },
    description: {
      de: "Eine historische Stadt im Douro-Tal, Heimat des Heiligtums Unserer Lieben Frau von den Heilmitteln, einem wichtigen Wallfahrtsort.",
      hu: "Történelmi város a Douro-völgyben, otthona a Nossa Senhora dos Remédios szentélynek, egy fontos zarándokhelynek.",
      ro: "Un oraș istoric din Valea Douro, care găzduiește Sanctuarul Maicii Domnului al Leacurilor, un important loc de pelerinaj.",
      en: "A historic city in the Douro Valley, home to the Sanctuary of Our Lady of Remedies, an important pilgrimage site."
    },
    facts: {
      de: ["Das Heiligtum hat eine monumentale Barocktreppe mit 686 Stufen.", "Ein Produktionszentrum für Portwein und Schaumwein.", "Die erste Cortes (Parlament) von Portugal fand hier 1143 statt."],
      hu: ["A szentélynek egy monumentális barokk lépcsője van 686 fokkal.", "A portói és habzóbor gyártásának központja.", "Portugália első Cortese (parlamentje) itt ülésezett 1143-ban."],
      ro: ["Sanctuarul are o scară barocă monumentală cu 686 de trepte.", "Un centru de producție pentru vinul de Porto și vinul spumant.", "Primele Cortes (parlament) ale Portugaliei au avut loc aici în 1143."],
      en: ["The sanctuary has a monumental Baroque staircase with 686 steps.", "A production center for Port wine and sparkling wine.", "The first Cortes (parliament) of Portugal was held here in 1143."]
    }
  },
  {
    id: "city-covilha-extra",
    type: "city",
    parent: "PT-05",
    coords: [-7.5039, 40.282],
    name: { de: "Covilhã", hu: "Covilhã", ro: "Covilhã", en: "Covilhã" },
    description: {
      de: "Eine Stadt an den Hängen der Serra da Estrela, historisch ein Zentrum der portugiesischen Wollindustrie.",
      hu: "Város a Serra da Estrela lejtőin, történelmileg a portugál gyapjúipar központja.",
      ro: "Un oraș pe versanții Serra da Estrela, istoric un centru al industriei lânii din Portugalia.",
      en: "A city on the slopes of Serra da Estrela, historically a center of Portugal's wool industry."
    },
    facts: {
      de: ["Wird als 'Tor zur Serra da Estrela' bezeichnet.", "Heimat des Wollmuseums.", "Heute ein Zentrum für Design und Mode, verbunden mit seiner Universität."],
      hu: ["A 'Serra da Estrela kapujának' nevezik.", "A Gyapjúmúzeum otthona.", "Ma a design és a divat központja, egyetemével összekapcsolva."],
      ro: ["Numit 'Poarta către Serra da Estrela'.", "Acasă la Muzeul Lânii.", "Astăzi, un centru pentru design și modă, legat de universitatea sa."],
      en: ["Known as the 'Gateway to Serra da Estrela'.", "Home to the Wool Museum.", "Now a center for design and fashion, linked to its university."]
    }
  },
  {
    id: "city-sines-extra",
    type: "city",
    parent: "PT-15",
    coords: [-8.8654, 37.9554],
    name: { de: "Sines", hu: "Sines", ro: "Sines", en: "Sines" },
    description: {
      de: "Ein historisches Fischerdorf und Geburtsort des Entdeckers Vasco da Gama, heute ein wichtiger Tiefwasserhafen und Industriekomplex.",
      hu: "Történelmi halászfalu és Vasco da Gama felfedező szülőhelye, ma fontos mélyvízi kikötő és ipari komplexum.",
      ro: "Un sat pescăresc istoric și locul de naștere al exploratorului Vasco da Gama, acum un port important de apă adâncă și complex industrial.",
      en: "A historic fishing town and birthplace of explorer Vasco da Gama, now a major deepwater port and industrial complex."
    },
    facts: {
      de: ["Der Hafen von Sines ist der größte künstliche Hafen in Portugal.", "Veranstaltet das jährliche FMM Sines - Weltmusikfestival.", "Die Burg überblickt die Bucht und den neuen Hafen."],
      hu: ["A Sines-i kikötő Portugália legnagyobb mesterséges kikötője.", "Itt rendezik meg az éves FMM Sines - Világzenei Fesztivált.", "A vár az öbölre és az új kikötőre néz."],
      ro: ["Portul Sines este cel mai mare port artificial din Portugalia.", "Găzduiește anual FMM Sines - Festivalul de Muzică Mondială.", "Castelul domină golful și portul nou."],
      en: ["The Port of Sines is the largest artificial port in Portugal.", "Hosts the annual FMM Sines - World Music Festival.", "The castle overlooks the bay and the new port."]
    }
  },
  {
    id: "city-vila-nova-de-gaia-extra",
    type: "city",
    parent: "PT-13",
    coords: [-8.6145, 41.1333],
    name: { de: "Vila Nova de Gaia", hu: "Vila Nova de Gaia", ro: "Vila Nova de Gaia", en: "Vila Nova de Gaia" },
    description: {
      de: "Am Südufer des Flusses Douro gelegen, ist es berühmt für seine Portweinkeller, in denen der Wein reift und gelagert wird.",
      hu: "A Douro folyó déli partján található, híres a portói borospincéiről, ahol a bort érlelik és tárolják.",
      ro: "Situat pe malul sudic al râului Douro, este renumit pentru cramele sale de vin de Porto, unde vinul este maturat și depozitat.",
      en: "Located on the south bank of the Douro River, it is famous for its Port wine cellars where the wine is aged and stored."
    },
    facts: {
      de: ["Die meisten Portweinkeller befinden sich in Gaia, nicht in Porto.", "Bietet einen atemberaubenden Blick auf die historische Ribeira von Porto.", "Mit Porto durch mehrere Brücken verbunden, darunter die Dom-Luís-I-Brücke."],
      hu: ["A legtöbb portói borospince Gaiában található, nem Portóban.", "Lélegzetelállító kilátást nyújt Porto történelmi Ribeira negyedére.", "Több híd köti össze Portóval, köztük a Dom Luís I híd."],
      ro: ["Majoritatea cramelor de vin de Porto se află în Gaia, nu în Porto.", "Oferă vederi uimitoare ale cartierului istoric Ribeira din Porto.", "Conectat la Porto prin mai multe poduri, inclusiv Podul Dom Luís I."],
      en: ["Most Port wine cellars are located in Gaia, not Porto.", "Offers stunning views of Porto's historic Ribeira district.", "Connected to Porto by several bridges, including the Dom Luís I Bridge."]
    }
  },
  {
    id: "city-figueira-da-foz-extra",
    type: "city",
    parent: "PT-06",
    coords: [-8.861, 40.1568],
    name: { de: "Figueira da Foz", hu: "Figueira da Foz", ro: "Figueira da Foz", en: "Figueira da Foz" },
    description: {
      de: "Ein Küstenort an der Mündung des Flusses Mondego, bekannt für seinen riesigen Sandstrand und sein Casino.",
      hu: "Tengerparti üdülőhely a Mondego folyó torkolatánál, híres a hatalmas homokos strandjáról és kaszinójáról.",
      ro: "O stațiune de coastă la gura râului Mondego, cunoscută pentru plaja sa vastă de nisip și cazinoul său.",
      en: "A coastal resort at the mouth of the Mondego River, known for its vast sandy beach and casino."
    },
    facts: {
      de: ["Der Strand wird wegen seiner Größe 'Rainha das Praias' (Königin der Strände) genannt.", "Ein beliebter Ort für Surfen und andere Wassersportarten.", "Beherbergt das älteste Casino auf der Iberischen Halbinsel."],
      hu: ["A strandot mérete miatt 'Rainha das Praias'-nak (Strandok királynője) nevezik.", "Népszerű hely a szörfözéshez és más vízi sportokhoz.", "Itt található az Ibériai-félsziget legrégebbi kaszinója."],
      ro: ["Plaja este supranumită 'Rainha das Praias' (Regina Plajelor) datorită dimensiunii sale.", "Un loc popular pentru surfing și alte sporturi nautice.", "Găzduiește cel mai vechi cazinou din Peninsula Iberică."],
      en: ["The beach is nicknamed 'Rainha das Praias' (Queen of Beaches) for its size.", "A popular spot for surfing and other water sports.", "Home to the oldest casino in the Iberian Peninsula."]
    }
  },
  {
    id: "city-peniche-extra",
    type: "city",
    parent: "PT-10",
    coords: [-9.381, 39.3556],
    name: { de: "Peniche", hu: "Peniche", ro: "Peniche", en: "Peniche" },
    description: {
      de: "Eine Halbinselstadt mit einer starken Fischereitradition, bekannt für ihre Wellen, die Surfer aus aller Welt anziehen.",
      hu: "Egy félszigeten fekvő város erős halászati hagyományokkal, híres a hullámairól, amelyek a világ minden tájáról vonzzák a szörfösöket.",
      ro: "Un oraș peninsular cu o puternică tradiție pescărească, renumit pentru valurile sale care atrag surferi din întreaga lume.",
      en: "A peninsular town with a strong fishing tradition, famous for its waves that attract surfers from all over the world."
    },
    facts: {
      de: ["Die Festung von Peniche wurde als politisches Gefängnis während des Estado Novo-Regimes genutzt.", "Heimat der berühmten Supertubos-Welle.", "Die nahegelegenen Berlengas-Inseln sind ein Naturschutzgebiet."],
      hu: ["A Peniche-i erődöt politikai börtönként használták az Estado Novo rezsim alatt.", "Itt található a híres Supertubos hullám.", "A közeli Berlengas-szigetek természetvédelmi terület."],
      ro: ["Fortăreața din Peniche a fost folosită ca închisoare politică în timpul regimului Estado Novo.", "Acasă la faimosul val Supertubos.", "Insulele Berlengas din apropiere sunt o rezervație naturală."],
      en: ["The Peniche Fortress was used as a political prison during the Estado Novo regime.", "Home to the famous Supertubos wave.", "The nearby Berlengas islands are a nature reserve."]
    }
  },
  {
    id: "city-obidos-extra",
    type: "city",
    parent: "PT-10",
    coords: [-9.1576, 39.3606],
    name: { de: "Óbidos", hu: "Óbidos", ro: "Óbidos", en: "Óbidos" },
    description: {
      de: "Ein malerisches mittelalterliches Dorf, das vollständig von Burgmauern umgeben ist, bekannt für seine weiß getünchten Häuser und den Kirschlikör Ginja.",
      hu: "Egy festői középkori falu, amelyet teljesen várfalak vesznek körül, híres fehérre meszelt házairól és a Ginja meggylikőrről.",
      ro: "Un sat medieval pitoresc complet înconjurat de ziduri de castel, cunoscut pentru casele sale văruite în alb și lichiorul de cireșe Ginja.",
      en: "A picturesque medieval village completely enclosed by castle walls, known for its whitewashed houses and cherry liqueur, Ginja."
    },
    facts: {
      de: ["Traditionell Teil der Mitgift der Königinnen von Portugal.", "Veranstaltet jährlich ein mittelalterliches Fest und ein Schokoladenfestival.", "Man kann auf den Stadtmauern spazieren gehen und die Aussicht genießen."],
      hu: ["Hagyományosan a portugál királynők hozományának része volt.", "Évente középkori fesztivált és csokoládéfesztivált rendeznek.", "A városfalakon sétálva élvezhető a kilátás."],
      ro: ["În mod tradițional, făcea parte din zestrea reginelor Portugaliei.", "Găzduiește anual un festival medieval și un festival al ciocolatei.", "Puteți merge pe zidurile orașului pentru a admira priveliștea."],
      en: ["Traditionally part of the dowry of the Queens of Portugal.", "Hosts an annual Medieval Fair and a Chocolate Festival.", "You can walk along the town walls for views."]
    }
  },
  {
    id: "city-sesimbra-extra",
    type: "city",
    parent: "PT-15",
    coords: [-9.1022, 38.4449],
    name: { de: "Sesimbra", hu: "Sesimbra", ro: "Sesimbra", en: "Sesimbra" },
    description: {
      de: "Ein malerisches Fischerdorf am Fuße der Serra da Arrábida, bekannt für seine Strände und hervorragenden Meeresfrüchte.",
      hu: "Festői halászfalu a Serra da Arrábida lábánál, híres strandjairól és kiváló tengeri ételeiről.",
      ro: "Un sat pescăresc pitoresc la poalele Serra da Arrábida, renumit pentru plajele și fructele de mare excelente.",
      en: "A picturesque fishing village at the foothills of Serra da Arrábida, known for its beaches and excellent seafood."
    },
    facts: {
      de: ["Die maurische Burg bietet einen Panoramablick auf die Stadt und das Meer.", "Ein beliebter Ort zum Tauchen und Delfinbeobachten.", "Der Schwertfisch ist eine lokale Spezialität."],
      hu: ["A mór várból panorámás kilátás nyílik a városra és a tengerre.", "Népszerű hely a búvárkodáshoz és a delfinleshez.", "A kardhal helyi specialitás."],
      ro: ["Castelul maur oferă vederi panoramice ale orașului și mării.", "Un loc popular pentru scufundări și observarea delfinilor.", "Peștele-spadă este o specialitate locală."],
      en: ["The Moorish castle offers panoramic views of the town and sea.", "A popular spot for diving and dolphin watching.", "Swordfish is a local specialty."]
    }
  },
  {
    id: "city-nazare-extra",
    type: "city",
    parent: "PT-10",
    coords: [-9.0686, 39.6028],
    name: { de: "Nazaré", hu: "Nazaré", ro: "Nazaré", en: "Nazaré" },
    description: {
      de: "Ein traditionelles Fischerdorf, das weltberühmt für seine riesigen Wellen ist, die durch den Nazaré-Canyon erzeugt werden.",
      hu: "Hagyományos halászfalu, amely világhírű a Nazaré-kanyon által generált óriási hullámairól.",
      ro: "Un sat pescăresc tradițional, faimos în întreaga lume pentru valurile sale gigantice generate de Canionul Nazaré.",
      en: "A traditional fishing village, world-famous for its giant waves generated by the Nazaré Canyon."
    },
    facts: {
      de: ["Hält den Weltrekord für die größte jemals gesurfte Welle.", "Die Fischerfrauen tragen traditionell sieben Röcke.", "Der Leuchtturm von Nazaré ist der beste Ort, um die Wellen zu beobachten."],
      hu: ["Itt tartják a valaha szörfölt legnagyobb hullám világrekordját.", "A halászfeleségek hagyományosan hét szoknyát viselnek.", "A Nazaré-i világítótorony a legjobb hely a hullámok megfigyelésére."],
      ro: ["Deține recordul mondial pentru cel mai mare val pe care s-a făcut surf vreodată.", "Pescărițele poartă în mod tradițional șapte fuste.", "Farul din Nazaré este cel mai bun loc pentru a privi valurile."],
      en: ["Holds the world record for the largest wave ever surfed.", "The fisherwomen traditionally wear seven skirts.", "The Nazaré lighthouse is the best spot to watch the waves."]
    }
  },
  {
    id: "city-estoril-extra",
    type: "city",
    parent: "PT-11",
    coords: [-9.3976, 38.7067],
    name: { de: "Estoril", hu: "Estoril", ro: "Estoril", en: "Estoril" },
    description: {
      de: "Ein glamouröser Ferienort an der portugiesischen Riviera, bekannt für sein großes Casino und als Spionagezentrum während des Zweiten Weltkriegs.",
      hu: "Egy csillogó üdülőhely a portugál riviérán, híres a nagy kaszinójáról és arról, hogy a második világháború alatt kémközpont volt.",
      ro: "O stațiune plină de farmec pe Riviera portugheză, renumită pentru cazinoul său mare și pentru că a fost un centru de spionaj în timpul celui de-al Doilea Război Mondial.",
      en: "A glamorous resort town on the Portuguese Riviera, famous for its large casino and for being a hub of espionage during WWII."
    },
    facts: {
      de: ["Das Casino Estoril inspirierte Ian Flemings Roman 'Casino Royale'.", "Heimat der Rennstrecke von Estoril, auf der früher Formel-1-Rennen stattfanden.", "Ein beliebter Wohnort für verbannte europäische Königshäuser."],
      hu: ["Az Estoril Kaszinó ihlette Ian Fleming 'Casino Royale' című regényét.", "Itt található az Estoril versenypálya, ahol korábban Forma-1-es versenyeket rendeztek.", "Száműzött európai királyi családok kedvelt lakóhelye volt."],
      ro: ["Cazinoul Estoril a inspirat romanul lui Ian Fleming 'Casino Royale'.", "Acasă la Circuitul Estoril, care a găzduit în trecut curse de Formula 1.", "O reședință populară pentru regalitatea europeană exilată."],
      en: ["The Casino Estoril inspired Ian Fleming's novel 'Casino Royale'.", "Home to the Estoril Circuit, a former host of Formula 1 races.", "A popular residence for exiled European royalty."]
    }
  },
  {
    id: "city-tomar-extra",
    type: "city",
    parent: "PT-14",
    coords: [-8.411, 39.6033],
    name: { de: "Tomar", hu: "Tomar", ro: "Tomar", en: "Tomar" },
    description: {
      de: "Eine historisch bedeutsame Stadt, die die letzte Hochburg der Tempelritter in Portugal war.",
      hu: "Történelmileg jelentős város, amely a templomos lovagok utolsó fellegvára volt Portugáliában.",
      ro: "Un oraș important din punct de vedere istoric, care a fost ultima fortăreață a Cavalerilor Templieri din Portugalia.",
      en: "A historically significant city that was the last stronghold of the Knights Templar in Portugal."
    },
    facts: {
      de: ["Das Kloster Christi (Convento de Cristo) ist ein UNESCO-Weltkulturerbe.", "Veranstaltet alle vier Jahre das Fest der Tabletts (Festa dos Tabuleiros).", "Die Stadt wird vom Fluss Nabão durchflossen."],
      hu: ["A Krisztus-kolostor (Convento de Cristo) az UNESCO Világörökség része.", "Négyévente megrendezik a Tálcák Ünnepét (Festa dos Tabuleiros).", "A várost a Nabão folyó szeli át."],
      ro: ["Mănăstirea lui Hristos (Convento de Cristo) este un sit al Patrimoniului Mondial UNESCO.", "Găzduiește Festivalul Tăvilor (Festa dos Tabuleiros) la fiecare patru ani.", "Orașul este traversat de râul Nabão."],
      en: ["The Convent of Christ (Convento de Cristo) is a UNESCO World Heritage site.", "Hosts the Festival of the Trays (Festa dos Tabuleiros) every four years.", "The city is crossed by the Nabão River."]
    }
  },
  {
    id: "city-alcobaca-extra",
    type: "city",
    parent: "PT-10",
    coords: [-8.9791, 39.5496],
    name: { de: "Alcobaça", hu: "Alcobaça", ro: "Alcobaça", en: "Alcobaça" },
    description: {
      de: "Berühmt für sein prächtiges Zisterzienserkloster, ein Meisterwerk der gotischen Kunst und UNESCO-Weltkulturerbe.",
      hu: "Híres a csodálatos ciszterci kolostoráról, amely a gótikus művészet mesterműve és az UNESCO Világörökség része.",
      ro: "Renumit pentru magnifica sa mănăstire cisterciană, o capodoperă a artei gotice și un sit al Patrimoniului Mondial UNESCO.",
      en: "Famous for its magnificent Cistercian monastery, a masterpiece of Gothic art and a UNESCO World Heritage site."
    },
    facts: {
      de: ["Das Kloster beherbergt die Gräber von König Pedro I. und Inês de Castro.", "Die Klosterküche ist für ihre enorme Größe bekannt.", "Ein Zentrum für Keramik- und Obstanbau."],
      hu: ["A kolostorban található I. Péter király és Inês de Castro sírja.", "A kolostor konyhája hatalmas méretéről ismert.", "A kerámia- és gyümölcstermesztés központja."],
      ro: ["Mănăstirea adăpostește mormintele regelui Pedro I și ale lui Inês de Castro.", "Bucătăria mănăstirii este renumită pentru dimensiunile sale enorme.", "Un centru pentru ceramică și cultivarea fructelor."],
      en: ["The monastery holds the tombs of King Pedro I and Inês de Castro.", "The monastery's kitchen is famous for its enormous size.", "A center for ceramics and fruit growing."]
    }
  },
  {
    id: "city-batalha-extra",
    type: "city",
    parent: "PT-10",
    coords: [-8.8258, 39.6588],
    name: { de: "Batalha", hu: "Batalha", ro: "Batalha", en: "Batalha" },
    description: {
      de: "Bedeutend für sein Kloster, das zum Gedenken an den Sieg der Portugiesen in der Schlacht von Aljubarrota im Jahr 1385 erbaut wurde.",
      hu: "Jelentős a kolostora miatt, amelyet az 1385-ös Aljubarrotai csatában aratott portugál győzelem emlékére építettek.",
      ro: "Important pentru mănăstirea sa, construită pentru a comemora victoria portugheză în bătălia de la Aljubarrota din 1385.",
      en: "Significant for its monastery, built to commemorate the 1385 Portuguese victory in the Battle of Aljubarrota."
    },
    facts: {
      de: ["Das Kloster von Batalha ist ein Meisterwerk des manuelinischen Stils.", "Die Unvollendeten Kapellen (Capelas Imperfeitas) sind ein einzigartiges Merkmal.", "Ein Symbol der portugiesischen Unabhängigkeit."],
      hu: ["A Batalha-kolostor a mánuel stílus mesterműve.", "A Befejezetlen Kápolnák (Capelas Imperfeitas) egyedülálló jellegzetessége.", "A portugál függetlenség szimbóluma."],
      ro: ["Mănăstirea din Batalha este o capodoperă a stilului manuelin.", "Capelele Neterminate (Capelas Imperfeitas) sunt o caracteristică unică.", "Un simbol al independenței portugheze."],
      en: ["The Monastery of Batalha is a masterpiece of the Manueline style.", "The Unfinished Chapels (Capelas Imperfeitas) are a unique feature.", "A symbol of Portuguese independence."]
    }
  },
  {
    id: "city-fatima-extra",
    type: "city",
    parent: "PT-14",
    coords: [-8.6718, 39.6177],
    name: { de: "Fátima", hu: "Fátima", ro: "Fátima", en: "Fátima" },
    description: {
      de: "Einer der bedeutendsten katholischen Wallfahrtsorte der Welt, bekannt für die Erscheinungen der Jungfrau Maria im Jahr 1917.",
      hu: "A világ egyik legjelentősebb katolikus zarándokhelye, amely a Szűz Mária 1917-es jelenéseiről ismert.",
      ro: "Unul dintre cele mai importante locuri de pelerinaj catolic din lume, renumit pentru aparițiile Fecioarei Maria din 1917.",
      en: "One of the most important Catholic pilgrimage sites in the world, known for the 1917 apparitions of the Virgin Mary."
    },
    facts: {
      de: ["Zieht jährlich Millionen von Pilgern an.", "Das Heiligtum von Fátima umfasst eine Basilika und eine große Esplanade.", "Die Erscheinungen wurden von drei Hirtenkindern bezeugt."],
      hu: ["Évente zarándokok millióit vonzza.", "A Fátimai Szentély egy bazilikát és egy nagy teret foglal magában.", "A jelenéseket három pásztorgyerek tanúsította."],
      ro: ["Atrage milioane de pelerini anual.", "Sanctuarul din Fátima include o bazilică și o esplanadă mare.", "Aparițiile au fost mărturisite de trei copii păstori."],
      en: ["Attracts millions of pilgrims annually.", "The Sanctuary of Fátima includes a basilica and a large esplanade.", "The apparitions were witnessed by three shepherd children."]
    }
  },
  {
    id: "city-amarante-extra",
    type: "city",
    parent: "PT-13",
    coords: [-8.0792, 41.2675],
    name: { de: "Amarante", hu: "Amarante", ro: "Amarante", en: "Amarante" },
    description: {
      de: "Eine malerische Stadt am Ufer des Flusses Tâmega, bekannt für ihre Brücke, ihre Kirche und ihre einzigartigen Süßigkeiten.",
      hu: "Festői város a Tâmega folyó partján, híres a hídjáról, a templomáról és egyedi édességeiről.",
      ro: "Un oraș pitoresc pe malurile râului Tâmega, renumit pentru podul, biserica și dulciurile sale unice.",
      en: "A picturesque town on the banks of the Tâmega River, known for its bridge, church, and unique sweets."
    },
    facts: {
      de: ["Die Brücke São Gonçalo ist ein nationales Denkmal.", "Berühmt für seine phallischen Kuchen, die 'doces fálicos'.", "Geburtsort des Malers Amadeo de Souza-Cardoso."],
      hu: ["A São Gonçalo híd nemzeti emlékmű.", "Híres a fallikus süteményeiről, a 'doces fálicos'-ról.", "Amadeo de Souza-Cardoso festő szülőhelye."],
      ro: ["Podul São Gonçalo este un monument național.", "Renumit pentru prăjiturile sale falice, 'doces fálicos'.", "Locul de naștere al pictorului Amadeo de Souza-Cardoso."],
      en: ["The São Gonçalo Bridge is a national monument.", "Famous for its phallic-shaped cakes, 'doces fálicos'.", "Birthplace of the painter Amadeo de Souza-Cardoso."]
    }
  },
  {
    id: "city-vila-do-conde-extra",
    type: "city",
    parent: "PT-13",
    coords: [-8.7479, 41.3539],
    name: { de: "Vila do Conde", hu: "Vila do Conde", ro: "Vila do Conde", en: "Vila do Conde" },
    description: {
      de: "Eine Küstenstadt mit einer reichen maritimen Geschichte, die für den Schiffbau und die Spitzenklöppelei bekannt ist.",
      hu: "Tengerparti város gazdag tengerészeti múlttal, híres a hajóépítésről és a csipkeverésről.",
      ro: "Un oraș de coastă cu o istorie maritimă bogată, renumit pentru construcția de nave și dantelăria sa.",
      en: "A coastal city with a rich maritime history, known for shipbuilding and its bobbin lace."
    },
    facts: {
      de: ["Das Kloster Santa Clara ist ein Wahrzeichen der Stadt.", "Eine Nachbildung eines Schiffes aus dem 16. Jahrhundert (Nau Quinhentista) liegt im Hafen.", "Veranstaltet ein bedeutendes internationales Kurzfilmfestival."],
      hu: ["A Santa Clara kolostor a város egyik jelképe.", "Egy 16. századi hajó másolata (Nau Quinhentista) horgonyoz a kikötőben.", "Jelentős nemzetközi rövidfilmfesztiválnak ad otthont."],
      ro: ["Mănăstirea Santa Clara este un punct de reper al orașului.", "O replică a unei nave din secolul al XVI-lea (Nau Quinhentista) este ancorată în port.", "Găzduiește un important festival internațional de film de scurt metraj."],
      en: ["The Santa Clara Monastery is a landmark of the city.", "A replica 16th-century ship (Nau Quinhentista) is docked in the harbor.", "Hosts a major international short film festival."]
    }
  },
  {
    id: "city-caldas-da-rainha-extra",
    type: "city",
    parent: "PT-10",
    coords: [-9.1352, 39.4039],
    name: { de: "Caldas da Rainha", hu: "Caldas da Rainha", ro: "Caldas da Rainha", en: "Caldas da Rainha" },
    description: {
      de: "Eine Kurstadt, die für ihre schwefelhaltigen Quellen und ihre unverwechselbare Keramik im Bordallo-Pinheiro-Stil bekannt ist.",
      hu: "Egy fürdőváros, amely kénes forrásairól és jellegzetes Bordallo Pinheiro stílusú kerámiáiról ismert.",
      ro: "Un oraș balnear renumit pentru izvoarele sale sulfuroase și ceramica distinctivă în stil Bordallo Pinheiro.",
      en: "A spa town famous for its sulphurous springs and its distinctive Bordallo Pinheiro-style ceramics."
    },
    facts: {
      de: ["Gegründet von Königin Leonor im 15. Jahrhundert.", "Das Keramikmuseum (Museu de Cerâmica) zeigt lokale Kunsthandwerke.", "Veranstaltet täglich einen Obst- und Gemüsemarkt im Freien (Praça da Fruta)."],
      hu: ["Leonor királynő alapította a 15. században.", "A Kerámia Múzeum (Museu de Cerâmica) helyi kézműves termékeket mutat be.", "Naponta szabadtéri gyümölcs- és zöldségpiacot tart (Praça da Fruta)."],
      ro: ["Fondat de regina Leonor în secolul al XV-lea.", "Muzeul de Ceramică prezintă meșteșuguri locale.", "Găzduiește o piață zilnică de fructe și legume în aer liber (Praça da Fruta)."],
      en: ["Founded by Queen Leonor in the 15th century.", "The Ceramics Museum (Museu de Cerâmica) showcases local crafts.", "Holds a daily open-air fruit and vegetable market (Praça da Fruta)."]
    }
  },
  {
    id: "city-barcelos-extra",
    type: "city",
    parent: "PT-03",
    coords: [-8.6151, 41.5385],
    name: { de: "Barcelos", hu: "Barcelos", ro: "Barcelos", en: "Barcelos" },
    description: {
      de: "Eine Stadt, die eng mit der Legende des Hahns von Barcelos verbunden ist, einem Symbol Portugals. Bekannt für ihren Töpfermarkt.",
      hu: "Egy város, amely szorosan kapcsolódik a Barcelos-i kakas legendájához, Portugália szimbólumához. Híres a fazekaspiacáról.",
      ro: "Un oraș strâns legat de legenda Cocoșului din Barcelos, un simbol al Portugaliei. Cunoscut pentru târgul său de ceramică.",
      en: "A city closely associated with the legend of the Rooster of Barcelos, a symbol of Portugal. Known for its pottery market."
    },
    facts: {
      de: ["Veranstaltet einen der größten Wochenmärkte in Portugal.", "Der Hahn von Barcelos symbolisiert Glück und Gerechtigkeit.", "Ein wichtiges Zentrum für handwerkliche Keramik."],
      hu: ["Portugália egyik legnagyobb heti piacát rendezi.", "A Barcelos-i kakas a szerencsét és az igazságosságot szimbolizálja.", "A kézműves kerámia fontos központja."],
      ro: ["Găzduiește una dintre cele mai mari piețe săptămânale din Portugalia.", "Cocoșul din Barcelos simbolizează norocul și justiția.", "Un centru important pentru ceramica artizanală."],
      en: ["Holds one of the largest weekly markets in Portugal.", "The Rooster of Barcelos symbolizes good luck and justice.", "An important center for artisan ceramics."]
    }
  },
  {
    id: "city-miranda-do-douro-extra",
    type: "city",
    parent: "PT-04",
    coords: [-6.2731, 41.4947],
    name: { de: "Miranda do Douro", hu: "Miranda do Douro", ro: "Miranda do Douro", en: "Miranda do Douro" },
    description: {
      de: "Eine Stadt mit Blick auf den Douro-Fluss an der Grenze zu Spanien, in der eine eigene Sprache, Mirandes, gesprochen wird.",
      hu: "Egy város, amely a Douro folyóra néz a spanyol határon, ahol saját nyelvet, a mirandézt beszélik.",
      ro: "Un oraș cu vedere la râul Douro, la granița cu Spania, unde se vorbește o limbă proprie, mirandeza.",
      en: "A city overlooking the Douro River on the border with Spain, where its own language, Mirandese, is spoken."
    },
    facts: {
      de: ["Mirandes ist eine anerkannte Co-Amtssprache in dieser Region.", "Berühmt für die traditionellen Pauliteiros-Tänzer.", "Die Kathedrale von Miranda do Douro war einst der Bischofssitz."],
      hu: ["A mirandéz elismert hivatalos nyelv ebben a régióban.", "Híres a hagyományos Pauliteiros táncosokról.", "A Miranda do Douro-i katedrális egykor püspöki székhely volt."],
      ro: ["Mirandeza este o limbă co-oficială recunoscută în această regiune.", "Renumit pentru dansatorii tradiționali Pauliteiros.", "Catedrala din Miranda do Douro a fost odată sediul episcopiei."],
      en: ["Mirandese is a recognized co-official language in this region.", "Famous for the traditional Pauliteiros dancers.", "The Miranda do Douro Cathedral was once the seat of the diocese."]
    }
  },
  {
    id: "city-albufeira-extra",
    type: "city",
    parent: "PT-08",
    coords: [-8.2505, 37.0891],
    name: { de: "Albufeira", hu: "Albufeira", ro: "Albufeira", en: "Albufeira" },
    description: {
      de: "Einst ein Fischerdorf, heute einer der größten Ferienorte an der Algarve, bekannt für seine Strände und sein pulsierendes Nachtleben.",
      hu: "Valaha halászfalu volt, ma az Algarve egyik legnagyobb üdülőhelye, híres a strandjairól és pezsgő éjszakai életéről.",
      ro: "Odinioară un sat pescăresc, acum una dintre cele mai mari stațiuni din Algarve, renumită pentru plajele și viața de noapte vibrantă.",
      en: "Once a fishing village, now one of the Algarve's largest resorts, known for its beaches and vibrant nightlife."
    },
    facts: {
      de: ["Der 'Strip' ist ein Zentrum für Bars, Clubs und Restaurants.", "Die Altstadt hat ihren traditionellen Charme bewahrt.", "Bietet eine große Auswahl an Stränden, von belebten bis hin zu abgelegenen Buchten."],
      hu: ["A 'Strip' a bárok, klubok és éttermek központja.", "Az óváros megőrizte hagyományos varázsát.", "Széles strandválasztékot kínál, a nyüzsgőktől az eldugott öblökig."],
      ro: ["'The Strip' este un centru pentru baruri, cluburi și restaurante.", "Orașul vechi își păstrează farmecul tradițional.", "Oferă o gamă largă de plaje, de la golfuri aglomerate la cele izolate."],
      en: ["'The Strip' is a hub for bars, clubs, and restaurants.", "The Old Town retains its traditional charm.", "Offers a wide variety of beaches, from busy strips to secluded coves."]
    }
  },
  {
    id: "city-lagos-extra",
    type: "city",
    parent: "PT-08",
    coords: [-8.673, 37.1028],
    name: { de: "Lagos", hu: "Lagos", ro: "Lagos", en: "Lagos" },
    description: {
      de: "Eine historische Stadt an der Algarve mit einer ummauerten Altstadt, die eine wichtige Rolle im Zeitalter der Entdeckungen Portugals spielte.",
      hu: "Történelmi város az Algarve-parton, fallal körülvett óvárossal, amely fontos szerepet játszott Portugália felfedezéseinek korában.",
      ro: "Un oraș istoric din Algarve, cu un centru vechi înconjurat de ziduri, care a jucat un rol important în Epoca Descoperirilor din Portugalia.",
      en: "A historic Algarve town with a walled old town, which played an important role in Portugal's Age of Discovery."
    },
    facts: {
      de: ["Bekannt für seine beeindruckenden Felsformationen, wie Ponta da Piedade.", "Der erste Sklavenmarkt Europas befand sich hier.", "Ein beliebter Ort für Bootsfahrten zur Erkundung der Grotten."],
      hu: ["Híres lenyűgöző sziklaalakzatairól, mint például a Ponta da Piedade.", "Itt volt Európa első rabszolgapiaca.", "Népszerű hely a barlangok felfedezésére induló hajókirándulásokhoz."],
      ro: ["Cunoscut pentru formațiunile sale stâncoase impresionante, cum ar fi Ponta da Piedade.", "Prima piață de sclavi din Europa a fost situată aici.", "Un loc popular pentru excursii cu barca pentru a explora grotele."],
      en: ["Known for its impressive rock formations, like Ponta da Piedade.", "Europe's first slave market was located here.", "A popular spot for boat trips to explore the grottoes."]
    }
  },
  {
    id: "city-vilamoura-extra",
    type: "city",
    parent: "PT-08",
    coords: [-8.1158, 37.0782],
    name: { de: "Vilamoura", hu: "Vilamoura", ro: "Vilamoura", en: "Vilamoura" },
    description: {
      de: "Ein großer, speziell errichteter Luxusferienort, der für seinen Jachthafen, seine Golfplätze und sein Casino bekannt ist.",
      hu: "Egy nagy, célzottan épített luxusüdülőhely, amely a kikötőjéről, golfpályáiról és kaszinójáról ismert.",
      ro: "O stațiune de lux mare, construită special, renumită pentru portul său de agrement, terenurile de golf și cazinoul.",
      en: "A large, purpose-built luxury resort known for its marina, golf courses, and casino."
    },
    facts: {
      de: ["Einer der größten Freizeitkomplexe in Europa.", "Der Jachthafen ist der größte in Portugal.", "Veranstaltet internationale Reit- und Golfturniere."],
      hu: ["Európa egyik legnagyobb szabadidős komplexuma.", "A kikötője a legnagyobb Portugáliában.", "Nemzetközi lovas- és golfversenyeknek ad otthont."],
      ro: ["Unul dintre cele mai mari complexe de agrement din Europa.", "Portul de agrement este cel mai mare din Portugalia.", "Găzduiește competiții ecvestre și de golf internaționale."],
      en: ["One of the largest leisure complexes in Europe.", "The marina is the largest in Portugal.", "Hosts international equestrian and golf competitions."]
    }
  },
  {
    id: "city-queluz-extra",
    type: "city",
    parent: "PT-11",
    coords: [-9.255, 38.7565],
    name: { de: "Queluz", hu: "Queluz", ro: "Queluz", en: "Queluz" },
    description: {
      de: "Eine Stadt in der Gemeinde Sintra, berühmt für den Nationalpalast von Queluz aus dem 18. Jahrhundert, eine ehemalige königliche Residenz.",
      hu: "Sintra településen található város, híres a 18. századi Queluz-i Nemzeti Palotáról, egykori királyi rezidenciáról.",
      ro: "Un oraș din municipalitatea Sintra, renumit pentru Palatul Național Queluz din secolul al XVIII-lea, o fostă reședință regală.",
      en: "A city in the municipality of Sintra, famous for the 18th-century Queluz National Palace, a former royal residence."
    },
    facts: {
      de: ["Der Palast wird oft als das 'portugiesische Versailles' bezeichnet.", "Dient als Residenz für ausländische Staatschefs, die Portugal besuchen.", "Die Gärten des Palastes sind ein wichtiges Beispiel für Landschaftsgestaltung."],
      hu: ["A palotát gyakran 'a portugál Versailles'-nak nevezik.", "A Portugáliába látogató külföldi államfők rezidenciájaként szolgál.", "A palota kertjei a tájépítészet fontos példái."],
      ro: ["Palatul este adesea numit 'Versailles-ul portughez'.", "Servește ca reședință pentru șefii de stat străini care vizitează Portugalia.", "Grădinile palatului sunt un exemplu important de amenajare peisagistică."],
      en: ["The palace is often called the 'Portuguese Versailles'.", "Serves as a residence for foreign heads of state visiting Portugal.", "The palace gardens are an important example of landscape design."]
    }
  },
  {
    id: "city-matosinhos-extra",
    type: "city",
    parent: "PT-13",
    coords: [-8.6947, 41.1843],
    name: { de: "Matosinhos", hu: "Matosinhos", ro: "Matosinhos", en: "Matosinhos" },
    description: {
      de: "Eine große Hafenstadt neben Porto, berühmt für ihre Fisch- und Meeresfrüchterestaurants.",
      hu: "Nagy kikötőváros Porto mellett, híres a hal- és tengeri herkentyűs éttermeiről.",
      ro: "Un oraș portuar important lângă Porto, renumit pentru restaurantele sale cu pește și fructe de mare.",
      en: "A major port city next to Porto, famous for its fish and seafood restaurants."
    },
    facts: {
      de: ["Der Hafen von Leixões ist einer der größten Seehäfen Portugals.", "Bekannt für das 'Denkmal der Tragödie auf See', das ertrunkene Fischer ehrt.", "Die Strände sind bei Surfern und Strandgängern beliebt."],
      hu: ["A Leixões-i kikötő Portugália egyik legnagyobb tengeri kikötője.", "Híres a 'Tengeri tragédia emlékművéről', amely a vízbe fúlt halászoknak állít emléket.", "A strandjai népszerűek a szörfösök és strandolók körében."],
      ro: ["Portul Leixões este unul dintre cele mai mari porturi maritime din Portugalia.", "Cunoscut pentru 'Monumentul Tragediei pe Mare', care onorează pescarii înecați.", "Plajele sale sunt populare printre surferi și iubitorii de plajă."],
      en: ["The Port of Leixões is one of Portugal's largest seaports.", "Known for the 'Monument to the Tragedy at Sea', honoring drowned fishermen.", "Its beaches are popular with surfers and beachgoers."]
    }
  }
];
