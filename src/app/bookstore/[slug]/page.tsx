import Link from "next/link";
import { notFound } from "next/navigation";
import { allBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";

export function generateStaticParams() {
  return allBooks.map((book) => ({ slug: book.slug }));
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = allBooks.find((b) => b.slug === slug);
  if (!book) return notFound();

  const related = allBooks
    .filter((b) => b.category === book.category && b.slug !== book.slug)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-warm-gray border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/bookstore" className="hover:text-primary transition-colors">Bookstore</Link>
            <span>/</span>
            <span className="text-primary font-medium truncate">{book.title}</span>
          </nav>
        </div>
      </section>

      {/* Book Detail */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative max-w-[400px] w-full">
                <div className="aspect-[2/3] rounded-2xl overflow-hidden bg-warm-gray shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {book.category && (
                  <span className="absolute top-4 left-4 bg-primary/90 text-white text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
                    {book.category}
                  </span>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              {book.category && (
                <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
                  {book.category}
                </p>
              )}
              <h1 className="font-(family-name:--font-serif) text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
                {book.title}
              </h1>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-accent">{book.price}</span>
                <span className="text-text-light text-sm">+ shipping</span>
              </div>

              <div className="bg-cream rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-primary mb-3">About this Book</h3>
                <p className="text-text-light leading-relaxed text-sm">
                  Part of the Kress Biblical Resources catalog of over 90 books.
                  This resource is designed for pastors, Bible students, and anyone
                  serious about studying God&apos;s Word with exegetical depth and
                  doctrinal precision.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {book.amazonUrl ? (
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors text-lg"
                  >
                    Buy on Amazon
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <button className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors text-lg">
                    Add to Cart
                  </button>
                )}
                <Link
                  href="/bookstore"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-text font-semibold rounded-xl hover:bg-warm-gray transition-colors"
                >
                  Back to Store
                </Link>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
                {[
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Doctrinally Sound" },
                  { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", label: "Free Shipping 5+" },
                  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Fast Delivery" },
                ].map((badge) => (
                  <div key={badge.label} className="text-center">
                    <svg className="w-6 h-6 mx-auto mb-1 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={badge.icon} />
                    </svg>
                    <p className="text-xs text-text-light">{badge.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Books */}
      {related.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-(family-name:--font-serif) text-2xl md:text-3xl font-bold text-primary mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map((b) => (
                <BookCard key={b.slug} book={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
