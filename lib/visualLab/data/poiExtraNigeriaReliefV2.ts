import type { POI } from "./poi";

export const poiExtraNigeriaReliefV2: POI[] = [
  {
    id: "mambilla-plateau-relief-v2",
    type: "mountain",
    parent: "NG-TA",
    coords: [11.23, 7.03],
    name: { de: "Mambilla-Plateau", hu: "Mambilla-fennsík", ro: "Platoul Mambilla", en: "Mambilla Plateau" },
    description: { de: "Das Mambilla-Plateau ist eine Hochlandregion im Osten Nigerias mit einer Durchschnittshöhe von über 1500 Metern.", hu: "A Mambilla-fennsík egy magasföld Nigéria keleti részén, átlagos magassága meghaladja az 1500 métert.", ro: "Platoul Mambilla este o regiune montană în estul Nigeriei, cu o altitudine medie de peste 1500 de metri.", en: "The Mambilla Plateau is a highland region in eastern Nigeria with an average elevation of over 1500 meters." },
    facts: {
      de: ["Höchster Punkt in Nigeria", "Ganzjährig kühles Klima", "Weideland und Teeplantagen"],
      hu: ["Nigéria legmagasabb pontja", "Egész évben hűvös éghajlat", "Legelő és teaültetvények"],
      ro: ["Cel mai înalt punct din Nigeria", "Climat răcoros tot anul", "Pășuni și plantații de ceai"],
      en: ["Highest point in Nigeria", "Cool climate year-round", "Pastureland and tea plantations"]
    }
  },
  {
    id: "gashaka-hills-relief-v2",
    type: "mountain",
    parent: "NG-TA",
    coords: [11.6, 7.3],
    name: { de: "Gashaka-Berge", hu: "Gashaka-hegyek", ro: "Munții Gashaka", en: "Gashaka Hills" },
    description: { de: "Die Gashaka-Berge sind Teil des Gashaka-Gumti-Nationalparks und bieten eine raue Berglandschaft.", hu: "A Gashaka-hegyek a Gashaka-Gumti Nemzeti Park részei, zord hegyvidéki tájat kínálnak.", ro: "Munții Gashaka fac parte din Parcul Național Gashaka-Gumti și oferă un peisaj montan accidentat.", en: "The Gashaka Hills are part of the Gashaka-Gumti National Park and offer a rugged mountain landscape." },
    facts: {
      de: ["Teil des Nationalparks", "Schutzgebiet für Primaten", "Steile Berghänge"],
      hu: ["A nemzeti park része", "Főemlősök védett területe", "Meredek hegyoldalak"],
      ro: ["Parte a parcului național", "Arie protejată pentru primate", "Versanți abrupți"],
      en: ["Part of the national park", "Protected area for primates", "Steep hillsides"]
    }
  },
  {
    id: "obudu-mountains-relief-v2",
    type: "mountain",
    parent: "NG-CR",
    coords: [9.36, 6.4],
    name: { de: "Obudu-Berge (neu)", hu: "Obudu-hegyek (új)", ro: "Munții Obudu (nou)", en: "Obudu Mountains (new)" },
    description: { de: "Eine spektakuläre Bergkette nahe der Grenze zu Kamerun, bekannt für ihre üppigen Graslandschaften.", hu: "Látványos hegyvonulat Kamerun határának közelében, dús füves területeiről ismert.", ro: "Un lanț muntos spectaculos aproape de granița cu Camerun, cunoscut pentru pajiștile sale luxuriante.", en: "A spectacular mountain range near the border with Cameroon, known for its lush grasslands." },
    facts: {
      de: ["Beliebtes Touristenziel", "Neblige Bergkämme", "Reiches Ökosystem"],
      hu: ["Népszerű turisztikai célpont", "Ködös hegygerincek", "Gazdag ökoszisztéma"],
      ro: ["Destinație turistică populară", "Creste montane cețoase", "Ecosistem bogat"],
      en: ["Popular tourist destination", "Misty mountain ridges", "Rich ecosystem"]
    }
  },
  {
    id: "uadi-niger-relief-v2",
    type: "relief",
    parent: "NG-KW",
    coords: [4.9, 8.5],
    name: { de: "Niger-Tal", hu: "Niger-völgy", ro: "Valea Nigerului", en: "Niger Valley" },
    description: { de: "Das fruchtbare Tal entlang des Niger-Flusses ist ein zentrales geografisches Element Nigerias.", hu: "A Niger folyó mentén húzódó termékeny völgy Nigéria központi földrajzi eleme.", ro: "Valea fertilă de-a lungul fluviului Niger este un element geografic central al Nigeriei.", en: "The fertile valley along the Niger River is a central geographical feature of Nigeria." },
    facts: {
      de: ["Hauptlebensader Nigerias", "Landwirtschaftliches Herzland", "Überschwemmungsebenen"],
      hu: ["Nigéria fő artériája", "Mezőgazdasági szívvidék", "Ártéri síkságok"],
      ro: ["Artera principală a Nigeriei", "Inima agriculturii", "Câmpii inundabile"],
      en: ["Main artery of Nigeria", "Agricultural heartland", "Floodplains"]
    }
  },
  {
    id: "plateau-jos-relief-v2",
    type: "relief",
    parent: "NG-PL",
    coords: [8.9, 9.3],
    name: { de: "Jos-Hochebene (v2)", hu: "Jos-fennsík (v2)", ro: "Platoul Jos (v2)", en: "Jos Plateau (v2)" },
    description: { de: "Eine markante Hochlandregion im Zentrum Nigerias, die sich deutlich von ihrer Umgebung abhebt.", hu: "Kiemelkedő magasföld Nigéria központjában, amely jelentősen kiemelkedik a környezetéből.", ro: "O regiune montană distinctă în centrul Nigeriei, care se ridică semnificativ deasupra împrejurimilor sale.", en: "A prominent highland region in central Nigeria that rises significantly above its surroundings." },
    facts: {
      de: ["Kühles Hochlandklima", "Zinnvorkommen in der Region", "Felsige Formationen"],
      hu: ["Hűvös hegyvidéki éghajlat", "Ónlelőhelyek a régióban", "Sziklás formációk"],
      ro: ["Climat montan răcoros", "Zăcăminte de staniu în regiune", "Formațiuni stâncoase"],
      en: ["Cool highland climate", "Tin deposits in the region", "Rocky formations"]
    }
  },
  {
    id: "kainji-becken-relief-v2",
    type: "relief",
    parent: "NG-NI",
    coords: [4.5, 10.3],
    name: { de: "Kainji-Becken", hu: "Kainji-medence", ro: "Bazinul Kainji", en: "Kainji Basin" },
    description: { de: "Ein durch den Kainji-Stausee geprägtes Becken, das eine wichtige ökologische Funktion hat.", hu: "A Kainji-víztározó által kialakított medence, amely fontos ökológiai funkcióval bír.", ro: "Un bazin modelat de lacul de acumulare Kainji, care are o funcție ecologică importantă.", en: "A basin shaped by the Kainji Reservoir, which has an important ecological function." },
    facts: {
      de: ["Künstlicher Stausee", "Fischreiches Gewässer", "Wichtige Energiequelle"],
      hu: ["Mesterséges víztározó", "Halban gazdag víz", "Fontos energiaforrás"],
      ro: ["Lac de acumulare artificial", "Apă bogată în pești", "Sursă importantă de energie"],
      en: ["Artificial reservoir", "Fish-rich waters", "Important energy source"]
    }
  },
  {
    id: "delta-niger-relief-v2",
    type: "relief",
    parent: "NG-BY",
    coords: [6.0, 4.8],
    name: { de: "Niger-Delta (Relief)", hu: "Niger-delta (domborzat)", ro: "Delta Nigerului (relief)", en: "Niger Delta (relief)" },
    description: { de: "Ein riesiges Marschland- und Deltagebiet an der Mündung des Niger in den Golf von Guinea.", hu: "Hatalmas mocsaras és deltavidék a Niger folyó torkolatánál, a Guineai-öbölben.", ro: "O zonă vastă de mlaștini și deltă la vărsarea fluviului Niger în Golful Guineei.", en: "A massive marshland and delta region at the mouth of the Niger River into the Gulf of Guinea." },
    facts: {
      de: ["Ölreiche Region", "Mangrovenwälder", "Komplexes Flussnetz"],
      hu: ["Olajban gazdag régió", "Mangróveerdők", "Összetett folyóhálózat"],
      ro: ["Regiune bogată în petrol", "Păduri de mangrove", "Rețea fluvială complexă"],
      en: ["Oil-rich region", "Mangrove forests", "Complex river network"]
    }
  },
  {
    id: "biu-plateau-relief-v2",
    type: "relief",
    parent: "NG-BO",
    coords: [12.2, 10.6],
    name: { de: "Biu-Plateau", hu: "Biu-fennsík", ro: "Platoul Biu", en: "Biu Plateau" },
    description: { de: "Eine vulkanische Hochlandregion im Nordosten Nigerias mit basaltischen Böden.", hu: "Vulkáni magasföld Nigéria északkeleti részén, bazaltos talajjal.", ro: "O regiune muntoasă vulcanică în nord-estul Nigeriei cu soluri bazaltice.", en: "A volcanic highland region in northeastern Nigeria with basaltic soils." },
    facts: {
      de: ["Vulkanischen Ursprungs", "Fruchtbare Böden", "Höhenlage 700m"],
      hu: ["Vulkáni eredetű", "Termékeny talaj", "700m tengerszint feletti magasság"],
      ro: ["De origine vulcanică", "Soluri fertile", "Altitudine 700m"],
      en: ["Volcanic origin", "Fertile soils", "Elevation 700m"]
    }
  },
  {
    id: "mandara-berge-relief-v2",
    type: "mountain",
    parent: "NG-AD",
    coords: [13.2, 10.9],
    name: { de: "Mandara-Berge (Relief)", hu: "Mandara-hegység (domborzat)", ro: "Munții Mandara (relief)", en: "Mandara Mountains (relief)" },
    description: { de: "Eine Bergkette, die die Grenze zwischen Nigeria und Kamerun bildet.", hu: "Hegyvonulat, amely Nigéria és Kamerun határát alkotja.", ro: "Un lanț muntos care formează granița dintre Nigeria și Camerun.", en: "A mountain range that forms the border between Nigeria and Cameroon." },
    facts: {
      de: ["Grenzkamm", "Traditionelle Siedlungen", "Granitformationen"],
      hu: ["Határgerinc", "Hagyományos települések", "Gránitformációk"],
      ro: ["Crestă de frontieră", "Așezări tradiționale", "Formațiuni de granit"],
      en: ["Border ridge", "Traditional settlements", "Granite formations"]
    }
  },
  {
    id: "shebshi-berge-relief-v2",
    type: "mountain",
    parent: "NG-AD",
    coords: [11.5, 8.5],
    name: { de: "Shebshi-Berge", hu: "Shebshi-hegység", ro: "Munții Shebshi", en: "Shebshi Mountains" },
    description: { de: "Eine robuste Bergregion in Zentral-Ost-Nigeria.", hu: "Robusztus hegyvidéki régió Kelet-Közép-Nigériában.", ro: "O regiune muntoasă robustă în estul central al Nigeriei.", en: "A robust mountain region in east-central Nigeria." },
    facts: {
      de: ["Unberührte Natur", "Hohe Reliefenergie", "Wichtige Wasserscheide"],
      hu: ["Érintetlen természet", "Magas domborzati energia", "Fontos vízválasztó"],
      ro: ["Natură neatinsă", "Energie de relief ridicată", "Liniar de cumpănă a apelor"],
      en: ["Untouched nature", "High relief energy", "Important watershed"]
    }
  },
  {
    id: "alantika-berge-relief-v2",
    type: "mountain",
    parent: "NG-AD",
    coords: [12.5, 8.9],
    name: { de: "Alantika-Berge", hu: "Alantika-hegység", ro: "Munții Alantika", en: "Alantika Mountains" },
    description: { de: "Diese Berge bilden einen wilden, abgelegenen Teil des Hochlands an der kamerunischen Grenze.", hu: "Ezek a hegyek a felföld vad, távoli részét képezik a kameruni határnál.", ro: "Acești munți formează o parte sălbatică și izolată a zonei înalte de la granița cu Camerun.", en: "These mountains form a wild, remote part of the highlands on the Cameroonian border." },
    facts: {
      de: ["Abgelegene Bergwelt", "Natürliche Barriere", "Steinige Pfade"],
      hu: ["Távoli hegyvilág", "Természetes akadály", "Köves ösvények"],
      ro: ["Lume montană izolată", "Barieră naturală", "Poteci stâncoase"],
      en: ["Remote mountain world", "Natural barrier", "Rocky paths"]
    }
  },
  {
    id: "shere-hills-relief-v2",
    type: "mountain",
    parent: "NG-PL",
    coords: [9.0, 9.7],
    name: { de: "Shere Hills (Relief)", hu: "Shere-hegyek (domborzat)", ro: "Munții Shere (relief)", en: "Shere Hills (relief)" },
    description: { de: "Eine spektakuläre, raue Berglandschaft, die für Wanderungen bekannt ist.", hu: "Látványos, zord hegyvidéki táj, amely túrázásról ismert.", ro: "Un peisaj montan spectaculos și accidentat, cunoscut pentru drumeții.", en: "A spectacular, rugged mountain landscape known for trekking." },
    facts: {
      de: ["Herausforderndes Gelände", "Trekking-Ziel", "Felsige Klippen"],
      hu: ["Kihívást jelentő terep", "Túrázó célpont", "Sziklás sziklák"],
      ro: ["Teren provocator", "Destinație de trekking", "Stânci abrupte"],
      en: ["Challenging terrain", "Trekking destination", "Rocky cliffs"]
    }
  },
  {
    id: "kogi-hügel-relief-v2",
    type: "relief",
    parent: "NG-KO",
    coords: [6.7, 7.7],
    name: { de: "Kogi-Hügelland", hu: "Kogi-dombság", ro: "Dealurile Kogi", en: "Kogi Hills" },
    description: { de: "Eine wellige Hügellandschaft am Zusammenfluss von Niger und Benue.", hu: "Hullámos dombság a Niger és a Benue találkozásánál.", ro: "Un peisaj de dealuri ondulate la confluența râurilor Niger și Benue.", en: "A rolling hilly landscape at the confluence of the Niger and Benue rivers." },
    facts: {
      de: ["Flusszusammenfluss", "Sanftes Relief", "Grüne Hügel"],
      hu: ["Folyók találkozása", "Szelíd domborzat", "Zöld dombok"],
      ro: ["Confluența râurilor", "Relief domol", "Dealuri verzi"],
      en: ["River confluence", "Gentle relief", "Green hills"]
    }
  },
  {
    id: "ekiti-hügel-relief-v2",
    type: "relief",
    parent: "NG-EK",
    coords: [5.2, 7.7],
    name: { de: "Ekiti-Hügelland", hu: "Ekiti-dombság", ro: "Dealurile Ekiti", en: "Ekiti Hills" },
    description: { de: "Eine malerische Hügelregion im Südwesten Nigerias.", hu: "Festői dombvidék Nigéria délnyugati részén.", ro: "O regiune pitorească de dealuri în sud-vestul Nigeriei.", en: "A picturesque hilly region in southwestern Nigeria." },
    facts: {
      de: ["Bewaldete Hänge", "Tropisches Klima", "Landwirtschaftliche Terrassen"],
      hu: ["Erdős hegyoldalak", "Trópusi éghajlat", "Mezőgazdasági teraszok"],
      ro: ["Versanți împăduriți", "Climat tropical", "Terase agricole"],
      en: ["Forested slopes", "Tropical climate", "Agricultural terraces"]
    }
  },
  {
    id: "osun-relief-relief-v2",
    type: "relief",
    parent: "NG-OS",
    coords: [4.6, 7.6],
    name: { de: "Osun-Landschaft", hu: "Osun-vidék", ro: "Peisajul Osun", en: "Osun Landscape" },
    description: { de: "Eine von Flüssen durchzogene, leicht hügelige Landschaft.", hu: "Folyók által szabdalt, enyhén dombos vidék.", ro: "Un peisaj ușor deluros, străbătut de râuri.", en: "A slightly hilly landscape crisscrossed by rivers." },
    facts: {
      de: ["Flusslandschaft", "Fruchtbar", "Waldreste"],
      hu: ["Folyóvidék", "Termékeny", "Erdőmaradványok"],
      ro: ["Peisaj fluvial", "Fertil", "Resturi de pădure"],
      en: ["River landscape", "Fertile", "Forest remnants"]
    }
  },
  {
    id: "cross-river-tal-relief-v2",
    type: "relief",
    parent: "NG-CR",
    coords: [8.5, 5.5],
    name: { de: "Cross-River-Tal", hu: "Cross-folyó völgye", ro: "Valea râului Cross", en: "Cross River Valley" },
    description: { de: "Ein tief eingeschnittenes Flusstal in der feuchten Waldzone im Südosten.", hu: "Mélyen bevágódott folyóvölgy a nedves erdőövezetben, délkeleten.", ro: "O vale fluvială adânc incizată în zona de pădure umedă din sud-est.", en: "A deeply incised river valley in the humid forest zone in the southeast." },
    facts: {
      de: ["Feuchtklima", "Dichter Wald", "Tiefe Täler"],
      hu: ["Nedves éghajlat", "Sűrű erdő", "Mély völgyek"],
      ro: ["Climat umed", "Pădure densă", "Văi adânci"],
      en: ["Humid climate", "Dense forest", "Deep valleys"]
    }
  },
  {
    id: "ondo-relief-relief-v2",
    type: "relief",
    parent: "NG-ON",
    coords: [5.1, 7.1],
    name: { de: "Ondo-Hügelland", hu: "Ondo-dombság", ro: "Dealurile Ondo", en: "Ondo Hills" },
    description: { de: "Eine Region aus sanften Hügeln, die typisch für den Südwesten ist.", hu: "Szelíd dombok régiója, amely jellemző a délnyugati részre.", ro: "O regiune de dealuri domoale, tipică pentru sud-vest.", en: "A region of rolling hills typical for the southwest." },
    facts: {
      de: ["Waldgebiet", "Fruchtbar", "Sanftes Relief"],
      hu: ["Erdővidék", "Termékeny", "Szelíd domborzat"],
      ro: ["Zonă forestieră", "Fertil", "Relief domol"],
      en: ["Forest area", "Fertile", "Gentle relief"]
    }
  },
  {
    id: "nassarawa-relief-relief-v2",
    type: "relief",
    parent: "NG-NA",
    coords: [8.2, 8.5],
    name: { de: "Nassarawa-Ebene", hu: "Nasarawa-síkság", ro: "Câmpia Nasarawa", en: "Nasarawa Plains" },
    description: { de: "Eine weite, flache bis leicht hügelige Ebene in Zentral-Nigeria.", hu: "Széles, sík vagy enyhén dombos síkság Közép-Nigériában.", ro: "O câmpie vastă, plată sau ușor deluroasă în centrul Nigeriei.", en: "A vast, flat to gently rolling plain in central Nigeria." },
    facts: {
      de: ["Savannenlandschaft", "Weitläufig", "Offenes Relief"],
      hu: ["Szavannatáj", "Kiterjedt", "Nyílt domborzat"],
      ro: ["Peisaj de savană", "Vast", "Relief deschis"],
      en: ["Savanna landscape", "Vast", "Open relief"]
    }
  },
  {
    id: "kaduna-tal-relief-v2",
    type: "relief",
    parent: "NG-KD",
    coords: [7.5, 10.5],
    name: { de: "Kaduna-Tal", hu: "Kaduna-völgy", ro: "Valea Kaduna", en: "Kaduna Valley" },
    description: { de: "Das Flusstal des Kaduna, das sich durch die nordnigerianische Savanne schlängelt.", hu: "A Kaduna folyó völgye, amely kígyózik az észak-nigériai szavannán.", ro: "Valea râului Kaduna, care șerpuiește prin savana din nordul Nigeriei.", en: "The valley of the Kaduna River, which meanders through the northern Nigerian savanna." },
    facts: {
      de: ["Savannenfluss", "Fruchtbares Umland", "Meander-Landschaft"],
      hu: ["Szavannafolyó", "Termékeny környék", "Meander-táj"],
      ro: ["Râu de savană", "Împrejurimi fertile", "Peisaj cu meandre"],
      en: ["Savanna river", "Fertile surroundings", "Meander landscape"]
    }
  },
  {
    id: "yobe-becken-relief-v2",
    type: "relief",
    parent: "NG-YO",
    coords: [11.5, 12.5],
    name: { de: "Yobe-Tiefland", hu: "Yobe-alföld", ro: "Câmpia Yobe", en: "Yobe Lowlands" },
    description: { de: "Ein tief liegendes Becken im Nordosten Nigerias nahe dem Tschadbecken.", hu: "Alacsonyan fekvő medence Nigéria északkeleti részén, a Csád-medence közelében.", ro: "O depresiune joasă în nord-estul Nigeriei lângă Bazinul Ciadului.", en: "A low-lying basin in northeastern Nigeria near the Chad Basin." },
    facts: {
      de: ["Trockenes Klima", "Sandige Ebenen", "Wüstenrandlage"],
      hu: ["Száraz éghajlat", "Homokos síkságok", "Sivatagi peremvidék"],
      ro: ["Climat arid", "Câmpii nisipoase", "Poziție periferică de deșert"],
      en: ["Arid climate", "Sandy plains", "Desert fringe location"]
    }
  },
  {
    id: "sokoto-ebene-relief-v2",
    type: "relief",
    parent: "NG-SO",
    coords: [5.2, 13.0],
    name: { de: "Sokoto-Ebene", hu: "Sokoto-síkság", ro: "Câmpia Sokoto", en: "Sokoto Plains" },
    description: { de: "Eine ausgedehnte Ebene im äußersten Nordwesten Nigerias.", hu: "Kiterjedt síkság Nigéria legészaknyugatibb részén.", ro: "O câmpie extinsă în extremitatea nord-vestică a Nigeriei.", en: "An extensive plain in the far northwest of Nigeria." },
    facts: {
      de: ["Trocken", "Halbwüste", "Sandige Böden"],
      hu: ["Száraz", "Félsivatag", "Homokos talaj"],
      ro: ["Arid", "Semideșert", "Soluri nisipoase"],
      en: ["Dry", "Semi-desert", "Sandy soils"]
    }
  },
  {
    id: "adamawa-hochland-relief-v2",
    type: "relief",
    parent: "NG-AD",
    coords: [12.0, 9.5],
    name: { de: "Adamawa-Hochland", hu: "Adamawa-felföld", ro: "Platoul Adamawa", en: "Adamawa Highlands" },
    description: { de: "Ein bedeutendes Hochland im Osten, das die Verbindung zum Kameruner Hochland bildet.", hu: "Jelentős felföld keleten, amely összeköttetést képez a Kameruni-felfölddel.", ro: "O zonă înaltă importantă în est, care formează legătura cu Platoul Camerun.", en: "A significant highland in the east that forms the link to the Cameroonian Highlands." },
    facts: {
      de: ["Hochplateau", "Bergklima", "Wildnis"],
      hu: ["Magasfennsík", "Hegyvidéki éghajlat", "Vadon"],
      ro: ["Podiș înalt", "Climat montan", "Sălbăticie"],
      en: ["High plateau", "Mountain climate", "Wilderness"]
    }
  },
  {
    id: "benue-tal-relief-v2",
    type: "relief",
    parent: "NG-BE",
    coords: [9.0, 7.8],
    name: { de: "Benue-Tal (Relief)", hu: "Benue-völgy (domborzat)", ro: "Valea râului Benue (relief)", en: "Benue Valley (relief)" },
    description: { de: "Ein bedeutendes, weitläufiges Flusstal in Zentral-Nigeria.", hu: "Jelentős, kiterjedt folyóvölgy Közép-Nigériában.", ro: "O vale fluvială semnificativă și vastă în centrul Nigeriei.", en: "A significant, vast river valley in central Nigeria." },
    facts: {
      de: ["Hauptzufluss Niger", "Breites Tal", "Überschwemmungsgebiet"],
      hu: ["A Niger fő mellékfolyója", "Széles völgy", "Ártér"],
      ro: ["Afluent principal al Nigerului", "Vale largă", "Zonă de inundație"],
      en: ["Main tributary of Niger", "Broad valley", "Floodplain"]
    }
  },
  {
    id: "gongola-tal-relief-v2",
    type: "relief",
    parent: "NG-AD",
    coords: [11.8, 9.8],
    name: { de: "Gongola-Tal", hu: "Gongola-völgy", ro: "Valea Gongola", en: "Gongola Valley" },
    description: { de: "Eine Region im Becken des Gongola-Flusses im Nordosten.", hu: "A Gongola folyó medencéjének régiója északkeleten.", ro: "O regiune în bazinul râului Gongola în nord-est.", en: "A region in the basin of the Gongola River in the northeast." },
    facts: {
      de: ["Flusslandschaft", "Halbtrocken", "Savanne"],
      hu: ["Folyóvidék", "Félszáraz", "Szavanna"],
      ro: ["Peisaj fluvial", "Semi-arid", "Savană"],
      en: ["River landscape", "Semi-arid", "Savanna"]
    }
  },
  {
    id: "kano-ebene-relief-v2",
    type: "relief",
    parent: "NG-KN",
    coords: [8.5, 12.0],
    name: { de: "Kano-Ebene", hu: "Kano-síkság", ro: "Câmpia Kano", en: "Kano Plains" },
    description: { de: "Eine ausgedehnte, flache Region im Herzen Nord-Nigerias.", hu: "Kiterjedt, lapos régió Észak-Nigéria szívében.", ro: "O regiune vastă și plată în inima nordului Nigeriei.", en: "An extensive, flat region in the heart of northern Nigeria." },
    facts: {
      de: ["Flachland", "Dichte Besiedlung", "Trockenzeit"],
      hu: ["Síkság", "Sűrű lakottság", "Száraz évszak"],
      ro: ["Câmpie", "Populație densă", "Sezon uscat"],
      en: ["Lowland", "Dense population", "Dry season"]
      }
  }
];
