import type { CategoryInput } from "../types";

const categoryImage = new URL(
  "../../assets/images/mini-ceramic-2.png",
  import.meta.url,
).href;
const mountainPagodaImage = new URL(
  "../../assets/images/mini-ceramic-2.png",
  import.meta.url,
).href;
const jadePagodaImage = new URL(
  "../../assets/images/mini-ceramic-1.png",
  import.meta.url,
).href;

export const mystic: CategoryInput = {
  id: "mystic",
  name: "Mystic",
  tagline:
    "Tiny geometric containers styled in neutral tones and blush glazes with micro-botanicals.",
  image: categoryImage,
  products: [
    {
      id: "mountain-pagoda",
      name: "Mountain Pagoda",
      price: 45,
      description:
        "A handcrafted miniature landscape featuring a young ginkgo, natural stone, and a traditional pagoda. Designed to capture the peaceful feeling of a tiny mountain retreat in a compact ceramic pot.",
      image: mountainPagodaImage,
      height: "6 cm",
      difficulty: "Easy",
      light: "Extremely high light, windowsill helper",
      watering: "Virtually never! Once a month with a dropper or spoon",
      features: [
        "High-fired stoneware finished in a satin-matte sage glaze",
        "Filled with specialized coarse mineral gravel topper",
        "Perfect as a low-moisture companion for computer monitor stands",
        "Weighs only 150 grams and is incredibly space efficient",
      ],
    },
    {
      id: "jade-pagoda",
      name: "Jade Pagoda",
      price: 45,
      description:
        "This handcrafted arrangement combines a sculptural jade plant, cascading greenery, and a traditional pagoda to create a unique miniature garden full of charm.",
      image: jadePagodaImage,
      height: "5 cm",
      difficulty: "Easy",
      light: "Medium to bright sunny spots",
      watering: "Once every 2.5 weeks when petals feel slightly pliable",
      features: [
        "Textured base with a sleek, glazed rim for contrast",
        "Features a built-in miniature rubber-tipped capillary tray",
        "Adds soft, feminine geometry to standard study desks",
        "Sedum naturally blush darker pinks under high seasonal light",
      ],
    },
  ],
};
