import CategoryName from './CategoryName.js';

interface Product {
  _id: string;
  quantity: number;
  price: number;
  description: string;
  category: CategoryName;
  imageUrl: string;
  rating: number;
  name: string;
  clickCount: number;
  tags:  {[key: string]: string}
}
export default Product;
