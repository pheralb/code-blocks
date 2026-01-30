import { HeartHandshakeIcon } from "lucide-react";
import { ExternalLink } from "@/components/ui/external-link";
import { buttonVariants } from "@/components/ui/button";

const SponsorLink = () => {
  return (
    <ExternalLink
      title="Sponsor me on GitHub"
      href="https://github.com/sponsors/pheralb"
      className={buttonVariants({
        variant: "ghost",
        size: "icon",
      })}
    >
      <HeartHandshakeIcon size={20} />
    </ExternalLink>
  );
};

export default SponsorLink;
