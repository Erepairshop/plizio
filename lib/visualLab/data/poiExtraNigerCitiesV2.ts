import type { POI } from "./poi";

export const poiExtraNigerCitiesV2: POI[] = [
  {
    id: "niamey-cities-v2",
    type: "state-capital",
    parent: "NE-8",
    coords: [2.1098, 13.5116],
    name: { de: "Niamey", hu: "Niamey", ro: "Niamey", en: "Niamey" },
    description: {
      de: "Die geschäftige Hauptstadt Nigers breitet sich entlang des Flusses aus und ist das unbestrittene politische Zentrum.",
      hu: "Niger nyüzsgő fővárosa a folyó mentén terül el, és az ország vitathatatlan politikai központja.",
      ro: "Capitala animată a Nigerului se întinde de-a lungul fluviului și este centrul politic incontestabil.",
      en: "The bustling capital of Niger spreads along the river and is the undisputed political center."
    },
    facts: {
      de: ["Größte Metropole des Landes.", "Sitz der Regierung."],
      hu: ["Az ország legnagyobb metropolisza.", "A kormány székhelye."],
      ro: ["Cea mai mare metropolă din țară.", "Sediul guvernului."],
      en: ["Largest metropolis in the country.", "Seat of the government."]
    }
  },
  {
    id: "zinder-cities-v2",
    type: "city",
    parent: "NE-7",
    coords: [8.9881, 13.8052],
    name: { de: "Zinder", hu: "Zinder", ro: "Zinder", en: "Zinder" },
    description: {
      de: "Eine historisch bedeutsame Stadt im Süden, die für ihre traditionelle Architektur und den Sultanspalast berühmt ist.",
      hu: "Történelmileg jelentős város délen, amely hagyományos építészetéről és a szultáni palotáról híres.",
      ro: "Un oraș cu o istorie bogată în sud, faimos pentru arhitectura sa tradițională și palatul sultanului.",
      en: "A historically significant city in the south, famous for its traditional architecture and the Sultan's Palace."
    },
    facts: {
      de: ["Ehemalige Hauptstadt vor Niamey.", "Wichtiger Handelsplatz für Erdnüsse."],
      hu: ["Korábbi főváros Niamey előtt.", "Fontos földimogyoró-kereskedelmi központ."],
      ro: ["Fosta capitală înainte de Niamey.", "Piață importantă pentru arahide."],
      en: ["Former capital before Niamey.", "Important trading post for peanuts."]
    }
  },
  {
    id: "maradi-cities-v2",
    type: "city",
    parent: "NE-4",
    coords: [7.1017, 13.5000],
    name: { de: "Maradi", hu: "Maradi", ro: "Maradi", en: "Maradi" },
    description: {
      de: "Das wirtschaftliche Herz der südlichen Grenzregion ist ein blühendes Handelszentrum in der Nähe zu Nigeria.",
      hu: "A déli határvidék gazdasági szíve egy virágzó kereskedelmi központ Nigéria közelében.",
      ro: "Inima economică a regiunii de graniță din sud este un centru comercial înfloritor, aproape de Nigeria.",
      en: "The economic heart of the southern border region is a thriving trade center close to Nigeria."
    },
    facts: {
      de: ["Drittgrößte Siedlung in Niger.", "Bekannt für den Anbau von Getreide."],
      hu: ["Harmadik legnagyobb település Nigerben.", "Gabonatermesztéséről ismert."],
      ro: ["A treia cea mai mare așezare din Niger.", "Cunoscut pentru cultivarea cerealelor."],
      en: ["Third largest settlement in Niger.", "Known for cereal cultivation."]
    }
  },
  {
    id: "tahoua-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [5.2692, 14.8888],
    name: { de: "Tahoua", hu: "Tahoua", ro: "Tahoua", en: "Tahoua" },
    description: {
      de: "Ein wichtiger Knotenpunkt für den Handel zwischen den Wüstenregionen im Norden und dem fruchtbaren Süden.",
      hu: "Fontos csomópont az északi sivatagi régiók és a termékeny dél közötti kereskedelemben.",
      ro: "Un nod important pentru comerțul dintre regiunile deșertice din nord și sudul fertil.",
      en: "A major hub for trade between the northern desert regions and the fertile south."
    },
    facts: {
      de: ["Zentrum der lokalen Landwirtschaft.", "Kreuzungspunkt nomadisierender Völker."],
      hu: ["A helyi mezőgazdaság központja.", "Nomád népek találkozási pontja."],
      ro: ["Centrul agriculturii locale.", "Punct de intersecție a popoarelor nomade."],
      en: ["Center of local agriculture.", "Crossroads of nomadic peoples."]
    }
  },
  {
    id: "agadez-cities-v2",
    type: "city",
    parent: "NE-1",
    coords: [7.9697, 16.9692],
    name: { de: "Agadez", hu: "Agadez", ro: "Agadez", en: "Agadez" },
    description: {
      de: "Die legendäre Wüstenstadt dient als Tor zur weiten Sahara und beeindruckt mit uralten Lehmmoscheen.",
      hu: "A legendás sivatagi város a hatalmas Szahara kapujaként szolgál, és ősi vályogmecseteivel lenyűgözi a látogatókat.",
      ro: "Legendarul oraș din deșert servește drept poartă către vasta Sahara și impresionează cu moscheile sale antice de lut.",
      en: "The legendary desert city serves as a gateway to the vast Sahara and impresses with ancient mud mosques."
    },
    facts: {
      de: ["Historisches Tuareg-Zentrum.", "Die Altstadt ist Weltkulturerbe."],
      hu: ["Történelmi tuareg központ.", "Az óváros világörökségi helyszín."],
      ro: ["Centru istoric al tuaregilor.", "Orașul vechi este patrimoniu mondial."],
      en: ["Historic Tuareg center.", "The old town is a World Heritage site."]
    }
  },
  {
    id: "arlit-cities-v2",
    type: "city",
    parent: "NE-1",
    coords: [7.3853, 18.7369],
    name: { de: "Arlit", hu: "Arlit", ro: "Arlit", en: "Arlit" },
    description: {
      de: "Die Industriestadt im rauen Norden entstand durch den Abbau von Uranvorkommen in der Wüstenlandschaft.",
      hu: "A zord északon található iparváros a sivatagi tájban rejlő uránkészletek kitermelése révén jött létre.",
      ro: "Orașul industrial din nordul aspru a apărut datorită exploatării zăcămintelor de uraniu din peisajul deșertic.",
      en: "The industrial town in the harsh north emerged from the mining of uranium deposits in the desert landscape."
    },
    facts: {
      de: ["Geprägt durch Bergbau.", "Liegt mitten im Aïr-Massiv."],
      hu: ["A bányászat határozza meg.", "Az Aïr-hegység közepén fekszik."],
      ro: ["Marcar de minerit.", "Situat în mijlocul masivului Aïr."],
      en: ["Characterized by mining.", "Located in the middle of the Aïr massif."]
    }
  },
  {
    id: "dosso-cities-v2",
    type: "city",
    parent: "NE-3",
    coords: [3.1937, 13.0490],
    name: { de: "Dosso", hu: "Dosso", ro: "Dosso", en: "Dosso" },
    description: {
      de: "Ein kulturell reiches Zentrum im Südwesten, das tief in den vorkolonialen Traditionen verwurzelt ist.",
      hu: "Kulturálisan gazdag központ délnyugaton, amely mélyen gyökerezik a gyarmatosítás előtti hagyományokban.",
      ro: "Un centru bogat cultural în sud-vest, adânc înrădăcinat în tradițiile precoloniale.",
      en: "A culturally rich center in the southwest, deeply rooted in pre-colonial traditions."
    },
    facts: {
      de: ["Historischer Herrschersitz.", "Bedeutend für islamische Gelehrte."],
      hu: ["Történelmi uralkodói székhely.", "Jelentős az iszlám tudósok számára."],
      ro: ["Sediul istoric al conducătorilor.", "Important pentru învățații islamici."],
      en: ["Historic seat of rulers.", "Significant for Islamic scholars."]
    }
  },
  {
    id: "diffa-cities-v2",
    type: "city",
    parent: "NE-2",
    coords: [12.6113, 13.3153],
    name: { de: "Diffa", hu: "Diffa", ro: "Diffa", en: "Diffa" },
    description: {
      de: "Die östlichste Metropole des Landes liegt strategisch nah an der Grenze zu Nigeria und dem Tschadsee.",
      hu: "Az ország legkeletibb metropolisza stratégiailag közel fekszik a nigériai határhoz és a Csád-tóhoz.",
      ro: "Cea mai estică metropolă a țării este situată strategic aproape de granița cu Nigeria și de Lacul Ciad.",
      en: "The easternmost metropolis of the country is strategically located near the border with Nigeria and Lake Chad."
    },
    facts: {
      de: ["Regionales Verwaltungszentrum.", "Geprägt durch Transithandel."],
      hu: ["Regionális közigazgatási központ.", "Tranzitkereskedelem jellemzi."],
      ro: ["Centru administrativ regional.", "Caracterizat prin comerțul de tranzit."],
      en: ["Regional administrative center.", "Characterized by transit trade."]
    }
  },
  {
    id: "birni-nkonni-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [5.2502, 13.7959],
    name: { de: "Birni-Nkonni", hu: "Birni-Nkonni", ro: "Birni-Nkonni", en: "Birni-Nkonni" },
    description: {
      de: "Eine lebendige Grenzstadt, die stark vom florierenden Austausch von landwirtschaftlichen Produkten profitiert.",
      hu: "Élénk határváros, amely erősen profitál a mezőgazdasági termékek virágzó cseréjéből.",
      ro: "Un oraș de graniță plin de viață, care profită masiv din schimbul înfloritor de produse agricole.",
      en: "A vibrant border town that benefits greatly from the flourishing exchange of agricultural products."
    },
    facts: {
      de: ["Wichtiger Transitpunkt.", "Liegt im Tal des Maggia."],
      hu: ["Fontos tranzitpont.", "A Maggia völgyében fekszik."],
      ro: ["Punct de tranzit important.", "Situat în valea Maggia."],
      en: ["Important transit point.", "Located in the Maggia valley."]
    }
  },
  {
    id: "tessaoua-cities-v2",
    type: "city",
    parent: "NE-4",
    coords: [7.9874, 13.7573],
    name: { de: "Tessaoua", hu: "Tessaoua", ro: "Tessaoua", en: "Tessaoua" },
    description: {
      de: "Einst ein mächtiges lokales Fürstentum, ist dieser Ort heute ein ruhiges Zentrum für Getreidebauern.",
      hu: "Egykor hatalmas helyi fejedelemség volt, ez a település ma a gabonatermesztők csendes központja.",
      ro: "Odinioară un principat local puternic, acest loc este astăzi un centru liniștit pentru cultivatorii de cereale.",
      en: "Once a powerful local principality, this place is now a quiet center for grain farmers."
    },
    facts: {
      de: ["Historisches Handelszentrum.", "Bekannt für lokale Handwerkskunst."],
      hu: ["Történelmi kereskedelmi központ.", "Helyi kézművességéről ismert."],
      ro: ["Centru comercial istoric.", "Cunoscut pentru meșteșugurile locale."],
      en: ["Historical trade center.", "Known for local craftsmanship."]
    }
  },
  {
    id: "dogondoutchi-cities-v2",
    type: "city",
    parent: "NE-3",
    coords: [4.0287, 13.6393],
    name: { de: "Dogondoutchi", hu: "Dogondoutchi", ro: "Dogondoutchi", en: "Dogondoutchi" },
    description: {
      de: "Eine malerische Kleinstadt, die durch trockene Täler und von Bäumen gesäumte Straßen charakterisiert ist.",
      hu: "Festői kisváros, amelyet száraz völgyek és fákkal szegélyezett utcák jellemeznek.",
      ro: "Un mic oraș pitoresc, caracterizat de văi uscate și străzi străjuite de copaci.",
      en: "A picturesque small town characterized by dry valleys and tree-lined streets."
    },
    facts: {
      de: ["Kultureller Schmelztiegel.", "Oft als Doutchi bezeichnet."],
      hu: ["Kulturális olvasztótégely.", "Gyakran Doutchi néven emlegetik."],
      ro: ["Creuzet cultural.", "Adesea denumit Doutchi."],
      en: ["Cultural melting pot.", "Often referred to as Doutchi."]
    }
  },
  {
    id: "gaya-cities-v2",
    type: "city",
    parent: "NE-3",
    coords: [3.4492, 11.8844],
    name: { de: "Gaya", hu: "Gaya", ro: "Gaya", en: "Gaya" },
    description: {
      de: "Direkt am Ufer des Niger positioniert, profitiert dieser Ort stark vom Grenzverkehr mit Benin.",
      hu: "Közvetlenül a Niger partján fekszik, és ez a település nagymértékben profitál a Beninnel folyó határforgalomból.",
      ro: "Situat chiar pe malul fluviului Niger, acest loc profită masiv de traficul de frontieră cu Beninul.",
      en: "Positioned right on the banks of the Niger, this place benefits greatly from border traffic with Benin."
    },
    facts: {
      de: ["Grenzübergang zu Benin.", "Wichtig für die Flussschifffahrt."],
      hu: ["Határátkelő Benin felé.", "Fontos a folyami hajózás számára."],
      ro: ["Punct de trecere a frontierei cu Benin.", "Important pentru navigația fluvială."],
      en: ["Border crossing to Benin.", "Important for river navigation."]
    }
  },
  {
    id: "madaoua-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [5.9600, 14.0730],
    name: { de: "Madaoua", hu: "Madaoua", ro: "Madaoua", en: "Madaoua" },
    description: {
      de: "Inmitten einer wichtigen Agrarzone gelegen, ist diese Ortschaft berühmt für ihren Zwiebelanbau.",
      hu: "Egy fontos agrármarózóna közepén található, és ez a település hagyma termesztéséről híres.",
      ro: "Situată în mijlocul unei importante zone agricole, această localitate este faimoasă pentru cultivarea cepei.",
      en: "Located in the middle of an important agricultural zone, this town is famous for its onion cultivation."
    },
    facts: {
      de: ["Agrarisches Versorgungszentrum.", "Hohe Produktion von Gemüse."],
      hu: ["Agrárellátó központ.", "Magas zöldségtermelés."],
      ro: ["Centru de aprovizionare agricolă.", "Producție ridicată de legume."],
      en: ["Agricultural supply center.", "High vegetable production."]
    }
  },
  {
    id: "mayahi-cities-v2",
    type: "city",
    parent: "NE-4",
    coords: [7.6712, 13.9553],
    name: { de: "Mayahi", hu: "Mayahi", ro: "Mayahi", en: "Mayahi" },
    description: {
      de: "Eine wachsende Gemeinde, in der traditionelle Landwirtschaft und lokale Viehzucht die lokale Ökonomie antreiben.",
      hu: "Növekvő közösség, ahol a hagyományos mezőgazdaság és a helyi állattenyésztés hajtja a helyi gazdaságot.",
      ro: "O comunitate în creștere, unde agricultura tradițională și creșterea animalelor locale stimulează economia.",
      en: "A growing community where traditional agriculture and local livestock farming drive the local economy."
    },
    facts: {
      de: ["Zentrum für Hirten.", "Bekannt für dörfliche Märkte."],
      hu: ["Pásztorok központja.", "Falusi piacairól ismert."],
      ro: ["Centru pentru păstori.", "Cunoscut pentru piețele sătești."],
      en: ["Center for herders.", "Known for village markets."]
    }
  },
  {
    id: "tera-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [0.7531, 14.0078],
    name: { de: "Téra", hu: "Téra", ro: "Téra", en: "Téra" },
    description: {
      de: "Eine ruhige Ortschaft im äußersten Westen des Landes, nahe der Grenze zu Burkina Faso.",
      hu: "Csendes település az ország legnyugatibb részén, Burkina Faso határának közelében.",
      ro: "O localitate liniștită în extremitatea vestică a țării, aproape de granița cu Burkina Faso.",
      en: "A quiet town in the far west of the country, near the border with Burkina Faso."
    },
    facts: {
      de: ["Nahe an Sahel-Wasserstellen.", "Ort lokaler Entwicklungsprojekte."],
      hu: ["Közel a száheli vízlelőhelyekhez.", "Helyi fejlesztési projektek helyszíne."],
      ro: ["Aproape de sursele de apă din Sahel.", "Locul proiectelor de dezvoltare locală."],
      en: ["Close to Sahel waterholes.", "Site of local development projects."]
    }
  },
  {
    id: "mirriah-cities-v2",
    type: "city",
    parent: "NE-7",
    coords: [9.1501, 13.7073],
    name: { de: "Mirriah", hu: "Mirriah", ro: "Mirriah", en: "Mirriah" },
    description: {
      de: "Dieses historische Dorf hat sich zu einer modernen Verwaltungseinheit mit starkem Fokus auf Landwirtschaft entwickelt.",
      hu: "Ez a történelmi falu egy modern közigazgatási egységgé fejlődött, erős mezőgazdasági fókusszal.",
      ro: "Acest sat istoric s-a dezvoltat într-o unitate administrativă modernă, cu un accent puternic pe agricultură.",
      en: "This historic village has developed into a modern administrative unit with a strong focus on agriculture."
    },
    facts: {
      de: ["Umschlagplatz für Hirse.", "Reiche dörfliche Architektur."],
      hu: ["Köleselosztó központ.", "Gazdag falusi építészet."],
      ro: ["Centru de distribuție pentru mei.", "Arhitectură rurală bogată."],
      en: ["Distribution center for millet.", "Rich village architecture."]
    }
  },
  {
    id: "tibiri-cities-v2",
    type: "city",
    parent: "NE-4",
    coords: [7.0485, 13.5627],
    name: { de: "Tibiri", hu: "Tibiri", ro: "Tibiri", en: "Tibiri" },
    description: {
      de: "Eine kompakte Ansiedlung im landwirtschaftlichen Herzen Nigers, die eng mit der Nachbarstadt Maradi verbunden ist.",
      hu: "Kompakt település Niger mezőgazdasági szívében, amely szorosan kapcsolódik a szomszédos Maradi városhoz.",
      ro: "O așezare compactă în inima agricolă a Nigerului, strâns legată de orașul vecin Maradi.",
      en: "A compact settlement in the agricultural heart of Niger, closely connected to the neighboring city of Maradi."
    },
    facts: {
      de: ["Historischer Königssitz.", "Traditionelle Lebensweise überwiegt."],
      hu: ["Történelmi királyi székhely.", "A hagyományos életmód dominál."],
      ro: ["Sediul regal istoric.", "Modul de viață tradițional predomină."],
      en: ["Historic royal seat.", "Traditional lifestyle prevails."]
    }
  },
  {
    id: "tillaberi-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [1.5328, 14.2071],
    name: { de: "Tillabéri", hu: "Tillabéri", ro: "Tillabéri", en: "Tillabéri" },
    description: {
      de: "Als Tor zur Sahelzone bietet diese Stadt am Nigerufer grüne Reisfelder inmitten trockener Gebiete.",
      hu: "A Száhel-övezet kapujaként ez a Niger-parti város zöld rizsföldeket kínál a száraz területek közepén.",
      ro: "Ca poartă către Sahel, acest oraș de pe malul Nigerului oferă câmpuri verzi de orez în mijlocul zonelor uscate.",
      en: "As the gateway to the Sahel, this city on the banks of the Niger offers green rice fields amidst dry areas."
    },
    facts: {
      de: ["Zentrum für Reisanbau.", "Wichtige Flussoase."],
      hu: ["Rizstermesztési központ.", "Fontos folyami oázis."],
      ro: ["Centru pentru cultivarea orezului.", "Oază fluvială importantă."],
      en: ["Center for rice cultivation.", "Important river oasis."]
    }
  },
  {
    id: "magaria-cities-v2",
    type: "city",
    parent: "NE-7",
    coords: [8.9099, 12.9983],
    name: { de: "Magaria", hu: "Magaria", ro: "Magaria", en: "Magaria" },
    description: {
      de: "Nahe der nigerianischen Grenze gelegen, floriert dieser Ort durch den konstanten Austausch von Handelswaren.",
      hu: "A nigériai határ közelében található település a kereskedelmi áruk folyamatos cseréje révén virágzik.",
      ro: "Situat aproape de granița cu Nigeria, acest loc înflorește prin schimbul constant de mărfuri.",
      en: "Located near the Nigerian border, this place flourishes through the constant exchange of commercial goods."
    },
    facts: {
      de: ["Grenzhandel prägt das Leben.", "Bedeutend für Erdnussexport."],
      hu: ["A határkereskedelem alakítja az életet.", "Jelentős a földimogyoró-export szempontjából."],
      ro: ["Comerțul de frontieră modelează viața.", "Important pentru exportul de arahide."],
      en: ["Border trade shapes daily life.", "Significant for peanut exports."]
    }
  },
  {
    id: "dakoro-cities-v2",
    type: "city",
    parent: "NE-4",
    coords: [6.7650, 14.5106],
    name: { de: "Dakoro", hu: "Dakoro", ro: "Dakoro", en: "Dakoro" },
    description: {
      de: "Eine entlegene Kommune, die von pastoralen Traditionen lebt und große Herden von Nutztieren beherbergt.",
      hu: "Félreeső település, amely pásztorhagyományokból él, és nagy haszonállat-csordáknak ad otthont.",
      ro: "O comună izolată care trăiește din tradiții pastorale și adăpostește turme mari de animale.",
      en: "A remote commune that lives on pastoral traditions and houses large herds of livestock."
    },
    facts: {
      de: ["Knotenpunkt für Viehhändler.", "Umgeben von weiter Savanne."],
      hu: ["Állatkereskedők csomópontja.", "Széles szavanna veszi körül."],
      ro: ["Nod pentru comercianții de animale.", "Înconjurat de o savană vastă."],
      en: ["Hub for livestock traders.", "Surrounded by wide savanna."]
    }
  },
  {
    id: "nguigmi-cities-v2",
    type: "city",
    parent: "NE-2",
    coords: [13.1108, 14.2495],
    name: { de: "N'Guigmi", hu: "N'Guigmi", ro: "N'Guigmi", en: "N'Guigmi" },
    description: {
      de: "Die Oasenstadt im weiten Osten grenzt an die Ausläufer des schwindenden Tschadsees und bietet Zuflucht.",
      hu: "A távol-keleti oázisváros a zsugorodó Csád-tó nyúlványaihoz csatlakozik, és menedéket nyújt.",
      ro: "Orașul oază din estul îndepărtat se învecinează cu poalele lacului Ciad, aflat în scădere, și oferă refugiu.",
      en: "The oasis town in the far east borders the foothills of the shrinking Lake Chad and offers refuge."
    },
    facts: {
      de: ["Historischer Fischerort.", "Tor zur Wüste Ténéré."],
      hu: ["Történelmi halásztelepülés.", "A Ténéré-sivatag kapuja."],
      ro: ["Sat istoric de pescari.", "Poarta către deșertul Ténéré."],
      en: ["Historic fishing village.", "Gateway to the Ténéré desert."]
    }
  },
  {
    id: "matameye-cities-v2",
    type: "city",
    parent: "NE-7",
    coords: [8.4749, 13.4231],
    name: { de: "Matameye", hu: "Matameye", ro: "Matameye", en: "Matameye" },
    description: {
      de: "Dieses städtische Zentrum liegt eingebettet in fruchtbare Ebenen und ist ein Pfeiler der lokalen Versorgung.",
      hu: "Ez a termékeny síkságokba ágyazott városi központ a helyi ellátás egyik pillére.",
      ro: "Acest centru urban este cuibărit în câmpii fertile și reprezintă un pilon al aprovizionării locale.",
      en: "Nestled in fertile plains, this urban center is a pillar of the local food supply."
    },
    facts: {
      de: ["Schwerpunkt der Getreideernte.", "Einwohnerstarkes Gebiet."],
      hu: ["A gabonatermés központja.", "Sűrűn lakott terület."],
      ro: ["Centru al recoltei de cereale.", "Zonă dens populată."],
      en: ["Focus of the grain harvest.", "Densely populated area."]
    }
  },
  {
    id: "illela-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [5.2437, 14.4605],
    name: { de: "Illéla", hu: "Illéla", ro: "Illéla", en: "Illéla" },
    description: {
      de: "Ein markantes Handelsdorf, das sich durch seine dynamischen Freiluftmärkte einen Namen gemacht hat.",
      hu: "Kiemelkedő kereskedelmi falu, amely dinamikus szabadtéri piacai révén szerzett magának hírnevet.",
      ro: "Un sat comercial remarcabil, care și-a făcut un nume prin piețele sale dinamice în aer liber.",
      en: "A prominent commercial village that has made a name for itself through its dynamic open-air markets."
    },
    facts: {
      de: ["Bekannt für traditionelle Medizin.", "Regelmäßige Wochenmärkte."],
      hu: ["Hagyományos orvoslásáról ismert.", "Rendszeres heti piacok."],
      ro: ["Cunoscut pentru medicina tradițională.", "Piețe săptămânale regulate."],
      en: ["Known for traditional medicine.", "Regular weekly markets."]
    }
  },
  {
    id: "tanout-cities-v2",
    type: "city",
    parent: "NE-7",
    coords: [8.8879, 14.9709],
    name: { de: "Tanout", hu: "Tanout", ro: "Tanout", en: "Tanout" },
    description: {
      de: "Gelegen am Rande der Sahara, trotzt diese Siedlung den trockenen Winden mit widerstandsfähigen Kulturen.",
      hu: "A Szahara peremén fekvő település ellenálló növénykultúrákkal dacol a száraz szelekkel.",
      ro: "Situată la marginea Saharei, această așezare sfidează vânturile uscate cu culturi rezistente.",
      en: "Located on the edge of the Sahara, this settlement defies the dry winds with resilient crops."
    },
    facts: {
      de: ["Oase der Sahelzone.", "Kreuzung alter Karawanenwege."],
      hu: ["A Száhel-övezet oázisa.", "Régi karavánutak kereszteződése."],
      ro: ["Oază din Sahel.", "Intersecția vechilor rute de caravane."],
      en: ["Oasis of the Sahel.", "Crossroads of ancient caravan routes."]
    }
  },
  {
    id: "goure-cities-v2",
    type: "city",
    parent: "NE-7",
    coords: [10.2704, 13.9835],
    name: { de: "Gouré", hu: "Gouré", ro: "Gouré", en: "Gouré" },
    description: {
      de: "Umgeben von sanften Hügeln, bietet dieses abgelegene Zentrum der Agrarwirtschaft eine friedliche Atmosphäre.",
      hu: "A szelíd dombokkal körülvett, eldugott agráripari központ békés légkört kínál.",
      ro: "Înconjurat de dealuri domoale, acest centru agricol izolat oferă o atmosferă pașnică.",
      en: "Surrounded by rolling hills, this remote agricultural center offers a peaceful atmosphere."
    },
    facts: {
      de: ["Historisches Koutous-Gebiet.", "Landwirtschaftliches Rückzugsgebiet."],
      hu: ["Történelmi Koutous-terület.", "Mezőgazdasági menedékhely."],
      ro: ["Zonă istorică Koutous.", "Zonă agricolă de refugiu."],
      en: ["Historic Koutous area.", "Agricultural retreat area."]
    }
  },
  {
    id: "abalak-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [6.2793, 15.4509],
    name: { de: "Abalak", hu: "Abalak", ro: "Abalak", en: "Abalak" },
    description: {
      de: "Diese Gemeinde feiert das nomadische Erbe und ist alljährlich Gastgeber farbenfroher kultureller Zusammenkünfte.",
      hu: "Ez a közösség ünnepli a nomád örökséget, és minden évben színes kulturális összejöveteleknek ad otthont.",
      ro: "Această comunitate celebrează moștenirea nomadă și găzduiește anual adunări culturale colorate.",
      en: "This community celebrates the nomadic heritage and hosts colorful cultural gatherings every year."
    },
    facts: {
      de: ["Treffpunkt der Wodaabe.", "Bekannt für das Cure Salée Festival."],
      hu: ["A Wodaabe nép találkozóhelye.", "A Cure Salée fesztiválról ismert."],
      ro: ["Punct de întâlnire pentru Wodaabe.", "Cunoscut pentru festivalul Cure Salée."],
      en: ["Meeting point of the Wodaabe.", "Known for the Cure Salée festival."]
    }
  },
  {
    id: "aguie-cities-v2",
    type: "city",
    parent: "NE-4",
    coords: [7.7786, 13.5060],
    name: { de: "Aguié", hu: "Aguié", ro: "Aguié", en: "Aguié" },
    description: {
      de: "Ein stark bevölkerter Ort im Süden, der durch florierende Bauernmärkte und handwerkliche Betriebe auffällt.",
      hu: "Sűrűn lakott település délen, amely virágzó termelői piacokkal és kézműves vállalkozásokkal tűnik ki.",
      ro: "O localitate dens populată în sud, remarcată prin piețele agricole înfloritoare și meșteșugurile sale.",
      en: "A heavily populated place in the south, notable for its flourishing farmers' markets and artisanal businesses."
    },
    facts: {
      de: ["Lokaler Handwerksort.", "Zentrum ländlicher Entwicklung."],
      hu: ["Helyi kézműves központ.", "A vidékfejlesztés központja."],
      ro: ["Centru meșteșugăresc local.", "Centrul dezvoltării rurale."],
      en: ["Local craft village.", "Center of rural development."]
    }
  },
  {
    id: "ouallam-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [2.0862, 14.3165],
    name: { de: "Ouallam", hu: "Ouallam", ro: "Ouallam", en: "Ouallam" },
    description: {
      de: "Eine beschauliche Kleinstadt nördlich der Hauptstadt, die vorwiegend vom Hirtenwesen und Trockenfeldbau lebt.",
      hu: "Csendes kisváros a fővárostól északra, amely főként állattartásból és szárazgazdálkodásból él.",
      ro: "Un orășel liniștit la nord de capitală, care trăiește în principal din păstorit și agricultură uscată.",
      en: "A tranquil small town north of the capital, living primarily from herding and dry farming."
    },
    facts: {
      de: ["Traditionelle Viehzucht.", "Nah am Niamey-Metropolraum."],
      hu: ["Hagyományos állattenyésztés.", "Közel a niameyi nagyvárosi térséghez."],
      ro: ["Creșterea tradițională a animalelor.", "Aproape de zona metropolitană Niamey."],
      en: ["Traditional livestock farming.", "Close to the Niamey metropolitan area."]
    }
  },
  {
    id: "filingue-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [3.3168, 14.3521],
    name: { de: "Filingué", hu: "Filingué", ro: "Filingué", en: "Filingué" },
    description: {
      de: "Eingebettet in trockene Steppen, bewahrt diese Siedlung den ursprünglichen Lebensstil der Sahel-Bewohner.",
      hu: "A száraz sztyeppék közé ágyazott település őrzi a száheli lakosok eredeti életmódját.",
      ro: "Cuibărită în stepe uscate, această așezare păstrează stilul de viață original al locuitorilor din Sahel.",
      en: "Nestled in dry steppes, this settlement preserves the original lifestyle of the Sahel inhabitants."
    },
    facts: {
      de: ["Präfekturhauptstadt.", "Bedeutend für Rinderhandel."],
      hu: ["Prefektúra székhelye.", "Jelentős a szarvasmarha-kereskedelem szempontjából."],
      ro: ["Capitală de prefectură.", "Important pentru comerțul cu vite."],
      en: ["Prefecture capital.", "Significant for cattle trade."]
    }
  },
  {
    id: "bouza-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [6.0428, 14.4229],
    name: { de: "Bouza", hu: "Bouza", ro: "Bouza", en: "Bouza" },
    description: {
      de: "Inmitten einer rauen Landschaft gelegen, bietet dieser Ort durch lokale Wasserprojekte grüne Rückzugsorte.",
      hu: "A zord táj közepén fekvő település a helyi vízprojektek révén zöld menedéket kínál.",
      ro: "Situat în mijlocul unui peisaj aspru, acest loc oferă refugii verzi datorită proiectelor locale de apă.",
      en: "Located amidst a harsh landscape, this place offers green retreats through local water projects."
    },
    facts: {
      de: ["Bemühungen gegen Wüstenbildung.", "Ruhiger Agrarstandort."],
      hu: ["Törekvések az elsivatagosodás ellen.", "Csendes agrárszékhely."],
      ro: ["Eforturi împotriva deșertificării.", "Locație agricolă liniștită."],
      en: ["Efforts against desertification.", "Quiet agricultural location."]
    }
  },
  {
    id: "keita-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [5.7749, 14.7551],
    name: { de: "Keita", hu: "Keita", ro: "Keita", en: "Keita" },
    description: {
      de: "Bekannt durch internationale Projekte zur Aufforstung, zeigt diese kleine Stadt beispielhaften Kampf gegen Bodenerosion.",
      hu: "A nemzetközi erdősítési projektekről ismert kisváros példamutató küzdelmet folytat a talajerózió ellen.",
      ro: "Cunoscut prin proiecte internaționale de împădurire, acest mic oraș demonstrează o luptă exemplară împotriva eroziunii solului.",
      en: "Known for international reforestation projects, this small town demonstrates an exemplary fight against soil erosion."
    },
    facts: {
      de: ["Zentrum des Keita-Projekts.", "Ökologisch rehabilitiertes Land."],
      hu: ["A Keita-projekt központja.", "Ökológiailag rehabilitált földterület."],
      ro: ["Centrul proiectului Keita.", "Teren reabilitat ecologic."],
      en: ["Center of the Keita Project.", "Ecologically rehabilitated land."]
    }
  },
  {
    id: "tchirozerine-cities-v2",
    type: "city",
    parent: "NE-1",
    coords: [7.9994, 17.2625],
    name: { de: "Tchirozérine", hu: "Tchirozérine", ro: "Tchirozérine", en: "Tchirozérine" },
    description: {
      de: "Eine Industriestadt nahe Agadez, die primär von der Kohleförderung lebt und die Region mit Energie versorgt.",
      hu: "Agadezhez közeli iparváros, amely elsősorban szénbányászatból él, és energiával látja el a régiót.",
      ro: "Un oraș industrial lângă Agadez, care trăiește în primul rând din extracția de cărbune și furnizează energie regiunii.",
      en: "An industrial city near Agadez that lives primarily from coal mining and supplies the region with energy."
    },
    facts: {
      de: ["Größte Kohlemine Nigers.", "Staubige Bergwerksatmosphäre."],
      hu: ["Niger legnagyobb szénbányája.", "Poros bányászati atmoszféra."],
      ro: ["Cea mai mare mină de cărbune din Niger.", "Atmosferă prăfuită de mină."],
      en: ["Niger's largest coal mine.", "Dusty mining atmosphere."]
    }
  },
  {
    id: "say-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [2.3689, 13.1007],
    name: { de: "Say", hu: "Say", ro: "Say", en: "Say" },
    description: {
      de: "Als tiefreligiöses Zentrum südlich der Hauptstadt lockt dieser Ort Gläubige mit alten Moscheen an das Nigerufer.",
      hu: "Mélyen vallásos központként a fővárostól délre, ez a település ősi mecsetekkel vonzza a hívőket a Niger partjára.",
      ro: "Ca un centru profund religios la sud de capitală, acest loc atrage credincioșii pe malul Nigerului cu moschei vechi.",
      en: "As a deeply religious center south of the capital, this place attracts believers to the banks of the Niger with old mosques."
    },
    facts: {
      de: ["Hochburg des Islams in Niger.", "Sitz islamischer Gelehrsamkeit."],
      hu: ["Az iszlám fellegvára Nigerben.", "Az iszlám tudományosság székhelye."],
      ro: ["Bastion al islamului în Niger.", "Sediul erudiției islamice."],
      en: ["Stronghold of Islam in Niger.", "Seat of Islamic scholarship."]
    }
  },
  {
    id: "madarounfa-cities-v2",
    type: "city",
    parent: "NE-4",
    coords: [7.1560, 13.3083],
    name: { de: "Madarounfa", hu: "Madarounfa", ro: "Madarounfa", en: "Madarounfa" },
    description: {
      de: "Ein malerisches Dorf in der Nähe eines Sees, das in der Mythenwelt der lokalen Stämme eine große Rolle spielt.",
      hu: "Festői falu egy tó közelében, amely nagy szerepet játszik a helyi törzsek mítoszvilágában.",
      ro: "Un sat pitoresc lângă un lac, care joacă un rol major în mitologia triburilor locale.",
      en: "A picturesque village near a lake that plays a major role in the mythology of local tribes."
    },
    facts: {
      de: ["Bekannt für den Madarounfa-See.", "Reich an lokalen Legenden."],
      hu: ["A Madarounfa-tóról ismert.", "Gazdag helyi legendákban."],
      ro: ["Cunoscut pentru lacul Madarounfa.", "Bogat în legende locale."],
      en: ["Known for Lake Madarounfa.", "Rich in local legends."]
    }
  },
  {
    id: "guidan-roumdji-cities-v2",
    type: "city",
    parent: "NE-4",
    coords: [6.6974, 13.6558],
    name: { de: "Guidan Roumdji", hu: "Guidan Roumdji", ro: "Guidan Roumdji", en: "Guidan Roumdji" },
    description: {
      de: "Versteckt zwischen weiten Äckern, dient diese aufstrebende Kommune als wichtiger Versorger für die Provinz.",
      hu: "A tágas szántóföldek között megbúvó, feltörekvő község fontos ellátója a tartománynak.",
      ro: "Ascunsă între câmpuri întinse, această comună în curs de dezvoltare servește ca furnizor important pentru provincie.",
      en: "Hidden between vast fields, this emerging commune serves as an important supplier for the province."
    },
    facts: {
      de: ["Agro-pastorale Wirtschaft.", "Bedeutend im Südwesten Maradis."],
      hu: ["Agropasztorális gazdaság.", "Jelentős Maradi délnyugati részén."],
      ro: ["Economie agro-pastorală.", "Important în sud-vestul Maradi."],
      en: ["Agro-pastoral economy.", "Significant in the southwest of Maradi."]
    }
  },
  {
    id: "maine-soroa-cities-v2",
    type: "city",
    parent: "NE-2",
    coords: [11.9748, 13.2114],
    name: { de: "Maïné-Soroa", hu: "Maïné-Soroa", ro: "Maïné-Soroa", en: "Maïné-Soroa" },
    description: {
      de: "Diese östliche Ansiedlung zeichnet sich durch die Nähe zum Komadougou-Yobé-Fluss und fruchtbare Uferzonen aus.",
      hu: "Ezt a keleti települést a Komadougou Yobé folyó közelsége és termékeny part menti övezetei jellemzik.",
      ro: "Această așezare estică se distinge prin apropierea de râul Komadougou Yobé și zonele riverane fertile.",
      en: "This eastern settlement is distinguished by its proximity to the Komadougou Yobé River and fertile riparian zones."
    },
    facts: {
      de: ["Lokaler Landwirtschafts-Knoten.", "Geprägt von Palmen und Wasserläufen."],
      hu: ["Helyi mezőgazdasági csomópont.", "Pálmafák és vízfolyások jellemzik."],
      ro: ["Nod agricol local.", "Caracterizat de palmieri și cursuri de apă."],
      en: ["Local agricultural hub.", "Characterized by palm trees and watercourses."]
    }
  },
  {
    id: "tchin-tabaraden-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [5.7985, 15.8969],
    name: { de: "Tchin-Tabaraden", hu: "Tchin-Tabaraden", ro: "Tchin-Tabaraden", en: "Tchin-Tabaraden" },
    description: {
      de: "Als administratives Zentrum für Nomaden bietet dieser entlegene Ort wichtige Infrastruktur in der trockenen Sahel-Weite.",
      hu: "Nomádok közigazgatási központjaként ez a távoli település fontos infrastruktúrát kínál a száraz száheli pusztaságban.",
      ro: "Ca centru administrativ pentru nomazi, acest loc îndepărtat oferă infrastructură vitală în întinderea uscată a Sahelului.",
      en: "As an administrative center for nomads, this remote place offers vital infrastructure in the dry expanse of the Sahel."
    },
    facts: {
      de: ["Zentrale Rolle für Tuareg.", "Tief im Wüstenrandgebiet."],
      hu: ["Központi szerep a tuaregek számára.", "Mélyen a sivatag peremvidékén."],
      ro: ["Rol central pentru tuaregi.", "Adânc în zona de margine a deșertului."],
      en: ["Central role for the Tuareg.", "Deep in the desert fringe area."]
    }
  },
  {
    id: "goudoumaria-cities-v2",
    type: "city",
    parent: "NE-2",
    coords: [11.1648, 13.7256],
    name: { de: "Goudoumaria", hu: "Goudoumaria", ro: "Goudoumaria", en: "Goudoumaria" },
    description: {
      de: "Eine isolierte kleine Wüstenkommune im Osten, die stark vom lokalen Handel mit Datteln profitiert.",
      hu: "Szigetelt kis sivatagi község keleten, amely nagymértékben profitál a helyi datolyakereskedelemből.",
      ro: "O mică comună deșertică izolată în est, care profită foarte mult din comerțul local cu curmale.",
      en: "An isolated small desert commune in the east that benefits greatly from the local trade in dates."
    },
    facts: {
      de: ["Bedeutend für lokale Oasen.", "Schnittpunkt von Handelsrouten."],
      hu: ["Jelentős a helyi oázisok számára.", "Kereskedelmi útvonalak találkozási pontja."],
      ro: ["Important pentru oazele locale.", "Punct de intersecție a rutelor comerciale."],
      en: ["Important for local oases.", "Intersection of trade routes."]
    }
  },
  {
    id: "dungass-cities-v2",
    type: "city",
    parent: "NE-7",
    coords: [9.3245, 13.0645],
    name: { de: "Dungass", hu: "Dungass", ro: "Dungass", en: "Dungass" },
    description: {
      de: "Geprägt von landwirtschaftlicher Expansion, ist dieser dynamische Ort ein Magnet für junge Familien der Region.",
      hu: "A mezőgazdasági terjeszkedés által meghatározott dinamikus település a régió fiatal családjainak mágnese.",
      ro: "Marcat de expansiunea agricolă, acest loc dinamic este un magnet pentru familiile tinere din regiune.",
      en: "Characterized by agricultural expansion, this dynamic place is a magnet for young families in the region."
    },
    facts: {
      de: ["Stark wachsende Bevölkerung.", "Hoher Agrar-Fokus."],
      hu: ["Erősen növekvő népesség.", "Erős mezőgazdasági fókusz."],
      ro: ["Populație în creștere rapidă.", "Accent puternic pe agricultură."],
      en: ["Rapidly growing population.", "Strong agricultural focus."]
    }
  },
  {
    id: "kollo-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [2.3395, 13.3043],
    name: { de: "Kollo", hu: "Kollo", ro: "Kollo", en: "Kollo" },
    description: {
      de: "Nur einen Steinwurf von Niamey entfernt, bewahrt diese Siedlung dennoch ihren charmanten dörflichen Charakter.",
      hu: "Csak egy kőhajításnyira van Niameytől, ez a település mégis megőrzi bájos falusias jellegét.",
      ro: "La doar o aruncătură de băț de Niamey, această așezare își păstrează totuși caracterul fermecător de sat.",
      en: "Just a stone's throw from Niamey, this settlement still preserves its charming village character."
    },
    facts: {
      de: ["Obstbaugebiet in der Nähe der Hauptstadt.", "Idyllische Flusslandschaft."],
      hu: ["Gyümölcstermesztő terület a főváros közelében.", "Idillikus folyóparti táj."],
      ro: ["Zonă pomicolă în apropierea capitalei.", "Peisaj fluvial idilic."],
      en: ["Fruit growing area near the capital.", "Idyllic river landscape."]
    }
  },
  {
    id: "ayorou-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [0.9174, 14.7308],
    name: { de: "Ayorou", hu: "Ayorou", ro: "Ayorou", en: "Ayorou" },
    description: {
      de: "Malerisch auf Flussinseln des Niger gebaut, ist dieser Ort besonders für seinen bunten Sonntagsmarkt bekannt.",
      hu: "Festőien a Niger folyó szigeteire épült, ez a település különösen színes vasárnapi piacáról ismert.",
      ro: "Construit pitoresc pe insulele fluviului Niger, acest loc este cunoscut în special pentru piața sa colorată de duminică.",
      en: "Picturesquely built on islands in the Niger River, this place is especially known for its colorful Sunday market."
    },
    facts: {
      de: ["Begehrter Touristenhalt.", "Regelmäßige Flusspferd-Sichtungen."],
      hu: ["Kedvelt turisztikai megállóhely.", "Rendszeres vízilóészlelések."],
      ro: ["Popas turistic popular.", "Observări regulate ale hipopotamilor."],
      en: ["Popular tourist stop.", "Regular hippo sightings."]
    }
  },
  {
    id: "bermo-cities-v2",
    type: "city",
    parent: "NE-4",
    coords: [6.2519, 14.8812],
    name: { de: "Bermo", hu: "Bermo", ro: "Bermo", en: "Bermo" },
    description: {
      de: "Inmitten der Halbwüste gelegen, dient das Dorf als wichtiger Rastplatz für wandernde Hirten und ihre Tiere.",
      hu: "A félsivatag közepén található falu fontos pihenőhelyként szolgál a vándorló pásztorok és állataik számára.",
      ro: "Situat în mijlocul semideșertului, satul servește ca o zonă de odihnă importantă pentru păstorii nomazi și animalele lor.",
      en: "Located in the middle of the semi-desert, the village serves as an important resting place for wandering herders and their animals."
    },
    facts: {
      de: ["Geprägt von Fulani-Hirten.", "Wasserstelle in karger Landschaft."],
      hu: ["A fulani pásztorok által meghatározott.", "Vízlelőhely a kopár tájon."],
      ro: ["Modelat de păstorii Fulani.", "Sursă de apă într-un peisaj arid."],
      en: ["Characterized by Fulani herders.", "Watering hole in a barren landscape."]
    }
  },
  {
    id: "banibangou-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [2.7099, 15.0392],
    name: { de: "Banibangou", hu: "Banibangou", ro: "Banibangou", en: "Banibangou" },
    description: {
      de: "Die kleine, raue Grenzsiedlung kämpft tapfer mit klimatischen Bedingungen und bewahrt ihre Kultur.",
      hu: "A kis, zord határtelepülés hősiesen küzd a klímaviszonyokkal, és megőrzi kultúráját.",
      ro: "Mica așezare aspră de frontieră se luptă curajos cu condițiile climatice și își păstrează cultura.",
      en: "The small, rugged border settlement bravely battles climatic conditions and preserves its culture."
    },
    facts: {
      de: ["Strategische Grenzposition.", "Trockenfeldbau als Basis."],
      hu: ["Stratégiai határpozíció.", "Szárazgazdálkodás az alapja."],
      ro: ["Poziție strategică de frontieră.", "Agricultura uscată ca bază."],
      en: ["Strategic border position.", "Dry farming as the foundation."]
    }
  },
  {
    id: "ngourti-cities-v2",
    type: "city",
    parent: "NE-2",
    coords: [13.2500, 15.3500],
    name: { de: "N'Gourti", hu: "N'Gourti", ro: "N'Gourti", en: "N'Gourti" },
    description: {
      de: "Tief in den östlichen Steppen verloren, verlässt sich diese Gemeinde auf alte Überlebensstrategien in der Dürre.",
      hu: "Mélyen a keleti sztyeppékben elveszve, ez a közösség a szárazság elleni ősi túlélési stratégiákra támaszkodik.",
      ro: "Pierdută adânc în stepele estice, această comunitate se bazează pe strategii antice de supraviețuire în timpul secetei.",
      en: "Lost deep in the eastern steppes, this community relies on ancient survival strategies in the drought."
    },
    facts: {
      de: ["Weitab großer Straßen.", "Extreme klimatische Bedingungen."],
      hu: ["Messze a nagy utaktól.", "Extrém éghajlati viszonyok."],
      ro: ["Departe de drumurile principale.", "Condiții climatice extreme."],
      en: ["Far from major roads.", "Extreme climatic conditions."]
    }
  },
  {
    id: "tassara-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [4.8436, 16.3268],
    name: { de: "Tassara", hu: "Tassara", ro: "Tassara", en: "Tassara" },
    description: {
      de: "Als Teil der weiten Nomadenrouten im Norden dient diese Wüstengemeinde als seltener Zufluchtsort.",
      hu: "Az északi hatalmas nomád útvonalak részeként ez a sivatagi közösség ritka menedékhelyként szolgál.",
      ro: "Ca parte a vastelor rute nomade din nord, această comunitate din deșert servește drept un refugiu rar.",
      en: "As part of the vast nomadic routes in the north, this desert community serves as a rare sanctuary."
    },
    facts: {
      de: ["Geringe Bevölkerungsdichte.", "Typische Saharalandwirtschaft."],
      hu: ["Alacsony népsűrűség.", "Tipikus szaharai mezőgazdaság."],
      ro: ["Densitate scăzută a populației.", "Agricultură tipică sahariană."],
      en: ["Low population density.", "Typical Saharan agriculture."]
    }
  },
  {
    id: "bankilare-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [0.7303, 14.5888],
    name: { de: "Bankilaré", hu: "Bankilaré", ro: "Bankilaré", en: "Bankilaré" },
    description: {
      de: "Eine kleine ländliche Gemeinde, die ihre Lebendigkeit durch regelmäßige Viehmärkte unter Beweis stellt.",
      hu: "Kis vidéki közösség, amely a rendszeres állatpiacok révén bizonyítja elevenségét.",
      ro: "O mică comunitate rurală care își dovedește vitalitatea prin piețe regulate de animale.",
      en: "A small rural community that proves its vitality through regular livestock markets."
    },
    facts: {
      de: ["Zentraler Viehmarkt.", "Präsentiert lokale Kultur."],
      hu: ["Központi állatpiac.", "Bemutatja a helyi kultúrát."],
      ro: ["Piață centrală de animale.", "Prezintă cultura locală."],
      en: ["Central livestock market.", "Showcases local culture."]
    }
  },
  {
    id: "tillia-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [4.6971, 16.1415],
    name: { de: "Tillia", hu: "Tillia", ro: "Tillia", en: "Tillia" },
    description: {
      de: "Diese abgelegene Siedlung trotzt der feindlichen Wüstenlandschaft und schützt uralte Quellen.",
      hu: "Ez a távoli település dacol az ellenséges sivatagi tájjal, és megvédi az ősi forrásokat.",
      ro: "Această așezare îndepărtată sfidează peisajul deșertic ostil și protejează izvoare străvechi.",
      en: "This remote settlement defies the hostile desert landscape and protects ancient springs."
    },
    facts: {
      de: ["Einsame Oasenlage.", "Stark von Winden geprägt."],
      hu: ["Magányos oázis fekvés.", "A szelek által erősen formált."],
      ro: ["Locație de oază solitară.", "Puternic modelat de vânturi."],
      en: ["Lonely oasis location.", "Strongly shaped by winds."]
    }
  },
  {
    id: "belbedji-cities-v2",
    type: "city",
    parent: "NE-7",
    coords: [8.9667, 14.5333],
    name: { de: "Belbédji", hu: "Belbédji", ro: "Belbédji", en: "Belbédji" },
    description: {
      de: "Als agrarische Bastion in den trockenen Ebenen steht das Dorf für bemerkenswerte landwirtschaftliche Ausdauer.",
      hu: "Agrárbástyaként a száraz síkságokon a falu a figyelemre méltó mezőgazdasági kitartást képviseli.",
      ro: "Ca un bastion agricol în câmpiile uscate, satul reprezintă o rezistență agricolă remarcabilă.",
      en: "As an agricultural bastion in the dry plains, the village stands for remarkable agricultural endurance."
    },
    facts: {
      de: ["Lokaler Hirseanbau.", "Siedlung der Hausa-Bevölkerung."],
      hu: ["Helyi kölestermesztés.", "A hausza lakosság települése."],
      ro: ["Cultivarea locală a meiului.", "Așezare a populației Hausa."],
      en: ["Local millet cultivation.", "Settlement of the Hausa population."]
    }
  },
  {
    id: "iferouane-cities-v2",
    type: "city",
    parent: "NE-1",
    coords: [8.0494, 19.0601],
    name: { de: "Iférouane", hu: "Iférouane", ro: "Iférouane", en: "Iférouane" },
    description: {
      de: "Tief im majestätischen Aïr-Gebirge gelegen, verzaubert diese ruhige Oase mit üppigen Gärten.",
      hu: "A fenséges Aïr-hegység mélyén fekvő csendes oázis buja kertjeivel varázsolja el a látogatókat.",
      ro: "Situată adânc în maiestuoșii Munți Aïr, această oază liniștită încântă cu grădini luxuriante.",
      en: "Located deep in the majestic Aïr Mountains, this quiet oasis enchants with lush gardens."
    },
    facts: {
      de: ["Tuareg-Kulturzentrum.", "Idealer Ausgangspunkt für Bergsteiger."],
      hu: ["Tuareg kulturális központ.", "Ideális kiindulópont hegymászóknak."],
      ro: ["Centru cultural tuareg.", "Punct de plecare ideal pentru alpiniști."],
      en: ["Tuareg cultural center.", "Ideal starting point for mountaineers."]
    }
  },
  {
    id: "bilma-cities-v2",
    type: "city",
    parent: "NE-1",
    coords: [12.9164, 18.6853],
    name: { de: "Bilma", hu: "Bilma", ro: "Bilma", en: "Bilma" },
    description: {
      de: "Bekannt in ganz Afrika für seine jahrhundertealten Salzminen, markiert dieser Ort das Ende historischer Karawanen.",
      hu: "Évszázados sóbányáiról egész Afrikában ismert, ez a település jelöli a történelmi karavánok végét.",
      ro: "Cunoscut în toată Africa pentru minele sale de sare vechi de secole, acest loc marchează sfârșitul caravanelor istorice.",
      en: "Known throughout Africa for its centuries-old salt mines, this place marks the end of historical caravans."
    },
    facts: {
      de: ["Zentrum der Salzproduktion.", "Mitten in der Wüste Ténéré."],
      hu: ["A sótermelés központja.", "A Ténéré-sivatag közepén."],
      ro: ["Centrul producției de sare.", "În mijlocul deșertului Ténéré."],
      en: ["Center of salt production.", "In the middle of the Ténéré desert."]
    }
  },
  {
    id: "fachi-cities-v2",
    type: "city",
    parent: "NE-1",
    coords: [11.5833, 18.1065],
    name: { de: "Fachi", hu: "Fachi", ro: "Fachi", en: "Fachi" },
    description: {
      de: "Umgeben von Sandmeeren ist dieses kleine ummauerte Dorf ein Wunder menschlicher Überlebenskunst.",
      hu: "A homoktengerekkel körülvett kis fallal körülvett falu az emberi túlélés csodája.",
      ro: "Înconjurat de mări de nisip, acest mic sat fortificat este o minune a supraviețuirii umane.",
      en: "Surrounded by seas of sand, this small walled village is a marvel of human survival."
    },
    facts: {
      de: ["Historische Lehmfestung.", "Sicherungsposten für Salzhandel."],
      hu: ["Történelmi vályogerőd.", "Biztosítóállomás a sókereskedelemhez."],
      ro: ["Fortăreață istorică de lut.", "Post de securitate pentru comerțul cu sare."],
      en: ["Historic mud fortress.", "Security post for the salt trade."]
    }
  },
  {
    id: "dirkou-cities-v2",
    type: "city",
    parent: "NE-1",
    coords: [12.8876, 18.9893],
    name: { de: "Dirkou", hu: "Dirkou", ro: "Dirkou", en: "Dirkou" },
    description: {
      de: "Diese wichtige Transitsiedlung in der Sahara verbindet Niger direkt mit den Karawanenwegen nach Libyen.",
      hu: "Ez a fontos szaharai tranzittelepülés közvetlenül összeköti Nigert a Líbiába vezető karavánutakkal.",
      ro: "Această importantă așezare de tranzit din Sahara leagă Nigerul direct de rutele caravanelor către Libia.",
      en: "This important transit settlement in the Sahara directly connects Niger with caravan routes to Libya."
    },
    facts: {
      de: ["Stopp für Migrantenrouten.", "Militärisch gesicherte Zone."],
      hu: ["Migráns útvonalak megállója.", "Katonailag biztosított zóna."],
      ro: ["Oprire pentru rutele migranților.", "Zonă asigurată militar."],
      en: ["Stop for migrant routes.", "Militarily secured zone."]
    }
  },
  {
    id: "ingall-cities-v2",
    type: "city",
    parent: "NE-1",
    coords: [6.9329, 16.7865],
    name: { de: "Ingall", hu: "Ingall", ro: "Ingall", en: "Ingall" },
    description: {
      de: "Als historisches Rückzugsgebiet der Sultane begeistert dieses Dorf mit jahrhundertealten Moscheen und Ruinen.",
      hu: "A szultánok történelmi menedékhelyeként ez a falu évszázados mecsetekkel és romokkal nyűgöz le.",
      ro: "Ca un refugiu istoric al sultanilor, acest sat impresionează cu moschei și ruine vechi de secole.",
      en: "As a historic retreat of the sultans, this village impresses with centuries-old mosques and ruins."
    },
    facts: {
      de: ["Ehemalige Residenzstadt.", "Verfügt über ein Salinenfest."],
      hu: ["Egykori rezidenciaváros.", "Rendelkezik egy sólepárló fesztivállal."],
      ro: ["Fost oraș de reședință.", "Găzduiește un festival al salinelor."],
      en: ["Former residence city.", "Features a salt flat festival."]
    }
  },
  {
    id: "kantche-cities-v2",
    type: "city",
    parent: "NE-7",
    coords: [8.5333, 13.5333],
    name: { de: "Kantché", hu: "Kantché", ro: "Kantché", en: "Kantché" },
    description: {
      de: "Ein malerisches landwirtschaftliches Zentrum im Süden, das von ausgedehnten Feldern geprägt ist.",
      hu: "Festői mezőgazdasági központ délen, amelyet kiterjedt mezők jellemeznek.",
      ro: "Un centru agricol pitoresc în sud, caracterizat de câmpuri întinse.",
      en: "A picturesque agricultural center in the south, characterized by extensive fields."
    },
    facts: {
      de: ["Bekannt für Peperoni-Anbau.", "Lebendiges Gemeindeleben."],
      hu: ["Peperoni-termesztéséről ismert.", "Élénk közösségi élet."],
      ro: ["Cunoscut pentru cultivarea de ardei iute.", "Viață comunitară vibrantă."],
      en: ["Known for pepperoni cultivation.", "Vibrant community life."]
    }
  },
  {
    id: "kornaka-cities-v2",
    type: "city",
    parent: "NE-4",
    coords: [6.9167, 14.2833],
    name: { de: "Kornaka", hu: "Kornaka", ro: "Kornaka", en: "Kornaka" },
    description: {
      de: "Die Kommune dient als ruhiges Bindeglied zwischen den weiten Savannen und den geschäftigeren Städten im Süden.",
      hu: "A község csendes összekötő kapocsként szolgál a hatalmas szavannák és a nyüzsgőbb déli városok között.",
      ro: "Comuna servește ca o legătură liniștită între vastele savane și orașele mai aglomerate din sud.",
      en: "The commune serves as a quiet link between the vast savannas and the busier cities in the south."
    },
    facts: {
      de: ["Hoher Anteil an Viehbauern.", "Weitreichendes Land."],
      hu: ["A szarvasmarha-tenyésztők magas aránya.", "Messzire nyúló földterület."],
      ro: ["Proporție mare de crescători de vite.", "Teren extins."],
      en: ["High proportion of cattle farmers.", "Extensive land."]
    }
  },
  {
    id: "malbaza-cities-v2",
    type: "city",
    parent: "NE-5",
    coords: [5.5222, 13.9453],
    name: { de: "Malbaza", hu: "Malbaza", ro: "Malbaza", en: "Malbaza" },
    description: {
      de: "Vor allem durch eine gewaltige Zementfabrik geprägt, ist dieser Ort ein seltener industrieller Eckpfeiler Nigers.",
      hu: "Főként egy hatalmas cementgyár által meghatározott település Niger ritka ipari sarokköve.",
      ro: "Caracterizat în principal de o fabrică masivă de ciment, acest loc este o piatră de temelie industrială rară în Niger.",
      en: "Primarily characterized by a massive cement factory, this place is a rare industrial cornerstone of Niger."
    },
    facts: {
      de: ["Zentrum der Zementproduktion.", "Bietet viele Fabrikarbeitsplätze."],
      hu: ["A cementgyártás központja.", "Sok gyári munkahelyet kínál."],
      ro: ["Centrul producției de ciment.", "Oferă multe locuri de muncă în fabrică."],
      en: ["Center of cement production.", "Offers many factory jobs."]
    }
  },
  {
    id: "loga-cities-v2",
    type: "city",
    parent: "NE-3",
    coords: [3.2667, 13.6167],
    name: { de: "Loga", hu: "Loga", ro: "Loga", en: "Loga" },
    description: {
      de: "Eingebettet im Dosso-Departement, erhält diese Region ihr Wasser aus dem historischen Dallol-Tal-System.",
      hu: "A Dosso megyébe ágyazott régió a vizét a történelmi Dallol völgyrendszerből nyeri.",
      ro: "Cuibărită în departamentul Dosso, această regiune își primește apa din sistemul istoric al văii Dallol.",
      en: "Nestled in the Dosso department, this region receives its water from the historic Dallol valley system."
    },
    facts: {
      de: ["Günstiges Grundwasser.", "Typisches Trockenbauerndorf."],
      hu: ["Kedvező talajvíz.", "Tipikus szárazgazdálkodó falu."],
      ro: ["Apă subterană favorabilă.", "Sat tipic de agricultori pe uscat."],
      en: ["Favorable groundwater.", "Typical dry farming village."]
    }
  },
  {
    id: "balleyara-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [2.9056, 13.7844],
    name: { de: "Balleyara", hu: "Balleyara", ro: "Balleyara", en: "Balleyara" },
    description: {
      de: "Dieser Ort explodiert regelrecht vor Energie, wenn sein landesweit bekannter Viehmarkt jeden Sonntag stattfindet.",
      hu: "Ez a hely valósággal felrobban az energiától, amikor minden vasárnap megrendezik országosan ismert állatpiacát.",
      ro: "Acest loc explodează de energie atunci când piața sa de animale, cunoscută la nivel național, are loc în fiecare duminică.",
      en: "This place literally explodes with energy when its nationally renowned livestock market takes place every Sunday."
    },
    facts: {
      de: ["Größter Tiermarkt der Gegend.", "Schnittpunkt vieler Ethnien."],
      hu: ["A környék legnagyobb állatpiaca.", "Számos etnikum találkozási pontja."],
      ro: ["Cea mai mare piață de animale din zonă.", "Punct de intersecție a multor etnii."],
      en: ["Largest animal market in the area.", "Intersection of many ethnic groups."]
    }
  },
  {
    id: "gotheye-cities-v2",
    type: "city",
    parent: "NE-6",
    coords: [1.5647, 13.8561],
    name: { de: "Gothèye", hu: "Gothèye", ro: "Gothèye", en: "Gothèye" },
    description: {
      de: "Die Siedlung liegt idyllisch am großen Flussufer und pflegt eine tief verwurzelte Tradition des Bootsbaus.",
      hu: "A település idillikus helyen fekszik a nagy folyó partján, és a hajóépítés mélyen gyökerező hagyományát ápolja.",
      ro: "Așezarea este situată idilic pe malul marelui râu și menține o tradiție profund înrădăcinată de construire a bărcilor.",
      en: "The settlement is idyllically situated on the banks of the great river and maintains a deeply rooted tradition of boat building."
    },
    facts: {
      de: ["Traditionelle Flussschifffahrt.", "Malerische Uferzone."],
      hu: ["Hagyományos folyami hajózás.", "Festői part menti övezet."],
      ro: ["Navigație fluvială tradițională.", "Zonă riverană pitorească."],
      en: ["Traditional river navigation.", "Picturesque riparian zone."]
    }
  },
  {
    id: "damagaram-takaya-cities-v2",
    type: "city",
    parent: "NE-7",
    coords: [9.4447, 14.1206],
    name: { de: "Damagaram Takaya", hu: "Damagaram Takaya", ro: "Damagaram Takaya", en: "Damagaram Takaya" },
    description: {
      de: "Eingetaucht in die lange Geschichte der Damagaram-Sultane, ist dieser kleine Ort ein stolzer Bewahrer der Vergangenheit.",
      hu: "A Damagaram-szultánok hosszú történetében elmerülve ez a kis hely a múlt büszke őrzője.",
      ro: "Scufundat în lunga istorie a sultanilor Damagaram, acest mic loc este un mândru păstrător al trecutului.",
      en: "Immersed in the long history of the Damagaram sultans, this small place is a proud preserver of the past."
    },
    facts: {
      de: ["Reiche imperiale Geschichte.", "Friedliche Agrargemeinschaft."],
      hu: ["Gazdag birodalmi történelem.", "Békés agrárbázis."],
      ro: ["Istorie imperială bogată.", "Comunitate agricolă pașnică."],
      en: ["Rich imperial history.", "Peaceful agrarian community."]
    }
  }
];
