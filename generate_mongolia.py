import json

pois = [
    {
        "id": "mn-ulaanbaatar-cities-v2",
        "type": "state-capital",
        "parent": "MN-1",
        "coords": [106.9177, 47.9200],
        "name": {
            "de": "Ulaanbaatar",
            "hu": "Ulánbátor",
            "ro": "Ulaanbaatar",
            "en": "Ulaanbaatar"
        },
        "description": {
            "de": "Ulaanbaatar ist die Kälte-Hauptstadt der Welt, in der fast die Hälfte der mongolischen Bevölkerung lebt. Sie liegt im Tal des Flusses Tuul und vereint sowjetische Architektur mit modernen Wolkenkratzern.",
            "hu": "Ulánbátor a világ leghidegebb fővárosa, ahol a mongol lakosság közel fele él. A Tuul folyó völgyében fekszik, és a szovjet építészetet modern felhőkarcolókkal ötvözi.",
            "ro": "Ulaanbaatar este cea mai rece capitală din lume, unde trăiește aproape jumătate din populația Mongoliei. Situată pe valea râului Tuul, îmbină arhitectura sovietică cu zgârie-nori moderni.",
            "en": "Ulaanbaatar is the coldest capital city in the world, home to nearly half of Mongolia's population. Situated in the Tuul River valley, it blends Soviet architecture with modern skyscrapers."
        },
        "facts": {
            "de": ["Gegründet 1639 als mobiles Klosterzentrum.", "Die Durchschnittstemperatur im Januar liegt bei -36°C.", "Das Gandantegchinlen-Kloster beherbergt eine 26 m hohe Buddha-Statue."],
            "hu": ["1639-ben alapították mozgó kolostorközpontként.", "A januári átlaghőmérséklet -36°C körül mozog.", "A Gandantegcsinlen kolostorban egy 26 méteres Buddha szobor áll."],
            "ro": ["Fondată în 1639 ca centru monahal mobil.", "Temperatura medie în ianuarie este de -36°C.", "Mănăstirea Gandantegchinlen găzduiește o statuie a lui Buddha de 26 m."],
            "en": ["Founded in 1639 as a mobile monastic center.", "The average temperature in January is around -36°C.", "The Gandantegchinlen Monastery houses a 26m-tall Buddha statue."]
        }
    },
    {
        "id": "mn-erdenet-cities-v2",
        "type": "city",
        "parent": "MN-035",
        "coords": [104.0833, 49.0333],
        "name": {
            "de": "Erdenet",
            "hu": "Erdenet",
            "ro": "Erdenet",
            "en": "Erdenet"
        },
        "description": {
            "de": "Erdenet ist die zweitgrößte Stadt der Mongolei und wurde 1974 speziell für den Abbau von Kupfer und Molybdän gegründet. Die riesige Tagebaumine prägt noch heute das Stadtbild.",
            "hu": "Erdenet Mongólia második legnagyobb városa, amelyet 1974-ben alapítottak a réz és molibdén bányászatára. A hatalmas külszíni bánya ma is meghatározza a város képét.",
            "ro": "Erdenet este al doilea oraș ca mărime din Mongolia, fondat în 1974 special pentru extracția cuprului și molibdenului. Mina imensă în carieră deschisă domină și astăzi peisajul.",
            "en": "Erdenet is the second-largest city in Mongolia, founded in 1974 specifically for copper and molybdenum mining. The massive open-pit mine still dominates the cityscape."
        },
        "facts": {
            "de": ["Heimat der viertgrößten Kupfermine der Welt.", "Liegt in der Provinz Orchon im Norden des Landes.", "Die Stadt produziert einen Großteil der mongolischen Exporte."],
            "hu": ["A világ negyedik legnagyobb rézbányájának otthona.", "Az Orhon tartományban fekszik az ország északi részén.", "A város adja a mongol export jelentős részét."],
            "ro": ["Găzduiește a patra mină de cupru ca mărime din lume.", "Situat în provincia Orkhon din nordul țării.", "Orașul produce o mare parte din exporturile Mongoliei."],
            "en": ["Home to the fourth-largest copper mine in the world.", "Located in the Orkhon province in the north.", "The city accounts for a large portion of Mongolian exports."]
        }
    },
    {
        "id": "mn-darkhan-cities-v2",
        "type": "city",
        "parent": "MN-037",
        "coords": [105.9228, 49.4862],
        "name": {
            "de": "Darchan",
            "hu": "Darhan",
            "ro": "Darkhan",
            "en": "Darkhan"
        },
        "description": {
            "de": "Darchan wurde 1961 mit massiver sowjetischer Unterstützung als Industriezentrum im Norden erbaut. Der Name bedeutet 'Schmied', was auf die Bedeutung der Metallindustrie hinweist.",
            "hu": "Darhant 1961-ben építették masszív szovjet segítséggel mint északi ipari központot. A neve 'kovácsot' jelent, amely a fémipar jelentőségére utal.",
            "ro": "Darkhan a fost construit în 1961 cu un sprijin sovietic masiv ca centru industrial în nord. Numele înseamnă 'fierar', indicând importanța industriei metalurgice.",
            "en": "Darkhan was built in 1961 with massive Soviet support as an industrial hub in the north. The name means 'blacksmith', pointing to the importance of its metal industry."
        },
        "facts": {
            "de": ["Planstadt mit breiten Alleen und Industrieparks.", "Liegt 230 Kilometer nördlich von Ulaanbaatar.", "Besitzt eine große Gemeinde von Kasachen und Russen."],
            "hu": ["Tervezett város széles sugárutakkal és ipari parkokkal.", "230 kilométerre északra fekszik Ulánbátortól.", "Nagy kazah és orosz közösség él itt."],
            "ro": ["Oraș planificat cu bulevarde largi și parcuri industriale.", "Situat la 230 de kilometri nord de Ulaanbaatar.", "Are o comunitate mare de kazahi și ruși."],
            "en": ["Planned city with wide boulevards and industrial parks.", "Located 230 kilometers north of Ulaanbaatar.", "Has a large community of Kazakhs and Russians."]
        }
    },
    {
        "id": "mn-choibalsan-cities-v2",
        "type": "city",
        "parent": "MN-061",
        "coords": [114.5326, 48.0797],
        "name": {
            "de": "Tschoibalsan",
            "hu": "Csojbalszan",
            "ro": "Choibalsan",
            "en": "Choibalsan"
        },
        "description": {
            "de": "Tschoibalsan ist das wirtschaftliche Zentrum im Osten der Mongolei. Die Stadt war jahrzehntelang ein wichtiger sowjetischer Militärstützpunkt nahe der chinesischen Grenze.",
            "hu": "Csojbalszan Kelet-Mongólia gazdasági központja. A város évtizedeken át fontos szovjet katonai bázis volt a kínai határ közelében.",
            "ro": "Choibalsan este centrul economic al estului Mongoliei. Orașul a fost zeci de ani o importantă bază militară sovietică lângă granița cu China.",
            "en": "Choibalsan is the economic hub of eastern Mongolia. For decades, the city served as a major Soviet military base near the Chinese border."
        },
        "facts": {
            "de": ["Benannt nach dem kommunistischen Führer Chorloogiin Tschoibalsan.", "Liegt am Fluss Cherlen, einem Zufluss des Amur.", "In der Nähe fand 1939 die Schlacht am Chalchin Gol statt."],
            "hu": ["Horlógín Csojbalszan kommunista vezetőről kapta a nevét.", "A Kerülen folyó partján fekszik, amely az Amur egyik vízgyűjtője.", "A közelben zajlott 1939-ben a halhin-goli csata."],
            "ro": ["Numit după liderul comunist Khorloogiin Choibalsan.", "Situat pe râul Kherlen, un afluent al fluviului Amur.", "Bătălia de la Khalkhin Gol a avut loc în apropiere în 1939."],
            "en": ["Named after communist leader Khorloogiin Choibalsan.", "Located on the Kherlen River, part of the Amur basin.", "The 1939 Battle of Khalkhin Gol took place nearby."]
        }
    },
    {
        "id": "mn-moron-cities-v2",
        "type": "city",
        "parent": "MN-041",
        "coords": [100.1625, 49.6343],
        "name": {
            "de": "Mörön",
            "hu": "Mörön",
            "ro": "Mörön",
            "en": "Mörön"
        },
        "description": {
            "de": "Mörön fungiert als administratives Zentrum der Provinz Chöwsgöl im bergigen Norden. Von hier aus starten die meisten Expeditionen zum berühmten Chöwsgöl-See.",
            "hu": "Mörön a hegyvidéki északi Hövszgöl tartomány közigazgatási központjaként működik. Innen indul a legtöbb expedíció a híres Hövszgöl-tóhoz.",
            "ro": "Mörön servește drept centru administrativ al provinciei Khövsgöl din nordul muntos. Majoritatea expedițiilor spre faimosul lac Khövsgöl pornesc de aici.",
            "en": "Mörön serves as the administrative center of the mountainous Khövsgöl province in the north. Most expeditions to the famous Lake Khövsgöl depart from here."
        },
        "facts": {
            "de": ["Bedeutet auf Mongolisch wörtlich 'Fluss'.", "Die Stadt hat einen Flughafen mit Inlandsflügen.", "Das Danzadarjaa-Kloster ist eine wichtige lokale Sehenswürdigkeit."],
            "hu": ["A neve mongolul szó szerint 'folyót' jelent.", "A város repülőtere belföldi járatokat szolgál ki.", "A Danzadarzsaa kolostor fontos helyi látványosság."],
            "ro": ["Numele înseamnă literal 'râu' în mongolă.", "Orașul are un aeroport care deservește zboruri interne.", "Mănăstirea Danzadarjaa este un punct de atracție local important."],
            "en": ["The name literally means 'river' in Mongolian.", "The city features an airport serving domestic flights.", "The Danzadarjaa Monastery is an important local landmark."]
        }
    },
    {
        "id": "mn-khovd-cities-v2",
        "type": "city",
        "parent": "MN-043",
        "coords": [91.6419, 48.0056],
        "name": {
            "de": "Chowd",
            "hu": "Hovd",
            "ro": "Khovd",
            "en": "Khovd"
        },
        "description": {
            "de": "Chowd ist eine der ältesten Städte der Mongolei mit einer Geschichte, die bis ins 17. Jahrhundert zurückreicht. Sie liegt am Fuße des Altai-Gebirges und ist für ihre multikulturelle Bevölkerung bekannt.",
            "hu": "Hovd Mongólia egyik legrégebbi városa, amelynek története a 17. századig nyúlik vissza. Az Altaj-hegység lábánál fekszik, és sokszínű lakosságáról ismert.",
            "ro": "Khovd este unul dintre cele mai vechi orașe din Mongolia, cu o istorie care datează din secolul al XVII-lea. Situat la poalele Munților Altai, este cunoscut pentru populația sa multiculturală.",
            "en": "Khovd is one of Mongolia's oldest cities, with a history dating back to the 17th century. Situated at the foothills of the Altai Mountains, it is known for its multicultural population."
        },
        "facts": {
            "de": ["War früher eine bedeutende Festung der Qing-Dynastie.", "Die Ruinen der alten Mandschu-Festung sind noch sichtbar.", "Berühmt für den Anbau von Wassermelonen in der Wüste."],
            "hu": ["Korábban a Csing-dinasztia jelentős erődje volt.", "A régi mandzsu erőd romjai ma is láthatók.", "Híres a sivatagi görögdinnye-termesztéséről."],
            "ro": ["A fost anterior o fortăreață importantă a dinastiei Qing.", "Ruinele vechii cetăți manciuriene sunt încă vizibile.", "Faimos pentru cultivarea pepenilor verzi în deșert."],
            "en": ["Formerly an important fortress of the Qing Dynasty.", "The ruins of the old Manchu fort are still visible.", "Famous for growing watermelons in the desert."]
        }
    },
    {
        "id": "mn-olgii-cities-v2",
        "type": "city",
        "parent": "MN-071",
        "coords": [89.9668, 48.9667],
        "name": {
            "de": "Ölgii",
            "hu": "Ölgij",
            "ro": "Ölgii",
            "en": "Ölgii"
        },
        "description": {
            "de": "Ölgii ist das Zentrum der kasachischen Minderheit in der westlichen Mongolei. Die Kultur ist hier vom Islam geprägt, und die Stadt ist weltweit für ihre Tradition der Adlerjagd berühmt.",
            "hu": "Ölgij a nyugat-mongóliai kazah kisebbség központja. A kultúrát itt az iszlám határozza meg, és a város világszerte híres a sasos vadászat hagyományáról.",
            "ro": "Ölgii este centrul minorității kazahe din vestul Mongoliei. Cultura de aici este influențată de islam, iar orașul este faimos la nivel mondial pentru tradiția sa de vânătoare cu vulturi.",
            "en": "Ölgii is the center of the Kazakh minority in western Mongolia. The culture here is influenced by Islam, and the city is world-famous for its eagle hunting tradition."
        },
        "facts": {
            "de": ["Gastgeber des jährlichen Golden Eagle Festivals im Oktober.", "Die einzige mehrheitlich muslimische Provinzhauptstadt der Mongolei.", "Moscheen dominieren das Stadtbild statt buddhistischer Tempel."],
            "hu": ["Az évente októberben megrendezett Arany Sas Fesztivál otthona.", "Mongólia egyetlen muszlim többségű tartományi fővárosa.", "Buddhista templomok helyett mecsetek uralják a városképet."],
            "ro": ["Găzduiește anualul Festival al Vulturului de Aur în octombrie.", "Singura capitală de provincie cu majoritate musulmană din Mongolia.", "Moscheile domină peisajul urban în locul templelor budiste."],
            "en": ["Hosts the annual Golden Eagle Festival in October.", "The only Muslim-majority provincial capital in Mongolia.", "Mosques dominate the cityscape instead of Buddhist temples."]
        }
    },
    {
        "id": "mn-ulaangom-cities-v2",
        "type": "city",
        "parent": "MN-046",
        "coords": [92.0667, 50.0833],
        "name": {
            "de": "Ulaangom",
            "hu": "Ulaangom",
            "ro": "Ulaangom",
            "en": "Ulaangom"
        },
        "description": {
            "de": "Ulaangom liegt nahe der russischen Grenze in einer extrem klimatischen Zone im Uws-Becken. Die Sommer sind sehr heiß, während die Winter zu den kältesten des Landes zählen.",
            "hu": "Ulaangom az orosz határ közelében, az Uvsz-medence szélsőséges éghajlatú zónájában található. A nyarak nagyon forrók, míg a telek az ország leghidegebbjei közé tartoznak.",
            "ro": "Ulaangom este situat aproape de granița cu Rusia, într-o zonă climatică extremă din bazinul Uvs. Verile sunt foarte fierbinți, în timp ce iernile sunt printre cele mai reci din țară.",
            "en": "Ulaangom is located near the Russian border in an extreme climatic zone within the Uvs Basin. Summers are very hot, while winters are among the coldest in the country."
        },
        "facts": {
            "de": ["Liegt nur 26 km vom Uws Nuur, dem größten See der Mongolei, entfernt.", "Die Region ist ein UNESCO-Biosphärenreservat.", "Das Uws-Becken gilt als Wetterscheide Zentralasiens."],
            "hu": ["Mindössze 26 km-re fekszik az Uvsz-nurtól, Mongólia legnagyobb tavától.", "A régió az UNESCO bioszféra-rezervátum része.", "Az Uvsz-medencét Közép-Ázsia időjárás-választójának tartják."],
            "ro": ["Situat la doar 26 km de Uvs Nuur, cel mai mare lac din Mongolia.", "Regiunea este o rezervație a biosferei UNESCO.", "Bazinul Uvs este considerat o barieră meteorologică în Asia Centrală."],
            "en": ["Located just 26 km from Uvs Nuur, Mongolia's largest lake.", "The region is a designated UNESCO biosphere reserve.", "The Uvs Basin is considered a weather divide for Central Asia."]
        }
    },
    {
        "id": "mn-arvaikheer-cities-v2",
        "type": "city",
        "parent": "MN-055",
        "coords": [102.7750, 46.2639],
        "name": {
            "de": "Arwaicheer",
            "hu": "Arvajhér",
            "ro": "Arvaikheer",
            "en": "Arvaikheer"
        },
        "description": {
            "de": "Arwaicheer liegt zentral in der Mongolei und ist das Tor zur historischen Region des Orchon-Tals. Die Stadt wurde nach einem legendären Rennpferd benannt.",
            "hu": "Arvajhér Mongólia középső részén fekszik, és az Orhon-völgy történelmi régiójának kapuja. A várost egy legendás versenylóról nevezték el.",
            "ro": "Arvaikheer este situat în centrul Mongoliei și este poarta de acces spre regiunea istorică a văii Orkhon. Orașul a fost numit după un legendar cal de curse.",
            "en": "Arvaikheer is located in central Mongolia and serves as the gateway to the historical Orkhon Valley region. The city was named after a legendary racehorse."
        },
        "facts": {
            "de": ["Ein großes Monument ehrt das Pferd Arwaicheer.", "Befindet sich auf einer Höhe von über 1900 Metern.", "Wichtiges Zentrum für den Handel mit Wolle und Fleisch."],
            "hu": ["Egy nagy emlékmű tiszteleg Arvajhér lova előtt.", "Több mint 1900 méteres tengerszint feletti magasságban található.", "A gyapjú- és húskereskedelem fontos központja."],
            "ro": ["Un mare monument onorează calul Arvaikheer.", "Situat la o altitudine de peste 1900 de metri.", "Centru important pentru comerțul cu lână și carne."],
            "en": ["A large monument honors the horse Arvaikheer.", "Located at an altitude of over 1,900 meters.", "An important center for the trade of wool and meat."]
        }
    },
    {
        "id": "mn-tsetserleg-cities-v2",
        "type": "city",
        "parent": "MN-073",
        "coords": [101.4542, 47.4750],
        "name": {
            "de": "Tsetserleg",
            "hu": "Cecerleg",
            "ro": "Tsetserleg",
            "en": "Tsetserleg"
        },
        "description": {
            "de": "Tsetserleg bedeutet übersetzt 'Garten' und gilt als eine der schönsten Provinzstädte der Mongolei. Sie ist von bewaldeten Hügeln umgeben und dient als Ausgangspunkt für Touren zu heißen Quellen.",
            "hu": "Cecerleg neve 'kertet' jelent, és Mongólia egyik legszebb tartományi városaként tartják számon. Erdős dombok veszik körül, és bázisként szolgál a hőforrásokhoz vezető túrákhoz.",
            "ro": "Tsetserleg se traduce prin 'grădină' și este considerat unul dintre cele mai frumoase orașe provinciale din Mongolia. Este înconjurat de dealuri împădurite și servește ca punct de plecare pentru izvoarele termale.",
            "en": "Tsetserleg translates to 'garden' and is considered one of the most beautiful provincial towns in Mongolia. Surrounded by forested hills, it serves as a base for trips to hot springs."
        },
        "facts": {
            "de": ["Das Zayiin-Gegen-Kloster überstand die Zerstörungen der 1930er Jahre.", "Die Landschaft ist alpiner als in den meisten anderen mongolischen Städten.", "Beliebt für Yak-Käseproduktion."],
            "hu": ["A Dzajín-Gegen kolostor túlélte az 1930-as évek pusztításait.", "A táj alpesibb jellegű, mint a legtöbb mongol városban.", "Népszerű a jak sajt termelése."],
            "ro": ["Mănăstirea Zayiin Gegeen a supraviețuit distrugerilor din anii 1930.", "Peisajul este mai alpin decât în majoritatea altor orașe mongole.", "Popular pentru producția de brânză de iac."],
            "en": ["The Zayiin Gegeen Monastery survived the destructions of the 1930s.", "The landscape is more alpine than in most other Mongolian cities.", "Popular for its yak cheese production."]
        }
    },
    {
        "id": "mn-sukhbaatar-cities-v2",
        "type": "city",
        "parent": "MN-049",
        "coords": [106.2078, 50.2314],
        "name": {
            "de": "Süchbaatar",
            "hu": "Szühebátor",
            "ro": "Sükhbaatar",
            "en": "Sükhbaatar"
        },
        "description": {
            "de": "Süchbaatar liegt am Zusammenfluss von Orchon und Selenge an der Grenze zu Russland. Die Stadt ist ein wichtiger Grenzübergang und Knotenpunkt der Transmongolischen Eisenbahn.",
            "hu": "Szühebátor az Orhon és a Szelenga folyók összefolyásánál, az orosz határnál fekszik. A város fontos határátkelőhely és a transzmongol vasút csomópontja.",
            "ro": "Sükhbaatar este situat la confluența râurilor Orkhon și Selenge, la granița cu Rusia. Orașul este un punct de trecere a frontierei și un nod al Căii Ferate Transmongole.",
            "en": "Sükhbaatar is located at the confluence of the Orkhon and Selenge rivers on the Russian border. The city is a major border crossing and a hub on the Trans-Mongolian Railway."
        },
        "facts": {
            "de": ["Benannt nach dem Nationalhelden Damdin Süchbaatar.", "Der Grenzverkehr nach Ulan-Ude (Russland) verläuft hier.", "Gegründet 1940 am Ufer der Selenge."],
            "hu": ["Damdin Szühebátor nemzeti hősről nevezték el.", "Az Ulan-Ude (Oroszország) felé tartó határforgalom itt halad át.", "1940-ben alapították a Szelenga partján."],
            "ro": ["Numit după eroul național Damdin Sükhbaatar.", "Traficul de frontieră către Ulan-Ude (Rusia) trece pe aici.", "Fondat în 1940 pe malul râului Selenge."],
            "en": ["Named after the national hero Damdin Sükhbaatar.", "Border traffic to Ulan-Ude (Russia) passes through here.", "Founded in 1940 on the banks of the Selenge River."]
        }
    },
    {
        "id": "mn-dalanzadgad-cities-v2",
        "type": "city",
        "parent": "MN-053",
        "coords": [104.4250, 43.5708],
        "name": {
            "de": "Dalandsadgad",
            "hu": "Dalanzadgad",
            "ro": "Dalanzadgad",
            "en": "Dalanzadgad"
        },
        "description": {
            "de": "Dalandsadgad ist das Tor zur Wüste Gobi in der Süd-Mongolei. Von hier starten Exkursionen zu den berühmten singenden Sanddünen von Khongoryn Els und den flammenden Klippen.",
            "hu": "Dalanzadgad a Góbi-sivatag kapuja Dél-Mongóliában. Innen indulnak az expedíciók a Khongoryn Els éneklő homokdűnéihez és a lángoló sziklákhoz.",
            "ro": "Dalanzadgad este poarta către Deșertul Gobi din sudul Mongoliei. De aici pornesc excursiile către faimoasele dune cântătoare de la Khongoryn Els și Stâncile Înflăcărate.",
            "en": "Dalanzadgad is the gateway to the Gobi Desert in southern Mongolia. Excursions to the famous singing sand dunes of Khongoryn Els and the Flaming Cliffs start from here."
        },
        "facts": {
            "de": ["Liegt am Fuße des Gobi-Altai-Gebirges.", "Hat ein Wüstenklima mit extremen Temperaturunterschieden.", "Der Flughafen verbindet die Region direkt mit Ulaanbaatar."],
            "hu": ["A Góbi-Altaj hegység lábánál fekszik.", "Sivatagi éghajlata van szélsőséges hőmérséklet-ingadozásokkal.", "A repülőtér közvetlen kapcsolatot biztosít Ulánbátorral."],
            "ro": ["Situat la poalele Munților Gobi-Altai.", "Are o climă deșertică cu diferențe extreme de temperatură.", "Aeroportul conectează regiunea direct cu Ulaanbaatar."],
            "en": ["Located at the foot of the Gobi-Altai Mountains.", "Features a desert climate with extreme temperature fluctuations.", "The airport connects the region directly with Ulaanbaatar."]
        }
    },
    {
        "id": "mn-sainshand-cities-v2",
        "type": "city",
        "parent": "MN-063",
        "coords": [110.1364, 44.8864],
        "name": {
            "de": "Sainschand",
            "hu": "Szajnsand",
            "ro": "Sainshand",
            "en": "Sainshand"
        },
        "description": {
            "de": "Sainschand ist eine Wüstenstadt an der Transmongolischen Eisenbahnstrecke in die chinesische Innere Mongolei. Die trockene Region ist spirituell bedeutsam und reich an Dinosaurierfossilien.",
            "hu": "Szajnsand egy sivatagi város a kínai Belső-Mongóliába vezető transzmongol vasútvonalon. A száraz régió spirituálisan jelentős és gazdag dinoszaurusz kövületekben.",
            "ro": "Sainshand este un oraș deșertic pe Calea Ferată Transmongolă, spre Mongolia Interioară chineză. Regiunea aridă este semnificativă spiritual și bogată în fosile de dinozauri.",
            "en": "Sainshand is a desert city on the Trans-Mongolian Railway leading into Chinese Inner Mongolia. The arid region is spiritually significant and rich in dinosaur fossils."
        },
        "facts": {
            "de": ["Das Khamariin Khiid Kloster in der Nähe gilt als Energiezentrum.", "Wurde 1931 als Verwaltungssitz der Ostgobi-Provinz gegründet.", "Das Klima ist geprägt von starken Winden und wenig Regen."],
            "hu": ["A közeli Khamariin Khiid kolostort energiaközpontnak tartják.", "1931-ben alapították a Kelet-Góbi tartomány székhelyeként.", "Az éghajlatot erős szelek és kevés csapadék jellemzi."],
            "ro": ["Mănăstirea Khamariin Khiid din apropiere este considerată un centru energetic.", "A fost fondată în 1931 ca sediu al provinciei Gobiul de Est.", "Clima se caracterizează prin vânturi puternice și ploi puține."],
            "en": ["The nearby Khamariin Khiid monastery is considered an energy center.", "Founded in 1931 as the headquarters of the East Gobi province.", "The climate is characterized by strong winds and little rain."]
        }
    },
    {
        "id": "mn-zuunmod-cities-v2",
        "type": "city",
        "parent": "MN-047",
        "coords": [106.9528, 47.7069],
        "name": {
            "de": "Dsuunmod",
            "hu": "Dzúnmod",
            "ro": "Züünmod",
            "en": "Züünmod"
        },
        "description": {
            "de": "Dsuunmod liegt nur 40 Kilometer südlich von Ulaanbaatar, getrennt durch das Bogd Khan Uul Gebirge. Die Stadt bietet einen ruhigeren Kontrast zur Hektik der Hauptstadt.",
            "hu": "Dzúnmod mindössze 40 kilométerre délre fekszik Ulánbátortól, a Bogd Kán Uul hegység által elválasztva. A város nyugodtabb kontrasztot kínál a főváros nyüzsgésével szemben.",
            "ro": "Züünmod este situat la doar 40 de kilometri sud de Ulaanbaatar, separat prin Munții Bogd Khan Uul. Orașul oferă un contrast mai liniștit față de agitația capitalei.",
            "en": "Züünmod is located just 40 kilometers south of Ulaanbaatar, separated by the Bogd Khan Uul mountains. The town offers a quieter contrast to the bustle of the capital."
        },
        "facts": {
            "de": ["Zentrum der Töv-Provinz, die Ulaanbaatar umschließt.", "In der Nähe befindet sich das Manzushir-Kloster.", "Wichtiger Ort für landwirtschaftliche Forschung in der Mongolei."],
            "hu": ["A Töv tartomány központja, amely körülveszi Ulánbátort.", "A közelben található a Mandzshusír kolostor.", "Fontos helyszíne a mongóliai mezőgazdasági kutatásoknak."],
            "ro": ["Centrul provinciei Töv, care înconjoară Ulaanbaatar.", "În apropiere se află mănăstirea Manzushir.", "Un loc important pentru cercetarea agricolă din Mongolia."],
            "en": ["Center of the Töv province, which surrounds Ulaanbaatar.", "The Manzushir Monastery is located nearby.", "An important site for agricultural research in Mongolia."]
        }
    },
    {
        "id": "mn-uliastai-cities-v2",
        "type": "city",
        "parent": "MN-057",
        "coords": [96.8444, 47.7417],
        "name": {
            "de": "Uliastai",
            "hu": "Uliasztai",
            "ro": "Uliastai",
            "en": "Uliastai"
        },
        "description": {
            "de": "Uliastai ist eine der ältesten Siedlungen der Mongolei im Zentrum des Changai-Gebirges. Zur Zeit der Qing-Dynastie war es die wichtigste Garnisonsstadt der Mandschu im Westen.",
            "hu": "Uliasztai Mongólia egyik legrégebbi települése a Hangáj-hegység központjában. A Csing-dinasztia idején a mandzsuk legfontosabb helyőrségi városa volt nyugaton.",
            "ro": "Uliastai este una dintre cele mai vechi așezări din Mongolia, în centrul Munților Khangai. În timpul dinastiei Qing, a fost cel mai important oraș-garnizoană al manciurienilor din vest.",
            "en": "Uliastai is one of the oldest settlements in Mongolia, located in the center of the Khangai Mountains. During the Qing Dynasty, it was the most important Manchu garrison town in the west."
        },
        "facts": {
            "de": ["Gegründet im Jahr 1733 als militärischer Außenposten.", "Liegt in einem Tal am Fluss Bogdiin Gol.", "Bekannt für seine extrem kalten Winter, oft unter -40°C."],
            "hu": ["1733-ban alapították katonai előőrsként.", "Egy völgyben fekszik a Bogdiin Gol folyó mentén.", "Híres rendkívül hideg teleiről, gyakran -40°C alatt."],
            "ro": ["Fondat în 1733 ca avanpost militar.", "Situat într-o vale pe râul Bogdiin Gol.", "Cunoscut pentru iernile sale extrem de reci, adesea sub -40°C."],
            "en": ["Founded in 1733 as a military outpost.", "Located in a valley along the Bogdiin Gol river.", "Known for its extremely cold winters, often below -40°C."]
        }
    },
    {
        "id": "mn-altai-cities-v2",
        "type": "city",
        "parent": "MN-065",
        "coords": [96.2583, 46.3722],
        "name": {
            "de": "Altai",
            "hu": "Altaj",
            "ro": "Altai",
            "en": "Altai"
        },
        "description": {
            "de": "Die Stadt Altai liegt hochgelegen in der Provinz Gobi-Altai. Die karge Berglandschaft prägt das Leben der Nomaden, die in dieser extremen Umgebung ihre Herden weiden lassen.",
            "hu": "Altaj városa magasan fekszik a Góbi-Altaj tartományban. A kopár hegyvidéki táj meghatározza a nomádok életét, akik ebben a szélsőséges környezetben legeltetik nyájaikat.",
            "ro": "Orașul Altai este situat la mare altitudine în provincia Gobi-Altai. Peisajul montan arid definește viața nomazilor care își pasc turmele în acest mediu extrem.",
            "en": "The city of Altai is situated at high altitude in the Gobi-Altai province. The barren mountainous landscape shapes the lives of nomads who graze their herds in this extreme environment."
        },
        "facts": {
            "de": ["Offiziell wird das Zentrum der Stadt Yesönbulag genannt.", "Liegt auf einer beeindruckenden Höhe von 2181 Metern.", "Einer der abgelegensten und windigsten Orte des Landes."],
            "hu": ["A város központját hivatalosan Jeszönbulagnak hívják.", "Lenyűgöző, 2181 méteres tengerszint feletti magasságban fekszik.", "Az ország egyik legelszigeteltebb és legszelesebb helye."],
            "ro": ["Centrul orașului este numit oficial Yesönbulag.", "Situat la o altitudine impresionantă de 2181 de metri.", "Unul dintre cele mai izolate și vântoase locuri din țară."],
            "en": ["The center of the city is officially called Yesönbulag.", "Located at an impressive altitude of 2,181 meters.", "One of the most isolated and windy places in the country."]
        }
    },
    {
        "id": "mn-baruun-urt-cities-v2",
        "type": "city",
        "parent": "MN-051",
        "coords": [113.2792, 46.6806],
        "name": {
            "de": "Baruun-Urt",
            "hu": "Barún-Urt",
            "ro": "Baruun-Urt",
            "en": "Baruun-Urt"
        },
        "description": {
            "de": "Baruun-Urt ist das Zentrum der östlichen Steppenregion Süchbaatar. In den weiten Ebenen um die Stadt weiden riesige Herden von mongolischen Gazellen.",
            "hu": "Barún-Urt a keleti sztyeppés Szühebátor régió központja. A város körüli hatalmas síkságokon mongol gazellák hatalmas csordái legelnek.",
            "ro": "Baruun-Urt este centrul regiunii de stepă estică Sükhbaatar. În vastele câmpii din jurul orașului pasc turme uriașe de gazele mongole.",
            "en": "Baruun-Urt is the center of the eastern steppe region of Sükhbaatar. Huge herds of Mongolian gazelles graze in the vast plains surrounding the city."
        },
        "facts": {
            "de": ["In der Nähe befindet sich die große Zinkmine Tömörtiin-Ovoo.", "Die Region ist berühmt für die Qualität ihrer Rennpferde.", "Zählt etwa 16.000 Einwohner in der endlosen Graslandschaft."],
            "hu": ["A közelben található a nagy Tömörtiin-Ovó cinkbánya.", "A régió híres a versenylovak minőségéről.", "Körülbelül 16 000 lakosa van a végtelen füves pusztán."],
            "ro": ["În apropiere se află marea mină de zinc Tömörtiin-Ovoo.", "Regiunea este faimoasă pentru calitatea cailor de curse.", "Are o populație de aproximativ 16.000 de locuitori în nesfârșitele pajiști."],
            "en": ["The large Tömörtiin-Ovoo zinc mine is located nearby.", "The region is famous for the quality of its racehorses.", "Has a population of about 16,000 in the endless grasslands."]
        }
    },
    {
        "id": "mn-mandalgovi-cities-v2",
        "type": "city",
        "parent": "MN-059",
        "coords": [106.2708, 45.7625],
        "name": {
            "de": "Mandalgowi",
            "hu": "Mandalgovi",
            "ro": "Mandalgovi",
            "en": "Mandalgovi"
        },
        "description": {
            "de": "Mandalgowi ist die Hauptstadt der Mittelgobi-Provinz und bildet den Übergang zwischen der Steppe und der eigentlichen Wüste Gobi. Die Gegend ist bekannt für kuriose Felsformationen.",
            "hu": "Mandalgovi a Közép-Góbi tartomány fővárosa, és az átmenetet képezi a sztyeppe és a tulajdonképpeni Góbi-sivatag között. A környék furcsa sziklaképződményeiről ismert.",
            "ro": "Mandalgovi este capitala provinciei Gobiul de Mijloc și formează tranziția între stepă și Deșertul Gobi propriu-zis. Zona este cunoscută pentru formațiunile stâncoase curioase.",
            "en": "Mandalgovi is the capital of the Middle Gobi province and forms the transition between the steppe and the actual Gobi Desert. The area is known for curious rock formations."
        },
        "facts": {
            "de": ["Etwa 300 Kilometer südlich von Ulaanbaatar gelegen.", "Dient als Wegpunkt für Gobi-Rundreisen.", "Nahe gelegene Felsformationen von Baga Gadsaryn Tschuluu."],
            "hu": ["Körülbelül 300 kilométerre délre fekszik Ulánbátortól.", "Megállóként szolgál a Góbi túrákhoz.", "A közelben találhatók a Baga Gadzaryn Csulú sziklaképződményei."],
            "ro": ["Situat la aproximativ 300 de kilometri sud de Ulaanbaatar.", "Servește ca punct de oprire pentru tururile prin Gobi.", "Formațiunile stâncoase Baga Gazariin Chuluu sunt în apropiere."],
            "en": ["Located about 300 kilometers south of Ulaanbaatar.", "Serves as a waypoint for Gobi tours.", "Nearby rock formations of Baga Gazariin Chuluu."]
        }
    },
    {
        "id": "mn-bayankhongor-cities-v2",
        "type": "city",
        "parent": "MN-069",
        "coords": [100.1167, 46.1167],
        "name": {
            "de": "Bajanchongor",
            "hu": "Bajanhongor",
            "ro": "Bayankhongor",
            "en": "Bayankhongor"
        },
        "description": {
            "de": "Bajanchongor bietet eine extreme landschaftliche Vielfalt, von schneebedeckten Gipfeln im Norden bis zu sandigen Wüsten im Süden. Die Stadt verknüpft diese verschiedenen Ökosysteme.",
            "hu": "Bajanhongor rendkívüli táji változatosságot kínál, a hófödte északi csúcsoktól a déli homokos sivatagokig. A város ezeket a különböző ökoszisztémákat kapcsolja össze.",
            "ro": "Bayankhongor oferă o diversitate peisagistică extremă, de la vârfurile înzăpezite din nord până la deșerturile nisipoase din sud. Orașul leagă aceste ecosisteme diferite.",
            "en": "Bayankhongor offers an extreme scenic diversity, from snow-capped peaks in the north to sandy deserts in the south. The city links these different ecosystems."
        },
        "facts": {
            "de": ["Die Provinz ist bekannt für Dinosaurierfunde und heiße Quellen.", "Das Naturkundemuseum zeigt seltene Fossilien der Region.", "Befindet sich auf 1859 Metern über dem Meeresspiegel."],
            "hu": ["A tartomány dinoszauruszleleteiről és hőforrásairól ismert.", "A természettudományi múzeum a régió ritka fosszíliáit mutatja be.", "1859 méteres tengerszint feletti magasságban található."],
            "ro": ["Provincia este cunoscută pentru fosile de dinozauri și izvoare termale.", "Muzeul de istorie naturală prezintă fosile rare din regiune.", "Este situat la 1859 metri deasupra nivelului mării."],
            "en": ["The province is known for dinosaur discoveries and hot springs.", "The natural history museum displays rare fossils from the region.", "Located at 1,859 meters above sea level."]
        }
    },
    {
        "id": "mn-bulgan-cities-v2",
        "type": "city",
        "parent": "MN-067",
        "coords": [103.5333, 48.8125],
        "name": {
            "de": "Bulgan",
            "hu": "Bulgan",
            "ro": "Bulgan",
            "en": "Bulgan"
        },
        "description": {
            "de": "Bulgan ist eine charmante Kleinstadt umgeben von Waldsteppen im Norden der Mongolei. Holzhäuser prägen das Stadtbild anstelle der sonst üblichen Jurtensiedlungen.",
            "hu": "Bulgan egy bájos kisváros Észak-Mongólia erdős sztyeppéivel körülvéve. Faházak határozzák meg a városképet az egyébként megszokott jurtatelepülések helyett.",
            "ro": "Bulgan este un mic oraș fermecător înconjurat de stepe împădurite în nordul Mongoliei. Casele de lemn domină peisajul urban în locul așezărilor obișnuite cu iurte.",
            "en": "Bulgan is a charming small town surrounded by forest steppes in northern Mongolia. Wooden houses dominate the townscape instead of the usual yurt settlements."
        },
        "facts": {
            "de": ["Wichtiges landwirtschaftliches Zentrum, besonders für Weizen.", "Urania, ein ehemaliges militärisches Flugfeld, lag in der Nähe.", "Bekannt als Heimat des ersten mongolischen Kosmonauten."],
            "hu": ["Fontos mezőgazdasági központ, különösen a búza számára.", "A közelben volt Uránia, egy korábbi katonai repülőtér.", "Az első mongol űrhajós szülőföldjeként ismert."],
            "ro": ["Centru agricol important, în special pentru grâu.", "În apropiere se afla Urania, un fost aerodrom militar.", "Cunoscut ca locul de naștere al primului cosmonaut mongol."],
            "en": ["An important agricultural center, especially for wheat.", "Urania, a former military airfield, was located nearby.", "Known as the home of the first Mongolian cosmonaut."]
        }
    },
    {
        "id": "mn-choir-cities-v2",
        "type": "city",
        "parent": "MN-064",
        "coords": [108.9714, 46.3611],
        "name": {
            "de": "Tschoir",
            "hu": "Csojr",
            "ro": "Choir",
            "en": "Choir"
        },
        "description": {
            "de": "Tschoir entstand als bedeutender sowjetischer Militärstützpunkt entlang der Transmongolischen Eisenbahn. Ein massives Denkmal für die sowjetischen Kosmonauten überragt noch heute die Stadt.",
            "hu": "Csojr jelentős szovjet katonai bázisként jött létre a transzmongol vasútvonal mentén. A szovjet űrhajósoknak emelt masszív emlékmű ma is a város fölé magasodik.",
            "ro": "Choir a apărut ca o importantă bază militară sovietică de-a lungul Căii Ferate Transmongole. Un monument masiv închinat cosmonauților sovietici încă mai domină orașul.",
            "en": "Choir emerged as a significant Soviet military base along the Trans-Mongolian Railway. A massive monument to the Soviet cosmonauts still towers over the town today."
        },
        "facts": {
            "de": ["Hauptstadt der kleinsten mongolischen Provinz Gowisümber.", "Zu Sowjetzeiten war es eine geschlossene Militärstadt.", "Hat einen der längsten Bahnsteige der Mongolei."],
            "hu": ["A legkisebb mongol tartomány, Góbi-Szümber fővárosa.", "A szovjet időkben zárt katonai város volt.", "Mongólia egyik leghosszabb vasúti peronjával rendelkezik."],
            "ro": ["Capitala celei mai mici provincii din Mongolia, Govisümber.", "În perioada sovietică, era un oraș militar închis.", "Are unul dintre cele mai lungi peroane feroviare din Mongolia."],
            "en": ["Capital of Mongolia's smallest province, Govisümber.", "During Soviet times, it was a closed military town.", "Has one of the longest railway platforms in Mongolia."]
        }
    },
    {
        "id": "mn-ondorkhaan-cities-v2",
        "type": "city",
        "parent": "MN-039",
        "coords": [110.6603, 47.3194],
        "name": {
            "de": "Öndörchaan",
            "hu": "Öndörhán",
            "ro": "Öndörkhaan",
            "en": "Öndörkhaan"
        },
        "description": {
            "de": "Öndörchaan, offiziell umbenannt in Chinggis City, liegt im östlichen Khentii-Gebirge. Die Region gilt als der Geburtsort von Dschingis Khan und ist ein Ziel für historisch Interessierte.",
            "hu": "A hivatalosan Dzsingisz Városnak átnevezett Öndörhán a keleti Hentij-hegységben található. A régió Dzsingisz kán szülőhelyeként ismert, és a történelem iránt érdeklődők célpontja.",
            "ro": "Öndörkhaan, redenumit oficial Orașul Chinggis, este situat în Munții Khentii de Est. Regiunea este considerată locul de naștere al lui Genghis Han și o destinație pentru pasionații de istorie.",
            "en": "Öndörkhaan, officially renamed Chinggis City, is located in the eastern Khentii Mountains. The region is considered the birthplace of Genghis Khan and a destination for history buffs."
        },
        "facts": {
            "de": ["Im Jahr 2013 zu Ehren Dschingis Khans umbenannt.", "Liegt am Fluss Cherlen.", "Ein nahegelegener Absturz eines chinesischen Flugzeugs 1971 tötete Lin Biao."],
            "hu": ["2013-ban Dzsingisz kán tiszteletére átnevezték.", "A Kerülen folyó partján fekszik.", "1971-ben egy közeli repülőgép-szerencsétlenségben halt meg Lin Piao."],
            "ro": ["Redenumit în 2013 în onoarea lui Genghis Han.", "Situat pe râul Kherlen.", "O prăbușire a unui avion chinezesc în apropiere în 1971 l-a ucis pe Lin Biao."],
            "en": ["Renamed in 2013 in honor of Genghis Khan.", "Located on the Kherlen River.", "A nearby Chinese plane crash in 1971 killed Lin Biao."]
        }
    },
    {
        "id": "mn-zuunkharaa-cities-v2",
        "type": "city",
        "parent": "MN-049",
        "coords": [106.4583, 48.8525],
        "name": {
            "de": "Dsüüncharaa",
            "hu": "Dzúnhara",
            "ro": "Züünkharaa",
            "en": "Züünkharaa"
        },
        "description": {
            "de": "Dsüüncharaa ist eine lebhafte Eisenbahnerstadt im landschaftlich reizvollen Tal des Kharaa-Flusses. Sie verbindet die landwirtschaftlichen Gebiete des Nordens mit Ulaanbaatar.",
            "hu": "Dzúnhara egy nyüzsgő vasutasváros a Hara folyó festői völgyében. Az északi mezőgazdasági területeket köti össze Ulánbátorral.",
            "ro": "Züünkharaa este un oraș feroviar plin de viață, în valea pitorească a râului Kharaa. Conectează zonele agricole din nord cu Ulaanbaatar.",
            "en": "Züünkharaa is a bustling railway town in the scenic Kharaa River valley. It connects the agricultural areas of the north with Ulaanbaatar."
        },
        "facts": {
            "de": ["Produziert einen Großteil des mongolischen Alkohols (Wodka).", "Liegt auf der Strecke der Transmongolischen Eisenbahn.", "Umgeben von Kiefernwäldern und Getreidefeldern."],
            "hu": ["A mongol alkohol (vodka) jelentős részét állítja elő.", "A transzmongol vasútvonal mentén fekszik.", "Fenyőerdők és gabonamezők veszik körül."],
            "ro": ["Produce o mare parte din alcoolul mongol (vodcă).", "Situat pe ruta Căii Ferate Transmongole.", "Înconjurat de păduri de pini și câmpuri de cereale."],
            "en": ["Produces a large portion of Mongolian alcohol (vodka).", "Located on the Trans-Mongolian Railway route.", "Surrounded by pine forests and grain fields."]
        }
    },
    {
        "id": "mn-kharkhorin-cities-v2",
        "type": "city",
        "parent": "MN-055",
        "coords": [102.8238, 47.1975],
        "name": {
            "de": "Charchorin",
            "hu": "Harhorin",
            "ro": "Kharkhorin",
            "en": "Kharkhorin"
        },
        "description": {
            "de": "Charchorin liegt in der Nähe der Ruinen von Karakorum, der antiken Hauptstadt des Mongolischen Reiches im 13. Jahrhundert. Heute ist es eine landwirtschaftliche Siedlung mit enormer touristischer Bedeutung.",
            "hu": "Harhorin Karakorum, a Mongol Birodalom 13. századi ősi fővárosának romjai közelében fekszik. Ma egy mezőgazdasági település, amely óriási turisztikai jelentőséggel bír.",
            "ro": "Kharkhorin se află în apropierea ruinelor orașului Karakorum, fosta capitală antică a Imperiului Mongol în secolul al XIII-lea. Astăzi este o așezare agricolă cu o imensă importanță turistică.",
            "en": "Kharkhorin is located near the ruins of Karakorum, the ancient capital of the Mongol Empire in the 13th century. Today it is an agricultural settlement of enormous tourist importance."
        },
        "facts": {
            "de": ["Erdene Dsuu, das älteste erhaltene buddhistische Kloster der Mongolei, grenzt an die Stadt.", "Die Überreste des Khans-Palastes wurden hier ausgegraben.", "Liegt im UNESCO-Welterbe des Orchon-Tals."],
            "hu": ["Az Erdene Dzú, Mongólia legrégebbi fennmaradt buddhista kolostora határos a várossal.", "A Kán palotájának maradványait itt tárták fel.", "Az Orhon-völgy UNESCO Világörökség részét képezi."],
            "ro": ["Erdene Zuu, cea mai veche mănăstire budistă supraviețuitoare din Mongolia, se învecinează cu orașul.", "Rămășițele palatului Hanului au fost excavate aici.", "Situat în Valea Orkhon, aflată în Patrimoniul Mondial UNESCO."],
            "en": ["Erdene Zuu, Mongolia's oldest surviving Buddhist monastery, borders the town.", "The remains of the Khan's palace were excavated here.", "Located in the UNESCO World Heritage site of the Orkhon Valley."]
        }
    },
    {
        "id": "mn-bor-ondor-cities-v2",
        "type": "city",
        "parent": "MN-039",
        "coords": [109.2667, 46.2667],
        "name": {
            "de": "Bor-Öndör",
            "hu": "Bor-Öndör",
            "ro": "Bor-Öndör",
            "en": "Bor-Öndör"
        },
        "description": {
            "de": "Bor-Öndör ist eine relativ isolierte Bergbaustadt in der weiten Steppe. Sie verdankt ihre Existenz fast ausschließlich den reichhaltigen Vorkommen an Flussspat in der Umgebung.",
            "hu": "Bor-Öndör egy viszonylag elszigetelt bányászváros a tágas sztyeppén. Létezését szinte kizárólag a környék gazdag folypát-lelőhelyeinek köszönheti.",
            "ro": "Bor-Öndör este un oraș minier relativ izolat în marea stepă. Își datorează existența aproape exclusiv zăcămintelor bogate de fluorină din zonă.",
            "en": "Bor-Öndör is a relatively isolated mining town in the vast steppe. It owes its existence almost exclusively to the rich fluorspar deposits in the area."
        },
        "facts": {
            "de": ["Eines der größten Flussspat-Bergwerke Asiens befindet sich hier.", "Die Stadt wurde in den 1980er Jahren stark ausgebaut.", "Eisenbahnanbindung zum Export der Mineralien nach Russland und China."],
            "hu": ["Ázsia egyik legnagyobb folypátbányája található itt.", "A várost az 1980-as években nagymértékben fejlesztették.", "Vasúti kapcsolata van az ásványok Oroszországba és Kínába történő exportálásához."],
            "ro": ["Aici se află una dintre cele mai mari mine de fluorină din Asia.", "Orașul a fost puternic dezvoltat în anii 1980.", "Conexiune feroviară pentru exportul mineralelor către Rusia și China."],
            "en": ["One of Asia's largest fluorspar mines is located here.", "The town was extensively developed in the 1980s.", "Railway connection for exporting minerals to Russia and China."]
        }
    },
    {
        "id": "mn-sharyn-gol-cities-v2",
        "type": "city",
        "parent": "MN-037",
        "coords": [106.2417, 49.2472],
        "name": {
            "de": "Scharyn Gol",
            "hu": "Sarin Gol",
            "ro": "Sharyn Gol",
            "en": "Sharyn Gol"
        },
        "description": {
            "de": "Scharyn Gol ist eine klassische sowjetische Kohlebergbaustadt, eingebettet in einem Tal. Ihr Kohletagebau versorgt die Kraftwerke der nördlichen Industrieregionen.",
            "hu": "Sarin Gol egy klasszikus szovjet szénbányászváros, amely egy völgyben fekszik. Külszíni szénbányája az északi ipari régiók erőműveit látja el.",
            "ro": "Sharyn Gol este un clasic oraș sovietic de extracție a cărbunelui, amplasat într-o vale. Mina sa de cărbune la suprafață alimentează centralele electrice din regiunile industriale nordice.",
            "en": "Sharyn Gol is a classic Soviet coal-mining town nestled in a valley. Its open-pit coal mine supplies the power plants of the northern industrial regions."
        },
        "facts": {
            "de": ["Gegründet 1961 mit Hilfe von Spezialisten aus der UdSSR.", "Die Kohlemine hat gigantische Ausmaße.", "Die Stadt hat durch den Rückgang des Bergbaus Einwohner verloren."],
            "hu": ["1961-ben alapították a Szovjetunióból érkezett szakemberek segítségével.", "A szénbánya gigantikus méretekkel rendelkezik.", "A bányászat hanyatlása miatt a város lakossága csökkent."],
            "ro": ["Fondat în 1961 cu ajutorul specialiștilor din URSS.", "Mina de cărbune are dimensiuni gigantice.", "Orașul a pierdut locuitori din cauza declinului mineritului."],
            "en": ["Founded in 1961 with the help of specialists from the USSR.", "The coal mine is of gigantic proportions.", "The town has lost residents due to the decline in mining."]
        }
    },
    {
        "id": "mn-nalaikh-cities-v2",
        "type": "city",
        "parent": "MN-1",
        "coords": [107.2833, 47.7667],
        "name": {
            "de": "Nalaich",
            "hu": "Nalajh",
            "ro": "Nalaikh",
            "en": "Nalaikh"
        },
        "description": {
            "de": "Nalaich, ehemals die wichtigste Kohlenmine für Ulaanbaatar, ist heute ein abgelegener Stadtbezirk. Seit dem Einsturz der staatlichen Mine betreiben viele Einheimische gefährlichen illegalen Kleinbergbau.",
            "hu": "Nalajh, korábban Ulánbátor legfontosabb szénbányája, ma egy elszigetelt kerület. Az állami bánya összeomlása óta sok helyi lakos folytat veszélyes, illegális kisüzemi bányászatot.",
            "ro": "Nalaikh, fosta cea mai importantă mină de cărbune pentru Ulaanbaatar, este astăzi un district îndepărtat. De la prăbușirea minei de stat, mulți localnici practică minerit ilegal și periculos la scară mică.",
            "en": "Nalaikh, formerly the most important coal mine for Ulaanbaatar, is today a remote district. Since the collapse of the state mine, many locals engage in dangerous illegal small-scale mining."
        },
        "facts": {
            "de": ["Technisch gesehen ein Bezirk von Ulaanbaatar, fühlt sich aber wie eine eigene Stadt an.", "Einsturz der staatlichen Mine ereignete sich 1990.", "Das Reiterstandbild von Dschingis Khan liegt ganz in der Nähe."],
            "hu": ["Technikailag Ulánbátor egyik kerülete, de külön városnak érződik.", "Az állami bánya összeomlása 1990-ben történt.", "Dzsingisz kán lovasszobra nagyon közel található."],
            "ro": ["Tehnic este un district din Ulaanbaatar, dar pare a fi un oraș de sine stătător.", "Prăbușirea minei de stat a avut loc în 1990.", "Statuia ecvestră a lui Genghis Han este foarte aproape."],
            "en": ["Technically a district of Ulaanbaatar, but feels like its own town.", "The collapse of the state mine occurred in 1990.", "The Genghis Khan Equestrian Statue is located very close by."]
        }
    },
    {
        "id": "mn-tosontsengel-cities-v2",
        "type": "city",
        "parent": "MN-057",
        "coords": [98.2750, 48.7569],
        "name": {
            "de": "Tosontsengel",
            "hu": "Toszoncengel",
            "ro": "Tosontsengel",
            "en": "Tosontsengel"
        },
        "description": {
            "de": "Tosontsengel gilt als eine der kältesten Siedlungen in der Mongolei. Umgeben von ausgedehnten Lärchenwäldern ist die Holzverarbeitung die Haupteinnahmequelle der lokalen Wirtschaft.",
            "hu": "Toszoncengel Mongólia egyik leghidegebb települése. A kiterjedt vörösfenyőerdőkkel körülvett városban a fafeldolgozás a helyi gazdaság fő bevételi forrása.",
            "ro": "Tosontsengel este considerat una dintre cele mai reci așezări din Mongolia. Înconjurat de păduri extinse de zada, prelucrarea lemnului este principala sursă de venit pentru economia locală.",
            "en": "Tosontsengel is considered one of the coldest settlements in Mongolia. Surrounded by extensive larch forests, wood processing is the main source of income for the local economy."
        },
        "facts": {
            "de": ["Temperaturrekorde von unter -50°C wurden hier gemessen.", "Liegt am Ider-Fluss im Changai-Gebirge.", "Zweitgrößte Siedlung in der Provinz Dsawchan."],
            "hu": ["Itt mértek -50°C alatti hőmérsékleti rekordokat is.", "Az Ider folyó mentén, a Hangáj-hegységben található.", "Dzavhan tartomány második legnagyobb települése."],
            "ro": ["Aici au fost înregistrate recorduri de temperatură sub -50°C.", "Situat pe râul Ider, în Munții Khangai.", "A doua cea mai mare așezare din provincia Zavkhan."],
            "en": ["Temperature records below -50°C have been recorded here.", "Located on the Ider River in the Khangai Mountains.", "The second largest settlement in Zavkhan province."]
        }
    },
    {
        "id": "mn-khutul-cities-v2",
        "type": "city",
        "parent": "MN-049",
        "coords": [106.1333, 49.2000],
        "name": {
            "de": "Chötöl",
            "hu": "Hötöl",
            "ro": "Khutul",
            "en": "Khutul"
        },
        "description": {
            "de": "Chötöl ist ein wichtiges Zentrum der Baustoffindustrie. Der Rauch der riesigen Zementfabrik, die fast das ganze Land mit Zement versorgt, ist schon von weitem sichtbar.",
            "hu": "Hötöl az építőanyag-ipar fontos központja. A hatalmas cementgyár füstje, amely szinte az egész országot ellátja cementtel, már messziről látható.",
            "ro": "Khutul este un centru important al industriei materialelor de construcții. Fumul de la uriașa fabrică de ciment, care furnizează ciment aproape întregii țări, este vizibil de departe.",
            "en": "Khutul is a major center for the building materials industry. The smoke from the huge cement factory, which supplies almost the entire country with cement, is visible from afar."
        },
        "facts": {
            "de": ["Besitzt das größte Zementwerk der Mongolei.", "Liegt verkehrsgünstig an der Hauptstraßenachse Nord-Süd.", "Wurde während der sozialistischen Ära als Industriestadt geplant."],
            "hu": ["Itt található Mongólia legnagyobb cementgyára.", "Közlekedési szempontból kedvező helyen fekszik az észak-dél főútvonalon.", "A szocialista korszakban ipari városként tervezték."],
            "ro": ["Are cea mai mare fabrică de ciment din Mongolia.", "Situat convenabil pe axa principală de drumuri nord-sud.", "A fost planificat ca oraș industrial în timpul epocii socialiste."],
            "en": ["Features the largest cement plant in Mongolia.", "Conveniently located on the main north-south road axis.", "Was planned as an industrial town during the socialist era."]
        }
    },
    {
        "id": "mn-zamyn-uud-cities-v2",
        "type": "city",
        "parent": "MN-063",
        "coords": [111.9053, 43.7192],
        "name": {
            "de": "Dsamyn-Üüd",
            "hu": "Dzamin-Üd",
            "ro": "Zamyn-Üüd",
            "en": "Zamyn-Üüd"
        },
        "description": {
            "de": "Dsamyn-Üüd ist der wichtigste Grenzübergang zwischen der Mongolei und China. Täglich passieren hier Unmengen an Gütern und Menschen, was die Wüstenstadt zu einem hektischen Handelsplatz macht.",
            "hu": "Dzamin-Üd a legfontosabb határátkelőhely Mongólia és Kína között. Naponta hatalmas mennyiségű áru és ember halad át itt, ami a sivatagi várost nyüzsgő kereskedelmi csomóponttá teszi.",
            "ro": "Zamyn-Üüd este cel mai important punct de trecere a frontierei între Mongolia și China. Cantități uriașe de mărfuri și oameni trec pe aici zilnic, transformând orașul deșertic într-un centru comercial agitat.",
            "en": "Zamyn-Üüd is the most important border crossing between Mongolia and China. Huge amounts of goods and people pass through here daily, making the desert town a bustling trading post."
        },
        "facts": {
            "de": ["Der Name bedeutet 'Tor des Weges'.", "Hier findet der Wechsel der Spurweite für die Züge nach China statt.", "Gegenüber liegt die chinesische Stadt Erenhot."],
            "hu": ["A név jelentése 'Az út kapuja'.", "Itt történik a nyomtávváltás a Kínába tartó vonatoknál.", "Szemben a kínai Erenhot városa található."],
            "ro": ["Numele înseamnă 'Poarta drumului'.", "Aici are loc schimbarea ecartamentului pentru trenurile spre China.", "Vizavi se află orașul chinezesc Erenhot."],
            "en": ["The name means 'Gate of the Road'.", "The change of gauge for trains to China takes place here.", "Opposite is the Chinese city of Erenhot."]
        }
    }
]

