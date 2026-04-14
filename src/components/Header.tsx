"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/bookstore", label: "Bookstore" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold font-(family-name:--font-serif) text-xl">K</span>
            </div>
            <div>
              <span className="text-xl font-bold text-primary font-(family-name:--font-serif) tracking-tight">
                Kress Biblical
              </span>
              <span className="hidden sm:block text-xs text-text-light tracking-wide uppercase">
                Resources
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-light hover:text-primary transition-colors rounded-lg hover:bg-warm-gray"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/bookstore"
              className="ml-3 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              Shop Now
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-light hover:text-primary"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-warm-gray rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/bookstore"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-2 px-5 py-3 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
