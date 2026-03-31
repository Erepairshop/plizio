# Gravitas UI Plan

## Cél

A Gravitas ne hosszú, scrollozós dashboard legyen, hanem valódi, full-screen játékélmény.

Az első nagy Gravitas körnél a cél:

- kevés scroll
- gyorsan elérhető akciók
- átlátható station view
- erős vizuális visszajelzés
- mobilon is kényelmes kezelés

## Alapelv

A játékos ne egy hosszú oldalt nézzen sok szöveggel, hanem egy központi játékteret, amely köré a UI rétegek szerveződnek.

Ez azt jelenti:

- a fő játéktér mindig látható
- a legfontosabb állapotok röviden jelennek meg
- a részletek csak akkor nyílnak meg, ha a játékos kéri
- a képernyő ne legyen tele egyszerre minden információval

## Fő layout

A jó Gravitas layout három rétegből áll:

1. központi station view
2. kompakt HUD
3. kontextusos panelek / overlayek

### 1. Központi station view

Ez a játék magja:

- itt látszik az állomás
- modulok
- threat vizuálok
- anomáliák
- activation / pulse / energiaáramlás

Ez legyen a legfontosabb, legnagyobb terület.

### 2. Kompakt HUD

A HUD ne legyen túl nagy.

Csak a legfontosabb elemek legyenek állandóan láthatók:

- power
- materials
- stability
- activation
- threat countdown
- esetleg stars / reward számláló később

Ez rövid, ikon- vagy chip-alapú legyen.

### 3. Kontextusos panelek

A részletesebb információ ne állandóan legyen kint.

Inkábbl:

- ikonra tap
- modulra tap
- alertre tap
- bottom sheet
- side drawer
- modal panel

## Mobil-first elvek

Mobilon különösen fontos:

- ne kelljen sokat scrollozni
- a fő akciók egy vagy két érintésre legyenek
- a text mennyisége rövid maradjon
- a fenyegetés / veszély / következő feladat gyorsan érthető legyen

Ezért:

- a fő akciók mehetnek egy alsó action barba vagy slide-up action deckbe
- a részletes napló, marks, anomaly lista külön ikonból nyíljon
- a modul adatok modulra tap után jelenjenek meg

## Fixen látható elemek

Mindig látszódjon:

- station view
- threat countdown
- a legfontosabb 3-5 resource
- aktuális fókusz vagy selected module
- egy rövid "mi a következő fontos dolog" jelzés

Ne látszódjon mindig teljes méretben:

- teljes journal
- teljes event history
- minden modul részlete
- minden reward magyarázat
- hosszú leírások

## Scroll minimalizálás

A Gravitas hosszú távon akkor jó, ha az első képernyőn szinte minden fontos történik.

A scroll maximum:

- ritka secondary panelben
- archívumban
- journal/history nézetben
- shop vagy reward listában

A fő gameplay ne scrollal menjen.

## Action rendszer UI-ja

Az action deck legyen:

- modulfüggő
- rövid
- kontextusos
- jól tapelhető

Ne 10-12 gomb legyen egyszerre kint.

Inkább:

- 2-4 fő akció
- esetleg egy "more" vagy extra ikon
- secondary opciók drawerben

## Szöveg használat

A Gravitasban kell szöveg, de csak ott, ahol valóban segít.

A szabály:

- rövid cím
- rövid leírás
- erős vizuális jel
- hosszabb lore csak külön megnyitva

Ne legyen minden blokkban sok magyarázó szöveg.

## Ikonok és rejtett részletek

Az ikonok fontosak lesznek:

- anomalies
- marks
- threat prep
- modules
- journal
- rewards
- shop

Ezekre kattintva vagy tapelve nyílhatnak:

- mini panelek
- overlays
- bottom sheets
- modalok

Ez tisztább, mint minden részletet egyszerre kitenni.

## Threat UI

A threat cycle különösen vizuális legyen.

Mindig látszódjon:

- countdown
- fenyegetés típusa
- felkészülési állapot
- aktív védelem

Becsapódás előtt:

- erősödő vizuális figyelmeztetés
- színváltás
- remegés
- highlight

Utána:

- rövid impact state
- sérülésvisszajelzés
- recovery prioritás

## Activation UI

Az activation / awakening ne egy hosszú doboz legyen a flow közepén.

Inkább:

- hangsúlyos központi jelenet
- overlay vagy special mode
- rövid, jól olvasható status
- közvetlen interakció

## Module UI

Ha a játékos kiválaszt egy modult:

- rögtön lássa:
  - állapot
  - veszély
  - fő szerep
  - 2-4 releváns akció

Ne kelljen külön hosszú listákban keresgélnie.

## Journal és history

Ezek fontosak, de nem elsődleges gameplay rétegek.

Ezért:

- legyenek külön nézetben
- ikonból nyíljanak
- főképernyőn legfeljebb 1-2 legfrissebb elem látszódjon

## Reward / shop / stars

Később ezek is in-game legyenek elérhetők.

De:

- ne foglalják el a fő gameplay helyét
- legyen külön ikon vagy panel
- csak akkor nyíljanak ki, ha kell

## Asztali és mobil különbség

Desktopon lehet több egyszerre látható réteg.

Mobilon:

- sokkal jobban kell sűríteni
- a panelek inkább egymás fölé nyíljanak
- a station view maradjon központban
- az actionök alulról jöjjenek

## MVP UI irány

Az első komoly UI-polish körben a cél:

- a Gravitas főképernyője ne legyen hosszú oldal
- a station view kapja a legtöbb helyet
- a HUD legyen kompaktabb
- a journal / marks / anomalies / extra információ külön ikonból nyíljon
- a modul actionök kontextusos, gyorsan elérhető panelek legyenek

## Hosszú távú irány

Később a Gravitas UI lehet:

- teljesen játékos full-screen shell
- több overlayjel
- slide-up modul- és event-panel
- ikonvezérelt meta-réteg
- minimális scroll

## Lényeg

A Gravitas UI-nak nem app-oldalnak, hanem játéknak kell hatnia.

Ezért:

- központi játéktér
- rövid HUD
- kevés állandó szöveg
- sok kontextusos panel
- mobilbarát, kevés scrollos szerkezet

Ez különösen fontos ahhoz, hogy a Gravitas ne csak mély rendszer legyen, hanem élvezhető és gyorsan olvasható játék is.
