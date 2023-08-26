// "use client"
import { Cart, NewCart } from "@/lib/drizzle"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { MyProduct } from "@/types/products"
import { DisplayProduct } from "./ProductCard"

type Props = {
    dbData: Cart[],
    products: MyProduct[]
}

export function Displayer({ dbData, products }: Props) {

    const userId = useAppSelector(state => state.auth.uid)
    const totalAmount = useAppSelector(state => state.cart.totalAmount)
    const totalItems = useAppSelector(state => state.cart.totalQuantity)

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* when its flex-row: fix order summary bg */}

            <div className="flex flex-col gap-4">
                {/* Generating Prodcut Cards */}
                {products.map((product) => {
                    return (
                        <DisplayProduct dbData={dbData} product={product} key={product._id} />
                    )
                }
                )}
            </div>

            <div className="flex flex-col gap-8 p-8 bg-[#fbfcff] grow">
                <h1 className="text-xl font-bold ">Order Summary</h1>
                <div className="flex justify-between">
                    <h2>Quantity </h2>
                    <h2>{totalItems}</h2>
                </div>
                <div className="flex justify-between">
                    <h2>Sub Total</h2>
                    <h2>{totalAmount}</h2>
                </div>
                <Link href={"/checkout"} >
                    <button disabled={true} className="bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black w-full">Process to Checkout</button>
                </Link>
            </div>
        </div>
    )
}