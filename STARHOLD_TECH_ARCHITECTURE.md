# STARHOLD TECH ARCHITECTURE

> Cél: meghatározni a flagship játék első technikai architektúráját úgy, hogy az MVP gyorsan elindítható legyen, de a rendszer később is bővíthető maradjon.

## 1. Fő elv

Starholdot nem egyetlen technológiára kell ráerőltetni.

A jó architektúra:

- `React` az app- és meta-UI-ra
- `Phaser` az aktív játéktérre és rövid realtime jelenetekre
- `sim core` a világlogikára

Ez a háromrétegű modell adja a legjobb alapot.

## 2. Mi miért kell

### React

Feladata:

- HUD
- panelek
- inventory
- modul UI
- alerts
- lobby
- session summary
- meta progression
- avatar felületek

React azért jó ide:

- a Plizio már eleve app-jellegű rendszer
- sok komplex UI kell
- a multiplayer és profil réteg is inkább app logika

### Phaser

Feladata:

- játéktér vizuális megjelenítése
- aktív jelenetek
- rövid akciószakaszok
- vizuális effektek
- mozgó elemek
- interaktív bázisnézet

Phaser azért jó ide:

- gyors 2D iteráció
- kényelmes game loop
- jobban kezeli a realtime jeleneteket, mint a sima React UI

### Sim core

Feladata:

- resource számolás
- modulállapotok
- event queue
- világállapot-váltások
- command feldolgozás
- rejtett state logika
- hosszú távú következmények

Ez a játék valódi agya.

## 3. Rétegek közti kapcsolat

### 3.1 Sim core -> UI

A sim core állapotot ad:

- power
- stability
- materials
- science
- module status
- active events

Ezt React és Phaser is olvashatja.

### 3.2 UI -> Sim core

A játékos nem közvetlen állapotot ír.

Hanem parancsokat ad:

- `repair_module`
- `reroute_power`
- `start_research`
- `build_upgrade`
- `resolve_event`

### 3.3 Phaser -> Sim core

Az aktív akciószakaszok is parancsokra fordulnak:

- sikeres containment
- sikertelen reroute
- partial stabilize

## 4. Első technikai forma

Az első verzióhoz nem kell azonnal komplex backend-szimuláció.

### MVP irány

- kliensoldali sim core
- egyetlen shared state store
- React shell
- Phaser scene container

### Miért jó

- gyorsabban építhető vertical slice
- könnyebb debugolni
- nem kell rögtön teljes realtime szerver

### Később

Ugyanez a sim core átvihető:

- shared room logicba
- realtime backendbe
- authoritative host modellbe

## 5. Javasolt mappastruktúra

Az induló szerkezet legyen tiszta.

### App réteg

- `app/starhold/page.tsx`
- `app/starhold/layout.tsx`

### React komponensek

- `components/starhold/`
  - `StarholdHUD.tsx`
  - `StarholdTopBar.tsx`
  - `StarholdModulePanel.tsx`
  - `StarholdAlerts.tsx`
  - `StarholdRunSummary.tsx`

### Phaser réteg

- `lib/starhold/phaser/`
  - `StarholdGame.ts`
  - `StarholdBaseScene.ts`
  - `StarholdEmergencyScene.ts`
  - `StarholdRenderBridge.ts`

### Sim core

- `lib/starhold/sim/`
  - `types.ts`
  - `createInitialState.ts`
  - `tick.ts`
  - `commands.ts`
  - `reducers.ts`
  - `events.ts`
  - `transitions.ts`
  - `hiddenState.ts`

### Meta / progression

- `lib/starhold/meta/`
  - `perks.ts`
  - `unlocks.ts`
  - `crossGame.ts`

## 6. Sim core alapmodell

### 6.1 State objektum

Az első state legyen laposabb, mint később.

Példa:

```ts
interface StarholdState {
  tick: number;
  phase: "boot" | "active" | "crisis" | "collapsed";
  resources: {
    power: number;
    materials: number;
    science: number;
    stability: number;
    crewLoad: number;
  };
  modules: Record<string, ModuleState>;
  activeEvents: WorldEvent[];
  hidden: HiddenState;
}
```

### 6.2 Command modell

Példa:

```ts
type StarholdCommand =
  | { type: "repair_module"; moduleId: string }
  | { type: "reroute_power"; from: string; to: string; amount: number }
  | { type: "start_research"; researchId: string }
  | { type: "resolve_emergency"; eventId: string; mode: string };
```

### 6.3 Tick rendszer

