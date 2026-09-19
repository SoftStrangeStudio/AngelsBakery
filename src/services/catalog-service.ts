import { products } from "../data/products";
export const catalogService = {
  all: () => products,
  find: (id: string) => products.find((p) => p.id === id),
  featured: () => products.filter((p) => p.featured),
};
