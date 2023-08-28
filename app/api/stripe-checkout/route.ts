// import { CombinedProduct } from "@/types/products";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const key = process.env.STRIPE_SECRET_KEY

// const stripe = new Stripe(key!, {
//     apiVersion: "2023-08-16", // version suggested by vscode
// });

// export async function POST(request: NextRequest) {
//     console.log("fetch request received")

//     const products = await request.json();

//     const body = await request.json();
//     console.log("request body is", body)

//     const userId = body.userId

//     const customer = await stripe.customers.create({
//         metadata: {
//             userId: userId
//         }
//     })

//     try {
//         if (products.length > 0 && userId) {

//             const session = await stripe.checkout.sessions.create({

//                 customer: customer.id,

//                 submit_type: "pay",
//                 mode: 'payment',
//                 payment_method_types: ["card"],

//                 billing_address_collection: "auto",
//                 shipping_options: [
//                     { shipping_rate: "shr_1NjlNVKUenJjDyS5cAijrv3u" }, // free one
//                     { shipping_rate: "shr_1NjlOQKUenJjDyS5YK2iwIpU" }, // charged one
//                 ],

//                 line_items: products.map((product: CombinedProduct) => {

//                     return {
//                         price_data: {
//                             currency: "usd",
//                             product_data: {
//                                 name: product.name,
//                                 image: [product.image],
//                             },
//                             unit_amount: product.price * 100,
//                         },
//                         qunatity: product.quantity,
//                         adjustable_quantity: {
//                             enabled: true,
//                             minimum: 1,
//                         },
//                     };
//                 }),


//                 success_url: `${request.headers.get("origin")}/sucess`,
//                 cancel_url: `${request.headers.get("origin")}/cart`

//             })

//             return NextResponse.json({ session }, {
//                 headers: {
//                     'Access-Control-Allow-Origin': origin,
//                     'Content-Type': 'application/json',
//                 }
//             });
//         } else {
//             console.log("No Products found")
//             return NextResponse.json({ message: "No Products Found" });

//         }

//     } catch (error) {
//         console.log("Error from stripe post request", error);
//         return NextResponse.json(error);
//     }

// }

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2023-08-16",
});

export async function POST(request: NextRequest) {
    const params = request.nextUrl.searchParams
    const paramUserId = params.get("userid")

    const body = await request.json();
    console.log(body);
    const customer = await stripe.customers.create({
        metadata: {
            userId: paramUserId,
        },
    })

    try {
        if (body.length > 0 && paramUserId) {

            const session = await stripe.checkout.sessions.create({
                submit_type: "pay",
                mode: "payment",
                payment_method_types: ["card"],
                billing_address_collection: "auto",
                shipping_options: [
                    { shipping_rate: "shr_1NNQEiCWhuWDHCyLI3ZEbn2T" },
                    { shipping_rate: "shr_1NNQdtCWhuWDHCyLVxFex7Oe" },
                ],
                invoice_creation: {
                    enabled: true,
                },

                line_items: body.map((item: any) => {

                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.name,
                                images: [item.image],
                            },
                            unit_amount: item.price * 100,
                        },
                        quantity: item.quantity,
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                            maximum: 10,
                        },
                    };
                }),
                customer: customer.id,
                phone_number_collection: {
                    enabled: true,
                },
                success_url: `${request.headers.get("origin")}/success`,
                cancel_url: `${request.headers.get("origin")}/cart`,
            });
            return NextResponse.json({ session });
        } else {
            return NextResponse.json({ message: "No Data Found" });
        }
    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message);
    }
}