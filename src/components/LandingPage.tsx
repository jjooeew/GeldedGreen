import { motion } from "motion/react";
import { CATEGORIES } from "../data";

interface LandingPageProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function LandingPage({ onSelectCategory }: LandingPageProps) {
  return (
    <div className="h-full overflow-y-auto bg-white px-4 py-5 text-neutral-900 selection:bg-neutral-100 md:px-12 md:py-7">
      <main className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((category, index) => (
            <motion.button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              aria-label={`View ${category.name} products`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -4 }}
              className="group flex cursor-pointer flex-col bg-transparent p-1 text-left transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 focus-visible:ring-offset-4"
              id={`category-btn-${category.id}`}
            >
              <div className="relative mb-2 aspect-4/5 w-full overflow-hidden rounded-md">
                <img
                  src={category.image}
                  alt={`${category.name} plant category`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex items-center justify-between pb-1 pt-1">
                <h2 className="font-serif text-[11px] font-medium uppercase tracking-widest text-neutral-800 transition-colors group-hover:text-neutral-500 md:text-xs">
                  {category.name}
                </h2>
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </div>
  );
}
