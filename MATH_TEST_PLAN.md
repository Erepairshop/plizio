# Fejlesztési Terv: Iskolai Dolgozat Feladattípusok

## Cél

A jelenlegi rendszerben minden kérdés egy önálló feladat (egyetlen számítás → egyetlen válasz).
A cél: **igazi iskolai dolgozat stílusú feladatok**, ahol egy feladat több részkérdésből áll,
pontosan úgy, ahogy egy nyomtatott Mathe-Klassenarbeit néz ki (pl. Hauschka Verlag stílus).

---

## Referencia képek stílusa

A cél UI a következő elemekből áll:
- Fehér papír, halvány vonalazás háttérrel
- Bal oldali piros margóvonal
- Körbe zárt feladatszámok (① ② ③ …)
- Minden feladatnál: cím + pont (`/ 8 P.`) jobb oldalon
- Rácsos cellák írásbeli számoláshoz
- Vonalak a kitöltendő válaszokhoz
- Mobilon is jól néz ki (overflow-x: scroll a rácsokhoz)

---

## Érintett fájlok

```
components/
  ModernPaperTest.tsx          ← papír keretező wrapper (meglévő)
  MathQuestionDisplay.tsx      ← jelenlegi kérdésmegjelenítő (meglévő)
  SchoolTaskBlock.tsx          ← ÚJ: egy feladatblokk wrapper
  task-types/
    KopfrechnenTask.tsx        ← ÚJ
    SchriftlichTask.tsx        ← ÚJ
    HianyTask.tsx              ← ÚJ (Welche Zahlen fehlen?)
    ZahlenreiheTask.tsx        ← ÚJ
    SachaufgabeTask.tsx        ← ÚJ
    TabelleTask.tsx            ← ÚJ
lib/
  mathCurriculum.ts            ← generátorok bővítése (meglévő)
  schoolTaskGenerator.ts       ← ÚJ: feladatblokk generátor
app/mathtest/page.tsx          ← integráció (meglévő)
```

---

## 1. Adatstruktúra

### Új típusok (`lib/schoolTaskGenerator.ts`)

```typescript
// Egy feladatblokkban lévő részkérdés
export type SubQuestion = {
  id: string;           // pl. "kopf_0", "schr_1"
  answer: number | string;
  points: number;
};

// Feladatblokk típusok
export type TaskType =
  | 'kopfrechnen'    // fejben számolás
  | 'schriftlich'    // írásbeli rácsos
  | 'hiany'          // hiányzó számok
  | 'zahlenreihe'    // számsorok folytatása
  | 'sachaufgabe'    // szöveges feladat
  | 'tabelle';       // táblázat kitöltése

export type SchoolTaskBlock = {
  id: string;
  type: TaskType;
  title: string;           // pl. "Kopfrechnen.", "Rechne schriftlich."
  totalPoints: number;
  subQuestions: SubQuestion[];
  // type-specifikus adatok:
  data: KopfrechnenData | SchriftlichData | HianyData | ZahlenreiheData | SachaufgabeData | TabelleData;
};

// Answers state: kulcs = subQuestion.id, érték = felhasználó által beírt szám/szöveg
export type SchoolTaskAnswers = Record<string, string | number>;
```

### Feladatblokk adatok

