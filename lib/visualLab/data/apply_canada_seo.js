import { POI } from "./poi";

export const updateCanadaPois = (data: POI[]) => {
  data.forEach((poi) => {
    if (poi.descriptionAdvanced && poi.descriptionAdvanced.en === "") {
        if (poi.id === "can_cap") {
            poi.descriptionAdvanced.en = "Ottawa is Canada's majestic capital city, nestled at the confluence of three rivers. Known for its stunning neo-Gothic architecture on Parliament Hill, the city also features the historic Rideau Canal, a UNESCO World Heritage site that transforms into the world's longest skating rink during the winter months. Its rich cultural landscape, including the Canadian Museum of History, makes it a vital destination for understanding the nation's heritage. Geography K7 – mountains and rivers.";
            poi.factsAdvanced.en = [
                "Ottawa became Canada's permanent capital in the mid-19th century.",
                "The Ottawa River separates the city from the province of Quebec.",
                "The Canadian Museum of History is one of the country's most-visited cultural institutions.",
                "The Rideau Canal spans 202 km and is a masterpiece of 19th-century engineering.",
                "The National Gallery of Canada is a prominent feature of the downtown area.",
                "The annual Tulip Festival showcases millions of blooms every spring."
            ];
        } else if (poi.id === "can_tor") {
            poi.descriptionAdvanced.en = "Toronto is the vibrant economic heart of Canada and one of the world's most multicultural metropolises. Situated on the shores of Lake Ontario, the city is defined by its iconic skyline, dominated by the CN Tower, and its diverse collection of cultural districts. As a global hub for business and arts, Toronto's mosaic of neighborhoods offers an unparalleled urban experience. Geography K8 – cities and urbanization.";
            poi.factsAdvanced.en = [
                "Toronto is Canada's largest city and the capital of the province of Ontario.",
                "The CN Tower, at 553 meters, was once the world's tallest free-standing structure.",
                "More than half of Toronto's population was born outside of Canada.",
                "The city is recognized as one of the most famous multicultural melting pots in the world.",
                "Ferries connect the city's harbor to the nearby Toronto Islands.",
                "The city hosts the internationally renowned TIFF film festival."
            ];
        } else if (poi.id === "can_mon") {
            poi.descriptionAdvanced.en = "Montreal is a captivating blend of European elegance and North American energy. As the second-largest French-speaking city globally, it is renowned for its world-class gastronomy, vibrant arts scene, and the historic charm of Vieux-Montréal. The city's unique underground network, RÉSO, adds to its appeal, especially during the colder months. Geography K6 – urban structure.";
            poi.factsAdvanced.en = [
                "Montreal is situated on an island in the St. Lawrence River.",
                "The city boasts a vast underground city network known as RÉSO, vital for winter transit.",
                "Mount Royal offers spectacular panoramic views over the metropolis.",
                "Vieux-Montréal is the oldest district, characterized by its historic cobblestone streets.",
                "The city hosts the internationally famous Montreal Jazz Festival annually.",
                "Poutine is a culinary delicacy deeply rooted in the city's local culture."
            ];
        } else if (poi.id === "can_van") {
            poi.descriptionAdvanced.en = "Vancouver is a stunning coastal city where the ocean meets the mountains, creating a unique natural environment. Famous for its spectacular scenery, expansive Stanley Park, and its status as a major Pacific port, Vancouver is also a key center for the film industry, often called 'Hollywood North.' Geography K4 – marine ecosystems.";
            poi.factsAdvanced.en = [
                "The city is uniquely positioned where mountains meet the ocean.",
                "Stanley Park is one of the largest urban parks in North America.",
                "Vancouver is a global hub for film production, earning the nickname 'Hollywood North'.",
                "It enjoys one of the mildest climates in all of Canada.",
                "The world-famous Capilano Suspension Bridge is a major landmark here.",
                "The city successfully hosted the 2010 Winter Olympic Games."
            ];
        } else if (poi.id === "can_cal") {
            poi.descriptionAdvanced.en = "Calgary is a dynamic city located in the foothills of the Rocky Mountains, known for its deep-rooted connections to the oil industry and Wild West heritage. Each year, the world-famous 'Calgary Stampede' attracts visitors from across the globe, showcasing the city's lively spirit and historical traditions. Geography K5 – foothill settlements.";
            poi.factsAdvanced.en = [
                "Calgary serves as the central hub of Canada's oil and gas industry.",
                "The Calgary Stampede is one of the largest and most famous rodeos in the world.",
                "The city is located at the confluence of the Bow and Elbow Rivers.",
                "The iconic Calgary Tower is a defining landmark of the cityscape.",
                "Banff National Park is easily accessible, located in the nearby mountains.",
                "Calgary is recognized as one of the sunniest cities in all of Canada."
            ];
        } else if (poi.id === "can_edm") {
             poi.descriptionAdvanced.en = "Edmonton is the northernmost city in North America with over a million residents, serving as a crucial gateway to the Arctic. The city is renowned for its vibrant cultural life, the extensive river valley of the North Saskatchewan River, and the massive West Edmonton Mall. Geography K6 – northern cities.";
             poi.factsAdvanced.en = [
                 "Edmonton is the northernmost metropolis in North America with over 1 million inhabitants.",
                 "The North Saskatchewan River valley is a massive urban green space.",
                 "West Edmonton Mall is one of the largest shopping centers in the world.",
                 "The city is considered a primary northern gateway to the Canadian Arctic.",
                 "Edmonton hosts numerous festivals, earning the title 'Canada's Festival City'.",
                 "The provincial legislature building is situated on the scenic riverbank."
             ];
        }
    }
  });
};
