import path from "path";
import fs from "fs";

type Metadata = {
  title: string;
  date: string;
  summary: string;
};

export async function getStaticPosts() {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  const posts: { slug: string; metadata: Metadata }[] = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(blogDir, file);
    const contents = fs.readFileSync(filePath, "utf8");

    const match = contents.match(/export const metadata = ({[\s\S]*?});?/);
    if (!match) continue;

    try {
      const metadata = eval('(' + match[1] + ')'); // Caution: eval is OK here since you're parsing trusted static content
      posts.push({ slug, metadata });
    } catch (e) {
      console.warn(`Failed to parse metadata in ${file}:`, e);
    }
  }

  return posts.sort((a, b) =>
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}
