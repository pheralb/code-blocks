import type { NextConfig } from "next";

import { globals } from "@/globals";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs/:folder/:slug*.mdx",
        destination: "/api/docs/:folder/:slug*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started/prerequisites",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/docs/react/copy-button",
        permanent: true,
      },
      {
        source: "/blocks",
        destination: "/docs/react/blocks/inline-code",
        permanent: true,
      },
      {
        source: "/git",
        destination: globals.githubUrl,
        permanent: true,
      },
    ];
  },
};

export default withContentCollections(nextConfig);
