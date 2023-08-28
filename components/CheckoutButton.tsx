import { getStripePromise } from "@/lib/stripe";
import { useAppSelector } from "@/redux/hooks";
import { CombinedProduct } from "@/types/products";

type Props = {
    products: CombinedProduct[]
}

export default function StripeCheckoutButton({ products }: Props) {

    const userId = useAppSelector(state => state.auth.uid)

    // const handleCheckout = async () => {

    //     const stripe = await getStripePromise();

    //     const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/stripe-checkout`, {
    //         // const res = await fetch(`http://localhost:3000/api/stripe-checkout`, {

    //         method: "POST",

    //         body: JSON.stringify({
    //             userId: userId,
    //             products: products,
    //         })
    //     })

    //     const data = await res.json();

    //     if (data.session) {
    //         stripe?.redirectToCheckout({ sessionId: data.session.id });
    //     }
    // }

    const handleCheckout = async () => {
        const stripe = await getStripePromise();
        const response = await fetch("/api/stripe-session/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            cache: "no-cache",
            body: JSON.stringify(products),
        });

        const data = await response.json();

        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
    };


    return (

        <button onClick={handleCheckout}
            className="bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black w-full">Process to Checkout
        </button>

    )
}