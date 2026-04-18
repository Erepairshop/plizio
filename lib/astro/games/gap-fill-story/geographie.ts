import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "geo-gfs-1",
    taskDescription: { en: "Fill the gaps in the map-reading story.", de: "Fuellen Sie die Luecken in der Karten-Geschichte.", hu: "Toltsd ki a terkepolvasos tortenet hianyait.", ro: "Completeaza golurile din povestea despre citirea hartii." },
    story: {
      en: "Lina wants to hike to a mountain lake. She checks the {{0}} to know direction. On the map, blue lines show a {{1}}. She also uses the {{2}} to estimate distance. At the end, she reaches the {{3}} at 1800 meters.",
      de: "Lina will zu einem Bergsee wandern. Sie prueft den {{0}} fuer die Richtung. Auf der Karte zeigen blaue Linien einen {{1}}. Sie nutzt auch den {{2}} fuer die Entfernung. Am Ende erreicht sie den {{3}} auf 1800 Metern.",
      hu: "Lina egy hegyi tohoz szeretne turazni. Az irany miatt ellenorzi a {{0}}. A terkepen a kek vonalak egy {{1}} jeleznek. A tavolsag becslesehez a {{2}} hasznalja. Vegul eleri a {{3}} 1800 meter magasan.",
      ro: "Lina vrea sa urce la un lac montan. Verifica {{0}} pentru directie. Pe harta, liniile albastre arata un {{1}}. Foloseste si {{2}} pentru distanta. La final ajunge la {{3}} la 1800 de metri."
    },
    blanks: [
      { index: 0, correctOptionId: "compass", options: [ { id: "compass", label: { en: "compass rose", de: "Kompassrose", hu: "tajolozsarozsa", ro: "rozeta busolei" } }, { id: "legend", label: { en: "legend", de: "Legende", hu: "jelmagyarazat", ro: "legenda" } } ] },
      { index: 1, correctOptionId: "river", options: [ { id: "river", label: { en: "river", de: "Fluss", hu: "folyo", ro: "rau" } }, { id: "forest", label: { en: "forest", de: "Wald", hu: "erdo", ro: "padure" } } ] },
      { index: 2, correctOptionId: "scale", options: [ { id: "scale", label: { en: "map scale", de: "Massstab", hu: "meretarany", ro: "scara hartii" } }, { id: "latitude", label: { en: "latitude", de: "Breitengrad", hu: "szelesseg", ro: "latitudine" } } ] },
      { index: 3, correctOptionId: "summit", options: [ { id: "summit", label: { en: "summit", de: "Gipfel", hu: "csucs", ro: "varf" } }, { id: "delta", label: { en: "delta", de: "Delta", hu: "delta", ro: "delta" } } ] }
    ]
  },
  {
    id: "geo-gfs-2",
    taskDescription: { en: "Fill the gaps in the climate story.", de: "Fuellen Sie die Luecken in der Klima-Geschichte.", hu: "Toltsd ki az eghajlati tortenet hianyait.", ro: "Completeaza golurile din povestea despre clima." },
    story: {
      en: "A class compares two places: one near the {{0}} and one near the poles. The equatorial place is usually {{1}} and humid. The polar place has low {{2}} and long winters. Wind and ocean {{3}} also influence local climate.",
      de: "Eine Klasse vergleicht zwei Orte: einen nahe dem {{0}} und einen nahe den Polen. Der aequatornahe Ort ist meist {{1}} und feucht. Der polare Ort hat geringe {{2}} und lange Winter. Wind und Meeres-{{3}} beeinflussen das Klima ebenfalls.",
      hu: "Egy osztaly ket helyet hasonlit ossze: az egyiket az {{0}} kozeleben, a masikat a sarkoknal. Az egyenlito kozeleben altalaban {{1}} es paras a klima. A polaris teruleten alacsony a {{2}} es hosszu a tel. A szelek es az ocean {{3}} is befolyasoljak a helyi eghajlatot.",
      ro: "O clasa compara doua locuri: unul langa {{0}} si unul aproape de poli. Locul ecuatorial este de obicei {{1}} si umed. Locul polar are {{2}} scazuta si ierni lungi. Vantul si {{3}} oceanici influenteaza si ele clima locala."
    },
    blanks: [
      { index: 0, correctOptionId: "equator", options: [ { id: "equator", label: { en: "Equator", de: "Aequator", hu: "Egyenlito", ro: "Ecuator" } }, { id: "prime-meridian", label: { en: "Prime Meridian", de: "Nullmeridian", hu: "Nullmeridian", ro: "Meridianul zero" } } ] },
      { index: 1, correctOptionId: "warm", options: [ { id: "warm", label: { en: "warm", de: "warm", hu: "meleg", ro: "cald" } }, { id: "frozen", label: { en: "frozen", de: "gefroren", hu: "fagyott", ro: "inghetat" } } ] },
      { index: 2, correctOptionId: "temperature", options: [ { id: "temperature", label: { en: "temperature", de: "Temperatur", hu: "homerseklet", ro: "temperatura" } }, { id: "volcanoes", label: { en: "volcanoes", de: "Vulkane", hu: "vulkanok", ro: "vulcani" } } ] },
      { index: 3, correctOptionId: "currents", options: [ { id: "currents", label: { en: "currents", de: "Stroemungen", hu: "aramlasok", ro: "curenti" } }, { id: "bridges", label: { en: "bridges", de: "Bruecken", hu: "hidak", ro: "poduri" } } ] }
    ]
  },
  {
    id: "geo-gfs-3",
    taskDescription: { en: "Fill the gaps in the capitals story.", de: "Fuellen Sie die Luecken in der Hauptstaedte-Geschichte.", hu: "Toltsd ki a fovarosokrol szolo tortenet hianyait.", ro: "Completeaza golurile din povestea despre capitale." },
    story: {
      en: "During a Europe quiz, Ana remembers that {{0}} is the capital of Hungary. She places {{1}} in Germany and {{2}} in Italy. For Romania she writes {{3}}. Her team wins the round.",
      de: "Beim Europa-Quiz erinnert sich Ana: {{0}} ist die Hauptstadt von Ungarn. Sie ordnet {{1}} Deutschland und {{2}} Italien zu. Fuer Rumaenien schreibt sie {{3}}. Ihr Team gewinnt.",
      hu: "Egy europa-kvizen Ana emlekszik ra, hogy Magyarorszag fovarosa {{0}}. {{1}}-t Nemetorszaghoz, {{2}}-t Olaszorszaghoz rendeli. Romaniahoz {{3}}-t ir. A csapata nyer.",
      ro: "La un quiz despre Europa, Ana isi aminteste ca {{0}} este capitala Ungariei. Pune {{1}} la Germania si {{2}} la Italia. Pentru Romania scrie {{3}}. Echipa ei castiga runda."
    },
    blanks: [
      { index: 0, correctOptionId: "budapest", options: [ { id: "budapest", label: { en: "Budapest", de: "Budapest", hu: "Budapest", ro: "Budapesta" } }, { id: "prague", label: { en: "Prague", de: "Prag", hu: "Praga", ro: "Praga" } } ] },
      { index: 1, correctOptionId: "berlin", options: [ { id: "berlin", label: { en: "Berlin", de: "Berlin", hu: "Berlin", ro: "Berlin" } }, { id: "madrid", label: { en: "Madrid", de: "Madrid", hu: "Madrid", ro: "Madrid" } } ] },
      { index: 2, correctOptionId: "rome", options: [ { id: "rome", label: { en: "Rome", de: "Rom", hu: "Roma", ro: "Roma" } }, { id: "vienna", label: { en: "Vienna", de: "Wien", hu: "Becs", ro: "Viena" } } ] },
      { index: 3, correctOptionId: "bucharest", options: [ { id: "bucharest", label: { en: "Bucharest", de: "Bukarest", hu: "Bukarest", ro: "Bucuresti" } }, { id: "sofia", label: { en: "Sofia", de: "Sofia", hu: "Sofia", ro: "Sofia" } } ] }
    ]
  }
];
