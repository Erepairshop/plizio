# Maps POI Audit

## 1. Térkép-országonként

### Magyarország (`lib/visualLab/data/hungaryPoi.ts`)
- **Összes POI:** 130 db
- **Régió-szintű POI-k:** 20 db (19 megye + Budapest)
- **Város-szintű POI-k:** 89 db (plusz 1 ország szintű POI)
- **Látnivaló/attraction POI-k:** 20 db (`landmark` típus)
- **Kategória bontás:** "nem kategorizált" (nincs `category` mező, a `type` alapján: régió, város, landmark).
- **Kép-fedettség:** 76 POI-nak van képe, 54 üres/hiányzik.

### Románia (`lib/visualLab/data/romaniaPoi.ts`)
- **Összes POI:** 233 db
- **Régió-szintű POI-k:** 51 db
- **Város-szintű POI-k:** 36 db (`state-capital`, `city`)
- **Látnivaló/attraction POI-k:** 145 db (pl. `river`, `mountain`, `lake`, `historical`, `landmark`, `kid-landmark`, `animal-habitat`, `sea`)
- **Kategória bontás:** "nem kategorizált" (de a `type` mező részben lefedi a földrajzi, történelmi és kulturális kategóriákat).
- **Kép-fedettség:** 155 POI-nak van képe, 78 üres/hiányzik.

### Németország (`lib/visualLab/data/poi.ts`)
- **Összes POI:** 239 db
- **Régió-szintű POI-k:** 16 db (Bundesland)
- **Város-szintű POI-k:** 49 db (`state-capital`, `city`)
- **Látnivaló/attraction POI-k:** 174 db (pl. `river`, `mountain`, `lake`, `island`, `historical`, `landmark`, `forest`, `industry` stb.)
- **Kategória bontás:** "nem kategorizált"
- **Kép-fedettség:** 175 POI-nak van képe, 64 üres/hiányzik.

---

## 2. Gap analízis

### Melyik régiók hiányosak?
- **Magyarország:** Nagyon mesterséges az eloszlás, a legtöbb megyéhez szinte pontosan 5 POI tartozik (Budapesthez 10). Nagyon hiányoznak a természeti kincsek (nincsenek folyó, tó, vagy hegy típusú dedikált POI-k, ellentétben a másik két országgal).
- **Románia:** Bár sok az attrakció, az eloszlás egyenetlen. A megyék nagy részéhez (pl. Temes, Iași, Constanța, Arad, Bihor) csupán 3 POI tartozik megyénként, ami egy ekkora térséghez mérten nagyon kevés.
- **Németország:** Viszonylag jobb az eloszlás (megyénként 7-17 POI, Bajorországban 36), bár a kisebb tartományokban (pl. Saar-vidék: 7 POI) kevesebb a látnivaló.

### Hiányzó történelmi/turisztikai helyek (Példák egy közepes-tudású turista szemével)
*(Több közismert vár, mint Eger, Sárvár, Visegrád városként vagy rövid description-ként szerepel, de mint kiemelt POI érdemes lenne bővíteni.)*

**Magyarország (5-10 példa):**
1. **Tihanyi Apátság** (Kultúra/Történelmi) – Balaton északi partja (lon/lat: 17.889, 46.914)
2. **Aggteleki cseppkőbarlang (Baradla)** (Természet) – Észak-Magyarország (lon/lat: 20.493, 48.472)
3. **Esztergomi Bazilika** (Kultúra/Vallás) – Esztergom városa ugyan bent van, de az épület dedikáltan nincs (lon/lat: 18.736, 47.798)
4. **Szentendrei Skanzen** (Kultúra) – Szabadtéri Néprajzi Múzeum (lon/lat: 19.049, 47.693)
5. **Szigetvári vár** (Történelmi) – Zrínyi Miklós hősies védelmének helyszíne (lon/lat: 17.800, 46.050)
6. **Bükki Nemzeti Park / Szalajka-völgy** (Természet) (lon/lat: 20.388, 48.092)

