"use client";

const STORAGE_KEY = "plizio-map-scroll-hint-seen-v1";

type ScrollHintNode = HTMLDivElement & {
  __mapHintAttached?: boolean;
  __mapHintCleanup?: () => void;
};

function ensureHintAnimationStyle() {
  if (document.getElementById("plizio-map-scroll-hint-style")) return;

  const style = document.createElement("style");
  style.id = "plizio-map-scroll-hint-style";
  style.textContent = `
    @keyframes plizio-map-scroll-bounce {
      0%, 100% { transform: translate(-50%, 0); }
      50% { transform: translate(-50%, 8px); }
    }
  `;
  document.head.appendChild(style);
}

export function attachAutoScrollToBottom(node: HTMLDivElement | null) {
  if (!node) return;

  const el = node as ScrollHintNode;
  if (el.__mapHintAttached) return;
  el.__mapHintAttached = true;

  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(STORAGE_KEY) === "1") return;

  ensureHintAnimationStyle();

  if (getComputedStyle(el).position === "static") {
    el.style.position = "relative";
  }

  const hint = document.createElement("div");
  hint.setAttribute("aria-hidden", "true");
  hint.style.position = "absolute";
  hint.style.left = "50%";
  hint.style.bottom = "18px";
  hint.style.transform = "translateX(-50%)";
  hint.style.display = "flex";
  hint.style.flexDirection = "column";
  hint.style.alignItems = "center";
  hint.style.gap = "8px";
  hint.style.pointerEvents = "none";
  hint.style.transition = "opacity 180ms ease";
  hint.style.opacity = "0";
  hint.style.zIndex = "30";

  const arrow = document.createElement("div");
  arrow.textContent = "↓";
  arrow.style.width = "42px";
  arrow.style.height = "42px";
  arrow.style.display = "grid";
  arrow.style.placeItems = "center";
  arrow.style.borderRadius = "999px";
  arrow.style.border = "1px solid rgba(255,255,255,0.2)";
  arrow.style.background = "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))";
  arrow.style.color = "white";
  arrow.style.fontSize = "24px";
  arrow.style.fontWeight = "900";
  arrow.style.boxShadow = "0 14px 34px rgba(0,0,0,0.3)";
  arrow.style.animation = "plizio-map-scroll-bounce 1.4s ease-in-out infinite";

  hint.appendChild(arrow);
  el.appendChild(hint);

  const markSeen = () => {
    window.localStorage.setItem(STORAGE_KEY, "1");
    hint.style.opacity = "0";
  };

  const updateHintVisibility = () => {
    const canScroll = el.scrollHeight - el.clientHeight > 24;
    const atBottom = el.scrollTop >= el.scrollHeight - el.clientHeight - 24;
    hint.style.opacity = canScroll && !atBottom ? "1" : "0";
  };

  const onScroll = () => {
    updateHintVisibility();
    if (el.scrollTop > 18) {
      markSeen();
    }
  };

  const onTouchMove = () => markSeen();
  const onWheel = () => markSeen();

  const timers = [
    window.setTimeout(updateHintVisibility, 0),
    window.setTimeout(updateHintVisibility, 200),
    window.setTimeout(updateHintVisibility, 700),
    window.setTimeout(updateHintVisibility, 1400),
  ];

  el.addEventListener("scroll", onScroll, { passive: true });
  el.addEventListener("touchmove", onTouchMove, { passive: true });
  el.addEventListener("wheel", onWheel, { passive: true });
  window.addEventListener("resize", updateHintVisibility);
  window.addEventListener("orientationchange", updateHintVisibility);

  el.__mapHintCleanup = () => {
    timers.forEach((timer) => window.clearTimeout(timer));
    el.removeEventListener("scroll", onScroll);
    el.removeEventListener("touchmove", onTouchMove);
    el.removeEventListener("wheel", onWheel);
    window.removeEventListener("resize", updateHintVisibility);
    window.removeEventListener("orientationchange", updateHintVisibility);
    hint.remove();
  };
}
