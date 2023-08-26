"use client"
import { Cart, NewCart } from "@/lib/drizzle";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react"
import Image from "next/image"
import { urlFor } from "@/sanity/sanity-utils"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { deleteFromCart, increaseQuantity, decreaseQuantity } from "@/redux/features/cartSlice"
import { MyProduct } from "@/types/products"
import { MouseEvent } from "react"
import { handleDeleteFromCart, handleChange } from "@/lib/utils";
import { useRouter } from 'next/navigation'

type Props = {
    dbData: Cart[],
    product: MyProduct
}

export function DisplayProduct({ dbData, product }: Props) {

    // to refresh component when delete button is clicked
    const router = useRouter();
    const handleRefresh = () => {
        router.refresh();
    };

    const dispatch = useAppDispatch()

    const userId = useAppSelector(state => state.auth.uid)

    // i know this is true because product was originally provided from db
    const dbProduct = dbData.find(item => item.productid === product._id)!

    let [itemQuantity, setItemQuantity] = useState(dbProduct.quantity)
    let [amount, setAmount] = useState(dbProduct.amount)


    // kya is pr useState use kr skte hain, kyu ke isme changes ho rahi hain neeche
    const cartProduct: NewCart = {
        userid: userId,
        productid: dbProduct.productid,
        quantity: dbProduct.quantity,
        price: dbProduct.price,
        amount: dbProduct.quantity * product.price,
    }


    const handlePlus = (productId: string) => () => {
        dispatch(increaseQuantity(productId));
        setItemQuantity(itemQuantity + 1)
        setAmount(amount + dbProduct.price)
        handleChange({ uid: userId, product: cartProduct, quantity: itemQuantity + 1 })
    };

    const handleMinus = (productId: string) => () => {
        dispatch(decreaseQuantity(productId));
        setItemQuantity(itemQuantity - 1);
        setAmount(amount - dbProduct.price)
        handleChange({ uid: userId, product: cartProduct, quantity: itemQuantity - 1 })
    };

    const handleDelete = (userId: string, productId: string) => () => {
        dispatch(deleteFromCart(productId));
        handleDeleteFromCart({ uid: userId, productId: productId })
        handleRefresh()
    }

    return (
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
                    <h2 className="text-darkGray font-bold tracking-wide">${amount}</h2>
                    {/* TODO this should be updated when quantity is added */}
                </div>

                <div className="flex flex-col justify-between items-end">

                    <button onClick={handleDelete(userId, cartProduct.productid)}>
                        <Trash2 />
                    </button>

                    <div>
                        <div className='flex gap-3 items-center'>
                            <button
                                onClick={handleMinus(cartProduct.productid)}
                                className='bg-[#f1f1f1] rounded-full p-1'>
                                <MinusIcon size={16} />
                            </button>

                            <h2>{itemQuantity}</h2>

                            <button
                                onClick={handlePlus(cartProduct.productid)}
                                className='border-2 border-black rounded-full p-1'>
                                <PlusIcon size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}