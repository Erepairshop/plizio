export function getStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  if (!data) return 0;
  const { count, lastDate } = JSON.parse(data);
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastDate === today || lastDate === yesterday) return count;
  return 0;
}

export function updateStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  const today = new Date().toDateString();
  if (data) {
    const { count, lastDate } = JSON.parse(data);
    if (lastDate === today) return count;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newCount = lastDate === yesterday ? count + 1 : 1;
    localStorage.setItem("plizio_streak", JSON.stringify({ count: newCount, lastDate: today }));
    return newCount;
  }
  localStorage.setItem("plizio_streak", JSON.stringify({ count: 1, lastDate: today }));
  return 1;
}
