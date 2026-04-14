"use client";

import Link from "next/link";
import type { Book } from "@/lib/books";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/30">
      <Link href={`/bookstore/${book.slug}`} className="block">
        <div className="relative aspect-[2/3] bg-warm-gray overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {book.category && (
            <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
              {book.category}
            </span>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg">
              View Details
            </span>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/bookstore/${book.slug}`}>
          <h3 className="font-(family-name:--font-serif) text-base font-semibold text-text leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {book.title}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-accent">{book.price}</span>
          {book.amazonUrl ? (
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
            >
              Buy Now
            </a>
          ) : (
            <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
