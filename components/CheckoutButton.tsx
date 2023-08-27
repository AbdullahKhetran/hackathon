"use client"
import { getStripePromise } from "@/lib/stripe";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { CombinedProduct } from "@/types/products";

type Props = {
    products: CombinedProduct[]
}

export default function StripeCheckoutButton({ products }: Props) {

    const userId = useAppSelector(state => state.auth.uid)

    const handleCheckout = async () => {

        const stripe = await getStripePromise();

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/stripe-checkout`, {
            // const res = await fetch(`http://localhost:3000/api/stripe-checkout`, {

            method: "POST",

            body: JSON.stringify({
                userId: userId,
                products: products,
            })
        })

        const data = await res.json();

        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
    }


    return (
        <Link href={"/checkout"} >
            <button onClick={handleCheckout}
                className="bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black w-full">Process to Checkout</button>
        </Link>
    )
}