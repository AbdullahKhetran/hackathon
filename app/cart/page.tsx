// "use client"
// import Footer from "@/components/Footer/Footer"
// import Copyright from "@/components/Footer/Copyright"
// import Navbar from "@/components/Navbar/Navbar"
// import { Cart } from "@/lib/drizzle";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { Displayer } from "@/components/Cart/ProductsCard";
// import { EmptyCart, getIdsFromDb, getProductsFromSanity } from "@/components/Cart/utils";
// import { getData } from "@/components/Cart/CartData"
// import { useEffect, useState } from "react"
// import { MyProduct } from "@/types/products";
// // import { reset } from "@/redux/features/cartSlice";

// export default function Home() {

//     const [sanityProducts, setSanityProducts] = useState<MyProduct[]>([]);
//     const [dataFetched, setDataFetched] = useState(false)
//     const [dbData, setDbData] = useState<Cart[]>([])

//     const userid = useAppSelector((state) => state.auth.uid);

//     // const dispatch = useAppDispatch()

//     async function master(data: Cart[]) {
//         try {
//             const ids = getIdsFromDb(data);
//             // console.log("CP: Products ids are", ids);

//             const products = await getProductsFromSanity(ids);
//             // console.log("CP: Products from sanity", products);

//             setSanityProducts(products);
//         } catch (error) {
//             console.error("Error processing data", error);
//         }
//     }

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const uid = userid;
//                 const fetchedData = await getData(uid);
//                 setDataFetched(true)
//                 setDbData(fetchedData)
//                 master(fetchedData); // call master with the fetched data
//             } catch (error) {
//                 console.error("Error fetching data", error);
//             }
//         }

//         fetchData();
//     }, [userid]); // added userid to dependecy array to satisfy eslint

//     return (
//         <div>
//             <Navbar />

//             {/* Page content */}

//             <div className=" my-18 mx-8 md:mx-16 xl:mx-32 px-4 ">
//                 {dataFetched
//                     ? <PageContent dbData={dbData} products={sanityProducts} />
//                     : <LoadingComponent />
//                 }
//             </div>

//             {/* <button onClick={() => dispatch(reset())} className="bg-red-600">
//                 Reset state
//             </button> */}

//             <Footer />
//             <Copyright />
//         </div>
//     )
// }

// type Props = {
//     dbData: Cart[],
//     products: MyProduct[]
// }

// function PageContent({ dbData, products }: Props) {
//     return products.length === 0
//         ? <EmptyCart />
//         : <Displayer dbData={dbData} products={products} />
// }

// function LoadingComponent() {
//     return (
//         <div>Fetching Data ...</div>
//     )
// }



"use client"
import Footer from "@/components/Footer/Footer"
import Copyright from "@/components/Footer/Copyright"
import Navbar from "@/components/Navbar/Navbar"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Displayer } from "@/components/Cart/ProductsCard";
import { EmptyCart, getIdsFromDb, getProductsFromSanity } from "@/components/Cart/utils";
import { getData } from "@/components/Cart/CartData"
import { useEffect, useState } from "react"
import { MyProduct } from "@/types/products";
import { Cart, NewCart } from "@/lib/drizzle";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react"
import Image from "next/image"
import { urlFor } from "@/sanity/sanity-utils"
import { deleteFromCart, increaseQuantity, decreaseQuantity, reset } from "@/redux/features/cartSlice"
import Link from "next/link";
import { handleChange } from "@/lib/utils";



