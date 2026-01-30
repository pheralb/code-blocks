import localFont from "next/font/local";

const fontSans = localFont({
  variable: "--font-sans",
  src: "./Geist.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const fontMono = localFont({
  variable: "--font-mono",
  src: "./GeistMono.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const fontHeadings = localFont({
  variable: "--font-headings",
  src: "./Onest.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export { fontSans, fontHeadings, fontMono };