import os

output_file = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraMongoliaCitiesV2.ts"

with open(output_file, "w", encoding="utf-8") as f:
    f.write('import type { POI } from "./poi";\n\n')
    f.write('export const poiExtraMongoliaCitiesV2: POI[] = [\n')
    
    for i, poi in enumerate(pois):
        f.write('  {\n')
        f.write(f'    id: "{poi["id"]}",\n')
        f.write(f'    type: "{poi["type"]}",\n')
        f.write(f'    parent: "{poi["parent"]}",\n')
        f.write(f'    coords: [{poi["coords"][0]}, {poi["coords"][1]}],\n')
        
        # name
        f.write('    name: {\n')
        f.write(f'      de: "{poi["name"]["de"]}",\n')
        f.write(f'      hu: "{poi["name"]["hu"]}",\n')
        f.write(f'      ro: "{poi["name"]["ro"]}",\n')
        f.write(f'      en: "{poi["name"]["en"]}"\n')
        f.write('    },\n')

        # description
        f.write('    description: {\n')
        f.write(f'      de: "{poi["description"]["de"]}",\n')
        f.write(f'      hu: "{poi["description"]["hu"]}",\n')
        f.write(f'      ro: "{poi["description"]["ro"]}",\n')
        f.write(f'      en: "{poi["description"]["en"]}"\n')
        f.write('    },\n')

        # facts
        f.write('    facts: {\n')
        f.write('      de: [\n')
        for idx, fact in enumerate(poi["facts"]["de"]):
            comma = "," if idx < len(poi["facts"]["de"]) - 1 else ""
            f.write(f'        "{fact}"{comma}\n')
        f.write('      ],\n')
        
        f.write('      hu: [\n')
        for idx, fact in enumerate(poi["facts"]["hu"]):
            comma = "," if idx < len(poi["facts"]["hu"]) - 1 else ""
            f.write(f'        "{fact}"{comma}\n')
        f.write('      ],\n')
        
        f.write('      ro: [\n')
        for idx, fact in enumerate(poi["facts"]["ro"]):
            comma = "," if idx < len(poi["facts"]["ro"]) - 1 else ""
            f.write(f'        "{fact}"{comma}\n')
        f.write('      ],\n')
        
        f.write('      en: [\n')
        for idx, fact in enumerate(poi["facts"]["en"]):
            comma = "," if idx < len(poi["facts"]["en"]) - 1 else ""
            f.write(f'        "{fact}"{comma}\n')
        f.write('      ]\n')
        f.write('    }')
        
        comma_poi = "," if i < len(pois) - 1 else ""
        f.write(f'\n  }}{comma_poi}\n')

    f.write('];\n')

print("Generated successfully")
