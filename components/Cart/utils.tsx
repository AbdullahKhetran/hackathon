require("dotenv").config
import { Cart } from "@/lib/drizzle";
import { getSpecificProduct } from "@/sanity/sanity-utils";
import { Image } from "sanity";
import { DisplayProducts } from "./ProductCard";
import { ShoppingCart } from "lucide-react";

type MyProduct = {
    _id: string,
    name: string,
    price: number,
    category: string,
    // image: any,
    image: Image,
    slug: { current: string; _type: string; },
}

let productId: string[] = []
let products: MyProduct[] = []


export function getIdsFromDb(items: Cart[]) {
    const productId: string[] = items.map((item) => item.productid);
    return productId;

}


export async function getProductsFromSanity(Ids: string[]) {
    const products: MyProduct[] = [];

    for (let index = 0; index < Ids.length; index++) {
        const product = await getSpecificProduct(Ids[index]);
        products.push(product);
    }

    return products;
}




export async function FetchAndDisplay({ uid }: { uid: string }) {

    const result = await getData(uid)

    return result.length === 0 ? <EmptyCart /> : <Display cartItems={result} />

}

async function getData(uid: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cart?userid=${uid}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data: Cart[] = await res.json() // ye array hai .json() use nahi kr skte
    return data
}

function Display({ cartItems }: { cartItems: Cart[] }) {
    return (
        <div className=" my-18 mx-8 md:mx-16 xl:mx-32 px-4 ">

            <h1 className="font-bold text-2xl">Shopping Cart</h1>

            <DisplayProducts res={cartItems} />

        </div>
    )
}

function EmptyCart() {
    return (
        <div>
            <h1 className="font-bold text-xl">Shopping Cart</h1>
            <div className="flex flex-col items-center gap-4">
                <ShoppingCart size={140} />
                <h1 className="font-bold text-4xl tracking-wide">Your cart is empty</h1>
            </div>
        </div>
    )
}

// TODO: remove any types and give types