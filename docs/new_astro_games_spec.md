# Új Astro-tantárgy Játékok — Design Spec (18 db)

> Cél: 18 új round-alapú játékkomponens a plizio astro-tantárgyakhoz (biologie, kemia, physik, sachkunde, geographie, geschichte, informatika, deutsch, english, magyar, romana).
> Struktúra: 9 sziget × 3 mission. Az **m1** marad "explore", az **m2** és **m3** ezek közül a játékok közül kap párosítást.
> Ez csak DESIGN. Nincs implementáció.

---

## KRITIKUS SZABÁLYOK — m2 vs m3

**m2 = Lernen (Gyakorlás)** és **m3 = Herausforderung (Kihívás)** **TELJESEN KÜLÖNBÖZŐ mechanikák**.

Egy mechanika SOHA nem szerepelhet mindkét módban. Egy játék vagy m2 vagy m3 — sosem mindkettő.

### m2 — Lernen (Gyakorlás)
- Lehet **idő-alapú** is (gyors reakció, timer, streak-multiplier, countdown OK)
- **Könnyebb**, több próbálkozás engedélyezett, forgiving scoring
- Erős **vizuális feedback** (confetti, pulse, glow, hanghatás)
- "Játszva tanulás" hangulat — sűrű sikerélmény, rövid feladategységek
- Memorizálás, reflex, alap-ismétlés

### m3 — Herausforderung (Kihívás) — **NINCS IDŐNYOMÁS!**
- **Nincs timer, nincs countdown, nincs gyorsasági bonus, nincs leeső elem.**
- Gondolkodási idő **korlátlan** — a játékos annyit tölt egy feladaton, amennyit akar.
- A nehezítés **kizárólag** az alábbiakból jön:
  - **Többlépéses logika** — 2-3 egymásba fűzött részfeladat (pl. rendezd → aztán indokold)
  - **Pontosság követelmény** — 100% helyes kell a továbblépéshez, különben round reset
  - **Magyarázat kötelező** — "miért az a helyes válasz?" second-step MCQ
  - **Nagyon közeli csali válaszok** — distraktorok minimális szemantikai különbséggel
  - **Multi-kritérium rendezés** — nem 1D; pl. időrend + régió + jelentőség egyszerre
  - **Részletesebb tartalom** — hosszabb szöveg, több opció, több mező

### Felosztás áttekintés

| Csoport | Db | Játékok |
|---------|---|---------|
| K1-K4 m2 gyakorlás (időalapú OK) | 5 | TapMatch, MemoryPairs, ShapeSpotter, QuickTap, BubbleChoice |
| K1-K4 m3 kihívás (NINCS idő) | 4 | DragSort, PatternFinish, CountCatch, SoundMatch |
| K5-K8 m2 gyakorlás (időalapú OK) | 4 | CategoryRush, SpeedMatch, TrueFalseBlitz, WordChain |
| K5-K8 m3 kihívás (NINCS idő) | 5 | TimelineSlider, FillBlank, MCQ4-Explanation, SortPuzzle, GapFillStory |

---

## Közös konvenciók

- Minden játék `Round`-alapú → komponens egyszerre egy roundot renderel, round-lista végén `onDone(score, total)`.
- Props kontraktus (minimum): `{ rounds: Round[]; color: string; lang: "hu"|"de"|"en"|"ro"; onDone: (score:number, total:number)=>void; onCorrect?:()=>void; onWrong?:()=>void; mode: "m2"|"m3" }`.
- `LocalizedText = { de: string; hu: string; en: string; ro: string }` — négynyelvű tantárgyakhoz. Nyelvi tantárgyaknál `string` (saját nyelv).
- Accessibility: minden interaktív elem `aria-label`-es, Tab navigáció, Enter/Space aktiválás, fókuszgyűrű látható. Minimum tap target **44×44 px**.
- **m3 játékokban a billentyűzet-navigáció kötelező** (nincs időnyomás, a játékos nyugodtan végigmehet tab-bal).
- Animáció: `framer-motion`, m2-ben 300–500 ms, m3-ban 200-300 ms (csendesebb), `prefers-reduced-motion` tisztelve.
- Mobile-first, sticky HUD (score/life). Timer **csak m2-ben**.
- UI stílus: m2 = pop-os feedback, pulzáló színek; m3 = letisztult, komoly, több fehér hely, csendesebb.
- Min. 16 px font; m3 hosszabb szövegeinél 18 px.

---

# K1–K4 (6–10 éves) — 9 játék

## K1–K4 · m2 Gyakorlás (5 játék, időalapú OK)

