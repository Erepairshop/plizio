import { POI } from "./poi";

const spainCitiesExtra: POI[] = [
  {
    id: "ES-MAD",
    type: "city",
    parent: "ES",
    coords: [-3.7038, 40.4168],
    name: { de: "Madrid", hu: "Madrid", ro: "Madrid", en: "Madrid" },
    description: {
      de: "Die dynamische Hauptstadt Spaniens, bekannt für ihre Kunstmuseen und das pulsierende Nachtleben.",
      hu: "Spanyolország dinamikus fővárosa, amely művészeti múzeumairól és nyüzsgő éjszakai életéről ismert.",
      ro: "Capitala dinamică a Spaniei, cunoscută pentru muzeele sale de artă și viața de noapte vibrantă.",
      en: "The dynamic capital of Spain, known for its art museums and vibrant nightlife."
    },
    descriptionAdvanced: {
      de: "Madrid ist das geografische und politische Herz Spaniens und liegt auf einem Hochplateau in der Mitte der Iberischen Halbinsel. Als eine der größten Städte Europas verbindet Madrid historische Eleganz mit einer modernen, weltoffenen Atmosphäre. Die Stadt ist weltberühmt für das 'Goldene Dreieck der Kunst', bestehend aus dem Museo del Prado, dem Museo Reina Sofía und dem Museo Thyssen-Bornemisza, die zu den bedeutendsten Kunstsammlungen weltweit zählen. Der Palacio Real und die prachtvolle Plaza Mayor zeugen von der langen königlichen Geschichte der Stadt, während die Gran Vía mit ihren Theatern und Geschäften das geschäftige moderne Madrid repräsentiert. Madrid ist auch für seine lebendige soziale Kultur bekannt, bei der sich das Leben in den Straßen, Parks wie dem Retiro und in den unzähligen Tapas-Bars abspielt. Geografie K7 – Städte und kulturelle Zentren.",
      hu: "Madrid Spanyolország földrajzi és politikai szíve, a félsziget közepén, egy fennsíkon fekszik. Európa egyik legnagyobb városaként a történelmi eleganciát modern, nyitott atmoszférával ötvözi. Világhírű a 'művészet arany háromszögéről', amely a Prado, a Reina Sofía és a Thyssen-Bornemisza múzeumokból áll, és a világ legfontosabb gyűjteményei közé tartozik. A Királyi Palota és a Plaza Mayor a város hosszú királyi múltját idézi, míg a Gran Vía színházaival és üzleteivel a nyüzsgő modern Madridot képviseli. A város pezsgő társadalmi életéről ismert, ahol az emberek az utcákon, a Retiro parkban és a számtalan tapas-bárban találkoznak. Földrajz K7 – városok és kulturális központok.",
      ro: "Madrid reprezintă inima geografică și politică a Spaniei, fiind situat pe un platou înalt în centrul Peninsulei Iberice. Fiind unul dintre cele mai mari centre urbane din Europa, Madridul îmbină eleganța istorică cu o atmosferă modernă și deschisă. Orașul este celebru la nivel mondial pentru „Triunghiul de Aur al Artei”, alcătuit din Muzeul Prado, Muzeul Reina Sofía și Muzeul Thyssen-Bornemisza, care găzduiesc colecții de artă de o importanță inestimabilă. Palatul Regal și piața Plaza Mayor reflectă istoria regală bogată, în timp ce bulevardul Gran Vía, cu teatrele și magazinele sale, reprezintă latura modernă și agitată. Madrid este renumit și pentru cultura sa socială vibrantă, unde viața de zi cu zi se desfășoară în parcul Retiro și în nenumăratele baruri de tapas. Geografie K7 – orașe și centre culturale.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Madrid liegt auf einer Höhe von 667 Metern über dem Meeresspiegel.",
        "Das Museo del Prado beherbergt über 7.000 Gemälde.",
        "Der Palacio Real umfasst mehr als 3.000 Räume.",
        "Madrid hat über 1.500 Sonnenstunden pro Jahr.",
        "Die Stadt wurde im 9. Jahrhundert als maurische Festung gegründet.",
        "Der Retiro-Park erstreckt sich über 125 Hektar.",
        "Madrid ist das höchste Hauptstadt-Zentrum in der Europäischen Union."
      ],
      hu: [
        "Madrid 667 méteres tengerszint feletti magasságban fekszik.",
        "A Prado Múzeum több mint 7000 festménynek ad otthont.",
        "A Királyi Palota több mint 3000 szobát foglal magában.",
        "Madridban évente több mint 1500 a napsütéses órák száma.",
        "A várost a 9. században alapították mór erődítményként.",
        "A Retiro park 125 hektáron terül el.",
        "Madrid az Európai Unió legmagasabban fekvő fővárosa."
      ],
      ro: [
        "Madridul se află la o altitudine de 667 metri deasupra nivelului mării.",
        "Muzeul Prado găzduiește peste 7.000 de picturi.",
        "Palatul Regal cuprinde mai mult de 3.000 de camere.",
        "Madridul are peste 1.500 de ore de soare pe an.",
        "Orașul a fost fondat în secolul al IX-lea ca fortăreață maură.",
        "Parcul Retiro se întinde pe o suprafață de 125 de hectare.",
        "Madridul este capitala situată la cea mai mare altitudine din Uniunea Europeană."
      ],
      en: []
    }
  },
  {
    id: "ES-BCN",
    type: "city",
    parent: "ES",
    coords: [2.1734, 41.3851],
    name: { de: "Barcelona", hu: "Barcelona", ro: "Barcelona", en: "Barcelona" },
    description: {
      de: "Die katalanische Metropole am Mittelmeer, berühmt für die Architektur von Antoni Gaudí.",
      hu: "A Földközi-tenger partján fekvő katalán metropolisz, amely Antoni Gaudí építészetéről híres.",
      ro: "Metropola catalană de la Marea Mediterană, celebră pentru arhitectura lui Antoni Gaudí.",
      en: "The Catalan metropolis on the Mediterranean, famous for the architecture of Antoni Gaudí."
    },
    descriptionAdvanced: {
      de: "Barcelona ist die Hauptstadt Kataloniens und eine der faszinierendsten Metropolen am Mittelmeer. Die Stadt ist weltweit einzigartig durch die Visionen von Antoni Gaudí, deren Meisterwerke wie die Sagrada Família, der Park Güell und die Casa Batlló das Stadtbild prägen und jährlich Millionen Besucher anziehen. Neben der architektonischen Pracht besticht Barcelona durch sein mediterranes Flair, die lebendige Promenade 'Las Ramblas' und seine strategische Lage zwischen Bergen und Meer. Die Stadt ist ein wirtschaftliches und kulturelles Kraftzentrum, das eine unverwechselbare katalanische Identität pflegt. Von den historischen Gassen des Barri Gòtic bis zu den olympischen Anlagen am Montjuïc bietet Barcelona eine beeindruckende Vielfalt. Geografie K7 – mediterrane Städte.",
      hu: "Barcelona Katalónia fővárosa és a Földközi-tenger egyik leglenyűgözőbb metropolisza. A város világszerte egyedülálló Antoni Gaudí vízióinak köszönhetően, akinek mesterművei, mint a Sagrada Família, a Güell park és a Casa Batlló meghatározzák a városképet, és évente több millió látogatót vonzanak. Az építészeti pompán túl Barcelona mediterrán hangulatával, a nyüzsgő Las Ramblas sétánnyal, valamint a hegyek és a tenger közötti stratégiai elhelyezkedésével nyűgözi le az utazókat. A város gazdasági és kulturális központ, amely egyedi katalán identitást ápol. A Barri Gòtic történelmi utcáitól a Montjuïc olimpiai létesítményeiig Barcelona lenyűgöző változatosságot kínál. Földrajz K7 – mediterrán városok.",
      ro: "Barcelona este capitala Cataloniei și una dintre cele mai fascinante metropole de la Marea Mediterană. Orașul este unic la nivel mondial datorită viziunilor arhitecturale ale lui Antoni Gaudí, ale cărui capodopere, precum Sagrada Família, Parcul Güell și Casa Batlló, definesc peisajul urban și atrag milioane de vizitatori anual. Pe lângă splendoarea arhitecturală, Barcelona impresionează prin farmecul mediteranean, celebra promenadă „Las Ramblas” și locația strategică între munți și mare. Orașul reprezintă un centru economic și cultural puternic, care își cultivă identitatea catalană distinctă. De la străzile istorice din Barri Gòtic până la complexele olimpice de pe dealul Montjuïc, Barcelona oferă o varietate impresionantă. Geografie K7 – orașe mediteraneene.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Bau der Sagrada Família dauert bereits über 140 Jahre an.",
        "Barcelona besitzt rund 4,5 Kilometer an Stränden direkt in der Stadt.",
        "Die Stadt beherbergt über 60 Parks und Grünflächen.",
        "Der Park Güell wurde ursprünglich als exklusive Wohnanlage geplant.",
        "Barcelona ist das wirtschaftliche Zentrum der Region Katalonien.",
        "Die Stadt empfängt jährlich über 30 Millionen Besucher.",
        "Barcelona war Gastgeber der Olympischen Sommerspiele 1992."
      ],
      hu: [
        "A Sagrada Família építése több mint 140 éve tart.",
        "Barcelona körülbelül 4,5 kilométernyi tengerparti stranddal rendelkezik.",
        "A város több mint 60 parknak és zöldterületnek ad otthont.",
        "A Güell parkot eredetileg exkluzív lakóparknak tervezték.",
        "Barcelona Katalónia régiójának gazdasági központja.",
        "A város évente több mint 30 millió látogatót fogad.",
        "Barcelona volt az 1992-es nyári olimpiai játékok házigazdája."
      ],
      ro: [
        "Construcția catedralei Sagrada Família durează de peste 140 de ani.",
        "Barcelona dispune de aproximativ 4,5 kilometri de plaje direct în oraș.",
        "Orașul găzduiește peste 60 de parcuri și zone verzi.",
        "Parcul Güell a fost planificat inițial ca un complex rezidențial exclusivist.",
        "Barcelona reprezintă centrul economic al regiunii Catalonia.",
        "Orașul primește anual peste 30 de milioane de vizitatori.",
        "Barcelona a fost gazda Jocurilor Olimpice de vară din 1992."
      ],
      en: []
    }
  }
];
export default spainCitiesExtra;
