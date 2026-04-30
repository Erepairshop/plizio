import json

pois = [
    {
        "id": "bo-mina-san-cristobal-economic-v2",
        "type": "industry",
        "parent": "BO-P",
        "coords": [-68.172, -21.092],
        "name": {
            "de": "Mina San Cristóbal",
            "hu": "San Cristóbal Bánya",
            "ro": "Mina San Cristóbal",
            "en": "San Cristóbal Mine"
        },
        "description": {
            "de": "Eine der größten Zink-, Blei- und Silberminen der Welt im Departamento Potosí.",
            "hu": "A világ egyik legnagyobb cink-, ólom- és ezüstbányája Potosí megyében.",
            "ro": "Una dintre cele mai mari mine de zinc, plumb și argint din lume, situată în Potosí.",
            "en": "One of the world's largest zinc, lead, and silver mines located in the Potosí Department."
        },
        "facts": {
            "de": ["Produziert Zink, Blei und Silber.", "Wichtiger Wirtschaftsfaktor für Bolivien.", "Befindet sich im Altiplano.", "Tagebaubetrieb."],
            "hu": ["Cinket, ólmot és ezüstöt termel.", "Fontos gazdasági tényező Bolívia számára.", "Az Altiplano területén található.", "Nyíltvízi bányászat."],
            "ro": ["Produce zinc, plumb și argint.", "Factor economic important pentru Bolivia.", "Situată în Altiplano.", "Exploatare la suprafață."],
            "en": ["Produces zinc, lead, and silver.", "Important economic factor for Bolivia.", "Located in the Altiplano.", "Open-pit mining operation."]
        }
    },
    {
        "id": "bo-mina-huanuni-economic-v2",
        "type": "industry",
        "parent": "BO-O",
        "coords": [-66.833, -18.283],
        "name": {
            "de": "Mina Huanuni",
            "hu": "Huanuni Bánya",
            "ro": "Mina Huanuni",
            "en": "Huanuni Mine"
        },
        "description": {
            "de": "Die wichtigste und produktivste Zinnmine Boliviens, betrieben vom staatlichen Unternehmen COMIBOL.",
            "hu": "Bolívia legfontosabb és legtermelékenyebb ónbányája, melyet a COMIBOL állami vállalat üzemeltet.",
            "ro": "Cea mai importantă și productivă mină de staniu din Bolivia, operată de compania de stat COMIBOL.",
            "en": "Bolivia's most important and productive tin mine, operated by the state-owned company COMIBOL."
        },
        "facts": {
            "de": ["Größte Zinnmine Boliviens.", "Unterirdischer Abbau.", "Betrieben von COMIBOL.", "Zentrum der bolivianischen Bergarbeitergewerkschaft."],
            "hu": ["Bolívia legnagyobb ónbányája.", "Földalatti bányászat.", "A COMIBOL üzemelteti.", "A bolíviai bányászszakszervezet központja."],
            "ro": ["Cea mai mare mină de staniu din Bolivia.", "Exploatare subterană.", "Operată de COMIBOL.", "Centrul sindicatului minerilor bolivieni."],
            "en": ["Largest tin mine in Bolivia.", "Underground mining.", "Operated by COMIBOL.", "Center of the Bolivian miners' union."]
        }
    },
    {
        "id": "bo-mutun-iron-economic-v2",
        "type": "industry",
        "parent": "BO-S",
        "coords": [-57.916, -19.183],
        "name": {
            "de": "El Mutún",
            "hu": "El Mutún Vasércbánya",
            "ro": "Mina de fier El Mutún",
            "en": "El Mutún Iron Mine"
        },
        "description": {
            "de": "Eines der größten Eisenerz- und Manganvorkommen der Welt in der Nähe der brasilianischen Grenze.",
            "hu": "A világ egyik legnagyobb vasérc- és mangánlelőhelye a brazil határ közelében.",
            "ro": "Unul dintre cele mai mari zăcăminte de minereu de fier și mangan din lume, lângă granița cu Brazilia.",
            "en": "One of the world's largest iron ore and manganese deposits located near the Brazilian border."
        },
        "facts": {
            "de": ["Riesiges Eisenerzvorkommen.", "Befindet sich im Departamento Santa Cruz.", "Geschätzte 40 Milliarden Tonnen Eisenerz.", "Wichtig für die lokale Stahlindustrie."],
            "hu": ["Hatalmas vasérclelőhely.", "Santa Cruz megyében található.", "Becslések szerint 40 milliárd tonna vasérc.", "Fontos a helyi acélipar számára."],
            "ro": ["Zăcământ imens de minereu de fier.", "Situat în departamentul Santa Cruz.", "Se estimează la 40 de miliarde de tone de minereu de fier.", "Important pentru industria siderurgică locală."],
            "en": ["Huge iron ore deposit.", "Located in the Santa Cruz Department.", "Estimated 40 billion tons of iron ore.", "Important for the local steel industry."]
        }
    },
    {
        "id": "bo-mina-colquiri-economic-v2",
        "type": "industry",
        "parent": "BO-L",
        "coords": [-67.133, -17.400],
        "name": {
            "de": "Mina Colquiri",
            "hu": "Colquiri Bánya",
            "ro": "Mina Colquiri",
            "en": "Colquiri Mine"
        },
        "description": {
            "de": "Eine bedeutende Mine für den Abbau von Zinn und Zink im Departamento La Paz.",
            "hu": "Egy jelentős ón- és cinkbánya La Paz megyében.",
            "ro": "O mină importantă pentru extracția de staniu și zinc în departamentul La Paz.",
            "en": "A significant mine for the extraction of tin and zinc in the La Paz Department."
        },
        "facts": {
            "de": ["Produziert Zinn und Zink.", "Verstaatlicht im Jahr 2012.", "Betrieben von der staatlichen COMIBOL.", "Wichtige Einnahmequelle der Region."],
            "hu": ["Ónt és cinket termel.", "2012-ben államosították.", "Az állami COMIBOL üzemelteti.", "A régió fontos bevételi forrása."],
            "ro": ["Produce staniu și zinc.", "Naționalizată în 2012.", "Operată de compania de stat COMIBOL.", "Sursă importantă de venit pentru regiune."],
            "en": ["Produces tin and zinc.", "Nationalized in 2012.", "Operated by the state-owned COMIBOL.", "Important source of income for the region."]
        }
    },
    {
        "id": "bo-planta-vinto-economic-v2",
        "type": "industry",
        "parent": "BO-O",
        "coords": [-67.042, -17.994],
        "name": {
            "de": "Planta Metalúrgica Vinto",
            "hu": "Vinto Kohászati Üzem",
            "ro": "Uzina Metalurgică Vinto",
            "en": "Vinto Metallurgical Plant"
        },
        "description": {
            "de": "Der wichtigste Zinnschmelzbetrieb Boliviens, der Erze aus Huanuni und Colquiri verarbeitet.",
            "hu": "Bolívia legfontosabb ónkohászati üzeme, amely a huanuni és colquirii érceket dolgozza fel.",
            "ro": "Cea mai importantă topitorie de staniu din Bolivia, care procesează minereuri din Huanuni și Colquiri.",
            "en": "Bolivia's most important tin smelting plant, processing ores from Huanuni and Colquiri."
        },
        "facts": {
            "de": ["Zinnschmelzanlage.", "Befindet sich in Oruro.", "Verarbeitet Erze der wichtigsten Minen.", "Staatliches Unternehmen."],
            "hu": ["Ónkohászati üzem.", "Oruro városában található.", "A legfontosabb bányák érceit dolgozza fel.", "Állami vállalat."],
            "ro": ["Topitorie de staniu.", "Situată în Oruro.", "Procesează minereuri din cele mai importante mine.", "Companie de stat."],
            "en": ["Tin smelting facility.", "Located in Oruro.", "Processes ores from the most important mines.", "State-owned company."]
        }
    },
    {
        "id": "bo-karachipampa-economic-v2",
        "type": "industry",
        "parent": "BO-P",
        "coords": [-65.700, -19.550],
        "name": {
            "de": "Planta Metalúrgica Karachipampa",
            "hu": "Karachipampa Kohászati Üzem",
            "ro": "Uzina Metalurgică Karachipampa",
            "en": "Karachipampa Metallurgical Plant"
        },
        "description": {
            "de": "Eine große Blei- und Silberschmelzanlage in der Nähe von Potosí.",
            "hu": "Egy nagy ólom- és ezüstkohászati üzem Potosí közelében.",
            "ro": "O mare topitorie de plumb și argint în apropiere de Potosí.",
            "en": "A large lead and silver smelting plant near Potosí."
        },
        "facts": {
            "de": ["Schmilzt Blei und Silber.", "In den 1980er Jahren gebaut.", "Lange Zeit inaktiv gewesen.", "Wichtig für die lokale Wertschöpfung."],
            "hu": ["Ólmot és ezüstöt olvaszt.", "Az 1980-as években épült.", "Hosszú ideig inaktív volt.", "Fontos a helyi hozzáadott érték szempontjából."],
            "ro": ["Topește plumb și argint.", "Construită în anii 1980.", "A fost inactivă mult timp.", "Importantă pentru valoarea adăugată locală."],
            "en": ["Smelts lead and silver.", "Built in the 1980s.", "Was inactive for a long time.", "Important for local value addition."]
        }
    },
    {
        "id": "bo-bulo-bulo-urea-economic-v2",
        "type": "industry",
        "parent": "BO-C",
        "coords": [-64.364, -17.262],
        "name": {
            "de": "Planta de Urea y Amoniaco Bulo Bulo",
            "hu": "Bulo Bulo Karbamid és Ammónia Üzem",
            "ro": "Uzina de Uree și Amoniac Bulo Bulo",
            "en": "Bulo Bulo Urea and Ammonia Plant"
        },
        "description": {
            "de": "Eine große petrochemische Anlage zur Herstellung von Düngemitteln aus Erdgas.",
            "hu": "Nagy kőolajipari üzem, amely földgázból állít elő műtrágyát.",
            "ro": "O mare uzină petrochimică pentru producția de îngrășăminte din gaze naturale.",
            "en": "A large petrochemical plant for the production of fertilizers from natural gas."
        },
        "facts": {
            "de": ["Produziert Harnstoff und Ammoniak.", "Nutzt Erdgas als Rohstoff.", "Wichtig für die Landwirtschaft.", "Exportiert Düngemittel in Nachbarländer."],
            "hu": ["Karbamidot és ammóniát termel.", "Földgázt használ nyersanyagként.", "Fontos a mezőgazdaság számára.", "Műtrágyát exportál a szomszédos országokba."],
            "ro": ["Produce uree și amoniac.", "Folosește gaz natural ca materie primă.", "Importantă pentru agricultură.", "Exportă îngrășăminte în țările vecine."],
            "en": ["Produces urea and ammonia.", "Uses natural gas as raw material.", "Important for agriculture.", "Exports fertilizers to neighboring countries."]
        }
    },
    {
        "id": "bo-refineria-gualberto-villarroel-economic-v2",
        "type": "industry",
        "parent": "BO-C",
        "coords": [-66.128, -17.430],
        "name": {
            "de": "Refinería Gualberto Villarroel",
            "hu": "Gualberto Villarroel Olajfinomító",
            "ro": "Rafinăria Gualberto Villarroel",
            "en": "Gualberto Villarroel Refinery"
        },
        "description": {
            "de": "Die größte Erdölraffinerie Boliviens, gelegen in der Stadt Cochabamba.",
            "hu": "Bolívia legnagyobb olajfinomítója, amely Cochabamba városában található.",
            "ro": "Cea mai mare rafinărie de petrol din Bolivia, situată în orașul Cochabamba.",
            "en": "Bolivia's largest oil refinery, located in the city of Cochabamba."
        },
        "facts": {
            "de": ["Größte Raffinerie Boliviens.", "Produziert Benzin und Diesel.", "Betrieben von YPFB.", "Versorgt den Inlandsmarkt mit Kraftstoffen."],
            "hu": ["Bolívia legnagyobb finomítója.", "Benzint és gázolajat termel.", "Az YPFB üzemelteti.", "Ellátja a belföldi piacot üzemanyaggal."],
            "ro": ["Cea mai mare rafinărie din Bolivia.", "Produce benzină și motorină.", "Operată de YPFB.", "Aprovizionează piața internă cu combustibili."],
            "en": ["Bolivia's largest refinery.", "Produces gasoline and diesel.", "Operated by YPFB.", "Supplies the domestic market with fuels."]
        }
    },
    {
        "id": "bo-refineria-guillermo-elder-bell-economic-v2",
        "type": "industry",
        "parent": "BO-S",
        "coords": [-63.155, -17.842],
        "name": {
            "de": "Refinería Guillermo Elder Bell",
            "hu": "Guillermo Elder Bell Olajfinomító",
            "ro": "Rafinăria Guillermo Elder Bell",
            "en": "Guillermo Elder Bell Refinery"
        },
        "description": {
            "de": "Eine wichtige Erdölraffinerie in Santa Cruz de la Sierra, die Treibstoffe für den Osten Boliviens produziert.",
            "hu": "Fontos olajfinomító Santa Cruz de la Sierra-ban, amely Bolívia keleti részét látja el üzemanyaggal.",
            "ro": "O rafinărie importantă în Santa Cruz de la Sierra, care produce combustibili pentru estul Boliviei.",
            "en": "An important oil refinery in Santa Cruz de la Sierra, producing fuels for eastern Bolivia."
        },
        "facts": {
            "de": ["Wichtige Erdölraffinerie.", "Befindet sich in Santa Cruz.", "Betrieben von YPFB.", "Verarbeitet Rohöl aus der Region."],
            "hu": ["Fontos olajfinomító.", "Santa Cruz városában található.", "Az YPFB üzemelteti.", "A régió nyersolaját dolgozza fel."],
            "ro": ["Rafinărie importantă de petrol.", "Situată în Santa Cruz.", "Operată de YPFB.", "Procesează țițeiul din regiune."],
            "en": ["Important oil refinery.", "Located in Santa Cruz.", "Operated by YPFB.", "Processes crude oil from the region."]
        }
    },
    {
        "id": "bo-planta-carlos-villegas-economic-v2",
        "type": "industry",
        "parent": "BO-T",
        "coords": [-63.633, -21.900],
        "name": {
            "de": "Planta Separadora de Líquidos Carlos Villegas",
            "hu": "Carlos Villegas Folyadékszétválasztó Üzem",
            "ro": "Uzina de Separare a Lichidelor Carlos Villegas",
            "en": "Carlos Villegas Liquids Separation Plant"
        },
        "description": {
            "de": "Eine riesige Anlage zur Verarbeitung von Erdgas in der Region Gran Chaco im Süden Boliviens.",
            "hu": "Hatalmas földgázfeldolgozó üzem a dél-bolíviai Gran Chaco régióban.",
            "ro": "O uzină imensă pentru procesarea gazelor naturale în regiunea Gran Chaco din sudul Boliviei.",
            "en": "A huge natural gas processing plant in the Gran Chaco region of southern Bolivia."
        },
        "facts": {
            "de": ["Gewinnt Flüssiggas (LPG).", "Eines der größten Werke Südamerikas.", "Wichtig für den Gasexport.", "Befindet sich in Yacuiba."],
            "hu": ["Cseppfolyósított gázt (LPG) állít elő.", "Dél-Amerika egyik legnagyobb üzeme.", "Fontos a gázexport szempontjából.", "Yacuiba városában található."],
            "ro": ["Extrage gaz petrolier lichefiat (GPL).", "Una dintre cele mai mari uzine din America de Sud.", "Importantă pentru exportul de gaze.", "Situată în Yacuiba."],
            "en": ["Extracts liquefied petroleum gas (LPG).", "One of the largest plants in South America.", "Important for gas export.", "Located in Yacuiba."]
        }
    },
    {
        "id": "bo-planta-rio-grande-economic-v2",
        "type": "industry",
        "parent": "BO-S",
        "coords": [-62.900, -18.250],
        "name": {
            "de": "Planta Separadora de Líquidos Río Grande",
            "hu": "Río Grande Folyadékszétválasztó Üzem",
            "ro": "Uzina de Separare a Lichidelor Río Grande",
            "en": "Río Grande Liquids Separation Plant"
        },
        "description": {
            "de": "Eine Anlage zur Erdgasverarbeitung im Departamento Santa Cruz zur Gewinnung von LPG.",
            "hu": "Földgázfeldolgozó üzem Santa Cruz megyében, LPG kinyerésére.",
            "ro": "O uzină de procesare a gazelor naturale în departamentul Santa Cruz pentru extracția GPL.",
            "en": "A natural gas processing plant in the Santa Cruz Department for LPG extraction."
        },
        "facts": {
            "de": ["Produziert LPG.", "Erhöht den Wert des Erdgases.", "Wichtige Einnahmequelle.", "Betrieben von YPFB."],
            "hu": ["LPG-t termel.", "Növeli a földgáz értékét.", "Fontos bevételi forrás.", "Az YPFB üzemelteti."],
            "ro": ["Produce GPL.", "Crește valoarea gazului natural.", "Sursă importantă de venit.", "Operată de YPFB."],
            "en": ["Produces LPG.", "Increases the value of natural gas.", "Important source of income.", "Operated by YPFB."]
        }
    },
    {
        "id": "bo-planta-litio-uyuni-economic-v2",
        "type": "industry",
        "parent": "BO-P",
        "coords": [-67.067, -20.650],
        "name": {
            "de": "Planta Industrial de Carbonato de Litio",
            "hu": "Lítium-karbonát Ipari Üzem",
            "ro": "Uzina Industrială de Carbonat de Litiu",
            "en": "Industrial Lithium Carbonate Plant"
        },
        "description": {
            "de": "Industrieanlage am Rand des Salar de Uyuni zur Gewinnung von Lithiumkarbonat für Batterien.",
            "hu": "Ipari létesítmény a Salar de Uyuni szélén, amely lítium-karbonátot állít elő akkumulátorokhoz.",
            "ro": "Instalație industrială la marginea Salar de Uyuni pentru extracția carbonatului de litiu pentru baterii.",
            "en": "Industrial facility on the edge of the Salar de Uyuni for extracting lithium carbonate for batteries."
        },
        "facts": {
            "de": ["Produziert Lithiumkarbonat.", "Wichtig für die Batterieindustrie.", "Nutzt die Sole des Salar de Uyuni.", "Strategisches Projekt für Bolivien."],
            "hu": ["Lítium-karbonátot termel.", "Fontos az akkumulátoripar számára.", "A Salar de Uyuni sóoldatát használja.", "Stratégiai projekt Bolívia számára."],
            "ro": ["Produce carbonat de litiu.", "Importantă pentru industria bateriilor.", "Folosește saramura din Salar de Uyuni.", "Proiect strategic pentru Bolivia."],
            "en": ["Produces lithium carbonate.", "Important for the battery industry.", "Uses brine from the Salar de Uyuni.", "Strategic project for Bolivia."]
        }
    },
    {
        "id": "bo-cemento-viacha-economic-v2",
        "type": "industry",
        "parent": "BO-L",
        "coords": [-68.300, -16.650],
        "name": {
            "de": "Fábrica de Cemento Viacha (Soboce)",
            "hu": "Viacha Cementgyár",
            "ro": "Fabrica de Ciment Viacha",
            "en": "Viacha Cement Plant"
        },
        "description": {
            "de": "Die größte Zementfabrik Boliviens, die Baumaterial für die Region La Paz und das restliche Land produziert.",
            "hu": "Bolívia legnagyobb cementgyára, amely építőanyagot állít elő La Paz régiója és az ország többi része számára.",
            "ro": "Cea mai mare fabrică de ciment din Bolivia, producând materiale de construcție pentru regiunea La Paz.",
            "en": "Bolivia's largest cement factory, producing building materials for the La Paz region and the rest of the country."
        },
        "facts": {
            "de": ["Größte Zementfabrik des Landes.", "Produziert Zement und Beton.", "Befindet sich in Viacha.", "Wichtig für die Bauwirtschaft."],
            "hu": ["Az ország legnagyobb cementgyára.", "Cementet és betont gyárt.", "Viacha városában található.", "Fontos az építőipar számára."],
            "ro": ["Cea mai mare fabrică de ciment din țară.", "Produce ciment și beton.", "Situată în Viacha.", "Importantă pentru industria construcțiilor."],
            "en": ["Largest cement plant in the country.", "Produces cement and concrete.", "Located in Viacha.", "Important for the construction industry."]
        }
    },
    {
        "id": "bo-cemento-fancesa-economic-v2",
        "type": "industry",
        "parent": "BO-H",
        "coords": [-65.250, -19.033],
        "name": {
            "de": "Fábrica de Cemento Fancesa",
            "hu": "Fancesa Cementgyár",
            "ro": "Fabrica de Ciment Fancesa",
            "en": "Fancesa Cement Plant"
        },
        "description": {
            "de": "Eine bedeutende Zementproduktionsanlage in Sucre, die den Süden Boliviens beliefert.",
            "hu": "Jelentős cementgyártó üzem Sucre városában, amely Dél-Bolíviát látja el.",
            "ro": "O importantă unitate de producție a cimentului în Sucre, care aprovizionează sudul Boliviei.",
            "en": "A significant cement production facility in Sucre, supplying southern Bolivia."
        },
        "facts": {
            "de": ["Bedeutender Zementproduzent.", "Befindet sich in Sucre.", "Wirtschaftsmotor für die Region Chuquisaca.", "Produziert Baustoffe."],
            "hu": ["Jelentős cementgyártó.", "Sucre városában található.", "A Chuquisaca régió gazdasági motorja.", "Építőanyagokat gyárt."],
            "ro": ["Producător important de ciment.", "Situată în Sucre.", "Motor economic pentru regiunea Chuquisaca.", "Produce materiale de construcție."],
            "en": ["Significant cement producer.", "Located in Sucre.", "Economic engine for the Chuquisaca region.", "Produces building materials."]
        }
    },
    {
        "id": "bo-cemento-coboce-economic-v2",
        "type": "industry",
        "parent": "BO-C",
        "coords": [-66.250, -17.650],
        "name": {
            "de": "Fábrica de Cemento Coboce",
            "hu": "Coboce Cementgyár",
            "ro": "Fabrica de Ciment Coboce",
            "en": "Coboce Cement Plant"
        },
        "description": {
            "de": "Zementfabrik in Capinota, die als Genossenschaft organisiert ist und Baumaterial für das Zentrum Boliviens liefert.",
            "hu": "Capinotában található, szövetkezetként működő cementgyár, amely építőanyagot szállít Közép-Bolívia számára.",
            "ro": "Fabrică de ciment în Capinota, organizată ca o cooperativă, care furnizează materiale pentru centrul Boliviei.",
            "en": "Cement factory in Capinota, organized as a cooperative, providing building material for central Bolivia."
        },
        "facts": {
            "de": ["Zementfabrik in Capinota.", "Als Genossenschaft organisiert.", "Wichtig für das Departamento Cochabamba.", "Starkes Wachstum in den letzten Jahren."],
            "hu": ["Cementgyár Capinotában.", "Szövetkezetként működik.", "Fontos Cochabamba megye számára.", "Erős növekedés az elmúlt években."],
            "ro": ["Fabrică de ciment în Capinota.", "Organizată ca o cooperativă.", "Importantă pentru departamentul Cochabamba.", "Creștere puternică în ultimii ani."],
            "en": ["Cement plant in Capinota.", "Organized as a cooperative.", "Important for the Cochabamba Department.", "Strong growth in recent years."]
        }
    },
    {
        "id": "bo-ingenio-guabira-economic-v2",
        "type": "industry",
        "parent": "BO-S",
        "coords": [-63.166, -17.333],
        "name": {
            "de": "Ingenio Azucarero Guabirá",
            "hu": "Guabirá Cukorgyár",
            "ro": "Fabrica de Zahăr Guabirá",
            "en": "Guabirá Sugar Mill"
        },
        "description": {
            "de": "Eine der größten Zuckerfabriken Boliviens in Montero, die Zucker und Bioethanol produziert.",
            "hu": "Bolívia egyik legnagyobb cukorgyára Monteróban, amely cukrot és bioetanolt állít elő.",
            "ro": "Una dintre cele mai mari fabrici de zahăr din Bolivia, situată în Montero, produce zahăr și bioetanol.",
            "en": "One of the largest sugar mills in Bolivia, located in Montero, producing sugar and bioethanol."
        },
        "facts": {
            "de": ["Produziert Zucker und Alkohol.", "Befindet sich in Montero.", "Wichtig für die Landwirtschaft in Santa Cruz.", "Erzeugt erneuerbare Energien."],
            "hu": ["Cukrot és alkoholt termel.", "Montero városában található.", "Fontos Santa Cruz mezőgazdasága számára.", "Megújuló energiát is termel."],
            "ro": ["Produce zahăr și alcool.", "Situată în Montero.", "Importantă pentru agricultura din Santa Cruz.", "Generează energie regenerabilă."],
            "en": ["Produces sugar and alcohol.", "Located in Montero.", "Important for agriculture in Santa Cruz.", "Generates renewable energy."]
        }
    },
    {
        "id": "bo-ingenio-unagro-economic-v2",
        "type": "industry",
        "parent": "BO-S",
        "coords": [-63.183, -17.116],
        "name": {
            "de": "Ingenio Azucarero Unagro",
            "hu": "Unagro Cukorgyár",
            "ro": "Fabrica de Zahăr Unagro",
            "en": "Unagro Sugar Mill"
        },
        "description": {
            "de": "Eine bedeutende Zuckerfabrik in Mineros, Santa Cruz, die einen großen Teil des nationalen Bedarfs deckt.",
            "hu": "Jelentős cukorgyár a Santa Cruz megyei Minerosban, amely a hazai szükséglet nagy részét fedezi.",
            "ro": "O importantă fabrică de zahăr în Mineros, Santa Cruz, care acoperă o mare parte din necesarul național.",
            "en": "A significant sugar factory in Mineros, Santa Cruz, covering a large part of the national demand."
        },
        "facts": {
            "de": ["Zuckerrohrverarbeitung.", "Befindet sich in Mineros.", "Große Produktionskapazität.", "Wichtiger Arbeitgeber der Region."],
            "hu": ["Cukornád-feldolgozás.", "Mineros városában található.", "Nagy termelési kapacitás.", "Fontos munkáltató a régióban."],
            "ro": ["Procesarea trestiei de zahăr.", "Situată în Mineros.", "Capacitate mare de producție.", "Angajator important în regiune."],
            "en": ["Sugarcane processing.", "Located in Mineros.", "Large production capacity.", "Important employer in the region."]
        }
    },
    {
        "id": "bo-ingenio-san-aurelio-economic-v2",
        "type": "industry",
        "parent": "BO-S",
        "coords": [-63.183, -17.816],
        "name": {
            "de": "Ingenio Azucarero San Aurelio",
            "hu": "San Aurelio Cukorgyár",
            "ro": "Fabrica de Zahăr San Aurelio",
            "en": "San Aurelio Sugar Mill"
        },
        "description": {
            "de": "Die traditionsreichste Zuckerfabrik im städtischen Gebiet von Santa Cruz de la Sierra.",
            "hu": "A leghagyományosabb cukorgyár Santa Cruz de la Sierra városi területén.",
            "ro": "Cea mai tradițională fabrică de zahăr din zona urbană a orașului Santa Cruz de la Sierra.",
            "en": "The most traditional sugar mill in the urban area of Santa Cruz de la Sierra."
        },
        "facts": {
            "de": ["Traditionsreiche Zuckerfabrik.", "Direkt in Santa Cruz gelegen.", "Produziert Zucker und Derivate.", "Gegründet in den 1950er Jahren."],
            "hu": ["Hagyományos cukorgyár.", "Közvetlenül Santa Cruz-ban található.", "Cukrot és származékait termeli.", "Az 1950-es években alapították."],
            "ro": ["Fabrică de zahăr tradițională.", "Situată direct în Santa Cruz.", "Produce zahăr și derivate.", "Fondată în anii 1950."],
            "en": ["Traditional sugar mill.", "Located directly in Santa Cruz.", "Produces sugar and derivatives.", "Founded in the 1950s."]
        }
    },
    {
        "id": "bo-cbn-la-paz-economic-v2",
        "type": "industry",
        "parent": "BO-L",
        "coords": [-68.140, -16.495],
        "name": {
            "de": "Cervecería Boliviana Nacional La Paz",
            "hu": "Bolíviai Nemzeti Sörfőzde La Paz",
            "ro": "Berăria Națională Boliviană La Paz",
            "en": "National Bolivian Brewery La Paz"
        },
        "description": {
            "de": "Die Hauptproduktionsstätte der größten Brauerei Boliviens, die unter anderem das bekannte Paceña-Bier braut.",
            "hu": "Bolívia legnagyobb sörfőzdéjének fő termelési üzeme, amely többek között a híres Paceña sört is főzi.",
            "ro": "Principala unitate de producție a celei mai mari berării din Bolivia, care produce celebra bere Paceña.",
            "en": "The main production facility of Bolivia's largest brewery, brewing the famous Paceña beer, among others."
        },
        "facts": {
            "de": ["Größte Brauerei des Landes.", "Produziert Paceña-Bier.", "Historisches Gebäude in La Paz.", "Wichtiger Steuerzahler."],
            "hu": ["Az ország legnagyobb sörfőzdéje.", "Paceña sört állít elő.", "Történelmi épület La Paz-ban.", "Fontos adófizető."],
            "ro": ["Cea mai mare berărie din țară.", "Produce berea Paceña.", "Clădire istorică în La Paz.", "Contribuabil important."],
            "en": ["Largest brewery in the country.", "Produces Paceña beer.", "Historic building in La Paz.", "Important taxpayer."]
        }
    },
    {
        "id": "bo-pil-andina-cbba-economic-v2",
        "type": "industry",
        "parent": "BO-C",
        "coords": [-66.216, -17.400],
        "name": {
            "de": "Planta PIL Andina Cochabamba",
            "hu": "PIL Andina Cochabamba Üzem",
            "ro": "Fabrica PIL Andina Cochabamba",
            "en": "PIL Andina Cochabamba Plant"
        },
        "description": {
            "de": "Eine der Hauptproduktionsstätten des größten bolivianischen Molkereiunternehmens in Cochabamba.",
            "hu": "A legnagyobb bolíviai tejipari vállalat egyik fő termelési központja Cochabambában.",
            "ro": "Una dintre principalele unități de producție ale celei mai mari companii de lactate din Bolivia.",
            "en": "One of the main production facilities of the largest Bolivian dairy company in Cochabamba."
        },
        "facts": {
            "de": ["Verarbeitet Milchprodukte.", "Größtes Molkereiunternehmen Boliviens.", "Wichtig für die Lebensmittelversorgung.", "Große Produktvielfalt."],
            "hu": ["Tejtermékeket dolgoz fel.", "Bolívia legnagyobb tejipari vállalata.", "Fontos az élelmiszerellátás szempontjából.", "Széles termékválaszték."],
            "ro": ["Procesează produse lactate.", "Cea mai mare companie de lactate din Bolivia.", "Importantă pentru aprovizionarea cu alimente.", "Mare varietate de produse."],
            "en": ["Processes dairy products.", "Largest dairy company in Bolivia.", "Important for food supply.", "Wide variety of products."]
        }
    },
    {
        "id": "bo-planta-sal-ensa-economic-v2",
        "type": "industry",
        "parent": "BO-O",
        "coords": [-68.166, -19.250],
        "name": {
            "de": "Planta ENSA de Sal",
            "hu": "ENSA Sójafeldolgozó Üzem",
            "ro": "Uzina de Sare ENSA",
            "en": "ENSA Salt Processing Plant"
        },
        "description": {
            "de": "Eine Anlage zur Verarbeitung und Jodierung von Salz am Rande des Salar de Coipasa.",
            "hu": "A Salar de Coipasa szélén található sófeldolgozó és jódozó üzem.",
            "ro": "O instalație de procesare și iodare a sării la marginea Salar de Coipasa.",
            "en": "A facility for processing and iodizing salt on the edge of the Salar de Coipasa."
        },
        "facts": {
            "de": ["Verarbeitet Speisesalz.", "Befindet sich am Salar de Coipasa.", "Sichert die Versorgung mit Jodsalz.", "Wichtig für die öffentliche Gesundheit."],
            "hu": ["Étkezési sót dolgoz fel.", "A Salar de Coipasa közelében található.", "Biztosítja a jódozott só ellátását.", "Fontos a közegészségügy szempontjából."],
            "ro": ["Procesează sare de masă.", "Situată lângă Salar de Coipasa.", "Asigură aprovizionarea cu sare iodată.", "Importantă pentru sănătatea publică."],
            "en": ["Processes table salt.", "Located by the Salar de Coipasa.", "Ensures supply of iodized salt.", "Important for public health."]
        }
    },
    {
        "id": "bo-puerto-busch-economic-v2",
        "type": "port",
        "parent": "BO-S",
        "coords": [-58.266, -19.616],
        "name": {
            "de": "Puerto Busch",
            "hu": "Busch Kikötő",
            "ro": "Portul Busch",
            "en": "Puerto Busch"
        },
        "description": {
            "de": "Ein strategisch wichtiger Hafen am Paraguay-Fluss, der Bolivien direkten Zugang zum Atlantik ermöglicht.",
            "hu": "Stratégiailag fontos kikötő a Paraguay folyón, amely közvetlen hozzáférést biztosít Bolíviának az Atlanti-óceánhoz.",
            "ro": "Un port strategic important pe râul Paraguay, care oferă Boliviei acces direct la Oceanul Atlantic.",
            "en": "A strategically important port on the Paraguay River, providing Bolivia with direct access to the Atlantic Ocean."
        },
        "facts": {
            "de": ["Liegt am Paraguay-Fluss.", "Zugang zum Atlantischen Ozean.", "Wichtig für den Eisenerzexport.", "Strategisches Infrastrukturprojekt."],
            "hu": ["A Paraguay folyón fekszik.", "Kijárat az Atlanti-óceánhoz.", "Fontos a vasérc exportjában.", "Stratégiai infrastrukturális projekt."],
            "ro": ["Situat pe râul Paraguay.", "Acces la Oceanul Atlantic.", "Important pentru exportul de minereu de fier.", "Proiect strategic de infrastructură."],
            "en": ["Located on the Paraguay River.", "Access to the Atlantic Ocean.", "Important for iron ore export.", "Strategic infrastructure project."]
        }
    },
    {
        "id": "bo-puerto-jennefer-economic-v2",
        "type": "port",
        "parent": "BO-S",
        "coords": [-57.730, -18.995],
        "name": {
            "de": "Puerto Jennefer",
            "hu": "Jennefer Kikötő",
            "ro": "Portul Jennefer",
            "en": "Puerto Jennefer"
        },
        "description": {
            "de": "Ein wichtiger internationaler Flusshafen am Tamengo-Kanal, der den Handel über den Hidrovía Paraná-Paraguay erleichtert.",
            "hu": "Fontos nemzetközi folyami kikötő a Tamengo-csatornán, amely megkönnyíti a kereskedelmet a Paraná-Paraguay vízi úton.",
            "ro": "Un important port fluvial internațional pe canalul Tamengo, care facilitează comerțul prin Hidrovia Paraná-Paraguay.",
            "en": "An important international river port on the Tamengo Canal, facilitating trade via the Paraná-Paraguay Waterway."
        },
        "facts": {
            "de": ["Internationaler Binnenhafen.", "Liegt am Tamengo-Kanal.", "Verbindet Bolivien mit internationalen Märkten.", "Wichtig für den Agrarexport."],
            "hu": ["Nemzetközi belvízi kikötő.", "A Tamengo-csatornán fekszik.", "Összeköti Bolíviát a nemzetközi piacokkal.", "Fontos a mezőgazdasági export szempontjából."],
            "ro": ["Port interior internațional.", "Situat pe canalul Tamengo.", "Conectează Bolivia la piețele internaționale.", "Important pentru exporturile agricole."],
            "en": ["International inland port.", "Located on the Tamengo Canal.", "Connects Bolivia to international markets.", "Important for agricultural exports."]
        }
    },
    {
        "id": "bo-puerto-aguirre-economic-v2",
        "type": "port",
        "parent": "BO-S",
        "coords": [-57.720, -18.980],
        "name": {
            "de": "Puerto Aguirre",
            "hu": "Aguirre Kikötő",
            "ro": "Portul Aguirre",
            "en": "Puerto Aguirre"
        },
        "description": {
            "de": "Der erste bolivianische Hafen mit souveränem Zugang zum Meer über das Paraguay-Flusssystem.",
            "hu": "Az első bolíviai kikötő, amely szuverén kijáratot biztosít a tengerhez a Paraguay folyórendszeren keresztül.",
            "ro": "Primul port bolivian cu acces suveran la mare prin sistemul fluvial Paraguay.",
            "en": "The first Bolivian port with sovereign access to the sea via the Paraguay river system."
        },
        "facts": {
            "de": ["Historisch erster souveräner Hafen.", "Zentrum für den Export von Soja.", "Verfügt über moderne Getreidesilos.", "Wichtiger Umschlagplatz."],
            "hu": ["Történelmileg az első szuverén kikötő.", "A szójaexport központja.", "Modern gabonasilókkal rendelkezik.", "Fontos átrakodóhely."],
            "ro": ["Primul port suveran istoric.", "Centru pentru exportul de soia.", "Dispune de silozuri moderne de cereale.", "Punct important de transbordare."],
            "en": ["Historically first sovereign port.", "Center for soy exports.", "Has modern grain silos.", "Important transshipment point."]
        }
    },
    {
        "id": "bo-puerto-gravetal-economic-v2",
        "type": "port",
        "parent": "BO-S",
        "coords": [-57.710, -18.970],
        "name": {
            "de": "Puerto Gravetal",
            "hu": "Gravetal Kikötő",
            "ro": "Portul Gravetal",
            "en": "Puerto Gravetal"
        },
        "description": {
            "de": "Ein spezialisierter Flusshafen in der Region Puerto Quijarro für den Export von Agrarprodukten, insbesondere Soja.",
            "hu": "Puerto Quijarro régióban található specializált folyami kikötő mezőgazdasági termékek, különösen szója exportjára.",
            "ro": "Un port fluvial specializat în regiunea Puerto Quijarro pentru exportul de produse agricole, în special soia.",
            "en": "A specialized river port in the Puerto Quijarro region for the export of agricultural products, especially soy."
        },
        "facts": {
            "de": ["Privat betriebener Flusshafen.", "Fokus auf landwirtschaftliche Produkte.", "Besitzt Anlagen zur Sojaverarbeitung.", "Teil des Hafensystems am Tamengo-Kanal."],
            "hu": ["Magánüzemeltetésű folyami kikötő.", "Mezőgazdasági termékekre fókuszál.", "Szójafeldolgozó létesítményekkel rendelkezik.", "A Tamengo-csatorna kikötőrendszerének része."],
            "ro": ["Port fluvial cu operare privată.", "Axat pe produse agricole.", "Deține facilități de procesare a soiei.", "Parte a sistemului portuar de pe canalul Tamengo."],
            "en": ["Privately operated river port.", "Focus on agricultural products.", "Owns soy processing facilities.", "Part of the port system on the Tamengo Canal."]
        }
    },
    {
        "id": "bo-puerto-villarroel-economic-v2",
        "type": "port",
        "parent": "BO-C",
        "coords": [-64.733, -16.833],
        "name": {
            "de": "Puerto Villarroel",
            "hu": "Villarroel Kikötő",
            "ro": "Portul Villarroel",
            "en": "Puerto Villarroel"
        },
        "description": {
            "de": "Ein Binnenhafen am Ichilo-Fluss im Amazonasbecken, wichtig für den Flusstransport im nördlichen Bolivien.",
            "hu": "Belvízi kikötő az Ichilo folyón az Amazonas-medencében, fontos Észak-Bolívia folyami szállításában.",
            "ro": "Un port interior pe râul Ichilo din bazinul Amazonului, important pentru transportul fluvial în nordul Boliviei.",
            "en": "An inland port on the Ichilo River in the Amazon Basin, important for river transport in northern Bolivia."
        },
        "facts": {
            "de": ["Hafen am Ichilo-Fluss.", "Verbindet Cochabamba mit dem Amazonasbecken.", "Wichtig für lokale Händler.", "Ausgangspunkt für Flussschifffahrt."],
            "hu": ["Kikötő az Ichilo folyón.", "Összeköti Cochabambát az Amazonas-medencével.", "Fontos a helyi kereskedők számára.", "Folyami hajózás kiindulópontja."],
            "ro": ["Port pe râul Ichilo.", "Conectează Cochabamba cu bazinul Amazonului.", "Important pentru comercianții locali.", "Punct de plecare pentru navigația fluvială."],
            "en": ["Port on the Ichilo River.", "Connects Cochabamba with the Amazon basin.", "Important for local traders.", "Starting point for river navigation."]
        }
    },
    {
        "id": "bo-puerto-almacen-economic-v2",
        "type": "port",
        "parent": "BO-B",
        "coords": [-64.916, -14.850],
        "name": {
            "de": "Puerto Almacén",
            "hu": "Almacén Kikötő",
            "ro": "Portul Almacén",
            "en": "Puerto Almacén"
        },
        "description": {
            "de": "Ein Flusshafen in der Nähe von Trinidad am Ibare-Fluss, der als Logistikzentrum für die Region Beni dient.",
            "hu": "Folyami kikötő Trinidad közelében az Ibare folyón, amely a Beni régió logisztikai központjaként szolgál.",
            "ro": "Un port fluvial lângă Trinidad pe râul Ibare, servind ca centru logistic pentru regiunea Beni.",
            "en": "A river port near Trinidad on the Ibare River, serving as a logistics hub for the Beni region."
        },
        "facts": {
            "de": ["Liegt in der Nähe von Trinidad.", "Wichtig für die Frachtschifffahrt im Amazonasgebiet.", "Handel mit Holz und landwirtschaftlichen Gütern.", "Hafen am Ibare-Fluss."],
            "hu": ["Trinidad közelében található.", "Fontos a teherhajózás szempontjából az Amazonas térségében.", "Fa- és mezőgazdasági termékek kereskedelme.", "Kikötő az Ibare folyón."],
            "ro": ["Situat în apropiere de Trinidad.", "Important pentru transportul de marfă din Amazon.", "Comerț cu lemn și bunuri agricole.", "Port pe râul Ibare."],
            "en": ["Located near Trinidad.", "Important for cargo shipping in the Amazon.", "Trade in wood and agricultural goods.", "Port on the Ibare River."]
        }
    },
    {
        "id": "bo-puerto-guaqui-economic-v2",
        "type": "port",
        "parent": "BO-L",
        "coords": [-68.850, -16.583],
        "name": {
            "de": "Puerto Guaqui",
            "hu": "Guaqui Kikötő",
            "ro": "Portul Guaqui",
            "en": "Puerto Guaqui"
        },
        "description": {
            "de": "Ein historischer Binnenhafen am Titicacasee, der früher als Hauptverbindung nach Peru diente.",
            "hu": "Történelmi belvízi kikötő a Titicaca-tavon, amely korábban Peru fő kapcsolataként szolgált.",
            "ro": "Un port interior istoric pe Lacul Titicaca, care servea în trecut ca principală legătură cu Peru.",
            "en": "A historic inland port on Lake Titicaca, which formerly served as the main connection to Peru."
        },
        "facts": {
            "de": ["Hafen am Titicacasee.", "Historische Eisenbahnverbindung nach La Paz.", "Ehemaliges Handelszentrum.", "Beherbergt heute ein Museum."],
            "hu": ["Kikötő a Titicaca-tavon.", "Történelmi vasúti kapcsolat La Paz-zal.", "Egykori kereskedelmi központ.", "Ma egy múzeumnak ad otthont."],
            "ro": ["Port pe Lacul Titicaca.", "Legătură istorică pe calea ferată către La Paz.", "Fost centru comercial.", "Găzduiește astăzi un muzeu."],
            "en": ["Port on Lake Titicaca.", "Historic railway connection to La Paz.", "Former commercial center.", "Today houses a museum."]
        }
    },
    {
        "id": "bo-puerto-perez-economic-v2",
        "type": "port",
        "parent": "BO-L",
        "coords": [-68.616, -16.233],
        "name": {
            "de": "Puerto Pérez",
            "hu": "Puerto Pérez",
            "ro": "Puerto Pérez",
            "en": "Puerto Pérez"
        },
        "description": {
            "de": "Ein Hafen am Titicacasee, der für die lokale Fischerei und den Bootstransport zur Insel Suriqui bekannt ist.",
            "hu": "Kikötő a Titicaca-tavon, amely helyi halászatáról és a Suriqui-szigetre induló hajójáratairól ismert.",
            "ro": "Un port pe Lacul Titicaca, cunoscut pentru pescuitul local și transportul cu barca către insula Suriqui.",
            "en": "A port on Lake Titicaca, known for local fishing and boat transport to Suriqui Island."
        },
        "facts": {
            "de": ["Liegt am Wiñaymarka-See (Teil des Titicacasees).", "Bekannt für traditionellen Bootsbau.", "Lokales Fischereizentrum.", "Zugang zur Insel Suriqui."],
            "hu": ["A Wiñaymarka-tónál (a Titicaca-tó része) fekszik.", "Hagyományos hajóépítésről ismert.", "Helyi halászati központ.", "Hozzáférést biztosít a Suriqui-szigethez."],
            "ro": ["Situat pe Lacul Wiñaymarka (parte a Lacului Titicaca).", "Cunoscut pentru construcția tradițională a bărcilor.", "Centru local de pescuit.", "Acces la Insula Suriqui."],
            "en": ["Located on Lake Wiñaymarka (part of Lake Titicaca).", "Known for traditional boat building.", "Local fishing center.", "Access to Suriqui Island."]
        }
    },
    {
        "id": "bo-san-pedro-tiquina-economic-v2",
        "type": "port",
        "parent": "BO-L",
        "coords": [-68.850, -16.216],
        "name": {
            "de": "San Pedro de Tiquina",
            "hu": "San Pedro de Tiquina",
            "ro": "San Pedro de Tiquina",
            "en": "San Pedro de Tiquina"
        },
        "description": {
            "de": "Ein Fährhafen an der Tiquina-Meerenge, der den Straßentransport von La Paz nach Copacabana über den Titicacasee ermöglicht.",
            "hu": "Kompkikötő a Tiquina-szorosnál, amely lehetővé teszi a közúti szállítást La Paz-ból Copacabana-ba a Titicaca-tavon keresztül.",
            "ro": "Un port de feribot în Strâmtoarea Tiquina, permițând transportul rutier de la La Paz la Copacabana peste Lacul Titicaca.",
            "en": "A ferry port at the Strait of Tiquina, enabling road transport from La Paz to Copacabana across Lake Titicaca."
        },
        "facts": {
            "de": ["Wichtiger Fährhafen am Titicacasee.", "Überquert die Straße von Tiquina.", "Transportiert Busse, Autos und Passagiere.", "Wirtschaftlich wichtig für die Region."],
            "hu": ["Fontos kompkikötő a Titicaca-tavon.", "A Tiquina-szorost keresztezi.", "Buszokat, autókat és utasokat szállít.", "Gazdaságilag fontos a régió számára."],
            "ro": ["Port de feribot important pe Lacul Titicaca.", "Traversează Strâmtoarea Tiquina.", "Transportă autobuze, mașini și pasageri.", "Important din punct de vedere economic pentru regiune."],
            "en": ["Important ferry port on Lake Titicaca.", "Crosses the Strait of Tiquina.", "Transports buses, cars, and passengers.", "Economically important for the region."]
        }
    }
]

