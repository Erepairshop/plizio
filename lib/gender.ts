// ─── GENDER SYSTEM ─────────────────────────────────────
// Stores player avatar gender preference

const GENDER_KEY = "plizio_avatar_gender";

export type AvatarGender = "girl" | "boy";

export function getGender(): AvatarGender {
  if (typeof window === "undefined") return "girl";
  return (localStorage.getItem(GENDER_KEY) as AvatarGender) || "girl";
}

export function setGender(gender: AvatarGender): void {
  localStorage.setItem(GENDER_KEY, gender);
}

// ─── AVATAR SCALE ─────────────────────────────────────
const SCALE_KEY = "plizio_avatar_scale";

/** Returns avatar scale factor (0.6 – 1.4, default 1.0) */
export function getAvatarScale(): number {
  if (typeof window === "undefined") return 1.0;
  const v = parseFloat(localStorage.getItem(SCALE_KEY) || "1");
  return isNaN(v) ? 1.0 : Math.max(0.6, Math.min(1.4, v));
}

export function setAvatarScale(scale: number): void {
  localStorage.setItem(SCALE_KEY, String(Math.round(scale * 100) / 100));
}
