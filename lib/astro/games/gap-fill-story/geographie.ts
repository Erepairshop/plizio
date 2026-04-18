import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "geo-gfs-1",
    taskDescription: { en: "Fill the gaps in the map-reading story.", de: "Füllen Sie die Lücken in der Karten-Geschichte.", hu: "Töltsd ki a térképolvasós történet hiányait.", ro: "Completează golurile din povestea despre citirea hărții." },
    story: {
      en: "Lina wants to hike to a mountain lake. She checks the {{0}} to know direction. On the map, blue lines show a {{1}}. She also uses the {{2}} to estimate distance. At the end, she reaches the {{3}} at 1800 meters.",
      de: "Lina will zu einem Bergsee wandern. Sie prüft den {{0}} für die Richtung. Auf der Karte zeigen blaue Linien einen {{1}}. Sie nutzt auch den {{2}} für die Entfernung. Am Ende erreicht sie den {{3}} auf 1800 Metern.",
      hu: "Lina egy hegyi tóhoz szeretne túrázni. Az irány miatt ellenőrzi a {{0}}. A térképen a kék vonalak egy {{1}} jeleznek. A távolság becsléséhez a {{2}} használja. Végül eléri a {{3}} 1800 méter magasan.",
      ro: "Lina vrea să urce la un lac montan. Verifică {{0}} pentru direcție. Pe hartă, liniile albastre arată un {{1}}. Folosește și {{2}} pentru distanță. La final ajunge la {{3}} la 1800 de metri."
    },
    blanks: [
      { index: 0, correctOptionId: "compass", options: [ { id: "compass", label: { en: "compass rose", de: "Kompassrose", hu: "tájolórózsa", ro: "roza vânturilor" } }, { id: "legend", label: { en: "legend", de: "Legende", hu: "jelmagyarázat", ro: "legendă" } } ] },
      { index: 1, correctOptionId: "river", options: [ { id: "river", label: { en: "river", de: "Fluss", hu: "folyót", ro: "râu" } }, { id: "forest", label: { en: "forest", de: "Wald", hu: "erdőt", ro: "pădure" } } ] },
      { index: 2, correctOptionId: "scale", options: [ { id: "scale", label: { en: "map scale", de: "Maßstab", hu: "méretarányt", ro: "scara hărții" } }, { id: "latitude", label: { en: "latitude", de: "Breitengrad", hu: "szélességet", ro: "latitudine" } } ] },
      { index: 3, correctOptionId: "summit", options: [ { id: "summit", label: { en: "summit", de: "Gipfel", hu: "csúcsot", ro: "vârf" } }, { id: "delta", label: { en: "delta", de: "Delta", hu: "deltát", ro: "delta" } } ] }
    ]
  },
  {
    id: "geo-gfs-2",
    taskDescription: { en: "Fill the gaps in the climate story.", de: "Füllen Sie die Lücken in der Klima-Geschichte.", hu: "Töltsd ki az éghajlati történet hiányait.", ro: "Completează golurile din povestea despre climă." },
    story: {
      en: "A class compares two places: one near the {{0}} and one near the poles. The equatorial place is usually {{1}} and humid. The polar place has low {{2}} and long winters. Wind and ocean {{3}} also influence local climate.",
      de: "Eine Klasse vergleicht zwei Orte: einen nahe dem {{0}} und einen nahe den Polen. Der äquatornahe Ort ist meist {{1}} und feucht. Der polare Ort hat geringe {{2}} und lange Winter. Wind und Meeres-{{3}} beeinflussen das Klima ebenfalls.",
      hu: "Egy osztály két helyet hasonlít össze: az egyiket az {{0}} közelében, a másikat a sarkoknál. Az Egyenlítő közelében általában {{1}} és párás a klíma. A poláris területen alacsony a {{2}} és hosszú a tél. A szelek és az óceáni {{3}} is befolyásolják a helyi éghajlatot.",
      ro: "O clasă compară două locuri: unul lângă {{0}} și unul aproape de poli. Locul ecuatorial este de obicei {{1}} și umed. Locul polar are {{2}} scăzută și ierni lungi. Vântul și {{3}} oceanici influențează și ele clima locală."
    },
    blanks: [
      { index: 0, correctOptionId: "equator", options: [ { id: "equator", label: { en: "Equator", de: "Äquator", hu: "Egyenlítő", ro: "Ecuator" } }, { id: "prime-meridian", label: { en: "Prime Meridian", de: "Nullmeridian", hu: "Nullmeridián", ro: "Meridianul zero" } } ] },
      { index: 1, correctOptionId: "warm", options: [ { id: "warm", label: { en: "warm", de: "warm", hu: "meleg", ro: "cald" } }, { id: "frozen", label: { en: "frozen", de: "gefroren", hu: "fagyott", ro: "înghețat" } } ] },
      { index: 2, correctOptionId: "temperature", options: [ { id: "temperature", label: { en: "temperature", de: "Temperatur", hu: "hőmérséklet", ro: "temperatură" } }, { id: "volcanoes", label: { en: "volcanoes", de: "Vulkane", hu: "vulkánok", ro: "vulcani" } } ] },
      { index: 3, correctOptionId: "currents", options: [ { id: "currents", label: { en: "currents", de: "Strömungen", hu: "áramlatok", ro: "curenți" } }, { id: "bridges", label: { en: "bridges", de: "Brücken", hu: "hidak", ro: "poduri" } } ] }
    ]
  },
  {
    id: "geo-gfs-3",
    taskDescription: { en: "Fill the gaps in the capitals story.", de: "Füllen Sie die Lücken in der Hauptstädte-Geschichte.", hu: "Töltsd ki a fővárosokról szóló történet hiányait.", ro: "Completează golurile din povestea despre capitale." },
    story: {
      en: "During a Europe quiz, Ana remembers that {{0}} is the capital of Hungary. She places {{1}} in Germany and {{2}} in Italy. For Romania she writes {{3}}. Her team wins the round.",
      de: "Beim Europa-Quiz erinnert sich Ana: {{0}} ist die Hauptstadt von Ungarn. Sie ordnet {{1}} Deutschland und {{2}} Italien zu. Für Rumänien schreibt sie {{3}}. Ihr Team gewinnt.",
      hu: "Egy Európa-kvízen Ana emlékszik rá, hogy Magyarország fővárosa {{0}}. {{1}}-t Németországhoz, {{2}}-t Olaszországhoz rendeli. Romániához {{3}}-t ír. A csapata nyer.",
      ro: "La un quiz despre Europa, Ana își amintește că {{0}} este capitala Ungariei. Pune {{1}} la Germania și {{2}} la Italia. Pentru România scrie {{3}}. Echipa ei câștigă runda."
    },
    blanks: [
      { index: 0, correctOptionId: "budapest", options: [ { id: "budapest", label: { en: "Budapest", de: "Budapest", hu: "Budapest", ro: "Budapesta" } }, { id: "prague", label: { en: "Prague", de: "Prag", hu: "Prága", ro: "Praga" } } ] },
      { index: 1, correctOptionId: "berlin", options: [ { id: "berlin", label: { en: "Berlin", de: "Berlin", hu: "Berlin", ro: "Berlin" } }, { id: "madrid", label: { en: "Madrid", de: "Madrid", hu: "Madrid", ro: "Madrid" } } ] },
      { index: 2, correctOptionId: "rome", options: [ { id: "rome", label: { en: "Rome", de: "Rom", hu: "Róma", ro: "Roma" } }, { id: "vienna", label: { en: "Vienna", de: "Wien", hu: "Bécs", ro: "Viena" } } ] },
      { index: 3, correctOptionId: "bucharest", options: [ { id: "bucharest", label: { en: "Bucharest", de: "Bukarest", hu: "Bukarest", ro: "București" } }, { id: "sofia", label: { en: "Sofia", de: "Sofia", hu: "Szófia", ro: "Sofia" } } ] }
    ]
  }
];
