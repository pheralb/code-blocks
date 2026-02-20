import { ArrowUpRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "@/components/ui/external-link";

const LineAnchorsExample = () => {
  return (
    <ExternalLink
      href="#example-l5"
      className={buttonVariants({
        size: "sm",
        variant: "outline",
      })}
    >
      <span>Highlight line 5 of the code block</span>
      <ArrowUpRightIcon
        size={14}
        className="text-neutral-600 dark:text-neutral-400"
      />
    </ExternalLink>
  );
};

export default LineAnchorsExample;
