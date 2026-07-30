import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { CATEGORIES, Product } from "../data";

interface CategoryPageProps {
  categoryId: string;
}

export default function CategoryPage({ categoryId }: CategoryPageProps) {
  const category = useMemo(
    () => CATEGORIES.find((item) => item.id === categoryId) ?? CATEGORIES[0],
    [categoryId],
  );
  const [activeProduct, setActiveProduct] = useState<Product>(
    category.products[0],
  );

  useEffect(() => {
    setActiveProduct(category.products[0]);
  }, [category]);

  return (
    <div className="h-full overflow-y-auto bg-white text-neutral-900 selection:bg-neutral-100 lg:overflow-hidden">
      <div className="mx-auto grid min-h-full w-full max-w-375 grid-cols-1 gap-8 p-5 md:p-8 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(180px,230px)_minmax(320px,1fr)_minmax(270px,0.76fr)] lg:gap-6 xl:grid-cols-[240px_minmax(380px,1fr)_minmax(310px,0.76fr)] xl:gap-10">
        <aside
          className="lg:min-h-0 lg:overflow-y-auto lg:pr-2"
          aria-labelledby="category-heading"
        >
          <div className="mb-5 flex items-end justify-between border-b border-neutral-100 pb-4 lg:block">
            <div>
              <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.25em] text-neutral-400">
                Shop
              </p>
              <h1
                id="category-heading"
                className="font-serif text-2xl font-light uppercase tracking-[0.12em] text-neutral-900"
              >
                {category.name}
              </h1>
            </div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 lg:mt-2">
              {category.products.length} pieces
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {category.products.map((product) => {
              const isActive = product.id === activeProduct.id;

              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setActiveProduct(product)}
                  aria-pressed={isActive}
                  className={`group flex min-w-0 items-center gap-3 rounded-sm border p-2 text-left transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-neutral-300 bg-neutral-50 text-neutral-900"
                      : "border-transparent text-neutral-500 hover:border-neutral-200 hover:text-neutral-900"
                  }`}
                  id={`sidebar-product-${product.id}`}
                >
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-sm bg-neutral-50">
                    <img
                      src={product.image}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="min-w-0">
                    <span className="block truncate font-serif text-sm">
                      {product.name}
                    </span>
                    <span className="mt-1 block text-[10px] tracking-wide text-neutral-400">
                      ${product.price.toFixed(2)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <main className="min-h-0" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={activeProduct.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="h-full min-h-0"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-50 lg:h-full lg:aspect-auto">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.figure>
          </AnimatePresence>
        </main>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeProduct.id}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.28 }}
            className="flex min-h-0 flex-col lg:overflow-y-auto lg:pr-2"
            id={`showcase-product-${activeProduct.id}`}
            aria-labelledby="product-name"
          >
            <div className="border-b border-neutral-100 pb-6">
              <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.25em] text-neutral-400">
                {category.name}
              </p>
              <h2
                id="product-name"
                className="font-serif text-3xl font-light leading-tight text-neutral-900 xl:text-4xl"
              >
                {activeProduct.name}
              </h2>
              <p className="mt-4 text-xl font-light text-neutral-900">
                ${activeProduct.price.toFixed(2)}
              </p>
            </div>

            <p className="py-6 text-sm font-light leading-relaxed text-neutral-600">
              {activeProduct.description}
            </p>

            <dl className="divide-y divide-neutral-100 border-y border-neutral-100 text-xs">
              <div className="grid grid-cols-[90px_1fr] gap-4 py-3">
                <dt className="text-neutral-400">Height</dt>
                <dd className="text-neutral-700">{activeProduct.height}</dd>
              </div>
              <div className="grid grid-cols-[90px_1fr] gap-4 py-3">
                <dt className="text-neutral-400">Care level</dt>
                <dd className="text-neutral-700">{activeProduct.difficulty}</dd>
              </div>
              <div className="grid grid-cols-[90px_1fr] gap-4 py-3">
                <dt className="text-neutral-400">Light</dt>
                <dd className="leading-relaxed text-neutral-700">
                  {activeProduct.light}
                </dd>
              </div>
              <div className="grid grid-cols-[90px_1fr] gap-4 py-3">
                <dt className="text-neutral-400">Water</dt>
                <dd className="leading-relaxed text-neutral-700">
                  {activeProduct.watering}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              disabled={activeProduct.status !== "available"}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-sm bg-neutral-900 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:bg-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-4 lg:mt-auto"
              id="add-to-bag-button"
            >
              <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
              <span>
                {activeProduct.status === "available"
                  ? "Add to Bag"
                  : "Unavailable"}
              </span>
            </button>
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}
