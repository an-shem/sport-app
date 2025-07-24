export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: { id: number; name: string };
  images: string[];
  description: string;
}