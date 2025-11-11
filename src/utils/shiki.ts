import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import {
  type HighlighterCore,
  type RegexEngine,
  createHighlighterCore,
} from "shiki/core";

// Themes:
import lightTheme from "@shikijs/themes/one-light";
import darkTheme from "@shikijs/themes/one-dark-pro";

// Languages:
import js from "@shikijs/langs/js";
import ts from "@shikijs/langs/ts";
import tsx from "@shikijs/langs/tsx";
import css from "@shikijs/langs/css";
import bash from "@shikijs/langs/bash";
import markdown from "@shikijs/langs/markdown";

let jsEngine: RegexEngine | null = null;
let highlighter: Promise<HighlighterCore> | null = null;

// Set types for UI Components
type Themes = "one-light" | "one-dark-pro";
type Languages = "js" | "ts" | "tsx" | "css" | "bash" | "markdown";

const getJsEngine = (): RegexEngine => {
  jsEngine ??= createJavaScriptRegexEngine();
  return jsEngine;
};

const shikiHighlighter = async (): Promise<HighlighterCore> => {
  highlighter ??= createHighlighterCore({
    themes: [lightTheme, darkTheme],
    langs: [bash, js, ts, tsx, css, markdown],
    engine: getJsEngine(),
  });
  return highlighter;
};

export { shikiHighlighter, type Themes, type Languages };
