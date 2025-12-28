import { globals } from "@/globals";

import { GitHub } from "@/components/ui/svgs/github";
import { ExternalLink } from "@/components/ui/external-link";
import { buttonVariants } from "@/components/ui/button";

const GithubLink = () => {
  return (
    <ExternalLink
      title="GitHub Repository"
      href={globals.githubUrl}
      className={buttonVariants({
        variant: "ghost",
        size: "icon",
      })}
    >
      <GitHub width={18} height={18} />
    </ExternalLink>
  );
};

export default GithubLink;
