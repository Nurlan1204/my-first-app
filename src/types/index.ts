export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: 'clothing' | 'shoes' | 'equipment' | 'accessories';
  brand: string;
  rating: number;
  inStock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

// ВОТ ЭТА СТРОЧКА ОБЯЗАТЕЛЬНА:
export type Page = 'main' | 'cart' | 'auth' | 'product-detail';