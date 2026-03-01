/**
 * Mobile & iOS optimization utilities
 * Handles Safe Area, viewport settings, and touch behaviors
 */

/**
 * Check if device is iOS
 */
export function isIOS(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !/Android/.test(navigator.userAgent)
  );
}

/**
 * Check if device has notch/safe area
 */
export function hasSafeArea(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    typeof CSS !== 'undefined' &&
    CSS.supports('padding-top: max(0px)')
  );
}

/**
 * Get viewport height (excluding safe areas)
 */
export function getViewportHeight(): number {
  if (typeof window === 'undefined') return 0;
  return window.innerHeight;
}

/**
 * Prevent zoom on input focus (iOS)
 */
export function preventInputZoom(): void {
  if (typeof document === 'undefined') return;

  // Set viewport meta tag
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.setAttribute(
      'content',
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover'
    );
  }

  // Add CSS to prevent zoom on input
  const style = document.createElement('style');
  style.textContent = `
    input, textarea, select {
      font-size: 16px !important;
    }
    button {
      font-size: 16px !important;
    }
  `;
  document.head.appendChild(style);
}

/**
 * iOS-safe touch event handler
 */
export function createTouchHandler(callback: () => void): void {
  if (typeof window === 'undefined') return;

  // Prevent touch delay on iOS
  const handler = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      callback();
    }
  };

  window.addEventListener('touchstart', handler, { passive: true });
}

/**
 * Safe area CSS variables for layout
 */
export const safeAreaCSS = {
  top: 'max(20px, env(safe-area-inset-top))',
  bottom: 'max(20px, env(safe-area-inset-bottom))',
  left: 'max(20px, env(safe-area-inset-left))',
  right: 'max(20px, env(safe-area-inset-right))',
};

/**
 * Mobile-friendly breakpoints
 */
export const mobileBreakpoints = {
  xs: '320px',  // iPhone SE
  sm: '375px',  // iPhone standard
  md: '414px',  // iPhone Plus
  lg: '512px',  // Portrait tablet
  xl: '768px',  // Landscape tablet
  '2xl': '1024px',
};

/**
 * Mobile touch-friendly button size (Apple HIG: 44px minimum)
 */
export const TOUCH_TARGET_SIZE = '44px';

/**
 * Get device info for analytics/debugging
 */
export function getDeviceInfo() {
  if (typeof navigator === 'undefined') return null;

  return {
    isIOS: isIOS(),
    hasSafeArea: hasSafeArea(),
    userAgent: navigator.userAgent,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
    },
  };
}

/**
 * Scroll to element smoothly on mobile
 * (iOS sometimes needs extra handling)
 */
export function scrollToElement(element: HTMLElement | null, smooth = true): void {
  if (!element) return;

  const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);

  if (isSafari) {
    // Use setTimeout for better Safari support
    setTimeout(() => {
      element.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'center',
      });
    }, 100);
  } else {
    element.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'center',
    });
  }
}

/**
 * Lock scroll (for modals on iOS)
 */
export function lockScroll(): void {
  if (typeof document === 'undefined') return;

  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
}

/**
 * Unlock scroll
 */
export function unlockScroll(): void {
  if (typeof document === 'undefined') return;

  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
}

/**
 * Haptic feedback (vibration) for iOS
 */
export function triggerHaptic(type: 'light' | 'medium' | 'heavy' = 'light'): void {
  if (typeof navigator === 'undefined' || !('vibrate' in navigator)) return;

  const patterns: Record<string, number | number[]> = {
    light: 10,
    medium: 50,
    heavy: 100,
  };

  navigator.vibrate(patterns[type]);
}

/**
 * Request full-screen mode (iOS PWA)
 */
export function requestFullScreen(): void {
  const element = document.documentElement;
  const requestFullscreen =
    element.requestFullscreen ||
    (element as any).webkitRequestFullscreen ||
    (element as any).mozRequestFullScreen;

  if (requestFullscreen) {
    requestFullscreen.call(element).catch((err: Error) => {
      console.log('Full screen request failed:', err);
    });
  }
}
