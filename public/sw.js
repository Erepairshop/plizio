const CACHE_NAME = "plizio-v11";
const IS_PRODUCTION_HOST =
  self.location.hostname === "plizio.com" ||
  self.location.hostname === "www.plizio.com";

// Paths that should be served stale-while-revalidate (cache-first, refresh in background).
// Country POI JSONs, POI images and static Next chunks rarely change between deploys but
// when they do, the new copy is fetched silently in the background and used next visit.
const SWR_RE = /\/(data\/pois|poi-images|_next\/static)\//;

self.addEventListener("install", (event) => {
  if (!IS_PRODUCTION_HOST) {
    self.skipWaiting();
    return;
  }
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Keep install atomic and resilient: runtime requests populate the rest.
      // A removed optional route must not prevent a new worker from activating.
      return cache.addAll(["/"]);
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !IS_PRODUCTION_HOST || key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  // Tailnet/dev previews change continuously and must always use the network.
  if (!IS_PRODUCTION_HOST) return;

  const url = new URL(event.request.url);

  // Never cache non-GET requests
  if (event.request.method !== "GET") {
    return;
  }

  // Never cache Supabase API calls (auth, RPC, REST)
  if (url.hostname.includes("supabase.co")) {
    return;
  }

  // Only cache http/https
  if (!url.protocol.startsWith("http")) {
    return;
  }

  // Stale-while-revalidate for big static assets that change rarely.
  if (SWR_RE.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(event.request).then((cached) => {
          const fetchPromise = fetch(event.request)
            .then((res) => {
              if (res && res.ok) cache.put(event.request, res.clone());
              return res;
            })
            .catch(() => cached);
          return cached || fetchPromise;
        }),
      ),
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});
