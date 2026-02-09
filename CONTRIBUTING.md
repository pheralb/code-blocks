## Contributing to Code-Blocks

Thank you for considering contributing to pheralb/code-blocks! This guide will help you get started with the process of contributing to the project.

## Getting Started

1. [**Click here**](https://github.com/pheralb/code-blocks/fork) to fork the repository on GitHub.

2. Clone your forked repository to your local machine:

```bash
git clone git@github.com:your_username/code-blocks.git
```

3. Navigate to the project directory:

```bash
cd code-blocks
```

4. Install [pnpm](https://pnpm.io/) if you haven't already:

```bash
npm install pnpm@latest -g

# Check if pnpm is installed correctly
pnpm -v
```

## Development Setup

> Make sure you have Node.js +22 installed. Click [here](https://nodejs.org/en/download/) to download the latest version.

1. Install the dependencies:

```bash
pnpm i
```

2. Start the development server:

```bash
pnpm dev
```

and open [http://localhost:3000](http://localhost:3000) in your browser to see the documentation site.

## Adding New Components/Utilities

### New Component

All the components are located in the [`apps/website/src/components/code-block`](https://github.com/pheralb/code-blocks/tree/main/apps/website/src/components/code-block) directory.

The folder structure is organized as follows:

```
- 📁 blocks
- 📁 client
- 📁 mdx
- ⚛️ code-block.tsx
- ⚛️ copy-button.tsx
```

- `⚛️ code-block.tsx`: The main code block component structure with header, group and content area.
- `📁 blocks`: `📁 client` & `⚛️ code-block.tsx` with extended features, for example, multi-tabs, select package manager...
- `📁 client`: (`⚛️ code-block.tsx`) with syntax highlighting rendered on the client.
- `📁 mdx`: `<pre>` element with (`⚛️ code-block.tsx`) and syntax highlighting config.

1. Create a new file for your component in the appropriate directory (e.g., `apps/website/src/components/code-block/blocks`). If they are elements within code-block, you can create it outside in /code-blocks (e.g., `copy-button.tsx`).

2. Create a preview of your component in the [`apps/website/src/components/previews`](https://github.com/pheralb/code-blocks/tree/main/apps/website/src/components/previews).

3. Go to the registry data file [`apps/website/src/components/registry/data.tsx`](https://github.com/pheralb/code-blocks/blob/main/apps/website/src/components/registry/data.tsx) and add an entry for your new component.

> `reactComponent` is used for the live preview, import the component that you create in step 2.

4. Create the documentation for your component in the [`apps/website/src/docs/react`](https://github.com/pheralb/code-blocks/tree/main/apps/website/src/docs/react) directory. Add the following metadata to the top of your documentation file:

```mdx
---
title: ""
description: ""
category: [""]
---
```

### New Utility

The utilities are located in the [`apps/website/src/utils`](https://github.com/pheralb/code-blocks/tree/main/apps/website/src/utils) directory.

The folder structure is organized as follows:

```
- 📁 shiki
- 📁 sugar-high
```

- `📁 shiki`: Shiki highlighter utility with custom transformers.
- `📁 sugar-high`: Sugar-high highlighter utility.

1. Create a new file for your utility in the appropriate directory (e.g., `apps/website/src/utils/shiki`).

2. Create the documentation for your utility in the:

- Shiki: [`apps/website/src/docs/shiki`](https://github.com/pheralb/code-blocks/tree/main/apps/website/src/docs/shiki).
- Sugar-High: [`apps/website/src/docs/sugar-high`](https://github.com/pheralb/code-blocks/tree/main/apps/website/src/docs/sugar-high).

and add the following metadata to the top of your documentation file:

```mdx
---
title: ""
description: ""
category: [""]
---
```

## Submitting Your Changes

1. After making your changes, commit them using Conventional Commits format:

```bash
git add .
git commit -m "feat: add new code block component"
```

2. Push your changes to your forked repository:

```bash
git push origin main
```

3. Go to the [original repository on GitHub](https://github.com/pheralb/code-blocks) and create a new pull request from your forked repository.

Thank you for contributing to pheralb/code-blocks. We look forward to reviewing your pull request and merging your changes into the main project 🚀