export interface Product {
  productId: string;
  name: string;
  description: string;
  salePrice: number;
  quantity: number;
  discount: number;
  image: {
      url: string
  };
}
