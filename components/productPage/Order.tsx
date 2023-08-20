"use client"
import { handleAddToCart } from "@/lib/utils"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { Product } from "@/types/Product"
import Size from "../Product/Size"
// import QtyButtons from "./QtyButtons"
import { useState } from "react"
import { auth } from "@/lib/serverActions"
// import { TempProps } from "@/types/Product"

type Props = {
    matchingProduct: Product,
}

export async function Order({ matchingProduct }: Props) {
    const [quantity, setQuantity] = useState(1)
    // const uid = auth() as unknown as string
    const myuserid = await auth() as unknown as string
    console.log(myuserid)

    return (
        <div className="flex flex-col gap-10 max-w-[70%] mt-16">
            <div className=" flex flex-col gap-1">
                <h1 className="text-3xl tracking-wider text-darkGray">{matchingProduct?.name}</h1>
                <h2 className="text-2xl font-semibold text-black/50">{matchingProduct?.category}</h2>
            </div>

            <Size />


            <div className="flex gap-8 items-center">

                <h1 className="font-bold text-lg">Quantity:</h1>

                <div className='flex gap-3 items-center'>
                    <button
                        disabled={quantity === 0 ? true : false}
                        onClick={() => setQuantity(quantity - 1)}
                        className='bg-[#f1f1f1] rounded-[50%] p-1'
                    >
                        <Minus />
                    </button>

                    <h2>{quantity}</h2>

                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className='border-2 border-black rounded-[50%] p-1'
                    >
                        <Plus />
                    </button>

                </div>
            </div>

            <div className="flex my-4 gap-2">

                {/* Form because I have to execute a function containing server action */}
                <form action={auth}>
                    <button onClick={() => handleAddToCart({ product: matchingProduct, quantity, uid: myuserid })}
                        className="flex gap-2 md:w-40 justify-center  bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black"
                    >
                        <ShoppingCart />
                        <span> Add to Cart</span>
                    </button>
                </form>


                <h2 className="self-center text-3xl font-bold tracking-widest">{"$" + matchingProduct?.price}</h2>
            </div>
        </div>
    )
}
