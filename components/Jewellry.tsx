import jewellry from "@/public/feature.jpg"
import Image from "next/image"
import Link from "next/link"

export default function Jewellry() {
    return (

        <div className='border-4  border-purple-800'>

            <h1 className=" text-4xl font-bold">Unique and Authentic Vintage Designer Jewellery</h1>
            <div className="grid">
                <div >
                    <h1 className="text-xl font-bold">Using Good Quality Materials</h1>
                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold">100% Handmade Products</h1>
                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Modern Fashion Design</h1>
                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Discount for Bulk Orders</h1>
                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div>
                {/* check whether this is the right image */}
                <Image
                    src={jewellry}
                    alt="Jewellery Collection"
                />
                <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>


                <Link href="/products">
                    <button className="bg-black text-white">
                        See All Products
                    </button>
                </Link>
            </div>
        </div>
    )
}