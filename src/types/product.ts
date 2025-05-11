
export type ProductCategory = 
  | "superbike" 
  | "supercar" 
  | "luxury-car"
  | "classic";

export type ProductBrand = 
  | "Ducati"
  | "BMW"
  | "Kawasaki"
  | "Honda"
  | "Yamaha"
  | "Lamborghini"
  | "Ferrari"
  | "Bugatti"
  | "Porsche"
  | "McLaren"
  | "Rolls-Royce"
  | "Bentley"
  | "Mercedes-Benz"
  | "Aston Martin"
  | "Jaguar";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // In INR
  category: ProductCategory;
  brand: ProductBrand;
  imageUrl: string;
  available: boolean;
  featured?: boolean;
  engineSize?: string;
  horsepower?: number;
  topSpeed?: number;
  acceleration?: string; // 0-100 km/h
  weight?: number;
  fuelType?: string;
  colors?: string[];
}
