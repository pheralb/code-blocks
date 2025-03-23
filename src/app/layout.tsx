import type { Metadata } from "next";
import type { ReactNode } from "react";
import { globals } from "@/globals";

// Styles:
import "@/styles/globals.css";
import "@/styles/codeblock.css";
import { cn } from "@/utils/cn";

// Fonts:
import { fontMono, fontSans, fontHeadings } from "@/ui/fonts";

// Providers:
import { unstable_ViewTransition as ViewTransition } from "react";
import { ThemeProvider } from "@/providers/themeProvider";

// Layout:
import { container } from "@/ui/container";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Metadata:
export const metadata: Metadata = {
  metadataBase: new URL(globals.url),
  title: {
    default: globals.name,
    template: `%s — ${globals.name}`,
  },
  description: globals.description,
  keywords: ["codeblocks", "codeblock", "MDX", "Shiki", "client", "component"],
  authors: [
    {
      name: "@pheralb_",
      url: "https://pheralb.dev",
    },
  ],
  creator: "@pheralb_",
};

// App layout:
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
          "bg-neutral-100 dark:bg-neutral-900",
          "scroll-smooth font-sans antialiased",
          "text-neutral-900 dark:text-neutral-50",
          "selection:bg-neutral-300 dark:selection:bg-neutral-700",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Navbar />
          <div
            className={cn(
              container,
              "pt-6 pb-10",
              "flex min-h-dvh flex-col space-y-3",
            )}
          >
            <ViewTransition name="fade">
              <main>{children}</main>
            </ViewTransition>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
