# STARHOLD WORLD STATES

> Cél: rögzíteni azt a hosszú távú szerkezeti logikát, amitől a játék nem egyszerű run-based co-op játék lesz, hanem mély, részben végtelen, részben rejtett világállapotokra épülő rendszer.

## 1. Alapelv

A játék ne klasszikus győzelem/vereség sémában működjön.

Hanem:

- a világ különböző állapotok között mozog
- a játékosok döntései lassan vagy hirtelen átterelik a rendszert más state-ekbe
- nem minden state jó
- nem minden rossz state látványosan bukás
- vannak csapdastate-ek
- vannak loop state-ek
- van nagyon ritka valódi végjáték

Tehát:

- a legtöbb sessionnek nincs “igazi vége”
- a legtöbb játékos sokáig csak a felsőbb rétegeit látja a rendszernek
- a mélyebb állapotok felfedezhetők, de nem garantáltak

## 2. Miért fontos ez

Ez adja meg azt az érzést, hogy:

- a játék titokzatos
- a stratégia nem pusztán optimalizálás
- rossz döntések hosszú árnyékot vetnek
- a világ nem lineáris
- a játékosok történeteket fognak mesélni egymásnak róla

Például:

- “megint bejutottunk az örök hurokba”
- “ez a build kívülről erősnek tűnt, de később csapda lett”
- “egy furcsa döntés miatt új állapot nyílt meg”
- “valaki egyszer tényleg eljutott a valódi végjátékig”

## 3. A világ state machine szemlélete

A világot úgy kell tervezni, mint egy több rétegű state machine-t.

Nem bináris állapotokkal:

- win
- lose

hanem például ilyenekkel:

- stable growth
- stress cycle
- scarcity spiral
- anomaly lock
- mirror loop
- false prosperity
- collapse drift
- awakened sector
- terminal corridor
- hidden ending path

## 4. Fő állapottípusok

### 4.1 Normál fejlődési állapotok

Ezekben a játékos még “jól játszónak” érzi magát.

Példák:

- erőforrásbőség
- kontrollált növekedés
- kutatási fejlődés
- jól menedzselt kockázat

Jellemző:

- pozitív visszacsatolás
- de rejtetten már előkészíthetnek problémákat

### 4.2 Instabil átmeneti állapotok

Ezek a köztes zónák.

Példák:

- növekvő terhelés
- rejtett rendszerfáradás
- kockázatos specializáció
- túl sok külső függés

Jellemző:

- kívülről még kezelhetőnek tűnnek
- de rossz következő döntés mélyebb bajba tol

### 4.3 Csapdaállapotok

Ezek kulcsfontosságúak.

A játékos nem bukik el rögtön, hanem:

- olyan pályára áll, ahonnan nagyon nehéz kijönni
- a buildje hosszú távon önmaga ellen fordul
- a rendszer stabilnak látszik, de rossz irányba záródott

Példák:

- túlcentralizált energiafüggés
- kutatásra épült, de anyagilag gyenge állapot
- defense-heavy, de fejlődésképtelen állapot
- túl sok rövid távú javítás, kevés valódi helyreállítás

Ezek attól jók, hogy:

- nem azonnal egyértelműek
- a játékos csak később érzi meg a hibát

## 5. Örökzónák

Ez a te ötleted egyik legerősebb része.

Az örökzóna olyan állapot, ahol:

- a játék nem ér véget
- a rendszer ismétli önmagát
- a játékos azt érezheti, hogy “még életben van”
- de valójában nem halad közelebb semmilyen valódi áttöréshez

Ez lehet:

- resource neutrality csapda
- folyamatos javítási kör
- újratermelődő fenyegetés
- önfenntartó, de stagnáló bázis
- egy anomália által bezárt ciklus

Fontos:

- az örökzóna nem full punishment legyen
- hanem egyfajta “hamis túlélés”

Ez pszichológiailag erős, mert:

- a játékos úgy érzi, még mindig játszik
- de a rendszer valójában elvette a jövőjét

## 6. Hamis sikerállapotok

Nagyon fontos külön réteg.

Ez az állapot:

- jutalmazónak látszik
- erősnek látszik
- de hosszú távon zsákutca

Példák:

- túl gyors technológiai ugrás
- rövid távon hatékony, de meta szinten romboló erőforrás-konverzió
- magas stabilitás, de csökkent alkalmazkodóképesség
- veszélyesen “steril” build

Ez különösen jó, mert:

- a játékos nem azonnal tanulja meg
- a közösség fogja felfedezni és vitatni

## 7. Összeomlási állapotok

Természetesen kell valódi összeomlás is.

De ez se mindig instant game over legyen.

Lehet:

- partial collapse
- crippled state
- abandoned sector
- dead module chain
- fractured colony

Ezek után:

- néha még vissza lehet jönni
- néha már csak méltósággal túlélni lehet
- néha átcsúszik a játék egy egészen más túlélési módba

## 8. Rejtett állapotok

Ez adhat igazi kultjelleget.

