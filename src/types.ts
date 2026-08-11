export interface Meal {
  id: string;
  name: string;
  calories: number;
  protein: number;
  badge: "High Protein" | "Vegetarian" | "Omega-3 Rich" | "Vegan" | "Keto Friendly" | "Low Carb";
  ingredients: string[];
  image: string;
  images: string[]; // 3-5 images per item
  rating: number;
  price: number;
}

export type BillingCycle = "Daily" | "Weekly" | "Monthly";

export interface Plan {
  id: string;
  name: string;
  price: number;
  mealsIncluded: number;
  features: string[];
  isPopular?: boolean;
}

export interface Review {
  id: string;
  text: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
