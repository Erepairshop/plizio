import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile - Your Gaming Stats",
  description:
    "View your gaming profile, stats, milestones and achievements on PLIZIO. Track your progress across all games.",
  openGraph: {
    title: "Player Profile | PLIZIO",
    description: "View your gaming stats, milestones and achievements.",
    url: "https://plizio.com/profile",
  },
  alternates: { canonical: "https://plizio.com/profile" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
