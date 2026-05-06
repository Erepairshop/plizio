// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraCanadaRefill: POI[] = [
{
    id: "thousand-islands-refill",
    type: "island",
    parent: "CA-ON",
    coords: [-76.0, 44.3333],
    name: { de: "Thousand Islands", hu: "Thousand Islands", ro: "Arhipelagul Thousand Islands", en: "Thousand Islands" },
    description: {
      de: "Ein Archipel von über 1.800 Inseln im Sankt-Lorenz-Strom an der Grenze zwischen den USA und Kanada.",
      hu: "Több mint 1800 szigetből álló szigetcsoport a Szent Lőrinc-folyóban, az USA és Kanada határán.",
      ro: "Un arhipelag de peste 1.800 de insule în fluviul Sfântul Laurențiu, la granița dintre SUA și Canada.",
      en: "An archipelago of over 1,800 islands in the St. Lawrence River, straddling the US-Canada border."
    },
    facts: {
      de: ["Beliebtes Touristenziel für Bootstouren", "Heimat des Boldt Castle und des Singer Castle"],
      hu: ["Népszerű turisztikai célpont hajókirándulásokhoz", "Itt található a Boldt-kastély és a Singer-kastély"],
      ro: ["Destinație turistică populară pentru plimbări cu barca", "Găzduiește Castelul Boldt și Castelul Singer"],
      en: ["A popular tourist destination for boat tours", "Home to Boldt Castle and Singer Castle"]
    }, image: "/poi-images/thousand-islands-refill.webp"},
  {
    id: "montreal-botanical-garden-refill",
    type: "landmark",
    parent: "CA-QC",
    coords: [-73.555, 45.56],
    name: { de: "Botanischer Garten Montreal", hu: "Montréali Botanikus Kert", ro: "Grădina Botanică din Montreal", en: "Montreal Botanical Garden" },
    description: {
      de: "Ein großer botanischer Garten mit Themengärten und Gewächshäusern, der als einer der bedeutendsten der Welt gilt.",
      hu: "Nagy botanikus kert tematikus kertekkel és üvegházakkal, amelyet a világ egyik legjelentősebbjének tartanak.",
      ro: "O grădină botanică mare, cu grădini tematice și sere, considerată una dintre cele mai importante din lume.",
      en: "A large botanical garden with themed gardens and greenhouses, considered one of the world's most important."
    },
    facts: {
      de: ["Umfasst den Chinesischen Garten, den Japanischen Garten und den Alpengarten", "Nationale historische Stätte Kanadas"],
      hu: ["Magában foglalja a Kínai-kertet, a Japán-kertet és az Alpesi-kertet", "Kanada nemzeti történelmi helyszíne"],
      ro: ["Include Grădina Chineză, Grădina Japoneză și Grădina Alpină", "Situl Istoric Național al Canadei"],
      en: ["Includes the Chinese Garden, Japanese Garden, and Alpine Garden", "A National Historic Site of Canada"]
    }
  }
]

