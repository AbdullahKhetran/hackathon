import { Cart } from "@/lib/drizzle"
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react"
import { getIdsFromDb, getProductsFromSanity } from "./utils"
import Image from "next/image"
import { urlFor } from "@/sanity/sanity-utils"


export async function DisplayProducts({ res }: { res: Cart[] }) {
    // const { res } = props
    let productsID = await getIdsFromDb(res)
    let products = await getProductsFromSanity(productsID)

    return (
        <div>
            {products.map((product) => (
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

