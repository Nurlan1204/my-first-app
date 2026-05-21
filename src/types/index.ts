export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: 'clothing'| 'shoes'| 'equipment' | 'accessories';
    brand: string;
    rating: number;
    Instock: number;
}
export interface CartItem {
    product: Product;
    quantity: number;
}
export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}