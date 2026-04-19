
import json

countries = [
    {"id": "DE", "name": {"de": "Deutschland", "hu": "Németország", "ro": "Germania", "en": "Germany"}, "capital": "Berlin", "coords": [13.4, 52.5], "poly": [[6,55],[10,55],[14,54],[15,51],[13,48],[9,48],[6,49],[6,52]]},
    {"id": "FR", "name": {"de": "Frankreich", "hu": "Franciaország", "ro": "Franța", "en": "France"}, "capital": "Paris", "coords": [2.3, 48.8], "poly": [[-5,48],[0,51],[8,49],[7,43],[3,43],[-2,43]]},
    {"id": "IT", "name": {"de": "Italien", "hu": "Olaszország", "ro": "Italia", "en": "Italy"}, "capital": "Roma", "coords": [12.5, 41.9], "poly": [[7,45],[12,47],[14,45],[18,40],[15,38],[12,41],[10,44]]},
    {"id": "ES", "name": {"de": "Spanien", "hu": "Spanyolország", "ro": "Spania", "en": "Spain"}, "capital": "Madrid", "coords": [-3.7, 40.4], "poly": [[-9,43],[-2,43],[3,42],[0,36],[-6,36],[-9,37]]},
    {"id": "RO", "name": {"de": "Rumänien", "hu": "Románia", "ro": "România", "en": "Romania"}, "capital": "București", "coords": [26.1, 44.4], "poly": [[20,48],[27,48],[30,45],[29,44],[23,44],[20,45]]},
    {"id": "HU", "name": {"de": "Ungarn", "hu": "Magyarország", "ro": "Ungaria", "en": "Hungary"}, "capital": "Budapest", "coords": [19.0, 47.5], "poly": [[16,48],[23,48],[23,46],[16,46]]},
    {"id": "GB", "name": {"de": "Vereinigtes Königreich", "hu": "Egyesült Királyság", "ro": "Regatul Unit", "en": "United Kingdom"}, "capital": "London", "coords": [-0.1, 51.5], "poly": [[-6,50],[-1,51],[-1,55],[-5,59],[-7,55]]},
    {"id": "PL", "name": {"de": "Polen", "hu": "Lengyelország", "ro": "Polonia", "en": "Poland"}, "capital": "Warszawa", "coords": [21.0, 52.2], "poly": [[14,54],[19,55],[24,54],[24,50],[19,49],[15,50]]},
    {"id": "UA", "name": {"de": "Ukraine", "hu": "Ukrajna", "ro": "Ucraina", "en": "Ukraine"}, "capital": "Kyiv", "coords": [30.5, 50.4], "poly": [[24,52],[35,52],[40,49],[35,46],[25,46]]},
    {"id": "GR", "name": {"de": "Griechenland", "hu": "Görögország", "ro": "Grecia", "en": "Greece"}, "capital": "Athina", "coords": [23.7, 38.0], "poly": [[20,40],[26,41],[25,36],[22,36]]},
    {"id": "SE", "name": {"de": "Schweden", "hu": "Svédország", "ro": "Suedia", "en": "Sweden"}, "capital": "Stockholm", "coords": [18.1, 59.3], "poly": [[11,59],[15,55],[20,56],[24,66],[20,69],[12,63]]},
    {"id": "NO", "name": {"de": "Norwegen", "hu": "Norvégia", "ro": "Norvegia", "en": "Norway"}, "capital": "Oslo", "coords": [10.7, 59.9], "poly": [[5,58],[10,58],[13,63],[20,70],[30,71],[20,68],[10,63]]},
    {"id": "FI", "name": {"de": "Finnland", "hu": "Finnország", "ro": "Finlanda", "en": "Finland"}, "capital": "Helsinki", "coords": [24.9, 60.2], "poly": [[21,60],[30,60],[32,70],[25,70],[21,68]]},
    {"id": "AT", "name": {"de": "Österreich", "hu": "Ausztria", "ro": "Austria", "en": "Austria"}, "capital": "Wien", "coords": [16.4, 48.2], "poly": [[10,47],[17,48],[17,47],[10,46]]},
    {"id": "CH", "name": {"de": "Schweiz", "hu": "Svájc", "ro": "Elveția", "en": "Switzerland"}, "capital": "Bern", "coords": [7.4, 46.9], "poly": [[6,47],[10,47],[10,46],[6,46]]},
    {"id": "PT", "name": {"de": "Portugal", "hu": "Portugália", "ro": "Portugalia", "en": "Portugal"}, "capital": "Lisboa", "coords": [-9.1, 38.7], "poly": [[-9,42],[-7,42],[-7,37],[-9,37]]},
    {"id": "IE", "name": {"de": "Irland", "hu": "Írország", "ro": "Irlanda", "en": "Ireland"}, "capital": "Dublin", "coords": [-6.3, 53.3], "poly": [[-10,52],[-6,52],[-6,55],[-10,55]]},
    {"id": "BE", "name": {"de": "Belgien", "hu": "Belgium", "ro": "Belgia", "en": "Belgium"}, "capital": "Bruxelles", "coords": [4.3, 50.8], "poly": [[2,51],[6,51],[6,49],[2,49]]},
    {"id": "NL", "name": {"de": "Niederlande", "hu": "Hollandia", "ro": "Olanda", "en": "Netherlands"}, "capital": "Amsterdam", "coords": [4.9, 52.4], "poly": [[3,53],[7,53],[7,51],[3,51]]},
    {"id": "DK", "name": {"de": "Dänemark", "hu": "Dánia", "ro": "Danemarca", "en": "Denmark"}, "capital": "København", "coords": [12.6, 55.7], "poly": [[8,57],[13,57],[13,54],[8,54]]},
    {"id": "CZ", "name": {"de": "Tschechien", "hu": "Csehország", "ro": "Cehia", "en": "Czech Republic"}, "capital": "Praha", "coords": [14.4, 50.1], "poly": [[12,51],[19,51],[19,48],[12,48]]},
    {"id": "SK", "name": {"de": "Slowakei", "hu": "Szlovákia", "ro": "Slovacia", "en": "Slovakia"}, "capital": "Bratislava", "coords": [17.1, 48.1], "poly": [[17,49],[23,49],[23,47],[17,47]]},
    {"id": "HR", "name": {"de": "Kroatien", "hu": "Horvátország", "ro": "Croația", "en": "Croatia"}, "capital": "Zagreb", "coords": [16.0, 45.8], "poly": [[13,46],[19,46],[19,43],[13,43]]},
    {"id": "SI", "name": {"de": "Slowenien", "hu": "Szlovénia", "ro": "Slovenia", "en": "Slovenia"}, "capital": "Ljubljana", "coords": [14.5, 46.1], "poly": [[13,47],[16,47],[16,45],[13,45]]},
    {"id": "RS", "name": {"de": "Serbien", "hu": "Szerbia", "ro": "Serbia", "en": "Serbia"}, "capital": "Beograd", "coords": [20.5, 44.8], "poly": [[18,46],[23,46],[23,42],[18,42]]},
    {"id": "BG", "name": {"de": "Bulgarien", "hu": "Bulgária", "ro": "Bulgaria", "en": "Bulgaria"}, "capital": "Sofia", "coords": [23.3, 42.7], "poly": [[22,44],[29,44],[29,41],[22,41]]},
    {"id": "EE", "name": {"de": "Estland", "hu": "Észtország", "ro": "Estonia", "en": "Estonia"}, "capital": "Tallinn", "coords": [24.8, 59.4], "poly": [[21,60],[28,60],[28,57],[21,57]]},
    {"id": "LV", "name": {"de": "Lettland", "hu": "Lettország", "ro": "Letonia", "en": "Latvia"}, "capital": "Rīga", "coords": [24.1, 56.9], "poly": [[21,58],[28,58],[28,55],[21,55]]},
    {"id": "LT", "name": {"de": "Litauen", "hu": "Litvánia", "ro": "Lituania", "en": "Lithuania"}, "capital": "Vilnius", "coords": [25.3, 54.7], "poly": [[21,56],[27,56],[27,53],[21,53]]},
    {"id": "MD", "name": {"de": "Moldawien", "hu": "Moldova", "ro": "Moldova", "en": "Moldova"}, "capital": "Chișinău", "coords": [28.9, 47.0], "poly": [[26,48],[30,48],[30,45],[26,45]]},
    {"id": "BY", "name": {"de": "Belarus", "hu": "Fehéroroszország", "ro": "Belarus", "en": "Belarus"}, "capital": "Minsk", "coords": [27.6, 53.9], "poly": [[23,56],[32,56],[32,51],[23,51]]},
    {"id": "IS", "name": {"de": "Island", "hu": "Izland", "ro": "Islanda", "en": "Iceland"}, "capital": "Reykjavík", "coords": [-21.9, 64.1], "poly": [[-25,66],[-13,66],[-13,63],[-25,63]]},
    {"id": "AL", "name": {"de": "Albanien", "hu": "Albánia", "ro": "Albania", "en": "Albania"}, "capital": "Tirana", "coords": [19.8, 41.3], "poly": [[19,42],[21,42],[21,39],[19,39]]},
    {"id": "MK", "name": {"de": "Nordmazedonien", "hu": "Észak-Macedónia", "ro": "Macedonia de Nord", "en": "North Macedonia"}, "capital": "Skopje", "coords": [21.4, 42.0], "poly": [[20,42],[23,42],[23,40],[20,40]]},
    {"id": "BA", "name": {"de": "Bosnien und Herzegowina", "hu": "Bosznia-Hercegovina", "ro": "Bosnia și Herțegovina", "en": "Bosnia and Herzegovina"}, "capital": "Sarajevo", "coords": [18.4, 43.9], "poly": [[15,45],[20,45],[20,42],[15,42]]},
    {"id": "ME", "name": {"de": "Montenegro", "hu": "Montenegró", "ro": "Muntenegru", "en": "Montenegro"}, "capital": "Podgorica", "coords": [19.3, 42.4], "poly": [[18,43],[20,43],[20,41],[18,41]]},
]

