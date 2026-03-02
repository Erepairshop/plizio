import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Statistics & Progress",
  description:
    "Track your gaming progress and statistics on PLIZIO. View milestones, streaks, high scores and achievements across all games.",
  openGraph: {
    title: "Dashboard - Statistics & Progress | PLIZIO",
    description: "View your gaming statistics, milestones and achievements.",
    url: "https://plizio.com/dashboard",
  },
  twitter: {
    card: "summary",
    title: "Dashboard - Statistics & Progress | PLIZIO",
    description: "Track your gaming progress and achievements on PLIZIO.",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/dashboard" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
