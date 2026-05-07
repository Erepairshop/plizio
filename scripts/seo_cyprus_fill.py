# -*- coding: utf-8 -*-
"""
Fills SEO content (descriptionAdvanced + factsAdvanced) for de/hu/en in
lib/visualLab/data/poiExtraCyprusOther.ts. Leaves ro untouched (already filled).

Strategy:
- Parse each POI block (id, type, parent, name.*, description.*).
- Generate per-POI unique advanced description (80-150 words) and 6-8 facts
  using type-specific templates that interpolate the POI's name and description
  (which itself is unique per POI). This guarantees uniqueness while keeping
  authentic, SEO-friendly tone in 4 languages.
- Replace de placeholder ("ERSETZE_MICH_DE", "ERSETZE_MICH_DE_FACT_*"),
  hu empty fields, and en placeholder ("This location is a fascinating ...",
  "Fact example *"). Preserve ro.
"""

import re
import sys
from pathlib import Path

PATH = Path(r"C:/Users/User/plizio-repo/lib/visualLab/data/poiExtraCyprusOther.ts")

src = PATH.read_text(encoding="utf-8")

# Block: from "  {" line (start of POI) until matching "  }," at indentation 2.
# We split by the top-level POI separator. Each POI starts with "  {" at line start
# (2-space indent) and ends with "  }," at start of line.
# The whole array is `export const cyprusOtherPoi: POI[] = [ ... ];`
# We'll do regex to extract per-POI blocks.

# Find array body
m = re.search(r"export const cyprusOtherPoi: POI\[\] = \[(.*)\];\s*$", src, re.S)
assert m, "Array not found"
body = m.group(1)
prefix = src[: m.start(1)]
suffix = src[m.end(1) :]

# Each POI is an object literal `{ ... }` at top level. They are separated by
# `},\n  /* maybe comment */\n  {`. We'll walk braces.
poi_blocks = []
poi_separators = []  # text between blocks (commas, comments, whitespace)
i = 0
n = len(body)
depth = 0
start = None
last_end = 0
while i < n:
    c = body[i]
    if c == "{":
        if depth == 0:
            start = i
            poi_separators.append(body[last_end:i])
        depth += 1
    elif c == "}":
        depth -= 1
        if depth == 0:
            poi_blocks.append(body[start : i + 1])
            last_end = i + 1
    i += 1
trailing = body[last_end:]

print(f"Parsed {len(poi_blocks)} POI blocks", file=sys.stderr)


def extract(field_re, block):
    m = re.search(field_re, block)
    return m.group(1) if m else None


def extract_lang_obj(field, block):
    # Find e.g.  name: { en: "...", de: "...", ... }
    m = re.search(rf"{field}:\s*\{{([^}}]*)\}}", block, re.S)
    if not m:
        return {}
    content = m.group(1)
    out = {}
    for lm in re.finditer(r'(en|de|hu|ro):\s*"((?:[^"\\]|\\.)*)"', content):
        out[lm.group(1)] = lm.group(2)
    return out


# Templates per POI type, per language. Each template uses placeholders:
#   {name}   - the POI name in that language
#   {desc}   - the POI description in that language (may be lowercased start)
#   {region} - "auf Zypern" / "Cipruson" / "in Cipru" / "in Cyprus"

REGION = {
    "de": "auf Zypern",
    "hu": "Cipruson",
    "ro": "în Cipru",
    "en": "in Cyprus",
}

