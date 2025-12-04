import {
  ArrowDown01Icon,
  HighlighterIcon,
  HouseIcon,
  ListPlusIcon,
  TextQuoteIcon,
  TextWrapIcon,
  WrenchIcon,
  type LucideIcon,
} from "lucide-react";

interface Item {
  title: string;
  icon: LucideIcon;
  href: string;
}

interface SidebarLinks {
  groupTitle: string;
  items: Item[];
}

export const SidebarLinksData: SidebarLinks[] = [
  {
    groupTitle: "Getting Started",
    items: [
      {
        title: "Introduction",
        icon: HouseIcon,
        href: "/docs/getting-started/introduction",
      },
      {
        title: "Prerequisites",
        icon: WrenchIcon,
        href: "/docs/getting-started/prerequisites",
      },
    ],
  },
  {
    groupTitle: "Shiki",
    items: [
      {
        title: "Highlighter",
        icon: HighlighterIcon,
        href: "/docs/shiki/highlighter",
      },
      {
        title: "Line Numbers",
        icon: ArrowDown01Icon,
        href: "/docs/shiki/line-numbers",
      },
      {
        title: "Word Wrap",
        icon: TextWrapIcon,
        href: "/docs/shiki/word-wrap",
      },
      {
        title: "Meta Highlight",
        icon: TextQuoteIcon,
        href: "/docs/shiki/meta-highlight",
      },
      {
        title: "Notation Diff",
        icon: ListPlusIcon,
        href: "/docs/shiki/notation-diff",
      },
    ],
  },
];
