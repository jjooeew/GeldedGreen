import type { CategoryInput } from "../types";

const categoryImage = new URL(
  "../../assets/images/specimen_category_1782209207821.jpg",
  import.meta.url,
).href;

export const specimen: CategoryInput = {
  id: "specimen",
  name: "Specimen",
  tagline:
    "Dramatic, high-end houseplants featuring incredible variegation and architectural forms.",
  image: categoryImage,
  products: [
    {
      id: "variegated-muse",
      name: "Monstera Albo Variegata",
      price: 140,
      description:
        "Our crowning jewel: a highly coveted, healthy Monstera deliciosa featuring incredible high-contrast cream, white, and emerald split leaves. Styled in a breathtaking, ultra-minimal matte cream tall cylinder pot.",
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800",
      height: "55 cm",
      difficulty: "Medium",
      light:
        "Bright, consistent indirect light. Too little light yields green leaves.",
      watering:
        "Water when the top 3-4 cm of potting mix is dry. Let drain fully.",
      features: [
        "Features a sturdy moss-wrapped supporting pillar",
        "Potted in professional-grade high-chunk custom aroid mix",
        "Each plant is handchosen for stable variegation genes across stems",
        "Premium hand-cast architectural concrete pot with rubber feet pads",
      ],
    },
    {
      id: "velvet-queen",
      name: "Alocasia Velvet Queen",
      price: 95,
      description:
        "An elegant, velvet-textured Alocasia Frydek featuring deep forest green arrow-shaped leaves with high-contrast, luminescent pristine white veins. Potted in a raw textured soft gray clay container.",
      image:
        "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800",
      height: "40 cm",
      difficulty: "Medium",
      light: "Prefers bright indirect light and high indoor humidity",
      watering:
        "Likes damp roots; water frequently, but ensure soil can pass vapor easily",
      features: [
        "Includes an organic coconut-coir nourishing root blanket",
        "Raw terracotta clay pot actively wicks excess moisture to avoid root rot",
        "Highly responsive leaves that follow light patterns gracefully",
        "Features a stunning sculptural rosette pattern of outward-reaching stems",
      ],
    },
    {
      id: "fiddle-leaf-column",
      name: "Fiddle Leaf Column",
      price: 125,
      description:
        "A tall, stately Fiddle-Leaf Fig (Ficus Lyrata) grown perfectly upright with rich, violin-shaped leathery leaves. This statement piece sits in a premium concrete terrazzo vessel with custom organic speckles.",
      image:
        "https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=800",
      height: "90 cm",
      difficulty: "Medium",
      light:
        "Consistent bright light; hates drafts or sudden location repositioning",
      watering:
        "Water thoroughly only when top half of soil column is completely dry",
      features: [
        "Includes a sleek, low-profile rolling coaster for effortless room placement",
        "Pre-conditioned with natural leaf-shine oils",
        "A stunning focal element for reading nooks and living area corners",
        "Pot handcrafted with grey quartz, gold mica, and white river aggregate",
      ],
    },
  ],
};
