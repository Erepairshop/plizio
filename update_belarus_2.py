import re

with open('lib/visualLab/data/belarusPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define POIs to add
poi_nesvizh = """  {
    id: "BY-006-nesvizh-castle",
    type: "landmark",
    parent: "BY-006",
    coords: [26.6914, 53.2228],
    name: {
      de: "Schloss Nesvizh",
      hu: "Nyeszvizsi kastély",
      ro: "Castelul Nesvizh",
      en: "Nesvizh Castle"
    },
    descriptionAdvanced: {
        "de": "Schloss Nesvizh, der einstige Sitz der Radziwill-Dynastie, gilt als das prachtvollste Beispiel für die Verbindung von Adelskultur und europäischer Architekturtradition in Belarus. Die weitläufige Anlage, die über Jahrhunderte gewachsen ist, vereint auf harmonische Weise verschiedene Baustile und ist in ein ausgeklügeltes System von Kanälen und Parkanlagen eingebettet. Jedes Zimmer und jeder Saal erzählt Geschichten von Macht, Reichtum und kulturellem Mäzenatentum. Besonders hervorzuheben sind der Goldene Saal und der Thronsaal mit ihren kunstvollen Stuckarbeiten. Als UNESCO-Welterbestätte zieht das Schloss Besucher aus aller Welt an und dient heute als bedeutendes Museum, das das kulturelle Erbe der Region bewahrt.",
        "hu": "A nyeszvizsi kastély, a Radziwill-dinasztia egykori székhelye, a nemesi kultúra és az európai építészeti hagyomány ötvözésének legpompásabb példája Fehéroroszországban. Az évszázadok alatt épült kiterjedt együttes harmonikusan ötvözi a különböző stílusokat, és csatornák, valamint parkok kifinomult rendszerébe ágyazódik. Minden szoba és terem a hatalomról, a gazdagságról és a kulturális mecénáskodásról mesél. Külön kiemelendő az Aranyterem és a Trónterem művészi stukkómunkáikkal. UNESCO Világörökségi helyszínként a kastély a világ minden tájáról vonzza a látogatókat.",
        "ro": "Castelul Nesvizh, sediul ancestral al puternicei dinastii Radziwill, este un exemplu strălucit de cultură nobiliară europeană în inima Belarusului. Acest complex palatin vast, dezvoltat de-a lungul mai multor secole, prezintă o fuziune elegantă a stilurilor renascentist, baroc și clasicist. Este înconjurat de un sistem ingenios de iazuri, șanțuri cu apă și o serie de parcuri peisagistice amenajate cu măiestrie. Fiecare încăpere din palat a fost concepută pentru a demonstra bogăția și influența familiei, în special prin decorul somptuos din Sala de Aur și Sala Tronului. Alături de biserica Corpus Christi adiacentă, complexul ilustrează importanța orașului Nesvizh. Arte K7 — Barocul.",
        "en": "Nesvizh Castle was the magnificent residential stronghold of the Radziwiłł family, one of the most powerful aristocratic dynasties in the Grand Duchy of Lithuania. The sprawling complex features a harmonious blend of Renaissance, Baroque, and Neoclassical architecture, surrounded by an elaborate system of defensive moats and magnificent landscaped parks. Its opulent interior rooms, including the Golden Hall and the Library, once housed vast collections of art, armor, and rare manuscripts. The adjacent Corpus Christi Church is the first Baroque temple built in Eastern Europe and contains the family's extensive crypt. This UNESCO World Heritage site offers profound insights into the region's noble heritage."
    },
    factsAdvanced: {
        "de": [
            "Das Archiv der Familie Radziwill in Nesvizh war einst das bedeutendste Privatarchiv in ganz Osteuropa.",
            "Das Schloss besaß ein eigenes Theater, in dem im 18. Jahrhundert erstklassige Opernaufführungen stattfanden.",
            "Die Radziwills waren so mächtig, dass sie zeitweise als 'ungekrönte Könige von Belarus' bezeichnet wurden.",
            "Das Schlossensemble umfasst auch das erste Jesuitentheater der Region, was die Rolle von Nesvizh als Bildungszentrum unterstreicht."
        ],
        "hu": [
            "A Radziwill család nyeszvizsi archívuma egykor egész Kelet-Európa legjelentősebb magánarchívumavolt.",
            "A kastélynak saját színháza volt, ahol a 18. században elsőrangú operaelőadásokat tartottak.",
            "A Radziwillok olyan hatalmasak voltak, hogy egy időben 'Fehéroroszország koronázatlan királyaiként' emlegették őket.",
            "A kastélyegyüttes magában foglalja a régió első jezsuita színházát is, hangsúlyozva Nyeszvizs oktatási központ szerepét."
        ],
        "ro": [
            "Arhiva familiei Radziwill din Nesvizh a fost cândva cea mai importantă arhivă privată din întreaga Europă de Est.",
            "Castelul poseda propriul teatru privat, unde în secolul al XVIII-lea se puneau în scenă opere de talie europeană.",
            "Puterea familiei Radziwill era atât de mare încât membrii săi erau supranumiți „regii neîncoronați ai Belarusului”.",
            "Complexul include și primul teatru iezuit din regiune, subliniind rolul de centru educațional pe care l-a avut Nesvizh."
        ],
        "en": ["Inscribed on the UNESCO World Heritage list in 2005.", "The Radziwiłł crypt beneath the church contains over 70 coffins, the third largest in Europe.", "The castle's sprawling landscape park covers nearly 90 hectares.", "It hosted numerous kings, tsars, and European nobility throughout its 400-year history."]
    },
    description: {
      de: "Die prachtvolle Residenz der Familie Radziwill, umgeben von weitläufigen Gärten.",
      hu: "A Radziwill család pompás rezidenciája, kiterjedt kertekkel körülvéve.",
      ro: "Splendida reședință a familiei Radziwill, înconjurată de grădini vaste.",
      en: "The magnificent residence of the Radziwill family, surrounded by expansive gardens."
    },
    facts: {
      de: [
        "UNESCO-Welterbe und Zentrum des belarussischen Barocks.",
        "Beherbergt eine wertvolle Sammlung von Kunstwerken und Archiven.",
        "Die nahegelegene Fronleichnamskirche ist der erste Barockbau der Region."
      ],
      hu: [
        "UNESCO Világörökség része és a fehérorosz barokk központja.",
        "Értékes műalkotás- és archívumgyűjteménynek ad otthont.",
        "A közeli Úrnapja-templom a régió első barokk épülete."
      ],
      ro: [
        "Patrimoniu Mondial UNESCO și centrul barocului belarus.",
        "Găzduiește o colecție valoroasă de opere de artă și arhive.",
        "Biserica Corpus Christi din apropiere este prima clădire barocă din regiune."
      ],
      en: [
        "UNESCO World Heritage site and a center of Belarusian Baroque.",
        "Houses a valuable collection of artworks and archives.",
        "The nearby Corpus Christi Church is the first Baroque building in the region."
      ]
    }
  },"""

# Insert before closing ];
new_content = content.replace("];", poi_nesvizh + "\n];")

with open('lib/visualLab/data/belarusPoi.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
