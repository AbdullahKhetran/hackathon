import { Cart } from "@/lib/drizzle"
import { getSpecificProduct } from "@/sanity/sanity-utils"
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cartData } from "./CartData"
import image from "@/public/product.png"
import { getIdsFromDb, getProductsFromSanity } from "./utils"
import { urlFor } from "@/sanity/sanity-utils"
import { EmptyCart } from "./CartData"


export async function ProductCard(item: Cart) {

    const res = await cartData() // an array
    const data = res[1]

    const product = await getSpecificProduct(data.productid) // object returned

    const imageUrl = urlFor(product.image).url()
    return (
        <div className="mx-14 xl:mx-36">
            {/* Post request krte hue product id bhi bheje (isko sanity ke product .slug.current ke equal rkhte hain. basically db ki item ki product id sanity ke item ka slug hoga. In dono ko match krte hain) */}
            <div className="flex flex-col gap-8">
                <Image
                    src={image}
                    alt="Product image"
                    width={200}
                    height={200}
                    className="rounded-3xl"

                />
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between gap-1 text-lg">
                        <h1 className="text-darkGray text-2xl font-light">Raglan Sweatshitrt</h1>
                        <h2 className="text-productSubtitle text-base font-semibold">Dress</h2>
                        <h2 className="text-darkGray font-semibold">Delivery Estimation</h2>
                        <p className="text-yellow-400 font-semibold">5 Working Days</p>
                        <h2 className="text-darkGray font-bold tracking-wide">$390</h2>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                        <button>
                            <Trash2 />
                        </button>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <button className='bg-[#f1f1f1] rounded-full p-1'>
                                    <MinusIcon size={16} />
                                </button>
                                <h2>1</h2>
                                <button className='border-2 border-black rounded-full p-1'>
                                    <PlusIcon size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <h1>Order Summary</h1>
                <div>
                    <h2>Quantity </h2>
                    <h2>1</h2>
                </div>
                <div>
                    <h2>Sub Total</h2>
                    <h2>{parseFloat("390") * 1}</h2>
                    {/* <h2>{product.price}</h2> */}
                </div>
                <Link href={"/checkout"}>
                    <button disabled={true} className="bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black">Process to Checkout</button>
                </Link>
            </div>
        </div>
    )
}


export async function DisplayProducts({ res }: { res: Cart[] }) {
    // const { res } = props
    let productsID = await getIdsFromDb(res)
    let products = await getProductsFromSanity(productsID)

    return (
        <div>
            {products.map((product) => (
                // <h1 key={product._id}>{product.price}</h1>
                <div key={product._id} className="flex flex-col gap-8">
                    <Image
                        src={urlFor(product.image).url()}
                        alt="Product image"
                        width={200}
                        height={200}
                        className="rounded-3xl"

                    />
                    <div className="flex justify-between">

                        <div className="flex flex-col justify-between gap-1 text-lg">
                            <h1 className="text-darkGray text-2xl font-light">{product.name}</h1>
                            <h2 className="text-productSubtitle text-base font-semibold">{product.category}</h2>
                            <h2 className="text-darkGray font-semibold">Delivery Estimation</h2>
                            <p className="text-yellow-400 font-semibold">5 Working Days</p>
                            <h2 className="text-darkGray font-bold tracking-wide">{product.price}</h2>
                        </div>

                        <div className="flex flex-col justify-between items-end">
                            <button>
                                <Trash2 />
                            </button>
                            <div>
                                <div className='flex gap-3 items-center'>
                                    <button className='bg-[#f1f1f1] rounded-full p-1'>
                                        <MinusIcon size={16} />
                                    </button>
                                    <h2>1</h2>
                                    <button className='border-2 border-black rounded-full p-1'>
                                        <PlusIcon size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

