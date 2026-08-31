import { GET } from "../app/feed/[lang]/route";

const LANGS = ["de", "en", "hu", "ro"] as const;
const EXPECTED_ITEMS = 500;

async function main() {
  for (const lang of LANGS) {
    const langParam = `poi-${lang}.xml`;
    const response = await GET(
      new Request(`https://plizio.com/feed/${langParam}`),
      { params: Promise.resolve({ lang: langParam }) },
    );
    const xml = await response.text();
    const items = [...xml.matchAll(/<item>[\s\S]*?<\/item>/g)].map((match) => match[0]);

    if (items.length !== EXPECTED_ITEMS) {
      throw new Error(`${lang}: expected ${EXPECTED_ITEMS} items, got ${items.length}`);
    }

    for (const item of items) {
      const enclosure = item.match(
        /<enclosure url="([^"]+)" type="([^"]+)" length="([^"]+)"/,
      );
      const media = item.match(
        /<media:content url="([^"]+)" type="([^"]+)" fileSize="([^"]+)"/,
      );

      if (!enclosure || !media) throw new Error(`${lang}: missing image tags`);
      if (!enclosure[1].startsWith("https://plizio.com/")) {
        throw new Error(`${lang}: malformed image URL ${enclosure[1]}`);
      }
      if (Number(enclosure[3]) <= 0) {
        throw new Error(`${lang}: invalid image length for ${enclosure[1]}`);
      }
      if (
        enclosure[1] !== media[1]
        || enclosure[2] !== media[2]
        || enclosure[3] !== media[3]
      ) {
        throw new Error(`${lang}: enclosure and media metadata differ`);
      }
    }

    console.log(`${lang}: ${items.length} Pinterest-ready feed items`);
  }
}

void main();
