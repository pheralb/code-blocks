import type { HTMLProps } from "react";
import { FileIcon } from "lucide-react";

import CopyToClipboardBtn from "./copyToClipboard";
import { Languages } from "./settings";

interface PreProps extends HTMLProps<HTMLPreElement> {
  ["data-code"]?: string;
  ["data-language"]?: string;
}

const CodeblockMDX = (props: PreProps) => {
  const {
    children,
    ["data-code"]: rawstring,
    ["data-language"]: dataLanguage = "Shell",
  } = props;
  const selectedLanguage = Languages.find((lang) => lang.name === dataLanguage);
  return (
    <section className="not-prose pb-2">
      <div className="flex items-center justify-between rounded-t-md border-t border-r border-l border-neutral-200 px-1.5 py-1 dark:border-neutral-800 dark:bg-neutral-800/40 bg-neutral-200/40">
        <div className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400">
          {selectedLanguage?.icon ? (
            <selectedLanguage.icon
              className="h-[18px] w-[18px]"
              aria-description={dataLanguage}
            />
          ) : (
            <FileIcon size={14} />
          )}
          <span className="font-mono text-sm tracking-tight">
            {dataLanguage}
          </span>
        </div>
        <CopyToClipboardBtn content={rawstring || ""} />
      </div>
      <div className="max-h-64 overflow-y-auto rounded-b-md border border-neutral-200 p-3 dark:border-neutral-800">
        <pre {...props}>{children}</pre>
      </div>
    </section>
  );
};

export default CodeblockMDX;