```typescript
// KOPFRECHNEN
export type KopfrechnenItem = {
  expr: string;          // pl. "6 · 7", "___ · 2 = 120"
  answer: number;
  hasMissing: boolean;   // ha true: ___ van a kifejezésben
};
export type KopfrechnenData = { items: KopfrechnenItem[] };

// SCHRIFTLICH
export type SchriftlichItem = {
  a: number;
  b: number;
  op: '+' | '-' | '·' | ':';
  result: number;
};
export type SchriftlichData = { items: SchriftlichItem[] };

// HIÁNY (Welche Zahlen fehlen?)
export type HianyItem = {
  topRow: (number | null)[];     // null = hiányzó cella
  addRow: (number | null)[];
  op: '+' | '-';
  resultRow: (number | null)[];
  // a null cellák mindegyike egy SubQuestion-t generál
};
export type HianyData = { items: HianyItem[] };

// ZAHLENREIHE
export type ZahlenreiheItem = {
  given: number[];               // adott számok
  blanks: number;                // hány számot kell folytatni
  answers: number[];             // a helyes folytatás
  rule: string;                  // pl. "+50", "×2", "−11"
};
export type ZahlenreiheData = { rows: ZahlenreiheItem[] };

// SACHAUFGABE
export type SachaufgabeItem = {
  text: string;                  // feladatszöveg
  calcSpaceLines: number;        // számoláshoz hány sor (alapértelmezett: 3)
  answerUnit: string;            // pl. "€", "Buntstifte", "km"
  answer: number | string;
};
export type SachaufgabeData = { items: SachaufgabeItem[] };

// TABELLE
export type TabelleData = {
  headers: string[];             // oszlopfejlécek, "___ Lutscher" = kitöltendő
  rows: {
    label: string;
    cells: (string | null)[];    // null = kitöltendő
    answers: (string | null)[];  // null = nem kitöltendő
  }[];
};
```

---

## 2. Generátor (`lib/schoolTaskGenerator.ts`)

```typescript
export function generateSchoolTest(grade: number, countryCode: string): SchoolTaskBlock[] {
  // Visszaad 5-6 feladatblokkot osztálynak és országnak megfelelően
  // Pl. 4. osztály:
  return [
    generateKopfrechnen(grade, countryCode),    // 8 pont
    generateSchriftlich(grade, countryCode),    // 6 pont
    generateHiany(grade, countryCode),          // 5 pont
    generateZahlenreihe(grade, countryCode),    // 3 pont
    generateSachaufgabe(grade, countryCode),    // 5 pont
    generateTabelle(grade, countryCode),        // 3 pont
  ];
}
```

### Generátor szabályok osztályonként

**1-2. osztály:**
- Kopfrechnen: összeadás/kivonás 20-ig ill. 100-ig
- Schriftlich: 2 jegyű számok
- Zahlenreihe: +2, +5, +10 lépések
- Sachaufgabe: egyszerű, 1 művelet

**3-4. osztály:**
- Kopfrechnen: szorzás/osztás (Einmaleins), hiányzó tényezők
- Schriftlich: 3 jegyű számok, összeadás + kivonás
- Hiány: + és - rácsos feladatok hiányzó cellákkal
- Zahlenreihe: változó lépés (pl. +50, ×2)
- Sachaufgabe: 2 lépéses feladatok
- Tabelle: ár × darab táblázat

**5-6. osztály:**
- Schriftlich: 4 jegyű + tizedes törtek
- Sachaufgabe: %, törtszámok

**7-8. osztály:**
- Kopfrechnen: hatványok, gyökök
- Sachaufgabe: egyenletek, lineáris függvények

---

## 3. Komponensek

### `SchoolTaskBlock.tsx` (wrapper)

```tsx
interface Props {
  block: SchoolTaskBlock;
  answers: SchoolTaskAnswers;
  onChange: (subQuestionId: string, value: string | number) => void;
  isGrading: boolean;
}

// Renderel:
// - körszámos fejléc + cím + pontszám
// - a megfelelő task-type komponenst
// - jobb oldali pont-doboz ("/8 P.")
```

### `KopfrechnenTask.tsx`

```tsx
// Grid elrendezés: 3-4 oszlop mobilon 2
// Minden item: "6 · 7 = [___]" vagy "[___] · 2 = 120"
// Input: number type, inputmode="numeric", width: 48px
// Vonalazott aláhúzás stílus (border-bottom only)
```

### `SchriftlichTask.tsx`

```tsx
// Rácsos megjelenítés: CSS Grid vagy HTML Table
// Minden szám egy cellában (digit-by-digit)
// Eredmény sor: border-top: 2px solid
// Operátor (+/-) bal oldali cellában
// Input cellák: border-less, csak a font kék/accent színű
// Mobile: overflow-x: auto wrapper
// Fontos: a felhasználó az EGÉSZ eredményt beírja (nem digit-by-digit)
//   → 1 input mező az eredmény sorban, középre igazítva
```

