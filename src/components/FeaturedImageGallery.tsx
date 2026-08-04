import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface FeaturedImageGalleryProps {
  images: string[];
  alt: string;
  objectFit?: "cover" | "contain";
}

export default function FeaturedImageGallery({
  images,
  alt,
  objectFit = "cover",
}: FeaturedImageGalleryProps) {
  const galleryImages = Array.from(new Set(images.filter(Boolean))).slice(0, 4);
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  return (
    <div className="flex h-auto min-h-0 flex-col gap-3 lg:h-full">
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-sm bg-neutral-50 lg:aspect-auto lg:min-h-0 lg:flex-1">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt={alt}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`absolute inset-0 h-full w-full ${
              objectFit === "contain" ? "object-contain" : "object-cover"
            }`}
          />
        </AnimatePresence>
      </div>

      <div
        className="grid shrink-0 grid-cols-4 gap-2"
        aria-label={`${alt} image choices`}
      >
        {galleryImages.map((image, index) => {
          const isSelected = image === selectedImage;

          return (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Show ${alt} image ${index + 1}`}
              aria-pressed={isSelected}
              className={`aspect-square overflow-hidden rounded-sm border-2 bg-neutral-50 p-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 ${
                isSelected
                  ? "border-neutral-900"
                  : "border-transparent hover:border-neutral-300"
              }`}
            >
              <img
                src={image}
                alt=""
                referrerPolicy="no-referrer"
                className={`h-full w-full rounded-[1px] ${
                  objectFit === "contain" ? "object-contain" : "object-cover"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
