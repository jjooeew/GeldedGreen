import { motion } from "motion/react";
import SplitPageImage from "./SplitPageImage";

const succulentCare = [
  {
    label: "Light",
    desc: "Bright, indirect sunlight. A south or east-facing windowsill provides the perfect exposure.",
  },
  {
    label: "Water",
    desc: "Allow soil to dry out completely between waterings. Soak thoroughly, then let drain fully. Never let standing water remain.",
  },
  {
    label: "Position",
    desc: "Place in open spaces with gentle, natural airflow. Avoid humid rooms or dark, enclosed corners.",
  },
  {
    label: "Temperature",
    desc: "Thrives in warm environments (15°C–28°C). Safeguard from drafts and winter frost.",
  },
  {
    label: "Maintenance",
    desc: "Gently clear dry or withered leaves from the base of the plant. Repot in porous, well-draining grit every two years.",
  },
  {
    label: "Common Mistake",
    desc: "Overwatering. Excessive moisture blocks root respiration and leads to soft, translucent leaves.",
  },
];

const bonsaiCare = [
  {
    label: "Light",
    desc: "Generous filtered light. Most species flourish with a few hours of soft, direct morning sun.",
  },
  {
    label: "Water",
    desc: "Keep the soil consistently damp but never soggy. Water evenly as soon as the topsoil begins to feel dry to the touch.",
  },
  {
    label: "Position",
    desc: "Keep well away from heating vents, radiators, and air conditioners to prevent the delicate root system from drying out.",
  },
  {
    label: "Temperature",
    desc: "Prefers steady, moderate conditions (10°C–24°C). Protect from sudden, extreme temperature shifts.",
  },
  {
    label: "Maintenance",
    desc: "Prune new shoots regularly during the growing season to maintain the tree's silhouette. Occasional gentle misting helps retain vitality.",
  },
  {
    label: "Common Mistake",
    desc: "Allowing the root ball to dry out entirely. Bonsai vessels hold very little soil, meaning moisture reserves deplete rapidly.",
  },
];

interface CareColumnProps {
  title: string;
  items: typeof succulentCare;
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
          <div key={item.label} className="py-4">
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              {item.label}
            </p>
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
            title="Succulent Care"
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
            title="Bonsai Care"
            items={bonsaiCare}
            direction="right"
          />
        </div>
      </main>
    </div>
  );
}
