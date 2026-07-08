import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import goldenmandela from "../assets/images/golden-mandela-no-bg-2.png";

interface DeliveryPageProps {
  onBack: () => void;
}

export default function DeliveryPage({ onBack }: DeliveryPageProps) {
  const deliveryOptions = [
    {
      label: "Collection",
      title: "Collection from Panmure",
      body:
        "Collection is available from Panmure, Auckland by arrangement. This is available for all plants and is recommended for larger or more delicate pieces.",
    },
    {
      label: "Nationwide Courier",
      title: "Carefully packaged courier delivery",
      body:
        "Smaller arrangements can be carefully packaged and couriered within New Zealand.",
      points: [
        "Suitable for smaller arrangements",
        "Dispatched Monday to Wednesday",
        "Packaged carefully for transit",
        "Courier delivery is at the buyer's risk",
      ],
    },
    {
      label: "Local Delivery",
      title: "Delivery within 30km",
      body:
        "Larger arrangements, including bonsai-style pieces, may be delivered locally within 30km of Panmure. Delivery is arranged by appointment and may depend on the size and delicacy of the plant.",
    },
    {
      label: "Large Plants",
      title: "Collection or local delivery only",
      body:
        "Bigger plants such as bonsai and specimen pieces are not suitable for standard courier delivery. These are available by collection from Panmure or local delivery within 30km.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-neutral-100 bg-white px-6 py-12 md:px-12 max-w-7xl mx-auto text-neutral-900">
      <nav className="flex items-center justify-between border-b border-neutral-100 pb-6 mb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>

        <span className="text-sm tracking-[0.25em] uppercase font-light text-neutral-900 cursor-pointer flex flex-col items-center" onClick={onBack}>
          <img src={goldenmandela} alt="Gelded Green logo" className="w-10 h-10 inline-block mr-1" />
          Gelded Green
        </span>

        <div className="w-10 h-4 hidden sm:block"></div>
      </nav>

      <main className="flex-1 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl tracking-[0.25em] uppercase font-light text-neutral-900 mb-4"
          >
            Delivery & Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-neutral-400 font-sans font-light text-[11px] md:text-xs tracking-widest uppercase max-w-md mx-auto"
          >
            A simple guide to receiving your Gelded Green arrangement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {deliveryOptions.map((option, index) => (
            <motion.article
              key={option.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="border border-neutral-200/80 bg-neutral-50/40 rounded-sm p-7 md:p-8"
            >
              <p className="text-[10px] tracking-[0.28em] uppercase text-neutral-400 font-semibold mb-4">
                {option.label}
              </p>
              <h2 className="font-serif text-xl md:text-2xl tracking-[0.18em] uppercase text-neutral-900 mb-4">
                {option.title}
              </h2>
              <p className="text-sm md:text-[13px] leading-relaxed text-neutral-600 font-light">
                {option.body}
              </p>
              {option.points ? (
                <ul className="mt-5 space-y-2 text-sm md:text-[13px] text-neutral-600 font-light">
                  {option.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-neutral-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 max-w-3xl mx-auto border-t border-neutral-100 pt-8"
        >
          <p className="text-[11px] md:text-sm leading-relaxed text-neutral-500 font-light text-center">
            “If you are unsure whether a plant can be couriered, collected, or locally delivered, please get in touch before ordering and we can confirm the best option.”
          </p>
        </motion.div>
      </main>
    </div>
  );
}
