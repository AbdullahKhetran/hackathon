require("dotenv").config
import { Cart } from "@/lib/drizzle";
import { getSpecificProduct } from "@/sanity/sanity-utils";
import { Image } from "sanity";
import { DisplayProducts } from "./ProductCard";
import { EmptyCart } from "./CartData";

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

    items.map((item) => (
        productId.push(item.productid)
    ))
    // console.log(productId)
    return productId
}

export async function getProductsFromSanity(Ids: string[]) {


    for (let index = 0; index < Ids.length; index++) {

        let product = await getSpecificProduct(Ids[index])
        products.push(product)
    }
    // console.log(products)
    return products
}

export async function FetchAndDisplay({ uid }: { uid: string }) {

    // const res = await fetch(`http://localhost:3000/api/cart?userid=${uid}`)
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cart?userid=${uid}`)

    const resul = await res.json()
    console.log(resul.length)

    // Dummy Data
    const result: Cart[] = [{ "id": 23, "userid": "251a8eca-a6af-49d9-b839-515f90e0048b", "productid": "02e5b664-fe39-4d4a-a712-5c3345a39a3f", "quantity": 3 }, { "id": 24, "userid": "251a8eca-a6af-49d9-b839-515f90e0048b", "productid": "5a4cfa64-c039-49b5-86e8-e9f74979c563", "quantity": 1 }]


    if (result.length === 0) return <EmptyCart />
    else return (
        <div className=" my-18 mx-8 md:mx-16 xl:mx-32 px-4 ">

            <h1 className="font-bold text-2xl">Shopping Cart</h1>

            <DisplayProducts res={result} />

        </div>
    )


}