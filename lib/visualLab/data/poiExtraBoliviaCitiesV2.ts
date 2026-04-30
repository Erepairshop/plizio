import type { POI } from "./poi";

export const poiExtraBoliviaCitiesV2: POI[] = [
  {
    id: "santa-cruz-de-la-sierra-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.1812, -17.7833],
    name: { de: "Santa Cruz de la Sierra", hu: "Santa Cruz de la Sierra", ro: "Santa Cruz de la Sierra", en: "Santa Cruz de la Sierra" },
    description: {
      de: "Die bevölkerungsreichste Stadt Boliviens und das wichtigste Wirtschaftszentrum des Landes, gelegen im tropischen Tiefland.",
      hu: "Bolívia legnépesebb városa és legfőbb gazdasági központja, amely a trópusi alföldön fekszik.",
      ro: "Cel mai populat oraș din Bolivia și principalul centru economic, situat în câmpiile tropicale.",
      en: "The most populous city in Bolivia and its main economic hub, located in the tropical lowlands."
    },
    facts: {
      de: ["Größte Stadt Boliviens.", "Wirtschaftliches Zentrum.", "Tropisches Klima."],
      hu: ["Bolívia legnagyobb városa.", "Gazdasági motor.", "Trópusi klíma jellemzi."],
      ro: ["Cel mai mare oraș bolivian.", "Centru comercial major.", "Are climă tropicală."],
      en: ["Largest city in Bolivia.", "Major economic center.", "Tropical climate."]
    }
  },
  {
    id: "el-alto-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-68.1500, -16.5000],
    name: { de: "El Alto", hu: "El Alto", ro: "El Alto", en: "El Alto" },
    description: {
      de: "Eine der höchstgelegenen Großstädte der Welt, die sich auf dem Altiplano direkt über La Paz erstreckt.",
      hu: "A világ egyik legmagasabban fekvő nagyvárosa, amely az Altiplano fennsíkján, közvetlenül La Paz felett terül el.",
      ro: "Unul dintre cele mai înalte orașe mari din lume, situat pe platoul Altiplano, chiar deasupra La Paz.",
      en: "One of the highest major cities in the world, stretching across the Altiplano just above La Paz."
    },
    facts: {
      de: ["Über 4.000 Meter hoch.", "Sehr schnell wachsend.", "Eigener Flughafen."],
      hu: ["Több mint 4000 méter magasan van.", "Gyorsan növekvő népesség.", "Itt található a nemzetközi repülőtér."],
      ro: ["Peste 4.000 de metri altitudine.", "Populație în creștere rapidă.", "Găzduiește aeroportul internațional."],
      en: ["Over 4,000 meters in elevation.", "Rapidly growing population.", "Home to the international airport."]
    }
  },
  {
    id: "la-paz-cities-v2",
    type: "state-capital",
    parent: "BO-L",
    coords: [-68.1193, -16.4897],
    name: { de: "La Paz", hu: "La Paz", ro: "La Paz", en: "La Paz" },
    description: {
      de: "Der Regierungssitz Boliviens, spektakulär in einer tiefen Schlucht gelegen und mit einem riesigen Seilbahnnetz ausgestattet.",
      hu: "Bolívia kormányzati székhelye, amely egy mély kanyonban fekszik, és kiterjedt drótkötélpálya-hálózattal rendelkezik.",
      ro: "Sediul guvernului bolivian, situat spectaculos într-un canion și dotat cu o rețea uriașă de telecabine.",
      en: "The administrative capital of Bolivia, spectacularly set in a deep canyon and famous for its extensive cable car network."
    },
    facts: {
      de: ["Höchster Regierungssitz der Welt.", "Bekannt für die Mi Teleférico.", "In einem Talkessel gelegen."],
      hu: ["A világ legmagasabb kormányzati központja.", "Híres a Mi Teleférico rendszerről.", "Egy völgykatlanban épült."],
      ro: ["Cea mai înaltă capitală administrativă.", "Renumit pentru Mi Teleférico.", "Construit într-un canion adânc."],
      en: ["Highest administrative capital.", "Famous for the Mi Teleférico.", "Located in a steep canyon."]
    }
  },
  {
    id: "cochabamba-cities-v2",
    type: "state-capital",
    parent: "BO-C",
    coords: [-66.1568, -17.3895],
    name: { de: "Cochabamba", hu: "Cochabamba", ro: "Cochabamba", en: "Cochabamba" },
    description: {
      de: "Bekannt als das gastronomische Zentrum Boliviens, gelegen in einem fruchtbaren Tal mit angenehmem Klima.",
      hu: "Bolívia gasztronómiai központjaként ismert város, amely egy termékeny völgyben, kellemes éghajlattal büszkélkedhet.",
      ro: "Cunoscut ca centrul gastronomic al Boliviei, situat într-o vale fertilă cu o climă foarte plăcută.",
      en: "Known as the gastronomic heart of Bolivia, located in a fertile valley with a highly pleasant climate."
    },
    facts: {
      de: ["Stadt des ewigen Frühlings.", "Cristo de la Concordia Statue.", "Kulinarische Hauptstadt."],
      hu: ["Az örök tavasz városa.", "Itt áll a Cristo de la Concordia szobor.", "Kulináris főváros."],
      ro: ["Orașul primăverii eterne.", "Statuia Cristo de la Concordia.", "Capitală culinară."],
      en: ["City of eternal spring.", "Cristo de la Concordia statue.", "Culinary capital."]
    }
  },
  {
    id: "oruro-cities-v2",
    type: "state-capital",
    parent: "BO-O",
    coords: [-67.1167, -17.9667],
    name: { de: "Oruro", hu: "Oruro", ro: "Oruro", en: "Oruro" },
    description: {
      de: "Eine hochgelegene Bergbaustadt, die weltweit für ihren farbenfrohen und traditionellen Karneval berühmt ist.",
      hu: "Magasan fekvő bányászváros, amely világszerte híres a színpompás és hagyományőrző karneváljáról.",
      ro: "Un oraș minier de mare altitudine, faimos în întreaga lume pentru carnavalul său tradițional colorat.",
      en: "A high-altitude mining city globally famous for its colorful and traditional annual carnival."
    },
    facts: {
      de: ["Berühmt für den Karneval von Oruro.", "Wichtige Bergbaustadt.", "Liegt auf über 3.700 Metern."],
      hu: ["Híres az orurói karneválról.", "Fontos bányászati központ.", "Több mint 3700 méteren fekszik."],
      ro: ["Faimos pentru Carnavalul de la Oruro.", "Centru minier important.", "Situat la peste 3.700 metri."],
      en: ["Famous for the Oruro Carnival.", "Important mining center.", "Located above 3,700 meters."]
    }
  },
  {
    id: "sucre-cities-v2",
    type: "state-capital",
    parent: "BO-H",
    coords: [-65.2627, -19.0333],
    name: { de: "Sucre", hu: "Sucre", ro: "Sucre", en: "Sucre" },
    description: {
      de: "Die konstitutionelle Hauptstadt Boliviens, berühmt für ihre gut erhaltene koloniale weiße Architektur.",
      hu: "Bolívia alkotmányos fővárosa, amely híres a kiválóan megőrzött fehér gyarmati építészetéről.",
      ro: "Capitala constituțională a Boliviei, faimoasă pentru arhitectura sa colonială albă bine conservată.",
      en: "The constitutional capital of Bolivia, famous for its beautifully preserved white colonial architecture."
    },
    facts: {
      de: ["Konstitutionelle Hauptstadt.", "Die weiße Stadt.", "UNESCO-Weltkulturerbe."],
      hu: ["Alkotmányos főváros.", "A fehér városként is ismert.", "UNESCO Világörökségi helyszín."],
      ro: ["Capitală constituțională.", "Cunoscut ca Orașul Alb.", "Sit al Patrimoniului Mondial UNESCO."],
      en: ["Constitutional capital.", "Known as the White City.", "UNESCO World Heritage site."]
    }
  },
  {
    id: "tarija-cities-v2",
    type: "state-capital",
    parent: "BO-T",
    coords: [-64.7296, -21.5355],
    name: { de: "Tarija", hu: "Tarija", ro: "Tarija", en: "Tarija" },
    description: {
      de: "Das Herz der bolivianischen Weinproduktion im Süden des Landes, bekannt für ihr mildes Klima und entspannte Atmosphäre.",
      hu: "A bolíviai bortermelés szíve az ország déli részén, amely enyhe klímájáról és nyugodt légköréről ismert.",
      ro: "Inima producției de vin din Bolivia, în sudul țării, recunoscută pentru clima blândă și atmosfera relaxată.",
      en: "The heart of Bolivian wine production in the south, known for its mild climate and relaxed atmosphere."
    },
    facts: {
      de: ["Zentrum des Weinbaus.", "Südliche Metropole.", "Mediterranes Klima."],
      hu: ["A borászat központja.", "Déli nagyváros.", "Mediterrán jellegű klíma."],
      ro: ["Centrul viticulturii boliviene.", "Metropolă sudică.", "Climă de tip mediteranean."],
      en: ["Center of wine making.", "Southern metropolis.", "Mediterranean-like climate."]
    }
  },
  {
    id: "potosi-cities-v2",
    type: "state-capital",
    parent: "BO-P",
    coords: [-65.7531, -19.5836],
    name: { de: "Potosí", hu: "Potosí", ro: "Potosí", en: "Potosí" },
    description: {
      de: "Eine der höchstgelegenen Städte der Welt am Fuße des Cerro Rico, historisch berühmt für ihren enormen Silberreichtum.",
      hu: "A világ egyik legmagasabban fekvő városa a Cerro Rico lábánál, amely történelmileg az óriási ezüstvagyonáról híres.",
      ro: "Unul dintre cele mai înalte orașe din lume, la baza Cerro Rico, faimos istoric pentru bogăția sa enormă de argint.",
      en: "One of the highest cities in the world at the foot of Cerro Rico, historically famous for its massive silver wealth."
    },
    facts: {
      de: ["Liegt auf über 4.000 m.", "Reiche Silberminen-Geschichte.", "Cerro Rico prägt das Stadtbild."],
      hu: ["Több mint 4000 méteren van.", "Gazdag ezüstbányászati múlt.", "A Cerro Rico hegy uralja a látképet."],
      ro: ["La peste 4.000 m altitudine.", "Istorie bogată în minerit de argint.", "Cerro Rico domină peisajul."],
      en: ["Located above 4,000 m.", "Rich silver mining history.", "Cerro Rico mountain dominates."]
    }
  },
  {
    id: "sacaba-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.0400, -17.4000],
    name: { de: "Sacaba", hu: "Sacaba", ro: "Sacaba", en: "Sacaba" },
    description: {
      de: "Eine schnell wachsende Nachbarstadt von Cochabamba, die für ihre landwirtschaftliche Produktion bekannt ist.",
      hu: "Cochabamba gyorsan növekvő szomszédvárosa, amely jelentős mezőgazdasági termeléséről ismert.",
      ro: "Un oraș învecinat cu Cochabamba, cu o creștere rapidă, cunoscut pentru producția sa agricolă.",
      en: "A rapidly growing neighboring city of Cochabamba, known for its agricultural output."
    },
    facts: {
      de: ["Zweitgrößte Stadt in Cochabamba.", "Wichtiger Agrarstandort.", "Teil der Metropolregion."],
      hu: ["Cochabamba megye második legnagyobb városa.", "Fontos mezőgazdasági terület.", "A metropolisz övezet része."],
      ro: ["Al doilea oraș ca mărime din Cochabamba.", "Zonă agricolă importantă.", "Parte a zonei metropolitane."],
      en: ["Second largest city in Cochabamba.", "Important agricultural area.", "Part of the metropolitan region."]
    }
  },
  {
    id: "quillacollo-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.2833, -17.4000],
    name: { de: "Quillacollo", hu: "Quillacollo", ro: "Quillacollo", en: "Quillacollo" },
    description: {
      de: "Berühmt für das Fest der Jungfrau von Urkupiña, ein wichtiger religiöser und kommerzieller Knotenpunkt.",
      hu: "Az Urkupiña-i Szűz ünnepéről híres város, amely fontos vallási és kereskedelmi csomópont is egyben.",
      ro: "Faimos pentru festivalul Fecioarei de la Urkupiña, un important centru religios și comercial.",
      en: "Famous for the Festival of the Virgin of Urkupiña, acting as a major religious and commercial hub."
    },
    facts: {
      de: ["Heimat der Virgen de Urkupiña.", "Großer Markt für lokale Güter.", "Liegt nahe Cochabamba."],
      hu: ["A Virgen de Urkupiña otthona.", "Nagy piac a helyi termékeknek.", "Cochabamba közelében található."],
      ro: ["Sediul Fecioarei din Urkupiña.", "Piață mare pentru bunuri locale.", "Situat lângă Cochabamba."],
      en: ["Home of the Virgin of Urkupiña.", "Large market for local goods.", "Located near Cochabamba."]
    }
  },
  {
    id: "montero-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.2505, -17.3387],
    name: { de: "Montero", hu: "Montero", ro: "Montero", en: "Montero" },
    description: {
      de: "Das landwirtschaftliche Herz des Departamentos Santa Cruz, besonders bekannt für den großflächigen Zuckerrohranbau.",
      hu: "Santa Cruz megye mezőgazdasági központja, amely különösen a kiterjedt cukornádtermesztéséről ismert.",
      ro: "Inima agricolă a departamentului Santa Cruz, cunoscută în special pentru cultivarea pe scară largă a trestiei de zahăr.",
      en: "The agricultural heart of the Santa Cruz department, especially known for large-scale sugarcane cultivation."
    },
    facts: {
      de: ["Zentrum der Zuckerproduktion.", "Wichtige Agrarstadt.", "Sehr heißes Klima."],
      hu: ["A cukortermelés központja.", "Jelentős agrárváros.", "Nagyon meleg az éghajlata."],
      ro: ["Centrul producției de zahăr.", "Oraș agricol important.", "Climă foarte caldă."],
      en: ["Center of sugar production.", "Important agricultural town.", "Very hot climate."]
    }
  },
  {
    id: "trinidad-cities-v2",
    type: "state-capital",
    parent: "BO-B",
    coords: [-64.9000, -14.8333],
    name: { de: "Trinidad", hu: "Trinidad", ro: "Trinidad", en: "Trinidad" },
    description: {
      de: "Die Hauptstadt von Beni im Amazonasbecken, die stark von der umliegenden Rinderzucht geprägt ist.",
      hu: "Beni megye fővárosa az Amazonas-medencében, amelynek életét erősen meghatározza a környező szarvasmarha-tenyésztés.",
      ro: "Capitala departamentului Beni din bazinul Amazonului, puternic influențată de creșterea vitelor din împrejurimi.",
      en: "The capital of Beni in the Amazon basin, heavily influenced by the surrounding cattle ranching industry."
    },
    facts: {
      de: ["Hauptstadt von Beni.", "Oft von Überschwemmungen bedroht.", "Zentrum der Viehzucht."],
      hu: ["Beni fővárosa.", "Gyakran fenyegetik áradások.", "A szarvasmarha-tenyésztés központja."],
      ro: ["Capitala departamentului Beni.", "Adesea amenințată de inundații.", "Centru al creșterii animalelor."],
      en: ["Capital of Beni.", "Often threatened by floods.", "Center of cattle ranching."]
    }
  },
  {
    id: "riberalta-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-66.0631, -10.9823],
    name: { de: "Riberalta", hu: "Riberalta", ro: "Riberalta", en: "Riberalta" },
    description: {
      de: "Die Hauptstadt des bolivianischen Amazonasgebietes, weltweit führend in der Verarbeitung von Paranüssen.",
      hu: "A bolíviai amazóniai térség központja, amely világelső a brazil dió (paranő) feldolgozásában.",
      ro: "Capitala regiunii amazoniene boliviene, lider mondial în procesarea nucilor braziliene.",
      en: "The capital of the Bolivian Amazon region, a world leader in the processing of Brazil nuts."
    },
    facts: {
      de: ["Zentrum der Paranuss-Industrie.", "Liegt am Río Beni.", "Heißes und feuchtes Klima."],
      hu: ["A brazil dió ipar központja.", "A Río Beni partján fekszik.", "Meleg és párás éghajlat."],
      ro: ["Centrul industriei nucilor braziliene.", "Situat pe râul Beni.", "Climă caldă și umedă."],
      en: ["Center of the Brazil nut industry.", "Located on the Beni River.", "Hot and humid climate."]
    }
  },
  {
    id: "warnes-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.1667, -17.5167],
    name: { de: "Warnes", hu: "Warnes", ro: "Warnes", en: "Warnes" },
    description: {
      de: "Ein wichtiger Industriestandort nördlich von Santa Cruz, wo sich viele moderne Fabriken angesiedelt haben.",
      hu: "Fontos ipari központ Santa Cruz-tól északra, ahol számos modern gyár telepedett le az elmúlt években.",
      ro: "Un important centru industrial la nord de Santa Cruz, unde s-au stabilit multe fabrici moderne.",
      en: "An important industrial location north of Santa Cruz, home to many modern manufacturing plants."
    },
    facts: {
      de: ["Wichtiger Industriepark.", "Nahe am Flughafen Viru Viru.", "Wächst sehr schnell."],
      hu: ["Jelentős ipari parkkal rendelkezik.", "Közel van a Viru Viru repülőtérhez.", "Nagyon gyorsan növekszik."],
      ro: ["Parc industrial major.", "Aproape de aeroportul Viru Viru.", "Crește foarte repede."],
      en: ["Major industrial park.", "Close to Viru Viru Airport.", "Growing very rapidly."]
    }
  },
  {
    id: "la-guardia-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.3167, -17.8833],
    name: { de: "La Guardia", hu: "La Guardia", ro: "La Guardia", en: "La Guardia" },
    description: {
      de: "Eine florierende Satellitenstadt von Santa Cruz de la Sierra, die als Tor zu den westlichen Tälern dient.",
      hu: "Santa Cruz de la Sierra virágzó szatellitvárosa, amely a nyugati völgyek felé vezető kapuként szolgál.",
      ro: "Un oraș satelit înfloritor al Santa Cruz de la Sierra, care servește drept poartă către văile vestice.",
      en: "A thriving satellite city of Santa Cruz de la Sierra, serving as the gateway to the western valleys."
    },
    facts: {
      de: ["Teil der Metropolregion Santa Cruz.", "Verbindungsstadt in den Westen.", "Hohes Bevölkerungswachstum."],
      hu: ["A Santa Cruz-i agglomeráció része.", "Összekötő város a nyugati országrésszel.", "Magas népességnövekedés jellemzi."],
      ro: ["Parte a zonei metropolitane Santa Cruz.", "Oraș de legătură spre vest.", "Creștere ridicată a populației."],
      en: ["Part of the Santa Cruz metropolitan area.", "Gateway city to the west.", "High population growth."]
    }
  },
  {
    id: "viacha-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-68.3000, -16.6500],
    name: { de: "Viacha", hu: "Viacha", ro: "Viacha", en: "Viacha" },
    description: {
      de: "Eine Industriestadt auf dem Altiplano in der Nähe von La Paz, landesweit bekannt für ihre Zementproduktion.",
      hu: "Ipari város az Altiplano-n La Paz közelében, amely országosan ismert a cementgyártásáról.",
      ro: "Un oraș industrial pe Altiplano lângă La Paz, cunoscut la nivel național pentru producția sa de ciment.",
      en: "An industrial city on the Altiplano near La Paz, nationally known for its cement production."
    },
    facts: {
      de: ["Große Zementfabrik (SOBOCE).", "Liegt auf über 3.800 m.", "Eisenbahnknotenpunkt."],
      hu: ["Nagy cementgyár (SOBOCE) található itt.", "Több mint 3800 méteren fekszik.", "Vasúti csomópont."],
      ro: ["Fabrică mare de ciment (SOBOCE).", "Situat la peste 3.800 m.", "Nod feroviar important."],
      en: ["Large cement factory (SOBOCE).", "Located above 3,800 m.", "Important railway junction."]
    }
  },
  {
    id: "yacuiba-cities-v2",
    type: "city",
    parent: "BO-T",
    coords: [-63.6775, -22.0167],
    name: { de: "Yacuiba", hu: "Yacuiba", ro: "Yacuiba", en: "Yacuiba" },
    description: {
      de: "Eine lebhafte Grenzstadt im Süden Boliviens, die stark vom Handel mit dem benachbarten Argentinien abhängt.",
      hu: "Élénk határváros Bolívia déli részén, amelynek gazdasága erősen függ a szomszédos Argentínával folytatott kereskedelemtől.",
      ro: "Un oraș de graniță animat în sudul Boliviei, care depinde puternic de comerțul cu Argentina vecină.",
      en: "A bustling border town in southern Bolivia, heavily reliant on cross-border trade with neighboring Argentina."
    },
    facts: {
      de: ["Grenzstadt zu Argentinien.", "Wichtiges Handelszentrum.", "Reich an Erdgasvorkommen im Umland."],
      hu: ["Határváros Argentína felé.", "Fontos kereskedelmi csomópont.", "A környék gazdag földgázban."],
      ro: ["Oraș de graniță cu Argentina.", "Centru comercial important.", "Zonă bogată în gaze naturale."],
      en: ["Border town with Argentina.", "Important trading center.", "Surrounding area is rich in natural gas."]
    }
  },
  {
    id: "colcapirhua-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.2333, -17.3833],
    name: { de: "Colcapirhua", hu: "Colcapirhua", ro: "Colcapirhua", en: "Colcapirhua" },
    description: {
      de: "Eine dicht besiedelte Stadtgemeinde in der Metropolregion von Cochabamba mit starkem Fokus auf Kleinindustrie.",
      hu: "Sűrűn lakott városi terület Cochabamba agglomerációjában, amely erősen a kisiparra összpontosít.",
      ro: "Un municipiu dens populat din zona metropolitană Cochabamba, cu un accent puternic pe mica industrie.",
      en: "A densely populated municipality in the Cochabamba metropolitan area with a strong focus on light industry."
    },
    facts: {
      de: ["Liegt zwischen Cochabamba und Quillacollo.", "Dicht besiedeltes Gebiet.", "Zentrum für Handwerk."],
      hu: ["Cochabamba és Quillacollo között fekszik.", "Sűrűn lakott terület.", "A kézművesipar egyik központja."],
      ro: ["Situat între Cochabamba și Quillacollo.", "Zonă dens populată.", "Centru pentru meșteșuguri."],
      en: ["Located between Cochabamba and Quillacollo.", "Densely populated area.", "Center for handicrafts."]
    }
  },
  {
    id: "tiquipaya-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.2167, -17.3333],
    name: { de: "Tiquipaya", hu: "Tiquipaya", ro: "Tiquipaya", en: "Tiquipaya" },
    description: {
      de: "Wird oft als Blumenhauptstadt Boliviens bezeichnet und liegt in einem kühlen, grünen Tal nahe Cochabamba.",
      hu: "Gyakran Bolívia virágfővárosaként emlegetik, és egy hűvös, zöld völgyben fekszik Cochabamba közelében.",
      ro: "Adesea numită capitala florilor din Bolivia, situată într-o vale verde și răcoroasă lângă Cochabamba.",
      en: "Often referred to as the flower capital of Bolivia, located in a cool, green valley near Cochabamba."
    },
    facts: {
      de: ["Bekannt als Hauptstadt der Blumen.", "Beliebter Wohnort.", "Veranstaltet Umweltgipfel."],
      hu: ["A virágok fővárosaként ismert.", "Népszerű lakóövezet.", "Környezetvédelmi csúcstalálkozókat is rendeznek itt."],
      ro: ["Cunoscută drept capitala florilor.", "Zonă rezidențială populară.", "Găzduiește summit-uri de mediu."],
      en: ["Known as the capital of flowers.", "Popular residential area.", "Hosts environmental summits."]
    }
  },
  {
    id: "cobija-cities-v2",
    type: "state-capital",
    parent: "BO-N",
    coords: [-68.7667, -11.0333],
    name: { de: "Cobija", hu: "Cobija", ro: "Cobija", en: "Cobija" },
    description: {
      de: "Die nördlichste Departamento-Hauptstadt Boliviens im tiefen Regenwald, direkt an der brasilianischen Grenze gelegen.",
      hu: "Bolívia legészakibb megyeszékhelye a mély esőerdőben, közvetlenül a brazil határ mentén fekszik.",
      ro: "Cea mai nordică capitală de departament din Bolivia, în adâncul pădurii tropicale, chiar la granița cu Brazilia.",
      en: "The northernmost departmental capital of Bolivia in the deep rainforest, located right on the Brazilian border."
    },
    facts: {
      de: ["Hauptstadt des Departamentos Pando.", "Direkte Grenze zu Brasilien.", "Sehr tropisches Klima."],
      hu: ["Pando megye fővárosa.", "Közvetlen határ Brazíliával.", "Nagyon trópusi éghajlat."],
      ro: ["Capitala departamentului Pando.", "Graniță directă cu Brazilia.", "Climă foarte tropicală."],
      en: ["Capital of the Pando department.", "Direct border with Brazil.", "Very tropical climate."]
    }
  },
  {
    id: "vinto-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.3167, -17.4000],
    name: { de: "Vinto", hu: "Vinto", ro: "Vinto", en: "Vinto" },
    description: {
      de: "Eine ruhige Gemeinde im fruchtbaren unteren Tal von Cochabamba, die traditionell für ihren Apfelanbau bekannt ist.",
      hu: "Csendes település Cochabamba termékeny alsó völgyében, amely hagyományosan az almatermesztéséről ismert.",
      ro: "O comunitate liniștită în valea inferioară fertilă din Cochabamba, cunoscută tradițional pentru cultivarea merelor.",
      en: "A quiet municipality in the fertile lower valley of Cochabamba, traditionally known for apple cultivation."
    },
    facts: {
      de: ["Teil des unteren Cochabamba-Tals.", "Bekannt für Obstplantagen.", "Nahe bei Quillacollo."],
      hu: ["Az alsó Cochabamba-völgy része.", "Gyümölcsöseiről híres.", "Quillacollo közelében található."],
      ro: ["Parte a văii inferioare Cochabamba.", "Cunoscut pentru livezile de fructe.", "Aproape de Quillacollo."],
      en: ["Part of the lower Cochabamba valley.", "Known for its fruit orchards.", "Close to Quillacollo."]
    }
  },
  {
    id: "guayaramerin-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-65.3500, -10.8333],
    name: { de: "Guayaramerín", hu: "Guayaramerín", ro: "Guayaramerín", en: "Guayaramerín" },
    description: {
      de: "Ein wichtiger Flusshafen und Handelsstadt am Río Mamoré gegenüber der brasilianischen Stadt Guajará-Mirim.",
      hu: "Fontos folyami kikötő és kereskedőváros a Mamoré folyó partján, a brazil Guajará-Mirim várossal szemben.",
      ro: "Un important port fluvial și oraș comercial pe râul Mamoré, vizavi de orașul brazilian Guajará-Mirim.",
      en: "A major river port and trading town on the Mamoré River opposite the Brazilian city of Guajará-Mirim."
    },
    facts: {
      de: ["Grenzstadt zu Brasilien.", "Wichtiger Flusshafen.", "Liegt im Amazonasbecken."],
      hu: ["Brazíliával határos város.", "Fontos folyami kikötő.", "Az Amazonas-medencében fekszik."],
      ro: ["Oraș de graniță cu Brazilia.", "Port fluvial important.", "Situat în bazinul Amazonului."],
      en: ["Border town with Brazil.", "Important river port.", "Located in the Amazon basin."]
    }
  },
  {
    id: "villazon-cities-v2",
    type: "city",
    parent: "BO-P",
    coords: [-65.5942, -22.0875],
    name: { de: "Villazón", hu: "Villazón", ro: "Villazón", en: "Villazón" },
    description: {
      de: "Der südlichste Grenzposten Boliviens nach Argentinien, ein Knotenpunkt für internationalen Handel und Verkehr.",
      hu: "Bolívia legdélebbi határátkelője Argentína felé, a nemzetközi kereskedelem és forgalom fontos csomópontja.",
      ro: "Cel mai sudic punct de trecere a frontierei din Bolivia spre Argentina, un nod pentru comerțul internațional și trafic.",
      en: "Bolivia's southernmost border post with Argentina, a hub for international trade and transit."
    },
    facts: {
      de: ["Wichtigster Grenzübergang nach Argentinien im Süden.", "Gegenüber von La Quiaca.", "Kühles Hochlandklima."],
      hu: ["A legfontosabb déli határátkelő Argentínába.", "La Quiaca-val szemben fekszik.", "Hűvös hegyvidéki klíma."],
      ro: ["Cea mai importantă trecere a frontierei spre Argentina în sud.", "Vizavi de La Quiaca.", "Climă răcoroasă de munte."],
      en: ["Main border crossing to Argentina in the south.", "Opposite La Quiaca.", "Cool highland climate."]
    }
  },
  {
    id: "yapacani-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.8833, -17.4000],
    name: { de: "Yapacaní", hu: "Yapacaní", ro: "Yapacaní", en: "Yapacaní" },
    description: {
      de: "Ein wichtiger Knotenpunkt auf der Hauptfernstraße zwischen Santa Cruz und Cochabamba, umgeben von Reisfeldern.",
      hu: "Fontos csomópont a Santa Cruz és Cochabamba közötti főúton, amelyet hatalmas rizsföldek vesznek körül.",
      ro: "Un nod important pe autostrada principală dintre Santa Cruz și Cochabamba, înconjurat de câmpuri de orez.",
      en: "An important junction on the main highway between Santa Cruz and Cochabamba, surrounded by rice fields."
    },
    facts: {
      de: ["Liegt am Fluss Yapacaní.", "Strategische Lage an der Ruta 4.", "Starkes Agrarzentrum."],
      hu: ["A Yapacaní folyó mentén fekszik.", "Stratégiai elhelyezkedés a Ruta 4 főúton.", "Erős mezőgazdasági központ."],
      ro: ["Situat pe râul Yapacaní.", "Locație strategică pe Ruta 4.", "Centru agricol puternic."],
      en: ["Located on the Yapacaní River.", "Strategic location on Route 4.", "Strong agricultural center."]
    }
  },
  {
    id: "villamontes-cities-v2",
    type: "city",
    parent: "BO-T",
    coords: [-63.4500, -21.2667],
    name: { de: "Villamontes", hu: "Villamontes", ro: "Villamontes", en: "Villamontes" },
    description: {
      de: "Eine historische Stadt im Chaco, die während des Chacokrieges als bolivianisches Hauptquartier diente und heute für Fischfang bekannt ist.",
      hu: "Történelmi város a Gran Chacóban, amely a chaco-i háború idején bolíviai főhadiszállás volt, ma a horgászatáról ismert.",
      ro: "Un oraș istoric din Chaco care a servit ca sediu bolivian în timpul Războiului Chaco și este astăzi cunoscut pentru pescuit.",
      en: "A historical city in the Chaco that served as Bolivian headquarters during the Chaco War, now known for fishing."
    },
    facts: {
      de: ["Historischer Ort des Chaco-Krieges.", "Liegt am Río Pilcomayo.", "Eine der heißesten Städte Boliviens."],
      hu: ["A chaco-i háború történelmi helyszíne.", "A Pilcomayo folyó partján fekszik.", "Bolívia egyik legmelegebb városa."],
      ro: ["Sit istoric al Războiului Chaco.", "Situat pe râul Pilcomayo.", "Unul dintre cele mai fierbinți orașe din Bolivia."],
      en: ["Historical site of the Chaco War.", "Located on the Pilcomayo River.", "One of the hottest cities in Bolivia."]
    }
  },
  {
    id: "bermejo-cities-v2",
    type: "city",
    parent: "BO-T",
    coords: [-64.3333, -22.7333],
    name: { de: "Bermejo", hu: "Bermejo", ro: "Bermejo", en: "Bermejo" },
    description: {
      de: "Eine isolierte Grenzstadt im extremen Süden Boliviens, deren Wirtschaft stark auf die Zuckerindustrie ausgerichtet ist.",
      hu: "Elszigetelt határváros Bolívia legdélebbi részén, amelynek gazdasága erősen a cukoriparra épül.",
      ro: "Un oraș de graniță izolat în sudul extrem al Boliviei, a cărui economie este puternic orientată spre industria zahărului.",
      en: "An isolated border town in the extreme south of Bolivia, with an economy heavily focused on the sugar industry."
    },
    facts: {
      de: ["Grenzstadt zu Argentinien.", "Bedeutende Zuckerrohrindustrie.", "Tropisches Mikroklima."],
      hu: ["Argentin határváros.", "Jelentős cukornádipar.", "Trópusi mikroklímája van."],
      ro: ["Oraș de graniță cu Argentina.", "Industria trestiei de zahăr semnificativă.", "Microclimat tropical."],
      en: ["Border town with Argentina.", "Significant sugarcane industry.", "Tropical microclimate."]
    }
  },
  {
    id: "camiri-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.5167, -19.0333],
    name: { de: "Camiri", hu: "Camiri", ro: "Camiri", en: "Camiri" },
    description: {
      de: "Einst das boomende Zentrum der bolivianischen Ölindustrie, trägt sie bis heute den Titel 'Erdölhauptstadt Boliviens'.",
      hu: "Egykor a bolíviai olajipar virágzó központja volt, mind a mai napig a 'Bolívia kőolaj-fővárosa' címet viseli.",
      ro: "Cândva centrul înfloritor al industriei petroliere boliviene, poartă și astăzi titlul de 'capitală petrolieră a Boliviei'.",
      en: "Once the booming center of the Bolivian oil industry, it still holds the title of the 'oil capital of Bolivia'."
    },
    facts: {
      de: ["Ehemaliges Öl-Zentrum.", "Befindet sich im Cordillera-Gebirge.", "Nahe dem Ort von Che Guevaras Gefangennahme."],
      hu: ["Egykori olajközpont.", "A Cordillera-hegységben található.", "Közel van Che Guevara elfogásának helyszínéhez."],
      ro: ["Fost centru petrolier.", "Situat în Munții Cordillera.", "Aproape de locul capturării lui Che Guevara."],
      en: ["Former oil hub.", "Located in the Cordillera mountains.", "Near the site of Che Guevara's capture."]
    }
  },
  {
    id: "tupiza-cities-v2",
    type: "city",
    parent: "BO-P",
    coords: [-65.7167, -21.4333],
    name: { de: "Tupiza", hu: "Tupiza", ro: "Tupiza", en: "Tupiza" },
    description: {
      de: "Umgeben von dramatischen roten Felsformationen ist Tupiza ein beliebtes Ziel für Touristen und Legenden um Butch Cassidy.",
      hu: "A drámai vörös sziklaképződményekkel körülvett Tupiza népszerű turisztikai célpont, ahol Butch Cassidy legendája is él.",
      ro: "Înconjurat de formațiuni stâncoase roșii dramatice, Tupiza este o destinație turistică populară legată de Butch Cassidy.",
      en: "Surrounded by dramatic red rock formations, Tupiza is a popular tourist destination tied to the legends of Butch Cassidy."
    },
    facts: {
      de: ["Bekannt für Rote Felsen.", "Angenehmeres Klima als Potosí.", "Historische Outlaw-Verbindungen."],
      hu: ["A vörös szikláiról ismert.", "Kellemesebb a klímája, mint Potosínak.", "Történelmi betyárkapcsolatok."],
      ro: ["Cunoscut pentru stâncile roșii.", "Climă mai blândă decât Potosí.", "Conexiuni istorice cu haiduci."],
      en: ["Known for red rocks.", "Milder climate than Potosí.", "Historical outlaw connections."]
    }
  },
  {
    id: "llallagua-cities-v2",
    type: "city",
    parent: "BO-P",
    coords: [-66.5833, -18.4167],
    name: { de: "Llallagua", hu: "Llallagua", ro: "Llallagua", en: "Llallagua" },
    description: {
      de: "Eine der historisch bedeutendsten Zinnbergbaustädte der Welt, in der die legendäre Siglo-XX-Mine den Reichtum begründete.",
      hu: "A világ egyik történelmileg legjelentősebb ónbányász városa, ahol a legendás Siglo XX bánya alapozta meg a vagyont.",
      ro: "Unul dintre cele mai importante orașe istorice de exploatare a staniului din lume, unde mina Siglo XX a creat bogăție.",
      en: "One of the most historically significant tin-mining towns in the world, where the legendary Siglo XX mine built vast wealth."
    },
    facts: {
      de: ["Ehemalige größte Zinnmine der Welt.", "Sehr kaltes Klima.", "Zentrum der Arbeiterbewegung."],
      hu: ["Egykor a világ legnagyobb ónbányája volt itt.", "Nagyon hideg éghajlat.", "A munkásmozgalom egyik központja."],
      ro: ["Fosta cea mai mare mină de staniu din lume.", "Climă foarte rece.", "Centru al mișcării muncitorești."],
      en: ["Former site of the world's largest tin mine.", "Very cold climate.", "Center of the labor movement."]
    }
  },
  {
    id: "san-ignacio-de-velasco-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-60.9500, -16.3667],
    name: { de: "San Ignacio de Velasco", hu: "San Ignacio de Velasco", ro: "San Ignacio de Velasco", en: "San Ignacio de Velasco" },
    description: {
      de: "Die größte Stadt der bolivianischen Chiquitania, berühmt für ihre wunderschöne jesuitische Missionskirche aus Holz.",
      hu: "A bolíviai Chiquitania régió legnagyobb városa, amely gyönyörű, fából épült jezsuita missziós templomáról híres.",
      ro: "Cel mai mare oraș din regiunea Chiquitania din Bolivia, faimos pentru frumoasa sa biserică iezuită din lemn.",
      en: "The largest city in the Bolivian Chiquitania, famous for its beautifully crafted wooden Jesuit mission church."
    },
    facts: {
      de: ["Tor zu den Jesuitenmissionen.", "Holzverarbeitungszentrum.", "Großer zentraler Platz."],
      hu: ["A jezsuita missziók kapuja.", "Fafeldolgozó központ.", "Hatalmas központi térrel rendelkezik."],
      ro: ["Poarta către misiunile iezuite.", "Centru de prelucrare a lemnului.", "Piață centrală mare."],
      en: ["Gateway to the Jesuit missions.", "Woodworking center.", "Large central plaza."]
    }
  },
  {
    id: "san-julian-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-62.6167, -16.9000],
    name: { de: "San Julián", hu: "San Julián", ro: "San Julián", en: "San Julián" },
    description: {
      de: "Eine landwirtschaftliche Modellstadt, die durch organisierte Besiedlung entstand und heute führend in der Soja-Produktion ist.",
      hu: "Egy mezőgazdasági modellváros, amely szervezett betelepítéssel jött létre, és ma vezető szerepet tölt be a szójatermesztésben.",
      ro: "Un oraș agricol model care a apărut prin așezare organizată și este astăzi lider în producția de soia.",
      en: "An agricultural model city that emerged through organized settlement and is today a leader in soy production."
    },
    facts: {
      de: ["Bedeutendes Soja-Anbaugebiet.", "Moderne Planstadt.", "Hoher Anteil an Migranten aus dem Andenhochland."],
      hu: ["Jelentős szójatermelő terület.", "Modern tervezett város.", "Sok betelepülő érkezett az Andokból."],
      ro: ["Zonă importantă de cultivare a soiei.", "Oraș modern planificat.", "Proporție mare de migranți din Anzi."],
      en: ["Major soy-producing area.", "Modern planned city.", "High proportion of migrants from the Andean highlands."]
    }
  },
  {
    id: "huanuni-cities-v2",
    type: "city",
    parent: "BO-O",
    coords: [-66.8333, -18.2833],
    name: { de: "Huanuni", hu: "Huanuni", ro: "Huanuni", en: "Huanuni" },
    description: {
      de: "Eine raue Bergbausiedlung in Oruro, in der sich eine der größten staatlich geführten Zinnminen des Landes befindet.",
      hu: "Egy zord bányásztelepülés Oruro megyében, ahol az ország egyik legnagyobb állami tulajdonú ónbányája működik.",
      ro: "O așezare minieră aspră din Oruro, care găzduiește una dintre cele mai mari mine de staniu administrate de stat.",
      en: "A rugged mining settlement in Oruro that hosts one of the country's largest state-run tin mines."
    },
    facts: {
      de: ["Große Zinnmine (Posokoni).", "Starke Gewerkschaftspräsenz.", "Kaltes, trockenes Klima."],
      hu: ["Hatalmas ónbánya (Posokoni) van itt.", "Erős szakszervezeti jelenlét.", "Hideg, száraz klíma."],
      ro: ["Mină mare de staniu (Posokoni).", "Prezență sindicală puternică.", "Climă rece și uscată."],
      en: ["Large tin mine (Posokoni).", "Strong union presence.", "Cold, dry climate."]
    }
  },
  {
    id: "punata-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-65.8333, -17.5500],
    name: { de: "Punata", hu: "Punata", ro: "Punata", en: "Punata" },
    description: {
      de: "Bekannt als das Herz des Hochtals von Cochabamba und berühmt für die Herstellung von Chicha, einem traditionellen Maisbier.",
      hu: "A cochabambai Magas-völgy szíveként ismert, amely egy hagyományos kukoricasör, a chicha készítéséről híres.",
      ro: "Cunoscută drept inima văii înalte din Cochabamba și faimoasă pentru producția de chicha, o bere tradițională de porumb.",
      en: "Known as the heart of the High Valley of Cochabamba and famous for producing chicha, a traditional corn beer."
    },
    facts: {
      de: ["Hauptstadt der Chicha.", "Traditionelle Märkte.", "Fruchtbares Landwirtschaftsgebiet."],
      hu: ["A chicha fővárosa.", "Hagyományos piacok találhatók itt.", "Termékeny mezőgazdasági vidék."],
      ro: ["Capitala băuturii chicha.", "Piețe tradiționale.", "Zonă agricolă fertilă."],
      en: ["Capital of chicha.", "Traditional markets.", "Fertile agricultural area."]
    }
  },
  {
    id: "cotoca-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-62.9833, -17.7500],
    name: { de: "Cotoca", hu: "Cotoca", ro: "Cotoca", en: "Cotoca" },
    description: {
      de: "Ein wichtiger Wallfahrtsort östlich von Santa Cruz, in dem die Schutzpatronin des bolivianischen Ostens verehrt wird.",
      hu: "Fontos zarándokhely Santa Cruz-tól keletre, ahol a bolíviai keleti országrész védőszentjét tisztelik.",
      ro: "Un important loc de pelerinaj la est de Santa Cruz, unde este venerată sfânta patroană a estului bolivian.",
      en: "An important pilgrimage site east of Santa Cruz where the patron saint of the Bolivian east is venerated."
    },
    facts: {
      de: ["Wallfahrtskirche von Cotoca.", "Berühmt für lokales Gebäck.", "Nahe Santa Cruz."],
      hu: ["A cotocai zarándoktemplom otthona.", "Helyi péksüteményeiről híres.", "Santa Cruz közelében fekszik."],
      ro: ["Biserica de pelerinaj din Cotoca.", "Faimos pentru produsele de patiserie locale.", "Aproape de Santa Cruz."],
      en: ["Pilgrimage church of Cotoca.", "Famous for local baked goods.", "Near Santa Cruz."]
    }
  },
  {
    id: "ascension-de-guarayos-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.1833, -15.8667],
    name: { de: "Ascensión de Guarayos", hu: "Ascensión de Guarayos", ro: "Ascensión de Guarayos", en: "Ascensión de Guarayos" },
    description: {
      de: "Eine wachsende Stadt auf halbem Weg zwischen Santa Cruz und Trinidad, die als Zentrum des Guarayos-Tals dient.",
      hu: "Növekvő város félúton Santa Cruz és Trinidad között, amely a Guarayos-völgy központjaként funkcionál.",
      ro: "Un oraș în creștere la jumătatea distanței dintre Santa Cruz și Trinidad, care servește drept centru al văii Guarayos.",
      en: "A growing city halfway between Santa Cruz and Trinidad, serving as the center of the Guarayos valley."
    },
    facts: {
      de: ["Zentrum der Guarayos-Kultur.", "Bedeutende Ananas-Produktion.", "Wichtiger Zwischenstopp."],
      hu: ["A Guarayos kultúra központja.", "Jelentős ananásztermelés.", "Fontos pihenőhely utazóknak."],
      ro: ["Centrul culturii Guarayos.", "Producție semnificativă de ananas.", "Popas important."],
      en: ["Center of Guarayos culture.", "Significant pineapple production.", "Important rest stop."]
    }
  },
  {
    id: "achocalla-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-68.1667, -16.5667],
    name: { de: "Achocalla", hu: "Achocalla", ro: "Achocalla", en: "Achocalla" },
    description: {
      de: "Ein tiefer gelegenes Talgebiet am Rand von El Alto, das der Metropole als grünes Naherholungsgebiet dient.",
      hu: "Egy mélyebben fekvő völgy El Alto szélén, amely zöld rekreációs területként szolgál a metropolisz számára.",
      ro: "O vale la o altitudine mai joasă la marginea El Alto, care servește drept zonă de recreere verde pentru metropolă.",
      en: "A lower-lying valley area on the edge of El Alto that serves as a green recreational zone for the metropolis."
    },
    facts: {
      de: ["Hat eine Lagune zur Erholung.", "Viel Landwirtschaft.", "Wärmeres Klima als El Alto."],
      hu: ["Egy lagúna is található itt a pihenni vágyóknak.", "Sok a mezőgazdasági terület.", "Melegebb a klímája, mint El Altonak."],
      ro: ["Are o lagună pentru recreere.", "Multă agricultură.", "Climă mai caldă decât El Alto."],
      en: ["Features a lagoon for recreation.", "Lots of agriculture.", "Warmer climate than El Alto."]
    }
  },
  {
    id: "mineros-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.2333, -17.1167],
    name: { de: "Mineros", hu: "Mineros", ro: "Mineros", en: "Mineros" },
    description: {
      de: "Das Herz des Zuckerrohranbaugebiets in Nord-Santa Cruz, das für seinen industriellen Landbau von großer Bedeutung ist.",
      hu: "A cukornádtermesztő vidék szíve Észak-Santa Cruzban, amely ipari mezőgazdasága révén kiemelkedő jelentőségű.",
      ro: "Inima zonei de cultivare a trestiei de zahăr din nordul Santa Cruz, de mare importanță pentru agricultura sa industrială.",
      en: "The heart of the sugarcane growing area in northern Santa Cruz, of great importance for its industrial agriculture."
    },
    facts: {
      de: ["Umfangreicher Zuckerrohranbau.", "Dichtes Netz von Feldwegen.", "Zieht Saisonarbeiter an."],
      hu: ["Kiterjedt cukornádültetvények.", "Földutak sűrű hálózata.", "Sok idénymunkást vonz."],
      ro: ["Cultivare extinsă de trestie de zahăr.", "Rețea densă de drumuri de pământ.", "Atrage muncitori sezonieri."],
      en: ["Extensive sugarcane cultivation.", "Dense network of dirt roads.", "Attracts seasonal workers."]
    }
  },
  {
    id: "uyuni-cities-v2",
    type: "city",
    parent: "BO-P",
    coords: [-66.8250, -20.4597],
    name: { de: "Uyuni", hu: "Uyuni", ro: "Uyuni", en: "Uyuni" },
    description: {
      de: "Das raue Tor zur größten Salzwüste der Welt, geprägt von extremem Wind und einem surrealen Eisenbahnfriedhof.",
      hu: "A világ legnagyobb sósivatagának zord kapuja, amelyet az extrém szél és egy szürreális vonat-temető jellemez.",
      ro: "Poarta aspră către cel mai mare deșert de sare din lume, caracterizată prin vânt extrem și un cimitir de trenuri ireal.",
      en: "The harsh gateway to the world's largest salt flat, characterized by extreme winds and a surreal train cemetery."
    },
    facts: {
      de: ["Tor zum Salar de Uyuni.", "Bekannt für den Zugfriedhof.", "Wichtiger Tourismusort."],
      hu: ["A Salar de Uyuni kapuja.", "A vonattemetőről ismert.", "Kiemelt turisztikai központ."],
      ro: ["Poarta către Salar de Uyuni.", "Cunoscut pentru cimitirul de trenuri.", "Centru turistic important."],
      en: ["Gateway to the Salar de Uyuni.", "Known for the train cemetery.", "Important tourist center."]
    }
  },
  {
    id: "san-borja-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-66.7333, -14.8667],
    name: { de: "San Borja", hu: "San Borja", ro: "San Borja", en: "San Borja" },
    description: {
      de: "Ein geschäftiges Rinderzuchtzentrum im westlichen Beni, das als Ausgangspunkt für Dschungelexpeditionen dient.",
      hu: "Nyüzsgő szarvasmarha-tenyésztési központ Nyugat-Beniben, amely dzsungel-expedíciók kiindulópontjaként is szolgál.",
      ro: "Un centru aglomerat de creștere a vitelor în vestul Beni, care servește ca punct de plecare pentru expedițiile în junglă.",
      en: "A bustling cattle-ranching center in western Beni that serves as a starting point for jungle expeditions."
    },
    facts: {
      de: ["Zentrum der Rinderzucht.", "Heimat indigener Gruppen.", "Liegt in der Pampa-Region."],
      hu: ["A szarvasmarha-tenyésztés központja.", "Bennszülött csoportok otthona.", "A pampa régióban fekszik."],
      ro: ["Centrul creșterii vitelor.", "Acasă pentru grupuri indigene.", "Situat în regiunea pampelor."],
      en: ["Center of cattle ranching.", "Home to indigenous groups.", "Located in the pampas region."]
    }
  },
  {
    id: "el-torno-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.3833, -17.9833],
    name: { de: "El Torno", hu: "El Torno", ro: "El Torno", en: "El Torno" },
    description: {
      de: "Eine fruchtbare Gemeinde nahe Santa Cruz, in der Zitrusfrüchte und Kaffee für den regionalen Markt angebaut werden.",
      hu: "Termékeny település Santa Cruz közelében, ahol citrusféléket és kávét termesztenek a regionális piac számára.",
      ro: "Un municipiu fertil lângă Santa Cruz, unde se cultivă citrice și cafea pentru piața regională.",
      en: "A fertile municipality near Santa Cruz where citrus fruits and coffee are grown for the regional market."
    },
    facts: {
      de: ["Teil des Amboró-Nationalparks-Einflussgebiets.", "Agrarzentrum.", "Produziert viele Zitrusfrüchte."],
      hu: ["Az Amboró Nemzeti Park vonzáskörzetének része.", "Mezőgazdasági központ.", "Sok citrusfélét termeszt."],
      ro: ["Parte a zonei de influență a Parcului Național Amboró.", "Centru agricol.", "Produce multe citrice."],
      en: ["Part of the Amboró National Park influence zone.", "Agricultural center.", "Produces many citrus fruits."]
    }
  },
  {
    id: "puerto-suarez-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-57.8000, -18.9667],
    name: { de: "Puerto Suárez", hu: "Puerto Suárez", ro: "Puerto Suárez", en: "Puerto Suárez" },
    description: {
      de: "Die letzte große Stadt vor der brasilianischen Grenze, gelegen am Rand des Pantanal-Feuchtgebiets mit reichlich Eisenerz in der Nähe.",
      hu: "Az utolsó nagyváros a brazil határ előtt, a Pantanal vizes élőhelyének szélén, bőséges vasérc-készletekkel a közelben.",
      ro: "Ultimul oraș mare înainte de granița braziliană, situat la marginea zonei umede Pantanal, cu minereu de fier din abundență în apropiere.",
      en: "The last major city before the Brazilian border, located on the edge of the Pantanal wetland with abundant iron ore nearby."
    },
    facts: {
      de: ["Tor zum Pantanal.", "Nahe dem Mutún-Eisenerzberg.", "Grenzstadt zu Brasilien."],
      hu: ["A Pantanal kapuja.", "A Mutún vasérchegy közelében van.", "Határváros Brazíliával."],
      ro: ["Poarta către Pantanal.", "Aproape de muntele de fier Mutún.", "Oraș de graniță cu Brazilia."],
      en: ["Gateway to the Pantanal.", "Near the Mutún iron ore mountain.", "Border town with Brazil."]
    }
  },
  {
    id: "portachuelo-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.4000, -17.3333],
    name: { de: "Portachuelo", hu: "Portachuelo", ro: "Portachuelo", en: "Portachuelo" },
    description: {
      de: "Bekannt im ganzen Land für seine exzellenten traditionellen Backwaren und die klassische landwirtschaftliche Produktion.",
      hu: "Országszerte híres kiváló minőségű hagyományos pékáruiról és klasszikus mezőgazdasági termeléséről.",
      ro: "Cunoscut în toată țara pentru produsele de patiserie tradiționale excelente și producția agricolă clasică.",
      en: "Known throughout the country for its excellent traditional baked goods and classical agricultural production."
    },
    facts: {
      de: ["Berühmt für traditionelles Brot und Gebäck.", "Eine der ältesten Städte in der Region.", "Fruchtbare Böden."],
      hu: ["Híres a hagyományos kenyérről és péksüteményekről.", "A régió egyik legrégebbi városa.", "Termékeny talajjal rendelkezik."],
      ro: ["Faimos pentru pâinea și produsele de patiserie tradiționale.", "Unul dintre cele mai vechi orașe din regiune.", "Soluri fertile."],
      en: ["Famous for traditional bread and pastries.", "One of the oldest towns in the region.", "Fertile soils."]
    }
  },
  {
    id: "caranavi-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-67.5500, -15.8167],
    name: { de: "Caranavi", hu: "Caranavi", ro: "Caranavi", en: "Caranavi" },
    description: {
      de: "Die Kaffee-Hauptstadt Boliviens liegt in den subtropischen Yungas-Tälern, umgeben von dichtem Grün und Obstplantagen.",
      hu: "Bolívia kávéfővárosa, amely a szubtrópusi Yungas-völgyekben fekszik, buja növényzet és gyümölcsösök ölelésében.",
      ro: "Capitala cafelei din Bolivia se află în văile subtropicale Yungas, înconjurată de verdeață densă și livezi.",
      en: "The coffee capital of Bolivia is located in the subtropical Yungas valleys, surrounded by dense greenery and orchards."
    },
    facts: {
      de: ["Kaffeehauptstadt Boliviens.", "Liegt in den Yungas.", "Sehr subtropisches Klima."],
      hu: ["Bolívia kávéfővárosa.", "A Yungas régióban fekszik.", "Erősen szubtrópusi éghajlatú."],
      ro: ["Capitala cafelei din Bolivia.", "Situat în regiunea Yungas.", "Climă foarte subtropicală."],
      en: ["Coffee capital of Bolivia.", "Located in the Yungas region.", "Very subtropical climate."]
    }
  },
  {
    id: "rurrenabaque-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-67.5278, -14.4414],
    name: { de: "Rurrenabaque", hu: "Rurrenabaque", ro: "Rurrenabaque", en: "Rurrenabaque" },
    description: {
      de: "Ein weltbekannter Ausgangspunkt für Ökotourismus, um die Pampa und den Madidi-Nationalpark im Dschungel zu erkunden.",
      hu: "Világhírű ökoturisztikai kiindulópont, ahonnan a Pampák és a Madidi Nemzeti Park dzsungele is könnyen elérhető.",
      ro: "Un punct de plecare de renume mondial pentru ecoturism, pentru a explora Pampa și Parcul Național Madidi din junglă.",
      en: "A world-renowned starting point for ecotourism to explore the Pampas and the Madidi National Park in the jungle."
    },
    facts: {
      de: ["Tor zum Madidi-Nationalpark.", "Großer Ökotourismus-Hub.", "Liegt am Río Beni."],
      hu: ["A Madidi Nemzeti Park kapuja.", "Jelentős ökoturisztikai központ.", "A Beni folyó mentén található."],
      ro: ["Poarta către Parcul Național Madidi.", "Un centru major de ecoturism.", "Situat pe râul Beni."],
      en: ["Gateway to the Madidi National Park.", "Major ecotourism hub.", "Located on the Beni River."]
    }
  },
  {
    id: "challapata-cities-v2",
    type: "city",
    parent: "BO-O",
    coords: [-66.7667, -18.9000],
    name: { de: "Challapata", hu: "Challapata", ro: "Challapata", en: "Challapata" },
    description: {
      de: "Eine Hochlandstadt, die als eines der wichtigsten Zentren für die Produktion von Quinoa in Südamerika gilt.",
      hu: "Hegyvidéki város, amelyet Dél-Amerika egyik legfontosabb quinoatermelő központjaként tartanak számon.",
      ro: "Un oraș de munte care este considerat unul dintre cele mai importante centre de producție a quinovei din America de Sud.",
      en: "A highland city that is considered one of the most important centers for quinoa production in South America."
    },
    facts: {
      de: ["Agrarzentrum des Altiplano.", "Berühmt für den Quinoa-Anbau.", "Hat einen großen Agrarmarkt."],
      hu: ["Az Altiplano mezőgazdasági központja.", "A quinoatermesztésről híres.", "Hatalmas agrárpiaca van."],
      ro: ["Centrul agricol din Altiplano.", "Faimos pentru cultivarea quinovei.", "Are o mare piață agricolă."],
      en: ["Agricultural center of the Altiplano.", "Famous for quinoa cultivation.", "Has a large agricultural market."]
    }
  },
  {
    id: "santa-ana-del-yacuma-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-65.4333, -13.7500],
    name: { de: "Santa Ana del Yacuma", hu: "Santa Ana del Yacuma", ro: "Santa Ana del Yacuma", en: "Santa Ana del Yacuma" },
    description: {
      de: "Tief in den Savannen von Beni gelegen, dreht sich hier fast alles um weitläufige Rinderzucht auf riesigen Farmen.",
      hu: "Mélyen a beni szavannákon fekszik, és itt szinte minden a hatalmas farmokon folyó szarvasmarha-tenyésztés körül forog.",
      ro: "Aflat adânc în savanele din Beni, aici aproape totul se învârte în jurul creșterii extinse a vitelor la ferme uriașe.",
      en: "Located deep in the savannas of Beni, almost everything here revolves around extensive cattle ranching on giant farms."
    },
    facts: {
      de: ["Klassische Cowboy-Stadt.", "Infrastruktur für Viehzucht.", "Abgelegen im Amazonas-Tiefland."],
      hu: ["Klasszikus cowboy-város.", "Állattenyésztési infrastruktúra.", "Félreeső helyen az Amazonas-alföldön."],
      ro: ["Oraș clasic de cowboy.", "Infrastructură pentru creșterea animalelor.", "Izolat în câmpiile Amazonului."],
      en: ["Classic cowboy town.", "Infrastructure for cattle ranching.", "Isolated in the Amazon lowlands."]
    }
  },
  {
    id: "san-jose-de-chiquitos-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-60.7333, -17.8333],
    name: { de: "San José de Chiquitos", hu: "San José de Chiquitos", ro: "San José de Chiquitos", en: "San José de Chiquitos" },
    description: {
      de: "Ein historisches Juwel mit der einzigen Jesuitenkirche der Region, die aus Stein statt aus Holz gebaut wurde.",
      hu: "Történelmi ékszerdoboz a régió egyetlen olyan jezsuita templomával, amelyet fa helyett kőből építettek.",
      ro: "O bijuterie istorică având singura biserică iezuită din regiune care a fost construită din piatră în loc de lemn.",
      en: "A historic jewel featuring the only Jesuit church in the region that was built entirely out of stone rather than wood."
    },
    facts: {
      de: ["Besondere Jesuitenmission aus Stein.", "Historisch sehr bedeutsam.", "Liegt an der Eisenbahn nach Brasilien."],
      hu: ["Különleges kőből épült jezsuita misszió.", "Történelmileg nagyon fontos.", "A Brazíliába tartó vasútvonalon fekszik."],
      ro: ["Misiune iezuită specială din piatră.", "Foarte semnificativ istoric.", "Situat pe calea ferată spre Brazilia."],
      en: ["Special stone Jesuit mission.", "Historically very significant.", "Located on the railway to Brazil."]
    }
  },
  {
    id: "sipe-sipe-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.3667, -17.4500],
    name: { de: "Sipe Sipe", hu: "Sipe Sipe", ro: "Sipe Sipe", en: "Sipe Sipe" },
    description: {
      de: "Eine ruhige Ortschaft, die von landwirtschaftlichen Feldern und nahegelegenen präkolumbianischen Ruinen wie Inka Rakay umgeben ist.",
      hu: "Csendes település, amelyet mezőgazdasági területek és a közeli prekolumbián romok (pl. Inka Rakay) vesznek körül.",
      ro: "Un sat liniștit înconjurat de câmpuri agricole și de ruine precolumbiene din apropiere, precum Inka Rakay.",
      en: "A quiet village surrounded by agricultural fields and nearby pre-Columbian ruins such as Inka Rakay."
    },
    facts: {
      de: ["Nahe den Inka-Ruinen von Inka Rakay.", "Traditionelle Traubenernte.", "Teil des Cochabamba-Tals."],
      hu: ["Az Inka Rakay romok közelében van.", "Hagyományos szőlőszüretéről ismert.", "A Cochabamba-völgy része."],
      ro: ["Aproape de ruinele Inca din Inka Rakay.", "Recolta tradițională de struguri.", "Parte a Văii Cochabamba."],
      en: ["Near the Inca ruins of Inka Rakay.", "Traditional grape harvest.", "Part of the Cochabamba Valley."]
    }
  },
  {
    id: "patacamaya-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-67.9167, -17.2333],
    name: { de: "Patacamaya", hu: "Patacamaya", ro: "Patacamaya", en: "Patacamaya" },
    description: {
      de: "Eine entscheidende Straßenkreuzung auf dem Altiplano, in deren Nähe ein bedeutendes astronomisches Observatorium steht.",
      hu: "Döntő fontosságú útkereszteződés az Altiplanon, amelynek közelében egy jelentős csillagvizsgáló is áll.",
      ro: "O intersecție rutieră crucială pe Altiplano, în apropierea căreia se află un observator astronomic important.",
      en: "A crucial road junction on the Altiplano, near which a significant astronomical observatory is located."
    },
    facts: {
      de: ["Wichtiger Verkehrsknotenpunkt.", "Beherbergt ein Sternwarten-Teleskop.", "Kaltes und windiges Klima."],
      hu: ["Fontos közlekedési csomópont.", "Egy csillagászati teleszkópnak ad otthont.", "Hideg és szeles éghajlat jellemzi."],
      ro: ["Nod important de transport.", "Găzduiește un telescop de observator.", "Climă rece și cu vânt."],
      en: ["Important transport hub.", "Houses an observatory telescope.", "Cold and windy climate."]
    }
  },
  {
    id: "puerto-quijarro-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-57.7667, -18.9833],
    name: { de: "Puerto Quijarro", hu: "Puerto Quijarro", ro: "Puerto Quijarro", en: "Puerto Quijarro" },
    description: {
      de: "Eine lebendige Grenzstadt am Canal Tamengo, die den einzigen souveränen bolivianischen Zugang zum Flusssystem Paraguay-Paraná bietet.",
      hu: "Élénk határváros a Tamengo-csatornánál, amely az egyetlen szuverén bolíviai hozzáférést biztosítja a Paraguay-Paraná folyórendszerhez.",
      ro: "Un oraș de graniță animat pe Canalul Tamengo, care oferă singurul acces suveran al Boliviei la sistemul fluvial Paraguay-Paraná.",
      en: "A lively border city on the Tamengo Canal, providing the only sovereign Bolivian access to the Paraguay-Paraná river system."
    },
    facts: {
      de: ["Boliviens freier Zugang zum Meer über Flüsse.", "Grenzstadt zu Corumbá (Brasilien).", "Kanal- und Binnenhafenstadt."],
      hu: ["Bolívia szabad folyami kijárata a tenger felé.", "Határváros Corumbá (Brazília) mellett.", "Csatorna- és belvízi kikötőváros."],
      ro: ["Accesul liber al Boliviei la mare prin râuri.", "Oraș de graniță cu Corumbá (Brazilia).", "Oraș-port pe canal și interior."],
      en: ["Bolivia's free river access to the sea.", "Border town with Corumbá (Brazil).", "Canal and inland port city."]
    }
  },
  {
    id: "vallegrande-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-64.1000, -18.4833],
    name: { de: "Vallegrande", hu: "Vallegrande", ro: "Vallegrande", en: "Vallegrande" },
    description: {
      de: "Eine Kleinstadt in den Tälern von Santa Cruz, historisch berühmt als der Ort, an dem die sterblichen Überreste von Che Guevara ausgestellt wurden.",
      hu: "Kisváros Santa Cruz völgyeiben, amely történelmileg arról híres, hogy itt állították ki Che Guevara földi maradványait.",
      ro: "Un orășel din văile Santa Cruz, renumit istoric ca locul unde au fost expuse rămășițele lui Che Guevara.",
      en: "A small town in the valleys of Santa Cruz, historically famous as the place where Che Guevara's remains were displayed."
    },
    facts: {
      de: ["Teil der Che-Guevara-Route.", "Bekannt für Obst und Liköre.", "Mildes Tal-Klima."],
      hu: ["A Che Guevara útvonal része.", "Gyümölcseiről és likőrjeiről ismert.", "Enyhe völgyi klíma jellemzi."],
      ro: ["Parte a traseului Che Guevara.", "Cunoscut pentru fructe și lichioruri.", "Climă blândă de vale."],
      en: ["Part of the Che Guevara route.", "Known for fruit and liqueurs.", "Mild valley climate."]
    }
  },
  {
    id: "robore-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-59.7667, -18.3333],
    name: { de: "Roboré", hu: "Roboré", ro: "Roboré", en: "Roboré" },
    description: {
      de: "Wird wegen seiner wunderschönen Natur, den Thermalquellen und markanten Felsformationen auch die Perle des Ostens genannt.",
      hu: "Gyönyörű természeti adottságai, hőforrásai és feltűnő sziklaképződményei miatt a Kelet gyöngyszemének is nevezik.",
      ro: "Se numește și Perla Estului datorită naturii sale frumoase, izvoarelor termale și formațiunilor stâncoase izbitoare.",
      en: "Often called the Pearl of the East due to its beautiful natural surroundings, thermal springs, and striking rock formations."
    },
    facts: {
      de: ["Die Perle des Ostens.", "Touristisches Naturzentrum.", "Nahe dem Chochis-Felsen."],
      hu: ["A Kelet gyöngyszeme.", "Turisztikai természeti központ.", "A Chochis-szikla közelében fekszik."],
      ro: ["Perla Orientului.", "Centru turistic de natură.", "Aproape de stânca Chochis."],
      en: ["The Pearl of the East.", "Tourism nature center.", "Near the Chochis rock."]
    }
  },
  {
    id: "san-ignacio-de-moxos-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-65.6333, -14.9833],
    name: { de: "San Ignacio de Moxos", hu: "San Ignacio de Moxos", ro: "San Ignacio de Moxos", en: "San Ignacio de Moxos" },
    description: {
      de: "Die spirituelle Hauptstadt von Beni, weltweit berühmt für ihr farbenprächtiges Ichapekene Piesta, ein UNESCO-Weltkulturerbe.",
      hu: "Beni szellemi fővárosa, amely világszerte híres a színpompás Ichapekene Piesta ünnepéről, amely az UNESCO kulturális örökség része.",
      ro: "Capitala spirituală a departamentului Beni, faimoasă la nivel mondial pentru festivalul colorat Ichapekene Piesta.",
      en: "The spiritual capital of Beni, famous worldwide for its colorful Ichapekene Piesta, an intangible UNESCO cultural heritage."
    },
    facts: {
      de: ["Folklore-Hauptstadt des Beni.", "Jesuiten-Einfluss.", "Riesiges indigenes Fest im Juli."],
      hu: ["Beni folklórfővárosa.", "Erős jezsuita behatás.", "Hatalmas őslakos ünnep júliusban."],
      ro: ["Capitala folclorului din Beni.", "Influență iezuită.", "Festival indigen uriaș în iulie."],
      en: ["Folklore capital of Beni.", "Jesuit influence.", "Huge indigenous festival in July."]
    }
  },
  {
    id: "concepcion-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-62.0167, -16.1333],
    name: { de: "Concepción", hu: "Concepción", ro: "Concepción", en: "Concepción" },
    description: {
      de: "Eine ruhige Missionarsstadt in der Chiquitania, die stolz ein alljährliches Orchideenfest veranstaltet und prächtige barocke Architektur aufweist.",
      hu: "Csendes missziós város a Chiquitaniában, amely büszkén ad otthont az éves orchideafesztiválnak és pazar barokk építészettel büszkélkedhet.",
      ro: "Un oraș misionar liniștit din Chiquitania, care găzduiește mândru un festival anual de orhidee și prezintă o arhitectură barocă magnifică.",
      en: "A quiet missionary town in the Chiquitania that proudly hosts an annual orchid festival and features magnificent baroque architecture."
    },
    facts: {
      de: ["Bekannt für Orchideen.", "Teil der Jesuitenmissionen.", "Hat eine barocke Holzkirche."],
      hu: ["Orchideáiról híres.", "A jezsuita missziók része.", "Barokk fatemploma van."],
      ro: ["Cunoscut pentru orhidee.", "Parte a misiunilor iezuite.", "Are o biserică barocă din lemn."],
      en: ["Known for orchids.", "Part of the Jesuit missions.", "Features a baroque wooden church."]
    }
  },
  {
    id: "mairana-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.9500, -18.1167],
    name: { de: "Mairana", hu: "Mairana", ro: "Mairana", en: "Mairana" },
    description: {
      de: "Ein idyllisches Tal südwestlich von Santa Cruz, geprägt von intensiver Landwirtschaft und dem Anbau von Tabak sowie Gemüse.",
      hu: "Idilli völgy Santa Cruz-tól délnyugatra, amelyet az intenzív mezőgazdaság, valamint a dohány- és zöldségtermesztés jellemez.",
      ro: "O vale idilică la sud-vest de Santa Cruz, caracterizată prin agricultura intensivă și cultivarea tutunului și legumelor.",
      en: "An idyllic valley southwest of Santa Cruz, characterized by intensive agriculture and the cultivation of tobacco and vegetables."
    },
    facts: {
      de: ["Liegt in den Tälern (Valles).", "Bekannt für Tabakanbau.", "Ruhiges Landleben."],
      hu: ["A völgyek (Valles) régiójában található.", "A dohánytermesztésről ismert.", "Nyugodt vidéki élet."],
      ro: ["Situat în regiunea Văilor (Valles).", "Cunoscut pentru cultivarea tutunului.", "Viață rurală liniștită."],
      en: ["Located in the Valleys (Valles) region.", "Known for tobacco farming.", "Quiet country life."]
    }
  },
  {
    id: "cliza-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-65.9333, -17.5833],
    name: { de: "Cliza", hu: "Cliza", ro: "Cliza", en: "Cliza" },
    description: {
      de: "Eine historische Ortschaft im Cochabamba-Tal, landesweit geliebt für ihr lokales Taubengericht namens Pichón.",
      hu: "Történelmi település a Cochabamba-völgyben, amelyet országszerte szeretnek a Pichón nevű helyi galambétel miatt.",
      ro: "O așezare istorică în Valea Cochabamba, iubită la nivel național pentru preparatul său local din porumbel numit Pichón.",
      en: "A historic settlement in the Cochabamba valley, beloved nationwide for its local pigeon dish called Pichón."
    },
    facts: {
      de: ["Kulinarisch berühmt für Pichón.", "Sehr landwirtschaftlich geprägt.", "Teil des Valle Alto."],
      hu: ["Gasztronómiailag a Pichónról híres.", "Erősen mezőgazdasági jellegű.", "A Valle Alto része."],
      ro: ["Faimos culinar pentru Pichón.", "Foarte caracterizat agricol.", "Parte a Valle Alto."],
      en: ["Culinary famous for Pichón.", "Highly agricultural character.", "Part of the Valle Alto."]
    }
  },
  {
    id: "tarata-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.0167, -17.6167],
    name: { de: "Tarata", hu: "Tarata", ro: "Tarata", en: "Tarata" },
    description: {
      de: "Oft das koloniale Juwel des Cochabamba-Tals genannt, berühmt für die Geburt zahlreicher bolivianischer Präsidenten.",
      hu: "Gyakran a Cochabamba-völgy gyarmati ékszerének nevezik, és arról híres, hogy számos bolíviai elnök születési helye.",
      ro: "Adesea numit bijuteria colonială a Văii Cochabamba, faimos pentru nașterea a numeroși președinți bolivieni.",
      en: "Often called the colonial jewel of the Cochabamba valley, famous as the birthplace of multiple Bolivian presidents."
    },
    facts: {
      de: ["Geburtsort mehrerer Präsidenten.", "Gut erhaltene Kolonialarchitektur.", "Berühmt für Chorizo-Wurst."],
      hu: ["Több elnök szülőhelye.", "Jól megőrzött gyarmati építészet.", "Híres a chorizo kolbászáról."],
      ro: ["Locul de naștere al mai multor președinți.", "Arhitectură colonială bine conservată.", "Faimos pentru cârnații chorizo."],
      en: ["Birthplace of several presidents.", "Well-preserved colonial architecture.", "Famous for chorizo sausage."]
    }
  },
  {
    id: "aiquile-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-65.1833, -18.2000],
    name: { de: "Aiquile", hu: "Aiquile", ro: "Aiquile", en: "Aiquile" },
    description: {
      de: "Die unbestrittene Welthauptstadt des Charango, eines kleinen traditionellen Zupfinstruments aus den Anden.",
      hu: "A charango vitathatatlan világfővárosa, amely egy kis hagyományos andoki pengetős hangszer.",
      ro: "Capitala mondială incontestabilă a charango-ului, un mic instrument cu coarde tradițional andin.",
      en: "The undisputed world capital of the charango, a small traditional stringed instrument from the Andes."
    },
    facts: {
      de: ["Hauptstadt des Charango.", "Austragungsort des jährlichen Musikfestivals.", "Überlebte ein schweres Erdbeben 1998."],
      hu: ["A charango fővárosa.", "Éves zenei fesztivál helyszíne.", "Túlélt egy súlyos földrengést 1998-ban."],
      ro: ["Capitala instrumentului charango.", "Găzduiește festivalul anual de muzică.", "A supraviețuit unui cutremur sever în 1998."],
      en: ["Capital of the charango.", "Host of the annual music festival.", "Survived a severe earthquake in 1998."]
    }
  },
  {
    id: "capinota-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.2500, -17.7167],
    name: { de: "Capinota", hu: "Capinota", ro: "Capinota", en: "Capinota" },
    description: {
      de: "Eine wohlhabende Agrarstadt mit einem bedeutenden Kalksteinabbau, der die Grundlage für eine große Zementfabrik bildet.",
      hu: "Jómódú agrárváros jelentős mészkőbányászattal, amely a helyi nagy cementgyár alapját is adja.",
      ro: "Un oraș agricol prosper cu o exploatare semnificativă de calcar, care formează baza unei mari fabrici de ciment.",
      en: "A prosperous agricultural town with significant limestone mining, forming the basis for a large cement factory."
    },
    facts: {
      de: ["Bedeutende Zementindustrie (COBOCE).", "Befindet sich im unteren Tal.", "Fruchtbares Anbaugebiet."],
      hu: ["Jelentős a cementipara (COBOCE).", "Az alsó völgyben helyezkedik el.", "Termékeny mezőgazdasági vidék."],
      ro: ["Industrie semnificativă de ciment (COBOCE).", "Situat în valea inferioară.", "Zonă de cultură fertilă."],
      en: ["Significant cement industry (COBOCE).", "Located in the lower valley.", "Fertile farming area."]
    }
  },
  {
    id: "coroico-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-67.7275, -16.1889],
    name: { de: "Coroico", hu: "Coroico", ro: "Coroico", en: "Coroico" },
    description: {
      de: "Das touristische Juwel der nördlichen Yungas, das oft am Ende der gefährlichen Death Road mit dem Fahrrad erreicht wird.",
      hu: "Az északi Yungas turisztikai gyöngyszeme, ahová gyakran a veszélyes Halálút végén kerékpárral érkeznek a látogatók.",
      ro: "Bijuteria turistică a nordului Yungas, la care se ajunge adesea pe bicicletă la capătul periculosului Drum al Morții.",
      en: "The tourist jewel of the northern Yungas, often reached by bicycle at the end of the dangerous Death Road."
    },
    facts: {
      de: ["Am Ende der Death Road gelegen.", "Tropisches Paradies der Yungas.", "Sehr touristisch."],
      hu: ["A Halálút végén található.", "A Yungas trópusi paradicsoma.", "Népszerű turistacélpont."],
      ro: ["Situat la capătul Drumului Morții.", "Paradis tropical în Yungas.", "Foarte turistic."],
      en: ["Located at the end of the Death Road.", "Tropical paradise of the Yungas.", "Highly touristic."]
    }
  },
  {
    id: "copacabana-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-69.0833, -16.1667],
    name: { de: "Copacabana", hu: "Copacabana", ro: "Copacabana", en: "Copacabana" },
    description: {
      de: "Ein malerischer Wallfahrtsort am Ufer des Titicacasees, von dem aus die berühmte Isla del Sol besucht werden kann.",
      hu: "Festői zarándokhely a Titicaca-tó partján, ahonnan a híres Isla del Sol is könnyen megközelíthető.",
      ro: "Un oraș de pelerinaj pitoresc pe malul lacului Titicaca, de unde poate fi vizitată celebra Isla del Sol.",
      en: "A picturesque pilgrimage town on the shores of Lake Titicaca from which the famous Isla del Sol can be visited."
    },
    facts: {
      de: ["Am Ufer des Titicacasees.", "Heimat der Virgen de Copacabana.", "Ausgangspunkt zur Sonneninsel."],
      hu: ["A Titicaca-tó partján fekszik.", "A Copacabana-i Szűz otthona.", "A Nap-sziget kiindulópontja."],
      ro: ["Pe malul lacului Titicaca.", "Casa Fecioarei din Copacabana.", "Punct de plecare spre Insula Soarelui."],
      en: ["On the shores of Lake Titicaca.", "Home of the Virgin of Copacabana.", "Starting point to the Island of the Sun."]
    }
  },
  {
    id: "chulumani-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-67.5333, -16.4167],
    name: { de: "Chulumani", hu: "Chulumani", ro: "Chulumani", en: "Chulumani" },
    description: {
      de: "Die traditionelle Hauptstadt der südlichen Yungas, die historisch für ihren intensiven Koka-Anbau bekannt ist.",
      hu: "A déli Yungas hagyományos fővárosa, amely történelmileg az intenzív kokatermesztéséről ismert.",
      ro: "Capitala tradițională a regiunii Yungas de sud, cunoscută istoric pentru cultivarea intensivă a frunzelor de coca.",
      en: "The traditional capital of the southern Yungas, historically known for its intensive coca cultivation."
    },
    facts: {
      de: ["Hauptort der Sud Yungas.", "Zentrum des Koka-Anbaus.", "Herrliche Bergblicke."],
      hu: ["A Sud Yungas központja.", "A kokatermesztés egyik központja.", "Gyönyörű hegyi panoráma."],
      ro: ["Centrul regiunii Sud Yungas.", "Centrul cultivării coca.", "Vederi magnifice la munte."],
      en: ["Main town of the Sud Yungas.", "Center of coca cultivation.", "Magnificent mountain views."]
    }
  },
  {
    id: "sorata-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-68.6500, -15.7667],
    name: { de: "Sorata", hu: "Sorata", ro: "Sorata", en: "Sorata" },
    description: {
      de: "Ein friedliches Talstädtchen am Fuße des gigantischen Mount Illampu, das als Paradies für Wanderer und Bergsteiger gilt.",
      hu: "Békés völgyi kisváros a hatalmas Illampu hegy lábánál, amelyet a túrázók és hegymászók paradicsomaként tartanak számon.",
      ro: "Un orășel de vale pașnic la poalele gigantului munte Illampu, considerat un paradis pentru drumeți și alpiniști.",
      en: "A peaceful valley town at the foot of the massive Mount Illampu, considered a paradise for hikers and mountaineers."
    },
    facts: {
      de: ["Ausgangspunkt für Illampu-Trek.", "Subtropisches Mikroklima.", "Historischer Rückzugsort."],
      hu: ["Az Illampu túra kiindulópontja.", "Szubtrópusi mikroklímája van.", "Történelmi menedékhely."],
      ro: ["Punct de plecare pentru drumeția Illampu.", "Microclimat subtropical.", "Retragere istorică."],
      en: ["Starting point for the Illampu trek.", "Subtropical microclimate.", "Historical retreat."]
    }
  },
  {
    id: "samaipata-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.8833, -18.1833],
    name: { de: "Samaipata", hu: "Samaipata", ro: "Samaipata", en: "Samaipata" },
    description: {
      de: "Ein malerisches Dorf in den Voranden, weltweit bekannt für die nahegelegene massive prä-inkaische Festung El Fuerte.",
      hu: "Festői falu az Andok előhegyeiben, amely világszerte ismert a közeli hatalmas inka előtti El Fuerte erődítményről.",
      ro: "Un sat pitoresc din pre-Anzi, cunoscut la nivel mondial pentru fortăreața masivă pre-incașă El Fuerte din apropiere.",
      en: "A picturesque village in the pre-Andes, known worldwide for the nearby massive pre-Incan fortress of El Fuerte."
    },
    facts: {
      de: ["Heimat von El Fuerte de Samaipata.", "Beliebt bei Expatriates.", "Angenehmes kühles Klima."],
      hu: ["El Fuerte de Samaipata otthona.", "Népszerű a külföldiek körében.", "Kellemes hűvös éghajlat."],
      ro: ["Acasă la El Fuerte de Samaipata.", "Popular printre expatriați.", "Climă răcoroasă plăcută."],
      en: ["Home to El Fuerte de Samaipata.", "Popular with expatriates.", "Pleasant cool climate."]
    }
  },
  {
    id: "san-matias-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-58.4000, -16.3667],
    name: { de: "San Matías", hu: "San Matías", ro: "San Matías", en: "San Matías" },
    description: {
      de: "Die östlichste Stadt Boliviens, die direkt an der Grenze zu Brasilien liegt und tief im Pantanal eingebettet ist.",
      hu: "Bolívia legkeletibb városa, amely közvetlenül a brazil határ mentén, mélyen a Pantanal vizes élőhelyébe ágyazva fekszik.",
      ro: "Cel mai estic oraș din Bolivia, situat chiar la granița cu Brazilia și încorporat adânc în Pantanal.",
      en: "The easternmost city of Bolivia, located right on the border with Brazil and deeply embedded in the Pantanal."
    },
    facts: {
      de: ["Extrem isolierte Lage.", "Tiefe Pantanal-Wildnis.", "Lebt vom Grenzhandel."],
      hu: ["Rendkívül elszigetelt fekvés.", "A Pantanal vadonjának mélyén van.", "A határkereskedelemből él."],
      ro: ["Locație extrem de izolată.", "Sălbăticia adâncă Pantanal.", "Trăiește din comerțul de frontieră."],
      en: ["Extremely isolated location.", "Deep Pantanal wilderness.", "Lives off border trade."]
    }
  },
  {
    id: "san-ramon-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-62.6000, -16.6000],
    name: { de: "San Ramón", hu: "San Ramón", ro: "San Ramón", en: "San Ramón" },
    description: {
      de: "Eine kleine Stadt in der Provinz Nuflo de Chavez, die vor allem als Transitpunkt und für lokalen Goldabbau bekannt ist.",
      hu: "Kisváros Nuflo de Chavez tartományban, amely elsősorban tranzitpontként és a helyi aranybányászatról ismert.",
      ro: "Un orășel din provincia Nuflo de Chavez, cel mai bine cunoscut ca punct de tranzit și pentru mineritul local de aur.",
      en: "A small town in the Nuflo de Chavez province, primarily known as a transit point and for local gold mining."
    },
    facts: {
      de: ["Kleiner Goldabbau-Ort.", "Wichtige Straßenkreuzung.", "Tor in den Nordosten."],
      hu: ["Kisebb aranybányász település.", "Fontos útkereszteződés.", "Kapu az északkeleti vidék felé."],
      ro: ["Oraș mic de exploatare a aurului.", "Intersecție rutieră importantă.", "Poarta către nord-est."],
      en: ["Small gold mining town.", "Important road junction.", "Gateway to the northeast."]
    }
  },
  {
    id: "pailon-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-62.7500, -17.6500],
    name: { de: "Pailón", hu: "Pailón", ro: "Pailón", en: "Pailón" },
    description: {
      de: "Die erste große Stadt östlich des Río Grande, ein entscheidender logistischer Punkt für die intensive Landwirtschaft der Region.",
      hu: "Az első nagyváros a Río Grande folyótól keletre, amely döntő logisztikai pont a régió intenzív mezőgazdasága számára.",
      ro: "Primul mare oraș la est de Río Grande, un punct logistic crucial pentru agricultura intensivă a regiunii.",
      en: "The first major city east of the Río Grande, a crucial logistical point for the region's intensive agriculture."
    },
    facts: {
      de: ["Tor zur Chiquitania.", "Agrarzentrum (Soja).", "Hält die Brücke über den Río Grande."],
      hu: ["A Chiquitania régió kapuja.", "Agrárközpont (szója).", "Itt található a híd a Río Grande felett."],
      ro: ["Poarta către Chiquitania.", "Centru agricol (soia).", "Deține podul peste Río Grande."],
      en: ["Gateway to the Chiquitania.", "Agricultural center (soy).", "Holds the bridge over the Río Grande."]
    }
  },
  {
    id: "ivirgarzama-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-64.8667, -17.0333],
    name: { de: "Ivirgarzama", hu: "Ivirgarzama", ro: "Ivirgarzama", en: "Ivirgarzama" },
    description: {
      de: "Das wirtschaftliche Zentrum der tropischen Chapare-Region, berühmt für seinen riesigen Markt und den Obsthandel.",
      hu: "A trópusi Chapare régió gazdasági központja, amely hatalmas piacáról és gyümölcskereskedelméről híres.",
      ro: "Centrul economic al regiunii tropicale Chapare, faimos pentru piața sa uriașă și comerțul cu fructe.",
      en: "The economic center of the tropical Chapare region, famous for its massive market and fruit trade."
    },
    facts: {
      de: ["Wirtschaftszentrum im Tropen-Chapare.", "Großer Wochenmarkt.", "Schnell wachsende Stadt."],
      hu: ["Gazdasági központ a trópusi Chapare-ban.", "Hatalmas heti piac.", "Gyorsan növekvő település."],
      ro: ["Centru economic în Chapare tropical.", "Piață săptămânală mare.", "Oraș cu creștere rapidă."],
      en: ["Economic center in the tropical Chapare.", "Large weekly market.", "Rapidly growing town."]
    }
  },
  {
    id: "chimore-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-65.1333, -16.9833],
    name: { de: "Chimoré", hu: "Chimoré", ro: "Chimoré", en: "Chimoré" },
    description: {
      de: "Eine tropische Stadt, die vor allem durch ihren großen Flughafen und als wichtiger Produktionsort für Bananen bekannt ist.",
      hu: "Trópusi város, amely elsősorban hatalmas repülőteréről és mint jelentős banántermelő központ ismert.",
      ro: "Un oraș tropical cunoscut în primul rând pentru aeroportul său mare și ca un loc important de producție a bananelor.",
      en: "A tropical city primarily known for its large airport and as a major production site for bananas."
    },
    facts: {
      de: ["Hat einen internationalen Flughafen.", "Zentrum des Bananenanbaus.", "Heißes Tropenklima."],
      hu: ["Nemzetközi repülőtérrel rendelkezik.", "A banántermesztés központja.", "Forró trópusi éghajlat."],
      ro: ["Are un aeroport internațional.", "Centrul cultivării bananelor.", "Climă tropicală fierbinte."],
      en: ["Has an international airport.", "Center of banana cultivation.", "Hot tropical climate."]
    }
  },
  {
    id: "villa-tunari-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-65.4167, -16.9667],
    name: { de: "Villa Tunari", hu: "Villa Tunari", ro: "Villa Tunari", en: "Villa Tunari" },
    description: {
      de: "Das Tor zum bolivianischen Tropenwald, umgeben von Flüssen und Parks, was es zu einem beliebten Touristenziel macht.",
      hu: "A bolíviai trópusi erdő kapuja, amelyet folyók és parkok vesznek körül, így rendkívül népszerű turistacélpont.",
      ro: "Poarta către pădurea tropicală boliviană, înconjurată de râuri și parcuri, ceea ce o face o destinație turistică populară.",
      en: "The gateway to the Bolivian tropical forest, surrounded by rivers and parks, making it a popular tourist destination."
    },
    facts: {
      de: ["Tourismuszentrum des Chapare.", "Viel Dschungel und Flüsse.", "Sehr regnerisches Klima."],
      hu: ["A Chapare régió turisztikai központja.", "Sok dzsungel és folyó van a környéken.", "Nagyon esős az éghajlata."],
      ro: ["Centrul turistic din Chapare.", "Multă junglă și râuri.", "Climă foarte ploioasă."],
      en: ["Tourism center of the Chapare.", "Lots of jungle and rivers.", "Very rainy climate."]
    }
  }
];
