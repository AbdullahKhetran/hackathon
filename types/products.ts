import { Image } from "sanity"

// sanity will return this to be displayed on cartpage
export interface MyProduct {
    _id: string,
    name: string,
    price: number,
    category: string,
    image: Image,
    slug: { current: string; _type: string; },
}

// this one is export by drizle as type Cart
type DbData = {
    id: number, // primary key auto incrementing
    userid: string, // for fetching data
    productid: string, // _id in sanity
    // this is item data
    price: number,
    quantity: number,
    amount: number, // price * quantity
}

// its to be included in state, not in sanity or db
type State = {
    // this is total data
    totalQuantity: number,
    totalAmount: number,
}

type SanityData = {
    _id: string,
    name: string,
    category: string,
    image: Image,
}