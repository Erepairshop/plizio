import json

cities = [
    {
        "id": "kawasaki-cities-v2",
        "type": "city",
        "parent": "JP-14",
        "coords": [139.716, 35.530],
        "name": {
            "de": "Kawasaki",
            "hu": "Kavaszaki",
            "ro": "Kawasaki",
            "en": "Kawasaki"
        },
        "description": {
            "de": "Kawasaki liegt zwischen Tokio und Yokohama und ist eine der am dichtesten besiedelten Industriestädte Japans. Die Stadt ist ein Zentrum für Hochtechnologie und berühmt für ihr Kanamara-Matsuri-Festival.",
            "hu": "Kavaszaki Tokió és Jokohama között fekszik, és Japán egyik legsűrűbben lakott iparvárosa. A csúcstechnológiai vállalatok központja, és híres a tavaszi Kanamara Macuri fesztiválról.",
            "ro": "Kawasaki este situat între Tokyo și Yokohama, fiind unul dintre cele mai dens populate orașe industriale din Japonia. Este un centru pentru companiile de înaltă tehnologie și renumit pentru festivalul Kanamara Matsuri.",
            "en": "Located between Tokyo and Yokohama, Kawasaki is one of Japan's most densely populated industrial cities. It is a hub for high-tech companies and famous for its Kanamara Matsuri festival."
        },
        "facts": {
            "de": ["Teil der Metropolregion Tokio.", "Wichtiger Hafen und Industriestandort in der Bucht von Tokio."],
            "hu": ["A tokiói metropoliszövezet része.", "Fontos kikötő és ipari központ a Tokiói-öbölben."],
            "ro": ["Face parte din zona metropolitană Tokyo.", "Un port și un centru industrial important în Golful Tokyo."],
            "en": ["Part of the Greater Tokyo Area.", "A major port and industrial hub in Tokyo Bay."]
        }
    },
    {
        "id": "saitama-cities-v2",
        "type": "state-capital",
        "parent": "JP-11",
        "coords": [139.648, 35.861],
        "name": {
            "de": "Saitama",
            "hu": "Szaitama",
            "ro": "Saitama",
            "en": "Saitama"
        },
        "description": {
            "de": "Saitama ist die Hauptstadt der gleichnamigen Präfektur und ein wichtiger Verkehrsknotenpunkt nördlich von Tokio. Das Eisenbahnmuseum in Omiya und das moderne Saitama Super Arena Stadion prägen das Stadtbild.",
            "hu": "Szaitama a hasonló nevű prefektúra fővárosa, és egy fontos közlekedési csomópont Tokiótól északra. Az omijai Vasúti Múzeum és a modern Saitama Super Arena stadion határozza meg a városképet.",
            "ro": "Saitama este capitala prefecturii cu același nume și un nod de transport important la nord de Tokyo. Muzeul Feroviar din Omiya și stadionul modern Saitama Super Arena domină peisajul urban.",
            "en": "Saitama is the capital of its namesake prefecture and a major transportation hub north of Tokyo. The Railway Museum in Omiya and the modern Saitama Super Arena stadium dominate the cityscape."
        },
        "facts": {
            "de": ["Gegründet 2001 durch den Zusammenschluss mehrerer Städte.", "Omiya ist ein wichtiger Shinkansen-Halt."],
            "hu": ["2001-ben alapították több város egyesítésével.", "Omija egy fontos Sinkanszen-megálló."],
            "ro": ["Fondat în 2001 prin fuziunea mai multor orașe.", "Omiya este o oprire importantă pentru trenurile Shinkansen."],
            "en": ["Founded in 2001 through the merger of several cities.", "Omiya is a major Shinkansen stop."]
        }
    },
    {
        "id": "chiba-cities-v2",
        "type": "state-capital",
        "parent": "JP-12",
        "coords": [140.123, 35.607],
        "name": {
            "de": "Chiba",
            "hu": "Csiba",
            "ro": "Chiba",
            "en": "Chiba"
        },
        "description": {
            "de": "Chiba liegt an der Ostseite der Bucht von Tokio und ist berühmt für das Messezentrum Makuhari Messe. Die Stadt verfügt über die längste hängende Einschienenbahn der Welt, die das Stadtzentrum durchquert.",
            "hu": "Csiba a Tokiói-öböl keleti oldalán fekszik, és a Makuhari Messe kiállítási központról ismert. A városban található a világ leghosszabb függő egysínű vasútja, amely átszeli a belvárost.",
            "ro": "Chiba este situat pe partea de est a Golfului Tokyo și este renumit pentru centrul expozițional Makuhari Messe. Orașul are cel mai lung monorai suspendat din lume, care traversează centrul orașului.",
            "en": "Located on the east side of Tokyo Bay, Chiba is famous for the Makuhari Messe exhibition center. The city features the world's longest suspended monorail, which crosses the downtown area."
        },
        "facts": {
            "de": ["Ein Großteil der Küste besteht aus künstlichem Land.", "Die Einschienenbahn hat eine Länge von über 15 Kilometern."],
            "hu": ["A partvonal nagy része mesterségesen feltöltött terület.", "Az egysínű vasút hossza meghaladja a 15 kilométert."],
            "ro": ["O mare parte a coastei constă din teren artificial.", "Monoraiul are o lungime de peste 15 kilometri."],
            "en": ["Much of the coastline consists of reclaimed land.", "The monorail has a length of over 15 kilometers."]
        }
    },
    {
        "id": "kitakyushu-cities-v2",
        "type": "city",
        "parent": "JP-40",
        "coords": [130.875, 33.883],
        "name": {
            "de": "Kitakyushu",
            "hu": "Kitakjúsú",
            "ro": "Kitakyushu",
            "en": "Kitakyushu"
        },
        "description": {
            "de": "Kitakyushu ist die nördlichste Stadt auf der Insel Kyushu und war historisch ein wichtiges Zentrum der Stahlindustrie. Heute ist das Hafenviertel Mojiko Retro mit seinen gut erhaltenen Backsteingebäuden aus der Meiji-Zeit eine beliebte Sehenswürdigkeit.",
            "hu": "Kitakjúsú a legészakibb város Kjúsú szigetén, és történelmileg az acélipar fontos központja volt. Ma a Mojiko Retro kikötői negyed a Meidzsi-korból származó, jól megőrzött téglaépületeivel népszerű látványosság.",
            "ro": "Kitakyushu este cel mai nordic oraș de pe insula Kyushu și, istoric, un centru important al industriei oțelului. Astăzi, cartierul portuar Mojiko Retro, cu clădirile sale din cărămidă bine conservate din perioada Meiji, este o atracție populară.",
            "en": "Kitakyushu is the northernmost city on the island of Kyushu and historically an important center of the steel industry. Today, the Mojiko Retro port district, with its well-preserved brick buildings from the Meiji period, is a popular attraction."
        },
        "facts": {
            "de": ["Verbindet Kyushu mit der Hauptinsel Honshu über die Kanmon-Brücke.", "Die Kokura-Burg ist ein Symbol der Stadt."],
            "hu": ["A Kanmon-híd köti össze Kjúsú szigetét a fő szigettel, Honsúval.", "A Kokura kastély a város egyik szimbóluma."],
            "ro": ["Leagă insula Kyushu de insula principală Honshu prin podul Kanmon.", "Castelul Kokura este un simbol al orașului."],
            "en": ["Connects Kyushu to the main island of Honshu via the Kanmon Bridge.", "Kokura Castle is a symbol of the city."]
        }
    },
    {
        "id": "niigata-cities-v2",
        "type": "state-capital",
        "parent": "JP-15",
        "coords": [139.036, 37.916],
        "name": {
            "de": "Niigata",
            "hu": "Niigata",
            "ro": "Niigata",
            "en": "Niigata"
        },
        "description": {
            "de": "Niigata ist die größte Hafenstadt an der Küste des Japanischen Meeres in der Region Chubu. Die Gegend ist landesweit bekannt für den hochwertigen Koshihikari-Reis und die exzellenten Sake-Brauereien, die von den reinen Schneeschmelzwassern profitieren.",
            "hu": "Niigata a legnagyobb kikötőváros a Japán-tenger partján a Csúbu régióban. A térség országszerte ismert a kiváló minőségű Kosihikari rizsről és a tiszta hóolvadékvizet használó szakéfőzdékről.",
            "ro": "Niigata este cel mai mare oraș-port de pe coasta Mării Japoniei din regiunea Chubu. Zona este renumită la nivel național pentru orezul Koshihikari de înaltă calitate și berăriile excelente de sake.",
            "en": "Niigata is the largest port city on the Sea of Japan coast in the Chubu region. The area is nationally known for high-quality Koshihikari rice and excellent sake breweries that benefit from pure snowmelt water."
        },
        "facts": {
            "de": ["Der Shinano-Fluss mündet hier ins Meer.", "Im Winter verzeichnet die Region starken Schneefall."],
            "hu": ["A Sinano-folyó itt torkollik a tengerbe.", "Télen a régióban rendkívül erős a havazás."],
            "ro": ["Râul Shinano se varsă în mare aici.", "Iarna, regiunea înregistrează căderi masive de zăpadă."],
            "en": ["The Shinano River flows into the sea here.", "The region experiences heavy snowfall in winter."]
        }
    },
    {
        "id": "kumamoto-cities-v2",
        "type": "state-capital",
        "parent": "JP-43",
        "coords": [130.741, 32.803],
        "name": {
            "de": "Kumamoto",
            "hu": "Kumamoto",
            "ro": "Kumamoto",
            "en": "Kumamoto"
        },
        "description": {
            "de": "Kumamoto ist eine historische Festungsstadt auf Kyushu, deren schwarze Burg zu den eindrucksvollsten Japans zählt. Neben dem Suizenji-Garten ist die Stadt auch für ihr Maskottchen Kumamon berühmt, das weltweit Bekanntheit erlangte.",
            "hu": "Kumamoto történelmi erődváros Kjúsú szigetén, fekete kastélya Japán egyik leglenyűgözőbb építménye. A Szuizendzsi kert mellett a város híres kabalafigurájáról, Kumamonról is, aki világszerte ismertséget szerzett.",
            "ro": "Kumamoto este un oraș istoric fortificat de pe Kyushu, al cărui castel negru este printre cele mai impresionante din Japonia. Pe lângă grădina Suizenji, orașul este faimos pentru mascota sa, Kumamon.",
            "en": "Kumamoto is a historic castle town on Kyushu, whose black castle is among the most impressive in Japan. Alongside Suizenji Garden, the city is famous for its mascot, Kumamon, who gained worldwide recognition."
        },
        "facts": {
            "de": ["Die Burg Kumamoto wurde 1607 fertiggestellt.", "2016 erlebte die Stadt schwere Erdbeben."],
            "hu": ["A kumamotói kastély 1607-ben épült.", "2016-ban a város súlyos földrengéseket szenvedett el."],
            "ro": ["Castelul Kumamoto a fost finalizat în 1607.", "În 2016, orașul a fost lovit de cutremure puternice."],
            "en": ["Kumamoto Castle was completed in 1607.", "In 2016, the city experienced severe earthquakes."]
        }
    },
    {
        "id": "okayama-cities-v2",
        "type": "state-capital",
        "parent": "JP-33",
        "coords": [133.934, 34.655],
        "name": {
            "de": "Okayama",
            "hu": "Okajama",
            "ro": "Okayama",
            "en": "Okayama"
        },
        "description": {
            "de": "Okayama wird wegen seines milden Klimas oft als das 'Land des Sonnenscheins' bezeichnet. Die Stadt beherbergt den Korakuen, einen der drei berühmtesten Landschaftsgärten Japans, der direkt neben der schwarzen Krähenburg liegt.",
            "hu": "Okajamát enyhe éghajlata miatt gyakran a 'Napfény földjének' is nevezik. A városban található a Korakuen, Japán három leghíresebb tájkertjének egyike, amely közvetlenül a fekete Varjúvár mellett fekszik.",
            "ro": "Okayama este adesea numită 'Țara Soarelui' datorită climatului său blând. Orașul găzduiește Korakuen, una dintre cele mai faimoase trei grădini peisagistice din Japonia, situată chiar lângă Castelul Corbului.",
            "en": "Okayama is often called the 'Land of Sunshine' due to its mild climate. The city is home to Korakuen, one of Japan's three most famous landscape gardens, situated right next to the black Crow Castle."
        },
        "facts": {
            "de": ["Okayama ist der Schauplatz des Märchens von Momotaro.", "Die Region ist berühmt für ihre weißen Pfirsiche."],
            "hu": ["Okajama a Momotaro-mese helyszíne.", "A régió híres a fehér őszibarackjairól."],
            "ro": ["Okayama este cadrul basmului Momotaro.", "Regiunea este renumită pentru piersicile sale albe."],
            "en": ["Okayama is the setting for the Momotaro folktale.", "The region is famous for its white peaches."]
        }
    },
    {
        "id": "kagoshima-cities-v2",
        "type": "state-capital",
        "parent": "JP-46",
        "coords": [130.558, 31.596],
        "name": {
            "de": "Kagoshima",
            "hu": "Kagosima",
            "ro": "Kagoshima",
            "en": "Kagoshima"
        },
        "description": {
            "de": "Aufgrund des warmen Klimas und der Lage an einer weiten Bucht wird Kagoshima oft als das 'Neapel des Ostens' bezeichnet. Das Stadtbild wird vom Sakurajima dominiert, einem sehr aktiven Vulkan, der regelmäßig Aschewolken ausstößt.",
            "hu": "Meleg éghajlata és a széles öböl menti fekvése miatt Kagosimát gyakran a 'Kelet Nápolyának' nevezik. A városképet a Szakuradzsima uralja, egy rendkívül aktív vulkán, amely rendszeresen hamufelhőket bocsát ki.",
            "ro": "Datorită climatului cald și locației sale pe un golf larg, Kagoshima este adesea numită 'Napoli al Estului'. Peisajul urban este dominat de Sakurajima, un vulcan foarte activ care emite frecvent nori de cenușă.",
            "en": "Due to its warm climate and location on a wide bay, Kagoshima is often called the 'Naples of the East'. The cityscape is dominated by Sakurajima, a highly active volcano that regularly emits ash clouds."
        },
        "facts": {
            "de": ["War das Zentrum der Satsuma-Domäne in der Edo-Zeit.", "Bekannt für heiße Sandbäder im nahegelegenen Ibusuki."],
            "hu": ["Az Edo-korban a Szacuma-birtok központja volt.", "Híres a közeli Ibuszuki forró homokfürdőiről."],
            "ro": ["A fost centrul domeniului Satsuma în perioada Edo.", "Renumit pentru băile cu nisip fierbinte din apropiatul Ibusuki."],
            "en": ["Was the center of the Satsuma Domain during the Edo period.", "Known for hot sand baths in nearby Ibusuki."]
        }
    },
    {
        "id": "himeji-cities-v2",
        "type": "city",
        "parent": "JP-28",
        "coords": [134.690, 34.815],
        "name": {
            "de": "Himeji",
            "hu": "Himedzsi",
            "ro": "Himeji",
            "en": "Himeji"
        },
        "description": {
            "de": "Himeji in der Präfektur Hyogo ist vor allem für seine strahlend weiße Burg Himeji bekannt, die zum UNESCO-Weltkulturerbe gehört. Sie ist die größte und am besten erhaltene feudale Festung des Landes und wird wegen ihrer Eleganz 'Burg des weißen Reihers' genannt.",
            "hu": "A Hjógó prefektúrában található Himedzsi elsősorban a hófehér Himedzsi kastélyról ismert, amely az UNESCO világörökség része. Ez az ország legnagyobb és legépebben fennmaradt hűbéri erődje, melyet 'Fehér Kócsag' kastélynak is neveznek.",
            "ro": "Himeji din prefectura Hyogo este cel mai bine cunoscut pentru Castelul Himeji de un alb strălucitor, un sit al Patrimoniului Mondial UNESCO. Este cea mai mare și cel mai bine conservată fortăreață feudală din țară, numită 'Castelul Stârcului Alb'.",
            "en": "Himeji in Hyogo Prefecture is best known for its brilliant white Himeji Castle, a UNESCO World Heritage site. It is the largest and best-preserved feudal fortress in the country, often called the 'White Heron Castle'."
        },
        "facts": {
            "de": ["Die Burg überstand Bombenangriffe und Erdbeben unbeschadet.", "Der Kokoen-Garten grenzt direkt an die Burganlage."],
            "hu": ["A kastély sértetlenül vészelte át a bombázásokat és a földrengéseket.", "A Kokoen-kert közvetlenül a várrendszer mellett található."],
            "ro": ["Castelul a supraviețuit bombardamentelor și cutremurelor intact.", "Grădina Kokoen este situată chiar lângă complexul castelului."],
            "en": ["The castle survived bombings and earthquakes intact.", "The Kokoen Garden is located right next to the castle complex."]
        }
    },
    {
        "id": "matsuyama-cities-v2",
        "type": "state-capital",
        "parent": "JP-38",
        "coords": [132.766, 33.839],
        "name": {
            "de": "Matsuyama",
            "hu": "Macujama",
            "ro": "Matsuyama",
            "en": "Matsuyama"
        },
        "description": {
            "de": "Matsuyama ist die größte Stadt auf der Insel Shikoku und berühmt für das Dogo Onsen, eines der ältesten Thermalbäder Japans. Die ursprüngliche Burganlage der Stadt thront auf einem Hügel und dominiert das Stadtbild.",
            "hu": "Macujama Sikoku szigetének legnagyobb városa, és a Dogo Onsenről ismert, amely Japán egyik legrégebbi termálfürdője. A város eredeti állapotban megőrzött kastélya egy dombon áll, és uralja a városképet.",
            "ro": "Matsuyama este cel mai mare oraș de pe insula Shikoku și renumit pentru Dogo Onsen, una dintre cele mai vechi băi termale din Japonia. Castelul original al orașului stă pe un deal și domină peisajul urban.",
            "en": "Matsuyama is the largest city on the island of Shikoku and famous for Dogo Onsen, one of Japan's oldest hot springs. The city's original castle complex sits on a hill and dominates the cityscape."
        },
        "facts": {
            "de": ["Dogo Onsen inspirierte das Badehaus im Film 'Chihiros Reise ins Zauberland'.", "Die Stadt ist ein Zentrum des Haiku-Dichters Masaoka Shiki."],
            "hu": ["A Dogo Onsen ihlette a 'Chihiro Szellemországban' fürdőházát.", "A város a haiku költő, Maszaoka Siki központja volt."],
            "ro": ["Dogo Onsen a inspirat baia din filmul 'Spirited Away'.", "Orașul este un centru asociat cu poetul de haiku Masaoka Shiki."],
            "en": ["Dogo Onsen inspired the bathhouse in the film 'Spirited Away'.", "The city is a center associated with the haiku poet Masaoka Shiki."]
        }
    },
    {
        "id": "utsunomiya-cities-v2",
        "type": "state-capital",
        "parent": "JP-09",
        "coords": [139.883, 36.555],
        "name": {
            "de": "Utsunomiya",
            "hu": "Ucunomija",
            "ro": "Utsunomiya",
            "en": "Utsunomiya"
        },
        "description": {
            "de": "Utsunomiya liegt in der Präfektur Tochigi und gilt in ganz Japan als die Stadt der Gyoza. Neben der berühmten Teigtaschenkultur beherbergt die Gegend die Oya-Steinbrüche, deren gewaltige unterirdische Höhlen für Kunstausstellungen und Filme genutzt werden.",
            "hu": "Ucunomija Tocsigi prefektúrában található, és Japán-szerte a gjoza városaként ismert. A híres húsos táska kultúrája mellett a környéken találhatók az Oja kőbányák, amelyek hatalmas föld alatti barlangjait kiállításokhoz és filmekhez használják.",
            "ro": "Utsunomiya este situat în prefectura Tochigi și este cunoscută în toată Japonia drept orașul gyoza. Pe lângă faimoasa cultură a găluștelor, zona găzduiește carierele de piatră Oya, ale căror peșteri uriașe sunt folosite pentru expoziții de artă și filme.",
            "en": "Utsunomiya is located in Tochigi Prefecture and is known throughout Japan as the city of gyoza. Besides its famous dumpling culture, the area is home to the Oya stone quarries, whose massive underground caverns are used for art exhibitions and films."
        },
        "facts": {
            "de": ["Verzeichnet den höchsten Pro-Kopf-Verbrauch von Gyoza im Land.", "Liegt auf der Route zum Nikko-Nationalpark."],
            "hu": ["Itt a legmagasabb az egy főre jutó gjozafogyasztás az országban.", "A Nikkó Nemzeti Park felé vezető úton fekszik."],
            "ro": ["Înregistrează cel mai mare consum de gyoza pe cap de locuitor din țară.", "Situat pe traseul către Parcul Național Nikko."],
            "en": ["Records the highest per capita consumption of gyoza in the country.", "Located on the route to Nikko National Park."]
        }
    },
    {
        "id": "oita-cities-v2",
        "type": "state-capital",
        "parent": "JP-44",
        "coords": [131.606, 33.238],
        "name": {
            "de": "Oita",
            "hu": "Óita",
            "ro": "Oita",
            "en": "Oita"
        },
        "description": {
            "de": "Oita ist eine Küstenstadt auf Kyushu und das Tor zu den berühmten Thermalquellen von Beppu und Yufuin. Die Stadt kombiniert moderne Hafenindustrie mit dem Zugang zu einigen der beeindruckendsten Berglandschaften der Insel, wie dem Affenpark am Berg Takasaki.",
            "hu": "Óita egy parti város Kjúsú szigetén, amely kapuként szolgál Beppu és Jufuin híres hőforrásaihoz. A város ötvözi a modern kikötői ipart a sziget leglátványosabb hegyvidékeivel, mint például a Takaszaki-hegyi majompark.",
            "ro": "Oita este un oraș de coastă pe Kyushu și poarta de acces către faimoasele izvoare termale din Beppu și Yufuin. Orașul combină industria portuară modernă cu accesul la unele dintre cele mai impresionante peisaje montane, cum ar fi parcul de maimuțe de pe Muntele Takasaki.",
            "en": "Oita is a coastal city on Kyushu and the gateway to the famous hot springs of Beppu and Yufuin. The city combines modern port industry with access to some of the island's most impressive mountain landscapes, like the monkey park at Mount Takasaki."
        },
        "facts": {
            "de": ["Bekannt für die Produktion von Kabosu-Zitrusfrüchten.", "Historisch wichtig für den Handel mit Portugal im 16. Jahrhundert."],
            "hu": ["A kaboszu nevű citrusféle termesztéséről ismert.", "Történelmileg fontos szerepet játszott a 16. századi portugál kereskedelemben."],
            "ro": ["Cunoscut pentru producția de citrice kabosu.", "Istoric important pentru comerțul cu Portugalia în secolul al XVI-lea."],
            "en": ["Known for the production of kabosu citrus fruits.", "Historically important for trade with Portugal in the 16th century."]
        }
    },
    {
        "id": "nagasaki-cities-v2",
        "type": "state-capital",
        "parent": "JP-42",
        "coords": [129.873, 32.750],
        "name": {
            "de": "Nagasaki",
            "hu": "Nagaszaki",
            "ro": "Nagasaki",
            "en": "Nagasaki"
        },
        "description": {
            "de": "Nagasaki hat eine einzigartige Geschichte, da es während der Isolation Japans der einzige für den Westen geöffnete Hafen war. Die steilen Hügel, katholischen Kirchen wie Oura und der Friedenspark, der an den Atombombenabwurf 1945 erinnert, verleihen der Stadt ein vielschichtiges Profil.",
            "hu": "Nagaszaki egyedülálló történelemmel bír, mivel Japán elszigeteltsége idején ez volt az egyetlen nyitott kikötő a Nyugat felé. A meredek dombok, az Oura-hoz hasonló katolikus templomok és az 1945-ös atomtámadásra emlékeztető Békepark összetett profilt kölcsönöznek a városnak.",
            "ro": "Nagasaki are o istorie unică, fiind singurul port deschis Occidentului în timpul izolării Japoniei. Dealurile abrupte, bisericile catolice precum Oura și Parcul Păcii, care amintește de bombardamentul atomic din 1945, îi conferă orașului un profil complex.",
            "en": "Nagasaki has a unique history as the only port open to the West during Japan's isolation. The steep hills, Catholic churches like Oura, and the Peace Park commemorating the 1945 atomic bombing give the city a multifaceted profile."
        },
        "facts": {
            "de": ["Die künstliche Insel Dejima war der Handelsposten der Niederländer.", "Glover Garden zeigt Residenzen westlicher Kaufleute aus dem 19. Jahrhundert."],
            "hu": ["A mesterséges Dedzsima sziget volt a hollandok kereskedelmi állomása.", "A Glover-kert a 19. századi nyugati kereskedők rezidenciáit mutatja be."],
            "ro": ["Insula artificială Dejima a fost punctul de comerț al olandezilor.", "Glover Garden prezintă reședințe ale comercianților occidentali din secolul al XIX-lea."],
            "en": ["The artificial island of Dejima was the Dutch trading post.", "Glover Garden showcases 19th-century western merchant residences."]
        }
    },
    {
        "id": "kanazawa-cities-v2",
        "type": "state-capital",
        "parent": "JP-17",
        "coords": [136.656, 36.561],
        "name": {
            "de": "Kanazawa",
            "hu": "Kanazava",
            "ro": "Kanazawa",
            "en": "Kanazawa"
        },
        "description": {
            "de": "Kanazawa in der Präfektur Ishikawa entging den Zerstörungen des Zweiten Weltkriegs und bewahrt historische Geisha- und Samurai-Viertel. Das Zentrum der Stadt bildet der Kenrokuen, einer der schönsten traditionellen Wandelgärten Japans, zusammen mit dem Museum für zeitgenössische Kunst des 21. Jahrhunderts.",
            "hu": "Az Isikava prefektúrában található Kanazava megmenekült a második világháború pusztításaitól, így megőrizte történelmi gésa- és szamurájnegyedeit. A város központja a Kenrokuen, Japán egyik legszebb hagyományos sétakertje, valamint a 21. századi kortárs művészeti múzeum.",
            "ro": "Kanazawa din prefectura Ishikawa a scăpat de distrugerile celui de-al Doilea Război Mondial și păstrează districte istorice de gheișe și samurai. Centrul orașului prezintă Kenrokuen, una dintre cele mai frumoase grădini tradiționale din Japonia, alături de Muzeul de Artă Contemporană a secolului XXI.",
            "en": "Kanazawa in Ishikawa Prefecture escaped the destruction of World War II, preserving historical geisha and samurai districts. The center of the city features Kenrokuen, one of Japan's most beautiful traditional strolling gardens, along with the 21st Century Museum of Contemporary Art."
        },
        "facts": {
            "de": ["Produziert über 90% des japanischen Blattgolds.", "Der Omicho-Markt ist berühmt für frische Meeresfrüchte aus dem Japanischen Meer."],
            "hu": ["A japán aranyfüst több mint 90%-át itt gyártják.", "Az Omicso piac a Japán-tengerből származó friss tengeri herkentyűkről híres."],
            "ro": ["Produce peste 90% din foița de aur japoneză.", "Piața Omicho este renumită pentru fructele de mare proaspete din Marea Japoniei."],
            "en": ["Produces over 90% of Japanese gold leaf.", "Omicho Market is famous for fresh seafood from the Sea of Japan."]
        }
    },
    {
        "id": "takamatsu-cities-v2",
        "type": "state-capital",
        "parent": "JP-37",
        "coords": [134.043, 34.342],
        "name": {
            "de": "Takamatsu",
            "hu": "Takamacu",
            "ro": "Takamatsu",
            "en": "Takamatsu"
        },
        "description": {
            "de": "Takamatsu ist das wichtigste Tor zur Insel Shikoku am Seto-Binnenmeer. Die Küstenstadt ist vor allem für den weitläufigen Ritsurin-Garten bekannt, einen historischen Wandelgarten, der geschickt die bewaldeten Berge im Hintergrund in seine Gestaltung einbezieht.",
            "hu": "Takamacu a Szeto-beltengeren fekvő Sikoku szigetének legfőbb kapuja. A tengerparti város leginkább a hatalmas Ricurin-kertről ismert, egy történelmi sétakertről, amely ügyesen bevonja a háttérben lévő erdős hegyeket a tervezésébe.",
            "ro": "Takamatsu este principala poartă de acces către insula Shikoku pe Marea Interioară Seto. Orașul de coastă este cunoscut mai ales pentru vasta Grădină Ritsurin, o grădină de plimbare istorică care încorporează munții împăduriți în designul său.",
            "en": "Takamatsu is the main gateway to the island of Shikoku on the Seto Inland Sea. The coastal city is best known for the expansive Ritsurin Garden, a historical strolling garden that cleverly incorporates the forested mountains into its design."
        },
        "facts": {
            "de": ["Ausgangspunkt für Fähren zu den Kunstinseln wie Naoshima.", "Die Region ist berühmt für Sanuki Udon-Nudeln."],
            "hu": ["A Naosimához hasonló művészeti szigetekre tartó kompok kiindulópontja.", "A régió a Szanuki udon tésztáról híres."],
            "ro": ["Punct de plecare pentru feriboturile către insulele de artă precum Naoshima.", "Regiunea este renumită pentru tăițeii Sanuki Udon."],
            "en": ["Starting point for ferries to art islands like Naoshima.", "The region is famous for Sanuki Udon noodles."]
        }
    },
    {
        "id": "toyama-cities-v2",
        "type": "state-capital",
        "parent": "JP-16",
        "coords": [137.211, 36.695],
        "name": {
            "de": "Toyama",
            "hu": "Tojama",
            "ro": "Toyama",
            "en": "Toyama"
        },
        "description": {
            "de": "Toyama liegt an der gleichnamigen Bucht und ist der Ausgangspunkt für die spektakuläre Tateyama Kurobe Alpenroute, die tief durch das Hida-Gebirge führt. Die Stadt selbst hat eine lange Tradition in der Pharmazie und ist heute auch als Zentrum für moderne Glaskunst bekannt.",
            "hu": "Tojama az azonos nevű öböl partján fekszik, és a Hida-hegységen átvezető látványos Tatejama Kurobe alpesi útvonal kiindulópontja. Maga a város hosszú gyógyszerészeti hagyományokkal rendelkezik, ma pedig a modern üvegművészet központjaként is ismert.",
            "ro": "Toyama este situat pe golful cu același nume și este punctul de plecare pentru spectaculoasa Rută Alpină Tateyama Kurobe. Orașul are o lungă tradiție în domeniul farmaceutic și este cunoscut astăzi ca un centru pentru arta modernă a sticlei.",
            "en": "Toyama is located on the bay of the same name and is the starting point for the spectacular Tateyama Kurobe Alpine Route. The city has a long tradition in pharmaceuticals and is known today as a center for modern glass art."
        },
        "facts": {
            "de": ["Die Bucht von Toyama ist für leuchtende Firefly-Tintenfische bekannt.", "Verfügt über ein ausgezeichnetes, modernes Straßenbahn-Netz."],
            "hu": ["A Tojamai-öböl a világító szentjánosbogár-tintahalakról ismert.", "Kiváló, modern villamoshálózattal rendelkezik."],
            "ro": ["Golful Toyama este cunoscut pentru calmarii luminoși (Firefly).", "Are o rețea de tramvaie modernă și excelentă."],
            "en": ["Toyama Bay is known for glowing Firefly squids.", "Features an excellent, modern tram network."]
        }
    },
    {
        "id": "wakayama-cities-v2",
        "type": "state-capital",
        "parent": "JP-30",
        "coords": [135.167, 34.226],
        "name": {
            "de": "Wakayama",
            "hu": "Vakajama",
            "ro": "Wakayama",
            "en": "Wakayama"
        },
        "description": {
            "de": "Südlich von Osaka gelegen, war Wakayama einst der Sitz eines der wichtigsten Zweige der Tokugawa-Familie. Die rekonstruierte Burg Wakayama steht im Zentrum der Stadt, die heute vor allem für ihre intensive, sojabasierten Ramen und als Ausgangspunkt für Reisen zum Berg Koya bekannt ist.",
            "hu": "Az Oszakától délre fekvő Vakajama egykor a Tokugava-család egyik legfontosabb ágának székhelye volt. A város központjában a rekonstruált Vakajama-kastély áll; ma leginkább az intenzív, szójaalapú ramenjéről és a Kója-hegy felé induló utazások kiindulópontjaként ismert.",
            "ro": "Situată la sud de Osaka, Wakayama a fost odată sediul uneia dintre cele mai importante ramuri ale familiei Tokugawa. Castelul reconstruit Wakayama se află în centrul orașului, cunoscut astăzi mai ales pentru ramenele sale pe bază de soia și ca punct de plecare către Muntele Koya.",
            "en": "Located south of Osaka, Wakayama was once the seat of one of the most important branches of the Tokugawa family. The reconstructed Wakayama Castle sits in the city center, known today for its intense, soy-based ramen and as a starting point for trips to Mount Koya."
        },
        "facts": {
            "de": ["Die Burg überblickt die Mündung des Kinokawa-Flusses.", "Berühmt für die Katze Tama, die als Bahnhofsvorsteherin diente."],
            "hu": ["A kastély a Kinokava folyó torkolatára néz.", "Híres Tama macskáról, aki egy helyi vasútállomás állomásfőnöke volt."],
            "ro": ["Castelul are vedere la gura râului Kinokawa.", "Faimos pentru pisica Tama, care a servit ca șef de gară."],
            "en": ["The castle overlooks the mouth of the Kinokawa River.", "Famous for the cat Tama, who served as a stationmaster."]
        }
    },
    {
        "id": "miyazaki-cities-v2",
        "type": "state-capital",
        "parent": "JP-45",
        "coords": [131.423, 31.907],
        "name": {
            "de": "Miyazaki",
            "hu": "Mijazaki",
            "ro": "Miyazaki",
            "en": "Miyazaki"
        },
        "description": {
            "de": "Miyazaki liegt an der sonnigen Südostküste von Kyushu und ist berühmt für sein subtropisches Klima und von Palmen gesäumte Straßen. Die nahe gelegene Aoshima-Insel mit ihrem Schrein und dem Felsphänomen der 'Waschbretter des Teufels' zieht viele Besucher und Surfer an.",
            "hu": "Mijazaki Kjúsú napos délkeleti partján fekszik, híres szubtrópusi éghajlatáról és pálmafákkal szegélyezett utcáiról. A közeli Aosima szigete, annak szentélye és az 'Ördög mosódeszkája' sziklaalakzatok sok látogatót és szörföst vonzanak.",
            "ro": "Miyazaki este situat pe coasta însorită de sud-est a Kyushu și este faimos pentru climatul său subtropical și străzile mărginite de palmieri. Insula Aoshima din apropiere, cu altarul său și fenomenul de stânci 'Tabla de spălat a Diavolului', atrage mulți vizitatori și surferi.",
            "en": "Miyazaki is located on the sunny southeast coast of Kyushu and is famous for its subtropical climate and palm-lined streets. The nearby Aoshima Island, with its shrine and the 'Devil's Washboard' rock formation, attracts many visitors and surfers."
        },
        "facts": {
            "de": ["War ein sehr beliebtes Ziel für Hochzeitsreisen in den 1970er Jahren.", "Die Stadt verzeichnet einige der längsten Sonnenscheindauern Japans."],
            "hu": ["Az 1970-es években rendkívül népszerű nászutas célpont volt.", "Japán egyik legmagasabb napsütéses óraszámával rendelkezik."],
            "ro": ["A fost o destinație foarte populară pentru lunile de miere în anii 1970.", "Orașul înregistrează unele dintre cele mai lungi perioade de soare din Japonia."],
            "en": ["Was a very popular honeymoon destination in the 1970s.", "The city records some of the longest sunshine durations in Japan."]
        }
    },
    {
        "id": "nagano-cities-v2",
        "type": "state-capital",
        "parent": "JP-20",
        "coords": [138.181, 36.648],
        "name": {
            "de": "Nagano",
            "hu": "Nagano",
            "ro": "Nagano",
            "en": "Nagano"
        },
        "description": {
            "de": "Nagano entwickelte sich historisch als Tempelstadt rund um den Zenko-ji, einen der wichtigsten und ältesten buddhistischen Tempel Japans. Globale Bekanntheit erlangte die Stadt in den Bergen als Austragungsort der Olympischen Winterspiele 1998, wodurch sie heute ein Paradies für Wintersportler ist.",
            "hu": "Nagano történelmileg a Zenkó-dzsi, Japán egyik legfontosabb és legrégebbi buddhista temploma körüli településként fejlődött ki. A hegyvidéki város az 1998-as téli olimpiai játékok helyszíneként szerzett világhírnevet, így ma a téli sportok szerelmeseinek paradicsoma.",
            "ro": "Nagano s-a dezvoltat istoric ca un oraș al templelor în jurul Zenko-ji, unul dintre cele mai importante și vechi temple budiste din Japonia. Orașul montan a câștigat recunoaștere globală ca gazdă a Jocurilor Olimpice de Iarnă din 1998, fiind astăzi un paradis pentru sporturile de iarnă.",
            "en": "Nagano developed historically as a temple town around Zenko-ji, one of Japan's most important and oldest Buddhist temples. The mountainous city gained global recognition as the host of the 1998 Winter Olympics, making it a paradise for winter sports enthusiasts today."
        },
        "facts": {
            "de": ["Der Zenko-ji beherbergt angeblich die älteste buddhistische Statue Japans.", "Die umliegenden Japanischen Alpen bieten erstklassige Skigebiete."],
            "hu": ["A Zenkó-dzsi állítólag Japán legrégebbi buddhista szobrát őrzi.", "A környező Japán-Alpok első osztályú síterepeket kínálnak."],
            "ro": ["Se spune că Zenko-ji adăpostește cea mai veche statuie budistă din Japonia.", "Alpii japonezi din jur oferă zone de schi de primă clasă."],
            "en": ["Zenko-ji is said to house the oldest Buddhist statue in Japan.", "The surrounding Japanese Alps offer world-class ski resorts."]
        }
    },
    {
        "id": "gifu-cities-v2",
        "type": "state-capital",
        "parent": "JP-21",
        "coords": [136.756, 35.423],
        "name": {
            "de": "Gifu",
            "hu": "Gifu",
            "ro": "Gifu",
            "en": "Gifu"
        },
        "description": {
            "de": "Gifu liegt zentral im Land und wird von dem Kinka-Berg überragt, auf dem die Burg Gifu thront, von der aus Oda Nobunaga einst seine Feldzüge plante. Die Stadt ist zudem berühmt für die Ukai, die traditionelle Kormoranfischerei auf dem klaren Nagara-Fluss, die im Sommer stattfindet.",
            "hu": "A központi fekvésű Gifut a Kinka-hegy uralja, amelyen a Gifu-kastély magasodik, ahonnan egykor Oda Nobunaga tervezte hadjáratait. A város emellett híres az ukairól, a tiszta Nagara-folyón nyaranta megrendezett hagyományos kormorános halászatról.",
            "ro": "Gifu are o locație centrală și este dominat de Muntele Kinka, pe care se află Castelul Gifu, de unde Oda Nobunaga și-a planificat campaniile. Orașul este renumit pentru ukai, pescuitul tradițional cu cormorani de pe râul limpede Nagara, în timpul verii.",
            "en": "Gifu is centrally located and dominated by Mount Kinka, atop which sits Gifu Castle, from where Oda Nobunaga once planned his campaigns. The city is also famous for ukai, the traditional cormorant fishing on the clear Nagara River during the summer."
        },
        "facts": {
            "de": ["Hat eine lange Tradition in der Herstellung von Papierlaternen und Schirmen.", "Die Kormoranfischerei am Nagara-Fluss wird seit 1300 Jahren praktiziert."],
            "hu": ["Hosszú hagyományai vannak a papírlámpások és esernyők készítésében.", "A kormorános halászatot a Nagara-folyón már 1300 éve gyakorolják."],
            "ro": ["Are o lungă tradiție în fabricarea felinarelor și umbrelelor de hârtie.", "Pescuitul cu cormorani pe râul Nagara se practică de 1300 de ani."],
            "en": ["Has a long tradition of making paper lanterns and umbrellas.", "Cormorant fishing on the Nagara River has been practiced for 1,300 years."]
        }
    },
    {
        "id": "fukui-cities-v2",
        "type": "state-capital",
        "parent": "JP-18",
        "coords": [136.221, 36.064],
        "name": {
            "de": "Fukui",
            "hu": "Fukui",
            "ro": "Fukui",
            "en": "Fukui"
        },
        "description": {
            "de": "Fukui an der Westküste ist historisch bedeutsam durch die Ausgrabungsstätte des Asakura-Clans aus der Sengoku-Zeit. In der modernen Zeit ist die Stadt vor allem durch das nahe gelegene Präfekturmuseum für Dinosaurier berühmt, eine der weltweit führenden paläontologischen Einrichtungen.",
            "hu": "A nyugati parton fekvő Fukui történelmi jelentőségű a Szengoku-kori Aszakura-klán ásatási területe révén. A modern időkben a város leginkább a közeli prefekturális Dinoszaurusz Múzeumról ismert, amely a világ egyik vezető őslénytani intézménye.",
            "ro": "Fukui, pe coasta de vest, este important din punct de vedere istoric prin situl de excavare al clanului Asakura din perioada Sengoku. În vremurile moderne, orașul este faimos pentru Muzeul Prefectural de Dinozauri din apropiere, una dintre principalele instituții paleontologice din lume.",
            "en": "Fukui on the west coast is historically significant for the Sengoku-period excavation site of the Asakura clan. In modern times, the city is most famous for the nearby Prefectural Dinosaur Museum, one of the world's leading paleontological institutions."
        },
        "facts": {
            "de": ["Die Tojinbo-Klippen an der Küste bestehen aus seltenen Basaltsäulen.", "Über 80% der japanischen Brillengestelle werden in der Präfektur hergestellt."],
            "hu": ["A part menti Todzsinbo-sziklák ritka bazaltoszlopokból állnak.", "A japán szemüvegkeretek több mint 80%-a ebben a prefektúrában készül."],
            "ro": ["Stâncile Tojinbo de pe coastă sunt formate din coloane rare de bazalt.", "Peste 80% din ramele de ochelari din Japonia sunt fabricate în această prefectură."],
            "en": ["The Tojinbo cliffs on the coast consist of rare basalt columns.", "Over 80% of Japanese eyeglass frames are manufactured in this prefecture."]
        }
    },
    {
        "id": "aomori-cities-v2",
        "type": "state-capital",
        "parent": "JP-02",
        "coords": [140.740, 40.824],
        "name": {
            "de": "Aomori",
            "hu": "Aomori",
            "ro": "Aomori",
            "en": "Aomori"
        },
        "description": {
            "de": "Aomori liegt an der nördlichsten Spitze von Honshu und ist das kulturelle Zentrum der Tohoku-Region. Die Hafenstadt ist international bekannt für das leuchtende Nebuta-Matsuri-Festival im August und ihre hervorragenden Äpfel, die landesweit exportiert werden.",
            "hu": "Aomori Honsú legészakibb csücskén fekszik, és a Tóhoku régió kulturális központja. A kikötőváros nemzetközileg ismert az augusztusi látványos Nebuta Macuri fesztiválról és az országszerte exportált kiváló almájáról.",
            "ro": "Aomori este situat în extremitatea nordică a Honshu și este centrul cultural al regiunii Tohoku. Orașul-port este recunoscut la nivel internațional pentru festivalul luminos Nebuta Matsuri din august și merele sale excelente, exportate la nivel național.",
            "en": "Aomori is located at the northernmost tip of Honshu and is the cultural center of the Tohoku region. The port city is internationally known for the brilliant Nebuta Matsuri festival in August and its excellent apples, exported nationwide."
        },
        "facts": {
            "de": ["War der Haupt-Fährhafen nach Hokkaido vor dem Bau des Seikan-Tunnels.", "Gehört zu den Städten mit dem stärksten Schneefall der Welt."],
            "hu": ["A Szeikan-alagút megépítése előtt a Hokkaidóra tartó kompok fő kikötője volt.", "A világ egyik legintenzívebb havazásával rendelkező városa."],
            "ro": ["A fost principalul port de feriboturi către Hokkaido înainte de construirea tunelului Seikan.", "Este printre orașele cu cele mai abundente căderi de zăpadă din lume."],
            "en": ["Was the main ferry port to Hokkaido before the construction of the Seikan Tunnel.", "Ranks among the cities with the heaviest snowfall in the world."]
        }
    },
    {
        "id": "akita-cities-v2",
        "type": "state-capital",
        "parent": "JP-05",
        "coords": [140.102, 39.718],
        "name": {
            "de": "Akita",
            "hu": "Akita",
            "ro": "Akita",
            "en": "Akita"
        },
        "description": {
            "de": "Akita an der Westküste von Tohoku ist eingebettet in eine Landschaft aus Reisfeldern und bewaldeten Bergen. Die Stadt ist stolz auf das Kanto-Matsuri, bei dem riesige Laternenstangen balanciert werden, sowie auf die berühmte japanische Hunderasse, die ihren Namen trägt.",
            "hu": "A Tóhoku nyugati partján fekvő Akita rizsföldekkel és erdős hegyekkel övezett tájban fekszik. A város büszke a Kanto Macuri fesztiválra, ahol hatalmas lámpásrudakat egyensúlyoznak, valamint a híres japán kutyafajtára, amely a város nevét viseli.",
            "ro": "Akita de pe coasta de vest a Tohoku este situată într-un peisaj de câmpuri de orez și munți împăduriți. Orașul se mândrește cu festivalul Kanto Matsuri, unde se echilibrează stâlpi uriași cu felinare, și cu faimoasa rasă de câini japonezi care îi poartă numele.",
            "en": "Akita on the west coast of Tohoku is nestled in a landscape of rice fields and forested mountains. The city prides itself on the Kanto Matsuri festival, featuring the balancing of giant lantern poles, and the famous Japanese dog breed bearing its name."
        },
        "facts": {
            "de": ["Die Region produziert erstklassigen Sake dank exzellentem Reis und Wasser.", "Die Akita-Hunderasse stammt aus der Bergregion dieser Präfektur."],
            "hu": ["A régió első osztályú szakét állít elő a kiváló rizsnek és víznek köszönhetően.", "Az akita kutyafajta a prefektúra hegyvidéki területéről származik."],
            "ro": ["Regiunea produce sake de primă clasă datorită orezului și apei excelente.", "Rasa de câini Akita provine din regiunea montană a acestei prefecturi."],
            "en": ["The region produces top-class sake thanks to excellent rice and water.", "The Akita dog breed originates from the mountainous region of this prefecture."]
        }
    },
    {
        "id": "morioka-cities-v2",
        "type": "state-capital",
        "parent": "JP-03",
        "coords": [141.152, 39.702],
        "name": {
            "de": "Morioka",
            "hu": "Morioka",
            "ro": "Morioka",
            "en": "Morioka"
        },
        "description": {
            "de": "Morioka liegt in einem weiten Tal, das vom vulkanischen Berg Iwate überragt wird. Die Stadt im Norden Honshus ist ein architektonischer Mix aus alten Samurai-Häusern und Gebäuden der Meiji-Ära, aber ihre größte Berühmtheit verdankt sie ihren drei charakteristischen Nudelgerichten.",
            "hu": "Morioka egy széles völgyben fekszik, amelyet az Ivate hegy ural. Az észak-honsúi város a régi szamurájházak és a Meidzsi-kori épületek építészeti keveréke, de leginkább három jellegzetes tésztaételéről híres.",
            "ro": "Morioka este situat într-o vale largă dominată de Muntele vulcanic Iwate. Orașul din nordul Honshu este un amestec arhitectural de vechi case de samurai și clădiri din era Meiji, dar faima sa principală se datorează celor trei preparate locale cu tăiței.",
            "en": "Morioka is situated in a wide valley dominated by the volcanic Mount Iwate. The city in northern Honshu is an architectural mix of old samurai houses and Meiji-era buildings, but it is most famous for its three distinct local noodle dishes."
        },
        "facts": {
            "de": ["Wanko Soba ist ein berühmtes Nudel-Wettessen in Morioka.", "Der Kitakami-Fluss durchquert das Stadtzentrum."],
            "hu": ["A vanko szoba egy híres tésztaevő verseny Moriokában.", "A Kitakami-folyó keresztezi a belvárost."],
            "ro": ["Wanko Soba este o competiție celebră de mâncat tăiței în Morioka.", "Râul Kitakami traversează centrul orașului."],
            "en": ["Wanko Soba is a famous noodle-eating challenge in Morioka.", "The Kitakami River crosses the downtown area."]
        }
    },
    {
        "id": "yamagata-cities-v2",
        "type": "state-capital",
        "parent": "JP-06",
        "coords": [140.363, 38.240],
        "name": {
            "de": "Yamagata",
            "hu": "Jamagata",
            "ro": "Yamagata",
            "en": "Yamagata"
        },
        "description": {
            "de": "Umgeben von majestätischen Bergen ist Yamagata eine Basis für Naturliebhaber und Onsen-Besucher. Nur eine kurze Fahrt entfernt liegt das Bergkloster Yamadera und das Zao-Gebirge, das im Winter für seine kuriosen vereisten Bäume ('Schneemonster') berühmt ist.",
            "hu": "A fenséges hegyekkel körülvett Jamagata a természetkedvelők és az onsenek látogatóinak központja. Csak egy rövid útra található a Jamadera hegyi kolostor és a Zaó-hegység, amely télen a különös jéggel borított fáiról ('hószörnyek') híres.",
            "ro": "Înconjurat de munți maiestuoși, Yamagata este o bază pentru iubitorii de natură și vizitatorii onsenelor. La doar o scurtă distanță se află mănăstirea montană Yamadera și Munții Zao, renumiți iarna pentru copacii înghețați ('monștrii de zăpadă').",
            "en": "Surrounded by majestic mountains, Yamagata is a base for nature lovers and onsen visitors. Just a short drive away lies the Yamadera mountain monastery and the Zao mountains, famous in winter for their curious ice-covered trees ('snow monsters')."
        },
        "facts": {
            "de": ["Das Yamagata-Hanagasa-Matsuri zieht im August über eine Million Besucher an.", "Die Präfektur ist der größte Kirschenproduzent Japans."],
            "hu": ["A jamagatai Hanagasza Macuri augusztusban több mint egymillió látogatót vonz.", "A prefektúra Japán legnagyobb cseresznyetermesztője."],
            "ro": ["Festivalul Yamagata Hanagasa Matsuri atrage peste un milion de vizitatori în august.", "Prefectura este cel mai mare producător de cireșe din Japonia."],
            "en": ["The Yamagata Hanagasa Matsuri attracts over a million visitors in August.", "The prefecture is Japan's largest producer of cherries."]
        }
    },
    {
        "id": "fukushima-cities-v2",
        "type": "state-capital",
        "parent": "JP-07",
        "coords": [140.467, 37.760],
        "name": {
            "de": "Fukushima",
            "hu": "Fukusima",
            "ro": "Fukushima",
            "en": "Fukushima"
        },
        "description": {
            "de": "Die Hauptstadt der gleichnamigen Präfektur ist umgeben von tiefen Wäldern und heißen Quellen wie dem Iizaka Onsen. Im Frühling erblüht der Hanamiyama-Park in spektakulären Farben, was die Stadt, die weitab der Küste liegt, zu einem Symbol der landwirtschaftlichen und kulturellen Resilienz macht.",
            "hu": "Az azonos nevű prefektúra fővárosát sűrű erdők és hőforrások veszik körül, mint például az Iizaka Onsen. Tavasszal a Hanamijama park látványos színekben pompázik, ami a parttól távol fekvő várost a mezőgazdasági és kulturális rugalmasság szimbólumává teszi.",
            "ro": "Capitala prefecturii cu același nume este înconjurată de păduri dese și izvoare termale precum Iizaka Onsen. Primăvara, Parcul Hanamiyama înflorește în culori spectaculoase, făcând din acest oraș, situat departe de coastă, un simbol al rezilienței agricole și culturale.",
            "en": "The capital of its namesake prefecture is surrounded by deep forests and hot springs like Iizaka Onsen. In spring, Hanamiyama Park blooms in spectacular colors, making the city, located far from the coast, a symbol of agricultural and cultural resilience."
        },
        "facts": {
            "de": ["Liegt im Beckenbecken rund 60 km von der Pazifikküste entfernt.", "Berühmt für die Kultivierung hochwertiger Pfirsiche."],
            "hu": ["A medencében fekszik, mintegy 60 km-re a Csendes-óceán partjától.", "Híres a kiváló minőségű őszibarack termesztéséről."],
            "ro": ["Situat în bazin, la aproximativ 60 km de coasta Pacificului.", "Renumit pentru cultivarea piersicilor de înaltă calitate."],
            "en": ["Located in a basin about 60 km from the Pacific coast.", "Famous for cultivating high-quality peaches."]
        }
    },
    {
        "id": "mito-cities-v2",
        "type": "state-capital",
        "parent": "JP-08",
        "coords": [140.467, 36.365],
        "name": {
            "de": "Mito",
            "hu": "Mito",
            "ro": "Mito",
            "en": "Mito"
        },
        "description": {
            "de": "Mito ist die historische Machtbasis des Mito-Zweiges der Tokugawa-Familie. Die Hauptattraktion der Stadt ist der Kairakuen, der für seine weitläufigen Pflaumenblütenhaine bekannt ist und als einer der drei großen Landschaftsgärten Japans gilt.",
            "hu": "Mito a Tokugava-család mitói ágának történelmi bázisa. A város fő látványossága a Kairakuen, amely hatalmas szilvavirág ligeteiről ismert, és Japán három nagy tájkertjének egyikeként tartják számon.",
            "ro": "Mito este baza istorică a puterii ramurii Mito a familiei Tokugawa. Atracția principală a orașului este Kairakuen, renumită pentru întinsele sale plantații de pruni înfloriți, considerată una dintre cele trei mari grădini peisagistice din Japonia.",
            "en": "Mito is the historical power base of the Mito branch of the Tokugawa family. The city's main attraction is Kairakuen, known for its expansive plum blossom groves and considered one of Japan's three great landscape gardens."
        },
        "facts": {
            "de": ["Landesweit berühmt für Natto, fermentierte Sojabohnen.", "Der Tokugawa-Clan herrschte hier während der Edo-Zeit."],
            "hu": ["Országszerte híres a nattóról, a fermentált szójababról.", "A Tokugava-klán uralkodott itt az Edo-korszakban."],
            "ro": ["Renumit la nivel național pentru natto, boabe de soia fermentate.", "Clanul Tokugawa a condus aici în timpul perioadei Edo."],
            "en": ["Nationally famous for natto, fermented soybeans.", "The Tokugawa clan ruled here during the Edo period."]
        }
    },
    {
        "id": "nara-cities-v2",
        "type": "state-capital",
        "parent": "JP-29",
        "coords": [135.804, 34.685],
        "name": {
            "de": "Nara",
            "hu": "Nara",
            "ro": "Nara",
            "en": "Nara"
        },
        "description": {
            "de": "Vor Kyoto war Nara im 8. Jahrhundert die erste dauerhafte Hauptstadt Japans. Der Nara-Park ist weltberühmt für seine hunderten frei herumlaufenden Sika-Hirsche sowie für den Todai-ji-Tempel, dessen Haupthalle die massive Bronzestatue des Großen Buddha beherbergt.",
            "hu": "Kiotó előtt Nara volt Japán első állandó fővárosa a 8. században. A Nara Park világhírű az ott szabadon kószáló több száz szikaszarvasról, valamint a Tódai-dzsi templomról, amelynek főcsarnokában áll a Nagy Buddha hatalmas bronzszobra.",
            "ro": "Înainte de Kyoto, Nara a fost prima capitală permanentă a Japoniei în secolul al VIII-lea. Parcul Nara este faimos în întreaga lume pentru sutele de căprioare sika care se plimbă liber și pentru templul Todai-ji, a cărui sală principală adăpostește statuia uriașă de bronz a Marelui Buddha.",
            "en": "Before Kyoto, Nara was Japan's first permanent capital in the 8th century. Nara Park is world-famous for its hundreds of free-roaming sika deer, as well as Todai-ji Temple, whose main hall houses the massive bronze statue of the Great Buddha."
        },
        "facts": {
            "de": ["Viele Stätten in Nara gehören zum UNESCO-Weltkulturerbe.", "Die Hirsche gelten als heilige Boten der Götter."],
            "hu": ["Nara számos helyszíne az UNESCO világörökség része.", "A szarvasokat az istenek szent hírnökeinek tekintik."],
            "ro": ["Multe situri din Nara fac parte din Patrimoniul Mondial UNESCO.", "Căprioarele sunt considerate mesageri sacri ai zeilor."],
            "en": ["Many sites in Nara are UNESCO World Heritage sites.", "The deer are considered sacred messengers of the gods."]
        }
    },
    {
        "id": "kochi-cities-v2",
        "type": "state-capital",
        "parent": "JP-39",
        "coords": [133.531, 33.558],
        "name": {
            "de": "Kochi",
            "hu": "Kócsi",
            "ro": "Kochi",
            "en": "Kochi"
        },
        "description": {
            "de": "Abgeschirmt durch tiefe Berge im Süden von Shikoku, hat Kochi eine unabhängige, lebhafte Kultur entwickelt. Das unberührte Originalschloss der Stadt und der Strand von Katsurahama sind Ikonen der Region, die auch für das energiegeladene Yosakoi-Sommerfestival bekannt ist.",
            "hu": "A Sikoku déli részén lévő mély hegyek által elszigetelt Kócsi független, élénk kultúrát fejlesztett ki. A város érintetlen eredeti kastélya és a Kacurahama strand a régió ikonjai, amely az energikus Juszakoj nyári fesztiválról is ismert.",
            "ro": "Izolat de munții adânci din sudul Shikoku, Kochi a dezvoltat o cultură independentă și plină de viață. Castelul original intact al orașului și plaja Katsurahama sunt icoane ale regiunii, cunoscută și pentru energicul festival de vară Yosakoi.",
            "en": "Isolated by deep mountains in southern Shikoku, Kochi has developed an independent, lively culture. The city's intact original castle and Katsurahama Beach are icons of the region, which is also known for the energetic Yosakoi summer festival."
        },
        "facts": {
            "de": ["Heimatstadt von Sakamoto Ryoma, einem Helden der Meiji-Restauration.", "Katsuo no Tataki (angebratener Bonito) ist die lokale Spezialität."],
            "hu": ["Szakamoto Rjóma, a Meidzsi-restauráció egyik hősének szülővárosa.", "A Kacuo no Tataki (kissé átsütött bonitó) a helyi specialitás."],
            "ro": ["Orașul natal al lui Sakamoto Ryoma, un erou al Restaurării Meiji.", "Katsuo no Tataki (bonito ușor prăjit) este specialitatea locală."],
            "en": ["Hometown of Sakamoto Ryoma, a hero of the Meiji Restoration.", "Katsuo no Tataki (seared bonito) is the local specialty."]
        }
    },
    {
        "id": "naha-cities-v2",
        "type": "state-capital",
        "parent": "JP-47",
        "coords": [127.679, 26.212],
        "name": {
            "de": "Naha",
            "hu": "Naha",
            "ro": "Naha",
            "en": "Naha"
        },
        "description": {
            "de": "Als politisches und kommerzielles Zentrum von Okinawa spiegelt Naha das reiche Erbe des Ryukyu-Königreichs wider. Die belebte Kokusai-Dori ('Internationale Straße') und das historische, wenn auch durch Brände beschädigte Shuri-Schloss sind die zentralen kulturellen Ankerpunkte der tropischen Stadt.",
            "hu": "Okinava politikai és kereskedelmi központjaként Naha a Rjúkjú Királyság gazdag örökségét tükrözi. A nyüzsgő Kokuszai Dori ('Nemzetközi Utca') és a történelmi, bár tűzvészek által megrongálódott Szuri kastély a trópusi város központi kulturális támpontjai.",
            "ro": "Ca centru politic și comercial al Okinawa, Naha reflectă bogata moștenire a Regatului Ryukyu. Strada aglomerată Kokusai Dori ('Strada Internațională') și istoricul Castel Shuri, deși avariat de incendii, sunt ancorele culturale centrale ale orașului tropical.",
            "en": "As the political and commercial center of Okinawa, Naha reflects the rich heritage of the Ryukyu Kingdom. The bustling Kokusai Dori ('International Street') and the historic, though fire-damaged, Shuri Castle are the central cultural anchors of the tropical city."
        },
        "facts": {
            "de": ["Ehemaliger Sitz der Könige von Ryukyu.", "Eine Monorail verbindet den Flughafen mit dem Stadtzentrum."],
            "hu": ["A Rjúkjú-királyok egykori székhelye.", "Egy egysínű vasút köti össze a repülőteret a városközponttal."],
            "ro": ["Fostul sediu al regilor din Ryukyu.", "Un monorai conectează aeroportul cu centrul orașului."],
            "en": ["Former seat of the kings of Ryukyu.", "A monorail connects the airport with the city center."]
        }
    }
]