### `HianyTask.tsx`

```tsx
// Ugyanolyan rácsos mint SchriftlichTask
// DE: néhány cella üres (hiányzó) → input mező
// A hiányzó cellák lehetnek: felső sor, alsó sor (összeadandó), vagy eredmény
```

### `ZahlenreiheTask.tsx`

```tsx
// Vízszintes elrendezés: szám → nyíl → szám → nyíl → [___]
// Nyilak: "→" szövegként vagy SVG
// Adott számok: félkövér, fix
// Hiányzó cellák: input, border-bottom stílus
// Mobile: flex-wrap allowed
```

### `SachaufgabeTask.tsx`

```tsx
// Feladatszöveg: kézírás-szerű betűtípus (Patrick Hand), kék keret bal oldalt
// Számolási terület: rácsos háttérrel, "Platz zum Rechnen:" felirat
// Antwort sor: "Antwort: _______________ [unit]"
// Input: teljes szélességű, border-bottom only
```

### `TabelleTask.tsx`

```tsx
// HTML table, border: 1.5px solid
// Fejléc sor: szürke háttér, félkövér
// Kitöltendő cellák: input, transparent background
// Adott cellák: normál szöveg
// Ha oszlopfejléc hiányzó: input a header cellában is
```

---

## 4. Stílus (CSS / Tailwind)

### Papír alap (már megvan `ModernPaperTest.tsx`-ben, de ellenőrizd):

```css
/* Vonalazott háttér */
background-image: repeating-linear-gradient(
  transparent, transparent 27px,
  rgba(100,149,237,0.2) 27px, rgba(100,149,237,0.2) 28px
);

/* Piros margóvonal */
.paper::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0; left: 56px;
  width: 2px;
  background: rgba(220,100,100,0.4);
}
```

### Feladatblokk fejléc:

```css
.task-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.task-num {
  width: 26px; height: 26px;
  border: 2px solid #1a1a2e;
  border-radius: 50%;
  font-weight: 900; font-size: 13px;
  display: flex; align-items: center; justify-content: center;
}

.task-points {
  margin-left: auto;
  font-size: 11px; color: #999;
  border: 1px solid #ddd; border-radius: 10px;
  padding: 1px 8px; font-weight: 700;
}
```

### Inputok (kézírás érzés):

```css
/* Minden input egyforma stílus */
input[type="number"], input[type="text"] {
  font-family: 'Patrick Hand', cursive;  /* vagy Caveat */
  font-size: 15px;
  color: #4f46e5;  /* accent/kék */
  border: none;
  border-bottom: 1.5px solid #1a1a2e;
  background: transparent;
  text-align: center;
  outline: none;
}

/* Helyes válasz (grading után) */
input.correct { color: #22c55e; }
input.wrong   { color: #ef4444; text-decoration: line-through; }
```

---

## 5. Integráció `page.tsx`-be

### State változások:

```typescript
// Meglévő mellé:
const [schoolTasks, setSchoolTasks] = useState<SchoolTaskBlock[]>([]);
const [schoolAnswers, setSchoolAnswers] = useState<SchoolTaskAnswers>({});
```

### `handleStartMultiThemeTest` módosítás:

```typescript
// Ha a grade 1-4 között van → school test mód
if (grade <= 4) {
  const tasks = generateSchoolTest(grade, country.code);
  setSchoolTasks(tasks);
  setSchoolAnswers({});
  setGameState('playing');
  return;
}
// 5-8 osztály: marad a jelenlegi MCQ rendszer
```

### Playing state renderelés:

```tsx
{schoolTasks.length > 0 ? (
  // ÚJ: SchoolTest mód
  schoolTasks.map((block, i) => (
    <SchoolTaskBlock
      key={block.id}
      block={block}
      answers={schoolAnswers}
      onChange={(id, val) => setSchoolAnswers(prev => ({ ...prev, [id]: val }))}
      isGrading={isGrading}
    />
  ))
) : (
  // Meglévő MCQ kérdések
  questions.map((question, qi) => (...))
)}
```

### Pontozás school test módban:

