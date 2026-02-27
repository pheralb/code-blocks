import { getDocument } from "@/utils/docs";

import { ExternalLink } from "@/components/ui/external-link";
import { FileIcon, ChevronRightIcon, CornerDownRightIcon } from "lucide-react";

interface DocCardProps {
  document: string;
  folder: string;
  anchor?: string;
}

const DocCard = ({ document, folder, anchor }: DocCardProps) => {
  const documentData = getDocument({ folder, document });
  return (
    <ExternalLink
      href={`/docs/${folder}/${document}${anchor ? `#${anchor}` : ""}`}
      className="not-prose"
    >
      <div className="rounded-lg border border-neutral-200 bg-neutral-200/40 p-3 transition-colors duration-200 ease-in-out hover:border-neutral-300 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-neutral-700 hover:dark:bg-neutral-800">
        <div className="flex items-center space-x-2">
          <FileIcon size={16} />
          <div className="flex items-center space-x-1 font-medium text-black dark:text-white">
            <span className="text-neutral-600 dark:text-neutral-400">
              {documentData?.folder}
            </span>
            <ChevronRightIcon size={12} />
            <span>{documentData?.title}</span>
            {anchor && (
              <>
                <ChevronRightIcon size={12} />
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  #{anchor}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex max-w-4xl items-center space-x-1.5 truncate text-sm text-neutral-600 dark:text-neutral-400">
          <CornerDownRightIcon size={12} className="shrink-0" />
          <p className="truncate">{documentData?.description}</p>
        </div>
      </div>
    </ExternalLink>
  );
};

export default DocCard;
