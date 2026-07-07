const bonsaiCategoryImage = new URL("./assets/images/bonsai-1.png", import.meta.url).href;
const cutesyCategoryImage = new URL("./assets/images/cutesy-girl-1.png", import.meta.url).href;
const miniCeramicCategoryImage = new URL("./assets/images/mini-ceramic-2.png", import.meta.url).href;
const opShopCategoryImage = new URL("./assets/images/op_shop_category_1782209195077.jpg", import.meta.url).href;
const specimenCategoryImage = new URL("./assets/images/specimen_category_1782209207821.jpg", import.meta.url).href;


const cutesyGirlProductImage = new URL("./assets/images/cutesy-girl-1.png", import.meta.url).href;
const cutesyGirlProductImage2 = new URL("./assets/images/cutesy-girl-2.png", import.meta.url).href;


const miniCeramicProductImage = new URL("./assets/images/mini-ceramic-2.png", import.meta.url).href;
const miniCeramicProductImage2 = new URL("./assets/images/mini-ceramic-1.png", import.meta.url).href;


export type ProductStatus = "available" | "sold-out" | "coming-soon";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  status: ProductStatus;
  height: string;
  difficulty: "Easy" | "Medium" | "Expert";
  light: string;
  watering: string;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  tagline: string;
  image: string;
  products: Product[];
}

type ProductInput = Omit<Product, "category" | "status"> & {
  status?: ProductStatus;
};

type CategoryInput = Omit<Category, "products"> & {
  products: ProductInput[];
};