### 1. TapMatch [m2]
- **Célcsoport:** K1–K4 · **Mód:** m2 Lernen
- **Rövid leírás:** Gyors tap-peléssel párosítja a játékos az egymáshoz tartozó emoji/szó kártyákat két oszlop között, **időre**.
- **Core mechanika:** Bal oszlop 4–6 kép/szó, jobb oszlop ugyanennyi. Tap a bal oldali elemre → kiemelkedik → tap a jobb oldali párjára. Ha helyes: zöld pulzus + pont. Ha rossz: piros shake, pár visszaáll. Timer ketyeg; round kész ha minden pár megvan.
- **Scoring:** +10 helyes pár, −2 téves tap, bónusz +5 ha 0 hibával, +1/s maradék idő. 3 round / session.
- **UI elemek:** (1) Két függőleges oszlop kártyákkal, (2) Fent **timer bar** + streak + score HUD, (3) Alsó progress bar (párok/összes), (4) "Újra" gomb round végén.
- **Subject:** **Agnosztikus** (pl. állat↔élőhely bio, elem↔szimbólum kemia, ország↔zászló geo).

```ts
type TapMatchRound = {
  id: string;
  left:  { id: string; label: LocalizedText; emoji?: string; img?: string }[];
  right: { id: string; label: LocalizedText; emoji?: string; img?: string }[];
  correctPairs: { leftId: string; rightId: string }[];
  timeLimitMs: number;                         // m2: időre megy
};
```

**Grade skálázás:**
- K1: 4 pár, 60s, csak ikonok
- K2: 5 pár, 55s, ikon+címke
- K3: 6 pár, 50s, csak szó
- K4: 6 pár, 45s, közeli jelentésű disztraktorok

---

### 2. MemoryPairs [m2]
- **Célcsoport:** K1–K4 · **Mód:** m2 Lernen
- **Rövid leírás:** Klasszikus memória: lefedett kártyák, a játékos párokat keres fordítgatva, **idő-bonus-szal**.
- **Core mechanika:** 4×3 vagy 4×4 rács lefordított kártyákkal. Tap → fordul. 2 egymás utáni fordítás: ha pár, nyitva marad; ha nem, 800 ms után visszafordul. Round vége ha minden pár megvan.
- **Scoring:** +15 pár, −1 minden hibás fordítás. **Idő-bonus: <30 s → +20**.
- **UI elemek:** (1) Közép: kártyarács, (2) Fent: próbák-számláló + **timer**, (3) Alul: "pár X/Y", (4) Konfetti round végén.
- **Subject:** **Agnosztikus** (kép↔szó, fogalom↔definíció rövidítve).

```ts
type MemoryPairsRound = {
  id: string;
  gridSize: 3 | 4 | 6;
  pairs: { id: string; a: { label: LocalizedText; img?: string }; b: { label: LocalizedText; img?: string } }[];
  timeLimitMs: number;
};
```

**Grade skálázás:**
- K1: 2×3 (3 pár), képek mindkét oldalon
- K2: 2×4 (4 pár), kép↔szó
- K3: 3×4 (6 pár), szó↔szinonima
- K4: 4×4 (8 pár), fogalom↔rövid definíció

---

### 3. ShapeSpotter [m2]
- **Célcsoport:** K1–K4 · **Mód:** m2 Lernen
- **Rövid leírás:** Sok zavaró elem közt a játékos megtalálja a helyes formát/színt/képet, **idő alatt**.
- **Core mechanika:** Egy "keresett" minta megjelenik felül (pl. "piros háromszög", "sejt rajz"). A képernyőn 8–16 véletlen elrendezésű elem lebeg; a user rátap a helyesre. 5 találat / round. Idő-per-item timer.
- **Scoring:** +12 helyes tap, −4 rossz tap. **10 s / item timer**, maradék idő +1/s bónusz.
- **UI elemek:** (1) Fent: "keresett" minta nagyban, (2) Közép: scattered target-mező, (3) Jobb: **timer-kör**, (4) HUD: score + found count.
- **Subject:** **Agnosztikus** (forma geometria / sejttípus bio / hang-betű magyar).

```ts
type ShapeSpotterRound = {
  id: string;
  target: { label: LocalizedText; img?: string; colorHex?: string };
  distractors: { id: string; label?: LocalizedText; img?: string; colorHex?: string; isTarget: boolean }[];
  requiredFinds: number;
  timePerItemMs: number;
};
```

**Grade skálázás:**
- K1: 3×3 grid, szín-különbség, 12s/item
- K2: 4×4, forma-különbség, 10s/item
- K3: 5×5, szín+forma, 8s/item
- K4: 6×6, méret is + 2 odd item egyszerre, 7s/item

---

### 4. QuickTap [m2]
- **Célcsoport:** K1–K4 · **Mód:** m2 Lernen
- **Rövid leírás:** Reakció-játék: villanó opciók közül a helyesre kell lecsapni **mielőtt eltűnik**.
- **Core mechanika:** 3–4 "pálya" vonal. Ikonok görögnek fölülről lefelé, mindegyik 2 s alatt ér le. Néhány helyes (pl. "páros szám", "kemény mássalhangzó"), a többi disztraktor. Tap → ha helyes: +pont; ha rossz vagy kihagyott helyes: −life.
- **Scoring:** +10 helyes tap, −1 life rossz/kihagyott helyes. 3 life, **30 s / round**.
- **UI elemek:** (1) Fent: kritérium ("kattints a magánhangzóra!"), (2) 3–4 pálya rollerrel, (3) 3 szív HUD, (4) **Timer bar**.
- **Subject:** **Agnosztikus** (számosztály math, szófaj nyelv, elem-kategória bio).

