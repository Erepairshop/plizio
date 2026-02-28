const CACHE_NAME = "plizio-v6";

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
