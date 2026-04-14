import Link from "next/link";

export const metadata = {
  title: "About | Kress Biblical Resources",
  description: "Learn about Kress Biblical Resources and our mission to provide doctrinally sound books for pastors and Bible students.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            About Us
          </p>
          <h1 className="font-(family-name:--font-serif) text-4xl md:text-5xl font-bold text-white max-w-2xl">
            Our Mission &amp; Story
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            <div className="md:col-span-3">
              <h2 className="font-(family-name:--font-serif) text-3xl font-bold text-primary mb-6">
                Kress Biblical Resources
              </h2>
              <div className="prose prose-lg text-text-light space-y-5">
                <p className="leading-relaxed">
                  Kress Biblical Resources is setting a new standard in timely, clear,
                  and doctrinally sound books and resources for pastors and Bible
                  students. Our authors are approved workmen, not celebrities. Our
                  books are designed to stand the test of exegesis, not chase after
                  every new wind of doctrine.
                </p>
                <p className="leading-relaxed">
                  Kress began in 2002 to provide solid, biblical resources for those
                  who have set their hearts to study God&apos;s Word, to practice it, and
                  to teach it. Seeing a growing trend in unsound and insubstantial
                  materials, even in books meant for pastoral preparation, Eric Kress,
                  a former pastor himself and a Master&apos;s Seminary graduate, set out to
                  reprint previously published books that would be of help to the
                  expositor and Bible student, and to develop new resources that
                  rightly divide the Word of truth.
                </p>
                <p className="leading-relaxed">
                  Currently Kress Biblical Resources offers over ninety books, covering
                  a wide range of biblical topics and Scriptures. Lord willing, we will
                  continue to release new and effective resources.
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-cream rounded-2xl p-8 sticky top-28">
                <h3 className="font-(family-name:--font-serif) text-xl font-bold text-primary mb-6">
                  Our Values
                </h3>
                <ul className="space-y-5">
                  {[
                    { title: "Doctrinal Soundness", desc: "Every resource is grounded in faithful exegesis." },
                    { title: "Pastoral Focus", desc: "Written by and for those who shepherd God's people." },
                    { title: "Academic Rigor", desc: "Scholarly depth made accessible for practical use." },
                    { title: "Timeless Truth", desc: "Content that stands the test of time, not trends." },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <div className="mt-1 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-text text-sm">{item.title}</p>
                        <p className="text-text-light text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/bookstore"
                    className="inline-flex items-center w-full justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors"
                  >
                    Browse Our Books
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "90+", label: "Books Published" },
              { value: "2002", label: "Founded" },
              { value: "20+", label: "Years of Ministry" },
              { value: "50+", label: "Authors" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-(family-name:--font-serif) text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-text-light text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
