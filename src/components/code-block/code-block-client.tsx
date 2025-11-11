"use client";

import { useEffect, useState, type ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { shikiHighlighter, type Languages, type Themes } from "@/utils/shiki";

interface CodeBlockClientProps extends ComponentProps<"div"> {
  code: string;
  language?: Languages;
  theme?: Themes;
}

const CodeBlockClient = ({
  code,
  language = "tsx",
  theme = "one-dark-pro",
  className,
  ...props
}: CodeBlockClientProps) => {
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);

  useEffect(() => {
    async function highlight() {
      if (!code) {
        setHighlightedHtml("<pre><code></code></pre>");
        return;
      }
      const highlighter = await shikiHighlighter();
      const html = await highlighter.codeToHtml(code, {
        lang: language,
        theme,
      });
      setHighlightedHtml(html);
    }
    highlight();
  }, [code, language, theme]);

  const classNames = cn(
    "w-full overflow-x-auto text-[13px] [&>pre]:px-4 [&>pre]:py-4",
    className,
  );

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

export { CodeBlockClient };
