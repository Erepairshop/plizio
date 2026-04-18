# Új Astro-tantárgy Játékok — Design Spec (18 db)

> Cél: 18 új round-alapú játékkomponens a plizio astro-tantárgyakhoz (biologie, kemia, physik, sachkunde, geographie, geschichte, informatika, deutsch, english, magyar, romana).
> Struktúra: 9 sziget × 3 mission. Az m1 marad "explore", az m2/m3-ba kerülnek ezek a játékok.
> Ez csak DESIGN. Nincs implementáció.

---

## Central Engine Architecture (KÖZPONTI ELV)

> A 18 játék **NEM** lesz 18 külön komponens, amit minden astro page külön importál és minden szigetbe külön bekötünk (30+ hely).
> Helyette **2 központi engine** szolgálja ki az összes tantárgyat és szigetet, és belülről dönti el, melyik game-variant renderelődik.

### Elv

1. **1 közös `M2Engine` komponens** — minden astro m2 mission-t kiszolgál (9 K1–K4 játék variant)
2. **1 közös `M3Engine` komponens** — minden astro m3 mission-t kiszolgál (9 K5–K8 játék variant)
3. Az engine-ek **bent** döntik el, melyik game-variant-et renderelik (belső `switch (gameKey)`)
4. A page-ek csak a prop-ok alapján hívják, **semmilyen játék-specifikus logika nincs a page-ekben**

### Engine Signature

```typescript
// components/astro-games/M2Engine.tsx
interface M2EngineProps {
  subject: "biologie" | "kemia" | "physik" | "sachkunde" | "geographie"
         | "geschichte" | "informatika" | "deutsch" | "english"
         | "magyar" | "romana";
  grade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  islandId: string;    // "i1".."i9"
  gameKey: string;     // "tap-match" | "memory-pairs" | ...
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: "hu" | "de" | "en" | "ro";
}

// components/astro-games/M3Engine.tsx — ugyanez a signature
```

### Page-használat (példa)

```tsx
// app/astro/biologie5/[islandId]/[missionId]/page.tsx
{mission.gameType === "m2" && (
  <M2Engine
    subject="biologie"
    grade={5}
    islandId={island.id}
    gameKey={mission.gameKey}
    onDone={handleDone}
  />
)}
{mission.gameType === "m3" && (
  <M3Engine
    subject="biologie"
    grade={5}
    islandId={island.id}
    gameKey={mission.gameKey}
    onDone={handleDone}
  />
)}
```

### Hogyan működik bent

Az engine komponensben:
1. **Pool-betöltés:** `subject + grade + islandId + gameKey` alapján betölti a megfelelő data pool-t (`lib/astro/games/<gameKey>/<subject>.ts`)
2. **Round-választás:** kiválasztja a megfelelő `Round[]`-ot (grade/island szerint)
3. **Switch-render:** `switch (gameKey)` alapján renderel egy-egy belső view komponenst (`TapMatchView`, `MemoryPairsView`, stb.)
4. **Egységes scoring + onDone callback:** minden view ugyanazt az `onRoundComplete(score, total)`-t hívja, az engine aggregálja, és a végén `onDone` megy a page-nek

### Konfig-szerződés (islandconfig → engine)

A config fájlokban (pl. `lib/astroBiologie5.ts`) a mission csak a `gameKey`-t jelzi:

```typescript
missions: [
  { id: "m1", gameType: "bio-explore", ... },
  { id: "m2", gameType: "m2", gameKey: "tap-match", ... },       // m2 engine + tap-match variant
  { id: "m3", gameType: "m3", gameKey: "timeline-slider", ... }, // m3 engine + timeline variant
],
```

A page-logika eldönti: `gameType === "m2"` → `<M2Engine gameKey={mission.gameKey} ... />`, `gameType === "m3"` → `<M3Engine gameKey={mission.gameKey} ... />`.

### Előny

- **1 helyen javítás = minden astro tantárgyra + minden szigetre érvényes.** Egy bug-fix vagy UX-tweak az engine-ben automatikusan 30+ helyen érvényes.
- **Új játék hozzáadása = új `Round` type + új View variant az engine switch-ében + új pool-fájl.** A page-eket nem kell hozzányúlni.
- **Page-ekben semmi:** csak a prop-ok alapján hívják az engine-t, nincs játék-import vagy variant-ág.
- **Tantárgy-specifikus pool nélküli default:** ha egy subject+grade+island kombinációra nincs pool, az engine fallback pool-t használ (általános kérdések).

### Game Key → Engine mapping tábla

