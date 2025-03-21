import type { Metadata } from "next";

import { allDocs } from "content-collections";
import { notFound } from "next/navigation";
import { MDX } from "@/mdx";

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

  return <MDX code={document.mdxSource} />;
};

export default Page;
