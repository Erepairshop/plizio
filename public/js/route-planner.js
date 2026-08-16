/* Plizio A→B útvonaltervező (autós + lakóautó). Önállóan építi az UI-t a
   #plz-route-planner mountba. A cél = amit a user megad (a POI csak előkitöltött,
   de szerkeszthető alapérték). A camper Workert hívja (ORS routing + korridor-
   megállók + ország-advisory), a megállókat a közös /js/stop-card.js rendereli.
   Mount data-*: lang, dest (előkitöltött cél név), lat, lng (előkitöltött cél koord).
   Dual-mode: ha a mountban már van .plz-rp-origin (régi beégetett form), azt használja.
   Adat: © OpenStreetMap contributors · OpenRouteService. */
(function () {
  var M = document.getElementById("plz-route-planner");
  if (!M) return;
  var WORKER = "https://plizio-camper.plizio.workers.dev/plan";
  var LANG = M.dataset.lang || "en";
  // Photon csak de/en/fr/it nyelvet ismer — hu/ro/stb. üres találat → "nem található".
  var GEO_LANG = ({ de: "de", en: "en", fr: "fr", it: "it" })[LANG] || "en";
  var _plat = parseFloat(M.dataset.lat), _plng = parseFloat(M.dataset.lng);
  var DEST_PREFILL = { name: M.dataset.dest || "", coords: (isFinite(_plat) && isFinite(_plng)) ? [_plng, _plat] : null };
  var mode = "car", lastReq = null, busy = false;
  var PREFILL_CC = (M.dataset.cc || "").toUpperCase();   // POI ország ISO2 (üres = ismeretlen parent)
  var SUPPORTED = null;                                   // {CC:1} ha betöltött; null = ismeretlen → soha nem tilt
  var WORKER_BASE = WORKER.replace(/\/plan\/?$/, "");     // .../plan → ... (a /countries-hez)

  var COPY = {
    de: { h: "Routenplaner — Auto & Wohnmobil", sub: "Start und Ziel eingeben — wir bauen die Route mit Stopps und Länder-Hinweisen.", from: "Start", fromPh: "z.B. München", dest: "Ziel", destPh: "z.B. Lyon", via: "Über (optional)", viaPh: "z.B. Zagreb", nights: "Übernachtungs-Stopps", vehicle: "Fahrzeug", car: "Auto", camper: "Wohnmobil", filter: "Nur Stopps mit (optional):", water: "Wasser", dump: "Entsorgung", power: "Strom", wc: "WC", shower: "Dusche", tierAB: "Stellplätze + Camping", tierA: "Nur Stellplätze", tierB: "Nur Camping", tierABC: "Auch Natur-/Rastplätze", b10: "Umweg max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "Route planen" },
    hu: { h: "Útvonaltervező — Autó & Lakóautó", sub: "Add meg az indulást és a célt — megtervezzük az utat megállókkal és ország-tudnivalókkal.", from: "Indulás", fromPh: "pl. Budapest", dest: "Cél", destPh: "pl. Lyon", via: "Érintve (opcionális)", viaPh: "pl. Zagreb", nights: "Éjszakai megállók", vehicle: "Jármű", car: "Autó", camper: "Lakóautó", filter: "Csak megállók ezzel (opcionális):", water: "Víz", dump: "Ürítő", power: "Áram", wc: "WC", shower: "Zuhany", tierAB: "Stellplatz + kemping", tierA: "Csak Stellplatz", tierB: "Csak kemping", tierABC: "Pihenő-/natúrhelyek is", b10: "Kitérő max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "Útvonal tervezése" },
    en: { h: "Route planner — Car & Motorhome", sub: "Enter start and destination — we build the route with stops and country notes.", from: "Start", fromPh: "e.g. Munich", dest: "Destination", destPh: "e.g. Lyon", via: "Via (optional)", viaPh: "e.g. Zagreb", nights: "Overnight stops", vehicle: "Vehicle", car: "Car", camper: "Motorhome", filter: "Only stops with (optional):", water: "Water", dump: "Disposal", power: "Power", wc: "Toilets", shower: "Shower", tierAB: "Aires + campsites", tierA: "Aires only", tierB: "Campsites only", tierABC: "Also rest/nature areas", b10: "Detour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "Plan route" },
    ro: { h: "Planificator traseu — Mașină & Autorulotă", sub: "Introdu plecarea și destinația — construim traseul cu opriri și informații pe țări.", from: "Plecare", fromPh: "ex. Cluj", dest: "Destinație", destPh: "ex. Lyon", via: "Prin (opțional)", viaPh: "ex. Zagreb", nights: "Opriri peste noapte", vehicle: "Vehicul", car: "Mașină", camper: "Autorulotă", filter: "Doar opriri cu (opțional):", water: "Apă", dump: "Golire", power: "Curent", wc: "Toaletă", shower: "Duș", tierAB: "Popasuri + camping", tierA: "Doar popasuri", tierB: "Doar camping", tierABC: "Și locuri de odihnă/natură", b10: "Ocol max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "Planifică traseul" },
    fr: { h: "Planificateur — Voiture & Camping-car", sub: "Indiquez départ et destination — nous construisons l'itinéraire avec étapes et infos par pays.", from: "Départ", fromPh: "ex. Paris", dest: "Destination", destPh: "ex. Lyon", via: "Via (optionnel)", viaPh: "ex. Zagreb", nights: "Étapes nuitées", vehicle: "Véhicule", car: "Voiture", camper: "Camping-car", filter: "Étapes avec (optionnel) :", water: "Eau", dump: "Vidange", power: "Électricité", wc: "WC", shower: "Douche", tierAB: "Aires + campings", tierA: "Aires seulement", tierB: "Campings seulement", tierABC: "Aussi aires nature/repos", b10: "Détour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "Planifier" },
  };
  var DYN = {
    de: { notFound: "Ort nicht gefunden", needBoth: "Bitte Start und Ziel eingeben.", searching: "📍 Orte werden gesucht…", routing: "🛣️ Route wird berechnet…", km: "km", hrs: "Std.", nights: "Übernachtungen", matchStops: "passende Stopps", mapsAll: "Ganze Route in Maps", advisory: "Länder-Hinweise", toll: "Maut", lez: "Umweltzone", overnight: "Übernachten", mandatory: "Pflicht", keepStop: "diesen Stopp behalten", day: "TAG", dest: "ZIEL", swipe: "← Karten wischen →", regen: "Neu generieren — behaltene Stopps fixieren", regenKept: "🔄 Route mit behaltenen Stopps…", regenNew: "🔄 Neue Variante…" },
    hu: { notFound: "A hely nem található", needBoth: "Add meg az indulást és a célt.", searching: "📍 Helyek keresése…", routing: "🛣️ Útvonal számítása…", km: "km", hrs: "óra", nights: "éjszaka", matchStops: "találó megálló", mapsAll: "Teljes útvonal Mapsben", advisory: "Ország-tudnivalók", toll: "Útdíj", lez: "Környezeti zóna", overnight: "Éjszakázás", mandatory: "Kötelező", keepStop: "ezt a megállót megtartom", day: "NAP", dest: "CÉL", swipe: "← húzd a kártyákat →", regen: "Újragenerálás — megtartottak rögzítése", regenKept: "🔄 Útvonal a megtartottakkal…", regenNew: "🔄 Új variáció…" },
    en: { notFound: "Place not found", needBoth: "Please enter start and destination.", searching: "📍 Locating…", routing: "🛣️ Calculating route…", km: "km", hrs: "h", nights: "nights", matchStops: "matching stops", mapsAll: "Whole route in Maps", advisory: "Country notes", toll: "Toll", lez: "Low-emission zone", overnight: "Overnight", mandatory: "Required", keepStop: "keep this stop", day: "DAY", dest: "GOAL", swipe: "← swipe cards →", regen: "Regenerate — fix kept stops", regenKept: "🔄 Route with kept stops…", regenNew: "🔄 New variant…" },
    ro: { notFound: "Locul nu a fost găsit", needBoth: "Introdu plecarea și destinația.", searching: "📍 Se caută locurile…", routing: "🛣️ Se calculează traseul…", km: "km", hrs: "ore", nights: "nopți", matchStops: "opriri potrivite", mapsAll: "Tot traseul în Maps", advisory: "Informații pe țări", toll: "Taxă drum", lez: "Zonă ecologică", overnight: "Înnoptare", mandatory: "Obligatoriu", keepStop: "păstrează această oprire", day: "ZIUA", dest: "ȚINTĂ", swipe: "← glisează →", regen: "Regenerează — fixează opririle păstrate", regenKept: "🔄 Traseu cu opririle păstrate…", regenNew: "🔄 Variantă nouă…" },
    fr: { notFound: "Lieu introuvable", needBoth: "Entrez départ et destination.", searching: "📍 Recherche…", routing: "🛣️ Calcul de l'itinéraire…", km: "km", hrs: "h", nights: "nuitées", matchStops: "étapes", mapsAll: "Tout l'itinéraire dans Maps", advisory: "Infos par pays", toll: "Péage", lez: "Zone à faibles émissions", overnight: "Nuitée", mandatory: "Obligatoire", keepStop: "garder cette étape", day: "JOUR", dest: "BUT", swipe: "← faites glisser →", regen: "Régénérer — fixer les étapes gardées", regenKept: "🔄 Itinéraire avec étapes gardées…", regenNew: "🔄 Nouvelle variante…" },
  };
  var embeddedCopy = {};
  try { embeddedCopy = M.dataset.copy ? JSON.parse(M.dataset.copy) : {}; } catch (e) { embeddedCopy = {}; }
  var T = COPY[LANG] || COPY.en, C = Object.assign({}, DYN[LANG] || DYN.en, embeddedCopy);
  var VEHICLE_COPY = {
    de: { title: "Wohnmobil-Maße", compact: "Kompaktvan", standard: "Wohnmobil 3,5 t", large: "Großes Wohnmobil", custom: "Eigene Maße", length: "Länge", width: "Breite", height: "Höhe", weight: "Gewicht", invalid: "Bitte gültige Wohnmobil-Maße eingeben." },
    hu: { title: "Lakóautó méretei", compact: "Kompakt furgon", standard: "Lakóautó 3,5 t", large: "Nagy lakóautó", custom: "Saját méretek", length: "Hossz", width: "Szélesség", height: "Magasság", weight: "Tömeg", invalid: "Adj meg érvényes lakóautó-méreteket." },
    en: { title: "Motorhome dimensions", compact: "Compact van", standard: "3.5 t motorhome", large: "Large motorhome", custom: "Custom dimensions", length: "Length", width: "Width", height: "Height", weight: "Weight", invalid: "Enter valid motorhome dimensions." },
    ro: { title: "Dimensiuni autorulotă", compact: "Camper compact", standard: "Autorulotă 3,5 t", large: "Autorulotă mare", custom: "Dimensiuni proprii", length: "Lungime", width: "Lățime", height: "Înălțime", weight: "Greutate", invalid: "Introdu dimensiuni valide pentru autorulotă." },
    fr: { title: "Dimensions du camping-car", compact: "Fourgon compact", standard: "Camping-car 3,5 t", large: "Grand camping-car", custom: "Dimensions personnalisées", length: "Longueur", width: "Largeur", height: "Hauteur", weight: "Poids", invalid: "Saisissez des dimensions valides." },
    es: { title: "Dimensiones de la autocaravana", compact: "Furgoneta compacta", standard: "Autocaravana de 3,5 t", large: "Autocaravana grande", custom: "Medidas propias", length: "Longitud", width: "Anchura", height: "Altura", weight: "Peso", invalid: "Introduce medidas válidas para la autocaravana." },
    pt: { title: "Dimensões da autocaravana", compact: "Furgão compacto", standard: "Autocaravana de 3,5 t", large: "Autocaravana grande", custom: "Medidas próprias", length: "Comprimento", width: "Largura", height: "Altura", weight: "Peso", invalid: "Introduza medidas válidas para a autocaravana." },
    nl: { title: "Afmetingen camper", compact: "Compacte bus", standard: "Camper van 3,5 t", large: "Grote camper", custom: "Eigen maten", length: "Lengte", width: "Breedte", height: "Hoogte", weight: "Gewicht", invalid: "Vul geldige camperafmetingen in." },
    hr: { title: "Dimenzije kampera", compact: "Kompaktni kombi", standard: "Kamper od 3,5 t", large: "Veliki kamper", custom: "Vlastite dimenzije", length: "Duljina", width: "Širina", height: "Visina", weight: "Masa", invalid: "Unesite valjane dimenzije kampera." },
    tr: { title: "Motokaravan ölçüleri", compact: "Kompakt panelvan", standard: "3,5 t motokaravan", large: "Büyük motokaravan", custom: "Özel ölçüler", length: "Uzunluk", width: "Genişlik", height: "Yükseklik", weight: "Ağırlık", invalid: "Geçerli motokaravan ölçüleri girin." },
    pl: { title: "Wymiary kampera", compact: "Kompaktowy van", standard: "Kamper 3,5 t", large: "Duży kamper", custom: "Własne wymiary", length: "Długość", width: "Szerokość", height: "Wysokość", weight: "Masa", invalid: "Podaj prawidłowe wymiary kampera." },
  };
  var V = VEHICLE_COPY[LANG] || VEHICLE_COPY.en;
  var VEHICLE_PRESETS = {
    compact: { length: 5.4, width: 2.05, height: 2.6, weight: 3 },
    standard: { length: 7, width: 2.3, height: 3.1, weight: 3.5 },
    large: { length: 8.5, width: 2.5, height: 3.4, weight: 5 },
  };
  // "Ehhez az országhoz még nincs camping-adat" popup (a Wohnmobil-kapuzáshoz).
  var ND = {
    de: { title: "Noch keine Wohnmobil-Daten", body: "Für dieses Land haben wir noch keine Stellplatz-Daten. Sobald Daten vorliegen, lässt sich die Route hierher automatisch planen.", car: "Mit dem Auto planen", ok: "OK" },
    hu: { title: "Még nincs lakóautós adat", body: "Ehhez az országhoz még nincs lakóautó-megálló adatunk. Amint lesz adat, ide is automatikusan tervezhető lesz a lakóautós útvonal.", car: "Tervezés autóval", ok: "OK" },
    en: { title: "No motorhome data yet", body: "We don't have motorhome stop data for this country yet. As soon as data is available, routing here will work automatically.", car: "Plan by car", ok: "OK" },
    ro: { title: "Încă nu avem date pentru autorulote", body: "Nu avem încă date despre opriri pentru autorulote în această țară. De îndată ce apar date, traseul până aici se va putea planifica automat.", car: "Planifică cu mașina", ok: "OK" },
    fr: { title: "Pas encore de données camping-car", body: "Nous n'avons pas encore de données d'aires pour ce pays. Dès que des données seront disponibles, l'itinéraire jusqu'ici fonctionnera automatiquement.", car: "Planifier en voiture", ok: "OK" },
    es: { title: "Aún no hay datos para autocaravanas", body: "Todavía no tenemos datos de paradas para autocaravanas en este país.", car: "Calcular en coche", ok: "Aceptar" },
    pt: { title: "Ainda não há dados para autocaravanas", body: "Ainda não temos dados de paragens para autocaravanas neste país.", car: "Calcular de carro", ok: "OK" },
    nl: { title: "Nog geen campergegevens", body: "Voor dit land hebben we nog geen gegevens over camperplaatsen.", car: "Met de auto plannen", ok: "OK" },
    hr: { title: "Još nema podataka za kampere", body: "Za ovu državu još nemamo podatke o stajanjima za kampere.", car: "Planiraj automobilom", ok: "U redu" },
    tr: { title: "Henüz motokaravan verisi yok", body: "Bu ülke için henüz motokaravan durağı verimiz yok.", car: "Otomobille planla", ok: "Tamam" },
    pl: { title: "Brak danych dla kamperów", body: "Nie mamy jeszcze danych o postojach dla kamperów w tym kraju.", car: "Zaplanuj samochodem", ok: "OK" },
  };
  var NDC = ND[LANG] || ND.en;
  var ADVISORY_UI = {
    de: { official: "Offizielle aktuelle Regeln", verify: "Nur Reisehinweis. Regeln und Gebühren können sich ändern. Vor der Abfahrt bei der offiziellen Stelle prüfen.", localized: "Die automatisch erzeugten Rechtstexte werden nur auf Deutsch angezeigt.", baseRoute: "Ein Stopp konnte nicht sicher in die Route eingefügt werden. Entfernung und Zeit zeigen deshalb nur die Basisroute." },
    hu: { official: "Hivatalos, aktuális szabályok", verify: "Tájékoztató jellegű. A szabályok és díjak változhatnak, indulás előtt ellenőrizd a hivatalos oldalon.", localized: "Az automatikus jogi összefoglalót csak németül jelenítjük meg.", baseRoute: "Egy megállót nem sikerült biztonságosan beilleszteni az útvonalba, ezért a távolság és idő csak az alapútvonalat mutatja." },
    en: { official: "Official current rules", verify: "Travel guidance only. Rules and fees can change. Check the official source before departure.", localized: "The automated legal summary is shown only in German.", baseRoute: "A stop could not be routed safely. Distance and time therefore show the base route only." },
    ro: { official: "Reguli oficiale actuale", verify: "Doar orientativ. Regulile și taxele se pot schimba. Verifică sursa oficială înainte de plecare.", localized: "Rezumatul juridic automat este afișat numai în limba germană.", baseRoute: "O oprire nu a putut fi inclusă în siguranță. Distanța și timpul indică doar traseul de bază." },
    fr: { official: "Règles officielles actuelles", verify: "Information indicative. Les règles et tarifs peuvent changer. Vérifiez la source officielle avant le départ.", localized: "Le résumé juridique automatique est affiché uniquement en allemand.", baseRoute: "Une étape n'a pas pu être intégrée en toute sécurité. La distance et la durée indiquent donc uniquement l'itinéraire de base." },
    it: { official: "Regole ufficiali aggiornate", verify: "Solo a titolo informativo. Regole e tariffe possono cambiare. Verifica la fonte ufficiale prima di partire.", localized: "Il riepilogo giuridico automatico è mostrato solo in tedesco.", baseRoute: "Non è stato possibile inserire una sosta in modo sicuro. Distanza e durata indicano quindi solo il percorso di base." },
    es: { official: "Normas oficiales vigentes", verify: "Información orientativa. Las normas y tarifas pueden cambiar. Comprueba la fuente oficial antes de salir.", localized: "El resumen jurídico automático se muestra solo en alemán.", baseRoute: "No se pudo incluir una parada de forma segura. La distancia y el tiempo muestran solo la ruta base." },
    pt: { official: "Regras oficiais atuais", verify: "Informação indicativa. As regras e tarifas podem mudar. Confirme na fonte oficial antes da partida.", localized: "O resumo jurídico automático é apresentado apenas em alemão.", baseRoute: "Não foi possível incluir uma paragem com segurança. A distância e o tempo mostram apenas a rota base." },
    nl: { official: "Actuele officiële regels", verify: "Alleen als reisadvies. Regels en tarieven kunnen wijzigen. Controleer voor vertrek de officiële bron.", localized: "De automatische juridische samenvatting wordt alleen in het Duits getoond.", baseRoute: "Een stop kon niet veilig in de route worden opgenomen. Afstand en tijd tonen daarom alleen de basisroute." },
    hr: { official: "Aktualna službena pravila", verify: "Samo informativno. Pravila i naknade mogu se promijeniti. Prije polaska provjerite službeni izvor.", localized: "Automatski pravni sažetak prikazuje se samo na njemačkom.", baseRoute: "Stajanje nije bilo moguće sigurno uključiti u rutu. Udaljenost i vrijeme zato prikazuju samo osnovnu rutu." },
    tr: { official: "Güncel resmî kurallar", verify: "Yalnızca bilgilendirme amaçlıdır. Kurallar ve ücretler değişebilir. Yola çıkmadan önce resmî kaynağı kontrol edin.", localized: "Otomatik yasal özet yalnızca Almanca gösterilir.", baseRoute: "Bir durak rotaya güvenli biçimde eklenemedi. Bu nedenle mesafe ve süre yalnızca ana rotayı gösterir." },
    pl: { official: "Aktualne oficjalne zasady", verify: "Informacja orientacyjna. Zasady i opłaty mogą się zmienić. Przed wyjazdem sprawdź oficjalne źródło.", localized: "Automatyczne podsumowanie prawne jest wyświetlane tylko po niemiecku.", baseRoute: "Nie udało się bezpiecznie włączyć postoju do trasy. Odległość i czas pokazują więc tylko trasę bazową." }
  };
  var AUI = ADVISORY_UI[LANG] || ADVISORY_UI.en;
  var GEO_UI = {
    de: ["Mein Standort", "Standort wird ermittelt…", "Standort konnte nicht ermittelt werden. Bitte Browserfreigabe prüfen.", "Routenübersicht", "Die Wohnmobilroute endet am nächsten befahrbaren Punkt, {km} km vom exakten Ziel entfernt."],
    hu: ["Saját helyzetem", "Helyzet meghatározása…", "A helyzet nem határozható meg. Ellenőrizd a böngésző helyengedélyét.", "Útvonal áttekintése", "A lakóautós útvonal a legközelebbi járható pontnál ér véget, {km} km-re a pontos céltól."],
    en: ["My location", "Locating…", "Location is unavailable. Check the browser location permission.", "Route overview", "The motorhome route ends at the nearest accessible point, {km} km from the exact destination."],
    ro: ["Locația mea", "Se determină locația…", "Locația nu este disponibilă. Verifică permisiunea browserului.", "Prezentarea traseului", "Traseul autorulotei se termină la cel mai apropiat punct accesibil, la {km} km de destinația exactă."],
    fr: ["Ma position", "Localisation…", "La position est indisponible. Vérifiez l'autorisation du navigateur.", "Aperçu de l'itinéraire", "L'itinéraire camping-car se termine au point accessible le plus proche, à {km} km de la destination exacte."],
    it: ["La mia posizione", "Localizzazione…", "La posizione non è disponibile. Controlla l'autorizzazione del browser.", "Panoramica del percorso", "Il percorso per camper termina al punto accessibile più vicino, a {km} km dalla destinazione esatta."],
    es: ["Mi ubicación", "Obteniendo ubicación…", "La ubicación no está disponible. Comprueba el permiso del navegador.", "Resumen de la ruta", "La ruta para autocaravanas termina en el punto accesible más cercano, a {km} km del destino exacto."],
    pt: ["A minha localização", "A obter localização…", "A localização não está disponível. Verifique a permissão do navegador.", "Resumo da rota", "A rota para autocaravanas termina no ponto acessível mais próximo, a {km} km do destino exato."],
    nl: ["Mijn locatie", "Locatie bepalen…", "Locatie is niet beschikbaar. Controleer de browsertoestemming.", "Routeoverzicht", "De camperroute eindigt bij het dichtstbijzijnde bereikbare punt, {km} km van de exacte bestemming."],
    hr: ["Moja lokacija", "Određivanje lokacije…", "Lokacija nije dostupna. Provjerite dopuštenje preglednika.", "Pregled rute", "Ruta za kamper završava na najbližoj dostupnoj točki, {km} km od točnog odredišta."],
    tr: ["Konumum", "Konum belirleniyor…", "Konum kullanılamıyor. Tarayıcı konum iznini kontrol edin.", "Rota özeti", "Motokaravan rotası tam hedeften {km} km uzaktaki en yakın erişilebilir noktada sona erer."],
    pl: ["Moja lokalizacja", "Ustalanie lokalizacji…", "Lokalizacja jest niedostępna. Sprawdź uprawnienia przeglądarki.", "Podgląd trasy", "Trasa dla kampera kończy się w najbliższym dostępnym punkcie, {km} km od dokładnego celu."]
  };
  var GUI = GEO_UI[LANG] || GEO_UI.en;
  var OFFICIAL_TOLL = {
    AT: "https://help.asfinag.at/en/vignette-and-section-tolls/vignette/",
    HR: "https://www.hac.hr/en/toll",
    SI: "https://evinjeta.dars.si/en",
    DE: "https://www.toll-collect.de/en/"
  };
  var EU_ROAD_RULES = "https://europa.eu/youreurope/citizens/vehicles/driving-abroad/road-rules-and-safety/index_en.htm";

  function normalizeAdvisory(a) {
    if (!a || a.cc !== "AT") return a;
    var copy = Object.assign({}, a);
    copy.toll = "Vignette bis einschließlich 3,5 t technisch zulässiger Gesamtmasse; über 3,5 t GO-Maut. Auf einzelnen Strecken fällt zusätzlich Streckenmaut an.";
    return copy;
  }

  // ── inline SVG icon set (24x24, stroke=currentColor) ─────────────────────────
  function _svg(p) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="width:1em;height:1em;vertical-align:-.15em">' + p + '</svg>';
  }
  var IC = {
    car: _svg('<path d="M5 11l1.5-4A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 1l1.5 4"/><path d="M3 11h18v5a1 1 0 0 1-1 1h-1.5a1.5 1.5 0 0 1-3 0h-7a1.5 1.5 0 0 1-3 0H4a1 1 0 0 1-1-1Z"/><path d="M6.5 14h1"/><path d="M16.5 14h1"/>'),
    camper: _svg('<path d="M3 16V8a2 2 0 0 1 2-2h11l4 5v5"/><path d="M3 16h2.5a1.5 1.5 0 0 0 3 0h7a1.5 1.5 0 0 0 3 0H21"/><rect x="6" y="8.5" width="4" height="3" rx=".5"/><path d="M14 7v5"/>'),
    water: _svg('<path d="M12 3.5C12 3.5 6 10 6 14a6 6 0 0 0 12 0c0-4-6-10.5-6-10.5Z"/>'),
    recycle: _svg('<path d="M7 8 4.5 12l2 1.2"/><path d="m12 4 2.3 4-2.1 1.3"/><path d="M17.5 10 20 14l-2.4 1.4"/><path d="M5 14.5 7 19h4"/><path d="M14 19h3.5l2-3.5"/><path d="M11.5 5.5 9.7 8.6"/>'),
    power: _svg('<path d="M9 3v5"/><path d="M15 3v5"/><path d="M7 8h10v3a5 5 0 0 1-10 0Z"/><path d="M12 16v5"/>'),
    toilet: _svg('<path d="M4 3v18"/><path d="M4 13h7a4 4 0 0 1-3.5 4L8 21"/><circle cx="16.5" cy="6" r="2"/><path d="M16.5 9c-2 0-3 1.5-3 4l1 0 .5 8h3l.5-8 1 0c0-2.5-1-4-3-4Z"/>'),
    shower: _svg('<path d="M4 21V8a3 3 0 0 1 3-3h2"/><path d="M9 5a2 2 0 0 1 4 0"/><circle cx="11" cy="6" r="3.2"/><path d="M9 14v1"/><path d="M12 15v1"/><path d="M15 14v1"/><path d="M7 16v1"/><path d="M17 16v1"/>'),
    compass: _svg('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>'),
    map: _svg('<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z"/><path d="M9 4v14"/><path d="M15 6v14"/>'),
    warning: _svg('<path d="M12 4 2.5 20h19L12 4Z"/><path d="M12 10v4"/><path d="M12 17.5v.2"/>'),
    road: _svg('<path d="M7 3 4 21"/><path d="M17 3l3 18"/><path d="M12 4v2"/><path d="M12 10v2"/><path d="M12 16v2"/>'),
    building: _svg('<path d="M4 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16"/><path d="M13 9h6a1 1 0 0 1 1 1v11"/><path d="M7 8h2"/><path d="M7 12h2"/><path d="M7 16h2"/><path d="M16 13h1"/><path d="M16 17h1"/><path d="M3 21h18"/>'),
    tent: _svg('<path d="M12 4 3 20h18L12 4Z"/><path d="M12 4v16"/><path d="M12 20l5-9"/><path d="M12 20 7 11"/>'),
    wrench: _svg('<path d="M14.5 6a3.5 3.5 0 0 0-4.6 4.3L4 16.2 7.8 20l5.9-5.9A3.5 3.5 0 0 0 18 9.5l-2.3 2.3-1.8-1.8L16.2 7.7Z"/>')
  };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function validRoutePoint(p) { return Array.isArray(p) && p.length === 2 && isFinite(Number(p[0])) && isFinite(Number(p[1])); }
  function $(s) { return M.querySelector(s); }
  function vehicleSpecHtml() {
    return '<div class="plz-rp-camper-spec"><span class="plz-rp-flabel">' + esc(V.title) + '</span>'
      + '<select class="plz-rp-vehicle-preset"><option value="compact">' + esc(V.compact) + '</option><option value="standard" selected>' + esc(V.standard) + '</option><option value="large">' + esc(V.large) + '</option><option value="custom">' + esc(V.custom) + '</option></select>'
      + '<div class="plz-rp-dimensions">'
      + '<label>' + esc(V.length) + '<input class="plz-rp-dim" data-key="length" type="number" min="3" max="15" step="0.1" value="7"><span>m</span></label>'
      + '<label>' + esc(V.width) + '<input class="plz-rp-dim" data-key="width" type="number" min="1.5" max="3.5" step="0.05" value="2.3"><span>m</span></label>'
      + '<label>' + esc(V.height) + '<input class="plz-rp-dim" data-key="height" type="number" min="1.8" max="4.5" step="0.05" value="3.1"><span>m</span></label>'
      + '<label>' + esc(V.weight) + '<input class="plz-rp-dim" data-key="weight" type="number" min="1" max="20" step="0.1" value="3.5"><span>t</span></label>'
      + '</div></div>';
  }

  // ── CSS (egyszeri injektálás) ───────────────────────────────────────────────
  var CSS = '#plz-route-planner.plz-rp{margin:1.4rem 0;background:var(--panel);border:1px solid var(--rule);border-radius:var(--r);padding:1rem 1.05rem 1.15rem;color:var(--ink)}'
    + '.plz-rp-head h2{font-size:1.1rem;margin:0 0 .2rem;display:flex;align-items:center;gap:.4rem}'
    + '.plz-rp-head p{font-size:.84rem;color:var(--ink-soft);margin:.15rem 0 .8rem}'
    + '.plz-rp-row{display:flex;flex-wrap:wrap;gap:.55rem;margin-bottom:.5rem}'
    + '.plz-rp-row>label,.plz-rp-vehicle{flex:1 1 160px;display:flex;flex-direction:column;font-size:.74rem;color:var(--ink-soft);gap:.25rem}'
    + '.plz-rp input,.plz-rp select{background:var(--paper);border:1px solid var(--rule);border-radius:var(--r);padding:.5rem .6rem;color:var(--ink);font-size:.9rem}'
    + '.plz-rp input:focus,.plz-rp select:focus{outline:none;border-color:var(--accent)}'
    + '.plz-rp-vehbtns{display:flex;border:1px solid var(--rule);border-radius:var(--r);overflow:hidden}'
    + '.plz-rp-mode{flex:1;padding:.5rem;background:var(--paper-2);color:var(--ink-soft);border:none;cursor:pointer;font-size:.85rem;display:inline-flex;align-items:center;justify-content:center;gap:.35em}'
    + '.plz-rp-mode[aria-selected="true"]{background:var(--accent);color:#fff;font-weight:700}'
    + '.plz-rp-filters{display:flex;flex-wrap:wrap;gap:.45rem;align-items:center;margin:.2rem 0 .7rem;background:var(--paper-2);border:1px solid var(--rule);border-radius:var(--r);padding:.6rem .7rem}'
    + '.plz-rp.mode-car .plz-rp-filters{display:none!important}'
    + '.plz-rp-flabel{flex:1 0 100%;font-size:.72rem;font-weight:600;letter-spacing:.02em;color:var(--ink-soft);margin-bottom:.1rem}'
    + '.plz-rp-svcl{font-size:.8rem;background:var(--paper);border:1px solid var(--rule);border-radius:999px;padding:.3rem .66rem;cursor:pointer;display:inline-flex;gap:.3rem;align-items:center;color:var(--ink-soft);transition:background .15s,border-color .15s,color .15s}'
    + '.plz-rp-svcl input{position:absolute;opacity:0;width:0;height:0;margin:0}'
    + '.plz-rp-svcl svg{width:1em;height:1em}'
    + '.plz-rp-svcl:hover{background:var(--paper-2)}'
    + '.plz-rp-svcl:has(input:checked){background:var(--accent-wash);border-color:var(--accent);color:var(--ink)}'
    + '.plz-rp-camper-spec{flex:1 0 100%;display:flex;flex-wrap:wrap;align-items:end;gap:.45rem;padding-top:.35rem;border-top:1px solid var(--rule)}'
    + '.plz-rp-camper-spec>.plz-rp-flabel{flex:1 0 100%}.plz-rp-vehicle-preset{flex:1 1 180px}'
    + '.plz-rp-dimensions{display:grid;grid-template-columns:repeat(4,minmax(70px,1fr));gap:.4rem;flex:3 1 360px}'
    + '.plz-rp-dimensions label{position:relative;font-size:.68rem;color:var(--ink-soft)}.plz-rp-dimensions input{width:100%;padding-right:1.5rem!important}'
    + '.plz-rp-dimensions label span{position:absolute;right:.48rem;bottom:.52rem;font-size:.72rem;color:var(--ink-faint);pointer-events:none}'
    + '.plz-rp-go{width:100%;padding:.65rem;border:none;border-radius:999px;background:var(--accent);color:#fff;font-weight:800;font-size:.98rem;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:.4em}'
    + '.plz-rp-go:hover{background:var(--accent-deep)}'
    + '.plz-rp-locate{align-self:flex-start;margin-top:.2rem;border:1px solid var(--rule);border-radius:999px;background:var(--paper-2);color:var(--accent);padding:.34rem .68rem;font-size:.76rem;font-weight:600;cursor:pointer}'
    + '.plz-rp-locate:hover{background:var(--accent-wash)}'
    + '.plz-rp-status{text-align:center;font-size:.82rem;color:var(--ink-soft);min-height:1.1em;margin-top:.5rem}'
    + '.plz-rp-result{margin-top:1rem;display:flex;flex-direction:column;gap:.9rem}'
    + '.plz-rp-summary{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem 1.1rem;background:var(--paper-2);border:1px solid var(--rule);border-radius:var(--r);padding:.7rem .9rem}'
    + '.plz-rp-stat b{font-size:1.35rem;color:var(--ink)}.plz-rp-stat{font-size:.78rem;color:var(--ink-soft)}'
    + '.plz-rp-mapsall{margin-left:auto;background:var(--accent);color:#fff;font-weight:700;font-size:.82rem;padding:.38rem .8rem;border-radius:999px;text-decoration:none;display:inline-flex;align-items:center;gap:.35em}'
    + '.plz-rp-mapsall:hover{background:var(--accent-deep)}'
    + '.plz-rp-overview{background:linear-gradient(145deg,var(--paper-2),var(--paper));border:1px solid var(--rule);border-radius:var(--r);padding:.45rem .6rem}.plz-rp-overview svg{display:block;width:100%;height:auto;max-height:190px}.plz-rp-overview path{fill:none;stroke:var(--accent);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}.plz-rp-overview circle{stroke:var(--paper);stroke-width:3}.plz-rp-overview .end{fill:var(--accent-deep)}.plz-rp-overview .stop{fill:#ffae5c}'
    + '.plz-rp-adv{background:var(--paper-2);border:1px solid var(--rule);border-radius:var(--r);padding:.7rem .9rem}'
    + '.plz-rp-adv h3{font-size:.92rem;margin:0 0 .5rem;display:flex;align-items:center;gap:.35em}'
    + '.plz-rp-advb svg{margin-right:.25em}'
    + '.plz-rp-advc{background:var(--paper);border:1px solid var(--rule);border-radius:var(--r);padding:.45rem .6rem;margin-bottom:.4rem}'
    + '.plz-rp-advc summary{cursor:pointer;font-weight:600;font-size:.86rem}.plz-rp-advc summary span{color:var(--ink-faint);font-size:.76rem}'
    + '.plz-rp-advb{font-size:.82rem;color:var(--ink-soft);margin-top:.4rem;display:flex;flex-direction:column;gap:.2rem}'
    + '.plz-rp-muted{color:var(--ink-faint)}.plz-rp-advnote{font-size:.74rem;margin:.4rem 0 0}'
    + '.plz-rp-deck{display:flex;gap:.7rem;overflow-x:auto;scroll-snap-type:x mandatory;padding:.2rem .1rem .6rem;scrollbar-width:thin;-webkit-overflow-scrolling:touch}'
    + '.plz-rp-deck::-webkit-scrollbar{height:6px}'
    + '.plz-rp-deck::-webkit-scrollbar-thumb{background:var(--rule);border-radius:3px}'
    + '.plz-rp-card{flex:0 0 min(85%,300px);scroll-snap-align:start;scroll-snap-stop:always}'
    + '.plz-rp-card>.plzsc{background:var(--paper);border:1px solid var(--rule);border-left:2px solid var(--accent);border-radius:var(--r);padding:.85rem;height:100%;transition:transform .2s,border-color .2s}'
    + '.plz-rp-card>.plzsc:hover{border-color:var(--accent);transform:translateY(-2px)}'
    + '.plz-rp-cardfb{background:var(--paper);border:1px solid var(--rule);border-left:2px solid var(--accent);border-radius:var(--r);padding:.85rem;height:100%}'
    + '.plz-rp-cardfb h4{margin:.3rem 0;font-size:.95rem;color:var(--ink)}.plz-rp-cardfb a{color:var(--accent);text-decoration:none;font-size:.84rem}'
    + '.plz-rp-badge{font-size:.72rem;font-weight:700;color:var(--accent);letter-spacing:.05em}'
    + '.plz-rp-keep{display:flex;align-items:center;gap:.35rem;font-size:.8rem;color:var(--ink-soft);margin-top:.5rem;cursor:pointer}'
    + '.plz-rp-dots{display:flex;justify-content:center;gap:.35rem;margin:.4rem 0 .15rem;flex-wrap:wrap}'
    + '.plz-rp-dot{width:7px;height:7px;border-radius:50%;background:var(--rule);transition:all .2s;border:none;padding:0;cursor:pointer}'
    + '.plz-rp-dot.active{background:var(--accent);transform:scale(1.3)}'
    + '.plz-rp-swipe{text-align:center;font-size:.78rem;color:var(--ink-faint);margin:.1rem 0;font-style:italic}'
    + '.plz-rp-regen{width:100%;padding:.6rem;border-radius:999px;border:1px solid var(--rule);background:var(--paper-2);color:var(--ink);font-weight:600;cursor:pointer}'
    + '.plz-rp-regen:hover{background:var(--paper)}'
    + '.plz-rp-credit{font-size:.7rem;color:var(--ink-faint);margin:.7rem 0 0;text-align:center}'
    + '.plz-rp-row>label{position:relative}'
    + '.plz-rp-ac{position:absolute;top:100%;left:0;right:0;z-index:30;background:var(--panel);border:1px solid var(--rule);border-radius:var(--r);margin-top:2px;max-height:240px;overflow-y:auto;box-shadow:0 10px 28px rgba(33,29,24,.18)}'
    + '.plz-rp-ac-item{padding:.42rem .6rem;cursor:pointer;display:flex;flex-direction:column;gap:1px}'
    + '.plz-rp-ac-item:hover,.plz-rp-ac-item.on{background:var(--accent-wash)}'
    + '.plz-rp-ac-item .nm{font-size:.86rem;color:var(--ink)}.plz-rp-ac-item .sub{font-size:.72rem;color:var(--ink-faint)}'
    + '#plz-route-planner.plz-rp{position:relative}'
    + '.plz-rp-pop{position:absolute;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;background:rgba(33,29,24,.45);border-radius:var(--r);padding:1rem}'
    + '.plz-rp-pop-card{background:var(--panel);border:1px solid var(--rule);border-radius:var(--r);padding:1rem 1.1rem;max-width:340px;box-shadow:0 12px 32px rgba(33,29,24,.25)}'
    + '.plz-rp-pop-card h4{margin:0 0 .4rem;font-size:1rem;color:var(--ink)}'
    + '.plz-rp-pop-card p{margin:0 0 .85rem;font-size:.85rem;color:var(--ink-soft);line-height:1.45}'
    + '.plz-rp-pop-btns{display:flex;gap:.5rem;justify-content:flex-end;flex-wrap:wrap}'
    + '.plz-rp-pop-btns button{padding:.45rem .85rem;border-radius:999px;font-size:.85rem;font-weight:600;cursor:pointer;border:1px solid var(--rule)}'
    + '.plz-rp-pop-car{background:var(--accent);color:#fff;border-color:var(--accent)}'
    + '.plz-rp-pop-ok{background:var(--paper);color:var(--ink)}'
    + '@media(max-width:560px){.plz-rp-card{flex:0 0 calc(100% - .6rem)}.plz-rp-dimensions{grid-template-columns:repeat(2,1fr)}}';
  if (!document.getElementById("plz-rp-css")) {
    var st = document.createElement("style"); st.id = "plz-rp-css"; st.textContent = CSS; document.head.appendChild(st);
  }

  // ── UI felépítése (ha még nincs beégetve) ───────────────────────────────────
  var hasDest = false;
  if (!M.querySelector(".plz-rp-origin")) {
    M.classList.add("plz-rp");
    var stopsOpts = ""; for (var n = 0; n <= 8; n++) stopsOpts += '<option' + (n === 0 ? " selected" : "") + '>' + n + '</option>';
    var svcDefs = [["water", T.water, IC.water], ["dump", T.dump, IC.recycle], ["power", T.power, IC.power], ["toilets", T.wc, IC.toilet], ["shower", T.shower, IC.shower]];
    var svcHtml = svcDefs.map(function (p) { return '<label class="plz-rp-svcl"><input type="checkbox" class="plz-rp-svc" value="' + p[0] + '"> ' + p[2] + ' ' + esc(p[1]) + '</label>'; }).join("");
    M.innerHTML =
      '<div class="plz-rp-head"><h2>' + esc(T.h) + '</h2><p>' + esc(T.sub) + '</p></div>'
      + '<div class="plz-rp-row">'
      + '<label>' + esc(T.from) + '<input class="plz-rp-origin" type="text" placeholder="' + esc(T.fromPh) + '"></label>'
      + '<label>' + esc(T.dest) + '<input class="plz-rp-dest" type="text" placeholder="' + esc(T.destPh) + '" value="' + esc(DEST_PREFILL.name) + '"></label>'
      + '</div><div class="plz-rp-row">'
      + '<label>' + esc(T.via) + '<input class="plz-rp-via" type="text" placeholder="' + esc(T.viaPh) + '"></label>'
      + '<label>' + esc(T.nights) + '<select class="plz-rp-stops">' + stopsOpts + '</select></label>'
      + '</div><div class="plz-rp-row"><div class="plz-rp-vehicle">' + esc(T.vehicle)
      + '<div class="plz-rp-vehbtns"><button type="button" class="plz-rp-mode" data-mode="car" aria-selected="true">' + IC.car + ' ' + esc(T.car) + '</button><button type="button" class="plz-rp-mode" data-mode="camper" aria-selected="false">' + IC.camper + ' ' + esc(T.camper) + '</button></div></div></div>'
      + '<div class="plz-rp-filters"><span class="plz-rp-camperonly" style="display:contents"><span class="plz-rp-flabel">' + esc(T.filter) + '</span>' + svcHtml
      + '<select class="plz-rp-tier"><option value="AB">' + esc(T.tierAB) + '</option><option value="A">' + esc(T.tierA) + '</option><option value="B">' + esc(T.tierB) + '</option><option value="ABC">' + esc(T.tierABC) + '</option></select></span>' + vehicleSpecHtml() + '</div>'
      + '<button type="button" class="plz-rp-go">' + IC.compass + ' ' + esc(T.plan) + '</button>'
      + '<div class="plz-rp-status"></div><div class="plz-rp-result" style="display:none"></div>'
      + '<p class="plz-rp-credit">© OpenStreetMap contributors · OpenRouteService</p>';
    hasDest = true;
  } else {
    hasDest = !!M.querySelector(".plz-rp-dest");
  }
  var originInput = M.querySelector(".plz-rp-origin");
  if (originInput && originInput.parentNode && !M.querySelector(".plz-rp-locate")) {
    originInput.parentNode.insertAdjacentHTML("beforeend", '<button type="button" class="plz-rp-locate">◎ ' + esc(GUI[0]) + '</button>');
  }
  if (!M.querySelector(".plz-rp-camper-spec")) {
    var filterBox = M.querySelector(".plz-rp-filters");
    if (filterBox) filterBox.insertAdjacentHTML("beforeend", vehicleSpecHtml());
  }
  var presetEl = M.querySelector(".plz-rp-vehicle-preset");
  if (presetEl) presetEl.addEventListener("change", function () {
    var preset = VEHICLE_PRESETS[presetEl.value];
    if (!preset) return;
    M.querySelectorAll(".plz-rp-dim").forEach(function (input) { input.value = preset[input.dataset.key]; });
  });
  M.querySelectorAll(".plz-rp-dim").forEach(function (input) {
    input.addEventListener("input", function () { if (presetEl) presetEl.value = "custom"; });
  });

  // car mode = stops at OUR city POIs (camper-only service/tier filters hidden); camper = OSM camper sites
  function applyModeClass() { M.classList.toggle("mode-car", mode === "car"); M.classList.toggle("mode-camper", mode !== "car"); }
  applyModeClass();
  function setMode(m, b) {
    mode = m;
    M.querySelectorAll(".plz-rp-mode").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
    applyModeClass();
  }
  // ── Wohnmobil-kapuzás: csak ahol van camping-adat (Worker /countries → SUPPORTED) ──
  function ccOk(cc) { return !SUPPORTED || !cc || !!SUPPORTED[cc]; } // ismeretlen lista/cc → engedjük
  function applyCamperAvail() {
    var cb = M.querySelector('.plz-rp-mode[data-mode="camper"]');
    if (!cb) return;
    var ok = ccOk(PREFILL_CC);
    cb.style.display = ok ? "" : "none";               // nincs adat az ország POI-jára → camper gomb eltűnik
    if (!ok && mode === "camper") { var carb = M.querySelector('.plz-rp-mode[data-mode="car"]'); if (carb) setMode("car", carb); }
  }
  // az aktuális cél országkódja: AC-választás (dataset.cc) → előkitöltött (PREFILL_CC) → reverse-geocode
  function curDestCC() {
    var di = $(".plz-rp-dest");
    if (di && di.dataset.cc) return Promise.resolve(di.dataset.cc.toUpperCase());
    var v = di ? di.value.trim() : "";
    if (!v || (DEST_PREFILL.name && v === DEST_PREFILL.name)) return Promise.resolve(PREFILL_CC || null);
    return inputCoords(".plz-rp-dest", DEST_PREFILL.coords).then(function (c) {
      if (!c) return null;
      return fetch("https://photon.komoot.io/reverse?lang=en&lat=" + c[1] + "&lon=" + c[0])
        .then(function (r) { return r.json(); })
        .then(function (j) { var pr = j.features && j.features[0] && j.features[0].properties; return pr && pr.countrycode ? pr.countrycode.toUpperCase() : null; })
        .catch(function () { return null; });
    });
  }
  function showNoData(cc) {
    var name = cc || "";
    try { name = (new Intl.DisplayNames([LANG], { type: "region" })).of(cc) || cc; } catch (e) { }
    var old = M.querySelector(".plz-rp-pop"); if (old && old.parentNode) old.parentNode.removeChild(old);
    var ov = document.createElement("div"); ov.className = "plz-rp-pop";
    ov.innerHTML = '<div class="plz-rp-pop-card"><h4>🚐 ' + esc(NDC.title) + '</h4>'
      + '<p>' + (name ? '<b>' + esc(name) + '</b>: ' : '') + esc(NDC.body) + '</p>'
      + '<div class="plz-rp-pop-btns"><button type="button" class="plz-rp-pop-car">' + esc(NDC.car) + '</button>'
      + '<button type="button" class="plz-rp-pop-ok">' + esc(NDC.ok) + '</button></div></div>';
    M.appendChild(ov);
    function close() { if (ov.parentNode) ov.parentNode.removeChild(ov); }
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    ov.querySelector(".plz-rp-pop-ok").addEventListener("click", close);
    ov.querySelector(".plz-rp-pop-car").addEventListener("click", function () {
      var carb = M.querySelector('.plz-rp-mode[data-mode="car"]'); if (carb) setMode("car", carb); close();
    });
  }
  M.querySelectorAll(".plz-rp-mode").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.dataset.mode === "camper") {
        curDestCC().then(function (cc) {
          if (SUPPORTED && cc && !SUPPORTED[cc]) { showNoData(cc); return; } // nincs adat → marad autó
          setMode("camper", b);
        });
      } else setMode(b.dataset.mode, b);
    });
  });
  // lefedett országok lekérése (KV-ből, deploy nélkül friss) — bukásnál SUPPORTED=null marad → nem tilt
  fetch(WORKER_BASE + "/countries").then(function (r) { return r.json(); }).then(function (j) {
    if (j && j.ok && j.countries && j.countries.length) {
      SUPPORTED = {}; j.countries.forEach(function (c) { SUPPORTED[String(c).toUpperCase()] = 1; });
      applyCamperAvail();
    }
  }).catch(function () { });

  function geocode(q) {
    return fetch("https://photon.komoot.io/api?limit=1&lang=" + GEO_LANG + "&q=" + encodeURIComponent(q))
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j.features || !j.features.length) throw new Error(C.notFound + ": " + q);
        return j.features[0].geometry.coordinates;
      });
  }

  // ── Autocomplete (egyértelmű hely-választás, megöli a "rossz Lauingen" gondot) ──
  function attachAC(input) {
    if (!input) return;
    var label = input.parentNode;
    var box = document.createElement("div"); box.className = "plz-rp-ac"; box.style.display = "none";
    label.appendChild(box);
    var t = null, items = [], sel = -1;
    function close() { box.style.display = "none"; box.innerHTML = ""; items = []; sel = -1; }
    function choose(it) { input.value = it.label; input.dataset.lon = it.coords[0]; input.dataset.lat = it.coords[1]; if (it.cc) input.dataset.cc = it.cc; else input.removeAttribute("data-cc"); close(); }
    input.addEventListener("input", function () {
      input.removeAttribute("data-lon"); input.removeAttribute("data-lat"); input.removeAttribute("data-cc"); // gépelés → a kiválasztott koord/cc érvénytelen
      var q = input.value.trim();
      if (t) clearTimeout(t);
      if (q.length < 2) { close(); return; }
      t = setTimeout(function () {
        fetch("https://photon.komoot.io/api?limit=6&lang=" + GEO_LANG + "&q=" + encodeURIComponent(q))
          .then(function (r) { return r.json(); })
          .then(function (j) {
            items = (j.features || []).map(function (f) {
              var p = f.properties || {}, nm = p.name || "";
              var extra = [p.city, p.county].filter(function (x) { return x && x !== nm; }).slice(0, 1).join("");
              var sub = [extra, p.state, p.country || p.countrycode].filter(Boolean).join(" · ");
              return { label: nm, sub: sub, coords: f.geometry.coordinates, cc: (p.countrycode || "").toUpperCase() };
            }).filter(function (it) { return it.label; });
            if (!items.length) { close(); return; }
            box.innerHTML = items.map(function (it, i) { return '<div class="plz-rp-ac-item" data-i="' + i + '"><span class="nm">' + esc(it.label) + '</span><span class="sub">' + esc(it.sub) + '</span></div>'; }).join("");
            box.style.display = ""; sel = -1;
            box.querySelectorAll(".plz-rp-ac-item").forEach(function (elx) { elx.addEventListener("mousedown", function (e) { e.preventDefault(); choose(items[+elx.dataset.i]); }); });
          }).catch(function () { close(); });
      }, 280);
    });
    input.addEventListener("keydown", function (e) {
      if (box.style.display === "none") return;
      if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(sel + 1, items.length - 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(sel - 1, 0); }
      else if (e.key === "Enter" && sel >= 0) { e.preventDefault(); e.stopImmediatePropagation(); choose(items[sel]); return; }
      else if (e.key === "Escape") { close(); return; }
      else return;
      box.querySelectorAll(".plz-rp-ac-item").forEach(function (elx, i) { elx.classList.toggle("on", i === sel); });
    });
    input.addEventListener("blur", function () { setTimeout(close, 180); });
  }
  attachAC($(".plz-rp-origin")); attachAC($(".plz-rp-dest")); attachAC($(".plz-rp-via"));
  var locateButton = $(".plz-rp-locate");
  if (locateButton) locateButton.addEventListener("click", function () {
    var input = $(".plz-rp-origin"), stt = $(".plz-rp-status");
    if (!input || !navigator.geolocation) { if (stt) stt.textContent = "⚠️ " + GUI[2]; return; }
    locateButton.disabled = true; if (stt) stt.textContent = GUI[1];
    navigator.geolocation.getCurrentPosition(function (pos) {
      input.value = GUI[0]; input.dataset.lon = pos.coords.longitude; input.dataset.lat = pos.coords.latitude;
      input.removeAttribute("data-cc"); locateButton.disabled = false; if (stt) stt.textContent = "";
    }, function () { locateButton.disabled = false; if (stt) stt.textContent = "⚠️ " + GUI[2]; }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
  });

  // koord-feloldás: ha a user a legördülőből választott (dataset coords) → azt; különben geocode limit=1; üres → fallback
  function inputCoords(sel, fallback) {
    var elx = $(sel); if (!elx) return Promise.resolve(fallback || null);
    if (elx.dataset.lon && elx.dataset.lat) return Promise.resolve([parseFloat(elx.dataset.lon), parseFloat(elx.dataset.lat)]);
    var v = elx.value.trim();
    if (!v) return Promise.resolve(fallback || null);
    if (sel === ".plz-rp-dest" && DEST_PREFILL.coords && DEST_PREFILL.name && v === DEST_PREFILL.name) return Promise.resolve(DEST_PREFILL.coords);
    return geocode(v);
  }
  function plan(req) {
    return fetch(WORKER, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(req) })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.ok) {
          var err = new Error(data.error || "Error");
          err.detail = data.detail || ""; err.status = data.status || 0;
          throw err;
        }
        return data;
      });
  }
  function routeError(e) {
    if (mode !== "camper") return e && e.message ? e.message : "Error";
    var unreachable = /code.?["': ]+(2009|2010)|route could not be found|could not find routable point/i.test((e && e.detail) || "");
    var msg = unreachable ? {
      de: "Für den exakten Zielpunkt wurde keine befahrbare Wohnmobilroute gefunden. Versuche einen nahe gelegenen Parkplatz oder den Auto-Modus.", hu: "A pontos célponthoz nem található lakóautóval járható út. Próbálj közeli parkolót vagy válts autó módra.", en: "No motorhome-accessible route was found to the exact destination. Try a nearby parking area or switch to car mode.", ro: "Nu s-a găsit un traseu accesibil autorulotei până la destinația exactă. Încearcă o parcare apropiată sau modul mașină.", fr: "Aucun itinéraire accessible en camping-car n'a été trouvé jusqu'au point exact. Essayez un parking proche ou le mode voiture.", it: "Non è stato trovato un percorso accessibile in camper fino al punto esatto. Prova un parcheggio vicino o la modalità auto.", es: "No se encontró una ruta accesible para autocaravanas hasta el punto exacto. Prueba un aparcamiento cercano o el modo coche.", pt: "Não foi encontrada uma rota acessível a autocaravanas até ao ponto exato. Tente um estacionamento próximo ou o modo carro.", nl: "Er is geen voor campers toegankelijke route naar het exacte punt gevonden. Probeer een nabijgelegen parking of de automodus.", hr: "Nije pronađena ruta dostupna kamperom do točne lokacije. Pokušajte s obližnjim parkiralištem ili automobilskim načinom.", tr: "Tam hedefe motokaravanla erişilebilen bir rota bulunamadı. Yakındaki bir otoparkı veya otomobil modunu deneyin.", pl: "Nie znaleziono trasy dostępnej dla kampera do dokładnego punktu. Spróbuj pobliskiego parkingu lub trybu samochodowego."
    } : {
      de: "Die Wohnmobilroute ist vorübergehend nicht verfügbar. Bitte versuche es später erneut oder nutze den Auto-Modus.", hu: "A lakóautós útvonal átmenetileg nem érhető el. Próbáld újra később, vagy válts autó módra.", en: "Motorhome routing is temporarily unavailable. Try again later or switch to car mode.", ro: "Ruta pentru autorulotă este temporar indisponibilă. Încearcă mai târziu sau folosește modul mașină.", fr: "L'itinéraire camping-car est temporairement indisponible. Réessayez plus tard ou utilisez le mode voiture.", it: "Il percorso per camper è temporaneamente non disponibile. Riprova più tardi o usa la modalità auto.", es: "La ruta para autocaravanas no está disponible temporalmente. Inténtalo más tarde o usa el modo coche.", pt: "A rota para autocaravanas está temporariamente indisponível. Tente mais tarde ou use o modo carro.", nl: "Camperroutes zijn tijdelijk niet beschikbaar. Probeer het later opnieuw of gebruik de automodus.", hr: "Ruta za kampere privremeno nije dostupna. Pokušajte kasnije ili upotrijebite automobilski način.", tr: "Motokaravan rotası geçici olarak kullanılamıyor. Daha sonra yeniden deneyin veya otomobil modunu kullanın.", pl: "Trasa dla kampera jest chwilowo niedostępna. Spróbuj później lub użyj trybu samochodowego."
    };
    return msg[LANG] || msg.en;
  }
  function readVehicle() {
    if (mode !== "camper") return null;
    var limits = { length: [3, 15], width: [1.5, 3.5], height: [1.8, 4.5], weight: [1, 20] };
    var vehicle = {}, valid = true;
    M.querySelectorAll(".plz-rp-dim").forEach(function (input) {
      var key = input.dataset.key, value = parseFloat(input.value), range = limits[key];
      if (!range || !isFinite(value) || value < range[0] || value > range[1]) valid = false;
      vehicle[key] = value;
    });
    return valid ? vehicle : null;
  }
  // a cél feloldása: ha van dest-input és a user nem írta át az előkitöltöttet → előkitöltött koord; különben geocode
  function resolveDest() {
    var di = $(".plz-rp-dest");
    if (!di) return Promise.resolve(DEST_PREFILL.coords); // régi beégetett (fix cél)
    var v = di.value.trim();
    if (DEST_PREFILL.coords && DEST_PREFILL.name && v === DEST_PREFILL.name) return Promise.resolve(DEST_PREFILL.coords);
    if (!v) return Promise.resolve(DEST_PREFILL.coords);
    return geocode(v);
  }
  function destNameNow() { var di = $(".plz-rp-dest"); return di ? (di.value.trim() || DEST_PREFILL.name) : DEST_PREFILL.name; }

  // Wohnmobil-mód tervezés előtt: ha a cél időközben támogatatlan országra változott → popup, nem tervezünk.
  function go() {
    if (mode === "camper") {
      curDestCC().then(function (cc) {
        if (SUPPORTED && cc && !SUPPORTED[cc]) { showNoData(cc); return; }
        _go();
      });
    } else _go();
  }
  function _go() {
    if (busy) return;
    var stt = $(".plz-rp-status"), res = $(".plz-rp-result");
    var oEl = $(".plz-rp-origin"), dEl = $(".plz-rp-dest");
    var hasOrigin = oEl && (oEl.dataset.lon || oEl.value.trim());
    var hasDestVal = (dEl && (dEl.dataset.lon || dEl.value.trim())) || DEST_PREFILL.coords;
    var stops = parseInt($(".plz-rp-stops").value, 10);
    if (!hasOrigin || !hasDestVal) { stt.textContent = C.needBoth; return; }
    stt.textContent = C.searching; res.style.display = "none";
    var reqServices = Array.prototype.map.call(M.querySelectorAll(".plz-rp-svc:checked"), function (c) { return c.value; });
    var tiers = ({ AB: ["A", "B"], A: ["A"], B: ["B"], ABC: ["A", "B", "C"] })[$(".plz-rp-tier").value] || ["A", "B"];
    var vehicle = readVehicle();
    if (mode === "camper" && !vehicle) { stt.textContent = V.invalid; return; }
    busy = true;
    var goButton = $(".plz-rp-go"); if (goButton) goButton.disabled = true;
    var _bEl = $(".plz-rp-buffer"); var bufferKm = _bEl ? (parseInt(_bEl.value, 10) || 20) : 20; // buffer selector removed → fixed 20km corridor
    var origin, destination, destName = destNameNow();
    Promise.all([inputCoords(".plz-rp-origin"), inputCoords(".plz-rp-dest", DEST_PREFILL.coords), inputCoords(".plz-rp-via")]).then(function (r) {
      origin = r[0]; destination = r[1]; var baseAnchors = r[2] ? [r[2]] : [];
      if (!origin || !destination) throw new Error(C.needBoth);
      stt.textContent = C.routing;
      lastReq = { origin: origin, destination: destination, baseAnchors: baseAnchors, stops: stops, mode: mode, vehicle: vehicle, variant: 0, reqServices: reqServices, tiers: tiers, bufferKm: bufferKm, destName: destName };
      return plan({ origin: origin, destination: destination, anchors: baseAnchors, stops: stops, mode: mode, vehicle: vehicle, variant: 0, reqServices: reqServices, tiers: tiers, bufferKm: bufferKm });
    }).then(normalizeRequestedStops).then(mergeCamperKept).then(carify).then(rerouteThroughStops).then(function (data) { return refineCountries(data).then(function () { render(data); stt.textContent = ""; }); })
      .catch(function (e) { stt.textContent = "⚠️ " + routeError(e); })
      .then(function () { busy = false; if (goButton) goButton.disabled = false; });
  }

  // The Worker historically treats stops=0 as its default (2). Keep zero-night
  // routes honest on the client until every deployed Worker version accepts 0.
  function normalizeRequestedStops(d) {
    if (!lastReq || lastReq.stops !== 0) return d;
    d.days = [{ day: 1, driveKmCumulative: Math.round(d.summary.km || 0), overnight: null }];
    d.summary.overnightStops = 0;
    return d;
  }

  // Preserve camper stops selected with "keep" while the Worker generates only
  // the remaining positions. Rebuild day cards in actual route order.
  function mergeCamperKept(d) {
    var kept = lastReq && lastReq._keptStops;
    if (!lastReq || lastReq.mode !== "camper" || !kept || !kept.length || !d.days) return d;
    var selected = kept.slice(), seen = {};
    selected.forEach(function (s) { seen[s.lat.toFixed(5) + "," + s.lon.toFixed(5)] = 1; });
    d.days.filter(function (x) { return x.overnight; }).forEach(function (x) {
      var s = x.overnight, key = s.lat.toFixed(5) + "," + s.lon.toFixed(5);
      if (!seen[key] && selected.length < lastReq.stops) { seen[key] = 1; selected.push(s); }
    });
    var line = d.route || [], cum = [0];
    for (var i = 1; i < line.length; i++) cum.push(cum[i - 1] + cHav(line[i - 1][1], line[i - 1][0], line[i][1], line[i][0]));
    selected = selected.map(function (s) {
      var best = 0, distance = Infinity;
      for (var j = 0; j < line.length; j++) {
        var dd = cHav(s.lat, s.lon, line[j][1], line[j][0]);
        if (dd < distance) { distance = dd; best = j; }
      }
      return { stop: s, along: cum[best] || 0 };
    }).sort(function (a, b) { return a.along - b.along; });
    d.days = selected.map(function (x, idx) { return { day: idx + 1, driveKmCumulative: Math.round(x.along), overnight: x.stop }; });
    d.days.push({ day: d.days.length + 1, driveKmCumulative: Math.round(cum[cum.length - 1] || d.summary.km || 0), overnight: null });
    d.summary.overnightStops = selected.length;
    return d;
  }

  // A Worker az országokat a korridor-bufferből (20km) veszi → a határ közeli (pl. olasz)
  // megállók is bekerülnek, pedig a route nem megy át rajtuk. A tényleges tranzit-országokat
  // a route-vonal mintapontjainak reverse-geocode-jából számoljuk, és kiszűrjük a hamis cc-ket.
  function refineCountries(d) {
    var pts = d.route || [];
    if (!pts.length || !d.advisory || !d.advisory.length) return Promise.resolve();
    var n = pts.length, S = 8, idx = {};
    for (var i = 0; i < S; i++) idx[Math.floor(i * (n - 1) / (S - 1))] = 1;
    var keys = Object.keys(idx).map(Number);
    return Promise.all(keys.map(function (i) {
      var p = pts[i];
      return fetch("https://photon.komoot.io/reverse?lang=en&lat=" + p[1] + "&lon=" + p[0])
        .then(function (r) { return r.json(); })
        .then(function (j) { var pr = j.features && j.features[0] && j.features[0].properties; return pr && pr.countrycode ? pr.countrycode.toUpperCase() : null; })
        .catch(function () { return null; });
    })).then(function (ccs) {
      var have = {}; ccs.filter(Boolean).forEach(function (c) { have[c] = 1; });
      if (!Object.keys(have).length) return; // reverse-geocode bukott → a Worker listája marad
      d.countries = (d.countries || []).filter(function (c) { return have[c]; });
      d.advisory = (d.advisory || []).filter(function (a) { return have[a.cc]; });
    });
  }

  // ── CAR mode: stops at OUR city POIs along the corridor (static cities-geo index) ──
  // The Worker already returns the route polyline; we pick N cities spaced by cumulative
  // distance, each linking to its own Plizio page. KV-free, mirrors the sights-geo pattern.
  var CBASE = "/data/cities-geo/", cMan = null, cCache = {};
  function cHav(la1, lo1, la2, lo2) {
    var R = 6371, d2r = Math.PI / 180, dLa = (la2 - la1) * d2r, dLo = (lo2 - lo1) * d2r;
    var a = Math.sin(dLa / 2) * Math.sin(dLa / 2) + Math.cos(la1 * d2r) * Math.cos(la2 * d2r) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  function cLoadMan() { if (cMan) return Promise.resolve(cMan); return fetch(CBASE + "_manifest.json").then(function (r) { return r.json(); }).then(function (m) { cMan = m; return m; }).catch(function () { cMan = { cells: [] }; return cMan; }); }
  function cLoadCell(k) { if (cCache[k]) return Promise.resolve(cCache[k]); if (cMan && cMan.cells.indexOf(k) < 0) { cCache[k] = []; return Promise.resolve([]); } return fetch(CBASE + k + ".json").then(function (r) { return r.ok ? r.json() : []; }).then(function (a) { cCache[k] = a || []; return cCache[k]; }).catch(function () { cCache[k] = []; return []; }); }
  function cCellsForLine(line) { var s = {}; for (var i = 0; i < line.length; i++) { var latC = Math.floor(line[i][1]), lonC = Math.floor(line[i][0]); for (var dx = -1; dx <= 1; dx++) for (var dy = -1; dy <= 1; dy++) s[(latC + dx) + "_" + (lonC + dy)] = 1; } return Object.keys(s); }
  function gatherCities(line, bufferKm) {
    var cum = [0]; for (var i = 1; i < line.length; i++) cum.push(cum[i - 1] + cHav(line[i - 1][1], line[i - 1][0], line[i][1], line[i][0]));
    var total = cum[cum.length - 1];
    return cLoadMan().then(function () { return Promise.all(cCellsForLine(line).map(cLoadCell)); }).then(function (arrs) {
      var out = [], seen = {};
      arrs.forEach(function (a) {
        a.forEach(function (s) {
          var lon = s[0], lat = s[1], m = Infinity, bi = 0;
          for (var i = 0; i < line.length; i++) { var dd = cHav(lat, lon, line[i][1], line[i][0]); if (dd < m) { m = dd; bi = i; } }
          if (m > bufferKm) return;
          var key = lat.toFixed(4) + "," + lon.toFixed(4); if (seen[key]) return; seen[key] = 1;
          out.push({ lon: lon, lat: lat, nm: s[2], u: s[3], rank: s[4] || 2, dLine: m, alongKm: cum[bi] });
        });
      });
      return { cands: out, total: total };
    });
  }
  // Replace the Worker's camper day-plan with city stops (only in car mode).
  function carify(d) {
    if (!lastReq || lastReq.mode !== "car") return Promise.resolve(d);
    var line = d.route || [];
    if (line.length < 2) return Promise.resolve(d);
    var stopsWanted = Math.max(0, lastReq.stops | 0), bufferKm = lastReq.bufferKm || 20;
    var keep = (lastReq._keep || []); // [[lon,lat],...] fixed stops to honour on regen
    return gatherCities(line, bufferKm).then(function (res) {
      var cands = res.cands, total = res.total, seg = total / (stopsWanted + 1);
      var picks = [], used = {};
      // honour kept stops first (snap each to the nearest candidate)
      keep.forEach(function (kp) {
        var best = null, bd = Infinity;
        for (var i = 0; i < cands.length; i++) { if (used[i]) continue; var dd = cHav(kp[1], kp[0], cands[i].lat, cands[i].lon); if (dd < bd) { bd = dd; best = i; } }
        if (best != null && bd < 8) { used[best] = 1; picks.push(cands[best]); }
      });
      // Do not use a loop bound that shrinks as picks grows: that returned only
      // about half of the requested stops and skipped every second target segment.
      for (var k = 1; k <= stopsWanted && picks.length < stopsWanted; k++) {
        var target = seg * k;
        if (target >= total) break;
        var bi2 = null, bs = Infinity;
        for (var j = 0; j < cands.length; j++) {
          var c = cands[j]; if (used[j]) continue;
          if (c.alongKm < seg * 0.25 || c.alongKm > total - seg * 0.25) continue;
          var dAlong = Math.abs(c.alongKm - target);
          var score = dAlong + c.dLine * 4 + c.rank * 12;
          if (score < bs) { bs = score; bi2 = j; }
        }
        if (bi2 != null) { used[bi2] = 1; picks.push(cands[bi2]); }
      }
      picks.sort(function (a, b) { return a.alongKm - b.alongKm; });
      var days = [];
      picks.forEach(function (c, i) {
        var name = (c.nm && (c.nm[LANG] || c.nm.en || c.nm.de)) || "";
        var url = (c.u && (c.u[LANG] || c.u.en || c.u.de)) || "";
        days.push({ day: i + 1, driveKmCumulative: Math.round(c.alongKm), overnight: { name: name, lat: c.lat, lon: c.lon, type: "city", poiUrl: url } });
      });
      days.push({ day: days.length + 1, driveKmCumulative: Math.round(total), overnight: null });
      d.days = days;
      d.summary = d.summary || {};
      d.summary.overnightStops = picks.length;
      d.eligibleStops = cands.length;
      return d;
    }).catch(function () { return d; });
  }

  // The first Worker response selects corridor stops but its km/h summary still
  // describes only the base route. Route once more through the selected stops and
  // merge the real distance/time while retaining the selected stop cards.
  function rerouteThroughStops(d) {
    if (!lastReq || !d.days) return Promise.resolve(d);
    var overnightAnchors = d.days.filter(function (x) { return x.overnight; }).map(function (x) { return [x.overnight.lon, x.overnight.lat]; });
    if (!overnightAnchors.length) return Promise.resolve(d);
    var anchors = sortAnchorsAlongRoute((lastReq.baseAnchors || []).concat(overnightAnchors), d.route).slice(0, 10);
    return plan({ origin: lastReq.origin, destination: lastReq.destination, anchors: anchors, stops: 0, mode: lastReq.mode, vehicle: lastReq.vehicle, variant: 0, reqServices: [], tiers: lastReq.tiers, bufferKm: lastReq.bufferKm })
      .then(function (routed) {
        if (routed.summary) {
          d.summary.km = routed.summary.km;
          d.summary.hours = routed.summary.hours;
        }
        if (routed.route && routed.route.length) d.route = routed.route;
        if (routed.countries) d.countries = routed.countries;
        if (routed.advisory) d.advisory = routed.advisory;
        if (routed.advisoryNote) d.advisoryNote = routed.advisoryNote;
        if (routed.routing) d.routing = routed.routing;
        d.summaryIncludesStops = true;
        return d;
      }).catch(function () { d.summaryIncludesStops = false; return d; });
  }

  function sortAnchorsAlongRoute(anchors, line) {
    if (!line || line.length < 2) return anchors;
    return anchors.map(function (anchor) {
      var best = 0, distance = Infinity;
      for (var i = 0; i < line.length; i++) {
        var d = cHav(anchor[1], anchor[0], line[i][1], line[i][0]);
        if (d < distance) { distance = d; best = i; }
      }
      return { anchor: anchor, along: best };
    }).sort(function (a, b) { return a.along - b.along; }).map(function (x) { return x.anchor; });
  }

  // Lightweight route overview without another map SDK or tile download. It is
  // deliberately schematic; the Google Maps button remains the navigation view.
  function routeOverview(line, days) {
    if (!line || line.length < 2) return "";
    var step = Math.max(1, Math.ceil(line.length / 260)), pts = [];
    for (var i = 0; i < line.length; i += step) pts.push(line[i]);
    if (pts[pts.length - 1] !== line[line.length - 1]) pts.push(line[line.length - 1]);
    var midLat = pts.reduce(function (s, p) { return s + p[1]; }, 0) / pts.length;
    var scaleLon = Math.max(0.2, Math.cos(midLat * Math.PI / 180));
    var xy = pts.map(function (p) { return [p[0] * scaleLon, -p[1]]; });
    var xs = xy.map(function (p) { return p[0]; }), ys = xy.map(function (p) { return p[1]; });
    var minX = Math.min.apply(null, xs), maxX = Math.max.apply(null, xs), minY = Math.min.apply(null, ys), maxY = Math.max.apply(null, ys);
    var spanX = Math.max(0.0001, maxX - minX), spanY = Math.max(0.0001, maxY - minY);
    function project(p) { return [20 + (p[0] * scaleLon - minX) / spanX * 760, 20 + (-p[1] - minY) / spanY * 160]; }
    var path = xy.map(function (p) { return (20 + (p[0] - minX) / spanX * 760).toFixed(1) + "," + (20 + (p[1] - minY) / spanY * 160).toFixed(1); }).join(" ");
    var markers = [line[0]].concat((days || []).filter(function (x) { return x.overnight; }).map(function (x) { return [x.overnight.lon, x.overnight.lat]; })).concat([line[line.length - 1]]);
    var circles = markers.map(function (p, idx) { var q = project(p); return '<circle class="' + (idx === 0 || idx === markers.length - 1 ? "end" : "stop") + '" cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="' + (idx === 0 || idx === markers.length - 1 ? 7 : 5) + '"></circle>'; }).join("");
    return '<div class="plz-rp-overview" role="img" aria-label="' + esc(GUI[3]) + '"><svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet"><path d="M ' + path.replace(/ /g, " L ") + '"></path>' + circles + '</svg></div>';
  }

  function render(d) {
    var res = $(".plz-rp-result"); res.style.display = "";
    var requestedDest = lastReq.destination, snapKm = d.routing && Number(d.routing.destinationSnapKm);
    var routedDest = d.routing && validRoutePoint(d.routing.routedDestination) ? d.routing.routedDestination : requestedDest;
    var dest = mode === "camper" && snapKm > 0.05 ? routedDest : requestedDest, destName = lastReq.destName;
    var overnights = d.days.filter(function (x) { return x.overnight; }).map(function (x) { return x.overnight; });
    var pts = [lastReq.origin].concat(overnights.map(function (s) { return [s.lon, s.lat]; })).concat([dest]).map(function (p) { return p[1] + "," + p[0]; });
    var mapsAll = "https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=" + pts[0] + "&destination=" + pts[pts.length - 1];
    if (pts.length > 2) mapsAll += "&waypoints=" + encodeURIComponent(pts.slice(1, -1).join("|"));
    var h = '<div class="plz-rp-summary">'
      + '<div class="plz-rp-stat"><b>' + d.summary.km + '</b> ' + esc(C.km) + '</div>'
      + '<div class="plz-rp-stat"><b>' + d.summary.hours + '</b> ' + esc(C.hrs) + '</div>'
      + '<div class="plz-rp-stat"><b>' + (d.summary.overnightStops || 0) + '</b> ' + esc(C.nights) + '</div>'
      + '<div class="plz-rp-stat"><b>' + (d.eligibleStops != null ? d.eligibleStops : d.corridorStops) + '</b> ' + esc(C.matchStops) + '</div>'
      + '<a class="plz-rp-mapsall" href="' + mapsAll + '" target="_blank" rel="nofollow noopener">' + IC.map + ' ' + esc(C.mapsAll) + '</a></div>';
    if (d.summaryIncludesStops === false) h += '<p class="plz-rp-muted">⚠️ ' + esc(AUI.baseRoute) + '</p>';
    if (mode === "camper" && snapKm > 0.05) h += '<p class="plz-rp-muted">📍 ' + esc(GUI[4].replace("{km}", snapKm.toFixed(2))) + '</p>';
    h += routeOverview(d.route, d.days);
    if (d.advisory && d.advisory.length) {
      h += '<div class="plz-rp-adv"><h3>' + IC.warning + ' ' + esc(C.advisory) + ' (' + esc((d.countries || []).join(" · ")) + ')</h3>';
      d.advisory.forEach(function (raw) {
        var a = normalizeAdvisory(raw), official = a.officialUrl || OFFICIAL_TOLL[a.cc] || EU_ROAD_RULES;
        h += '<details class="plz-rp-advc"><summary>' + esc(a.name || a.cc) + ' <span>' + esc(a.cur || "") + '</span></summary><div class="plz-rp-advb">';
        if (LANG === "de") {
          h += (a.toll ? '<div>' + IC.road + ' <b>' + esc(C.toll) + ':</b> ' + esc(a.toll) + '</div>' : '')
            + (a.lez && a.lez !== "—" ? '<div>' + IC.building + ' <b>' + esc(C.lez) + ':</b> ' + esc(a.lez) + '</div>' : '')
            + (a.wild ? '<div>' + IC.tent + ' <b>' + esc(C.overnight) + ':</b> ' + esc(a.wild) + '</div>' : '')
            + (a.equip ? '<div>' + IC.wrench + ' <b>' + esc(C.mandatory) + ':</b> ' + esc(a.equip) + '</div>' : '')
            + (a.note ? '<div class="plz-rp-muted">' + esc(a.note) + '</div>' : '');
        } else h += '<div class="plz-rp-muted">' + esc(AUI.localized) + '</div>';
        if (official) h += '<div><a href="' + esc(official) + '" target="_blank" rel="noopener">' + IC.road + ' ' + esc(AUI.official) + '</a></div>';
        h += '</div></details>';
      });
      h += '<p class="plz-rp-muted plz-rp-advnote">' + esc(AUI.verify) + '</p></div>';
    }
    var hasSC = (typeof window.PlzStopCard !== "undefined");
    h += '<div class="plz-rp-deck">';
    d.days.forEach(function (x) {
      var o = x.overnight;
      if (o) {
        var keep = '<label class="plz-rp-keep"><input type="checkbox" class="plz-rp-keepcb" data-lon="' + o.lon + '" data-lat="' + o.lat + '"> ' + esc(C.keepStop) + '</label>';
        if (hasSC) h += '<div class="plz-rp-card">' + window.PlzStopCard.render({ name: o.name || "", type: o.type, tier: o.tier, cc: o.cc, lat: o.lat, lon: o.lon, services: o.services, fee: o.fee, maxstay: o.maxstay, website: o.website, kmCum: x.driveKmCumulative, badge: C.day + " " + x.day, footerHtml: keep }) + '</div>';
        else h += '<div class="plz-rp-card plz-rp-cardfb"><div class="plz-rp-badge">' + C.day + " " + x.day + '</div><h4>' + esc(o.name || "") + '</h4><a href="https://www.google.com/maps/search/?api=1&query=' + o.lat + ',' + o.lon + '" target="_blank" rel="nofollow noopener">' + IC.map + ' Maps</a>' + keep + '</div>';
      } else {
        if (hasSC) h += '<div class="plz-rp-card">' + window.PlzStopCard.render({ name: destName || C.dest, lat: dest[1], lon: dest[0], kmCum: x.driveKmCumulative, badge: C.day + " " + x.day + " · " + C.dest }) + '</div>';
        else h += '<div class="plz-rp-card plz-rp-cardfb"><div class="plz-rp-badge">' + C.day + " " + x.day + " · " + C.dest + '</div><h4>' + esc(destName) + '</h4></div>';
      }
    });
    h += '</div>';
    var dotCount = d.days.length;
    if (dotCount > 1) {
      h += '<div class="plz-rp-dots" aria-hidden="true">';
      for (var di = 0; di < dotCount; di++) h += '<button type="button" class="plz-rp-dot' + (di === 0 ? ' active' : '') + '" data-i="' + di + '"></button>';
      h += '</div>';
    }
    h += '<p class="plz-rp-swipe">' + esc(C.swipe) + '</p><button class="plz-rp-regen" type="button">↻ ' + esc(C.regen) + '</button>';
    res.innerHTML = h;
    if (hasSC && window.PlzStopCard.hydrate) window.PlzStopCard.hydrate(res);
    // scroll → active-dot sync (mirrors the itinerary's .plz-itin-dot logic)
    var deck = res.querySelector(".plz-rp-deck"), dots = res.querySelectorAll(".plz-rp-dot");
    if (deck && dots.length) {
      var syncDots = function () {
        var w = deck.clientWidth, idx = Math.round(deck.scrollLeft / (w * 0.85));
        if (idx < 0) idx = 0; if (idx > dots.length - 1) idx = dots.length - 1;
        dots.forEach(function (dt, i) { dt.classList.toggle("active", i === idx); });
      };
      deck.addEventListener("scroll", syncDots, { passive: true });
      dots.forEach(function (dt, i) {
        dt.addEventListener("click", function () {
          var card = deck.children[i];
          if (card) deck.scrollTo({ left: card.offsetLeft - deck.offsetLeft, behavior: "smooth" });
        });
      });
    }
    var rg = res.querySelector(".plz-rp-regen");
    if (rg) rg.addEventListener("click", function () {
      if (busy) return;
      var kept = Array.prototype.map.call(res.querySelectorAll(".plz-rp-keepcb:checked"), function (c) { return [parseFloat(c.dataset.lon), parseFloat(c.dataset.lat)]; });
      var keptStops = d.days.filter(function (x) {
        return x.overnight && kept.some(function (p) { return Math.abs(p[0] - x.overnight.lon) < 0.00001 && Math.abs(p[1] - x.overnight.lat) < 0.00001; });
      }).map(function (x) { return x.overnight; });
      var stt = $(".plz-rp-status"), anchors, variant;
      if (kept.length) { anchors = sortAnchorsAlongRoute((lastReq.baseAnchors || []).concat(kept), d.route); variant = 0; stt.textContent = C.regenKept; }
      else { anchors = lastReq.baseAnchors || []; variant = (lastReq.variant || 0) + 1; stt.textContent = C.regenNew; }
      lastReq.variant = variant;
      lastReq._keep = kept; // car mode: snap kept city stops back in after re-picking
      lastReq._keptStops = keptStops;
      busy = true; rg.disabled = true;
      var remainingStops = lastReq.mode === "camper" ? Math.max(0, lastReq.stops - keptStops.length) : lastReq.stops;
      plan({ origin: lastReq.origin, destination: lastReq.destination, anchors: anchors, stops: remainingStops, mode: lastReq.mode, vehicle: lastReq.vehicle, variant: variant, reqServices: lastReq.reqServices, tiers: lastReq.tiers, bufferKm: lastReq.bufferKm })
        .then(normalizeRequestedStops).then(mergeCamperKept).then(carify).then(rerouteThroughStops).then(function (data) { return refineCountries(data).then(function () { render(data); stt.textContent = ""; }); }).catch(function (e) { stt.textContent = "⚠️ " + routeError(e); })
        .then(function () { busy = false; rg.disabled = false; });
    });
  }

  var goBtn = $(".plz-rp-go");
  if (goBtn) goBtn.addEventListener("click", go);
  var oi = $(".plz-rp-origin");
  if (oi) oi.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
})();
