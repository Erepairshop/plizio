"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const isProductionHost =
      window.location.hostname === "plizio.com" ||
      window.location.hostname === "www.plizio.com";

    if (!isProductionHost) {
      // Preview/development builds must never be controlled by the production
      // cache. Turbopack reuses chunk URLs while editing, so a stale worker can
      // leave the page visible but prevent React controls from hydrating.
      void navigator.serviceWorker
        .getRegistrations()
        .then((registrations) =>
          Promise.all(
            registrations.map((registration) => registration.unregister()),
          ),
        );
      if ("caches" in window) {
        void caches
          .keys()
          .then((keys) =>
            Promise.all(
              keys
                .filter((key) => key.startsWith("plizio-"))
                .map((key) => caches.delete(key)),
            ),
          );
      }
      return;
    }

    void navigator.serviceWorker.register("/sw.js").catch(() => {
      // The site remains usable without offline caching.
    });
  }, []);

  return null;
}