| Engine | Játékok (gameKey) |
|--------|-------------------|
| **M2Engine** (K1–K4) | `tap-match`, `drag-sort`, `memory-pairs`, `shape-spotter`, `quick-tap`, `pattern-finish`, `count-catch`, `bubble-choice`, `sound-match` |
| **M3Engine** (K5–K8) | `true-false-blitz`, `category-rush`, `word-chain`, `timeline-slider`, `fill-blank`, `mcq4`, `speed-match`, `sort-puzzle`, `gap-fill-story` |

### Adatpool szerkezet

```
lib/astro/games/
  tap-match/
    biologie.ts        → export default { k1: TapMatchRound[], k2: ..., k4: ... }
    kemia.ts
    physik.ts
    ...
    _default.ts        → fallback pool, ha subject-specifikus nincs
  memory-pairs/
    biologie.ts
    ...
  timeline-slider/
    geschichte.ts
    ...
```

Alternatíva (tömörebb): egyetlen közös `lib/astro/games/pools.ts` nested struktúrával `{ [gameKey]: { [subject]: { [grade]: { [islandId]: Round[] } } } }` — ez később dönthető, a kontraktus (key-alapú load) azonos.

---

**Közös konvenciók:**
- Minden játék `Round`-alapú → komponens egyszerre egy roundot renderel, round-lista végén `onDone(score, total)`.
- Props kontraktus (minimum): `{ rounds: Round[]; color: string; lang: "hu"|"de"|"en"|"ro"; onDone: (score:number, total:number)=>void; onCorrect?:()=>void; onWrong?:()=>void }`.
- `LocalizedText = { de: string; hu: string; en: string; ro: string }` — négynyelvű tantárgyakhoz. Nyelvi tantárgyaknál `string` (saját nyelv).
- Accessibility: minden interaktív elem `aria-label`-es, Tab navigáció, Enter/Space aktiválás, fókuszgyűrű látható. Minimum tap target **44×44 px**.
- Animáció: `framer-motion`, 300–500 ms közt, `prefers-reduced-motion` tisztelve.
- Mobile-first, sticky HUD (score/life/timer), min. 16 px font.

---

## K1–K4 (6–10 éves) — 9 játék

### 1. TapMatch
- **gameKey:** `"tap-match"` — M2Engine variant
- **Célcsoport:** K1–K4
- **Rövid leírás:** A játékos gyors tap-peléssel párosítja az egymáshoz tartozó emoji/szó kártyákat két oszlop között.
- **Core mechanika:** Bal oszlop 4–6 kép/szó, jobb oszlop ugyanennyi. Tap a bal oldali elemre → kiemelkedik → tap a jobb oldali párjára. Ha helyes: zöld pulzus + pont. Ha rossz: piros shake, pár visszaáll. Round akkor kész, ha minden pár megvan.
- **Scoring:** +10 helyes pár, −2 téves tap, bónusz +5 ha 0 hibával. 3 round / session.
- **UI elemek:** (1) Két függőleges oszlop kártyákkal, (2) Fent streak + score HUD, (3) Alsó progress bar (párok/összes), (4) "Újra" gomb round végén.
- **Subject:** **Agnosztikus** (pl. állat↔élőhely bio, elem↔szimbólum kemia, ország↔zászló geo).

```ts
type TapMatchRound = {
  id: string;
  left:  { id: string; label: LocalizedText; emoji?: string; img?: string }[];
  right: { id: string; label: LocalizedText; emoji?: string; img?: string }[];
  correctPairs: { leftId: string; rightId: string }[];
};
```

---

### 2. DragSort
- **gameKey:** `"drag-sort"` — M2Engine variant
- **Célcsoport:** K1–K4
- **Rövid leírás:** A játékos elemeket húz a megfelelő kosárba (2–4 kategória).
- **Core mechanika:** A képernyő alján 2–4 nagy, címkézett kosár. Fent egy elem kártya pop-oppal jelenik meg — a user drag-el (touch vagy egér) a helyes kosárba. Helyes → kosár felvillan, új elem érkezik. Rossz → kártya visszapattan.
- **Scoring:** +8 helyes drop, −3 rossz drop. 10 elem / round. Nincs hard time limit, de 3 round után összeg.
- **UI elemek:** (1) Felül dobó-zóna az aktív kártyával, (2) Alul 2–4 nagy kosár ikon+címke, (3) "X/10" progress, (4) Score HUD.
- **Subject:** **Agnosztikus** (élő/élettelen bio, fém/nemfém kemia, szófajok deutsch/magyar).

```ts
type DragSortRound = {
  id: string;
  bins: { id: string; label: LocalizedText; icon?: string; color?: string }[];
  items: { id: string; label: LocalizedText; img?: string; correctBinId: string }[];
};
```

---

