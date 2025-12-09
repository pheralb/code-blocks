import type { Metadata } from "next";

import { globals } from "@/globals";
import { notFound } from "next/navigation";

import MDX from "@/components/mdx";
import { cn } from "@/utils/cn";
import { getDocument } from "@/utils/docs";

import Article from "@/components/docs/doc-article";
import Container from "@/components/container";
import DocHeader from "@/components/docs/doc-header";
import TableOfContents from "@/components/docs/toc-menu";

interface DocsPageProps {
  params: Promise<{ folder: string; document: string }>;
}

export async function generateMetadata(
  { params }: DocsPageProps
): Promise<Metadata> {
  const { folder, document } = await params;
  const data = getDocument({
    folder,
    document,
  });
  return {
    title: `${data?.title} - ${globals.title}`,
    description: data?.description
  }
}


const DocsPage = async ({ params }: DocsPageProps) => {
  const { folder, document } = await params;
  const data = getDocument({
    folder,
    document,
  });
  if (!data) return notFound();
  return (
    <>
      <Container className="flex flex-col space-y-8 py-6 md:py-8">
        <DocHeader title={data.title} description={data.description} />
        <Article>
          <MDX code={data.mdx} />
        </Article>
      </Container>
      <aside
        className={cn("fixed top-16 right-8 h-full w-56", "hidden xl:block")}
      >
        <TableOfContents data={data.tableOfContents} />
      </aside>
    </>
  );
};

export default DocsPage;