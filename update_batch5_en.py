import json
import re

data = {
  "gemenc-arter-b2": {
    "desc": "The Gemenc Floodplain is an incredibly vast, fiercely untamed wilderness located in southern Hungary along the lower stretches of the Danube River. It holds the prestigious title of being the largest continuous floodplain forest in Central Europe, representing a highly dynamic, ever-changing ecosystem dictated entirely by the powerful floods of the river. The incredibly dense, jungle-like vegetation of ancient willows, poplars, and deep backwaters creates a spectacular, highly protected sanctuary for wildlife. It is globally famous among hunters and conservationists for hosting the most magnificent, genetically superior population of red deer in the world, alongside wild boars, black storks, and white-tailed eagles. Gemenc is an awe-inspiring, raw immersion into one of Europe's last great river jungles.",
    "facts": [
      "The red deer stags of Gemenc regularly produce world-record-breaking antlers, making the forest internationally legendary in hunting circles.",
      "The forest is best explored via the Gemenc State Forest Railway, a highly nostalgic narrow-gauge train that winds for 30 kilometers through the dense wilderness.",
      "During massive Danube floods, up to 90% of the entire Gemenc Forest can be completely submerged under meters of water.",
      "The forest is a critical, highly protected nesting ground for the extremely rare and highly elusive black stork."
    ]
  },
  "debreceni-allatkert": {
    "desc": "The Debrecen Zoo and Amusement Park is a highly beloved, deeply nostalgic family destination elegantly situated within the lush, ancient oak trees of the city's Great Forest (Nagyerdő). Opening in 1958, it holds the prestigious title of being Hungary's very first provincial zoo established outside the capital. The facility uniquely combines an extensive, highly diverse animal park—housing over 900 animals from 170 species—with a classic, incredibly charming vintage amusement park. Visitors can observe majestic giraffes and playful penguins before riding the historic, beautifully restored 1960s dodgems or the iconic Ferris wheel. It offers a perfectly balanced, profoundly wholesome day of wildlife conservation and classic entertainment in the heart of eastern Hungary.",
    "facts": [
      "The zoo is uniquely integrated directly into the Great Forest of Debrecen, which is the very first officially protected natural area in Hungary.",
      "The connected amusement park features a highly nostalgic, fully operational 1960s miniature railway that circles the animal enclosures.",
      "The zoo boasts a highly successful breeding program for the incredibly rare, critically endangered North Chinese leopard.",
      "The zoo's iconic 'Penguin Coast' habitat features a massive, underwater viewing tunnel allowing visitors to watch the birds 'fly' through the water."
    ]
  },
  "nyiregyhazi-allatkert": {
    "desc": "The Nyíregyháza Zoo (Sóstó Zoo) is an absolute titan of European wildlife conservation and consistently ranks as one of the best, most immersive zoological parks on the continent. Located deep within a magnificent 30-hectare oak forest in the Sóstó resort area, it completely abandons traditional cages in favor of massive, highly naturalistic habitats that seamlessly separate animals and visitors with dry moats and water barriers. Housing an astonishing 5,000 animals from 500 species, the zoo takes visitors on a breathtaking journey across continents. Its absolute crown jewels are the spectacular Green Pyramid oceanarium and the massive pachyderm house. It is an unforgettable, world-class safari experience tucked away in northeastern Hungary.",
    "facts": [
      "The zoo's spectacular 'Green Pyramid' complex houses a massive, 500,000-liter shark tunnel and an incredibly humid, multi-level Indonesian rainforest.",
      "Sóstó Zoo was recognized as the absolute 'Best Zoo in Europe' in its size category multiple times by the independent Anthony Sheridan Zoo Foundation.",
      "It is the only zoo in Hungary to exhibit the highly endangered, massive Indian rhinoceros and African elephants together.",
      "The zoo features a highly unique, elevated bamboo suspension bridge allowing visitors to walk directly above the enclosures of tigers and bears."
    ]
  },
  "tropicarium-budapest": {
    "desc": "The Tropicarium Budapest is a massively popular, highly immersive aquatic and reptilian wonderland located on the southern edge of the Hungarian capital. Widely affectionate as the 'shark zoo,' it is the largest marine aquarium in Central Europe, specifically designed to transport visitors from the temperate Hungarian climate directly into the steamy depths of a tropical rainforest and the dark abyss of the ocean. The absolute centerpiece of the facility is a breathtaking, 11-meter-long acrylic observation tunnel that cuts directly through a colossal, 1.4-million-liter shark tank, where massive sand tiger sharks and graceful rays glide inches above visitors' heads. It is an incredibly thrilling, highly educational plunge into global aquatic biodiversity.",
    "facts": [
      "The Tropicarium's massive shark tank is the largest in Central Europe, holding 1.4 million liters of specially formulated saltwater.",
      "The facility features a highly immersive, artificial rainforest room where 'tropical thunderstorms' with rain and lightning are simulated every 15 minutes.",
      "Visitors can actively participate in highly controlled, safe stingray petting sessions in a specially designed shallow pool.",
      "The aquarium houses incredibly rare, critically endangered freshwater species from the Amazon Basin, including massive Arapaima fish and piranhas."
    ]
  },
  "miskolctapolca-barlangfurdo": {
    "desc": "The Miskolctapolca Cave Bath is an absolute geological miracle and one of the most uniquely spectacular thermal bathing experiences in all of Europe. Located just outside the industrial city of Miskolc, this highly luxurious spa is built directly into a massive, naturally formed limestone cave system that has been carved over millennia by the very thermal waters that now fill its pools. Visitors can swim freely through a deeply mysterious, beautifully illuminated labyrinth of subterranean rock tunnels, discovering hidden massage jets, echoing echo chambers, and secret starry-vaulted grottos. Surrounded by a massive, ancient beech forest and a serene boating lake, the Cave Bath is the ultimate, unforgettable fusion of natural spelunking and elite wellness.",
    "facts": [
      "The thermal water in the cave naturally surfaces at a highly comfortable 30°C, meaning visitors can swim in the underground tunnels indefinitely without overheating.",
      "Because the water has a relatively low dissolved mineral content compared to other Hungarian spas, it is exceptionally gentle on the skin and has no time limit for bathing.",
      "The breathtaking 'Star Hall' is a massive, completely dark cavern where a simulated starry sky is projected onto the natural limestone ceiling.",
      "The cave system was highly revered for its healing properties as early as the 16th century, though the modern, expansive bath complex was only constructed in 1959."
    ]
  },
  "mohacsi-busojaras-poi": {
    "desc": "The town of Mohács in southern Hungary is the epicenter of the Busójárás, arguably the most spectacular, terrifying, and deeply authentic winter-expulsion festival in all of Europe. Every February, this sleepy riverside town explodes into absolute chaos as hundreds of locals, known as 'Busós', don incredibly frightening, hand-carved wooden masks with massive horns and drape themselves in heavy sheepskin cloaks. Accompanied by the deafening roar of wooden ratchets, cowbells, and folk music, the Busós march through the town to literally scare away the dark winter spirits. The six-day festival culminates in a massive, fiery climax where a symbolic winter coffin is burned on a colossal bonfire in the main square. It is a wildly primal, unforgettable cultural phenomenon.",
    "facts": [
      "The Busójárás festival is so culturally significant that it was officially inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity in 2009.",
      "The traditional masks are carved exclusively by highly respected local master craftsmen, usually from soft willow wood, and painted with animal blood or natural dyes.",
      "According to local legend, the terrifying costumes were originally used by the Croatian (Šokci) minority in the 16th century to scare away occupying Ottoman soldiers.",
      "The festival traditionally involves the Busós arriving dramatically by crossing the freezing, fast-flowing Danube River in dozens of small wooden rowboats."
    ]
  },
  "zsolnay-negyed": {
    "desc": "The Zsolnay Cultural Quarter in Pécs is an absolute triumph of urban revitalization and arguably the most stunning, artistically dense industrial heritage site in Central Europe. Built directly into the massively sprawling, historically highly secretive grounds of the world-famous Zsolnay Porcelain Manufactory, this 5-hectare complex is a dazzling wonderland of colorful ceramics. Every roof, statue, and pathway is adorned with the factory's signature, frost-resistant eosin glaze, which shifts brilliantly in the sunlight from deep greens to metallic golds. The quarter now houses prestigious art galleries, the university's arts faculty, a planetarium, and an incredibly moving museum showcasing the priceless, golden-age masterpieces of the Zsolnay family. It is a breathtaking, highly inspirational fusion of 19th-century industrial might and cutting-edge culture.",
    "facts": [
      "The highly secretive, metallic 'eosin' glaze was invented by Vilmos Zsolnay in 1893 and its exact chemical formula remains a closely guarded industrial secret today.",
      "The Quarter features the spectacular Gyugyi Collection, a massive, private assembly of over 600 flawless, golden-age Zsolnay pieces returned to Hungary from America.",
      "The incredibly ornate, heavily tiled Zsolnay Mausoleum, where the family founders are buried, sits on a nearby hill overlooking the cultural quarter.",
      "The revitalization project was the absolute centerpiece of Pécs's highly successful reign as the European Capital of Culture in 2010."
    ]
  },
  "szegedi-dom": {
    "desc": "The Votive Church of Szeged (Szeged Cathedral) is a colossal, awe-inspiring masterpiece of Neo-Romanesque brick architecture that utterly dominates the skyline of the 'City of Sunshine'. The cathedral's existence is deeply tied to the tragic 1879 Great Flood that nearly obliterated Szeged; the survivors vowed to build a monumental church if the city could be rebuilt. The resulting cathedral, finally consecrated in 1930, is truly staggering in scale, featuring twin towers reaching 81 meters and a massive, exquisitely painted interior. It faces onto the expansive, arcade-lined Dóm Square, which is exactly the size of St. Mark's Square in Venice. The cathedral is an incredible symbol of Szeged's resilience, architectural ambition, and deep spiritual faith.",
    "facts": [
      "The cathedral boasts the absolute third-largest church organ in all of Europe, featuring an incredible 9,040 pipes that produce a massively powerful sound.",
      "The stunning, massive mosaic of the Virgin Mary above the main altar famously depicts her wearing traditional, embroidered Hungarian folk slippers (Szegedi papucs).",
      "The massive Dóm Square hosts the incredibly famous Szeged Open-Air Festival every summer, transforming the area in front of the cathedral into a 4,000-seat theater.",
      "The cathedral's massive 'Hero's Bell' (Hősök harangja) weighs over 8.6 tons and is dedicated to the fallen soldiers of World War I."
    ]
  },
  "pannonhalmi-leveltar": {
    "desc": "The Pannonhalma Abbey Archives, hidden deep within the impenetrable walls of the Millenary Benedictine Archabbey, is arguably the most fiercely guarded and historically priceless repository of documents in the entire Hungarian nation. While the Abbey's massive, highly ornate 19th-century library is world-famous, the true historical treasure lies in these restricted archives. They hold the absolute foundational documents of the Hungarian state and language, miraculously surviving centuries of wars, fires, and Ottoman occupations. The archives are the physical embodiment of the Benedictine monks' millennium-long dedication to preserving intellect and law in Central Europe. While generally closed to the public, the sheer weight of the history stored within these vaults commands profound national reverence.",
    "facts": [
      "The archives possess the absolute oldest surviving original document in Hungary: the foundation charter of the Pannonhalma Abbey, issued by King Saint Stephen in 1001.",
      "It famously houses the 1055 foundation charter of the Tihany Abbey, which contains the very first written, decipherable words of the Hungarian language.",
      "The archives contain over 30,000 immensely valuable medieval charters, royal decrees, and papal bulls documenting the entire legal history of the Hungarian Kingdom.",
      "During World War II, the archives were utilized by the International Red Cross as an incredibly secure, neutral safe haven to hide Jewish refugees and persecuted intellectuals."
    ]
  },
  "magyar-nemzeti-galeria-poi": {
    "desc": "The Hungarian National Gallery is an absolutely monumental, world-class art institution housed directly within the opulent, sprawling wings of the Buda Castle Palace. As the absolute premier repository of Hungarian fine art, the gallery offers an incredibly comprehensive, deeply emotional visual journey through the nation's history, spanning from highly ornate medieval wooden altarpieces to cutting-edge contemporary installations. Visitors are utterly captivated by the massive, sweeping historical canvases of 19th-century Romanticism, particularly the dramatic works of Viktor Madarász and Bertalan Székely, which vividly depict Hungary's tragic, heroic past. The gallery perfectly marries its breathtaking, imperial architectural setting with the absolute pinnacle of the Hungarian creative genius, offering unparalleled artistic depth alongside sweeping views of the Danube.",
    "facts": [
      "The gallery houses the absolute largest public collection of works by Mihály Munkácsy, arguably the most famous and internationally successful Hungarian painter of the 19th century.",
      "The museum's spectacular, multi-level 'Dome Hall' allows visitors to climb directly up into the castle's massive central cupola for unparalleled views of Budapest.",
      "The gallery's massive collection of late-Gothic winged altarpieces from Transylvania and Upper Hungary is considered one of the finest and most intact in all of Europe.",
      "The institution was established in 1957 to specifically separate purely Hungarian artworks from the international collections held at the Museum of Fine Arts."
    ]
  },
  "corvin-negyed-poi": {
    "desc": "The Corvin Quarter is a spectacularly vibrant, highly dynamic neighborhood in Budapest that represents the absolute largest, most ambitious urban renewal project in Central Europe. Once a highly degraded, historic district deeply scarred by its fierce, bloody resistance during the 1956 Hungarian Revolution, it has been brilliantly transformed into a cutting-edge, ultra-modern promenade. Today, the quarter is a masterclass in urban planning, featuring sleek glass residential buildings, massive high-tech office spaces, and a bustling pedestrian walkway lined with trendy cafes and modern art installations. Yet, it profoundly respects its roots, anchored by the iconic Corvin Cinema and numerous poignant memorials to the teenage freedom fighters of 1956. It perfectly encapsulates Budapest's relentless drive toward the future while honoring its heroic past.",
    "facts": [
      "During the 1956 Revolution, the Corvin Cinema and its surrounding alleys formed the absolute fiercest, most successful pocket of armed civilian resistance against Soviet tanks.",
      "The massive urban renewal project, known as the Corvin Promenade, won the highly prestigious 'Urban Land Institute Global Award for Excellence' in 2014.",
      "The iconic, perfectly preserved Corvin Cinema is one of the oldest, largest, and most beautifully designed traditional movie palaces still operating in Budapest.",
      "The modern promenade was specifically designed to act as a crucial 'wind channel,' drawing fresh air from the Danube deep into the densely built 8th district."
    ]
  },
  "hatvan": {
    "desc": "Hatvan is a deeply historic, highly strategic city situated on the winding Zagyva River in northern Hungary, traditionally serving as the vital 'gateway' connecting the Great Plain to the Mátra Mountains. The city is utterly dominated by the spectacular Grassalkovich Castle, a massive, brilliantly restored U-shaped Baroque palace that serves as its cultural epicenter. Once the lavish center of a massive aristocratic estate, the castle now uniquely houses the Széchenyi Zsigmond Hunting Museum, offering an incredibly immersive, interactive look into the rich, aristocratic hunting traditions of the Carpathian Basin. Hatvan effortlessly combines grand 18th-century noble architecture with a bustling, modern industrial economy, serving as a highly welcoming, deeply cultural stopover on the way to the high mountains.",
    "facts": [
      "The name 'Hatvan' translates exactly to 'Sixty' in Hungarian, supposedly referencing its precise distance in kilometers from Budapest, though linguistic historians debate this.",
      "The Grassalkovich Castle's hunting museum is considered the absolute finest and most interactive of its kind in Hungary, featuring massive dioramas and laser shooting ranges.",
      "The city was the site of the incredibly fierce, highly strategic Battle of Hatvan during the 1849 Hungarian Spring Campaign against the Austrian Empire.",
      "The castle features a sprawling, perfectly restored French formal garden, complete with intricate hedge mazes and a massive central fountain."
    ]
  },
  "tapolca": {
    "desc": "Tapolca is an incredibly unique, geologically fascinating city nestled securely in the stunning, volcano-studded Tapolca Basin on the northern edge of Lake Balaton. While the city boasts a deeply charming, Mediterranean-like Mill Pond (Malom-tó) surrounded by ancient watermills and terraced cafes, its absolute global fame lies entirely underground. Tapolca sits directly above a massive, spectacularly beautiful subterranean karst cave system filled with crystal-clear, deep blue karst water. Visitors can actually descend into the Tapolca Lake Cave and row small metal boats through the echoing, beautifully illuminated limestone tunnels, creating an unforgettable, deeply romantic experience. Tapolca perfectly marries highly unique, accessible speleology with profound above-ground, Balaton-uplands charm.",
    "facts": [
      "The Tapolca Lake Cave was discovered purely by accident in 1903 during a routine well-digging operation right in the middle of a residential street.",
      "The water in the cave maintains a constant temperature of exactly 18°C, while the cave air is highly recommended for treating severe respiratory conditions like asthma.",
      "The breathtaking Mill Pond in the city center is directly fed by the same warm karst springs that flow out from the cave system beneath the city.",
      "The city is surrounded by spectacular 'witness mountains' like Szent György-hegy, which are the highly eroded basalt cores of ancient, extinct volcanoes."
    ]
  },
  "kazincbarcika": {
    "desc": "Kazincbarcika is an immensely fascinating, highly energetic city in northeastern Hungary that has brilliantly reinvented itself from a gritty, smog-filled industrial hub into the vibrant 'City of Colors.' Built rapidly in the 1950s specifically to house workers for the massive Borsodchem chemical plant, the city was originally characterized by endless, grey Socialist Realist residential blocks. However, in a spectacularly successful, internationally recognized urban art initiative known as 'KolorCity,' dozens of these massive, drab buildings have been painted with colossal, vibrant, incredibly creative murals by renowned street artists. Today, Kazincbarcika is an absolute open-air gallery of modern art, successfully blending its unavoidable heavy industrial roots with an incredibly youthful, optimistic, and highly photogenic civic identity.",
    "facts": [
      "The 'KolorCity' project has resulted in over 40 massive, multi-story murals painted across the city's residential blocks, completely transforming the urban landscape.",
      "Kazincbarcika is home to the BorsodChem chemical plant, which remains one of the absolute largest and most crucial chemical manufacturing facilities in Central Europe.",
      "The city boasts an incredibly massive, highly active sports culture, particularly dominating in national volleyball and weightlifting competitions.",
      "Despite its heavy industrial nature, the city is incredibly green, featuring numerous sprawling parks, an artificial boating lake, and immediate access to the Bükk mountains."
    ]
  },
  "ozd": {
    "desc": "Ózd is a profoundly evocative, dramatically situated city in the rugged, forested valleys of extreme northern Hungary, serving as the ultimate, deeply poignant monument to the rise and fall of Hungarian heavy industry. For over a century, Ózd was a massive, fiery powerhouse of iron and steel production, a city where the sky glowed red at night and the economy boomed. Following the collapse of communism, the colossal factories were largely abandoned, leaving behind a staggering, post-apocalyptic industrial landscape. Today, Ózd is fiercely fighting to preserve this unique heritage, transforming sections of the massive, rusted steelworks into the highly innovative National Cultural History Park (Skanzen). It is a deeply sobering, visually intense destination for lovers of raw, industrial history.",
    "facts": [
      "At its absolute peak in the 1970s, the Ózd Metallurgical Works employed over 14,000 workers, entirely defining the life and economy of the massive valley.",
      "The city's spectacular 'Factory History Memorial Park' features an incredibly immersive, interactive exhibition built directly inside the colossal, abandoned factory blowers.",
      "The surrounding forested hills are heavily dotted with historic, highly nostalgic former mining colonies and narrow-gauge railway tracks now reclaimed by nature.",
      "Ózd is the hometown of the massively popular Hungarian rapper and musician 'Majka', whose songs frequently highlight the tough, resilient culture of the industrial city."
    ]
  },
  "szigliget": {
    "desc": "Szigliget is an incredibly enchanting, deeply romantic village that commands arguably the most spectacular, picturesque location on the entire northern shore of Lake Balaton. Often affectionately called the 'Pearl of Balaton', the village gracefully drapes across multiple volcanic hills, surrounded by dense reed beds and highly prestigious vineyards. The absolute crown jewel of the settlement is the majestic Szigliget Castle, a massive, heavily fortified medieval ruin that crowns a steep volcanic cone directly above the village. Known as the 'Castle of the Balaton,' it was one of the very few Hungarian fortresses that never fell to the Ottoman Empire. Szigliget offers an unparalleled, deeply tranquil blend of sweeping lake panoramas, ancient volcanic viticulture, and highly evocative medieval history.",
    "facts": [
      "Szigliget Castle was uniquely protected not only by its steep volcanic hill but by the fact that it was historically a complete island, surrounded entirely by the waters of Lake Balaton.",
      "The village is famous for the Esterházy Castle and its massive, highly protected 19th-century English arboretum, featuring incredibly rare, massive pine and oak trees.",
      "Szigliget has a deeply rooted, highly prestigious literary tradition, serving as a heavily favored, tranquil retreat for Hungary's greatest 20th-century writers and poets.",
      "The ruins of the highly atmospheric, 13th-century Avasi church (often called the 'Stump Tower') sit completely abandoned in a quiet meadow just outside the village."
    ]
  },
  "herend": {
    "desc": "Herend is a small, impeccably neat town in the Bakony hills of western Hungary that holds an absolute, globally revered status in the world of extreme luxury and elite craftsmanship. The town is entirely synonymous with the Herend Porcelain Manufactory, founded in 1826, which is officially the largest and most prestigious porcelain manufactory in Europe. Herend porcelain is an absolute masterpiece of Hungarian applied arts, entirely hand-painted by master artisans and historically favored by Queen Victoria, the Rothschilds, and modern royalty worldwide. The town features the spectacular Porcelanium visitor center, where guests can closely observe the incredibly intricate, multi-stage process of molding, painting, and firing these delicate, highly valuable works of art. Herend is a deeply elegant, globally significant monument to flawless Hungarian craftsmanship.",
    "facts": [
      "The incredibly famous 'Viktória' pattern, featuring vibrant butterflies and peonies, was named after Queen Victoria, who famously ordered a massive set at the 1851 Great Exhibition in London.",
      "Every single piece of Herend porcelain is still painstakingly shaped, crafted, and painted entirely by hand, strictly refusing any mass-production machinery.",
      "The manufactory operates a highly exclusive, intensely rigorous internal school where master painters train for over a decade to perfect their incredibly delicate brushwork.",
      "The Herend Porcelain Museum, located right next to the factory, houses the absolute largest, most valuable collection of historic Herend masterpieces in the world."
    ]
  },
  "mezokovesd": {
    "desc": "Mezőkövesd is a highly vibrant, deeply traditional city located at the meeting point of the Great Plain and the Bükk Mountains, serving as the proud, undisputed capital of the famous 'Matyó' culture. The city's identity is completely defined by Matyó embroidery, an incredibly colorful, densely packed, and highly intricate style of floral folk art that is officially recognized on the UNESCO Intangible Cultural Heritage list. The heart of this tradition is perfectly preserved in the 'Hadas' district, a deeply charming neighborhood of original, 19th-century thatched-roof peasant houses where highly skilled artisans still practice their crafts daily. Beyond its exploding, colorful folklore, Mezőkövesd boasts the highly popular Zsóry Thermal Bath, making it a spectacular destination for both deep cultural immersion and intense geothermal relaxation.",
    "facts": [
      "Matyó embroidery is famous for the 'Matyó rose', a highly stylized, brilliantly red peony motif that dominates almost all of their intricate textiles.",
      "The traditional Matyó folk costume is arguably the most complex, heavily embroidered, and visually stunning peasant dress in all of Hungary.",
      "The Zsóry Thermal Bath utilizes highly potent, sulfur-rich water that was discovered in 1939 during an unsuccessful drilling operation for oil on the estate of Lajos Zsóry.",
      "The Matyó Museum in the city center houses an incredibly extensive, flawlessly preserved collection of historical, gold-threaded Matyó textiles and wedding garments."
    ]
  },
  "hajos": {
    "desc": "Hajós is an incredibly charming, highly unique town located in the deep south of the Great Hungarian Plain, absolutely world-renowned for possessing one of the most spectacular, massive cellar villages in Europe. Located just a few kilometers outside the main town, the Hajós Cellar Village (Pincefalu) consists of an astonishing 1,200 perfectly uniform, whitewashed press houses lined up tightly along 24 winding, deeply atmospheric streets. Built primarily by Swabian (ethnic German) settlers in the 18th and 19th centuries, the cellars are carved deeply into the loess hills, providing the perfect, naturally cooled environment for aging the region's robust red wines. Hajós is an absolute, unparalleled pilgrimage site for wine lovers seeking a deeply authentic, incredibly picturesque, and highly hospitable Hungarian viticulture experience.",
    "facts": [
      "The Hajós Cellar Village is not an abandoned museum, but a highly active, living community of winemakers where visitors are heavily encouraged to knock on doors for spontaneous tastings.",
      "The town features the stunning, beautifully restored Baroque Archbishop's Castle, built in 1739 as a lavish summer residence for the Archbishop of Kalocsa.",
      "The local Swabian population still heavily preserves its distinct German dialect, vibrant traditional clothing, and unique, highly hearty culinary traditions.",
      "The deep loess soil of the cellar village is so soft yet structurally stable that some cellars extend up to 50 meters deep directly into the hillsides."
    ]
  },
  "szentgotthard": {
    "desc": "Szentgotthárd is a deeply historic, highly dynamic city located in the absolute extreme western corner of Hungary, serving as the country's westernmost settlement directly on the borders of Austria and Slovenia. Situated on the banks of the Rába River, the city has historically functioned as a highly critical, heavily contested gateway between the Hungarian plains and the Alps. Its most famous historical moment was the massive, incredibly bloody Battle of Saint Gotthard in 1664, where a united Christian army miraculously halted a massive Ottoman invasion force. Today, the city is a highly prosperous, deeply multicultural hub, boasting a stunning Baroque Cistercian abbey, a highly modern thermal spa, and serving as the vibrant cultural center for Hungary's Slovene minority. It flawlessly bridges deep European history with serene, alpine-borderland charm.",
    "facts": [
      "The 1664 Battle of Saint Gotthard was one of the very few major, decisive victories for the Christian forces during the prolonged Ottoman wars in Hungary.",
      "The city is heavily dominated by the massive, highly ornate Baroque Church of the Assumption, built by the Cistercian order in the 18th century.",
      "Szentgotthárd is an absolute powerhouse of modern industry, hosting a massive, highly advanced automotive engine manufacturing plant.",
      "The local St. Gotthard Spa & Wellness center is uniquely designed with a massive, glass-domed Mediterranean atmosphere, heavily drawing cross-border tourists from Austria."
    ]
  },
  "lenti": {
    "desc": "Lenti is a remarkably peaceful, highly rejuvenating town nestled deeply in the lush, forested hills of the Zala region in extreme southwestern Hungary, near the Slovenian and Croatian borders. The town's absolute global fame rests entirely on the Lenti Thermal Bath and the highly unique, deeply mysterious St. George Energy Park located directly on its grounds. The thermal water, discovered in the 1970s, is a highly potent, 40,000-year-old medicinal water excellent for treating severe locomotor diseases. However, visitors specifically flock here to walk along the invisible 'St. George earth radiation lines' that supposedly intersect in the park, which alternative healers claim deeply restores the body's physical and mental balance. Lenti is an absolute sanctuary of deep relaxation, perfectly blending proven geothermal healing with highly intriguing natural mysticism.",
    "facts": [
      "The medicinal water of Lenti surfaces at a highly comfortable 39°C and is officially classified as one of the most effective sodium-hydrogen-carbonate waters in Europe.",
      "The St. George Energy Park features specific, stone-paved meditation points where the supposed 'healing earth radiation' is believed to be the absolute strongest.",
      "The town is the starting point for the highly nostalgic Csömödér State Forest Railway, the longest narrow-gauge railway network in Hungary, winding deeply into the Zala forests.",
      "During the Cold War, Lenti was a highly militarized, deeply secretive border zone, a history now fascinatingly explored in a local bunker museum."
    ]
  },
  "karcag": {
    "desc": "Karcag is a proudly traditional, deeply fascinating city situated in the vast, sun-drenched plains of eastern Hungary, universally recognized as the absolute spiritual and cultural capital of 'Greater Cumania' (Nagykunság). The city fiercely and passionately preserves the unique heritage of the Cumans (Kunok), an eastern nomadic warrior people who settled in Hungary in the 13th century. This fiercely independent, deeply equestrian history is highly visible in the city's architecture, its expansive, highly successful agricultural lifestyle, and its massive, highly celebrated annual mutton stew (Birkapörkölt) festival. Karcag features elegant, wide civic squares, the highly impressive Györffy István Nagykun Museum, and the deeply relaxing Ágota-puszta nature reserve. It is a profound, highly authentic immersion into the most unique ethnic subculture of the Great Hungarian Plain.",
    "facts": [
      "The Karcag Mutton Stew, traditionally cooked in massive cast-iron cauldrons and uniquely including the sheep's scorched head and hooves, is officially recognized as a Hungarikum.",
      "The Györffy István Nagykun Museum holds the absolute largest and most comprehensive collection of traditional Cuman pastoral artifacts, weaponry, and highly distinctive pottery.",
      "The city's spectacular, historicist City Hall is beautifully adorned with intricate Zsolnay ceramics and fiercely proud statues of Cuman warriors.",
      "Karcag is deeply famous for its highly unique, massive stone windmill, the last remaining intact, fully operational windmill in the entire Great Plain region."
    ]
  },
  "jaszapati": {
    "desc": "Jászapáti is a deeply charming, historically rich small town located in the heart of the Jászság region in central Hungary. The town is fiercely proud of its profound connection to the Jász (Iazyges) people, a historic nomadic group whose distinct, independent culture still heavily influences the town's traditions and local pride. Jászapáti is visually anchored by its spectacular, monumental Roman Catholic Church, a stunning architectural masterpiece heavily fortified with medieval defensive walls and featuring a highly ornate, sprawling interior painted by the legendary Pál Vágó. Beyond its rich ethnic history, the town has become a highly beloved, peaceful retreat due to its excellent, newly renovated Tölgyes Thermal Bath. It is an idyllic, highly welcoming destination offering deep rural heritage and incredibly relaxing geothermal waters.",
    "facts": [
      "The massive Roman Catholic Church of Jászapáti is highly unique in Hungary for completely retaining its thick, medieval brick defensive walls equipped with arrow slits.",
      "The church's breathtaking interior frescoes were masterfully painted in the early 20th century by Pál Vágó, a highly celebrated Hungarian historical painter who was born in the town.",
      "The Tölgyes Thermal Bath utilizes highly effective, 45°C medicinal water that is highly recommended for severe joint and knee arthritis.",
      "The town features a beautiful, highly authentic local history museum housed in a flawlessly preserved, 19th-century traditional Jász peasant house."
    ]
  },
  "tiszaujvaros": {
    "desc": "Tiszaújváros is a highly fascinating, aggressively modern city situated on the banks of the Tisza River in northeastern Hungary, standing as one of the country's most successful examples of 20th-century planned industrial urbanization. Originally built entirely from scratch in the 1950s under the name 'Leninváros' to serve a massive, newly constructed chemical and oil refinery complex, the city has brilliantly evolved beyond its purely industrial roots. Today, it is deeply celebrated nationwide as an absolute powerhouse of sports and wellness. It features massive, impeccably maintained green parks, a highly popular, sprawling thermal spa complex, and world-class athletic facilities. Tiszaújváros perfectly balances its massive, ongoing industrial economic might with an incredibly high, deeply active quality of life for its residents.",
    "facts": [
      "Tiszaújváros is internationally famous for hosting a highly prestigious, annual ITU Triathlon World Cup event, drawing top-tier global athletes to the city streets.",
      "The city was officially named Leninváros (Lenin City) from 1970 until the fall of communism in 1990, when it adopted its current, river-based name.",
      "The local MOL Petrochemicals plant is one of the absolute largest and most critically important polymer manufacturing facilities in Central Europe.",
      "The Tiszaújváros Thermal Bath utilizes highly potent, 65°C iodine- and bromine-rich water that was discovered completely by accident during industrial expansion."
    ]
  },
  "komlo": {
    "desc": "Komló is a dramatically situated, highly evocative city deeply nestled within the steep, heavily forested valleys of the northern Mecsek Mountains. Its entire modern existence, layout, and explosive 20th-century growth were completely and utterly dictated by the highly intense, deeply dangerous extraction of high-quality hard coal. The city was a massive, fiery heart of Hungarian heavy industry, a legacy that heavily characterizes its deeply fascinating, terraced Socialist Realist architecture. Following the complete closure of the mines in the year 2000, Komló has faced a massive economic transition, aggressively pivoting toward utilizing its absolutely breathtaking alpine surroundings. Surrounded by deep karst ravines, hidden lakes, and highly challenging hiking trails, Komló is a deeply poignant, intensely beautiful monument to the grueling history of Hungarian coal mining.",
    "facts": [
      "At its absolute industrial peak in the 1970s and 80s, Komló was the second-largest coal mining center in Hungary, employing thousands of miners in highly dangerous, deep-shaft conditions.",
      "The local József Attila City Library features a highly emotional, deeply comprehensive museum exhibition entirely dedicated to the harsh realities and history of local coal mining.",
      "The city is surrounded by spectacular, deeply carved natural wonders, including the heavily protected, incredibly romantic Sikonda valley and its tranquil fishing lakes.",
      "Komló is arguably the 'steepest' city in Hungary, with its residential neighborhoods built on such aggressive inclines that many streets require massive networks of public stairs."
    ]
  },
  "szazhalombatta": {
    "desc": "Százhalombatta is a highly complex, deeply fascinating city located on the banks of the Danube just south of Budapest, representing an absolutely incredible collision of massive modern industry and extreme ancient history. On one hand, the city is the undisputed, fiery heart of Hungary's modern energy sector, completely dominated by the massive MOL Danube Refinery, the largest oil refinery in the country, and a colossal power plant. On the other hand, the city gets its name ('One Hundred Tumuli') from the deeply ancient, highly mysterious Iron Age burial mounds that dot the surrounding landscape. This incredible, 2,700-year-old heritage is brilliantly showcased in the Matrica Museum and a highly immersive, open-air Archaeological Park. It is a city of staggering, almost surreal contrasts.",
    "facts": [
      "The city's spectacular Archaeological Park is an immersive, open-air museum where visitors can explore flawlessly reconstructed Bronze Age and Iron Age houses and burial mounds.",
      "The MOL Danube Refinery in Százhalombatta is a colossal industrial facility that processes over 8 million tonnes of crude oil annually, driving the national economy.",
      "The historic Matrica Museum is named after the ancient Roman military fort (Matrica) that was located here to heavily guard the Pannonian border (Limes) along the Danube.",
      "The city boasts a highly prestigious, massive annual international folklore festival, drawing traditional dance and music groups from all over the world."
    ]
  },
  "monor": {
    "desc": "Monor is a deeply charming, highly traditional town located on the very edge where the flat expanse of the Great Hungarian Plain meets the gentle, rolling slopes of the Gödöllő Hills. The town is absolutely world-renowned for its spectacular 'Strázsa-hegy' Cellar Village, a massive, highly atmospheric viticultural complex consisting of nearly 1,000 historic, beautifully maintained wine cellars carved deeply into the loess hillsides. This incredibly dense network of press houses forms a completely separate, deeply romantic 'village of wine' just outside the main town, offering an incredibly authentic, highly hospitable Hungarian wine-tasting experience. Monor flawlessly preserves its deeply rooted, unhurried agricultural heritage while serving as an easily accessible, highly relaxing rural escape from the nearby capital.",
    "facts": [
      "The Monor Cellar Village is officially one of the largest continuous, contiguous cellar rows in all of Europe, featuring nearly 1,000 individual press houses.",
      "The town has historically produced highly distinctive, deeply flavorful light white wines, traditionally utilizing the highly unique, sandy and loess-heavy local terroir.",
      "Monor features a spectacularly designed, highly modern wooden lookout tower atop the Strázsa-hegy, offering sweeping panoramic views over the sprawling cellar village and the Great Plain.",
      "The town's grand, highly impressive Reformed Church was designed in the late 19th century by the legendary Hungarian architect Ödön Lechner."
    ]
  },
  "nagykoros": {
    "desc": "Nagykőrös is a profoundly historic, deeply dignified city located in the heart of the Great Hungarian Plain, celebrated nationwide as an absolute bastion of classic Hungarian literature and high-quality agriculture. The city's identity is inextricably, deeply linked to János Arany, arguably Hungary's greatest epic poet, who lived and taught at the local Reformed College in the mid-19th century, writing some of his most famous, deeply emotional ballads here. The city center is a flawlessly preserved, highly elegant display of 19th-century civic pride, featuring grand, tree-lined squares, majestic Calvinist churches, and the stunning, eclectic-style City Hall. Nagykőrös is also highly famous for its vast, fertile orchards and its legendary, massive traditional animal and farmers' markets. It is a city of high intellect, profound poetry, and deep rural roots.",
    "facts": [
      "The Arany János Museum in Nagykőrös holds the absolute most comprehensive, deeply personal collection of artifacts and manuscripts related to the legendary poet's life.",
      "The city is nationally famous for the 'Nagykőrösi Pusztai Tölgyes', an incredibly rare, highly protected ancient oak forest that survives from the original, primeval Great Plain landscape.",
      "The historic Nagykőrös Reformed College was a highly prestigious, elite educational institution that attracted the absolute brightest minds of 19th-century Hungary.",
      "The city's massive, centuries-old traditional market (Vásár) remains one of the largest, most authentic, and highly bustling agricultural markets in the entire country."
    ]
  },
  "marcali": {
    "desc": "Marcali is a highly welcoming, wonderfully peaceful town located just a few kilometers south of the bustling shores of Lake Balaton, serving as the deeply traditional, highly authentic heart of the Somogy region. While it historically served as an important agricultural and administrative center, Marcali has recently skyrocketed in popularity due to its spectacular, highly modern Marcali City Bath and Leisure Center. This massive, meticulously landscaped thermal complex offers an incredibly relaxing, family-friendly alternative to the crowded Balaton beaches, featuring highly therapeutic medicinal waters and expansive outdoor pools. The town's quiet, deeply charming center features an elegant, perfectly restored Baroque church and a fascinating local history museum. Marcali offers the absolute perfect, tranquil blend of deep Somogy heritage and premium geothermal relaxation.",
    "facts": [
      "The Marcali thermal water surfaces from a depth of over 1,000 meters and is highly rich in iodine and bromine, making it exceptionally effective for treating severe joint and spinal conditions.",
      "The town features the highly impressive, beautifully restored Forgách Castle, which currently functions as the local hospital but retains its grand, aristocratic exterior.",
      "Marcali is surrounded by highly prestigious, historically dense hunting grounds, drawing elite international hunters to the dense Somogy forests.",
      "The local Marcali Museum holds an incredibly fascinating, deeply comprehensive exhibition on the unique, traditional peasant medical practices and folklore of the Somogy region."
    ]
  },
  "barcs": {
    "desc": "Barcs is a deeply serene, highly strategic border city located in the extreme southwest of Hungary, positioned gracefully directly on the wild, untamed banks of the Drava River facing Croatia. The city serves as the absolute, undisputed gateway to the spectacularly pristine Danube-Drava National Park, making it a premier, highly sought-after destination for serious eco-tourists, river kayakers, and nature photographers. The Drava here is completely unnavigated by large commercial ships, preserving its incredibly complex, deeply romantic system of gravel banks, steep loess cliffs, and dense, jungle-like floodplain forests. Beyond its breathtaking natural setting, Barcs offers a highly restorative, modern thermal bath complex. It is an incredibly peaceful, deeply authentic immersion into one of Europe's last, truly wild border rivers.",
    "facts": [
      "The Drava River at Barcs is widely considered one of the absolute cleanest, most unpolluted, and highly biodiverse major rivers in all of Europe.",
      "The Barcs Juniper Woodland (Barcsi Ősborókás) is a highly unique, strictly protected nature reserve featuring a massive, naturally occurring pine and juniper forest on sandy soil.",
      "The city's highly popular Thermal Bath utilizes deep geothermal water that is incredibly effective for treating severe musculoskeletal and neurological disorders.",
      "Barcs serves as a massive, highly critical international crossing point, featuring a major road bridge connecting Hungary directly to Croatia across the Drava."
    ]
  },
  "celldomolk": {
    "desc": "Celldömölk is a deeply spiritual, highly fascinating town located in western Hungary, nestled perfectly at the eastern foot of the spectacular, highly eroded Ság Mountain. The town is universally revered across the country as one of the most absolute, deeply historic Catholic pilgrimage sites in Hungary, centered around the breathtaking, monumental Romanesque and Baroque Church of the Virgin Mary, which houses a highly venerated, miraculous statue of the Virgin Mary. Beyond its profound religious significance, Celldömölk is deeply tied to the ancient, volcanic geology of Ság Mountain, an extinct volcano whose steep, basalt-mined crater offers an incredibly dramatic, almost lunar landscape for hikers. The town flawlessly combines deep, ancient faith, highly respected volcanic viticulture, and striking geological history.",
    "facts": [
      "The miraculous, highly venerated wooden statue of the Virgin Mary in Celldömölk was originally brought from the Austrian shrine of Mariazell in the 18th century.",
      "Ság Mountain is an incredibly unique, 5-million-year-old extinct basalt volcano that was heavily mined in the 20th century, exposing its fascinating, raw geological core.",
      "The highly modern, spectacularly designed Kemenes Volcanopark visitor center at the foot of the mountain offers deeply immersive, interactive exhibitions on global volcanology.",
      "The volcanic soil of Ság Mountain produces incredibly highly regarded, intensely mineral white wines, continuing a deeply rooted Roman viticultural tradition."
    ]
  },
  "kormend": {
    "desc": "Körmend is an exceptionally elegant, deeply historic city located in the extreme western reaches of Hungary, gracefully hugging the banks of the Rába River near the Austrian border. The city's identity and architectural grandeur are completely and utterly defined by the breathtaking Batthyány-Strattmann Castle, one of the most monumental, deeply significant aristocratic palaces in the entire country. This massive, fiercely classicist complex was the ancestral seat of the immensely powerful Batthyány family and is surrounded by an incredibly sprawling, highly protected 36-hectare English landscape garden featuring massive, centuries-old plane trees. Körmend is a highly sophisticated, deeply peaceful city offering an unadulterated, highly romantic dive into the absolute highest echelons of Hungarian noble history and serene riverside leisure.",
    "facts": [
      "The Batthyány-Strattmann Castle houses the absolutely fascinating Dr. László Batthyány-Strattmann Museum, named after the famous 'doctor of the poor' who was beatified by the Catholic Church.",
      "The castle's massive, spectacularly designed historic riding hall and carriage house complex is one of the largest and most beautifully preserved in Central Europe.",
      "Körmend is deeply famous nationwide for its highly successful, fanatical basketball culture, with the local team historically dominating the Hungarian premier league.",
      "The city is a massive, highly popular starting point for thrilling, multi-day kayak and canoe tours down the fast-flowing, deeply winding Rába River."
    ]
  },
  "jaki-templom": {
    "desc": "The Abbey Church of Ják is an absolute, unparalleled masterpiece of medieval architecture and unequivocally the most monumental, perfectly preserved Romanesque building in all of Hungary. Located in a quiet village near the Austrian border, this breathtaking, twin-towered basilica was constructed in the early 13th century by the Benedictine order. The church's absolute crowning glory is its spectacular, deeply recessed, heavily sculpted main portal, which features incredibly intricate, multi-layered stone carvings of Christ, the Apostles, and fascinating geometric motifs. Stepping inside the dimly lit, massive stone interior is a profoundly moving, deeply spiritual experience that instantly transports visitors back to the Middle Ages. Ják is an absolute must-visit pilgrimage site for lovers of raw, ancient European architecture.",
    "facts": [
      "The iconic, deeply sculpted main portal of the Ják church was so highly revered that a perfect, full-scale replica was integrated into the Vajdahunyad Castle in Budapest in 1896.",
      "The church incredibly survived the devastating 1241 Mongol invasion, which completely annihilated almost all other major buildings in the Kingdom of Hungary.",
      "Right next to the massive basilica stands the deeply charming, highly unique Saint James Chapel, a smaller, perfectly circular Romanesque rotunda built for the local villagers.",
      "The interior features highly fragmented, deeply fascinating original 13th-century frescoes that were only recently uncovered from beneath layers of later plaster."
    ]
  },
  "nyirbatori-templom": {
    "desc": "The Nyírbátor Reformed Church is an absolutely staggering, deeply awe-inspiring architectural marvel, representing the absolute pinnacle of Late Gothic ecclesiastical architecture in Central Europe. Commissioned in the late 15th century by the immensely powerful, fiercely fearsome Báthory family, this massive, single-nave hall church is famous for its incredibly high, soaring interior and entirely unobstructed, column-free space. The absolute masterpiece of the church is its spectacular, highly intricate diamond-vaulted stone ceiling, which weaves an incredibly complex, delicate net of stone ribs high above the congregation. Located in the deeply historic eastern town of Nyírbátor, this church is a highly haunting, incredibly majestic monument to the immense wealth and Gothic architectural brilliance of the medieval Hungarian nobility.",
    "facts": [
      "The church's highly famous, incredibly complex wooden belfry is the absolute oldest and largest wooden bell tower in all of Hungary, built in 1640 without a single iron nail.",
      "The church was originally built as the deeply secure, highly opulent burial vault for the infamous Báthory family, including the ancestors of the notorious 'Blood Countess' Elizabeth Báthory.",
      "The church's breathtaking interior features an incredibly rare, perfectly preserved massive Renaissance wooden choir stall, considered one of the finest in Europe.",
      "Due to its massive, column-free interior and incredible stone vaulting, the church possesses absolutely flawless, highly renowned acoustics used frequently for choir concerts."
    ]
  },
  "edelenyi-kastely": {
    "desc": "The Edelény Palace, also known as the L'Huillier-Coburg Palace, is an absolutely breathtaking, monumental masterpiece of Early Baroque architecture, standing as one of the absolute largest and most spectacular aristocratic estates in all of Hungary. Located on an island formed by the Bódva River in northeastern Hungary, this colossal, fiercely symmetrical palace was constructed in the early 18th century by a highly decorated French military engineer. Following decades of severe neglect, the palace recently underwent a massive, multi-billion forint, world-class restoration. Today, its spectacular, richly frescoed rooms, grand sweeping staircases, and highly unique, ornate corner towers are completely resurrected. Edelény Palace is an incredibly glamorous, deeply immersive journey into the absolute zenith of 18th-century noble luxury.",
    "facts": [
      "The palace features a highly unique, spectacular series of vivid, deeply secular 18th-century frescoes depicting highly satirical, whimsical scenes of aristocratic daily life and exotic animals.",
      "The incredibly massive palace features exactly 365 windows, representing the days of the year, a highly popular architectural symbol of wealth in the Baroque era.",
      "The palace is uniquely situated on a massive, naturally formed island, originally accessed only via deeply romantic, highly fortified stone bridges over the Bódva River.",
      "The recent, massive restoration project completely utilized highly advanced 3D scanning and historical blueprints to flawlessly recreate the palace's original, deeply intricate Baroque roof structure."
    ]
  },
  "csakvari-kastely": {
    "desc": "The Csákvár Esterházy Palace is a spectacular, immensely imposing architectural masterpiece that elegantly anchors the quiet town of Csákvár at the foot of the fiercely beautiful Vértes Mountains. Built in the late 18th century by the immensely wealthy and influential Esterházy dynasty, it stands as one of the absolute most significant and grandiose Neoclassical palaces in Hungary. The palace is visually dominated by its breathtaking, massive front portico supported by towering Doric columns, exuding an aura of absolute imperial power and refinement. While the building currently functions as a highly respected hospital, its stunning exterior and the sprawling, deeply romantic English landscape garden—featuring centuries-old plane trees and serene lakes—remain highly accessible and deeply enchanting for visitors.",
    "facts": [
      "The palace was heavily redesigned in the early 19th century by the legendary architect Charles Moreau, transforming it into a strict, highly symmetrical Neoclassical masterpiece.",
      "The palace's massive, highly protected English landscape garden covers over 70 hectares and features incredibly unique, historic cast-iron bridges and artificial ruins.",
      "The surrounding Vértes mountains were traditionally the highly exclusive, incredibly rich hunting grounds of the Esterházy family, heavily utilized for massive aristocratic hunts.",
      "The palace historically housed an incredibly famous, massively prestigious private theater where elite, world-class Italian opera troupes regularly performed for the nobility."
    ]
  },
  "nadasdy-kastely": {
    "desc": "The Nádasdy Mansion in Nádasdladány is an absolutely unique, deeply romantic, and highly spectacular architectural anomaly in Hungary, serving as an absolute flawless masterpiece of English Neo-Gothic, Tudor-style architecture. Built in the late 19th century by Count Ferenc Nádasdy as a deeply passionate homage to his beloved, tragically deceased young wife, the mansion feels like a breathtaking, aristocratic English country house magically transported to the Hungarian plains. The exterior is incredibly striking, featuring highly complex, asymmetrical towers, delicate battlements, and ornate wrought-iron details. Inside, the mansion boasts a deeply magnificent, richly wood-paneled 'Hall of Ancestors'. Completely and beautifully restored, the Nádasdy Mansion offers a profoundly touching, wildly romantic excursion into 19th-century aristocratic mourning and extreme architectural elegance.",
    "facts": [
      "The mansion was highly advanced for its time, featuring incredibly modern 19th-century technology including an internal speaking-tube network, forced-air heating, and subterranean food elevators.",
      "Count Nádasdy was so deeply grief-stricken by his wife Ilona Zichy's death that he kept her rooms completely untouched and furnished for decades after she died.",
      "The incredibly spectacular 'Hall of Ancestors' features deeply ornate, floor-to-ceiling carved wood paneling and massive, highly valuable full-length portraits of the Nádasdy family.",
      "The mansion is surrounded by a sprawling, deeply serene 24-hectare English landscape garden featuring a highly romantic, artificial boating lake and ancient oak trees."
    ]
  },
  "deg-kastely": {
    "desc": "The Festetics Palace in Dég is an incredibly stunning, massively imposing monument to the absolute highest tier of Neoclassical architecture in Hungary, exuding an aura of pristine, unadulterated aristocratic elegance. Built in the early 19th century by the immensely powerful Festetics family and designed by the legendary architect Mihály Pollack, the palace's breathtaking, fiercely symmetrical facade features a massive, highly iconic central portico supported by towering Doric columns. However, the estate's absolute crown jewel is its surrounding English landscape garden—the absolute largest of its kind in Hungary—which features an incredibly massive, serpentine lake system. Perched deeply romantically on an island in the lake is the highly famous, deeply mysterious 'Dutch House.' Dég is an absolutely flawless, highly serene classical masterpiece.",
    "facts": [
      "The incredibly massive, deeply winding lake system in the palace's English garden spans an astonishing two kilometers in length.",
      "The deeply mysterious, red-brick 'Dutch House' located on a secluded island in the lake originally housed a highly elite herd of Swiss cows on its ground floor.",
      "The palace is deeply intertwined with Hungarian Freemasonry; local legend and historical evidence strongly suggest it served as the highly secretive central lodge for the Hungarian order.",
      "The Festetics Palace in Dég served as a highly prominent filming location for the blockbuster Hollywood movie 'Red Sparrow' starring Jennifer Lawrence."
    ]
  },
  "tiszadob-kastely": {
    "desc": "The Andrássy Castle in Tiszadob is an absolutely breathtaking, fairytale-like architectural masterpiece, heavily and romantically inspired by the spectacular chateaus of the French Loire Valley. Located in a deeply serene, completely isolated natural setting on the wild backwaters of the Tisza River, the castle was constructed in the late 19th century by Count Gyula Andrássy, the highly influential Prime Minister of Hungary. The building is a highly complex, visually stunning Historicist fantasy, featuring an incredible array of delicate turrets, highly ornate steeply pitched roofs, and beautifully carved stone balconies. The castle is equally famous for its spectacularly manicured, highly intricate boxwood labyrinth in the French garden. Tiszadob offers an incredibly romantic, deeply elegant aristocratic escape into pure architectural fantasy.",
    "facts": [
      "The castle's incredibly deliberate, deeply symbolic architectural design features exactly 4 entrances (seasons), 12 towers (months), 52 rooms (weeks), and 365 windows (days).",
      "Count Gyula Andrássy was deeply inspired to build the castle in this specific French style after spending years in Paris as an exiled revolutionary following the 1848 uprising.",
      "The incredibly complex, highly manicured boxwood labyrinth in the garden is uniquely shaped exactly like a massive, blooming lily flower when viewed from above.",
      "The castle's interior features incredibly lavish, highly ornate carved wooden ceilings and a spectacular, massively sweeping central wooden staircase."
    ]
  },
  "fuzerradvany-kastely": {
    "desc": "The Károlyi Palace in Füzérradvány is a spectacularly elegant, highly romantic 19th-century aristocratic masterpiece nestled deeply within the pristine, densely forested valleys of the Zemplén Mountains. Initially a modest 16th-century building, it was massively and brilliantly transformed into a sweeping, highly ornate Eclectic and Neo-Renaissance palace by the immensely wealthy Károlyi dynasty. The palace is highly famous for its incredibly spectacular, distinctly Italian Renaissance-style loggia and its towering, highly slender octagonal tower. The interior is absolutely breathtaking, featuring genuine, massively intricate Renaissance stone carvings and fireplaces imported directly from Italy. Surrounded by an incredibly expansive, historically protected English landscape park boasting massive, centuries-old plane trees, the palace is a deeply luxurious, highly secluded alpine retreat.",
    "facts": [
      "The palace's incredible interior features original, fully intact 16th-century Florentine Renaissance stone carvings integrated directly into the 19th-century architecture.",
      "The surrounding English landscape park covers over 100 hectares and features a spectacular, incredibly rare collection of massive, ancient, multi-trunked plane trees.",
      "The palace was heavily utilized as an incredibly elite, highly luxurious sanatorium and resort hotel for the European upper classes between the two World Wars.",
      "Following decades of neglect, the palace recently underwent a highly meticulous, massive restoration, returning its opulent, highly detailed interiors to their original, glamorous state."
    ]
  },
  "szabadkigyos-kastely": {
    "desc": "The Wenckheim Palace in Szabadkígyós is an absolute, unparalleled masterpiece of Hungarian Neo-Renaissance and Eclectic architecture, often considered one of the most spectacularly beautiful, highly romantic castles in the entire country. Designed by the legendary architectural genius Miklós Ybl in the late 19th century, the incredibly lavish palace was built for the immensely wealthy Count Krisztián Wenckheim. The building is a highly dynamic, visually stunning composition of towering turrets, highly ornate loggias, and deeply elegant stepped terraces. The interior is equally staggering, featuring an incredibly opulent, deeply wood-paneled library and a breathtaking, frescoed dining hall. Surrounded by a massive, flawlessly maintained French formal garden and an expansive English park, Szabadkígyós is the absolute zenith of 19th-century aristocratic grandeur.",
    "facts": [
      "The palace's deeply romantic, highly symbolic design features exactly 365 windows (days), 52 rooms (weeks), 12 entrances (months), and 4 main towers (seasons).",
      "The spectacular, deeply ornate palace library features floor-to-ceiling carved oak paneling and is considered one of the most beautiful historic libraries in Hungary.",
      "The immensely wealthy Wenckheim family heavily financed the construction of the massive, highly iconic Votive Church in nearby Szeged after the 1879 flood.",
      "The completely restored, massive French formal garden features highly intricate boxwood parterres and a stunning, central fountain perfectly aligned with the palace's main terrace."
    ]
  },
  "zsambek-romtemplom": {
    "desc": "The Zsámbék Church Ruins are an absolutely staggering, deeply haunting, and fiercely romantic architectural monument located just west of Budapest. Built in the early 13th century by the Premonstratensian order, this massive, twin-towered basilica is one of the absolute finest, most spectacular examples of the transition from heavy Romanesque to soaring Gothic architecture in Hungary. The church survived the Mongol invasion and the Ottoman occupation, only to be massively devastated by a catastrophic earthquake in 1763. Rather than being demolished, the incredibly majestic, highly atmospheric ruins were left standing, revealing a deeply fascinating, cross-sectional view of medieval vaulting, towering pillars, and intricate stone carvings. It is a profoundly moving, highly evocative symbol of the resilience of Hungarian medieval architecture.",
    "facts": [
      "The massive 1763 earthquake completely sheared off the entire northern wall and the roof of the basilica, creating the spectacular, open-air cross-section seen today.",
      "In the late 19th century, the legendary architect István Möller pioneered modern monument preservation here by specifically using contrasting brick to stabilize the ruins without faking original stone.",
      "The ruins are highly renowned for their incredibly spectacular, perfectly preserved late-Romanesque portal and deeply intricate, early-Gothic rose window frame.",
      "The incredibly atmospheric, highly dramatic ruins frequently serve as a spectacularly unique, open-air theater backdrop for summer classical music and dramatic performances."
    ]
  },
  "szentendre-varazshegy": {
    "desc": "The Varázsciki Valley (often translated as Magic Valley) in Szentendre is a highly unique, incredibly enchanting, and deeply whimsical outdoor destination specifically designed to ignite the imagination of families and children. Hidden within the lush, heavily forested ravines just outside the bustling artist town of Szentendre, this deeply immersive adventure park features a series of highly interactive, creatively crafted wooden installations, rope bridges, and fairytale-themed obstacle courses. Unlike traditional amusement parks, the Varázsciki Valley is brilliantly integrated directly into the wild, natural environment, encouraging visitors to physically engage with the forest, climb massive wooden structures, and explore hidden, deeply shaded glades. It is an absolutely magical, highly energetic, and beautifully crafted nature escape in the Danube Bend.",
    "facts": [
      "The entire adventure park is constructed almost exclusively using highly sustainable, natural materials, primarily massive, unbarked acacia and oak logs.",
      "The valley features highly unique, deeply creative 'barefoot paths' designed to physically stimulate the senses by having visitors walk over various natural forest textures.",
      "The park is heavily inspired by traditional Hungarian folk tales, featuring highly stylized wooden carvings of legendary forest creatures and mythical characters.",
      "The Varázsciki Valley is brilliantly designed to utilize the extreme, natural topography of the ravine, incorporating steep slides and highly thrilling zip lines between the trees."
    ]
  },
  "balatonalmadi-strand": {
    "desc": "The Wesselényi Beach in Balatonalmádi is an absolutely premier, highly manicured, and deeply beloved summer destination located on the spectacular northeastern corner of Lake Balaton. Widely considered one of the absolute largest, cleanest, and most elegantly maintained public beaches on the entire lake, it offers an incredibly expansive, sweeping panorama across the water toward the Tihany Peninsula. The beach is highly famous for its incredibly lush, deeply shaded environment, featuring massive, century-old weeping willows and perfectly cut lawns. It seamlessly combines highly modern, premium amenities—including massive water slides and excellent gastronomy—with a deeply nostalgic, classic Balaton Riviera atmosphere. Balatonalmádi Beach is the ultimate, highly comfortable, and visually stunning location for a classic Hungarian summer holiday.",
    "facts": [
      "The Wesselényi Beach is officially one of the largest beach complexes on Lake Balaton, capable of comfortably hosting many thousands of visitors simultaneously.",
      "The beach consistently and highly proudly earns the prestigious 'Blue Wave Flag' (Kék Hullám Zászló), the highest national certification for exceptional water quality and services.",
      "Balatonalmádi has deeply historic roots as a highly elite bathing culture hub, originally establishing its first grand, wooden bathing pavilions in the late 19th century.",
      "The beachfront features highly extensive, beautifully designed sports facilities, including professional beach volleyball courts and a highly popular outdoor fitness park."
    ]
  },
  "keszthely-strand": {
    "desc": "The Keszthely City Beach (Városi Strand) is a highly elegant, deeply historic, and absolutely iconic bathing complex located on the far western edge of Lake Balaton. The beach is completely and utterly defined by its absolute masterpiece: the Szigetfürdő (Island Bath). This incredibly spectacular, flawlessly restored 19th-century wooden bathing pavilion is built on piles directly over the shimmering waters of the lake, completely connected to the shore by an elegant wooden pier. Surrounded by deeply historic, grand hotels and a sweeping, highly manicured lakeside promenade, the beach offers an unparalleled, highly aristocratic bathing experience. It is the absolute, most deeply romantic and visually stunning architectural beach environment in Hungary, perfectly reflecting the high culture of the Festetics era.",
    "facts": [
      "The iconic, spectacularly beautiful Szigetfürdő was originally constructed in 1864 and was meticulously rebuilt in 2007 to flawlessly match its original, highly ornate 19th-century blueprints.",
      "The beach complex features a highly unique, deeply nostalgic giant Ferris wheel operating right on the waterfront, offering sweeping, breathtaking views over the entire western Balaton basin.",
      "The Keszthely City Beach is uniquely characterized by its incredibly expansive, deep, and highly shaded grassy areas, featuring massive, ancient deciduous trees.",
      "The beach features a massive, highly modern, heated outdoor pool shaped exactly like the map of Lake Balaton, providing warm-water bathing even on cooler summer days."
    ]
  }
}

