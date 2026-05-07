import re

with open('lib/visualLab/data/belarusPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define POIs to add
poi_victory = """  {
    id: "BY-007-victory-square",
    type: "landmark",
    parent: "BY-007",
    coords: [27.5750, 53.9086],
    name: {
      de: "Siegesplatz (Minsk)",
      hu: "Győzelem tere (Minszk)",
      ro: "Piața Victoriei (Minsk)",
      en: "Victory Square"
    },
    descriptionAdvanced: {
        "de": "Der Siegesplatz in Minsk ist einer der bedeutendsten und feierlichsten Orte der belarussischen Hauptstadt. Im Zentrum des Platzes ragt ein 38 Meter hoher Obelisk empor, der zum Gedenken an den Sieg im Großen Vaterländischen Krieg errichtet wurde. Der Platz ist ein zentraler Bestandteil des stalinistischen Ensembles des Unabhängigkeitsboulevards und beeindruckt durch seine symmetrische Gestaltung und die monumentale Architektur der umgebenden Gebäude. Am Fuße des Obelisken brennt die Ewige Flamme, die von Ehrenwachen bewacht wird. Unter dem Platz befindet sich eine runde Gedenkhalle, die die Namen der Helden ehrt, die für die Befreiung von Belarus gefallen sind. Der Platz ist Schauplatz der wichtigsten nationalen Feiertage und Paraden.",
        "hu": "A minszki Győzelem tere a fehérorosz főváros egyik legjelentősebb és legünnepélyesebb helyszíne. A tér közepén egy 38 méter magas obeliszk emelkedik, amelyet a Nagy Honvédő Háborúban aratott győzelem emlékére állítottak. A tér a Függetlenség sugárút sztálini építészeti együttesének központi eleme, és szimmetrikus kialakításával, valamint a környező épületek monumentális jellegével nyűgözi le a látogatókat. Az obeliszk lábánál örökláng ég, amelyet díszőrség véd. A tér alatt egy kör alakú emlékcsarnok található, amely a Fehéroroszország felszabadításáért elesett hősök nevét őrzi.",
        "ro": "Piața Victoriei din Minsk este epicentrul simbolic al memoriei naționale și o realizare grandioasă a planificării urbane din epoca stalinistă. În mijlocul pieței se înalță un obelisc colosal din granit, care aduce un omagiu jertfei imense și victoriei finale a poporului sovietic și belarus în Marele Război pentru Apărarea Patriei. Flacăra Eternă de la baza monumentului arde neîntrerupt, protejată frecvent de un corp de gardă de onoare impresionant. Sub nivelul străzii se află un coridor memorial subteran ce conține numele celor căzuți pentru eliberare, luminat de o cupolă de sticlă fascinantă. Clădirile semilunare impunătoare ce definesc perimetrul pieței contribuie la sentimentul solemnității, făcând din acest loc teatrul principal al celor mai importante ceremonii naționale. Istorie K8 — Al Doilea Război Mondial.",
        "en": "Victory Square is a grand, monumental plaza located in the center of Minsk on Independence Avenue, serving as the nation's principal memorial to the heroes and victims of World War II. The square is dominated by a soaring 38-meter granite obelisk topped with the Soviet Order of Victory, with an eternal flame burning solemnly at its base. The surrounding classic Soviet-era apartment buildings are adorned with enormous neon signs reading 'The Feat of the People is Immortal'. Beneath the square lies a circular memorial hall honoring the millions of Belarusians who perished during the conflict. The plaza serves as the focal point for massive national celebrations and remembrance ceremonies."
    },
    factsAdvanced: {
        "de": [
            "Der Obelisk besteht aus grauem Granit und wird an der Spitze durch den sowjetischen 'Orden des Sieges' gekrönt.",
            "Unter dem Platz verläuft eine Fußgängerunterführung, die in die prachtvolle 'Gedächtnishalle' mit den Namen der Gefallenen führt.",
            "Die Ewige Flamme am Siegesplatz wurde im Jahr 1961 entzündet und brennt seitdem ununterbrochen.",
            "Die den Platz umgebenden Gebäude wurden so entworfen, dass sie die monumentale Wirkung des Denkmals unterstreichen."
        ],
        "hu": [
            "Az obeliszk szürke gránitból készült, tetejét pedig a szovjet 'Győzelem-rend' koronázza meg.",
            "A tér alatt egy gyalogos aluljáró vezet a pompás 'Emlékcsarnokba', ahol az elesettek nevei olvashatók.",
            "A Győzelem téri öröklángot 1961-ben gyújtották meg, és azóta folyamatosan ég.",
            "A teret körülvevő épületeket úgy tervezték, hogy hangsúlyozzák az emlékmű monumentális hatását."
        ],
        "ro": [
            "Obeliscul este realizat din granit gri și este încoronat în vârf cu replică a „Ordinului Victoriei” sovietic.",
            "Sub piață există un pasaj pietonal spectaculos care duce spre „Sala Memoriei”, luminată solemn din interior.",
            "Flacăra Eternă din Piața Victoriei a fost aprinsă în anul 1961 și arde neîncetat de atunci.",
            "Clădirile care înconjoară piața au fost proiectate special pentru a amplifica efectul monumental al monumentului central."
        ],
        "en": ["The central obelisk was unveiled in 1954 to commemorate the 10th anniversary of Minsk's liberation.", "The eternal flame was lit on July 3, 1961, by a Hero of the Soviet Union.", "Four bronze reliefs at the base of the monument depict the struggle and victory of the people.", "The memorial hall beneath the square was added during a reconstruction in 1984."]
    },
    description: {
      de: "Ein zentraler Platz in Minsk mit einem monumentalen Obelisken zum Gedenken an den Sieg im Zweiten Weltkrieg.",
      hu: "Központi tér Minszkben, monumentális obeliszkkel a második világháborús győzelem emlékére.",
      ro: "O piață centrală din Minsk, cu un obelisc monumental în memoria victoriei din cel de-al Doilea Război Mondial.",
      en: "A central square in Minsk with a monumental obelisk commemorating victory in WWII."
    },
    facts: {
      de: [
        "Der Obelisk ist 38 Meter hoch und wird von vier Reliefs geschmückt.",
        "Am Fuße des Denkmals brennt eine ewige Flamme.",
        "Ein wichtiger Ort für nationale Feiertage und Paraden."
      ],
      hu: [
        "Az obeliszk 38 méter magas, és négy dombormű díszíti.",
        "Az emlékmű lábánál örökláng ég.",
        "Nemzeti ünnepek és parádék fontos helyszíne."
      ],
      ro: [
        "Obeliscul are 38 de metri înălțime și este decorat cu patru reliefuri.",
        "O flacără eternă arde la baza monumentului.",
        "Un loc important pentru sărbătorile naționale și parade."
      ],
      en: [
        "The obelisk is 38 meters tall and decorated with four reliefs.",
        "An eternal flame burns at the base of the monument.",
        "An important site for national holidays and parades."
      ]
    }
  },"""

# Insert before closing ];
new_content = content.replace("];", poi_victory + "\n];")

with open('lib/visualLab/data/belarusPoi.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
