"use client"
import { handleAddToCart } from "@/lib/utils"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { Product } from "@/types/Product"
import Size from "../Product/Size"
import { useState } from "react"
import { v4 as uuid } from "uuid";
// redux
import { useAppSelector } from "@/redux/hooks";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addUserId, removeUserId } from "@/redux/features/authSlice";

type Props = {
    matchingProduct: Product,
}


// type Prop2 = {
//     onButtonClick: () => void
// }

// function Auth({ onButtonClick }: Prop2) {

//     const dispatch = useDispatch<AppDispatch>()
//     const userId = useAppSelector((state) => state.auth.value.uid)

//     if (userId.length === 0) {
//         dispatch(addUserId(uuid()))
//     }

//     return (
//         <button onClick={onButtonClick}
//             className="flex gap-2 md:w-40 justify-center  bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black"
//         >
//             <ShoppingCart />
//             <span> Add to Cart</span>
//         </button>
//     )
// }

export function Order({ matchingProduct }: Props) {

    const [quantity, setQuantity] = useState(1)

    // User Id
    const dispatch = useDispatch<AppDispatch>()
    const userIdFromState = useAppSelector((state) => state.auth.value.uid)

    if (userIdFromState.length === 0) {
        dispatch(addUserId(uuid()))
    }
    const userId = useAppSelector((state) => state.auth.value.uid)
    console.log(userId)

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
                {/* <form action={auth}>
                    <button onClick={() => handleAddToCart({ product: matchingProduct, quantity, uid: myuserid })}
                        className="flex gap-2 md:w-40 justify-center  bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black"
                    >
                        <ShoppingCart />
                        <span> Add to Cart</span>
                    </button>
                </form> */}


                <button onClick={() => handleAddToCart({ product: matchingProduct, quantity, uid: userId })}
                    className="flex gap-2 md:w-40 justify-center  bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black"
                >
                    <ShoppingCart />
                    <span> Add to Cart</span>
                </button>


                <h2 className="self-center text-3xl font-bold tracking-widest">{"$" + matchingProduct?.price}</h2>
            </div>
        </div>
    )
}