```ts
type QuickTapRound = {
  id: string;
  criterion: LocalizedText;
  stream: { id: string; label: LocalizedText; isCorrect: boolean; spawnMs: number }[];
  durationMs: number;
  lives: number;
};
```

**Grade skálázás:**
- K1: 2 pálya, 3s/elem visible, egyszerű kritérium
- K2: 3 pálya, 2.5s
- K3: 3 pálya, 2s, több disztraktor
- K4: 4 pálya, 1.5s, közeli disztraktorok

---

### 5. BubbleChoice [m2]
- **Célcsoport:** K1–K4 · **Mód:** m2 Lernen
- **Rövid leírás:** 4–6 úszó buborék lebeg a képernyőn válaszokkal; a játékos kipukkantja a helyeset **időre**.
- **Core mechanika:** Fent kérdés-sáv. Buborékok lassan feljönnek, jobbra-balra sodródnak (framer-motion). Tap → pukkanás animáció. Ha helyes: +pont, új kérdés. Ha rossz: buborék piros, −life.
- **Scoring:** +10 helyes, −1 life rossz buborék. 5 kérdés / round, **round timer 60 s**.
- **UI elemek:** (1) Fent: kérdés-szalag + timer, (2) Közép: animált buborék-mező, (3) 3 life ikon, (4) Progress dot 5/5.
- **Subject:** **Agnosztikus** (kérdés-válasz bármiből).

```ts
type BubbleChoiceRound = {
  id: string;
  question: LocalizedText;
  bubbles: { id: string; label: LocalizedText; isCorrect: boolean; colorHex?: string }[];
  lives: number;
  timeLimitMs: number;
};
```

**Grade skálázás:**
- K1: 3 buborék (1 helyes), nagyobb elemek
- K2: 4 buborék (1 helyes)
- K3: 5 buborék (1 helyes), hasonló válaszok
- K4: 6 buborék (esetenként 2 helyes), közeli disztraktorok

---

## K1–K4 · m3 Kihívás (4 játék, NINCS idő!)

### 6. DragSort [m3]
- **Célcsoport:** K1–K4 · **Mód:** m3 Herausforderung
- **Rövid leírás:** A játékos elemeket húz a megfelelő kosárba **több kritérium szerint**. **Nincs időkorlát.**
- **Core mechanika:** A képernyő alján 2–4 nagy, címkézett kosár. Fent egy elem kártya jelenik meg — a user drag-eli (touch vagy egér) a helyes kosárba. Helyes → kosár felvillan, új elem érkezik. Rossz → kártya visszapattan. A nehezítés: **minden elemet 100%-ra helyesen kell rendezni** a round-ban, különben round reset (nem egyesével pontoz, hanem **teljes 100% vagy újra**).
- **Scoring:** Csak a **teljes round 100%** ad pontot: +25. Részleges → 0, újrapróbálkozás **korlátlan** (nincs timer).
- **UI elemek:** (1) Felül dobó-zóna az aktív kártyával, (2) Alul 2–4 nagy kosár ikon+címke, (3) "X/10" progress, (4) **"Ellenőriz" gomb** (csak a round végén lő — nincs egyesével feedback).
- **Subject:** **Agnosztikus** (élő/élettelen bio, fém/nemfém kemia, szófajok deutsch/magyar).

```ts
type DragSortRound = {
  id: string;
  bins: { id: string; label: LocalizedText; icon?: string; color?: string }[];
  items: { id: string; label: LocalizedText; img?: string; correctBinId: string }[];
  // NINCS timeLimitMs mező - m3
  requireFullCorrect: true;
};
```

**Grade skálázás:**
- K1: 4 item, 2 kosár, 1 kritérium (kép alapján)
- K2: 6 item, 3 kosár, 1 kritérium
- K3: 8 item, 3 kosár, finomabb disztinkció (pl. emlős / madár / hüllő)
- K4: 10 item, 4 kosár, több hasonló jellemző (pl. szófajok a magyarban)

---

### 7. PatternFinish [m3]
- **Célcsoport:** K1–K4 · **Mód:** m3 Herausforderung
- **Rövid leírás:** Vizuális/szimbolikus sorozat hiányzó elemét kell kiválasztani **+ indokolni miért az**. **Nincs időkorlát.**
- **Core mechanika:** **Kétlépéses MCQ.** Első lépés: "mi a következő elem?" 4 opciós MCQ. Második lépés (csak ha elsőt jól eltalálta): "mi volt a szabály?" — 4 indoklás-opció, **nagyon közeli csalikkal**. Mindkettő helyes kell a pontért.
- **Scoring:** +30 csak ha mindkét lépés jó; első jó + második rossz = 0, újrapróbálkozás (a magyarázat-kérdés újraindul). Nincs timer.
- **UI elemek:** (1) Nagy sequence-sáv slotokkal, (2) ? slot pulzál, (3) 4 option-tile alul, (4) Második lépésnél: "Miért?" panel 4 szabály-opcióval.
- **Subject:** **Agnosztikus** (szimbólum/szám/betű minta).

