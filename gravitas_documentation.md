# Gravitas - Játék Tervezési és Architektúra Dokumentáció

Ez a dokumentum a **Gravitas** című taktikai sci-fi túlélő és bázisépítő játék teljes, részletes áttekintése. Készült a jövőbeli tervezések és AI kollégák (vagy fejlesztők) számára, hogy pontos képet adjon a játék jelenlegi állapotáról, az egymásba fonódó rendszerekről, és a kódbázis struktúrájáról.

## 1. Alapvető Filozófia és Játékmenet
A játék a szigorú elveket követi:
1. **Semmi sem lehet egyszerű**: A játékos ne tanulja meg 1 nap alatt. Minden rendszer többhetes mélységgel kell hogy bírjon.
2. **Minden összefügg**: Az egyes alrendszerek (modulok, nyersanyagok, kutatások, kémkedés) hatással vannak egymásra (pl. az `economy.ts` központi vezérlő).
3. **A játékos felelőssége**: A rendszer nem dönt, a játékos viseli a következményeket (pl. késleltetett Dilemma hatások).
4. **Singleplayer first, de multi-ready architektúra**: Minden számítás a state-ben történik determinisztikusan (lehetőleg).
5. **Nem pay-to-win**: A tudás és a taktika számít.
6. **Narratív fókusz**: Nyers statisztikák helyett lore-ba ágyazott leírások és "Tanulság" (Lesson) szövegek minden eseménynél 4 nyelven (HU, EN, DE, RO).

## 2. A Core State Rendszer (`StarholdState`)
A játék egy masszív, egyetlen JSON-ba szerializálható Redux-szerű state objektum köré épül, amit a `createInitialState.ts` generál és a `persistence.ts` ment le.
- **Minden alrendszernek van egy szelete** a fő state-en belül (pl. `state.tradeSystem`, `state.espionage`, `state.research`).
- **Idő (Tick) Alapú**: A szimuláció másodpercenként ("tick") fut (`tick.ts`), amely sorra hívja az összes alrendszer frissítő függvényét (pl. `tickTradeSystem`, `tickEspionage`).

## 3. Nyersanyagok és Gazdaság (`economy.ts`)
Minden ár, szorzó, és időtartam itt található. Ez a játék egyensúlyának központja.
- **Nyersanyagok (Materials)**: Lumen Dust (Gyakori), Verdant Crystals (Gyakori), Aether Ore (Közepes), Ember Shards (Ritka), Sable Alloy (Ritka), Rift Stone (Nagyon Ritka). 
- **Erőforrások (Resources)**: Bázis túléléséhez szükségesek (Power, Supply, Stability, Hull, Shield, Morale).

## 4. Alrendszerek Részletezve

### 4.1. Modulok és Építkezés (Base Building)
- **Modulok**: Reactor, Logistics, Core, Sensor, Warroom, Repairbay.
- A `Core` a kapuőr: egyetlen modul sem lehet magasabb szintű nála. Max szint: 25.
- Fejlesztésekhez (Upgrade) nyersanyagok kellenek, a költség dinamikus görbét követ az `economy.ts`-ben lévő profilok alapján.
- Ha egy modul lemarad a Core-tól (pl. -3 szint), veszélyzónába kerül.

### 4.2. Harcrendszer és Helyőrség (`WarRoom` & `Battle Engine`)
- **Warroom**: Katonák (Egységek) kiképzése. Szintfüggő feloldások (pl. Wraith, Sentinel, Titan).
- **Csata Engine (`resolveBattle`)**: Kiszámolja a harcot a játékos serege (`BattleArmy`) és az ellenség (`EnemyBuilding`) között.
- **Részletes Breakdown**: A harc végén részletes Stat Breakdown jön létre (Base érték, Tactic szorzó, Troop Ratio büntetés, Avatar bónusz, Synergy).
- **Veszteségek és Kórház (`RepairBay`)**: A halott (Lost) és sebesült (Wounded) egységek szétválnak. A sebesültek a RepairBay-be kerülnek, ahol nyersanyagért és időért cserébe gyógyíthatók (a Logistics szint csökkenti a költséget).

### 4.3. Kémkedés és Felderítés (`Espionage`)
- **Küldetéstípusok**: Passive Scan, Deep Scan, Infiltrate, Sabotage, Counterfeit Intel, Decoy Deployment.
- **Operatív Szerepek**: Scout, Infiltrator, Analyst, Saboteur (mindegyik más kockázat/haszon szorzóval bír).
- **Intel Depth**: Az infószerzés 4 rétegű (Alap statok -> Állapot -> Rejtett Traitek -> Loot táblák és gyengepontok).
- **Kockázat (Exposure Risk)**: Ha a kockázat eléri a 100%-ot, a kémek lebuknak. Ez Reputáció veszteséget és ügynökvesztést von maga után. Védhető "Csalétek" (Decoy) használatával.

