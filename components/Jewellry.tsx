import jewellry from "@/public/feature.jpg"
import Image from "next/image"
import Link from "next/link"

export default function Jewellry() {
    return (

        <div className='border-4  border-purple-800'>

            <h1 className=" text-5xl text-gray-800 font-bold leading-snug mb-4">Unique and Authentic Vintage Designer Jewellery</h1>
            <div className="flex flex-col justify-around lg:flex-row gap-8">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h1 className="text-2xl font-semibold mb-4">Using Good Quality Materials</h1>
                        <p className="text-xl text-gray-700 ">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold mb-4">100% Handmade Products</h1>
                        <p className="text-xl text-gray-700 ">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold mb-4">Modern Fashion Design</h1>
                        <p className="text-xl text-gray-700 ">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold mb-4">Discount for Bulk Orders</h1>
                        <p className="text-xl text-gray-700 ">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <Image
                        src={jewellry}
                        alt="Jewellery Collection"
                    />
                    <p className="max-w-[100%] text-lg text-[#212121]">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                    <Link href="/products">
                        <button className="bg-black text-white">
                            See All Products
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}