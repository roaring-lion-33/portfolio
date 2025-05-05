import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${params.slug}.mdx`
  );
  if (!fs.existsSync(filePath)) return notFound();

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data: metadata } = matter(source);

  return (
    <article className="prose prose-github dark:prose-invert">
      <h1>{metadata.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{metadata.date}</p>
      <MDXRemote source={content} />
    </article>
  );
}
