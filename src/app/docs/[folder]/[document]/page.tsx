import { notFound } from "next/navigation";

import MDX from "@/mdx/mdx";
import { cn } from "@/utils/cn";
import { getDocument } from "@/utils/docs";

import Article from "@/components/article";
import Container from "@/components/container";
import TableOfContents from "@/components/docs/toc-menu";

interface DocsPageProps {
  params: Promise<{ folder: string; document: string }>;
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
      <Container className="py-6 md:py-8">
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
