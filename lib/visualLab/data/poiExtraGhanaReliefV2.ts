import type { POI } from "./poi";

export const poiExtraGhanaReliefV2: POI[] = [
  {
    id: "akwapim-togo-relief-v2",
    type: "mountain",
    parent: "GH-EP",
    coords: [0.55, 6.5],
    name: { de: "Akwapim-Togo-Gebirge", hu: "Akwapim-Togo-hegység", ro: "Munții Akwapim-Togo", en: "Akwapim-Togo Range" },
    description: { de: "Eine Gebirgskette im Osten Ghanas, die sich bis nach Togo erstreckt.", hu: "Hegyvonulat Ghána keleti részén, amely Togo területéig nyúlik.", ro: "Un lanț muntos în estul Ghanei, care se întinde până în Togo.", en: "A mountain range in eastern Ghana that extends into Togo." },
    facts: {
      de: ["Höchster Punkt ist der Mount Afadja.", "Wichtige Wasserscheide.", "Geologisch alt.", "Bekannt für seine sanften Hänge."],
      hu: ["A legmagasabb pontja az Afadja-hegy.", "Fontos vízválasztó.", "Geológiailag ősi.", "Lankás lejtőiről ismert."],
      ro: ["Cel mai înalt punct este Muntele Afadja.", "Cumpănă de ape importantă.", "Din punct de vedere geologic este vechi.", "Cunoscut pentru versanții săi domoli."],
      en: ["Highest point is Mount Afadja.", "Important watershed.", "Geologically ancient.", "Known for its gentle slopes."]
    }
  },
  {
    id: "mount-afadja-relief-v2",
    type: "mountain",
    parent: "GH-EP",
    coords: [0.35, 7.03],
    name: { de: "Mount Afadja", hu: "Afadja-hegy", ro: "Muntele Afadja", en: "Mount Afadja" },
    description: { de: "Der höchste Berg Ghanas in der Volta-Region.", hu: "Ghána legmagasabb hegye a Volta régióban.", ro: "Cel mai înalt munte din Ghana în regiunea Volta.", en: "The highest mountain of Ghana in the Volta region." },
    facts: {
      de: ["Höhe ca. 885 Meter.", "Liegt im Akwapim-Togo-Gebirge.", "Beliebtes Wanderziel.", "Umgeben von tropischem Wald."],
      hu: ["Magassága kb. 885 méter.", "Az Akwapim-Togo-hegységben található.", "Népszerű túracélpont.", "Trópusi erdő veszi körül."],
      ro: ["Înălțime de aproximativ 885 metri.", "Situat în lanțul Akwapim-Togo.", "Destinație populară pentru drumeții.", "Înconjurat de pădure tropicală."],
      en: ["Height approx. 885 meters.", "Located in the Akwapim-Togo Range.", "Popular hiking destination.", "Surrounded by tropical forest."]
    }
  },
  {
    id: "kwae-escarpment-relief-v2",
    type: "relief",
    parent: "GH-ER",
    coords: [-0.3, 6.25],
    name: { de: "Kwae-Steilhang", hu: "Kwae-lejtő", ro: "Versantul Kwae", en: "Kwae Escarpment" },
    description: { de: "Eine markante Geländestufe in der Eastern Region.", hu: "Kifejezett tereplépcső a Keleti régióban.", ro: "O treaptă de relief marcantă în regiunea Eastern.", en: "A prominent escarpment in the Eastern Region." },
    facts: {
      de: ["Prägt das Landschaftsbild.", "Erosionsanfälliges Gelände.", "Bietet weite Aussicht.", "Wichtiger ökologischer Korridor."],
      hu: ["Meghatározza a tájképet.", "Eroziónak kitett terület.", "Széles kilátást nyújt.", "Fontos ökológiai folyosó."],
      ro: ["Definește peisajul.", "Teren susceptibil la eroziune.", "Oferă o vedere largă.", "Coridor ecologic important."],
      en: ["Defines the landscape.", "Erosion-prone terrain.", "Offers wide views.", "Important ecological corridor."]
    }
  },
  {
    id: "kwahu-plateau-relief-v2",
    type: "relief",
    parent: "GH-ER",
    coords: [-0.65, 6.6],
    name: { de: "Kwahu-Plateau", hu: "Kwahu-fennsík", ro: "Podișul Kwahu", en: "Kwahu Plateau" },
    description: { de: "Ein Hochplateau, das einen kühleren Lebensraum bietet.", hu: "Fennsík, amely hűvösebb élőhelyet biztosít.", ro: "Un podiș care oferă un habitat mai răcoros.", en: "A high plateau offering a cooler habitat." },
    facts: {
      de: ["Dient als Erholungsgebiet.", "Kühleres Klima als das Tiefland.", "Traditionelle Siedlungsregion.", "Landwirtschaftlich genutzt."],
      hu: ["Pihenőhelyként szolgál.", "Hűvösebb éghajlat, mint az alföldeken.", "Hagyományos letelepedési régió.", "Mezőgazdasági hasznosítású."],
      ro: ["Servește ca zonă de recreere.", "Climat mai răcoros decât în zonele joase.", "Regiune de așezare tradițională.", "Utilizat pentru agricultură."],
      en: ["Serves as a recreation area.", "Cooler climate than lowlands.", "Traditional settlement region.", "Used for agriculture."]
    }
  },
  {
    id: "volta-basin-relief-v2",
    type: "relief",
    parent: "GH-NP",
    coords: [-0.5, 9.0],
    name: { de: "Volta-Becken", hu: "Volta-medence", ro: "Bazinul Volta", en: "Volta Basin" },
    description: { de: "Ein großes geologisches Becken, das den größten Teil Ghanas einnimmt.", hu: "Nagy geológiai medence, amely Ghána nagy részét elfoglalja.", ro: "Un bazin geologic mare care ocupă cea mai mare parte a Ghanei.", en: "A large geological basin covering most of Ghana." },
    facts: {
      de: ["Zentrum des ghanaischen Flusssystems.", "Sandsteinformationen dominieren.", "Teilweise bewaldet.", "Wirtschaftlich bedeutsam."],
      hu: ["A ghánai folyórendszer központja.", "Homokkő-képződmények uralják.", "Részben erdősült.", "Gazdaságilag jelentős."],
      ro: ["Centrul sistemului fluvial ghanez.", "Dominat de formațiuni de gresie.", "Parțial împădurit.", "Semnificativ din punct de vedere economic."],
      en: ["Center of the Ghanaian river system.", "Sandstone formations dominate.", "Partially forested.", "Economically significant."]
    }
  },
  {
    id: "bui-gorge-relief-v2",
    type: "relief",
    parent: "GH-BE",
    coords: [-2.25, 8.28],
    name: { de: "Bui-Schlucht", hu: "Bui-szurdok", ro: "Cheile Bui", en: "Bui Gorge" },
    description: { de: "Eine durch den Schwarzen Volta geformte Schlucht.", hu: "A Fekete-Volta által formált szurdok.", ro: "O cheie formată de râul Volta Negru.", en: "A gorge formed by the Black Volta." },
    facts: {
      de: ["Ort eines Wasserkraftwerks.", "Steile Felswände.", "Reiches Wildleben.", "Landschaftlich beeindruckend."],
      hu: ["Vízerőmű helyszíne.", "Meredek sziklafalak.", "Gazdag vadvilág.", "Tájilag lenyűgöző."],
      ro: ["Locația unei hidrocentrale.", "Pereți stâncoși abrupți.", "Faună bogată.", "Impresionant peisagistic."],
      en: ["Site of a hydroelectric power plant.", "Steep rock walls.", "Rich wildlife.", "Scenically impressive."]
    }
  },
  {
    id: "ashanti-uplands-relief-v2",
    type: "relief",
    parent: "GH-AH",
    coords: [-1.5, 6.7],
    name: { de: "Ashanti-Hochland", hu: "Ashanti-felföld", ro: "Podișul Ashanti", en: "Ashanti Uplands" },
    description: { de: "Hügellandschaft im Herzen des Landes.", hu: "Dombvidék az ország szívében.", ro: "Regiune deluroasă în inima țării.", en: "Hilly landscape in the heart of the country." },
    facts: {
      de: ["Bekannt für Goldvorkommen.", "Dichte Vegetation.", "Wichtige landwirtschaftliche Zone.", "Sanfte Erhebungen."],
      hu: ["Aranylelőhelyeiről ismert.", "Sűrű növényzet.", "Fontos mezőgazdasági zóna.", "Lankás dombok."],
      ro: ["Cunoscut pentru zăcămintele de aur.", "Vegetație densă.", "Zonă agricolă importantă.", "Relief deluros domol."],
      en: ["Known for gold deposits.", "Dense vegetation.", "Important agricultural zone.", "Gentle elevations."]
    }
  },
  {
    id: "denu-coastal-plain-relief-v2",
    type: "relief",
    parent: "GH-VR",
    coords: [1.1, 6.0],
    name: { de: "Denu-Küstenebene", hu: "Denu-alföld", ro: "Câmpia de coastă Denu", en: "Denu Coastal Plain" },
    description: { de: "Flaches Küstengebiet im Osten Ghanas.", hu: "Sík tengerparti terület Ghána keleti részén.", ro: "Zonă costieră plată în estul Ghanei.", en: "Flat coastal area in eastern Ghana." },
    facts: {
      de: ["Sandige Böden.", "Lagunenlandschaft.", "Traditionelle Fischerei.", "Starke Erosion."],
      hu: ["Homokos talajok.", "Lagúnás táj.", "Hagyományos halászat.", "Erős erózió."],
      ro: ["Soluri nisipoase.", "Peisaj de lagune.", "Pescuit tradițional.", "Eroziune puternică."],
      en: ["Sandy soils.", "Lagoon landscape.", "Traditional fishing.", "Strong erosion."]
    }
  },
  {
    id: "gambo-hills-relief-v2",
    type: "mountain",
    parent: "GH-NP",
    coords: [-0.8, 9.8],
    name: { de: "Gambo-Hügel", hu: "Gambo-dombok", ro: "Dealurile Gambo", en: "Gambo Hills" },
    description: { de: "Eine Hügelkette im Norden des Landes.", hu: "Dombvidék az ország északi részén.", ro: "Un lanț de dealuri în nordul țării.", en: "A chain of hills in the north of the country." },
    facts: {
      de: ["Trockenes Klima.", "Savannenvegetation.", "Kleine Siedlungen.", "Geringe Erhebung."],
      hu: ["Száraz éghajlat.", "Szavanna növényzet.", "Kis települések.", "Alacsony magasság."],
      ro: ["Climat uscat.", "Vegetație de savană.", "Așezări mici.", "Altitudine redusă."],
      en: ["Dry climate.", "Savanna vegetation.", "Small settlements.", "Low elevation."]
    }
  },
  {
    id: "akuapem-ridge-relief-v2",
    type: "mountain",
    parent: "GH-ER",
    coords: [-0.05, 6.15],
    name: { de: "Akuapem-Kamm", hu: "Akuapem-gerinc", ro: "Creasta Akuapem", en: "Akuapem Ridge" },
    description: { de: "Ein Gebirgszug nordöstlich von Accra.", hu: "Hegyvonulat Accrától északkeletre.", ro: "Un lanț muntos la nord-est de Accra.", en: "A mountain ridge northeast of Accra." },
    facts: {
      de: ["Nahe an der Hauptstadt.", "Kühles Klima.", "Wichtige Wasserquelle.", "Botanische Gärten."],
      hu: ["Közel a fővároshoz.", "Hűvös éghajlat.", "Fontos vízforrás.", "Botanikus kertek."],
      ro: ["Aproape de capitală.", "Climat răcoros.", "Sursă importantă de apă.", "Grădini botanice."],
      en: ["Close to the capital.", "Cool climate.", "Important water source.", "Botanical gardens."]
    }
  },
  {
    id: "tano-basin-relief-v2",
    type: "relief",
    parent: "GH-WR",
    coords: [-2.5, 5.5],
    name: { de: "Tano-Becken", hu: "Tano-medence", ro: "Bazinul Tano", en: "Tano Basin" },
    description: { de: "Ein feuchtes Becken im Südwesten Ghanas.", hu: "Nedves medence Ghána délnyugati részén.", ro: "Un bazin umed în sud-vestul Ghanei.", en: "A humid basin in southwestern Ghana." },
    facts: {
      de: ["Hohe Niederschlagsmengen.", "Dichter Regenwald.", "Wichtige Kakaoanbaugebiete.", "Reiche Flora."],
      hu: ["Nagy csapadékmennyiség.", "Sűrű esőerdő.", "Fontos kakaótermesztő vidékek.", "Gazdag flóra."],
      ro: ["Cantități mari de precipitații.", "Pădure tropicală densă.", "Zone importante de cultivare a cacao.", "Floră bogată."],
      en: ["High precipitation.", "Dense rainforest.", "Important cocoa growing areas.", "Rich flora."]
    }
  },
  {
    id: "kintampo-plateau-relief-v2",
    type: "relief",
    parent: "GH-BE",
    coords: [-1.7, 8.0],
    name: { de: "Kintampo-Plateau", hu: "Kintampo-fennsík", ro: "Podișul Kintampo", en: "Kintampo Plateau" },
    description: { de: "Eine Übergangszone zwischen Wald und Savanne.", hu: "Átmeneti zóna erdő és szavanna között.", ro: "Zonă de tranziție între pădure și savană.", en: "A transition zone between forest and savanna." },
    facts: {
      de: ["Bekannt für seine Wasserfälle.", "Geologisch stabil.", "Biodiversität.", "Landschaftliche Schönheit."],
      hu: ["Vízeséseiről ismert.", "Geológiailag stabil.", "Biodiverzitás.", "Tájképi szépség."],
      ro: ["Cunoscut pentru cascadele sale.", "Geologic stabil.", "Biodiversitate.", "Frumusețe peisagistică."],
      en: ["Known for its waterfalls.", "Geologically stable.", "Biodiversity.", "Scenic beauty."]
    }
  },
  {
    id: "white-volta-valley-relief-v2",
    type: "relief",
    parent: "GH-UE",
    coords: [-0.9, 10.5],
    name: { de: "Weißes-Volta-Tal", hu: "Fehér-Volta-völgy", ro: "Valea Volta Albă", en: "White Volta Valley" },
    description: { de: "Ein fruchtbares Tal entlang des Weißen Volta.", hu: "Termékeny völgy a Fehér-Volta mentén.", ro: "O vale fertilă de-a lungul râului Volta Albă.", en: "A fertile valley along the White Volta." },
    facts: {
      de: ["Wichtige Lebensader im Norden.", "Landwirtschaftlich intensiv genutzt.", "Überschwemmungsgebiete.", "Saisonaler Wasserfluss."],
      hu: ["Fontos élettér északon.", "Intenzíven mezőgazdasági hasznosítású.", "Árvízterületek.", "Szezonális folyás."],
      ro: ["Sursă de viață importantă în nord.", "Utilizat intensiv pentru agricultură.", "Zone inundabile.", "Debit sezonier."],
      en: ["Important lifeline in the north.", "Intensively used for agriculture.", "Floodplains.", "Seasonal water flow."]
    }
  },
  {
    id: "fanteakwa-escarpment-relief-v2",
    type: "relief",
    parent: "GH-ER",
    coords: [-0.35, 6.5],
    name: { de: "Fanteakwa-Steilhang", hu: "Fanteakwa-lejtő", ro: "Versantul Fanteakwa", en: "Fanteakwa Escarpment" },
    description: { de: "Eine natürliche Geländekante in der Eastern Region.", hu: "Természetes tereplépcső a Keleti régióban.", ro: "O treaptă de relief naturală în regiunea Eastern.", en: "A natural escarpment in the Eastern Region." },
    facts: {
      de: ["Herausforderndes Gelände.", "Wandermöglichkeiten.", "Aussichtspunkte.", "Starke Vegetation."],
      hu: ["Kihívást jelentő terep.", "Túrázási lehetőségek.", "Kilátópontok.", "Sűrű növényzet."],
      ro: ["Teren provocator.", "Oportunități de drumeții.", "Puncte de observație.", "Vegetație densă."],
      en: ["Challenging terrain.", "Hiking opportunities.", "Viewpoints.", "Strong vegetation."]
    }
  },
  {
    id: "akwapim-plains-relief-v2",
    type: "relief",
    parent: "GH-ER",
    coords: [-0.2, 5.9],
    name: { de: "Akwapim-Ebene", hu: "Akwapim-alföld", ro: "Câmpia Akwapim", en: "Akwapim Plains" },
    description: { de: "Flaches bis leicht hügeliges Land unterhalb des Kamms.", hu: "Sík, enyhén dombos terület a gerinc alatt.", ro: "Teren plat până la ușor deluros sub creastă.", en: "Flat to slightly hilly land below the ridge." },
    facts: {
      de: ["Günstiges Klima für Landwirtschaft.", "Dichte Besiedlung.", "Viele kleine Bauernhöfe.", "Lehmige Böden."],
      hu: ["Kedvező éghajlat a mezőgazdaságnak.", "Sűrű lakosság.", "Sok kis tanya.", "Agyagos talajok."],
      ro: ["Climat favorabil pentru agricultură.", "Populație densă.", "Multe ferme mici.", "Soluri argiloase."],
      en: ["Favorable climate for agriculture.", "Dense population.", "Many small farms.", "Clayey soils."]
    }
  },
  {
    id: "nsuta-hills-relief-v2",
    type: "mountain",
    parent: "GH-AH",
    coords: [-1.45, 6.8],
    name: { de: "Nsuta-Hügel", hu: "Nsuta-dombok", ro: "Dealurile Nsuta", en: "Nsuta Hills" },
    description: { de: "Eine Hügelgruppe bekannt für Manganvorkommen.", hu: "Mangánlelőhelyeiről ismert dombcsoport.", ro: "Un grup de dealuri cunoscute pentru zăcămintele de mangan.", en: "A hill group known for manganese deposits." },
    facts: {
      de: ["Bedeutender Bergbaustandort.", "Geologische Besonderheit.", "Wälder in der Umgebung.", "Hügeliges Relief."],
      hu: ["Jelentős bányászati helyszín.", "Geológiai különlegesség.", "Erdők a környéken.", "Dombos felszín."],
      ro: ["Locație minieră importantă.", "Particularitate geologică.", "Păduri în împrejurimi.", "Relief deluros."],
      en: ["Significant mining location.", "Geological feature.", "Forests in the vicinity.", "Hilly relief."]
    }
  },
  {
    id: "bongo-hills-relief-v2",
    type: "mountain",
    parent: "GH-UE",
    coords: [-0.85, 10.8],
    name: { de: "Bongo-Hügel", hu: "Bongo-dombok", ro: "Dealurile Bongo", en: "Bongo Hills" },
    description: { de: "Markante Granit-Hügel im extremen Norden.", hu: "Figyelemre méltó gránitdombok az extrém északon.", ro: "Dealuri de granit marcante în extremul nord.", en: "Prominent granite hills in the extreme north." },
    facts: {
      de: ["Einzigartige Felsformationen.", "Savannenlandschaft.", "Kulturreiches Gebiet.", "Trockenzeit-geprägt."],
      hu: ["Egyedi sziklaalakzatok.", "Szavannatáj.", "Kulturálisan gazdag terület.", "Szárazsággal jellemezhető."],
      ro: ["Formațiuni stâncoase unice.", "Peisaj de savană.", "Zonă bogată cultural.", "Caracterizat prin sezon uscat."],
      en: ["Unique rock formations.", "Savanna landscape.", "Culturally rich area.", "Characterized by dry season."]
    }
  },
  {
    id: "dagbon-plateau-relief-v2",
    type: "relief",
    parent: "GH-NP",
    coords: [-0.5, 9.5],
    name: { de: "Dagbon-Plateau", hu: "Dagbon-fennsík", ro: "Podișul Dagbon", en: "Dagbon Plateau" },
    description: { de: "Eine weite Ebene mit sanften Hügeln im Norden.", hu: "Széles alföld enyhe dombokkal északon.", ro: "O câmpie vastă cu dealuri domoale în nord.", en: "A vast plain with gentle hills in the north." },
    facts: {
      de: ["Zentrum der Dagomba-Kultur.", "Traditionelle Landwirtschaft.", "Offene Savanne.", "Hitzige Bedingungen."],
      hu: ["A Dagomba-kultúra központja.", "Hagyományos mezőgazdaság.", "Nyitott szavanna.", "Forró körülmények."],
      ro: ["Centrul culturii Dagomba.", "Agricultură tradițională.", "Savană deschisă.", "Condiții fierbinți."],
      en: ["Center of Dagomba culture.", "Traditional agriculture.", "Open savanna.", "Hot conditions."]
    }
  },
  {
    id: "akposso-hills-relief-v2",
    type: "mountain",
    parent: "GH-EP",
    coords: [0.6, 7.2],
    name: { de: "Akposso-Hügel", hu: "Akposso-dombok", ro: "Dealurile Akposso", en: "Akposso Hills" },
    description: { de: "Hügelkette an der Grenze zu Togo.", hu: "Hegyvonulat a Togo-i határnál.", ro: "Lanț de dealuri la granița cu Togo.", en: "Chain of hills at the border to Togo." },
    facts: {
      de: ["Grüne Landschaft.", "Kaffeeproduktion.", "Steile Hänge.", "Wandern möglich."],
      hu: ["Zöld táj.", "Kávétermelés.", "Meredek lejtők.", "Túrázás lehetséges."],
      ro: ["Peisaj verde.", "Producție de cafea.", "Versanți abrupți.", "Posibilități de drumeție."],
      en: ["Green landscape.", "Coffee production.", "Steep slopes.", "Hiking possible."]
    }
  },
  {
    id: "buem-escarpment-relief-v2",
    type: "relief",
    parent: "GH-OT",
    coords: [0.4, 7.8],
    name: { de: "Buem-Steilhang", hu: "Buem-lejtő", ro: "Versantul Buem", en: "Buem Escarpment" },
    description: { de: "Eine markante Geländestufe in der Oti-Region.", hu: "Természetes tereplépcső az Oti régióban.", ro: "O treaptă de relief marcată în regiunea Oti.", en: "A prominent escarpment in the Oti region." },
    facts: {
      de: ["Wichtige geologische Formation.", "Dichter Bewuchs.", "Landschaftliches Highlight.", "Herausforderndes Gelände."],
      hu: ["Fontos geológiai képződmény.", "Sűrű növényzet.", "Tájképi látványosság.", "Kihívást jelentő terep."],
      ro: ["Formațiune geologică importantă.", "Vegetație densă.", "Obiectiv peisagistic.", "Teren provocator."],
      en: ["Important geological formation.", "Dense vegetation.", "Scenic highlight.", "Challenging terrain."]
    }
  },
  {
    id: "shai-hills-relief-v2",
    type: "mountain",
    parent: "GH-AA",
    coords: [0.05, 5.9],
    name: { de: "Shai-Hügel", hu: "Shai-dombok", ro: "Dealurile Shai", en: "Shai Hills" },
    description: { de: "Ein kleiner Bergpark nahe der Hauptstadt.", hu: "Kis hegyipark a főváros közelében.", ro: "Un mic parc montan aproape de capitală.", en: "A small mountain park near the capital." },
    facts: {
      de: ["Beliebtes Ausflugsziel.", "Felsige Formationen.", "Wildlife Reserve.", "Kurze Wanderungen."],
      hu: ["Népszerű kirándulóhely.", "Sziklás formációk.", "Vadvédelmi terület.", "Rövid túrák."],
      ro: ["Destinație populară pentru excursii.", "Formațiuni stâncoase.", "Rezervație naturală.", "Drumeții scurte."],
      en: ["Popular excursion spot.", "Rocky formations.", "Wildlife reserve.", "Short hikes."]
    }
  },
  {
    id: "kweku-hills-relief-v2",
    type: "mountain",
    parent: "GH-WR",
    coords: [-2.1, 5.3],
    name: { de: "Kweku-Hügel", hu: "Kweku-dombok", ro: "Dealurile Kweku", en: "Kweku Hills" },
    description: { de: "Hügellandschaft im Westen Ghanas.", hu: "Dombvidék Ghána nyugati részén.", ro: "Regiune deluroasă în vestul Ghanei.", en: "Hilly region in western Ghana." },
    facts: {
      de: ["Regenwald geprägt.", "Geringe Erhebung.", "Kakaoplantagen.", "Feuchtes Klima."],
      hu: ["Esőerdő uralja.", "Alacsony magasság.", "Kakaóültetvények.", "Nedves éghajlat."],
      ro: ["Dominat de pădure tropicală.", "Altitudine redusă.", "Plantații de cacao.", "Climat umed."],
      en: ["Dominated by rainforest.", "Low elevation.", "Cocoa plantations.", "Humid climate."]
    }
  },
  {
    id: "oti-plain-relief-v2",
    type: "relief",
    parent: "GH-OT",
    coords: [0.2, 8.5],
    name: { de: "Oti-Ebene", hu: "Oti-alföld", ro: "Câmpia Oti", en: "Oti Plain" },
    description: { de: "Ein weites Flachland entlang des Oti-Flusses.", hu: "Széles alföld az Oti-folyó mentén.", ro: "O câmpie vastă de-a lungul râului Oti.", en: "A vast plain along the Oti River." },
    facts: {
      de: ["Fruchtbare Böden.", "Saisonal überflutet.", "Savanne.", "Landwirtschaftlich genutzt."],
      hu: ["Termékeny talajok.", "Szezonálisan elöntött.", "Szavanna.", "Mezőgazdasági hasznosítású."],
      ro: ["Soluri fertile.", "Inundat sezonier.", "Savană.", "Utilizat pentru agricultură."],
      en: ["Fertile soils.", "Seasonally flooded.", "Savanna.", "Used for agriculture."]
    }
  },
  {
    id: "nkawkaw-escarpment-relief-v2",
    type: "relief",
    parent: "GH-ER",
    coords: [-0.75, 6.55],
    name: { de: "Nkawkaw-Steilhang", hu: "Nkawkaw-lejtő", ro: "Versantul Nkawkaw", en: "Nkawkaw Escarpment" },
    description: { de: "Der Übergang vom Plateau ins Tiefland.", hu: "Az átmenet a fennsíkból az alföldre.", ro: "Tranziția de la podiș la câmpie.", en: "The transition from plateau to lowland." },
    facts: {
      de: ["Markante Steilstufe.", "Verkehrsknotenpunkt am Fuße.", "Bewaldet.", "Aussicht."],
      hu: ["Kifejezett meredek lépcső.", "Forgalmi csomópont a lábánál.", "Erdősült.", "Kilátás."],
      ro: ["Treaptă abruptă marcată.", "Nod rutier la bază.", "Împădurit.", "Priveliște."],
      en: ["Pronounced steep step.", "Traffic hub at the base.", "Forested.", "View."]
    }
  },
  {
    id: "gambia-hills-relief-v2",
    type: "mountain",
    parent: "GH-UE",
    coords: [-0.95, 10.9],
    name: { de: "Gambia-Hügel", hu: "Gambia-dombok", ro: "Dealurile Gambia", en: "Gambia Hills" },
    description: { de: "Kleine Felsformationen im Norden.", hu: "Kis sziklaképződmények északon.", ro: "Mici formațiuni stâncoase în nord.", en: "Small rock formations in the north." },
    facts: {
      de: ["Trockenes Gebiet.", "Savannenvegetation.", "Kulturelle Bedeutung.", "Felsig."],
      hu: ["Száraz terület.", "Szavanna növényzet.", "Kulturális jelentőség.", "Sziklás."],
      ro: ["Zonă uscată.", "Vegetație de savană.", "Semnificație culturală.", "Stâncos."],
      en: ["Dry area.", "Savanna vegetation.", "Cultural significance.", "Rocky."]
    }
  }
];
