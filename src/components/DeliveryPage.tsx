import { motion } from "motion/react";
import SplitPageImage from "./SplitPageImage";

interface DeliveryOption {
  label: string;
  title: string;
  body: string;
  points?: string[];
}

const deliveryOptions: DeliveryOption[] = [
  {
    label: "Collection",
    title: "Collection from Panmure",
    body: "Collection is available from Panmure, Auckland by arrangement. This is available for all plants and is recommended for larger or more delicate pieces.",
  },
  {
    label: "Nationwide Courier",
    title: "Carefully packaged courier delivery",
    body: "Smaller arrangements can be carefully packaged and couriered within New Zealand.",
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
    body: "Larger arrangements, including bonsai-style pieces, may be delivered locally within 30km of Panmure. Delivery is arranged by appointment and may depend on the size and delicacy of the plant.",
  },
  {
    label: "Large Plants",
    title: "Collection or local delivery only",
    body: "Bigger plants such as bonsai and specimen pieces are not suitable for standard courier delivery. These are available by collection from Panmure or local delivery within 30km.",
  },
];

interface DeliveryColumnProps {
  options: DeliveryOption[];
  startIndex: number;
}

function DeliveryColumn({ options, startIndex }: DeliveryColumnProps) {
  return (
    <div className="divide-y divide-neutral-100 border-y border-neutral-100">
      {options.map((option, index) => (
        <motion.article
          key={option.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * (startIndex + index) }}
          className="py-6"
        >
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            {option.label}
          </p>
          <h2 className="mb-3 font-serif text-xl font-light uppercase tracking-[0.12em] text-neutral-900 md:text-2xl">
            {option.title}
          </h2>
          <p className="text-xs font-light leading-relaxed text-neutral-600 md:text-[13px]">
            {option.body}
          </p>
          {option.points ? (
            <ul className="mt-4 space-y-2 text-xs font-light text-neutral-600 md:text-[13px]">
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
  );
}

export default function DeliveryPage() {
  return (
    <div className="min-h-full bg-white px-6 py-10 text-neutral-900 selection:bg-neutral-100 md:px-12">
      <main className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-serif text-3xl font-light uppercase tracking-[0.25em] text-neutral-900 md:text-5xl"
          >
            Delivery & Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto max-w-md text-[10px] font-light uppercase tracking-widest text-neutral-400 md:text-xs"
          >
            A simple guide to receiving your Gelded Green arrangement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(240px,1fr)_minmax(280px,0.9fr)_minmax(240px,1fr)] lg:items-stretch xl:gap-14">
          <DeliveryColumn options={deliveryOptions.slice(0, 2)} startIndex={0} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-first min-h-[520px] lg:order-none"
          >
            <SplitPageImage alt="Delivery and collection feature" />
          </motion.div>

          <DeliveryColumn options={deliveryOptions.slice(2)} startIndex={2} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-12 max-w-3xl border-t border-neutral-100 pt-7 text-center text-[11px] font-light leading-relaxed text-neutral-500 md:text-sm"
        >
          “If you are unsure whether a plant can be couriered, collected, or
          locally delivered, please get in touch before ordering and we can
          confirm the best option.”
        </motion.p>
      </main>
    </div>
  );
}