```ts
type PatternFinishRound = {
  id: string;
  sequence: ({ label: LocalizedText; img?: string } | null)[];
  nextOptions: { id: string; label: LocalizedText; img?: string; isCorrect: boolean }[];
  ruleOptions: { id: string; label: LocalizedText; isCorrect: boolean }[]; // közeli distraktorok
};
```

**Grade skálázás:**
- K1: Egyszerű ismétlés (ABAB), 3 opció, 3 szabály-opció
- K2: Aritmetikai lépés (+2, +3), 4 opció
- K3: Kettős tengely (szín + forma), 4 opció + 4 nagyon közeli szabály
- K4: Összetett szabály (pl. Fibonacci-szerű), 4 opció + indoklásban részben-helyes csalik

---

### 8. CountCatch [m3]
- **Célcsoport:** K1–K4 · **Mód:** m3 Herausforderung
- **Rövid leírás:** Statikus scene; **számold meg a feltételnek eleget tevő elemeket több kritériummal** (pl. "hány kék madár, ami NEM a fán ül?"). **Nincs idő.**
- **Core mechanika:** Tele rajz/scene, a játékos nyugodtan megnézheti (nincs countdown). Kritérium-kártya oldalt. Number stepper / 4 opciós választó. Submit → ha rossz, a kritériumok újra megjelennek, de a válaszok újra lezárulnak. Annyiszor próbálja, ahányszor akarja.
- **Scoring:** +20 pontos találat; ±1 tolerancia → +5; rossz → újra.
- **UI elemek:** (1) **Statikus scene** (NEM mozog, NEM eltűnik!) középen, (2) Kritérium-kártya oldalt (2-3 sor), (3) Number stepper vagy 4 opció alul, (4) Submit.
- **Subject:** **Specifikus** (math-osabb; bio-ban is ok: "hány sejt rendelkezik magvval?").

```ts
type CountCatchRound = {
  id: string;
  sceneAssets: { id: string; img?: string; emoji?: string; attrs: Record<string,string>; pos: { x: number; y: number } }[];
  criteria: { attr: string; match: string | string[]; combine: "AND" | "AND-NOT" }[];
  correctCount: number;
  options?: number[];    // ha choice-alapú, nem stepper
  // NINCS observeMs, NINCS timer — statikus scene
};
```

**Grade skálázás:**
- K1: 1 kritérium (pl. "piros kör"), kevés disztraktor, 5-8 elem
- K2: 2 kritérium AND, 8-12 elem
- K3: 2 kritérium, egyikük AND-NOT (negáció), 12-16 elem
- K4: 3 kritérium (köztük negáció), 16-20 elem, nehéz disztinkciók

---

### 9. SoundMatch [m3]
- **Célcsoport:** K1–K4 · **Mód:** m3 Herausforderung
- **Rövid leírás:** Hangot hall a játékos (TTS vagy asset); **két lépésben** kiválasztja a forrást ÉS a kategóriát. **Nincs idő.**
- **Core mechanika:** Nagy hangszóró gomb fent → tap → hang lejátszódik (**korlátlanul ismételhető**). Alul 3–4 forrás-kép. Helyes választás után jön a második lépés: "mi a kategóriája?" (pl. "háziállat" / "vadállat"). Mindkettő kell a pontért.
- **Scoring:** +25 mindkettő jó első próbára; forrás jó + kategória rossz = 0, újra. Nincs idő, korlátlan ismétlés.
- **UI elemek:** (1) Nagy speaker ikon (korlátlan replay), (2) "▶ Lejátszás" gomb, (3) Első lépés: 3–4 forrás-tile, (4) Második lépés: 2-3 kategória-tile, (5) Score + round progress.
- **Subject:** **Specifikus-barát** (nyelvi tárgyak: magyar, deutsch, english, romana — kiejtés ↔ írott szó; bio állathangok; physik hangszínképek).

```ts
type SoundMatchRound = {
  id: string;
  audio: { text?: string; ttsLang?: "hu"|"de"|"en"|"ro"; assetUrl?: string };
  sourceOptions: { id: string; label: LocalizedText; img?: string; isCorrect: boolean }[];
  categoryOptions: { id: string; label: LocalizedText; isCorrect: boolean }[];
  // NINCS timeLimitMs - m3
};
```

**Grade skálázás:**
- K1: Állathang, 3 forrás + 2 kategória (háziállat / vadállat)
- K2: Hangszer / zörej, 4 forrás + 3 kategória
- K3: Zöngés / zöngétlen beszédhangok, 4+3, közeli csalik
- K4: Nyelvi dialektus / akcentus felismerés + régió-kategória

---

# K5–K8 (11–14 éves) — 9 játék

## K5–K8 · m2 Gyakorlás (4 játék, időalapú OK)

