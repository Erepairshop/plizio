// Multi-country static map generator — React-független standalone HTML per country.
// Output: public/<slug>-map-static/{index.html,de,hu,ro,en}/index.html
// Run:    node --experimental-strip-types scripts/build-static-maps.mts [iso|all]
import fs from "node:fs";
import path from "node:path";

type Lang = "de" | "hu" | "ro" | "en";
const LANGS: Lang[] = ["de", "hu", "ro", "en"];

type Country = {
  iso: string;           // lowercase, matches /data/pois/<ISO>.json (uppercased)
  slug: string;          // URL slug = English country name
  svgFile: string;       // filename in lib/visualLab/maps/
  mapVar: string;        // exported region-paths array name
  vbVar: string;         // exported viewBox string name
  projFn: string;        // exported projectCoords function name
  names: Record<Lang, string>;
};

const COUNTRIES: Country[] = [
  { iso:"hr", slug:"croatia", svgFile:"croatia.svg.ts", mapVar:"croatiaMap", vbVar:"croatiaViewBox", projFn:"projectCoordsHR",
    names:{ de:"Kroatien", hu:"Horvátország", ro:"Croația", en:"Croatia" } },
  { iso:"hu", slug:"magyarorszag", svgFile:"magyarorszag.svg.ts", mapVar:"magyarorszagMap", vbVar:"magyarorszagViewBox", projFn:"projectCoordsHU",
    names:{ de:"Ungarn", hu:"Magyarország", ro:"Ungaria", en:"Hungary" } },
  { iso:"ro", slug:"romania", svgFile:"romania.svg.ts", mapVar:"romaniaMap", vbVar:"romaniaViewBox", projFn:"projectCoordsRO",
    names:{ de:"Rumänien", hu:"Románia", ro:"România", en:"Romania" } },
  { iso:"de", slug:"deutschland", svgFile:"deutschland.svg.ts", mapVar:"deutschlandMap", vbVar:"deutschlandViewBox", projFn:"projectCoords",
    names:{ de:"Deutschland", hu:"Németország", ro:"Germania", en:"Germany" } },
  { iso:"fr", slug:"france", svgFile:"france.svg.ts", mapVar:"franceMap", vbVar:"franceViewBox", projFn:"projectCoordsFR",
    names:{ de:"Frankreich", hu:"Franciaország", ro:"Franța", en:"France" } },
  { iso:"it", slug:"italy", svgFile:"italy.svg.ts", mapVar:"italyMap", vbVar:"italyViewBox", projFn:"projectCoordsIT",
    names:{ de:"Italien", hu:"Olaszország", ro:"Italia", en:"Italy" } },
  { iso:"es", slug:"spain", svgFile:"spain.svg.ts", mapVar:"spainMap", vbVar:"spainViewBox", projFn:"projectCoordsES",
    names:{ de:"Spanien", hu:"Spanyolország", ro:"Spania", en:"Spain" } },
  { iso:"pl", slug:"poland", svgFile:"poland.svg.ts", mapVar:"polandMap", vbVar:"polandViewBox", projFn:"projectCoordsPL",
    names:{ de:"Polen", hu:"Lengyelország", ro:"Polonia", en:"Poland" } },
  { iso:"gb", slug:"unitedkingdom", svgFile:"unitedkingdom.svg.ts", mapVar:"unitedkingdomMap", vbVar:"unitedkingdomViewBox", projFn:"projectCoordsUK",
    names:{ de:"Vereinigtes Königreich", hu:"Egyesült Királyság", ro:"Regatul Unit", en:"United Kingdom" } },
  { iso:"nl", slug:"netherlands", svgFile:"netherlands.svg.ts", mapVar:"netherlandsMap", vbVar:"netherlandsViewBox", projFn:"projectCoordsNL",
    names:{ de:"Niederlande", hu:"Hollandia", ro:"Țările de Jos", en:"Netherlands" } },
  { iso:"at", slug:"austria", svgFile:"austria.svg.ts", mapVar:"austriaMap", vbVar:"austriaViewBox", projFn:"projectCoordsAT",
    names:{ de:"Österreich", hu:"Ausztria", ro:"Austria", en:"Austria" } },
  { iso:"be", slug:"belgium", svgFile:"belgium.svg.ts", mapVar:"belgiumMap", vbVar:"belgiumViewBox", projFn:"projectCoordsBE",
    names:{ de:"Belgien", hu:"Belgium", ro:"Belgia", en:"Belgium" } },
  { iso:"pt", slug:"portugal", svgFile:"portugal.svg.ts", mapVar:"portugalMap", vbVar:"portugalViewBox", projFn:"projectCoordsPT",
    names:{ de:"Portugal", hu:"Portugália", ro:"Portugalia", en:"Portugal" } },
  { iso:"gr", slug:"greece", svgFile:"greece.svg.ts", mapVar:"greeceMap", vbVar:"greeceViewBox", projFn:"projectCoordsGR",
    names:{ de:"Griechenland", hu:"Görögország", ro:"Grecia", en:"Greece" } },
  { iso:"ie", slug:"ireland", svgFile:"ireland.svg.ts", mapVar:"irelandMap", vbVar:"irelandViewBox", projFn:"projectCoordsIE",
    names:{ de:"Irland", hu:"Írország", ro:"Irlanda", en:"Ireland" } },
  { iso:"dk", slug:"denmark", svgFile:"denmark.svg.ts", mapVar:"denmarkMap", vbVar:"denmarkViewBox", projFn:"projectCoordsDK",
    names:{ de:"Dänemark", hu:"Dánia", ro:"Danemarca", en:"Denmark" } },
  { iso:"se", slug:"sweden", svgFile:"sweden.svg.ts", mapVar:"swedenMap", vbVar:"swedenViewBox", projFn:"projectCoordsSE",
    names:{ de:"Schweden", hu:"Svédország", ro:"Suedia", en:"Sweden" } },
  { iso:"no", slug:"norway", svgFile:"norway.svg.ts", mapVar:"norwayMap", vbVar:"norwayViewBox", projFn:"projectCoordsNO",
    names:{ de:"Norwegen", hu:"Norvégia", ro:"Norvegia", en:"Norway" } },
  { iso:"fi", slug:"finland", svgFile:"finland.svg.ts", mapVar:"finlandMap", vbVar:"finlandViewBox", projFn:"projectCoordsFI",
    names:{ de:"Finnland", hu:"Finnország", ro:"Finlanda", en:"Finland" } },
  { iso:"ch", slug:"switzerland", svgFile:"switzerland.svg.ts", mapVar:"switzerlandMap", vbVar:"switzerlandViewBox", projFn:"projectCoordsCH",
    names:{ de:"Schweiz", hu:"Svájc", ro:"Elveția", en:"Switzerland" } },
  { iso:"cz", slug:"czech-republic", svgFile:"czechRepublic.svg.ts", mapVar:"czechRepublicMap", vbVar:"czechRepublicViewBox", projFn:"projectCoordsCZ",
    names:{ de:"Tschechien", hu:"Csehország", ro:"Cehia", en:"Czech Republic" } },
  { iso:"sk", slug:"slovakia", svgFile:"slovakia.svg.ts", mapVar:"slovakiaMap", vbVar:"slovakiaViewBox", projFn:"projectCoordsSK",
    names:{ de:"Slowakei", hu:"Szlovákia", ro:"Slovacia", en:"Slovakia" } },
  { iso:"si", slug:"slovenia", svgFile:"slovenia.svg.ts", mapVar:"sloveniaMap", vbVar:"sloveniaViewBox", projFn:"projectCoordsSI",
    names:{ de:"Slowenien", hu:"Szlovénia", ro:"Slovenia", en:"Slovenia" } },
  { iso:"bg", slug:"bulgaria", svgFile:"bulgaria.svg.ts", mapVar:"bulgariaMap", vbVar:"bulgariaViewBox", projFn:"projectCoordsBG",
    names:{ de:"Bulgarien", hu:"Bulgária", ro:"Bulgaria", en:"Bulgaria" } },
  { iso:"rs", slug:"serbia", svgFile:"serbia.svg.ts", mapVar:"serbiaMap", vbVar:"serbiaViewBox", projFn:"projectCoordsRS",
    names:{ de:"Serbien", hu:"Szerbia", ro:"Serbia", en:"Serbia" } },
  { iso:"ba", slug:"bosnia", svgFile:"bosnia.svg.ts", mapVar:"bosniaMap", vbVar:"bosniaViewBox", projFn:"projectCoordsBA",
    names:{ de:"Bosnien", hu:"Bosznia-Hercegovina", ro:"Bosnia și Herțegovina", en:"Bosnia and Herzegovina" } },
  { iso:"al", slug:"albania", svgFile:"albania.svg.ts", mapVar:"albaniaMap", vbVar:"albaniaViewBox", projFn:"projectCoordsAL",
    names:{ de:"Albanien", hu:"Albánia", ro:"Albania", en:"Albania" } },
  { iso:"me", slug:"montenegro", svgFile:"montenegro.svg.ts", mapVar:"montenegroMap", vbVar:"montenegroViewBox", projFn:"projectCoordsME",
    names:{ de:"Montenegro", hu:"Montenegró", ro:"Muntenegru", en:"Montenegro" } },
  { iso:"mk", slug:"northmacedonia", svgFile:"northmacedonia.svg.ts", mapVar:"northmacedoniaMap", vbVar:"northmacedoniaViewBox", projFn:"projectCoordsMK",
    names:{ de:"Nordmazedonien", hu:"Észak-Macedónia", ro:"Macedonia de Nord", en:"North Macedonia" } },
  { iso:"xk", slug:"kosovo", svgFile:"kosovo.svg.ts", mapVar:"kosovoMap", vbVar:"kosovoViewBox", projFn:"projectCoordsXK",
    names:{ de:"Kosovo", hu:"Koszovó", ro:"Kosovo", en:"Kosovo" } },
  { iso:"md", slug:"moldova", svgFile:"moldova.svg.ts", mapVar:"moldovaMap", vbVar:"moldovaViewBox", projFn:"projectCoordsMD",
    names:{ de:"Moldau", hu:"Moldova", ro:"Republica Moldova", en:"Moldova" } },
  { iso:"ua", slug:"ukraine", svgFile:"ukraine.svg.ts", mapVar:"ukraineMap", vbVar:"ukraineViewBox", projFn:"projectCoordsUA",
    names:{ de:"Ukraine", hu:"Ukrajna", ro:"Ucraina", en:"Ukraine" } },
  { iso:"by", slug:"belarus", svgFile:"belarus.svg.ts", mapVar:"belarusMap", vbVar:"belarusViewBox", projFn:"projectCoordsBY",
    names:{ de:"Belarus", hu:"Belarusz", ro:"Belarus", en:"Belarus" } },
  { iso:"lt", slug:"lithuania", svgFile:"lithuania.svg.ts", mapVar:"lithuaniaMap", vbVar:"lithuaniaViewBox", projFn:"projectCoordsLT",
    names:{ de:"Litauen", hu:"Litvánia", ro:"Lituania", en:"Lithuania" } },
  { iso:"lv", slug:"latvia", svgFile:"latvia.svg.ts", mapVar:"latviaMap", vbVar:"latviaViewBox", projFn:"projectCoordsLV",
    names:{ de:"Lettland", hu:"Lettország", ro:"Letonia", en:"Latvia" } },
  { iso:"ee", slug:"estonia", svgFile:"estonia.svg.ts", mapVar:"estoniaMap", vbVar:"estoniaViewBox", projFn:"projectCoordsEE",
    names:{ de:"Estland", hu:"Észtország", ro:"Estonia", en:"Estonia" } },
  { iso:"is", slug:"iceland", svgFile:"iceland.svg.ts", mapVar:"icelandMap", vbVar:"icelandViewBox", projFn:"projectCoordsIS",
    names:{ de:"Island", hu:"Izland", ro:"Islanda", en:"Iceland" } },
  { iso:"mt", slug:"malta", svgFile:"malta.svg.ts", mapVar:"maltaMap", vbVar:"maltaViewBox", projFn:"projectCoordsMT",
    names:{ de:"Malta", hu:"Málta", ro:"Malta", en:"Malta" } },
  { iso:"cy", slug:"cyprus", svgFile:"cyprus.svg.ts", mapVar:"cyprusMap", vbVar:"cyprusViewBox", projFn:"projectCoordsCY",
    names:{ de:"Zypern", hu:"Ciprus", ro:"Cipru", en:"Cyprus" } },
  { iso:"lu", slug:"luxembourg", svgFile:"luxembourg.svg.ts", mapVar:"luxembourgMap", vbVar:"luxembourgViewBox", projFn:"projectCoordsLU",
    names:{ de:"Luxemburg", hu:"Luxemburg", ro:"Luxemburg", en:"Luxembourg" } },
  { iso:"ad", slug:"andorra", svgFile:"andorra.svg.ts", mapVar:"andorraMap", vbVar:"andorraViewBox", projFn:"projectCoordsAD",
    names:{ de:"Andorra", hu:"Andorra", ro:"Andorra", en:"Andorra" } },
  { iso:"mc", slug:"monaco", svgFile:"monaco.svg.ts", mapVar:"monacoMap", vbVar:"monacoViewBox", projFn:"projectCoordsMC",
    names:{ de:"Monaco", hu:"Monaco", ro:"Monaco", en:"Monaco" } },
  { iso:"sm", slug:"sanmarino", svgFile:"sanmarino.svg.ts", mapVar:"sanmarinoMap", vbVar:"sanmarinoViewBox", projFn:"projectCoordsSM",
    names:{ de:"San Marino", hu:"San Marino", ro:"San Marino", en:"San Marino" } },
  { iso:"va", slug:"vatican", svgFile:"vatican.svg.ts", mapVar:"vaticanMap", vbVar:"vaticanViewBox", projFn:"projectCoordsVA",
    names:{ de:"Vatikan", hu:"Vatikán", ro:"Vatican", en:"Vatican" } },
  { iso:"li", slug:"liechtenstein", svgFile:"liechtenstein.svg.ts", mapVar:"liechtensteinMap", vbVar:"liechtensteinViewBox", projFn:"projectCoordsLI",
    names:{ de:"Liechtenstein", hu:"Liechtenstein", ro:"Liechtenstein", en:"Liechtenstein" } },
  { iso:"gf", slug:"frenchguiana", svgFile:"frenchguiana.svg.ts", mapVar:"frenchguianaMap", vbVar:"frenchguianaViewBox", projFn:"projectCoordsGF",
    names:{ de:"Französisch-Guayana", hu:"Francia Guyana", ro:"Guyana Franceză", en:"French Guiana" } },

  // === North America (2026-05-27) ===
  { iso:"us", slug:"usa", svgFile:"usa.svg.ts", mapVar:"usaMap", vbVar:"usaViewBox", projFn:"projectCoordsUS",
    names:{ de:"USA", hu:"Egyesült Államok", ro:"SUA", en:"United States" } },
  { iso:"ca", slug:"canada", svgFile:"canada.svg.ts", mapVar:"canadaMap", vbVar:"canadaViewBox", projFn:"projectCoordsCA",
    names:{ de:"Kanada", hu:"Kanada", ro:"Canada", en:"Canada" } },
  { iso:"mx", slug:"mexico", svgFile:"mexico.svg.ts", mapVar:"mexicoMap", vbVar:"mexicoViewBox", projFn:"projectCoordsMX",
    names:{ de:"Mexiko", hu:"Mexikó", ro:"Mexic", en:"Mexico" } },
  { iso:"gt", slug:"guatemala", svgFile:"guatemala.svg.ts", mapVar:"guatemalaMap", vbVar:"guatemalaViewBox", projFn:"projectCoordsGT",
    names:{ de:"Guatemala", hu:"Guatemala", ro:"Guatemala", en:"Guatemala" } },
  { iso:"hn", slug:"honduras", svgFile:"honduras.svg.ts", mapVar:"hondurasMap", vbVar:"hondurasViewBox", projFn:"projectCoordsHN",
    names:{ de:"Honduras", hu:"Honduras", ro:"Honduras", en:"Honduras" } },
  { iso:"sv", slug:"elsalvador", svgFile:"elsalvador.svg.ts", mapVar:"elsalvadorMap", vbVar:"elsalvadorViewBox", projFn:"projectCoordsSV",
    names:{ de:"El Salvador", hu:"Salvador", ro:"El Salvador", en:"El Salvador" } },
  { iso:"ni", slug:"nicaragua", svgFile:"nicaragua.svg.ts", mapVar:"nicaraguaMap", vbVar:"nicaraguaViewBox", projFn:"projectCoordsNI",
    names:{ de:"Nicaragua", hu:"Nicaragua", ro:"Nicaragua", en:"Nicaragua" } },
  { iso:"cr", slug:"costarica", svgFile:"costarica.svg.ts", mapVar:"costaricaMap", vbVar:"costaricaViewBox", projFn:"projectCoordsCR",
    names:{ de:"Costa Rica", hu:"Costa Rica", ro:"Costa Rica", en:"Costa Rica" } },
  { iso:"pa", slug:"panama", svgFile:"panama.svg.ts", mapVar:"panamaMap", vbVar:"panamaViewBox", projFn:"projectCoordsPA",
    names:{ de:"Panama", hu:"Panama", ro:"Panama", en:"Panama" } },
  { iso:"bz", slug:"belize", svgFile:"belize.svg.ts", mapVar:"belizeMap", vbVar:"belizeViewBox", projFn:"projectCoordsBZ",
    names:{ de:"Belize", hu:"Belize", ro:"Belize", en:"Belize" } },
  { iso:"cu", slug:"cuba", svgFile:"cuba.svg.ts", mapVar:"cubaMap", vbVar:"cubaViewBox", projFn:"projectCoordsCU",
    names:{ de:"Kuba", hu:"Kuba", ro:"Cuba", en:"Cuba" } },
  { iso:"jm", slug:"jamaica", svgFile:"jamaica.svg.ts", mapVar:"jamaicaMap", vbVar:"jamaicaViewBox", projFn:"projectCoordsJM",
    names:{ de:"Jamaika", hu:"Jamaica", ro:"Jamaica", en:"Jamaica" } },
  { iso:"ht", slug:"haiti", svgFile:"haiti.svg.ts", mapVar:"haitiMap", vbVar:"haitiViewBox", projFn:"projectCoordsHT",
    names:{ de:"Haiti", hu:"Haiti", ro:"Haiti", en:"Haiti" } },
  { iso:"do", slug:"dominicanrepublic", svgFile:"dominicanrepublic.svg.ts", mapVar:"dominicanrepublicMap", vbVar:"dominicanrepublicViewBox", projFn:"projectCoordsDO",
    names:{ de:"Dominikanische Republik", hu:"Dominikai Köztársaság", ro:"Republica Dominicană", en:"Dominican Republic" } },
  { iso:"bs", slug:"bahamas", svgFile:"bahamas.svg.ts", mapVar:"bahamasMap", vbVar:"bahamasViewBox", projFn:"projectCoordsBS",
    names:{ de:"Bahamas", hu:"Bahama-szigetek", ro:"Bahamas", en:"Bahamas" } },
  { iso:"tt", slug:"trinidad", svgFile:"trinidad.svg.ts", mapVar:"trinidadMap", vbVar:"trinidadViewBox", projFn:"projectCoordsTT",
    names:{ de:"Trinidad", hu:"Trinidad", ro:"Trinidad", en:"Trinidad" } },

  // === South America (2026-05-27) ===
  { iso:"ar", slug:"argentina", svgFile:"argentina.svg.ts", mapVar:"argentinaMap", vbVar:"argentinaViewBox", projFn:"projectCoordsAR",
    names:{ de:"Argentinien", hu:"Argentína", ro:"Argentina", en:"Argentina" } },
  { iso:"bo", slug:"bolivia", svgFile:"bolivia.svg.ts", mapVar:"boliviaMap", vbVar:"boliviaViewBox", projFn:"projectCoordsBO",
    names:{ de:"Bolivien", hu:"Bolívia", ro:"Bolivia", en:"Bolivia" } },
  { iso:"br", slug:"brazil", svgFile:"brazil.svg.ts", mapVar:"brazilMap", vbVar:"brazilViewBox", projFn:"projectCoordsBR",
    names:{ de:"Brasilien", hu:"Brazília", ro:"Brazilia", en:"Brazil" } },
  { iso:"cl", slug:"chile", svgFile:"chile.svg.ts", mapVar:"chileMap", vbVar:"chileViewBox", projFn:"projectCoordsCL",
    names:{ de:"Chile", hu:"Chile", ro:"Chile", en:"Chile" } },
  { iso:"co", slug:"colombia", svgFile:"colombia.svg.ts", mapVar:"colombiaMap", vbVar:"colombiaViewBox", projFn:"projectCoordsCO",
    names:{ de:"Kolumbien", hu:"Kolumbia", ro:"Columbia", en:"Colombia" } },
  { iso:"ec", slug:"ecuador", svgFile:"ecuador.svg.ts", mapVar:"ecuadorMap", vbVar:"ecuadorViewBox", projFn:"projectCoordsEC",
    names:{ de:"Ecuador", hu:"Ecuador", ro:"Ecuador", en:"Ecuador" } },
  { iso:"gy", slug:"guyana", svgFile:"guyana.svg.ts", mapVar:"guyanaMap", vbVar:"guyanaViewBox", projFn:"projectCoordsGY",
    names:{ de:"Guyana", hu:"Guyana", ro:"Guyana", en:"Guyana" } },
  { iso:"py", slug:"paraguay", svgFile:"paraguay.svg.ts", mapVar:"paraguayMap", vbVar:"paraguayViewBox", projFn:"projectCoordsPY",
    names:{ de:"Paraguay", hu:"Paraguay", ro:"Paraguay", en:"Paraguay" } },
  { iso:"pe", slug:"peru", svgFile:"peru.svg.ts", mapVar:"peruMap", vbVar:"peruViewBox", projFn:"projectCoordsPE",
    names:{ de:"Peru", hu:"Peru", ro:"Peru", en:"Peru" } },
  { iso:"sr", slug:"suriname", svgFile:"suriname.svg.ts", mapVar:"surinameMap", vbVar:"surinameViewBox", projFn:"projectCoordsSR",
    names:{ de:"Suriname", hu:"Suriname", ro:"Suriname", en:"Suriname" } },
  { iso:"uy", slug:"uruguay", svgFile:"uruguay.svg.ts", mapVar:"uruguayMap", vbVar:"uruguayViewBox", projFn:"projectCoordsUY",
    names:{ de:"Uruguay", hu:"Uruguay", ro:"Uruguay", en:"Uruguay" } },
  { iso:"ve", slug:"venezuela", svgFile:"venezuela.svg.ts", mapVar:"venezuelaMap", vbVar:"venezuelaViewBox", projFn:"projectCoordsVE",
    names:{ de:"Venezuela", hu:"Venezuela", ro:"Venezuela", en:"Venezuela" } },

  // === Africa (2026-05-27) ===
  { iso:"dz", slug:"algeria", svgFile:"algeria.svg.ts", mapVar:"algeriaMap", vbVar:"algeriaViewBox", projFn:"projectCoordsDZ",
    names:{ de:"Algerien", hu:"Algéria", ro:"Algeria", en:"Algeria" } },
  { iso:"ao", slug:"angola", svgFile:"angola.svg.ts", mapVar:"angolaMap", vbVar:"angolaViewBox", projFn:"projectCoordsAO",
    names:{ de:"Angola", hu:"Angola", ro:"Angola", en:"Angola" } },
  { iso:"bj", slug:"benin", svgFile:"benin.svg.ts", mapVar:"beninMap", vbVar:"beninViewBox", projFn:"projectCoordsBJ",
    names:{ de:"Benin", hu:"Benin", ro:"Benin", en:"Benin" } },
  { iso:"bw", slug:"botswana", svgFile:"botswana.svg.ts", mapVar:"botswanaMap", vbVar:"botswanaViewBox", projFn:"projectCoordsBW",
    names:{ de:"Botswana", hu:"Botswana", ro:"Botswana", en:"Botswana" } },
  { iso:"bf", slug:"burkinafaso", svgFile:"burkinafaso.svg.ts", mapVar:"burkinafasoMap", vbVar:"burkinafasoViewBox", projFn:"projectCoordsBF",
    names:{ de:"Burkina Faso", hu:"Burkina Faso", ro:"Burkina Faso", en:"Burkina Faso" } },
  { iso:"bi", slug:"burundi", svgFile:"burundi.svg.ts", mapVar:"burundiMap", vbVar:"burundiViewBox", projFn:"projectCoordsBI",
    names:{ de:"Burundi", hu:"Burundi", ro:"Burundi", en:"Burundi" } },
  { iso:"cm", slug:"cameroon", svgFile:"cameroon.svg.ts", mapVar:"cameroonMap", vbVar:"cameroonViewBox", projFn:"projectCoordsCM",
    names:{ de:"Kamerun", hu:"Kamerun", ro:"Camerun", en:"Cameroon" } },
  { iso:"cv", slug:"capeverde", svgFile:"capeverde.svg.ts", mapVar:"capeverdeMap", vbVar:"capeverdeViewBox", projFn:"projectCoordsCV",
    names:{ de:"Kap Verde", hu:"Zöld-foki-szigetek", ro:"Capul Verde", en:"Cape Verde" } },
  { iso:"cf", slug:"centralafricanrepublic", svgFile:"centralafricanrepublic.svg.ts", mapVar:"centralafricanrepublicMap", vbVar:"centralafricanrepublicViewBox", projFn:"projectCoordsCF",
    names:{ de:"Zentralafrikanische Republik", hu:"Közép-afrikai Köztársaság", ro:"Republica Centrafricană", en:"Central African Republic" } },
  { iso:"td", slug:"chad", svgFile:"chad.svg.ts", mapVar:"chadMap", vbVar:"chadViewBox", projFn:"projectCoordsTD",
    names:{ de:"Tschad", hu:"Csád", ro:"Ciad", en:"Chad" } },
  { iso:"km", slug:"comoros", svgFile:"comoros.svg.ts", mapVar:"comorosMap", vbVar:"comorosViewBox", projFn:"projectCoordsKM",
    names:{ de:"Komoren", hu:"Comore-szigetek", ro:"Comore", en:"Comoros" } },
  { iso:"cg", slug:"congo", svgFile:"congo.svg.ts", mapVar:"congoMap", vbVar:"congoViewBox", projFn:"projectCoordsCG",
    names:{ de:"Kongo", hu:"Kongó", ro:"Congo", en:"Congo" } },
  { iso:"cd", slug:"drcongo", svgFile:"drcongo.svg.ts", mapVar:"drcongoMap", vbVar:"drcongoViewBox", projFn:"projectCoordsCD",
    names:{ de:"DR Kongo", hu:"Kongói DK", ro:"RD Congo", en:"DR Congo" } },
  { iso:"dj", slug:"djibouti", svgFile:"djibouti.svg.ts", mapVar:"djiboutiMap", vbVar:"djiboutiViewBox", projFn:"projectCoordsDJ",
    names:{ de:"Dschibuti", hu:"Dzsibuti", ro:"Djibouti", en:"Djibouti" } },
  { iso:"eg", slug:"egypt", svgFile:"egypt.svg.ts", mapVar:"egyptMap", vbVar:"egyptViewBox", projFn:"projectCoordsEG",
    names:{ de:"Ägypten", hu:"Egyiptom", ro:"Egipt", en:"Egypt" } },
  { iso:"gq", slug:"equatorialguinea", svgFile:"equatorialguinea.svg.ts", mapVar:"equatorialguineaMap", vbVar:"equatorialguineaViewBox", projFn:"projectCoordsGQ",
    names:{ de:"Äquatorialguinea", hu:"Egyenlítői-Guinea", ro:"Guineea Ecuatorială", en:"Equatorial Guinea" } },
  { iso:"er", slug:"eritrea", svgFile:"eritrea.svg.ts", mapVar:"eritreaMap", vbVar:"eritreaViewBox", projFn:"projectCoordsER",
    names:{ de:"Eritrea", hu:"Eritrea", ro:"Eritreea", en:"Eritrea" } },
  { iso:"sz", slug:"eswatini", svgFile:"eswatini.svg.ts", mapVar:"eswatiniMap", vbVar:"eswatiniViewBox", projFn:"projectCoordsSZ",
    names:{ de:"Eswatini", hu:"Eswatini", ro:"Eswatini", en:"Eswatini" } },
  { iso:"et", slug:"ethiopia", svgFile:"ethiopia.svg.ts", mapVar:"ethiopiaMap", vbVar:"ethiopiaViewBox", projFn:"projectCoordsET",
    names:{ de:"Äthiopien", hu:"Etiópia", ro:"Etiopia", en:"Ethiopia" } },
  { iso:"ga", slug:"gabon", svgFile:"gabon.svg.ts", mapVar:"gabonMap", vbVar:"gabonViewBox", projFn:"projectCoordsGA",
    names:{ de:"Gabun", hu:"Gabon", ro:"Gabon", en:"Gabon" } },
  { iso:"gm", slug:"gambia", svgFile:"gambia.svg.ts", mapVar:"gambiaMap", vbVar:"gambiaViewBox", projFn:"projectCoordsGM",
    names:{ de:"Gambia", hu:"Gambia", ro:"Gambia", en:"Gambia" } },
  { iso:"gh", slug:"ghana", svgFile:"ghana.svg.ts", mapVar:"ghanaMap", vbVar:"ghanaViewBox", projFn:"projectCoordsGH",
    names:{ de:"Ghana", hu:"Ghána", ro:"Ghana", en:"Ghana" } },
  { iso:"gn", slug:"guinea", svgFile:"guinea.svg.ts", mapVar:"guineaMap", vbVar:"guineaViewBox", projFn:"projectCoordsGN",
    names:{ de:"Guinea", hu:"Guinea", ro:"Guineea", en:"Guinea" } },
  { iso:"gw", slug:"guineabissau", svgFile:"guineabissau.svg.ts", mapVar:"guineabissauMap", vbVar:"guineabissauViewBox", projFn:"projectCoordsGW",
    names:{ de:"Guinea-Bissau", hu:"Bissau-Guinea", ro:"Guineea-Bissau", en:"Guinea-Bissau" } },
  { iso:"ci", slug:"ivorycoast", svgFile:"ivorycoast.svg.ts", mapVar:"ivorycoastMap", vbVar:"ivorycoastViewBox", projFn:"projectCoordsCI",
    names:{ de:"Elfenbeinküste", hu:"Elefántcsontpart", ro:"Coasta de Fildeș", en:"Ivory Coast" } },
  { iso:"ke", slug:"kenya", svgFile:"kenya.svg.ts", mapVar:"kenyaMap", vbVar:"kenyaViewBox", projFn:"projectCoordsKE",
    names:{ de:"Kenia", hu:"Kenya", ro:"Kenya", en:"Kenya" } },
  { iso:"ls", slug:"lesotho", svgFile:"lesotho.svg.ts", mapVar:"lesothoMap", vbVar:"lesothoViewBox", projFn:"projectCoordsLS",
    names:{ de:"Lesotho", hu:"Lesotho", ro:"Lesotho", en:"Lesotho" } },
  { iso:"lr", slug:"liberia", svgFile:"liberia.svg.ts", mapVar:"liberiaMap", vbVar:"liberiaViewBox", projFn:"projectCoordsLR",
    names:{ de:"Liberia", hu:"Libéria", ro:"Liberia", en:"Liberia" } },
  { iso:"ly", slug:"libya", svgFile:"libya.svg.ts", mapVar:"libyaMap", vbVar:"libyaViewBox", projFn:"projectCoordsLY",
    names:{ de:"Libyen", hu:"Líbia", ro:"Libia", en:"Libya" } },
  { iso:"mg", slug:"madagascar", svgFile:"madagascar.svg.ts", mapVar:"madagascarMap", vbVar:"madagascarViewBox", projFn:"projectCoordsMG",
    names:{ de:"Madagaskar", hu:"Madagaszkár", ro:"Madagascar", en:"Madagascar" } },
  { iso:"mw", slug:"malawi", svgFile:"malawi.svg.ts", mapVar:"malawiMap", vbVar:"malawiViewBox", projFn:"projectCoordsMW",
    names:{ de:"Malawi", hu:"Malawi", ro:"Malawi", en:"Malawi" } },
  { iso:"ml", slug:"mali", svgFile:"mali.svg.ts", mapVar:"maliMap", vbVar:"maliViewBox", projFn:"projectCoordsML",
    names:{ de:"Mali", hu:"Mali", ro:"Mali", en:"Mali" } },
  { iso:"mr", slug:"mauritania", svgFile:"mauritania.svg.ts", mapVar:"mauritaniaMap", vbVar:"mauritaniaViewBox", projFn:"projectCoordsMR",
    names:{ de:"Mauretanien", hu:"Mauritánia", ro:"Mauritania", en:"Mauritania" } },
  { iso:"mu", slug:"mauritius", svgFile:"mauritius.svg.ts", mapVar:"mauritiusMap", vbVar:"mauritiusViewBox", projFn:"projectCoordsMU",
    names:{ de:"Mauritius", hu:"Mauritius", ro:"Mauritius", en:"Mauritius" } },
  { iso:"ma", slug:"morocco", svgFile:"morocco.svg.ts", mapVar:"moroccoMap", vbVar:"moroccoViewBox", projFn:"projectCoordsMA",
    names:{ de:"Marokko", hu:"Marokkó", ro:"Maroc", en:"Morocco" } },
  { iso:"mz", slug:"mozambique", svgFile:"mozambique.svg.ts", mapVar:"mozambiqueMap", vbVar:"mozambiqueViewBox", projFn:"projectCoordsMZ",
    names:{ de:"Mosambik", hu:"Mozambik", ro:"Mozambic", en:"Mozambique" } },
  { iso:"na", slug:"namibia", svgFile:"namibia.svg.ts", mapVar:"namibiaMap", vbVar:"namibiaViewBox", projFn:"projectCoordsNA",
    names:{ de:"Namibia", hu:"Namíbia", ro:"Namibia", en:"Namibia" } },
  { iso:"ne", slug:"niger", svgFile:"niger.svg.ts", mapVar:"nigerMap", vbVar:"nigerViewBox", projFn:"projectCoordsNE",
    names:{ de:"Niger", hu:"Niger", ro:"Niger", en:"Niger" } },
  { iso:"ng", slug:"nigeria", svgFile:"nigeria.svg.ts", mapVar:"nigeriaMap", vbVar:"nigeriaViewBox", projFn:"projectCoordsNG",
    names:{ de:"Nigeria", hu:"Nigéria", ro:"Nigeria", en:"Nigeria" } },
  { iso:"rw", slug:"rwanda", svgFile:"rwanda.svg.ts", mapVar:"rwandaMap", vbVar:"rwandaViewBox", projFn:"projectCoordsRW",
    names:{ de:"Ruanda", hu:"Ruanda", ro:"Rwanda", en:"Rwanda" } },
  { iso:"st", slug:"saotome", svgFile:"saotome.svg.ts", mapVar:"saotomeMap", vbVar:"saotomeViewBox", projFn:"projectCoordsST",
    names:{ de:"São Tomé und Príncipe", hu:"São Tomé és Príncipe", ro:"São Tomé și Príncipe", en:"São Tomé and Príncipe" } },
  { iso:"sn", slug:"senegal", svgFile:"senegal.svg.ts", mapVar:"senegalMap", vbVar:"senegalViewBox", projFn:"projectCoordsSN",
    names:{ de:"Senegal", hu:"Szenegál", ro:"Senegal", en:"Senegal" } },
  { iso:"sc", slug:"seychelles", svgFile:"seychelles.svg.ts", mapVar:"seychellesMap", vbVar:"seychellesViewBox", projFn:"projectCoordsSC",
    names:{ de:"Seychellen", hu:"Seychelle-szigetek", ro:"Seychelles", en:"Seychelles" } },
  { iso:"sl", slug:"sierraleone", svgFile:"sierraleone.svg.ts", mapVar:"sierraleoneMap", vbVar:"sierraleoneViewBox", projFn:"projectCoordsSL",
    names:{ de:"Sierra Leone", hu:"Sierra Leone", ro:"Sierra Leone", en:"Sierra Leone" } },
  { iso:"so", slug:"somalia", svgFile:"somalia.svg.ts", mapVar:"somaliaMap", vbVar:"somaliaViewBox", projFn:"projectCoordsSO",
    names:{ de:"Somalia", hu:"Szomália", ro:"Somalia", en:"Somalia" } },
  { iso:"za", slug:"southafrica", svgFile:"southafrica.svg.ts", mapVar:"southafricaMap", vbVar:"southafricaViewBox", projFn:"projectCoordsZA",
    names:{ de:"Südafrika", hu:"Dél-Afrika", ro:"Africa de Sud", en:"South Africa" } },
  { iso:"ss", slug:"southsudan", svgFile:"southsudan.svg.ts", mapVar:"southsudanMap", vbVar:"southsudanViewBox", projFn:"projectCoordsSS",
    names:{ de:"Südsudan", hu:"Dél-Szudán", ro:"Sudanul de Sud", en:"South Sudan" } },
  { iso:"sd", slug:"sudan", svgFile:"sudan.svg.ts", mapVar:"sudanMap", vbVar:"sudanViewBox", projFn:"projectCoordsSD",
    names:{ de:"Sudan", hu:"Szudán", ro:"Sudan", en:"Sudan" } },
  { iso:"tz", slug:"tanzania", svgFile:"tanzania.svg.ts", mapVar:"tanzaniaMap", vbVar:"tanzaniaViewBox", projFn:"projectCoordsTZ",
    names:{ de:"Tansania", hu:"Tanzánia", ro:"Tanzania", en:"Tanzania" } },
  { iso:"tg", slug:"togo", svgFile:"togo.svg.ts", mapVar:"togoMap", vbVar:"togoViewBox", projFn:"projectCoordsTG",
    names:{ de:"Togo", hu:"Togo", ro:"Togo", en:"Togo" } },
  { iso:"tn", slug:"tunisia", svgFile:"tunisia.svg.ts", mapVar:"tunisiaMap", vbVar:"tunisiaViewBox", projFn:"projectCoordsTN",
    names:{ de:"Tunesien", hu:"Tunézia", ro:"Tunisia", en:"Tunisia" } },
  { iso:"ug", slug:"uganda", svgFile:"uganda.svg.ts", mapVar:"ugandaMap", vbVar:"ugandaViewBox", projFn:"projectCoordsUG",
    names:{ de:"Uganda", hu:"Uganda", ro:"Uganda", en:"Uganda" } },
  { iso:"zm", slug:"zambia", svgFile:"zambia.svg.ts", mapVar:"zambiaMap", vbVar:"zambiaViewBox", projFn:"projectCoordsZM",
    names:{ de:"Sambia", hu:"Zambia", ro:"Zambia", en:"Zambia" } },
  { iso:"zw", slug:"zimbabwe", svgFile:"zimbabwe.svg.ts", mapVar:"zimbabweMap", vbVar:"zimbabweViewBox", projFn:"projectCoordsZW",
    names:{ de:"Simbabwe", hu:"Zimbabwe", ro:"Zimbabwe", en:"Zimbabwe" } },
];

