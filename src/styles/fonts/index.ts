import localFont from "next/font/local";
import { Instrument_Sans } from "next/font/google";

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

const fontHeadings = Instrument_Sans({
  variable: "--font-headings",
  subsets: ["latin"],
});

export { fontSans, fontHeadings, fontMono };
