import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "geo-tf-1",
    taskDescription: { en: "Countries and Capitals", de: "Laender und Hauptstaedte", hu: "Orszagok es fovarosok", ro: "Tari si capitale" },
    statements: [
      { id: "s1", text: { en: "Paris is the capital of France.", de: "Paris ist die Hauptstadt von Frankreich.", hu: "Parizs Franciaorszag fovarosa.", ro: "Paris este capitala Frantei." }, isTrue: true, explanation: { en: "Correct. Paris is the capital city.", de: "Richtig. Paris ist die Hauptstadt.", hu: "Helyes. Parizs a fovaros.", ro: "Corect. Paris este capitala." } },
      { id: "s2", text: { en: "Canberra is the capital of New Zealand.", de: "Canberra ist die Hauptstadt von Neuseeland.", hu: "Canberra Uj-Zeland fovarosa.", ro: "Canberra este capitala Noii Zeelande." }, isTrue: false, explanation: { en: "Canberra is the capital of Australia.", de: "Canberra ist die Hauptstadt von Australien.", hu: "Canberra Ausztralia fovarosa.", ro: "Canberra este capitala Australiei." } },
      { id: "s3", text: { en: "Bucharest is in Europe.", de: "Bukarest liegt in Europa.", hu: "Bukarest Europaban van.", ro: "Bucuresti este in Europa." }, isTrue: true, explanation: { en: "Romania is a European country.", de: "Rumaenien ist ein europaeisches Land.", hu: "Romania europai orszag.", ro: "Romania este tara europeana." } }
    ]
  },
  {
    id: "geo-tf-2",
    taskDescription: { en: "Continents and Oceans", de: "Kontinente und Ozeane", hu: "Kontinensek es oceanok", ro: "Continente si oceane" },
    statements: [
      { id: "s1", text: { en: "Africa is crossed by the Equator.", de: "Afrika wird vom Aequator durchquert.", hu: "Afrikat metszi az Egyenlito.", ro: "Africa este traversata de Ecuator." }, isTrue: true, explanation: { en: "The Equator crosses central Africa.", de: "Der Aequator verlaeuft durch Zentralafrika.", hu: "Az Egyenlito atmegy Kozep-Afrikan.", ro: "Ecuatorul traverseaza Africa centrala." } },
      { id: "s2", text: { en: "The Pacific Ocean is smaller than the Atlantic Ocean.", de: "Der Pazifik ist kleiner als der Atlantik.", hu: "A Csendes-ocean kisebb, mint az Atlanti-ocean.", ro: "Oceanul Pacific este mai mic decat Atlanticul." }, isTrue: false, explanation: { en: "The Pacific is the largest ocean.", de: "Der Pazifik ist der groesste Ozean.", hu: "A Csendes-ocean a legnagyobb ocean.", ro: "Pacificul este cel mai mare ocean." } },
      { id: "s3", text: { en: "Antarctica has the coldest climate.", de: "Die Antarktis hat das kaelteste Klima.", hu: "Az Antarktisz eghajlata a leghidegebb.", ro: "Antarctica are cea mai rece clima." }, isTrue: true, explanation: { en: "It is the coldest continent.", de: "Sie ist der kaelteste Kontinent.", hu: "Ez a leghidegebb kontinens.", ro: "Este continentul cel mai rece." } }
    ]
  },
  {
    id: "geo-tf-3",
    taskDescription: { en: "Mountains and Rivers", de: "Gebirge und Fluesse", hu: "Hegyek es folyok", ro: "Munti si rauri" },
    statements: [
      { id: "s1", text: { en: "Mount Everest is in the Himalayas.", de: "Der Mount Everest liegt im Himalaya.", hu: "A Mount Everest a Himalajaban van.", ro: "Muntele Everest este in Himalaya." }, isTrue: true, explanation: { en: "Everest belongs to the Himalaya range.", de: "Everest gehoert zum Himalaya-Gebirge.", hu: "Az Everest a Himalaja hegylanc resze.", ro: "Everest face parte din lantul Himalaya." } },
      { id: "s2", text: { en: "The Danube flows into the Pacific Ocean.", de: "Die Donau fliesst in den Pazifik.", hu: "A Duna a Csendes-oceanba omlik.", ro: "Dunarea se varsa in Oceanul Pacific." }, isTrue: false, explanation: { en: "It flows into the Black Sea.", de: "Sie muendet ins Schwarze Meer.", hu: "A Fekete-tengerbe omlik.", ro: "Se varsa in Marea Neagra." } },
      { id: "s3", text: { en: "The Andes are mainly in South America.", de: "Die Anden liegen hauptsaechlich in Suedamerika.", hu: "Az Andok foleg Del-Amerikaban vannak.", ro: "Anzii sunt in principal in America de Sud." }, isTrue: true, explanation: { en: "They run along the west coast of South America.", de: "Sie verlaufen entlang der Westkueste Suedamerikas.", hu: "Del-Amerika nyugati partjan huzodnak.", ro: "Se intind de-a lungul coastei vestice a Americii de Sud." } }
    ]
  }
];
