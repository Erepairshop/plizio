
import json
import os

themes = [
    "Ikonok és asztal", "Egér kattintása", "Billentyűzet beírás", "Fájlok és mappák",
    "Másolás-beillesztés", "Paint rajzolás", "Szövegírás", "USB és pendrive",
    "Internet böngésző", "Letöltés", "Email", "Google kereső",
    "Biztonság és jelszó", "Vírus", "Scratch első program", "Algoritmus lépések",
    "Ciklus", "Feltétel", "Képek", "Zene és hang",
    "Video", "Tablet vs. telefon", "AI alap", "Virtualvalóság", "Összefoglaló K2"
]

def generate_tasks(theme_idx, theme_name):
    tasks = []
    # 25 MCQ tasks
    for i in range(1, 26):
        # We'll use semi-dynamic questions to ensure variety and appropriateness
        if theme_idx == 0: # Ikonok és asztal
            questions = [
                ("Melyik az 'asztal' a számítógépen?", ["A képernyő, amit bekapcsolás után látsz", "Egy igazi fa asztal", "A billentyűzet", "Az egér padja"], 0),
                ("Mi az az ikon?", ["Egy kis kép, ami egy programot jelöl", "Egy nagy tévé", "Egy hangfal", "Egy gomb a billentyűzeten"], 0),
                ("Hogyan indítasz el egy programot az asztalról?", ["Kétszer kattintasz az ikonjára", "Ránézel", "Megsimogatod az egeret", "Kikapcsolod a gépet"], 0),
                ("Mi a lomtár?", ["Ahová a törölt dolgok kerülnek", "Egy konyhai szemetes", "Egy játék", "A gép memóriája"], 0),
                ("Melyik gombbal nyitod meg a Start menüt?", ["A Windows jeles gombbal", "Az Enterrel", "A Space-szel", "A hangerő gombbal"], 0),
                # ... adding more varied but simple IT questions for K2
            ]
        elif theme_idx == 1: # Egér kattintása
            questions = [
                ("Melyik ujjaddal kattintasz általában az egér bal gombjával?", ["Mutatóujj", "Hüvelykujj", "Kisujj", "Gyűrűsujj"], 0),
                ("Mit jelent a dupla kattintás?", ["Kétszer gyorsan megnyomod a bal gombot", "Egyszer megnyomod a jobb gombot", "Kétszer megnyomod a billentyűzetet", "Felemeled az egeret"], 0),
                ("Mire jó a jobb egérgomb?", ["Menüket hoz elő", "Csak dísznek van", "Ezzel lehet kikapcsolni a gépet", "Ezzel lehet gépelni"], 0),
                ("Mit csinál a görgő az egéren?", ["Fel-le mozgatja az oldalt", "Hangerőt állít", "Képet készít", "Semmit"], 0),
                ("Hogyan fogjuk meg helyesen az egeret?", ["Tenyerünkkel rásimulunk", "Két kézzel", "Csak a mutatóujjunkkal", "Lábbal"], 0),
            ]
        else:
            # Fallback for brevity in script, but I'll make sure it's high quality for the final file
            questions = [
                (f"Mit tanultunk a(z) {theme_name} témában?", ["Valami hasznosat", "Semmit", "Aludni", "Enni"], 0),
            ]

        # Since I need 25, I'll provide a bank or generate variations
        q_idx = (i - 1) % len(questions)
        q_text, opts, corr = questions[q_idx]
        
        # Add some variation to the question text if it's repeated
        if i > len(questions):
            q_text = f"{q_text} ({i})"
            
        tasks.append({
            "type": "mcq",
            "question": q_text,
            "options": opts,
            "correct": corr
        })

    # 10 typing tasks
    words = [
        "egér", "ikon", "asztal", "gép", "játék", "tanulás", "kép", "hang", "internet", "ablak",
        "mappa", "fájl", "billentyű", "szóköz", "törlés", "mentés", "másolás", "rajz", "szín", "vonal",
        "kattint", "görget", "nyit", "zár", "keres", "választ", "indít", "állít", "néz", "hallgat"
    ]
    for i in range(1, 11):
        word = words[(theme_idx * 10 + i - 1) % len(words)]
        tasks.append({
            "type": "typing",
            "question": f"Gépeld be: {word}",
            "answer": word
        })
    
    return tasks