def project(lon, lat):
    x = ((lon + 25) / 70) * 1000
    y = (1 - (lat - 35) / 40) * 800
    return round(x, 1), round(y, 1)

output = []
for c in countries:
    path_parts = []
    xs = []
    ys = []
    for i, pt in enumerate(c["poly"]):
        x, y = project(pt[0], pt[1])
        path_parts.append(f"{'M' if i == 0 else 'L'} {x},{y}")
        xs.append(x)
        ys.append(y)
    path_parts.append("Z")
    
    cx, cy = project(c["coords"][0], c["coords"][1])
    
    # labelX, labelY as center of polygon
    lx = sum(xs) / len(xs)
    ly = sum(ys) / len(ys)
    
    output.append({
        "id": c["id"],
        "name": c["name"],
        "capital": c["capital"],
        "capitalCoords": [cx, cy],
        "labelX": round(lx, 1),
        "labelY": round(ly, 1),
        "path": " ".join(path_parts)
    })

ts_content = f"""export const europaViewBox = "0 0 1000 800";

export interface EuropeCountry {{
  id: string;
  name: {{ de: string; hu: string; ro: string; en: string }};
  capital: string;
  capitalCoords: [number, number];
  labelX: number;
  labelY: number;
  path: string;
}}

export const europaMap: EuropeCountry[] = {json.dumps(output, indent=2, ensure_ascii=False)};

export function projectCoordsEuropa(lon: number, lat: number): [number, number] {{
  const x = ((lon + 25) / 70) * 1000;
  const y = (1 - (lat - 35) / 40) * 800;
  return [x, y];
}}
"""

with open("lib/visualLab/maps/europa.svg.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)
