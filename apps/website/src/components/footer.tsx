import { globals } from "@/globals";
import { ExternalLink } from "@/components/ui/external-link";
import { GitHub, XformerlyTwitter } from "@/components/ui/svgs";
import Container from "@/components/container";
import { ArrowUpRightIcon, SparklesIcon } from "lucide-react";

const Links = [
  {
    title: "GitHub",
    href: globals.githubUrl,
    icon: <GitHub height={14} />,
  },
  {
    title: "Twitter",
    href: globals.twitterUrl,
    icon: <XformerlyTwitter height={14} />,
  },
];

const Footer = () => {
  return (
    <footer className="py-6">
      <Container>
        <div className="flex flex-wrap justify-between gap-6">
          <ExternalLink
            href="https://pheralb.dev/"
            className="font-headings order-last flex items-center text-center text-sm text-neutral-600 transition-colors hover:text-neutral-950 md:order-first dark:text-neutral-400 dark:hover:text-neutral-50"
          >
            <SparklesIcon size={14} className="mr-2" />
            <span>Created by pheralb</span>
            <ArrowUpRightIcon size={12} className="ml-1" />
          </ExternalLink>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {Links.map((link, index) => (
              <ExternalLink
                key={index}
                href={link.href}
                className="flex items-center space-x-2 text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                {link.icon}
                <span>{link.title}</span>
              </ExternalLink>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
