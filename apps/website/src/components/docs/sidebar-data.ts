import {
  CandyIcon,
  ClipboardIcon,
  FileCodeCornerIcon,
  HighlighterIcon,
  HouseIcon,
  ListIndentIncreaseIcon,
  ListOrderedIcon,
  ListPlusIcon,
  PackageIcon,
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
  icon?: LucideIcon;
  href?: string;
  subItems?: Item[];
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
        href: "/docs/react/copy-button",
      },
      {
        title: "Code Block",
        icon: SquareDashedIcon,
        href: "/docs/react/code-block",
      },
      {
        title: "Code Block MDX",
        icon: FileCodeCornerIcon,
        href: "/docs/react/code-block-mdx",
      },
      {
        title: "Code Block Client",
        icon: SquareCodeIcon,
        subItems: [
          {
            title: "Shiki",
            href: "/docs/react/code-block-client-shiki",
          },
          {
            title: "Sugar High",
            href: "/docs/react/code-block-client-sugar-high",
          },
        ],
      },
      {
        title: "Blocks",
        icon: PackageIcon,
        subItems: [
          {
            title: "Inline Code",
            href: "/docs/react/blocks/inline-code",
          },
          {
            title: "Persist Package Manager",
            href: "/docs/react/blocks/persist-package-manager",
          },
          {
            title: "Select Package Manager",
            href: "/docs/react/blocks/select-package-manager",
          },
          {
            title: "Tabs Package Manager",
            href: "/docs/react/blocks/tabs-package-manager",
          },
        ],
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
  {
    groupTitle: "Sugar High",
    items: [
      {
        title: "Highlighter",
        icon: CandyIcon,
        href: "/docs/sugar-high/highlighter",
      },
    ],
  },
];
