import { cn } from "@/utils/cn";
import Container from "./container";
import { HeartIcon } from "lucide-react";
import { ExternalLink } from "./ui/external-link";

const Footer = () => {
  return (
    <footer
      className={cn(
        "flex w-full items-center py-4.5",
        "text-sm text-neutral-600 dark:text-neutral-400",
      )}
    >
      <Container className="flex items-center justify-center space-x-1.5">
        <p>Made with</p>
        <HeartIcon className="size-4 text-red-500" />
        <p>
          by{" "}
          <ExternalLink
            href="https://pheralb.dev"
            className="underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-black hover:decoration-black dark:decoration-neutral-600 dark:hover:text-white dark:hover:decoration-white"
          >
            pheralb
          </ExternalLink>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
