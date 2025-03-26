"use client"; // Only for Next.js

import type { HTMLProps, ReactNode } from "react";
import type { BundledLanguage, BundledTheme } from "shiki";

import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

export interface ShikiThemes {
  light: BundledTheme;
  dark: BundledTheme;
}

export type CodeblockClientProps = {
  children: ReactNode;
  className?: string;
} & HTMLProps<HTMLDivElement>;

export type CodeClientProps = {
  code: string;
  language?: BundledLanguage;
  theme?: ShikiThemes;
  className?: string;
} & HTMLProps<HTMLDivElement>;

const CodeblockClient = (props: CodeblockClientProps) => {
  return (
    <div
      className={cn(
        "not-prose flex w-full flex-col overflow-clip border",
        "border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
        props.className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

const CodeClient = (props: CodeClientProps) => {
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);
  const defaultLanguage: BundledLanguage = "typescript";
  const defaultThemes: ShikiThemes = {
    light: "one-light",
    dark: "one-dark-pro",
  };

  useEffect(() => {
    async function highlight() {
      const html = await codeToHtml(props.code, {
        lang: props.language ? props.language : defaultLanguage,
        themes: {
          light: props.theme?.light ? props.theme.light : defaultThemes.light,
          dark: props.theme?.dark ? props.theme.dark : defaultThemes.dark,
        },
        transformers: [
          {
            name: "pre",
            pre(node) {
              node.properties["background-color"] = "transparent";
            },
          },
        ],
      });
      setHighlightedHtml(html);
    }
    highlight();
  }, [
    defaultThemes.dark,
    defaultThemes.light,
    props.code,
    props.language,
    props.theme,
  ]);

  return highlightedHtml ? (
    <div
      className={cn("shiki-client font-mono", props.className)}
      dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      {...props}
    />
  ) : (
    <div className={cn("shiki-client", props.className)} {...props}>
      <pre>
        <code>{props.code}</code>
      </pre>
    </div>
  );
};

export { CodeblockClient, CodeClient };