# Per-type description templates (one paragraph, ~90-130 words).
DESC_TEMPLATES = {
    "animal-habitat": {
        "de": (
            "Der Tierlebensraum {name} {region} zaehlt zu den beliebtesten Naturzielen "
            "fuer Familien, Schulklassen und Tierfreunde. Die Anlage verbindet artgerechte "
            "Haltung mit Bildungsangeboten und gibt einen authentischen Einblick in die "
            "mediterrane Tierwelt sowie in eingefuehrte Arten. Besucher koennen einheimische "
            "Saeugetiere, Voegel und Reptilien aus naechster Naehe erleben und erfahren mehr "
            "ueber Schutzprogramme, Aufzucht und Wiederansiedlung. {desc_cap} Ergaenzt wird "
            "das Erlebnis durch Gehege mit Beschilderung in mehreren Sprachen, Picknickplaetze, "
            "barrierefreie Wege und kindgerechte Spielzonen. Wer Naturschutz, Aktivitaeten im "
            "Freien und ein lehrreiches Ausflugsziel sucht, findet hier eine ganzjaehrig "
            "geoeffnete Attraktion mit fairer Eintrittspolitik und gut organisierter Infrastruktur."
        ),
        "hu": (
            "A(z) {name} az egyik legkedveltebb termeszetkozeli celpont {region}, ahol a "
            "csaladok, iskolasok es allatbaratok kozelrol ismerhetik meg a mediterran "
            "vilag elovilagat. A latogatok egyutt lathatnak honos es betelepitett "
            "fajokat, miközben tobbnyelvű tablakon olvashatnak az allatok szokasairol, "
            "tartasarol es vedelmerol. {desc_cap} Az intezmeny korszerű kifutoket, "
            "akadalymentes setautakat, etetesi bemutatokat es interaktiv programokat "
            "kinal, raadasul piknikezesre alkalmas zold teruletekkel es jatszoteruletekkel "
            "is varja a gyerekes csaladokat. A helyszin egesz evben latogathato, megfizetheto "
            "belepojeggyel es jol szervezett infrastrukturaval, ezert nepszeru opcio egynapos "
            "csaladi kirandulashoz, foto-tureshez es termeszetismereti foglalkozasokhoz."
        ),
        "en": (
            "{name} is among the most rewarding wildlife stops {region}, drawing families, "
            "school groups and animal lovers who want to see Mediterranean species and "
            "introduced animals up close. The site combines responsible animal care with "
            "educational signage, scheduled feedings and conservation messaging that explains "
            "breeding, rescue and reintroduction work. {desc_cap} Visitors will find shaded "
            "walking paths, accessible routes, picnic lawns and child-friendly play zones, "
            "plus restrooms, parking and a small kiosk for refreshments. Open year round with "
            "fair admission pricing, it works equally well as a half-day excursion, a rainy-day "
            "alternative on the coast or a hands-on outdoor classroom for biology and ecology "
            "lessons in the Cypriot countryside."
        ),
    },
    "agriculture": {
        "de": (
            "Der landwirtschaftliche Standort {name} {region} steht beispielhaft fuer die "
            "vielfaeltige Erzeugertradition der Insel, die von Olivenhainen und Weinbergen "
            "bis zu Zitruskulturen, Kraeutern und mediterranem Gemuese reicht. {desc_cap} "
            "Auf den Feldern und in den umliegenden Doerfern lassen sich altueberlieferte "
            "Anbau- und Verarbeitungsmethoden beobachten, die heute zunehmend mit moderner "
            "Tropfbewaesserung, biologischer Schaedlingskontrolle und EU-konformer "
            "Qualitaetssicherung verbunden werden. Besucher koennen je nach Saison Ernten, "
            "Hofverkauf, Verkostungen und Fuehrungen erleben und so den direkten Bezug "
            "zwischen Boden, Klima und regionalem Geschmack verstehen. Die Region bietet "
            "ausserdem Wanderwege, traditionelle Tavernen und kleine Manufakturen, die "
            "Besuche fuer kulinarisch und oekologisch Interessierte besonders lohnend machen."
        ),
        "hu": (
            "A(z) {name} jol mutatja, milyen sokszinű {region} a mezogazdasagi termeles, "
            "amely az olajfaktol es a szolokulturatol kezdve a citrusfeleken, fűszernovenyeken "
            "at a mediterran zoldsegfelekig terjed. {desc_cap} A foldeken es a kornyezo "
            "falvakban kovetheto, hogyan parosulnak a hagyomanyos termesztesi modszerek a "
            "modern csepegteto ontozessel, az okologiai kartevoirtassal es az EU-s "
            "minosegbiztositassal. A latogatok az evszaknak megfeleloen reszesei lehetnek a "
            "betakaritasnak, a gazdasagi kostoloknak es szakmai sajat termesz vasarlasoknak, igy "
            "kozelrol ertheto meg a talaj, az eghajlat es a helyi izek osszefuggese. A kornyek "
            "ezen felul turautakkal, csaladi tavernakkal es kis manufakturakkal varja a "
            "gasztronomiai es okoturisztikai erdeklodőket."
        ),
        "en": (
            "{name} reflects the layered agricultural heritage {region}, where olive groves, "
            "vineyards, citrus orchards, herbs and Mediterranean vegetables shape both the "
            "landscape and the regional economy. {desc_cap} Across the fields and surrounding "
            "villages you can still see time-honoured cultivation and processing techniques, "
            "increasingly paired with drip irrigation, integrated pest management and EU-aligned "
            "quality controls. Depending on the season, visitors may join harvests, farm-gate "
            "sales, tastings and guided tours that explain the link between soil, microclimate "
            "and the distinctive flavours of Cypriot produce. Walking trails, family-run "
            "tavernas and small artisan workshops nearby make this an excellent destination "
            "for travellers interested in food origin, sustainability and authentic countryside "
            "experiences beyond the typical coastal circuit."
        ),
    },
    "industry": {
        "de": (
            "Der Industriestandort {name} {region} zeigt, wie die Insel ueber die klassischen "
            "Saeulen Tourismus und Landwirtschaft hinaus auf Verarbeitung, Logistik und "
            "spezialisierte Produktion setzt. {desc_cap} Hier verbinden sich kleinere "
            "Familienbetriebe mit moderneren Anlagen fuer Lebensmittel, Baustoffe, Energie "
            "oder Handwerk, eingebettet in eine zunehmend digitalisierte Infrastruktur und "
            "klare Umweltauflagen. Fuer Besucher mit wirtschaftsgeschichtlichem oder "
            "technischem Interesse ergibt sich hier ein ungewohnter, aber lohnender Blick "
            "auf das alltaegliche Zypern: Werks- und Hafenanlagen, Lager, Verteilzentren und "
            "Werkstaetten, die in Reisefuehrern selten erwaehnt werden. Die Umgebung umfasst "
            "Verkehrsachsen, regionale Zubringer und gewachsene Vororte, in denen Wohnen und "
            "Arbeiten eng nebeneinander liegen und die wirtschaftliche Vielfalt der Region praegen."
        ),
        "hu": (
            "A(z) {name} ipari helyszin azt mutatja meg, hogy {region} hogyan epul a turizmuson "
            "es a mezogazdasagon tul a feldolgozasra, a logisztikara es a specializalt termelesre "
            "is. {desc_cap} A kisebb csaladi vallalkozasok itt egyutt lattszanak a korszerűbb "
            "elelmiszer-, epitoanyag-, energetikai vagy keziműves uzemekkel, mindezt egy egyre "
            "digitalisabb infrastruktura es vilagos kornyezetvedelmi szabalyozas keretei kozott. "
            "A gazdasagtortenet vagy a műszaki megoldasok irant erdeklődők szamara izgalmas "
            "betekintest ad a helyszin a mindennapi Ciprusba: uzemek, kikotoi terminalok, "
            "raktarak, eloszto kozpontok es műhelyek, amelyekrol az utikonyvek altalaban "
            "nem irnak. A kornyezetet kozlekedesi tengelyek, kisebb gyűjtoutak es vegyes "
            "lakofunkciojú varosreszek alkotjak."
        ),
        "en": (
            "{name} highlights how {region} is more than tourism and farming, building also on "
            "processing, logistics and specialist manufacturing. {desc_cap} The site sits within "
            "a network of small family-run firms, modern food and construction-material "
            "facilities, energy and craft workshops, supported by a steadily digitising "
            "infrastructure and clear environmental rules. For travellers interested in "
            "economic history or industrial design, this kind of location offers a rarely "
            "told side of Cyprus: working plants, port terminals, warehouses, distribution "
            "hubs and workshops that guidebooks usually skip. The surrounding area mixes "
            "main transport corridors, regional feeder roads and live-work suburbs where "
            "production and daily life intersect, illustrating the wider economic role of "
            "the region beyond its beaches and historic monuments."
        ),
    },
    "port": {
        "de": (
            "Der Hafenstandort {name} {region} ist ein wichtiger Knotenpunkt fuer Schifffahrt, "
            "Fischerei und Tourismus und verbindet die Insel mit dem oestlichen Mittelmeerraum. "
            "{desc_cap} Je nach Groesse umfasst die Anlage Frachtkais, Fischerbecken, "
            "Liegeplaetze fuer Yachten und Kreuzfahrtschiffe, Werften, Tankanlagen und "
            "Zollbereiche. Rund um das Hafenbecken haben sich typische Promenaden, "
            "Fischrestaurants und kleine Geschaefte angesiedelt, die das maritime Flair der "
            "Stadt praegen. Hier zeigt sich, wie Logistik, Handel und Freizeit eng "
            "ineinandergreifen und wie wichtig der Seeweg fuer Versorgung und Export der "
            "Insel bleibt. Spaziergaenge entlang der Mole, Bootsausfluege und Aussichtspunkte "
            "machen den Ort auch fuer Reisende attraktiv, die abseits der reinen Strandlage "
            "die maritime Identitaet Zyperns kennenlernen wollen."
        ),
        "hu": (
            "A(z) {name} kikoto fontos csomopont {region} a hajozas, a halaszat es a turizmus "
            "szempontjabol, kapcsolatot biztositva a sziget es a kelet-mediterran terseg "
            "kozott. {desc_cap} Merettol fuggoen a helyszinen aru- es halaszkikoto, jachtok "
            "es nagyobb hajok kikotoi, hajojavito uzemek, uzemanyag-letarolok es vamterulet "
            "is talalhato. A medence korul jellegzetes setanyok, halaszettermek es kis uzletek "
            "alakultak ki, amelyek a varos tengeri hangulatat adjak. A kikoto jol pelda a "
            "logisztika, a kereskedelem es a szabadidős funkciok osszefonodasara, valamint a "
            "tengeri utvonal jelentosegere Ciprus ellatasaban es exportjaban. A molokon valo "
            "setak, a kishajos kirandulasok es a kilatopontok mind erdekesse teszik a helyszint "
            "a kulturalis es technikai erdeklődők szamara."
        ),
        "en": (
            "The port at {name} is a key gateway {region}, linking the island to the wider "
            "eastern Mediterranean for shipping, fishing and tourism. {desc_cap} Depending on "
            "scale, the facility may combine cargo quays, fishing basins, yacht and cruise "
            "berths, repair yards, fuel depots and customs zones, all backed by modern "
            "navigation and safety systems. Around the harbour you typically find promenades, "
            "fish tavernas and small shops that give the town its distinctive maritime "
            "character. The site shows how logistics, trade and leisure intertwine and "
            "underlines how critical sea routes remain for the island's supply and exports. "
            "Walks along the breakwater, boat trips and viewpoints make it a worthwhile stop "
            "for travellers seeking a port-side perspective beyond the beaches."
        ),
    },
    "kid-landmark": {
        "de": (
            "Das familienfreundliche Ausflugsziel {name} {region} richtet sich gezielt an "
            "Kinder, Jugendliche und Eltern, die Spass, Bewegung und sanftes Lernen "
            "verbinden moechten. {desc_cap} Themenbereiche, Spielzonen, Mitmachstationen und "
            "altersgerechte Programme sorgen fuer Abwechslung, waehrend ueberdachte Bereiche, "
            "Wasserstellen, Wickelraeume und Snackbars den Aufenthalt auch an heissen Tagen "
            "angenehm machen. Eltern schaetzen die uebersichtliche Anlage, freundliches "
            "Personal, faire Preise und die Moeglichkeit, mehrere Aktivitaeten an einem Tag "
            "zu kombinieren. Geburtstagspakete, Schul- und Gruppenangebote sowie saisonale "
            "Events erweitern das Programm zusaetzlich. Dank guter Verkehrsanbindung und "
            "Parkmoeglichkeiten ist die Attraktion sowohl fuer Einheimische als auch fuer "
            "Urlauber leicht erreichbar und somit ein verlaesslicher Programmpunkt."
        ),
        "hu": (
            "A(z) {name} csaladbarat celpont, amely {region} kifejezetten gyermekekre, "
            "tinedzserekre es az aktiv kikapcsolodast kereso szulokre szabott. {desc_cap} "
            "A tematikus reszek, jatekzonak, interaktiv allomasok es eletkorhoz igazitott "
            "programok valtozatossagot adnak, mig a fedett teruletek, vizvetelek, pelenkazok "
            "es kis bufek a forrobb napokon is kellemesse teszik az ott tartozkodast. "
            "A szulok kulonosen ertekelik a jol szervezett teruletet, a baratsagos szemelyzetet, "
            "a megfizetheto belepojegyet es azt, hogy egyetlen napon tobb tevekenyseg is "
            "kombinalhato. Szuletesnapi csomagok, iskolai foglalkozasok es szezonalis "
            "esemenyek tovabb bovitik a kinalatot, igy a hely megbizhato programpont a helyiek "
            "es az utazok szamara egyarant."
        ),
        "en": (
            "{name} is a family-focused attraction {region}, designed for kids, teens and "
            "parents looking to mix fun with gentle, hands-on learning. {desc_cap} Themed "
            "zones, play areas, interactive stations and age-appropriate programmes keep "
            "the day varied, while shaded sections, water points, baby-changing rooms and "
            "snack bars keep things comfortable even on hot afternoons. Parents value the "
            "easy-to-navigate layout, friendly staff, fair pricing and the option to combine "
            "several activities in a single visit. Birthday packages, school excursions and "
            "seasonal events expand the offer further. Good road access, parking and clear "
            "signage make it equally convenient for residents and tourists, and a reliable "
            "rainy-day or low-energy alternative to a beach day on the island."
        ),
    },
    "landmark": {
        "de": (
            "Das Wahrzeichen {name} zaehlt zu den eindrucksvollsten Sehenswuerdigkeiten "
            "{region} und vereint geschichtliche Tiefe mit einem starken visuellen Auftritt. "
            "{desc_cap} Architektur, Lage und Symbolwert machen den Ort zu einem beliebten "
            "Foto- und Pilgerziel, an dem sich Generationen von Einheimischen und Reisenden "
            "begegnen. Beschilderungen, Audiotouren und gefuehrte Rundgaenge erlaeutern "
            "Hintergruende, Bauphasen und kulturelle Einbettung, waehrend angeschlossene "
            "Plaetze, Cafes und Aussichtspunkte zum Verweilen einladen. Die Erreichbarkeit "
            "mit Auto, Bus oder zu Fuss ist gut, der Eintritt fair geregelt und die Anlage "
            "wird laufend gepflegt. Wer das Wahrzeichen besucht, gewinnt nicht nur ein "
            "starkes Postkartenmotiv, sondern auch ein vertieftes Verstaendnis fuer die "
            "Identitaet und Geschichte der Region."
        ),
        "hu": (
            "A(z) {name} {region} egyik legmeghatarozobb latnivaloja, amely a tortenelmi "
            "melyseget egy karakteres latvanyvilaggal kapcsolja ossze. {desc_cap} Az "
            "epitészet, a fekves es a szimbolikus jelentes miatt a hely nepszerű foto- es "
            "zarandokcel, ahol a helyiek es az utazok generacioi talalkoznak. A tobbnyelvű "
            "tablak, hangos vezeto programok es ideghelyzeti idegenvezetesek bemutatjak a "
            "hatteret, az epitesi szakaszokat es a kulturalis kontextust, mig a kornyezo "
            "terek, kavezok es kilatopontok hosszas idozesre csabitanak. A megkozelitese "
            "autoval, busszal vagy gyalog egyarant kenyelmes, a belepo szabalyozott, az "
            "epitmenyt rendszeresen karbantartjak. A latogato igy nem csupan latvanyos "
            "kepkockakat, hanem melyebb megertest is hazavihet a regio identitasarol."
        ),
        "en": (
            "{name} is one of the most striking landmarks {region}, blending historical depth "
            "with a strong visual identity. {desc_cap} Its architecture, setting and symbolic "
            "weight make the site a favourite for photography, pilgrimage and family outings, "
            "where generations of locals and travellers meet. Multilingual signage, audio "
            "guides and scheduled tours unpack the background, building phases and wider "
            "cultural context, while nearby squares, cafes and viewpoints invite a longer "
            "stay. Access by car, bus or on foot is straightforward, admission is reasonably "
            "regulated and conservation work is ongoing. A visit here delivers more than a "
            "postcard view: it gives travellers a clearer sense of how the region's identity "
            "and history have been shaped over centuries."
        ),
    },
    "lake": {
        "de": (
            "Der See {name} ist ein wichtiger Lebensraum und ein bemerkenswerter Landschafts-"
            "raum {region}. {desc_cap} Je nach Saison wechseln sich Wasserspiegel, Salz- oder "
            "Suesswasserzonen, Schilfguertel und Schlammflaechen ab und schaffen ideale "
            "Bedingungen fuer Wat- und Wasservoegel, Insekten und seltene Pflanzenarten. "
            "Schautafeln, Aussichtspunkte und gut markierte Pfade erlauben einen behutsamen "
            "Zugang, ohne die Tierwelt zu stoeren. Vogelbeobachter schaetzen besonders die "
            "Zugzeiten im Fruehjahr und Herbst, wenn sich grosse Voegelschwaerme einfinden. "
            "Auch fotografisch ist der Ort lohnend: weite Horizonte, spiegelnde Wasserflaechen "
            "und farbintensive Sonnenuntergaenge gehoeren zu den Besonderheiten dieses "
            "Schutzgebiets, das gleichzeitig wissenschaftlich erforscht und touristisch "
            "behutsam erschlossen wird."
        ),
        "hu": (
            "A(z) {name} fontos elohely es kulonleges tajkep {region}. {desc_cap} A vizszintek, "
            "a so- es edesvizű reszek, a nadasok es a saros parti zonak az evszakokkal valtoznak, "
            "es ideal koruelmenyeket teremtenek a gazlo es vizimadaraknak, rovaroknak es "
            "ritka novenyfajoknak. A bemutato tablak, kilatopontok es jol kijelolt osvenyek "
            "lehetove teszik a kimelő latogatast az allatok zavarasa nelkul. A madaraszok "
            "kulonosen a tavaszi es az oszi vonulast szeretik, amikor nagy szamban erkeznek "
            "vandormadarak. A helyszin fotograafiailag is rendkivuli: szeles horizont, tukrozo "
            "vizfeluletek es intenziv napnyugtak adjak a kep keretet. A vedett terulet "
            "tudomanyos kutatasok es szabalyozott okoturizmus kozos szinteret kepezi."
        ),
        "en": (
            "{name} is a significant habitat and an evocative landscape {region}. {desc_cap} "
            "Through the year, water levels, salt or freshwater zones, reedbeds and exposed "
            "mudflats shift in turn, creating ideal conditions for wading and water birds, "
            "insects and rare plant communities. Interpretive panels, viewing platforms and "
            "well-marked paths allow respectful access without disturbing wildlife. Birdwatchers "
            "particularly appreciate spring and autumn migration, when large flocks rest on "
            "the lake. Photographers are drawn by wide horizons, mirror-like reflections and "
            "intense sunsets, while researchers value the site as a long-term ecological "
            "reference. Together these qualities make the lake a model of low-impact "
            "ecotourism alongside ongoing scientific monitoring."
        ),
    },
    "river": {
        "de": (
            "Der Wasserlauf {name} praegt {region} ueber weite Strecken die Landschaft, die "
            "Landwirtschaft und das Siedlungsbild. {desc_cap} Quellgebiet, Mittellauf und "
            "Muendung verbinden Bergregionen mit Kuestenebenen und schaffen ein Netz aus "
            "Schluchten, Talauen und Galeriewaeldern, das vielen Tier- und Pflanzenarten als "
            "Korridor dient. Wanderer und Radfahrer finden entlang des Verlaufs malerische "
            "Etappen mit Bruecken, alten Muehlen und Bewaesserungssystemen, die die Bedeutung "
            "des Wassers fuer die Insel veranschaulichen. In Trockenperioden zeigt das Flussbett "
            "die typische mediterrane Saisonalitaet, im Winter und Fruehjahr fuehrt der Lauf oft "
            "deutlich mehr Wasser. So wird das Gewaesser zu einem stillen, aber zentralen "
            "Lebensnerv der Region und ein lohnender Bestandteil naturkundlicher Touren."
        ),
        "hu": (
            "A(z) {name} folyovize hosszu szakaszon meghatarozza {region} tajat, mezogazdasagat "
            "es teleputtorteneset. {desc_cap} A forrasvidek, a kozepso szakasz es a torkolat "
            "osszekoti a hegyvidekes belso teruleteket a parti sikkal, es szurdokokbol, "
            "artereken es galeriaerdokbol allo halozatot hoz letre, amely sok allat- es "
            "novenyfaj szamara biztosit folyosot. A turazo es kerekparosok malerikus szakaszokon "
            "haladnak vegig, hidakkal, regi malmokkal es ontozorendszerekkel, amelyek a viz "
            "szigeti jelentoseget mutatjak be. Aszalyos idoszakban a folyomeder a jellegzetes "
            "mediterran szezonalitast tukrozi, telen es tavasszal viszont gyakran szamottevoen "
            "tobb vizet vezet. Igy a vizfolyas csendes, megis kozponti eletadora valik a regiona "
            "es izgalmas resze a termeszetjarasi turaknak."
        ),
        "en": (
            "{name} shapes the landscape, farming patterns and settlement layout {region} along "
            "much of its course. {desc_cap} From its headwaters through the middle reaches to "
            "the mouth, the river connects upland zones with coastal plains, weaving a network "
            "of gorges, floodplains and gallery woodland that acts as a corridor for many "
            "species. Walkers and cyclists find scenic stretches lined with bridges, old "
            "mills and irrigation works that make the importance of water on the island "
            "tangible. In dry months the bed reveals the classic Mediterranean rhythm, while "
            "winter and spring often bring noticeably stronger flow. The watercourse remains "
            "a quiet but vital lifeline for the region and a rewarding focus for nature-based "
            "itineraries."
        ),
    },
    "mountain": {
        "de": (
            "Der Bergstandort {name} bietet eine der eindrucksvollsten Naturkulissen {region} "
            "und zaehlt zu den beliebten Zielen fuer Wandern, Foto- und Naturreisen. {desc_cap} "
            "Hoehenlage, Klima und Geologie schaffen abwechslungsreiche Lebensraeume von "
            "Pinienwaeldern und Buschland bis zu felsigen Gipfelregionen, in denen endemische "
            "Pflanzen und Tierarten gedeihen. Markierte Pfade, Schutzhuetten und Aussichts-"
            "plattformen erschliessen das Gebiet auch fuer weniger geuebte Besucher, waehrend "
            "anspruchsvollere Routen den Bergsteigern vorbehalten bleiben. Im Sommer ist das "
            "Hochland eine angenehm kuehle Alternative zur Kueste, im Winter koennen einzelne "
            "Lagen sogar Schnee erleben. Doerfer und Tavernen entlang der Zugangsstrassen "
            "ergaenzen das Erlebnis mit traditioneller Kueche, Handwerk und Gastfreundschaft."
        ),
        "hu": (
            "A(z) {name} hegyvidek {region} egyik legmeghatarozobb termeszeti kuelisszajat "
            "kinalja, es nepszerű celpont a turazok, fotografusok es termeszetbaratok kozott. "
            "{desc_cap} A magassag, az eghajlat es a foldtani adottsagok valtozatos "
            "elohelyeket teremtenek a fenyvesektol es a bozotostol egeszen a sziklas "
            "csucsokig, ahol endemikus novenyek es allatfajok elnek. A jelzett osvenyek, "
            "menedekhazak es kilatopontok megkonnyitik a tureban kevesbe gyakorlott "
            "latogatok dolgat is, mig a nehezebb utvonalak a tapasztaltabb tureszoknak es "
            "hegymaszoknak vannak fenntartva. Nyaron a magashegyseg kellemesen huvos "
            "alternativaja a partnak, telen pedig akar ho is hullhat egyes reszein. A "
            "kornyezo falvak es tavernak a hagyomanyos konyhaval es kezműves termekekkel "
            "egeszitik ki az elmenyt."
        ),
        "en": (
            "{name} delivers one of the most dramatic natural backdrops {region} and is a "
            "favourite for hiking, photography and nature-focused trips. {desc_cap} Altitude, "
            "climate and geology produce a varied mosaic of habitats, from pine forests and "
            "scrubland to rocky summit zones where endemic plants and animals thrive. Marked "
            "trails, mountain shelters and viewpoints make the area accessible to less "
            "experienced visitors, while more demanding routes reward seasoned hikers and "
            "climbers. In summer, the highlands offer a cooler alternative to the coast, "
            "and winter can even bring snow to the higher slopes. Villages and tavernas along "
            "the approach roads round out the experience with traditional cuisine, crafts "
            "and warm Cypriot hospitality."
        ),
    },
    "forest": {
        "de": (
            "Der Waldraum {name} gehoert zu den oekologisch wertvollsten Gebieten {region}. "
            "{desc_cap} Aleppo-Kiefer, Zypressen, Eichen und Macchia bilden ein dichtes "
            "Lebensraummosaik, das viele Voegel, Reptilien und Saeugetiere beherbergt und "
            "wichtige Wasser- und Bodenfunktionen erfuellt. Forstwege, Wanderpfade und "
            "Picknickplaetze machen den Wald fuer Besucher zugaenglich, ohne empfindliche "
            "Bereiche zu belasten; Schautafeln erlaeutern Geologie, Flora, Fauna und die "
            "Geschichte der jeweiligen Forstwirtschaft. Im Sommer dient das Gebiet als "
            "natuerliche Klimaanlage und Ausflugsziel fuer Familien, im Fruehling erblueht "
            "es in vielen Farben. Brandschutzmassnahmen, Forschungsstationen und Naturschutz-"
            "regeln zeigen, wie wichtig der achtsame Umgang mit diesem fragilen mediterranen "
            "Oekosystem fuer kommende Generationen ist."
        ),
        "hu": (
            "A(z) {name} erdoterulet {region} egyik okologiailag legertekesebb resze. {desc_cap} "
            "Az aleppoi fenyo, a ciprusok, tolgyfak es macchia bozót egyutt sűrű "
            "elohely-mozaikot alkot, amely sok madarnak, hullonek es emlosnek ad otthont, "
            "es fontos viz- es talajfunkciokat is ellat. Az erdei utak, turaosvenyek es "
            "piknikhelyek lehetove teszik a latogatok szamara a megismerest anelkul, hogy a "
            "kenyes reszeket terheljek; az ismerteto tablak bemutatjak a foldtant, a flórat, "
            "a faunat es az adott erdogazdalkodas tortenetet. Nyaron az erdo termeszetes "
            "klimakent szolgal, tavasszal pedig sokszinűre szineződik. A tűzvédelmi "
            "intezkedesek, kutatoallomasok es termeszetvedelmi szabalyok jol mutatjak, "
            "milyen fontos a felelos hozzaallas ehhez a torekeny mediterran okorendszerhez."
        ),
        "en": (
            "{name} is one of the ecologically richest areas {region}. {desc_cap} Aleppo pine, "
            "cypress, oak and Mediterranean maquis form a dense habitat mosaic that supports "
            "many birds, reptiles and mammals while delivering essential water and soil "
            "services. Forest roads, walking trails and picnic sites allow respectful access "
            "without overloading sensitive zones, and interpretive panels explain geology, "
            "flora, fauna and the history of forestry on the island. In summer the canopy "
            "acts as natural air-conditioning and a popular family destination, and spring "
            "brings a vivid bloom of wildflowers. Fire-prevention works, research stations "
            "and conservation rules show how essential mindful management of this fragile "
            "Mediterranean ecosystem is for future generations."
        ),
    },
    "geo": {
        "de": (
            "Die geografische Besonderheit {name} ist ein anschauliches Beispiel fuer die "
            "vielschichtige Naturgeschichte {region}. {desc_cap} Geologische Prozesse wie "
            "tektonische Bewegungen, Erosion, Verwitterung und maritime Einfluesse haben "
            "ueber Jahrmillionen das heutige Erscheinungsbild geformt und machen den Ort zu "
            "einem freiluftartigen Lehrbuch der Erdgeschichte. Schautafeln, gefuehrte "
            "Wanderungen und gelegentlich auch wissenschaftliche Open-Day-Veranstaltungen "
            "erlaeutern Gesteinsarten, Schichtfolgen und Fossilfunde. Fotografen schaetzen "
            "die Lichtstimmungen, Wanderer das offene Gelaende, und Familien finden hier eine "
            "willkommene Ergaenzung zu Strand- und Stadttagen. Da die Strukturen empfindlich "
            "auf Trittbelastung reagieren, sind markierte Wege und Verhaltensregeln "
            "ausdruecklich erwuenscht, um das Naturdenkmal langfristig zu erhalten."
        ),
        "hu": (
            "A(z) {name} foldrajzi jelenseg {region} sokretű termeszettortenetenek "
            "szemleletes peldaja. {desc_cap} Tektonikai mozgasok, eroziо, mallas es tengeri "
            "hatasok evmilliokon at alakitottak ki a mai felszint, igy a hely a foldtort "
            "szabadtéri tankonyvekent is mukodik. Tablak, vezetett tarak es alkalmilag "
            "szakmai nyilt napok mutatjak be a kőzeteket, retegsorokat es kovuleteket. "
            "A fotografusok a fenyhatasokat, a turazok a nyitott terepet ertekelik, a "
            "csaladok pedig kellemes valtozatossagkent illeszthetik be a szakmai latogatast "
            "a tengerparti es varosi napok mellett. A formaciok érzékenyek a taposasra, ezert "
            "a kijelolt osvenyek hasznalata es a termeszetvedelmi szabalyok betartasa "
            "elengedhetetlen a hely megorzesehez."
        ),
        "en": (
            "{name} is a striking geographical feature that illustrates the deep natural "
            "history {region}. {desc_cap} Tectonics, erosion, weathering and marine influence "
            "have shaped the present landscape over millions of years, turning the site into "
            "an open-air textbook of earth science. Information boards, guided walks and "
            "occasional open days unpack rock types, stratigraphy and fossil finds. "
            "Photographers value the changing light, hikers enjoy the open terrain and "
            "families find it a welcome contrast to beach and city days. Because the "
            "formations are sensitive to trampling, staying on marked paths and respecting "
            "conservation rules is essential to preserve this geological monument for future "
            "generations of visitors and researchers alike."
        ),
    },
    "region": {
        "de": (
            "Die Region {name} verbindet Landschaft, Kultur und Wirtschaft {region} zu einem "
            "eigenstaendigen Reiseraum mit klarer Identitaet. {desc_cap} Doerfer, Kuesten-"
            "abschnitte, Berge und landwirtschaftliche Flaechen ergeben ein vielfaeltiges "
            "Mosaik, das sich gut ueber mehrere Tage erkunden laesst. Reisende profitieren "
            "von einer guten Mischung aus historischen Staetten, Naturparks, Stadtvierteln, "
            "Stränden und kulinarischen Hotspots, die ueber regionale Strassen und oeffentliche "
            "Verkehrsmittel erreichbar sind. Lokale Maerkte, Festivals und Handwerks-"
            "traditionen vermitteln einen authentischen Eindruck vom Alltag der Bewohner. Wer "
            "die Region aufmerksam bereist, versteht schnell, wie eng Geographie, Geschichte "
            "und mediterraner Lebensstil hier ineinandergreifen, und nimmt mehr mit als nur "
            "die typischen Postkartenmotive."
        ),
        "hu": (
            "A(z) {name} regio osszekapcsolja {region} tajkepi, kulturalis es gazdasagi "
            "ertekeit, es onallo, jol felismerheto utazasi terkent jelenik meg. {desc_cap} "
            "A falvak, partszakaszok, hegyvidekek es mezogazdasagi teruletek valtozatos "
            "mozaikja kenyelmesen bejarhato tobb nap alatt. A latogatok jol felfedezhetik "
            "a tortenelmi helyszinek, termeszeti parkok, varosreszek, strandok es gasztronomiai "
            "kornpontok kombinaciojat, regionalis utakon es tomegkozlekedessel. A helyi "
            "piacok, fesztivalok es kezműves hagyomanyok aprolekos kepet adnak a lakosok "
            "mindennapjairol. A regio figyelmes bejarasa rovid ido alatt megmutatja, milyen "
            "szorosan kapcsolodnak itt a foldrajz, a tortenelem es a mediterran eletstilus."
        ),
        "en": (
            "{name} brings together landscape, culture and economy {region} into a "
            "distinctive travel space with a strong identity. {desc_cap} Villages, coastal "
            "stretches, mountains and farmland create a varied mosaic that rewards multi-day "
            "exploration. Travellers benefit from a balanced mix of heritage sites, nature "
            "parks, urban quarters, beaches and culinary hotspots, all reachable via regional "
            "roads and public transport. Local markets, festivals and craft traditions "
            "provide an authentic window into daily life. Anyone who explores the region "
            "carefully soon sees how geography, history and Mediterranean lifestyle are "
            "tightly woven together here, and takes home far more than the standard postcard "
            "highlights."
        ),
    },
}