const HINT: Record<Lang, string> = {
  de: "Tippe auf einen Ort für Details",
  hu: "Koppints egy helyre a részletekért",
  ro: "Atinge un loc pentru detalii",
  en: "Tap a place for details",
};
const MORE: Record<Lang, string> = { de:"Mehr erfahren", hu:"Bővebben", ro:"Detalii", en:"Read more" };
const BACK: Record<Lang, string> = { de:"Zurück", hu:"Vissza", ro:"Înapoi", en:"Back" };
const TITLE_SUFFIX: Record<Lang, string> = { de:"Karte", hu:"térkép", ro:"hartă", en:"map" };
const SEARCH_PH: Record<Lang, string> = { de:"Suche…", hu:"Keresés…", ro:"Caută…", en:"Search…" };

// Type → group mapping (5 visible groups). Unknown types fall into "other".
type Grp = "city" | "sight" | "nature" | "history" | "industry" | "other";
const TYPE_GROUP: Record<string, Grp> = {
  city:"city", town:"city", village:"city",
  sight:"sight", landmark:"sight", monument:"sight", "kid-landmark":"sight",
  mountain:"nature", peak:"nature", lake:"nature", river:"nature", valley:"nature",
  forest:"nature", park:"nature", wildlife:"nature", "animal-habitat":"nature",
  geo:"nature", nature:"nature",
  historical:"history", geschichte:"history",
  industry:"industry", factory:"industry", port:"industry", agriculture:"industry",
};
function groupOf(t?: string): Grp { return (t && TYPE_GROUP[t]) || "other"; }

