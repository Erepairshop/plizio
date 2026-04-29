import type { POI } from "./poi";

export const poiExtraMaltaCities: POI[] = [
  {
    id: "city-valletta-extra",
    type: "city",
    parent: "MT-60",
    coords: [14.5146, 35.8989],
    name: { de: "Valletta", hu: "Valletta", ro: "Valletta", en: "Valletta" },
    description: {
      de: "Valletta, die Hauptstadt Maltas, ist eine Festungsstadt, die zum UNESCO-Weltkulturerbe gehört und für ihre barocke Architektur bekannt ist.",
      hu: "Valletta, Málta fővárosa, egy erődített város, amely az UNESCO Világörökség része és a barokk építészetéről ismert.",
      ro: "Valletta, capitala Maltei, este un oraș fortificat, inclus în Patrimoniul Mondial UNESCO, cunoscut pentru arhitectura sa barocă.",
      en: "Valletta, the capital city of Malta, is a fortified city and a UNESCO World Heritage site, known for its Baroque architecture."
    },
    facts: {
      de: ["Gegründet 1566 vom Johanniterorden.", "Kleinste Hauptstadt der Europäischen Union.", "Europäische Kulturhauptstadt 2018."],
      hu: ["A johannita lovagrend alapította 1566-ban.", "Az Európai Unió legkisebb fővárosa.", "Európa Kulturális Fővárosa 2018-ban."],
      ro: ["Fondat în 1566 de Ordinul Cavalerilor Sfântului Ioan.", "Cea mai mică capitală din Uniunea Europeană.", "Capitală Europeană a Culturii în 2018."],
      en: ["Founded in 1566 by the Order of St. John.", "The smallest capital city in the European Union.", "European Capital of Culture in 2018."]
    }
  },
  {
    id: "city-sliema-extra",
    type: "city",
    parent: "MT-55",
    coords: [14.5039, 35.9125],
    name: { de: "Sliema", hu: "Sliema", ro: "Sliema", en: "Sliema" },
    description: {
      de: "Sliema ist ein wichtiges Geschäfts- und Wohnzentrum an der Nordostküste Maltas, bekannt für seine Promenade und Einkaufsmöglichkeiten.",
      hu: "Sliema Málta északkeleti partján fekvő jelentős kereskedelmi és lakónegyed, amely sétányáról és bevásárlási lehetőségeiről ismert.",
      ro: "Sliema este un centru comercial și rezidențial important pe coasta de nord-est a Maltei, renumit pentru promenada și cumpărături.",
      en: "Sliema is a major commercial and residential hub on the northeast coast of Malta, famous for its promenade and shopping."
    },
    facts: {
      de: ["Einst ein ruhiges Fischerdorf.", "Der Name bedeutet 'Frieden' oder 'Komfort'.", "Bietet einen großartigen Blick auf Valletta."],
      hu: ["Egykor csendes halászfalu volt.", "A neve 'békét' vagy 'kényelmet' jelent.", "Nagyszerű kilátást nyújt Vallettára."],
      ro: ["Odată un sat pescăresc liniștit.", "Numele înseamnă 'pace' sau 'confort'.", "Oferă vederi minunate asupra Vallettei."],
      en: ["Once a quiet fishing village.", "The name means 'peace' or 'comfort'.", "Offers great views of Valletta."]
    }
  },
  {
    id: "city-st-julians-extra",
    type: "city",
    parent: "MT-48",
    coords: [14.4897, 35.9189],
    name: { de: "St. Julian's", hu: "St. Julian's", ro: "St. Julian's", en: "St. Julian's" },
    description: {
      de: "St. Julian's ist ein beliebtes Touristenziel, das für sein pulsierendes Nachtleben, insbesondere das Viertel Paceville, bekannt ist.",
      hu: "St. Julian's egy népszerű turisztikai célpont, amely élénk éjszakai életéről, különösen a Paceville negyedről ismert.",
      ro: "St. Julian's este o destinație turistică populară, renumită pentru viața de noapte vibrantă, în special în zona Paceville.",
      en: "St. Julian's is a popular tourist destination known for its vibrant nightlife, especially the Paceville district."
    },
    facts: {
      de: ["Nach dem Schutzpatron Julian dem Hospitaliter benannt.", "Heimat des höchsten Gebäudes Maltas, dem Portomaso Tower.", "Beliebt für Wassersport."],
      hu: ["Védőszentjéről, Szent Juliánuszról kapta a nevét.", "Itt található Málta legmagasabb épülete, a Portomaso Tower.", "Népszerű a vízi sportok kedvelői körében."],
      ro: ["Numit după sfântul patron Iulian Ospitalierul.", "Găzduiește cea mai înaltă clădire din Malta, Turnul Portomaso.", "Popular pentru sporturi nautice."],
      en: ["Named after its patron saint, Julian the Hospitaller.", "Home to Malta's tallest building, the Portomaso Tower.", "Popular for water sports."]
    }
  },
  {
    id: "city-gzira-extra",
    type: "city",
    parent: "MT-15",
    coords: [14.4958, 35.9081],
    name: { de: "Gżira", hu: "Gżira", ro: "Gżira", en: "Gżira" },
    description: {
      de: "Gżira, was 'Insel' auf Maltesisch bedeutet, ist eine Stadt zwischen Sliema und Msida, mit Blick auf die Insel Manoel.",
      hu: "Gżira, ami máltaiul 'szigetet' jelent, egy város Sliema és Msida között, kilátással a Manoel-szigetre.",
      ro: "Gżira, însemnând 'insulă' în malteză, este un oraș situat între Sliema și Msida, cu vedere la Insula Manoel.",
      en: "Gżira, meaning 'island' in Maltese, is a town located between Sliema and Msida, overlooking Manoel Island."
    },
    facts: {
      de: ["Die Insel Manoel ist durch eine Brücke mit Gżira verbunden.", "Wichtiger Jachthafenstandort.", "Die Uferpromenade ist bei Joggern beliebt."],
      hu: ["A Manoel-szigetet egy híd köti össze Gżirával.", "Fontos jachtkikötő hely.", "A tengerparti sétány népszerű a kocogók körében."],
      ro: ["Insula Manoel este conectată de Gżira printr-un pod.", "O locație importantă pentru porturi de agrement.", "Faleza este populară printre joggeri."],
      en: ["Manoel Island is connected to Gżira by a bridge.", "An important yacht marina location.", "The seafront is popular with joggers."]
    }
  },
  {
    id: "city-msida-extra",
    type: "city",
    parent: "MT-34",
    coords: [14.4869, 35.8983],
    name: { de: "Msida", hu: "Msida", ro: "Msida", en: "Msida" },
    description: {
      de: "Msida ist eine Hafenstadt in der Nähe von Valletta, die für ihre große Marina und die Universität von Malta bekannt ist.",
      hu: "Msida egy kikötőváros Valletta közelében, amely nagy kikötőjéről és a Máltai Egyetemről ismert.",
      ro: "Msida este un oraș-port aproape de Valletta, cunoscut pentru portul său mare de agrement și pentru Universitatea din Malta.",
      en: "Msida is a harbour town close to Valletta, known for its large marina and the University of Malta."
    },
    facts: {
      de: ["Der Name leitet sich von einem arabischen Wort für 'Wohnung eines Fischers' ab.", "Die Pfarrkirche ist dem Heiligen Josef gewidmet.", "Jährliches traditionelles Bootsrennen im September."],
      hu: ["A neve egy arab szóból származik, ami 'halász lakhelyét' jelenti.", "A plébániatemplomot Szent Józsefnek szentelték.", "Szeptemberben évente megrendezik a hagyományos csónakversenyt."],
      ro: ["Numele derivă dintr-un cuvânt arab care înseamnă 'locuința unui pescar'.", "Biserica parohială este dedicată Sfântului Iosif.", "Găzduiește o cursă tradițională de bărci în septembrie."],
      en: ["The name is derived from an Arabic word for 'a fisherman's dwelling'.", "The parish church is dedicated to St. Joseph.", "Hosts an annual traditional boat race in September."]
    }
  },
  {
    id: "city-ta-xbiex-extra",
    type: "city",
    parent: "MT-58",
    coords: [14.4939, 35.9031],
    name: { de: "Ta' Xbiex", hu: "Ta' Xbiex", ro: "Ta' Xbiex", en: "Ta' Xbiex" },
    description: {
      de: "Ta' Xbiex ist eine kleine Stadt, die für die vielen ausländischen Botschaften, Marinas und die malerische Uferpromenade bekannt ist.",
      hu: "Ta' Xbiex egy kisváros, amely számos külföldi nagykövetségről, kikötőről és festői tengerparti sétányáról ismert.",
      ro: "Ta' Xbiex este un mic oraș cunoscut pentru numeroasele ambasade străine, porturi de agrement și faleza sa pitorească.",
      en: "Ta' Xbiex is a small town known for hosting many foreign embassies, its marinas, and its scenic seafront."
    },
    facts: {
      de: ["Der Name bedeutet 'Netze' und spiegelt seine Fischervergangenheit wider.", "Beherbergt die Botschaften von Ägypten, Griechenland, Irland, Spanien und anderen.", "Bietet einen Panoramablick auf die Bastionen von Valletta."],
      hu: ["A neve 'hálókat' jelent, ami a halászati múltjára utal.", "Itt található Egyiptom, Görögország, Írország, Spanyolország és más országok nagykövetsége.", "Panorámás kilátást nyújt Valletta bástyáira."],
      ro: ["Numele înseamnă 'plase', reflectând trecutul său pescăresc.", "Găzduiește ambasadele Egiptului, Greciei, Irlandei, Spaniei și altele.", "Oferă vederi panoramice ale bastioanelor din Valletta."],
      en: ["The name means 'nets', reflecting its fishing past.", "Hosts the embassies of Egypt, Greece, Ireland, Spain, and others.", "Offers panoramic views of the Valletta bastions."]
    }
  },
  {
    id: "city-swieqi-extra",
    type: "city",
    parent: "MT-57",
    coords: [14.4786, 35.9214],
    name: { de: "Swieqi", hu: "Swieqi", ro: "Swieqi", en: "Swieqi" },
    description: {
      de: "Swieqi ist eine relativ neue Stadt und ein ruhiges Wohngebiet in der Nähe der geschäftigen Zentren von St. Julian's und Sliema.",
      hu: "Swieqi egy viszonylag új város és egy csendes lakónegyed St. Julian's és Sliema nyüzsgő központjainak közelében.",
      ro: "Swieqi este un oraș relativ nou și o zonă rezidențială liniștită, aproape de centrele aglomerate St. Julian's și Sliema.",
      en: "Swieqi is a relatively new town and a quiet residential area, located close to the busy hubs of St. Julian's and Sliema."
    },
    facts: {
      de: ["Der Name bedeutet 'Wasserkanäle'.", "Besteht aus den Gebieten Swieqi, Tal-Ibraġ und Madliena.", "Beliebt bei Einheimischen und Auswanderern gleichermaßen."],
      hu: ["A neve 'vízcsatornákat' jelent.", "Swieqi, Tal-Ibraġ és Madliena területekből áll.", "Népszerű a helyiek és a külföldiek körében egyaránt."],
      ro: ["Numele înseamnă 'canale de apă'.", "Compus din zonele Swieqi, Tal-Ibraġ și Madliena.", "Popular atât printre localnici, cât și printre expați."],
      en: ["The name means 'water channels'.", "Comprises the areas of Swieqi, Tal-Ibraġ, and Madliena.", "Popular with locals and expatriates alike."]
    }
  },
  {
    id: "city-pembroke-extra",
    type: "city",
    parent: "MT-41",
    coords: [14.4794, 35.9286],
    name: { de: "Pembroke", hu: "Pembroke", ro: "Pembroke", en: "Pembroke" },
    description: {
      de: "Pembroke ist die neueste Stadt Maltas und bekannt für ihre Vergangenheit als britisches Militärgelände und ihre felsige Küste.",
      hu: "Pembroke Málta legújabb városa, amely egykori brit katonai bázisáról és sziklás tengerpartjáról ismert.",
      ro: "Pembroke este cel mai nou oraș din Malta, cunoscut pentru trecutul său ca bază militară britanică și pentru coasta sa stâncoasă.",
      en: "Pembroke is Malta's newest town, known for its past as a British military base and its rocky coastline."
    },
    facts: {
      de: ["Nach Robert Henry Herbert, dem 12. Earl of Pembroke benannt.", "Heimat mehrerer internationaler Schulen.", "Die Küste ist ein Natura 2000-Schutzgebiet."],
      hu: ["Robert Henry Herbert, Pembroke 12. grófja után nevezték el.", "Számos nemzetközi iskola otthona.", "A tengerpartja Natura 2000-es védett terület."],
      ro: ["Numit după Robert Henry Herbert, al 12-lea Conte de Pembroke.", "Găzduiește mai multe școli internaționale.", "Coasta este un sit protejat Natura 2000."],
      en: ["Named after Robert Henry Herbert, the 12th Earl of Pembroke.", "Home to several international schools.", "The coastline is a protected Natura 2000 site."]
    }
  },
  {
    id: "city-san-gwann-extra",
    type: "city",
    parent: "MT-49",
    coords: [14.4842, 35.9094],
    name: { de: "San Ġwann", hu: "San Ġwann", ro: "San Ġwann", en: "San Ġwann" },
    description: {
      de: "San Ġwann ist eine zentral gelegene Stadt mit einer Mischung aus Wohn-, Gewerbe- und Industriegebieten.",
      hu: "San Ġwann egy központi fekvésű város, ahol lakó-, kereskedelmi és ipari területek egyaránt megtalálhatók.",
      ro: "San Ġwann este un oraș situat central, cu un amestec de zone rezidențiale, comerciale și industriale.",
      en: "San Ġwann is a centrally located town with a mix of residential, commercial, and industrial areas."
    },
    facts: {
      de: ["Heimat der mysteriösen Karrenspuren.", "Die Pfarrkirche ist Unserer Lieben Frau von Lourdes gewidmet.", "In der Nähe der Universität von Malta gelegen."],
      hu: ["A rejtélyes keréknyomok otthona.", "A plébániatemplomot a Lourdes-i Szűzanyának szentelték.", "A Máltai Egyetem közelében található."],
      ro: ["Găzduiește misterioasele urme de căruță.", "Biserica parohială este dedicată Maicii Domnului de la Lourdes.", "Situat aproape de Universitatea din Malta."],
      en: ["Home to the mysterious cart ruts.", "The parish church is dedicated to Our Lady of Lourdes.", "Located near the University of Malta."]
    }
  },
  {
    id: "city-pieta-extra",
    type: "city",
    parent: "MT-42",
    coords: [14.4925, 35.8911],
    name: { de: "Pietà", hu: "Pietà", ro: "Pietà", en: "Pietà" },
    description: {
      de: "Pietà ist eine kleine Stadt am Rande von Valletta, die für ihr ehemaliges königliches Marinekrankenhaus und ihre Marina bekannt ist.",
      hu: "Pietà egy kisváros Valletta határában, amely egykori királyi haditengerészeti kórházáról és kikötőjéről ismert.",
      ro: "Pietà este un mic oraș la periferia Vallettei, cunoscut pentru fostul spital al Marinei Regale și pentru portul său de agrement.",
      en: "Pietà is a small town on the outskirts of Valletta, known for its former Royal Navy hospital and its marina."
    },
    facts: {
      de: ["Der Name kommt von der italienischen Wort für 'Barmherzigkeit'.", "Heimat des Hauptsitzes der Nationalistischen Partei.", "Die St. Luke's Hospital war Maltas ehemaliges Allgemeinkrankenhaus."],
      hu: ["A neve az olasz 'kegyelem' szóból származik.", "Itt található a Nacionalista Párt székhelye.", "A Szent Lukács Kórház volt Málta egykori általános kórháza."],
      ro: ["Numele provine din cuvântul italian pentru 'milă'.", "Găzduiește sediul Partidului Naționalist.", "Spitalul St. Luke a fost fostul spital general al Maltei."],
      en: ["The name comes from the Italian word for 'Mercy'.", "Home to the headquarters of the Nationalist Party.", "St. Luke's Hospital was Malta's former general hospital."]
    }
  },
  {
    id: "city-hamrun-extra",
    type: "city",
    parent: "MT-18",
    coords: [14.4847, 35.8881],
    name: { de: "Ħamrun", hu: "Ħamrun", ro: "Ħamrun", en: "Ħamrun" },
    description: {
      de: "Ħamrun ist eine der bevölkerungsreichsten Städte Maltas, bekannt für ihre Einkaufsmöglichkeiten und das Fest des Heiligen Gaetan.",
      hu: "Ħamrun Málta egyik legnépesebb városa, amely bevásárlási lehetőségeiről és Szent Gaetano ünnepéről ismert.",
      ro: "Ħamrun este unul dintre cele mai dens populate orașe din Malta, cunoscut pentru străzile sale comerciale și pentru sărbătoarea Sfântului Gaetan.",
      en: "Ħamrun is one of Malta's most populous towns, known for its shopping and the feast of St. Gaetan."
    },
    facts: {
      de: ["Jährliches Schokoladenfest.", "Zwei rivalisierende Bandclubs, St. Joseph und St. Gaetan.", "Der alte Bahnhof ist ein markantes Wahrzeichen."],
      hu: ["Évente megrendezett csokoládéfesztivál.", "Két rivális fúvószenekar, a St. Joseph és a St. Gaetan.", "A régi vasútállomás jellegzetes épület."],
      ro: ["Găzduiește un festival anual al ciocolatei.", "Două cluburi de fanfară rivale, Sf. Iosif și Sf. Gaetan.", "Vechea gară este un punct de reper distinctiv."],
      en: ["Hosts an annual chocolate festival.", "Two rival band clubs, St. Joseph and St. Gaetan.", "The old train station is a prominent landmark."]
    }
  },
  {
    id: "city-marsa-extra",
    type: "city",
    parent: "MT-28",
    coords: [14.4922, 35.8775],
    name: { de: "Marsa", hu: "Marsa", ro: "Marsa", en: "Marsa" },
    description: {
      de: "Marsa liegt am inneren Ende des Grand Harbour und ist ein wichtiges Industriezentrum mit einem Kraftwerk und einer Pferderennbahn.",
      hu: "Marsa a Nagy Kikötő belső végén található, és fontos ipari központ, ahol egy erőmű és egy lóversenypálya is van.",
      ro: "Situat în capătul interior al Marelui Port, Marsa este un important centru industrial, cu o centrală electrică și un hipodrom.",
      en: "Situated at the inner end of the Grand Harbour, Marsa is a key industrial hub, featuring a power station and a horse racing track."
    },
    facts: {
      de: ["Der Name bedeutet 'Hafen' oder 'Ankerplatz'.", "Heimat des Royal Malta Golf Club.", "Das Marsa Shipbuilding war einst eine wichtige Werft."],
      hu: ["A neve 'kikötőt' vagy 'horgonyzóhelyet' jelent.", "Itt található a Royal Malta Golf Club.", "A Marsa Hajógyár egykor fontos hajóépítő üzem volt."],
      ro: ["Numele înseamnă 'port' sau 'ancoraj'.", "Găzduiește Clubul Regal de Golf din Malta.", "Șantierul naval Marsa a fost odată un șantier naval important."],
      en: ["The name means 'harbour' or 'anchorage'.", "Home to the Royal Malta Golf Club.", "Marsa Shipbuilding was once a major shipyard."]
    }
  },
  {
    id: "city-floriana-extra",
    type: "city",
    parent: "MT-11",
    coords: [14.5058, 35.8925],
    name: { de: "Floriana", hu: "Floriana", ro: "Floriana", en: "Floriana" },
    description: {
      de: "Floriana ist eine befestigte Stadt und ein Vorort von Valletta, bekannt für ihre großen Plätze, Gärten und historischen Magazine.",
      hu: "Floriana egy erődített város és Valletta elővárosa, amely nagy tereiről, kertjeiről és történelmi raktárairól ismert.",
      ro: "Floriana este un oraș fortificat și o suburbie a Vallettei, cunoscut pentru piețele sale mari, grădini și magaziile istorice.",
      en: "Floriana is a fortified town and suburb of Valletta, known for its large squares, gardens, and historical granaries."
    },
    facts: {
      de: ["Nach dem italienischen Militäringenieur Pietro Paolo Florani benannt.", "Beherbergt viele Regierungsgebäude.", "Der 'Fosos' (Graben) ist ein beliebter Veranstaltungsort für Konzerte."],
      hu: ["Pietro Paolo Florani olasz hadmérnökről nevezték el.", "Számos kormányzati épületnek ad otthont.", "A 'Fosos' (árok) népszerű koncerthelyszín."],
      ro: ["Numit după inginerul militar italian Pietro Paolo Florani.", "Găzduiește multe clădiri guvernamentale.", "„Fosos” (șanțul) este un loc popular pentru concerte."],
      en: ["Named after the Italian military engineer Pietro Paolo Florani.", "Hosts many government buildings.", "The 'Fosos' (ditch) is a popular concert venue."]
    }
  },
  {
    id: "city-kalkara-extra",
    type: "city",
    parent: "MT-21",
    coords: [14.5239, 35.8906],
    name: { de: "Kalkara", hu: "Kalkara", ro: "Kalkara", en: "Kalkara" },
    description: {
      de: "Kalkara ist ein malerisches Dorf am Grand Harbour, Heimat des Esplora Science Centre und des Fort Ricasoli.",
      hu: "Kalkara egy festői falu a Nagy Kikötőnél, ahol az Esplora Tudományos Központ és a Ricasoli erőd található.",
      ro: "Kalkara este un sat pitoresc de-a lungul Marelui Port, care găzduiește Centrul de Științe Esplora și Fortul Ricasoli.",
      en: "Kalkara is a picturesque village along the Grand Harbour, home to the Esplora Science Centre and Fort Ricasoli."
    },
    facts: {
      de: ["Der Name bedeutet 'Kalkofen'.", "Der Kalkara Creek bietet einen sicheren Ankerplatz für Boote.", "Der Bighi Friedhof ist ein Militärfriedhof."],
      hu: ["A neve 'mészkemencét' jelent.", "A Kalkara-patak biztonságos horgonyzóhelyet biztosít a csónakoknak.", "A Bighi temető egy katonai temető."],
      ro: ["Numele înseamnă 'cuptor de var'.", "Pârâul Kalkara oferă un ancoraj sigur pentru bărci.", "Cimitirul Bighi este un cimitir militar."],
      en: ["The name means 'lime kiln'.", "Kalkara Creek provides a safe anchorage for boats.", "Bighi Cemetery is a military cemetery."]
    }
  },
  {
    id: "city-vittoriosa-birgu-extra",
    type: "city",
    parent: "MT-03",
    coords: [14.5222, 35.8889],
    name: { de: "Vittoriosa (Birgu)", hu: "Vittoriosa (Birgu)", ro: "Vittoriosa (Birgu)", en: "Vittoriosa (Birgu)" },
    description: {
      de: "Birgu, auch Vittoriosa genannt, ist eine der drei Städte, bekannt für ihre entscheidende Rolle während der Großen Belagerung von 1565.",
      hu: "Birgu, más néven Vittoriosa, egyike a Három Városnak, és az 1565-ös Nagy Ostrom alatti döntő szerepéről ismert.",
      ro: "Birgu, numit și Vittoriosa, este unul dintre Cele Trei Orașe, renumit pentru rolul său vital în timpul Marelui Asediu din 1565.",
      en: "Birgu, also called Vittoriosa, is one of the Three Cities, renowned for its vital role during the Great Siege of 1565."
    },
    facts: {
      de: ["Vor Valletta die Hauptstadt Maltas.", "Heimat des Inquisitorenpalastes.", "Erhielt den Titel 'Città Vittoriosa' (Siegreiche Stadt)."],
      hu: ["Valletta előtt Málta fővárosa volt.", "Itt található az Inkvizítor Palotája.", "Megkapta a 'Città Vittoriosa' (Győzedelmes Város) címet."],
      ro: ["A fost capitala Maltei înainte de Valletta.", "Găzduiește Palatul Inchizitorului.", "A primit titlul de 'Città Vittoriosa' (Orașul Victorios)."],
      en: ["Was the capital of Malta before Valletta.", "Home to the Inquisitor's Palace.", "Awarded the title 'Città Vittoriosa' (Victorious City)."]
    }
  },
  {
    id: "city-senglea-isla-extra",
    type: "city",
    parent: "MT-20",
    coords: [14.5169, 35.8872],
    name: { de: "Senglea (L-Isla)", hu: "Senglea (L-Isla)", ro: "Senglea (L-Isla)", en: "Senglea (L-Isla)" },
    description: {
      de: "Senglea, auch als L-Isla bekannt, ist eine befestigte Stadt und eine der drei Städte, die einen atemberaubenden Blick auf den Grand Harbour bietet.",
      hu: "Senglea, más néven L-Isla, egy erődített város és egyike a Három Városnak, ahonnan lenyűgöző kilátás nyílik a Nagy Kikötőre.",
      ro: "Senglea, cunoscută și sub numele de L-Isla, este un oraș fortificat și unul dintre Cele Trei Orașe, oferind vederi uimitoare ale Marelui Port.",
      en: "Senglea, also known as L-Isla, is a fortified city and one of the Three Cities, offering stunning views of the Grand Harbour."
    },
    facts: {
      de: ["Nach Großmeister Claude de la Sengle benannt.", "Erhielt den Titel 'Città Invicta' (Unbesiegte Stadt).", "Die Gardjola Gärten haben einen berühmten Aussichtspunkt."],
      hu: ["Claude de la Sengle nagymesterről nevezték el.", "Megkapta a 'Città Invicta' (Legyőzhetetlen Város) címet.", "A Gardjola-kertekben egy híres kilátó található."],
      ro: ["Numit după Marele Maestru Claude de la Sengle.", "A primit titlul de 'Città Invicta' (Orașul Necucerit).", "Grădinile Gardjola au un faimos post de observație."],
      en: ["Named after Grand Master Claude de la Sengle.", "Awarded the title 'Città Invicta' (Unconquered City).", "The Gardjola Gardens have a famous lookout post."]
    }
  },
  {
    id: "city-cospicua-bormla-extra",
    type: "city",
    parent: "MT-07",
    coords: [14.5158, 35.8825],
    name: { de: "Cospicua (Bormla)", hu: "Cospicua (Bormla)", ro: "Cospicua (Bormla)", en: "Cospicua (Bormla)" },
    description: {
      de: "Cospicua, oder Bormla, ist die größte der drei Städte und bekannt für ihre beeindruckenden Docks und Befestigungsanlagen.",
      hu: "Cospicua, vagy Bormla, a legnagyobb a Három Város közül, és lenyűgöző dokkjairól és erődítményeiről ismert.",
      ro: "Cospicua, sau Bormla, este cel mai mare dintre Cele Trei Orașe, cunoscut pentru docurile și fortificațiile sale impresionante.",
      en: "Cospicua, or Bormla, is the largest of the Three Cities, known for its impressive docks and fortifications."
    },
    facts: {
      de: ["Heimat der historischen Santa Margherita und Cottonera Lines.", "Wurde während des Zweiten Weltkriegs schwer bombardiert.", "Das Bir Mula Heritage ist ein Museum in einem historischen Haus."],
      hu: ["Itt található a történelmi Santa Margherita és Cottonera vonal.", "A második világháború alatt súlyos bombázásokat szenvedett.", "A Bir Mula Heritage egy múzeum egy történelmi házban."],
      ro: ["Găzduiește liniile istorice Santa Margherita și Cottonera.", "A fost puternic bombardat în timpul celui de-al Doilea Război Mondial.", "Bir Mula Heritage este un muzeu într-o casă istorică."],
      en: ["Home to the historic Santa Margherita and Cottonera Lines.", "Was heavily bombed during World War II.", "Bir Mula Heritage is a museum in a historic house."]
    }
  },
  {
    id: "city-fgura-extra",
    type: "city",
    parent: "MT-10",
    coords: [14.5125, 35.8731],
    name: { de: "Fgura", hu: "Fgura", ro: "Fgura", en: "Fgura" },
    description: {
      de: "Fgura ist eine relativ moderne Stadt, die sich nach dem Zweiten Weltkrieg schnell zu einem der wichtigsten Wohn- und Gewerbegebiete entwickelt hat.",
      hu: "Fgura egy viszonylag modern város, amely a második világháború után gyorsan fejlődött az egyik fő lakó- és kereskedelmi területté.",
      ro: "Fgura este un oraș relativ modern care a crescut rapid după Al Doilea Război Mondial pentru a deveni una dintre principalele zone rezidențiale și comerciale.",
      en: "Fgura is a relatively modern town that grew rapidly after World War II to become one of the main residential and commercial areas."
    },
    facts: {
      de: ["Bekannt für seine moderne Pfarrkirche.", "Der Name könnte von 'Figur' abgeleitet sein, möglicherweise in Bezug auf eine Statue.", "Eine der Städte mit der höchsten Bevölkerungsdichte in Malta."],
      hu: ["Modern plébániatemplomáról ismert.", "A neve a 'figura' szóból származhat, valószínűleg egy szoborra utalva.", "Málta egyik legsűrűbben lakott városa."],
      ro: ["Cunoscut pentru biserica sa parohială modernă.", "Numele ar putea deriva din 'figură', posibil referindu-se la o statuie.", "Unul dintre orașele cu cea mai mare densitate a populației din Malta."],
      en: ["Known for its modern parish church.", "The name might derive from 'figure', possibly referring to a statue.", "One of the most densely populated towns in Malta."]
    }
  },
  {
    id: "city-paola-extra",
    type: "city",
    parent: "MT-40",
    coords: [14.5075, 35.8753],
    name: { de: "Paola", hu: "Paola", ro: "Paola", en: "Paola" },
    description: {
      de: "Paola ist ein wichtiges Handelszentrum im Süden Maltas, berühmt für das prähistorische Hypogäum von Ħal Saflieni.",
      hu: "Paola egy fontos kereskedelmi központ Málta déli részén, amely a Ħal Saflieni hipogeumról, egy őskori föld alatti szentélyről híres.",
      ro: "Paola este un centru comercial important în sudul Maltei, renumit pentru Hipogeul din Ħal Saflieni, un sanctuar subteran preistoric.",
      en: "Paola is a major commercial hub in the south of Malta, famous for the prehistoric Ħal Saflieni Hypogeum."
    },
    facts: {
      de: ["Nach Großmeister Antoine de Paule benannt.", "Das Hypogäum ist ein UNESCO-Weltkulturerbe.", "Die Pfarrkirche ist Christus dem König gewidmet."],
      hu: ["Antoine de Paule nagymesterről nevezték el.", "A hipogeum az UNESCO Világörökség része.", "A plébániatemplomot Krisztus Királynak szentelték."],
      ro: ["Numit după Marele Maestru Antoine de Paule.", "Hipogeul este un sit al Patrimoniului Mondial UNESCO.", "Biserica parohială este dedicată lui Hristos Regele."],
      en: ["Named after Grand Master Antoine de Paule.", "The Hypogeum is a UNESCO World Heritage site.", "The parish church is dedicated to Christ the King."]
    }
  },
  {
    id: "city-tarxien-extra",
    type: "city",
    parent: "MT-59",
    coords: [14.5133, 35.8672],
    name: { de: "Tarxien", hu: "Tarxien", ro: "Tarxien", en: "Tarxien" },
    description: {
      de: "Tarxien ist bekannt für seine megalithischen Tempel, einen weiteren wichtigen prähistorischen Komplex, der zum UNESCO-Weltkulturerbe gehört.",
      hu: "Tarxien a megalitikus templomairól ismert, amely egy másik fontos őskori komplexum és az UNESCO Világörökség része.",
      ro: "Tarxien este renumit pentru templele sale megalitice, un alt complex preistoric important inclus în Patrimoniul Mondial UNESCO.",
      en: "Tarxien is famous for its megalithic temples, another key prehistoric complex and a UNESCO World Heritage site."
    },
    facts: {
      de: ["Die Tempel stammen aus der Zeit um 3150 v. Chr.", "Der Komplex besteht aus drei separaten Tempelstrukturen.", "Viele Artefakte aus den Tempeln sind im Archäologischen Museum in Valletta ausgestellt."],
      hu: ["A templomok Kr. e. 3150 körül épültek.", "A komplexum három különálló templomszerkezetből áll.", "A templomokból származó számos lelet a vallettai Régészeti Múzeumban van kiállítva."],
      ro: ["Templele datează din aproximativ 3150 î.Hr.", "Complexul este format din trei structuri de temple separate.", "Multe artefacte din temple sunt expuse la Muzeul de Arheologie din Valletta."],
      en: ["The temples date back to approximately 3150 BC.", "The complex consists of three separate temple structures.", "Many artifacts from the temples are displayed at the Museum of Archaeology in Valletta."]
    }
  },
  {
    id: "city-luqa-extra",
    type: "city",
    parent: "MT-25",
    coords: [14.4936, 35.8589],
    name: { de: "Luqa", hu: "Luqa", ro: "Luqa", en: "Luqa" },
    description: {
      de: "Luqa ist vor allem für den internationalen Flughafen Malta bekannt, das Haupttor des Landes zur Welt.",
      hu: "Luqa leginkább a Máltai Nemzetközi Repülőtérről ismert, amely az ország fő kapuja a világ felé.",
      ro: "Luqa este cel mai bine cunoscut pentru găzduirea Aeroportului Internațional Malta, principala poartă de acces a țării către lume.",
      en: "Luqa is best known for hosting the Malta International Airport, the country's main gateway to the world."
    },
    facts: {
      de: ["Der Name bedeutet 'Pappel' auf Aramäisch.", "Die Pfarrkirche ist dem Heiligen Andreas gewidmet.", "Ein Denkmal ehrt die sieben Opfer eines Bombenangriffs aus dem Zweiten Weltkrieg."],
      hu: ["A neve arámiul 'nyárfát' jelent.", "A plébániatemplomot Szent Andrásnak szentelték.", "Egy emlékmű állít emléket a második világháborús bombázás hét áldozatának."],
      ro: ["Numele înseamnă 'plop' în aramaică.", "Biserica parohială este dedicată Sfântului Andrei.", "Un monument comemorează cele șapte victime ale unui raid aerian din Al Doilea Război Mondial."],
      en: ["The name means 'poplar' in Aramaic.", "The parish church is dedicated to St. Andrew.", "A monument commemorates the seven victims of a WWII bombing raid."]
    }
  },
  {
    id: "city-gudja-extra",
    type: "city",
    parent: "MT-14",
    coords: [14.5061, 35.8492],
    name: { de: "Gudja", hu: "Gudja", ro: "Gudja", en: "Gudja" },
    description: {
      de: "Gudja ist ein ruhiges Dorf in der Nähe des Flughafens, bekannt für seine drei Kirchen und das einzigartige Palazzo Bettina.",
      hu: "Gudja egy csendes falu a repülőtér közelében, amely három templomáról és az egyedülálló Palazzo Bettináról ismert.",
      ro: "Gudja este un sat liniștit, aproape de aeroport, cunoscut pentru cele trei biserici ale sale și pentru unicul Palat Bettina.",
      en: "Gudja is a quiet village close to the airport, known for its three churches and the unique Palazzo Bettina."
    },
    facts: {
      de: ["Eine der ältesten Pfarreien Maltas.", "Die Pfarrkirche Mariä Himmelfahrt ist die wichtigste.", "Palazzo Bettina soll Napoleon beherbergt haben."],
      hu: ["Málta egyik legrégebbi plébániája.", "A Nagyboldogasszony-plébániatemplom a legfontosabb.", "A Palazzo Bettinában állítólag Napóleon is megszállt."],
      ro: ["Una dintre cele mai vechi parohii din Malta.", "Biserica parohială a Adormirii Maicii Domnului este cea principală.", "Se spune că Palatul Bettina l-a găzduit pe Napoleon."],
      en: ["One of the oldest parishes in Malta.", "The Parish Church of the Assumption of the Virgin Mary is the main one.", "Palazzo Bettina is reputed to have hosted Napoleon."]
    }
  },
  {
    id: "city-ghaxaq-extra",
    type: "city",
    parent: "MT-17",
    coords: [14.5153, 35.8456],
    name: { de: "Għaxaq", hu: "Għaxaq", ro: "Għaxaq", en: "Għaxaq" },
    description: {
      de: "Għaxaq ist ein kleines, traditionelles Dorf im Süden Maltas, bekannt für sein lebhaftes Dorffest.",
      hu: "Għaxaq egy kis, hagyományos falu Málta déli részén, amely élénk falusi ünnepéről ismert.",
      ro: "Għaxaq este un mic sat tradițional din sudul Maltei, cunoscut pentru festa sa de sat plină de viață.",
      en: "Għaxaq is a small, traditional village in the south of Malta, known for its lively village feast."
    },
    facts: {
      de: ["Der Name bedeutet 'Freude' oder 'Vergnügen'.", "Die Festa di Santa Marija ist eine der größten in Malta.", "Behält viel von seinem ländlichen Charakter."],
      hu: ["A neve 'örömöt' vagy 'élvezetet' jelent.", "A Santa Marija-i ünnep az egyik legnagyobb Máltán.", "Megőrizte vidéki jellegének nagy részét."],
      ro: ["Numele înseamnă 'bucurie' sau 'plăcere'.", "Festa di Santa Marija este una dintre cele mai mari din Malta.", "Își păstrează în mare parte caracterul rural."],
      en: ["The name means 'delight' or 'pleasure'.", "The feast of Santa Marija is one of the biggest in Malta.", "Retains much of its rural character."]
    }
  },
  {
    id: "city-santa-lucija-extra",
    type: "city",
    parent: "MT-53",
    coords: [14.5072, 35.8653],
    name: { de: "Santa Luċija", hu: "Santa Luċija", ro: "Santa Luċija", en: "Santa Luċija" },
    description: {
      de: "Santa Luċija ist eine der modernsten Städte Maltas, die in den 1960er Jahren entworfen wurde und für ihren chinesischen Garten der Stille bekannt ist.",
      hu: "Santa Luċija Málta egyik legmodernebb városa, amelyet az 1960-as években terveztek, és a kínai Csend Kertjéről ismert.",
      ro: "Santa Luċija este unul dintre cele mai moderne orașe din Malta, proiectat în anii 1960 și cunoscut pentru Grădina Chineză a Seninătății.",
      en: "Santa Luċija is one of the more modern towns in Malta, designed in the 1960s, and known for its Chinese Garden of Serenity."
    },
    facts: {
      de: ["Benannt nach einer Kapelle aus dem 16. Jahrhundert.", "Der Garten war ein Geschenk der chinesischen Regierung.", "Eine der grünsten Ortschaften in Malta."],
      hu: ["Egy 16. századi kápolnáról nevezték el.", "A kert a kínai kormány ajándéka volt.", "Málta egyik legzöldebb települése."],
      ro: ["Numit după o capelă din secolul al XVI-lea.", "Grădina a fost un dar de la guvernul chinez.", "Una dintre cele mai verzi localități din Malta."],
      en: ["Named after a 16th-century chapel.", "The garden was a gift from the Chinese government.", "One of the greenest localities in Malta."]
    }
  },
  {
    id: "city-marsaskala-extra",
    type: "city",
    parent: "MT-29",
    coords: [14.5631, 35.8631],
    name: { de: "Marsaskala (Wied il-Għajn)", hu: "Marsaskala (Wied il-Għajn)", ro: "Marsaskala (Wied il-Għajn)", en: "Marsaskala (Wied il-Għajn)" },
    description: {
      de: "Marsaskala ist eine Küstenstadt, die um eine lange, malerische Bucht herum gebaut wurde und bei Einheimischen für ihre Restaurants am Meer beliebt ist.",
      hu: "Marsaskala egy tengerparti város, amely egy hosszú, festői öböl köré épült, és a helyiek körében népszerű a tengerparti éttermei miatt.",
      ro: "Marsaskala este un oraș de coastă construit în jurul unui golf lung și pitoresc, popular printre localnici pentru restaurantele sale de la malul mării.",
      en: "Marsaskala is a seaside town built around a long, picturesque bay, popular with locals for its waterfront restaurants."
    },
    facts: {
      de: ["Der maltesische Name Wied il-Għajn bedeutet 'Tal der Quelle'.", "Heimat des St. Thomas Tower, einer großen Wignacourt-Festung.", "Die Promenade erstreckt sich über die gesamte Länge der Bucht."],
      hu: ["A máltai Wied il-Għajn név 'forrás völgyét' jelenti.", "Itt található a Szent Tamás-torony, egy nagy Wignacourt-erőd.", "A sétány az öböl teljes hosszában húzódik."],
      ro: ["Numele maltez Wied il-Għajn înseamnă 'Valea Izvorului'.", "Găzduiește Turnul Sf. Toma, o mare fortificație Wignacourt.", "Promenada se întinde pe toată lungimea golfului."],
      en: ["The Maltese name Wied il-Għajn means 'Valley of the Spring'.", "Home to St. Thomas Tower, a large Wignacourt fortification.", "The promenade stretches the entire length of the bay."]
    }
  },
  {
    id: "city-marsaxlokk-extra",
    type: "city",
    parent: "MT-30",
    coords: [14.5447, 35.8419],
    name: { de: "Marsaxlokk", hu: "Marsaxlokk", ro: "Marsaxlokk", en: "Marsaxlokk" },
    description: {
      de: "Marsaxlokk ist ein traditionelles Fischerdorf, berühmt für seinen großen Sonntagsmarkt und die farbenfrohen 'Luzzu'-Boote.",
      hu: "Marsaxlokk egy hagyományos halászfalu, amely nagy vasárnapi piacáról és színes 'Luzzu' csónakjairól híres.",
      ro: "Marsaxlokk este un sat pescăresc tradițional, renumit pentru marea sa piață de duminică și pentru bărcile colorate 'Luzzu'.",
      en: "Marsaxlokk is a traditional fishing village, famous for its large Sunday market and colourful 'Luzzu' boats."
    },
    facts: {
      de: ["Der Name bedeutet 'Südosthafen'.", "Die Luzzu-Boote sind mit dem Auge des Osiris bemalt, um sie vor dem Bösen zu schützen.", "Liefert den größten Teil des Fischfangs in Malta."],
      hu: ["A neve 'délkeleti kikötőt' jelent.", "A Luzzu csónakokra Ozirisz szemét festik, hogy megvédjék a gonosztól.", "Málta halfogásának nagy részét ez a falu adja."],
      ro: ["Numele înseamnă 'portul de sud-est'.", "Bărcile Luzzu sunt pictate cu Ochiul lui Osiris pentru a le proteja de rău.", "Furnizează cea mai mare parte a peștelui din Malta."],
      en: ["The name means 'south-east harbour'.", "The Luzzu boats are painted with the Eye of Osiris to ward off evil.", "Supplies most of Malta's fish catch."]
    }
  },
  {
    id: "city-birzebbuga-extra",
    type: "city",
    parent: "MT-05",
    coords: [14.5269, 35.8272],
    name: { de: "Birżebbuġa", hu: "Birżebbuġa", ro: "Birżebbuġa", en: "Birżebbuġa" },
    description: {
      de: "Birżebbuġa ist eine Küstenstadt im Süden, die für ihren Sandstrand, Pretty Bay, und die Nähe zum Malta Freeport bekannt ist.",
      hu: "Birżebbuġa egy déli tengerparti város, amely homokos strandjáról, a Pretty Bay-ről, és a Máltai Szabadkikötő közelségéről ismert.",
      ro: "Birżebbuġa este un oraș de coastă din sud, cunoscut pentru plaja sa de nisip, Pretty Bay, și pentru proximitatea față de Portul Liber Malta.",
      en: "Birżebbuġa is a southern seaside town, known for its sandy beach, Pretty Bay, and its proximity to the Malta Freeport."
    },
    facts: {
      de: ["Der Name bedeutet 'Brunnen der Oliven'.", "In der Nähe liegt Għar Dalam, eine prähistorische Höhle.", "Der Freeport ist einer der verkehrsreichsten Häfen im Mittelmeer."],
      hu: ["A neve 'olajfák kútját' jelenti.", "A közelben található Għar Dalam, egy őskori barlang.", "A szabadkikötő a Földközi-tenger egyik legforgalmasabb kikötője."],
      ro: ["Numele înseamnă 'fântâna măslinilor'.", "Għar Dalam, o peșteră preistorică, se află în apropiere.", "Portul Liber este unul dintre cele mai aglomerate porturi din Marea Mediterană."],
      en: ["The name means 'well of olives'.", "Għar Dalam, a prehistoric cave, is located nearby.", "The Freeport is one of the busiest ports in the Mediterranean."]
    }
  },
  {
    id: "city-zabbar-extra",
    type: "city",
    parent: "MT-66",
    coords: [14.5325, 35.8769],
    name: { de: "Żabbar", hu: "Żabbar", ro: "Żabbar", en: "Żabbar" },
    description: {
      de: "Żabbar, auch als Città Hompesch bekannt, ist eine der größten Städte im Süden Maltas mit einem starken religiösen und kulturellen Erbe.",
      hu: "Żabbar, más néven Città Hompesch, Málta déli részének egyik legnagyobb városa, erős vallási és kulturális örökséggel.",
      ro: "Żabbar, cunoscut și sub numele de Città Hompesch, este unul dintre cele mai mari orașe din sudul Maltei, cu o moștenire religioasă și culturală puternică.",
      en: "Żabbar, also known as Città Hompesch, is one of the largest towns in southern Malta, with a strong religious and cultural heritage."
    },
    facts: {
      de: ["Sein Heiligtumsmuseum besitzt eine große Sammlung von Votivgaben.", "Die Festa Unserer Lieben Frau der Gnaden ist berühmt für ihre Motorrad- und Fahrradpilgerfahrt.", "Der Name leitet sich vom maltesischen Wort für 'Beschneiden' ab."],
      hu: ["A kegyhely-múzeuma nagy fogadalmi ajándéktárgy gyűjteménnyel rendelkezik.", "A Kegyelmek Asszonya ünnepe híres a motoros és kerékpáros zarándoklatáról.", "A neve a 'metszés' jelentésű máltai szóból származik."],
      ro: ["Muzeul său sanctuar deține o colecție mare de ofrande votive.", "Sărbătoarea Maicii Domnului a Harului este renumită pentru pelerinajul său cu motociclete și biciclete.", "Numele derivă din cuvântul maltez pentru 'a tăia'."],
      en: ["Its Sanctuary Museum holds a large collection of votive offerings.", "The feast of Our Lady of Graces is famous for its motorcycle and bicycle pilgrimage.", "The name derives from the Maltese word for 'to prune'."]
    }
  },
  {
    id: "city-xghajra-extra",
    type: "city",
    parent: "MT-65",
    coords: [14.5481, 35.8858],
    name: { de: "Xgħajra", hu: "Xgħajra", ro: "Xgħajra", en: "Xgħajra" },
    description: {
      de: "Xgħajra ist eine kleine Küstenstadt, die für ihre lange Promenade, ihre Felsküste und die gut erhaltenen britischen Befestigungsanlagen bekannt ist.",
      hu: "Xgħajra egy kis tengerparti város, amely hosszú sétányáról, sziklás partvidékéről és a jól megőrzött brit erődítményekről ismert.",
      ro: "Xgħajra este un mic oraș de coastă cunoscut pentru promenada sa lungă, coasta stâncoasă și fortificațiile britanice bine conservate.",
      en: "Xgħajra is a small coastal town known for its long promenade, rocky coast, and well-preserved British-era fortifications."
    },
    facts: {
      de: ["Der Name ist möglicherweise mit einem offenen, unfruchtbaren Land verbunden.", "Bietet einen weiten Blick auf das offene Meer.", "Beliebt für Spaziergänge und Angeln."],
      hu: ["A neve valószínűleg egy nyílt, terméketlen területhez kapcsolódik.", "Széles kilátást nyújt a nyílt tengerre.", "Népszerű a séták és a horgászat kedvelői körében."],
      ro: ["Numele este posibil legat de un teren deschis, sterp.", "Oferă vederi ample ale mării deschise.", "Popular pentru plimbări și pescuit."],
      en: ["The name is possibly related to an open, barren land.", "Offers wide views of the open sea.", "Popular for walks and fishing."]
    }
  },
  {
    id: "city-zejtun-extra",
    type: "city",
    parent: "MT-68",
    coords: [14.5331, 35.8558],
    name: { de: "Żejtun", hu: "Żejtun", ro: "Żejtun", en: "Żejtun" },
    description: {
      de: "Żejtun, auch als Città Beland bekannt, ist eine historische Stadt im Südosten mit einer reichen Geschichte, die bis in die phönizische und römische Zeit zurückreicht.",
      hu: "Żejtun, más néven Città Beland, egy történelmi város a délkeleti részen, gazdag történelemmel, amely a föníciai és római időkig nyúlik vissza.",
      ro: "Żejtun, cunoscut și sub numele de Città Beland, este un oraș istoric din sud-est, cu o istorie bogată ce datează din timpurile feniciene și romane.",
      en: "Żejtun, also known as Città Beland, is a historic southeastern town with a rich history dating back to Phoenician and Roman times."
    },
    facts: {
      de: ["Der Name bedeutet 'Olive' auf Arabisch und spiegelt die Bedeutung der Olivenölproduktion wider.", "Jährliches Olivenfest (Żejt iż-Żejtun).", "Die Pfarrkirche St. Katharina ist ein barockes Meisterwerk."],
      hu: ["A neve arabul 'olajbogyót' jelent, ami az olívaolaj-termelés fontosságát tükrözi.", "Évenkénti olajbafesztivál (Żejt iż-Żejtun).", "A Szent Katalin plébániatemplom egy barokk remekmű."],
      ro: ["Numele înseamnă 'măslină' în arabă, reflectând importanța producției de ulei de măsline.", "Găzduiește un festival anual al măslinelor (Żejt iż-Żejtun).", "Biserica parohială Sf. Ecaterina este o capodoperă barocă."],
      en: ["The name means 'olive' in Arabic, reflecting the importance of olive oil production.", "Hosts an annual olive festival (Żejt iż-Żejtun).", "The parish church of St. Catherine is a baroque masterpiece."]
    }
  },
  {
    id: "city-qrendi-extra",
    type: "city",
    parent: "MT-45",
    coords: [14.4608, 35.8294],
    name: { de: "Qrendi", hu: "Qrendi", ro: "Qrendi", en: "Qrendi" },
    description: {
      de: "Qrendi ist ein Dorf im Südwesten, das für seine Nähe zu den megalithischen Tempeln Ħaġar Qim und Mnajdra sowie zur Blauen Grotte bekannt ist.",
      hu: "Qrendi egy délnyugati falu, amely a Ħaġar Qim és Mnajdra megalitikus templomokhoz, valamint a Kék Barlanghoz való közelségéről ismert.",
      ro: "Qrendi este un sat din sud-vest, renumit pentru proximitatea sa față de templele megalitice Ħaġar Qim și Mnajdra, precum și de Grota Albastră.",
      en: "Qrendi is a village in the southwest, famous for its proximity to the megalithic temples of Ħaġar Qim and Mnajdra, and the Blue Grotto."
    },
    facts: {
      de: ["Beherbergt zwei der wichtigsten prähistorischen Stätten Maltas.", "Die Küste von Qrendi ist dramatisch und rau.", "Heimat mehrerer mittelalterlicher Kapellen."],
      hu: ["Málta két legfontosabb őskori helyszínének ad otthont.", "Qrendi tengerpartja drámai és zord.", "Számos középkori kápolna otthona."],
      ro: ["Găzduiește două dintre cele mai importante situri preistorice din Malta.", "Coasta Qrendi este dramatică și accidentată.", "Găzduiește mai multe capele medievale."],
      en: ["Hosts two of Malta's most important prehistoric sites.", "The Qrendi coastline is dramatic and rugged.", "Home to several medieval chapels."]
    }
  },
  {
    id: "city-mqabba-extra",
    type: "city",
    parent: "MT-35",
    coords: [14.4694, 35.8436],
    name: { de: "Mqabba", hu: "Mqabba", ro: "Mqabba", en: "Mqabba" },
    description: {
      de: "Mqabba ist bekannt für seine Steinbrüche, aus denen der hochwertige globigerine Kalkstein gewonnen wird, sowie für seine frühchristlichen Katakomben.",
      hu: "Mqabba a kőbányáiról ismert, ahonnan a jó minőségű globigerin mészkövet bányásszák, valamint a korai keresztény katakombáiról.",
      ro: "Mqabba este renumit pentru carierele sale de piatră, care extrag calcarul globigerina de înaltă calitate, și pentru catacombele sale paleocreștine.",
      en: "Mqabba is renowned for its stone quarries, which extract the high-quality globigerina limestone, and for its paleo-Christian catacombs."
    },
    facts: {
      de: ["Wichtiger Lieferant von Baumaterialien in Malta.", "Die Katakomben von Ta' Mintna sind eine wichtige archäologische Stätte.", "Die Dorffeier ist bekannt für ihr Feuerwerk."],
      hu: ["Fontos építőanyag-beszállító Máltán.", "A Ta' Mintna katakombák fontos régészeti lelőhelyek.", "A falusi ünnep a tűzijátékáról ismert."],
      ro: ["Un furnizor important de materiale de construcție în Malta.", "Catacombele Ta' Mintna sunt un sit arheologic important.", "Sărbătoarea satului este renumită pentru focurile de artificii."],
      en: ["An important supplier of building materials in Malta.", "The Catacombs of Ta' Mintna are a key archaeological site.", "The village feast is renowned for its fireworks displays."]
    }
  },
  {
    id: "city-kirkop-extra",
    type: "city",
    parent: "MT-23",
    coords: [14.4831, 35.8447],
    name: { de: "Kirkop", hu: "Kirkop", ro: "Kirkop", en: "Kirkop" },
    description: {
      de: "Kirkop ist ein kleines Dorf in der Nähe des Flughafens, bekannt für seine Menhire und andere kleinere archäologische Überreste.",
      hu: "Kirkop egy kis falu a repülőtér közelében, amely menhirjeiről és más kisebb régészeti maradványairól ismert.",
      ro: "Kirkop este un mic sat de lângă aeroport, cunoscut pentru menhirul său și alte vestigii arheologice minore.",
      en: "Kirkop is a small village near the airport, known for its menhir and other minor archaeological remains."
    },
    facts: {
      de: ["Der Name ist möglicherweise eine Korruption von 'Kerkop' (ein Familienname).", "Heimat einer großen STMicroelectronics-Anlage.", "Die Pfarrkirche ist dem Heiligen Leonhard gewidmet."],
      hu: ["A neve valószínűleg a 'Kerkop' (családnév) eltorzulása.", "Itt található egy nagy STMicroelectronics üzem.", "A plébániatemplomot Szent Leonárdnak szentelték."],
      ro: ["Numele este posibil o corupere a lui 'Kerkop' (un nume de familie).", "Găzduiește o mare fabrică STMicroelectronics.", "Biserica parohială este dedicată Sfântului Leonard."],
      en: ["The name is possibly a corruption of 'Kerkop' (a family name).", "Home to a large STMicroelectronics plant.", "The parish church is dedicated to St. Leonard."]
    }
  },
  {
    id: "city-safi-extra",
    type: "city",
    parent: "MT-47",
    coords: [14.4875, 35.8369],
    name: { de: "Safi", hu: "Safi", ro: "Safi", en: "Safi" },
    description: {
      de: "Safi ist eines der kleinsten Dörfer Maltas, das seinen traditionellen und ländlichen Charakter bewahrt hat.",
      hu: "Safi Málta egyik legkisebb faluja, amely megőrizte hagyományos és vidéki jellegét.",
      ro: "Safi este unul dintre cele mai mici sate din Malta, păstrându-și caracterul tradițional și rural.",
      en: "Safi is one of the smallest villages in Malta, retaining its traditional and rural character."
    },
    facts: {
      de: ["Der Name bedeutet 'rein' oder 'klar'.", "Umgeben von landwirtschaftlichen Flächen.", "Die Pfarrkirche ist dem Heiligen Paulus gewidmet."],
      hu: ["A neve 'tisztát' vagy 'világosat' jelent.", "Mezőgazdasági területek veszik körül.", "A plébániatemplomot Szent Pálnak szentelték."],
      ro: ["Numele înseamnă 'pur' sau 'limpede'.", "Înconjurat de terenuri agricole.", "Biserica parohială este dedicată Sfântului Pavel."],
      en: ["The name means 'pure' or 'clear'.", "Surrounded by agricultural land.", "The parish church is dedicated to St. Paul."]
    }
  },
  {
    id: "city-zurrieq-extra",
    type: "city",
    parent: "MT-67",
    coords: [14.4753, 35.8286],
    name: { de: "Żurrieq", hu: "Żurrieq", ro: "Żurrieq", en: "Żurrieq" },
    description: {
      de: "Żurrieq ist eine der ältesten Städte Maltas, bekannt für die Blaue Grotte, die Xarolla-Windmühle und ihre Katakomben.",
      hu: "Żurrieq Málta egyik legrégebbi városa, amely a Kék Barlangról, a Xarolla szélmalomról és katakombáiról ismert.",
      ro: "Żurrieq este unul dintre cele mai vechi orașe din Malta, cunoscut pentru Grota Albastră, moara de vânt Xarolla și catacombele sale.",
      en: "Żurrieq is one of the oldest towns in Malta, known for the Blue Grotto, the Xarolla Windmill, and its catacombs."
    },
    facts: {
      de: ["Der Name könnte von 'zoroq', dem arabischen Wort für 'blau', abgeleitet sein.", "Die Pfarrkirche ist der Heiligen Katharina von Alexandria gewidmet.", "Eine der 10 Urpfarreien Maltas."],
      hu: ["A neve a 'zoroq' szóból származhat, ami arabul 'kéket' jelent.", "A plébániatemplomot Alexandriai Szent Katalinnak szentelték.", "Málta 10 ősi plébániájának egyike."],
      ro: ["Numele ar putea deriva din 'zoroq', cuvântul arab pentru 'albastru'.", "Biserica parohială este dedicată Sfintei Ecaterina din Alexandria.", "Una dintre cele 10 parohii originale din Malta."],
      en: ["The name might derive from 'zoroq', the Arabic word for 'blue'.", "The parish church is dedicated to St. Catherine of Alexandria.", "One of the 10 original parishes of Malta."]
    }
  },
  {
    id: "city-siggiewi-extra",
    type: "city",
    parent: "MT-54",
    coords: [14.4503, 35.8553],
    name: { de: "Siġġiewi (Città Ferdinand)", hu: "Siġġiewi (Città Ferdinand)", ro: "Siġġiewi (Città Ferdinand)", en: "Siġġiewi (Città Ferdinand)" },
    description: {
      de: "Siġġiewi ist eine ländliche Stadt, die für ihre weiten Felder, Bauernhöfe und die Nähe zu den Buskett-Gärten und den Dingli-Klippen bekannt ist.",
      hu: "Siġġiewi egy vidéki város, amely széles mezőiről, farmjairól, valamint a Buskett-kertek és a Dingli-sziklák közelségéről ismert.",
      ro: "Siġġiewi este un oraș rural cunoscut pentru câmpurile sale vaste, ferme și proximitatea față de Grădinile Buskett și Stâncile Dingli.",
      en: "Siġġiewi is a rural town known for its vast fields, farmhouses, and proximity to Buskett Gardens and Dingli Cliffs."
    },
    facts: {
      de: ["Erhielt den Titel 'Città Ferdinand' von Großmeister Ferdinand von Hompesch.", "Die Pfarrkirche ist dem Heiligen Nikolaus gewidmet.", "Das Festa tal-Ġirgenti ist ein beliebtes landwirtschaftliches Fest."],
      hu: ["A 'Città Ferdinand' címet Ferdinand von Hompesch nagymestertől kapta.", "A plébániatemplomot Szent Miklósnak szentelték.", "A Festa tal-Ġirgenti egy népszerű mezőgazdasági ünnep."],
      ro: ["A primit titlul 'Città Ferdinand' de la Marele Maestru Ferdinand von Hompesch.", "Biserica parohială este dedicată Sfântului Nicolae.", "Festa tal-Ġirgenti este un festival agricol popular."],
      en: ["Awarded the title 'Città Ferdinand' by Grand Master Ferdinand von Hompesch.", "The parish church is dedicated to St. Nicholas.", "The Festa tal-Ġirgenti is a popular agricultural festival."]
    }
  },
  {
    id: "city-zebbug-malta-extra",
    type: "city",
    parent: "MT-69",
    coords: [14.4419, 35.8722],
    name: { de: "Żebbuġ, Malta", hu: "Żebbuġ, Málta", ro: "Żebbuġ, Malta", en: "Żebbuġ, Malta" },
    description: {
      de: "Żebbuġ, auch als Città Rohan bekannt, ist eine der ältesten Städte Maltas, bekannt für ihre großartige Pfarrkirche und ihre Feste.",
      hu: "Żebbuġ, más néven Città Rohan, Málta egyik legrégebbi városa, amely pompás plébániatemplomáról és ünnepeiről ismert.",
      ro: "Żebbuġ, cunoscut și sub numele de Città Rohan, este unul dintre cele mai vechi orașe din Malta, renumit pentru biserica sa parohială grandioasă și pentru festivitățile sale.",
      en: "Żebbuġ, also known as Città Rohan, is one of the oldest towns in Malta, known for its grand parish church and its feasts."
    },
    facts: {
      de: ["Der Name bedeutet 'Oliven'.", "Drei separate Dorffeste werden gefeiert.", "Heimatstadt des Nationaldichters Dun Karm Psaila."],
      hu: ["A neve 'olajbogyót' jelent.", "Három különálló falusi ünnepet tartanak.", "Dun Karm Psaila nemzeti költő szülővárosa."],
      ro: ["Numele înseamnă 'măsline'.", "Se sărbătoresc trei festivaluri de sat separate.", "Orașul natal al poetului național Dun Karm Psaila."],
      en: ["The name means 'olives'.", "Three separate village feasts are celebrated.", "Hometown of national poet Dun Karm Psaila."]
    }
  },
  {
    id: "city-qormi-extra",
    type: "city",
    parent: "MT-44",
    coords: [14.4719, 35.8797],
    name: { de: "Qormi (Città Pinto)", hu: "Qormi (Città Pinto)", ro: "Qormi (Città Pinto)", en: "Qormi (Città Pinto)" },
    description: {
      de: "Qormi ist bekannt als die 'Brotstadt' Maltas, mit einer langen Geschichte des Backens, die noch heute in vielen Bäckereien lebendig ist.",
      hu: "Qormi Málta 'kenyérvárosaként' ismert, hosszú sütési hagyománnyal, amely ma is él számos pékségében.",
      ro: "Qormi este cunoscut ca 'orașul pâinii' din Malta, cu o lungă istorie a panificației care este încă vie în numeroasele sale brutării.",
      en: "Qormi is known as the 'bread city' of Malta, with a long history of baking that is still alive in its many bakeries today."
    },
    facts: {
      de: ["Erhielt den Titel 'Città Pinto' von Großmeister Pinto.", "Zwei Pfarreien, die dem Heiligen Georg und dem Heiligen Sebastian gewidmet sind.", "Jährliches Weinfest und Brot-Fest."],
      hu: ["A 'Città Pinto' címet Pinto nagymestertől kapta.", "Két plébániája van, Szent Györgynek és Szent Sebestyénnek szentelve.", "Évente megrendezett borfesztivál és kenyérfesztivál."],
      ro: ["A primit titlul 'Città Pinto' de la Marele Maestru Pinto.", "Două parohii, dedicate Sfântului Gheorghe și Sfântului Sebastian.", "Găzduiește un festival anual al vinului și un festival al pâinii."],
      en: ["Awarded the title 'Città Pinto' by Grand Master Pinto.", "Two parishes, dedicated to St. George and St. Sebastian.", "Hosts an annual wine festival and bread festival."]
    }
  },
  {
    id: "city-rabat-malta-extra",
    type: "city",
    parent: "MT-46",
    coords: [14.4025, 35.8817],
    name: { de: "Rabat, Malta", hu: "Rabat, Málta", ro: "Rabat, Malta", en: "Rabat, Malta" },
    description: {
      de: "Rabat ist ein großes Dorf neben der alten Hauptstadt Mdina, bekannt für seine römischen und frühchristlichen Katakomben.",
      hu: "Rabat egy nagy falu az egykori főváros, Mdina mellett, amely római és ókeresztény katakombáiról ismert.",
      ro: "Rabat este un sat mare adiacent vechii capitale Mdina, renumit pentru catacombele sale romane și paleocreștine.",
      en: "Rabat is a large village adjacent to the old capital of Mdina, famous for its Roman and paleo-Christian catacombs."
    },
    facts: {
      de: ["Der Name bedeutet 'Vorort'.", "Die St. Paul's Grotto soll den Apostel Paulus beherbergt haben.", "Die Domvs Romana zeigt die Überreste eines wohlhabenden römischen Stadthauses."],
      hu: ["A neve 'külvárost' jelent.", "A Szent Pál-barlangban állítólag Szent Pál apostol is tartózkodott.", "A Domvs Romana egy gazdag római városi ház maradványait mutatja be."],
      ro: ["Numele înseamnă 'suburbie'.", "Se spune că Grota Sf. Pavel l-a adăpostit pe Apostolul Pavel.", "Domvs Romana expune rămășițele unei case de oraș romane bogate."],
      en: ["The name means 'suburb'.", "St. Paul's Grotto is said to have sheltered the Apostle Paul.", "The Domvs Romana showcases the remains of a wealthy Roman townhouse."]
    }
  },
  {
    id: "city-dingli-extra",
    type: "city",
    parent: "MT-08",
    coords: [14.3822, 35.8611],
    name: { de: "Dingli", hu: "Dingli", ro: "Dingli", en: "Dingli" },
    description: {
      de: "Dingli liegt am höchsten Punkt Maltas und ist berühmt für seine dramatischen Klippen, die einen atemberaubenden Blick auf das Mittelmeer bieten.",
      hu: "Dingli Málta legmagasabb pontján fekszik, és drámai szikláiról híres, ahonnan lenyűgöző kilátás nyílik a Földközi-tengerre.",
      ro: "Dingli este situat în cel mai înalt punct al Maltei și este renumit pentru stâncile sale dramatice, care oferă vederi uluitoare la Marea Mediterană.",
      en: "Dingli is located at Malta's highest point and is famous for its dramatic cliffs, offering breathtaking views of the Mediterranean Sea."
    },
    facts: {
      de: ["Die Dingli-Klippen erheben sich etwa 253 Meter über dem Meeresspiegel.", "Heimat der kleinen, abgelegenen St. Maria Magdalena Kapelle.", "Die Buskett-Gärten sind das einzige große Waldgebiet Maltas in der Nähe."],
      hu: ["A Dingli-sziklák körülbelül 253 méterrel emelkednek a tengerszint fölé.", "Itt található a kis, félreeső Szent Mária Magdolna kápolna.", "A közelben található a Buskett-kertek, Málta egyetlen nagy erdős területe."],
      ro: ["Stâncile Dingli se ridică la aproximativ 253 de metri deasupra nivelului mării.", "Găzduiește mica și izolată Capelă Sf. Maria Magdalena.", "Grădinile Buskett, singura zonă împădurită mare din Malta, se află în apropiere."],
      en: ["The Dingli Cliffs rise to about 253 metres above sea level.", "Home to the small, remote St. Mary Magdalene Chapel.", "Buskett Gardens, Malta's only large woodland, is nearby."]
    }
  },
  {
    id: "city-attard-extra",
    type: "city",
    parent: "MT-01",
    coords: [14.4425, 35.8906],
    name: { de: "Attard", hu: "Attard", ro: "Attard", en: "Attard" },
    description: {
      de: "Attard, Teil der 'Drei Dörfer' zusammen mit Balzan und Lija, ist bekannt für seine Villen, Gärten und den Präsidentenpalast San Anton.",
      hu: "Attard, a 'Három Falu' egyike Balzan és Lija mellett, villáiról, kertjeiről és a San Anton elnöki palotáról ismert.",
      ro: "Attard, parte a 'Celor Trei Sate' împreună cu Balzan și Lija, este cunoscut pentru vilele, grădinile și Palatul prezidențial San Anton.",
      en: "Attard, part of the 'Three Villages' along with Balzan and Lija, is known for its villas, gardens, and the San Anton Presidential Palace."
    },
    facts: {
      de: ["Der Name bedeutet möglicherweise 'Blüten'.", "Der San Anton Palast ist die offizielle Residenz des Präsidenten von Malta.", "Der Aquädukt von Wignacourt verläuft durch Attard."],
      hu: ["A neve valószínűleg 'virágokat' jelent.", "A San Anton palota Málta elnökének hivatalos rezidenciája.", "A Wignacourt vízvezeték áthalad Attardon."],
      ro: ["Numele ar putea însemna 'flori'.", "Palatul San Anton este reședința oficială a Președintelui Maltei.", "Apeductul Wignacourt trece prin Attard."],
      en: ["The name possibly means 'blossoms'.", "San Anton Palace is the official residence of the President of Malta.", "The Wignacourt Aqueduct passes through Attard."]
    }
  },
  {
    id: "city-balzan-extra",
    type: "city",
    parent: "MT-02",
    coords: [14.4539, 35.8967],
    name: { de: "Balzan", hu: "Balzan", ro: "Balzan", en: "Balzan" },
    description: {
      de: "Balzan ist ein charmantes und malerisches Dorf, eines der 'Drei Dörfer', das für seine ruhigen Gassen und eleganten Stadthäuser bekannt ist.",
      hu: "Balzan egy bájos és festői falu, egyike a 'Három Falunak', amely csendes sikátorairól és elegáns városi házairól ismert.",
      ro: "Balzan este un sat fermecător și pitoresc, unul dintre 'Cele Trei Sate', cunoscut pentru aleile sale liniștite și casele elegante.",
      en: "Balzan is a charming and picturesque village, one of the 'Three Villages', known for its quiet alleys and elegant townhouses."
    },
    facts: {
      de: ["Die Pfarrkirche ist der Verkündigung gewidmet.", "Ursprünglich eine kleine Ansammlung von Bauernhöfen.", "Heimat mehrerer historischer Kapellen."],
      hu: ["A plébániatemplomot Angyali Üdvözletnek szentelték.", "Eredetileg egy kis tanyacsoport volt.", "Számos történelmi kápolna otthona."],
      ro: ["Biserica parohială este dedicată Bunei Vestiri.", "Inițial un mic grup de ferme.", "Găzduiește mai multe capele istorice."],
      en: ["The parish church is dedicated to the Annunciation.", "Originally a small collection of farmhouses.", "Home to several historic chapels."]
    }
  },
  {
    id: "city-lija-extra",
    type: "city",
    parent: "MT-24",
    coords: [14.4503, 35.9011],
    name: { de: "Lija", hu: "Lija", ro: "Lija", en: "Lija" },
    description: {
      de: "Lija, das letzte der 'Drei Dörfer', ist bekannt für seine Feuerwerkstradition, Zitrusgärten und den markanten Belvedere Tower.",
      hu: "Lija, a 'Három Falu' utolsó tagja, tűzijáték-hagyományairól, citruskertjeiről és jellegzetes Belvedere-tornyáról ismert.",
      ro: "Lija, ultimul dintre 'Cele Trei Sate', este renumit pentru tradiția sa de focuri de artificii, grădinile de citrice și distinctivul Turn Belvedere.",
      en: "Lija, the last of the 'Three Villages', is renowned for its fireworks tradition, citrus groves, and the distinctive Belvedere Tower."
    },
    facts: {
      de: ["Das jährliche Fest der Verklärung ist berühmt für sein Feuerwerk.", "Heimat mehrerer großer Villen maltesischer Adliger.", "Der Belvedere Tower wurde als Gartenlaube gebaut."],
      hu: ["Az évenkénti Színeváltozás ünnepe híres a tűzijátékáról.", "Számos máltai nemesi család nagy villájának ad otthont.", "A Belvedere-torony kerti pavilonnak épült."],
      ro: ["Sărbătoarea anuală a Schimbării la Față este renumită pentru focurile de artificii.", "Găzduiește mai multe vile mari aparținând nobilimii malteze.", "Turnul Belvedere a fost construit ca un foișor de grădină."],
      en: ["The annual feast of the Transfiguration is famous for its fireworks.", "Home to several large villas of Maltese nobility.", "The Belvedere Tower was built as a garden folly."]
    }
  },
  {
    id: "city-iklin-extra",
    type: "city",
    parent: "MT-19",
    coords: [14.4608, 35.9069],
    name: { de: "Iklin", hu: "Iklin", ro: "Iklin", en: "Iklin" },
    description: {
      de: "Iklin ist eine relativ neue Ortschaft, die sich aus einem ländlichen Gebiet zu einer modernen Wohnstadt entwickelt hat, die an Lija und Birkirkara grenzt.",
      hu: "Iklin egy viszonylag új település, amely egy vidéki területről fejlődött modern lakóvárossá, Lija és Birkirkara szomszédságában.",
      ro: "Iklin este o localitate relativ nouă care s-a dezvoltat dintr-o zonă rurală într-un oraș rezidențial modern, învecinat cu Lija și Birkirkara.",
      en: "Iklin is a relatively new locality that developed from a rural area into a modern residential town, bordering Lija and Birkirkara."
    },
    facts: {
      de: ["Der Name könnte vom Kraut Rosmarin (klin) abgeleitet sein.", "Eine megalithische Stätte wurde in den 1960er Jahren entdeckt, aber später zerstört.", "Eine kleine Kapelle, die dem Heiligen Michael gewidmet ist, ist das älteste Gebäude."],
      hu: ["A neve a rozmaring (klin) gyógynövény nevéből származhat.", "Az 1960-as években egy megalitikus lelőhelyet fedeztek fel, de később elpusztították.", "Egy kis, Szent Mihálynak szentelt kápolna a legrégebbi épület."],
      ro: ["Numele ar putea deriva de la planta rozmarin (klin).", "Un sit megalitic a fost descoperit în anii 1960, dar ulterior distrus.", "O mică capelă dedicată Sfântului Mihail este cea mai veche clădire."],
      en: ["The name might derive from the herb rosemary (klin).", "A megalithic site was discovered in the 1960s but later destroyed.", "A small chapel dedicated to St. Michael is the oldest building."]
    }
  },
  {
    id: "city-mosta-extra",
    type: "city",
    parent: "MT-36",
    coords: [14.4258, 35.9097],
    name: { de: "Mosta", hu: "Mosta", ro: "Mosta", en: "Mosta" },
    description: {
      de: "Mosta ist berühmt für seine Rotunde, allgemein bekannt als Mosta-Dom, die eine der größten ungestützten Kuppeln der Welt besitzt.",
      hu: "Mosta a rotundájáról híres, amelyet általában Mosta-dómnak neveznek, és amely a világ egyik legnagyobb alátámasztatlan kupolájával rendelkezik.",
      ro: "Mosta este renumit pentru Rotunda sa, cunoscută în mod obișnuit ca Domul din Mosta, care are una dintre cele mai mari cupole ne-susținute din lume.",
      en: "Mosta is famous for its Rotunda, commonly known as the Mosta Dome, which has one of the largest unsupported domes in the world."
    },
    facts: {
      de: ["Während des Zweiten Weltkriegs fiel eine Bombe durch die Kuppel, explodierte aber nicht.", "Die Kirche ist Mariä Himmelfahrt gewidmet.", "In Mosta befindet sich auch das historische Fort Mosta."],
      hu: ["A második világháború alatt egy bomba átesett a kupolán, de nem robbant fel.", "A templomot Nagyboldogasszonynak szentelték.", "Mostában található a történelmi Mosta erőd is."],
      ro: ["În timpul celui de-al Doilea Război Mondial, o bombă a căzut prin cupolă, dar nu a explodat.", "Biserica este dedicată Adormirii Maicii Domnului.", "Mosta găzduiește și fortul istoric Mosta."],
      en: ["During WWII, a bomb fell through the dome but failed to explode.", "The church is dedicated to the Assumption of Mary.", "Mosta is also home to the historic Fort Mosta."]
    }
  },
  {
    id: "city-naxxar-extra",
    type: "city",
    parent: "MT-38",
    coords: [14.4458, 35.9156],
    name: { de: "Naxxar", hu: "Naxxar", ro: "Naxxar", en: "Naxxar" },
    description: {
      de: "Naxxar ist eine große Stadt im zentral-nördlichen Malta, bekannt für den opulenten Palazzo Parisio und seine Gärten.",
      hu: "Naxxar egy nagyváros Málta közép-északi részén, amely a pazar Palazzo Parisio-ról és kertjeiről ismert.",
      ro: "Naxxar este un oraș mare în centrul-nordul Maltei, cunoscut pentru opulentul Palat Parisio și grădinile sale.",
      en: "Naxxar is a large town in central-northern Malta, known for the opulent Palazzo Parisio and its gardens."
    },
    facts: {
      de: ["Die Legende besagt, dass die Menschen von Naxxar die ersten waren, die dem Heiligen Paulus halfen.", "Der Name könnte von 'nassar' (bekehren) abgeleitet sein.", "Der Palazzo Parisio wird oft als 'Miniatur-Versailles' bezeichnet."],
      hu: ["A legenda szerint a naxxariak voltak az elsők, akik segítettek Szent Pálnak.", "A név a 'nassar' (megtérít) szóból származhat.", "A Palazzo Parisio-t gyakran 'miniatűr Versailles'-ként emlegetik."],
      ro: ["Legenda spune că locuitorii din Naxxar au fost primii care l-au ajutat pe Sfântul Pavel.", "Numele ar putea deriva din 'nassar' (a converti).", "Palatul Parisio este adesea numit 'Versailles în miniatură'."],
      en: ["Legend says the people of Naxxar were the first to help St. Paul.", "The name might derive from 'nassar' (to convert).", "Palazzo Parisio is often called a 'miniature Versailles'."]
    }
  },
  {
    id: "city-gharghur-extra",
    type: "city",
    parent: "MT-12",
    coords: [14.4453, 35.9264],
    name: { de: "Għargħur", hu: "Għargħur", ro: "Għargħur", en: "Għargħur" },
    description: {
      de: "Għargħur ist eines der kleinsten und ältesten Dörfer Maltas und liegt auf einem Hügel mit Blick auf die Küste.",
      hu: "Għargħur Málta egyik legkisebb és legrégebbi faluja, amely egy dombon fekszik, kilátással a tengerpartra.",
      ro: "Għargħur este unul dintre cele mai mici și mai vechi sate din Malta, situat pe un deal cu vedere la coastă.",
      en: "Għargħur is one of Malta's smallest and oldest villages, situated on a hilltop with views of the coast."
    },
    facts: {
      de: ["Bekannt als 'Top of the World' Aussichtspunkt.", "Behält einen Großteil seines ursprünglichen Dorfkerns.", "Die Pfarrkirche ist dem Heiligen Bartholomäus gewidmet."],
      hu: ["A 'Világ Teteje' kilátópontjáról ismert.", "Megőrizte eredeti faluközpontjának nagy részét.", "A plébániatemplomot Szent Bertalannak szentelték."],
      ro: ["Cunoscut pentru punctul de belvedere 'Top of the World'.", "Își păstrează în mare parte nucleul original al satului.", "Biserica parohială este dedicată Sfântului Bartolomeu."],
      en: ["Known for the 'Top of the World' viewpoint.", "Retains much of its original village core.", "The parish church is dedicated to St. Bartholomew."]
    }
  },
  {
    id: "city-mellieha-extra",
    type: "city",
    parent: "MT-32",
    coords: [14.3614, 35.9569],
    name: { de: "Mellieħa", hu: "Mellieħa", ro: "Mellieħa", en: "Mellieħa" },
    description: {
      de: "Mellieħa ist ein großes Dorf im Norden, das für Maltas größten Sandstrand, Mellieħa Bay (Għadira Bay), bekannt ist.",
      hu: "Mellieħa egy nagy falu az északi részen, amely Málta legnagyobb homokos strandjáról, a Mellieħa-öbölről (Għadira-öböl) ismert.",
      ro: "Mellieħa este un sat mare în nord, renumit pentru cea mai mare plajă de nisip din Malta, Golful Mellieħa (Golful Għadira).",
      en: "Mellieħa is a large northern village, renowned for Malta's largest sandy beach, Mellieħa Bay (Għadira Bay)."
    },
    facts: {
      de: ["Das Heiligtum Unserer Lieben Frau von Mellieħa ist ein nationales Heiligtum.", "Heimat von Popeye Village, dem Filmset des Films von 1980.", "Der Rote Turm (St. Agatha's Tower) überblickt die Bucht."],
      hu: ["A Mellieħai Miasszonyunk kegyhely nemzeti szentély.", "Itt található a Popeye Falu, az 1980-as film forgatási helyszíne.", "A Vörös Torony (Szent Ágota-torony) az öbölre néz."],
      ro: ["Sanctuarul Maicii Domnului din Mellieħa este un altar național.", "Găzduiește Popeye Village, platoul de filmare al filmului din 1980.", "Turnul Roșu (Turnul Sf. Agata) domină golful."],
      en: ["The Sanctuary of Our Lady of Mellieħa is a national shrine.", "Home to Popeye Village, the film set of the 1980 movie.", "The Red Tower (St. Agatha's Tower) overlooks the bay."]
    }
  },
  {
    id: "city-st-pauls-bay-extra",
    type: "city",
    parent: "MT-51",
    coords: [14.4153, 35.9486],
    name: { de: "St. Paul's Bay", hu: "St. Paul's Bay", ro: "St. Paul's Bay", en: "St. Paul's Bay" },
    description: {
      de: "St. Paul's Bay ist eine große Küstenstadt, die die beliebten Ferienorte Buġibba und Qawra umfasst und traditionell mit dem Schiffbruch des Heiligen Paulus in Verbindung gebracht wird.",
      hu: "St. Paul's Bay egy nagy tengerparti város, amely magában foglalja a népszerű üdülőhelyeket, Buġibbát és Qawrát, és hagyományosan Szent Pál hajótöréséhez kötik.",
      ro: "St. Paul's Bay este un mare oraș de coastă care include stațiunile populare Buġibba și Qawra, asociat în mod tradițional cu naufragiul Sfântului Pavel.",
      en: "St. Paul's Bay is a large coastal town that includes the popular resorts of Buġibba and Qawra, traditionally associated with St. Paul's shipwreck."
    },
    facts: {
      de: ["Eine der größten Ortschaften in der nördlichen Region.", "Beherbergt das Malta National Aquarium.", "Der Wignacourt Tower ist die älteste erhaltene Küstenverteidigungsfestung."],
      hu: ["Az északi régió egyik legnagyobb települése.", "Itt található a Máltai Nemzeti Akvárium.", "A Wignacourt-torony a legrégebbi fennmaradt tengerparti védelmi erőd."],
      ro: ["Una dintre cele mai mari localități din Regiunea de Nord.", "Găzduiește Acvariul Național din Malta.", "Turnul Wignacourt este cea mai veche fortificație de coastă care a supraviețuit."],
      en: ["One of the largest localities in the Northern Region.", "Hosts the Malta National Aquarium.", "The Wignacourt Tower is the oldest surviving coastal defence fortification."]
    }
  },
  {
    id: "city-bugibba-extra",
    type: "city",
    parent: "MT-51",
    coords: [14.4103, 35.9525],
    name: { de: "Buġibba", hu: "Buġibba", ro: "Buġibba", en: "Buġibba" },
    description: {
      de: "Buġibba ist ein beliebter Ferienort in St. Paul's Bay, bekannt für sein Nachtleben, seine Restaurants und seine felsigen Strände.",
      hu: "Buġibba egy népszerű üdülőhely St. Paul's Bay-ben, amely éjszakai életéről, éttermeiről és sziklás strandjairól ismert.",
      ro: "Buġibba este o stațiune populară în St. Paul's Bay, cunoscută pentru viața de noapte, restaurante și plajele stâncoase.",
      en: "Buġibba is a popular holiday resort within St. Paul's Bay, known for its nightlife, restaurants, and rocky beaches."
    },
    facts: {
      de: ["Der Hauptplatz ist das Zentrum der Aktivität.", "Besitzt einen künstlich angelegten Sandstrand.", "Die Promenade verbindet es mit Qawra."],
      hu: ["A fő tér a tevékenység központja.", "Van egy mesterségesen létrehozott homokos strandja.", "A sétány összeköti Qawrával."],
      ro: ["Piața principală este centrul activității.", "Are o plajă de nisip creată de om.", "Promenada o leagă de Qawra."],
      en: ["The main square is the centre of activity.", "Has a man-made sandy beach.", "The promenade connects it to Qawra."]
    }
  },
  {
    id: "city-qawra-extra",
    type: "city",
    parent: "MT-51",
    coords: [14.4219, 35.9542],
    name: { de: "Qawra", hu: "Qawra", ro: "Qawra", en: "Qawra" },
    description: {
      de: "Qawra ist ein Ferienort neben Buġibba, der für seine Hotels, das Malta National Aquarium und den Salina Nature Park bekannt ist.",
      hu: "Qawra egy üdülőhely Buġibba mellett, amely szállodáiról, a Máltai Nemzeti Akváriumról és a Salina Természeti Parkról ismert.",
      ro: "Qawra este o stațiune adiacentă Buġibba, cunoscută pentru hotelurile sale, Acvariul Național din Malta și Parcul Natural Salina.",
      en: "Qawra is a resort town adjacent to Buġibba, known for its hotels, the Malta National Aquarium, and the Salina Nature Park."
    },
    facts: {
      de: ["Der Qawra Tower ist ein historischer Wachturm.", "Beliebt für Wassersport und Tauchen.", "Der Qawra Point bietet felsige Strände und Pools."],
      hu: ["A Qawra-torony egy történelmi őrtorony.", "Népszerű a vízi sportok és a búvárkodás kedvelői körében.", "A Qawra-fok sziklás strandokat és medencéket kínál."],
      ro: ["Turnul Qawra este un turn de veghe istoric.", "Popular pentru sporturi nautice și scufundări.", "Punctul Qawra are plaje stâncoase și piscine."],
      en: ["The Qawra Tower is a historic watchtower.", "Popular for watersports and diving.", "Qawra Point features rocky beaches and pools."]
    }
  },
  {
    id: "city-mgarr-malta-extra",
    type: "city",
    parent: "MT-31",
    coords: [14.3653, 35.9192],
    name: { de: "Mġarr, Malta", hu: "Mġarr, Málta", ro: "Mġarr, Malta", en: "Mġarr, Malta" },
    description: {
      de: "Mġarr ist ein ländliches Dorf im Nordwesten Maltas, umgeben von Ackerland und bekannt für die prähistorischen Tempel Ta' Ħaġrat und Skorba.",
      hu: "Mġarr egy vidéki falu Málta északnyugati részén, mezőgazdasági területekkel körülvéve, és a Ta' Ħaġrat és Skorba őskori templomairól ismert.",
      ro: "Mġarr este un sat rural în nord-vestul Maltei, înconjurat de terenuri agricole și cunoscut pentru templele preistorice Ta' Ħaġrat și Skorba.",
      en: "Mġarr is a rural village in northwestern Malta, surrounded by farmland and known for the Ta' Ħaġrat and Skorba prehistoric temples."
    },
    facts: {
      de: ["Bekannt für die Produktion von Erdbeeren.", "Jährliches Erdbeerfest (Festa Frawli).", "Die Tempel gehören zum UNESCO-Weltkulturerbe."],
      hu: ["Az epertermesztéséről ismert.", "Évenkénti eper fesztivál (Festa Frawli).", "A templomok az UNESCO Világörökség részét képezik."],
      ro: ["Renumit pentru producția sa de căpșuni.", "Găzduiește un festival anual al căpșunilor (Festa Frawli).", "Templele sunt situri ale Patrimoniului Mondial UNESCO."],
      en: ["Known for its production of strawberries.", "Hosts an annual strawberry festival (Festa Frawli).", "The temples are UNESCO World Heritage sites."]
    }
  },
  {
    id: "city-victoria-rabat-gozo-extra",
    type: "city",
    parent: "MT-61",
    coords: [14.2444, 36.0447],
    name: { de: "Victoria (Rabat), Gozo", hu: "Victoria (Rabat), Gozo", ro: "Victoria (Rabat), Gozo", en: "Victoria (Rabat), Gozo" },
    description: {
      de: "Victoria, auch als Rabat bekannt, ist die Hauptstadt von Gozo, deren Herzstück die alte befestigte Zitadelle (Cittadella) ist.",
      hu: "Victoria, más néven Rabat, Gozo fővárosa, amelynek központja az ősi erődített Citadella.",
      ro: "Victoria, cunoscută și sub numele de Rabat, este capitala insulei Gozo, cu vechea sa cetate fortificată (Cittadella) în centru.",
      en: "Victoria, also known as Rabat, is the capital city of Gozo, with the ancient fortified Citadel (Cittadella) at its heart."
    },
    facts: {
      de: ["Benannt nach der britischen Königin Victoria im Jahr 1887.", "Die Zitadelle bietet einen 360-Grad-Panoramablick auf Gozo.", "Der Hauptplatz heißt It-Tokk."],
      hu: ["Viktória brit királynőről nevezték el 1887-ben.", "A Citadellából 360 fokos panoráma nyílik Gozóra.", "A főteret It-Tokknak hívják."],
      ro: ["Numit după regina britanică Victoria în 1887.", "Cetatea oferă vederi panoramice de 360 de grade asupra Gozo.", "Piața sa principală se numește It-Tokk."],
      en: ["Named after the British Queen Victoria in 1887.", "The Citadel offers 360-degree panoramic views of Gozo.", "Its main square is called It-Tokk."]
    }
  },
  {
    id: "city-xewkija-extra",
    type: "city",
    parent: "MT-64",
    coords: [14.2592, 36.0331],
    name: { de: "Xewkija", hu: "Xewkija", ro: "Xewkija", en: "Xewkija" },
    description: {
      de: "Xewkija ist eines der ältesten Dörfer auf Gozo, das von der riesigen Kuppel seiner Rotundenkirche dominiert wird, die dem Heiligen Johannes dem Täufer gewidmet ist.",
      hu: "Xewkija Gozo egyik legrégebbi faluja, amelyet a hatalmas kupolájú, Keresztelő Szent Jánosnak szentelt rotundatemploma ural.",
      ro: "Xewkija este unul dintre cele mai vechi sate de pe Gozo, dominat de cupola masivă a bisericii sale rotonde, dedicată Sfântului Ioan Botezătorul.",
      en: "Xewkija is one of Gozo's oldest villages, dominated by the massive dome of its Rotunda church, dedicated to St. John the Baptist."
    },
    facts: {
      de: ["Die Kuppel ist eine der größten in Europa.", "Der Name leitet sich vom arabischen Wort für 'Dornen' ab.", "Heimat der ältesten Windmühle auf Gozo."],
      hu: ["A kupolája az egyik legnagyobb Európában.", "A neve az arab 'tövis' szóból származik.", "Itt található Gozo legrégebbi szélmalma."],
      ro: ["Cupola sa este una dintre cele mai mari din Europa.", "Numele derivă din cuvântul arab pentru 'spini'.", "Găzduiește cea mai veche moară de vânt de pe Gozo."],
      en: ["Its dome is one of the largest in Europe.", "The name derives from the Arabic word for 'thorns'.", "Home to the oldest windmill in Gozo."]
    }
  },
  {
    id: "city-nadur-extra",
    type: "city",
    parent: "MT-37",
    coords: [14.2883, 36.0378],
    name: { de: "Nadur", hu: "Nadur", ro: "Nadur", en: "Nadur" },
    description: {
      de: "Nadur liegt auf einem Plateau im Osten Gozos und ist bekannt für seinen lebhaften Karneval, seinen maritimen Einfluss und die Ta' Kenuna Tower.",
      hu: "Nadur Gozo keleti részén, egy fennsíkon fekszik, és élénk karneváljáról, tengerészeti hatásáról és a Ta' Kenuna-toronyról ismert.",
      ro: "Situat pe un platou în estul Gozo, Nadur este renumit pentru carnavalul său plin de viață, influența sa maritimă și Turnul Ta' Kenuna.",
      en: "Situated on a plateau in eastern Gozo, Nadur is famous for its vibrant carnival, its maritime influence, and the Ta' Kenuna Tower."
    },
    facts: {
      de: ["Der Name bedeutet 'Aussichtspunkt'.", "Der Nadur-Karneval ist sowohl makaber als auch satirisch.", "Die Strände San Blas und Ramla sind in der Nähe."],
      hu: ["A neve 'kilátópontot' jelent.", "A naduri karnevál egyszerre hátborzongató és szatirikus.", "A San Blas és a Ramla strandok a közelben vannak."],
      ro: ["Numele înseamnă 'punct de observație'.", "Carnavalul din Nadur este atât macabru, cât și satiric.", "Plajele San Blas și Ramla sunt în apropiere."],
      en: ["The name means 'lookout'.", "The Nadur carnival is both macabre and satirical.", "The beaches of San Blas and Ramla are nearby."]
    }
  },
  {
    id: "city-ghajnsielem-extra",
    type: "city",
    parent: "MT-16",
    coords: [14.2725, 36.0272],
    name: { de: "Għajnsielem", hu: "Għajnsielem", ro: "Għajnsielem", en: "Għajnsielem" },
    description: {
      de: "Għajnsielem ist das erste Dorf, das Besucher auf Gozo sehen, da es den Hafen von Mġarr überblickt, den Ankunftspunkt der Fähre von Malta.",
      hu: "Għajnsielem az első falu, amelyet a látogatók Gozón meglátnak, mivel a Mġarr kikötőre néz, amely a Máltáról érkező komp érkezési pontja.",
      ro: "Għajnsielem este primul sat pe care îl văd vizitatorii pe Gozo, deoarece are vedere la portul Mġarr, punctul de sosire al feribotului din Malta.",
      en: "Għajnsielem is the first village seen by visitors to Gozo as it overlooks Mġarr Harbour, the arrival point of the ferry from Malta."
    },
    facts: {
      de: ["Der Name bedeutet 'Friedliche Quelle'.", "Heimat des Fort Chambray, einer großen Festung.", "Das jährliche Krippenspiel 'Bethlehem f'Għajnsielem' ist eine große Attraktion."],
      hu: ["A neve 'Békés Forrást' jelent.", "Itt található a Fort Chambray, egy nagy erőd.", "Az éves 'Bethlehem f'Għajnsielem' betlehemes játék nagy vonzerő."],
      ro: ["Numele înseamnă 'Izvor Pașnic'.", "Găzduiește Fort Chambray, o fortăreață mare.", "Evenimentul anual de naștere 'Bethlehem f'Għajnsielem' este o atracție majoră."],
      en: ["The name means 'Peaceful Spring'.", "Home to Fort Chambray, a large fortification.", "The annual 'Bethlehem f'Għajnsielem' nativity village is a major attraction."]
    }
  },
  {
    id: "city-qala-extra",
    type: "city",
    parent: "MT-43",
    coords: [14.2961, 36.0353],
    name: { de: "Qala", hu: "Qala", ro: "Qala", en: "Qala" },
    description: {
      de: "Qala ist das östlichste Dorf auf Gozo, bekannt für seine unberührte Küste, die atemberaubende Aussicht auf Comino und Malta und die Ħondoq ir-Rummien Bucht.",
      hu: "Qala Gozo legkeletibb faluja, amely érintetlen tengerpartjáról, a Cominóra és Máltára nyíló lélegzetelállító kilátásról, valamint a Ħondoq ir-Rummien-öbölről ismert.",
      ro: "Qala este cel mai estic sat de pe Gozo, cunoscut pentru coasta sa neatinsă, priveliștile uimitoare spre Comino și Malta și golful Ħondoq ir-Rummien.",
      en: "Qala is the easternmost village in Gozo, known for its pristine coastline, stunning views of Comino and Malta, and Ħondoq ir-Rummien bay."
    },
    facts: {
      de: ["Der Name bedeutet 'geschützter Hafen'.", "In der Nähe befindet sich eine der wenigen verbliebenen Windmühlen auf Gozo.", "Die Pfarrkirche ist dem Heiligen Josef gewidmet."],
      hu: ["A neve 'védett kikötőt' jelent.", "A közelben található Gozo kevés megmaradt szélmalmának egyike.", "A plébániatemplomot Szent Józsefnek szentelték."],
      ro: ["Numele înseamnă 'port protejat'.", "O moară de vânt, una dintre puținele rămase pe Gozo, se află în apropiere.", "Biserica parohială este dedicată Sfântului Iosif."],
      en: ["The name means 'sheltered harbour'.", "One of Gozo's few remaining windmills is located nearby.", "The parish church is dedicated to St. Joseph."]
    }
  },
  {
    id: "city-gharb-extra",
    type: "city",
    parent: "MT-13",
    coords: [14.2081, 36.0611],
    name: { de: "Għarb", hu: "Għarb", ro: "Għarb", en: "Għarb" },
    description: {
      de: "Għarb ist ein traditionelles Dorf im Westen Gozos, bekannt für seine malerische Pfarrkirche, das Folkloremuseum und das Heiligtum Ta' Pinu.",
      hu: "Għarb egy hagyományos falu Gozo nyugati részén, amely festői plébániatemplomáról, folklórmúzeumáról és a Ta' Pinu kegyhelyről ismert.",
      ro: "Għarb este un sat tradițional în vestul Gozo, cunoscut pentru biserica sa parohială pitorească, muzeul de folclor și Sanctuarul Ta' Pinu.",
      en: "Għarb is a traditional village in western Gozo, known for its picturesque parish church, folklore museum, and the Ta' Pinu Sanctuary."
    },
    facts: {
      de: ["Der Name bedeutet 'Westen'.", "Die Basilika Mariä Heimsuchung ist ein barockes Juwel.", "Das Dorf ist bekannt für die Herstellung von Kunsthandwerk."],
      hu: ["A neve 'nyugatot' jelent.", "A Sarlós Boldogasszony-bazilika egy barokk ékszer.", "A falu a kézműves termékek készítéséről ismert."],
      ro: ["Numele înseamnă 'vest'.", "Bazilica Vizitării este o bijuterie barocă.", "Satul este cunoscut pentru producția sa de artizanat."],
      en: ["The name means 'West'.", "The Basilica of the Visitation is a baroque gem.", "The village is known for its craftsmanship."]
    }
  },
  {
    id: "city-san-lawrenz-extra",
    type: "city",
    parent: "MT-50",
    coords: [14.2056, 36.0553],
    name: { de: "San Lawrenz", hu: "San Lawrenz", ro: "San Lawrenz", en: "San Lawrenz" },
    description: {
      de: "San Lawrenz ist ein kleines, ruhiges Dorf an der Westküste Gozos, in der Nähe des ehemaligen Azure Window und des Dwejra Bay.",
      hu: "San Lawrenz egy kicsi, csendes falu Gozo nyugati partján, az egykori Azúr Ablak és a Dwejra-öböl közelében.",
      ro: "San Lawrenz este un mic sat liniștit pe coasta de vest a Gozo, aproape de fosta Fereastră Albastră și de Golful Dwejra.",
      en: "San Lawrenz is a small, tranquil village on Gozo's west coast, close to the former Azure Window site and Dwejra Bay."
    },
    facts: {
      de: ["Nach dem Heiligen Laurentius benannt.", "Dwejra ist ein Hotspot für Geologie, Tierwelt und Tauchen.", "Der Fungus Rock ist eine weitere bemerkenswerte Sehenswürdigkeit in der Nähe."],
      hu: ["Szent Lőrincről nevezték el.", "Dwejra a geológia, az élővilág és a búvárkodás központja.", "A Gomba-szikla egy másik figyelemre méltó látnivaló a közelben."],
      ro: ["Numit după Sfântul Laurențiu.", "Dwejra este un punct fierbinte pentru geologie, faună sălbatică și scufundări.", "Fungus Rock este un alt punct de reper notabil în apropiere."],
      en: ["Named after St. Lawrence.", "Dwejra is a hotspot for geology, wildlife, and diving.", "Fungus Rock is another notable landmark nearby."]
    }
  },
  {
    id: "city-xlendi-extra",
    type: "city",
    parent: "MT-33",
    coords: [14.2169, 36.0311],
    name: { de: "Xlendi", hu: "Xlendi", ro: "Xlendi", en: "Xlendi" },
    description: {
      de: "Xlendi ist ein beliebter Badeort in einer malerischen, fjordähnlichen Bucht, die von hohen Klippen flankiert wird.",
      hu: "Xlendi egy népszerű tengerparti üdülőhely egy festői, fjordszerű öbölben, amelyet magas sziklák szegélyeznek.",
      ro: "Xlendi este o stațiune balneară populară, situată într-un golf pitoresc, asemănător unui fiord, flancat de stânci înalte.",
      en: "Xlendi is a popular seaside resort set in a picturesque, fjord-like bay, flanked by high cliffs."
    },
    facts: {
      de: ["Der Name leitet sich möglicherweise von einem byzantinischen Schiffstyp ab.", "Ein großartiger Ort zum Tauchen und Schnorcheln.", "Der Xlendi Tower bewacht den Eingang zur Bucht."],
      hu: ["A neve valószínűleg egy bizánci hajótípusból származik.", "Kiváló hely a búvárkodáshoz és a sznorkelezéshez.", "A Xlendi-torony őrzi az öböl bejáratát."],
      ro: ["Numele derivă posibil de la un tip de navă bizantină.", "Un loc minunat pentru scufundări și snorkeling.", "Turnul Xlendi păzește intrarea în golf."],
      en: ["The name possibly derives from a type of Byzantine ship.", "A great spot for diving and snorkeling.", "The Xlendi Tower guards the entrance to the bay."]
    }
  },
  {
    id: "city-munxar-extra",
    type: "city",
    parent: "MT-33",
    coords: [14.2269, 36.0306],
    name: { de: "Munxar", hu: "Munxar", ro: "Munxar", en: "Munxar" },
    description: {
      de: "Munxar ist ein kleines Dorf zwischen dem Xlendi-Tal und dem Tal von Marsalforn, bekannt für seine ländliche Atmosphäre.",
      hu: "Munxar egy kis falu a Xlendi-völgy és a Marsalforn-völgy között, amely vidéki hangulatáról ismert.",
      ro: "Munxar este un mic sat situat între Valea Xlendi și Valea Marsalforn, cunoscut pentru atmosfera sa rurală.",
      en: "Munxar is a small village situated between the Xlendi Valley and the valley of Marsalforn, known for its rural atmosphere."
    },
    facts: {
      de: ["Der Name bedeutet 'Bock-Säge'.", "Die Pfarrkirche ist dem Heiligen Paulus gewidmet.", "Das Dorf Xlendi ist Teil des Gemeinderats von Munxar."],
      hu: ["A neve 'fűrészbakot' jelent.", "A plébániatemplomot Szent Pálnak szentelték.", "Xlendi falu a Munxari Helyi Tanács része."],
      ro: ["Numele înseamnă 'fierăstrău'.", "Biserica parohială este dedicată Sfântului Pavel.", "Satul Xlendi face parte din consiliul local Munxar."],
      en: ["The name means 'buck-saw'.", "The parish church is dedicated to St. Paul.", "The hamlet of Xlendi is part of the Munxar Local Council."]
    }
  },
  {
    id: "city-sannat-extra",
    type: "city",
    parent: "MT-52",
    coords: [14.2344, 36.0253],
    name: { de: "Sannat", hu: "Sannat", ro: "Sannat", en: "Sannat" },
    description: {
      de: "Sannat ist ein Dorf auf Gozo, das für seine dramatischen Ta' Ċenċ-Klippen, seine reiche Flora und die traditionelle Spitzenherstellung bekannt ist.",
      hu: "Sannat egy gozói falu, amely a drámai Ta' Ċenċ-sziklákról, gazdag növényvilágáról és a hagyományos csipkeverésről ismert.",
      ro: "Sannat este un sat de pe Gozo, renumit pentru stâncile sale dramatice Ta' Ċenċ, flora bogată și fabricarea tradițională a dantelei.",
      en: "Sannat is a village in Gozo renowned for its dramatic Ta' Ċenċ Cliffs, its rich flora, and traditional lace-making."
    },
    facts: {
      de: ["Die Ta' Ċenċ-Klippen sind ein wichtiger Nistplatz für Seevögel.", "Der Ort war einst für seine Spitzenherstellung bekannt.", "Heimat mehrerer prähistorischer Überreste."],
      hu: ["A Ta' Ċenċ-sziklák fontos tengeri madárfészkelőhelyek.", "A hely egykor a csipkeverésről volt ismert.", "Számos őskori maradvány otthona."],
      ro: ["Stâncile Ta' Ċenċ sunt un important loc de cuibărit pentru păsările marine.", "Localitatea a fost odată renumită pentru fabricarea dantelei.", "Găzduiește mai multe vestigii preistorice."],
      en: ["The Ta' Ċenċ cliffs are an important seabird nesting site.", "The locality was once famous for its lace-making.", "Home to several prehistoric remains."]
    }
  },
  {
    id: "city-fontana-extra",
    type: "city",
    parent: "MT-09",
    coords: [14.2342, 36.0403],
    name: { de: "Fontana", hu: "Fontana", ro: "Fontana", en: "Fontana" },
    description: {
      de: "Fontana, auch bekannt als 'Triq tal-Għajn' (Quellenstraße), ist ein kleines Dorf in der Nähe von Victoria, das für seine immer fließenden Quellen bekannt ist.",
      hu: "Fontana, más néven 'Triq tal-Għajn' (Forrás útja), egy kis falu Victoria közelében, amely folyamatosan folyó forrásairól ismert.",
      ro: "Fontana, cunoscută și sub numele de 'Triq tal-Għajn' (Strada Izvorului), este un mic sat de lângă Victoria, renumit pentru izvoarele sale care curg mereu.",
      en: "Fontana, also known as 'Triq tal-Għajn' (Spring Street), is a small village near Victoria, known for its ever-flowing springs."
    },
    facts: {
      de: ["Die Einheimischen nutzten die Arkaden-Unterstände, um ihre Wäsche zu waschen.", "Die Pfarrkirche ist dem Heiligsten Herzen Jesu gewidmet.", "Ein sehr kleines, aber charmantes Dorf."],
      hu: ["A helyiek az árkádos menedékhelyeket használták ruháik mosására.", "A plébániatemplomot Jézus Szent Szívének szentelték.", "Nagyon kicsi, de bájos falu."],
      ro: ["Localnicii foloseau adăposturile cu arcade pentru a-și spăla rufele.", "Biserica parohială este dedicată Preasfintei Inimi a lui Iisus.", "Un sat foarte mic, dar fermecător."],
      en: ["Locals used the arched shelters to wash their laundry.", "The parish church is dedicated to the Sacred Heart of Jesus.", "A very small but charming village."]
    }
  },
  {
    id: "city-kercem-extra",
    type: "city",
    parent: "MT-22",
    coords: [14.2253, 36.0469],
    name: { de: "Kerċem", hu: "Kerċem", ro: "Kerċem", en: "Kerċem" },
    description: {
      de: "Kerċem ist ein Dorf westlich von Victoria, das in der malerischen Lunzjata-Schlucht liegt und für seine ländliche Umgebung bekannt ist.",
      hu: "Kerċem egy falu Victoriától nyugatra, a festői Lunzjata-völgyben, amely vidéki környezetéről ismert.",
      ro: "Kerċem este un sat la vest de Victoria, situat în pitoreasca Vale Lunzjata, cunoscut pentru peisajul său rural.",
      en: "Kerċem is a village to the west of Victoria, situated in the picturesque Lunzjata Valley, and known for its rural environment."
    },
    facts: {
      de: ["Der Ortsteil Santa Luċija ist bekannt für seine ruhige Atmosphäre.", "Das jährliche Fest des Heiligen Gregors ist eine wichtige traditionelle Veranstaltung.", "Eines der grünsten Gebiete auf Gozo."],
      hu: ["A Santa Luċija nevű része csendes hangulatáról ismert.", "Az éves Szent Gergely-ünnep fontos hagyományos esemény.", "Gozo egyik legzöldebb területe."],
      ro: ["Cătunul Santa Luċija este cunoscut pentru atmosfera sa liniștită.", "Sărbătoarea anuală a Sfântului Grigore este un eveniment tradițional important.", "Una dintre cele mai verzi zone de pe Gozo."],
      en: ["The hamlet of Santa Luċija is known for its tranquil atmosphere.", "The annual feast of St. Gregory is an important traditional event.", "One of the greenest areas in Gozo."]
    }
  },
  {
    id: "city-xaghra-extra",
    type: "city",
    parent: "MT-62",
    coords: [14.2667, 36.0500],
    name: { de: "Xagħra", hu: "Xagħra", ro: "Xagħra", en: "Xagħra" },
    description: {
      de: "Xagħra ist ein großes Dorf auf Gozo, bekannt für die zum UNESCO-Weltkulturerbe gehörenden Ġgantija-Tempel, die Calypso-Höhle und die Ramla Bay.",
      hu: "Xagħra egy nagy falu Gozón, amely az UNESCO Világörökség részét képező Ġgantija templomokról, a Kalüpszó-barlangról és a Ramla-öbölről ismert.",
      ro: "Xagħra este un sat mare de pe Gozo, renumit pentru templele Ġgantija, sit al Patrimoniului Mondial UNESCO, Peștera Calypso și Golful Ramla.",
      en: "Xagħra is a large village in Gozo, famous for the UNESCO-listed Ġgantija Temples, Calypso's Cave, and Ramla Bay."
    },
    facts: {
      de: ["Die Ġgantija-Tempel gehören zu den ältesten freistehenden Bauwerken der Welt.", "Die Ramla Bay ist bekannt für ihren einzigartigen rötlich-goldenen Sand.", "Die Ta' Kola Windmühle ist eine der wenigen erhaltenen Windmühlen."],
      hu: ["A Ġgantija templomok a világ legrégebbi szabadon álló építményei közé tartoznak.", "A Ramla-öböl egyedülálló vöröses-arany homokjáról ismert.", "A Ta' Kola szélmalom egyike a kevés megmaradt szélmalomnak."],
      ro: ["Templele Ġgantija sunt printre cele mai vechi structuri de sine stătătoare din lume.", "Golful Ramla este cunoscut pentru nisipul său unic roșiatic-auriu.", "Moara de vânt Ta' Kola este una dintre puținele mori de vânt care au supraviețuit."],
      en: ["The Ġgantija temples are among the world's oldest free-standing structures.", "Ramla Bay is known for its unique reddish-golden sand.", "The Ta' Kola Windmill is one of the few surviving windmills."]
    }
  },
  {
    id: "city-zebbug-gozo-extra",
    type: "city",
    parent: "MT-63",
    coords: [14.2386, 36.0711],
    name: { de: "Żebbuġ, Gozo", hu: "Żebbuġ, Gozo", ro: "Żebbuġ, Gozo", en: "Żebbuġ, Gozo" },
    description: {
      de: "Żebbuġ liegt auf einem Hügel im Norden Gozos und ist bekannt für seine atemberaubende Aussicht, seine Onyx-Vorkommen und die malerische Küste.",
      hu: "Żebbuġ Gozo északi részén, egy dombon fekszik, és lenyűgöző kilátásáról, ónix lelőhelyeiről és festői tengerpartjáról ismert.",
      ro: "Situat pe un deal în nordul Gozo, Żebbuġ este renumit pentru priveliștile sale uimitoare, zăcămintele de onix și coasta pitorească.",
      en: "Żebbuġ, perched on a hill in northern Gozo, is renowned for its stunning views, its onyx deposits, and its scenic coastline."
    },
    facts: {
      de: ["Der Name bedeutet 'wilder Olivenbaum'.", "Die Küste umfasst die Salzpfannen von Xwejni.", "Bietet einen Panoramablick auf die Landschaft von Gozo."],
      hu: ["A neve 'vad olajfát' jelent.", "A tengerpartja magában foglalja a Xwejni sólepárlókat.", "Panorámás kilátást nyújt Gozo tájára."],
      ro: ["Numele înseamnă 'măslin sălbatic'.", "Coasta include salinele Xwejni.", "Oferă vederi panoramice ale peisajului gozitan."],
      en: ["The name means 'wild olive tree'.", "The coastline includes the Xwejni Salt Pans.", "Offers panoramic views of the Gozitan countryside."]
    }
  },
  {
    id: "city-ghasri-extra",
    type: "city",
    parent: "MT-12",
    coords: [14.2267, 36.0658],
    name: { de: "Għasri", hu: "Għasri", ro: "Għasri", en: "Għasri" },
    description: {
      de: "Għasri ist das kleinste Dorf auf Gozo, bekannt für das abgeschiedene, fjordähnliche Wied il-Għasri und den Leuchtturm von Giordan.",
      hu: "Għasri Gozo legkisebb faluja, amely a félreeső, fjordszerű Wied il-Għasriról és a Giordan-világítótoronyról ismert.",
      ro: "Għasri este cel mai mic sat de pe Gozo, cunoscut pentru Wied il-Għasri, un golf izolat asemănător unui fiord, și pentru Farul Giordan.",
      en: "Għasri is the smallest village in Gozo, known for the secluded, fjord-like Wied il-Għasri and the Giordan Lighthouse."
    },
    facts: {
      de: ["Wied il-Għasri ist ein beliebter Ort zum Tauchen.", "Der Giordan-Leuchtturm bietet spektakuläre Ausblicke.", "Ein sehr ruhiges und friedliches Dorf."],
      hu: ["A Wied il-Għasri népszerű búvárhely.", "A Giordan-világítótoronyból lenyűgöző kilátás nyílik.", "Nagyon csendes és békés falu."],
      ro: ["Wied il-Għasri este un loc popular pentru scufundări.", "Farul Giordan oferă priveliști spectaculoase.", "Un sat foarte liniștit și pașnic."],
      en: ["Wied il-Għasri is a popular spot for diving.", "The Giordan Lighthouse offers spectacular views.", "A very quiet and peaceful village."]
    }
  },
  {
    id: "city-marsalforn-extra",
    type: "city",
    parent: "MT-63",
    coords: [14.2619, 36.0711],
    name: { de: "Marsalforn", hu: "Marsalforn", ro: "Marsalforn", en: "Marsalforn" },
    description: {
      de: "Marsalforn ist der beliebteste Ferienort auf Gozo, bekannt für seine lebhafte Promenade, Restaurants und Salzpfannen.",
      hu: "Marsalforn a legnépszerűbb üdülőhely Gozón, amely élénk sétányáról, éttermeiről és sólepárlóiról ismert.",
      ro: "Marsalforn este cea mai populară stațiune de pe Gozo, cunoscută pentru promenada sa plină de viață, restaurante și saline.",
      en: "Marsalforn is the most popular resort in Gozo, known for its vibrant promenade, restaurants, and salt pans."
    },
    facts: {
      de: ["Einst ein wichtiger Hafen auf Gozo.", "Die Salzpfannen entlang der Küste werden noch heute genutzt.", "Ein Zentrum für Tauchschulen."],
      hu: ["Egykor fontos kikötő volt Gozón.", "A part menti sólepárlókat ma is használják.", "A búváriskolák központja."],
      ro: ["Odată un port important pe Gozo.", "Salinele de-a lungul coastei sunt încă în uz astăzi.", "Un centru pentru școlile de scufundări."],
      en: ["Once an important port in Gozo.", "The salt pans along the coast are still in use today.", "A hub for diving schools."]
    }
  },
  {
    id: "city-mtarfa-extra",
    type: "city",
    parent: "MT-35",
    coords: [14.3944, 35.8906],
    name: { de: "Mtarfa", hu: "Mtarfa", ro: "Mtarfa", en: "Mtarfa" },
    description: {
      de: "Mtarfa ist eine kleine Stadt mit Blick auf Mdina, bekannt für ihre Vergangenheit als britische Militärkaserne und ihren markanten Glockenturm.",
      hu: "Mtarfa egy kisváros, amely Mdinára néz, és egykori brit katonai laktanyájáról és jellegzetes óratornyáról ismert.",
      ro: "Mtarfa este un mic oraș cu vedere la Mdina, cunoscut pentru trecutul său ca barăci militare britanice și pentru turnul său cu ceas distinctiv.",
      en: "Mtarfa is a small town overlooking Mdina, known for its past as a British military barracks and its distinctive clock tower."
    },
    facts: {
      de: ["Das Royal Naval Hospital ist ein großes, denkmalgeschütztes Gebäude.", "Der Glockenturm wurde 1895 erbaut.", "Bietet einen Panoramablick auf einen großen Teil Maltas."],
      hu: ["A Királyi Haditengerészeti Kórház egy nagy, műemlék jellegű épület.", "Az óratornyot 1895-ben építették.", "Panorámás kilátást nyújt Málta nagy részére."],
      ro: ["Spitalul Marinei Regale este o clădire mare, protejată.", "Turnul cu ceas a fost construit în 1895.", "Oferă vederi panoramice asupra unei mari părți din Malta."],
      en: ["The Royal Naval Hospital is a large, listed building.", "The clock tower was built in 1895.", "Offers panoramic views over a large part of Malta."]
    }
  }
];