Vannak state-ek, amik:

- nem nyilvánvalóak
- ritka kombinációval nyílnak
- akár rossznak tűnő döntéssorral érhetők el

Példák:

- egy bizonyos anomáliasor aktiválása
- szokatlanul sokáig fenntartott bizonyos instabil állapot
- egy ritka sacrifice-szerű döntés
- egy látszólag rossz, de valójában kulcsfontosságú technológiai ág

Itt kezdődik a valódi “meta-misztérium”.

## 9. True ending

A true ending legyen:

- nagyon ritka
- nem kötelező
- nem lineáris célként kommunikált
- inkább felfedezés, mint kampányzárás

Ne úgy működjön, hogy:

- “ha sokáig játszol, biztosan eléred”

Hanem úgy:

- csak nagyon különleges állapotlánc vezet el oda
- a legtöbb build nem jut el addig
- lehet, hogy a legjobb optimalizált buildek sem

Ezért a true ending:

- legyen részben rejtett
- részben közösségi mítosz

## 10. A világállapotok rétegei

Ezt több szinten kell elképzelni.

### 10.1 Felszíni state

Ezt látja a játékos rögtön:

- energia
- stabilitás
- modulok
- aktív veszélyek

### 10.2 Rendszerszintű state

Ez már mélyebb:

- a build milyen irányba torzult
- mennyire rugalmas a rendszer
- mennyire törékeny a hálózat
- mennyire függ egyetlen modultól

### 10.3 Rejtett state

Ez csak közvetve érződik:

- anomália rezonancia
- döntési múlt
- túlhasználati nyom
- ritka eseményekhez vezető rejtett progress

Ez azért fontos, mert ettől lesz a játék több, mint sima resource sim.

## 11. Döntések súlya

A játék csak akkor lesz igazán mély, ha a döntések nem csak rövid távra számítanak.

Háromféle döntés kell:

### Rövid távú

- mit javítasz
- hova küldesz energiát
- mire reagálsz azonnal

### Középtávú

- melyik modult fejleszted
- milyen kutatást nyitsz
- melyik kockázatot vállalod

### Hosszú távú

- milyen irányba torzítod a világodat
- milyen state-ekhez kerülsz közelebb
- milyen ending lehetőségeket nyitsz vagy zársz le

## 12. Multiplayer hatás a world state-ekre

Co-opban ettől lesz igazán különleges:

- nemcsak a rendszer állapota számít
- hanem az együttműködés minősége is

Lehetséges jelenségek:

- egy rossz játékos túl korán csapdastate-be viszi a run-t
- egy kreatív döntés ritka állapotot nyit meg
- a team a túlélést választja, és örökzónába szorul
- a team vállalja a kockázatot, és esélyt kap a mélyebb áttörésre

Ez nagyon erős design alap, mert:

- a multiban nem csak skill, hanem stratégiai kultúra is számít

## 13. Mit jelent ez MVP-szinten

MVP-ben még nem kell teljesen minden réteg.

De az architektúrának tudnia kell kezelni:

- state transitions
- hidden flags
- long tail consequences
- loop states

Tehát már az első verzió se csak:

- resource bar + random events

hanem:

- struktúrált világállapot-rendszer

## 14. MVP-ben minimálisan szükséges state-ek

Az első verzióhoz már elég lehet 5-6 markáns állapot:

- stable growth
- strained equilibrium
- scarcity spiral
- false stability
- anomaly drift
- collapse edge

És legalább 1 korai örökzóna-jellegű állapot:

- “maintenance loop”

Ez már adhatja az első “beragadtunk valamibe” érzést.

## 15. Hosszú távú rendszerstratégia

A teljes játék később így bővülhet:

### Fázis 1

- alap state-ek
- 1-2 csapda
- 1 loop

### Fázis 2

- több hamis sikerút
- rejtett anomáliautak

### Fázis 3

- ritka meta állapotok
- több true-ending-szerű végjáték

### Fázis 4

- közösségi legendaszintű rejtett útvonalak
- co-op only unlockable deep states

## 16. Következő fontos doksi

Ha ezt az irányt vállaljuk, a következő dokumentum szerintem ez legyen:

- `STARHOLD_STATE_MODEL.md`

Abban konkrétan ezt kell majd leírni:

- milyen state változók vannak
- milyen transition szabályok kellenek
- mi látható a játékosnak
- mi rejtett
- mi okozhat loopot
- mi közelít a true endinghez

## 17. Lényegi következtetés

Ez a játék attól lesz igazán más, hogy:

- nem egy tiszta nyerésre optimalizált rendszer
- nem egy sima survival loop
- nem egy egyszerű city builder

Hanem egy olyan világ:

- amely visszanéz a játékos döntéseire
- amely csapdába ejthet
- amely stagnálhat
- amely félrevezethet
- és amely csak nagyon ritkán engedi meg a valódi áttörést

Ez pontosan az a szerkezeti mélység, amitől a játék hosszú távon is beszédtéma és megszállottság tárgya lehet.
