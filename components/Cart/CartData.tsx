"use client"
"use client"
import { Cart } from "@/lib/drizzle";
// import { useAppSelector } from "@/redux/hooks";
// import { Displayer } from "./ProductCard";
// import { getIdsFromDb, getProductsFromSanity } from "./utils";
// import { MyProduct } from "./utils";
// import { getSpecificProduct } from "@/sanity/sanity-utils";

// export default async function CartPage() {

//     // fetching uid from redux
//     const uid = useAppSelector((state) => state.auth.uid);
//     console.log("CP: uid from cartPage", uid)

//     // THIS IS CAUSING INFINITE GET REQUEST
//     // fetching data from api
//     const data = await getData(uid)
//     console.log("CP: data", data)

//     // get Ids
//     const ids = getIdsFromDb(data)
//     console.log("CP: Products ids are", ids)
// import { useAppSelector } from "@/redux/hooks";
// import { Displayer } from "./ProductCard";
// import { getIdsFromDb, getProductsFromSanity } from "./utils";
// import { MyProduct } from "./utils";
// import { getSpecificProduct } from "@/sanity/sanity-utils";

// export default async function CartPage() {

//     // fetching uid from redux
//     const uid = useAppSelector((state) => state.auth.uid);
//     console.log("CP: uid from cartPage", uid)

//     // THIS IS CAUSING INFINITE GET REQUEST
//     // fetching data from api
//     const data = await getData(uid)
//     console.log("CP: data", data)

//     // get Ids
//     const ids = getIdsFromDb(data)
//     console.log("CP: Products ids are", ids)

//     // get products from sanity
//     const sanityProducts: MyProduct[] = await getProductsFromSanity(ids);
//     console.log("CP: Products from sanity", sanityProducts)
//     // get products from sanity
//     const sanityProducts: MyProduct[] = await getProductsFromSanity(ids);
//     console.log("CP: Products from sanity", sanityProducts)

//     return (
//         <div className=" my-18 mx-8 md:mx-16 xl:mx-32 px-4 ">
//     return (
//         <div className=" my-18 mx-8 md:mx-16 xl:mx-32 px-4 ">

//             <h1 className="font-bold text-2xl">Shopping Cart</h1>
//             <h1 className="font-bold text-2xl">Shopping Cart</h1>

//             {/* <Displayer products={sanityProducts} /> */}
//             {/* <Displayer products={sanityProducts} /> */}

//             {/* {ids} */}
//             {/* {ids} */}

//         </div>
//     )
// }
//         </div>
//     )
// }



export async function getData(uid: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart?userid=${uid}`)
    // const res = await fetch(`http://localhost:3000/api/cart?userid=${uid}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        const dataPromises: Promise<Cart[]> = res.json();
        const data: Cart[] = await dataPromises;
        const dataPromises: Promise<Cart[]> = res.json();
        const data: Cart[] = await dataPromises;

        return data
        return data
    }
