import Prism from "prismjs";

// Languages
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markdown";

type Languages =
  | "typescript"
  | "tsx"
  | "jsx"
  | "bash"
  | "json"
  | "css"
  | "markdown";

interface Highlighter {
  code: string;
  language?: Languages;
}

const highlight = ({ code, language = "typescript" }: Highlighter) => {
  const grammar = Prism.languages[language];
  const html = grammar ? Prism.highlight(code, grammar, language) : code;
  return html
    .split("\n")
    .map((line) => `<span class="prism__line">${line}</span>`)
    .join("\n");
};

export { highlight, type Languages };
