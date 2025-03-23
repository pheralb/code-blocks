import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

export const fontSans = localFont({
  variable: "--font-sans",
  src: "./InterVariable.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const fontMono = Geist_Mono({
  variable: "--font-mono",
});

export const fontHeadings = localFont({
  variable: "--font-headings",
  src: "./Satoshi-Variable.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});
