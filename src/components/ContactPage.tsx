import { motion } from "motion/react";
import SplitPageImage from "./SplitPageImage";

const fieldClass =
  "w-full rounded-sm border border-neutral-200 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-300 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500";

export default function ContactPage() {
  return (
    <div className="min-h-full bg-white px-6 py-10 text-neutral-900 selection:bg-neutral-100 md:px-12">
      <main className="mx-auto max-w-375">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400"
          >
            Get in touch
          </motion.p> */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl font-light uppercase tracking-[0.25em] text-neutral-900 md:text-5xl"
          >
            Contact
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(240px,1fr)_minmax(280px,0.9fr)_minmax(280px,1fr)] lg:items-stretch xl:gap-14">
          <motion.section
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-labelledby="contact-details-heading"
          >
            {/* <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Contact information
            </p> */}
            <h2
              id="contact-details-heading"
              className="border-b border-neutral-100 pb-5 font-serif text-2xl font-light uppercase tracking-[0.12em] text-neutral-900 md:text-3xl"
            >
              We’d love to hear from you
            </h2>

            <p className="border-b border-neutral-100 py-6 text-sm font-light leading-relaxed text-neutral-600">
              For product, collection, or delivery enquiries, send us an email
              or use the enquiry form.
            </p>

            <dl className="divide-y divide-neutral-100 border-b border-neutral-100">
              <div className="py-5">
                <dt className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:hello@example.com"
                    className="text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
                  >
                    hello@example.com
                  </a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  Collection
                </dt>
                <dd className="text-sm font-light leading-relaxed text-neutral-600">
                  Panmure, Auckland
                  <span className="mt-1 block text-xs text-neutral-400">
                    By arrangement
                  </span>
                </dd>
              </div>
            </dl>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="min-h-130"
          >
            <SplitPageImage alt="Gelded Green contact feature" />
          </motion.div>

          <motion.section
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-labelledby="contact-form-heading"
          >
            {/* <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Send an enquiry
            </p> */}
            <h2
              id="contact-form-heading"
              className="mb-6 border-b border-neutral-100 pb-5 font-serif text-2xl font-light uppercase tracking-[0.12em] text-neutral-900 md:text-3xl"
            >
              Contact form
            </h2>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={fieldClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                  >
                    Phone
                    <span className="ml-1 font-normal normal-case tracking-normal text-neutral-300">
                      optional
                    </span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                >
                  Enquiry type
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  className={fieldClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="product">Product enquiry</option>
                  <option value="delivery">Delivery or collection</option>
                  <option value="care">Plant care</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled
                className="w-full cursor-not-allowed rounded-sm bg-neutral-300 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                Send enquiry
              </button>
              <p className="text-center text-[9px] uppercase tracking-[0.16em] text-neutral-300">
                Form submission to be connected
              </p>
            </form>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
