import { startTransition, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { CATEGORIES, Product } from "../data";
import goldenmandela from "../assets/images/golden-mandela-no-bg-2.png";

interface CategoryPageProps {
  categoryId: string;
  onBack: () => void;
  onNavigateToCategory: (categoryId: string) => void;
}

export default function CategoryPage({
  categoryId,
  onBack,
  onNavigateToCategory,
}: CategoryPageProps) {
  const category = useMemo(
    () => CATEGORIES.find((cat) => cat.id === categoryId) ?? CATEGORIES[0],
    [categoryId],
  );
  const [activeProduct, setActiveProduct] = useState<Product>(
    category.products[0],
  );

  useEffect(() => {
    setActiveProduct(category.products[0]);
  }, [category]);

  const handleCategorySwitch = (newId: string) => {
    startTransition(() => {
      onNavigateToCategory(newId);
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 antialiased selection:bg-neutral-100">
      <nav
        className="sticky top-0 bg-white border-b border-neutral-100 z-40 px-6 md:px-12 py-5"
        aria-label="Shop navigation"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer group focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 focus-visible:ring-offset-4"
              id="back-home-button"
            >
              <ArrowLeft
                className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform"
                aria-hidden="true"
              />
              <span>Back</span>
            </button>

            {/* <button
              type="button"
              onClick={onBack}
              className="text-sm tracking-[0.25em] uppercase font-light text-neutral-900 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 flex flex-row items-center gap-2"
            >
              <img src={goldenmandela} alt={'Gelded Green'} className="w-6 h-6 object-cover rounded-full" />
              Gelded Green
            </button> */}
          </div>

          <div
            className="flex items-center gap-6 py-1 overflow-x-auto max-w-full no-scrollbar"
            role="list"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = cat.id === categoryId;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySwitch(cat.id)}
                  aria-current={isSelected ? "page" : undefined}
                  className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all py-1.5 cursor-pointer border-b focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 ${
                    isSelected
                      ? "border-neutral-900 text-neutral-900 font-semibold"
                      : "border-transparent text-neutral-500 hover:text-neutral-700"
                  }`}
                  id={`nav-cat-${cat.id}`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-12 flex flex-col lg:flex-row gap-12 items-start">
        <aside
          className="w-full lg:w-[260px] shrink-0 lg:sticky lg:top-28"
          aria-labelledby="category-heading"
        >
          <div className="mb-4">
            <h2
              id="category-heading"
              className="font-serif text-2xl font-light text-neutral-900 uppercase tracking-widest"
            >
              {category.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto pr-1 no-scrollbar mt-6">
            {category.products.map((product) => {
              const isActive = product.id === activeProduct.id;

              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setActiveProduct(product)}
                  aria-pressed={isActive}
                  className={`w-full text-left py-2 transition-all cursor-pointer flex items-center gap-3 border-b border-neutral-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 ${
                    isActive
                      ? "opacity-100 font-medium translate-x-1 text-neutral-900"
                      : "opacity-55 hover:opacity-85 text-neutral-600"
                  }`}
                  id={`sidebar-product-${product.id}`}
                >
                  <div className="w-10 h-10 rounded bg-neutral-50 overflow-hidden shrink-0 relative">
                    <img
                      src={product.image}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* <span className="flex-1 min-w-0">
                    <span className="font-sans text-xs tracking-wide block">
                      {product.name}
                    </span>
                    <span className="text-[9px] text-neutral-500 font-mono mt-0.5 block">
                      ${product.price.toFixed(2)}
                    </span>
                  </span> */}
                </button>
              );
            })}
          </div>
        </aside>

        <main className="flex-1 w-full">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeProduct.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 xl:grid-cols-12 gap-12"
              id={`showcase-product-${activeProduct.id}`}
            >
              <div className="xl:col-span-6">
                <div className="relative w-full aspect-[4/5] bg-neutral-50 rounded-md overflow-hidden">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="xl:col-span-6 flex flex-col justify-between py-1">
                <div>
                  <h1 className="text-3xl font-serif text-neutral-900 font-light leading-tight mb-4">
                    {activeProduct.name}
                  </h1>

                  <p className="text-sm leading-relaxed text-neutral-600 mb-6 font-sans font-light">
                    {activeProduct.description}
                  </p>
                  <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-xs">
                    <div>
                      <dt className="text-neutral-400 mb-1">Height</dt>
                      <dd className="text-neutral-700">
                        {activeProduct.height}
                      </dd>
                    </div>
                  </dl>
                  <div className="mb-6">
                    <span className="text-xl font-light font-sans text-neutral-900">
                      ${activeProduct.price.toFixed(2)}
                    </span>
                  </div>

                  {/* <ul className="text-xs text-neutral-600 space-y-1.5 list-disc pl-4 font-light">
                    {activeProduct.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul> */}
                </div>

                <button
                  type="button"
                  disabled={activeProduct.status !== "available"}
                  className="w-full bg-neutral-900 text-white hover:bg-neutral-800 disabled:bg-neutral-300 disabled:cursor-not-allowed py-4 px-6 rounded text-xs font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center gap-2 mt-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-4"
                  id="add-to-bag-button"
                >
                  <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>
                    {activeProduct.status === "available"
                      ? "Add to Bag"
                      : "Unavailable"}
                  </span>
                </button>
              </div>
            </motion.article>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
