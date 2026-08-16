import assert from "node:assert/strict";
import test from "node:test";
import worker, { camperVehicle, requestedSegmentCount, routingRadii, validCoord } from "../src/index.mjs";

test("validates coordinates and motorhome dimensions", () => {
  assert.equal(validCoord([10, 48]), true);
  assert.equal(validCoord([181, 48]), false);
  assert.deepEqual(camperVehicle({ length: 7, width: 2.3, height: 3.1, weight: 3.5 }), {
    length: 7, width: 2.3, height: 3.1, weight: 3.5,
  });
  assert.equal(camperVehicle({ length: 30 }), null);
});

test("treats zero stops as a direct one-segment route", () => {
  assert.equal(requestedSegmentCount(0, 3), 1);
  assert.equal(requestedSegmentCount(3, 9), 4);
  assert.equal(requestedSegmentCount(undefined, 3), 3);
  assert.equal(requestedSegmentCount(-1, 3), null);
  assert.equal(requestedSegmentCount(9, 3), null);
});

test("adds a wider, bounded destination search only for motorhomes", () => {
  const coords = [[10, 48], [11, 49], [12, 50]];
  assert.deepEqual(routingRadii(coords, "camper"), [750, 750, 1500]);
  assert.equal(routingRadii(coords, "car"), undefined);
});

test("handler keeps stops=0, exposes the routed destination and sources advice", async () => {
  let orsRequest = null;
  const originalFetch = globalThis.fetch;
  const originalCaches = globalThis.caches;
  globalThis.caches = { default: { match: async () => null, put: async () => {} } };
  globalThis.fetch = async (_url, options) => {
    orsRequest = JSON.parse(options.body);
    return new Response(JSON.stringify({
      features: [{
        geometry: { coordinates: [[16, 48], [16.05, 48.05], [16.099, 48.099]] },
        properties: { summary: { distance: 15000, duration: 1800 } },
      }],
    }), { status: 200, headers: { "content-type": "application/json" } });
  };
  const env = {
    ORS_KEY: "test-only",
    CAMPER: {
      get: async (key) => key === "meta:countries" ? ["AT"] : [{
        id: "at-stop", name: "Test stop", lon: 16.05, lat: 48.05,
        cc: "AT", tier: "A", type: "caravan_site", services: {},
      }],
    },
  };
  try {
    const response = await worker.fetch(new Request("https://worker.test/plan", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        origin: [16, 48], destination: [16.1, 48.1], stops: 0,
        mode: "camper", vehicle: { length: 7, width: 2.3, height: 3.1, weight: 3.5 },
      }),
    }), env);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.equal(data.summary.days, 1);
    assert.equal(data.summary.overnightStops, 0);
    assert.equal(data.days.length, 1);
    assert.deepEqual(orsRequest.radiuses, [750, 1500]);
    assert.deepEqual(data.routing.routedDestination, [16.099, 48.099]);
    assert.ok(data.routing.destinationSnapKm > 0);
    assert.match(data.advisory[0].toll, /bis einschließlich 3,5 t/);
    assert.match(data.advisory[0].officialUrl, /^https:\/\//);
  } finally {
    globalThis.fetch = originalFetch;
    globalThis.caches = originalCaches;
  }
});

test("handler rejects invalid stop counts before routing", async () => {
  const response = await worker.fetch(new Request("https://worker.test/plan", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ origin: [10, 48], destination: [11, 49], stops: -1, mode: "car" }),
  }), {});
  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /stops must be an integer/);
});
