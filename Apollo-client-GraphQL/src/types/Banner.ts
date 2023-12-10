export default interface BannerInterface {
    _id: string;
    name: string;
    productID: string;
    catogry: string;
    clickCount: number;
    image: {
        url: string;
        alt: string;
    };
    size: 'side' | 'top' | 'all';
    kind:  ('price' | 'sale' )[];
    text: string;
    createdAt: Date;
    author: string;
}
