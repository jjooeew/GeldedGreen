import type { CategoryInput } from "../types";

const categoryImage = new URL(
  "../../assets/images/bonsai-1.png",
  import.meta.url,
).href;

export const bonsai: CategoryInput = {
  id: "bonsai",
  name: "Bonsai",
  tagline:
    "Timeless, miniature living sculptures for active contemplation and serene spaces.",
  image: categoryImage,
  products: [
    {
      id: "zen-juniper",
      name: "Zen Juniper Bonsai",
      price: 75,
      description:
        "A majestic 6-year-old classical Juniper Bonsai, hand-trained with sweeping windblown curves and dense, rich-green scale foliage. It is potted in a traditional unglazed charcoal-grey ceramic tray.",
      image:
        "https://images.unsplash.com/photo-1613082441999-0a86bf54148b?auto=format&fit=crop&q=80&w=800",
      height: "22 cm",
      difficulty: "Expert",
      light: "High direct outdoors, or very bright sunny window",
      watering:
        "Check daily; water when the topsoil feels barely dry. Appreciates leaf misting.",
      features: [
        "Comes with a handcrafted matching humidity tray and river pebbles",
        "Includes specialist miniature pruning shears",
        "Pre-wired with copper branch guides for continued personal styling",
        "A beautiful, lifelong botanical craft partner",
      ],
    },
    {
      id: "blossom-serenade",
      name: "Serenade Fukien Tea",
      price: 68,
      description:
        "A lovely, dark-barked Fukien Tea (Carmona) Bonsai. It blooms with delicate, miniature five-petaled white flowers throughout the year, standing out gorgeously against tiny, glossy dark-green leaves.",
      image:
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
      height: "18 cm",
      difficulty: "Medium",
      light: "Prefers high indirect indoor light with humid air",
      watering:
        "Keep consistently moist; does not tolerate complete drying out",
      features: [
        "Housed in a beautiful white-flowered glaze oval ceramic planter",
        "Grown under premium greenhouse conditions for strong root systems",
        "Natural pest resistance with dense wood grain",
        "Symbolizes harmony, wellness, and peace in traditional feng shui",
      ],
    },
    {
      id: "forest-elm",
      name: "Threepence Forest Elm",
      price: 85,
      description:
        "A magical cluster of three miniature Chinese Elm trees, potted close together on a flat green stone tray to evoke a primeval, atmospheric forest grove in miniature scale.",
      image:
        "https://images.unsplash.com/photo-1512428813824-f4851582653a?auto=format&fit=crop&q=80&w=800",
      height: "25 cm",
      difficulty: "Medium",
      light: "Enjoys morning sun and bright afternoon shelter",
      watering:
        "Water thoroughly when surface soil dries; likes a damp forest microclimate",
      features: [
        "Includes real miniature forest moss establishing the ground cover",
        "Potted on a low-profile premium dark slate base with structural pads",
        "Durable root system adapts wonderfully to indoor air",
        "Sheds leaves in mid-winter to return with vibrant lime-green spring shoots",
      ],
    },
  ],
};
