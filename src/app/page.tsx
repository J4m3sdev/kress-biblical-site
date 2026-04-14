import Link from "next/link";
import BookCard from "@/components/BookCard";
import FadeIn from "@/components/FadeIn";
import BackToTop from "@/components/BackToTop";
import { featuredBooks } from "@/lib/books";

const whyKressFeatures = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Exegetical Depth",
    description: "Every book is rooted in careful, verse-by-verse exposition of the biblical text.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Doctrinally Sound",
    description: "Written by men who hold to the historic, orthodox Christian faith without compromise.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "For Pastors & Students",
    description: "Resources built for those who teach, preach, and counsel from the Word of God.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Tested by Time",
    description: "Over 20 years of publishing resources that have proven faithful across generations.",
  },
];

const authors = [
  { name: "John Kitchen", role: "Pastor & Author", books: "1 Peter, Philippians, Pastoral Epistles" },
  { name: "Eric Kress", role: "Founder & Publisher", books: "Founder of Kress Biblical Resources" },
  { name: "Matt Waymeyer", role: "Pastor & Scholar", books: "Revelation 20, Infant Baptism, Amillennialism" },
  { name: "Greg Harris", role: "Professor & Author", books: "The Cup and the Glory series" },
  { name: "Keith Crosby", role: "Pastor & Teacher", books: "The Holy Spirit According to Jesus" },
  { name: "Kyle Swanson", role: "Scholar & Author", books: "Isaiah's Great Light" },
];