import sys

with open("generate_poi_extra.ts", "w", encoding="utf-8") as f:
    f.write('import type { POI } from "./poi";\n\n')
    f.write('export const poiExtraJapanCitiesV2: POI[] = [\n')
    
    for i, city in enumerate(cities):
        f.write('  {\n')
        f.write(f'    id: "{city["id"]}",\n')
        f.write(f'    type: "{city["type"]}",\n')
        f.write(f'    parent: "{city["parent"]}",\n')
        f.write(f'    coords: [{city["coords"][0]}, {city["coords"][1]}],\n')
        
        # name
        f.write('    name: {\n')
        f.write(f'      de: "{city["name"]["de"]}",\n')
        f.write(f'      hu: "{city["name"]["hu"]}",\n')
        f.write(f'      ro: "{city["name"]["ro"]}",\n')
        f.write(f'      en: "{city["name"]["en"]}"\n')
        f.write('    },\n')
        
        # description
        f.write('    description: {\n')
        f.write(f'      de: "{city["description"]["de"]}",\n')
        f.write(f'      hu: "{city["description"]["hu"]}",\n')
        f.write(f'      ro: "{city["description"]["ro"]}",\n')
        f.write(f'      en: "{city["description"]["en"]}"\n')
        f.write('    },\n')
        
        # facts
        f.write('    facts: {\n')
        f.write(f'      de: ["{city["facts"]["de"][0]}", "{city["facts"]["de"][1]}"],\n')
        f.write(f'      hu: ["{city["facts"]["hu"][0]}", "{city["facts"]["hu"][1]}"],\n')
        f.write(f'      ro: ["{city["facts"]["ro"][0]}", "{city["facts"]["ro"][1]}"],\n')
        f.write(f'      en: ["{city["facts"]["en"][0]}", "{city["facts"]["en"][1]}"]\n')
        f.write('    }\n')
        
        if i == len(cities) - 1:
            f.write('  }\n')
        else:
            f.write('  },\n')
            
    f.write('];\n')