### 10. CategoryRush [m2]
- **Célcsoport:** K5–K8 · **Mód:** m2 Lernen
- **Rövid leírás:** Zúdulnak az elemek; 2–4 kategória-kosárba kell swipe-olni őket gyorsan, **időre**.
- **Core mechanika:** Gyors time-pressured sorting. 30 s / round. Elemek középen pop-oppal, swipe fel/le/bal/jobb a 4 kategóriára (vagy tap egy kosárra). Helyes: pont. Rossz: −3 és flash. 20–30 item cél.
- **Scoring:** +6 helyes, −3 rossz, streak +0.5× per 5. **30 s timer** látható.
- **UI elemek:** (1) Központi item-slot, (2) 4 oldali kosár (top/bot/left/right) címkével, (3) **30 s timer bar**, (4) Score + streak.
- **Subject:** **Agnosztikus** (szófajok, élőlény-csoportok, kémiai kötéstípusok).

```ts
type CategoryRushRound = {
  id: string;
  categories: { id: string; label: LocalizedText; edge: "top"|"bottom"|"left"|"right"; color?: string }[];
  items: { id: string; label: LocalizedText; correctCategoryId: string }[];
  durationMs: number;
};
```

**Grade skálázás:**
- K5: 3 kategória, 30s, 15 item, egyszerű elemek
- K6: 4 kategória, 30s, 20 item
- K7: 4 kategória, 25s, 25 item, közeli kategóriák
- K8: 5 kategória, 25s, 30 item, szakmai disztinkciók

---

### 11. SpeedMatch [m2]
- **Célcsoport:** K5–K8 · **Mód:** m2 Lernen
- **Rövid leírás:** Párosítás kemény időkorláttal és shuffle-lel (gyors reflex-kombó).
- **Core mechanika:** 6 pár egyszerre a képernyőn, kétoszlopos (vagy scatter). A játékos tap-pel jobbat+balt. **45 s / round**. Minden helyes pár eltűnik, shuffle 10 másodpercenként.
- **Scoring:** +8 pár, streak bonus +2/pár, −2 mismatched klik. Időben minden pár = round clear +25 bónusz.
- **UI elemek:** (1) Két oszlop / scatter-mező kártyákkal, (2) Nagy **timer-gyűrű**, (3) Streak-szám, (4) Live score.
- **Subject:** **Agnosztikus** (fogalom↔definíció; szó↔fordítás nyelvi; képlet↔név kemia).

```ts
type SpeedMatchRound = {
  id: string;
  pairs: { id: string; a: LocalizedText; b: LocalizedText }[];
  durationMs: number;
  shuffleEveryMs?: number;
};
```

**Grade skálázás:**
- K5: 5 pár, 60s, rövid címkék
- K6: 6 pár, 55s
- K7: 7 pár, 50s, hosszabb definíciók
- K8: 8 pár, 45s, szaknyelv, könnyen összekeverhető

---

### 12. TrueFalseBlitz [m2]
- **Célcsoport:** K5–K8 · **Mód:** m2 Lernen
- **Rövid leírás:** Gyors ütemben érkeznek állítások; a játékos "IGAZ" / "HAMIS" választással reagál **idő alatt**.
- **Core mechanika:** Kártya-stack középen. **4 s / állítás**. 2 gomb (bal IGAZ, jobb HAMIS) vagy swipe left/right. Helyes: kártya lerepül + streak nő. Rossz: piros flash, streak reset. 12 állítás / round.
- **Scoring:** +8 helyes, streak×1.25 3+, idő-bonus +3 ha <2 s alatt. Nincs "élet", de <50% rate = round end warning.
- **UI elemek:** (1) Központi kártya állítással, (2) Streak láng jobb felső, (3) Bal/Jobb IGAZ/HAMIS gomb, (4) **12-es slot-progress + per-item timer**.
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

**Grade skálázás:**
- K5: Rövid állítások, egyszerű tények, 4s/item
- K6: Hosszabb, több figyelmet igénylő, 4s
- K7: Összetett mondatok, finom részletekben hamis, 3.5s
- K8: Szaknyelvi, több tagmondatos, kettős tagadás lehetséges, 3.5s

---

### 13. WordChain [m2]
- **Célcsoport:** K5–K8 · **Mód:** m2 Lernen
- **Rövid leírás:** Láncot kell építeni: minden új szó/fogalom az előző utolsó betűjével/kategóriájával kapcsolódik, **lépésenkénti időkorláttal**.
- **Core mechanika:** Fent egy indító szó/fogalom. Alul 4 opció — csak egy folytatja a láncot szabályosan. Tap → lánc nyúlik jobbra, új indító lesz. **5-6 s / lépés**. 6 láncszem cél.
- **Scoring:** +12 helyes szem, teljes lánc +30 bónusz, +3 gyors (<3s). Hibánál a szem nem jön létre, round folytatható, de 3 hiba = vég.
- **UI elemek:** (1) Horizontális lánc-sáv scroll-lal, (2) Alul 4 option-tile, (3) "Rule" chip fent (pl. "folyik → új betű = B"), (4) **Per-step timer bar** + 3 hiba HUD.
- **Subject:** **Agnosztikus** (magyar/deutsch: szólánc utolsó betűvel; bio: táplálékháló; kemia: reakciólánc; geschichte: oksági láncolat).

```ts
type WordChainRound = {
  id: string;
  rule: LocalizedText;
  start: { label: LocalizedText };
  steps: {
    options: { id: string; label: LocalizedText; isValid: boolean }[];
    timeLimitMs: number;
  }[];
};
```

