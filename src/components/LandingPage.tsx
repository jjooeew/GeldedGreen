import { motion } from "motion/react";
import { CATEGORIES } from "../data";
import goldenmandela from "../assets/images/golden-mandela-no-bg-2.png";

interface LandingPageProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function LandingPage({ onSelectCategory }: LandingPageProps) {
  return (
    <div className="h-screen flex flex-col justify-between overflow-hidden selection:bg-neutral-100 bg-white px-4 py-10 md:px-12 max-w-7xl mx-auto text-neutral-900">
      <header className="text-center max-w-2xl mx-auto mb-8 md:mb-12 mt-6">
        <motion.img
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          id="logo"
          src={goldenmandela}
          alt="Gelded Green logo"
          className="mx-auto w-20 h-20 md:w-28 md:h-28 object-contain mb-4"
        />
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl tracking-[0.2em] uppercase font-light text-neutral-900 mb-4"
          id="company-name"
        >
          Gelded Green
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-neutral-500 font-sans font-light text-xs md:text-sm tracking-widest uppercase mt-4"
        >
          Curated botanical specimens & artisan vessels.
        </motion.p> */}
      </header>

      <main className="flex-1 overflow-y-auto pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
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
              className="group flex flex-col text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 p-1 bg-transparent transition-all cursor-pointer"
              id={`category-btn-${category.id}`}
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-md mb-2 relative">
                <img
                  src={category.image}
                  alt={`${category.name} plant category`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex items-center justify-between pb-1 pt-1">
                <h2 className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-neutral-800 font-medium group-hover:text-neutral-500 transition-colors">
                  {category.name}
                </h2>
                {/* <span
                  className="font-sans text-xs text-neutral-500 group-hover:translate-x-1 transition-transform inline-block duration-300"
                  aria-hidden="true"
                >
                  →
                </span> */}
              </div>
            </motion.button>
          ))}
        </div>
      </main>
{/* 
      <footer className="pt-8 border-t border-neutral-100 text-center">
        <p className="text-[9px] tracking-[0.3em] text-neutral-500 uppercase">
          Gelded Green • Selected Botanicals
        </p>
      </footer> */}
    </div>
  );
}
