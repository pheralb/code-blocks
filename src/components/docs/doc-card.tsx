import { getDocument } from "@/utils/docs";
import { ArrowUpRightIcon, FileIcon } from "lucide-react";
import { ExternalLink } from "@/components/ui/external-link";

interface DocCardProps {
  document: string;
  folder: string;
}

const DocCard = ({ document, folder }: DocCardProps) => {
  const documentData = getDocument({ folder, document });
  return (
    <ExternalLink
      href={`/docs/${folder}/${document}`}
      className="not-prose relative"
    >
      <div className="rounded-lg border border-neutral-200 bg-neutral-200/40 p-3 transition-colors duration-200 ease-in-out hover:border-neutral-300 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-neutral-700 hover:dark:bg-neutral-800">
        <div className="flex items-center space-x-2">
          <FileIcon size={16} />
          <h3 className="font-medium text-white">{documentData?.title}</h3>
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