**Grade skálázás:**
- K5: Tematikus szűk pool, 6s/lépés, 4 opció
- K6: Vegyes téma, 5s/lépés
- K7: Nyelvtani kritérium (pl. csak főnév), 4.5s
- K8: Idegen nyelv / szemantikai kritérium, 4s

---

## K5–K8 · m3 Kihívás (5 játék, NINCS idő!)

### 14. TimelineSlider [m3]
- **Célcsoport:** K5–K8 · **Mód:** m3 Herausforderung
- **Rövid leírás:** Történelmi/tudományos események **2D tengelyen** való elhelyezése (pl. időtengely + régió vagy jelentőség). **Nincs idő.**
- **Core mechanika:** Vízszintes slider × 2D rács (X = idő, Y = régió vagy jelentőség). Drag az esemény-kártyát a helyes cellára. **Minden eseménynek a helyes pozícióban kell lennie — 100% vagy újra.** Gondolkodási idő korlátlan, slider szabadon mozgatható.
- **Scoring:** Csak 100% pozíció esetén ad pontot: +40. Részleges → 0, újrapróbálkozás.
- **UI elemek:** (1) Nagy esemény-kártya képpel, (2) **2D rács** tengelycímkékkel (x = időszámos slider, y = kategóriák), (3) Esemény-stack oldalt/alul, (4) "Ellenőriz" gomb + indoklás-panel opcionális.
- **Subject:** **Specifikus** (geschichte elsődleges; bio: evolúciós időszakok; physik: tudományos felfedezések).

```ts
type TimelineSliderRound = {
  id: string;
  axes: {
    x: { label: LocalizedText; rangeMin: number; rangeMax: number };   // idő
    y?: { label: LocalizedText; values: (string | number)[] };          // régió/jelentőség
  };
  events: {
    id: string;
    title: LocalizedText;
    img?: string;
    correctX: number;
    correctY?: string | number;
    yearTolerancePct?: number;
  }[];
  // NINCS timeLimitMs - m3
};
```

**Grade skálázás:**
- K5: 4 kártya, csak 1D idő, ±10% tolerancia
- K6: 5 kártya, 2D (idő + régió), ±7%
- K7: 6 kártya, 2D (idő + jelentőség), ±5%
- K8: 8 kártya, 2D + kötelező indoklás-MCQ, ±3%

---

### 15. FillBlank [m3]
- **Célcsoport:** K5–K8 · **Mód:** m3 Herausforderung
- **Rövid leírás:** Szöveges kitöltés; minden rést **word-bank** chipjéből kell behúzni, majd **indoklást is választani**. **Nincs idő.**
- **Core mechanika:** Mondat-panel ___ résekkel. Alul word-bank chippek (több mint amennyi rés — disztraktorokkal). Drag-chip a résbe. **Minden rés helyes kell** a pontért, majd egy second-step: "miért ez a szó?" — 4 indoklás-opció, közeli csalikkal. Submit-ra mindkettő értékelve.
- **Scoring:** +35 csak ha mindkét lépés 100%; első jó + indoklás rossz = 0, újra.
- **UI elemek:** (1) Olvasható mondat-panel (min. 18 px) szaggatott-kontúrú résekkel, (2) Word-bank lent, (3) Submit gomb, (4) Second step: indoklás-MCQ panel.
- **Subject:** **Agnosztikus** (nyelvi: hiányos mondat; bio: definíció; physik: képlet — "F = m · ___").

```ts
type FillBlankRound = {
  id: string;
  sentences: {
    id: string;
    template: LocalizedText;
    blanks: { index: number; correct: string; alternatives?: string[] }[];
    wordBank: string[];                    // disztraktorokkal
    explanationOptions: { label: LocalizedText; isCorrect: boolean }[];  // közeli!
  }[];
  // NINCS timeLimitMs
};
```

**Grade skálázás:**
- K5: 2 rés, 4-word bank, rövid mondat, 2-opciós indoklás
- K6: 3 rés, 6-word bank, 3-opciós indoklás
- K7: 3 rés, 8-word bank (nyelvtanilag helyes de szemantikailag rossz csalikkal), 4-opciós indoklás
- K8: 4 rés, 10-word bank, kötelező indoklás + magyarázat-mélység

---

### 16. MCQ4-Explanation [m3]
- **Célcsoport:** K5–K8 · **Mód:** m3 Herausforderung
- **Rövid leírás:** Klasszikus 4-válaszos kvíz, **+ kötelező második lépés: "Miért?" indoklás-MCQ**. **Nincs idő.**
- **Core mechanika:** Kérdés fent (lehet kép+szöveg), 4 válasz alul. Válaszadás után: a helyes válasz látszik, de egy második kérdés jelenik meg: "Miért ez a helyes?" 4 indoklás-opcióval — az indoklások **nagyon közeliek**, néhány részben helyes, csak 1 teljesen. Mindkettő kell a pontért.
- **Scoring:** +30 csak ha mindkét lépés jó első próbára. Válasz jó + magyarázat rossz = 0, újrapróbálkozás csak a magyarázat-lépésre. **Nincs timer.**
- **UI elemek:** (1) Kérdés-kártya képpel, (2) 4 választó-tile, (3) Magyarázat-lépés: 4 indoklás-tile nagyon közeli opciókkal, (4) Progress 1/6 + score.
- **Subject:** **Agnosztikus** (minden tantárgy).

