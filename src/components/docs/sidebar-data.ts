import {
  ClipboardIcon,
  FileCodeCornerIcon,
  HighlighterIcon,
  HouseIcon,
  ListIndentIncreaseIcon,
  ListOrderedIcon,
  ListPlusIcon,
  SquareCodeIcon,
  SquareDashedIcon,
  TagsIcon,
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
        href: "/",
      },
      {
        title: "Prerequisites",
        icon: WrenchIcon,
        href: "/docs/getting-started/prerequisites",
      },
    ],
  },
  {
    groupTitle: "Components",
    items: [
      {
        title: "Copy Button",
        icon: ClipboardIcon,
        href: "/docs/components/copy-button",
      },
      {
        title: "Code Block",
        icon: SquareDashedIcon,
        href: "/docs/components/code-block",
      },
      {
        title: "Code Block MDX",
        icon: FileCodeCornerIcon,
        href: "/docs/components/code-block-mdx",
      },
      {
        title: "Code Block Client",
        icon: SquareCodeIcon,
        href: "/docs/components/code-block-client",
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
        title: "Add Properties",
        icon: TagsIcon,
        href: "/docs/shiki/add-properties",
      },
      {
        title: "Line Numbers",
        icon: ListOrderedIcon,
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
      {
        title: "Notation Focus",
        icon: ListIndentIncreaseIcon,
        href: "/docs/shiki/notation-focus",
      },
    ],
  },
];