const CATEGORY_DATA: CategoryInput[] = [
  {
    id: "cutesy",
    name: "Cutesy Girls",
    tagline: "Whimsical pots full of character to brighten up your desk and bring a smile to your face.",
    image: cutesyCategoryImage,
    products: [
      {
        id: "willow",
        name: "Willow",
        price: 40,
        description: "A charming handmade planter featuring a peaceful face, cascading greenery, and a striking succulent crown. A unique decorative piece that brings warmth and personality to any home.",
        image: cutesyGirlProductImage,
        height: "10 cm",
        difficulty: "Easy",
        light: "Bright direct or indirect sunlight",
        watering: "Sparsely, once every 3 weeks when soil is dry",
        features: [
          "Hand-glazed glazed stoneware with a matte finish",
          "Features a built-in drainage hole with a silicone plug",
          "Includes a starter guide on succulent leaf propagation",
          "Makes the perfect comforting companion for a home office"
        ]
      },
      {
        id: "poppy",
        name: "Poppy",
        price: 40,
        description: "This adorable handmade planter is filled with cascading foliage that gives it a playful, living hairstyle. Perfect for brightening shelves, desks, or windowsills.",
        image: cutesyGirlProductImage2,
        height: "12 cm",
        difficulty: "Medium",
        light: "Bright filtered light, avoid scorching sun",
        watering: "Mist weekly, soak only when the pearls look slightly wrinkled",
        features: [
          "Delicately sculpted organic porcelain clay",
          "Ideal for elevated shelves or hanging mounts where trails can dangle",
          "No harsh chemical glazes, letting the raw clay breathe naturally",
          "Each snail is individually molded by hand, making yours entirely unique"
        ]
      },
    ]
  },
  {
    id: "bonsai",
    name: "Bonsai",
    tagline: "Timeless, miniature living sculptures for active contemplation and serene spaces.",
    image: bonsaiCategoryImage,
    products: [
      {
        id: "zen-juniper",
        name: "Zen Juniper Bonsai",
        price: 75,
        description: "A majestic 6-year-old classical Juniper Bonsai, hand-trained with sweeping windblown curves and dense, rich-green scale foliage. It is potted in a traditional unglazed charcoal-grey ceramic tray.",
        image: "https://images.unsplash.com/photo-1613082441999-0a86bf54148b?auto=format&fit=crop&q=80&w=800",
        height: "22 cm",
        difficulty: "Expert",
        light: "High direct outdoors, or very bright sunny window",
        watering: "Check daily; water when the topsoil feels barely dry. Appreciates leaf misting.",
        features: [
          "Comes with a handcrafted matching humidity tray and river pebbles",
          "Includes specialist miniature pruning shears",
          "Pre-wired with copper branch guides for continued personal styling",
          "A beautiful, lifelong botanical craft partner"
        ]
      },
      {
        id: "blossom-serenade",
        name: "Serenade Fukien Tea",
        price: 68,
        description: "A lovely, dark-barked Fukien Tea (Carmona) Bonsai. It blooms with delicate, miniature five-petaled white flowers throughout the year, standing out gorgeously against tiny, glossy dark-green leaves.",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
        height: "18 cm",
        difficulty: "Medium",
        light: "Prefers high indirect indoor light with humid air",
        watering: "Keep consistently moist; does not tolerate complete drying out",
        features: [
          "Housed in a beautiful white-flowered glaze oval ceramic planter",
          "Grown under premium greenhouse conditions for strong root systems",
          "Natural pest resistance with dense wood grain",
          "Symbolizes harmony, wellness, and peace in traditional feng shui"
        ]
      },
      {
        id: "forest-elm",
        name: "Threepence Forest Elm",
        price: 85,
        description: "A magical cluster of three miniature Chinese Elm trees, potted close together on a flat green stone tray to evoke a primeval, atmospheric forest grove in miniature scale.",
        image: "https://images.unsplash.com/photo-1512428813824-f4851582653a?auto=format&fit=crop&q=80&w=800",
        height: "25 cm",
        difficulty: "Medium",
        light: "Enjoys morning sun and bright afternoon shelter",
        watering: "Water thoroughly when surface soil dries; likes a damp forest microclimate",
        features: [
          "Includes real miniature forest moss establishing the ground cover",
          "Potted on a low-profile premium dark slate base with structural pads",
          "Durable root system adapts wonderfully to indoor air",
          "Sheds leaves in mid-winter to return with vibrant lime-green spring shoots"
        ]
      }
    ]
  },
  {
    id: "op-shop",
    name: "Op Shop",
    tagline: "Mismatched, nostalgic kitchenware and eccentric vintage items given a second, botanical life.",
    image: opShopCategoryImage,
    products: [
      {
        id: "chintz-clover",
        name: "Chintz & Clover Teacup",
        price: 18,
        description: "An authentic, charming 1960s English porcelain teacup with an intricate botanical rose print and gold gilt edge, giving shelter to a beautifully delicate, trailing Irish Ivy.",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
        height: "14 cm (with trailing vines)",
        difficulty: "Easy",
        light: "Low to moderate light, very adaptive",
        watering: "Water sparingly, allowing the bottom reservoir to dry before soaking",
        features: [
          "Sourced locally from independent vintage and antique shops",
          "Layered with charcoal and pumice layers to ensure perfect root health without a drainage hole",
          "Guaranteed genuine vintage collectible cup with classic maker mark",
          "Intensely sentimental piece with a lovely, soft-spoken nostalgia"
        ]
      },
      {
        id: "tin-kettle-fern",
        name: "Vintage Pewter Kettle Fern",
        price: 32,
        description: "A dark, charmingly tarnished antique pewter teapot repurposed as a planter for a robust, finely textured Button Fern. The silver metal sheen contrasts beautifully with the dense, matte foliage.",
        image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800",
        height: "20 cm",
        difficulty: "Medium",
        light: "Dappled light, perfect for bathrooms or kitchen shelves",
        watering: "Mist frequently; keep root ball consistently damp but not waterlogged",
        features: [
          "Genuinely aged pewter metal, showing lovely historical character marks",
          "Includes an opening lid feature that lets you tuck in extra decorative detail",
          "Fern varieties are selected specifically for humidity tolerance",
          "Adds dramatic historic depth to contemporary steel-and-wood shelves"
        ]
      },
      {
        id: "retro-gravy-boat",
        name: "1970s Mustard Gravy Boat",
        price: 24,
        description: "A fun, sculptural mid-century mustard yellow gravy boat with retro orange stripes, housing an elegant, flat-nesting rosette of Sempervivum and dusty pink sedum.",
        image: "https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?auto=format&fit=crop&q=80&w=800",
        height: "9 cm",
        difficulty: "Easy",
        light: "Sunny window sill, loves direct light",
        watering: "Once every three weeks; virtually indestructible",
        features: [
          "Made of heavy retro earthenware with high thermal resistance",
          "The boat nozzle makes excess watering exceptionally easy to pour out!",
          "A stunning pop of warm mid-century interior design energy",
          "Potted with high-grade organic perlite and sand mix"
        ]
      }
    ]
  },
  {
    id: "specimen",
    name: "Specimen",
    tagline: "Dramatic, high-end houseplants featuring incredible variegation and architectural forms.",
    image: specimenCategoryImage,
    products: [
      {
        id: "variegated-muse",
        name: "Monstera Albo Variegata",
        price: 140,
        description: "Our crowning jewel: a highly coveted, healthy Monstera deliciosa featuring incredible high-contrast cream, white, and emerald split leaves. Styled in a breathtaking, ultra-minimal matte cream tall cylinder pot.",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800",
        height: "55 cm",
        difficulty: "Medium",
        light: "Bright, consistent indirect light. Too little light yields green leaves.",
        watering: "Water when the top 3-4 cm of potting mix is dry. Let drain fully.",
        features: [
          "Features a sturdy moss-wrapped supporting pillar",
          "Potted in professional-grade high-chunk custom aroid mix",
          "Each plant is handchosen for stable variegation genes across stems",
          "Premium hand-cast architectural concrete pot with rubber feet pads"
        ]
      },
      {
        id: "velvet-queen",
        name: "Alocasia Velvet Queen",
        price: 95,
        description: "An elegant, velvet-textured Alocasia Frydek featuring deep forest green arrow-shaped leaves with high-contrast, luminescent pristine white veins. Potted in a raw textured soft gray clay container.",
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800",
        height: "40 cm",
        difficulty: "Medium",
        light: "Prefers bright indirect light and high indoor humidity",
        watering: "Likes damp roots; water frequently, but ensure soil can pass vapor easily",
        features: [
          "Includes an organic coconut-coir nourishing root blanket",
          "Raw terracotta clay pot actively wicks excess moisture to avoid root rot",
          "Highly responsive leaves that follow light patterns gracefully",
          "Features a stunning sculptural rosette pattern of outward-reaching stems"
        ]
      },
      {
        id: "fiddle-leaf-column",
        name: "Fiddle Leaf Column",
        price: 125,
        description: "A tall, stately Fiddle-Leaf Fig (Ficus Lyrata) grown perfectly upright with rich, violin-shaped leathery leaves. This statement piece sits in a premium concrete terrazzo vessel with custom organic speckles.",
        image: "https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=800",
        height: "90 cm",
        difficulty: "Medium",
        light: "Consistent bright light; hates drafts or sudden location repositioning",
        watering: "Water thoroughly only when top half of soil column is completely dry",
        features: [
          "Includes a sleek, low-profile rolling coaster for effortless room placement",
          "Pre-conditioned with natural leaf-shine oils",
          "A stunning focal element for reading nooks and living area corners",
          "Pot handcrafted with grey quartz, gold mica, and white river aggregate"
        ]
      }
    ]
  },
  {
    id: "mini-ceramic",
    name: "Mini Ceramic",
    tagline: "Tiny geometric containers styled in neutral tones and blush glazes with micro-botanicals.",
    image: miniCeramicCategoryImage,
    products: [
      {
        id: "mountain-pagoda",
        name: "Mountain Pagoda",
        price: 45,
        description: "A handcrafted miniature landscape featuring a young ginkgo, natural stone, and a traditional pagoda. Designed to capture the peaceful feeling of a tiny mountain retreat in a compact ceramic pot.",
        image: miniCeramicProductImage,
        height: "6 cm",
        difficulty: "Easy",
        light: "Extremely high light, windowsill helper",
        watering: "Virtually never! Once a month with a dropper or spoon",
        features: [
          "High-fired stoneware finished in a satin-matte sage glaze",
          "Filled with specialized coarse mineral gravel topper",
          "Perfect as a low-moisture companion for computer monitor stands",
          "Weighs only 150 grams and is incredibly space efficient"
        ]
      },
      {
        id: "jade-pagoda",
        name: "Jade Pagoda",
        price: 45,
        description: "This handcrafted arrangement combines a sculptural jade plant, cascading greenery, and a traditional pagoda to create a unique miniature garden full of charm.",
        image: miniCeramicProductImage2,
        height: "5 cm",
        difficulty: "Easy",
        light: "Medium to bright sunny spots",
        watering: "Once every 2.5 weeks when petals feel slightly pliable",
        features: [
          "Textured base with a sleek, glazed rim for contrast",
          "Features a built-in miniature rubber-tipped capillary tray",
          "Adds soft, feminine geometry to standard study desks",
          "Sedum naturally blush darker pinks under high seasonal light"
        ]
      },
    ]
  }
];

export const CATEGORIES: Category[] = CATEGORY_DATA.map((category) => ({
  ...category,
  products: category.products.map((product) => ({
    ...product,
    category: category.id,
    status: product.status ?? "available",
  })),
}));