export default function Home() {

    const [sanityProducts, setSanityProducts] = useState<MyProduct[]>([]);
    const [dbData, setDbData] = useState<Cart[]>([])
    const [dataFetched, setDataFetched] = useState(false)
    const [dbProduct, setDbProduct] = useState<Cart>()
    const [refresh, setRefresh] = useState(false)
    const [sanityProductsSet, setSanityProductsSet] = useState(false);

    const [itemQuantity, setItemQuantity] = useState(0)
    const [amount, setAmount] = useState(0)

    const totalAmount = useAppSelector(state => state.cart.totalAmount)
    const totalItems = useAppSelector(state => state.cart.totalQuantity)

    const dispatch = useAppDispatch()


    // Delete request
    type DeleteProductProps = {
        uid: string,
        productId: string
    }

    async function handleDeleteFromCart({ uid, productId }: DeleteProductProps) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart?userid=${uid}&productid=${productId}`, {
            // const res = await fetch(`http://localhost:3000/api/cart?userid=${uid}&productid=${productId}`, {
            method: "DELETE",
        })

        // to refetch data, this is included in useEffect dependency array
        setRefresh(!refresh)

        console.log(res)
        if (!res.ok) {
            throw new Error("Could not remove product")
        }
    }

    const userid = useAppSelector((state) => state.auth.uid);


    async function helper(data: Cart[]) {
        try {
            const ids = getIdsFromDb(data);
            // console.log("CP: Products ids are", ids);

            const products = await getProductsFromSanity(ids);
            // console.log("CP: Products from sanity", products);

            setSanityProducts(products);

        } catch (error) {
            console.error("Error processing data", error);
        }
    }

    function getMatchProduct() {
        const matchedProduct = dbData.find(dbProduct => {
            return sanityProducts.some(sanityProduct => sanityProduct._id === dbProduct.productid)
        })
        // console.log("matched product is", matchedProduct, "type", typeof matchedProduct)
        return matchedProduct
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const uid = userid;
                const fetchedData = await getData(uid);
                setDataFetched(true)
                setDbData(fetchedData)
                await helper(fetchedData); // call helper with the fetched data to set sanity products
                setSanityProductsSet(true)

            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
        fetchData();
        /* eslint-disable */ // to not add userId and other unnecessary details
    }, [refresh]);


    useEffect(() => {
        // Run matchProduct only when sanityProducts are set
        if (sanityProductsSet) {
            const matched = getMatchProduct();
            setDbProduct(matched);
            if (matched) {
                setItemQuantity(matched.quantity)
                setAmount(matched.amount)
            }
        }
    }, [sanityProductsSet]);


    if (!sanityProductsSet) {
        return (
            <div>
                <Navbar />
                <p>Loading...</p>
                <Footer />
                <Copyright />
            </div>
        );
    }

    // When sanityProducts are set and matchedProduct is available
    if (sanityProductsSet && dbProduct) {
        console.log("dbProduct is", dbProduct)

        if (sanityProducts.length === 0) return (
            <div >
                <Navbar />

                <EmptyCart />

                <Footer />
                <Copyright />
            </div>
        )
        else return (
            <div >
                <Navbar />

                <div className=" my-18 mx-8 md:mx-16 xl:mx-32 px-4 ">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* when its flex-row: fix order summary bg */}

                        <div className="flex flex-col gap-4">
                            {/* Generating Prodcut Cards */}
                            {sanityProducts.map((product) => {

                                const cartProduct: NewCart = {
                                    userid: userid,
                                    productid: dbProduct.productid,
                                    quantity: dbProduct.quantity,
                                    price: dbProduct.price,
                                    amount: dbProduct.quantity * product.price,
                                }

                                // for  increasing product
                                const handlePlus = (productId: string) => () => {
                                    dispatch(increaseQuantity(productId)); // updates state
                                    setItemQuantity(itemQuantity + 1) // updates ui
                                    setAmount(amount + dbProduct.price) // updates ui
                                    handleChange({ uid: userid, product: cartProduct, quantity: itemQuantity + 1 }) // updates database
                                };

                                // for decreasing product
                                const handleMinus = (productId: string) => () => {
                                    dispatch(decreaseQuantity(productId)); // updates state
                                    setItemQuantity(itemQuantity - 1); // updates ui
                                    setAmount(amount - dbProduct.price) // updates ui
                                    handleChange({ uid: userid, product: cartProduct, quantity: itemQuantity - 1 }) // updates database
                                };

                                // for removing product
                                const handleDelete = (userid: string, productId: string) => () => {
                                    // updating state
                                    dispatch(deleteFromCart(productId));
                                    // updating database
                                    handleDeleteFromCart({ uid: userid, productId: productId })
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
                                            </div>

                                            <div className="flex flex-col justify-between items-end">

                                                <button onClick={handleDelete(userid, cartProduct.productid)}>
                                                    <Trash2 />
                                                </button>

                                                <div>
                                                    <div className='flex gap-3 items-center'>
                                                        <button
                                                            onClick={handleMinus(cartProduct.productid)}
                                                            disabled={itemQuantity > 1 ? false : true}
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
                </div>

                <Footer />
                <Copyright />
            </div>
        )

    }

    // In case sanityProducts are set but matchedProduct is still undefined
    // TODO display appropraite design
    return (
        <div>
            <Navbar />

            <p>No matched product found.</p>

            <Footer />
            <Copyright />
        </div>
    );

}