Az MVP-ben elég egy egyszerű tick loop.

Példa:

- 1 tick = 1 másodperc

Minden tick:

- resource update
- module decay / regen
- event progression
- hidden state update
- state transition check

## 7. React state kezelés

Ne legyen szétszórva random `useState`-ekbe az egész világ.

Javaslat:

- egy központi `StarholdStore`
- vagy reduceres state container

Példa:

- `useReducer`
- vagy később Zustand-szerű store

Az MVP-re elég:

- `useReducer` + context

## 8. Phaser integráció

### 8.1 Ne a Phaser legyen a fő állapattároló

Ez kulcsfontosságú.

A Phaser:

- renderel
- inputot kezel
- scene-eket futtat

De a világ állapotát ne ott tároljuk fő forrásként.

### 8.2 Bridge réteg

Kell egy kis összekötő réteg:

- React -> Phaser update
- Phaser -> sim core command

Ez lehet pl.:

- `StarholdRenderBridge`

Feladata:

- a Reactből kapott state-et átfordítja scene inputtá
- a scene eseményeit commanddá alakítja

## 9. Multiplayer jövőkép

### MVP-ben

Még lehet singleplayer/prototype first.

De az architektúra maradjon multiplayer-kompatibilis.

Ezért:

- command alapú működés
- világállapot külön rétegben
- UI és render nincs összekeverve a szabályokkal

### Később

Lehetséges modellek:

#### A. Host-authoritative co-op

- egyik kliens vagy room owner authoritative
- gyorsabb indulás
- gyengébb hosszú távú alap

#### B. Server-authoritative room

- legjobb végső irány
- shared room state
- minden kliens commandot küld

Ajánlott hosszú távon:

- B

Ajánlott vertical slice-ra:

- először local authoritative

## 10. Hidden state kezelés

Ez a játék egyik legfontosabb mélyrétege.

Ne React local state-ben legyen összevissza.

Külön objektum kell hozzá:

```ts
interface HiddenState {
  anomalyPressure: number;
  systemFatigue: number;
  loopRisk: number;
  endingProgress: number;
  falseProsperity: number;
}
```

Ez kezeli a:

- csapdaállapotokat
- örökzónákat
- rejtett ending-utakat

## 11. Event rendszer

Az események ne kézzel if-elve legyenek szétszórva.

Kell egy önálló event modell:

```ts
interface WorldEvent {
  id: string;
  kind: string;
  severity: number;
  ttl: number;
  source?: string;
  flags?: string[];
}
```

Kell hozzá:

- event spawn rules
- event resolution
- event chaining

## 12. MVP vertical slice

Az első megépíthető prototípus ne legyen túl nagy.

### Tartalom

- 1 page
- 1 Phaser scene
- 4 modul
- 5 resource/state érték
- 3 esemény
- 1 akciószakasz
- 1 hidden state mutató

### Goal

Egy 5-10 perces játszható core loop.

Nem teljes játék.

## 13. Mivel induljunk ténylegesen

Konkrét sorrend:

1. `lib/starhold/sim/types.ts`
2. `lib/starhold/sim/createInitialState.ts`
3. `lib/starhold/sim/commands.ts`
4. `lib/starhold/sim/tick.ts`
5. `app/starhold/page.tsx`
6. `components/starhold/StarholdHUD.tsx`
7. `lib/starhold/phaser/StarholdBaseScene.ts`

Ez adja az első működő csontvázat.

## 14. Mire figyeljünk nagyon

### Ne csináljuk

- a teljes logikát React komponensekbe
- a teljes state-et Phaser scene-ekbe
- eventeket szétszórt if-ágakba
- rejtett state-et alkalmi flag-ekből

### Inkább így

- külön szabályréteg
- külön command réteg
- külön render réteg

## 15. Későbbi bővíthetőség

Ha ezt az alapot tartjuk:

- új modul hozzáadható
- új state-ek hozzáadhatók
- új akciószakasz ráépíthető
- új multiplayer modellre váltható
- a generatoros meta is betolható

Ez az egész architektúra célja:

- most gyors indulás
- később ne kelljen újraírni mindent

## 16. Ajánlott következő lépés

Most már a következő logikus dokumentum:

- `STARHOLD_VERTICAL_SLICE.md`

Abban már tényleg ez jönne:

- pontos első scene
- első HUD elemek
- első 4 modul viselkedése
- első 3 esemény
- első akciószakasz

Onnantól már kódolható prototípusra lehet bontani.