### 3. MemoryPairs
- **gameKey:** `"memory-pairs"` — M2Engine variant
- **Célcsoport:** K1–K4
- **Rövid leírás:** Klasszikus memória: lefedett kártyák, a játékos párokat keres fordítgatva.
- **Core mechanika:** 4×3 vagy 4×4 rács lefordított kártyákkal. Tap → fordul. 2 egymás utáni fordítás: ha pár, nyitva marad; ha nem, 800 ms után visszafordul. Round vége ha minden pár megvan.
- **Scoring:** +15 pár, −1 minden hibás fordítás. Idő-bonus: kevesebb mint 30 s → +20.
- **UI elemek:** (1) Közép: kártyarács, (2) Fent: próbák-számláló + timer, (3) Alul: "pár X/Y", (4) Konfetti round végén.
- **Subject:** **Agnosztikus** (kép↔szó, fogalom↔definíció rövidítve).

```ts
type MemoryPairsRound = {
  id: string;
  gridSize: 3 | 4 | 6;
  pairs: { id: string; a: { label: LocalizedText; img?: string }; b: { label: LocalizedText; img?: string } }[];
};
```

---

### 4. ShapeSpotter
- **gameKey:** `"shape-spotter"` — M2Engine variant
- **Célcsoport:** K1–K4
- **Rövid leírás:** Sok zavaró elem közt a játékos megtalálja a helyes formát/színt/képet.
- **Core mechanika:** Egy "keresett" minta megjelenik felül (pl. "piros háromszög", "sejt rajz"). A képernyőn 8–16 véletlen elrendezésű elem lebeg; a user rátap a helyesre. 5 találat / round.
- **Scoring:** +12 helyes tap, −4 rossz tap. 10 s time-per-item, maradék idő +1/s bónusz.
- **UI elemek:** (1) Fent: "keresett" minta nagyban, (2) Közép: scattered target-mező, (3) Jobb: timer-kör, (4) HUD: score + found count.
- **Subject:** **Agnosztikus** (forma geometria / sejttípus bio / hang betű magyar).

```ts
type ShapeSpotterRound = {
  id: string;
  target: { label: LocalizedText; img?: string; colorHex?: string };
  distractors: { id: string; label?: LocalizedText; img?: string; colorHex?: string; isTarget: boolean }[];
  requiredFinds: number;
};
```

---

### 5. QuickTap
- **gameKey:** `"quick-tap"` — M2Engine variant
- **Célcsoport:** K1–K4
- **Rövid leírás:** Reakció-játék: az egyik sávban villanó korrekt elemre kell lecsapni mielőtt eltűnik.
- **Core mechanika:** 3–4 "pálya" vonal. Ikonok görögnek fölülről lefelé, mindegyik 2 s alatt ér le. Néhány helyes (pl. "páros szám", "kemény mássalhangzó"), a többi disztraktor. Tap → ha helyes: +pont; ha rossz vagy kihagyott helyes: −life.
- **Scoring:** +10 helyes tap, −1 life rossz/kihagyott helyes. 3 life, 30 s / round.
- **UI elemek:** (1) Fent: kritérium ("kattints a magánhangzóra!"), (2) 3–4 pálya rollerrel, (3) 3 szív HUD, (4) Timer bar.
- **Subject:** **Agnosztikus** (számosztály math, szófaj nyelv, elem kategória bio).

```ts
type QuickTapRound = {
  id: string;
  criterion: LocalizedText;            // pl. "Klikkelj a főnevekre!"
  stream: { id: string; label: LocalizedText; isCorrect: boolean; spawnMs: number }[];
  durationMs: number;
  lives: number;
};
```

---

### 6. PatternFinish
- **gameKey:** `"pattern-finish"` — M2Engine variant
- **Célcsoport:** K1–K4
- **Rövid leírás:** Egy vizuális/szimbolikus sorozat hiányzó elemét kell kiválasztani 3–4 opcióból.
- **Core mechanika:** Fent: "☀️, 🌙, ☀️, ?, ☀️" vagy "a, b, c, ?". Alul: 3–4 opció gomb. Tap → helyes esetén slot feltöltődik, round tovább. 5 sorozat / session.
- **Scoring:** +12 helyes első próbára, +6 másodikra, 0 harmadikra.
- **UI elemek:** (1) Nagy sequence-sáv slotokkal, (2) ? slot pulzál, (3) 3–4 option tile alul, (4) Round-progress.
- **Subject:** **Agnosztikus** (szimbólum/szám/betű).

```ts
type PatternFinishRound = {
  id: string;
  sequence: ({ label: LocalizedText; img?: string } | null)[]; // null = hiány
  options: { id: string; label: LocalizedText; img?: string; isCorrect: boolean }[];
};
```

---