export default function Home() {
  return (
    <>
      <BackToTop />

      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,169,110,0.3),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(201,169,110,0.2),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Academic &middot; Accessible &middot; Practical
              </p>
              <h1 className="font-(family-name:--font-serif) text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Doctrinally Sound
                <br />
                <span className="text-accent">Biblical Resources</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                Books designed to stand the test of exegesis, written by approved
                workmen for pastors and Bible students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/bookstore"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors text-lg"
                >
                  Browse the Bookstore
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Book Covers */}
            <div className="hidden md:flex justify-center items-center relative h-[480px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,110,0.15),transparent_70%)]" />
              <div className="absolute left-4 top-12 w-[180px] rounded-xl overflow-hidden shadow-2xl shadow-black/40 -rotate-6 hover:-rotate-3 hover:scale-105 transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i0.wp.com/www.kressbiblical.com/wp-content/uploads/2025/06/71XtOT0fMZL._SL1500_.webp?resize=400x600&ssl=1" alt="Isaiah's Great Light" className="w-full h-auto" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[200px] rounded-xl overflow-hidden shadow-2xl shadow-black/50 z-20 hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i0.wp.com/www.kressbiblical.com/wp-content/uploads/2025/08/Job-Commentary-Front-Cover-scaled.jpg?resize=400x600&ssl=1" alt="The Slander and Solace of Job" className="w-full h-auto" />
              </div>
              <div className="absolute right-4 top-16 w-[180px] rounded-xl overflow-hidden shadow-2xl shadow-black/40 rotate-6 hover:rotate-3 hover:scale-105 transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i0.wp.com/www.kressbiblical.com/wp-content/uploads/2025/06/51eqpDJXe9L._SL1500_.webp?resize=400x600&ssl=1" alt="The Holy Spirit According to Jesus" className="w-full h-auto" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[170px] rounded-xl overflow-hidden shadow-2xl shadow-black/40 z-10 rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i0.wp.com/www.kressbiblical.com/wp-content/uploads/2024/07/Thumbnail-1-Peter.jpg?resize=400x600&ssl=1" alt="1 Peter for Pastors" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Strip */}
      <section className="bg-warm-gray border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {[
              { name: "Biblical Studies", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { name: "Commentaries", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { name: "Biblical Counseling", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { name: "Practical Theology", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
            ].map((category) => (
              <Link key={category.name} href="/bookstore" className="py-6 md:py-8 text-center group">
                <svg className="w-6 h-6 mx-auto mb-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                </svg>
                <p className="font-(family-name:--font-serif) font-semibold text-primary group-hover:text-accent transition-colors">
                  {category.name}
                </p>
                <p className="text-xs text-text-light mt-1 uppercase tracking-wider">Shop Online</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Quote Banner */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute left-8 top-4 text-[200px] font-bold text-primary/[0.03] leading-none font-(family-name:--font-serif) select-none">
          &ldquo;
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeIn>
            <blockquote>
              <p className="font-(family-name:--font-serif) text-2xl md:text-3xl text-primary leading-relaxed italic">
                &ldquo;Be diligent to present yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth.&rdquo;
              </p>
              <cite className="mt-6 block text-accent font-semibold not-italic text-lg">
                2 Timothy 2:15 (NKJV)
              </cite>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-warm-gray">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://i0.wp.com/www.kressbiblical.com/wp-content/uploads/2018/01/About-1-2.jpg?resize=800x533&ssl=1"
                    alt="About Kress Biblical"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-2xl -z-10" />

                {/* Floating stat card */}
                <div className="absolute -bottom-8 -right-4 md:right-8 bg-white rounded-2xl shadow-xl p-5 z-10">
                  <p className="font-(family-name:--font-serif) text-3xl font-bold text-accent">90+</p>
                  <p className="text-text-light text-sm">Books Published</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div>
                <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">About Us</p>
                <h2 className="font-(family-name:--font-serif) text-3xl md:text-4xl font-bold text-primary mb-6">
                  Kress Biblical Resources
                </h2>
                <p className="text-text-light leading-relaxed mb-4">
                  Kress Biblical Resources is setting a new standard in timely,
                  clear, and doctrinally sound books and resources for pastors and
                  Bible students.
                </p>
                <p className="text-text-light leading-relaxed mb-8">
                  Our authors are approved workmen, not celebrities. Our books are
                  designed to stand the test of exegesis, not chase after every new
                  wind of doctrine.
                </p>

                {/* Mini stats row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: "2002", label: "Founded" },
                    { value: "50+", label: "Authors" },
                    { value: "20+", label: "Years" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                      <p className="font-(family-name:--font-serif) text-xl font-bold text-primary">{s.value}</p>
                      <p className="text-text-light text-xs mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors group"
                >
                  Learn more about us
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Kress */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Why Choose Us</p>
              <h2 className="font-(family-name:--font-serif) text-3xl md:text-4xl font-bold text-primary">
                Built on the Word of God
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyKressFeatures.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 100}>
                <div className="bg-cream rounded-2xl p-7 text-center hover:shadow-lg transition-shadow border border-transparent hover:border-accent/20 group h-full">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-(family-name:--font-serif) text-lg font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Latest Releases</p>
              <h2 className="font-(family-name:--font-serif) text-3xl md:text-4xl font-bold text-primary">
                The Newest Books
              </h2>
              <p className="text-text-light mt-3 max-w-lg mx-auto">
                Our most recent publications, available now for pastors, students, and anyone hungry for the Word.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book, i) => (
              <FadeIn key={book.slug} delay={i * 100}>
                <BookCard book={book} />
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center mt-12">
              <Link
                href="/bookstore"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors"
              >
                View All Books
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Authors Showcase */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Our Authors</p>
              <h2 className="font-(family-name:--font-serif) text-3xl md:text-4xl font-bold text-primary">
                Approved Workmen
              </h2>
              <p className="text-text-light mt-3 max-w-lg mx-auto">
                Faithful pastors, professors, and scholars committed to rightly dividing the Word of truth.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {authors.map((author, i) => (
              <FadeIn key={author.name} delay={i * 80}>
                <div className="flex items-start gap-4 bg-cream rounded-2xl p-6 hover:shadow-md transition-shadow border border-transparent hover:border-accent/20">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-white font-bold font-(family-name:--font-serif) text-xl">
                      {author.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-(family-name:--font-serif) font-bold text-primary text-lg">{author.name}</h3>
                    <p className="text-accent text-sm font-medium">{author.role}</p>
                    <p className="text-text-light text-sm mt-1">{author.books}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Second Scripture Quote */}
      <section className="py-16 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(201,169,110,0.1),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeIn>
            <p className="font-(family-name:--font-serif) text-xl md:text-2xl text-white/80 italic leading-relaxed">
              &ldquo;The biblical mandate is: Keep on reading what will open the Holy Scriptures to you more and more.&rdquo;
            </p>
            <p className="mt-4 text-accent font-semibold">Pastor John Piper</p>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,169,110,0.4),transparent_60%)]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeIn>
            <svg className="w-12 h-12 mx-auto mb-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h2 className="font-(family-name:--font-serif) text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Be the first to know about new releases, special offers, and biblical resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-8 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-white/30 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
