interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-start p-6">
      <div className="max-w-2xl w-full mt-12">
        <button
          onClick={onBack}
          className="mb-4 text-sm text-neutral-600"
        >
          ← Back
        </button>

        <h1 className="font-serif text-3xl mb-2">Contact</h1>
        <p className="text-neutral-600 mb-4">For inquiries, email us at <a href="mailto:hello@example.com" className="text-neutral-900 underline">hello@example.com</a>.</p>

        <p className="text-neutral-500 text-sm">This is a placeholder contact page.</p>
      </div>
    </div>
  );
}