### 7. CountCatch
- **gameKey:** `"count-catch"` — M2Engine variant
- **Célcsoport:** K1–K4
- **Rövid leírás:** Mozgó elemek (pl. bolygók, állatok) röpködnek a képernyőn; a játékos megszámolja őket és beírja / beválasztja a helyes számot.
- **Core mechanika:** 5 s alatt 3–12 elem úszik be–ki (nem egyszerre, hanem bevonul-kivonul). Amikor timer lejár, a szám input / 4 opció megjelenik.
- **Scoring:** +15 pontos, +8 ±1 eltérés, 0 egyéb. 4 round / session.
- **UI elemek:** (1) Sci-fi space backdrop az elemek mozgásához, (2) 5 s countdown progress, (3) Alul 4 opció gomb, (4) Score HUD.
- **Subject:** **Specifikus** (math-osabb; bio-ban is ok: "hány sejt osztódott?"), amúgy **agnosztikus sprite-okkal**.

```ts
type CountCatchRound = {
  id: string;
  sprites: { id: string; img?: string; emoji?: string; enterMs: number; exitMs: number }[];
  observeMs: number;       // pl. 5000
  correctCount: number;
  options: number[];       // pl. [3,4,5,6]
};
```

---

### 8. BubbleChoice
- **gameKey:** `"bubble-choice"` — M2Engine variant
- **Célcsoport:** K1–K4
- **Rövid leírás:** 4–6 úszó buborék lebeg a képernyőn különböző válaszokkal; a játékos kipukkantja a helyeset.
- **Core mechanika:** Fent kérdés-sáv. Buborékok lassan feljönnek, jobbra-balra sodródnak (framer-motion). Tap → pukkanás animáció. Ha helyes: +pont, új kérdés. Ha rossz: buborék piros lesz, −life.
- **Scoring:** +10 helyes, −1 life rossz buborék. 5 kérdés / round.
- **UI elemek:** (1) Fent: kérdés buborékszalag, (2) Közép: animált buborék-mező, (3) 3 life ikon, (4) Progress dot 5/5.
- **Subject:** **Agnosztikus** (kérdés-válasz bármiből).

```ts
type BubbleChoiceRound = {
  id: string;
  question: LocalizedText;
  bubbles: { id: string; label: LocalizedText; isCorrect: boolean; colorHex?: string }[];
  lives: number;
};
```

---

### 9. SoundMatch
- **gameKey:** `"sound-match"` — M2Engine variant
- **Célcsoport:** K1–K4
- **Rövid leírás:** Hangot hall a játékos (TTS vagy asset), és a 3–4 kép/szó közül a megfelelőt választja.
- **Core mechanika:** Nagy hangszóró gomb fent → tap → hang lejátszódik (Web Speech API fallback). Alul 3–4 kép/szó gomb. A helyes választás előrevisz, a rossz shake + ismétlődő hang.
- **Scoring:** +14 első próbára, +7 másodikra. Max 3 ismétlés.
- **UI elemek:** (1) Nagy speaker ikon (ismétlésre), (2) "▶ Lejátszás" gomb, (3) 3–4 choice-tile, (4) Score + round progress.
- **Subject:** **Specifikus-barát** (nyelvi tárgyak: magyar, deutsch, english, romana — kiejtés ↔ írott szó; de agnosztikusan is működhet bio állathangokkal).

```ts
type SoundMatchRound = {
  id: string;
  audio: { text?: string; ttsLang?: "hu"|"de"|"en"|"ro"; assetUrl?: string };
  options: { id: string; label: LocalizedText; img?: string; isCorrect: boolean }[];
};
```

---

## K5–K8 (11–14 éves) — 9 játék

### 10. TrueFalseBlitz (új, subject-aware)
- **gameKey:** `"true-false-blitz"` — M3Engine variant
- **Célcsoport:** K5–K8
- **Rövid leírás:** Gyors ütemben érkeznek állítások; a játékos "IGAZ" / "HAMIS" választással reagál idő alatt.
- **Core mechanika:** Kártya-stack középen. 4 s / állítás. 2 gomb (bal IGAZ, jobb HAMIS) vagy swipe left/right. Helyes: kártya lerepül + streak nő. Rossz: piros flash, streak reset. 12 állítás / round.
- **Scoring:** +8 helyes, streak×1.25 3+, idő-bonus +3 ha <2 s alatt. Nincs "élet", de <50% rate = game over jelzés.
- **UI elemek:** (1) Központi kártya állítással, (2) Streak láng jobb felső, (3) Bal/Jobb IGAZ/HAMIS gomb, (4) 12-es slot-progress.
- **Subject:** **Agnosztikus** (tények: "A víz forrása 100°C" — physik/kemia/bio egyaránt).

```ts
type TrueFalseBlitzRound = {
  id: string;
  statements: {
    id: string;
    text: LocalizedText;
    isTrue: boolean;
    explanation?: LocalizedText;
  }[];
  perItemMs: number;
};
```

