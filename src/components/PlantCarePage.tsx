import { motion } from "motion/react";
import SplitPageImage from "./SplitPageImage";

interface CareItem {
  label?: string;
  desc: string;
}

const succulentCare: CareItem[] = [
  {
    // label: "How to care",
    desc: "Bright, indirect sunlight. A south or east-facing windowsill provides the perfect exposure.",
  },
];

const bonsaiCare: CareItem[] = [
  {
    // label: "Further Info",
    desc: "Generous filtered light. Most species flourish with a few hours of soft, direct morning sun.",
  },

];

interface CareColumnProps {
  title: string;
  items: CareItem[];
  direction: "left" | "right";
}

function CareColumn({ title, items, direction }: CareColumnProps) {
  return (
    <motion.section
      initial={{ opacity: 0, x: direction === "left" ? -10 : 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: direction === "left" ? 0.2 : 0.3 }}
    >
      <h2 className="mb-4 border-b border-neutral-100 pb-3 font-serif text-lg font-light uppercase tracking-widest text-neutral-900 md:text-xl">
        {title}
      </h2>
      <div className="divide-y divide-neutral-100">
        {items.map((item) => (
          <div key={item.label ?? item.desc} className="py-4">
            {item.label ? (
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                {item.label}
              </p>
            ) : null}
            <p className="text-xs font-light leading-relaxed text-neutral-600 md:text-[13px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default function PlantCarePage() {
  return (
    <div className="min-h-full bg-white px-6 py-10 text-neutral-900 selection:bg-neutral-100 md:px-12">
      <main className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl font-light uppercase tracking-[0.25em] text-neutral-900 md:text-5xl"
            id="care-title"
          >
            Plant Care
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(240px,1fr)_minmax(280px,0.9fr)_minmax(240px,1fr)] lg:items-stretch xl:gap-14">
          <CareColumn
            title="High Level Info"
            items={succulentCare}
            direction="left"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-first min-h-[480px] lg:order-none"
          >
            <SplitPageImage alt="Plant care feature" />
          </motion.div>

          <CareColumn
            title="Detailed Info"
            items={bonsaiCare}
            direction="right"
          />
        </div>
      </main>
    </div>
  );
}
