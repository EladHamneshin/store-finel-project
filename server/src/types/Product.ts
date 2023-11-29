export interface Product {
    id: string;
    name: string;
    saleprice: number;
    quantity: number;
    description: string;
    category: string;
    discount: number;
    rating: number;
    clicked: number;
    image: { url: string; alt: string };
    coordinate: { longitude: number; latitude: number };
    tags: {
        [key: string]: string;
    };
}