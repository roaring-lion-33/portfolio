// lib/mdxOptions.ts
import rehypePrettyCode from "rehype-pretty-code";

export const mdxOptions = {
  rehypePlugins: [
    [
      rehypePrettyCode,
      {
        theme: "github-dark", // or "github-light", "one-dark-pro", "dracula"
        keepBackground: false,
        tokensMap: {
          fn: "entity.name.function",
        },
      },
    ],
  ],
};
