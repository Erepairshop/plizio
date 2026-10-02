import assert from "node:assert/strict";
import { selectLocalizedContent } from "./lib/localized-content.mjs";

assert.equal(selectLocalizedContent("it", [{ de: "German advanced" }, { it: "Italian short" }]), "Italian short");
assert.equal(selectLocalizedContent("it", [{ it: "Italian advanced" }, { it: "Italian short" }]), "Italian advanced");
assert.equal(selectLocalizedContent("it", [{ it: " " }, { it: "Italian short" }]), "Italian short");
assert.deepEqual(selectLocalizedContent("pl", [{ de: ["German fact"], pl: [] }, { pl: ["Polish fact"] }]), ["Polish fact"]);
assert.equal(selectLocalizedContent("it", [{ de: "Existing fallback" }, {}]), "Existing fallback");
assert.equal(selectLocalizedContent("it", [{ de: "Existing fallback" }], []), undefined);
assert.equal(selectLocalizedContent("it", [undefined, {}]), undefined);
assert.equal(selectLocalizedContent("it", [{ it: { broken: true } }]), undefined);

// Short Italian sidecar fixture. Keep the regression independent of
// runtime-only translation files on the production server.
const osteria = { description: "Un quartiere di Roma vicino alla Via Tuscolana." };
assert.equal(selectLocalizedContent("it", [{ de: "Osteria del Curato ist ein Viertel." }, { it: osteria.description }]), osteria.description);
assert.match(osteria.description, /^Un quartiere/);
console.log("PASS: 9 localization cases, including an Italian short-sidecar fixture");
