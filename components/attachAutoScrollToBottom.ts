"use client";

type ScrollHintNode = HTMLDivElement & {
  __mapAutoScrollAttached?: boolean;
  __mapAutoScrollCleanup?: () => void;
};

export function attachAutoScrollToBottom(node: HTMLDivElement | null) {
  if (!node) return;

  const el = node as ScrollHintNode;
  if (el.__mapAutoScrollAttached) return;
  el.__mapAutoScrollAttached = true;

  if (typeof window === "undefined") return;
  let userInteracted = false;

  const scrollToBottom = () => {
    if (userInteracted) return;
    const targetTop = Math.max(0, el.scrollHeight - el.clientHeight);
    if (targetTop <= 0) return;
    el.scrollTop = targetTop;
  };

  const scheduleScroll = (delay: number) => window.setTimeout(scrollToBottom, delay);
  const timers = [
    scheduleScroll(0),
    scheduleScroll(80),
    scheduleScroll(220),
    scheduleScroll(500),
    scheduleScroll(1000),
    scheduleScroll(1800),
  ];

  const rafId = window.requestAnimationFrame(scrollToBottom);
  const interactionEvents: Array<keyof HTMLElementEventMap> = ["wheel", "touchstart", "touchmove", "pointerdown"];
  const onUserInteract = () => {
    userInteracted = true;
  };

  interactionEvents.forEach((eventName) => {
    el.addEventListener(eventName, onUserInteract, { passive: true });
  });

  const resizeObserver = typeof ResizeObserver === "undefined"
    ? null
    : new ResizeObserver(() => {
        scrollToBottom();
      });

  resizeObserver?.observe(el);
  if (el.firstElementChild instanceof HTMLElement) {
    resizeObserver?.observe(el.firstElementChild);
  }

  const onViewportChange = () => scrollToBottom();
  window.addEventListener("resize", onViewportChange);
  window.addEventListener("orientationchange", onViewportChange);

  el.__mapAutoScrollCleanup = () => {
    window.cancelAnimationFrame(rafId);
    timers.forEach((timer) => window.clearTimeout(timer));
    interactionEvents.forEach((eventName) => {
      el.removeEventListener(eventName, onUserInteract);
    });
    resizeObserver?.disconnect();
    window.removeEventListener("resize", onViewportChange);
    window.removeEventListener("orientationchange", onViewportChange);
  };
}