**Románia (5-10 példa):**
1. **Transzfogarasi út (Transfăgărășan)** (Látványút/Természet) – (lon/lat: 24.615, 45.589)
2. **Sarmizegetusa Regia** (Történelmi) – Dák főváros romjai (lon/lat: 23.310, 45.622)
3. **Bâlea-tó** (Természet) – Gleccsertó a Fogarasi-havasokban (lon/lat: 24.614, 45.603)
4. **Parlament Palotája (Casa Poporului)** (Kultúra/Építészet) – Bukarest (lon/lat: 26.087, 44.427)
5. **Mocănița (Vaser-völgyi kisvasút)** (Attrakció) – Máramaros (lon/lat: 24.453, 47.712)
6. **Vaskapu-szoros (Porțile de Fier)** (Természet/Gát) – (lon/lat: 22.528, 44.672)

**Németország (5-10 példa):**
1. **Europa-Park** (Szórakozás/Vidámpark) – Rust (lon/lat: 7.721, 48.266)
2. **Burg Eltz** (Történelmi) – Festői középkori vár (lon/lat: 7.336, 50.205)
3. **Miniatur Wunderland** (Kultúra/Múzeum) – Hamburg (lon/lat: 9.988, 53.543)
4. **Basteibrücke** (Természet/Látnivaló) – Szász Svájc (lon/lat: 14.073, 50.962)
5. **Rakotzbrücke (Az ördög hídja)** (Kultúra/Park) – Kromlau (lon/lat: 14.636, 51.536)
6. **Mercedes-Benz Múzeum** (Kultúra/Ipar) – Stuttgart (lon/lat: 9.233, 48.788)

---

## 3. Közös gap
- **Kategória mező hiánya:** Egyik ország térképénél sem használnak egységes `category` mezőt. Ehelyett a `type` mezőbe van "kódolva" a kategória (pl. `historical`, `river`, `mountain`), ami nehézkessé teszi az egységes szűrést (pl. az összes "természet" vagy "kultúra" lekérését).
- **Tematikus POI-k hiánya:** Mindhárom térképről hiányoznak a "modern" turisztikai célpontok. A nemzeti parkok (mint régiók vagy POI-k), nagy állatkertek, vidámparkok és interaktív múzeumok (amik gyerekeknek is érdekesek, pl. `kid-landmark` típus) erősen alulreprezentáltak.

---

## 4. Prioritás-javaslat
- **Melyik országnál érdemes legelőször bővíteni?**
  Egyértelműen **Magyarországnál**. Míg a másik két ország 140+ attrakcióval (hegyek, folyók, várak) bír, a magyar adatbázisban a POI-k közel 70%-a egyszerű város, és teljesen hiányoznak az önálló `river`, `lake` és `mountain` típusú POI-k (pl. a Duna, a Tisza, a Balaton vagy a Kékes egyelőre csak városok leírásaiban szerepel).
- **Ésszerű batch méret:**
  **30 új POI / ország / batch**.
  Ez a méret kezelhető a tartalomkészítés és a kép-generálás/letöltés (image pipeline) szempontjából is. Magyarországnál az első batch-nek a legnagyobb földrajzi elemeket (folyók, tavak, tájegységek) és a legfontosabb várakat/kastélyokat érdemes tartalmaznia.

---

## 5. Image pipeline
- **UI által várt URL-formátum:**
  A UI tipikusan a `/geo-images/<country>/<id>.webp` formátumot várja (pl. `/geo-images/romania/RO.webp` vagy `/geo-images/hungary/eger.webp`). Németországnál a képek közvetlenül a `/geo-images/` mappában is szerepelhetnek (pl. `/geo-images/city-berlin.webp`).
- **Létező script a repo-ban:**
  Igen, a repository-ban található egy `download_hungary_images.js` nevű script. Ez egy kiépített pipeline: a Wikipedia API-ján keresztül (lekérésekkel) megkeresi a POI-khoz tartozó képeket, letölti azokat, majd a `sharp` könyvtár segítségével hatékony, 80%-os minőségű `webp` formátumba konvertálja és elmenti őket. Ezt a scriptet könnyedén adaptálni lehet a másik két ország kibővítéséhez is.