import type { Metadata } from "next";
import type { ReactNode } from "react";

// Styles:
import "@/styles/globals.css";
import "@/styles/shiki.css";
import "@/styles/sugar-high.css";

import { cn } from "@/utils/cn";
import { fontSans, fontMono, fontHeadings } from "@/styles/fonts";

// Global:
import { ThemeProvider } from "@/components/providers/theme-provider";
import { globals } from "@/globals";

// Metadata:
export const metadata: Metadata = {
  title: `${globals.subTitle} - ${globals.title}`,
  description: "A code-block UI component. Copy-Paste. Customizable.",
  authors: [{ name: "pheralb", url: "https://pheralb.dev" }],
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
          `${fontSans.variable} ${fontHeadings.variable} ${fontMono.variable}`,
          "bg-neutral-50 dark:bg-neutral-900",
          "text-neutral-950 dark:text-neutral-50",
          "selection:bg-neutral-300 dark:selection:bg-neutral-700",
          "font-sans antialiased",
          "overscroll-none",
        )}
      >
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
