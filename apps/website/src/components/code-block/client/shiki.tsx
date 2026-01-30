"use client";

import { useEffect, useState, type ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { highlight, Themes, type Languages } from "@/utils/shiki";

interface CodeblockClientShikiProps extends ComponentProps<"div"> {
  code: string;
  language?: Languages;
}

const CodeblockShiki = ({
  code,
  language = "tsx",
  className,
  ...props
}: CodeblockClientShikiProps) => {
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);

  useEffect(() => {
    async function clientHighlight() {
      if (!code) {
        setHighlightedHtml("<pre><code></code></pre>");
        return;
      }
      const highlighter = await highlight();
      const html = highlighter.codeToHtml(code, {
        lang: language,
        themes: {
          light: Themes.light,
          dark: Themes.dark,
        },
      });
      setHighlightedHtml(html);
    }
    void clientHighlight();
  }, [code, language]);

  const classNames = cn("w-full overflow-x-auto", className);

  // SSR fallback
  return highlightedHtml ? (
    <div
      className={classNames}
      dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      {...props}
    />
  ) : (
    <div className={classNames} {...props}>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export { CodeblockShiki };
