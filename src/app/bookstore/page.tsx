"use client";

import { useState, useMemo } from "react";
import BookCard from "@/components/BookCard";
import BackToTop from "@/components/BackToTop";
import { allBooks } from "@/lib/books";

const categories = ["All", "Biblical Studies", "Commentaries", "Biblical Counseling", "Practical Theology"];

export default function BookstorePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");

  const results = useMemo(() => {
    let books = activeCategory === "All"
      ? allBooks
      : allBooks.filter((b) => b.category === activeCategory);

    if (search.trim()) {
      const q = search.toLowerCase();
      books = books.filter((b) => b.title.toLowerCase().includes(q));
    }

    return [...books].sort((a, b) => {
      if (sortBy === "name") return a.title.localeCompare(b.title);
      if (sortBy === "price") return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      return 0;
    });
  }, [activeCategory, sortBy, search]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allBooks.length };
    for (const b of allBooks) {
      if (b.category) counts[b.category] = (counts[b.category] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <>
      <BackToTop />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Shop Online
          </p>
          <h1 className="font-(family-name:--font-serif) text-4xl md:text-5xl font-bold text-white">
            The Kress Bookstore
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Browse our complete catalog of over 90 books covering biblical
            studies, commentaries, counseling, and practical theology.
          </p>

          {/* Search bar in hero */}
          <div className="mt-8 max-w-xl">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search books by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/15 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-10 md:py-14 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toolbar */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-text-light hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                  <span className={`ml-1.5 text-xs ${activeCategory === cat ? "text-white/60" : "text-text-light/50"}`}>
                    ({categoryCounts[cat] || 0})
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-text-light text-sm">
                {results.length} {results.length === 1 ? "book" : "books"}
                {activeCategory !== "All" && ` in ${activeCategory}`}
                {search && ` matching "${search}"`}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="default">Default Order</option>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="font-(family-name:--font-serif) text-xl font-bold text-primary mb-2">No books found</h3>
              <p className="text-text-light">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-light transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
