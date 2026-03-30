import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Echo | Plizio",
  description: "Navigate levels and avoid your previous self in this neon-themed reflex logic game.",
  alternates: {
    canonical: "https://plizio.com/timeecho/",
  },
  openGraph: {
    title: "Time Echo | Plizio",
    description: "Master the time distortion. Can you avoid your own echo?",
    url: "https://plizio.com/timeecho/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Time Echo | Plizio",
    description: "Reflexes and logic combined. Avoid your past runs.",
  },
};

export default function TimeEchoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
