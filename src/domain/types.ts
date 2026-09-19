export type Category = "Pastries" | "Cookies" | "Breads" | "Muffins" | "Desserts";
export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  note: string;
  image: string;
  allergens: string[];
  featured?: boolean;
};
export type CartItem = { productId: string; quantity: number };
export type PickupOption = {
  id: string;
  date: string;
  window: string;
  available: boolean;
};
export type Customer = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};
export type OrderRequest = {
  requestId: string;
  items: CartItem[];
  pickupId: string;
  customer: Customer;
  website: string;
  consent: boolean;
};
export type Receipt = {
  orderId: string;
  requestId: string;
  status: "received";
  total: number;
  pickupDate: string;
  pickupWindow: string;
};
export type Availability = {
  slots: PickupOption[];
  pickupLocation: string;
  timezone: string;
};
