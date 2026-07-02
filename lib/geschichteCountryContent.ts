import type { CurriculumQuestion } from "./curriculumTypes";
import US_DATA from "./geschichteCountryData/us.json";
import GB_DATA from "./geschichteCountryData/gb.json";
import HU_DATA from "./geschichteCountryData/hu.json";
import RO_DATA from "./geschichteCountryData/ro.json";

type MCQ = { question: string; correct: string; wrong: string[] };
type Typing = { question: string; answer: string | string[] };
type Subtopic = { mcq?: MCQ[]; typing?: Typing[] };
type GradeMap = Record<string, Subtopic>;
type CountryData = Record<string, GradeMap>; // grade key: "k5","k6","k7","k8"

const COUNTRY_DATA: Record<string, CountryData> = {
  us: US_DATA as unknown as CountryData,
  gb: GB_DATA as unknown as CountryData,
  uk: GB_DATA as unknown as CountryData, // alias
  hu: HU_DATA as unknown as CountryData,
  ro: RO_DATA as unknown as CountryData,
};

// Localized topic names per country & subtopic ID
const COUNTRY_TOPIC_NAMES: Record<string, Record<string, { de: string; hu: string; ro: string; en: string }>> = {
  us: {
    us_native_peoples: { de: "Native Americans", hu: "Amerikai őslakosok", ro: "Populații indigene", en: "Native Peoples" },
    us_exploration: { de: "Entdeckung Amerikas", hu: "Amerika felfedezése", ro: "Descoperirea Americii", en: "Exploration" },
    us_colonization_13: { de: "13 Kolonien", hu: "13 gyarmat", ro: "Cele 13 colonii", en: "13 Colonies" },
    us_colonial_life: { de: "Kolonialleben", hu: "Gyarmati élet", ro: "Viața colonială", en: "Colonial Life" },
    us_slavery_origins: { de: "Ursprung der Sklaverei", hu: "A rabszolgaság kezdetei", ro: "Originile sclaviei", en: "Slavery Origins" },
    us_french_indian_war: { de: "Französisch-Indianerkrieg", hu: "Francia-indián háború", ro: "Războiul franco-indian", en: "French & Indian War" },
    us_founding_fathers: { de: "Gründerväter", hu: "Alapító atyák", ro: "Părinții fondatori", en: "Founding Fathers" },
    us_declaration_independence: { de: "Unabhängigkeitserklärung", hu: "Függetlenségi nyilatkozat", ro: "Declarația de Independență", en: "Declaration of Independence" },
    us_revolutionary_war: { de: "Unabhängigkeitskrieg", hu: "Függetlenségi háború", ro: "Războiul de Independență", en: "Revolutionary War" },
    us_constitution: { de: "US-Verfassung", hu: "Alkotmány", ro: "Constituția", en: "Constitution" },
    us_louisiana_purchase: { de: "Louisiana-Kauf", hu: "Louisiana vásárlás", ro: "Cumpărarea Louisianei", en: "Louisiana Purchase" },
    us_lewis_clark: { de: "Lewis & Clark", hu: "Lewis és Clark", ro: "Lewis și Clark", en: "Lewis & Clark" },
    us_war_of_1812: { de: "Krieg von 1812", hu: "1812-es háború", ro: "Războiul din 1812", en: "War of 1812" },
    us_westward_expansion: { de: "Westexpansion", hu: "Nyugati terjeszkedés", ro: "Expansiunea spre Vest", en: "Westward Expansion" },
    us_trail_of_tears: { de: "Pfad der Tränen", hu: "Könnyek ösvénye", ro: "Drumul Lacrimilor", en: "Trail of Tears" },
    us_civil_war_causes: { de: "Bürgerkrieg — Ursachen", hu: "Polgárháború okai", ro: "Cauzele Războiului Civil", en: "Civil War Causes" },
    us_civil_war_events: { de: "Bürgerkrieg — Ereignisse", hu: "Polgárháború eseményei", ro: "Evenimente Război Civil", en: "Civil War Events" },
    us_lincoln: { de: "Lincoln", hu: "Lincoln", ro: "Lincoln", en: "Lincoln" },
    us_reconstruction: { de: "Rekonstruktion", hu: "Reconstructio", ro: "Reconstrucția", en: "Reconstruction" },
    us_industrial_age: { de: "Industriezeitalter", hu: "Ipari kor", ro: "Epoca Industrială", en: "Industrial Age" },
    us_gilded_age: { de: "Goldenes Zeitalter", hu: "Aranykor", ro: "Epoca de Aur", en: "Gilded Age" },
    us_progressive_era: { de: "Progressive Era", hu: "Progresszív korszak", ro: "Era Progresivă", en: "Progressive Era" },
    us_wwi: { de: "1. Weltkrieg (USA)", hu: "1. világháború USA", ro: "Primul Război Mondial SUA", en: "WWI" },
    us_roaring_twenties: { de: "Goldene Zwanziger", hu: "Bőgő húszas évek", ro: "Anii '20", en: "Roaring Twenties" },
    us_great_depression: { de: "Weltwirtschaftskrise", hu: "Nagy gazdasági válság", ro: "Marea Criză", en: "Great Depression" },
    us_new_deal: { de: "New Deal", hu: "New Deal", ro: "New Deal", en: "New Deal" },
    us_wwii_us: { de: "2. Weltkrieg (USA)", hu: "2. világháború USA", ro: "Al Doilea Război Mondial SUA", en: "WWII" },
    us_atomic_bomb: { de: "Atombombe", hu: "Atombomba", ro: "Bomba atomică", en: "Atomic Bomb" },
    us_post_wwii: { de: "Nachkriegs-USA", hu: "Háború utáni USA", ro: "SUA postbelică", en: "Post-WWII USA" },
    us_cold_war_start: { de: "Kalter Krieg — Anfang", hu: "Hidegháború kezdete", ro: "Războiul Rece — Început", en: "Cold War Start" },
    us_cold_war_events: { de: "Kalter Krieg — Ereignisse", hu: "Hidegháború eseményei", ro: "Evenimente Război Rece", en: "Cold War Events" },
    us_civil_rights: { de: "Bürgerrechtsbewegung", hu: "Polgárjogi mozgalom", ro: "Mișcarea Drepturilor Civile", en: "Civil Rights" },
    us_vietnam_war: { de: "Vietnamkrieg", hu: "Vietnami háború", ro: "Războiul din Vietnam", en: "Vietnam War" },
    us_space_race: { de: "Weltraumrennen", hu: "Űrverseny", ro: "Cursa Spațială", en: "Space Race" },
    us_70s_80s: { de: "70er & 80er Jahre", hu: "70-es és 80-as évek", ro: "Anii '70 și '80", en: "70s & 80s" },
    us_911: { de: "11. September", hu: "Szeptember 11", ro: "11 Septembrie", en: "9/11" },
    us_obama_era: { de: "Obama-Ära", hu: "Obama korszak", ro: "Era Obama", en: "Obama Era" },
    us_modern_tech: { de: "Moderne Technik", hu: "Modern technológia", ro: "Tehnologie Modernă", en: "Modern Tech" },
    us_recent_movements: { de: "Aktuelle Bewegungen", hu: "Legújabb mozgalmak", ro: "Mișcări recente", en: "Recent Movements" },
    us_cultural_icons: { de: "Kulturikone", hu: "Kulturális ikonok", ro: "Icoane culturale", en: "Cultural Icons" },
  },
  gb: {
    uk_stone_age_britain: { de: "Steinzeit Britannien", hu: "Kőkori Britannia", ro: "Britania în epoca de piatră", en: "Stone Age Britain" },
    uk_celts_iron_age: { de: "Kelten und Eisenzeit", hu: "Kelták és a vaskor", ro: "Celții și epoca fierului", en: "Celts and the Iron Age" },
    uk_romans_britain: { de: "Römer in Britannien", hu: "Rómaiak Britanniában", ro: "Romanii în Britania", en: "Romans in Britain" },
    uk_anglo_saxons: { de: "Angelsachsen", hu: "Angolszászok", ro: "Anglo-saxonii", en: "Anglo-Saxons" },
    uk_vikings_britain: { de: "Wikinger in Britannien", hu: "Vikingek Britanniában", ro: "Vikingii în Britania", en: "Vikings in Britain" },
    uk_alfred_great: { de: "Alfred der Große", hu: "Nagy Alfréd", ro: "Alfred cel Mare", en: "Alfred the Great" },
    uk_1066_normans: { de: "Normannen 1066", hu: "Normannok 1066", ro: "Normanzii 1066", en: "Normans 1066" },
    uk_domesday_book: { de: "Domesday Book", hu: "Domesday-könyv", ro: "Cartea Domesday", en: "Domesday Book" },
    uk_medieval_castles: { de: "Mittelalterliche Burgen", hu: "Középkori várak", ro: "Castele medievale", en: "Medieval Castles" },
    uk_crusades_england: { de: "England und die Kreuzzüge", hu: "Anglia és a keresztes hadjáratok", ro: "Anglia și cruciadele", en: "England and the Crusades" },
    uk_magna_carta: { de: "Magna Carta", hu: "Magna Carta", ro: "Magna Carta", en: "Magna Carta" },
    uk_plantagenet: { de: "Plantagenet-Dynastie", hu: "Plantagenet-dinasztia", ro: "Dinastia Plantagenet", en: "Plantagenet Dynasty" },
    uk_black_death_britain: { de: "Schwarzer Tod in Britannien", hu: "Fekete halál Britanniában", ro: "Ciuma neagră în Britania", en: "Black Death in Britain" },
    uk_100_years_war: { de: "Hundertjähriger Krieg", hu: "Százéves háború", ro: "Războiul de o sută de ani", en: "Hundred Years' War" },
    uk_wars_roses: { de: "Rosenkriege", hu: "Rózsák háborúja", ro: "Războiul celor două roze", en: "Wars of the Roses" },
    uk_tudors_start: { de: "Aufstieg der Tudors", hu: "A Tudorok felemelkedése", ro: "Ascensiunea Tudorilor", en: "Rise of the Tudors" },
    uk_henry_viii: { de: "Heinrich VIII.", hu: "VIII. Henrik", ro: "Henric al VIII-lea", en: "Henry VIII" },
    uk_elizabeth_i: { de: "Elisabeth I.", hu: "I. Erzsébet", ro: "Elisabeta I", en: "Elizabeth I" },
    uk_shakespeare_era: { de: "Shakespeare-Zeit", hu: "Shakespeare kora", ro: "Epoca lui Shakespeare", en: "Shakespeare's Era" },
    uk_stuarts_early: { de: "Frühe Stuarts", hu: "A korai Stuartok", ro: "Primii Stuarți", en: "Early Stuarts" },
    uk_civil_war_eng: { de: "Englischer Bürgerkrieg", hu: "Angol polgárháború", ro: "Războiul civil englez", en: "English Civil War" },
    uk_restoration: { de: "Restauration", hu: "Restauráció", ro: "Restaurația", en: "The Restoration" },
    uk_glorious_rev: { de: "Glorreiche Revolution", hu: "Dicsőséges forradalom", ro: "Revoluția glorioasă", en: "Glorious Revolution" },
    uk_union_scotland: { de: "Union mit Schottland", hu: "Unió Skóciával", ro: "Uniunea cu Scoția", en: "Union with Scotland" },
    uk_jacobites: { de: "Jakobiten", hu: "Jakobiták", ro: "Iacobiții", en: "The Jacobites" },
    uk_industrial_rev: { de: "Industrielle Revolution", hu: "Ipari forradalom", ro: "Revoluția industrială", en: "Industrial Revolution" },
    uk_slavery_abolition: { de: "Abschaffung der Sklaverei", hu: "A rabszolgaság eltörlése", ro: "Abolirea sclaviei", en: "Abolition of Slavery" },
    uk_empire_rise: { de: "Aufstieg des Empire", hu: "A Birodalom felemelkedése", ro: "Ascensiunea Imperiului", en: "Rise of the Empire" },
    uk_napoleonic_wars: { de: "Napoleonische Kriege", hu: "Napóleoni háborúk", ro: "Războaiele napoleoniene", en: "Napoleonic Wars" },
    uk_victorian_era: { de: "Viktorianisches Zeitalter", hu: "Viktoriánus kor", ro: "Epoca victoriană", en: "Victorian Era" },
    uk_ww1_britain: { de: "Erster Weltkrieg (Großbritannien)", hu: "Első világháború (Nagy-Britannia)", ro: "Primul Război Mondial (Marea Britanie)", en: "WWI (Britain)" },
    uk_suffragettes: { de: "Suffragetten", hu: "Szufrazsettek", ro: "Sufragetele", en: "The Suffragettes" },
    uk_irish_independence: { de: "Irische Unabhängigkeit", hu: "Ír függetlenség", ro: "Independența Irlandei", en: "Irish Independence" },
    uk_interwar: { de: "Zwischenkriegszeit", hu: "Két világháború közötti időszak", ro: "Perioada interbelică", en: "Interwar Period" },
    uk_ww2_britain: { de: "Zweiter Weltkrieg (Großbritannien)", hu: "Második világháború (Nagy-Britannia)", ro: "Al Doilea Război Mondial (Marea Britanie)", en: "WWII (Britain)" },
    uk_empire_decline: { de: "Niedergang des Empire", hu: "A Birodalom hanyatlása", ro: "Declinul Imperiului", en: "Decline of the Empire" },
    uk_post_war: { de: "Nachkriegszeit", hu: "Háború utáni időszak", ro: "Perioada postbelică", en: "Post-War Britain" },
    uk_thatcher_era: { de: "Thatcher-Ära", hu: "Thatcher-korszak", ro: "Era Thatcher", en: "Thatcher Era" },
    uk_modern_uk: { de: "Modernes Großbritannien", hu: "Modern Nagy-Britannia", ro: "Marea Britanie modernă", en: "Modern UK" },
    uk_royal_family: { de: "Königsfamilie", hu: "Királyi család", ro: "Familia regală", en: "Royal Family" },
  },
  hu: {
    hu_magyar_ostortenet: { de: "Ungarische Urgeschichte", hu: "Magyar őstörténet", ro: "Preistoria maghiarilor", en: "Hungarian Prehistory" },
    hu_karpat_medence_okor: { de: "Karpatenbecken in der Antike", hu: "A Kárpát-medence az ókorban", ro: "Bazinul Carpatic în Antichitate", en: "Carpathian Basin in Antiquity" },
    hu_honfoglalas: { de: "Landnahme der Ungarn", hu: "Honfoglalás", ro: "Descălecatul maghiarilor", en: "Hungarian Conquest" },
    hu_etelkoz: { de: "Etelköz", hu: "Etelköz", ro: "Etelköz", en: "Etelköz" },
    hu_kalandozasok: { de: "Ungarneinfälle", hu: "Kalandozások", ro: "Incursiunile maghiare", en: "Hungarian Raids" },
    hu_geza_fejedelem: { de: "Fürst Géza", hu: "Géza fejedelem", ro: "Principele Géza", en: "Grand Prince Géza" },
    hu_szent_istvan: { de: "Heiliger Stephan", hu: "Szent István", ro: "Sfântul Ștefan", en: "Saint Stephen" },
    hu_szent_laszlo: { de: "Heiliger Ladislaus", hu: "Szent László", ro: "Sfântul Ladislau", en: "Saint Ladislaus" },
    hu_kalman_konyves: { de: "Koloman der Bücherfreund", hu: "Könyves Kálmán", ro: "Coloman Cărturarul", en: "Coloman the Learned" },
    hu_aranybulla_1222: { de: "Goldene Bulle 1222", hu: "Aranybulla 1222", ro: "Bula de Aur 1222", en: "Golden Bull of 1222" },
    hu_tatarjaras_1241: { de: "Mongoleneinfall 1241", hu: "Tatárjárás 1241", ro: "Invazia mongolă 1241", en: "Mongol Invasion 1241" },
    hu_arpad_kihalasa: { de: "Aussterben der Árpáden", hu: "Az Árpád-ház kihalása", ro: "Stingerea dinastiei Arpadiene", en: "Extinction of the Árpád Dynasty" },
    hu_anjou_kor: { de: "Anjou-Zeit", hu: "Anjou-kor", ro: "Epoca Angevină", en: "Angevin Period" },
    hu_luxemburgi_zsigmond: { de: "Sigismund von Luxemburg", hu: "Luxemburgi Zsigmond", ro: "Sigismund de Luxemburg", en: "Sigismund of Luxembourg" },
    hu_hunyadi_janos: { de: "Johann Hunyadi", hu: "Hunyadi János", ro: "Iancu de Hunedoara", en: "John Hunyadi" },
    hu_nandorfehervar_1456: { de: "Belgrad 1456", hu: "Nándorfehérvár 1456", ro: "Belgrad 1456", en: "Belgrade 1456" },
    hu_matyas_kiraly: { de: "König Matthias", hu: "Mátyás király", ro: "Regele Matia", en: "King Matthias" },
    hu_corvina_konyvtar: { de: "Bibliotheca Corviniana", hu: "Corvina könyvtár", ro: "Biblioteca Corviniana", en: "Corvina Library" },
    hu_matyas_hadserege: { de: "Schwarze Armee", hu: "Mátyás hadserege", ro: "Armata Neagră", en: "Matthias's Army" },
    hu_mohacs_1526: { de: "Schlacht bei Mohács 1526", hu: "Mohácsi csata 1526", ro: "Bătălia de la Mohács 1526", en: "Battle of Mohács 1526" },
    hu_haromreszre_szakadas: { de: "Dreiteilung Ungarns", hu: "Az ország három részre szakadása", ro: "Împărțirea în trei a Ungariei", en: "Partition into Three Parts" },
    hu_budai_pasalik: { de: "Budaer Paschalik", hu: "Budai pasalik", ro: "Pașalâcul de Buda", en: "Pashalik of Buda" },
    hu_erdely_fejedelemseg: { de: "Fürstentum Siebenbürgen", hu: "Az Erdélyi Fejedelemség", ro: "Principatul Transilvaniei", en: "Principality of Transylvania" },
    hu_bocskai_bethlen: { de: "Bocskai und Bethlen", hu: "Bocskai és Bethlen", ro: "Bocskai și Bethlen", en: "Bocskai and Bethlen" },
    hu_torok_kiuzese: { de: "Vertreibung der Türken", hu: "A török kiűzése", ro: "Alungarea turcilor", en: "Expulsion of the Ottomans" },
    hu_rakoczi_szabharc: { de: "Rákóczi-Freiheitskampf", hu: "Rákóczi-szabadságharc", ro: "Războiul lui Rákóczi", en: "Rákóczi's War of Independence" },
    hu_habsburg_uralom: { de: "Habsburgerherrschaft", hu: "Habsburg-uralom", ro: "Dominația habsburgică", en: "Habsburg Rule" },
    hu_maria_terezia: { de: "Maria Theresia", hu: "Mária Terézia", ro: "Maria Terezia", en: "Maria Theresa" },
    hu_2_jozsef: { de: "Joseph II.", hu: "II. József", ro: "Iosif al II-lea", en: "Joseph II" },
    hu_reformkor: { de: "Reformzeit", hu: "Reformkor", ro: "Epoca reformelor", en: "Reform Era" },
    hu_1848_forradalom: { de: "Revolution 1848", hu: "1848-as forradalom", ro: "Revoluția din 1848", en: "Revolution of 1848" },
    hu_szabadsagharc_1849: { de: "Freiheitskampf 1849", hu: "Szabadságharc 1849", ro: "Războiul de independență 1849", en: "War of Independence 1849" },
    hu_kiegyezes_1867: { de: "Ausgleich 1867", hu: "Kiegyezés 1867", ro: "Compromisul din 1867", en: "Compromise of 1867" },
    hu_milleneum_1896: { de: "Millennium 1896", hu: "Millennium 1896", ro: "Mileniul 1896", en: "Millennium 1896" },
    hu_elso_vh_hu: { de: "Erster Weltkrieg (Ungarn)", hu: "Első világháború (Magyarország)", ro: "Primul Război Mondial (Ungaria)", en: "WWI (Hungary)" },
    hu_trianon_1920: { de: "Vertrag von Trianon 1920", hu: "Trianoni békeszerződés 1920", ro: "Tratatul de la Trianon 1920", en: "Treaty of Trianon 1920" },
    hu_horthy_korszak: { de: "Horthy-Ära", hu: "Horthy-korszak", ro: "Epoca Horthy", en: "Horthy Era" },
    hu_masodik_vh_hu: { de: "Zweiter Weltkrieg (Ungarn)", hu: "Második világháború (Magyarország)", ro: "Al Doilea Război Mondial (Ungaria)", en: "WWII (Hungary)" },
    hu_1956_forradalom: { de: "Revolution 1956", hu: "1956-os forradalom", ro: "Revoluția din 1956", en: "Revolution of 1956" },
    hu_rendszervaltas_1989: { de: "Wende 1989", hu: "Rendszerváltás 1989", ro: "Schimbarea de regim 1989", en: "Regime Change 1989" },
  },
  ro: {
    ro_daci_getii: { de: "Daker und Geten", hu: "Dákok és géták", ro: "Dacii și geții", en: "Dacians and Getae" },
    ro_burebista: { de: "Burebista", hu: "Burebista", ro: "Burebista", en: "Burebista" },
    ro_decebal: { de: "Decebalus", hu: "Decebál", ro: "Decebal", en: "Decebalus" },
    ro_razboi_daco_roman: { de: "Dakerkriege", hu: "Dák-római háborúk", ro: "Războaiele daco-romane", en: "Dacian-Roman Wars" },
    ro_traianus: { de: "Trajan", hu: "Traianus", ro: "Traian", en: "Trajan" },
    ro_romanizarea_daciei: { de: "Romanisierung Dakiens", hu: "Dácia romanizálása", ro: "Romanizarea Daciei", en: "Romanization of Dacia" },
    ro_sarmizegetusa: { de: "Sarmizegetusa", hu: "Sarmizegetusa", ro: "Sarmizegetusa", en: "Sarmizegetusa" },
    ro_columna_traiana: { de: "Trajanssäule", hu: "Traianus-oszlop", ro: "Columna lui Traian", en: "Trajan's Column" },
    ro_retragerea_aureliana: { de: "Aurelianischer Rückzug", hu: "Aurelianus visszavonulása", ro: "Retragerea aureliană", en: "Aurelian Retreat" },
    ro_migratii_timpurii: { de: "Frühe Völkerwanderung", hu: "Korai népvándorlások", ro: "Migrațiile timpurii", en: "Early Migrations" },
    ro_formarea_poporului: { de: "Entstehung des rumänischen Volkes", hu: "A román nép kialakulása", ro: "Formarea poporului român", en: "Formation of the Romanian People" },
    ro_voievodate_timpurii: { de: "Frühe Woiwodschaften", hu: "Korai vajdaságok", ro: "Voievodatele timpurii", en: "Early Voivodeships" },
    ro_descalecatul: { de: "Gründung der Fürstentümer", hu: "A fejedelemségek alapítása", ro: "Descălecatul", en: "The Founding (Descălecat)" },
    ro_basarab_i: { de: "Basarab I.", hu: "I. Basarab", ro: "Basarab I", en: "Basarab I" },
    ro_mircea_batran: { de: "Mircea der Alte", hu: "Öreg Mircea", ro: "Mircea cel Bătrân", en: "Mircea the Elder" },
    ro_iancu_hunedoara: { de: "Johann Hunyadi", hu: "Hunyadi János", ro: "Iancu de Hunedoara", en: "John Hunyadi" },
    ro_vlad_tepes: { de: "Vlad der Pfähler", hu: "Vlad Țepeș", ro: "Vlad Țepeș", en: "Vlad the Impaler" },
    ro_stefan_mare: { de: "Stefan der Große", hu: "Nagy István", ro: "Ștefan cel Mare", en: "Stephen the Great" },
    ro_biserici_moldova: { de: "Kirchen der Moldau", hu: "Moldvai templomok", ro: "Bisericile Moldovei", en: "Churches of Moldavia" },
    ro_moldova_medievala: { de: "Mittelalterliche Moldau", hu: "Középkori Moldva", ro: "Moldova medievală", en: "Medieval Moldavia" },
    ro_mihai_viteazul: { de: "Michael der Tapfere", hu: "Vitéz Mihály", ro: "Mihai Viteazul", en: "Michael the Brave" },
    ro_razboaiele_otomane: { de: "Osmanische Kriege", hu: "Oszmán háborúk", ro: "Războaiele otomane", en: "Ottoman Wars" },
    ro_epoca_fanariota: { de: "Phanariotenzeit", hu: "Fanarióta kor", ro: "Epoca fanariotă", en: "Phanariot Era" },
    ro_tudor_vladimirescu: { de: "Tudor Vladimirescu", hu: "Tudor Vladimirescu", ro: "Tudor Vladimirescu", en: "Tudor Vladimirescu" },
    ro_regulamentele_organice: { de: "Organische Reglements", hu: "Szervezeti szabályzatok", ro: "Regulamentele Organice", en: "Organic Regulations" },
    ro_revolutia_1848_ro: { de: "Revolution 1848 (Rumänien)", hu: "1848-as forradalom (Románia)", ro: "Revoluția din 1848", en: "Revolution of 1848" },
    ro_avram_iancu: { de: "Avram Iancu", hu: "Avram Iancu", ro: "Avram Iancu", en: "Avram Iancu" },
    ro_unirea_principatelor_1859: { de: "Vereinigung der Fürstentümer 1859", hu: "A fejedelemségek egyesülése 1859", ro: "Unirea Principatelor 1859", en: "Union of the Principalities 1859" },
    ro_alexandru_ioan_cuza: { de: "Alexandru Ioan Cuza", hu: "Alexandru Ioan Cuza", ro: "Alexandru Ioan Cuza", en: "Alexandru Ioan Cuza" },
    ro_carol_i: { de: "Karl I.", hu: "I. Károly", ro: "Carol I", en: "Carol I" },
    ro_razboi_independenta: { de: "Unabhängigkeitskrieg", hu: "Függetlenségi háború", ro: "Războiul de Independență", en: "War of Independence" },
    ro_regatul_romaniei: { de: "Königreich Rumänien", hu: "Román Királyság", ro: "Regatul României", en: "Kingdom of Romania" },
    ro_primul_razboi_mondial_ro: { de: "Erster Weltkrieg (Rumänien)", hu: "Első világháború (Románia)", ro: "Primul Război Mondial", en: "WWI (Romania)" },
    ro_marea_unire_1918: { de: "Große Vereinigung 1918", hu: "Nagy egyesülés 1918", ro: "Marea Unire 1918", en: "Great Union 1918" },
    ro_romania_interbelica: { de: "Zwischenkriegsrumänien", hu: "Két háború közötti Románia", ro: "România interbelică", en: "Interwar Romania" },
    ro_al_doilea_razboi_mondial_ro: { de: "Zweiter Weltkrieg (Rumänien)", hu: "Második világháború (Románia)", ro: "Al Doilea Război Mondial", en: "WWII (Romania)" },
    ro_holocaustul_romania: { de: "Holocaust in Rumänien", hu: "Holokauszt Romániában", ro: "Holocaustul în România", en: "Holocaust in Romania" },
    ro_comunismul_romania: { de: "Kommunismus in Rumänien", hu: "Kommunizmus Romániában", ro: "Comunismul în România", en: "Communism in Romania" },
    ro_ceausescu_revolutia_1989: { de: "Ceaușescu und Revolution 1989", hu: "Ceaușescu és az 1989-es forradalom", ro: "Ceaușescu și Revoluția din 1989", en: "Ceaușescu and the 1989 Revolution" },
    ro_post_1989: { de: "Rumänien nach 1989", hu: "Románia 1989 után", ro: "România după 1989", en: "Romania after 1989" },
  },
};

