export const metadata = {
  title: "Contact | Kress Biblical Resources",
  description: "Get in touch with Kress Biblical Resources.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h1 className="font-(family-name:--font-serif) text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100">
                <h2 className="font-(family-name:--font-serif) text-2xl font-bold text-primary mb-6">
                  How Can We Help?
                </h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 sticky top-28">
                <h3 className="font-(family-name:--font-serif) text-xl font-bold text-primary mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text text-sm">Address</p>
                      <p className="text-text-light text-sm">
                        PO Box 132228
                        <br />
                        The Woodlands, TX 77393
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text text-sm">Publishing Inquiries</p>
                      <a
                        href="mailto:rick@kressbiblical.com"
                        className="text-accent text-sm hover:text-accent-dark transition-colors"
                      >
                        rick@kressbiblical.com
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-text-light text-sm leading-relaxed">
                    For general questions, publishing inquiries, or bulk orders,
                    please fill out the contact form or email us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
