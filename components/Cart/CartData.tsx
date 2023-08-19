require("dotenv").config
import { Cart } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { ShoppingCart } from "lucide-react"
import { DisplayProducts } from "./ProductCard";


const cartData = async () => {
    const uid = await cookies().get("userid")?.value as string
    // const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cart/?userid=${uid}`)

    console.log(`From cartData(): User id stored in cookie is ${uid}`)
    const res = await fetch(`http://localhost:3000/api/cart?userid=${uid}`)


    const result: Cart[] = await res.json()
    // console.log(result) // an array

    return result
}


function EmptyCart() {
    return (
        <div className="flex flex-col items-center gap-4">
            <ShoppingCart size={140} />
            <h1 className="font-bold text-4xl tracking-wide">Your cart is empty</h1>
        </div>
    )
}


export async function CartPage() {
    const result = await cartData()
    // console.log("cart data from api is", result)
    if (result.length === 0) {
        return (
            <div>
                <h1 className="font-bold text-xl">Shopping Cart</h1>
                <EmptyCart />
            </div>
        )
    }
    return (
        <div className=" my-18 mx-8 md:mx-16 xl:mx-32 px-4 ">
            {/* Post request krte hue product id bhi bheje (isko sanity ke product .slug.current ke equal rkhte hain. basically db ki item ki product id sanity ke item ka slug hoga. In dono ko match krte hain) */}

            <h1 className="font-bold text-2xl">Shopping Cart</h1>

            <DisplayProducts res={result} />

        </div>
    )
}

