require("dotenv").config
import { cookies } from "next/headers";


const cartData = async () => {
    const uid = cookies().get("userid")?.value
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cart/?userid=${uid}`)
    console.log(res.json)
    return await res.json()
}


export default async function CartData() {
    return (
        <div>
            <h1 className="text-3xl">Cart data should be here</h1>
            <div>{await cartData()}</div>
        </div>
    )
}

