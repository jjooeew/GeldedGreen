import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { CATEGORIES } from "../data";
import FeaturedImageGallery from "./FeaturedImageGallery";

interface CategoryPageProps {
  categoryId: string;
  onSelectProduct: (productId: string) => void;
}

export default function CategoryPage({
  categoryId,
  onSelectProduct,
}: CategoryPageProps) {
  const category = useMemo(
    () => CATEGORIES.find((item) => item.id === categoryId) ?? CATEGORIES[0],
    [categoryId],
  );
  const galleryImages = useMemo(
    () => [
      category.coverImage ?? category.image,
      ...(category.images ?? []),
      ...category.products.map((product) => product.image),
    ],
    [category],
  );

  return (
    <div className="h-full overflow-y-auto bg-white text-neutral-900 selection:bg-neutral-100 lg:overflow-hidden">
      <div className="mx-auto grid min-h-full w-full max-w-375 grid-cols-1 gap-8 p-5 md:p-8 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(180px,230px)_minmax(320px,1fr)_minmax(270px,0.76fr)] lg:gap-6 xl:grid-cols-[240px_minmax(380px,1fr)_minmax(310px,0.76fr)] xl:gap-10">
        <aside
          className="lg:min-h-0 lg:overflow-y-auto lg:pr-2"
          aria-labelledby="category-product-list"
        >
          <div className="mb-5 border-b border-neutral-100 pb-4">
            {/* <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.25em] text-neutral-400">
              Explore
            </p> */}
            <h2
              id="category-product-list"
              className="font-serif text-2xl font-light uppercase tracking-[0.12em] text-neutral-900"
            >
              {category.name}
            </h2>
            <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-neutral-400">
              {category.products.length} pieces
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {category.products.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => onSelectProduct(product.id)}
                className="group flex min-w-0 items-center gap-3 rounded-sm border border-transparent p-2 text-left text-neutral-600 transition-all hover:border-neutral-200 hover:text-neutral-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 focus-visible:ring-offset-2"
                id={`category-product-${product.id}`}
              >
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-sm bg-neutral-50">
                  <img
                    src={product.image}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                {/* <span className="min-w-0 flex-1">
                  <span className="block truncate font-serif text-sm">
                    {product.name}
                  </span>
                  <span className="mt-1 block text-[10px] tracking-wide text-neutral-400">
                    ${product.price.toFixed(2)}
                  </span>
                </span>
                <ArrowRight
                  className="hidden h-3.5 w-3.5 shrink-0 text-neutral-300 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-600 xl:block"
                  aria-hidden="true"
                /> */}
              </button>
            ))}
          </div>
        </aside>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full min-h-0"
        >
          <FeaturedImageGallery
            key={category.id}
            images={galleryImages}
            alt={`${category.name} collection`}
          />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="flex min-h-0 flex-col lg:overflow-y-auto lg:pr-2"
          aria-labelledby="category-heading"
        >
          <div className="border-b border-neutral-100 pb-6">
            {/* <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.25em] text-neutral-400">
              The collection
            </p> */}
            <h1
              id="category-heading"
              className="font-serif text-3xl font-light leading-tight text-neutral-900 xl:text-4xl"
            >
              {category.name}
            </h1>
          </div>

          {/* <p className="border-b border-neutral-100 py-6 font-serif text-lg font-light leading-relaxed text-neutral-700">
            {category.tagline}
          </p> */}

          <p className="py-6 text-sm font-light leading-relaxed text-neutral-600">
            {category.info ?? "More information about this collection is coming soon."}
          </p>

          {/* <p className="mt-auto border-t border-neutral-100 pt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
            Select a piece to view its details
          </p> */}
        </motion.section>
      </div>
    </div>
  );
}
