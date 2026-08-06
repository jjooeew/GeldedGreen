import { getImageSet } from "../imageCatalog";
import type { CategoryInput } from "../types";

const coverImages = getImageSet("cutesy-girls/cover");
const fernImages = getImageSet("cutesy-girls/fern");
const graceImages = getImageSet("cutesy-girls/grace");
const mainImage = getImageSet("cutesy-girls/main");

export const cutesyGirls: CategoryInput = {
  id: "cutesy-girls",
  name: "Cutesy Girls",
  tagline:
    "Whimsical pots full of character to brighten up your desk and bring a smile to your face.",
  info: "These playful, handmade planters are designed to bring a touch of joy and personality to your home or office. Each piece is carefully crafted with attention to detail, featuring charming faces and unique designs that make them perfect companions for your favorite plants.",
  image: mainImage[0],
  coverImage: coverImages[0],
  images: coverImages.slice(1),
  products: [
    {
      id: "fern",
      name: "Fern",
      price: 75,
      description:
        "A charming handmade planter featuring a peaceful face, cascading greenery, and a striking succulent crown. A unique decorative piece that brings warmth and personality to any home.",
      image: fernImages[0],
      images: fernImages.slice(1),
      height: "10 cm",
      difficulty: "Easy",
      light: "Bright direct or indirect sunlight",
      watering: "Sparsely, once every 3 weeks when soil is dry",
      features: [
        "Hand-glazed glazed stoneware with a matte finish",
        "Features a built-in drainage hole with a silicone plug",
        "Includes a starter guide on succulent leaf propagation",
        "Makes the perfect comforting companion for a home office",
      ],
    },
    {
      id: "grace",
      name: "Grace",
      price: 40,
      description:
        "This adorable handmade planter is filled with cascading foliage that gives it a playful, living hairstyle. Perfect for brightening shelves, desks, or windowsills.",
      image: graceImages[0],
      images: graceImages.slice(1),
      height: "12 cm",
      difficulty: "Medium",
      light: "Bright filtered light, avoid scorching sun",
      watering: "Mist weekly, soak only when the pearls look slightly wrinkled",
      features: [
        "Delicately sculpted organic porcelain clay",
        "Ideal for elevated shelves or hanging mounts where trails can dangle",
        "No harsh chemical glazes, letting the raw clay breathe naturally",
        "Each snail is individually molded by hand, making yours entirely unique",
      ],
    },
  ],
};
