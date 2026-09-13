import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coastal Safety Solutions | Safety Today. Secure Tomorrow.",
  description:
    "Professional safety training, risk assessments, safety files, PPE, fire protection and compliance support."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
