import Link from "next/link";
import { blogPosts } from "@/lib/books";

export const metadata = {
  title: "Blog | Kress Biblical Resources",
  description: "Articles and resources from Kress Biblical Resources.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Our Blog
          </p>
          <h1 className="font-(family-name:--font-serif) text-4xl md:text-5xl font-bold text-white">
            Articles &amp; Resources
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Curated recommendations and insights for pastors, expositors, and
            serious Bible students.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 md:py-20 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {post.date}
                  </time>
                  <span className="text-xs text-text-light">{post.author}</span>
                </div>
                <h2 className="font-(family-name:--font-serif) text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors mb-3">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-text-light leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors group/link"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
