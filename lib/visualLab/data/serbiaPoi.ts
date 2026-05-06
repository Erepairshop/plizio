// @ts-nocheck
import type { POI } from "./poi";

// 1. Ország
export const serbiaCountry: POI = {
  id: "country-serbia",
  type: "country",
  coords: [21.0059, 44.0165],
  name: { de: "Serbien", hu: "Szerbia", ro: "Serbia", en: "Serbia" },
  description: {
    de: "Serbien liegt auf der Balkanhalbinsel. Es ist bekannt für seine reiche Geschichte, beeindruckende Festungen, orthodoxe Klöster und lebendige Städte.",
    hu: "Szerbia a Balkán-félszigeten fekszik. Gazdag történelméről, lenyűgöző erődítményeiről, ortodox kolostorairól és nyüzsgő városairól ismert.",
    ro: "Serbia este situată în Peninsula Balcanică. Este cunoscută pentru istoria sa bogată, cetățile impresionante, mănăstirile ortodoxe și orașele pline de viață.",
    en: "Serbia is located on the Balkan Peninsula. It is known for its rich history, impressive fortresses, orthodox monasteries, and vibrant cities."
  },
  descriptionAdvanced: {
    de: "Serbien, gelegen im Herzen der Balkanhalbinsel, dient als historisches Bindeglied zwischen Ost- und Westeuropa. Das Land bietet eine vielfältige Geografie, die von der fruchtbaren Pannonischen Tiefebene im Norden bis zu den dramatischen Gebirgszügen im Süden reicht. Seine reiche Kulturgeschichte ist durch die Einflüsse der Römer, Byzantiner und Osmanen geprägt, die zahlreiche Festungen und Klöster hinterlassen haben. Heute steht Serbien für eine Mischung aus Tradition und Aufbruch. Geografie K7 — Gebirgsregionen und Flüsse.",
    hu: "Szerbia a Balkán-félsziget szívében helyezkedik el, és évszázadokon át a keleti és nyugati civilizációk találkozási pontja volt. A táj északon a termékeny Pannon-síkságból áll, míg délen drámai hegyvonulatok és szurdokok uralják. Gazdag történelme során római császárok, bizánci uralkodók és oszmán hódítók hagyták rajta a nyomukat. Napjainkban az ország a hagyományos balkáni vendégszeretet és a pezsgő kulturális élet izgalmas keverékét nyújtja. Földrajz K7 — hegységek és folyók.",
    ro: "Serbia este o țară cu un relief variat, de la câmpiile fertile din nordul Voivodinei până la munții spectaculoși din sud și est. Istoria sa multimilenară a fost influențată de nenumărate popoare, lăsând în urmă un patrimoniu cultural diversificat ce include cetăți medievale, mănăstiri ortodoxe UNESCO și orașe cosmopolite. Astăzi, Serbia joacă un rol vital în regiunea Balcanilor, combinând tradițiile ortodoxe cu un ritm de viață modern. Geografie K7 — munți și râuri.",
    en: "Serbia, positioned centrally in the Balkan Peninsula, serves as a historical crossroads between Eastern and Western civilizations. The country's diverse landscape ranges from the fertile Pannonian Plain in the north to dramatic mountain ranges and deep river gorges in the south. Throughout its rich history, Roman emperors, Byzantine rulers, and Ottoman conquerors have all left indelible marks on its culture and architecture. Today, the nation offers a compelling blend of traditional Balkan hospitality, vibrant cultural life, and a complex historical legacy. Geography K7 — mountains and rivers."
  },
  facts: {
    de: ["Hauptstadt: Belgrad", "Liegt am Balkan", "Währung: Serbischer Dinar", "Amtssprache: Serbisch", "Nicht-EU-Mitglied"],
    hu: ["Főváros: Belgrád", "A Balkánon fekszik", "Pénznem: Szerb dinár", "Hivatalos nyelv: Szerb", "Nem EU-tag"],
    ro: ["Capitala: Belgrad", "Situată în Balcani", "Moneda: Dinar sârbesc", "Limba oficială: Sârbă", "Nu este membră UE"],
    en: ["Capital: Belgrade", "Located in the Balkans", "Currency: Serbian Dinar", "Official language: Serbian", "Non-EU member"]
  },
  factsAdvanced: {
    de: [
      "Historischer Transitweg zwischen Europa und dem Nahen Osten.",
      "Geburtsort von 17 römischen Kaisern.",
      "Vom Donaufluss durchquert.",
      "Bekannt für orthodoxe Klöster.",
      "Großer Exporteur von Himbeeren und Pflaumen."
    ],
    hu: ["Európa és a Közel-Kelet történelmi tranzitútvonala", "17 római császár született a mai Szerbia területén", "A Duna jelentős szakasza szeli át", "Híres a pravoszláv kolostorairól", "A málna és a szilva egyik legnagyobb exportőre"],
    ro: [
        "Traseu de tranzit istoric între Europa și Orientul Mijlociu.",
        "Locul de naștere a 17 împărați romani.",
        "Traversată de fluviul Dunărea.",
        "Cunoscută pentru mănăstirile ortodoxe.",
        "Mare exportator de zmeură și prune."
    ],
    en: ["Historically served as a major transit route between Europe and the Middle East.", "The territory of modern Serbia was the birthplace of 17 Roman emperors.", "Traversed by a significant stretch of the Danube River.", "Renowned for its collection of beautifully preserved Orthodox monasteries.", "Recognized globally as one of the largest exporters of raspberries and plums."]
  }, image: "/poi-images/country-serbia.webp"};

export const serbiaAllPoi = [serbiaCountry];

