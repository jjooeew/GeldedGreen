import type { CategoryInput } from "../types";

const categoryImage = new URL(
  "../../assets/images/op_shop_category_1782209195077.jpg",
  import.meta.url,
).href;

export const random: CategoryInput = {
  id: "random",
  name: "Random",
  tagline:
    "Mismatched, nostalgic kitchenware and eccentric vintage items given a second, botanical life.",
  image: categoryImage,
  products: [
    {
      id: "chintz-clover",
      name: "Chintz & Clover Teacup",
      price: 18,
      description:
        "An authentic, charming 1960s English porcelain teacup with an intricate botanical rose print and gold gilt edge, giving shelter to a beautifully delicate, trailing Irish Ivy.",
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
      height: "14 cm (with trailing vines)",
      difficulty: "Easy",
      light: "Low to moderate light, very adaptive",
      watering:
        "Water sparingly, allowing the bottom reservoir to dry before soaking",
      features: [
        "Sourced locally from independent vintage and antique shops",
        "Layered with charcoal and pumice layers to ensure perfect root health without a drainage hole",
        "Guaranteed genuine vintage collectible cup with classic maker mark",
        "Intensely sentimental piece with a lovely, soft-spoken nostalgia",
      ],
    },
    {
      id: "tin-kettle-fern",
      name: "Vintage Pewter Kettle Fern",
      price: 32,
      description:
        "A dark, charmingly tarnished antique pewter teapot repurposed as a planter for a robust, finely textured Button Fern. The silver metal sheen contrasts beautifully with the dense, matte foliage.",
      image:
        "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800",
      height: "20 cm",
      difficulty: "Medium",
      light: "Dappled light, perfect for bathrooms or kitchen shelves",
      watering:
        "Mist frequently; keep root ball consistently damp but not waterlogged",
      features: [
        "Genuinely aged pewter metal, showing lovely historical character marks",
        "Includes an opening lid feature that lets you tuck in extra decorative detail",
        "Fern varieties are selected specifically for humidity tolerance",
        "Adds dramatic historic depth to contemporary steel-and-wood shelves",
      ],
    },
    {
      id: "retro-gravy-boat",
      name: "1970s Mustard Gravy Boat",
      price: 24,
      description:
        "A fun, sculptural mid-century mustard yellow gravy boat with retro orange stripes, housing an elegant, flat-nesting rosette of Sempervivum and dusty pink sedum.",
      image:
        "https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?auto=format&fit=crop&q=80&w=800",
      height: "9 cm",
      difficulty: "Easy",
      light: "Sunny window sill, loves direct light",
      watering: "Once every three weeks; virtually indestructible",
      features: [
        "Made of heavy retro earthenware with high thermal resistance",
        "The boat nozzle makes excess watering exceptionally easy to pour out!",
        "A stunning pop of warm mid-century interior design energy",
        "Potted with high-grade organic perlite and sand mix",
      ],
    },
  ],
};
