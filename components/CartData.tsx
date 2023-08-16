require("dotenv").config
import { Cart } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { ShoppingCart } from "lucide-react"


const cartData = async () => {
    const uid = await cookies().get("userid")?.value as string
    // const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cart/?userid=${uid}`)

    console.log(`User id stored in cookie is ${uid}`)
    const res = await fetch(`http://localhost:3000/api/cart?userid=${uid}`)


    const result: Cart[] = await res.json()
    console.log(result) // an array

    return result
}


async function EmptyCart() {
    // await cartData()
    return (
        <div className="flex flex-col items-center gap-4">
            <ShoppingCart size={140} />
            <h1 className="font-bold text-4xl tracking-wide">Your cart is empty</h1>
        </div>
    )
}

async function CartData() {
    const res = await cartData()
    const data = res[0]

    return (
        <div>
            <h1 className="text-3xl text-red-500">Order summary should be here</h1>

            <p>Product Id: {data.productid}</p>
            <p>Quantity: {data.quantity}</p>

        </div>
    )
}


export default async function Page() {
    const result = await cartData()
    if (result.length === 0) {
        return (
            <EmptyCart />
        )
    }
    return (
        <CartData />
    )
}





