import { bonsai } from "./categories/bonsai";
import { cutesyGirls } from "./categories/cutesyGirls";
import { mystic } from "./categories/mystic";
import { random } from "./categories/random";
import { specimen } from "./categories/specimen";
import type { Category, CategoryInput } from "./types";

const CATEGORY_DATA: CategoryInput[] = [
  cutesyGirls,
  bonsai,
  random,
  specimen,
  mystic,
];

export const CATEGORIES: Category[] = CATEGORY_DATA.map((category) => ({
  ...category,
  products: category.products.map((product) => ({
    ...product,
    category: category.id,
    status: product.status ?? "available",
  })),
}));

export type {
  Category,
  CategoryInput,
  Product,
  ProductInput,
  ProductStatus,
} from "./types";