out = "import type { POI } from \"./poi\";\n\nexport const poiExtraBoliviaEconomicV2: POI[] = [\n"
for i, p in enumerate(pois):
    out += "  {\n"
    out += f'    id: "{p["id"]}",\n'
    out += f'    type: "{p["type"]}",\n'
    out += f'    parent: "{p["parent"]}",\n'
    out += f'    coords: [{p["coords"][0]}, {p["coords"][1]}],\n'
    
    out += "    name: {\n"
    out += f'      de: "{p["name"]["de"]}",\n'
    out += f'      hu: "{p["name"]["hu"]}",\n'
    out += f'      ro: "{p["name"]["ro"]}",\n'
    out += f'      en: "{p["name"]["en"]}"\n'
    out += "    },\n"
    
    out += "    description: {\n"
    out += f'      de: "{p["description"]["de"]}",\n'
    out += f'      hu: "{p["description"]["hu"]}",\n'
    out += f'      ro: "{p["description"]["ro"]}",\n'
    out += f'      en: "{p["description"]["en"]}"\n'
    out += "    },\n"
    
    out += "    facts: {\n"
    out += f'      de: {json.dumps(p["facts"]["de"], ensure_ascii=False)},\n'
    out += f'      hu: {json.dumps(p["facts"]["hu"], ensure_ascii=False)},\n'
    out += f'      ro: {json.dumps(p["facts"]["ro"], ensure_ascii=False)},\n'
    out += f'      en: {json.dumps(p["facts"]["en"], ensure_ascii=False)}\n'
    out += "    }\n"
    
    if i < len(pois) - 1:
        out += "  },\n"
    else:
        out += "  }\n"

out += "];\n"

with open('.tmp_bolivia_eco.ts', 'w', encoding='utf-8') as f:
    f.write(out)