// Chip labels per group per lang
const GROUP_LABELS: Record<Grp, Record<Lang, string>> = {
  city:     { de:"Städte", hu:"Városok",    ro:"Orașe",     en:"Cities" },
  sight:    { de:"Sehensw.",hu:"Látnivalók", ro:"Atracții",  en:"Sights" },
  nature:   { de:"Natur",  hu:"Természet",   ro:"Natură",    en:"Nature" },
  history:  { de:"Geschichte",hu:"Történelem",ro:"Istorie",  en:"History" },
  industry: { de:"Industrie",hu:"Ipar",      ro:"Industrie", en:"Industry" },
  other:    { de:"Sonst.", hu:"Egyéb",      ro:"Altele",    en:"Other" },
};

type SlimPoi = { id:string; type:string; grp:Grp; cx:number; cy:number; name:any; urls?:Record<string,string> };

// Load the pre-built POI id → URL per lang index (built by build-poi-url-index.mts).
const URL_INDEX_PATH = path.join(process.cwd(), "public", "data", "_poi-url-index.json");
let POI_URLS: Record<string, Record<string, string>> = {};
if (fs.existsSync(URL_INDEX_PATH)) {
  try { POI_URLS = JSON.parse(fs.readFileSync(URL_INDEX_PATH, "utf8")); } catch {}
}