export function getCountrySubtopics(country: string, grade: number): { id: string; names: { de: string; hu: string; ro: string; en: string } }[] {
  const cc = country.toLowerCase();
  const countryData = COUNTRY_DATA[cc];
  if (!countryData) return [];
  const gKey = `k${grade}`;
  const gradeMap = countryData[gKey];
  if (!gradeMap) return [];
  const subtopicIds = Object.keys(gradeMap);
  const names = COUNTRY_TOPIC_NAMES[cc] || {};
  return subtopicIds.map(id => ({
    id,
    names: names[id] || { de: id, hu: id, ro: id, en: id },
  }));
}

export function getCountryQuestions(country: string, grade: number, subtopicId: string, count = 35): CurriculumQuestion[] {
  const cc = country.toLowerCase();
  const countryData = COUNTRY_DATA[cc];
  if (!countryData) return [];
  const gradeMap = countryData[`k${grade}`];
  if (!gradeMap) return [];
  const sub = gradeMap[subtopicId];
  if (!sub) return [];

  const out: CurriculumQuestion[] = [];
  for (const m of (sub.mcq || [])) {
    // Shuffle options
    const opts = [m.correct, ...m.wrong];
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    out.push({
      type: "mcq",
      topic: `Geschichte K${grade}`,
      subtopic: subtopicId,
      question: m.question,
      options: opts,
      correct: opts.indexOf(m.correct),
    });
  }
  for (const t of (sub.typing || [])) {
    out.push({
      type: "typing",
      topic: `Geschichte K${grade}`,
      subtopic: subtopicId,
      question: t.question,
      answer: t.answer,
    });
  }
  return out.sort(() => Math.random() - 0.5).slice(0, count);
}

export const COUNTRY_DATA_GRADES = COUNTRY_DATA;
