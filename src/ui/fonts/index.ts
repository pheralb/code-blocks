import localFont from "next/font/local";

export const fontSans = localFont({
  variable: "--font-sans",
  src: "./InterVariable.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const fontMono = localFont({
  variable: "--font-mono",
  src: "./CascadiaCodePL.woff2",
  weight: "400 900",
  display: "swap",
  preload: true,
});

export const fontHeadings = localFont({
  variable: "--font-headings",
  src: "./Satoshi-Variable.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});