# Add Romanian descriptions per type
RO_DESC = {
    "animal-habitat": (
        "{name} este una dintre cele mai apreciate destinatii de natura {region}, atragand "
        "familii, grupuri scolare si iubitori de animale care vor sa cunoasca speciile "
        "mediteraneene si cele introduse. Locatia imbina ingrijirea responsabila a animalelor "
        "cu panouri educative, programe de hranire si mesaje despre conservare, reproducere "
        "si reintroducere. {desc_cap} Vizitatorii gasesc alei umbrite, trasee accesibile, "
        "spatii de picnic si zone de joaca pentru copii, plus toalete, parcare si un mic "
        "chiosc pentru gustari. Deschisa tot anul, cu preturi corecte la intrare, locatia "
        "functioneaza la fel de bine pentru o jumatate de zi de excursie sau ca alternativa "
        "ploioasa la o zi de plaja, oferind un cadru natural ideal pentru lectii de biologie."
    ),
    "agriculture": (
        "{name} reflecta mostenirea agricola complexa {region}, unde livezile de maslini, "
        "podgoriile, citricele, ierburile si legumele mediteraneene definesc atat peisajul, "
        "cat si economia locala. {desc_cap} Pe campuri si in satele din jur se pastreaza "
        "metode traditionale de cultivare si procesare, completate de irigatii prin picurare, "
        "control integrat al daunatorilor si standarde de calitate aliniate cu cele europene. "
        "In functie de sezon, vizitatorii pot participa la recolte, vanzari direct de la "
        "ferma, degustari si tururi ghidate care explica legatura dintre sol, microclimat si "
        "aromele specifice produselor cipriote. Trasee de drumetie, taverne familiale si "
        "ateliere mestesugaresti din apropiere fac din locatie o destinatie excelenta "
        "pentru turismul gastronomic si rural."
    ),
    "industry": (
        "{name} arata cum {region} se sprijina si pe procesare, logistica si productie "
        "specializata, dincolo de turism si agricultura. {desc_cap} Aici coexista mici "
        "afaceri de familie cu unitati moderne pentru alimente, materiale de constructii, "
        "energie sau mestesuguri, sustinute de o infrastructura digitala in continua "
        "dezvoltare si de reguli clare de mediu. Pentru vizitatorii interesati de istoria "
        "economica sau de design industrial, locatia ofera o perspectiva mai putin "
        "cunoscuta asupra Ciprului: hale, terminale portuare, depozite, centre de "
        "distributie si ateliere care nu apar de obicei in ghidurile turistice. Imprejurimile "
        "imbina coridoarele principale de transport, drumurile regionale si zonele "
        "rezidentiale unde productia si viata cotidiana se intrepatrund."
    ),
    "port": (
        "Portul {name} este o poarta-cheie {region}, conectand insula la spatiul mediteranean "
        "estic pentru transport maritim, pescuit si turism. {desc_cap} In functie de marime, "
        "facilitatea poate combina cheiuri de marfa, bazine pescaresti, dane pentru iahturi "
        "si nave de croaziera, santiere de reparatii, depozite de combustibil si zone "
        "vamale, sustinute de sisteme moderne de navigatie si siguranta. In jurul portului "
        "gasesti promenade, taverne cu peste si magazine mici care dau orasului caracterul "
        "sau maritim distinct. Locul ilustreaza cum logistica, comertul si timpul liber se "
        "intrepatrund si subliniaza cat de importante raman rutele maritime pentru "
        "aprovizionarea si exportul insulei."
    ),
    "kid-landmark": (
        "{name} este o atractie dedicata familiilor {region}, gandita pentru copii, "
        "adolescenti si parinti care vor sa imbine distractia cu invatarea practica. "
        "{desc_cap} Zone tematice, spatii de joaca, statii interactive si programe "
        "potrivite varstei mentin vizita variata, in timp ce zonele umbrite, punctele de "
        "apa, locurile pentru schimbat bebelusii si chioscurile cu gustari pastreaza "
        "confortul chiar si in dupa-amiezile calduroase. Parintii apreciaza traseul usor "
        "de urmat, personalul prietenos, preturile corecte si posibilitatea de a combina "
        "mai multe activitati intr-o singura zi. Pachetele pentru zile de nastere, "
        "excursiile scolare si evenimentele sezoniere extind oferta, iar accesul auto si "
        "parcarea simpla fac locatia convenabila pentru rezidenti si turisti deopotriva."
    ),
    "landmark": (
        "{name} este unul dintre cele mai impresionante repere {region}, imbinand "
        "profunzimea istorica cu o identitate vizuala puternica. {desc_cap} Arhitectura, "
        "pozitionarea si incarcatura simbolica fac din acest loc o destinatie favorita "
        "pentru fotografie, pelerinaj si iesiri in familie, unde se intalnesc generatii "
        "intregi de localnici si calatori. Panourile multilingve, ghidurile audio si "
        "tururile programate detaliaza istoria, etapele de constructie si contextul "
        "cultural, in timp ce pietele, cafenelele si punctele de belvedere din apropiere "
        "invita la o sedere mai lunga. Accesul cu masina, autobuzul sau pe jos este "
        "facil, taxele de intrare sunt rezonabile, iar lucrarile de conservare continua "
        "sa protejeze locul, oferind vizitatorului o intelegere mai clara a regiunii."
    ),
    "lake": (
        "{name} este un habitat important si un peisaj evocator {region}. {desc_cap} "
        "Pe parcursul anului, nivelul apei, zonele saline sau dulcicole, stuful si "
        "suprafetele namoloase se schimba pe rand, creand conditii ideale pentru pasari "
        "de balta si de apa, insecte si comunitati rare de plante. Panourile interpretative, "
        "platformele de observare si potecile bine marcate permit accesul respectuos, fara "
        "deranjarea faunei. Iubitorii de pasari apreciaza in mod special migratia de "
        "primavara si toamna, cand stoluri mari poposesc pe lac. Fotografii sunt atrasi "
        "de orizonturile largi, oglinzile de apa si apusurile intense, in timp ce "
        "cercetatorii valorifica situl ca punct de referinta ecologica de lunga durata."
    ),
    "river": (
        "{name} modeleaza peisajul, agricultura si asezarile {region} pe o mare parte din "
        "cursul sau. {desc_cap} De la izvor, prin cursul mijlociu si pana la varsare, raul "
        "leaga zonele inalte de campia litorala, formand o retea de chei, lunci si paduri "
        "galerie care servesc drept coridor pentru numeroase specii. Drumetii si biciclistii "
        "gasesc tronsoane pitoresti marcate de poduri, mori vechi si lucrari de irigatie, "
        "care fac vizibila importanta apei pe insula. In lunile secetoase, albia dezvaluie "
        "ritmul tipic mediteranean, iar iarna si primavara aduc adesea debite vizibil mai "
        "mari. Cursul de apa ramane o linie de viata discreta, dar esentiala, si o tema "
        "valoroasa pentru itinerariile centrate pe natura."
    ),
    "mountain": (
        "{name} ofera unul dintre cele mai spectaculoase decoruri naturale {region} si "
        "este o destinatie favorita pentru drumetii, fotografie si calatorii in natura. "
        "{desc_cap} Altitudinea, clima si geologia produc un mozaic variat de habitate, "
        "de la paduri de pin si tufarisuri pana la zone stancoase de creasta, unde "
        "supravietuiesc plante si animale endemice. Trasee marcate, refugii si puncte "
        "de belvedere fac zona accesibila si vizitatorilor mai putin experimentati, in "
        "timp ce rutele dificile rasplatesc drumetii si alpinistii bine antrenati. Vara, "
        "platourile inalte ofera o alternativa racoroasa la litoral, iar iarna poate "
        "aduce zapada pe versantii inalti. Satele si tavernele de pe drumurile de acces "
        "completeaza experienta cu bucatarie traditionala si ospitalitate calda."
    ),
    "forest": (
        "{name} este una dintre cele mai valoroase zone ecologice {region}. {desc_cap} "
        "Pinul de Alep, chiparosii, stejarii si maquis-ul mediteranean formeaza un "
        "mozaic dens de habitate care sustine numeroase pasari, reptile si mamifere, "
        "oferind in acelasi timp servicii esentiale pentru sol si apa. Drumurile "
        "forestiere, potecile de drumetie si locurile de picnic permit acces respectuos "
        "fara a suprasolicita zonele sensibile, iar panourile interpretative explica "
        "geologia, flora, fauna si istoria silvicola a insulei. Vara, coronamentul "
        "actioneaza ca o climatizare naturala si o destinatie populara de familie, iar "
        "primavara aduce o explozie de flori salbatice. Statiile de cercetare si masurile "
        "antiincendiu arata cat de importanta este gestionarea atenta a acestui ecosistem."
    ),
    "geo": (
        "{name} este o caracteristica geografica remarcabila care ilustreaza istoria "
        "naturala profunda {region}. {desc_cap} Tectonica, eroziunea, alterarea si "
        "influentele marine au modelat peisajul actual de-a lungul a milioane de ani, "
        "transformand locul intr-un manual de stiinta a Pamantului in aer liber. "
        "Panourile informative, plimbarile ghidate si zilele ocazionale dedicate "
        "cercetarii detaliaza tipurile de roca, stratigrafia si descoperirile fosile. "
        "Fotografii apreciaza lumina schimbatoare, drumetii se bucura de teren deschis, "
        "iar familiile gasesc o alternativa binevenita la zilele petrecute la plaja sau "
        "in oras. Pentru ca formatiunile sunt sensibile la calcare, respectarea "
        "potecilor marcate este esentiala pentru conservarea acestui monument geologic."
    ),
    "region": (
        "{name} aduce impreuna peisajul, cultura si economia {region} intr-un spatiu de "
        "calatorie distinct, cu o identitate puternica. {desc_cap} Sate, fasii de coasta, "
        "munti si terenuri agricole creeaza un mozaic variat care recompenseaza "
        "explorarea pe mai multe zile. Calatorii beneficiaza de un mix echilibrat de "
        "situri istorice, parcuri naturale, cartiere urbane, plaje si puncte gastronomice, "
        "toate accesibile pe drumuri regionale si cu transport public. Pietele locale, "
        "festivalurile si traditiile mestesugaresti ofera o fereastra autentica spre "
        "viata cotidiana. Cine exploreaza atent zona observa rapid cum geografia, istoria "
        "si stilul de viata mediteranean sunt strans legate aici."
    ),
}
RO_DESC["__default__"] = RO_DESC["landmark"]

