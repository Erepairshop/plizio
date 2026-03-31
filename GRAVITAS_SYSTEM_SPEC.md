# GRAVITAS SYSTEM SPEC

> Cél: a jelenlegi prototípus-alapból konkrét, építhető rendszerspecifikációt csinálni. Ez már nem víziódokumentum, hanem az első engine-rétegek specifikációja.

## 1. Név és route

Jelenlegi munkanév:

- `Gravitas`

Jelenlegi prototípus route:

- `/gravitas`

Megjegyzés:

- a régi `starhold` név csak kompatibilitási alias maradhat, az elsődleges scaffold `gravitas`
- ez most elfogadható, amíg a rendszer még alakul

## 2. MVP rendszerhatár

Az első építhető rendszer célja:

- egy nyugodtabb indulás
- 4 modul
- 4 resource/state
- 3 esemény
- külön activation engine
- egyszerű world phase-ek

Nem cél még:

- multiplayer
- sok state branch
- komplett meta
- teljes event háló

## 3. Fő engine rétegek

Az MVP-ben ezek legyenek külön rétegek:

### 3.1 Sim core

Feladata:

- világállapot tárolás
- resource update
- module state update
- phase kezelés
- event queue

### 3.2 Command engine

Feladata:

- játékos inputok feldolgozása
- command -> state change

### 3.3 Activation engine

Feladata:

- avatar feltámasztás külön kezelése
- energiaátvitel
- progress
- siker / megszakadás

### 3.4 Event engine

Feladata:

- korai események generálása és hatásai
- alert és világreakció

## 4. Phase modell

Az első verzióban a phase modell maradjon egyszerű.

```ts
type GravitasPhase =
  | "boot"
  | "activation"
  | "awakened";
```

### `boot`

Jellemzők:

- sérült bázis
- kevés erőforrás
- az avatar még nem aktív

### `activation`

Jellemzők:

- a Core Chamber elérhető
- a játékos elkezdheti az energiaátvitelt
- az activation engine aktív

### `awakened`

Jellemzők:

- az avatar felébredt
- új rendszerállapot nyílik
- a világ érzetileg átvált

## 5. Module modell

Az első 4 modul fix:

- `reactor`
- `logistics`
- `core`
- `sensor`

### Általános module state

```ts
interface GravitasModuleState {
  id: ModuleId;
  name: string;
  online: boolean;
  integrity: number; // 0-100
  load: number;      // 0-100
}
```

### Reactor

Felel:

- alap power termelésért
- stabilitásra is erős hatása van

### Logistics

Felel:

- materials flow-ért
- repair hatékonyságért

### Core Chamber

Felel:

- activation flow-ért
- avatar shell állapotáért

### Sensor Node

Felel:

- korai eventek érzékeléséért
- stabilitási előnyért
- későbbi anomaly systems alapjáért

## 6. Resource modell

Az első rendszerben 4 érték van:

```ts
interface GravitasResources {
  power: number;
  materials: number;
  stability: number;
  activation: number;
}
```

### `power`

- akciók költsége
- rendszerek működésének alapja

### `materials`

- repair
- alaphelyreállítás

### `stability`

- globális rendszerbiztonság
- ha leesik, a világ érzékenyebb lesz

### `activation`

- kizárólag az avatar feltámasztás első flow-jához

## 7. Command rendszer

Első körben csak játékos commandok legyenek külön commandként.

A rendszeroldali automatikus folyamatok:

- tick
- event
- phase reaction

ne commandok legyenek.

### Első command lista

```ts
type GravitasCommand =
  | { type: "SCAVENGE" }
  | { type: "STABILIZE_REACTOR" }
  | { type: "REPAIR_MODULE"; moduleId: "logistics" | "core" | "sensor" }
  | { type: "REROUTE_TO_CORE" }
  | { type: "CHANNEL_TO_CORE"; amount: number };
```

## 8. Tick szabály

Az MVP-ben:

- `1 tick = 1 second`

Minden tick alatt:

1. Reactor power update
2. passive drain / upkeep
3. stability adjustment
4. activation side effects
5. event evaluation
6. alert refresh

## 9. Activation engine

Ez külön engine-réteg kell legyen, nem sima page effect.

## 9.1 Cél

Az avatar feltámasztása:

- aktív
- fizikai érzetű
- ismét felhasználható rendszer

## 9.2 Engine input

Szükséges feltételek:

- elég power
- elég stability
- logistics minimum állapot

Trigger:

- `REROUTE_TO_CORE`

Aktív fázis:

- `CHANNEL_TO_CORE`

## 9.3 Engine output

Hatásai:

- activation nő
- power csökken
- stability enyhén terhelődik
- core load emelkedik

Sikerfeltétel:

- `activation >= 100`

Siker esetén:

- `phase = awakened`
- `avatarAwake = true`
- új alert és journal entry

## 10. Event engine minimum

Az első MVP event engine még egyszerű lehet.

### Event modell

```ts
interface GravitasEvent {
  id: string;
  kind: "power_fluctuation" | "material_bottleneck" | "signal_pulse";
  severity: number;
  ttl: number;
}
```

### Első 3 event

#### `power_fluctuation`

- reactor stress
- instability pressure

#### `material_bottleneck`

- kevesebb repair lehetőség

#### `signal_pulse`

- core / sensor kapcsolat
- előrevetíti az avatar és anomaly réteget

## 11. Journal / alert rendszer

Ez fontos, mert a játék gondolkodó rendszer érzetét erősíti.

### Alert

- rövid, aktuális
- mindig a legfontosabb figyelmeztetés

### Journal

- utolsó pár fontos változás
- világreakció érzete
- nem csak log, hanem hangulatépítő réteg is

## 12. UI kötés

### React UI

Mutatja:

- phase
- HUD
- modules
- alert
- journal
- objective
- activation progress

### Későbbi Phaser scene

Majd mutathatja:

- station space
- module nodes
- energy pulse
- activation visual

## 13. Bővíthetőségi szabályok

Már most úgy kell írni, hogy később:

- új modul jöhessen
- új resource jöhessen
- új state layer jöhessen
- activationből több ág lehessen

Ezért:

- ne hardcode-olt page if-ek legyenek mindenre
- a logika engine szinten maradjon

## 14. Első refaktor cél

A mostani scaffold következő refaktorának célja:

- a `starhold` alap kódot jobban engine-irányba tolni
- command és activation logikát jobban leválasztani a page-ről

## 15. Következő implementációs lépés

Szerintem innen ez a helyes sorrend:

1. activation engine külön file
2. event engine külön file
3. module config külön file
4. első Phaser scene placeholder

Ez lesz az első igazi rendszerszintű tisztítás.