```typescript
function gradeSchoolTest(tasks: SchoolTaskBlock[], answers: SchoolTaskAnswers) {
  let earned = 0;
  let total = 0;
  tasks.forEach(block => {
    block.subQuestions.forEach(sq => {
      total += sq.points;
      const userAnswer = answers[sq.id];
      if (userAnswer !== undefined && String(userAnswer).trim() === String(sq.answer).trim()) {
        earned += sq.points;
      }
    });
  });
  return { earned, total, percentage: Math.round((earned / total) * 100) };
}
```

---

## 6. Lokalizáció

A feladattípus címek az `ui` objektumból jönnek (`lib/mathLocale.ts`):

```typescript
// Hozzáadandó fordítások:
schoolTaskTitles: {
  kopfrechnen: {
    de: 'Kopfrechnen.',
    en: 'Mental Math.',
    hu: 'Fejben számolj!',
    ro: 'Calcul mental.',
  },
  schriftlich: {
    de: 'Rechne schriftlich.',
    en: 'Written Calculation.',
    hu: 'Számolj írásban!',
    ro: 'Calculează în scris.',
  },
  hiany: {
    de: 'Welche Zahlen fehlen? Ergänze sie.',
    en: 'Which numbers are missing?',
    hu: 'Melyik számok hiányoznak?',
    ro: 'Ce numere lipsesc?',
  },
  zahlenreihe: {
    de: 'Setze die Zahlenreihen fort.',
    en: 'Continue the number sequences.',
    hu: 'Folytasd a számsorokat!',
    ro: 'Continuă șirurile de numere.',
  },
  sachaufgabe: {
    de: 'Sachaufgaben.',
    en: 'Word Problems.',
    hu: 'Szöveges feladatok.',
    ro: 'Probleme.',
  },
  tabelle: {
    de: 'Ergänze alle Lücken in der Tabelle.',
    en: 'Fill in the table.',
    hu: 'Töltsd ki a táblázatot!',
    ro: 'Completează tabelul.',
  },
}
```

---

## 7. Implementációs sorrend (ajánlott)

1. `lib/schoolTaskGenerator.ts` — adatstruktúra + generátorok (4. osztály, DE)
2. `components/SchoolTaskBlock.tsx` — wrapper komponens
3. `components/task-types/KopfrechnenTask.tsx`
4. `components/task-types/SchriftlichTask.tsx`
5. `components/task-types/ZahlenreiheTask.tsx`
6. `components/task-types/SachaufgabeTask.tsx`
7. `components/task-types/TabelleTask.tsx`
8. `components/task-types/HianyTask.tsx`
9. Integráció `page.tsx`-be
10. Pontozás + grading animáció
11. Lokalizáció kibővítése (EN, HU, RO)
12. Osztályok 1-3 generátorai

---

## 8. Fontos szempontok

- **Ne törj meg semmit**: a meglévő MCQ rendszer maradjon érintetlen, a school test egy párhuzamos ág
- **Mobile first**: minden komponensnél teszteld 375px szélességen
- **Rácsos írásbeli**: `overflow-x: auto` wrapperbe tedd, hogy moblon ne törjön el az oldal
- **Font**: Google Fonts `Patrick Hand` vagy `Caveat` a kézírás érzéshez — már importálva van-e? Ha nem, add hozzá
- **Validáció**: szám inputoknál `inputmode="numeric"`, tizedes törteknél `inputmode="decimal"`
- **Tab navigáció**: Enter/Tab billentyűvel lehessen a következő mezőre ugrani

---

## 9. Tesztelési ellenőrzőlista

- [ ] 4. osztály DE: mind a 6 feladattípus megjelenik
- [ ] Mobilon (375px): nem törik el semmi, rácsos feladatok görgethetők
- [ ] Minden input kitölthető, tab-bal váltható
- [ ] Grading: helyes → zöld, helytelen → piros az adott input mezőben
- [ ] Pontszám helyesen számolódik
- [ ] "Abgaben" gomb csak ha minden SubQuestion ki van töltve (vagy explicit engedélyezhető részleges beadás)
- [ ] 1. és 2. osztálynál egyszerűbb feladatok generálódnak
