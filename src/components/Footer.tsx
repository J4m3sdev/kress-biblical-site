import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-(family-name:--font-serif) text-xl">K</span>
              </div>
              <span className="text-xl font-bold font-(family-name:--font-serif) tracking-tight">
                Kress Biblical
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Setting a new standard in timely, clear, and doctrinally sound books
              and resources for pastors and Bible students.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Bookstore", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {["Biblical Studies", "Commentaries", "Biblical Counseling", "Practical Theology"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-white/60 text-sm">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>PO Box 132228</li>
              <li>The Woodlands, TX 77393</li>
              <li className="pt-2">
                <span className="text-white/40">Publishing inquiries:</span>
                <br />
                <a href="mailto:rick@kressbiblical.com" className="text-accent-light hover:text-accent transition-colors">
                  rick@kressbiblical.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Kress Biblical Resources. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
