import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Sahil Tanawade | Software Engineer",
  description:
    "Sahil Tanawade - Software Engineer focused on scalable backend systems, automation pipelines, and data-driven architecture.",
  openGraph: {
    title: "Sahil Tanawade | Software Engineer",
    description:
      "Software engineering portfolio featuring backend experience, projects, and technical strengths.",
    url: "https://example.com",
    siteName: "Sahil Tanawade Portfolio",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
