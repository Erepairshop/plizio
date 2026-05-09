import type { POI } from "./poi";

export const poiExtraAzerbaijanNatureV2: POI[] = [
  {
    id: "goygol-national-park-nature-v2",
    type: "national-park",
    parent: "AZ-GOY",
    coords: [46.3167, 40.4000],
    name: { de: "Göygöl-Nationalpark", hu: "Göygöl Nemzeti Park", ro: "Parcul Național Goygol", en: "Goygol National Park" },
    description: { de: "Ein wunderschöner Nationalpark, bekannt für seine klaren Bergseen und dichten Wälder im Kleinen Kaukasus.", hu: "Gyönyörű nemzeti park, amely a Kis-Kaukázus kristálytiszta hegyi tavairól és sűrű erdeiről ismert.", ro: "Un frumos parc național cunoscut pentru lacurile sale montane clare și pădurile dense din Caucazul Mic.", en: "A beautiful national park known for its clear mountain lakes and dense forests in the Lesser Caucasus." },
    facts: {
      de: ["Gegründet 2008 zur Erhaltung der Bergökosysteme.", "Umfasst den berühmten Göygöl-See.", "Heimat seltener Flora und Fauna."],
      hu: ["2008-ban alapították a hegyi ökoszisztémák védelmére.", "Magába foglalja a híres Göygöl-tavat.", "Ritka növény- és állatvilágnak ad otthont."],
      ro: ["Înființat în 2008 pentru conservarea ecosistemelor montane.", "Include faimosul lac Goygol.", "Adăpostește floră și faună rară."],
      en: ["Established in 2008 to preserve mountain ecosystems.", "Includes the famous Lake Goygol.", "Home to rare flora and fauna."]
    }
  },
  {
    id: "lake-goygol-nature-v2",
    type: "lake",
    parent: "AZ-GOY",
    coords: [46.3269, 40.4092],
    name: { de: "Göygöl-See", hu: "Göygöl-tó", ro: "Lacul Goygol", en: "Lake Goygol" },
    description: { de: "Ein malerischer Bergsee, der 1139 nach einem massiven Erdbeben durch einen Erdrutsch entstand.", hu: "Festői hegyi tó, amely 1139-ben egy hatalmas földrengés okozta földcsuszamlás következtében jött létre.", ro: "Un lac montan pitoresc, format în 1139 de o alunecare de teren după un cutremur masiv.", en: "A picturesque mountain lake formed in 1139 by a landslide following a massive earthquake." },
    facts: {
      de: ["Liegt 1556 Meter über dem Meeresspiegel.", "Das Wasser ist extrem klar und tief.", "Umgeben von dichten Wäldern."],
      hu: ["1556 méterrel a tengerszint felett található.", "Vize rendkívül tiszta és mély.", "Sűrű erdők veszik körül."],
      ro: ["Situat la 1556 metri deasupra nivelului mării.", "Apa sa este extrem de clară și adâncă.", "Înconjurat de păduri dense."],
      en: ["Located 1556 meters above sea level.", "The water is extremely clear and deep.", "Surrounded by dense forests."]
    }
  },
  {
    id: "mount-bazarduzu-nature-v2",
    type: "mountain",
    parent: "AZ-QUS",
    coords: [47.8581, 41.2206],
    name: { de: "Bazardüzü Dağı", hu: "Bazardüzü", ro: "Muntele Bazarduzu", en: "Mount Bazarduzu" },
    description: { de: "Der höchste Gipfel in Aserbaidschan, gelegen im Großen Kaukasus an der Grenze zu Russland.", hu: "Azerbajdzsán legmagasabb csúcsa, amely a Nagy-Kaukázusban, az orosz határon található.", ro: "Cel mai înalt vârf din Azerbaidjan, situat în Caucazul Mare la granița cu Rusia.", en: "The highest peak in Azerbaijan, located in the Greater Caucasus on the border with Russia." },
    facts: {
      de: ["Erreicht eine Höhe von 4466 Metern.", "Ein beliebtes Ziel für Bergsteiger.", "Sein Name bedeutet Marktplatz oder Markt-Ebene."],
      hu: ["Magassága eléri a 4466 métert.", "Népszerű célpont a hegymászók körében.", "Neve piacteret vagy piaci síkságot jelent."],
      ro: ["Atinge o înălțime de 4466 metri.", "O destinație populară pentru alpiniști.", "Numele său înseamnă piață sau câmpie de piață."],
      en: ["Reaches an elevation of 4466 meters.", "A popular destination for mountaineers.", "Its name translates to marketplace or market plain."]
    }
  },
  {
    id: "kura-river-nature-v2",
    type: "river",
    parent: "AZ-MI",
    coords: [47.0500, 40.7667],
    name: { de: "Kura (Fluss)", hu: "Kura folyó", ro: "Râul Kura", en: "Kura River" },
    description: { de: "Der wichtigste Fluss im Kaukasus, der durch Aserbaidschan fließt und in das Kaspische Meer mündet.", hu: "A Kaukázus legfontosabb folyója, amely átszeli Azerbajdzsánt és a Kaszpi-tengerbe ömlik.", ro: "Cel mai important râu din Caucaz, curgând prin Azerbaidjan și vărsându-se în Marea Caspică.", en: "The most important river in the Caucasus, flowing through Azerbaijan and emptying into the Caspian Sea." },
    facts: {
      de: ["Über 1500 Kilometer lang.", "Spielt eine zentrale Rolle in der Landwirtschaft.", "Wird für die Stromerzeugung in Mingəçevir genutzt."],
      hu: ["Több mint 1500 kilométer hosszú.", "Központi szerepet játszik a mezőgazdaságban.", "Áramtermelésre használják Mingəçevirben."],
      ro: ["Are o lungime de peste 1500 de kilometri.", "Joacă un rol central în agricultură.", "Este folosit pentru generarea energiei la Mingachevir."],
      en: ["Over 1500 kilometers long.", "Plays a central role in agriculture.", "Used for power generation in Mingachevir."]
    }
  },
  {
    id: "aras-river-nature-v2",
    type: "river",
    parent: "AZ-SAB",
    coords: [48.4500, 39.9333],
    name: { de: "Aras (Fluss)", hu: "Arasz folyó", ro: "Râul Aras", en: "Aras River" },
    description: { de: "Ein bedeutender Fluss, der einen großen Teil der Grenze zwischen Aserbaidschan und dem Iran bildet.", hu: "Jelentős folyó, amely az Azerbajdzsán és Irán közötti határ nagy részét alkotja.", ro: "Un râu major care formează o mare parte din granița dintre Azerbaidjan și Iran.", en: "A major river that forms a large part of the border between Azerbaijan and Iran." },
    facts: {
      de: ["Mündet in den Fluss Kura.", "Historisch eine wichtige geographische Trennlinie.", "Sehr wichtig für die regionale Bewässerung."],
      hu: ["A Kura folyóba ömlik.", "Történelmileg fontos földrajzi választóvonal.", "Nagyon fontos a regionális öntözés szempontjából."],
      ro: ["Se varsă în râul Kura.", "Istoric, o importantă linie de demarcație geografică.", "Foarte important pentru irigarea regională."],
      en: ["Flows into the Kura River.", "Historically an important geographical dividing line.", "Very important for regional irrigation."]
    }
  },
  {
    id: "shirvan-national-park-nature-v2",
    type: "national-park",
    parent: "AZ-SAL",
    coords: [49.1333, 39.5333],
    name: { de: "Schirwan-Nationalpark", hu: "Şirvan Nemzeti Park", ro: "Parcul Național Shirvan", en: "Shirvan National Park" },
    description: { de: "Ein semi-arider Nationalpark an der Küste des Kaspischen Meeres, bekannt für seine Kropfgazellen-Population.", hu: "Félsivatagos nemzeti park a Kaszpi-tenger partján, amely a golyvás gazella populációjáról ismert.", ro: "Un parc național semi-arid pe coasta Mării Caspice, cunoscut pentru populația sa de gazele cu gușă.", en: "A semi-arid national park on the coast of the Caspian Sea, known for its goitered gazelle population." },
    facts: {
      de: ["Wurde 2003 gegründet.", "Umfasst Teile des Kur-Araz-Tieflands.", "Ein wichtiges Gebiet für Zugvögel."],
      hu: ["2003-ban alapították.", "A Kura-Arasz-alföld része.", "Fontos terület a vándormadarak számára."],
      ro: ["Înființat în 2003.", "Include părți din Câmpia Kura-Araz.", "O zonă importantă pentru păsările migratoare."],
      en: ["Established in 2003.", "Includes parts of the Kura-Araz Lowland.", "An important area for migratory birds."]
    }
  },
  {
    id: "hirkan-national-park-nature-v2",
    type: "national-park",
    parent: "AZ-LAN",
    coords: [48.7833, 38.6333],
    name: { de: "Hirkan-Nationalpark", hu: "Hirkan Nemzeti Park", ro: "Parcul Național Hirkan", en: "Hirkan National Park" },
    description: { de: "Ein dichter Feuchtwald in den Talysch-Bergen, der für seine reliktischen und endemischen Pflanzenarten berühmt ist.", hu: "Sűrű esőerdő a Talis-hegységben, amely reliktum és endemikus növényfajairól híres.", ro: "O pădure densă și umedă în Munții Taliș, faimoasă pentru speciile sale de plante relicte și endemice.", en: "A dense humid forest in the Talysh Mountains, famous for its relict and endemic plant species." },
    facts: {
      de: ["Teil des UNESCO-Weltnaturerbes.", "Heimat des kaukasischen Leoparden.", "Enthält Baumarten, die die Eiszeit überlebt haben."],
      hu: ["Az UNESCO természeti világörökségének része.", "A kaukázusi leopárd otthona.", "Olyan fafajokat tartalmaz, amelyek túlélték a jégkorszakot."],
      ro: ["Face parte din Patrimoniul Natural UNESCO.", "Adăpostește leopardul caucazian.", "Conține specii de arbori care au supraviețuit erei glaciare."],
      en: ["Part of the UNESCO World Natural Heritage.", "Home to the Caucasian leopard.", "Contains tree species that survived the Ice Age."]
    }
  },
  {
    id: "shahdag-national-park-nature-v2",
    type: "national-park",
    parent: "AZ-QUS",
    coords: [48.0833, 41.2667],
    name: { de: "Şahdağ-Nationalpark", hu: "Şahdağ Nemzeti Park", ro: "Parcul Național Shahdag", en: "Shahdag National Park" },
    description: { de: "Der größte Nationalpark Aserbaidschans, der atemberaubende Alpenlandschaften und tiefe Schluchten umfasst.", hu: "Azerbajdzsán legnagyobb nemzeti parkja, amely lélegzetelállító alpesi tájakat és mély szurdokokat foglal magába.", ro: "Cel mai mare parc național din Azerbaidjan, cuprinzând peisaje alpine uimitoare și defileuri adânci.", en: "The largest national park in Azerbaijan, encompassing stunning alpine landscapes and deep gorges." },
    facts: {
      de: ["Bedeckt eine Fläche von über 130.000 Hektar.", "Reich an Bergflora und seltenen Tierarten.", "Ein Paradies für Ökotourismus."],
      hu: ["Több mint 130 000 hektár területet fed le.", "Gazdag hegyi növényvilágban és ritka állatfajokban.", "Az ökoturizmus paradicsoma."],
      ro: ["Acoperă o suprafață de peste 130.000 de hectare.", "Bogat în floră montană și specii rare de animale.", "Un paradis pentru ecoturism."],
      en: ["Covers an area of over 130,000 hectares.", "Rich in mountain flora and rare animal species.", "A paradise for ecotourism."]
    }
  },
  {
    id: "mount-shahdagh-nature-v2",
    type: "mountain",
    parent: "AZ-QUS",
    coords: [48.0167, 41.2667],
    name: { de: "Şahdağ (Berg)", hu: "Şahdağ-hegy", ro: "Muntele Shahdagh", en: "Mount Shahdagh" },
    description: { de: "Ein markanter Berggipfel im Großen Kaukasus, der für seine Gletschertäler und steilen Hänge bekannt ist.", hu: "Jelentős hegycsúcs a Nagy-Kaukázusban, amely gleccservölgyeiről és meredek lejtőiről ismert.", ro: "Un vârf proeminent în Caucazul Mare, cunoscut pentru văile sale glaciare și versanții abrupți.", en: "A prominent mountain peak in the Greater Caucasus, known for its glacial valleys and steep slopes." },
    facts: {
      de: ["4243 Meter hoch.", "In der Nähe befindet sich ein beliebtes Wintersportzentrum.", "Bedeckt mit ewigem Schnee."],
      hu: ["4243 méter magas.", "A közelében egy népszerű téli sportközpont található.", "Örök hó fedi."],
      ro: ["Are o altitudine de 4243 metri.", "În apropiere se află o stațiune populară de sporturi de iarnă.", "Acoperit de zăpadă veșnică."],
      en: ["4243 meters high.", "A popular winter sports resort is located nearby.", "Covered with eternal snow."]
    }
  },
  {
    id: "lake-maralgol-nature-v2",
    type: "lake",
    parent: "AZ-GOY",
    coords: [46.3214, 40.3850],
    name: { de: "Maralgöl-See", hu: "Maralgöl-tó", ro: "Lacul Maralgol", en: "Lake Maralgol" },
    description: { de: "Ein hoch gelegener Bergsee unweit des Göygöl-Sees, der für seine unberührte Natur geschätzt wird.", hu: "Magasan fekvő hegyi tó a Göygöl-tó közelében, amelyet érintetlen természetéért becsülnek.", ro: "Un lac montan situat la mare altitudine, nu departe de Lacul Goygol, apreciat pentru natura sa neatinsă.", en: "A high-altitude mountain lake not far from Lake Goygol, appreciated for its pristine nature." },
    facts: {
      de: ["Liegt auf über 1900 Metern Höhe.", "Nur zu Fuß oder mit speziellen Fahrzeugen erreichbar.", "Entstand wie der Göygöl durch ein Erdbeben."],
      hu: ["Több mint 1900 méteres magasságban található.", "Csak gyalog vagy speciális járművekkel megközelíthető.", "A Göygölhöz hasonlóan földrengés hozta létre."],
      ro: ["Situat la peste 1900 de metri altitudine.", "Accesibil doar pe jos sau cu vehicule speciale.", "S-a format la fel ca Goygol printr-un cutremur."],
      en: ["Located at over 1900 meters altitude.", "Accessible only on foot or with special vehicles.", "Formed like Goygol by an earthquake."]
    }
  },
  {
    id: "absheron-national-park-nature-v2",
    type: "national-park",
    parent: "AZ-B",
    coords: [50.3667, 40.2833],
    name: { de: "Abşeron-Nationalpark", hu: "Abşeron Nemzeti Park", ro: "Parcul Național Absheron", en: "Absheron National Park" },
    description: { de: "Ein Schutzgebiet an der Spitze der Abşeron-Halbinsel, das eine reiche Meeres- und Küstenfauna schützt.", hu: "Védett terület az Absheron-félsziget csücskén, amely a gazdag tengeri és part menti állatvilágot védi.", ro: "O rezervație la vârful Peninsulei Abșeron, care protejează o faună marină și de coastă bogată.", en: "A protected area at the tip of the Absheron Peninsula, safeguarding rich marine and coastal fauna." },
    facts: {
      de: ["Lebensraum der Kaspischen Robbe.", "Schützt wichtige Nistplätze für Wasservögel.", "Die Landschaft ist flach und halbtrocken."],
      hu: ["A kaszpi fóka élőhelye.", "Fontos fészkelőhelyeket véd a vízimadarak számára.", "A táj sík és félsivatagos."],
      ro: ["Habitatul focii caspice.", "Protejează zone importante de cuibărit pentru păsările acvatice.", "Peisajul este plat și semi-arid."],
      en: ["Habitat of the Caspian seal.", "Protects important nesting grounds for waterfowl.", "The landscape is flat and semi-arid."]
    }
  },
  {
    id: "zangezur-national-park-nature-v2",
    type: "national-park",
    parent: "AZ-ORD",
    coords: [45.9833, 39.1167],
    name: { de: "Sangesur-Nationalpark", hu: "Zangezur Nemzeti Park", ro: "Parcul Național Zangezur", en: "Zangezur National Park" },
    description: { de: "Ein gebirgiger Nationalpark in Nachitschewan, der seltene Großkatzen und wilde Ziegen schützt.", hu: "Hegyvidéki nemzeti park Nahicsevánban, amely ritka nagymacskákat és vadkecskéket véd.", ro: "Un parc național muntos din Nahicevan, care protejează feline mari rare și capre sălbatice.", en: "A mountainous national park in Nakhchivan, protecting rare big cats and wild goats." },
    facts: {
      de: ["Hier lebt der seltene anatolische Leopard.", "Bietet spektakuläre Bergpanoramen.", "Das Klima ist geprägt durch kalte Winter und heiße Sommer."],
      hu: ["Itt él a ritka anatóliai leopárd.", "Látványos hegyi panorámát kínál.", "Az éghajlatot hideg telek és forró nyarak jellemzik."],
      ro: ["Aici trăiește rarul leopard anatolian.", "Oferă panorame montane spectaculoase.", "Clima este caracterizată de ierni reci și veri fierbinți."],
      en: ["The rare Anatolian leopard lives here.", "Offers spectacular mountain panoramas.", "The climate features cold winters and hot summers."]
    }
  },
  {
    id: "ag-gel-national-park-nature-v2",
    type: "national-park",
    parent: "AZ-AGJ",
    coords: [47.6000, 40.0167],
    name: { de: "Ağgöl-Nationalpark", hu: "Ağgöl Nemzeti Park", ro: "Parcul Național Ag-Gel", en: "Ag-Gel National Park" },
    description: { de: "Ein großes Feuchtgebietssystem, das weltweit als wichtiger Rastplatz für Zugvögel anerkannt ist.", hu: "Nagy vizes élőhelyrendszer, amelyet világszerte a vándormadarak fontos pihenőhelyeként tartanak számon.", ro: "Un mare sistem de zone umede, recunoscut la nivel mondial ca o escală importantă pentru păsările migratoare.", en: "A large wetland system recognized globally as a critical resting place for migratory birds." },
    facts: {
      de: ["Gehört zu den Ramsar-Feuchtgebieten.", "Zieht Flamingos und Pelikane an.", "Besteht größtenteils aus flachen Salzseen."],
      hu: ["A ramsari vizes élőhelyek közé tartozik.", "Flamingókat és pelikánokat vonz.", "Főként sekély sós tavakból áll."],
      ro: ["Aparține zonelor umede Ramsar.", "Atrage flamingo și pelicani.", "Constă în mare parte din lacuri sărate puțin adânci."],
      en: ["Belongs to the Ramsar wetlands.", "Attracts flamingos and pelicans.", "Consists mostly of shallow salt lakes."]
    }
  },
  {
    id: "lake-aggol-nature-v2",
    type: "lake",
    parent: "AZ-AGJ",
    coords: [47.6000, 40.0167],
    name: { de: "Ağgöl-See", hu: "Ağgöl-tó", ro: "Lacul Aggol", en: "Lake Aggol" },
    description: { de: "Das Herzstück des Ağgöl-Nationalparks, ein seichter See umgeben von dichtem Schilf.", hu: "Az Ağgöl Nemzeti Park szíve, egy sekély tó, amelyet sűrű nádas vesz körül.", ro: "Inima Parcului Național Ag-Gel, un lac puțin adânc înconjurat de stufăriș dens.", en: "The centerpiece of the Ag-Gel National Park, a shallow lake surrounded by dense reeds." },
    facts: {
      de: ["Der Name bedeutet Weißer See.", "Bietet Lebensraum für zahlreiche Fischarten.", "Wird vom Kura-Flusssystem gespeist."],
      hu: ["A neve Fehér tavat jelent.", "Számos halfajnak ad élőhelyet.", "A Kura folyórendszer táplálja."],
      ro: ["Numele înseamnă Lacul Alb.", "Oferă habitat pentru numeroase specii de pești.", "Este alimentat de sistemul râului Kura."],
      en: ["The name means White Lake.", "Provides habitat for numerous fish species.", "Fed by the Kura river system."]
    }
  },
  {
    id: "gizilagach-national-park-nature-v2",
    type: "national-park",
    parent: "AZ-LAN",
    coords: [48.9667, 39.1000],
    name: { de: "Qızılağac-Nationalpark", hu: "Qızılağac Nemzeti Park", ro: "Parcul Național Gizilagach", en: "Gizilagach National Park" },
    description: { de: "Ein Küstenschutzgebiet im Süden Aserbaidschans, das große Buchten und Marschlandschaften schützt.", hu: "Part menti védett terület Dél-Azerbajdzsánban, amely nagy öblöket és mocsárvidékeket véd.", ro: "O arie costieră protejată din sudul Azerbaidjanului, care conservă golfuri mari și mlaștini.", en: "A coastal protected area in southern Azerbaijan that preserves large bays and marshlands." },
    facts: {
      de: ["Überwinterungsort für Millionen von Vögeln.", "Umfasst die Kysyl-Agach-Bucht.", "Sehr wichtig für die Erhaltung der Stör-Bestände."],
      hu: ["Madarak millióinak telelőhelye.", "Magába foglalja a Qızılağac-öblöt.", "Nagyon fontos a tokhal-állományok megőrzésében."],
      ro: ["Loc de iernare pentru milioane de păsări.", "Include Golful Gizilagach.", "Foarte important pentru conservarea sturionilor."],
      en: ["Wintering ground for millions of birds.", "Includes the Gizilagach Bay.", "Very important for sturgeon conservation."]
    }
  },
  {
    id: "altiaghaj-national-park-nature-v2",
    type: "national-park",
    parent: "AZ-XIZ",
    coords: [48.9333, 40.8500],
    name: { de: "Altıağac-Nationalpark", hu: "Altıağac Nemzeti Park", ro: "Parcul Național Altiaghaj", en: "Altiaghaj National Park" },
    description: { de: "Ein bewaldeter Nationalpark, der für die Rehabilitierung von Wildtieren und seine Laubwälder bekannt ist.", hu: "Erdős nemzeti park, amely a vadon élő állatok rehabilitációjáról és lombhullató erdeiről ismert.", ro: "Un parc național împădurit, cunoscut pentru reabilitarea vieții sălbatice și pădurile sale de foioase.", en: "A forested national park known for wildlife rehabilitation and its deciduous forests." },
    facts: {
      de: ["Besitzt eine Klinik für verletzte Wildtiere.", "Reich an Bären, Wildschweinen und Luchsen.", "Die Herbstfarben sind besonders spektakulär."],
      hu: ["Klinikát működtet sérült vadállatok számára.", "Gazdag medvékben, vaddisznókban és hiúzokban.", "Az őszi színek különösen látványosak."],
      ro: ["Are o clinică pentru animale sălbatice rănite.", "Bogat în urși, mistreți și râși.", "Culorile de toamnă sunt deosebit de spectaculoase."],
      en: ["Has a clinic for injured wild animals.", "Rich in bears, wild boars, and lynxes.", "Autumn colors are particularly spectacular."]
    }
  },
  {
    id: "mount-qapijiq-nature-v2",
    type: "mountain",
    parent: "AZ-ORD",
    coords: [46.0456, 39.1583],
    name: { de: "Qapıcıq dağı", hu: "Qapıcıq hegy", ro: "Muntele Qapiciq", en: "Mount Qapijiq" },
    description: { de: "Der höchste Gipfel in der Autonomen Republik Nachitschewan an der Grenze zu Armenien.", hu: "A Nahicseván Autonóm Köztársaság legmagasabb csúcsa az örmény határon.", ro: "Cel mai înalt vârf din Republica Autonomă Nahicevan, la granița cu Armenia.", en: "The highest peak in the Nakhchivan Autonomous Republic on the border with Armenia." },
    facts: {
      de: ["Erreicht eine Höhe von 3904 Metern.", "Gehört zum Sangesur-Gebirge.", "Das Terrain ist sehr steinig und rau."],
      hu: ["Magassága eléri a 3904 métert.", "A Zangezur-hegységhez tartozik.", "A terep nagyon köves és zord."],
      ro: ["Atinge o înălțime de 3904 metri.", "Aparține lanțului muntos Zangezur.", "Terenul este foarte stâncos și accidentat."],
      en: ["Reaches a height of 3904 meters.", "Belongs to the Zangezur mountain range.", "The terrain is very rocky and rugged."]
    }
  },
  {
    id: "samur-river-nature-v2",
    type: "river",
    parent: "AZ-XAC",
    coords: [48.4833, 41.8167],
    name: { de: "Samur (Fluss)", hu: "Samur folyó", ro: "Râul Samur", en: "Samur River" },
    description: { de: "Ein schnell fließender Fluss im Kaukasus, der einen Teil der Grenze zwischen Russland und Aserbaidschan markiert.", hu: "Gyors folyású hegyi folyó a Kaukázusban, amely az orosz-azerbajdzsáni határ egy részét alkotja.", ro: "Un râu cu curgere rapidă în Caucaz, care marchează o parte din granița dintre Rusia și Azerbaidjan.", en: "A fast-flowing river in the Caucasus that marks part of the border between Russia and Azerbaijan." },
    facts: {
      de: ["Wichtig für das Samur-Yalama-Nationalpark-Ökosystem.", "Mündet direkt ins Kaspische Meer.", "Berühmt für sein kaltes Bergwasser."],
      hu: ["Fontos a Samur-Yalama Nemzeti Park ökoszisztémája számára.", "Közvetlenül a Kaszpi-tengerbe ömlik.", "Hideg hegyi vizéről híres."],
      ro: ["Important pentru ecosistemul Parcului Național Samur-Yalama.", "Se varsă direct în Marea Caspică.", "Faimos pentru apa sa rece de munte."],
      en: ["Important for the Samur-Yalama National Park ecosystem.", "Flows directly into the Caspian Sea.", "Famous for its cold mountain water."]
    }
  },
  {
    id: "guba-khachmaz-forests-nature-v2",
    type: "forest",
    parent: "AZ-QBA",
    coords: [48.5000, 41.3667],
    name: { de: "Guba-Xaçmaz-Wälder", hu: "Guba-Xaçmaz erdők", ro: "Pădurile Guba-Khachmaz", en: "Guba-Khachmaz Forests" },
    description: { de: "Dichte und grüne Wälder im Nordosten Aserbaidschans, die für ihre reiche Biodiversität und kühlen Quellen bekannt sind.", hu: "Sűrű és zöld erdők Északkelet-Azerbajdzsánban, amelyek gazdag biodiverzitásukról és hűvös forrásaikról ismertek.", ro: "Păduri dense și verzi din nord-estul Azerbaidjanului, cunoscute pentru biodiversitatea lor bogată și izvoarele reci.", en: "Dense and green forests in northeastern Azerbaijan, known for their rich biodiversity and cool springs." },
    facts: {
      de: ["Ein beliebtes Erholungsgebiet im Sommer.", "Dominiert von Eichen und Buchen.", "Zahlreiche Flüsse entspringen in diesen Wäldern."],
      hu: ["Népszerű nyári rekreációs terület.", "Tölgyek és bükkök uralják.", "Számos folyó ered ezekben az erdőkben."],
      ro: ["O zonă populară de recreere vara.", "Dominată de stejari și fagi.", "Numeroase râuri izvorăsc din aceste păduri."],
      en: ["A popular recreation area in summer.", "Dominated by oaks and beeches.", "Numerous rivers originate in these forests."]
    }
  },
  {
    id: "lake-batabat-nature-v2",
    type: "lake",
    parent: "AZ-SHK",
    coords: [45.7833, 39.5333],
    name: { de: "Batabat-See", hu: "Batabat-tó", ro: "Lacul Batabat", en: "Lake Batabat" },
    description: { de: "Ein malerischer Hochgebirgssee in Nachitschewan, der für seine schwimmende Torfinsel berühmt ist.", hu: "Festői magashegyi tó Nahicsevánban, amely úszó tőzegszigetéről híres.", ro: "Un lac alpin pitoresc din Nahicevan, faimos pentru insula sa plutitoare de turbă.", en: "A picturesque high-mountain lake in Nakhchivan, famous for its floating peat island." },
    facts: {
      de: ["Liegt auf etwa 2500 Metern Höhe.", "Umgeben von alpinen Wiesen.", "Das Wasser ist glasklar und kalt."],
      hu: ["Körülbelül 2500 méteres magasságban fekszik.", "Alpesi rétek veszik körül.", "Vize kristálytiszta és hideg."],
      ro: ["Situat la aproximativ 2500 de metri altitudine.", "Înconjurat de pajiști alpine.", "Apa este cristalină și rece."],
      en: ["Located at about 2500 meters altitude.", "Surrounded by alpine meadows.", "The water is crystal clear and cold."]
    }
  }
];
