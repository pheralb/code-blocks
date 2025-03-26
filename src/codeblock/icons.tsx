import type { JSX } from "react";

import {
  Js,
  BracketsGreen,
  Document,
  Reactts,
  TypeScript,
  BracketsBlue,
} from "@react-symbols/icons";

const iconSize = 16;

export interface IconsData {
  lang?: string;
  name: string;
  icon: JSX.Element;
}

export const icons: IconsData[] = [
  {
    name: "Document",
    icon: <Document width={iconSize} height={iconSize} />,
  },
  {
    lang: "tsx",
    name: "React",
    icon: <Reactts width={iconSize} height={iconSize} />,
  },
  {
    lang: "ts",
    name: "TypeScript",
    icon: <TypeScript width={iconSize} height={iconSize} />,
  },
  {
    lang: "js",
    name: "JavaScript",
    icon: <Js width={iconSize} height={iconSize} />,
  },
  {
    lang: "bash",
    name: "Terminal",
    icon: <BracketsGreen width={iconSize} height={iconSize} />,
  },
  {
    lang: "css",
    name: "CSS",
    icon: <BracketsBlue width={iconSize} height={iconSize} />,
  },
];