---

### 11. CategoryRush
- **gameKey:** `"category-rush"` — M3Engine variant
- **Célcsoport:** K5–K8
- **Rövid leírás:** Zúdulnak az elemek; 2–4 kategória-kosárba kell swipe-olni őket gyorsan.
- **Core mechanika:** Mint egy gyors DragSort + time-pressure. 30 s / round. Elemek középen pop-oppal, swipe fel/le/bal/jobb a 4 kategóriára (vagy tap egy kosárra). Helyes: pont. Rossz: −3 és flash. 20–30 item cél.
- **Scoring:** +6 helyes, −3 rossz, streak +0.5x per 5.
- **UI elemek:** (1) Központi item-slot, (2) 4 oldali kosár (top/bot/left/right) címkével, (3) 30 s timer bar, (4) Score + streak.
- **Subject:** **Agnosztikus** (szófajok, élőlény-csoportok, kémiai kötéstípusok).

```ts
type CategoryRushRound = {
  id: string;
  categories: { id: string; label: LocalizedText; edge: "top"|"bottom"|"left"|"right"; color?: string }[];
  items: { id: string; label: LocalizedText; correctCategoryId: string }[];
  durationMs: number;
};
```

---

### 12. WordChain
- **gameKey:** `"word-chain"` — M3Engine variant
- **Célcsoport:** K5–K8
- **Rövid leírás:** Láncot kell építeni: minden új szó/fogalom az előző utolsó betűjével/kategóriájával kezdődik vagy kapcsolódik.
- **Core mechanika:** Fent egy indító szó/fogalom. Alul 4 opció — csak az egyik folytatja a láncot szabályosan. Tap → lánc nyúlik jobbra, új indító lesz. 6 láncszem cél.
- **Scoring:** +12 helyes szem, teljes lánc +30 bónusz. Hibánál a szem nem jön létre, a round folytatható, de 3 hiba = vég.
- **UI elemek:** (1) Horizontális lánc-sáv scrollal, (2) Alul 4 option-tile, (3) "Rule" chip fent (pl. "folyik → új betű = B"), (4) 3 hiba HUD.
- **Subject:** **Agnosztikus** (magyar/deutsch: szólánc utolsó betűvel; bio: táplálékháló; kemia: reakciólánc; geschichte: oksági láncolat).

```ts
type WordChainRound = {
  id: string;
  rule: LocalizedText;                            // "Az utolsó betűvel kezdődjön"
  start: { label: LocalizedText };
  steps: {
    options: { id: string; label: LocalizedText; isValid: boolean }[];
  }[];                                            // 5-6 lépés
};
```

---

### 13. TimelineSlider
- **gameKey:** `"timeline-slider"` — M3Engine variant
- **Célcsoport:** K5–K8
- **Rövid leírás:** Egy eseményt kell egy csúszkával a helyes évhez / korszakhoz pozicionálni.
- **Core mechanika:** Vízszintes slider (pl. −3000 → 2026). Fent az esemény címe+kép. Drag a slidert → közelítő érték jelenik meg. Tap "Megerősít". Tolerancia-sáv ad pontszámot.
- **Scoring:** ±5% tolerancia → +20, ±10% → +12, ±20% → +5, több: 0. 6 esemény / round.
- **UI elemek:** (1) Nagy esemény-kártya képpel, (2) Horizontális timeline slider tick-jeivel, (3) Aktuális érték chip, (4) Eredmény overlay (helyes vs tipp).
- **Subject:** **Specifikus** (geschichte elsődleges; bio: evolúció időszak; physik: tudományos felfedezés).

```ts
type TimelineSliderRound = {
  id: string;
  events: {
    id: string;
    title: LocalizedText;
    img?: string;
    correctValue: number;     // pl. év
    rangeMin: number;
    rangeMax: number;
    tolerancePct: number;     // pl. 0.05
  }[];
};
```

---

### 14. FillBlank
- **gameKey:** `"fill-blank"` — M3Engine variant
- **Célcsoport:** K5–K8
- **Rövid leírás:** Szövegben hiányzó szó/érték; beírás (input) vagy word-bank-ból drag.
- **Core mechanika:** Mondat-panel ___ résekkel. Alul "word bank" chippek. Drag-chip a résbe VAGY billentyűs input. Több rés / mondat lehetséges. Submit validálja.
- **Scoring:** +10 / rés, +8 bónusz ha minden rés egyszerre jó. 4 mondat / round.
- **UI elemek:** (1) Olvasható mondat-panel (min. 18 px), (2) Drop-zone slotok vizuálisan (szaggatott kontúr), (3) Word-bank lent, (4) "Ellenőriz" gomb.
- **Subject:** **Agnosztikus** (nyelvi: hiányos mondat; bio: definíció; physik: képlet — "F = m · ___").