### 4.4. Kereskedelem (`Trade System`)
- **Dinamikus Piac (Market State)**: Cheap, Normal, Inflated, Black Market állapotok (Galaxis ciklustól függően változik).
- **Útvonalak és Partnerek**: Egy ajánlat lehet `local` vagy `black_route`, a partner lehet `loyal_trader` vagy `smuggler`. Ezek befolyásolják a kockázatot és az árakat.
- **Alku (Negotiation)**: "Bargain" (kis esély, kis bukás) vagy "Hardball" (nagy engedmény, de sértődés veszélye).
- **Kockázat utazás közben (In Transit)**: A helyi üzleteken kívül minden áru úton van. Közben lehet, hogy a csempészt lekapcsolják (Seized), vagy késik az áru (Delayed).

### 4.5. Mélyűri Expedíciók (`Expeditions`)
- **Útvonal Profilok (Route)**: Safe, Balanced, Risky, Deep Space, Black Route (A fekete útvonal 5x rizikó, de 8x zsákmány).
- **Legénység Profilok (Crew)**: A beküldött egységek alapján (pl. 50%+ felderítő = `scout_heavy`). Befolyásolják az események kimenetelét.
- **Események (Events)**: Discovery, Reward, Ambush, Signal Trace, Lost Route, Disaster. Egy `assault_heavy` csapat például sérülés nélkül is túlélhet egy Ambusht.
- **Visszahívás (Emergency Recall)**: Azonnal megszakítható, de a hazaút 50%-kal veszélyesebb lesz, és a zsákmány (főleg a ritka) jelentősen lecsökken.

### 4.6. Kutatás és Fejlesztés (`Research System`)
- **Szinergikus Hálózat (Tech Tree)**: Nem lineáris. 6 ág (Weapons, Shields, Logistics, Sensors, Void, Core), összesen 22 projekt.
- **Előfeltételek (Prerequisites)**: Modul szintekhez, Frakció reputációhoz, vagy korábbi kutatásokhoz kötöttek.
- **Globális Hatások (Engine bekötések)**: A kutatások bele vannak drótozva a játékba. A "Logistics" kutatás például olcsóbbá teszi a RepairBay-t, a "Shields" csökkenti a harci veszteségeket, a "Sensors" segíti a kémkedést.

### 4.7. Heti Küldetés (Weekly Mission)
- **Több Hullámos (3 Wave) Túlélés**: Egy védelmi játékmód. A játékos a helyőrségből (Garrison) állít össze egy csapatot.
- **Hullám (Wave) Report**: Minden hullámról külön jelentés készül, és a halottak/sebesültek permanensen levonódnak a következő hullám előtt.
- **Reward Breakdown**: A jutalom (Loot és Reputáció) attól függ, hány hullámot élt túl a csapat. Ha mind a 3 megvan, megnő az esély a Ritka Tárgyra (Rare Drop).

### 4.8. Dilemma és Döntési Rendszer (`Dilemma System`)
- **Moduláris és Láncolt Események**: A döntések nem csak azonnali hatást váltanak ki (pl. +10 Power, -2 Reputáció), hanem "Memóriába" is kerülnek.
- **Delayed Effects (Késleltetett Hatások)**: Egy döntés napokkal később is triggerelhet egy újabb dilemmát (pl. Feketepiaci Hack -> 5 nap múlva Rendszerösszeomlás).
- **Modul Célzás**: Képes konkrét modulokat lekapcsolni (Offline) vagy azok integritását növelni/csökkenteni.

### 4.9. Galaxis és Ciklusok (`Galaxy Cycles` & `Factions`)
- Frakciók: Korgath, Velari, Drex, Synthoid, Noma. (Mind saját stílussal és harci értékekkel `factions.ts`).
- Frakció Reputáció (Tiers): Hostile, Tense, Neutral, Friendly, Allied. Befolyásolja az árakat és a portyák (Raid) sűrűségét.
- Ciklusok: Calm (Nyugodt), Storm (Vihar), War (Háború), Trade (Kereskedelem). Meghatározza a játék ritmusát és a piaci árakat.

## Összegzés a Fejlesztéshez
A Gravitas minden rendszere szorosan integrált. Ha új funkciót terveztek:
1. **Types (`types.ts`)**: Mindig itt kezdődik a fejlesztés (State, Command, System Types bővítése).
2. **Economy (`economy.ts`)**: Semmilyen költséget vagy alapszorzót ne égessetek a logikába, mindennek itt a helye.
3. **Engine (`engine.ts`)**: Itt történik az adott rendszer számolása (tick, resolve). Lehetőleg kerülni kell a túlzott randomitást (`Math.random()`), a harcoknál például Seeded RNG működik a visszajátszhatóságért.
4. **UI Components**: A Next.js (React) komponensek a Framer Motion-t használják animációkra, és mind a 4 nyelven (localize) ki kell írniuk a "Lesson" (Tanulság) és a "Verdict" (Döntés/Értékelés) szövegeket, hogy a játékos megértse a mögöttes matematikát.