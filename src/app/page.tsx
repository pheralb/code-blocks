import type { Metadata } from "next";

import { allDocs } from "content-collections";
import { notFound } from "next/navigation";

import { MDX } from "@/mdx";
import Article from "@/components/article";
import { globals } from "@/globals";

const indexPage = "index";

export async function generateMetadata(): Promise<Metadata> {
  const document = allDocs.find((post) => post.slug === indexPage);
  if (!document) {
    return notFound();
  }
  return {
    title: `${document.title} - ${globals.name}`,
    description: document.description,
  };
}

const Page = () => {
  const document = allDocs.find((post) => post.slug === indexPage);

  if (!document) {
    return notFound();
  }

  return (
    <Article>
      <MDX code={document.mdxSource} />
    </Article>
  );
};

export default Page;
