interface Globals {
  name: string;
  url: string;
  description: string;
  social: {
    twitter: string;
    github: string;
  };
}

export const globals: Globals = {
  name: "@pheralb/codeblocks",
  url: "https://codeblocks.pheralb.dev",
  description:
    "A beautifully codeblock MDX & client component. Built with Shiki.",
  social: {
    twitter: "https://x.com/pheralb_",
    github: "https://github.com/pheralb/codeblocks",
  },
};
