import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Lato } from "next/font/google";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Shell } from "@/components/shell";
import "./globals.css";

const sans = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans-loaded",
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
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <body
        className="min-h-screen antialiased"
        style={{
          fontFamily: "var(--font-sans-loaded), var(--font-sans)",
        }}
      >
        <PreviewHostBridge />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
