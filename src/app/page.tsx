import { getDocument } from "@/utils/docs";
import { notFound } from "next/navigation";

import MDX from "@/components/mdx";
import Article from "@/components/docs/doc-article";
import Container from "@/components/container";

import Header from "@/components/header";
import Footer from "@/components/footer";

const Home = () => {
  const document = getDocument({
    folder: "general",
    document: "home",
  });
  if (!document) return notFound();
  return (
    <>
    <Container>
      <Header layout="app" />
      <Article className="pb-12">
        <MDX code={document.mdx} />
      </Article>
    </Container>
    <Footer />
    </>
  );
};

export default Home;