```ts
type FillBlankRound = {
  id: string;
  sentences: {
    id: string;
    template: LocalizedText;                     // pl. "A víz ___ foka 100°C-on"
    blanks: { index: number; correct: string; alternatives?: string[] }[];
    wordBank?: string[];                          // ha drag-mód, disztraktorokkal
  }[];
};
```

---

### 15. MCQ4 (Deep Quiz)
- **gameKey:** `"mcq4"` — M3Engine variant
- **Célcsoport:** K5–K8
- **Rövid leírás:** Klasszikus 4-válaszos kvíz, de magyarázattal és "miért" reveal-lel.
- **Core mechanika:** Kérdés fent (lehet kép+szöveg), 4 válasz alul. Választás után a helyes zöld, rossz piros, minden rossz inaktívvá válik, + alul magyarázat-panel bontakozik ki. "Tovább" gomb. 6 kérdés / round.
- **Scoring:** +15 első próbára. Ha rákattint magyarázatra és tovább, +15 (nem büntet). Időre: 15 s / kérdés, +1/s maradt.
- **UI elemek:** (1) Kérdés-kártya képpel, (2) 4 választó-tile, (3) Magyarázat-accordion (reveal), (4) Progress 1/6 + score.
- **Subject:** **Agnosztikus** (minden tantárgy).

```ts
type MCQ4Round = {
  id: string;
  questions: {
    id: string;
    prompt: LocalizedText;
    img?: string;
    options: { id: string; label: LocalizedText }[];
    correctOptionId: string;
    explanation: LocalizedText;
    timeLimitMs?: number;
  }[];
};
```

---

### 16. SpeedMatch
- **gameKey:** `"speed-match"` — M3Engine variant
- **Célcsoport:** K5–K8
- **Rövid leírás:** Párosítás, de kemény időkorláttal és shuffle-lel (gyorsabb reflex-kombó).
- **Core mechanika:** 6 pár egyszerre a képernyőn, kétoszlopos (vagy scatter). A játékos tap-pel jobbat+balt. 45 s / round. Minden helyes pár eltűnik, shuffle 10 másodpercenként.
- **Scoring:** +8 pár, streak bonus +2/pár, −2 mismatched klik. Időben minden pár = round clear +25 bónusz.
- **UI elemek:** (1) Két oszlop / scatter-mező kártyákkal, (2) Nagy timer-gyűrű, (3) Streak-szám, (4) Live score.
- **Subject:** **Agnosztikus** (fogalom↔definíció; szó↔fordítás nyelvi; képlet↔név kemia).

```ts
type SpeedMatchRound = {
  id: string;
  pairs: { id: string; a: LocalizedText; b: LocalizedText }[]; // 6-8 pár
  durationMs: number;
  shuffleEveryMs?: number;
};
```

---

### 17. SortPuzzle (Multi-criterion)
- **gameKey:** `"sort-puzzle"` — M3Engine variant
- **Célcsoport:** K5–K8
- **Rövid leírás:** 5–8 elemet kell rendezni több szempont szerint egyszerre (pl. időrend ÉS fontosság).
- **Core mechanika:** Vízszintes "timeline" vagy ranglista; a user drag-el minden elemet a helyes pozícióba. Két tengely is lehet (x = idő, y = fontosság). Submit validál, részleges pontozás.
- **Scoring:** +6 / helyes pozíció, teljesen jó sorrend +30 bónusz. 2 próba / round.
- **UI elemek:** (1) Rendezési zóna 1–2 tengellyel (címkézve), (2) Alul kezdő-stack, (3) Criterion-chip fent, (4) "Ellenőriz" gomb.
- **Subject:** **Agnosztikus** (geschichte: évek; bio: tápláléklánc; kemia: reakció-fázisok; informatika: algoritmus-lépések).

```ts
type SortPuzzleRound = {
  id: string;
  axes: {
    x?: { label: LocalizedText; leftLabel: LocalizedText; rightLabel: LocalizedText };
    y?: { label: LocalizedText; bottomLabel: LocalizedText; topLabel: LocalizedText };
  };
  items: {
    id: string;
    label: LocalizedText;
    img?: string;
    correctOrderX?: number;
    correctOrderY?: number;
  }[];
};
```

---

