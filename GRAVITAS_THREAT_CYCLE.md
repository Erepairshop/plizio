# Gravitas Threat Cycle

## Cél

A Gravitasnak kell egy visszatérő, előre látható külső nyomás, ami ritmust ad a játéknak. A játékos ne csak javítson, gyűjtsön és reagáljon mikro-eseményekre, hanem készüljön egy közelgő nagyobb fenyegetésre is.

Ez a rendszer:
- időnyomást ad
- build-próbát ad
- ciklusokra bontja a játékot
- értelmet ad az előkészületnek
- hosszú távon a rossz döntéseket jobban bünteti

## Alapelv

A játék bizonyos időközönként egy nagyobb "hullámot" vagy "fenyegetési ciklust" indít.

Minden ciklus:
1. előre jelzett
2. countdownnal követhető
3. részben felkészüléssel befolyásolható
4. túlélhető
5. maradandó következményeket hagyhat

## Játékos élmény

A user ezt így érzi:

- látja, hogy valami közeleg
- van ideje dönteni, mire költi a kevés erőforrást
- nem tud mindenre felkészülni
- a modulválasztás és a build stratégia számít
- amikor a hullám megérkezik, a rendszer "vizsgázik"
- utána romokból, sérülésekkel vagy előnnyel megy tovább

## Threat Loop

Az alap ciklus:

1. Nyugodtabb építkezési / stabilizálási szakasz
2. Közelgő fenyegetés érzékelése
3. Visszaszámlálás
4. Felkészülési döntések
5. Hullám becsapódása
6. Rövid válságkezelési szakasz
7. Következmények kiértékelése
8. Új ciklus

## Countdown rendszer

A fenyegetésnek mindig legyen látható ideje.

Például:
- `Next breach in 03:20`
- `Incoming distortion wave: 01:45`
- `Void pressure rising: 00:40`

Ez lehet:
- globális HUD elem
- szenzorpanel előrejelzés
- külön figyelmeztető állapot a jobb panelen

## Fenyegetés típusok

Az első verzióban 2-3 típus elég.

### 1. Distortion Wave

Egy tértorzulási hullám érkezik, ami:
- stabilitást üt
- a szenzort és a magkamrát jobban terheli
- növeli a `voidEcho` vagy `shellStrain` értéket

### 2. Impact Storm

Külső roncs- vagy mikrobecsapódási vihar:
- logisztikát
- reaktort
- külső modul integritást támad

### 3. Void Pressure

Lassabban épülő, veszélyesebb fenyegetés:
- ha nem készülsz rá, drift és anomália láncot nyit
- a magkamrát és az activation rendszert is torzíthatja

## Felkészülési lehetőségek

A játékosnak nem közvetlenül a hullám alatt kell mindent eldöntenie, hanem előtte.

Példák:
- extra energia elrakása
- ideiglenes pajzs építése
- egy modult megerősíteni
- szenzor előrejelzést javítani
- logisztikai készletet félretenni
- core chamber lezárása

## Modulok szerepe a ciklusban

### Reactor
- energiát biztosít a védekezéshez
- túlterhelhető, de ennek ára van
- rossz állapotban hullám alatt súlyos másodlagos kár jöhet

### Logistics
- javítóanyag és tartalék biztosítása
- gyors helyreállítás hullám után
- külső védelmi előkészületek

### Sensor
- korábban jelzi a támadást
- pontosabb előrejelzést ad
- egyes fenyegetések erejét csökkentheti

### Core
- az avatar és a központi rendszer védelme
- egyes támadások itt hagynak metafizikai nyomot
- activation / resonance kockázatra is hat

## Mit befolyásoljon a hullám?

A hullám eredménye ne legyen binary.

Lehet:
- enyhe túlélés
- részleges sérülés
- súlyos modulvesztés
- új anomália
- mark növekedés
- rejtett state eltolás

Érintett rendszerek:
- `resources.power`
- `resources.stability`
- modul `integrity`
- `marks`
- `anomalies`
- `entropy`

## Kapcsolat a marks rendszerrel

Ez a rendszer ettől lesz igazán erős:

- a rossz múltbeli döntések növelik a következő hullám veszélyét
- a korábbi sebek nem csak passzív számok
- a hullám ezeket "olvassa"

Példák:
- magas `reactorScar` -> nagyobb power shock
- magas `shellStrain` -> core / resonance sérülékenység
- magas `supplyStress` -> rosszabb javítás hullám után
- magas `voidEcho` -> különleges void események nyílhatnak

## Soft trap kapcsolat

A threat cycle fontos része legyen a csapdaállapotoknak.

Példák:
- ha többször rosszul vészeled át a hullámokat, belépsz egy romló túlélőspirálba
- túl sok javítás helyett mindig túlélésre költesz
- így sosem épülsz fel eléggé az ébredéshez vagy a mélyebb előrehaladáshoz

Ez adja az "örökzóna" korai alapját.

## MVP változat

Az első verzió legyen egyszerű.

### MVP cél

Egyetlen jól működő threat cycle, például `Distortion Wave`.

### MVP működés

- indul egy countdown
- a user látja, mennyi idő van hátra
- van 2-3 felkészülési akció
- lejáratkor a rendszer kiszámítja a hatást
- a hatás függ:
  - energiától
  - stabilitástól
  - modul integritástól
  - markoktól

### MVP output

- alert
- journal
- modul damage
- stability/power veszteség
- esetleg egy új anomaly

## Későbbi bővítés

Ha az alap működik, innen könnyen tovább lehet menni:

- több threat típus
- ál-véletlen, seedelt threat pool
- boss-szerű nagy ciklusok
- specializált modulvédelem
- klán / co-op fenyegetés
- bolygószintű vagy térképszintű események

## Multiplayer kapcsolat

Későbbi co-opnál ez nagyon erős elem lehet.

Példák:
- a csapat közösen készül egy hullámra
- valaki a reaktorért felel
- valaki a logisztikáért
- valaki a szenzorért
- a countdown közös feszültséget ad

Ez jó alap egy későbbi realtime kooperatív loophoz.

## UI ötletek

- felső countdown sáv
- szenzor warning panel
- modulokon pirosodó threat highlight
- hullám előtt ambient hangulatváltás
- becsapódáskor rövid scene effektek

## Miért fontos

Ez a rendszer adja meg azt, ami most még hiányzik:

- közelgő nyomás
- ritmus
- build-teszt
- túlélési feszültség

Nélküle a Gravitas könnyen túl statikus menedzsmentnek hatna.
Ezzel viszont valódi stratégiai túlélőjátékká kezd válni.
