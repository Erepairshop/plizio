// @ts-nocheck
// AUTO-GENERATED
import type { POI } from "./poi";
import { poiExtraJapanCitiesV2 } from "./poiExtraJapanCitiesV2";
import { poiExtraJapanEconomicV2 } from "./poiExtraJapanEconomicV2";
import { poiExtraJapanHistoryV2 } from "./poiExtraJapanHistoryV2";
import { poiExtraJapanLandmarksV2 } from "./poiExtraJapanLandmarksV2";
import { poiExtraJapanLifeV2 } from "./poiExtraJapanLifeV2";
import { poiExtraJapanNatureV2 } from "./poiExtraJapanNatureV2";
import { poiExtraJapanReliefV2 } from "./poiExtraJapanReliefV2";

export const japanCountry: POI[] = [
  {
    id: "JP",
    type: "country",
    coords: [138.2529, 36.2048],
    name: { de: "Japan", hu: "Japán", ro: "Japonia", en: "Japan" },
    description: {
      de: "Inselstaat in Ostasien mit über 6800 Inseln und einer einzigartigen Kultur.",
      hu: "Kelet-ázsiai szigetország több mint 6800 szigettel és egyedülálló kultúrával.",
      ro: "Stat insular în Asia de Est cu peste 6800 de insule și o cultură unică.",
      en: "Island nation in East Asia with over 6,800 islands and a unique culture."
    },
    descriptionAdvanced: {
      de: "Japan ist ein Archipel im Pazifik, das aus vier Hauptinseln (Honshu, Hokkaido, Kyushu, Shikoku) und Tausenden kleineren Inseln besteht. Das Land ist berühmt für seine Mischung aus uralter Tradition und modernster Technologie: jahrhundertealte Tempel und Schreine stehen neben futuristischen Wolkenkratzern. Geprägt von Vulkanen, Erdbeben und vier deutlich ausgeprägten Jahreszeiten, ist Japan auch die Heimat des Mount Fuji, der Kirschblüte (Sakura) und einer weltweit einflussreichen Pop-Kultur mit Anime, Manga und Videospielen.",
      hu: "Japán egy csendes-óceáni szigetcsoport, amely négy fő szigetből (Honshu, Hokkaido, Kyushu, Shikoku) és több ezer kisebb szigetből áll. Az ország híres az ősi hagyományok és a csúcstechnológia keverékéről: évszázados templomok és szentélyek állnak a futurisztikus felhőkarcolók mellett. Vulkánok, földrengések és négy jól elkülönülő évszak jellemzik, és otthont ad a Fudzsi-hegynek, a cseresznyevirágzásnak (sakura) és egy világszerte meghatározó popkultúrának (anime, manga, videojátékok).",
      ro: "Japonia este un arhipelag în Pacific format din patru insule principale (Honshu, Hokkaido, Kyushu, Shikoku) și mii de insule mai mici. Țara este faimoasă pentru îmbinarea tradițiilor străvechi cu tehnologia de vârf: temple vechi de secole stau alături de zgârie-nori futuriști. Marcată de vulcani, cutremure și patru anotimpuri distincte, Japonia găzduiește muntele Fuji, înflorirea cireșilor (sakura) și o cultură pop globală cu anime, manga și jocuri video.",
      en: "Japan is a Pacific archipelago made up of four main islands (Honshu, Hokkaido, Kyushu, Shikoku) and thousands of smaller ones. The country is famous for blending ancient tradition with cutting-edge technology: centuries-old temples and shrines stand next to futuristic skyscrapers. Shaped by volcanoes, earthquakes and four distinct seasons, Japan is home to Mount Fuji, the cherry blossom (sakura) and a globally influential pop culture of anime, manga and video games."
    },
    facts: {
      de: ["Hauptstadt: Tokio", "Über 6800 Inseln", "Einwohner: ca. 125 Millionen", "Währung: Yen"],
      hu: ["Főváros: Tokió", "Több mint 6800 sziget", "Lakosság: kb. 125 millió", "Pénznem: jen"],
      ro: ["Capitala: Tokyo", "Peste 6800 de insule", "Populație: cca. 125 milioane", "Monedă: yen"],
      en: ["Capital: Tokyo", "Over 6,800 islands", "Population: ~125 million", "Currency: yen"]
    },
    factsAdvanced: {
      de: ["Der Mount Fuji ist mit 3776 m der höchste Berg Japans", "Japan liegt am Pazifischen Feuerring und erlebt jährlich rund 1500 spürbare Erdbeben", "Der Shinkansen ist seit 1964 in Betrieb und gilt als eines der pünktlichsten Zugsysteme der Welt", "Etwa 73 % des Landes sind gebirgig", "Japan hat eine der höchsten Lebenserwartungen weltweit", "Das Land ist die viertgrößte Volkswirtschaft der Welt"],
      hu: ["A Fudzsi 3776 méteres magasságával Japán legmagasabb hegye", "Japán a csendes-óceáni tűzgyűrűn fekszik, évente kb. 1500 érezhető földrengéssel", "A Shinkansen 1964 óta közlekedik, és a világ egyik legpontosabb vasútrendszere", "Az ország területének kb. 73%-a hegyvidék", "Japánban a világ egyik legmagasabb a várható élettartam", "A világ negyedik legnagyobb gazdasága"],
      ro: ["Muntele Fuji are 3776 m și este cel mai înalt vârf al Japoniei", "Japonia se află pe Cercul de Foc al Pacificului, cu cca. 1500 de cutremure resimțite anual", "Shinkansen-ul circulă din 1964 și este unul dintre cele mai punctuale sisteme feroviare din lume", "Aproximativ 73% din teritoriu este muntos", "Speranța de viață este printre cele mai ridicate din lume", "Este a patra economie a lumii"],
      en: ["Mount Fuji is the country's highest peak at 3,776 m", "Japan sits on the Pacific Ring of Fire and feels around 1,500 earthquakes per year", "The Shinkansen has run since 1964 and is one of the most punctual train systems in the world", "About 73% of the country is mountainous", "Life expectancy is among the highest globally", "Japan is the world's fourth-largest economy"]
    },
    area: 377975
  }
];

export const japanRegions: POI[] = [];

