export default function ContactPage() {
  return (
    <div className="min-h-full px-6 py-14 md:px-12">
      <div className="mx-auto w-full max-w-2xl text-center">
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400">
          Get in touch
        </p>
        <h1 className="mb-6 font-serif text-4xl font-light uppercase tracking-[0.2em] md:text-5xl">
          Contact
        </h1>
        <p className="text-sm font-light leading-relaxed text-neutral-600">
          For product, collection, or delivery enquiries, email us at{" "}
          <a
            href="mailto:hello@example.com"
            className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
          >
            hello@example.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