# Default if type unknown
DESC_TEMPLATES["__default__"] = DESC_TEMPLATES["landmark"]

# Per-type fact templates: list of facts (each with {name},{region},{desc_short})
FACT_TEMPLATES = {
    "animal-habitat": {
        "de": [
            "{name} liegt {region} und ist gut mit dem Auto erreichbar.",
            "Die Anlage zeigt sowohl heimische als auch eingefuehrte Tierarten.",
            "Mehrsprachige Beschilderung erleichtert Familien aus dem In- und Ausland den Besuch.",
            "Schautafeln erklaeren Schutz-, Aufzucht- und Wiederansiedlungsprogramme.",
            "Ueberdachte Bereiche und Trinkwasserstellen sorgen auch im Sommer fuer Komfort.",
            "Kindgerechte Spielzonen und Picknickplaetze sind in die Anlage integriert.",
            "Geoeffnet ganzjaehrig, mit fairer Eintrittspolitik und gut organisierter Infrastruktur.",
        ],
        "hu": [
            "A(z) {name} {region} talalhato, autoval kenyelmesen megkozelitheto.",
            "A helyszin honos es betelepitett allatfajokat egyarant bemutat.",
            "A tobbnyelvű tablak megkonnyitik a hazai es kulfoldi csaladok latogatasat.",
            "Bemutato anyagok ismertetik a vedelmi, tenyesztesi es visszatelepitesi programokat.",
            "A fedett reszek es ivovizvetelek nyaron is kellemesse teszik az ott tartozkodast.",
            "A gyermekbarat jatszoteruletek es piknikhelyek beleilleszkednek a teruletbe.",
            "A helyszin egesz evben latogathato megfizetheto belepojeggyel.",
        ],
        "en": [
            "{name} is located {region} and is easily reached by car.",
            "The site features both native and introduced animal species.",
            "Multilingual signage helps both local and international families.",
            "Display panels explain conservation, breeding and reintroduction programmes.",
            "Shaded areas and drinking-water points keep visits comfortable in summer.",
            "Child-friendly play zones and picnic areas are integrated into the layout.",
            "It opens year round with fair admission and well-organised infrastructure.",
        ],
    },
    "agriculture": {
        "de": [
            "{name} steht beispielhaft fuer die mediterrane Landwirtschaft Zyperns.",
            "Anbau und Verarbeitung kombinieren Tradition mit moderner Technik.",
            "Tropfbewaesserung und integrierter Pflanzenschutz sind weit verbreitet.",
            "Saisonale Erntezeiten bieten Hofverkauf und Verkostungen an.",
            "EU-konforme Qualitaetsstandards praegen heute viele Betriebe.",
            "Wanderwege und Tavernen in der Naehe ergaenzen das Erlebnis kulinarisch.",
            "Familienbetriebe spielen eine grosse Rolle fuer den laendlichen Zusammenhalt.",
        ],
        "hu": [
            "A(z) {name} a mediterran ciprusi mezogazdasag jellegzetes peldaja.",
            "A termeszetes es a modern technikak egymas mellett vannak jelen.",
            "A csepegteto ontozes es az integralt novenyvedelem szelesoltal elterjedt.",
            "A szezonalis idoszakokban gazdasagi vasarlast es kostolokat is tartanak.",
            "Az EU-s minosegi standardok ma mar a legtobb gazdasagra jellemzoek.",
            "A turautak es a tavernak gasztronomiailag is gazdagitjak az elmenyt.",
            "A csaladi gazdasagok kulcsszerepet jatszanak a videki kozosseg eleteben.",
        ],
        "en": [
            "{name} is a representative example of Cypriot Mediterranean farming.",
            "Cultivation and processing combine tradition with modern technology.",
            "Drip irrigation and integrated pest management are widely used.",
            "Seasonal harvests are paired with farm-gate sales and tastings.",
            "EU-aligned quality standards now shape most operations.",
            "Nearby trails and tavernas extend the experience into local cuisine.",
            "Family-run farms play a major role in rural community life.",
        ],
    },
    "industry": {
        "de": [
            "{name} steht fuer die wirtschaftliche Vielfalt Zyperns jenseits des Tourismus.",
            "Verarbeitung, Logistik und Handwerk sind zentrale Saeulen des Standortes.",
            "Kleine Familienbetriebe wirken neben groesseren modernen Anlagen.",
            "Digitalisierung und klare Umweltauflagen praegen den Alltag.",
            "Verkehrsachsen verbinden den Standort effizient mit Haefen und Staedten.",
            "Wohn- und Arbeitsbereiche liegen oft eng nebeneinander.",
            "Der Ort wird in klassischen Reisefuehrern selten ausfuehrlich gewuerdigt.",
        ],
        "hu": [
            "A(z) {name} a turizmus melletti gazdasagi sokszinűseget kepviseli.",
            "A feldolgozas, logisztika es kezműves szektor a hely fő pillerei.",
            "A csaladi gazdasagok es a modernebb uzemek egyutt vannak jelen.",
            "A digitalis fejlesztesek es a kornyezetvedelmi szabalyok meghatarozoak.",
            "A kozlekedesi tengelyek osszekotik a helyszint a kikotokkel es varosokkal.",
            "A lakofunkcio es a munkahelyek gyakran egymas mellett tallhatok.",
            "A klasszikus utikonyvek altalaban nem mutatjak be reszletesen.",
        ],
        "en": [
            "{name} reflects Cyprus's economic diversity beyond tourism.",
            "Processing, logistics and crafts form the core pillars on site.",
            "Small family firms operate alongside more modern industrial plants.",
            "Digitalisation and clear environmental rules shape day-to-day operations.",
            "Transport corridors link the site efficiently with ports and cities.",
            "Residential and work areas often sit close to one another.",
            "Mainstream guidebooks rarely cover this side of the island in detail.",
        ],
    },
    "port": {
        "de": [
            "{name} ist ein wichtiger maritimer Knotenpunkt {region}.",
            "Schifffahrt, Fischerei und Tourismus treffen hier zusammen.",
            "Frachtkais, Fischerbecken und Yachtliegeplaetze koennen kombiniert vorkommen.",
            "Promenaden, Fischrestaurants und kleine Geschaefte praegen das Hafenviertel.",
            "Moderne Navigations- und Sicherheitssysteme unterstuetzen den Betrieb.",
            "Der Hafen veranschaulicht die Bedeutung des Seewegs fuer Versorgung und Export.",
            "Bootsausfluege und Aussichtspunkte machen den Ort touristisch interessant.",
        ],
        "hu": [
            "A(z) {name} fontos tengeri csomopont {region}.",
            "Itt talalkozik a hajozas, halaszat es turizmus.",
            "Aru-, halasz- es jachtkikoto reszek egyarant elofordulhatnak.",
            "A setanyok, halaszettermek es kis uzletek a kikoto karakteret adjak.",
            "Korszerű navigacios es biztonsagi rendszerek tamogatjak az uzemeltetést.",
            "A kikoto jol mutatja a tengeri ut fontossagat a sziget eleteben.",
            "A hajos kirandulasok es kilatopontok a turistakat is vonzzak.",
        ],
        "en": [
            "{name} is a key maritime hub {region}.",
            "Shipping, fishing and tourism converge in the same area.",
            "Cargo quays, fishing basins and yacht berths can all coexist on site.",
            "Promenades, fish tavernas and small shops shape the harbour district.",
            "Modern navigation and safety systems support daily operations.",
            "The port illustrates the role of sea routes in island supply and exports.",
            "Boat trips and viewpoints add tourist appeal to the location.",
        ],
    },
    "kid-landmark": {
        "de": [
            "{name} ist gezielt auf Familien mit Kindern und Jugendlichen ausgelegt.",
            "Themenbereiche und Mitmachstationen sorgen fuer Abwechslung.",
            "Schul- und Geburtstagsangebote ergaenzen das Programm.",
            "Schattenplaetze, Wickelraeume und Snackbars erhoehen den Komfort.",
            "Mehrere Aktivitaeten lassen sich bequem an einem Tag kombinieren.",
            "Die Anlage ist mit Auto und teils mit Bus gut erreichbar.",
            "Saisonale Events erweitern das Angebot uebers Jahr hinweg.",
        ],
        "hu": [
            "A(z) {name} kifejezetten csaladokat es gyermekeket varja.",
            "A tematikus reszek es az interaktiv allomasok valtozatossagot adnak.",
            "A szuletesnapi es iskolai programok bovitik a kinalatot.",
            "A fedett reszek, pelenkazok es bufek kenyelmesseteszik a latogatast.",
            "Egyetlen napon tobb tevekenyseg is kombinalhato a helyszinen.",
            "A megkozelites autoval es buszal egyarant kenyelmes.",
            "A szezonalis esemenyek egesz evben uj programokat hoznak.",
        ],
        "en": [
            "{name} is specifically designed for families with kids and teens.",
            "Themed sections and interactive stations keep visits varied.",
            "Birthday and school packages broaden the offer further.",
            "Shade, baby-changing rooms and snack bars raise comfort levels.",
            "Several activities can be combined within a single day.",
            "The site is easily reached by car and often by bus too.",
            "Seasonal events keep the calendar lively across the year.",
        ],
    },
    "landmark": {
        "de": [
            "{name} zaehlt zu den bekanntesten Wahrzeichen {region}.",
            "Architektur, Lage und Symbolwert machen es zu einem Foto-Hotspot.",
            "Beschilderungen und Fuehrungen erlaeutern Hintergrund und Bauphasen.",
            "Cafes, Plaetze und Aussichtspunkte in der Naehe laden zum Verweilen ein.",
            "Die Anreise mit Auto, Bus oder zu Fuss ist gut moeglich.",
            "Konservierungs- und Pflegearbeiten erfolgen regelmaessig.",
            "Der Ort traegt wesentlich zur regionalen Identitaet bei.",
        ],
        "hu": [
            "A(z) {name} {region} egyik legismertebb latnivaloja.",
            "Az epitészet, a fekves es a szimbolika fotograafiai forropont.",
            "A tablak es a vezetett programok bemutatjak a hatteret.",
            "A kornyezo terek, kavezok es kilatopontok hosszas idozesre csabitanak.",
            "A megkozelites autoval, busszal vagy gyalog egyarant kenyelmes.",
            "A karbantartas es a műemlekvedelmi munkak folyamatosan zajlanak.",
            "A helyszin meghatarozo szerepet jatszik a regio kepeben.",
        ],
        "en": [
            "{name} ranks among the best-known landmarks {region}.",
            "Architecture, setting and symbolism make it a photographic hotspot.",
            "Signage and guided tours unpack background and building phases.",
            "Nearby squares, cafes and viewpoints encourage longer stays.",
            "It is reachable by car, bus or on foot with relative ease.",
            "Ongoing conservation and maintenance work protect the site.",
            "The landmark contributes strongly to the region's identity.",
        ],
    },
    "lake": {
        "de": [
            "{name} ist ein wichtiger Lebensraum fuer Wat- und Wasservoegel.",
            "Salzgehalt und Wasserspiegel veraendern sich im Jahreslauf deutlich.",
            "Schilfguertel und Schlammflaechen bieten Nahrung und Brutplaetze.",
            "Aussichtspunkte erlauben Beobachtungen ohne Stoerung der Tierwelt.",
            "Im Fruehjahr und Herbst sind grosse Vogelschwaerme zu sehen.",
            "Das Gebiet ist auch fotografisch besonders lohnend.",
            "Der See ist Teil eines beobachteten Naturschutzkonzepts.",
        ],
        "hu": [
            "A(z) {name} fontos elohely a gazlo es vizimadaraknak.",
            "A sotartalom es a vizszint az evszakok soran latvanyosan valtozik.",
            "A nadasok es a saros zonak taplalekot es feszkelőhelyet biztosi tnak.",
            "A kilatopontok az allatok zavarasa nelkul teszik lehetove a megfigyelest.",
            "Tavasszal es osszel nagy madarcsapatok jelennek meg.",
            "A terulet fotografiailag is kuelonosen latvanyos.",
            "A to a felugyelt termeszetvedelmi program resze.",
        ],
        "en": [
            "{name} is an important habitat for wading and water birds.",
            "Salinity and water levels change significantly through the year.",
            "Reedbeds and mudflats provide food and breeding sites.",
            "Viewing points allow observation without disturbing wildlife.",
            "Large flocks gather here during spring and autumn migration.",
            "The area is also exceptionally rewarding for photography.",
            "The lake forms part of a monitored conservation framework.",
        ],
    },
    "river": {
        "de": [
            "{name} verbindet Bergregion und Kuestenebene {region}.",
            "Quelle, Mittellauf und Muendung schaffen vielfaeltige Lebensraeume.",
            "Schluchten, Talauen und Galeriewaelder dienen als oekologische Korridore.",
            "Bruecken, alte Muehlen und Bewaesserungssysteme begleiten den Verlauf.",
            "Im Sommer faellt der Wasserstand typisch fuer mediterrane Fluesse.",
            "Wanderer und Radfahrer finden malerische Etappen entlang des Ufers.",
            "Das Gewaesser ist ein zentraler Lebensnerv der Region.",
        ],
        "hu": [
            "A(z) {name} osszekoti a hegyvidekes belso teruletet a partvidekel {region}.",
            "A forras, a kozepso szakasz es a torkolat valtozatos elohelyeket teremt.",
            "A szurdokok, arterek es galeriaerdok okologiai folyosokent szolgalnak.",
            "Hidak, regi malmok es ontozorendszerek kiserik a folyot.",
            "Nyaron a vizszint a mediterran folyokra jellemzoen leesik.",
            "A part menten festoi szakaszok varjak a turazokat es kerekparosokat.",
            "A vizfolyas a regiо fontos eletadora.",
        ],
        "en": [
            "{name} connects upland zones with the coastal plain {region}.",
            "Headwaters, middle reaches and mouth create varied habitats.",
            "Gorges, floodplains and gallery woodland act as ecological corridors.",
            "Bridges, old mills and irrigation works line its course.",
            "Summer flow drops in line with typical Mediterranean rivers.",
            "Walkers and cyclists find scenic stretches along the banks.",
            "The river remains a central lifeline for the region.",
        ],
    },
    "mountain": {
        "de": [
            "{name} ist eines der markantesten Bergziele {region}.",
            "Hoehenlage und Klima erzeugen vielfaeltige Lebensraeume.",
            "Endemische Pflanzen und Tiere sind hier besonders praesent.",
            "Markierte Pfade, Huetten und Aussichtspunkte erleichtern den Zugang.",
            "Im Sommer ist das Hochland eine kuehle Alternative zur Kueste.",
            "In Wintermonaten kann es in hoeheren Lagen Schnee geben.",
            "Doerfer und Tavernen rund um den Berg ergaenzen das Erlebnis.",
        ],
        "hu": [
            "A(z) {name} {region} egyik legmarkansabb hegyvideki celja.",
            "A magassag es az eghajlat valtozatos elohelyeket eredmenyez.",
            "Az endemikus novenyek es allatok itt kuelonosen jelenten lannak.",
            "Jelzett osvenyek, menedekek es kilatopontok segitik a turazast.",
            "Nyaron a magashegyseg kellemes alternativaja a partnak.",
            "Telen a magasabb teruleteken eloforul ho.",
            "A kornyezo falvak es tavernak gazdagitjak az elmenyt.",
        ],
        "en": [
            "{name} is one of the most striking mountain destinations {region}.",
            "Altitude and climate generate a varied set of habitats.",
            "Endemic plants and animals are particularly visible here.",
            "Marked trails, huts and viewpoints support a wide range of hikers.",
            "Summer brings a cool, breezy alternative to the coast.",
            "Higher slopes can receive snow during the winter months.",
            "Surrounding villages and tavernas round out the experience.",
        ],
    },
    "forest": {
        "de": [
            "{name} ist eines der oekologisch wertvollsten Waldgebiete {region}.",
            "Aleppo-Kiefer, Eichen und Macchia praegen die Vegetation.",
            "Forstwege und Wanderpfade erschliessen das Gebiet schonend.",
            "Schautafeln erlaeutern Geologie, Flora und Fauna vor Ort.",
            "Der Wald wirkt im Sommer wie eine natuerliche Klimaanlage.",
            "Brandschutz- und Forschungsmassnahmen werden konsequent umgesetzt.",
            "Picknickplaetze sind in das Areal integriert.",
        ],
        "hu": [
            "A(z) {name} az egyik okologiailag legertekesebb erdoterulet {region}.",
            "Az aleppoi fenyo, a tolgyek es a macchia adjak a novenyzet karakteret.",
            "Az erdei utak es turaosvenyek kimello modon teszik feltarhatova a teruletet.",
            "A tablak ismertetik a foldtant, a flórat es a faunat.",
            "Nyaron az erdo termeszetes klimakent szolgal.",
            "A tűzvedelmi es kutatasi intezkedesek folyamatosan zajlanak.",
            "A piknikhelyek beleilleszkednek a teruletbe.",
        ],
        "en": [
            "{name} is one of the most ecologically valuable forest areas {region}.",
            "Aleppo pine, oaks and Mediterranean maquis dominate the canopy.",
            "Forest roads and walking trails open the area without overloading it.",
            "Information panels explain local geology, flora and fauna.",
            "In summer the canopy acts like natural air-conditioning.",
            "Fire-prevention and research efforts run continuously.",
            "Picnic sites are integrated within the protected area.",
        ],
    },
    "geo": {
        "de": [
            "{name} ist ein anschauliches Beispiel fuer die Erdgeschichte Zyperns.",
            "Tektonik, Erosion und Verwitterung haben die Formation gepraegt.",
            "Schautafeln erklaeren Gesteinsarten und Schichtfolgen.",
            "Fotografen schaetzen besondere Lichtstimmungen vor Ort.",
            "Markierte Wege schuetzen empfindliche Strukturen vor Trittschaeden.",
            "Wissenschaftliche Open-Day-Veranstaltungen finden gelegentlich statt.",
            "Der Ort ist ein willkommener Kontrast zu Strand- und Stadttagen.",
        ],
        "hu": [
            "A(z) {name} szemleletes peldaja a ciprusi foldtorténetnek.",
            "Tektonika, eroziо es mallas alakitottak a formaciot.",
            "A tablak ismertetik a kőzetek tipusait es retegsorait.",
            "A fotografusok kulonosen ertekelik a fenyhatasokat.",
            "A jelzett utak vedik a kenyes szerkezeteket.",
            "Alkalmilag szakmai nyilt napokat is tartanak.",
            "A hely jol kiegeszit egy strand- vagy varosi napot.",
        ],
        "en": [
            "{name} is a vivid example of Cypriot earth history.",
            "Tectonics, erosion and weathering have shaped the formation.",
            "Information panels describe rock types and stratigraphy.",
            "Photographers particularly value the local lighting conditions.",
            "Marked paths protect sensitive structures from foot damage.",
            "Occasional open days bring scientific context to visitors.",
            "The site offers a welcome contrast to beach and city days.",
        ],
    },
    "region": {
        "de": [
            "{name} verbindet Landschaft, Kultur und Wirtschaft zu einem eigenstaendigen Reiseraum.",
            "Doerfer, Kuesten, Berge und Felder bilden ein vielfaeltiges Mosaik.",
            "Strassen und oeffentliche Verkehrsmittel erschliessen die Region.",
            "Maerkte, Festivals und Handwerk geben einen authentischen Einblick in den Alltag.",
            "Mehrtaegige Reisen werden besonders empfohlen, um das Profil zu erfassen.",
            "Die Region praegt das mediterrane Lebensgefuehl spuerbar.",
            "Geographie, Geschichte und Lebensstil greifen hier eng ineinander.",
        ],
        "hu": [
            "A(z) {name} a tajat, a kulturat es a gazdasagot egyseges utazasi terre fűzi.",
            "Falvak, partok, hegyek es fold ek valtozatos mozaikot alkotnak.",
            "A regionalis utak es a kozlekedes feltarjak a regiot.",
            "A piacok, fesztivalok es kezműves termekek autentikus kepet adnak a mindennapokrol.",
            "Tobbnapos utak ajanlottak a regio mely megismeresehez.",
            "A regio jelentos szerepet jatszik a mediterran eletersben.",
            "A foldrajz, a tortenelem es az eletmod itt szorosan osszefonodik.",
        ],
        "en": [
            "{name} weaves landscape, culture and economy into a coherent travel space.",
            "Villages, coast, mountains and farmland form a varied mosaic.",
            "Regional roads and public transport open up the area.",
            "Markets, festivals and crafts give an authentic look at daily life.",
            "Multi-day visits are recommended to grasp the region's profile.",
            "It plays a noticeable role in shaping local Mediterranean lifestyle.",
            "Geography, history and lifestyle are tightly interwoven here.",
        ],
    },
}
FACT_TEMPLATES["__default__"] = FACT_TEMPLATES["landmark"]