function slimPoi(p: any, proj: (lon:number,lat:number)=>[number,number], W:number, H:number): SlimPoi | null {
  if (!p?.coords || !Array.isArray(p.coords) || p.coords.length < 2) return null;
  const [lon, lat] = p.coords;
  if (typeof lon !== "number" || typeof lat !== "number") return null;
  if (p.type === "country") return null;
  let xy: [number, number];
  try { xy = proj(lon, lat); } catch { return null; }
  const [cx, cy] = xy;
  if (cx < -5 || cx > W + 5 || cy < -5 || cy > H + 5) return null;
  const name: any = {}, desc: any = {};
  for (const l of LANGS) {
    if (p.name?.[l]) name[l] = p.name[l];
  }
  if (!Object.keys(name).length) return null;
  const urls = POI_URLS[p.id];
  const t = p.type ?? "city";
  return {
    id: p.id, type: t, grp: groupOf(t),
    cx: +cx.toFixed(1), cy: +cy.toFixed(1),
    name,
    ...(urls ? { urls } : {}),
  };
}

function parseViewBox(vb: string): { w: number; h: number } {
  const m = vb.split(/\s+/).map(Number);
  return { w: m[2] || 1000, h: m[3] || 1000 };
}

// Drop near-duplicate consecutive points and round to 1 decimal.
// `minDist` is in SVG units; 0.5 is invisible at country zoom.
function simplifyPath(d: string, minDist = 0.5): string {
  const parts = d.match(/[A-Za-z][^A-Za-z]*/g) || [];
  let lastX = -1e9, lastY = -1e9;
  const out: string[] = [];
  const r = (n: number) => (Math.round(n * 10) / 10).toString();
  for (const part of parts) {
    const cmd = part[0];
    const argStr = part.slice(1).trim();
    if ((cmd === "M" || cmd === "L") && argStr) {
      const nums = argStr.split(/[,\s]+/).map(Number);
      if (nums.length >= 2 && !isNaN(nums[0]) && !isNaN(nums[1])) {
        const x = nums[0], y = nums[1];
        const dx = x - lastX, dy = y - lastY;
        if (cmd === "M" || Math.hypot(dx, dy) >= minDist) {
          out.push(cmd + r(x) + "," + r(y));
          lastX = x; lastY = y;
        }
        continue;
      }
    }
    if (cmd === "Z" || cmd === "z") {
      out.push("Z");
      lastX = -1e9; lastY = -1e9;
      continue;
    }
    // Fallback: preserve unknown commands as-is
    out.push(part);
  }
  return out.join("");
}

