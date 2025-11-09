import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

const fontSans = localFont({
  variable: "--font-sans",
  src: "./InterVariable.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export { fontSans, fontMono };
