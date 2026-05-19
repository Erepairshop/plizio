const CACHE_NAME = "plizio-v10";
// Paths that should be served stale-while-revalidate (cache-first, refresh in background).
// Country POI JSONs, POI images and static Next chunks rarely change between deploys but
// when they do, the new copy is fetched silently in the background and used next visit.
const SWR_RE = /\/(data\/pois|poi-images|_next\/static)\//;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/citydrive/",
        "/quickpick/",
        "/reflexgrid/",
        "/memoryflash/",
        "/daily/",
        "/skyclimb/",
        "/collection/",
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
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

  // Stale-while-revalidate for big static assets that change rarely:
  // country POI JSON, POI images, Next.js static chunks. Massive speed-up
  // on revisit — user gets cached version instantly, fresh copy fetched
  // silently in the background for next time.
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
        })
      )
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
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