# Full content generation with specific questions for each theme to meet K2 requirements
def get_real_questions(theme_idx):
    # theme_idx starts at 0
    t = theme_idx + 1
    if t == 1: # Ikonok és asztal
        return [
            ("Melyik az asztal a gépen?", ["A nyitóképernyő", "Egy bútor", "A monitor hátulja", "A billentyűzet"], 0),
            ("Mi az ikon?", ["Egy kis kép", "Egy hang", "Egy kábel", "Egy gomb"], 0),
            ("Hol találod a Lomtárat?", ["Az asztalon", "A konyhában", "A táskádban", "A falon"], 0),
            ("Hogyan nyitunk meg egy ikont?", ["Dupla kattintással", "Ránézéssel", "Megütéssel", "Kikapcsolással"], 0),
            ("Melyik gomb nyitja a menüt?", ["Start gomb", "Esc gomb", "Space", "Enter"], 0),
            ("Mire jó a háttérkép?", ["Díszíti az asztalt", "Ettől gyorsabb a gép", "Ezzel gépelünk", "Ezt esszük meg"], 0),
            ("Mit teszünk a mappába?", ["Fájlokat", "Vizet", "Almát", "Cipőt"], 0),
            ("Hogyan tüntetünk el egy ablakot?", ["A piros X-szel", "Kikapcsoljuk a lámpát", "Letakarjuk", "Megfújjuk"], 0),
            ("Mi a tálca?", ["Az alsó sáv", "Egy tányér", "A monitor teteje", "A székünk"], 0),
            ("Melyik az óra helye?", ["A tálca jobb szélén", "Az egéren", "A billentyűzeten", "A falon"], 0),
            ("Hogyan rendezzük az ikonokat?", ["Egérrel húzzuk", "Beszélünk hozzájuk", "Megrázzuk a monitort", "Várunk"], 0),
            ("Melyik ikon a böngészőé?", ["Ami az internetet nyitja", "Ami a zenét játssza", "Ami a rajzot menti", "Ami a lomtár"], 0),
            ("Mi történik, ha törlünk egy ikont?", ["Belekerül a lomtárba", "Kigyullad a gép", "Eltűnik örökre", "Semmi"], 0),
            ("Mi a kurzor?", ["A kis nyíl", "Egy kerék", "Egy doboz", "Egy kábel"], 0),
            ("Melyik gombbal frissítünk?", ["F5", "F1", "Esc", "Space"], 0),
            ("Hogyan némítjuk le a gépet?", ["A hangszóró ikonnál", "A billentyűzet kihúzásával", "Letakarással", "Kiabálással"], 0),
            ("Mi az ablak?", ["Egy program nézete", "Egy üveglap a falon", "Egy játék neve", "Egy gomb"], 0),
            ("Mit jelent a minimalizálás?", ["Lekicsinyítés a tálcára", "Törlés", "Nagyítás", "Kikapcsolás"], 0),
            ("Melyik sarokban van a bezáró gomb?", ["Jobb felső", "Bal alsó", "Középen", "Sehol"], 0),
            ("Mire jó a kereső sáv?", ["Programok keresésére", "Rajzolásra", "Zenehallgatásra", "Alvásra"], 0),
            ("Mi a felbontás?", ["A kép élessége", "A gép színe", "Az egér sebessége", "A billentyűk száma"], 0),
            ("Melyik gomb a billentyűzeten?", ["Enter", "Monitor", "Egér", "Asztal"], 0),
            ("Hogyan váltunk ablakot?", ["Kattintunk a tálcán", "Megfordítjuk a gépet", "Becsukjuk a szemünk", "Kiabálunk"], 0),
            ("Mi az operációs rendszer?", ["A gép lelke (pl. Windows)", "Egy játék", "A vírus", "A kábel"], 0),
            ("Mire figyeljünk az asztalon?", ["Hogy rend legyen", "Hogy sok kép legyen", "Hogy ne legyen semmi", "Hogy legyen piszkos"], 0)
        ]
    elif t == 2: # Egér kattintása
        return [
            ("Hány gomb van egy alap egéren?", ["Kettő", "Tíz", "Egy se", "Száz"], 0),
            ("Melyik ujjunk van a bal gombon?", ["Mutatóujj", "Hüvelykujj", "Kisujj", "Gyűrűsujj"], 0),
            ("Mit csinál a bal kattintás?", ["Kiválasztunk vele valamit", "Törlünk", "Kikapcsolunk", "Gépelünk"], 0),
            ("Mire jó a dupla kattintás?", ["Programok indítására", "Rajzolásra", "Alvásra", "Hangerőre"], 0),
            ("Melyik a jobb egérgomb?", ["A jobb oldali gomb", "A görgő", "Az egér alja", "A kábel"], 0),
            ("Mi a görgő feladata?", ["Görgetés fel és le", "Kattintás", "Színezés", "Törlés"], 0),
            ("Mit jelent a 'Drag and drop'?", ["Megfog és odahúz", "Dob és üt", "Fut és ugrik", "Eszik és iszik"], 0),
            ("Hogyan tartjuk az egeret?", ["Lágyan rásimítunk", "Erősen szorítjuk", "Két kézzel", "Ököllel"], 0),
            ("Miért kell az egérpad?", ["Hogy könnyebben csússzon", "Hogy melegítse a kezünk", "Dísznek", "Hogy ne kopjon az asztal"], 0),
            ("Melyik irányba mozog a nyíl, ha balra toljuk az egeret?", ["Balra", "Jobbra", "Fel", "Le"], 0),
            ("Hogyan görgetünk lefelé?", ["Magunk felé tekerjük a görgőt", "Elfelé tekerjük", "Kattintunk", "Megrázzuk"], 0),
            ("Mit jelent a kijelölés?", ["Kék hátteret kap a választott dolog", "Eltűnik a dolog", "Megváltozik a neve", "Semmit"], 0),
            ("Hogyan jelölünk ki több ikont?", ["Húzzunk köréjük keretet", "Egyesével ráütünk", "Beszélünk hozzájuk", "Várunk"], 0),
            ("Mikor használunk jobb kattintást?", ["Ha menüt akarunk látni", "Ha megnyitunk valamit", "Ha törölni akarunk gyorsan", "Ha rajzolunk"], 0),
            ("Mi történik, ha felemeljük az egeret az asztalról?", ["Nem mozog a nyíl", "Tovább mozog", "Kikapcsol a gép", "Robban"], 0),
            ("Lehet-e bal kezes az egér?", ["Igen, át lehet állítani", "Nem, csak jobbkezes van", "Csak a drága egér", "Csak a laptopon"], 0),
            ("Hogyan kattintunk halkan?", ["Finoman nyomjuk meg", "Erősen ütjük", "Kalapáccsal", "Gyorsan"], 0),
            ("Mi az a touchpad?", ["Laptopon lévő érintőpad", "Egy telefon", "A billentyűzet", "A monitor"], 0),
            ("Mire való az egér érzékenysége?", ["Milyen gyorsan mozog a nyíl", "Milyen puha az egér", "Hány gombja van", "Milyen színű"], 0),
            ("Melyik ujjunkat tesszük a görgőre?", ["Középső vagy mutató", "Hüvelyk", "Kisujj", "Mindent"], 0),
            ("Hogyan tisztítjuk az egeret?", ["Puha, száraz ronggyal", "Vízzel", "Szappannal", "Homokkal"], 0),
            ("Mit csinál az egér, ha nincs bedugva?", ["Semmit", "Világít", "Megy magától", "Beszél"], 0),
            ("Hová mutat a kurzor hegye?", ["Ahová kattintunk", "Mellé", "A sarokba", "A tálcára"], 0),
            ("Melyik gombot használjuk a legtöbbet?", ["Bal egérgomb", "Jobb egérgomb", "Görgő", "Egyik se"], 0),
            ("Lehet-e vezeték nélkül használni az egeret?", ["Igen, bluetooth-szal", "Nem, kell a zsinór", "Csak ha van elem", "Igen, de csak 1 percig"], 0)
        ]
    elif t == 3: # Billentyűzet beírás
        return [
            ("Melyik a leghosszabb billentyű?", ["Space (szóköz)", "Enter", "Shift", "Esc"], 0),
            ("Mire jó az Enter gomb?", ["Új sorba lépéshez", "Szóközhöz", "Törléshez", "Kilépéshez"], 0),
            ("Hogyan írunk nagybetűt?", ["Shift + betű", "Space + betű", "Csak simán", "Enterrel"], 0),
            ("Melyik gombbal törlünk visszafelé?", ["Backspace", "Enter", "Space", "Shift"], 0),
            ("Hogyan írunk számokat?", ["A felső sorral vagy a számbillentyűkkel", "Az egérrel", "Sehogy", "Csak betűvel"], 0),
            ("Mire jó a Caps Lock?", ["Folyamatos nagybetűíráshoz", "Törléshez", "Zenehallgatáshoz", "Kikapcsoláshoz"], 0),
            ("Melyik gombbal teszünk szóközt?", ["Space", "Enter", "Alt", "Ctrl"], 0),
            ("Hogyan írunk írásjelet (pl. vessző)?", ["A megfelelő gomb megnyomásával", "Egérrel", "Rajzoljuk", "Suttogjuk"], 0),
            ("Melyik gomb az Esc?", ["A bal felső sarokban", "A jobb alsóban", "Középen", "A tálcán"], 0),
            ("Mire jó a Delete gomb?", ["Törlésre (előrefelé)", "Mentésre", "Másolásra", "Beillesztésre"], 0),
            ("Hány kezet használunk gépeléshez?", ["Mindkettőt", "Csak a jobbat", "Csak a balat", "A lábunkat is"], 0),
            ("Hol vannak a betűk?", ["A billentyűzet közepén", "A szélén", "Az egéren", "A monitoron"], 0),
            ("Melyik gomb a Ctrl?", ["A sarkokban található", "A leghosszabb", "Nincs ilyen", "A gép tetején"], 0),
            ("Hogyan írunk felkiáltójelet?", ["Shift + 4", "Csak 4", "Space + 4", "Enter + 4"], 0),
            ("Mi az a kurzor a szövegben?", ["A villogó függőleges vonal", "Egy nyíl", "Egy pont", "Egy kukac"], 0),
            ("Mit csinál a Tab gomb?", ["Nagyot ugrik a szövegben", "Töröl mindent", "Kikapcsolja a gépet", "Zenél"], 0),
            ("Hogyan írunk @ jelet?", ["AltGr + V", "Shift + V", "Ctrl + V", "Space + V"], 0),
            ("Melyik billentyűzetkiosztást használjuk Magyarországon?", ["Magyar (QWERTZ)", "Angol (QWERTY)", "Francia", "Kínai"], 0),
            ("Mire jó az AltGr gomb?", ["Különleges jelekhez", "Törléshez", "Kilépéshez", "Nagybetűhöz"], 0),
            ("Mit csinálnak a nyíl billentyűk?", ["Mozgatják a kurzort", "Lövik a betűket", "Színeznek", "Törnelk"], 0),
            ("Hogyan írunk ékezetes betűt (pl. á)?", ["Megnyomjuk az 'á' gombot", "Shift + a", "Két 'a' betűvel", "Rajzoljuk"], 0),
            ("Melyik gombbal lehet segítséget kérni?", ["F1", "F12", "Esc", "End"], 0),
            ("Mit csinál a Home gomb?", ["A sor elejére ugrik", "Hazaviszi a gépet", "Kikapcsol", "Ment"], 0),
            ("Mit csinál az End gomb?", ["A sor végére ugrik", "Befejezi a játékot", "Töröl mindent", "Újraindít"], 0),
            ("Hogyan kíméljük a csuklónkat?", ["Egyenesen tartjuk", "Behajlítjuk", "Lógatjuk", "Ráülünk"], 0)
        ]
    elif t == 4: # Fájlok és mappák
        return [
            ("Mi a mappa?", ["Digitális dosszié fájlok tárolására", "Egy füzet", "Egy doboz a polcon", "A számítógép háza"], 0),
            ("Mi a fájl?", ["Egy adatcsomag (pl. kép vagy zene)", "Egy gomb", "Egy kábel", "A monitor"], 0),
            ("Hogyan hozunk létre új mappát?", ["Jobb klikk -> Új -> Mappa", "Kiabálunk a gépnek", "Megrázzuk az egeret", "Várunk"], 0),
            ("Lehet-e a mappának neve?", ["Igen, bármit adhatunk", "Nem, csak számok", "Csak 'Mappa' lehet", "Csak angolul"], 0),
            ("Hogyan nevezünk át egy fájlt?", ["Jobb klikk -> Átnevezés", "Kitöröljük és újraírjuk", "Ránézünk", "Megütjük az Entert"], 0),
            ("Hol tároljuk a fájljainkat?", ["Mappákban", "A billentyűzeten", "A poharunkban", "A levegőben"], 0),
            ("Melyik ikon jelöli általában a mappát?", ["Sárga dosszié", "Kék kör", "Piros X", "Zöld pipa"], 0),
            ("Lehet-e egy mappában másik mappa?", ["Igen, ez az almappa", "Nem, csak fájl", "Csak ha nagy a gép", "Csak ha engedi a tanár"], 0),
            ("Hogyan törlünk egy mappát?", ["Kijelöljük és Delete", "Vízbe dobjuk", "Letakarjuk", "Kikapcsoljuk a gépet"], 0),
            ("Mire jó a fájl kiterjesztése (pl. .jpg)?", ["Megmutatja a fájl típusát", "A fájl ára", "A fájl színe", "Semmire"], 0),
            ("Hogyan mozgatunk egy fájlt mappába?", ["Belehúzzuk az egérrel", "Ráfújunk", "Suttogunk neki", "Kikapcsoljuk"], 0),
            ("Mit jelent a fájl mérete?", ["Mennyi helyet foglal a gépen", "Mekkora a képernyőn", "Hány centi", "Milyen nehéz"], 0),
            ("Hogyan találunk meg egy fájlt?", ["A keresőbe írjuk a nevét", "Mindent átnézünk", "Újat csinálunk", "Várunk"], 0),
            ("Melyik fájl a kép?", ["Ami .png vagy .jpg végű", "Ami .mp3 végű", "Ami .txt végű", "Ami .exe végű"], 0),
            ("Melyik fájl a zene?", ["Ami .mp3 vagy .wav végű", "Ami .jpg végű", "Ami .doc végű", "Ami .pdf végű"], 0),
            ("Mit csinál a Lomtár?", ["Megőrzi a törölt fájlokat", "Meghal tőle a gép", "Zenél", "Képet mutat"], 0),
            ("Hogyan nyitunk meg egy mappát?", ["Kétszer kattintunk rá", "Egyszer ráütünk", "Megsimogatjuk", "Kikapcsoljuk"], 0),
            ("Lehet-e két ugyanolyan nevű fájl egy mappában?", ["Nem, különböző név kell", "Igen, bármennyi", "Csak ha fekete-fehér", "Csak kedden"], 0),
            ("Mire jó a 'Dokumentumok' mappa?", ["Írott szövegek tárolására", "Csak játékra", "Szemétnek", "Semmire"], 0),
            ("Mi történik, ha kiürítjük a Lomtárat?", ["Végleg eltűnnek a fájlok", "Újra előjönnek", "Megtelik a gép", "Semmi"], 0),
            ("Melyik ikon a képfájlé?", ["Gyakran egy kis kép vagy táj", "Egy hangjegy", "Egy nagy W betű", "Egy sárga doboz"], 0),
            ("Hogyan látjuk a fájlok listáját?", ["A fájlkezelőben", "A Paintben", "A böngészőben", "A falon"], 0),
            ("Mit jelent a 'Mentés'?", ["Eltároljuk a munkánkat", "Kimentjük a gépből", "Megvédjük a vírustól", "Semmit"], 0),
            ("Miért fontos rendet tartani a mappákban?", ["Hogy gyorsan megtaláljunk mindent", "Hogy szebb legyen a gép", "Mert a tanár kéri", "Nem fontos"], 0),
            ("Hogyan jelölünk ki minden fájlt?", ["Ctrl + A", "Ctrl + C", "Ctrl + V", "Esc"], 0)
        ]
    elif t == 5: # Másolás-beillesztés
        return [
            ("Melyik billentyűkombináció a másolás?", ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"], 0),
            ("Melyik billentyűkombináció a beillesztés?", ["Ctrl + V", "Ctrl + C", "Ctrl + S", "Ctrl + P"], 0),
            ("Mit jelent a 'Kivágás'?", ["Elmozgatjuk az eredeti helyéről", "Szétvágjuk a monitort", "Töröljük", "Megduplázzuk"], 0),
            ("Mi a vágólap?", ["Egy láthatatlan tároló a másolt dolgoknak", "Egy igazi fa tábla", "A billentyűzet", "Az egérpad"], 0),
            ("Melyik gomb a kivágás?", ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + A"], 0),
            ("Lehet-e képet másolni?", ["Igen, ugyanúgy mint a szöveget", "Nem, csak betűket", "Csak ha van gépünk", "Csak ha lerajzoljuk"], 0),
            ("Hányszor illeszthetjük be, amit egyszer lemásoltunk?", ["Akárhányszor", "Csak egyszer", "Kétszer", "Tízszer"], 0),
            ("Mit kell tenni beillesztés előtt?", ["Ki kell jelölni a helyet", "Ki kell kapcsolni a gépet", "Meg kell enni egy almát", "Semmit"], 0),
            ("Hogyan másolunk egérrel?", ["Jobb klikk -> Másolás", "Bal klikk ötször", "Megrázzuk", "Gördítünk"], 0),
            ("Mi történik, ha újat másolunk?", ["Az előző törlődik a vágólapról", "Mögé kerül", "Kettő lesz", "Semmi"], 0),
            ("Hogyan jelöljük ki a szöveget másoláshoz?", ["Húzzuk rajta az egeret bal gombbal", "Ránézünk", "Ráütünk a billentyűzetre", "Megfújjuk"], 0),
            ("Mit jelent a Ctrl + Z?", ["Visszavonás", "Mentés", "Kilépés", "Zene"], 0),
            ("Mire jó a másolás?", ["Hogy ne kelljen újra leírni ugyanazt", "Hogy gyorsabb legyen a net", "Hogy szebb legyen a kép", "Semmire"], 0),
            ("Lehet-e mappát másolni?", ["Igen, az egész tartalmával együtt", "Nem, csak fájlt", "Csak ha üres", "Csak ha sárga"], 0),
            ("Melyik ikon a beillesztés?", ["Általában egy kis írótábla", "Egy olló", "Két papírlap", "Egy piros X"], 0),
            ("Hol találjuk a másolás parancsot?", ["A szerkesztés menüben vagy jobb klikknél", "A tálcán", "A monitor hátulján", "Az egér alján"], 0),
            ("Melyik a kivágás ikonja?", ["Egy olló", "Egy ecset", "Egy radír", "Egy vödör"], 0),
            ("Mit csinál a Ctrl + A?", ["Mindent kijelöl", "Mindent töröl", "Mindent elment", "Mindent bezár"], 0),
            ("Mikor használunk kivágást a másolás helyett?", ["Ha nem akarjuk, hogy ott maradjon az eredeti", "Ha nincs ollónk", "Ha sok a hely a gépen", "Soha"], 0),
            ("Lehet-e internetről másolni szöveget?", ["Igen, ha kijelöljük", "Nem, tilos", "Csak ha tudunk angolul", "Csak éjszaka"], 0),
            ("Hogyan illesztünk be egérrel?", ["Jobb klikk -> Beillesztés", "Bal klikk gyorsan", "Görgetéssel", "Kattintással"], 0),
            ("Mi az a dupla másolás?", ["Nincs ilyen alapból", "Kétszer nyomjuk a Ctrl-t", "Két géppel", "Egy titok"], 0),
            ("Mit jelent az 'Undo'?", ["Visszavonás", "Indítás", "Alvás", "Vége"], 0),
            ("Miért nem működik a beillesztés néha?", ["Mert nem másoltunk le semmit", "Mert nincs internet", "Mert lemerült az egér", "Mert sötét van"], 0),
            ("Hogyan másolunk fájlt egyik mappából a másikba?", ["Másolás, majd a másik mappában beillesztés", "Rágondolunk", "Várunk", "Belebeszélünk"], 0)
        ]
    elif t == 6: # Paint rajzolás
        return [
            ("Mire való a Paint program?", ["Rajzolásra és képszerkesztésre", "Írásra", "Zenehallgatásra", "Internetezésre"], 0),
            ("Melyik eszközzel rajzolunk szabadkézzel?", ["Ecset vagy Ceruza", "Radír", "Vödör", "Szöveg"], 0),
            ("Melyik eszközzel töltünk ki egy formát színnel?", ["Kiöntő vödör", "Ceruza", "Radír", "Nagyító"], 0),
            ("Hogyan javítjuk ki a hibát?", ["Radírral vagy visszavonással", "Kikapcsoljuk a gépet", "Átfestjük fehérre", "Sírva fakadunk"], 0),
            ("Melyik gombbal rajzolunk kört?", ["Ellipszis forma", "Téglalap forma", "Vonal", "Csillag"], 0),
            ("Hogyan választunk színt?", ["Rákattintunk a színpalettán", "Leírjuk a nevét", "Megnyaljuk az egeret", "Várunk"], 0),
            ("Melyik eszközzel írunk szöveget a képbe?", ["Az 'A' betűs gombbal", "Az ecsettel", "A ceruzával", "A radírral"], 0),
            ("Mit csinál a nagyító?", ["Közelebb hozza a rajz részleteit", "Nagyobb lesz tőle a monitor", "Kilyukasztja a papírt", "Semmit"], 0),
            ("Hogyan rajzolunk egyenes vonalat?", ["A vonal eszközzel és a Shift nyomásával", "Szabadkézzel", "Az egér görgetésével", "Behunyt szemmel"], 0),
            ("Mire jó a 'Kijelölés' eszköz?", ["Egy rész kivágására vagy mozgatására", "Színezésre", "Törlésre", "Mentésre"], 0),
            ("Mit jelent a 'Vászon'?", ["A fehér terület, amire rajzolunk", "A gép hátulja", "A billentyűzet", "Az egér padja"], 0),
            ("Melyik gombbal mentjük el a rajzot?", ["Fájl -> Mentés", "Kilépés", "Jobb klikk", "Space"], 0),
            ("Hogyan lesz vastagabb az ecset?", ["A méret (vonalvastagság) beállításnál", "Erősebben nyomjuk az egeret", "Ráfújunk", "Sötétebb színt választunk"], 0),
            ("Melyik eszközzel lehet szabályos négyzetet rajzolni?", ["Téglalap eszköz + Shift", "Ceruza", "Vödör", "Radír"], 0),
            ("Lehet-e fényképet megnyitni Paintben?", ["Igen, a Megnyitás menüvel", "Nem, csak rajzot", "Csak ha mi készítettük", "Csak fekete-fehéret"], 0),
            ("Mit csinál a 'Színválasztó' (pipetta)?", ["Lemásol egy színt a rajzról", "Megméri a hőmérsékletet", "Kitörli a színt", "Zenél"], 0),
            ("Melyik formát nem találjuk meg alapból?", ["Zsiráf", "Csillag", "Szív", "Nyíl"], 0),
            ("Hogyan készítünk új lapot?", ["Fájl -> Új", "Letöröljük a régit", "Kikapcsoljuk a gépet", "Várunk"], 0),
            ("Mit jelent a 'Pixel'?", ["A kép legkisebb pontja", "Egy játék neve", "A billentyűzet gombja", "Egy állat"], 0),
            ("Melyik billentyű segít szabályos formákat rajzolni?", ["Shift", "Enter", "Space", "Alt"], 0),
            ("Mit csinál a spray (szórófej)?", ["Pöttyözve fest", "Vizet spriccel", "Kitörli a képet", "Kikapcsolja a Paintet"], 0),
            ("Hogyan forgatunk el egy képet?", ["A Forgatás menüponttal", "Megfordítjuk a monitort", "Fejre állunk", "Körbe forgatjuk az egeret"], 0),
            ("Lehet-e saját színt keverni?", ["Igen, a Színek szerkesztése gombbal", "Nem, csak ami ott van", "Csak ha festők vagyunk", "Csak ceruzával"], 0),
            ("Melyik kiterjesztésű fájlba ment a Paint?", ["Általában .png vagy .jpg", "Csak .txt", "Csak .mp3", "Csak .exe"], 0),
            ("Mi történik, ha 'kiömlik' a festék a vödörből?", ["Befesti az egész lapot, ha nincs bezárva a vonal", "Tönkremegy a gép", "Vizes lesz az asztal", "Semmi"], 0)
        ]
    elif t == 7: # Szövegírás
        return [
            ("Melyik programot használjuk szövegíráshoz?", ["Word vagy Jegyzettömb", "Paint", "Számológép", "Zenelejátszó"], 0),
            ("Hogyan változtatjuk meg a betűk színét?", ["A betűszín ikonnal (A betű alatta szín)", "Megfestjük ecsettel", "Ráfújunk a monitorra", "Sehogy"], 0),
            ("Mit jelent a 'Félkövér' betű?", ["Vastagabbak lesznek a betűk", "Nagyobbak lesznek", "Eldőlnek", "Eltűnnek"], 0),
            ("Hogyan lesznek 'Dőlt' betűk?", ["A dőlt (I) ikonnal", "Megdöntjük a monitort", "Fél kézzel gépelünk", "Sehogy"], 0),
            ("Mit csinál az 'Aláhúzott' gomb?", ["Vonalat húz a szöveg alá", "Áthúzza a szöveget", "Törli a szöveget", "Kiszínezi"], 0),
            ("Hogyan növeljük a betűk méretét?", ["A számok kiválasztásával a méretnél", "Nagyítóval", "Erősebben nyomjuk a billentyűt", "Közelebb megyünk"], 0),
            ("Mi a 'Betűtípus'?", ["A betűk alakja és stílusa", "A gép neve", "A papír színe", "A billentyűzet típusa"], 0),
            ("Hogyan igazítjuk középre a szöveget?", ["A középre igazítás ikonnal", "Sok szóközzel", "Az egérrel odahúzzuk", "Sehogy"], 0),
            ("Melyik gombbal kezdünk új bekezdést?", ["Enter", "Space", "Shift", "Alt"], 0),
            ("Hogyan javítjuk ki az elgépelt szót?", ["Töröljük és újraírjuk", "Átfestjük", "Hagyjuk úgy", "Kikapcsoljuk a gépet"], 0),
            ("Mire jó a 'Helyesírás-ellenőrző'?", ["Jelzi a hibás szavakat", "Megírja helyettünk a leckét", "Kiszínezi a betűket", "Semmire"], 0),
            ("Hogyan mentjük el az irományunkat?", ["Fájl -> Mentés", "Bezárjuk az ablakot", "Kihúzzuk a gépet", "Space-szel"], 0),
            ("Mi az a kurzor a szövegben?", ["A villogó jel, ahová a betű kerül", "Egy kis állat", "A billentyűzet neve", "A monitor széle"], 0),
            ("Hogyan jelölünk ki egy szót?", ["Kattintsunk rá kétszer", "Ránézünk", "Ráütünk", "Megszámoljuk"], 0),
            ("Mire jó a felsorolás (pöttyök)?", ["Listák készítésére", "Rajzolásra", "Számolásra", "Semmire"], 0),
            ("Hogyan illesztünk be képet a szövegbe?", ["Beszúrás -> Kép", "Lerajzoljuk", "Másolás és beillesztés", "Az 1. és 3. is jó"], 3),
            ("Mit jelent a 'Margó'?", ["A papír széle és a szöveg közti távolság", "A tanár neve", "Egy betűtípus", "A gép színe"], 0),
            ("Lehet-e színes papírra írni a gépben?", ["Igen, az oldal színe állítható", "Nem, csak fehérre", "Csak feketére", "Csak ha van festékünk"], 0),
            ("Hogyan gépelünk gyorsabban?", ["Sokat gyakorolunk", "Erősen ütjük a gombokat", "Becsukjuk a szemünket", "Kérünk valakit"], 0),
            ("Mi az a 'szóköz'?", ["A szavak közötti üres hely", "Egy csillag", "A monitor kerete", "A billentyűk közti rés"], 0),
            ("Hogyan írunk nagy kezdőbetűt?", ["Shift nyomva tartása mellett", "Space-szel", "Enterrel", "Két kattintással"], 0),
            ("Mit jelent a sorkizárt igazítás?", ["A szöveg mindkét széle egyenes", "Csak a bal széle egyenes", "Csak a jobb széle", "Középen van"], 0),
            ("Hogyan törlünk egy egész mondatot?", ["Kijelöljük és Delete", "Egyesével visszatöröljük", "Kikapcsoljuk a gépet", "Átfestjük"], 0),
            ("Melyik program ingyenes szövegíró?", ["Jegyzettömb", "Word", "Excel", "Photoshop"], 0),
            ("Mire kell figyelni írás közben?", ["Hogy egyenesen üljünk", "Hogy ne nézzük a képernyőt", "Hogy csak egy kézzel írjunk", "Hogy sötét legyen"], 0)
        ]
    elif t == 8: # USB és pendrive
        return [
            ("Mi az a pendrive?", ["Hordozható adattároló", "Egy fajta egér", "A monitor dísze", "Egy kábel"], 0),
            ("Hová dugjuk a pendrive-ot?", ["Az USB portba", "A konnektorba", "A fülünkbe", "A monitorra"], 0),
            ("Mire jó a pendrive?", ["Fájlok szállítására gépek között", "Zenehallgatásra fülhallgató nélkül", "Sütésre", "Világításra"], 0),
            ("Hogyan kell biztonságosan eltávolítani?", ["A tálcán az adathordozó kiadása gombbal", "Egyszerűen kirántjuk", "Ollóval levágjuk", "Kikapcsoljuk a gépet"], 1), # Trükkös, de a helyes a kiadás, viszont sokan csak kirántják. K2 szinten tanítjuk a biztonságot.
            ("Lehet-e a pendrive-on játék?", ["Igen, ha rátesszük", "Nem, csak kép", "Csak zene", "Csak házi feladat"], 0),
            ("Melyik a pendrive másik neve?", ["USB kulcs", "Gépkulcs", "Ajtónyitó", "Kódkulcs"], 0),
            ("Mekkora egy pendrive?", ["Kicsi, elfér a zsebben", "Mekkora mint egy monitor", "Mint egy ház", "Láthatatlan"], 0),
            ("Kell-e elem a pendrive-ba?", ["Nem, a géptől kap áramot", "Igen, ceruzaelem", "Igen, gombelem", "Csak ha világít"], 0),
            ("Mi történik, ha vizes lesz a pendrive?", ["Tönkremehet, ne érje víz", "Semmi, szereti a vizet", "Gyorsabb lesz", "Kék lesz"], 0),
            ("Hogyan másolunk rá fájlt?", ["Ráhúzzuk a pendrive mappájába", "Ráírjuk filccel", "Ráfújjuk", "Várunk"], 0),
            ("Honnan tudjuk, melyik az USB csatlakozó?", ["Lapos és téglalap alakú", "Kerek és zöld", "Háromszög alakú", "Nincs ilyen"], 0),
            ("Lehet-e vírusos egy pendrive?", ["Igen, ezért vigyázni kell vele", "Nem, a vírus nem szereti", "Csak ha beteg a tulajdonosa", "Csak ha meleg van"], 0),
            ("Hány fájl fér rá egy pendrive-ra?", ["A méretétől függ (sok)", "Mindig csak 10", "Pontosan 100", "Végtelen"], 0),
            ("Mi az az USB kábel?", ["Adatok és áram szállítására való", "Cipőfűző", "Ugrókötél", "Díszszalag"], 0),
            ("Hányféleképpen lehet bedugni a régi USB-t?", ["Csak egyféleképpen, ha nem megy, meg kell fordítani", "Bárhogy", "Háromféleképpen", "Sehogy"], 0),
            ("Mire jó még az USB?", ["Töltésre is (pl. telefon)", "Evésre", "Alvásra", "Rajzolásra"], 0),
            ("Mi az az 'External Hard Drive'?", ["Egy nagy pendrive (külső merevlemez)", "Egy belső alkatrész", "Egy játék", "A gép agya"], 0),
            ("Szabad-e idegen pendrive-ot a gépbe dugni?", ["Csak ha megengedi a szülő/tanár", "Igen, bármit", "Csak ha szépen kérik", "Igen, ha találtuk"], 0),
            ("Mit csinálunk, ha nem olvassa a gép?", ["Kihúzzuk és újra bedugjuk", "Megütjük a gépet", "Bele fújunk", "Sírva fakadunk"], 0),
            ("Van-e a pendrive-nak mozgó alkatrésze?", ["Nincs", "Van benne egy kerék", "Van benne egy motor", "Igen, ugrál"], 0),
            ("Milyen színű az USB 3.0 csatlakozó gyakran?", ["Kék", "Piros", "Fekete", "Fehér"], 0),
            ("Mi az a micro-USB?", ["Kisebb csatlakozó, pl. telefonokhoz", "Egy nagyon nagy kábel", "Egy vírus", "Egy játék"], 0),
            ("Hogyan védjük a pendrive-ot?", ["Rátesszük a kupakját", "Vízbe tesszük", "Melegítjük", "Elássuk"], 0),
            ("Mire jó a felhő tárhely a pendrive helyett?", ["Internetten tároljuk a fájlokat", "Az égen tároljuk", "Esőben használjuk", "Semmire"], 0),
            ("Melyik a legnagyobb tárhely?", ["1 Terabyte", "1 Gigabyte", "1 Megabyte", "1 Kilobyte"], 0)
        ]
    elif t == 9: # Internet böngésző
        return [
            ("Mi az a böngésző?", ["Program, amivel internetezünk", "Egy játék", "A monitor neve", "Egy kábel"], 0),
            ("Melyik egy böngésző neve?", ["Google Chrome", "Paint", "Word", "Lomtár"], 0),
            ("Mi az a weboldal?", ["Egy oldal az interneten", "Egy igazi papír", "Egy könyv", "A gép háttérképe"], 0),
            ("Hová írjuk az oldal címét?", ["A címsorba (felül)", "A tálcára", "A billentyűzetre", "A füzetünkbe"], 0),
            ("Mire jó a 'Vissza' gomb?", ["Az előző oldalra lépéshez", "A gép kikapcsolásához", "Törléshez", "Hangerőhöz"], 0),
            ("Mi az a link?", ["Egy hivatkozás, amire kattintva új oldal nyílik", "Egy lánc", "Egy kép", "Egy hang"], 0),
            ("Hogyan frissítünk egy oldalt?", ["A görbe nyíllal vagy F5-tel", "Kikapcsoljuk a monitort", "Várunk egy órát", "Gépelünk"], 0),
            ("Melyik ikon a 'Kezdőlap'?", ["Egy kis házikó", "Egy autó", "Egy fa", "Egy telefon"], 0),
            ("Mi az a fül (tab) a böngészőben?", ["Több oldalt is nyitva tarthatunk egyszerre", "A gép füle", "Egy gomb az egéren", "A billentyűzet része"], 0),
            ("Hogyan keresünk valamit az interneten?", ["Keresőbe (pl. Google) írjuk a szót", "Kiabálunk a gépnek", "Mindent végigkattintunk", "Várunk"], 0),
            ("Szabad-e bármire rákattintani?", ["Nem, csak amit ismerünk vagy szabad", "Igen, mindenre", "Csak a pirosakra", "Csak a hirdetésekre"], 0),
            ("Mi az a 'Kedvencek' vagy 'Könyvjelző'?", ["Elmentett oldal, amit szeretünk", "Egy igazi könyv", "A tanár kedvence", "Egy matrica"], 0),
            ("Mire jó a nagyító ikon?", ["Keresésre", "Nagyításra", "Törlésre", "Rajzolásra"], 0),
            ("Mi az a Wi-Fi?", ["Vezeték nélküli internet", "Egy fajta süti", "A gép neve", "Egy játék"], 0),
            ("Hogyan csukunk be egy fület?", ["A fülön lévő kis x-szel", "Kikapcsoljuk a gépet", "Letakarjuk", "Megfújjuk"], 0),
            ("Melyik nem böngésző?", ["Youtube", "Edge", "Firefox", "Safari"], 0),
            ("Mire jó az internet?", ["Tanulásra, játékra, kapcsolattartásra", "Csak alvásra", "Csak evésre", "Semmire"], 0),
            ("Mi az a URL?", ["A weboldal pontos címe", "Egy állat", "Egy gomb", "Egy vírus"], 0),
            ("Hogyan lesz nagyobb a betű a böngészőben?", ["Ctrl és a + gombbal", "Nagyítóval", "Közelebb megyünk", "Kiabálunk"], 0),
            ("Mire figyeljünk internetezés közben?", ["Az időre és a biztonságra", "Hogy ne pislogjunk", "Hogy csak állva nézzük", "Semmire"], 0),
            ("Mi az az 'Előzmények'?", ["A korábban meglátogatott oldalak listája", "Egy történelem könyv", "A jövőnk", "Semmi"], 0),
            ("Mit jelent a 'Letöltés'?", ["Valamit a netről a gépünkre teszünk", "Kivisszük a gépet", "Törlünk mindent", "Rajzolunk"], 0),
            ("Mi az a hirdetés?", ["Reklám, ami el akar adni valamit", "Egy fontos levél", "Egy ajándék", "A gép része"], 0),
            ("Szabad-e idegenekkel beszélgetni a neten?", ["Nem, soha", "Igen, bárkivel", "Csak ha kedves", "Csak ha van képe"], 0),
            ("Hogyan lépünk ki a böngészőből?", ["A jobb felső piros X-szel", "Kihúzzuk a gépet", "Becsukjuk a szemünk", "Várunk"], 0)
        ]
    elif t == 10: # Letöltés
        return [
            ("Mit jelent a letöltés?", ["Fájlt másolunk az internetről a gépre", "Törlünk a gépről", "Feltöltünk valamit", "Rajzolunk"], 0),
            ("Hová kerülnek általában a letöltött fájlok?", ["A Letöltések (Downloads) mappába", "A Lomtárba", "A konyhába", "A monitor alá"], 0),
            ("Szabad-e bármit letölteni?", ["Csak engedéllyel és biztonságos helyről", "Igen, bármit", "Csak ami ingyen van", "Csak a játékokat"], 0),
            ("Miért kell várni letöltéskor?", ["Mert az adatoknak idő kell az úton", "Mert a gép pihen", "Mert a net alszik", "Csak viccből"], 0),
            ("Hogyan látjuk, hogy kész a letöltés?", ["A böngésző alján vagy szélén látszik", "Megszólal egy duda", "Kikapcsol a gép", "Sehogy"], 0),
            ("Mit tegyünk, ha gyanús fájlt látunk?", ["Ne töltsük le, szóljunk felnőttnek", "Töltsük le gyorsan", "Kattintsunk rá sokat", "Hívjuk át a barátunkat"], 0),
            ("Lehet-e vírust letölteni?", ["Igen, ezért kell óvatosnak lenni", "Nem, a vírus nem tud repülni", "Csak ha nincs egérpadunk", "Csak éjszaka"], 0),
            ("Mekkora egy letöltött kép?", ["Pár Megabyte vagy Kilobyte", "100 kiló", "100 méter", "1 gramm"], 0),
            ("Hogyan állítjuk meg a letöltést?", ["A Mégse vagy Stop gombbal", "Kihúzzuk a gépet", "Kiabálunk", "Elmegyünk otthonról"], 0),
            ("Mi az a 'Feltöltés'?", ["A gépünkről küldünk valamit a netre", "Pakolunk a polcra", "Elemeket töltünk", "Rajzolunk"], 0),
            ("Mit csináljunk a letöltött játékkal?", ["Telepíteni kell, ha biztonságos", "Azonnal töröljük", "Együk meg", "Nézzük"], 0),
            ("Honnan tölthetünk le képeket?", ["Ingyenes és biztonságos oldalakról", "Bárhonnan, mindegy", "Csak a Facebookról", "Sehonnan"], 0),
            ("Mi az a PDF?", ["Egy fajta dokumentum fájl", "Egy állat", "Egy étel", "Egy gomb"], 0),
            ("Mi történik, ha megszakad a net letöltés közben?", ["Leáll a letöltés", "Folytatódik magától", "Felrobban a gép", "Semmi"], 0),
            ("Kell-e fizetni minden letöltésért?", ["Nem, sok minden ingyenes", "Igen, mindenért", "Csak ha színes", "Csak ha nagy"], 0),
            ("Mire jó a tömörített fájl (.zip)?", ["Hogy kisebb helyet foglaljon", "Hogy ne legyen benne víz", "Hogy gyorsabb legyen a gép", "Semmire"], 0),
            ("Hogyan nyitjuk meg a letöltött fájlt?", ["Kattintunk rá a böngészőben vagy a mappában", "Ránézünk", "Várunk", "Kikapcsoljuk"], 0),
            ("Lehet-e zenét letölteni?", ["Igen, legális oldalakról", "Nem, tilos", "Csak ha tudunk énekelni", "Csak ha van fülhallgatónk"], 0),
            ("Mi az az App Store vagy Play Áruház?", ["Alkalmazások letöltésére való hely", "Egy igazi bolt", "Egy játszótér", "A gép neve"], 0),
            ("Hogyan töröljük a letöltött fájlt, ha már nem kell?", ["Kijelöljük és Delete", "Letakarjuk", "Megesszük", "Kihúzzuk a gépet"], 0),
            ("Miért fontos a vírusirtó letöltéskor?", ["Ellenőrzi, hogy ne legyen baj", "Gyorsítja a netet", "Kiszínezi a fájlt", "Semmi"], 0),
            ("Mit jelent a 'Save image as'?", ["Kép mentése másként", "Kép törlése", "Kép küldése", "Kép nézése"], 0),
            ("Lehet-e könyvet letölteni?", ["Igen, e-könyveket", "Nem, csak papíron van", "Csak ha tudunk olvasni", "Csak ha van polcunk"], 0),
            ("Mire jó a letöltési sebesség?", ["Megmutatja, milyen gyorsan ér ide a fájl", "Megmutatja, milyen gyors az egér", "A gép színe", "Semmi"], 0),
            ("Mit tegyünk, ha elfogy a hely a gépen?", ["Töröljük a felesleges letöltéseket", "Vegyünk új monitort", "Dobjuk ki a gépet", "Sírjunk"], 0)
        ]
    elif t == 11: # Email
        return [
            ("Mi az az email?", ["Elektronikus levél", "Egy fajta étel", "Egy játék", "A monitor neve"], 0),
            ("Mi kell ahhoz, hogy emailt küldjünk?", ["Internet és egy email cím", "Bélyeg", "Postás", "Papír és toll"], 0),
            ("Melyik egy email cím?", ["pelda@gmail.com", "www.google.hu", "C:\\Dokumentumok", "Kovács János"], 0),
            ("Ki a 'Címzett'?", ["Aki kapja a levelet", "Aki írja a levelet", "A postás", "A gép"], 0),
            ("Mi a 'Tárgy' az emailben?", ["A levél rövid címe vagy témája", "Egy igazi doboz", "A billentyűzet", "Semmi"], 0),
            ("Hogyan küldjük el a levelet?", ["A 'Küldés' (Send) gombbal", "Kikapcsoljuk a gépet", "Ráfújunk a monitorra", "Space-szel"], 0),
            ("Mi az a 'Csatolmány'?", ["A levélhez mellékelt fájl (pl. kép)", "Egy csat az egéren", "A kábel", "Egy gomb"], 0),
            ("Melyik jel van minden email címben?", ["@ (kukac)", "# (kettőskereszt)", "$ (dollárjel)", "& (és jel)"], 0),
            ("Mi a 'Beérkező levelek' (Inbox)?", ["Ahol az új leveleket találjuk", "A szemetes", "A gép hátulja", "Egy játék"], 0),
            ("Szabad-e ismeretlen embertől jött levelet megnyitni?", ["Inkább ne, szóljunk felnőttnek", "Igen, bármit", "Csak ha sok kép van benne", "Csak ha éhesek vagyunk"], 0),
            ("Mi a 'Spam'?", ["Kéretlen reklámlevél (szemét)", "Egy finom étel", "Egy új játék", "A gép neve"], 0),
            ("Hogyan válaszolunk egy levélre?", ["A 'Válasz' (Reply) gombbal", "Új levelet írunk fejből", "Telefonálunk", "Sehogy"], 0),
            ("Lehet-e az emailben titkot írni?", ["Csak olyat, amit nem baj, ha más is lát", "Igen, teljesen biztonságos", "Csak ha sötét van", "Csak ha halkan gépelünk"], 0),
            ("Hogyan írunk @ jelet?", ["AltGr + V", "Shift + V", "Ctrl + V", "Space"], 0),
            ("Mi az a 'Piszkozat'?", ["Félbehagyott, még el nem küldött levél", "Egy firka", "Egy rossz levél", "A tálca"], 0),
            ("Mire jó az email?", ["Gyors üzenetküldésre bárhová", "Csak rajzolásra", "Csak alvásra", "Semmire"], 0),
            ("Hogyan törlünk egy levelet?", ["A törlés vagy kuka ikonnal", "Letépjük a monitorról", "Kikapcsoljuk a gépet", "Átfestjük"], 0),
            ("Lehet-e videót küldeni emailben?", ["Igen, csatolmányként (ha nem túl nagy)", "Nem, csak betűt", "Csak ha van kameránk", "Csak ha mozog a gép"], 0),
            ("Mi a 'Küldött levelek' mappa?", ["Ahol a már elküldött leveleink vannak", "Ahol a postás lakik", "A gép memóriája", "Egy játék"], 0),
            ("Szabad-e a jelszavunkat megadni emailben?", ["Soha, senkinek!", "Igen, ha kérik", "Csak a barátunknak", "Csak a tanárnak"], 0),
            ("Mi az az 'Aláírás' az emailben?", ["A levél végére tett nevünk", "Egy igazi tollas írás", "A gép neve", "Semmi"], 0),
            ("Lehet-e egyszerre több embernek küldeni levelet?", ["Igen, több címzettet is megadhatunk", "Nem, csak egynek", "Csak ha ikrek", "Csak karácsonykor"], 0),
            ("Melyik gombbal kezdünk új levelet?", ["Levélírás vagy + jel", "X gomb", "Esc", "Space"], 0),
            ("Mi történik, ha elírtuk a címet?", ["Nem érkezik meg a levél", "A gép kijavítja", "Bárki megkapja", "Felrobban a gép"], 0),
            ("Hogy hívják a levelező programokat?", ["Gmail, Outlook, Freemail", "Paint, Word", "Google, Youtube", "Windows, Linux"], 0)
        ]
    elif t == 12: # Google kereső
        return [
            ("Mi a Google?", ["Egy internetes keresőmotor", "Egy fajta gyümölcs", "A monitor márkája", "Egy játék"], 0),
            ("Melyik oldalon keresünk?", ["www.google.hu", "www.paint.hu", "www.tiszta.hu", "www.jatek.hu"], 0),
            ("Hová írjuk a keresett szót?", ["A keresősávba középen", "A képernyő sarkába", "A billentyűzetre", "A füzetünkbe"], 0),
            ("Hogyan indítjuk a keresést?", ["Entert nyomunk vagy a nagyítóra kattintunk", "Várunk", "Kikapcsoljuk a gépet", "Rázolunk"], 0),
            ("Mire jó a 'Képek' fül a Google-ben?", ["Csak képeket mutat a témában", "Zenét játszik", "Rajzol nekünk", "Töröl mindent"], 0),
            ("Mit jelent a 'találati lista'?", ["A keresett szóhoz kapcsolódó oldalak", "A gép hibái", "Egy bevásárlólista", "Semmit"], 0),
            ("Hogyan találunk meg egy állatot a Google-ben?", ["Beírjuk a nevét (pl. 'kutya')", "Leugatjuk a gépet", "Megmutatjuk neki a fotóját", "Várunk"], 0),
            ("Mire jó a Google Térkép?", ["Helyek és utak keresésére", "Kincskeresésre", "Rajzolásra", "Alvásra"], 0),
            ("Szabad-e bármit elhinni, amit a neten találunk?", ["Nem, ellenőrizni kell több helyen", "Igen, a Google mindig igazat mond", "Csak ha színes", "Csak ha nagybetűs"], 0),
            ("Mi az a 'hangalapú keresés'?", ["Beszélni kell a géphez, és ő keres", "A gép énekel nekünk", "A billentyűzet beszél", "Semmi"], 0),
            ("Hogyan keresünk pontos kifejezést?", ["Idézőjelbe tesszük: \"így\"", "Nagybetűvel írjuk", "Sokszor leírjuk", "Kiabálunk"], 0),
            ("Mire jó a Google Fordító?", ["Szavak fordítására más nyelvekre", "Képek festésére", "Zene írására", "Semmire"], 0),
            ("Mit csinál a Google, ha elírjuk a szót?", ["Megkérdezi: 'Esetleg erre gondolt?'", "Kinevet", "Kikapcsol", "Semmit"], 0),
            ("Lehet-e videókat keresni a Google-ben?", ["Igen, a Videók fülön", "Nem, csak a Youtube-on", "Csak ha van tévénk", "Csak hétvégén"], 0),
            ("Melyik a Google logója?", ["Színes betűk (kék, piros, sárga, zöld)", "Egy alma", "Egy ablak", "Egy kismadár"], 0),
            ("Hány találatot ad általában a Google?", ["Nagyon sokat (milliókat)", "Mindig csak tízet", "Pontosan egyet", "Változó, de keveset"], 0),
            ("Mire jó a 'Szerencsém van' gomb?", ["Az első találatra ugrik azonnal", "Pénzt ad", "Játékot indít", "Semmire"], 0),
            ("Hogyan térünk vissza a találatokhoz egy oldalról?", ["A böngésző 'Vissza' gombjával", "Újra gépelünk", "Kikapcsoljuk a gépet", "Várunk"], 0),
            ("Lehet-e híreket keresni?", ["Igen, a Hírek fülön", "Nem, ahhoz újság kell", "Csak ha felnőttek vagyunk", "Csak reggel"], 0),
            ("Miért jó a Google?", ["Gyorsan megtalálunk információkat", "Ettől nem kell tanulni", "Mert szép a színe", "Semmiért"], 0),
            ("Mire figyeljünk kereséskor?", ["Hogy pontos szavakat használjunk", "Hogy minél hosszabbat írjunk", "Hogy csak angolul írjunk", "Semmire"], 0),
            ("Mi az a 'biztonságos keresés'?", ["Szűri a nem gyerekeknek való dolgokat", "Védi a gépet a vírustól", "Nem engedi elrontani a gépet", "Semmi"], 0),
            ("Melyik gombbal lépünk a következő oldalra a találatok közt?", ["A számokra vagy a 'Következő' gombra kattintva", "Space-szel", "Enterrel", "Esc-szel"], 0),
            ("Lehet-e a Google-lel számolni?", ["Igen, ha beírjuk a példát", "Nem, ahhoz számológép kell", "Csak ha tudunk matekozni", "Csak 10-ig"], 0),
            ("Mi az a 'Google Chrome'?", ["Egy böngésző, amit a Google készített", "Egy fajta autó", "Egy fém darab", "Egy játék"], 0)
        ]
    elif t == 13: # Biztonság és jelszó
        return [
            ("Mi az a jelszó?", ["Titkos szó, ami védi a dolgainkat", "Egy becenév", "A gépünk neve", "A kedvenc ételünk"], 0),
            ("Milyen a jó jelszó?", ["Hosszú, van benne szám és jel is", "A nevünk", "12345", "A kutyánk neve"], 0),
            ("Szabad-e elárulni a jelszavunkat másnak?", ["Nem, csak a szüleinknek", "Igen, a barátunknak", "Mindenkinek", "A tanárnak, ha kéri"], 0),
            ("Mi történik, ha túl egyszerű a jelszó?", ["Könnyen kitalálhatják az idegenek", "Gyorsabb lesz a gép", "Nem történik semmi", "Elfelejtjük"], 0),
            ("Mire kell vigyázni az interneten?", ["Ne adjuk meg az adatainkat idegennek", "Ne nézzük túl közelről", "Hogy ne legyen poros a monitor", "Semmire"], 0),
            ("Hogyan tároljuk a jelszavunkat?", ["Jegyezzük meg vagy írjuk titkos helyre", "Írjuk a monitorra", "Mondjuk el mindenkinek", "Sehogy"], 0),
            ("Mi az a felhasználónév?", ["A nevünk vagy becenevünk a gépben", "A jelszavunk", "A gép típusa", "A tanár neve"], 0),
            ("Szabad-e megadni a lakcímünket a neten?", ["Csak ha a szüleink engedik", "Igen, bárkinek", "Csak ha ajándékot ígérnek", "Igen, ha kérdezik"], 0),
            ("Mit tegyünk, ha valaki csúnyát ír nekünk?", ["Szóljunk egy felnőttnek", "Írjunk vissza csúnyát", "Sírjunk", "Töröljük le a gépet"], 0),
            ("Mi az a 'kijelentkezés'?", ["Lezárjuk a fiókunkat, hogy más ne lássa", "Kikapcsoljuk a lámpát", "Kimegyünk a szobából", "Várunk"], 0),
            ("Miért nem jó, ha mindenhol ugyanaz a jelszó?", ["Mert ha egyet kitalálnak, mindent látnak", "Mert unalmas", "Mert a gép nem szereti", "Nem baj, jó az"], 0),
            ("Mit jelent a 'biztonság' a gépnél?", ["Védjük magunkat és a gépünket", "Hogy nem esik le az asztalról", "Hogy tiszta a billentyűzet", "Semmit"], 0),
            ("Ki az az 'idegen' az interneten?", ["Bárki, akit nem ismerünk személyesen", "Aki nem beszél magyarul", "Aki csúnya", "Aki nincs ott"], 0),
            ("Szabad-e fényképet küldeni magunkról idegennek?", ["Soha, soha!", "Igen, ha kéri", "Csak ha szépen kéri", "Csak ha mi is kapunk"], 0),
            ("Mit jelent a lakat ikon a böngészőben?", ["Hogy az oldal biztonságos", "Hogy be van zárva a net", "Hogy nem lehet kattintani", "Semmit"], 0),
            ("Mi az a 'személyes adat'?", ["Név, cím, telefonszám, iskola", "A kedvenc színünk", "A gépünk színe", "A cipőméretünk"], 0),
            ("Miért ne adjuk meg az iskolánk nevét?", ["Hogy idegenek ne találjanak meg minket", "Mert titkos az iskola", "Mert unalmas", "Semmiért"], 0),
            ("Hogyan készítsünk erős jelszót?", ["Keverjünk betűket, számokat és jeleket", "Csak nagybetűvel", "Csak számokkal", "Csak jelekkel"], 0),
            ("Mi az a 'Privacy'?", ["Magánélet és adatvédelem", "Egy fajta zene", "Egy gomb a gépen", "Egy játék"], 0),
            ("Mit tegyünk, ha elfelejtettük a jelszavunkat?", ["Kérjünk segítséget a szülőktől", "Sírjunk", "Vegyünk új gépet", "Találjunk ki újat"], 0),
            ("Szabad-e idegenekkel játszani a neten?", ["Csak felnőtt felügyelete mellett", "Igen, bárkivel", "Soha nem szabad", "Csak ha nyerünk"], 0),
            ("Mi az a 'kétlépcsős azonosítás'?", ["Kétféleképpen is igazolni kell magunkat", "Kétszer kell gépelni", "Két kézzel kell fogni az egeret", "Semmi"], 0),
            ("Miért fontos a jelszó?", ["Védi a titkainkat és a fiókunkat", "Mert mindenki kéri", "Mert szép", "Semmiért"], 0),
            ("Milyen gyakran cseréljünk jelszót?", ["Néha érdemes (pl. évente)", "Soha nem kell", "Minden nap", "Minden órában"], 0),
            ("Mit csinál egy hacker?", ["Rosszban sántikál, feltöri a fiókokat", "Segít gépelni", "Javítja a gépet", "Rajzol"], 0)
        ]
    elif t == 14: # Vírus
        return [
            ("Mi a számítógépes vírus?", ["Egy rosszindulatú program", "Egy igazi betegség", "Egy kis bogár a gépben", "A gép fáradtsága"], 0),
            ("Mit okozhat a vírus a gépben?", ["Lassulást, törlést vagy hibákat", "Gyorsulást", "Szebb színeket", "Zenehallgatást"], 0),
            ("Hogyan kerülhet vírus a gépre?", ["Internetről vagy pendrive-ról", "Ha köhögünk rá", "Ha túl sokat használjuk", "Ha sötét van"], 0),
            ("Mi az a vírusirtó?", ["Program, ami megvédi a gépet", "Egy spray a monitorra", "Egy gyógyszer", "Egy fajta egér"], 0),
            ("Mit csinál a vírusirtó?", ["Keresi és törli a vírusokat", "Rajzol", "Filmet játszik", "Gépel helyettünk"], 0),
            ("Honnan tudjuk, hogy vírusos a gép?", ["Hibaüzenetek jönnek vagy furcsán működik", "Zöld lesz a monitor", "Megszólal", "Semmiből"], 0),
            ("Szabad-e gyanús hirdetésre kattintani?", ["Soha, mert vírust hozhat", "Igen, lehet, hogy nyertünk", "Csak ha villog", "Csak ha vicces"], 0),
            ("Mi az a 'Trójai faló' a gépnél?", ["Egy vírus, ami játéknak látszik", "Egy igazi faló", "Egy gomb a billentyűzeten", "Egy mese"], 0),
            ("Hogyan védhetjük meg a gépet?", ["Vírusirtóval és okos használattal", "Letakarjuk a gépet", "Kikapcsolva tartjuk", "Vízbe mártjuk"], 0),
            ("Mit jelent a 'frissítés' a vírusirtónál?", ["Megtanulja az új vírusokat", "Új színt kap", "Gyorsabb lesz tőle az egér", "Semmit"], 0),
            ("Szabad-e ismeretlen fájlt megnyitni?", ["Nem, szóljunk felnőttnek", "Igen, hátha jó", "Csak ha kicsi", "Csak ha kék"], 0),
            ("Mit csinál egy 'féreg' vírus?", ["Önmagát másolja és terjed", "Megeszi a billentyűket", "Kikúszik a gépből", "Semmit"], 0),
            ("Mire jó a tűzfal?", ["Megállítja a betolakodókat a netről", "Melegíti a szobát", "Kikapcsolja a gépet tűz esetén", "Dísz"], 0),
            ("Mi az a karantén a gépnél?", ["Ahol a vírusokat elzárja a gép", "Ahol a beteg gyerekek vannak", "A gép hátulja", "Egy mappa"], 0),
            ("Lehet-e a telefon vírusos?", ["Igen, az is egy számítógép", "Nem, a telefon túl kicsi", "Csak ha nincs rajta tok", "Csak ha lemerül"], 0),
            ("Mit tegyünk, ha vírusirtó riaszt?", ["Szóljunk felnőttnek azonnal", "Kapcsoljuk ki a riasztót", "Üssük meg a gépet", "Sírjunk"], 0),
            ("Mi a spam és a vírus kapcsolata?", ["A szemét levelekben gyakran van vírus", "Nincs kapcsolatuk", "A spam irtja a vírust", "Ugyanaz a kettő"], 0),
            ("Hogyan 'gyógyítják' a gépet?", ["A vírusirtó letörli a rossz részeket", "Megsimogatják", "Kikapcsolják egy hétre", "Várunk"], 0),
            ("Miért rossz a vírus?", ["Mert ellophatja az adatainkat", "Mert unalmas", "Mert drága", "Nem is rossz"], 0),
            ("Hogyan leszünk 'okos' felhasználók?", ["Figyelünk, mire kattintunk", "Mindent letöltünk", "Mindenkinek hiszünk", "Nem kérdezünk"], 0),
            ("Melyik egy ismert vírusirtó?", ["ESET, Norton, Avast", "Paint, Google", "Windows, Linux", "Lomtár, Asztal"], 0),
            ("Mit csinál a 'zsarolóvírus'?", ["Pénzt kér a fájljainkért", "Zsarol a tanárnál", "Kinevet minket", "Nem csinál semmit"], 0),
            ("Mire jó a mentés a vírusok ellen?", ["Ha baj van, megmaradnak a fájlok", "Semmire", "A vírus nem szereti a mentést", "Mentésnél fél a vírus"], 0),
            ("Lehet-e vírus a játékokban?", ["Igen, ha nem hivatalos helyről van", "Nem, a játék szent", "Csak ha nehéz a pálya", "Csak ha veszítünk"], 0),
            ("Hogyan kerüljük el a vírusokat?", ["Legyünk óvatosak az interneten", "Ne kapcsoljuk be a gépet", "Használjunk csak egeret", "Semmit"], 0)
        ]
    elif t == 15: # Scratch első program
        return [
            ("Mi az a Scratch?", ["Egy gyerekeknek készült programozó nyelv", "Egy fajta macskaeledel", "Egy rajzoló program", "Egy játék"], 0),
            ("Ki a Scratch főhőse?", ["Egy narancssárga cica", "Egy kutya", "Egy robot", "Egy kisfiú"], 0),
            ("Hogyan adjuk ki a parancsokat?", ["Színes blokkokat illesztünk össze", "Gépelünk", "Beszélünk a géphez", "Rajzolunk"], 0),
            ("Mire jó a Scratch?", ["Saját játékok és mesék készítésére", "Csak matekozásra", "Csak rajzolásra", "Semmire"], 0),
            ("Melyik blokk indítja el a programot?", ["Zöld zászló blokk", "Piros kör blokk", "Kék négyzet", "Sárga háromszög"], 0),
            ("Hogyan mozog a cica?", ["A 'Mozogj' blokkal", "Húzzuk az egérrel", "Fújunk rá", "Magától"], 0),
            ("Hol láthatjuk a programunk eredményét?", ["A Színpadon", "A billentyűzeten", "A füzetünkben", "A konyhában"], 0),
            ("Mik azok a blokkok?", ["A parancsok, amiket egymás alá teszünk", "Igazi építőkockák", "A gép gombjai", "A monitor darabjai"], 0),
            ("Hogyan lesz hangja a programnak?", ["A 'Hang' blokkokkal", "Mi énekelünk bele", "A gép magától tudja", "Sehogy"], 0),
            ("Melyik blokk ismétli a mozgást?", ["A 'Mindig' vagy 'Ismételd' blokk", "A 'Stop' blokk", "A 'Kék' blokk", "Semelyik"], 0),
            ("Hogyan változtatjuk meg a hátteret?", ["A háttér választó gombbal", "Lefestjük a falat", "Kikapcsoljuk a gépet", "Sehogy"], 0),
            ("Mi az a 'Szereplő' a Scratch-ben?", ["Egy figura, amit programozunk", "A tanár", "A gyerek", "A monitor"], 0),
            ("Hogyan törlünk egy blokkot?", ["Visszahúzzuk a menübe vagy jobb klikk törlés", "Ráütünk", "Megesszük", "Kikapcsoljuk"], 0),
            ("Mit csinál a 'Mondd: Szia!' blokk?", ["Egy szövegbuborék jelenik meg a cica felett", "Megszólal a gép", "Kiírja a tálcára", "Semmit"], 0),
            ("Lehet-e saját szereplőt rajzolni?", ["Igen, a beépített rajzolóval", "Nem, csak a cica van", "Csak ha van fotónk", "Csak papíron"], 0),
            ("Hogyan lesz több szereplőnk?", ["Új szereplő hozzáadása gombbal", "Kétszer kattintunk a cicára", "Várunk", "Sehogy"], 0),
            ("Mire jó a 'Jelmez'?", ["Megváltoztathatjuk a szereplő alakját", "Farsangra kell", "A gépnek kell", "Semmire"], 0),
            ("Hogyan lassítjuk le a mozgást?", ["A 'Várj' blokk használatával", "Lassabban húzzuk az egeret", "Halkabban beszélünk", "Sehogy"], 0),
            ("Melyik kategóriában vannak a mozgás blokkok?", ["Kék (Mozgás)", "Lila (Kinézet)", "Sárga (Események)", "Zöld (Műveletek)"], 0),
            ("Melyik kategóriában van a zöld zászló?", ["Események", "Mozgás", "Hang", "Változók"], 0),
            ("Mit jelent a 'Programozás'?", ["Parancsok adása a gépnek", "Tévénézés", "Játékvásárlás", "Gépelés"], 0),
            ("Hogyan állítjuk meg a programot?", ["A piros nyolcszög (stop) gombbal", "Kihúzzuk a gépet", "Ráfújunk", "Várunk"], 0),
            ("Lehet-e a Scratch-et internet nélkül használni?", ["Igen, van letölthető változata", "Nem, csak a neten megy", "Csak ha van zsinór", "Csak a telefonon"], 0),
            ("Mire jó a 'Kinézet' blokk?", ["Színváltásra vagy szövegírásra", "Csak futásra", "Csak ugrálásra", "Semmire"], 0),
            ("Miért szeretjük a Scratch-et?", ["Mert könnyű és kreatív", "Mert kötelező", "Mert narancssárga", "Nem is szeretjük"], 0)
        ]
    elif t == 16: # Algoritmus lépések
        return [
            ("Mi az az algoritmus?", ["Lépések sorozata egy cél eléréséhez", "Egy fajta állat", "A számítógép neve", "Egy játék"], 0),
            ("Melyik egy algoritmus a való életben?", ["Egy recept süti sütéshez", "Az alvás", "A nevetés", "A napsütés"], 0),
            ("Miért fontos a sorrend az algoritmusban?", ["Mert különben nem sikerül a feladat", "Nem fontos, bárhogy jó", "Csak a tanár miatt", "Hogy szebb legyen"], 0),
            ("Mit csinálunk először, ha teát készítünk?", ["Vizet forralunk", "Beletesszük a cukrot", "Megisszuk", "Kidobjuk a filtert"], 0),
            ("Melyik lépés hiányzik: 1. Cipőt felvesz, 2. ..., 3. Elindul?", ["Cipőt beköt", "Levesz", "Megmos", "Meghallgat"], 0),
            ("Hogyan adunk parancsot egy robotnak?", ["Pontos lépésekkel", "Szépen kérjük", "Ránézünk", "Suttogunk neki"], 0),
            ("Mit jelent a 'sorrendiség'?", ["A dolgok egymás utáni következése", "Mindent egyszerre", "A gép színe", "Semmi"], 0),
            ("Melyik algoritmus a fogmosáshoz?", ["Krém a kefére, mosás, öblítés", "Öblítés, alvás, krém", "Mosás, krém nélkül", "Csak nézzük a kefét"], 0),
            ("Hogyan jut el a robot a célba, ha fal van előtte?", ["Ki kell kerülnie pontos lépésekkel", "Átmegy rajta", "Megáll örökre", "Sírni kezd"], 0),
            ("Mi az az 'utasítás'?", ["Egyetlen lépés a programban", "A tanár néni", "Egy könyv", "A billentyűzet"], 0),
            ("Lehet-e egy algoritmus hibás?", ["Igen, ha rossz a sorrend vagy hiányzik lépés", "Nem, a gép mindig tudja", "Csak ha nincs áram", "Csak ha vizes a gép"], 0),
            ("Mit csinál a robot, ha azt mondjuk: 'Menj előre!', de fal van?", ["Nekimegy a falnak", "Megáll és gondolkodik", "Átugorja", "Kikerüli magától"], 0),
            ("Mire jó az algoritmus a gépnek?", ["Ebből tudja, mit kell tennie", "Ettől gyorsabb lesz", "Ettől lesz színes", "Semmire"], 0),
            ("Hogyan javítunk ki egy algoritmust?", ["Megkeressük a rossz lépést és kicseréljük", "Letöröljük az egészet", "Megütjük a gépet", "Várunk"], 0),
            ("Melyik a 'balra fordul' parancs jele?", ["Egy balra mutató nyíl", "Egy felfelé mutató nyíl", "Egy kör", "Egy kereszt"], 0),
            ("Hogyan írunk le egy algoritmust gyerekeknek?", ["Rajzokkal vagy nyilakkal", "Csak angolul", "Csak számokkal", "Sehogy"], 0),
            ("Mit jelent a 'start' az algoritmus elején?", ["Itt kezdődnek a lépések", "Itt van vége", "Megállunk", "Várunk"], 0),
            ("Mit jelent a 'stop' az algoritmus végén?", ["Itt fejeződik be a feladat", "Itt kezdődik", "Újraindul", "Semmi"], 0),
            ("Lehet-e több út a célhoz?", ["Igen, több jó algoritmus is létezhet", "Nem, csak egy jó van", "Csak ha ketten vagyunk", "Soha"], 0),
            ("Melyik algoritmus a 'Házat rajzolunk'?", ["Négyzet, majd rá egy háromszög", "Csak egy kör", "Háromszög, alá semmi", "Csak egy vonal"], 0),
            ("Mi az a 'hibakeresés' (debugging)?", ["A rossz lépések megtalálása", "Bogarak keresése a kertben", "A gép takarítása", "Rajzolás"], 0),
            ("Hogyan tervezünk meg egy programot?", ["Először kigondoljuk a lépéseket", "Azonnal gépelünk", "Kérdezünk valakit", "Várunk"], 0),
            ("Mire jó a logika?", ["Segít jól összerakni a lépéseket", "Semmire", "Ettől lesz szebb a kép", "Csak matekban kell"], 0),
            ("Melyik a legegyszerűbb algoritmus?", ["Csak egyetlen lépés", "Száz lépés", "Ezer lépés", "Zéró lépés"], 0),
            ("Miért jó, ha pontosak vagyunk?", ["Mert a gép csak azt csinálja, amit mondunk", "Mert a tanár szereti", "Mert gyorsabb lesz a gép", "Semmiért"], 0)
        ]
    elif t == 17: # Ciklus
        return [
            ("Mi az a ciklus a programozásban?", ["Egy utasítás ismétlése többször", "Egy kerékpár", "Egy kör alakú rajz", "A gép kikapcsolása"], 0),
            ("Mire jó a ciklus?", ["Hogy ne kelljen ugyanazt sokszor leírni", "Hogy szebb legyen a program", "Hogy lassabb legyen a gép", "Semmire"], 0),
            ("Melyik szót használjuk az ismétlésre?", ["Ismételd vagy Mindig", "Soha", "Egyszer", "Talán"], 0),
            ("Melyik egy ciklus a való életben?", ["A napok váltakozása", "Egy szem pislogás", "Egy pohár víz ivása", "Az elindulás"], 0),
            ("Hogyan mondjuk Scratch-ben, hogy ötször lépjen a cica?", ["'Ismételd 5-ször' blokkba tesszük a mozgást", "Ötször odaírjuk a mozgást", "Mindkettő jó, de a ciklus szebb", "Egyik se jó"], 2),
            ("Mit jelent a 'Végtelen ciklus'?", ["Ami soha nem fejeződik be", "Ami nagyon hosszú", "Ami tízszer fut le", "Ami el sem kezdődik"], 0),
            ("Hogyan állítunk meg egy végtelen ciklust?", ["A stop gombbal", "Kihúzzuk a gépet", "Várunk, amíg elfárad", "Kiabálunk neki"], 0),
            ("Melyik blokk a 'Mindig'?", ["Ami folyamatosan ismétel mindent benne", "Ami csak egyszer fut le", "Ami töröl mindent", "Ami zöld"], 0),
            ("Hogyan rajzolunk négyzetet ciklussal?", ["Ismételd 4-szer: menj, fordulj", "Menj négyszer", "Fordulj négyszer", "Ismételd 10-szer"], 0),
            ("Mit jelent a 'számlálós ciklus'?", ["Tudjuk előre, hányszor fog ismételni", "A gép számolja a pénzt", "A billentyűket számoljuk", "Semmi"], 0),
            ("Melyik az 'Ismételd' blokk színe a Scratch-ben?", ["Narancssárga", "Kék", "Lila", "Zöld"], 0),
            ("Lehet-e ciklusban másik ciklus?", ["Igen, ez a 'beágyazott' ciklus", "Nem, tilos", "Csak ha nagy a gép", "Csak kedden"], 0),
            ("Mire jó a ciklus a táncnál?", ["Ismétlődő mozdulatokhoz", "A zene megállításához", "A ruha kiválasztásához", "Semmire"], 0),
            ("Mit csinál a robot, ha 'Ismételd 3-szor: Tapsolj'?", ["Hármat tapsol", "Egyszer tapsol", "Végtelenül tapsol", "Sehogy"], 0),
            ("Hogyan lesz a cica mozgása folyamatos?", ["A 'Mindig' blokk használatával", "Sok kattintással", "Erős gépeléssel", "Sehogy"], 0),
            ("Mi történik, ha 0-szor ismétlünk?", ["Semmi nem történik", "Egyszer lefut", "Végtelenül fut", "Elromlik a gép"], 0),
            ("Melyik utasítást érdemes ciklusba tenni?", ["Amit sokszor akarunk csinálni", "Amit csak egyszer", "Amit soha", "Semmit"], 0),
            ("Hogyan jelöljük a ciklust egy rajzon?", ["Egy visszafelé mutató nyíllal", "Egy kereszttel", "Egy ponttal", "Egy egyenes vonallal"], 0),
            ("Mire jó a ciklus a zenében?", ["Az ütem és a ritmus ismétlésére", "A hangerőhöz", "A hangszerekhez", "Semmire"], 0),
            ("Mit jelent a 'beágyazott' szó itt?", ["Egymásban lévő dolgok", "Ágyban fekvő gép", "Elveszett adat", "Semmi"], 0),
            ("Hogyan változik a szám az ismétlés blokkban?", ["Átírhatjuk bármilyen számra", "Csak 10 lehet", "Csak páros lehet", "Sehogy"], 0),
            ("Mi a különbség az 'Ismételd' és a 'Mindig' között?", ["Az 'Ismételd' véget ér, a 'Mindig' nem", "Semmi", "A színük", "A 'Mindig' hamarabb kész van"], 0),
            ("Mire jó a ciklus a rajzolásnál?", ["Sok egyforma forma rajzolásához", "Csak egy vonalhoz", "A radírozáshoz", "Semmire"], 0),
            ("Mit csinál a gép, ha a ciklus üres?", ["Nem csinál semmit", "Hibaüzenetet ad", "Felrobban", "Vár ránk"], 0),
            ("Hogyan lesz a játékban az ellenség mozgása folyamatos?", ["Ciklussal", "Egyszeri parancsal", "Rajzolással", "Sehogy"], 0)
        ]
    elif t == 18: # Feltétel
        return [
            ("Mit jelent a feltétel a programozásban?", ["Egy döntést: Ha valami igaz, történik valami", "Egy fajta feladatot", "A gép állapotát", "Egy jelszót"], 0),
            ("Melyik szavakkal kezdjük a feltételt?", ["Ha... akkor...", "Mindig... és...", "Soha... mert...", "Talán... vagy..."], 0),
            ("Melyik egy feltétel a való életben?", ["Ha esik az eső, viszek esernyőt", "Megettem az almát", "Kék az ég", "Megyek az iskolába"], 0),
            ("Mire jó a feltétel a játékban?", ["Pl. Ha hozzám ér a fal, veszítek egy életet", "Hogy színesebb legyen", "Hogy gyorsabb legyen", "Semmire"], 0),
            ("Mit jelent az 'igaz' egy feltételnél?", ["Hogy a vizsgált dolog teljesült", "Hogy nem hazudik a gép", "Hogy szép a rajz", "Semmit"], 0),
            ("Mit jelent a 'hamis' egy feltételnél?", ["Hogy a vizsgált dolog nem teljesült", "Hogy elromlott a gép", "Hogy rossz a válasz", "Semmit"], 0),
            ("Melyik blokk a Scratch-ben a feltétel?", ["A 'Ha ..., akkor' blokk", "A 'Mindig' blokk", "A 'Menj' blokk", "A 'Szín' blokk"], 0),
            ("Mit csinál a program, ha a feltétel nem igaz?", ["Átugorja és megy tovább", "Megáll örökre", "Hibaüzenetet ad", "Kikapcsol"], 0),
            ("Mi az az 'Egyébként' (Else)?", ["Ami akkor történik, ha a feltétel nem igaz", "Egy másik gép", "A tanár válasza", "Semmi"], 0),
            ("Hogyan vizsgáljuk meg, hogy egy szám nagyobb-e?", ["A '>' jellel", "A '+' jellel", "Az 'A' betűvel", "Az egérrel"], 0),
            ("Mire jó a 'érzékelés' a feltételnél?", ["Pl. Érinti-e a cica a szélét?", "Hogy érezze a gép a meleget", "Hogy lásson minket a gép", "Semmire"], 0),
            ("Melyik színűek az érzékelés blokkok?", ["Világoskék", "Narancssárga", "Zöld", "Lila"], 0),
            ("Lehet-e több feltétel egymás után?", ["Igen, bármennyi lehet", "Nem, csak egy", "Csak ha van internet", "Csak kettő"], 0),
            ("Melyik példa a jó feltételre?", ["Ha éhes vagyok, eszem", "Eszem, mert éhes vagyok", "Éhes vagyok", "Eszem"], 0),
            ("Mit csinál a gép, ha 'Ha 1 > 2, akkor mondd: Szia'?", ["Semmit, mert 1 nem nagyobb mint 2", "Azt mondja: Szia", "Kinevet", "Összezavarodik"], 0),
            ("Hogyan használjuk a feltételt a robotnál?", ["Ha akadály van előtte, forduljon el", "Mondjuk neki: Állj!", "Várunk", "Sehogy"], 0),
            ("Melyik jel jelenti az egyenlőséget?", ["=", ">", "<", "+"], 0),
            ("Mi az a 'logikai művelet'?", ["És, Vagy, Nem", "Összeadás, kivonás", "Rajzolás, festés", "Semmi"], 0),
            ("Melyik blokk hatszög alakú a Scratch-ben?", ["A feltételvizsgálat (ami igaz vagy hamis)", "A mozgás blokk", "A hang blokk", "A rajz blokk"], 0),
            ("Mit jelent a 'Ha érinti a színt'?", ["Akkor történik valami, ha a szereplő egy színhez ér", "Kiszínezi a szereplőt", "Törli a színt", "Semmi"], 0),
            ("Hogyan lesz a játékban 'Game Over'?", ["Egy feltétellel: Ha az élet = 0", "Csak úgy magától", "Ha kikapcsoljuk a gépet", "Várunk"], 0),
            ("Mire jó a 'Várj, amíg ...' blokk?", ["Megállítja a programot egy feltételig", "Aludni küldi a gépet", "Lassítja a netet", "Semmire"], 0),
            ("Lehet-e a feltétel egy kérdés?", ["Igen, pl. Jó-e a válasz?", "Nem, csak szám lehet", "Csak ha tudunk gépelni", "Csak ha van egér"], 0),
            ("Miért fontos a feltétel?", ["Mert ettől lesz 'okos' a program", "Mert a tanár szereti", "Mert szebb lesz a kép", "Semmiért"], 0),
            ("Mit csinál a gép, ha 'Ha 2 = 2, akkor mondd: Hurrá'?", ["Azt mondja: Hurrá", "Nem csinál semmit", "Kikapcsol", "Vár"], 0)
        ]
    elif t == 19: # Képek
        return [
            ("Mi a digitális kép?", ["Számítógépen tárolt fotó vagy rajz", "Egy papírkép", "Egy festmény a falon", "A monitor üvege"], 0),
            ("Mik azok a pixelek?", ["Apró pontok, amikből a kép összeáll", "Kis bogarak", "A billentyűk neve", "Egy játék"], 0),
            ("Melyik fájl egy kép?", ["kep.jpg", "zene.mp3", "szoveg.txt", "film.avi"], 0),
            ("Mire jó a nagyítás (zoom)?", ["Hogy jobban lássuk a részleteket", "Hogy nagyobb legyen a monitor", "Hogy több színt lássunk", "Semmire"], 0),
            ("Hol készülhet digitális fotó?", ["Fényképezőgéppel vagy telefonnal", "A billentyűzettel", "Az egérrel", "A hangszóróval"], 0),
            ("Mi az a 'galéria'?", ["Ahol a képeket tároljuk és nézegetjük", "Egy festőiskola", "A gép hátulja", "Egy játék"], 0),
            ("Hogyan küldhetünk képet a nagyinak?", ["Emailben vagy üzenetben", "Postán (igazi papíron)", "Rágondolunk", "Sehogy"], 0),
            ("Mire jó a képszerkesztő?", ["Képek vágására, színezésére, javítására", "Zenehallgatásra", "Gépelésre", "Semmire"], 0),
            ("Mit jelent a 'vágás' (crop) a képnél?", ["Lehagyjuk a kép széleit", "Ollóval szétvágjuk a monitort", "Töröljük a képet", "Megduplázzuk"], 0),
            ("Lehet-e egy képnek neve?", ["Igen, a fájlnév", "Nem, csak száma", "Csak 'Kép' lehet", "Csak ha felnőtt adja"], 0),
            ("Melyik színmodell használatos a monitoron?", ["RGB (Piros, Zöld, Kék)", "ABC", "123", "Szivárvány"], 0),
            ("Mit jelent a 'felbontás'?", ["Hány pixelből áll a kép (mennyire éles)", "Milyen nehéz a kép", "Milyen színű", "Mikor készült"], 0),
            ("Mi az a 'szelfi'?", ["Magunkról készített fotó", "Egy fajta süti", "A gép neve", "Egy vírus"], 0),
            ("Hogyan mentjük el az internetről a képet?", ["Jobb klikk -> Kép mentése másként", "Bal klikk ötször", "Megrázzuk a monitort", "Várunk"], 0),
            ("Lehet-e rajzolni a gépbe?", ["Igen, pl. a Paint programmal", "Nem, csak fotózni lehet", "Csak ha van tollunk", "Csak papíron"], 0),
            ("Mi az a háttérkép?", ["Az asztalon látható kép", "A falon lévő poszter", "A gép mögötti fal", "Semmi"], 0),
            ("Mi történik, ha túl nagyra nagyítunk egy kis képet?", ["Kockás lesz (pixeles)", "Eltűnik", "Kitisztul", "Megszólal"], 0),
            ("Melyik nem képfájl?", ["dal.mp3", "foto.png", "rajz.bmp", "kep.gif"], 0),
            ("Mi az a 'GIF'?", ["Mozgó kép", "Egy fajta étel", "Egy hang", "Egy kábel"], 0),
            ("Mire jó a vaku?", ["Hogy sötétben is lehessen fotózni", "Hogy világítson a monitor", "Hogy lássuk a billentyűket", "Semmire"], 0),
            ("Hogyan forgatunk el egy képet?", ["A szerkesztőben a forgatás gombbal", "Megfordítjuk a telefont/monitort", "Fejre állunk", "Körbe futunk"], 0),
            ("Mi az a 'szűrő' (filter)?", ["Megváltoztatja a kép hangulatát/színeit", "Kiszűri a vírust", "Letisztítja a monitort", "Semmi"], 0),
            ("Szabad-e bárkiről fotót készíteni?", ["Csak ha megengedi", "Igen, bárkiről", "Csak ha nem látja", "Csak ha kérik"], 0),
            ("Hol tárolja a telefon a képeket?", ["A memóriájában", "A képernyőben", "A gombokban", "Sehol"], 0),
            ("Mire jó a felhő a képeknél?", ["Hogy ne foglalják a helyet a telefonon", "Hogy ne legyenek vizesek", "Hogy esőben is lássuk", "Semmire"], 0)
        ]
    elif t == 20: # Zene és hang
        return [
            ("Hogyan hallgatunk zenét a gépen?", ["Hangszórón vagy fülhallgatón", "A billentyűzeten", "A monitoron", "Ránézéssel"], 0),
            ("Melyik fájl a zene?", ["enek.mp3", "kep.jpg", "szoveg.txt", "rajz.png"], 0),
            ("Mire jó a hangerő gomb?", ["Hogy halkítsuk vagy hangosítsuk a zenét", "Hogy gyorsítsuk a dalt", "Hogy színesebb legyen", "Semmire"], 0),
            ("Hogyan indítjuk el a zenét?", ["A Lejátszás (Play) gombbal", "A Stop gombbal", "Várunk", "Gépelünk"], 0),
            ("Mi a 'Mute' gomb feladata?", ["Azonnal elnémítja a hangot", "Kiszínezi a zenét", "Kikapcsolja a gépet", "Rajzol"], 0),
            ("Hogyan rögzíthetünk hangot?", ["Mikrofonnal", "Hangszóróval", "Egérrel", "Billentyűzettel"], 0),
            ("Mi az a mikrofon?", ["Eszköz, amibe belebeszélünk", "Eszköz, amiből a hang jön", "A monitor része", "Egy kábel"], 0),
            ("Melyik programmal hallgathatunk zenét?", ["Spotify, Youtube, Media Player", "Paint, Word", "Google, Excel", "Lomtár"], 0),
            ("Hogyan állítjuk meg a zenét?", ["A Szünet (Pause) vagy Stop gombbal", "Kihúzzuk a gépet", "Kiabálunk", "Letakarjuk"], 0),
            ("Mi az a fülhallgató előnye?", ["Csak mi halljuk a zenét, nem zavarunk másokat", "Hangosabb mint a hangfal", "Ettől szebb a kép", "Semmi"], 0),
            ("Mit jelent a 'lejátszási lista' (playlist)?", ["Sok zene egymás után téve", "A tanár kedvencei", "A gép hibái", "Egy könyv"], 0),
            ("Mire kell figyelni fülhallgatóval?", ["Ne legyen túl hangos, mert bántja a fülünket", "Hogy ne mozogjunk", "Hogy sötét legyen", "Semmire"], 0),
            ("Mi az az online rádió?", ["Interneten keresztül hallgatható rádió", "Egy igazi doboz", "A gép neve", "Egy játék"], 0),
            ("Hogyan keressünk zenét?", ["Beírjuk az énekes nevét a keresőbe", "Dúdolunk az egérnek", "Várunk", "Sehogy"], 0),
            ("Lehet-e a gépben zenét komponálni?", ["Igen, különleges programokkal", "Nem, csak hallgatni lehet", "Csak ha tudunk gitározni", "Csak ha van kottánk"], 0),
            ("Mi az a 'podcast'?", ["Interneten hallgatható beszélgetés", "Egy fajta süti", "Egy új gép", "Egy zene"], 0),
            ("Melyik ikon a hangerő?", ["Egy kis hangszóró vonalakkal", "Egy szem", "Egy kereszt", "Egy ház"], 0),
            ("Hogyan tekerünk bele a zenébe?", ["A csúszka (idővonal) mozgatásával", "Megforgatjuk a gépet", "Gyorsabban gépelünk", "Sehogy"], 0),
            ("Mit jelent a 'sztereó'?", ["Két irányból (bal és jobb) jön a hang", "Nagyon hangos", "Nagyon halk", "Nagyon régi"], 0),
            ("Mire jó a hangszínszabályzó?", ["A mély és magas hangok állítására", "A zene színének változtatására", "A sebességre", "Semmire"], 0),
            ("Milyen hangot ad a gép, ha hiba van?", ["Pittyen vagy hibaüzenet hangot ad", "Énekel", "Beszel", "Semmilyet"], 0),
            ("Lehet-e a Scratch-ben zenélni?", ["Igen, vannak zenei blokkok", "Nem, az csak mozgásra jó", "Csak ha tudunk zongorázni", "Csak hétfőn"], 0),
            ("Mire jó a Bluetooth hangszóró?", ["Vezeték nélkül hallgathatunk vele zenét", "Ezzel lehet beszélni", "Ettől megy a net", "Dísz"], 0),
            ("Mi az az MP3?", ["Egy népszerű zenei fájlformátum", "Egy autó", "Egy vitamin", "Egy gomb"], 0),
            ("Mire figyeljünk közösségben zenehallgatáskor?", ["Használjunk fülhallgatót", "Hallgassuk minél hangosabban", "Énekeljünk mellé", "Semmire"], 0)
        ]
    elif t == 21: # Video
        return [
            ("Mi a videó?", ["Mozgóképek sorozata hanggal", "Egy sima fotó", "Egy festmény", "Egy könyv"], 0),
            ("Melyik oldalon nézünk legtöbbször videót?", ["YouTube", "Google Maps", "Gmail", "Paint"], 0),
            ("Hogyan indítunk el egy videót?", ["Kattintunk a közepére vagy a Play gombra", "Megfújjuk", "Várunk", "Becsukjuk a szemünk"], 0),
            ("Melyik gombbal állítjuk meg a videót?", ["Szünet (Pause) vagy Stop", "Enter", "Space (sokszor ez is jó)", "Az 1. és 3. is jó"], 3),
            ("Mit jelent a 'teljes képernyő'?", ["A videó betölti az egész monitort", "Nagyobb lesz a monitor", "Kitisztul a kép", "Semmit"], 0),
            ("Hogyan tekerünk előre a videóban?", ["Az idővonalon előrébb kattintunk", "Meglökjük a gépet", "Gyorsabban pislogunk", "Sehogy"], 0),
            ("Mi az a webkamera?", ["Eszköz, amivel videót vehetünk fel", "Egy fajta pók", "A monitor kábele", "Egy játék"], 0),
            ("Szabad-e videóhívást indítani idegennel?", ["Nem, soha", "Igen, bármikor", "Csak ha kedves", "Csak ha vicces"], 0),
            ("Mire jó a 'felirat' a videón?", ["Hogy olvashassuk, amit mondanak", "Hogy rajzolhassunk rá", "Hogy ne halljuk a hangot", "Dísznek"], 0),
            ("Hogyan lesz élesebb a videó?", ["A minőség (HD) beállításával", "Megtöröljük a szemünket", "Nagyítóval", "Várunk"], 0),
            ("Melyik fájl a videó?", ["film.mp4", "kep.png", "hang.mp3", "iras.txt"], 0),
            ("Mire jó a 'tetszik' (like) gomb?", ["Jelezzük, hogy tetszett a videó", "Ezzel mentjük el", "Ezzel töröljük", "Semmire"], 0),
            ("Lehet-e videót vágni?", ["Igen, videószerkesztő programmal", "Nem, a videó egyben marad", "Csak ollóval", "Csak ha van kameránk"], 0),
            ("Mi az a 'vlogger'?", ["Aki videókat készít az internetre", "Egy fajta étel", "Egy gépalkatrész", "Egy állat"], 0),
            ("Mire figyeljünk videónézés közben?", ["A megfelelő távolságra és időre", "Hogy ne mozogjunk", "Hogy csak állva nézzük", "Semmire"], 0),
            ("Mi az a 'streamelés'?", ["Videónézés élőben az interneten", "Víz folyatása a gépre", "Rajzolás", "Alvás"], 0),
            ("Hogyan mentünk el egy videót későbbre?", ["A 'Mentés' vagy 'Később megnézem' gombbal", "Leírjuk a címét", "Rágondolunk", "Sehogy"], 0),
            ("Melyik ikon a beállítások a videónál?", ["Egy kis fogaskerék", "Egy csillag", "Egy ház", "Egy nyíl"], 0),
            ("Lehet-e videót küldeni telefonon?", ["Igen, üzenetben", "Nem, túl nehéz", "Csak ha van zsinór", "Csak ha mozog"], 0),
            ("Mi az a 'TikTok'?", ["Egy rövid videós közösségi oldal", "Egy óra hangja", "Egy fajta süti", "Egy játék"], 0),
            ("Mire jó a Youtube Kids?", ["Biztonságos videók gyerekeknek", "Játékok letöltésére", "Gépelésre", "Semmire"], 0),
            ("Hogyan készítünk saját videót?", ["A kamera vagy telefon felvétel gombjával", "Rajzolunk sok képet", "Beszélünk a géphez", "Sehogy"], 0),
            ("Mi az a 'feliratkozás'?", ["Hogy értesüljünk az új videókról", "Hogy fizessünk érte", "Hogy töröljük az oldalt", "Semmi"], 0),
            ("Mire jó a lassított felvétel?", ["Hogy jobban lássuk a gyors mozgást", "Hogy tovább tartson a film", "Mert elromlott a gép", "Semmire"], 0),
            ("Miért fontos a jó internet a videózáshoz?", ["Hogy ne akadjon meg a kép", "Hogy szebb legyen a színe", "Hogy halljuk a hangot", "Nem fontos"], 0)
        ]
    elif t == 22: # Tablet vs. telefon
        return [
            ("Miben hasonlít a tablet és a telefon?", ["Mindkettő érintőképernyős", "Mindkettő akkora mint egy asztal", "Egyiknek sincs képernyője", "Semmiben"], 0),
            ("Melyik a nagyobb általában?", ["A tablet", "A telefon", "Egyformák", "A telefon fülhallgatója"], 0),
            ("Mire jobb a telefon?", ["Telefonálásra és zsebben hordásra", "Filmnézésre", "Rajzolásra", "Alvásra"], 0),
            ("Mire jobb a tablet?", ["Játékra, rajzolásra, tanulásra", "Hívásokra az utcán", "Főzésre", "Semmire"], 0),
            ("Hogyan irányítjuk ezeket az eszközöket?", ["Az ujjunkkal (érintés)", "Egérrel mindig", "Távirányítóval", "Beszéddel csak"], 0),
            ("Mi az az 'App' vagy alkalmazás?", ["Egy program a mobilon/tableten", "Egy fajta étel", "A gép hangja", "Egy gomb"], 0),
            ("Hogyan töltjük fel ezeket?", ["Töltőkábellel a konnektorból", "Vízzel", "Napsütéssel", "Elemmel"], 0),
            ("Mit jelent az 'érintőképernyő'?", ["A képernyőhöz érve adunk parancsot", "Meg kell simogatni, hogy bekapcsoljon", "Nem szabad hozzáérni", "Csak kesztyűben működik"], 0),
            ("Hogyan zároljuk a képernyőt?", ["A bekapcsoló gombbal vagy kóddal", "Letakarjuk", "Kikapcsoljuk a lámpát", "Várunk"], 0),
            ("Mire jó a 'Repülő üzemmód'?", ["Kikapcsolja a hálózatokat", "Repülni kezd tőle a gép", "Gyorsabb lesz", "Semmire"], 0),
            ("Honnan töltünk le játékot rájuk?", ["App Store vagy Play Áruház", "A konyhából", "A tévéből", "Sehonnan"], 0),
            ("Mi az az 'akkumulátor'?", ["A gépben lévő tároló, ami az áramot adja", "Egy gomb", "A gép agya", "Egy játék"], 0),
            ("Szabad-e vizes kézzel fogni?", ["Nem, elromolhat", "Igen, tiszta lesz", "Csak ha szappanos", "Csak ha engedik"], 0),
            ("Mire jó a védőtok?", ["Megvédi a gépet, ha leesik", "Hogy szebb legyen", "Hogy melegítse", "Semmire"], 0),
            ("Lehet-e rajzolni tableten?", ["Igen, akár speciális tollal is", "Nem, csak egérrel", "Csak ha maszatos az ujjunk", "Sehogy"], 0),
            ("Mi az az 'SMS'?", ["Rövid szöveges üzenet a telefonon", "Egy fajta zene", "Egy játék", "Egy vírus"], 0),
            ("Hogyan készítünk képet velük?", ["A beépített kamerával", "Ránézünk", "Lerajzoljuk a képernyőre", "Sehogy"], 0),
            ("Melyik eszköz fér el a zsebedben?", ["A telefon", "A tablet", "A monitor", "A billentyűzet"], 0),
            ("Mire jó a Wi-Fi ezeknél?", ["Hogy legyen internetünk", "Hogy tudjunk tölteni", "Hogy halljuk a hangot", "Semmire"], 0),
            ("Lehet-e ezeken tanulni?", ["Igen, sok okos alkalmazás van", "Nem, ezek csak játékra valók", "Csak ha nincs iskola", "Csak hétvégén"], 0),
            ("Miért nem szabad túl sokat használni őket?", ["Mert rontja a szemet és elfáradunk", "Mert elkopik a képernyő", "Mert elfogy az internet", "Használhatjuk bármennyit"], 0),
            ("Hogyan hívunk fel valakit?", ["Beírjuk a számát vagy a nevét és a hívás gombra nyomunk", "Kiabálunk a telefonba", "Várunk", "Sehogy"], 0),
            ("Mi az a 'SIM kártya'?", ["A telefonban lévő kicsi kártya a híváshoz", "Egy memória kártya csak", "Egy játék", "Semmi"], 0),
            ("Melyik eszközt tudod egy kézzel fogni?", ["A telefont", "A tabletet", "A laptopot", "Az asztali gépet"], 0),
            ("Mire jó a zseblámpa funkció?", ["A kamera vakujával világít", "A képernyő kifehéredik", "Egy külön lámpa van benne", "Semmire"], 0)
        ]
    elif t == 23: # AI alap
        return [
            ("Mi az az AI (MI)?", ["Mesterséges Intelligencia (okos gép)", "Egy fajta autó", "Egy új játék", "A monitor neve"], 0),
            ("Mire képes az AI?", ["Tanulni, válaszolni, segíteni", "Érezni mint egy ember", "Enni és inni", "Semmire"], 0),
            ("Melyik egy okos gép (AI)?", ["Egy önvezető autó vagy egy beszélgető robot", "Egy sima kalapács", "Egy ceruza", "Egy papírrepülő"], 0),
            ("Hogyan tanul az AI?", ["Sok-sok adatból és példából", "Iskolába jár", "Alszik rajta", "A tanár tanítja"], 0),
            ("Tud-e az AI rajzolni?", ["Igen, ha megkérjük rá", "Nem, nincs keze", "Csak ha mi mozgatjuk az egeret", "Soha"], 0),
            ("Tud-e az AI beszélni?", ["Igen, mint pl. Siri vagy Alexa", "Nem, csak gépelni", "Csak ha felhúzzuk", "Csak énekelni"], 0),
            ("Okosabb az AI az embernél?", ["Vannak dolgok, amikben igen, de nem mindenben", "Igen, mindenben", "Nem, egyáltalán nem", "Csak ha van áram"], 0),
            ("Mire jó az AI a háziban?", ["Segíthet megérteni a feladatot", "Megírja helyettünk és mi pihenünk", "Törli a házi feladatot", "Semmire"], 0),
            ("Lehet-e az AI-nak barátja?", ["Nem, az AI csak egy program", "Igen, egy másik robot", "Igen, egy gyerek", "Csak ha kedves"], 0),
            ("Tud-e az AI verset írni?", ["Igen, ha megadjuk a témát", "Nem, nincs szíve", "Csak ha másol", "Soha"], 0),
            ("Melyik egy AI feladat?", ["Képen felismerni a kutyát", "Megenni egy almát", "Futni a réten", "Aludni"], 0),
            ("Hogyan kérdezünk az AI-tól?", ["Beírjuk a kérdést neki (prompt)", "Ránézünk", "Gondolunk rá", "Sehogy"], 0),
            ("Mindig igazat mond az AI?", ["Nem, néha ő is tévedhet", "Igen, ő mindent tud", "Csak ha szép a neve", "Csak reggel"], 0),
            ("Mi az a 'robot'?", ["Gép, ami feladatokat hajt végre", "Egy ember fém ruhában", "Egy fajta állat", "Semmi"], 0),
            ("Van-e az AI-nak agya?", ["Nincs, csak számítógépes programja", "Igen, egy fém agya", "Igen, mint nekünk", "Csak ha nagy a gép"], 0),
            ("Mire jó az AI az orvosoknak?", ["Segít felismerni a betegségeket", "Helyettük műt mindenkit", "Rajzol nekik", "Semmire"], 0),
            ("Mire jó az AI a játékokban?", ["Okosabbá teszi az ellenfeleket", "Ettől lesz színes", "Ettől megy a net", "Semmire"], 0),
            ("Féljünk-e az AI-tól?", ["Nem, de okosan kell használni", "Igen, elveszi a játékunkat", "Igen, mert okosabb", "Soha"], 0),
            ("Melyik cég készít AI-t?", ["Google, Microsoft, OpenAI", "LEGO, Mattel", "Milka, Kinder", "Semelyik"], 0),
            ("Tud-e az AI zenét szerezni?", ["Igen, a tanult dallamok alapján", "Nem, nincs füle", "Csak ha mi éneklünk", "Soha"], 0),
            ("Mi az a 'chatbot'?", ["Program, amivel beszélgetni lehet", "Egy beszélő cipő", "Egy fajta madár", "Egy játék"], 0),
            ("Mire figyeljünk AI használatakor?", ["Hogy ellenőrizzük, amit mond", "Hogy ne mondjunk neki titkot", "Az 1. és 2. is jó", "Semmire"], 2),
            ("Tud-e az AI focizni?", ["Csak ha robottestet kap", "Igen, bármikor", "Csak a konzolon", "Soha"], 0),
            ("Melyik egy híres AI?", ["ChatGPT", "Paint", "Lomtár", "Egér"], 0),
            ("Mi lesz az AI a jövőben?", ["Még okosabb segítőtárs", "Világuralom", "Eltűnik", "Semmi"], 0)
        ]
    elif t == 24: # Virtualvalóság
        return [
            ("Mi az a VR (Virtual Reality)?", ["Virtuális Valóság (géppel csinált világ)", "Valódi Ruha", "Vörös Robot", "Vége a Rajznak"], 0),
            ("Mi kell a VR kipróbálásához?", ["VR szemüveg", "Napszemüveg", "Búvárszemüveg", "Semmi"], 0),
            ("Mit látsz a VR szemüvegben?", ["Egy teljesen más, gépi világot", "A saját szobádat", "Csak sötétséget", "A tévét"], 0),
            ("Mire jó a VR?", ["Játékra, tanulásra, gyakorlásra", "Csak alvásra", "Csak evésre", "Semmire"], 0),
            ("Mit érezhetsz a VR-ban?", ["Mintha ott lennél a másik világban", "Hogy fázol", "Semmit", "Hogy álmodsz"], 0),
            ("Mi az az AR (Augmented Reality)?", ["Kiterjesztett valóság (digitális dolgok a való világban)", "Autós Rajz", "Alvó Robot", "Semmi"], 0),
            ("Melyik játék használ AR-t?", ["Pokemon GO", "Sakk", "Ki nevet a végén", "Paint"], 0),
            ("Mire kell figyelni VR közben?", ["Hogy ne menjünk neki a falnak/bútornak", "Hogy ne nézzünk", "Hogy ne lélegezzünk", "Semmire"], 0),
            ("Lehet-e a VR-ban repülni?", ["Igen, a játékban bármi lehetséges", "Nem, a gép nem tud repülni", "Csak ha mi is ugrunk", "Soha"], 0),
            ("Mi az a 'kontroller' a VR-ban?", ["Eszköz a kezünkben, amivel irányítunk", "Egy gomb a szemüvegen", "A lábunk", "Egy kábel"], 0),
            ("Tudunk-e VR-ban a tenger mélyén járni?", ["Igen, virtuálisan", "Nem, elázik a gép", "Csak ha tudunk úszni", "Soha"], 0),
            ("Mi történhet, ha túl sokat vagyunk VR-ban?", ["Szédülhetünk vagy elfáradhatunk", "Erősebbek leszünk", "Zöldek leszünk", "Semmi"], 0),
            ("Lehet-e VR-ban tanulni a csillagokról?", ["Igen, mintha köztük járnánk", "Nem, azok túl messze vannak", "Csak távcsővel", "Soha"], 0),
            ("Milyen eszköz a VR szemüveg?", ["Egy kijelző, ami szorosan a szemünk előtt van", "Egy sima üveglap", "Egy kalap", "Egy doboz"], 0),
            ("Hogyan mozogsz a VR világban?", ["A fejed mozgatásával és kontrollerrel", "Csak gépeléssel", "Csak az egérrel", "Várással"], 0),
            ("Mi az a 360 fokos videó?", ["Körbe tudunk nézni benne minden irányba", "Nagyon forró videó", "Nagyon gyors videó", "Semmi"], 0),
            ("Melyik nem VR eszköz?", ["Egy sima füzet", "Oculus Quest", "PlayStation VR", "HTC Vive"], 0),
            ("Mire jó a VR az orvosoknak?", ["Műtéteket gyakorolhatnak rajta", "Ezen néznek filmet", "Ezzel rajzolnak", "Semmire"], 0),
            ("Lehet-e a VR-ban barátokkal találkozni?", ["Igen, virtuális terekben", "Nem, ott egyedül vagyunk", "Csak ha egy szobában vagyunk", "Soha"], 0),
            ("Hogyan néz ki egy VR szemüveg?", ["Mint egy nagy búvárszemüveg", "Mint egy napszemüveg", "Mint egy sapka", "Mint egy táska"], 0),
            ("Mi az a 'haptikus kesztyű'?", ["Kesztyű, amivel 'érezhetjük' a tárgyakat a VR-ban", "Egy meleg kesztyű", "Egy gumikesztyű", "Semmi"], 0),
            ("Mire jó a VR az építészeknek?", ["Bejárhatják a házat, mielőtt felépül", "Ezzel verik be a szöget", "Ezzel festenek", "Semmire"], 0),
            ("Szabad-e egyedül VR-ozni kisgyerekként?", ["Inkább felnőtt felügyelete mellett", "Igen, bármennyit", "Csak a sötétben", "Soha"], 0),
            ("Miért drága a VR?", ["Mert sok okos alkatrész van benne", "Mert nehéz", "Mert színes", "Semmiért"], 0),
            ("Milyen lesz a VR a jövőben?", ["Még valóságosabb és könnyebb", "Eltűnik", "Ugyanolyan marad", "Semmi"], 0)
        ]
    elif t == 25: # Összefoglaló K2
        return [
            ("Melyik gombbal indítjuk el a programokat?", ["Dupla kattintással", "Jobb klikkel", "Görgetéssel", "Várással"], 0),
            ("Hogyan írunk nagybetűt?", ["Shift + betű", "Space + betű", "Enter + betű", "Csak úgy"], 0),
            ("Mi a legfontosabb az interneten?", ["A biztonság és az óvatosság", "Hogy sokat játsszunk", "Hogy mindenre kattintsunk", "Hogy ne nézzük"], 0),
            ("Mire való a mappa?", ["Fájlok rendezett tárolására", "Rajzolásra", "Zenehallgatásra", "Törlésre"], 0),
            ("Melyik programmal rajzolunk?", ["Paint", "Word", "Excel", "Google"], 0),
            ("Mi az a jelszó?", ["Titkos kód, amit senkinek nem adunk meg", "A nevünk", "Egy játék", "A gép színe"], 0),
            ("Mire jó az egér görgője?", ["Oldalak fel-le mozgatására", "Kattintásra", "Rajzolásra", "Törlésre"], 0),
            ("Hogyan mentünk el egy munkát?", ["Fájl -> Mentés", "Kilépés", "Space", "Enter"], 0),
            ("Melyik az internetes kereső?", ["Google", "Paint", "Lomtár", "Asztal"], 0),
            ("Mi az a vírus?", ["Egy rossz program, ami elrontja a gépet", "Egy kis bogár", "A gép fáradtsága", "Egy játék"], 0),
            ("Hogyan másolunk le valamit?", ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"], 0),
            ("Mire jó a Scratch?", ["Programozás tanulására játékosan", "Írásra", "Számolásra", "Semmire"], 0),
            ("Mit jelent a letöltés?", ["Adatokat hozunk a netről a gépre", "Kivisszük a szemetet", "Törlünk mindent", "Rajzolunk"], 0),
            ("Mi az az email?", ["Elektronikus levél", "Egy fajta süti", "Egy játék", "Egy gép"], 0),
            ("Mire kell figyelni gépeléskor?", ["Hogy egyenesen üljünk", "Hogy csak egy kézzel írjunk", "Hogy ne nézzük a képernyőt", "Semmire"], 0),
            ("Mi a kurzor?", ["A kis nyíl vagy villogó vonal", "Egy gomb", "Egy kábel", "Egy kerék"], 0),
            ("Hogyan törlünk egy fájlt?", ["Kijelöljük és Delete", "Letakarjuk", "Megesszük", "Kihúzzuk a gépet"], 0),
            ("Mire jó a pendrive?", ["Fájlok hordozására", "Zenehallgatásra", "Világításra", "Rajzolásra"], 0),
            ("Mi az a Wi-Fi?", ["Vezeték nélküli internet", "Egy gépalkatrész", "Egy játék", "Egy vírus"], 0),
            ("Melyik gomb a visszavonás?", ["Ctrl + Z", "Ctrl + C", "Ctrl + V", "Ctrl + S"], 0),
            ("Mi az az AI?", ["Mesterséges Intelligencia (okos gép)", "Egy autó", "Egy állat", "Semmi"], 0),
            ("Hogyan zárjuk be az ablakot?", ["Piros X a sarokban", "Kikapcsoljuk a gépet", "Becsukjuk a szemünk", "Várunk"], 0),
            ("Mire jó a tablet?", ["Játékra és tanulásra bárhol", "Főzésre", "Kalapácsnak", "Semmire"], 0),
            ("Mi az a VR?", ["Virtuális valóság", "Valódi rajz", "Vörös robot", "Semmi"], 0),
            ("Ügyes voltál idén informatika órán?", ["Igen!", "Nagyon!", "Mindent tudok!", "A 1-3. mind igaz!"], 3)
        ]
    else:
        return [(f"Kérdés {i} a(z) {themes[theme_idx]} témában?", ["Helyes", "Rossz", "Talán", "Nem tudom"], 0) for i in range(1, 26)]

data = {}
for i, theme in enumerate(themes):
    tasks = []
    q_list = get_real_questions(i)
    # 25 MCQ
    for j in range(25):
        q_text, opts, corr = q_list[j % len(q_list)]
        tasks.append({
            "type": "mcq",
            "question": q_text,
            "options": opts,
            "correct": corr
        })
    # 10 Typing
    words = [
        "egér", "ikon", "asztal", "gép", "játék", "tanulás", "kép", "hang", "internet", "ablak",
        "mappa", "fájl", "billentyű", "szóköz", "törlés", "mentés", "másolás", "rajz", "szín", "vonal",
        "kattint", "görget", "nyit", "zár", "keres", "választ", "indít", "állít", "néz", "hallgat"
    ]
    theme_words = [
        ["asztal", "ikon", "lomtár", "tálca", "óra", "menü", "ablak", "mappa", "háttér", "sarok"],
        ["egér", "kattint", "görgő", "dupla", "jobb", "bal", "húz", "pad", "nyíl", "mutat"],
        ["gépel", "betű", "szám", "szóköz", "törlés", "enter", "shift", "vonal", "pont", "vessző"],
        ["mappa", "fájl", "név", "tárol", "nyit", "zár", "új", "ment", "keres", "rendez"],
        ["másol", "beilleszt", "kivág", "szöveg", "kép", "ctrl", "billentyű", "egér", "menü", "gyors"],
        ["fest", "rajz", "szín", "ecset", "vonal", "kör", "négyzet", "radír", "festék", "vászon"],
        ["írás", "szó", "mondat", "betű", "szín", "méret", "vastag", "dőlt", "aláhúzott", "mentés"],
        ["pendrive", "usb", "tároló", "bedug", "kihúz", "biztonság", "fájl", "másol", "hordoz", "kicsi"],
        ["internet", "oldal", "cím", "link", "kattint", "vissza", "előre", "frissít", "ablak", "fül"],
        ["letölt", "kép", "fájl", "mentés", "mappa", "vár", "kész", "internet", "gép", "biztonság"],
        ["levél", "email", "küld", "kap", "cím", "tárgy", "üzenet", "válasz", "csatolmány", "barát"],
        ["keres", "google", "kép", "szó", "találat", "okos", "gyors", "kérdés", "válasz", "internet"],
        ["jelszó", "titok", "biztonság", "véd", "zár", "kód", "erős", "vigyáz", "idegen", "szülő"],
        ["vírus", "beteg", "védelem", "irtó", "rossz", "figyel", "riasztás", "töröl", "vizsgál", "lassú"],
        ["scratch", "cica", "kód", "mozog", "hang", "szín", "jelmez", "háttér", "indít", "stop"],
        ["lépés", "sorrend", "recept", "út", "irány", "előre", "balra", "jobbra", "fordul", "megáll"],
        ["ismétel", "ciklus", "sokszor", "mindig", "újra", "pörög", "folyamatos", "kerék", "ritmus", "visszatér"],
        ["ha", "akkor", "feltétel", "döntés", "választ", "igaz", "hamis", "útelágazás", "kérdés", "logika"],
        ["kép", "fotó", "szín", "fény", "alak", "néz", "lát", "kamera", "album", "galéria"],
        ["zene", "hang", "ritmus", "dob", "ének", "hallgat", "hangfal", "fülhallgató", "hangerő", "néma"],
        ["videó", "film", "mozog", "kamera", "lejátszás", "megáll", "szünet", "tekercs", "mozi", "nézés"],
        ["tablet", "telefon", "érint", "kijelző", "mobil", "alkalmazás", "játék", "hordozható", "töltő", "akku"],
        ["robot", "okos", "gép", "segít", "tanul", "jövő", "beszél", "kérdez", "válaszol", "agy"],
        ["szemüveg", "világ", "másik", "néz", "tér", "szimuláció", "játék", "élmény", "virtuális", "valóság"],
        ["ismétlés", "tudás", "kérdés", "válasz", "ügyes", "kész", "vagyok", "második", "osztály", "informatika"]
    ]
    t_words = theme_words[i] if i < len(theme_words) else words[:10]
    for k in range(10):
        word = t_words[k]
        tasks.append({
            "type": "typing",
            "question": f"Gépeld be: {word}",
            "answer": word
        })
    data[str(i+1)] = {
        "theme": theme,
        "tasks": tasks
    }

output_path = "C:/Users/User/plizio-repo/codekids_k2_hu.json"
# Ensure directory exists (it's the repo root, so it should)
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"File written to {output_path}")
