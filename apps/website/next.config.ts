import type { NextConfig } from "next";
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
    ];
  },
};

export default withContentCollections(nextConfig);