```ts
type MCQ4ExplanationRound = {
  id: string;
  questions: {
    id: string;
    prompt: LocalizedText;
    img?: string;
    answerOptions: { id: string; label: LocalizedText }[];     // 4 db
    correctAnswerId: string;
    explanationOptions: { id: string; label: LocalizedText; isCorrect: boolean }[]; // 4 db, közeli
  }[];
  // NINCS timeLimitMs - m3
};
```

**Grade skálázás:**
- K5: Egyszerű ismeret, 2 távol eső csali + 2 közeli az indoklásnál
- K6: Megértés, 3 közeli csali
- K7: Alkalmazás, indoklások csak árnyalatnyit különböznek
- K8: Elemzés, indoklások közül 2 részben helyes, 1 teljesen — a teljest kell

---

### 17. SortPuzzle [m3]
- **Célcsoport:** K5–K8 · **Mód:** m3 Herausforderung
- **Rövid leírás:** 5–8 elem rendezése **két dimenzió mentén** (pl. időrend + régió). **Nincs idő.**
- **Core mechanika:** 2D grid fejlécekkel (x: egyik tengely, y: másik). Kártya-stack oldalt/alul. Drag minden kártyát a helyes cellára. Submit → minden pozíció értékelve. **100% kell vagy újra** — a rosszak pirossal jelölve, de a helyesek maradnak (partial-retention).
- **Scoring:** +45 csak 100% pozíció; részleges → 0, újrapróbálkozás korlátlan.
- **UI elemek:** (1) **2D rács** fejlécekkel a 2 dimenzióra, (2) Kártya-stack oldalt, (3) Cellák highlight hover-re, (4) "Ellenőriz" gomb + piros-jelölés hibákra.
- **Subject:** **Agnosztikus** (geschichte: évek × régió; bio: tápláléklánc × szint; kemia: reakció-fázisok × hőmérséklet; informatika: algoritmus × komplexitás).

```ts
type SortPuzzleRound = {
  id: string;
  dimensions: {
    x: { label: LocalizedText; values: (string | number)[] };
    y: { label: LocalizedText; values: (string | number)[] };
  };
  items: {
    id: string;
    label: LocalizedText;
    img?: string;
    correctX: string | number;
    correctY: string | number;
  }[];
  // NINCS timeLimitMs - m3
};
```

**Grade skálázás:**
- K5: 2×2 grid (4 kártya), egyszerű dimenziók
- K6: 2×3 grid (6 kártya)
- K7: 3×3 grid (9 kártya)
- K8: 3×4 vagy 4×4 grid, szaknyelvi tartalom

---