export const japanCities: POI[] = [
  {
    id: "jp-tokyo",
    type: "state-capital",
    parent: "JP",
    coords: [139.6917, 35.6895],
    name: { de: "Tokio", hu: "Tokió", ro: "Tokyo", en: "Tokyo" },
    description: {
      de: "Die Hauptstadt Japans und größte Metropolregion der Welt.",
      hu: "Japán fővárosa és a világ legnagyobb metropoliszrégiója.",
      ro: "Capitala Japoniei și cea mai mare zonă metropolitană din lume.",
      en: "The capital of Japan and the largest metropolitan area in the world."
    },
    descriptionAdvanced: {
      de: "Tokio ist eine pulsierende Megastadt, in der Tradition und Moderne nahtlos verschmelzen. Glitzernde Wolkenkratzer in Shinjuku und Shibuya stehen neben uralten Schreinen wie dem Meiji-jingū. Die Stadt ist berühmt für ihre lebhaften Stadtviertel, exzellente Küche, das hochmoderne U-Bahn-Netz und die Kreuzung von Shibuya, eine der belebtesten der Welt.",
      hu: "Tokió egy pezsgő megaváros, ahol a hagyomány és a modernitás zökkenőmentesen olvad össze. Shinjuku és Shibuya csillogó felhőkarcolói mellett ősi szentélyek, például a Meidzsi-szentély állnak. A város híres élénk negyedeiről, kiváló konyhájáról, csúcstechnológiás metróhálózatáról és a Shibuya-kereszteződésről, amely a világ egyik legforgalmasabbja.",
      ro: "Tokyo este o megalopolă vibrantă unde tradiția și modernitatea se contopesc perfect. Zgârie-norii strălucitori din Shinjuku și Shibuya stau alături de altare străvechi precum Meiji-jingū. Orașul este renumit pentru cartierele sale animate, bucătăria excelentă, rețeaua ultramodernă de metrou și intersecția Shibuya, una dintre cele mai aglomerate din lume.",
      en: "Tokyo is a buzzing megacity where tradition and modernity merge seamlessly. Glittering skyscrapers in Shinjuku and Shibuya stand beside ancient shrines like Meiji-jingū. The city is famous for its lively districts, world-class cuisine, ultra-modern subway and the Shibuya scramble, one of the busiest crossings in the world."
    },
    facts: {
      de: ["Größter Ballungsraum der Welt", "Über 13 Mio. Einwohner in der Stadt", "Sitz des Kaisers von Japan", "Bekannt für Shibuya-Kreuzung"],
      hu: ["A világ legnagyobb agglomerációja", "A városban több mint 13 millió lakos", "Japán császárának székhelye", "A Shibuya-kereszteződésről híres"],
      ro: ["Cea mai mare aglomerare urbană din lume", "Peste 13 milioane de locuitori în oraș", "Reședința împăratului Japoniei", "Faimoasă pentru intersecția Shibuya"],
      en: ["World's largest metropolitan area", "Over 13 million residents in the city", "Seat of the Emperor of Japan", "Known for Shibuya Crossing"]
    },
    factsAdvanced: {
      de: ["Der Tokyo Skytree ist mit 634 m der höchste Turm Japans", "Die U-Bahn befördert täglich rund 8 Millionen Fahrgäste", "Tokio hat mehr Michelin-Sterne als jede andere Stadt der Welt", "Die Stadt hieß bis 1868 Edo und war Sitz des Shogunats", "Mehr als 36 Millionen Menschen leben im Großraum Tokio", "Tokio richtete 1964 und 2020 die Olympischen Sommerspiele aus"],
      hu: ["A Tokyo Skytree 634 méterével Japán legmagasabb tornya", "A metró naponta kb. 8 millió utast szállít", "Tokióban van a világon a legtöbb Michelin-csillag", "A város 1868-ig Edo néven a sógunátus székhelye volt", "Tokió agglomerációjában több mint 36 millióan élnek", "1964-ben és 2020-ban Tokió rendezte a nyári olimpiát"],
      ro: ["Tokyo Skytree are 634 m și este cel mai înalt turn din Japonia", "Metroul transportă circa 8 milioane de pasageri zilnic", "Tokyo are cele mai multe stele Michelin din lume", "Orașul s-a numit Edo până în 1868 și a fost sediul shogunatului", "În aglomerarea Tokyo trăiesc peste 36 de milioane de oameni", "A găzduit Jocurile Olimpice de vară în 1964 și 2020"],
      en: ["The Tokyo Skytree is Japan's tallest tower at 634 m", "The subway carries around 8 million passengers a day", "Tokyo has more Michelin stars than any other city", "Until 1868 the city was called Edo and seat of the shogunate", "Greater Tokyo is home to over 36 million people", "Tokyo hosted the Summer Olympics in 1964 and 2020"]
    },
    historyYear: 1457,
    area: 2194, image: "/poi-images/jp-tokyo.webp"
  },
  {
    id: "jp-osaka",
    type: "city",
    parent: "JP",
    coords: [135.5023, 34.6937],
    name: { de: "Osaka", hu: "Oszaka", ro: "Osaka", en: "Osaka" },
    description: {
      de: "Drittgrößte Stadt Japans, bekannt als kulinarische Hauptstadt.",
      hu: "Japán harmadik legnagyobb városa, az ország kulináris fővárosa.",
      ro: "Al treilea oraș ca mărime din Japonia, cunoscut drept capitala culinară.",
      en: "Japan's third-largest city, known as the country's culinary capital."
    },
    descriptionAdvanced: {
      de: "Osaka liegt an der Westküste Honshus und ist seit Jahrhunderten ein wichtiges Handelszentrum. Die Stadt ist berühmt für ihre offene, herzliche Mentalität und ihre Streetfood-Kultur mit Spezialitäten wie Takoyaki und Okonomiyaki. Über dem geschäftigen Treiben thront die imposante Burg Osaka, ein Symbol der Stadt und Schauplatz japanischer Geschichte.",
      hu: "Oszaka Honsú nyugati partján fekszik, és évszázadok óta fontos kereskedelmi központ. A városra a nyitott, közvetlen mentalitás és gazdag utcaételkultúra jellemző: olyan különlegességekkel, mint a takojaki és az okonomijaki. A nyüzsgés fölé magasodik az impozáns oszakai vár, a város szimbóluma és a japán történelem egyik fontos színtere.",
      ro: "Osaka se află pe coasta vestică a insulei Honshu și este de secole un important centru comercial. Orașul este renumit pentru spiritul deschis al locuitorilor și pentru cultura gastronomică stradală, cu specialități precum takoyaki și okonomiyaki. Deasupra forfotei se înalță impunătorul castel Osaka, un simbol al orașului și un loc cu însemnătate istorică.",
      en: "Osaka sits on Honshu's west coast and has been a key commercial hub for centuries. The city is famous for its outgoing, friendly character and its rich street-food culture, with specialities like takoyaki and okonomiyaki. Towering over the bustle stands Osaka Castle, a symbol of the city and a stage of Japanese history."
    },
    facts: {
      de: ["Bekannt als 'Küche der Nation'", "Heimat der Burg Osaka", "Über 2,7 Mio. Einwohner", "Wichtigster Hafen der Kansai-Region"],
      hu: ["A 'nemzet konyhájaként' ismert", "Az oszakai vár otthona", "Több mint 2,7 millió lakos", "A Kanszai régió legfontosabb kikötője"],
      ro: ["Cunoscut drept 'bucătăria națiunii'", "Găzduiește castelul Osaka", "Peste 2,7 milioane de locuitori", "Cel mai important port al regiunii Kansai"],
      en: ["Known as 'the nation's kitchen'", "Home of Osaka Castle", "Over 2.7 million residents", "Main port of the Kansai region"]
    },
    factsAdvanced: {
      de: ["Die Burg Osaka wurde 1583 von Toyotomi Hideyoshi erbaut", "Das Stadtviertel Dotonbori ist berühmt für seine leuchtenden Reklametafeln", "Osaka war im 18. Jahrhundert das wichtigste Reishandelszentrum Japans", "Universal Studios Japan befindet sich hier", "Der Dialekt Osaka-ben gilt als humorvoll und direkt", "Die Stadt richtet 2025 die Weltausstellung aus"],
      hu: ["Az oszakai várat Tojotomi Hidejosi építtette 1583-ban", "A Dótonbori negyed a fényreklámjairól híres", "A 18. században Oszaka volt Japán legfontosabb rizskereskedelmi központja", "Itt található a Universal Studios Japan", "Az oszakai dialektust (oszaka-ben) humorosnak és közvetlennek tartják", "A város 2025-ben rendezi a világkiállítást"],
      ro: ["Castelul Osaka a fost construit în 1583 de Toyotomi Hideyoshi", "Cartierul Dotonbori este celebru pentru reclamele luminoase", "În secolul XVIII era principalul centru de comerț cu orez al Japoniei", "Aici se află Universal Studios Japan", "Dialectul Osaka-ben este considerat plin de umor și direct", "Orașul găzduiește Expoziția Mondială din 2025"],
      en: ["Osaka Castle was built in 1583 by Toyotomi Hideyoshi", "The Dotonbori district is famous for its glowing neon signs", "In the 18th century Osaka was Japan's main rice trading hub", "Universal Studios Japan is located here", "The Osaka-ben dialect is considered humorous and direct", "The city is hosting the 2025 World Expo"]
    },
    historyYear: 645,
    area: 225.21, image: "/poi-images/jp-osaka.webp"
  },
  {
    id: "jp-kyoto",
    type: "city",
    parent: "JP",
    coords: [135.7681, 35.0116],
    name: { de: "Kyoto", hu: "Kiotó", ro: "Kyoto", en: "Kyoto" },
    description: {
      de: "Ehemalige Kaiserstadt, Symbol der traditionellen japanischen Kultur.",
      hu: "Egykori császárváros, a hagyományos japán kultúra szimbóluma.",
      ro: "Fostă capitală imperială, simbol al culturii tradiționale japoneze.",
      en: "Former imperial capital and symbol of traditional Japanese culture."
    },
    descriptionAdvanced: {
      de: "Kyoto war über tausend Jahre lang die Hauptstadt Japans und ist heute das Herz der traditionellen Kultur des Landes. Mit über 1600 buddhistischen Tempeln, 400 Shinto-Schreinen, kaiserlichen Palästen und kunstvoll angelegten Gärten gilt sie als spirituelles Zentrum. Im Frühling färben Kirschblüten die Stadt rosa, im Herbst leuchten die Ahornblätter feuerrot.",
      hu: "Kiotó több mint ezer évig volt Japán fővárosa, és ma az ország hagyományos kultúrájának szíve. Több mint 1600 buddhista templomával, 400 sintó szentélyével, császári palotáival és művészi kertjeivel az ország szellemi központjának tartják. Tavasszal a cseresznyevirág borítja rózsaszínre, ősszel a juharlevelek lángvörösre festik a várost.",
      ro: "Kyoto a fost capitala Japoniei timp de peste o mie de ani și este astăzi inima culturii tradiționale. Cu peste 1600 de temple budiste, 400 de altare shinto, palate imperiale și grădini rafinate, este considerat centrul spiritual al țării. Primăvara, cireșii înfloriți colorează orașul în roz, iar toamna, frunzele de arțar îl învăluie în roșu aprins.",
      en: "Kyoto served as Japan's capital for over a thousand years and remains the heart of the country's traditional culture. With more than 1,600 Buddhist temples, 400 Shinto shrines, imperial palaces and exquisite gardens, it is considered the nation's spiritual centre. Cherry blossoms turn the city pink in spring, and maple leaves blaze red in autumn."
    },
    facts: {
      de: ["17 UNESCO-Welterbestätten", "Hauptstadt Japans 794–1868", "Bekannt für Geisha-Viertel Gion", "Heimat des Goldenen Pavillons"],
      hu: ["17 UNESCO világörökségi helyszín", "Japán fővárosa 794–1868 között", "A Gion gésa-negyedéről híres", "Az Aranypavilon otthona"],
      ro: ["17 situri UNESCO", "Capitala Japoniei între 794 și 1868", "Cunoscut pentru cartierul gheișelor Gion", "Găzduiește Pavilionul de Aur"],
      en: ["17 UNESCO World Heritage sites", "Capital of Japan 794–1868", "Famous for the Gion geisha district", "Home of the Golden Pavilion"]
    },
    factsAdvanced: {
      de: ["Der Fushimi Inari-Schrein hat über 10.000 rote Torii-Tore", "Kyoto wurde im Zweiten Weltkrieg von Bombardierungen weitgehend verschont", "Der Bambuswald von Arashiyama ist eine ikonische Kulisse", "Die Stadt war Geburtsort der Tee-Zeremonie und des Ikebana", "Über 1500 Tempel und Schreine prägen das Stadtbild", "Hier wird der traditionelle Matcha-Tee in höchster Qualität produziert"],
      hu: ["A Fusimi Inari szentély több mint 10 000 vörös toriival rendelkezik", "Kiotót a második világháborúban nagyrészt elkerülték a bombázások", "Az arasijamai bambuszerdő ikonikus helyszín", "A teaszertartás és az ikebana szülővárosa", "Több mint 1500 templom és szentély határozza meg a városképét", "Itt készül a legmagasabb minőségű matcha tea"],
      ro: ["Altarul Fushimi Inari are peste 10.000 de porți torii roșii", "Kyoto a fost în mare parte cruțat de bombardamentele celui de-al Doilea Război Mondial", "Pădurea de bambus din Arashiyama este un peisaj iconic", "Orașul este leagănul ceremoniei ceaiului și al ikebanei", "Peste 1500 de temple și altare definesc orașul", "Aici se produce ceaiul matcha de cea mai înaltă calitate"],
      en: ["Fushimi Inari Shrine features over 10,000 red torii gates", "Kyoto was largely spared from bombing in World War II", "The Arashiyama bamboo grove is an iconic landscape", "The city is the birthplace of the tea ceremony and ikebana", "Over 1,500 temples and shrines define the cityscape", "The world's highest-grade matcha tea is produced here"]
    },
    historyYear: 794,
    area: 827.83, image: "/poi-images/jp-kyoto.webp"
  },
  {
    id: "jp-yokohama",
    type: "city",
    parent: "JP",
    coords: [139.6380, 35.4437],
    name: { de: "Yokohama", hu: "Jokohama", ro: "Yokohama", en: "Yokohama" },
    description: {
      de: "Zweitgrößte Stadt Japans und wichtigste Hafenstadt südlich von Tokio.",
      hu: "Japán második legnagyobb városa és Tokiótól délre a legfontosabb kikötőváros.",
      ro: "Al doilea oraș ca mărime din Japonia și principalul port la sud de Tokyo.",
      en: "Japan's second-largest city and the main port south of Tokyo."
    },
    descriptionAdvanced: {
      de: "Yokohama war 1859 einer der ersten Häfen Japans, die sich westlichen Händlern öffneten, und entwickelte sich rasch zu einer kosmopolitischen Hafenmetropole. Die moderne Skyline am Wasser, Minato Mirai, kontrastiert mit dem größten Chinatown Japans und dem historischen Roten Lagerhausviertel. Yokohama ist heute eines der wichtigsten Wirtschafts- und Logistikzentren des Landes.",
      hu: "Jokohama 1859-ben Japán egyik első kikötője lett, amely megnyílt a nyugati kereskedők előtt, és gyorsan kozmopolita kikötővárossá vált. A vízparti modern Minato Mirai felhőkarcolói éles kontrasztban állnak Japán legnagyobb kínai negyedével és a történelmi Vörös Téglaraktárakkal. Ma az ország egyik legfontosabb gazdasági és logisztikai központja.",
      ro: "Yokohama a fost în 1859 unul dintre primele porturi japoneze deschise comercianților occidentali și s-a transformat rapid într-o metropolă portuară cosmopolită. Skyline-ul modern Minato Mirai contrastează cu cel mai mare cartier chinezesc al Japoniei și cu istoricele Hambare Roșii. Astăzi este unul dintre cele mai importante centre economice și logistice ale țării.",
      en: "Yokohama was one of the first Japanese ports opened to Western trade in 1859 and quickly grew into a cosmopolitan harbour city. Its modern Minato Mirai waterfront skyline contrasts with Japan's largest Chinatown and the historic Red Brick Warehouses. Today it is one of the country's leading economic and logistics hubs."
    },
    facts: {
      de: ["Über 3,7 Mio. Einwohner", "Größtes Chinatown Japans", "Wichtigster Außenhandelshafen", "Heimat des Landmark Tower"],
      hu: ["Több mint 3,7 millió lakos", "Japán legnagyobb kínai negyede", "A legfontosabb külkereskedelmi kikötő", "A Landmark Tower otthona"],
      ro: ["Peste 3,7 milioane de locuitori", "Cel mai mare Chinatown din Japonia", "Cel mai important port comercial extern", "Găzduiește Landmark Tower"],
      en: ["Over 3.7 million residents", "Japan's largest Chinatown", "Main port for foreign trade", "Home of the Landmark Tower"]
    },
    factsAdvanced: {
      de: ["Der Hafen wurde 1859 für den westlichen Handel geöffnet", "Der Yokohama Landmark Tower ist mit 296 m das zweithöchste Gebäude Japans", "Die Stadt beherbergt das größte Cup-Noodles-Museum der Welt", "Yokohama war Pionier vieler 'ersten Male' Japans (Eisenbahn, Bier, Eis)", "Der Hafen wickelt jährlich Millionen Container ab", "Im Cosmo Clock 21 dreht sich eines der größten Riesenräder der Welt"],
      hu: ["A kikötőt 1859-ben nyitották meg a nyugati kereskedelem előtt", "A Yokohama Landmark Tower 296 méterével Japán második legmagasabb épülete", "Itt található a világ legnagyobb instant tészta múzeuma", "Számos japán 'elsőség' (vasút, sör, fagylalt) Jokohamában indult", "A kikötő évente több millió konténert kezel", "A Cosmo Clock 21 a világ egyik legnagyobb óriáskerekét forgatja"],
      ro: ["Portul a fost deschis comerțului occidental în 1859", "Yokohama Landmark Tower are 296 m și este al doilea cel mai înalt din Japonia", "Aici se află cel mai mare muzeu Cup Noodles din lume", "Multe 'premiere' japoneze (calea ferată, berea, înghețata) au început la Yokohama", "Portul procesează anual milioane de containere", "Cosmo Clock 21 este una dintre cele mai mari roți panoramice din lume"],
      en: ["The port was opened to Western trade in 1859", "Yokohama Landmark Tower stands 296 m, Japan's second-tallest building", "The city hosts the world's largest Cup Noodles museum", "Yokohama pioneered many Japanese 'firsts' (railway, beer, ice cream)", "The port handles millions of containers each year", "Cosmo Clock 21 is one of the world's largest Ferris wheels"]
    },
    historyYear: 1859,
    area: 437.71, image: "/poi-images/jp-yokohama.webp"
  },
  {
    id: "jp-nagoya",
    type: "city",
    parent: "JP",
    coords: [136.9066, 35.1815],
    name: { de: "Nagoya", hu: "Nagoja", ro: "Nagoya", en: "Nagoya" },
    description: {
      de: "Industriezentrum in Zentraljapan und Sitz des Toyota-Konzerns.",
      hu: "Közép-Japán ipari központja és a Toyota konszern székhelye.",
      ro: "Centrul industrial al Japoniei centrale și sediul grupului Toyota.",
      en: "Industrial heartland of central Japan and home of the Toyota group."
    },
    descriptionAdvanced: {
      de: "Nagoya liegt zwischen Tokio und Osaka an der Pazifikküste und ist das Zentrum der größten Industrieregion Japans. Hier hat der Toyota-Konzern seinen Sitz, und ein Großteil der japanischen Auto- und Luftfahrtindustrie ist um die Stadt konzentriert. Die im Krieg zerstörte Burg Nagoya wurde wieder aufgebaut und ist heute zusammen mit dem Schrein Atsuta-jingū ein zentrales Wahrzeichen.",
      hu: "Nagoja Tokió és Oszaka között a Csendes-óceán partján fekszik, és Japán legnagyobb iparvidékének központja. Itt található a Toyota konszern központja, és a japán autó- és repülőgépipar jelentős része a város körül koncentrálódik. A háborúban elpusztult nagojai várat újjáépítették, és ma az Acuta szentéllyel együtt a város egyik legfontosabb jelképe.",
      ro: "Nagoya este situat între Tokyo și Osaka, pe coasta Pacificului, și reprezintă centrul celei mai mari regiuni industriale a Japoniei. Aici se află sediul grupului Toyota, iar o mare parte din industria auto și aerospațială japoneză este concentrată în jurul orașului. Castelul Nagoya, distrus în război, a fost reconstruit și, alături de altarul Atsuta-jingū, este un simbol central.",
      en: "Nagoya lies on the Pacific coast between Tokyo and Osaka and anchors Japan's largest industrial region. The Toyota group is headquartered here, and much of Japan's automotive and aerospace industry is clustered around the city. Nagoya Castle, destroyed in WWII and rebuilt, together with Atsuta Shrine, remains a central landmark."
    },
    facts: {
      de: ["Über 2,3 Mio. Einwohner", "Sitz von Toyota Motor", "Heimat der Burg Nagoya", "Wichtiger Hafen am Pazifik"],
      hu: ["Több mint 2,3 millió lakos", "A Toyota Motor székhelye", "A nagojai vár otthona", "Fontos csendes-óceáni kikötő"],
      ro: ["Peste 2,3 milioane de locuitori", "Sediul Toyota Motor", "Găzduiește Castelul Nagoya", "Port important la Pacific"],
      en: ["Over 2.3 million residents", "Headquarters of Toyota Motor", "Home of Nagoya Castle", "Major Pacific port"]
    },
    factsAdvanced: {
      de: ["Die Burg Nagoya wurde 1612 von Tokugawa Ieyasu erbaut", "Der Hafen Nagoya hat den höchsten Frachtumschlag Japans", "Spezialitäten sind Miso-Katsu, Hitsumabushi und Tebasaki", "Atsuta-jingū beherbergt das heilige Schwert Kusanagi", "Die Region produziert über 30 % der japanischen Autos", "Nagoya ist Drehkreuz des zentraljapanischen Shinkansen-Netzes"],
      hu: ["A nagojai várat 1612-ben Tokugava Iejaszu építtette", "A nagojai kikötő Japán legnagyobb áruforgalmú kikötője", "Helyi specialitás a miszó-kacu, a hicumabusi és a tebaszaki", "Az Acuta-szentély őrzi a szent Kuszanagi kardot", "A régió Japán autóinak több mint 30%-át gyártja", "Nagoja a közép-japán Shinkansen-hálózat csomópontja"],
      ro: ["Castelul Nagoya a fost construit în 1612 de Tokugawa Ieyasu", "Portul Nagoya are cel mai mare trafic de marfă din Japonia", "Specialitățile locale includ miso-katsu, hitsumabushi și tebasaki", "Altarul Atsuta-jingū păstrează sabia sacră Kusanagi", "Regiunea produce peste 30% din automobilele japoneze", "Nagoya este nod feroviar Shinkansen în centrul Japoniei"],
      en: ["Nagoya Castle was built in 1612 by Tokugawa Ieyasu", "The Port of Nagoya handles the largest cargo volume in Japan", "Local specialities include miso-katsu, hitsumabushi and tebasaki", "Atsuta Shrine houses the sacred Kusanagi sword", "The region produces over 30% of Japan's cars", "Nagoya is a key Shinkansen hub for central Japan"]
    },
    historyYear: 1610,
    area: 326.45, image: "/poi-images/jp-nagoya.webp"
  },
  {
    id: "jp-sapporo",
    type: "city",
    parent: "JP",
    coords: [141.3545, 43.0618],
    name: { de: "Sapporo", hu: "Szapporo", ro: "Sapporo", en: "Sapporo" },
    description: {
      de: "Größte Stadt Hokkaidos, bekannt für Bier, Ramen und Schneefestival.",
      hu: "Hokkaido legnagyobb városa, sörről, ramenről és hófesztiválról ismert.",
      ro: "Cel mai mare oraș din Hokkaido, faimos pentru bere, ramen și festivalul de zăpadă.",
      en: "The largest city on Hokkaido, famous for beer, ramen and a snow festival."
    },
    descriptionAdvanced: {
      de: "Sapporo wurde erst Ende des 19. Jahrhunderts nach amerikanischem Vorbild im Schachbrettmuster angelegt und ist die jüngste Großstadt Japans. Aufgrund ihrer nördlichen Lage erlebt sie strenge, schneereiche Winter, was sie zum perfekten Austragungsort des weltberühmten Schneefestivals und der Olympischen Winterspiele 1972 machte. Sapporo ist auch berühmt für sein gleichnamiges Bier und Miso-Ramen.",
      hu: "Szapporót csak a 19. század végén alapították amerikai mintára, sakktábla-szerű utcahálózattal, így Japán legfiatalabb nagyvárosa. Északi fekvése miatt kemény, havas telei vannak, ezért tökéletes helyszíne a világhírű hófesztiválnak és az 1972-es téli olimpiának. A város híres a róla elnevezett sörről és a miszóramenről is.",
      ro: "Sapporo a fost amenajat abia la sfârșitul secolului al XIX-lea, după model american, cu străzi în damă, fiind cel mai tânăr oraș mare al Japoniei. Datorită poziției nordice, are ierni reci și foarte zăpadoase, motiv pentru care a găzduit faimosul festival al zăpezii și Jocurile Olimpice de iarnă din 1972. Este renumit și pentru berea Sapporo și miso-ramen.",
      en: "Sapporo was only laid out in the late 19th century on an American-style grid, making it Japan's youngest major city. Its northern location brings cold, snowy winters, making it the ideal host for the world-famous Snow Festival and the 1972 Winter Olympics. The city is also famous for its namesake beer and miso ramen."
    },
    facts: {
      de: ["Hauptstadt von Hokkaido", "Über 1,9 Mio. Einwohner", "Schauplatz Olympia 1972", "Bekannt für Sapporo-Bier"],
      hu: ["Hokkaido fővárosa", "Több mint 1,9 millió lakos", "1972-es téli olimpia helyszíne", "A Szapporo sörről híres"],
      ro: ["Capitala Hokkaido", "Peste 1,9 milioane de locuitori", "Gazda Jocurilor Olimpice de iarnă din 1972", "Faimoasă pentru berea Sapporo"],
      en: ["Capital of Hokkaido", "Over 1.9 million residents", "Hosted the 1972 Winter Olympics", "Famous for Sapporo Beer"]
    },
    factsAdvanced: {
      de: ["Das Sapporo Schneefestival lockt jährlich über 2 Mio. Besucher an", "Miso-Ramen wurde hier in den 1950er Jahren erfunden", "Die Sapporo-Brauerei wurde 1876 gegründet", "Die Stadt liegt im einzigen subarktischen Klimagebiet Japans", "Der Odori-Park bildet das grüne Rückgrat der Innenstadt", "Sapporo ist Tor zu den Skigebieten Niseko und Furano"],
      hu: ["A szapporói hófesztivál évente több mint 2 millió látogatót vonz", "A miszóramen az 1950-es években itt született", "A Szapporo sörgyárat 1876-ban alapították", "A város Japán egyetlen szubarktikus éghajlatú területén fekszik", "Az Ódóri park a belváros zöld gerince", "Szapporo a Niszeko és Furano síterepek kapuja"],
      ro: ["Festivalul Zăpezii din Sapporo atrage peste 2 milioane de vizitatori anual", "Miso-ramen a fost inventat aici în anii 1950", "Berăria Sapporo a fost fondată în 1876", "Orașul se află în singura zonă subarctică a Japoniei", "Parcul Odori formează coloana verde a centrului", "Sapporo este poarta de acces spre stațiunile de schi Niseko și Furano"],
      en: ["The Sapporo Snow Festival draws over 2 million visitors a year", "Miso ramen was invented here in the 1950s", "Sapporo Brewery was founded in 1876", "The city lies in Japan's only subarctic climate zone", "Odori Park forms the green spine of downtown", "Sapporo is the gateway to the Niseko and Furano ski resorts"]
    },
    historyYear: 1868,
    area: 1121.26, image: "/poi-images/jp-sapporo.webp"
  },
  {
    id: "jp-fukuoka",
    type: "city",
    parent: "JP",
    coords: [130.4017, 33.5904],
    name: { de: "Fukuoka", hu: "Fukuoka", ro: "Fukuoka", en: "Fukuoka" },
    description: {
      de: "Die größte Stadt Kyushus und Tor nach Korea und China.",
      hu: "Kjúsú legnagyobb városa, Korea és Kína felé vezető kapu.",
      ro: "Cel mai mare oraș din Kyushu, poarta către Coreea și China.",
      en: "The largest city on Kyushu and a gateway to Korea and China."
    },
    descriptionAdvanced: {
      de: "Fukuoka liegt an der Nordküste Kyushus und ist seit Jahrhunderten ein Zentrum für Handel und Austausch mit Festland-Asien. Heute gilt die Stadt als eine der lebenswertesten Japans, mit milden Klima, kompakter Innenstadt und einer berühmten Yatai-Straßenständkultur. Fukuoka ist auch die Geburtsstadt des Tonkotsu-Ramens und beheimatet wichtige Tech-Startups.",
      hu: "Fukuoka Kjúsú északi partján fekszik, és évszázadok óta az ázsiai szárazfölddel folyó kereskedelem központja. Ma Japán egyik legélhetőbb városának tartják enyhe éghajlatával, kompakt belvárosával és híres jatai (utcai standok) kultúrájával. Itt született a tonkocu-ramen, és számos jelentős tech-startup székhelye.",
      ro: "Fukuoka se află pe coasta nordică a insulei Kyushu și este de secole un centru al comerțului cu Asia continentală. Astăzi este considerat unul dintre cele mai plăcute orașe ale Japoniei, cu o climă blândă, un centru compact și celebra cultură a tarabelor yatai. Este leagănul tonkotsu-ramen-ului și găzduiește importante startup-uri tech.",
      en: "Fukuoka lies on the northern coast of Kyushu and has been a centre for trade with mainland Asia for centuries. Today it is regarded as one of Japan's most liveable cities, with a mild climate, compact downtown and a famous yatai street-stall culture. Fukuoka is the birthplace of tonkotsu ramen and a hub for tech startups."
    },
    facts: {
      de: ["Größte Stadt Kyushus", "Über 1,6 Mio. Einwohner", "Geburtsort des Tonkotsu-Ramen", "Bekannt für Yatai-Stände"],
      hu: ["Kjúsú legnagyobb városa", "Több mint 1,6 millió lakos", "A tonkocu-ramen szülőhelye", "A jatai standjairól ismert"],
      ro: ["Cel mai mare oraș din Kyushu", "Peste 1,6 milioane de locuitori", "Locul de naștere al tonkotsu-ramen", "Cunoscut pentru tarabele yatai"],
      en: ["Largest city on Kyushu", "Over 1.6 million residents", "Birthplace of tonkotsu ramen", "Famous for yatai food stalls"]
    },
    factsAdvanced: {
      de: ["Fukuoka wuchs aus den Städten Hakata und Fukuoka zusammen", "Der Hafen Hakata war Ziel der Mongoleninvasionen 1274 und 1281", "Im jährlichen Hakata Gion Yamakasa rasen Männer mit tonnenschweren Wagen", "Fukuoka Tower ist mit 234 m Japans höchster Turm am Meer", "Die Stadt gilt als Innovations- und Startup-Hub Japans", "Sie ist näher an Seoul als an Tokio"],
      hu: ["Fukuoka Hakata és Fukuoka városok egyesüléséből nőtt össze", "A hakatai kikötő volt a célpontja az 1274-es és 1281-es mongol inváziónak", "Az évenkénti Hakata Gion Jamakasza ünnepen férfiak tonnás kocsikat húznak versenyezve", "A Fukuoka-torony 234 méterével Japán legmagasabb tengerparti tornya", "A város Japán egyik innovációs és startup központja", "Közelebb van Szöulhoz, mint Tokióhoz"],
      ro: ["Fukuoka s-a format prin unirea orașelor Hakata și Fukuoka", "Portul Hakata a fost ținta invaziilor mongole din 1274 și 1281", "La festivalul Hakata Gion Yamakasa, bărbați aleargă cu care de o tonă", "Turnul Fukuoka are 234 m, cel mai înalt turn de coastă din Japonia", "Este un hub de inovație și startup-uri în Japonia", "Este mai aproape de Seul decât de Tokyo"],
      en: ["Modern Fukuoka was formed by merging Hakata and Fukuoka", "Hakata port was the target of the Mongol invasions of 1274 and 1281", "The Hakata Gion Yamakasa festival features men racing one-ton floats", "Fukuoka Tower is Japan's tallest seaside tower at 234 m", "The city is one of Japan's leading startup and innovation hubs", "It is closer to Seoul than to Tokyo"]
    },
    historyYear: 1601,
    area: 343.46, image: "/poi-images/jp-fukuoka.webp"
  },
  {
    id: "jp-kobe",
    type: "city",
    parent: "JP",
    coords: [135.1955, 34.6901],
    name: { de: "Kobe", hu: "Kóbe", ro: "Kobe", en: "Kobe" },
    description: {
      de: "Hafenstadt zwischen Bergen und Meer, weltberühmt für Kobe-Rind.",
      hu: "Hegyek és tenger közé szorult kikötőváros, a kóbei marháról híres.",
      ro: "Oraș port între munți și mare, celebru pentru carnea de vită Kobe.",
      en: "A port city wedged between mountains and sea, famous for Kobe beef."
    },
    descriptionAdvanced: {
      de: "Kobe liegt eingezwängt zwischen den Rokko-Bergen und der Bucht von Osaka und gehört zu den weltoffensten Städten Japans. 1995 wurde sie durch das große Hanshin-Erdbeben schwer getroffen, ist aber heute wieder eine moderne Hafenstadt mit eleganter Architektur, einem internationalen Flair und natürlich dem berühmten, fein marmorierten Kobe-Rindfleisch.",
      hu: "Kóbe a Rokkó-hegység és az oszakai öböl közé szorulva fekszik, és Japán egyik legkozmopolitabb városa. 1995-ben súlyosan érintette a nagy Hansin földrengés, de mára újra modern kikötőváros lett elegáns építészettel, nemzetközi hangulattal és természetesen a finoman márványozott kóbei marhahússal.",
      ro: "Kobe este înghesuit între munții Rokko și golful Osaka și se numără printre cele mai cosmopolite orașe ale Japoniei. În 1995 a fost grav lovit de marele cutremur Hanshin, dar astăzi este din nou un oraș port modern, cu arhitectură elegantă, atmosferă internațională și, desigur, faimoasa carne de vită Kobe, fin marmorată.",
      en: "Kobe is squeezed between the Rokko Mountains and Osaka Bay and is one of Japan's most cosmopolitan cities. It was devastated by the 1995 Great Hanshin earthquake but has rebuilt itself into a modern port city with elegant architecture, an international flair and, of course, the famous finely marbled Kobe beef."
    },
    facts: {
      de: ["Über 1,5 Mio. Einwohner", "Berühmt für Kobe-Rindfleisch", "Schauplatz des Hanshin-Bebens 1995", "Wichtiger Containerhafen"],
      hu: ["Több mint 1,5 millió lakos", "A kóbei marhahúsról híres", "Az 1995-ös Hansin földrengés helyszíne", "Fontos konténerkikötő"],
      ro: ["Peste 1,5 milioane de locuitori", "Faimos pentru carnea de vită Kobe", "Locul cutremurului Hanshin din 1995", "Port important de containere"],
      en: ["Over 1.5 million residents", "Famous for Kobe beef", "Site of the 1995 Hanshin earthquake", "Major container port"]
    },
    factsAdvanced: {
      de: ["Das Erdbeben 1995 forderte über 6400 Menschenleben", "Kobe-Rinder dürfen nur aus Tajima-Wagyū-Linien stammen", "Die Akashi-Kaikyō-Brücke war bis 2022 die längste Hängebrücke der Welt", "Im Hafen liegt eine roteiserne, künstliche Insel namens Port Island", "Die Stadt war einer der ersten Häfen, die sich 1868 dem Westen öffneten", "Vom Berg Rokko bietet sich einer der Top-3-Ausblicke Japans"],
      hu: ["Az 1995-ös földrengés több mint 6400 ember halálát okozta", "A kóbei marha csak Tadzsima vagjú vérvonalból származhat", "Az Akasi-Kaikjó híd 2022-ig a világ leghosszabb függőhídja volt", "A kikötőben fekszik a Port Island nevű mesterséges sziget", "A város 1868-ban az elsők között nyílt meg a nyugat előtt", "A Rokkó-hegyről nyíló panoráma Japán három legszebbjének egyike"],
      ro: ["Cutremurul din 1995 a făcut peste 6.400 de victime", "Vita Kobe trebuie să provină din linia Tajima Wagyu", "Podul Akashi-Kaikyō a fost până în 2022 cel mai lung pod suspendat din lume", "În port se află insula artificială Port Island", "A fost printre primele porturi deschise Vestului în 1868", "Panorama de pe muntele Rokko este între cele mai frumoase trei din Japonia"],
      en: ["The 1995 earthquake claimed over 6,400 lives", "Kobe beef must come from Tajima Wagyu bloodlines", "Until 2022 the Akashi-Kaikyō Bridge was the world's longest suspension bridge", "The port hosts an artificial island called Port Island", "It was one of the first ports opened to the West in 1868", "Mt. Rokko offers one of Japan's three best night views"]
    },
    historyYear: 1180,
    area: 552.83, image: "/poi-images/jp-kobe.webp"
  },
  {
    id: "jp-hiroshima",
    type: "city",
    parent: "JP",
    coords: [132.4553, 34.3853],
    name: { de: "Hiroshima", hu: "Hirosima", ro: "Hiroshima", en: "Hiroshima" },
    description: {
      de: "Stadt des Friedens, geprägt vom Atombombenabwurf von 1945.",
      hu: "A béke városa, amelyet az 1945-ös atombomba-támadás határoz meg.",
      ro: "Orașul păcii, marcat de bombardamentul atomic din 1945.",
      en: "City of peace, marked by the 1945 atomic bombing."
    },
    descriptionAdvanced: {
      de: "Am 6. August 1945 warf die US-Luftwaffe die erste in einem Krieg eingesetzte Atombombe über Hiroshima ab und zerstörte die Stadt nahezu vollständig. Heute ist Hiroshima ein Symbol des Friedens und der Versöhnung. Der Friedenspark mit dem Atombombendom (UNESCO) erinnert an die Opfer, während die wieder aufgebaute Stadt modern und lebendig ist. In der Nähe liegt die berühmte schwimmende Schrein-Insel Miyajima.",
      hu: "1945. augusztus 6-án az amerikai légierő Hirosimára dobta a háborúban először bevetett atombombát, amely szinte teljesen elpusztította a várost. Hirosima ma a béke és a megbékélés szimbóluma. A békepark az Atombomba-kupolával (UNESCO) az áldozatokra emlékezik, miközben az újjáépített város modern és pezsgő. A közelben fekszik a híres lebegő szentélyű Mijadzsima sziget.",
      ro: "La 6 august 1945, aviația SUA a lansat asupra Hiroshimei prima bombă atomică folosită vreodată într-un război, distrugând aproape complet orașul. Astăzi, Hiroshima este un simbol al păcii și reconcilierii. Parcul Memorial al Păcii, cu Cupola Bombei Atomice (UNESCO), comemorează victimele, în timp ce orașul reconstruit este modern și vibrant. În apropiere se află faimoasa insulă Miyajima cu altarul plutitor.",
      en: "On 6 August 1945, the US air force dropped the first atomic bomb ever used in war on Hiroshima, almost completely destroying the city. Today, Hiroshima stands as a symbol of peace and reconciliation. The Peace Memorial Park with the Atomic Bomb Dome (UNESCO) commemorates the victims, while the rebuilt city is modern and lively. Nearby lies the famous floating shrine island of Miyajima."
    },
    facts: {
      de: ["Atombombenabwurf am 6.8.1945", "Über 1,1 Mio. Einwohner heute", "Sitz des Friedensdenkmals", "Tor zur Insel Miyajima"],
      hu: ["1945.08.06.: atombomba-támadás", "Ma több mint 1,1 millió lakos", "A békeemlékmű otthona", "Mijadzsima sziget kapuja"],
      ro: ["Bombardamentul atomic la 6.8.1945", "Peste 1,1 milioane de locuitori azi", "Găzduiește memorialul păcii", "Poarta către insula Miyajima"],
      en: ["Atomic bombing on 6 August 1945", "Over 1.1 million residents today", "Home of the Peace Memorial", "Gateway to Miyajima Island"]
    },
    factsAdvanced: {
      de: ["Schätzungen zufolge starben bis Ende 1945 rund 140.000 Menschen an den Folgen", "Der Atombombendom war eines der wenigen Gebäude, die teilweise stehen blieben", "Hiroshimas Hauptspezialität ist Okonomiyaki nach Hiroshima-Art", "Die Stadt vergibt jährlich am 6. August die Friedensglocke", "Das Schloss Hiroshima wurde nach dem Krieg als Replika wieder aufgebaut", "US-Präsident Obama besuchte 2016 als erster amtierender Präsident Hiroshima"],
      hu: ["1945 végéig kb. 140 000 ember halt meg a következmények miatt", "Az Atombomba-kupola egyike a kevés részben épségben maradt épületnek", "A város specialitása a hirosimai stílusú okonomijaki", "Augusztus 6-án minden évben megszólal a béke harang", "A hirosimai várat a háború után másolatként építették újjá", "2016-ban Obama elnök volt az első hivatalban lévő amerikai elnök, aki Hirosimába látogatott"],
      ro: ["Până la sfârșitul lui 1945, circa 140.000 de oameni au murit din cauza efectelor", "Cupola Bombei Atomice este una dintre puținele clădiri care au rămas parțial în picioare", "Specialitatea locală este okonomiyaki în stil Hiroshima", "Pe 6 august se sună anual clopotul păcii", "Castelul Hiroshima a fost reconstruit ca replică după război", "În 2016, Obama a fost primul președinte american în funcție care a vizitat Hiroshima"],
      en: ["By the end of 1945, around 140,000 people had died from the bombing's effects", "The Atomic Bomb Dome was one of the few buildings left partly standing", "The city's signature dish is Hiroshima-style okonomiyaki", "Each year on 6 August the Peace Bell is rung", "Hiroshima Castle was rebuilt as a replica after the war", "In 2016 President Obama became the first sitting US president to visit Hiroshima"]
    },
    historyYear: 1589,
    area: 906.68, image: "/poi-images/jp-hiroshima.webp"
  },
  {
    id: "jp-sendai",
    type: "city",
    parent: "JP",
    coords: [140.8694, 38.2682],
    name: { de: "Sendai", hu: "Szendai", ro: "Sendai", en: "Sendai" },
    description: {
      de: "Größte Stadt der Tohoku-Region, bekannt als 'Stadt der Bäume'.",
      hu: "A Tóhoku régió legnagyobb városa, a 'fák városaként' is ismert.",
      ro: "Cel mai mare oraș din regiunea Tohoku, cunoscut ca 'orașul copacilor'.",
      en: "The largest city of the Tohoku region, known as the 'City of Trees'."
    },
    descriptionAdvanced: {
      de: "Sendai wurde Anfang des 17. Jahrhunderts vom legendären einäugigen Daimyo Date Masamune gegründet und zeichnet sich bis heute durch breite, baumgesäumte Boulevards aus, die ihr den Spitznamen 'Stadt der Bäume' eingebracht haben. 2011 wurde die Region durch das Tohoku-Erdbeben und den Tsunami schwer getroffen; Sendai gilt seitdem als Symbol des Wiederaufbaus. Berühmt ist auch das Tanabata-Sternenfest im August.",
      hu: "Szendait a 17. század elején alapította a legendás félszemű daimjó, Date Maszamune. A városra ma is jellemzők a széles, fasorral szegélyezett sugárutak, ezért kapta a 'fák városa' becenevet. 2011-ben a régiót súlyosan érintette a Tóhoku földrengés és cunami; Szendai azóta az újjáépítés szimbóluma. Híres még az augusztusi Tanabata csillagünnepe is.",
      ro: "Sendai a fost fondat la începutul secolului al XVII-lea de legendarul daimyo cu un singur ochi, Date Masamune. Orașul se distinge și astăzi prin bulevardele largi mărginite de copaci, care i-au adus porecla 'orașul copacilor'. În 2011 regiunea a fost lovită puternic de cutremurul Tohoku și de tsunami; de atunci, Sendai este un simbol al reconstrucției. Faimos este și festivalul stelelor Tanabata din august.",
      en: "Sendai was founded in the early 17th century by the legendary one-eyed daimyo Date Masamune. The city is still known for its wide tree-lined boulevards, earning it the nickname 'City of Trees'. In 2011 the region was hit hard by the Tohoku earthquake and tsunami; Sendai has since become a symbol of recovery. It is also famous for its Tanabata star festival in August."
    },
    facts: {
      de: ["Über 1 Mio. Einwohner", "Gegründet 1600 von Date Masamune", "Bekannt für Tanabata-Festival", "Tor zur Tohoku-Region"],
      hu: ["Több mint 1 millió lakos", "1600-ban alapította Date Maszamune", "A Tanabata fesztiválról ismert", "A Tóhoku régió kapuja"],
      ro: ["Peste 1 milion de locuitori", "Fondat în 1600 de Date Masamune", "Cunoscut pentru festivalul Tanabata", "Poarta către regiunea Tohoku"],
      en: ["Over 1 million residents", "Founded in 1600 by Date Masamune", "Famous for the Tanabata festival", "Gateway to the Tohoku region"]
    },
    factsAdvanced: {
      de: ["Date Masamune wurde wegen seiner Augenbinde 'Einäugiger Drache' genannt", "Das Tohoku-Erdbeben 2011 hatte eine Stärke von 9,0", "Die Spezialität der Stadt ist gegrillte Rinderzunge (Gyutan)", "Der nahegelegene Matsushima zählt zu den drei schönsten Aussichten Japans", "Sendai ist Sitz der wichtigen Tohoku-Universität", "Das Tanabata-Festival besteht aus Tausenden bunter Papierornamente"],
      hu: ["Date Maszamunét a szemkötője miatt 'félszemű sárkánynak' hívták", "A 2011-es Tóhoku földrengés 9,0-es erősségű volt", "A város specialitása a grillezett marhanyelv (gjutan)", "A közeli Macusima Japán három legszebb tájképének egyike", "Itt működik a jelentős Tóhoku Egyetem", "A Tanabata fesztiválon több ezer színes papírdísz lóg az utcákon"],
      ro: ["Date Masamune era poreclit 'dragonul cu un singur ochi'", "Cutremurul Tohoku din 2011 a avut magnitudinea 9,0", "Specialitatea orașului este limba de vită la grătar (gyutan)", "Apropiatul Matsushima este una dintre cele trei priveliști celebre ale Japoniei", "Aici se află prestigioasa Universitate Tohoku", "Festivalul Tanabata umple străzile cu mii de ornamente colorate din hârtie"],
      en: ["Date Masamune was nicknamed the 'One-Eyed Dragon' for his eyepatch", "The 2011 Tohoku earthquake reached magnitude 9.0", "The city's signature dish is grilled beef tongue (gyutan)", "Nearby Matsushima is one of Japan's three classic scenic views", "Sendai is home to the prestigious Tohoku University", "The Tanabata festival fills the streets with thousands of colourful paper streamers"]
    },
    historyYear: 1600,
    area: 786.35, image: "/poi-images/jp-sendai.webp"
  }
];

export const japanAllPoi: POI[] = [
  ...japanCountry,
  ...japanCities,
  ...poiExtraJapanCitiesV2,
  ...poiExtraJapanEconomicV2,
  ...poiExtraJapanHistoryV2,
  ...poiExtraJapanLandmarksV2,
  ...poiExtraJapanLifeV2,
  ...poiExtraJapanNatureV2,
  ...poiExtraJapanReliefV2
];
