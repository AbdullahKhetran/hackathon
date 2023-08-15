require("dotenv").config
import { Cart } from "@/lib/drizzle";
import { cookies } from "next/headers";

const cartData = async () => {
    const uid = await cookies().get("userid")?.value as string
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cart/?userid=${uid}`)

    console.log(`User id in params is ${uid}`)
    // const res = await fetch(`http://localhost:3000/api/cart?userid=${uid}`)

    return await res.json()
}



export default async function CartData() {
    const data = await cartData()
    console.log(data[0])
    return (
        <div>
            <h1 className="text-3xl">Display data from Cart</h1>
            {/* <div>{await cartData()}</div> */}
        </div>
    )
}

