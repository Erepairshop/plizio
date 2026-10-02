import assert from "node:assert/strict";
import { nativeTitleKeywords, nativeTitleFeature } from "./lib/native-title-keywords.mjs";
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
