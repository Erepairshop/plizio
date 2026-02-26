// ─── USERNAME SYSTEM ────────────────────────────────

const USERNAME_KEY = "plizio_username";

export function getUsername(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(USERNAME_KEY);
}

export function setUsername(name: string): void {
  localStorage.setItem(USERNAME_KEY, name.trim());
}

export function hasUsername(): boolean {
  if (typeof window === "undefined") return false;
  const name = localStorage.getItem(USERNAME_KEY);
  return !!name && name.trim().length > 0;
}
