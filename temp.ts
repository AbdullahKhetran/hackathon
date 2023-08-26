import { Image } from "sanity";
// import { CartProduct } from "./types/cartProduct";

/*
mai ye bhi kr skta hoon ke sanity se bhi data g=fetch kron aur db se bhi
kyunke kych data sanity me change ho skta hai aur db me nahi hua hoga, like image url
db me product id to store krni pri gi ta ke sanity se wohi product fetch ho
 */

type DbData = {
    // this is total data
    totalQuantity: number,
    totalAmount: number,
    // this is item data
    price: number,
    quantity: number,
    amount: number, // price * quantity

    id: number, // primary key
    userid: string, // for fetching data
    productid: string, // _id in sanity
}

type SanityData = {
    _id: string,
    name: string,
    category: string,
    image: Image,
}


// ---------------------------------------------------

// wo type jo data store hua hai db me
type Cart = {
    id: number;
    userid: string;
    productid: string;
    quantity: number;
}

// ye wo type jo sanity return kre ga getSpecificProduct ki call pr
// yahi cartpage pr display hoga
interface MyProduct {
    _id: string,
    name: string,
    price: number,
    category: string,
    image: Image,
    slug: { current: string; _type: string; },
}

type Missing = {
    product: {
        gender: string,
        totalPrice: number,
        quantity: number
    }
    totalQuantity: number,
    totalAmount: number,
}

// from khubaib repo

// ye cart state ke hai
interface CartState {
    products: Array<CartProduct>,
    totalQuantity: number,
    totalAmount: number,
}

interface CartProduct {
    _id: string,
    name: string,
    price: number,
    category: string,
    image: Image,
    gender: string,
    totalPrice: number,
    quantity: number
}
