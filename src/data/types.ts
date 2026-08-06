export type ProductStatus = "available" | "sold-out" | "coming-soon";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
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
  info?: string;
  image: string;
  coverImage?: string;
  images?: string[];
  products: Product[];
}

export type ProductInput = Omit<Product, "category" | "status"> & {
  status?: ProductStatus;
};

export type CategoryInput = Omit<Category, "products"> & {
  products: ProductInput[];
};
