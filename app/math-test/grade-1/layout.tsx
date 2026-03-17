import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Math Test Grade 1 – Free Practice – Plizio",
  description: "Free online math practice for Grade 1: counting, addition, subtraction and number recognition with instant feedback.",
  alternates: { canonical: "https://plizio.com/math-test/grade-1/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