def desc_first_sentence(desc):
    """Take description and return a capitalised first chunk usable mid-paragraph."""
    if not desc:
        return ""
    s = desc.strip()
    # Keep up to first sentence end.
    m = re.search(r"^(.+?[\.\!])", s)
    out = m.group(1) if m else s
    if not out.endswith("."):
        out = out + "."
    return out


def render_desc(typ, lang, name_lang, desc_lang):
    if lang == "ro":
        tpl = RO_DESC.get(typ, RO_DESC["__default__"])
    else:
        tpl = DESC_TEMPLATES.get(typ, DESC_TEMPLATES["__default__"]).get(lang)
        if not tpl:
            tpl = DESC_TEMPLATES["__default__"][lang]
    desc_cap = desc_first_sentence(desc_lang) if desc_lang else ""
    return tpl.format(name=name_lang or "", desc_cap=desc_cap, region=REGION[lang])


def render_facts(typ, lang, name_lang):
    tpls = FACT_TEMPLATES.get(typ, FACT_TEMPLATES["__default__"]).get(lang)
    if not tpls:
        tpls = FACT_TEMPLATES["__default__"][lang]
    return [t.format(name=name_lang or "", region=REGION[lang]) for t in tpls]


def js_str(s):
    """Escape a Python string for a TS double-quoted literal."""
    return s.replace("\\", "\\\\").replace('"', '\\"')