### 18. GapFillStory
- **gameKey:** `"gap-fill-story"` — M3Engine variant
- **Célcsoport:** K5–K8
- **Rövid leírás:** Több bekezdéses történet / magyarázat, amelyben 5–8 hiány található; kontextusból kell kitölteni.
- **Core mechanika:** Hosszabb szöveg (100–200 szó), a réseket végiglépegetve töltjük ki dropdown / word-bank chippelől. Minden rés kontextusra épít, így a sorrend számít. Submit gomb a végén globális validálás.
- **Scoring:** +8 / rés, +20 perfect bónusz. Hint elérhető (−4 pont): az első helyes betűt mutatja.
- **UI elemek:** (1) Scrollozható story-panel (olvasható tipográfia), (2) Inline kitöltő-slotok dropdown-menüvel, (3) Word-bank chippek oldalt, (4) Alul Submit+Hint gomb.
- **Subject:** **Agnosztikus** (deutsch/english szövegértés; geschichte narratíva; sachkunde ismeretterjesztés; bio folyamatleírás).

```ts
type GapFillStoryRound = {
  id: string;
  story: LocalizedText;                          // Template: "Die Zelle hat {{0}} und {{1}}..."
  blanks: {
    index: number;
    options: { id: string; label: LocalizedText }[];
    correctOptionId: string;
    hintLetter?: string;
  }[];
};
```

---

## Összegzés és implementációs útmutatás

| # | Név | gameKey | Engine | Korcsoport | Subject | Fő mechanika |
|---|-----|---------|--------|-----------|---------|--------------|
| 1 | TapMatch | `tap-match` | M2Engine | K1–K4 | Agnosztikus | Tap párosítás |
| 2 | DragSort | `drag-sort` | M2Engine | K1–K4 | Agnosztikus | Drag kosárba |
| 3 | MemoryPairs | `memory-pairs` | M2Engine | K1–K4 | Agnosztikus | Memória |
| 4 | ShapeSpotter | `shape-spotter` | M2Engine | K1–K4 | Agnosztikus | Visual search |
| 5 | QuickTap | `quick-tap` | M2Engine | K1–K4 | Agnosztikus | Reakció |
| 6 | PatternFinish | `pattern-finish` | M2Engine | K1–K4 | Agnosztikus | Sorozat |
| 7 | CountCatch | `count-catch` | M2Engine | K1–K4 | Agnosztikus | Számlálás |
| 8 | BubbleChoice | `bubble-choice` | M2Engine | K1–K4 | Agnosztikus | Tap-choice |
| 9 | SoundMatch | `sound-match` | M2Engine | K1–K4 | Nyelvi-barát | Audio pár |
| 10 | TrueFalseBlitz | `true-false-blitz` | M3Engine | K5–K8 | Agnosztikus | Swipe igaz/hamis |
| 11 | CategoryRush | `category-rush` | M3Engine | K5–K8 | Agnosztikus | Gyors sort |
| 12 | WordChain | `word-chain` | M3Engine | K5–K8 | Agnosztikus | Lánc-építés |
| 13 | TimelineSlider | `timeline-slider` | M3Engine | K5–K8 | Specifikus (geschichte+) | Csúszka |
| 14 | FillBlank | `fill-blank` | M3Engine | K5–K8 | Agnosztikus | Kitöltés |
| 15 | MCQ4 | `mcq4` | M3Engine | K5–K8 | Agnosztikus | Mély kvíz |
| 16 | SpeedMatch | `speed-match` | M3Engine | K5–K8 | Agnosztikus | Gyors pár |
| 17 | SortPuzzle | `sort-puzzle` | M3Engine | K5–K8 | Agnosztikus | Multi-rendez |
| 18 | GapFillStory | `gap-fill-story` | M3Engine | K5–K8 | Agnosztikus | Szövegértés |

**Közös típus-keret:**
```ts
type AstroGameProps<R> = {
  rounds: R[];
  color: string;
  lang: "hu" | "de" | "en" | "ro";
  onDone: (score: number, total: number) => void;
  onCorrect?: () => void;
  onWrong?: () => void;
};

type LocalizedText = { de: string; hu: string; en: string; ro: string };
```

**Motor-refaktor javaslat (2 központi engine + 18 belső view):**

A korábbi 3-engine (TapChoice/DragSort/Match) mikro-engine koncepció helyett **2 nagy központi engine** a cél, belül 9–9 View variant-tel. Így az astro page-ek csak 2 komponenst ismernek (`M2Engine`, `M3Engine`), és `gameKey`-en keresztül döntik el a variant-et.

**Fájlstruktúra:**

