import CategoryName from './CategoryName.js';

interface Product{
 id: string ,
name: string,
salePrice: number,
quantity : number,
description : string,
category: string,
discountPercentage : number,
rating : number,
click: number
coordinate:{
longitude1:number
longitude2:number
longitude3:number
latitude1:number
latitude2:number
latitude3:number
},
image:
    {
    url: string
    alt: string 
    },
tags: { 
  tag: string
  tag1: string
 }

}


interface Category {
id: string;
name: string;
clicked: number;
};[]


export default Product;
