import type { JSX, SVGProps } from "react";
import type { Languages } from "@/utils/shiki";

import { ReactIcon } from "@/components/ui/svgs/react";

interface LanguageSvgsType {
  title: string;
  language: Languages;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const LanguageSvgs: LanguageSvgsType[] = [
  {
    title: "React",
    language: "tsx",
    icon: ReactIcon,
  },
];
