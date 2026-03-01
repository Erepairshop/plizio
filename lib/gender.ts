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