import sys

def update_ts_file(ts_file):
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, item in data.items():
        ro_desc = item['desc'].replace('"', '\\"')
        ro_facts = item['facts']
        
        poi_pattern = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?\n\s*\})'
        match = re.search(poi_pattern, content)
        if not match:
            print(f"POI {poi_id} not found")
            continue
            
        poi_block = match.group(1)
        new_poi_block = poi_block
        
        desc_pattern = r'(descriptionAdvanced:\s*\{[\s\S]*?en:\s*)(["\'`][\s\S]*?["\'`])'
        desc_match = re.search(desc_pattern, new_poi_block)
        if desc_match:
            new_poi_block = re.sub(desc_pattern, r'\1"' + ro_desc + r'"', new_poi_block)

        facts_pattern = r'(factsAdvanced:\s*\{[\s\S]*?en:\s*)(\[[\s\S]*?\])'
        facts_match = re.search(facts_pattern, new_poi_block)
        if facts_match:
            facts_json = json.dumps(ro_facts, ensure_ascii=False, indent=8)
            facts_json = facts_json.replace('\n', '\n      ')
            new_poi_block = re.sub(facts_pattern, r'\1' + facts_json, new_poi_block)

        content = content.replace(poi_block, new_poi_block)

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated batch 5 in {ts_file}")

if __name__ == "__main__":
    update_ts_file('lib/visualLab/data/hungaryPoi.ts')
