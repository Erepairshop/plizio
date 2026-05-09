import type { POI } from "./poi";

export const poiExtraTajikistanLifeV2: POI[] = [
  {
    id: "zorkul-nature-reserve-life-v2",
    type: "wildlife-area",
    parent: "TJ-GB",
    coords: [73.5, 37.45],
    name: {
      de: "Zorkul-Naturreservat",
      hu: "Zorkul Természetvédelmi Terület",
      ro: "Rezervația Naturală Zorkul",
      en: "Zorkul Nature Reserve"
    },
    description: {
      de: "Ein geschütztes Gebiet im Pamir, das den Zorkul-See umfasst und ein wichtiger Lebensraum für Schneeleoparden und Argalis ist.",
      hu: "Védett terület a Pamírban, amely a Zorkul-tavat foglalja magába, és a hópárducok fontos élőhelye.",
      ro: "O zonă protejată din Pamir, care include Lacul Zorkul și este un habitat important pentru leoparzii de zăpadă.",
      en: "A protected area in the Pamir covering Lake Zorkul, serving as a critical habitat for snow leopards and argali sheep."
    },
    facts: {
      de: ["Schützt seltene Gebirgstiere.", "Liegt nahe der afghanischen Grenze."],
      hu: ["Ritka hegyi állatokat véd.", "Az afgán határ közelében fekszik."],
      ro: ["Protejează animale montane rare.", "Situat aproape de granița cu Afganistan."],
      en: ["Protects rare mountain wildlife.", "Located near the Afghan border."]
    }
  },
  {
    id: "dashtijum-nature-reserve-life-v2",
    type: "wildlife-area",
    parent: "TJ-KT",
    coords: [70.16, 38.01],
    name: {
      de: "Daschtidschum-Naturreservat",
      hu: "Dasztidzsum Természetvédelmi Terület",
      ro: "Rezervația Naturală Dashtijum",
      en: "Dashtijum Nature Reserve"
    },
    description: {
      de: "Dieses Reservat im Süden Tadschikistans schützt ausgedehnte Pistazienwälder und die seltene Markhor-Schraubenziege.",
      hu: "Ez a dél-tádzsikisztáni rezervátum kiterjedt pisztáciaerdőket és a ritka pödröttszarvú kecskét védi.",
      ro: "Această rezervație din sudul Tadjikistanului protejează păduri întinse de fistic și capra rară markhor.",
      en: "This reserve in southern Tajikistan protects vast pistachio forests and the rare markhor goat."
    },
    facts: {
      de: ["Wichtiger Lebensraum für Markhore.", "Bekannt für Wildpistazien."],
      hu: ["Fontos élőhelye a pödröttszarvú kecskének.", "Vadpisztáciáiról ismert."],
      ro: ["Habitat important pentru markhor.", "Cunoscut pentru fisticul sălbatic."],
      en: ["Important habitat for markhor.", "Known for wild pistachios."]
    }
  },
  {
    id: "romit-nature-reserve-life-v2",
    type: "wildlife-area",
    parent: "TJ-RR",
    coords: [69.3, 38.7],
    name: {
      de: "Romit-Naturreservat",
      hu: "Romit Természetvédelmi Terület",
      ro: "Rezervația Naturală Romit",
      en: "Romit Nature Reserve"
    },
    description: {
      de: "Ein bedeutendes Bergschutzgebiet unweit von Duschanbe, das in der Sowjetzeit für die Zucht von Bucharahirschen bekannt war.",
      hu: "Jelentős hegyi védett terület Dusanbe közelében, amely a szovjet időkben a buharai szarvasok tenyésztéséről volt ismert.",
      ro: "O importantă arie montană protejată lângă Dușanbe, cunoscută în epoca sovietică pentru reproducerea cerbilor de Buhara.",
      en: "A significant mountain protected area near Dushanbe, known during the Soviet era for breeding Bukhara deer."
    },
    facts: {
      de: ["1959 gegründet.", "Vielfältige Gebirgsflora."],
      hu: ["1959-ben alapították.", "Változatos hegyi flóra."],
      ro: ["Fondat în 1959.", "Floră montană diversă."],
      en: ["Established in 1959.", "Diverse mountain flora."]
    }
  },
  {
    id: "pamir-botanical-garden-life-v2",
    type: "park",
    parent: "TJ-GB",
    coords: [71.58, 37.49],
    name: {
      de: "Botanischer Garten Pamir",
      hu: "Pamír Botanikus Kert",
      ro: "Grădina Botanică Pamir",
      en: "Pamir Botanical Garden"
    },
    description: {
      de: "Einer der höchstgelegenen botanischen Gärten der Welt in Chorugh, der Tausende Pflanzenarten aus verschiedenen Klimazonen beherbergt.",
      hu: "A világ egyik legmagasabban fekvő botanikus kertje Horugban, amely több ezer növényfajnak ad otthont különböző éghajlati övezetekből.",
      ro: "Una dintre grădinile botanice situate la cea mai mare altitudine din lume, în Khorugh, găzduind mii de specii de plante.",
      en: "One of the highest botanical gardens in the world, located in Khorugh, housing thousands of plant species from various climates."
    },
    facts: {
      de: ["Zweithöchster botanischer Garten weltweit.", "Über 2300 Meter hoch gelegen."],
      hu: ["A világ második legmagasabb botanikus kertje.", "Több mint 2300 méter magasan fekszik."],
      ro: ["A doua cea mai înaltă grădină botanică din lume.", "Situată la peste 2300 de metri altitudine."],
      en: ["Second highest botanical garden globally.", "Located at over 2300 meters altitude."]
    }
  },
  {
    id: "dushanbe-botanical-garden-life-v2",
    type: "park",
    parent: "TJ-DU",
    coords: [68.78, 38.6],
    name: {
      de: "Botanischer Garten Duschanbe",
      hu: "Dusanbei Botanikus Kert",
      ro: "Grădina Botanică din Dușanbe",
      en: "Dushanbe Botanical Garden"
    },
    description: {
      de: "Eine friedliche grüne Oase in der Hauptstadt Tadschikistans, auch bekannt als Iram-Garten, mit alten Bäumen und einem großen Pfauengehege.",
      hu: "Békés zöld oázis Tádzsikisztán fővárosában, Iram-kert néven is ismert, öreg fákkal és egy nagy pávakifutóval.",
      ro: "O oază verde liniștită în capitala Tadjikistanului, cunoscută și sub numele de Grădina Iram, cu arbori bătrâni și păuni.",
      en: "A peaceful green oasis in the capital of Tajikistan, also known as Iram Garden, featuring old trees and a large peacock enclosure."
    },
    facts: {
      de: ["Heißt offiziell Iram-Garten.", "Beliebter Ort für Hochzeitsfotos."],
      hu: ["Hivatalos neve Iram-kert.", "Népszerű helyszín esküvői fotózáshoz."],
      ro: ["Numită oficial Grădina Iram.", "Loc popular pentru fotografii de nuntă."],
      en: ["Officially named Iram Garden.", "Popular spot for wedding photos."]
    }
  },
  {
    id: "vakhsh-valley-cotton-fields-life-v2",
    type: "agriculture",
    parent: "TJ-KT",
    coords: [68.8, 37.6],
    name: {
      de: "Baumwollfelder im Wachsch-Tal",
      hu: "Gyapotföldek a Vahs-völgyben",
      ro: "Câmpurile de bumbac din Valea Vakhsh",
      en: "Vakhsh Valley Cotton Fields"
    },
    description: {
      de: "Ausgedehnte landwirtschaftliche Flächen im Süden des Landes, wo das intensive Bewässerungssystem den Anbau des „weißen Goldes“ ermöglicht.",
      hu: "Kiterjedt mezőgazdasági területek az ország déli részén, ahol az intenzív öntözőrendszer lehetővé teszi a „fehér arany” termesztését.",
      ro: "Terenuri agricole întinse în sudul țării, unde sistemul intensiv de irigații permite cultivarea aurului alb.",
      en: "Vast agricultural lands in the south of the country, where the intensive irrigation system allows for the cultivation of 'white gold'."
    },
    facts: {
      de: ["Baumwolle ist ein Hauptexportgut.", "Stark abhängig von Bewässerung."],
      hu: ["A gyapot az egyik fő exportcikk.", "Erősen függ az öntözéstől."],
      ro: ["Bumbacul este un export principal.", "Depinde puternic de irigații."],
      en: ["Cotton is a major export.", "Heavily dependent on irrigation."]
    }
  },
  {
    id: "hissar-valley-vineyards-life-v2",
    type: "agriculture",
    parent: "TJ-RR",
    coords: [68.5, 38.5],
    name: {
      de: "Weinberge im Hissar-Tal",
      hu: "Szőlőültetvények a Hiszor-völgyben",
      ro: "Podgoriile din Valea Hissar",
      en: "Hissar Valley Vineyards"
    },
    description: {
      de: "Fruchtbare Böden und viel Sonnenschein im Hissar-Tal bieten ideale Bedingungen für den Anbau süßer Trauben, die frisch verzehrt oder zu Rosinen getrocknet werden.",
      hu: "A termékeny talaj és a sok napsütés a Hiszor-völgyben ideális feltételeket biztosít az édes szőlő termesztéséhez, amelyet frissen fogyasztanak vagy mazsolaként szárítanak.",
      ro: "Solurile fertile și soarele abundent din Valea Hissar oferă condiții ideale pentru cultivarea strugurilor dulci, consumați proaspeți sau uscați.",
      en: "Fertile soils and abundant sunshine in the Hissar Valley provide ideal conditions for growing sweet grapes, eaten fresh or dried into raisins."
    },
    facts: {
      de: ["Lange Tradition des Weinbaus.", "Bekannt für große, süße Traubensorten."],
      hu: ["A szőlőtermesztés hosszú múltra tekint vissza.", "Nagy, édes szőlőfajtáiról ismert."],
      ro: ["Tradiție lungă în viticultură.", "Cunoscut pentru soiuri de struguri mari și dulci."],
      en: ["Long tradition of viticulture.", "Known for large, sweet grape varieties."]
    }
  },
  {
    id: "fergana-valley-apricot-orchards-life-v2",
    type: "agriculture",
    parent: "TJ-SU",
    coords: [70.3, 40.2],
    name: {
      de: "Aprikosenhaine im Ferghanatal",
      hu: "Sárgabarackligetek a Fergana-völgyben",
      ro: "Livezile de caiși din Valea Fergana",
      en: "Fergana Valley Apricot Orchards"
    },
    description: {
      de: "Der nördliche Teil Tadschikistans ist berühmt für seine riesigen Obstgärten, insbesondere für Aprikosen, die in den trockenen Sommern in der Sonne dörren.",
      hu: "Tádzsikisztán északi része híres hatalmas gyümölcsöskertjeiről, különösen a sárgabarackról, amelyet a száraz nyarakon a napon aszalnak.",
      ro: "Partea de nord a Tadjikistanului este faimoasă pentru livezile sale uriașe, în special pentru caise, care sunt uscate la soare vara.",
      en: "The northern part of Tajikistan is famous for its massive orchards, especially apricots, which are sun-dried during the arid summers."
    },
    facts: {
      de: ["Trockenfrüchte sind ein wichtiges Handelsprodukt.", "Frühjahrsblüte taucht das Tal in Rosa."],
      hu: ["Az aszalt gyümölcsök fontos kereskedelmi termékek.", "A tavaszi virágzás rózsaszínbe borítja a völgyet."],
      ro: ["Fructele uscate sunt un produs comercial important.", "Înflorirea de primăvară colorează valea în roz."],
      en: ["Dried fruits are an important trade product.", "Spring blossoms turn the valley pink."]
    }
  },
  {
    id: "dushanbe-zoo-life-v2",
    type: "kid-friendly",
    parent: "TJ-DU",
    coords: [68.76, 38.58],
    name: {
      de: "Zoo Duschanbe",
      hu: "Dusanbe Állatkert",
      ro: "Grădina Zoologică din Dușanbe",
      en: "Dushanbe Zoo"
    },
    description: {
      de: "Der nationale zoologische Garten der Hauptstadt, der eine Vielzahl einheimischer und exotischer Tierarten beherbergt und ein beliebtes Ausflugsziel für Familien.",
      hu: "A főváros nemzeti állatkertje, amely számos őshonos és egzotikus állatfajnak ad otthont, és a családok kedvelt kirándulóhelye.",
      ro: "Grădina zoologică națională a capitalei, care găzduiește o varietate de specii de animale native și exotice, fiind o destinație populară pentru familii.",
      en: "The national zoological garden in the capital, housing a variety of native and exotic animal species and serving as a popular family destination."
    },
    facts: {
      de: ["1960 eröffnet.", "Zieht jährlich viele Besucher an."],
      hu: ["1960-ban nyitotta meg kapuit.", "Évente sok látogatót vonz."],
      ro: ["Deschisă în 1960.", "Atrage mulți vizitatori anual."],
      en: ["Opened in 1960.", "Attracts many visitors annually."]
    }
  },
  {
    id: "aquapark-dolphin-dushanbe-life-v2",
    type: "kid-friendly",
    parent: "TJ-DU",
    coords: [68.75, 38.56],
    name: {
      de: "Aquapark Delphin Duschanbe",
      hu: "Dolphin Akvapark Dusanbe",
      ro: "Aquapark Dolphin Dușanbe",
      en: "Aquapark Dolphin Dushanbe"
    },
    description: {
      de: "Der größte Wasserpark in Tadschikistan bietet an heißen Sommertagen Abkühlung mit zahlreichen Rutschen, Pools und Freizeitmöglichkeiten für Kinder.",
      hu: "Tádzsikisztán legnagyobb víziparkja a forró nyári napokon nyújt felfrissülést számos csúszdával, medencével és szabadidős tevékenységgel a gyermekek számára.",
      ro: "Cel mai mare parc acvatic din Tadjikistan oferă răcorire în zilele fierbinți de vară, cu numeroase tobogane, piscine și opțiuni de agrement pentru copii.",
      en: "The largest water park in Tajikistan offers cooling on hot summer days with numerous slides, pools, and recreational options for children."
    },
    facts: {
      de: ["Erster moderner Aquapark des Landes.", "Besonders an Wochenenden stark besucht."],
      hu: ["Az ország első modern akvaparkja.", "Különösen hétvégén látogatott."],
      ro: ["Primul aquapark modern din țară.", "Foarte aglomerat, mai ales în weekend."],
      en: ["First modern water park in the country.", "Particularly crowded on weekends."]
    }
  },
  {
    id: "youth-park-komsomol-lake-life-v2",
    type: "park",
    parent: "TJ-DU",
    coords: [68.77, 38.59],
    name: {
      de: "Jugendpark am Komsomol-See",
      hu: "Ifjúsági Park a Komszomol-tónál",
      ro: "Parcul Tineretului la Lacul Komsomol",
      en: "Youth Park at Komsomol Lake"
    },
    description: {
      de: "Ein weitläufiges Erholungsgebiet rund um einen künstlich angelegten See in Duschanbe, das Tretbootfahren, Spazierwege und grüne Picknickplätze bietet.",
      hu: "Kiterjedt rekreációs terület egy mesterséges tó körül Dusanbéban, amely vízibiciklizést, sétányokat és zöld piknikező helyeket kínál.",
      ro: "O zonă de recreere extinsă în jurul unui lac artificial din Dușanbe, oferind plimbări cu hidrobicicleta, alei pietonale și zone verzi pentru picnic.",
      en: "An expansive recreation area around an artificial lake in Dushanbe, offering paddle boating, walking paths, and green picnic spots."
    },
    facts: {
      de: ["Beliebt bei Studenten und Familien.", "Der See wird durch den Fluss Duschanbinka gespeist."],
      hu: ["A diákok és családok körében népszerű.", "A tavat a Dusanbinka folyó táplálja."],
      ro: ["Popular printre studenți și familii.", "Lacul este alimentat de râul Dușanbinka."],
      en: ["Popular among students and families.", "The lake is fed by the Dushanbinka River."]
    }
  },
  {
    id: "zarafshan-valley-potato-farms-life-v2",
    type: "agriculture",
    parent: "TJ-SU",
    coords: [68.4, 39.3],
    name: {
      de: "Kartoffelfarmen im Serafschan-Tal",
      hu: "Burgonyafarmok a Zarafson-völgyben",
      ro: "Fermele de cartofi din Valea Zarafshan",
      en: "Zarafshan Valley Potato Farms"
    },
    description: {
      de: "Die fruchtbaren Böden und das kühlere Bergklima im Tal des Flusses Serafschan sind das Zentrum des tadschikischen Kartoffelanbaus, der eine wichtige Nahrungsquelle darstellt.",
      hu: "A Zarafson-folyó völgyének termékeny talaja és hűvösebb hegyvidéki éghajlata a tádzsik burgonyatermesztés központja, amely fontos táplálékforrás.",
      ro: "Solurile fertile și clima montană mai răcoroasă din Valea râului Zarafshan reprezintă centrul cultivării cartofilor tadjici, o sursă alimentară esențială.",
      en: "The fertile soils and cooler mountain climate in the Zarafshan River valley are the center of Tajik potato farming, a crucial food source."
    },
    facts: {
      de: ["Sichert die lokale Lebensmittelversorgung.", "Anbau auf oft terrassierten Feldern."],
      hu: ["Biztosítja a helyi élelmiszerellátást.", "A termesztés gyakran teraszos földeken folyik."],
      ro: ["Asigură aprovizionarea locală cu alimente.", "Cultivarea se face adesea pe terenuri terasate."],
      en: ["Ensures local food supply.", "Farming often takes place on terraced fields."]
    }
  },
  {
    id: "yagnob-valley-pastures-life-v2",
    type: "agriculture",
    parent: "TJ-SU",
    coords: [68.9, 39.2],
    name: {
      de: "Sommerweiden im Jagnob-Tal",
      hu: "Nyári legelők a Jagnob-völgyben",
      ro: "Pășunile de vară din Valea Yagnob",
      en: "Yagnob Valley Pastures"
    },
    description: {
      de: "In den Sommermonaten bringen Hirten ihre Schaf- und Ziegenherden auf die üppigen alpinen Weiden dieses abgelegenen Tals, wo die traditionelle Transhumanz noch lebendig ist.",
      hu: "A nyári hónapokban a pásztorok juhaikat és kecskéiket e távoli völgy buja alpesi legelőire terelik, ahol a hagyományos transzhumáló pásztorkodás még mindig él.",
      ro: "În lunile de vară, păstorii își aduc turmele de oi și capre pe pășunile alpine luxuriante ale acestei văi izolate, unde transhumanța tradițională este încă vie.",
      en: "During summer months, herders bring their sheep and goat flocks to the lush alpine pastures of this remote valley, where traditional transhumance is still alive."
    },
    facts: {
      de: ["Heimat der Jagnoben, die eine antike Sprache sprechen.", "Wichtige Quelle für Milchprodukte und Wolle."],
      hu: ["Az ókori nyelvet beszélő jagnobik hazája.", "Fontos tejtermék- és gyapjúforrás."],
      ro: ["Căminul poporului Yagnobi, care vorbește o limbă antică.", "Sursă importantă de produse lactate și lână."],
      en: ["Home to the Yagnobi people who speak an ancient language.", "Important source of dairy and wool."]
    }
  },
  {
    id: "boghi-poytakht-park-dushanbe-life-v2",
    type: "kid-friendly",
    parent: "TJ-DU",
    coords: [68.79, 38.61],
    name: {
      de: "Vergnügungspark Boghi Pojtacht",
      hu: "Boghi Pojtaht Vidámpark",
      ro: "Parcul de distracții Boghi Poytakht",
      en: "Boghi Poytakht Amusement Park"
    },
    description: {
      de: "Ein moderner Vergnügungspark in Duschanbe mit Fahrgeschäften, Achterbahnen und einem Riesenrad, der abends hell beleuchtet ist und Familien anzieht.",
      hu: "Modern vidámpark Dusanbéban játékokkal, hullámvasutakkal és egy óriáskerékkel, amely esténként kivilágítva vonzza a családokat.",
      ro: "Un parc de distracții modern în Dușanbe, cu atracții, montagne russe și o roată panoramică, iluminat strălucitor seara și atrăgând familiile.",
      en: "A modern amusement park in Dushanbe featuring rides, roller coasters, and a Ferris wheel, brightly illuminated in the evening and attracting families."
    },
    facts: {
      de: ["Bietet das größte Riesenrad der Stadt.", "Beliebter Treffpunkt am Abend."],
      hu: ["A város legnagyobb óriáskerekével büszkélkedhet.", "Népszerű esti találkozóhely."],
      ro: ["Oferă cea mai mare roată panoramică din oraș.", "Loc de întâlnire popular seara."],
      en: ["Features the city's largest Ferris wheel.", "Popular evening gathering spot."]
    }
  },
  {
    id: "farkhor-wheat-fields-life-v2",
    type: "agriculture",
    parent: "TJ-KT",
    coords: [69.4, 37.5],
    name: {
      de: "Weizenfelder von Farchor",
      hu: "Farchor Búzaföldjei",
      ro: "Câmpurile de grâu din Farkhor",
      en: "Farkhor Wheat Fields"
    },
    description: {
      de: "Die endlosen goldenen Weizenfelder im Süden nahe der afghanischen Grenze sind die Kornkammer der Region Khatlon und essenziell für die Brotproduktion des Landes.",
      hu: "A déli, afgán határ közelében elterülő végtelen arany búzaföldek Khatlon régió magtárát alkotják, és elengedhetetlenek az ország kenyérellátásához.",
      ro: "Nesfârșitele câmpuri aurii de grâu din sud, aproape de granița cu Afganistan, sunt grânarul regiunii Khatlon, esențiale pentru producția de pâine a țării.",
      en: "The endless golden wheat fields in the south near the Afghan border act as the granary of the Khatlon region, essential for the country's bread production."
    },
    facts: {
      de: ["Erntezeit im heißen Sommer.", "Brot ist ein heiliges Grundnahrungsmittel in Tadschikistan."],
      hu: ["Az aratás ideje a forró nyár.", "A kenyér szent alapélelmiszer Tádzsikisztánban."],
      ro: ["Recoltarea se face în vara fierbinte.", "Pâinea este un aliment de bază sacru în Tadjikistan."],
      en: ["Harvest time is during the hot summer.", "Bread is a sacred staple food in Tajikistan."]
    }
  },
  {
    id: "khujand-city-park-life-v2",
    type: "park",
    parent: "TJ-SU",
    coords: [69.62, 40.28],
    name: {
      de: "Kamoli-Chudschandi-Park",
      hu: "Kamoli Hujandi Park",
      ro: "Parcul Kamoli Khujandi",
      en: "Kamoli Khujandi Park"
    },
    description: {
      de: "Dieser weitläufige Park am Ufer des Syrdarja in Chudschand bietet schattige Alleen, Springbrunnen und Gedenkstätten, perfekt für entspannte Familienspaziergänge.",
      hu: "Ez a kiterjedt park a Szir-darja partján Hujandban árnyas sétányokat, szökőkutakat és emlékműveket kínál, ideális a pihentető családi sétákhoz.",
      ro: "Acest parc extins de pe malul râului Sîrdaria din Khujand oferă alei umbrite, fântâni și monumente, perfect pentru plimbări relaxante în familie.",
      en: "This expansive park on the banks of the Syr Darya in Khujand features shaded alleys, fountains, and memorials, perfect for relaxing family walks."
    },
    facts: {
      de: ["Nach einem berühmten Dichter benannt.", "Bietet Bootsfahrten auf dem Fluss an."],
      hu: ["Egy híres költőről nevezték el.", "Csónakázási lehetőséget kínál a folyón."],
      ro: ["Numit după un poet faimos.", "Oferă plimbări cu barca pe râu."],
      en: ["Named after a famous poet.", "Offers boat rides on the river."]
    }
  },
  {
    id: "childrens-park-dushanbe-life-v2",
    type: "kid-friendly",
    parent: "TJ-DU",
    coords: [68.78, 38.57],
    name: {
      de: "Kinderpark Duschanbe",
      hu: "Gyermekpark Dusanbe",
      ro: "Parcul Copiilor din Dușanbe",
      en: "Children's Park Dushanbe"
    },
    description: {
      de: "Ein farbenfroher Park im Stadtzentrum, der speziell für jüngere Kinder konzipiert wurde und Spielplätze, kleine Fahrgeschäfte und Eiscreme-Stände bietet.",
      hu: "Színes park a városközpontban, amelyet kifejezetten a kisebb gyermekek számára terveztek, játszóterekkel, kisebb körhintákkal és fagylaltos bódékkal.",
      ro: "Un parc colorat în centrul orașului, special conceput pentru copiii mai mici, oferind locuri de joacă, atracții mici și standuri cu înghețată.",
      en: "A colorful park in the city center designed specifically for younger children, offering playgrounds, small rides, and ice cream stands."
    },
    facts: {
      de: ["Sicherer und gut gepflegter Bereich.", "Regelmäßige Veranstaltungen für Kinder am Wochenende."],
      hu: ["Biztonságos és gondozott terület.", "Hétvégén rendszeres gyermekprogramok."],
      ro: ["Zonă sigură și bine întreținută.", "Evenimente regulate pentru copii în weekend."],
      en: ["Safe and well-maintained area.", "Regular children's events on weekends."]
    }
  },
  {
    id: "almosi-gorge-wildlife-area-life-v2",
    type: "wildlife-area",
    parent: "TJ-RR",
    coords: [68.6, 38.7],
    name: {
      de: "Wildtiergebiet Almosi-Schlucht",
      hu: "Almoszi-szurdok Vadvilági Terület",
      ro: "Rezervația Faunistică Cheile Almosi",
      en: "Almosi Gorge Wildlife Area"
    },
    description: {
      de: "Eine malerische Schlucht nahe der Hauptstadt, die für ihre dichten Wälder, kristallklaren Bäche und eine reiche Vogelwelt, einschließlich seltener Greifvögel, bekannt ist.",
      hu: "Festői szurdok a főváros közelében, amely sűrű erdeiről, kristálytiszta patakjairól és gazdag madárvilágáról, köztük ritka ragadozó madarakról ismert.",
      ro: "Un defileu pitoresc lângă capitală, cunoscut pentru pădurile sale dense, pâraiele cristaline și o avifaună bogată, inclusiv păsări de pradă rare.",
      en: "A picturesque gorge near the capital, known for its dense forests, crystal-clear streams, and rich birdlife, including rare birds of prey."
    },
    facts: {
      de: ["Beliebt für Vogelbeobachtung.", "Rückzugsort für Bergfüchse und Murmeltiere."],
      hu: ["Népszerű a madármegfigyelők körében.", "Hegyirókák és mormoták menedékhelye."],
      ro: ["Popular pentru observarea păsărilor.", "Refugiu pentru vulpi de munte și marmote."],
      en: ["Popular for bird watching.", "Retreat for mountain foxes and marmots."]
    }
  },
  {
    id: "sari-khosor-nature-park-life-v2",
    type: "wildlife-area",
    parent: "TJ-KT",
    coords: [70.0, 38.3],
    name: {
      de: "Sari-Chosor-Naturpark",
      hu: "Szari Hoszor Natúrpark",
      ro: "Parcul Natural Sari Khosor",
      en: "Sari Khosor Nature Park"
    },
    description: {
      de: "Ein ökologisch wertvolles Gebiet in der Provinz Khatlon, das majestätische Wasserfälle, tiefe Schluchten und intakte Walnusswälder schützt, in denen Braunbären leben.",
      hu: "Ökológiailag értékes terület Khatlon tartományban, amely fenséges vízeséseket, mély szurdokokat és érintetlen diófaerdőket véd, ahol barnamedvék élnek.",
      ro: "O zonă de mare valoare ecologică din provincia Khatlon, care protejează cascade maiestuoase, chei adânci și păduri intacte de nuci unde trăiesc urși bruni.",
      en: "An ecologically valuable area in the Khatlon province that protects majestic waterfalls, deep gorges, and intact walnut forests inhabited by brown bears."
    },
    facts: {
      de: ["Wurde 2003 als Naturpark eingerichtet.", "Verfügt über einen 50 Meter hohen Wasserfall."],
      hu: ["2003-ban nyilvánították natúrparkká.", "Egy 50 méter magas vízesés található itt."],
      ro: ["Înființat ca parc natural în 2003.", "Are o cascadă de 50 de metri înălțime."],
      en: ["Established as a nature park in 2003.", "Features a 50-meter-high waterfall."]
    }
  },
  {
    id: "wakhan-mulberry-groves-life-v2",
    type: "agriculture",
    parent: "TJ-GB",
    coords: [72.5, 36.9],
    name: {
      de: "Maulbeerhaine von Wachan",
      hu: "A Vahan-folyosó Eperfás Ligetei",
      ro: "Livezile de Duzi din Wakhan",
      en: "Wakhan Mulberry Groves"
    },
    description: {
      de: "In den hochgelegenen Dörfern des Wachan-Korridors sind alte Maulbeerbäume ein wesentlicher Bestandteil der Subsistenzwirtschaft; ihre süßen Früchte werden als energiereicher Wintervorrat getrocknet.",
      hu: "A Vahan-folyosó magasan fekvő falvaiban az öreg eperfák a létfenntartó gazdálkodás elengedhetetlen részei; édes gyümölcsüket energiagazdag téli tartalékként szárítják.",
      ro: "În satele situate la mare altitudine din Coridorul Wakhan, duzii bătrâni sunt esențiali pentru agricultura de subzistență; fructele lor dulci sunt uscate ca provizii de iarnă bogate în energie.",
      en: "In the high-altitude villages of the Wakhan Corridor, ancient mulberry trees are essential for subsistence farming; their sweet fruits are dried as energy-rich winter provisions."
    },
    facts: {
      de: ["Maulbeermehl wird traditionell in Brotteig gemischt.", "Die Bäume spenden Schatten in der kargen Berglandschaft."],
      hu: ["Az eperfa lisztjét hagyományosan a kenyértésztába keverik.", "A fák árnyékot adnak a kopár hegyi tájon."],
      ro: ["Făina de dud este amestecată tradițional în aluatul de pâine.", "Copacii oferă umbră în peisajul montan arid."],
      en: ["Mulberry flour is traditionally mixed into bread dough.", "The trees provide shade in the barren mountain landscape."]
    }
  }
];
