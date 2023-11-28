export interface Product {
  id: string;
  name: string;
  saleprice: number;
  quantity: number;
  description: string;
  category: string;
  discount: number;
  rating: number;
  click: number;
  image: { url: string, alt: string },
  coordinate: { longitude: number, latitude: number },
  tags1:  { [key: string]: string},
  tags2: {
    [key: string]: string
  };
}

