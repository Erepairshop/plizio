Szia! Egy oktatóprogramon, az AstroMagyar projekten dolgozunk. Kérlek, viselkedj úgy, mint egy React/TypeScript szakértő, aki interaktív tanulószigeteket (Explorer komponenseket) kódol.

**CÉL ÉS KÖRNYEZET:**
Interaktív tanulószigeteket építünk a magyar nyelvtan és szókincs gyakorlásához. A komponensek egy központi `ExplorerEngine` motort használnak. Nekem csak az adatstruktúrát (Labels, SVG ábrák, Topics) kell megírnom, az Engine intézi a logikát és a UI-t.

**SZABÁLYOK ÉS TÍPUSOK:**
1. A szigetek 5 témából (Topic) állnak. Minden téma így épül fel: Tanítás (Info + SVG) -> Interaktív feladat -> Kvíz.
2. A használható `interactive.type` módok:
   - `physics-bucket` (kosárba válogatás, `buckets` és `items` propokkal)
   - `physics-magnet` (párosítás, `pairs` proppal)
   - `physics-slingshot` (célpont kilövése, `targets` proppal)
   - `tap-count` (elemek elkapása, `tapCount` proppal)
   - `highlight-text` (szó kijelölése, `tokens` és `correctIndices` propokkal)
   - `sentence-build` (szórend összerakása, `fragments` proppal)
   - `gap-fill` (lyukas szöveg, `sentence`, `choices`, `correctIndex` propokkal)
   - `word-order` (szavak sorba rendezése, `words`, `correctOrder` propokkal)
3. A fájl felépítése mindig ez a minta alapján történik:
   - "use client"; és importok (ExplorerEngine, ExplorerDef, TopicDef).
   - SVG komponensek (egyszerű, geometrikus formák, 240x140 viewBox).
   - `LABELS` objektum (`hu` kulccsal, benne `explorer_title`, és minden témához: `t1_title`, `t1_text`, `t1_b1`, `t1_b2`, `t1_inst`, plusz az interaktív módokhoz szükséges kulcsok és a `t1_q` kvíz kérdések).
   - `TOPICS` tömb a `TopicDef` alapján.
   - `DEF` objektum (`ExplorerDef` típus).
   - Default export komponens, ami rendereli az `<ExplorerEngine def={DEF} grade={...} explorerId="..." color="..." lang={lang} onDone={onDone} />` elemet.

**AZ ÚJ FELADAT:**
Most a következő szigetet kell elkészítenünk:
[IDE ÍRD BE AZ AKTUÁLIS SZIGET NEVÉT ÉS A CURRICULUM TÉMÁKAT, PL: K2 i4 - Mondattan Szigete]

Kérlek, írd meg a teljes, működő TypeScript React komponenst a fenti szabályok alapján!
