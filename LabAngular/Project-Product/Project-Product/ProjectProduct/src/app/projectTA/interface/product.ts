export interface Product {
  productId: number;
  categoryId: number;
  productName: string;
  smallDescription: string;
  description: string;
  rating: number;
  price: number;
  productImg: string;
  isAvailable: boolean;
  isSale: boolean;
  color: string;
  reviews: number;
}

