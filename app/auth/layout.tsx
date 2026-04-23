import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth | PLIZIO",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/auth/"),
    canonical: "https://plizio.com/auth/",
  },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
