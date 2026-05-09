import type { POI } from "./poi";

export const poiExtraArmeniaNatureV2: POI[] = [
  {
    id: "lake-sevan-nature-v2",
    type: "lake",
    parent: "AM-GR",
    coords: [45.3400, 40.3160],
    name: { de: "Sewansee", hu: "Szeván-tó", ro: "Lacul Sevan", en: "Lake Sevan" },
    description: { de: "Der Sewansee ist der größte See in Armenien und einer der größten Hochgebirgsseen der Welt.", hu: "A Szeván-tó Örményország legnagyobb tava és a világ egyik legnagyobb magashegyi tava.", ro: "Lacul Sevan este cel mai mare lac din Armenia și unul dintre cele mai mari lacuri alpine din lume.", en: "Lake Sevan is the largest lake in Armenia and one of the largest high-altitude lakes in the world." },
    facts: {
      de: ["Fläche von etwa 1.242 km².", "Liegt auf 1.900 Metern Höhe."],
      hu: ["Területe körülbelül 1242 km².", "1900 méteres tengerszint feletti magasságban fekszik."],
      ro: ["Are o suprafață de aproximativ 1.242 km².", "Situat la 1.900 de metri deasupra nivelului mării."],
      en: ["Has an area of about 1,242 km².", "Located at an altitude of 1,900 meters."]
    }
  },
  {
    id: "mount-aragats-nature-v2",
    type: "mountain",
    parent: "AM-AG",
    coords: [44.1963, 40.5230],
    name: { de: "Aragaz", hu: "Aragac", ro: "Muntele Aragaț", en: "Mount Aragats" },
    description: { de: "Der Aragaz ist der höchste Berg in Armenien und ein erloschener Schichtvulkan.", hu: "Az Aragac Örményország legmagasabb hegye, egy kialudt rétegvulkán.", ro: "Muntele Aragaț este cel mai înalt munte din Armenia, fiind un stratovulcan stins.", en: "Mount Aragats is the highest mountain in Armenia, an extinct stratovolcano." },
    facts: {
      de: ["Höchster Gipfel: 4.090 Meter.", "Besteht aus vier Gipfeln."],
      hu: ["Legmagasabb csúcsa 4090 méter.", "Négy csúcsból áll."],
      ro: ["Cel mai înalt vârf are 4.090 metri.", "Este format din patru vârfuri."],
      en: ["Highest peak is 4,090 meters.", "Consists of four peaks."]
    }
  },
  {
    id: "dilijan-national-park-nature-v2",
    type: "national-park",
    parent: "AM-TV",
    coords: [44.9786, 40.7291],
    name: { de: "Nationalpark Dilidschan", hu: "Dilizsan Nemzeti Park", ro: "Parcul Național Dilijan", en: "Dilijan National Park" },
    description: { de: "Der Nationalpark Dilidschan ist bekannt für seine dichten Wälder, Seen und reiche Artenvielfalt.", hu: "A Dilizsan Nemzeti Park sűrű erdeiről, tavairól és gazdag biodiverzitásáról híres.", ro: "Parcul Național Dilijan este renumit pentru pădurile sale dese, lacurile și biodiversitatea bogată.", en: "Dilijan National Park is known for its dense forests, lakes, and rich biodiversity." },
    facts: {
      de: ["Gegründet im Jahr 2002.", "Umfasst eine Fläche von 240 km²."],
      hu: ["2002-ben alapították.", "Területe 240 km²."],
      ro: ["Înființat în anul 2002.", "Acoperă o suprafață de 240 km²."],
      en: ["Established in 2002.", "Covers an area of 240 km²."]
    }
  },
  {
    id: "khosrov-forest-nature-v2",
    type: "forest",
    parent: "AM-AR",
    coords: [44.8988, 40.0166],
    name: { de: "Chosrow-Wald", hu: "Hoszrov-erdő", ro: "Pădurea Khosrov", en: "Khosrov Forest" },
    description: { de: "Das staatliche Schutzgebiet Chosrow-Wald ist eines der ältesten Naturschutzgebiete der Welt.", hu: "A Hoszrov-erdő Állami Rezervátum a világ egyik legrégebbi természetvédelmi területe.", ro: "Rezervația de stat Pădurea Khosrov este una dintre cele mai vechi arii naturale protejate din lume.", en: "Khosrov Forest State Reserve is one of the oldest protected nature areas in the world." },
    facts: {
      de: ["Gegründet im 4. Jahrhundert.", "Schützt seltene kaukasische Leoparden."],
      hu: ["A 4. században alapították.", "Ritka kaukázusi leopárdokat véd."],
      ro: ["Înființată în secolul al IV-lea.", "Protejează leoparzi caucazieni rari."],
      en: ["Founded in the 4th century.", "Protects rare Caucasian leopards."]
    }
  },
  {
    id: "shikahogh-reserve-nature-v2",
    type: "forest",
    parent: "AM-SU",
    coords: [46.4667, 39.0500],
    name: { de: "Schikahogh-Reservat", hu: "Sikahogh-rezervátum", ro: "Rezervația Shikahogh", en: "Shikahogh State Reserve" },
    description: { de: "Das Schikahogh-Reservat schützt dichte Eichen- und Hainbuchenwälder im Süden Armeniens.", hu: "A Sikahogh-rezervátum sűrű tölgy- és gyertyánerdőket véd Örményország déli részén.", ro: "Rezervația Shikahogh protejează păduri dese de stejar și carpen în sudul Armeniei.", en: "Shikahogh State Reserve protects dense oak and hornbeam forests in southern Armenia." },
    facts: {
      de: ["Liegt in der Provinz Sjunik.", "Lebensraum für Bären und Wölfe."],
      hu: ["Szjunik tartományban található.", "Medvék és farkasok élőhelye."],
      ro: ["Situată în provincia Syunik.", "Habitat pentru urși și lupi."],
      en: ["Located in the Syunik Province.", "Habitat for bears and wolves."]
    }
  },
  {
    id: "mount-kaputjugh-nature-v2",
    type: "mountain",
    parent: "AM-SU",
    coords: [46.0333, 39.1667],
    name: { de: "Kaputdschugh", hu: "Kaputdzsugh", ro: "Muntele Kaputjugh", en: "Mount Kaputjugh" },
    description: { de: "Der Kaputdschugh ist der zweithöchste Berg in Armenien und bildet die Grenze zu Nachitschewan.", hu: "A Kaputdzsugh Örményország második legmagasabb hegye, mely határt képez Nahicsevánnal.", ro: "Muntele Kaputjugh este al doilea cel mai înalt munte din Armenia, formând granița cu Nahicevan.", en: "Mount Kaputjugh is the second highest mountain in Armenia, forming the border with Nakhchivan." },
    facts: {
      de: ["Höhe von 3.905 Metern.", "Teil des Sangesur-Gebirges."],
      hu: ["Magassága 3905 méter.", "A Zangezur-hegység része."],
      ro: ["Înălțime de 3.905 metri.", "Face parte din Munții Zangezur."],
      en: ["Elevation of 3,905 meters.", "Part of the Zangezur Mountains."]
    }
  },
  {
    id: "hrazdan-river-nature-v2",
    type: "river",
    parent: "AM-KT",
    coords: [44.5208, 40.1792],
    name: { de: "Hrasdan", hu: "Hrazdan", ro: "Râul Hrazdan", en: "Hrazdan River" },
    description: { de: "Der Hrasdan ist ein bedeutender Fluss in Armenien, der aus dem Sewansee fließt und Eriwan durchquert.", hu: "A Hrazdan egy jelentős folyó Örményországban, amely a Szeván-tóból ered és átszeli Jerevánt.", ro: "Râul Hrazdan este un râu important din Armenia, care izvorăște din Lacul Sevan și traversează Erevanul.", en: "The Hrazdan is a major river in Armenia, flowing from Lake Sevan and passing through Yerevan." },
    facts: {
      de: ["Länge von 141 Kilometern.", "Mündet in den Aras."],
      hu: ["Hossza 141 kilométer.", "Az Araksz folyóba torkollik."],
      ro: ["Lungime de 141 de kilometri.", "Se varsă în râul Aras."],
      en: ["Length of 141 kilometers.", "Flows into the Aras River."]
    }
  },
  {
    id: "aras-river-nature-v2",
    type: "river",
    parent: "AM-AR",
    coords: [44.7500, 39.8167],
    name: { de: "Aras", hu: "Araksz", ro: "Râul Aras", en: "Aras River" },
    description: { de: "Der Aras markiert die südliche Grenze Armeniens und spielt eine wichtige Rolle in der Geschichte der Region.", hu: "Az Araksz Örményország déli határát jelöli, és fontos szerepet játszik a régió történelmében.", ro: "Râul Aras marchează granița de sud a Armeniei și joacă un rol important în istoria regiunii.", en: "The Aras marks the southern border of Armenia and plays an important role in the region's history." },
    facts: {
      de: ["Gesamtlänge von über 1.000 km.", "Fließt ins Kaspische Meer."],
      hu: ["Teljes hossza több mint 1000 km.", "A Kaszpi-tengerbe ömlik."],
      ro: ["Lungime totală de peste 1.000 km.", "Se varsă în Marea Caspică."],
      en: ["Total length of over 1,000 km.", "Flows into the Caspian Sea."]
    }
  },
  {
    id: "lake-arpi-nature-v2",
    type: "lake",
    parent: "AM-SH",
    coords: [43.6167, 41.0500],
    name: { de: "Arpisee", hu: "Arpi-tó", ro: "Lacul Arpi", en: "Lake Arpi" },
    description: { de: "Der Arpisee liegt im Nordwesten Armeniens und ist das Zentrum des gleichnamigen Nationalparks.", hu: "Az Arpi-tó Örményország északnyugati részén található, az azonos nevű nemzeti park központja.", ro: "Lacul Arpi este situat în nord-vestul Armeniei și reprezintă centrul parcului național omonim.", en: "Lake Arpi is located in northwestern Armenia and is the center of the national park of the same name." },
    facts: {
      de: ["Auf 2.025 Metern Höhe.", "Wichtiger Rastplatz für Zugvögel."],
      hu: ["2025 méteres magasságban van.", "Fontos pihenőhely vonuló madaraknak."],
      ro: ["La o altitudine de 2.025 metri.", "Loc important de popas pentru păsările migratoare."],
      en: ["At an altitude of 2,025 meters.", "Important resting place for migratory birds."]
    }
  },
  {
    id: "arevik-national-park-nature-v2",
    type: "national-park",
    parent: "AM-SU",
    coords: [46.2000, 38.9667],
    name: { de: "Nationalpark Arewik", hu: "Arevik Nemzeti Park", ro: "Parcul Național Arevik", en: "Arevik National Park" },
    description: { de: "Der Nationalpark Arewik im äußersten Süden Armeniens schützt seltene Tierarten und bergige Landschaften.", hu: "Az Örményország legdélebbi részén fekvő Arevik Nemzeti Park ritka állatfajokat és hegyvidéki tájakat véd.", ro: "Parcul Național Arevik din extremitatea sudică a Armeniei protejează specii rare de animale și peisaje montane.", en: "Arevik National Park in the extreme south of Armenia protects rare animal species and mountainous landscapes." },
    facts: {
      de: ["Gegründet im Jahr 2009.", "Fläche von über 344 km²."],
      hu: ["2009-ben alapították.", "Területe több mint 344 km²."],
      ro: ["Înființat în 2009.", "Suprafață de peste 344 km²."],
      en: ["Established in 2009.", "Area of over 344 km²."]
    }
  },
  {
    id: "mount-azhdahak-nature-v2",
    type: "mountain",
    parent: "AM-GR",
    coords: [44.9458, 40.2264],
    name: { de: "Aschdahak", hu: "Azhdahak", ro: "Muntele Azhdahak", en: "Mount Azhdahak" },
    description: { de: "Der Aschdahak ist der höchste Punkt des Geghama-Gebirges und hat einen Kratersee auf dem Gipfel.", hu: "Az Azhdahak a Gegama-hegység legmagasabb pontja, csúcsán egy krátertóval.", ro: "Muntele Azhdahak este cel mai înalt punct al Munților Geghama, având un lac de crater pe vârf.", en: "Azhdahak is the highest point of the Geghama Mountains, featuring a crater lake at its summit." },
    facts: {
      de: ["Höhe von 3.597 Metern.", "Bekannt für alte Petroglyphen."],
      hu: ["Magassága 3597 méter.", "Ősi sziklarajzairól ismert."],
      ro: ["Înălțime de 3.597 metri.", "Renumit pentru petroglife antice."],
      en: ["Elevation of 3,597 meters.", "Known for ancient petroglyphs."]
    }
  },
  {
    id: "vorotan-river-nature-v2",
    type: "river",
    parent: "AM-SU",
    coords: [46.3333, 39.4000],
    name: { de: "Worotan", hu: "Vorotan", ro: "Râul Vorotan", en: "Vorotan River" },
    description: { de: "Der Worotan gräbt sich durch eine tiefe Schlucht in Südarmenien, die für ihre landschaftliche Schönheit bekannt ist.", hu: "A Vorotan folyó mély szurdokot vájt Dél-Örményországban, amely természeti szépségéről híres.", ro: "Râul Vorotan sapă un defileu adânc în sudul Armeniei, renumit pentru frumusețea sa peisagistică.", en: "The Vorotan River carves a deep gorge in southern Armenia, known for its scenic beauty." },
    facts: {
      de: ["Länge von 178 Kilometern.", "Fließt durch die Provinz Sjunik."],
      hu: ["Hossza 178 kilométer.", "Szjunik tartományon folyik keresztül."],
      ro: ["Lungime de 178 de kilometri.", "Curge prin provincia Syunik."],
      en: ["Length of 178 kilometers.", "Flows through the Syunik Province."]
    }
  },
  {
    id: "lake-kari-nature-v2",
    type: "lake",
    parent: "AM-AG",
    coords: [44.1814, 40.4725],
    name: { de: "Karisee", hu: "Kari-tó", ro: "Lacul Kari", en: "Lake Kari" },
    description: { de: "Der Karisee ist ein hochgelegener Bergsee am Fuße des Berges Aragaz, der größtenteils aus Schmelzwasser besteht.", hu: "A Kari-tó egy magasan fekvő hegyi tó az Aragac-hegy lábánál, amelyet nagyrészt olvadékvíz táplál.", ro: "Lacul Kari este un lac alpin situat la poalele Muntelui Aragaț, format în mare parte din apă de topire.", en: "Lake Kari is a high-altitude mountain lake at the foot of Mount Aragats, formed mostly by meltwater." },
    facts: {
      de: ["Auf 3.185 Metern Höhe.", "Wird von Schnee gespeist."],
      hu: ["3185 méteres magasságban fekszik.", "Főként hó olvadásából táplálkozik."],
      ro: ["Situat la 3.185 metri altitudine.", "Este alimentat de zăpadă."],
      en: ["Located at 3,185 meters altitude.", "Fed mainly by melting snow."]
    }
  },
  {
    id: "kasagh-river-nature-v2",
    type: "river",
    parent: "AM-AG",
    coords: [44.3833, 40.2833],
    name: { de: "Kassagh", hu: "Kaszagh", ro: "Râul Kasagh", en: "Kasagh River" },
    description: { de: "Der Kassagh fließt durch den Westen Armeniens und hat eine tiefe Schlucht geschaffen, an der viele Klöster liegen.", hu: "A Kaszagh folyó Örményország nyugati részén folyik, mély szurdokot vájva, melynek mentén számos kolostor található.", ro: "Râul Kasagh curge prin vestul Armeniei și a creat un defileu adânc de-a lungul căruia se află multe mănăstiri.", en: "The Kasagh flows through western Armenia, creating a deep gorge along which many monasteries are located." },
    facts: {
      de: ["Länge von 89 Kilometern.", "Schneidet durch vulkanisches Gestein."],
      hu: ["Hossza 89 kilométer.", "Vulkanikus kőzeten vág keresztül."],
      ro: ["Lungime de 89 de kilometri.", "Taie prin rocă vulcanică."],
      en: ["Length of 89 kilometers.", "Cuts through volcanic rock."]
    }
  },
  {
    id: "lake-akna-nature-v2",
    type: "lake",
    parent: "AM-KT",
    coords: [44.9222, 40.2800],
    name: { de: "Aknasee", hu: "Akna-tó", ro: "Lacul Akna", en: "Lake Akna" },
    description: { de: "Der Aknasee ist ein malerischer Kratersee im Geghama-Gebirge, umgeben von alpinen Wiesen.", hu: "Az Akna-tó egy festői krátertó a Gegama-hegységben, alpesi rétekkel övezve.", ro: "Lacul Akna este un lac de crater pitoresc din Munții Geghama, înconjurat de pajiști alpine.", en: "Lake Akna is a picturesque crater lake in the Geghama Mountains, surrounded by alpine meadows." },
    facts: {
      de: ["Auf 3.030 Metern Höhe.", "Fläche von nur 0,8 km²."],
      hu: ["3030 méteres magasságban található.", "Területe mindössze 0,8 km²."],
      ro: ["La o altitudine de 3.030 metri.", "Suprafață de doar 0,8 km²."],
      en: ["At an altitude of 3,030 meters.", "Area of only 0.8 km²."]
    }
  },
  {
    id: "debed-river-nature-v2",
    type: "river",
    parent: "AM-LO",
    coords: [44.8167, 41.2500],
    name: { de: "Debed", hu: "Debed", ro: "Râul Debed", en: "Debed River" },
    description: { de: "Der Debed fließt durch tiefe, bewaldete Schluchten im Norden Armeniens in Richtung Georgien.", hu: "A Debed Észak-Örményország mély, erdős szurdokaiban folyik Grúzia felé.", ro: "Râul Debed curge prin defileuri adânci și împădurite în nordul Armeniei, îndreptându-se spre Georgia.", en: "The Debed flows through deep, forested gorges in northern Armenia towards Georgia." },
    facts: {
      de: ["Länge von 176 Kilometern.", "Teil des Kura-Beckens."],
      hu: ["Hossza 176 kilométer.", "A Kura folyó medencéjének része."],
      ro: ["Lungime de 176 de kilometri.", "Parte a bazinului Kura."],
      en: ["Length of 176 kilometers.", "Part of the Kura River basin."]
    }
  },
  {
    id: "lake-parz-nature-v2",
    type: "lake",
    parent: "AM-TV",
    coords: [44.9625, 40.7516],
    name: { de: "Parz-See", hu: "Parz-tó", ro: "Lacul Parz", en: "Lake Parz" },
    description: { de: "Der Parz-See ist ein kleiner Waldsee im Nationalpark Dilidschan, der für sein kristallklares Wasser bekannt ist.", hu: "A Parz-tó egy kis erdei tó a Dilizsan Nemzeti Parkban, amely kristálytiszta vizéről ismert.", ro: "Lacul Parz este un mic lac de pădure în Parcul Național Dilijan, renumit pentru apele sale cristaline.", en: "Lake Parz is a small forest lake in Dilijan National Park, known for its crystal-clear water." },
    facts: {
      de: ["Name bedeutet „klarer See“.", "Beliebtes Ziel für Wanderer."],
      hu: ["Neve „tiszta tavat” jelent.", "Népszerű célpont a túrázók körében."],
      ro: ["Numele înseamnă „lac clar”.", "Destinație populară pentru drumeții."],
      en: ["Name means 'clear lake'.", "Popular destination for hikers."]
    }
  },
  {
    id: "mount-khustup-nature-v2",
    type: "mountain",
    parent: "AM-SU",
    coords: [46.3314, 39.1361],
    name: { de: "Chustup", hu: "Husztup", ro: "Muntele Khustup", en: "Mount Khustup" },
    description: { de: "Der Chustup ist ein prominenter Berg in Südarmenien, dessen Hänge mit dichten Wäldern und Alpenwiesen bedeckt sind.", hu: "A Husztup egy kiemelkedő hegy Dél-Örményországban, amelynek lejtőit sűrű erdők és alpesi rétek borítják.", ro: "Muntele Khustup este un munte proeminent în sudul Armeniei, cu versanți acoperiți de păduri dese și pajiști alpine.", en: "Khustup is a prominent mountain in southern Armenia, with slopes covered in dense forests and alpine meadows." },
    facts: {
      de: ["Höhe von 3.201 Metern.", "Heiliger Ort in der armenischen Kultur."],
      hu: ["Magassága 3201 méter.", "Szent hely az örmény kultúrában."],
      ro: ["Înălțime de 3.201 metri.", "Loc sacru în cultura armeană."],
      en: ["Elevation of 3,201 meters.", "Sacred place in Armenian culture."]
    }
  },
  {
    id: "sevan-national-park-nature-v2",
    type: "national-park",
    parent: "AM-GR",
    coords: [45.3000, 40.3500],
    name: { de: "Nationalpark Sewan", hu: "Szeván Nemzeti Park", ro: "Parcul Național Sevan", en: "Sevan National Park" },
    description: { de: "Der Nationalpark Sewan wurde gegründet, um das empfindliche Ökosystem des Sewansees und seiner Umgebung zu schützen.", hu: "A Szeván Nemzeti Parkot a Szeván-tó és környezetének érzékeny ökoszisztémájának védelme érdekében hozták létre.", ro: "Parcul Național Sevan a fost înființat pentru a proteja ecosistemul fragil al Lacului Sevan și al împrejurimilor sale.", en: "Sevan National Park was established to protect the fragile ecosystem of Lake Sevan and its surroundings." },
    facts: {
      de: ["Gegründet im Jahr 1978.", "Schützt endemische Fischarten."],
      hu: ["1978-ban alapították.", "Endemikus halfajokat véd."],
      ro: ["Înființat în anul 1978.", "Protejează specii endemice de pești."],
      en: ["Established in 1978.", "Protects endemic fish species."]
    }
  },
  {
    id: "pambak-river-nature-v2",
    type: "river",
    parent: "AM-LO",
    coords: [44.4750, 40.8250],
    name: { de: "Pambak", hu: "Pambak", ro: "Râul Pambak", en: "Pambak River" },
    description: { de: "Der Pambak fließt durch den Norden Armeniens und verbindet sich später mit dem Dsoraget zum Fluss Debed.", hu: "A Pambak folyó Észak-Örményországban folyik, majd a Dzoragettel egyesülve alkotja a Debed folyót.", ro: "Râul Pambak curge prin nordul Armeniei și se unește ulterior cu Dzoraget pentru a forma râul Debed.", en: "The Pambak flows through northern Armenia, later joining the Dzoraget to form the Debed River." },
    facts: {
      de: ["Länge von 86 Kilometern.", "Durchquert die Stadt Wanadsor."],
      hu: ["Hossza 86 kilométer.", "Keresztezi Vanadzor városát."],
      ro: ["Lungime de 86 de kilometri.", "Traversează orașul Vanadzor."],
      en: ["Length of 86 kilometers.", "Passes through the city of Vanadzor."]
    }
  }
];
