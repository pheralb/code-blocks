import type { Metadata } from "next";

import { allDocs } from "content-collections";
import { notFound } from "next/navigation";
import { MDX } from "@/mdx";
import { cn } from "@/utils/cn";
import { container } from "@/ui/container";

const indexPage = "index";

export async function generateMetadata(): Promise<Metadata> {
  const document = allDocs.find((post) => post.slug === indexPage);
  if (!document) {
    return notFound();
  }
  return {
    title: `${document.title} - @pheralb/codeblocks`,
  };
}

const Page = () => {
  const document = allDocs.find((post) => post.slug === indexPage);

  if (!document) {
    return notFound();
  }

  return (
    <article className={cn(container)}>
      <MDX code={document.mdxSource} />
    </article>
  );
};

export default Page;
