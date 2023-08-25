// "use client"
import { Cart } from "@/lib/drizzle"
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react"
import { getIdsFromDb, getProductsFromSanity } from "./utils"
import Image from "next/image"
import { urlFor } from "@/sanity/sanity-utils"
import Link from "next/link"
// import { useAppDispatch, useAppSelector } from "@/redux/hooks"
// import { useState } from "react"
// import { addToCart, subtractFromCart } from "@/redux/features/cartSlice"
import { MyProduct } from "@/types/products"


export function Displayer({ products }: { products: MyProduct[] }) {

    // const totalAmount = useAppSelector(state => state.cart.totalAmount)
    // const totalItems = useAppSelector(state => state.cart.totalQuantity)

    // const dispatch = useAppDispatch()

    // function handleMinus(productId: string) {
    //     dispatch(subtractFromCart(productId))
    // }



    // TODO: replace cartProduct data type with the actual one
    // const handlePlus = (product: CartProduct, quantity: number) => (event: MouseEvent) => {
    //     const payload = {
    //         product: product,
    //         quantity: quantity,
    //     }

    //     dispatch(addToCart(payload));
    // };


    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* when its flex-row: fix order summary bg */}

            <div className="flex flex-col gap-4">
                {/* Generating Prodcut Cards */}
                {products.map((product) => (

                    <div key={product._id} className="flex flex-col md:flex-row gap-8 mt-8">
                        <Image
                            src={urlFor(product.image).url()}
                            alt="Product image"
                            width={240}
                            height={240}
                            className="rounded-3xl"
                        />
                        <div className="flex justify-between grow">
                            <div className="flex flex-col justify-between gap-[6px] text-lg">
                                <h1 className="text-darkGray text-2xl font-light">{product.name}</h1>
                                <h2 className="text-productSubtitle text-base font-semibold">{product.category}</h2>
                                <h2 className="text-darkGray font-semibold">Delivery Estimation</h2>
                                <p className="text-yellow-400 font-semibold">5 Working Days</p>
                                <h2 className="text-darkGray font-bold tracking-wide">${product.price}</h2>
                                {/* TODO this should be updated when quantity is added */}
                            </div>

                            <div className="flex flex-col justify-between items-end">
                                <button>
                                    <Trash2 />
                                </button>
                                <div>
                                    <div className='flex gap-3 items-center'>
                                        <button
                                            // onClick={() => handleMinus(product._id)}
                                            className='bg-[#f1f1f1] rounded-full p-1'>
                                            <MinusIcon size={16} />
                                        </button>
                                        <h2>1</h2>
                                        <button
                                            //  onClick={() => dispatch(addToCart({ product: product, quanity: 1 }))} 
                                            className='border-2 border-black rounded-full p-1'>
                                            <PlusIcon size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Make these values dynamic */}
            <div className="flex flex-col gap-8 p-8 bg-[#fbfcff] grow">
                <h1 className="text-xl font-bold ">Order Summary</h1>
                {/* TODO make this work, why state isnt updated */}
                <div className="flex justify-between">
                    <h2>Quantity </h2>
                    {/* <h2>{totalItems}</h2> */}
                    <h2>1</h2>
                </div>
                <div className="flex justify-between">
                    <h2>Sub Total</h2>
                    {/* <h2>{totalAmount}</h2> */}
                    <h2>{parseFloat("390") * 1}</h2>
                </div>
                <Link href={"/checkout"} >
                    <button disabled={true} className="bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black w-full">Process to Checkout</button>
                </Link>
            </div>
        </div>
    )
}
