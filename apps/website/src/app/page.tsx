import type { Metadata } from "next";

import { globals } from "@/globals";
import { getDocument } from "@/utils/docs";
import { notFound } from "next/navigation";

import MDX from "@/components/mdx";
import Article from "@/components/docs/doc-article";
import Container from "@/components/container";

import Header from "@/components/header";
import Footer from "@/components/footer";

export async function generateMetadata(): Promise<Metadata> {
  const websiteUrl = "https://code-blocks.pheralb.dev";
  const data = getDocument({
    folder: "general",
    document: "home",
  });
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
  const document = getDocument({
    folder: "general",
    document: "home",
  });
  if (!document) return notFound();
  return (
    <main className="pb-4">
      <Container>
        <Header layout="app" />
        <Article className="pb-8">
          <MDX code={document.mdx} />
        </Article>
      </Container>
      <Footer />
    </main>
  );
};

export default Home;
