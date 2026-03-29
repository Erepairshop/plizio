import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth | PLIZIO",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://plizio.com/auth/",
  },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
