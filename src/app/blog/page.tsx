import { getStaticPosts } from "@/lib/getStaticPosts";
import Link from "next/link";

export default async function BlogIndexPage() {
  const posts = await getStaticPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map(({ slug, metadata }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <h2 className="text-xl font-semibold text-blue-700 hover:underline">
                {metadata.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">{metadata.date}</p>
            <p>{metadata.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
