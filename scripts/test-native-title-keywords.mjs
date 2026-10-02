import assert from "node:assert/strict";
import { nativeTitleKeywords, nativeTitleFeature } from "./lib/native-title-keywords.mjs";
assert.deepEqual(nativeTitleKeywords("city", "pt"), ["Atra\u00e7\u00f5es", "Mapa", "Tempo", "Not\u00edcias", "Hist\u00f3ria"]);
assert.equal(nativeTitleFeature("news", "pl"), "Wiadomo\u015bci");
assert.deepEqual(nativeTitleKeywords("mountain", "pl"), ["W\u0119dr\u00f3wki", "Mapa", "Pogoda", "Zdj\u0119cia", "Wysoko\u015b\u0107"]);
assert.equal(nativeTitleKeywords("lake", "pl")[0], "Pla\u017ce");
for (const lang of ["pl", "nl", "pt"]) {
  for (const bucket of ["city", "castle", "mountain", "lake", "river", "historical", "landmark", "nature"]) {
    const words = nativeTitleKeywords(bucket, lang);
    assert.equal(words.length, 5);
    assert.ok(words.every((word) => typeof word === "string" && word.length));
  }
  for (const feature of ["sights", "weather", "news"]) {
    const words = nativeTitleKeywords("city", lang);
    assert.ok(words.includes(nativeTitleFeature(feature, lang)));
    assert.ok(!words.filter((word) => word !== nativeTitleFeature(feature, lang)).includes(nativeTitleFeature(feature, lang)));
  }
  assert.ok(nativeTitleFeature("events", lang));
}
assert.deepEqual(nativeTitleKeywords("unknown", "pl"), nativeTitleKeywords("landmark", "pl"));
assert.equal(nativeTitleKeywords("city", "en"), undefined);
assert.equal(nativeTitleFeature("news", "it"), undefined);
console.log("PASS: 24 native title buckets, feature filtering and existing-language fallback");
