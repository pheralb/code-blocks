import { highlight as highlighter } from "sugar-high";

interface Highlighter {
  code: string;
}

const highlight = ({ code }: Highlighter) => {
  const result = highlighter(code);
  return result;
};

export { highlight };
