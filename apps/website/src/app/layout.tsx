import type { Metadata } from "next";
import type { ReactNode } from "react";

// Styles:
import "@/styles/globals.css";
import "@/styles/shiki.css";
import "@/styles/sugar-high.css";

import Script from "next/script";
import { cn } from "@/utils/cn";
import { fontSans, fontMono, fontHeadings } from "@/styles/fonts";

// Global:
import { globals } from "@/globals";
import { ThemeProvider } from "@/components/providers/theme-provider";

// Metadata:
export const metadata: Metadata = {
  metadataBase: new URL(globals.websiteUrl),
  title: `${globals.subTitle} - ${globals.title}`,
  description: "A code-block UI component. Copy-Paste. Customizable.",
  authors: [{ name: "pheralb", url: "https://pheralb.dev" }],
  robots: "follow, index",
  alternates: {
    canonical: globals.websiteUrl,
  },
  icons: [
    { rel: "icon", type: "ico", url: "/images/code-blocks-ico.ico" },
    { rel: "icon", type: "image/svg+xml", url: "/images/code-blocks-svg.svg" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "root",
          `${fontSans.variable} ${fontHeadings.variable} ${fontMono.variable}`,
          "bg-neutral-50 dark:bg-neutral-900",
          "text-neutral-950 dark:text-neutral-50",
          "selection:bg-neutral-300 dark:selection:bg-neutral-700",
          "font-sans antialiased",
          "relative overscroll-none",
        )}
      >
        <Script
          defer={true}
          src="https://umami.pheralb.dev/script.js"
          data-website-id="0fdc2cef-bcee-4ad9-8209-db5491d8bf9a"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
