// Lightweight Umami custom-event helper for the React app.
// Pageviews are auto-tracked by the umami script in app/layout.tsx; this is
// for explicit interaction events (game/test start, answers, nav, etc.).
export function track(event: string, data?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const u = (window as unknown as { umami?: { track?: (e: string, d?: Record<string, unknown>) => void } }).umami;
  if (u && typeof u.track === "function") {
    try { u.track(event, data || {}); } catch { /* no-op */ }
  }
}
