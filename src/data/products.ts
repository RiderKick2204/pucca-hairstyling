export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Professional Shampoo",
    description: "Sulfate-free shampoo for all hair types",
    price: 24.99,
    stock: 24,
    status: "In Stock",
    category: "Shampoo",
  },
  {
    id: 2,
    name: "Hair Treatment Mask",
    description: "Intensive repair treatment for damaged hair",
    price: 34.99,
    stock: 15,
    status: "Low Stock",
    category: "Treatment",
  },
  {
    id: 3,
    name: "Heat Protection Spray",
    description: "Protects hair from heat styling damage",
    price: 19.99,
    stock: 30,
    status: "In Stock",
    category: "Styling",
  },
  {
    id: 4,
    name: "Argan Oil Serum",
    description: "Smoothing and shine-enhancing hair serum",
    price: 29.99,
    stock: 5,
    status: "Low Stock",
    category: "Treatment",
  },
  {
    id: 5,
    name: "Haircut & Styling",
    description: "Professional haircut and styling tailored to your preferences",
    price: 50,
    stock: 10,
    status: "Out of Stock",
    category: "Styling",
  }
]; 