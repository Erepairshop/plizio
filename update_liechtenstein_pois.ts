
import { exec } from 'child_process';
import { promisify } from 'util';
const execPromise = promisify(exec);

const files = [
  '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraLiechtensteinCities.ts',
  '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraLiechtensteinHistory.ts',
  '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraLiechtensteinOther.ts'
];

async function updatePois() {
  for (const file of files) {
    const { stdout } = await execPromise(`cat ${file}`);
    let content = stdout;

    // Helper to generate RO content
    const getRoDescription = () => "Liechtenstein, o țară mică, dar fascinantă, situată în inima Alpilor, între Elveția și Austria, oferă peisaje montane spectaculoase și o calitate remarcabilă a vieții. Această destinație captivantă combină armonios tradițiile seculare cu progresul modern. Vizitatorii pot explora ruine istorice ale unor castele vechi, pot parcurge trasee montane bine întreținute sau pot vizita muzee de clasă mondială care oferă perspective asupra istoriei bogate a principatului. Natura neatinsă și atmosfera discretă fac din Liechtenstein un loc ideal pentru relaxare și introspecție. Infrastructura excelentă permite călătorii confortabile prin sate pitorești, oferind oportunitatea de a experimenta liniștea munților în paralel cu confortul civilizației. Indiferent dacă ești atras de cultura locală, de activități în aer liber sau pur și simplu de peisajele de poveste, acest stat mic reușește să impresioneze prin farmecul său inegalabil și ospitalitatea sa, rămânând o destinație europeană deosebit de prețioasă.";

    const getRoFacts = () => [
      "Liechtenstein este unul dintre puținele state din lume care nu are ieșire la mare, fiind înconjurat în întregime de alte țări fără ieșire la mare.",
      "Vârful Grauspitz reprezintă cel mai înalt punct al țării, având o altitudine impresionantă de 2.599 de metri.",
      "Aproximativ 40% din suprafața totală a Principatului este acoperită de păduri sau pășuni alpine verzi.",
      "Principatul are o populație de aproximativ 39.000 de locuitori, distribuiți în unsprezece municipalități distincte.",
      "Fluviul Rin constituie granița naturală de vest, separând Liechtenstein-ul de Elveția vecină.",
      "Din anul 1995, Liechtenstein a devenit membru activ al Spațiului Economic European.",
      "Țara este renumită pentru stabilitatea sa politică și economică, fiind un centru financiar important la nivel global."
    ];

    // Regex to find all POI entries and replace descriptions/facts
    // Simplified logic: match the closing brace of descriptionAdvanced and factsAdvanced
    
    // Replace empty or non-existent descriptionAdvanced.ro and factsAdvanced.ro
    content = content.replace(/descriptionAdvanced: \{([\s\S]*?)ro: ""([\s\S]*?)en: ""([\s\S]*?)\}/g, (match, p1, p2, p3) => {
        return `descriptionAdvanced: {${p1}ro: "${getRoDescription()}"${p2}en: ""${p3}}`;
    });
    
    // Note: The above is a bit risky due to complexity, might need manual per file if it fails.
    // Let's refine the replacement to be safer for the specific structure.
    
    console.log(`Processed ${file}`);
  }
}

updatePois().catch(console.error);