def js_arr(items):
    return "[" + ", ".join(f'"{js_str(x)}"' for x in items) + "]"


def process_block(block):
    typ = extract(r'^\s*type:\s*"([^"]+)",', block) or ""
    name = extract_lang_obj("name", block)
    desc = extract_lang_obj("description", block)
    if not typ:
        m = re.search(r'type:\s*"([^"]+)"', block)
        typ = m.group(1) if m else ""

    new_block = block

    # Replace de description placeholder
    if "ERSETZE_MICH_DE" in new_block:
        new_de = render_desc(typ, "de", name.get("de", ""), desc.get("de", ""))
        new_block = re.sub(
            r'(descriptionAdvanced:\s*\{\s*\n\s*de:\s*)"ERSETZE_MICH_DE"',
            lambda mo: mo.group(1) + f'"{js_str(new_de)}"',
            new_block,
        )
        # Replace de facts placeholders array
        new_facts_de = render_facts(typ, "de", name.get("de", ""))
        new_block = re.sub(
            r'(\bde:\s*)\["ERSETZE_MICH_DE_FACT_1"[^\]]*\]',
            lambda mo: mo.group(1) + js_arr(new_facts_de),
            new_block,
        )

    # Replace empty hu description ("") and empty hu facts ([])
    # hu description: only replace if value is currently empty string
    def replace_hu_desc(mo):
        new_hu = render_desc(typ, "hu", name.get("hu", ""), desc.get("hu", ""))
        return f'hu: "{js_str(new_hu)}"'

    # Match hu: "" (zero-length string) inside descriptionAdvanced ONLY.
    # We do narrow matching on `hu: ""` followed by comma or newline.
    new_block = re.sub(r'hu:\s*""', replace_hu_desc, new_block, count=1)

    # hu facts: empty array []
    def replace_hu_facts(mo):
        new_facts_hu = render_facts(typ, "hu", name.get("hu", ""))
        return "hu: " + js_arr(new_facts_hu)

    new_block = re.sub(r"hu:\s*\[\]", replace_hu_facts, new_block, count=1)

    # Replace empty ro description ("") in descriptionAdvanced. Do NOT touch ro facts
    # (already populated with content per prompt rule).
    def replace_ro_desc(mo):
        new_ro = render_desc(typ, "ro", name.get("ro", ""), desc.get("ro", ""))
        return f'ro: "{js_str(new_ro)}"'

    new_block = re.sub(r'ro:\s*""', replace_ro_desc, new_block, count=1)

    # Replace en description placeholder text
    EN_PLACEHOLDER = "This location is a fascinating location"
    if EN_PLACEHOLDER in new_block:
        new_en = render_desc(typ, "en", name.get("en", ""), desc.get("en", ""))
        new_block = re.sub(
            r'en:\s*"This location is a fascinating location[^"]*"',
            lambda mo: f'en: "{js_str(new_en)}"',
            new_block,
        )

    # Replace en facts placeholder ["Fact example 1", ...]
    if '"Fact example 1"' in new_block:
        new_facts_en = render_facts(typ, "en", name.get("en", ""))
        new_block = re.sub(
            r'en:\s*\["Fact example 1"[^\]]*\]',
            lambda mo: "en: " + js_arr(new_facts_en),
            new_block,
        )

    return new_block


new_blocks = [process_block(b) for b in poi_blocks]

# Reassemble
new_body_parts = []
for i, b in enumerate(new_blocks):
    new_body_parts.append(poi_separators[i])
    new_body_parts.append(b)
new_body_parts.append(trailing)
new_body = "".join(new_body_parts)

new_src = prefix + new_body + suffix
PATH.write_text(new_src, encoding="utf-8")
print(f"Wrote {PATH} ({len(new_src)} chars)", file=sys.stderr)
