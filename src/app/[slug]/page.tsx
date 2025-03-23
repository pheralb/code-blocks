import type { Metadata } from "next";

import { allDocs } from "content-collections";
import { notFound } from "next/navigation";

import { MDX } from "@/mdx";
import Article from "@/components/article";

type DocPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = allDocs.find((post) => post.slug === slug);

  if (!document) {
    return notFound();
  }

  return {
    title: document.title,
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const document = allDocs.find((post) => post.slug === slug);

  if (!document) {
    return notFound();
  }

  return (
    <Article>
      <MDX code={document.mdxSource} />
    </Article>
  );
}
