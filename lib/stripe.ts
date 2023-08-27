import { Stripe, loadStripe } from "@stripe/stripe-js"

let stripePromise: Promise<Stripe | null>

export const getStripePromise = () => {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

    if (!stripePromise && key) {
        stripePromise = loadStripe(key);
        return stripePromise;
    } else {
        console.log("Promise or key is undefined or null")
    }
};
