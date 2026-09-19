import type { Product } from "../domain/types";
// Editorial sample menu; never an authoritative live price list.
export const products: Product[] = [
  {
    id: "butter-croissant",
    name: "The butter croissant",
    category: "Pastries",
    price: 450,
    description:
      "A golden, shattering outside. A soft, buttery middle. The kind of little luxury that makes an ordinary morning feel special.",
    note: "Golden & gloriously flaky",
    image: "croissant",
    allergens: ["Wheat", "Milk", "Egg"],
    featured: true,
  },
  {
    id: "strawberry-danish",
    name: "Strawberry daydream",
    category: "Pastries",
    price: 600,
    description:
      "A little nest of flaky pastry, silky vanilla custard, and strawberries. Bright, buttery, and made for your afternoon pause.",
    note: "A little sunshine in every bite",
    image: "danish",
    allergens: ["Wheat", "Milk", "Egg"],
    featured: true,
  },
  {
    id: "chocolate-cookie",
    name: "The chocolate hug",
    category: "Cookies",
    price: 350,
    description:
      "Crisp around the edges, soft at the center, with generous pools of dark chocolate. Best enjoyed with absolutely nowhere to rush.",
    note: "Soft center. Big chocolate energy.",
    image: "cookie",
    allergens: ["Wheat", "Milk", "Egg", "Soy"],
    featured: true,
  },
  {
    id: "lemon-cake",
    name: "A slice of sunshine",
    category: "Desserts",
    price: 650,
    description:
      "A tender lemon cake slice with a soft vanilla frosting and a bright lemon finish. A sweet little reason to gather around the table.",
    note: "Light, lovely & lemony",
    image: "cake",
    allergens: ["Wheat", "Milk", "Egg"],
  },
];
