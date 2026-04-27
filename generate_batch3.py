import json

faqs = {
    "ba-medjugorje": {
        "de": [
            {"q": "Warum ist Međugorje weltberühmt?", "a": "Aufgrund der Berichte über Marienerscheinungen, die seit 1981 andauern."},
            {"q": "Welches ist der wichtigste Ort für Pilger in Međugorje?", "a": "Die Kirche des Heiligen Jakobus (Sveti Jakov)."},
            {"q": "Was ist der Erscheinungsberg?", "a": "Der Berg Crnica, wo die Kinder die Jungfrau Maria zum ersten Mal gesehen haben sollen."},
            {"q": "Wie viele Menschen besuchen Međugorje jährlich?", "a": "Es wird geschätzt, dass jährlich über eine Million Pilger aus aller Welt kommen."},
            {"q": "Wird Međugorje vom Vatikan offiziell anerkannt?", "a": "Der Vatikan hat Wallfahrten offiziell erlaubt, die Erscheinungen selbst werden noch untersucht."}
        ],
        "hu": [
            {"q": "Miért világhírű Međugorje?", "a": "Az 1981 óta tartó Mária-jelenésekről szóló beszámolók miatt."},
            {"q": "Melyik a zarándokok legfontosabb helyszíne Međugorjéban?", "a": "A Szent Jakab-templom (Sveti Jakov)."},
            {"q": "Mi az a Jelenések hegye?", "a": "A Crnica-hegy, ahol a gyermekek állítólag először látták Szűz Máriát."},
            {"q": "Hányan látogatják Međugorjét évente?", "a": "Becslések szerint évente több mint egymillió zarándok érkezik a világ minden tájáról."},
            {"q": "Hivatalosan elismeri-e a Vatikán Međugorjét?", "a": "A Vatikán hivatalosan engedélyezte a zarándoklatokat, magukat a jelenéseket még vizsgálják."}
        ],
        "ro": [
            {"q": "De ce este Međugorje faimos în întreaga lume?", "a": "Datorită relatărilor despre aparițiile Fecioarei Maria, care continuă din 1981."},
            {"q": "Care este cel mai important loc pentru pelerini în Međugorje?", "a": "Biserica Sfântul Iacob (Sveti Jakov)."},
            {"q": "Ce este Dealul Aparițiilor?", "a": "Muntele Crnica, unde se spune că copiii au văzut-o pe Fecioara Maria pentru prima dată."},
            {"q": "Câți oameni vizitează Međugorje anual?", "a": "Se estimează că peste un milion de pelerini din întreaga lume vin anual."},
            {"q": "Este Međugorje recunoscut oficial de Vatican?", "a": "Vaticanul a autorizat oficial pelerinajele, în timp ce aparițiile în sine sunt încă sub investigație."}
        ],
        "en": [
            {"q": "Why is Međugorje world-famous?", "a": "Due to reports of apparitions of the Virgin Mary, which have been ongoing since 1981."},
            {"q": "What is the most important site for pilgrims in Međugorje?", "a": "The Church of Saint James (Sveti Jakov)."},
            {"q": "What is Apparition Hill?", "a": "Crnica Hill, where children are said to have seen the Virgin Mary for the first time."},
            {"q": "How many people visit Međugorje annually?", "a": "It is estimated that over one million pilgrims from all over the world visit each year."},
            {"q": "Is Međugorje officially recognized by the Vatican?", "a": "The Vatican has officially authorized pilgrimages, while the apparitions themselves are still under investigation."}
        ]
    },
    "ba-film-festival": {
        "de": [
            {"q": "Was ist das Sarajevo Film Festival?", "a": "Das größte und bedeutendste Filmfestival auf dem Balkan."},
            {"q": "Wann wurde das Festival gegründet?", "a": "Es wurde 1995 während der Belagerung von Sarajevo gegründet."},
            {"q": "Wie heißt die höchste Auszeichnung des Festivals?", "a": "Das 'Herz von Sarajevo' (Srce Sarajeva)."},
            {"q": "Wann findet das Festival normalerweise statt?", "a": "Jedes Jahr im August."},
            {"q": "Welche bekannten Stars haben das Festival bereits besucht?", "a": "Stars wie Robert De Niro, Angelina Jolie, Brad Pitt und Bono Vox."}
        ],
        "hu": [
            {"q": "Mi az a Szarajevói Filmfesztivál?", "a": "A Balkán legnagyobb és legjelentősebb filmfesztiválja."},
            {"q": "Mikor alapították a fesztivált?", "a": "1995-ben alapították, Szarajevó ostroma idején."},
            {"q": "Hogy hívják a fesztivál legrangosabb díját?", "a": "Szarajevó Szíve (Srce Sarajeva)."},
            {"q": "Mikor szokták megrendezni a fesztivált?", "a": "Minden év augusztusában."},
            {"q": "Milyen ismert sztárok látogattak már el a fesztiválra?", "a": "Olyan sztárok, mint Robert De Niro, Angelina Jolie, Brad Pitt és Bono Vox."}
        ],
        "ro": [
            {"q": "Ce este Festivalul de Film de la Sarajevo?", "a": "Cel mai mare și mai important festival de film din Balcani."},
            {"q": "Când a fost fondat festivalul?", "a": "A fost fondat în 1995, în timpul asediului orașului Sarajevo."},
            {"q": "Cum se numește cel mai mare premiu al festivalului?", "a": "Inima orașului Sarajevo (Srce Sarajeva)."},
            {"q": "Când are loc de obicei festivalul?", "a": "În fiecare an, în luna august."},
            {"q": "Ce vedete faimoase au vizitat deja festivalul?", "a": "Vedete precum Robert De Niro, Angelina Jolie, Brad Pitt și Bono Vox."}
        ],
        "en": [
            {"q": "What is the Sarajevo Film Festival?", "a": "The largest and most prominent film festival in the Balkans."},
            {"q": "When was the festival founded?", "a": "It was founded in 1995 during the Siege of Sarajevo."},
            {"q": "What is the highest award of the festival called?", "a": "The 'Heart of Sarajevo' (Srce Sarajeva)."},
            {"q": "When does the festival usually take place?", "a": "Every year in August."},
            {"q": "Which famous stars have visited the festival?", "a": "Stars like Robert De Niro, Angelina Jolie, Brad Pitt, and Bono Vox."}
        ]
    },
    "ba-blidinje": {
        "de": [
            {"q": "Was ist der Naturpark Blidinje?", "a": "Ein geschütztes Naturgebiet auf einem Hochplateau zwischen den Bergen Čvrsnica und Vran."},
            {"q": "Was ist das bekannteste Naturdenkmal im Park?", "a": "Der Blidinje-See, der größte Bergsee in Bosnien und Herzegowina."},
            {"q": "Was sind die Stećci von Dugo Polje?", "a": "Eine Nekropole mit mittelalterlichen Grabsteinen, die zum UNESCO-Welterbe gehört."},
            {"q": "Wofür ist die Flora des Parks bekannt?", "a": "Für die endemische Schlangenhaut-Kiefer (Munika)."},
            {"q": "Welche Aktivitäten kann man im Park unternehmen?", "a": "Skifahren im Winter, Wandern, Radfahren und Reiten im Sommer."}
        ],
        "hu": [
            {"q": "Mi a Blidinje Natúrpark?", "a": "Egy védett természeti terület a Čvrsnica- és a Vran-hegység közötti fennsíkon."},
            {"q": "Mi a park legismertebb természeti látványossága?", "a": "A Blidinje-tó, Bosznia-Hercegovina legnagyobb hegyi tava."},
            {"q": "Mik azok a Dugo Polje-i stećci-k?", "a": "Egy középkori sírkövekből álló nekropolisz, amely az UNESCO világörökség része."},
            {"q": "Miről ismert a park flórája?", "a": "Az endemikus páncélfenyőről (Munika)."},
            {"q": "Milyen tevékenységeket lehet végezni a parkban?", "a": "Télen síelést, nyáron túrázást, kerékpározást és lovaglást."}
        ],
        "ro": [
            {"q": "Ce este Parcul Natural Blidinje?", "a": "O zonă naturală protejată pe un platou înalt între munții Čvrsnica și Vran."},
            {"q": "Care este cel mai cunoscut monument natural din parc?", "a": "Lacul Blidinje, cel mai mare lac montan din Bosnia și Herțegovina."},
            {"q": "Ce sunt monumentele stećci de la Dugo Polje?", "a": "O necropolă cu pietre funerare medievale, care face parte din patrimoniul mondial UNESCO."},
            {"q": "Pentru ce este cunoscută flora parcului?", "a": "Pentru pinul endemic de munte (Munika)."},
            {"q": "Ce activități pot fi desfășurate în parc?", "a": "Schi în timpul iernii, drumeții, ciclism și echitație în timpul verii."}
        ],
        "en": [
            {"q": "What is the Blidinje Nature Park?", "a": "A protected natural area on a high plateau between the Čvrsnica and Vran mountains."},
            {"q": "What is the most famous natural landmark in the park?", "a": "Lake Blidinje, the largest mountain lake in Bosnia and Herzegovina."},
            {"q": "What are the stećci of Dugo Polje?", "a": "A necropolis of medieval tombstones that is a UNESCO World Heritage site."},
            {"q": "What is the flora of the park known for?", "a": "For the endemic Bosnian pine (Munika)."},
            {"q": "What activities can be done in the park?", "a": "Skiing in winter, hiking, cycling, and horseback riding in summer."}
        ]
    },
    "ba-trebinje": {
        "de": [
            {"q": "Wo liegt Trebinje?", "a": "Im äußersten Süden von Bosnien und Herzegowina, nahe der Grenze zu Kroatien und Montenegro."},
            {"q": "Welcher Fluss fließt durch Trebinje?", "a": "Der Fluss Trebišnjica."},
            {"q": "Wofür ist Trebinje bekannt?", "a": "Für sein mediterranes Klima, den Weinbau und die schöne Altstadt."},
            {"q": "Was ist die Arslanagić-Brücke?", "a": "Eine berühmte osmanische Brücke aus dem 16. Jahrhundert."},
            {"q": "Welches Kloster thront über der Stadt?", "a": "Das Kloster Hercegovačka Gračanica auf dem Crkvina-Hügel."}
        ],
        "hu": [
            {"q": "Hol fekszik Trebinje?", "a": "Bosznia-Hercegovina legdélibb részén, a horvát és a montenegrói határ közelében."},
            {"q": "Melyik folyó folyik át Trebinjén?", "a": "A Trebišnjica folyó."},
            {"q": "Miről ismert Trebinje?", "a": "Mediterrán éghajlatáról, borászatáról és gyönyörű óvárosáról."},
            {"q": "Mi az az Arslanagić-híd?", "a": "Egy híres 16. századi oszmán híd."},
            {"q": "Melyik kolostor magasodik a város fölé?", "a": "A Hercegovačka Gračanica kolostor a Crkvina-dombon."}
        ],
        "ro": [
            {"q": "Unde se află Trebinje?", "a": "În extremitatea sudică a Bosniei și Herțegovinei, aproape de granița cu Croația și Muntenegru."},
            {"q": "Ce râu trece prin Trebinje?", "a": "Râul Trebišnjica."},
            {"q": "Pentru ce este cunoscut Trebinje?", "a": "Pentru clima sa mediteraneană, viticultură și frumosul oraș vechi."},
            {"q": "Ce este podul Arslanagić?", "a": "Un faimos pod otoman din secolul al XVI-lea."},
            {"q": "Ce mănăstire tronează deasupra orașului?", "a": "Mănăstirea Hercegovačka Gračanica de pe dealul Crkvina."}
        ],
        "en": [
            {"q": "Where is Trebinje located?", "a": "In the far south of Bosnia and Herzegovina, near the border with Croatia and Montenegro."},
            {"q": "Which river flows through Trebinje?", "a": "The Trebišnjica River."},
            {"q": "What is Trebinje known for?", "a": "For its Mediterranean climate, winemaking, and beautiful old town."},
            {"q": "What is the Arslanagić Bridge?", "a": "A famous 16th-century Ottoman bridge."},
            {"q": "Which monastery towers over the city?", "a": "The Hercegovačka Gračanica monastery on Crkvina Hill."}
        ]
    },
    "ba-vranduk": {
        "de": [
            {"q": "Was ist Vranduk?", "a": "Eine mittelalterliche Festung und ein Dorf in der Nähe von Zenica."},
            {"q": "Welche Rolle spielte Vranduk in der Geschichte?", "a": "Es war eine wichtige strategische Festung und zeitweise Residenz der bosnischen Könige."},
            {"q": "An welchem Fluss liegt die Festung?", "a": "An einer engen Stelle des Flusses Bosna."},
            {"q": "Kann man die Festung besichtigen?", "a": "Ja, sie wurde restauriert und beherbergt eine kleine ethnologische Ausstellung."},
            {"q": "Was macht Vranduk architektonisch interessant?", "a": "Die erhaltene mittelalterliche Struktur und die Kombination mit traditionellen bosnischen Häusern."}
        ],
        "hu": [
            {"q": "Mi az a Vranduk?", "a": "Egy középkori erőd és falu Zenica közelében."},
            {"q": "Milyen szerepet játszott Vranduk a történelemben?", "a": "Fontos stratégiai erőd volt, és időnként a bosnyák királyok székhelye."},
            {"q": "Melyik folyó partján fekszik az erőd?", "a": "A Boszna folyó egyik szűkületénél."},
            {"q": "Látogatható-e az erőd?", "a": "Igen, felújították, és egy kis néprajzi kiállításnak ad otthont."},
            {"q": "Mi teszi Vrandukot építészetileg érdekessé?", "a": "A megőrzött középkori szerkezete és a hagyományos bosnyák házakkal való kombinációja."}
        ],
        "ro": [
            {"q": "Ce este Vranduk?", "a": "O cetate medievală și un sat situat lângă Zenica."},
            {"q": "Ce rol a jucat Vranduk în istorie?", "a": "A fost o fortăreață strategică importantă și, uneori, reședința regilor bosniaci."},
            {"q": "Pe ce râu se află cetatea?", "a": "Într-un punct îngust al râului Bosna."},
            {"q": "Poate fi vizitată cetatea?", "a": "Da, a fost restaurată și găzduiește o mică expoziție etnologică."},
            {"q": "Ce face ca Vranduk să fie interesant din punct de vedere arhitectural?", "a": "Structura medievală păstrată și combinația cu casele tradiționale bosniace."}
        ],
        "en": [
            {"q": "What is Vranduk?", "a": "A medieval fortress and a village near Zenica."},
            {"q": "What role did Vranduk play in history?", "a": "It was an important strategic fortress and sometimes the residence of Bosnian kings."},
            {"q": "On which river is the fortress located?", "a": "At a narrow point of the Bosna River."},
            {"q": "Can you visit the fortress?", "a": "Yes, it has been restored and houses a small ethnological exhibition."},
            {"q": "What makes Vranduk architecturally interesting?", "a": "The preserved medieval structure and its combination with traditional Bosnian houses."}
        ]
    },
    "ba-hutovo-blato": {
        "de": [
            {"q": "Was ist Hutovo Blato?", "a": "Ein Natur- und Vogelschutzgebiet im Süden der Herzegowina."},
            {"q": "Warum ist es ökologisch so wichtig?", "a": "Es ist eines der wichtigsten Rastgebiete für Zugvögel in Europa."},
            {"q": "Wie viele Vogelarten gibt es dort?", "a": "Über 240 verschiedene Vogelarten wurden dort registriert."},
            {"q": "Welche Aktivität wird Touristen dort angeboten?", "a": "Fotosafaris mit dem Boot durch die Sümpfe und Kanäle."},
            {"q": "Was für eine Art von Ökosystem ist Hutovo Blato?", "a": "Ein submediterranes Sumpfgebiet, das durch den Fluss Krupa gespeist wird."}
        ],
        "hu": [
            {"q": "Mi az a Hutovo Blato?", "a": "Természetvédelmi terület és madárrezervátum Hercegovina déli részén."},
            {"q": "Miért olyan fontos ökológiailag?", "a": "Európa egyik legfontosabb pihenőhelye a vonuló madarak számára."},
            {"q": "Hány madárfaj található ott?", "a": "Több mint 240 különböző madárfajt regisztráltak a területen."},
            {"q": "Milyen tevékenységet kínálnak ott a turistáknak?", "a": "Csónakos fotószafarit a mocsarakon és csatornákon keresztül."},
            {"q": "Milyen típusú ökoszisztéma Hutovo Blato?", "a": "Szubmediterrán mocsárvidék, amelyet a Krupa folyó táplál."}
        ],
        "ro": [
            {"q": "Ce este Hutovo Blato?", "a": "O rezervație naturală și ornitologică în sudul Herțegovinei."},
            {"q": "De ce este atât de importantă din punct de vedere ecologic?", "a": "Este una dintre cele mai importante zone de odihnă pentru păsările migratoare din Europa."},
            {"q": "Câte specii de păsări există acolo?", "a": "Peste 240 de specii diferite de păsări au fost înregistrate acolo."},
            {"q": "Ce activitate este oferită turiștilor acolo?", "a": "Safari foto cu barca prin mlaștini și canale."},
            {"q": "Ce fel de ecosistem este Hutovo Blato?", "a": "O zonă mlăștinoasă submediteraneană, alimentată de râul Krupa."}
        ],
        "en": [
            {"q": "What is Hutovo Blato?", "a": "A nature and bird reserve in southern Herzegovina."},
            {"q": "Why is it ecologically so important?", "a": "It is one of the most important resting areas for migratory birds in Europe."},
            {"q": "How many bird species are there?", "a": "Over 240 different bird species have been registered there."},
            {"q": "What activity is offered to tourists there?", "a": "Photo safaris by boat through the marshes and canals."},
            {"q": "What kind of ecosystem is Hutovo Blato?", "a": "A sub-Mediterranean marshland fed by the Krupa River."}
        ]
    },
    "ba-doboj": {
        "de": [
            {"q": "Was ist das bekannteste Wahrzeichen von Doboj?", "a": "Die Festung Gradina, die auf einem Hügel über der Stadt liegt."},
            {"q": "In welchem Jahrhundert wurde die Festung Doboj erbaut?", "a": "Im 13. Jahrhundert."},
            {"q": "Welche verkehrstechnische Bedeutung hat Doboj?", "a": "Es ist einer der wichtigsten Eisenbahn- und Straßenknotenpunkte in Bosnien."},
            {"q": "Welche Flüsse fließen bei Doboj zusammen?", "a": "Die Flüsse Bosna, Usora und Spreča."},
            {"q": "Gibt es Museen in Doboj?", "a": "Ja, das Regionalmuseum Doboj zeigt archäologische und historische Funde."},
        ],
        "hu": [
            {"q": "Mi Doboj legismertebb jelképe?", "a": "A Gradina vár, amely a város feletti dombon található."},
            {"q": "Melyik században épült Doboj vára?", "a": "A 13. században."},
            {"q": "Milyen közlekedési jelentősége van Dobojnak?", "a": "Bosznia egyik legfontosabb vasúti és közúti csomópontja."},
            {"q": "Melyik folyók találkoznak Dobojnál?", "a": "A Boszna, az Usora és a Spreča folyók."},
            {"q": "Vannak-e múzeumok Dobojban?", "a": "Igen, a Doboji Regionális Múzeum régészeti és történelmi leleteket mutat be."},
        ],
        "ro": [
            {"q": "Care este cel mai cunoscut simbol al orașului Doboj?", "a": "Cetatea Gradina, situată pe un deal deasupra orașului."},
            {"q": "În ce secol a fost construită cetatea Doboj?", "a": "În secolul al XIII-lea."},
            {"q": "Ce importanță are Doboj pentru transport?", "a": "Este unul dintre cele mai importante noduri feroviare și rutiere din Bosnia."},
            {"q": "Ce râuri se întâlnesc la Doboj?", "a": "Râurile Bosna, Usora și Spreča."},
            {"q": "Există muzee în Doboj?", "a": "Da, Muzeul Regional Doboj prezintă descoperiri arheologice și istorice."},
        ],
        "en": [
            {"q": "What is Doboj's most famous landmark?", "a": "The Gradina Fortress, located on a hill above the city."},
            {"q": "In which century was Doboj Fortress built?", "a": "In the 13th century."},
            {"q": "What transportation significance does Doboj have?", "a": "It is one of the most important railway and road junctions in Bosnia."},
            {"q": "Which rivers meet at Doboj?", "a": "The Bosna, Usora, and Spreča rivers."},
            {"q": "Are there museums in Doboj?", "a": "Yes, the Doboj Regional Museum displays archaeological and historical finds."},
        ]
    },
    "ba-prijedor": {
        "de": [
            {"q": "In welcher Region liegt Prijedor?", "a": "In der Region Bosanska Krajina im Nordwesten des Landes."},
            {"q": "Welcher Fluss fließt durch Prijedor?", "a": "Der Fluss Sana."},
            {"q": "Welcher Nationalpark liegt ganz in der Nähe von Prijedor?", "a": "Der Nationalpark Kozara."},
            {"q": "Wofür ist die Wirtschaft von Prijedor historisch bekannt?", "a": "Für den Bergbau (Eisenerz) und die Industrie."},
            {"q": "Gibt es kulturelle Veranstaltungen in der Stadt?", "a": "Ja, zum Beispiel das Literaturtreffen auf der Kozara."},
        ],
        "hu": [
            {"q": "Melyik régióban található Prijedor?", "a": "Az ország északnyugati részén, a Bosanska Krajina régióban."},
            {"q": "Melyik folyó folyik át Prijedoron?", "a": "A Szana (Sana) folyó."},
            {"q": "Melyik nemzeti park fekszik Prijedor közvetlen közelében?", "a": "A Kozara Nemzeti Park."},
            {"q": "Miről volt Prijedor gazdasága történelmileg ismert?", "a": "A bányászatról (vasérc) és az iparról."},
            {"q": "Vannak-e kulturális események a városban?", "a": "Igen, például a Kozara-i irodalmi találkozó."},
        ],
        "ro": [
            {"q": "În ce regiune se află Prijedor?", "a": "În regiunea Bosanska Krajina, în nord-vestul țării."},
            {"q": "Ce râu trece prin Prijedor?", "a": "Râul Sana."},
            {"q": "Ce parc național este situat foarte aproape de Prijedor?", "a": "Parcul Național Kozara."},
            {"q": "Pentru ce este cunoscută istoric economia din Prijedor?", "a": "Pentru minerit (minereu de fier) și industrie."},
            {"q": "Există evenimente culturale în oraș?", "a": "Da, de exemplu întâlnirea literară de pe Kozara."},
        ],
        "en": [
            {"q": "In which region is Prijedor located?", "a": "In the Bosanska Krajina region in the northwest of the country."},
            {"q": "Which river flows through Prijedor?", "a": "The Sana River."},
            {"q": "Which national park is located very close to Prijedor?", "a": "The Kozara National Park."},
            {"q": "What was Prijedor's economy historically known for?", "a": "For mining (iron ore) and industry."},
            {"q": "Are there cultural events in the city?", "a": "Yes, for example, the literary meeting on Kozara."},
        ]
    },
    "ba-lukomir": {
        "de": [
            {"q": "Was macht Lukomir so besonders?", "a": "Es ist das höchste und isolierteste Dorf in Bosnien und Herzegowina (1495 m)."},
            {"q": "Auf welchem Berg liegt das Dorf?", "a": "Auf dem Berg Bjelašnica."},
            {"q": "Welche Traditionen haben sich dort bewahrt?", "a": "Die traditionelle Lebensweise der Hirten, Steinbauweise der Häuser und handgestrickte Wollprodukte."},
            {"q": "Wann ist das Dorf bewohnt?", "a": "Die Bewohner leben dort hauptsächlich von Frühling bis Spätherbst; im Winter ist es oft eingeschneit und verlassen."},
            {"q": "Welche Aussicht bietet Lukomir?", "a": "Einen spektakulären Blick auf den Rakitnica-Canyon."},
        ],
        "hu": [
            {"q": "Mi teszi Lukomirt olyan különlegessé?", "a": "Ez Bosznia-Hercegovina legmagasabban fekvő és legelszigeteltebb faluja (1495 m)."},
            {"q": "Melyik hegyen található a falu?", "a": "A Bjelašnica-hegyen."},
            {"q": "Milyen hagyományok maradtak fenn ott?", "a": "A pásztorok hagyományos életmódja, a kőházak és a kézzel kötött gyapjútermékek."},
            {"q": "Mikor lakott a falu?", "a": "A lakók főleg tavasztól késő őszig élnek ott; télen a falu gyakran elnéptelenedik a nagy hó miatt."},
            {"q": "Milyen kilátást nyújt Lukomir?", "a": "Látványos kilátást a Rakitnica-kanyonra."},
        ],
        "ro": [
            {"q": "Ce face ca Lukomir să fie atât de special?", "a": "Este cel mai înalt și mai izolat sat din Bosnia și Herțegovina (1495 m)."},
            {"q": "Pe ce munte este situat satul?", "a": "Pe muntele Bjelašnica."},
            {"q": "Ce tradiții s-au păstrat acolo?", "a": "Modul tradițional de viață al păstorilor, construcția caselor din piatră și produsele din lână împletite manual."},
            {"q": "Când este locuit satul?", "a": "Locuitorii stau acolo în principal din primăvară până în toamna târzie; iarna satul este adesea înzăpezit și pustiu."},
            {"q": "Ce priveliște oferă Lukomir?", "a": "O vedere spectaculoasă asupra canionului Rakitnica."},
        ],
        "en": [
            {"q": "What makes Lukomir so special?", "a": "It is the highest and most isolated village in Bosnia and Herzegovina (1495 m)."},
            {"q": "On which mountain is the village located?", "a": "On Mount Bjelašnica."},
            {"q": "What traditions have been preserved there?", "a": "The traditional way of life of shepherds, stone construction of houses, and hand-knitted wool products."},
            {"q": "When is the village inhabited?", "a": "Inhabitants live there mainly from spring to late autumn; in winter it is often snowed in and deserted."},
            {"q": "What view does Lukomir offer?", "a": "A spectacular view of the Rakitnica Canyon."},
        ]
    },
    "ba-tvrkos": {
        "de": [
            {"q": "Wofür ist das Kloster Tvrdoš bekannt?", "a": "Es ist eines der bedeutendsten serbisch-orthodoxen Klöster und berühmt für seine lange Weinbautradition."},
            {"q": "Wann wurde das Kloster ursprünglich gegründet?", "a": "Die Fundamente gehen auf das 4. Jahrhundert zurück, das heutige Kloster stammt aus dem 15. Jahrhundert."},
            {"q": "In welcher Stadt liegt das Kloster?", "a": "In der Nähe von Trebinje."},
            {"q": "Welcher berühmte Heilige lebte dort?", "a": "Der heilige Vasilije Ostroški empfing dort seine Weihe."},
            {"q": "Kann man die Weine des Klosters probieren?", "a": "Ja, das Kloster hat einen Weinkeller und bietet Weinverkostungen an."},
        ],
        "hu": [
            {"q": "Miről ismert a Tvrdoš kolostor?", "a": "Az egyik legjelentősebb szerb ortodox kolostor, amely híres hosszú borászati hagyományairól."},
            {"q": "Mikor alapították eredetileg a kolostort?", "a": "Alapjai a 4. századig nyúlnak vissza, a mai kolostor a 15. századból származik."},
            {"q": "Melyik város közelében található a kolostor?", "a": "Trebinje közelében."},
            {"q": "Melyik híres szent élt ott?", "a": "Szent Vazul (Vasilije Ostroški) ott kapta meg szerzetesi felszentelését."},
            {"q": "Meg lehet kóstolni a kolostor borait?", "a": "Igen, a kolostornak van borpincéje, és borkóstolókat is tartanak."},
        ],
        "ro": [
            {"q": "Pentru ce este cunoscută mănăstirea Tvrdoš?", "a": "Este una dintre cele mai importante mănăstiri ortodoxe sârbe și este renumită pentru lunga sa tradiție viticolă."},
            {"q": "Când a fost fondată inițial mănăstirea?", "a": "Fundațiile datează din secolul al IV-lea, mănăstirea actuală fiind din secolul al XV-lea."},
            {"q": "Lângă ce oraș se află mănăstirea?", "a": "Lângă Trebinje."},
            {"q": "Ce sfânt faimos a trăit acolo?", "a": "Sfântul Vasile de la Ostrog a primit acolo tunderea în monahism."},
            {"q": "Se pot gusta vinurile mănăstirii?", "a": "Da, mănăstirea are o cramă și oferă degustări de vinuri."},
        ],
        "en": [
            {"q": "What is the Tvrdoš Monastery known for?", "a": "It is one of the most significant Serbian Orthodox monasteries and is famous for its long winemaking tradition."},
            {"q": "When was the monastery originally founded?", "a": "The foundations date back to the 4th century, the current monastery is from the 15th century."},
            {"q": "In which city is the monastery located?", "a": "Near Trebinje."},
            {"q": "Which famous saint lived there?", "a": "Saint Basil of Ostrog received his consecration there."},
            {"q": "Can you taste the monastery's wines?", "a": "Yes, the monastery has a wine cellar and offers wine tastings."},
        ]
    }
}

with open("faqs_batch3.json", "w", encoding="utf-8") as f:
    json.dump(faqs, f, ensure_ascii=False, indent=2)
