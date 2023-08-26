"use client"
import { handleAddToCart } from "@/lib/utils"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { Product } from "@/types/sanity"
import Size from "./Product/Size"
import { useState } from "react"
import { v4 as uuid } from "uuid";
// redux
import { useAppSelector } from "@/redux/hooks";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addUserId, removeUserId } from "@/redux/features/authSlice";
import { addToCart } from "@/redux/features/cartSlice"
import { NewCart } from "@/lib/drizzle"
import { MouseEvent } from "react"

type Props = {
    matchingProduct: Product,
}

export function Order({ matchingProduct }: Props) {

    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch<AppDispatch>()


    // User Id
    const userIdFromState = useAppSelector((state) => state.auth.uid)
    // console.log("user id from state is", userIdFromState)
    if (userIdFromState.length === 0) {
        dispatch(addUserId(uuid()))
    }
    const userId = useAppSelector((state) => state.auth.uid)
    // console.log("User id on product page", userId)


    const cartProduct: NewCart = {
        userid: userId,
        productid: matchingProduct._id,
        quantity: quantity,
        price: matchingProduct.price,
        amount: quantity * matchingProduct.price,
    }


    const handleAddToCartClick = (product: NewCart, quantity: number) => (event: MouseEvent) => {
        const payload = {
            product: product,
            quantity: quantity,
        }
        dispatch(addToCart(payload)); // updating state
        // handleAddToCart({ product, quantity, uid: userId }) // updating database
    };

    return (
        <div className="flex flex-col gap-10 max-w-[70%]">
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

            <div className="flex my-4 gap-2 w-[60%]">

                <button
                    onClick={handleAddToCartClick(cartProduct, quantity)}
                    className="flex gap-2  justify-center items-center grow bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black"
                >

                    <ShoppingCart size={28} />
                    <span> Add to Cart</span>
                </button>


                <h2 className="self-center text-3xl font-bold tracking-widest">{"$" + matchingProduct?.price * quantity}</h2>
            </div>
        </div>
    )
}
