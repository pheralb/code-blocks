import { getDocument } from "@/utils/docs";
import { ArrowUpRightIcon, ChevronRightIcon, FileIcon } from "lucide-react";
import { ExternalLink } from "@/components/ui/external-link";

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
      className="not-prose relative"
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
          </div>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {documentData?.description}
        </p>
      </div>
      <ArrowUpRightIcon className="absolute top-2 right-2 h-4 w-4 text-neutral-600 dark:text-neutral-400" />
    </ExternalLink>
  );
};

export default DocCard;
