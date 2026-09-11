import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Shell } from "@/components/shell";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oxygen Bootcamp",
  description:
    "90-day authoring training for Oxygen XML (Syncro Soft) and AEM Authoring / AEM Guides.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen antialiased"
        style={{
          fontFamily: "var(--font-serif-loaded), var(--font-serif)",
        }}
      >
        <PreviewHostBridge />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
