"use client"
require("dotenv").config
import { Cart } from "@/lib/drizzle";
import { ShoppingCart } from "lucide-react"
import { DisplayProducts } from "@/components/Cart/ProductCard";
import { useAppSelector } from "@/redux/hooks";
import { FetchAndDisplay } from "./utils";



export default function CartPage() {

    const uid = useAppSelector((state) => state.auth.uid);

    <FetchAndDisplay uid={uid} />

    // const result = await getData(uid)
    // console.log(result)
    // console.log("Result array length", result.length)


    // Dummy Data
    // const result: Cart[] = [{ "id": 23, "userid": "251a8eca-a6af-49d9-b839-515f90e0048b", "productid": "02e5b664-fe39-4d4a-a712-5c3345a39a3f", "quantity": 3 }, { "id": 24, "userid": "251a8eca-a6af-49d9-b839-515f90e0048b", "productid": "5a4cfa64-c039-49b5-86e8-e9f74979c563", "quantity": 1 }]


    // -------------------------------

    /*     Error only in Production
    TODO: Page static nahi hota, request bhejta hi rehta hai
    Navbar bhi nahi kholne deta

    url se direct ao to load hota hai lekin empty cart show kr raha hai
    link click kr ke ao to error.tsx wali file pr chla jata hai
    link se aa kr refresh kro to phir empty cart show krta hai
    data kisi bhi case me show nahi kr raha
     */

    // ----------------------------------


}


export function EmptyCart() {
    return (
        <div className="flex flex-col items-center gap-4">
            <ShoppingCart size={140} />
            <h1 className="font-bold text-4xl tracking-wide">Your cart is empty</h1>
        </div>
    )
}