```
components/astro-games/
  M2Engine.tsx             — K1–K4 engine: pool-load + switch(gameKey) + scoring
  M3Engine.tsx             — K5–K8 engine: pool-load + switch(gameKey) + scoring
  shared/
    GameHud.tsx            — közös HUD (score, lives, timer, progress)
    RoundWrapper.tsx       — közös round-lifecycle (onCorrect/onWrong/onDone)
    useLocalizedText.ts    — LocalizedText hook
  views/m2/
    TapMatchView.tsx        — gameKey: "tap-match"
    DragSortView.tsx        — gameKey: "drag-sort"
    MemoryPairsView.tsx     — gameKey: "memory-pairs"
    ShapeSpotterView.tsx    — gameKey: "shape-spotter"
    QuickTapView.tsx        — gameKey: "quick-tap"
    PatternFinishView.tsx   — gameKey: "pattern-finish"
    CountCatchView.tsx      — gameKey: "count-catch"
    BubbleChoiceView.tsx    — gameKey: "bubble-choice"
    SoundMatchView.tsx      — gameKey: "sound-match"
  views/m3/
    TrueFalseBlitzView.tsx  — gameKey: "true-false-blitz"
    CategoryRushView.tsx    — gameKey: "category-rush"
    WordChainView.tsx       — gameKey: "word-chain"
    TimelineSliderView.tsx  — gameKey: "timeline-slider"
    FillBlankView.tsx       — gameKey: "fill-blank"
    MCQ4View.tsx            — gameKey: "mcq4"
    SpeedMatchView.tsx      — gameKey: "speed-match"
    SortPuzzleView.tsx      — gameKey: "sort-puzzle"
    GapFillStoryView.tsx    — gameKey: "gap-fill-story"
```

**Engine belső vázlat (pszeudokód):**

```tsx
// M2Engine.tsx
export function M2Engine({ subject, grade, islandId, gameKey, onDone, color, lang }: M2EngineProps) {
  const rounds = useAstroPool(gameKey, subject, grade, islandId);  // lib/astro/games/<gameKey>/<subject>.ts
  const commonProps = { rounds, color: color ?? "#7c3aed", lang: lang ?? "hu", onDone };

  switch (gameKey) {
    case "tap-match":      return <TapMatchView      {...commonProps} />;
    case "drag-sort":      return <DragSortView      {...commonProps} />;
    case "memory-pairs":   return <MemoryPairsView   {...commonProps} />;
    case "shape-spotter":  return <ShapeSpotterView  {...commonProps} />;
    case "quick-tap":      return <QuickTapView      {...commonProps} />;
    case "pattern-finish": return <PatternFinishView {...commonProps} />;
    case "count-catch":    return <CountCatchView    {...commonProps} />;
    case "bubble-choice":  return <BubbleChoiceView  {...commonProps} />;
    case "sound-match":    return <SoundMatchView    {...commonProps} />;
    default:
      console.warn(`[M2Engine] Unknown gameKey "${gameKey}"`);
      return <FallbackView onDone={onDone} />;
  }
}
```

**Előny az astro page-ekre nézve:**
- 30+ astro page-ben csak 2 komponens (`M2Engine`, `M3Engine`) hivatkozás, nem 18 külön import.
- Új játék = új View + új switch case + új pool — a page-eket és az islandconfig-okat nem kell hozzányúlni.
- Egységes `AstroGameProps<R>` kontraktus minden View-ban → engine-oldali scoring/lifecycle közös.

**Data pool struktúra (konkrét):**

```
lib/astro/games/
  tap-match/
    biologie.ts        → export default: Record<Grade, Record<IslandId, TapMatchRound[]>>
    kemia.ts
    physik.ts
    sachkunde.ts
    geographie.ts
    geschichte.ts
    informatika.ts
    deutsch.ts
    english.ts
    magyar.ts
    romana.ts
    _default.ts        → fallback agnosztikus pool
  memory-pairs/
    ...
  timeline-slider/
    geschichte.ts      → itt a legerősebb, más tantárgyaknál _default.ts
    ...
```

Alternatív, tömörebb forma (egyetlen indexfájl): `lib/astro/games/pools.ts` nested struktúrával, ha a fájlszám a granuláris bontásnál túl sokká válik. A kontraktus azonos: az engine `useAstroPool(gameKey, subject, grade, islandId)` hívással hozzáfér.

**Config-szerződés (islandconfig → engine):**

```typescript
// lib/astroBiologie5.ts
missions: [
  { id: "m1", gameType: "bio-explore", ... },
  { id: "m2", gameType: "m2", gameKey: "tap-match", ... },
  { id: "m3", gameType: "m3", gameKey: "timeline-slider", ... },
],
```

A page.tsx-ben: `gameType === "m2"` → `<M2Engine gameKey={mission.gameKey} ... />`, `gameType === "m3"` → `<M3Engine gameKey={mission.gameKey} ... />`. Más helyen a `gameKey` NEM jelenik meg — minden variant-döntés az engine-ben történik.

**Következő lépés:** `M2Engine` + `M3Engine` implementálása (switch + pool-hook), majd View-k inkrementális hozzáadása. Első iterációban elég 2–3 View + fallback; a többi jöhet rá ugyanabban a kontraktusban. Tantárgy-pool generálás párhuzamosan indulhat, agnosztikus default pool-ra épülve.