function escAttr(s: string): string {
  return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function escText(s: string): string {
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function renderHtml(c: Country, lang: Lang, regions: any[], pois: SlimPoi[], viewBox: string, W: number, H: number): string {
  const t = `${c.names[lang]} ${TITLE_SUFFIX[lang]}`;
  const hint = HINT[lang], more = MORE[lang], back = BACK[lang], searchPh = SEARCH_PH[lang];
  const langLinks = LANGS.map(l => l === lang
    ? `<span class="lang on">${l.toUpperCase()}</span>`
    : `<a class="lang" href="./?lang=${l}">${l.toUpperCase()}</a>`
  ).join("");

  // Count POIs per group for chip badges
  const grpCount: Record<string, number> = { city:0, sight:0, nature:0, history:0, industry:0, other:0 };
  for (const p of pois) grpCount[p.grp] = (grpCount[p.grp]||0) + 1;

  // Build clusters at default scale=1. Threshold in viewBox units: ~8 CSS px.
  const CLUSTER_THRESH = Math.max(15, Math.min(W, H) / 60);
  type Cluster = { cx: number; cy: number; pois: SlimPoi[] };
  const clusters: Cluster[] = [];
  for (const p of pois) {
    let added = false;
    for (const cl of clusters) {
      if (Math.hypot(p.cx - cl.cx, p.cy - cl.cy) <= CLUSTER_THRESH) {
        cl.pois.push(p);
        const n = cl.pois.length;
        cl.cx = (cl.cx * (n - 1) + p.cx) / n;
        cl.cy = (cl.cy * (n - 1) + p.cy) / n;
        added = true;
        break;
      }
    }
    if (!added) clusters.push({ cx: p.cx, cy: p.cy, pois: [p] });
  }
  const multiClusters = clusters.filter(c => c.pois.length > 1);
  const clusteredIds = new Set<string>();
  for (const c of multiClusters) for (const p of c.pois) clusteredIds.add(p.id);
  // Cluster color = majority group color
  function clusterColor(cl: Cluster): string {
    const cnt: Record<string, number> = {};
    for (const p of cl.pois) cnt[p.grp] = (cnt[p.grp]||0) + 1;
    const top = Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0][0];
    return ({city:'#60a5fa',sight:'#fbbf24',nature:'#22c55e',history:'#c084fc',industry:'#fb923c',other:'#9ca3af'} as any)[top] || '#9ca3af';
  }
  const GROUPS: Grp[] = ["city","sight","nature","history","industry","other"];
  // Tiny inline SVG icons per group (16x16). Single-color, currentColor.
  const ICON: Record<Grp, string> = {
    city: '<path d="M3 21V8l5-3v3l5-3v16M3 12h2m4 0h2m-2 4h2m-2-8h2m4 4h2m-2 4h2m-2-8h2"/>',
    sight: '<path d="M8 1l2.09 4.74L15 6.4l-3.5 3.41.83 4.83L8 12.27 3.67 14.64 4.5 9.81 1 6.4l4.91-.66z"/>',
    nature: '<path d="M8 14V9M8 9l-3 3M8 9l3 3M8 9V5l-3-2M8 5l3-2"/>',
    history: '<path d="M3 13V6l5-3 5 3v7M3 13h10M5 13V6m6 7V6"/>',
    industry: '<path d="M2 13V6l4 2V6l4 2V6l4 2v5z"/>',
    other: '<circle cx="8" cy="8" r="3"/>',
  };
  const GCOL: Record<Grp,string> = { city:"#60a5fa", sight:"#fbbf24", nature:"#22c55e", history:"#c084fc", industry:"#fb923c", other:"#9ca3af" };
  const chipsHtml = GROUPS
    .filter(g => grpCount[g] > 0)
    .map(g => `<button class="chip on g-${g}" data-g="${g}" aria-label="${GROUP_LABELS[g][lang]}" title="${GROUP_LABELS[g][lang]} (${grpCount[g]})"><svg viewBox="0 0 16 16" width="14" height="14" stroke="${GCOL[g]}" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round">${ICON[g]}</svg></button>`)
    .join("");
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=3">
<title>${t} — Plizio</title>
<meta name="description" content="${hint}">
<link rel="canonical" href="https://plizio.com/${c.slug}-map/${lang==='hu'?'':lang+'/'}">
${LANGS.map(L => `<link rel="alternate" hreflang="${L}" href="https://plizio.com/${c.slug}-map/${L==='hu'?'':L+'/'}">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="https://plizio.com/${c.slug}-map/">
<meta property="og:title" content="${t} — Plizio">
<meta property="og:description" content="${hint}">
<meta property="og:url" content="https://plizio.com/${c.slug}-map/${lang==='hu'?'':lang+'/'}">
<meta property="og:type" content="website">
<style>
*{box-sizing:border-box}
html,body{margin:0;padding:0;height:100%;background:#060614;color:#fff;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;overflow:hidden}
header{display:flex;align-items:center;gap:.6rem;padding:.65rem .9rem;background:#0a0a1f;border-bottom:1px solid #ffffff14;position:relative;z-index:5}
header a.back{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#ffffff14;color:#fff;text-decoration:none;font-weight:700}
header a.back:active{background:#ffffff28}
header h1{margin:0;font-size:1rem;font-weight:800;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
header .langs{display:flex;gap:.25rem}
.lang{font-size:.7rem;font-weight:700;padding:.25rem .45rem;border-radius:6px;color:#ffffffb0;text-decoration:none;background:#ffffff10}
.lang.on{background:#3b82f6;color:#fff}
#stage{position:absolute;inset:101px 0 0 0;overflow:hidden;touch-action:none;background:radial-gradient(ellipse at 50% 30%,#0e1233 0%,#060614 70%)}
#svg{width:100%;height:100%;display:block;cursor:grab}
#svg.drag{cursor:grabbing}
.region{fill:#1a2240;stroke:#7aa8ff;stroke-width:1.1;stroke-opacity:.75;transition:fill .15s}
.region:hover{fill:#2d3a78}
.label{fill:#ffffff70;font-size:11px;font-weight:600;pointer-events:none;text-anchor:middle}
.poi{cursor:pointer}
.poi circle{fill:#9ca3af;stroke:#000;stroke-width:.5;transition:r .12s,opacity .12s}
.poi.g-city circle{fill:#60a5fa}
.poi.g-sight circle{fill:#fbbf24}
.poi.g-nature circle{fill:#22c55e}
.poi.g-history circle{fill:#c084fc}
.poi.g-industry circle{fill:#fb923c}
.poi.g-other circle{fill:#9ca3af}
.poi.dim{opacity:.18}
.poi.match circle{stroke:#fff;stroke-width:1.4}
.poi:hover circle,.poi.active circle{r:7;fill:#fff;opacity:1}
.controls{position:absolute;top:53px;left:0;right:0;z-index:4;padding:.4rem .55rem;display:flex;gap:.3rem;align-items:center;background:linear-gradient(180deg,#060614 0%,#06061400 100%)}
.chips{display:flex;gap:.25rem;flex-shrink:0}
.chip{flex-shrink:0;width:30px;height:30px;border-radius:8px;border:1px solid #ffffff20;background:#0d1230;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;user-select:none;padding:0;opacity:.45;transition:opacity .12s,background .12s,border-color .12s}
.chip.on{opacity:1}
.chip.on.g-city{background:#60a5fa22;border-color:#60a5fa70}
.chip.on.g-sight{background:#fbbf2422;border-color:#fbbf2470}
.chip.on.g-nature{background:#22c55e22;border-color:#22c55e70}
.chip.on.g-history{background:#c084fc22;border-color:#c084fc70}
.chip.on.g-industry{background:#fb923c22;border-color:#fb923c70}
.chip.on.g-other{background:#9ca3af22;border-color:#9ca3af70}
.chip svg{display:block}
.search{flex:1;min-width:0;display:flex;align-items:center;gap:.3rem;background:#0d1230;border:1px solid #ffffff20;border-radius:8px;padding:.15rem .5rem .15rem .6rem;height:30px}
.search input{flex:1;border:none;outline:none;background:transparent;color:#fff;font-size:.82rem;padding:.25rem 0;min-width:0;font-family:inherit}
.search input::placeholder{color:#ffffff70}
.search-results{position:absolute;top:34px;left:0;right:0;background:#0d1230;border:1px solid #ffffff20;border-radius:8px;max-height:280px;overflow-y:auto;display:none;z-index:10;box-shadow:0 4px 16px #00000060}
.search.has-q .search-results.has-hits{display:block}
.search-results a{display:flex;align-items:center;gap:.4rem;padding:.45rem .55rem;color:#fff;text-decoration:none;font-size:.8rem;border-bottom:1px solid #ffffff10;cursor:pointer}
.search-results a:last-child{border-bottom:none}
.search-results a:hover,.search-results a.active{background:#1a2055}
.search-results .dot{width:8px;height:8px;border-radius:50%;flex:none}
.search-results .nm{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.search-results .gr{font-size:.65rem;color:#ffffff70;text-transform:uppercase;letter-spacing:.04em}
.search button{background:transparent;border:none;color:#ffffff80;font-size:1rem;cursor:pointer;padding:0 .15rem;display:none;line-height:1}
.search.has-q button{display:block}
.poi.hidden{display:none !important}
.poi.reveal{display:initial}
.cluster.hidden{display:none !important}
.cluster{cursor:pointer}
.cluster circle{transition:r .12s}
.cluster:hover circle{r:14}
/* At default zoom: clusters visible, in-cluster POIs hidden */
.poi.in-cluster{display:none}
/* At higher zoom: clusters hide, in-cluster POIs become visible */
#svg.expand .cluster{display:none}
#svg.expand .poi.in-cluster{display:initial}
.hint{position:absolute;top:102px;left:50%;transform:translateX(-50%);background:#000000a0;backdrop-filter:blur(8px);padding:.4rem .8rem;border-radius:999px;font-size:.75rem;color:#ffffffc0;pointer-events:none;z-index:3;animation:fadeOut 4s 2s forwards}
@keyframes fadeOut{to{opacity:0}}
.popup{position:absolute;bottom:0;left:0;right:0;background:#0d1230;border-top:1px solid #ffffff20;padding:1rem 1.2rem 1.4rem;transform:translateY(100%);transition:transform .25s;z-index:10;box-shadow:0 -10px 40px #00000080}
.popup.open{transform:translateY(0)}
.popup .x{position:absolute;top:.5rem;right:.7rem;width:32px;height:32px;border-radius:50%;background:#ffffff14;border:none;color:#fff;font-size:1.1rem;cursor:pointer;z-index:2}
.popup h2{margin:0 0 .3rem;font-size:1.1rem;font-weight:800}
.popup .type{font-size:.7rem;color:#ffffff70;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.5rem}
.popup p{margin:0 0 .8rem;font-size:.85rem;line-height:1.45;color:#ffffffc8}
.popup a.more{display:inline-block;background:#3b82f6;color:#fff;text-decoration:none;font-weight:700;padding:.55rem 1rem;border-radius:8px;font-size:.85rem}
.popup .single{display:none}.popup .list{display:none}
.popup.mode-single .single{display:block}
.popup.mode-list .list{display:block;max-height:60vh;overflow-y:auto;margin-right:-.5rem;padding-right:.5rem}
.popup .list .lh{font-size:.75rem;color:#ffffff80;margin:0 0 .5rem;text-transform:uppercase;letter-spacing:.05em}
.popup .list a{display:flex;align-items:center;gap:.55rem;padding:.55rem .55rem;border-radius:8px;text-decoration:none;color:#fff;font-size:.88rem;border-bottom:1px solid #ffffff10}
.popup .list a:active{background:#ffffff14}
.popup .list a .dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.popup .list a .n{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.popup .list a .g{font-size:.65rem;color:#ffffff70;text-transform:uppercase;letter-spacing:.04em;flex-shrink:0}
.popup .list .nl{padding:.6rem;color:#ffffff70;font-size:.85rem;font-style:italic}
.zoom{position:absolute;right:.7rem;bottom:.7rem;display:flex;flex-direction:column;gap:.35rem;z-index:4}
.zoom button{width:38px;height:38px;border-radius:8px;border:1px solid #ffffff20;background:#0d1230;color:#fff;font-size:1.2rem;font-weight:800;cursor:pointer}
.zoom button:active{background:#1a2240}
</style>
</head>
<body>
<header>
<a class="back" href="/europe-map/" aria-label="${back}">‹</a>
<h1>${t}</h1>
<div class="langs">${langLinks}</div>
</header>
<div class="controls">
<div class="chips">${chipsHtml}</div>
<div class="search" id="searchWrap"><input id="searchIn" type="search" placeholder="${searchPh}" autocomplete="off"><button id="searchX" aria-label="clear">×</button><div class="search-results" id="searchRes"></div></div>
</div>
<div id="stage">
  <svg id="svg" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet" aria-label="${t}">
    <g id="gR">${regions.map(r => `<path class="region" data-id="${escAttr(r.id)}" d="${r.path}"/>`).join("")}</g>
    <g id="gL">${regions.filter(r => r.labelX && r.labelY).map(r => `<text class="label" x="${r.labelX}" y="${r.labelY}">${escText((r.name && (r.name[lang] || r.name.en)) || r.id)}</text>`).join("")}</g>
    <g id="gP">${pois.map(p => {
      const url = p.urls?.[lang];
      const nm = p.name[lang]||p.name.en||p.id;
      const allNames = Array.from(new Set([p.name.de, p.name.hu, p.name.ro, p.name.en].filter(Boolean).map((n:any)=>String(n).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")))).join("|");
      const inCluster = clusteredIds.has(p.id);
      const cls = `poi g-${p.grp}${inCluster ? " in-cluster" : ""}`;
      const attrs = `data-id="${escAttr(p.id)}" data-name="${escAttr(nm)}" data-search="${escAttr(allNames)}" data-grp="${p.grp}"${url?` data-url="${escAttr(url)}"`:""}`;
      const r = p.grp === "city" ? 5 : 3.5;
      return `<g class="${cls}" ${attrs} transform="translate(${p.cx},${p.cy})"><circle r="${r}"/></g>`;
    }).join("")}</g>
    <g id="gC">${multiClusters.map((cl, i) => {
      const r = Math.min(13, 6 + Math.log2(cl.pois.length) * 2);
      const col = clusterColor(cl);
      const grps = Array.from(new Set(cl.pois.map(p => p.grp))).join(",");
      return `<g class="cluster" data-i="${i}" data-grps="${grps}" data-cx="${cl.cx.toFixed(1)}" data-cy="${cl.cy.toFixed(1)}" transform="translate(${cl.cx.toFixed(1)},${cl.cy.toFixed(1)})"><circle r="${r.toFixed(1)}" fill="${col}" stroke="#000" stroke-width=".8" fill-opacity=".88"/><text y="3.5" text-anchor="middle" font-size="${(r*1.1).toFixed(1)}" font-weight="800" fill="#0a0a1f">${cl.pois.length}</text></g>`;
    }).join("")}</g>
  </svg>
  <div class="zoom"><button id="zin" aria-label="zoom in">+</button><button id="zout" aria-label="zoom out">−</button></div>
</div>
<div class="hint">${hint}</div>
<div class="popup" id="popup" role="dialog" aria-modal="false">
  <button class="x" id="px" aria-label="close">×</button>
  <div class="single">
    <div class="type" id="ptype"></div>
    <h2 id="pname"></h2>
    <a class="more" id="pmore" href="#">${more} →</a>
  </div>
  <div class="list" id="plist"></div>
</div>
<script>
const LANG=${JSON.stringify(lang)},W=${W},H=${H};
const CLUSTERS=${JSON.stringify(multiClusters.map(cl => cl.pois.map(p => ({id:p.id, name:p.name[lang]||p.name.en||p.id, grp:p.grp, url:p.urls?.[lang]||null, cx:p.cx, cy:p.cy}))))};
const svg=document.getElementById('svg'),stage=document.getElementById('stage');
const gR=document.getElementById('gR'),gL=document.getElementById('gL'),gP=document.getElementById('gP'),gC=document.getElementById('gC');
const EXPAND_SCALE=6;
let s=1,tx=0,ty=0;
function ap(){const tr='translate('+tx+','+ty+') scale('+s+')';gR.setAttribute('transform',tr);gL.setAttribute('transform',tr);gP.setAttribute('transform',tr);if(gC)gC.setAttribute('transform',tr);svg.classList.toggle('expand',s>=EXPAND_SCALE)}
function clmp(v){return Math.max(.5,Math.min(8,v))}
function toVb(cx,cy){const r=svg.getBoundingClientRect();return[(cx-r.left)*(W/r.width),(cy-r.top)*(H/r.height)]}
function zoomAt(f,cx,cy){const[vx,vy]=toVb(cx,cy);const ns=clmp(s*f);const k=ns/s;tx=vx-k*(vx-tx);ty=vy-k*(vy-ty);s=ns;ap()}
function zoomCenter(f){const r=svg.getBoundingClientRect();zoomAt(f,r.left+r.width/2,r.top+r.height/2)}
let dr=false,dx=0,dy=0;
svg.addEventListener('pointerdown',e=>{if(e.target.closest('.poi'))return;if(e.isPrimary===false)return;dr=true;dx=e.clientX;dy=e.clientY;svg.classList.add('drag');svg.setPointerCapture(e.pointerId)});
svg.addEventListener('pointermove',e=>{if(!dr)return;const r=svg.getBoundingClientRect();const k=W/r.width;tx+=(e.clientX-dx)*k;ty+=(e.clientY-dy)*k;dx=e.clientX;dy=e.clientY;ap()});
svg.addEventListener('pointerup',()=>{dr=false;svg.classList.remove('drag')});
svg.addEventListener('pointercancel',()=>{dr=false;svg.classList.remove('drag')});
svg.addEventListener('wheel',e=>{e.preventDefault();zoomAt(e.deltaY<0?1.15:1/1.15,e.clientX,e.clientY)},{passive:false});
document.getElementById('zin').onclick=()=>zoomCenter(1.3);
document.getElementById('zout').onclick=()=>zoomCenter(1/1.3);
let pD=0,pS=1;
svg.addEventListener('touchstart',e=>{if(e.touches.length===2){const[a,b]=e.touches;pD=Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);pS=s;dr=false}},{passive:true});
svg.addEventListener('touchmove',e=>{if(e.touches.length===2){const[a,b]=e.touches;const d=Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);const cx=(a.clientX+b.clientX)/2,cy=(a.clientY+b.clientY)/2;const f=(d/pD)*(pS/s);zoomAt(f,cx,cy);e.preventDefault()}},{passive:false});
const pop=document.getElementById('popup');
const GCOL2={city:'#60a5fa',sight:'#fbbf24',nature:'#22c55e',history:'#c084fc',industry:'#fb923c',other:'#9ca3af'};
function clearMode(){pop.classList.remove('mode-single','mode-list')}
function openPopup(el){document.querySelectorAll('.poi.active').forEach(n=>n.classList.remove('active'));el.classList.add('active');const t=el.getAttribute('data-grp')||'';document.getElementById('ptype').textContent=t;document.getElementById('pname').textContent=el.getAttribute('data-name')||el.getAttribute('data-id');const u=el.getAttribute('data-url');const moreBtn=document.getElementById('pmore');if(u){moreBtn.href=u;moreBtn.style.display=''}else{moreBtn.style.display='none'}clearMode();pop.classList.add('mode-single','open')}
function openClusterList(i){const all=CLUSTERS[i];if(!all)return;const list=all.filter(p=>activeGrps.has(p.grp));const el=document.getElementById('plist');el.innerHTML='<p class="lh">'+list.length+' '+(LANG==='hu'?'hely ezen a környéken':LANG==='de'?'Orte in dieser Gegend':LANG==='ro'?'locuri în zonă':'places nearby')+'</p>'+list.map(p=>p.url?'<a href="'+p.url+'"><span class="dot" style="background:'+(GCOL2[p.grp]||'#9ca3af')+'"></span><span class="n">'+escAttrJs(p.name)+'</span><span class="g">'+p.grp+'</span></a>':'<div class="nl"><span class="dot" style="background:'+(GCOL2[p.grp]||'#9ca3af')+';display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:.5rem"></span>'+escAttrJs(p.name)+'</div>').join('');clearMode();pop.classList.add('mode-list','open')}
function escAttrJs(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
gP.addEventListener('click',e=>{const el=e.target.closest('.poi');if(el){e.stopPropagation();openPopup(el)}});
if(gC){gC.addEventListener('click',e=>{const cl=e.target.closest('.cluster');if(!cl)return;e.stopPropagation();openClusterList(+cl.getAttribute('data-i'))})}
function closePopup(){pop.classList.remove('open');clearMode();document.querySelectorAll('.poi.active').forEach(n=>n.classList.remove('active'))}
document.getElementById('px').onclick=closePopup;
stage.addEventListener('click',e=>{if(!e.target.closest('.poi')&&!e.target.closest('.cluster')&&!e.target.closest('.popup')){closePopup()}});
// Chip toggle: hide POIs of disabled group
const activeGrps=new Set(${JSON.stringify(GROUPS.filter(g => grpCount[g] > 0))});
function applyGrpFilter(){
  gP.querySelectorAll('.poi').forEach(p=>{const g=p.getAttribute('data-grp');p.classList.toggle('hidden',!activeGrps.has(g))});
  // Cluster + reveal-id computation moved to applySearch() so chip + search
  // combine consistently. Just re-trigger applySearch (it reads activeGrps).
  if(typeof applySearch==='function')applySearch();
}
document.querySelectorAll('.chip[data-g]').forEach(ch=>{ch.addEventListener('click',()=>{const g=ch.getAttribute('data-g');if(activeGrps.has(g)){activeGrps.delete(g);ch.classList.remove('on')}else{activeGrps.add(g);ch.classList.add('on')}applyGrpFilter()})});
// Search: dim non-matching POIs + recompute cluster visibility (only count matches)
const sIn=document.getElementById('searchIn'),sX=document.getElementById('searchX'),sW=document.getElementById('searchWrap'),sRes=document.getElementById('searchRes');
function norm(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}
// Quick lookup of POI's normalized search text + display name + group + coords by id
const POI_INDEX={};
gP.querySelectorAll('.poi').forEach(p=>{
  const id=p.getAttribute('data-id');
  const t=p.getAttribute('transform')||'';
  const m=t.match(/translate\\(([-\\d.]+),([-\\d.]+)\\)/);
  POI_INDEX[id]={
    search:p.getAttribute('data-search')||'',
    name:p.getAttribute('data-name')||id,
    grp:p.getAttribute('data-grp')||'other',
    url:p.getAttribute('data-url')||null,
    cx:m?+m[1]:0,cy:m?+m[2]:0
  };
});
const POI_SEARCH_BY_ID={};
for(const id in POI_INDEX)POI_SEARCH_BY_ID[id]=POI_INDEX[id].search;
const GCOL_JS={city:'#60a5fa',sight:'#fbbf24',nature:'#22c55e',history:'#c084fc',industry:'#fb923c',other:'#9ca3af'};
function applySearch(){
  const q=norm(sIn.value.trim());
  sW.classList.toggle('has-q',!!q);
  // Phase 1: per-POI dim/match
  gP.querySelectorAll('.poi').forEach(p=>{
    if(!q){p.classList.remove('dim');p.classList.remove('match');return}
    const t=p.getAttribute('data-search')||'';
    const m=t.includes(q);
    p.classList.toggle('match',m);
    p.classList.toggle('dim',!m);
  });
  // Phase 2: cluster visibility — combine search match WITH group filter
  if(!gC)return;
  const revealIds=new Set();
  gC.querySelectorAll('.cluster').forEach(c=>{
    const i=+c.getAttribute('data-i');
    const list=CLUSTERS[i]||[];
    // POI counts as "visible" if: group active AND (no query OR matches query)
    const vis=list.filter(p=>{
      if(!activeGrps.has(p.grp))return false;
      if(!q)return true;
      return (POI_SEARCH_BY_ID[p.id]||'').includes(q);
    });
    const txt=c.querySelector('text');
    if(vis.length===0){c.classList.add('hidden')}
    else if(vis.length===1){c.classList.add('hidden');revealIds.add(vis[0].id)}
    else{c.classList.remove('hidden');if(txt)txt.textContent=String(vis.length)}
  });
  gP.querySelectorAll('.poi.in-cluster').forEach(p=>{
    p.classList.toggle('reveal',revealIds.has(p.getAttribute('data-id')))
  });
  // Phase 3: dropdown list of top matches (count ALL matching for auto-zoom decision)
  if(!q){sRes.innerHTML='';sRes.classList.remove('has-hits');return}
  const hits=[];
  for(const id in POI_INDEX){
    const e=POI_INDEX[id];
    if(!activeGrps.has(e.grp))continue;
    if(!e.search.includes(q))continue;
    if(hits.length<50)hits.push({id,...e});
  }
  // Auto-zoom: only ONE visible thing on the map → pan-zoom there.
  // "Visible thing" = either a single non-clustered POI, or one cluster with all matches inside it.
  // Compute by examining current cluster visibility (already set in Phase 2 above).
  if(hits.length>0){
    // Map: poi-id -> cluster index it belongs to (if any)
    const poiToCluster={};
    for(let i=0;i<CLUSTERS.length;i++)for(const p of CLUSTERS[i])poiToCluster[p.id]=i;
    // Group matches by their visible "thing": either a visible cluster (id of cluster) or 'solo' + poi-id.
    // A cluster is "visible" if its DOM .cluster element does NOT have .hidden.
    // A POI is "shown solo" if either: not in any cluster, OR in a cluster whose .cluster element IS hidden (= cluster collapsed to <=1 match).
    const visibleClusterIdx=new Set();
    if(gC){
      gC.querySelectorAll('.cluster:not(.hidden)').forEach(c=>visibleClusterIdx.add(+c.getAttribute('data-i')));
    }
    const visibleThings=new Set();
    for(const h of hits){
      const ci=poiToCluster[h.id];
      if(ci!==undefined && visibleClusterIdx.has(ci)){
        visibleThings.add('c'+ci);
      }else{
        visibleThings.add('p'+h.id);
      }
    }
    const onlyOneThing=visibleThings.size===1;
    if(onlyOneThing){
      const thing=Array.from(visibleThings)[0];
      let cx,cy;
      if(thing[0]==='p'){
        // Solo POI (or revealed cluster-POI)
        const id=thing.slice(1);
        const e=POI_INDEX[id];
        if(e){cx=e.cx;cy=e.cy}
      }else{
        // Visible cluster (c<idx>) — center = avg of cluster's POI coords
        const ci=+thing.slice(1);
        const cl=CLUSTERS[ci]||[];
        let sx=0,sy=0,n=0;
        for(const p of cl){sx+=p.cx||0;sy+=p.cy||0;n++}
        if(n>0){cx=sx/n;cy=sy/n}
      }
      if(cx!==undefined){
        // Use 4× zoom (below EXPAND_SCALE=6 so clusters stay collapsed as numbers,
        // POI doesn't disappear into expanded form)
        s=4;
        tx=W/2-cx*s;
        // Bias the target 20% above viewBox center so it's not hidden behind the search dropdown / header
        ty=H*0.32-cy*s;
        ap();
        sRes.innerHTML='';
        sRes.classList.remove('has-hits');
        return;
      }
    }
  }
  if(hits.length===0){sRes.innerHTML='';sRes.classList.remove('has-hits');return}
  sRes.innerHTML=hits.map(h=>{
    const grpLabel=String(h.grp);
    return '<a data-id="'+h.id+'" data-cx="'+h.cx+'" data-cy="'+h.cy+'"'+(h.url?' href="'+h.url+'"':'')+'><span class="dot" style="background:'+(GCOL_JS[h.grp]||'#9ca3af')+'"></span><span class="nm">'+h.name.replace(/[<>]/g,'')+'</span><span class="gr">'+grpLabel+'</span></a>';
  }).join('');
  sRes.classList.add('has-hits');
}
sIn.addEventListener('input',applySearch);
sX.addEventListener('click',()=>{sIn.value='';applySearch();sIn.focus()});
// Click on dropdown item: zoom-pan to POI, do NOT auto-navigate (user can click again on map dot for that)
sRes.addEventListener('click',e=>{
  const a=e.target.closest('a[data-id]');
  if(!a)return;
  e.preventDefault();
  const cx=+a.getAttribute('data-cx'),cy=+a.getAttribute('data-cy');
  s=4;
  tx=W/2-cx*s;
  ty=H*0.32-cy*s;
  ap();
  sRes.classList.remove('has-hits');
  sIn.blur();
});
// Close dropdown on outside click
document.addEventListener('click',e=>{if(!sW.contains(e.target))sRes.classList.remove('has-hits')});
</script>
</body>
</html>`;
}

async function buildOne(c: Country): Promise<boolean> {
  const svgPath = `../lib/visualLab/maps/${c.svgFile}`;
  let mod: any;
  try {
    mod = await import(svgPath);
  } catch (e: any) {
    console.log(`SKIP ${c.iso}: cannot import ${c.svgFile} — ${e.message?.slice(0,100)}`);
    return false;
  }
  const map = mod[c.mapVar];
  const viewBox = mod[c.vbVar];
  const proj = mod[c.projFn];
  if (!Array.isArray(map) || !viewBox || typeof proj !== "function") {
    console.log(`SKIP ${c.iso}: missing exports (map=${!!map}, vb=${!!viewBox}, proj=${typeof proj})`);
    return false;
  }
  const { w: W, h: H } = parseViewBox(viewBox);

  const isoUp = c.iso === "gb" ? "GB" : c.iso.toUpperCase();
  const poisJsonPath = path.join(process.cwd(), "public", "data", "pois", `${isoUp}.json`);
  let poisRaw: any[] = [];
  if (fs.existsSync(poisJsonPath)) {
    try {
      const j = JSON.parse(fs.readFileSync(poisJsonPath, "utf8"));
      poisRaw = j.pois || j;
    } catch {}
  }
  const seen = new Set<string>();
  const pois: SlimPoi[] = [];
  for (const p of poisRaw) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    const s = slimPoi(p, proj, W, H);
    if (s) pois.push(s);
  }
  const regions = map.map((r: any) => ({
    id: r.id, name: r.name,
    labelX: r.labelX, labelY: r.labelY,
    path: simplifyPath(r.path),
  }));
  const outDir = path.join(process.cwd(), "public", `${c.slug}-map`);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), renderHtml(c, "hu", regions, pois, viewBox, W, H), "utf8");
  for (const l of LANGS) {
    const sub = path.join(outDir, l);
    fs.mkdirSync(sub, { recursive: true });
    fs.writeFileSync(path.join(sub, "index.html"), renderHtml(c, l, regions, pois, viewBox, W, H), "utf8");
  }
  const sz = fs.statSync(path.join(outDir, "index.html")).size;
  console.log(`OK   ${c.iso} ${c.slug.padEnd(18)} regions=${regions.length.toString().padStart(3)} pois=${pois.length.toString().padStart(4)} html=${(sz/1024).toFixed(0)}KB`);
  return true;
}

async function main() {
  const target = process.argv[2] || "all";
  const list = target === "all" ? COUNTRIES : COUNTRIES.filter(c => c.iso === target);
  if (!list.length) { console.error(`No country '${target}'`); process.exit(1); }
  let ok = 0, fail = 0;
  for (const c of list) {
    if (await buildOne(c)) ok++; else fail++;
  }
  console.log(`\nDone: ${ok} ok, ${fail} fail / ${list.length} total.`);
}

main().catch(e => { console.error(e); process.exit(1); });
