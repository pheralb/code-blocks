import type { Metadata } from "next";

import { cn } from "@/utils/cn";
import { globals } from "@/globals";
import { notFound } from "next/navigation";
import { getGeneralDocument } from "@/utils/docs";

import Article from "@/components/docs/doc-article";
import Container from "@/components/container";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { GitHub } from "@/components/ui/svgs";
import { ArrowUpRightIcon } from "lucide-react";

import MDX from "@/components/mdx";
import GetStartedLink from "@/components/home/get-started-link";
import InstallCommands from "@/components/home/install-commands";

import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "@/components/ui/external-link";

export async function generateMetadata(): Promise<Metadata> {
  const websiteUrl = "https://code-blocks.pheralb.dev";
  const data = getGeneralDocument("home");
  return {
    openGraph: {
      type: "website",
      url: websiteUrl,
      title: `${data?.title} - ${globals.title}`,
      description: data?.description,
      siteName: websiteUrl,
      images: [
        {
          url: new URL(`/api/docs/og?document=home&folder=general`, websiteUrl),
        },
      ],
    },
  };
}

const Home = () => {
  const document = getGeneralDocument("home");
  if (!document) return notFound();
  return (
    <main className="pb-4">
      <Container>
        <Header layout="app" />
        <div
          className={cn(
            "not-prose",
            "flex flex-col space-y-6 pt-10 md:pt-12",
            "animate-in fill-mode-backwards fade-in slide-in-from-bottom-2 duration-500",
          )}
        >
          <div className="flex flex-col items-start justify-center space-y-2 md:items-center">
            <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Build beautiful code blocks
            </h1>
            <p className="font-medium text-neutral-500 dark:text-neutral-400">
              Ready to use UI components and utilities to show your snippets
              beautifully.
            </p>
          </div>
          <div
            className={cn(
              "flex flex-row items-center justify-center space-x-2",
            )}
          >
            <GetStartedLink />
            <ExternalLink
              title="GitHub"
              href={globals.githubUrl}
              className={buttonVariants({
                size: "default",
                variant: "outline",
                className: "w-full no-underline md:w-40",
              })}
            >
              <div className="flex items-center space-x-2">
                <GitHub height={14} />
                <span>GitHub</span>
              </div>
              <ArrowUpRightIcon size={12} />
            </ExternalLink>
          </div>
          <InstallCommands />
        </div>
        <div className="animate-in fill-mode-backwards fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <div className="my-8 h-px bg-neutral-200 dark:bg-neutral-800" />
          <Article className="prose-h2:border-0 prose-h2:pb-0 prose-h2:text-2xl pb-8">
            <MDX code={document.mdx} />
          </Article>
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default Home;
