export interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  status: "Active" | "Inactive";
}

export const services: Service[] = [
  {
    id: 1,
    name: "Haircut & Styling",
    description: "Professional haircut and styling tailored to your preferences",
    duration: "60 min",
    price: "$50+",
    status: "Active",
  },
  {
    id: 2,
    name: "Color & Highlights",
    description: "Full color or highlighting services with premium products",
    duration: "120 min",
    price: "$100+",
    status: "Active",
  },
  {
    id: 3,
    name: "Hair Treatment",
    description: "Deep conditioning and specialized treatments for hair health",
    duration: "45 min",
    price: "$40+",
    status: "Active",
  },
  {
    id: 4,
    name: "Blowout",
    description: "Professional blow dry and style",
    duration: "45 min",
    price: "$35+",
    status: "Active",
  },
  // Add more services as needed
  {
    id: 5,
    name: "Haircut & Styling",
    description: "Professional haircut and styling tailored to your preferences",
    duration: "60 min",
    price: "$50+",
    status: "Active",
  },
];
