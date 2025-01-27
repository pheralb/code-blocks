import { Geist, Geist_Mono, Onest } from "next/font/google";

export const fontSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const fontHeadings = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
