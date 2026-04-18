import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "geo-tf-1",
    taskDescription: { en: "Countries and Capitals", de: "Länder und Hauptstädte", hu: "Országok és fővárosok", ro: "Țări și capitale" },
    statements: [
      { id: "s1", text: { en: "Paris is the capital of France.", de: "Paris ist die Hauptstadt von Frankreich.", hu: "Párizs Franciaország fővárosa.", ro: "Paris este capitala Franței." }, isTrue: true, explanation: { en: "Correct. Paris is the capital city.", de: "Richtig. Paris ist die Hauptstadt.", hu: "Helyes. Párizs a főváros.", ro: "Corect. Paris este capitala." } },
      { id: "s2", text: { en: "Canberra is the capital of New Zealand.", de: "Canberra ist die Hauptstadt von Neuseeland.", hu: "Canberra Új-Zéland fővárosa.", ro: "Canberra este capitala Noii Zeelande." }, isTrue: false, explanation: { en: "Canberra is the capital of Australia.", de: "Canberra ist die Hauptstadt von Australien.", hu: "Canberra Ausztrália fővárosa.", ro: "Canberra este capitala Australiei." } },
      { id: "s3", text: { en: "Bucharest is in Europe.", de: "Bukarest liegt in Europa.", hu: "Bukarest Európában van.", ro: "București este în Europa." }, isTrue: true, explanation: { en: "Romania is a European country.", de: "Rumänien ist ein europäisches Land.", hu: "Románia európai ország.", ro: "România este țară europeană." } }
    ]
  },
  {
    id: "geo-tf-2",
    taskDescription: { en: "Continents and Oceans", de: "Kontinente und Ozeane", hu: "Kontinensek és óceánok", ro: "Continente și oceane" },
    statements: [
      { id: "s1", text: { en: "Africa is crossed by the Equator.", de: "Afrika wird vom Äquator durchquert.", hu: "Afrikát metszi az Egyenlítő.", ro: "Africa este traversată de Ecuator." }, isTrue: true, explanation: { en: "The Equator crosses central Africa.", de: "Der Äquator verläuft durch Zentralafrika.", hu: "Az Egyenlítő átmegy Közép-Afrikán.", ro: "Ecuatorul traversează Africa centrală." } },
      { id: "s2", text: { en: "The Pacific Ocean is smaller than the Atlantic Ocean.", de: "Der Pazifik ist kleiner als der Atlantik.", hu: "A Csendes-óceán kisebb, mint az Atlanti-óceán.", ro: "Oceanul Pacific este mai mic decât Atlanticul." }, isTrue: false, explanation: { en: "The Pacific is the largest ocean.", de: "Der Pazifik ist der größte Ozean.", hu: "A Csendes-óceán a legnagyobb óceán.", ro: "Pacificul este cel mai mare ocean." } },
      { id: "s3", text: { en: "Antarctica has the coldest climate.", de: "Die Antarktis hat das kälteste Klima.", hu: "Az Antarktisz éghajlata a leghidegebb.", ro: "Antarctica are cea mai rece climă." }, isTrue: true, explanation: { en: "It is the coldest continent.", de: "Sie ist der kälteste Kontinent.", hu: "Ez a leghidegebb kontinens.", ro: "Este continentul cel mai rece." } }
    ]
  },
  {
    id: "geo-tf-3",
    taskDescription: { en: "Mountains and Rivers", de: "Gebirge und Flüsse", hu: "Hegyek és folyók", ro: "Munți și râuri" },
    statements: [
      { id: "s1", text: { en: "Mount Everest is in the Himalayas.", de: "Der Mount Everest liegt im Himalaya.", hu: "A Mount Everest a Himalájában van.", ro: "Muntele Everest este în Himalaya." }, isTrue: true, explanation: { en: "Everest belongs to the Himalaya range.", de: "Everest gehört zum Himalaya-Gebirge.", hu: "Az Everest a Himalája hegylánc része.", ro: "Everest face parte din lanțul Himalaya." } },
      { id: "s2", text: { en: "The Danube flows into the Pacific Ocean.", de: "Die Donau fließt in den Pazifik.", hu: "A Duna a Csendes-óceánba ömlik.", ro: "Dunărea se varsă în Oceanul Pacific." }, isTrue: false, explanation: { en: "It flows into the Black Sea.", de: "Sie mündet ins Schwarze Meer.", hu: "A Fekete-tengerbe ömlik.", ro: "Se varsă în Marea Neagră." } },
      { id: "s3", text: { en: "The Andes are mainly in South America.", de: "Die Anden liegen hauptsächlich in Südamerika.", hu: "Az Andok főleg Dél-Amerikában vannak.", ro: "Anzii sunt în principal în America de Sud." }, isTrue: true, explanation: { en: "They run along the west coast of South America.", de: "Sie verlaufen entlang der Westküste Südamerikas.", hu: "Dél-Amerika nyugati partján húzódnak.", ro: "Se întind de-a lungul coastei vestice a Americii de Sud." } }
    ]
  }
];