### 18. GapFillStory [m3]
- **Célcsoport:** K5–K8 · **Mód:** m3 Herausforderung
- **Rövid leírás:** Hosszabb narratív szöveg (100–700 szó) **5–8 hiánnyal**, kontextus-alapú kitöltéssel. **Nincs idő.** Ez kognitív szempontból a legnehezebb.
- **Core mechanika:** Scrollozható story-panel (olvasható tipográfia), a réseket végiglépegetve töltjük ki dropdown-ból vagy word-bank chipből. Minden rés kontextusra épít, a sorrend is fontos. Submit → globális validálás; részleges helyes esetén az adott slot újra szabad, a helyesek maradnak.
- **Scoring:** +50 csak 100%; részlegesen pontozható is (+8/rés), de a kihívás a teljes elsajátítás. Hint elérhető (−4 pont): első helyes betűt mutatja.
- **UI elemek:** (1) **Scrollozható story-panel** (olvasható 18 px), (2) Inline kitöltő-slotok (szaggatott kontúr) dropdown-nal, (3) Word-bank chippek oldalt kategória-színezéssel, (4) Alul Submit+Hint gomb.
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
    category?: string;
  }[];
  // NINCS timeLimitMs - m3
};
```

**Grade skálázás:**
- K5: 200 szó, 4 gap, csak egyszerű szókincs
- K6: 350 szó, 5 gap, egy-két szaknyelvi
- K7: 500 szó, 6 gap, fogalom + év + név keveredve
- K8: 700+ szó, 8 gap, tudományos szöveg + nagyon közeli disztraktorok (hasonló nevek, ±évszámok)

---

## Keresztellenőrző tábla — mechanikák egyediek

| Mechanika-család | m2 (időalapú) | m3 (nincs idő) |
|-------------------|---------------|----------------|
| Villanó opciók / reakció-tap | QuickTap, BubbleChoice | — soha |
| Gyors pár-match időre | TapMatch, MemoryPairs, SpeedMatch | — soha |
| Igaz/hamis özön | TrueFalseBlitz | — soha |
| Eső-kategória / swipe-sort | CategoryRush | — soha |
| Szólánc időre | WordChain | — soha |
| Forma-keresés időre | ShapeSpotter | — soha |
| Kosárba-rendezés 100% követelménnyel | — soha | DragSort |
| Kétlépcsős MCQ (válasz + kötelező indoklás) | — soha | PatternFinish, MCQ4-Explanation, SoundMatch |
| Multi-kritérium rendezés | — soha | SortPuzzle, TimelineSlider |
| Hosszabb szöveg kitöltés | — soha | FillBlank, GapFillStory |
| Komplex számlálás szűréssel (statikus scene) | — soha | CountCatch |

Egyetlen mechanika sincs megosztva a két mód között. m3 játékok közül **egyikben sincs timer, gyorsasági bonus, countdown, leeső elem vagy per-item visible window**.

---

## Összegzés (áttekintő táblázat)

| # | Név | Korcsoport | Mód | Subject | Fő mechanika |
|---|-----|-----------|-----|---------|--------------|
| 1 | TapMatch | K1–K4 | **m2** | Agnosztikus | Tap párosítás időre |
| 2 | MemoryPairs | K1–K4 | **m2** | Agnosztikus | Memória időre |
| 3 | ShapeSpotter | K1–K4 | **m2** | Agnosztikus | Visual search időre |
| 4 | QuickTap | K1–K4 | **m2** | Agnosztikus | Villanó reakció |
| 5 | BubbleChoice | K1–K4 | **m2** | Agnosztikus | Buborék-tap időre |
| 6 | DragSort | K1–K4 | **m3** | Agnosztikus | 100% kosárba-rendezés |
| 7 | PatternFinish | K1–K4 | **m3** | Agnosztikus | Sorozat + indoklás |
| 8 | CountCatch | K1–K4 | **m3** | Math-osabb | Multi-kritérium számlálás |
| 9 | SoundMatch | K1–K4 | **m3** | Nyelvi-barát | Audio forrás + kategória |
| 10 | CategoryRush | K5–K8 | **m2** | Agnosztikus | Gyors sort swipe-pal |
| 11 | SpeedMatch | K5–K8 | **m2** | Agnosztikus | Gyors pár shuffle-lel |
| 12 | TrueFalseBlitz | K5–K8 | **m2** | Agnosztikus | Igaz/Hamis időre |
| 13 | WordChain | K5–K8 | **m2** | Agnosztikus | Lánc-építés időre |
| 14 | TimelineSlider | K5–K8 | **m3** | Geschichte+ | 2D idő-régió rendezés |
| 15 | FillBlank | K5–K8 | **m3** | Agnosztikus | Kitöltés + indoklás |
| 16 | MCQ4-Explanation | K5–K8 | **m3** | Agnosztikus | MCQ + kötelező magyarázat |
| 17 | SortPuzzle | K5–K8 | **m3** | Agnosztikus | Multi-dim rendezés |
| 18 | GapFillStory | K5–K8 | **m3** | Agnosztikus | Hosszú szövegértés |

**Közös típus-keret:**
```ts
type AstroGameProps<R> = {
  rounds: R[];
  color: string;
  lang: "hu" | "de" | "en" | "ro";
  mode: "m2" | "m3";                // meghatározza, hogy timer engedélyezett-e
  onDone: (score: number, total: number) => void;
  onCorrect?: () => void;
  onWrong?: () => void;
};

type LocalizedText = { de: string; hu: string; en: string; ro: string };
```

**Motor-javaslat (shared engines):**
- `TimedChoiceEngine` (m2-only) — TapMatch, QuickTap, BubbleChoice, TrueFalseBlitz
- `TimedSortEngine` (m2-only) — CategoryRush, SpeedMatch
- `DeepReasonEngine` (m3-only) — PatternFinish, MCQ4-Explanation, SoundMatch (kétlépcsős választás + indoklás)
- `GridSortEngine` (m3-only) — DragSort, SortPuzzle, TimelineSlider (drag-to-cell, 100% követelmény)
- `TextFillEngine` (m3-only) — FillBlank, GapFillStory

Az engine-szint már **biztosítja**, hogy m2-ben a timer kötelezően fut, m3-ban pedig a timer-mező nem is része az API-nak.

**Data pool struktúra javaslat:**
`lib/astro/games/<gameKey>/<subject>.ts` fájlok, pl. `lib/astro/games/tapMatch/biologie.ts` exportál `TapMatchRound[]`-t gradenként (K1, K2, K3, K4).

**Sziget-allokáció gyors minta (9 sziget × 2 game slot):**
Minden sziget kap 1 m2 (gyakorlás) + 1 m3 (kihívás) játékot. A m1 marad "explore". Így 9 szigethez 18 játék-allokáció kell, épp annyi, amennyit definiáltunk.

**Következő lépés (ha később implementáció jön):**
1. Az 5 közös engine implementálása (timed vs deep szeparáltan, hogy a m2/m3 szabály **technikailag kényszerített** legyen, ne csak dokumentált).
2. Tantárgyanként pool-generálás (biologie/kemia/physik/sachkunde/geographie/geschichte/informatika + nyelvi).
3. Sziget config (m2/m3 game + pool párosítás).
